const { createReadStream, renameSync } = require('fs');
const { parse } = require('path');
const multiparty = require('multiparty');
const prisma = require('@/app/libs/prismadb');

export const config = {
  api: {
    bodyParser: false, // Mematikan built-in body parsing agar bisa menggunakan multiparty
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = new multiparty.Form();

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error('Error parsing form data:', err);
        return res.status(500).json({ message: 'Gagal membuat Tour' });
      }

      const { tourName, location, description, capacity, price, duration } = fields;
      const image = files.image?.[0]; // Ambil file gambar pertama (jika ada)

      if (!image) {
        return res.status(400).json({ message: 'Gambar tidak ditemukan' });
      }

      // Simpan gambar ke direktori yang sesuai
      const { originalFilename, path: tempPath } = image;
      const { dir: tempDir, name: tempName, ext: tempExt } = parse(tempPath);
      const targetPath = parse(path.join(process.cwd(), 'public/images', originalFilename));

      renameSync(tempPath, path.format(targetPath));

      try {
        // Simpan objek Tour ke database menggunakan Prisma
        const newTour = await prisma.tour.create({
          data: {
            tourName,
            location,
            description,
            capacity: parseInt(capacity),
            price: parseFloat(price),
            duration,
            image: `/images/${originalFilename}`,
          },
        });

        res.status(200).json({ message: 'Tour berhasil dibuat', tour: newTour });
      } catch (error) {
        console.error('Terjadi kesalahan:', error);
        res.status(500).json({ message: 'Gagal membuat Tour' });
      }
    });
  } else {
    res.status(405).json({ message: 'Metode tidak diizinkan' });
  }
}

import prisma from '@/app/libs/prismadb';

export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { tourName, location, description, capacity, price, itinerary, note, imageSrc } = req.body;

      const newTour = await prisma.tour.create({
        data: {
          tourName,
          location,
          description,
          capacity: parseInt(capacity),
          price: parseInt(price),
          itinerary,
          note,
          imageSrc,
        },
      });

      res.status(200).json({ message: 'Tour berhasil dibuat', tour: newTour });
    } catch (error) {
      if (error.code === 'P2002' && error.meta?.target?.includes('tourName')) {
        // Duplicate unique value for 'tourName'
        return res.status(400).json({ message: 'Tour dengan nama tersebut sudah ada' });
      }
      console.error('Terjadi kesalahan:', error);
      return res.status(500).json({ message: 'Gagal membuat Tour' });
    }
  } else {
    res.status(405).json({ message: 'Metode tidak diizinkan' });
  }
}

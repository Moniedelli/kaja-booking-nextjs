import prisma from '@/app/libs/prismadb';

export default async function handler(req, res) {
  if (req.method !== 'PATCH') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const tourId = parseInt(req.query.id);

  try {
    // Fetch the existing tour data
    const existingUser= await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!existingUser) {
      return res.status(404).json({ error: 'User admin not found' });
    }

    const updatedTour = await prisma.user.update({
      where: { id: tourId },
      data: {
        name: req.body.name || existingUser.name,
        email: req.body.email || existingUser.email,
        status: req.body.status || existingUser.status,
      },
    });

    return res.status(200).json({ message: 'User admin updated successfully', data: updatedTour });
  } catch (error) {
    console.error('Error updating tour:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

import prisma from '@/app/libs/prismadb';

export default async function handler(req, res) {
  if (req.method !== 'PATCH') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const tourId = parseInt(req.query.id);

  try {
    // Fetch the existing tour data
    const existingTour = await prisma.tour.findUnique({
      where: { id: tourId },
    });

    // Check if the tour exists
    if (!existingTour) {
      return res.status(404).json({ error: 'Tour not found' });
    }

    // Update the tour with the new data
    const updatedTour = await prisma.tour.update({
      where: { id: tourId },
      data: {
        tourName: req.body.tourName || existingTour.tourName,
        location: req.body.location || existingTour.location,
        description: req.body.description || existingTour.description,
        capacity: req.body.capacity || existingTour.capacity,
        price: req.body.price || existingTour.price,
        duration: req.body.duration || existingTour.duration,
        detailDescription: req.body.detailDescription || existingTour.detailDescription,
        detailInfo: req.body.detailInfo || existingTour.detailInfo,
        note: req.body.note || existingTour.note,
        itinerary: req.body.itinerary || existingTour.itinerary,
        include: req.body.include || existingTour.include,
        exclude: req.body.exclude || existingTour.exclude,
        imageSrc: req.body.imageSrc || existingTour.imageSrc,
      },
    });

    return res.status(200).json({ message: 'Tour updated successfully', data: updatedTour });
  } catch (error) {
    console.error('Error updating tour:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

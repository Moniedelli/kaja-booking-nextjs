import prisma from "@/app/libs/prismadb";

export default async function getTours(params) {
  try {
    const {
      tourName,
      location,
      description,
      capacity,
      price,
      duration,
      image,
      createdAt,
      updatedAt,
    } = params;

    let query = {};

    if (tourName) {
      query.tourName = tourName;
    }

    if (location) {
      query.location = location;
    }

    if (description) {
      query.description = {
        contains: description,
      };
    }

    if (capacity) {
      query.capacity = {
        gte: +capacity,
      };
    }

    if (price) {
      query.price = {
        gte: +price,
      };
    }

    if (duration) {
      query.duration = duration;
    }

    if (image) {
      query.image = image;
    }

    if (createdAt && updatedAt) {
      query.reservations = {
        none: {
          AND: [
            { updatedAt: { gte: createdAt } },
            { createdAt: { lte: createdAt } },
          ],
        },
        OR: [
          { createdAt: { lte: updatedAt } },
          { updatedAt: { gte: updatedAt } },
        ],
      };
    }

    const tours = await prisma.tour.findMany({
      where: query,
      orderBy: {
        createdAt: 'desc',
      },
    });

    const safeTours = tours.map((tour) => ({
      ...tour,
      createdAt: tour.createdAt.toISOString(),
      updatedAt: tour.updatedAt.toISOString(),
    }));

    return safeTours;
  } catch (error) {
    throw new Error(error);
  }
}

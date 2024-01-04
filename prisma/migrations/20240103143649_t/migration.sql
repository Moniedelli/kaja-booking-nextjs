/*
  Warnings:

  - You are about to drop the column `itineraryDescription` on the `Tour` table. All the data in the column will be lost.
  - You are about to drop the column `itineraryTime` on the `Tour` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Tour" DROP COLUMN "itineraryDescription",
DROP COLUMN "itineraryTime";

-- CreateTable
CREATE TABLE "Itinerary" (
    "id" SERIAL NOT NULL,
    "tourId" INTEGER NOT NULL,
    "time" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Itinerary_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Itinerary" ADD CONSTRAINT "Itinerary_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

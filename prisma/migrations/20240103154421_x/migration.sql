/*
  Warnings:

  - You are about to drop the `Itinerary` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `itinerary` to the `Tour` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Itinerary" DROP CONSTRAINT "Itinerary_tourId_fkey";

-- AlterTable
ALTER TABLE "Tour" ADD COLUMN     "itinerary" TEXT NOT NULL;

-- DropTable
DROP TABLE "Itinerary";

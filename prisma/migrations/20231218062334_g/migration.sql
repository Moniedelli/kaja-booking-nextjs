/*
  Warnings:

  - You are about to drop the column `detailLocation` on the `TourDetail` table. All the data in the column will be lost.
  - Added the required column `detailDescription` to the `TourDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `itinerary` to the `TourDetail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TourDetail" DROP COLUMN "detailLocation",
ADD COLUMN     "detailDescription" TEXT NOT NULL,
ADD COLUMN     "exclude" TEXT,
ADD COLUMN     "include" TEXT,
ADD COLUMN     "itinerary" TEXT NOT NULL,
ALTER COLUMN "detailInfo" DROP NOT NULL,
ALTER COLUMN "note" DROP NOT NULL;

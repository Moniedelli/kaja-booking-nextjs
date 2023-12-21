/*
  Warnings:

  - The `imageSrc` column on the `Tour` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `TourDetail` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TourDetail" DROP CONSTRAINT "TourDetail_tourId_fkey";

-- AlterTable
ALTER TABLE "Tour" ADD COLUMN     "detailDescription" TEXT,
ADD COLUMN     "detailInfo" TEXT,
ADD COLUMN     "exclude" TEXT,
ADD COLUMN     "include" TEXT,
ADD COLUMN     "itinerary" TEXT,
ADD COLUMN     "note" TEXT,
DROP COLUMN "imageSrc",
ADD COLUMN     "imageSrc" TEXT[];

-- DropTable
DROP TABLE "TourDetail";

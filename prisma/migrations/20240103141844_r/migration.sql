/*
  Warnings:

  - You are about to drop the column `description` on the `Tour` table. All the data in the column will be lost.
  - You are about to drop the column `detailDescription` on the `Tour` table. All the data in the column will be lost.
  - You are about to drop the column `detailInfo` on the `Tour` table. All the data in the column will be lost.
  - You are about to drop the column `duration` on the `Tour` table. All the data in the column will be lost.
  - You are about to drop the column `exclude` on the `Tour` table. All the data in the column will be lost.
  - You are about to drop the column `include` on the `Tour` table. All the data in the column will be lost.
  - You are about to drop the column `itinerary` on the `Tour` table. All the data in the column will be lost.
  - Added the required column `itineraryDescription` to the `Tour` table without a default value. This is not possible if the table is not empty.
  - Added the required column `itineraryTime` to the `Tour` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tour" DROP COLUMN "description",
DROP COLUMN "detailDescription",
DROP COLUMN "detailInfo",
DROP COLUMN "duration",
DROP COLUMN "exclude",
DROP COLUMN "include",
DROP COLUMN "itinerary",
ADD COLUMN     "itineraryDescription" TEXT NOT NULL,
ADD COLUMN     "itineraryTime" TEXT NOT NULL,
ALTER COLUMN "capacity" DROP NOT NULL;

/*
  Warnings:

  - You are about to alter the column `price` on the `Tour` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Tour" ALTER COLUMN "price" SET DATA TYPE INTEGER;

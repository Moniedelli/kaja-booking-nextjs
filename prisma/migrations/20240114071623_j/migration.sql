/*
  Warnings:

  - You are about to drop the column `capacity` on the `Tour` table. All the data in the column will be lost.
  - You are about to drop the column `emailVerified` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `payment_method` on the `transactions` table. All the data in the column will be lost.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `hashedPassword` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phoneNumber` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `transactions` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `transactions` required. This step will fail if there are existing NULL values in that column.
  - Made the column `booking_date` on table `transactions` required. This step will fail if there are existing NULL values in that column.
  - Made the column `quantity` on table `transactions` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Tour" DROP COLUMN "capacity";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "emailVerified",
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "hashedPassword" SET NOT NULL,
ALTER COLUMN "phoneNumber" SET NOT NULL;

-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "payment_method",
ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL,
ALTER COLUMN "booking_date" SET NOT NULL,
ALTER COLUMN "quantity" SET NOT NULL;

/*
  Warnings:

  - You are about to drop the `RatingReview` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'USER');

-- DropForeignKey
ALTER TABLE "RatingReview" DROP CONSTRAINT "RatingReview_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'USER';

-- AlterTable
ALTER TABLE "transactions" ALTER COLUMN "snap_token" SET DATA TYPE TEXT,
ALTER COLUMN "snap_redirect_url" SET DATA TYPE TEXT,
ALTER COLUMN "payment_method" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "RatingReview";

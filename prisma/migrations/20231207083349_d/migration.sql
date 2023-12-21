/*
  Warnings:

  - You are about to drop the column `address` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `additional_notes` on the `transactions` table. All the data in the column will be lost.
  - Added the required column `customer_email` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customer_name` to the `transactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "address";

-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "additional_notes",
ADD COLUMN     "customer_email" VARCHAR(255) NOT NULL,
ADD COLUMN     "customer_name" VARCHAR(255) NOT NULL;

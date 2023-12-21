/*
  Warnings:

  - You are about to drop the column `transactionId` on the `transactions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "transactionId",
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "transactions_id_seq";

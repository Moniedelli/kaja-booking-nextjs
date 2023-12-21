/*
  Warnings:

  - You are about to drop the column `customer_email` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `customer_name` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the `transactions_items` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `tourId` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transactionId` to the `transactions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "transactions_items" DROP CONSTRAINT "transactions_items_ibfk_1";

-- DropForeignKey
ALTER TABLE "transactions_items" DROP CONSTRAINT "transactions_items_ibfk_2";

-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "customer_email",
DROP COLUMN "customer_name",
ADD COLUMN     "booking_date" TIMESTAMP(3),
ADD COLUMN     "quantity" INTEGER,
ADD COLUMN     "tourId" INTEGER NOT NULL,
ADD COLUMN     "transactionId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "transactions_items";

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

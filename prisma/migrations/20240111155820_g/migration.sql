/*
  Warnings:

  - You are about to drop the column `snap_redirect_url` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `snap_token` on the `transactions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "snap_redirect_url",
DROP COLUMN "snap_token";

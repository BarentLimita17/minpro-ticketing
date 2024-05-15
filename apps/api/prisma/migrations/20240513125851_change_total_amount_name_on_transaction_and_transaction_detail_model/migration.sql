/*
  Warnings:

  - You are about to drop the column `totalAmount` on the `transaction` table. All the data in the column will be lost.
  - You are about to drop the column `totalAmount` on the `transactiondetail` table. All the data in the column will be lost.
  - Added the required column `totalTransactionAmount` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalTicketAmount` to the `TransactionDetail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `transaction` DROP COLUMN `totalAmount`,
    ADD COLUMN `totalTransactionAmount` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `transactiondetail` DROP COLUMN `totalAmount`,
    ADD COLUMN `totalTicketAmount` INTEGER NOT NULL;

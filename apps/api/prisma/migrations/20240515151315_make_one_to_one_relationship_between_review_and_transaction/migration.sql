/*
  Warnings:

  - A unique constraint covering the columns `[transactionId]` on the table `Review` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `transactionId` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `review` ADD COLUMN `transactionId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Review_transactionId_key` ON `Review`(`transactionId`);

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `Review_transactionId_fkey` FOREIGN KEY (`transactionId`) REFERENCES `Transaction`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

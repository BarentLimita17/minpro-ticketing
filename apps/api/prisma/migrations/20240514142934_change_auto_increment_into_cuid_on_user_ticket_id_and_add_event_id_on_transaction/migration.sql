/*
  Warnings:

  - The primary key for the `userticket` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `eventId` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `transaction` ADD COLUMN `eventId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `userticket` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `Event`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `isFree` on the `event` table. All the data in the column will be lost.
  - You are about to drop the column `promotionId` on the `userticket` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `userticket` DROP FOREIGN KEY `UserTicket_promotionId_fkey`;

-- AlterTable
ALTER TABLE `event` DROP COLUMN `isFree`;

-- AlterTable
ALTER TABLE `userticket` DROP COLUMN `promotionId`;

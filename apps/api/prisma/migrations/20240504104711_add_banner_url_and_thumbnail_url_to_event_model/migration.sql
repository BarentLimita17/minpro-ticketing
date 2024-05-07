/*
  Warnings:

  - You are about to drop the column `url` on the `event` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `event` DROP COLUMN `url`,
    ADD COLUMN `bannerUrl` VARCHAR(191) NULL,
    ADD COLUMN `thumbnailUrl` VARCHAR(191) NULL;

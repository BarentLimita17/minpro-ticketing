/*
  Warnings:

  - You are about to drop the column `referralId` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `referral` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[code]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `code` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_referralId_fkey`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `referralId`,
    ADD COLUMN `code` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `referral`;

-- CreateIndex
CREATE UNIQUE INDEX `User_code_key` ON `User`(`code`);

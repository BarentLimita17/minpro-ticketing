/*
  Warnings:

  - You are about to drop the column `code` on the `user` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `User_code_key` ON `user`;

-- AlterTable
ALTER TABLE `referral` MODIFY `expiryDate` DATE NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `code`;

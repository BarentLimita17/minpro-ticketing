/*
  Warnings:

  - Added the required column `city` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `details` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zipCode` to the `Location` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `location` ADD COLUMN `city` VARCHAR(45) NOT NULL,
    ADD COLUMN `details` VARCHAR(255) NOT NULL,
    ADD COLUMN `street` VARCHAR(45) NOT NULL,
    ADD COLUMN `zipCode` VARCHAR(45) NOT NULL;

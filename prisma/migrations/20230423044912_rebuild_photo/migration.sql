/*
  Warnings:

  - You are about to drop the column `hashtagId` on the `Photo` table. All the data in the column will be lost.
  - You are about to drop the `Hashtag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Photo" DROP CONSTRAINT "Photo_hashtagId_fkey";

-- AlterTable
ALTER TABLE "Photo" DROP COLUMN "hashtagId";

-- DropTable
DROP TABLE "Hashtag";

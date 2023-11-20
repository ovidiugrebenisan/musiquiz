/*
  Warnings:

  - You are about to drop the column `answers` on the `ArtistQuiz` table. All the data in the column will be lost.
  - You are about to drop the column `question` on the `ArtistQuiz` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ArtistQuiz" DROP COLUMN "answers",
DROP COLUMN "question";

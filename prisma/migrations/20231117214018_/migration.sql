/*
  Warnings:

  - You are about to drop the column `one_artist_question_remaining` on the `UserQuiz` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserQuiz" DROP COLUMN "one_artist_question_remaining",
ADD COLUMN     "artist_quiz_active" BOOLEAN NOT NULL DEFAULT false;

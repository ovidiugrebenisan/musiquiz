/*
  Warnings:

  - Added the required column `one_artist_question_remaining` to the `UserQuiz` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserQuiz" ADD COLUMN     "one_artist_question_remaining" BOOLEAN NOT NULL;

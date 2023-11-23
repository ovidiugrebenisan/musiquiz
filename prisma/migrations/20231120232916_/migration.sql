/*
  Warnings:

  - You are about to drop the column `active_artist_quiz_type` on the `UserQuiz` table. All the data in the column will be lost.
  - You are about to drop the column `chosen_random_artist_quizzes` on the `UserQuiz` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserQuiz" DROP COLUMN "active_artist_quiz_type",
DROP COLUMN "chosen_random_artist_quizzes";

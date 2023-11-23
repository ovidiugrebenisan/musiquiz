/*
  Warnings:

  - You are about to drop the column `active_artist_quiz_type` on the `UserQuiz` table. All the data in the column will be lost.
  - You are about to drop the column `chosen_random_artist_quizzes` on the `UserQuiz` table. All the data in the column will be lost.
  - Added the required column `question` to the `ArtistQuiz` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sendable` to the `ArtistQuiz` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ArtistQuiz" ADD COLUMN     "answers" TEXT[],
ADD COLUMN     "question" TEXT NOT NULL,
ADD COLUMN     "sendable" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "UserQuiz" DROP COLUMN "active_artist_quiz_type",
DROP COLUMN "chosen_random_artist_quizzes";

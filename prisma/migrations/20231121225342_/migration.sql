/*
  Warnings:

  - The primary key for the `ArtistQuiz` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `ArtistQuiz` table. All the data in the column will be lost.
  - You are about to drop the column `sendable` on the `ArtistQuiz` table. All the data in the column will be lost.
  - The `id` column on the `ArtistQuiz` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "ArtistQuiz" DROP CONSTRAINT "ArtistQuiz_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "sendable",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "answers" SET NOT NULL,
ALTER COLUMN "answers" SET DATA TYPE TEXT,
ADD CONSTRAINT "ArtistQuiz_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "UserQuiz" ADD COLUMN     "active_artist_quiz_type" TEXT[],
ADD COLUMN     "chosen_random_artist_quizzes" TEXT[];

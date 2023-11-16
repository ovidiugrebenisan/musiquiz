/*
  Warnings:

  - The primary key for the `ArtistQuiz` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `artist_quiz` on the `ArtistQuiz` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `ArtistQuiz` table. All the data in the column will be lost.
  - Added the required column `correct_answer` to the `ArtistQuiz` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `ArtistQuiz` table without a default value. This is not possible if the table is not empty.
  - Added the required column `question` to the `ArtistQuiz` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ArtistQuiz" DROP CONSTRAINT "ArtistQuiz_pkey",
DROP COLUMN "artist_quiz",
DROP COLUMN "user_id",
ADD COLUMN     "answers" TEXT[],
ADD COLUMN     "correct_answer" TEXT NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "question" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT,
ADD CONSTRAINT "ArtistQuiz_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "UserQuiz" (
    "user_id" TEXT NOT NULL,

    CONSTRAINT "UserQuiz_pkey" PRIMARY KEY ("user_id")
);

-- AddForeignKey
ALTER TABLE "ArtistQuiz" ADD CONSTRAINT "ArtistQuiz_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserQuiz"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

/*
  Warnings:

  - The primary key for the `ArtistQuiz` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "ArtistQuiz" DROP CONSTRAINT "ArtistQuiz_pkey",
ALTER COLUMN "user_id" DROP DEFAULT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "ArtistQuiz_pkey" PRIMARY KEY ("user_id");
DROP SEQUENCE "ArtistQuiz_user_id_seq";

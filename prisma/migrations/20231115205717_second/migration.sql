/*
  Warnings:

  - The primary key for the `ArtistQuiz` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `used_id` on the `ArtistQuiz` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ArtistQuiz" DROP CONSTRAINT "ArtistQuiz_pkey",
DROP COLUMN "used_id",
ADD COLUMN     "user_id" SERIAL NOT NULL,
ADD CONSTRAINT "ArtistQuiz_pkey" PRIMARY KEY ("user_id");

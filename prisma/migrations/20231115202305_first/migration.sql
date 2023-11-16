-- CreateTable

CREATE TABLE "ArtistQuiz" (
    "used_id" SERIAL NOT NULL,
    "artist_quiz" JSONB,

    CONSTRAINT "ArtistQuiz_pkey" PRIMARY KEY ("used_id")
);

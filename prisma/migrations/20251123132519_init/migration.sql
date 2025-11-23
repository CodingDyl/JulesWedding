-- CreateTable
CREATE TABLE "rsvps" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "attending" VARCHAR(10) NOT NULL,
    "dietary" TEXT,
    "message" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "rsvps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "guests" (
    "id" SERIAL NOT NULL,
    "rsvp_id" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "dietary" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "guests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "songs" (
    "id" SERIAL NOT NULL,
    "song_title" VARCHAR(255) NOT NULL,
    "artist" VARCHAR(255) NOT NULL,
    "submitted_by" VARCHAR(255),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "songs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "rsvps_email_idx" ON "rsvps"("email");

-- CreateIndex
CREATE INDEX "rsvps_created_at_idx" ON "rsvps"("created_at");

-- CreateIndex
CREATE INDEX "guests_rsvp_id_idx" ON "guests"("rsvp_id");

-- CreateIndex
CREATE INDEX "songs_created_at_idx" ON "songs"("created_at");

-- AddForeignKey
ALTER TABLE "guests" ADD CONSTRAINT "guests_rsvp_id_fkey" FOREIGN KEY ("rsvp_id") REFERENCES "rsvps"("id") ON DELETE CASCADE ON UPDATE CASCADE;

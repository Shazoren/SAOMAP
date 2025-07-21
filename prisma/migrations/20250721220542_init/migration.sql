-- CreateTable
CREATE TABLE "Waypoint" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "x" INTEGER NOT NULL,
    "y" INTEGER NOT NULL,
    "gameCoords" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "Waypoint_pkey" PRIMARY KEY ("id")
);

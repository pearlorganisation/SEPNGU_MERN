/*
  Warnings:

  - The primary key for the `Notification` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `isRead` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Notification` table. All the data in the column will be lost.
  - The `id` column on the `Notification` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_pkey",
DROP COLUMN "isRead",
DROP COLUMN "type",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Notification_pkey" PRIMARY KEY ("id");

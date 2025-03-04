/*
  Warnings:

  - You are about to drop the column `price` on the `Plan` table. All the data in the column will be lost.
  - Added the required column `basePrice` to the `Plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `finalPrice` to the `Plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gst` to the `Plan` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Subscription" DROP CONSTRAINT "Subscription_planId_fkey";

-- AlterTable
ALTER TABLE "Plan" DROP COLUMN "price",
ADD COLUMN     "basePrice" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "finalPrice" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "gst" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Subscription" ALTER COLUMN "planId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("planId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "list" (
    "list_id" SERIAL NOT NULL,
    "plan_id" INTEGER,
    "produce_id" INTEGER,

    CONSTRAINT "list_pkey" PRIMARY KEY ("list_id")
);

-- CreateTable
CREATE TABLE "plans" (
    "plan_id" SERIAL NOT NULL,
    "plan_name" VARCHAR(144),
    "price_per_month" INTEGER,

    CONSTRAINT "plan_pkey" PRIMARY KEY ("plan_id")
);

-- CreateTable
CREATE TABLE "produce" (
    "produce_id" SERIAL NOT NULL,
    "category" VARCHAR(144),
    "produce_name" VARCHAR,
    "weight" INTEGER,

    CONSTRAINT "produce_pkey" PRIMARY KEY ("produce_id")
);

-- CreateTable
CREATE TABLE "users" (
    "user_id" SERIAL NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" VARCHAR(25) NOT NULL,
    "street_name" VARCHAR NOT NULL,
    "unit_no" VARCHAR,
    "postal_code" VARCHAR(6) NOT NULL,
    "plan_id" INTEGER,

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "list" ADD CONSTRAINT "fk_plan" FOREIGN KEY ("plan_id") REFERENCES "plans"("plan_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "list" ADD CONSTRAINT "fk_produce" FOREIGN KEY ("produce_id") REFERENCES "produce"("produce_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "fk_plan" FOREIGN KEY ("plan_id") REFERENCES "plans"("plan_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

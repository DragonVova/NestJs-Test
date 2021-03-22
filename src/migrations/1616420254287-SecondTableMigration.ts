import {MigrationInterface, QueryRunner} from "typeorm";

export class SecondTableMigration1616420254287 implements MigrationInterface {
    name = 'SecondTableMigration1616420254287'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "enterprice" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "year" integer NOT NULL, "quantity" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d5ea28a001a464f4b6ea88faba6" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "enterprice"`);
    }

}

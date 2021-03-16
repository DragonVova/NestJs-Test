import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialMigration1615828291179 implements MigrationInterface {
  name = 'InitialMigration1615828291179';

  public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "age" integer NOT NULL, "height" integer, "description" text, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
  }
}

CREATE TABLE IF NOT EXISTS "usuarios" (
	"id" serial NOT NULL UNIQUE,
	"nome" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "pi" (
	"id" serial NOT NULL UNIQUE,
	"tipo" varchar(255) NOT NULL,
	"titulo" varchar(255) NOT NULL UNIQUE,
	"protocolo" varchar(255) NOT NULL,
	"termo_de_cessao" boolean NOT NULL,
	"depositante" varchar(255) NOT NULL,
	"status" varchar(255) NOT NULL,
	"nome_do_parceiro" varchar(255),
	"data_de_entrada" date,
	"sei" varchar(255) NOT NULL,
	"data_de_registro" date NOT NULL,
	"titular" varchar(255) NOT NULL,
	"responsavel" varchar(255) NOT NULL,
	"telefone" varchar(255) NOT NULL,
	"endereco" varchar(255) NOT NULL,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "pagamentos" (
	"id" serial NOT NULL UNIQUE,
	"pi_id" bigint NOT NULL,
	"tipo_de_pagamento" varchar(255) NOT NULL,
	"data_de_vencimento" date NOT NULL,
	"valor" double precision NOT NULL,
	"observacao" varchar(255) NOT NULL,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "controle_processos" (
	"id" serial NOT NULL UNIQUE,
	"pi_id" bigint NOT NULL,
	"numero_processo" varchar(255) NOT NULL UNIQUE,
	"data_criacao" date NOT NULL,
	"assunto" varchar(255) NOT NULL UNIQUE,
	"situacao" varchar(255) NOT NULL,
	"obs" varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS "RPI" (
	"id" serial NOT NULL UNIQUE,
	"data" date NOT NULL,
	"pi_id" bigint NOT NULL,
	"codigo_evento" double precision NOT NULL,
	"tipo_de_evento" varchar(255) NOT NULL,
	"descricao_do_evento" varchar(255),
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "indicadores_anuais" (
	"id" serial NOT NULL UNIQUE,
	"ano" date NOT NULL,
	"tipo_pi" varchar(255) NOT NULL,
	"quantidade_total" bigint NOT NULL,
	"origem" varchar(255) NOT NULL,
	"tipo_de_incador" varchar(255) NOT NULL,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "autor" (
	"id" serial NOT NULL UNIQUE,
	"nome" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"vinculo" varchar(255) NOT NULL,
	"departamento" varchar(255) NOT NULL,
	"campus" varchar(255) NOT NULL,
	"universidade" varchar(255) NOT NULL,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "autor_pi" (
	"pi_id" bigint NOT NULL,
	"autor_id" bigint NOT NULL
);



ALTER TABLE "pagamentos" ADD CONSTRAINT "pagamentos_fk1" FOREIGN KEY ("pi_id") REFERENCES "pi"("id");
ALTER TABLE "controle_processos" ADD CONSTRAINT "controle_processos_fk1" FOREIGN KEY ("pi_id") REFERENCES "pi"("id");
ALTER TABLE "RPI" ADD CONSTRAINT "RPI_fk2" FOREIGN KEY ("pi_id") REFERENCES "pi"("id");


ALTER TABLE "autor_pi" ADD CONSTRAINT "autor_pi_fk0" FOREIGN KEY ("pi_id") REFERENCES "autor"("id");

ALTER TABLE "autor_pi" ADD CONSTRAINT "autor_pi_fk1" FOREIGN KEY ("autor_id") REFERENCES "pi"("id");
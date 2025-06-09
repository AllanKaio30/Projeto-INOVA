CREATE TABLE IF NOT EXISTS "usuarios" (
	"id" serial NOT NULL UNIQUE,
	"nome" varchar(255) NOT NULL,
	"telefone" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"genero" varchar(255) NOT NULL,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "pi" (
	"id" serial NOT NULL UNIQUE,
	"tipo_de_pi/patente" varchar(255) NOT NULL,
	"titulo" varchar(255) NOT NULL UNIQUE,
	"protocolo" varchar(255) NOT NULL,
	"termo_de_cessão" boolean NOT NULL,
	"depositante" varchar(255) NOT NULL,
	"status" varchar(255) NOT NULL,
	"nome_do_parceiro" varchar(255),
	"data_de_entrada" date,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "pagamentos" (
	"id" serial NOT NULL UNIQUE,
	"pi_id" bigint NOT NULL,
	"etapa_pagamento" varchar(255) NOT NULL,
	"data_do_pagamento" date NOT NULL,
	"valor" double precision NOT NULL,
	"status_de_pagameto" varchar(255) NOT NULL,
	"processo_sei" varchar(255),
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "usuarios_pi" (
	"usuario_id" serial NOT NULL UNIQUE,
	"patentes_id" bigint NOT NULL
);

CREATE TABLE IF NOT EXISTS "titulares" (
	"id" serial NOT NULL UNIQUE,
	"nome" varchar(255) NOT NULL,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "titulares_pi" (
	"pi_id" serial NOT NULL UNIQUE,
	"titulares_id" bigint NOT NULL
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



ALTER TABLE "pagamentos" ADD CONSTRAINT "pagamentos_fk1" FOREIGN KEY ("pi_id") REFERENCES "pi"("id");
ALTER TABLE "usuarios_pi" ADD CONSTRAINT "usuarios_pi_fk0" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id");

ALTER TABLE "usuarios_pi" ADD CONSTRAINT "usuarios_pi_fk1" FOREIGN KEY ("patentes_id") REFERENCES "pi"("id");

ALTER TABLE "titulares_pi" ADD CONSTRAINT "titulares_pi_fk0" FOREIGN KEY ("pi_id") REFERENCES "pi"("id");

ALTER TABLE "titulares_pi" ADD CONSTRAINT "titulares_pi_fk1" FOREIGN KEY ("titulares_id") REFERENCES "titulares"("id");
ALTER TABLE "controle_processos" ADD CONSTRAINT "controle_processos_fk1" FOREIGN KEY ("pi_id") REFERENCES "pi"("id");
ALTER TABLE "RPI" ADD CONSTRAINT "RPI_fk2" FOREIGN KEY ("pi_id") REFERENCES "pi"("id");

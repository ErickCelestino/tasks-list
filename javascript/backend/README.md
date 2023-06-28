CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	name VARCHAR(45) not null,
	last_name VARCHAR(45) not null,
	email VARCHAR(45) not null,
	password VARCHAR(45) not null,
	type VARCHAR(45) not null,
	created_at VARCHAR(45) NOT null,
	updated_at VARCHAR(45) not null
)

CREATE TABLE IF NOT EXISTS tasks (
	id SERIAL PRIMARY KEY,
	fk_user INT not null,
	title VARCHAR(45) NOT NULL,
	status VARCHAR(45) NOT NULL,
	created_at VARCHAR(45) NOT null,
	updated_at VARCHAR(45) not null,
	foreign key (fk_user)
		references user (id)
);
CREATE TABLE IF NOT EXISTS task_description (
	id SERIAL PRIMARY KEY,
	fk_task INT not null,
	title VARCHAR(45) not null,
	status VARCHAR(45) not null,
	type VARCHAR(45) not null,
	dificult VARCHAR(45) not null,
	created_at VARCHAR(45) NOT null,
	updated_at VARCHAR(45) not null,
	foreign key (fk_task)
		references tasks (id)
);
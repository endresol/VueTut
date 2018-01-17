CREATE DATABASE IF NOT EXISTS agilite;

USE agilite;

CREATE TABLE `Users` (
	`id` MEDIUMINT NOT NULL AUTO_INCREMENT,
	`email` varchar(50) NOT NULL UNIQUE,
	`password` varchar(50) NOT NULL,
	`firstname` varchar(50) NOT NULL,
	`lastname` varchar(50),
	`create_date` DATE NOT NULL,
	`updated_date` DATE NOT NULL,
	`organizer` boolean  NOT NULL DEFAULT 0,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Dogs` (
	`id` MEDIUMINT NOT NULL AUTO_INCREMENT,
	`fullname` varchar(150) NOT NULL,
	`name` varchar(50) NOT NULL,
	`handler`  int NOT NULL,
	`active` boolean  NOT NULL DEFAULT 1,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Contests` (
	`id` MEDIUMINT NOT NULL AUTO_INCREMENT,
	`name` varchar(50) NOT NULL,
	`date` DATE NOT NULL,
	`organizer` MEDIUMINT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `ContestSizes` (
	`id` MEDIUMINT NOT NULL AUTO_INCREMENT,
	`contest` MEDIUMINT NOT NULL,
	`size` varchar(30) NOT NULL,
	`sizecm` int,
	PRIMARY KEY (`id`)
);

CREATE TABLE `ContestSkill` (
	`id` MEDIUMINT NOT NULL AUTO_INCREMENT,
	`contest` MEDIUMINT NOT NULL,
	`skill` varchar(20) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `ContestParticipants` (
	`id` MEDIUMINT NOT NULL AUTO_INCREMENT,
	`contest` MEDIUMINT NOT NULL,
	`dog` MEDIUMINT NOT NULL,
	`size` MEDIUMINT NOT NULL,
	`skill` MEDIUMINT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Results` (
	`id` int NOT NULL AUTO_INCREMENT,
	`contextParticipant` MEDIUMINT NOT NULL,
	`time` TIME NOT NULL,
	`faults` int NOT NULL,
	`refusals` int NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE Dogs ADD CONSTRAINT Dogs_fk0 FOREIGN KEY (handler) REFERENCES Users(id);

ALTER TABLE Contests ADD CONSTRAINT Contests_fk0 FOREIGN KEY (organizer) REFERENCES Users(id);

ALTER TABLE ContestSizes ADD CONSTRAINT ContestSizes_fk0 FOREIGN KEY (contest) REFERENCES Contests(id);

ALTER TABLE ContestSkill ADD CONSTRAINT ContestSkill_fk0 FOREIGN KEY (contest) REFERENCES Contests(id);

ALTER TABLE ContestParticipants ADD CONSTRAINT ContestParticipants_fk0 FOREIGN KEY (contest) REFERENCES Contests(id);

ALTER TABLE ContestParticipants ADD CONSTRAINT ContestParticipants_fk1 FOREIGN KEY (dog) REFERENCES Dogs(id);

ALTER TABLE ContestParticipants ADD CONSTRAINT ContestParticipants_fk2 FOREIGN KEY (size) REFERENCES ContestSizes(id);

ALTER TABLE ContestParticipants ADD CONSTRAINT ContestParticipants_fk3 FOREIGN KEY (skill) REFERENCES ContestSkill(id);

ALTER TABLE Results ADD CONSTRAINT Results_fk0 FOREIGN KEY (contextParticipant) REFERENCES ContestParticipants(id);


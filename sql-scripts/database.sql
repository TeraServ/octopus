-- SQL Script 
CREATE TABLE `octopus`.`user_table` (
  `id` INT NOT NULL,
  `username` VARCHAR(50) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `FirstName` VARCHAR(150) NOT NULL,
  `LastName` VARCHAR(150) NOT NULL,
  `email` VARCHAR(150) NOT NULL,
  `phone_number` BIGINT(50) NULL,
  `created_date` DATE NULL,
  `modify_date` DATE NULL,
  `created_by` BIGINT(20) NULL,
  `modified_by` BIGINT(20) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  UNIQUE INDEX `password_UNIQUE` (`password` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE);


CREATE TABLE `octopus`.`log_history` (
  `id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `device_type` VARCHAR(20) NULL,
  `ip_address` VARCHAR(45) NULL,
  `created_date` DATE NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `octopus`.`notification_table` (
  `id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `content` VARCHAR(10000) NULL,
  `created_date` DATE NULL,
  `receiver_email` VARCHAR(255) NULL,
  `sender_email` VARCHAR(255) NULL,
  `title` VARCHAR(255) NULL);

CREATE TABLE `octopus`.`notification_status_table` (
  `id` INT NOT NULL,
  `notification_id` VARCHAR(255) NULL,
  `nstatus_id` INT NULL,
  `status` VARCHAR(45) NULL);

CREATE TABLE `octopus`.`status_table` (
  `id` INT NOT NULL,
  `user_id` BIGINT(255) NULL,
  `status_id` INT NULL,
  `status` VARCHAR(255) NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `octopus`.`user_type` (
  `id` INT NOT NULL,
  `user_id` BIGINT(255) NOT NULL,
  `user_type` VARCHAR(20) NOT NULL,
  `user_type_id` INT NULL,
  PRIMARY KEY (`id`));

ALTER TABLE `octopus`.`user_type` 
CHANGE COLUMN `user_type` `user_type` ENUM('admin', 'recruiter', 'hiringManager', 'interviewerTech', 'interviewerHR') NOT NULL ;

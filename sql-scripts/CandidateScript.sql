CREATE TABLE `candidate_table` (
  `id` bigint NOT NULL,
  `address` varchar(1000) NOT NULL,
  `city` varchar(100) NOT NULL,
  `country` varchar(100) NOT NULL,
  `current_ctc` varchar(25) DEFAULT NULL,
  `current_company` varchar(255) DEFAULT NULL,
  `current_position` varchar(100) DEFAULT NULL,
  `dob` varchar(20) NOT NULL,
  `email` varchar(200) NOT NULL,
  `expected_ctc` varchar(100) DEFAULT NULL,
  `full_name` varchar(200) NOT NULL,
  `gender` varchar(25) NOT NULL,
  `nationality` varchar(100) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `skills` varchar(255) DEFAULT NULL,
  `year_of_experience` int NOT NULL,
  `zipcode` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
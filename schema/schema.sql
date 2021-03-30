USE score_api;

CREATE TABLE `projects` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `encryption_key` varchar(255) NOT NULL
);

CREATE TABLE `highscores` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `project_id` int,
  `nickname` varchar(255) NOT NULL,
  `score` int NOT NULL DEFAULT 0,
  `source` varchar(100),
  `created_at` datetime
);

ALTER TABLE `highscores` ADD FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`);

USE score_api;

CREATE TABLE `projects` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL
);

CREATE TABLE `highscores` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `projectId` int,
  `nickname` varchar(255) NOT NULL,
  `score` int NOT NULL DEFAULT 0,
  `source` varchar(100),
  `checksum` char(32) NOT NULL
);

ALTER TABLE `highscores` ADD FOREIGN KEY (`projectId`) REFERENCES `projects` (`id`);

CREATE TABLE `webapp_9MF_mudali25`.`games` (
  `games_id` INT NOT NULL AUTO_INCREMENT,
  `moves` INT NULL,
  `player_red_id` INT NOT NULL,
  `player_black_id` INT NOT NULL,
  `winner_id` INT NULL,
  `game_start_time` DATETIME NULL,
  `game_duration` BIGINT NULL,
  `kings_promoted_red` INT NULL,
  `kings_promoted_black` INT NULL,
  `tears_shed` INT NULL,
  PRIMARY KEY (`games_id`),
  INDEX `red_id_idx` (`player_red_id` ASC),
  INDEX `black_id_idx` (`player_black_id` ASC),
  INDEX `winner_id_idx` (`winner_id` ASC),
  CONSTRAINT `red_id`
    FOREIGN KEY (`player_red_id`)
    REFERENCES `webapp_9MF_mudali25`.`users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `black_id`
    FOREIGN KEY (`player_black_id`)
    REFERENCES `webapp_9MF_mudali25`.`users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `winner_id`
    FOREIGN KEY (`winner_id`)
    REFERENCES `webapp_9MF_mudali25`.`users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
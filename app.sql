



-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'events'
-- 
-- ---

DROP TABLE IF EXISTS `events`;
		
CREATE TABLE `events` (
  `id` TINYINT NULL AUTO_INCREMENT DEFAULT NULL,
  `name` MEDIUMTEXT NULL DEFAULT NULL,
  `description` MEDIUMTEXT NULL DEFAULT NULL,
  `contact` MEDIUMTEXT NULL DEFAULT NULL,
  `media` MEDIUMTEXT NULL DEFAULT NULL COMMENT 'id > media id',
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'media'
-- 
-- ---

DROP TABLE IF EXISTS `media`;
		
CREATE TABLE `media` (
  `id` TINYINT NULL AUTO_INCREMENT DEFAULT NULL,
  `type` MEDIUMTEXT NULL DEFAULT NULL,
  `src` MEDIUMTEXT NULL DEFAULT NULL,
  FULLTEXT KEY (`id`)
);

-- ---
-- Table 'users'
-- 
-- ---

DROP TABLE IF EXISTS `users`;
		
CREATE TABLE `users` (
  `id` TINYINT NULL AUTO_INCREMENT DEFAULT NULL,
  `uid` MEDIUMTEXT NULL DEFAULT NULL,
  `username` MEDIUMTEXT NULL DEFAULT NULL,
  `nombre` MEDIUMTEXT NULL DEFAULT NULL,
  `sexo` VARCHAR(1) NULL DEFAULT NULL,
  `email` MEDIUMTEXT NULL DEFAULT NULL,
  `hash_login` MEDIUMTEXT NULL DEFAULT NULL,
  `hash_login_email` MEDIUMTEXT NULL DEFAULT NULL,
  `salt` MEDIUMTEXT NULL DEFAULT NULL,
  `register_date` DATETIME NULL DEFAULT NULL,
  `profile` MEDIUMTEXT NULL DEFAULT NULL,
  `avatar` MEDIUMTEXT NULL DEFAULT NULL,
  `portrait` MEDIUMTEXT NULL DEFAULT NULL,
  `fb_token` MEDIUMTEXT NULL DEFAULT NULL,
  `posts [POST_ID...]` MEDIUMTEXT NULL DEFAULT NULL,
  `role` MEDIUMTEXT NULL DEFAULT NULL,
  `location` MEDIUMTEXT NULL DEFAULT NULL,
  `online` MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'posts'
-- posts
-- ---

DROP TABLE IF EXISTS `posts`;
		
CREATE TABLE `posts` (
  `id` TINYINT NULL AUTO_INCREMENT DEFAULT NULL,
  `post_id` MEDIUMTEXT NULL DEFAULT NULL,
  `uid` MEDIUMTEXT NULL DEFAULT NULL,
  `description` MEDIUMTEXT NULL DEFAULT NULL,
  `date` DATETIME NULL DEFAULT NULL,
  `number_likes` MEDIUMTEXT NULL DEFAULT NULL,
  `privacity` MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) COMMENT 'posts';

-- ---
-- Table 'action'
-- 
-- ---

DROP TABLE IF EXISTS `action`;
		
CREATE TABLE `action` (
  `id` TINYINT NULL AUTO_INCREMENT DEFAULT NULL,
  `action_id` MEDIUMTEXT NULL DEFAULT NULL,
  `uid` MEDIUMTEXT NULL DEFAULT NULL,
  `post_id` MEDIUMTEXT NULL DEFAULT NULL,
  `date` DATETIME NULL DEFAULT NULL,
  `type` MEDIUMTEXT NULL DEFAULT NULL,
  `text` MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'suscriptors'
-- 
-- ---

DROP TABLE IF EXISTS `suscriptors`;
		
CREATE TABLE `suscriptors` (
  `id` TINYINT NULL AUTO_INCREMENT DEFAULT NULL,
  `sus_id` MEDIUMTEXT NULL DEFAULT NULL,
  `post_id` MEDIUMTEXT NULL DEFAULT NULL,
  `uid` MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'notifications'
-- 
-- ---

DROP TABLE IF EXISTS `notifications`;
		
CREATE TABLE `notifications` (
  `id` TINYINT NULL AUTO_INCREMENT DEFAULT NULL,
  `post_id` MEDIUMTEXT NULL DEFAULT NULL,
  `action` MEDIUMTEXT NULL DEFAULT NULL,
  `date` MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'privacity'
-- 
-- ---

DROP TABLE IF EXISTS `privacity`;
		
CREATE TABLE `privacity` (
  `id` TINYINT NULL AUTO_INCREMENT DEFAULT NULL,
  `privacy_id` MEDIUMTEXT NULL DEFAULT NULL,
  `type` MEDIUMTEXT NULL DEFAULT NULL,
  `permisions` MEDIUMTEXT NULL DEFAULT NULL,
  `action` MEDIUMTEXT NULL DEFAULT NULL,
  `to_user` MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'profile'
-- 
-- ---

DROP TABLE IF EXISTS `profile`;
		
CREATE TABLE `profile` (
  `id` TINYINT NULL AUTO_INCREMENT DEFAULT NULL,
  `layout` MEDIUMTEXT NULL DEFAULT NULL,
  `privacity` MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'follows'
-- 
-- ---

DROP TABLE IF EXISTS `follows`;
		
CREATE TABLE `follows` (
  `id` TINYINT NULL AUTO_INCREMENT DEFAULT NULL,
  `followed_uid` MEDIUMTEXT NULL DEFAULT NULL,
  `follower_uid` MEDIUMTEXT NULL DEFAULT NULL,
  `follow_date` DATETIME NULL DEFAULT NULL,
  `new field` TINYINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'activity'
-- 
-- ---

DROP TABLE IF EXISTS `activity`;
		
CREATE TABLE `activity` (
  `id` TINYINT NULL AUTO_INCREMENT DEFAULT NULL,
  `responsible_uid` MEDIUMTEXT NULL DEFAULT NULL,
  `involved_uid` TINYINT NULL DEFAULT NULL,
  `action_id` MEDIUMTEXT NULL DEFAULT NULL,
  `date` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---


-- ---
-- Table Properties
-- ---

ALTER TABLE `events` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
ALTER TABLE `media` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
ALTER TABLE `posts` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
ALTER TABLE `action` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
ALTER TABLE `suscriptors` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
ALTER TABLE `notifications` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
ALTER TABLE `privacity` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
ALTER TABLE `profile` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
ALTER TABLE `follows` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
ALTER TABLE `activity` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `events` (`id`,`name`,`description`,`contact`,`media`) VALUES
-- ('','','','','');
-- INSERT INTO `media` (`id`,`type`,`src`) VALUES
-- ('','','');
-- INSERT INTO `users` (`id`,`uid`,`username`,`nombre`,`sexo`,`email`,`hash_login`,`hash_login_email`,`salt`,`register_date`,`profile`,`avatar`,`portrait`,`fb_token`,`posts [POST_ID...]`,`role`,`location`,`online`) VALUES
-- ('','','','','','','','','','','','','','','','','','');
-- INSERT INTO `posts` (`id`,`post_id`,`uid`,`description`,`date`,`number_likes`,`privacity`) VALUES
-- ('','','','','','','');
-- INSERT INTO `action` (`id`,`action_id`,`uid`,`post_id`,`date`,`type`,`text`) VALUES
-- ('','','','','','','');
-- INSERT INTO `suscriptors` (`id`,`sus_id`,`post_id`,`uid`) VALUES
-- ('','','','');
-- INSERT INTO `notifications` (`id`,`post_id`,`action`,`date`) VALUES
-- ('','','','');
-- INSERT INTO `privacity` (`id`,`privacy_id`,`type`,`permisions`,`action`,`to_user`) VALUES
-- ('','','','','','');
-- INSERT INTO `profile` (`id`,`layout`,`privacity`) VALUES
-- ('','','');
-- INSERT INTO `follows` (`id`,`followed_uid`,`follower_uid`,`follow_date`,`new field`) VALUES
-- ('','','','','');
-- INSERT INTO `activity` (`id`,`responsible_uid`,`involved_uid`,`action_id`,`date`) VALUES
-- ('','','','','');


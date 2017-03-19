SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for burgers
-- ----------------------------
DROP TABLE IF EXISTS `burgers`;
CREATE TABLE `burgers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `burger_name` varchar(255) NOT NULL DEFAULT '0',
  `devoured` int(1) NOT NULL DEFAULT '0',
  `date` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
SET FOREIGN_KEY_CHECKS=1;

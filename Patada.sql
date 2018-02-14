

USE patadain_Patada;





DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;


DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2014_10_12_100000_create_password_resets_table',1),(3,'2018_01_29_153057_create_categoria_table',2),(4,'2018_01_29_153344_create_articulo_table',3);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;


DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categoria` (
  `id_categoria` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (1,'Doloremque nulla.','2018-01-29 22:19:33','2018-01-29 22:19:33'),(3,'Doloribus sint.','2018-01-29 22:19:33','2018-01-29 22:19:33'),(4,'Voluptatem error.','2018-01-29 22:19:33','2018-01-29 22:19:33');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;






DROP TABLE IF EXISTS `articulo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `articulo` (
  `id_articulo` int(11) NOT NULL,
  `titulo` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `alt` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `categoria_id` int(11) NOT NULL,
  `descripcion` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_articulo`),
  KEY `articulo_categoria_id_foreign` (`categoria_id`),
  CONSTRAINT `articulo_categoria_id_foreign` FOREIGN KEY (`categoria_id`) REFERENCES `categoria` (`id_categoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articulo`
--

LOCK TABLES `articulo` WRITE;
/*!40000 ALTER TABLE `articulo` DISABLE KEYS */;
INSERT INTO `articulo` VALUES (4,'Magnam aut ut ipsum. Mollitia dolorem consequatur cumque esse deleniti nobis quod.','https://lorempixel.com/640/480/?82046','Et sapiente voluptatem ut omnis sunt est.','http://ledner.com/quibusdam-officiis-nam-delectus-sequi-vel-quis-repellendus.html',4,'Quo nisi accusantium omnis ullam. Iusto dolorum minus doloribus a beatae dolorem et delectus. Voluptatem sunt velit dolores autem nihil et numquam.','2018-01-29 22:22:01','2018-01-29 22:22:01'),(10,'Atque accusantium veniam minima ut. Et est est assumenda placeat rerum. Qui odit quia quae rerum.','https://lorempixel.com/640/480/?11426','Consequatur maxime vitae aut alias.','http://www.moen.com/',3,'Labore fugiat praesentium eius quos aut laborum quod rem. Similique est suscipit voluptas et. Tenetur quis dolor deleniti nisi voluptatem. Optio eum facilis animi sequi.','2018-01-29 22:22:01','2018-01-29 22:22:01'),(12,'Quibusdam consectetur et et laborum et ratione. Et deserunt aut aut ut enim qui rerum.','https://lorempixel.com/640/480/?88542','Dolore temporibus et dolorum ex.','http://www.cassin.com/laborum-esse-qui-ut-quia-dolorem-distinctio-vero',1,'Cumque et fugiat impedit veritatis. Illo voluptatem hic iusto quas sapiente non ipsam. Veniam sunt et et sed culpa odio.','2018-01-29 22:22:01','2018-01-29 22:22:01'),(20,'Necessitatibus temporibus tempore facere non dolorem. Et sed quia nemo ipsa optio nostrum.','https://lorempixel.com/640/480/?27145','Temporibus officia cumque recusandae ab.','http://www.gleason.com/',3,'Et ut tenetur cum repellat qui. Ea officia est est. Voluptatem atque dolores incidunt necessitatibus autem sed. Facere accusamus nisi voluptas eius ad. Placeat error est odio saepe et porro.','2018-01-29 22:22:01','2018-01-29 22:22:01'),(22,'Quis laborum quo ab eius. Suscipit velit excepturi aspernatur accusamus.','https://lorempixel.com/640/480/?99457','Quia nam nihil adipisci.','http://auer.com/neque-consequatur-aut-qui-sed-totam-quia-delectus-occaecati',3,'Aut veniam eligendi qui ut sunt consequatur. Hic expedita inventore voluptate facilis nostrum nobis voluptatem. Temporibus sint ducimus quia non.','2018-01-29 22:22:01','2018-01-29 22:22:01');
/*!40000 ALTER TABLE `articulo` ENABLE KEYS */;
UNLOCK TABLES;
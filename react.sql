-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 18, 2024 at 05:56 AM
-- Server version: 8.0.16
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `react`
--

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id` int(11) NOT NULL,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `name`, `image`, `created_at`, `updated_at`) VALUES
(10, 'ACER', 'logo_acer.png', '2023-11-23 05:57:50', '2023-11-23 05:57:50'),
(11, 'ASUS', 'logo_asus.png', '2023-11-23 05:58:15', '2023-11-23 05:58:15'),
(12, 'HP', 'logo_hp.png', '2023-11-23 05:58:36', '2023-11-23 05:58:36'),
(13, 'DELL', 'logo_dell.png', '2023-11-23 05:58:57', '2023-11-23 05:58:57'),
(14, 'Logitech', 'logo_logitech.png', '2023-11-23 20:32:49', '2023-11-23 20:32:49'),
(15, 'Lenovo', 'logo_lenovo.png', '2023-11-23 20:32:57', '2023-11-23 20:32:57'),
(16, 'Corsair', 'logo_corsair.png', '2023-11-23 20:33:07', '2023-11-23 20:33:07'),
(17, 'Microsoft', 'logo_microsoft.png', '2023-11-23 20:33:21', '2023-11-23 20:33:21'),
(18, 'Dareu', 'logo_dareu.png', '2023-12-04 11:46:46', '2023-12-04 11:46:46'),
(19, 'Razer', 'logo_razer.png', '2023-12-04 11:52:20', '2023-12-04 11:52:20'),
(20, 'HyperX', 'logo_hyperx.png', '2023-12-04 11:57:57', '2023-12-04 11:57:57'),
(21, 'ZIDLI', 'logo_zidli.png', '2023-12-04 12:04:09', '2023-12-04 12:04:09'),
(22, 'Sony', 'logo_sony.png', '2023-12-04 12:04:20', '2023-12-04 12:04:20'),
(23, 'Bose', 'logo_bose.png', '2023-12-04 12:04:34', '2023-12-04 12:04:34'),
(24, 'STEELSERIES', 'logo_steelseries.png', '2023-12-04 12:04:53', '2023-12-04 12:04:53'),
(25, 'JBL', 'logo_jbl.png', '2023-12-04 12:07:16', '2023-12-04 12:07:16');

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `id_order` int(11) NOT NULL,
  `price` int(10) NOT NULL,
  `quantity` int(10) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`id`, `id_product`, `id_order`, `price`, `quantity`, `created_at`) VALUES
(22, 20, 51, 25990000, 1, '2023-12-01 12:37:42'),
(24, 20, 53, 25990000, 1, '2023-12-04 10:09:16'),
(25, 21, 53, 13490000, 1, '2023-12-04 10:09:16'),
(26, 20, 54, 25990000, 1, '2023-12-04 12:30:39'),
(27, 20, 55, 25990000, 1, '2023-12-04 12:54:57'),
(28, 21, 55, 13490000, 1, '2023-12-04 12:54:57'),
(29, 24, 55, 21990000, 1, '2023-12-04 12:54:57'),
(30, 20, 56, 25990000, 1, '2023-12-04 13:10:53'),
(31, 21, 56, 13490000, 1, '2023-12-04 13:10:53'),
(32, 22, 56, 22990000, 1, '2023-12-04 13:10:53'),
(36, 33, 65, 28690000, 2, '2024-07-19 13:23:47'),
(37, 34, 65, 24490000, 2, '2024-07-19 13:23:47'),
(38, 64, 66, 1349000, 1, '2024-08-14 07:43:21'),
(39, 62, 67, 179000, 1, '2024-08-14 07:51:30'),
(40, 64, 68, 1349000, 1, '2024-08-15 15:45:03');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `ordinal_number` int(5) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `description`, `ordinal_number`, `created_at`, `updated_at`) VALUES
(5, 'Laptop', '', 1, '2023-11-23 05:55:33', '2023-11-23 05:55:33'),
(7, 'Chuột', '', 1, '2023-11-23 05:55:50', '2023-11-23 05:55:50'),
(8, 'Tai nghe', '', 1, '2023-11-23 05:56:01', '2023-11-23 05:56:01'),
(9, 'Bàn phím', '', 1, '2023-11-23 20:41:37', '2023-11-23 20:41:37');

-- --------------------------------------------------------

--
-- Table structure for table `images_product`
--

CREATE TABLE `images_product` (
  `id` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `images_product`
--

INSERT INTO `images_product` (`id`, `id_product`, `name`, `created_at`, `updated_at`) VALUES
(15, 20, 'Laptop_ACER_Nitro_16 Phoenix_AN16_41_R5M4_2.png', '2023-11-23 06:01:35', '2023-11-23 06:01:35'),
(16, 20, 'Laptop_ACER_Nitro_16 Phoenix_AN16_41_R5M4_3.png', '2023-11-23 06:01:35', '2023-11-23 06:01:35'),
(17, 20, 'Laptop_ACER_Nitro_16 Phoenix_AN16_41_R5M4_4.png', '2023-11-23 06:01:35', '2023-11-23 06:01:35'),
(18, 21, 'Laptop_ASUS_Vivobook_Go_15_E1504FA_NJ454W_2.png', '2023-11-23 06:03:19', '2023-11-23 06:03:19'),
(19, 21, 'Laptop_ASUS_Vivobook_Go_15_E1504FA_NJ454W_3.png', '2023-11-23 06:03:19', '2023-11-23 06:03:19'),
(20, 21, 'Laptop_ASUS_Vivobook_Go_15_E1504FA_NJ454W_4.png', '2023-11-23 06:03:19', '2023-11-23 06:03:19'),
(21, 22, 'Laptop_ASUS_ROG_Strix G_G513RC_HN038W_2.png', '2023-11-23 06:06:09', '2023-11-23 06:06:09'),
(22, 22, 'Laptop_ASUS_ROG_Strix G_G513RC_HN038W_3.png', '2023-11-23 06:06:09', '2023-11-23 06:06:09'),
(23, 22, 'Laptop_ASUS_ROG_Strix G_G513RC_HN038W_4.png', '2023-11-23 06:06:09', '2023-11-23 06:06:09'),
(24, 23, 'Laptop_HP_Pavilion_15_eg2083TU_2.png', '2023-11-23 06:07:34', '2023-11-23 06:07:34'),
(25, 23, 'Laptop_HP_Pavilion_15_eg2083TU_3.png', '2023-11-23 06:07:34', '2023-11-23 06:07:34'),
(26, 23, 'Laptop_HP_Pavilion_15_eg2083TU_4.png', '2023-11-23 06:07:34', '2023-11-23 06:07:34'),
(27, 24, 'Laptop_HP_ProBook_450_G10_873J6PA_2.png', '2023-11-23 06:09:17', '2023-11-23 06:09:17'),
(28, 24, 'Laptop_HP_ProBook_450_G10_873J6PA_3.png', '2023-11-23 06:09:17', '2023-11-23 06:09:17'),
(29, 24, 'Laptop_HP_ProBook_450_G10_873J6PA_4.png', '2023-11-23 06:09:17', '2023-11-23 06:09:17'),
(30, 25, 'Laptop_ASUS_Gaming_ROG_G614JI_N4084W_2.png', '2023-11-23 06:11:59', '2023-11-23 06:11:59'),
(31, 25, 'Laptop_ASUS_Gaming_ROG_G614JI_N4084W_3.png', '2023-11-23 06:11:59', '2023-11-23 06:11:59'),
(32, 25, 'Laptop_ASUS_Gaming_ROG_G614JI_N4084W_4.png', '2023-11-23 06:11:59', '2023-11-23 06:11:59'),
(57, 34, 'Laptop_Dell_Vostro_5630_i5U165W11GRU_5.png', '2023-12-04 11:38:33', '2023-12-04 11:38:33'),
(58, 34, 'Laptop_Dell_Vostro_5630_i5U165W11GRU_4.png', '2023-12-04 11:38:33', '2023-12-04 11:38:33'),
(59, 34, 'Laptop_Dell_Vostro_5630_i5U165W11GRU_3.png', '2023-12-04 11:38:33', '2023-12-04 11:38:33'),
(60, 34, 'Laptop_Dell_Vostro_5630_i5U165W11GRU_2.png', '2023-12-04 11:38:33', '2023-12-04 11:38:33'),
(61, 35, 'Logitech_Wave_Keys_Wireless_Bluetooth_Black_3.png', '2023-12-04 11:40:16', '2023-12-04 11:40:16'),
(62, 35, 'Logitech_Wave_Keys_Wireless_Bluetooth_Black_2.png', '2023-12-04 11:40:16', '2023-12-04 11:40:16'),
(63, 36, 'Corsair _K65_CSR_RED_BLK_GLD_2.png', '2023-12-04 11:41:16', '2023-12-04 11:41:16'),
(66, 38, 'Corsair_K70_CORE_BLK_CRSR_MX_RGB_2.png', '2023-12-04 11:43:15', '2023-12-04 11:43:15'),
(67, 39, 'ASUS_ROG_STRIX_SCOPE_II_RX RED_USB_ABS_BLACK_2.png', '2023-12-04 11:44:17', '2023-12-04 11:44:17'),
(70, 41, 'DAREU_EK1280_v2_Black RGB_Red switch_3.png', '2023-12-04 11:47:43', '2023-12-04 11:47:43'),
(71, 41, 'DAREU_EK1280_v2_Black RGB_Red switch_2.png', '2023-12-04 11:47:43', '2023-12-04 11:47:43'),
(72, 42, 'DAREU_EK75_White_black _Dream switch_4.png', '2023-12-04 11:51:11', '2023-12-04 11:51:11'),
(73, 42, 'DAREU_EK75_White_black _Dream switch_2.png', '2023-12-04 11:51:11', '2023-12-04 11:51:11'),
(74, 42, 'DAREU_EK75_White_black _Dream switch_3.png', '2023-12-04 11:51:11', '2023-12-04 11:51:11'),
(75, 43, 'Razer_BlackWidow_V4 X_Green_Switch_4.png', '2023-12-04 11:54:00', '2023-12-04 11:54:00'),
(76, 43, 'Razer_BlackWidow_V4 X_Green_Switch_3.png', '2023-12-04 11:54:01', '2023-12-04 11:54:01'),
(77, 43, 'Razer_BlackWidow_V4 X_Green_Switch_2.png', '2023-12-04 11:54:01', '2023-12-04 11:54:01'),
(78, 44, 'Razer_BlackWidow_V4 Pro_ Green Switch_3.png', '2023-12-04 11:55:05', '2023-12-04 11:55:05'),
(79, 44, 'Razer_BlackWidow_V4 Pro_ Green Switch_2.png', '2023-12-04 11:55:05', '2023-12-04 11:55:05'),
(80, 45, 'Logitech_Pro_X 2_White_2.png', '2023-12-04 12:09:09', '2023-12-04 12:09:09'),
(81, 46, 'Corsair_Virtuoso_RGB_Gunmetal _7.1 Surround_3.png', '2023-12-04 12:10:13', '2023-12-04 12:10:13'),
(82, 46, 'Corsair_Virtuoso_RGB_Gunmetal _7.1 Surround_2.png', '2023-12-04 12:10:13', '2023-12-04 12:10:13'),
(83, 47, 'Over_ear_HyperX_CLOUD_FLIGHT_WIRELESS_4.png', '2023-12-04 12:13:58', '2023-12-04 12:13:58'),
(84, 47, 'Over_ear_HyperX_CLOUD_FLIGHT_WIRELESS_3.png', '2023-12-04 12:13:58', '2023-12-04 12:13:58'),
(85, 47, 'Over_ear_HyperX_CLOUD_FLIGHT_WIRELESS_2.png', '2023-12-04 12:13:58', '2023-12-04 12:13:58'),
(86, 48, 'Logitech_G733_Lightspeed_RGB_3.png', '2023-12-04 12:16:16', '2023-12-04 12:16:16'),
(87, 48, 'Logitech_G733_Lightspeed_RGB_2.png', '2023-12-04 12:16:16', '2023-12-04 12:16:16'),
(88, 49, 'Gaming_ZIDLI_AH1_4.png', '2023-12-04 12:17:22', '2023-12-04 12:17:22'),
(89, 49, 'Gaming_ZIDLI_AH1_3.png', '2023-12-04 12:17:22', '2023-12-04 12:17:22'),
(90, 49, 'Gaming_ZIDLI_AH1_2.png', '2023-12-04 12:17:22', '2023-12-04 12:17:22'),
(91, 50, 'INZONE_H7_SONY_WH_G700_WZ_2.png', '2023-12-04 12:18:24', '2023-12-04 12:18:24'),
(92, 51, 'Over_ear_Bose_Quietcomfort_35_II_3.png', '2023-12-04 12:19:11', '2023-12-04 12:19:11'),
(93, 51, 'Over_ear_Bose_Quietcomfort_35_II_2.png', '2023-12-04 12:19:11', '2023-12-04 12:19:11'),
(94, 52, 'Logitech_G435_3.png', '2023-12-04 12:20:08', '2023-12-04 12:20:08'),
(95, 52, 'Logitech_G435_2.png', '2023-12-04 12:20:08', '2023-12-04 12:20:08'),
(96, 53, 'Over_ear_SteelSeries_Arctis_Pro_Wireless_2.png', '2023-12-04 12:21:07', '2023-12-04 12:21:07'),
(97, 54, 'On_ear_JBL_JR_300_BT_2.png', '2023-12-04 12:21:49', '2023-12-04 12:21:49'),
(98, 55, 'Logitech_G903_Hero_4.png', '2023-12-04 12:23:44', '2023-12-04 12:23:44'),
(99, 55, 'Logitech_G903_Hero_3.png', '2023-12-04 12:23:44', '2023-12-04 12:23:44'),
(100, 55, 'Logitech_G903_Hero_2.png', '2023-12-04 12:23:44', '2023-12-04 12:23:44'),
(101, 56, 'CORSAIR_IRONCLAW_Wireless _CH_9307011_NA_4.png', '2023-12-04 12:24:42', '2023-12-04 12:24:42'),
(102, 56, 'CORSAIR_IRONCLAW_Wireless _CH_9307011_NA_3.png', '2023-12-04 12:24:42', '2023-12-04 12:24:42'),
(103, 56, 'CORSAIR_IRONCLAW_Wireless _CH_9307011_NA_2.png', '2023-12-04 12:24:42', '2023-12-04 12:24:42'),
(104, 57, 'Logitech_Mx_Anywhere_2S_4.png', '2023-12-04 12:28:21', '2023-12-04 12:28:21'),
(105, 57, 'Logitech_Mx_Anywhere_2S_3.png', '2023-12-04 12:28:21', '2023-12-04 12:28:21'),
(106, 57, 'Logitech_Mx_Anywhere_2S_2.png', '2023-12-04 12:28:21', '2023-12-04 12:28:21'),
(107, 58, 'Logitech_G_Pro_Wireless_Gaming_2.png', '2023-12-04 12:42:50', '2023-12-04 12:42:50'),
(108, 58, 'Logitech_G_Pro_Wireless_Gaming_4.png', '2023-12-04 12:42:50', '2023-12-04 12:42:50'),
(109, 58, 'Logitech_G_Pro_Wireless_Gaming_3.png', '2023-12-04 12:42:50', '2023-12-04 12:42:50'),
(110, 59, 'Lenovo_Bluetooth_Laser_OA36407_2.png', '2023-12-04 12:44:29', '2023-12-04 12:44:29'),
(111, 60, 'Microsoft_Bluetooth_Blu_Track_Modern_Mobile_2.png', '2023-12-04 12:45:34', '2023-12-04 12:45:34'),
(112, 60, 'Microsoft_Bluetooth_Blu_Track_Modern_Mobile_3.png', '2023-12-04 12:45:48', '2023-12-04 12:45:48'),
(113, 61, 'Bluetooth_Mouse_Microsoft_RJN_00005_3.png', '2023-12-04 12:48:45', '2023-12-04 12:48:45'),
(114, 61, 'Bluetooth_Mouse_Microsoft_RJN_00005_2.png', '2023-12-04 12:48:45', '2023-12-04 12:48:45'),
(115, 62, 'Logitech_B175_3.png', '2023-12-04 12:49:26', '2023-12-04 12:49:26'),
(116, 62, 'Logitech_B175_2.png', '2023-12-04 12:49:26', '2023-12-04 12:49:26'),
(117, 63, 'Logitech_M221_4.png', '2023-12-04 12:50:09', '2023-12-04 12:50:09'),
(118, 63, 'Logitech_M221_3.png', '2023-12-04 12:50:09', '2023-12-04 12:50:09'),
(119, 63, 'Logitech_M221_2.png', '2023-12-04 12:50:09', '2023-12-04 12:50:09'),
(120, 64, 'Logitech_MX Master_2S_4.png', '2023-12-04 12:51:05', '2023-12-04 12:51:05'),
(121, 64, 'Logitech_MX Master_2S_3.png', '2023-12-04 12:51:05', '2023-12-04 12:51:05'),
(122, 64, 'Logitech_MX Master_2S_2.png', '2023-12-04 12:51:05', '2023-12-04 12:51:05'),
(124, 32, 'Laptop_Dell_Inspiron_14_5430_i5P165W11SL2050_2.png', '2023-12-05 05:27:27', '2023-12-05 05:27:27'),
(125, 32, 'Laptop_Dell_Inspiron_14_5430_i5P165W11SL2050_3.png', '2023-12-05 05:27:40', '2023-12-05 05:27:40'),
(126, 32, 'Laptop_Dell_Inspiron_14_5430_i5P165W11SL2050_4.png', '2023-12-05 05:27:49', '2023-12-05 05:27:49'),
(127, 32, 'Laptop_Dell_Inspiron_14_5430_i5P165W11SL2050_5.png', '2023-12-05 05:27:57', '2023-12-05 05:27:57'),
(129, 33, 'Laptop_Dell_Inspiron_16_5630 _ i7P165W11SL2050_2.png', '2023-12-05 05:35:50', '2023-12-05 05:35:50'),
(130, 33, 'Laptop_Dell_Inspiron_16_5630 _ i7P165W11SL2050_3.png', '2023-12-05 05:36:00', '2023-12-05 05:36:00'),
(131, 33, 'Laptop_Dell_Inspiron_16_5630 _ i7P165W11SL2050_4.png', '2023-12-05 05:36:08', '2023-12-05 05:36:08'),
(132, 33, 'Laptop_Dell_Inspiron_16_5630 _ i7P165W11SL2050_5.png', '2023-12-05 05:36:14', '2023-12-05 05:36:14'),
(133, 65, 'Helios_Neo_PHN16-71-54CD_4.png', '2023-12-05 05:44:38', '2023-12-05 05:44:38'),
(134, 65, 'Helios_Neo_PHN16-71-54CD_3.png', '2023-12-05 05:44:38', '2023-12-05 05:44:38'),
(135, 65, 'Helios_Neo_PHN16-71-54CD_2.png', '2023-12-05 05:44:38', '2023-12-05 05:44:38'),
(136, 37, 'Logitech_G_Pro_X_Tkl_Lightspeed_Tactile_Gaming_White_2.png', '2023-12-05 05:46:30', '2023-12-05 05:46:30'),
(137, 37, 'Logitech_G_Pro_X_Tkl_Lightspeed_Tactile_Gaming_White_3.png', '2023-12-05 05:46:44', '2023-12-05 05:46:44'),
(138, 40, 'Asus_ROG_Strix_Scope_II_96_Wireless_NX_Snow_ABS_Black_2.png', '2023-12-05 05:48:39', '2023-12-05 05:48:39'),
(139, 40, 'Asus_ROG_Strix_Scope_II_96_Wireless_NX_Snow_ABS_Black_3.png', '2023-12-05 05:48:49', '2023-12-05 05:48:49');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `code_order` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `note` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `payment_method` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `payment_status` tinyint(1) NOT NULL DEFAULT '0',
  `total_order` int(10) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `id_user`, `code_order`, `name`, `email`, `address`, `city`, `phone`, `note`, `payment_method`, `payment_status`, `total_order`, `created_at`) VALUES
(51, 1, '07MYGEDA2T', 'đăng khoa', 'alo@gmail.com', 'Q12, TP Hồ Chí Minh', 'hcm', '0383041383', '', 'Thanh toán khi nhận hàng', 2, 25990000, '2023-12-01 12:37:42'),
(52, 1, 'VJNMD0AXQZ', 'đăng khoa', 'alo@gmail.com', 'Q12, TP Hồ Chí Minh', 'hcm', '0383041383', '', 'COD', 2, 29790000, '2023-12-04 04:17:02'),
(53, 4, '364XHAQW97', 'Phạm User', '123@gmail.com', 'sadfsadf', 'ádfasdf', '035454135165', '', 'MOMOATM', 2, 39480000, '2023-12-04 10:09:16'),
(54, 4, 'YUJZE8NV63', 'Phạm User', '123@gmail.com', 'ádfadsf', 'ádfasdads', '035454135165', '', 'MOMOATM', 2, 25990000, '2023-12-04 12:30:39'),
(55, 4, 'VH1CQB4YTZ', 'Phạm User', '123@gmail.com', 'ádfasdf', 'ádfasdfa', '035454135165', '', 'COD', 2, 61470000, '2023-12-04 12:54:57'),
(56, 4, '3CM1GKXDPS', 'Phạm User', '123@gmail.com', 'gewr', 'ewrtew', '035454135165', '', 'MOMOATM', 0, 62470000, '2023-12-04 13:10:53'),
(65, 1, 'ljkq6obN6c', 'đăng khoa', 'alo@gmail.com', 'Q12, TP Hồ Chí Minh', 'hcm', '0312382428', '', 'COD', 2, 106360000, '2024-07-19 13:23:47'),
(66, 2, 'XlcVJiW735', 'đăng khoa', 'dangkhoa1@gmail.com', 'Q12, TP Hồ Chí Minh', 'hcm', '0312382428', '', 'VNPAY', 2, 1349000, '2024-08-14 07:43:21'),
(67, 1, 'nadTmxcosw', 'đăng khoa', 'alo@gmail.com', 'Q12, TP Hồ Chí Minh', 'hcm', '0312382428', '', 'VNPAY', 0, 179000, '2024-08-14 07:51:30'),
(68, 1, 'OSNOWQ54J4', 'đăng khoa', 'alo@gmail.com', 'Q12, TP Hồ Chí Minh', 'hcm', '0312382428', '', 'VNPAY', 2, 1349000, '2024-08-15 15:45:02');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `id_category` int(11) NOT NULL,
  `id_brand` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(10) NOT NULL,
  `price_sale` int(10) DEFAULT NULL,
  `quantity` int(5) NOT NULL DEFAULT '1',
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `number_of_purchases` int(10) DEFAULT '0',
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `id_category`, `id_brand`, `name`, `price`, `price_sale`, `quantity`, `description`, `number_of_purchases`, `image`, `created_at`, `updated_at`) VALUES
(20, 5, 10, 'Laptop ACER Nitro 16 Phoenix AN16-41-R5M4 (Ryzen 5 7535HS/RAM 8GB/RTX 4050/512GB SSD/ Windows 11)', 29990000, 25990000, 1, 'Laptop ACER Nitro 16 Phoenix AN16-41-R5M4 là một thiết bị gaming đa nhiệm mạnh mẽ với các đặc điểm ưu việt sau:Sử dụng CPU AMD Ryzen 5 7535HS và card đồ họa NVIDIA GeForce RTX 4050, laptop cung cấp hiệu suất đồng đều và đáng kể trong việc xử lý đồ họa và chơi game.Màn hình 16 WUXGA IPS với tần số làm mới 165Hz, độ sáng 400nits, và độ phủ màu 100% sRGB, mang đến trải nghiệm hình ảnh sống động và chi tiết.Với RAM 8GB DDR5 và ổ cứng SSD 512GB PCIe NVMe SED SSD, laptop đảm bảo khả năng khởi động nhanh chóng và xử lý tác vụ đa nhiệm mượt mà.Được cài đặt sẵn hệ điều hành Windows 11 Home SL, mang đến trải nghiệm người dùng hiện đại và tích hợp nhiều tính năng mới.Với thiết kế hiện đại và độ bền cao, laptop Nitro 16 Phoenix không chỉ mạnh mẽ về hiệu suất mà còn là sự lựa chọn phong cách cho người chơi.', 0, 'Laptop_ACER_Nitro_16 Phoenix_AN16_41_R5M4_1.png', '2023-11-23 06:01:35', '2023-11-23 06:01:35'),
(21, 5, 11, 'Laptop ASUS Vivobook Go 15 E1504FA-NJ454W (Ryzen 5 7520U/RAM 16GB/512GB SSD/ Windows 11)', 14490000, 13490000, 1, 'Laptop ASUS Vivobook Go 15 E1504FA-NJ454W là một thiết bị đa nhiệm mạnh mẽ, với các đặc điểm nổi bật như sau:Trang bị CPU AMD Ryzen 5 7520U, laptop đảm bảo hiệu suất mạnh mẽ cho các tác vụ đa nhiệm và xử lý đồ họa cơ bản.Với bộ nhớ RAM 16GB LPDDR5 tốc độ 5500MHz, máy đáp ứng tốt cho việc chạy nhiều ứng dụng cùng một lúc và giúp tăng cường trải nghiệm người dùng.Ổ cứng SSD 512GB NVMe PCIe giúp laptop có thời gian khởi động nhanh chóng và tốc độ truy xuất dữ liệu cao.Màn hình 15.6 Full HD (1920 x 1080) mang lại trải nghiệm xem hình ảnh sắc nét và chi tiết.Được cài đặt sẵn hệ điều hành Windows 11, giúp người dùng trải nghiệm giao diện hiện đại và nhiều tính năng mới.Với trọng lượng nhẹ và thiết kế mỏng nhẹ, laptop thuận tiện mang theo và sử dụng trong mọi tình huống.', 5, 'Laptop_ASUS_Vivobook_Go_15_E1504FA_NJ454W_1.png', '2023-11-23 06:03:19', '2023-11-23 06:03:19'),
(22, 5, 11, 'Laptop ASUS ROG Strix G G513RC-HN038W (Ryzen 7 6800HS/RAM 8GB/512GB SSD/ Windows 11)', 26990000, 22990000, 1, 'Laptop ASUS ROG Strix G G513RC-HN038W là một chiếc máy tính xách tay chất lượng cao, với các đặc điểm nổi bật:Được trang bị CPU AMD Ryzen 7 6800HS, máy đảm bảo khả năng xử lý mạnh mẽ cho cả tác vụ đa nhiệm và chơi game.Với bộ nhớ RAM 8GB DDR5, máy giúp chạy ứng dụng mượt mà và nhanh chóng.Ổ đĩa SSD 512GB cung cấp không gian lưu trữ nhanh chóng và tốc độ truy xuất dữ liệu cao.Được trang bị NVIDIA GeForce RTX 3050 4GB GDDR6, mang lại trải nghiệm game và đồ họa tốt.Màn hình lớn với tần số làm mới 144Hz và độ phân giải Full HD giúp hiển thị hình ảnh sắc nét và mượt mà.Cài đặt sẵn hệ điều hành Windows 11, mang đến trải nghiệm người dùng hiện đại.', 0, 'Laptop_ASUS_ROG_Strix G_G513RC_HN038W_1.png', '2023-11-23 06:06:09', '2023-11-23 06:06:09'),
(23, 5, 12, 'Laptop HP Pavilion 15-eg2083TU (7C0W9PA) (i5-1240P/RAM 8GB/512GB SSD/ Windows 11)', 19790000, 15990000, 1, 'Laptop HP Pavilion 15-eg2083TU (7C0W9PA) là một chiếc máy tính xách tay với những đặc tính nổi bật: Sử dụng CPU Intel i5-1240P, đảm bảo khả năng xử lý nhanh chóng cho nhiều tác vụ khác nhau.Với RAM 8GB, máy có khả năng chạy đa nhiệm mượt mà và đáp ứng nhanh chóng các yêu cầu công việc cơ bản.Ổ đĩa SSD 512GB giúp tăng tốc độ khởi động hệ thống và truy xuất dữ liệu.Màn hình 15.6 inch Full HD cung cấp hình ảnh sắc nét và chi tiết.Được cài đặt sẵn hệ điều hành Windows 11, mang lại trải nghiệm người dùng hiện đại và tiện ích.Với màu bạc và chất liệu hợp kim nhôm, máy có thiết kế sang trọng và ưa nhìn.', 10, 'Laptop_HP_Pavilion_15_eg2083TU_1.png', '2023-11-23 06:07:34', '2023-11-23 06:07:34'),
(24, 5, 12, 'Laptop HP ProBook 450 G10 - 873J6PA (i5-1340P/RAM 8GB/512GB SSD/ Windows 11)', 22590000, 21990000, 1, 'Laptop HP ProBook 450 G10 - 873J6PA là một sản phẩm đáng chú ý với những đặc điểm nổi bật sau:Sử dụng CPU Intel Core i5-1340P, giúp máy đạt hiệu suất xử lý cao và đáp ứng tốt cho nhu cầu làm việc và giải trí.Với RAM 8GB, máy có khả năng chạy nhanh chóng các ứng dụng và tác vụ đa nhiệm.Lưu trữ SSD 512GB cung cấp không gian lưu trữ nhanh chóng và tăng tốc độ khởi động hệ thống.Màn hình cảm ứng kích thước 15.6 inch độ phân giải Full HD giúp trải nghiệm người dùng trở nên linh hoạt và thuận tiện.Được cài đặt sẵn hệ điều hành Windows 11, mang lại trải nghiệm hiện đại và tích hợp nhiều tính năng mới.Với vỏ nhôm, máy có thiết kế chắc chắn và sang trọng, phản ánh phong cách chuyên nghiệp.', 0, 'Laptop_HP_ProBook_450_G10_873J6PA_1.png', '2023-11-23 06:09:17', '2023-11-23 06:09:17'),
(25, 5, 11, 'Laptop ASUS Gaming ROG G614JI-N4084W (i7-13650HX/RAM 16GB/1TB SSD/ Windows 11)', 60990000, 56390000, 1, 'Laptop ASUS ROG G614JI-N4084W là một chiếc laptop gaming mạnh mẽ với các đặc điểm nổi bật:Sử dụng CPU Intel Core i7-13650HX thế hệ 13 mới nhất, mang lại hiệu suất xử lý ấn tượng.RAM lớn giúp đảm bảo khả năng đa nhiệm và chạy mượt mà các ứng dụng và trò chơi đòi hỏi tài nguyên.Lưu trữ SSD 1TB PCIe nhanh chóng và đáng tin cậy, cung cấp không gian lưu trữ rộng lớn và tốc độ truy xuất nhanh.Màn hình chất lượng cao với độ phân giải cao và tần số làm mới cao, mang lại trải nghiệm hình ảnh sống động và mượt mà. Được trang bị GPU mạnh mẽ, hỗ trợ hiệu ứng đồ họa chất lượng cao và chơi các tựa game đa nhiệm đòi hỏi cao.Máy được cài đặt sẵn Windows 11, mang lại trải nghiệm người dùng hiện đại và tương lai', 0, 'Laptop_ASUS_Gaming_ROG_G614JI_N4084W_1.png', '2023-11-23 06:11:59', '2023-11-23 06:11:59'),
(32, 5, 13, 'Laptop Dell Inspiron 14 5430 - i5P165W11SL2050 (i5-1340P/RAM 16GB/512GB SSD/ Windows 11 + Office)', 29790000, 27990000, 20, 'Laptop Dell Inspiron 14 5430 - i5P165W11SL2050 là một thiết bị đa nhiệm mạnh mẽ, được thiết kế để đáp ứng nhu cầu công việc và giải trí. Đây là một số đặc điểm nổi bật:Cung cấp hiệu suất ổn định và nhanh chóng cho các tác vụ đa nhiệm và ứng dụng đòi hỏi cao.Dung lượng RAM lớn giúp máy chạy mượt mà, đảm bảo khả năng đa nhiệm và xử lý tác vụ nặng.Lưu trữ SSD nhanh chóng và dung lượng lớn, giúp máy khởi động nhanh và tải ứng dụng mượt mà.Cài đặt sẵn Windows 11, mang lại trải nghiệm người dùng hiện đại.Đã đi kèm với bộ ứng dụng Office, giúp người dùng tiện lợi trong công việc văn phòng.Kích thước màn hình phù hợp cho di động và công việc trên đường.', 0, 'Laptop_Dell_Inspiron_14_5430_i5P165W11SL2050_1.png', '2023-12-04 11:36:56', '2023-12-04 11:36:56'),
(33, 5, 13, 'Laptop Dell Inspiron 16 5630 - i7P165W11SL2050 (i7-1360P/RAM 16GB/512GB SSD/ Windows 11 + Office)', 30990000, 28690000, 20, 'Laptop Dell Inspiron 16 5630 - i7P165W11SL2050 là một máy tính xách tay mạnh mẽ, đáp ứng đầy đủ nhu cầu làm việc và giải trí của người dùng. Dưới đây là mô tả đơn giản về sản phẩm:Cho hiệu suất mạnh mẽ và đa nhiệm nhanh chóng.Cung cấp khả năng đa nhiệm mượt mà và xử lý tác vụ nặng.Lưu trữ nhanh chóng, giúp máy khởi động nhanh và tải ứng dụng mượt mà.Hiển thị hình ảnh sắc nét và màu sắc chân thực.Đảm bảo trải nghiệm giải trí và làm việc đồ họa tốt.Cài đặt sẵn, mang đến giao diện hiện đại và tính năng mới.Tiện lợi cho công việc văn phòng.', 0, 'Laptop_Dell_Inspiron_16_5630 _ i7P165W11SL2050_1.png', '2023-12-04 11:37:37', '2023-12-04 11:37:37'),
(34, 5, 13, 'Laptop Dell Vostro 5630 - i5U165W11GRU (i5-1335U/RAM 16GB/512GB SSD/ Windows 11 + Office)', 25690000, 24490000, 20, 'Laptop Dell Vostro 5630 - i5U165W11GRU là một thiết bị mạnh mẽ với cấu hình đáp ứng đầy đủ nhu cầu công việc và giải trí. Dưới đây là mô tả đơn giản về sản phẩm:Đảm bảo hiệu suất linh hoạt và tiết kiệm năng lượng.Cung cấp khả năng đa nhiệm mượt mà và ổn định.Lưu trữ nhanh chóng, khởi động hệ thống và tải ứng dụng nhanh.Hiển thị hình ảnh sắc nét và chi tiết.Cho trải nghiệm đồ họa tốt và xử lý video mượt mà.Sẵn sàng cho trải nghiệm người dùng hiện đại và tính năng mới.Hỗ trợ công việc văn phòng ngay từ khi mở hộp.', 0, 'Laptop_Dell_Vostro_5630_i5U165W11GRU_1.png', '2023-12-04 11:38:33', '2023-12-04 11:38:33'),
(35, 9, 14, 'Bàn Phím Công Thái Học Không Dây Logitech Wave Keys Wireless/Bluetooth/Đen (Graphite) (920-012281)', 1649000, 1389000, 20, 'Bàn phím Logitech Wave Keys Wireless/Bluetooth/Đen (Graphite) (920-012281) là một sản phẩm công nghệ cao với các đặc điểm nổi bật:Thiết kế công thái học giúp giảm mệt mỏi và stress cho người sử dụng, tạo cảm giác thoải mái khi gõ phím. Hỗ trợ kết nối không dây qua Bluetooth và USB Logi Bolt, mang lại sự thuận tiện và linh hoạt trong việc kết nối với các thiết bị.Chất liệu màu Đen (Graphite) tạo nên vẻ ngoại hình đẳng cấp và hiện đại cho không gian làm việc.Sử dụng 2 pin AAA với thời lượng pin lên đến 36 tháng, giúp tiết kiệm năng lượng và không gặp tình trạng hết pin đột ngột.Được bảo hành chính hãng trong thời gian 12 tháng, đảm bảo chất lượng và sự yên tâm cho người sử dụng.', 0, 'Logitech_Wave_Keys_Wireless_Bluetooth_Black_1.png', '2023-12-04 11:40:16', '2023-12-04 11:40:16'),
(36, 9, 16, 'Bàn phím cơ Gaming không dây Corsair K65 CSR RED-BLK-GLD (CH-91D421L-NA)', 4270000, 3999000, 20, 'Bàn phím cơ Gaming không dây Corsair K65 CSR RED-BLK-GLD (CH-91D421L-NA) là một sản phẩm chất lượng với những đặc điểm nổi bật:Với khả năng kết nối không dây, giúp giảm rối dây và tạo sự linh hoạt trong sắp xếp không gian làm việc.Sử dụng switch Corsair CSR giúp cung cấp trải nghiệm gõ phím chính xác, nhạy bén, và độ bền cao.Thiết kế với đèn nền RGB mang đến không gian làm việc độc đáo và tùy chỉnh theo sở thích cá nhân.Với màu đen và vàng (Graphite), bàn phím có kiểu dáng sang trọng và thu hút.Được làm từ chất liệu chất lượng cao, mang lại độ bền và tuổi thọ sản phẩm cao.Với kích thước nhỏ gọn, giúp tiết kiệm không gian trên bàn làm việc.', 0, 'Corsair _K65_CSR_RED_BLK_GLD_1.png', '2023-12-04 11:41:16', '2023-12-04 11:41:16'),
(37, 9, 14, 'Bàn Phím Cơ Không Dây Logitech G Pro X Tkl Lightspeed Tactile Gaming/Trắng (White) (920-012149)', 4799000, 4299000, 20, 'Bàn Phím Cơ Không Dây Logitech G Pro X TKL Lightspeed Tactile Gaming/Trắng (White) (920-012149) là một sản phẩm chất lượng với những đặc điểm nổi bật:Hỗ trợ kết nối không dây Lightspeed và Bluetooth, mang lại sự linh hoạt cho người sử dụngVới 87 phím, giúp tiết kiệm không gian trên bàn làm việc và tăng sự di động.Sử dụng switch Tactile cho trải nghiệm gõ phím nhạy bén, đáp ứng nhanh chóng và chính xác trong các trò chơi.Thiết kế với đèn nền RGB Lightsync tạo không gian làm việc độc đáo và tùy chỉnh theo sở thích cá nhân.Tính năng Gaming mode và Game Mode Lock giúp tối ưu hóa trải nghiệm chơi game.Với màu trắng, bàn phím có kiểu dáng tinh tế và thu hút.', 0, 'Logitech_G_Pro_X_Tkl_Lightspeed_Tactile_Gaming_White_1.png', '2023-12-04 11:42:23', '2023-12-04 11:42:23'),
(38, 9, 16, 'Bàn phím cơ Gaming Corsair K70 CORE-BLK-CRSR MX-RGB (CH-910971E-NA)', 2625000, 2499000, 20, 'Bàn phím cơ Gaming Corsair K70 CORE-BLK-CRSR MX-RGB (CH-910971E-NA) là một sản phẩm chất lượng với các tính năng và thiết kế thuận lợi cho người chơi:Sử dụng switch Corsair MX RGB, mang lại trải nghiệm gõ phím chính xác và nhạy bén.Thiết kế với đèn nền RGB, cho phép tùy chỉnh đa dạng màu sắc và hiệu ứng ánh sáng theo sở thích cá nhân.Với chất liệu chắc chắn, bền bỉ, đảm bảo sự ổn định và tuổi thọ cao của sản phẩm.Phần mềm iCUE giúp tùy chỉnh các thiết lập, đèn nền và hiệu ứng ánh sáng một cách dễ dàng.Thiết kế với các tính năng hỗ trợ gaming, đảm bảo sự thuận tiện và linh hoạt khi sử dụng trong các trò chơi.', 0, 'Corsair_K70_CORE_BLK_CRSR_MX_RGB_1.png', '2023-12-04 11:43:15', '2023-12-04 11:43:15'),
(39, 9, 11, 'BÀN PHÍM CƠ ASUS ROG STRIX SCOPE II RX RED/USB/ABS/ĐEN(90MP0350-BKUA00)', 3780000, 3199000, 20, 'Bàn phím cơ ASUS ROG Strix Scope II RX là một sản phẩm chất lượng với các đặc điểm nổi bật:Trang bị switch ROG RX Red, đảm bảo phản hồi nhanh chóng và êm ái cho trải nghiệm gõ phím mượt mà.Thiết kế với đèn nền RGB Aura Sync, cho phép tùy chỉnh ánh sáng theo sở thích cá nhân và đồng bộ với các thiết bị khác của ASUS.Sử dụng chất liệu keycap ABS, giúp tăng độ bền và chống mòn cho phím. Kết nối thông qua cổng USB, đảm bảo tương thích và dễ dàng sử dụng với nhiều thiết bị khác nhau. Đạt tiêu chuẩn chống nước và bụi IP57, tăng cường độ bền và bảo vệ cho bàn phím.Có chức năng phím nóng phát trực tuyến và được thiết kế với tựa tay, tối ưu hóa sự thoải mái khi sử dụng lâu dài .', 0, 'ASUS_ROG_STRIX_SCOPE_II_RX RED_USB_ABS_BLACK_1.png', '2023-12-04 11:44:17', '2023-12-04 11:44:17'),
(40, 9, 11, 'Bàn Phím Cơ Gaming không dây Asus ROG Strix Scope II 96 Wireless /NX Snow/ABS/Đen (90MP037A-BKUA00)', 4850000, 3999000, 20, 'Bàn phím cơ gaming không dây Asus ROG Strix Scope II 96 Wireless là sản phẩm đa chức năng với những đặc điểm nổi bật:Với bố trí 96%, giúp giải phóng không gian bàn làm việc mà vẫn giữ được đầy đủ chức năng của một bàn phím cơ gaming. Hỗ trợ kết nối không dây qua 2.4GHz, Bluetooth, và có thể sử dụng dây USB, tạo sự linh hoạt trong trải nghiệm sử dụng.Đèn nền RGB tùy chỉnh từng phím, tạo điểm nhấn và phong cách riêng biệt theo sở thích cá nhân.Sử dụng chất liệu ABS, giúp tăng độ bền và chống mòn cho các phím, đảm bảo tuổi thọ cao.Sự kết hợp linh hoạt giữa kết nối USB 2.0 và Bluetooth 5.1, đảm bảo tương thích với nhiều thiết bị và tình huống sử dụng khác nhau.', 0, 'Asus_ROG_Strix_Scope_II_96_Wireless_NX_Snow_ABS_Black_1.png', '2023-12-04 11:45:52', '2023-12-04 11:45:52'),
(41, 9, 18, 'Bàn phím cơ Gaming DAREU EK1280 v2 Black RGB - Red switch', 999000, 869000, 20, 'Bàn phím cơ Gaming DAREU EK1280 v2 Black RGB - Red switch là một sản phẩm đáng chú ý với những đặc điểm nổi bật:Sản phẩm được trang bị đèn LED RGB đa dạng, tạo ra hiệu ứng ánh sáng đẹp mắt và tương thích với không gian gaming.Sử dụng công nghệ switch DareU D Switch Red, mang lại cảm giác nhấn êm dịu, phục vụ tốt cho việc chơi game và làm việc hàng ngày.Switch có độ bền lên đến 50 triệu lần nhấn, giúp sản phẩm có tuổi thọ cao và ổn định trong thời gian dài sử dụng.Kích thước phím gọn nhẹ, tạo cảm giác thoải mái và linh hoạt khi sử dụng, đồng thời giúp giữ cho bàn làm việc gọn gàng.Với giá trị hợp lý, sản phẩm là một lựa chọn phù hợp cho người chơi muốn trải nghiệm bàn phím cơ chất lượng.', 0, 'DAREU_EK1280_v2_Black RGB_Red switch_1.png', '2023-12-04 11:47:43', '2023-12-04 11:47:43'),
(42, 9, 18, 'Bàn phím cơ Gaming DAREU EK75 White-black _Dream switch', 699000, 599000, 20, 'Bàn phím cơ Gaming DAREU EK75 White-black với Dream switch là một lựa chọn đáng chú ý cho người chơi với những đặc điểm nổi bật:Với layout 75%, bàn phím giữ lại các chức năng cơ bản nhưng giảm kích thước, tối ưu hóa không gian trên bàn làm việc.Sử dụng công nghệ switch DareU Dream, mang lại cảm giác nhấn linear mượt mà, đặc biệt thích hợp cho các hoạt động gaming.Được trang bị đèn nền RGB đa dạng với 7 chế độ đèn nền và 3 chế độ chiếu sáng trên dải đèn, tạo điểm nhấn và không khí gaming hấp dẫn.Thiết kế cấu trúc Gasket giúp cảm giác nhấn tốt, linh hoạt và êm dịu, tăng trải nghiệm người chơi.Bàn phím hỗ trợ tính năng N Key Rollover và nút điều khiển vặn, tăng khả năng phản ứng và điều khiển trong game.Với cổng kết nối Type-C và cáp có thể tách rời, giúp dễ dàng thay đổi và bảo quản.', 0, 'DAREU_EK75_White_black _Dream switch_1.png', '2023-12-04 11:51:11', '2023-12-04 11:51:11'),
(43, 9, 19, 'Bàn phím cơ Gaming Razer BlackWidow V4 X - Green Switch (RZ03-04700100-R3M1)', 3590000, 3399000, 1, 'Bàn phím cơ Gaming Razer BlackWidow V4 X - Green Switch (RZ03-04700100-R3M1) là một sự kết hợp độc đáo của thiết kế và hiệu suất, với những đặc điểm nổi bật sau: Sử dụng công nghệ switch Green của Razer, mang lại cảm giác nhấn clicky, phục vụ tốt cho các hoạt động đòi hỏi độ chính xác và phản ứng nhanh.Với layout Fullsize và vỏ hợp kim nhôm 5052, bàn phím đảm bảo sự chắc chắn và đồng thời giữ lại đầy đủ các phím chức năng.Trang bị đèn nền RGB Razer Chroma với khả năng tùy chỉnh đa dạng, tạo ra không gian gaming độc đáo và thuận lợi cho việc tùy chỉnh theo sở thích cá nhân.Mua từ các đại lý uy tín như Nguyenvu.Store, đảm bảo chất lượng chính hãng và được hỗ trợ bảo hành từ nhà sản xuất.Bàn phím có nút xoay điều chỉnh và các nút media đa chức năng giúp bạn dễ dàng điều khiển âm thanh và đa phương tiện trong quá trình sử dụng.', 0, 'Razer_BlackWidow_V4 X_Green_Switch_1.png', '2023-12-04 11:54:00', '2023-12-04 11:54:00'),
(44, 9, 19, 'Bàn phím cơ có dây Razer BlackWidow V4 Pro - Green Switch (RZ03-04680100-R3M1)', 6199000, 5499000, 20, 'Bàn phím cơ Razer BlackWidow V4 Pro - Green Switch mang đến trải nghiệm gaming chất lượng cao với các đặc điểm nổi bật sau:Sử dụng công nghệ switch Green của Razer, đem lại cảm giác nhấn clicky, độ chính xác và phản ứng nhanh, phù hợp cho người chơi yêu thích cảm giác \"click\" khi gõ phím.Với chất liệu chắc chắn, bàn phím đảm bảo độ bền cao và khả năng chống chịu áp lực từ việc sử dụng hàng ngày.Thiết kế kết nối Type-C giúp dễ dàng tháo rời cáp, tăng tính di động và thuận tiện cho việc đóng gói.Trang bị đèn nền RGB Razer Chroma™ với khả năng tùy chỉnh đa dạng, tạo ra không gian gaming độc đáo và thuận lợi cho việc tùy chỉnh theo sở thích cá nhân. Bàn phím có đầy đủ các tính năng gaming như Anti-Ghosting, Rollover, giúp người chơi thực hiện các thao tác phức tạp một cách mượt mà và chính xác.', 0, 'Razer_BlackWidow_V4 Pro_ Green Switch_1.png', '2023-12-04 11:55:05', '2023-12-04 11:55:05'),
(45, 8, 14, 'Tai nghe Gaming không dây Logitech Pro X 2, màu trắng (981-001270)', 6199000, 5499000, 20, 'Tai nghe Gaming không dây Logitech Pro X 2, màu trắng (981-001270), là một sản phẩm chất lượng cao được thiết kế đặc biệt để đáp ứng nhu cầu của người chơi game chuyên nghiệp. Dưới đây là mô tả chi tiết về sản phẩm:Hỗ trợ 3 kết nối tiện lợi, bao gồm không dây Lightspeed 2.4Ghz, Bluetooth, và có dây (3.5mm), giúp người dùng linh hoạt chuyển đổi giữa các thiết bị.Sử dụng màng loa bằng graphene 50mm cao cấp, mang lại âm thanh chất lượng cao, chi tiết và mạnh mẽ.Pin có thể sử dụng lên đến 50 giờ, giúp người chơi có thời gian dài trải nghiệm mà không cần lo lắng về việc sạc pin thường xuyên.Mic tích hợp công nghệ Blue Voice, cung cấp chất lượng âm thanh microphone tốt nhất cho trò chuyện và ghi âm.Với màu trắng sang trọng, tai nghe không chỉ nổi bật mà còn thể hiện phong cách cho người sử dụng.', 0, 'Logitech_Pro_X 2_White_1.png', '2023-12-04 12:09:09', '2023-12-04 12:09:09'),
(46, 8, 16, 'Tai nghe không dây Corsair Virtuoso RGB Gunmetal - 7.1 Surround (CA-9011180-AP)', 5600000, 5099000, 20, 'Tai nghe không dây Corsair Virtuoso RGB Gunmetal là một sản phẩm chất lượng với nhiều tính năng đáng chú ý:Hỗ trợ kết nối không dây Slipstream, USB, và 3.5mm, tối ưu cho nhiều thiết bị.Trải nghiệm âm thanh vòm 7.1 tạo cảm giác sống động và chi tiết trong các trò chơi và phim.Với màu sắc Gunmetal sang trọng, tai nghe mang đến vẻ ngoại hình đẳng cấp.Được trang bị mic với chất lượng âm thanh cao, giúp truyền đạt giọng nói một cách rõ ràng.Tai nghe được thiết kế với độ phủ tai cao cấp, mang lại sự thoải mái trong suốt thời gian sử dụng.Phản ứng từ 20Hz đến 40kHz, đảm bảo người dùng cảm nhận được toàn bộ dải tần âm thanh.', 0, 'Corsair_Virtuoso_RGB_Gunmetal _7.1 Surround_1.png', '2023-12-04 12:10:13', '2023-12-04 12:10:13'),
(47, 8, 20, 'Tai nghe Over-ear HyperX CLOUD FLIGHT WIRELESS (4P5L4AA#ABL)', 2690000, 2499000, 20, 'Tai nghe HyperX Cloud Flight Wireless (4P5L4AA#ABL) là một sản phẩm chất lượng với những đặc điểm nổi bật sau:Sử dụng kết nối không dây 2.4GHz, cho phép người dùng tự do di chuyển mà không bị ràng buộc bởi dây cáp.Tai nghe có thiết kế over-ear với đệm tai êm ái, giúp cô lập âm thanh và mang lại trải nghiệm thoải mái trong suốt thời gian sử dụng.Tai nghe sử dụng driver lớn để cung cấp âm thanh chi tiết và bass mạnh mẽ, phù hợp cho việc chơi game và nghe nhạc.Pin có thể sử dụng lên đến nhiều giờ, đảm bảo người dùng không phải lo lắng về việc sạc pin thường xuyên.Được hỗ trợ bảo hành chính hãng trong một khoảng thời gian nhất định, tăng tính tin cậy của sản phẩm.', 0, 'Over_ear_HyperX_CLOUD_FLIGHT_WIRELESS_1.png', '2023-12-04 12:13:58', '2023-12-04 12:13:58'),
(48, 8, 14, 'Tai nghe không dây gaming Logitech G733 Lightspeed RGB (Đen) (981-000867)', 3899000, 2499000, 20, 'Tai nghe Logitech G733 Lightspeed RGB (Đen) là một sản phẩm chất lượng cao, đặc trưng bởi những tính năng sau:Với công nghệ Lightspeed tiên tiến, tai nghe mang lại trải nghiệm chơi game mượt mà với tốc độ phản hồi 1ms.Với màu đen sang trọng và đèn RGB đa dạng, tai nghe không chỉ chất lượng mà còn là phụ kiện thời trang cho người dùng.Thiết kế nhẹ giúp giảm áp lực lên đầu, tạo cảm giác thoải mái trong suốt thời gian sử dụng. Được trang bị âm thanh vòm 7.1, tai nghe mang đến trải nghiệm âm thanh chi tiết và sống động.Đèn RGB có thể tùy chỉnh theo sở thích cá nhân, tạo điểm nhấn và phong cách riêng.Microphone chất lượng cao với công nghệ Blue VO!CE giúp truyền đạt giọng nói rõ ràng và chất lượng.', 0, 'Logitech_G733_Lightspeed_RGB_1.png', '2023-12-04 12:16:16', '2023-12-04 12:16:16'),
(49, 8, 21, 'Tai nghe không dây Gaming ZIDLI AH1 ( 2.4G/ 7.1 & RGB Real)', 1190000, 1109000, 20, 'Tai nghe không dây Gaming ZIDLI AH1 là sản phẩm cao cấp với những đặc điểm nổi bật sau:Với khả năng kết nối 2.4G và hỗ trợ âm thanh vòm 7.1, tai nghe mang lại trải nghiệm âm thanh sống động và chi tiết.Thiết kế với hệ thống đèn RGB thực tế, tạo điểm nhấn và không khí chơi game độc đáo.Với kiểu dáng thời trang, tai nghe được thiết kế để đảm bảo sự thoải mái trong suốt thời gian sử dụng.Hỗ trợ âm thanh 3D, giúp người chơi định hình vị trí âm thanh và có trải nghiệm chơi game tốt hơn.Được trang bị microphone chống ồn, giúp truyền đạt giọng nói rõ ràng trong khi chơi game hoặc thực hiện cuộc gọi.Với giá trị cạnh tranh, ZIDLI AH1 là lựa chọn phù hợp cho người chơi muốn trải nghiệm âm thanh chất lượng cao mà không làm rỗng túi.', 0, 'Gaming_ZIDLI_AH1_1.png', '2023-12-04 12:17:22', '2023-12-04 12:17:22'),
(50, 8, 22, 'Tai nghe gaming không dây INZONE H7 SONY WH-G700/WZ', 5300000, 4900000, 20, 'Tai nghe gaming không dây INZONE H7 SONY WH-G700/WZ là sự kết hợp hoàn hảo giữa thoải mái, chất lượng âm thanh và tính năng linh hoạt.Với màng loa Neodymium 40mm, tai nghe mang lại trải nghiệm âm thanh sống động và chất lượng cao.Hỗ trợ kết nối không dây qua Wireless 2.4GHz và Bluetooth, cùng với tùy chọn kết nối dây qua cổng USB, tạo sự linh hoạt cho người dùng.Thiết kế hình bầu dục nhẹ nhàng, đeo thoải mái trong thời gian dài sử dụng.Có các nút điều khiển và vòng xoay đơn giản, giúp người dùng dễ dàng điều chỉnh âm lượng và chức năng khác.Sạc tai nghe bằng cáp USB dài kèm theo, giúp người chơi tiếp tục trải nghiệm mà không lo hết pin.', 0, 'INZONE_H7_SONY_WH_G700_WZ_1.png', '2023-12-04 12:18:24', '2023-12-04 12:18:24'),
(51, 8, 23, 'Tai nghe không dây Over-ear Bose Quietcomfort 35 II (Đen)', 8590000, NULL, 20, 'Tai nghe không dây Over-ear Bose QuietComfort 35 II (Đen) là sản phẩm cao cấp với nhiều tính năng ưu việt.Tai nghe sử dụng công nghệ chống ồn tiên tiến, mang lại trải nghiệm âm thanh tinh tế và không bị ảnh hưởng bởi tiếng ồn xung quanh.Hỗ trợ kết nối Bluetooth và NFC, giúp dễ dàng kết nối với các thiết bị di động và nguồn phát khác nhau.Pin có thể sử dụng lên đến 20 giờ trong chế độ không dây và 40 giờ khi sử dụng chế độ có dây, giúp người dùng thoải mái sử dụng trong thời gian dài.Chỉ cần sạc 15 phút, người dùng có thể sử dụng thêm 2,5 tiếng, tiện ích cho những lúc cần gấp.Thiết kế màu đen sang trọng, kiểu dáng hiện đại và thoải mái cho người đeo.Có các nút điều khiển trên tai nghe giúp người dùng dễ dàng điều chỉnh âm lượng, nhận cuộc gọi, và chuyển bài hát.', 0, 'Over_ear_Bose_Quietcomfort_35_II_1.png', '2023-12-04 12:19:11', '2023-12-04 12:19:11'),
(52, 8, 14, 'Tai nghe không dây Logitech G435 (Đen) (981-001051)', 1799000, 1489000, 20, 'Tai nghe không dây Logitech G435 (Đen) (981-001051) là sản phẩm chơi game và nghe nhạc với nhiều ưu điểm nổi bật.Với chỉ 165 gram, tai nghe mang lại sự thoải mái và di động, phù hợp cho cả thời gian dài sử dụng.Màng loa 40mm thế hệ mới cung cấp âm thanh tuyệt vời, rõ ràng và mạnh mẽ.Hỗ trợ cả 2 kết nối không dây: LIGHTSPEED dành cho chơi game với độ nhạy và hiệu suất cao, và Bluetooth cho đa dạng thiết bị.Giảm tạp âm nền, đảm bảo cuộc trò chuyện rõ ràng và chất lượng khi chơi game hoặc gọi điện.Với kích thước 163×170×71 mm và kiểu dáng hiện đại, sản phẩm không chỉ chất lượng mà còn thời trang.Kết nối dễ dàng với nhiều thiết bị như PC, điện thoại di động, và PS5.', 0, 'Logitech_G435_1.png', '2023-12-04 12:20:08', '2023-12-04 12:20:08'),
(53, 8, 24, 'Tai nghe không dây Over-ear SteelSeries Arctis Pro Wireless (Đen)', 9290000, NULL, 20, 'Tai nghe không dây Over-ear SteelSeries Arctis Pro Wireless (Đen) là sản phẩm chất lượng với nhiều tính năng ưu việt:Trang bị trình điều khiển loa Hi-Res, mang đến trải nghiệm âm thanh chất lượng cao và chi tiết.Hỗ trợ kết nối Bluetooth và Wireless 2.4 GHz, cung cấp sự linh hoạt cho việc sử dụng trên nhiều thiết bị.Micro ClearCast Gen 2 với công nghệ chống ồn hai chiều, giúp truyền tải giọng nói rõ ràng.Sử dụng 2 pin đồng thời, có thể sạc nhanh 15 phút để sử dụng 3 giờ và tổng thời lượng pin lên đến 44 giờ.Kiểu dáng đẹp mắt, chất liệu độ bền cao, đảm bảo thoải mái trong thời gian dài sử dụng.Được thiết kế đặc biệt cho gaming, mang đến trải nghiệm chơi game tốt nhất.', 0, 'Over_ear_SteelSeries_Arctis_Pro_Wireless_1.png', '2023-12-04 12:21:07', '2023-12-04 12:21:07'),
(54, 8, 25, 'Tai nghe không dây On-ear JBL JR 300 BT (Hồng)', 1090000, NULL, 20, 'Tai nghe JBL JR 300 BT (Hồng) là lựa chọn tuyệt vời cho trẻ em với những tính năng nổi bật:Được thiết kế đặc biệt cho trẻ em với kiểu dáng On-Ear để đảm bảo thoải mái và an toàn khi sử dụng.Sử dụng pin Lithium-ion polymer cao cấp, cung cấp thời gian sử dụng lên tới 12 tiếng, giúp trẻ thỏa sức giải trí mà không lo hết pin.Kiểu dáng On-Ear với khả năng cách âm tốt, giúp trẻ tập trung vào âm nhạc hoặc video mà không bị ảnh hưởng bởi tiếng xung quanh.Hỗ trợ kết nối Bluetooth, giúp trẻ dễ dàng kết nối với các thiết bị khác nhau mà không cần dây cáp.Có khả năng kiểm soát âm lượng tối đa, đảm bảo âm thanh không quá ồn đội, an toàn cho thính lực của trẻ.', 0, 'On_ear_JBL_JR_300_BT_1.png', '2023-12-04 12:21:49', '2023-12-04 12:21:49'),
(55, 7, 14, 'Chuột gaming không dây Logitech G903 Hero (910-005674)', 3790000, 2099000, 20, 'Chuột gaming không dây Logitech G903 Hero (910-005674) là một sản phẩm chất lượng cao được thiết kế đặc biệt cho người chơi game. Dưới đây là một số điểm nổi bật của sản phẩm: Với cảm biến HERO 16K DPI, chuột G903 Hero mang lại hiệu suất đỉnh cao và độ chính xác cao trong mọi tình huống chơi game,Sử dụng công nghệ kết nối không dây Lightspeed, đảm bảo trải nghiệm chơi game mượt mà với tỷ lệ báo cáo 1ms.Với thời lượng pin lên đến 140 giờ khi sử dụng với ánh sáng RGB LIGHTSYNC, chuột G903 Hero giúp người chơi thoải mái thưởng thức trải nghiệm chơi game dài hạn.Thiết kế đối xứng cùng với nút bấm có thể lập tạo sự thuận tiện cho cả người thuận tay phải và trái.', 0, 'Logitech_G903_Hero_1.png', '2023-12-04 12:23:44', '2023-12-04 12:23:44'),
(56, 7, 16, 'Chuột gaming CORSAIR IRONCLAW Wireless - CH-9307011-NA (Đen)', 2170000, NULL, 20, 'Chuột gaming CORSAIR IRONCLAW Wireless (CH-9307011-NA) là một sản phẩm đẳng cấp với thiết kế đơn giản nhưng mạnh mẽ, tối ưu cho người chơi FPS và MOBA. Dưới đây là mô tả đơn giản về sản phẩm:Với DPI lên đến 18,000, chuột đảm bảo khả năng theo dõi chính xác và tinh tế cho trải nghiệm chơi game mượt mà.Với tùy chọn kết nối không dây 2.4Ghz hoặc Bluetooth, mang lại sự linh hoạt cho người dùng.Kết hợp với công nghệ 2.4GHz SLIPSTREAM, thời lượng pin lên đến 16 giờ với ánh sáng tiêu chuẩn và 24 giờ khi tắt ánh sáng.Mắt đọc tiên tiến với khả năng theo dõi chính xác và độ phân giải quang học cao..Thiết kế công thái học dành cho người dùng tay phải, mang lại sự thoải mái trong quá trình sử dụng.', 0, 'CORSAIR_IRONCLAW_Wireless _CH_9307011_NA_1.png', '2023-12-04 12:24:42', '2023-12-04 12:24:42'),
(57, 7, 14, 'Chuột máy tính không dây Logitech Mx Anywhere 2S (Đen)', 1810000, 1199000, 20, 'Chuột máy tính không dây Logitech MX Anywhere 2S (Đen) là một sản phẩm chất lượng của Logitech, được thiết kế với tính năng và độ chuyên nghiệp nhằm đáp ứng nhu cầu của người sử dụng. Dưới đây là mô tả đơn giản về sản phẩm:Với kích thước nhỏ gọn và trọng lượng nhẹ, chuột MX Anywhere 2S thích hợp để mang theo di động, phù hợp cho người dùng làm việc trên nhiều nơi.Hỗ trợ cả kết nối không dây và Bluetooth, giúp người dùng dễ dàng chuyển đổi giữa các thiết bị mà không cần thêm receiver USB.Cho phép di chuyển con trỏ chuột qua ba màn hình máy tính khác nhau, tăng hiệu suất làm việc.Sử dụng cảm biến quang học chính xác, độ phân giải cao, giúp chuột hoạt động mượt mà trên nhiều bề mặt.Con lăn được bọc cao cấp, chính xác và dễ sử dụng, giúp người dùng trải nghiệm thú vị khi cuộn.Với thời lượng pin đáng kinh ngạc, người dùng có thể sử dụng chuột trong thời gian dài trước khi cần sạc lại.', 0, 'Logitech_Mx_Anywhere_2S_1.png', '2023-12-04 12:28:21', '2023-12-04 12:28:21'),
(58, 7, 14, 'Chuột máy tính Logitech G Pro Wireless Gaming (Đen) (910-005274)', 3549000, NULL, 1, 'Chuột máy tính Logitech G Pro Wireless Gaming là một sản phẩm chất lượng cao được thiết kế đặc biệt cho các game thủ chuyên nghiệp. Dưới đây là mô tả đơn giản về sản phẩm:Được chế tạo với chất liệu cao cấp và công nghệ tiên tiến, chuột Logitech G Pro Wireless Gaming đem lại trải nghiệm chơi game tuyệt vời.Sử dụng công nghệ kết nối không dây Lightspeed, giảm độ trễ đến mức tối thiểu, đảm bảo mọi cử động được truyền đến máy tính một cách nhanh chóng.Với trọng lượng chỉ 80g, chuột này giúp giảm mệt mỏi khi sử dụng trong thời gian dài và tăng khả năng linh hoạt.Mắt cảm biến HERO 16K chính xác tuyệt vời, có khả năng đọc lên đến 16.000 DPI, đáp ứng mọi yêu cầu của người chơi chuyên nghiệp.Chuột được thiết kế với hình dáng ergonomics, giúp người dùng cảm thấy thoải mái trong suốt các buổi chơi game dài.Hệ thống đèn RGB LIGHTSYNC tạo điểm nhấn thẩm mỹ và có thể tùy chỉnh theo sở thích cá nhân.', 0, 'Logitech_G_Pro_Wireless_Gaming_1.png', '2023-12-04 12:42:50', '2023-12-04 12:42:50'),
(59, 7, 15, 'Chuột máy tính Lenovo Bluetooth Laser OA36407', 880000, NULL, 20, 'Chuột máy tính Lenovo Bluetooth Laser OA36407 là một sản phẩm chất lượng, thiết kế đơn giản nhưng hiệu quả. Dưới đây là mô tả đơn giản về sản phẩm:Với khả năng kết nối Bluetooth 3.0, chuột OA36407 giúp thực hiện việc kết nối một cách nhanh chóng và thuận tiện.Được trang bị cảm biến laser, chuột đảm bảo độ chính xác cao với độ phân giải 1200dpi, phù hợp cho nhiều công việc sử dụng máy tính hàng ngày.Với thiết kế nhỏ gọn, chuột này thuận lợi cho việc mang theo di động và sử dụng trên mọi bề mặt.Chuột Lenovo OA36407 có nút nhấn đơn giản nhưng chất lượng, giúp người dùng thực hiện các thao tác một cách dễ dàng.Sử dụng pin 2 AA, giúp chuột có thời lượng sử dụng lâu dài.', 0, 'Lenovo_Bluetooth_Laser_OA36407_1.png', '2023-12-04 12:44:29', '2023-12-04 12:44:29'),
(60, 7, 17, 'Chuột máy tính không dây Microsoft Bluetooth BlueTrack Modern Mobile (màu hồng đào) (KTF-00044)', 899000, 490000, 20, 'Chuột máy tính không dây Microsoft Bluetooth BlueTrack Modern Mobile (màu hồng đào) (KTF-00044) là một sản phẩm hiện đại và tiện lợi. Dưới đây là mô tả đơn giản về sản phẩm:Với thiết kế mỏng và nhẹ, chuột Modern Mobile đảm bảo sự thuận tiện và dễ dàng khi sử dụng, phù hợp cho người dùng di động.Sử dụng công nghệ BlueTrack giúp chuột hoạt động chính xác trên nhiều bề mặt, cả trên bàn làm việc và diện tích không đồng đều.Với khả năng kết nối Bluetooth, không cần dây cáp, giúp giảm rối và tăng tính di động.Sử dụng 2 pin AAA, chuột có thời lượng sử dụng lên đến 12 tháng, giúp tiết kiệm năng lượng và giảm tần suất thay pin.Màu hồng đào tạo điểm nhấn thời trang, phong cách và nữ tính.', 0, 'Microsoft_Bluetooth_Blu_Track_Modern_Mobile_1.png', '2023-12-04 12:45:34', '2023-12-04 12:45:34'),
(61, 7, 17, 'Chuột không dây Bluetooth Mouse Microsoft RJN-00005 (Đen)', 599000, 499000, 20, 'Chuột không dây Bluetooth Mouse Microsoft RJN-00005 (Đen) là một sản phẩm hiện đại và tiện lợi của Microsoft. Dưới đây là mô tả đơn giản về sản phẩm:Với thiết kế mềm mại và đơn giản, chuột RJN-00005 tạo cảm giác thoải mái trong việc sử dụng, đặc biệt phù hợp cho công việc hàng ngày và giải trí .Chuột sử dụng kết nối Bluetooth, giúp loại bỏ sự rối bận của dây cáp và tăng tính di động khi sử dụng với các thiết bị tương thích.Với độ phân giải 1000 DPI, chuột đảm bảo độ chính xác cao trong quá trình sử dụng trên nhiều bề mặt khác nhau.Thiết kế khuôn ôm sát tay giúp người dùng có cảm giác thoải mái và linh hoạt khi di chuyển chuột.', 0, 'Bluetooth_Mouse_Microsoft_RJN_00005_1.png', '2023-12-04 12:48:45', '2023-12-04 12:48:45'),
(62, 7, 14, 'Chuột máy tính không dây Logitech B175 (Đen)', 179000, NULL, 20, 'Chuột máy tính không dây Logitech B175 (Đen) là một sản phẩm đơn giản và tiện lợi, phù hợp cho công việc văn phòng và sử dụng hàng ngày. Dưới đây là mô tả chi tiết về sản phẩm:Chuột có thiết kế nhỏ gọn, giúp dễ dàng mang theo và sử dụng trong mọi tình huống. Thiết kế đơn giản nhưng hiệu quả, phù hợp với nhiều đối tượng người dùng.Sử dụng kết nối không dây 2.4 GHz, cho phép sử dụng từ xa đến 10m mà không gặp trục trặc. Đầu thu sóng USB nhỏ gọn, tương thích với nhiều thiết bị.Chuột Logitech B175 sử dụng chuẩn kết nối wireless 2.4GHz, giúp đảm bảo ổn định và hiệu quả trong việc truyền dữ liệu không dây.Với hiệu suất tiết kiệm năng lượng, thời lượng pin của chuột có thể lên đến 1 năm sử dụng, giảm tình trạng thay pin thường xuyên.Đơn giản chỉ cần cắm và sử dụng, không cần cài đặt phần mềm phức tạp. Sự tiện lợi với công nghệ plug and play giúp người dùng bắt đầu sử dụng ngay lập tức.', 0, 'Logitech_B175_1.png', '2023-12-04 12:49:26', '2023-12-04 12:49:26'),
(63, 7, 14, 'Chuột máy tính không dây Logitech M221 (Đỏ)', 330000, NULL, 20, 'Chuột máy tính không dây Logitech M221 (Đỏ) là một sản phẩm thiết kế đơn giản nhưng hiệu quả, đặc biệt được chú trọng đến trải nghiệm sự yên tĩnh với nút chuột silent giảm hơn 90% tiếng ồn. Dưới đây là mô tả chi tiết về sản phẩm:Với thiết kế nhỏ gọn, chuột M221 dễ dàng mang theo và sử dụng trong mọi tình huống.Nút chuột silent giảm hơn 90% tiếng ồn so với chuột thông thường, mang lại sự yên tĩnh cho bạn và mọi người xung quanh.Với độ phân giải 1000 DPI, chuột M221 đảm bảo độ chính xác trong mọi thao tác sử dụng.Sử dụng kết nối không dây, giúp bạn tự do di chuyển mà không bị ràng buộc bởi dây cáp.Với pin có thời lượng lên đến 18 tháng, chuột M221 giúp giảm tình trạng thay pin thường xuyên.', 0, 'Logitech_M221_1.png', '2023-12-04 12:50:09', '2023-12-04 12:50:09'),
(64, 7, 14, 'Chuột máy tính không dây Logitech MX Master 2S (Đen)', 1688000, 1349000, 20, 'Chuột máy tính không dây Logitech MX Master 2S (Đen) là một sản phẩm cao cấp, được thiết kế với nhiều tính năng đặc biệt để đáp ứng nhu cầu của người sử dụng chuyên nghiệp. Dưới đây là mô tả chi tiết về sản phẩm:Với thiết kế màu đen sang trọng, chuột MX Master 2S mang lại vẻ ngoại hình đẳng cấp và chuyên nghiệp.Sở hữu cảm biến quang học với độ phân giải lên đến 4000 DPI, giúp chuột hoạt động chính xác và mượt mà trên nhiều bề mặt.Với 7 nút thao tác và 1 cần gạt on/off, chuột MX Master 2S giúp người dùng dễ dàng thực hiện nhiều chức năng một cách linh hoạt.Chuột có khả năng kết nối thông qua cổng USB hoặc công nghệ Bluetooth, tối ưu hóa sự thuận tiện và linh hoạt trong sử dụng.Sử dụng pin sạc Li-Po dung lượng 500 mAh, giúp chuột MX Master 2S có thời gian sử dụng pin lâu dài.Thời gian sử dụng pin có thể thay đổi tùy theo người dùng và điều kiện sử dụng máy tính.', 0, 'Logitech_MX Master_2S_1.png', '2023-12-04 12:51:05', '2023-12-04 12:51:05'),
(65, 5, 11, 'Laptop ACER Predator Helios Neo PHN16-71-54CD (NH.QLTSV.001) (i5-13500HX/RAM 8GB/512GB SSD/ Windows 11)', 35990000, 34990000, 20, 'Laptop ACER Predator Helios Neo PHN16-71-54CD (NH.QLTSV.001) là một máy tính xách tay chuyên dụng cho gaming với những đặc điểm nổi bật sau:Sử dụng CPU Intel Core i5-13500HX, giúp xử lý nhanh chóng các tác vụ đòi hỏi tài nguyên cao.RAM lớn giúp máy chạy mượt mà và ổn định, đảm bảo khả năng đa nhiệm và chơi game mạnh mẽ.Lưu trữ SSD nhanh chóng và có dung lượng lớn, giúp tăng tốc quá trình khởi động hệ thống và tải ứng dụng.Màn hình chất lượng cao với độ phân giải cao và tần số làm mới cao, mang lại trải nghiệm chơi game mượt mà.Được trang bị GPU mạnh mẽ, hỗ trợ hiệu ứng đồ họa đỉnh cao và chơi các tựa game đòi hỏi đồ họa cao.Máy được cài đặt sẵn Windows 11, mang lại trải nghiệm người dùng hiện đại và tương lai.', 0, 'Helios_Neo_PHN16-71-54CD_1.png', '2023-12-05 05:44:38', '2023-12-05 05:44:38');

-- --------------------------------------------------------

--
-- Table structure for table `properties`
--

CREATE TABLE `properties` (
  `id` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `properties`
--

INSERT INTO `properties` (`id`, `id_product`, `name`, `description`, `created_at`, `updated_at`) VALUES
(1, 21, 'Ram', 'Siêu câp· vip pro', '2023-11-23 20:50:14', '2023-11-23 20:50:14'),
(2, 21, 'CPU', 'Intel Core i666', '2023-11-23 20:50:41', '2023-11-23 20:50:41'),
(3, 21, 'Ram', 'Siêu câp· vip pro', '2023-11-23 20:50:14', '2023-11-23 20:50:14'),
(4, 21, 'CPU', 'Intel Core i666', '2023-11-23 20:50:41', '2023-11-23 20:50:41'),
(5, 42, 'Màu sắc', 'Đen\r\n', '2023-12-13 07:08:39', '2023-12-13 07:08:39'),
(6, 42, 'Kết nối', 'Bàn phím có dây', '2023-12-13 07:09:09', '2023-12-13 07:09:09'),
(7, 42, 'Kết nối bàn phím', 'USB', '2023-12-13 07:09:25', '2023-12-13 07:09:25'),
(8, 42, 'Loại bàn phím', 'Bàn phím cơ', '2023-12-13 07:10:00', '2023-12-13 07:10:00'),
(9, 42, 'Kiểu switch', 'Dare-U D Switch', '2023-12-13 07:10:17', '2023-12-13 07:10:17'),
(10, 35, 'Part-number', '920-012281', '2023-12-13 07:11:01', '2023-12-13 07:11:01'),
(11, 35, 'Kết nối', 'Bàn phím không dây', '2023-12-13 07:17:49', '2023-12-13 07:17:49'),
(12, 35, 'Màu sắc', 'Đen', '2023-12-13 07:18:15', '2023-12-13 07:18:15'),
(13, 35, 'Kết nối bàn phím', '2.4 GHz Wireless, Bluetooth', '2023-12-13 07:18:56', '2023-12-13 07:18:56'),
(14, 39, 'Part-number', '90MP0350-BKUA00', '2023-12-13 07:20:01', '2023-12-13 07:20:01'),
(15, 39, 'Màu sắc', 'Đen', '2023-12-13 07:20:31', '2023-12-13 07:20:31'),
(16, 39, 'Kết nối', 'Bàn phím có dây', '2023-12-13 07:20:55', '2023-12-13 07:20:55'),
(17, 39, 'Nhu cầu', 'Gaming, Văn phòng, Đồ họa - Kỹ thuật, Học sinh - Sinh viên', '2023-12-13 07:21:19', '2023-12-13 07:21:19'),
(18, 39, 'Loại bàn phím', 'Bàn phím cơ', '2023-12-13 07:21:33', '2023-12-13 07:21:33'),
(19, 44, 'Màu sắc', 'Đen', '2023-12-13 07:23:34', '2023-12-13 07:23:34'),
(20, 44, 'Kết nối', 'Bàn phím có dây', '2023-12-13 07:23:51', '2023-12-13 07:23:51'),
(21, 44, 'Kết nối bàn phím', 'USB', '2023-12-13 07:24:01', '2023-12-13 07:24:01'),
(22, 44, 'Loại bàn phím', 'Bàn phím cơ', '2023-12-13 07:24:15', '2023-12-13 07:24:15'),
(23, 44, 'Tính năng đặc biệt', '5 dedicated macros keys,3 dedicated macro side buttons,Up to 8,000 Hz polling rate', '2023-12-13 07:24:30', '2023-12-13 07:24:30'),
(24, 44, 'Nhu cầu', 'Gaming, Đồ họa - Kỹ thuật, Văn phòng', '2023-12-13 07:24:48', '2023-12-13 07:24:48'),
(25, 38, 'Part-number', 'CH-910971E-NA', '2023-12-13 07:25:45', '2023-12-13 07:25:45'),
(26, 38, 'Màu sắc', 'Đen', '2023-12-13 07:25:57', '2023-12-13 07:25:57'),
(27, 38, 'Kết nối', 'Bàn phím có dây', '2023-12-13 07:26:15', '2023-12-13 07:26:15'),
(28, 38, 'Kết nối bàn phím', 'USB 3.0', '2023-12-13 07:26:25', '2023-12-13 07:26:25'),
(29, 38, 'Loại bàn phím', 'Bàn phím cơ', '2023-12-13 07:26:46', '2023-12-13 07:26:46'),
(30, 38, 'Kiểu switch', 'Cosair MLX Red linear', '2023-12-13 07:27:05', '2023-12-13 07:27:05'),
(31, 41, 'Màu sắc', 'Đen', '2023-12-13 07:27:35', '2023-12-13 07:27:35'),
(32, 41, 'Kết nối', 'Bàn phím có dây', '2023-12-13 07:27:52', '2023-12-13 07:27:52'),
(33, 41, 'Kết nối bàn phím', 'USB', '2023-12-13 07:28:02', '2023-12-13 07:28:02'),
(34, 41, 'Loại bàn phím', 'Bàn phím cơ', '2023-12-13 07:28:14', '2023-12-13 07:28:14'),
(35, 41, 'Kiểu switch', 'Red Switch', '2023-12-13 07:28:44', '2023-12-13 07:28:44'),
(36, 40, 'Màu sắc', 'Đen', '2023-12-13 07:29:50', '2023-12-13 07:29:50'),
(37, 40, 'Kết nối', 'Bàn phím không dây', '2023-12-13 07:30:17', '2023-12-13 07:30:17'),
(38, 40, 'Kết nối bàn phím', 'USB 2.0, 2.4 GHz Wireless, Bluetooth 5.1', '2023-12-13 07:30:32', '2023-12-13 07:30:32'),
(39, 40, 'Loại bàn phím', 'Bàn phím cơ', '2023-12-13 07:31:15', '2023-12-13 07:31:15'),
(40, 40, 'Nhu cầu', 'Gaming, Văn phòng, Học sinh - Sinh viên, Thiết kế nhỏ gọn', '2023-12-13 07:31:29', '2023-12-13 07:31:29'),
(41, 40, 'Kiểu switch', 'NX Snow', '2023-12-13 07:31:44', '2023-12-13 07:31:44'),
(42, 36, 'Part-number', 'CH-91D421L-NA', '2023-12-13 07:37:51', '2023-12-13 07:37:51'),
(43, 36, 'Màu sắc', 'Đen', '2023-12-13 07:38:06', '2023-12-13 07:38:06'),
(44, 36, 'Kết nối', 'Bàn phím không dây', '2023-12-13 07:38:19', '2023-12-13 07:38:19'),
(45, 36, 'Kết nối bàn phím', '2.4 GHz Wireless, Bluetooth', '2023-12-13 07:38:42', '2023-12-13 07:38:42'),
(46, 36, 'Loại bàn phím', 'Bàn phím cơ', '2023-12-13 07:38:55', '2023-12-13 07:38:55'),
(47, 36, 'Kiểu switch', 'Cosair MLX Red linear', '2023-12-13 07:39:13', '2023-12-13 07:39:13'),
(48, 56, 'Part number', 'CH-9307011-NA', '2023-12-13 07:40:39', '2023-12-13 07:40:39'),
(49, 56, 'Kiểu kết nối', 'Chuột không dây', '2023-12-13 07:40:53', '2023-12-13 07:40:53'),
(50, 56, 'Kết nối', 'Wireless', '2023-12-13 07:41:12', '2023-12-13 07:41:12'),
(51, 56, 'Độ phân giải (CPI/DPI)', '18000DPI', '2023-12-13 07:41:25', '2023-12-13 07:41:25'),
(52, 56, 'Dạng cảm biến', 'Optical', '2023-12-13 07:41:36', '2023-12-13 07:41:36'),
(53, 56, 'Tên cảm biến', 'PMW3391', '2023-12-13 07:42:31', '2023-12-13 07:42:31'),
(54, 55, 'Kiểu kết nối', 'Chuột không dây', '2023-12-13 07:43:20', '2023-12-13 07:43:20'),
(55, 55, 'Đèn LED', 'RGB', '2023-12-13 07:43:32', '2023-12-13 07:43:32'),
(56, 55, 'Kết nối', 'Lightspeed Wireless, USB 2.0', '2023-12-13 07:43:47', '2023-12-13 07:43:47'),
(57, 55, 'Độ phân giải (CPI/DPI)', '25600DPI', '2023-12-13 07:44:00', '2023-12-13 07:44:00'),
(58, 55, 'Dạng cảm biến', 'Optical', '2023-12-13 07:44:25', '2023-12-13 07:44:25'),
(59, 55, 'Tên cảm biến', 'HERO', '2023-12-13 07:44:38', '2023-12-13 07:44:38'),
(60, 55, 'Kiểu pin', 'Pin Lithium', '2023-12-13 07:44:49', '2023-12-13 07:44:49'),
(61, 61, 'Kiểu kết nối', 'Chuột không dây', '2023-12-13 07:46:19', '2023-12-13 07:46:19'),
(62, 61, 'Màu sắc', 'Đen', '2023-12-13 07:46:38', '2023-12-13 07:46:38'),
(63, 61, 'Kết nối', 'Bluetooth 5.0', '2023-12-13 07:46:48', '2023-12-13 07:46:48'),
(64, 61, 'Dạng cảm biến', 'Optical', '2023-12-13 07:47:00', '2023-12-13 07:47:00'),
(65, 61, 'Tên cảm biến', 'Microsoft BlueTrack', '2023-12-13 07:47:14', '2023-12-13 07:47:14'),
(66, 61, 'Kích thước', '100,4 x 58,2 x 38,3 mm', '2023-12-13 07:47:33', '2023-12-13 07:47:33'),
(67, 62, 'Kiểu kết nối', 'Chuột không dây', '2023-12-13 07:48:11', '2023-12-13 07:48:11'),
(68, 62, 'Màu sắc', 'Đen', '2023-12-13 07:48:35', '2023-12-13 07:48:35'),
(69, 62, 'Kết nối', '2.4 GHz Wireless', '2023-12-13 07:48:47', '2023-12-13 07:48:47'),
(70, 62, 'Dạng cảm biến', 'Optical', '2023-12-13 07:49:10', '2023-12-13 07:49:10'),
(71, 63, 'Kiểu kết nối', 'Chuột không dây', '2023-12-13 07:50:04', '2023-12-13 07:50:04'),
(72, 63, 'Màu sắc', 'Đỏ', '2023-12-13 07:50:18', '2023-12-13 07:50:18'),
(73, 63, 'Kết nối', '2.4 GHz Wireless', '2023-12-13 07:50:29', '2023-12-13 07:50:29'),
(74, 63, 'Độ phân giải (CPI/DPI)', '1000DPI', '2023-12-13 07:50:51', '2023-12-13 07:50:51'),
(75, 63, 'Dạng cảm biến', 'Optical', '2023-12-13 07:51:04', '2023-12-13 07:51:04'),
(76, 64, 'Kiểu kết nối', 'Chuột không dây', '2023-12-13 07:51:49', '2023-12-13 07:51:49'),
(77, 64, 'Màu sắc', 'Đen', '2023-12-13 07:52:01', '2023-12-13 07:52:01'),
(78, 64, 'Kết nối', 'Bluetooth', '2023-12-13 07:52:16', '2023-12-13 07:52:16'),
(79, 64, 'Độ phân giải (CPI/DPI)', '4000DPI', '2023-12-13 07:52:28', '2023-12-13 07:52:28'),
(80, 64, 'Dạng cảm biến', 'Optical', '2023-12-13 07:52:39', '2023-12-13 07:52:39'),
(81, 57, 'Kiểu kết nối', 'Chuột không dây', '2023-12-13 08:05:50', '2023-12-13 08:05:50'),
(82, 57, 'Đèn LED', 'RGB', '2023-12-13 08:06:09', '2023-12-13 08:06:09'),
(83, 57, 'Màu sắc', 'Đen', '2023-12-13 08:06:21', '2023-12-13 08:06:21'),
(84, 57, 'Kết nối', 'Bluetooth', '2023-12-13 08:06:32', '2023-12-13 08:06:32'),
(85, 57, 'Độ phân giải (CPI/DPI)', '4000DPI', '2023-12-13 08:06:47', '2023-12-13 08:06:47'),
(86, 57, 'Dạng cảm biến ', 'Optical', '2023-12-13 08:06:59', '2023-12-13 08:06:59'),
(87, 60, 'Part number', 'KTF-00044', '2023-12-13 08:07:47', '2023-12-13 08:07:47'),
(88, 60, 'Kiểu kết nối', 'Chuột không dây', '2023-12-13 08:07:56', '2023-12-13 08:07:56'),
(89, 60, 'Màu sắc', 'Peach', '2023-12-13 08:08:18', '2023-12-13 08:08:18'),
(90, 60, 'Kết nối', 'Bluetooth 4.2', '2023-12-13 08:08:28', '2023-12-13 08:08:28'),
(91, 60, 'Dạng cảm biến', 'Optical', '2023-12-13 08:08:40', '2023-12-13 08:08:40'),
(92, 60, 'Tên cảm biến', 'Microsoft BlueTrack', '2023-12-13 08:08:57', '2023-12-13 08:08:57'),
(93, 60, 'Kích thước', '107.20 x 60.30 x 25.80 mm', '2023-12-13 08:09:34', '2023-12-13 08:09:34'),
(94, 59, 'Kiểu kết nối', 'Chuột không dây', '2023-12-13 08:10:21', '2023-12-13 08:10:21'),
(95, 59, 'Màu sắc', 'Đen', '2023-12-13 08:10:37', '2023-12-13 08:10:37'),
(96, 59, 'Kiểu cầm', 'Ambidextrous / Đối xứng', '2023-12-13 08:10:49', '2023-12-13 08:10:49'),
(97, 59, 'Kết nối', 'Bluetooth', '2023-12-13 08:11:46', '2023-12-13 08:11:46'),
(98, 59, 'Độ phân giải (CPI/DPI)', '1200DPI', '2023-12-13 08:12:03', '2023-12-13 08:12:03'),
(99, 59, 'Dạng cảm biến', 'Laser', '2023-12-13 08:12:14', '2023-12-13 08:12:14'),
(100, 59, 'Kích thước', '32,2 x 55,8 x 95,8 mm', '2023-12-13 08:12:28', '2023-12-13 08:12:28'),
(101, 58, 'Kiểu kết nối', 'Chuột không dây', '2023-12-13 08:13:01', '2023-12-13 08:13:01'),
(102, 58, 'Đèn LED', 'RGB', '2023-12-13 08:13:18', '2023-12-13 08:13:18'),
(103, 58, 'Màu sắc', 'Đen', '2023-12-13 08:13:42', '2023-12-13 08:13:42'),
(104, 58, 'Kết nối', 'Lightspeed Wireless', '2023-12-13 08:13:56', '2023-12-13 08:13:56'),
(105, 58, 'Độ phân giải (CPI/DPI)', '16000DPI', '2023-12-13 08:14:47', '2023-12-13 08:14:47'),
(106, 58, 'Tên cảm biến', 'HERO', '2023-12-13 08:14:56', '2023-12-13 08:14:56'),
(107, 58, 'Kiểu pin', 'Pin Lithium', '2023-12-13 08:15:07', '2023-12-13 08:15:07'),
(108, 58, 'Kích thước', '125 x 63.5 x 40 mm', '2023-12-13 08:15:17', '2023-12-13 08:15:17'),
(109, 20, 'Part-number', 'NH.QKBSV.003', '2023-12-13 10:29:01', '2023-12-13 10:29:01'),
(110, 20, 'Màu sắc', 'Đen', '2023-12-13 10:29:27', '2023-12-13 10:29:27'),
(111, 20, 'Thế hệ CPU', 'Ryzen 5 , AMD', '2023-12-13 10:29:47', '2023-12-13 10:29:47'),
(112, 20, 'CPU', 'AMD Ryzen 5 7535HS ( 3.3 GHz - 4.5 GHz / 16MB / 6 nhân, 12 luồng )', '2023-12-13 10:30:01', '2023-12-13 10:30:01'),
(113, 20, 'Chip đồ họa', 'RTX 4050 6GB GDDR6 / AMD Radeon 660M', '2023-12-13 10:30:26', '2023-12-13 10:30:26'),
(114, 20, 'RAM', '1 x 8GB DDR5 4800MHz ( 2 Khe cắm / Hỗ trợ tối đa 32GB )', '2023-12-13 10:31:21', '2023-12-13 10:31:21'),
(115, 20, 'Màn hình', '16 ( 1920 x 1200 ) WUXGA IPS 165Hz , không cảm ứng , HD webcam', '2023-12-13 10:31:37', '2023-12-13 10:31:37'),
(116, 20, 'Lưu trữ', '512GB SSD M.2 NVMe ', '2023-12-13 10:32:21', '2023-12-13 10:32:21'),
(117, 20, 'Số cổng lưu trữ tối đa', '2 x M.2 NVMe', '2023-12-13 10:32:39', '2023-12-13 10:32:39'),
(118, 20, 'Kiểu khe M.2 hỗ trợ', 'M.2 NVMe', '2023-12-13 10:32:57', '2023-12-13 10:32:57'),
(119, 20, 'Cổng kết nối', '2 x USB Type C , 2 x USB 3.2 , 1 x USB 2.0 , 1 x micro SD card slot , Audio combo , LAN 1 Gb/s', '2023-12-13 10:33:17', '2023-12-13 10:33:17'),
(120, 20, 'Kết nối không dây', 'WiFi 802.11ax (Wifi 6) , Bluetooth 5.1', '2023-12-13 10:33:54', '2023-12-13 10:33:54');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `comment` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `rating` tinyint(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `id_user`, `id_product`, `comment`, `rating`, `created_at`) VALUES
(2, 1, 20, 'hello hello', 3, '2023-12-02 14:57:06'),
(3, 4, 20, 'sản phẩm tuyệt vời quá', 5, '2023-12-04 13:14:05');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `full_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_admin` tinyint(1) NOT NULL DEFAULT '1' COMMENT '0-admin 1-user',
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `phone`, `full_name`, `is_admin`, `avatar`, `created_at`, `updated_at`) VALUES
(1, 'dangkhoa', '12345', 'alo@gmail.com', '0383041383', 'đăng khoa', 1, 'z4724624344771_88853848936ae54f1ebfb5b76af91663.jpg', '2023-11-18 12:22:15', '2023-11-18 12:22:15'),
(2, 'dangk', '1234', 'dangkhoa1@gmail.com', '0383041383', 'đăng khoa', 0, 'z4724624344771_88853848936ae54f1ebfb5b76af91663.jpg', '2023-11-24 11:37:44', '2023-11-24 11:37:44'),
(3, 'admin', '123', 'admin@gmail.com', '0694666565', 'Phạm Admin', 0, NULL, '2023-12-04 09:59:05', '2023-12-04 09:59:05'),
(4, 'user', '123', '123@gmail.com', '035454135165', 'Phạm User', 1, NULL, '2023-12-04 10:07:50', '2023-12-04 10:07:50'),
(5, 'dangkhoa', '123', 'alo@gmail.com', '0312382428', 'Trần Hải Đăng Khoa', 1, NULL, '2024-06-28 16:53:58', '2024-06-28 16:53:58'),
(10, 'dangkhoa', '1234', 'alo@gmail.com', '0312382428', 'Trần Hải Đăng Khoa', 1, NULL, '2024-07-08 14:20:36', '2024-07-08 14:20:36'),
(11, 'dangkhoa1', '1234', 'alo1@gmail.com', '0312382428', 'Trần Hải Đăng Khoa', 1, NULL, '2024-07-08 15:04:15', '2024-07-08 15:04:15'),
(12, 'dang', '123456', 'alo11@gmail,com', '0123456789', 'hihi', 1, NULL, '2024-07-28 17:58:55', '2024-07-28 17:58:55');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_cart_product` (`id_product`),
  ADD KEY `fk_cart_order` (`id_order`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `images_product`
--
ALTER TABLE `images_product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_images_product` (`id_product`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_order_user` (`id_user`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_product_category` (`id_category`),
  ADD KEY `fk_product_brand` (`id_brand`);

--
-- Indexes for table `properties`
--
ALTER TABLE `properties`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_properties_product` (`id_product`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_review_user` (`id_user`),
  ADD KEY `fk_review_product` (`id_product`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;

--
-- AUTO_INCREMENT for table `images_product`
--
ALTER TABLE `images_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=140;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT for table `properties`
--
ALTER TABLE `properties`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=121;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `fk_cart_order` FOREIGN KEY (`id_order`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `fk_cart_product` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `images_product`
--
ALTER TABLE `images_product`
  ADD CONSTRAINT `fk_images_product` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `fk_order_user` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `fk_product_brand` FOREIGN KEY (`id_brand`) REFERENCES `brands` (`id`),
  ADD CONSTRAINT `fk_product_category` FOREIGN KEY (`id_category`) REFERENCES `categories` (`id`);

--
-- Constraints for table `properties`
--
ALTER TABLE `properties`
  ADD CONSTRAINT `fk_properties_product` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `fk_review_product` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_review_user` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

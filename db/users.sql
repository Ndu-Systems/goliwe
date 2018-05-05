-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 05, 2018 at 08:42 PM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `guliwedb`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `UserId` int(11) NOT NULL,
  `FirstName` varchar(225) NOT NULL,
  `Surname` varchar(225) NOT NULL,
  `Email` varchar(225) NOT NULL,
  `Password` varchar(225) NOT NULL,
  `Role` varchar(225) NOT NULL,
  `Status` varchar(225) DEFAULT 'Active',
  `BankName` varchar(225) DEFAULT NULL,
  `AccountNo` varchar(225) DEFAULT NULL,
  `BankBranchCode` varchar(225) DEFAULT NULL,
  `AccountType` varchar(225) DEFAULT NULL,
  `CVV` int(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`UserId`, `FirstName`, `Surname`, `Email`, `Password`, `Role`, `Status`, `BankName`, `AccountNo`, `BankBranchCode`, `AccountType`, `CVV`) VALUES
(1, 'Nduduzo', 'Khanyile', 'nduduzo@mail.com', '$2y$10$Jvizz1XKNWmHbRRhUH9OO.OAU/kOLxWlNMcmBtM6fjE66jRK7uM7i', 'Admin', 'Active', NULL, NULL, NULL, NULL, NULL),
(2, 'Ndumiso', 'Mthembu', 'ndumiso@mail.com', '$2y$10$fcHfRO.gH5cdDUWDk1Gg1.4Yx0v6QMSzUxTBwu4e4CHre6sguBcve', 'Customer', 'Active', NULL, NULL, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`UserId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `UserId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

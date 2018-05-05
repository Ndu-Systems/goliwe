-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 05, 2018 at 08:43 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.1

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
-- Table structure for table `article`
--

CREATE TABLE `article` (
  `ArticleId` int(11) NOT NULL,
  `ISSN` varchar(11) NOT NULL,
  `Price` decimal(10,0) NOT NULL,
  `Title` varchar(225) NOT NULL,
  `PublisherID` int(11) NOT NULL,
  `PlublishDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ImageUrl` text NOT NULL,
  `Abstract` text NOT NULL,
  `FileUrl` text NOT NULL,
  `Status` varchar(50) NOT NULL DEFAULT 'Active'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `article`
--

INSERT INTO `article` (`ArticleId`, `ISSN`, `Price`, `Title`, `PublisherID`, `PlublishDate`, `ImageUrl`, `Abstract`, `FileUrl`, `Status`) VALUES
(1, '77', '40', 'United Nations Convention on the Law of the Sea', 1, '2018-05-05 17:10:37', 'http://localhost:8080/git.goliwe/api/uploads/1525533037.jpg', 'The criminal jurisdiction of the coastal State should not be exercised\non board a foreign ship passing through the territorial sea to arrest any person\nor to conduct any investigation in connection with any crime committed on\nboard the ship during its passage, save only in the following cases:', 'http://localhost:8080/git.goliwe/api/uploads/1525533037.pdf', 'Active'),
(2, '0', '40', 'Eloquent JavaScript', 1, '2018-05-05 17:23:45', 'http://localhost:8080/git.goliwe/api/uploads/1525533825.png', 'This work is licensed under a Creative Commons attribution-noncommercial\nlicense (http://creativecommons.org/licenses/by-nc/3.0/). All code in the\nbook may also be consi', 'http://localhost:8080/git.goliwe/api/uploads/1525533825.pdf', 'Active'),
(3, 'saw15', '40', 'Eloquent JavaScript', 1, '2018-05-05 17:30:25', 'http://localhost:8080/git.goliwe/api/uploads/1525534225.png', 'This work is licensed under a Creative Commons attribution-noncommercial\nlicense (http://creativecommons.org/licenses/by-nc/3.0/). All code in the\nbook may also be consi', 'http://localhost:8080/git.goliwe/api/uploads/1525534225.pdf', 'Active'),
(4, 'r54', '40', 'Angular', 1, '2018-05-05 17:48:01', 'http://localhost:8080/git.goliwe/api/uploads/1525535281.png', 'Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop. Speed & Performance. Achieve the maximum speed possible on the Web Platform today, and take it further, via Web Workers and server-side', 'http://localhost:8080/git.goliwe/api/uploads/1525535281.pdf', 'Active');

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
  `Status` varchar(225) NOT NULL DEFAULT 'Active',
  `BankName` varchar(225) NOT NULL,
  `AccountNo` varchar(225) NOT NULL,
  `BankBranchCode` varchar(225) NOT NULL,
  `AccountType` varchar(225) NOT NULL,
  `CVV` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`ArticleId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `article`
--
ALTER TABLE `article`
  MODIFY `ArticleId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 20, 2021 at 12:35 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `enrollment`
--

-- --------------------------------------------------------

--
-- Table structure for table `adminuser`
--

CREATE TABLE `adminuser` (
  `user_id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `user_image` varchar(50) NOT NULL,
  `admin_email` varchar(50) NOT NULL,
  `user_fname` varchar(50) NOT NULL,
  `user_mname` varchar(50) NOT NULL,
  `user_lname` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `adminuser`
--

INSERT INTO `adminuser` (`user_id`, `username`, `password`, `user_image`, `admin_email`, `user_fname`, `user_mname`, `user_lname`) VALUES
(1, 'chadmerin', 'ede79b3fbf673a9a8e9bf3db02aeb7b2', 'image/face.jpg', '', 'Richard', 'Roldan', 'Merin');

-- --------------------------------------------------------

--
-- Table structure for table `authentication`
--

CREATE TABLE `authentication` (
  `auth_id` int(11) NOT NULL,
  `auth_code` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `authentication`
--

INSERT INTO `authentication` (`auth_id`, `auth_code`) VALUES
(1, 'aeda390c714fcaf6512d31cc962c75ca'),
(2, '1234');

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `course_id` int(11) NOT NULL,
  `course_desc` varchar(100) NOT NULL,
  `course_type` varchar(20) NOT NULL,
  `date_created` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`course_id`, `course_desc`, `course_type`, `date_created`) VALUES
(1, 'BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY', '1', '2021-04-07'),
(2, 'BACHELOR OF SCIENCE IN OFFICE ADMINISTRATION', '1', '2021-04-07'),
(3, 'CERTIFICATE IN COMPUTER SCIENCE', '3', '2021-04-07'),
(4, 'CERTIFICATE IN OFFICE ADMINISTRATION', '3', '2021-04-07'),
(7, 'CERTIFICATE IN HOTEL AND RESTAURANT MANAGEMENT', '3', '2021-04-07'),
(8, 'INFORMATION AND COMMUNICATION TECHNOLOGY', '4', '2021-04-07'),
(9, 'ACCOUNTANCY, BUSINESS AND MANAGEMENT', '4', '2021-04-07'),
(10, 'HUMANITIES AND SOCIAL SCIENCE', '4', '2021-04-07'),
(11, 'BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY', '2', '2021-04-07'),
(12, 'BACHELOR OF SCIENCE IN OFFICE ADMINISTRATION', '2', '2021-04-07'),
(13, 'BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION MAJOR IN HUMAN RESOURCE MANAGEMENT', '2', '2021-04-07'),
(14, 'BACHELOR OF SCIENCE IN ACCOUNTING INFORMATION SYSTEM', '2', '2021-04-07');

-- --------------------------------------------------------

--
-- Table structure for table `registration_executive`
--

CREATE TABLE `registration_executive` (
  `registration_id` int(11) NOT NULL,
  `registration_username` varchar(50) NOT NULL,
  `registration_student_number` varchar(50) DEFAULT NULL,
  `registration_year` varchar(50) NOT NULL,
  `registration_sem` varchar(50) NOT NULL,
  `registration_status` varchar(50) NOT NULL DEFAULT 'PENDING',
  `registration_student_type` varchar(50) NOT NULL,
  `registration_date_created` datetime NOT NULL DEFAULT current_timestamp(),
  `registration_date_enrolled` varchar(50) NOT NULL,
  `registration_course_id` int(11) NOT NULL,
  `registration_student_id` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `registration_executive`
--

INSERT INTO `registration_executive` (`registration_id`, `registration_username`, `registration_student_number`, `registration_year`, `registration_sem`, `registration_status`, `registration_student_type`, `registration_date_created`, `registration_date_enrolled`, `registration_course_id`, `registration_student_id`) VALUES
(67, 'chado', NULL, 'N/A', '1st Module', 'PENDING', 'Executive (New)', '2021-04-18 18:35:57', '', 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `registration_regular_2yr`
--

CREATE TABLE `registration_regular_2yr` (
  `registration_id` int(11) NOT NULL,
  `registration_username` varchar(50) NOT NULL,
  `registration_student_number` varchar(50) DEFAULT NULL,
  `registration_year` varchar(50) NOT NULL,
  `registration_sem` varchar(50) NOT NULL,
  `registration_status` varchar(50) NOT NULL DEFAULT 'PENDING',
  `registration_student_type` varchar(50) NOT NULL,
  `registration_date_created` datetime NOT NULL DEFAULT current_timestamp(),
  `registration_date_enrolled` varchar(50) NOT NULL,
  `registration_course_id` int(11) NOT NULL,
  `registration_student_id` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `registration_regular_4yr`
--

CREATE TABLE `registration_regular_4yr` (
  `registration_id` int(11) NOT NULL,
  `registration_username` varchar(50) NOT NULL,
  `registration_student_number` varchar(50) DEFAULT NULL,
  `registration_year` varchar(50) NOT NULL,
  `registration_sem` varchar(50) NOT NULL,
  `registration_status` varchar(50) NOT NULL DEFAULT 'PENDING',
  `registration_student_type` varchar(50) NOT NULL,
  `registration_date_created` datetime NOT NULL DEFAULT current_timestamp(),
  `registration_date_enrolled` varchar(50) NOT NULL,
  `registration_course_id` int(11) NOT NULL,
  `registration_student_id` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `registration_senior`
--

CREATE TABLE `registration_senior` (
  `registration_id` int(11) NOT NULL,
  `registration_username` varchar(50) NOT NULL,
  `registration_student_number` varchar(50) DEFAULT NULL,
  `registration_year` varchar(50) NOT NULL,
  `registration_sem` varchar(50) NOT NULL,
  `registration_status` varchar(50) NOT NULL DEFAULT 'PENDING',
  `registration_student_type` varchar(50) NOT NULL,
  `registration_date_created` datetime NOT NULL DEFAULT current_timestamp(),
  `registration_date_enrolled` varchar(50) NOT NULL,
  `registration_course_id` int(11) NOT NULL,
  `registration_student_id` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `registration_table`
--

CREATE TABLE `registration_table` (
  `regTable_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `subject_id` int(11) NOT NULL,
  `semester` varchar(20) NOT NULL,
  `date_created` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `sold`
--

CREATE TABLE `sold` (
  `sold_id` int(11) NOT NULL,
  `descript` varchar(33) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sold`
--

INSERT INTO `sold` (`sold_id`, `descript`) VALUES
(1, '['),
(2, ''),
(3, '2'),
(4, '1'),
(5, '2'),
(6, '3'),
(7, '4'),
(8, '5');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `student_id` int(11) NOT NULL,
  `student_fname` varchar(50) NOT NULL,
  `student_mname` varchar(50) NOT NULL,
  `student_lname` varchar(50) NOT NULL,
  `student_address` varchar(50) NOT NULL,
  `student_gender` varchar(6) NOT NULL,
  `student_contact` varchar(13) NOT NULL,
  `student_email` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `student_password` text NOT NULL,
  `student_image` varchar(50) NOT NULL,
  `date_created` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`student_id`, `student_fname`, `student_mname`, `student_lname`, `student_address`, `student_gender`, `student_contact`, `student_email`, `username`, `student_password`, `student_image`, `date_created`) VALUES
(1, 'RICHARD', 'ROLDAN', 'MERIN', '104 VILLA BERNARDO ST. SAN JOAQUIN, PASIG CITY', 'MALE', '09186011644', 'galimesa7@gmail.com', 'chad', '641eb89bee5d13fe92ed5d727ea31df1', 'image/chad.jpg', '2021-03-31 20:23:07'),
(2, 'RICHARD', 'ROLDAN', 'MERIN', '104 VILLA BERNARDO ST. SAN JOAQUIN, PASIG CITY', 'MALE', '09186011644', 'chadmerin@gmail.com', 'chado', '94c8f104747bf2d9d6d1349d594fc193', 'image/programmer.jpg', '2021-04-01 22:27:17'),
(4, 'JUAN', 'DUNSTY', 'GENEROSO', 'SAN JOAQUIN, PASIG CITY', 'Male', '09186011644', 'ptc.richardmerin@gmail.com', 'chadskie', '94c8f104747bf2d9d6d1349d594fc193', 'image/chad.jpg', '2021-04-18 18:49:54');

-- --------------------------------------------------------

--
-- Table structure for table `student_credential`
--

CREATE TABLE `student_credential` (
  `student_credential_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `stats` varchar(10) NOT NULL,
  `religion` varchar(50) NOT NULL,
  `nationality` varchar(20) NOT NULL,
  `birthdate` varchar(12) NOT NULL,
  `birthplace` varchar(50) NOT NULL,
  `provinceAdd` varchar(50) NOT NULL,
  `provinceCon` varchar(15) NOT NULL,
  `mother_fname` varchar(50) NOT NULL,
  `mother_mname` varchar(50) NOT NULL,
  `mother_lname` varchar(50) NOT NULL,
  `mother_address` varchar(50) NOT NULL,
  `mother_contact` varchar(50) NOT NULL,
  `father_fname` varchar(50) NOT NULL,
  `father_mname` varchar(50) NOT NULL,
  `father_lname` varchar(50) NOT NULL,
  `father_address` varchar(50) NOT NULL,
  `father_contact` varchar(50) NOT NULL,
  `guardianFname` varchar(50) NOT NULL,
  `guardianMname` varchar(50) NOT NULL,
  `guardianLname` varchar(50) NOT NULL,
  `guardianAdd` varchar(50) NOT NULL,
  `guardianContact` varchar(15) NOT NULL,
  `elemName` varchar(50) NOT NULL,
  `elemAdd` varchar(60) NOT NULL,
  `elemFin` varchar(4) NOT NULL,
  `highName` varchar(50) NOT NULL,
  `highAdd` varchar(50) NOT NULL,
  `highFin` varchar(50) NOT NULL,
  `seniorName` varchar(50) NOT NULL,
  `seniorAdd` varchar(50) NOT NULL,
  `seniorFin` varchar(50) NOT NULL,
  `collName` varchar(50) NOT NULL,
  `collAdd` varchar(50) NOT NULL,
  `collCourse` varchar(50) NOT NULL,
  `collFin` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student_credential`
--

INSERT INTO `student_credential` (`student_credential_id`, `student_id`, `username`, `stats`, `religion`, `nationality`, `birthdate`, `birthplace`, `provinceAdd`, `provinceCon`, `mother_fname`, `mother_mname`, `mother_lname`, `mother_address`, `mother_contact`, `father_fname`, `father_mname`, `father_lname`, `father_address`, `father_contact`, `guardianFname`, `guardianMname`, `guardianLname`, `guardianAdd`, `guardianContact`, `elemName`, `elemAdd`, `elemFin`, `highName`, `highAdd`, `highFin`, `seniorName`, `seniorAdd`, `seniorFin`, `collName`, `collAdd`, `collCourse`, `collFin`) VALUES
(4, 1, 'chad', 'MARRIED', 'CATHOLIC', 'FILIPINO', '1989-09-23', 'PASIG CITY', '104 VILLA BERNARDO ST. SAN JOAQUIN, PASIG CITY', '09186011644', 'DDDDDDDDDDDDDD', 'DDDDDDDDDDD', 'DDDDDDDDDDDDDD', 'DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD', '23333333', 'EEEEEEEEEEE', 'EEEEEEEEEEEE', 'EEEEEEEEEEE', 'EEEEEEEEEEEEEEEEEEEEEEEEEEEEEE', '333333333333333333333', 'RRRRRRRRRRRRRRRRRRRRR', 'R', '222222222222', '222222222222222222222222222222222222', '222222222222', 'ASCSACSC', 'QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ', '1111', 'DFTJTJACASCSACSACACASCASCASC', 'UIUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU', '2222', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A'),
(5, 2, 'chado', 'SINGLE', 'CATHOLIC', 'FILIPINO', '1989-09-23', 'PASIG, METRO MANILA', 'N/A', 'N/A', 'JOSEPHINE', 'ROLDAN', 'MERIN', '104 VILLA BERNARDO ST., SAN JOAQUIN, PASIG CITY', '09186011644', 'MARIO', 'GENOVA', 'MERIN', '104 VILLA BERNARDO ST., SAN JOAQUIN, PASIG CITY', '09186011644', 'JOSEPHINE', 'R', 'MERIN', '104 VILLA BERNARDO ST., SAN JOAQUIN, PASIG CITY', '09186011644', 'SAN JOAQUIN ELEMENTARY SCHOOL', 'SAN JOAQUIN, PASIG CITY', '2002', 'RIZAL HIGH SCHOOL ( MAIN )', 'CANIOGAN, PASIG CITY', '2006', 'N/A', 'N/A', 'N/A', 'PATEROS TECHNOLOGICAL COLLEGE', 'KANLURAN, PATEROS METRO MANILA', 'Certificate in Computer science', '2019');

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE `subjects` (
  `subject_id` int(11) NOT NULL,
  `subject_code` varchar(11) NOT NULL,
  `subject_desc` varchar(50) NOT NULL,
  `subject_unit` int(11) NOT NULL,
  `subject_date_added` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`subject_id`, `subject_code`, `subject_desc`, `subject_unit`, `subject_date_added`) VALUES
(1, 'ITP8', 'WEB DEVELOPMENT', 3, '2021-04-07'),
(2, 'ITP5', 'SYSTEM ANALYSIS AND DESIGN', 3, '2021-04-07'),
(3, 'GETCW', 'THE CONTEMPORARY WORLD', 3, '2021-04-07'),
(4, 'ITP6', 'NETWORK DESIGN MANAGEMENT', 3, '2021-04-07'),
(5, 'GESTS', 'SCIENCE TECHNOLOGY AND SOCIETY', 3, '2021-04-07'),
(6, 'GEAH', 'PHILIPPINE POPULAR CULTURE', 3, '2021-04-07'),
(7, 'ITE7/ITE5', 'HUMAN COMPUTER INTERACTION USING VB.NET3', 3, '2021-04-07'),
(8, 'CAPSTONE1', 'CAPSTONE PROJECT 1', 3, '2021-04-07'),
(9, 'ITE2', 'EMBBED SYSTEM ROBOTICS', 3, '2021-04-07'),
(10, 'ITE6', 'SYSTEM INTEGRATION AND ARCHITECTURE', 3, '2021-04-07'),
(11, 'ITP9/ITE1', 'SYSTEM ADMINISTRATION, MAINTENANCE AND COMPUTER SE', 3, '2021-04-07'),
(12, 'CAPSTONE2', 'CAPSTONE PROJECT 2', 3, '2021-04-07'),
(13, 'ITE4', 'MOBILE PROGRAMMING', 3, '2021-04-07'),
(14, 'ITP10', 'MULTIMEDIA SYSTEM', 3, '2021-04-07'),
(15, 'GEMST', 'LIVING IN THE IT ERA', 3, '2021-04-07'),
(16, 'PRACTICUM', 'ON THE JOB TRAINING', 3, '2021-04-07'),
(17, 'GEUTS', 'UNDERSTANDING THE SELF', 3, '2021-04-07'),
(18, 'GESSP', 'RELIGION,RELIGIOUS BELIEFS SPIRITUALITY', 3, '2021-04-07'),
(19, 'GEPC', 'PURPOSIVE COMMUNICATION', 3, '2021-04-07'),
(20, 'NSTP1', 'NATIONAL SERVICE TRAINING PROGRAM', 3, '2021-04-07'),
(21, 'FIL1', 'KOMUNIKASYON SA AKADEMIKONG FILIPINO', 3, '2021-04-07'),
(22, 'PE1', 'PHYSICAL EDUCATION', 2, '2021-04-07'),
(23, 'GEE', 'ETHICS', 3, '2021-04-07'),
(24, 'GEAA', 'ART APPRECIATION', 3, '2021-04-07'),
(25, 'ITC1', 'COMPUTER PROGRAMMING 1', 3, '2021-04-07'),
(26, 'ITC4', 'DISCRETE STRUCTURE', 3, '2021-04-07'),
(27, 'ITC5', 'LOGIC CIRCUIT AND DESIGN', 3, '2021-04-07'),
(28, 'ITC3/ITP1', 'OBJECTED ORIENTED PROGRAMMING AND DATA STRUCTURE', 6, '2021-04-07'),
(29, 'GEMMW', 'MATH IN THE MODERN WORLD', 3, '2021-04-07'),
(30, 'ITC6', 'COMPUTER ORGANIZATION AND ASSEMBLY', 3, '2021-04-07'),
(31, 'ITP4', 'OPERATING SYSTEM APPLICATION', 3, '2021-04-07'),
(32, 'ITP7', 'SOFTWARE ENGINEERING', 3, '2021-04-07'),
(33, 'OAD7', 'EVENTS MANAGEMENT', 3, '2021-04-07'),
(34, 'OAD5', 'BUSSINES REPORT WRITING AND COMMUNICATION', 3, '2021-04-07'),
(35, 'OAD15', 'PRINCIPLES OF PUBLIC AND CUSTOMER RELATION', 3, '2021-04-07'),
(36, 'OAD4', 'FOUNDATIONS OF SHORTHAND', 5, '2021-04-07'),
(37, 'RESEARCH1', 'METHODS OF RESEARCH', 3, '2021-04-07'),
(38, 'OAD4', 'OFFICE SYSTEM ADMINISTRATION', 3, '2021-04-07'),
(39, 'OAD16', 'ADVANCE PROFESSIONAL DEVELOPMENT ', 3, '2021-04-07'),
(40, 'OAD13', 'WEB RESEARCH/LIVING IN THE IT ERA', 3, '2021-04-07'),
(41, 'OAD9', 'HUMAN BEHAVIOR IN ORGANIZATION', 3, '2021-04-07'),
(42, 'OAD6', 'WORD PROCESSING WITH DOCUMENT PROCEDURE', 3, '2021-04-07'),
(43, 'RIZAL', 'LIFE AND WORKS OF RIZAL', 3, '2021-04-07'),
(44, 'GERPH', 'READINGS IN PHILIPPINE HISTORY', 3, '2021-04-07'),
(45, 'RESEARCH2', 'OFFICE ADMINISTRATION RESEARCH', 3, '2021-04-07'),
(46, 'OAD11', 'BUSINESS LAW AND TAXATION', 3, '2021-04-07'),
(47, 'ITP3', 'DATABASE MANAGEMENT SYSTEM', 3, '2021-04-07');

-- --------------------------------------------------------

--
-- Table structure for table `subjects_executive`
--

CREATE TABLE `subjects_executive` (
  `exec_id` int(11) NOT NULL,
  `exec_reg_id` int(11) NOT NULL,
  `exec_subject_id` int(11) NOT NULL,
  `exec_student_id` int(11) NOT NULL,
  `exec_semester` varchar(40) NOT NULL,
  `exec_dateCreated` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subjects_executive`
--

INSERT INTO `subjects_executive` (`exec_id`, `exec_reg_id`, `exec_subject_id`, `exec_student_id`, `exec_semester`, `exec_dateCreated`) VALUES
(108, 67, 4, 2, 'exec_semester', '2021-04-18 18:35:57'),
(109, 67, 5, 2, 'exec_semester', '2021-04-18 18:35:57');

-- --------------------------------------------------------

--
-- Table structure for table `subjects_reg2yr`
--

CREATE TABLE `subjects_reg2yr` (
  `reg2yr_id` int(11) NOT NULL,
  `reg2yr_reg_id` int(11) NOT NULL,
  `reg2yr_subject_id` int(11) NOT NULL,
  `reg2yr_student_id` int(11) NOT NULL,
  `reg2yr_semester` varchar(50) NOT NULL,
  `reg2yr_dateCreated` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `subjects_reg4yr`
--

CREATE TABLE `subjects_reg4yr` (
  `reg4yr_id` int(11) NOT NULL,
  `reg4yr_reg_id` int(11) NOT NULL,
  `reg4yr_subject_id` int(11) NOT NULL,
  `reg4yr_student_id` int(11) NOT NULL,
  `reg4yr_semester` varchar(50) NOT NULL,
  `reg4yr_dateCreated` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `subjects_senior`
--

CREATE TABLE `subjects_senior` (
  `senior_id` int(11) NOT NULL,
  `senior_reg_id` int(11) NOT NULL,
  `senior_subject_id` int(11) NOT NULL,
  `senior_student_id` int(11) NOT NULL,
  `senior_semester` varchar(50) NOT NULL,
  `senior_dateCreated` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adminuser`
--
ALTER TABLE `adminuser`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `authentication`
--
ALTER TABLE `authentication`
  ADD PRIMARY KEY (`auth_id`);

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`course_id`);

--
-- Indexes for table `registration_executive`
--
ALTER TABLE `registration_executive`
  ADD PRIMARY KEY (`registration_id`),
  ADD KEY `stdt_id_reg` (`registration_student_id`),
  ADD KEY `stdt_course` (`registration_course_id`);

--
-- Indexes for table `registration_regular_2yr`
--
ALTER TABLE `registration_regular_2yr`
  ADD PRIMARY KEY (`registration_id`),
  ADD KEY `regular_2yr_course` (`registration_course_id`),
  ADD KEY `regular_2yr_student` (`registration_student_id`);

--
-- Indexes for table `registration_regular_4yr`
--
ALTER TABLE `registration_regular_4yr`
  ADD PRIMARY KEY (`registration_id`),
  ADD KEY `regular_4yr_course` (`registration_course_id`),
  ADD KEY `regular_4yr_student_id` (`registration_student_id`);

--
-- Indexes for table `registration_senior`
--
ALTER TABLE `registration_senior`
  ADD PRIMARY KEY (`registration_id`),
  ADD KEY `senior_course` (`registration_course_id`),
  ADD KEY `senior_student_id` (`registration_student_id`);

--
-- Indexes for table `registration_table`
--
ALTER TABLE `registration_table`
  ADD PRIMARY KEY (`regTable_id`),
  ADD KEY `reg_course` (`course_id`),
  ADD KEY `reg_subject` (`subject_id`);

--
-- Indexes for table `sold`
--
ALTER TABLE `sold`
  ADD PRIMARY KEY (`sold_id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`student_id`);

--
-- Indexes for table `student_credential`
--
ALTER TABLE `student_credential`
  ADD PRIMARY KEY (`student_credential_id`),
  ADD KEY `student_key_credentials` (`student_id`);

--
-- Indexes for table `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`subject_id`);

--
-- Indexes for table `subjects_executive`
--
ALTER TABLE `subjects_executive`
  ADD PRIMARY KEY (`exec_id`),
  ADD KEY `mod1_reg_key` (`exec_reg_id`),
  ADD KEY `mod1_stud_key` (`exec_student_id`),
  ADD KEY `mod1_subject_key` (`exec_subject_id`);

--
-- Indexes for table `subjects_reg2yr`
--
ALTER TABLE `subjects_reg2yr`
  ADD PRIMARY KEY (`reg2yr_id`),
  ADD KEY `2yr_reg_1st` (`reg2yr_reg_id`),
  ADD KEY `2yr_student_1st` (`reg2yr_student_id`),
  ADD KEY `2yr_subject_1st` (`reg2yr_subject_id`);

--
-- Indexes for table `subjects_reg4yr`
--
ALTER TABLE `subjects_reg4yr`
  ADD PRIMARY KEY (`reg4yr_id`),
  ADD KEY `4yr_reg_1st` (`reg4yr_reg_id`),
  ADD KEY `4yr_stud_1st` (`reg4yr_student_id`),
  ADD KEY `4yr_subject_1st` (`reg4yr_subject_id`);

--
-- Indexes for table `subjects_senior`
--
ALTER TABLE `subjects_senior`
  ADD PRIMARY KEY (`senior_id`),
  ADD KEY `senior_reg_1st` (`senior_reg_id`),
  ADD KEY `senior_stud_1st` (`senior_student_id`),
  ADD KEY `senior_subject_1st` (`senior_subject_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adminuser`
--
ALTER TABLE `adminuser`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `authentication`
--
ALTER TABLE `authentication`
  MODIFY `auth_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `course`
--
ALTER TABLE `course`
  MODIFY `course_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `registration_executive`
--
ALTER TABLE `registration_executive`
  MODIFY `registration_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT for table `registration_regular_2yr`
--
ALTER TABLE `registration_regular_2yr`
  MODIFY `registration_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `registration_regular_4yr`
--
ALTER TABLE `registration_regular_4yr`
  MODIFY `registration_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `registration_senior`
--
ALTER TABLE `registration_senior`
  MODIFY `registration_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `registration_table`
--
ALTER TABLE `registration_table`
  MODIFY `regTable_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sold`
--
ALTER TABLE `sold`
  MODIFY `sold_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `student_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `student_credential`
--
ALTER TABLE `student_credential`
  MODIFY `student_credential_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `subjects`
--
ALTER TABLE `subjects`
  MODIFY `subject_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `subjects_executive`
--
ALTER TABLE `subjects_executive`
  MODIFY `exec_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=110;

--
-- AUTO_INCREMENT for table `subjects_reg2yr`
--
ALTER TABLE `subjects_reg2yr`
  MODIFY `reg2yr_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `subjects_reg4yr`
--
ALTER TABLE `subjects_reg4yr`
  MODIFY `reg4yr_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `subjects_senior`
--
ALTER TABLE `subjects_senior`
  MODIFY `senior_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `registration_executive`
--
ALTER TABLE `registration_executive`
  ADD CONSTRAINT `executive_course` FOREIGN KEY (`registration_course_id`) REFERENCES `course` (`course_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `executive_student_id` FOREIGN KEY (`registration_student_id`) REFERENCES `students` (`student_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `registration_regular_2yr`
--
ALTER TABLE `registration_regular_2yr`
  ADD CONSTRAINT `regular_2yr_course` FOREIGN KEY (`registration_course_id`) REFERENCES `course` (`course_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `regular_2yr_student` FOREIGN KEY (`registration_student_id`) REFERENCES `students` (`student_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `registration_regular_4yr`
--
ALTER TABLE `registration_regular_4yr`
  ADD CONSTRAINT `regular_4yr_course` FOREIGN KEY (`registration_course_id`) REFERENCES `course` (`course_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `regular_4yr_student_id` FOREIGN KEY (`registration_student_id`) REFERENCES `students` (`student_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `registration_senior`
--
ALTER TABLE `registration_senior`
  ADD CONSTRAINT `senior_course` FOREIGN KEY (`registration_course_id`) REFERENCES `course` (`course_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `senior_student_id` FOREIGN KEY (`registration_student_id`) REFERENCES `students` (`student_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `registration_table`
--
ALTER TABLE `registration_table`
  ADD CONSTRAINT `reg_course` FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `reg_subject` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`subject_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student_credential`
--
ALTER TABLE `student_credential`
  ADD CONSTRAINT `student_key_credentials` FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `subjects_executive`
--
ALTER TABLE `subjects_executive`
  ADD CONSTRAINT `mod1_reg_key` FOREIGN KEY (`exec_reg_id`) REFERENCES `registration_executive` (`registration_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `mod1_stud_key` FOREIGN KEY (`exec_student_id`) REFERENCES `students` (`student_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `mod1_subject_key` FOREIGN KEY (`exec_subject_id`) REFERENCES `subjects` (`subject_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `subjects_reg2yr`
--
ALTER TABLE `subjects_reg2yr`
  ADD CONSTRAINT `2yr_reg_1st` FOREIGN KEY (`reg2yr_reg_id`) REFERENCES `registration_regular_2yr` (`registration_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `2yr_student_1st` FOREIGN KEY (`reg2yr_student_id`) REFERENCES `students` (`student_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `2yr_subject_1st` FOREIGN KEY (`reg2yr_subject_id`) REFERENCES `subjects` (`subject_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `subjects_reg4yr`
--
ALTER TABLE `subjects_reg4yr`
  ADD CONSTRAINT `4yr_reg_1st` FOREIGN KEY (`reg4yr_reg_id`) REFERENCES `registration_regular_4yr` (`registration_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `4yr_stud_1st` FOREIGN KEY (`reg4yr_student_id`) REFERENCES `students` (`student_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `4yr_subject_1st` FOREIGN KEY (`reg4yr_subject_id`) REFERENCES `subjects` (`subject_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `subjects_senior`
--
ALTER TABLE `subjects_senior`
  ADD CONSTRAINT `senior_reg_1st` FOREIGN KEY (`senior_reg_id`) REFERENCES `registration_senior` (`registration_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `senior_stud_1st` FOREIGN KEY (`senior_student_id`) REFERENCES `students` (`student_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `senior_subject_1st` FOREIGN KEY (`senior_subject_id`) REFERENCES `subjects` (`subject_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

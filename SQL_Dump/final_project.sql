-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Värd: 127.0.0.1
-- Tid vid skapande: 15 jan 2020 kl 14:58
-- Serverversion: 10.4.6-MariaDB
-- PHP-version: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databas: `final_project`
--

-- --------------------------------------------------------

--
-- Tabellstruktur `author`
--

CREATE TABLE `author` (
  `id` int(11) NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumpning av Data i tabell `author`
--

INSERT INTO `author` (`id`, `first_name`, `last_name`) VALUES
(1, 'Emily', 'Crawford'),
(2, 'Damian', 'Chalmers'),
(3, 'Martin', 'Dixon'),
(4, 'Justine', 'Pila'),
(5, 'Paul S.', 'Davies'),
(6, 'Raymond', 'Wacks'),
(7, 'Robert', 'Cryer'),
(8, 'Craig', 'Larman'),
(9, 'Robert C.', 'Martin'),
(10, 'Douglas', 'Crockford'),
(11, 'Ramez', 'Elmasri'),
(12, 'Shamkant B.', 'Navathe'),
(13, 'Ian', 'Sommerville');

-- --------------------------------------------------------

--
-- Ersättningsstruktur för vy `available_books`
-- (See below for the actual view)
--
CREATE TABLE `available_books` (
`loan_date` date
,`return_date` date
,`title` varchar(50)
,`isbn` varchar(20)
,`available` varchar(22)
);

-- --------------------------------------------------------

--
-- Tabellstruktur `book`
--

CREATE TABLE `book` (
  `title` varchar(50) NOT NULL,
  `isbn` varchar(20) NOT NULL,
  `published` date NOT NULL,
  `description` longtext DEFAULT NULL,
  `language` varchar(20) DEFAULT NULL,
  `genre_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumpning av Data i tabell `book`
--

INSERT INTO `book` (`title`, `isbn`, `published`, `description`, `language`, `genre_id`) VALUES
('Applying UML and Patterns', '9780131489066', '2004-10-01', 'Presents a step-by-step process to master object-oriented analysis and design, from requirements gathering all the way to code generation, using the latest version of the industry standard modelling language. Original. (Advanced)', 'English', 1),
('Clean Code', '9780132350884', '2008-08-01', 'Even bad code can function. But if code isn\'t clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn\'t have to be that way. Noted software expert Robert C. Martin presents a revolutionary paradigm with Clean Code: A Handbook of Agile Software Craftsmanship. Martin has teamed up with his colleagues from Object Mentor to distil their best agile practice of cleaning code \'on the fly\' into a book that will instil within you the values of a software craftsman and make you a better programmer-but only if you work at it. What kind of work will you be doing? You\'ll be reading code-lots of code. And you will be challenged to think about what\'s right about that code, and what\'s wrong with it. More importantly, you will be challenged to reassess your professional values and your commitment to your craft. Clean Code is divided into three parts. The first describes the principles, patterns, and practices of writing clean code. The second part consists of several case studies of increasing complexity. Each case study is an exercise in cleaning up code-of transforming a code base that has some problems into one that is sound and efficient. The third part is the payoff: a single chapter containing a list of heuristics and \'smells\' gathered while creating the case studies. The result is a knowledge base that describes the way we think when we write, read, and clean code. Readers will come away from this book understanding. How to tell the difference between good and bad code How to write good code and how to transform bad code into good code How to create good names, good functions, good objects, and good classes How to format code for maximum readability How to implement complete error handling without obscuring code logic How to unit test and practice test-driven development. This book is a must for any developer, software engineer, project manager, team lead, or systems analyst with an interest in producing better code.', 'English', 1),
('Clean Architecture', '9780134494166', '2017-09-01', 'Building upon the success of best-sellers The Clean Coder and Clean Code, legendary software craftsman Robert C. \'Uncle Bob\' Martin shows how to bring greater professionalism and discipline to application architecture and design. As with his other books, Martin\'s Clean Architecture doesn\'t merely present multiple choices and options, and say \'use your best judgment\': it tells you what choices to make, and why those choices are critical to your success. Martin offers direct, no-nonsense answers to key architecture and design questions like: What are the best high level structures for different kinds of applications, including web, database, thick-client, console, and embedded apps? What are the core principles of software architecture? What is the role of the architect, and what is he/she really trying to achieve? What are the core principles of software design? How do designs and architectures go wrong, and what can you do about it? What are the disciplines and practices of professional architects and designers? Clean Architecture is essential reading for every software architect, systems analyst, system designer, and software manager -- and for any programmer who aspires to these roles or is impacted by their work.', 'English', 1),
('Clean Agile', '9780135781869', '2019-10-01', 'Twenty years after the Agile Manifesto was first presented, the legendary Robert C. Martin (Uncle Bob) reintroduces agile values and principles for a new generation of software developers. In this eagerly awaited book, the best-selling author of The Clean Coder shows how to bring unprecedented levels of professionalism and discipline to agile development-and thereby write far more effective, successful software. As with his other books, Martin\'s Clean Agile: Back to Basics doesn\'t merely present multiple choices and options, and say \'use your best judgment\'; it tells you what choices to make and why those choices are critical to your success. Writing in the agile context, Martin offers direct, no-nonsense answers to crucial questions: How and why did agile begin? What are the costs and benefits of agile? What are the most effective practices of agile development? How should an agile team be organized? What roles do programmers, testers, and managers play in an agile team? What is the role of the Agile Coach? What about agile for large projects? What kinds of projects benefit from agile? Clean Agile: Back to Basics is essential reading for programmers, managers, testers, project managers, and every software professional called upon to lead or participate in an agile project.', 'English', 1),
('Cases & Materials on International Law', '9780198727644', '2016-10-01', 'Cases & Materials on International Law is a topical and engaging companion for study, offering broad coverage on public international law and placing disputes directly within the context of contemporary debate. The book contains the essential cases and materials that students need in order to fully understand and analyse the international legal system, drawing on a truly global range of jurisdictions and sources. Expert author commentary and notes place selected extracts within the wider legal framework and explain the complexities of the principles of law to students. The sixth edition includes expanded discussion of developing areas, including UN resolutions on climate change and international environmental law, new material from the International Law Commission, and coverage of major events, such as the annexation of Crimea, the legal context for Scottish independence and the UK\'s exit from the European Union, and the United Nations Security Council\'s Resolution on Malaysia Airlines MH17.', 'English', 2),
('Law: A Very Short Introduction', '9780198745624', '2015-09-01', 'Law is at the heart of every society, protecting rights, imposing duties, and establishing a framework for the conduct of almost all social, political, and economic activity. Despite this, the law often seems a highly technical, perplexing mystery, with its antiquated and often impenetrable jargon, obsolete procedures, and endless stream of complex statutes and legislation.In this Very Short Introduction Raymond Wacks introduces the major branches of the law, describing what lawyers do, and how courts operate, and considers the philosophy of law and its pursuit of justice, freedom, and equality. In this second edition, Wacks locates the discipline in our contemporary world, considering the pressures of globalization and digitalisation and the nature of the law in our culture of threatened security and surveillance. ABOUT THE SERIES: The Very Short Introductions series from Oxford University Press contains hundreds of titles in almost every subject area. These pocket-sized books are the perfect way to get ahead in a new subject quickly. Our expert authors combine facts, analysis, perspective, new ideas, and enthusiasm to make interesting and challenging topics highly readable.', 'English', 2),
('Understanding Jurisprudence', '9780198806011', '2017-10-01', 'Written with students in mind, Professor Raymond Wacks brings legal theory to life through his lucid and entertaining style. The author has crafted a manageable guide, balancing concise introductions to the key theorists and core issues such as punishment and rights without ignoring the subtleties of the subject. Seminal quotes from leading scholars are included to help students recognise the impact of their work, while extensive further reading suggestions at the end of each chapter invite students to explore the broad range of literature available on central topics. Each chapter concludes with a series of critical questions designed to encourage reader to think analytically about the law and the key debates which surround it. This book is accompanied by online resources which includes multiple-choice questions with instant feedback to give students the chance to test their understanding.', 'English', 2),
('European Intellectual Property Law', '9780198831280', '2019-08-01', 'European Intellectual Property Law offers a full account of the main areas of substantive European IP law and a discussion of their wider context and effect. The amount and reach of European law, and decision-making in the field of intellectual property has grown exponentially since the 1960s, making it increasingly difficult to treat European law as an adjunct to domestic intellectual property regimes. European Intellectual Property Law responds to this reality by presenting a clear and detailed account of each of the main areas of substantive EU intellectual property law, situated in the context of both the EU legal system and international IP law, including EU constitutional law, the law of the European Patent Convention 1973/2000, and private international law. It draws selectively on examples from domestic IP regimes to illustrate substantive differences between those regimes and to demonstrate the impact of European law, and decision-making on EU Member States. This unique, thoroughly modern approach goes beyond a discussion of the provisions of European legal instruments to consider their wider context and effect. European Intellectual Property Law is the ideal guide for any student wishing to gain a full and critical understanding of the substantive European law of intellectual property.', 'English', 2),
('Scaling Lean & Agile Development: Thinking and Org', '9780321480965', '2008-12-01', 'Lean Development and Agile Methods for Large-Scale Products: Key Thinking and Organizational Tools for Sustainable Competitive Success Increasingly, large product-development organizations are turning to lean thinking, agile principles and practices, and large-scale Scrum to sustainably and quickly deliver value and innovation. However, many groups have floundered in their practice-oriented adoptions. Why? Because without a deeper understanding of the thinking tools and profound organizational redesign needed, it is as though casting seeds on to an infertile field. Now, drawing on their long experience leading and guiding large-scale lean and agile adoptions for large, multisite, and offshore product development, and drawing on the best research for great team-based agile organizations, internationally recognized consultant and best-selling author Craig Larman and former leader of the agile transformation at Nokia Networks Bas Vodde share the key thinking and organizational tools needed to plant the seeds of product development success in a fertile lean and agile enterprise. Coverage includes Lean thinking and development combined with agile practices and methods. Systems thinking. Queuing theory and large-scale development processes. Moving from single-function and component teams to stable cross-functional cross-component Scrum feature teams with end-to-end responsibility for features Organizational redesign to a lean and agile enterprise that delivers value fast. Large-scale Scrum for multi-hundred-person product groups. In a competitive environment that demands ever-faster cycle times and greater innovation, applied lean thinking and agile principles are becoming an urgent priority. Scaling Lean & Agile Development will help leaders create the foundation for their lean enterprise-and deliver on the significant benefits of agility. In addition to the foundation tools in this text, see the companion book Practices for Scaling Lean & Agile Development: Large, Multisite, and Offshore Product Development with Large-Scale Scrum for complementary action tools.', 'English', 1),
('Large-Scale Scrum', '9780321985712', '2016-08-01', 'The Go-To Resource for Large-Scale Organizations to Be Agile Rather than asking, \'How can we do agile at scale in our big complex organization?\' a different and deeper question is, \'How can we have the same simple structure that Scrum offers for the organization, and be agile at scale rather than do agile?\' This profound insight is at the heart of LeSS (Large-Scale Scrum). In Large-Scale Scrum: More with LeSS, Craig Larman and Bas Vodde have distilled over a decade of experience in large-scale LeSS adoptions towards a simpler organization that delivers more flexibility with less complexity, more value with less waste, and more purpose with less prescription. Targeted to anyone involved in large-scale development, Large-Scale Scrum: More with LeSS, offers straight-to-the-point guides for how to be agile at scale, with LeSS. It will clearly guide you to adopt LeSS structure a large development organization for customer value. Clarify the role of management and Scrum Master. Define what your product is, and why. Be a great Product Owner. Work with multiple whole-product focused feature teams in one Sprint that produces a shippable product. Coordinate and integrate between teams . Work with multi-site teams', 'English', 1),
('Javascript: The Good Parts', '9780596517748', '2008-05-01', 'Offers an explanation of the features that make JavaScript an object-oriented programming language, and warns you about the bad parts. This book defines a subset of JavaScript that\'s readable and maintainable than the language. It offers ideas that include functions, loose typing, dynamic objects, and an expressive object literal notation.', 'English', 1),
('International Humanitarian Law', '9781107537095', '2015-09-01', 'This clear and concise textbook provides an accessible and up-to-date examination of international humanitarian law. With the aid of detailed examples, extracts from relevant cases, and useful discussion questions, students are expertly guided through the text. A recommended reading list is included in every chapter to support deeper engagement with the material. Emerging trends in theory and practice are also explored, allowing readers to build on their knowledge and grapple with some of the biggest challenges facing the law of armed conflict in the twenty-first century.', 'English', 2),
('European Union Law', '9781107664340', '2014-06-01', 'As the preferred choice of both teachers and students, this textbook offers an unrivalled combination of expertise, accessibility and comprehensive coverage. The new edition reflects the way the economic crisis has impacted the shape and nature of European Union law. Materials from case law, legislation and academic literature are integrated throughout to expose the student to the broadest range of views. Additional online material on the application of EU law in non member states and on rulings on the Fiscal Compact ensures the material is completely current. The new edition includes a timeline which charts the evolution of the EU project. Written in a way which encourages sophisticated analysis, the book ensures the student\'s full engagement with sometimes complex material. More importantly, it offers the clarity which is essential to understanding. A required text for all interested in European Union law.', 'English', 2),
('International Criminal Law Documents', '9781108729086', '2019-08-01', 'Written by a team of international lawyers with extensive academic and practical experience of international criminal law, the fourth edition of this leading textbook offers readers comprehensive coverage and a high level of academic rigour while maintaining its signature accessible and engaging style. Introducing the readers to the fundamental concepts of international criminal law, as well as the domestic and international institutions that enforce that law, this book engages with critical questions, political and moral challenges, and alternatives to international justice. Suitable for undergraduate and postgraduate students, academics and practitioners in the field, and cited by the International Criminal Tribunal for Yugoslavia, the International Criminal Court, the Special Court for Sierra Leone, the Extraordinary Chambers in the Courts of Cambodia, and the highest courts in domestic systems, this book is a must-read for anyone interested in learning more about international criminal law.', 'English', 2),
('An Introduction to International Criminal Law and ', '9781108741613', '2019-08-01', 'For courses in International Economics, International Finance, and International Trade. A balanced approach to theory and policy applications International Economics: Theory and Policy provides engaging, balanced coverage of the key concepts and practical applications of the two main topic areas of the discipline. For both international trade and international finance, an intuitive introduction to theory is followed by detailed coverage of policy applications. With this new Eleventh Edition, Global Edition, the author team of Nobel Prize-winning economist Paul Krugman, renowned researcher Maurice Obstfeld, and Marc Melitz of Harvard University, continues to set the standard for International Economics courses. Pearson MyLab TM Economics not included. Students, if Pearson MyLab Economics is a recommended/mandatory component of the course, please ask your instructor for the correct ISBN and course ID.  MyLab Economics should only be purchased when required by an instructor. Instructors contact your Pearson rep for more information. Pearson MyLab Economics is an online homework, tutorial, and assessment product designed to personalize learning and improve results. With a wide range of interactive, engaging, and assignable activities, students are encouraged to actively learn and retain tough course concepts.', 'English', 2),
('Modern Land Law', '9781138958098', '2016-07-01', 'Modern Land Law is one of the most current and reliable textbooks available on land law today, offering a lively and thought-provoking account of a subject that remains at the heart of our legal system. Dispelling any apprehension about the subject\'s formidability from the outset, this compact textbook provides an absorbing and exact analysis of all the key legal principles relating to land. Written with students firmly in mind, a clear introduction to every chapter frames each topic in its wider context and corresponding chapter summaries help to consolidate learning and encourage reflection. This 10th edition has been thoroughly revised and updated to take into account key developments in the law including an updated chapter on registered title in the light of the recent Court of Appeal decision in Swift First v Chief Land Registrar and Goldharp v McLeod. There is an update on the Law Commission\'s recommendations on easements and covenants, including the `Right to Light\' as well as analysis of recent, often contradictory, decisions in case law relating to cohabitation.', 'English', 2),
('Software Engineering, Global Edition', '9781292096131', '2015-07-01', 'For courses in computer science and software engineering The Fundamental Practice of Software Engineering Software Engineering introduces students to the overwhelmingly important subject of software programming and development. In the past few years, computer systems have come to dominate not just our technological growth, but the foundations of our world\'s major industries. This text seeks to lay out the fundamental concepts of this huge and continually growing subject area in a clear and comprehensive manner. The Tenth Edition contains new information that highlights various technological updates of recent years, providing students with highly relevant and current information. Sommerville\'s experience in system dependability and systems engineering guides the text through a traditional plan-based approach that incorporates some novel agile methods. The text strives to teach the innovators of tomorrow how to create software that will make our world a better, safer, and more advanced place to live.', 'English', 1),
('Fundamentals of Database Systems, Global Edition', '9781292097619', '2016-08-01', 'For database systems courses in Computer Science. This book introduces the fundamental concepts necessary for designing, using, and implementing database systems and database applications. Our presentation stresses the fundamentals of database modelling and design, the languages and models provided by the database management systems, and database system implementation techniques. The book is meant to be used as a textbook for a one- or two-semester course in database systems at the junior, senior, or graduate level, and as a reference book. The goal is to provide an in-depth and up-to-date presentation of the most important aspects of database systems and applications, and related technologies. It is assumed that readers are familiar with elementary programming and data-structuring concepts and that they have had some exposure to the basics of computer organization.', 'English', 1),
('The Jurisprudence of Lord Hoffmann', '9781509917693', '2017-10-01', 'Lord Leonard Hoffmann remains one of the most important and influential English jurists. Born in South Africa, he came to England as a Rhodes Scholar to study law at the University of Oxford. After graduating from the Bachelor of Civil Law as Vinerian Scholar, he was elected Stowell Civil Law Fellow of University College. There followed an extremely distinguished judicial career, including 14 years as a member of the Judicial Committee of the House of Lords (from 1995 to 2009).In 2009, Lord Hoffmann returned to the Oxford Law Faculty as a Visiting Professor. In this volume, current and past colleagues of Lord Hoffmann from the University of Oxford examine different aspects of his jurisprudence in diverse areas of private and public law. The contributions are testament to the clarity and creativity of his judicial and extra-judicial writings, to his enduring influence and extraordinary intellectual breadth, and to the respect and affection in which he is held.', 'English', 2),
('JavaScript: How JavaScript Works', '9781949815009', '2018-10-01', 'This book is for people who have had some experience with Java¬Script, and want to have a better, deeper understanding of how it works and how to use it well. It is also for experienced programmers who are looking to understand the workings of another language. This book is not for beginners. I hope to someday write a book for beginners. This is not that book. This is not a light book. If you skim it, you will likely get nothing from of it. This book is not about JavaScript engines or virtual machines. It is about the language itself and the things every programmer should know about it. This book is a radical reappraisal of JavaScript, how it works, how it could be made better, and how it can be better used. It is about how to think about Java¬Script and how to think in Java¬Script. I am going to pretend that the current version of the lan¬guage is the only version. I am not going to waste your time by showing how things worked in ES1 or ES3 or ES5. That does not matter. The focus is on how Java-Script works for us now. This book is not comprehensive. There are large, complex chunks of the language that will be dismissed without a word. If I fail to mention your most favourite feature, that is most likely because that feature is crap. I will not be paying much attention to syntax. I am assuming that you already know how to write an if statement.', 'English', 1);

-- --------------------------------------------------------

--
-- Ersättningsstruktur för vy `books_score`
-- (See below for the actual view)
--
CREATE TABLE `books_score` (
`title` varchar(50)
,`isbn` varchar(20)
,`score` int(11)
,`student_id` varchar(20)
,`comment` longtext
,`id` int(11)
);

-- --------------------------------------------------------

--
-- Tabellstruktur `copy`
--

CREATE TABLE `copy` (
  `id` int(11) NOT NULL,
  `isbn` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumpning av Data i tabell `copy`
--

INSERT INTO `copy` (`id`, `isbn`) VALUES
(14, '9780131489066'),
(15, '9780131489066'),
(16, '9780131489066'),
(17, '9780131489066'),
(3, '9780132350884'),
(4, '9780132350884'),
(9, '9780134494166'),
(10, '9780134494166'),
(20, '9780135781869'),
(21, '9780135781869'),
(38, '9780198727644'),
(39, '9780198727644'),
(30, '9780198745624'),
(31, '9780198745624'),
(28, '9780198806011'),
(29, '9780198806011'),
(34, '9780198831280'),
(35, '9780198831280'),
(18, '9780321480965'),
(19, '9780321480965'),
(22, '9780321985712'),
(23, '9780321985712'),
(1, '9780596517748'),
(2, '9780596517748'),
(43, '9781107537095'),
(44, '9781107537095'),
(40, '9781107664340'),
(41, '9781107664340'),
(42, '9781107664340'),
(24, '9781108729086'),
(25, '9781108729086'),
(26, '9781108741613'),
(27, '9781108741613'),
(36, '9781138958098'),
(37, '9781138958098'),
(5, '9781292096131'),
(6, '9781292096131'),
(7, '9781292097619'),
(8, '9781292097619'),
(32, '9781509917693'),
(33, '9781509917693'),
(11, '9781949815009'),
(12, '9781949815009'),
(13, '9781949815009');

-- --------------------------------------------------------

--
-- Tabellstruktur `genre`
--

CREATE TABLE `genre` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumpning av Data i tabell `genre`
--

INSERT INTO `genre` (`id`, `name`) VALUES
(1, 'Computer Science'),
(2, 'Law');

-- --------------------------------------------------------

--
-- Tabellstruktur `loan`
--

CREATE TABLE `loan` (
  `copy_id` int(20) NOT NULL,
  `student_id` varchar(20) NOT NULL,
  `loan_date` date NOT NULL,
  `return_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumpning av Data i tabell `loan`
--

INSERT INTO `loan` (`copy_id`, `student_id`, `loan_date`, `return_date`) VALUES
(1, 'am223rj', '2019-12-01', '2020-02-01'),
(6, 'gs412ht', '2020-01-08', '2020-03-08'),
(11, 'gs412ht', '2020-01-08', '2020-03-08'),
(12, 'no356it', '2019-11-15', '2020-01-15'),
(14, 'sn522gb', '2020-01-10', '2020-03-10'),
(15, 'js387mk', '2019-11-30', '2020-01-30'),
(18, 'no356it', '2019-11-15', '2020-01-15'),
(26, 'em445yr', '2020-01-10', '2020-03-10'),
(34, 'em445yr', '2019-12-05', '2020-02-05'),
(35, 'em445yr', '2020-01-10', '2020-03-10'),
(40, 'am223rj', '2019-12-01', '2020-02-01');

-- --------------------------------------------------------

--
-- Tabellstruktur `review`
--

CREATE TABLE `review` (
  `id` int(11) NOT NULL,
  `student_id` varchar(20) NOT NULL,
  `isbn` varchar(20) NOT NULL,
  `score` int(11) NOT NULL,
  `comment` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumpning av Data i tabell `review`
--

INSERT INTO `review` (`id`, `student_id`, `isbn`, `score`, `comment`) VALUES
(1, 'sn522gb', '9781107537095', 4, 'Interesting book! It thought me alot about humanitarian law and had good discussions!'),
(2, 'js387mk', '9781107537095', 3, 'Ok book. Would have liked it to be a bit deeper'),
(3, 'sn522gb', '9781107664340', 5, 'Excellent book, helped me alot during european union law studies.'),
(4, 'sn522gb', '9780198745624 ', 3, 'A short and consise book for someone who wants an easy intruction to law'),
(5, 'am223rj', '9780198745624 ', 3, 'Good book, easy to read and understand'),
(6, 'js387mk', '9780198745624 ', 2, 'I think the book should have been a bit more detailed. Didn\'t give as much as I wished.'),
(7, 'js387mk', '9781949815009', 4, 'A good book when you want to develop your understanding of JavaScript.'),
(8, 'gs412ht', '9781949815009', 3, 'Ok book, helped me understand Javascript on a deeper level. Good for webprogrammers.'),
(9, 'sn522gb', '9781949815009', 2, 'I did\'nt have much use of the book, I might need to learn more about JavaScript firts though.'),
(10, 'am223rj', '9781949815009', 4, 'Very interesting book, helped med with Javascript during web programming courses.'),
(11, 'sn522gb', '9781292097619', 4, 'Got book for courses with database management systems where you also need to study the theori and design part!'),
(12, 'no356it', '9781292097619', 2, 'Didn\'t do much for me. To much theory and to little actual sql and code.'),
(13, 'sn522gb', '9780132350884', 4, 'Easy to understand and very useful learning code quality'),
(14, 'gs412ht', '9780132350884', 4, 'Interesting and fun to read. I learnt alot about clean code'),
(15, 'no356it', '9780132350884', 3, 'The book was ok.'),
(16, 'am223rj', '9780132350884', 5, 'Excellent book, helped me to understand how to improve my code quality a lot! Very useful book!'),
(17, 'gs412ht', '9781509917693', 3, 'Interesting book, if you need to learn about Lord Leonard Hoffmann this is a book for you'),
(18, 'no356it', '9781509917693', 3, 'Good book, worth reading'),
(19, 'em445yr', '9780135781869', 4, 'If you want to read about agile software development, how, trade offs etc this is a great book. Robert C. Martin is very intresting and gifted.'),
(20, 'no356it', '9780135781869', 4, 'Gives good information on how to and when to use agile project techniques.'),
(21, 'sn522gb', '9780135781869', 3, 'Ok book, if you need to learn about an agile process you probably would benefit from reading this book'),
(22, 'no356it', '9780198806011', 3, 'Ok book, fun to read. Could have been more detailed.'),
(23, 'em445yr', '9780198806011', 2, 'Not as advanced book as I would have liked, unnecessary to read for me'),
(24, 'sn522gb', '9780198806011', 4, 'Fun to read book, easy to understand and good examples and reading tips.'),
(25, 'am223rj', '9780198806011', 3, 'Ok book, helped me with legal theory');

-- --------------------------------------------------------

--
-- Tabellstruktur `student`
--

CREATE TABLE `student` (
  `id` varchar(20) NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumpning av Data i tabell `student`
--

INSERT INTO `student` (`id`, `first_name`, `last_name`) VALUES
('am223rj', 'Anna', 'Malmgren'),
('em445yr', 'Emma', 'Malm'),
('gs412ht', 'Gustav', 'Strand'),
('js387mk', 'Johan', 'Svensson'),
('no356it', 'Nils', 'Olofsson'),
('sn522gb', 'Sara', 'Nilsson');

-- --------------------------------------------------------

--
-- Tabellstruktur `writes`
--

CREATE TABLE `writes` (
  `author_id` int(11) NOT NULL,
  `book_isbn` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumpning av Data i tabell `writes`
--

INSERT INTO `writes` (`author_id`, `book_isbn`) VALUES
(1, '9781107537095'),
(2, '9781107664340'),
(3, '9780198727644'),
(3, '9781138958098'),
(4, '9780198831280'),
(4, '9781509917693'),
(5, '9781509917693'),
(6, '9780198745624'),
(6, '9780198806011'),
(7, '9781108729086'),
(7, '9781108741613'),
(8, '9780131489066'),
(8, '9780321985712'),
(9, '9780132350884'),
(9, '9780134494166'),
(9, '9780135781869 '),
(10, '9780596517748'),
(10, '9781949815009'),
(11, '9781292097619'),
(12, '9781292097619'),
(13, '9781292096131');

-- --------------------------------------------------------

--
-- Struktur för vy `available_books`
--
DROP TABLE IF EXISTS `available_books`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `available_books`  AS  select `loan`.`loan_date` AS `loan_date`,`loan`.`return_date` AS `return_date`,`book`.`title` AS `title`,`book`.`isbn` AS `isbn`,concat(count(`copy`.`id`) - count(`loan`.`copy_id`)) AS `available` from ((`copy` left join `loan` on(`copy`.`id` = `loan`.`copy_id`)) join `book` on(`copy`.`isbn` = `book`.`isbn`)) group by `book`.`title` ;

-- --------------------------------------------------------

--
-- Struktur för vy `books_score`
--
DROP TABLE IF EXISTS `books_score`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `books_score`  AS  select `book`.`title` AS `title`,`book`.`isbn` AS `isbn`,`review`.`score` AS `score`,`review`.`student_id` AS `student_id`,`review`.`comment` AS `comment`,`review`.`id` AS `id` from (`book` left join `review` on(`book`.`isbn` = `review`.`isbn`)) ;

--
-- Index för dumpade tabeller
--

--
-- Index för tabell `author`
--
ALTER TABLE `author`
  ADD PRIMARY KEY (`id`);

--
-- Index för tabell `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`isbn`),
  ADD KEY `genre_id` (`genre_id`);

--
-- Index för tabell `copy`
--
ALTER TABLE `copy`
  ADD PRIMARY KEY (`id`),
  ADD KEY `isbn` (`isbn`);

--
-- Index för tabell `genre`
--
ALTER TABLE `genre`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Index för tabell `loan`
--
ALTER TABLE `loan`
  ADD PRIMARY KEY (`copy_id`),
  ADD KEY `student_id` (`student_id`);

--
-- Index för tabell `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`id`),
  ADD KEY `student_id` (`student_id`),
  ADD KEY `isbn` (`isbn`);

--
-- Index för tabell `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Index för tabell `writes`
--
ALTER TABLE `writes`
  ADD PRIMARY KEY (`author_id`,`book_isbn`);

--
-- AUTO_INCREMENT för dumpade tabeller
--

--
-- AUTO_INCREMENT för tabell `author`
--
ALTER TABLE `author`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT för tabell `copy`
--
ALTER TABLE `copy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT för tabell `genre`
--
ALTER TABLE `genre`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT för tabell `review`
--
ALTER TABLE `review`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- Restriktioner för dumpade tabeller
--

--
-- Restriktioner för tabell `book`
--
ALTER TABLE `book`
  ADD CONSTRAINT `book_ibfk_1` FOREIGN KEY (`genre_id`) REFERENCES `genre` (`id`);

--
-- Restriktioner för tabell `copy`
--
ALTER TABLE `copy`
  ADD CONSTRAINT `copy_ibfk_1` FOREIGN KEY (`isbn`) REFERENCES `book` (`isbn`);

--
-- Restriktioner för tabell `loan`
--
ALTER TABLE `loan`
  ADD CONSTRAINT `loan_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`);

--
-- Restriktioner för tabell `review`
--
ALTER TABLE `review`
  ADD CONSTRAINT `review_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`),
  ADD CONSTRAINT `review_ibfk_2` FOREIGN KEY (`isbn`) REFERENCES `book` (`isbn`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

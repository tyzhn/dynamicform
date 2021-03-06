USE [master]
GO
/****** Object:  Database [DynamicForm]    Script Date: 5/9/2018 11:20:24 AM ******/
CREATE DATABASE [DynamicForm]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'DynamicForm_Data', FILENAME = N'C:\Program Files (x86)\Microsoft SQL Server\MSSQL11.MSSQLSERVER\MSSQL\DATA\DynamicForm.mdf' , SIZE = 3136KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'MetaData_Log', FILENAME = N'C:\Program Files (x86)\Microsoft SQL Server\MSSQL11.MSSQLSERVER\MSSQL\DATA\DynamicForm.ldf' , SIZE = 3136KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [DynamicForm] SET COMPATIBILITY_LEVEL = 110
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [DynamicForm].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [DynamicForm] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [DynamicForm] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [DynamicForm] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [DynamicForm] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [DynamicForm] SET ARITHABORT OFF 
GO
ALTER DATABASE [DynamicForm] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [DynamicForm] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [DynamicForm] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [DynamicForm] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [DynamicForm] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [DynamicForm] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [DynamicForm] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [DynamicForm] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [DynamicForm] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [DynamicForm] SET  DISABLE_BROKER 
GO
ALTER DATABASE [DynamicForm] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [DynamicForm] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [DynamicForm] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [DynamicForm] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [DynamicForm] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [DynamicForm] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [DynamicForm] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [DynamicForm] SET RECOVERY FULL 
GO
ALTER DATABASE [DynamicForm] SET  MULTI_USER 
GO
ALTER DATABASE [DynamicForm] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [DynamicForm] SET DB_CHAINING OFF 
GO
ALTER DATABASE [DynamicForm] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [DynamicForm] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
EXEC sys.sp_db_vardecimal_storage_format N'DynamicForm', N'ON'
GO
USE [DynamicForm]
GO
/****** Object:  Table [dbo].[Answer]    Script Date: 5/9/2018 11:20:24 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Answer](
	[AnswerID] [int] IDENTITY(1,1) NOT NULL,
	[QuestionID] [int] NULL,
	[Text] [nvarchar](250) NULL,
	[BusinessUnitMemberID] [int] NULL,
	[CreatedOn] [datetime] NULL CONSTRAINT [DF_Answer_CreatedOn]  DEFAULT (getutcdate()),
	[CreatedBy] [int] NULL,
	[LastUpdatedOn] [datetime] NULL CONSTRAINT [DF_Answer_LastUpdatedOn]  DEFAULT (getutcdate()),
	[LastUpdatedBy] [int] NULL,
	[SurveyFormId] [int] NULL,
 CONSTRAINT [PK_Answer] PRIMARY KEY CLUSTERED 
(
	[AnswerID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[BusinessUnit]    Script Date: 5/9/2018 11:20:24 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BusinessUnit](
	[BusinessUnitID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NULL,
	[CreatedOn] [datetime] NULL CONSTRAINT [DF_BusinessUnit_CreatedOn]  DEFAULT (getutcdate()),
	[CreatedBy] [int] NULL,
	[LastUpdatedOn] [datetime] NULL,
	[LastUpdatedBy] [int] NULL,
 CONSTRAINT [PK_BusinessUnit] PRIMARY KEY CLUSTERED 
(
	[BusinessUnitID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[BusinessUnitQuestion]    Script Date: 5/9/2018 11:20:24 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BusinessUnitQuestion](
	[BusinessUnitQuestionID] [int] IDENTITY(1,1) NOT NULL,
	[QuestionID] [int] NULL,
	[BusinessUnitID] [int] NULL,
 CONSTRAINT [PK_BusinessUnitQuestion] PRIMARY KEY CLUSTERED 
(
	[BusinessUnitQuestionID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Member]    Script Date: 5/9/2018 11:20:24 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Member](
	[MemberID] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](50) NULL,
	[LastName] [nvarchar](50) NULL,
 CONSTRAINT [PK_Member] PRIMARY KEY CLUSTERED 
(
	[MemberID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Option]    Script Date: 5/9/2018 11:20:24 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Option](
	[OptionID] [int] IDENTITY(1,1) NOT NULL,
	[QuestionID] [int] NULL,
	[Name] [nvarchar](250) NULL,
	[CreatedOn] [datetime] NULL CONSTRAINT [DF_Option_CreatedOn]  DEFAULT (getutcdate()),
	[CreatedBy] [int] NULL,
	[LastUpdatedOn] [datetime] NULL CONSTRAINT [DF_Option_LastUpdatedOn]  DEFAULT (getutcdate()),
	[LastUpdatedBy] [int] NULL,
 CONSTRAINT [PK_Option] PRIMARY KEY CLUSTERED 
(
	[OptionID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Question]    Script Date: 5/9/2018 11:20:24 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Question](
	[QuestionID] [int] IDENTITY(1,1) NOT NULL,
	[Text] [nvarchar](250) NULL,
	[IsRequired] [bit] NULL,
	[QuestionTypeID] [int] NULL,
	[Description] [nvarchar](250) NULL,
	[CreatedOn] [datetime] NULL CONSTRAINT [DF_Question_CreatedOn]  DEFAULT (getutcdate()),
	[CreatedBy] [int] NULL,
	[LastUpdatedOn] [datetime] NULL CONSTRAINT [DF_Question_LastUpdatedOn]  DEFAULT (getutcdate()),
	[LastUpdatedBy] [int] NULL,
	[SurveyFormId] [int] NULL,
 CONSTRAINT [PK_Question] PRIMARY KEY CLUSTERED 
(
	[QuestionID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[QuestionType]    Script Date: 5/9/2018 11:20:24 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[QuestionType](
	[QuestionTypeID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NULL,
	[CreatedOn] [datetime] NULL CONSTRAINT [DF_QuestionType_CreatedOn]  DEFAULT (getutcdate()),
	[CreatedBy] [int] NULL,
	[LastUpdatedOn] [datetime] NULL CONSTRAINT [DF_QuestionType_LastUpdatedOn]  DEFAULT (getutcdate()),
	[LastUpdatedBy] [int] NULL,
 CONSTRAINT [PK_QuestionType] PRIMARY KEY CLUSTERED 
(
	[QuestionTypeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Survey]    Script Date: 5/9/2018 11:20:24 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Survey](
	[SurveyID] [int] IDENTITY(1,1) NOT NULL,
	[BusinessUnitID] [int] NULL,
	[CreatedOn] [datetime] NULL CONSTRAINT [DF_Survey_CreatedOn]  DEFAULT (getutcdate()),
	[CreatedBy] [int] NULL,
	[LastUpdatedOn] [datetime] NULL CONSTRAINT [DF_Survey_LastUpdatedOn]  DEFAULT (getutcdate()),
	[LastUpdatedBy] [int] NULL,
	[SurveyFormName] [nvarchar](100) NULL,
 CONSTRAINT [PK_Survey] PRIMARY KEY CLUSTERED 
(
	[SurveyID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[Answer] ON 

INSERT [dbo].[Answer] ([AnswerID], [QuestionID], [Text], [BusinessUnitMemberID], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy], [SurveyFormId]) VALUES (2071, 6060, N'Zahid Hussain', NULL, CAST(N'2018-05-03 20:27:59.543' AS DateTime), NULL, NULL, NULL, 5076)
INSERT [dbo].[Answer] ([AnswerID], [QuestionID], [Text], [BusinessUnitMemberID], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy], [SurveyFormId]) VALUES (2072, 6061, N'Bilaspur, Chattisgarh', NULL, CAST(N'2018-05-03 20:27:59.557' AS DateTime), NULL, NULL, NULL, 5076)
INSERT [dbo].[Answer] ([AnswerID], [QuestionID], [Text], [BusinessUnitMemberID], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy], [SurveyFormId]) VALUES (2073, 6062, N'Male', NULL, CAST(N'2018-05-03 20:27:59.570' AS DateTime), NULL, NULL, NULL, 5076)
INSERT [dbo].[Answer] ([AnswerID], [QuestionID], [Text], [BusinessUnitMemberID], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy], [SurveyFormId]) VALUES (2074, 6063, N'.Net,SQL', NULL, CAST(N'2018-05-03 20:27:59.583' AS DateTime), NULL, NULL, NULL, 5076)
INSERT [dbo].[Answer] ([AnswerID], [QuestionID], [Text], [BusinessUnitMemberID], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy], [SurveyFormId]) VALUES (2075, 6064, N'7276632066', NULL, CAST(N'2018-05-03 20:27:59.593' AS DateTime), NULL, NULL, NULL, 5076)
INSERT [dbo].[Answer] ([AnswerID], [QuestionID], [Text], [BusinessUnitMemberID], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy], [SurveyFormId]) VALUES (2076, 6065, N'zahid.hussain@interbizconsulting.com', NULL, CAST(N'2018-05-03 20:27:59.607' AS DateTime), NULL, NULL, NULL, 5076)
INSERT [dbo].[Answer] ([AnswerID], [QuestionID], [Text], [BusinessUnitMemberID], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy], [SurveyFormId]) VALUES (2077, 6066, N'2007-06-16', NULL, CAST(N'2018-05-03 20:27:59.630' AS DateTime), NULL, NULL, NULL, 5076)
INSERT [dbo].[Answer] ([AnswerID], [QuestionID], [Text], [BusinessUnitMemberID], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy], [SurveyFormId]) VALUES (2078, 6054, N'name', NULL, CAST(N'2018-05-03 20:49:06.490' AS DateTime), NULL, NULL, NULL, 5075)
INSERT [dbo].[Answer] ([AnswerID], [QuestionID], [Text], [BusinessUnitMemberID], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy], [SurveyFormId]) VALUES (2079, 6055, N'TNC', NULL, CAST(N'2018-05-03 20:49:06.513' AS DateTime), NULL, NULL, NULL, 5075)
INSERT [dbo].[Answer] ([AnswerID], [QuestionID], [Text], [BusinessUnitMemberID], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy], [SurveyFormId]) VALUES (2080, 6056, N'PHP,Angular,Mobile', NULL, CAST(N'2018-05-03 20:49:06.523' AS DateTime), NULL, NULL, NULL, 5075)
INSERT [dbo].[Answer] ([AnswerID], [QuestionID], [Text], [BusinessUnitMemberID], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy], [SurveyFormId]) VALUES (2081, 6057, N'23', NULL, CAST(N'2018-05-03 20:49:06.547' AS DateTime), NULL, NULL, NULL, 5075)
INSERT [dbo].[Answer] ([AnswerID], [QuestionID], [Text], [BusinessUnitMemberID], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy], [SurveyFormId]) VALUES (2082, 6058, N'admiin@interbizconsulting.com', NULL, CAST(N'2018-05-03 20:49:06.567' AS DateTime), NULL, NULL, NULL, 5075)
INSERT [dbo].[Answer] ([AnswerID], [QuestionID], [Text], [BusinessUnitMemberID], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy], [SurveyFormId]) VALUES (2083, 6059, N'2018-05-10', NULL, CAST(N'2018-05-03 20:49:06.580' AS DateTime), NULL, NULL, NULL, 5075)
INSERT [dbo].[Answer] ([AnswerID], [QuestionID], [Text], [BusinessUnitMemberID], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy], [SurveyFormId]) VALUES (3015, 6060, N'Zahid Hussain', NULL, CAST(N'2018-05-08 17:21:21.627' AS DateTime), NULL, NULL, NULL, 5076)
INSERT [dbo].[Answer] ([AnswerID], [QuestionID], [Text], [BusinessUnitMemberID], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy], [SurveyFormId]) VALUES (3016, 6061, N'Bilaspur', NULL, CAST(N'2018-05-08 17:21:21.667' AS DateTime), NULL, NULL, NULL, 5076)
INSERT [dbo].[Answer] ([AnswerID], [QuestionID], [Text], [BusinessUnitMemberID], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy], [SurveyFormId]) VALUES (3017, 6062, N'Male', NULL, CAST(N'2018-05-08 17:21:21.690' AS DateTime), NULL, NULL, NULL, 5076)
INSERT [dbo].[Answer] ([AnswerID], [QuestionID], [Text], [BusinessUnitMemberID], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy], [SurveyFormId]) VALUES (3018, 6063, N'.Net,SQL', NULL, CAST(N'2018-05-08 17:21:21.703' AS DateTime), NULL, NULL, NULL, 5076)
INSERT [dbo].[Answer] ([AnswerID], [QuestionID], [Text], [BusinessUnitMemberID], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy], [SurveyFormId]) VALUES (3019, 6064, N'7276632066', NULL, CAST(N'2018-05-08 17:21:21.717' AS DateTime), NULL, NULL, NULL, 5076)
INSERT [dbo].[Answer] ([AnswerID], [QuestionID], [Text], [BusinessUnitMemberID], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy], [SurveyFormId]) VALUES (3020, 6065, N'zahid.hussain@interbizconsulting.com', NULL, CAST(N'2018-05-08 17:21:21.727' AS DateTime), NULL, NULL, NULL, 5076)
INSERT [dbo].[Answer] ([AnswerID], [QuestionID], [Text], [BusinessUnitMemberID], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy], [SurveyFormId]) VALUES (3021, 6066, N'2016-06-16', NULL, CAST(N'2018-05-08 17:21:21.740' AS DateTime), NULL, NULL, NULL, 5076)
INSERT [dbo].[Answer] ([AnswerID], [QuestionID], [Text], [BusinessUnitMemberID], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy], [SurveyFormId]) VALUES (3022, 6060, N'Tripti Kashyap', NULL, CAST(N'2018-05-08 17:23:47.297' AS DateTime), NULL, NULL, NULL, 5076)
INSERT [dbo].[Answer] ([AnswerID], [QuestionID], [Text], [BusinessUnitMemberID], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy], [SurveyFormId]) VALUES (3023, 6061, N'Takhatpur, Bilaspur, Chattishgarh', NULL, CAST(N'2018-05-08 17:23:47.310' AS DateTime), NULL, NULL, NULL, 5076)
INSERT [dbo].[Answer] ([AnswerID], [QuestionID], [Text], [BusinessUnitMemberID], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy], [SurveyFormId]) VALUES (3024, 6062, N'Female', NULL, CAST(N'2018-05-08 17:23:47.323' AS DateTime), NULL, NULL, NULL, 5076)
INSERT [dbo].[Answer] ([AnswerID], [QuestionID], [Text], [BusinessUnitMemberID], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy], [SurveyFormId]) VALUES (3025, 6063, N'.Net,Angular', NULL, CAST(N'2018-05-08 17:23:47.333' AS DateTime), NULL, NULL, NULL, 5076)
INSERT [dbo].[Answer] ([AnswerID], [QuestionID], [Text], [BusinessUnitMemberID], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy], [SurveyFormId]) VALUES (3026, 6064, N'2222222222', NULL, CAST(N'2018-05-08 17:23:47.347' AS DateTime), NULL, NULL, NULL, 5076)
INSERT [dbo].[Answer] ([AnswerID], [QuestionID], [Text], [BusinessUnitMemberID], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy], [SurveyFormId]) VALUES (3027, 6065, N'tripti.kashyap@interbizconsulting.com', NULL, CAST(N'2018-05-08 17:23:47.357' AS DateTime), NULL, NULL, NULL, 5076)
INSERT [dbo].[Answer] ([AnswerID], [QuestionID], [Text], [BusinessUnitMemberID], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy], [SurveyFormId]) VALUES (3028, 6066, N'2016-08-04', NULL, CAST(N'2018-05-08 17:23:47.370' AS DateTime), NULL, NULL, NULL, 5076)
SET IDENTITY_INSERT [dbo].[Answer] OFF
SET IDENTITY_INSERT [dbo].[BusinessUnit] ON 

INSERT [dbo].[BusinessUnit] ([BusinessUnitID], [Name], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy]) VALUES (1, N'Admin', CAST(N'2017-06-05 10:19:07.070' AS DateTime), NULL, CAST(N'2017-06-05 10:19:07.070' AS DateTime), NULL)
SET IDENTITY_INSERT [dbo].[BusinessUnit] OFF
SET IDENTITY_INSERT [dbo].[BusinessUnitQuestion] ON 

INSERT [dbo].[BusinessUnitQuestion] ([BusinessUnitQuestionID], [QuestionID], [BusinessUnitID]) VALUES (5050, 6054, 1)
INSERT [dbo].[BusinessUnitQuestion] ([BusinessUnitQuestionID], [QuestionID], [BusinessUnitID]) VALUES (5051, 6055, 1)
INSERT [dbo].[BusinessUnitQuestion] ([BusinessUnitQuestionID], [QuestionID], [BusinessUnitID]) VALUES (5052, 6056, 1)
INSERT [dbo].[BusinessUnitQuestion] ([BusinessUnitQuestionID], [QuestionID], [BusinessUnitID]) VALUES (5053, 6057, 1)
INSERT [dbo].[BusinessUnitQuestion] ([BusinessUnitQuestionID], [QuestionID], [BusinessUnitID]) VALUES (5054, 6058, 1)
INSERT [dbo].[BusinessUnitQuestion] ([BusinessUnitQuestionID], [QuestionID], [BusinessUnitID]) VALUES (5055, 6059, 1)
INSERT [dbo].[BusinessUnitQuestion] ([BusinessUnitQuestionID], [QuestionID], [BusinessUnitID]) VALUES (5056, 6060, 1)
INSERT [dbo].[BusinessUnitQuestion] ([BusinessUnitQuestionID], [QuestionID], [BusinessUnitID]) VALUES (5057, 6061, 1)
INSERT [dbo].[BusinessUnitQuestion] ([BusinessUnitQuestionID], [QuestionID], [BusinessUnitID]) VALUES (5058, 6062, 1)
INSERT [dbo].[BusinessUnitQuestion] ([BusinessUnitQuestionID], [QuestionID], [BusinessUnitID]) VALUES (5059, 6063, 1)
INSERT [dbo].[BusinessUnitQuestion] ([BusinessUnitQuestionID], [QuestionID], [BusinessUnitID]) VALUES (5060, 6064, 1)
INSERT [dbo].[BusinessUnitQuestion] ([BusinessUnitQuestionID], [QuestionID], [BusinessUnitID]) VALUES (5061, 6065, 1)
INSERT [dbo].[BusinessUnitQuestion] ([BusinessUnitQuestionID], [QuestionID], [BusinessUnitID]) VALUES (5062, 6066, 1)
SET IDENTITY_INSERT [dbo].[BusinessUnitQuestion] OFF
SET IDENTITY_INSERT [dbo].[Member] ON 

INSERT [dbo].[Member] ([MemberID], [FirstName], [LastName]) VALUES (1, N'Mohammad', N'Irfan')
SET IDENTITY_INSERT [dbo].[Member] OFF
SET IDENTITY_INSERT [dbo].[Option] ON 

INSERT [dbo].[Option] ([OptionID], [QuestionID], [Name], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy]) VALUES (2034, 6055, N'TNC', CAST(N'2018-05-03 20:20:59.850' AS DateTime), NULL, NULL, NULL)
INSERT [dbo].[Option] ([OptionID], [QuestionID], [Name], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy]) VALUES (2035, 6055, N'MNC', CAST(N'2018-05-03 20:20:59.870' AS DateTime), NULL, NULL, NULL)
INSERT [dbo].[Option] ([OptionID], [QuestionID], [Name], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy]) VALUES (2036, 6056, N'.Net', CAST(N'2018-05-03 20:21:29.677' AS DateTime), NULL, NULL, NULL)
INSERT [dbo].[Option] ([OptionID], [QuestionID], [Name], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy]) VALUES (2037, 6056, N'PHP', CAST(N'2018-05-03 20:21:29.690' AS DateTime), NULL, NULL, NULL)
INSERT [dbo].[Option] ([OptionID], [QuestionID], [Name], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy]) VALUES (2038, 6056, N'SQL', CAST(N'2018-05-03 20:21:29.703' AS DateTime), NULL, NULL, NULL)
INSERT [dbo].[Option] ([OptionID], [QuestionID], [Name], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy]) VALUES (2039, 6056, N'Angular', CAST(N'2018-05-03 20:21:29.720' AS DateTime), NULL, NULL, NULL)
INSERT [dbo].[Option] ([OptionID], [QuestionID], [Name], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy]) VALUES (2040, 6056, N'Mobile', CAST(N'2018-05-03 20:21:29.733' AS DateTime), NULL, NULL, NULL)
INSERT [dbo].[Option] ([OptionID], [QuestionID], [Name], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy]) VALUES (2041, 6062, N'Male', CAST(N'2018-05-03 20:25:29.440' AS DateTime), NULL, NULL, NULL)
INSERT [dbo].[Option] ([OptionID], [QuestionID], [Name], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy]) VALUES (2042, 6062, N'Female', CAST(N'2018-05-03 20:25:29.453' AS DateTime), NULL, NULL, NULL)
INSERT [dbo].[Option] ([OptionID], [QuestionID], [Name], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy]) VALUES (2043, 6063, N'.Net', CAST(N'2018-05-03 20:25:58.393' AS DateTime), NULL, NULL, NULL)
INSERT [dbo].[Option] ([OptionID], [QuestionID], [Name], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy]) VALUES (2044, 6063, N'Angular', CAST(N'2018-05-03 20:25:58.413' AS DateTime), NULL, NULL, NULL)
INSERT [dbo].[Option] ([OptionID], [QuestionID], [Name], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy]) VALUES (2045, 6063, N'SQL', CAST(N'2018-05-03 20:25:58.423' AS DateTime), NULL, NULL, NULL)
SET IDENTITY_INSERT [dbo].[Option] OFF
SET IDENTITY_INSERT [dbo].[Question] ON 

INSERT [dbo].[Question] ([QuestionID], [Text], [IsRequired], [QuestionTypeID], [Description], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy], [SurveyFormId]) VALUES (6054, N'Company Name', 0, 1, NULL, CAST(N'2018-05-03 20:19:54.150' AS DateTime), NULL, NULL, NULL, 5075)
INSERT [dbo].[Question] ([QuestionID], [Text], [IsRequired], [QuestionTypeID], [Description], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy], [SurveyFormId]) VALUES (6055, N'Company Type', 0, 3, NULL, CAST(N'2018-05-03 20:20:59.810' AS DateTime), NULL, NULL, NULL, 5075)
INSERT [dbo].[Question] ([QuestionID], [Text], [IsRequired], [QuestionTypeID], [Description], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy], [SurveyFormId]) VALUES (6056, N'Technology', 0, 4, NULL, CAST(N'2018-05-03 20:21:29.633' AS DateTime), NULL, NULL, NULL, 5075)
INSERT [dbo].[Question] ([QuestionID], [Text], [IsRequired], [QuestionTypeID], [Description], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy], [SurveyFormId]) VALUES (6057, N'Number Of Emplyees', 0, 5, NULL, CAST(N'2018-05-03 20:21:57.387' AS DateTime), NULL, NULL, NULL, 5075)
INSERT [dbo].[Question] ([QuestionID], [Text], [IsRequired], [QuestionTypeID], [Description], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy], [SurveyFormId]) VALUES (6058, N'Company Email', 0, 6, NULL, CAST(N'2018-05-03 20:22:06.193' AS DateTime), NULL, NULL, NULL, 5075)
INSERT [dbo].[Question] ([QuestionID], [Text], [IsRequired], [QuestionTypeID], [Description], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy], [SurveyFormId]) VALUES (6059, N'Company Establishment Date', 0, 7, NULL, CAST(N'2018-05-03 20:22:17.947' AS DateTime), NULL, NULL, NULL, 5075)
INSERT [dbo].[Question] ([QuestionID], [Text], [IsRequired], [QuestionTypeID], [Description], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy], [SurveyFormId]) VALUES (6060, N'Employee Name', 0, 1, NULL, CAST(N'2018-05-03 20:25:06.240' AS DateTime), NULL, NULL, NULL, 5076)
INSERT [dbo].[Question] ([QuestionID], [Text], [IsRequired], [QuestionTypeID], [Description], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy], [SurveyFormId]) VALUES (6061, N'Employee Address', 0, 2, NULL, CAST(N'2018-05-03 20:25:15.537' AS DateTime), NULL, NULL, NULL, 5076)
INSERT [dbo].[Question] ([QuestionID], [Text], [IsRequired], [QuestionTypeID], [Description], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy], [SurveyFormId]) VALUES (6062, N'Gender', 0, 3, NULL, CAST(N'2018-05-03 20:25:29.403' AS DateTime), NULL, NULL, NULL, 5076)
INSERT [dbo].[Question] ([QuestionID], [Text], [IsRequired], [QuestionTypeID], [Description], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy], [SurveyFormId]) VALUES (6063, N'Known Technologies', 0, 4, NULL, CAST(N'2018-05-03 20:25:58.353' AS DateTime), NULL, NULL, NULL, 5076)
INSERT [dbo].[Question] ([QuestionID], [Text], [IsRequired], [QuestionTypeID], [Description], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy], [SurveyFormId]) VALUES (6064, N'Mobile Number', 0, 5, NULL, CAST(N'2018-05-03 20:26:11.377' AS DateTime), NULL, NULL, NULL, 5076)
INSERT [dbo].[Question] ([QuestionID], [Text], [IsRequired], [QuestionTypeID], [Description], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy], [SurveyFormId]) VALUES (6065, N'Employee Email', 0, 6, NULL, CAST(N'2018-05-03 20:26:23.490' AS DateTime), NULL, NULL, NULL, 5076)
INSERT [dbo].[Question] ([QuestionID], [Text], [IsRequired], [QuestionTypeID], [Description], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy], [SurveyFormId]) VALUES (6066, N'Joining Date', 0, 7, NULL, CAST(N'2018-05-03 20:26:32.320' AS DateTime), NULL, NULL, NULL, 5076)
SET IDENTITY_INSERT [dbo].[Question] OFF
SET IDENTITY_INSERT [dbo].[QuestionType] ON 

INSERT [dbo].[QuestionType] ([QuestionTypeID], [Name], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy]) VALUES (1, N'Short Text', NULL, NULL, NULL, NULL)
INSERT [dbo].[QuestionType] ([QuestionTypeID], [Name], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy]) VALUES (2, N'Long Text', NULL, NULL, NULL, NULL)
INSERT [dbo].[QuestionType] ([QuestionTypeID], [Name], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy]) VALUES (3, N'Radio', NULL, NULL, NULL, NULL)
INSERT [dbo].[QuestionType] ([QuestionTypeID], [Name], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy]) VALUES (4, N'CheckBox', NULL, NULL, NULL, NULL)
INSERT [dbo].[QuestionType] ([QuestionTypeID], [Name], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy]) VALUES (5, N'Number', NULL, NULL, NULL, NULL)
INSERT [dbo].[QuestionType] ([QuestionTypeID], [Name], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy]) VALUES (6, N'E-Mail', NULL, NULL, NULL, NULL)
INSERT [dbo].[QuestionType] ([QuestionTypeID], [Name], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy]) VALUES (7, N'Date', NULL, NULL, NULL, NULL)
SET IDENTITY_INSERT [dbo].[QuestionType] OFF
SET IDENTITY_INSERT [dbo].[Survey] ON 

INSERT [dbo].[Survey] ([SurveyID], [BusinessUnitID], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy], [SurveyFormName]) VALUES (5075, NULL, CAST(N'2018-05-03 20:19:46.643' AS DateTime), NULL, NULL, NULL, N'Company Information')
INSERT [dbo].[Survey] ([SurveyID], [BusinessUnitID], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy], [SurveyFormName]) VALUES (5076, NULL, CAST(N'2018-05-03 20:24:49.147' AS DateTime), NULL, NULL, NULL, N'Employee Information')
INSERT [dbo].[Survey] ([SurveyID], [BusinessUnitID], [CreatedOn], [CreatedBy], [LastUpdatedOn], [LastUpdatedBy], [SurveyFormName]) VALUES (6060, NULL, CAST(N'2018-05-08 11:23:42.947' AS DateTime), NULL, NULL, NULL, N'Interbiz Form')
SET IDENTITY_INSERT [dbo].[Survey] OFF
ALTER TABLE [dbo].[Answer]  WITH CHECK ADD  CONSTRAINT [FK_Answer_Question] FOREIGN KEY([QuestionID])
REFERENCES [dbo].[Question] ([QuestionID])
GO
ALTER TABLE [dbo].[Answer] CHECK CONSTRAINT [FK_Answer_Question]
GO
ALTER TABLE [dbo].[BusinessUnitQuestion]  WITH CHECK ADD  CONSTRAINT [FK_BusinessUnitQuestion_Question] FOREIGN KEY([QuestionID])
REFERENCES [dbo].[Question] ([QuestionID])
GO
ALTER TABLE [dbo].[BusinessUnitQuestion] CHECK CONSTRAINT [FK_BusinessUnitQuestion_Question]
GO
ALTER TABLE [dbo].[Option]  WITH CHECK ADD  CONSTRAINT [FK_Option_Question] FOREIGN KEY([QuestionID])
REFERENCES [dbo].[Question] ([QuestionID])
GO
ALTER TABLE [dbo].[Option] CHECK CONSTRAINT [FK_Option_Question]
GO
ALTER TABLE [dbo].[Question]  WITH CHECK ADD  CONSTRAINT [FK_Question_QuestionType] FOREIGN KEY([QuestionTypeID])
REFERENCES [dbo].[QuestionType] ([QuestionTypeID])
GO
ALTER TABLE [dbo].[Question] CHECK CONSTRAINT [FK_Question_QuestionType]
GO
ALTER TABLE [dbo].[Survey]  WITH CHECK ADD  CONSTRAINT [FK_Survey_BusinessUnit] FOREIGN KEY([BusinessUnitID])
REFERENCES [dbo].[BusinessUnit] ([BusinessUnitID])
GO
ALTER TABLE [dbo].[Survey] CHECK CONSTRAINT [FK_Survey_BusinessUnit]
GO
USE [master]
GO
ALTER DATABASE [DynamicForm] SET  READ_WRITE 
GO

CREATE TABLE [dbo].[Item]
(
	[Id] INT NOT NULL IDENTITY(1,1) PRIMARY KEY, 
    [Code] NVARCHAR(50) NULL, 
    [Name] NVARCHAR(100) NULL, --Para nombres de productos extensos
    [Price] DECIMAL(12, 3) NULL, -- 123,456,789.10 11 12   (12 Digitos con 3 decimales)
	[Type] NVARCHAR(50) NULL, 
    [User] NVARCHAR(50) NOT NULL, 
	[Date] SMALLDATETIME NOT NULL, 
    [Status] VARCHAR(2) NOT NULL,
)
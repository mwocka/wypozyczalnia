# Tworzenie user-a w mssql



### 1. Tworzenie nowego użytkownika

* Wybranie aktualnej bazy danych

```sql
USE DB_projekt
```

* Tworzenie [użytkownika](https://docs.microsoft.com/en-us/sql/relational-databases/security/contained-database-users-making-your-database-portable?view=sql-server-2017) o nazwie _api_ oraz ustawienie hasła _Passw0rd!_

```sql
CREATE LOGIN api2 WITH PASSWORD = 'Passw0rd!';
```

```SQL
CREATE USER api2 FOR LOGIN api2;
```

Więcej informacji dostępnych jest na oficjalnej [stronie](https://docs.microsoft.com/en-us/sql/t-sql/statements/create-user-transact-sql?view=sql-server-2017) Microsoft.



### 2. Nadawanie użytkownikowi prawa właściciela bazy

Użytkownik musi posiadać prawa, dzięki którym będzie mógł przeglądać bazę danych oraz wykonywać na niej polecenia typu **SELECT, UPDATE, INSERT** czy **DELETE**.

```sql
USE DB_projekt
GO
EXEC sp_addrolemember 'db_owner', api2
GO
```


# Jak zainstalować i używać mssql



### 1. Docker instalacja oraz pobieranie obrazu mssql

Aby zainstalować narzędzie Docker należy pobrać [Docker-CE](https://www.docker.com/community-edition) dla odpowiedniej dystrybucji Linuxa. Nowe obrazy Dockera, dostarczone przez firmę [Microsoft](https://hub.docker.com/r/microsoft/mssql-server-linux/), pozwalają na zainstalowanie _mssql_ na każdej dystrybucji gdzie dostępny jest Docker. Poniżej umieszczona została komenda do pobrania obrazu _dockerowego_.

```bash
docker pull microsoft/mssql-server-linux
```

Następnie dany obraz powienien zostać uruchomiony, według poniższego przykładu.

```bash
docker run \
	-e  'ACCEPT_EULA=Y' \
	-e 'SA_PASSWORD=Str0ngPassword!' \
	-p 1433:1433 \
	--name baza_danych \
	-d microsoft/mssql-server-linux:2017-latest
```



### 2.  Odzyskanie danch z kopii zapasowej

Odzyskanie bazy danych z kopii zapasowej zostanie opisane krok po kroku poniżej.

##### 2.1. Tworzenie folderu kopii zapasowej na istniejącym kontenerze

`docker exec -it baza_danych mkdir /var/opt/mssql/backup`

##### 2.2. Kopiowanie pliku _kopii zapasowej_ bezpośrednio do kontenera

`docker cp DB_projekt.bak baza_danych:/var/opt/mssql/backup`

##### 2.3. Proces odzyskania danych

```bash
docker exec -it baza_danych /opt/mssql-tools/bin/sqlcmd -S localhost \
   -U SA -P 'Str0ngPassword!' \
   -Q 'RESTORE FILELISTONLY FROM DISK = "/var/opt/mssql/backup/DB_projekt.bak"' \
   | tr -s ' ' | cut -d ' ' -f 1-2
```

A następnie należy uruchomić komendę poniżej:

```bash
sudo docker exec -it baza_danych /opt/mssql-tools/bin/sqlcmd \
   -S localhost -U SA -P 'Str0ngPassword!' \
   -Q 'RESTORE DATABASE DB_projekt FROM DISK = "/var/opt/mssql/backup/DB_projekt.bak" WITH MOVE "DB_projekt" TO "/var/opt/mssql/data/DB_projekt.mdf", MOVE "DB_projekt_log" TO "/var/opt/mssql/data/DB_projekt_log.ldf"'
```

##### 2.4. Weryfikacja danych z bazy

```bash
docker exec -it baza_danych /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P 'Str0ngPassword!'
```

```sql
USE DB_projekt
GO
SELECT * FROM INFORMATION_SCHEMA.TABLES
GO
SELECT * FROM Item
GO
```

Więcej informacji można znaleźć na oficjalnej [stronie](https://docs.microsoft.com/en-us/sql/linux/tutorial-restore-backup-in-sql-server-container?view=sql-server-linux-2017).



### 3.  Tworzenie użytkownika



##### 3.1. Tworzenie nowego użytkownika

- Wybranie aktualnej bazy danych

```sql
USE DB_projekt
```

- Tworzenie [użytkownika](https://docs.microsoft.com/en-us/sql/relational-databases/security/contained-database-users-making-your-database-portable?view=sql-server-2017) o nazwie _api_ oraz ustawienie hasła _Passw0rd!_

```sql
CREATE LOGIN api2 WITH PASSWORD = 'Passw0rd!';
```

```sql
CREATE USER api2 FOR LOGIN api2;
```

Więcej informacji dostępnych jest na oficjalnej [stronie](https://docs.microsoft.com/en-us/sql/t-sql/statements/create-user-transact-sql?view=sql-server-2017) Microsoft.



##### 3.2. Nadawanie użytkownikowi prawa właściciela bazy

Użytkownik musi posiadać prawa, dzięki którym będzie mógł przeglądać bazę danych oraz wykonywać na niej polecenia typu **SELECT, UPDATE, INSERT** czy **DELETE**.

```sql
USE DB_projekt
GO
EXEC sp_addrolemember 'db_owner', api2
GO
```


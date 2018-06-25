# Jak uruchomić API?



Ta sekcja zostanie uzupełniona o stworzenie kontenera przy użyciu narzędzia **Docker**. 

We wstępnej wersji należy wprowadzić odpowiednie zmiany do pliku _db-connections.js_ tak, aby _node JS_ był w stanie podłączyć się do bazy danych.

```js
const config = {
    user: 'api2',
    password: 'Passw0rd!',
    server: 'localhost',
    database: 'DB_projekt',
    options: {
        encrypt: false//if Windows Azure
    }
}
```

Po poprawnym wpisaniu nazwy użytkownika oraz jego hasła jak i wybraniu nazwy serwera, należy wykonać dwie komendy. Odpowiednio `npm install` oraz `npm start`.
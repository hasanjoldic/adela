## Connecting to database servers

`host=db.hasanjoldic.com` is the same for all databases

`password` is also the same, but will not be saved in git

postgres:

```
  port=5432
  database=postgres
  user=postgres
```

mysql:

```
  port=3306
  user=root
```

mongo:

```
  port=27017
  user=root
```

For example, to connect with `mysql` cli:

```
mysql --host=db.hasanjoldic.com --password=<PASSWORD> --user=root
```

Replace `<PASSWORD>` with the actual password value.

## Resetting all databases

To reset all databases send the following HTTP request:

```
GET http://db.hasanjoldic.com:50000/reset-databases/<API_TOKEN>
```

Replace `<API_TOKEN>` with the actual token value. It will be the same as database passwords.

If you get a `200` response, that means the databases were reset.

Easiest way to send a `GET` HTTP request is to just enter the url in a browser.
This would be the url part: `http://db.hasanjoldic.com:50000/reset-databases/<API_TOKEN>`

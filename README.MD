# Routes

register, login -

| Router            | requires JWT | returns json                  | returns file |
| ----------------- | ------------ | ----------------------------- | ------------ |
| /api/register     | -            | jwt, msg                      | -            |
| /api/login        | -            | jwt, msg                      | -            |
| /api/products     | -            | returns records from products | -            |
| /api/products/:id | +            | return 1 record with id       | -            |
|                   |              |                               |              |
|                   |              |                               |              |

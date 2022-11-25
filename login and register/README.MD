# Routes

| Router | requires JWT | returns json | returns file | methods|
| ----------------- | ------------ | ----------------------------- | ------------ ||
| /api/register | - | jwt, msg | - |post|
| /api/login | - | jwt, msg | - |post|
| /api/products | - | returns records from products | - |get, post,|
| /api/products/:id | + | return 1 record with id | - |get,delete,maybe patch|
|/api/logout | + | msg |- | get|
| | | | ||

/api/products - post - creates new product (requires req.body)

/api/login - needs username, password

/api/register - needs firstName, lastName, email, address, password

/api/products - can contain req.query (?)

/api/products/:id - get - to display specific item
/api/products/:id - patch - to update specific item
/api/products/:id - delete - to buy specific item

/api/logout - MB in future

Routes

| path               | requires JWT | returns json        | returns file | method |
| ------------------ | ------------ | ------------------- | ------------ | ------ |
| /api/auth/register | -            | returns token, msg  | -            | post   |
| /api/auth/login    | -            | returns token,msg   | -            | post   |
| /api/products      | -            | returns array       | -            | get    |
| /api/products      | -            | returns msg, object | -            | post   |
| /api/products/:id  | -            | returns object, msg |              | get    |
| /profile           | +            | -                   | +            | get    |

/api/products - post - creates new product (requires req.body)

/api/auth/login - needs email, password

/api/auth/register - needs name, surname, email, address, password

/api/products - can contain req.query (?)

/api/products/:id - get - to display specific item /api/products/:id - patch - to update specific item /api/products/:id - delete - to buy specific item

/api/logout - MB in future

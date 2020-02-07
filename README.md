# My Fav Theater


Route on My Fav Theater is:
<br>
## 1. POST /users/register

    To Register User

* **URL:**

http://localhost:3000/users/register

* **REQUEST HEADER**

```javascript
{
    "Content-Type": "application/json; charset=utf-8"
}
```

* **RESPONSE**

If request success:

```javascript
  {
    "user": {
        "id": 3,
        "fullname": "Fajrin Noor Rachman",
        "email": "fajrinpgrm@gmail.com",
        "password": "$2b$10$2LRi6LtJioKl0YdUTQ/KteriAc7RD3sAttvLxBWEj6k283x1FfvUe",
        "updatedAt": "2020-02-07T06:36:25.516Z",
        "createdAt": "2020-02-07T06:36:25.516Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTgxMDU3Mzg1fQ.2zAZ2zqQTAZgPqasf-qm7jtmEC2SEEpb5WgSARaiNyI"
  }
```

If request success but there is already email registered:

```javascript
"Account already registered"
```

If request failed caused by server:

```javascript
Internal Server Error
```


## 2. PUT     /users/update

    Find Todos by Id

* **EXAMPLE URL:**

http://localhost:3000/todos/1

* **REQUEST HEADER**

```javascript
{
    "Content-Type": "application/json; charset=utf-8"
}
```

* **RESPONSE**

If request success:

```javascript
{
    "id": 1,
    "title": "Playing Football",
    "description": "Playing football with elementary school friends",
    "status": false,
    "due_date": "2000-12-31T17:00:00.000Z",
    "createdAt": "2020-02-03T10:22:00.084Z",
    "updatedAt": "2020-02-03T12:21:11.139Z"
}
```

If request failed because id todo not found:

```javascript
{
    "error": "error not found"
}
```


## 3. POST /todos
    Add/Create Todo

* **EXAMPLE URL:**

http://localhost:3000/todos/1

* **REQUEST HEADER**

```javascript
{
    "Content-Type": "application/json; charset=utf-8"
}
```

* **REQUEST BODY**

```javascript
{
    "title": "Coding",
    "description": "Code somecode on codewars.",
    "status": false,
    "due_date": "2000-12-31T17:00:00.000Z"
}
```

* **RESPONSE**

If request success:

```javascript
{
    "id": 1,
    "title": "Coding",
    "description": "Code somecode on codewars.",
    "status": false,
    "due_date": "2000-12-31T17:00:00.000Z",
    "updatedAt": "2020-02-03T12:45:11.380Z",
    "createdAt": "2020-02-03T12:45:11.380Z"
}
```

If request failed because validation is not complete:

```javascript
{
    "error": "Validation Errors"
}
```

If request failed caused by server:

```javascript
Internal Server Error
```


## 4. PUT      /todos/:id 
    Update Todo

* **EXAMPLE URL:**

http://localhost:3000/todos/1

* **REQUEST HEADER**
```javascript
{
    "Content-Type": "application/json; charset=utf-8"
}
```

* **REQUEST BODY**
```javascript
{
    "title": "Coding",
    "description": "Code somecode on codewars.",
    "status": false,
    "due_date": "2000-12-31T17:00:00.000Z"
}
```

* **RESPONSE**

If request success:

```javascript
{
    "title": "Coding",
    "description": "Code somecode on codewars.",
    "status": false,
    "due_date": "2000-12-31T17:00:00.000Z"
}
```

If request failed because id todo not found:

```javascript
{
    "error": "error not found"
}
```

If request failed because validation is not complete:

```javascript
{
    "error": "Validation Errors"
}
```

If request failed caused by server:

```javascript
Internal Server Error
```


## 5. DELETE   /todos/:id 
    Delete Todo

* **EXAMPLE URL:**

http://localhost:3000/todos/1

* **REQUEST HEADER**

```javascript
{
    "Content-Type": "application/json; charset=utf-8"
}
```

* **RESPONSE**

If request success:

```javascript
{
    "id": 1,
    "title": "Dating",
    "description": "Date at Pondok Indah Mall at 6PM",
    "status": false,
    "due_date": "2000-12-31T17:00:00.000Z",
    "createdAt": "2020-02-03T12:45:11.380Z",
    "updatedAt": "2020-02-03T12:45:11.380Z"
}
```
If request failed because id todo not found:
```javascri
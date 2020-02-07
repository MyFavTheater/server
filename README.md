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


## 2. PUT     /users/update/:id

    Find Todos by Id

* **EXAMPLE URL:**

http://localhost:3000/users/update/1

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
    "fullname": "Fajrin Aja",
    "email": "fajrinpgrm@gmail.com",
    "password": "1234"
}
```

If request failed because id User not found:

```javascript
{
    "message": "error not found"
}
```


## 3. POST /login
    Login User

* **EXAMPLE URL:**

http://localhost:3000/login

* **REQUEST HEADER**

```javascript
{
    "Content-Type": "application/json; charset=utf-8"
}
```

* **REQUEST BODY**

```javascript
{
    "email": "fajrinpgrm@gmail.com",
    "password": "123"
}
```

* **RESPONSE**

If request success:

```javascript
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlciI6ImZhanJpbnBncm1AZ21haWwuY29tIiwiaWF0IjoxNTgxMDU4Mzg4fQ.9nHuIxC5kAl3vqSD1sSR206C0il4d3VhJE3bIwn9Poo",
    "user": {
        "id": 3,
        "fullname": "Fajrin Noor Rachman",
        "email": "fajrinpgrm@gmail.com",
        "password": "$2b$10$2LRi6LtJioKl0YdUTQ/KteriAc7RD3sAttvLxBWEj6k283x1FfvUe",
        "createdAt": "2020-02-07T06:36:25.516Z",
        "updatedAt": "2020-02-07T06:36:25.516Z"
    }
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


## 4. GET /seatgeek
* **EXAMPLE URL:**

http://localhost:3000/

* **REQUEST HEADER**
```javascript
{
    "Content-Type": "application/json; charset=utf-8"
}
```

* **RESPONSE**

If request success:

```javascript
[
    {
        "title": "Eiffel Tower Experience - Las Vegas",
        "announce_date": "2019-11-29T00:00:00",
        "type": "family",
        "performersName": "Eiffel Tower Experience",
        "performersImage": "https://seatgeek.com/images/performers-landscape/eiffel-tower-experience-4bb179/605657/huge.jpg",
        "url": "https://seatgeek.com/eiffel-tower-experience-las-vegas-tickets/family/2020-02-06-3-30-am/5135177",
        "city": "Las Vegas",
        "lat": 36.1125,
        "lon": -115.171
    },
    {
        "title": "Stevie Redstone (21+)",
        "announce_date": "2019-12-28T00:00:00",
        "type": "concert",
        "performersName": "Stevie Redstone",
        "performersImage": "https://seatgeek.com/images/performers-landscape/stevie-redstone-c2da01/783316/huge.jpg",
        "url": "https://seatgeek.com/stevie-redstone-21-tickets/felton-california-felton-music-hall-2020-02-06-8-pm/concert/5167513",
        "city": "Felton",
        "lat": 37.0526,
        "lon": -122.074
    },
    {
        "title": "Bill Bellamy",
        "announce_date": "2020-01-20T00:00:00",
        "type": "comedy",
        "performersName": "Bill Bellamy",
        "performersImage": "https://seatgeek.com/images/performers-landscape/bill-bellamy-2c2b69/8644/huge.jpg",
        "url": "https://seatgeek.com/bill-bellamy-tickets/comedy/2020-02-06-8-pm/5189518",
        "city": "Pasadena",
        "lat": 34.1465,
        "lon": -118.131
    },
    {
        "title": "XYLO",
        "announce_date": "2020-01-30T00:00:00",
        "type": "concert",
        "performersName": "XYLO",
        "performersImage": "https://seatgeek.com/images/performers-landscape/xylo-25d397/139750/huge.jpg",
        "url": "https://seatgeek.com/xylo-tickets/san-diego-california-music-box-8-2020-02-06-8-pm/concert/5198924",
        "city": "San Diego",
        "lat": 32.7194,
        "lon": -117.168
    },
    {
        "title": "World/Inferno Friendship Society (19+)",
        "announce_date": "2019-12-25T00:00:00",
        "type": "concert",
        "performersName": "World/Inferno Friendship Society",
        "performersImage": "https://seatgeek.com/images/performers-landscape/world-inferno-friendship-society-7298f9/9456/huge.jpg",
        "url": "https://seatgeek.com/world-inferno-friendship-society-19-tickets/vancouver-canada-rickshaw-theatre-2020-02-06-8-pm/concert/5164690",
        "city": "Vancouver",
        "lat": 49.2813,
        "lon": -123.098
    },
    {
        "title": "The Buzzz",
        "announce_date": "2020-01-24T00:00:00",
        "type": "concert",
        "performersName": "The Buzzz",
        "performersImage": "https://seatgeek.com/images/performers-landscape/the-buzzz-cdf73c/785766/huge.jpg",
        "url": "https://seatgeek.com/the-buzzz-tickets/west-hollywood-california-whisky-a-go-go-1-2020-02-06-8-pm/concert/5193851",
        "city": "West Hollywood",
        "lat": 34.0908,
        "lon": -118.386
    },
    {
        "title": "One Drop",
        "announce_date": "2020-01-07T00:00:00",
        "type": "concert",
        "performersName": "One Drop",
        "performersImage": "https://seatgeek.com/images/performers-landscape/one-drop-a8136f/26183/huge.jpg",
        "url": "https://seatgeek.com/one-drop-tickets/scottsdale-arizona-rockbar-inc-1-2020-02-06-9-pm/concert/5175373",
        "city": "Scottsdale",
        "lat": 33.4976,
        "lon": -111.928
    },
    {
        "title": "HIPHOPthursdays 2.6.20 - Miami",
        "announce_date": "2020-02-05T00:00:00",
        "type": "theater",
        "performersName": "HIPHOPthursdays 2.6.20",
        "performersImage": null,
        "url": "https://seatgeek.com/hiphopthursdays-2-6-20-miami-tickets/theater/2020-02-06-11-pm/5204397",
        "city": "Miami",
        "lat": 25.7978,
        "lon": -80.1272
    },
    {
        "title": "Cirque du Soleil: Amaluna - West Sacramento",
        "announce_date": "2019-08-10T00:00:00",
        "type": "cirque_du_soleil",
        "performersName": "Cirque du Soleil: Amaluna",
        "performersImage": "https://seatgeek.com/images/performers-landscape/cirque-du-soleil-amaluna-b56061/14157/huge.jpg",
        "url": "https://seatgeek.com/cirque-du-soleil-amaluna-west-sacramento-tickets/cirque-du-soleil/2020-02-06-8-pm/4957926",
        "city": "West Sacramento",
        "lat": 38.5804,
        "lon": -121.514
    },
    {
        "title": "Jackie Kashian",
        "announce_date": "2019-12-17T00:00:00",
        "type": "comedy",
        "performersName": "Jackie Kashian",
        "performersImage": "https://seatgeek.com/images/performers-landscape/jackie-kashian-7ae88e/79000/huge.jpg",
        "url": "https://seatgeek.com/jackie-kashian-tickets/comedy/2020-02-06-8-pm/5156433",
        "city": "San Francisco",
        "lat": 37.7955,
        "lon": -122.4
    }
]
```

If request failed caused by server:

```javascript
Internal Server Error
```


## 5. GET /event 
    List Event

* **EXAMPLE URL:**

http://localhost:3000/event

* **REQUEST HEADER**

```javascript
{
    "Content-Type": "application/json; charset=utf-8",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlciI6ImZhanJpbi5ub29ycmFjaG1hbjExQGdtYWlsLmNvbSIsImlhdCI6MTU4MTA0MzQwMX0.x8EB_SIGgFEaHhycpMwP5PI2luxO1n2fNqkY84J68Fw"
}
```

* **RESPONSE**

If request success:

```javascript
[
    {
        "id": 1,
        "title": "Brainquility Music Festival (3 Day Pass) with Sunsquabi, Chachuba, Kill Paris",
        "announce_date": "2020-01-01T17:00:00.000Z",
        "type": "music_festival",
        "performersName": "Justin Martin",
        "performersImage": "https://seatgeek.com/images/performers-landscape/justin-martin-bb8d39/17196/huge.jpg",
        "url": "https://seatgeek.com/brainquility-music-festival-3-day-pass-with-sunsquabi-chachuba-kill-paris-tickets/live-oak-florida-spirit-of-the-suwannee-music-park-2020-02-06-3-30-am/music-festival/5170898",
        "city": "Live Oak",
        "lat": "30.3972",
        "lon": "-82.9466",
        "createdAt": "2020-02-07T02:43:14.362Z",
        "updatedAt": "2020-02-07T02:43:14.362Z"
    },
    {
        "id": 2,
        "title": "Hugo Turenne",
        "announce_date": "2020-02-04T17:00:00.000Z",
        "type": "concert",
        "performersName": "Hugo Turenne",
        "performersImage": "https://seatgeek.com/images/performers-landscape/hugo-turenne-c96644/727337/huge.jpg",
        "url": "https://seatgeek.com/hugo-turenne-tickets/montreal-canada-circus-afterhours-2020-02-06-3-30-am/concert/5203736",
        "city": "Montreal",
        "lat": "45.5014",
        "lon": "-73.5716",
        "createdAt": "2020-02-07T02:43:14.363Z",
        "updatedAt": "2020-02-07T02:43:14.363Z"
    },
    {
        "id": 3,
        "title": "Vader with Abysmal Dawn",
        "announce_date": "2019-12-09T17:00:00.000Z",
        "type": "concert",
        "performersName": "Vader",
        "performersImage": "https://seatgeek.com/images/performers-landscape/vader-d7f9b6/2709/huge.jpg",
        "url": "https://seatgeek.com/vader-with-abysmal-dawn-tickets/el-paso-texas-rockhouse-bar-grill-2020-02-06-3-30-am/concert/5146033",
        "city": "El Paso",
        "lat": "31.7949",
        "lon": "-106.353",
        "createdAt": "2020-02-07T02:43:14.364Z",
        "updatedAt": "2020-02-07T02:43:14.364Z"
    },
    {
        "id": 4,
        "title": "Eiffel Tower Experience - Las Vegas",
        "announce_date": "2019-11-28T17:00:00.000Z",
        "type": "family",
        "performersName": "Eiffel Tower Experience",
        "performersImage": "https://seatgeek.com/images/performers-landscape/eiffel-tower-experience-4bb179/605657/huge.jpg",
        "url": "https://seatgeek.com/eiffel-tower-experience-las-vegas-tickets/family/2020-02-06-3-30-am/5135177",
        "city": "Las Vegas",
        "lat": "36.1125",
        "lon": "-115.171",
        "createdAt": "2020-02-07T02:43:14.368Z",
        "updatedAt": "2020-02-07T02:43:14.368Z"
    },
    {
        "id": 5,
        "title": "Black and Gold Tournament: UCF Knights vs. Indiana Hoosiers",
        "announce_date": "2020-01-10T17:00:00.000Z",
        "type": "sports",
        "performersName": "UCF Knights Softball",
        "performersImage": "https://seatgeek.com/images/performers-landscape/ucf-knights-softball-267a70/107722/huge.jpg",
        "url": "https://seatgeek.com/black-and-gold-tournament-ucf-knights-vs-indiana-hoosiers-tickets/sport/2020-02-06-6-pm/5181739",
        "city": "Orlando",
        "lat": "28.6045",
        "lon": "-81.1901",
        "createdAt": "2020-02-07T02:43:14.369Z",
        "updatedAt": "2020-02-07T02:43:14.369Z"
    },
    {
        "id": 6,
        "title": "Ryan Montbleau",
        "announce_date": "2019-12-24T17:00:00.000Z",
        "type": "concert",
        "performersName": "Ryan Montbleau",
        "performersImage": "https://seatgeek.com/images/performers-landscape/ryan-montbleau-2785bf/6265/huge.jpg",
        "url": "https://seatgeek.com/ryan-montbleau-tickets/saratoga-springs-new-york-caffe-lena-2020-02-06-6-pm/concert/5164397",
        "city": "Saratoga Springs",
        "lat": "43.08",
        "lon": "-73.78",
        "createdAt": "2020-02-07T02:43:14.370Z",
        "updatedAt": "2020-02-07T02:43:14.370Z"
    },
    {
        "id": 7,
        "title": "NMSU Aggies Softball vs. Nebraska Cornhuskers Softball",
        "announce_date": "2020-01-28T17:00:00.000Z",
        "type": "sports",
        "performersName": "Nebraska Cornhuskers Softball",
        "performersImage": "https://seatgeek.com/images/performers-landscape/nebraska-cornhuskers-softball-0893f9/556735/huge.jpg",
        "url": "https://seatgeek.com/nmsu-aggies-softball-vs-nebraska-cornhuskers-softball-tickets/sport/2020-02-06-4-pm/5196240",
        "city": "Las Cruces",
        "lat": "32.2808",
        "lon": "-106.746",
        "createdAt": "2020-02-07T02:43:14.370Z",
        "updatedAt": "2020-02-07T02:43:14.370Z"
    },
    {
        "id": 8,
        "title": "Sporting Kansas City Season Kickoff Party",
        "announce_date": "2020-01-06T17:00:00.000Z",
        "type": "mls",
        "performersName": "Sporting Kansas City",
        "performersImage": "https://seatgeek.com/images/performers-landscape/sporting-kansas-city-ca55e8/7258/huge.jpg",
        "url": "https://seatgeek.com/sporting-kansas-city-season-kickoff-party-tickets/mls/2020-02-06-5-pm/5175066",
        "city": "Kansas City",
        "lat": "39.1232",
        "lon": "-94.8242",
        "createdAt": "2020-02-07T02:43:14.371Z",
        "updatedAt": "2020-02-07T02:43:14.371Z"
    },
    {
        "id": 9,
        "title": "Blippi Live - Jacksonville",
        "announce_date": "2019-10-08T17:00:00.000Z",
        "type": "family",
        "performersName": "Blippi Live",
        "performersImage": null,
        "url": "https://seatgeek.com/blippi-live-jacksonville-tickets/family/2020-02-06-6-pm/5032207",
        "city": "Jacksonville",
        "lat": "30.3263",
        "lon": "-81.6557",
        "createdAt": "2020-02-07T02:43:14.371Z",
        "updatedAt": "2020-02-07T02:43:14.371Z"
    },
    {
        "id": 10,
        "title": "North Carolina Tar Heels at Duke Blue Devils Womens Basketball",
        "announce_date": "2019-09-25T17:00:00.000Z",
        "type": "ncaa_womens_basketball",
        "performersName": "Duke Blue Devils Womens Basketball",
        "performersImage": "https://seatgeek.com/images/performers-landscape/duke-blue-devils-womens-basketball-880607/9599/huge.jpg",
        "url": "https://seatgeek.com/north-carolina-tar-heels-at-duke-blue-devils-womens-basketball-tickets/ncaa-womens-basketball/2020-02-06-6-pm/5018441",
        "city": "Durham",
        "lat": "35.9975",
        "lon": "-78.9422",
        "createdAt": "2020-02-07T02:43:14.372Z",
        "updatedAt": "2020-02-07T02:43:14.372Z"
    }
]
```

If request failed caused by server:
```javascript
Internal Server Error
```


## 6. POST /event/:id 
    Add event to favorite

* **EXAMPLE URL:**

http://localhost:3000/event/10

* **REQUEST HEADER**

```javascript
{
    "Content-Type": "application/json; charset=utf-8",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlciI6ImZhanJpbi5ub29ycmFjaG1hbjExQGdtYWlsLmNvbSIsImlhdCI6MTU4MTA0MzQwMX0.x8EB_SIGgFEaHhycpMwP5PI2luxO1n2fNqkY84J68Fw"
}
```

* **RESPONSE**

If request success:

```javascript
{
    "id": 10,
    "title": "North Carolina Tar Heels at Duke Blue Devils Womens Basketball",
    "announce_date": "2019-09-25T17:00:00.000Z",
    "type": "ncaa_womens_basketball",
    "performersName": "Duke Blue Devils Womens Basketball",
    "performersImage": "https://seatgeek.com/images/performers-landscape/duke-blue-devils-womens-basketball-880607/9599/huge.jpg",
    "url": "https://seatgeek.com/north-carolina-tar-heels-at-duke-blue-devils-womens-basketball-tickets/ncaa-womens-basketball/2020-02-06-6-pm/5018441",
    "city": "Durham",
    "lat": "35.9975",
    "lon": "-78.9422",
    "createdAt": "2020-02-07T02:43:14.372Z",
    "updatedAt": "2020-02-07T02:43:14.372Z"
}
```

If request failed caused by server:
```javascript
Internal Server Error
```

## 7. GET /favorite 
    List favorite

* **EXAMPLE URL:**

http://localhost:3000/favorite

* **REQUEST HEADER**

```javascript
{
    "Content-Type": "application/json; charset=utf-8",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlciI6ImZhanJpbi5ub29ycmFjaG1hbjExQGdtYWlsLmNvbSIsImlhdCI6MTU4MTA0MzQwMX0.x8EB_SIGgFEaHhycpMwP5PI2luxO1n2fNqkY84J68Fw"
}
```

* **RESPONSE**

If request success:

```javascript
[
    {
        "id": 1,
        "title": "Brainquility Music Festival (3 Day Pass) with Sunsquabi, Chachuba, Kill Paris",
        "announce_date": "2020-01-01T17:00:00.000Z",
        "type": "music_festival",
        "performersName": "Justin Martin",
        "performersImage": "https://seatgeek.com/images/performers-landscape/justin-martin-bb8d39/17196/huge.jpg",
        "url": "https://seatgeek.com/brainquility-music-festival-3-day-pass-with-sunsquabi-chachuba-kill-paris-tickets/live-oak-florida-spirit-of-the-suwannee-music-park-2020-02-06-3-30-am/music-festival/5170898",
        "city": "Live Oak",
        "lat": "30.3972",
        "lon": "-82.9466",
        "createdAt": "2020-02-07T02:43:14.362Z",
        "updatedAt": "2020-02-07T02:43:14.362Z",
        "FavoriteEvent": {
            "UserId": 1,
            "EventId": 1,
            "createdAt": "2020-02-07T03:13:03.578Z",
            "updatedAt": "2020-02-07T03:13:03.578Z"
        }
    },
    {
        "id": 2,
        "title": "Hugo Turenne",
        "announce_date": "2020-02-04T17:00:00.000Z",
        "type": "concert",
        "performersName": "Hugo Turenne",
        "performersImage": "https://seatgeek.com/images/performers-landscape/hugo-turenne-c96644/727337/huge.jpg",
        "url": "https://seatgeek.com/hugo-turenne-tickets/montreal-canada-circus-afterhours-2020-02-06-3-30-am/concert/5203736",
        "city": "Montreal",
        "lat": "45.5014",
        "lon": "-73.5716",
        "createdAt": "2020-02-07T02:43:14.363Z",
        "updatedAt": "2020-02-07T02:43:14.363Z",
        "FavoriteEvent": {
            "UserId": 1,
            "EventId": 2,
            "createdAt": "2020-02-07T03:13:06.491Z",
            "updatedAt": "2020-02-07T03:13:06.491Z"
        }
    },
    {
        "id": 3,
        "title": "Vader with Abysmal Dawn",
        "announce_date": "2019-12-09T17:00:00.000Z",
        "type": "concert",
        "performersName": "Vader",
        "performersImage": "https://seatgeek.com/images/performers-landscape/vader-d7f9b6/2709/huge.jpg",
        "url": "https://seatgeek.com/vader-with-abysmal-dawn-tickets/el-paso-texas-rockhouse-bar-grill-2020-02-06-3-30-am/concert/5146033",
        "city": "El Paso",
        "lat": "31.7949",
        "lon": "-106.353",
        "createdAt": "2020-02-07T02:43:14.364Z",
        "updatedAt": "2020-02-07T02:43:14.364Z",
        "FavoriteEvent": {
            "UserId": 1,
            "EventId": 3,
            "createdAt": "2020-02-07T03:13:07.714Z",
            "updatedAt": "2020-02-07T03:13:07.714Z"
        }
    },
    {
        "id": 4,
        "title": "Eiffel Tower Experience - Las Vegas",
        "announce_date": "2019-11-28T17:00:00.000Z",
        "type": "family",
        "performersName": "Eiffel Tower Experience",
        "performersImage": "https://seatgeek.com/images/performers-landscape/eiffel-tower-experience-4bb179/605657/huge.jpg",
        "url": "https://seatgeek.com/eiffel-tower-experience-las-vegas-tickets/family/2020-02-06-3-30-am/5135177",
        "city": "Las Vegas",
        "lat": "36.1125",
        "lon": "-115.171",
        "createdAt": "2020-02-07T02:43:14.368Z",
        "updatedAt": "2020-02-07T02:43:14.368Z",
        "FavoriteEvent": {
            "UserId": 1,
            "EventId": 4,
            "createdAt": "2020-02-07T03:13:09.017Z",
            "updatedAt": "2020-02-07T03:13:09.017Z"
        }
    }
]
```

If request failed caused by server:
```javascript
Internal Server Error
```

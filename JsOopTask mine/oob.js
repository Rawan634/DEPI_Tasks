/*
// this is not json type
const course = {
    title: "Html Course",
    price : 4000 ,
    instructor: 'Abdelrahman',
    desc: "Hello"
}

const url = "http://localhost:4000/courses"


-content-type : application
-this is the type json
const course = {
    "title": "Html Course",
    "price" : 4000 ,
    "instructor": 'Abdelrahman',
    "desc": "Hello"
}
- Js object ==> Json 
  - use JSON.stringify(obj)
  - JSON.parse() 


fetch(url ,{
    headers: {
        'Content-Type' : "application/json"
    },
    body : JSON.stringify({})
})
*/

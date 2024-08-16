use("crudDb")
db.createCollection("courses")
// db.courses.insertOne({
//     name:"vinay tutorial start",
//     price:0,
//     assignments:30,
//     projects:40

// })
// db.courses.insertMany([
//     {
//         "name": "vinay tutorial",
//         "price": 0,
//         "assignments": 30,
//         "projects": 40
//     },
//     {
//         "name": "vinay tutorial advanced",
//         "price": 0,
//         "assignments": 35,
//         "projects": 45
//     },
//     {
//         "name": "vinay tutorial beginner",
//         "price": 0,
//         "assignments": 25,
//         "projects": 35
//     },
//     {
//         "name": "vinay tutorial intermediate",
//         "price": 0,
//         "assignments": 28,
//         "projects": 38
//     },
//     {
//         "name": "vinay tutorial expert",
//         "price": 10,
//         "assignments": 40,
//         "projects": 50
//     },
//     {
//         "name": "vinay tutorial crash course",
//         "price": 7777,
//         "assignments": 20,
//         "projects": 30
//     },
//     {
//         "name": "vinay tutorial masterclass",
//         "price": 0,
//         "assignments": 45,
//         "projects": 55
//     },
//     {
//         "name": "vinay tutorial pro",
//         "price": 0,
//         "assignments": 50,
//         "projects": 60
//     },
//     {
//         "name": "vinay tutorial basic",
//         "price": 0,
//         "assignments": 15,
//         "projects": 25
//     },
//     {
//         "name": "vinay tutorial complete",
//         "price": 1000,
//         "assignments": 55,
//         "projects": 65
//     }
// ]
// )
// let a = db.courses.find({price:0})
// console.log(a)
// console.log(a.count())
// console.log(a.toArray())

// let  b = db.courses.findOne({price:0})
// console.log(b)

// update
db.courses.updateOne({price:0},{$set:{price:12345}})
db.courses.updateMany({price:0},{$set:{price:112233}})

// delete

db.courses.deleteMany({price:{$ne:10}})

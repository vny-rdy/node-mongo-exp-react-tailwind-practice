use("SigmaDatabase");

// Insert a few documents into the sales collection.
db.getCollection("courses").insertMany([
    [
        {
            "_id": { "$oid": "66449a23ac3ff5bd98bb20c8" },
            "name": "java",
            "price": 20000,
            "instructor": "Harry"
        },
        {
            "_id": { "$oid": "66449a23ac3ff5bd98bb20c9" },
            "name": "python",
            "price": 15000,
            "instructor": "Sally"
        },
        {
            "_id": { "$oid": "66449a23ac3ff5bd98bb20ca" },
            "name": "javascript",
            "price": 18000,
            "instructor": "Tom"
        },
        {
            "_id": { "$oid": "66449a23ac3ff5bd98bb20cb" },
            "name": "c++",
            "price": 22000,
            "instructor": "Jerry"
        },
        {
            "_id": { "$oid": "66449a23ac3ff5bd98bb20cc" },
            "name": "ruby",
            "price": 16000,
            "instructor": "Lily"
        },
        {
            "_id": { "$oid": "66449a23ac3ff5bd98bb20cd" },
            "name": "swift",
            "price": 25000,
            "instructor": "Andy"
        },
        {
            "_id": { "$oid": "66449a23ac3ff5bd98bb20ce" },
            "name": "kotlin",
            "price": 21000,
            "instructor": "Rachel"
        },
        {
            "_id": { "$oid": "66449a23ac3ff5bd98bb20cf" },
            "name": "go",
            "price": 19000,
            "instructor": "Jake"
        },
        {
            "_id": { "$oid": "66449a23ac3ff5bd98bb20d0" },
            "name": "rust",
            "price": 23000,
            "instructor": "Monica"
        },
        {
            "_id": { "$oid": "66449a23ac3ff5bd98bb20d1" },
            "name": "typescript",
            "price": 17000,
            "instructor": "Ross"
        }
    ]
    
]);

// Print a message to the output window.
console.log(`Done inserting Data.`);


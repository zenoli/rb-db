
console.log("INIT SCRIPT STARTED")
rs.initiate();
sleep(5000);

console.log("CREATING ROOT USER")
admin = db.getSiblingDB("admin")
admin.createUser({
    user: "olivier",
    pwd: "blubb",
    roles: [
        {
            role: "root",
            db: "admin",
        }
    ],
});

console.log("INITIALIZING ASSISTS DB")
db.createCollection("assists", { capped: false });
db.assists.insertMany([
    {
        name: "Olivier Bitter",
        assists: 5,
    },
    {
        name: "Rahel Celik",
        assists: 2,
    },
    {
        name: "Sheila",
        assists: 200,
    },
]);


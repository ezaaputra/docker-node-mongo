db = db.getSiblingDB('school')
db.createUser(
  {
    user: "mongouser",
    pwd: "mongopassword",
    roles: [
      {
        role: "readWrite",
        db: "school"
      }
    ]
  }
);
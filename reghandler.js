bcrypt.hash(req.body.password, 5, function( err, bcryptedPassword) {
   
   var users={
     "first_name":req.body.first_name,
     "last_name":req.body.last_name,
     "email":req.body.email,
     "password":bcryptedPassword,
     "created":today,
     "modified":today
   }
   ...
  });

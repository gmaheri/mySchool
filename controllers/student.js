const Student = require('../models/Students');

// Add student form process
exports.addStudent = (req, res) => {
  const newStudent = {
    firstName : req.body.firstName,
    lastName : req.body.lastName,
    admno : req.body.admno,
    stream : req.body.class,
    birthDate : req.body.birthDate,
    admnDate : req.body.admnDate,
    gender : req.body.gender,
    parentName : req.body.parentName,
    phoneNumber : req.body.phoneNumber,
    altphoneNumber : req.body.altphoneNumber,
    email : req.body.email,
    address : req.body.address
  };

 new Student(newStudent).save()
 .then(student => {
   res.redirect('/students')
 })
 .catch(error => {
   let errors = [];
   if(error.code === 11000){
     errors.push({text:'A record with similar Admission Number already exists'})
     res.render('students/add',{
        errors : errors
        // PLEASE persist all other data entered in the form
     });
   };
 });
};


// Fetch students from DB
exports.fetchStudent = (req, res) => {
  Student.find({}).lean()
  .then(students => {
    res.render('/students', {
      students: students
    })
  })
  .catch(error => console.log(error))
}

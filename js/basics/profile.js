
function profile (name, dateOfBirth, GPA, isNewUser) {
    console.log(`   born in ${dateOfBirth} in Mekelle.
   got a GPA of ${GPA}.
   is a new user:  ${isNewUser}.
       \nWelcome ${name}!`);
}

let studentName = 'Alicia';
let dateOfBirth = 2000;
let GPA = 3.87;
let studentStatus = 'existingser';
let isNewUser = (studentStatus == 'newUser');

console.log(`Profile of ${studentName} is: `);
let studentProfile = profile(studentName, dateOfBirth, GPA, isNewUser);

// profile(studentName, 2023 - 23, Math.round(64.78 / 16.4 * 100)/100, studentStatus == isNewUser);

const user = {
    name: "Nabila" ,
    adress: {
        city: "Sylhet",
        geo:{
          lat: 24.89, lng: 91.87
        },

    },

};

// console.log(user) 
console.log(user.adress.city) 
 // console.log(user.contact.phone) // CRASH — contact is undefined
console.log(user.contact?.phone); // undefined — polite, no crash

const phone = user.contact?.phone ?? "Not provided";
console.log(phone); // Not provided



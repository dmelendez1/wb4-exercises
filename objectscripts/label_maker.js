let myInfo = {
    name: "Old Mcdonald",
    address: "1950 E Camelback Rd",
    city: "Phoenix",
    state: "AZ",
    zipcode: "85016"
};

function printContact(contact) {
    console.log(contact.name);
    console.log(contact.address);
    console.log(contact.city + ", " + contact.state + " " + contact.zipcode);

}
    printContact(myInfo);



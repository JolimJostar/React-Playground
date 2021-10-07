import React from 'react';

var gretings = ['Hello', 'Yo', 'Sup', 'My man', 'Dude']

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}
  
function RandomItemFromArray(myArray) {
    return myArray[Math.floor(Math.random() * myArray.length)]
}
  
const user = {
    firstName: 'Yan',
    lastName: 'Kochkin'
};
  

function Greet() {
    return (
        <h1>
            {RandomItemFromArray(gretings)}, {formatName(user)}!
        </h1>
    )
}

export default Greet    
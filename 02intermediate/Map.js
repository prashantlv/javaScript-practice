var anam = {
    name: 'I am Anam',
    age: 19,
    active: true,
}
var prashant = {
    name: 'I am Prashant',
    age: 21,
    active: true,
}
var ballu = {
    name: 'I am ballu',
    age: 22,
    active: false,
}

let users = new Map() // obj users is created for map

//console.log(typeof users);    typeof tell data type

users.set('anam', anam)  // key value pair is to be passed, it looks values for given key/ 'anam' is key and anam is value
users.set('prashant', prashant)  
console.log(users);

// console.log(users.size) // it tells how many objects does map holds with required key, its is unique from object



//console.log(users.get('anam'))
console.log(users.keys());  // iteratable
//console.log(users.values());   

for (const key of users.keys()) {

    console.log(key);
    
}
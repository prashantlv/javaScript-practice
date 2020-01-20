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
users.set('anam', anam)           
users.set('prashant', prashant)
users.set('b',ballu)


for (const key of users.keys()) {     // read documentation
                                     // key is variable and users is itrable here
    console.log(key);
}

// we can get perticular values

for (const values of users.values()) {     // read documentation
    // values is variable and users is terable here
console.log(values.age);                  // retriev only age
}

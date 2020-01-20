// const myToDos = ['Drink Protien','Have Breakfaast','Revise what have learned']

// console.log(myToDos.indexOf('Have Breakfaast')+1)  

// console.log(myToDos.includes('Have Breakfaast'))

const newToDos = [{
    title: 'Drink Protien',
    isDone: false,

},{
    title: 'Have Breakfaast',
    isDone: false,
},{
    title:'Revise what have learned',
    isDone:true,
}]
// Methode one
const findToDos = function(myToDos, title){            // refer array js mdn docum. for methods
    const index = myToDos.findIndex(function(todo, index){
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return myToDos[index]
}
let print = findToDos(newToDos, 'drink protien')
console.log(print);

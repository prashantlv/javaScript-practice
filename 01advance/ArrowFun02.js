let ToDos = [{
    title: 'Drink Protien',
    isDone: true,
},{
    title: 'Have Breakfast',
    isDone: true,
},{
    title: 'Revise what have learned',
    isDone: false
}]

console.log(ToDos.filter((todo) => todo.isDone === true)


// Array.filter(call back fun)  is used to return objects which is true for given Expression.
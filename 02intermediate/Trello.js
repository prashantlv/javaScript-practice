let myTodos ={
    day: 'Monday',
    meetings: 0,
    meetDone: 0,
}

let addMeetings = function(todo, meet)
{
    todo.meetings = todo.meetings + meet
}

let meetingsDone = function(todo, meet)
{
    todo.meetDone =todo.meetDone + meet
}

let reset =function(todo)
{
    todo.meetings=0
    todo.meetDone=0
}

let summary = function(todo)
{
    return todo.meetings - todo.meetDone
}

addMeetings(myTodos,6)
addMeetings(myTodos,4)
meetingsDone(myTodos,8)
console.log(summary(myTodos));

/* we pass new object todo as a copy for mytodos
everthing is quite known
*/
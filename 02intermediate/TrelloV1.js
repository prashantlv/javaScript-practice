let myTodos =
{
    day: 'Monday',
    meetings: 0,
    meetDone: 0,
    addMeeting: function(num)    /* methode inside object */
    {
        this.meetings = this.meetings + num
    },

    meetsDone: function(num)
    {
        this.meetDone = this.meetDone + num
    },

    reset: function()
    {
        this.day= 'Monday'
        this.meetings= 0
        this.meetDone= 0   
    },

    summary: function()
    {
        return `You have ${this.meetings - this.meetDone} meetigs today`
    },
        
}

myTodos.addMeeting(7)
myTodos.meetsDone(4)
// myTodos.reset()
console.log(myTodos.summary());


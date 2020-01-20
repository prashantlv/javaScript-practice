let grade = function(currentMark,totalMark)
{
    let perc=(currentMark/totalMark)*100
    
    let mygrade =''

    if(perc >=90)
    {
        mygrade = 'A'
    }else
    if(perc >=80)
    {
        mygrade = 'B'
    }else
    if(perc >=70)
    {
        mygrade = 'C'
    }else
    if(perc >=60)
    {
        mygrade = 'D'
    }else
    if(perc >=50)
    {
        mygrade = 'E'
    }else
    myGrade = 'Fail'
return `Your grade is: ${mygrade}`

}

let result = grade(86, 100)

console.log(result);


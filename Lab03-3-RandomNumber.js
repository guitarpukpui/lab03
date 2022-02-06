
let min = 1; 
let max = 100;
random = Math.floor(Math.random() * 100) +1 ;
while(number !== random)
{
    var number = prompt('Guess the number between ' + min +  ' and '+ max + ' inclusive or input other numbers to see the secret number.');
    number = parseInt(number) 
    if(number > max || number < min)
    {
        alert('Secret number is ' + random);
        break;
    }
    else if(number < random)
    {
        min = number + 1;
    }
    else if(number > random)
    {
        max = number - 1;
    }
    else if(number = random)
    {
        alert('Matched! You win.');
        alert('The seret number is ' + random);
        break;
    }
}
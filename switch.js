//for....of [klar] 
/* 1 - klar
const number = [324, 23, 5, 63, 0, 24, 32];
for (const nr of number){
    console.log(nr);
}*/
/* 2 - kalr
const array = ['Clara', 'Guido', 'Emma', 'Alrik', 'Caroline', 'Eric', 'Dominique'];

for (const names of array ){
    const h1EL = document.createElement('h1');
    document.body.appendChild(h1EL);
    h1EL.innerText = names;
}*/

//while 
/* Random a & b [klar]  
let randomNumber = Math.random();

while (randomNumber > 0.25) {
    console.log(randomNumber);

    randomNumber = Math.random();
}

while (randomNumber <0.3 || randomNumber > 0.4){
    console.log(randomNumber);

    randomNumber = Math.random();
}*/

// [Utmaninig b & c] [klar]
/*
const array =  [324, 23, 5, 63, 24, 32, 0, 34, 32, 56, 78, 23, 56, 8777, 54];
let randomNumber = Math.random(); 
let randomIndex = Math.floor( Math.random()* array.length );

//console.log( 'randomindex', randomIndex );

//console.log( 'nummer från arrayen', array[randomIndex]);

// Använd en while loop och logga ett random nummer ur arrayen så länge indexnumret inte är lika med 0.


 while ( randomIndex !== 0 ){
    
     console.log(array[randomIndex]);
     randomIndex = Math.floor( Math.random()* array.length );
     console.log(randomIndex);
     
 }*/

//Switch 
//Månader - upg 1 [klar] 
/*
const currentMonth = 'october';

switch (currentMonth) {
    case 'september':
        console.log('september månad');
        const h3sep = document.createElement('h3');
        document.body.appendChild(h3sep);
        h3sep.innerText = 'september';
        

    case 'october':
        console.log('october månad');        
        const h3oct = document.createElement('h3');
        document.body.appendChild(h3oct);
        h3oct.innerText = 'october';
        

    case 'november':
        console.log('november månad');
        const h3nov = document.createElement('h3');
        document.body.appendChild(h3nov);
        h3nov.innerText = 'november';
       
    
    case 'december':
        console.log('december månad');
        const h3dec = document.createElement('h3');
        document.body.appendChild(h3dec);
        h3dec.innerText = 'december';     
}*/

//Backgrundsfärg - upg. 2 [klar] 
/*
const bgColor = 'green';

        
switch (bgColor){
    case 'blue':
        const h1blue = document.createElement('h1');
        document.body.appendChild(h1blue);
        h1blue.innerText = bgColor;  
        h1blue.style.color = 'blue';
        break;

    case 'red':
        const h1red = document.createElement('h1');
        document.body.appendChild(h1red);
        h1red.innerText = bgColor;  
        h1red.style.color = 'red';
        break;

    case 'green':
        const h1green = document.createElement('h1');
        document.body.appendChild(h1green);
        h1green.innerText = bgColor;  
        h1green.style.color = 'green';
        break;

    default:
        const h1gray = document.createElement('h1');
        document.body.appendChild(h1gray);
        h1gray.innerText = bgColor;  
        h1gray.style.color = 'gray';
}*/

//Ternary
// Högt/ lågt nummer [klar] 
/*
const isNumber = 20;
const number = isNumber > 50 ? 'Högt nummer':'lågt nummer';
console.log(number); 

const p1El = document.createElement('p');
document.body.appendChild(p1El);
p1El.innerText = number;*/

//Dark mode [klar] 
/*
const darkMode = false;

const h3El = document.createElement('h3');
document.body.appendChild(h3El);
const mode = darkMode ? document.querySelector('h3').classList.add('light'): document.querySelector('h3').classList.add('dark');

h3El.innerText =  'hej'; 
*/





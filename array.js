// Tips : Tänk vad är det datorn gör - tänk som en dator ! 

//Frukter 1 - 5 avklarat 
/*
const frukt = ['Banan', 'äpple','päron','appelsin','clementin', 'granatäpple','mango'];
console.log(frukt);

for (i=0; i<frukt.length; i++){
    console.log(frukt[i]);
}

for (i=0; i<frukt.length; i++){
   const h1El = document.createElement('h1');
    document.body.appendChild(h1El);
    
    h1El.innerText = frukt[i];
    
    if ( frukt[i]==='Banan'){
    h1El.style.color ='yellow'
}

 else if (frukt[i]==='appelsin'){
    h1El.style.color = 'orange';

}

else {
    h1El.style.color = 'red';
}

}
*/

// Nummer 1 - 5 avklarat 
/*

const number = [123,44,32,234,222,111,77,78,61,65];
console.log(number);

for (i=0; i<number.length; i++){
    console.log(number[i]);
    const pEl = document.createElement('p');
    document.body.appendChild(pEl);
    pEl.innerText = number[i];
    pEl.style.color = 'white';

    const hue = number[i];

    if (number[i]>180){

        pEl.style.backgroundColor = `hsl(${hue},80%, 80%)`
       
    }

    else if (number[i]<=180) {
        pEl.style.backgroundColor = `hsl(${hue}, 80%, 20%)`
    }
       

    else {
        pEl.style.backgroundColor = `hsl(0, 80%, 0%)`
       
    }
}*/

// jämnt eller Udda 1 - 5 avklarat 
/*
const nr = [23,45,68,36,22,11,68,90,98,86,54,35,78,54];

for (i=0; i<nr.length; i++){
    const h3El = document.createElement('h3');
    document.body.appendChild(h3El);

    if (nr[i] % 2 === 0 ){
        h3El.innerText = nr[i]+' '+'detta är ett jämt tal';
        h3El.style.backgroundColor = 'green';
    }

    else {
        h3El.innerText = nr[i]+' '+'detta är ett udda tal';
        h3El.style.backgroundColor = 'red';
    }
}*/
// Generera mening [klar]
/*
const names = ['Emelie','lisa','linda','erik','linnea','Alex','Robby','John','Bertil','Sofia'];
const verb = ['Jobbar', 'hoppar', 'äter','spelar','går','cyklar','kör','leker','reser','pluggar'];
const dag = ['idag','imorgon','på morgonen','på kvällen','på måndag','på fredag','på tisdag','på onsdag','på tordag','på fredag'];
for (let i=0; i<10; i++){

    const pEl = document.createElement('p');
    document.body.appendChild(pEl);
    pEl.innerText = names[i]+' '+verb[i]+' '+dag[i];
    console.log(names[i],verb[i],dag[i]);
}*/


//Användarnamn - Har krånglat till sig, hur fixar jag problemet ?
/*
const importantNames = ['Clara', 'Guido', 'Alrik'];
const names = ['Signe', 'Noura','Elias', 'Maja', 'Trung', 'Dalya', 'Sergio', 'Bianca', 'Soraya','Clara', 'Guido', 'Alrik'];

for(let i=0; i<names.length; i++){

   const h1El = document.createElement('h1');
   document.body.appendChild(h1El);
   h1El.innerText = names[i];

   for (let j=0; j<importantNames.length; j++){

    //console.log(names[i], importantNames[j]);


    if (names[i] === importantNames[j]){
        h1El.style.fontWeight = 'bold';
        h1El.style.color = 'black';
        break;
    }

    else {

        h1El.style.color = 'gray';
    }
}
}*/

//Varannan  1 - 4 avklarat [Bra jobbat]
/*

const länder = ['sverige','tyskland','ghana','japan','korea','china','norge','danmark','frankrike'];

console.log(länder.length);

for (i=0; i<länder.length; i++){
   const h1El = document.createElement('h1');
    document.body.appendChild(h1El);
    h1El.innerText = länder[i];

    if (i%2 === 0){
        h1El.style.border = 'red solid 2px';
    }
   
    else if (i%2 === 1){

        h1El.style.border = 'green solid 2px';
    }

}*/
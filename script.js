console.log("Hello world");
//Avklarade uppgifter For-loop 1-4 (5)
/*
for (let i=0; i<10; i++) {
  console.log(i);
}

for (let i=111; i<134; i++) {
  console.log(i);
}

for (let i=20; i>14; i--) {
  console.log(i);
}


for (let i=50; i>0; i-=5 ){
  console.log(i);
}
*/

// Har lite svårt med denna delen (5:an) [klar]
// i=i*2
/*
for (let i=1; i<129; i*=2){
  console.log(i);
}*/

/* Tamplete ${} övninig
const name = "Lisa";
const age = 25;
const sentance = `${name} i ${age} years old.`;
console.log(sentance);

const bdate = 2000;
const cyear = 2025;
const sentance = `you where born ${bdate} and its now ${cyear} how old are you ?.`;
console.log(sentance); */

// Hur gör man så att tjockleken bli större för varje loop på listan. [klar]
// Klar med listan alt. 2 - 3b (3:c) [klar]
/*
const olElement = document.createElement("ol");
document.body.appendChild(olElement);

for (let i = 1; i < 11; i++) {
  const liElement = document.createElement("li");
  olElement.appendChild(liElement);
  liElement.innerText = `lista ${i}`;
  
}

const allliElement = document.querySelectorAll('li');
console.log(allliElement);


for (let i=0; i<11; i++){
  allliElement[i].style.border = `${i+1}px solid skyblue`;
} */

// Gör så att färgen går från svart till vit ! (4:b) [klar]
// Göra så att text färgen går från vit till svart ! (5:c) [klar]
/*
for (let i=0; i<20; i++){
  const h1Element = document.createElement('h1');
  document.body.appendChild(h1Element);
  h1Element.innerText = `heading ${i}`;

  const lightness = i*5;
  
  h1Element.style.backgroundColor = `hsl(1, 50%, ${lightness}%)`;
  
  h1Element.style.color = `hsl(310, 0%, ${100-lightness}%)`;
}
*/

// Uppgift 6 - Övningsuppgift (6:b)[klar]
/*
for (i=0; i<20; i++){
  const pElement = document.createElement('p');
  document.body.appendChild(pElement);
  pElement.innerText = `This is paragraf ${i} `;

  const hue =100+i*5;
  pElement.style.backgroundColor = `hsl(${hue}, 90%, 60%)`;
}*/

//Utmaningar 1-3

//Nummer : 1  ! Har jag gjort rätt ? [klar]
/*
 const olElement = document.createElement('ol');
  document.body.appendChild(olElement);
  console.log(olElement);

for (let i=1; i<6; i++){
  const listElement = document.createElement('li');
  olElement.appendChild(listElement);
  listElement.innerText = '...';
}
*/

//Nummer : 2 ! Hur gör jag ett kort med Js [klar]
/*
const names = ['Ash','Alex','Linus','Oskar'];
for ( let i=0; i<4; i++){
  
  const card = document.createElement('div');
  document.body.appendChild(card);
  console.log(card);

  const h2Element = document.createElement('h2');
  card.appendChild(h2Element);
  h2Element.innerText = 'Sinus hoodie';
  console.log(h2Element);

  const h3Element = document.createElement('h3');
  card.appendChild(h3Element);
  h3Element.innerText = names[i];
  console.log(h3Element);
  console.log(names);
  
  const imgEl = document.createElement('img');
  card.appendChild(imgEl);
  imgEl.src ='https://images.stockcake.com/public/f/3/a/f3a6a9ae-f970-406d-a67e-99336dabe78e_medium/floating-white-tee-stockcake.jpg';
  imgEl.alt ='en t-shirt';
  
  const pElement = document.createElement('p');
  card.appendChild(pElement);
  pElement.innerText = 'Random text ...';
  console.log(pElement);

  const buttonEL = document.createElement('button');
  card.appendChild(buttonEL);
  buttonEL.innerText = 'klick';
  console.log(buttonEL);


  card.style.backgroundColor = 'skyblue';
  card.style.display = 'inline-flex';
  card.style.flexDirection = 'column';
  card.style.margin ='10px';
}*/

//Nummer: 3  !Hur Ändrar jag hue från 180 --> 280 [klar]
/*
let amount = 4;

for (i = 0; i < amount; i++) {
  const h1Element = document.createElement("h1");
  document.body.appendChild(h1Element);
  h1Element.innerText = `Rubrik ${i} element`;

  const hue = 180 + i * (100/(amount - 1));

  h1Element.style.color = `hsl(${hue}, 90%, 50%)`;
}*/

// Gå igenom alla svar - dubbelkolla så att det är rätt !!
//__________________________________________________________________________________
/**Lektions uppgift*/ //[klar]
/*
const sprak = ['Svenska', 'Engelska', 'Japanska', 'Danska', 'Franska'];


for (let i=0; i<sprak.length; i++){
  // console.log('test');
    const h1 = document.createElement('h1');
    document.body.appendChild(h1);
    h1.innerText = sprak[i]; 
}*/
// random 
/*
for (let i=0; i<5; i++){
const h1El = document.createElement('h1');
document.body.appendChild(h1El);
h1El.innerText = `Detta är nummer ${i}`;

const hue = 36+i*10;
h1El.style.backgroundColor = `hsl(324,88%,${hue}%)`

const lightness = i*25;
h1El.style.color = `hsl(324, 88%, ${lightness}%)`

h1El.style.border = `solid ${i+2}px black`;
}*/


# lektion1
js-lektion

cd i git hub = change direction så man kan byta mappen om man är i fel map.


```js
"mortaza" // valid sting 
'mortaza' // valid string
´mortaza´// valid string 
```


Concatinate = add. Lägga till.

```js
const date = new date; 

```

variabeler: 

scoped : var variabeln är tillgägnlig. hur man skapar variabeln gör den olika tillgänglig om det är tex var, let eller const. 

var är en nyckel ord som man skapar varabel med. 

```js
var firsName="mortaza";
console.log(firstName);



```
if satser: basic

```js
if (condition){

}

```

## arrays

en array består av en colletion av data. det kan vara olika element.

`[1,2,3,4,5,6,7,8,];`

det här är ett exemple på en array av siffror. 
["kevin","levin","hevin","devin"]

man ha en data typ så det är antingen nummer streng eller något annat i fö sig. man kan mixa data typer i arrayen men man ska inte göra det. 

`[3,4,6,"kevin",true,5]` inte bra i praktiken. 

man gör detta för att skapa 5 person i varabel man kan göra en array alla i ett. 

developer mozilla.org är bra källa för information. 

##skapa array

för att skapa en array man ska skapa en varianbel och assign till en array. 

```js
const numbers = [46,55,77,88,99,47];

console.log(numbers[0]); // 46.
console.log(numbers[2]); // 77.

```
när man skapar en array såhär adressen/referensen är constant. det vill säga man kan ändra värdet men placeringen blir samma. numbers är en referens och inte ett värde. 

accesesing elements in array: 

det finns 2 sätt att kommma åt värdena i arrayen. 
det typiska är genom index. Det vill säga att varje värda i arrayen har en index position och dessa position räknar man från 0. zero index based.


andra sättet är "at()"

```js
const red = red;

const colors = [red,"blue","green","orange"];
console.log([colors.at(2)]);
console.log([colors.at(-1)]); // man börjar från slutet av listan.

colors[2]= brown;

```
man ska ha "" dessa tecken då det är streng annars gör man så. 

```js
const colors = [red,"blue","green","orange"];
const updateColors= colors.with(1,"pink");
console.log(colors)
console.log(updateColors)

```

metod och funktion är samma nänstan. det är en förenklad sätt att dkriva en metod istället för att skriva en rad koder. det är en färdig kod i en merod man kan kalla för att den ska göra en sak. det är fördifinerad som vi kan anropa. 

metoder:

Push(): lägger till element till arrayer. Den adderar på slutet av arrayeren. om det är 4 element och vi använder push då läggs den en till element så det blir 5 och den hamnar på slutet. det kan va ett till flera.  

Push(item1,item2,item3) => new lengt of array

<!-- 
```js

``` -->


```js
const numbers = [1,2,3,4,5,6]
numberns.push(7);

```
pop() => the remove element. man kan ta bort en element frpn slutet.


```js
const cities= ["göreborg","malmö","lund"];

cities.pop();
console.log(cities);
```

unshift() lägger till en eller flea element (item/s) i början av en array.
```js
const cities= ["göreborg","malmö","lund"];

cities.unshift("stockholm")
console.log(cities);

```
shift tar bort det elementet som är först som pop men från början och inte slutet. 

```js
const cities= ["göreborg","malmö","lund"];
cities.shift()
console.log(cities);
```
includes(item)=> boolean.
den chekar om det elementet finns i arreyen så retunerar den om det är sant eller falskt. 

```js
const numbers = [2,4,5,6,8,9];

if(numbers.includes(5))
{
    console.log("number exist")
}
else{
    console.log("number dosent exist")
}

```

indexof=> return var den finns i arreyen eller om den inte existerar (-1)

```js
const numbers = [2,4,5,6,8,9];
numers.indexOf(6);
console.log();

```


Join()> det lägger till kommentar eller separar den i arrayn.
const cities= ["göreborg","malmö","lund"];
const citiesAsString=cities.join(".");
console.log(cities);

### splice(start) används inom mycket. man kan ha den i kombinerad med array om start är större eller mindre. 

om vi inte vill ta bort något då skriver vi 
splice(start,0);

om vi ska ta bort : splice(start, deliteCount); då tar den bort från start. 
splice(2, deliteCount); då tar den bort den andra. 

while loop så länge codition stämmer den kommer köras och det är viktigt att updatera vikloret som styr. conditionen måste vara true om den e falls då körs inte koden. 

## Do While loop

lopen körs en gång oavsett om det e falsk eller true men om den är true då fortsätter den köra.
```jd
do {
    
} while ( condition);

```

## For-loop index
for-loop är bra med array då vet vi hur många gånger vi ska lopa för den kommer att vara anpassad efter arrayen. 

initialValue = "let caunt= 0; 

```js
for (initialValue; condition;change;)
{

}

```

Exemple
```js

const numbers = [2,5,8,6,9,23]

for (let i = 0; numbers.length; i++);
{
    console.log(numbers[i]);
}

```
Motsatsrikning: 
````js

const numbers = [2,5,8,6,9,23]

for (let i = numbers.length -1 ; i>=0; i--);
{
    console.log(numbers[i]);
}
````

```js
for( varible of array ) {
} // code to executed in each interaction.

const cars = ["volvo" "bmw" "mercedes"]

for ( const car of cars) {
    console.log(car);
}

```


### FUNKIONER 

en funktion kan bestå av en liten eller stor del av koder. om man upprepar en kod väldigt ofta då kan man göra den koden till en funktion och kalla den funktionen. Som en färdig recept. 

det finns 3 sätt att skapa en funktion i javascript. 2 av de är väldigt lik men det 3e sättet är annarlunda. 


## KOLLLA DOKOMENTET SOM LÄARERN HAR GJORT !!!!!!!!!!!!!!!!!

SYNTAX

```js
function functionName(){
    // code to executed.
    return someting; 
}



```

lets go första ssättet 

```JS
function greeting(){
    console.log("hello There")
} 
man får "undefinded" och det är return värdet. utan retur värde kommer browsern skriva ut "undefinded" 

" BÄSTA SÄTTET den hissas upp så den används i alla rader och inte efter där koden är "


```

andra sättet som är lik den första 
```js
const greeting = function()
{
    console.log("hello There")
}


```


3e sättet arrow funtion

```js 
const gretting=() => {
    console.log("hello There")
}



```

BÄST ATT ANÄNDA ARROW och den första. 
KOLLLA DOKOMENTET SOM LÄARERN HAR GJORT !!!!!!!!!!!!!!!!!

## funiton med parametrar: 

```js

function greetingName(name){
    console.log("hello" + name + "!")
    //alvernative:
    //console.log(`hello $name!`) DUBBELKOLLA DETTA SP DET ÄR RTÄTT
}


```


egen ex
```js
function addTwoNumbers(num1,num2){
    console.log(num1 + num2)
}


```

```js
function addTwoNumbers(num1,num2){
    const answer= num1 +num2;
    console.log(`the answer is ${answer}`);
}



```

````js
function divition(num1,num2){
    const result = num1/num2;
    return result;
}
const result = divide(10,2);
`````

## uppgift 30:

````js 
let newStr: " ";
for(const word of words){
    newStr += word[0]
}
 console.log(newStr);



````


FUNTIONEN UPPFIGT 13 

````js

const vowels = ["a","e","i","o","u"];
let count = 0;


````
objekt i programmering är egenskaper och metod är beteendet. alla bilar har samma egenkspaer ocj metoder alla har ljul och startar men de har olika värden att tex alla bilar tänds men vissa med nyckel vissa med knapp. samma egenskap samma metod men olika världen på egenskaperna. 

# hur skapar man en objekt: 
en objekt består av en variabel och en variabelnamn och vi tilldelar en "{}". Där efter kan vi till dela någon värde. 


```JS
const someObject = {} 

````

Det ovan är en tom objekt. Det är bäst att skapa en objekt med "Const".

````JS
const car = {
    make = "volvo";
    model: "V70";
    year: 2016;
    manualTransmission: true
} 

````

Detta bilen presenterar en objekt. det har 4 egenskper. varje egenskap presenterar en information om den objekten. och den dana kan vara olija från string till siffror till boolian. 

## costum metod.

````JS


const car = {
    make = "volvo";
    model: "V70";
    year: 2016;
    manualTransmission: true
    start: funtion(){
        console.log("the car is Start!");
    }
    changeGear: ()=>{
        console.log("gear has beeen changed");
    }
} 

````
När en funtion kopplas till ett objekt det funktionen blir till metod. DVS metoder är funktioner. DVS om funktionen är för sig själv då är den funktion men kopplas den till en onjekt den funktionen blir till en metod. 


## Vad är "THIS" scope: 

Det är en nyckelord som refererar till en objkekt i javascript. var o hur man använder den så kan den användas på olika sätt. 

* ensam this referrar till den globala window objekt. 
* in "use Stict" - mode this would be undifined.
* ** i en objekt ** this refererar till objekten själv. 
* in i en funktion regeraer this till global objekt, unless it is created in another contentt.

Detta ska vi kunna ::: 
````js



````

```JS
const car = {
  make: "Volvo",
  model: "V70",
  year: 2016,
  manualTransmission: true,
  start: function () {
    console.log("The car has started");
  },
};

for (const key in car) {
  console.log(key); // Will log the key.
}

````

där det står key kan man skriva vad som och vad man än väljer att kalla det så presenterar (const key in car) "Key"  make,model, year och alla. 

## Object.assign(targetObject,sorceObject)=> target object

```JS
const person= {
name="niklas"
age: 40;
}

const personDetileInfo={
    last name = "anders"
    occupation= "devoloper";
}

object.assign(person,personDetileInfo);
console.log(person)
console.log(personDetileInfo)

```

past by reference betyder ??
assaign betyder att slå ihopa 2 eller flera objekt. DVS targetObject,sorceObject,sorceObject,sorceObject,sorceObject. De sorcen kompliterar targetobjekten och skriver ut en hel objekt. 

object.keys(object)=>array

den tar alla keys och ger oss en array. 

````JS
const house= {
    color:"green",
    area:200,
    adress= "rottningsgatan"
    city= stockholm,
}
const keys = object.keys(house)
console.log(keys)

//objektvalue

const keys = object.value(house)
console.log(keys)

````
object.enteries kommer ge oss både value och keys i 2 olika rader. 

object.freeze man låser objekten och man kan inte ändra den senare. DVS man kan inte radera eller lägga till nya ttribyter. 

````js 
const frozeenHouse = object.freeze(house)
frozeenHouse.color=blue;
frozeenHouse.windows=5;

console.log(frozeenHouse)



````
object.sea man kan ite lägga till nya grejer eller ta bort som i freeze MEN man kan ändra på värderna som exixsterar. 

om man har en bil car.color=red; och vill ändra den till gul det går. 

Spreed syntax 
man kopierar en objekt och ändra på den nya. om man ska ha 4 bialr med samma egenskaper men i olika färger så kan man kopiea den så
````JS 
 const car = {
    make = "saab";
    model=98;
    color="geen";,

 };
 const newCar={};

 console.log(car);
 console.log(newCar);

const anotherCar= {...car};



````


````js



`````
vad är en parameter? 
## Array methods med callbacks. callbacks är en funtion när den används som parameter (då blir den callbacks).
map(), filter(), reduce(), every(),

alla dessa methoder execluterar en array. Callbacks körs efter varje intration. 

map() innebär = den loppar igeenom en array och gör en edditering efter varje intration. den ger sedan en ny array med samma siffror med den nya modifieringen låt oss säga samma siffror plus 2+.

````js
const numbers[2,3,5,7,8,9];

const numberDubbles= numbers.map( (number)=>){
    return number * 2;
}
console.log(numberDubbles);


`````

exept number5 

````js

const numberDubblesNot5 = numbers.map((number)=> {
    if (number===5){
        return number;
    }
    
    return number*2;
});

````` 

## HUR MAN ANVÄNDER MAP()
const volvo ={
    make:"volvo",
    model:"v60",
    color:"green"
};
const MCD ={
    make:"mcd",
    model:"v60",
    color:"green"
};
const BMW ={
    make:"bmw",
    model:"v60",
    color:"green"
};

const cars=[volvo,MCD,BMW];

const carsAllRed= cars.map((car)=> {
    if (car.color==="red"){
        return car;
    }

    return{...car,color:"red"};
});

console.log(cars);
console.log(carsAllRed);



FILTER ()


detta filtrerar arreyen .callbacken kollar om arrayen är sant eller faskt och det som är faslkt kommer att suddas bort efter vaje intraktion. 

````js
const booleans= [0,1,0,1,0,1,0,1,1,1,0,1];
const all0nes= numbers.filter((numbers)=>{
    if (numbers===0){
        return false;
    }
    return true;
})


`````
ta bort kod blocken 
````js

const booleans= [0,1,0,1,0,1,0,1,1,1,0,1];
const all0nes= numbers.filter((numbers)=>const boolean= number!===0);


`````

--------------------------------------------

````html



````

# HTML CSS och JAVA

```html
<div id="20" class="some-class"  > HERE is some content of the html element. This can be just text content or child element.</div>


````

key point:

<div></div> : har start och slut tag. 
<div>content</div>: the content inside html can be a text or elements on other words child elements.
id & class: är exemple på attributer man kan lägga till på element. 

semantics: vilka element man ska anävnda vid vilken tillfälle. tex man gör en nav istället för div för i nav navigerar man på sidan och då väljer man det istället för div. 

Allt som ska synas på sidan ska vara på BODY

aside kan man svända om man ksa ha en sido meny. 

2 av 130 elements är inte semantics och de 2 är div och span. 



## CSS

syntax: 

selector: ex h1. det är en element som man vill lägga till styling.  

declaration: {color:black;font-size:12px;}
En kollition där vi beskriver hur den targetatde selectorn ska stylas.

proprety-value: en specefik egenskap och värde som target elementet ska ha. 


margin påverkat utanför boxen. 

padding trycker in texten in i boxen. 


boxmodell:

content är i html tags.
padding: är en transparant area mellan border och content. vi kan vändra på den area .
Border: markesas slutet av boxen.
margin: den är transparant utanför boxen den kan användas att putta andra contet ifrån varandra.
 


 ## CSS specificety

 deet är ett verktyg som browser använder om vilken syling som ska appliceras. 


````css
div{
    backgrund-color:yellow;
    margin-bottom:1rem;
}

div{
    backgrund-color:blue;
}

````
koden läses uppifrån ner och därför överskrivs yellow till blå. 

en class väger mer dvs har mer specificety
därför blir den beskrivningen i class mer prioroterad. det finns 3 nivåer av prio. 0.0.0. div har 0.0.1. class har 0.1.0. och id har 1.0.0. 

deras kombination dvs div.box-class då blir det 0.1.1. och detta över skrivs och blir mer piro. 


när är det mellan "div. box-class" då väljer man att inte hela diven med den klassen ska få alla egenskaper utan bara just den specefika klassen. diven kan ha 3 klasser o man kanske vill att ena klassen ska få de egerskaepen. 



# DOM
## dokument objekt modell

1. dokument

2. Node:  hmtl element, text, comment, attribyter(class,id,src osv )

3. Element 
representerar en html element.

4.attibyet:
<div id="exemple"> id är en node attribyte.


5. text


# create HTML element:

dockument.createElement(type)=> html element

parametern " type " är vad det är vi vill skapa och det kan vara div,article,span osv.

````js
const articleEl= document.createElement("articleEL");

console.log(articleEl)

````

Detta skapare en element men man ser inte det i DOM. 

Appending to DOM 

appendChild: 



create refenreser:
querySelector(CSS selector)=> HTML element | null . den kollar om det man söker edfter finns eller null.  sök alltid efter classen för då får man rätt fakta. Det funkar för vi har en klass som heter så. 

här ledar vi efter header :

```js
const header = document.querySelector(".header");

console.log(header);

````

nu söker vi efter a tag: 


````js 

const aContant= document.querySelector("a");

console.log(aContact);


````
på det viset så får vi inte aContact utan aHome för det är den första a tagen. men om vi söker efter classen = .Contact iställer för a då får vi contant på console.log(aContact);
````js 

const aContant= document.querySelector("a.contact");

console.log(aContact);
`````

querySelectorAll: 


````js 

const aContant= document.querySelectorAll("a");

console.log(aContact);

````

Här får vi en nodelist som matchar med selectorn och det skriver ut alla a tag.det ser ut som array men den är inte det.


lopa a tagen:


````js
const aTag= document.querySelectorAll("a");
for (const a of aTags){
    console.log(a)
}

````

````js
const aTag= document.querySelectorAll("a");
aTags.forEach(a){
    console.log(a)
};

kolla din telefon bilden.
````


MANIPULATION

style: 
skillnaden mellan style och stylesheet(CSS) 
för att ändra från java i css 
````js 
const header = document.querySelector(".header");
header.style.backgrundColor="green";
header.style.color="pruple";


````


classList

```js 
const header = document.querySelector(".header");

header.classList.add("brown","container");


```






DOM innebär att man anväder js och ändrar i html och i CSS


ClassList: är en attrebyt som har en array liknande värde. den lagrar alla classer man har skapat . Det är en DOMTokenList. 

viktiga metoder som tillhör classList. det är add(), containes() och remove(). 

Allt som har ljusblå i min html är attrebyt. 

getAtrribute()
 hämtar attibuteens värde. tex om det är en bild så kan man ta fram vad det står att bilen är. 

setAttribute(attribute,newValue)=> void.
man uppdaterar värdet. man väljer attributet man vill ändra och sedan nya informationen. 

```JS
imge.setAttribute("alt""just a regular santa");

const altText = imge.getAttribute("alt");
console.log("alt", altText);

````

inserAdjecentElement(position,element)
vi måste ha parent elment alltid. 

kolla vf beforebegin och afterbegin ger en

innerHTML

vi tilllåter att skriva html när vi använder den taggen. det kan vara från en stirng till html syntax man kan skriva. 

skapa innerhtml: detta nedan är inte använtbart.
````js 
const articleAsAString= "<article> this is an article";
console.log(articleAsAString);

````
Låt oss skrtiva i main.

````js 
const articleAsAString= "<article> this is an article";
const main = document.querySelector("main");
main.innerHtml=articleAsAString;
console.log(articleAsAString);

````
detta ovan översrkiver hela main och man ksa vara försikt när man använder den. 

men om man lägger till + då plussar den main och den nya innerHTML main och ger oss den nya html tillägen. 
````js 
const articleAsAString= "<article> this is an article";
const main = document.querySelector("main");
// main.innerHtml=articleAsAString;
main.innerHtml+=articleAsAString;
console.log(articleAsAString);

````


missat 1,5 dag. 


är på lektion 21 nov. 

Event triggas igång hela tiden. Finns click,input, event. 

finns 3 sätt att skapa event. 

## submit 
Submit event används med en form-tag


## BOM

är en objekt. browser object model. 

för att komma åt BOM använder vi en global variable Wimdow. 

vi kan använda den både som implicit och explicit. 

```js
window.alert("hello"); explicit.
````


```js
alert("helllo");     Imolicit 
````


Bom
...


## Local storage

localStorege är en del av BOM och används för att lagra data i använderens webbläsare på ett enkelt sätt.

vad är localStorege? 
localStorege är en nykel-värde...


Grundläggande metoder

localStorege har enkla metoder för att sättta,läsa,uppdatera och ta bort data. 

1. spara data : setItem(key,value)

```js
const username="niklas";
const userAge=27;
const isAwsome= true;
localStorage.setItem("username",username);
localStorage.setItem("userAge",serAge);
localStorage.setItem("isAwsome",isAwsome);

````

2. hämta data: getItem(key)
```js

const username= localStorage.getItem("username");
const content=document.querySelector(".content");

const usernameHTML= `<p>${username}</p>`;
content.insertAdjacentHTML("afterbegin",usernameHTML);

```

3. ta bort en nyckel: removeItem(key)
localStorage.revomeItem("isAwsome"); 
finns det ett värde som kan hämtas via den nyckeln så kommer den att tas bort för evigt. finns det inte så händer det inget. 

4. Rensa allt : clear()

5. kontrollera alla objekt: length


Spara komplexa objekt med JSON.
eftersom localStorage endsat stöder stänger ,åste objekt seriaerlisas innan den sparas för att göra det det finns 2 metoder. 

JSON.stringify()- konventerar objekt till en sträng.

JSON.parse()- konventerar tillbaka stängen till den ursprungliga. 

Detta nedan kan inte sparas av browser för den behöver konventeras. den kan man inte spara och hämta. 

```js 
const user = {
    name: niklas;
    age: 27;
    isAwsome: ture;
}

localStorage.setItem("user", user);

```
rätt sätt 
man sätter in JSON.stringify(). 

```js 

localStorage.setItem("user", JSON.stringify(user);

```


samman sättnnnig med Parse()

```js 
const user = {
    name: niklas;
    age: 27;
    isAwsome: ture;
}

localStorage.setItem("user", JSON.stringify(user));
const userFormLS= localStorage.getItem("user");
console.log(JSON.parse(userFormLS));

```

vanliga användningsområden

1. spara användarinstälnningar 
* temafärger 
* språkval
* visningsåreferens ( listvy eller rutnätsvy)

2. session och snvändardata
* exemplevis ett användarnamn eller en annan information så länge det inte är känslig information. 

3. formulärvärden
* om en användare stänger och öppnar sidan igen kan deras ifyllda formmulärfält finnas kvar. 

4. enkel caching. spara restultatet från ett API-anrop som inte behöver anrosap så ofta. 

## säkerhet

localStorage är inte säker ställe. man ska inte lagra känsliga information där. som lösenord.


begränsningar i localStorage: 
endast stränger kan sparas där för behöver man konventera det genom JSON.stringify() och JSON.parse(). 

begränsning i storleken 5-10 mb kan tillåtas att lagas. 

same origin policy. man kan inte överföra information från oiliak doman. 

## WEB API:

FINNS MASSOR AV API. mozzila.org hemidan 
history api är för att man ska kunna gå fram och tillbaka på webben. 


det är en gränssnitt mellan din kod (JAVASCRIP) och weebläsarens egna funktioner 




## API JSON 

Vad är json? en data format. 
står för Javascript objekt notation och är en lättläst format av representea data. 

Strucktur: Json står av nyckel-värde par och är väldigt likt javascript men används för att skicak data mellan olika system.




````js
{
    "name":"John Doe",
    "age":38,
    "email":"y.m@live.se",
    "skills":"js","HTML","CSS"
}


````


Varför JSON? 
lätt att läsa 
Json fungerar oavsett vilket program som körs. 

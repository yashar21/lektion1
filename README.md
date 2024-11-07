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
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

```








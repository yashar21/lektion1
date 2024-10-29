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
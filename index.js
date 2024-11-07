// var firstName="mortaza";
// console.log(firstName);

// var firstName="henrik";
// console.log(firstName);

// var lastName;
// console.log(lastName);

// const numbers = [46,55,77,88,99,47];

// console.log(numbers[0]); // 46.

// const colors = ["red","blue","green","orange"];
// console.log([colors.at(2)]);
// console.log([colors.at(-1)]); // man börjar från slutet av listan.

// colors[2]= "brown";
// console.log(colors)

// const colors = ["red","blue","green","orange"];
// const updatedColors = colors.With(1,"pink")
// console.log(colors) 
// console.log(colors.length)
// console.log(updatedColors)

// const numbers = [1,2,3,4,5,6]
// numbers.push(7);
// numbers.push(8,9);
// const newLength= numbers.push(10);
// console.log(newLength);
// console.log(numbers);
// console.log(numbers.length);

// const cities= ["göreborg","malmö","lund"];

// cities.pop();
// console.log(cities);

// const cities= ["göreborg","malmö","lund"];

// cities.unshift("stockholm")
// console.log(cities);

// const cities= ["göreborg","malmö","lund"];
// cities.shift()
// console.log(cities);

// const numbers = [2,4,5,6,8,9];

// if(numbers.includes(7))
// {
//     console.log("number exist")
// }
// else{
//     console.log("number dosent exist")
// }


// const cities= ["göreborg","malmö","lund"];
// const  indexOfmalmö= cities.indexOf("malmö")

// console.log(cities);
// console.log(indexOfmalmö);

// const indexOfskurup=cities.indexOf("skurup");
// console.log(indexOfskurup);


// const cities= ["göreborg","malmö","lund"];
// const citiesAsString=cities.join(".");
// console.log(cities);


//////////////// LOOOPAR /////////////////

// let count=0;

// while(count<100)
//     {
//         count++;
//         // count=count+1; en annan alternative. 
//         console.log(count)
//         if(count==47){
//             console.log("the count is done");
//             break;
//         }
//     }


// const numbers = [2,5,8,6,9,23]

// for (let i = 0; numbers.length; i++);
// {
//     console.log(numbers[i]);
// }

// const numbers = [5,2,10,15,27,99];

// for (let i = numbers.length; i >= 0; i--);
// {
//     console.log(numbers[i]);
// }


















//uppgifter: 
// uppgift 1-6
// const names = ["Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo"];
// console.log(names[3])
// // svar:maradona 
// names.push("drogba")
// console.log(names)
// names.unshift("figo");
// console.log(names);
// names.pop()
// names.pop()
// console.log(names);
// names.unshift("Ronaldo")
// console.log(names);

// uppgift 7-12


// if(players.includes("messi"))
//     {   
//         console.log("Messe is found");
//     }
//     else
//     {
//         console.log("messi is missing");
//     }
// if(players.includes("Zlatan"))
//     {   
//         console.log("Zlatan är med i listan!");
//     }
//     else
//     {
//         console.log("Zlatan är inte med i listan.");
//     }


// const indexOfMaradona = players.indexOf("Maradona");
// console.log(players)
// console.log(indexOfMaradona) 
// Svar 5 då indexen börjar från 0. därför är den på 6e namnet men är i 5e indexpositinen. 
// const indexOfMessi=players.indexOf("Messi")
// console.log(indexOfMessi)
//-1 då det inte finns messi i listan.

// const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];

// const playersAsString= players.join(".")
// console.log(playersAsString)

// const playersAsString= players.join(",")
// console.log(playersAsString)


// const playersAsString= players.join("-")
// console.log(playersAsString)

// Uppgift 13-15

//  const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
// players.splice(1,2);
// players.splice(1,0,"Ronaldinho")
// console.log(players)
// const indexOfRonaldo=players.indexOf("Ronaldo")
// console.log(indexOfRonaldo);
// console.log(players)
// players.splice(3,1);
// console.log(players);

// uppfigt 16 

// const playersV2= ["R","E","F","G","H","Q","W"]

// const shortListOfPlayers= playersV2.slice(0,3);
// console.log(shortListOfPlayers);
// // man kopierar fram tills slutindex positiotnen med +1. läs läarerns 

// // #17 

// const anotherShortListOfPlayers = playersV2.slice(2)
// console.log("#17", anotherShortListOfPlayers);
// console.log("#17", playersV2);


// // #18

// const returnValue= playersV2.With(1,"mbape");
// console.log("#18",playersV2);
// console.log("#18",returnValue);








// #31  ALLLT BLEV FEL KOLLA LÄLARENS 

// const anOtherNumbers= [5,6,20,4,8];
// const index=0;
// let sum=0;

// while(){
//     const number=anOtherNumbers= [5,6,20,4,8];
//     console.log(anOtherNumbers[index])
//     sum += anOtherNumbers
//     i++;
// }



// FUNKRIONER 

// function greeting(){
//     console.log("hello There")
// }


// function greetingName(name){
//     console.log("hello " + name + "!")
// }

// function addTwoNumbers(num1,num2){
//     console.log(num1 + num2)
// }

// function addTwoNumbers(num1,num2){
//     const answer= num1 +num2;
//     console.log(`the answer is ${answer}`);
// }

// const numbers = [2,3,5,7,8,9];

// const numberDubbles= numbers.map( (number)=> 
// {
//     return number * 2;
// }
// )
// console.log(numberDubbles);


// const numberDubblesNot5 = numbers.map((number)=> {
//     if (number===5){
//         return number;
//     }
    
//     return number*2;
// });

// const volvo ={
//     make:"volvo",
//     model:"v60",
//     color:"green"
// };
// const MCD ={
//     make:"mcd",
//     model:"v60",
//     color:"green"
// };
// const BMW ={
//     make:"bmw",
//     model:"v60",
//     color:"green"
// };

// const cars=[volvo,MCD,BMW];

// const carsAllRed= cars.map((car)=> {
//     if (car.color ==="red"){
//         return car;
//     }

//     return{...car,color:"red"};
// });

// console.log(cars);
// console.log(carsAllRed);


// const numbers= [0,1,0,1,0,1,0,1,1,1,0,1];
const booleans= [0,1,0,1,0,1,0,1,1,1,0,1];
const all0nes= numbers.filter((numbers)=> number!==0);

// const all0nes= numbers.filter((numbers)=>{
//     if (numbers===0){
//         return false;
//     }
//     return true;
// });
// console.log(all0nes);



objekt
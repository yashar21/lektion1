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

function greeting(){
    console.log("hello There")
}


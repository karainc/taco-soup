var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];
for(var i =0; i < harryPotterTitles.length; i++){
    console.log('Harry Potter ' + harryPotterTitles[i]);
}
/*Loop through the grades with a for loop
If the current grade is greater than or equal to 0 and less than or equal to 69, log "You got an F" to the console.
If it's between 70 and 76, log "You got a D" to the console.
If it's between 77 and 84, log "You got a C" to the console.
If it's between 84 and 92, log "You got a B" to the console.
If it's between 93 and 100, log "You got an A" to the console.*/

var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]
for (var i = 0; i < grades.length; i++)

if (grades[i] >= 0 && grades[i] <= 69){
    console.log("You got an F");
} else if (grades[i] >= 70 && grades[i] <= 76){
    console.log("You got a D");
} else if (grades[i] >= 77 && grades[i] <= 84) {
    console.log("You got a C");
} else if (grades[i] >= 84 && grades[i] <= 92){
    console.log("You got a B");
} else if (grades[i] >= 93 && grades[i] <= 100){
    console.log("You got a A")
}
//Part 2 Students Grades//
var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]
let numberOfAs = 0;
let numberOfBs = 0;
let numberOfCs = 0;
let numberOfDs = 0;
let numberOfFs = 0;
let mostCommonGrade = "";
var total = 0;

for(i = 0; i < grades.length; i++){
    if (grades[i] >= 0 && grades[i] <= 59){
        numberOfFs++
    } else if (grades[i] >= 70 && grades[i] <= 76){
        numberOfDs++
    } else if (grades[i] >= 77 && grades[i] <= 84) {
        numberOfCs++
    } else if (grades[i] >= 84 && grades[i] <= 92){
        numberOfBs++
    } else if (grades[i] >= 93 && grades[i] <= 100){
        numberOfAs++    
    }
}
for (i = 0; i < grades.length; i++)
{
    if (mostCommonGrade < numberOfFs){
        mostCommonGrade = numberOfFs
        mostCommonGrade = "F"
    } else if (mostCommonGrade < numberOfDs){
        mostCommonGrade = numberOfDs
        mostCommonGrade = "D"
    } else if (mostCommonGrade < numberOfCs){
        mostCommonGrade = numberOfCs
        mostCommonGrade = "C"
    } else if (mostCommonGrade < numberOfBs){
        mostCommonGrade = numberOfBs
        mostCommonGrade = "B"
    } else if (mostCommonGrade < numberOfAs){
        mostCommonGrade = numberOfAs
        mostCommonGrade = "A"
    }
}

for (var i = 0; i < grades.length; i++){
    total += grades[i]
} 
let avg = total / grades.length;

console.log(`${numberOfAs} students, got As.`)
console.log(`${numberOfBs} students, got Bs.`)
console.log(" A B was the most common grade.")
console.log(`${avg} percent, was the average grade in the class.`)

/*Two, Four, Six, Eight - Who do we appreciate?! CHEER
Write a loop that counts by 2's and creates the following output.*/

const numbers = ["2,4,6,8"];
console.log(`${numbers} "Who do we appreciate?!`)


/*Interrupting Cow
Write a loop that builds sentenceArray into a real sentence, except every fourth word should be "MOOOOOO". Hint: look up the modulus operator.
Run your sentence to the terminal.*/

var sentenceArray = ["the ", "cow ", "danced ", "through ", "the ", "trees ", "in ", "the ", "light ", "of ", "the ", "moon"];
let sentence = '';
let moo = "MOOOOO ";

for (var j = 0; j < sentenceArray.length; j++){
    if ((j + 1) % 3 === 1 && (j !=0)){
        sentence += moo;
    } sentence += `${sentenceArray[j]}`
}
console.log(sentence)

/*The Beatles Output: ${name} was in the Beatles from ${year} to ${year}.
 He was born in ${year}. He contributed heavily to the ${albumName} Album.*/

 const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}
console.log(`John Lennon was in the Beatles from 1960 to 1069.
He was born in 1940. He contributed heavily to the ${beatles.albums[0]} album.`)





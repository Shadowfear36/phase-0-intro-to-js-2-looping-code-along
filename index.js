// Code your solutions in this file
const names = []; 

function writeCards(array, event) {
    const newNames = [...names]

    for (let i = 0; i < array.length; i++) {
        newNames.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`)
    }
    return newNames;
}

function countDown(num){
    while (num >= 0) {
        console.log(num)
        num--;
    }
};
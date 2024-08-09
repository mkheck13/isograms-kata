// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. 
// Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)




// need to set the length of the string
// do an if else statement that states if the string is empty then its true
// make a statement that makes the chars lowercase
// do the same but split the string, possible to make them together
// make a for loop to iterate thru the array of chars
// 
function isIsogram(str){
    let word = str.length;

    if(word == 0){
        return true;
    }else{
        let wordLow =str.toLowerCase().split("");
        for(let i = 0; i < word; i++){
            let wordCheck = wordLow[i];
            let wordCount = wordLow.reduce(function(n, val){
                return n + (val === wordCheck);
            }, 0);

            if(wordCount > 1){
                return false;
            }
        }
        return true;
    }
}

// ok so I saw some other ones that aren't as big as mine
// so new things for me to look at: new   Set()   size
// need to look into how those work
function isIsogram(str){
    return new Set(str.toLowerCase()).size == str.length;
}


// or this one that just checks with .match()

function isIsogram(str){
    return !str.match(/([a-z]).*\1/i);
}
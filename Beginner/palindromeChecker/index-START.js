/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/


function palindromeChecker(text) {
   
    let charArray = text.toLowerCase().split('')

    let result = charArray.every((letter, index)=>{
        
        //if the index is below half way
        if(index < charArray.length/2){
            return true;
        }
        //if the first letter is same with last and so on 
        return letter === charArray[charArray.length - 1 - index]
    })
    
   return result
}



module.exports = palindromeChecker;
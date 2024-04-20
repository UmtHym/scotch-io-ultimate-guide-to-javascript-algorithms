/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function longestWord(text) {

    var sortedArray = text.split(' ')
                            .sort((wordA, wordB)=> wordB.length - wordA.length )
    return sortedArray[0]
}


module.exports = longestWord
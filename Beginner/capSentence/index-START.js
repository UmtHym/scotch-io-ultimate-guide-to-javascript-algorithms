/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/



function capSentence(text) {
  let wordsArray = text.toLowerCase().split(' ')
  
  let capsArray = wordsArray.map( word=>{
    return  word.replace(word[0], word[0].toUpperCase())
  })

  return capsArray.join(' ')
}
module.exports = capSentence
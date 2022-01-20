import { readFileSync } from 'fs'

function readText(pathFile){
    const data = readFileSync(pathFile, 'utf8')
    return data
}
function replaceText(replaceWord, newWord, pathFile){
    const file = readText(pathFile)
    let regexWord = new RegExp(replaceWord, 'g')
    const replaceText = file.replace(regexWord, newWord)
    return replaceText
}

function countWord(word, pathFile){
    const file = readText(pathFile)
    let regexWord = new RegExp(word, 'g')
    var arrayWord = file.match(regexWord)
    const size = arrayWord.length
    return size
}

export { readText, replaceText, countWord }; 


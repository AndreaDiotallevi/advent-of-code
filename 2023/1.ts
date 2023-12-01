import * as fs from 'fs'

function csvFileToArray() {
    const csvContent = fs.readFileSync('2023/1-input.csv', 'utf8')
    const lines = csvContent.split('\n')
    const dataArray: string[] = []

    for (const line of lines) {
        const value = line.trim()
        dataArray.push(value)
    }
    return dataArray
}

function replaceNums(inputString: string): string {
    return inputString
        .replace(/one/g, 'one1one')
        .replace(/two/g, 'two2two')
        .replace(/three/g, 'three3three')
        .replace(/four/g, 'four4four')
        .replace(/five/g, 'five5five')
        .replace(/six/g, 'six6six')
        .replace(/seven/g, 'seven7seven')
        .replace(/eight/g, 'eight8eight')
        .replace(/nine/g, 'nine9nine')
}

const removeChars = (str: string) => {
    return str.replace(/[^0-9]/g, '')
}

const onlyFirstAndLast = (str: string) => {
    return str.charAt(0) + str.charAt(str.length - 1)
}

const parseToInt = (str: string) => {
    return parseInt(str.charAt(0) + str.charAt(str.length - 1))
}

function sumOfArrayElements(numbers: number[]): number {
    return numbers.reduce((sum, current) => sum + current, 0)
}

const values = csvFileToArray().filter((item) => item.length > 1)

const integers = values
    .map((value) => replaceNums(value))
    .map((value) => removeChars(value))
    .map((value) => onlyFirstAndLast(value))
    .map((value) => parseToInt(value))

console.log(sumOfArrayElements(integers))

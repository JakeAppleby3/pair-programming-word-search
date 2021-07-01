const transpose = function (matrix) {
    let output = [];
    let lengthOfRows = matrix[0].length;
    let lengthOfCols = matrix.length;
    for (let firstCounter = 0; firstCounter < lengthOfRows; firstCounter++) {
        let rowArray = [];
        for (let secondCounter = 0; secondCounter < lengthOfCols; secondCounter++) {
            rowArray.push(matrix[secondCounter][firstCounter]);
        }
        output.push(rowArray);
    }
    return output;
};
const wordSearch = (letters, word) => {
    // first check if matrix is empty
    if (letters.length === 0 || word === '') {
        return undefined;
    }
    const processedWord = word.toUpperCase().trim();
    // do a search of rows - as is
    const horizontalJoin = letters.map((ls) => ls.join(''));
    for (l of horizontalJoin) {
        if (l.includes(processedWord)) {
            return true;
        }
    }
    // do a search of the col's by first transposing matrix then searchin
    const verticalJoin = transpose(letters).map((ls) => ls.join(''));
    for (l of verticalJoin) {
        if (l.includes(processedWord)) {
            return true;
        }
    }
    return false;
};
module.exports = wordSearch;
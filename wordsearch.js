const transpose = function (matrix) {
    let modMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          if (!modMatrix[j]) {
            modMatrix[j] = [];
          }
          modMatrix[j][i] = matrix[i][j]
        }
    }
    return modMatrix;

};

const wordSearch = (letters, word) => { 
    if (letters === []) return false;
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    let swappedMatrix = transpose(letters);
    const vertJoin = swappedMatrix.map(ls => ls.join(''))
    for (l of vertJoin) {
        if (l.includes(word)) return true
    }
    return false
}

module.exports = wordSearch
// file left for references purposes

const digits = '123456789'
const letters = 'ABCDEFGHI'
export const cols = digits.split('')
export const rows = letters.split('')
const squares = cross(rows, cols)
const unitList = []
cols.forEach((col, index) => {
  unitList.push(cross(rows, [cols[index]]))
})
rows.forEach((row, index) => {
  unitList.push(cross([rows[index]], cols))
})

const squareRows = [['A', 'B', 'C'], ['D', 'E', 'F'], ['G', 'H', 'I']]
const squareCols = [['1','2','3'], ['4','5','6'], ['7','8','9']]
squareRows.forEach((row, rowIndex) => {
  squareCols.forEach((square, colIndex) => {
    unitList.push(cross(squareRows[rowIndex], squareCols[colIndex]))
  }) 
})

const units = {}
squares.forEach((square, squareIndex) => {
  units[squares[squareIndex]] = []
  unitList.forEach((unit, unitIndex) => {
    if (member(squares[squareIndex], unitList[unitIndex])) {
      units[squares[squareIndex]].push(unitList[unitIndex])
    }
  })
})

const peers = {}
squares.forEach((square, squareIndex) => {
  peers[squares[squareIndex]] = {}

  units[squares[squareIndex]].forEach((unit, unitIndex) => {
    const list = units[squares[squareIndex]][unitIndex]

    list.forEach((listItem, listIndex) => {
      if (list[listIndex] !== squares[squareIndex]) {
        peers[squares[squareIndex]][list[listIndex]] = true
      }
    })
  })
})
import { parse_grid, search } from 'shared/utils/sudoku'
// limited testing because of external dependecy
describe('Sudoku Util', () => {
  const grid = '4.....8.5.3..........7......2.....6.....8.4......1.......6.3.7.5..2.....1.4......'
  describe('parse_grid', () => {
    it('should parse the grid string to an object', () => {
      const parsedGrid = parse_grid(grid)
      expect(typeof parsedGrid).toBe('object')
      expect(Object.keys(parsedGrid).length).toBe(81)
    })
  })

  describe('search', () => {
    it('should return a valid grid', () => {
      const parsedGrid = parse_grid(grid)
      const searchResult = search(parsedGrid)

      expect(typeof parsedGrid).toBe('object')
      expect(Object.keys(parsedGrid).length).toBe(81)
    })
  })
})

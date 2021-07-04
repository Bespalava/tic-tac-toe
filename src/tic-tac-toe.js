class TicTacToe {
    constructor() {
            this.player = 'x'
            this.winner = null
            this.field = []
        
            for (let i = 0; i < 3; i++) {
              this.field[i] = []
              for (let j = 0; j < 3; j++) {
                this.field[i][j] = null
              }
    }
  }

    getCurrentPlayerSymbol() {
        return this.player
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] === null) {
            this.field[rowIndex][columnIndex] = this.player
            this.player = (this.player === 'x' ? 'o' : 'x')
            return true
          }
          return false

    }


    win() {
      if (this.field[0][0] === this.field[1][1] && this.field[0][0] === this.field[2][2]) {
        return this.field[0][0]
      }
  
      if (this.field[0][2] === this.field[1][1] && this.field[0][2] === this.field[2][0]) {
        return this.field[0][2]
      }
  
      for (let i = 0; i < 3; i++) {
        if (this.field[i][0] === this.field[i][1] && this.field[i][0] === this.field[i][2]) {
          return this.field[i][0]
        }
      }
  
      for (let i = 0; i < 3; i++) {
        if (this.field[0][i] === this.field[1][i] && this.field[0][i] === this.field[2][i]) {
          return this.field[0][i]
        }
      }
      return null
    }

    isFinished() {
        this.winner = this.win()
        return !!(this.isDraw() || this.winner !== null);
    }

    getWinner() {
        this.winner = this.win()
        return this.winner
    }

    noMoreTurns() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
              if (this.field[i][j] === null) {
                return false
              }
            }
          }
          return true
    }

    isDraw() {
        this.winner = this.win()
    return this.noMoreTurns() && this.winner === null
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex]
    }
}

module.exports = TicTacToe;

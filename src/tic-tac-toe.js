class TicTacToe {
    constructor() {
        this.current_player_symbol = 'x';
        this.game_field = [[null,null,null], [null,null,null], [null, null, null]];

    }

    getCurrentPlayerSymbol() {
        return this.current_player_symbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.game_field[rowIndex][columnIndex] === null) {
            this.game_field[rowIndex][columnIndex] = this.current_player_symbol;
            this.current_player_symbol = (this.current_player_symbol === 'x') ? 'o' : 'x';
        }
    }

    isFinished() {
        if( this.getWinner() !== null || this.noMoreTurns() == true){
            return true;
        }
        return false;
    }

    getWinner() {
        var rowIndex = 0;
        while(rowIndex <= 2){
            if(this.game_field[rowIndex][0] === this.game_field[rowIndex][1] && this.game_field[rowIndex][0] === this.game_field[rowIndex][2] && this.game_field[rowIndex][0] !== null){
                return this.game_field[rowIndex][0];
            }
            rowIndex++;
        }
        var colIndex = 0;
        while(colIndex <= 2){
            if(this.game_field[0][colIndex] === this.game_field[1][colIndex] && this.game_field[0][colIndex] === this.game_field[2][colIndex] && this.game_field[0][colIndex] !== null){
                return this.game_field[0][colIndex];
            }
            colIndex++;
        }
        if(this.game_field[0][0] === this.game_field[1][1] && this.game_field[0][0] === this.game_field[2][2] && this.game_field[0][0] !== null){
            return this.game_field[0][0];
        }
        else if(this.game_field[0][2] === this.game_field[1][1] && this.game_field[0][2] === this.game_field[2][0] && this.game_field[0][2] !== null){
            return this.game_field[0][2];
        }
        else {
            return null;
        }
    }

    noMoreTurns() {
        var rowIndex = 0;
        while(rowIndex <= 2){
            var colIndex = 0;
            while(colIndex <= 2){
                if(this.game_field[rowIndex][colIndex] !== null){
                    colIndex++;
                }
                else {
                    return false;
                }
            }
        rowIndex++;
        }
        return true;

    }

    isDraw() {
        if( this.getWinner() === null && this.noMoreTurns() === true){
            return true;
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        if(typeof this.game_field[rowIndex][colIndex] === 'undefined') {
            return null;
        } else {
            return this.game_field[rowIndex][colIndex];
        }
    }
}

module.exports = TicTacToe;

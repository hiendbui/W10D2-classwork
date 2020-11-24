import React from 'react';
import * as Minesweeper from './minesweeper.js';
import Board from './board';

class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = { board: new Minesweeper.Board(9, 10)};
        this.updateGame = this.updateGame.bind(this);
        this.restartGame = this.restartGame.bind(this);
    }

    updateGame(tile, flag){
        if (flag) {
            tile.toggleFlag();
        } else {
            tile.explore();
        };

        this.setState({board: this.state.board});
    }

    restartGame() {
        const board = new Minesweeper.Board(9, 10);
        this.setState({board: board})
    }

    render(){
        return(
            <div>
                <h1>Mine Sweeper</h1>
                <Board board = {this.state.board} updateGame = {this.updateGame}/>
            </div>
        )
    }
}

export default Game;
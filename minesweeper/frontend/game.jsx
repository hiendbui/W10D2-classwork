import React from 'react';
import * as Minesweeper from './minesweeper.js';
import Board from './board';

class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = { board: new Minesweeper.Board(9, 10)};
        this.updateGame = this.updateGame.bind(this);
    }

    updateGame(){

    }

    render(){
        return(
            <div>
                <h1>Game</h1>
                <Board board = {this.state.board} update = {this.updateGame}/>
            </div>
        )
    }
}

export default Game;
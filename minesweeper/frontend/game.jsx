import React from 'react';
import * as Minesweeper from './minesweeper.js';
import Board from './board';

class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = { board: new Minesweeper.Board(9, 10)};
        this.updateGame = this.updateGame.bind(this);
        this.restartGame = this.restartGame.bind(this);
        this.popUp = this.popUp.bind(this)
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

    popUp() {
        if (this.state.board.won() || this.state.board.lost()) {
        const text = this.state.board.won() ? "You Won!" : "You Lost!";
        return (
        <div className="screen">
            <div className="popup"> 
                <p>{text}</p>
                <button onClick={this.restartGame}>Play Again</button>
            </div>
        </div>
        )}
    }   
    
    render(){
        return(
            <div>
                <h1 className="title">Mine Sweeper</h1>
                {this.popUp()}
                <Board board = {this.state.board} updateGame = {this.updateGame}/>
            </div>
        )
    }
}

export default Game;
import React from 'react';
import Tile from './tile';

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.rows = this.rows.bind(this);
        this.tiles = this.tiles.bind(this);
    }

    render() {
        return (
        <div>
            <h1>Board</h1>
            {this.rows()}
        </div>    
        )
    }

    rows() {
        const board = this.props.board;
        board.grid.map((row, idx) => {
            return (
                <div key={idx}>
                    {this.tiles(row,idx)}
                </div>
            )
        })
    }

    tiles(row,idx) {
        const board = this.props.board;
        row.map((tile) => {
            return (
                <ul key={idx}>
                    <Tile tile={tile} updateGame={this.props.updateGame}/>
                </ul>
            )
        })
    }
}


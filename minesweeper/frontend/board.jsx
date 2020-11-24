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
            {this.rows()}
        </div>    
        )
    }

    rows() {
        const board = this.props.board;
        return board.grid.map((row, idx) => {
            return (
                <div className='row' key={idx}>
                    {this.tiles(row,idx)}
                </div>
            )
        })
    }

    tiles(row,idx) {
        const board = this.props.board;
        return row.map((tile, j) => {
                return (
                    <Tile tile={tile} updateGame={this.props.updateGame} key={j + idx} />
                )
                })
    }
}


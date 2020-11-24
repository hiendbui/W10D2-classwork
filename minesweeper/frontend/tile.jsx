import React from 'react';

class Tile extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        debugger;
    //    const revealed =  this.state.key ?  : false
       this.props.updateGame(this.props.Tile, revealed); 
    }

    render() { 
        return (
            <div>
                <h1>tile</h1>
                <button onClick={this.handleClick}>tile</button>
            </div>
          );
    }
}
 
export default Tile;
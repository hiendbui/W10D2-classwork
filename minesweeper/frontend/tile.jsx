import React from 'react';

class Tile extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
       const flag =  e.altKey ?  true : false;
       this.props.updateGame(this.props.tile, flag); 
    }

    render() { 
        
        const tile = this.props.tile;
        const bombCount = tile.adjacentBombCount();
        let icon;
        if(tile.explored){
            icon = tile.bombed ? "💣" : bombCount > 0 ? bombCount : ""
        } else if (tile.flagged) {
            icon = "🚩";
        } else {
            icon = "‎‏‏‎‎";
        }
    
        return (
            <div className={tile.explored ? 'tile-clicked' : 'tile-unclicked'} onClick={this.handleClick}>
                {icon}
            </div>
          );
    }
}
 
export default Tile;
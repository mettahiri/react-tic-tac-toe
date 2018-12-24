import React, { Component } from 'react';
import Cells from "./Cells"
class Ligne extends Component {
    state = {  }
    render() { 
        const CELLS = this.props.cells.map(c => <Cells key={c} 
                                                       changeVal= {this.props.changeVal}
                                                /> )
        return ( 
            <tr>
                {CELLS}
            </tr>
         );
    }
}
 
export default Ligne;
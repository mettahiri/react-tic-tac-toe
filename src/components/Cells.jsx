import React, { Component } from 'react';
class Cells extends Component {
    state = {  }
    render() { 
        return ( 
            <td  onClick={this.props.changeVal}>
            </td>
         );
    }
}
 
export default Cells;
import React, { Component } from 'react';
import Line from "./Ligne"
import  "font-awesome/css/font-awesome.css";

import "animate.css"

class TicTacToe extends Component {
    state = { 
        numberOfCells : 3,
        cells : [],
        onToggle : false,
        style : {},
        partie :0,
        winnerIs:""
     }
     
     changeVal = (e)=>{
        const NB_CELLS =  this.state.numberOfCells;
        let td = document.querySelectorAll("td");
        if(this.state.onToggle === false){
            if(e.target.innerHTML !== "o" ) {
                if(e.target.innerHTML === "x"){
                    this.setState({ partie : this.state.partie ,onToggle : false   });
                } else {
                    this.setState({ partie : this.state.partie +1,onToggle : true    });
                    e.target.innerHTML ="x";
                    e.target.style = "color : #555";
                }
            }
        } else {
            if(e.target.innerHTML !== "x") {
                if(e.target.innerHTML === "o"){
                    this.setState({ partie : this.state.partie ,onToggle : true   });
                } else {
                    this.setState({ partie : this.state.partie +1,onToggle : false    });
                    e.target.innerHTML ="o";
                    e.target.style = "color : darkred"
                }
            } 
        }
        
        if(this.state.partie === (NB_CELLS ** 2) -1 || this.winner(td)){
            this.setState({ style : {animation : 'jello .5s'} });
            setTimeout(()=>{
                this.setState({ style : {animation : 'tada 1s'}});
                td.forEach(cells => cells.innerHTML="");
                this.setState({ partie :0, winnerIs :""  });
            },2000 )
        }
     }
     winner = (td)=>{
         let winnerIs="";
        // ROW
            if(td[0].innerHTML !=="" && td[0].innerHTML === td[1].innerHTML && td[0].innerHTML === td[2].innerHTML ){
                winnerIs = td[0].innerHTML;
            }else
            if(td[3].innerHTML !=="" && td[3].innerHTML === td[4].innerHTML && td[3].innerHTML === td[5].innerHTML ){
                winnerIs = td[3].innerHTML; 
            }else
            if(td[6].innerHTML !=="" && td[6].innerHTML === td[7].innerHTML && td[6].innerHTML === td[8].innerHTML ){
                winnerIs = td[6].innerHTML; 
            }
        // COLUMN
            if(td[0].innerHTML !=="" && td[0].innerHTML === td[3].innerHTML && td[0].innerHTML === td[6].innerHTML ){
                winnerIs = td[0].innerHTML; 
            }else
            if(td[1].innerHTML !=="" && td[1].innerHTML === td[4].innerHTML && td[1].innerHTML === td[7].innerHTML ){
                winnerIs = td[1].innerHTML; 
            }else
            if(td[2].innerHTML !=="" && td[2].innerHTML === td[5].innerHTML && td[2].innerHTML === td[8].innerHTML ){
                winnerIs = td[2].innerHTML; 
            }
        // DIAGONALE
            if(td[0].innerHTML !=="" && td[0].innerHTML === td[4].innerHTML && td[0].innerHTML === td[8].innerHTML ){
                winnerIs = td[0].innerHTML; 
            }else
            if(td[2].innerHTML !=="" && td[2].innerHTML === td[4].innerHTML && td[2].innerHTML === td[6].innerHTML ){
                winnerIs = td[2].innerHTML; 
            }

            if(winnerIs){
                this.setState({ winnerIs: winnerIs  });
                return true;
            }
     }
  
     componentWillMount(){
         let cells=[]
         for(let i=0; i<this.state.numberOfCells;i++){
           cells.push(i);
         }
         this.setState({ cells : cells  });
    }

    render() { 
        const JX = this.state.onToggle === false ? 
        <strong style={{color:"#555"}} >X</strong> : 
        <strong style={{color:"darkred"}} >o</strong>; 

        const CELLS = this.state.cells;
        const LIGNE = CELLS.map(ligne => (
                                        <Line 
                                        key={ligne}
                                        cells={this.state.cells}
                                        changeVal= {this.changeVal}
                                        />
                                 ));
        return ( 

            <>
                <h1>{JX} à toi de jouer </h1>
                <table style={this.state.style} >
                        <tbody>
                        {LIGNE}
                        </tbody>
                </table>
                 <h1>{this.state.winnerIs && `Bien jouer : ${this.state.winnerIs} !!` }</h1> 
            </>
            
         );
    }
}
 
export default TicTacToe;
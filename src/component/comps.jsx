import React, { Component } from 'react';
import Event from './event';
class Comps extends Component {
    state = {

        com : [
            
                {id: 1 ,value :4},
                {id: 2 ,value :4},
                {id: 3 ,value :4},
                {id: 4 ,value :4}
                
            
        ]
      }
    render() { 
        return (
            <div>

         {this.state.com.map(com =><Event key={com.id} value={com.value} Selected={true}>
         
         <h4> Comps #{com.id}</h4>
         
         </Event>)}
         
         





            </div>

          );
    }
}
 
export default Comps;

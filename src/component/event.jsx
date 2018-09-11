import React, { Component } from 'react';

class Event extends Component {
    state = { 

        count :0
     }

     increment()
     {
         this.setState({count : this.state.count +1});
     }

     
     constructor()
     {
         super();
     this.increment = this.increment.bind(this);
     }
    render() { 
        return ( 
         

<div>

    {this.props.children}
<span class ="badge m-2 badge-warning">{this.state.count}</span>
<button className="btn-success" onClick={this.increment}> CLICK HERE </button>
<button className="btn-danger  ">DELETE</button>



</div>
         );
    }
}
 
export default Event;
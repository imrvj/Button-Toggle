import React, { Component } from 'react';

class Comp extends Component {
    state ={
        count:1,
        tags:['tag1','tag2','tag3']
    
        
    }

    increment()
    {
        this.setState({count : this.state.count + 1});
    }
    render() {
        console.log('prop',this.props);
        
        
        let classes="badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return (
<div>
<div class="main">
<h1>Hello World</h1>
</div>

<span className={classes}>{this.state.count}</span>
   <button onClick={this.increment} className="btn btn-secondary btn-sm" onClick="fun()">Increment</button>
   <ul>
       {this.state.tags.map(tag=><li>key={tag}{tag}</li>)}
   </ul>

</div>





          );
    }
}
 
export default Comp;



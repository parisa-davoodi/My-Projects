import React from 'react';

export default class TodoListVersion2 extends React.Component{
    constructor(props) {
        super(props);

    	this.state = {
      		message: '',
      		names: []
    	};

     	this.handleChange = this.handleChange.bind(this);
     	this.addBtnClicked = this.addBtnClicked.bind(this);
     	this.closeBtnClicked = this.closeBtnClicked.bind(this);
    }

    handleChange(event) {
   		this.setState({message: event.target.value});
    }

    addBtnClicked() {
    	this.setState({names: this.state.names.concat(this.state.message)});
    }

    closeBtnClicked(i) {
	    for(let j = 0; j < this.state.names.length; j++) {
	      if(i === j) {
	        var array = [...this.state.names]; 
	        array.splice(j,1);
	        this.setState({names: array});
	      }
	    }
    }

	render() {
    	return (
    		<div>
    			<h1>Class Component Todo List</h1>
		      	<span>inset a text to add</span>
		      	<input type="text" value={this.state.message} id="this.state.message" onChange={this.handleChange}/>
		      	<button onClick={this.addBtnClicked}>add</button>
		      	<div>{this.state.names.map((n,i) => 
		        	<div key={i}>
		        	{n}
		        	<button style={{color: "red", backgroundColor: "lightblue"}} onClick= {() => this.closeBtnClicked(i)}>x</button>
		        	</div>
		       		)}
		       </div>
    		</div>
    	);
  	}
}
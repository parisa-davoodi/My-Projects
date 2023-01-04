import '../App.css';
import {useState} from 'react';
import '../index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

function TodoListVersion1() {
  const [message, setMessage] = useState('');
  const [names, setNames] = useState([]);


  const handleChange = event => {
    setMessage(event.target.value);
  };

  const addBtnClicked = () => {
    setNames(current => [...current, message]);
  };

  const closeBtnClicked = (i) => {
    for(let j = 0; j < names.length; j++) {
      if(i === j) {
        var array = [...names]; 
        array.splice(j,1);
        setNames(array);
      }
    }
  }


  return (
    <div>
    	<h1>Function Component Todo List</h1>
      	<span>inset a text to add</span>
     	 <input value={message} id="message" onChange={handleChange}/>
      	<button onClick={addBtnClicked}>add</button>
      	<div>{names.map((n,i) => 
       		<div key={i}>
        		{n}
        		<button style={{color: "red", backgroundColor: "lightblue"}} onClick= {() => closeBtnClicked(i)}>x</button>
        	</div>
       )}
       </div>
    </div>
  );
}

export default TodoListVersion1;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TodoListVersion1 />); 
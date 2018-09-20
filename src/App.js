import React, { Component } from 'react';

export default class App extends Component {
        constructor() {
          super();
          this.state={value:'',arr:["task1","task2","task3"]};
        }
        handleChange1(event) {
		      this.setState({value: event.target.value});

	      }
       remove(event){
        this.state.arr.splice(event.target.id,1);
        this.setState({arr:this.state.arr});
       }
       add(event){
         if(this.state.value!==''){
        this.state.arr.push(this.state.value);
        this.setState({arr:this.state.arr});
        this.setState({value:''});
       }
        event.preventDefault();
       }

      render() {
        const list=this.state.arr.map((items,index)=>{
          return <div id="listitem" >
          <p>
           <li key={index} className="li {(this.state.class_name) ? 'under' : ''}">{items}</li>
  
           <div id={index} className="del" onClick={this.remove.bind(this)}></div>
           </p>
           </div>;
        });
        return <div id="div">
          <h1>To Do:</h1>
          <ul>{list}</ul>
          <form onSubmit={this.add.bind(this)}>
            <div id="form">
                    <span className="txt">Task</span>
                     <input
                        className="inputtxt"
                        value={this.state.value}
                        onChange={this.handleChange1.bind(this)}
                      />
                    <div><button id="btn">Save Item</button></div>
              </div>
          </form>
        </div>;
      }
}

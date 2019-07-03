import React,{Component} from 'react'

class IndecisionApp extends React.Component {
    render() {
      const title = 'Indecision'
      const subtitle ='Put your life in the hands of a computer'
      const option = ['one', 'two', 'three', 'four', 'five']
      return (
        <div>
          <Header title={title} subtitle={subtitle}/>
          <Action />
          <Options option={option}/>
          <AddOption />
        </div>
      );
    }
  }
  
  class Header extends Component {
    render() {
      return (
        <div>
          <h1>{this.props.title}</h1>
          <h2>{this.props.subtitle}</h2>
        </div>
      );
    }
  }
  
  class Action extends Component {
    handlePick(){
      alert('handlePick')
    }
    render() {
      return (
        <div>
          <button onClick ={this.handlePick}>What should I do?</button>
        </div>
      );
    }
  }
  
  class Options extends Component {
    constructor(props){
      super(props);
      this.handleRemoveAll=this.handleRemoveAll.bind(this);
    }
    handleRemoveAll(){
      alert('handleRemoveAll')
    }
    render() {
      return (
        <div>
          {this.props.option.map((option) =>
             <Option key={option} optionText={option}/> )}
             <button onClick={this.handleRemoveAll}>Remove All</button> 
        </div>
      );
    }
  }   
  
  class Option extends Component {
    render() {
      return (
        <div>
         {
               this.props.optionText
         }
        </div>
      );
    }
  }
  
  class AddOption extends Component {
    handleAddOption(e){
    e.preventDefault();
    
    const option = e.target.elements.option.value.trim();
    if(option){
      alert('handleAddOption')
    }
    }
    render() {
      return (
        <div>
          <form onSubmit= {this.handleAddOption}>
            <input text ='text' name ='option'></input>
            <button>Addoption</button>
          </form>
        </div>
      );
    }
  }
  
  const Jsx =(
    <div>
      <Header/>
      <Action/>
      <Option/>
      <AddOption/>

      </div>
  )
 export default IndecisionApp;
  
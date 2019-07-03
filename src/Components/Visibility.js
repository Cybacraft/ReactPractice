import React, {Component} from 'react'
import './Visibility.css'

class Visibility extends Component{
    constructor(props){
        super(props)
        this.handleToggleVisibility=this.handleToggleVisibility.bind(this)
    this.state ={
            visibility: false
        }
     }
    handleToggleVisibility(){
    this.setState((prevState)=>{
        return{
        visibility: !prevState.visibility
        }
    })

    }
   render(){
    return(
        <div className='visibility'>
         <h2>VisibilityToggle</h2>
         <button onClick ={this.handleToggleVisibility}>
         {this.state.visibility ? 'Hide' : 'show details' } 
         </button>
         { this.state.visibility && (
             <div>
                 <p>Do you know what time it is?</p>
             </div>
         )}

        </div>
       )
   }

};

export default Visibility;

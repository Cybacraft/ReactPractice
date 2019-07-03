import React, {Component} from 'react'
import B from './B'



class A extends Component {
    constructor(){
        super()
        this.state = {
            cars: ['BMW','Benz','Honda']
        }
    }
    render(){
        const name = 'dennis'
        const title ='new let it rain'
        return(
            <div>
        <Header msg ='very cool' coolex = {this.state.cars}/>
            <h1>Welcome to my A </h1> 
            <Footer fool ={title}/>
            <DesignFooter title = {title}/>
            <B name='dennis'/>
            </div>

        )
    }
}



class Header extends Component {
    constructor(){
        super()
        this.yourName = 'daniel'
        this.state ={}
    }

sayhello(work){
    return "love" + work;
}

    render(){
        const name = 'yes'
        const yes = ()=>{
          
        }
        return(
            <div className='Header'>
            <h2>My header{this.yourName} </h2>
            <p>{this.props.msg}</p>
            <div>{this.props.coolex.map((item, i)=> {
                return <p key ={i}>{item}</p>
            })}</div> 
            <B />
            </div>

        )
    }
}
class Footer extends Component {
    render(){
        return(
            <div className='Footer'>
            <h2>My footer{this.props.fool} </h2> 
            <DesignFooter let='footSide'/>
            </div>

        )
    }
}

class DesignFooter extends Component {
    render(){
    return(
        <div>
            Let footer be green and white.
            {this.props.let}
        <style likes ='kill'></style>
        <h2></h2>
        </div>
    )
    }
}

export default A;

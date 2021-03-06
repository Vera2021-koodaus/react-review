import React from 'react' ;

class ToggleApp extends React.Component{

    constructor(props){
        super(props);
        // this.handleToggle=this.handleToggle.bind(this)
        this.state={
            visibility:false
        }
    }



    handleToggle=()=>{
        this.setState(
            {visibility:!this.state.visibility}
        )
        
       
    }

    render(){
        return(
            <div>
                <h1>Toggle App</h1>
                <button 
                className='addbtn'
                onClick={this.handleToggle}>{this.state.visibility? 'Hide Details': 'Show Details'}</button>
                {this.state.visibility &&  <p>  
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>}
            </div>
        )
    }

}

export default ToggleApp;
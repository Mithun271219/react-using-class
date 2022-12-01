import React from "react";

class Git extends React.Component{
    render(){
        return(
            // automatically props (properties ) will be assigned.
            <div>
              <p>{this.props.id}</p>  
              <p>{this.props.name}</p>
              <p>{this.props.age}</p>          
            </div>
        )
    }
}
export default Git;

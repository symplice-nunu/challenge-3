import React, { Component }  from 'react';
class Result extends Component {
   
    render() { 
        return (
            this.props.mycharacter.length!==1?this.props.mycharacter.map
            (res=>(<div className="innercontainer"><h3>{res.title}</h3> 
            <img src={res.thumbnailUrl} /></div>)):<h3>"No Album found"</h3> );
    }
}
 
export default Result;
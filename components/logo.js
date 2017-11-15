import React,{Component} from 'react';
require('./logo.less');

class logo extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className='components-logo'>
                <img src="./static/images/logo.png"width='40'className='-col-auto'/>
                <h1 className='caption'>Music Player Bulid By React</h1>
            </div>
        );
    }

}
export default logo;
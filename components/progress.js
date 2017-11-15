import React,{Component} from 'react';
require('./progress.less');

class Progress extends Component{
    constructor(){
        super();
        }
        componentDidMount() {console.log(this.props.progress);}
        changeProgress(e){
            let progressBar=this.refs.progressBar;  
            console.log(e.clientX)
            let progress=(e.clientX-progressBar.getBoundingClientRect().left)/progressBar.clientWidth;
            // this.props.onProgressChange && this.props.onProgressChange(progress);
            if(this.props.onProgressChange){
                // console.log(progress);
                this.props.onProgressChange(progress);
            }
        }
        render(){
                // let progress= `${this.props.progress}%`;
                // console.log(progress);
                return(
                    <div className='components-progress'ref='progressBar'onClick={this.changeProgress.bind(this)}>
                        <div className='progress'style={{width: `${this.props.progress}%`,background:'red'}}></div>
                    </div>
                );

        }
}
export default Progress;
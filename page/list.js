import React,{Component} from 'react';
import {MUSIC_LIST} from '../config/config.js';
import ListItem from'../components/listItem.js'

class List extends Component{
    constructor(){
        super();
    }
    render(){
        // console.log(this.props.currentMusicItem);
        let Items=this.props.musiclist.map((item) => {
            return(
                <ListItem key={item.id}data={item}focus={this.props.currentMusicItem===item}>

                </ListItem>
            )
        });
        return(
            <ul>{Items}</ul>
        )
    }
}
export default List;
import React,{Component} from 'react';
import Item from './Item';
import {connect} from 'react-redux';

const mapStateToProps = (state)=>{
    return {items:state.cartReducer};
}

class List extends Component {
    render(){
        const {items} = this.props;
        console.log(items);
        return(
            <div className='container text-center'>
                {
                    items?<ul style={{listStyle:'none'}}>
                            {items.map((item,index)=>
                                <Item key={index} item={item} index={index}/>
                            )}
                        </ul>:
                        'Empty list'
                }
            </div>
        )
    }
}
export default connect(mapStateToProps)(List);
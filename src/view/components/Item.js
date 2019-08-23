import React,{Component} from 'react';
import {deleteItem} from '../../state/actions';
import {connect} from 'react-redux';
const mapDispatchToProps = {
    deleteItem
}
class Item extends Component {
    render(){
        const {item,index} = this.props;
        return(
            <li className='item' onClick={()=>this.props.deleteItem(index)}>{`Item:${item.name} Quantity:${item.quantity}`}</li>
        )
    }
}
export default connect(null,mapDispatchToProps)(Item);

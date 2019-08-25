import React,{Component} from 'react';
import {deleteItem} from '../../state/actions';
import {connect} from 'react-redux';
const mapDispatchToProps = {
    deleteItem
}
export class Item extends Component {
    render(){
        const {item,index} = this.props;
        return(
            <li data-test='item' onClick={()=>this.props.deleteItem(index)}>{`Item:${item.name} Quantity:${item.quantity}`}</li>
        )
    }
}
export default connect(null,mapDispatchToProps)(Item);

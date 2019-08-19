import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addItem} from '../../state/actions';

const mapDispatchToProps = {
    addItem
}

class Operations extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            quantity:0
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    render(){
        const {addItem} = this.props;
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-4 text-center form-group'>
                        <input placeholder='name' className='form-control' value={this.state.name} name='name' onChange={this.handleChange}/>
                    </div>
                    <div className='col-4 text-center form-group'>
                        <input placeholder='quantity' className='form-control' type='number' value={this.state.quantity} name='quantity' onChange={this.handleChange}/>
                    </div>
                    <div className='col-4 text-center'>
                        <button className='btn btn-primary' onClick={()=>addItem(this.state.name,this.state.quantity)}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(null,mapDispatchToProps)(Operations);
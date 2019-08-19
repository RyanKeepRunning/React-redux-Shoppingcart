import React,{Component} from 'react';
import Title from './components/Title';
import List from './components/List';
import Operations from './components/Operations';
class App extends Component {
    render(){
        return(
            <div>
                <Title/>
                <List/>
                <Operations/>
            </div>
        )
    }
}
export default App;
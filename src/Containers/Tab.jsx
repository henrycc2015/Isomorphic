import React,{Component} from 'react';
class Tab extends Component{
    constructor (props){
        super(props);
        this.state = {
        }
    }
    componentDidMount (){
        console.log(this.props);
    }
    render(){
        return(
            <div key='tab1' onClick={this.props.handlerClick}>
                {this.props.stage}
            </div>
        )
    }
};
export default Tab;

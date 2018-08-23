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
            <div key='page'>
                {`第${this.props.stage}页`}
            </div>
        )
    }
};
export default Tab;

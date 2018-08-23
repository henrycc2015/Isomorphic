import React,{Component} from 'react';
import Page from './Page';
import Tab from './Tab';
class Stepper extends Component{
    constructor (props){
        super(props);
        this.state = {
            stage: this.props.stage
        }
    }
    //使用 Static Properties
    static Tab = Tab;
    static Page = Page
    componentDidMount (){

    }
    handleClick = () => {
        this.setState({ stage: this.state.stage + 1 });
    }
    render(){
        //使用 Function as Child Component 手段
        const {stage} = this.state; 
        const children = this.props.children.map((this.props.children, child => {
            return React.cloneElement(child, {stage, handlerClick: this.handleClick});
        } ))
        return(
            <div>
                {children}
            </div>
        )
    }
};
export default Stepper;


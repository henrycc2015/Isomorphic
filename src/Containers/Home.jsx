import React,{Component} from 'react';
import { connect } from 'react-redux';
import {getInitData} from '../actions/home';
import {Link} from 'react-router-dom';
import '../scss/home.scss';
import Stepper from './Stepper';
class Home extends Component{
    constructor (props){
        super(props);
        this.state = {
            initData: {

            },
            stage: 0
        }
    }
    componentDidMount (){
      this.props.getInitData();
    }
    render(){
        const {stage} = this.state;
        return(
            <div>
               <p>name：{this.props.initData ? this.props.initData.title: ''}</p>
               <p>作者：{this.props.initData ? this.props.initData.author: ''}</p>
               图片： <img src='../static/1.jpeg' />
                <div className='container' >
                    <Stepper stage={stage}>
                      <Stepper.Tab/>
                      <Stepper.Page/>
                    </Stepper>
                </div>
                <div><Link to="/user">用户</Link></div>
            </div>
        )
    }
};
const mapStateToProps = (state, ownProps) =>{
    return {
        initData: state.home.initData,
    };
  };
const mapDispatchToProps = dispatch => {
    return {
        getInitData: ()=>{
            dispatch(getInitData());
        },
    };  
};
const FilterHome = connect(mapStateToProps, mapDispatchToProps)(Home);
export default FilterHome;

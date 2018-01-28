import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions  from '../store/actions/home';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import Page from '../containers/Page';
import Header from '../components/Header';

class Home extends Component {
  state = {
    hasError:false,
  }

  componentDidMount(){
    // this.props.getHomeInfo();
    console.log(this.props);
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.log('error',error,info)
  }

  render(){
    let { add,count,homeInfo:{ name,age } } = this.props;
    return [
      <div key="h">
        <p>{ count }</p>
        <p>nnnn：{name} - neaeaea：{age}</p>
        <button style={{backgroundColor:'#eee'}} onClick={()=>add(count + 1)}>ADD</button>
        <Link to='/user'>User</Link>
      </div>,
      <Page key="Page" />
    ];
  }
}

const mapStateToProps = (state) => ({
  count: state.counter.count,
  homeInfo: state.homeInfo,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  add: actions.add,
  getHomeInfo: actions.getHomeInfo,
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Home)

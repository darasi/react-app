import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import * as actions  from '../store/actions/home';

class Home extends Component {
  componentDidMount(){
    // this.props.getHomeInfo();
  }

  render(){
    const { add,count,homeInfo:{ name,age } } = this.props;
    return (
      <section>
        <p>{ count }</p>
        <p>nnnn：{name} - neaeaea：{age}</p>
        <button style={{backgroundColor:'#eee'}} onClick={()=>add(count + 1)}>ADD</button>
        <Link to='/user'>User</Link>
      </section>
    );
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

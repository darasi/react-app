import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions  from '../store/actions/home';
import '../assets/css/index.scss';

class User extends Component{

  // handeModelClick() {
  //   import('./Model.js').then(({ default: Model }) => {
  //     console.log(Model)
  //   })
  // }

  render(){
    const { count } = this.props;
    return (
      <div>
        <p>{ count }</p>
        <Link to='/'>HOME PAGE</Link>
        <ul>
            {
              [1,2,3,4,5,6].map((item) => (
                  <li key={item}>Item {item}</li>
              ))
            }
        </ul>
        <button onClick={()=>this.handeModelClick()}>model</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  count: state.counter.count
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  add: actions.add
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(User)

import React,{ Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Grid, Segment } from 'semantic-ui-react';
import RegisterForm from '../components/auth/RegisterForm';
import * as actions  from '../store/actions/home';
import '../assets/css/registerPage.scss';


class Home extends Component {

  state = {
    errors: {}
  }

  componentDidMount(){
    this.props.getHomeInfo();
    console.log(this.props);
  }

  handleClick(){
    this.props.history.push('/');
	}

  render(){
    return (
      <React.Fragment>
        <section className="root">
          <Container fluid>
            <Grid centered>
              <Grid.Column mobile={16} tablet={6} computer={6}>
                <Segment>
                  <RegisterForm />
                </Segment>
              </Grid.Column>
            </Grid>
          </Container>
        </section>
			</React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  homeInfo: state.homeInfo,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getHomeInfo: actions.getHomeInfo,
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Home)

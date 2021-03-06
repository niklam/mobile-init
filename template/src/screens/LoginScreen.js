import React from 'react';
import { Text, View, StatusBar, Button } from 'react-native'
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Login } from '@avoine/mobile-components'

import * as actions from '../actions'
import { statusBar } from '../MainTabs'
import appConfig from '../../appConfig'


class LoginScreen extends React.Component {

  static navigationOptions = ({ navigation, screenProps }) => {
    let opts = {}

    if (navigation.state.params.showBackButton === false) {
      opts.header = null
    }

    return opts;
  }

  constructor(props) {
    super(props);
  }

  render() {
    // const viewBar = !!this.props.navigation.state.params.showBackButton

    return (
      <View style={{flex: 1}}>
        <Login
          config={appConfig}
          onLogin={this.props.onLoginSuccess}
        />
      </View>
    );
    // return (
    //   <View style={{flex: 1}}>

    //     {statusBar({
    //       barStyle: viewBar ? 'light-content' : 'dark-content',
    //     })}

    //     <Login
    //       config={appConfig}
    //       onLogin={this.props.onLoginSuccess}
    //     />
    //   </View>
    // );
  }
}

const mapStateToProps = (ownProps) => {
  return {
    isLoggedIn: ownProps.login.access_token !== undefined,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLoginSuccess: (access_token) => {
      dispatch(actions.login(access_token))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen)

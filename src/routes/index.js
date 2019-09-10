import React from 'react';
import {createRootNavigator} from './routes';
import Loader from '../components/Loader';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signed: false,
      signLoaded: false,
      control: true,
    };
    // this.authemticate();
  }
  //   componentDidUpdate(prevProps) {
  //     if (prevProps !== this.props) {
  //       this.authemticate();
  //     }
  //   }

  // async authemticate() {
  //   let auth = await AsyncStorage.getItem('@ideas:_id');
  //   if (auth) {
  //     this.setState({
  //       signed: true,
  //       signLoaded: true,
  //       control: true,
  //     });
  //   } else {
  //     this.setState({
  //       signed: false,
  //       signLoaded: false,
  //       control: true,
  //     });
  //   }
  // }

  render() {
    const {signed, control} = this.state;
    const Layout = createRootNavigator(true);
    return control ? <Layout /> : <Loader />;
  }
}

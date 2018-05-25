// import React from 'react';
// import store from './store';

// // This function takes a component...
// function componentData(WrappedComponent) {
//     // ...and returns another component...
//     return class Hoc extends React.Component {
//         constructor(props) {
//             super(props);
//             this.state = {
//                 data: store.getData()
//             };
//         }
  
//         //   componentDidMount() {
//         //     // ... that takes care of the subscription...
//         //     DataSource.addChangeListener(this.handleChange);
//         //   }
      
//         //   componentWillUnmount() {
//         //     DataSource.removeChangeListener(this.handleChange);
//         //   }
      
//         //   handleChange() {
//         //     this.setState({
//         //       data: selectData(DataSource, this.props)
//         //     });
//         //   }
//         addUserInfo(id) {
//             store.addUserInfo(id);
//         }
  
//         render() {
//         // ... and renders the wrapped component with the fresh data!
//         // Notice that we pass through any additional props
//             return <WrappedComponent  data={this.state.data} {...this.props}
//                 getUserInfo={this.getUserInfo}
//                 onAddUserInfo={this.addUserInfo}
//                 getClients={store.clientsArray}
//             />;
//         }
//     };
// }

// export default componentData;
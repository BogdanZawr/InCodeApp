import React from 'react';
import { connect } from 'react-redux';
import { asyncAddUser } from '../redux/actions/index';
import PropTypes from 'prop-types';

class CreateUser extends React.Component {
     addUserToDispatch = (e) => {
         e.preventDefault();
         
         let user = {
             'general': {
                 'firstName': e.target.elements.firstName.value,
                 'lastName': e.target.elements.lastName.value,
                 'avatar': e.target.elements.avatar.value
             },
             'job': {
                 'company': e.target.elements.company.value,
                 'title': e.target.elements.title.value
             },
             'contact': {
                 'email': e.target.elements.email.value,
                 'phone': e.target.elements.phone.value
             },
             'address': {
                 'street': e.target.elements.street.value,
                 'city': e.target.elements.city.value,
                 'zipCode': e.target.elements.zipCode.value,
                 'country': e.target.elements.country.value
             }
         };
         this.props.addUser(user);
     }
     render() {
         return (
             <div>
                 <form onSubmit={this.addUserToDispatch}>
                     <p>First name: <input id='firstName' type="text" /></p>
                     <p>Last name: <input id='lastName' type="text" /></p>
                     <p>Avatar cink: <input id='avatar' type="text" /></p>
                     <p>Job company: <input id='company' type="text" /></p>
                     <p>Title of job: <input id='title' type="text" /></p>
                     <p>Your email: <input id='email' type="text" /></p>
                     <p>Your phone: <input id='phone' type="text" /></p>
                     <p>Street Adress: <input id='street' type="text" /></p>
                     <p>Sity name: <input id='city' type="text" /></p>
                     <p>Your personaliti zip Code: <input id="zipCode" type="text" /></p>
                     <p>Country name: <input id="country" type="text" /></p>
                     <button>Submit</button>
                 </form>
             </div>
         );
     }
}

CreateUser.propTypes = {
    addUser: PropTypes.func,
};
 
const mapDispatchToProps = dispatch => {
    return {
        addUser: user => {
            dispatch(asyncAddUser(user));
        }
    };
};

export default connect(null, mapDispatchToProps)(CreateUser);
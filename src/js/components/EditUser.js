import React from 'react';
import { connect } from 'react-redux';
import { asyncEditUser } from '../redux/actions/index';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const mapStateToProps = state => ({
    user: state.rootReducer.clients,
    state,
});

class EditUser extends React.Component {
    state = {
        id: this.props.match.params.id,
        user: this.props.state.rootReducer.currentUser,
    }

    updateUser = (e) => {
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
            '_id': this.state.user._id,
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

        this.props.asyncEditUser(user);
    }

    render() {
        let userInfo = this.state.user;
        if (!this.state.user) {
            return (
                <div>
                    User nof found
                    <Link to={'/'}>
                        <Button secondary>Go to home page</Button>
                    </Link>
                </div>
            );
        } else {
            return (
                <div>
                    <form onSubmit={this.updateUser}>
                        <p>First name: <input id='firstName' type="text" defaultValue={userInfo.general.firstName} /></p>
                        <p>Last name: <input id='lastName' type="text" defaultValue={userInfo.general.lastName} /></p>
                        <p>Avatar cink: <input id='avatar' type="text" defaultValue={userInfo.general.avatar} /></p>
                        <p>Job company: <input id='company' type="text" defaultValue={userInfo.job.company} /></p>
                        <p>Title of job: <input id='title' type="text" defaultValue={userInfo.job.title} /></p>
                        <p>Your email: <input id='email' type="text" defaultValue={userInfo.contact.email} /></p>
                        <p>Your phone: <input id='phone' type="text" defaultValue={userInfo.contact.phone} /></p>
                        <p>Street Adress: <input id='street' type="text" defaultValue={userInfo.address.street} /></p>
                        <p>Sity name: <input id='city' type="text" defaultValue={userInfo.address.city} /></p>
                        <p>Your personaliti zip Code: <input id="zipCode" type="text" defaultValue={userInfo.address.zipCode} /></p>
                        <p>Country name: <input id="country" type="text" defaultValue={userInfo.address.country} /></p>
                        <button>Submit</button>
                    </form>
                </div>
            );
        }
    }
}

EditUser.propTypes = {
    asyncEditUser: PropTypes.func,
    match: PropTypes.object,
    user: PropTypes.array,
    state: PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
    asyncEditUser: user => {
        dispatch(asyncEditUser(user));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
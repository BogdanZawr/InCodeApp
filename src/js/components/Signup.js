import React from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { asyncRegistration } from '../redux/actions/index';
import PropTypes from 'prop-types';

class Signup extends React.Component {
    registration = (e) => {
        e.preventDefault();
        let log = {
            email: e.target.elements.email.value,
            password: e.target.elements.password.value,
        };
        this.props.asyncRegistration(log);
    }

    render() {
        return (
            <form onSubmit={this.registration}>
                <div className="ui right labeled input">
                    <input type="text" id='email' placeholder="Your Email" />
                    <input type="text" id='password' placeholder="Your Password" />
                    <Button secondary>Sign up</Button>
                </div>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    asyncRegistration: log => {
        dispatch(asyncRegistration(log));
    },
});

Signup.propTypes = {
    asyncRegistration: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Signup);
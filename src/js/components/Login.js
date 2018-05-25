import React from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { asyncLogIn } from '../redux/actions/index';
import PropTypes from 'prop-types';

class Login extends React.Component {
    registration = (e) => {
        e.preventDefault();
        let log = {
            email: e.target.elements.email.value,
            password: e.target.elements.password.value,
        };
        this.props.asyncLogIn(log);
    }

    render() {
        return (
            <form onSubmit={this.registration}>
                <div className="autorisation">
                    <div className="ui right labeled input">
                        <input type="text" id='email' placeholder="Your Email" />
                        <input type="text" id='password' placeholder="Your Password" />
                    </div>
                    <Button secondary>Log in</Button>
                </div>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    asyncLogIn: log => {
        dispatch(asyncLogIn(log));
    },
});

Login.propTypes = {
    asyncLogIn: PropTypes.func
};

export default connect(null, mapDispatchToProps)(Login);
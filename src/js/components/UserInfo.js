import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { asyncDeleteUser, asyncGetUser, asyncEditUser } from '../redux/actions/index';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const mapStateToProps = state => ({
    user: state.rootReducer.clients,
    state,
});

class UserInfo extends React.Component {
    state = {
        user: this.props.user,
        id: this.props.match.params.id,
        state: this.props.state,
    };

    componentDidMount = () => {
        let id = this.state.id;
        this.props.asyncGetUser(id);
    }

    toDeleteUser = () => {
        let currentUser = this.props.state.rootReducer.currentUser;
        this.props.deleteUser(currentUser);
    }

    render() {
        let currentUser = this.props.state.rootReducer.currentUser;
        if (currentUser) {
            return (
                <div className='userInfo'>
                    <div className="ui card">
                        <div className="image">
                            <img src={currentUser.general.avatar} alt="NoPic" />
                        </div>
                        <div className="content">
                            <a className="header">{currentUser.general.firstName} {currentUser.general.lastName}</a>
                            <div className="meta">
                                <span className="date">Job Title: {currentUser.job.title}</span>
                            </div>
                            <div className="description">
                                <div>
                                    <p>City: {currentUser.address.city}</p>
                                    <p>Country: {currentUser.address.country}</p>
                                    <p>Street: {currentUser.address.street}</p>
                                    <p>Zip Code: {currentUser.address.zipCode}</p>
                                </div>
                                <div>
                                    <p>Email: {currentUser.contact.email}</p>
                                </div>
                                <div>
                                    <p>Job Company: {currentUser.job.company}</p>

                                </div>
                            </div>
                        </div>
                        <div className="extra content">
                            <a>
                                <i className="user icon"></i>
                                Phone: {currentUser.contact.phone}
                            </a>
                        </div>
                    </div>
                    <Link to={'/EditUser/' + this.props.state.rootReducer.currentUser._id}>
                        <Button secondary>Edit user</Button>
                    </Link>
                    <Button onClick={this.toDeleteUser} secondary>Delete user</Button>
                </div>
            );
        } else {
            return (<div>User Not Found</div>);
        }
    }
}

UserInfo.propTypes = {
    user: PropTypes.array,
    match: PropTypes.object,
    state: PropTypes.object,
    deleteUser: PropTypes.func,
    asyncEditUser: PropTypes.func,
    asyncGetUser: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
    deleteUser: currentUser => {
        dispatch(asyncDeleteUser(currentUser));
    },
    asyncEditUser: index => {
        dispatch(asyncEditUser(index));
    },
    asyncGetUser: id => {
        dispatch(asyncGetUser(id));
    }

});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
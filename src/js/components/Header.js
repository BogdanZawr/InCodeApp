import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { asyncGetClients, asyncGetSearchArr } from '../redux/actions/index';

const mapStateToProps = state => ({
    state,
});

const mapDispatchToProps = dispatch => {
    return {
        asyncGetClients: () => {
            dispatch(asyncGetClients());
        },
        asyncGetSearchArr: (text) => {
            dispatch(asyncGetSearchArr(text));
        }
    };
};

class SearchList extends React.Component {
    state = {
        clientsAfterSearch: this.props.state.rootReducer.clientsAfterSearch,
        timeOut: {},
    }

    inputHandler = (text) => {
        if (text === '') {
            this.props.asyncGetClients();
        } else {
            this.props.asyncGetSearchArr(text);
        }
    }

    timeOutValue = (e) => {
        let text = e.target.value;
        clearTimeout(this.state.timeOut);
        let timer = setTimeout(this.inputHandler, 1000, text);
        this.setState({ timeOut: timer });
    }

    render() {
        return (
            <div>
                <h3 className="ui block header">
                    <Input className="input" focus placeholder='Search...' onChange={this.timeOutValue} type="text" />
                    <Link to={'/'}>
                        <Button className="buttonAddUser" secondary>Home</Button>
                    </Link>
                    <Link to={'/CreateNewUser'}>
                        <Button className="buttonAddUser" secondary>Add User</Button>
                    </Link>
                    <div className="userInfo">
                        {!localStorage.getItem('token') ?
                            <h3>
                                <Link to={'/Login'}>
                                    <Button secondary>Log in</Button>
                                </Link>
                                <Link to={'/Signin'}>
                                    <Button secondary>Sign up</Button>
                                </Link>
                            </h3> :
                            <h3>
                                <div className="ui compact menu">
                                    <div className="ui simple dropdown item">
                                        {localStorage.getItem('email')}
                                        <i className="dropdown icon"></i>
                                        <div className="menu">
                                            <div className="item"><div onClick={() => { localStorage.removeItem('token'); this.forceUpdate(); }}>
                                                <Button secondary>Log out</Button>
                                            </div></div>
                                        </div>
                                    </div>
                                </div>
                            </h3>}
                    </div>
                </h3>
            </div>
        );
    }
}

SearchList.propTypes = {
    state: PropTypes.object,
    asyncGetClients: PropTypes.func,
    asyncGetSearchArr: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchList);
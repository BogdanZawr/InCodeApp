import React from 'react';
import List from './List';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { asyncGetClients } from '../redux/actions/index';

const mapStateToProps = state => ({
    state,
});

const mapDispatchToProps = dispatch => {
    return {
        asyncGetClients: () => {
            dispatch(asyncGetClients());
        },
    };
};

class SearchList extends React.Component {
    state = {
        clientsAfterSearch: this.props.state.rootReducer.clientsAfterSearch,
        timeOut: {},
    }

    componentDidMount = () => {
        this.props.asyncGetClients();
        
    }

    render() {
        return (
            <div>
                {this.props.state.rootReducer.clientsAfterSearch &&
                    <List
                        textInput={this.state.textInput}
                        clientsAfterSearth={this.props.state.rootReducer.clientsAfterSearch}
                    />}
            </div>
        );
    }
}

SearchList.propTypes = {
    state: PropTypes.object,
    asyncGetClients: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchList);
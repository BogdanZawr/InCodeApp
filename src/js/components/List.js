import React from 'react';
import User from './User';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterList } from '../selectors/index';

const mapStateToProps = (state, props) => ({
    filterAddList: filterList(state, props)
});

class List extends React.Component {

    render() {
        return (
            <div>
                {this.props.filterAddList.map((user) => {      
                    return <User
                        key= {user._id}
                        client= {user}
                    />;
                })}
            </div>
        );
    }
}

List.propTypes = {
    clietsAfterSearth: PropTypes.array,
    filterAddList: PropTypes.array,

};

export default connect(mapStateToProps)(List);
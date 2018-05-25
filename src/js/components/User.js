import React from 'react';
import { Link } from 'react-router-dom';
import { List, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class User extends React.Component {
    render() {
        return (
            <Link className='container' to={'/User/' + this.props.client._id} >
                <Segment inverted>
                    <List divided inverted relaxed>
                        <List.Item>
                            <List.Content>
                                <List.Header>{this.props.client.general.firstName} {this.props.client.general.lastName}</List.Header>
                            </List.Content>
                        </List.Item>
                    </List>
                </Segment>
            </Link>
        );
    }
}

User.propTypes = {
    index: PropTypes.number,
    client: PropTypes.object
};

export default User;
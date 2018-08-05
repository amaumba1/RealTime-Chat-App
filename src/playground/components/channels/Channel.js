import React, { Component } from 'react';

class Channel extends Component {
    
    handleOnClick = (event) => {
        // Another way to do
        //this.state.setChannel()
        //this.state.channel()
        const {setChannel, channel } = this.state; 
        setChannel(channel)
        event.preventDefault();
    }

    render() {
        const {channel} = this.props; 
        return(
            <li>
                <a onClick={this.handleOnClick}>
                    {channel.name}
                </a>
            </li>
        )
    }
}

// Channel.propTypes = {
//     channel: PropTypes.object.isRequired,
//     setChannel: PropTypes.func.isRequired
// }
export default Channel
import React, { Component } from 'react';

class Channel extends Component {

    handleOnClick = (event) => {
        const {setChannel, channel } = this.state; 
        setChannel(channel)
        event.preventDefault();
    }

    render() {
        const {channel, activeChannel} = this.props; 
        const active = channel === activeChannel ? 'active' : ''
        return(
            <li className={active}>
                <a onClick={this.handleOnClick}>
                    {channel.name}
                </a>
            </li>
        )
    }
}

export default Channel
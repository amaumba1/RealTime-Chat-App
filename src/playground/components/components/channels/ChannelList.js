import React, {Component } from 'react'
//import PropTypes from 'props-types';

import Channel from './Channel'; 

class ChannelList extends Component {
    render() {
       return (
           <ul>
                {
                    this.props.channels.map( chan => {
                        return(
                            <Channel 
                                channel={chan}
                                key={chan.id}
                                setChannel={this.props.setChannel}
                            /> 
                        )
                    })
                }
           </ul>
       )
    }
}

// ChannelList.propTypes = {
//     channel: PropTypes.array.isRequired,
//     setChannel: PropTypes.func.isRequired
// }

export default ChannelList; 
import React, { Component } from 'react';
//import PropTypes from 'props-types';

import ChannelForm from './ChannelForm';
import ChannelList from './ChannelList';

class ChannelSection extends Component {
    render() {
        return (
          <div>
            <ChannelList { ...this.props}/> 
            <ChannelForm { ...this.props}/> 
          </div>
        )
    }

}

// ChannelSection.propTypes = {
//     channels: PropTypes.array.isRequired,
//     setChannel: PropTypes.func.isRequired,
//     addChannel: PropTypes.func.isRequired
// }



export default ChannelSection; 
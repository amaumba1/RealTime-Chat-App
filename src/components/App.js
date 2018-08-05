import React, {Component} from 'react';
import ChannelSection from './channels/ChannelSection'; 
//import './App.css'; 

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            channels: []
        }
        this.addChannel = this.addChannel.bind(this);
        this.setChannel = this.setChannel.bind(this);
    }

    addChannel(name) {
        const {channels} = this.state;
        channels.push({
            id: channels.length,
            name 
        })
        this.setState({channels})
        // TODO: Send to server
    }


    setChannel(activeChannel) {
        this.setState({activeChannel})
        //TODO: Get Channels Messages
    }
    render() {
        return (
            <div className='app'>
                <div className='nav'>
                    <ChannelSection
                        {...this.state}
                        addChannel={this.addChannel}
                        setChannel={this.setChannel}
                    /> 
                
                </div>
            </div>
           
        )
    }
}

export default App; 
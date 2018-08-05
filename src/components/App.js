import React, {Component} from 'react';
import ChannelSection from './channels/ChannelSection'; 
import UserSection from './users/UserSection';
import MessageSection from './messages/MessageSection';
//import './App.css'; 

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            channels: [],
            users: [],
            messages: [],
            activeChannel: {}
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

    setUserName(name) {
        let {users} = this.state;
        users.push({ id: users.length, name });
        this.setState({users});
        //TODO: Send to server
    }

    addMessage(body) {
        let {messages, users} = this.state;
        let createdAt = new Date();
        let author = users.length > 0 ? users[0].name : 'anonymous';
        messages.push({ id: messages.length, body, createdAt, author});
        this.setState({messages});
        //TODO: Send to server
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
                    <UserSection 
                        { ...this.state}
                        setUserName={this.setUserName.bind(this)}
                    /> 
                </div>
                <MessageSection 
                    { ...this.state}
                    addMessage={this.addMessage.bind(this)}
                /> 
            </div>
           
        )
    }
}

export default App; 
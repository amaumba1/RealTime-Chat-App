import React from 'react'
import Channel from './Channel'; 

const ChannelList = (props) => {
    return (
        <ul>
                {
                    props.channels.map( chan => {
                        return(
                            <Channel 
                                channel={chan}
                                key={chan.id}
                                {...props}
                            /> 
                        )
                    })
                }
        </ul>
    )
}

export default ChannelList; 
/* System imports*/
import React from 'react'

/*Component Imports*/
import VideoPlayer from '../../components/VideoPlayer'
import Separator from 'react-uwp/Separator'

/*UI Imports*/


/*Code*/
const Home =(props, {theme}) => {
    return(
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <VideoPlayer url={'https://youtu.be/d-kgTJubTbg'} youtubeConfig={{controls: 0}}/>
            <Separator />
            
        </div>
            
    )
}

export default Home
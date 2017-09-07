/* System imports*/
import React from 'react'

/*Component Imports*/
import VideoPlayer from '../../components/VideoPlayer'


/*UI Imports*/


/*Code*/
const Home =(props, {theme}) => {
    return(
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <VideoPlayer url={'https://youtu.be/d-kgTJubTbg'} />
        </div>
            
    )
}

export default Home
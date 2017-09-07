/* System imports*/
import React from 'react'

/*Component Imports*/



/*UI Imports*/
import MediaPlayer from 'react-uwp/MediaPlayer' 

/*Code*/
const VideoPlayer =({url, ...options}, {theme}) => {
    return(
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <MediaPlayer
              url={url}
              style={{ margin: 20 }}
              width={960}
              height={540}
              displayMode="minimum"
              {...options}
            />
        </div>
            
    )
}

export default VideoPlayer
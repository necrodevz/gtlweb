/* System imports*/
import React from 'react'

/*Component Imports*/



/*UI Imports*/
import MediaPlayer from 'react-uwp/MediaPlayer'
import Dialog from 'react-uwp/Dialog'

/*Code*/
const VideoPlayer =({url}) => {
    return(
        <Dialog>
            <MediaPlayer
              url={url}
              width={960}
              height={540}
              displayMode="minimum"
            />
        </Dialog>
            
    )
}

export default VideoPlayer
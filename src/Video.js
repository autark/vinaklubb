import React from 'react';
import ReactPlayer from 'react-player';

export const Video = () => {
    return (

        <div>
            <h2>Video</h2>
            <div className="row row-spacer">
                <div >
                    <p>&nbsp;</p>
                    <ReactPlayer url="https://www.youtube.com/watch?v=up7tD_-yKoA" controls={true} />
                    <p>&nbsp;</p>
                </div>

                <div className="col-md-4">
                    <p>&nbsp;</p>
                    <ReactPlayer url="https://www.youtube.com/watch?v=abb_DSEgrB4&t=681s" controls={true} />
                    <p>&nbsp;</p>
                </div>

                <div>
                    <ReactPlayer url="https://www.youtube.com/watch?v=tcN8UjxMHJc" controls={true} />
                    <p>&nbsp;</p>
                </div>

                <div className="col-md-4">
                    <ReactPlayer url="https://www.youtube.com/watch?v=LBpkFFxWYGg&t=1086s" controls={true} />
                    <p>&nbsp;</p>
                </div>

                <div  >
                    <ReactPlayer url="https://www.youtube.com/watch?v=ebeQHsE0Lng" controls={true} />
                    <p>&nbsp;</p>
                </div>

                <div className="col-md-4">
                    <ReactPlayer url="https://www.youtube.com/watch?v=4QZkAqY3SwE" controls={true} />
                    <p>&nbsp;</p>
                </div>
                <div >                   
                    <ReactPlayer url=" https://www.youtube.com/watch?v=i6IUgBgmTws&t=444s" controls={true} />
                    <p>&nbsp;</p>
                </div>
            </div>
        </div>
    )
}

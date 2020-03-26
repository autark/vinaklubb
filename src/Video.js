import React from 'react';
import ReactPlayer from 'react-player';

export const Video = () => {
    return (

        <div className = "container">
            <h2>Video</h2>
            <div className="row row-spacer">
                <div className="col-md-4">                   
                    <ReactPlayer height= "15rem"  width ="30rem" url="https://www.youtube.com/watch?v=up7tD_-yKoA" controls={true} />    
                    &nbsp;              
                </div>

                <div className="col-md-4">                   
                    <ReactPlayer   height= "15rem"  width ="30rem"  url="https://www.youtube.com/watch?v=abb_DSEgrB4&t=681s" controls={true} />  
                    &nbsp;              
                </div>

                <div className="col-md-4">
                    <ReactPlayer   height= "15rem"  width ="30rem"  url="https://www.youtube.com/watch?v=tcN8UjxMHJc" controls={true} />   
                    &nbsp;               
                </div>

                <div className="col-md-4">
                    <ReactPlayer   height= "15rem"  width ="30rem"  url="https://www.youtube.com/watch?v=LBpkFFxWYGg&t=1086s" controls={true} /> 
                    &nbsp;                  
                </div>

                <div  className="col-md-4">
                    <ReactPlayer  height= "15rem"  width ="30rem"  url="https://www.youtube.com/watch?v=ebeQHsE0Lng" controls={true} />   
                    &nbsp;               
                </div>

                <div className="col-md-4">
                    <ReactPlayer  height= "15rem"  width ="30rem"  url="https://www.youtube.com/watch?v=4QZkAqY3SwE" controls={true} />  
                    &nbsp;                 
                </div>
                <div className="col-md-4">                   
                    <ReactPlayer   height= "15rem"  width ="30rem"  url=" https://www.youtube.com/watch?v=i6IUgBgmTws&t=444s" controls={true} />
                    &nbsp;
                </div>
            </div>
        </div>
    )
}

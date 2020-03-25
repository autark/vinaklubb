import React from 'react';
import bilde1 from './assets/vina.jpg';
import bilde2 from './assets/vina2.jpg';
import bilde3 from './assets/vina3.jpg';
import bilde4 from './assets/vina4.jpg';
import bilde5 from './assets/vina5.jpg';
import bilde6 from './assets/vina6.jpg';
import bilde7 from './assets/vina8.jpg';
import bilde8 from './assets/vina9.jpg';
import bilde9 from './assets/vina10.jpg';
import bilde11 from './assets/vina11.jpg';
import bilde12 from './assets/vina12.jpg';
import bilde14 from './assets/vina14.jpg';
import ImageGallery from 'react-image-gallery';
 
const images = [
  {
    original: bilde1,
    thumbnail: bilde1,
  },
  {
    original: bilde2,
    thumbnail: bilde2,
  },
  {
    original: bilde3,
    thumbnail: bilde3,
  },
  {
    original: bilde4,
    thumbnail: bilde4,
  },  
  {
    original: bilde5,
    thumbnail: bilde5,
  },  
  {
    original: bilde6,
    thumbnail: bilde6,
  },  
  {
    original: bilde7,
    thumbnail: bilde7,
  },  
  {
    original: bilde8,
    thumbnail: bilde8,
  },  
  {
    original: bilde9,
    thumbnail: bilde9,
  },  
  {
    original: bilde11,
    thumbnail: bilde11,
  }, 
  {
    original: bilde12,
    thumbnail: bilde12,
  }, 
  {
    original: bilde14,
    thumbnail: bilde14,
  }, 

];
 

export const Bilder = () => {
    return (
        <div>
            <h2>Bilder</h2>          
        <ImageGallery infinite={false} showPlayButton= {false}  items={images} />
        </div>      

    )
}

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player'
import videos from '/videos.json'
import { GrPrevious } from 'react-icons';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


function Video() {


  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true)
    }
  }, []);

  function removeTags(str) {
    if ((str===null) || (str===''))
        return false;
    else
        str = str.toString();
          
    // Regular expression to identify HTML tags in 
    // the input string. Replacing the identified 
    // HTML tag with a null string.
    return str.replace( /(<([^>]+)>)/ig, '');
}


  return (
    <div>
      <Carousel nextIcon={ <span></span>} prevIcon={ <span></span>}>
        {videos.videos?.map((video) => {
          return (
            <Carousel.Item key={video.id} 
            interval={1000000000}
            >
              <div className="grid grid-cols-2 gap-4  mb-[40px]">
                  <div className='mt-[40px] mb-[200px]'>
                    <h2 className="text-[36px] ml-[70px] text-blackish">
                      {video.title}
                    </h2>
                    <p className="text-[22px] ml-[70px] mt-[22px] text-blueish line-clamp-5 ">
                      {removeTags(video.description)}
                    </p>
                  </div>
                <div className='flexbox justify-center items-center'>
                  <img src='/images/playbtn.png' className='absolute right-0 mt-[120px] mx-[300px] z-20 hover:w-[130px] hover:h-[130px]' />
                  <div className='absolute right-0 mt-[39px] transition-opacity py-[180px] px-[322px] z-10 bg-gradient-to-b from-redish to-[#FFB1B5] opacity-80 rounded-lg hover:opacity-0 hover:duration-300 duration-[8000ms] mr-[27px] border-[2px] border-redish shadow-lg shadow-white'/>
                <div className='absolute right-0 mr-[30px] mt-[40px]'>
                  {hasWindow && <ReactPlayer
                    url={video.url}
                    controls={false}
                    vimeoconfig={{ iframeParams: { fullscreen: 0 } }}

                  />}
                </div>
                </div>
                
                
              </div>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  )
}





export default Video;
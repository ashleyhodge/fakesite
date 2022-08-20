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
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true)
    }
  }, []);

  // Remove HTML tags from description in videos.json
  function removeTags(str) {
    if ((str===null) || (str===''))
        return false;
    else
        str = str.toString();
          
    // Regular expression to identify HTML tags in the input string. Replacing the identified HTML tag with a null string.
    return str.replace( /(<([^>]+)>)/ig, '');
  }
  // On click set style change as active
  const handleClick = () => {
    setIsActive(current => !current)
  }
// on arrow click reset style to show background and play button
  const arrowClick = () => {
    if(isActive === true) {
      setIsActive(false)
    }
  }

  return (
    <div>
      <div>
        {/* Use Bootstrap React Carousel component to rotate through videos.json */}
        <Carousel nextIcon={<img src='/images/next.png' onClick={arrowClick} className='absolute right-0 w-[30px]'/>} prevIcon={ <img src='/images/back.png' className='absolute left-0 w-[30px]' onClick={arrowClick}/>} indicators={false}>
          {/* Use map method to render all videos from .json file onto page */}
          {videos.videos?.map((video) => {
            return (
              <Carousel.Item key={video.id} 
              // set interval to outrageous number to prevent carousel from moving on its own 
              interval={100000000}>
                
                <div className="grid grid-cols-2 gap-4  mb-[40px]">
                {/* Title and description section */}
                  <div className='mt-[40px] mb-[200px]'>
                    <h2 className="text-[36px] ml-[70px] text-blackish">
                      {video.title}
                    </h2>
                    <p className="text-[22px] ml-[70px] mt-[22px] text-blueish line-clamp-5 ">
                      {removeTags(video.description)}
                    </p>
                  </div>
                {/* Play button and background gradient overlay */}
                  <div className='flexbox justify-center items-center'>
                    {/* Change z-index to 0 on click to send bg & img to back and allow video play */}
                    <div className='cursor-pointer z-20' style={{zIndex: isActive ? 0 : '', opacity: isActive ? 0 : ''}} onClick={handleClick}>
                      <img src='/images/playbtn.png' alt='play' className='absolute right-0 mt-[140px] mx-[300px] z-20' />

                      <div className='absolute right-0 mt-[50px] transition-opacity py-[170px] px-[302px] z-10 bg-gradient-to-b from-redish to-[#FFB1B5] opacity-90 rounded-lg  duration-[8000ms] mr-[67px] border-[1px] border-blackish shadow-lg shadow-blackish' />
                      
                    </div>
                    {/* Play video through React-Player */}
                    <div className='absolute right-0 mr-[70px] mt-[40px]' style={{zIndex: isActive ? 20 : ''}} onClick={handleClick}>
                    {hasWindow && <ReactPlayer
                      url={video.url}
                      controls={true}
                      vimeoconfig={{ iframeParams: { fullscreen: 0 } }}
                      width={'600px'}/>}
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            )
          })}
        </Carousel>
      </div>
    </div>
  )
}


export default Video;

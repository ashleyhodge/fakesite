/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player'
import videos from '/videos.json'



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
    {videos.videos.map((video, id) => 
      <div key={id} className="grid grid-cols-2 mt-[40px]">
      <div>
        <h2 className="text-[36px] ml-[70px] text-blackish">
          {video.title}
        </h2>
        <p className="text-[22px] ml-[70px] mt-[22px] text-blueish line-clamp-5">
          {removeTags(video.description)}
        </p>
      </div>
      <div className='mr-[70px] absolute right-0 rounded-xl cursor-pointer'>
        <div className='flex justify-center'>
          <img src='/images/playbtn.png' className='absolute pt-[100px] z-20 hover:w-[130px] hover:h-[230px]' 
          />
          {/* Video Overlay */}
          <div className='absolute transition-opacity py-[180px] px-[320px] z-10 bg-gradient-to-b from-redish to-[#FFB1B5] opacity-80 rounded-lg hover:opacity-0 hover:duration-300 duration-[8000ms]'/>
        </div>
        <div className='overflow-hidden rounded-lg z-0'>
        {hasWindow && <ReactPlayer 
          url={video.url}
          controls={false}
          vimeoconfig={{ iframeParams: { fullscreen: 0 } }}
          
        />}
        </div>
      </div>
    </div>)}
    </div>
  )
}





export default Video;
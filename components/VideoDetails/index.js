/* eslint-disable @next/next/no-img-element */
import { Fragment, useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

function VideoDetail() {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true)
    }
  }, []);
  return (
    <Fragment>
      <div className='flex flex-col bg-black items-center  pt-[100px]'>
        
      {hasWindow && <ReactPlayer
          url='https://vimeo.com/533757272'
          controls={true}
          vimeoconfig={{ iframeParams: { fullscreen: 0 } }}
        />}
        <div className='text-white pt-[22px] flex items-center'>
        <p className='px-[100px]'>Comments: </p>
        <p className='px-[100px]'>Likes: </p>
        <p className='px-[100px]'>Plays: </p>
        </div>
      </div>
      <div className='text-center pt-[40px]'>
        <h2>Video Title</h2>
        <p className='pt-[22px] pb-[40px]'>Video Description</p>
      </div>
      <div>
        <h2 className='text-center'>About the Author</h2>
        <div className='flex items-center justify-evenly pb-[40px]'>
          <img className='rounded-full' src="https://i.vimeocdn.com/portrait/49637083_300x300?subrect=149%2C74%2C1074%2C999&r=cover" alt='author'></img>
          <p> Author Description</p>
        </div>
      </div>
    </Fragment>

  )
}

export default VideoDetail;
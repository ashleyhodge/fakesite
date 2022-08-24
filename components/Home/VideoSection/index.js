/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import classes from './Video.module.css'
import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player'
import videos from '/videos.json'
import { Carousel } from 'react-bootstrap';
import Link from 'next/link';
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

      <div className='wrapper'>
        {/* Use Bootstrap React Carousel component to rotate through videos.json */}
        <Carousel nextIcon={<img src='/images/next.png' onClick={arrowClick} className={classes.next}/>} prevIcon={ <img src='/images/back.png' className={classes.prev} onClick={arrowClick}/>} indicators={false}>
          {/* Use map method to render all videos from .json file onto page */}
          {videos.videos?.map((video) => {
            return (
              <Carousel.Item key={video.id} 
              // set interval to outrageous number to prevent carousel from moving on its own 
              interval={100000000}>
                <div className={classes.container}>
                {/* Title and description section */}
                  <div className={classes.col1}>
                    <Link href={`/${video.id}`}>
                      <h2>
                        {video.title}
                      </h2>
                    </Link>
                    <p className='line-clamp-4'>
                      {removeTags(video.description)}
                    </p>
                  </div>
                {/* video player */}
                  <div className={classes.col2}>
                    {/* Play button and background gradient overlay */}
                    {/* Change z-index to 0 on click to send bg & img to back and allow video play */}
                    <div className={classes.vid_bg} style={{zIndex: isActive ? 0 : '', opacity: isActive ? 0 : ''}} onClick={handleClick}>
                      <img src='/images/playbtn.png' alt='play'/>
                      <div/>
                    </div>
                    {/* Play video through React-Player */}
                    <div className={classes.vid_player} style={{zIndex: isActive ? 20 : ''}} onClick={handleClick}>
                    {hasWindow && <ReactPlayer
                      url={video.url}
                      controls={true}
                      vimeoconfig={{ iframeParams: { fullscreen: 0 } }}
                      width={'500px'}/>}
                    </div>
                  </div>
                  {/* Title and description section  again for media query*/}
                  <div className={classes.col3}>
                    <Link href={video.url}>
                      <h2>
                        {video.title}
                      </h2>
                    </Link>
                    <p className='line-clamp-4'>
                      {removeTags(video.description)}
                    </p>
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

/* eslint-disable react/no-unescaped-entities */
import classes from './Hero.module.css'

function Hero() {
  return (
		<div className='wrapper'>
		<section className={classes.section}>
			<div>
				<h1>The world's greatest fake site</h1>
				<p>Create the world's greatest fake site and enjoy the breeze of fresh air when you complete it</p>
			</div>
			<div className={classes.button_div}>
					<button type="button">Do something awesome</button>
			</div>
		</section>
		</div>
  )
}

export default Hero;

/* eslint-disable react/no-unescaped-entities */


function Hero() {
  return (
<section>
	<div className="bg-cover"  style={{backgroundImage: 'url(/images/hero-image.png)', width: 'full'}}>
		<div className="flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center text-white lg:pb-56 md:py-32 md:px-10 lg:px-32">
			<h1 className="text-[48px]">The world's greatest fake site</h1>

			<p className="mt-6 mb-8  sm:mb-12 xl:max-w-3xl text-[22px]">Create the world's greatest fake site and enjoy <br />the breeze of fresh air when you complete it</p>
      
			<div className="flex flex-wrap justify-center">
				<button type="button" className="px-8 py-3 min-h-[55px] text-[22px] rounded-full bg-redish">Do something awesome</button>
			</div>
		</div>
	</div>
</section>
  )
}

export default Hero;

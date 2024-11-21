<template>
	<main>
		<!-- BANNER -->
		<div class="banner green-bg-pattern clr-cream">
			<div class="pblock-8">
				<div class="container">
					<SplitContent gridGap="8rem" gridColumns="3fr 1.5fr" alignItems="center">
						<template #leftColumn>
							<h1 class="banner__header fs-xl regular clr-yellow"><img src="/images/bee.svg" alt="" class="banner__bee" />Hello and welcome to the Northport Native Garden Initiative (NNGI)!</h1>
							<p class="fs-500">We are a non-profit (501(c)(3)) located in Northport, New York. Our aim is to educate people about how fun and easy it is to achieve the goals of a beautifully maintained landscape while implementing helpful ecological practices. <strong class="clr-pink">We do this through the following:</strong></p>
							<ul>
								<li>Educational programs</li>
								<li>Plant Sale Events</li>
								<li>Social media discussion groups and Education (Facebook/Instagram)</li>
							</ul>
						</template>

						<template #rightColumn>
							<img src="/images/nngi-illustration.webp" alt="Illustration of native flowers" />
						</template>
					</SplitContent>
				</div>
			</div>
		</div>

		<!-- WHY NATIVE -->
		<section class="pblock-12">
			<div class="container container--1200">
				<SplitContent gridColumns="1.5fr 3fr" alignItems="center">
					<template #leftColumn>
						<img src="/images/yellow-flowers.png" alt="Illustration of yellow native flowers" />
					</template>
					<template #rightColumn>
						<h2 class="fs-900 fw-600 regular clr-purple">Why Garden with Native Plants & Flowers?</h2>
						<p>Native plants are essential to supporting living landscapes across the United States. The term "native" means that these plant species are naturally occurring and actively support the biodiversity within a particular region. In addition to providing nourishment and habitat, native plants play a vital role in stormwater management by filtering nitrates before they run into our waterways.</p>
					</template>
				</SplitContent>
			</div>
		</section>

		<!-- SERVICES -->
		<section class="pblock-6 clr-bg-light-lavender">
			<div class="container container--1200">
				<SplitContent gridColumns="3fr 1.25fr" alignItems="center" gridGap="8rem">
					<template #leftColumn>
						<h2 class="fs-900 fw-600 regular clr-purple">Services</h2>
						<ul class="services">
							<li>Consultation and Garden Design</li>
							<li>Speaking Engagements and Lectures</li>
							<li>Scout Project Facilitation</li>
							<li>Restoration and Invasive Species Guidance</li>
							<li>Rain Garden Implementation Program</li>
							<li>PTA and School Fundraiser Program</li>
						</ul>
					</template>
					<template #rightColumn>
						<img src="/images/bee-house.webp" alt="Illustration of a bee house" class="bee-house" />
					</template>
				</SplitContent>
				<p class="contact bold text-center mt-8">For more information or questions about these services please email us at: northportngi@gmail.com</p>
			</div>
		</section>

		<!-- PLEDGE -->
		<section class="pblock-12 clr-bg-green clr-cream text-center green-bg-pattern">
			<div class="container container--1200">
				<h2 class="clr-light-lavender script mb-1">Do Your Part</h2>
				<p class="fs-600 mb-1 mb-2">A simple choice to help our environment by landscaping with native plants.</p>
			</div>
		</section>

		<!-- COUNTERS -->
		<div class="container container--1200 pb-12">
			<div class="counters">
				<div>
					<Counter :targetCount="15" :duration="1000" text="Pledge Takers" :plusSign="false" />
				</div>
				<div>
					<Counter :targetCount="300" :duration="1000" text="Native Plants Added" :plusSign="true" />
				</div>
				<div>
					<Counter :targetCount="22" :duration="1000" text="Rain Gardens Added" :plusSign="false" />
				</div>
				<div>
					<Counter :targetCount="30" :duration="1000" text="Chemical Free Yards" :plusSign="false" />
				</div>
				<div>
					<Counter :targetCount="10" :duration="1000" text="Mason Bee Houses Added" :plusSign="false" />
				</div>
			</div>
		</div>

		<!-- MAP -->
		<!-- prettier-ignore -->
		<div style="overflow:hidden;resize:none;max-width:100%;height:500px;"><div id="g-mapdisplay" style="height:100%; width:100%;max-width:100%;"><iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=Northport,+NY,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe></div><a class="code-for-google-map" rel="nofollow" href="https://kbj9qpmy.com/bp" id="enable-map-info">Internet Provider</a></div>
	</main>
</template>

<style lang="scss" scoped>
	.banner {
		&__header {
			max-width: 19ch;
			position: relative;
		}
		&__bee {
			position: absolute;
			right: 95%;
			bottom: 90%;
			width: 100px;
		}
	}
	.image-sillos {
		aspect-ratio: 1.1/1;
		height: auto;
		width: 450px;
		position: relative;
		&__image-1,
		&__image-2 {
			position: absolute;
			overflow: hidden;
			width: 100%;
			max-width: 250px;
			border-style: solid;
			border-width: 8px 8px 8px 8px;
			border-color: #ffffff;
		}
		&__image-1 {
			bottom: 0;
			right: 0;
			z-index: 2;
			border-radius: 150px 0px 150px 0px;
		}
		&__image-2 {
			top: 0;
			left: 0;
			z-index: 1;
			border-radius: 0px 150px 0px 150px;
		}
	}
	.counters {
		display: flex;
		justify-content: space-around;
		gap: 2rem;
		flex-wrap: wrap;
		text-align: center;
		margin-top: -40px;
	}
	.services {
		display: grid;
		column-gap: 5rem;
		row-gap: 2rem;
		@media (min-width: 768px) {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	.bee-house {
		width: 100%;
		max-width: 400px;
		margin: 0 auto;
	}
	.contact {
		background-color: var(--pink);
		padding: 2rem;
		border-radius: 1rem;
	}
</style>

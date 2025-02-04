<script setup>
	const props = defineProps({
		blok: {
			type: Object,
			required: true,
		},
	})
</script>

<template>
	<!-- <pre>
		{{ blok }}
	</pre
	> -->
	<div>
		<div id="banner" class="banner green-bg-pattern clr-cream">
			<div class="pblock-8">
				<div class="container">
					<SplitContent gridGap="8rem" gridColumns="3fr 2fr" alignItems="center">
						<template #leftColumn>
							<h1 class="banner__header fs-xl regular clr-yellow">{{ blok.banner_header }}</h1>
							<StoryblokRichText :doc="blok.banner_copy" />
						</template>

						<template #rightColumn>
							<nuxt-img :src="blok.banner_flyer.filename" alt="Farmer‘s Market dates flyer." format="webp" sizes="(max-width: 640px) 100vw, 350px" :modifiers="{ width: 700 }" style="max-width: 350px" width="350" height="452" class="banner__flyer" />
						</template>
					</SplitContent>
				</div>
			</div>
		</div>

		<!-- WHY NATIVE -->
		<section class="pblock-12">
			<div class="container container--1200">
				<SplitContent gridColumns="2.25fr 3fr" alignItems="center">
					<template #leftColumn>
						<nuxt-img src="https://a-us.storyblok.com/f/1023068/700x626/9265603d75/nngi-illustration.png" alt="Illustration of native flowers." format="webp" sizes="(max-width: 640px) 100vw, 350px" :modifiers="{ width: 700 }" width="445" height="398" style="max-width: 500px" />
					</template>
					<template #rightColumn>
						<h2 class="fs-900 fw-600 regular clr-purple">{{ blok.why_header }}</h2>
						<StoryblokRichText :doc="blok.why_copy" />
					</template>
				</SplitContent>
			</div>
		</section>

		<!-- SERVICES -->
		<section id="services" class="pblock-6 clr-bg-light-lavender">
			<div class="container container--1200">
				<SplitContent gridColumns="3fr 1.25fr" alignItems="center" gridGap="8rem">
					<template #leftColumn>
						<h2 class="fs-900 fw-600 regular clr-purple">{{ blok.services_header }}</h2>
						<StoryblokRichText :doc="blok.services_copy" />
					</template>
					<template #rightColumn>
						<!-- <img src="/images/bee-house.webp" alt="Illustration of a bee house" class="bee-house" /> -->
						<nuxt-img src="https://a-us.storyblok.com/f/1023068/783x800/dce09ad0d8/yellow-flowers.png" alt="Illustration of yellow native flowers." format="webp" sizes="(max-width: 640px) 100vw, 350px" :modifiers="{ width: 700 }" style="max-width: 350px" width="317" height="324" />
					</template>
				</SplitContent>
				<p class="contact bold text-center mt-8">For more information or questions about these services please <NuxtLink to="/contact" class="green">contact us</NuxtLink>.</p>
			</div>
		</section>

		<!-- PLEDGE -->
		<section class="pblock-12 clr-bg-green clr-cream text-center green-bg-pattern">
			<div class="container container--1200">
				<h2 class="clr-light-lavender script mb-1">Do Your Part</h2>
				<p class="fs-600 mb-1 mb-2">A simple choice to help our environment by landscaping with native plants.</p>
				<p><Button url="#" label="Take the Pledge" buttonLabelColor="green" buttonColor="white" buttonColorHover="cream" buttonBorderColor="white" buttonLabelColorHover="green" buttonBorderColorHover="cream" /></p>
			</div>
		</section>

		<!-- COUNTERS -->
		<div class="container container--1200 pb-12">
			<div class="counters">
				<div>
					<Counter :targetCount="Number(blok.pledge_takers)" :duration="1000" text="Pledge Takers" :plusSign="false" />
				</div>
				<div>
					<Counter :targetCount="Number(blok.native_plants)" :duration="1000" text="Native Plants Added" :plusSign="true" />
				</div>
				<div>
					<Counter :targetCount="Number(blok.rain_gardens)" :duration="1000" text="Rain Gardens Added" :plusSign="false" />
				</div>
				<div>
					<Counter :targetCount="Number(blok.chemical_free_yards)" :duration="1000" text="Chemical Free Yards" :plusSign="false" />
				</div>
				<div>
					<Counter :targetCount="Number(blok.mason_bee_houses)" :duration="1000" text="Mason Bee Houses Added" :plusSign="false" />
				</div>
			</div>
		</div>

		<!-- MAP -->
		<!-- prettier-ignore -->
		<div style="overflow:hidden;resize:none;max-width:100%;height:500px;"><div id="g-mapdisplay" style="height:100%; width:100%;max-width:100%;"><iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=Northport,+NY,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe></div><a class="code-for-google-map" rel="nofollow" href="https://kbj9qpmy.com/bp" id="enable-map-info">Internet Provider</a></div>
	</div>
</template>

<style lang="scss" scoped>
	.banner {
		ul {
			list-style: none; /* Remove default bullets */
			padding-left: 0; /* Adjust padding if necessary */
		}

		ul li {
			position: relative;
			padding-left: 24px; /* Space for the custom bullet */
		}

		ul li::before {
			content: '';
			position: absolute;
			left: 0;
			top: 50%;
			width: 18px; /* Adjust size */
			height: 18px;
			background-image: url('/images/leaf.svg');
			background-size: contain;
			background-repeat: no-repeat;
			background-position: center;
			transform: translateY(-50%);
		}

		&__header {
			max-width: 19ch;
			position: relative;
		}
		&__flyer {
			width: 100%;
			max-width: 350px;
			border: var(--lavender) 1px solid;
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
	#services ul {
		margin: 0;
		display: grid;
		column-gap: 5rem;
		row-gap: 0;
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

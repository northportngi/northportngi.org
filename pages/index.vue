<script setup>
	const { data: entry } = await useAsyncData('home', () => queryContent('/home').findOne())
	const banner = entry.value.banner
	const why = entry.value.why
	const services = entry.value.services
	const pledge = entry.value.pledge
</script>
<template>
	<main>
		<!-- BANNER -->
		<div class="banner green-bg-pattern clr-cream">
			<div class="pblock-8">
				<div class="container">
					<SplitContent gridGap="8rem" gridColumns="3fr 1.5fr" alignItems="center">
						<template #leftColumn>
							<h1 class="banner__header fs-xl regular clr-yellow"><img src="/images/bee.svg" alt="" class="banner__bee" />{{ banner.header }}</h1>
							<p class="fs-500" v-html="banner.intro" />
							<ul>
								<li v-for="item in banner.list">
									{{ item }}
								</li>
							</ul>
						</template>

						<template #rightColumn>
							<img :src="banner.illustration" :alt="banner.illustration_alt" />
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
						<!-- <div class="image-sillos">
							<div class="image-sillos__image-1">
								<img :src="why.image1" :alt="why.image1_alt" />
							</div>
							<div class="image-sillos__image-2">
								<img :src="why.image2" :alt="why.image2_alt" />
							</div>
						</div> -->
						<img src="/images/yellow-flowers.png" alt="" />
					</template>
					<template #rightColumn>
						<h2 class="fs-900 fw-600 regular clr-purple">{{ why.header }}</h2>
						<p>{{ why.copy }}</p>
					</template>
				</SplitContent>
			</div>
		</section>

		<!-- SERVICES -->
		<section class="pblock-6 clr-bg-light-lavender">
			<div class="container container--1200">
				<!-- <h2 class="fs-900 fw-600 regular clr-purple">{{ services.header }}</h2> -->
				<!-- <div class="services">
					<div v-for="service in services.list">
						{{ service }}
					</div>
				</div> -->
				<!-- <p class="bold">{{ services.copy }}</p> -->
				<SplitContent gridColumns="3fr 1.25fr" alignItems="center" gridGap="8rem">
					<template #leftColumn>
						<h2 class="fs-900 fw-600 regular clr-purple">{{ services.header }}</h2>
						<ul class="services">
							<li v-for="service in services.list">
								{{ service }}
							</li>
						</ul>
					</template>
					<template #rightColumn>
						<img src="/images/bee-house.webp" alt="Illustration of a bee house" class="bee-house" />
					</template>
				</SplitContent>
				<p class="contact bold text-center mt-8">{{ services.copy }}</p>
			</div>
		</section>

		<!-- PLEDGE -->
		<section class="pblock-12 clr-bg-green clr-cream text-center green-bg-pattern">
			<div class="container container--1200">
				<h2 class="clr-light-lavender script mb-1">{{ pledge.header }}</h2>
				<p class="fs-600 mb-1 mb-2">{{ pledge.copy }}</p>
			</div>
		</section>

		<!-- COUNTERS -->
		<div class="container container--1200 pb-12">
			<div class="counters">
				<div v-for="stat in pledge.stats">
					<Counter :targetCount="stat.targetCount" :duration="1000" :text="stat.text" :plusSign="stat.plusSign" />
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

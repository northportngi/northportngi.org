<script setup>
	const config = useRuntimeConfig()
	const query = gql`
		query GetHomepage {
			homepage(where: { id: "cm80ed6cc3s6l07lr2xyzo3m7" }) {
				title
				banner {
					title
					copy {
						html
					}
					image {
						url(transformation: { image: { resize: { width: 450, fit: crop } } })
						height
						width
						altText
					}
				}
				sections {
					... on Section {
						title
						copy {
							html
						}
						image {
							url
							height
							width
							altText
						}
					}
				}
				pledgeTakers
				nativePlants
				rainGardens
				chemicalFreeYards
				masonBeeHouses
			}
		}
	`
	const { data } = await useAsyncQuery(query)
	const page = data.value.homepage
</script>
<template>
	<div>
		<div id="banner" class="banner green-bg-pattern clr-cream">
			<div class="pblock-8">
				<div class="container">
					<SplitContent gridGap="8rem" gridColumns="3fr 2fr" alignItems="center">
						<template #leftColumn>
							<h1 class="banner__header fs-xl regular clr-yellow">{{ page.banner.title }}</h1>
							<div v-html="page.banner.copy.html" />
						</template>

						<template #rightColumn>
							<a href="https://shop.northportngi.org" target="_blank">
								<nuxt-img :src="page.banner.image.url" :alt="page.banner.image.altText" width="350" height="452" class="banner__flyer" />
							</a>
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
						<nuxt-img :src="page.sections[0].image.url" :alt="page.sections[0].image.altText" format="webp" sizes="(max-width: 640px) 100vw, 350px" :modifiers="{ width: page.sections[0].image.width }" :width="page.sections[0].image.width" :height="page.sections[0].image.height" />
					</template>
					<template #rightColumn>
						<h2 class="fs-900 fw-600 regular clr-purple">{{ page.sections[0].title }}</h2>
						<div v-html="page.sections[0].copy.html" />
					</template>
				</SplitContent>
			</div>
		</section>

		<!-- SERVICES -->
		<section id="services" class="pblock-6 clr-bg-light-lavender">
			<div class="container container--1200">
				<SplitContent gridColumns="3fr 1.25fr" alignItems="center" gridGap="8rem">
					<template #leftColumn>
						<h2 class="fs-900 fw-600 regular clr-purple">{{ page.sections[1].title }}</h2>
						<div v-html="page.sections[1].copy.html" />
					</template>
					<template #rightColumn>
						<nuxt-img :src="page.sections[1].image.url" :alt="page.sections[1].image.altText" format="webp" sizes="(max-width: 640px) 100vw, 350px" :modifiers="{ width: page.sections[1].image.width }" :width="page.sections[1].image.width" :height="page.sections[1].image.height" />
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
				<!-- <p><Button url="#" label="Take the Pledge" buttonLabelColor="green" buttonColor="white" buttonColorHover="cream" buttonBorderColor="white" buttonLabelColorHover="green" buttonBorderColorHover="cream" /></p> -->
			</div>
		</section>

		<!-- COUNTERS -->
		<div class="container container--1200 pb-12">
			<div class="counters">
				<div>
					<Counter :targetCount="Number(page.pledgeTakers)" :duration="1000" text="Pledge Takers" :plusSign="false" />
				</div>
				<div>
					<Counter :targetCount="Number(page.nativePlants)" :duration="1000" text="Native Plants Added" :plusSign="true" />
				</div>
				<div>
					<Counter :targetCount="Number(page.rainGardens)" :duration="1000" text="Rain Gardens Added" :plusSign="false" />
				</div>
				<div>
					<Counter :targetCount="Number(page.chemicalFreeYards)" :duration="1000" text="Chemical Free Yards" :plusSign="false" />
				</div>
				<div>
					<Counter :targetCount="Number(page.masonBeeHouses)" :duration="1000" text="Mason Bee Houses Added" :plusSign="false" />
				</div>
			</div>
		</div>
	</div>
</template>
<style>
	#services ul {
		margin: 0;
		display: grid;
		column-gap: 5rem;
		row-gap: 0;
		grid-template-columns: repeat(2, 1fr);
	}
</style>
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
			max-width: 500px;
			border: var(--lavender) 1px solid;
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

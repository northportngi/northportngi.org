<script setup>
	// const { data: entry } = await useAsyncData('sponsors', () => queryContent('/sponsors').findOne())
</script>

<template>
	<div>
		<!-- BANNER -->
		<div class="banner green-bg-pattern clr-cream">
			<div class="pblock-8">
				<div class="container container--1400">
					<SplitContent gridGap="8rem" gridColumns="3fr 1fr" alignItems="center">
						<template #leftColumn>
							<h1 class="banner__header fs-xl regular clr-yellow mb-2">Thank you to our Sponsors and Partners</h1>
							<p class="fs-600 bold clr-white">Northport Native Garden Initiative is made stronger with the help of our sponsors.</p>
						</template>
						<template #rightColumn> </template>
					</SplitContent>
				</div>
			</div>
		</div>
		<main>
			<div class="container container--1400">
				<div class="mblock-8">
					<ul class="sponsors fs-600 bold">
						<li>Northwestern Mutual</li>
						<li>Square Foot Gardening</li>
						<li>Friends of Mercy Smith</li>
						<li>Rotary Club of Northport</li>
						<li>Long Island Native Plant Initiative (LINPI)</li>
						<li>Village of Northport</li>
						<li>Northport-East Northport School District</li>
						<li>Cornell Cooperative Extension of Suffolk County - Sea Stars</li>
						<li>Sara Mairead Landscape Design</li>
						<li>Tyska Native Plants & Consulting</li>
						<li>Prints Charming Graphics</li>
					</ul>
				</div>
			</div>
		</main>
	</div>
</template>

<style lang="scss" scoped>
	.banner {
		&__header {
			max-width: 590px;
		}
	}
	.sponsors {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 2rem;
		list-style: none;
		padding: 0;
		margin: 0;
	}
</style>

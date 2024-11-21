<script setup>
	const { data: entry } = await useAsyncData('farmers-market', () => queryContent('/farmers-market').findOne())
</script>

<template>
	<div>
		<!-- BANNER -->
		<div class="banner green-bg-pattern clr-cream">
			<div class="pblock-8">
				<div class="container container--1400">
					<SplitContent gridGap="8rem" gridColumns="3fr 1fr" alignItems="center">
						<template #leftColumn>
							<h1 class="banner__header fs-xl regular clr-yellow mb-2" v-html="entry.header" />
						</template>
						<template #rightColumn> </template>
					</SplitContent>
				</div>
			</div>
		</div>
		<main>
			<div class="container container--1400">
				<div class="mblock-8">
					<SplitContent gridGap="8rem" gridColumns="500px 1fr">
						<template #leftColumn>
							<img src="https://placehold.co/600x400" alt="" />
						</template>
						<template #rightColumn>
							<p>NNGI sets up a booth monthly at the Northport Farmer’s Market in downtown Northport Village. This is a great opportunity to pick up some native plants to enhance the beauty and biodiversity of your home. The booth is also staffed by our resident native plant experts, so come down with your questions!</p>
							<p>You can find the NNGI booth right at the foot of Main Street right by the harbor.</p>
							<p><strong>NNGI will be there from 8:00am to 12:30pm.</strong></p>
							<h2 class="clr-green mt-0 mb-1 fs-700">Upcoming dates</h2>
							<ul>
								<li>Saturday, September 21, 2024</li>
								<li>Saturday, October 19, 2024</li>
								<li>Saturday, November 16, 2024 (tentative)</li>
							</ul>
						</template>
					</SplitContent>
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

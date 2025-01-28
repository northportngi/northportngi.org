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
							<h1 class="banner__header fs-xl regular clr-yellow mb-2">Native Plant Network</h1>
							<p class="fs-600 bold clr-white">Connecting Communities & Resources</p>
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
						<li><a href="https://www.linpi.org" target="_blank">Long Island Native Plant Initiative</a></li>
						<li><a href="https://www.rewildlongisland.org" target="_blank">ReWild Long Island</a></li>
						<li><a href="https://saramaireadlandscapedesign.com" target="_blank">Sara Mairead Landscape Design</a></li>
						<li><a href="https://cals.cornell.edu/cornell-cooperative-extension" target="_blank">Cornell Cooperative Extension of Suffolk County</a></li>
						<li><a href="https://www.facebook.com/people/Tyska-Native-Plants-Consulting/100081594603149" target="_blank">Tyska Native Plants & Consulting</a></li>
						<li><a href="https://www.kmsnativeplants.com" target="_blank">KMS Native Plants</a></li>
						<li><a href="https://www.dropseednativelandscapesli.com" target="_blank">Dropseed Native Plant</a></li>
						<li>BONAP</li>
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

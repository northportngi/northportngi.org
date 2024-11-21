<script setup>
	const { data: entry } = await useAsyncData('about', () => queryContent('/about').findOne())
</script>

<template>
	<div>
		<!-- BANNER -->
		<div class="banner green-bg-pattern clr-cream">
			<div class="pblock-8">
				<div class="container container--1400">
					<SplitContent gridGap="8rem" gridColumns="3fr 1.5fr" alignItems="center">
						<template #leftColumn>
							<h1 class="banner__header fs-xl regular clr-yellow">About Northport Native Garden&nbsp;Initiative</h1>
							<p>The mission and charitable purpose of the Northport Native Garden Initiative Inc. is to provide individuals, organizations, and municipalities within the Northport-East Northport and surrounding communities with the knowledge to implement ecological practices to benefit the local ecosystem and to provide resources, support, and tools to empower individuals and entities to contribute to the health of the local environment.</p>
						</template>
						<template #rightColumn> </template>
					</SplitContent>
				</div>
			</div>
		</div>
		<main>
			<div class="container container--1400">
				<section class="members">
					<div class="member mblock-8">
						<SplitContent gridColumns="350px 1fr" alignItems="center" gridGap="6rem">
							<template #leftColumn>
								<img src="https://placehold.co/600x600" alt="" />
							</template>
							<template #rightColumn>
								<h2 class="clr-green mt-0 mb-1 fs-700">Matt Gorman</h2>
								<p class="mt-1">Matt has been an educator for almost 20 years right here in Northport. His interest in native gardening started many years ago when by adding just a few native plants into his yard, he noticed a significant increase in pollinator and wildlife activity surrounding his property. Matt notes Doug Tallamy as an inspiration in his shift in how he views not only his own landscape, but how we approach residential landscapes as a whole. Matt is able to merge another passion of his, photography, with the incorporation of native plant species into his landscape. Matt has enjoyed photographing native blooms, pollinators and other wildlife for many years.</p>
							</template>
						</SplitContent>
					</div>
					<div class="member mblock-8">
						<SplitContent gridColumns="350px 1fr" alignItems="center" gridGap="6rem">
							<template #leftColumn>
								<img src="https://placehold.co/600x600" alt="" />
							</template>
							<template #rightColumn>
								<h2 class="clr-green mt-0 mb-1 fs-700">Sara Abbass</h2>
								<p class="mt-1">Sara has been a resident of Northport since 2014, having lived in several areas of NY and Wisconsin prior. The experience from living in the Midwest contributed significantly to Sara’s interests in biodiversity and specifically what she learned about the restorative efforts throughout the Great Lakes system. You might say her love of plants started a lot earlier than her time in the Midwest, as the only thing she asked for as a 10th birthday gift was a Weeping Willow tree! Sara now designs native landscapes for both residential and commercial properties.</p>
							</template>
						</SplitContent>
					</div>
					<div class="member mblock-8">
						<SplitContent gridColumns="350px 1fr" alignItems="center" gridGap="6rem">
							<template #leftColumn>
								<img src="https://placehold.co/600x600" alt="" />
							</template>
							<template #rightColumn>
								<h2 class="clr-green mt-0 mb-1 fs-700">Nicole Tamaro</h2>
								<p class="mt-1">Nicole has been a Northport resident since 2010. Nicole’s early experience with working in the farm industry helped to establish her interest in finding that balance between productive farming practices in a necessary industry, while maintaining environmental responsibility. This led to a greater discovery of the impact of native plants within our living landscape. She started incorporating natives into her garden landscape with milkweeds to support Monarch butterflies. After seeing the quick benefit of those few natives, she soon became more passionate about biodiversity.</p>
							</template>
						</SplitContent>
					</div>
					<div class="member mblock-8">
						<SplitContent gridColumns="350px 1fr" alignItems="center" gridGap="6rem">
							<template #leftColumn>
								<img src="https://placehold.co/600x600" alt="" />
							</template>
							<template #rightColumn>
								<h2 class="clr-green mt-0 mb-1 fs-700">Barbara Bolen</h2>
								<p class="mt-1">Barbara Bolen has been a Northport resident for over 30 years. She is a long-time vegetable gardener and her front-yard organic garden had more than its 15 minutes of fame as it was featured in several media outlets, both local and tristate. She is also an avid environmentalist as she realizes the dire need for all of us to be engaging in behaviors that protect our beautiful planet. It wasn’t until she attended her first NNGI lecture that she learned how her two passions intersect in a crucial way. Since then she has been completely hooked – adding native plants to her property and her community garden plot. Barbara was thrilled when she was asked by the three founders to join the NNGI board. She has been enjoying every moment of working alongside these native plant ‘rock stars’ to fulfill the mission of NNGI.</p>
							</template>
						</SplitContent>
					</div>
					<div class="member mblock-8">
						<SplitContent gridColumns="350px 1fr" alignItems="center" gridGap="6rem">
							<template #leftColumn>
								<img src="https://placehold.co/600x600" alt="" />
							</template>
							<template #rightColumn>
								<h2 class="clr-green mt-0 mb-1 fs-700">Jen Makaw</h2>
								<p class="mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est recusandae sapiente sit voluptatum nulla autem, in reprehenderit, corrupti sint, reiciendis ex veniam maiores harum ut vitae doloribus. Nemo, tempora nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quas reprehenderit architecto neque fugit beatae, officia sunt. Sequi quo, sed amet quia molestiae ducimus illo dolorum fugit earum dolorem explicabo!</p>
							</template>
						</SplitContent>
					</div>
					<div class="member mblock-8">
						<SplitContent gridColumns="350px 1fr" alignItems="center" gridGap="6rem">
							<template #leftColumn>
								<img src="https://placehold.co/600x600" alt="" />
							</template>
							<template #rightColumn>
								<h2 class="clr-green mt-0 mb-1 fs-700">Eileen Gorman</h2>
								<p class="mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est recusandae sapiente sit voluptatum nulla autem, in reprehenderit, corrupti sint, reiciendis ex veniam maiores harum ut vitae doloribus. Nemo, tempora nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quas reprehenderit architecto neque fugit beatae, officia sunt. Sequi quo, sed amet quia molestiae ducimus illo dolorum fugit earum dolorem explicabo!</p>
							</template>
						</SplitContent>
					</div>
				</section>
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
</style>

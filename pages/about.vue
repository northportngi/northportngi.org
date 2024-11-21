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
							<h1 class="banner__header fs-xl regular clr-yellow" v-html="entry.title" />
							<p>{{ entry.mission.statement }}</p>
						</template>
						<template #rightColumn> </template>
					</SplitContent>
				</div>
			</div>
		</div>
		<main>
			<div class="container container--1400">
				<section class="members">
					<div class="member mblock-8" v-for="member in entry.who_we_are.members">
						<SplitContent gridColumns="350px 1fr" alignItems="center" gridGap="6rem">
							<template #leftColumn>
								<img src="https://placehold.co/600x600" alt="" />
							</template>
							<template #rightColumn>
								<h2 class="clr-green mt-0 mb-1 fs-700">{{ member.name }}</h2>
								<p class="mt-1">{{ member.bio }}</p>
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

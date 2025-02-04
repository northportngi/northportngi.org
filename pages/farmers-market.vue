<script setup>
	const storyblokApi = useStoryblokApi()
	const { data } = await useAsyncData('farmers-market', () => storyblokApi.get('cdn/stories/farmers-market', { version: 'published' }))
	const entry = data.value.data.story
</script>
<template>
	<div>
		<!-- <pre>
		{{ entry }}
	</pre
		> -->
		<!-- BANNER -->
		<div class="banner green-bg-pattern clr-cream">
			<div class="pblock-8">
				<div class="container container--1400">
					<SplitContent gridGap="8rem" gridColumns="3fr 1fr" alignItems="center">
						<template #leftColumn>
							<h1 class="banner__header fs-xl regular clr-yellow mb-2">{{ entry.content.banner_header }}</h1>
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
							<nuxt-img :src="entry.content.page_image.filename" provider="storyblok" :alt="entry.content.page_image.alt" format="webp" style="width: 100%; height: 100%" />
						</template>
						<template #rightColumn>
							<StoryblokRichText :doc="entry.content.page_copy" />
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

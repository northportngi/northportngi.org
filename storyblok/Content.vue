<script setup>
	const props = defineProps({
		title: {
			type: String,
			required: true,
		},
		blok: {
			type: Object,
			required: true,
		},
	})
</script>

<template>
	<article>
		<h1>{{ title }}</h1>
		<div class="news">
			<section v-for="entry in blok" :key="blok.uuid">
				<Card :title="entry.name" :teaser="entry.teaser" path="#" />
				<!-- <StoryblokRichText :doc="entry.content.body" /> -->
			</section>
		</div>
	</article>
</template>
<style lang="scss" scoped>
	.news {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		gap: 4rem;
	}
	@media (min-width: 576px) {
		.news {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media (min-width: 1024px) {
		.news {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>

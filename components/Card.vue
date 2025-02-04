<script setup>
	const props = defineProps({
		entry: {
			type: Object,
			required: true,
		},
	})
</script>
<template>
	<article>
		<!-- <pre>
		{{ entry }}
	</pre
		> -->
		<div class="card">
			<div class="image">
				<NuxtLink :to="`/learn/${entry.slug}`"> <nuxt-img :src="entry.content.cover_image.filename" provider="storyblok" alt="Cover Image" width="600" height="350" format="webp" style="width: 100%; height: 100%" /></NuxtLink>
			</div>
			<div class="content">
				<div class="title fs-500 bold clr-green mb-1 text-center">
					<NuxtLink :to="`/learn/${entry.slug}`" class="clr-green underline">{{ entry.name }}</NuxtLink>
				</div>
			</div>
		</div>
	</article>
</template>

<style lang="scss" scoped>
	// Card
	.card {
		border: 1px solid var(--light-gray);
		border-radius: 0.5rem;
	}
	// Content
	.content {
		padding: 2rem;
	}
</style>

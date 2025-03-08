<script setup>
	const props = defineProps({
		article: {
			type: Object,
			required: true,
		},
	})
</script>
<template>
	<article>
		<div class="card">
			<div class="image">
				<NuxtLink :to="`/${article.category}/${article.slug}`">
					<nuxt-img :src="article.mainImage.url" :alt="article.mainImage.altText" :width="article.mainImage.width" :height="article.mainImage.height" format="webp" style="width: 100%; height: 100%" />
				</NuxtLink>
			</div>
			<div class="content">
				<div class="title fs-500 bold clr-green mb-1 text-center">
					<NuxtLink :to="`/${article.category}/${article.slug}`" class="clr-green underline">{{ article.title }}</NuxtLink>
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

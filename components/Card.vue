<script setup>
	const props = defineProps({
		title: {
			type: String,
			required: true,
		},
		path: {
			type: String,
			required: true,
		},
		teaser: {
			type: String,
			required: true,
		},
		date: {
			type: String,
			required: true,
		},
		image: {
			type: String,
		},
	})
</script>
<template>
	<article>
		<div class="card">
			<div class="image">
				<img src="https://placehold.co/600x350" alt="" />
			</div>
			<div class="content">
				<div class="title fs-500 bold clr-green mb-1">{{ title }}</div>
				<div>{{ date }}</div>
				<p class="teaser fs-400 mt-1 mb-0">{{ teaser }}</p>
				<p class="fs-400">
					<NuxtLink :to="path" class="clr-green underline"> Read more… </NuxtLink>
				</p>
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

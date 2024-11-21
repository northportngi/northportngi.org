<script setup>
	const route = useRoute()
	const { data: entry } = await useAsyncData('entry', () =>
		queryContent('education-and-projects')
			.where({ _path: `/education-and-projects/${route.params.slug}` })
			.findOne()
	)
</script>

<template>
	<article v-if="entry">
		<!-- BANNER -->
		<div class="banner green-bg-pattern clr-cream">
			<div class="pblock-8">
				<div class="container container--900">
					<h1 class="mb-1">{{ entry.title }}</h1>
					<p class="mt-1">Posted on {{ formatDate(entry.date) }}</p>
				</div>
			</div>
		</div>
		<div class="container container--900">
			<div class="pblock-8">
				<ContentRenderer :value="entry" />
			</div>
		</div>
	</article>
	<div v-else>
		<!-- BANNER -->
		<div class="banner green-bg-pattern clr-cream">
			<div class="pblock-8">
				<div class="container container--900">
					<h1>We can’t find what you are looking for.</h1>
				</div>
			</div>
		</div>
		<div class="container container--900 text-center">
			<div class="pblock-8">
				<NuxtLink to="/news" class="clr-green underline">Back to News</NuxtLink>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>

<script setup>
	// Access the Storyblok API
	const storyblokApi = useStoryblokApi()
	const { data: entries } = await storyblokApi.get('cdn/stories', {
		starts_with: 'content/',
		content_type: 'Content',
		per_page: 10,
		page: 1,
	})
</script>

<template>
	<!-- <pre>
		{{ entries.stories }}
	</pre
		> -->
	<main>
		<div class="container">
			<h1>Learn</h1>
			<Content :blok="entries.stories" />
		</div>
	</main>
</template>

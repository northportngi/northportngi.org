<script setup>
	// Access the Storyblok API
	const storyblokApi = useStoryblokApi()

	const { data: entries } = await storyblokApi.get('cdn/stories', {
		excluding_fields: 'body',
		content_type: 'Content',
	})
</script>

<template>
	<main>
		<!-- BANNER -->
		<div class="banner green-bg-pattern clr-cream">
			<div class="pblock-8">
				<div class="container container--1400">
					<SplitContent gridGap="8rem" gridColumns="3fr 1fr" alignItems="center">
						<template #leftColumn>
							<h1 class="banner__header fs-xl regular clr-yellow mb-2">Projects</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis repudiandae quod quia suscipit laudantium sapiente nostrum iusto quasi in incidunt deleniti, repellendus id repellat autem ipsum, dicta voluptas delectus neque!</p>
						</template>
						<template #rightColumn> </template>
					</SplitContent>
				</div>
			</div>
		</div>
	</main>
</template>

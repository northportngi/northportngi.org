<script setup>
	// Access the Storyblok API
	const storyblokApi = useStoryblokApi()

	const { data: entries } = await storyblokApi.get('cdn/stories', {
		excluding_fields: 'body',
		content_type: 'Content',
		filter_query: {
			category: {
				in: 'Learn',
			},
		},
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
							<h1 class="banner__header fs-xl regular clr-yellow mb-2">Learn</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis repudiandae quod quia suscipit laudantium sapiente nostrum iusto quasi in incidunt deleniti, repellendus id repellat autem ipsum, dicta voluptas delectus neque!</p>
						</template>
						<template #rightColumn> </template>
					</SplitContent>
				</div>
			</div>
		</div>
		<div class="container container--1400">
			<div class="mblock-8">
				<SplitContent gridGap="3rem" gridColumns="1fr 1fr">
					<template #leftColumn>
						<div class="video">
							<iframe width="560" height="315" src="https://www.youtube.com/embed/HZHzAwQqNYc?si=H-SBCJfvr-blRgJ9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
						</div>
					</template>
					<template #rightColumn>
						<div class="video">
							<iframe width="560" height="315" src="https://www.youtube.com/embed/84Qg5fAiKbM?si=ya6lj8kjbQe_kRgk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
						</div>
					</template>
				</SplitContent>
				<hr class="mblock-8" />
				<div class="text-center">
					<h2 class="clr-green">Northport Invasives Presentation</h2>
					<p>An Informative presentation given at a Northport Village Board meeting presented by Dr. Monica Zenyuh</p>
					<a href="/downloads/Northports-Invasives.pdf" class="cta-link">Download the Presentation</a>
				</div>
				<hr class="mblock-8" />
			</div>

			<Content :blok="entries.stories" />
		</div>
	</main>
</template>

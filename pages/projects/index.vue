<script setup>
	const config = useRuntimeConfig()
	const query = `query {
		simplePage(where: {slug: "projects"}) {
			title
			banner {
				title
				copy { html }
			}
			copy { html }
		}
		articles(where: {category: projects}) {
			title
			slug
			category
			mainImage {
				url(transformation: { image: { resize: { width: 600, height: 350, fit: crop } } })
				height
				width
				altText
			}
		}
	}`
	const { data, pending, error } = await useFetch(config.public.hygraphEndpoint, {
		method: 'POST',
		body: JSON.stringify({ query }),
		headers: { 'Content-Type': 'application/json' },
	})
	const page = data.value.data.simplePage
	const articles = data.value.data.articles
</script>

<template>
	<main>
		<!-- BANNER -->
		<div class="banner green-bg-pattern clr-cream">
			<div class="pblock-8">
				<div class="container container--1400">
					<SplitContent gridGap="8rem" gridColumns="3fr 1fr" alignItems="center">
						<template #leftColumn>
							<h1 class="banner__header fs-xl regular clr-yellow mb-2">{{ page.banner.title }}</h1>
							<div v-html="page.banner.copy.html" />
						</template>
						<template #rightColumn> </template>
					</SplitContent>
				</div>
			</div>
		</div>
		<div class="container container--1400">
			<div class="mblock-8">
				<article>
					<div class="news">
						<section v-for="article in articles" :key="article.slug">
							<Card :article="article" />
						</section>
					</div>
				</article>
			</div>
		</div>
	</main>
</template>

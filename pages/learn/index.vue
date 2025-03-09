<script setup>
	const config = useRuntimeConfig()
	const query = gql`
		query {
			learn(where: { id: "cm80nm1879nci08mytb0ttclf" }) {
				title
				banner {
					title
					copy {
						html
					}
				}
				youTubeVideos
				invasivesCopy {
					html
				}
				pdfFile {
					url
				}
			}
			articles(where: { category: learn }) {
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
		}
	`
	const { data } = await useAsyncQuery(query)
	const page = data.value.learn
	const articles = data.value.articles
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
				<div class="videos">
					<div class="video" v-for="(video, index) in page.youTubeVideos" :key="index">
						<div v-html="video" />
					</div>
				</div>
				<hr class="mblock-8" />
				<div class="text-center">
					<div v-html="page.invasivesCopy.html" />
					<a :href="page.pdfFile.url" class="cta-link" target="_blank">Download the Presentation</a>
				</div>
				<hr class="mblock-8" />
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
		</div>
	</main>
</template>

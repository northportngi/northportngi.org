<script setup>
	useModal()
	const config = useRuntimeConfig()
	const route = useRoute()
	const query = gql`query {
		article(where: {slug: "${route.params.slug}"}) {
			title
			showMainImage
			mainImage {
			url(transformation: {image: {resize: {width: 1200, height: 800, fit: crop}}})
			height
			width
			altText
			}
			metaDescription
			body { html }
			gallery {
				... on Asset {
					url(transformation: {image: {resize: {width: 300, height: 300, fit: crop}}})
					fullUrl: url
					altText
					width
					height
				}
			}
		}
	}`
	const { data } = await useAsyncQuery(query)
	const article = data.value.article
	const showMainImage = ref(article.showMainImage)
</script>

<template>
	<div>
		<article>
			<!-- BANNER -->
			<div class="banner green-bg-pattern clr-cream">
				<div class="pblock-8">
					<div class="container container--1200 text-center">
						<h1 class="banner__header fs-xl regular clr-yellow mb-2">{{ article.title }}</h1>
						<p>{{ article.metaDescription }}</p>
					</div>
				</div>
			</div>
			<div class="mblock-8">
				<div v-if="showMainImage === true" class="container container--1000">
					<nuxt-img :src="article.mainImage.url" :alt="article.mainImage.altText" :width="article.mainImage.width" :height="article.mainImage.height" format="webp" style="width: 100%; height: 100%" />
				</div>
				<div class="container container--800">
					<div v-html="article.body.html" />
				</div>
				<template v-if="article.gallery">
					<div class="container container--1000">
						<div class="gallery" :class="article.gallery.length >= 3 ? 'gallery--3' : 'gallery--2'">
							<div v-for="image in article.gallery">
								<nuxt-img :src="image.url" :alt="image.altText" :width="image.width" :height="image.height" format="webp" class="gallery__thumbnail enlarge" :data-full="image.fullUrl" :data-alt="image.altText" />
							</div>
						</div>
					</div>
				</template>
			</div>
		</article>
		<div id="galleryModal">
			<span class="arrow left">&#10094;</span>
			<img id="modalImage" src="" />
			<span class="arrow right">&#10095;</span>
		</div>
	</div>
</template>

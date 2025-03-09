<script setup>
	const config = useRuntimeConfig()
	const query = gql`
		query {
			farmersMarketPage(where: { id: "cm80iga5v6god08myvs25usjx" }) {
				title
				banner {
					title
					copy {
						html
					}
				}
				pageImage {
					url
					height
					width
					altText
				}
				copy {
					html
				}
			}
		}
	`
	const { data } = await useAsyncQuery(query)
	const page = data.value.farmersMarketPage
</script>
<template>
	<div>
		<!-- BANNER -->
		<div class="banner green-bg-pattern clr-cream">
			<div class="pblock-8">
				<div class="container container--1400">
					<SplitContent gridGap="8rem" gridColumns="3fr 1fr" alignItems="center">
						<template #leftColumn>
							<h1 class="banner__header fs-xl regular clr-yellow mb-2">{{ page.banner.title }}</h1>
						</template>
						<template #rightColumn> </template>
					</SplitContent>
				</div>
			</div>
		</div>
		<main>
			<div class="container container--1400">
				<div class="mblock-8">
					<SplitContent gridGap="8rem" gridColumns="500px 1fr">
						<template #leftColumn>
							<nuxt-img :src="page.pageImage.url" :alt="page.pageImage.altText" format="webp" style="width: 100%; height: 100%" />
						</template>
						<template #rightColumn>
							<div v-html="page.copy.html" />
						</template>
					</SplitContent>
				</div>
			</div>
		</main>
	</div>
</template>

<style lang="scss" scoped>
	.banner {
		&__header {
			max-width: 590px;
		}
	}
	.sponsors {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 2rem;
		list-style: none;
		padding: 0;
		margin: 0;
	}
</style>

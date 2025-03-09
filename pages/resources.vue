<script setup>
	const config = useRuntimeConfig()
	const query = gql`
		query {
			resource(where: { id: "cm80jbttl75o108mybi9pzqld" }) {
				title
				banner {
					title
					copy {
						html
					}
				}
				copy {
					html
				}
				sponsors {
					... on Link {
						label
						url
						openInNewTab
					}
				}
			}
		}
	`
	const { data } = await useAsyncQuery(query)
	const page = data.value.resource
</script>

<template>
	<div>
		<!-- BANNER -->
		<div class="banner green-bg-pattern clr-cream">
			<div class="pblock-8">
				<div class="container container--1400">
					<SplitContent gridGap="8rem" gridColumns="3fr 1fr" alignItems="center">
						<template #leftColumn>
							<h1 class="banner__header fs-xl regular clr-yellow mb-2">{{ page.title }}</h1>
							<div class="fs-600 bold clr-white">
								<div v-html="page.banner.copy.html" />
							</div>
						</template>
						<template #rightColumn> </template>
					</SplitContent>
				</div>
			</div>
		</div>
		<main>
			<div class="container container--1400">
				<div class="mblock-8">
					<div v-if="page.copy.html" v-html="page.copy.html" class="sponsors fs-600 bold" />
					<ul class="sponsors fs-600 bold">
						<li v-for="sponsor in page.sponsors">
							<a :href="sponsor.url" :target="sponsor.openInNewTab ? '_blank' : ''" class="green">{{ sponsor.label }}</a>
						</li>
					</ul>
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
	ul {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 2rem;
		list-style: none;
		padding: 0;
		margin: 0;
	}
</style>

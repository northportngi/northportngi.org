<script setup>
	const config = useRuntimeConfig()
	const query = gql`
		query {
			aboutPage(where: { id: "cm80h7l9h5nb808my9ztfhist" }) {
				title
				banner {
					title
					copy {
						html
					}
				}
				bios {
					... on Bio {
						name
						bio {
							html
						}
						photo {
							url
							height
							width
							altText
						}
					}
				}
			}
		}
	`
	const { data } = await useAsyncQuery(query)
	const page = data.value.aboutPage
</script>

<template>
	<div>
		<!-- BANNER -->
		<div class="banner green-bg-pattern clr-cream">
			<div class="pblock-8">
				<div class="container container--1400">
					<SplitContent gridGap="8rem" gridColumns="3fr 1.5fr" alignItems="center">
						<template #leftColumn>
							<h1 class="banner__header fs-xl regular clr-yellow">{{ page.banner.title }}</h1>
							<div v-html="page.banner.copy.html" />
						</template>
						<template #rightColumn> </template>
					</SplitContent>
				</div>
			</div>
		</div>
		<main>
			<div class="container container--1400">
				<section class="members">
					<div class="member mblock-8" v-for="bio in page.bios">
						<SplitContent gridColumns="350px 1fr" gridGap="6rem">
							<template #leftColumn>
								<nuxt-img :src="bio.photo.url" :alt="bio.photo.altText" sizes="(max-width: 640px) 100vw, 350px" :modifiers="{ width: bio.photo.width }" :width="bio.photo.altText.width" :height="bio.photo.altText.height" class="banner__flyer" />
							</template>
							<template #rightColumn>
								<h2 class="clr-green mt-0 mb-1 fs-700">{{ bio.name }}</h2>
								<div class="mt-1">
									<div v-html="bio.bio.html" />
								</div>
							</template>
						</SplitContent>
					</div>
				</section>
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
</style>

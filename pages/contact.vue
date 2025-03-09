<script setup>
	const config = useRuntimeConfig()
	const query = gql`
		query {
			simplePage(where: { slug: "contact-us" }) {
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
			}
		}
	`
	const { data } = await useAsyncQuery(query)
	const page = data.value.simplePage
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
							<div v-html="page.banner.copy.html" class="fs-500 bold" />
						</template>
						<template #rightColumn> </template>
					</SplitContent>
				</div>
			</div>
		</div>
		<main>
			<div class="container container--1400">
				<div class="mblock-8">
					<SplitContent gridGap="8rem" gridColumns="1fr 500px">
						<template #leftColumn>
							<p class="fs-600 bold clr-purple">Please get in touch with us by using the contact form below.</p>
							<WufooForm formid="zsyk5p41c95wcl" />
						</template>
						<template #rightColumn>
							<img src="/images/nngi-illustration.webp" alt="Illustration of native flowers" />
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
</style>

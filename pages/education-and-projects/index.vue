<script setup>
	const { data: newsEntries } = await useAsyncData('education-and-projects', () => queryContent('education-and-projects').sort({ date: -1 }).find())
</script>
<template>
	<div>
		<!-- BANNER -->
		<div class="banner green-bg-pattern clr-cream">
			<div class="pblock-8">
				<div class="container container--1400">
					<SplitContent gridGap="8rem" gridColumns="3fr 1fr" alignItems="center">
						<template #leftColumn>
							<h1 class="banner__header fs-xl regular clr-yellow mb-2">Education & Projects</h1>
						</template>
						<template #rightColumn> </template>
					</SplitContent>
				</div>
			</div>
		</div>
		<main>
			<div class="container container--1400">
				<div class="mblock-8">
					<h2 class="clr-green text-center">Videos</h2>
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
					<hr class="mblock-14" />
					<div class="text-center">
						<h2 class="clr-green">Northport Invasives Presentation</h2>
						<p>An Informative presentation given at a Northport Village Board meeting presented by Dr. Monica Zenyuh</p>
						<Button label="Download the Presentation" buttonColor="purple" buttonBorderColor="purple" buttonColorHover="green" buttonBorderColorHover="green" />
					</div>
					<hr class="mblock-14" />
					<div class="text-center">
						<h2 class="clr-green">Education & Past Events</h2>
						<div class="container container--1400">
							<div class="mblock-8">
								<div class="news">
									<Card v-for="entry in newsEntries" :title="entry.title" :teaser="entry.teaser" :path="entry._path" :date="formatDate(entry.date)" />
								</div>
							</div>
						</div>
					</div>
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
	.news {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		gap: 4rem;
	}
	@media (min-width: 576px) {
		.news {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media (min-width: 1024px) {
		.news {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>

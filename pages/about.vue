<script setup>
	const { data: entry } = await useAsyncData('about', () => queryContent('/about').findOne())
</script>

<template>
	<!-- <pre>
	{{ entry }}
	</pre
	> -->
	<div class="pblock-12">
		<h1 class="visually-hidden">{{ entry.title }}</h1>
		<!-- <SplitContent gridGap="6rem">
			<template #leftColumn>
				
			</template>
			<template #rightColumn>
				
			</template>
		</SplitContent> -->
		<h2>{{ entry.mission.title }}</h2>
		<p>{{ entry.mission.statement }}</p>
		<h2>{{ entry.sponsors.header }}</h2>
		<p class="bold fs-500">{{ entry.sponsors.sub_header }}</p>
		<ul class="sponsors m-0 p-0 no-bull">
			<li v-for="sponsor in entry.sponsors.sponsors">
				{{ sponsor }}
			</li>
		</ul>
		<hr />
		<h2>{{ entry.who_we_are.title }}</h2>
	</div>
</template>

<style lang="scss" scoped>
	.sponsors {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2rem;
	}
</style>

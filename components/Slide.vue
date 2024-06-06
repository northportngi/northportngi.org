<script setup>
	const props = defineProps({
		slideBackgroundColor : {
			type: String,
			default: "var(--black)"
		}
	})
</script>
<template>
	<section class="slide">
		<h1>We know the print industry and it's customers.</h1>
		<p>See what we can offer your business.</p>
		<ul>
			<li>Video Production</li>
			<li>Video Production</li>
			<li>Video Production</li>
			<li>Video Production</li>
			<li>Video Production</li>
		</ul>
	</section>
</template>
<style lang="scss" scoped>
	.slide {
		width: 100vw;
		height: 100vh;
		background-color: v-bind('slideBackgroundColor');
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
</style>
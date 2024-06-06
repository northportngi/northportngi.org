<template>
	<div class="leaf">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
			<path fill="#8b9773" d="M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5h88c8.8 0 16 7.2 16 16s-7.2 16-16 16H288 216s0 0 0 0c-16.6 0-32.7 1.9-48.3 5.4c-25.9 5.9-49.9 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440v16c0 13.3 10.7 24 24 24s24-10.7 24-24V440c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z" />
		</svg>
	</div>
	<div class="fw-800 fs-xl clr-red" ref="counterElement">{{ formattedCount }}</div>
	<div class="fs-400">{{ text }}</div>
</template>
<style lang="scss" scoped>
	.leaf {
		background-color: var(--white);
		width: 80px;
		height: 80px;
		border-radius: 500px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto 1rem auto;
		svg {
			width: 60%;
		}
	}
</style>
<script setup>
	import { ref, computed, onMounted, onUnmounted, defineProps } from 'vue'

	// Define props
	const props = defineProps({
		targetCount: {
			type: Number,
			required: true,
		},
		duration: {
			type: Number,
			required: true,
		},
		plusSign: {
			type: Boolean,
			default: false,
		},
		text: {
			type: String,
			required: true,
		},
	})

	const currentCount = ref(0)
	const counterElement = ref(null)

	// Computed property to add "+" sign if needed
	const formattedCount = computed(() => {
		return props.plusSign ? `${currentCount.value}+` : currentCount.value
	})

	const startCounting = () => {
		const startTime = performance.now()
		const updateCount = () => {
			const elapsedTime = performance.now() - startTime
			currentCount.value = Math.min(Math.round((elapsedTime / props.duration) * props.targetCount), props.targetCount)
			if (currentCount.value < props.targetCount) {
				requestAnimationFrame(updateCount)
			}
		}
		requestAnimationFrame(updateCount)
	}

	const observerCallback = (entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				startCounting()
				observer.disconnect()
			}
		})
	}

	let observer

	onMounted(() => {
		observer = new IntersectionObserver(observerCallback, {
			root: null,
			rootMargin: '-200px 0px 0px 0px', // Offset to start at 200px into the page
			threshold: 0.1,
		})
		if (counterElement.value) {
			observer.observe(counterElement.value)
		}
	})

	onUnmounted(() => {
		if (observer && counterElement.value) {
			observer.unobserve(counterElement.value)
		}
	})
</script>

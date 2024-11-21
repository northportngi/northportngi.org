<!-- layouts/error.vue -->
<template>
	<div>
		<h1>Error {{ error.statusCode }}</h1>
		<p>{{ error.statusMessage }}</p>
	</div>
</template>

<script setup>
	const error = useError()
</script>

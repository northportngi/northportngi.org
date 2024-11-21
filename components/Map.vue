<script setup>
	const locations = [
		{ lat: 40.9006, lng: -73.3367, title: 'Northport, NY' },
		{ lat: 40.7891, lng: -73.134, title: 'Smithtown, NY' },
	]

	onMounted(() => {
		// Load Google Maps JavaScript API script
		const script = document.createElement('script')
		script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`
		script.async = true
		script.onload = () => {
			initMap()
		}
		document.head.appendChild(script)
	})

	const initMap = () => {
		const map = new google.maps.Map(document.getElementById('g-mapdisplay'), {
			zoom: 10,
			center: locations[0],
		})

		locations.forEach((location) => {
			new google.maps.Marker({
				position: location,
				map: map,
				title: location.title,
			})
		})
	}
</script>

<template>
	<div style="overflow: hidden; resize: none; max-width: 100%; height: 500px">
		<div id="g-mapdisplay" style="height: 500px; width: 100%; max-width: 100%"></div>
	</div>
</template>

<style scoped>
	#map {
		width: 100%;
		height: 100%;
	}
</style>

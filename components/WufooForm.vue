<script setup>
	import { onMounted } from 'vue'
	const props = defineProps({
		formid: {
			type: String,
			required: true,
		},
	})
	useHead({
		link: [{ rel: 'preload', href: 'https://secure.wufoo.com/scripts/embed/form.js', as: 'script' }],
	})

	onMounted(() => {
		const script = document.createElement('script')
		script.type = 'text/javascript'
		script.async = true
		script.src = 'https://secure.wufoo.com/scripts/embed/form.js'

		script.onload = script.onreadystatechange = function () {
			const rs = this.readyState
			if (rs && rs !== 'complete' && rs !== 'loaded') return
			try {
				const options = {
					userName: 'northportngi',
					formHash: props.formid, // Use `props.formid` to reference the prop
					autoResize: true,
					height: '833',
					async: true,
					host: 'wufoo.com',
					header: 'hide',
					ssl: true,
				}
				const wufooForm = new window.WufooForm()
				wufooForm.initialize(options)
				wufooForm.display()
			} catch (e) {
				console.error(e)
			}
		}

		const container = document.getElementById(`wufoo-${props.formid}`) // Use `props.formid` here too
		if (container) {
			container.appendChild(script)
		} else {
			console.error('Container not found for the form ID.')
		}
	})
</script>

<template>
	<div>
		<div :id="`wufoo-${formid}`">Preparing the <a :href="`https://northportngi.wufoo.com/forms/${formid}`">online form</a>.</div>
	</div>
</template>

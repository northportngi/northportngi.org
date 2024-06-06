<template>
	<div class="priority-links">
		<NuxtLink to="/become-a-distributor" class="priority-links__link text-center">Become a Distributor</NuxtLink>
		<NuxtLink to="/advertise-with-us" class="priority-links__link text-center">Advertise with us</NuxtLink>
	</div>
</template>

<style lang="scss" scoped>
	.priority-links {
		font-family: 'Poppins Medium';
		font-size: clamp(1.3rem, 1.2545rem + 0.1455vw, 1.4rem);
		background-color: var(--blue);
		padding: 1rem;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		&__link {
			text-decoration: none;
			display: inline-block;
			background-color: var(--white);
			color: var(--blue);
			padding: 0.35rem 1rem;
			border-radius: 0.25rem;
			&:last-child {
				color: var(--red);
			}
		}
	}
</style>

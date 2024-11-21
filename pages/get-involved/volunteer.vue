<template>
	<div>
		<!-- BANNER -->
		<div class="banner green-bg-pattern clr-cream">
			<div class="pblock-8">
				<div class="container container--1400">
					<SplitContent gridGap="8rem" gridColumns="4fr 1fr" alignItems="center">
						<template #leftColumn>
							<h1 class="banner__header fs-xl regular clr-yellow mb-2">Volunteer</h1>
							<p class="fs-500">We love the energy of our community and we thrive on volunteers to move forward with our mission.</p>
						</template>
						<template #rightColumn> </template>
					</SplitContent>
				</div>
			</div>
		</div>
		<main>
			<div class="container container--1400">
				<div class="mblock-8">
					<SplitContent gridGap="8rem" gridColumns="1fr 500px ">
						<template #leftColumn>
							<p><strong>Plant sale volunteers can take on one shift or multiple shifts.</strong> <br />Our volunteers will help with sorting plants for orders, organizing orders and helping with pick-up. Thank you for your help!</p>
							<Button label="Liability Waiver" buttonColor="purple" buttonBorderColor="purple" buttonColorHover="green" buttonBorderColorHover="green" />
							<hr class="mblock-6" />
							<WufooForm formid="m7ou7d50ewqn6t" />
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
	.sponsors {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 2rem;
		list-style: none;
		padding: 0;
		margin: 0;
	}
</style>

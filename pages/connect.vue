<template>
	<div>
		<!-- BANNER -->
		<div class="banner green-bg-pattern clr-cream">
			<div class="pblock-8">
				<div class="container container--1400">
					<SplitContent gridGap="8rem" gridColumns="3fr 1fr" alignItems="center">
						<template #leftColumn>
							<h1 class="banner__header fs-xl regular clr-yellow mb-2">Please Get In Touch</h1>
							<p class="fs-500 bold">Have a question about Native Plants or Gardens?</p>
							<p class="fs-500 bold">Interested in one of our lectures?</p>
							<p class="fs-500 bold">Have a project that you would like us to consult on?</p>
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
	.sponsors {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 2rem;
		list-style: none;
		padding: 0;
		margin: 0;
	}
</style>

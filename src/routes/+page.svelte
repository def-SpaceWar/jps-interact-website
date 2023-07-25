<script>
	import SlideShow from './SlideShow.svelte';
</script>

<svelte:head>
	<title>JPS Interact Club</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="hero">
	<div class="left-half">
		<h1 class="title">JPS Interact Club</h1>
		<p class="description">The home of community service at John P. Stevens High School. (PVSA Certified)</p>
	</div>
	<div class="right-half">
		<SlideShow />
	</div>
</section>

<style>
	.hero {
		padding: 0;
		margin: 0;
		height: 70vh;
		width: 100%;
		background: var(--secondary);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.left-half {
		max-width: 50vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: left;
		padding: 0 8rem 0 8rem;
	}

	.title {
		font-weight: 600;
		margin: 0;
		color: var(--primary-bg);
	}

	.description {
		font-size: 1.5rem;
		font-weight: 500;
		margin: 0;
		color: var(--secondary-fg);
	}

	.right-half {
		max-width: 50vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: start;
		padding: 0 8rem 0 0;
	}

	@media only screen and (max-width: 600px) {
		.hero {
			flex-wrap: wrap;
			height: auto;
		}

		.left-half {
			padding: 2rem 2rem 0 2rem;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: start;
			max-width: 100%;
		}

		.right-half {
			padding: 2rem 2rem 4rem 2rem;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			max-width: 100%;
		}
	}
</style>

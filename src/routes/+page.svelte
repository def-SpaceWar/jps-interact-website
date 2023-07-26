<script>
	import SlideShow from './SlideShow.svelte';
</script>

<svelte:head>
	<title>JPS Interact Club</title>
	<meta name="description" content="The home of community service at John P. Stevens High School." />
</svelte:head>

<section class="hero">
	<div class="left-half">
		<h1 class="title">JPS Interact Club</h1>
		<p class="description">
			The home of community service at John P. Stevens High School.
		</p>
		<a href="/about" class="learn-more">
			<button
				>Learn More <img
					src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA50lEQVR4nO2VMQrCQBBFU4kXsFAS8A7Bc1hZCNqKYGFp642ieALPoUm8gl7gycAGEtTZzWYLi3wYAps/eczMbjaKevkKSIAzkCuxN96V4rlqEAHYdDTeneIpNUhhTGsg/RET4x3V1ubA0xVSGtOsZYvvJu8VHALEwK36MLAICuETMJW8YBC+AMx6GAjNGcgzqb2TzbABlt4QmoBHVUEraRCtgppnDByAbWuIawX4zkQOn62CEJABcHGZQafdBQyl3xqgM8RV/BOkcPgLp0pInqjQICfCKNMgch4yy82YW0LyY59294pEb8tfVyAUghyOAAAAAElFTkSuQmCC"
					alt="Learn More Arrow"
				/>
			</button>
		</a>
	</div>
	<div class="right-half">
		<SlideShow />
	</div>
</section>

<style>
	.hero {
		padding: 0;
		margin: 0;
		height: 89vh;
		width: 100%;
		background: var(--secondary);
		opacity: 1;
		background-image: linear-gradient(135deg, #00b4e7 25%, transparent 25%),
			linear-gradient(225deg, #00b4e7 25%, transparent 25%),
			linear-gradient(45deg, #00b4e7 25%, transparent 25%),
			linear-gradient(315deg, #00b4e7 25%, #00a3d4 25%);
		background-position: 10px 0, 10px 0, 0 0, 0 0;
		background-size: 30px 30px;
		background-repeat: repeat;
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
		color: var(--secondary-bg);
	}

	.right-half {
		max-width: 50vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: start;
		padding: 0 8rem 0 0;
	}

	.learn-more {
		margin: 0;
		text-decoration: none;
		margin-top: 1rem;
	}

	.learn-more button {
		padding: 0.6rem 1rem;
		background: var(--secondary-fg);
		font-size: 17px;
		display: flex;
		align-items: center;
		border: none;
	}

	.learn-more button img {
		margin-left: 0.4rem;
		height: 20px;
	}

	.learn-more button:hover {
		cursor: pointer;
		background-color: var(--primary-fg);
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

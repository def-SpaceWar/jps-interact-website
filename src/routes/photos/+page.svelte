<script lang="ts">
	let photos: BigInteger = 25;
	let photosPerColumn: BigInteger = parseInt(photos / 3);
	let photos_1: BigInteger = photosPerColumn;
	let photos_2: BigInteger = photos_1 + photosPerColumn;
	let photos_3: BigInteger = photos_2 + photosPerColumn;
</script>

<svelte:head>
	<title>Photos - JPS Interact Club</title>
	<meta name="description" content="Learn more about the JPS Interact Club" />
</svelte:head>
<h1 class="title">Photos</h1>
<hr />
<div class="container">
	<div class="photo-container">
		<div class="column">
			{#each Array.from(Array(photos_1 + 1).keys()).slice(1) as i}
				<img src={'/photos/' + i + '.png'} alt="Photo of Club" class="photo" />
			{/each}
		</div>
		<div class="column">
			{#each Array.from(Array(photos_2 + 1).keys()).slice(photos_1 + 1) as i}
				<img src={'/photos/' + i + '.png'} alt="Photo of Club" class="photo" />
			{/each}
		</div>
		<div class="column">
			{#each Array.from(Array(photos_3 + 1).keys()).slice(photos_2 + 1) as i}
				<img src={'/photos/' + i + '.png'} alt="Photo of Club" class="photo" />
			{/each}
		</div>
	</div>
</div>

<style>
	hr {
		background: var(--foreground);
		border: 2px solid var(--foreground);
		width: 30%;
	}

	.container {
		padding: 0rem 15% 9rem 15%;
	}

	.title {
		padding: 0;
		margin: 0;
		font-weight: 500;
		/* background-color: var(--primary);
		color: var(--background); */
		padding: 8rem 0rem 0rem 0rem;
		text-align: center;
		font-family: 'Rubik', sans-serif;
	}

	.photo-container {
		display: flex;
		flex-wrap: wrap;
	}

	.column {
		width: 30%;
		margin: 0.2rem 0.2rem;
		display: inline-block;
		overflow: hidden;
	}

	.photo {
		margin: 0;
		margin: 0.1rem 0.1rem;
		width: 100%;
		object-fit: cover;
		min-height: 300px;
		max-height: 400px;
		overflow: hidden;
	}


	
</style>

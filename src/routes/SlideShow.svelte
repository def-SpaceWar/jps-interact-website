<script lang="ts">
	import { fade } from 'svelte/transition';
	import SlideShowIndicator from './SlideShowIndicator.svelte';

	type ImageData = {
		src: string;
		alt: string;
	};

	const images: ImageData[] = [
		{
			src: '/photos/14.png',
			alt: 'Planting Plants'
		},
		{
			src: '/photos/15.png',
			alt: 'Working with a Pipe'
		},
		{
			src: '/photos/20.png',
			alt: 'Group Photo'
		},
		{
			src: 'hero-banner.png',
			alt: 'Pizza Sale'
		}
	];

	let currentImgIdx = 0;
	$: numList = images.map((_, idx) => idx);

	function prevImg() {
		currentImgIdx--;
		if (currentImgIdx < 0) {
			currentImgIdx = images.length - 1;
		}
	}

	function nextImg() {
		currentImgIdx++;
		if (currentImgIdx > images.length - 1) {
			currentImgIdx = 0;
		}
	}

	function setImage(idx: number) {
		return () => (currentImgIdx = idx);
	}
</script>

<div id="slideshow">
	<button on:click={prevImg} id="prev">
		<!-- <svg viewBox="10 0 100 100" xmlns="http://www.w3.org/2000/svg" width="50" height="50">
			<polygon points="80 0 20 50 80 100 100 100 40 50 100 0" />
		</svg> -->
		<img
			src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB6klEQVR4nO3csYoUQRRG4R/BhzAyEkRFRM0uc7N5TVMxMloRBB9HXFx20V11A0EZHHGRFXsMug7d54OKZoILhyo6qUokSZIW7MboAfTT/SSvklwm+ZrkKMm9/W+a2SbJpyTf/1gfk9yde5i12yQ5vybGr/Vy9IBrUn/ZGVfX6egh16ImxNitk9GDrsHmH8fU1fV89LBLtzkgxockt0cPvGQ18ZjarbMkT0cPvGRlDI4yBkcZg6OMwVHG4ChjcJQxOMoYHGUMjjIGRxmDo4zBUcbgKGNwlDE4yhgcZQyOMgZHGYOjjMFRxuAoY3CUMTjKGBxlDI4yBocxQIwBYgwQY4AYA8QYIMYAeXjANbKTJI9GD7x0r43Bejtkyr2+M+/0zRdkynF1nOTBTDOt3puJR9Z7H3yZx5MkX4zC0kkuJkY59vgyymq5U4CMAmQUIKMAGQWo/STmaaPwtFF42ig8bRSeNgpPG4WnjcLTRuFpo/C0UXjaKDxtFJ42Ck8bhaeNwtNG4Wmj8LRReNooPG0UnjYKTxuFp43C00bhaaPwtFF4tgdcr3uX5Nbogddge0CUZ6OHXYvtxCi7XSJQlN0FVIGivJhzGP2O8vmaGKdJ7uz/o5k9TvI2ybckl0mOfFWC4eb+fRZJkqT8lx/On7P41G+AEgAAAABJRU5ErkJggg=="
			alt="previous"
		/>
	</button>
	<button on:click={nextImg} id="next">
		<!-- <svg viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg" width="50" height="50">
			<polygon points="20 0 80 50 20 100 0 100 60 50 0 0" />
		</svg> -->
		<img
			src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABvUlEQVR4nO3du0okURRG4d/LmwijmbA3UvPMJgYihvoywiReMFAbgxahTUSxReyzhlofVL7pRZ2qZFcnkiRJP7Dlr8dwmOQ8yWOSRZLTJAejh5pzjPsky3fXbZJp9HBzdP5BjLfrziibtb06pj4LYpQBHr4IsvRO2ayTNYIsjbI5e6sHuFFAKsn1N6L8HT3wHBgFyChARgEyCpBRgIwCVL4S85RReMooPGUUnjIKTxmFp4zCU0bhKaPwlFF4yig8ZRSeMgpPGYWnjMJTRuEpo/CUUXjKKDxlFJ4yCk8ZhaeMwlNG4Smj8JRReMooPNNqQ2udTa7XNbw/oweeg+kbUY5HDzsXtebx9W/0oHPRSW7WCHI1etA5mDyyOCYf6v/fMbX0qxK/zxgg7Z3B0cbgaGNwtDE42hgcbQyONgZHG4OjjcHRxuBoY3C0MTjaGBxtDI42Bkcbg6ONwdHG4GhjcLQxONoYHG0MjjYGRxuDo43BYQwQY4AYA8QYIMYAMQaIMUD2/etVljPXyDh2kizc6ePYTfLsgiXLpduuLEdJHj/5uMvr3rgGRblYHV9PSU790g7nIb89eghJkqT8lhfcmbLovD1dtwAAAABJRU5ErkJggg=="
			alt="next"
		/>
	</button>
	{#each numList as indexNum (indexNum)}
		{#if indexNum == currentImgIdx}
			<img src={images[indexNum].src} alt={images[indexNum].alt} transition:fade class="img" />
		{/if}
	{/each}
	<div id="indicator">
		{#each numList as indexNum (indexNum)}
			<SlideShowIndicator
				{indexNum}
				selected={indexNum == currentImgIdx}
				on:click={setImage(indexNum)}
			/>
		{/each}
	</div>
</div>

<style>
	.img {
		position: absolute;
		width: 35vw;
		top: 50%;
		transform: translateY(-50%);
		border-radius: 10px;
	}

	button {
		padding-top: 7px;
		border: none;
		transform: translateY(-50%);
		top: 50%;
		/* background-color: var(--nav-title-fg); */
		background: transparent;
	}

	/* button:hover {
		background-color: var(--nav-hover-fg);
	} */

	#slideshow {
		position: relative;
		width: 35vw;
		height: 35vh;
	}

	#prev {
		position: absolute;
		right: 100.1%;
		border-radius: 10px 0px 0px 10px;
	}
	#prev img {
		width: 50px;
		filter: invert(100%);
	}

	button[id='prev']:hover,
	button[id='next']:hover {
		cursor: pointer;
	}

	#next {
		position: absolute;
		left: 100%;
		border-radius: 0px 10px 10px 0px;
	}

	#next img {
		width: 50px;
		filter: invert(100%);
	}

	#indicator {
		position: absolute;
		top: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
	}

	@media only screen and (max-width: 600px) {
		#slideshow {
			width: 60vw;
			height: 25vh;
		}

		.img {
			width: 60vw;
		}
	}
</style>

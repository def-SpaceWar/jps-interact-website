<script lang="ts">
	import { fade } from 'svelte/transition';
	import SlideShowIndicator from './SlideShowIndicator.svelte';

	type ImageData = {
		src: string;
		alt: string;
	};

	const images: ImageData[] = [
		{
			src: 'banner.png',
			alt: 'Interact Club Banner'
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
		<svg viewBox="10 0 100 100" xmlns="http://www.w3.org/2000/svg" width="50" height="50">
			<polygon points="80 0 20 50 80 100 100 100 40 50 100 0" />
		</svg>
	</button>
	<button on:click={nextImg} id="next">
		<svg viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg" width="50" height="50">
			<polygon points="20 0 80 50 20 100 0 100 60 50 0 0" />
		</svg>
	</button>
	{#each numList as indexNum (indexNum)}
		{#if indexNum == currentImgIdx}
			<img src={images[indexNum].src} alt={images[indexNum].alt} transition:fade />
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
	img {
		position: absolute;
		width: 35vw;
		top: 50%;
		transform: translateY(-50%);
		border-radius: 10px;
	}

	button {
		padding-top: 7px;
		margin-left: 10px;
		margin-right: 10px;
		border: none;
		transform: translateY(-50%);
		top: 50%;
		background-color: var(--nav-title-fg);
	}

	button:hover {
		background-color: var(--nav-hover-fg);
	}

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

	button[id='prev']:hover,
	button[id='next']:hover {
		cursor: pointer;
	}

	#next {
		position: absolute;
		left: 100%;
		border-radius: 0px 10px 10px 0px;
	}

	#indicator {
		position: absolute;
		top: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
	}

	svg {
		fill: var(--primary-bg);
	}
</style>

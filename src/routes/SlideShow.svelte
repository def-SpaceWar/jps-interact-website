<script lang="ts">
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
	$: currentImg = images[currentImgIdx];
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
		<svg
			viewBox="10 0 100 100"
			xmlns="http://www.w3.org/2000/svg"
			width="50"
			height="50"
			id="selected"
		>
			<polygon points="100 0 20 50 100 100" />
		</svg>
	</button>
	<img src={currentImg.src} alt={currentImg.alt} width="100%" />
	<button on:click={nextImg} id="next">
		<svg
			viewBox="0 0 80 100"
			xmlns="http://www.w3.org/2000/svg"
			width="50"
			height="50"
			id="selected"
		>
			<polygon points="0 0 80 50 0 100" />
		</svg>
	</button>
	<div id="indicator">
		{#each numList as indexNum}
			{#if indexNum == currentImgIdx}
				<button id="invisible">
					<svg
						viewBox="0 0 100 100"
						xmlns="http://www.w3.org/2000/svg"
						width="10"
						height="10"
						id="selected"
					>
						<circle cx="50" cy="50" r="50" />
					</svg>
				</button>
			{:else}
				<button on:click={setImage(indexNum)} id="invisible" class="clickable">
					<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="10" height="10">
						<circle cx="50" cy="50" r="50" />
					</svg>
				</button>
			{/if}
		{/each}
	</div>
</div>

<style>
	img {
		height: auto;
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
		width: 100%;
	}

	#prev {
		position: absolute;
		right: 100.1%;
		border-radius: 10px 0px 0px 10px;
	}

	.clickable:hover,
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

	#invisible {
		background-color: transparent;
		padding: 30px 0px 0px 0px;
	}

	svg {
		fill: var(--nav-title-fg);
	}

	#selected {
		fill: var(--primary-bg);
	}
</style>

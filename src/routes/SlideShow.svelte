<script lang="ts">
	type ImageData = {
		src: string;
		alt: string;
	};
	const images: ImageData[] = [
		{
			src: 'banner.png',
			alt: 'Pizza Sale'
		},
		{
			src: 'hero-banner.png',
			alt: 'Pizza Sale'
		}
	];

	let currentImgIdx = 0;
	$: currentImg = images[currentImgIdx];

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
</script>

<div id="slideshow">
	<button on:click={prevImg} id="prev">{'<'}</button>
	<img src={currentImg.src} alt={currentImg.alt} width="100%" />
	<button on:click={nextImg} id="next">{'>'}</button>
</div>

<style>
	img {
		height: auto;
		border-radius: 10px;
	}

	button {
		font-size: 50px;
		padding: 0px 3px 0px 3px;
		margin: 0px;
		width: fit-content;
        border: none;
		height: 80px;
		transform: translateY(-50%);
        top: 50%;
        background-color: var(--nav-title-fg);
    }

	button:hover {
		cursor: pointer;
	}

	#slideshow {
		position: relative;
		min-width: 100%;
	}

	#prev {
		position: absolute;
		right: 100.1%;
		border-radius: 10px 0px 0px 10px;
	}

	#next {
		position: absolute;
		left: 100%;
		border-radius: 0px 10px 10px 0px;
	}
</style>

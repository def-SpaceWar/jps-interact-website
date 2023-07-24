<script lang="ts">
	import { fade } from 'svelte/transition';
	import inView from '../inView.js';
	let animated = false;
</script>

<svelte:head>
	<title>About - JPS Interact Club</title>
	<meta name="description" content="Learn more about the JPS Interact Club" />
</svelte:head>
<h1 class="title">ABOUT US</h1>
<hr />
<div class="container">
	<p>
		The Interact Club is a subset of the Rotary club that aims to provide service and leadership
		opportunities to high school students. Students can participate in a variety of volunteering
		opportunities ranging from assisting in marches to organizing school events. Club officers gain
		leadership skills by managing meetings and organizing events.
	</p>

	<p>
		Club membership varies greatly. They can draw from the student body of a single high school or
		from two or more high schools in the same community. Each year, Interact clubs complete
		community service projects, many of which furthers international understanding and goodwill.
	</p>

	<p>
		Interact is Rotary International's service club for young people ages 12 to 18. Interact clubs
		are sponsored by individual Rotary clubs, which provide support and guidance, but they are
		self-governing and self-supporting. Through these efforts, Interactors develop a network of
		friendships with local and overseas clubs and learn the importance of developing leadership
		skills and personal integrity, demonstrating helpfulness and respect for others, understanding
		the value of individual responsibility and hard work and advancing international understanding
		and goodwill.
	</p>
</div>
<div
	use:inView={{ threshold: 0.3 }}
	on:enter={() => {
		animated = true;
	}}
	on:exit={() => {
		animated = false;
	}}
	class="board"
>
	<h1>Our Board Team</h1>
	{#if animated}
		<div
			transition:fade={{
				duration: 500
			}}
			class="board-members-container"
		>
			<div class="board-member">
				<img src="hero-banner.png" />
				<h1>Person Name</h1>
				<h5>Chief Executive Officer</h5>
			</div>
			<div class="board-member">
				<img src="hero-banner.png" />
				<h1>Person Name</h1>
				<h5>Chief Executive Officer</h5>
			</div>
			<div class="board-member">
				<img src="hero-banner.png" />
				<h1>Person Name</h1>
				<h5>Chief Executive Officer</h5>
			</div>
			<div class="board-member">
				<img src="hero-banner.png" />
				<h1>Person Name</h1>
				<h5>Chief Executive Officer</h5>
			</div>
			<div class="board-member">
				<img src="hero-banner.png" />
				<h1>Person Name</h1>
				<h5>Chief Executive Officer</h5>
			</div>
			<div class="board-member">
				<img src="hero-banner.png" />
				<h1>Person Name</h1>
				<h5>Chief Executive Officer</h5>
			</div>
		</div>
	{/if}
</div>

<style>
	hr {
		background: var(--foreground);
		border: 2px solid var(--foreground);
		width: 30%;
	}

	.container {
		padding: 0rem 20% 8rem 20%;
	}

	.container p {
		font-size: 1.2rem;
	}

	.title {
		padding: 0;
		margin: 0;
		font-weight: 500;
		/* background-color: var(--primary);
		color: var(--background); */
		padding: 8rem 8rem 0rem 8rem;
		text-align: center;
		font-family: 'Rubik', sans-serif;
	}

	.board {
		background-color: var(--secondary);
		color: var(--background);
		padding: 6rem 8rem 6rem 8rem;
	}

	.board h1 {
		padding: 0;
		margin: 0;
		font-weight: 500;
	}

	.board-members-container {
		display: flex;
		flex-wrap: wrap;
	}

	.board-member {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 1rem 1rem;
		padding: 1rem;
		border-radius: 10px;
		border: 5px double var(--secondary-bg);
	}

	.board-member img {
		width: 200px;
		height: 200px;
		object-fit: cover;
		border-radius: 9999px;
	}

	.board-member h1 {
		margin: 0;
		margin-top: 0.3rem;
		padding: 0;
		font-size: 23px;
	}

	.board-member h5 {
		margin: 0;
		margin-top: 0.1rem;
		font-weight: 400;
		color: var(--secondary-fg);
		padding: 0;
		font-size: 17px;
	}
</style>

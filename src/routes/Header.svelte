<script>
	import { fade } from 'svelte/transition';

	let dropdown = false;
</script>

<header>
	<nav class="header">
		<div class="logo-container">
			<a href="/">
				<h1 class="name">JPS INTERACT CLUB</h1>
			</a>
			<a href="/">
				<img src="title-icon.png" alt="Interact Club's Logo" id="interact_gear" />
			</a>
		</div>
		<div class="links-container">
			<a href="/">
				<p class="link">Home</p>
			</a>
			<a href="/about">
				<p class="link">About Us</p>
			</a>
			<!-- <a href="/board">
				<p class="link">Board</p>
			</a> -->
			<a href="/hours">
				<p class="link">Hours</p>
			</a>
			<a href="/events">
				<p class="link">Events</p>
			</a>
			<a href="/resources">
				<p class="link">Resources</p>
			</a>
			<a href="/photos">
				<p class="link">Photos</p>
			</a>
		</div>
		<div class="burger" on:click={() => (dropdown = !dropdown)}>
			<div class="line" />
			<div class="line" />
			<div class="line" />
		</div>
		{#if dropdown}
			<div transition:fade class="dropdown">
				<a href="/">
					<p class="first">Home</p>
				</a>
				<a href="/about">
					<p class="link">About Us</p>
				</a>
				<!-- <a href="/board">
					<p class="link">Board</p>
				</a> -->
				<a href="/hours">
					<p class="link">Hours</p>
				</a>
				<a href="/events">
					<p class="link">Events</p>
				</a>
				<a href="/resources">
					<p class="link">Resources</p>
				</a>
				<a href="/photos">
					<p class="link">Photos</p>
				</a>
			</div>
		{/if}
	</nav>
</header>

<style>
	.header {
		display: flex;
		padding-left: 8rem;
		padding-right: 8rem;
		margin: 0 auto;
		justify-content: space-between;
		background-color: var(--secondary);
	}

	.logo-container {
		display: flex;
		align-items: center;
	}

	.logo-container img {
		height: 3rem;
		margin-left: 0.5rem;
	}

	.name {
		font-weight: 500;
		font-family: 'Rubik', sans-serif;
		font-size: 2rem;
		margin-top: 1.3rem;
		margin-bottom: 1.3rem;
		color: var(--nav-title-fg);
	}

	.links-container {
		display: flex;
		justify-content: end;
		align-items: center;
	}

	.link {
		font-size: 1.03rem;
		color: var(--background);
		margin: 0 1rem 0 1rem;
		transition: var(--transition-length) ease-in-out;
	}

	.link:hover {
		color: var(--nav-hover-fg);
		transition: var(--transition-length) ease-in-out;
	}

	a {
		text-decoration: none;
	}

	#interact_gear {
		animation: rotate ease-in-out 5s infinite;
	}

	.burger {
		display: none;
	}

	.line {
		border: 2px solid var(--secondary-fg);
		margin-top: 0.2rem;
		margin-bottom: 0.2rem;
		width: 25px;
	}

	.first {
		margin: 1rem 2rem;
		margin-top: 8rem;
		font-size: 20px;
		color: var(--background);
		transition: var(--transition-length) ease-in-out;
	}

	.first:hover {
		color: var(--nav-hover-fg);
		transition: var(--transition-length) ease-in-out;
	}

	@keyframes rotate {
		0% {
			rotate: 0deg;
		}
		75% {
			rotate: 360deg;
		}
		100% {
			rotate: 360deg;
		}
	}

	@media only screen and (max-width: 600px) {
		.header {
			padding-left: 2rem;
			padding-right: 2rem;
		}

		.name {
			font-size: 1rem;
			margin: 0;
		}

		.logo-container {
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 1rem 0;
			position: relative;
			z-index: 21;
		}

		.logo-container h1 {
			display: none;
		}
		.logo-container img {
			height: 3.5rem;
			margin-left: -0.1rem;
			animation: rotate ease-in-out 25s infinite;
		}

		.links-container {
			display: none;
		}

		.burger {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			position: relative;
			z-index: 21;
		}

		.dropdown {
			height: 100%;
			width: 100%;
			top: 0;
			left: 0;
			z-index: 20;
			position: absolute;
			background-color: var(--secondary);
		}

		.link {
			margin: 1rem 2rem;
			font-size: 20px;
		}
	}
</style>

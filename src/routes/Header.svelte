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
				<p class="link">About</p>
			</a>
			<a href="/board">
				<p class="link">Board</p>
			</a>
			<a href="/hour">
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
		font-size: 1.15rem;
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

	@keyframes rotate {
		0% {
			rotate: 0deg;
		}
		50% {
			rotate: 360deg;
		}
		100% {
			rotate: 360deg;
		}
	}
</style>

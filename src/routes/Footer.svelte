<div class="footer">
	<div>
		<div class="flex">
			<h3 class="title">JPS Interact Club</h3>
			<img src="favicon.png" class="gear" alt="Intaract Gear" />
		</div>
		<p class="description">The home of community service at JPS High School where service, leadership, and community collide!</p>
		<div class="flex social">
			<img
				src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAACXBIWXMAAAsTAAALEwEAmpwYAAABPklEQVR4nO3WvUseQRTF4SeKmEEIWKgEYmFhm0bS2KWys0iwE2ws0wQE/wUrOy3tUloYO6t0NqksksYinU1IQASRxKxMuMKyvh/7fmy3Bw473Dtzfsvs7rC0ajVmzWOlQS90gs7gDEUD/oIXZdhzfCyNT8YMPIlcwfk/TtHci8YkjsYE/ISpyN2NWipDsw8wgWfYHxF42CXrCbTb3Q3qXruWOkGzTx+b+ID7mrB/2Il10zjuMKcrtPrGbeJPH+BfbNf4ElIvaPZXzEXQOm67zLvDRsybxXmPzL7Q7G94FYFvcV3p32At+i9x0Scv1YFm/8ByBL/Bz6j/xmrUl3BZIyvVhWZf4XUAFrEVV1G/qpmTBoFm/8K7yvH5PupFU9Ci9Jw/4/sQa9Ow0FGcWmjR9PZONPzHsFJx5rVqZWQ9AOWkkdhD+jHfAAAAAElFTkSuQmCC"
				alt="Email Icon"
			/>

			<p>thejpsinteractclub@gmail.com</p>
		</div>
		<div class="flex social">
			<img
				src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAACXBIWXMAAAsTAAALEwEAmpwYAAABvUlEQVR4nM2Wy0oCURjHf67LV0htGymVYtvKtvUUXSCkNwiEUlelzxC09/YG1Tt02wi6y2XaqjjwV8ZhZpzRU/iDYfBcvr/nu5z5YAmJA2mgEOFJa19kdoE28A2MgC7wEeLpar15WkA+jFgMuAaGwC2wyXyYfXeyU5JdX4xgD9jCDttAX8K+Lh1aFByzI7s5PGjLpYtiXFsH1h1jNaDpXhhX0swbQycPwI+Ex2SUXKt4DAYGHEgBVeAJeNe7AiRdYboHNhxjMdk35TRhXwEP4tJRCifAEXCq3yZmxRn7+9KZcKCsDRL8BPZ85o2xwQzhnnRCiaZ0Ej/BMQWtS9gQrcqFYegAZRuiz4pdGM6UXAuLvippwmDWvfz3Sc+BRxuilYgxvbEhmlRWTtWYB4fAF7BmQxTV30Bl4Sdo5i/wp+cWDXMjFXXijrL0WDHs6IRBgp43Uti7N6E6NMnypnc5wKWBd29cgza+Ml5kZH/FPdFSi/EX1IGG10ReMTMthk1yOmXWb0FJATcthg2ysnc1K+Al/bOaYjEPGbl0JMFZCTpxSdPRw0bpe8e9ciPIpUGYnsZkdJQO36yf6oWWgl+fgI+y3MelkQAAAABJRU5ErkJggg=="
				alt="Instagram Icon"
			/>

			<p>@jps.interact</p>
		</div>
	</div>
	<div class="quick_links">
		<div class="link-container">
			<h2>QUICK LINKS</h2>
			<a href="/"><p>Home</p></a>
			<a href="/about"><p>About Us</p></a>
			<a href="/hours"><p>Hours</p></a>
			<a href="/events"><p>Events</p></a>
			<a href="/resources"><p>Resources</p></a>
		</div>
	</div>
	<div class="quick_links">
		<div class="link-container">
			<div>
				<a href="/photos"><p>Photos</p></a>
				<a href="/service-projects"><p>Service Projects</p></a>
			</div>
			<h2 style="padding-top: 1rem">CREDITS (Website Developers)</h2>
			<a href="https://github.com/def-SpaceWar"><p>Aryan Ahire</p></a>
			<a href="https://github.com/Taptaplit"><p>Vismay Patel</p></a>
		</div>
	</div>
</div>

<style>
	.footer {
		padding: 3rem 8rem 3rem 8rem;
		background-color: var(--secondary-bg);
		color: var(--footer-text);
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 0.4fr) minmax(0, 0.4fr);
	}

	.gear {
		height: 50px;
	}

	.title {
		font-weight: 500;
		font-size: 2rem;
		width: fit-content;
		margin: 0;
		margin-right: 0.6rem;
		color: var(--logo-color);
		font-family: 'Rubik', sans-serif;
	}

	.flex {
		display: flex;
		justify-content: start;
		align-items: center;
	}

	.description {
		width: 60%;
		font-weight: 400;
		font-size: 16px;
		color: var(--light-gray);
	}

	.quick_links {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.quick_links h2 {
		font-weight: 600;
		font-size: 14px;
		margin: 0;
		margin-bottom: 0.7rem;
	}

	.link-container p {
		font-size: 17px;
		margin: 0;
	}

	.link-container a {
		display: flex;
		text-decoration: none;
		color: var(--light-gray);
		transition: 200ms ease-in-out;
		margin: 0.7rem 0;
	}

	.link-container a:hover {
		color: var(--secondary);
		font-weight: 500;
	}

	.social p {
		margin: 0;
		margin-left: 0.5rem;
		font-size: 17px;
	}

	.social {
		margin: 0.7rem 0;
	}

	@media only screen and (max-width: 600px) {
		.footer {
			display: flex;
			flex-direction: column;
			padding: 3rem 2rem;
		}

		.social p {
			font-size: 15px;
		}

		.social img {
			height: 25px;
		}

		.quick_links {
			display: flex;
			flex-direction: column;
			align-items: start;
			margin-top: 1rem;
		}
	}
</style>

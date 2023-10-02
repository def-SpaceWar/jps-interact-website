<script lang="ts">
	import { fade } from 'svelte/transition';
	import inView from '../in_view';
	import BoardMemberCard from './BoardMemberCard.svelte';
	let animated = false;
</script>

<svelte:head>
	<title>About Us - JPS Interact Club</title>
	<meta name="description" content="Learn more about the JPS Interact Club" />
</svelte:head>
<h1 class="title">ABOUT US</h1>
<hr />
<div class="container">
	<p>J.P. Stevens High School Interact Club: Where Service, Leadership, and Community Collide!</p>

	<p>
		The Interact Club at J.P. Stevens High School is a vibrant and purpose-driven student
		organization affiliated with Rotary International. Committed to empowering young minds, the club
		offers diverse opportunities for service, leadership, and personal growth. Through a wide array
		of engaging projects and initiatives, Interact Club members actively contribute to their local
		and global communities, fostering understanding, compassion, and positive change.
	</p>

	<p>
		Are you ready to make a meaningful impact? Look no further than the J.P. Stevens High School
		Interact Club – your gateway to a world of service, leadership, and personal growth. As a proud
		subset of Rotary International, we're dedicated to nurturing the next generation of
		compassionate change-makers.
	</p>
	<h1 class="sub-title">🌟 What Sets Us Apart? 🌟</h1>
	<h3 class="sub-heading">Diversity in Opportunity</h3>
	<p>
		With over 20 distinct and unique avenues for involvement, every member of our Interact Club
		finds their perfect fit. From lending a hand in local marches to spearheading school-wide
		events, you'll have the chance to immerse yourself in a variety of impactful projects.
	</p>
	<h3 class="sub-heading">Presidential Volunteer Service Award Certified</h3>
	<p>
		Our commitment to service excellence has earned us the prestigious Presidential Volunteer
		Service Award certification. This means your dedication won't go unnoticed – it will be
		recognized on a national stage, showcasing your outstanding contributions to the community.
	</p>
	<h1 class="sub-title">🤝 Join Us, Be A Leader 🤝</h1>
	<h3 class="sub-heading">Leadership Redefined</h3>
	<p>
		As a member of the J.P. Stevens Interact Club, you won't just follow the leader – you'll become
		one. Our club officers gain invaluable leadership skills by steering meetings and orchestrating
		events, setting the stage for a future filled with confident decision-making.
	</p>
	<h3 class="sub-heading">Community Unity</h3>
	<p>
		Our membership extends beyond the confines of J.P. Stevens High School, drawing students from
		neighboring institutions to create a dynamic, collaborative environment. Together, we're a
		powerhouse of positivity, actively transforming our community and beyond.
	</p>
	<h1 class="sub-title">🌎 Connecting Beyond Borders 🌎</h1>
	<h3 class="sub-heading">Global Perspective</h3>
	<p>
		Interact isn't just a local endeavor – it's a worldwide movement. Through partnerships with
		Rotary clubs, we forge international friendships, fostering a deep appreciation for diverse
		cultures and perspectives.
	</p>
	<h3 class="sub-heading">Core Values in Action</h3>
	<p>
		By embracing personal integrity, demonstrating helpfulness, and showing respect for others,
		you'll embody the very essence of what it means to be an Interactor. Your dedication will
		contribute to advancing international understanding and goodwill, leaving a lasting legacy of
		positive change.
	</p>
	<p class="other-text">
		Ready to seize your moment and make a difference? Join the J.P. Stevens High School Interact
		Club today, where service, leadership, and community collide in a symphony of impact and
		inspiration.
	</p>
	<a href="https://classroom.google.com/c/NDkyMjY1NjMyMTg4?cjc=vqq5njd"> Join Here </a>
</div>

<div
	use:inView={{ threshold: 0.05 }}
	on:focusin={() => {
		animated = true;
	}}
	on:focusout={() => {
		animated = false;
	}}
	class="board"
>
	<h1>Meet the Executive Board</h1>
	{#if animated}
		<div transition:fade={{ duration: 500 }} class="board-members-container">
			<div class="row-bm">
				<BoardMemberCard name="Hassan Rizwan" image="hassan.png" title="Co-President" />
				<BoardMemberCard name="Arnav Sadeesh" image="arnav.png" title="Co-President" />
			</div>
			<div class="row-bm m-bm">
				<BoardMemberCard name="Dhruba Bhattacharjee" image="dhruba.png" title="Vice President" />
				<BoardMemberCard name="Janvi Mudnaik" image="janvi.png" title="Secretary" />
				<BoardMemberCard name="No Name" image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADx0lEQVR4nO2cW4iMYRjHH2c55FCUC+dCCBdEFIUbN65QlEihFKLccCFu5FZJ4kJCWmkdZp5n1sZsKJG4ImIj5HDh0F44lr++d7817KHd2Znve9+Z/f/qX9tOM828v573+97D94oQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEJIOcijr2QwwiX6m6QI0EuyWCSKg2K4LoZ3YsB/UbyNXzsgOSx07yFlJo8hYtgthsY2AjpPoyh2SR0G00upAL1EsUEUH7ohonXlvBfDelZMd6nHMDFcKFlE21yRHEayWorBMEEMTxOQ8W83NplSukIG48XwJkEZLXkt9RhHKZ11U4onKchoyWO5hKGU0nFXVZOijJaL/TkKaQ/FqtRlFLKSUv6lBv3F8NKjkEa5j36UUqiOTR5lIO66NlBI4dpxz7sQwx0KichiSgAy4JLBJEpRbPMuwv5mK4UYzgQgAi6K0xSiuB+QkLsU0t6ahnnLGwoxNAUgAnGaKETxJQARiPOJQhSvAhCBOC8pRHEzABFwUeQpRHHMuwj7m6MUYlgbgAjEWUMhilGi+BmAjB9cay/M9l4OQEgtq6MgZJl3IRksppBw7rauU0bbJdxZoviVuozm69cMCml/k8NeD9WxhzI6Yj96i+JiijJquLW0M/IYKIr6FLqqa6IYwOroCooBYjifoIxzbqcLKXLnu2GnKL6VUcZXUWynh1JQTHYDR8XvEioiem8tNzGUkwzmiOFkkesnn0VxQnKYXdbvQlpdXxRLRLFPFGfFcEsMD+Pccv+LXotG3rxOEEIIIYSQCqMWw93trmFHPB6JVhkb3O2u4oVL861vgyguufFHNCqPbn+jZxdJieTRN15JPCKG52WYv3rmPiuLpTwTpRgU88RwShQfE5xcjD77lGQxl4XT0TqIYbkoriY+7d42t8WwWmrQh3KaKyLqlh55EIFWeeS+S4/FMMY9IFPKLK4l0p1d7XknPCi2BPYYAlqlSbLYLD1kefZEAA2OLlbLabmCQVKV5DDWPTLmu5Gt6DyQOkyUqiKHafHRe74bF92slA9Sh5lSFVS6DKsmKdUiw6pBSh1Gp3QQGVLOa/fbKopo1BttRPPfeEioUm5U1nyY4rD3RrPEc0gqgixWBDf6tkSq5Lf7rRVwEFmSp4kisDS6wW6w5LAugEZCytkowaKwABoIKadBAl7TCHnCEAnle5iPNUSbov03DrxEMV2CI4P5PVjIAgkOw1TvDWOeEp0bGSSG494bx1LPcamAx5ujU6pXV3UUq9xvJYQQQiQM/gDlxS+/wbJ4AwAAAABJRU5ErkJggg==" title="Historian" />
				<BoardMemberCard name="No Name" image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADx0lEQVR4nO2cW4iMYRjHH2c55FCUC+dCCBdEFIUbN65QlEihFKLccCFu5FZJ4kJCWmkdZp5n1sZsKJG4ImIj5HDh0F44lr++d7817KHd2Znve9+Z/f/qX9tOM828v573+97D94oQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEJIOcijr2QwwiX6m6QI0EuyWCSKg2K4LoZ3YsB/UbyNXzsgOSx07yFlJo8hYtgthsY2AjpPoyh2SR0G00upAL1EsUEUH7ohonXlvBfDelZMd6nHMDFcKFlE21yRHEayWorBMEEMTxOQ8W83NplSukIG48XwJkEZLXkt9RhHKZ11U4onKchoyWO5hKGU0nFXVZOijJaL/TkKaQ/FqtRlFLKSUv6lBv3F8NKjkEa5j36UUqiOTR5lIO66NlBI4dpxz7sQwx0KichiSgAy4JLBJEpRbPMuwv5mK4UYzgQgAi6K0xSiuB+QkLsU0t6ahnnLGwoxNAUgAnGaKETxJQARiPOJQhSvAhCBOC8pRHEzABFwUeQpRHHMuwj7m6MUYlgbgAjEWUMhilGi+BmAjB9cay/M9l4OQEgtq6MgZJl3IRksppBw7rauU0bbJdxZoviVuozm69cMCml/k8NeD9WxhzI6Yj96i+JiijJquLW0M/IYKIr6FLqqa6IYwOroCooBYjifoIxzbqcLKXLnu2GnKL6VUcZXUWynh1JQTHYDR8XvEioiem8tNzGUkwzmiOFkkesnn0VxQnKYXdbvQlpdXxRLRLFPFGfFcEsMD+Pccv+LXotG3rxOEEIIIYSQCqMWw93trmFHPB6JVhkb3O2u4oVL861vgyguufFHNCqPbn+jZxdJieTRN15JPCKG52WYv3rmPiuLpTwTpRgU88RwShQfE5xcjD77lGQxl4XT0TqIYbkoriY+7d42t8WwWmrQh3KaKyLqlh55EIFWeeS+S4/FMMY9IFPKLK4l0p1d7XknPCi2BPYYAlqlSbLYLD1kefZEAA2OLlbLabmCQVKV5DDWPTLmu5Gt6DyQOkyUqiKHafHRe74bF92slA9Sh5lSFVS6DKsmKdUiw6pBSh1Gp3QQGVLOa/fbKopo1BttRPPfeEioUm5U1nyY4rD3RrPEc0gqgixWBDf6tkSq5Lf7rRVwEFmSp4kisDS6wW6w5LAugEZCytkowaKwABoIKadBAl7TCHnCEAnle5iPNUSbov03DrxEMV2CI4P5PVjIAgkOw1TvDWOeEp0bGSSG494bx1LPcamAx5ujU6pXV3UUq9xvJYQQQiQM/gDlxS+/wbJ4AwAAAABJRU5ErkJggg==" title="Treasurer" />
			</div>
			<div class="row-bm">
			<BoardMemberCard name="Ms. Susan Kacani" image="ms-susan.png" title="Advisor" />
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
		padding: 0rem 15% 8rem 15%;
	}

	.container p {
		font-size: 1.2rem;
	}

	.title {
		padding: 0;
		margin: 0;
		font-weight: 500;
		padding: 8rem 8rem 0rem 8rem;
		text-align: center;
		font-family: 'Rubik', sans-serif;
	}

	.sub-title {
		padding: 0;
		margin: 0;
		margin-top: 3rem;
		font-weight: 500;
		text-align: left;
		font-size: 35px;
		font-family: 'Rubik', sans-serif;
	}

	.sub-heading {
		padding: 0;
		margin: 0;
		margin-top: 1.5rem;
		margin-bottom: -0.6rem;
		font-weight: 500;
		text-align: left;
		font-size: 25px;
		font-family: 'Rubik', sans-serif;
	}

	.other-text {
		margin-top: 2rem;
	}

	a {
		font-size: 20px;
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
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.row-bm {
		display: flex;
		flex-direction: row;
	}

	.m-bm {
		border-top: 4px solid var(--secondary-fg);
		border-bottom: 4px solid var(--secondary-fg);
	}

	@media only screen and (max-width: 600px) {
		.board {
			padding: 6rem 2rem;
		}

		.container {
			padding: 0rem 2rem 8rem 2rem;
		}

		.title {
			padding: 5rem 2rem 0rem 2rem;
		}
		.board h1 {
			font-size: 3rem;
		}
	}
</style>

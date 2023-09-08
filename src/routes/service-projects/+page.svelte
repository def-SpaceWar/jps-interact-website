<script lang="ts">
</script>

<svelte:head>
	<title>Service Projects - JPS Interact Club</title>
	<meta
		name="description"
		content="Learn more about JPS Interact Club's partners and opportunities!"
	/>
</svelte:head>
<h1 class="title">Service Projects</h1>
<hr />
<p class="des">If you're aware of organizations to reach out to, run community initiatives, or wish for us to engage in specific charitable causes, then please contact us at thejpsinteractclub@gmail.com. We're eager to collaborate and make a positive impact together!</p>
<div class="container">
	<div class="box">
		<a href="/service-projects/pvsa">
			<div class="boxx">
				<img src="/service-projects/pvsa-banner.png" class="pvsa-banner" alt="PVSA Logo" />
			</div>
			<div class="black-overlay" />
			<div class="con">
				<p>PVSA</p>
			</div>
		</a>
	</div>

	<div class="box">
		<a href="/service-projects/hoh">
			<div class="boxx">
				<img src="/service-projects/hands-hope.png" class="pvsa-banner" alt="PVSA Logo" />
			</div>
			<div class="black-overlay" />
			<div class="con">
				<p>Hands Of Hope</p>
			</div>
		</a>
	</div>

	<div class="box">
		<a href="/service-projects/occ">
			<div class="boxx">
				<img src="/service-projects/operation-christmas-child.png" class="pvsa-banner" alt="PVSA Logo" />
			</div>
			<div class="black-overlay" />
			<div class="con">
				<p>Operation Christmas Child</p>
			</div>
		</a>
	</div>

	<div class="box">
		<a href="/service-projects/dtgb">
			<div class="boxx">
				<img src="/service-projects/dtgb.png" class="pvsa-banner" alt="PVSA Logo" />
			</div>
			<div class="black-overlay" />
			<div class="con">
				<p>DTGB E-Club</p>
			</div>
		</a>
	</div>

	<div class="box">
		<a href="/service-projects/hc">
			<div class="boxx">
				<img src="/service-projects/holiday-cards.png" class="pvsa-banner" alt="PVSA Logo" />
			</div>
			<div class="black-overlay" />
			<div class="con">
				<p>Holiday Cards</p>
			</div>
		</a>
	</div>

	<div class="box">
		<a href="/service-projects/ep">
			<div class="boxx">
				<img src="/service-projects/ep.png" class="pvsa-banner" alt="PVSA Logo" />
			</div>
			<div class="black-overlay" />
			<div class="con">
				<p>Elijah's Promise</p>
			</div>
		</a>
	</div>

	<div class="box">
		<a href="/service-projects/lm">
			<div class="boxx">
				<img src="/service-projects/luv-micheal.png" class="pvsa-banner" alt="PVSA Logo" />
			</div>
			<div class="black-overlay" />
			<div class="con">
				<p>Luv Michael</p>
			</div>
		</a>
	</div>

	<div class="box">
		<a href="/service-projects/cfbnj">
			<div class="boxx">
				<img src="/service-projects/cfbnj.png" class="pvsa-banner" alt="PVSA Logo" />
			</div>
			<div class="black-overlay" />
			<div class="con">
				<p>Community Food Bank of NJ</p>
			</div>
		</a>
	</div>

	<div class="box">
		<a href="/service-projects/cas">
			<div class="boxx">
				<img src="/service-projects/color-a-smile.png" class="pvsa-banner" alt="PVSA Logo" />
			</div>
			<div class="black-overlay" />
			<div class="con">
				<p>Color A Smile</p>
			</div>
		</a>
	</div>

	<div class="box">
		<a href="/service-projects/rb">
			<div class="boxx">
				<img src="/service-projects/recyclebattery.png" class="pvsa-banner" alt="PVSA Logo" />
			</div>
			<div class="black-overlay" />
			<div class="con">
				<p>RecyclemyBattery</p>
			</div>
		</a>
	</div>

	<div class="box">
		<a href="/service-projects/vhmp">
			<div class="boxx">
				<img src="/service-projects/veterans.png" class="pvsa-banner" alt="PVSA Logo" />
			</div>
			<div class="black-overlay" />
			<div class="con">
				<p>Veterans' home at Menlo Park</p>
			</div>
		</a>
	</div>

	<div class="box">
		<a href="/service-projects/refugee-assitance">
			<div class="boxx">
				<img src="/service-projects/rap.png" class="pvsa-banner" alt="PVSA Logo" />
			</div>
			<div class="black-overlay" />
			<div class="con">
				<p>Refugee Assistance Partners</p>
			</div>
		</a>
	</div>

	<div class="box">
		<a href="/service-projects/wk">
			<div class="boxx">
				<img src="/service-projects/whispering.png" class="pvsa-banner" alt="PVSA Logo" />
			</div>
			<div class="black-overlay" />
			<div class="con">
				<p>Whispering Knolls</p>
			</div>
		</a>
	</div>

	<div class="box">
		<a href="/service-projects/chh">
			<div class="boxx">
				<img src="/service-projects/cfhh.png" class="pvsa-banner" alt="PVSA Logo" />
			</div>
			<div class="black-overlay" />
			<div class="con">
				<p>Center for Hope Hospice</p>
			</div>
		</a>
	</div>
</div>

<style>

	.des {
		text-align: center;
		margin: 0 auto;
		padding: 0 auto;
		width: 60%;
		margin-top: 10px;
		margin-bottom: 50px;
	}
	hr {
		background: var(--foreground);
		border: 2px solid var(--foreground);
		width: 30%;
	}

	.container {
		padding: 0rem 20% 8rem 20%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}

	.box {
		margin: 5px;
		border-radius: 10px;
		width: 32%;
		height: 200px;
		background-color: #b5b5b5;
	}

	.boxx {
		position: relative;
		z-index: 3;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	.boxx img {
		width: 95%;
		height: 95%;
		object-fit: contain;
	}

	.title {
		padding: 0;
		margin: 0;
		font-weight: 500;
		padding: 8rem 8rem 0rem 8rem;
		text-align: center;
		font-family: 'Rubik', sans-serif;
	}

	.black-overlay {
		position: absolute;
		transform: translateY(-200px);
		width: 19.2%;
		height: 200px;
		border-radius: 10px;
		z-index: 4;
		background: black;
		opacity: 0.5;
	}

	.con {
		position: absolute;
		transform: translateY(-200px);
		width: 19.2%;
		height: 200px;
		border-radius: 10px;
		z-index: 5;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--secondary-bg);
	}

	.con:hover {
		color: #b5b5b5;
	}

	.con p {
		font-size: 30px;
		text-align: center;
		font-weight: 500;
	}
</style>

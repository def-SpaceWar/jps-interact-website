<svelte:head>
	<title>Hours - JPS Interact Club</title>
	<meta name="description" content="View your or others hours recorded in the JPS Interact Club." />
</svelte:head>

<div class="container">
	<h1 class="title">Hours</h1>
	<hr />
	<table id="hours">
		<tr>
			<th>Grade</th>
			<th>Name</th>
			<th>Hours</th>
		</tr>
		<tr>
			<td>9th</td>
			<td>Test Name</td>
			<td>11</td>
		</tr>
		<tr>
			<td>9th</td>
			<td>Name Test</td>
			<td>11</td>
		</tr>
		<tr>
			<td>10th</td>
			<td>Test Nam</td>
			<td>2</td>
		</tr>
	</table>
</div>

<style>
	hr {
		background: var(--foreground);
		border: 2px solid var(--foreground);
		width: 30%;
		margin-bottom: 2rem;
	}

	.container {
		padding: 4rem 8rem 5rem 8rem;
	}
	.title {
		padding: 0;
		margin: 0;
		font-weight: 500;
		text-align: center;
		font-family: 'Rubik', sans-serif;
	}
	#hours {
		font-family: Arial, Helvetica, sans-serif;
		border-collapse: collapse;
		width: 100%;
	}

	#hours td,
	#hours th {
		padding: 0.7rem;
	}

	#hours tr:nth-child(even) {
		background-color: #f2f2f2;
	}

	#hours th {
		padding-top: 12px;
		padding-bottom: 12px;
		text-align: left;
		background-color: var(--secondary);
		color: white;
	}
</style>

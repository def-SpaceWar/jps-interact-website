<script lang="ts">
	export let title: string;
    export let date: string;
    export let time: string;
    export let attendees: number;
    export let description: string;
</script>

<div class="event">
	<h1>{title}</h1>
	<div class="flex-container">
		<div class="flex">
			<p class="date">
				<img
					src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsTAAALEwEAmpwYAAABVUlEQVR4nM2UoU8CYRjGf8U5gwFHo11WkzajyS7ZRKearzCnzcC/cI5mcVIINGZhXpKiDGU63QjogOC+23PudSB+Y6fj3Z7t4Xue+4377u6D6dkF+sAjsMn82VLvCdj5qbQOBNIxEAJnQNmsz1JZvVDXpeuOl8wa0AOupdjA22Z9ltoGHpv1e2DVwfMK0jkCasAlUPxlW4rq1XRdOrG4U/AN4ASo2Nubs50V9XM+8CzmG3wEdDLU6N/+eWyCArC/gAo+8JJ+R8CVPqhI+jC+rzxSv+QLD+W3gbrJno2vK0d9b/ipXq09oCHv9GJ8Q3lOfW/4m576AzA0b8HE+KHyjvrLsS3hX8J7QAu4BQbyTmPjB8pb6nvDz3V0HgBNc5S+Gt9UHqi/HNtyA1SBC6Ar7/RufFd5VX0veAAcLqDAB04G8wVfAe4yPnIdz3GTcSb9rLNQAv4EOiS3oNzOI3kAAAAASUVORK5CYII=" alt="Calendar Icon"
				/>
				<span>{date}</span>
			</p>
			<p class="time">
				<img
					src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsTAAALEwEAmpwYAAABZElEQVR4nO2UvUoDQRSFP1mijVlrC9/FnxR2kWAh0Uax8wEs8xDG2i1jLLVTS9/AYFxBsYvZWpsgKxfOQlhmZzdqYeGB5TL35+zMuXcG/gi2gWPZX8UC8Amksrb+MWrALtAXcfbZuq14CAyA/VmIN4AXkY2BS+BMdiz/M9AAbnWi5SrEh0oeAk0gyMVtvQU8Ku8I2KxC3FDBNVCf8q8Ad7IZQuVZ/loZ8Tzwqh3XHT9NZcn9IJZE1oNC7ImgWXAiFzmSKFWTC3EBvDk0LiMP1OSej3yoaXDhVOTdgvgV8OAjHwGRwz8HfIj8Xes8ItUXYuDZeVfkJ56d3/vI+9IuKLhURr7uiFl+UqZ5WwTW/TxsNDvAoiPWUt2Oj9zm9Ek3z+a3Cpamarxznh1/opsXViC+UX7pDc1woIJYErnelpZ2PJn1RUSNi6VlommIZBP5TYpVvomamnSuMRvJ9uQv1fgf5PEFnB1f9ENhGfwAAAAASUVORK5CYII=" alt="Clock Icon"
				/>
				<span>{time}</span>
			</p>
		</div>
		<div class="flex">
			<p class="location">
				<img
					src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsTAAALEwEAmpwYAAABgElEQVR4nK3UvUuWURzG8Y8VJYhBGSq4JL1OLkkENhWk0OAQDa0aERVR4VIgFiZSBEljtOcmUmqFWy+DQUFb0RsU9G/Egd8NhxuentPj810O1+9c98W5z8uP5mzFcVzDXIwj2GKTnMUXrOEWLsT4Ap9xptXg+3iNQw3mD+Mt7v1v8NVY3fYmvh14hculwX34iV2F/p7w95aYp3CnVhvGS/yO8UhtfhY3SsLXcDTTac+/4wQ6cTL0wcxzDKsl4Z/Qn+kFTNQ85/Ew0/3xXVPeYX+mF2PVOUk/zfQBfCwJX4xfr0g34XHN8wSXMn0KyyXht+NQK7bFOazgZuztatQrUn26JHwYb2q1DozhOkZD52xgqCS8Az8wUGLGYLSIYqYxX+h9VHrHK3bHg9lZ8Dp/oVsLjetuE0+66zNaoDte4t4G8/vwDV1aZALPGxz6Os7ZJM8wWatdwZI20Be/X21Pag1fsUebGMeH6PHvcbpdwRXpZvzBg3YHJ1IvuVjrKf/kL8wmQG+f94z4AAAAAElFTkSuQmCC" alt="Location Icon"
				/>

				<span>JPS High School</span>
			</p>
			<p class="attendees">
				<img
					src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsTAAALEwEAmpwYAAABIElEQVR4nOXVvS4EYRTG8V8sCgkN2UIhG1GgocQFUHEHIvRCL0qduAchoRZchY+KAj3ForANwcgkR7KZ7G5kZxLFPsnJyfucM/93MnPmHTpBvRhGT5HQbmzjDUnkrfBzay+g77jFR6x384Ir+MILxsNL82v4I3ngS3GXBxn/MPzFPPC5gFyiK7w0X4U/kwdewnWAzrCO87oN03ouTeI+gL9xhwkFqQ9r2MFqrDtYJZSb1MrtvtBp7KOKZ8xn6gvxYVWjb+ov0AEc4zum4rNuQm5wEjnJ1NP+I/S3gp9G8xM2MIgVPGRGMR3N5ahvRn8SmzfUUDQ8NnnOY5iNnFU5rkuC0/CQSos1XLQRtbi+0gqe5IyG8PTwHy0gCvmJ/K9+AOLQaCXIepIBAAAAAElFTkSuQmCC" alt="People Icon"
				/>

				<span>{attendees}</span>
			</p>
		</div>
	</div>
	<p class="description">
    {description}
	</p>
	<button on:click>Sign Up</button>
</div>

<style>
	.event {
		width: 23vw;
		border: 2px solid var(--secondary-bg);
		padding: 1.2rem;
		border-radius: 10px;
		margin-right: 2rem;
	}

	.event h1 {
		padding: 0;
		margin: 0;
		font-weight: 500;
		font-size: 35px;
		font-family: 'Rubik', sans-serif;
	}

	.flex-container {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.flex {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		margin-top: 0.6rem;
	}

	.date {
		padding: 0;
		margin: 0;
		display: flex;
		align-items: center;
		padding: 0.2rem;
		padding-right: 0.4rem;
		margin-bottom: 0.3rem;
	}

	.time {
		display: flex;
		align-items: center;
		padding: 0;
		margin: 0;
		padding: 0.2rem;
		padding-right: 0.4rem;
	}

	span {
		margin-left: 0.2rem;
	}

	.location {
		padding: 0;
		margin: 0;
		display: flex;
		align-items: center;
		padding: 0.2rem;
		padding-right: 0.4rem;
		margin-bottom: 0.3rem;
	}

	.attendees {
		padding: 0;
		margin: 0;
		display: flex;
		align-items: center;
		padding: 0.2rem;
		padding-right: 0.4rem;
	}

	button {
		padding: 0.4rem 0;
		font-size: 17px;
		border-radius: 5px;
		width: 100%;
		background: var(--primary);
		border: none;
		transition: 300ms ease-in-out;
	}

	button:hover {
		cursor: pointer;
		background: var(--secondary);
	}
</style>

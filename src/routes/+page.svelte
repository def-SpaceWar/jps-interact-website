<script>
	import SlideShow from './SlideShow.svelte';
	import './styles.css';
	import Footer from './Footer.svelte';
	import HeaderHome from './HeaderHome.svelte';
	import Loading from './Loading.svelte';
	let loading = true;
	setInterval(() => {
		loading = false;
	}, 1000);

	let q1 = false;
	let q2 = false;
	let q3 = false;
	let q4 = false;
	let q5 = false;
	let q6 = false;
	let q7 = false;
	let q8 = false;
</script>

<svelte:head>
	<title>Home - JPS Interact Club</title>
	<meta
		name="description"
		content="The home of community service at John P. Stevens High School."
	/>
</svelte:head>
{#if loading === true}
	<Loading />
{/if}
{#if loading === false}
	<HeaderHome />
	<section class="hero">
		<div class="left-half">
			<h1 class="title">JPS Interact Club</h1>
			<p class="description">The home of community service at John P. Stevens High School.</p>
			<a href="/about" class="learn-more">
				<button
					>Learn More <img
						src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA50lEQVR4nO2VMQrCQBBFU4kXsFAS8A7Bc1hZCNqKYGFp642ieALPoUm8gl7gycAGEtTZzWYLi3wYAps/eczMbjaKevkKSIAzkCuxN96V4rlqEAHYdDTeneIpNUhhTGsg/RET4x3V1ubA0xVSGtOsZYvvJu8VHALEwK36MLAICuETMJW8YBC+AMx6GAjNGcgzqb2TzbABlt4QmoBHVUEraRCtgppnDByAbWuIawX4zkQOn62CEJABcHGZQafdBQyl3xqgM8RV/BOkcPgLp0pInqjQICfCKNMgch4yy82YW0LyY59294pEb8tfVyAUghyOAAAAAElFTkSuQmCC"
						alt="Learn More Arrow"
					/>
				</button>
			</a>
		</div>
		<div class="right-half">
			<SlideShow />
		</div>
	</section>

	<section class="faq">
		<h1 class="title2">FAQ</h1>
		<hr />
		<div class="faq-card" on:click={() => (q1 = !q1)}>
			<div class="card">
				<div class="faq-flex">
					<img
						src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFfklEQVR4nO1aTYwUVRBuFEWFqKv4c0OT1eCwU2/IJMaL7sUoKIoaPeDPgUQC8WfdIMZ4gCHxsLj9atZFSNyD8eLFSYSpmtkVNLIS0YAgggeXFTkY/w4aMQZXjZox9fr1TMedXqZ/ZnY1VPKSgX5b1fVe/XxV1Y5zjv6nlME9VyjN9ykkFzSNKs0nFNJPCvkPb8lvmjDPkNxckVZnB6pdzlygJYXxi8DlxwD5HYX8t0KuRVmg+S/QtFchPdo9PLag4wrcgqWLAelZ0Pxd/cU0/Q6a94GmzXIzy4eqN8mJ50dGLpAlv+X/5BkgbwGkcfmbulLI34LmjXI4HVFCueW7laZTgVM9nNX8eH5b6bLIvIZ2X66wvE4hHQnc1JdZl1e214w0vRq4gU9Uke9Iiz8grQBNnzYOiHamfjuZweq15sU9Ab+CpqcfKpXOT1WI4zjCM6vLz4DmKf+2e16ma1JhDi5dL9ftnRRNgFvpcdpMPYMECmnSKnNS3iERw9zw2FV1hkgf5zUvdjpE2YFqF2g+YM34lFhFLEZinwFz+gjcvQudDhO4excq5IO+mcXymYZj04QkO2eWaOkru65smBntjB5ifceO6RP5Eb7ERCLkPoX0vEJe26N5aVyfAT8AIK1oOdn5eUKiU5zIA0gvgObTzTM6fZDDiorKVyH1+87fkomB5k1+nogaYnsL4/NB064WoMlUDrk3Bu9j9jD6W0h6FnbESHbWhIIv/Z7S/KRgKaVZK6QzgZv5PrOjtCgK/6zLK62lfDMjNjMCbYSI4xMW7fqZefDfe0CP3qiQf6nvKfKGSEJqtXl+JM0hPxy6z6LYmmCnqIrksHJXQImvxBSaytC8LWBib0aVo5DXe6bPbzfdICFWYLUg0jgAMFus3CqQXFCs1Buh+zStCZje/shyBqpdUt8A0p9N39Mriswp7XPaSArpqcCNlOPwAE3ve5ZTvne6AOOMxiw2O+2iQuE8gToBRTbFYaOQtob5oWg5GqplSpRDfiIQtc6A+9bVcfgorNxvUwRPewhIX8hDqeKcNtByt7oEkH8O+MdzcXmpIi2zDn9i2kPQ/KM8FGzjpExeMrNI1jOpA0nqmbzmxRau/DDtoe121DKF0oVOygSaXgwocVoN7b4uCb/u4bEFfp+gY4pk3fJtJqxbRbJu5cGkPLtnUqQdpiXmozR/FvCL19Lgm5/JtNrh7MFsL/AlrUNSMzo7ctVgmCKtTkNYEHpbRfakx7cSHn7rCRF5S3oCG2gYkF9Pke/W0IRYhyhI46kJlK6i5ne9Fb1ICyPBaBY93xPWtTCgUTqAzlxulqMHGm8eHru06SavoSymUF7nzFGCIm+wZjUauknpyiPWMY+kIlTTKqk/bA2yNjHDWm2eQj7qYUJaM2OikTLS07hyZ1K5gPRGsNmdmJ+mVfagvz7rGEJa+1b40aT93TQV6S2Mz1fIx20E7Gutw2h7vdJQniuKQP2AabLloVCjW8FT0hyLKzz3UuWGXLF8u1kxelk+qaFqTiH9Fqu7I+1J/wTaAe2jNNJB80l7s9sjM7A9rsOWwcHZaGJndpQWgaZDNtweij1nNGMFM531xgryb6dDlJGuDvKH/jgu8cBHhiyNq6XJJLYexSfAyjSoPGEhVic5Dd/MvK449Yc14FIoiTf6ji3mFLdBcbZhqA0ARsix1KavkrG9UcbxQBG2va2zd2/6Wo8i3nQXeX2crxiMH3jYycAO5ZtSitPiFpIm9ftwxi6p+feD5oIpfIq0TMK29ABkyW8ZGoFLD3h7DBQ3fQIfdgBy36x8ASFCpSsuDeVgg6HVJVBcUKwAwFlRoBlJQ1kKHanaFHLF+4DGNDTMRzXyGzR9LuWp7JG9ofXEOXL++/QP4gLDvMxYADUAAAAASUVORK5CYII="
						alt="Question Image"
					/>
					<p class={q1 === false ? 'te' : 'te blue'}>What is the J.P. Stevens Interact Club?</p>
				</div>
				<img
					src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAfUlEQVR4nO2RwQ2AIAxFYSCpGziORxehid4cQzqgNdVwMSIhQrz0HcnPexCMURTlR5htjzTkZueG2RbLwYcFfNg7v02pGSCNsnE+rGURCSDNgMSpSJTLpjyQicBn+UsEqsnv/4FXJMrl7Lv86SXVbp6IuCbyiIibyRXFJDgAWUuCZOESQhMAAAAASUVORK5CYII="
					alt="dropdown"
					class={q1 === false ? 'down' : 'up'}
				/>
			</div>
			{#if q1 === true}
				<p class="ans">
					The J.P. Stevens Interact Club is a student-led organization that focuses on community
					service and making a positive impact in our local and global communities. We work on
					various projects and initiatives throughout the year to address critical social and
					environmental issues.
				</p>
			{/if}
		</div>

		<div class="faq-card" on:click={() => (q2 = !q2)}>
			<div class="card">
				<div class="faq-flex">
					<img
						src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFfklEQVR4nO1aTYwUVRBuFEWFqKv4c0OT1eCwU2/IJMaL7sUoKIoaPeDPgUQC8WfdIMZ4gCHxsLj9atZFSNyD8eLFSYSpmtkVNLIS0YAgggeXFTkY/w4aMQZXjZox9fr1TMedXqZ/ZnY1VPKSgX5b1fVe/XxV1Y5zjv6nlME9VyjN9ykkFzSNKs0nFNJPCvkPb8lvmjDPkNxckVZnB6pdzlygJYXxi8DlxwD5HYX8t0KuRVmg+S/QtFchPdo9PLag4wrcgqWLAelZ0Pxd/cU0/Q6a94GmzXIzy4eqN8mJ50dGLpAlv+X/5BkgbwGkcfmbulLI34LmjXI4HVFCueW7laZTgVM9nNX8eH5b6bLIvIZ2X66wvE4hHQnc1JdZl1e214w0vRq4gU9Uke9Iiz8grQBNnzYOiHamfjuZweq15sU9Ab+CpqcfKpXOT1WI4zjCM6vLz4DmKf+2e16ma1JhDi5dL9ftnRRNgFvpcdpMPYMECmnSKnNS3iERw9zw2FV1hkgf5zUvdjpE2YFqF2g+YM34lFhFLEZinwFz+gjcvQudDhO4excq5IO+mcXymYZj04QkO2eWaOkru65smBntjB5ifceO6RP5Eb7ERCLkPoX0vEJe26N5aVyfAT8AIK1oOdn5eUKiU5zIA0gvgObTzTM6fZDDiorKVyH1+87fkomB5k1+nogaYnsL4/NB064WoMlUDrk3Bu9j9jD6W0h6FnbESHbWhIIv/Z7S/KRgKaVZK6QzgZv5PrOjtCgK/6zLK62lfDMjNjMCbYSI4xMW7fqZefDfe0CP3qiQf6nvKfKGSEJqtXl+JM0hPxy6z6LYmmCnqIrksHJXQImvxBSaytC8LWBib0aVo5DXe6bPbzfdICFWYLUg0jgAMFus3CqQXFCs1Buh+zStCZje/shyBqpdUt8A0p9N39Mriswp7XPaSArpqcCNlOPwAE3ve5ZTvne6AOOMxiw2O+2iQuE8gToBRTbFYaOQtob5oWg5GqplSpRDfiIQtc6A+9bVcfgorNxvUwRPewhIX8hDqeKcNtByt7oEkH8O+MdzcXmpIi2zDn9i2kPQ/KM8FGzjpExeMrNI1jOpA0nqmbzmxRau/DDtoe121DKF0oVOygSaXgwocVoN7b4uCb/u4bEFfp+gY4pk3fJtJqxbRbJu5cGkPLtnUqQdpiXmozR/FvCL19Lgm5/JtNrh7MFsL/AlrUNSMzo7ctVgmCKtTkNYEHpbRfakx7cSHn7rCRF5S3oCG2gYkF9Pke/W0IRYhyhI46kJlK6i5ne9Fb1ICyPBaBY93xPWtTCgUTqAzlxulqMHGm8eHru06SavoSymUF7nzFGCIm+wZjUauknpyiPWMY+kIlTTKqk/bA2yNjHDWm2eQj7qYUJaM2OikTLS07hyZ1K5gPRGsNmdmJ+mVfagvz7rGEJa+1b40aT93TQV6S2Mz1fIx20E7Gutw2h7vdJQniuKQP2AabLloVCjW8FT0hyLKzz3UuWGXLF8u1kxelk+qaFqTiH9Fqu7I+1J/wTaAe2jNNJB80l7s9sjM7A9rsOWwcHZaGJndpQWgaZDNtweij1nNGMFM531xgryb6dDlJGuDvKH/jgu8cBHhiyNq6XJJLYexSfAyjSoPGEhVic5Dd/MvK449Yc14FIoiTf6ji3mFLdBcbZhqA0ARsix1KavkrG9UcbxQBG2va2zd2/6Wo8i3nQXeX2crxiMH3jYycAO5ZtSitPiFpIm9ftwxi6p+feD5oIpfIq0TMK29ABkyW8ZGoFLD3h7DBQ3fQIfdgBy36x8ASFCpSsuDeVgg6HVJVBcUKwAwFlRoBlJQ1kKHanaFHLF+4DGNDTMRzXyGzR9LuWp7JG9ofXEOXL++/QP4gLDvMxYADUAAAAASUVORK5CYII="
						alt="Question Image"
					/>
					<p class={q2 === false ? 'te' : 'te blue'}>How can I join the Interact Club?</p>
				</div>
				<img
					src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAfUlEQVR4nO2RwQ2AIAxFYSCpGziORxehid4cQzqgNdVwMSIhQrz0HcnPexCMURTlR5htjzTkZueG2RbLwYcFfNg7v02pGSCNsnE+rGURCSDNgMSpSJTLpjyQicBn+UsEqsnv/4FXJMrl7Lv86SXVbp6IuCbyiIibyRXFJDgAWUuCZOESQhMAAAAASUVORK5CYII="
					alt="dropdown"
					class={q2 === false ? 'down' : 'up'}
				/>
			</div>
			{#if q2 === true}
				<p class="ans">
					Joining the J.P. Stevens Interact Club is easy! Keep an eye out for announcements about
					our meetings and events. You can attend any of our meetings or events to learn more and
					become a member. We welcome all students who are passionate about community service and
					making a difference. Our google classroom code is: vqq5njd
				</p>
			{/if}
		</div>

		<div class="faq-card" on:click={() => (q3 = !q3)}>
			<div class="card">
				<div class="faq-flex">
					<img
						src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFfklEQVR4nO1aTYwUVRBuFEWFqKv4c0OT1eCwU2/IJMaL7sUoKIoaPeDPgUQC8WfdIMZ4gCHxsLj9atZFSNyD8eLFSYSpmtkVNLIS0YAgggeXFTkY/w4aMQZXjZox9fr1TMedXqZ/ZnY1VPKSgX5b1fVe/XxV1Y5zjv6nlME9VyjN9ykkFzSNKs0nFNJPCvkPb8lvmjDPkNxckVZnB6pdzlygJYXxi8DlxwD5HYX8t0KuRVmg+S/QtFchPdo9PLag4wrcgqWLAelZ0Pxd/cU0/Q6a94GmzXIzy4eqN8mJ50dGLpAlv+X/5BkgbwGkcfmbulLI34LmjXI4HVFCueW7laZTgVM9nNX8eH5b6bLIvIZ2X66wvE4hHQnc1JdZl1e214w0vRq4gU9Uke9Iiz8grQBNnzYOiHamfjuZweq15sU9Ab+CpqcfKpXOT1WI4zjCM6vLz4DmKf+2e16ma1JhDi5dL9ftnRRNgFvpcdpMPYMECmnSKnNS3iERw9zw2FV1hkgf5zUvdjpE2YFqF2g+YM34lFhFLEZinwFz+gjcvQudDhO4excq5IO+mcXymYZj04QkO2eWaOkru65smBntjB5ifceO6RP5Eb7ERCLkPoX0vEJe26N5aVyfAT8AIK1oOdn5eUKiU5zIA0gvgObTzTM6fZDDiorKVyH1+87fkomB5k1+nogaYnsL4/NB064WoMlUDrk3Bu9j9jD6W0h6FnbESHbWhIIv/Z7S/KRgKaVZK6QzgZv5PrOjtCgK/6zLK62lfDMjNjMCbYSI4xMW7fqZefDfe0CP3qiQf6nvKfKGSEJqtXl+JM0hPxy6z6LYmmCnqIrksHJXQImvxBSaytC8LWBib0aVo5DXe6bPbzfdICFWYLUg0jgAMFus3CqQXFCs1Buh+zStCZje/shyBqpdUt8A0p9N39Mriswp7XPaSArpqcCNlOPwAE3ve5ZTvne6AOOMxiw2O+2iQuE8gToBRTbFYaOQtob5oWg5GqplSpRDfiIQtc6A+9bVcfgorNxvUwRPewhIX8hDqeKcNtByt7oEkH8O+MdzcXmpIi2zDn9i2kPQ/KM8FGzjpExeMrNI1jOpA0nqmbzmxRau/DDtoe121DKF0oVOygSaXgwocVoN7b4uCb/u4bEFfp+gY4pk3fJtJqxbRbJu5cGkPLtnUqQdpiXmozR/FvCL19Lgm5/JtNrh7MFsL/AlrUNSMzo7ctVgmCKtTkNYEHpbRfakx7cSHn7rCRF5S3oCG2gYkF9Pke/W0IRYhyhI46kJlK6i5ne9Fb1ICyPBaBY93xPWtTCgUTqAzlxulqMHGm8eHru06SavoSymUF7nzFGCIm+wZjUauknpyiPWMY+kIlTTKqk/bA2yNjHDWm2eQj7qYUJaM2OikTLS07hyZ1K5gPRGsNmdmJ+mVfagvz7rGEJa+1b40aT93TQV6S2Mz1fIx20E7Gutw2h7vdJQniuKQP2AabLloVCjW8FT0hyLKzz3UuWGXLF8u1kxelk+qaFqTiH9Fqu7I+1J/wTaAe2jNNJB80l7s9sjM7A9rsOWwcHZaGJndpQWgaZDNtweij1nNGMFM531xgryb6dDlJGuDvKH/jgu8cBHhiyNq6XJJLYexSfAyjSoPGEhVic5Dd/MvK449Yc14FIoiTf6ji3mFLdBcbZhqA0ARsix1KavkrG9UcbxQBG2va2zd2/6Wo8i3nQXeX2crxiMH3jYycAO5ZtSitPiFpIm9ftwxi6p+feD5oIpfIq0TMK29ABkyW8ZGoFLD3h7DBQ3fQIfdgBy36x8ASFCpSsuDeVgg6HVJVBcUKwAwFlRoBlJQ1kKHanaFHLF+4DGNDTMRzXyGzR9LuWp7JG9ofXEOXL++/QP4gLDvMxYADUAAAAASUVORK5CYII="
						alt="Question Image"
					/>
					<p class={q3 === false ? 'te' : 'te blue'}>
						Is the J.P. Stevens Interact Club PVSA certified, and how can I earn the Presidential
						Volunteer Service Award?
					</p>
				</div>
				<img
					src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAfUlEQVR4nO2RwQ2AIAxFYSCpGziORxehid4cQzqgNdVwMSIhQrz0HcnPexCMURTlR5htjzTkZueG2RbLwYcFfNg7v02pGSCNsnE+rGURCSDNgMSpSJTLpjyQicBn+UsEqsnv/4FXJMrl7Lv86SXVbp6IuCbyiIibyRXFJDgAWUuCZOESQhMAAAAASUVORK5CYII="
					alt="dropdown"
					class={q3 === false ? 'down' : 'up'}
				/>
			</div>
			{#if q3 === true}
				<p class="ans">
					Yes, the J.P. Stevens Interact Club is PVSA certified. To earn the Presidential Volunteer
					Service Award, you need to meet specific requirements for volunteer service hours over a
					12-month period. Hours are tracked and verified through our club. You can find more
					details about the PVSA and how to get involved on our website or by reaching out to our
					board members.
				</p>
			{/if}
		</div>

		<div class="faq-card" on:click={() => (q4 = !q4)}>
			<div class="card">
				<div class="faq-flex">
					<img
						src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFfklEQVR4nO1aTYwUVRBuFEWFqKv4c0OT1eCwU2/IJMaL7sUoKIoaPeDPgUQC8WfdIMZ4gCHxsLj9atZFSNyD8eLFSYSpmtkVNLIS0YAgggeXFTkY/w4aMQZXjZox9fr1TMedXqZ/ZnY1VPKSgX5b1fVe/XxV1Y5zjv6nlME9VyjN9ykkFzSNKs0nFNJPCvkPb8lvmjDPkNxckVZnB6pdzlygJYXxi8DlxwD5HYX8t0KuRVmg+S/QtFchPdo9PLag4wrcgqWLAelZ0Pxd/cU0/Q6a94GmzXIzy4eqN8mJ50dGLpAlv+X/5BkgbwGkcfmbulLI34LmjXI4HVFCueW7laZTgVM9nNX8eH5b6bLIvIZ2X66wvE4hHQnc1JdZl1e214w0vRq4gU9Uke9Iiz8grQBNnzYOiHamfjuZweq15sU9Ab+CpqcfKpXOT1WI4zjCM6vLz4DmKf+2e16ma1JhDi5dL9ftnRRNgFvpcdpMPYMECmnSKnNS3iERw9zw2FV1hkgf5zUvdjpE2YFqF2g+YM34lFhFLEZinwFz+gjcvQudDhO4excq5IO+mcXymYZj04QkO2eWaOkru65smBntjB5ifceO6RP5Eb7ERCLkPoX0vEJe26N5aVyfAT8AIK1oOdn5eUKiU5zIA0gvgObTzTM6fZDDiorKVyH1+87fkomB5k1+nogaYnsL4/NB064WoMlUDrk3Bu9j9jD6W0h6FnbESHbWhIIv/Z7S/KRgKaVZK6QzgZv5PrOjtCgK/6zLK62lfDMjNjMCbYSI4xMW7fqZefDfe0CP3qiQf6nvKfKGSEJqtXl+JM0hPxy6z6LYmmCnqIrksHJXQImvxBSaytC8LWBib0aVo5DXe6bPbzfdICFWYLUg0jgAMFus3CqQXFCs1Buh+zStCZje/shyBqpdUt8A0p9N39Mriswp7XPaSArpqcCNlOPwAE3ve5ZTvne6AOOMxiw2O+2iQuE8gToBRTbFYaOQtob5oWg5GqplSpRDfiIQtc6A+9bVcfgorNxvUwRPewhIX8hDqeKcNtByt7oEkH8O+MdzcXmpIi2zDn9i2kPQ/KM8FGzjpExeMrNI1jOpA0nqmbzmxRau/DDtoe121DKF0oVOygSaXgwocVoN7b4uCb/u4bEFfp+gY4pk3fJtJqxbRbJu5cGkPLtnUqQdpiXmozR/FvCL19Lgm5/JtNrh7MFsL/AlrUNSMzo7ctVgmCKtTkNYEHpbRfakx7cSHn7rCRF5S3oCG2gYkF9Pke/W0IRYhyhI46kJlK6i5ne9Fb1ICyPBaBY93xPWtTCgUTqAzlxulqMHGm8eHru06SavoSymUF7nzFGCIm+wZjUauknpyiPWMY+kIlTTKqk/bA2yNjHDWm2eQj7qYUJaM2OikTLS07hyZ1K5gPRGsNmdmJ+mVfagvz7rGEJa+1b40aT93TQV6S2Mz1fIx20E7Gutw2h7vdJQniuKQP2AabLloVCjW8FT0hyLKzz3UuWGXLF8u1kxelk+qaFqTiH9Fqu7I+1J/wTaAe2jNNJB80l7s9sjM7A9rsOWwcHZaGJndpQWgaZDNtweij1nNGMFM531xgryb6dDlJGuDvKH/jgu8cBHhiyNq6XJJLYexSfAyjSoPGEhVic5Dd/MvK449Yc14FIoiTf6ji3mFLdBcbZhqA0ARsix1KavkrG9UcbxQBG2va2zd2/6Wo8i3nQXeX2crxiMH3jYycAO5ZtSitPiFpIm9ftwxi6p+feD5oIpfIq0TMK29ABkyW8ZGoFLD3h7DBQ3fQIfdgBy36x8ASFCpSsuDeVgg6HVJVBcUKwAwFlRoBlJQ1kKHanaFHLF+4DGNDTMRzXyGzR9LuWp7JG9ofXEOXL++/QP4gLDvMxYADUAAAAASUVORK5CYII="
						alt="Question Image"
					/>
					<p class={q4 === false ? 'te' : 'te blue'}>
						What types of volunteer opportunities does the Interact Club offer?
					</p>
				</div>
				<img
					src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAfUlEQVR4nO2RwQ2AIAxFYSCpGziORxehid4cQzqgNdVwMSIhQrz0HcnPexCMURTlR5htjzTkZueG2RbLwYcFfNg7v02pGSCNsnE+rGURCSDNgMSpSJTLpjyQicBn+UsEqsnv/4FXJMrl7Lv86SXVbp6IuCbyiIibyRXFJDgAWUuCZOESQhMAAAAASUVORK5CYII="
					alt="dropdown"
					class={q4 === false ? 'down' : 'up'}
				/>
			</div>
			{#if q4 === true}
				<p class="ans">
					We offer a wide range of volunteer opportunities, including working with local
					organizations, participating in international service projects, assisting at community
					events, and more. Our goal is to provide diverse experiences that cater to various
					interests and passions.
				</p>
			{/if}
		</div>

		<div class="faq-card" on:click={() => (q5 = !q5)}>
			<div class="card">
				<div class="faq-flex">
					<img
						src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFfklEQVR4nO1aTYwUVRBuFEWFqKv4c0OT1eCwU2/IJMaL7sUoKIoaPeDPgUQC8WfdIMZ4gCHxsLj9atZFSNyD8eLFSYSpmtkVNLIS0YAgggeXFTkY/w4aMQZXjZox9fr1TMedXqZ/ZnY1VPKSgX5b1fVe/XxV1Y5zjv6nlME9VyjN9ykkFzSNKs0nFNJPCvkPb8lvmjDPkNxckVZnB6pdzlygJYXxi8DlxwD5HYX8t0KuRVmg+S/QtFchPdo9PLag4wrcgqWLAelZ0Pxd/cU0/Q6a94GmzXIzy4eqN8mJ50dGLpAlv+X/5BkgbwGkcfmbulLI34LmjXI4HVFCueW7laZTgVM9nNX8eH5b6bLIvIZ2X66wvE4hHQnc1JdZl1e214w0vRq4gU9Uke9Iiz8grQBNnzYOiHamfjuZweq15sU9Ab+CpqcfKpXOT1WI4zjCM6vLz4DmKf+2e16ma1JhDi5dL9ftnRRNgFvpcdpMPYMECmnSKnNS3iERw9zw2FV1hkgf5zUvdjpE2YFqF2g+YM34lFhFLEZinwFz+gjcvQudDhO4excq5IO+mcXymYZj04QkO2eWaOkru65smBntjB5ifceO6RP5Eb7ERCLkPoX0vEJe26N5aVyfAT8AIK1oOdn5eUKiU5zIA0gvgObTzTM6fZDDiorKVyH1+87fkomB5k1+nogaYnsL4/NB064WoMlUDrk3Bu9j9jD6W0h6FnbESHbWhIIv/Z7S/KRgKaVZK6QzgZv5PrOjtCgK/6zLK62lfDMjNjMCbYSI4xMW7fqZefDfe0CP3qiQf6nvKfKGSEJqtXl+JM0hPxy6z6LYmmCnqIrksHJXQImvxBSaytC8LWBib0aVo5DXe6bPbzfdICFWYLUg0jgAMFus3CqQXFCs1Buh+zStCZje/shyBqpdUt8A0p9N39Mriswp7XPaSArpqcCNlOPwAE3ve5ZTvne6AOOMxiw2O+2iQuE8gToBRTbFYaOQtob5oWg5GqplSpRDfiIQtc6A+9bVcfgorNxvUwRPewhIX8hDqeKcNtByt7oEkH8O+MdzcXmpIi2zDn9i2kPQ/KM8FGzjpExeMrNI1jOpA0nqmbzmxRau/DDtoe121DKF0oVOygSaXgwocVoN7b4uCb/u4bEFfp+gY4pk3fJtJqxbRbJu5cGkPLtnUqQdpiXmozR/FvCL19Lgm5/JtNrh7MFsL/AlrUNSMzo7ctVgmCKtTkNYEHpbRfakx7cSHn7rCRF5S3oCG2gYkF9Pke/W0IRYhyhI46kJlK6i5ne9Fb1ICyPBaBY93xPWtTCgUTqAzlxulqMHGm8eHru06SavoSymUF7nzFGCIm+wZjUauknpyiPWMY+kIlTTKqk/bA2yNjHDWm2eQj7qYUJaM2OikTLS07hyZ1K5gPRGsNmdmJ+mVfagvz7rGEJa+1b40aT93TQV6S2Mz1fIx20E7Gutw2h7vdJQniuKQP2AabLloVCjW8FT0hyLKzz3UuWGXLF8u1kxelk+qaFqTiH9Fqu7I+1J/wTaAe2jNNJB80l7s9sjM7A9rsOWwcHZaGJndpQWgaZDNtweij1nNGMFM531xgryb6dDlJGuDvKH/jgu8cBHhiyNq6XJJLYexSfAyjSoPGEhVic5Dd/MvK449Yc14FIoiTf6ji3mFLdBcbZhqA0ARsix1KavkrG9UcbxQBG2va2zd2/6Wo8i3nQXeX2crxiMH3jYycAO5ZtSitPiFpIm9ftwxi6p+feD5oIpfIq0TMK29ABkyW8ZGoFLD3h7DBQ3fQIfdgBy36x8ASFCpSsuDeVgg6HVJVBcUKwAwFlRoBlJQ1kKHanaFHLF+4DGNDTMRzXyGzR9LuWp7JG9ofXEOXL++/QP4gLDvMxYADUAAAAASUVORK5CYII="
						alt="Question Image"
					/>
					<p class={q5 === false ? 'te' : 'te blue'}>How often does the Interact Club meet?</p>
				</div>
				<img
					src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAfUlEQVR4nO2RwQ2AIAxFYSCpGziORxehid4cQzqgNdVwMSIhQrz0HcnPexCMURTlR5htjzTkZueG2RbLwYcFfNg7v02pGSCNsnE+rGURCSDNgMSpSJTLpjyQicBn+UsEqsnv/4FXJMrl7Lv86SXVbp6IuCbyiIibyRXFJDgAWUuCZOESQhMAAAAASUVORK5CYII="
					alt="dropdown"
					class={q5 === false ? 'down' : 'up'}
				/>
			</div>
			{#if q5 === true}
				<p class="ans">
					Our meeting schedule may vary, but typically, we have meetings once a month (either on
					zoom or inperson) upcoming projects and events. Keep an eye on our social media and google
					classroom for meeting dates and times.
				</p>
			{/if}
		</div>

		<div class="faq-card" on:click={() => (q6 = !q6)}>
			<div class="card">
				<div class="faq-flex">
					<img
						src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFfklEQVR4nO1aTYwUVRBuFEWFqKv4c0OT1eCwU2/IJMaL7sUoKIoaPeDPgUQC8WfdIMZ4gCHxsLj9atZFSNyD8eLFSYSpmtkVNLIS0YAgggeXFTkY/w4aMQZXjZox9fr1TMedXqZ/ZnY1VPKSgX5b1fVe/XxV1Y5zjv6nlME9VyjN9ykkFzSNKs0nFNJPCvkPb8lvmjDPkNxckVZnB6pdzlygJYXxi8DlxwD5HYX8t0KuRVmg+S/QtFchPdo9PLag4wrcgqWLAelZ0Pxd/cU0/Q6a94GmzXIzy4eqN8mJ50dGLpAlv+X/5BkgbwGkcfmbulLI34LmjXI4HVFCueW7laZTgVM9nNX8eH5b6bLIvIZ2X66wvE4hHQnc1JdZl1e214w0vRq4gU9Uke9Iiz8grQBNnzYOiHamfjuZweq15sU9Ab+CpqcfKpXOT1WI4zjCM6vLz4DmKf+2e16ma1JhDi5dL9ftnRRNgFvpcdpMPYMECmnSKnNS3iERw9zw2FV1hkgf5zUvdjpE2YFqF2g+YM34lFhFLEZinwFz+gjcvQudDhO4excq5IO+mcXymYZj04QkO2eWaOkru65smBntjB5ifceO6RP5Eb7ERCLkPoX0vEJe26N5aVyfAT8AIK1oOdn5eUKiU5zIA0gvgObTzTM6fZDDiorKVyH1+87fkomB5k1+nogaYnsL4/NB064WoMlUDrk3Bu9j9jD6W0h6FnbESHbWhIIv/Z7S/KRgKaVZK6QzgZv5PrOjtCgK/6zLK62lfDMjNjMCbYSI4xMW7fqZefDfe0CP3qiQf6nvKfKGSEJqtXl+JM0hPxy6z6LYmmCnqIrksHJXQImvxBSaytC8LWBib0aVo5DXe6bPbzfdICFWYLUg0jgAMFus3CqQXFCs1Buh+zStCZje/shyBqpdUt8A0p9N39Mriswp7XPaSArpqcCNlOPwAE3ve5ZTvne6AOOMxiw2O+2iQuE8gToBRTbFYaOQtob5oWg5GqplSpRDfiIQtc6A+9bVcfgorNxvUwRPewhIX8hDqeKcNtByt7oEkH8O+MdzcXmpIi2zDn9i2kPQ/KM8FGzjpExeMrNI1jOpA0nqmbzmxRau/DDtoe121DKF0oVOygSaXgwocVoN7b4uCb/u4bEFfp+gY4pk3fJtJqxbRbJu5cGkPLtnUqQdpiXmozR/FvCL19Lgm5/JtNrh7MFsL/AlrUNSMzo7ctVgmCKtTkNYEHpbRfakx7cSHn7rCRF5S3oCG2gYkF9Pke/W0IRYhyhI46kJlK6i5ne9Fb1ICyPBaBY93xPWtTCgUTqAzlxulqMHGm8eHru06SavoSymUF7nzFGCIm+wZjUauknpyiPWMY+kIlTTKqk/bA2yNjHDWm2eQj7qYUJaM2OikTLS07hyZ1K5gPRGsNmdmJ+mVfagvz7rGEJa+1b40aT93TQV6S2Mz1fIx20E7Gutw2h7vdJQniuKQP2AabLloVCjW8FT0hyLKzz3UuWGXLF8u1kxelk+qaFqTiH9Fqu7I+1J/wTaAe2jNNJB80l7s9sjM7A9rsOWwcHZaGJndpQWgaZDNtweij1nNGMFM531xgryb6dDlJGuDvKH/jgu8cBHhiyNq6XJJLYexSfAyjSoPGEhVic5Dd/MvK449Yc14FIoiTf6ji3mFLdBcbZhqA0ARsix1KavkrG9UcbxQBG2va2zd2/6Wo8i3nQXeX2crxiMH3jYycAO5ZtSitPiFpIm9ftwxi6p+feD5oIpfIq0TMK29ABkyW8ZGoFLD3h7DBQ3fQIfdgBy36x8ASFCpSsuDeVgg6HVJVBcUKwAwFlRoBlJQ1kKHanaFHLF+4DGNDTMRzXyGzR9LuWp7JG9ofXEOXL++/QP4gLDvMxYADUAAAAASUVORK5CYII="
						alt="Question Image"
					/>
					<p class={q6 === false ? 'te' : 'te blue'}>
						Can I suggest a new project or initiative for the Interact Club?
					</p>
				</div>
				<img
					src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAfUlEQVR4nO2RwQ2AIAxFYSCpGziORxehid4cQzqgNdVwMSIhQrz0HcnPexCMURTlR5htjzTkZueG2RbLwYcFfNg7v02pGSCNsnE+rGURCSDNgMSpSJTLpjyQicBn+UsEqsnv/4FXJMrl7Lv86SXVbp6IuCbyiIibyRXFJDgAWUuCZOESQhMAAAAASUVORK5CYII="
					alt="dropdown"
					class={q6 === false ? 'down' : 'up'}
				/>
			</div>
			{#if q6 === true}
				<p class="ans">
					Absolutely! We encourage members to bring forward ideas for new projects or initiatives
					that align with our mission. Feel free to reach out to our club officers and we'll explore
					the possibilities together.
				</p>
			{/if}
		</div>

		<div class="faq-card" on:click={() => (q7 = !q7)}>
			<div class="card">
				<div class="faq-flex">
					<img
						src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFfklEQVR4nO1aTYwUVRBuFEWFqKv4c0OT1eCwU2/IJMaL7sUoKIoaPeDPgUQC8WfdIMZ4gCHxsLj9atZFSNyD8eLFSYSpmtkVNLIS0YAgggeXFTkY/w4aMQZXjZox9fr1TMedXqZ/ZnY1VPKSgX5b1fVe/XxV1Y5zjv6nlME9VyjN9ykkFzSNKs0nFNJPCvkPb8lvmjDPkNxckVZnB6pdzlygJYXxi8DlxwD5HYX8t0KuRVmg+S/QtFchPdo9PLag4wrcgqWLAelZ0Pxd/cU0/Q6a94GmzXIzy4eqN8mJ50dGLpAlv+X/5BkgbwGkcfmbulLI34LmjXI4HVFCueW7laZTgVM9nNX8eH5b6bLIvIZ2X66wvE4hHQnc1JdZl1e214w0vRq4gU9Uke9Iiz8grQBNnzYOiHamfjuZweq15sU9Ab+CpqcfKpXOT1WI4zjCM6vLz4DmKf+2e16ma1JhDi5dL9ftnRRNgFvpcdpMPYMECmnSKnNS3iERw9zw2FV1hkgf5zUvdjpE2YFqF2g+YM34lFhFLEZinwFz+gjcvQudDhO4excq5IO+mcXymYZj04QkO2eWaOkru65smBntjB5ifceO6RP5Eb7ERCLkPoX0vEJe26N5aVyfAT8AIK1oOdn5eUKiU5zIA0gvgObTzTM6fZDDiorKVyH1+87fkomB5k1+nogaYnsL4/NB064WoMlUDrk3Bu9j9jD6W0h6FnbESHbWhIIv/Z7S/KRgKaVZK6QzgZv5PrOjtCgK/6zLK62lfDMjNjMCbYSI4xMW7fqZefDfe0CP3qiQf6nvKfKGSEJqtXl+JM0hPxy6z6LYmmCnqIrksHJXQImvxBSaytC8LWBib0aVo5DXe6bPbzfdICFWYLUg0jgAMFus3CqQXFCs1Buh+zStCZje/shyBqpdUt8A0p9N39Mriswp7XPaSArpqcCNlOPwAE3ve5ZTvne6AOOMxiw2O+2iQuE8gToBRTbFYaOQtob5oWg5GqplSpRDfiIQtc6A+9bVcfgorNxvUwRPewhIX8hDqeKcNtByt7oEkH8O+MdzcXmpIi2zDn9i2kPQ/KM8FGzjpExeMrNI1jOpA0nqmbzmxRau/DDtoe121DKF0oVOygSaXgwocVoN7b4uCb/u4bEFfp+gY4pk3fJtJqxbRbJu5cGkPLtnUqQdpiXmozR/FvCL19Lgm5/JtNrh7MFsL/AlrUNSMzo7ctVgmCKtTkNYEHpbRfakx7cSHn7rCRF5S3oCG2gYkF9Pke/W0IRYhyhI46kJlK6i5ne9Fb1ICyPBaBY93xPWtTCgUTqAzlxulqMHGm8eHru06SavoSymUF7nzFGCIm+wZjUauknpyiPWMY+kIlTTKqk/bA2yNjHDWm2eQj7qYUJaM2OikTLS07hyZ1K5gPRGsNmdmJ+mVfagvz7rGEJa+1b40aT93TQV6S2Mz1fIx20E7Gutw2h7vdJQniuKQP2AabLloVCjW8FT0hyLKzz3UuWGXLF8u1kxelk+qaFqTiH9Fqu7I+1J/wTaAe2jNNJB80l7s9sjM7A9rsOWwcHZaGJndpQWgaZDNtweij1nNGMFM531xgryb6dDlJGuDvKH/jgu8cBHhiyNq6XJJLYexSfAyjSoPGEhVic5Dd/MvK449Yc14FIoiTf6ji3mFLdBcbZhqA0ARsix1KavkrG9UcbxQBG2va2zd2/6Wo8i3nQXeX2crxiMH3jYycAO5ZtSitPiFpIm9ftwxi6p+feD5oIpfIq0TMK29ABkyW8ZGoFLD3h7DBQ3fQIfdgBy36x8ASFCpSsuDeVgg6HVJVBcUKwAwFlRoBlJQ1kKHanaFHLF+4DGNDTMRzXyGzR9LuWp7JG9ofXEOXL++/QP4gLDvMxYADUAAAAASUVORK5CYII="
						alt="Question Image"
					/>
					<p class={q7 === false ? 'te' : 'te blue'}>
						Do I need prior volunteering experience to join the Interact Club?
					</p>
				</div>
				<img
					src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAfUlEQVR4nO2RwQ2AIAxFYSCpGziORxehid4cQzqgNdVwMSIhQrz0HcnPexCMURTlR5htjzTkZueG2RbLwYcFfNg7v02pGSCNsnE+rGURCSDNgMSpSJTLpjyQicBn+UsEqsnv/4FXJMrl7Lv86SXVbp6IuCbyiIibyRXFJDgAWUuCZOESQhMAAAAASUVORK5CYII="
					alt="dropdown"
					class={q7 === false ? 'down' : 'up'}
				/>
			</div>
			{#if q7 === true}
				<p class="ans">
					No, prior volunteering experience is not required. We welcome members of all experience
					levels and backgrounds. Our club is a great place to start your volunteering journey and
					learn more about making a positive impact.
				</p>
			{/if}
		</div>

		<div class="faq-card" on:click={() => (q8 = !q8)}>
			<div class="card">
				<div class="faq-flex">
					<img
						src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFfklEQVR4nO1aTYwUVRBuFEWFqKv4c0OT1eCwU2/IJMaL7sUoKIoaPeDPgUQC8WfdIMZ4gCHxsLj9atZFSNyD8eLFSYSpmtkVNLIS0YAgggeXFTkY/w4aMQZXjZox9fr1TMedXqZ/ZnY1VPKSgX5b1fVe/XxV1Y5zjv6nlME9VyjN9ykkFzSNKs0nFNJPCvkPb8lvmjDPkNxckVZnB6pdzlygJYXxi8DlxwD5HYX8t0KuRVmg+S/QtFchPdo9PLag4wrcgqWLAelZ0Pxd/cU0/Q6a94GmzXIzy4eqN8mJ50dGLpAlv+X/5BkgbwGkcfmbulLI34LmjXI4HVFCueW7laZTgVM9nNX8eH5b6bLIvIZ2X66wvE4hHQnc1JdZl1e214w0vRq4gU9Uke9Iiz8grQBNnzYOiHamfjuZweq15sU9Ab+CpqcfKpXOT1WI4zjCM6vLz4DmKf+2e16ma1JhDi5dL9ftnRRNgFvpcdpMPYMECmnSKnNS3iERw9zw2FV1hkgf5zUvdjpE2YFqF2g+YM34lFhFLEZinwFz+gjcvQudDhO4excq5IO+mcXymYZj04QkO2eWaOkru65smBntjB5ifceO6RP5Eb7ERCLkPoX0vEJe26N5aVyfAT8AIK1oOdn5eUKiU5zIA0gvgObTzTM6fZDDiorKVyH1+87fkomB5k1+nogaYnsL4/NB064WoMlUDrk3Bu9j9jD6W0h6FnbESHbWhIIv/Z7S/KRgKaVZK6QzgZv5PrOjtCgK/6zLK62lfDMjNjMCbYSI4xMW7fqZefDfe0CP3qiQf6nvKfKGSEJqtXl+JM0hPxy6z6LYmmCnqIrksHJXQImvxBSaytC8LWBib0aVo5DXe6bPbzfdICFWYLUg0jgAMFus3CqQXFCs1Buh+zStCZje/shyBqpdUt8A0p9N39Mriswp7XPaSArpqcCNlOPwAE3ve5ZTvne6AOOMxiw2O+2iQuE8gToBRTbFYaOQtob5oWg5GqplSpRDfiIQtc6A+9bVcfgorNxvUwRPewhIX8hDqeKcNtByt7oEkH8O+MdzcXmpIi2zDn9i2kPQ/KM8FGzjpExeMrNI1jOpA0nqmbzmxRau/DDtoe121DKF0oVOygSaXgwocVoN7b4uCb/u4bEFfp+gY4pk3fJtJqxbRbJu5cGkPLtnUqQdpiXmozR/FvCL19Lgm5/JtNrh7MFsL/AlrUNSMzo7ctVgmCKtTkNYEHpbRfakx7cSHn7rCRF5S3oCG2gYkF9Pke/W0IRYhyhI46kJlK6i5ne9Fb1ICyPBaBY93xPWtTCgUTqAzlxulqMHGm8eHru06SavoSymUF7nzFGCIm+wZjUauknpyiPWMY+kIlTTKqk/bA2yNjHDWm2eQj7qYUJaM2OikTLS07hyZ1K5gPRGsNmdmJ+mVfagvz7rGEJa+1b40aT93TQV6S2Mz1fIx20E7Gutw2h7vdJQniuKQP2AabLloVCjW8FT0hyLKzz3UuWGXLF8u1kxelk+qaFqTiH9Fqu7I+1J/wTaAe2jNNJB80l7s9sjM7A9rsOWwcHZaGJndpQWgaZDNtweij1nNGMFM531xgryb6dDlJGuDvKH/jgu8cBHhiyNq6XJJLYexSfAyjSoPGEhVic5Dd/MvK449Yc14FIoiTf6ji3mFLdBcbZhqA0ARsix1KavkrG9UcbxQBG2va2zd2/6Wo8i3nQXeX2crxiMH3jYycAO5ZtSitPiFpIm9ftwxi6p+feD5oIpfIq0TMK29ABkyW8ZGoFLD3h7DBQ3fQIfdgBy36x8ASFCpSsuDeVgg6HVJVBcUKwAwFlRoBlJQ1kKHanaFHLF+4DGNDTMRzXyGzR9LuWp7JG9ofXEOXL++/QP4gLDvMxYADUAAAAASUVORK5CYII="
						alt="Question Image"
					/>
					<p class={q8 === false ? 'te' : 'te blue'}>
						How can I contact the J.P. Stevens Interact Club for more information?
					</p>
				</div>
				<img
					src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAfUlEQVR4nO2RwQ2AIAxFYSCpGziORxehid4cQzqgNdVwMSIhQrz0HcnPexCMURTlR5htjzTkZueG2RbLwYcFfNg7v02pGSCNsnE+rGURCSDNgMSpSJTLpjyQicBn+UsEqsnv/4FXJMrl7Lv86SXVbp6IuCbyiIibyRXFJDgAWUuCZOESQhMAAAAASUVORK5CYII="
					alt="dropdown"
					class={q8 === false ? 'down' : 'up'}
				/>
			</div>
			{#if q8 === true}
				<p class="ans">
					You can reach out to us by emailing thejpsinteractclub@gmail.com. We're happy to answer
					any additional questions you may have or provide more details about our club and
					activities.
				</p>
			{/if}
		</div>
	</section>
	<Footer />

	<style>
		.faq {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			padding: 6rem 8rem 6rem 8rem;
		}

		.faq-card {
			width: 90%;
			padding: 0.1rem 1rem;
			margin-bottom: 25px;
		}

		.faq-card .te:hover {
			opacity: 0.5;
		}

		.card {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.ans {
			margin: 0;
			padding: 0;
			margin-top: 10px;
			font-size: 19px;
		}

		.blue {
			color: var(--primary);
		}

		.faq-card:hover {
			cursor: pointer;
		}

		.faq-flex {
			display: flex;
			align-items: center;
		}

		.faq-flex img {
			width: 35px;
			margin-right: 15px;
		}

		.faq-flex p {
			margin: 0;
			padding: 0;
		}

		.down {
			width: 30px;
			height: 30px;
			transition: 10ms ease-in-out;
		}

		.up {
			width: 30px;
			height: 30px;
			rotate: 180deg;
			transition: 10ms ease-in-out;
		}

		.title2 {
			padding: 0;
			margin: 0;
			font-weight: 500;
			text-align: center;
			font-family: 'Rubik', sans-serif;
		}

		hr {
			background: var(--foreground);
			border: 2px solid var(--foreground);
			width: 35%;
			margin-bottom: 40px;
		}

		.hero {
			padding: 0;
			margin: 0;
			height: 89vh;
			width: 100%;
			background: var(--secondary);
			opacity: 1;
			background-image: linear-gradient(135deg, #00b4e7 25%, transparent 25%),
				linear-gradient(225deg, #00b4e7 25%, transparent 25%),
				linear-gradient(45deg, #00b4e7 25%, transparent 25%),
				linear-gradient(315deg, #00b4e7 25%, #00a3d4 25%);
			background-position: 10px 0, 10px 0, 0 0, 0 0;
			background-size: 30px 30px;
			background-repeat: repeat;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.left-half {
			max-width: 50vw;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: left;
			padding: 0 8rem 0 8rem;
		}

		.title {
			font-weight: 600;
			margin: 0;
			color: var(--primary-bg);
		}

		.description {
			font-size: 1.5rem;
			font-weight: 500;
			margin: 0;
			color: var(--secondary-bg);
		}

		.right-half {
			max-width: 50vw;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: start;
			padding: 0 8rem 0 0;
		}

		.learn-more {
			margin: 0;
			text-decoration: none;
			margin-top: 1rem;
		}

		.learn-more button {
			padding: 0.6rem 1rem;
			border: 3px solid white;
			background: scroll;
			font-size: 17px;
			display: flex;
			align-items: center;
			border-radius: 40px;
		}

		.learn-more button img {
			margin-left: 0.4rem;
			height: 20px;
		}

		.learn-more button:hover {
			cursor: pointer;
			border: 3px solid var(--secondary-fg);
			background-color: var(--secondary-fg);
		}

		@media only screen and (max-width: 600px) {
			.hero {
				flex-wrap: wrap;
				height: auto;
			}

			.left-half {
				padding: 2rem 2rem 0 2rem;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: start;
				max-width: 100%;
			}

			.faq {
				padding: 4rem 2rem 4rem 2rem;
				max-width: 100%;
			}

			.right-half {
				padding: 2rem 2rem 4rem 2rem;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				max-width: 100%;
			}

			.faq-flex p {
				font-size: 18px;
			}
		}
	</style>
{/if}

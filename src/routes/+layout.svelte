<script>
	import Navbar from '$co/Navbar.svelte';
	import '../app.postcss';
</script>


<Navbar />
<slot />

<style>
	:global(html) {
		transition: all 0.1s ease-in;
	}
</style>

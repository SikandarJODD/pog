<script>
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	let themeCheck = false;
	onMount(() => {
		themeChange(false);
	});
	let imgUrl = 'https://i.pinimg.com/564x/90/2b/84/902b841f3567ff8282b5db97c257aef1.jpg';
	let navs = [
		{
			name: 'Home',
			link: '/'
		},
		{
			name: 'Blogs',
			link: '/blogs'
		},
		{
			name: 'Dashboard',
			link: '/dashboards'
		},
		{
			name: 'About',
			link: '/about'
		}
	];
</script>

<div class="navbar bg-base-100">
	<div class="navbar-start">
		<div class="dropdown">
			<label tabindex="0" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</label>
			<ul
				tabindex="0"
				class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li><a>Item 1</a></li>
				<li>
					<a>Parent</a>
					<ul class="p-2">
						<li><a>Submenu 1</a></li>
						<li><a>Submenu 2</a></li>
					</ul>
				</li>
				<li><a>Item 3</a></li>
			</ul>
		</div>
		<a
			class="btn btn-ghost normal-case text-xl md:text-2xl border-2 border-primary font-cabin"
			href="/">Pog</a
		>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			{#each navs as nav}
				<li>
					<a class="hover:text-primary" href={nav.link}>{nav.name}</a>
				</li>
			{/each}
		</ul>
	</div>
	<div class="navbar-end">
		<div class="box pt-2 px-2">
			<button data-set-theme={themeCheck ? 'light' : 'night'} data-act-class="ACTIVECLASS">
				<input
					type="checkbox"
					class="toggle toggle-success bg-blue-700"
					bind:checked={themeCheck}
				/>
			</button>
		</div>
		<div class="dropdown dropdown-end">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn btn-ghost btn-circle avatar">
				<div class="w-10 rounded-full border border-blue-500">
					<img src={imgUrl} alt="user Avatar" />
				</div>
			</label>
			<ul
				tabindex="0"
				class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li>
					<a class="justify-between">
						Profile
						<span class="badge">New</span>
					</a>
				</li>
				<li><a>Settings</a></li>
				<li><a>Logout</a></li>
			</ul>
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap');
	.font-cabin {
		font-family: 'Balsamiq Sans', cursive;
	}
</style>

<script>
	import { UserCircle2 } from 'lucide-svelte';
</script>

<div class="hero min-h-[90vh] bg-base-100">
	<div class="hero-content text-center">
		<div class="max-w-3xl">
			<h1 class="text-5xl font-bold md:text-7xl md:text-info">Create & Post Stuff</h1>
			<p class="py-6 font-thin md:text-2xl text-slate-500">
				Create Your Blogs & Publish it. write your own Story
			</p>
			<div class="flex justify-center">
				<button class="btn btn-info mx-1 w-[40%] md:w-[20%] opacity-95 hover:opacity-100"
					>Blogs
				</button>
				<a href="/signin">
					<button class="btn btn-info btn-outline mx-1">
						<UserCircle2 strokeWidth={1} />
						Sign In
					</button>
				</a>
			</div>
		</div>
	</div>
</div>

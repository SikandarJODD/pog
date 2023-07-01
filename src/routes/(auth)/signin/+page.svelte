<script>
	import { goto } from '$app/navigation';
</script>

<div class="hero min-h-[90vh] bg-base-200">
	<div class="hero-content flex-col">
		<div class="card flex-shrink-0 w-full max-w-sm bg-base-100 border-2 border-info">
			<div class="py-5 px-6 text-center">
				<h1 class="text-md md:text-xl font-bold">Sign In to Join...</h1>
			</div>
			<div class="card-body md:px-10 pt-1 pb-6 md:w-[24vw]">
				<form>
					<div class="form-control">
						<label class="label" for="email">
							<span class="label-text md:text-lg">Email</span>
						</label>
						<input type="text" placeholder="email" class="input input-bordered input-info" />
					</div>
					<div class="form-control">
						<label class="label" for="password">
							<span class="label-text md:text-lg">Password</span>
						</label>
						<input type="text" placeholder="password" class="input input-bordered input-info" />
					</div>
					<div class="form-control mt-6">
						<button class="btn btn-primary Create Account">Login</button>
					</div>
				</form>
				<div class="form-control mt-2">
					<a href="/signup" class="btn btn-primary btn-outline"> Create Account </a>
				</div>
			</div>
		</div>
	</div>
</div>

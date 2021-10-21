<template>
	<div class="left-side">
		<div class="accordion" id="accordionExample">
			<div class="card">
				<div class="card-header" id="headingOne">
					<h2 class="mb-0">
						<button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
							Project 1
						</button>
					</h2>
				</div>

				<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
					<div class="card-body">
						<ul class="list">
							<li class="list-item">client</li>
							<li class="list-item">client</li>
							<li class="list-item">client</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="card">
				<div class="card-header" id="headingTwo">
					<h2 class="mb-0">
						<button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
							Project 2
						</button>
					</h2>
				</div>
				<div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
					<div class="card-body">
						<ul class="list">
							<li class="list-item">User </li>
							<li class="list-item">User </li>
							<li class="list-item">User </li>
						</ul>
					</div>
				</div>
			</div>
		</div>       
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss" scoped>
.left-side {
  background: #fff;
  flex: 1;
  min-width: 200px;
}

.card {
	width: 100%;
	border: none;
	margin-bottom: 15px;
}

.card-header {
	background: none;
	padding: 0;
	border-bottom: none;

	button {
		color: #333;
		font-weight: 500;
		text-decoration: none;
		padding: 0;
	}

	.btn.focus, .btn:focus {
		box-shadow: none;
	}
}

.card-body {
	padding: 10px 0;
}

.card-body .list {
	list-style: none;
	margin:0;
	padding: 0;

	.list-item {
		margin-bottom: 10px;
		border-radius: 20px;
		padding: 5px 20px;
		background: #647dee08;
		color: #333;
		font-weight: 400;
		transition: all .3s ease;

		&:hover {
			background: #647dee15;
		}
	}
}
</style>
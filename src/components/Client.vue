<template>
	<div class="col-12 col-xl-4 col-lg-6 col-md-12">
		<div class="card">
			<div class="card-body">
				<div class="card-title">{{ user.name }}</div>
				<div class="card-subtitle"> {{user.company}} </div>
				<div class="card-btn"> 
					<button class="btn" data-toggle="modal" data-target="#staticBackdrop">More info</button> 
				</div>
			</div>
			<!-- ### Modal ### -->
			<div class="modal fade" 
				id="staticBackdrop" 
				data-backdrop="static" 
				data-keyboard="false" 
				tabindex="-1" 
				aria-labelledby="staticBackdropLabel" 
				aria-hidden="true"
			>
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content">
						<div class="modal-header">
							<h5>User info</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<div class="modal-body__title">User name: <b>{{user.name}}</b> </div>
							<div class="modal-body__sutitle">Company: <b>{{user.company}}</b> </div>
							<div class="modal-body__sutitle">Projects: <b>{{user.projects}}</b> </div>
							<div class="modal-body__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>Explicabo, assumenda.</div>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
						</div>
					</div>
				</div>
			</div>
			<!-- ### Modal ### -->

		</div>
	</div>
</template>

<script>
	export default {
		props: ['user']
	}
</script>

<style lang="scss" scoped>
.card {
	border-radius: 10px;
	padding: 14px;
	margin-bottom: 20px;
}

.card-title {
	font-weight: 500;
	font-size: 18px;
	margin-bottom: 5px;
}

.card-subtitle {
	margin-bottom: 15px;
	color: #888;
}

.card-text {
	margin-bottom: 15px;

	span {
		color: #647dee;
		font-weight: 500;
	}
}

.card-btn .btn {
	background: #647dee;
	color: #fff;

	&:hover {
		background: #647deece;
	}
}
</style>
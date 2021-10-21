<template>
	<div class="login-page">
		<div class="users"> Users for log in <pre>{{users}}</pre></div>
		<div class="circle"></div>
		<div class="square"></div>
		<div class="login-page__box login-area p-5 mx-2">

			<div class="login-area__title text-center text-white font-weight-bold">Login</div>

			<form class="login-area__action">
				<div class="form-group mb-4">
					<input 
						type="email" 
						placeholder="Email"
						class="form-control" 
						aria-describedby="emailHelp"
						v-model="userData.userName"
						required
					>
				</div>

				<div class="form-group mb-4">
					<input 
						type="password" 
						class="form-control" 
						v-model="userData.password"
						required
						placeholder="Password"
					>
				</div>

				<button type="submit" @click.prevent="login()" class="btn btn-success mx-auto d-block">Submit</button>

			</form>

		</div>
	</div>
</template>

<script>
	export default {
		data: () => ({
			userData: {
				userName: null,
				password: null
			},
			users: [
				{
					userName: 'admin',
					password: 'admin'
				},
				{
					userName: 'John',
					password: '123'
				},
				{
					userName: 'Manager',
					password: '123'
				}
			]
		}),
		methods: {
			login() {
				if (this.userData.userName && this.userData.password) {
					this.users.forEach(user => {
						if (user.userName == this.userData.userName && user.password == this.userData.password) {
							this.$store.commit('SET_USER_STATUS', true)
							this.$store.dispatch('GET_USER', {username: user.userName, password: user.password})
							this.$router.push('/')
						}
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.login-page {
	background-color: #7f53ac;
	background-image: linear-gradient(315deg, #7f53ac 0%, #647dee 74%);
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;

	&__box {
		max-width: 400px;
		width: 100%;
	}
}

.users {
	position: absolute;
	top: 10px;
	left: 10px;
	color: rgba(255, 255, 255, 1);
	pre {
		color: rgba(255, 255, 255, .8);
		font-size: 14px;
	}
}

.login-area {
	border-radius: 20px;
	backdrop-filter: blur(10px);
	background: rgba(255, 255, 255, .1);
	box-shadow: -5px -5px 20px rgba(255, 255, 255, .3),
				5px 5px 20px rgba(0, 0, 0, .3);
	border: 1px solid rgba(255, 255, 255, .3);
	overflow: hidden;

	&__title {
		font-size: 30px;
		margin-bottom: 30px;
	}

	&__action {
		width: 100%;
	}
}

.circle, .square {
	width: 250px;
	height: 250px;
	position: absolute;
}

.circle {
	border-radius: 50%;
	top: 30%;
	left: 30%;
	background-color: #f9c5d1;
	background-image: linear-gradient(315deg, #f9c5d1 0%, #9795ef 74%);
}

.square {
	width: 100px;
	height: 100px;
	top: 61%;
	left: 58%;
	background-color: #8989bb;
	background-image: linear-gradient(315deg, #8989bb 0%, #a5a4cb 74%);
}
</style>
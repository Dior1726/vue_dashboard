<template>
	<nav class="navbar navbar-expand-lg fixed-top navbar-light bg-white border-bottom shadow-sm">
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<form class="form-inline my-2 my-lg-0">
				<div class="input-group-prepend">
					<span class="input-group-text search-icon" id="inputGroup-sizing-sm"><i class="bx bx-search"></i></span>
				</div>
				<input class="form-control mr-sm-2 search-input " type="search" placeholder="Search for projects..." aria-label="Search">
			</form>
			<ul class="navbar-nav mr-auto ml-4">
				<li class="nav-item">
					<router-link to="/" exact class="nav-link">Home</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/clients" class="nav-link">Clients</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/asx" class="nav-link">Overview</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/abs" class="nav-link">Registers</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/abs" class="nav-link">Time</router-link>
				</li>
			</ul>
			<div class="d-flex">
				<div class="user-icon">
					<i class="bx bx-user"></i>
				</div>
				<div class="dropdown mr-2">
					<button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" 
						data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						{{userName}}
					</button>
					<div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
						<a class="dropdown-item">User info </a>
						<a class="dropdown-item">Settings</a>
						<a class="dropdown-item" @click.prevent="logout">Logout</a>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		methods: {
			logout() {
				this.$router.push('/auth')
				this.$store.commit('SET_USER_STATUS', false)
			}
		},
		computed: {
			userName() {
				return this.$store.state.user.username
			}
		}
	}
</script>

<style lang="scss" scoped>
nav {
  margin-left: 90px;
}

button:focus {
	box-shadow: none;
}

.user-icon {
	margin: -3px 0;
	border-radius: 50%;
	width: 40px;
	height: 40px;
	background: #647dee15;
	display: flex;
	justify-content: center;
	align-items: center;

	i {
		font-size: 18px;
		color: #647dee;
	}
}

.nav-item {
  margin-right: 10px;
  
  .nav-link {
    padding-left: 15px;
    padding-right: 15px;
    position: relative;
    width: 100%;
    transition: all .3s ease;

    &::after {
      content: '';
      display: block;
      transform: scale(0);
      width: 100%;
      height: 3px;
      border-radius: 3px;
      background: #647dee;
      position: absolute;
      bottom: -10px;
      left: 0;
      right: 0;
      transition: transform .3s ease;
    }

    &:hover {
      &::after {
        transform: scale(1);

        @media screen and (max-width: 992px) {
          transform: scale(0);
        }

      }
    }

    &.router-link-exact-active,
    &.router-link-active {
      color: #647dee;
      &::after {
        display: block;
        transform: scale(1);

        @media screen and (max-width: 992px) {
          & {
            transform: scale(0);
            display: none;
          }
        }
      }
    }

  }
}

.search-input,
.search-icon {
  border: none;
  outline: none;
  background: none;
}

.search-input {
  max-width: 200px;
  min-width: 180px;
  margin-left: -10px;

  &:focus {
    box-shadow: none;
  }
}

.dropdown .btn {
	text-transform: capitalize;
}

.dropdown-menu {
	margin-top: 10px;
}

</style>
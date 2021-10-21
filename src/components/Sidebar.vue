<template>
	<div class="sidebar-nav shadow">
		<router-link tag="div" to="/" exact class="sidebar-nav__item">
			<i class="bx bx-home-alt"></i>
		</router-link>
		<router-link tag="div" to="/as" class="sidebar-nav__item">
			<i class="bx bx-folder"></i>
		</router-link>
		<router-link tag="div" to="/as" class="sidebar-nav__item">
			<i class="bx bx-grid-alt"></i>
		</router-link>
		<router-link tag="div" to="/as" class="sidebar-nav__item">
			<i class="bx bxl-trello"></i>
		</router-link>
		<router-link tag="div" to="/as" class="sidebar-nav__item">
			<i class="bx bx-briefcase"></i>
		</router-link>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss" scoped>
.sidebar-nav {
  position: fixed;
  padding-top: 20px;
  top: 0;
  left: 0;
  max-width: 90px;
  width: 100%;
  height: 100vh;
  background: #647dee;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  &__item {
    margin: 10px 15px;
    padding: 10px;
    text-align: center;
    font-size: 24px;
    transition: all .3s ease;
    border-radius: 10px;

    &:hover {
      background: rgba(255, 255, 255, .2);
    }

    &.router-link-active, .router-link-exact-active {
      background: rgba(255, 255, 255, .2);
    }

    i {
      color: #fff;
    }
  }
}
</style>
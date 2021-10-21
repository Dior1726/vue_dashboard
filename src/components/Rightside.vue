<template>
	<div class="right-side">
		<div class="right-side__title">
				Weather condition <span>22℃</span>
		</div>
		<div class="card mb-4 shadow-sm" v-for="index of 3" :key="index">
			<div class="card-body">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, animi?
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss" scoped>
.right-side {
  background: #fff;
  flex: 1;

	&__title {
		font-weight: 500;
		margin-bottom: 30px;

		span {
			font-size: 20px;
			font-weight: bold;
			margin-left: 10px;
		}
	}

	.card {
		border-radius: 10px;
	}

  @media screen and (max-width: 992px) {
    & {
      display: none;
    }
  }
}
</style>
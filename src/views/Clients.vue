<template>
	<div class="clients-page">
		<div class="clients-page__title title">
			{{this.$route.name}} 
		</div>

		<div class="row">
      <client v-for="(user, index) of users" :key="index" :user="user" />
    </div>
	</div>
</template>

<script>
import Client from '../components/Client.vue'

export default {
	components: { Client },
	data: () => {
		return {
			users: [
				{
					name: 'John M',
					company: 'Astana Air',
					projects: 3
				},
				{
					name: 'Anthony J',
					company: 'Fly Aristan',
					projects: 5
				},
				{
					name: 'Robert D',
					company: 'Turkish Airlines',
					projects: 2
				}
			]
		}

	}
}
</script>

<style lang="scss" scoped>

.clients-page__title {
	margin-bottom: 20px;
}

.title {
	font-size: 24px;
	font-weight: 500;
	color: #647dee;
}
</style>
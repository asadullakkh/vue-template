<template>
	<div
		v-if="pending"
		class="bg-[red] w-full flex items-center justify-center h-screen"
	>
		<span class="text-[50px]">Loading....</span>
	</div>
	<div v-else class="bg-[red] -700:bg-[blue]">hello {{ $t('posts') }}</div>
	<HelloWorld :func="funcMethod" />
	<select v-model="lang">
		<option value="uz">uz</option>
		<option value="en">en</option>
	</select>

	<router-link to="/go">go</router-link>
</template>

<script>
import { mapState } from 'vuex';

export default {
	data() {
		return {
			lang: 'uz',
			pending: true,
			func: undefined,
		};
	},
	computed: {
		...mapState({
			posts: state => state.posts,
		}),
	},
	watch: {
		lang(val) {
			this.$i18n.locale = val;
			localStorage.setItem('locale', val);
		},
	},
	async created() {
		this.lang = localStorage.getItem('locale');
		await Promise.allSettled([this.$store.dispatch('fetchPosts')]).finally(
			() => {
				this.pending = false;
			},
		);
		console.log(this.posts, 'posts');
	},
	methods: {
		funcMethod(val) {
			console.log(val);
		},
	},
};
</script>

<style lang="scss" scoped></style>

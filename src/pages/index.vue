<template>
  <div class="bg-[red] -700:bg-[blue]">hello {{ $t('name') }}</div>
  <select v-model="lang">
    <option value="uz">uz</option>
    <option value="en">en</option>
  </select>

  <router-link to="/asad">asad</router-link>
</template>

<script>
export default {
  data() {
    return {
      lang: 'uz'
    }
  },
  created() {
    this.lang = localStorage.getItem('locale')
  },
  watch: {
    lang(val) {
      this.$i18n.locale = val
      localStorage.setItem('locale', val)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
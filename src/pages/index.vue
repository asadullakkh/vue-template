<template>
  <div class="bg-[red] -700:bg-[blue]">hello {{ $t("name") }}</div>
  <select v-model="lang">
    <option value="uz">uz</option>
    <option value="en">en</option>
  </select>

  <router-link to="/go">go</router-link>
</template>

<script>
export default {
  data() {
    return {
      lang: "uz",
    };
  },
  watch: {
    lang(val) {
      this.$i18n.locale = val;
      localStorage.setItem("locale", val);
    },
  },
  created() {
    this.lang = localStorage.getItem("locale");
  },
  methods: {
    addParams(key, val) {
      const queryParams = new URLSearchParams(window.location.search);
      queryParams.set(key, val);
      history.replaceState(null, null, "?" + queryParams.toString());
    },
  },
};
</script>

<style lang="scss" scoped></style>

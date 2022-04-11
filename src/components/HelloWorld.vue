<template>
  <div>Hello world</div>
</template>

<script>
export default {
  props: {
    a: String,
  },

  mounted() {
    console.log("hello");
  },
};
</script>

<style lang="scss" scoped></style>

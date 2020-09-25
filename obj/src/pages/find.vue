<template>
  <div class="find">
    <div v-for="(item, index) of $store.state.find" :key="index">
      <img :src="item.img" />
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { UPDATE_FIND } from "../store/types.js";
export default {
  computed: mapState(['find']),
  mounted() {
    this.$store.dispatch(UPDATE_FIND);
    // this.UPDATE_FIND()
  },
//   methods:mapActions([UPDATE_FIND])
};
</script>

<style scoped>
.find {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.find > div {
  width: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.4rem;
}
.find > div img {
  border-radius: 50%;
}
.find > div span {
  margin-top: 0.2rem;
  color: #aeb6b2;
}
</style>

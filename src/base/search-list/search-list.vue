<template>
  <div class="search-list">
    <transition-group tag="ul" name="list">
      <li class="search-item" @click="selectItem(item)" v-for="item in searches" :key="item">
        <span class="text">{{item}}</span>
        <span class="icon" @click.stop="deleteOne(item)">
          <i class="icon-delete"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: {
    searches: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    selectItem(item) {
      this.$emit("select", item);
    },
    deleteOne(item) {
      this.$emit("delete", item);
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus"></style>

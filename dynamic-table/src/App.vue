<template>
  <div>
    <md-toolbar class="md-primary">
      <h1 class="md-title">Dynamic Material Table</h1>
    </md-toolbar>

    <table-card :data="data"></table-card>

  </div>
</template>

<script>
import TableCard from "./components/TableCard.vue";
import { data } from "./data.json";

export default {
  name: "App",
  components: {
    TableCard,
  },
  data() {
    return {
      data,
    };
  },
};
</script>

<style lang="scss">
.md-content {
  padding: 16px;
}
</style>
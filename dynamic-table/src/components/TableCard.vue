<template>
  <md-content>
    <md-table
      md-card
      v-model="data.data"
      md-sort="increase"
      md-sort-order="desc"
      md-fixed-header
    >
      <md-table-toolbar>
        <h1 class="md-title">{{ data.header }}</h1>
        <md-field>{{ data.subheader }}</md-field>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell
          v-for="field in data.fields"
          :key="field.field"
          :md-label="field.display"
          :md-sort-by="field.field"
        >
          {{ prepVal(item[field.field], field.type) }}
        </md-table-cell>
      </md-table-row>
    </md-table>
  </md-content>
</template>

<script>
export default {
  props: ["data"],
  methods: {
    prepVal(value, dataType) {
      if (dataType === "int") {
        return value.toLocaleString();
      } else if (dataType === "percent") {
        return `${(value * 100).toLocaleString()}%`;
      } else if (dataType === "dollar") {
        return `$${value}`;
      } else if (dataType === "text") {
        return value;
      } else if (dataType === "float") {
        return value.toFixed(3);
      }
    },
  },
};
</script>
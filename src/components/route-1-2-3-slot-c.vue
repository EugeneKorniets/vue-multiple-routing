<template>
  <div>
    <p>Route 1, 2 ,3 Slot C</p>
    <p>{{ id }}</p>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: "default"
    }
  },

  mounted() {
    console.log("I'm mounted");
  }
};
</script>


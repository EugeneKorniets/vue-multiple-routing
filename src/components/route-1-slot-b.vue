<template>
  <div>
    <p>Route 1 Slot B</p>
    <p>{{ id }}</p>
  </div>
</template>

<script>
export default {
  props: {
    id: Number
  }
};
</script>
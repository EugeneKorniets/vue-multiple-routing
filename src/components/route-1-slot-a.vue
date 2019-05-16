<template>
  <div>
    <p>Route 1 Slot A</p>
    <p>{{ id }}</p>
  </div>
</template>

<script>
export default {
  props: {
    id: String
  }
};
</script>

<template>
  <div>
    <h1>Main Page</h1>
    <div class="wrapper">
      <div class="left-column">
        <p>Left Column</p>
        <router-view name="a"/>
      </div>
      <div class="right-column">
        <p>Right-Column</p>
        <router-view name="b"/>
      </div>
    </div>
    <div class="actions">
      <router-link class="link" :to="{ name: 'mainPage' }">Go to default</router-link>
      <router-link class="link" :to="{ name: 'route-1' }">Go to router-view-1</router-link>
      <router-link class="link" :to="{ name: 'route-2' }">Go to router-view-2</router-link>
    </div>
  </div>
</template>

<style>
.wrapper {
  display: flex;
  width: 100%;
}
.left-column {
  width: 30%;
  height: 100px;
  padding: 10px;
  text-align: left;
  background: lightgray;
}
.right-column {
  width: 70%;
  height: 100px;
  padding: 10px;
  text-align: left;
  background: lightgreen;
}
.actions {
  padding: 10px;
}
.link {
  margin: 0 20px;
}
</style>

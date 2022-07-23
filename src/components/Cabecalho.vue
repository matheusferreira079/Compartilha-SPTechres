<template>
    <header>
        <nav class="navbar has-shadow topo__color">
            <img class="img__logo" src="../assets/logo.png" alt="">
        </nav>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "Principal",
  components: {
  }
});

</script>

<style>
.topo__color {
  background-color: #F2F2F2;
}

.img__logo {
  margin: auto;
  width: 150px;
}
</style>
<template>
  <div class="image-container m-2">
      <img src="../assets/hero.jpg" class="d-flex flex-column p-3 img-thumbnail rounded mx-auto" alt="">
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Homee',
  props: {
  },
  computed: {
    ...mapState(['isLogged', 'user'])
  },
}
</script>

<style scoped>
.image-container {
height: 50vh; /* Ustaw wysokość diva */
overflow: hidden; /* Przycina obraz */
}

.image-container img {
object-fit: cover; /* Obraz pokrywa cały div */
height: 50vh; /* Obraz ma tę samą wysokość co div */
width: 60%;
}
</style>
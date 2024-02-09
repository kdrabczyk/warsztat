<template>
    <Homee />
    <h2>Witaj</h2>
    <p> <span class="fw-bold">Wrenches & Chances </span>to nowoczesny warsztat samochodowy, który oferuje kompleksowe usługi serwisowe. Nasz serwis specjalizuje się w samochodach marek VW, Audi, Seat i Skoda. Działamy z pasją i dbamy o jakość świadczonych usług. Oto, co wyróżnia nasz serwis:</p>

<ul>
    <li>Profesjonalizm i Kompleksowość: Nasz wykwalifikowany zespół mechaników i elektryków jest gotowy do diagnozy, naprawy i serwisu Twojego pojazdu. Specjalizujemy się w diagnostyce komputerowej, naprawie silników benzynowych, elektrycznych i hybrydowych, a także w regeneracji filtrów cząstek stałych. Nasze usługi obejmują również montaż haków holowniczych, serwis klimatyzacji, przeglądy okresowe i wiele innych.</li>
    <li>Gwarancja i Wybór: Nasz serwis jest przygotowany do obsługi aut w okresie gwarancyjnym. Dzięki aktualnym regulacjom prawym, możesz wybrać, gdzie chcesz wykonać przegląd swojego auta. Auto-Serwis Szymecki zapewnia kompleksowość, profesjonalizm i wysoki standard usług na poziomie Autoryzowanych Stacji Obsługi. Jesteśmy tu, abyś nie tylko zachował gwarancję całopojazdową, ale także otrzymał najlepszą obsługę dla swojego samochodu</li>
</ul>
<p class="fs-3">Jeśli potrzebujesz pomocy z Twoim samochodem, Wrenches & Chances jest gotowy, by Ci pomóc!</p>
<router-link class="nav-link" v-if="isLogged !== false" to="/addtimetable"><button type="button" class="btn btn-dark">Umów wizytę!</button></router-link>
</template>

<script>
import { mapState } from 'vuex';

import Homee from '../components/Homee.vue'
export default {
name: 'Home',
  components: {
    Homee,
  },
  computed: {
    ...mapState(['isLogged'])
  },

  //jaki propsy przyjmuje
  props: {
    },
}



</script>
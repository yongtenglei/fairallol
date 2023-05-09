<template>
  <section id="title">
    <div class="container-fluid">
      <!-- Title -->
      <div class="row">
        <div class="col-lg-4">
          <img
            class="title-image"
            src="../../assets/gopher/GopherSpaceCommunity.png"
            alt="gopher-space"
          />
        </div>

        <div class="col-lg-4">
          <h1>COMING SOON! LOL 🍻</h1>
          <div class="mt-3">
            <button
              type="button"
              @click="handleClickStoryBtn"
              class="btn btn-dark btn-lg start-button"
            >
              <!--<i class="fab fa-apple"></i>-->
              <i class="fa-solid fa-book-sparkles"></i>
              <i class="fa-solid fa-house"></i>
              <font-awesome-icon icon="fa-solid fa-book-sparkles" />
              Start with a Story
            </button>
          </div>
          <div class="mt-3">
            <button
              type="button"
              @click="handleClickFindSolutionBtn"
              class="btn btn-outline-light btn-lg start-button"
            >
              <i class="fa-brands fa-searchengin"></i>
              Find your own solution
            </button>
          </div>
        </div>

        <div class="col-lg-4">
          <img
            class="title-image"
            src="../../assets/gopher/RickAndMorty.png"
            alt="gopher-rick"
          />
        </div>
      </div>
      <marquee>Learn more about EF1</marquee>
    </div>
  </section>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()

    function handleClickStoryBtn() {
      router.push('/home')
    }

    function handleClickFindSolutionBtn() {
      router.push('/solution')
    }

    return {
      handleClickStoryBtn,
      handleClickFindSolutionBtn,
    }
  },
}
</script>

<style lang="scss" scoped>
h1 {
  font-family: 'Montserrat';
  font-size: 3rem;
  line-height: 1.5;
  font-weight: 900;
}

#title {
  color: #fff;
  background-color: #ff4c68;
}

.container-fluid {
  padding: 3% 15%;
}

.title-image {
  width: 100%;
  /*transform: rotate(25deg);*/
}

#cta {
  background-color: #ff4c68;
  color: #fff;
  padding: 7% 15%;
  text-align: center;
}

.cta-heading {
  font-size: 3.5rem;
  font-family: 'Montserrat';
  line-height: 1.5;
  font-weight: 900;
}

.cta-btn {
  margin: 5% 0 0 0;
}

marquee {
  font-family: 'Montserrat';
  font-size: 1rem;
  margin-top: 3%;
}
</style>

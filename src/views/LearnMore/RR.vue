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
          <h1>Random Robin</h1>
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
      <marquee>Learn more about Round Robin</marquee>
    </div>
  </section>

  <section class="content">
    <div class="container-fluid">
      <h1>Random Robin</h1>
      <div
        class="explanation row d-flex align-items-center align-content-center justify-content-center"
      >
        <div class="col-lg-6 col-md-6">
          Repeat: <br />
          &nbsp;&nbsp; ◦ For agent 𝑖 = 1,2, … , 𝑛 : <br />
          &nbsp;&nbsp; ◦ Let agent 𝑖 pick her favourite unallocated item <br />
          &nbsp;&nbsp; ◦ Until all items are allocated
        </div>

        <div class="row">
          <div class="col-md-6 mb-3">
            <img
              class="title-image"
              src="../../assets/learnmore/round_robin/explain1.png"
              alt="invalid example"
            />
          </div>
          <div class="col-md-6 mb-3">
            <img
              class="title-image"
              src="../../assets/learnmore/round_robin/explain2.png"
              alt="invalid example"
            />
          </div>
          <div class="col-md-6 mb-3">
            <img
              class="title-image"
              src="../../assets/learnmore/round_robin/explain3.png"
              alt="invalid example"
            />
          </div>
          <div class="col-md-6 mb-3">
            <img
              class="title-image"
              src="../../assets/learnmore/round_robin/explain4.png"
              alt="invalid example"
            />
          </div>
          <div class="col-md-6 mb-3">
            <img
              class="title-image"
              src="../../assets/learnmore/round_robin/explain5.png"
              alt="invalid example"
            />
          </div>
          <div class="col-md-6 mb-3">
            <img
              class="title-image"
              src="../../assets/learnmore/round_robin/explain6.png"
              alt="invalid example"
            />
          </div>
          <div class="col mb-3">
            <div class="row">
              <div class="col-md-6">
                <img
                  class="title-image"
                  src="../../assets/learnmore/round_robin/explain7.png"
                  alt="invalid example"
                />
              </div>
              <div class="col-md-3">
                <p>Good!</p>
                <img
                  class="title-image"
                  src="../../assets/gopher/DRAWING_GOPHER.png"
                  alt="drawing gopher"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
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
ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}

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

.explanation {
  text-align: left;
}

.title-image {
  width: 75%;
  /*transform: rotate(25deg);*/
}

marquee {
  font-family: 'Montserrat';
  font-size: 1rem;
  margin-top: 3%;
}
</style>

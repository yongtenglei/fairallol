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
      <div class="settings">
          <h1>Random Robin</h1>
          <div>
          ◦ Repeat: <br>
            ◦ For agent 𝑖 = 1,2, … , 𝑛 : <br>
            ◦ Let agent 𝑖 pick her favourite unallocated item <br>
            ◦ Until all items are allocated 
          </div>
          <p>
            A set of indivisible items 𝑀 = {1,2, … , 𝑚} and a group of agents 𝑁
            = {1,2, … , 𝑛}.
          </p>

          <h4>Task: allocate the items to the agents</h4>

          <p>
            Each agent 𝑖 ∈ 𝑁 has value (utility) 𝑣<sub>i</sub> (𝑒) ≥ 0 on item 𝑒
            ∈ 𝑀 : (additive valuation function)
            <ul>
              <li>Valuation function of agent 𝑖: 𝑣<sub>i</sub>(X) = &Sigma;<sub>e&isin;X</sub>v<sub>i</sub>(e), for X &sube; M</li>
            </ul>
          </p>

          <p>An allocation 𝑿 = (𝑋1, 𝑋2, … , 𝑋𝑛) is a partition of 𝑴 into 𝒏 bundles
            <ul>
              <li>&cup;<sub>i&isin;N</sub>X<sub>i</sub> = M and X<sub>i</sub> &cap; X<sub>j</sub> = &empty; for all i &ne; j</li>
              <li>Agent 𝑖 receives bundle 𝑋𝑖, and has utility 𝑣𝑖 (𝑋<sub>i</sub>)</li>
            </ul>
          </p>
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
ul,li{ padding:0;margin:0;list-style:none}

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

marquee {
  font-family: 'Montserrat';
  font-size: 1rem;
  margin-top: 3%;
}
</style>

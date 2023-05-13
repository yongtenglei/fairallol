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
          <h1>Fair Allocation Basics</h1>
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
      <marquee>Learn more about Fair allocation basics</marquee>
    </div>
  </section>

  <section class="content">
    <div class="container-fluid align-items-center">
      <div class="settings">
          <h1>Indivisible Items fair division</h1>
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
      <hr>

      <!-- PROP -->
      <div class="prop algo-section">
        <h3>Proportional - PROP</h3>
        <p>Allocation 𝑿 = 𝑋1, 𝑋2, … , 𝑋𝑛 has </p>
        <p>∀𝑖 ∈ 𝑁 ∶ 𝑣𝑖 (𝑋𝑖 ) ≥  1 / 𝑛 ⋅ 𝑣𝑖(𝑀)</p>

        <div class="row align-items-center justify-content-center">

        <div class="col-md-5">
          <img
            class="title-image"
            src="../../assets/learnmore/basics/prop.png"
            alt="prop"
          />
        </div>

        <p>Howerver, PROP allocations do not always exist</p>

        <div class="row align-items-center justify-content-center">

        <div class="col-md-3">
          <img
            class="title-image"
            src="../../assets/learnmore/basics/basic_invalid_example.png"
            alt="invalid example"
          />
        </div>
        <div class="col-md-2">
          <p>Someone will get 0</p>
        </div>

        </div>



        </div>

      </div>

      <hr>

      <!-- EF -->
      <div class="ef algo-section">
        <h3>Envy-Free Allocations (EF)</h3>
        <p>Given allocation 𝑿 = (𝑋1,𝑋2, … , 𝑋𝑛), agent 𝑖 envies agent 𝑗 if</p>
        <p>𝑣𝑖 (𝑋 <sub>𝑖</sub>) &lt; 𝑣𝑖 (𝑋 <sub>𝑗</sub>)</p>

        <p>Allocation 𝑿 = (𝑋1,𝑋2, … , 𝑋𝑛) is envy-free if no agent envies another agent, i.e.,</p>
        <p>∀𝑖, 𝑗 ∈ 𝑁, 𝑣𝑖 (𝑋𝑖) ≥ 𝑣𝑖 (𝑋j)</p>

        <h4>EF => PROP</h4>
        <p>n &sdot; v<sub>i</sub>(X<sub>i</sub>) = &sum;<sub>j&isin;N</sub>v<sub>i</sub>(X<sub>j</sub>) &ge; &sum;<sub>j&isin;N</sub>v<sub>i</sub>(X<sub>j</sub>) = v<sub>i</sub>(M)</p>
        <p>v<sub>i</sub>(X<sub>i</sub>) = v<sub>i</sub>(M) / n</p>

        <p>Howerver, EF allocations do not always exist</p>

        <div class="row align-items-center justify-content-center">

        <div class="col-md-3">
          <img
            class="title-image"
            src="../../assets/learnmore/basics/basic_invalid_example.png"
            alt="invalid example"
          />
        </div>
        <div class="col-md-2">
          <p>Someone will get 0</p>
        </div>

        </div>
      </div>

            <hr>

      <!-- EF1 -->
      <div class="ef1 algo-section">
        <h3>Envy-Free up to 1 (EF1)</h3>
        <p> ∀𝑖 ∈ 𝑁, ∀𝑗 ∈ 𝑁 : </p>
        <p>∃𝑒 ∈ 𝑋𝑗 ∶  𝑣𝑖 (𝑋𝑖)  ≥  𝑣𝑖 (𝑋𝑗 ∖ g)</p>

        <div class="row align-items-center justify-content-center">

        <div class="col-md-5">
          <img
            class="title-image"
            src="../../assets/learnmore/basics/ef1_better.png"
            alt="ef1 better"
          />
        </div>

        <h4>How Ef1 works</h4>
        <div class="col-md-5">
          <img
            class="title-image"
            src="../../assets/learnmore/basics/ef1_work.png"
            alt="ef1 work"
          />
        </div>
        </div>
      </div>

      <hr>

      <!-- EFx -->
      <div class="efx algo-section">
        <h3>Envy-Free up to any (EFx)</h3>
        <p> ∀𝑖 ∈ 𝑁, ∀𝑗 ∈ 𝑁 : </p>
        <p>∀𝑒 ∈ 𝑋𝑗 ∶  𝑣𝑖 (𝑋𝑖)  ≥  𝑣𝑖 (𝑋𝑗 ∖ g)</p>

        <div class="row align-items-center justify-content-center">

        <div class="col-md-5">
          <img
            class="title-image"
            src="../../assets/learnmore/basics/efx_better.png"
            alt="efx better"
          />
        </div>

        <h4>How Efx works</h4>
        <div class="col-md-5">
          <img
            class="title-image"
            src="../../assets/learnmore/basics/efx_work.png"
            alt="efx work"
          />
        </div>
        <h4>EF => EFx => EF1</h4>
        </div>
      </div>

        <h1>More than fairness... Efficiency</h1>
      <!-- SW -->
      <div class="sw algo-section">
        <h3>Social Welfare (SW)</h3>
        <p>SW(X) = &sum;<sub>i&isin;N</sub> v<sub>i</sub>(X) </p>

        <div class="row align-items-center justify-content-center">

        <div class="col-md-5">
          <img
            class="title-image"
            src="../../assets/learnmore/basics/sw.png"
            alt="sw"
          />
        </div>

        <div class="col-md-2">
          <p>May get envy</p>
        </div>
        </div>

      </div>

      <hr>
      <!-- NSW -->
      <div class="nsw algo-section">
        <h3>Nash Social Welfare (NSW)</h3>
<p>NSW(X) = &prod;<sub>i&isin;N</sub> v<sub>i</sub>(X)</p>
        

        <div class="row align-items-center justify-content-center">

        <div class="col-md-5">
          <img
            class="title-image"
            src="../../assets/learnmore/basics/nsw.png"
            alt="nsw"
          />
        </div>

        </div>

      </div>

            <hr>
      <!-- PO -->
      <div class="po algo-section">
        <h3>Pareto efficiency or Pareto optimality (PO)</h3>
<p>A situation in which a part of the allocation is changed to make someone's situation better 
and not make someone else's situation worse.</p>
        

        <div class="row align-items-center justify-content-center">

        <div class="col-md-5">
          <img
            class="title-image"
            src="../../assets/learnmore/basics/prisoners.png"
            alt="prisoner dilemma"
          />
        </div>

        <div class="col-md-3">
          <p>PO is both prisoners remain silent and go to jail</p>
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
ul,li{ padding:0;margin:0;list-style:none}

h1 {
  font-family: 'Montserrat';
  font-size: 3rem;
  line-height: 1.5;
  font-weight: 900;
}

h3 {
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
}

h4 {
  margin: 3% 0;
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

.settings {
  margin-bottom: 4%;
}

.algo-section {
  margin-top: 4%;
  margin-bottom: 4%;
}
</style>

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
          <h1>Divide and Choose</h1>
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
      <marquee>Learn more about Divide and Choose</marquee>
    </div>
  </section>

  <section class="content">
    <div class="container-fluid">
      <h1>Divide and Choose</h1>
      <div
        class="explanation row d-flex align-items-center align-content-center justify-content-center"
      >
        <div class="col-lg-8 col-md-8">
          <p>
            If there are two agents here, Alice and Bob, and 5 items are
            evaluated and need to be allocated.
          </p>

          <div class="mt-3">
            <table class="table table-bordered" style="text-align: center">
              <thead>
                <tr>
                  <th colspan="6" scope="col">Divide and Choose (DC)</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th scope="row"></th>
                  <td>Item1</td>
                  <td>Item2</td>
                  <td>Item3</td>
                  <td>Item4</td>
                  <td>Item5</td>
                </tr>
                <tr>
                  <th scope="row">Alice</th>
                  <td>12</td>
                  <td>37</td>
                  <td>16</td>
                  <td>22</td>
                  <td>13</td>
                </tr>
                <tr>
                  <th scope="row">Bob</th>
                  <td>2</td>
                  <td>17</td>
                  <td>27</td>
                  <td>16</td>
                  <td>38</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>Then, here is the allocation as given by DC.</p>

          <div class="mt-3">
            <table class="table table-bordered" style="text-align: center">
              <thead>
                <tr>
                  <th colspan="7" scope="col" style="text-align: center">
                    Divide and Choose (DC)
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th scope="row"></th>
                  <td>Item1</td>
                  <td>Item2</td>
                  <td>Item3</td>
                  <td>Item4</td>
                  <td>Item5</td>
                  <td>Utility</td>
                </tr>
                <tr>
                  <th scope="row">Alice</th>
                  <td class="table-success">12</td>
                  <td>37</td>
                  <td class="table-success">16</td>
                  <td class="table-success">22</td>
                  <td>13</td>
                  <td>50</td>
                </tr>
                <tr>
                  <th scope="row">Bob</th>
                  <td>2</td>
                  <td class="table-info">17</td>
                  <td>27</td>
                  <td>16</td>
                  <td class="table-info">38</td>
                  <td>55</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>Why? This is the best grouping Divider has found.</p>
          <p>
            (If Divider wants to maximize his/her utility, the only way to do so
            is to divide the items into two bundles as much as possible. )
          </p>

          <div class="mt-3">
            <table class="table table-bordered" style="text-align: center">
              <thead>
                <tr>
                  <th colspan="7" scope="col" style="text-align: center">
                    Best Grouping by Divider (Alice's perspective)
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr class="align-middle">
                  <th scope="row">Group</th>
                  <td>Item1</td>
                  <td>Item2</td>
                  <td>Item3</td>
                  <td>Item4</td>
                  <td>Item5</td>
                  <td>Utility Gained</td>
                </tr>
                <tr>
                  <th scope="row">Group1</th>
                  <td>12</td>
                  <td>0</td>
                  <td>16</td>
                  <td>22</td>
                  <td>0</td>
                  <td>50</td>
                </tr>
                <tr>
                  <th scope="row">Group2</th>
                  <td>0</td>
                  <td>37</td>
                  <td>0</td>
                  <td>0</td>
                  <td>13</td>
                  <td>50</td>
                </tr>
                <tr>
                  <th scope="row">Difference</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Bob will take one of his favourite bundle and leave the other to
            Alice.
          </p>
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
  width: 100%;
  /*transform: rotate(25deg);*/
}

marquee {
  font-family: 'Montserrat';
  font-size: 1rem;
  margin-top: 3%;
}
</style>

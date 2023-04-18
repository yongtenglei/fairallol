<template>
  <div class="home">
    <section id="title">
      <div class="container-fluid">
        <!-- Title -->

        <div class="row">
          <div class="col-lg-6">
            <h1>Find the fair allocation you want! LOL 🍻</h1>
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
            <button
              type="button"
              @click="handleClickFindSolutionBtn"
              class="btn btn-outline-light btn-lg start-button"
            >
              <i class="fa-brands fa-searchengin"></i>
              Find your own solution
            </button>
          </div>

          <div class="col-lg-6">
            <img
              class="title-image"
              src="../assets/gopher/Azure_Bit_Gopher.png"
              alt="gopher-play"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->

    <div class="container-fluid">
      <section id="features" class="row">
        <div class="feature col-lg-4">
          <div class="feature-icon fas fa-check-circle fa-4x"></div>
          <h3>Easy to use.</h3>
          <p>So easy to use, even a Gopher could do it.</p>
        </div>

        <div class="feature col-lg-4">
          <div class="feature-icon fas fa-bullseye fa-4x"></div>
          <h3>Guaranteed to work.</h3>
          <p>Will always find a reference for allocation.</p>
        </div>

        <div class="feature col-lg-4">
          <div class="feature-icon fas fa-heart fa-4x"></div>
          <h3>Work for peace.</h3>
          <p>Fair, Envy-free, Welfare Solutions.</p>
        </div>
      </section>
    </div>

    <!-- Testimonials -->

    <section id="testimonials">
      <div
        id="testimonials-carousel"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <h2>Cowbe and RayHan are best friends</h2>
            <img
              src="../assets/gopher/COWBOY_GOPHER.png"
              class="testimonials-img"
              alt="cowboy-profile"
            />
            <em>Absolutely, We are!</em>
            <img
              src="../assets/gopher/denver.png"
              class="testimonials-img"
              alt="cowboy-profile"
            />
          </div>

          <div class="carousel-item">
            <h2>
              One day Cowbe found a bunch of snacks, but it is hard to share
              them with RayHan.
            </h2>
            <img
              class="testimonials-img"
              src="../assets/gopher/snacks.png"
              alt="snacks-profile"
            />
            <em>Yummy, They're so good, I want them all. </em>
          </div>

          <div class="carousel-item">
            <h2>Is a "snack" war inevitable?</h2>
            <em>Come on! Man?</em>
            <img
              class="testimonials-img"
              src="../assets/gopher/war.png"
              alt="snacks-profile"
            />
            <em>Do you wanna a fight?</em>
          </div>

          <div class="carousel-item">
            <h2>NO! They just need a nerd gopher!</h2>
            <img
              class="testimonials-img"
              src="../assets/gopher/nerdy.png"
              alt="snacks-profile"
            />
            <em>Let us take it, we are professional</em>
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#testimonials-carousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#testimonials-carousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>

    <!-- Press -->

    <section id="press">Try to save this friendship!</section>

    <!-- Pricing -->
    <section id="pricing">
      <h2>
        To help Cowbe and RayHan, allocate 100 points according to their
        preferences
      </h2>
      <p>Please check the remaining points, and make sure they are used up</p>

      <div class="card-group">
        <div class="pricing-column col-lg-3 col-md-6">
          <div class="card">
            <div class="card-header">
              <h3>Hot Dog</h3>
            </div>
            <div class="card-body">
              <h2><i class="fas fa-hotdog"></i></h2>
              <div class="input-group mb-3">
                <span class="input-group-text" id="hotdog-a">Cowbe: </span>
                <input
                  type="text"
                  class="form-control"
                  :placeholder="getRemainA()"
                  aria-label="hotdog-a"
                  aria-describedby="hotdog-a"
                  v-model.number="hotDogA"
                />
              </div>

              <div class="input-group mb-3">
                <span class="input-group-text" id="hotdog-b">RayHan: </span>
                <input
                  type="text"
                  class="form-control"
                  :placeholder="getRemainB()"
                  aria-label="hotdog-b"
                  aria-describedby="hotdog-b"
                  v-model.number="hotDogB"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="pricing-column col-lg-3 col-md-6">
          <div class="card">
            <div class="card-header">
              <h3>Pizza</h3>
            </div>
            <div class="card-body">
              <h2><i class="fa-sharp fa-solid fa-pizza-slice"></i></h2>
              <div class="input-group mb-3">
                <span class="input-group-text" id="pizza-a">Cowbe: </span>
                <input
                  type="text"
                  class="form-control"
                  :placeholder="getRemainA()"
                  aria-label="pizza-a"
                  aria-describedby="pizza-a"
                  v-model.number="pizzaA"
                />
              </div>

              <div class="input-group mb-3">
                <span class="input-group-text" id="pizza-b">RayHan: </span>
                <input
                  type="text"
                  class="form-control"
                  :placeholder="getRemainB()"
                  aria-label="pizza-b"
                  aria-describedby="pizza-b"
                  v-model.number="pizzaB"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="pricing-column col-lg-3 col-md-12">
          <div class="card">
            <div class="card-header">
              <h3>Burger</h3>
            </div>
            <div class="card-body">
              <h2><i class="fas fa-hamburger"></i></h2>
              <div class="input-group mb-3">
                <span class="input-group-text" id="burger-a">Cowbe: </span>
                <input
                  type="text"
                  class="form-control"
                  :placeholder="getRemainA()"
                  aria-label="burger-a"
                  aria-describedby="burger-a"
                  v-model.number="burgerA"
                />
              </div>

              <div class="input-group mb-3">
                <span class="input-group-text" id="buger-b">RayHan: </span>
                <input
                  type="text"
                  class="form-control"
                  :placeholder="getRemainB()"
                  aria-label="burger-b"
                  aria-describedby="burger-b"
                  v-model.number="burgerB"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="pricing-column col-lg-3 col-md-12">
          <div class="card">
            <div class="card-header">
              <h3>Ice-cream</h3>
            </div>
            <div class="card-body">
              <h2><i class="fas fa-ice-cream"></i></h2>
              <div class="input-group mb-3">
                <span class="input-group-text" id="ice-cream-a">Cowbe: </span>
                <input
                  type="text"
                  class="form-control"
                  :placeholder="getRemainA()"
                  aria-label="ice-cream-a"
                  aria-describedby="ice-cream-a"
                  v-model.number="iceCreamA"
                />
              </div>

              <div class="input-group mb-3">
                <span class="input-group-text" id="ice-cream-b">RayHan: </span>
                <input
                  type="text"
                  class="form-control"
                  :placeholder="getRemainB()"
                  aria-label="ice-cream-b"
                  aria-describedby="ice-cream-b"
                  v-model.number="iceCreamB"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="tool-boxes row mx-4">
        <div class="col-sm-6">
          <div
            class="card mb-3"
            :class="{
              'text-bg-success': checkHealthA == GOOD,
              'text-bg-danger': checkHealthA == BAD,
              'text-bg-light': checkHealthA == NORMAL,
            }"
          >
            <div
              class="row g-0 d-flex align-items-center justify-content-center"
            >
              <div class="col-md-4">
                <img
                  src="../assets/gopher/COWBOY_GOPHER.png"
                  class="img-fluid rounded-start"
                  alt="cowbe"
                />
                <button
                  type="button"
                  class="btn"
                  :class="{
                    'btn-outline-primary':
                      checkHealthA == GOOD || checkHealthA == NORMAL,
                    'btn-success': checkHealthA == BAD,
                  }"
                  @click="randomForA"
                >
                  Random for Cowbe
                </button>
              </div>

              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Cowbe</h5>
                  <ul class="list-group list-group-flush">
                    <li class="point-item list-group-item">
                      Points left: {{ getRemainA() }}
                    </li>
                    <li class="list-group-item">Hot Dog: {{ hotDogA }}</li>
                    <li class="list-group-item">Pizza: {{ pizzaA }}</li>
                    <li class="list-group-item">Burger: {{ burgerA }}</li>
                    <li class="list-group-item">Ice-cream: {{ iceCreamA }}</li>
                  </ul>
                  <p
                    class="card-text"
                    :class="{
                      'fw-bold': checkHealthA == GOOD || checkHealthA == BAD,
                      'fst-italic': checkHealthA == GOOD || checkHealthA == BAD,
                    }"
                  >
                    {{ toolBoxMessage(checkHealthA, 'Cowbe') }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-6">
          <div
            class="card mb-3"
            :class="{
              'text-bg-success': checkHealthB == GOOD,
              'text-bg-danger': checkHealthB == BAD,
              'text-bg-light': checkHealthB == NORMAL,
            }"
          >
            <div
              class="row g-0 d-flex align-items-center justify-content-center"
            >
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">RayHan</h5>
                  <ul class="list-group list-group-flush">
                    <li class="point-item list-group-item">
                      Points left: {{ getRemainB() }}
                    </li>
                    <li class="list-group-item">Hot Dog: {{ hotDogB }}</li>
                    <li class="list-group-item">Pizza: {{ pizzaB }}</li>
                    <li class="list-group-item">Burger: {{ burgerB }}</li>
                    <li class="list-group-item">Ice-cream: {{ iceCreamB }}</li>
                  </ul>
                  <p
                    class="card-text"
                    :class="{
                      'fw-bold': checkHealthB == GOOD || checkHealthB == BAD,
                      'fst-italic': checkHealthB == GOOD || checkHealthB == BAD,
                    }"
                  >
                    {{ toolBoxMessage(checkHealthB, 'RayHan') }}
                  </p>
                </div>
              </div>

              <div class="col-md-4">
                <img
                  src="../assets/gopher/GOPHER_DENVER.png"
                  class="img-fluid rounded-start"
                  alt="rayhan"
                />
                <button
                  type="button"
                  class="btn"
                  :class="{
                    'btn-outline-primary':
                      checkHealthB == GOOD || checkHealthB == NORMAL,
                    'btn-success': checkHealthB == BAD,
                  }"
                  @click="randomForB"
                >
                  Random for RayHan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="alert-container"></div>

      <div id="result-container"></div>

      <button
        type="button"
        class="btn btn-outline-danger btn-lg"
        id="allocate-button"
        @click="
          allocate(
            ['hotDog', 'pizza', 'burger', 'iceCream'],
            'Cowbe',
            {
              hotDog: hotDogA,
              pizza: pizzaA,
              burger: burgerA,
              iceCream: iceCreamA,
            },
            'Rayhan',
            {
              hotDog: hotDogB,
              pizza: pizzaB,
              burger: burgerB,
              iceCream: iceCreamB,
            }
          )
        "
      >
        <i class="fas fa-rocket"></i> Allocate
      </button>
    </section>

    <!-- Call to Action -->

    <section id="cta">
      <h3 class="cta-heading">
        Don't fight with your best friend, come here for answers.
      </h3>
      <button
        type="button"
        class="cta-btn btn btn-outline-light btn-lg start-button"
        @click="handleClickFindSolutionBtn"
      >
        <i class="fa-brands fa-searchengin"></i>
        Find your own solution now 🪄
      </button>
    </section>
  </div>
</template>

<script>
import saveWorldApi from '@/api/saveworld'
import { useRouter } from 'vue-router'
import qs from 'qs'
export default {
  data() {
    return {
      GOOD: 'GOOD',
      BAD: 'BAD',
      NORMAL: 'NORMAL',

      hotDogA: 0,
      hotDogB: 0,
      pizzaA: 0,
      pizzaB: 0,
      burgerA: 0,
      burgerB: 0,
      iceCreamA: 0,
      iceCreamB: 0,
      remainA: 100,
      remainB: 100,
    }
  },
  computed: {
    computedRemainA: function () {
      return (
        this.remainA -
        this.hotDogA -
        this.pizzaA -
        this.burgerA -
        this.iceCreamA
      )
    },
    computedRemainB: function () {
      return (
        this.remainB -
        this.hotDogB -
        this.pizzaB -
        this.burgerB -
        this.iceCreamB
      )
    },

    checkHealthA: function () {
      if (this.computedRemainA < 0) {
        return this.BAD
      } else if (
        this.hotDogA < 0 ||
        this.pizzaA < 0 ||
        this.burgerA < 0 ||
        this.iceCreamA < 0
      ) {
        return this.BAD
      } else if (
        this.hotDogA >= 0 &&
        this.pizzaA >= 0 &&
        this.burgerA >= 0 &&
        this.iceCreamA >= 0 &&
        this.computedRemainA != 100 &&
        this.computedRemainA != 0
      ) {
        return this.BAD
      } else if (
        this.computedRemainA == 0 &&
        this.hotDogA >= 0 &&
        this.pizzaA >= 0 &&
        this.burgerA >= 0 &&
        this.iceCreamA >= 0
      ) {
        return this.GOOD
      } else {
        return this.NORMAL
      }
    },
    checkHealthB: function () {
      if (this.computedRemainB < 0) {
        return this.BAD
      } else if (
        this.hotDogB < 0 ||
        this.pizzaB < 0 ||
        this.burgerB < 0 ||
        this.iceCreamB < 0
      ) {
        return this.BAD
      } else if (
        this.hotDogB >= 0 &&
        this.pizzaB >= 0 &&
        this.burgerB >= 0 &&
        this.iceCreamB >= 0 &&
        this.computedRemainB != 100 &&
        this.computedRemainB != 0
      ) {
        return this.BAD
      } else if (
        this.computedRemainB == 0 &&
        this.hotDogB >= 0 &&
        this.pizzaB >= 0 &&
        this.burgerB >= 0 &&
        this.iceCreamB >= 0
      ) {
        return this.GOOD
      } else {
        return this.NORMAL
      }
    },
  },
  methods: {
    getRemainA() {
      if (this.computedRemainA > 100) {
        return ' Check your inputs'
      }
      return this.computedRemainA + ' points left'
    },
    getRemainB() {
      if (this.computedRemainB > 100) {
        return ' Check your inputs'
      }
      return this.computedRemainB + ' points left'
    },

    randomForA() {
      ;[this.hotDogA, this.pizzaA, this.burgerA, this.iceCreamA] =
        this.generateRandomIntegersWithSum(100, 4)
    },
    randomForB() {
      ;[this.hotDogB, this.pizzaB, this.burgerB, this.iceCreamB] =
        this.generateRandomIntegersWithSum(100, 4)
    },
    getRandomInt(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
    },

    generateRandomIntegersWithSum(total, numIntegers) {
      let randomIntegers = []
      for (let i = 0; i < numIntegers - 1; i++) {
        randomIntegers.push(
          this.getRandomInt(
            0,
            total - randomIntegers.reduce((a, b) => a + b, 0)
          )
        )
      }
      randomIntegers.push(total - randomIntegers.reduce((a, b) => a + b, 0))
      return randomIntegers
    },

    toolBoxMessage(checkhealth, agent) {
      if (checkhealth == this.BAD) {
        return 'Check your preferences. \n  Make sure you have used up all points, and give each item the proper evaluation value(>= 0). '
      } else if (checkhealth == this.GOOD) {
        return 'All good, ' + agent + ' will appreciate it'
      } else {
        return ' Help ' + agent + ' make decisions !!!'
      }
    },

    checkAllInputs(goods, valuationA, valuationB) {
      if (Object.keys(valuationA).length != Object.keys(valuationB).length) {
        return false
      }

      for (let good in goods) {
        if (valuationA[good] < 0 || valuationB[good] < 0) {
          return false
        }
      }
      return true
    },

    allocate(goods, agentA, valuationA, agentB, valuationB) {
      if (
        this.computedRemainA == 0 &&
        this.computedRemainB == 0 &&
        this.checkAllInputs(goods, valuationA, valuationB)
      ) {
        // alert
        this.buildAlert('success')
        // request
        let data = {
          goods: goods,
          agent1: agentA,
          valuation1: valuationA,
          agent2: agentB,
          valuation2: valuationB,
        }

        data = JSON.stringify(data)

        saveWorldApi(data)
          .then((res) => {
            console.log('data', res)
            console.log('allocation: ', res.data.Allocation)
            this.buildResult('success', res.data.Allocation)
          })
          .catch((error) => {
            this.buildResult('danger')
          })
      } else {
        this.buildAlert('danger')
      }
    },

    /*'<img  src="../assets/gopher/nerdy.png" class="img-fluid my-img-placeholder" alt="nerdy" />',*/
    /*'<img  src="../assets/gopher/nerdy.png" class="img-fluid my-img-placeholder" alt="nerdy" />',*/
    buildAlert(t) {
      // Alert container
      let container = document.querySelector('#alert-container')
      let innerHTML = ''
      if (t == 'success') {
        innerHTML = [
          '<div class="alert alert-success" id="success-alert" role="alert">',
          '<h4 class="alert-heading">Thank you, you are saving the world...</h4>',
          '<p>',
          'These two gophers were about to put the war to rest... If this',
          "allocation is fair, they're still good friends, right?",
          '</p>',
          '<hr />',
          '<p class="mb-0">',
          '<img  src="/img/nerdy.f6416e6a.png" class="alert-img" alt="nerdy" />',
          '<i>Just a moment, let our professionals take over this matter. </i>',
          '</p>',
          '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"',
          '></button>',
          '</div>',
        ].join('')
      } else if (t == 'danger') {
        innerHTML = [
          '<div class="alert alert-danger" id="danger-alert" role="alert" >',
          '<h4 class="alert-heading">',
          '  Oops... Please fill in the preferences as requested, if you really',
          '  want to help...',
          '</h4>',
          '<p>',
          '  Allocate all 100 points, and assign the appropriate evaluation to',
          '  each item (>= 0)',
          '</p>',
          '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
          '</div>',
          '</div>',
        ].join('')
      }

      let css = [
        ' <style type="text/css">',
        '.alert {',
        '  margin: 3% 0 3% 0;',
        '}',
        '.alert h4 {',
        "  font-family: 'Montserrat';",
        '  font-size: 1.5rem;',
        '  font-weight: 500;',
        '}',
        '',
        '.alert-img {',
        '  height: 100px;',
        '  width: 100px;',
        '  border-radius: 100%;',
        '  margin: 20px;',
        '}',
        '</style > ',
      ].join('')

      innerHTML += css

      container.innerHTML = innerHTML
    },

    buildResult(t, data) {
      // Alert container
      let container = document.querySelector('#result-container')
      let innerHTML = ''
      if (t == 'success') {
        let allocation = ''
        for (let [agent, bundle] of Object.entries(data)) {
          allocation += agent + ': ' + bundle + '\n'
        }

        console.log(allocation)

        innerHTML = [
          '<div class="alert alert-success" id="success-alert" role="alert">',
          '<h4 class="alert-heading">Here we go</h4>',
          '<p class="mb-0">',
          '<img  src="/img/LazyGopher.6aae19a1.png" class="alert-img" alt="lazy" />',
          '<p class="mb-0" style="white-space: pre-line;">',
          "Hoo... Luckily it wasn't too hard for me\n",
          'Come see what we have allocated',
          '</p>',
          '</p>',
          '<hr />',
          '<div style="white-space: pre-line;">',
          '<strong><i>',
          allocation,
          '</i></strong>',
          '</div>',
          '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"',
          '></button>',
          '</div>',
        ].join('')
      } else if (t == 'danger') {
        innerHTML = [
          '<div class="alert alert-danger" id="danger-alert" role="alert" >',
          '<h4 class="alert-heading">',
          'Ah... Something bad here.',
          '</h4>',
          '<p class="mb-0">',
          '<img  src="/img/MovingGopher.51ad3dba.png" class="alert-img" alt="viking" />',
          'Try it later OR wait for the professional team to arrive.',
          '<img  src="/img/GOPHER_VIKING.4fc97cd6.png" class="alert-img" alt="viking" />',
          '</p>',
          '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
          '</div>',
          '</div>',
        ].join('')
      }

      let css = [
        ' <style type="text/css">',
        '.alert {',
        '  margin: 3% 0 3% 0;',
        '}',
        '.alert h4 {',
        "  font-family: 'Montserrat';",
        '  font-size: 1.5rem;',
        '  font-weight: 500;',
        '}',
        '',
        '.alert-img {',
        '  height: 150px;',
        '  width: 150px;',
        '  border-radius: 100%;',
        '}',
        '</style > ',
      ].join('')

      innerHTML += css

      container.innerHTML = innerHTML
    },
  },
  setup() {
    const router = useRouter()

    function handleClickStoryBtn() {
      let toElement = document.getElementById('testimonials')
      toElement.scrollIntoView(true)
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

.navbar {
  padding: 0 0 4.5rem;
}

.nav-item {
  padding: 0 18px;
}

.nav-link {
  font-size: 2rem;
  font-family: 'Montserrat';
  font-weight: 100;
}

.start-button {
  margin: 10% 3% 5% 0;
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

#features {
  padding: 7% 15%;
}

.feature {
  text-align: center;
  padding: 5%;
}

.feature-icon {
  color: #ef8172;
  margin-bottom: 1rem;
}

.feature-icon:hover {
  color: #ff4c68;
}

.feature h3 {
  font-family: 'Montserrat';
  font-size: 1.5rem;
  font-weight: bold;
}

.feature p {
  color: #8f8f8f;
}

#testimonials {
  text-align: center;
  background-color: #ef8172;
  color: #fff;
}

.carousel-item {
  padding: 7% 15%;
}

#testimonials h2 {
  font-family: 'Montserrat';
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.5;
  padding: 0 0 3% 0;
}

.testimonials-img {
  height: 300px;
  border-radius: 100%;
  margin: 20px;
}

#press {
  background-color: #ef8172;
  text-align: center;
  padding-bottom: 3%;
  font-family: 'Ubuntu';
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;
}

.press-logo {
  width: 15%;
  margin: 20px 20px 50px;
}

#pricing {
  padding: 100px;
  text-align: center;
}

.pricing-column {
  padding: 3% 2%;
}

.tool-boxes h5 {
  font-family: 'Montserrat';
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.5;
}

.tool-boxes .point-item {
  font-family: 'Montserrat';
  font-size: 1.5rem;
  font-weight: 500;
}

.tool-boxes p {
  font-family: 'Montserrat';
  font-size: 1rem;
  font-weight: 500;
  padding: 3% 0 0 0;
}

.tool-boxes img {
  vertical-align: middle;
}

.tool-boxes .btn {
  margin-top: 3%;
}

#allocate-button {
  margin-top: 2%;
}
</style>

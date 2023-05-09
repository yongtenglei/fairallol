<template>
  <section id="title">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-7">
          <h1>
            Hi, finally you're here. <br />We've been waiting for you for a long
            time.
          </h1>
          <h3>
            Come and play, and we'll tell you everything you need to know.
          </h3>
        </div>

        <div class="col-lg-5">
          <img
            class="title-image"
            src="../../assets/gopher/BuffaloCast.png"
            alt="gopher-play"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- information -->
  <section id="information">
    <div class="container-fluid">
      <!-- number form -->
      <form class="row g-3 d-flex justify-content-center align-items-center">
        <div>
          Okay, tell us how many items you want to be allocated?
          <img
            class="prompt-img"
            src="../../assets/gopher/BLUE_GOPHER.png"
            alt="blue-gopher"
          />
        </div>

        <div class="col-md-6">
          <label for="inputNumGoods" class="form-label"># of goods</label>
          <input
            type="number"
            class="form-control"
            id="inputNumGoods"
            placeholder="Number of Goods"
            min="1"
            v-model="numGoods"
            :disabled="numFormDisabled"
          />

          <!-- alert-container -->
          <div id="num-alert-container"></div>

          <button
            @click.prevent="generateGoodsForm"
            class="btn btn-primary mt-3 mb-3"
            v-if="!numFormDisabled"
          >
            OK
          </button>
        </div>
      </form>

      <!-- goods form-->
      <form class="row g-3 d-flex justify-content-center align-items-center">
        <div v-if="formGenerated">
          <div>
            <img
              class="prompt-img"
              src="../../assets/gopher/GOPHER_AVATARS.jpg"
              alt="blue-gopher"
            />
            Got it, now, tell us what items need to be allocated?
          </div>

          <div
            class="input-group mb-3"
            v-for="(good, index) in goods"
            :key="index"
          >
            <div
              class="col-md-2 d-flex justify-content-end align-items-center me-3"
            >
              <label class="" :for="'good' + (index + 1)"
                >Good {{ index + 1 }}:&nbsp;
              </label>
            </div>

            <div class="col-md-8">
              <input
                type="text"
                :id="'good' + (index + 1)"
                placeholder="Please make `-` to combine multiple words. E.g., air conditioner. Use AC or air-conditioner."
                class="form-control"
                v-model="goods[index]"
                :disabled="goodsFormDisabled"
              />
            </div>
          </div>

          <!-- alert-container -->
          <div id="goods-alert-container"></div>
          <button
            @click.prevent="confirmGoodsForm"
            class="btn btn-primary mt-3 mb-3"
            v-if="!goodsFormDisabled"
          >
            OK
          </button>
        </div>
      </form>

      <!-- methods form-->
      <form class="row g-3 d-flex justify-content-center align-items-center">
        <div v-if="goodsConfirmed">
          <div>
            <img
              class="prompt-img"
              src="../../assets/gopher/BLUE_GLASSES_GOPHER.png"
              alt="bike-gopher"
            />

            <p>
              Almost there, give us your name and tell us your preferences on
              these goods
            </p>
          </div>

          <!-- name -->
          <div class="row g-3">
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Your name"
                aria-label="agentA name"
                v-model="agentAName"
                :disabled="namesConfirmed"
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Your peer name"
                aria-label="agentB name"
                v-model="agentBName"
                :disabled="namesConfirmed"
              />
            </div>
          </div>
          <!-- alert-container -->
          <div id="name-alert-container"></div>

          <button
            @click.prevent="confirmNamesForm"
            class="btn btn-primary mt-3 mb-3"
            v-if="!namesFormDisabled"
          >
            OK
          </button>
        </div>

        <!-- valuation -->
        <div class="row g-3" v-if="namesFormDisabled">
          <!-- for A -->
          <div class="col">
            <div
              class="card mb-3"
              :class="{
                'bg-success': computedAgentARemained == 0,
                'bg-gradient': computedAgentARemained == 0,
              }"
            >
              <div
                class="row g-0 d-flex align-items-center justify-content-center"
              >
                <div class="col-md-4">
                  <button type="button" class="btn">
                    Random for {{ agentAName }}
                  </button>
                </div>

                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{{ agentAName }}</h5>
                    <ul class="list-group list-group-flush">
                      <li
                        v-for="(good, index) in agentARangeItems"
                        :key="index"
                        class="list-group-item"
                      >
                        <div
                          class="col-md-2 d-flex justify-content-end align-items-center me-3"
                        >
                          <label
                            class=""
                            :for="'agentA' + 'good' + (index + 1)"
                          >
                            {{ capitalizeFormat(goods[index]) }}:
                            <span
                              :id="
                                'agentA' + 'good' + (index + 1) + 'valuation'
                              "
                            >
                              {{ good.value }}
                            </span>
                          </label>
                        </div>

                        <div class="col-md-10">
                          <input
                            type="range"
                            :id="'agentA' + 'good' + (index + 1)"
                            class="form-range"
                            v-model.number="good.value"
                            step="1"
                            min="0"
                            :max="good.max"
                            @input="handleAgentARangeInput(index)"
                            :disabled="valuationConfirmed"
                          />
                        </div>
                      </li>
                    </ul>
                    <!--
                    <p
                      class="card-text"
                      :class="{
                        'fw-bold': checkHealthA == GOOD || checkHealthA == BAD,
                        'fst-italic':
                          checkHealthA == GOOD || checkHealthA == BAD,
                      }"
                    >
                      {{ toolBoxMessage(checkHealthA, 'Cowbe') }}
                    </p>
                    -->
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- for B -->
          <div class="col">
            <div
              class="card mb-3"
              :class="{
                'bg-success': computedAgentBRemained == 0,
                'bg-gradient': computedAgentBRemained == 0,
              }"
            >
              <div
                class="row g-0 d-flex align-items-center justify-content-center"
              >
                <div class="col-md-4">
                  <button type="button" class="btn">
                    Random for {{ agentBName }}
                  </button>
                </div>

                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{{ agentBName }}</h5>
                    <ul class="list-group list-group-flush">
                      <li
                        v-for="(good, index) in agentBRangeItems"
                        :key="index"
                        class="list-group-item"
                      >
                        <div
                          class="col-md-2 d-flex justify-content-end align-items-center me-3"
                        >
                          <label
                            class=""
                            :for="'agentB' + 'good' + (index + 1)"
                          >
                            {{ capitalizeFormat(goods[index]) }}:
                            <span
                              :id="
                                'agentB' + 'good' + (index + 1) + 'valuation'
                              "
                            >
                              {{ good.value }}
                            </span>
                          </label>
                        </div>

                        <div class="col-md-10">
                          <input
                            type="range"
                            :id="'agentB' + 'good' + (index + 1)"
                            class="form-range"
                            v-model.number="good.value"
                            step="1"
                            min="0"
                            :max="good.max"
                            @input="handleAgentBRangeInput(index)"
                            :disabled="valuationConfirmed"
                          />
                        </div>
                      </li>
                    </ul>
                    <!--
                    <p
                      class="card-text"
                      :class="{
                        'fw-bold': checkHealthA == GOOD || checkHealthA == BAD,
                        'fst-italic':
                          checkHealthA == GOOD || checkHealthA == BAD,
                      }"
                    >
                      {{ toolBoxMessage(checkHealthA, 'Cowbe') }}
                    </p>
                    -->
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- alert-container -->
          <div id="valuation-alert-container"></div>

          <button
            @click.prevent="confirmValuationForm"
            class="btn btn-primary mt-3 mb-3"
            v-if="!valuationFormDisabled"
          >
            OK
          </button>

          <!-- Algorithm chose -->
          <div v-if="valuationConfirmed">
            <div>
              <img
                class="prompt-img"
                src="../../assets/gopher/Biker_Gopher.png"
                alt="bike-gopher"
              />

              <p>
                The last step, select the rules you want to use. Not sure what
                they all are? Select 'Save the World'!
              </p>
              <p>Sit tight, let's go.</p>
            </div>
            <div class="form-floating">
              <select
                class="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
                v-model="rule"
              >
                <option selected value="1">Save the World</option>
                <option value="2">EF1</option>
                <option value="3">Winner Adjusted</option>
                <option value="4">MaxMin Share</option>
                <option value="5">Round Robin</option>
              </select>
              <label for="floatingSelect">Select your fairness protocol</label>
            </div>

            <!-- alert-container -->
            <div id="alert-container"></div>
            <div id="result-container"></div>

            <button
              type="button"
              class="btn btn-outline-danger btn-lg"
              id="allocate-button"
              @click="allocate()"
            >
              <i class="fas fa-rocket"></i> Allocate
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>

  <template>
    <img
      class="prompt-img"
      style="display: none"
      src="../../assets/gopher/Facepalm_Gopher.png"
      alt="facepalm-gopher"
    />
    <img
      class="prompt-img"
      style="display: none"
      src="../../assets/gopher/MovingGopher.png"
      alt="moving-gopher"
    />
    <img
      class="prompt-img"
      style="display: none"
      src="../../assets/gopher/GOPHER_VIKING.png"
      alt="viking-gopher"
    />
  </template>
</template>

<script>
import saveWorldApi from '@/api/saveworld'
import { capitalize } from 'lodash'

export default {
  data() {
    return {
      numGoods: null,
      formGenerated: false,
      numFormDisabled: false,
      goodsConfirmed: false,
      goodsFormDisabled: false,
      namesConfirmed: false,
      namesFormDisabled: false,
      valuationConfirmed: false,
      valuationFormDisabled: false,

      valuationHealthA: false,
      valuationHealthB: false,

      goods: null,
      agentATotal: 100,
      agentARangeItems: [],
      agentBTotal: 100,
      agentBRangeItems: [],
      agentAName: null,
      agentBName: null,

      rule: '1',
    }
  },

  computed: {
    computedAgentARemained() {
      let sum = this.agentARangeItems.reduce((sum, item) => sum + item.value, 0)

      console.log(sum)

      return this.agentATotal - sum
    },
    computedAgentBRemained() {
      let sum = this.agentBRangeItems.reduce(
        (sum, item) => sum + Number(item.value),
        0
      )

      return this.agentBTotal - sum
    },
  },

  methods: {
    /*range methods*/
    generateAgentARangeItems(n) {
      console.log('generate A range: N: ', n)
      this.agentARangeItems = Array.from({ length: n }, () => ({
        max: this.agentATotal,
        value: 0,
        used: false,
      }))
    },
    handleAgentARangeInput(index) {
      let item = this.agentARangeItems[index]
      let totalSum = this.agentARangeItems.reduce(
        (sum, item) => sum + item.value,
        0
      )

      if (totalSum > this.agentATotal) {
        item.value -= totalSum - this.agentATotal
      } else {
        item.max = this.agentATotal
      }
    },
    handleAgentBRangeInput(index) {
      let item = this.agentBRangeItems[index]
      let totalSum = this.agentBRangeItems.reduce(
        (sum, item) => sum + item.value,
        0
      )

      if (totalSum > this.agentBTotal) {
        item.value -= totalSum - this.agentBTotal
      } else {
        item.max = this.agentBTotal
      }
    },
    generateAgentBRangeItems(n) {
      this.agentBRangeItems = Array.from({ length: n }, () => ({
        max: this.agentBTotal,
        value: 0,
        used: false,
      }))
    },

    generateGoodsForm() {
      if (this.numGoods && this.numGoods > 0) {
        this.goods = new Array(this.numGoods).fill('')
        this.formGenerated = true
        this.numFormDisabled = true
      } else {
        this.buildNumberAlert()
      }
    },
    confirmGoodsForm() {
      // some field not be completed

      if (this.checkAll(this.goods)) {
        // format
        this.goods = this.formatAll(this.goods)
        this.goods = this.addNumberToDuplicates(this.goods)

        console.log('after: ', this.goods)
        this.goodsConfirmed = true
        this.goodsFormDisabled = true

        this.generateAgentARangeItems(this.numGoods)
        this.generateAgentBRangeItems(this.numGoods)
      } else {
        this.buildGoodsAlert()
      }
    },

    checkAll(arr) {
      let flag = true
      arr.forEach((str) => {
        if (str.length === 0 || str === null || str === undefined) {
          flag = false
          return // end the loop
        }
      })
      return flag
    },
    formatAll(arr) {
      return arr.map((str) =>
        str
          .replace(/\s+/g, ' ')
          .replace(/(^\s*)|(\s*$)/g, '')
          .replace(/ /g, '-')
      )
    },
    confirmNamesForm() {
      // some field not be completed
      if (
        this.agentAName != '' &&
        this.agentBName != '' &&
        this.agentAName != this.agentBName
      ) {
        this.namesConfirmed = true
        this.namesFormDisabled = true
      } else {
        this.buildNamesAlert()
      }
    },

    addNumberToDuplicates(arr) {
      const counts = {}
      const result = []

      for (let i = 0; i < arr.length; i++) {
        const currentString = arr[i]
        const count = counts[currentString] || 0
        counts[currentString] = count + 1

        if (count === 0) {
          result.push(currentString)
        } else {
          const numberedString = currentString + '_' + count
          result.push(numberedString)
        }
      }

      return result
    },

    buildNumberAlert() {
      // Alert container
      let container = document.querySelector('#num-alert-container')
      let innerHTML = ''
      innerHTML = [
        '<div class="alert alert-danger" id="danger-alert" role="alert" >',
        '<h4 class="alert-heading">',
        'Uh-oh, you really made a mistake',
        '</h4>',
        '<p class="mb-0">',
        '<img  src="/img/Facepalm_Gopher.3244e8ae.png" class="alert-img" alt="facepalm" />',
        '<p class="mb-0" style="white-space: pre-line;">',

        '<p>',
        'The number of items should be greater than 1',
        '</p>',
        '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>',
        '</div>',
      ].join('')

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
    buildGoodsAlert() {
      // Alert container
      let container = document.querySelector('#goods-alert-container')
      let innerHTML = ''
      innerHTML = [
        '<div class="alert alert-danger" id="danger-alert" role="alert" >',
        '<h4 class="alert-heading">',
        "Uh-oh... Come on, I know it wasn't your plan. ",
        '</h4>',
        '<p class="mb-0">',
        '<img  src="/img/GOPHER_AVATARS.3454e3e4.jpg" class="alert-img" alt="facepalm" />',
        '<p class="mb-0" style="white-space: pre-line;">',
        'Tell us what all these items are\n',
        'Help us help you better',
        '</p>',
        '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>',
        '</div>',
      ].join('')

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
    buildNamesAlert() {
      // Alert container
      let container = document.querySelector('#name-alert-container')
      let innerHTML = ''
      innerHTML = [
        '<div class="alert alert-danger" id="danger-alert" role="alert" >',
        '<h4 class="alert-heading">',
        'Uh-oh, you really made a mistake',
        '</h4>',
        '<p class="mb-0">',
        '<img  src="/img/Facepalm_Gopher.3244e8ae.png" class="alert-img" alt="facepalm" />',
        '</p>',
        '<p class="mb-0" style="white-space: pre-line;">',
        'Hey, we need to know the names of you and your friend, you two share the same name?',
        '</p>',
        '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>',
        '</div>',
      ].join('')

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
    capitalizeFormat(food) {
      return food.charAt(0).toUpperCase() + food.slice(1)
    },

    confirmValuationForm() {
      let sumA = this.agentARangeItems.reduce(
        (sum, item) => sum + item.value,
        0
      )
      let sumB = this.agentBRangeItems.reduce(
        (sum, item) => sum + item.value,
        0
      )

      if (
        this.computedAgentARemained == 0 &&
        this.computedAgentBRemained == 0
      ) {
        this.valuationConfirmed = true
        this.valuationFormDisabled = true
      } else {
        this.buildValuationAlert()
      }
    },

    buildValuationAlert() {
      // Alert container
      let container = document.querySelector('#valuation-alert-container')
      let innerHTML = ''
      innerHTML = [
        '<div class="alert alert-danger" id="danger-alert" role="alert" >',
        '<h4 class="alert-heading">',
        'Uh-oh, you really made a mistake',
        '</h4>',
        '<p class="mb-0">',
        '<img  src="/img/Facepalm_Gopher.3244e8ae.png" class="alert-img" alt="facepalm" />',
        '</p>',
        '<p class="mb-0" style="white-space: pre-line;">',
        "Hey, use all the points, that's what you deserve. ",
        '</p>',
        '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>',
        '</div>',
      ].join('')

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

    allocate() {
      // prepare data
      // agent preferences
      let valuationA = {}
      let valuationB = {}

      this.agentARangeItems.forEach((item, index) => {
        valuationA[this.goods[index]] = item.value
      })

      this.agentBRangeItems.forEach((item, index) => {
        valuationB[this.goods[index]] = item.value
      })

      console.log(valuationA, valuationB)

      // request
      let data = {
        goods: this.goods,
        agent1: this.agentAName,
        valuation1: valuationA,
        agent2: this.agentBName,
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
          '<div style="white-space: pre-line;" class="result">',
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
          '<img  src="/img/MovingGopher.51ad3dba.png" class="alert-img" alt="moving" />',
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
        '.result{',
        "  font-family: 'Montserrat';",
        '  font-size: 1.5rem;',
        '  line-height: 1.5;',
        '  font-weight: 900;',
        '}',
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

#title h3 {
  font-family: 'Montserrat';
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 10%;
  margin-bottom: 5%;
}

.container-fluid {
  padding: 3% 15%;
}

.title-image {
  width: 100%;
  /*transform: rotate(25deg);*/
}

.prompt-img {
  height: 100px;
  width: 100px;
  border-radius: 100%;
  margin: 20px;
}

.bike-img {
  border-radius: 100%;
  margin: 20px;
}

#allocate-button {
  margin-top: 2%;
}
</style>

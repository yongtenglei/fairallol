<template>
  <div>
    <label for="n">请输入 range 组件个数: </label>
    <input type="number" v-model="n" min="0" />
    <div v-for="(item, index) in rangeItems" :key="index">
      <input
        type="range"
        class="form-range"
        :max="item.max"
        v-model="item.value"
        @input="updateMaxRanges(index)"
      />
      <p>{{ item.value }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      n: 0,
      maxRange: 100,
      rangeItems: [],
    }
  },
  watch: {
    n(newValue) {
      this.generateRangeItems(newValue)
    },
  },
  methods: {
    generateRangeItems(n) {
      this.rangeItems = Array.from({ length: n }, () => ({
        max: this.maxRange,
        value: 0,
      }))
    },
    updateMaxRanges(changedIndex) {
      const newValue = this.rangeItems[changedIndex].value
      const newMax = 100 - newValue
      this.rangeItems.forEach((item, index) => {
        if (index !== changedIndex) {
          item.max = newMax
        }
      })
    },
  },
}
</script>

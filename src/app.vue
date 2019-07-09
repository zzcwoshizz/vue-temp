<template>
  <div>
    Typescript
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
console.log(1);
export default Vue.extend({});
</script>

<style lang="scss" scoped>
.title {
  font-size: 20px;
  text-align: center;
  color: red;
}
.content {
  font-size: 14px;
  color: #333333;
}
.goddess {
  .left {
    margin-left: 50%;
    &__h4 {
      font-size: 14px;
    }
    &__img {
      width: 308px;
      height: 433px;
    }
  }
  .right {
    float: left;
    &__h4 {
      font-size: 14px;
    }
    &__img {
      width: 300px;
      height: 150px;
      background: url('https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2962033657,4245604671&fm=27&gp=0.jpg')
        no-repeat;
    }
  }
}
</style>

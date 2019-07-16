<template>
  <div class="logo">
    <h2 class="logo-1">{{ title }}</h2>
    <h2 class="logo-2">{{ title }}</h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  name: 'Logo',
})
export default class extends Vue {
  @Prop({
    required: true,
    type: String,
  })
  private title!: string;
}
</script>

<style lang="scss" scoped>
@keyframes logo-animation {
  0% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
  50% {
    clip-path: polygon(100% 10%, 100% 100%, 0% 100%, 90% 0%);
  }
  100% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
}

.logo {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  width: 300px;
  height: 40px;
  margin: auto;

  text-align: center;
  .logo-1,
  .logo-2 {
    font-weight: bolder;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    letter-spacing: 12px;
    font-size: 36px;
    color: #333;
  }
  .logo-1 {
    color: #26c6da;
  }
  .logo-2 {
    color: #7e57c2;
    clip-path: polygon(100% 10%, 100% 100%, 0% 100%, 90% 0%);
    animation: logo-animation 7s infinite ease-in-out;
  }
}
</style>

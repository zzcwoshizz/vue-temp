<template>
  <logo :title="title" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { AppModule } from '@/store/modules/app';
import Logo from '@/components/Logo.vue';

@Component({
  name: 'Home',
  components: {
    Logo,
  },
})
export default class extends Vue {
  private get title() {
    return AppModule.title;
  }

  private mounted() {
    AppModule.ChangeTitle('404');
  }
}
</script>

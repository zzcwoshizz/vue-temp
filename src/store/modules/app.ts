import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule,
} from 'vuex-module-decorators';
import store from '@/store';

export interface IAppState {
  title: string;
}

@Module({ dynamic: true, store, name: 'app' })
class App extends VuexModule implements IAppState {
  public title = 'ZVUE INIT';

  @Action
  public ChangeTitle(str: string) {
    this.SET_TITLE(str);
  }

  @Mutation
  private SET_TITLE(str: string) {
    this.title = str;
  }
}

export const AppModule = getModule(App);

import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'

export interface AppState {
  sidebar: {
    opened: boolean
  }
}

@Module({ dynamic: true, store, name: 'app' })
class App extends VuexModule implements AppState {
  public sidebar = {
    opened: false
  }

  @Mutation
  private TOGGLE_SIDEBAR() {
    this.sidebar.opened = !this.sidebar.opened
  }

  @Action
  public ToggleSideBar() {
    this.TOGGLE_SIDEBAR()
  }

}

export const AppModule = getModule(App)
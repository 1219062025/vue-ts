import { defineStore } from 'pinia';

interface MainStoreState {
  call: string;
}

export const useMainStore = defineStore({
  id: 'main',
  state: (): MainStoreState => ({
    call: 'Hello World'
  }),
  getters: {
    getCall(): string {
      return this.call;
    }
  }
});

import { defineStore } from 'pinia';
import { getHomeConfig } from "@/service/api/home";

interface HomeState extends HomeModel{
  loading: boolean;
}

export const useHomeStore = defineStore('Home-store', {
  state: (): HomeState => ({
    loading:false,
    config:{
        hot:[],
        bannas: [],
        quickNavs: [],
        notifica: '',
        spike:{
            time: 0,
            url: []
        },
        snapUp:[],
        recommendTitle:[],
        recommendMain:[],
        like:[]
    }
  }),
  actions:{
    async getAll() {
      this.loading = true;
      let { data } = await getHomeConfig();
      this.loading = false;
      if(data) {
        this.config = data.config;
      }
    }
  }
})
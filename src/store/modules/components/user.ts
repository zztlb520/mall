import { defineStore } from 'pinia';
import { getUserConfig } from "@/service/api/user";

interface UserState extends UserModel {
	loading: boolean;
}

export const useUserStore = defineStore('User-store', {
	state: (): UserState => ({
		loading: false,
		config:{
			recordConfig: [],
			orderConfig: [],
			serviceConfig: []
		}
	}),
	actions: {
		async getAll() {
			this.loading = true;
			let { data } = await getUserConfig();
			this.loading = false;
			if (data) {
				this.config = data.config;
			}
		}
	}
})

import type { MockMethod } from 'vite-plugin-mock';
import { homeModel } from '../model';

const apis: MockMethod[] = [
  {
    url: '/mock/getHomeConfig',
    method: 'post',
    response: (options: Service.MockOption): Service.MockServiceResult => {
      return {
        code: 200,
        message: 'ok',
        data: homeModel
      };
    }
  }
];

export default apis;

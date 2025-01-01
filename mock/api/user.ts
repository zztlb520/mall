import type { MockMethod } from 'vite-plugin-mock';
import { userModel } from '../model';

const apis: MockMethod[] = [
  {
    url: '/mock/getUserConfig',
    method: 'post',
    response: (options: Service.MockOption): Service.MockServiceResult => {
      return {
        code: 200,
        message: 'ok',
        data: userModel
      };
    }
  }
];

export default apis;

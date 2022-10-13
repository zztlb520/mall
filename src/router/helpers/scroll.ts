import type { RouterScrollBehavior } from 'vue-router';

export const scrollBehavior: RouterScrollBehavior = (to, from) => {
  return new Promise(resolve => {

    if (to.hash) {
      const el = document.querySelector(to.hash);
      if (el) {
        resolve({
          el,
          behavior: 'smooth'
        });
      }
    }
  });
};

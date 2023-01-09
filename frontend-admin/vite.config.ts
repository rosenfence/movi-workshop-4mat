import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';

export default ({ mode }: any) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') };
  console.log(process.env);

  return defineConfig({
    plugins: [sveltekit()],
    server: {
      proxy: {
        '/api': process.env.API_ENDPOINT as string,
      },
    },
  });
};

// const config: UserConfig = {
//   plugins: [sveltekit()],
//   server: {
//     proxy: {
//       '/api': 'http://127.0.0.1:8080',
//     },
//   },
// };

// export default config;

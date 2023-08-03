// vite.config.js
import { defineConfig } from "file:///E:/Dropbox/GitHub/team-project-00/node_modules/vite/dist/node/index.js";
import glob from "file:///E:/Dropbox/GitHub/team-project-00/node_modules/glob/glob.js";
import injectHTML from "file:///E:/Dropbox/GitHub/team-project-00/node_modules/vite-plugin-html-inject/dist/index.mjs";
import FullReload from "file:///E:/Dropbox/GitHub/team-project-00/node_modules/vite-plugin-full-reload/dist/index.js";
var vite_config_default = defineConfig({
  root: "src",
  build: {
    rollupOptions: {
      input: glob.sync("./src/*.html")
    },
    outDir: "../dist"
  },
  plugins: [injectHTML(), FullReload(["./src/**/**.html"])]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxEcm9wYm94XFxcXEdpdEh1YlxcXFx0ZWFtLXByb2plY3QtMDBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXERyb3Bib3hcXFxcR2l0SHViXFxcXHRlYW0tcHJvamVjdC0wMFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovRHJvcGJveC9HaXRIdWIvdGVhbS1wcm9qZWN0LTAwL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCBnbG9iIGZyb20gJ2dsb2InO1xyXG5pbXBvcnQgaW5qZWN0SFRNTCBmcm9tICd2aXRlLXBsdWdpbi1odG1sLWluamVjdCc7XHJcbmltcG9ydCBGdWxsUmVsb2FkIGZyb20gJ3ZpdGUtcGx1Z2luLWZ1bGwtcmVsb2FkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcm9vdDogJ3NyYycsXHJcbiAgYnVpbGQ6IHtcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgaW5wdXQ6IGdsb2Iuc3luYygnLi9zcmMvKi5odG1sJyksXHJcbiAgICB9LFxyXG4gICAgb3V0RGlyOiAnLi4vZGlzdCcsXHJcbiAgfSxcclxuICBwbHVnaW5zOiBbaW5qZWN0SFRNTCgpLCBGdWxsUmVsb2FkKFsnLi9zcmMvKiovKiouaHRtbCddKV0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZSLFNBQVMsb0JBQW9CO0FBQzFULE9BQU8sVUFBVTtBQUNqQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUV2QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsSUFDTCxlQUFlO0FBQUEsTUFDYixPQUFPLEtBQUssS0FBSyxjQUFjO0FBQUEsSUFDakM7QUFBQSxJQUNBLFFBQVE7QUFBQSxFQUNWO0FBQUEsRUFDQSxTQUFTLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzFELENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==

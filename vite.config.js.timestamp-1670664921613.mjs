// vite.config.js
import { defineConfig, splitVendorChunkPlugin } from "vite";
import path from "node:path";
import eslint from "vite-plugin-eslint";
import solid from "vite-plugin-solid";
import solidSvg from "vite-plugin-solid-svg";
import miniSvg from "vite-plugin-mini-svg";
import legacy from "@vitejs/plugin-legacy";
import { imagetools } from "vite-imagetools";
var __vite_injected_original_dirname = "G:\\Projects\\bus-station";
var vite_config_default = defineConfig({
  plugins: [
    imagetools({
      defaultDirectives: (url) => {
        return new URLSearchParams({ metadata: "src;width;height;format" });
      }
    }),
    splitVendorChunkPlugin(),
    legacy({
      modernPolyfills: false,
      renderLegacyChunks: false
    }),
    eslint(),
    solid({ ssr: true, solid: { hydratable: false } }),
    solidSvg({
      defaultExport: "url",
      svgo: {
        enabled: true,
        svgoConfig: {
          multipass: true,
          plugins: [
            {
              name: "preset-default",
              params: {
                overrides: {
                  convertPathData: { floatPrecision: 2 },
                  removeViewBox: false
                }
              }
            },
            "removeDimensions",
            "prefixIds",
            "removeXMLNS",
            {
              name: "removeAttributesBySelector",
              params: {
                selector: "svg",
                attributes: ["class", "style", "xml:space"]
              }
            }
          ]
        }
      }
    }),
    miniSvg({
      svgoConfig: {
        multipass: true,
        plugins: [
          {
            name: "preset-default",
            params: { overrides: { convertPathData: { floatPrecision: 2 } } }
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src")
    }
  },
  build: {
    polyfillModulePreload: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        entryFileNames({ name }) {
          return name === "index" ? "assets/js/app.js" : "assets/js/[name].js";
        },
        chunkFileNames: "assets/js/[name].js",
        assetFileNames({ name }) {
          if (name.match(/\.css$/)) {
            return name === "style.css" ? "assets/css/app.css" : "assets/css/[name].css";
          }
          if (name.match(/\.(png|jpe?g|gif|svg|webp|avif)$/)) {
            return "assets/img/[name].[ext]";
          }
          if (name.match(/\.(mp4|webm|ogg|mp3|wav|flac|aac)$/)) {
            return "assets/media/[name].[ext]";
          }
          return "assets/[name].[ext]";
        }
      }
    }
  },
  ssr: {
    noExternal: ["solid-meta", "@solidjs/router"]
  },
  server: { port: 3e3, strictPort: true },
  preview: { port: 3e3, strictPort: true },
  experimental: {
    renderBuiltUrl(filename, { hostType, ...rest }) {
      if (hostType === "css")
        return { relative: true };
      return filename;
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJHOlxcXFxQcm9qZWN0c1xcXFxidXMtc3RhdGlvblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRzpcXFxcUHJvamVjdHNcXFxcYnVzLXN0YXRpb25cXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0c6L1Byb2plY3RzL2J1cy1zdGF0aW9uL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBzcGxpdFZlbmRvckNodW5rUGx1Z2luIH0gZnJvbSAndml0ZSdcbmltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCdcbmltcG9ydCBlc2xpbnQgZnJvbSAndml0ZS1wbHVnaW4tZXNsaW50J1xuaW1wb3J0IHNvbGlkIGZyb20gJ3ZpdGUtcGx1Z2luLXNvbGlkJ1xuaW1wb3J0IHNvbGlkU3ZnIGZyb20gJ3ZpdGUtcGx1Z2luLXNvbGlkLXN2ZydcbmltcG9ydCBtaW5pU3ZnIGZyb20gJ3ZpdGUtcGx1Z2luLW1pbmktc3ZnJ1xuaW1wb3J0IGxlZ2FjeSBmcm9tICdAdml0ZWpzL3BsdWdpbi1sZWdhY3knXG5pbXBvcnQgeyBpbWFnZXRvb2xzIH0gZnJvbSAndml0ZS1pbWFnZXRvb2xzJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAvLyBiYXNlOiAnLi8nLFxuICBwbHVnaW5zOiBbXG4gICAgaW1hZ2V0b29scyh7XG4gICAgICAvLyBpbmNsdWRlOiAnKiovKi57aGVpYyxoZWlmLGF2aWYsanBlZyxqcGcscG5nLHRpZmYsd2VicCxnaWYsc3ZnfT8qJyxcbiAgICAgIGRlZmF1bHREaXJlY3RpdmVzOiAodXJsKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd1cmwnLCB1cmwpXG4gICAgICAgIC8vIGNvbnN0IGV4dHMgPSBbJ2pwZycsICdqcGVnJywgJ3BuZycsICdnaWYnLCAnd2VicCcsICdhdmlmJ11cbiAgICAgICAgLy8gaWYgKFsnbWV0YWRhdGEnLCAnbWV0YSddLnNvbWUoKHgpID0+IHVybC5zZWFyY2hQYXJhbXMuaGFzKHgpKSkge1xuICAgICAgICAvLyAgIHJldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKHsgbWV0YWRhdGE6ICdzcmM7d2lkdGg7aGVpZ2h0O2Zvcm1hdCcgfSlcbiAgICAgICAgLy8gfVxuICAgICAgICByZXR1cm4gbmV3IFVSTFNlYXJjaFBhcmFtcyh7IG1ldGFkYXRhOiAnc3JjO3dpZHRoO2hlaWdodDtmb3JtYXQnIH0pXG4gICAgICB9XG4gICAgfSksXG4gICAgc3BsaXRWZW5kb3JDaHVua1BsdWdpbigpLFxuICAgIGxlZ2FjeSh7XG4gICAgICBtb2Rlcm5Qb2x5ZmlsbHM6IGZhbHNlLFxuICAgICAgcmVuZGVyTGVnYWN5Q2h1bmtzOiBmYWxzZVxuICAgIH0pLFxuICAgIGVzbGludCgpLFxuICAgIHNvbGlkKHsgc3NyOiB0cnVlLCBzb2xpZDogeyBoeWRyYXRhYmxlOiBmYWxzZSB9IH0pLFxuICAgIC8vIG1pbmlTdmcoKSxcbiAgICBzb2xpZFN2Zyh7XG4gICAgICBkZWZhdWx0RXhwb3J0OiAndXJsJyxcbiAgICAgIHN2Z286IHtcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgc3Znb0NvbmZpZzoge1xuICAgICAgICAgIG11bHRpcGFzczogdHJ1ZSxcbiAgICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdwcmVzZXQtZGVmYXVsdCcsXG4gICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIG92ZXJyaWRlczoge1xuICAgICAgICAgICAgICAgICAgLy8gY3VzdG9taXplIG9wdGlvbnMgZm9yIHBsdWdpbnMgaW5jbHVkZWQgaW4gcHJlc2V0XG4gICAgICAgICAgICAgICAgICBjb252ZXJ0UGF0aERhdGE6IHsgZmxvYXRQcmVjaXNpb246IDIgfSxcbiAgICAgICAgICAgICAgICAgIC8vIG9yIGRpc2FibGUgcGx1Z2luc1xuICAgICAgICAgICAgICAgICAgcmVtb3ZlVmlld0JveDogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyBlbmFibGUgYnVpbHRpbiBwbHVnaW4gbm90IGluY2x1ZGVkIGluIGRlZmF1bHQgcHJlc2V0XG4gICAgICAgICAgICAncmVtb3ZlRGltZW5zaW9ucycsXG4gICAgICAgICAgICAncHJlZml4SWRzJyxcbiAgICAgICAgICAgICdyZW1vdmVYTUxOUycsXG4gICAgICAgICAgICAvLyBlbmFibGUgYW5kIGNvbmZpZ3VyZSBidWlsdGluIHBsdWdpbiBub3QgaW5jbHVkZWQgaW4gcHJlc2V0XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdyZW1vdmVBdHRyaWJ1dGVzQnlTZWxlY3RvcicsXG4gICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3ZnJyxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBbJ2NsYXNzJywgJ3N0eWxlJywgJ3htbDpzcGFjZSddXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSxcbiAgICBtaW5pU3ZnKHtcbiAgICAgIHN2Z29Db25maWc6IHtcbiAgICAgICAgbXVsdGlwYXNzOiB0cnVlLFxuICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ3ByZXNldC1kZWZhdWx0JyxcbiAgICAgICAgICAgIHBhcmFtczogeyBvdmVycmlkZXM6IHsgY29udmVydFBhdGhEYXRhOiB7IGZsb2F0UHJlY2lzaW9uOiAyIH0gfSB9XG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSlcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKVxuICAgIH1cbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICAvLyB3YXRjaDoge30sXG4gICAgLy8gdGFyZ2V0OiAnZXMyMDE1JyxcbiAgICAvLyBtYW5pZmVzdDogdHJ1ZSxcbiAgICAvLyBhc3NldHNJbmxpbmVMaW1pdDogMCxcbiAgICAvLyBtaW5pZnk6IGZhbHNlLFxuICAgIHBvbHlmaWxsTW9kdWxlUHJlbG9hZDogZmFsc2UsXG4gICAgY3NzQ29kZVNwbGl0OiBmYWxzZSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAvLyBleHBlcmltZW50YWxUb3BMZXZlbEF3YWl0OiB0cnVlLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIC8vIGVudHJ5RmlsZU5hbWVzOiAnanMvYXBwLmpzJyxcbiAgICAgICAgZW50cnlGaWxlTmFtZXMoeyBuYW1lIH0pIHtcbiAgICAgICAgICByZXR1cm4gbmFtZSA9PT0gJ2luZGV4JyA/ICdhc3NldHMvanMvYXBwLmpzJyA6ICdhc3NldHMvanMvW25hbWVdLmpzJ1xuICAgICAgICB9LFxuICAgICAgICBjaHVua0ZpbGVOYW1lczogJ2Fzc2V0cy9qcy9bbmFtZV0uanMnLFxuICAgICAgICAvLyBhc3NldEZpbGVOYW1lczogYGFzc2V0cy9bbmFtZV0uW2V4dF1gLFxuICAgICAgICBhc3NldEZpbGVOYW1lcyh7IG5hbWUgfSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCc9PT1OQU1FPT09JywgbmFtZSlcbiAgICAgICAgICBpZiAobmFtZS5tYXRjaCgvXFwuY3NzJC8pKSB7XG4gICAgICAgICAgICByZXR1cm4gbmFtZSA9PT0gJ3N0eWxlLmNzcydcbiAgICAgICAgICAgICAgPyAnYXNzZXRzL2Nzcy9hcHAuY3NzJ1xuICAgICAgICAgICAgICA6ICdhc3NldHMvY3NzL1tuYW1lXS5jc3MnXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChuYW1lLm1hdGNoKC9cXC4ocG5nfGpwZT9nfGdpZnxzdmd8d2VicHxhdmlmKSQvKSkge1xuICAgICAgICAgICAgcmV0dXJuICdhc3NldHMvaW1nL1tuYW1lXS5bZXh0XSdcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG5hbWUubWF0Y2goL1xcLihtcDR8d2VibXxvZ2d8bXAzfHdhdnxmbGFjfGFhYykkLykpIHtcbiAgICAgICAgICAgIHJldHVybiAnYXNzZXRzL21lZGlhL1tuYW1lXS5bZXh0XSdcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuICdhc3NldHMvW25hbWVdLltleHRdJ1xuICAgICAgICB9XG4gICAgICAgIC8vIG1hbnVhbENodW5rcyhpZCkge1xuICAgICAgICAvLyAgIGlmIChpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzJykpIHJldHVybiAndmVuZG9yJ1xuICAgICAgICAvLyB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBzc3I6IHtcbiAgICAvLyBWaXRlIGF0dGVtcHRzIHRvIGxvYWQgdGhpcyBhcyBhIENvbW1vbmpzIGRlcGVuZGVuY3lcbiAgICBub0V4dGVybmFsOiBbJ3NvbGlkLW1ldGEnLCAnQHNvbGlkanMvcm91dGVyJ11cbiAgfSxcbiAgLy8gYXNzZXRzSW5jbHVkZTogWy9cXC9zdGF0aWNcXC8uKiQvXSxcbiAgc2VydmVyOiB7IHBvcnQ6IDMwMDAsIHN0cmljdFBvcnQ6IHRydWUgfSxcbiAgcHJldmlldzogeyBwb3J0OiAzMDAwLCBzdHJpY3RQb3J0OiB0cnVlIH0sXG4gIGV4cGVyaW1lbnRhbDoge1xuICAgIHJlbmRlckJ1aWx0VXJsKGZpbGVuYW1lLCB7IGhvc3RUeXBlLCAuLi5yZXN0IH0pIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCc9PT09PScsIGZpbGVuYW1lLCBob3N0VHlwZSwgcmVzdClcbiAgICAgIGlmIChob3N0VHlwZSA9PT0gJ2NzcycpIHJldHVybiB7IHJlbGF0aXZlOiB0cnVlIH1cbiAgICAgIHJldHVybiBmaWxlbmFtZVxuICAgIH1cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNlAsU0FBUyxjQUFjLDhCQUE4QjtBQUNsVCxPQUFPLFVBQVU7QUFDakIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sV0FBVztBQUNsQixPQUFPLGNBQWM7QUFDckIsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sWUFBWTtBQUNuQixTQUFTLGtCQUFrQjtBQVAzQixJQUFNLG1DQUFtQztBQVN6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUUxQixTQUFTO0FBQUEsSUFDUCxXQUFXO0FBQUEsTUFFVCxtQkFBbUIsQ0FBQyxRQUFRO0FBTTFCLGVBQU8sSUFBSSxnQkFBZ0IsRUFBRSxVQUFVLDBCQUEwQixDQUFDO0FBQUEsTUFDcEU7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELHVCQUF1QjtBQUFBLElBQ3ZCLE9BQU87QUFBQSxNQUNMLGlCQUFpQjtBQUFBLE1BQ2pCLG9CQUFvQjtBQUFBLElBQ3RCLENBQUM7QUFBQSxJQUNELE9BQU87QUFBQSxJQUNQLE1BQU0sRUFBRSxLQUFLLE1BQU0sT0FBTyxFQUFFLFlBQVksTUFBTSxFQUFFLENBQUM7QUFBQSxJQUVqRCxTQUFTO0FBQUEsTUFDUCxlQUFlO0FBQUEsTUFDZixNQUFNO0FBQUEsUUFDSixTQUFTO0FBQUEsUUFDVCxZQUFZO0FBQUEsVUFDVixXQUFXO0FBQUEsVUFDWCxTQUFTO0FBQUEsWUFDUDtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sUUFBUTtBQUFBLGdCQUNOLFdBQVc7QUFBQSxrQkFFVCxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRTtBQUFBLGtCQUVyQyxlQUFlO0FBQUEsZ0JBQ2pCO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFBQSxZQUVBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUVBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixRQUFRO0FBQUEsZ0JBQ04sVUFBVTtBQUFBLGdCQUNWLFlBQVksQ0FBQyxTQUFTLFNBQVMsV0FBVztBQUFBLGNBQzVDO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsUUFBUTtBQUFBLE1BQ04sWUFBWTtBQUFBLFFBQ1YsV0FBVztBQUFBLFFBQ1gsU0FBUztBQUFBLFVBQ1A7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLFFBQVEsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFO0FBQUEsVUFDbEU7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxJQUNwQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQU1MLHVCQUF1QjtBQUFBLElBQ3ZCLGNBQWM7QUFBQSxJQUNkLGVBQWU7QUFBQSxNQUViLFFBQVE7QUFBQSxRQUVOLGVBQWUsRUFBRSxLQUFLLEdBQUc7QUFDdkIsaUJBQU8sU0FBUyxVQUFVLHFCQUFxQjtBQUFBLFFBQ2pEO0FBQUEsUUFDQSxnQkFBZ0I7QUFBQSxRQUVoQixlQUFlLEVBQUUsS0FBSyxHQUFHO0FBRXZCLGNBQUksS0FBSyxNQUFNLFFBQVEsR0FBRztBQUN4QixtQkFBTyxTQUFTLGNBQ1osdUJBQ0E7QUFBQSxVQUNOO0FBQ0EsY0FBSSxLQUFLLE1BQU0sa0NBQWtDLEdBQUc7QUFDbEQsbUJBQU87QUFBQSxVQUNUO0FBQ0EsY0FBSSxLQUFLLE1BQU0sb0NBQW9DLEdBQUc7QUFDcEQsbUJBQU87QUFBQSxVQUNUO0FBQ0EsaUJBQU87QUFBQSxRQUNUO0FBQUEsTUFJRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFFSCxZQUFZLENBQUMsY0FBYyxpQkFBaUI7QUFBQSxFQUM5QztBQUFBLEVBRUEsUUFBUSxFQUFFLE1BQU0sS0FBTSxZQUFZLEtBQUs7QUFBQSxFQUN2QyxTQUFTLEVBQUUsTUFBTSxLQUFNLFlBQVksS0FBSztBQUFBLEVBQ3hDLGNBQWM7QUFBQSxJQUNaLGVBQWUsVUFBVSxFQUFFLGFBQWEsS0FBSyxHQUFHO0FBRTlDLFVBQUksYUFBYTtBQUFPLGVBQU8sRUFBRSxVQUFVLEtBQUs7QUFDaEQsYUFBTztBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

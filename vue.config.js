const path = require("path")
const lessPath = path.resolve(__dirname + "/src/styles/cover.less")

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  css: {
	loaderOptions: {
		less: {
			lessOptions: {
				modifyVars: {
					hack: `true; @import "${lessPath}";`,
				}
			}
		}
	}
  }
})

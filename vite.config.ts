import { defineConfig, loadEnv } from 'vite'
import setProBuild from './build/pro'
import setLibBuild from './build/lib'
import createVitePlugins from './build/plugin/index'
import { configServer } from './build/server/index'
import { configCss } from './build/css/index'

const path = require('path')

export default ({ mode }: { mode: any }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

    let build: any = {
        minify: false, // 跟踪这个警告[https://github.com/element-plus/element-plus/issues/3219#issuecomment-960374776]
        outDir: process.env.VITE_MODE, //打包文件名称
        assetsDir: 'assets', //打包静态文件的存储地址
        chunkSizeWarningLimit: 500,
    }
    if (mode === 'production') {
        const { rollupOptions, terserOptions } = setProBuild()
        build.rollupOptions = rollupOptions
        build.terserOptions = terserOptions
    }
    if (mode === 'lib') {
        const { emptyOutDir, lib, rollupOptions } = setLibBuild()
        build.emptyOutDir = emptyOutDir
        build.lib = lib
        build.rollupOptions = rollupOptions
    }
    return defineConfig({
        base: './',
        plugins: createVitePlugins({ variables: process.env }),
        resolve: {
            alias: {
                // 如果报错__dirname找不到，需要安装node,执行yarn add @types/node --save-dev
                '@': path.resolve(__dirname, 'src'),
                '__ROOT__': path.resolve(__dirname, ''),
                'comps': path.resolve(__dirname, 'src/components'),
            },
        },
        server: configServer(),
        css: configCss(),
        build,
    })
}

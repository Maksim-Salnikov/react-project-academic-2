import webpack, { DefinePlugin, RuleSetRule } from 'webpack'
import { BuildPaths } from '../build/types/config'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import path from 'path'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    entry: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  }
  config.resolve?.modules?.unshift(paths.src)
  config.resolve?.extensions?.push('.ts', '.tsx')

  config.module?.rules?.push(buildCssLoader(true))

  if (config.module?.rules) {
    // @ts-ignore
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i }
      }

      return rule
    })
  }

  config.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  })

  config.plugins?.push(
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify('http://testapi.ru'),
      __PROJECT__: JSON.stringify('storybook'),
    }),
  )

  return config
}

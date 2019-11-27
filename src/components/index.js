import Vue from 'vue'

const requireComponent = require.context(
    /**
     * 1、其组件目录的相对路径
     * 2、是否查询其子目录
     * 3、匹配基础组件文件名的正则表达式
     */
    '@/components',
    true,
    /\.vue$/
);
requireComponent.keys().forEach(component => {
  /**
   * 获取组件配置
   */
  const componentConfig = requireComponent(component);
  /**
   * 兼容 import export 和 require module.export 两种规范
   * 如果这个组件选项是通过 `export default` 导出的，
   * 那么就会优先使用 `.default`，
   * 否则回退到使用模块的根。
   */
  const ctrl = componentConfig.default || componentConfig;
  Vue.component(ctrl.name, ctrl);
});

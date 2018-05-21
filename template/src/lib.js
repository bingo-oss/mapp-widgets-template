import hello from './widgets/hello'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import './styles/lib.scss'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
//这里定义所有暴漏出来的部件，部件名就是部件id，在Vue中将通过此id使用组件
//例如hello组件使用<meta-widget-hello></meta-widget-hello>
const {{camelcase name}} = {
    'meta-widget-hello':hello
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
export default {{camelcase name}}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

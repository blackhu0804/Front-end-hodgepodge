export default function vnode(tag, props, key, children, text) {
  return {
    tag, // 标签名
    props, // 标签属性
    key, // 用户设定的key 唯一标识
    children,
    text
  }
}
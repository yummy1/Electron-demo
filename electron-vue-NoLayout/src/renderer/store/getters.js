/**
 * 在这里则是state.文件名.状态名
 */
const getters = {
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name
}
export default getters

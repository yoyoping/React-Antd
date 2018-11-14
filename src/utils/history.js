
// react-router v4 不支持browserHistory导出了，所以通过history来实现这个跳转
import createHistory from 'history/createBrowserHistory';
export default createHistory();

module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1646560416844, function(require, module, exports) {
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/rax.min.js');
} else {
  module.exports = require('./dist/rax.js');
}

}, function(modId) {var map = {"./dist/rax.min.js":1646560416845,"./dist/rax.js":1646560416846}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646560416845, function(require, module, exports) {
var n={t:1,i:!1,driver:null,rootComponents:{},rootInstances:{},owner:null};function t(n,t,i,r,u){return{type:n,key:t,ref:i,props:r,_owner:u}}function i(n){return null===n}function r(n){return"function"==typeof n}function u(n){return"object"==typeof n}function f(n){return"[object Object]"===h.toString.call(n)}function o(n){return Array.isArray(n)}function e(n){return"string"==typeof n}function s(n){return"number"==typeof n}var c=function(){},h={};function a(n,t){if(o(n))for(var i=0,r=n.length;i<r;i++)a(n[i],t);else t.push(n)}function v(n){if(null==n)return n;var t=[];return a(n,t),t.length-1?t:t[0]}var l=[],p=[],d=[],_=setTimeout;function x(n){var t;while(t=n.shift())t()}function w(n){0===l.length&&_(y),l.push(n)}function y(){x(l)}function b(n){0===p.length&&_(j),p.push(n)}function j(){x(p)}function m(n){d.push(n)}function O(t,i,r){var u,o=void 0===r?"":" got: "+function(n){return f(n)?Object.keys(n):n}(r);return Error(t+": #"+i+", "+(((u=n.owner)?"check <"+u.u()+">":"no owner")+".")+o)}function g(n,t){throw O("Error",n,t)}function k(n,t){var i=O("Warn",n,t);_((function(){throw i}),0)}var I={key:!0,ref:!0};function A(i,r,u){var f,e={},s=null,h=null;if(null!=r)for(f in h=void 0===r.ref?null:r.ref,s=void 0===r.key?null:""+r.key,r)I[f]||(e[f]=r[f]);var a=arguments.length-2;if(a>0)if(1!==a||o(u)){var l=u;if(a>1){l=Array(a);for(var p=0;p<a;p++)l[p]=arguments[p+2]}e.children=v(l)}else e.children=u;if(i&&i.defaultProps){var d=i.defaultProps;for(f in d)void 0===e[f]&&(e[f]=d[f])}return null==i&&(i=c,k(0)),new t(i,s,h,e,n.owner)}function C(n,t,i){for(var r=0,u=n&&n.length;r<u;r++)n[r].call(t,i)}var E=h.hasOwnProperty;function P(n,t){return n===t?0!==n||1/n==1/t:n!=n&&t!=t}function D(n,t){if(P(n,t))return!0;if(!u(n)||i(n)||!u(t)||i(t))return!1;var r=Object.keys(n);if(r.length!==Object.keys(t).length)return!1;for(var f=0;f<r.length;f++)if(!E.call(t,r[f])||!P(n[r[f]],t[r[f]]))return!1;return!0}function S(){return n.owner&&n.owner._instance}function U(){var n=S();if(n)return n;g(1)}function H(n,t){if(i(t)||n.length!==t.length)return!1;for(var r=0;r<n.length;r++)if(!P(n[r],t[r]))return!1;return!0}function N(t){var i=U(),u=i.getHookID(),f=i.getHooks();if(!f[u]){r(t)&&(t=t());f[u]=[t,function(t){n.i||j();var o=f[u],e=o[2];r(t)&&(t=t(e)),P(t,e)||(o[2]=t,S()===i?i.o=!0:i.h())},t]}var o=f[u];return P(o[0],o[2])||(o[0]=o[2],i.v=!0),o}function R(n,t){T(n,t)}function T(n,t,i){var r=U(),u=r.getHookID(),f=r.getHooks();if(t=void 0===t?null:t,f[u]){var o=f[u],e=o.l,s=o.p;o.p=t,o._=s,e.current=n}else{var c=function n(t){if(!t&&i)return b((function(){return n(!0)}));var r=n.current;r&&(h.current=r(),n.current=null)},h=function n(t){if(!t&&i)return b((function(){return n(!0)}));var r=n.current;r&&(r(),n.current=null)};c.current=n,f[u]={l:c,j:h,_:t,p:t},r.didMount.push(c),r.willUnmount.push((function(){return h(!0)})),r.didUpdate.push((function(){var n=f[u],t=n.p,i=n.l;null!=t&&H(t,n._)||(h(),i())}))}}function V(n,t){var r=U(),u=r.getHookID(),f=r.getHooks();if(t=void 0===t?null:t,f[u]){var o=f[u][1];!i(t)&&H(t,o)||(f[u]=[n(),t])}else f[u]=[n(),t];return f[u][0]}function W(n){return o(n)?n:[n]}function Z(n,t){var i;while(n&&n._internal){if(t(n)){i=n;break}n=n._internal.m}return i}var $=0;function q(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,z(n,t)}function z(n,t){return(z=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}var B=function(){function t(n){this.O=n}var i=t.prototype;return i.g=function(t,i,r){this._parent=t,this.m=i,this._context=r,this._mountID=n.t++},i.k=function(){this.O=this._nativeNode=this._parent=this.m=this._context=null,this._instance&&(this._instance=this._instance._internal=null)},i.I=function(n,t,i,r){this.g(n,t,i),this.A(r);var u={};return u._internal=this,u},i.unmountComponent=function(t){this._nativeNode&&!t&&n.driver.removeChild(this._nativeNode,this._parent),this.k()},i.u=function(){var n=this.O,t=n&&n.type;return t&&t.displayName||t&&t.name||t||n},i.A=function(t){var i=this.C(),r=this._parent;t?t(i,r):n.driver.appendChild(i,r)},i.C=function(){return null==this._nativeNode?this._nativeNode=this.P():this._nativeNode},i.D=function(){return this.C()},t}(),F=function(t){function i(){return t.apply(this,arguments)||this}q(i,t);var r=i.prototype;return r.P=function(){return n.driver.createEmpty(this)},r.S=function(){},i}(B);function G(n,t,i){var r=n?n.ref:null,u=t?t.ref:null;r!==u&&(r&&K(n._owner,r,i),u&&J(t._owner,u,i))}function J(n,t,i){if(n){var f=i.D();r(t)?t(f):u(t)?t.current=f:n._instance.refs[t]=f}else k(3)}function K(n,t,i){if(r(t))t(null);else{var f=i.D();u(t)&&t.current===f?t.current=null:n._instance.refs[t]===f&&delete n._instance.refs[t]}}function L(t){var r;return f(t)&&null!==t&&t.type?r=e(t.type)?new n.U(t):new n.H(t):e(t)||s(t)?r=new n.N(t+""):o(t)?r=new n.R(t):(void 0===t||i(t)||!1===t||!0===t||k(2,t),r=new n.T(t)),r}function M(n,t){var r=i(n),f=i(t);return r||f?r===f:!(!o(n)||!o(t))||(e(n)||s(n)?e(t)||s(t):u(n)&&u(t)&&n.type===t.type&&n.key===t.key)}function Q(n,t,i){var r=t&&t.key,u="."+i.toString(36);if(e(r)){var f="$"+r;return void 0===n[f]?f:u}return u}function X(t){var i=t;while(i=t.m&&t.m._internal)if(i instanceof n.H)t=i;else{for(var r=Object.keys(i.V),u=t.W-1;u>=0;u--){var f=i.V[r[u]].C();if(!o(f))return f;if(f.length>0)return f[f.length-1]}if(!(i instanceof n.R))return null;t=i}}var Y=function(){function n(n,t){this.props=n,this.context=t,this.refs={}}var t=n.prototype;return t.setState=function(n,t){this.updater.setState(this,n,t)},t.forceUpdate=function(n){this.updater.forceUpdate(this,n)},n}(),nn=function(n){function t(t,i){var r;return(r=n.call(this,t,i)||this).Z=!0,r}return q(t,n),t}(Y),tn=1,rn=function(n){function t(){var t;return(t=n.call(this)||this).$=[],t.q=tn++,t}q(t,n);var i=t.prototype;return i.D=function(){return this.B().D()},i.B=function(){return this._internal._renderedComponent},i.h=function(n){this.$=n,this.forceUpdate()},i.render=function(){return this.$},t}(Y),un={set:function(t,i){t._r||(t._r=i,i.q&&(n.rootInstances[i.q]=i,n.rootComponents[i.q]=i._internal))},get:function(n){return n._r},remove:function(t){var i=this.get(t);i&&(t._r=null,i.q&&(delete n.rootComponents[i.q],delete n.rootInstances[i.q]))},mount:function(t,i,r){var u=r.parent,f=r.hydrate,o=n.driver;null==i&&(i=o.createBody());var e,s={element:t,container:i,hydrate:f};if(o.beforeRender&&o.beforeRender(s),u){var c=u._internal;e=c.F(c._context)}var h=this.get(i);if(h&&h.q)return e&&(h._internal.G=e),h.h(t),o.afterRender&&o.afterRender(s),h;var a=L(A(rn)).I(i,u,e||{});return this.set(i,a),a.h(t),o.afterRender&&o.afterRender(s),a}},fn=Object.assign,on=/^on[A-Z]/,en=function(t){function u(){return t.apply(this,arguments)||this}q(u,t);var f=u.prototype;return f.I=function(n,t,i,r){this.g(n,t,i);var u=this.O,f=u.props,o=u.type,e=f.children,s=f.append||"tree";this.J=fn({},f.style);var c={type:o,props:f};return c._internal=this,this._instance=c,"tree"===s?(this.K(e,i),this.A(r)):(this.A(r),this.K(e,i)),u&&u.ref&&J(u._owner,u.ref,this),c},f.K=function(n,t){if(null==n)return n;var i=this.C();return this.L(i,W(n),t)},f.L=function(n,t,i,r){for(var u=this.V={},f=[],o=0,e=t.length;o<e;o++){var s=t[o],c=L(s);u[Q(u,s,o)]=c,c.W=o;var h=c.I(n,this._instance,i,r);f.push(h)}return f},f.M=function(n){var t=this.V;if(t){for(var i in t){t[i].unmountComponent(n)}this.V=null}},f.unmountComponent=function(t){if(this._nativeNode){var i=this.O.ref;i&&K(this.O._owner,i,this),un.remove(this._nativeNode),t||n.driver.removeChild(this._nativeNode,this._parent)}this.M(!0),this.J=null,this.k()},f.S=function(n,t,i,r){this.O=t,G(n,t,this);var u=n.props,f=t.props;this.X(u,f),null==u.children||o(u.children)&&0===u.children.length?this.K(f.children,r):this.Y(f.children,r)},f.X=function(t,i){var u,f,o,e=n.driver,s=this.C();for(u in t)if("children"!==u&&null!=t[u]&&!i.hasOwnProperty(u))if("style"===u){var c=this.J;for(f in c)(o=o||{})[f]="";this.J=null}else if(on.test(u)){var h=t[u];r(h)&&e.removeEventListener(s,u.slice(2).toLowerCase(),h)}else e.removeAttribute(s,u,t[u]);for(u in i){var a=i[u],v="style"===u?this.J:null!=t?t[u]:void 0;if("children"!==u&&v!==a&&(null!=a||null!=v))if("style"===u)if(a?a=this.J=fn({},a):this.J=null,null!=v){for(f in v)a&&(a[f]||0===a[f])||((o=o||{})[f]="");for(f in a)v[f]!==a[f]&&((o=o||{})[f]=a[f])}else o=a;else if(on.test(u)){var l=u.slice(2).toLowerCase();r(v)&&e.removeEventListener(s,l,v,i),r(a)&&e.addEventListener(s,l,a,i)}else null!=a?e.setAttribute(s,u,a):e.removeAttribute(s,u,t[u])}o&&e.setStyle(s,o)},f.Y=function(t,r){var u=this.V,f=n.driver;if(null!=t||null!=u){var e={};if(null!=t)for(var s=0,c=(t=W(t)).length;s<c;s++){var h=t[s],a=Q(e,h,s),v=u&&u[a],l=v&&v.O,p=v&&v._context;null!=v&&M(l,h)?(l===h&&p===r||v.S(l,h,r,r),e[a]=v):(v&&(v.nn=!0),e[a]=L(h))}var d=this.C(),_=o(d),x=null,w=null,y=!1,b=!1,j=null,m=!(!f.removeChildren||!(i(t)||t&&!t.length)||_);if(null!=u){for(var O in u){var g=u[O],k=g.nn||!e[O];x?k&&g.unmountComponent(m):(b=k,o(w=(x=g).C())&&(y=0===w.length,w=w[0]))}(_&&0===d.length||y)&&(j=X(this))}if(null!=e){var I=function(n,t){for(var i=0,r=(n=W(n)).length;i<r;i++)j?f.insertAfter(n[r-1-i],j):w?f.insertBefore(n[i],w):t&&f.appendChild(n[i],t)},A=0;for(var C in e){var E=e[C],P=u&&u[C];if(P===E){var D=P.C();P.W!==A&&I(D)}else _&&(d=this._parent),E.I(d,this._instance,r,I);E.W=A++,o(j=E.C())&&(j=j[j.length-1])}}b&&x.unmountComponent(m),m&&f.removeChildren(this._nativeNode),this.V=e}},f.P=function(){var t=this._instance,i=n.driver.createElement(t.type,t.props,this);return un.set(i,t),i},u}(B),sn=function(t){function i(){return t.apply(this,arguments)||this}q(i,t);var r=i.prototype;return r.S=function(t,i){t!==(i=""+i)&&(this.O=i,n.driver.updateText(this.C(),i))},r.P=function(){return n.driver.createText(this.O,this)},i}(B),cn=function(n){function t(t,i){var r;(r=n.call(this)||this).tn=!0,r.rn=t,r.un=0,r.fn=0,r.on={},r.o=!1,r.v=!1,r.en=null,r.sn={},r.didMount=[],r.didUpdate=[],r.willUnmount=[],r.state=h,t._forwardRef&&(r.cn=r._forwardRef=i);var u=t.hn;return u&&(r.shouldComponentUpdate=function(n){for(var t=!0,i=u.length-1;i>-1;i--)if(t=u[i](r.props,n))break;return!t||r.cn!==r._forwardRef}),r}q(t,n);var i=t.prototype;return i.getHooks=function(){return this.on},i.getHookID=function(){return++this.un},i.useContext=function(n){var t=this,i=n._contextID,r=this.sn[i];if(!r){var u=n.an(this);if(r=this.sn[i]={vn:u},u){var f=function(n){r.ln!==n&&(t.v=!0,t.h())};u.pn(f),this.willUnmount.push((function(){return u.dn(f)}))}}return r.ln=r.vn?r.vn.getValue():n._defaultValue},i.componentWillMount=function(){this.v=!0},i.componentDidMount=function(){C(this.didMount)},i.componentWillReceiveProps=function(){this.v=!0},i.componentDidUpdate=function(){C(this.didUpdate)},i.componentWillUnmount=function(){C(this.willUnmount)},i.h=function(){this.setState(h)},i.render=function(){this.un=0,this.fn=0,this.o=!1;var n=this.rn(this.props,this._forwardRef?this._forwardRef:this.context);while(this.o)this.fn++,this.fn>24&&g(4),this.un=0,this.o=!1,n=this.rn(this.props,this._forwardRef?this._forwardRef:this.context);return this.v&&(this.en=n,this.v=!1),this.en},t}(Y),hn=[];function an(n){return n._n}function vn(t){var i=t._internal;if(i){n.i=!0;var r=i.O,u=i._context,f=i.G||u;i.G=void 0,(an(i)||i.xn)&&(i.S(r,r,u,f),x(d)),n.i=!1}}function ln(n,t){return t._internal._mountID-n._internal._mountID}function pn(){if(n.i)return w(pn);var t,i=hn;if(i.length>0){j(),hn=[],i.length>1&&(i=i.filter((function(n){return!!n._internal})).sort(ln));while(t=i.pop())vn(t)}}function dn(n,t){if(hn.indexOf(n)<0&&hn.push(n),t){if(hn.length>1)return;w(pn)}else pn()}function _n(n,t,i){var r=n._internal;if(r){i&&function(n,t){(function(n){return n.wn}(n)||function(n){return n.wn=[]}(n)).push(t)}(r,i);var u=r._renderedComponent;t?(n.tn&&(r.xn=!0),function(n,t){(an(n)||function(n){return n._n=[]}(n)).push(t)}(r,t),!r.yn&&u&&dn(n,!0)):(r.xn=!0,u&&dn(n))}}var xn={setState:function(t,i,r){n.i||j(),_n(t,i,r)},forceUpdate:function(n,t){_n(n,null,t)}};function wn(n,t,i){try{return n()}catch(n){i?i(n):function(n,t){var i=Z(n,(function(n){return n.componentDidCatch||n.constructor&&n.constructor.getDerivedStateFromError}));i?m((function(){var n=i._internal;n&&wn((function(){if(i.componentDidCatch&&i.componentDidCatch(t),i.constructor&&i.constructor.getDerivedStateFromError){var n=i.constructor.getDerivedStateFromError(t);i.setState(n)}}),n.m)})):_((function(){throw t}),0)}(t,n)}}function yn(n,t){m((function(){wn(n,t)}))}function bn(n,t){n&&yn((function(){C(n,t)}),t)}var jn=function(t){function i(){return t.apply(this,arguments)||this}q(i,t);var u=i.prototype;return u.I=function(t,i,u,f){this.g(t,i,u);var o,e,s=this.O,c=s.type,h=s.ref,a=s.props,v=c.prototype,l=this.bn(u);if(wn((function(){v&&v.render?o=new c(a,l):r(c)?o=new cn(c,h):g(6,c)}),i),o){o.props=a,o.context=l,o.refs={},o.updater=xn,o._internal=this,this._instance=o;var p=o.state;void 0===p&&(o.state=p=null),o.componentWillMount&&wn((function(){o.componentWillMount()}),o),n.owner=this,o.state=this.jn(a,l);var d=this.wn;return this.wn=null,wn((function(){e=o.render()}),o),n.owner=null,this._renderedComponent=L(e),this._renderedComponent.I(this._parent,o,this.F(u),f),!s.type._forwardRef&&h&&J(s._owner,h,this),o.componentDidMount&&yn((function(){o.componentDidMount()}),o),bn(d,o),o}},u.unmountComponent=function(n){var t=this._instance;if(t&&t.componentWillUnmount&&wn((function(){t.componentWillUnmount()}),t),null!=this._renderedComponent){var i=this.O,r=i.ref;!i.type._forwardRef&&r&&K(i._owner,r,this),this._renderedComponent.unmountComponent(n),this._renderedComponent=null}this._n=null,this.xn=!1,this.k()},u.bn=function(n){var t={},i=this.O.type.contextTypes;if(i)for(var r in i)t[r]=n[r];return t},u.F=function(n){var t=this._instance,i=t.getChildContext&&t.getChildContext();return i?fn({},n,i):n},u.jn=function(n,t){var i=this._instance,u=this._n;if(!u)return i.state;this._n=null;for(var f=fn({},i.state),o=0;o<u.length;o++){var e=u[o];fn(f,r(e)?e.call(i,f,n,t):e)}return f},u.S=function(n,t,i,r){var u=this,f=this._instance;f&&wn((function(){var i,o,e;u._context===r?o=f.context:(o=u.bn(r),i=!0),e=t.props,n!==t&&(i=!0),i&&f.componentWillReceiveProps&&(u.yn=!0,f.componentWillReceiveProps(e,o),u.yn=!1),u.O.type._forwardRef?(f.cn=n.ref,f._forwardRef=t.ref):G(n,t,u);var s=!0,c=f.props,h=f.state,a=u.jn(e,o),v=u.wn;if(u.wn=null,u.xn||(f.shouldComponentUpdate?s=f.shouldComponentUpdate(e,a,o):f.Z&&(s=!D(c,e)||!D(h,a))),s){u.xn=!1;var l=f.context;f.componentWillUpdate&&f.componentWillUpdate(e,a,o),u.O=t,u._context=r,f.props=e,f.state=a,f.context=o,u.mn(r),f.componentDidUpdate&&yn((function(){f.componentDidUpdate(c,h,l)}),f)}else u.O=t,u._context=r,f.props=e,f.state=a,f.context=o;bn(v,f)}),f)},u.mn=function(t){var i,r=this._renderedComponent,u=r.O,f=this._instance;if(n.owner=this,i=f.render(),n.owner=null,M(u,i)){var e=r._context,s=this.F(t);u===i&&e===s||r.S(u,i,e,s)}else{var c=null,h=r.C();o(h)&&0===h.length&&null==f.q&&(c=X(r)),r.unmountComponent(!0),this._renderedComponent=L(i),this._renderedComponent.I(this._parent,f,this.F(t),(function(t,i){var r=n.driver;h=W(h),t=W(t);for(var u=0;u<t.length;u++){var f=t[u];h[u]?r.replaceChild(f,h[u]):c?r.insertAfter(f,c):r.appendChild(f,i),c=f}for(var o=t.length;o<h.length;o++)r.removeChild(h[o])}))}},u.C=function(){var n=this._renderedComponent;if(n)return n.C()},u.D=function(){var n=this._instance;return n.tn?null:n},i}(B),mn=function(t){function i(){return t.apply(this,arguments)||this}q(i,t);var r=i.prototype;return r.I=function(t,i,r,u){this.g(t,i,r);var f=this._instance={};f._internal=this;var o=[];if(this.L(this._parent,this.O,r,(function(n){n=W(n);for(var t=0;t<n.length;t++)o.push(n[t])})),u)u(o,t);else for(var e=0;e<o.length;e++)n.driver.appendChild(o[e],t);return f},r.unmountComponent=function(t){if(!t)for(var i=this.C(),r=0,u=i.length;r<u;r++)n.driver.removeChild(i[r]);this.M(!0),this.k()},r.S=function(n,t,i,r){this.O=t,this.Y(this.O,r)},r.C=function(){var n=this.V||{};return[].concat.apply([],Object.keys(n).map((function(t){return n[t].C()})))},i}(en);var On={Host:n,Instance:un,Element:t,flattenChildren:v};exports.Component=Y,exports.Fragment=function(n){return n.children},exports.PureComponent=nn,exports.createContext=function(n){var t="_c"+$++;function i(n){return Z(n,(function(n){return n.On===t}))}return{Provider:function(){function i(){this.On=t,this.gn=[]}var r=i.prototype;return r.pn=function(n){this.gn.push(n)},r.dn=function(n){this.gn=this.gn.filter((function(t){return t!==n}))},r._getChildContext=function(){var n;return(n={})[t]=this,n},r.getValue=function(){return void 0!==this.props.value?this.props.value:n},r.componentDidUpdate=function(n){this.props.value!==n.value&&C(this.gn,null,this.getValue())},r.render=function(){return this.props.children},i}(),Consumer:function(u,f){var o=this,e=N((function(){return f[t]||i(o)}))[0],s=e?e.getValue():n,c=N(s),h=c[1];if(s===c[0]){R((function(){if(e)return e.pn(h),function(){e.dn(h)}}),[]);var a=W(u.children)[0];return r(a)?a(s):void 0}h(s)},_contextID:t,_defaultValue:n,an:i}},exports.createElement=A,exports.createRef=function(){return{current:null}},exports.forwardRef=function(n){return n._forwardRef=!0,n},exports.memo=function(n,t){return t=t||D,n.hn?n.hn.push(t):n.hn=[t],n},exports.render=function(t,i,u,f){var o;r(u)&&(f=u,u=null),o=(u=u||h).driver,n.T=F,n.U=en,n.N=sn,n.R=mn,n.H=jn,(n.driver=o||n.driver)||g(5);var e=un.mount(t,i,u).D();return f&&f.call(e),e},exports.shared=On,exports.useCallback=function(n,t){return V((function(){return n}),t)},exports.useContext=function(n){return U().useContext(n)},exports.useEffect=function(n,t){T(n,t,!0)},exports.useImperativeHandle=function(n,t,i){R((function(){return r(n)?(n(t()),function(){return n(null)}):null!=n?(n.current=t(),function(){n.current=null}):void 0}),o(i)?i.concat([n]):null)},exports.useLayoutEffect=R,exports.useMemo=V,exports.useReducer=function(t,i,u){var f=U(),o=f.getHookID(),e=f.getHooks(),s=e[o];if(!s){var c=r(u)?u(i):i;return e[o]=[c,function(t){n.i||j();var i=e[o][2];if(S()===f)i.kn.push(t),f.o=!0;else{var r=i.In,u=(0,i.An)(r,t);if(P(u,r))return;i.In=u,i.kn.push(t),f.h()}},{kn:[],An:t,In:c}]}var h=s[2],a=s[0];if(f.fn>0)for(var v=0;v<h.kn.length;v++)a=t(a,h.kn[v]);else a=h.In;return P(a,s[0])||(s[0]=a,f.v=!0),h.An=t,h.In=a,h.kn.length=0,e[o]},exports.useRef=function(n){var t=U(),i=t.getHookID(),r=t.getHooks();return r[i]||(r[i]={current:n}),r[i]},exports.useState=N,exports.version="1.2.2";

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646560416846, function(require, module, exports) {
/*
 * Stateful things in runtime
 */
var Host = {
  __mountID: 1,
  __isUpdating: false,
  // Inject
  driver: null,
  // Roots
  rootComponents: {},
  rootInstances: {},
  // Current owner component
  owner: null
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var printWarning = function() {};

{
  var ReactPropTypesSecret = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

function Element(type, key, ref, props, owner) {
  var element = {
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    var propTypes = type.propTypes; // Validate its props provided by the propTypes definition

    if (propTypes) {
      var displayName = type.displayName || type.name;
      checkPropTypes_1(propTypes, props, 'prop', displayName);
    } // We make validation flag non-enumerable, so the test framework could ignore it


    Object.defineProperty(element, '__validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // Props is immutable

    if (Object.freeze) {
      Object.freeze(props);
    }
  }

  return element;
}

function isNull(obj) {
  return obj === null;
}
function isFunction(obj) {
  return typeof obj === 'function';
}
function isObject(obj) {
  return typeof obj === 'object';
}
function isPlainObject(obj) {
  return EMPTY_OBJECT.toString.call(obj) === '[object Object]';
}
function isArray(array) {
  return Array.isArray(array);
}
function isString(string) {
  return typeof string === 'string';
}
function isNumber(string) {
  return typeof string === 'number';
}
var NOOP = function NOOP() {};
var EMPTY_OBJECT = {};

function traverseChildren(children, result) {
  if (isArray(children)) {
    for (var i = 0, l = children.length; i < l; i++) {
      traverseChildren(children[i], result);
    }
  } else {
    result.push(children);
  }
}

function flattenChildren(children) {
  if (children == null) {
    return children;
  }

  var result = [];
  traverseChildren(children, result); // If length equal 1, return the only one.

  return result.length - 1 ? result : result[0];
}

var updateCallbacks = [];
var effectCallbacks = [];
var layoutCallbacks = [];
var scheduler = setTimeout;

{
  // Wrapper timer for hijack timers in jest
  scheduler = function scheduler(callback) {
    setTimeout(callback);
  };
}

function invokeFunctionsWithClear(callbacks) {
  var callback;

  while (callback = callbacks.shift()) {
    callback();
  }
} // Schedule before next render


function schedule(callback) {
  if (updateCallbacks.length === 0) {
    scheduler(flush);
  }

  updateCallbacks.push(callback);
} // Flush before next render

function flush() {
  invokeFunctionsWithClear(updateCallbacks);
}
function scheduleEffect(callback) {
  if (effectCallbacks.length === 0) {
    scheduler(flushEffect);
  }

  effectCallbacks.push(callback);
}
function flushEffect() {
  invokeFunctionsWithClear(effectCallbacks);
}
function scheduleLayout(callback) {
  layoutCallbacks.push(callback);
}
function flushLayout() {
  invokeFunctionsWithClear(layoutCallbacks);
}

function createMinifiedError(type, code, obj) {
  var typeInfo = obj === undefined ? '' : ' got: ' + getTypeInfo(obj);
  return new Error(type + ": #" + code + ", " + getRenderErrorInfo() + "." + typeInfo);
}

function getTypeInfo(obj) {
  return isPlainObject(obj) ? Object.keys(obj) : obj;
}
function getRenderErrorInfo() {
  var ownerComponent = Host.owner;
  return ownerComponent ? "check <" + ownerComponent.__getName() + ">" : 'no owner';
}
/**
 * Minified code:
 *  1: Hooks called outside a component, or multiple version of Rax are used.
 *  6: Invalid component type, expected a class or function component.
 *  4: Too many re-renders, the number of renders is limited to prevent an infinite loop.
 *  5: Rax driver not found.
 * @param code {Number}
 * @param obj {Object}
 */

function throwMinifiedError(code, obj) {
  throw createMinifiedError('Error', code, obj);
}
function throwError(message, obj) {
  var typeInfo = obj === undefined ? '' : '(found: ' + (isPlainObject(obj) ? "object with keys {" + Object.keys(obj) + "}" : obj) + ')';
  throw Error(message + " " + typeInfo);
}
var warning = NOOP;

{
  warning = function warning(template) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (typeof console !== 'undefined') {
      var argsWithFormat = args.map(function (item) {
        return '' + item;
      });
      argsWithFormat.unshift('Warning: ' + template); // Don't use spread (or .apply) directly because it breaks IE9

      Function.prototype.apply.call(console.error, console, argsWithFormat);
    } // For works in DevTools when enable `Pause on caught exceptions`
    // that can find the component where caused this warning


    try {
      var argIndex = 0;
      var message = 'Warning: ' + template.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (e) {}
  };
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */

var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = '';
  var ownerComponent = Host.owner;

  if (ownerComponent) {
    var name = ownerComponent.__getName();

    if (name) {
      info = " Check the render method of <" + name + ">.";
    }
  }

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = " Check the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.type && !!object.props;
}

function validateExplicitKey(element, parentType) {
  if (element.__validated || element.key != null) {
    return;
  }

  element.__validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== Host.owner) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from <" + element._owner.__getName() + ">.";
  }

  warning("Each child in a list should have a unique \"key\" prop." + currentComponentErrorInfo + childOwner);
}

function validateChildKeys(node, parentType) {
  // Only array or element object is valid child
  if (typeof node !== 'object') {
    return;
  }

  if (isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    node.__validated = true;
  } // Rax don't support iterator object as element children
  // TODO: add validate when rax support iterator object as element.

}

var RESERVED_PROPS = {
  key: true,
  ref: true
};
function createElement(type, config, children) {
  // Reserved names are extracted
  var props = {};
  var propName;
  var key = null;
  var ref = null;

  if (config != null) {
    ref = config.ref === undefined ? null : config.ref;
    key = config.key === undefined ? null : '' + config.key; // Remaining properties are added to a new props object

    for (propName in config) {
      if (!RESERVED_PROPS[propName]) {
        props[propName] = config[propName];
      }
    }
  } // Children arguments can be more than one


  var childrenLength = arguments.length - 2;

  if (childrenLength > 0) {
    if (childrenLength === 1 && !isArray(children)) {
      props.children = children;
    } else {
      var childArray = children;

      if (childrenLength > 1) {
        childArray = new Array(childrenLength);

        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 2];
        }
      }

      props.children = flattenChildren(childArray);
    }
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  if (type == null) {
    {
      throwError("Invalid element type, expected a string or a class/function component but got \"" + type + "\".");
    }
  }

  {
    if (isString(ref) && !Host.owner) {
      warning("Adding a string ref \"" + ref + "\" that was not created inside render method, or multiple copies of Rax are used.");
    }

    for (var _i = 2; _i < arguments.length; _i++) {
      validateChildKeys(arguments[_i], type);
    }
  }

  return new Element(type, key, ref, props, Host.owner);
}

function invokeFunctionsWithContext(fns, context, value) {
  for (var i = 0, l = fns && fns.length; i < l; i++) {
    fns[i].call(context, value);
  }
}

var hasOwnProperty = EMPTY_OBJECT.hasOwnProperty;
/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */

function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return x !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y; // eslint-disable-line no-self-compare
  }
}
/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */

function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (!isObject(objA) || isNull(objA) || !isObject(objB) || isNull(objB)) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  } // Test for A's keys different from B.


  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/* Common constant variables for rax */
var INTERNAL = '_internal';
var INSTANCE = '_instance';
var NATIVE_NODE = '_nativeNode';
var RENDERED_COMPONENT = '_renderedComponent';

function getCurrentInstance() {
  return Host.owner && Host.owner[INSTANCE];
}

function getCurrentRenderingInstance() {
  var currentInstance = getCurrentInstance();

  if (currentInstance) {
    return currentInstance;
  } else {
    {
      throwError('Hooks called outside a component, or multiple version of Rax are used.');
    }
  }
}

function areInputsEqual(inputs, prevInputs) {
  if (isNull(prevInputs) || inputs.length !== prevInputs.length) {
    return false;
  }

  for (var i = 0; i < inputs.length; i++) {
    if (is(inputs[i], prevInputs[i])) {
      continue;
    }

    return false;
  }

  return true;
}

function useState(initialState) {
  var currentInstance = getCurrentRenderingInstance();
  var hookID = currentInstance.getHookID();
  var hooks = currentInstance.getHooks();

  if (!hooks[hookID]) {
    // If the initial state is the result of an expensive computation,
    // you may provide a function instead for lazy initial state.
    if (isFunction(initialState)) {
      initialState = initialState();
    }

    var setState = function setState(newState) {
      // Flush all effects first before update state
      if (!Host.__isUpdating) {
        flushEffect();
      }

      var hook = hooks[hookID];
      var eagerState = hook[2]; // function updater

      if (isFunction(newState)) {
        newState = newState(eagerState);
      }

      if (!is(newState, eagerState)) {
        // Current instance is in render update phase.
        // After this one render finish, will continue run.
        hook[2] = newState;

        if (getCurrentInstance() === currentInstance) {
          // Marked as is scheduled that could finish hooks.
          currentInstance.__isScheduled = true;
        } else {
          currentInstance.__update();
        }
      }
    };

    hooks[hookID] = [initialState, setState, initialState];
  }

  var hook = hooks[hookID];

  if (!is(hook[0], hook[2])) {
    hook[0] = hook[2];
    currentInstance.__shouldUpdate = true;
  }

  return hook;
}
function useContext(context) {
  var currentInstance = getCurrentRenderingInstance();
  return currentInstance.useContext(context);
}
function useEffect(effect, inputs) {
  useEffectImpl(effect, inputs, true);
}
function useLayoutEffect(effect, inputs) {
  useEffectImpl(effect, inputs);
}

function useEffectImpl(effect, inputs, defered) {
  var currentInstance = getCurrentRenderingInstance();
  var hookID = currentInstance.getHookID();
  var hooks = currentInstance.getHooks();
  inputs = inputs === undefined ? null : inputs;

  if (!hooks[hookID]) {
    var __create = function __create(immediately) {
      if (!immediately && defered) return scheduleEffect(function () {
        return __create(true);
      });
      var current = __create.current;

      if (current) {
        __destory.current = current();
        __create.current = null;

        {
          var currentDestory = __destory.current;

          if (currentDestory !== undefined && typeof currentDestory !== 'function') {
            var msg;

            if (currentDestory === null) {
              msg = ' You returned null. If your effect does not require clean ' + 'up, return undefined (or nothing).';
            } else if (typeof currentDestory.then === 'function') {
              msg = '\n\nIt looks like you wrote useEffect(async () => ...) or returned a Promise. ' + 'Instead, write the async function inside your effect ' + 'and call it immediately:\n\n' + 'useEffect(() => {\n' + '  async function fetchData() {\n' + '    // You can await here\n' + '    const response = await MyAPI.getData(someId);\n' + '    // ...\n' + '  }\n' + '  fetchData();\n' + '}, [someId]); // Or [] if effect doesn\'t need props or state.';
            } else {
              msg = ' You returned: ' + currentDestory;
            }

            warning('An effect function must not return anything besides a function, ' + 'which is used for clean-up.' + msg);
          }
        }
      }
    };

    var __destory = function __destory(immediately) {
      if (!immediately && defered) return scheduleEffect(function () {
        return __destory(true);
      });
      var current = __destory.current;

      if (current) {
        current();
        __destory.current = null;
      }
    };

    __create.current = effect;
    hooks[hookID] = {
      __create: __create,
      __destory: __destory,
      __prevInputs: inputs,
      __inputs: inputs
    };
    currentInstance.didMount.push(__create);
    currentInstance.willUnmount.push(function () {
      return __destory(true);
    });
    currentInstance.didUpdate.push(function () {
      var _hooks$hookID = hooks[hookID],
          __prevInputs = _hooks$hookID.__prevInputs,
          __inputs = _hooks$hookID.__inputs,
          __create = _hooks$hookID.__create;

      if (__inputs == null || !areInputsEqual(__inputs, __prevInputs)) {
        __destory();

        __create();
      }
    });
  } else {
    var hook = hooks[hookID];
    var _create = hook.__create,
        prevInputs = hook.__inputs;
    hook.__inputs = inputs;
    hook.__prevInputs = prevInputs;
    _create.current = effect;
  }
}

function useImperativeHandle(ref, create, inputs) {
  var nextInputs = isArray(inputs) ? inputs.concat([ref]) : null;
  useLayoutEffect(function () {
    if (isFunction(ref)) {
      ref(create());
      return function () {
        return ref(null);
      };
    } else if (ref != null) {
      ref.current = create();
      return function () {
        ref.current = null;
      };
    }
  }, nextInputs);
}
function useRef(initialValue) {
  var currentInstance = getCurrentRenderingInstance();
  var hookID = currentInstance.getHookID();
  var hooks = currentInstance.getHooks();

  if (!hooks[hookID]) {
    hooks[hookID] = {
      current: initialValue
    };
  }

  return hooks[hookID];
}
function useCallback(callback, inputs) {
  return useMemo(function () {
    return callback;
  }, inputs);
}
function useMemo(create, inputs) {
  var currentInstance = getCurrentRenderingInstance();
  var hookID = currentInstance.getHookID();
  var hooks = currentInstance.getHooks();
  inputs = inputs === undefined ? null : inputs;

  if (!hooks[hookID]) {
    hooks[hookID] = [create(), inputs];
  } else {
    var prevInputs = hooks[hookID][1];

    if (isNull(inputs) || !areInputsEqual(inputs, prevInputs)) {
      hooks[hookID] = [create(), inputs];
    }
  }

  return hooks[hookID][0];
}
function useReducer(reducer, initialArg, init) {
  var currentInstance = getCurrentRenderingInstance();
  var hookID = currentInstance.getHookID();
  var hooks = currentInstance.getHooks();
  var hook = hooks[hookID];

  if (!hook) {
    var initialState = isFunction(init) ? init(initialArg) : initialArg;

    var dispatch = function dispatch(action) {
      // Flush all effects first before update state
      if (!Host.__isUpdating) {
        flushEffect();
      }

      var hook = hooks[hookID]; // Reducer will update in the next render, before that we add all
      // actions to the queue

      var queue = hook[2];

      if (getCurrentInstance() === currentInstance) {
        queue.__actions.push(action);

        currentInstance.__isScheduled = true;
      } else {
        var currentState = queue.__eagerState;
        var eagerReducer = queue.__eagerReducer;
        var eagerState = eagerReducer(currentState, action);

        if (is(eagerState, currentState)) {
          return;
        }

        queue.__eagerState = eagerState;

        queue.__actions.push(action);

        currentInstance.__update();
      }
    };

    return hooks[hookID] = [initialState, dispatch, {
      __actions: [],
      __eagerReducer: reducer,
      __eagerState: initialState
    }];
  }

  var queue = hook[2];
  var next = hook[0];

  if (currentInstance.__reRenders > 0) {
    for (var i = 0; i < queue.__actions.length; i++) {
      next = reducer(next, queue.__actions[i]);
    }
  } else {
    next = queue.__eagerState;
  }

  if (!is(next, hook[0])) {
    hook[0] = next;
    currentInstance.__shouldUpdate = true;
  }

  queue.__eagerReducer = reducer;
  queue.__eagerState = next;
  queue.__actions.length = 0;
  return hooks[hookID];
}

function toArray(obj) {
  return isArray(obj) ? obj : [obj];
}

function getNearestParent(instance, matcher) {
  var parent;

  while (instance && instance[INTERNAL]) {
    if (matcher(instance)) {
      parent = instance;
      break;
    }

    instance = instance[INTERNAL].__parentInstance;
  }

  return parent;
}

var id = 0;
function createContext(defaultValue) {
  var contextID = '_c' + id++; // Provider Component

  var Provider = /*#__PURE__*/function () {
    function Provider() {
      this.__contextID = contextID;
      this.__handlers = [];
    }

    var _proto = Provider.prototype;

    _proto.__on = function __on(handler) {
      this.__handlers.push(handler);
    };

    _proto.__off = function __off(handler) {
      this.__handlers = this.__handlers.filter(function (h) {
        return h !== handler;
      });
    } // Like getChildContext but called in SSR
    ;

    _proto._getChildContext = function _getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextID] = this, _ref;
    } // `getValue()` called in rax-server-renderer
    ;

    _proto.getValue = function getValue() {
      return this.props.value !== undefined ? this.props.value : defaultValue;
    };

    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      if (this.props.value !== prevProps.value) {
        invokeFunctionsWithContext(this.__handlers, null, this.getValue());
      }
    };

    _proto.render = function render() {
      return this.props.children;
    };

    return Provider;
  }();

  function getNearestParentProvider(instance) {
    return getNearestParent(instance, function (parent) {
      return parent.__contextID === contextID;
    });
  } // Consumer Component


  function Consumer(props, context) {
    var _this = this;

    // Current `context[contextID]` only works in SSR
    var _useState = useState(function () {
      return context[contextID] || getNearestParentProvider(_this);
    }),
        provider = _useState[0];

    var value = provider ? provider.getValue() : defaultValue;

    var _useState2 = useState(value),
        prevValue = _useState2[0],
        setValue = _useState2[1];

    if (value !== prevValue) {
      setValue(value);
      return; // Interrupt execution of consumer.
    }

    useLayoutEffect(function () {
      if (provider) {
        provider.__on(setValue);

        return function () {
          provider.__off(setValue);
        };
      }
    }, []); // Consumer requires a function as a child.
    // The function receives the current context value.

    var consumer = toArray(props.children)[0];

    if (isFunction(consumer)) {
      return consumer(value);
    }
  }

  return {
    Provider: Provider,
    Consumer: Consumer,
    // `_contextID` and `_defaultValue` accessed in rax-server-renderer
    _contextID: contextID,
    _defaultValue: defaultValue,
    __getNearestParentProvider: getNearestParentProvider
  };
}

function createRef() {
  return {
    current: null
  };
}

function forwardRef (render) {
  // _forwardRef is also use in rax server renderer
  render._forwardRef = true;
  return render;
}

function memo(type, compare) {
  compare = compare || shallowEqual; // Memo could composed

  if (type.__compares) {
    type.__compares.push(compare);
  } else {
    type.__compares = [compare];
  }

  return type;
}

function Fragment(props) {
  return props.children;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/**
 * Base Component
 */

var BaseComponent = /*#__PURE__*/function () {
  function BaseComponent(element) {
    this.__currentElement = element;
  }

  var _proto = BaseComponent.prototype;

  _proto.__initComponent = function __initComponent(parent, parentInstance, context) {
    this._parent = parent;
    this.__parentInstance = parentInstance;
    this._context = context;
    this._mountID = Host.__mountID++;
  };

  _proto.__destoryComponent = function __destoryComponent() {
    {
      Host.reconciler.unmountComponent(this);
    }

    this.__currentElement = this[NATIVE_NODE] = this._parent = this.__parentInstance = this._context = null;

    if (this[INSTANCE]) {
      this[INSTANCE] = this[INSTANCE][INTERNAL] = null;
    }
  };

  _proto.__mountComponent = function __mountComponent(parent, parentInstance, context, nativeNodeMounter) {
    this.__initComponent(parent, parentInstance, context);

    this.__mountNativeNode(nativeNodeMounter);

    {
      Host.reconciler.mountComponent(this);
    }

    var instance = {};
    instance[INTERNAL] = this;
    return instance;
  };

  _proto.unmountComponent = function unmountComponent(shouldNotRemoveChild) {
    if (this[NATIVE_NODE] && !shouldNotRemoveChild) {
      Host.driver.removeChild(this[NATIVE_NODE], this._parent);
    }

    this.__destoryComponent();
  };

  _proto.__getName = function __getName() {
    var currentElement = this.__currentElement;
    var type = currentElement && currentElement.type;
    return type && type.displayName || type && type.name || type || // Native component's name is type
    currentElement;
  };

  _proto.__mountNativeNode = function __mountNativeNode(nativeNodeMounter) {
    var nativeNode = this.__getNativeNode();

    var parent = this._parent;

    if (nativeNodeMounter) {
      nativeNodeMounter(nativeNode, parent);
    } else {
      Host.driver.appendChild(nativeNode, parent);
    }
  };

  _proto.__getNativeNode = function __getNativeNode() {
    return this[NATIVE_NODE] == null ? this[NATIVE_NODE] = this.__createNativeNode() : this[NATIVE_NODE];
  };

  _proto.__getPublicInstance = function __getPublicInstance() {
    return this.__getNativeNode();
  };

  return BaseComponent;
}();

/**
 * Empty Component
 */

var EmptyComponent = /*#__PURE__*/function (_BaseComponent) {
  _inheritsLoose(EmptyComponent, _BaseComponent);

  function EmptyComponent() {
    return _BaseComponent.apply(this, arguments) || this;
  }

  var _proto = EmptyComponent.prototype;

  _proto.__createNativeNode = function __createNativeNode() {
    return Host.driver.createEmpty(this);
  };

  _proto.__updateComponent = function __updateComponent() {
    return;
  };

  return EmptyComponent;
}(BaseComponent);

/*
 * Ref manager
 */
function updateRef(prevElement, nextElement, component) {
  var prevRef = prevElement ? prevElement.ref : null;
  var nextRef = nextElement ? nextElement.ref : null; // Update refs in owner component

  if (prevRef !== nextRef) {
    // Detach prev RenderedElement's ref
    prevRef && detachRef(prevElement._owner, prevRef, component); // Attach next RenderedElement's ref

    nextRef && attachRef(nextElement._owner, nextRef, component);
  }
}
function attachRef(ownerComponent, ref, component) {
  if (!ownerComponent) {
    {
      warning('Ref can not attach because multiple copies of Rax are used.');
    }

    return;
  }

  var instance = component.__getPublicInstance();

  {
    if (instance == null) {
      warning('Do not attach ref to function component because they don’t have instances.');
    }
  }

  if (isFunction(ref)) {
    ref(instance);
  } else if (isObject(ref)) {
    ref.current = instance;
  } else {
    ownerComponent[INSTANCE].refs[ref] = instance;
  }
}
function detachRef(ownerComponent, ref, component) {
  if (isFunction(ref)) {
    // When the referenced component is unmounted and whenever the ref changes, the old ref will be called with null as an argument.
    ref(null);
  } else {
    // Must match component and ref could detach the ref on owner when A's before ref is B's current ref
    var instance = component.__getPublicInstance();

    if (isObject(ref) && ref.current === instance) {
      ref.current = null;
    } else if (ownerComponent[INSTANCE].refs[ref] === instance) {
      delete ownerComponent[INSTANCE].refs[ref];
    }
  }
}

function instantiateComponent(element) {
  var instance;

  if (isPlainObject(element) && element !== null && element.type) {
    // Special case string values
    if (isString(element.type)) {
      instance = new Host.__Native(element);
    } else {
      instance = new Host.__Composite(element);
    }
  } else if (isString(element) || isNumber(element)) {
    instance = new Host.__Text(String(element));
  } else if (isArray(element)) {
    instance = new Host.__Fragment(element);
  } else {
    if (!(element === undefined || isNull(element) || element === false || element === true)) {
      {
        throwError('Invalid child type, expected types: Element instance, string, boolean, array, null, undefined.', element);
      }
    }

    instance = new Host.__Empty(element);
  }

  return instance;
}

function shouldUpdateComponent(prevElement, nextElement) {
  var prevEmpty = isNull(prevElement);
  var nextEmpty = isNull(nextElement);

  if (prevEmpty || nextEmpty) {
    return prevEmpty === nextEmpty;
  }

  if (isArray(prevElement) && isArray(nextElement)) {
    return true;
  }

  var isPrevStringOrNumber = isString(prevElement) || isNumber(prevElement);

  if (isPrevStringOrNumber) {
    return isString(nextElement) || isNumber(nextElement);
  } else {
    // prevElement and nextElement could be array, typeof [] is "object"
    return isObject(prevElement) && isObject(nextElement) && prevElement.type === nextElement.type && prevElement.key === nextElement.key;
  }
}

function getElementKeyName(children, element, index) {
  var elementKey = element && element.key;
  var defaultName = '.' + index.toString(36); // Inner child name default format fallback
  // Key should must be string type

  if (isString(elementKey)) {
    var keyName = '$' + elementKey; // Child keys must be unique.

    var keyUnique = children[keyName] === undefined;

    {
      if (!keyUnique) {
        // Only the first child will be used when encountered two children with the same key
        warning("Encountered two children with the same key \"" + elementKey + "\".");
      }
    }

    return keyUnique ? keyName : defaultName;
  } else {
    return defaultName;
  }
}

/**
 * This function is usually been used to find the closet previous sibling native node of FragmentComponent.
 * FragmentComponent does not have a native node in the DOM tree, so when it is replaced, the new node has no corresponding location to insert.
 * So we need to look forward from the current mount position of the FragmentComponent to the nearest component which have the native node.
 * @param component
 * @return nativeNode
 */

function getPrevSiblingNativeNode(component) {
  var parent = component;

  while (parent = component.__parentInstance && component.__parentInstance[INTERNAL]) {
    if (parent instanceof Host.__Composite) {
      component = parent;
      continue;
    }

    var keys = Object.keys(parent.__renderedChildren); // Find previous sibling native node from current mount index

    for (var i = component.__mountIndex - 1; i >= 0; i--) {
      var nativeNode = parent.__renderedChildren[keys[i]].__getNativeNode(); // Fragment component always return array


      if (isArray(nativeNode)) {
        if (nativeNode.length > 0) {
          // Get the last one
          return nativeNode[nativeNode.length - 1];
        }
      } else {
        // Others maybe native node or empty node
        return nativeNode;
      }
    } // Find parent over parent


    if (parent instanceof Host.__Fragment) {
      component = parent;
    } else {
      return null;
    }
  }
}

/**
 * Base component class.
 */
var Component = /*#__PURE__*/function () {
  function Component(props, context) {
    this.props = props;
    this.context = context;
    this.refs = {};
  }

  var _proto = Component.prototype;

  _proto.setState = function setState(partialState, callback) {
    // The updater property is injected when composite component mounting
    this.updater.setState(this, partialState, callback);
  };

  _proto.forceUpdate = function forceUpdate(callback) {
    this.updater.forceUpdate(this, callback);
  };

  return Component;
}();
var PureComponent = /*#__PURE__*/function (_Component) {
  _inheritsLoose(PureComponent, _Component);

  function PureComponent(props, context) {
    var _this;

    _this = _Component.call(this, props, context) || this;
    _this.__isPureComponent = true;
    return _this;
  }

  return PureComponent;
}(Component);

var rootID = 1;

var Root = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Root, _Component);

  function Root() {
    var _this;

    _this = _Component.call(this) || this; // Using fragment instead of null for avoid create a comment node when init mount

    _this.__element = [];
    _this.__rootID = rootID++;
    return _this;
  }

  var _proto = Root.prototype;

  _proto.__getPublicInstance = function __getPublicInstance() {
    return this.__getRenderedComponent().__getPublicInstance();
  };

  _proto.__getRenderedComponent = function __getRenderedComponent() {
    return this[INTERNAL][RENDERED_COMPONENT];
  };

  _proto.__update = function __update(element) {
    this.__element = element;
    this.forceUpdate();
  };

  _proto.render = function render() {
    return this.__element;
  };

  return Root;
}(Component);

/**
 * Instance manager
 * @NOTE Key should not be compressed, for that will be added to native node and cause DOM Exception.
 */

var KEY = '_r';
var Instance = {
  set: function set(node, instance) {
    if (!node[KEY]) {
      node[KEY] = instance; // Record root instance to roots map

      if (instance.__rootID) {
        Host.rootInstances[instance.__rootID] = instance;
        Host.rootComponents[instance.__rootID] = instance[INTERNAL];
      }
    }
  },
  get: function get(node) {
    return node[KEY];
  },
  remove: function remove(node) {
    var instance = this.get(node);

    if (instance) {
      node[KEY] = null;

      if (instance.__rootID) {
        delete Host.rootComponents[instance.__rootID];
        delete Host.rootInstances[instance.__rootID];
      }
    }
  },
  mount: function mount(element, container, _ref) {
    var parent = _ref.parent,
        hydrate = _ref.hydrate;

    {
      Host.measurer && Host.measurer.beforeRender();
    }

    var driver = Host.driver; // Real native root node is body

    if (container == null) {
      container = driver.createBody();
    }

    var renderOptions = {
      element: element,
      container: container,
      hydrate: hydrate
    }; // Before render callback

    driver.beforeRender && driver.beforeRender(renderOptions); // Get the context from the conceptual parent component.

    var parentContext;

    if (parent) {
      var parentInternal = parent[INTERNAL];
      parentContext = parentInternal.__processChildContext(parentInternal._context);
    } // Update root component


    var prevRootInstance = this.get(container);

    if (prevRootInstance && prevRootInstance.__rootID) {
      if (parentContext) {
        // Using __penddingContext to pass new context
        prevRootInstance[INTERNAL].__penddingContext = parentContext;
      }

      prevRootInstance.__update(element); // After render callback


      driver.afterRender && driver.afterRender(renderOptions);
      return prevRootInstance;
    } // Init root component with empty children


    var renderedComponent = instantiateComponent(createElement(Root));
    var defaultContext = parentContext || {};

    var rootInstance = renderedComponent.__mountComponent(container, parent, defaultContext);

    this.set(container, rootInstance); // Mount new element through update queue avoid when there is in rendering phase

    rootInstance.__update(element); // After render callback


    driver.afterRender && driver.afterRender(renderOptions);

    {
      // Devtool render new root hook
      Host.reconciler.renderNewRootComponent(rootInstance[INTERNAL][RENDERED_COMPONENT]);
      Host.measurer && Host.measurer.afterRender();
    }

    return rootInstance;
  }
};

var assign = Object.assign;

var STYLE = 'style';
var CHILDREN = 'children';
var TREE = 'tree';
var EVENT_PREFIX_REGEXP = /^on[A-Z]/;
/**
 * Native Component
 */

var NativeComponent = /*#__PURE__*/function (_BaseComponent) {
  _inheritsLoose(NativeComponent, _BaseComponent);

  function NativeComponent() {
    return _BaseComponent.apply(this, arguments) || this;
  }

  var _proto = NativeComponent.prototype;

  _proto.__mountComponent = function __mountComponent(parent, parentInstance, context, nativeNodeMounter) {
    this.__initComponent(parent, parentInstance, context);

    var currentElement = this.__currentElement;
    var props = currentElement.props;
    var type = currentElement.type;
    var children = props[CHILDREN];
    var appendType = props.append || TREE; // Default is tree
    // Clone a copy for style diff

    this.__prevStyleCopy = assign({}, props[STYLE]);
    var instance = {
      type: type,
      props: props
    };
    instance[INTERNAL] = this;
    this[INSTANCE] = instance;

    if (appendType === TREE) {
      // Should after process children when mount by tree mode
      this.__mountChildren(children, context);

      this.__mountNativeNode(nativeNodeMounter);
    } else {
      // Should before process children when mount by node mode
      this.__mountNativeNode(nativeNodeMounter);

      this.__mountChildren(children, context);
    } // Ref acttach


    if (currentElement && currentElement.ref) {
      attachRef(currentElement._owner, currentElement.ref, this);
    }

    {
      Host.reconciler.mountComponent(this);
    }

    return instance;
  };

  _proto.__mountChildren = function __mountChildren(children, context) {
    if (children == null) return children;

    var nativeNode = this.__getNativeNode();

    return this.__mountChildrenImpl(nativeNode, toArray(children), context);
  };

  _proto.__mountChildrenImpl = function __mountChildrenImpl(parent, children, context, nativeNodeMounter) {
    var renderedChildren = this.__renderedChildren = {};
    var renderedChildrenImage = [];

    for (var i = 0, l = children.length; i < l; i++) {
      var element = children[i];
      var renderedChild = instantiateComponent(element);
      var name = getElementKeyName(renderedChildren, element, i);
      renderedChildren[name] = renderedChild;
      renderedChild.__mountIndex = i; // Mount children

      var mountImage = renderedChild.__mountComponent(parent, this[INSTANCE], context, nativeNodeMounter);

      renderedChildrenImage.push(mountImage);
    }

    return renderedChildrenImage;
  };

  _proto.__unmountChildren = function __unmountChildren(shouldNotRemoveChild) {
    var renderedChildren = this.__renderedChildren;

    if (renderedChildren) {
      for (var name in renderedChildren) {
        var renderedChild = renderedChildren[name];
        renderedChild.unmountComponent(shouldNotRemoveChild);
      }

      this.__renderedChildren = null;
    }
  };

  _proto.unmountComponent = function unmountComponent(shouldNotRemoveChild) {
    if (this[NATIVE_NODE]) {
      var ref = this.__currentElement.ref;

      if (ref) {
        detachRef(this.__currentElement._owner, ref, this);
      }

      Instance.remove(this[NATIVE_NODE]);

      if (!shouldNotRemoveChild) {
        Host.driver.removeChild(this[NATIVE_NODE], this._parent);
      }
    }

    this.__unmountChildren(true);

    this.__prevStyleCopy = null;

    this.__destoryComponent();
  };

  _proto.__updateComponent = function __updateComponent(prevElement, nextElement, prevContext, nextContext) {
    // Replace current element
    this.__currentElement = nextElement;
    updateRef(prevElement, nextElement, this);
    var prevProps = prevElement.props;
    var nextProps = nextElement.props;

    this.__updateProperties(prevProps, nextProps); // If the prevElement has no child, mount children directly


    if (prevProps[CHILDREN] == null || isArray(prevProps[CHILDREN]) && prevProps[CHILDREN].length === 0) {
      this.__mountChildren(nextProps[CHILDREN], nextContext);
    } else {
      this.__updateChildren(nextProps[CHILDREN], nextContext);
    }

    {
      Host.reconciler.receiveComponent(this);
    }
  };

  _proto.__updateProperties = function __updateProperties(prevProps, nextProps) {
    var propKey;
    var styleName;
    var styleUpdates;
    var driver = Host.driver;

    var nativeNode = this.__getNativeNode();

    for (propKey in prevProps) {
      // Continue children and null value prop or nextProps has some propKey that do noting
      if (propKey === CHILDREN || prevProps[propKey] == null || // Use hasOwnProperty here for avoid propKey name is some with method name in object proptotype
      nextProps.hasOwnProperty(propKey)) {
        continue;
      }

      if (propKey === STYLE) {
        // Remove all style
        var lastStyle = this.__prevStyleCopy;

        for (styleName in lastStyle) {
          styleUpdates = styleUpdates || {};
          styleUpdates[styleName] = '';
        }

        this.__prevStyleCopy = null;
      } else if (EVENT_PREFIX_REGEXP.test(propKey)) {
        // Remove event
        var eventListener = prevProps[propKey];

        if (isFunction(eventListener)) {
          driver.removeEventListener(nativeNode, propKey.slice(2).toLowerCase(), eventListener);
        }
      } else {
        // Remove attribute
        driver.removeAttribute(nativeNode, propKey, prevProps[propKey]);
      }
    }

    for (propKey in nextProps) {
      var nextProp = nextProps[propKey];
      var prevProp = propKey === STYLE ? this.__prevStyleCopy : prevProps != null ? prevProps[propKey] : undefined; // Continue children or prevProp equal nextProp

      if (propKey === CHILDREN || prevProp === nextProp || nextProp == null && prevProp == null) {
        continue;
      } // Update style


      if (propKey === STYLE) {
        if (nextProp) {
          // Clone property
          nextProp = this.__prevStyleCopy = assign({}, nextProp);
        } else {
          this.__prevStyleCopy = null;
        }

        if (prevProp != null) {
          // Unset styles on `prevProp` but not on `nextProp`.
          for (styleName in prevProp) {
            if (!nextProp || !nextProp[styleName] && nextProp[styleName] !== 0) {
              styleUpdates = styleUpdates || {};
              styleUpdates[styleName] = '';
            }
          } // Update styles that changed since `prevProp`.


          for (styleName in nextProp) {
            if (prevProp[styleName] !== nextProp[styleName]) {
              styleUpdates = styleUpdates || {};
              styleUpdates[styleName] = nextProp[styleName];
            }
          }
        } else {
          // Assign next prop when prev style is null
          styleUpdates = nextProp;
        }
      } else if (EVENT_PREFIX_REGEXP.test(propKey)) {
        // Update event binding
        var eventName = propKey.slice(2).toLowerCase();

        if (isFunction(prevProp)) {
          driver.removeEventListener(nativeNode, eventName, prevProp, nextProps);
        }

        if (isFunction(nextProp)) {
          driver.addEventListener(nativeNode, eventName, nextProp, nextProps);
        }
      } else {
        // Update other property
        if (nextProp != null) {
          driver.setAttribute(nativeNode, propKey, nextProp);
        } else {
          driver.removeAttribute(nativeNode, propKey, prevProps[propKey]);
        }

        {
          var _payload;

          Host.measurer && Host.measurer.recordOperation({
            instanceID: this._mountID,
            type: 'update attribute',
            payload: (_payload = {}, _payload[propKey] = nextProp, _payload)
          });
        }
      }
    }

    if (styleUpdates) {
      {
        Host.measurer && Host.measurer.recordOperation({
          instanceID: this._mountID,
          type: 'update style',
          payload: styleUpdates
        });
      }

      driver.setStyle(nativeNode, styleUpdates);
    }
  };

  _proto.__updateChildren = function __updateChildren(nextChildrenElements, context) {
    // prev rendered children
    var prevChildren = this.__renderedChildren;
    var driver = Host.driver;

    if (nextChildrenElements == null && prevChildren == null) {
      return;
    }

    var nextChildren = {};

    if (nextChildrenElements != null) {
      nextChildrenElements = toArray(nextChildrenElements); // Update next children elements

      for (var index = 0, length = nextChildrenElements.length; index < length; index++) {
        var nextElement = nextChildrenElements[index];
        var name = getElementKeyName(nextChildren, nextElement, index);
        var prevChild = prevChildren && prevChildren[name];
        var prevElement = prevChild && prevChild.__currentElement;
        var prevContext = prevChild && prevChild._context; // Try to update between the two of some name that has some element type,
        // and move child in next children loop if need

        if (prevChild != null && shouldUpdateComponent(prevElement, nextElement)) {
          if (prevElement !== nextElement || prevContext !== context) {
            // Pass the same context when updating children
            prevChild.__updateComponent(prevElement, nextElement, context, context);
          }

          nextChildren[name] = prevChild;
        } else {
          // Unmount the prevChild when some name with nextChild but different element type,
          // and move child node in next children loop
          if (prevChild) {
            prevChild.__unmount = true;
          } // The child must be instantiated before it's mounted.


          nextChildren[name] = instantiateComponent(nextElement);
        }
      }
    }

    var parent = this.__getNativeNode();

    var isFragmentParent = isArray(parent);
    var prevFirstChild = null;
    var prevFirstNativeNode = null;
    var isPrevFirstEmptyFragment = false;
    var shouldUnmountPrevFirstChild = false;
    var lastPlacedNode = null; // Directly remove all children from component, if nextChildren is empty (null, [], '').
    // `driver.removeChildren` is optional driver protocol.

    var shouldRemoveAllChildren = Boolean(driver.removeChildren // nextChildElements == null or nextChildElements is empty
    && (isNull(nextChildrenElements) || nextChildrenElements && !nextChildrenElements.length) // Fragment parent can not remove parentNode's all child nodes directly.
    && !isFragmentParent); // Unmount children that are no longer present.

    if (prevChildren != null) {
      for (var _name in prevChildren) {
        var _prevChild = prevChildren[_name];
        var shouldUnmount = _prevChild.__unmount || !nextChildren[_name]; // Store old first child ref for append node ahead and maybe delay remove it

        if (!prevFirstChild) {
          shouldUnmountPrevFirstChild = shouldUnmount;
          prevFirstChild = _prevChild;
          prevFirstNativeNode = prevFirstChild.__getNativeNode();

          if (isArray(prevFirstNativeNode)) {
            isPrevFirstEmptyFragment = prevFirstNativeNode.length === 0;
            prevFirstNativeNode = prevFirstNativeNode[0];
          }
        } else if (shouldUnmount) {
          _prevChild.unmountComponent(shouldRemoveAllChildren);
        }
      } // 1. When fragment embed fragment updated but prev fragment is empty
      // that need to get the prev sibling native node.
      // like: [ [] ] -> [ [1, 2] ]
      // 2. When prev fragment is empty and update to other type
      // like: [ [], 1 ] -> [ 1, 2 ]


      if (isFragmentParent && parent.length === 0 || isPrevFirstEmptyFragment) {
        lastPlacedNode = getPrevSiblingNativeNode(this);
      }
    }

    if (nextChildren != null) {
      var insertNodes = function insertNodes(nativeNodes, parentNode) {
        // The nativeNodes maybe fragment, so convert to array type
        nativeNodes = toArray(nativeNodes);

        for (var i = 0, l = nativeNodes.length; i < l; i++) {
          if (lastPlacedNode) {
            // Should reverse order when insert new child after lastPlacedNode:
            // [lastPlacedNode, *newChild1, *newChild2],
            // And if prev is empty fragment, lastPlacedNode is the prevSiblingNativeNode found.
            driver.insertAfter(nativeNodes[l - 1 - i], lastPlacedNode);
          } else if (prevFirstNativeNode) {
            // [*newChild1, *newChild2, prevFirstNativeNode]
            driver.insertBefore(nativeNodes[i], prevFirstNativeNode);
          } else if (parentNode) {
            // [*newChild1, *newChild2]
            driver.appendChild(nativeNodes[i], parentNode);
          }
        }
      };

      // `nextIndex` will increment for each child in `nextChildren`
      var nextIndex = 0;

      for (var _name2 in nextChildren) {
        var nextChild = nextChildren[_name2];

        var _prevChild2 = prevChildren && prevChildren[_name2]; // Try to move the some key prevChild but current not at the some position


        if (_prevChild2 === nextChild) {
          var prevChildNativeNode = _prevChild2.__getNativeNode();

          if (_prevChild2.__mountIndex !== nextIndex) {
            insertNodes(prevChildNativeNode);
          }
        } else {
          // Mount nextChild that in prevChildren there has no some name
          // Fragment extended native component, so if parent is fragment should get this._parent
          if (isFragmentParent) {
            parent = this._parent;
          }

          nextChild.__mountComponent(parent, this[INSTANCE], context, insertNodes // Insert nodes mounter
          );
        } // Update to the latest mount order


        nextChild.__mountIndex = nextIndex++; // Get the last child

        lastPlacedNode = nextChild.__getNativeNode();

        if (isArray(lastPlacedNode)) {
          lastPlacedNode = lastPlacedNode[lastPlacedNode.length - 1];
        }
      }
    }

    if (shouldUnmountPrevFirstChild) {
      prevFirstChild.unmountComponent(shouldRemoveAllChildren);
    }

    if (shouldRemoveAllChildren) {
      driver.removeChildren(this[NATIVE_NODE]);
    }

    this.__renderedChildren = nextChildren;
  };

  _proto.__createNativeNode = function __createNativeNode() {
    var instance = this[INSTANCE];
    var nativeNode = Host.driver.createElement(instance.type, instance.props, this);
    Instance.set(nativeNode, instance);
    return nativeNode;
  };

  return NativeComponent;
}(BaseComponent);

/**
 * Text Component
 */

var TextComponent = /*#__PURE__*/function (_BaseComponent) {
  _inheritsLoose(TextComponent, _BaseComponent);

  function TextComponent() {
    return _BaseComponent.apply(this, arguments) || this;
  }

  var _proto = TextComponent.prototype;

  _proto.__updateComponent = function __updateComponent(prevElement, nextElement, context) {
    nextElement = '' + nextElement; // If text is some value that do not update even there number 1 and string "1"

    if (prevElement !== nextElement) {
      // Replace current element
      this.__currentElement = nextElement;
      Host.driver.updateText(this.__getNativeNode(), nextElement);

      {
        this._stringText = this.__currentElement;
        Host.reconciler.receiveComponent(this);
      }
    }
  };

  _proto.__createNativeNode = function __createNativeNode() {
    {
      this._stringText = this.__currentElement;
    }

    return Host.driver.createText(this.__currentElement, this);
  };

  return TextComponent;
}(BaseComponent);

var RE_RENDER_LIMIT = 24;
/**
 * Functional Reactive Component Class Wrapper
 */

var ReactiveComponent = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ReactiveComponent, _Component);

  function ReactiveComponent(pureRender, ref) {
    var _this;

    _this = _Component.call(this) || this; // Marked ReactiveComponent.

    _this.__isReactiveComponent = true; // A pure function

    _this.__render = pureRender;
    _this.__hookID = 0; // Number of rerenders

    _this.__reRenders = 0;
    _this.__hooks = {}; // Is render scheduled

    _this.__isScheduled = false;
    _this.__shouldUpdate = false;
    _this.__children = null;
    _this.__contexts = {}; // Handles store

    _this.didMount = [];
    _this.didUpdate = [];
    _this.willUnmount = [];
    _this.state = EMPTY_OBJECT;

    if (pureRender._forwardRef) {
      _this.__prevForwardRef = _this._forwardRef = ref;
    }

    var compares = pureRender.__compares;

    if (compares) {
      _this.shouldComponentUpdate = function (nextProps) {
        // Process composed compare
        var arePropsEqual = true; // Compare push in and pop out

        for (var i = compares.length - 1; i > -1; i--) {
          if (arePropsEqual = compares[i](_this.props, nextProps)) {
            break;
          }
        }

        return !arePropsEqual || _this.__prevForwardRef !== _this._forwardRef;
      };
    }

    return _this;
  }

  var _proto = ReactiveComponent.prototype;

  _proto.getHooks = function getHooks() {
    return this.__hooks;
  };

  _proto.getHookID = function getHookID() {
    return ++this.__hookID;
  };

  _proto.useContext = function useContext(context) {
    var _this2 = this;

    var contextID = context._contextID;
    var contextItem = this.__contexts[contextID];

    if (!contextItem) {
      var provider = context.__getNearestParentProvider(this);

      contextItem = this.__contexts[contextID] = {
        __provider: provider
      };

      if (provider) {
        var handleContextChange = function handleContextChange(value) {
          // Check the last value that maybe alread rerender
          // avoid rerender twice when provider value changed
          if (contextItem.__lastValue !== value) {
            _this2.__shouldUpdate = true;

            _this2.__update();
          }
        };

        provider.__on(handleContextChange);

        this.willUnmount.push(function () {
          return provider.__off(handleContextChange);
        });
      }
    }

    return contextItem.__lastValue = contextItem.__provider ? contextItem.__provider.getValue() : context._defaultValue;
  };

  _proto.componentWillMount = function componentWillMount() {
    this.__shouldUpdate = true;
  };

  _proto.componentDidMount = function componentDidMount() {
    invokeFunctionsWithContext(this.didMount);
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps() {
    this.__shouldUpdate = true;
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    invokeFunctionsWithContext(this.didUpdate);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    invokeFunctionsWithContext(this.willUnmount);
  };

  _proto.__update = function __update() {
    this.setState(EMPTY_OBJECT);
  };

  _proto.render = function render() {
    {
      Host.measurer && Host.measurer.beforeRender();
    }

    this.__hookID = 0;
    this.__reRenders = 0;
    this.__isScheduled = false;

    var children = this.__render(this.props, this._forwardRef ? this._forwardRef : this.context);

    while (this.__isScheduled) {
      this.__reRenders++;

      if (this.__reRenders > RE_RENDER_LIMIT) {
        {
          throw new Error('Too many re-renders, the number of renders is limited to prevent an infinite loop.');
        }
      }

      this.__hookID = 0;
      this.__isScheduled = false;
      children = this.__render(this.props, this._forwardRef ? this._forwardRef : this.context);
    }

    if (this.__shouldUpdate) {
      this.__children = children;
      this.__shouldUpdate = false;
    }

    return this.__children;
  };

  return ReactiveComponent;
}(Component);

var dirtyComponents = [];

function getPendingCallbacks(internal) {
  return internal.__pendingCallbacks;
}

function setPendingCallbacks(internal, callbacks) {
  return internal.__pendingCallbacks = callbacks;
}

function getPendingStateQueue(internal) {
  return internal.__pendingStateQueue;
}

function setPendingStateQueue(internal, partialState) {
  return internal.__pendingStateQueue = partialState;
}

function enqueueCallback(internal, callback) {
  var callbackQueue = getPendingCallbacks(internal) || setPendingCallbacks(internal, []);
  callbackQueue.push(callback);
}

function enqueueState(internal, partialState) {
  var stateQueue = getPendingStateQueue(internal) || setPendingStateQueue(internal, []);
  stateQueue.push(partialState);
}

function runUpdate(component) {
  var internal = component[INTERNAL];

  if (!internal) {
    return;
  }

  Host.__isUpdating = true;
  var prevElement = internal.__currentElement;
  var prevUnmaskedContext = internal._context;
  var nextUnmaskedContext = internal.__penddingContext || prevUnmaskedContext;
  internal.__penddingContext = undefined;

  if (getPendingStateQueue(internal) || internal.__isPendingForceUpdate) {
    internal.__updateComponent(prevElement, prevElement, prevUnmaskedContext, nextUnmaskedContext);

    flushLayout();
  }

  Host.__isUpdating = false;
}

function mountOrderComparator(c1, c2) {
  return c2[INTERNAL]._mountID - c1[INTERNAL]._mountID;
}

function performUpdate() {
  if (Host.__isUpdating) {
    return schedule(performUpdate);
  }

  var component;
  var dirties = dirtyComponents;

  if (dirties.length > 0) {
    // Before next render, we will flush all the effects
    flushEffect();
    dirtyComponents = []; // Since reconciling a component higher in the owner hierarchy usually (not
    // always -- see shouldComponentUpdate()) will reconcile children, reconcile
    // them before their children by sorting the array.

    if (dirties.length > 1) {
      dirties = dirties.filter(function (c) {
        return !!c[INTERNAL];
      }).sort(mountOrderComparator);
    }

    while (component = dirties.pop()) {
      runUpdate(component);
    }
  }
}

function scheduleUpdate(component, shouldAsyncUpdate) {
  if (dirtyComponents.indexOf(component) < 0) {
    dirtyComponents.push(component);
  }

  if (shouldAsyncUpdate) {
    // If have been scheduled before, do not need schedule again
    if (dirtyComponents.length > 1) {
      return;
    }

    schedule(performUpdate);
  } else {
    performUpdate();
  }
}

function requestUpdate(component, partialState, callback) {
  var internal = component[INTERNAL];

  if (!internal) {
    {
      // Block other render
      Host.__isUpdating = false;
      console.error("Warning: Can't perform a Rax state update on an unmounted component. This " + 'is a no-op, but it indicates a memory leak in your application. To ' + 'fix, cancel all subscriptions and asynchronous tasks in %s.', component.__isReactiveComponent ? 'a useEffect cleanup function' : 'the componentWillUnmount method');
    }

    return;
  }

  if (callback) {
    enqueueCallback(internal, callback);
  }

  var hasComponentRendered = internal[RENDERED_COMPONENT]; // setState

  if (partialState) {
    // Function Component should force update
    if (component.__isReactiveComponent) {
      internal.__isPendingForceUpdate = true;
    }

    enqueueState(internal, partialState); // State pending when request update in componentWillMount and componentWillReceiveProps,
    // isPendingState default is false value (false or null) and set to true after componentWillReceiveProps,
    // _renderedComponent is null when componentWillMount exec.

    if (!internal.__isPendingState && hasComponentRendered) {
      scheduleUpdate(component, true);
    }
  } else {
    // forceUpdate
    internal.__isPendingForceUpdate = true;

    if (hasComponentRendered) {
      scheduleUpdate(component);
    }
  }
}

var Updater = {
  setState: function setState(component, partialState, callback) {
    // Flush all effects first before update state
    if (!Host.__isUpdating) {
      flushEffect();
    }

    requestUpdate(component, partialState, callback);
  },
  forceUpdate: function forceUpdate(component, callback) {
    requestUpdate(component, null, callback);
  }
};

function performInSandbox(fn, instance, callback) {
  try {
    return fn();
  } catch (e) {
    if (callback) {
      callback(e);
    } else {
      handleError(instance, e);
    }
  }
}
/**
 * A class component becomes an error boundary if
 * it defines either (or both) of the lifecycle methods static getDerivedStateFromError() or componentDidCatch().
 * Use static getDerivedStateFromError() to render a fallback UI after an error has been thrown.
 * Use componentDidCatch() to log error information.
 * @param {*} instance
 * @param {*} error
 */

function handleError(instance, error) {
  var boundary = getNearestParent(instance, function (parent) {
    return parent.componentDidCatch || parent.constructor && parent.constructor.getDerivedStateFromError;
  });

  if (boundary) {
    scheduleLayout(function () {
      var boundaryInternal = boundary[INTERNAL]; // Should not attempt to recover an unmounting error boundary

      if (boundaryInternal) {
        performInSandbox(function () {
          if (boundary.componentDidCatch) {
            boundary.componentDidCatch(error);
          } // Update state to the next render to show the fallback UI.


          if (boundary.constructor && boundary.constructor.getDerivedStateFromError) {
            var state = boundary.constructor.getDerivedStateFromError(error);
            boundary.setState(state);
          }
        }, boundaryInternal.__parentInstance);
      }
    });
  } else {
    // Do not break when error happens
    scheduler(function () {
      throw error;
    }, 0);
  }
}

var measureLifeCycle;

{
  measureLifeCycle = function measureLifeCycle(callback, instanceID, type) {
    Host.measurer && Host.measurer.beforeLifeCycle(instanceID, type);
    callback();
    Host.measurer && Host.measurer.afterLifeCycle(instanceID, type);
  };
}

function scheduleLayoutInSandbox(fn, instance) {
  scheduleLayout(function () {
    performInSandbox(fn, instance);
  });
}

function scheduleLayoutCallbacksInSandbox(callbacks, instance) {
  if (callbacks) {
    scheduleLayoutInSandbox(function () {
      invokeFunctionsWithContext(callbacks, instance);
    }, instance);
  }
}
/**
 * Composite Component
 */


var CompositeComponent = /*#__PURE__*/function (_BaseComponent) {
  _inheritsLoose(CompositeComponent, _BaseComponent);

  function CompositeComponent() {
    return _BaseComponent.apply(this, arguments) || this;
  }

  var _proto = CompositeComponent.prototype;

  _proto.__mountComponent = function __mountComponent(parent, parentInstance, context, nativeNodeMounter) {
    var _this = this;

    this.__initComponent(parent, parentInstance, context);

    {
      this._updateCount = 0;
      Host.measurer && Host.measurer.beforeMountComponent(this._mountID, this);
    }

    var currentElement = this.__currentElement;
    var Component = currentElement.type;
    var ref = currentElement.ref;
    var publicProps = currentElement.props;
    var componentPrototype = Component.prototype; // Context process

    var publicContext = this.__processContext(context); // Initialize the public class


    var instance;
    var renderedElement;
    performInSandbox(function () {
      if (componentPrototype && componentPrototype.render) {
        // Class Component instance
        instance = new Component(publicProps, publicContext);
      } else if (isFunction(Component)) {
        // Functional reactive component with hooks
        instance = new ReactiveComponent(Component, ref);
      } else {
        if ("development" !== 'production') {
          throwError('Invalid component type, expected a class or function component.', Component);
        }
      }
    }, parentInstance);

    if (!instance) {
      return;
    } // These should be set up in the constructor, but as a convenience for
    // simpler class abstractions, we set them up after the fact.


    instance.props = publicProps;
    instance.context = publicContext;
    instance.refs = {}; // Inject the updater into instance

    instance.updater = Updater;
    instance[INTERNAL] = this;
    this[INSTANCE] = instance; // Init state, must be set to an object or null

    var initialState = instance.state;

    if (initialState === undefined) {
      // TODO clone the state?
      instance.state = initialState = null;
    }

    if (instance.componentWillMount) {
      performInSandbox(function () {
        if ("development" !== 'production') {
          measureLifeCycle(function () {
            instance.componentWillMount();
          }, _this._mountID, 'componentWillMount');
        }
      }, instance);
    }

    Host.owner = this; // Process pending state when call setState in componentWillMount

    instance.state = this.__processPendingState(publicProps, publicContext);
    var callbacks = this.__pendingCallbacks;
    this.__pendingCallbacks = null;
    performInSandbox(function () {
      if ("development" !== 'production') {
        measureLifeCycle(function () {
          renderedElement = instance.render();
        }, _this._mountID, 'render');
      }
    }, instance);

    {
      validateChildKeys(renderedElement, this.__currentElement.type);
    }

    Host.owner = null;
    this[RENDERED_COMPONENT] = instantiateComponent(renderedElement);

    this[RENDERED_COMPONENT].__mountComponent(this._parent, instance, this.__processChildContext(context), nativeNodeMounter);

    if (!currentElement.type._forwardRef && ref) {
      attachRef(currentElement._owner, ref, this);
    }

    if (instance.componentDidMount) {
      scheduleLayoutInSandbox(function () {
        {
          measureLifeCycle(function () {
            instance.componentDidMount();
          }, _this._mountID, 'componentDidMount');
        }
      }, instance);
    } // Trigger setState callback


    scheduleLayoutCallbacksInSandbox(callbacks, instance);

    {
      scheduleLayout(function () {
        Host.reconciler.mountComponent(_this);
        Host.measurer && Host.measurer.afterMountComponent(_this._mountID);
      });
    }

    return instance;
  };

  _proto.unmountComponent = function unmountComponent(shouldNotRemoveChild) {
    var instance = this[INSTANCE]; // Unmounting a composite component maybe not complete mounted
    // when throw error in component constructor stage

    if (instance && instance.componentWillUnmount) {
      performInSandbox(function () {
        instance.componentWillUnmount();
      }, instance);
    }

    if (this[RENDERED_COMPONENT] != null) {
      var currentElement = this.__currentElement;
      var ref = currentElement.ref;

      if (!currentElement.type._forwardRef && ref) {
        detachRef(currentElement._owner, ref, this);
      }

      this[RENDERED_COMPONENT].unmountComponent(shouldNotRemoveChild);
      this[RENDERED_COMPONENT] = null;
    } // Reset pending fields
    // Even if this component is scheduled for another async update,
    // it would still be ignored because these fields are reset.


    this.__pendingStateQueue = null;
    this.__isPendingForceUpdate = false;

    this.__destoryComponent();
  }
  /**
   * Filters the context object to only contain keys specified in
   * `contextTypes`
   */
  ;

  _proto.__processContext = function __processContext(context) {
    var maskedContext = {};
    var Component = this.__currentElement.type;
    var contextTypes = Component.contextTypes;

    if (contextTypes) {
      for (var contextName in contextTypes) {
        maskedContext[contextName] = context[contextName];
      }
    }

    return maskedContext;
  };

  _proto.__processChildContext = function __processChildContext(currentContext) {
    var instance = this[INSTANCE]; // The getChildContext method context should be current instance

    var childContext = instance.getChildContext && instance.getChildContext();

    if (childContext) {
      return assign({}, currentContext, childContext);
    }

    return currentContext;
  };

  _proto.__processPendingState = function __processPendingState(props, context) {
    var instance = this[INSTANCE];
    var queue = this.__pendingStateQueue;

    if (!queue) {
      return instance.state;
    } // Reset pending queue


    this.__pendingStateQueue = null;
    var nextState = assign({}, instance.state);

    for (var i = 0; i < queue.length; i++) {
      var partial = queue[i];
      assign(nextState, isFunction(partial) ? partial.call(instance, nextState, props, context) : partial);
    }

    return nextState;
  };

  _proto.__updateComponent = function __updateComponent(prevElement, nextElement, prevUnmaskedContext, nextUnmaskedContext) {
    var _this2 = this;

    var instance = this[INSTANCE]; // Maybe update component that has already been unmounted or failed mount.

    if (!instance) {
      return;
    }

    performInSandbox(function () {
      if ("development" !== 'production') {
        Host.measurer && Host.measurer.beforeUpdateComponent(_this2._mountID, _this2);
      }

      var willReceive;
      var nextContext;
      var nextProps; // Determine if the context has changed or not

      if (_this2._context === nextUnmaskedContext) {
        nextContext = instance.context;
      } else {
        nextContext = _this2.__processContext(nextUnmaskedContext);
        willReceive = true;
      } // Distinguish between a props update versus a simple state update
      // Skip checking prop types again -- we don't read component.props to avoid
      // warning for DOM component props in this upgrade


      nextProps = nextElement.props;

      if (prevElement !== nextElement) {
        willReceive = true;
      }

      if (willReceive && instance.componentWillReceiveProps) {
        // Calling this.setState() within componentWillReceiveProps will not trigger an additional render.
        _this2.__isPendingState = true;
        instance.componentWillReceiveProps(nextProps, nextContext);
        _this2.__isPendingState = false;
      } // Update refs


      if (_this2.__currentElement.type._forwardRef) {
        instance.__prevForwardRef = prevElement.ref;
        instance._forwardRef = nextElement.ref;
      } else {
        updateRef(prevElement, nextElement, _this2);
      } // Shoud update default


      var shouldUpdate = true;
      var prevProps = instance.props;
      var prevState = instance.state; // TODO: could delay execution processPendingState

      var nextState = _this2.__processPendingState(nextProps, nextContext);

      var callbacks = _this2.__pendingCallbacks;
      _this2.__pendingCallbacks = null; // ShouldComponentUpdate is not called when forceUpdate is used

      if (!_this2.__isPendingForceUpdate) {
        if (instance.shouldComponentUpdate) {
          shouldUpdate = instance.shouldComponentUpdate(nextProps, nextState, nextContext);
        } else if (instance.__isPureComponent) {
          // Pure Component
          shouldUpdate = !shallowEqual(prevProps, nextProps) || !shallowEqual(prevState, nextState);
        }
      }

      if (shouldUpdate) {
        _this2.__isPendingForceUpdate = false; // Will set `this.props`, `this.state` and `this.context`.

        var prevContext = instance.context; // Cannot use this.setState() in componentWillUpdate.
        // If need to update state in response to a prop change, use componentWillReceiveProps instead.

        if (instance.componentWillUpdate) {
          instance.componentWillUpdate(nextProps, nextState, nextContext);
        } // Replace with next


        _this2.__currentElement = nextElement;
        _this2._context = nextUnmaskedContext;
        instance.props = nextProps;
        instance.state = nextState;
        instance.context = nextContext;

        _this2.__updateRenderedComponent(nextUnmaskedContext);

        if (instance.componentDidUpdate) {
          scheduleLayoutInSandbox(function () {
            instance.componentDidUpdate(prevProps, prevState, prevContext);
          }, instance);
        }

        if ("development" !== 'production') {
          // Calc update count.
          _this2._updateCount++;
        }
      } else {
        // If it's determined that a component should not update, we still want
        // to set props and state but we shortcut the rest of the update.
        _this2.__currentElement = nextElement;
        _this2._context = nextUnmaskedContext;
        instance.props = nextProps;
        instance.state = nextState;
        instance.context = nextContext;
      }

      scheduleLayoutCallbacksInSandbox(callbacks, instance);

      if ("development" !== 'production') {
        scheduleLayout(function () {
          Host.measurer && Host.measurer.afterUpdateComponent(_this2._mountID);
          Host.reconciler.receiveComponent(_this2);
        });
      }
    }, instance);
  }
  /**
   * Call the component's `render` method and update the DOM accordingly.
   */
  ;

  _proto.__updateRenderedComponent = function __updateRenderedComponent(context) {
    var prevRenderedComponent = this[RENDERED_COMPONENT];
    var prevRenderedElement = prevRenderedComponent.__currentElement;
    var instance = this[INSTANCE];
    var nextRenderedElement;
    Host.owner = this;

    {
      measureLifeCycle(function () {
        nextRenderedElement = instance.render();
      }, this._mountID, 'render');
    }

    Host.owner = null;

    if (shouldUpdateComponent(prevRenderedElement, nextRenderedElement)) {
      var prevRenderedUnmaskedContext = prevRenderedComponent._context;

      var nextRenderedUnmaskedContext = this.__processChildContext(context); // If getChildContext existed and invoked when component updated that will make
      // prevRenderedUnmaskedContext not equal nextRenderedUnmaskedContext under the tree


      if (prevRenderedElement !== nextRenderedElement || prevRenderedUnmaskedContext !== nextRenderedUnmaskedContext) {
        // If element type is illegal catch the error
        prevRenderedComponent.__updateComponent(prevRenderedElement, nextRenderedElement, prevRenderedUnmaskedContext, nextRenderedUnmaskedContext);
      }

      {
        Host.measurer && Host.measurer.recordOperation({
          instanceID: this._mountID,
          type: 'update component',
          payload: {}
        });
      }
    } else {
      var lastNativeNode = null;

      var prevNativeNode = prevRenderedComponent.__getNativeNode(); // Only prevNativeNode is empty fragment should find the prevSlibingNativeNode
      // And current root component is fragment, but not need find the prevSlibingNativeNode when init mounting


      if (isArray(prevNativeNode) && prevNativeNode.length === 0 && instance.__rootID == null) {
        lastNativeNode = getPrevSiblingNativeNode(prevRenderedComponent);
      }

      prevRenderedComponent.unmountComponent(true);
      this[RENDERED_COMPONENT] = instantiateComponent(nextRenderedElement);

      this[RENDERED_COMPONENT].__mountComponent(this._parent, instance, this.__processChildContext(context), function (newNativeNode, parent) {
        var driver = Host.driver;
        prevNativeNode = toArray(prevNativeNode);
        newNativeNode = toArray(newNativeNode); // If the new length large then prev

        for (var i = 0; i < newNativeNode.length; i++) {
          var nativeNode = newNativeNode[i];

          if (prevNativeNode[i]) {
            driver.replaceChild(nativeNode, prevNativeNode[i]);
          } else if (lastNativeNode) {
            driver.insertAfter(nativeNode, lastNativeNode);
          } else {
            driver.appendChild(nativeNode, parent);
          }

          lastNativeNode = nativeNode;
        } // If the new length less then prev


        for (var _i = newNativeNode.length; _i < prevNativeNode.length; _i++) {
          driver.removeChild(prevNativeNode[_i]);
        }
      });
    }
  };

  _proto.__getNativeNode = function __getNativeNode() {
    var renderedComponent = this[RENDERED_COMPONENT];

    if (renderedComponent) {
      return renderedComponent.__getNativeNode();
    }
  };

  _proto.__getPublicInstance = function __getPublicInstance() {
    var instance = this[INSTANCE]; // The functional components cannot be given refs

    if (instance.__isReactiveComponent) return null;
    return instance;
  };

  return CompositeComponent;
}(BaseComponent);

/**
 * Fragment Component
 */

var FragmentComponent = /*#__PURE__*/function (_NativeComponent) {
  _inheritsLoose(FragmentComponent, _NativeComponent);

  function FragmentComponent() {
    return _NativeComponent.apply(this, arguments) || this;
  }

  var _proto = FragmentComponent.prototype;

  _proto.__mountComponent = function __mountComponent(parent, parentInstance, context, nativeNodeMounter) {
    this.__initComponent(parent, parentInstance, context);

    var instance = this[INSTANCE] = {};
    instance[INTERNAL] = this;
    var fragment = [];

    this.__mountChildrenImpl(this._parent, this.__currentElement, context, function (nativeNode) {
      nativeNode = toArray(nativeNode);

      for (var i = 0; i < nativeNode.length; i++) {
        fragment.push(nativeNode[i]);
      }
    });

    if (nativeNodeMounter) {
      nativeNodeMounter(fragment, parent);
    } else {
      for (var i = 0; i < fragment.length; i++) {
        Host.driver.appendChild(fragment[i], parent);
      }
    }

    {
      this.__currentElement.type = FragmentComponent;
      Host.reconciler.mountComponent(this);
    }

    return instance;
  };

  _proto.unmountComponent = function unmountComponent(shouldNotRemoveChild) {
    if (!shouldNotRemoveChild) {
      var nativeNode = this.__getNativeNode();

      for (var i = 0, l = nativeNode.length; i < l; i++) {
        Host.driver.removeChild(nativeNode[i]);
      }
    } // Do not need remove child when their parent is removed


    this.__unmountChildren(true);

    this.__destoryComponent();
  };

  _proto.__updateComponent = function __updateComponent(prevElement, nextElement, prevContext, nextContext) {
    // Replace current element
    this.__currentElement = nextElement;

    this.__updateChildren(this.__currentElement, nextContext);

    {
      this.__currentElement.type = FragmentComponent;
      Host.reconciler.receiveComponent(this);
    }
  };

  _proto.__getNativeNode = function __getNativeNode() {
    var renderedChildren = this.__renderedChildren || {};
    return [].concat.apply([], Object.keys(renderedChildren).map(function (key) {
      return renderedChildren[key].__getNativeNode();
    }));
  };

  return FragmentComponent;
}(NativeComponent);

{
  FragmentComponent.displayName = 'Fragment';
}

var Reconciler = {
  // Stubs - DevTools expects to find these methods and replace them
  // with wrappers in order to observe components being mounted, updated and
  // unmounted
  mountComponent: function mountComponent() {},
  receiveComponent: function receiveComponent() {},
  unmountComponent: function unmountComponent() {},
  // Stub - DevTools expects to find this method and replace it
  // with a wrapper in order to observe new root components being added
  renderNewRootComponent: function renderNewRootComponent() {}
};

function inject(_ref) {
  var driver = _ref.driver,
      measurer = _ref.measurer;
  // Inject component class
  Host.__Empty = EmptyComponent;
  Host.__Native = NativeComponent;
  Host.__Text = TextComponent;
  Host.__Fragment = FragmentComponent;
  Host.__Composite = CompositeComponent; // Inject render driver

  if (!(Host.driver = driver || Host.driver)) {
    {
      throwError('Rax driver not found.');
    }
  }

  {
    // Inject devtool renderer hook
    Host.reconciler = Reconciler; // Inject performance measurer

    Host.measurer = measurer;
  }
}

function render(element, container, options, callback) {
  // Compatible with `render(element, container, callback)`
  if (isFunction(options)) {
    callback = options;
    options = null;
  }

  options = options || EMPTY_OBJECT; // Init inject

  inject(options);
  var rootComponent = Instance.mount(element, container, options);

  var componentInstance = rootComponent.__getPublicInstance();

  if (callback) {
    callback.call(componentInstance);
  }

  return componentInstance;
}

var version = "1.2.2";

var DevtoolsHook = {
  ComponentTree: {
    getClosestInstanceFromNode: function getClosestInstanceFromNode(node) {
      return Instance.get(node);
    },
    getNodeFromInstance: function getNodeFromInstance(inst) {
      // inst is an internal instance (but could be a composite)
      while (inst[RENDERED_COMPONENT]) {
        inst = inst[RENDERED_COMPONENT];
      }

      if (inst) {
        return inst._nativeNode;
      } else {
        return null;
      }
    }
  },
  Mount: {
    get _instancesByReactRootID() {
      var rootComponents = {}; // Ignore display top-level root component

      for (var rootID in Host.rootComponents) {
        rootComponents[rootID] = Host.rootComponents[rootID][RENDERED_COMPONENT];
      }

      return rootComponents;
    },

    _renderNewRootComponent: Reconciler.renderNewRootComponent
  },
  Reconciler: Reconciler,
  // monitor the info of all components
  monitor: null
};

var shared = {
  Host: Host,
  Instance: Instance,
  Element: Element,
  flattenChildren: flattenChildren
};

{
  /* global __RAX_DEVTOOLS_GLOBAL_HOOK__ */
  if (typeof __RAX_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __RAX_DEVTOOLS_GLOBAL_HOOK__.inject === 'function') {
    __RAX_DEVTOOLS_GLOBAL_HOOK__.inject(DevtoolsHook);
  }

  if (typeof window !== 'undefined') {
    if (window.__RAX_INITIALISED__) {
      console.error('Warning: more than one instance of Rax has been initialised, this could lead to unexpected behaviour.');
    }

    window.__RAX_INITIALISED__ = true;
  }
}

exports.Component = Component;
exports.Fragment = Fragment;
exports.PureComponent = PureComponent;
exports.createContext = createContext;
exports.createElement = createElement;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.memo = memo;
exports.render = render;
exports.shared = shared;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = version;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1646560416844);
})()
//miniprogram-npm-outsideDeps=[]
//# sourceMappingURL=index.js.map
module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1646560416841, function(require, module, exports) {


exports.__esModule = true;
exports.default = cloneElement;

var _rax = require("rax");

var _raxIsValidElement = _interopRequireDefault(require("rax-is-valid-element"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Host = _rax.shared.Host,
    Element = _rax.shared.Element,
    flattenChildren = _rax.shared.flattenChildren;
var RESERVED_PROPS = {
  key: true,
  ref: true
};

function cloneElement(element, config) {
  if (!(0, _raxIsValidElement.default)(element)) {
    throw Error('cloneElement: not a valid element.');
  } // Original props are copied


  var props = Object.assign({}, element.props); // Reserved names are extracted

  var key = element.key;
  var ref = element.ref; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config) {
    // Should reset ref and owner if has a new ref
    if (config.ref !== undefined) {
      ref = config.ref;
      owner = Host.owner;
    }

    if (config.key !== undefined) {
      key = String(config.key);
    } // Resolve default props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    } // Remaining properties override existing props


    var propName;

    for (propName in config) {
      if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  if (children.length) {
    props.children = flattenChildren(children);
  }

  return new Element(element.type, key, ref, props, owner);
}

;
}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1646560416841);
})()
//miniprogram-npm-outsideDeps=["rax","rax-is-valid-element"]
//# sourceMappingURL=index.js.map
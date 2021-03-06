module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1646560416828, function(require, module, exports) {


exports.__esModule = true;
exports.default = void 0;

/**
 *  Server driver
 **/
var ID = 'id';
var STYLE = 'style';
var CHILDREN = 'children';
var DANGEROUSLY_SET_INNER_HTML = 'dangerouslySetInnerHTML';
var EVENT_PREFIX_REGEXP = /^on[A-Z]/;
var ELEMENT_NODE = 1;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;
var Driver = {
  // Internal state
  nodeMaps: {},
  getElementById: function getElementById(id) {
    return this.nodeMaps[id];
  },
  createBody: function createBody() {
    return {
      nodeType: ELEMENT_NODE,
      tagName: 'BODY',
      attributes: {},
      style: {},
      eventListeners: {},
      childNodes: [],
      parentNode: null
    };
  },
  createComment: function createComment(content) {
    return {
      nodeType: COMMENT_NODE,
      data: content,
      parentNode: null
    };
  },
  createEmpty: function createEmpty() {
    return this.createComment(' empty ');
  },
  createText: function createText(text) {
    return {
      nodeType: TEXT_NODE,
      data: text,
      parentNode: null
    };
  },
  updateText: function updateText(node, text) {
    node.data = text;
  },
  createElement: function createElement(type, props) {
    var node = {
      nodeType: ELEMENT_NODE,
      tagName: type.toUpperCase(),
      attributes: {},
      style: props.style || {},
      eventListeners: {},
      childNodes: [],
      parentNode: null
    };
    this.setNativeProps(node, props, true);
    return node;
  },
  appendChild: function appendChild(node, parent) {
    parent.childNodes.push(node);
    node.parentNode = parent;
  },
  removeChild: function removeChild(node, parent) {
    parent = parent || node.parentNode;
    var id = node.attributes && node.attributes[ID];

    if (id != null) {
      this.nodeMaps[id] = null;
    }

    if (node.parentNode) {
      var idx = node.parentNode.childNodes.indexOf(node);
      node.parentNode.childNodes.splice(idx, 1);
      node.parentNode = null;
    }
  },
  replaceChild: function replaceChild(newChild, oldChild, parent) {
    parent = parent || oldChild.parentNode;
    var previousSibling = this.previousSibling(oldChild);
    var nextSibling = this.nextSibling(oldChild);
    this.removeChild(oldChild, parent);

    if (previousSibling) {
      this.insertAfter(newChild, previousSibling, parent);
    } else if (nextSibling) {
      this.insertBefore(newChild, nextSibling, parent);
    } else {
      this.appendChild(newChild, parent);
    }
  },
  insertAfter: function insertAfter(node, after, parent) {
    parent = parent || after.parentNode;
    var nodeIdx = parent.childNodes.indexOf(node);

    if (nodeIdx !== -1) {
      parent.childNodes.splice(nodeIdx, 1);
    }

    var idx = parent.childNodes.indexOf(after);

    if (idx === parent.childNodes.length - 1) {
      parent.childNodes.push(node);
    } else {
      parent.childNodes.splice(idx + 1, 0, node);
    }

    node.parentNode = parent;
  },
  insertBefore: function insertBefore(node, before, parent) {
    parent = parent || before.parentNode;
    var nodeIdx = parent.childNodes.indexOf(node);

    if (nodeIdx !== -1) {
      parent.childNodes.splice(nodeIdx, 1);
    }

    var idx = parent.childNodes.indexOf(before);
    parent.childNodes.splice(idx, 0, node);
    node.parentNode = parent;
  },
  nextSibling: function nextSibling(node) {
    var parentNode = node.parentNode;

    if (parentNode) {
      var idx = parentNode.childNodes.indexOf(node);
      return parentNode.childNodes[idx + 1];
    }
  },
  previousSibling: function previousSibling(node) {
    var parentNode = node.parentNode;

    if (parentNode) {
      var idx = parentNode.childNodes.indexOf(node);
      return parentNode.childNodes[idx - 1];
    }
  },
  addEventListener: function addEventListener(node, eventName, eventHandler) {
    node.eventListeners[eventName] = eventHandler;
  },
  removeEventListener: function removeEventListener(node, eventName, eventHandler) {
    delete node.eventListeners[eventName];
  },
  removeAttribute: function removeAttribute(node, propKey, propValue) {
    if (propKey === 'className') {
      propKey = 'class';
    }

    if (propKey == ID) {
      this.nodeMaps[propValue] = null;
    }

    if (node.tagName === 'INPUT' && (propKey == 'checked' && (node.attributes.type === 'checkbox' || node.attributes.type === 'radio') || propKey == 'value')) {
      node.attributes[propKey] = null;
    } else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
      node.__html = null;
    } else {
      node.attributes[propKey] = null;
    }
  },
  setAttribute: function setAttribute(node, propKey, propValue) {
    if (propKey === 'className') {
      propKey = 'class';
    }

    if (propKey == ID) {
      this.nodeMaps[propValue] = node;
    }

    if (node.tagName === 'INPUT' && (propKey == 'checked' && (node.attributes.type === 'checkbox' || node.attributes.type === 'radio') || propKey == 'value')) {
      node.attributes[propKey] = propValue;
    } else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
      node.__html = propValue.__html;
    } else if (propValue != null) {
      node.attributes[propKey] = propValue;
    }
  },
  setStyle: function setStyle(node, style) {
    for (var key in style) {
      node.style[key] = style[key];
    }
  },
  setNativeProps: function setNativeProps(node, props, shouldIgnoreStyleProp) {
    for (var prop in props) {
      var value = props[prop];

      if (prop === CHILDREN) {
        continue;
      }

      if (value != null) {
        if (prop === STYLE) {
          if (shouldIgnoreStyleProp) {
            continue;
          }

          this.setStyle(node, value);
        } else if (EVENT_PREFIX_REGEXP.test(prop)) {
          var eventName = prop.slice(2).toLowerCase();
          this.addEventListener(node, eventName, value);
        } else {
          this.setAttribute(node, prop, value);
        }
      }
    }
  }
};
var _default = Driver;
exports.default = _default;
}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1646560416828);
})()
//miniprogram-npm-outsideDeps=[]
//# sourceMappingURL=index.js.map
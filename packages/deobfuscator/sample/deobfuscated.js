'use strict';
(function (fn) {
  var self = window.AmazonUIPageJS || window.P;
  var value = self._namespace || self.attributeErrors;
  var result = value ? value('FWCIMAssets', '') : self;
  if (result.guardFatal) {
    result.guardFatal(fn)(result, window);
  } else {
    result.execute(function () {
      fn(result, window);
    });
  }
})(function (data, window, undefined) {
  (function (modules) {
    /**
     * @param {number} moduleId
     * @return {?}
     */
    function __webpack_require__(moduleId) {
      if (installedModules[moduleId]) {
        return installedModules[moduleId].exports;
      }
      var module = (installedModules[moduleId] = {
        i: moduleId,
        l: false,
        exports: {},
      });
      modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      /** @type {boolean} */
      module.l = true;
      return module.exports;
    }
    var installedModules = {};
    /** @type {!Array} */
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    /**
     * @param {!Function} exports
     * @param {string} name
     * @param {!Function} getter
     * @return {undefined}
     */
    __webpack_require__.d = function (exports, name, getter) {
      if (!__webpack_require__.o(exports, name)) {
        Object.defineProperty(exports, name, {
          configurable: false,
          enumerable: true,
          get: getter,
        });
      }
    };
    /**
     * @param {!Function} fn
     * @return {undefined}
     */
    __webpack_require__.r = function (fn) {
      Object.defineProperty(fn, '__esModule', {
        value: true,
      });
    };
    /**
     * @param {!Object} module
     * @return {?}
     */
    __webpack_require__.n = function (module) {
      /** @type {function(): ?} */
      var getter =
        module && module.__esModule
          ? function () {
              return module['default'];
            }
          : function () {
              return module;
            };
      __webpack_require__.d(getter, 'a', getter);
      return getter;
    };
    /**
     * @param {!Function} object
     * @param {string} name
     * @return {?}
     */
    __webpack_require__.o = function (object, name) {
      return Object.prototype.hasOwnProperty.call(object, name);
    };
    /** @type {string} */
    __webpack_require__.p = '';
    return __webpack_require__((__webpack_require__.s = 76));
  })([
    function (canCreateDiscussions, __webpack_exports__, __webpack_require__) {
      /**
       * @param {!Function} child
       * @param {!Object} parent
       * @return {undefined}
       */
      function extend(child, parent) {
        /**
         * @return {undefined}
         */
        function ctor() {
          /** @type {!Function} */
          this.constructor = child;
        }
        fn(child, parent);
        child.prototype =
          null === parent
            ? Object.create(parent)
            : ((ctor.prototype = parent.prototype), new ctor());
      }
      /**
       * @param {!Object} obj
       * @param {string} _
       * @return {?}
       */
      function get(obj, _) {
        var config = {};
        var k;
        for (k in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, k) && _.indexOf(k) < 0) {
            config[k] = obj[k];
          }
        }
        if (null != obj && 'function' == typeof Object.getOwnPropertySymbols) {
          /** @type {number} */
          var j = 0;
          /** @type {!Array<?>} */
          k = Object.getOwnPropertySymbols(obj);
          for (; j < k.length; j++) {
            if (_.indexOf(k[j]) < 0) {
              config[k[j]] = obj[k[j]];
            }
          }
        }
        return config;
      }
      /**
       * @param {!NodeList} decorators
       * @param {string} target
       * @param {?} key
       * @param {string} desc
       * @return {?}
       */
      function __decorate(decorators, target, key, desc) {
        var d;
        /** @type {number} */
        var c = arguments.length;
        var r =
          c < 3
            ? target
            : null === desc
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) {
          r = Reflect.decorate(decorators, target, key, desc);
        } else {
          /** @type {number} */
          var i = decorators.length - 1;
          for (; i >= 0; i--) {
            if ((d = decorators[i])) {
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
          }
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }
      /**
       * @param {?} paramIndex
       * @param {?} decorator
       * @return {?}
       */
      function __param(paramIndex, decorator) {
        return function (name, key) {
          decorator(name, key, paramIndex);
        };
      }
      /**
       * @param {?} k
       * @param {?} v
       * @return {?}
       */
      function __metadata(k, v) {
        if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata) {
          return Reflect.metadata(k, v);
        }
      }
      /**
       * @param {?} thisArg
       * @param {number} _arguments
       * @param {!Function} P
       * @param {?} generator
       * @return {?}
       */
      function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (onReconnectionCountdown, reject) {
          /**
           * @param {?} value
           * @return {undefined}
           */
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (createConnectionErr) {
              reject(createConnectionErr);
            }
          }
          /**
           * @param {?} value
           * @return {undefined}
           */
          function rejected(value) {
            try {
              step(generator['throw'](value));
            } catch (createConnectionErr) {
              reject(createConnectionErr);
            }
          }
          /**
           * @param {!Object} result
           * @return {undefined}
           */
          function step(result) {
            if (result.done) {
              onReconnectionCountdown(result.value);
            } else {
              new P(function (resolve) {
                resolve(result.value);
              }).then(fulfilled, rejected);
            }
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      }
      /**
       * @param {?} val
       * @param {!Function} e
       * @return {?}
       */
      function send(val, e) {
        /**
         * @param {number} data
         * @return {?}
         */
        function verb(data) {
          return function (canCreateDiscussions) {
            return (function (op) {
              if (pp) {
                throw new TypeError('Generator is already executing.');
              }
              for (; _; ) {
                try {
                  if (
                    ((pp = 1),
                    y &&
                      (t =
                        2 & op[0]
                          ? y['return']
                          : op[0]
                          ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                          : y.next) &&
                      !(t = t.call(y, op[1])).done)
                  ) {
                    return t;
                  }
                  switch (((y = 0), t && (op = [2 & op[0], t.value]), op[0])) {
                    case 0:
                    case 1:
                      t = op;
                      break;
                    case 4:
                      return (
                        _.label++,
                        {
                          value: op[1],
                          done: 0,
                        }
                      );
                    case 5:
                      _.label++;
                      y = op[1];
                      /** @type {!Array} */
                      op = [0];
                      continue;
                    case 7:
                      op = _.ops.pop();
                      _.trys.pop();
                      continue;
                    default:
                      if (
                        !(t = (t = _.trys).length > 0 && t[t.length - 1]) &&
                        (6 === op[0] || 2 === op[0])
                      ) {
                        /** @type {number} */
                        _ = 0;
                        continue;
                      }
                      if (3 === op[0] && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                        _.label = op[1];
                        break;
                      }
                      if (6 === op[0] && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                      }
                      if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                      }
                      if (t[2]) {
                        _.ops.pop();
                      }
                      _.trys.pop();
                      continue;
                  }
                  op = e.call(val, _);
                } catch (e) {
                  /** @type {!Array} */
                  op = [6, e];
                  /** @type {number} */
                  y = 0;
                } finally {
                  /** @type {number} */
                  pp = t = 0;
                }
              }
              if (5 & op[0]) {
                throw op[1];
              }
              return {
                value: op[0] ? op[1] : void 0,
                done: 1,
              };
            })([data, canCreateDiscussions]);
          };
        }
        var pp;
        var y;
        var t;
        var g;
        var _ = {
          label: 0,
          sent: function () {
            if (1 & t[0]) {
              throw t[1];
            }
            return t[1];
          },
          trys: [],
          ops: [],
        };
        return (
          (g = {
            next: verb(0),
            throw: verb(1),
            return: verb(2),
          }),
          'function' == typeof Symbol &&
            (g[Symbol.iterator] = function () {
              return this;
            }),
          g
        );
      }
      /**
       * @param {!Object} value
       * @param {!Object} hash
       * @return {undefined}
       */
      function getTxState(value, hash) {
        var prop;
        for (prop in value) {
          if (!hash.hasOwnProperty(prop)) {
            hash[prop] = value[prop];
          }
        }
      }
      /**
       * @param {string} value
       * @return {?}
       */
      function transform(value) {
        var func = 'function' == typeof Symbol && value[Symbol.iterator];
        /** @type {number} */
        var pos = 0;
        return func
          ? func.call(value)
          : {
              next: function () {
                return (
                  value && pos >= value.length && (value = void 0),
                  {
                    value: value && value[pos++],
                    done: !value,
                  }
                );
              },
            };
      }
      /**
       * @param {?} results
       * @param {!Array} handler
       * @return {?}
       */
      function toString(results, handler) {
        var tmp = 'function' == typeof Symbol && results[Symbol.iterator];
        if (!tmp) {
          return results;
        }
        var data;
        var mockConsole;
        var ret = tmp.call(results);
        /** @type {!Array} */
        var ids = [];
        try {
          for (; (void 0 === handler || handler-- > 0) && !(data = ret.next()).done; ) {
            ids.push(data.value);
          }
        } catch (Console_error) {
          mockConsole = {
            error: Console_error,
          };
        } finally {
          try {
            if (data && !data.done && (tmp = ret['return'])) {
              tmp.call(ret);
            }
          } finally {
            if (mockConsole) {
              throw mockConsole.error;
            }
          }
        }
        return ids;
      }
      /**
       * @return {?}
       */
      function toAlphanumericString() {
        /** @type {!Array} */
        var string = [];
        /** @type {number} */
        var i = 0;
        for (; i < arguments.length; i++) {
          /** @type {!Array<?>} */
          string = string.concat(toString(arguments[i]));
        }
        return string;
      }
      /**
       * @param {number} t
       * @return {?}
       */
      function Manager(t) {
        return this instanceof Manager ? ((this.v = t), this) : new Manager(t);
      }
      /**
       * @param {?} type
       * @param {number} data
       * @param {string} r
       * @return {?}
       */
      function initialize(type, data, r) {
        /**
         * @param {string} type
         * @return {undefined}
         */
        function send(type) {
          if (parser[type]) {
            /**
             * @param {?} result
             * @return {?}
             */
            obj[type] = function (result) {
              return new Promise(function (on, name) {
                if (!(self.push([type, result, on, name]) > 1)) {
                  callback(type, result);
                }
              });
            };
          }
        }
        /**
         * @param {string} method
         * @param {?} data
         * @return {undefined}
         */
        function callback(method, data) {
          try {
            if ((r = parser[method](data)).value instanceof Manager) {
              Promise.resolve(r.value.v).then(update, check);
            } else {
              l(self[0][2], r);
            }
          } catch (r) {
            l(self[0][3], r);
          }
        }
        /**
         * @param {?} hi
         * @return {undefined}
         */
        function update(hi) {
          callback('next', hi);
        }
        /**
         * @param {?} arg1
         * @return {undefined}
         */
        function check(arg1) {
          callback('throw', arg1);
        }
        /**
         * @param {?} e
         * @param {string} l
         * @return {undefined}
         */
        function l(e, l) {
          e(l);
          self.shift();
          if (self.length) {
            callback(self[0][0], self[0][1]);
          }
        }
        if (!Symbol.asyncIterator) {
          throw new TypeError('Symbol.asyncIterator is not defined.');
        }
        var obj;
        var parser = r.apply(type, data || []);
        /** @type {!Array} */
        var self = [];
        return (
          (obj = {}),
          send('next'),
          send('throw'),
          send('return'),
          (obj[Symbol.asyncIterator] = function () {
            return this;
          }),
          obj
        );
      }
      /**
       * @param {!Object} parent
       * @return {?}
       */
      function invoke(parent) {
        /**
         * @param {string} key
         * @param {!Function} value
         * @return {undefined}
         */
        function callback(key, value) {
          values[key] = parent[key]
            ? function (str) {
                return (prepend = !prepend)
                  ? {
                      value: Manager(parent[key](str)),
                      done: 'return' === key,
                    }
                  : value
                  ? value(str)
                  : str;
              }
            : value;
        }
        var values;
        var prepend;
        return (
          (values = {}),
          callback('next'),
          callback('throw', function (canCreateDiscussions) {
            throw canCreateDiscussions;
          }),
          callback('return'),
          (values[Symbol.iterator] = function () {
            return this;
          }),
          values
        );
      }
      /**
       * @param {string} obj
       * @return {?}
       */
      function check(obj) {
        /**
         * @param {string} action
         * @return {undefined}
         */
        function callback(action) {
          aIter[action] =
            obj[action] &&
            function (key) {
              return new Promise(function (wfcb, Validatable) {
                !(function (cb, o, data, n) {
                  Promise.resolve(n).then(function (command_module_id) {
                    cb({
                      value: command_module_id,
                      done: data,
                    });
                  }, o);
                })(wfcb, Validatable, (key = obj[action](key)).done, key.value);
              });
            };
        }
        if (!Symbol.asyncIterator) {
          throw new TypeError('Symbol.asyncIterator is not defined.');
        }
        var aIter;
        var fn = obj[Symbol.asyncIterator];
        return fn
          ? fn.call(obj)
          : ((obj = 'function' == typeof transform ? transform(obj) : obj[Symbol.iterator]()),
            (aIter = {}),
            callback('next'),
            callback('throw'),
            callback('return'),
            (aIter[Symbol.asyncIterator] = function () {
              return this;
            }),
            aIter);
      }
      /**
       * @param {!Object} obj
       * @param {string} msg
       * @return {?}
       */
      function migrateWarnProp(obj, msg) {
        return (
          Object.defineProperty
            ? Object.defineProperty(obj, 'raw', {
                value: msg,
              })
            : (obj.raw = msg),
          obj
        );
      }
      /**
       * @param {!Object} obj
       * @return {?}
       */
      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        }
        var newObj = {};
        if (null != obj) {
          var key;
          for (key in obj) {
            if (Object.hasOwnProperty.call(obj, key)) {
              newObj[key] = obj[key];
            }
          }
        }
        return (newObj['default'] = obj), newObj;
      }
      /**
       * @param {!Object} obj
       * @return {?}
       */
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule
          ? obj
          : {
              default: obj,
            };
      }
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__.d(__webpack_exports__, '__extends', function () {
        return extend;
      });
      __webpack_require__.d(__webpack_exports__, '__assign', function () {
        return merge;
      });
      __webpack_require__.d(__webpack_exports__, '__rest', function () {
        return get;
      });
      __webpack_require__.d(__webpack_exports__, '__decorate', function () {
        return __decorate;
      });
      __webpack_require__.d(__webpack_exports__, '__param', function () {
        return __param;
      });
      __webpack_require__.d(__webpack_exports__, '__metadata', function () {
        return __metadata;
      });
      __webpack_require__.d(__webpack_exports__, '__awaiter', function () {
        return __awaiter;
      });
      __webpack_require__.d(__webpack_exports__, '__generator', function () {
        return send;
      });
      __webpack_require__.d(__webpack_exports__, '__exportStar', function () {
        return getTxState;
      });
      __webpack_require__.d(__webpack_exports__, '__values', function () {
        return transform;
      });
      __webpack_require__.d(__webpack_exports__, '__read', function () {
        return toString;
      });
      __webpack_require__.d(__webpack_exports__, '__spread', function () {
        return toAlphanumericString;
      });
      __webpack_require__.d(__webpack_exports__, '__await', function () {
        return Manager;
      });
      __webpack_require__.d(__webpack_exports__, '__asyncGenerator', function () {
        return initialize;
      });
      __webpack_require__.d(__webpack_exports__, '__asyncDelegator', function () {
        return invoke;
      });
      __webpack_require__.d(__webpack_exports__, '__asyncValues', function () {
        return check;
      });
      __webpack_require__.d(__webpack_exports__, '__makeTemplateObject', function () {
        return migrateWarnProp;
      });
      __webpack_require__.d(__webpack_exports__, '__importStar', function () {
        return _interopRequireWildcard;
      });
      __webpack_require__.d(__webpack_exports__, '__importDefault', function () {
        return _interopRequireDefault;
      });
      /**
       * @param {!Function} pos
       * @param {!Object} prop
       * @return {?}
       */
      var fn = function (pos, prop) {
        return (fn =
          Object.setPrototypeOf ||
          ({
            __proto__: [],
          } instanceof Array &&
            function (doc, window) {
              /** @type {!Object} */
              doc.__proto__ = window;
            }) ||
          function (t, x) {
            var k;
            for (k in x) {
              if (x.hasOwnProperty(k)) {
                t[k] = x[k];
              }
            }
          })(pos, prop);
      };
      /**
       * @return {?}
       */
      var merge = function () {
        return (merge =
          Object.assign ||
          function (elem) {
            var props;
            /** @type {number} */
            var i__7286__auto___11343 = 1;
            /** @type {number} */
            var len__7285__auto___11342 = arguments.length;
            for (; i__7286__auto___11343 < len__7285__auto___11342; i__7286__auto___11343++) {
              var prop;
              for (prop in (props = arguments[i__7286__auto___11343])) {
                if (Object.prototype.hasOwnProperty.call(props, prop)) {
                  elem[prop] = props[prop];
                }
              }
            }
            return elem;
          }).apply(this, arguments);
      };
    },
    function (canCreateDiscussions, exports, __webpack_require__) {
      /** @type {number} */
      exports.__esModule = 1;
      var _UiIcon = __webpack_require__(0);
      var LinkCreate = (function () {
        /**
         * @return {undefined}
         */
        function api() {
          /** @type {null} */
          this.data = null;
        }
        return (
          (api.prototype.collect = function () {
            return _UiIcon.__awaiter(this, void 0, void 0, function () {
              var geckoTable;
              return _UiIcon.__generator(this, function (_context) {
                switch (_context.label) {
                  case 0:
                    return null !== this.data
                      ? [3, 2]
                      : ((geckoTable = this), [4, this.collectData()]);
                  case 1:
                    geckoTable.data = _context.sent();
                    /** @type {number} */
                    _context.label = 2;
                  case 2:
                    return [2, this.data];
                }
              });
            });
          }),
          api
        );
      })();
      exports['default'] = LinkCreate;
    },
    function () {
      /** @type {number} */
      exports.__esModule = 1;
      var LinkCreate = (function () {
        /**
         * @param {!Object} element
         * @return {undefined}
         */
        function WidgetElement(element) {
          /** @type {!Object} */
          this.element = element;
        }
        return (
          (WidgetElement.prototype.addEventListener = function (type, handler) {
            if ('function' == typeof this.element.addEventListener) {
              this.element.addEventListener(type, handler);
            } else {
              if ('function' != typeof this.element.attachEvent) {
                throw new Error(
                  'The event listener could not be bound because the browser does not support any event listener methods.'
                );
              }
              this.element.attachEvent('on' + type, handler);
            }
          }),
          (WidgetElement.prototype.removeEventListener = function (type, fn) {
            if ('function' == typeof this.element.removeEventListener) {
              this.element.removeEventListener(type, fn);
            } else {
              if ('function' != typeof this.element.detachEvent) {
                throw new Error(
                  'The event listener could not be unbound because the browser does not support any event listener methods.'
                );
              }
              this.element.detachEvent('on' + type, fn);
            }
          }),
          WidgetElement
        );
      })();
      exports['default'] = LinkCreate;
    },
    function () {
      /** @type {number} */
      exports.__esModule = 1;
      var LinkCreate = (function () {
        /**
         * @param {!Object} context
         * @return {undefined}
         */
        function View(context) {
          if (void 0 === context) {
            /** @type {!HTMLDocument} */
            context = document;
          }
          /** @type {!Object} */
          this.context = context;
          if ('function' != typeof context.querySelectorAll) {
            this.qsa = this.polyfillQuerySelectorAll(context);
          } else {
            /**
             * @param {string} selector
             * @return {?}
             */
            this.qsa = function (selector) {
              return context.querySelectorAll(selector);
            };
          }
        }
        return (
          (View.prototype.generateRandomId = function () {
            return 'i' + Math.random().toString(16).replace('.', '');
          }),
          (View.prototype.polyfillQuerySelectorAll = function (context) {
            var playerUtil = this;
            return function (clusterShardData) {
              var node;
              /** @type {number} */
              var o = 0;
              /** @type {!Object} */
              var obj = context;
              if (context !== document) {
                if (obj.id) {
                  node = obj.id;
                } else {
                  node = playerUtil.generateRandomId();
                  /** @type {number} */
                  o = 1;
                  obj.id = node;
                }
              }
              /** @type {!HTMLDocument} */
              var doc = document;
              /** @type {!Element} */
              var styleTag = doc.createElement('style');
              /** @type {!Array} */
              var confirmedInputs = [];
              doc.documentElement.firstChild.appendChild(styleTag);
              /** @type {!Array} */
              doc._qsa = [];
              var a = clusterShardData.split(',');
              if (node) {
                /** @type {number} */
                var i = 0;
                for (; i < a.length; i++) {
                  a[i] = '#' + node + ' ' + a[i].trim();
                }
              }
              styleTag.styleSheet.cssText =
                a.join(', ') + ' {x-qsa:expression(document._qsa && document._qsa.push(this))}';
              window.scrollBy(0, 0);
              styleTag.parentNode.removeChild(styleTag);
              for (; doc._qsa.length; ) {
                var inputEl = doc._qsa.shift();
                inputEl.style.removeAttribute('x-qsa');
                confirmedInputs.push(inputEl);
              }
              return (doc._qsa = null), o && (obj.id = null), confirmedInputs;
            };
          }),
          (View.prototype.querySelectorAll = function (context) {
            return this.qsa(context);
          }),
          (View.prototype.querySelector = function (sel) {
            var elements = this.querySelectorAll(sel);
            return elements.length ? elements[0] : null;
          }),
          View
        );
      })();
      exports['default'] = LinkCreate;
    },
    function () {
      var g;
      g = (function () {
        return this;
      })();
      try {
        g = g || Function('return this')() || (0, eval)('this');
      } catch (bt) {
        if ('object' == typeof window) {
          /** @type {!Object} */
          g = window;
        }
      }
      module.exports = g;
    },
    function () {
      /** @type {number} */
      exports.__esModule = 1;
      var LinkCreate = (function () {
        /**
         * @return {undefined}
         */
        function FixedResizer() {}
        return (
          (FixedResizer.prototype.buildCrcTable = function () {
            /** @type {!Array} */
            this.crcTable = [];
            /** @type {number} */
            var exception = 0;
            for (; exception < 256; exception++) {
              /** @type {number} */
              var e = exception;
              /** @type {number} */
              var c = 0;
              for (; c < 8; c++) {
                if (1 == (1 & e)) {
                  /** @type {number} */
                  e = (e >>> 1) ^ FixedResizer.IEEE_POLYNOMIAL;
                } else {
                  /** @type {number} */
                  e = e >>> 1;
                }
              }
              /** @type {number} */
              this.crcTable[exception] = e;
            }
          }),
          (FixedResizer.prototype.calculate = function (d) {
            if (!this.crcTable) {
              this.buildCrcTable();
            }
            var offset;
            /** @type {number} */
            var crc = 0;
            /** @type {number} */
            crc = crc ^ 4294967295;
            /** @type {number} */
            var i = 0;
            for (; i < d.length; i++) {
              /** @type {number} */
              offset = 255 & (crc ^ d.charCodeAt(i));
              /** @type {number} */
              crc = (crc >>> 8) ^ this.crcTable[offset];
            }
            return 4294967295 ^ crc;
          }),
          (FixedResizer.IEEE_POLYNOMIAL = 3988292384),
          FixedResizer
        );
      })();
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, registerCommand) {
      /** @type {number} */
      exports.__esModule = 1;
      var command = registerCommand(0);
      var LinkCreate = (function () {
        /**
         * @param {!Object} options
         * @return {undefined}
         */
        function data(options) {
          this.telemetry = options.telemetry;
          this.key = options.key;
        }
        return (
          (data.prototype.collect = function () {
            return command.__awaiter(this, void 0, void 0, function () {
              var request;
              var value;
              return command.__generator(this, function () {
                return (
                  (value = this.telemetry.get()),
                  [
                    2,
                    ((request = {}),
                    (request[this.key] = command.__assign({}, value, {
                      keyCycles: this.transformCycles(value.keyCycles),
                      mouseCycles: this.transformCycles(value.mouseCycles),
                      touchCycles: this.transformCycles(value.touchCycles),
                    })),
                    request),
                  ]
                );
              });
            });
          }),
          (data.prototype.transformCycles = function (buildInTemplates) {
            return buildInTemplates.map(function (data) {
              return data.endEventTime - data.startEventTime;
            });
          }),
          (data.collectorName = 'el'),
          data
        );
      })();
      exports['default'] = LinkCreate;
    },
    function () {
      (function (__webpack_amd_options__) {
        /** @type {!Object} */
        module.exports = __webpack_amd_options__;
      }.call(this, {}));
    },
    function () {
      /** @type {number} */
      exports.__esModule = 1;
      var LinkCreate = (function () {
        /**
         * @return {undefined}
         */
        function AvatarsIO() {}
        return (
          (AvatarsIO.prototype.create = function (prop, extra) {
            /** @type {number} */
            var best_words_in_dict = 0;
            return function () {
              /** @type {number} */
              var this_words_in_dict = new Date().getTime();
              if (this_words_in_dict - extra >= best_words_in_dict) {
                /** @type {number} */
                best_words_in_dict = this_words_in_dict;
                prop.apply(this, arguments);
              }
            };
          }),
          AvatarsIO
        );
      })();
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, builder) {
      /** @type {number} */
      exports.__esModule = 1;
      var event = builder(0);
      var LinkCreate = (function () {
        /**
         * @param {!Object} Glide
         * @return {undefined}
         */
        function Clones(Glide) {
          /** @type {!Object} */
          this.collectors = Glide;
        }
        return (
          (Clones.prototype.collect = function () {
            return event.__awaiter(this, void 0, void 0, function () {
              var base;
              var results;
              var result;
              var params;
              var layer_i;
              var crossfilterable_layers;
              var array;
              var name;
              var callback;
              var trainStart;
              var options;
              var apiResponseError;
              return event.__generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    /** @type {!Array} */
                    result = [];
                    params = {
                      metrics: {},
                    };
                    /** @type {number} */
                    layer_i = 0;
                    crossfilterable_layers = this.collectors;
                    /** @type {number} */
                    _a.label = 1;
                  case 1:
                    if (!(layer_i < crossfilterable_layers.length)) {
                      return [3, 6];
                    }
                    array = crossfilterable_layers[layer_i];
                    name = array.constructor.collectorName;
                    callback = params.metrics;
                    /** @type {number} */
                    trainStart = new Date().getTime();
                    /** @type {number} */
                    _a.label = 2;
                  case 2:
                    return _a.trys.push([2, 4, , 5]), [4, array.collect()];
                  case 3:
                    return (
                      'object' != typeof (options = _a.sent()) && (options = {}),
                      name !== undefined &&
                        (callback = event.__assign(
                          {},
                          callback,
                          (((base = {})[name] = new Date().getTime() - trainStart), base)
                        )),
                      (params = event.__assign({}, params, options, {
                        metrics: callback,
                      })),
                      [3, 5]
                    );
                  case 4:
                    return (
                      (apiResponseError = _a.sent()),
                      result.push({
                        collector: name,
                        message: apiResponseError.message,
                      }),
                      name !== undefined &&
                        (params = event.__assign({}, params, {
                          metrics: event.__assign(
                            {},
                            callback,
                            ((results = {}),
                            (results[name] = new Date().getTime() - trainStart),
                            results)
                          ),
                        })),
                      [3, 5]
                    );
                  case 5:
                    return layer_i++, [3, 1];
                  case 6:
                    return (params.errors = result), [2, params];
                }
              });
            });
          }),
          Clones
        );
      })();
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, _interopRequireDefault) {
      /** @type {number} */
      exports.__esModule = 1;
      var QuickBase = _interopRequireDefault(0);
      var _omi2 = _interopRequireDefault(50);
      var _voidMap2 = _interopRequireDefault(49);
      var _DocumentFragment = _interopRequireDefault(6);
      var _GatewayClient2 = _interopRequireDefault(9);
      var _art2 = _interopRequireDefault(48);
      var _HTMLParser = _interopRequireDefault(14);
      var _fileProcessingJsProcessingJs2 = _interopRequireDefault(47);
      var _fileMainPde2 = _interopRequireDefault(46);
      var _HTMLSerializer = _interopRequireDefault(12);
      var _AnchorElement = _interopRequireDefault(17);
      var ocInfo = _interopRequireDefault(45);
      var LinkCreate = (function () {
        /**
         * @param {string} Glide
         * @param {!Function} Core
         * @return {undefined}
         */
        function Clones(Glide, Core) {
          var val = this;
          /** @type {string} */
          this.encoder = Glide;
          /** @type {!Function} */
          this.encryptor = Core;
          /** @type {!Array} */
          this.initializationErrors = [];
          /** @type {null} */
          var escapes_obj = null;
          /**
           * @param {!Array} len
           * @return {?}
           */
          this.initializeCollectors = function (len) {
            /** @type {!Array} */
            var a = [];
            /** @type {number} */
            var s = 0;
            /** @type {!Array} */
            var n = len;
            for (; s < n.length; s++) {
              var i = n[s];
              try {
                if ('function' == typeof i.collect) {
                  a.push(i);
                } else {
                  a.push(i(val));
                }
              } catch (apiResponseError) {
                val.initializationErrors.push({
                  message: apiResponseError.message,
                });
              }
            }
            return a;
          };
          /**
           * @return {undefined}
           */
          this.initializeCompoundCollector = function () {
            var cls = val.constructor;
            if (null === escapes_obj) {
              escapes_obj = new _GatewayClient2['default'](
                val.initializeCollectors(cls.COLLECTORS)
              );
            }
          };
          /**
           * @param {!Object} escapes_obj
           * @return {?}
           */
          this.collectAndEncrypt = function (escapes_obj) {
            return QuickBase.__awaiter(val, void 0, void 0, function () {
              var data;
              return QuickBase.__generator(this, function (_context) {
                switch (_context.label) {
                  case 0:
                    return [4, escapes_obj.collect()];
                  case 1:
                    return (
                      ((data = _context.sent()).version = ocInfo.FWCIM_VERSION),
                      data.errors
                        ? (data.errors = data.errors.concat(this.initializationErrors))
                        : (data.errors = this.initializationErrors),
                      [4, this.encryptor.encrypt(this.encoder.encode(data))]
                    );
                  case 2:
                    return [2, _context.sent()];
                }
              });
            });
          };
          /**
           * @return {?}
           */
          this.collect = function () {
            return QuickBase.__awaiter(val, void 0, void 0, function () {
              return QuickBase.__generator(this, function () {
                return [2, this.collectAndEncrypt(escapes_obj)];
              });
            });
          };
        }
        return (
          (Clones.prototype.profile = function () {
            this.initializeCompoundCollector();
            this.doProfile();
          }),
          (Clones.COLLECTORS = [
            function () {
              return new _HTMLParser['default']({
                key: 'start',
              });
            },
            function () {
              return new _DocumentFragment['default']({
                key: 'interaction',
                telemetry: new _AnchorElement['default']({
                  element: document,
                  cycleBuffer: 10,
                }),
              });
            },
            function () {
              return new _fileMainPde2['default']();
            },
            function () {
              return new _art2['default']();
            },
            function () {
              return new _voidMap2['default']();
            },
            function () {
              return new _fileProcessingJsProcessingJs2['default']();
            },
            function () {
              return new _omi2['default']();
            },
            function () {
              return new _HTMLSerializer['default']({
                key: 'end',
              });
            },
          ]),
          Clones
        );
      })();
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, __webpack_require__) {
      /** @type {number} */
      exports.__esModule = 1;
      var Util = __webpack_require__(0);
      var _UiIcon = __webpack_require__(1);
      var LinkCreate = (function (_super) {
        /**
         * @return {?}
         */
        function Editor() {
          return (null !== _super && _super.apply(this, arguments)) || this;
        }
        return (
          Util.__extends(Editor, _super),
          (Editor.prototype.collectData = function () {
            return Util.__awaiter(this, void 0, void 0, function () {
              var dTempDate1;
              var r;
              var v;
              return Util.__generator(this, function () {
                return 'function' != typeof (dTempDate1 = new Date()).toGMTString
                  ? [2, null]
                  : ((r = new Date(dTempDate1.getFullYear(), 0, 10)),
                    (v = new Date(r.toGMTString().replace(/ (GMT|UTC)/, ''))),
                    [
                      2,
                      {
                        timeZone: (r.getTime() - v.getTime()) / 3600000,
                      },
                    ]);
              });
            });
          }),
          (Editor.collectorName = 'tz'),
          Editor
        );
      })(_UiIcon['default']);
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, __webpack_require__) {
      /** @type {number} */
      exports.__esModule = 1;
      var _UiIcon = __webpack_require__(0);
      var LinkCreate = (function () {
        /**
         * @param {!Object} data
         * @return {undefined}
         */
        function data(data) {
          this.key = data.key;
        }
        return (
          (data.prototype.collect = function () {
            return _UiIcon.__awaiter(this, void 0, void 0, function () {
              var prefs;
              return _UiIcon.__generator(this, function () {
                return [2, ((prefs = {}), (prefs[this.key] = new Date().getTime()), prefs)];
              });
            });
          }),
          data
        );
      })();
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, __webpack_require__) {
      /** @type {number} */
      exports.__esModule = 1;
      var _UiIcon = __webpack_require__(0);
      var LinkCreate = (function () {
        /**
         * @param {!Object} name
         * @return {undefined}
         */
        function Storage(name) {
          try {
            this.storage = null === name ? name : window.localStorage;
          } catch (e) {}
        }
        return (
          (Storage.prototype.generateIdentifier = function () {
            /**
             * @param {string} message
             * @return {?}
             */
            function b(message) {
              message = typeof message === undefined || null === message ? '' : message.toString();
              /** @type {number} */
              var i = 0;
              for (; i < message.length; i++) {
                /** @type {number} */
                var x = 0.02519603282416938 * (width = width + message.charCodeAt(i));
                /** @type {number} */
                x = x - (width = x >>> 0);
                /** @type {number} */
                width = (x = x * width) >>> 0;
                /** @type {number} */
                width = width + 4294967296 * (x = x - width);
              }
              return 2.3283064365386963e-10 * (width >>> 0);
            }
            /**
             * @param {number} sync
             * @return {?}
             */
            function s4(sync) {
              return (
                '0000000000' +
                (
                  4294967296 *
                  ((b = 2091639 * c + 2.3283064365386963e-10 * s),
                  (c = i),
                  (i = a),
                  (a = b - (s = 0 | b)))
                ).toString()
              ).slice(-sync);
            }
            /** @type {number} */
            var width = 4022871197;
            var c = b(' ');
            var i = b(' ');
            var a = b(' ');
            /** @type {number} */
            var s = 1;
            /** @type {!Array} */
            var _portlets = [document.body.innerHTML, navigator.userAgent, new Date().getTime()];
            var _portlet;
            for (_portlet in _portlets) {
              if (_portlets.hasOwnProperty(_portlet)) {
                if ((c = c - b(_portlets[_portlet])) < 0) {
                  c = c + 1;
                }
                if ((i = i - b(_portlets[_portlet])) < 0) {
                  i = i + 1;
                }
                if ((a = a - b(_portlets[_portlet])) < 0) {
                  a = a + 1;
                }
              }
            }
            return (
              'X' +
              s4(2) +
              '-' +
              s4(7) +
              '-' +
              s4(7) +
              ':' +
              Math.floor(new Date().getTime() / 1000)
            );
          }),
          (Storage.prototype.validateIdentifier = function (val) {
            return !('string' != typeof val || !val.match(/^[X\d]\d{2}\-\d{7}\-\d{7}:\d+$/));
          }),
          (Storage.prototype.collect = function () {
            return _UiIcon.__awaiter(this, void 0, void 0, function () {
              var val;
              return _UiIcon.__generator(this, function () {
                return this.storage
                  ? ((val = this.storage.getItem(Storage.STORAGE_KEY)),
                    this.validateIdentifier(val) ||
                      ((val = this.generateIdentifier()),
                      this.storage.removeItem(Storage.STORAGE_KEY),
                      this.storage.setItem(Storage.STORAGE_KEY, val)),
                    [
                      2,
                      {
                        lsUbid: val,
                      },
                    ])
                  : [2, null];
              });
            });
          }),
          (Storage.STORAGE_KEY = 'amznfbgid'),
          (Storage.collectorName = 'lsubid'),
          Storage
        );
      })();
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, __webpack_require__) {
      /** @type {number} */
      exports.__esModule = 1;
      var _UiIcon = __webpack_require__(0);
      var LinkCreate = (function () {
        /**
         * @param {!Object} max
         * @return {undefined}
         */
        function f(max) {
          this.key = max.key;
          /** @type {number} */
          this.time = new Date().getTime();
        }
        return (
          (f.prototype.collect = function () {
            return _UiIcon.__awaiter(this, void 0, void 0, function () {
              var prefs;
              return _UiIcon.__generator(this, function () {
                return [2, ((prefs = {}), (prefs[this.key] = this.time), prefs)];
              });
            });
          }),
          f
        );
      })();
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, require) {
      /** @type {number} */
      exports.__esModule = 1;
      var util = require(0);
      var data = require(59);
      var game = require(58);
      var ContainerDebugAdapter = require(57);
      var CheckDailyStat = require(1);
      var _DocumentFragment = require(56);
      var _AnchorElement = require(55);
      var LinkCreate = (function (_super) {
        /**
         * @return {?}
         */
        function init() {
          var modVSelf = _super.call(this) || this;
          return (
            (modVSelf.pluginCollectors = []),
            window.navigator.plugins &&
              window.navigator.plugins.length &&
              modVSelf.pluginCollectors.push(new _DocumentFragment['default']()),
            data['default'].ie() &&
              data['default'].windows() &&
              (modVSelf.pluginCollectors.push(
                new ContainerDebugAdapter['default']({
                  container: document.body,
                })
              ),
              modVSelf.pluginCollectors.push(
                new game['default']({
                  container: document.body,
                })
              )),
            (modVSelf.screenInfoCollector = new _AnchorElement['default']()),
            modVSelf
          );
        }
        return (
          util.__extends(init, _super),
          (init.prototype.collectData = function () {
            return util.__awaiter(this, void 0, void 0, function () {
              var stopMargin;
              var plugins;
              var i;
              var players;
              var options;
              var ret;
              var str;
              var index;
              var path;
              var node;
              var dir;
              return util.__generator(this, function (_context) {
                switch (_context.label) {
                  case 0:
                    /** @type {null} */
                    stopMargin = null;
                    /** @type {!Array} */
                    plugins = [];
                    /** @type {number} */
                    i = 0;
                    players = this.pluginCollectors;
                    /** @type {number} */
                    _context.label = 1;
                  case 1:
                    return i < players.length ? [4, players[i].collect()] : [3, 4];
                  case 2:
                    options = _context.sent();
                    plugins = plugins.concat(options.plugins);
                    stopMargin = options.flashVersion || stopMargin;
                    /** @type {number} */
                    _context.label = 3;
                  case 3:
                    return i++, [3, 1];
                  case 4:
                    if (((ret = ''), (str = ''), plugins.length > 0)) {
                      /** @type {number} */
                      index = 0;
                      path = plugins;
                      for (; index < path.length; index++) {
                        node = path[index];
                        if (-1 === ret.indexOf(node.name)) {
                          /** @type {string} */
                          ret = ret + node.str;
                        }
                        /** @type {string} */
                        str = str + node.str;
                      }
                    } else {
                      /** @type {string} */
                      ret = 'unknown';
                      /** @type {string} */
                      str = 'unknown';
                    }
                    return [4, this.screenInfoCollector.collect()];
                  case 5:
                    return (
                      (dir = _context.sent().screenInfo),
                      [
                        2,
                        {
                          flashVersion: stopMargin,
                          plugins: (ret = ret + ('||' + dir)),
                          dupedPlugins: (str = str + ('||' + dir)),
                          screenInfo: dir,
                        },
                      ]
                    );
                }
              });
            });
          }),
          (init.collectorName = 'fp2'),
          init
        );
      })(CheckDailyStat['default']);
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, NFA) {
      /** @type {number} */
      exports.__esModule = 1;
      var m = NFA(0);
      var _Chart = NFA(2);
      var expected = {
        buffer: -1,
        callback: function () {},
      };
      var LinkCreate = (function () {
        /**
         * @param {?} options
         * @return {undefined}
         */
        function Plugin(options) {
          var that = m.__assign({}, expected, options);
          var element = that.element;
          var id = that.buffer;
          var malakh = that.startEvent;
          var endEvent = that.endEvent;
          var callback = that.callback;
          this.element = element;
          this.buffer = id;
          this.startEvent = malakh;
          this.endEvent = endEvent;
          this.callback = callback;
          this.bind();
        }
        return (
          (Plugin.prototype.bind = function () {
            var s = this;
            var dictionary = {};
            /** @type {!Array} */
            this.eventCycles = [];
            var animation = new _Chart['default'](this.element);
            animation.addEventListener(this.startEvent, function (event) {
              var key = s.extractWhich(event);
              if (key && !dictionary.hasOwnProperty(key)) {
                dictionary[key] = {
                  startEventTime: new Date().getTime(),
                  startEvent: event,
                  which: key,
                };
              }
            });
            animation.addEventListener(this.endEvent, function (n) {
              var name = s.extractWhich(n);
              if (name && dictionary.hasOwnProperty(name)) {
                /** @type {string} */
                dictionary[name].endEvent = n;
                /** @type {number} */
                dictionary[name].endEventTime = new Date().getTime();
                if (s.buffer < 0 || s.eventCycles.length < s.buffer) {
                  s.eventCycles.push(dictionary[name]);
                }
                s.callback(name, dictionary[name]);
                delete dictionary[name];
              }
            });
          }),
          (Plugin.prototype.extractWhich = function (obj) {
            /** @type {number} */
            var index = 0;
            for (; index < Plugin.WHICH_PROPERTIES.length; index++) {
              var columnKey = Plugin.WHICH_PROPERTIES[index];
              if (obj[columnKey] !== undefined && obj[columnKey] !== Plugin.UNIDENTIFIED) {
                return obj[columnKey];
              }
            }
            return Plugin.UNIDENTIFIED;
          }),
          (Plugin.prototype.get = function () {
            return this.eventCycles;
          }),
          (Plugin.prototype.reset = function () {
            this.eventCycles.splice(0);
          }),
          (Plugin.WHICH_PROPERTIES = ['key', 'which', 'button']),
          (Plugin.UNIDENTIFIED = 'Unidentified'),
          Plugin
        );
      })();
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, _interopRequireDefault) {
      /** @type {number} */
      exports.__esModule = 1;
      var _Chart = _interopRequireDefault(2);
      var _DocumentFragment = _interopRequireDefault(16);
      var LinkCreate = (function () {
        /**
         * @param {!Object} options
         * @return {undefined}
         */
        function View(options) {
          /** @type {!Object} */
          this.options = options;
          this.element = options.element;
          this.data = {
            clicks: 0,
            touches: 0,
            keyPresses: 0,
            cuts: 0,
            copies: 0,
            pastes: 0,
            keyPressTimeIntervals: [],
            mouseClickPositions: [],
            keyCycles: [],
            mouseCycles: [],
            touchCycles: [],
          };
          this.bindElement(options.cycleBuffer);
        }
        return (
          (View.prototype.bindElement = function (data) {
            var self = this;
            if (void 0 === data) {
              /** @type {number} */
              data = -1;
            }
            var editor = new _Chart['default'](this.element);
            editor.addEventListener('keydown', function () {
              return self.data.keyPresses++;
            });
            editor.addEventListener('touchend', function () {
              return self.data.touches++;
            });
            editor.addEventListener('click', function (e) {
              if ((self.data.clicks++, self.data.mouseClickPositions.length <= 10)) {
                var coords = {
                  top: 0,
                  left: 0,
                };
                if ('function' == typeof self.element.getBoundingClientRect) {
                  coords = self.element.getBoundingClientRect();
                }
                var initialCropBoxPositionY = coords.top + window.scrollY;
                var frame_left = coords.left + window.scrollX;
                self.data.mouseClickPositions.push(
                  [e.pageX - frame_left, e.pageY - initialCropBoxPositionY].join(',')
                );
              }
            });
            editor.addEventListener('cut', function () {
              return self.data.cuts++;
            });
            editor.addEventListener('copy', function () {
              return self.data.copies++;
            });
            editor.addEventListener('paste', function () {
              return self.data.pastes++;
            });
            this.keyCycles = new _DocumentFragment['default']({
              startEvent: 'keydown',
              endEvent: 'keyup',
              element: this.element,
              buffer: data,
              callback: function () {
                if (
                  ((self.data.keyCycles = self.keyCycles.get()),
                  self.data.keyCycles.sort(function (_pointB, _pointM) {
                    return _pointB.startEventTime - _pointM.startEventTime;
                  }),
                  (self.data.keyPressTimeIntervals = []),
                  self.data.keyCycles.length > 1)
                ) {
                  /** @type {number} */
                  var indexLookupKey = self.data.keyCycles.length - 1;
                  for (; indexLookupKey > 0; indexLookupKey--) {
                    self.data.keyPressTimeIntervals.splice(
                      0,
                      0,
                      self.data.keyCycles[indexLookupKey].startEventTime -
                        self.data.keyCycles[indexLookupKey - 1].startEventTime
                    );
                  }
                }
              },
            });
            this.mouseCycles = new _DocumentFragment['default']({
              startEvent: 'mousedown',
              endEvent: 'mouseup',
              element: this.element,
              buffer: data,
              callback: function () {
                return (self.data.mouseCycles = self.mouseCycles.get());
              },
            });
            this.touchCycles = new _DocumentFragment['default']({
              startEvent: 'touchstart',
              endEvent: 'touchend',
              element: this.element,
              buffer: data,
              callback: function () {
                return (self.data.touchCycles = self.touchCycles.get());
              },
            });
          }),
          (View.prototype.get = function () {
            return this.data;
          }),
          View
        );
      })();
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, require) {
      /** @type {number} */
      exports.__esModule = 1;
      var $ = require(0);
      var r = require(29);
      var ContainerDebugAdapter = require(28);
      var a = require(5);
      var _Chart = require(2);
      var TagHourlyStat = require(17);
      var LinkCreate = (function (_super) {
        /**
         * @param {!Object} data
         * @return {?}
         */
        function init(data) {
          var obj = _super.call(this, data) || this;
          obj.hexEncoder = new r['default']();
          obj.crcCalculator = new a['default']();
          obj.utf8Encoder = new ContainerDebugAdapter['default']();
          /** @type {number} */
          obj.totalFocusTime = 0;
          /** @type {number} */
          obj.keyWasPressed = 0;
          obj.form = data.form;
          var boxDim = data.element.getBoundingClientRect();
          var w = boxDim.width;
          var h = boxDim.height;
          return (
            (obj.width = w),
            (obj.height = h),
            (obj.prefilled = !!data.element.value),
            obj.bindInput(),
            obj
          );
        }
        return (
          $.__extends(init, _super),
          (init.prototype.bindInput = function () {
            var self = this;
            var list = new _Chart['default'](this.element);
            list.addEventListener('keydown', function () {
              return (self.keyWasPressed = 1);
            });
            list.addEventListener('focus', function () {
              return (self.focusTimestamp = new Date().getTime());
            });
            list.addEventListener('blur', function () {
              if (self.focusTimestamp) {
                self.totalFocusTime += new Date().getTime() - self.focusTimestamp;
                /** @type {null} */
                self.focusTimestamp = null;
              }
            });
            new _Chart['default'](this.form).addEventListener('submit', function () {
              if (
                (self.focusTimestamp &&
                  ((self.totalFocusTime += new Date().getTime() - self.focusTimestamp),
                  (self.focusTimestamp = null)),
                (self.autocomplete =
                  !self.keyWasPressed && !self.prefilled && !!self.element.value),
                'password' !== self.element.type)
              ) {
                var original = self.element.value;
                if (!original || !original.length) {
                  return;
                }
                if (Array.isArray(original) && original.length) {
                  original = original.sort().join(',');
                }
                self.checksum = self.hexEncoder.encode(
                  self.crcCalculator.calculate(self.utf8Encoder.encode(original))
                );
              }
            });
          }),
          (init.prototype.get = function () {
            var opts = this;
            var surfaceWidth = opts.width;
            var line_offset = opts.height;
            var _featureClick = opts.totalFocusTime;
            var checksum = opts.checksum;
            var autocomplete = opts.autocomplete;
            var pta = opts.prefilled;
            var navCommonStyle = _super.prototype.get.call(this);
            return $.__assign({}, navCommonStyle, {
              width: surfaceWidth,
              height: line_offset,
              totalFocusTime: _featureClick,
              checksum: checksum,
              autocomplete: autocomplete,
              prefilled: pta,
            });
          }),
          init
        );
      })(TagHourlyStat['default']);
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, baseTemp) {
      /** @type {number} */
      exports.__esModule = 1;
      var base = baseTemp(2);
      var LinkCreate = (function () {
        /**
         * @param {!Function} callback
         * @param {number} timeout
         * @param {number} p
         * @return {undefined}
         */
        function init(callback, timeout, p) {
          if (void 0 === p) {
            /** @type {number} */
            p = 0;
          }
          /** @type {!Function} */
          this.callback = callback;
          /** @type {number} */
          this.timeout = timeout;
          /** @type {number} */
          this.minimumCallbackTime = p;
          /** @type {number} */
          this.idleCallbackStart = new Date().getTime();
          /** @type {null} */
          this.idleTimeout = null;
          /** @type {number} */
          this.idleCallbackCalled = 0;
          this.bindInteractionEvents();
        }
        return (
          (init.prototype.bindInteractionEvents = function () {
            var that = this;
            /**
             * @return {undefined}
             */
            this.callHandleInteractionEvent = function () {
              that.handleInteractionEvent();
            };
            /** @type {number} */
            var x = 0;
            /** @type {!Array} */
            var size = init.DOCUMENT_INTERACTION_EVENTS;
            for (; x < size.length; x++) {
              var w = size[x];
              init.DOCUMENT_EVENT_LISTENER.addEventListener(w, this.callHandleInteractionEvent);
            }
            if ('number' == typeof this.timeout) {
              setTimeout(function () {
                that.triggerCallback();
              }, this.timeout);
            }
          }),
          (init.prototype.handleInteractionEvent = function () {
            var that = this;
            if (null !== this.idleTimeout) {
              clearTimeout(this.idleTimeout);
            }
            /** @type {number} */
            var execTime = new Date().getTime() - this.idleCallbackStart;
            /** @type {number} */
            var CLEANUP_TIMEOUT =
              'number' == typeof this.timeout && execTime > this.timeout
                ? init.IMMEDIATELY_RUN_TIMEOUT_MS
                : init.IDLE_TIME_MS;
            /** @type {number} */
            this.idleTimeout = setTimeout(function () {
              if (execTime >= that.minimumCallbackTime) {
                that.triggerCallback();
              }
            }, CLEANUP_TIMEOUT);
          }),
          (init.prototype.triggerCallback = function () {
            if (0 == this.idleCallbackCalled) {
              /** @type {number} */
              this.idleCallbackCalled = 1;
              this.clear();
              this.callback();
            }
          }),
          (init.prototype.clear = function () {
            /** @type {number} */
            this.idleCallbackCalled = 1;
            if (null !== this.idleTimeout) {
              clearTimeout(this.idleTimeout);
              /** @type {null} */
              this.idleTimeout = null;
            }
            /** @type {number} */
            var i = 0;
            /** @type {!Array} */
            var body = init.DOCUMENT_INTERACTION_EVENTS;
            for (; i < body.length; i++) {
              var type = body[i];
              init.DOCUMENT_EVENT_LISTENER.removeEventListener(
                type,
                this.callHandleInteractionEvent
              );
            }
          }),
          (init.IDLE_TIME_MS = 500),
          (init.IMMEDIATELY_RUN_TIMEOUT_MS = 10),
          (init.DOCUMENT_EVENT_LISTENER = new base['default'](document)),
          (init.DOCUMENT_INTERACTION_EVENTS = ['keypress', 'keydown', 'keyup', 'click', 'scroll']),
          init
        );
      })();
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, makeBuffer) {
      /** @type {number} */
      exports.__esModule = 1;
      var window = makeBuffer(65);
      var LinkCreate = (function () {
        /**
         * @return {undefined}
         */
        function message() {}
        return (
          (message.prototype.buildURL = function (url) {
            try {
              return new window['default'](url);
            } catch (err) {
              var callback = window.ueLogError;
              return (
                callback &&
                  callback(err, {
                    logLevel: 'WARN',
                    attribution: 'FWCIMAssets',
                    message: 'Invalid url ("' + url + '"): ' + (err.message || err),
                  }),
                null
              );
            }
          }),
          message
        );
      })();
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, __webpack_require__) {
      /** @type {number} */
      exports.__esModule = 1;
      var Util = __webpack_require__(0);
      var _UiIcon = __webpack_require__(20);
      var index = {
        'pharmacy-beta.corp.amazon.com': 'https://development.amazon.com/',
        'pharmacy-gamma.corp.amazon.com': 'https://pre-prod.amazon.com/',
        'pharmacy.amazon.com': 'https://www.amazon.com/',
        'virtualcare.integ.amazon.com': 'https://development.amazon.com/',
        'virtualcare-preprod.iad.xcorp.amazon.com': 'https://pre-prod.amazon.com/',
        'virtualcare.amazon.com': 'https://www.amazon.com/',
        'clinic-preprod.iad.xcorp.amazon.com': 'https://pre-prod.amazon.com/',
        'clinic.integ.amazon.com': 'https://development.amazon.com/',
        'clinic.amazon.com': 'https://www.amazon.com/',
      };
      var LinkCreate = (function (_super) {
        /**
         * @return {?}
         */
        function Editor() {
          return (null !== _super && _super.apply(this, arguments)) || this;
        }
        return (
          Util.__extends(Editor, _super),
          (Editor.prototype.obfuscate = function (instance) {
            var destRec = this.buildURL(instance);
            return destRec && destRec.getRawHostname() in index
              ? index[destRec.getRawHostname()]
              : instance;
          }),
          Editor
        );
      })(_UiIcon['default']);
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, __webpack_require__) {
      /** @type {number} */
      exports.__esModule = 1;
      var Util = __webpack_require__(0);
      var _UiIcon = __webpack_require__(1);
      var _DocumentFragment = __webpack_require__(66);
      var LinkCreate = (function (_super) {
        /**
         * @return {?}
         */
        function Editor() {
          return (null !== _super && _super.apply(this, arguments)) || this;
        }
        return (
          Util.__extends(Editor, _super),
          (Editor.prototype.collectData = function () {
            return Util.__awaiter(this, void 0, void 0, function () {
              var value;
              return Util.__generator(this, function () {
                return (
                  (value = window.location ? window.location.href : null),
                  [
                    2,
                    {
                      referrer: _DocumentFragment['default'].obfuscate(document.referrer),
                      userAgent: navigator.userAgent,
                      location: _DocumentFragment['default'].obfuscate(value),
                      webDriver:
                        'boolean' == typeof navigator.webdriver ? navigator.webdriver : null,
                    },
                  ]
                );
              });
            });
          }),
          (Editor.collectorName = 'browser'),
          Editor
        );
      })(_UiIcon['default']);
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, Class) {
      /** @type {number} */
      exports.__esModule = 1;
      var Util = Class(0);
      var Bar = Class(1);
      var LinkCreate = (function (_super) {
        /**
         * @return {?}
         */
        function p() {
          return (null !== _super && _super.apply(this, arguments)) || this;
        }
        return (
          Util.__extends(p, _super),
          (p.prototype.collectData = function () {
            return Util.__awaiter(this, void 0, void 0, function () {
              return Util.__generator(this, function () {
                return [
                  2,
                  {
                    math: {
                      tan: '' + Math.tan(p.CONSTANT),
                      sin: '' + Math.sin(p.CONSTANT),
                      cos: '' + Math.cos(p.CONSTANT),
                    },
                  },
                ];
              });
            });
          }),
          (p.CONSTANT = -1e300),
          (p.collectorName = 'math'),
          p
        );
      })(Bar['default']);
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, Class) {
      /** @type {number} */
      exports.__esModule = 1;
      var Util = Class(0);
      var Bar = Class(1);
      var LinkCreate = (function (_super) {
        /**
         * @return {?}
         */
        function f() {
          var jaws = _super.call(this) || this;
          return (jaws.canvas = document.createElement('canvas')), jaws;
        }
        return (
          Util.__extends(f, _super),
          (f.prototype.collectData = function () {
            return Util.__awaiter(this, void 0, void 0, function () {
              var gl;
              var extensionDebugRendererInfo;
              return Util.__generator(this, function () {
                if (!this.canvas) {
                  return [2, {}];
                }
                try {
                  (gl = this.canvas.getContext('experimental-webgl')).viewportWidth =
                    this.canvas.width;
                  gl.viewportHeight = this.canvas.height;
                } catch (a) {
                  return [
                    2,
                    {
                      gpu: null,
                    },
                  ];
                }
                return (extensionDebugRendererInfo = gl.getExtension(f.WEBGL_DEBUG_EXTENSION))
                  ? [
                      2,
                      {
                        gpu: {
                          vendor: gl.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL),
                          model: gl.getParameter(
                            extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL
                          ),
                          extensions: gl.getSupportedExtensions(),
                        },
                      },
                    ]
                  : [
                      2,
                      {
                        gpu: {
                          vendor: gl.getParameter(gl.VENDOR),
                          model: gl.getParameter(gl.RENDERER),
                          extensions: gl.getSupportedExtensions(),
                        },
                      },
                    ];
              });
            });
          }),
          (f.WEBGL_DEBUG_EXTENSION = 'WEBGL_debug_renderer_info'),
          (f.collectorName = 'gpu'),
          f
        );
      })(Bar['default']);
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, __webpack_require__) {
      /** @type {number} */
      exports.__esModule = 1;
      var Util = __webpack_require__(0);
      var _UiIcon = __webpack_require__(1);
      var LinkCreate = (function (_super) {
        /**
         * @return {?}
         */
        function Editor() {
          return (null !== _super && _super.apply(this, arguments)) || this;
        }
        return (
          Util.__extends(Editor, _super),
          (Editor.prototype.normalizeDntValue = function (personLookupResult) {
            switch (personLookupResult) {
              case 1:
              case 1:
              case '1':
              case 'yes':
                return 1;
              case 0:
              case 0:
              case '0':
              case 'no':
                return 0;
              default:
                return null;
            }
          }),
          (Editor.prototype.collectData = function () {
            return Util.__awaiter(this, void 0, void 0, function () {
              var colordata;
              var i;
              var r;
              return Util.__generator(this, function () {
                /** @type {!Array} */
                colordata = [navigator.doNotTrack, navigator.msDoNotTrack, window.doNotTrack];
                /** @type {number} */
                i = 0;
                for (; i < colordata.length; i++) {
                  if ((r = colordata[i]) !== undefined) {
                    return [
                      2,
                      {
                        dnt: this.normalizeDntValue(r),
                      },
                    ];
                  }
                }
                return [2, {}];
              });
            });
          }),
          (Editor.collectorName = 'dnt'),
          Editor
        );
      })(_UiIcon['default']);
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, __webpack_require__) {
      /** @type {number} */
      exports.__esModule = 1;
      var Util = __webpack_require__(0);
      var _UiIcon = __webpack_require__(1);
      var LinkCreate = (function (_super) {
        /**
         * @return {?}
         */
        function config() {
          return (null !== _super && _super.apply(this, arguments)) || this;
        }
        return (
          Util.__extends(config, _super),
          (config.prototype.cssCapabilities = function () {
            var conf_shortcuts_icon = {};
            /** @type {!Element} */
            var o = document.createElement('div');
            /** @type {number} */
            var layer_i = 0;
            /** @type {!Array} */
            var crossfilterable_layers = config.CSS_PROPERTIES;
            for (; layer_i < crossfilterable_layers.length; layer_i++) {
              var layer = crossfilterable_layers[layer_i];
              /** @type {!Array} */
              var allLayers = [layer];
              /** @type {number} */
              var i = 0;
              /** @type {!Array} */
              var curve = config.CSS_PREFIXES;
              for (; i < curve.length; i++) {
                var a = curve[i];
                allLayers.push(a + layer.charAt(0).toUpperCase() + layer.slice(1));
              }
              /** @type {number} */
              var j = 0;
              /** @type {!Array} */
              var handlersIndex = allLayers;
              for (; j < handlersIndex.length; j++) {
                var i = handlersIndex[j];
                if ('' === o.style[i]) {
                  /** @type {number} */
                  conf_shortcuts_icon[i] = 1;
                  break;
                }
              }
            }
            return conf_shortcuts_icon;
          }),
          (config.prototype.jsCapabilities = function () {
            /** @type {string} */
            var d = 'disabled';
            try {
              /** @type {string} */
              d = window.localStorage
                ? 'supported'
                : window.localStorage === undefined
                ? 'unsupported'
                : 'disabled';
            } catch (t) {}
            return {
              audio: !!document.createElement('audio').canPlayType,
              geolocation: !!navigator.geolocation,
              localStorage: d,
              touch: 'ontouchend' in window,
              video: !!document.createElement('video').canPlayType,
              webWorker: !!window.Worker,
            };
          }),
          (config.prototype.collectData = function () {
            return Util.__awaiter(this, void 0, void 0, function () {
              var remainingSec;
              return Util.__generator(this, function () {
                return (
                  (remainingSec = new Date().getTime()),
                  [
                    2,
                    {
                      capabilities: {
                        css: this.cssCapabilities(),
                        js: this.jsCapabilities(),
                        elapsed: new Date().getTime() - remainingSec,
                      },
                    },
                  ]
                );
              });
            });
          }),
          (config.CSS_PREFIXES = ['Webkit', 'Moz', 'O', 'ms', 'khtml']),
          (config.CSS_PROPERTIES = [
            'textShadow',
            'textStroke',
            'boxShadow',
            'borderRadius',
            'borderImage',
            'opacity',
            'transform',
            'transform3d',
            'transition',
          ]),
          (config.collectorName = 'capabilities'),
          config
        );
      })(_UiIcon['default']);
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, _interopRequireDefault) {
      /** @type {number} */
      exports.__esModule = 1;
      var Util = _interopRequireDefault(0);
      var _bitmap2 = _interopRequireDefault(26);
      var _render2 = _interopRequireDefault(25);
      var _IotfDevice = _interopRequireDefault(24);
      var _IotfManagedDevice = _interopRequireDefault(23);
      var _IotfGateway = _interopRequireDefault(22);
      var _HTMLParser = _interopRequireDefault(63);
      var _DocumentFragment = _interopRequireDefault(61);
      var _omi2 = _interopRequireDefault(15);
      var _AnchorElement = _interopRequireDefault(54);
      var _HTMLSerializer = _interopRequireDefault(53);
      var _IotfManagedGateway = _interopRequireDefault(14);
      var _IotfApplication = _interopRequireDefault(13);
      var _format2 = _interopRequireDefault(52);
      var _DeviceClient2 = _interopRequireDefault(12);
      var _voidMap2 = _interopRequireDefault(51);
      var _GatewayClient2 = _interopRequireDefault(11);
      var _nodeBtoa = _interopRequireDefault(2);
      var _Range = _interopRequireDefault(3);
      var _art2 = _interopRequireDefault(10);
      var _stream3 = _interopRequireDefault(19);
      var LinkCreate = (function (_super) {
        /**
         * @param {!Object} params
         * @param {?} name
         * @param {?} value
         * @return {?}
         */
        function obj(params, name, value) {
          var data = _super.call(this, name, value) || this;
          /** @type {!Object} */
          data.form = params;
          var resolvedInput = new _Range['default'](data.form).querySelector(
            'input[name="' + obj.FORM_INPUT_NAME + '"]'
          );
          return (data.input = resolvedInput || data.createMetadataInput()), data;
        }
        return (
          Util.__extends(obj, _super),
          (obj.prototype.createMetadataInput = function () {
            /** @type {!Element} */
            var container = document.createElement('input');
            return (
              (container.name = obj.FORM_INPUT_NAME),
              (container.type = obj.FORM_INPUT_TYPE),
              this.form.appendChild(container),
              container
            );
          }),
          (obj.prototype.doProfile = function () {
            var tcReporter = this;
            new _nodeBtoa['default'](this.form).addEventListener('submit', function () {
              tcReporter.report();
            });
            this.setupPeriodicReportingCallback();
          }),
          (obj.prototype.setupPeriodicReportingCallback = function () {
            if (this.periodicReportingIdleCallback) {
              this.periodicReportingIdleCallback.clear();
              /** @type {null} */
              this.periodicReportingIdleCallback = null;
            }
            var tcReporter = this;
            this.periodicReportingIdleCallback = new _stream3['default'](
              function () {
                tcReporter.report();
                tcReporter.setupPeriodicReportingCallback();
              },
              obj.MAXIMUM_REPORT_INTERVAL_MS,
              obj.MINIMUM_REPORT_INTERVAL_MS
            );
          }),
          (obj.prototype.report = function () {
            return Util.__awaiter(this, void 0, void 0, function () {
              var frameIndex;
              return Util.__generator(this, function (_context) {
                switch (_context.label) {
                  case 0:
                    return [4, this.collect()];
                  case 1:
                    return (frameIndex = _context.sent()), (this.input.value = frameIndex), [2];
                }
              });
            });
          }),
          (obj.prototype.stop = function () {
            var tcReporter = this;
            if (this.periodicReportingIdleCallback) {
              this.periodicReportingIdleCallback.clear();
              /** @type {null} */
              this.periodicReportingIdleCallback = null;
            }
            new _nodeBtoa['default'](this.form).removeEventListener('submit', function () {
              tcReporter.report();
            });
          }),
          (obj.FORM_INPUT_NAME = 'metadata1'),
          (obj.FORM_INPUT_TYPE = 'hidden'),
          (obj.MINIMUM_REPORT_INTERVAL_MS = 1000),
          (obj.MAXIMUM_REPORT_INTERVAL_MS = 2500),
          (obj.CAPTCHA_FIELDS = [
            '#ap_captcha_guess',
            '#auth-captcha-guess',
            '.fwcim-captcha-guess',
          ]),
          (obj.CAPTCHA_REFRESH_LINKS = [
            '.fwcim-captcha-refresh',
            '#ap_captcha_refresh_link',
            '#auth-captcha-refresh-link',
            '#auth-refresh-audio',
            '#auth-switch-captcha-to-audio',
            '#auth-switch-captcha-to-image',
          ]),
          (obj.COLLECTORS = _art2['default'].COLLECTORS.concat([
            function () {
              return new _IotfManagedGateway['default']({
                key: 'start',
              });
            },
            function () {
              return new _GatewayClient2['default']();
            },
            function () {
              return new _omi2['default']();
            },
            function () {
              return new _IotfApplication['default']();
            },
            function () {
              return new _IotfGateway['default']();
            },
            function () {
              return new _bitmap2['default']();
            },
            function () {
              return new _IotfDevice['default']();
            },
            function () {
              return new _render2['default']();
            },
            function () {
              return new _IotfManagedDevice['default']();
            },
            function (data) {
              return new _voidMap2['default']({
                form: data.form,
              });
            },
            function (data) {
              return new _AnchorElement['default']({
                form: data.form,
                cycleBuffer: 10,
              });
            },
            function (data) {
              return new _HTMLParser['default']({
                form: data.form,
              });
            },
            function (data) {
              return new _DocumentFragment['default']({
                form: data.form,
                captchaFieldsSelector: obj.CAPTCHA_FIELDS.join(', '),
                captchaRefreshLinksSelector: obj.CAPTCHA_REFRESH_LINKS.join(', '),
              });
            },
            function () {
              return new _format2['default']();
            },
            function (radio) {
              var form = radio.form;
              return new _HTMLSerializer['default']({
                form: form,
              });
            },
            function () {
              return new _DeviceClient2['default']({
                key: 'end',
              });
            },
          ])),
          obj
        );
      })(_art2['default']);
      exports['default'] = LinkCreate;
    },
    function () {
      /** @type {number} */
      exports.__esModule = 1;
      var LinkCreate = (function () {
        /**
         * @return {undefined}
         */
        function LocaTable() {}
        return (
          (LocaTable.prototype.encode = function (str) {
            /** @type {!Array} */
            var strs = [];
            /** @type {number} */
            var i = 0;
            for (; i < str.length; i++) {
              var arg = str.charCodeAt(i);
              if (arg < 128) {
                strs.push(String.fromCharCode(arg));
              } else {
                if (arg >= 128 && arg < 2048) {
                  strs.push(String.fromCharCode((arg >> 6) | 192));
                  strs.push(String.fromCharCode((63 & arg) | 128));
                } else {
                  strs.push(String.fromCharCode((arg >> 12) | 224));
                  strs.push(String.fromCharCode(((arg >> 6) & 63) | 128));
                  strs.push(String.fromCharCode((63 & arg) | 128));
                }
              }
            }
            return strs.join('');
          }),
          LocaTable
        );
      })();
      exports['default'] = LinkCreate;
    },
    function () {
      /** @type {number} */
      exports.__esModule = 1;
      var LinkCreate = (function () {
        /**
         * @return {undefined}
         */
        function self() {}
        return (
          (self.prototype.encode = function (a) {
            return [
              self.ALPHABET.charAt((a >>> 28) & 15),
              self.ALPHABET.charAt((a >>> 24) & 15),
              self.ALPHABET.charAt((a >>> 20) & 15),
              self.ALPHABET.charAt((a >>> 16) & 15),
              self.ALPHABET.charAt((a >>> 12) & 15),
              self.ALPHABET.charAt((a >>> 8) & 15),
              self.ALPHABET.charAt((a >>> 4) & 15),
              self.ALPHABET.charAt(15 & a),
            ].join('');
          }),
          (self.ALPHABET = '0123456789ABCDEF'),
          self
        );
      })();
      exports['default'] = LinkCreate;
    },
    function () {
      !(function (self) {
        /**
         * @param {string} name
         * @return {?}
         */
        function normalizeName(name) {
          if (
            ('string' != typeof name && (name = String(name)),
            /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name))
          ) {
            throw new TypeError('Invalid character in header field name');
          }
          return name.toLowerCase();
        }
        /**
         * @param {string} name
         * @return {?}
         */
        function normalizeValue(name) {
          return 'string' != typeof name && (name = String(name)), name;
        }
        /**
         * @param {!Array} items
         * @return {?}
         */
        function each(items) {
          var iterable = {
            next: function () {
              var value = items.shift();
              return {
                done: value === undefined,
                value: value,
              };
            },
          };
          return (
            support.iterable &&
              (iterable[Symbol.iterator] = function () {
                return iterable;
              }),
            iterable
          );
        }
        /**
         * @param {(Object|string)} headers
         * @return {undefined}
         */
        function Headers(headers) {
          this.map = {};
          if (headers instanceof Headers) {
            headers.forEach(function (input_name, value) {
              this.append(value, input_name);
            }, this);
          } else {
            if (Array.isArray(headers)) {
              headers.forEach(function (header) {
                this.append(header[0], header[1]);
              }, this);
            } else {
              if (headers) {
                Object.getOwnPropertyNames(headers).forEach(function (name) {
                  this.append(name, headers[name]);
                }, this);
              }
            }
          }
        }
        /**
         * @param {?} body
         * @return {?}
         */
        function consumed(body) {
          if (body.bodyUsed) {
            return Promise.reject(new TypeError('Already read'));
          }
          /** @type {number} */
          body.bodyUsed = 1;
        }
        /**
         * @param {!Object} options
         * @return {?}
         */
        function require(options) {
          return new Promise(function (fileCallback, failure) {
            /**
             * @return {undefined}
             */
            options.onload = function () {
              fileCallback(options.result);
            };
            /**
             * @return {undefined}
             */
            options.onerror = function () {
              failure(options.error);
            };
          });
        }
        /**
         * @param {?} value
         * @return {?}
         */
        function load(value) {
          /** @type {!FileReader} */
          var f = new FileReader();
          var result = require(f);
          return f.readAsArrayBuffer(value), result;
        }
        /**
         * @param {!Object} buf
         * @return {?}
         */
        function bufferClone(buf) {
          if (buf.slice) {
            return buf.slice(0);
          }
          /** @type {!Uint8Array} */
          var result = new Uint8Array(buf.byteLength);
          return result.set(new Uint8Array(buf)), result.buffer;
        }
        /**
         * @return {?}
         */
        function Body() {
          return (
            (this.bodyUsed = 0),
            (this._initBody = function (body) {
              if (((this._bodyInit = body), body)) {
                if ('string' == typeof body) {
                  /** @type {string} */
                  this._bodyText = body;
                } else {
                  if (support.blob && Blob.prototype.isPrototypeOf(body)) {
                    /** @type {string} */
                    this._bodyBlob = body;
                  } else {
                    if (support.formData && FormData.prototype.isPrototypeOf(body)) {
                      /** @type {string} */
                      this._bodyFormData = body;
                    } else {
                      if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                        this._bodyText = body.toString();
                      } else {
                        if (support.arrayBuffer && support.blob && isDataView(body)) {
                          this._bodyArrayBuffer = bufferClone(body.buffer);
                          /** @type {!Blob} */
                          this._bodyInit = new Blob([this._bodyArrayBuffer]);
                        } else {
                          if (
                            !support.arrayBuffer ||
                            (!ArrayBuffer.prototype.isPrototypeOf(body) && !isArrayBufferView(body))
                          ) {
                            throw new Error('unsupported BodyInit type');
                          }
                          this._bodyArrayBuffer = bufferClone(body);
                        }
                      }
                    }
                  }
                }
              } else {
                /** @type {string} */
                this._bodyText = '';
              }
              if (!this.headers.get('content-type')) {
                if ('string' == typeof body) {
                  this.headers.set('content-type', 'text/plain;charset=UTF-8');
                } else {
                  if (this._bodyBlob && this._bodyBlob.type) {
                    this.headers.set('content-type', this._bodyBlob.type);
                  } else {
                    if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                      this.headers.set(
                        'content-type',
                        'application/x-www-form-urlencoded;charset=UTF-8'
                      );
                    }
                  }
                }
              }
            }),
            support.blob &&
              ((this.blob = function () {
                var rejected = consumed(this);
                if (rejected) {
                  return rejected;
                }
                if (this._bodyBlob) {
                  return Promise.resolve(this._bodyBlob);
                }
                if (this._bodyArrayBuffer) {
                  return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                }
                if (this._bodyFormData) {
                  throw new Error('could not read FormData body as blob');
                }
                return Promise.resolve(new Blob([this._bodyText]));
              }),
              (this.arrayBuffer = function () {
                return this._bodyArrayBuffer
                  ? consumed(this) || Promise.resolve(this._bodyArrayBuffer)
                  : this.blob().then(load);
              })),
            (this.text = function () {
              var e;
              var reader;
              var r;
              var rejected = consumed(this);
              if (rejected) {
                return rejected;
              }
              if (this._bodyBlob) {
                return (
                  (e = this._bodyBlob),
                  (r = require((reader = new FileReader()))),
                  reader.readAsText(e),
                  r
                );
              }
              if (this._bodyArrayBuffer) {
                return Promise.resolve(
                  (function (signature) {
                    /** @type {!Uint8Array} */
                    var result = new Uint8Array(signature);
                    /** @type {!Array} */
                    var r = new Array(result.length);
                    /** @type {number} */
                    var i = 0;
                    for (; i < result.length; i++) {
                      /** @type {string} */
                      r[i] = String.fromCharCode(result[i]);
                    }
                    return r.join('');
                  })(this._bodyArrayBuffer)
                );
              }
              if (this._bodyFormData) {
                throw new Error('could not read FormData body as text');
              }
              return Promise.resolve(this._bodyText);
            }),
            support.formData &&
              (this.formData = function () {
                return this.text().then(text2formData);
              }),
            (this.json = function () {
              return this.text().then(JSON.parse);
            }),
            this
          );
        }
        /**
         * @param {!Object} input
         * @param {!Object} options
         * @return {undefined}
         */
        function Request(input, options) {
          var none;
          var v;
          var body = (options = options || {}).body;
          if (input instanceof Request) {
            if (input.bodyUsed) {
              throw new TypeError('Already read');
            }
            this.url = input.url;
            this.credentials = input.credentials;
            if (!options.headers) {
              this.headers = new Headers(input.headers);
            }
            this.method = input.method;
            this.mode = input.mode;
            if (!(body || null == input._bodyInit)) {
              body = input._bodyInit;
              /** @type {number} */
              input.bodyUsed = 1;
            }
          } else {
            /** @type {string} */
            this.url = String(input);
          }
          if (
            ((this.credentials = options.credentials || this.credentials || 'omit'),
            (!options.headers && this.headers) || (this.headers = new Headers(options.headers)),
            (this.method =
              ((v = (none = options.method || this.method || 'GET').toUpperCase()),
              methods.indexOf(v) > -1 ? v : none)),
            (this.mode = options.mode || this.mode || null),
            (this.referrer = null),
            ('GET' === this.method || 'HEAD' === this.method) && body)
          ) {
            throw new TypeError('Body not allowed for GET or HEAD requests');
          }
          this._initBody(body);
        }
        /**
         * @param {!Object} body
         * @return {?}
         */
        function text2formData(body) {
          /** @type {!FormData} */
          var form = new FormData();
          return (
            body
              .trim()
              .split('&')
              .forEach(function (clusterShardData) {
                if (clusterShardData) {
                  var headersAndBody = clusterShardData.split('=');
                  var url = headersAndBody.shift().replace(/\+/g, ' ');
                  var filePath = headersAndBody.join('=').replace(/\+/g, ' ');
                  form.append(decodeURIComponent(url), decodeURIComponent(filePath));
                }
              }),
            form
          );
        }
        /**
         * @param {string} bodyInit
         * @param {!Object} options
         * @return {undefined}
         */
        function Response(bodyInit, options) {
          if (!options) {
            options = {};
          }
          /** @type {string} */
          this.type = 'default';
          this.status = options.status === undefined ? 200 : options.status;
          /** @type {boolean} */
          this.ok = this.status >= 200 && this.status < 300;
          this.statusText = 'statusText' in options ? options.statusText : 'OK';
          this.headers = new Headers(options.headers);
          this.url = options.url || '';
          this._initBody(bodyInit);
        }
        if (!self.fetch) {
          var support = {
            searchParams: 'URLSearchParams' in self,
            iterable: 'Symbol' in self && 'iterator' in Symbol,
            blob:
              'FileReader' in self &&
              'Blob' in self &&
              (function () {
                try {
                  return new Blob(), 1;
                } catch (t) {
                  return 0;
                }
              })(),
            formData: 'FormData' in self,
            arrayBuffer: 'ArrayBuffer' in self,
          };
          if (support.arrayBuffer) {
            /** @type {!Array} */
            var orderedPaneIds = [
              '[object Int8Array]',
              '[object Uint8Array]',
              '[object Uint8ClampedArray]',
              '[object Int16Array]',
              '[object Uint16Array]',
              '[object Int32Array]',
              '[object Uint32Array]',
              '[object Float32Array]',
              '[object Float64Array]',
            ];
            /**
             * @param {string} obj
             * @return {?}
             */
            var isDataView = function (obj) {
              return obj && DataView.prototype.isPrototypeOf(obj);
            };
            /** @type {function(*): boolean} */
            var isArrayBufferView =
              ArrayBuffer.isView ||
              function (id) {
                return id && orderedPaneIds.indexOf(Object.prototype.toString.call(id)) > -1;
              };
          }
          /**
           * @param {string} name
           * @param {string} value
           * @return {undefined}
           */
          Headers.prototype.append = function (name, value) {
            name = normalizeName(name);
            value = normalizeValue(value);
            var oldValue = this.map[name];
            this.map[name] = oldValue ? oldValue + ',' + value : value;
          };
          /**
           * @param {string} name
           * @return {undefined}
           */
          Headers.prototype['delete'] = function (name) {
            delete this.map[normalizeName(name)];
          };
          /**
           * @param {string} name
           * @return {?}
           */
          Headers.prototype.get = function (name) {
            return (name = normalizeName(name)), this.has(name) ? this.map[name] : null;
          };
          /**
           * @param {string} name
           * @return {?}
           */
          Headers.prototype.has = function (name) {
            return this.map.hasOwnProperty(normalizeName(name));
          };
          /**
           * @param {?} name
           * @param {string} value
           * @return {undefined}
           */
          Headers.prototype.set = function (name, value) {
            this.map[normalizeName(name)] = normalizeValue(value);
          };
          /**
           * @param {!Function} callback
           * @param {?} thisp
           * @return {undefined}
           */
          Headers.prototype.forEach = function (callback, thisp) {
            var i;
            for (i in this.map) {
              if (this.map.hasOwnProperty(i)) {
                callback.call(thisp, this.map[i], i, this);
              }
            }
          };
          /**
           * @return {?}
           */
          Headers.prototype.keys = function () {
            /** @type {!Array} */
            var items = [];
            return (
              this.forEach(function (canCreateDiscussions, sSeparator) {
                items.push(sSeparator);
              }),
              each(items)
            );
          };
          /**
           * @return {?}
           */
          Headers.prototype.values = function () {
            /** @type {!Array} */
            var items = [];
            return (
              this.forEach(function (sSeparator) {
                items.push(sSeparator);
              }),
              each(items)
            );
          };
          /**
           * @return {?}
           */
          Headers.prototype.entries = function () {
            /** @type {!Array} */
            var items = [];
            return (
              this.forEach(function (name, i) {
                items.push([i, name]);
              }),
              each(items)
            );
          };
          if (support.iterable) {
            /** @type {function(): ?} */
            Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
          }
          /** @type {!Array} */
          var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
          /**
           * @return {?}
           */
          Request.prototype.clone = function () {
            return new Request(this, {
              body: this._bodyInit,
            });
          };
          Body.call(Request.prototype);
          Body.call(Response.prototype);
          /**
           * @return {?}
           */
          Response.prototype.clone = function () {
            return new Response(this._bodyInit, {
              status: this.status,
              statusText: this.statusText,
              headers: new Headers(this.headers),
              url: this.url,
            });
          };
          /**
           * @return {?}
           */
          Response.error = function () {
            var response = new Response(null, {
              status: 0,
              statusText: '',
            });
            return (response.type = 'error'), response;
          };
          /** @type {!Array} */
          var optForFields = [301, 302, 303, 307, 308];
          /**
           * @param {string} e
           * @param {number} name
           * @return {?}
           */
          Response.redirect = function (e, name) {
            if (-1 === optForFields.indexOf(name)) {
              throw new RangeError('Invalid status code');
            }
            return new Response(null, {
              status: name,
              headers: {
                location: e,
              },
            });
          };
          /** @type {function((Object|string)): undefined} */
          self.Headers = Headers;
          /** @type {function(!Object, !Object): undefined} */
          self.Request = Request;
          /** @type {function(string, !Object): undefined} */
          self.Response = Response;
          /**
           * @param {?} method
           * @param {boolean} url
           * @return {?}
           */
          self.fetch = function (method, url) {
            return new Promise(function (resolve, reject) {
              var request = new Request(method, url);
              /** @type {!XMLHttpRequest} */
              var xhr = new XMLHttpRequest();
              /**
               * @return {undefined}
               */
              xhr.onload = function () {
                var scriptQuery;
                var headers;
                var options = {
                  status: xhr.status,
                  statusText: xhr.statusText,
                  headers:
                    ((scriptQuery = xhr.getAllResponseHeaders() || ''),
                    (headers = new Headers()),
                    scriptQuery
                      .replace(/\r?\n[\t ]+/g, ' ')
                      .split(/\r?\n/)
                      .forEach(function (clusterShardData) {
                        /** @type {!Array<string>} */
                        var headersAndBody = clusterShardData.split(':');
                        /** @type {string} */
                        var key = headersAndBody.shift().trim();
                        if (key) {
                          /** @type {string} */
                          var value = headersAndBody.join(':').trim();
                          headers.append(key, value);
                        }
                      }),
                    headers),
                };
                options.url =
                  'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
                /** @type {(Object|null|string)} */
                var tres = 'response' in xhr ? xhr.response : xhr.responseText;
                resolve(new Response(tres, options));
              };
              /**
               * @return {undefined}
               */
              xhr.onerror = function () {
                reject(new TypeError('Network request failed'));
              };
              /**
               * @return {undefined}
               */
              xhr.ontimeout = function () {
                reject(new TypeError('Network request failed'));
              };
              xhr.open(request.method, request.url, 1);
              if ('include' === request.credentials) {
                /** @type {number} */
                xhr.withCredentials = 1;
              } else {
                if ('omit' === request.credentials) {
                  /** @type {number} */
                  xhr.withCredentials = 0;
                }
              }
              if ('responseType' in xhr && support.blob) {
                /** @type {string} */
                xhr.responseType = 'blob';
              }
              request.headers.forEach(function (type, i) {
                xhr.setRequestHeader(i, type);
              });
              xhr.send('undefined' == typeof request._bodyInit ? null : request._bodyInit);
            });
          };
          /** @type {number} */
          self.fetch.polyfill = 1;
        }
      })('undefined' != typeof self ? self : this);
    },
    function () {
      /** @type {number} */
      exports.__esModule = 1;
      var LinkCreate = (function () {
        /**
         * @param {?} data
         * @param {!Array} options
         * @return {undefined}
         */
        function NuGraph(data, options) {
          this.fwcim = data;
          /** @type {!Array} */
          this.commands = options;
        }
        return (
          (NuGraph.prototype.run = function () {
            /** @type {number} */
            var i = 0;
            for (; i < this.commands.length; i++) {
              var commandData = this.commands[i];
              var command = commandData[0];
              if ('function' == typeof this.fwcim[command]) {
                this.fwcim[command].apply(this.fwcim, commandData.slice(1));
              }
            }
          }),
          NuGraph
        );
      })();
      exports['default'] = LinkCreate;
    },
    function (mixin) {
      /**
       * @return {?}
       */
      function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
      }
      /**
       * @return {?}
       */
      function defaultClearTimeout() {
        throw new Error('clearTimeout has not been defined');
      }
      /**
       * @param {!Function} fun
       * @return {?}
       */
      function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
          return setTimeout(fun, 0);
        }
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          return (cachedSetTimeout = setTimeout), setTimeout(fun, 0);
        }
        try {
          return cachedSetTimeout(fun, 0);
        } catch (e) {
          try {
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e) {
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }
      /**
       * @param {?} marker
       * @return {?}
       */
      function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
          return clearTimeout(marker);
        }
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          return (cachedClearTimeout = clearTimeout), clearTimeout(marker);
        }
        try {
          return cachedClearTimeout(marker);
        } catch (e) {
          try {
            return cachedClearTimeout.call(null, marker);
          } catch (e) {
            return cachedClearTimeout.call(this, marker);
          }
        }
      }
      /**
       * @return {undefined}
       */
      function cleanUpNextTick() {
        if (Ct && currentQueue) {
          /** @type {number} */
          Ct = 0;
          if (currentQueue.length) {
            queue = currentQueue.concat(queue);
          } else {
            /** @type {number} */
            queueIndex = -1;
          }
          if (queue.length) {
            drainQueue();
          }
        }
      }
      /**
       * @return {undefined}
       */
      function drainQueue() {
        if (!Ct) {
          var timeout = runTimeout(cleanUpNextTick);
          /** @type {number} */
          Ct = 1;
          var len = queue.length;
          for (; len; ) {
            currentQueue = queue;
            /** @type {!Array} */
            queue = [];
            for (; ++queueIndex < len; ) {
              if (currentQueue) {
                currentQueue[queueIndex].run();
              }
            }
            /** @type {number} */
            queueIndex = -1;
            /** @type {number} */
            len = queue.length;
          }
          /** @type {null} */
          currentQueue = null;
          /** @type {number} */
          Ct = 0;
          runClearTimeout(timeout);
        }
      }
      /**
       * @param {(Object|string)} fun
       * @param {string} array
       * @return {undefined}
       */
      function Item(fun, array) {
        /** @type {(Object|string)} */
        this.fun = fun;
        /** @type {string} */
        this.array = array;
      }
      /**
       * @return {undefined}
       */
      function noop() {}
      var cachedSetTimeout;
      var cachedClearTimeout;
      var process = (mixin.exports = {});
      !(function () {
        try {
          /** @type {!Function} */
          cachedSetTimeout = 'function' == typeof setTimeout ? setTimeout : defaultSetTimout;
        } catch (t) {
          /** @type {function(): ?} */
          cachedSetTimeout = defaultSetTimout;
        }
        try {
          /** @type {!Function} */
          cachedClearTimeout =
            'function' == typeof clearTimeout ? clearTimeout : defaultClearTimeout;
        } catch (t) {
          /** @type {function(): ?} */
          cachedClearTimeout = defaultClearTimeout;
        }
      })();
      var currentQueue;
      /** @type {!Array} */
      var queue = [];
      /** @type {number} */
      var Ct = 0;
      /** @type {number} */
      var queueIndex = -1;
      /**
       * @param {!Function} fun
       * @return {undefined}
       */
      process.nextTick = function (fun) {
        /** @type {!Array} */
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          /** @type {number} */
          var i = 1;
          for (; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
          }
        }
        queue.push(new Item(fun, args));
        if (!(1 !== queue.length || Ct)) {
          runTimeout(drainQueue);
        }
      };
      /**
       * @return {undefined}
       */
      Item.prototype.run = function () {
        this.fun.apply(null, this.array);
      };
      /** @type {string} */
      process.title = 'browser';
      /** @type {number} */
      process.browser = 1;
      process.env = {};
      /** @type {!Array} */
      process.argv = [];
      /** @type {string} */
      process.version = '';
      process.versions = {};
      /** @type {function(): undefined} */
      process.on = noop;
      /** @type {function(): undefined} */
      process.addListener = noop;
      /** @type {function(): undefined} */
      process.once = noop;
      /** @type {function(): undefined} */
      process.off = noop;
      /** @type {function(): undefined} */
      process.removeListener = noop;
      /** @type {function(): undefined} */
      process.removeAllListeners = noop;
      /** @type {function(): undefined} */
      process.emit = noop;
      /** @type {function(): undefined} */
      process.prependListener = noop;
      /** @type {function(): undefined} */
      process.prependOnceListener = noop;
      /**
       * @return {?}
       */
      process.listeners = function () {
        return [];
      };
      /**
       * @return {?}
       */
      process.binding = function () {
        throw new Error('process.binding is not supported');
      };
      /**
       * @return {?}
       */
      process.cwd = function () {
        return '/';
      };
      /**
       * @return {?}
       */
      process.chdir = function () {
        throw new Error('process.chdir is not supported');
      };
      /**
       * @return {?}
       */
      process.umask = function () {
        return 0;
      };
    },
    function (module, canCreateDiscussions, __webpack_require__) {
      (function (val, type) {
        var __WEBPACK_AMD_DEFINE_RESULT__;
        !(function () {
          /**
           * @param {boolean} plaintextBuffer
           * @param {?} password
           * @return {undefined}
           */
          function Md5(plaintextBuffer, password) {
            if (password) {
              /** @type {number} */
              blocks[0] =
                blocks[16] =
                blocks[1] =
                blocks[2] =
                blocks[3] =
                blocks[4] =
                blocks[5] =
                blocks[6] =
                blocks[7] =
                blocks[8] =
                blocks[9] =
                blocks[10] =
                blocks[11] =
                blocks[12] =
                blocks[13] =
                blocks[14] =
                blocks[15] =
                  0;
              this.blocks = blocks;
            } else {
              /** @type {!Array} */
              this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            }
            if (plaintextBuffer) {
              /** @type {number} */
              this.h0 = 3238371032;
              /** @type {number} */
              this.h1 = 914150663;
              /** @type {number} */
              this.h2 = 812702999;
              /** @type {number} */
              this.h3 = 4144912697;
              /** @type {number} */
              this.h4 = 4290775857;
              /** @type {number} */
              this.h5 = 1750603025;
              /** @type {number} */
              this.h6 = 1694076839;
              /** @type {number} */
              this.h7 = 3204075428;
            } else {
              /** @type {number} */
              this.h0 = 1779033703;
              /** @type {number} */
              this.h1 = 3144134277;
              /** @type {number} */
              this.h2 = 1013904242;
              /** @type {number} */
              this.h3 = 2773480762;
              /** @type {number} */
              this.h4 = 1359893119;
              /** @type {number} */
              this.h5 = 2600822924;
              /** @type {number} */
              this.h6 = 528734635;
              /** @type {number} */
              this.h7 = 1541459225;
            }
            /** @type {number} */
            this.block = this.start = this.bytes = this.hBytes = 0;
            /** @type {number} */
            this.finalized = this.hashed = 0;
            /** @type {number} */
            this.first = 1;
            /** @type {boolean} */
            this.is224 = plaintextBuffer;
          }
          /**
           * @param {!Object} data
           * @param {number} source
           * @param {?} encoding
           * @return {undefined}
           */
          function init(data, source, encoding) {
            var i;
            /** @type {string} */
            var t = typeof data;
            if ('string' === t) {
              var k;
              /** @type {!Array} */
              var vertices = [];
              var tldCount = data.length;
              /** @type {number} */
              var offset = 0;
              /** @type {number} */
              i = 0;
              for (; i < tldCount; ++i) {
                if ((k = data.charCodeAt(i)) < 128) {
                  vertices[offset++] = k;
                } else {
                  if (k < 2048) {
                    /** @type {number} */
                    vertices[offset++] = 192 | (k >> 6);
                    /** @type {number} */
                    vertices[offset++] = 128 | (63 & k);
                  } else {
                    if (k < 55296 || k >= 57344) {
                      /** @type {number} */
                      vertices[offset++] = 224 | (k >> 12);
                      /** @type {number} */
                      vertices[offset++] = 128 | ((k >> 6) & 63);
                      /** @type {number} */
                      vertices[offset++] = 128 | (63 & k);
                    } else {
                      /** @type {number} */
                      k = 65536 + (((1023 & k) << 10) | (1023 & data.charCodeAt(++i)));
                      /** @type {number} */
                      vertices[offset++] = 240 | (k >> 18);
                      /** @type {number} */
                      vertices[offset++] = 128 | ((k >> 12) & 63);
                      /** @type {number} */
                      vertices[offset++] = 128 | ((k >> 6) & 63);
                      /** @type {number} */
                      vertices[offset++] = 128 | (63 & k);
                    }
                  }
                }
              }
              /** @type {!Array} */
              data = vertices;
            } else {
              if ('object' !== t) {
                throw new Error(lastErrorOutput);
              }
              if (null === data) {
                throw new Error(lastErrorOutput);
              }
              if (ARRAY_BUFFER && data.constructor === ArrayBuffer) {
                /** @type {!Uint8Array} */
                data = new Uint8Array(data);
              } else {
                if (!(Array.isArray(data) || (ARRAY_BUFFER && ArrayBuffer.isView(data)))) {
                  throw new Error(lastErrorOutput);
                }
              }
            }
            if (data.length > 64) {
              data = new Md5(source, 1).update(data).array();
            }
            /** @type {!Array} */
            var encKey = [];
            /** @type {!Array} */
            var pages = [];
            /** @type {number} */
            i = 0;
            for (; i < 64; ++i) {
              var tmp = data[i] || 0;
              /** @type {number} */
              encKey[i] = 92 ^ tmp;
              /** @type {number} */
              pages[i] = 54 ^ tmp;
            }
            Md5.call(this, source, encoding);
            this.update(pages);
            /** @type {!Array} */
            this.oKeyPad = encKey;
            /** @type {number} */
            this.inner = 1;
            this.sharedMemory = encoding;
          }
          /** @type {string} */
          var lastErrorOutput = 'input is invalid type';
          /** @type {boolean} */
          var isActive = 'object' == typeof window;
          var o = isActive ? window : {};
          if (o.JS_SHA256_NO_WINDOW) {
            /** @type {number} */
            isActive = 0;
          }
          /** @type {boolean} */
          var WEB_WORKER = !isActive && 'object' == typeof self;
          var NODE_JS =
            !o.JS_SHA256_NO_NODE_JS && 'object' == typeof val && val.versions && val.versions.node;
          if (NODE_JS) {
            o = type;
          } else {
            if (WEB_WORKER) {
              /** @type {!Window} */
              o = self;
            }
          }
          if (!(!o.JS_SHA256_NO_NODE_JS && Array.isArray)) {
            /**
             * @param {*} obj
             * @return {boolean}
             */
            Array.isArray = function (obj) {
              return '[object Array]' === Object.prototype.toString.call(obj);
            };
          }
          if (!(!ARRAY_BUFFER || (!o.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView))) {
            /**
             * @param {*} obj
             * @return {boolean}
             */
            ArrayBuffer.isView = function (obj) {
              return 'object' == typeof obj && obj.buffer && obj.buffer.constructor === ArrayBuffer;
            };
          }
          /**
           * @param {!Object} data
           * @return {?}
           */
          Md5.prototype.update = function (data) {
            if (!this.finalized) {
              var h;
              /** @type {string} */
              var type = typeof data;
              if ('string' !== type) {
                if ('object' !== type) {
                  throw new Error(lastErrorOutput);
                }
                if (null === data) {
                  throw new Error(lastErrorOutput);
                }
                if (ARRAY_BUFFER && data.constructor === ArrayBuffer) {
                  /** @type {!Uint8Array} */
                  data = new Uint8Array(data);
                } else {
                  if (!(Array.isArray(data) || (ARRAY_BUFFER && ArrayBuffer.isView(data)))) {
                    throw new Error(lastErrorOutput);
                  }
                }
                /** @type {number} */
                h = 1;
              }
              var code;
              var i;
              /** @type {number} */
              var index = 0;
              var pos = data.length;
              var blocks = this.blocks;
              for (; index < pos; ) {
                if (
                  (this.hashed &&
                    ((this.hashed = 0),
                    (blocks[0] = this.block),
                    (blocks[16] =
                      blocks[1] =
                      blocks[2] =
                      blocks[3] =
                      blocks[4] =
                      blocks[5] =
                      blocks[6] =
                      blocks[7] =
                      blocks[8] =
                      blocks[9] =
                      blocks[10] =
                      blocks[11] =
                      blocks[12] =
                      blocks[13] =
                      blocks[14] =
                      blocks[15] =
                        0)),
                  h)
                ) {
                  i = this.start;
                  for (; index < pos && i < 64; ++index) {
                    blocks[i >> 2] |= data[index] << SHIFT[3 & i++];
                  }
                } else {
                  i = this.start;
                  for (; index < pos && i < 64; ++index) {
                    if ((code = data.charCodeAt(index)) < 128) {
                      blocks[i >> 2] |= code << SHIFT[3 & i++];
                    } else {
                      if (code < 2048) {
                        blocks[i >> 2] |= (192 | (code >> 6)) << SHIFT[3 & i++];
                        blocks[i >> 2] |= (128 | (63 & code)) << SHIFT[3 & i++];
                      } else {
                        if (code < 55296 || code >= 57344) {
                          blocks[i >> 2] |= (224 | (code >> 12)) << SHIFT[3 & i++];
                          blocks[i >> 2] |= (128 | ((code >> 6) & 63)) << SHIFT[3 & i++];
                          blocks[i >> 2] |= (128 | (63 & code)) << SHIFT[3 & i++];
                        } else {
                          /** @type {number} */
                          code =
                            65536 + (((1023 & code) << 10) | (1023 & data.charCodeAt(++index)));
                          blocks[i >> 2] |= (240 | (code >> 18)) << SHIFT[3 & i++];
                          blocks[i >> 2] |= (128 | ((code >> 12) & 63)) << SHIFT[3 & i++];
                          blocks[i >> 2] |= (128 | ((code >> 6) & 63)) << SHIFT[3 & i++];
                          blocks[i >> 2] |= (128 | (63 & code)) << SHIFT[3 & i++];
                        }
                      }
                    }
                  }
                }
                this.lastByteIndex = i;
                this.bytes += i - this.start;
                if (i >= 64) {
                  this.block = blocks[16];
                  /** @type {number} */
                  this.start = i - 64;
                  this.hash();
                  /** @type {number} */
                  this.hashed = 1;
                } else {
                  this.start = i;
                }
              }
              return (
                this.bytes > 4294967295 &&
                  ((this.hBytes += (this.bytes / 4294967296) << 0),
                  (this.bytes = this.bytes % 4294967296)),
                this
              );
            }
          };
          /**
           * @return {undefined}
           */
          Md5.prototype.finalize = function () {
            if (!this.finalized) {
              /** @type {number} */
              this.finalized = 1;
              var blocks = this.blocks;
              var i = this.lastByteIndex;
              blocks[16] = this.block;
              blocks[i >> 2] |= EXTRA[3 & i];
              this.block = blocks[16];
              if (i >= 56) {
                if (!this.hashed) {
                  this.hash();
                }
                blocks[0] = this.block;
                /** @type {number} */
                blocks[16] =
                  blocks[1] =
                  blocks[2] =
                  blocks[3] =
                  blocks[4] =
                  blocks[5] =
                  blocks[6] =
                  blocks[7] =
                  blocks[8] =
                  blocks[9] =
                  blocks[10] =
                  blocks[11] =
                  blocks[12] =
                  blocks[13] =
                  blocks[14] =
                  blocks[15] =
                    0;
              }
              /** @type {number} */
              blocks[14] = (this.hBytes << 3) | (this.bytes >>> 29);
              /** @type {number} */
              blocks[15] = this.bytes << 3;
              this.hash();
            }
          };
          /**
           * @return {undefined}
           */
          Md5.prototype.hash = function () {
            var i;
            var values;
            var bt;
            var value;
            var s;
            var a00;
            var bit;
            var k;
            var channel;
            var a = this.h0;
            var b = this.h1;
            var c = this.h2;
            var d = this.h3;
            var r = this.h4;
            var e = this.h5;
            var y = this.h6;
            var t = this.h7;
            var blocks = this.blocks;
            /** @type {number} */
            i = 16;
            for (; i < 64; ++i) {
              /** @type {number} */
              values =
                (((s = blocks[i - 15]) >>> 7) | (s << 25)) ^ ((s >>> 18) | (s << 14)) ^ (s >>> 3);
              /** @type {number} */
              bt =
                (((s = blocks[i - 2]) >>> 17) | (s << 15)) ^ ((s >>> 19) | (s << 13)) ^ (s >>> 10);
              /** @type {number} */
              blocks[i] = (blocks[i - 16] + values + blocks[i - 7] + bt) << 0;
            }
            /** @type {number} */
            channel = b & c;
            /** @type {number} */
            i = 0;
            for (; i < 64; i = i + 4) {
              if (this.first) {
                if (this.is224) {
                  /** @type {number} */
                  a00 = 300032;
                  /** @type {number} */
                  t = ((s = blocks[0] - 1413257819) - 150054599) << 0;
                  /** @type {number} */
                  d = (s + 24177077) << 0;
                } else {
                  /** @type {number} */
                  a00 = 704751109;
                  /** @type {number} */
                  t = ((s = blocks[0] - 210244248) - 1521486534) << 0;
                  /** @type {number} */
                  d = (s + 143694565) << 0;
                }
                /** @type {number} */
                this.first = 0;
              } else {
                /** @type {number} */
                values =
                  ((a >>> 2) | (a << 30)) ^ ((a >>> 13) | (a << 19)) ^ ((a >>> 22) | (a << 10));
                /** @type {number} */
                value = (a00 = a & b) ^ (a & c) ^ channel;
                /** @type {number} */
                t =
                  (d +
                    (s =
                      t +
                      (bt =
                        ((r >>> 6) | (r << 26)) ^
                        ((r >>> 11) | (r << 21)) ^
                        ((r >>> 25) | (r << 7))) +
                      ((r & e) ^ (~r & y)) +
                      K[i] +
                      blocks[i])) <<
                  0;
                /** @type {number} */
                d = (s + (values + value)) << 0;
              }
              /** @type {number} */
              values =
                ((d >>> 2) | (d << 30)) ^ ((d >>> 13) | (d << 19)) ^ ((d >>> 22) | (d << 10));
              /** @type {number} */
              value = (bit = d & a) ^ (d & b) ^ a00;
              /** @type {number} */
              y =
                (c +
                  (s =
                    y +
                    (bt =
                      ((t >>> 6) | (t << 26)) ^
                      ((t >>> 11) | (t << 21)) ^
                      ((t >>> 25) | (t << 7))) +
                    ((t & r) ^ (~t & e)) +
                    K[i + 1] +
                    blocks[i + 1])) <<
                0;
              /** @type {number} */
              values =
                (((c = (s + (values + value)) << 0) >>> 2) | (c << 30)) ^
                ((c >>> 13) | (c << 19)) ^
                ((c >>> 22) | (c << 10));
              /** @type {number} */
              value = (k = c & d) ^ (c & a) ^ bit;
              /** @type {number} */
              e =
                (b +
                  (s =
                    e +
                    (bt =
                      ((y >>> 6) | (y << 26)) ^
                      ((y >>> 11) | (y << 21)) ^
                      ((y >>> 25) | (y << 7))) +
                    ((y & t) ^ (~y & r)) +
                    K[i + 2] +
                    blocks[i + 2])) <<
                0;
              /** @type {number} */
              values =
                (((b = (s + (values + value)) << 0) >>> 2) | (b << 30)) ^
                ((b >>> 13) | (b << 19)) ^
                ((b >>> 22) | (b << 10));
              /** @type {number} */
              value = (channel = b & c) ^ (b & d) ^ k;
              /** @type {number} */
              r =
                (a +
                  (s =
                    r +
                    (bt =
                      ((e >>> 6) | (e << 26)) ^
                      ((e >>> 11) | (e << 21)) ^
                      ((e >>> 25) | (e << 7))) +
                    ((e & y) ^ (~e & t)) +
                    K[i + 3] +
                    blocks[i + 3])) <<
                0;
              /** @type {number} */
              a = (s + (values + value)) << 0;
            }
            /** @type {number} */
            this.h0 = (this.h0 + a) << 0;
            /** @type {number} */
            this.h1 = (this.h1 + b) << 0;
            /** @type {number} */
            this.h2 = (this.h2 + c) << 0;
            /** @type {number} */
            this.h3 = (this.h3 + d) << 0;
            /** @type {number} */
            this.h4 = (this.h4 + r) << 0;
            /** @type {number} */
            this.h5 = (this.h5 + e) << 0;
            /** @type {number} */
            this.h6 = (this.h6 + y) << 0;
            /** @type {number} */
            this.h7 = (this.h7 + t) << 0;
          };
          /**
           * @return {?}
           */
          Md5.prototype.hex = function () {
            this.finalize();
            var h0 = this.h0;
            var h1 = this.h1;
            var h2 = this.h2;
            var h3 = this.h3;
            var s = this.h4;
            var i = this.h5;
            var o = this.h6;
            var a = this.h7;
            var uid =
              HEX_CHARS[(h0 >> 28) & 15] +
              HEX_CHARS[(h0 >> 24) & 15] +
              HEX_CHARS[(h0 >> 20) & 15] +
              HEX_CHARS[(h0 >> 16) & 15] +
              HEX_CHARS[(h0 >> 12) & 15] +
              HEX_CHARS[(h0 >> 8) & 15] +
              HEX_CHARS[(h0 >> 4) & 15] +
              HEX_CHARS[15 & h0] +
              HEX_CHARS[(h1 >> 28) & 15] +
              HEX_CHARS[(h1 >> 24) & 15] +
              HEX_CHARS[(h1 >> 20) & 15] +
              HEX_CHARS[(h1 >> 16) & 15] +
              HEX_CHARS[(h1 >> 12) & 15] +
              HEX_CHARS[(h1 >> 8) & 15] +
              HEX_CHARS[(h1 >> 4) & 15] +
              HEX_CHARS[15 & h1] +
              HEX_CHARS[(h2 >> 28) & 15] +
              HEX_CHARS[(h2 >> 24) & 15] +
              HEX_CHARS[(h2 >> 20) & 15] +
              HEX_CHARS[(h2 >> 16) & 15] +
              HEX_CHARS[(h2 >> 12) & 15] +
              HEX_CHARS[(h2 >> 8) & 15] +
              HEX_CHARS[(h2 >> 4) & 15] +
              HEX_CHARS[15 & h2] +
              HEX_CHARS[(h3 >> 28) & 15] +
              HEX_CHARS[(h3 >> 24) & 15] +
              HEX_CHARS[(h3 >> 20) & 15] +
              HEX_CHARS[(h3 >> 16) & 15] +
              HEX_CHARS[(h3 >> 12) & 15] +
              HEX_CHARS[(h3 >> 8) & 15] +
              HEX_CHARS[(h3 >> 4) & 15] +
              HEX_CHARS[15 & h3] +
              HEX_CHARS[(s >> 28) & 15] +
              HEX_CHARS[(s >> 24) & 15] +
              HEX_CHARS[(s >> 20) & 15] +
              HEX_CHARS[(s >> 16) & 15] +
              HEX_CHARS[(s >> 12) & 15] +
              HEX_CHARS[(s >> 8) & 15] +
              HEX_CHARS[(s >> 4) & 15] +
              HEX_CHARS[15 & s] +
              HEX_CHARS[(i >> 28) & 15] +
              HEX_CHARS[(i >> 24) & 15] +
              HEX_CHARS[(i >> 20) & 15] +
              HEX_CHARS[(i >> 16) & 15] +
              HEX_CHARS[(i >> 12) & 15] +
              HEX_CHARS[(i >> 8) & 15] +
              HEX_CHARS[(i >> 4) & 15] +
              HEX_CHARS[15 & i] +
              HEX_CHARS[(o >> 28) & 15] +
              HEX_CHARS[(o >> 24) & 15] +
              HEX_CHARS[(o >> 20) & 15] +
              HEX_CHARS[(o >> 16) & 15] +
              HEX_CHARS[(o >> 12) & 15] +
              HEX_CHARS[(o >> 8) & 15] +
              HEX_CHARS[(o >> 4) & 15] +
              HEX_CHARS[15 & o];
            return (
              this.is224 ||
                (uid =
                  uid +
                  (HEX_CHARS[(a >> 28) & 15] +
                    HEX_CHARS[(a >> 24) & 15] +
                    HEX_CHARS[(a >> 20) & 15] +
                    HEX_CHARS[(a >> 16) & 15] +
                    HEX_CHARS[(a >> 12) & 15] +
                    HEX_CHARS[(a >> 8) & 15] +
                    HEX_CHARS[(a >> 4) & 15] +
                    HEX_CHARS[15 & a])),
              uid
            );
          };
          /** @type {function(): ?} */
          Md5.prototype.toString = Md5.prototype.hex;
          /**
           * @return {?}
           */
          Md5.prototype.digest = function () {
            this.finalize();
            var h0 = this.h0;
            var h1 = this.h1;
            var h2 = this.h2;
            var h3 = this.h3;
            var s = this.h4;
            var i = this.h5;
            var o = this.h6;
            var a = this.h7;
            /** @type {!Array} */
            var newNodeLists = [
              (h0 >> 24) & 255,
              (h0 >> 16) & 255,
              (h0 >> 8) & 255,
              255 & h0,
              (h1 >> 24) & 255,
              (h1 >> 16) & 255,
              (h1 >> 8) & 255,
              255 & h1,
              (h2 >> 24) & 255,
              (h2 >> 16) & 255,
              (h2 >> 8) & 255,
              255 & h2,
              (h3 >> 24) & 255,
              (h3 >> 16) & 255,
              (h3 >> 8) & 255,
              255 & h3,
              (s >> 24) & 255,
              (s >> 16) & 255,
              (s >> 8) & 255,
              255 & s,
              (i >> 24) & 255,
              (i >> 16) & 255,
              (i >> 8) & 255,
              255 & i,
              (o >> 24) & 255,
              (o >> 16) & 255,
              (o >> 8) & 255,
              255 & o,
            ];
            return (
              this.is224 ||
                newNodeLists.push((a >> 24) & 255, (a >> 16) & 255, (a >> 8) & 255, 255 & a),
              newNodeLists
            );
          };
          /** @type {function(): ?} */
          Md5.prototype.array = Md5.prototype.digest;
          /**
           * @return {?}
           */
          Md5.prototype.arrayBuffer = function () {
            this.finalize();
            /** @type {!ArrayBuffer} */
            var pcmEncodedBuffer16k = new ArrayBuffer(this.is224 ? 28 : 32);
            /** @type {!DataView} */
            var decryptedView = new DataView(pcmEncodedBuffer16k);
            return (
              decryptedView.setUint32(0, this.h0),
              decryptedView.setUint32(4, this.h1),
              decryptedView.setUint32(8, this.h2),
              decryptedView.setUint32(12, this.h3),
              decryptedView.setUint32(16, this.h4),
              decryptedView.setUint32(20, this.h5),
              decryptedView.setUint32(24, this.h6),
              this.is224 || decryptedView.setUint32(28, this.h7),
              pcmEncodedBuffer16k
            );
          };
          init.prototype = new Md5();
          /**
           * @return {undefined}
           */
          init.prototype.finalize = function () {
            if ((Md5.prototype.finalize.call(this), this.inner)) {
              /** @type {number} */
              this.inner = 0;
              var data = this.array();
              Md5.call(this, this.is224, this.sharedMemory);
              this.update(this.oKeyPad);
              this.update(data);
              Md5.prototype.finalize.call(this);
            }
          };
          var exports = createMethod();
          exports.sha256 = exports;
          exports.sha224 = createMethod(1);
          exports.sha256.hmac = createHmacMethod();
          exports.sha224.hmac = createHmacMethod(1);
          if (COMMON_JS) {
            module.exports = exports;
          } else {
            o.sha256 = exports.sha256;
            o.sha224 = exports.sha224;
            if (AMD) {
              !((__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                return exports;
              }.call(exports, __webpack_require__, exports, module)),
              __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
                (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            }
          }
        })();
      }.call(this, __webpack_require__(32), __webpack_require__(4)));
    },
    function (canCreateDiscussions, exports, __webpack_require__) {
      /** @type {number} */
      exports.__esModule = 1;
      var hash = __webpack_require__(33);
      var LinkCreate = (function () {
        /**
         * @param {string} src
         * @return {undefined}
         */
        function InfoCommandHandler(src) {
          var brightColors = this;
          /** @type {string} */
          this.clientEndpoint = src;
          /** @type {!Array} */
          var $ = [
            'cbc62794911ff31b',
            '4aba82f7eb6c1f46',
            'b923405ba2c6a80a',
            '89df7e034ffe30b7',
            '20253cd8db8e4994',
            '2b12242f306cde1c',
            '8842c34f79f78667',
            'f77b4f6064c22577',
            '7764735c5d4d88ae',
            '93e4584d037704de',
            '961281ce5eace239',
            '8c06d4de1d737046',
            'a49016df6df8e729',
            '501a9f0d2cc8b375',
            '85d02de839b3f84f',
            '20b7d7fc9a51d933',
            '9e121458930b4b27',
            '3faa3827025ab346',
            'a6a29093d24484ef',
            '16f64ec25eae4431',
            'd5ba5dbdf6f9cd10',
            '02cd8bbf69bb5ae8',
            'ad2a542c84c7060f',
            'd0348826f00b8dab',
            '72eecef1af01ae02',
            'c06efa193037385e',
            '209a0e2b3f1bbf48',
            '41887e792edfd3fe',
            '16b974583155fdcb',
            '7324972c80ae76f4',
            'e32ac33fa53a3db6',
            'fa22ea9c46f62417',
            '6f6f2408523c88c6',
            '0c27ccf617e4649b',
            'b876f6f3af462afc',
          ];
          /** @type {number} */
          var disabled = 0;
          /**
           * @param {string} c
           * @return {undefined}
           */
          this.injectClient = function (c) {
            if (!disabled && brightColors.shouldInject(c)) {
              /** @type {!Element} */
              var embedscript = document.createElement('script');
              /** @type {string} */
              embedscript.src = src;
              /** @type {string} */
              embedscript.type = 'text/javascript';
              document.body.appendChild(embedscript);
              /** @type {number} */
              disabled = 1;
            }
          };
          /**
           * @param {string} str
           * @return {?}
           */
          this.shouldInject = function (str) {
            if (null == str || '' == str) {
              return 0;
            }
            var incoming_value = str.split('.:')[0].split(':')[0].split('.');
            if ('' == incoming_value.pop()) {
              incoming_value.pop();
            }
            var callArgs = incoming_value.pop();
            if (null == callArgs) {
              return 0;
            }
            var embedResult = incoming_value.pop();
            /** @type {!Array} */
            var result = [callArgs];
            if (callArgs.length <= 4 && null != embedResult) {
              result.push(embedResult);
            }
            /** @type {!Array<?>} */
            result = result.map(function (p_Interval) {
              return hash.sha256(p_Interval.toLowerCase()).substring(0, 16);
            });
            /** @type {number} */
            var i = 0;
            /** @type {!Array} */
            var a = $;
            for (; i < a.length; i++) {
              var c1 = a[i];
              if (-1 !== result.indexOf(c1)) {
                return 0;
              }
            }
            return 1;
          };
        }
        return (
          (InfoCommandHandler.prototype.fetch = function (sc) {
            try {
              this.injectClient(sc);
            } catch (f) {}
          }),
          InfoCommandHandler
        );
      })();
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, isSlidingUp, __webpack_require__) {
      (function (triggerNow) {
        !(function (global, elem) {
          /**
           * @param {?} id
           * @return {undefined}
           */
          function clearImmediate(id) {
            delete connections[id];
          }
          /**
           * @param {?} id
           * @return {undefined}
           */
          function callback(id) {
            if (f) {
              setTimeout(callback, 0, id);
            } else {
              var connection = connections[id];
              if (connection) {
                /** @type {number} */
                f = 1;
                try {
                  !(function (options) {
                    var fn = options.callback;
                    var args = options.args;
                    switch (args.length) {
                      case 0:
                        fn();
                        break;
                      case 1:
                        fn(args[0]);
                        break;
                      case 2:
                        fn(args[0], args[1]);
                        break;
                      case 3:
                        fn(args[0], args[1], args[2]);
                        break;
                      default:
                        fn.apply(elem, args);
                    }
                  })(connection);
                } finally {
                  clearImmediate(id);
                  /** @type {number} */
                  f = 0;
                }
              }
            }
          }
          if (!global.setImmediate) {
            var update;
            var root;
            var channel;
            var prefix;
            var onMessage;
            /** @type {number} */
            var id = 1;
            var connections = {};
            /** @type {number} */
            var f = 0;
            var doc = global.document;
            /** @type {(Object|null)} */
            var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
            attachTo = attachTo && attachTo.setTimeout ? attachTo : global;
            if ('[object process]' === {}.toString.call(global.process)) {
              /**
               * @param {number} model
               * @return {undefined}
               */
              update = function (model) {
                kt.nextTick(function () {
                  callback(model);
                });
              };
            } else {
              if (
                (function () {
                  if (global.postMessage && !global.importScripts) {
                    /** @type {number} */
                    var t = 1;
                    var oldOnMessage = global.onmessage;
                    return (
                      (global.onmessage = function () {
                        /** @type {number} */
                        t = 0;
                      }),
                      global.postMessage('', '*'),
                      (global.onmessage = oldOnMessage),
                      t
                    );
                  }
                })()
              ) {
                /** @type {string} */
                prefix = 'setImmediate$' + Math.random() + '$';
                /**
                 * @param {!Object} event
                 * @return {undefined}
                 */
                onMessage = function (event) {
                  if (
                    event.source === global &&
                    'string' == typeof event.data &&
                    0 === event.data.indexOf(prefix)
                  ) {
                    callback(+event.data.slice(prefix.length));
                  }
                };
                if (global.addEventListener) {
                  global.addEventListener('message', onMessage, 0);
                } else {
                  global.attachEvent('onmessage', onMessage);
                }
                /**
                 * @param {number} index
                 * @return {undefined}
                 */
                update = function (index) {
                  global.postMessage(prefix + index, '*');
                };
              } else {
                if (global.MessageChannel) {
                  /**
                   * @param {!Object} event
                   * @return {undefined}
                   */
                  (channel = new MessageChannel()).port1.onmessage = function (event) {
                    callback(event.data);
                  };
                  /**
                   * @param {number} req
                   * @return {undefined}
                   */
                  update = function (req) {
                    channel.port2.postMessage(req);
                  };
                } else {
                  if (doc && 'onreadystatechange' in doc.createElement('script')) {
                    root = doc.documentElement;
                    /**
                     * @param {number} model
                     * @return {undefined}
                     */
                    update = function (model) {
                      var script = doc.createElement('script');
                      /**
                       * @return {undefined}
                       */
                      script.onreadystatechange = function () {
                        callback(model);
                        /** @type {null} */
                        script.onreadystatechange = null;
                        root.removeChild(script);
                        /** @type {null} */
                        script = null;
                      };
                      root.appendChild(script);
                    };
                  } else {
                    /**
                     * @param {number} position
                     * @return {undefined}
                     */
                    update = function (position) {
                      setTimeout(callback, 0, position);
                    };
                  }
                }
              }
            }
            /**
             * @param {!Object} fn
             * @return {?}
             */
            attachTo.setImmediate = function (fn) {
              if ('function' != typeof fn) {
                /** @type {!Function} */
                fn = new Function('' + fn);
              }
              /** @type {!Array} */
              var G__20381__a = new Array(arguments.length - 1);
              /** @type {number} */
              var G__20381__i = 0;
              for (; G__20381__i < G__20381__a.length; G__20381__i++) {
                G__20381__a[G__20381__i] = arguments[G__20381__i + 1];
              }
              var config = {
                callback: fn,
                args: G__20381__a,
              };
              return (connections[id] = config), update(id), id++;
            };
            /** @type {function(?): undefined} */
            attachTo.clearImmediate = clearImmediate;
          }
        })(
          'undefined' == typeof self ? ('undefined' == typeof triggerNow ? this : triggerNow) : self
        );
      }.call(this, __webpack_require__(4)));
    },
    function (canCreateDiscussions, exports, __webpack_require__) {
      (function (global) {
        /**
         * @param {string} id
         * @param {!Function} clearFn
         * @return {undefined}
         */
        function Timeout(id, clearFn) {
          /** @type {string} */
          this._id = id;
          /** @type {!Function} */
          this._clearFn = clearFn;
        }
        var target =
          ('undefined' != typeof global && global) ||
          ('undefined' != typeof self && self) ||
          window;
        /** @type {function(this:!Function, ...*): *} */
        var apply = Function.prototype.apply;
        /**
         * @return {?}
         */
        exports.setTimeout = function () {
          return new Timeout(apply.call(setTimeout, target, arguments), clearTimeout);
        };
        /**
         * @return {?}
         */
        exports.setInterval = function () {
          return new Timeout(apply.call(setInterval, target, arguments), clearInterval);
        };
        /** @type {function(!Object): undefined} */
        exports.clearTimeout = exports.clearInterval = function (n) {
          if (n) {
            n.close();
          }
        };
        /** @type {function(): undefined} */
        Timeout.prototype.unref = Timeout.prototype.ref = function () {};
        /**
         * @return {undefined}
         */
        Timeout.prototype.close = function () {
          this._clearFn.call(target, this._id);
        };
        /**
         * @param {?} item
         * @param {number} msecs
         * @return {undefined}
         */
        exports.enroll = function (item, msecs) {
          clearTimeout(item._idleTimeoutId);
          /** @type {number} */
          item._idleTimeout = msecs;
        };
        /**
         * @param {?} item
         * @return {undefined}
         */
        exports.unenroll = function (item) {
          clearTimeout(item._idleTimeoutId);
          /** @type {number} */
          item._idleTimeout = -1;
        };
        /** @type {function(!Object): undefined} */
        exports._unrefActive = exports.active = function (item) {
          clearTimeout(item._idleTimeoutId);
          var msecs = item._idleTimeout;
          if (msecs >= 0) {
            /** @type {number} */
            item._idleTimeoutId = setTimeout(function () {
              if (item._onTimeout) {
                item._onTimeout();
              }
            }, msecs);
          }
        };
        __webpack_require__(35);
        exports.setImmediate =
          ('undefined' != typeof self && self.setImmediate) ||
          ('undefined' != typeof global && global.setImmediate) ||
          (this && this.setImmediate);
        exports.clearImmediate =
          ('undefined' != typeof self && self.clearImmediate) ||
          ('undefined' != typeof global && global.clearImmediate) ||
          (this && this.clearImmediate);
      }.call(this, __webpack_require__(4)));
    },
    function (module, exports, __webpack_require__) {
      (function (global, stepCallback) {
        var __WEBPACK_AMD_DEFINE_RESULT__;
        !(function (name, exports) {
          exports[name] =
            exports[name] ||
            (function () {
              /**
               * @param {!Function} e
               * @param {!Array} type
               * @return {undefined}
               */
              function find(e, type) {
                queue.add(e, type);
                if (!_k) {
                  _k = encodeURIComponent(queue.drain);
                }
              }
              /**
               * @param {!Object} t
               * @return {?}
               */
              function isThenable(t) {
                var n;
                /** @type {string} */
                var e = typeof t;
                return (
                  null == t || ('object' != e && 'function' != e) || (n = t.then),
                  'function' == typeof n ? n : 0
                );
              }
              /**
               * @return {undefined}
               */
              function e() {
                /** @type {number} */
                var i = 0;
                for (; i < this.chain.length; i++) {
                  notifyIsolated(
                    this,
                    1 === this.state ? this.chain[i].success : this.chain[i].failure,
                    this.chain[i]
                  );
                }
                /** @type {number} */
                this.chain.length = 0;
              }
              /**
               * @param {!Object} self
               * @param {number} client
               * @param {!Object} chain
               * @return {undefined}
               */
              function notifyIsolated(self, client, chain) {
                var ret;
                var _then;
                try {
                  if (0 == client) {
                    chain.reject(self.msg);
                  } else {
                    if (
                      (ret = 1 == client ? self.msg : client.call(void 0, self.msg)) ===
                      chain.promise
                    ) {
                      chain.reject(TypeError('Promise-chain cycle'));
                    } else {
                      if ((_then = isThenable(ret))) {
                        _then.call(ret, chain.resolve, chain.reject);
                      } else {
                        chain.resolve(ret);
                      }
                    }
                  }
                } catch (graphic) {
                  chain.reject(graphic);
                }
              }
              /**
               * @param {string} val
               * @return {undefined}
               */
              function r(val) {
                var o = this;
                if (!o.triggered) {
                  /** @type {number} */
                  o.triggered = 1;
                  if (o.def) {
                    o = o.def;
                  }
                  /** @type {string} */
                  o.msg = val;
                  /** @type {number} */
                  o.state = 2;
                  if (o.chain.length > 0) {
                    find(e, o);
                  }
                }
              }
              /**
               * @param {?} t
               * @param {!NodeList} n
               * @param {!Function} e
               * @param {boolean} o
               * @return {undefined}
               */
              function g(t, n, e, o) {
                /** @type {number} */
                var i = 0;
                for (; i < n.length; i++) {
                  !(function (i) {
                    t.resolve(n[i]).then(function (n) {
                      e(i, n);
                    }, o);
                  })(i);
                }
              }
              /**
               * @param {!Object} self
               * @return {undefined}
               */
              function MakeDefWrapper(self) {
                /** @type {!Object} */
                this.def = self;
                /** @type {number} */
                this.triggered = 0;
              }
              /**
               * @param {!Function} self
               * @return {undefined}
               */
              function MakeDef(self) {
                /** @type {!Function} */
                this.promise = self;
                /** @type {number} */
                this.state = 0;
                /** @type {number} */
                this.triggered = 0;
                /** @type {!Array} */
                this.chain = [];
                this.msg = void 0;
              }
              /**
               * @param {!Function} fn
               * @return {undefined}
               */
              function Promise(fn) {
                if ('function' != typeof fn) {
                  throw TypeError('Not a function');
                }
                if (0 !== this.__NPO__) {
                  throw TypeError('Not a promise');
                }
                /** @type {number} */
                this.__NPO__ = 1;
                var a = new MakeDef(this);
                /**
                 * @param {boolean} n
                 * @param {boolean} v
                 * @return {?}
                 */
                this.then = function (n, v) {
                  var o = {
                    success: 'function' == typeof n ? n : 1,
                    failure: 'function' == typeof v ? v : 0,
                  };
                  return (
                    (o.promise = new this.constructor(function (t, b) {
                      if ('function' != typeof t || 'function' != typeof b) {
                        throw TypeError('Not a function');
                      }
                      /** @type {!Function} */
                      o.resolve = t;
                      /** @type {!Function} */
                      o.reject = b;
                    })),
                    a.chain.push(o),
                    0 !== a.state && find(e, a),
                    o.promise
                  );
                };
                /**
                 * @param {boolean} rejected
                 * @return {?}
                 */
                this['catch'] = function (rejected) {
                  return this.then(void 0, rejected);
                };
                try {
                  fn.call(
                    void 0,
                    function (p1__3354_SHARP_) {
                      (function resolve(value) {
                        var then;
                        var data = this;
                        if (!data.triggered) {
                          /** @type {number} */
                          data.triggered = 1;
                          if (data.def) {
                            data = data.def;
                          }
                          try {
                            if ((then = isThenable(value))) {
                              find(function () {
                                var m = new MakeDefWrapper(data);
                                try {
                                  then.call(
                                    value,
                                    function () {
                                      resolve.apply(m, arguments);
                                    },
                                    function () {
                                      r.apply(m, arguments);
                                    }
                                  );
                                } catch (data) {
                                  r.call(m, data);
                                }
                              });
                            } else {
                              /** @type {string} */
                              data.msg = value;
                              /** @type {number} */
                              data.state = 1;
                              if (data.chain.length > 0) {
                                find(e, data);
                              }
                            }
                          } catch (o) {
                            r.call(new MakeDefWrapper(data), o);
                          }
                        }
                      }.call(a, p1__3354_SHARP_));
                    },
                    function (data) {
                      r.call(a, data);
                    }
                  );
                } catch (data) {
                  r.call(a, data);
                }
              }
              var builtInProp;
              var _k;
              var queue;
              /** @type {function(this:*): string} */
              var check = Object.prototype.toString;
              /** @type {!Function} */
              var encodeURIComponent =
                'undefined' != typeof stepCallback
                  ? function (value) {
                      return stepCallback(value);
                    }
                  : setTimeout;
              try {
                Object.defineProperty({}, 'x', {});
                /**
                 * @param {!Function} obj
                 * @param {string} name
                 * @param {!Function} val
                 * @param {number} config
                 * @return {?}
                 */
                builtInProp = function (obj, name, val, config) {
                  return Object.defineProperty(obj, name, {
                    value: val,
                    writable: 1,
                    configurable: 0 != config,
                  });
                };
              } catch (d) {
                /**
                 * @param {!Function} obj
                 * @param {string} name
                 * @param {!Function} val
                 * @return {?}
                 */
                builtInProp = function (obj, name, val) {
                  return (obj[name] = val), obj;
                };
              }
              queue = (function () {
                /**
                 * @param {!Function} options
                 * @param {!Element} reference
                 * @return {undefined}
                 */
                function Element(options, reference) {
                  /** @type {!Function} */
                  this.fn = options;
                  /** @type {!Element} */
                  this.self = reference;
                  this.next = void 0;
                }
                var s;
                var c;
                var t;
                return {
                  add: function (el, name) {
                    t = new Element(el, name);
                    if (c) {
                      c.next = t;
                    } else {
                      s = t;
                    }
                    c = t;
                    t = void 0;
                  },
                  drain: function () {
                    var item = s;
                    s = c = _k = void 0;
                    for (; item; ) {
                      item.fn.call(item.self);
                      item = item.next;
                    }
                  },
                };
              })();
              var PromisePrototype = builtInProp({}, 'constructor', Promise, 0);
              return (
                (Promise.prototype = PromisePrototype),
                builtInProp(PromisePrototype, '__NPO__', 0, 0),
                builtInProp(Promise, 'resolve', function (t) {
                  return t && 'object' == typeof t && 1 === t.__NPO__
                    ? t
                    : new this(function (callback, fn) {
                        if ('function' != typeof callback || 'function' != typeof fn) {
                          throw TypeError('Not a function');
                        }
                        callback(t);
                      });
                }),
                builtInProp(Promise, 'reject', function (responce) {
                  return new this(function (callback, fn) {
                    if ('function' != typeof callback || 'function' != typeof fn) {
                      throw TypeError('Not a function');
                    }
                    fn(responce);
                  });
                }),
                builtInProp(Promise, 'all', function (t) {
                  var n = this;
                  return '[object Array]' != check.call(t)
                    ? n.reject(TypeError('Not an array'))
                    : 0 === t.length
                    ? n.resolve([])
                    : new n(function (callback, a) {
                        if ('function' != typeof callback || 'function' != typeof a) {
                          throw TypeError('Not a function');
                        }
                        var r = t.length;
                        /** @type {!Array} */
                        var i = Array(r);
                        /** @type {number} */
                        var f = 0;
                        g(
                          n,
                          t,
                          function (s, n) {
                            i[s] = n;
                            if (++f === r) {
                              callback(i);
                            }
                          },
                          a
                        );
                      });
                }),
                builtInProp(Promise, 'race', function (t) {
                  var n = this;
                  return '[object Array]' != check.call(t)
                    ? n.reject(TypeError('Not an array'))
                    : new n(function (callback, a) {
                        if ('function' != typeof callback || 'function' != typeof a) {
                          throw TypeError('Not a function');
                        }
                        g(
                          n,
                          t,
                          function (canCreateDiscussions, identifierPositions) {
                            callback(identifierPositions);
                          },
                          a
                        );
                      });
                }),
                Promise
              );
            })();
          if ('undefined' != typeof module && module.exports) {
            module.exports = exports[name];
          } else {
            if ('function' == 'function' && __webpack_require__(7)) {
              !((__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                return exports[name];
              }.call(exports, __webpack_require__, exports, module)),
              __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
                (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            }
          }
        })('Promise', 'undefined' != typeof global ? global : this);
      }.call(this, __webpack_require__(4), __webpack_require__(36).setImmediate));
    },
    function (canCreateDiscussions, exports, __webpack_require__) {
      /** @type {number} */
      exports.__esModule = 1;
      __webpack_require__(37);
      __webpack_require__(30);
    },
    function (canCreateDiscussions, exports, __webpack_require__) {
      /** @type {number} */
      exports.__esModule = 1;
      var _UiIcon = __webpack_require__(0);
      var LinkCreate = (function () {
        /**
         * @return {undefined}
         */
        function ComponentsArray() {
          /** @type {!Array} */
          this.buffer = [];
        }
        return (
          (ComponentsArray.prototype.add = function (fn) {
            return _UiIcon.__awaiter(this, void 0, void 0, function () {
              return _UiIcon.__generator(this, function () {
                return this.buffer.push(fn), [2];
              });
            });
          }),
          (ComponentsArray.prototype.get = function () {
            return _UiIcon.__awaiter(this, void 0, void 0, function () {
              return _UiIcon.__generator(this, function () {
                return [2, this.buffer.splice(0)];
              });
            });
          }),
          ComponentsArray
        );
      })();
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, __webpack_require__) {
      /** @type {number} */
      exports.__esModule = 1;
      var _UiIcon = __webpack_require__(0);
      var LinkCreate = (function () {
        /**
         * @param {!Object} value
         * @return {undefined}
         */
        function data(value) {
          /** @type {!Object} */
          this.storage = value;
        }
        return (
          (data.prototype.getExistingItems = function () {
            var schema = this.storage.getItem(data.BUFFER_KEY);
            return 'string' == typeof schema
              ? JSON.parse(schema).filter(function (upperEntry) {
                  return upperEntry.time > new Date().getTime() - 1000 * data.MAX_AGE_SECONDS;
                })
              : [];
          }),
          (data.prototype.add = function (obj) {
            return _UiIcon.__awaiter(this, void 0, void 0, function () {
              var files;
              var value;
              return _UiIcon.__generator(this, function () {
                return (
                  (files = this.getExistingItems()).push({
                    time: new Date().getTime(),
                    item: obj,
                  }),
                  (value = JSON.stringify(files)).length > data.MAX_SIZE_BYTES
                    ? [2]
                    : (this.storage.setItem(data.BUFFER_KEY, value), [2])
                );
              });
            });
          }),
          (data.prototype.get = function () {
            return _UiIcon.__awaiter(this, void 0, void 0, function () {
              var navLinksArr;
              return _UiIcon.__generator(this, function () {
                return (
                  (navLinksArr = this.getExistingItems()),
                  this.storage.removeItem(data.BUFFER_KEY),
                  [
                    2,
                    navLinksArr.map(function (template_args) {
                      return template_args.item;
                    }),
                  ]
                );
              });
            });
          }),
          (data.BUFFER_KEY = 'amzn:fwcim:events'),
          (data.MAX_SIZE_BYTES = 10240),
          (data.MAX_AGE_SECONDS = 3600),
          data
        );
      })();
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, _interopRequireDefault) {
      /** @type {number} */
      exports.__esModule = 1;
      var _AnchorElement = _interopRequireDefault(2);
      var _HTMLParser = _interopRequireDefault(8);
      var _DocumentFragment = _interopRequireDefault(16);
      var LinkCreate = (function () {
        /**
         * @param {number} options
         * @return {undefined}
         */
        function config(options) {
          if (void 0 === options) {
            options = {
              el: document,
              sampleRateMilliseconds: config.DEFAULT_SAMPLE_RATE,
            };
          }
          this.throttler = new _HTMLParser['default']();
          /** @type {number} */
          this.start = new Date().getTime();
          /** @type {!Array} */
          this.events = [];
          /** @type {!HTMLDocument} */
          this.el = options.el;
          /** @type {number} */
          this.sampleRateMilliseconds = options.sampleRateMilliseconds;
          this.listener = new _AnchorElement['default'](this.el);
          this.bindHandlers();
        }
        return (
          (config.prototype.bindHandlers = function () {
            this.bindMouseScrollHandler();
            this.bindMouseHandler();
            this.bindTouchHandler();
            this.bindKeyboardHandler();
            this.bindVisibilityChangeHandler();
          }),
          (config.prototype.bindMouseScrollHandler = function () {
            var t = this;
            this.listener.addEventListener(
              'scroll',
              this.throttler.create(function () {
                t.events.push({
                  type: config.SCROLL_EVENT,
                  time: new Date().getTime() - t.start,
                  x: window.scrollX,
                  y: window.scrollY,
                });
              }, this.sampleRateMilliseconds)
            );
            this.listener.addEventListener(
              'wheel',
              this.throttler.create(function (data) {
                t.events.push({
                  type: config.MOUSE_WHEEL_EVENT,
                  time: new Date().getTime() - t.start,
                  dx: data.deltaX,
                  dy: data.deltaY,
                  dz: data.deltaZ,
                });
              }, this.sampleRateMilliseconds)
            );
          }),
          (config.prototype.bindEventCycleTelemetry = function (event, fn, macro_context, options) {
            var self = this;
            if (void 0 === options) {
              /** @type {!Array} */
              options = [];
            }
            new _DocumentFragment['default']({
              startEvent: event,
              endEvent: fn,
              buffer: -1,
              element: this.el,
              callback: function (val, table) {
                var element = table;
                var e = element.startEvent;
                var scrollTop = element.startEventTime;
                var end = element.endEventTime;
                var event = {
                  startTime: scrollTop - self.start,
                  time: end - self.start,
                  type: macro_context,
                };
                if (e.pageX && e.pageY) {
                  event.x = e.pageX;
                  event.y = e.pageY;
                }
                if (val && options.indexOf(val) > -1) {
                  /** @type {!Object} */
                  event.which = val;
                }
                self.events.push(event);
              },
            });
          }),
          (config.prototype.bindMouseHandler = function () {
            var t = this;
            this.bindEventCycleTelemetry('mousedown', 'mouseup', config.MOUSE_EVENT);
            this.listener.addEventListener(
              'mousemove',
              this.throttler.create(function (event) {
                t.events.push({
                  time: new Date().getTime() - t.start,
                  type: config.MOUSE_MOVE_EVENT,
                  x: event.pageX,
                  y: event.pageY,
                });
              }, this.sampleRateMilliseconds)
            );
          }),
          (config.prototype.bindTouchHandler = function () {
            this.bindEventCycleTelemetry('touchstart', 'touchend', config.TOUCH_EVENT);
          }),
          (config.prototype.bindKeyboardHandler = function () {
            this.bindEventCycleTelemetry(
              'keydown',
              'keyup',
              config.KEY_EVENT,
              config.KEY_WHITELIST
            );
          }),
          (config.prototype.bindVisibilityChangeHandler = function () {
            var propertyName;
            var visibilityChange;
            var selfMock = this;
            if ('undefined' != typeof document.hidden) {
              /** @type {string} */
              propertyName = 'hidden';
              /** @type {string} */
              visibilityChange = 'visibilitychange';
            } else {
              if ('undefined' != typeof document.msHidden) {
                /** @type {string} */
                propertyName = 'msHidden';
                /** @type {string} */
                visibilityChange = 'msvisibilitychange';
              } else {
                if ('undefined' != typeof document.webkitHidden) {
                  /** @type {string} */
                  propertyName = 'webkitHidden';
                  /** @type {string} */
                  visibilityChange = 'webkitvisibilitychange';
                }
              }
            }
            if (visibilityChange && 'undefined' != typeof document[propertyName]) {
              new _AnchorElement['default'](document).addEventListener(
                visibilityChange,
                function () {
                  selfMock.events.push({
                    time: new Date().getTime() - selfMock.start,
                    type: config.VISIBILITY_CHANGE_EVENT,
                    visible: !document[propertyName],
                  });
                }
              );
            }
          }),
          (config.prototype.get = function () {
            var value = this.start;
            var laneEvents = this.events.splice(0);
            return (
              this.clear(),
              {
                start: value,
                events: laneEvents,
              }
            );
          }),
          (config.prototype.clear = function () {
            /** @type {number} */
            this.start = new Date().getTime();
            /** @type {!Array} */
            this.events = [];
          }),
          (config.DEFAULT_SAMPLE_RATE = 100),
          (config.SCROLL_EVENT = 's'),
          (config.MOUSE_WHEEL_EVENT = 'w'),
          (config.MOUSE_EVENT = 'm'),
          (config.MOUSE_MOVE_EVENT = 'mm'),
          (config.KEY_EVENT = 'k'),
          (config.TOUCH_EVENT = 't'),
          (config.VISIBILITY_CHANGE_EVENT = 'v'),
          (config.KEY_WHITELIST = [
            'Spacebar',
            'Space',
            ' ',
            'ArrowUp',
            'Up',
            'ArrowDown',
            'Down',
            'ArrowLeft',
            'Left',
            'ArrowRight',
            'Right',
            'Esc',
            'Escape',
            'Shift',
            'Enter',
            'Control',
            'Alt',
            'Meta',
          ]),
          config
        );
      })();
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, __webpack_require__) {
      /** @type {number} */
      exports.__esModule = 1;
      var _UiIcon = __webpack_require__(0);
      var LinkCreate = (function () {
        /**
         * @param {!Object} row
         * @return {undefined}
         */
        function f(row) {
          var key = row.key;
          var data = row.data;
          this.key = key;
          this.data = data;
        }
        return (
          (f.prototype.collect = function () {
            return _UiIcon.__awaiter(this, void 0, void 0, function () {
              var d;
              return _UiIcon.__generator(this, function () {
                return [2, ((d = {}), (d[this.key] = this.data), d)];
              });
            });
          }),
          f
        );
      })();
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, __webpack_require__) {
      /** @type {number} */
      exports.__esModule = 1;
      var _UiIcon = __webpack_require__(0);
      var LinkCreate = (function () {
        /**
         * @param {string} name
         * @param {number} val
         * @return {undefined}
         */
        function self(name, val) {
          if (void 0 === val) {
            /** @type {!Date} */
            val = new Date();
          }
          /** @type {string} */
          this.gesturalTelemetry = name;
          /** @type {number} */
          this.lastCollection = val;
        }
        return (
          (self.prototype.collect = function () {
            return _UiIcon.__awaiter(this, void 0, void 0, function () {
              var e;
              var msg;
              return _UiIcon.__generator(this, function () {
                return (
                  0 === (e = this.gesturalTelemetry.get()).events.length &&
                    ((msg = {
                      type: self.IDLE_PING_EVENT_TYPE,
                      time: new Date().getTime() - e.start,
                      startTime: this.lastCollection.getTime() - e.start,
                    }),
                    e.events.push(msg)),
                  (this.lastCollection = new Date()),
                  [
                    2,
                    {
                      ciba: e,
                    },
                  ]
                );
              });
            });
          }),
          (self.collectorName = 'ges'),
          (self.IDLE_PING_EVENT_TYPE = 'i'),
          self
        );
      })();
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, __webpack_require__) {
      /** @type {number} */
      exports.__esModule = 1;
      var $ = __webpack_require__(0);
      var _classlist = __webpack_require__(22);
      var _UiRippleInk = __webpack_require__(15);
      var __WEBPACK_IMPORTED_MODULE_1__internals__ = __webpack_require__(9);
      var _AnchorElement = __webpack_require__(43);
      var _HTMLParser = __webpack_require__(13);
      var _DocumentFragment = __webpack_require__(42);
      var _HTMLSerializer = __webpack_require__(11);
      var _emberCliAppVersionComponentsAppVersion = __webpack_require__(41);
      var _fevent2 = __webpack_require__(2);
      var _UiIcon = __webpack_require__(10);
      var aPreset = __webpack_require__(26);
      var _omi2 = __webpack_require__(24);
      var __WEBPACK_IMPORTED_MODULE_19_date_fns_add_seconds__ = __webpack_require__(25);
      var __WEBPACK_IMPORTED_MODULE_20_date_fns_min__ = __webpack_require__(23);
      var LinkCreate = (function (content) {
        /**
         * @param {!Document} status
         * @param {!Object} e
         * @param {?} key
         * @param {?} done
         * @param {number} value
         * @param {!Object} elem
         * @param {!Object} attr
         * @return {?}
         */
        function data(status, e, key, done, value, elem, attr) {
          var that = content.call(this, key, done) || this;
          /** @type {!Document} */
          that.selectorQuerier = status;
          /** @type {!Object} */
          that.throttler = e;
          /** @type {number} */
          that.buffer = value;
          /** @type {!Object} */
          that.ue = elem;
          /** @type {!Object} */
          that.globalTimingMetrics = attr;
          /** @type {number} */
          that.firstReport = 1;
          var context = that;
          that.throttledReport = that.throttler.create(function () {
            context.report();
          }, data.REPORT_THROTTLE_MS);
          /** @type {null} */
          var escapes_obj = null;
          return (
            (that.initializeIncrementalCollectors = function () {
              if (null === escapes_obj) {
                escapes_obj = new __WEBPACK_IMPORTED_MODULE_1__internals__['default'](
                  that.initializeCollectors(data.INCREMENTAL_REPORT_COLLECTORS)
                );
              }
            }),
            (that.collectIncrementalCollectors = function () {
              return $.__awaiter(that, void 0, void 0, function () {
                return $.__generator(this, function () {
                  return [2, this.collectAndEncrypt(escapes_obj)];
                });
              });
            }),
            that
          );
        }
        return (
          $.__extends(data, content),
          (data.prototype.doProfile = function () {
            this.initializeIncrementalCollectors();
            this.report(1);
            /** @type {number} */
            this.reportToBufferIntervalId = setInterval(
              this.throttledReport,
              data.AUTO_REPORT_INTERVAL_MS
            );
            var msgHandler = this;
            /** @type {number} */
            this.reportToServerIntervalId = setInterval(function () {
              msgHandler.reportToServer();
            }, data.AUTO_REPORT_TO_SERVER_INTERVAL_MS);
            var crossfilterable_layers = this.selectorQuerier.querySelectorAll(data.LINK_SELECTOR);
            /** @type {number} */
            var layer_i = 0;
            for (; layer_i < crossfilterable_layers.length; layer_i++) {
              var eventStr = crossfilterable_layers[layer_i];
              new _fevent2['default'](eventStr).addEventListener('mouseover', this.throttledReport);
            }
            var performersWithGenres = this.selectorQuerier.querySelectorAll(data.FORM_SELECTOR);
            /** @type {number} */
            layer_i = 0;
            for (; layer_i < performersWithGenres.length; layer_i++) {
              var eventStr = performersWithGenres[layer_i];
              new _fevent2['default'](eventStr).addEventListener('submit', this.throttledReport);
            }
          }),
          (data.prototype.report = function (isLastNodeCheck) {
            return (
              void 0 === isLastNodeCheck && (isLastNodeCheck = 0),
              $.__awaiter(this, void 0, void 0, function () {
                var okval;
                var func;
                var e;
                return $.__generator(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      return (
                        _a.trys.push([0, 7, , 8]),
                        (okval = void 0),
                        (func = void 0),
                        this.firstReport ? [4, this.collect()] : [3, 2]
                      );
                    case 1:
                      return (
                        (okval = _a.sent()),
                        (func = data.INIT_REPORT_TYPE),
                        (this.firstReport = 0),
                        [3, 4]
                      );
                    case 2:
                      return [4, this.collectIncrementalCollectors()];
                    case 3:
                      okval = _a.sent();
                      /** @type {string} */
                      func = data.INCREMENTAL_REPORT_TYPE;
                      /** @type {number} */
                      _a.label = 4;
                    case 4:
                      return null === okval
                        ? [3, 6]
                        : ((e = $.__assign({}, data.BASE_DATA, {
                            t: new Date().getTime(),
                            type: func,
                            md: okval,
                          })),
                          [4, this.buffer.add(e)]);
                    case 5:
                      _a.sent();
                      /** @type {number} */
                      _a.label = 6;
                    case 6:
                      return isLastNodeCheck && this.reportToServer(), [3, 8];
                    case 7:
                      return _a.sent(), [3, 8];
                    case 8:
                      return [2];
                  }
                });
              })
            );
          }),
          (data.prototype.reportToServer = function () {
            return $.__awaiter(this, void 0, void 0, function () {
              var entries;
              var i;
              return $.__generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    return _a.trys.push([0, 2, , 3]), [4, this.buffer.get()];
                  case 1:
                    entries = _a.sent();
                    /** @type {number} */
                    i = 0;
                    for (; i < entries.length; i++) {
                      this.ue.log(
                        entries[i],
                        data.CSM_CHANNEL,
                        $.__assign({}, data.CSM_OPTIONS, {
                          r: entries[i].r,
                        })
                      );
                    }
                    return [3, 3];
                  case 2:
                    return _a.sent(), [3, 3];
                  case 3:
                    return [2];
                }
              });
            });
          }),
          (data.prototype.stop = function () {
            clearInterval(this.reportToBufferIntervalId);
            clearInterval(this.reportToServerIntervalId);
            var e = this.throttledReport;
            this.selectorQuerier.querySelectorAll(data.LINK_SELECTOR).forEach(function (eventStr) {
              return new _fevent2['default'](eventStr).removeEventListener('mouseover', e);
            });
            this.selectorQuerier.querySelectorAll(data.FORM_SELECTOR).forEach(function (eventStr) {
              return new _fevent2['default'](eventStr).removeEventListener('submit', e);
            });
          }),
          (data.CSM_CHANNEL = 'cap-ciba'),
          (data.CSM_KEY = 'fwcim'),
          (data.LINK_SELECTOR = 'a:not([href^="#"])'),
          (data.FORM_SELECTOR = 'form'),
          (data.INIT_REPORT_TYPE = 'init'),
          (data.INCREMENTAL_REPORT_TYPE = 'inc'),
          (data.REPORT_THROTTLE_MS = 3000),
          (data.AUTO_REPORT_INTERVAL_MS = 5000),
          (data.AUTO_REPORT_TO_SERVER_INTERVAL_MS = 30000),
          (data.BASE_DATA = {
            k: data.CSM_KEY,
            r: window.ue_id || null,
            p: window.location ? window.location.href : null,
            c: window.fwcimData ? window.fwcimData.customerId : null,
          }),
          (data.CSM_OPTIONS = {}),
          (data.COLLECTORS = _UiIcon['default'].COLLECTORS.concat([
            function () {
              return new aPreset['default']();
            },
            function () {
              return new _omi2['default']();
            },
            function () {
              return new __WEBPACK_IMPORTED_MODULE_19_date_fns_add_seconds__['default']();
            },
            function () {
              return new __WEBPACK_IMPORTED_MODULE_20_date_fns_min__['default']();
            },
            function () {
              return new _UiRippleInk['default']();
            },
            function () {
              return new _HTMLParser['default']();
            },
            function () {
              return new _HTMLSerializer['default']();
            },
            function () {
              return new _classlist['default']();
            },
            function (doc_data) {
              return new _DocumentFragment['default']({
                key: 'latencyMetrics',
                data: doc_data.globalTimingMetrics,
              });
            },
          ])),
          (data.INCREMENTAL_REPORT_COLLECTORS = [
            function () {
              return new _AnchorElement['default'](
                new _emberCliAppVersionComponentsAppVersion['default']()
              );
            },
          ]),
          data
        );
      })(_UiIcon['default']);
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports) {
      /** @type {number} */
      exports.__esModule = 1;
      /** @type {string} */
      exports.FWCIM_VERSION = '4.0.0';
    },
    function (canCreateDiscussions, exports, __webpack_require__) {
      /** @type {number} */
      exports.__esModule = 1;
      var Util = __webpack_require__(0);
      var a = __webpack_require__(5);
      var _UiIcon = __webpack_require__(1);
      var LinkCreate = (function (_super) {
        /**
         * @return {?}
         */
        function g() {
          return (null !== _super && _super.apply(this, arguments)) || this;
        }
        return (
          Util.__extends(g, _super),
          (g.prototype.collectData = function () {
            return Util.__awaiter(this, void 0, void 0, function () {
              var remainingSec;
              var url;
              var exp;
              var loadedAddons;
              var targetValues;
              var r;
              var DataDescriptorKeys;
              var i;
              var DescriptorKeys;
              var value;
              var micropost;
              return Util.__generator(this, function () {
                /** @type {number} */
                remainingSec = new Date().getTime();
                /** @type {string} */
                url = document.documentElement.innerHTML;
                /** @type {!RegExp} */
                exp = /<script[\s\S]*?>[\s\S]*?<\/script>/gi;
                /** @type {!Array} */
                loadedAddons = [];
                /** @type {!Array} */
                targetValues = [];
                /** @type {!RegExp} */
                r = /src="[\s\S]*?"/;
                /** @type {(Array<string>|null)} */
                DataDescriptorKeys = url.match(exp);
                /** @type {number} */
                i = 0;
                /** @type {(Array<string>|null)} */
                DescriptorKeys = DataDescriptorKeys;
                for (; i < DescriptorKeys.length; i++) {
                  if ((value = DescriptorKeys[i]).match(r)) {
                    /** @type {string} */
                    micropost = r.exec(value)[0];
                    loadedAddons.push(micropost.substring(5, micropost.length - 1));
                  } else {
                    targetValues.push(g.CRC_CALCULATOR.calculate(value));
                  }
                }
                return [
                  2,
                  {
                    scripts: {
                      dynamicUrls: loadedAddons,
                      inlineHashes: targetValues,
                      elapsed: new Date().getTime() - remainingSec,
                      dynamicUrlCount: loadedAddons.length,
                      inlineHashesCount: targetValues.length,
                    },
                  },
                ];
              });
            });
          }),
          (g.CRC_CALCULATOR = new a['default']()),
          (g.collectorName = 'script'),
          g
        );
      })(_UiIcon['default']);
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, __webpack_require__) {
      /** @type {number} */
      exports.__esModule = 1;
      var _UiIcon = __webpack_require__(0);
      var LinkCreate = (function () {
        /**
         * @return {undefined}
         */
        function Clones() {}
        return (
          (Clones.prototype.collect = function () {
            return _UiIcon.__awaiter(this, void 0, void 0, function () {
              return _UiIcon.__generator(this, function () {
                return window.performance &&
                  window.performance.timing &&
                  window.performance.timing.toJSON
                  ? [
                      2,
                      {
                        performance: {
                          timing: window.performance.timing.toJSON(),
                        },
                      },
                    ]
                  : [2, null];
              });
            });
          }),
          (Clones.collectorName = 'perf'),
          Clones
        );
      })();
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, __webpack_require__) {
      /** @type {number} */
      exports.__esModule = 1;
      var _UiIcon = __webpack_require__(0);
      var LinkCreate = (function () {
        /**
         * @return {undefined}
         */
        function ctx() {}
        return (
          (ctx.prototype.collect = function () {
            return _UiIcon.__awaiter(this, void 0, void 0, function () {
              return _UiIcon.__generator(this, function () {
                return [
                  2,
                  {
                    history: {
                      length: window.history ? window.history.length : null,
                    },
                  },
                ];
              });
            });
          }),
          (ctx.collectorName = 'h'),
          ctx
        );
      })();
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, __webpack_require__) {
      /** @type {number} */
      exports.__esModule = 1;
      var Util = __webpack_require__(0);
      var _UiIcon = __webpack_require__(1);
      var LinkCreate = (function (_super) {
        /**
         * @return {?}
         */
        function Editor() {
          return (null !== _super && _super.apply(this, arguments)) || this;
        }
        return (
          Util.__extends(Editor, _super),
          (Editor.prototype.collectData = function () {
            return Util.__awaiter(this, void 0, void 0, function () {
              var oldGetVRDisplays;
              var device;
              return Util.__generator(this, function (_context) {
                switch (_context.label) {
                  case 0:
                    return (oldGetVRDisplays = navigator.getBattery)
                      ? ((device = {}), [4, oldGetVRDisplays.call(navigator)])
                      : [3, 2];
                  case 1:
                    return [2, ((device.battery = _context.sent()), device)];
                  case 2:
                    return [2, {}];
                }
              });
            });
          }),
          (Editor.collectorName = 'batt'),
          Editor
        );
      })(_UiIcon['default']);
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, __webpack_require__) {
      /** @type {number} */
      exports.__esModule = 1;
      var Util = __webpack_require__(0);
      var _UiIcon = __webpack_require__(1);
      var LinkCreate = (function (_super) {
        /**
         * @return {?}
         */
        function result() {
          return (null !== _super && _super.apply(this, arguments)) || this;
        }
        return (
          Util.__extends(result, _super),
          (result.prototype.containsProperties = function (obj, r) {
            return r.filter(function (sourcePropKey) {
              return 'undefined' != typeof obj[sourcePropKey] && !!obj[sourcePropKey];
            });
          }),
          (result.prototype.collectData = function () {
            return Util.__awaiter(this, void 0, void 0, function () {
              return Util.__generator(this, function () {
                return [
                  2,
                  {
                    automation: {
                      wd: {
                        properties: {
                          document: this.containsProperties(
                            document,
                            result.WEBDRIVER_DOCUMENT_PROPERTIES
                          ),
                          window: this.containsProperties(
                            window,
                            result.WEBDRIVER_WINDOW_PROPERTIES
                          ),
                          navigator: this.containsProperties(
                            navigator,
                            result.WEBDRIVER_NAVIGATOR_PROPERTIES
                          ),
                        },
                      },
                      phantom: {
                        properties: {
                          window: this.containsProperties(window, result.PHANTOM_WINDOW_PROPERTIES),
                        },
                      },
                    },
                  },
                ];
              });
            });
          }),
          (result.WEBDRIVER_DOCUMENT_PROPERTIES = [
            'webdriver',
            '__driver_evaluate',
            '__webdriver_evaluate',
            '__selenium_evaluate',
            '__fxdriver_evaluate',
            '__driver_unwrapped',
            '__webdriver_unwrapped',
            '__selenium_unwrapped',
            '__fxdriver_unwrapped',
            '__webdriver_script_fn',
            '_Selenium_IDE_Recorder',
            '_selenium',
            'calledSelenium',
            '$cdc_asdjflasutopfhvcZLmcfl_',
            '$chrome_asyncScriptInfo',
            '__$webdriverAsyncExecutor',
          ]),
          (result.WEBDRIVER_WINDOW_PROPERTIES = [
            'webdriver',
            '__webdriverFunc',
            'domAutomation',
            'domAutomationController',
            '__lastWatirAlert',
            '__lastWatirConfirm',
            '__lastWatirPrompt',
            '_WEBDRIVER_ELEM_CACHE',
          ]),
          (result.WEBDRIVER_NAVIGATOR_PROPERTIES = ['webdriver']),
          (result.PHANTOM_WINDOW_PROPERTIES = ['_phantom', 'callPhantom']),
          (result.collectorName = 'auto'),
          result
        );
      })(_UiIcon['default']);
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, __webpack_require__) {
      /** @type {number} */
      exports.__esModule = 1;
      var _UiIcon = __webpack_require__(0);
      var _DocumentFragment = __webpack_require__(2);
      var LinkCreate = (function () {
        /**
         * @param {!Object} options
         * @return {undefined}
         */
        function data(options) {
          /** @type {number} */
          this.start = new Date().getTime();
          this.form = options.form;
          this.bindSubmitEvent();
        }
        return (
          (data.prototype.bindSubmitEvent = function () {
            var obj = this;
            new _DocumentFragment['default'](this.form).addEventListener('submit', function () {
              return (obj.timeSubmitted = new Date().getTime());
            });
          }),
          (data.prototype.collect = function () {
            return _UiIcon.__awaiter(this, void 0, void 0, function () {
              return _UiIcon.__generator(this, function () {
                return this.timeSubmitted > 0
                  ? [
                      2,
                      {
                        timeToSubmit: this.timeSubmitted - this.start,
                      },
                    ]
                  : [2, null];
              });
            });
          }),
          (data.collectorName = 'tts'),
          data
        );
      })();
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, require) {
      /** @type {number} */
      exports.__esModule = 1;
      var lang = require(0);
      var ContainerDebugAdapter = require(27);
      var LinkCreate = (function () {
        /**
         * @param {!Object} e
         * @return {undefined}
         */
        function data(e) {
          /** @type {null} */
          this.token = null;
          this.token = {
            isCompatible: this.isCompatible(),
            pageHasCaptcha: this.pageHasCaptcha(),
          };
          try {
            this.storage = e || window.sessionStorage || window.localStorage;
          } catch (e) {}
          if (this.token.isCompatible && this.token.pageHasCaptcha) {
            this.startProofOfWork();
          }
        }
        return (
          (data.prototype.isCompatible = function () {
            return !!(
              fetch &&
              Promise &&
              Array &&
              'function' == typeof Array.from &&
              document.cookie &&
              document.cookie.length &&
              'function' == typeof document.querySelectorAll &&
              window.Worker &&
              window.crypto &&
              window.crypto.subtle &&
              (window.URL || window.webkitURL) &&
              window.Blob
            );
          }),
          (data.prototype.getProofOfWorkScript = function () {
            return lang.__awaiter(this, void 0, void 0, function () {
              var e;
              var n;
              var result;
              var i;
              var values;
              var value;
              var point;
              var ajaxPostUrl;
              var pt;
              var movesLength;
              var j;
              var canvasLayersManager;
              return lang.__generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    /** @type {!NodeList<Element>} */
                    e = document.querySelectorAll('script');
                    /** @type {number} */
                    n = 0;
                    /** @type {number} */
                    _a.label = 1;
                  case 1:
                    if (!(n < e.length)) {
                      return [3, 9];
                    }
                    if (!(result = e[n].src)) {
                      return [3, 8];
                    }
                    /** @type {number} */
                    i = 0;
                    /** @type {!Array} */
                    values = data.FWCIM_SCRIPT_MATCHERS;
                    /** @type {number} */
                    _a.label = 2;
                  case 2:
                    return i < values.length
                      ? ((value = values[i]),
                        (point = value.exec(result)) && point.length >= 2
                          ? ((ajaxPostUrl = point[1] + data.PROOF_OF_WORK_SCRIPT_NAME),
                            [4, fetch(ajaxPostUrl)])
                          : [3, 7])
                      : [3, 8];
                  case 3:
                    if (!(pt = _a.sent()) || !pt.ok) {
                      return [3, 7];
                    }
                    /** @type {number} */
                    _a.label = 4;
                  case 4:
                    return (
                      _a.trys.push([4, 6, , 7]),
                      (movesLength = window.URL || window.webkitURL),
                      (canvasLayersManager = (j = movesLength).createObjectURL),
                      [4, pt.blob()]
                    );
                  case 5:
                    return [2, canvasLayersManager.apply(j, [_a.sent()])];
                  case 6:
                    return _a.sent(), [3, 7];
                  case 7:
                    return i++, [3, 2];
                  case 8:
                    return n++, [3, 1];
                  case 9:
                    return [2, null];
                }
              });
            });
          }),
          (data.prototype.pageHasCaptcha = function () {
            var args = ContainerDebugAdapter['default'].CAPTCHA_FIELDS;
            /** @type {number} */
            var i = 0;
            for (; i < args.length; i++) {
              if (document.querySelectorAll(args[i]).length) {
                return 1;
              }
            }
            return 0;
          }),
          (data.prototype.getSessionId = function () {
            /** @type {number} */
            var CR_index = 0;
            /** @type {!Array<string>} */
            var row = document.cookie.split(';');
            for (; CR_index < row.length; CR_index++) {
              /** @type {!Array<string>} */
              var termFragments = row[CR_index].split('=');
              if (
                2 === termFragments.length &&
                termFragments[0].trim() === data.SESSION_ID_COOKIE_NAME
              ) {
                return termFragments[1].trim();
              }
            }
            return null;
          }),
          (data.prototype.getDifficulty = function () {
            return (
              Math.floor(
                Math.random() *
                  (data.MAX_PROOF_OF_WORK_DIFFICULTY - data.MIN_PROOF_OF_WORK_DIFFICULTY)
              ) + data.MIN_PROOF_OF_WORK_DIFFICULTY
            );
          }),
          (data.prototype.startProofOfWork = function () {
            return lang.__awaiter(this, void 0, void 0, function () {
              var langMap;
              var clientApiUrl;
              var x;
              var i;
              var all;
              var c;
              var n;
              var a;
              return lang.__generator(this, function (_context) {
                switch (_context.label) {
                  case 0:
                    return [4, this.getProofOfWorkScript()];
                  case 1:
                    if ((clientApiUrl = _context.sent())) {
                      if (((x = new Date().getTime()), (i = this.getDifficulty()), this.storage)) {
                        try {
                          if ((all = this.storage.getItem(data.POW_ATTEMPT_LS_KEY))) {
                            /** @type {*} */
                            c = JSON.parse(all);
                            n = c[data.POW_ATTEMPT_DIFFICULTY_KEY];
                            a = c[data.POW_ATTEMPT_TIME_KEY];
                            if (
                              'number' == typeof n &&
                              'number' == typeof a &&
                              x - a < 1000 * data.POW_ATTEMPT_TTL_SECONDS
                            ) {
                              /** @type {number} */
                              i = Math.max(data.MIN_PROOF_OF_WORK_DIFFICULTY, Math.min(i, n - 1));
                            }
                          }
                          this.storage.setItem(
                            data.POW_ATTEMPT_LS_KEY,
                            JSON.stringify(
                              (((langMap = {})[data.POW_ATTEMPT_DIFFICULTY_KEY] = i),
                              (langMap[data.POW_ATTEMPT_TIME_KEY] = x),
                              langMap)
                            )
                          );
                        } catch (u) {}
                      }
                      this.token = lang.__assign({}, this.token, {
                        start: x,
                        difficulty: i,
                        iv: this.getSessionId(),
                      });
                      this.computeToken(clientApiUrl, this.token.iv, this.token.difficulty);
                    }
                    return [2];
                }
              });
            });
          }),
          (data.prototype.computeToken = function (url, nonce, skipupdate) {
            var req = this;
            this.worker = new window.Worker(url);
            this.worker.postMessage({
              difficulty: skipupdate,
              iv: nonce,
            });
            /**
             * @param {!Object} data
             * @return {undefined}
             */
            this.worker.onmessage = function (data) {
              try {
                /** @type {number} */
                req.token.end = new Date().getTime();
                /** @type {number} */
                req.token.time = req.token.end - req.token.start;
                /** @type {!Array<?>} */
                req.token.token = Array.from(data.data.token);
                req.token.difficulty = data.data.difficulty;
                req.token.iv = data.data.iv;
              } catch (default_favicon) {
                req.token.error = default_favicon.toString();
              }
            };
          }),
          (data.prototype.collect = function () {
            return lang.__awaiter(this, void 0, void 0, function () {
              return lang.__generator(this, function () {
                return [
                  2,
                  {
                    token: this.token,
                  },
                ];
              });
            });
          }),
          (data.MIN_PROOF_OF_WORK_DIFFICULTY = 8),
          (data.MAX_PROOF_OF_WORK_DIFFICULTY = 12),
          (data.PROOF_OF_WORK_SCRIPT_NAME = 'fwcim-pow.js'),
          (data.FWCIM_SCRIPT_MATCHERS = [/^(https:\/\/.+\/common\/login\/)fwcim/]),
          (data.SESSION_ID_COOKIE_NAME = 'session-id'),
          (data.POW_ATTEMPT_LS_KEY = 'fwcim-pow-state'),
          (data.POW_ATTEMPT_DIFFICULTY_KEY = 'd'),
          (data.POW_ATTEMPT_TIME_KEY = 't'),
          (data.POW_ATTEMPT_TTL_SECONDS = 300),
          (data.collectorName = 'pow'),
          data
        );
      })();
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, Class) {
      /** @type {number} */
      exports.__esModule = 1;
      var Util = Class(0);
      var Bar = Class(1);
      var LinkCreate = (function (_super) {
        /**
         * @param {!Object} options
         * @return {?}
         */
        function load(options) {
          var data = options.form;
          var o = _super.call(this) || this;
          return (o.formMethod = (data.method || 'get').toLocaleLowerCase()), o;
        }
        return (
          Util.__extends(load, _super),
          (load.prototype.collectData = function () {
            return Util.__awaiter(this, void 0, void 0, function () {
              return Util.__generator(this, function () {
                return [
                  2,
                  {
                    auth: {
                      form: {
                        method: this.formMethod,
                      },
                    },
                  },
                ];
              });
            });
          }),
          load
        );
      })(Bar['default']);
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, _interopRequireDefault) {
      /** @type {number} */
      exports.__esModule = 1;
      var NKScripting = _interopRequireDefault(0);
      var _DocumentFragment = _interopRequireDefault(18);
      var _HTMLParser = _interopRequireDefault(3);
      var _AnchorElement = _interopRequireDefault(6);
      var LinkCreate = (function () {
        /**
         * @param {!Object} options
         * @return {undefined}
         */
        function options(options) {
          /** @type {!Array} */
          this.telemetryCollectors = [];
          this.form = options.form;
          this.bindInputTelemetry(options.cycleBuffer);
        }
        return (
          (options.prototype.bindInputTelemetry = function (canCreateDiscussions) {
            if (void 0 === canCreateDiscussions) {
              /** @type {number} */
              canCreateDiscussions = -1;
            }
            var crossfilterable_layers = new _HTMLParser['default'](this.form).querySelectorAll(
              options.INPUT_SELECTORS.join(',')
            );
            /** @type {number} */
            var layer_i = 0;
            for (; layer_i < crossfilterable_layers.length; layer_i++) {
              var baseElement = crossfilterable_layers[layer_i];
              var element = baseElement;
              var id = element.id || element.name;
              if (id) {
                if ('string' == typeof options.FORM_ID_ALIASES[id]) {
                  id = options.FORM_ID_ALIASES[id];
                }
                var telemetry = new _DocumentFragment['default']({
                  form: this.form,
                  element: baseElement,
                  cycleBuffer: canCreateDiscussions,
                });
                this.telemetryCollectors.push(
                  new _AnchorElement['default']({
                    telemetry: telemetry,
                    key: id,
                  })
                );
              }
            }
          }),
          (options.prototype.collect = function () {
            return NKScripting.__awaiter(this, void 0, void 0, function () {
              var e;
              var i;
              var options;
              var newPattern;
              return NKScripting.__generator(this, function (_context) {
                switch (_context.label) {
                  case 0:
                    e = {};
                    /** @type {number} */
                    i = 0;
                    /** @type {number} */
                    _context.label = 1;
                  case 1:
                    return i < this.telemetryCollectors.length
                      ? ((options = this.telemetryCollectors[i]),
                        (newPattern = [{}, e]),
                        [4, options.collect()])
                      : [3, 4];
                  case 2:
                    e = NKScripting.__assign.apply(void 0, newPattern.concat([_context.sent()]));
                    /** @type {number} */
                    _context.label = 3;
                  case 3:
                    return i++, [3, 1];
                  case 4:
                    return [
                      2,
                      {
                        form: e,
                      },
                    ];
                }
              });
            });
          }),
          (options.INPUT_SELECTORS = [
            'input[type="text"]',
            'input[type="password"]',
            'input[type="email"]',
            'input[type="phone"]',
            'input[type="date"]',
            'input[type="datetime"]',
            'input[type="numeric"]',
          ]),
          (options.EMAIL_INPUT_ALIAS = 'email'),
          (options.PASSWORD_INPUT_ALIAS = 'password'),
          (options.FORM_ID_ALIASES = {
            ap_email: options.EMAIL_INPUT_ALIAS,
            ap_password: options.PASSWORD_INPUT_ALIAS,
          }),
          (options.collectorName = 'input'),
          options
        );
      })();
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, __webpack_require__) {
      /** @type {number} */
      exports.__esModule = 1;
      var Util = __webpack_require__(0);
      var _UiIcon = __webpack_require__(1);
      var LinkCreate = (function (_super) {
        /**
         * @return {?}
         */
        function ctx() {
          return (null !== _super && _super.apply(this, arguments)) || this;
        }
        return (
          Util.__extends(ctx, _super),
          (ctx.prototype.collectData = function () {
            return Util.__awaiter(this, void 0, void 0, function () {
              var method;
              var label_str;
              return Util.__generator(this, function () {
                return (
                  (method = screen),
                  (label_str =
                    screen.width +
                    '-' +
                    screen.height +
                    '-' +
                    screen.availHeight +
                    '-' +
                    screen.colorDepth),
                  (label_str =
                    label_str +
                    ('-' + (method.deviceXDPI !== undefined ? method.deviceXDPI : '*'))),
                  (label_str =
                    label_str +
                    ('-' + (method.logicalXDPI !== undefined ? method.logicalXDPI : '*'))),
                  [
                    2,
                    {
                      screenInfo: (label_str =
                        label_str +
                        ('-' +
                          (method.fontSmoothingEnabled !== undefined
                            ? method.fontSmoothingEnabled
                              ? 1
                              : 0
                            : '*'))),
                    },
                  ]
                );
              });
            });
          }),
          (ctx.collectorName = 'screen'),
          ctx
        );
      })(_UiIcon['default']);
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, __webpack_require__) {
      /** @type {number} */
      exports.__esModule = 1;
      var Util = __webpack_require__(0);
      var _UiIcon = __webpack_require__(1);
      var LinkCreate = (function (_super) {
        /**
         * @return {?}
         */
        function Editor() {
          return (null !== _super && _super.apply(this, arguments)) || this;
        }
        return (
          Util.__extends(Editor, _super),
          (Editor.prototype.collectData = function () {
            return Util.__awaiter(this, void 0, void 0, function () {
              var b;
              var plugins;
              var i;
              var line;
              var prolog;
              var B;
              return Util.__generator(this, function () {
                /** @type {null} */
                b = null;
                /** @type {!Array} */
                plugins = [];
                /** @type {number} */
                i = 0;
                for (; i < window.navigator.plugins.length; i++) {
                  line = window.navigator.plugins.item(i);
                  prolog = line.name + ' ' + line.description.replace(/[^0-9]/g, '');
                  plugins.push({
                    name: line.name,
                    version: line.version,
                    str: prolog,
                  });
                  if (line.name.match(/Shockwave Flash/)) {
                    if (line.version) {
                      b = line.version;
                    } else {
                      B = line.description.match(/([0-9.]+)\s+r([0-9.]+)/);
                      b = B && B[1] + '.' + B[2];
                    }
                  }
                }
                return [
                  2,
                  {
                    flashVersion: b,
                    plugins: plugins,
                  },
                ];
              });
            });
          }),
          (Editor.collectorName = 'navigator'),
          Editor
        );
      })(_UiIcon['default']);
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, __webpack_require__) {
      /** @type {number} */
      exports.__esModule = 1;
      var _UiIcon = __webpack_require__(0);
      var LinkCreate = (function () {
        /**
         * @param {!Object} state
         * @return {undefined}
         */
        function api(state) {
          var container = state.container;
          this.container = container;
          this.setupVBScript();
        }
        return (
          (api.prototype.setupVBScript = function () {
            if (!this.container) {
              throw new Error('The container was not found.');
            }
            /** @type {!Element} */
            var data = document.createElement('script');
            /** @type {string} */
            data.type = 'text/vbscript';
            /** @type {string} */
            data.text = api.VB_SCRIPT;
            this.container.appendChild(data);
          }),
          (api.prototype.checkActiveXPlugin = function (version, query) {
            /** @type {number} */
            var n = 1;
            try {
              if (dAXP) {
                /** @type {number} */
                n = 1;
              }
            } catch (i) {
              /** @type {number} */
              n = 0;
            }
            if (n) {
              var v = dAXP(version, query);
              if (v) {
                return {
                  name: version,
                  version: v,
                  str: version + ' : ' + v,
                };
              }
            }
            return null;
          }),
          (api.prototype.collect = function () {
            return _UiIcon.__awaiter(this, void 0, void 0, function () {
              var e;
              var aSettings;
              var o;
              var t;
              return _UiIcon.__generator(this, function () {
                return (
                  (e = navigator.userAgent.match(/Windows NT 6\.0/)),
                  (aSettings = []).push(
                    this.checkActiveXPlugin('ShockwaveDirector', 'SWCtl.SWCtl')
                  ),
                  (o = this.checkActiveXPlugin('ShockwaveFlash', 'ShockwaveFlash.ShockwaveFlash')),
                  (t = null),
                  o && ((t = (o.version >> 16) + '.' + (65535 & o.version)), aSettings.push(o)),
                  e ||
                    (aSettings.push(
                      this.checkActiveXPlugin(
                        'RealPlayer',
                        'RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)'
                      )
                    ),
                    aSettings.push(
                      this.checkActiveXPlugin(
                        'RealPlayer',
                        'RealVideo.RealVideo(tm) ActiveX Control (32-bit)'
                      )
                    )),
                  [
                    2,
                    {
                      plugins: aSettings,
                      flashVersion: t,
                    },
                  ]
                );
              });
            });
          }),
          (api.VB_SCRIPT =
            'Function dAXP(n, v)\non error resume next\nset o = CreateObject(v)\nIf IsObject(o) Then\nSelect case n\ncase "ShockwaveDirector"\nf = o.ShockwaveVersion("")\ncase "ShockwaveFlash"\nf = o.FlashVersion()\ncase "RealPlayer"\nf = o.GetVersionInfo\ncase Else\nf = ""\nend Select\ndAXP = f\nEnd If\nEnd Function'),
          (api.collectorName = 'ax-plugin'),
          api
        );
      })();
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, __webpack_require__) {
      /** @type {number} */
      exports.__esModule = 1;
      var _UiIcon = __webpack_require__(0);
      var LinkCreate = (function () {
        /**
         * @param {!Object} state
         * @return {undefined}
         */
        function api(state) {
          var container = state.container;
          this.container = container;
          this.capsEl = this.prepareBrowserCapabilitiesElement();
        }
        return (
          (api.prototype.prepareBrowserCapabilitiesElement = function () {
            if (this.container) {
              /** @type {!Element} */
              var container = document.createElement('span');
              return (
                (container.id = 'fwcim-caps'),
                (container.style.behavior = "url('#default#clientCaps')"),
                this.container.appendChild(container),
                container
              );
            }
            throw new Error('The container does not exist.');
          }),
          (api.prototype.collect = function () {
            return _UiIcon.__awaiter(this, void 0, void 0, function () {
              var newFullLayout;
              return _UiIcon.__generator(this, function () {
                return (
                  (newFullLayout = this.capsEl),
                  [
                    2,
                    {
                      plugins: Object.keys(api.COMPONENTS).reduce(function (libraries, i) {
                        var pie = api.COMPONENTS[i];
                        if (
                          newFullLayout.isComponentInstalled &&
                          newFullLayout.isComponentInstalled(pie, 'ComponentID')
                        ) {
                          var v = newFullLayout.getComponentVersion(pie, 'ComponentID');
                          libraries.push({
                            name: i,
                            version: v,
                            str: '|' + i + ' ' + v,
                          });
                        }
                        return libraries;
                      }, []),
                    },
                  ]
                );
              });
            });
          }),
          (api.collectorName = 'as-plugin'),
          (api.COMPONENTS = {
            AB: '{7790769C-0471-11D2-AF11-00C04FA35D02}',
            WDUN: '{89820200-ECBD-11CF-8B85-00AA005B4340}',
            DA: '{283807B5-2C60-11D0-A31D-00AA00B92C03}',
            DAJC: '{4F216970-C90C-11D1-B5C7-0000F8051515}',
            DS: '{44BBA848-CC51-11CF-AAFA-00AA00B6015C}',
            DHDB: '{9381D8F2-0288-11D0-9501-00AA00B911A5}',
            DHDBFJ: '{4F216970-C90C-11D1-B5C7-0000F8051515}',
            ICW: '{5A8D6EE0-3E18-11D0-821E-444553540000}',
            IE: '{89820200-ECBD-11CF-8B85-00AA005B4383}',
            IECFJ: '{08B0E5C0-4FCB-11CF-AAA5-00401C608555}',
            WMP: '{22D6F312-B0F6-11D0-94AB-0080C74C7E95}',
            NN: '{44BBA842-CC51-11CF-AAFA-00AA00B6015B}',
            OBP: '{3AF36230-A269-11D1-B5BF-0000F8051515}',
            OE: '{44BBA840-CC51-11CF-AAFA-00AA00B6015C}',
            TS: '{CC2A9BA0-3BDD-11D0-821E-444553540000}',
            MVM: '{08B0E5C0-4FCB-11CF-AAA5-00401C608500}',
            DDE: '{44BBA855-CC51-11CF-AAFA-00AA00B6015F}',
            DOTNET: '{6FAB99D0-BAB8-11D1-994A-00C04F98BBC9}',
            YHOO: '{E5D12C4E-7B4F-11D3-B5C9-0050045C3C96}',
            SWDNEW: '{166B1BCA-3F9C-11CF-8075-444553540000}',
            DOTNETFM: '{89B4C1CD-B018-4511-B0A1-5476DBF70820}',
            MDFH: '{8EFA4753-7169-4CC3-A28B-0A1643B8A39B}',
            FLH: '{D27CDB6E-AE6D-11CF-96B8-444553540000}',
            SW: '{2A202491-F00D-11CF-87CC-0020AFEECF20}',
            SWD: '{233C1507-6A77-46A4-9443-F871F945D258}',
            RP: '{CFCDAA03-8BE4-11CF-B84B-0020AFBBCCFA}',
            QT: '{DE4AF3B0-F4D4-11D3-B41A-0050DA2E6C21}',
          }),
          api
        );
      })();
      exports['default'] = LinkCreate;
    },
    function () {
      /** @type {number} */
      exports.__esModule = 1;
      var LinkCreate = (function () {
        /**
         * @return {undefined}
         */
        function browser() {}
        return (
          (browser.ie = function () {
            return !!window.navigator.userAgent.match(/MSIE [0-9.]+/i);
          }),
          (browser.windows = function () {
            return !!window.navigator.userAgent.match(/Windows/i);
          }),
          browser
        );
      })();
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, __webpack_require__) {
      /** @type {number} */
      exports.__esModule = 1;
      var Util = __webpack_require__(0);
      var connection_manager_1 = __webpack_require__(2);
      var _UiIcon = __webpack_require__(18);
      var LinkCreate = (function (_super) {
        /**
         * @param {?} message
         * @return {?}
         */
        function ParseError(message) {
          var that = _super.call(this, message) || this;
          return (
            (that.refreshes = 0),
            (that.captchaRefreshLinks = message.captchaRefreshLinks),
            that.bindCaptcha(),
            that
          );
        }
        return (
          Util.__extends(ParseError, _super),
          (ParseError.prototype.bindCaptcha = function () {
            var columns = this;
            new connection_manager_1['default'](this.element).addEventListener(
              'focus',
              function () {
                if (!columns.firstFocusTime) {
                  /** @type {number} */
                  columns.firstFocusTime = new Date().getTime();
                }
              }
            );
            this.captchaRefreshLinks.forEach(function (key) {
              return new connection_manager_1['default'](key).addEventListener(
                'click',
                function () {
                  return columns.refreshes++;
                }
              );
            });
          }),
          (ParseError.prototype.keyPressIntervals = function () {
            var boundingRect = this;
            var boneTranslations = this.keyCycles.get().filter(function (groupedBoundingRect) {
              return groupedBoundingRect.startEventTime > boundingRect.firstFocusTime;
            });
            /** @type {!Array} */
            var r = [];
            /** @type {number} */
            var ti = 0;
            for (; ti < boneTranslations.length; ti++) {
              if (0 === ti) {
                r.push(boneTranslations[ti].startEventTime - this.firstFocusTime);
              } else {
                r.push(
                  boneTranslations[ti].startEventTime - boneTranslations[ti - 1].startEventTime
                );
              }
            }
            return r;
          }),
          (ParseError.prototype.get = function () {
            return Util.__assign({}, _super.prototype.get.call(this), {
              refreshes: this.refreshes,
              keyPressIntervals: this.keyPressIntervals(),
            });
          }),
          ParseError
        );
      })(_UiIcon['default']);
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, _interopRequireDefault) {
      /** @type {number} */
      exports.__esModule = 1;
      var _HTMLParser = _interopRequireDefault(0);
      var _DocumentFragment = _interopRequireDefault(60);
      var _AnchorElement = _interopRequireDefault(6);
      var _Range = _interopRequireDefault(3);
      var LinkCreate = (function () {
        /**
         * @param {!Object} data
         * @return {undefined}
         */
        function f(data) {
          var r = new _Range['default'](data.form);
          /** @type {!Array} */
          var appendedRows = [];
          var rows = r.querySelectorAll(data.captchaRefreshLinksSelector);
          /** @type {number} */
          var i = 0;
          for (; i < rows.length; i++) {
            appendedRows.push(rows[i]);
          }
          var this_area = r.querySelector(data.captchaFieldsSelector);
          if (null != this_area) {
            this.telemetryCollector = new _AnchorElement['default']({
              key: f.KEY,
              telemetry: new _DocumentFragment['default']({
                form: data.form,
                captchaRefreshLinks: appendedRows,
                element: this_area,
              }),
            });
          }
        }
        return (
          (f.prototype.collect = function () {
            return _HTMLParser.__awaiter(this, void 0, void 0, function () {
              return _HTMLParser.__generator(this, function () {
                return null != this.telemetryCollector
                  ? [2, this.telemetryCollector.collect()]
                  : [2, null];
              });
            });
          }),
          (f.KEY = 'captcha'),
          (f.collectorName = 'captchainput'),
          f
        );
      })();
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, __webpack_require__) {
      /** @type {number} */
      exports.__esModule = 1;
      var Util = __webpack_require__(0);
      var _DocumentFragment = __webpack_require__(19);
      var _UiIcon = __webpack_require__(1);
      var LinkCreate = (function (_super) {
        /**
         * @param {number} server
         * @return {?}
         */
        function Editor(server) {
          var options = _super.call(this) || this;
          return (options.timeoutMs = server), options.scheduleCaching(), options;
        }
        return (
          Util.__extends(Editor, _super),
          (Editor.prototype.scheduleCaching = function () {
            var TimeRecord = this;
            /** @type {!Object} */
            var self = window;
            if ('function' == typeof self.requestIdleCallback) {
              self.requestIdleCallback(
                function () {
                  TimeRecord.collect();
                },
                {
                  timeout: this.timeoutMs,
                }
              );
            } else {
              new _DocumentFragment['default'](function () {
                TimeRecord.collect();
              }, this.timeoutMs);
            }
          }),
          Editor
        );
      })(_UiIcon['default']);
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, require) {
      /** @type {number} */
      exports.__esModule = 1;
      var Util = require(0);
      var ContainerDebugAdapter = require(5);
      var handlers = require(3);
      var c = require(62);
      var LinkCreate = (function (_super) {
        /**
         * @param {!Object} options
         * @return {?}
         */
        function canvas(options) {
          var data = _super.call(this, canvas.CANVAS_COLLECTOR_PROACTIVE_CACHE_TIMEOUT) || this;
          return (
            (data.form = options.form),
            (data.canvas = document.createElement('canvas')),
            (data.formSelectorQuerier = new handlers['default'](data.form)),
            data
          );
        }
        return (
          Util.__extends(canvas, _super),
          (canvas.prototype.createHistogram = function (waitFor) {
            /** @type {!Array} */
            var nextQueryObj = [];
            /** @type {number} */
            var a = 0;
            for (; a < 256; nextQueryObj[a++] = 0) {}
            /** @type {number} */
            var j = 0;
            for (; j < waitFor.length; j++) {
              nextQueryObj[waitFor[j]]++;
            }
            return nextQueryObj;
          }),
          (canvas.prototype.collectData = function () {
            return Util.__awaiter(this, void 0, void 0, function () {
              var res;
              var ctx;
              var gradient;
              var contractHash;
              var hash;
              var p;
              var b;
              var c;
              return Util.__generator(this, function () {
                return this.canvas &&
                  'function' == typeof this.canvas.getContext &&
                  this.canvas.getContext('2d')
                  ? ((res = []),
                    (this.canvas.width = canvas.CANVAS_WIDTH),
                    (this.canvas.height = canvas.CANVAS_HEIGHT),
                    (this.canvas.style.display = 'inline'),
                    (ctx = this.canvas.getContext('2d')).rect(0, 0, 10, 10),
                    ctx.rect(2, 2, 6, 6),
                    res.push(0 == ctx.isPointInPath(5, 5, 'evenodd') ? 'yes' : 'no'),
                    (ctx.textBaseline = 'alphabetic'),
                    (ctx.fillStyle = '#f60'),
                    ctx.fillRect(125, 1, 62, 20),
                    (ctx.fillStyle = '#069'),
                    (ctx.font = '8pt Arial'),
                    ctx.fillText('Cwm fjordbank glyphs vext quiz,', 2, 15),
                    (ctx.fillStyle = 'rgba(102, 204, 0, 0.2)'),
                    (ctx.font = '11pt Arial'),
                    ctx.fillText('Cwm fjordbank glyphs vext quiz,', 4, 45),
                    (ctx.globalCompositeOperation = 'multiply'),
                    (ctx.fillStyle = 'rgb(255,0,255)'),
                    ctx.beginPath(),
                    ctx.arc(20, 20, 20, 0, 2 * Math.PI, 1),
                    ctx.closePath(),
                    ctx.fill(),
                    (ctx.fillStyle = 'rgb(0,255,255)'),
                    ctx.beginPath(),
                    ctx.arc(50, 20, 20, 0, 2 * Math.PI, 1),
                    ctx.closePath(),
                    ctx.fill(),
                    (ctx.fillStyle = 'rgb(255,255,0)'),
                    ctx.beginPath(),
                    ctx.arc(35, 40, 20, 0, 2 * Math.PI, 1),
                    ctx.closePath(),
                    ctx.fill(),
                    (ctx.fillStyle = 'rgb(255,0,255)'),
                    ctx.arc(20, 25, 10, 0, 2 * Math.PI, 1),
                    ctx.arc(20, 25, 20, 0, 2 * Math.PI, 1),
                    ctx.fill('evenodd'),
                    (gradient = ctx.createLinearGradient(40, 50, 60, 78)).addColorStop(0, 'blue'),
                    gradient.addColorStop(0.5, 'red'),
                    gradient.addColorStop(1, 'white'),
                    (ctx.fillStyle = gradient),
                    ctx.beginPath(),
                    ctx.arc(70, 50, 10, 0, 2 * Math.PI, 1),
                    ctx.closePath(),
                    ctx.fill(),
                    (ctx.font = '10pt dfgstg'),
                    ctx.strokeText(Math.tan(-1e300).toString(), 4, 30),
                    ctx.fillText(Math.cos(-1e300).toString(), 4, 40),
                    ctx.fillText(Math.sin(-1e300).toString(), 4, 50),
                    ctx.beginPath(),
                    ctx.moveTo(25, 0),
                    ctx.quadraticCurveTo(1, 1, 1, 5),
                    ctx.quadraticCurveTo(1, 76, 26, 10),
                    ctx.quadraticCurveTo(26, 96, 6, 12),
                    ctx.quadraticCurveTo(60, 96, 41, 10),
                    ctx.quadraticCurveTo(121, 86, 101, 7),
                    ctx.quadraticCurveTo(121, 1, 56, 1),
                    ctx.stroke(),
                    (ctx.globalCompositeOperation = 'difference'),
                    (ctx.fillStyle = 'rgb(255,0,255)'),
                    ctx.beginPath(),
                    ctx.arc(80, 20, 20, 0, 2 * Math.PI, 1),
                    ctx.closePath(),
                    ctx.fill(),
                    (ctx.fillStyle = 'rgb(0,255,255)'),
                    ctx.beginPath(),
                    ctx.arc(110, 20, 20, 0, 2 * Math.PI, 1),
                    ctx.closePath(),
                    ctx.fill(),
                    (ctx.fillStyle = 'rgb(255,255,0)'),
                    ctx.beginPath(),
                    ctx.arc(95, 40, 20, 0, 2 * Math.PI, 1),
                    ctx.closePath(),
                    ctx.fill(),
                    (ctx.fillStyle = 'rgb(255,0,255)'),
                    res.push('canvas fp:' + this.canvas.toDataURL()),
                    (contractHash = canvas.CRC_CALCULATOR.calculate(res.join('~'))),
                    (hash = null),
                    this.form &&
                      (p = this.formSelectorQuerier.querySelectorAll('input[type=email]')).length >
                        0 &&
                      ((b = p[0]),
                      (c = (b.value || 'Not Available').toUpperCase()),
                      (ctx.fillStyle = '#808080'),
                      (ctx.font = '8pt Arial'),
                      ctx.fillText(c, 2, 30),
                      (hash = canvas.CRC_CALCULATOR.calculate(this.canvas.toDataURL()))),
                    [
                      2,
                      {
                        canvas: {
                          hash: contractHash,
                          emailHash: hash,
                          histogramBins: this.createHistogram(
                            ctx.getImageData(0, 0, canvas.CANVAS_WIDTH, canvas.CANVAS_HEIGHT).data
                          ),
                        },
                      },
                    ])
                  : [2, {}];
              });
            });
          }),
          (canvas.CANVAS_COLLECTOR_PROACTIVE_CACHE_TIMEOUT = 5000),
          (canvas.CRC_CALCULATOR = new ContainerDebugAdapter['default']()),
          (canvas.CANVAS_WIDTH = 150),
          (canvas.CANVAS_HEIGHT = 60),
          (canvas.collectorName = 'canvas'),
          canvas
        );
      })(c['default']);
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, __webpack_require__) {
      /** @type {number} */
      exports.__esModule = 1;
      var Util = __webpack_require__(0);
      var _UiIcon = __webpack_require__(21);
      var _classlist = __webpack_require__(20);
      /** @type {string} */
      var p = 'pageId';
      /** @type {string} */
      var key = 'openid.assoc_handle';
      /** @type {string} */
      var name = 'openid.return_to';
      var param = {
        amzn_whidbey_desktop_us: 'usflex',
      };
      var params = {
        amzn_whidbey_desktop_us: 'usflex',
      };
      var LinkCreate = (function (_super) {
        /**
         * @return {?}
         */
        function Editor() {
          var t = (null !== _super && _super.apply(this, arguments)) || this;
          return (t.returnUrlObfsucator = new _UiIcon['default']()), t;
        }
        return (
          Util.__extends(Editor, _super),
          (Editor.prototype.obfuscate = function (value) {
            var url = this.buildURL(value);
            if (!url || !this.shouldObfuscate(url)) {
              return value;
            }
            var k = url.getParameter(key);
            if (k in param) {
              url.setParameter(key, param[k]);
            }
            var i = url.getParameter(p);
            if ((i in params && url.setParameter(p, params[i]), url.hasParameter(name))) {
              var param = url.getParameter(name);
              url.setParameter(name, this.obfuscateReturnUrl(param));
            }
            return url.toString();
          }),
          (Editor.prototype.obfuscateReturnUrl = function (value) {
            return this.returnUrlObfsucator.obfuscate(value);
          }),
          (Editor.prototype.shouldObfuscate = function (request) {
            return (
              0 === request.getPathname().indexOf('/ap/') ||
              0 === request.getPathname().indexOf('/a/')
            );
          }),
          Editor
        );
      })(_classlist['default']);
      exports['default'] = LinkCreate;
    },
    function () {
      /** @type {number} */
      exports.__esModule = 1;
      var LinkCreate = (function () {
        /**
         * @param {string} target
         * @return {undefined}
         */
        function self(target) {
          /** @type {string} */
          this.url = target;
          var e = target.indexOf('#');
          this.fragementWithHash = e < 0 ? null : target.substring(e);
          var r = e < 0 ? target : target.substring(0, e);
          var x = r.indexOf('?');
          var trace = x < 0 ? r : r.substring(0, x);
          var n = x < 0 ? '' : r.substring(x + 1);
          /** @type {(Array<string>|null)} */
          var handle = /^([a-z][a-z0-9.+-]*:)?(\/+)?(.*)/i.exec(trace);
          /** @type {string} */
          this.schemaWithColon = handle[1];
          /** @type {string} */
          this.authorityPrefix = handle[2];
          /** @type {string} */
          var name = handle[3];
          if (!this.schemaWithColon || !name) {
            throw new TypeError('Invalid URL');
          }
          /** @type {number} */
          var lastDot = name.indexOf('@');
          /** @type {(null|string)} */
          this.userinfoWithAt = lastDot < 0 ? null : name.substring(0, lastDot + 1);
          /** @type {number} */
          var i = (name = name.substring(lastDot + 1)).indexOf('/');
          /** @type {(null|string)} */
          this.pathname = i < 0 ? null : name.substring(i);
          /** @type {string} */
          var ref = i < 0 ? name : name.substring(0, i);
          /** @type {(Array<string>|null)} */
          var refs = /^(\[[0-9a-z:]+\]|[^:]+)?(:[0-9]*)?/i.exec(ref);
          if (refs[0] !== ref) {
            throw new TypeError('Invalid URL');
          }
          if (
            ((this.rawHostname = refs[1]),
            (this.portWithColon = refs[2]),
            (this.parameters = x < 0 ? null : []),
            n.length > 0)
          ) {
            var optraceData = n.split('&');
            /** @type {number} */
            var i = 0;
            for (; i < optraceData.length; i++) {
              var pair = optraceData[i];
              var index = pair.indexOf('=');
              /** @type {string} */
              var previewKey =
                index < 0 ? decodeURIComponent(pair) : decodeURIComponent(pair.substring(0, index));
              /** @type {(null|string)} */
              var command_module_id =
                index < 0 ? null : decodeURIComponent(pair.substring(index + 1));
              this.parameters.push({
                key: previewKey,
                value: command_module_id,
              });
            }
          }
        }
        return (
          (self.prototype.setParameter = function (name, value) {
            if (!this.parameters) {
              /** @type {!Array} */
              this.parameters = [];
            }
            /** @type {string} */
            name = String(name);
            /** @type {string} */
            value = String(value);
            /** @type {number} */
            var r = 0;
            /** @type {number} */
            var i = 0;
            for (; i < this.parameters.length; i++) {
              var param = this.parameters[i];
              if (param.key === name) {
                if (r) {
                  this.parameters.splice(i--, 1);
                } else {
                  /** @type {string} */
                  param.value = value;
                  /** @type {number} */
                  r = 1;
                }
              }
            }
            if (!r) {
              this.parameters.push({
                key: name,
                value: value,
              });
            }
          }),
          (self.prototype.getParameter = function (name) {
            if (this.parameters) {
              /** @type {number} */
              var i = 0;
              for (; i < this.parameters.length; i++) {
                var param = this.parameters[i];
                if (param.key === name) {
                  return param.value || '';
                }
              }
            }
            return null;
          }),
          (self.prototype.hasParameter = function (name) {
            if (this.parameters) {
              /** @type {number} */
              var i = 0;
              for (; i < this.parameters.length; i++) {
                if (this.parameters[i].key === name) {
                  return 1;
                }
              }
            }
            return 0;
          }),
          (self.prototype.getRawHostname = function () {
            return this.rawHostname;
          }),
          (self.prototype.getPathname = function () {
            return this.pathname || '/';
          }),
          (self.prototype.toString = function () {
            return (
              this.schemaWithColon +
              (this.authorityPrefix || '') +
              (this.userinfoWithAt || '') +
              (this.rawHostname || '') +
              (this.portWithColon || '') +
              (this.pathname || '') +
              this.buildQuery() +
              (this.fragementWithHash || '')
            );
          }),
          (self.prototype.buildQuery = function () {
            if (!this.parameters) {
              return '';
            }
            if (0 === this.parameters.length) {
              return '?';
            }
            /** @type {!Array} */
            var curr = ['?'];
            /** @type {number} */
            var i = 0;
            for (; i < this.parameters.length; i++) {
              var d = this.parameters[i];
              if ('string' == typeof d.key && 'string' == typeof d.value) {
                curr.push(encodeURIComponent(d.key));
                curr.push('=');
                curr.push(encodeURIComponent(d.value));
              } else {
                if ('string' == typeof d.key) {
                  curr.push(encodeURIComponent(d.key));
                }
              }
              curr.push('&');
            }
            return curr.pop(), curr.join('');
          }),
          self
        );
      })();
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, __webpack_require__) {
      /** @type {number} */
      exports.__esModule = 1;
      var _UiIcon = __webpack_require__(21);
      var _classlist = __webpack_require__(64);
      var LinkCreate = (function () {
        /**
         * @return {undefined}
         */
        function deployOptions() {}
        return (
          (deployOptions.obfuscate = function (value) {
            return value && '' !== value.trim()
              ? this.OBFUSCATORS.reduce(function (value, options) {
                  return options.obfuscate(value);
                }, value)
              : value;
          }),
          (deployOptions.OBFUSCATORS = [new _UiIcon['default'](), new _classlist['default']()]),
          deployOptions
        );
      })();
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, _interopRequireDefault) {
      /** @type {number} */
      exports.__esModule = 1;
      var _node2 = _interopRequireDefault(27);
      var transport_connection_1 = _interopRequireDefault(44);
      var _HttpLatencyModule2 = _interopRequireDefault(40);
      var _HTMLSerializer = _interopRequireDefault(39);
      _interopRequireDefault(38);
      var LinkCreate = (function () {
        /**
         * @param {!Document} users
         * @param {?} actions
         * @param {!Function} name
         * @param {!Object} email
         * @return {undefined}
         */
        function self(users, actions, name, email) {
          /** @type {!Document} */
          this.selectorQuerier = users;
          this.objectEncoder = actions;
          /** @type {!Function} */
          this.encryptor = name;
          /** @type {!Object} */
          this.throttler = email;
          this.profilers = {};
        }
        return (
          (self.prototype.profile = function (rrshape) {
            if (rrshape) {
              this.profileForm('form[name="' + rrshape + '"]');
            } else {
              /** @type {!Array} */
              var t = ['.fwcim-form'];
              /** @type {number} */
              var frameIndex = 0;
              for (; frameIndex < self.AUTO_BIND_FORM_IDS.length; frameIndex++) {
                var i = self.AUTO_BIND_FORM_IDS[frameIndex];
                t.push('#' + i, 'form[name="' + i + '"]');
              }
              t.push('form[method="POST"][action^="/ap"]');
              this.profileForm(t.join(', '));
            }
          }),
          (self.prototype.profileForm = function (removeEvents) {
            var walkables = this.selectorQuerier.querySelectorAll(removeEvents);
            /** @type {number} */
            var j = 0;
            for (; j < walkables.length; j++) {
              var node = walkables[j];
              var id = node.getAttribute(self.FWCIM_ID_PROPERTY);
              if (!id) {
                id = this.generateRandomIdentifier();
                node.setAttribute(self.FWCIM_ID_PROPERTY, id);
                var program = new _node2['default'](node, this.objectEncoder, this.encryptor);
                this.profilers[id] = program;
                program.profile();
              }
            }
          }),
          (self.prototype.stopProfileForm = function (removeEvents) {
            var cclass = this.selectorQuerier.querySelectorAll(removeEvents);
            /** @type {number} */
            var j = 0;
            for (; j < cclass.length; j++) {
              var id = cclass[j].getAttribute(self.FWCIM_ID_PROPERTY);
              if (id && this.profilers[id]) {
                this.profilers[id].stop();
              }
            }
          }),
          (self.prototype.report = function (id, callback) {
            if ('function' != typeof callback) {
              throw new Error('You must specify a callback function.');
            }
            var o = this.selectorQuerier.querySelectorAll(id);
            if (o.length < 1) {
              callback(new Error('A form with that selector could not be found.'));
            } else {
              var id = o[0].getAttribute(self.FWCIM_ID_PROPERTY);
              if ('string' == typeof id && '' !== id.trim() && this.profilers[id] !== undefined) {
                this.profilers[id]
                  .collect()
                  .then(function (exisObj) {
                    return callback(null, exisObj);
                  })
                  ['catch'](function (identifierPositions) {
                    return callback(identifierPositions);
                  });
              } else {
                callback(new Error('The form has not been profiled yet.'));
              }
            }
          }),
          (self.prototype.useMercury = function () {}),
          (self.prototype.profilePage = function (req) {
            if ((void 0 === req && (req = {}), this.globalProfiler === undefined)) {
              /** @type {number} */
              req.globalReportInit = new Date().getTime();
              /** @type {null} */
              var obj = null;
              try {
                (obj = window.sessionStorage || window.localStorage).setItem(
                  self.LOCAL_STORAGE_TEST_KEY,
                  'test'
                );
                obj.removeItem(self.LOCAL_STORAGE_TEST_KEY);
              } catch (i) {
                /** @type {null} */
                obj = null;
              }
              var options = obj
                ? new _HttpLatencyModule2['default'](obj)
                : new _HTMLSerializer['default']();
              this.globalProfiler = new transport_connection_1['default'](
                this.selectorQuerier,
                this.throttler,
                this.objectEncoder,
                this.encryptor,
                options,
                window.ue,
                req
              );
              this.globalProfiler.profile();
            }
          }),
          (self.prototype.generateRandomIdentifier = function (clientHeight) {
            if (void 0 === clientHeight) {
              /** @type {number} */
              clientHeight = 8;
            }
            /** @type {string} */
            var pix_color = '';
            /** @type {number} */
            var targetOffsetHeight = 0;
            for (; targetOffsetHeight < clientHeight; targetOffsetHeight++) {
              /** @type {string} */
              pix_color =
                pix_color + self.ALPHABET.charAt(Math.floor(Math.random() * self.ALPHABET.length));
            }
            return pix_color;
          }),
          (self.FWCIM_ID_PROPERTY = 'data-fwcim-id'),
          (self.LOCAL_STORAGE_TEST_KEY = 'fwcim-ls-test'),
          (self.ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'),
          (self.AUTO_BIND_FORM_IDS = [
            'signin',
            'sign-in',
            'sign_in',
            'signInForm',
            'signInLeftForm',
            'signInRightForm',
            'signInMainForm',
            'newAccountForm',
            'forgotPasswordForm',
            'changeAccountInformationForm',
          ]),
          self
        );
      })();
      exports['default'] = LinkCreate;
    },
    function () {
      /** @type {number} */
      exports.__esModule = 1;
      var LinkCreate = (function () {
        /**
         * @return {undefined}
         */
        function NobleModule() {}
        return (
          (NobleModule.prototype.provide = function () {
            return {
              identifier: 'ECdITeCs',
              material: [1888420705, 2576816180, 2347232058, 874813317],
            };
          }),
          NobleModule
        );
      })();
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, __webpack_require__) {
      /** @type {number} */
      exports.__esModule = 1;
      var _UiIcon = __webpack_require__(0);
      var LinkCreate = (function () {
        /**
         * @param {?} r
         * @param {!Object} x
         * @return {undefined}
         */
        function C(r, x) {
          this.keyProvider = r;
          /** @type {!Object} */
          this.base64Encoder = x;
        }
        return (
          (C.prototype.encrypt = function (data) {
            return _UiIcon.__awaiter(this, void 0, void 0, function () {
              var e;
              return _UiIcon.__generator(this, function () {
                return [
                  2,
                  (e = this.keyProvider.provide()).identifier +
                    ':' +
                    this.base64Encoder.encode(this.doEncrypt(data, e.material)),
                ];
              });
            });
          }),
          (C.prototype.doEncrypt = function (text, k) {
            if (0 === text.length) {
              return '';
            }
            /** @type {number} */
            var n = Math.ceil(text.length / 4);
            /** @type {!Array} */
            var v = [];
            /** @type {number} */
            var index = 0;
            for (; index < n; index++) {
              /** @type {number} */
              v[index] =
                (255 & text.charCodeAt(4 * index)) +
                ((255 & text.charCodeAt(4 * index + 1)) << 8) +
                ((255 & text.charCodeAt(4 * index + 2)) << 16) +
                ((255 & text.charCodeAt(4 * index + 3)) << 24);
            }
            /** @type {number} */
            var ncells = Math.floor(6 + 52 / n);
            var y = v[0];
            var z = v[n - 1];
            /** @type {number} */
            var sum = 0;
            for (; ncells-- > 0; ) {
              /** @type {number} */
              var e = ((sum = sum + 2654435769) >>> 2) & 3;
              /** @type {number} */
              var p = 0;
              for (; p < n; p++) {
                y = v[(p + 1) % n];
                z = v[p] +=
                  (((z >>> 5) ^ (y << 2)) + ((y >>> 3) ^ (z << 4))) ^
                  ((sum ^ y) + (k[(3 & p) ^ e] ^ z));
              }
            }
            /** @type {!Array} */
            var f = [];
            /** @type {number} */
            var j = 0;
            for (; j < n; j++) {
              /** @type {string} */
              f[j] = String.fromCharCode(
                255 & v[j],
                (v[j] >>> 8) & 255,
                (v[j] >>> 16) & 255,
                (v[j] >>> 24) & 255
              );
            }
            return f.join('');
          }),
          C
        );
      })();
      exports['default'] = LinkCreate;
    },
    function () {
      /** @type {number} */
      exports.__esModule = 1;
      var LinkCreate = (function () {
        /**
         * @return {undefined}
         */
        function module() {}
        return (
          (module.prototype.encode = function (message) {
            return JSON && JSON.stringify
              ? JSON.stringify(message)
              : this.encodeWithPolyfill(message);
          }),
          (module.prototype.encodeWithPolyfill = function (obj) {
            if (null === obj || this.isNumberNaN(obj)) {
              return 'null';
            }
            if ('number' == typeof obj) {
              return '' + obj;
            }
            if ('boolean' == typeof obj) {
              return obj ? 'true' : 'false';
            }
            if ('object' == typeof obj) {
              if (this.isArray(obj)) {
                /** @type {!Array} */
                var depsSrcList = [];
                var prop;
                for (prop in obj) {
                  if (obj[prop] !== undefined) {
                    depsSrcList.push(this.encodeWithPolyfill(obj[prop]));
                  } else {
                    depsSrcList.push('null');
                  }
                }
                return '[' + depsSrcList.join(',') + ']';
              }
              var key;
              for (key in ((depsSrcList = []), obj)) {
                if (obj.hasOwnProperty(key) && obj[key] !== undefined) {
                  depsSrcList.push(
                    '"' + this.jsonEscape(key) + '":' + this.encodeWithPolyfill(obj[key])
                  );
                }
              }
              return '{' + depsSrcList.join(',') + '}';
            }
            if (obj === undefined) {
              throw new Error('Undefined values cannot be stringified.');
            }
            return '"' + this.jsonEscape(obj) + '"';
          }),
          (module.prototype.isArray = function (obj) {
            return Array.isArray ? Array.isArray(obj) : '[object Array]' === toString.call(obj);
          }),
          (module.prototype.isNumberNaN = function (value) {
            return 'number' == typeof value && isNaN(value);
          }),
          (module.prototype.jsonEscape = function (str) {
            return str.toString().replace(/[\\"\u0000-\u001F\u2028\u2029]/g, function (name) {
              return module.ESCAPED_CHARACTERS.hasOwnProperty(name)
                ? module.ESCAPED_CHARACTERS[name]
                : '\\u' + (name.charCodeAt(0) + 65536).toString(16).substring(1);
            });
          }),
          (module.ESCAPED_CHARACTERS = {
            '"': '\\"',
            '\\': '\\\\',
            '\b': '\\b',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '\t': '\\t',
          }),
          module
        );
      })();
      exports['default'] = LinkCreate;
    },
    function () {
      /** @type {number} */
      exports.__esModule = 1;
      var LinkCreate = (function () {
        /**
         * @param {!Object} fileName
         * @param {!Object} data
         * @param {!Object} length
         * @param {?} type
         * @return {undefined}
         */
        function c(fileName, data, length, type) {
          /** @type {!Object} */
          this.jsonEncoder = fileName;
          /** @type {!Object} */
          this.utf8Encoder = data;
          /** @type {!Object} */
          this.hexEncoder = length;
          this.crc32 = type;
        }
        return (
          (c.prototype.encode = function (data) {
            var buffer = this.utf8Encoder.encode(this.jsonEncoder.encode(data));
            return (
              this.hexEncoder.encode(this.crc32.calculate(buffer)) + c.CRC_JSON_SEPARATOR + buffer
            );
          }),
          (c.CRC_JSON_SEPARATOR = '#'),
          c
        );
      })();
      exports['default'] = LinkCreate;
    },
    function () {
      /**
       * @param {!Object} module
       * @return {?}
       */
      module.exports = function (module) {
        return (
          module.webpackPolyfill ||
            ((module.deprecate = function () {}),
            (module.paths = []),
            module.children || (module.children = []),
            Object.defineProperty(module, 'loaded', {
              enumerable: 1,
              get: function () {
                return module.l;
              },
            }),
            Object.defineProperty(module, 'id', {
              enumerable: 1,
              get: function () {
                return module.i;
              },
            }),
            (module.webpackPolyfill = 1)),
          module
        );
      };
    },
    function (module, exports, __webpack_require__) {
      (function (module) {
        var __WEBPACK_AMD_DEFINE_RESULT__;
        !(function (text) {
          if (!(o.global !== o && o.window !== o)) {
            text = o;
          }
          /**
           * @param {string} message
           * @return {undefined}
           */
          var IllegalTimeError = function (message) {
            /** @type {string} */
            this.message = message;
          };
          /** @type {string} */
          (IllegalTimeError.prototype = new Error()).name = 'InvalidCharacterError';
          /**
           * @param {string} type
           * @return {?}
           */
          var msgHasRoute = function (type) {
            throw new IllegalTimeError(type);
          };
          /** @type {string} */
          var s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
          /** @type {!RegExp} */
          var REGEX_SPACE_CHARACTERS = /[\t\n\f\r ]/g;
          var obj = {
            encode: function (data) {
              /** @type {string} */
              data = String(data);
              if (/[^\0-\xFF]/.test(data)) {
                msgHasRoute(
                  'The string to be encoded contains characters outside of the Latin1 range.'
                );
              }
              var c;
              var e;
              var r;
              var a;
              /** @type {number} */
              var d = data.length % 3;
              /** @type {string} */
              var b = '';
              /** @type {number} */
              var i = -1;
              /** @type {number} */
              var diff = data.length - d;
              for (; ++i < diff; ) {
                /** @type {number} */
                c = data.charCodeAt(i) << 16;
                /** @type {number} */
                e = data.charCodeAt(++i) << 8;
                /** @type {number} */
                r = data.charCodeAt(++i);
                /** @type {string} */
                b =
                  b +
                  (s.charAt(((a = c + e + r) >> 18) & 63) +
                    s.charAt((a >> 12) & 63) +
                    s.charAt((a >> 6) & 63) +
                    s.charAt(63 & a));
              }
              return (
                2 == d
                  ? ((c = data.charCodeAt(i) << 8),
                    (e = data.charCodeAt(++i)),
                    (b =
                      b +
                      (s.charAt((a = c + e) >> 10) +
                        s.charAt((a >> 4) & 63) +
                        s.charAt((a << 2) & 63) +
                        '=')))
                  : 1 == d &&
                    ((a = data.charCodeAt(i)),
                    (b = b + (s.charAt(a >> 2) + s.charAt((a << 4) & 63) + '=='))),
                b
              );
            },
            decode: function (input) {
              /** @type {number} */
              var l = (input = String(input).replace(REGEX_SPACE_CHARACTERS, '')).length;
              if (l % 4 == 0) {
                /** @type {number} */
                l = (input = input.replace(/==?$/, '')).length;
              }
              if (l % 4 == 1 || /[^+a-zA-Z0-9/]/.test(input)) {
                msgHasRoute(
                  'Invalid character: the string to be decoded is not correctly encoded.'
                );
              }
              var d;
              var c;
              /** @type {number} */
              var q = 0;
              /** @type {string} */
              var samples = '';
              /** @type {number} */
              var i = -1;
              for (; ++i < l; ) {
                /** @type {number} */
                c = s.indexOf(input.charAt(i));
                /** @type {number} */
                d = q % 4 ? 64 * d + c : c;
                if (q++ % 4) {
                  /** @type {string} */
                  samples = samples + String.fromCharCode(255 & (d >> ((-2 * q) & 6)));
                }
              }
              return samples;
            },
            version: '0.1.0',
          };
          !((__WEBPACK_AMD_DEFINE_RESULT__ = function () {
            return obj;
          }.call(exports, __webpack_require__, exports, module)),
          __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
            (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        })(this);
      }.call(this, __webpack_require__(72)(module), __webpack_require__(4)));
    },
    function (canCreateDiscussions, exports, getVoxel) {
      /** @type {number} */
      exports.__esModule = 1;
      var b = getVoxel(73);
      var LinkCreate = (function () {
        /**
         * @return {undefined}
         */
        function LocaTable() {}
        return (
          (LocaTable.prototype.encode = function (body) {
            return b.encode(body);
          }),
          LocaTable
        );
      })();
      exports['default'] = LinkCreate;
    },
    function (canCreateDiscussions, exports, __webpack_require__) {
      /** @type {number} */
      exports.__esModule = 1;
      var _classlist = __webpack_require__(74);
      var _UiRippleInk = __webpack_require__(71);
      var t = __webpack_require__(29);
      var __WEBPACK_IMPORTED_MODULE_1__internals__ = __webpack_require__(70);
      var r = __webpack_require__(28);
      var _DocumentFragment = __webpack_require__(69);
      var _AnchorElement = __webpack_require__(68);
      var _HTMLParser = __webpack_require__(67);
      var _emberCliAppVersionComponentsAppVersion = __webpack_require__(5);
      var c = __webpack_require__(3);
      var _HTMLSerializer = __webpack_require__(8);
      var _UiIcon = __webpack_require__(34);
      var connection_manager_1 = __webpack_require__(31);
      /** @type {number} */
      var ngiScroll_timeout = 500;
      /** @type {number} */
      var nextCheckIn = 15000;
      /** @type {number} */
      var WAITING_SECONDS = 2500;
      /** @type {!Array} */
      var a = ['af', 'cf', 'fn'];
      /** @type {!Object} */
      var o = window;
      var data = {
        execute: new Date().getTime(),
      };
      if (!o.fwcim && !o.__fwcimLoaded) {
        /** @type {number} */
        o.__fwcimLoaded = 1;
        var key = new _HTMLParser['default'](
          new c['default'](),
          new _UiRippleInk['default'](
            new __WEBPACK_IMPORTED_MODULE_1__internals__['default'](),
            new r['default'](),
            new t['default'](),
            new _emberCliAppVersionComponentsAppVersion['default']()
          ),
          new _DocumentFragment['default'](
            new _AnchorElement['default'](),
            new _classlist['default']()
          ),
          new _HTMLSerializer['default']()
        );
        if (((o.fwcim = key), 'undefined' != typeof data && 'function' == typeof data.when)) {
          /** @type {number} */
          var tableName = new Date().getTime() + Math.random();
          /**
           * @param {number} name
           * @return {undefined}
           */
          var scheduleNextExecution = function (name) {
            var action = a[name];
            data
              .when(action)
              .execute('fwcim-global-profiler-' + action + '-' + tableName, function () {
                /** @type {number} */
                data[action] = new Date().getTime();
              });
          };
          /** @type {number} */
          var i = 0;
          for (; i < a.length; i++) {
            scheduleNextExecution(i);
          }
          data.when.apply(data, a).execute('fwcim-global-profiler-' + tableName, function () {
            setTimeout(function () {
              key.profilePage(data);
            }, WAITING_SECONDS);
          });
        }
        var hosts = new _UiIcon['default']('https://d35uxhjf90umnp.cloudfront.net/index.js');
        /**
         * @return {undefined}
         */
        var x = function () {
          /** @type {number} */
          data.load = new Date().getTime();
          setTimeout(function () {
            if (o.fwcimCmd && o.fwcimCmd.length) {
              var options = o.fwcimCmd.splice(0);
              new connection_manager_1['default'](key, options).run();
            }
          }, ngiScroll_timeout);
          setTimeout(function () {
            key.profilePage(data);
          }, nextCheckIn);
          hosts.fetch(window.location.host);
        };
        if ('string' == typeof document.readyState && 'loading' === document.readyState) {
          document.addEventListener('readystatechange', function () {
            if ('loading' !== document.readyState) {
              x();
            }
          });
          document.addEventListener('DOMContentLoaded', x);
        } else {
          x();
        }
      }
    },
    function (module, canCreateDiscussions, factory) {
      factory(30);
      module.exports = factory(75);
    },
  ]);
});

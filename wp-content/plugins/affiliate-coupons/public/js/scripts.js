!function(a, b) {
    "object" == typeof exports && "object" == typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define([], b) : "object" == typeof exports ? exports.ClipboardJS = b() : a.ClipboardJS = b();
}(this, function() {
    return function(a) {
        function b(d) {
            if (c[d]) return c[d].exports;
            var e = c[d] = {
                i: d,
                l: !1,
                exports: {}
            };
            return a[d].call(e.exports, e, e.exports, b), e.l = !0, e.exports;
        }
        var c = {};
        return b.m = a, b.c = c, b.d = function(a, c, d) {
            b.o(a, c) || Object.defineProperty(a, c, {
                enumerable: !0,
                get: d
            });
        }, b.r = function(a) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(a, "__esModule", {
                value: !0
            });
        }, b.t = function(a, c) {
            if (1 & c && (a = b(a)), 8 & c) return a;
            if (4 & c && "object" == typeof a && a && a.__esModule) return a;
            var d = Object.create(null);
            if (b.r(d), Object.defineProperty(d, "default", {
                enumerable: !0,
                value: a
            }), 2 & c && "string" != typeof a) for (var e in a) b.d(d, e, function(b) {
                return a[b];
            }.bind(null, e));
            return d;
        }, b.n = function(a) {
            var c = a && a.__esModule ? function() {
                return a["default"];
            } : function() {
                return a;
            };
            return b.d(c, "a", c), c;
        }, b.o = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b);
        }, b.p = "", b(b.s = 0);
    }([ function(a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            };
        }
        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
        }
        function f(a, b) {
            if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !b || "object" != typeof b && "function" != typeof b ? a : b;
        }
        function g(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b);
        }
        function h(a, b) {
            var c = "data-clipboard-" + a;
            if (b.hasAttribute(c)) return b.getAttribute(c);
        }
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
            return typeof a;
        } : function(a) {
            return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
        }, j = function() {
            function a(a, b) {
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), 
                    Object.defineProperty(a, d.key, d);
                }
            }
            return function(b, c, d) {
                return c && a(b.prototype, c), d && a(b, d), b;
            };
        }(), k = c(1), l = d(k), m = c(3), n = d(m), o = c(4), p = d(o), q = function(a) {
            function b(a, c) {
                e(this, b);
                var d = f(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this));
                return d.resolveOptions(c), d.listenClick(a), d;
            }
            return g(b, a), j(b, [ {
                key: "resolveOptions",
                value: function() {
                    var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.action = "function" == typeof a.action ? a.action : this.defaultAction, this.target = "function" == typeof a.target ? a.target : this.defaultTarget, 
                    this.text = "function" == typeof a.text ? a.text : this.defaultText, this.container = "object" === i(a.container) ? a.container : document.body;
                }
            }, {
                key: "listenClick",
                value: function(a) {
                    var b = this;
                    this.listener = (0, p["default"])(a, "click", function(a) {
                        return b.onClick(a);
                    });
                }
            }, {
                key: "onClick",
                value: function(a) {
                    var b = a.delegateTarget || a.currentTarget;
                    this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new l["default"]({
                        action: this.action(b),
                        target: this.target(b),
                        text: this.text(b),
                        container: this.container,
                        trigger: b,
                        emitter: this
                    });
                }
            }, {
                key: "defaultAction",
                value: function(a) {
                    return h("action", a);
                }
            }, {
                key: "defaultTarget",
                value: function(a) {
                    var b = h("target", a);
                    if (b) return document.querySelector(b);
                }
            }, {
                key: "defaultText",
                value: function(a) {
                    return h("text", a);
                }
            }, {
                key: "destroy",
                value: function() {
                    this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), 
                    this.clipboardAction = null);
                }
            } ], [ {
                key: "isSupported",
                value: function() {
                    var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [ "copy", "cut" ], b = "string" == typeof a ? [ a ] : a, c = !!document.queryCommandSupported;
                    return b.forEach(function(a) {
                        c = c && !!document.queryCommandSupported(a);
                    }), c;
                }
            } ]), b;
        }(n["default"]);
        a.exports = q;
    }, function(a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            };
        }
        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
        }
        var f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
            return typeof a;
        } : function(a) {
            return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
        }, g = function() {
            function a(a, b) {
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), 
                    Object.defineProperty(a, d.key, d);
                }
            }
            return function(b, c, d) {
                return c && a(b.prototype, c), d && a(b, d), b;
            };
        }(), h = c(2), i = d(h), j = function() {
            function a(b) {
                e(this, a), this.resolveOptions(b), this.initSelection();
            }
            return g(a, [ {
                key: "resolveOptions",
                value: function() {
                    var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.action = a.action, this.container = a.container, this.emitter = a.emitter, 
                    this.target = a.target, this.text = a.text, this.trigger = a.trigger, this.selectedText = "";
                }
            }, {
                key: "initSelection",
                value: function() {
                    this.text ? this.selectFake() : this.target && this.selectTarget();
                }
            }, {
                key: "selectFake",
                value: function() {
                    var a = this, b = "rtl" == document.documentElement.getAttribute("dir");
                    this.removeFake(), this.fakeHandlerCallback = function() {
                        return a.removeFake();
                    }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, 
                    this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", 
                    this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", 
                    this.fakeElem.style.position = "absolute", this.fakeElem.style[b ? "right" : "left"] = "-9999px";
                    var c = window.pageYOffset || document.documentElement.scrollTop;
                    this.fakeElem.style.top = c + "px", this.fakeElem.setAttribute("readonly", ""), 
                    this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, 
                    i["default"])(this.fakeElem), this.copyText();
                }
            }, {
                key: "removeFake",
                value: function() {
                    this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), 
                    this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), 
                    this.fakeElem = null);
                }
            }, {
                key: "selectTarget",
                value: function() {
                    this.selectedText = (0, i["default"])(this.target), this.copyText();
                }
            }, {
                key: "copyText",
                value: function() {
                    var a = void 0;
                    try {
                        a = document.execCommand(this.action);
                    } catch (b) {
                        a = !1;
                    }
                    this.handleResult(a);
                }
            }, {
                key: "handleResult",
                value: function(a) {
                    this.emitter.emit(a ? "success" : "error", {
                        action: this.action,
                        text: this.selectedText,
                        trigger: this.trigger,
                        clearSelection: this.clearSelection.bind(this)
                    });
                }
            }, {
                key: "clearSelection",
                value: function() {
                    this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges();
                }
            }, {
                key: "destroy",
                value: function() {
                    this.removeFake();
                }
            }, {
                key: "action",
                set: function() {
                    var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                    if (this._action = a, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"');
                },
                get: function() {
                    return this._action;
                }
            }, {
                key: "target",
                set: function(a) {
                    if (void 0 !== a) {
                        if (!a || "object" !== ("undefined" == typeof a ? "undefined" : f(a)) || 1 !== a.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                        if ("copy" === this.action && a.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                        if ("cut" === this.action && (a.hasAttribute("readonly") || a.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                        this._target = a;
                    }
                },
                get: function() {
                    return this._target;
                }
            } ]), a;
        }();
        a.exports = j;
    }, function(a, b) {
        function c(a) {
            var b;
            if ("SELECT" === a.nodeName) a.focus(), b = a.value; else if ("INPUT" === a.nodeName || "TEXTAREA" === a.nodeName) {
                var c = a.hasAttribute("readonly");
                c || a.setAttribute("readonly", ""), a.select(), a.setSelectionRange(0, a.value.length), 
                c || a.removeAttribute("readonly"), b = a.value;
            } else {
                a.hasAttribute("contenteditable") && a.focus();
                var d = window.getSelection(), e = document.createRange();
                e.selectNodeContents(a), d.removeAllRanges(), d.addRange(e), b = d.toString();
            }
            return b;
        }
        a.exports = c;
    }, function(a, b) {
        function c() {}
        c.prototype = {
            on: function(a, b, c) {
                var d = this.e || (this.e = {});
                return (d[a] || (d[a] = [])).push({
                    fn: b,
                    ctx: c
                }), this;
            },
            once: function(a, b, c) {
                function d() {
                    e.off(a, d), b.apply(c, arguments);
                }
                var e = this;
                return d._ = b, this.on(a, d, c);
            },
            emit: function(a) {
                var b = [].slice.call(arguments, 1), c = ((this.e || (this.e = {}))[a] || []).slice(), d = 0, e = c.length;
                for (d; d < e; d++) c[d].fn.apply(c[d].ctx, b);
                return this;
            },
            off: function(a, b) {
                var c = this.e || (this.e = {}), d = c[a], e = [];
                if (d && b) for (var f = 0, g = d.length; f < g; f++) d[f].fn !== b && d[f].fn._ !== b && e.push(d[f]);
                return e.length ? c[a] = e : delete c[a], this;
            }
        }, a.exports = c;
    }, function(a, b, c) {
        function d(a, b, c) {
            if (!a && !b && !c) throw new Error("Missing required arguments");
            if (!h.string(b)) throw new TypeError("Second argument must be a String");
            if (!h.fn(c)) throw new TypeError("Third argument must be a Function");
            if (h.node(a)) return e(a, b, c);
            if (h.nodeList(a)) return f(a, b, c);
            if (h.string(a)) return g(a, b, c);
            throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
        }
        function e(a, b, c) {
            return a.addEventListener(b, c), {
                destroy: function() {
                    a.removeEventListener(b, c);
                }
            };
        }
        function f(a, b, c) {
            return Array.prototype.forEach.call(a, function(a) {
                a.addEventListener(b, c);
            }), {
                destroy: function() {
                    Array.prototype.forEach.call(a, function(a) {
                        a.removeEventListener(b, c);
                    });
                }
            };
        }
        function g(a, b, c) {
            return i(document.body, a, b, c);
        }
        var h = c(5), i = c(6);
        a.exports = d;
    }, function(a, b) {
        b.node = function(a) {
            return void 0 !== a && a instanceof HTMLElement && 1 === a.nodeType;
        }, b.nodeList = function(a) {
            var c = Object.prototype.toString.call(a);
            return void 0 !== a && ("[object NodeList]" === c || "[object HTMLCollection]" === c) && "length" in a && (0 === a.length || b.node(a[0]));
        }, b.string = function(a) {
            return "string" == typeof a || a instanceof String;
        }, b.fn = function(a) {
            var b = Object.prototype.toString.call(a);
            return "[object Function]" === b;
        };
    }, function(a, b, c) {
        function d(a, b, c, d, e) {
            var g = f.apply(this, arguments);
            return a.addEventListener(c, g, e), {
                destroy: function() {
                    a.removeEventListener(c, g, e);
                }
            };
        }
        function e(a, b, c, e, f) {
            return "function" == typeof a.addEventListener ? d.apply(null, arguments) : "function" == typeof c ? d.bind(null, document).apply(null, arguments) : ("string" == typeof a && (a = document.querySelectorAll(a)), 
            Array.prototype.map.call(a, function(a) {
                return d(a, b, c, e, f);
            }));
        }
        function f(a, b, c, d) {
            return function(c) {
                c.delegateTarget = g(c.target, b), c.delegateTarget && d.call(a, c);
            };
        }
        var g = c(7);
        a.exports = e;
    }, function(a, b) {
        function c(a, b) {
            for (;a && a.nodeType !== d; ) {
                if ("function" == typeof a.matches && a.matches(b)) return a;
                a = a.parentNode;
            }
        }
        var d = 9;
        if ("undefined" != typeof Element && !Element.prototype.matches) {
            var e = Element.prototype;
            e.matches = e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector;
        }
        a.exports = c;
    } ]);
}), jQuery(document).ready(function(a) {
    new ClipboardJS(".affcoups-clipboard");
    a(document).on("click", ".affcoups-clipboard", function(b) {
        var c = (a(this).data("affcoups-coupon-id"), a(this).find(".affcoups-clipboard__text")), d = c.html(), e = a(this).data("affcoups-clipboard-confirmation-text");
        c.html(e), setTimeout(function() {
            c.html(d);
        }, 2500);
    }), a(document).on("click", "[data-affcoups-toggle-desc]", function(b) {
        b.preventDefault();
        var c = a(this).parents(".affcoups-coupon__description");
        c.toggleClass("affcoups-coupon__description--full");
    });
});
! function () {
	"use strict";
	var n = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

	function e(e) {
		return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e["default"] : e
	}

	function t(e, t) {
		return e(t = {
			exports: {}
		}, t.exports), t.exports
	}
	t(function (e, t) {
		(function (e) {
			var t = "defineProperty" in Object && function () {
				try {
					return Object.defineProperty({}, "test", {
						value: 42
					}), !0
				} catch (e) {
					return !1
				}
			}();
			t || function (s) {
				var u = Object.prototype.hasOwnProperty("__defineGetter__"),
					c = "Getters & setters cannot be defined on this javascript engine",
					l = "A property cannot both have accessors and be writable or have a value";
				Object.defineProperty = function (e, t, n) {
					if (s && (e === window || e === document || e === Element.prototype || e instanceof Element)) return s(e, t, n);
					if (null === e || !(e instanceof Object || "object" == typeof e)) throw new TypeError("Object.defineProperty called on non-object");
					if (!(n instanceof Object)) throw new TypeError("Property description must be an object");
					var r = String(t),
						i = "value" in n || "writable" in n,
						o = "get" in n && typeof n.get,
						a = "set" in n && typeof n.set;
					if (o) {
						if ("function" !== o) throw new TypeError("Getter must be a function");
						if (!u) throw new TypeError(c);
						if (i) throw new TypeError(l);
						Object.__defineGetter__.call(e, r, n.get)
					} else e[r] = n.value;
					if (a) {
						if ("function" !== a) throw new TypeError("Setter must be a function");
						if (!u) throw new TypeError(c);
						if (i) throw new TypeError(l);
						Object.__defineSetter__.call(e, r, n.set)
					}
					return "value" in n && (e[r] = n.value), e
				}
			}(Object.defineProperty)
		}).call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof n && n || {}),
			function (e) {
				var t = "bind" in Function.prototype;
				t || Object.defineProperty(Function.prototype, "bind", {
					value: function (t) {
						var n, e = Array,
							r = Object,
							i = r.prototype,
							o = e.prototype,
							a = function a() {},
							s = i.toString,
							u = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
							c = Function.prototype.toString,
							l = function l(e) {
								try {
									return c.call(e), !0
								} catch (t) {
									return !1
								}
							};
						n = function n(e) {
							if ("function" != typeof e) return !1;
							if (u) return l(e);
							var t = s.call(e);
							return "[object Function]" === t || "[object GeneratorFunction]" === t
						};
						var d = o.slice,
							f = o.concat,
							p = o.push,
							h = Math.max,
							m = this;
						if (!n(m)) throw new TypeError("Function.prototype.bind called on incompatible " + m);
						for (var y, v = d.call(arguments, 1), g = h(0, m.length - v.length), b = [], w = 0; w < g; w++) p.call(b, "$" + w);
						return y = Function("binder", "return function (" + b.join(",") + "){ return binder.apply(this, arguments); }")(function () {
							if (this instanceof y) {
								var e = m.apply(this, f.call(v, d.call(arguments)));
								return r(e) === e ? e : this
							}
							return m.apply(t, f.call(v, d.call(arguments)))
						}), m.prototype && (a.prototype = m.prototype, y.prototype = new a, a.prototype = null), y
					}
				})
			}.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof n && n || {})
	});

	function r(e) {
		this.$module = e
	}
	r.prototype.init = function () {
		if (!("IntersectionObserver" in window)) return this.$module.classList.remove("app-back-to-top--hidden");
		var r = document.querySelector(".app-footer"),
			i = document.querySelector(".app-subnav");
		if (r && i) {
			var o = !1,
				a = !1,
				s = 0,
				e = new window.IntersectionObserver(function (e) {
					var t = e.find(function (e) {
							return e.target === r
						}),
						n = e.find(function (e) {
							return e.target === i
						});
					t && (o = t.isIntersecting), n && (a = n.isIntersecting, s = n.intersectionRatio), a || o ? this.$module.classList.remove("app-back-to-top--fixed") : this.$module.classList.add("app-back-to-top--fixed"), a && 1 === s ? this.$module.classList.add("app-back-to-top--hidden") : this.$module.classList.remove("app-back-to-top--hidden")
				}.bind(this));
			e.observe(r), e.observe(i)
		}
	};
	var i = t(function (e, t) {
			var n;
			(n = t).nodeListForEach = function r(e, t) {
				if (window.NodeList.prototype.forEach) return e.forEach(t);
				for (var n = 0; n < e.length; n++) t.call(window, e[n], n, e)
			}, n.generateUniqueID = function i() {
				var n = (new Date).getTime();
				return "undefined" != typeof window.performance && "function" == typeof window.performance.now && (n += window.performance.now()), "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
					var t = (n + 16 * Math.random()) % 16 | 0;
					return n = Math.floor(n / 16), ("x" === e ? t : 3 & t | 8).toString(16)
				})
			}
		}),
		o = {
			init: function (e, t, n) {
				return void 0 !== t ? !1 === t || null === t ? o.setCookie(e, "", {
					days: -1
				}) : o.setCookie(e, t, n) : o.getCookie(e)
			},
			setCookie: function (e, t, n) {
				void 0 === n && (n = {});
				var r = e + "=" + t + "; path=/";
				if (n.days) {
					var i = new Date;
					i.setTime(i.getTime() + 24 * n.days * 60 * 60 * 1e3), r = r + "; expires=" + i.toGMTString()
				}
				"https:" === document.location.protocol && (r += "; Secure"), document.cookie = r
			},
			getCookie: function (e) {
				for (var t = e + "=", n = document.cookie.split(";"), r = 0, i = n.length; r < i; r++) {
					for (var o = n[r];
						" " === o.charAt(0);) o = o.substring(1, o.length);
					if (0 === o.indexOf(t)) return decodeURIComponent(o.substring(t.length))
				}
				return null
			},
			addCookieMessage: function () {
				var e = document.querySelector(".js-cookie-banner");
				e && null === o.init("seen_cookie_message") && (e.style.display = "block", o.init("seen_cookie_message", "yes", {
					days: 28
				}))
			}
		},
		a = {
			iframeResizer: t(function (q) {
				! function (d) {
					if ("undefined" != typeof window) {
						var f = 0,
							p = !1,
							t = !1,
							w = "message".length,
							x = "[iFrameSizer]",
							E = x.length,
							S = null,
							o = window.requestAnimationFrame,
							h = {
								max: 1,
								scroll: 1,
								bodyScroll: 1,
								documentElementScroll: 1
							},
							T = {},
							n = null,
							m = {
								autoResize: !0,
								bodyBackground: null,
								bodyMargin: null,
								bodyMarginV1: 8,
								bodyPadding: null,
								checkOrigin: !0,
								inPageLinks: !1,
								enablePublicMethods: !0,
								heightCalculationMethod: "bodyOffset",
								id: "iFrameResizer",
								interval: 32,
								log: !1,
								maxHeight: Infinity,
								maxWidth: Infinity,
								minHeight: 0,
								minWidth: 0,
								resizeFrom: "parent",
								scrolling: !1,
								sizeHeight: !0,
								sizeWidth: !1,
								warningTimeout: 5e3,
								tolerance: 0,
								widthCalculationMethod: "scroll",
								closedCallback: function () {},
								initCallback: function () {},
								messageCallback: function () {
									I("MessageCallback function not defined")
								},
								resizedCallback: function () {},
								scrollCallback: function () {
									return !0
								}
							},
							_ = {};
						window.jQuery && ! function B(e) {
							e.fn ? e.fn.iFrameResize || (e.fn.iFrameResize = function (n) {
								return this.filter("iframe").each(function r(e, t) {
									u(t, n)
								}).end()
							}) : C("", "Unable to bind to jQuery, it is not fully loaded.")
						}(window.jQuery), "function" == typeof d && d.amd ? d([], e) : q.exports = e(), window.iFrameResize = window.iFrameResize || e()
					}

					function y() {
						return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
					}

					function k(e, t, n) {
						"addEventListener" in window ? e.addEventListener(t, n, !1) : "attachEvent" in window && e.attachEvent("on" + t, n)
					}

					function O(e, t, n) {
						"removeEventListener" in window ? e.removeEventListener(t, n, !1) : "detachEvent" in window && e.detachEvent("on" + t, n)
					}

					function i(e) {
						return x + "[" + function n(e) {
							var t = "Host page: " + e;
							return window.top !== window.self && (t = window.parentIFrame && window.parentIFrame.getId ? window.parentIFrame.getId() + ": " + e : "Nested host page: " + e), t
						}(e) + "]"
					}

					function r(e) {
						return T[e] ? T[e].log : p
					}

					function L(e, t) {
						a("log", e, t, r(e))
					}

					function C(e, t) {
						a("info", e, t, r(e))
					}

					function I(e, t) {
						a("warn", e, t, !0)
					}

					function a(e, t, n, r) {
						!0 === r && "object" == typeof window.console && console[e](i(t), n)
					}

					function s(t) {
						function i() {
							n("Height"), n("Width"), Q(function e() {
								R(f), A(p), d("resizedCallback", f)
							}, f, "init")
						}

						function n(e) {
							var t = Number(T[p]["max" + e]),
								n = Number(T[p]["min" + e]),
								r = e.toLowerCase(),
								i = Number(f[r]);
							L(p, "Checking " + r + " is in range " + n + "-" + t), i < n && (i = n, L(p, "Set " + r + " to min value")), t < i && (i = t, L(p, "Set " + r + " to max value")), f[r] = "" + i
						}

						function o(e) {
							return r.substr(r.indexOf(":") + w + e)
						}

						function s(e, t) {
							! function r(e, t, n) {
								_[n] || (_[n] = setTimeout(function () {
									_[n] = null, e()
								}, t))
							}(function i() {
								D("Send Page Info", "pageInfo:" + function n() {
									var e = document.body.getBoundingClientRect(),
										t = f.iframe.getBoundingClientRect();
									return JSON.stringify({
										iframeHeight: t.height,
										iframeWidth: t.width,
										clientHeight: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
										clientWidth: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
										offsetTop: parseInt(t.top - e.top, 10),
										offsetLeft: parseInt(t.left - e.left, 10),
										scrollTop: window.pageYOffset,
										scrollLeft: window.pageXOffset
									})
								}(), e, t)
							}, 32, t)
						}

						function u(e) {
							var t = e.getBoundingClientRect();
							return P(p), {
								x: Math.floor(Number(t.left) + Number(S.x)),
								y: Math.floor(Number(t.top) + Number(S.y))
							}
						}

						function c(e) {
							var t = e ? u(f.iframe) : {
									x: 0,
									y: 0
								},
								n = function r() {
									return {
										x: Number(f.width) + t.x,
										y: Number(f.height) + t.y
									}
								}();
							L(p, "Reposition requested from iFrame (offset x:" + t.x + " y:" + t.y + ")"), window.top !== window.self ? function i() {
								window.parentIFrame ? window.parentIFrame["scrollTo" + (e ? "Offset" : "")](n.x, n.y) : I(p, "Unable to scroll to requested position, window.parentIFrame not found")
							}() : function o() {
								S = n, l(), L(p, "--")
							}()
						}

						function l() {
							!1 !== d("scrollCallback", S) ? A(p) : M()
						}

						function d(e, t) {
							return j(p, e, t)
						}
						var r = t.data,
							f = {},
							p = null;
						"[iFrameResizerChild]Ready" === r ? function a() {
							for (var e in T) D("iFrame requested init", z(e), document.getElementById(e), e)
						}() : ! function e() {
							return x === ("" + r).substr(0, E) && r.substr(E).split(":")[0] in T
						}() ? C(p, "Ignored: " + r) : (f = function h() {
							var e = r.substr(E).split(":");
							return {
								iframe: T[e[0]] && T[e[0]].iframe,
								id: e[0],
								height: e[1],
								width: e[2],
								type: e[3]
							}
						}(), p = f.id, T[p] && (T[p].loaded = !0), ! function m() {
							var e = f.type in {
								"true": 1,
								"false": 1,
								undefined: 1
							};
							return e && L(p, "Ignoring init message from meta parent page"), e
						}() && function y(e) {
							var t = !0;
							return T[e] || (t = !1, I(f.type + " No settings for " + e + ". Message was: " + r)), t
						}(p) && (L(p, "Received: " + r), function v() {
							var e = !0;
							return null === f.iframe && (I(p, "IFrame (" + f.id + ") not found"), e = !1), e
						}() && function g() {
							var r = t.origin,
								i = T[p] && T[p].checkOrigin;
							if (i && "" + r != "null" && ! function e() {
									return i.constructor === Array ? function n() {
										var e = 0,
											t = !1;
										for (L(p, "Checking connection is from allowed list of origins: " + i); e < i.length; e++)
											if (i[e] === r) {
												t = !0;
												break
											}
										return t
									}() : function t() {
										var e = T[p] && T[p].remoteHost;
										return L(p, "Checking connection is from: " + e), r === e
									}()
								}()) throw new Error("Unexpected message received from: " + r + " for " + f.iframe.id + ". Message was: " + t.data + ". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");
							return !0
						}() && function b() {
							switch (T[p] && T[p].firstRun && function e() {
								T[p] && (T[p].firstRun = !1)
							}(), f.type) {
							case "close":
								T[p].closeRequestCallback ? j(p, "closeRequestCallback", T[p].iframe) : N(f.iframe);
								break;
							case "message":
								! function t(e) {
									L(p, "MessageCallback passed: {iframe: " + f.iframe.id + ", message: " + e + "}"), d("messageCallback", {
										iframe: f.iframe,
										message: JSON.parse(e)
									}), L(p, "--")
								}(o(6));
								break;
							case "scrollTo":
								c(!1);
								break;
							case "scrollToOffset":
								c(!0);
								break;
							case "pageInfo":
								s(T[p] && T[p].iframe, p),
									function n() {
										function e(t, n) {
											function r() {
												T[o] ? s(T[o].iframe, o) : i()
											}["scroll", "resize"].forEach(function (e) {
												L(o, t + e + " listener for sendPageInfo"), n(window, e, r)
											})
										}

										function i() {
											e("Remove ", O)
										}
										var o = p;
										! function t() {
											e("Add ", k)
										}(), T[o] && (T[o].stopPageInfo = i)
									}();
								break;
							case "pageInfoStop":
								! function r() {
									T[p] && T[p].stopPageInfo && (T[p].stopPageInfo(), delete T[p].stopPageInfo)
								}();
								break;
							case "inPageLink":
								! function a(e) {
									var t = e.split("#")[1] || "",
										n = decodeURIComponent(t),
										r = document.getElementById(n) || document.getElementsByName(n)[0];
									r ? function i() {
										var e = u(r);
										L(p, "Moving to in page link (#" + t + ") at x: " + e.x + " y: " + e.y), S = {
											x: e.x,
											y: e.y
										}, l(), L(p, "--")
									}() : window.top !== window.self ? function o() {
										window.parentIFrame ? window.parentIFrame.moveToAnchor(t) : L(p, "In page link #" + t + " not found and window.parentIFrame not found")
									}() : L(p, "In page link #" + t + " not found")
								}(o(9));
								break;
							case "reset":
								F(f);
								break;
							case "init":
								i(), d("initCallback", f.iframe);
								break;
							default:
								i()
							}
						}()))
					}

					function j(e, t, n) {
						var r = null,
							i = null;
						if (T[e]) {
							if ("function" != typeof (r = T[e][t])) throw new TypeError(t + " on iFrame[" + e + "] is not a function");
							i = r(n)
						}
						return i
					}

					function v(e) {
						var t = e.id;
						delete T[t]
					}

					function N(e) {
						var t = e.id;
						L(t, "Removing iFrame: " + t);
						try {
							e.parentNode && e.parentNode.removeChild(e)
						} catch (n) {}
						j(t, "closedCallback", t), L(t, "--"), v(e)
					}

					function P(e) {
						null === S && L(e, "Get page position: " + (S = {
							x: window.pageXOffset !== d ? window.pageXOffset : document.documentElement.scrollLeft,
							y: window.pageYOffset !== d ? window.pageYOffset : document.documentElement.scrollTop
						}).x + "," + S.y)
					}

					function A(e) {
						null !== S && (window.scrollTo(S.x, S.y), L(e, "Set page position: " + S.x + "," + S.y), M())
					}

					function M() {
						S = null
					}

					function F(e) {
						L(e.id, "Size reset requested by " + ("init" === e.type ? "host page" : "iFrame")), P(e.id), Q(function t() {
							R(e), D("reset", "reset", e.iframe, e.id)
						}, e, "reset")
					}

					function R(n) {
						function r(e) {
							t || "0" !== n[e] || (t = !0, L(i, "Hidden iFrame detected, creating visibility listener"), function o() {
								function t() {
									function e(t) {
										function e(e) {
											return "0px" === (T[t] && T[t].iframe.style[e])
										}
										T[t] && function n(e) {
											return null !== e.offsetParent
										}(T[t].iframe) && (e("height") || e("width")) && D("Visibility change", "resize", T[t].iframe, t)
									}
									for (var t in T) e(t)
								}

								function n(e) {
									L("window", "Mutation observed: " + e[0].target + " " + e[0].type), c(t, 16)
								}
								var r = y();
								r && ! function i() {
									var e = document.querySelector("body"),
										t = {
											attributes: !0,
											attributeOldValue: !1,
											characterData: !0,
											characterDataOldValue: !1,
											childList: !0,
											subtree: !0
										};
									new r(n).observe(e, t)
								}()
							}())
						}

						function e(e) {
							! function t(e) {
								n.id ? (n.iframe.style[e] = n[e] + "px", L(n.id, "IFrame (" + i + ") " + e + " set to " + n[e] + "px")) : L("undefined", "messageData id not set")
							}(e), r(e)
						}
						var i = n.iframe.id;
						T[i] && (T[i].sizeHeight && e("height"), T[i].sizeWidth && e("width"))
					}

					function Q(e, t, n) {
						n !== t.type && o ? (L(t.id, "Requesting animation frame"), o(e)) : e()
					}

					function D(n, r, i, o, t) {
						var a = !1;
						o = o || i.id, T[o] && (function s() {
							i && "contentWindow" in i && null !== i.contentWindow ? function t() {
								var e = T[o] && T[o].targetOrigin;
								L(o, "[" + n + "] Sending msg to iframe[" + o + "] (" + r + ") targetOrigin: " + e), i.contentWindow.postMessage(x + r, e)
							}() : function e() {
								I(o, "[" + n + "] IFrame(" + o + ") not found")
							}()
						}(), function u() {
							t && T[o] && T[o].warningTimeout && (T[o].msgTimeout = setTimeout(function e() {
								!T[o] || T[o].loaded || a || (a = !0, I(o, "IFrame has not responded within " + T[o].warningTimeout / 1e3 + " seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))
							}, T[o].warningTimeout))
						}())
					}

					function z(e) {
						return e + ":" + T[e].bodyMarginV1 + ":" + T[e].sizeWidth + ":" + T[e].log + ":" + T[e].interval + ":" + T[e].enablePublicMethods + ":" + T[e].autoResize + ":" + T[e].bodyMargin + ":" + T[e].heightCalculationMethod + ":" + T[e].bodyBackground + ":" + T[e].bodyPadding + ":" + T[e].tolerance + ":" + T[e].inPageLinks + ":" + T[e].resizeFrom + ":" + T[e].widthCalculationMethod
					}

					function u(i, n) {
						var o = function r(e) {
							return "" === e && (i.id = e = function t() {
								var e = n && n.id || m.id + f++;
								return null !== document.getElementById(e) && (e += f++), e
							}(), p = (n || {}).log, L(e, "Added missing iframe ID: " + e + " (" + i.src + ")")), e
						}(i.id);
						! function e() {
							return o in T && "iFrameResizer" in i
						}() ? (function a(e) {
							e = e || {}, T[o] = {
									firstRun: !0,
									iframe: i,
									remoteHost: i.src.split("/").slice(0, 3).join("/")
								},
								function t(e) {
									if ("object" != typeof e) throw new TypeError("Options is not an object")
								}(e),
								function n(e) {
									for (var t in m) m.hasOwnProperty(t) && (T[o][t] = e.hasOwnProperty(t) ? e[t] : m[t])
								}(e), T[o] && (T[o].targetOrigin = !0 === T[o].checkOrigin ? function r(e) {
									return "" === e || "file://" === e ? "*" : e
								}(T[o].remoteHost) : "*")
						}(n), function t() {
							switch (L(o, "IFrame scrolling " + (T[o] && T[o].scrolling ? "enabled" : "disabled") + " for " + o), i.style.overflow = !1 === (T[o] && T[o].scrolling) ? "hidden" : "auto", T[o] && T[o].scrolling) {
							case "omit":
								break;
							case !0:
								i.scrolling = "yes";
								break;
							case !1:
								i.scrolling = "no";
								break;
							default:
								i.scrolling = T[o] ? T[o].scrolling : "no"
							}
						}(), function s() {
							function e(e) {
								Infinity !== T[o][e] && 0 !== T[o][e] && (i.style[e] = T[o][e] + "px", L(o, "Set " + e + " = " + T[o][e] + "px"))
							}

							function t(e) {
								if (T[o]["min" + e] > T[o]["max" + e]) throw new Error("Value for min" + e + " can not be greater than max" + e)
							}
							t("Height"), t("Width"), e("maxHeight"), e("minHeight"), e("maxWidth"), e("minWidth")
						}(), function u() {
							"number" != typeof (T[o] && T[o].bodyMargin) && "0" !== (T[o] && T[o].bodyMargin) || (T[o].bodyMarginV1 = T[o].bodyMargin, T[o].bodyMargin = T[o].bodyMargin + "px")
						}(), function c(e) {
							var t = y();
							t && ! function n(e) {
								i.parentNode && new e(function (e) {
									e.forEach(function (e) {
										Array.prototype.slice.call(e.removedNodes).forEach(function (e) {
											e === i && N(i)
										})
									})
								}).observe(i.parentNode, {
									childList: !0
								})
							}(t), k(i, "load", function r() {
								D("iFrame.onload", e, i, d, !0),
									function n() {
										var e = T[o] && T[o].firstRun,
											t = T[o] && T[o].heightCalculationMethod in h;
										!e && t && F({
											iframe: i,
											height: 0,
											width: 0,
											type: "init"
										})
									}()
							}), D("init", e, i, d, !0)
						}(z(o)), function l() {
							Function.prototype.bind && T[o] && (T[o].iframe.iFrameResizer = {
								close: N.bind(null, T[o].iframe),
								removeListeners: v.bind(null, T[o].iframe),
								resize: D.bind(null, "Window resize", "resize", T[o].iframe),
								moveToAnchor: function (e) {
									D("Move to anchor", "moveToAnchor:" + e, T[o].iframe, o)
								},
								sendMessage: function (e) {
									D("Send Message", "message:" + (e = JSON.stringify(e)), T[o].iframe, o)
								}
							})
						}()) : I(o, "Ignored iFrame, already setup.")
					}

					function c(e, t) {
						null === n && (n = setTimeout(function () {
							n = null, e()
						}, t))
					}

					function l(e) {
						L("window", "Trigger event: " + e), c(function t() {
							b("Window " + e, "resize")
						}, 16)
					}

					function g() {
						"hidden" !== document.visibilityState && (L("document", "Trigger event: Visiblity change"), c(function e() {
							b("Tab Visable", "resize")
						}, 16))
					}

					function b(e, t) {
						for (var n in T) T[r = n] && "parent" === T[r].resizeFrom && T[r].autoResize && !T[r].firstRun && D(e, t, document.getElementById(n), n);
						var r
					}

					function e() {
						function r(e, t) {
							t && (! function n() {
								if (!t.tagName) throw new TypeError("Object is not a valid DOM element");
								if ("IFRAME" !== t.tagName.toUpperCase()) throw new TypeError("Expected <IFRAME> tag, found <" + t.tagName + ">")
							}(), u(t, e), i.push(t))
						}
						var i;
						return function n() {
								var e, t = ["moz", "webkit", "o", "ms"];
								for (e = 0; e < t.length && !o; e += 1) o = window[t[e] + "RequestAnimationFrame"];
								o || L("setup", "RequestAnimationFrame not supported")
							}(),
							function e() {
								k(window, "message", s), k(window, "resize", function () {
									l("resize")
								}), k(document, "visibilitychange", g), k(document, "-webkit-visibilitychange", g), k(window, "focusin", function () {
									l("focus")
								}), k(window, "focus", function () {
									l("focus")
								})
							}(),
							function (e, t) {
								switch (i = [], function n(e) {
									e && e.enablePublicMethods && I("enablePublicMethods option has been removed, public methods are now always available in the iFrame")
								}(e), typeof t) {
								case "undefined":
								case "string":
									Array.prototype.forEach.call(document.querySelectorAll(t || "iframe"), r.bind(d, e));
									break;
								case "object":
									r(e, t);
									break;
								default:
									throw new TypeError("Unexpected data type (" + typeof t + ")")
								}
								return i
							}
					}
				}()
			}),
			iframeResizerContentWindow: t(function (ke) {
				! function (f) {
					if ("undefined" != typeof window) {
						var s = !0,
							o = 10,
							u = "",
							c = 0,
							l = "",
							n = null,
							d = "",
							p = !1,
							a = {
								resize: 1,
								click: 1
							},
							h = 128,
							m = !0,
							y = 1,
							r = "bodyOffset",
							v = r,
							g = !0,
							b = "",
							w = {},
							x = 32,
							t = null,
							E = !1,
							S = "[iFrameSizer]",
							T = S.length,
							_ = "",
							k = {
								max: 1,
								min: 1,
								bodyScroll: 1,
								documentElementScroll: 1
							},
							O = "child",
							L = !0,
							C = window.parent,
							I = "*",
							j = 0,
							N = !1,
							e = null,
							P = 16,
							A = 1,
							i = "scroll",
							M = i,
							F = window,
							R = function () {
								ee("MessageCallback function not defined")
							},
							Q = function () {},
							D = function () {},
							z = {
								height: function () {
									return ee("Custom height calculation function not defined"), document.documentElement.offsetHeight
								},
								width: function () {
									return ee("Custom width calculation function not defined"), document.body.scrollWidth
								}
							},
							B = {},
							q = !1;
						try {
							var V = Object.create({}, {
								passive: {
									get: function () {
										q = !0
									}
								},
								once: {
									get: function () {}
								}
							});
							window.addEventListener("test", G, V), window.removeEventListener("test", G, V)
						} catch (Te) {}
						var H = Date.now || function () {
								return (new Date).getTime()
							},
							W = {
								bodyOffset: function () {
									return document.body.offsetHeight + de("marginTop") + de("marginBottom")
								},
								offset: function () {
									return W.bodyOffset()
								},
								bodyScroll: function () {
									return document.body.scrollHeight
								},
								custom: function () {
									return z.height()
								},
								documentElementOffset: function () {
									return document.documentElement.offsetHeight
								},
								documentElementScroll: function () {
									return document.documentElement.scrollHeight
								},
								max: function () {
									return Math.max.apply(null, pe(W))
								},
								min: function () {
									return Math.min.apply(null, pe(W))
								},
								grow: function () {
									return W.max()
								},
								lowestElement: function () {
									return Math.max(W.bodyOffset() || W.documentElementOffset(), fe("bottom", me()))
								},
								taggedElement: function () {
									return he("bottom", "data-iframe-height")
								}
							},
							$ = {
								bodyScroll: function () {
									return document.body.scrollWidth
								},
								bodyOffset: function () {
									return document.body.offsetWidth
								},
								custom: function () {
									return z.width()
								},
								documentElementScroll: function () {
									return document.documentElement.scrollWidth
								},
								documentElementOffset: function () {
									return document.documentElement.offsetWidth
								},
								scroll: function () {
									return Math.max($.bodyScroll(), $.documentElementScroll())
								},
								max: function () {
									return Math.max.apply(null, pe($))
								},
								min: function () {
									return Math.min.apply(null, pe($))
								},
								rightMostElement: function () {
									return fe("right", me())
								},
								taggedElement: function () {
									return he("right", "data-iframe-width")
								}
							},
							U = function _e(n) {
								var r, i, o, a = null,
									s = 0,
									u = function () {
										s = H(), a = null, o = n.apply(r, i), a || (r = i = null)
									};
								return function () {
									var e = H();
									s || (s = e);
									var t = P - (e - s);
									return r = this, i = arguments, t <= 0 || P < t ? (a && (clearTimeout(a), a = null), s = e, o = n.apply(r, i), a || (r = i = null)) : a || (a = setTimeout(u, t)), o
								}
							}(ye);
						K(window, "message", Ee), K(window, "readystatechange", Se), Se()
					}

					function G() {}

					function K(e, t, n, r) {
						"addEventListener" in window ? e.addEventListener(t, n, !!q && (r || {})) : "attachEvent" in window && e.attachEvent("on" + t, n)
					}

					function J(e, t, n) {
						"removeEventListener" in window ? e.removeEventListener(t, n, !1) : "detachEvent" in window && e.detachEvent("on" + t, n)
					}

					function X(e) {
						return e.charAt(0).toUpperCase() + e.slice(1)
					}

					function Y(e) {
						return S + "[" + _ + "] " + e
					}

					function Z(e) {
						E && "object" == typeof window.console && console.log(Y(e))
					}

					function ee(e) {
						"object" == typeof window.console && console.warn(Y(e))
					}

					function te() {
						! function n() {
							function e(e) {
								return "true" === e
							}
							var t = b.substr(T).split(":");
							_ = t[0], c = f !== t[1] ? Number(t[1]) : c, p = f !== t[2] ? e(t[2]) : p, E = f !== t[3] ? e(t[3]) : E, x = f !== t[4] ? Number(t[4]) : x, s = f !== t[6] ? e(t[6]) : s, l = t[7], v = f !== t[8] ? t[8] : v, u = t[9], d = t[10], j = f !== t[11] ? Number(t[11]) : j, w.enable = f !== t[12] && e(t[12]), O = f !== t[13] ? t[13] : O, M = f !== t[14] ? t[14] : M
						}(), Z("Initialising iFrame (" + location.href + ")"),
							function r() {
								function e(e, t) {
									return "function" == typeof e && (Z("Setup custom " + t + "CalcMethod"), z[t] = e, e = "custom"), e
								}
								"iFrameResizer" in window && Object === window.iFrameResizer.constructor && (! function t() {
									var e = window.iFrameResizer;
									Z("Reading data from page: " + JSON.stringify(e)), R = "messageCallback" in e ? e.messageCallback : R, Q = "readyCallback" in e ? e.readyCallback : Q, I = "targetOrigin" in e ? e.targetOrigin : I, v = "heightCalculationMethod" in e ? e.heightCalculationMethod : v, M = "widthCalculationMethod" in e ? e.widthCalculationMethod : M
								}(), v = e(v, "height"), M = e(M, "width"));
								Z("TargetOrigin for parent set to: " + I)
							}(),
							function e() {
								f === l && (l = c + "px");
								ne("margin", function n(e, t) {
									-1 !== t.indexOf("-") && (ee("Negative CSS value ignored for " + e), t = "");
									return t
								}("margin", l))
							}(), ne("background", u), ne("padding", d),
							function t() {
								var e = document.createElement("div");
								e.style.clear = "both", e.style.display = "block", document.body.appendChild(e)
							}(), ae(), se(),
							function i() {
								document.documentElement.style.height = "", document.body.style.height = "", Z('HTML & body height set to "auto"')
							}(),
							function o() {
								Z("Enable public methods"), F.parentIFrame = {
									autoResize: function (e) {
										return !0 === e && !1 === s ? (s = !0, ue()) : !1 === e && !0 === s && (s = !1, ce()), s
									},
									close: function () {
										xe(0, 0, "close"),
											function n() {
												(function e() {
													Z("Disable outgoing messages"), L = !1
												})(),
												function t() {
													Z("Remove event listener: Message"), J(window, "message", Ee)
												}(), !0 === s && ce()
											}()
									},
									getId: function () {
										return _
									},
									getPageInfo: function (e) {
										"function" == typeof e ? (D = e, xe(0, 0, "pageInfo")) : (D = function () {}, xe(0, 0, "pageInfoStop"))
									},
									moveToAnchor: function (e) {
										w.findTarget(e)
									},
									reset: function () {
										we("parentIFrame.reset")
									},
									scrollTo: function (e, t) {
										xe(t, e, "scrollTo")
									},
									scrollToOffset: function (e, t) {
										xe(t, e, "scrollToOffset")
									},
									sendMessage: function (e, t) {
										xe(0, 0, "message", JSON.stringify(e), t)
									},
									setHeightCalculationMethod: function (e) {
										v = e, ae()
									},
									setWidthCalculationMethod: function (e) {
										M = e, se()
									},
									setTargetOrigin: function (e) {
										Z("Set targetOrigin: " + e), I = e
									},
									size: function (e, t) {
										var n = (e || "") + (t ? "," + t : "");
										ve("size", "parentIFrame.size(" + n + ")", e, t)
									}
								}
							}(), ue(), w = function a() {
								function o(e) {
									var t = e.getBoundingClientRect(),
										n = function r() {
											return {
												x: window.pageXOffset !== f ? window.pageXOffset : document.documentElement.scrollLeft,
												y: window.pageYOffset !== f ? window.pageYOffset : document.documentElement.scrollTop
											}
										}();
									return {
										x: parseInt(t.left, 10) + parseInt(n.x, 10),
										y: parseInt(t.top, 10) + parseInt(n.y, 10)
									}
								}

								function r(e) {
									var n = e.split("#")[1] || e,
										t = decodeURIComponent(n),
										r = document.getElementById(t) || document.getElementsByName(t)[0];
									f !== r ? function i(e) {
										var t = o(e);
										Z("Moving to in page link (#" + n + ") at x: " + t.x + " y: " + t.y), xe(t.y, t.x, "scrollToOffset")
									}(r) : (Z("In page link (#" + n + ") not found in iFrame, so sending to parent"), xe(0, 0, "inPageLink", "#" + n))
								}

								function e() {
									"" !== location.hash && "#" !== location.hash && r(location.href)
								}

								function t() {
									Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'), function n(e) {
										function t(e) {
											e.preventDefault(), r(this.getAttribute("href"))
										}
										"#" !== e.getAttribute("href") && K(e, "click", t)
									})
								}
								w.enable ? function n() {
									Array.prototype.forEach && document.querySelectorAll ? (Z("Setting up location.hash handlers"), t(), K(window, "hashchange", e), setTimeout(e, h)) : ee("In page linking not fully supported in this browser! (See README.md for IE8 workaround)")
								}() : Z("In page linking not enabled");
								return {
									findTarget: r
								}
							}(), ve("init", "Init message from host page"), Q()
					}

					function ne(e, t) {
						f !== t && "" !== t && "null" !== t && Z("Body " + e + ' set to "' + (document.body.style[e] = t) + '"')
					}

					function re(n) {
						var e = {
							add: function (e) {
								function t() {
									ve(n.eventName, n.eventType)
								}
								B[e] = t, K(window, e, t, {
									passive: !0
								})
							},
							remove: function (e) {
								var t = B[e];
								delete B[e], J(window, e, t)
							}
						};
						n.eventNames && Array.prototype.map ? (n.eventName = n.eventNames[0], n.eventNames.map(e[n.method])) : e[n.method](n.eventName), Z(X(n.method) + " event listener: " + n.eventType)
					}

					function ie(e) {
						re({
							method: e,
							eventType: "Animation Start",
							eventNames: ["animationstart", "webkitAnimationStart"]
						}), re({
							method: e,
							eventType: "Animation Iteration",
							eventNames: ["animationiteration", "webkitAnimationIteration"]
						}), re({
							method: e,
							eventType: "Animation End",
							eventNames: ["animationend", "webkitAnimationEnd"]
						}), re({
							method: e,
							eventType: "Input",
							eventName: "input"
						}), re({
							method: e,
							eventType: "Mouse Up",
							eventName: "mouseup"
						}), re({
							method: e,
							eventType: "Mouse Down",
							eventName: "mousedown"
						}), re({
							method: e,
							eventType: "Orientation Change",
							eventName: "orientationchange"
						}), re({
							method: e,
							eventType: "Print",
							eventName: ["afterprint", "beforeprint"]
						}), re({
							method: e,
							eventType: "Ready State Change",
							eventName: "readystatechange"
						}), re({
							method: e,
							eventType: "Touch Start",
							eventName: "touchstart"
						}), re({
							method: e,
							eventType: "Touch End",
							eventName: "touchend"
						}), re({
							method: e,
							eventType: "Touch Cancel",
							eventName: "touchcancel"
						}), re({
							method: e,
							eventType: "Transition Start",
							eventNames: ["transitionstart", "webkitTransitionStart", "MSTransitionStart", "oTransitionStart", "otransitionstart"]
						}), re({
							method: e,
							eventType: "Transition Iteration",
							eventNames: ["transitioniteration", "webkitTransitionIteration", "MSTransitionIteration", "oTransitionIteration", "otransitioniteration"]
						}), re({
							method: e,
							eventType: "Transition End",
							eventNames: ["transitionend", "webkitTransitionEnd", "MSTransitionEnd", "oTransitionEnd", "otransitionend"]
						}), "child" === O && re({
							method: e,
							eventType: "IFrame Resized",
							eventName: "resize"
						})
					}

					function oe(e, t, n, r) {
						return t !== e && (e in n || (ee(e + " is not a valid option for " + r + "CalculationMethod."), e = t), Z(r + ' calculation method set to "' + e + '"')), e
					}

					function ae() {
						v = oe(v, r, W, "height")
					}

					function se() {
						M = oe(M, i, $, "width")
					}

					function ue() {
						!0 === s ? (ie("add"), function t() {
							var e = x < 0;
							window.MutationObserver || window.WebKitMutationObserver ? e ? le() : n = function d() {
								function t(e) {
									function t(e) {
										!1 === e.complete && (Z("Attach listeners to " + e.src), e.addEventListener("load", i, !1), e.addEventListener("error", o, !1), s.push(e))
									}
									"attributes" === e.type && "src" === e.attributeName ? t(e.target) : "childList" === e.type && Array.prototype.forEach.call(e.target.querySelectorAll("img"), t)
								}

								function r(e) {
									Z("Remove listeners from " + e.src), e.removeEventListener("load", i, !1), e.removeEventListener("error", o, !1),
										function t(e) {
											s.splice(s.indexOf(e), 1)
										}(e)
								}

								function n(e, t, n) {
									r(e.target), ve(t, n + ": " + e.target.src, f, f)
								}

								function i(e) {
									n(e, "imageLoad", "Image loaded")
								}

								function o(e) {
									n(e, "imageLoadFailed", "Image load failed")
								}

								function a(e) {
									ve("mutationObserver", "mutationObserver: " + e[0].target + " " + e[0].type), e.forEach(t)
								}
								var s = [],
									u = window.MutationObserver || window.WebKitMutationObserver,
									c = function l() {
										var e = document.querySelector("body"),
											t = {
												attributes: !0,
												attributeOldValue: !1,
												characterData: !0,
												characterDataOldValue: !1,
												childList: !0,
												subtree: !0
											};
										return c = new u(a), Z("Create body MutationObserver"), c.observe(e, t), c
									}();
								return {
									disconnect: function () {
										"disconnect" in c && (Z("Disconnect body MutationObserver"), c.disconnect(), s.forEach(r))
									}
								}
							}() : (Z("MutationObserver not supported in this browser!"), le())
						}()) : Z("Auto Resize disabled")
					}

					function ce() {
						ie("remove"),
							function e() {
								null !== n && n.disconnect()
							}(), clearInterval(t)
					}

					function le() {
						0 !== x && (Z("setInterval: " + x + "ms"), t = setInterval(function () {
							ve("interval", "setInterval: " + x)
						}, Math.abs(x)))
					}

					function de(e, r) {
						var t = 0;
						return r = r || document.body, t = "defaultView" in document && "getComputedStyle" in document.defaultView ? null !== (t = document.defaultView.getComputedStyle(r, null)) ? t[e] : 0 : function i(e) {
							if (/^\d+(px)?$/i.test(e)) return parseInt(e, o);
							var t = r.style.left,
								n = r.runtimeStyle.left;
							return r.runtimeStyle.left = r.currentStyle.left, r.style.left = e || 0, e = r.style.pixelLeft, r.style.left = t, r.runtimeStyle.left = n, e
						}(r.currentStyle[e]), parseInt(t, o)
					}

					function fe(e, t) {
						for (var n = t.length, r = 0, i = 0, o = X(e), a = H(), s = 0; s < n; s++) i < (r = t[s].getBoundingClientRect()[e] + de("margin" + o, t[s])) && (i = r);
						return a = H() - a, Z("Parsed " + n + " HTML elements"), Z("Element position calculated in " + a + "ms"),
							function u(e) {
								P / 2 < e && Z("Event throttle increased to " + (P = 2 * e) + "ms")
							}(a), i
					}

					function pe(e) {
						return [e.bodyOffset(), e.bodyScroll(), e.documentElementOffset(), e.documentElementScroll()]
					}

					function he(e, t) {
						var n = document.querySelectorAll("[" + t + "]");
						return 0 === n.length && function r() {
							return ee("No tagged elements (" + t + ") found on page"), document.querySelectorAll("body *")
						}(), fe(e, n)
					}

					function me() {
						return document.querySelectorAll("body *")
					}

					function ye(r, i, t, n) {
						var o, a;
						! function s() {
							function e(e, t) {
								return !(Math.abs(e - t) <= j)
							}
							return o = f !== t ? t : W[v](), a = f !== n ? n : $[M](), e(y, o) || p && e(A, a)
						}() && "init" !== r ? function u() {
							(function e() {
								return !(r in {
									init: 1,
									interval: 1,
									size: 1
								})
							})() && function t() {
								return v in k || p && M in k
							}() ? we(i): r in {
								interval: 1
							} || function n() {
								Z("No change in size detected")
							}()
						}() : (ge(), function e() {
							xe(y = o, A = a, r)
						}())
					}

					function ve(e, t, n, r) {
						! function i() {
							return N && e in a
						}() ? (function o() {
							e in {
								reset: 1,
								resetPage: 1,
								init: 1
							} || Z("Trigger event: " + t)
						}(), "init" === e ? ye(e, t, n, r) : U(e, t, n, r)) : Z("Trigger event cancelled: " + e)
					}

					function ge() {
						N || (N = !0, Z("Trigger event lock on")), clearTimeout(e), e = setTimeout(function () {
							N = !1, Z("Trigger event lock off"), Z("--")
						}, h)
					}

					function be(e) {
						y = W[v](), A = $[M](), xe(y, A, e)
					}

					function we(e) {
						var t = v;
						v = r, Z("Reset trigger event: " + e), ge(), be("reset"), v = t
					}

					function xe(t, n, r, i, o) {
						!0 === L && (! function e() {
							f === o ? o = I : Z("Message targetOrigin: " + o)
						}(), function a() {
							var e = _ + ":" + t + ":" + n + ":" + r + (f !== i ? ":" + i : "");
							Z("Sending message to host page (" + e + ")"), C.postMessage(S + e, o)
						}())
					}

					function Ee(n) {
						var r = {
							init: function () {
								b = n.data, C = n.source, te(), m = !1, setTimeout(function () {
									g = !1
								}, h)
							},
							reset: function () {
								g ? Z("Page reset ignored by init") : (Z("Page size reset by host page"), be("resetPage"))
							},
							resize: function () {
								ve("resizeParent", "Parent window requested size check")
							},
							moveToAnchor: function () {
								w.findTarget(t())
							},
							inPageLink: function () {
								this.moveToAnchor()
							},
							pageInfo: function () {
								var e = t();
								Z("PageInfoFromParent called from parent: " + e), D(JSON.parse(e)), Z(" --")
							},
							message: function () {
								var e = t();
								Z("MessageCallback called from parent: " + e), R(JSON.parse(e)), Z(" --")
							}
						};

						function i() {
							return n.data.split("]")[1].split(":")[0]
						}

						function t() {
							return n.data.substr(n.data.indexOf(":") + 1)
						}

						function o() {
							return n.data.split(":")[2] in {
								"true": 1,
								"false": 1
							}
						}

						function e() {
							var e = i();
							e in r ? r[e]() : function t() {
								return !ke.exports && "iFrameResize" in window || "jQuery" in window && "iFrameResize" in window.jQuery.prototype
							}() || o() || ee("Unexpected message (" + n.data + ")")
						}(function a() {
							return S === ("" + n.data).substr(0, T)
						})() && ! function s() {
							!1 === m ? e() : o() ? r.init() : Z('Ignored message of type "' + i() + '". Received before initialization.')
						}()
					}

					function Se() {
						"loading" !== document.readyState && window.parent.postMessage("[iFrameResizerChild]Ready", "*")
					}
				}()
			})
		};

	function s(e) {
		this.$module = e
	}
	s.prototype.init = function () {
		this.$module && this.resize()
	}, s.prototype.resize = function () {
		var e = this.$module;
		try {
			a.iframeResizer({
				scrolling: "auto",
				autoResize: !0
			}, e)
		} catch (t) {
			t && console.error(t.message)
		}
	};
	t(function (e, t) {
		(function (e) {
			var t = "defineProperty" in Object && function () {
				try {
					return Object.defineProperty({}, "test", {
						value: 42
					}), !0
				} catch (e) {
					return !1
				}
			}();
			t || function (s) {
				var u = Object.prototype.hasOwnProperty("__defineGetter__"),
					c = "Getters & setters cannot be defined on this javascript engine",
					l = "A property cannot both have accessors and be writable or have a value";
				Object.defineProperty = function (e, t, n) {
					if (s && (e === window || e === document || e === Element.prototype || e instanceof Element)) return s(e, t, n);
					if (null === e || !(e instanceof Object || "object" == typeof e)) throw new TypeError("Object.defineProperty called on non-object");
					if (!(n instanceof Object)) throw new TypeError("Property description must be an object");
					var r = String(t),
						i = "value" in n || "writable" in n,
						o = "get" in n && typeof n.get,
						a = "set" in n && typeof n.set;
					if (o) {
						if ("function" !== o) throw new TypeError("Getter must be a function");
						if (!u) throw new TypeError(c);
						if (i) throw new TypeError(l);
						Object.__defineGetter__.call(e, r, n.get)
					} else e[r] = n.value;
					if (a) {
						if ("function" !== a) throw new TypeError("Setter must be a function");
						if (!u) throw new TypeError(c);
						if (i) throw new TypeError(l);
						Object.__defineSetter__.call(e, r, n.set)
					}
					return "value" in n && (e[r] = n.value), e
				}
			}(Object.defineProperty)
		}).call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof n && n || {}),
			function (r) {
				var e = "DOMTokenList" in this && function (e) {
					return !("classList" in e) || !e.classList.toggle("x", !1) && !e.className
				}(document.createElement("x"));
				e || function (e) {
					var t = "DOMTokenList" in e && e.DOMTokenList;
					t && (!document.createElementNS || !document.createElementNS("http://www.w3.org/2000/svg", "svg") || document.createElementNS("http://www.w3.org/2000/svg", "svg").classList instanceof DOMTokenList) || (e.DOMTokenList = function () {
							var i = !0,
								n = function (e, t, n, r) {
									Object.defineProperty ? Object.defineProperty(e, t, {
										configurable: !1 === i || !!r,
										get: n
									}) : e.__defineGetter__(t, n)
								};
							try {
								n({}, "support")
							} catch (e) {
								i = !1
							}
							return function (i, o) {
								var a = this,
									s = [],
									u = {},
									c = 0,
									e = 0,
									t = function (e) {
										n(a, e, function () {
											return d(), s[e]
										}, !1)
									},
									l = function () {
										if (e <= c)
											for (; e < c; ++e) t(e)
									},
									d = function () {
										var e, t, n = arguments,
											r = /\s+/;
										if (n.length)
											for (t = 0; t < n.length; ++t)
												if (r.test(n[t])) throw (e = new SyntaxError('String "' + n[t] + '" contains an invalid character')).code = 5, e.name = "InvalidCharacterError", e;
										for ("" === (s = "object" == typeof i[o] ? ("" + i[o].baseVal).replace(/^\s+|\s+$/g, "").split(r) : ("" + i[o]).replace(/^\s+|\s+$/g, "").split(r))[0] && (s = []), u = {}, t = 0; t < s.length; ++t) u[s[t]] = !0;
										c = s.length, l()
									};
								return d(), n(a, "length", function () {
									return d(), c
								}), a.toLocaleString = a.toString = function () {
									return d(), s.join(" ")
								}, a.item = function (e) {
									return d(), s[e]
								}, a.contains = function (e) {
									return d(), !!u[e]
								}, a.add = function () {
									d.apply(a, e = arguments);
									for (var e, t, n = 0, r = e.length; n < r; ++n) t = e[n], u[t] || (s.push(t), u[t] = !0);
									c !== s.length && (c = s.length >>> 0, "object" == typeof i[o] ? i[o].baseVal = s.join(" ") : i[o] = s.join(" "), l())
								}, a.remove = function () {
									d.apply(a, e = arguments);
									for (var e, t = {}, n = 0, r = []; n < e.length; ++n) t[e[n]] = !0, delete u[e[n]];
									for (n = 0; n < s.length; ++n) t[s[n]] || r.push(s[n]);
									c = (s = r).length >>> 0, "object" == typeof i[o] ? i[o].baseVal = s.join(" ") : i[o] = s.join(" "), l()
								}, a.toggle = function (e, t) {
									return d.apply(a, [e]), r !== t ? t ? (a.add(e), !0) : (a.remove(e), !1) : u[e] ? (a.remove(e), !1) : (a.add(e), !0)
								}, a
							}
						}()),
						function () {
							var e = document.createElement("span");
							"classList" in e && (e.classList.toggle("x", !1), e.classList.contains("x") && (e.classList.constructor.prototype.toggle = function (e) {
								var t = arguments[1];
								if (t !== r) return this[(t = !!t) ? "add" : "remove"](e), t;
								var n = !this.contains(e);
								return this[n ? "add" : "remove"](e), n
							}))
						}(),
						function () {
							var e = document.createElement("span");
							if ("classList" in e && (e.classList.add("a", "b"), !e.classList.contains("b"))) {
								var r = e.classList.constructor.prototype.add;
								e.classList.constructor.prototype.add = function () {
									for (var e = arguments, t = arguments.length, n = 0; n < t; n++) r.call(this, e[n])
								}
							}
						}(),
						function () {
							var e = document.createElement("span");
							if ("classList" in e && (e.classList.add("a"), e.classList.add("b"), e.classList.remove("a", "b"), e.classList.contains("b"))) {
								var r = e.classList.constructor.prototype.remove;
								e.classList.constructor.prototype.remove = function () {
									for (var e = arguments, t = arguments.length, n = 0; n < t; n++) r.call(this, e[n])
								}
							}
						}()
				}(this)
			}.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof n && n || {}),
			function (e) {
				var t = "Document" in this;
				t || "undefined" == typeof WorkerGlobalScope && "function" != typeof importScripts && (this.HTMLDocument ? this.Document = this.HTMLDocument : (this.Document = this.HTMLDocument = document.constructor = new Function("return function Document() {}")(), this.Document.prototype = document))
			}.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof n && n || {}),
			function (e) {
				var t = "Element" in this && "HTMLElement" in this;
				t || function () {
					if (!window.Element || window.HTMLElement) {
						window.Element = window.HTMLElement = new Function("return function Element() {}")();
						var e, t = document.appendChild(document.createElement("body")),
							n = t.appendChild(document.createElement("iframe")),
							r = n.contentWindow.document,
							s = Element.prototype = r.appendChild(r.createElement("*")),
							u = {},
							c = function (e, t) {
								var n, r, i, o = e.childNodes || [],
									a = -1;
								if (1 === e.nodeType && e.constructor !== Element)
									for (n in e.constructor = Element, u) r = u[n], e[n] = r;
								for (; i = t && o[++a];) c(i, t);
								return e
							},
							l = document.getElementsByTagName("*"),
							i = document.createElement,
							o = 100;
						s.attachEvent("onpropertychange", function (e) {
							for (var t, n = e.propertyName, r = !u.hasOwnProperty(n), i = s[n], o = u[n], a = -1; t = l[++a];) 1 === t.nodeType && (r || t[n] === o) && (t[n] = i);
							u[n] = i
						}), s.constructor = Element, s.hasAttribute || (s.hasAttribute = function (e) {
							return null !== this.getAttribute(e)
						}), a() || (document.onreadystatechange = a, e = setInterval(a, 25)), document.createElement = function (e) {
							var t = i(String(e).toLowerCase());
							return c(t)
						}, document.removeChild(t)
					} else window.HTMLElement = window.Element;

					function a() {
						return o-- || clearTimeout(e), !(!document.body || document.body.prototype || !/(complete|interactive)/.test(document.readyState) || (c(document, !0), e && document.body.prototype && clearTimeout(e), !document.body.prototype))
					}
				}()
			}.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof n && n || {}),
			function (e) {
				var t = "document" in this && "classList" in document.documentElement && "Element" in this && "classList" in Element.prototype && function () {
					var e = document.createElement("span");
					return e.classList.add("a", "b"), e.classList.contains("b")
				}();
				t || function (e) {
					var l = !0,
						d = function (e, t, n, r) {
							Object.defineProperty ? Object.defineProperty(e, t, {
								configurable: !1 === l || !!r,
								get: n
							}) : e.__defineGetter__(t, n)
						};
					try {
						d({}, "support")
					} catch (t) {
						l = !1
					}
					var f = function (e, u, c) {
						d(e.prototype, u, function () {
							var e, t = this,
								n = "__defineGetter__DEFINE_PROPERTY" + u;
							if (t[n]) return e;
							if (!(t[n] = !0) === l) {
								for (var r, i = f.mirror || document.createElement("div"), o = i.childNodes, a = o.length, s = 0; s < a; ++s)
									if (o[s]._R === t) {
										r = o[s];
										break
									}
								r || (r = i.appendChild(document.createElement("div"))), e = DOMTokenList.call(r, t, c)
							} else e = new DOMTokenList(t, c);
							return d(t, u, function () {
								return e
							}), delete t[n], e
						}, !0)
					};
					f(e.Element, "classList", "className"), f(e.HTMLElement, "classList", "className"), f(e.HTMLLinkElement, "relList", "rel"), f(e.HTMLAnchorElement, "relList", "rel"), f(e.HTMLAreaElement, "relList", "rel")
				}(this)
			}.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof n && n || {})
	}), t(function (e, t) {
		(function (e) {
			var t = "Window" in this;
			t || "undefined" == typeof WorkerGlobalScope && "function" != typeof importScripts && function (e) {
				e.constructor ? e.Window = e.constructor : (e.Window = e.constructor = new Function("return function Window() {}")()).prototype = this
			}(this)
		}).call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof n && n || {}),
			function (e) {
				var t = "Document" in this;
				t || "undefined" == typeof WorkerGlobalScope && "function" != typeof importScripts && (this.HTMLDocument ? this.Document = this.HTMLDocument : (this.Document = this.HTMLDocument = document.constructor = new Function("return function Document() {}")(), this.Document.prototype = document))
			}.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof n && n || {}),
			function (e) {
				var t = "Element" in this && "HTMLElement" in this;
				t || function () {
					if (!window.Element || window.HTMLElement) {
						window.Element = window.HTMLElement = new Function("return function Element() {}")();
						var e, t = document.appendChild(document.createElement("body")),
							n = t.appendChild(document.createElement("iframe")),
							r = n.contentWindow.document,
							s = Element.prototype = r.appendChild(r.createElement("*")),
							u = {},
							c = function (e, t) {
								var n, r, i, o = e.childNodes || [],
									a = -1;
								if (1 === e.nodeType && e.constructor !== Element)
									for (n in e.constructor = Element, u) r = u[n], e[n] = r;
								for (; i = t && o[++a];) c(i, t);
								return e
							},
							l = document.getElementsByTagName("*"),
							i = document.createElement,
							o = 100;
						s.attachEvent("onpropertychange", function (e) {
							for (var t, n = e.propertyName, r = !u.hasOwnProperty(n), i = s[n], o = u[n], a = -1; t = l[++a];) 1 === t.nodeType && (r || t[n] === o) && (t[n] = i);
							u[n] = i
						}), s.constructor = Element, s.hasAttribute || (s.hasAttribute = function (e) {
							return null !== this.getAttribute(e)
						}), a() || (document.onreadystatechange = a, e = setInterval(a, 25)), document.createElement = function (e) {
							var t = i(String(e).toLowerCase());
							return c(t)
						}, document.removeChild(t)
					} else window.HTMLElement = window.Element;

					function a() {
						return o-- || clearTimeout(e), !(!document.body || document.body.prototype || !/(complete|interactive)/.test(document.readyState) || (c(document, !0), e && document.body.prototype && clearTimeout(e), !document.body.prototype))
					}
				}()
			}.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof n && n || {}),
			function (e) {
				var t = "defineProperty" in Object && function () {
					try {
						return Object.defineProperty({}, "test", {
							value: 42
						}), !0
					} catch (e) {
						return !1
					}
				}();
				t || function (s) {
					var u = Object.prototype.hasOwnProperty("__defineGetter__"),
						c = "Getters & setters cannot be defined on this javascript engine",
						l = "A property cannot both have accessors and be writable or have a value";
					Object.defineProperty = function (e, t, n) {
						if (s && (e === window || e === document || e === Element.prototype || e instanceof Element)) return s(e, t, n);
						if (null === e || !(e instanceof Object || "object" == typeof e)) throw new TypeError("Object.defineProperty called on non-object");
						if (!(n instanceof Object)) throw new TypeError("Property description must be an object");
						var r = String(t),
							i = "value" in n || "writable" in n,
							o = "get" in n && typeof n.get,
							a = "set" in n && typeof n.set;
						if (o) {
							if ("function" !== o) throw new TypeError("Getter must be a function");
							if (!u) throw new TypeError(c);
							if (i) throw new TypeError(l);
							Object.__defineGetter__.call(e, r, n.get)
						} else e[r] = n.value;
						if (a) {
							if ("function" !== a) throw new TypeError("Setter must be a function");
							if (!u) throw new TypeError(c);
							if (i) throw new TypeError(l);
							Object.__defineSetter__.call(e, r, n.set)
						}
						return "value" in n && (e[r] = n.value), e
					}
				}(Object.defineProperty)
			}.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof n && n || {}),
			function (o) {
				var e = function (e) {
					if (!("Event" in e)) return !1;
					if ("function" == typeof e.Event) return !0;
					try {
						return new Event("click"), !0
					} catch (t) {
						return !1
					}
				}(this);
				e || function () {
					var n = {
						click: 1,
						dblclick: 1,
						keyup: 1,
						keypress: 1,
						keydown: 1,
						mousedown: 1,
						mouseup: 1,
						mousemove: 1,
						mouseover: 1,
						mouseenter: 1,
						mouseleave: 1,
						mouseout: 1,
						storage: 1,
						storagecommit: 1,
						textinput: 1
					};
					if ("undefined" != typeof document && "undefined" != typeof window) {
						var e = window.Event && window.Event.prototype || null;
						window.Event = Window.prototype.Event = function (e, t) {
							if (!e) throw new Error("Not enough arguments");
							var n;
							if ("createEvent" in document) {
								n = document.createEvent("Event");
								var r = !(!t || t.bubbles === o) && t.bubbles,
									i = !(!t || t.cancelable === o) && t.cancelable;
								return n.initEvent(e, r, i), n
							}
							return (n = document.createEventObject()).type = e, n.bubbles = !(!t || t.bubbles === o) && t.bubbles, n.cancelable = !(!t || t.cancelable === o) && t.cancelable, n
						}, e && Object.defineProperty(window.Event, "prototype", {
							configurable: !1,
							enumerable: !1,
							writable: !0,
							value: e
						}), "createEvent" in document || (window.addEventListener = Window.prototype.addEventListener = Document.prototype.addEventListener = Element.prototype.addEventListener = function () {
							var a = this,
								e = arguments[0],
								t = arguments[1];
							if (a === window && e in n) throw new Error("In IE8 the event: " + e + " is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");
							a._events || (a._events = {}), a._events[e] || (a._events[e] = function (e) {
								var t, n = a._events[e.type].list,
									r = n.slice(),
									i = -1,
									o = r.length;
								for (e.preventDefault = function () {
										!1 !== e.cancelable && (e.returnValue = !1)
									}, e.stopPropagation = function () {
										e.cancelBubble = !0
									}, e.stopImmediatePropagation = function () {
										e.cancelBubble = !0, e.cancelImmediate = !0
									}, e.currentTarget = a, e.relatedTarget = e.fromElement || null, e.target = e.target || e.srcElement || a, e.timeStamp = (new Date).getTime(), e.clientX && (e.pageX = e.clientX + document.documentElement.scrollLeft, e.pageY = e.clientY + document.documentElement.scrollTop); ++i < o && !e.cancelImmediate;) i in r && (t = r[i], -1 !== s(n, t) && "function" == typeof t && t.call(a, e))
							}, a._events[e].list = [], a.attachEvent && a.attachEvent("on" + e, a._events[e])), a._events[e].list.push(t)
						}, window.removeEventListener = Window.prototype.removeEventListener = Document.prototype.removeEventListener = Element.prototype.removeEventListener = function () {
							var e, t = this,
								n = arguments[0],
								r = arguments[1];
							t._events && t._events[n] && t._events[n].list && -1 !== (e = s(t._events[n].list, r)) && (t._events[n].list.splice(e, 1), t._events[n].list.length || (t.detachEvent && t.detachEvent("on" + n, t._events[n]), delete t._events[n]))
						}, window.dispatchEvent = Window.prototype.dispatchEvent = Document.prototype.dispatchEvent = Element.prototype.dispatchEvent = function (e) {
							if (!arguments.length) throw new Error("Not enough arguments");
							if (!e || "string" != typeof e.type) throw new Error("DOM Events Exception 0");
							var t = this,
								n = e.type;
							try {
								if (!e.bubbles) {
									e.cancelBubble = !0;
									var r = function (e) {
										e.cancelBubble = !0, (t || window).detachEvent("on" + n, r)
									};
									this.attachEvent("on" + n, r)
								}
								this.fireEvent("on" + n, e)
							} catch (i) {
								for (e.target = t;
									"_events" in (e.currentTarget = t) && "function" == typeof t._events[n] && t._events[n].call(t, e), "function" == typeof t["on" + n] && t["on" + n].call(t, e), (t = 9 === t.nodeType ? t.parentWindow : t.parentNode) && !e.cancelBubble;);
							}
							return !0
						}, document.attachEvent("onreadystatechange", function () {
							"complete" === document.readyState && document.dispatchEvent(new Event("DOMContentLoaded", {
								bubbles: !0
							}))
						}))
					}

					function s(e, t) {
						for (var n = -1, r = e.length; ++n < r;)
							if (n in e && e[n] === t) return n;
						return -1
					}
				}()
			}.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof n && n || {})
	});
	var u = i.nodeListForEach,
		c = "app-tabs__item",
		l = c + "--current",
		d = "js-tabs__item",
		f = "app-tabs__heading",
		p = f + "--current",
		h = "js-tabs__heading",
		m = "app-tabs__container--hidden";

	function y(e) {
		this.$module = e, this.$allTabContainers = this.$module.querySelectorAll(".js-tabs__container"), this.$allTabTogglers = this.$module.querySelectorAll(".js-tabs__item a, .js-tabs__heading a"), this.$allTabTogglersMarkedOpen = this.$module.querySelectorAll(".js-tabs__item--open a")
	}
	y.prototype.init = function () {
		this.$module && (this.resetTabs(), this.$module.addEventListener("click", this.handleClick.bind(this)), u(this.$allTabTogglersMarkedOpen, function (e) {
			e.click()
		}))
	}, y.prototype.activateAndToggle = function (e) {
		e.preventDefault();
		var t, n = e.target,
			r = this.$module.querySelectorAll('[href="' + n.hash + '"]');
		try {
			t = this.$module.querySelector(n.hash)
		} catch (o) {
			throw new Error("Invalid example ID given: " + o)
		}
		var i = "true" === n.getAttribute("aria-expanded");
		t && (i ? (t.classList.add(m), t.setAttribute("aria-hidden", "true"), u(r, function (e) {
			e.setAttribute("aria-expanded", "false"), e.parentNode.classList.remove(l, p)
		})) : (this.resetTabs(), t.classList.remove(m), t.setAttribute("aria-hidden", "false"), u(r, function (e) {
			e.setAttribute("aria-expanded", "true"), e.parentNode.classList.contains(c) ? e.parentNode.classList.add(l) : e.parentNode.classList.contains(f) && e.parentNode.classList.add(p)
		})))
	}, y.prototype.resetTabs = function () {
		u(this.$allTabContainers, function (e) {
			e.classList.contains("js-tabs__container--no-tabs") || (e.classList.add(m), e.setAttribute("aria-hidden", "true"))
		}), u(this.$allTabTogglers, function (e) {
			e.setAttribute("aria-expanded", "false"), e.parentNode.classList.remove(l, p)
		})
	}, y.prototype.handleClick = function (e) {
		(e.target.parentNode.classList.contains(d) || e.target.parentNode.classList.contains(h)) && this.activateAndToggle(e)
	};
	var v = e(t(function (e, t) {
		var n;
		n = function () {
			return function (n) {
				var r = {};

				function i(e) {
					if (r[e]) return r[e].exports;
					var t = r[e] = {
						i: e,
						l: !1,
						exports: {}
					};
					return n[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports
				}
				return i.m = n, i.c = r, i.d = function (e, t, n) {
					i.o(e, t) || Object.defineProperty(e, t, {
						enumerable: !0,
						get: n
					})
				}, i.r = function (e) {
					"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
						value: "Module"
					}), Object.defineProperty(e, "__esModule", {
						value: !0
					})
				}, i.t = function (t, e) {
					if (1 & e && (t = i(t)), 8 & e) return t;
					if (4 & e && "object" == typeof t && t && t.__esModule) return t;
					var n = Object.create(null);
					if (i.r(n), Object.defineProperty(n, "default", {
							enumerable: !0,
							value: t
						}), 2 & e && "string" != typeof t)
						for (var r in t) i.d(n, r, function (e) {
							return t[e]
						}.bind(null, r));
					return n
				}, i.n = function (e) {
					var t = e && e.__esModule ? function () {
						return e["default"]
					} : function () {
						return e
					};
					return i.d(t, "a", t), t
				}, i.o = function (e, t) {
					return Object.prototype.hasOwnProperty.call(e, t)
				}, i.p = "", i(i.s = 0)
			}([function (e, t, n) {
				var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
						return typeof e
					} : function (e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					},
					i = function () {
						function r(e, t) {
							for (var n = 0; n < t.length; n++) {
								var r = t[n];
								r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
							}
						}
						return function (e, t, n) {
							return t && r(e.prototype, t), n && r(e, n), e
						}
					}(),
					a = o(n(1)),
					s = o(n(3)),
					u = o(n(4));

				function o(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}
				var c = function (e) {
					function o(e, t) {
						! function r(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, o);
						var n = function i(e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this));
						return n.resolveOptions(t), n.listenClick(e), n
					}
					return function n(e, t) {
						if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
						e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
					}(o, s["default"]), i(o, [{
						key: "resolveOptions",
						value: function () {
							var e = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : {};
							this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText, this.container = "object" === r(e.container) ? e.container : document.body
						}
					}, {
						key: "listenClick",
						value: function (e) {
							var t = this;
							this.listener = (0, u["default"])(e, "click", function (e) {
								return t.onClick(e)
							})
						}
					}, {
						key: "onClick",
						value: function (e) {
							var t = e.delegateTarget || e.currentTarget;
							this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new a["default"]({
								action: this.action(t),
								target: this.target(t),
								text: this.text(t),
								container: this.container,
								trigger: t,
								emitter: this
							})
						}
					}, {
						key: "defaultAction",
						value: function (e) {
							return l("action", e)
						}
					}, {
						key: "defaultTarget",
						value: function (e) {
							var t = l("target", e);
							if (t) return document.querySelector(t)
						}
					}, {
						key: "defaultText",
						value: function (e) {
							return l("text", e)
						}
					}, {
						key: "destroy",
						value: function () {
							this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
						}
					}], [{
						key: "isSupported",
						value: function () {
							var e = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : ["copy", "cut"],
								t = "string" == typeof e ? [e] : e,
								n = !!document.queryCommandSupported;
							return t.forEach(function (e) {
								n = n && !!document.queryCommandSupported(e)
							}), n
						}
					}]), o
				}();

				function l(e, t) {
					var n = "data-clipboard-" + e;
					if (t.hasAttribute(n)) return t.getAttribute(n)
				}
				e.exports = c
			}, function (e, t, n) {
				var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
						return typeof e
					} : function (e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					},
					i = function () {
						function r(e, t) {
							for (var n = 0; n < t.length; n++) {
								var r = t[n];
								r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
							}
						}
						return function (e, t, n) {
							return t && r(e.prototype, t), n && r(e, n), e
						}
					}(),
					o = function s(e) {
						return e && e.__esModule ? e : {
							"default": e
						}
					}(n(2));
				var a = function () {
					function t(e) {
						! function n(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t), this.resolveOptions(e), this.initSelection()
					}
					return i(t, [{
						key: "resolveOptions",
						value: function () {
							var e = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : {};
							this.action = e.action, this.container = e.container, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = ""
						}
					}, {
						key: "initSelection",
						value: function () {
							this.text ? this.selectFake() : this.target && this.selectTarget()
						}
					}, {
						key: "selectFake",
						value: function () {
							var e = this,
								t = "rtl" == document.documentElement.getAttribute("dir");
							this.removeFake(), this.fakeHandlerCallback = function () {
								return e.removeFake()
							}, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[t ? "right" : "left"] = "-9999px";
							var n = window.pageYOffset || document.documentElement.scrollTop;
							this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, o["default"])(this.fakeElem), this.copyText()
						}
					}, {
						key: "removeFake",
						value: function () {
							this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
						}
					}, {
						key: "selectTarget",
						value: function () {
							this.selectedText = (0, o["default"])(this.target), this.copyText()
						}
					}, {
						key: "copyText",
						value: function () {
							var e = void 0;
							try {
								e = document.execCommand(this.action)
							} catch (t) {
								e = !1
							}
							this.handleResult(e)
						}
					}, {
						key: "handleResult",
						value: function (e) {
							this.emitter.emit(e ? "success" : "error", {
								action: this.action,
								text: this.selectedText,
								trigger: this.trigger,
								clearSelection: this.clearSelection.bind(this)
							})
						}
					}, {
						key: "clearSelection",
						value: function () {
							this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges()
						}
					}, {
						key: "destroy",
						value: function () {
							this.removeFake()
						}
					}, {
						key: "action",
						set: function () {
							var e = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : "copy";
							if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
						},
						get: function () {
							return this._action
						}
					}, {
						key: "target",
						set: function (e) {
							if (e !== undefined) {
								if (!e || "object" !== (void 0 === e ? "undefined" : r(e)) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
								if ("copy" === this.action && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
								if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
								this._target = e
							}
						},
						get: function () {
							return this._target
						}
					}]), t
				}();
				e.exports = a
			}, function (e, t) {
				e.exports = function o(e) {
					var t;
					if ("SELECT" === e.nodeName) e.focus(), t = e.value;
					else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
						var n = e.hasAttribute("readonly");
						n || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), n || e.removeAttribute("readonly"), t = e.value
					} else {
						e.hasAttribute("contenteditable") && e.focus();
						var r = window.getSelection(),
							i = document.createRange();
						i.selectNodeContents(e), r.removeAllRanges(), r.addRange(i), t = r.toString()
					}
					return t
				}
			}, function (e, t) {
				function n() {}
				n.prototype = {
					on: function (e, t, n) {
						var r = this.e || (this.e = {});
						return (r[e] || (r[e] = [])).push({
							fn: t,
							ctx: n
						}), this
					},
					once: function (e, t, n) {
						var r = this;

						function i() {
							r.off(e, i), t.apply(n, arguments)
						}
						return i._ = t, this.on(e, i, n)
					},
					emit: function (e) {
						for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), r = 0, i = n.length; r < i; r++) n[r].fn.apply(n[r].ctx, t);
						return this
					},
					off: function (e, t) {
						var n = this.e || (this.e = {}),
							r = n[e],
							i = [];
						if (r && t)
							for (var o = 0, a = r.length; o < a; o++) r[o].fn !== t && r[o].fn._ !== t && i.push(r[o]);
						return i.length ? n[e] = i : delete n[e], this
					}
				}, e.exports = n
			}, function (e, t, n) {
				var a = n(5),
					s = n(6);
				e.exports = function u(e, t, n) {
					if (!e && !t && !n) throw new Error("Missing required arguments");
					if (!a.string(t)) throw new TypeError("Second argument must be a String");
					if (!a.fn(n)) throw new TypeError("Third argument must be a Function");
					if (a.node(e)) return function r(e, t, n) {
						return e.addEventListener(t, n), {
							destroy: function () {
								e.removeEventListener(t, n)
							}
						}
					}(e, t, n);
					if (a.nodeList(e)) return function i(e, t, n) {
						return Array.prototype.forEach.call(e, function (e) {
							e.addEventListener(t, n)
						}), {
							destroy: function () {
								Array.prototype.forEach.call(e, function (e) {
									e.removeEventListener(t, n)
								})
							}
						}
					}(e, t, n);
					if (a.string(e)) return function o(e, t, n) {
						return s(document.body, e, t, n)
					}(e, t, n);
					throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
				}
			}, function (e, n) {
				n.node = function (e) {
					return e !== undefined && e instanceof HTMLElement && 1 === e.nodeType
				}, n.nodeList = function (e) {
					var t = Object.prototype.toString.call(e);
					return e !== undefined && ("[object NodeList]" === t || "[object HTMLCollection]" === t) && "length" in e && (0 === e.length || n.node(e[0]))
				}, n.string = function (e) {
					return "string" == typeof e || e instanceof String
				}, n.fn = function (e) {
					return "[object Function]" === Object.prototype.toString.call(e)
				}
			}, function (e, t, n) {
				var s = n(7);

				function o(e, t, n, r, i) {
					var o = function a(t, n, e, r) {
						return function (e) {
							e.delegateTarget = s(e.target, n), e.delegateTarget && r.call(t, e)
						}
					}.apply(this, arguments);
					return e.addEventListener(n, o, i), {
						destroy: function () {
							e.removeEventListener(n, o, i)
						}
					}
				}
				e.exports = function a(e, t, n, r, i) {
					return "function" == typeof e.addEventListener ? o.apply(null, arguments) : "function" == typeof n ? o.bind(null, document).apply(null, arguments) : ("string" == typeof e && (e = document.querySelectorAll(e)), Array.prototype.map.call(e, function (e) {
						return o(e, t, n, r, i)
					}))
				}
			}, function (e, t) {
				if ("undefined" != typeof Element && !Element.prototype.matches) {
					var n = Element.prototype;
					n.matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector
				}
				e.exports = function r(e, t) {
					for (; e && 9 !== e.nodeType;) {
						if ("function" == typeof e.matches && e.matches(t)) return e;
						e = e.parentNode
					}
				}
			}])
		}, e.exports = n()
	}));

	function g(e) {
		this.$module = e
	}
	g.prototype.init = function () {
		var e = this.$module;
		if (e) {
			var t = document.createElement("button");
			t.className = "app-copy-button js-copy-button", t.setAttribute("aria-live", "assertive"), t.textContent = "Copy code", e.insertBefore(t, e.firstChild), this.copyAction()
		}
	}, g.prototype.copyAction = function () {
		try {
			new v(".js-copy-button", {
				target: function (e) {
					return e.nextElementSibling
				}
			}).on("success", function (e) {
				e.trigger.textContent = "Code copied", e.clearSelection(), setTimeout(function () {
					e.trigger.textContent = "Copy code"
				}, 5e3)
			})
		} catch (e) {
			e && console.log(e.message)
		}
	};
	var b = i.nodeListForEach,
		w = "app-mobile-nav--active",
		x = "app-header-mobile-nav-toggler--active",
		E = "app-mobile-nav__subnav--active",
		S = "app-mobile-nav__subnav-toggler--active";

	function T(e) {
		this.$module = e || document, this.$nav = this.$module.querySelector(".js-app-mobile-nav"), this.$navToggler = this.$module.querySelector(".js-app-mobile-nav-toggler")
	}
	T.prototype.bindUIEvents = function () {
		var t = this.$nav,
			n = this.$navToggler;
		n.addEventListener("click", function (e) {
			t.classList.contains(w) ? (t.classList.remove(w), t.setAttribute("aria-hidden", "true"), n.classList.remove(x), n.setAttribute("aria-expanded", "false")) : (t.classList.add(w), t.setAttribute("aria-hidden", "false"), n.setAttribute("aria-expanded", "true"), n.classList.add(x))
		}), t.addEventListener("click", function (e) {
			var t = e.target;
			if (t.classList.contains("js-mobile-nav-subnav-toggler")) {
				var n = t.parentNode,
					r = n.parentNode.querySelector(".js-app-mobile-nav-subnav");
				r && (r.classList.contains(E) ? (r.classList.remove(E), n.classList.remove(S), r.setAttribute("aria-hidden", "true"), t.setAttribute("aria-expanded", "false")) : (r.classList.add(E), n.classList.add(S), r.setAttribute("aria-hidden", "false"), t.setAttribute("aria-expanded", "true")), e.preventDefault())
			}
		})
	}, T.prototype.includeAria = function () {
		this.$nav.setAttribute("aria-hidden", "true"), this.$navToggler.setAttribute("aria-expanded", "false");
		var e = this.$module.querySelectorAll(".js-mobile-nav-subnav-toggler");
		b(e, function (e, t) {
			var n = e.parentNode.parentNode.querySelector(".js-app-mobile-nav-subnav");
			if (n) {
				var r = n.classList.contains(E),
					i = "js-mobile-nav-subnav-toggler-" + t,
					o = "js-mobile-nav__subnav-" + t;
				n.setAttribute("id", o), n.setAttribute("aria-hidden", r ? "false" : "true"), e.setAttribute("id", i), e.setAttribute("aria-expanded", r ? "true" : "false"), e.setAttribute("aria-controls", o)
			}
		})
	}, T.prototype.init = function () {
		"querySelector" in document && "addEventListener" in window && (this.includeAria(), this.bindUIEvents())
	};
	var _ = e(t(function (e, t) {
			var n;
			window, n = function () {
				return function (n) {
					var r = {};

					function i(e) {
						if (r[e]) return r[e].exports;
						var t = r[e] = {
							i: e,
							l: !1,
							exports: {}
						};
						return n[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports
					}
					return i.m = n, i.c = r, i.d = function (e, t, n) {
						i.o(e, t) || Object.defineProperty(e, t, {
							enumerable: !0,
							get: n
						})
					}, i.r = function (e) {
						"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
							value: "Module"
						}), Object.defineProperty(e, "__esModule", {
							value: !0
						})
					}, i.t = function (t, e) {
						if (1 & e && (t = i(t)), 8 & e) return t;
						if (4 & e && "object" == typeof t && t && t.__esModule) return t;
						var n = Object.create(null);
						if (i.r(n), Object.defineProperty(n, "default", {
								enumerable: !0,
								value: t
							}), 2 & e && "string" != typeof t)
							for (var r in t) i.d(n, r, function (e) {
								return t[e]
							}.bind(null, r));
						return n
					}, i.n = function (e) {
						var t = e && e.__esModule ? function () {
							return e["default"]
						} : function () {
							return e
						};
						return i.d(t, "a", t), t
					}, i.o = function (e, t) {
						return Object.prototype.hasOwnProperty.call(e, t)
					}, i.p = "/", i(i.s = 37)
				}([function (e, t, n) {
					var m = n(1),
						y = n(6),
						v = n(7),
						g = n(16),
						b = n(18),
						w = "prototype",
						x = function (e, t, n) {
							var r, i, o, a, s = e & x.F,
								u = e & x.G,
								c = e & x.S,
								l = e & x.P,
								d = e & x.B,
								f = u ? m : c ? m[t] || (m[t] = {}) : (m[t] || {})[w],
								p = u ? y : y[t] || (y[t] = {}),
								h = p[w] || (p[w] = {});
							for (r in u && (n = t), n) o = ((i = !s && f && f[r] !== undefined) ? f : n)[r], a = d && i ? b(o, m) : l && "function" == typeof o ? b(Function.call, o) : o, f && g(f, r, o, e & x.U), p[r] != o && v(p, r, a), l && h[r] != o && (h[r] = o)
						};
					m.core = y, x.F = 1, x.G = 2, x.S = 4, x.P = 8, x.B = 16, x.W = 32, x.U = 64, x.R = 128, e.exports = x
				}, function (e, t) {
					var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
					"number" == typeof __g && (__g = n)
				}, function (e, t) {
					e.exports = function (e) {
						return "object" == typeof e ? null !== e : "function" == typeof e
					}
				}, function (e, t, n) {
					e.exports = !n(4)(function () {
						return 7 != Object.defineProperty({}, "a", {
							get: function () {
								return 7
							}
						}).a
					})
				}, function (e, t) {
					e.exports = function (e) {
						try {
							return !!e()
						} catch (t) {
							return !0
						}
					}
				}, function (e, t, n) {
					n.r(t), n.d(t, "h", function () {
						return r
					}), n.d(t, "createElement", function () {
						return r
					}), n.d(t, "cloneElement", function () {
						return o
					}), n.d(t, "Component", function () {
						return b
					}), n.d(t, "render", function () {
						return w
					}), n.d(t, "rerender", function () {
						return f
					}), n.d(t, "options", function () {
						return k
					});
					var u = function u() {},
						k = {},
						c = [],
						l = [];

					function r(e, t) {
						var n, r, i, o, a = l;
						for (o = arguments.length; 2 < o--;) c.push(arguments[o]);
						for (t && null != t.children && (c.length || c.push(t.children), delete t.children); c.length;)
							if ((r = c.pop()) && r.pop !== undefined)
								for (o = r.length; o--;) c.push(r[o]);
							else "boolean" == typeof r && (r = null), (i = "function" != typeof e) && (null == r ? r = "" : "number" == typeof r ? r = String(r) : "string" != typeof r && (i = !1)), i && n ? a[a.length - 1] += r : a === l ? a = [r] : a.push(r), n = i;
						var s = new u;
						return s.nodeName = e, s.children = a, s.attributes = null == t ? undefined : t, s.key = null == t ? undefined : t.key, k.vnode !== undefined && k.vnode(s), s
					}

					function O(e, t) {
						for (var n in t) e[n] = t[n];
						return e
					}
					var i = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

					function o(e, t) {
						return r(e.nodeName, O(O({}, e.attributes), t), 2 < arguments.length ? [].slice.call(arguments, 2) : e.children)
					}
					var d = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
						a = [];

					function s(e) {
						!e._dirty && (e._dirty = !0) && 1 == a.push(e) && (k.debounceRendering || i)(f)
					}

					function f() {
						var e, t = a;
						for (a = []; e = t.pop();) e._dirty && D(e)
					}

					function _(e, t) {
						return e.normalizedNodeName === t || e.nodeName.toLowerCase() === t.toLowerCase()
					}

					function L(e) {
						var t = O({}, e.attributes);
						t.children = e.children;
						var n = e.nodeName.defaultProps;
						if (n !== undefined)
							for (var r in n) t[r] === undefined && (t[r] = n[r]);
						return t
					}

					function C(e) {
						var t = e.parentNode;
						t && t.removeChild(e)
					}

					function m(e, t, n, r, i) {
						if ("className" === t && (t = "class"), "key" === t);
						else if ("ref" === t) n && n(null), r && r(e);
						else if ("class" !== t || i)
							if ("style" === t) {
								if (r && "string" != typeof r && "string" != typeof n || (e.style.cssText = r || ""), r && "object" == typeof r) {
									if ("string" != typeof n)
										for (var o in n) o in r || (e.style[o] = "");
									for (var o in r) e.style[o] = "number" == typeof r[o] && !1 === d.test(o) ? r[o] + "px" : r[o]
								}
							} else if ("dangerouslySetInnerHTML" === t) r && (e.innerHTML = r.__html || "");
						else if ("o" == t[0] && "n" == t[1]) {
							var a = t !== (t = t.replace(/Capture$/, ""));
							t = t.toLowerCase().substring(2), r ? n || e.addEventListener(t, p, a) : e.removeEventListener(t, p, a), (e._listeners || (e._listeners = {}))[t] = r
						} else if ("list" !== t && "type" !== t && !i && t in e) {
							try {
								e[t] = null == r ? "" : r
							} catch (u) {}
							null != r && !1 !== r || "spellcheck" == t || e.removeAttribute(t)
						} else {
							var s = i && t !== (t = t.replace(/^xlink:?/, ""));
							null == r || !1 === r ? s ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof r && (s ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), r) : e.setAttribute(t, r))
						} else e.className = r || ""
					}

					function p(e) {
						return this._listeners[e.type](k.event && k.event(e) || e)
					}
					var I = [],
						j = 0,
						N = !1,
						P = !1;

					function A() {
						for (var e; e = I.pop();) k.afterMount && k.afterMount(e), e.componentDidMount && e.componentDidMount()
					}

					function h(e, t, n, r, i, o) {
						j++ || (N = null != i && i.ownerSVGElement !== undefined, P = null != e && !("__preactattr_" in e));
						var a = M(e, t, n, r, o);
						return i && a.parentNode !== i && i.appendChild(a), --j || (P = !1, o || A()), a
					}

					function M(e, t, n, r, i) {
						var o = e,
							a = N;
						if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && e.splitText !== undefined && e.parentNode && (!e._component || i) ? e.nodeValue != t && (e.nodeValue = t) : (o = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(o, e), F(e, !0))), o.__preactattr_ = !0, o;
						var s, u, c = t.nodeName;
						if ("function" == typeof c) return function (e, t, n, r) {
							for (var i = e && e._component, o = i, a = e, s = i && e._componentConstructor === t.nodeName, u = s, c = L(t); i && !u && (i = i._parentComponent);) u = i.constructor === t.nodeName;
							return i && u && (!r || i._component) ? (Q(i, c, 3, n, r), e = i.base) : (o && !s && (z(o), e = a = null), i = R(t.nodeName, c, n), e && !i.nextBase && (i.nextBase = e, a = null), Q(i, c, 1, n, r), e = i.base, a && e !== a && (a._component = null, F(a, !1))), e
						}(e, t, n, r);
						if (N = "svg" === c || "foreignObject" !== c && N, c = String(c), (!e || !_(e, c)) && (s = c, (u = N ? document.createElementNS("http://www.w3.org/2000/svg", s) : document.createElement(s)).normalizedNodeName = s, o = u, e)) {
							for (; e.firstChild;) o.appendChild(e.firstChild);
							e.parentNode && e.parentNode.replaceChild(o, e), F(e, !0)
						}
						var l = o.firstChild,
							d = o.__preactattr_,
							f = t.children;
						if (null == d) {
							d = o.__preactattr_ = {};
							for (var p = o.attributes, h = p.length; h--;) d[p[h].name] = p[h].value
						}
						return !P && f && 1 === f.length && "string" == typeof f[0] && null != l && l.splitText !== undefined && null == l.nextSibling ? l.nodeValue != f[0] && (l.nodeValue = f[0]) : (f && f.length || null != l) && function (e, t, n, r, i) {
								var o, a, s, u, c, l, d, f, p = e.childNodes,
									h = [],
									m = {},
									y = 0,
									v = 0,
									g = p.length,
									b = 0,
									w = t ? t.length : 0;
								if (0 !== g)
									for (var x = 0; x < g; x++) {
										var E = p[x],
											S = E.__preactattr_;
										null != (T = w && S ? E._component ? E._component.__key : S.key : null) ? (y++, m[T] = E) : (S || (E.splitText !== undefined ? !i || E.nodeValue.trim() : i)) && (h[b++] = E)
									}
								if (0 !== w)
									for (x = 0; x < w; x++) {
										var T;
										if ((c = null) != (T = (u = t[x]).key)) y && m[T] !== undefined && (c = m[T], m[T] = undefined, y--);
										else if (v < b)
											for (o = v; o < b; o++)
												if (h[o] !== undefined && (l = a = h[o], f = i, "string" == typeof (d = u) || "number" == typeof d ? l.splitText !== undefined : "string" == typeof d.nodeName ? !l._componentConstructor && _(l, d.nodeName) : f || l._componentConstructor === d.nodeName)) {
													c = a, h[o] = undefined, o === b - 1 && b--, o === v && v++;
													break
												}
										c = M(c, u, n, r), s = p[x], c && c !== e && c !== s && (null == s ? e.appendChild(c) : c === s.nextSibling ? C(s) : e.insertBefore(c, s))
									}
								if (y)
									for (var x in m) m[x] !== undefined && F(m[x], !1);
								for (; v <= b;)(c = h[b--]) !== undefined && F(c, !1)
							}(o, f, n, r, P || null != d.dangerouslySetInnerHTML),
							function (e, t, n) {
								var r;
								for (r in n) t && null != t[r] || null == n[r] || m(e, r, n[r], n[r] = undefined, N);
								for (r in t) "children" === r || "innerHTML" === r || r in n && t[r] === ("value" === r || "checked" === r ? e[r] : n[r]) || m(e, r, n[r], n[r] = t[r], N)
							}(o, t.attributes, d), N = a, o
					}

					function F(e, t) {
						var n = e._component;
						n ? z(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || C(e), y(e))
					}

					function y(e) {
						for (e = e.lastChild; e;) {
							var t = e.previousSibling;
							F(e, !0), e = t
						}
					}
					var v = [];

					function R(e, t, n) {
						var r, i = v.length;
						for (e.prototype && e.prototype.render ? (r = new e(t, n), b.call(r, t, n)) : ((r = new b(t, n)).constructor = e, r.render = g); i--;)
							if (v[i].constructor === e) return r.nextBase = v[i].nextBase, v.splice(i, 1), r;
						return r
					}

					function g(e, t, n) {
						return this.constructor(e, n)
					}

					function Q(e, t, n, r, i) {
						e._disable || (e._disable = !0, e.__ref = t.ref, e.__key = t.key, delete t.ref, delete t.key, "undefined" == typeof e.constructor.getDerivedStateFromProps && (!e.base || i ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, r)), r && r !== e.context && (e.prevContext || (e.prevContext = e.context), e.context = r), e.prevProps || (e.prevProps = e.props), e.props = t, e._disable = !1, 0 !== n && (1 !== n && !1 === k.syncComponentUpdates && e.base ? s(e) : D(e, 1, i)), e.__ref && e.__ref(e))
					}

					function D(e, t, n, r) {
						if (!e._disable) {
							var i, o, a, s = e.props,
								u = e.state,
								c = e.context,
								l = e.prevProps || s,
								d = e.prevState || u,
								f = e.prevContext || c,
								p = e.base,
								h = e.nextBase,
								m = p || h,
								y = e._component,
								v = !1,
								g = f;
							if (e.constructor.getDerivedStateFromProps && (u = O(O({}, u), e.constructor.getDerivedStateFromProps(s, u)), e.state = u), p && (e.props = l, e.state = d, e.context = f, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(s, u, c) ? v = !0 : e.componentWillUpdate && e.componentWillUpdate(s, u, c), e.props = s, e.state = u, e.context = c), e.prevProps = e.prevState = e.prevContext = e.nextBase = null, e._dirty = !1, !v) {
								i = e.render(s, u, c), e.getChildContext && (c = O(O({}, c), e.getChildContext())), p && e.getSnapshotBeforeUpdate && (g = e.getSnapshotBeforeUpdate(l, d));
								var b, w, x = i && i.nodeName;
								if ("function" == typeof x) {
									var E = L(i);
									(o = y) && o.constructor === x && E.key == o.__key ? Q(o, E, 1, c, !1) : (b = o, e._component = o = R(x, E, c), o.nextBase = o.nextBase || h, o._parentComponent = e, Q(o, E, 0, c, !1), D(o, 1, n, !0)), w = o.base
								} else a = m, (b = y) && (a = e._component = null), (m || 1 === t) && (a && (a._component = null), w = function (e, t, n, r, i, o) {
									j++ || (N = null != i && i.ownerSVGElement !== undefined, P = null != e && !("__preactattr_" in e));
									var a = M(e, t, n, r, o);
									return i && a.parentNode !== i && i.appendChild(a), --j || (P = !1, o || A()), a
								}(a, i, c, n || !p, m && m.parentNode, !0));
								if (m && w !== m && o !== y) {
									var S = m.parentNode;
									S && w !== S && (S.replaceChild(w, m), b || (m._component = null, F(m, !1)))
								}
								if (b && z(b), (e.base = w) && !r) {
									for (var T = e, _ = e; _ = _._parentComponent;)(T = _).base = w;
									w._component = T, w._componentConstructor = T.constructor
								}
							}
							for (!p || n ? I.unshift(e) : v || (e.componentDidUpdate && e.componentDidUpdate(l, d, g), k.afterUpdate && k.afterUpdate(e)); e._renderCallbacks.length;) e._renderCallbacks.pop().call(e);
							j || r || A()
						}
					}

					function z(e) {
						k.beforeUnmount && k.beforeUnmount(e);
						var t = e.base;
						e._disable = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;
						var n = e._component;
						n ? z(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), C(e.nextBase = t), v.push(e), y(t)), e.__ref && e.__ref(null)
					}

					function b(e, t) {
						this._dirty = !0, this.context = t, this.props = e, this.state = this.state || {}, this._renderCallbacks = []
					}

					function w(e, t, n) {
						return h(n, e, {}, !1, t, !1)
					}
					O(b.prototype, {
						setState: function (e, t) {
							this.prevState || (this.prevState = this.state), this.state = O(O({}, this.state), "function" == typeof e ? e(this.state, this.props) : e), t && this._renderCallbacks.push(t), s(this)
						},
						forceUpdate: function (e) {
							e && this._renderCallbacks.push(e), D(this, 2)
						},
						render: function w() {}
					});
					var x = {
						h: r,
						createElement: r,
						cloneElement: o,
						Component: b,
						render: w,
						rerender: f,
						options: k
					};
					t["default"] = x
				}, function (e, t) {
					var n = e.exports = {
						version: "2.5.7"
					};
					"number" == typeof __e && (__e = n)
				}, function (e, t, n) {
					var r = n(8),
						i = n(40);
					e.exports = n(3) ? function (e, t, n) {
						return r.f(e, t, i(1, n))
					} : function (e, t, n) {
						return e[t] = n, e
					}
				}, function (e, t, n) {
					var i = n(9),
						o = n(38),
						a = n(39),
						s = Object.defineProperty;
					t.f = n(3) ? Object.defineProperty : function (e, t, n) {
						if (i(e), t = a(t, !0), i(n), o) try {
							return s(e, t, n)
						} catch (r) {}
						if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
						return "value" in n && (e[t] = n.value), e
					}
				}, function (e, t, n) {
					var r = n(2);
					e.exports = function (e) {
						if (!r(e)) throw TypeError(e + " is not an object!");
						return e
					}
				}, function (e, t) {
					var n = 0,
						r = Math.random();
					e.exports = function (e) {
						return "Symbol(".concat(e === undefined ? "" : e, ")_", (++n + r).toString(36))
					}
				}, function (e, t, n) {
					var r = n(22);
					e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
						return "String" == r(e) ? e.split("") : Object(e)
					}
				}, function (e, t) {
					e.exports = function (e) {
						if (e == undefined) throw TypeError("Can't call method on  " + e);
						return e
					}
				}, function (e, t, n) {
					var r = n(4);
					e.exports = function (e, t) {
						return !!e && r(function () {
							t ? e.call(null, function () {}, 1) : e.call(null)
						})
					}
				}, function (e, t, n) {
					var r = n(0);
					r(r.S + r.F, "Object", {
						assign: n(41)
					})
				}, function (e, t, n) {
					var r = n(2),
						i = n(1).document,
						o = r(i) && r(i.createElement);
					e.exports = function (e) {
						return o ? i.createElement(e) : {}
					}
				}, function (e, t, n) {
					var o = n(1),
						a = n(7),
						s = n(17),
						u = n(10)("src"),
						r = "toString",
						i = Function[r],
						c = ("" + i).split(r);
					n(6).inspectSource = function (e) {
						return i.call(e)
					}, (e.exports = function (e, t, n, r) {
						var i = "function" == typeof n;
						i && (s(n, "name") || a(n, "name", t)), e[t] !== n && (i && (s(n, u) || a(n, u, e[t] ? "" + e[t] : c.join(String(t)))), e === o ? e[t] = n : r ? e[t] ? e[t] = n : a(e, t, n) : (delete e[t], a(e, t, n)))
					})(Function.prototype, r, function () {
						return "function" == typeof this && this[u] || i.call(this)
					})
				}, function (e, t) {
					var n = {}.hasOwnProperty;
					e.exports = function (e, t) {
						return n.call(e, t)
					}
				}, function (e, t, n) {
					var o = n(19);
					e.exports = function (r, i, e) {
						if (o(r), i === undefined) return r;
						switch (e) {
						case 1:
							return function (e) {
								return r.call(i, e)
							};
						case 2:
							return function (e, t) {
								return r.call(i, e, t)
							};
						case 3:
							return function (e, t, n) {
								return r.call(i, e, t, n)
							}
						}
						return function () {
							return r.apply(i, arguments)
						}
					}
				}, function (e, t) {
					e.exports = function (e) {
						if ("function" != typeof e) throw TypeError(e + " is not a function!");
						return e
					}
				}, function (e, t, n) {
					var r = n(42),
						i = n(28);
					e.exports = Object.keys || function (e) {
						return r(e, i)
					}
				}, function (e, t, n) {
					var r = n(11),
						i = n(12);
					e.exports = function (e) {
						return r(i(e))
					}
				}, function (e, t) {
					var n = {}.toString;
					e.exports = function (e) {
						return n.call(e).slice(8, -1)
					}
				}, function (e, t, n) {
					var u = n(21),
						c = n(24),
						l = n(43);
					e.exports = function (s) {
						return function (e, t, n) {
							var r, i = u(e),
								o = c(i.length),
								a = l(n, o);
							if (s && t != t) {
								for (; a < o;)
									if ((r = i[a++]) != r) return !0
							} else
								for (; a < o; a++)
									if ((s || a in i) && i[a] === t) return s || a || 0;
							return !s && -1
						}
					}
				}, function (e, t, n) {
					var r = n(25),
						i = Math.min;
					e.exports = function (e) {
						return 0 < e ? i(r(e), 9007199254740991) : 0
					}
				}, function (e, t) {
					var n = Math.ceil,
						r = Math.floor;
					e.exports = function (e) {
						return isNaN(e = +e) ? 0 : (0 < e ? r : n)(e)
					}
				}, function (e, t, n) {
					var r = n(27)("keys"),
						i = n(10);
					e.exports = function (e) {
						return r[e] || (r[e] = i(e))
					}
				}, function (e, t, n) {
					var r = n(6),
						i = n(1),
						o = "__core-js_shared__",
						a = i[o] || (i[o] = {});
					(e.exports = function (e, t) {
						return a[e] || (a[e] = t !== undefined ? t : {})
					})("versions", []).push({
						version: r.version,
						mode: n(44) ? "pure" : "global",
						copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
					})
				}, function (e, t) {
					e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
				}, function (e, t, n) {
					var r = n(12);
					e.exports = function (e) {
						return Object(r(e))
					}
				}, function (e, t, n) {
					var r = n(8).f,
						i = Function.prototype,
						o = /^\s*function ([^ (]*)/;
					"name" in i || n(3) && r(i, "name", {
						configurable: !0,
						get: function () {
							try {
								return ("" + this).match(o)[1]
							} catch (e) {
								return ""
							}
						}
					})
				}, function (e, t, n) {
					var r = n(0),
						i = n(32)(1);
					r(r.P + r.F * !n(13)([].map, !0), "Array", {
						map: function (e) {
							return i(this, e, arguments[1])
						}
					})
				}, function (e, t, n) {
					var b = n(18),
						w = n(11),
						x = n(29),
						E = n(24),
						r = n(47);
					e.exports = function (d, e) {
						var f = 1 == d,
							p = 2 == d,
							h = 3 == d,
							m = 4 == d,
							y = 6 == d,
							v = 5 == d || y,
							g = e || r;
						return function (e, t, n) {
							for (var r, i, o = x(e), a = w(o), s = b(t, n, 3), u = E(a.length), c = 0, l = f ? g(e, u) : p ? g(e, 0) : undefined; c < u; c++)
								if ((v || c in a) && (i = s(r = a[c], c, o), d))
									if (f) l[c] = i;
									else if (i) switch (d) {
							case 3:
								return !0;
							case 5:
								return r;
							case 6:
								return c;
							case 2:
								l.push(r)
							} else if (m) return !1;
							return y ? -1 : h || m ? m : l
						}
					}
				}, function (e, t, n) {
					var r = n(22);
					e.exports = Array.isArray || function (e) {
						return "Array" == r(e)
					}
				}, function (e, t, n) {
					var r = n(27)("wks"),
						i = n(10),
						o = n(1).Symbol,
						a = "function" == typeof o;
					(e.exports = function (e) {
						return r[e] || (r[e] = a && o[e] || (a ? o : i)("Symbol." + e))
					}).store = r
				}, function (e, t, n) {
					var r = n(0),
						i = n(23)(!1),
						o = [].indexOf,
						a = !!o && 1 / [1].indexOf(1, -0) < 0;
					r(r.P + r.F * (a || !n(13)(o)), "Array", {
						indexOf: function (e) {
							return a ? o.apply(this, arguments) || 0 : i(this, e, arguments[1])
						}
					})
				}, function (e, t, n) {
					var r = n(0);
					r(r.S, "Object", {
						create: n(52)
					})
				}, function (e, t, n) {
					t.__esModule = !0, t["default"] = void 0, n(14), n(30), n(31), n(35), n(49), n(50);
					var r, i = n(5),
						o = (r = n(51)) && r.__esModule ? r : {
							"default": r
						};

					function a(e) {
						if (!e.element) throw new Error("element is not defined");
						if (!e.id) throw new Error("id is not defined");
						if (!e.source) throw new Error("source is not defined");
						Array.isArray(e.source) && (e.source = s(e.source)), (0, i.render)((0, i.createElement)(o["default"], e), e.element)
					}
					var s = function s(n) {
						return function (t, e) {
							e(n.filter(function (e) {
								return -1 !== e.toLowerCase().indexOf(t.toLowerCase())
							}))
						}
					};
					a.enhanceSelectElement = function (n) {
						if (!n.selectElement) throw new Error("selectElement is not defined");
						if (!n.source) {
							var e = [].filter.call(n.selectElement.options, function (e) {
								return e.value || n.preserveNullOptions
							});
							n.source = e.map(function (e) {
								return e.textContent || e.innerText
							})
						}
						if (n.onConfirm = n.onConfirm || function (t) {
								var e = [].filter.call(n.selectElement.options, function (e) {
									return (e.textContent || e.innerText) === t
								})[0];
								e && (e.selected = !0)
							}, n.selectElement.value || n.defaultValue === undefined) {
							var t = n.selectElement.options[n.selectElement.options.selectedIndex];
							n.defaultValue = t.textContent || t.innerText
						}
						n.name === undefined && (n.name = ""), n.id === undefined && (n.selectElement.id === undefined ? n.id = "" : n.id = n.selectElement.id), n.autoselect === undefined && (n.autoselect = !0);
						var r = document.createElement("span");
						n.selectElement.parentNode.insertBefore(r, n.selectElement), a(Object.assign({}, n, {
							element: r
						})), n.selectElement.style.display = "none", n.selectElement.id = n.selectElement.id + "-select"
					};
					var u = a;
					t["default"] = u
				}, function (e, t, n) {
					e.exports = !n(3) && !n(4)(function () {
						return 7 != Object.defineProperty(n(15)("div"), "a", {
							get: function () {
								return 7
							}
						}).a
					})
				}, function (e, t, n) {
					var i = n(2);
					e.exports = function (e, t) {
						if (!i(e)) return e;
						var n, r;
						if (t && "function" == typeof (n = e.toString) && !i(r = n.call(e))) return r;
						if ("function" == typeof (n = e.valueOf) && !i(r = n.call(e))) return r;
						if (!t && "function" == typeof (n = e.toString) && !i(r = n.call(e))) return r;
						throw TypeError("Can't convert object to primitive value")
					}
				}, function (e, t) {
					e.exports = function (e, t) {
						return {
							enumerable: !(1 & e),
							configurable: !(2 & e),
							writable: !(4 & e),
							value: t
						}
					}
				}, function (e, t, n) {
					var f = n(20),
						p = n(45),
						h = n(46),
						m = n(29),
						y = n(11),
						i = Object.assign;
					e.exports = !i || n(4)(function () {
						var e = {},
							t = {},
							n = Symbol(),
							r = "abcdefghijklmnopqrst";
						return e[n] = 7, r.split("").forEach(function (e) {
							t[e] = e
						}), 7 != i({}, e)[n] || Object.keys(i({}, t)).join("") != r
					}) ? function (e, t) {
						for (var n = m(e), r = arguments.length, i = 1, o = p.f, a = h.f; i < r;)
							for (var s, u = y(arguments[i++]), c = o ? f(u).concat(o(u)) : f(u), l = c.length, d = 0; d < l;) a.call(u, s = c[d++]) && (n[s] = u[s]);
						return n
					} : i
				}, function (e, t, n) {
					var a = n(17),
						s = n(21),
						u = n(23)(!1),
						c = n(26)("IE_PROTO");
					e.exports = function (e, t) {
						var n, r = s(e),
							i = 0,
							o = [];
						for (n in r) n != c && a(r, n) && o.push(n);
						for (; t.length > i;) a(r, n = t[i++]) && (~u(o, n) || o.push(n));
						return o
					}
				}, function (e, t, n) {
					var r = n(25),
						i = Math.max,
						o = Math.min;
					e.exports = function (e, t) {
						return (e = r(e)) < 0 ? i(e + t, 0) : o(e, t)
					}
				}, function (e, t) {
					e.exports = !1
				}, function (e, t) {
					t.f = Object.getOwnPropertySymbols
				}, function (e, t) {
					t.f = {}.propertyIsEnumerable
				}, function (e, t, n) {
					var r = n(48);
					e.exports = function (e, t) {
						return new(r(e))(t)
					}
				}, function (e, t, n) {
					var r = n(2),
						i = n(33),
						o = n(34)("species");
					e.exports = function (e) {
						var t;
						return i(e) && ("function" != typeof (t = e.constructor) || t !== Array && !i(t.prototype) || (t = undefined), r(t) && null === (t = t[o]) && (t = undefined)), t === undefined ? Array : t
					}
				}, function (e, t, n) {
					var r = n(0),
						i = n(32)(2);
					r(r.P + r.F * !n(13)([].filter, !0), "Array", {
						filter: function (e) {
							return i(this, e, arguments[1])
						}
					})
				}, function (e, t, n) {
					var r = n(0);
					r(r.S, "Array", {
						isArray: n(33)
					})
				}, function (e, t, n) {
					t.__esModule = !0, t["default"] = void 0, n(14), n(36), n(30), n(31), n(35), n(55), n(58);
					var G = n(5),
						K = i(n(60)),
						r = i(n(61));

					function i(e) {
						return e && e.__esModule ? e : {
							"default": e
						}
					}

					function J() {
						return (J = Object.assign || function (e) {
							for (var t = 1; t < arguments.length; t++) {
								var n = arguments[t];
								for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
							}
							return e
						}).apply(this, arguments)
					}

					function o(e) {
						if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return e
					}
					var a, s = {
							13: "enter",
							27: "escape",
							32: "space",
							38: "up",
							40: "down"
						},
						X = ((a = document.createElement("x")).style.cssText = "pointer-events:auto", "auto" === a.style.pointerEvents);

					function Y() {
						return !(!navigator.userAgent.match(/(iPod|iPhone|iPad)/g) || !navigator.userAgent.match(/AppleWebKit/g))
					}
					var u = function (n) {
						function e(e) {
							var t;
							return (t = n.call(this, e) || this).elementReferences = {}, t.state = {
								focused: null,
								hovered: null,
								clicked: null,
								menuOpen: !1,
								options: e.defaultValue ? [e.defaultValue] : [],
								query: e.defaultValue,
								validChoiceMade: !1,
								selected: null,
								ariaHint: !0
							}, t.handleComponentBlur = t.handleComponentBlur.bind(o(o(t))), t.handleKeyDown = t.handleKeyDown.bind(o(o(t))), t.handleUpArrow = t.handleUpArrow.bind(o(o(t))), t.handleDownArrow = t.handleDownArrow.bind(o(o(t))), t.handleEnter = t.handleEnter.bind(o(o(t))), t.handlePrintableKey = t.handlePrintableKey.bind(o(o(t))), t.handleListMouseLeave = t.handleListMouseLeave.bind(o(o(t))), t.handleOptionBlur = t.handleOptionBlur.bind(o(o(t))), t.handleOptionClick = t.handleOptionClick.bind(o(o(t))), t.handleOptionFocus = t.handleOptionFocus.bind(o(o(t))), t.handleOptionMouseEnter = t.handleOptionMouseEnter.bind(o(o(t))), t.handleInputBlur = t.handleInputBlur.bind(o(o(t))), t.handleInputChange = t.handleInputChange.bind(o(o(t))), t.handleInputFocus = t.handleInputFocus.bind(o(o(t))), t.pollInputElement = t.pollInputElement.bind(o(o(t))), t.getDirectInputChanges = t.getDirectInputChanges.bind(o(o(t))), t
						}
						var t, r;
						r = n, (t = e).prototype = Object.create(r.prototype), (t.prototype.constructor = t).__proto__ = r;
						var i = e.prototype;
						return i.isQueryAnOption = function (e, t) {
							var n = this;
							return -1 !== t.map(function (e) {
								return n.templateInputValue(e).toLowerCase()
							}).indexOf(e.toLowerCase())
						}, i.componentDidMount = function () {
							this.pollInputElement()
						}, i.componentWillUnmount = function () {
							clearTimeout(this.$pollInput), clearTimeout(this.$blurInput)
						}, i.pollInputElement = function () {
							var e = this;
							this.getDirectInputChanges(), this.$pollInput = setTimeout(function () {
								e.pollInputElement()
							}, 100)
						}, i.getDirectInputChanges = function () {
							var e = this.elementReferences[-1];
							e && e.value !== this.state.query && this.handleInputChange({
								target: {
									value: e.value
								}
							})
						}, i.componentDidUpdate = function (e, t) {
							var n = this.state,
								r = n.focused,
								i = n.clicked,
								o = null === r,
								a = t.focused !== r;
							(a && !o || null !== i) && this.elementReferences[r].focus();
							var s = -1 === r,
								u = a && null === t.focused;
							if (s && u) {
								var c = this.elementReferences[r];
								c.setSelectionRange(0, c.value.length)
							}
						}, i.hasAutoselect = function () {
							return !Y() && this.props.autoselect
						}, i.templateInputValue = function (e) {
							var t = this.props.templates && this.props.templates.inputValue;
							return t ? t(e) : e
						}, i.templateSuggestion = function (e) {
							var t = this.props.templates && this.props.templates.suggestion;
							return t ? t(e) : e
						}, i.handleComponentBlur = function (e) {
							var t, n = this.state,
								r = n.options,
								i = n.query,
								o = n.selected;
							this.props.confirmOnBlur ? (t = e.query || i, this.props.onConfirm(r[o])) : t = i, this.setState({
								focused: null,
								clicked: null,
								menuOpen: e.menuOpen || !1,
								query: t,
								selected: null,
								validChoiceMade: this.isQueryAnOption(t, r)
							})
						}, i.handleListMouseLeave = function (e) {
							this.setState({
								hovered: null
							})
						}, i.handleOptionBlur = function (e, t) {
							var n = this.state,
								r = n.focused,
								i = n.clicked,
								o = n.menuOpen,
								a = n.options,
								s = n.selected,
								u = null === e.relatedTarget && null === i,
								c = e.relatedTarget === this.elementReferences[-1],
								l = r !== t && -1 !== r;
							if (!l && u || !l && !c) {
								var d = o && Y();
								this.handleComponentBlur({
									menuOpen: d,
									query: this.templateInputValue(a[s])
								})
							}
						}, i.handleInputBlur = function (e) {
							var t = this,
								n = this.state,
								r = n.focused,
								i = n.menuOpen,
								o = n.options,
								a = n.query,
								s = n.selected,
								u = -1 !== r;
							if (clearTimeout(this.$blurInput), !u) {
								var c = i && Y(),
									l = Y() ? a : this.templateInputValue(o[s]);
								this.$blurInput = setTimeout(function () {
									return t.handleComponentBlur({
										menuOpen: c,
										query: l
									})
								}, 200)
							}
						}, i.handleInputChange = function (e) {
							var n = this,
								t = this.props,
								r = t.minLength,
								i = t.source,
								o = t.showAllValues,
								a = this.hasAutoselect(),
								s = e.target.value,
								u = 0 === s.length,
								c = this.state.query.length !== s.length,
								l = s.length >= r;
							this.setState({
								query: s,
								ariaHint: u
							}), o || !u && c && l ? i(s, function (e) {
								var t = 0 < e.length;
								n.setState({
									menuOpen: t,
									options: e,
									selected: a && t ? 0 : -1,
									validChoiceMade: !1
								})
							}) : !u && l || this.setState({
								menuOpen: !1,
								options: []
							})
						}, i.handleInputClick = function (e) {
							this.handleInputChange(e)
						}, i.handleInputFocus = function (e) {
							var t = this.state,
								n = t.query,
								r = t.validChoiceMade,
								i = t.options,
								o = this.props.minLength,
								a = !r && n.length >= o && 0 < i.length;
							a ? this.setState(function (e) {
								var t = e.menuOpen;
								return {
									focused: -1,
									menuOpen: a || t,
									selected: -1
								}
							}) : this.setState({
								focused: -1
							})
						}, i.handleOptionFocus = function (e) {
							this.setState({
								focused: e,
								hovered: null,
								selected: e
							})
						}, i.handleOptionMouseEnter = function (e, t) {
							Y() || this.setState({
								hovered: t
							})
						}, i.handleOptionClick = function (e, t) {
							var n = this.state.options[t],
								r = this.templateInputValue(n);
							clearTimeout(this.$blurInput), this.props.onConfirm(n), this.setState({
								focused: -1,
								clicked: t,
								hovered: null,
								menuOpen: !1,
								query: r,
								selected: -1,
								validChoiceMade: !0
							}), this.forceUpdate()
						}, i.handleUpArrow = function (e) {
							e.preventDefault();
							var t = this.state,
								n = t.menuOpen,
								r = t.selected; - 1 !== r && n && this.handleOptionFocus(r - 1)
						}, i.handleDownArrow = function (e) {
							var t = this;
							if (e.preventDefault(), this.props.showAllValues && !1 === this.state.menuOpen) e.preventDefault(), this.props.source("", function (e) {
								t.setState({
									menuOpen: !0,
									options: e,
									selected: 0,
									focused: 0,
									hovered: null
								})
							});
							else if (!0 === this.state.menuOpen) {
								var n = this.state,
									r = n.menuOpen,
									i = n.options,
									o = n.selected;
								o !== i.length - 1 && r && this.handleOptionFocus(o + 1)
							}
						}, i.handleSpace = function (e) {
							var t = this;
							this.props.showAllValues && !1 === this.state.menuOpen && "" === this.state.query && (e.preventDefault(), this.props.source("", function (e) {
								t.setState({
									menuOpen: !0,
									options: e
								})
							})), -1 !== this.state.focused && (e.preventDefault(), this.handleOptionClick(e, this.state.focused))
						}, i.handleEnter = function (e) {
							this.state.menuOpen && (e.preventDefault(), 0 <= this.state.selected && this.handleOptionClick(e, this.state.selected))
						}, i.handlePrintableKey = function (e) {
							var t = this.elementReferences[-1];
							e.target === t || t.focus()
						}, i.handleKeyDown = function (e) {
							switch (s[e.keyCode]) {
							case "up":
								this.handleUpArrow(e);
								break;
							case "down":
								this.handleDownArrow(e);
								break;
							case "space":
								this.handleSpace(e);
								break;
							case "enter":
								this.handleEnter(e);
								break;
							case "escape":
								this.handleComponentBlur({
									query: this.state.query
								});
								break;
							default:
								(47 < (t = e.keyCode) && t < 58 || 32 === t || 8 === t || 64 < t && t < 91 || 95 < t && t < 112 || 185 < t && t < 193 || 218 < t && t < 223) && this.handlePrintableKey(e)
							}
							var t
						}, i.render = function () {
							var e, o = this,
								t = this.props,
								n = t.cssNamespace,
								r = t.displayMenu,
								a = t.id,
								i = t.minLength,
								s = t.name,
								u = t.placeholder,
								c = t.required,
								l = t.showAllValues,
								d = t.tNoResults,
								f = t.tStatusQueryTooShort,
								p = t.tStatusNoResults,
								h = t.tStatusSelectedOption,
								m = t.tStatusResults,
								y = t.tAssistiveHint,
								v = t.dropdownArrow,
								g = this.state,
								b = g.focused,
								w = g.hovered,
								x = g.menuOpen,
								E = g.options,
								S = g.query,
								T = g.selected,
								_ = g.ariaHint,
								k = g.validChoiceMade,
								O = this.hasAutoselect(),
								L = -1 === b,
								C = 0 === E.length,
								I = 0 !== S.length,
								j = S.length >= i,
								N = this.props.showNoOptionsFound && L && C && I && j,
								P = n + "__wrapper",
								A = n + "__input",
								M = null !== b ? " " + A + "--focused" : "",
								F = this.props.showAllValues ? " " + A + "--show-all-values" : " " + A + "--default",
								R = n + "__dropdown-arrow-down",
								Q = -1 !== b && null !== b,
								D = n + "__menu",
								z = D + "--" + r,
								B = D + "--" + (x || N ? "visible" : "hidden"),
								q = n + "__option",
								V = n + "__hint",
								H = this.templateInputValue(E[T]),
								W = H && 0 === H.toLowerCase().indexOf(S.toLowerCase()) && O ? S + H.substr(S.length) : "",
								$ = X && W,
								U = _ ? {
									"aria-describedby": "assistiveHint"
								} : null;
							return l && "string" == typeof (e = v({
								className: R
							})) && (e = (0, G.createElement)("div", {
								className: n + "__dropdown-arrow-down-wrapper",
								dangerouslySetInnerHTML: {
									__html: e
								}
							})), (0, G.createElement)("div", {
								className: P,
								onKeyDown: this.handleKeyDown
							}, (0, G.createElement)(K["default"], {
								length: E.length,
								queryLength: S.length,
								minQueryLength: i,
								selectedOption: this.templateInputValue(E[T]),
								selectedOptionIndex: T,
								validChoiceMade: k,
								isInFocus: null !== this.state.focused,
								tQueryTooShort: f,
								tNoResults: p,
								tSelectedOption: h,
								tResults: m
							}), $ && (0, G.createElement)("span", null, (0, G.createElement)("input", {
								className: V,
								readonly: !0,
								tabIndex: "-1",
								value: W
							})), (0, G.createElement)("input", J({
								"aria-expanded": x ? "true" : "false",
								"aria-activedescendant": !!Q && a + "__option--" + b,
								"aria-owns": a + "__listbox",
								"aria-autocomplete": this.hasAutoselect() ? "both" : "list"
							}, U, {
								autoComplete: "off",
								className: A + M + F,
								id: a,
								onClick: function (e) {
									return o.handleInputClick(e)
								},
								onBlur: this.handleInputBlur
							}, {
								onInput: this.handleInputChange
							}, {
								onFocus: this.handleInputFocus,
								name: s,
								placeholder: u,
								ref: function (e) {
									o.elementReferences[-1] = e
								},
								type: "text",
								role: "combobox",
								required: c,
								value: S
							})), e, (0, G.createElement)("ul", {
								className: D + " " + z + " " + B,
								onMouseLeave: function (e) {
									return o.handleListMouseLeave(e)
								},
								id: a + "__listbox",
								role: "listbox"
							}, E.map(function (e, t) {
								var n = (-1 === b ? T === t : b === t) && null === w ? " " + q + "--focused" : "",
									r = t % 2 ? " " + q + "--odd" : "",
									i = Y() ? "<span id=" + a + "__option-suffix--" + t + ' style="border:0;clip:rect(0 0 0 0);height:1px;marginBottom:-1px;marginRight:-1px;overflow:hidden;padding:0;position:absolute;whiteSpace:nowrap;width:1px"> ' + (t + 1) + " of " + E.length + "</span>" : "";
								return (0, G.createElement)("li", {
									"aria-selected": b === t,
									className: q + n + r,
									dangerouslySetInnerHTML: {
										__html: o.templateSuggestion(e) + i
									},
									id: a + "__option--" + t,
									key: t,
									onBlur: function (e) {
										return o.handleOptionBlur(e, t)
									},
									onClick: function (e) {
										return o.handleOptionClick(e, t)
									},
									onMouseEnter: function (e) {
										return o.handleOptionMouseEnter(e, t)
									},
									ref: function (e) {
										o.elementReferences[t] = e
									},
									role: "option",
									tabIndex: "-1",
									"aria-posinset": t + 1,
									"aria-setsize": E.length
								})
							}), N && (0, G.createElement)("li", {
								className: q + " " + q + "--no-results"
							}, d())), (0, G.createElement)("span", {
								id: "assistiveHint",
								style: {
									display: "none"
								}
							}, y()))
						}, e
					}(G.Component);
					(t["default"] = u).defaultProps = {
						autoselect: !1,
						cssNamespace: "autocomplete",
						defaultValue: "",
						displayMenu: "inline",
						minLength: 0,
						name: "input-autocomplete",
						placeholder: "",
						onConfirm: function () {},
						confirmOnBlur: !0,
						showNoOptionsFound: !0,
						showAllValues: !1,
						required: !1,
						tNoResults: function () {
							return "No results found"
						},
						tAssistiveHint: function () {
							return "When autocomplete results are available use up and down arrows to review and enter to select.  Touch device users, explore by touch or with swipe gestures."
						},
						dropdownArrow: r["default"]
					}
				}, function (e, t, r) {
					var i = r(9),
						o = r(53),
						a = r(28),
						s = r(26)("IE_PROTO"),
						u = function () {},
						c = "prototype",
						l = function () {
							var e, t = r(15)("iframe"),
								n = a.length;
							for (t.style.display = "none", r(54).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), l = e.F; n--;) delete l[c][a[n]];
							return l()
						};
					e.exports = Object.create || function (e, t) {
						var n;
						return null !== e ? (u[c] = i(e), n = new u, u[c] = null, n[s] = e) : n = l(), t === undefined ? n : o(n, t)
					}
				}, function (e, t, n) {
					var a = n(8),
						s = n(9),
						u = n(20);
					e.exports = n(3) ? Object.defineProperties : function (e, t) {
						s(e);
						for (var n, r = u(t), i = r.length, o = 0; o < i;) a.f(e, n = r[o++], t[n]);
						return e
					}
				}, function (e, t, n) {
					var r = n(1).document;
					e.exports = r && r.documentElement
				}, function (e, t, n) {
					var r = n(0);
					r(r.P, "Function", {
						bind: n(56)
					})
				}, function (e, t, n) {
					var o = n(19),
						a = n(2),
						s = n(57),
						u = [].slice,
						c = {};
					e.exports = Function.bind || function (t) {
						var n = o(this),
							r = u.call(arguments, 1),
							i = function () {
								var e = r.concat(u.call(arguments));
								return this instanceof i ? function (e, t, n) {
									if (!(t in c)) {
										for (var r = [], i = 0; i < t; i++) r[i] = "a[" + i + "]";
										c[t] = Function("F,a", "return new F(" + r.join(",") + ")")
									}
									return c[t](e, n)
								}(n, e.length, e) : s(n, e, t)
							};
						return a(n.prototype) && (i.prototype = n.prototype), i
					}
				}, function (e, t) {
					e.exports = function (e, t, n) {
						var r = n === undefined;
						switch (t.length) {
						case 0:
							return r ? e() : e.call(n);
						case 1:
							return r ? e(t[0]) : e.call(n, t[0]);
						case 2:
							return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
						case 3:
							return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
						case 4:
							return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
						}
						return e.apply(n, t)
					}
				}, function (e, t, n) {
					n(59)("match", 1, function (r, i, e) {
						return [function (e) {
							var t = r(this),
								n = e == undefined ? undefined : e[i];
							return n !== undefined ? n.call(e, t) : new RegExp(e)[i](String(t))
						}, e]
					})
				}, function (e, t, n) {
					var s = n(7),
						u = n(16),
						c = n(4),
						l = n(12),
						d = n(34);
					e.exports = function (t, e, n) {
						var r = d(t),
							i = n(l, r, "" [t]),
							o = i[0],
							a = i[1];
						c(function () {
							var e = {};
							return e[r] = function () {
								return 7
							}, 7 != "" [t](e)
						}) && (u(String.prototype, t, o), s(RegExp.prototype, r, 2 == e ? function (e, t) {
							return a.call(e, this, t)
						} : function (e) {
							return a.call(e, this)
						}))
					}
				}, function (e, t, n) {
					t.__esModule = !0, t["default"] = void 0, n(36);
					var g = n(5),
						u = function u(i, o, a) {
							var s;
							return function () {
								var e = this,
									t = arguments,
									n = function n() {
										s = null, a || i.apply(e, t)
									},
									r = a && !s;
								clearTimeout(s), s = setTimeout(n, o), r && i.apply(e, t)
							}
						},
						r = function (i) {
							function e() {
								for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
								return (e = i.call.apply(i, [this].concat(n)) || this).state = {
									bump: !1,
									debounced: !1
								}, e
							}
							var t, n;
							n = i, (t = e).prototype = Object.create(n.prototype), (t.prototype.constructor = t).__proto__ = n;
							var r = e.prototype;
							return r.componentWillMount = function () {
								var e = this;
								this.debounceStatusUpdate = u(function () {
									if (!e.state.debounced) {
										var t = !e.props.isInFocus || e.props.validChoiceMade;
										e.setState(function (e) {
											return {
												bump: !e.bump,
												debounced: !0,
												silenced: t
											}
										})
									}
								}, 1400)
							}, r.componentWillReceiveProps = function (e) {
								e.queryLength, this.setState({
									debounced: !1
								})
							}, r.render = function () {
								var e, t = this.props,
									n = t.length,
									r = t.queryLength,
									i = t.minQueryLength,
									o = t.selectedOption,
									a = t.selectedOptionIndex,
									s = t.tQueryTooShort,
									u = t.tNoResults,
									c = t.tSelectedOption,
									l = t.tResults,
									d = this.state,
									f = d.bump,
									p = d.debounced,
									h = d.silenced,
									m = r < i,
									y = 0 === n,
									v = o ? c(o, n, a) : "";
								return e = m ? s(i) : y ? u() : l(n, v), this.debounceStatusUpdate(), (0, g.createElement)("div", {
									style: {
										border: "0",
										clip: "rect(0 0 0 0)",
										height: "1px",
										marginBottom: "-1px",
										marginRight: "-1px",
										overflow: "hidden",
										padding: "0",
										position: "absolute",
										whiteSpace: "nowrap",
										width: "1px"
									}
								}, (0, g.createElement)("div", {
									id: "ariaLiveA",
									role: "status",
									"aria-atomic": "true",
									"aria-live": "polite"
								}, !h && p && f ? e : ""), (0, g.createElement)("div", {
									id: "ariaLiveB",
									role: "status",
									"aria-atomic": "true",
									"aria-live": "polite"
								}, h || !p || f ? "" : e))
							}, e
						}(g.Component);
					(t["default"] = r).defaultProps = {
						tQueryTooShort: function (e) {
							return "Type in " + e + " or more characters for results"
						},
						tNoResults: function () {
							return "No search results"
						},
						tSelectedOption: function (e, t, n) {
							return e + " " + (n + 1) + " of " + t + " is highlighted"
						},
						tResults: function (e, t) {
							return e + " " + (1 === e ? "result" : "results") + " " + (1 === e ? "is" : "are") + " available. " + t
						}
					}
				}, function (e, t, n) {
					t.__esModule = !0, t["default"] = void 0;
					var r = n(5);
					t["default"] = function (e) {
						var t = e.className;
						return (0, r.createElement)("svg", {
							version: "1.1",
							xmlns: "http://www.w3.org/2000/svg",
							className: t,
							focusable: "false"
						}, (0, r.createElement)("g", {
							stroke: "none",
							fill: "none",
							"fill-rule": "evenodd"
						}, (0, r.createElement)("polygon", {
							fill: "#000000",
							points: "0 0 22 0 11 17"
						})))
					}
				}])["default"]
			}, e.exports = n()
		})),
		k = t(function (i, e) {
			! function () {
				var t, c, l, e, n, d, f, p, h, m, y, v, g, b, w, x, E, S, T, _, k, O, L, C, I, j, r, B = function (e) {
					var t = new B.Builder;
					return t.pipeline.add(B.trimmer, B.stopWordFilter, B.stemmer), t.searchPipeline.add(B.stemmer), e.call(t, t), t.build()
				};
				B.version = "2.3.6", B.utils = {}, B.utils.warn = (t = this, function (e) {
					t.console && console.warn && console.warn(e)
				}), B.utils.asString = function (e) {
					return null == e ? "" : e.toString()
				}, B.utils.clone = function (e) {
					if (null === e || e === undefined) return e;
					for (var t = Object.create(null), n = Object.keys(e), r = 0; r < n.length; r++) {
						var i = n[r],
							o = e[i];
						if (Array.isArray(o)) t[i] = o.slice();
						else {
							if ("string" != typeof o && "number" != typeof o && "boolean" != typeof o) throw new TypeError("clone is not deep and does not support nested objects");
							t[i] = o
						}
					}
					return t
				}, B.FieldRef = function (e, t, n) {
					this.docRef = e, this.fieldName = t, this._stringValue = n
				}, B.FieldRef.joiner = "/", B.FieldRef.fromString = function (e) {
					var t = e.indexOf(B.FieldRef.joiner);
					if (-1 === t) throw "malformed field ref string";
					var n = e.slice(0, t),
						r = e.slice(t + 1);
					return new B.FieldRef(r, n, e)
				}, B.FieldRef.prototype.toString = function () {
					return this._stringValue == undefined && (this._stringValue = this.fieldName + B.FieldRef.joiner + this.docRef), this._stringValue
				}, B.Set = function (e) {
					if (this.elements = Object.create(null), e) {
						this.length = e.length;
						for (var t = 0; t < this.length; t++) this.elements[e[t]] = !0
					} else this.length = 0
				}, B.Set.complete = {
					intersect: function (e) {
						return e
					},
					union: function (e) {
						return e
					},
					contains: function () {
						return !0
					}
				}, B.Set.empty = {
					intersect: function () {
						return this
					},
					union: function (e) {
						return e
					},
					contains: function () {
						return !1
					}
				}, B.Set.prototype.contains = function (e) {
					return !!this.elements[e]
				}, B.Set.prototype.intersect = function (e) {
					var t, n, r, i = [];
					if (e === B.Set.complete) return this;
					if (e === B.Set.empty) return e;
					n = this.length < e.length ? (t = this, e) : (t = e, this), r = Object.keys(t.elements);
					for (var o = 0; o < r.length; o++) {
						var a = r[o];
						a in n.elements && i.push(a)
					}
					return new B.Set(i)
				}, B.Set.prototype.union = function (e) {
					return e === B.Set.complete ? B.Set.complete : e === B.Set.empty ? this : new B.Set(Object.keys(this.elements).concat(Object.keys(e.elements)))
				}, B.idf = function (e, t) {
					var n = 0;
					for (var r in e) "_index" != r && (n += Object.keys(e[r]).length);
					var i = (t - n + .5) / (n + .5);
					return Math.log(1 + Math.abs(i))
				}, B.Token = function (e, t) {
					this.str = e || "", this.metadata = t || {}
				}, B.Token.prototype.toString = function () {
					return this.str
				}, B.Token.prototype.update = function (e) {
					return this.str = e(this.str, this.metadata), this
				}, B.Token.prototype.clone = function (e) {
					return e = e || function (e) {
						return e
					}, new B.Token(e(this.str, this.metadata), this.metadata)
				}, B.tokenizer = function (e, t) {
					if (null == e || e == undefined) return [];
					if (Array.isArray(e)) return e.map(function (e) {
						return new B.Token(B.utils.asString(e).toLowerCase(), B.utils.clone(t))
					});
					for (var n = e.toString().trim().toLowerCase(), r = n.length, i = [], o = 0, a = 0; o <= r; o++) {
						var s = o - a;
						if (n.charAt(o).match(B.tokenizer.separator) || o == r) {
							if (0 < s) {
								var u = B.utils.clone(t) || {};
								u.position = [a, s], u.index = i.length, i.push(new B.Token(n.slice(a, o), u))
							}
							a = o + 1
						}
					}
					return i
				}, B.tokenizer.separator = /[\s\-]+/, B.Pipeline = function () {
					this._stack = []
				}, B.Pipeline.registeredFunctions = Object.create(null), B.Pipeline.registerFunction = function (e, t) {
					t in this.registeredFunctions && B.utils.warn("Overwriting existing registered function: " + t), e.label = t, B.Pipeline.registeredFunctions[e.label] = e
				}, B.Pipeline.warnIfFunctionNotRegistered = function (e) {
					e.label && e.label in this.registeredFunctions || B.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n", e)
				}, B.Pipeline.load = function (e) {
					var n = new B.Pipeline;
					return e.forEach(function (e) {
						var t = B.Pipeline.registeredFunctions[e];
						if (!t) throw new Error("Cannot load unregistered function: " + e);
						n.add(t)
					}), n
				}, B.Pipeline.prototype.add = function () {
					Array.prototype.slice.call(arguments).forEach(function (e) {
						B.Pipeline.warnIfFunctionNotRegistered(e), this._stack.push(e)
					}, this)
				}, B.Pipeline.prototype.after = function (e, t) {
					B.Pipeline.warnIfFunctionNotRegistered(t);
					var n = this._stack.indexOf(e);
					if (-1 == n) throw new Error("Cannot find existingFn");
					n += 1, this._stack.splice(n, 0, t)
				}, B.Pipeline.prototype.before = function (e, t) {
					B.Pipeline.warnIfFunctionNotRegistered(t);
					var n = this._stack.indexOf(e);
					if (-1 == n) throw new Error("Cannot find existingFn");
					this._stack.splice(n, 0, t)
				}, B.Pipeline.prototype.remove = function (e) {
					var t = this._stack.indexOf(e); - 1 != t && this._stack.splice(t, 1)
				}, B.Pipeline.prototype.run = function (e) {
					for (var t = this._stack.length, n = 0; n < t; n++) {
						for (var r = this._stack[n], i = [], o = 0; o < e.length; o++) {
							var a = r(e[o], o, e);
							if (void 0 !== a && "" !== a)
								if (Array.isArray(a))
									for (var s = 0; s < a.length; s++) i.push(a[s]);
								else i.push(a)
						}
						e = i
					}
					return e
				}, B.Pipeline.prototype.runString = function (e, t) {
					var n = new B.Token(e, t);
					return this.run([n]).map(function (e) {
						return e.toString()
					})
				}, B.Pipeline.prototype.reset = function () {
					this._stack = []
				}, B.Pipeline.prototype.toJSON = function () {
					return this._stack.map(function (e) {
						return B.Pipeline.warnIfFunctionNotRegistered(e), e.label
					})
				}, B.Vector = function (e) {
					this._magnitude = 0, this.elements = e || []
				}, B.Vector.prototype.positionForIndex = function (e) {
					if (0 == this.elements.length) return 0;
					for (var t = 0, n = this.elements.length / 2, r = n - t, i = Math.floor(r / 2), o = this.elements[2 * i]; 1 < r && (o < e && (t = i), e < o && (n = i), o != e);) r = n - t, i = t + Math.floor(r / 2), o = this.elements[2 * i];
					return o == e ? 2 * i : e < o ? 2 * i : o < e ? 2 * (i + 1) : void 0
				}, B.Vector.prototype.insert = function (e, t) {
					this.upsert(e, t, function () {
						throw "duplicate index"
					})
				}, B.Vector.prototype.upsert = function (e, t, n) {
					this._magnitude = 0;
					var r = this.positionForIndex(e);
					this.elements[r] == e ? this.elements[r + 1] = n(this.elements[r + 1], t) : this.elements.splice(r, 0, e, t)
				}, B.Vector.prototype.magnitude = function () {
					if (this._magnitude) return this._magnitude;
					for (var e = 0, t = this.elements.length, n = 1; n < t; n += 2) {
						var r = this.elements[n];
						e += r * r
					}
					return this._magnitude = Math.sqrt(e)
				}, B.Vector.prototype.dot = function (e) {
					for (var t = 0, n = this.elements, r = e.elements, i = n.length, o = r.length, a = 0, s = 0, u = 0, c = 0; u < i && c < o;)(a = n[u]) < (s = r[c]) ? u += 2 : s < a ? c += 2 : a == s && (t += n[u + 1] * r[c + 1], u += 2, c += 2);
					return t
				}, B.Vector.prototype.similarity = function (e) {
					return this.dot(e) / this.magnitude() || 0
				}, B.Vector.prototype.toArray = function () {
					for (var e = new Array(this.elements.length / 2), t = 1, n = 0; t < this.elements.length; t += 2, n++) e[n] = this.elements[t];
					return e
				}, B.Vector.prototype.toJSON = function () {
					return this.elements
				}, B.stemmer = (c = {
					ational: "ate",
					tional: "tion",
					enci: "ence",
					anci: "ance",
					izer: "ize",
					bli: "ble",
					alli: "al",
					entli: "ent",
					eli: "e",
					ousli: "ous",
					ization: "ize",
					ation: "ate",
					ator: "ate",
					alism: "al",
					iveness: "ive",
					fulness: "ful",
					ousness: "ous",
					aliti: "al",
					iviti: "ive",
					biliti: "ble",
					logi: "log"
				}, l = {
					icate: "ic",
					ative: "",
					alize: "al",
					iciti: "ic",
					ical: "ic",
					ful: "",
					ness: ""
				}, e = "[aeiouy]", n = "[^aeiou][^aeiouy]*", d = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*"), f = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*"), p = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$"), h = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy]"), m = /^(.+?)(ss|i)es$/, y = /^(.+?)([^s])s$/, v = /^(.+?)eed$/, g = /^(.+?)(ed|ing)$/, b = /.$/, w = /(at|bl|iz)$/, x = new RegExp("([^aeiouylsz])\\1$"), E = new RegExp("^" + n + e + "[^aeiouwxy]$"), S = /^(.+?[^aeiou])y$/, T = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/, _ = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/, k = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/, O = /^(.+?)(s|t)(ion)$/, L = /^(.+?)e$/, C = /ll$/, I = new RegExp("^" + n + e + "[^aeiouwxy]$"), j = function j(e) {
					var t, n, r, i, o, a, s;
					if (e.length < 3) return e;
					if ("y" == (r = e.substr(0, 1)) && (e = r.toUpperCase() + e.substr(1)), o = y, (i = m).test(e) ? e = e.replace(i, "$1$2") : o.test(e) && (e = e.replace(o, "$1$2")), o = g, (i = v).test(e)) {
						var u = i.exec(e);
						(i = d).test(u[1]) && (i = b, e = e.replace(i, ""))
					} else if (o.test(e)) {
						t = (u = o.exec(e))[1], (o = h).test(t) && (a = x, s = E, (o = w).test(e = t) ? e += "e" : a.test(e) ? (i = b, e = e.replace(i, "")) : s.test(e) && (e += "e"))
					}(i = S).test(e) && (e = (t = (u = i.exec(e))[1]) + "i");
					(i = T).test(e) && (t = (u = i.exec(e))[1], n = u[2], (i = d).test(t) && (e = t + c[n]));
					(i = _).test(e) && (t = (u = i.exec(e))[1], n = u[2], (i = d).test(t) && (e = t + l[n]));
					if (o = O, (i = k).test(e)) t = (u = i.exec(e))[1], (i = f).test(t) && (e = t);
					else if (o.test(e)) {
						t = (u = o.exec(e))[1] + u[2], (o = f).test(t) && (e = t)
					}(i = L).test(e) && (t = (u = i.exec(e))[1], o = p, a = I, ((i = f).test(t) || o.test(t) && !a.test(t)) && (e = t));
					return o = f, (i = C).test(e) && o.test(e) && (i = b, e = e.replace(i, "")), "y" == r && (e = r.toLowerCase() + e.substr(1)), e
				}, function (e) {
					return e.update(j)
				}), B.Pipeline.registerFunction(B.stemmer, "stemmer"), B.generateStopWordFilter = function (e) {
					var t = e.reduce(function (e, t) {
						return e[t] = t, e
					}, {});
					return function (e) {
						if (e && t[e.toString()] !== e.toString()) return e
					}
				}, B.stopWordFilter = B.generateStopWordFilter(["a", "able", "about", "across", "after", "all", "almost", "also", "am", "among", "an", "and", "any", "are", "as", "at", "be", "because", "been", "but", "by", "can", "cannot", "could", "dear", "did", "do", "does", "either", "else", "ever", "every", "for", "from", "get", "got", "had", "has", "have", "he", "her", "hers", "him", "his", "how", "however", "i", "if", "in", "into", "is", "it", "its", "just", "least", "let", "like", "likely", "may", "me", "might", "most", "must", "my", "neither", "no", "nor", "not", "of", "off", "often", "on", "only", "or", "other", "our", "own", "rather", "said", "say", "says", "she", "should", "since", "so", "some", "than", "that", "the", "their", "them", "then", "there", "these", "they", "this", "tis", "to", "too", "twas", "us", "wants", "was", "we", "were", "what", "when", "where", "which", "while", "who", "whom", "why", "will", "with", "would", "yet", "you", "your"]), B.Pipeline.registerFunction(B.stopWordFilter, "stopWordFilter"), B.trimmer = function (e) {
					return e.update(function (e) {
						return e.replace(/^\W+/, "").replace(/\W+$/, "")
					})
				}, B.Pipeline.registerFunction(B.trimmer, "trimmer"), B.TokenSet = function () {
					this["final"] = !1, this.edges = {}, this.id = B.TokenSet._nextId, B.TokenSet._nextId += 1
				}, B.TokenSet._nextId = 1, B.TokenSet.fromArray = function (e) {
					for (var t = new B.TokenSet.Builder, n = 0, r = e.length; n < r; n++) t.insert(e[n]);
					return t.finish(), t.root
				}, B.TokenSet.fromClause = function (e) {
					return "editDistance" in e ? B.TokenSet.fromFuzzyString(e.term, e.editDistance) : B.TokenSet.fromString(e.term)
				}, B.TokenSet.fromFuzzyString = function (e, t) {
					for (var n = new B.TokenSet, r = [{
							node: n,
							editsRemaining: t,
							str: e
						}]; r.length;) {
						var i = r.pop();
						if (0 < i.str.length) {
							var o, a = i.str.charAt(0);
							a in i.node.edges ? o = i.node.edges[a] : (o = new B.TokenSet, i.node.edges[a] = o), 1 == i.str.length && (o["final"] = !0), r.push({
								node: o,
								editsRemaining: i.editsRemaining,
								str: i.str.slice(1)
							})
						}
						if (0 != i.editsRemaining) {
							if ("*" in i.node.edges) var s = i.node.edges["*"];
							else {
								s = new B.TokenSet;
								i.node.edges["*"] = s
							}
							if (0 == i.str.length && (s["final"] = !0), r.push({
									node: s,
									editsRemaining: i.editsRemaining - 1,
									str: i.str
								}), 1 < i.str.length && r.push({
									node: i.node,
									editsRemaining: i.editsRemaining - 1,
									str: i.str.slice(1)
								}), 1 == i.str.length && (i.node["final"] = !0), 1 <= i.str.length) {
								if ("*" in i.node.edges) var u = i.node.edges["*"];
								else {
									u = new B.TokenSet;
									i.node.edges["*"] = u
								}
								1 == i.str.length && (u["final"] = !0), r.push({
									node: u,
									editsRemaining: i.editsRemaining - 1,
									str: i.str.slice(1)
								})
							}
							if (1 < i.str.length) {
								var c, l = i.str.charAt(0),
									d = i.str.charAt(1);
								d in i.node.edges ? c = i.node.edges[d] : (c = new B.TokenSet, i.node.edges[d] = c), 1 == i.str.length && (c["final"] = !0), r.push({
									node: c,
									editsRemaining: i.editsRemaining - 1,
									str: l + i.str.slice(2)
								})
							}
						}
					}
					return n
				}, B.TokenSet.fromString = function (e) {
					for (var t = new B.TokenSet, n = t, r = 0, i = e.length; r < i; r++) {
						var o = e[r],
							a = r == i - 1;
						if ("*" == o)(t.edges[o] = t)["final"] = a;
						else {
							var s = new B.TokenSet;
							s["final"] = a, t.edges[o] = s, t = s
						}
					}
					return n
				}, B.TokenSet.prototype.toArray = function () {
					for (var e = [], t = [{
							prefix: "",
							node: this
						}]; t.length;) {
						var n = t.pop(),
							r = Object.keys(n.node.edges),
							i = r.length;
						n.node["final"] && (n.prefix.charAt(0), e.push(n.prefix));
						for (var o = 0; o < i; o++) {
							var a = r[o];
							t.push({
								prefix: n.prefix.concat(a),
								node: n.node.edges[a]
							})
						}
					}
					return e
				}, B.TokenSet.prototype.toString = function () {
					if (this._str) return this._str;
					for (var e = this["final"] ? "1" : "0", t = Object.keys(this.edges).sort(), n = t.length, r = 0; r < n; r++) {
						var i = t[r];
						e = e + i + this.edges[i].id
					}
					return e
				}, B.TokenSet.prototype.intersect = function (e) {
					for (var t = new B.TokenSet, n = undefined, r = [{
							qNode: e,
							output: t,
							node: this
						}]; r.length;) {
						n = r.pop();
						for (var i = Object.keys(n.qNode.edges), o = i.length, a = Object.keys(n.node.edges), s = a.length, u = 0; u < o; u++)
							for (var c = i[u], l = 0; l < s; l++) {
								var d = a[l];
								if (d == c || "*" == c) {
									var f = n.node.edges[d],
										p = n.qNode.edges[c],
										h = f["final"] && p["final"],
										m = undefined;
									d in n.output.edges ? (m = n.output.edges[d])["final"] = m["final"] || h : ((m = new B.TokenSet)["final"] = h, n.output.edges[d] = m), r.push({
										qNode: p,
										output: m,
										node: f
									})
								}
							}
					}
					return t
				}, B.TokenSet.Builder = function () {
					this.previousWord = "", this.root = new B.TokenSet, this.uncheckedNodes = [], this.minimizedNodes = {}
				}, B.TokenSet.Builder.prototype.insert = function (e) {
					var t, n = 0;
					if (e < this.previousWord) throw new Error("Out of order word insertion");
					for (var r = 0; r < e.length && r < this.previousWord.length && e[r] == this.previousWord[r]; r++) n++;
					this.minimize(n), t = 0 == this.uncheckedNodes.length ? this.root : this.uncheckedNodes[this.uncheckedNodes.length - 1].child;
					for (r = n; r < e.length; r++) {
						var i = new B.TokenSet,
							o = e[r];
						t.edges[o] = i, this.uncheckedNodes.push({
							parent: t,
							"char": o,
							child: i
						}), t = i
					}
					t["final"] = !0, this.previousWord = e
				}, B.TokenSet.Builder.prototype.finish = function () {
					this.minimize(0)
				}, B.TokenSet.Builder.prototype.minimize = function (e) {
					for (var t = this.uncheckedNodes.length - 1; e <= t; t--) {
						var n = this.uncheckedNodes[t],
							r = n.child.toString();
						r in this.minimizedNodes ? n.parent.edges[n["char"]] = this.minimizedNodes[r] : (n.child._str = r, this.minimizedNodes[r] = n.child), this.uncheckedNodes.pop()
					}
				}, B.Index = function (e) {
					this.invertedIndex = e.invertedIndex, this.fieldVectors = e.fieldVectors, this.tokenSet = e.tokenSet, this.fields = e.fields, this.pipeline = e.pipeline
				}, B.Index.prototype.search = function (t) {
					return this.query(function (e) {
						new B.QueryParser(t, e).parse()
					})
				}, B.Index.prototype.query = function (e) {
					for (var t = new B.Query(this.fields), n = Object.create(null), r = Object.create(null), i = Object.create(null), o = Object.create(null), a = Object.create(null), s = 0; s < this.fields.length; s++) r[this.fields[s]] = new B.Vector;
					e.call(t, t);
					for (s = 0; s < t.clauses.length; s++) {
						var u = t.clauses[s],
							c = null,
							l = B.Set.complete;
						c = u.usePipeline ? this.pipeline.runString(u.term, {
							fields: u.fields
						}) : [u.term];
						for (var d = 0; d < c.length; d++) {
							var f = c[d];
							u.term = f;
							var p = B.TokenSet.fromClause(u),
								h = this.tokenSet.intersect(p).toArray();
							if (0 === h.length && u.presence === B.Query.presence.REQUIRED) {
								for (var m = 0; m < u.fields.length; m++) {
									o[j = u.fields[m]] = B.Set.empty
								}
								break
							}
							for (var y = 0; y < h.length; y++) {
								var v = h[y],
									g = this.invertedIndex[v],
									b = g._index;
								for (m = 0; m < u.fields.length; m++) {
									var w = g[j = u.fields[m]],
										x = Object.keys(w),
										E = v + "/" + j,
										S = new B.Set(x);
									if (u.presence == B.Query.presence.REQUIRED && (l = l.union(S), o[j] === undefined && (o[j] = B.Set.complete)), u.presence != B.Query.presence.PROHIBITED) {
										if (r[j].upsert(b, u.boost, function (e, t) {
												return e + t
											}), !i[E]) {
											for (var T = 0; T < x.length; T++) {
												var _, k = x[T],
													O = new B.FieldRef(k, j),
													L = w[k];
												(_ = n[O]) === undefined ? n[O] = new B.MatchData(v, j, L) : _.add(v, j, L)
											}
											i[E] = !0
										}
									} else a[j] === undefined && (a[j] = B.Set.empty), a[j] = a[j].union(S)
								}
							}
						}
						if (u.presence === B.Query.presence.REQUIRED)
							for (m = 0; m < u.fields.length; m++) {
								o[j = u.fields[m]] = o[j].intersect(l)
							}
					}
					var C = B.Set.complete,
						I = B.Set.empty;
					for (s = 0; s < this.fields.length; s++) {
						var j;
						o[j = this.fields[s]] && (C = C.intersect(o[j])), a[j] && (I = I.union(a[j]))
					}
					var N = Object.keys(n),
						P = [],
						A = Object.create(null);
					if (t.isNegated()) {
						N = Object.keys(this.fieldVectors);
						for (s = 0; s < N.length; s++) {
							O = N[s];
							var M = B.FieldRef.fromString(O);
							n[O] = new B.MatchData
						}
					}
					for (s = 0; s < N.length; s++) {
						var F = (M = B.FieldRef.fromString(N[s])).docRef;
						if (C.contains(F) && !I.contains(F)) {
							var R, Q = this.fieldVectors[M],
								D = r[M.fieldName].similarity(Q);
							if ((R = A[F]) !== undefined) R.score += D, R.matchData.combine(n[M]);
							else {
								var z = {
									ref: F,
									score: D,
									matchData: n[M]
								};
								A[F] = z, P.push(z)
							}
						}
					}
					return P.sort(function (e, t) {
						return t.score - e.score
					})
				}, B.Index.prototype.toJSON = function () {
					var e = Object.keys(this.invertedIndex).sort().map(function (e) {
							return [e, this.invertedIndex[e]]
						}, this),
						t = Object.keys(this.fieldVectors).map(function (e) {
							return [e, this.fieldVectors[e].toJSON()]
						}, this);
					return {
						version: B.version,
						fields: this.fields,
						fieldVectors: t,
						invertedIndex: e,
						pipeline: this.pipeline.toJSON()
					}
				}, B.Index.load = function (e) {
					var t = {},
						n = {},
						r = e.fieldVectors,
						i = Object.create(null),
						o = e.invertedIndex,
						a = new B.TokenSet.Builder,
						s = B.Pipeline.load(e.pipeline);
					e.version != B.version && B.utils.warn("Version mismatch when loading serialised index. Current version of lunr '" + B.version + "' does not match serialized index '" + e.version + "'");
					for (var u = 0; u < r.length; u++) {
						var c = (d = r[u])[0],
							l = d[1];
						n[c] = new B.Vector(l)
					}
					for (u = 0; u < o.length; u++) {
						var d, f = (d = o[u])[0],
							p = d[1];
						a.insert(f), i[f] = p
					}
					return a.finish(), t.fields = e.fields, t.fieldVectors = n, t.invertedIndex = i, t.tokenSet = a.root, t.pipeline = s, new B.Index(t)
				}, B.Builder = function () {
					this._ref = "id", this._fields = Object.create(null), this._documents = Object.create(null), this.invertedIndex = Object.create(null), this.fieldTermFrequencies = {}, this.fieldLengths = {}, this.tokenizer = B.tokenizer, this.pipeline = new B.Pipeline, this.searchPipeline = new B.Pipeline, this.documentCount = 0, this._b = .75, this._k1 = 1.2, this.termIndex = 0, this.metadataWhitelist = []
				}, B.Builder.prototype.ref = function (e) {
					this._ref = e
				}, B.Builder.prototype.field = function (e, t) {
					if (/\//.test(e)) throw new RangeError("Field '" + e + "' contains illegal character '/'");
					this._fields[e] = t || {}
				}, B.Builder.prototype.b = function (e) {
					this._b = e < 0 ? 0 : 1 < e ? 1 : e
				}, B.Builder.prototype.k1 = function (e) {
					this._k1 = e
				}, B.Builder.prototype.add = function (e, t) {
					var n = e[this._ref],
						r = Object.keys(this._fields);
					this._documents[n] = t || {}, this.documentCount += 1;
					for (var i = 0; i < r.length; i++) {
						var o = r[i],
							a = this._fields[o].extractor,
							s = a ? a(e) : e[o],
							u = this.tokenizer(s, {
								fields: [o]
							}),
							c = this.pipeline.run(u),
							l = new B.FieldRef(n, o),
							d = Object.create(null);
						this.fieldTermFrequencies[l] = d, this.fieldLengths[l] = 0, this.fieldLengths[l] += c.length;
						for (var f = 0; f < c.length; f++) {
							var p = c[f];
							if (d[p] == undefined && (d[p] = 0), d[p] += 1, this.invertedIndex[p] == undefined) {
								var h = Object.create(null);
								h._index = this.termIndex, this.termIndex += 1;
								for (var m = 0; m < r.length; m++) h[r[m]] = Object.create(null);
								this.invertedIndex[p] = h
							}
							this.invertedIndex[p][o][n] == undefined && (this.invertedIndex[p][o][n] = Object.create(null));
							for (var y = 0; y < this.metadataWhitelist.length; y++) {
								var v = this.metadataWhitelist[y],
									g = p.metadata[v];
								this.invertedIndex[p][o][n][v] == undefined && (this.invertedIndex[p][o][n][v] = []), this.invertedIndex[p][o][n][v].push(g)
							}
						}
					}
				}, B.Builder.prototype.calculateAverageFieldLengths = function () {
					for (var e = Object.keys(this.fieldLengths), t = e.length, n = {}, r = {}, i = 0; i < t; i++) {
						var o = B.FieldRef.fromString(e[i]),
							a = o.fieldName;
						r[a] || (r[a] = 0), r[a] += 1, n[a] || (n[a] = 0), n[a] += this.fieldLengths[o]
					}
					var s = Object.keys(this._fields);
					for (i = 0; i < s.length; i++) {
						var u = s[i];
						n[u] = n[u] / r[u]
					}
					this.averageFieldLength = n
				}, B.Builder.prototype.createFieldVectors = function () {
					for (var e = {}, t = Object.keys(this.fieldTermFrequencies), n = t.length, r = Object.create(null), i = 0; i < n; i++) {
						for (var o = B.FieldRef.fromString(t[i]), a = o.fieldName, s = this.fieldLengths[o], u = new B.Vector, c = this.fieldTermFrequencies[o], l = Object.keys(c), d = l.length, f = this._fields[a].boost || 1, p = this._documents[o.docRef].boost || 1, h = 0; h < d; h++) {
							var m, y, v, g = l[h],
								b = c[g],
								w = this.invertedIndex[g]._index;
							r[g] === undefined ? (m = B.idf(this.invertedIndex[g], this.documentCount), r[g] = m) : m = r[g], y = m * ((this._k1 + 1) * b) / (this._k1 * (1 - this._b + this._b * (s / this.averageFieldLength[a])) + b), y *= f, y *= p, v = Math.round(1e3 * y) / 1e3, u.insert(w, v)
						}
						e[o] = u
					}
					this.fieldVectors = e
				}, B.Builder.prototype.createTokenSet = function () {
					this.tokenSet = B.TokenSet.fromArray(Object.keys(this.invertedIndex).sort())
				}, B.Builder.prototype.build = function () {
					return this.calculateAverageFieldLengths(), this.createFieldVectors(), this.createTokenSet(), new B.Index({
						invertedIndex: this.invertedIndex,
						fieldVectors: this.fieldVectors,
						tokenSet: this.tokenSet,
						fields: Object.keys(this._fields),
						pipeline: this.searchPipeline
					})
				}, B.Builder.prototype.use = function (e) {
					var t = Array.prototype.slice.call(arguments, 1);
					t.unshift(this), e.apply(this, t)
				}, B.MatchData = function (e, t, n) {
					for (var r = Object.create(null), i = Object.keys(n || {}), o = 0; o < i.length; o++) {
						var a = i[o];
						r[a] = n[a].slice()
					}
					this.metadata = Object.create(null), e !== undefined && (this.metadata[e] = Object.create(null), this.metadata[e][t] = r)
				}, B.MatchData.prototype.combine = function (e) {
					for (var t = Object.keys(e.metadata), n = 0; n < t.length; n++) {
						var r = t[n],
							i = Object.keys(e.metadata[r]);
						this.metadata[r] == undefined && (this.metadata[r] = Object.create(null));
						for (var o = 0; o < i.length; o++) {
							var a = i[o],
								s = Object.keys(e.metadata[r][a]);
							this.metadata[r][a] == undefined && (this.metadata[r][a] = Object.create(null));
							for (var u = 0; u < s.length; u++) {
								var c = s[u];
								this.metadata[r][a][c] == undefined ? this.metadata[r][a][c] = e.metadata[r][a][c] : this.metadata[r][a][c] = this.metadata[r][a][c].concat(e.metadata[r][a][c])
							}
						}
					}
				}, B.MatchData.prototype.add = function (e, t, n) {
					if (!(e in this.metadata)) return this.metadata[e] = Object.create(null), void(this.metadata[e][t] = n);
					if (t in this.metadata[e])
						for (var r = Object.keys(n), i = 0; i < r.length; i++) {
							var o = r[i];
							o in this.metadata[e][t] ? this.metadata[e][t][o] = this.metadata[e][t][o].concat(n[o]) : this.metadata[e][t][o] = n[o]
						} else this.metadata[e][t] = n
				}, B.Query = function (e) {
					this.clauses = [], this.allFields = e
				}, B.Query.wildcard = new String("*"), B.Query.wildcard.NONE = 0, B.Query.wildcard.LEADING = 1, B.Query.wildcard.TRAILING = 2, B.Query.presence = {
					OPTIONAL: 1,
					REQUIRED: 2,
					PROHIBITED: 3
				}, B.Query.prototype.clause = function (e) {
					return "fields" in e || (e.fields = this.allFields), "boost" in e || (e.boost = 1), "usePipeline" in e || (e.usePipeline = !0), "wildcard" in e || (e.wildcard = B.Query.wildcard.NONE), e.wildcard & B.Query.wildcard.LEADING && e.term.charAt(0) != B.Query.wildcard && (e.term = "*" + e.term), e.wildcard & B.Query.wildcard.TRAILING && e.term.slice(-1) != B.Query.wildcard && (e.term = e.term + "*"), "presence" in e || (e.presence = B.Query.presence.OPTIONAL), this.clauses.push(e), this
				}, B.Query.prototype.isNegated = function () {
					for (var e = 0; e < this.clauses.length; e++)
						if (this.clauses[e].presence != B.Query.presence.PROHIBITED) return !1;
					return !0
				}, B.Query.prototype.term = function (e, t) {
					if (Array.isArray(e)) return e.forEach(function (e) {
						this.term(e, B.utils.clone(t))
					}, this), this;
					var n = t || {};
					return n.term = e.toString(), this.clause(n), this
				}, B.QueryParseError = function (e, t, n) {
					this.name = "QueryParseError", this.message = e, this.start = t, this.end = n
				}, B.QueryParseError.prototype = new Error, B.QueryLexer = function (e) {
					this.lexemes = [], this.str = e, this.length = e.length, this.pos = 0, this.start = 0, this.escapeCharPositions = []
				}, B.QueryLexer.prototype.run = function () {
					for (var e = B.QueryLexer.lexText; e;) e = e(this)
				}, B.QueryLexer.prototype.sliceString = function () {
					for (var e = [], t = this.start, n = this.pos, r = 0; r < this.escapeCharPositions.length; r++) n = this.escapeCharPositions[r], e.push(this.str.slice(t, n)), t = n + 1;
					return e.push(this.str.slice(t, this.pos)), this.escapeCharPositions.length = 0, e.join("")
				}, B.QueryLexer.prototype.emit = function (e) {
					this.lexemes.push({
						type: e,
						str: this.sliceString(),
						start: this.start,
						end: this.pos
					}), this.start = this.pos
				}, B.QueryLexer.prototype.escapeCharacter = function () {
					this.escapeCharPositions.push(this.pos - 1), this.pos += 1
				}, B.QueryLexer.prototype.next = function () {
					if (this.pos >= this.length) return B.QueryLexer.EOS;
					var e = this.str.charAt(this.pos);
					return this.pos += 1, e
				}, B.QueryLexer.prototype.width = function () {
					return this.pos - this.start
				}, B.QueryLexer.prototype.ignore = function () {
					this.start == this.pos && (this.pos += 1), this.start = this.pos
				}, B.QueryLexer.prototype.backup = function () {
					this.pos -= 1
				}, B.QueryLexer.prototype.acceptDigitRun = function () {
					for (var e, t; 47 < (t = (e = this.next()).charCodeAt(0)) && t < 58;);
					e != B.QueryLexer.EOS && this.backup()
				}, B.QueryLexer.prototype.more = function () {
					return this.pos < this.length
				}, B.QueryLexer.EOS = "EOS", B.QueryLexer.FIELD = "FIELD", B.QueryLexer.TERM = "TERM", B.QueryLexer.EDIT_DISTANCE = "EDIT_DISTANCE", B.QueryLexer.BOOST = "BOOST", B.QueryLexer.PRESENCE = "PRESENCE", B.QueryLexer.lexField = function (e) {
					return e.backup(), e.emit(B.QueryLexer.FIELD), e.ignore(), B.QueryLexer.lexText
				}, B.QueryLexer.lexTerm = function (e) {
					if (1 < e.width() && (e.backup(), e.emit(B.QueryLexer.TERM)), e.ignore(), e.more()) return B.QueryLexer.lexText
				}, B.QueryLexer.lexEditDistance = function (e) {
					return e.ignore(), e.acceptDigitRun(), e.emit(B.QueryLexer.EDIT_DISTANCE), B.QueryLexer.lexText
				}, B.QueryLexer.lexBoost = function (e) {
					return e.ignore(), e.acceptDigitRun(), e.emit(B.QueryLexer.BOOST), B.QueryLexer.lexText
				}, B.QueryLexer.lexEOS = function (e) {
					0 < e.width() && e.emit(B.QueryLexer.TERM)
				}, B.QueryLexer.termSeparator = B.tokenizer.separator, B.QueryLexer.lexText = function (e) {
					for (;;) {
						var t = e.next();
						if (t == B.QueryLexer.EOS) return B.QueryLexer.lexEOS;
						if (92 != t.charCodeAt(0)) {
							if (":" == t) return B.QueryLexer.lexField;
							if ("~" == t) return e.backup(), 0 < e.width() && e.emit(B.QueryLexer.TERM), B.QueryLexer.lexEditDistance;
							if ("^" == t) return e.backup(), 0 < e.width() && e.emit(B.QueryLexer.TERM), B.QueryLexer.lexBoost;
							if ("+" == t && 1 === e.width()) return e.emit(B.QueryLexer.PRESENCE), B.QueryLexer.lexText;
							if ("-" == t && 1 === e.width()) return e.emit(B.QueryLexer.PRESENCE), B.QueryLexer.lexText;
							if (t.match(B.QueryLexer.termSeparator)) return B.QueryLexer.lexTerm
						} else e.escapeCharacter()
					}
				}, B.QueryParser = function (e, t) {
					this.lexer = new B.QueryLexer(e), this.query = t, this.currentClause = {}, this.lexemeIdx = 0
				}, B.QueryParser.prototype.parse = function () {
					this.lexer.run(), this.lexemes = this.lexer.lexemes;
					for (var e = B.QueryParser.parseClause; e;) e = e(this);
					return this.query
				}, B.QueryParser.prototype.peekLexeme = function () {
					return this.lexemes[this.lexemeIdx]
				}, B.QueryParser.prototype.consumeLexeme = function () {
					var e = this.peekLexeme();
					return this.lexemeIdx += 1, e
				}, B.QueryParser.prototype.nextClause = function () {
					var e = this.currentClause;
					this.query.clause(e), this.currentClause = {}
				}, B.QueryParser.parseClause = function (e) {
					var t = e.peekLexeme();
					if (t != undefined) switch (t.type) {
					case B.QueryLexer.PRESENCE:
						return B.QueryParser.parsePresence;
					case B.QueryLexer.FIELD:
						return B.QueryParser.parseField;
					case B.QueryLexer.TERM:
						return B.QueryParser.parseTerm;
					default:
						var n = "expected either a field or a term, found " + t.type;
						throw 1 <= t.str.length && (n += " with value '" + t.str + "'"), new B.QueryParseError(n, t.start, t.end)
					}
				}, B.QueryParser.parsePresence = function (e) {
					var t = e.consumeLexeme();
					if (t != undefined) {
						switch (t.str) {
						case "-":
							e.currentClause.presence = B.Query.presence.PROHIBITED;
							break;
						case "+":
							e.currentClause.presence = B.Query.presence.REQUIRED;
							break;
						default:
							var n = "unrecognised presence operator'" + t.str + "'";
							throw new B.QueryParseError(n, t.start, t.end)
						}
						var r = e.peekLexeme();
						if (r == undefined) {
							n = "expecting term or field, found nothing";
							throw new B.QueryParseError(n, t.start, t.end)
						}
						switch (r.type) {
						case B.QueryLexer.FIELD:
							return B.QueryParser.parseField;
						case B.QueryLexer.TERM:
							return B.QueryParser.parseTerm;
						default:
							n = "expecting term or field, found '" + r.type + "'";
							throw new B.QueryParseError(n, r.start, r.end)
						}
					}
				}, B.QueryParser.parseField = function (e) {
					var t = e.consumeLexeme();
					if (t != undefined) {
						if (-1 == e.query.allFields.indexOf(t.str)) {
							var n = e.query.allFields.map(function (e) {
									return "'" + e + "'"
								}).join(", "),
								r = "unrecognised field '" + t.str + "', possible fields: " + n;
							throw new B.QueryParseError(r, t.start, t.end)
						}
						e.currentClause.fields = [t.str];
						var i = e.peekLexeme();
						if (i == undefined) {
							r = "expecting term, found nothing";
							throw new B.QueryParseError(r, t.start, t.end)
						}
						switch (i.type) {
						case B.QueryLexer.TERM:
							return B.QueryParser.parseTerm;
						default:
							r = "expecting term, found '" + i.type + "'";
							throw new B.QueryParseError(r, i.start, i.end)
						}
					}
				}, B.QueryParser.parseTerm = function (e) {
					var t = e.consumeLexeme();
					if (t != undefined) {
						e.currentClause.term = t.str.toLowerCase(), -1 != t.str.indexOf("*") && (e.currentClause.usePipeline = !1);
						var n = e.peekLexeme();
						if (n != undefined) switch (n.type) {
						case B.QueryLexer.TERM:
							return e.nextClause(), B.QueryParser.parseTerm;
						case B.QueryLexer.FIELD:
							return e.nextClause(), B.QueryParser.parseField;
						case B.QueryLexer.EDIT_DISTANCE:
							return B.QueryParser.parseEditDistance;
						case B.QueryLexer.BOOST:
							return B.QueryParser.parseBoost;
						case B.QueryLexer.PRESENCE:
							return e.nextClause(), B.QueryParser.parsePresence;
						default:
							var r = "Unexpected lexeme type '" + n.type + "'";
							throw new B.QueryParseError(r, n.start, n.end)
						} else e.nextClause()
					}
				}, B.QueryParser.parseEditDistance = function (e) {
					var t = e.consumeLexeme();
					if (t != undefined) {
						var n = parseInt(t.str, 10);
						if (isNaN(n)) {
							var r = "edit distance must be numeric";
							throw new B.QueryParseError(r, t.start, t.end)
						}
						e.currentClause.editDistance = n;
						var i = e.peekLexeme();
						if (i != undefined) switch (i.type) {
						case B.QueryLexer.TERM:
							return e.nextClause(), B.QueryParser.parseTerm;
						case B.QueryLexer.FIELD:
							return e.nextClause(), B.QueryParser.parseField;
						case B.QueryLexer.EDIT_DISTANCE:
							return B.QueryParser.parseEditDistance;
						case B.QueryLexer.BOOST:
							return B.QueryParser.parseBoost;
						case B.QueryLexer.PRESENCE:
							return e.nextClause(), B.QueryParser.parsePresence;
						default:
							r = "Unexpected lexeme type '" + i.type + "'";
							throw new B.QueryParseError(r, i.start, i.end)
						} else e.nextClause()
					}
				}, B.QueryParser.parseBoost = function (e) {
					var t = e.consumeLexeme();
					if (t != undefined) {
						var n = parseInt(t.str, 10);
						if (isNaN(n)) {
							var r = "boost must be numeric";
							throw new B.QueryParseError(r, t.start, t.end)
						}
						e.currentClause.boost = n;
						var i = e.peekLexeme();
						if (i != undefined) switch (i.type) {
						case B.QueryLexer.TERM:
							return e.nextClause(), B.QueryParser.parseTerm;
						case B.QueryLexer.FIELD:
							return e.nextClause(), B.QueryParser.parseField;
						case B.QueryLexer.EDIT_DISTANCE:
							return B.QueryParser.parseEditDistance;
						case B.QueryLexer.BOOST:
							return B.QueryParser.parseBoost;
						case B.QueryLexer.PRESENCE:
							return e.nextClause(), B.QueryParser.parsePresence;
						default:
							r = "Unexpected lexeme type '" + i.type + "'";
							throw new B.QueryParseError(r, i.start, i.end)
						} else e.nextClause()
					}
				}, r = function () {
					return B
				}, "function" == typeof undefined && undefined.amd ? undefined(r) : i.exports = r()
			}()
		});

	function O(e) {
		window.dataLayer = window.dataLayer || [], window.dataLayer.push(e)
	}

	function L(e) {
		return e = (e = e.replace(/\S*@\S*\s?/g, "[blocked]")).replace(/0|1|2|3|4|5|6|7|8|9/g, "[blocked]")
	}
	var C = null,
		I = null,
		j = null,
		N = "",
		P = function () {},
		A = [],
		M = null;

	function F(e) {
		this.$module = e
	}
	F.prototype.fetchSearchIndex = function (e, n) {
		var r = new XMLHttpRequest;
		r.open("GET", e, !0), r.timeout = 1e4, j = "Loading search index", r.onreadystatechange = function () {
			if (4 === r.readyState)
				if (200 === r.status) {
					var e = r.responseText,
						t = JSON.parse(e);
					j = "No results found", C = k.Index.load(t.index), I = t.store, n(t)
				} else j = "Failed to load the search index"
		}, r.send()
	}, F.prototype.renderResults = function () {
		if (!C || !I) return P(A);
		var e = C.query(function (e) {
			e.term(k.tokenizer(N), {
				wildcard: k.Query.wildcard.TRAILING
			})
		});
		A = e.map(function (e) {
			return I[e.ref]
		}), P(A)
	}, F.prototype.handleSearchQuery = function (e, t) {
		N = e, P = t, clearTimeout(M), M = setTimeout(function () {
			! function o(e, t) {
				if (!window.DO_NOT_TRACK_ENABLED) {
					var n = L(e),
						r = 0 < t.length,
						i = t.map(function (e, t) {
							return {
								name: e.title,
								category: e.section,
								list: n,
								position: t + 1
							}
						});
					O({
						event: "site-search",
						eventDetails: {
							category: "site search",
							action: r ? "results" : "no result",
							label: n
						},
						ecommerce: {
							impressions: i
						}
					})
				}
			}(N, A)
		}, function () {
			var e = window.__SITE_SEARCH_TRACKING_TIMEOUT;
			return void 0 !== e ? e : 2e3
		}()), this.renderResults()
	}, F.prototype.handleOnConfirm = function (e) {
		var t = e.path;
		t && (! function o(e, t, n) {
			if (!window.DO_NOT_TRACK_ENABLED) {
				var r = L(e),
					i = t.map(function (e, t) {
						return {
							name: e.title,
							category: e.section,
							list: r,
							position: t + 1
						}
					}).filter(function (e) {
						return e.name === n.title
					});
				O({
					event: "site-search",
					eventDetails: {
						category: "site search",
						action: "click",
						label: r + " | " + n.title
					},
					ecommerce: {
						click: {
							actionField: {
								list: r
							},
							products: i
						}
					}
				})
			}
		}(N, A, e), window.location.href = "/" + t)
	}, F.prototype.inputValueTemplate = function (e) {
		if (e) return e.title
	}, F.prototype.resultTemplate = function (e) {
		if (e) {
			var t = document.createElement("span"),
				n = e.title;
			if (t.textContent = n, e.aliases) {
				var r = e.aliases.split(",").map(function (e) {
						return e.trim()
					}),
					i = [];
				if (-1 === n.toLowerCase().indexOf(N) && (i = r.filter(function (e) {
						return -1 !== e.toLowerCase().indexOf(N.toLowerCase())
					})), 0 < i.length) {
					var o = document.createElement("span");
					o.className = "app-site-search__aliases", o.textContent = i.join(", "), t.appendChild(o)
				}
			}
			var a = document.createElement("span");
			return a.className = "app-site-search--section", a.innerHTML = e.section, t.appendChild(a), t.innerHTML
		}
	}, F.prototype.init = function () {
		var e = this.$module;
		if (e && ("querySelector" in document && "addEventListener" in window && !(!Array.prototype || !Array.prototype.forEach))) {
			_({
				element: e,
				id: "app-site-search__input",
				cssNamespace: "app-site-search",
				displayMenu: "overlay",
				placeholder: "Search Design System",
				confirmOnBlur: !1,
				autoselect: !0,
				source: this.handleSearchQuery.bind(this),
				onConfirm: this.handleOnConfirm,
				templates: {
					inputValue: this.inputValueTemplate,
					suggestion: this.resultTemplate
				},
				tNoResults: function () {
					return j
				}
			}), e.querySelector(".app-site-search__input").addEventListener("blur", function (e) {
				clearTimeout(M)
			});
			var t = e.getAttribute("data-search-index");
			this.fetchSearchIndex(t, function () {
				this.renderResults()
			}.bind(this))
		}
	};
	var R = {
			init: function () {
				R.expandMacroOptions()
			},
			expandMacroOptions: function () {
				var e = window.location.hash;
				if (e.match("^#options-")) {
					var t = e.split("#options-")[1],
						n = -1 < e.indexOf("--");
					if (n && (t = t.split("--")[0]), t) {
						var r = document.querySelector('a[href="#' + t + '-nunjucks"]'),
							i = r ? r.parentNode : null,
							o = document.getElementById("options-" + t + "-details");
						if (i && o) {
							var a = o.parentNode,
								s = o.querySelector(".govuk-details__summary"),
								u = o.querySelector(".govuk-details__text");
							s && u && (r.setAttribute("aria-expanded", !0), i.className += " app-tabs__item--current", a.classList.remove("app-tabs__container--hidden"), a.setAttribute("aria-hidden", !1), o.setAttribute("open", "open"), s.setAttribute("aria-expanded", !0), u.setAttribute("aria-hidden", !1), u.style.display = "", window.setTimeout(function () {
								r.focus(), n && document.querySelector(e).scrollIntoView()
							}, 0))
						}
					}
				}
			}
		},
		Q = i.nodeListForEach;
	o.addCookieMessage(), Q(document.querySelectorAll('[data-module="app-example-frame"]'), function (e) {
		new s(e).init()
	}), Q(document.querySelectorAll('[data-module="app-tabs"]'), function (e) {
		new y(e).init()
	}), R.init(), Q(document.querySelectorAll('[data-module="app-copy"]'), function (e) {
		new g(e).init()
	}), (new T).init(), new F(document.querySelector('[data-module="app-search"]')).init(), new r(document.querySelector('[data-module="app-back-to-top"]')).init()
}();
//# sourceMappingURL=application.js.map
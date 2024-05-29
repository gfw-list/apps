var qy = Object.defineProperty;
var Gy = (e, t, n) => t in e ? qy(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var _f = (e, t, n) => (Gy(e, typeof t != "symbol" ? t + "" : t, n), n);

function Yy(e, t) { for (var n = 0; n < t.length; n++) { const r = t[n]; if (typeof r != "string" && !Array.isArray(r)) { for (const o in r)
                if (o !== "default" && !(o in e)) { const i = Object.getOwnPropertyDescriptor(r, o);
                    i && Object.defineProperty(e, o, i.get ? i : { enumerable: !0, get: () => r[o] }) } } } return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })) }(function() { const t = document.createElement("link").relList; if (t && t.supports && t.supports("modulepreload")) return; for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
    new MutationObserver(o => { for (const i of o)
            if (i.type === "childList")
                for (const s of i.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s) }).observe(document, { childList: !0, subtree: !0 });

    function n(o) { const i = {}; return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i }

    function r(o) { if (o.ep) return;
        o.ep = !0; const i = n(o);
        fetch(o.href, i) } })();
const Jy = "modulepreload",
    Xy = function(e, t) { return new URL(e, t).href },
    kf = {},
    ct = function(t, n, r) { if (!n || n.length === 0) return t(); const o = document.getElementsByTagName("link"); return Promise.all(n.map(i => { if (i = Xy(i, r), i in kf) return;
            kf[i] = !0; const s = i.endsWith(".css"),
                a = s ? '[rel="stylesheet"]' : ""; if (!!r)
                for (let c = o.length - 1; c >= 0; c--) { const d = o[c]; if (d.href === i && (!s || d.rel === "stylesheet")) return } else if (document.querySelector(`link[href="${i}"]${a}`)) return; const u = document.createElement("link"); if (u.rel = s ? "stylesheet" : Jy, s || (u.as = "script", u.crossOrigin = ""), u.href = i, document.head.appendChild(u), s) return new Promise((c, d) => { u.addEventListener("load", c), u.addEventListener("error", () => d(new Error(`Unable to preload CSS for ${i}`))) }) })).then(() => t()).catch(i => { const s = new Event("vite:preloadError", { cancelable: !0 }); if (s.payload = i, window.dispatchEvent(s), !s.defaultPrevented) throw i }) };

function Gs(e) { return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e }

function Zy(e) { if (e.__esModule) return e; var t = e.default; if (typeof t == "function") { var n = function r() { return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments) };
        n.prototype = t.prototype } else n = {}; return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) { var o = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(n, r, o.get ? o : { enumerable: !0, get: function() { return e[r] } }) }), n }
var ch = { exports: {} },
    Ys = {},
    fh = { exports: {} },
    W = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bo = Symbol.for("react.element"),
    e0 = Symbol.for("react.portal"),
    t0 = Symbol.for("react.fragment"),
    n0 = Symbol.for("react.strict_mode"),
    r0 = Symbol.for("react.profiler"),
    o0 = Symbol.for("react.provider"),
    i0 = Symbol.for("react.context"),
    s0 = Symbol.for("react.forward_ref"),
    a0 = Symbol.for("react.suspense"),
    l0 = Symbol.for("react.memo"),
    u0 = Symbol.for("react.lazy"),
    Of = Symbol.iterator;

function c0(e) { return e === null || typeof e != "object" ? null : (e = Of && e[Of] || e["@@iterator"], typeof e == "function" ? e : null) }
var dh = { isMounted: function() { return !1 }, enqueueForceUpdate: function() {}, enqueueReplaceState: function() {}, enqueueSetState: function() {} },
    ph = Object.assign,
    hh = {};

function br(e, t, n) { this.props = e, this.context = t, this.refs = hh, this.updater = n || dh } br.prototype.isReactComponent = {};
br.prototype.setState = function(e, t) { if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState") };
br.prototype.forceUpdate = function(e) { this.updater.enqueueForceUpdate(this, e, "forceUpdate") };

function mh() {} mh.prototype = br.prototype;

function Ku(e, t, n) { this.props = e, this.context = t, this.refs = hh, this.updater = n || dh }
var qu = Ku.prototype = new mh;
qu.constructor = Ku;
ph(qu, br.prototype);
qu.isPureReactComponent = !0;
var Pf = Array.isArray,
    gh = Object.prototype.hasOwnProperty,
    Gu = { current: null },
    vh = { key: !0, ref: !0, __self: !0, __source: !0 };

function yh(e, t, n) { var r, o = {},
        i = null,
        s = null; if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) gh.call(t, r) && !vh.hasOwnProperty(r) && (o[r] = t[r]); var a = arguments.length - 2; if (a === 1) o.children = n;
    else if (1 < a) { for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
        o.children = l } if (e && e.defaultProps)
        for (r in a = e.defaultProps, a) o[r] === void 0 && (o[r] = a[r]); return { $$typeof: Bo, type: e, key: i, ref: s, props: o, _owner: Gu.current } }

function f0(e, t) { return { $$typeof: Bo, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner } }

function Yu(e) { return typeof e == "object" && e !== null && e.$$typeof === Bo }

function d0(e) { var t = { "=": "=0", ":": "=2" }; return "$" + e.replace(/[=:]/g, function(n) { return t[n] }) }
var bf = /\/+/g;

function ka(e, t) { return typeof e == "object" && e !== null && e.key != null ? d0("" + e.key) : t.toString(36) }

function Bi(e, t, n, r, o) { var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null); var s = !1; if (e === null) s = !0;
    else switch (i) {
        case "string":
        case "number":
            s = !0; break;
        case "object":
            switch (e.$$typeof) {
                case Bo:
                case e0:
                    s = !0 } }
    if (s) return s = e, o = o(s), e = r === "" ? "." + ka(s, 0) : r, Pf(o) ? (n = "", e != null && (n = e.replace(bf, "$&/") + "/"), Bi(o, t, n, "", function(u) { return u })) : o != null && (Yu(o) && (o = f0(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(bf, "$&/") + "/") + e)), t.push(o)), 1; if (s = 0, r = r === "" ? "." : r + ":", Pf(e))
        for (var a = 0; a < e.length; a++) { i = e[a]; var l = r + ka(i, a);
            s += Bi(i, t, n, l, o) } else if (l = c0(e), typeof l == "function")
            for (e = l.call(e), a = 0; !(i = e.next()).done;) i = i.value, l = r + ka(i, a++), s += Bi(i, t, n, l, o);
        else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."); return s }

function fi(e, t, n) { if (e == null) return e; var r = [],
        o = 0; return Bi(e, r, "", "", function(i) { return t.call(n, i, o++) }), r }

function p0(e) { if (e._status === -1) { var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n) }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n) }), e._status === -1 && (e._status = 0, e._result = t) } if (e._status === 1) return e._result.default; throw e._result }
var Pe = { current: null },
    Wi = { transition: null },
    h0 = { ReactCurrentDispatcher: Pe, ReactCurrentBatchConfig: Wi, ReactCurrentOwner: Gu };
W.Children = { map: fi, forEach: function(e, t, n) { fi(e, function() { t.apply(this, arguments) }, n) }, count: function(e) { var t = 0; return fi(e, function() { t++ }), t }, toArray: function(e) { return fi(e, function(t) { return t }) || [] }, only: function(e) { if (!Yu(e)) throw Error("React.Children.only expected to receive a single React element child."); return e } };
W.Component = br;
W.Fragment = t0;
W.Profiler = r0;
W.PureComponent = Ku;
W.StrictMode = n0;
W.Suspense = a0;
W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = h0;
W.cloneElement = function(e, t, n) { if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + "."); var r = ph({}, e.props),
        o = e.key,
        i = e.ref,
        s = e._owner; if (t != null) { if (t.ref !== void 0 && (i = t.ref, s = Gu.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps; for (l in t) gh.call(t, l) && !vh.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]) } var l = arguments.length - 2; if (l === 1) r.children = n;
    else if (1 < l) { a = Array(l); for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
        r.children = a } return { $$typeof: Bo, type: e.type, key: o, ref: i, props: r, _owner: s } };
W.createContext = function(e) { return e = { $$typeof: i0, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: o0, _context: e }, e.Consumer = e };
W.createElement = yh;
W.createFactory = function(e) { var t = yh.bind(null, e); return t.type = e, t };
W.createRef = function() { return { current: null } };
W.forwardRef = function(e) { return { $$typeof: s0, render: e } };
W.isValidElement = Yu;
W.lazy = function(e) { return { $$typeof: u0, _payload: { _status: -1, _result: e }, _init: p0 } };
W.memo = function(e, t) { return { $$typeof: l0, type: e, compare: t === void 0 ? null : t } };
W.startTransition = function(e) { var t = Wi.transition;
    Wi.transition = {}; try { e() } finally { Wi.transition = t } };
W.unstable_act = function() { throw Error("act(...) is not supported in production builds of React.") };
W.useCallback = function(e, t) { return Pe.current.useCallback(e, t) };
W.useContext = function(e) { return Pe.current.useContext(e) };
W.useDebugValue = function() {};
W.useDeferredValue = function(e) { return Pe.current.useDeferredValue(e) };
W.useEffect = function(e, t) { return Pe.current.useEffect(e, t) };
W.useId = function() { return Pe.current.useId() };
W.useImperativeHandle = function(e, t, n) { return Pe.current.useImperativeHandle(e, t, n) };
W.useInsertionEffect = function(e, t) { return Pe.current.useInsertionEffect(e, t) };
W.useLayoutEffect = function(e, t) { return Pe.current.useLayoutEffect(e, t) };
W.useMemo = function(e, t) { return Pe.current.useMemo(e, t) };
W.useReducer = function(e, t, n) { return Pe.current.useReducer(e, t, n) };
W.useRef = function(e) { return Pe.current.useRef(e) };
W.useState = function(e) { return Pe.current.useState(e) };
W.useSyncExternalStore = function(e, t, n) { return Pe.current.useSyncExternalStore(e, t, n) };
W.useTransition = function() { return Pe.current.useTransition() };
W.version = "18.2.0";
fh.exports = W;
var v = fh.exports;
const Q = Gs(v),
    dt = Yy({ __proto__: null, default: Q }, [v]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var m0 = v,
    g0 = Symbol.for("react.element"),
    v0 = Symbol.for("react.fragment"),
    y0 = Object.prototype.hasOwnProperty,
    w0 = m0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    S0 = { key: !0, ref: !0, __self: !0, __source: !0 };

function wh(e, t, n) { var r, o = {},
        i = null,
        s = null;
    n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref); for (r in t) y0.call(t, r) && !S0.hasOwnProperty(r) && (o[r] = t[r]); if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]); return { $$typeof: g0, type: e, key: i, ref: s, props: o, _owner: w0.current } } Ys.Fragment = v0;
Ys.jsx = wh;
Ys.jsxs = wh;
ch.exports = Ys;
var y = ch.exports;
const x0 = { type: "logger", log(e) { this.output("log", e) }, warn(e) { this.output("warn", e) }, error(e) { this.output("error", e) }, output(e, t) { console && console[e] && console[e].apply(console, t) } };
class os { constructor(t) { let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.init(t, n) } init(t) { let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.prefix = n.prefix || "i18next:", this.logger = t || x0, this.options = n, this.debug = n.debug } log() { for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]; return this.forward(n, "log", "", !0) } warn() { for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]; return this.forward(n, "warn", "", !0) } error() { for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]; return this.forward(n, "error", "") } deprecate() { for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]; return this.forward(n, "warn", "WARNING DEPRECATED: ", !0) } forward(t, n, r, o) { return o && !this.debug ? null : (typeof t[0] == "string" && (t[0] = `${r}${this.prefix} ${t[0]}`), this.logger[n](t)) } create(t) { return new os(this.logger, { prefix: `${this.prefix}:${t}:`, ...this.options }) } clone(t) { return t = t || this.options, t.prefix = t.prefix || this.prefix, new os(this.logger, t) } }
var xt = new os;
class Js { constructor() { this.observers = {} } on(t, n) { return t.split(" ").forEach(r => { this.observers[r] = this.observers[r] || [], this.observers[r].push(n) }), this } off(t, n) { if (this.observers[t]) { if (!n) { delete this.observers[t]; return } this.observers[t] = this.observers[t].filter(r => r !== n) } } emit(t) { for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
        this.observers[t] && [].concat(this.observers[t]).forEach(s => { s(...r) }), this.observers["*"] && [].concat(this.observers["*"]).forEach(s => { s.apply(s, [t, ...r]) }) } }

function Ar() { let e, t; const n = new Promise((r, o) => { e = r, t = o }); return n.resolve = e, n.reject = t, n }

function Rf(e) { return e == null ? "" : "" + e }

function E0(e, t, n) { e.forEach(r => { t[r] && (n[r] = t[r]) }) }

function Ju(e, t, n) {
    function r(s) { return s && s.indexOf("###") > -1 ? s.replace(/###/g, ".") : s }

    function o() { return !e || typeof e == "string" } const i = typeof t != "string" ? [].concat(t) : t.split("."); for (; i.length > 1;) { if (o()) return {}; const s = r(i.shift());!e[s] && n && (e[s] = new n), Object.prototype.hasOwnProperty.call(e, s) ? e = e[s] : e = {} } return o() ? {} : { obj: e, k: r(i.shift()) } }

function Lf(e, t, n) { const { obj: r, k: o } = Ju(e, t, Object);
    r[o] = n }

function C0(e, t, n, r) { const { obj: o, k: i } = Ju(e, t, Object);
    o[i] = o[i] || [], r && (o[i] = o[i].concat(n)), r || o[i].push(n) }

function is(e, t) { const { obj: n, k: r } = Ju(e, t); if (n) return n[r] }

function _0(e, t, n) { const r = is(e, n); return r !== void 0 ? r : is(t, n) }

function Sh(e, t, n) { for (const r in t) r !== "__proto__" && r !== "constructor" && (r in e ? typeof e[r] == "string" || e[r] instanceof String || typeof t[r] == "string" || t[r] instanceof String ? n && (e[r] = t[r]) : Sh(e[r], t[r], n) : e[r] = t[r]); return e }

function Vn(e) { return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") }
var k0 = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;" };

function O0(e) { return typeof e == "string" ? e.replace(/[&<>"'\/]/g, t => k0[t]) : e }
const P0 = [" ", ",", "?", "!", ";"];

function b0(e, t, n) { t = t || "", n = n || ""; const r = P0.filter(s => t.indexOf(s) < 0 && n.indexOf(s) < 0); if (r.length === 0) return !0; const o = new RegExp(`(${r.map(s=>s==="?"?"\\?":s).join("|")})`); let i = !o.test(e); if (!i) { const s = e.indexOf(n);
        s > 0 && !o.test(e.substring(0, s)) && (i = !0) } return i }

function ss(e, t) { let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "."; if (!e) return; if (e[t]) return e[t]; const r = t.split(n); let o = e; for (let i = 0; i < r.length; ++i) { if (!o || typeof o[r[i]] == "string" && i + 1 < r.length) return; if (o[r[i]] === void 0) { let s = 2,
                a = r.slice(i, i + s).join(n),
                l = o[a]; for (; l === void 0 && r.length > i + s;) s++, a = r.slice(i, i + s).join(n), l = o[a]; if (l === void 0) return; if (l === null) return null; if (t.endsWith(a)) { if (typeof l == "string") return l; if (a && typeof l[a] == "string") return l[a] } const u = r.slice(i + s).join(n); return u ? ss(l, u, n) : void 0 } o = o[r[i]] } return o }

function as(e) { return e && e.indexOf("_") > 0 ? e.replace("_", "-") : e } class Nf extends Js { constructor(t) { let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { ns: ["translation"], defaultNS: "translation" };
        super(), this.data = t || {}, this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0) } addNamespaces(t) { this.options.ns.indexOf(t) < 0 && this.options.ns.push(t) } removeNamespaces(t) { const n = this.options.ns.indexOf(t);
        n > -1 && this.options.ns.splice(n, 1) } getResource(t, n, r) { let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}; const i = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator,
            s = o.ignoreJSONStructure !== void 0 ? o.ignoreJSONStructure : this.options.ignoreJSONStructure; let a = [t, n];
        r && typeof r != "string" && (a = a.concat(r)), r && typeof r == "string" && (a = a.concat(i ? r.split(i) : r)), t.indexOf(".") > -1 && (a = t.split(".")); const l = is(this.data, a); return l || !s || typeof r != "string" ? l : ss(this.data && this.data[t] && this.data[t][n], r, i) } addResource(t, n, r, o) { let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : { silent: !1 }; const s = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator; let a = [t, n];
        r && (a = a.concat(s ? r.split(s) : r)), t.indexOf(".") > -1 && (a = t.split("."), o = n, n = a[1]), this.addNamespaces(n), Lf(this.data, a, o), i.silent || this.emit("added", t, n, r, o) } addResources(t, n, r) { let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : { silent: !1 }; for (const i in r)(typeof r[i] == "string" || Object.prototype.toString.apply(r[i]) === "[object Array]") && this.addResource(t, n, i, r[i], { silent: !0 });
        o.silent || this.emit("added", t, n, r) } addResourceBundle(t, n, r, o, i) { let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : { silent: !1 },
            a = [t, n];
        t.indexOf(".") > -1 && (a = t.split("."), o = r, r = n, n = a[1]), this.addNamespaces(n); let l = is(this.data, a) || {};
        o ? Sh(l, r, i) : l = { ...l, ...r }, Lf(this.data, a, l), s.silent || this.emit("added", t, n, r) } removeResourceBundle(t, n) { this.hasResourceBundle(t, n) && delete this.data[t][n], this.removeNamespaces(n), this.emit("removed", t, n) } hasResourceBundle(t, n) { return this.getResource(t, n) !== void 0 } getResourceBundle(t, n) { return n || (n = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? { ...this.getResource(t, n) } : this.getResource(t, n) } getDataByLanguage(t) { return this.data[t] } hasLanguageSomeTranslations(t) { const n = this.getDataByLanguage(t); return !!(n && Object.keys(n) || []).find(o => n[o] && Object.keys(n[o]).length > 0) } toJSON() { return this.data } }
var xh = { processors: {}, addPostProcessor(e) { this.processors[e.name] = e }, handle(e, t, n, r, o) { return e.forEach(i => { this.processors[i] && (t = this.processors[i].process(t, n, r, o)) }), t } };
const Tf = {};
class ls extends Js { constructor(t) { let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        super(), E0(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], t, this), this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = xt.create("translator") } changeLanguage(t) { t && (this.language = t) } exists(t) { let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { interpolation: {} }; if (t == null) return !1; const r = this.resolve(t, n); return r && r.res !== void 0 } extractFromKey(t, n) { let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
        r === void 0 && (r = ":"); const o = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator; let i = n.ns || this.options.defaultNS || []; const s = r && t.indexOf(r) > -1,
            a = !this.options.userDefinedKeySeparator && !n.keySeparator && !this.options.userDefinedNsSeparator && !n.nsSeparator && !b0(t, r, o); if (s && !a) { const l = t.match(this.interpolator.nestingRegexp); if (l && l.length > 0) return { key: t, namespaces: i }; const u = t.split(r);
            (r !== o || r === o && this.options.ns.indexOf(u[0]) > -1) && (i = u.shift()), t = u.join(o) } return typeof i == "string" && (i = [i]), { key: t, namespaces: i } } translate(t, n, r) { if (typeof n != "object" && this.options.overloadTranslationOptionHandler && (n = this.options.overloadTranslationOptionHandler(arguments)), typeof n == "object" && (n = { ...n }), n || (n = {}), t == null) return "";
        Array.isArray(t) || (t = [String(t)]); const o = n.returnDetails !== void 0 ? n.returnDetails : this.options.returnDetails,
            i = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator,
            { key: s, namespaces: a } = this.extractFromKey(t[t.length - 1], n),
            l = a[a.length - 1],
            u = n.lng || this.language,
            c = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode; if (u && u.toLowerCase() === "cimode") { if (c) { const E = n.nsSeparator || this.options.nsSeparator; return o ? { res: `${l}${E}${s}`, usedKey: s, exactUsedKey: s, usedLng: u, usedNS: l } : `${l}${E}${s}` } return o ? { res: s, usedKey: s, exactUsedKey: s, usedLng: u, usedNS: l } : s } const d = this.resolve(t, n); let f = d && d.res; const g = d && d.usedKey || s,
            w = d && d.exactUsedKey || s,
            S = Object.prototype.toString.apply(f),
            _ = ["[object Number]", "[object Function]", "[object RegExp]"],
            m = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays,
            p = !this.i18nFormat || this.i18nFormat.handleAsObject; if (p && f && (typeof f != "string" && typeof f != "boolean" && typeof f != "number") && _.indexOf(S) < 0 && !(typeof m == "string" && S === "[object Array]")) { if (!n.returnObjects && !this.options.returnObjects) { this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!"); const E = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(g, f, { ...n, ns: a }) : `key '${s} (${this.language})' returned an object instead of string.`; return o ? (d.res = E, d) : E } if (i) { const E = S === "[object Array]",
                    b = E ? [] : {},
                    P = E ? w : g; for (const O in f)
                    if (Object.prototype.hasOwnProperty.call(f, O)) { const x = `${P}${i}${O}`;
                        b[O] = this.translate(x, { ...n, joinArrays: !1, ns: a }), b[O] === x && (b[O] = f[O]) } f = b } } else if (p && typeof m == "string" && S === "[object Array]") f = f.join(m), f && (f = this.extendTranslation(f, t, n, r));
        else { let E = !1,
                b = !1; const P = n.count !== void 0 && typeof n.count != "string",
                O = ls.hasDefaultValue(n),
                x = P ? this.pluralResolver.getSuffix(u, n.count, n) : "",
                R = n.ordinal && P ? this.pluralResolver.getSuffix(u, n.count, { ordinal: !1 }) : "",
                L = n[`defaultValue${x}`] || n[`defaultValue${R}`] || n.defaultValue;!this.isValidLookup(f) && O && (E = !0, f = L), this.isValidLookup(f) || (b = !0, f = s); const A = (n.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && b ? void 0 : f,
                j = O && L !== f && this.options.updateMissing; if (b || E || j) { if (this.logger.log(j ? "updateKey" : "missingKey", u, l, s, j ? L : f), i) { const C = this.resolve(s, { ...n, keySeparator: !1 });
                    C && C.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.") } let N = []; const T = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language); if (this.options.saveMissingTo === "fallback" && T && T[0])
                    for (let C = 0; C < T.length; C++) N.push(T[C]);
                else this.options.saveMissingTo === "all" ? N = this.languageUtils.toResolveHierarchy(n.lng || this.language) : N.push(n.lng || this.language); const F = (C, k, M) => { const U = O && M !== f ? M : A;
                    this.options.missingKeyHandler ? this.options.missingKeyHandler(C, l, k, U, j, n) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(C, l, k, U, j, n), this.emit("missingKey", C, l, k, f) };
                this.options.saveMissing && (this.options.saveMissingPlurals && P ? N.forEach(C => { this.pluralResolver.getSuffixes(C, n).forEach(k => { F([C], s + k, n[`defaultValue${k}`] || L) }) }) : F(N, s, L)) } f = this.extendTranslation(f, t, n, d, r), b && f === s && this.options.appendNamespaceToMissingKey && (f = `${l}:${s}`), (b || E) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? f = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${l}:${s}` : s, E ? f : void 0) : f = this.options.parseMissingKeyHandler(f)) } return o ? (d.res = f, d) : f } extendTranslation(t, n, r, o, i) { var s = this; if (this.i18nFormat && this.i18nFormat.parse) t = this.i18nFormat.parse(t, { ...this.options.interpolation.defaultVariables, ...r }, r.lng || this.language || o.usedLng, o.usedNS, o.usedKey, { resolved: o });
        else if (!r.skipInterpolation) { r.interpolation && this.interpolator.init({ ...r, interpolation: { ...this.options.interpolation, ...r.interpolation } }); const u = typeof t == "string" && (r && r.interpolation && r.interpolation.skipOnVariables !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables); let c; if (u) { const f = t.match(this.interpolator.nestingRegexp);
                c = f && f.length } let d = r.replace && typeof r.replace != "string" ? r.replace : r; if (this.options.interpolation.defaultVariables && (d = { ...this.options.interpolation.defaultVariables, ...d }), t = this.interpolator.interpolate(t, d, r.lng || this.language, r), u) { const f = t.match(this.interpolator.nestingRegexp),
                    g = f && f.length;
                c < g && (r.nest = !1) }!r.lng && this.options.compatibilityAPI !== "v1" && o && o.res && (r.lng = o.usedLng), r.nest !== !1 && (t = this.interpolator.nest(t, function() { for (var f = arguments.length, g = new Array(f), w = 0; w < f; w++) g[w] = arguments[w]; return i && i[0] === g[0] && !r.context ? (s.logger.warn(`It seems you are nesting recursively key: ${g[0]} in key: ${n[0]}`), null) : s.translate(...g, n) }, r)), r.interpolation && this.interpolator.reset() } const a = r.postProcess || this.options.postProcess,
            l = typeof a == "string" ? [a] : a; return t != null && l && l.length && r.applyPostProcessor !== !1 && (t = xh.handle(l, t, n, this.options && this.options.postProcessPassResolved ? { i18nResolved: o, ...r } : r, this)), t } resolve(t) { let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            r, o, i, s, a; return typeof t == "string" && (t = [t]), t.forEach(l => { if (this.isValidLookup(r)) return; const u = this.extractFromKey(l, n),
                c = u.key;
            o = c; let d = u.namespaces;
            this.options.fallbackNS && (d = d.concat(this.options.fallbackNS)); const f = n.count !== void 0 && typeof n.count != "string",
                g = f && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi(),
                w = n.context !== void 0 && (typeof n.context == "string" || typeof n.context == "number") && n.context !== "",
                S = n.lngs ? n.lngs : this.languageUtils.toResolveHierarchy(n.lng || this.language, n.fallbackLng);
            d.forEach(_ => { this.isValidLookup(r) || (a = _, !Tf[`${S[0]}-${_}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(a) && (Tf[`${S[0]}-${_}`] = !0, this.logger.warn(`key "${o}" for languages "${S.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), S.forEach(m => { if (this.isValidLookup(r)) return;
                    s = m; const p = [c]; if (this.i18nFormat && this.i18nFormat.addLookupKeys) this.i18nFormat.addLookupKeys(p, c, m, _, n);
                    else { let E;
                        f && (E = this.pluralResolver.getSuffix(m, n.count, n)); const b = `${this.options.pluralSeparator}zero`,
                            P = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`; if (f && (p.push(c + E), n.ordinal && E.indexOf(P) === 0 && p.push(c + E.replace(P, this.options.pluralSeparator)), g && p.push(c + b)), w) { const O = `${c}${this.options.contextSeparator}${n.context}`;
                            p.push(O), f && (p.push(O + E), n.ordinal && E.indexOf(P) === 0 && p.push(O + E.replace(P, this.options.pluralSeparator)), g && p.push(O + b)) } } let h; for (; h = p.pop();) this.isValidLookup(r) || (i = h, r = this.getResource(m, _, h, n)) })) }) }), { res: r, usedKey: o, exactUsedKey: i, usedLng: s, usedNS: a } } isValidLookup(t) { return t !== void 0 && !(!this.options.returnNull && t === null) && !(!this.options.returnEmptyString && t === "") } getResource(t, n, r) { let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}; return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(t, n, r, o) : this.resourceStore.getResource(t, n, r, o) } static hasDefaultValue(t) { const n = "defaultValue"; for (const r in t)
            if (Object.prototype.hasOwnProperty.call(t, r) && n === r.substring(0, n.length) && t[r] !== void 0) return !0; return !1 } }

function Oa(e) { return e.charAt(0).toUpperCase() + e.slice(1) } class If { constructor(t) { this.options = t, this.supportedLngs = this.options.supportedLngs || !1, this.logger = xt.create("languageUtils") } getScriptPartFromCode(t) { if (t = as(t), !t || t.indexOf("-") < 0) return null; const n = t.split("-"); return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(n.join("-")) } getLanguagePartFromCode(t) { if (t = as(t), !t || t.indexOf("-") < 0) return t; const n = t.split("-"); return this.formatLanguageCode(n[0]) } formatLanguageCode(t) { if (typeof t == "string" && t.indexOf("-") > -1) { const n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"]; let r = t.split("-"); return this.options.lowerCaseLng ? r = r.map(o => o.toLowerCase()) : r.length === 2 ? (r[0] = r[0].toLowerCase(), r[1] = r[1].toUpperCase(), n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = Oa(r[1].toLowerCase()))) : r.length === 3 && (r[0] = r[0].toLowerCase(), r[1].length === 2 && (r[1] = r[1].toUpperCase()), r[0] !== "sgn" && r[2].length === 2 && (r[2] = r[2].toUpperCase()), n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = Oa(r[1].toLowerCase())), n.indexOf(r[2].toLowerCase()) > -1 && (r[2] = Oa(r[2].toLowerCase()))), r.join("-") } return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t } isSupportedCode(t) { return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (t = this.getLanguagePartFromCode(t)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(t) > -1 } getBestMatchFromCodes(t) { if (!t) return null; let n; return t.forEach(r => { if (n) return; const o = this.formatLanguageCode(r);
            (!this.options.supportedLngs || this.isSupportedCode(o)) && (n = o) }), !n && this.options.supportedLngs && t.forEach(r => { if (n) return; const o = this.getLanguagePartFromCode(r); if (this.isSupportedCode(o)) return n = o;
            n = this.options.supportedLngs.find(i => { if (i === o) return i; if (!(i.indexOf("-") < 0 && o.indexOf("-") < 0) && i.indexOf(o) === 0) return i }) }), n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]), n } getFallbackCodes(t, n) { if (!t) return []; if (typeof t == "function" && (t = t(n)), typeof t == "string" && (t = [t]), Object.prototype.toString.apply(t) === "[object Array]") return t; if (!n) return t.default || []; let r = t[n]; return r || (r = t[this.getScriptPartFromCode(n)]), r || (r = t[this.formatLanguageCode(n)]), r || (r = t[this.getLanguagePartFromCode(n)]), r || (r = t.default), r || [] } toResolveHierarchy(t, n) { const r = this.getFallbackCodes(n || this.options.fallbackLng || [], t),
            o = [],
            i = s => { s && (this.isSupportedCode(s) ? o.push(s) : this.logger.warn(`rejecting language code not found in supportedLngs: ${s}`)) }; return typeof t == "string" && (t.indexOf("-") > -1 || t.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && i(this.formatLanguageCode(t)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && i(this.getScriptPartFromCode(t)), this.options.load !== "currentOnly" && i(this.getLanguagePartFromCode(t))) : typeof t == "string" && i(this.formatLanguageCode(t)), r.forEach(s => { o.indexOf(s) < 0 && i(this.formatLanguageCode(s)) }), o } }
let R0 = [{ lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"], nr: [1, 2], fc: 1 }, { lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"], nr: [1, 2], fc: 2 }, { lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"], nr: [1], fc: 3 }, { lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"], nr: [1, 2, 5], fc: 4 }, { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 }, { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 }, { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 }, { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 }, { lngs: ["fr"], nr: [1, 2], fc: 9 }, { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 }, { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 }, { lngs: ["is"], nr: [1, 2], fc: 12 }, { lngs: ["jv"], nr: [0, 1], fc: 13 }, { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 }, { lngs: ["lt"], nr: [1, 2, 10], fc: 15 }, { lngs: ["lv"], nr: [1, 2, 0], fc: 16 }, { lngs: ["mk"], nr: [1, 2], fc: 17 }, { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 }, { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 }, { lngs: ["or"], nr: [2, 1], fc: 2 }, { lngs: ["ro"], nr: [1, 2, 20], fc: 20 }, { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 }, { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 }],
    L0 = { 1: function(e) { return +(e > 1) }, 2: function(e) { return +(e != 1) }, 3: function(e) { return 0 }, 4: function(e) { return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2 }, 5: function(e) { return e == 0 ? 0 : e == 1 ? 1 : e == 2 ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5 }, 6: function(e) { return e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2 }, 7: function(e) { return e == 1 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2 }, 8: function(e) { return e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3 }, 9: function(e) { return +(e >= 2) }, 10: function(e) { return e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4 }, 11: function(e) { return e == 1 || e == 11 ? 0 : e == 2 || e == 12 ? 1 : e > 2 && e < 20 ? 2 : 3 }, 12: function(e) { return +(e % 10 != 1 || e % 100 == 11) }, 13: function(e) { return +(e !== 0) }, 14: function(e) { return e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3 }, 15: function(e) { return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2 }, 16: function(e) { return e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2 }, 17: function(e) { return e == 1 || e % 10 == 1 && e % 100 != 11 ? 0 : 1 }, 18: function(e) { return e == 0 ? 0 : e == 1 ? 1 : 2 }, 19: function(e) { return e == 1 ? 0 : e == 0 || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3 }, 20: function(e) { return e == 1 ? 0 : e == 0 || e % 100 > 0 && e % 100 < 20 ? 1 : 2 }, 21: function(e) { return e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0 }, 22: function(e) { return e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3 } };
const N0 = ["v1", "v2", "v3"],
    T0 = ["v4"],
    Df = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };

function I0() { const e = {}; return R0.forEach(t => { t.lngs.forEach(n => { e[n] = { numbers: t.nr, plurals: L0[t.fc] } }) }), e } class D0 { constructor(t) { let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.languageUtils = t, this.options = n, this.logger = xt.create("pluralResolver"), (!this.options.compatibilityJSON || T0.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = I0() } addRule(t, n) { this.rules[t] = n } getRule(t) { let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}; if (this.shouldUseIntlApi()) try { return new Intl.PluralRules(as(t), { type: n.ordinal ? "ordinal" : "cardinal" }) } catch { return }
        return this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)] } needsPlural(t) { let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}; const r = this.getRule(t, n); return this.shouldUseIntlApi() ? r && r.resolvedOptions().pluralCategories.length > 1 : r && r.numbers.length > 1 } getPluralFormsOfKey(t, n) { let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}; return this.getSuffixes(t, r).map(o => `${n}${o}`) } getSuffixes(t) { let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}; const r = this.getRule(t, n); return r ? this.shouldUseIntlApi() ? r.resolvedOptions().pluralCategories.sort((o, i) => Df[o] - Df[i]).map(o => `${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${o}`) : r.numbers.map(o => this.getSuffix(t, o, n)) : [] } getSuffix(t, n) { let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}; const o = this.getRule(t, r); return o ? this.shouldUseIntlApi() ? `${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${o.select(n)}` : this.getSuffixRetroCompatible(o, n) : (this.logger.warn(`no plural rule found for: ${t}`), "") } getSuffixRetroCompatible(t, n) { const r = t.noAbs ? t.plurals(n) : t.plurals(Math.abs(n)); let o = t.numbers[r];
        this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 && (o === 2 ? o = "plural" : o === 1 && (o = "")); const i = () => this.options.prepend && o.toString() ? this.options.prepend + o.toString() : o.toString(); return this.options.compatibilityJSON === "v1" ? o === 1 ? "" : typeof o == "number" ? `_plural_${o.toString()}` : i() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 ? i() : this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString() } shouldUseIntlApi() { return !N0.includes(this.options.compatibilityJSON) } }

function Mf(e, t, n) { let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".",
        o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
        i = _0(e, t, n); return !i && o && typeof n == "string" && (i = ss(e, n, r), i === void 0 && (i = ss(t, n, r))), i } class M0 { constructor() { let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        this.logger = xt.create("interpolator"), this.options = t, this.format = t.interpolation && t.interpolation.format || (n => n), this.init(t) } init() { let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        t.interpolation || (t.interpolation = { escapeValue: !0 }); const n = t.interpolation;
        this.escape = n.escape !== void 0 ? n.escape : O0, this.escapeValue = n.escapeValue !== void 0 ? n.escapeValue : !0, this.useRawValueToEscape = n.useRawValueToEscape !== void 0 ? n.useRawValueToEscape : !1, this.prefix = n.prefix ? Vn(n.prefix) : n.prefixEscaped || "{{", this.suffix = n.suffix ? Vn(n.suffix) : n.suffixEscaped || "}}", this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ",", this.unescapePrefix = n.unescapeSuffix ? "" : n.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : n.unescapeSuffix || "", this.nestingPrefix = n.nestingPrefix ? Vn(n.nestingPrefix) : n.nestingPrefixEscaped || Vn("$t("), this.nestingSuffix = n.nestingSuffix ? Vn(n.nestingSuffix) : n.nestingSuffixEscaped || Vn(")"), this.nestingOptionsSeparator = n.nestingOptionsSeparator ? n.nestingOptionsSeparator : n.nestingOptionsSeparator || ",", this.maxReplaces = n.maxReplaces ? n.maxReplaces : 1e3, this.alwaysFormat = n.alwaysFormat !== void 0 ? n.alwaysFormat : !1, this.resetRegExp() } reset() { this.options && this.init(this.options) } resetRegExp() { const t = `${this.prefix}(.+?)${this.suffix}`;
        this.regexp = new RegExp(t, "g"); const n = `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`;
        this.regexpUnescape = new RegExp(n, "g"); const r = `${this.nestingPrefix}(.+?)${this.nestingSuffix}`;
        this.nestingRegexp = new RegExp(r, "g") } interpolate(t, n, r, o) { let i, s, a; const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

        function u(w) { return w.replace(/\$/g, "$$$$") } const c = w => { if (w.indexOf(this.formatSeparator) < 0) { const p = Mf(n, l, w, this.options.keySeparator, this.options.ignoreJSONStructure); return this.alwaysFormat ? this.format(p, void 0, r, { ...o, ...n, interpolationkey: w }) : p } const S = w.split(this.formatSeparator),
                _ = S.shift().trim(),
                m = S.join(this.formatSeparator).trim(); return this.format(Mf(n, l, _, this.options.keySeparator, this.options.ignoreJSONStructure), m, r, { ...o, ...n, interpolationkey: _ }) };
        this.resetRegExp(); const d = o && o.missingInterpolationHandler || this.options.missingInterpolationHandler,
            f = o && o.interpolation && o.interpolation.skipOnVariables !== void 0 ? o.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables; return [{ regex: this.regexpUnescape, safeValue: w => u(w) }, { regex: this.regexp, safeValue: w => this.escapeValue ? u(this.escape(w)) : u(w) }].forEach(w => { for (a = 0; i = w.regex.exec(t);) { const S = i[1].trim(); if (s = c(S), s === void 0)
                    if (typeof d == "function") { const m = d(t, i, o);
                        s = typeof m == "string" ? m : "" } else if (o && Object.prototype.hasOwnProperty.call(o, S)) s = "";
                else if (f) { s = i[0]; continue } else this.logger.warn(`missed to pass in variable ${S} for interpolating ${t}`), s = "";
                else typeof s != "string" && !this.useRawValueToEscape && (s = Rf(s)); const _ = w.safeValue(s); if (t = t.replace(i[0], _), f ? (w.regex.lastIndex += s.length, w.regex.lastIndex -= i[0].length) : w.regex.lastIndex = 0, a++, a >= this.maxReplaces) break } }), t } nest(t, n) { let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            o, i, s;

        function a(l, u) { const c = this.nestingOptionsSeparator; if (l.indexOf(c) < 0) return l; const d = l.split(new RegExp(`${c}[ ]*{`)); let f = `{${d[1]}`;
            l = d[0], f = this.interpolate(f, s); const g = f.match(/'/g),
                w = f.match(/"/g);
            (g && g.length % 2 === 0 && !w || w.length % 2 !== 0) && (f = f.replace(/'/g, '"')); try { s = JSON.parse(f), u && (s = { ...u, ...s }) } catch (S) { return this.logger.warn(`failed parsing options string in nesting for key ${l}`, S), `${l}${c}${f}` } return delete s.defaultValue, l } for (; o = this.nestingRegexp.exec(t);) { let l = [];
            s = { ...r }, s = s.replace && typeof s.replace != "string" ? s.replace : s, s.applyPostProcessor = !1, delete s.defaultValue; let u = !1; if (o[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(o[1])) { const c = o[1].split(this.formatSeparator).map(d => d.trim());
                o[1] = c.shift(), l = c, u = !0 } if (i = n(a.call(this, o[1].trim(), s), s), i && o[0] === t && typeof i != "string") return i;
            typeof i != "string" && (i = Rf(i)), i || (this.logger.warn(`missed to resolve ${o[1]} for nesting ${t}`), i = ""), u && (i = l.reduce((c, d) => this.format(c, d, r.lng, { ...r, interpolationkey: o[1].trim() }), i.trim())), t = t.replace(o[0], i), this.regexp.lastIndex = 0 } return t } }

function j0(e) { let t = e.toLowerCase().trim(); const n = {}; if (e.indexOf("(") > -1) { const r = e.split("(");
        t = r[0].toLowerCase().trim(); const o = r[1].substring(0, r[1].length - 1);
        t === "currency" && o.indexOf(":") < 0 ? n.currency || (n.currency = o.trim()) : t === "relativetime" && o.indexOf(":") < 0 ? n.range || (n.range = o.trim()) : o.split(";").forEach(s => { if (!s) return; const [a, ...l] = s.split(":"), u = l.join(":").trim().replace(/^'+|'+$/g, "");
            n[a.trim()] || (n[a.trim()] = u), u === "false" && (n[a.trim()] = !1), u === "true" && (n[a.trim()] = !0), isNaN(u) || (n[a.trim()] = parseInt(u, 10)) }) } return { formatName: t, formatOptions: n } }

function Hn(e) { const t = {}; return function(r, o, i) { const s = o + JSON.stringify(i); let a = t[s]; return a || (a = e(as(o), i), t[s] = a), a(r) } } class A0 { constructor() { let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        this.logger = xt.create("formatter"), this.options = t, this.formats = { number: Hn((n, r) => { const o = new Intl.NumberFormat(n, { ...r }); return i => o.format(i) }), currency: Hn((n, r) => { const o = new Intl.NumberFormat(n, { ...r, style: "currency" }); return i => o.format(i) }), datetime: Hn((n, r) => { const o = new Intl.DateTimeFormat(n, { ...r }); return i => o.format(i) }), relativetime: Hn((n, r) => { const o = new Intl.RelativeTimeFormat(n, { ...r }); return i => o.format(i, r.range || "day") }), list: Hn((n, r) => { const o = new Intl.ListFormat(n, { ...r }); return i => o.format(i) }) }, this.init(t) } init(t) { const r = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { interpolation: {} }).interpolation;
        this.formatSeparator = r.formatSeparator ? r.formatSeparator : r.formatSeparator || "," } add(t, n) { this.formats[t.toLowerCase().trim()] = n } addCached(t, n) { this.formats[t.toLowerCase().trim()] = Hn(n) } format(t, n, r) { let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}; return n.split(this.formatSeparator).reduce((a, l) => { const { formatName: u, formatOptions: c } = j0(l); if (this.formats[u]) { let d = a; try { const f = o && o.formatParams && o.formatParams[o.interpolationkey] || {},
                        g = f.locale || f.lng || o.locale || o.lng || r;
                    d = this.formats[u](a, g, { ...c, ...o, ...f }) } catch (f) { this.logger.warn(f) } return d } else this.logger.warn(`there was no format function for ${u}`); return a }, t) } }

function F0(e, t) { e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--) } class $0 extends Js { constructor(t, n, r) { let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        super(), this.backend = t, this.store = n, this.services = r, this.languageUtils = r.languageUtils, this.options = o, this.logger = xt.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = o.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5, this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(r, o.backend, o) } queueLoad(t, n, r, o) { const i = {},
            s = {},
            a = {},
            l = {}; return t.forEach(u => { let c = !0;
            n.forEach(d => { const f = `${u}|${d}`;!r.reload && this.store.hasResourceBundle(u, d) ? this.state[f] = 2 : this.state[f] < 0 || (this.state[f] === 1 ? s[f] === void 0 && (s[f] = !0) : (this.state[f] = 1, c = !1, s[f] === void 0 && (s[f] = !0), i[f] === void 0 && (i[f] = !0), l[d] === void 0 && (l[d] = !0))) }), c || (a[u] = !0) }), (Object.keys(i).length || Object.keys(s).length) && this.queue.push({ pending: s, pendingCount: Object.keys(s).length, loaded: {}, errors: [], callback: o }), { toLoad: Object.keys(i), pending: Object.keys(s), toLoadLanguages: Object.keys(a), toLoadNamespaces: Object.keys(l) } } loaded(t, n, r) { const o = t.split("|"),
            i = o[0],
            s = o[1];
        n && this.emit("failedLoading", i, s, n), r && this.store.addResourceBundle(i, s, r), this.state[t] = n ? -1 : 2; const a = {};
        this.queue.forEach(l => { C0(l.loaded, [i], s), F0(l, t), n && l.errors.push(n), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach(u => { a[u] || (a[u] = {}); const c = l.loaded[u];
                c.length && c.forEach(d => { a[u][d] === void 0 && (a[u][d] = !0) }) }), l.done = !0, l.errors.length ? l.callback(l.errors) : l.callback()) }), this.emit("loaded", a), this.queue = this.queue.filter(l => !l.done) } read(t, n, r) { let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
            i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout,
            s = arguments.length > 5 ? arguments[5] : void 0; if (!t.length) return s(null, {}); if (this.readingCalls >= this.maxParallelReads) { this.waitingReads.push({ lng: t, ns: n, fcName: r, tried: o, wait: i, callback: s }); return } this.readingCalls++; const a = (u, c) => { if (this.readingCalls--, this.waitingReads.length > 0) { const d = this.waitingReads.shift();
                    this.read(d.lng, d.ns, d.fcName, d.tried, d.wait, d.callback) } if (u && c && o < this.maxRetries) { setTimeout(() => { this.read.call(this, t, n, r, o + 1, i * 2, s) }, i); return } s(u, c) },
            l = this.backend[r].bind(this.backend); if (l.length === 2) { try { const u = l(t, n);
                u && typeof u.then == "function" ? u.then(c => a(null, c)).catch(a) : a(null, u) } catch (u) { a(u) } return } return l(t, n, a) } prepareLoading(t, n) { let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            o = arguments.length > 3 ? arguments[3] : void 0; if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), o && o();
        typeof t == "string" && (t = this.languageUtils.toResolveHierarchy(t)), typeof n == "string" && (n = [n]); const i = this.queueLoad(t, n, r, o); if (!i.toLoad.length) return i.pending.length || o(), null;
        i.toLoad.forEach(s => { this.loadOne(s) }) } load(t, n, r) { this.prepareLoading(t, n, {}, r) } reload(t, n, r) { this.prepareLoading(t, n, { reload: !0 }, r) } loadOne(t) { let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ""; const r = t.split("|"),
            o = r[0],
            i = r[1];
        this.read(o, i, "read", void 0, void 0, (s, a) => { s && this.logger.warn(`${n}loading namespace ${i} for language ${o} failed`, s), !s && a && this.logger.log(`${n}loaded namespace ${i} for language ${o}`, a), this.loaded(t, s, a) }) } saveMissing(t, n, r, o, i) { let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
            a = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {}; if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(n)) { this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"); return } if (!(r == null || r === "")) { if (this.backend && this.backend.create) { const l = { ...s, isUpdate: i },
                    u = this.backend.create.bind(this.backend); if (u.length < 6) try { let c;
                    u.length === 5 ? c = u(t, n, r, o, l) : c = u(t, n, r, o), c && typeof c.then == "function" ? c.then(d => a(null, d)).catch(a) : a(null, c) } catch (c) { a(c) } else u(t, n, r, o, a, l) }!t || !t[0] || this.store.addResource(t[0], n, r, o) } } }

function jf() { return { debug: !1, initImmediate: !0, ns: ["translation"], defaultNS: ["translation"], fallbackLng: ["dev"], fallbackNS: !1, supportedLngs: !1, nonExplicitSupportedLngs: !1, load: "all", preload: !1, simplifyPluralSuffix: !0, keySeparator: ".", nsSeparator: ":", pluralSeparator: "_", contextSeparator: "_", partialBundledLanguages: !1, saveMissing: !1, updateMissing: !1, saveMissingTo: "fallback", saveMissingPlurals: !0, missingKeyHandler: !1, missingInterpolationHandler: !1, postProcess: !1, postProcessPassResolved: !1, returnNull: !1, returnEmptyString: !0, returnObjects: !1, joinArrays: !1, returnedObjectHandler: !1, parseMissingKeyHandler: !1, appendNamespaceToMissingKey: !1, appendNamespaceToCIMode: !1, overloadTranslationOptionHandler: function(t) { let n = {}; if (typeof t[1] == "object" && (n = t[1]), typeof t[1] == "string" && (n.defaultValue = t[1]), typeof t[2] == "string" && (n.tDescription = t[2]), typeof t[2] == "object" || typeof t[3] == "object") { const r = t[3] || t[2];
                Object.keys(r).forEach(o => { n[o] = r[o] }) } return n }, interpolation: { escapeValue: !0, format: (e, t, n, r) => e, prefix: "{{", suffix: "}}", formatSeparator: ",", unescapePrefix: "-", nestingPrefix: "$t(", nestingSuffix: ")", nestingOptionsSeparator: ",", maxReplaces: 1e3, skipOnVariables: !0 } } }

function Af(e) { return typeof e.ns == "string" && (e.ns = [e.ns]), typeof e.fallbackLng == "string" && (e.fallbackLng = [e.fallbackLng]), typeof e.fallbackNS == "string" && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e }

function di() {}

function U0(e) { Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(n => { typeof e[n] == "function" && (e[n] = e[n].bind(e)) }) } class po extends Js { constructor() { let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            n = arguments.length > 1 ? arguments[1] : void 0; if (super(), this.options = Af(t), this.services = {}, this.logger = xt, this.modules = { external: [] }, U0(this), n && !this.isInitialized && !t.isClone) { if (!this.options.initImmediate) return this.init(t, n), this;
            setTimeout(() => { this.init(t, n) }, 0) } } init() { var t = this; let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            r = arguments.length > 1 ? arguments[1] : void 0;
        typeof n == "function" && (r = n, n = {}), !n.defaultNS && n.defaultNS !== !1 && n.ns && (typeof n.ns == "string" ? n.defaultNS = n.ns : n.ns.indexOf("translation") < 0 && (n.defaultNS = n.ns[0])); const o = jf();
        this.options = { ...o, ...this.options, ...Af(n) }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = { ...o.interpolation, ...this.options.interpolation }), n.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = n.keySeparator), n.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = n.nsSeparator);

        function i(c) { return c ? typeof c == "function" ? new c : c : null } if (!this.options.isClone) { this.modules.logger ? xt.init(i(this.modules.logger), this.options) : xt.init(null, this.options); let c;
            this.modules.formatter ? c = this.modules.formatter : typeof Intl < "u" && (c = A0); const d = new If(this.options);
            this.store = new Nf(this.options.resources, this.options); const f = this.services;
            f.logger = xt, f.resourceStore = this.store, f.languageUtils = d, f.pluralResolver = new D0(d, { prepend: this.options.pluralSeparator, compatibilityJSON: this.options.compatibilityJSON, simplifyPluralSuffix: this.options.simplifyPluralSuffix }), c && (!this.options.interpolation.format || this.options.interpolation.format === o.interpolation.format) && (f.formatter = i(c), f.formatter.init(f, this.options), this.options.interpolation.format = f.formatter.format.bind(f.formatter)), f.interpolator = new M0(this.options), f.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }, f.backendConnector = new $0(i(this.modules.backend), f.resourceStore, f, this.options), f.backendConnector.on("*", function(g) { for (var w = arguments.length, S = new Array(w > 1 ? w - 1 : 0), _ = 1; _ < w; _++) S[_ - 1] = arguments[_];
                t.emit(g, ...S) }), this.modules.languageDetector && (f.languageDetector = i(this.modules.languageDetector), f.languageDetector.init && f.languageDetector.init(f, this.options.detection, this.options)), this.modules.i18nFormat && (f.i18nFormat = i(this.modules.i18nFormat), f.i18nFormat.init && f.i18nFormat.init(this)), this.translator = new ls(this.services, this.options), this.translator.on("*", function(g) { for (var w = arguments.length, S = new Array(w > 1 ? w - 1 : 0), _ = 1; _ < w; _++) S[_ - 1] = arguments[_];
                t.emit(g, ...S) }), this.modules.external.forEach(g => { g.init && g.init(this) }) } if (this.format = this.options.interpolation.format, r || (r = di), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) { const c = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
            c.length > 0 && c[0] !== "dev" && (this.options.lng = c[0]) }!this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(c => { this[c] = function() { return t.store[c](...arguments) } }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(c => { this[c] = function() { return t.store[c](...arguments), t } }); const l = Ar(),
            u = () => { const c = (d, f) => { this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), l.resolve(f), r(d, f) }; if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized) return c(null, this.t.bind(this));
                this.changeLanguage(this.options.lng, c) }; return this.options.resources || !this.options.initImmediate ? u() : setTimeout(u, 0), l } loadResources(t) { let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : di; const o = typeof t == "string" ? t : this.language; if (typeof t == "function" && (r = t), !this.options.resources || this.options.partialBundledLanguages) { if (o && o.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return r(); const i = [],
                s = a => { if (!a || a === "cimode") return;
                    this.services.languageUtils.toResolveHierarchy(a).forEach(u => { u !== "cimode" && i.indexOf(u) < 0 && i.push(u) }) };
            o ? s(o) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l => s(l)), this.options.preload && this.options.preload.forEach(a => s(a)), this.services.backendConnector.load(i, this.options.ns, a => {!a && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), r(a) }) } else r(null) } reloadResources(t, n, r) { const o = Ar(); return t || (t = this.languages), n || (n = this.options.ns), r || (r = di), this.services.backendConnector.reload(t, n, i => { o.resolve(), r(i) }), o } use(t) { if (!t) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()"); if (!t.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()"); return t.type === "backend" && (this.modules.backend = t), (t.type === "logger" || t.log && t.warn && t.error) && (this.modules.logger = t), t.type === "languageDetector" && (this.modules.languageDetector = t), t.type === "i18nFormat" && (this.modules.i18nFormat = t), t.type === "postProcessor" && xh.addPostProcessor(t), t.type === "formatter" && (this.modules.formatter = t), t.type === "3rdParty" && this.modules.external.push(t), this } setResolvedLanguage(t) { if (!(!t || !this.languages) && !(["cimode", "dev"].indexOf(t) > -1))
            for (let n = 0; n < this.languages.length; n++) { const r = this.languages[n]; if (!(["cimode", "dev"].indexOf(r) > -1) && this.store.hasLanguageSomeTranslations(r)) { this.resolvedLanguage = r; break } } } changeLanguage(t, n) { var r = this;
        this.isLanguageChangingTo = t; const o = Ar();
        this.emit("languageChanging", t); const i = l => { this.language = l, this.languages = this.services.languageUtils.toResolveHierarchy(l), this.resolvedLanguage = void 0, this.setResolvedLanguage(l) },
            s = (l, u) => { u ? (i(u), this.translator.changeLanguage(u), this.isLanguageChangingTo = void 0, this.emit("languageChanged", u), this.logger.log("languageChanged", u)) : this.isLanguageChangingTo = void 0, o.resolve(function() { return r.t(...arguments) }), n && n(l, function() { return r.t(...arguments) }) },
            a = l => {!t && !l && this.services.languageDetector && (l = []); const u = typeof l == "string" ? l : this.services.languageUtils.getBestMatchFromCodes(l);
                u && (this.language || i(u), this.translator.language || this.translator.changeLanguage(u), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(u)), this.loadResources(u, c => { s(c, u) }) }; return !t && this.services.languageDetector && !this.services.languageDetector.async ? a(this.services.languageDetector.detect()) : !t && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(a) : this.services.languageDetector.detect(a) : a(t), o } getFixedT(t, n, r) { var o = this; const i = function(s, a) { let l; if (typeof a != "object") { for (var u = arguments.length, c = new Array(u > 2 ? u - 2 : 0), d = 2; d < u; d++) c[d - 2] = arguments[d];
                l = o.options.overloadTranslationOptionHandler([s, a].concat(c)) } else l = { ...a };
            l.lng = l.lng || i.lng, l.lngs = l.lngs || i.lngs, l.ns = l.ns || i.ns, l.keyPrefix = l.keyPrefix || r || i.keyPrefix; const f = o.options.keySeparator || "."; let g; return l.keyPrefix && Array.isArray(s) ? g = s.map(w => `${l.keyPrefix}${f}${w}`) : g = l.keyPrefix ? `${l.keyPrefix}${f}${s}` : s, o.t(g, l) }; return typeof t == "string" ? i.lng = t : i.lngs = t, i.ns = n, i.keyPrefix = r, i } t() { return this.translator && this.translator.translate(...arguments) } exists() { return this.translator && this.translator.exists(...arguments) } setDefaultNamespace(t) { this.options.defaultNS = t } hasLoadedNamespace(t) { let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}; if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1; if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1; const r = n.lng || this.resolvedLanguage || this.languages[0],
            o = this.options ? this.options.fallbackLng : !1,
            i = this.languages[this.languages.length - 1]; if (r.toLowerCase() === "cimode") return !0; const s = (a, l) => { const u = this.services.backendConnector.state[`${a}|${l}`]; return u === -1 || u === 2 }; if (n.precheck) { const a = n.precheck(this, s); if (a !== void 0) return a } return !!(this.hasResourceBundle(r, t) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || s(r, t) && (!o || s(i, t))) } loadNamespaces(t, n) { const r = Ar(); return this.options.ns ? (typeof t == "string" && (t = [t]), t.forEach(o => { this.options.ns.indexOf(o) < 0 && this.options.ns.push(o) }), this.loadResources(o => { r.resolve(), n && n(o) }), r) : (n && n(), Promise.resolve()) } loadLanguages(t, n) { const r = Ar();
        typeof t == "string" && (t = [t]); const o = this.options.preload || [],
            i = t.filter(s => o.indexOf(s) < 0); return i.length ? (this.options.preload = o.concat(i), this.loadResources(s => { r.resolve(), n && n(s) }), r) : (n && n(), Promise.resolve()) } dir(t) { if (t || (t = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !t) return "rtl"; const n = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"],
            r = this.services && this.services.languageUtils || new If(jf()); return n.indexOf(r.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr" } static createInstance() { let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            n = arguments.length > 1 ? arguments[1] : void 0; return new po(t, n) } cloneInstance() { let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : di; const r = t.forkResourceStore;
        r && delete t.forkResourceStore; const o = { ...this.options, ...t, isClone: !0 },
            i = new po(o); return (t.debug !== void 0 || t.prefix !== void 0) && (i.logger = i.logger.clone(t)), ["store", "services", "language"].forEach(a => { i[a] = this[a] }), i.services = { ...this.services }, i.services.utils = { hasLoadedNamespace: i.hasLoadedNamespace.bind(i) }, r && (i.store = new Nf(this.store.data, o), i.services.resourceStore = i.store), i.translator = new ls(i.services, o), i.translator.on("*", function(a) { for (var l = arguments.length, u = new Array(l > 1 ? l - 1 : 0), c = 1; c < l; c++) u[c - 1] = arguments[c];
            i.emit(a, ...u) }), i.init(o, n), i.translator.options = o, i.translator.backendConnector.services.utils = { hasLoadedNamespace: i.hasLoadedNamespace.bind(i) }, i } toJSON() { return { options: this.options, store: this.store, language: this.language, languages: this.languages, resolvedLanguage: this.resolvedLanguage } } }
const _e = po.createInstance();
_e.createInstance = po.createInstance;
_e.createInstance;
_e.dir;
_e.init;
_e.loadResources;
_e.reloadResources;
_e.use;
_e.changeLanguage;
_e.getFixedT;
_e.t;
_e.exists;
_e.setDefaultNamespace;
_e.hasLoadedNamespace;
_e.loadNamespaces;
_e.loadLanguages;

function z0(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

function ho(e) { "@babel/helpers - typeof"; return ho = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) { return typeof t } : function(t) { return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, ho(e) }

function B0(e, t) { if (ho(e) !== "object" || e === null) return e; var n = e[Symbol.toPrimitive]; if (n !== void 0) { var r = n.call(e, t || "default"); if (ho(r) !== "object") return r; throw new TypeError("@@toPrimitive must return a primitive value.") } return (t === "string" ? String : Number)(e) }

function W0(e) { var t = B0(e, "string"); return ho(t) === "symbol" ? t : String(t) }

function Ff(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, W0(r.key), r) } }

function V0(e, t, n) { return t && Ff(e.prototype, t), n && Ff(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e }
var Eh = [],
    H0 = Eh.forEach,
    Q0 = Eh.slice;

function K0(e) { return H0.call(Q0.call(arguments, 1), function(t) { if (t)
            for (var n in t) e[n] === void 0 && (e[n] = t[n]) }), e }
var $f = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
    q0 = function(t, n, r) { var o = r || {};
        o.path = o.path || "/"; var i = encodeURIComponent(n),
            s = "".concat(t, "=").concat(i); if (o.maxAge > 0) { var a = o.maxAge - 0; if (Number.isNaN(a)) throw new Error("maxAge should be a Number");
            s += "; Max-Age=".concat(Math.floor(a)) } if (o.domain) { if (!$f.test(o.domain)) throw new TypeError("option domain is invalid");
            s += "; Domain=".concat(o.domain) } if (o.path) { if (!$f.test(o.path)) throw new TypeError("option path is invalid");
            s += "; Path=".concat(o.path) } if (o.expires) { if (typeof o.expires.toUTCString != "function") throw new TypeError("option expires is invalid");
            s += "; Expires=".concat(o.expires.toUTCString()) } if (o.httpOnly && (s += "; HttpOnly"), o.secure && (s += "; Secure"), o.sameSite) { var l = typeof o.sameSite == "string" ? o.sameSite.toLowerCase() : o.sameSite; switch (l) {
                case !0:
                    s += "; SameSite=Strict"; break;
                case "lax":
                    s += "; SameSite=Lax"; break;
                case "strict":
                    s += "; SameSite=Strict"; break;
                case "none":
                    s += "; SameSite=None"; break;
                default:
                    throw new TypeError("option sameSite is invalid") } } return s },
    Uf = { create: function(t, n, r, o) { var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : { path: "/", sameSite: "strict" };
            r && (i.expires = new Date, i.expires.setTime(i.expires.getTime() + r * 60 * 1e3)), o && (i.domain = o), document.cookie = q0(t, encodeURIComponent(n), i) }, read: function(t) { for (var n = "".concat(t, "="), r = document.cookie.split(";"), o = 0; o < r.length; o++) { for (var i = r[o]; i.charAt(0) === " ";) i = i.substring(1, i.length); if (i.indexOf(n) === 0) return i.substring(n.length, i.length) } return null }, remove: function(t) { this.create(t, "", -1) } },
    G0 = { name: "cookie", lookup: function(t) { var n; if (t.lookupCookie && typeof document < "u") { var r = Uf.read(t.lookupCookie);
                r && (n = r) } return n }, cacheUserLanguage: function(t, n) { n.lookupCookie && typeof document < "u" && Uf.create(n.lookupCookie, t, n.cookieMinutes, n.cookieDomain, n.cookieOptions) } },
    Y0 = { name: "querystring", lookup: function(t) { var n; if (typeof window < "u") { var r = window.location.search;!window.location.search && window.location.hash && window.location.hash.indexOf("?") > -1 && (r = window.location.hash.substring(window.location.hash.indexOf("?"))); for (var o = r.substring(1), i = o.split("&"), s = 0; s < i.length; s++) { var a = i[s].indexOf("="); if (a > 0) { var l = i[s].substring(0, a);
                        l === t.lookupQuerystring && (n = i[s].substring(a + 1)) } } } return n } },
    Fr = null,
    zf = function() { if (Fr !== null) return Fr; try { Fr = window !== "undefined" && window.localStorage !== null; var t = "i18next.translate.boo";
            window.localStorage.setItem(t, "foo"), window.localStorage.removeItem(t) } catch { Fr = !1 } return Fr },
    J0 = { name: "localStorage", lookup: function(t) { var n; if (t.lookupLocalStorage && zf()) { var r = window.localStorage.getItem(t.lookupLocalStorage);
                r && (n = r) } return n }, cacheUserLanguage: function(t, n) { n.lookupLocalStorage && zf() && window.localStorage.setItem(n.lookupLocalStorage, t) } },
    $r = null,
    Bf = function() { if ($r !== null) return $r; try { $r = window !== "undefined" && window.sessionStorage !== null; var t = "i18next.translate.boo";
            window.sessionStorage.setItem(t, "foo"), window.sessionStorage.removeItem(t) } catch { $r = !1 } return $r },
    X0 = { name: "sessionStorage", lookup: function(t) { var n; if (t.lookupSessionStorage && Bf()) { var r = window.sessionStorage.getItem(t.lookupSessionStorage);
                r && (n = r) } return n }, cacheUserLanguage: function(t, n) { n.lookupSessionStorage && Bf() && window.sessionStorage.setItem(n.lookupSessionStorage, t) } },
    Z0 = { name: "navigator", lookup: function(t) { var n = []; if (typeof navigator < "u") { if (navigator.languages)
                    for (var r = 0; r < navigator.languages.length; r++) n.push(navigator.languages[r]);
                navigator.userLanguage && n.push(navigator.userLanguage), navigator.language && n.push(navigator.language) } return n.length > 0 ? n : void 0 } },
    e1 = { name: "htmlTag", lookup: function(t) { var n, r = t.htmlTag || (typeof document < "u" ? document.documentElement : null); return r && typeof r.getAttribute == "function" && (n = r.getAttribute("lang")), n } },
    t1 = { name: "path", lookup: function(t) { var n; if (typeof window < "u") { var r = window.location.pathname.match(/\/([a-zA-Z-]*)/g); if (r instanceof Array)
                    if (typeof t.lookupFromPathIndex == "number") { if (typeof r[t.lookupFromPathIndex] != "string") return;
                        n = r[t.lookupFromPathIndex].replace("/", "") } else n = r[0].replace("/", "") } return n } },
    n1 = { name: "subdomain", lookup: function(t) { var n = typeof t.lookupFromSubdomainIndex == "number" ? t.lookupFromSubdomainIndex + 1 : 1,
                r = typeof window < "u" && window.location && window.location.hostname && window.location.hostname.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i); if (r) return r[n] } };

function r1() { return { order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"], lookupQuerystring: "lng", lookupCookie: "i18next", lookupLocalStorage: "i18nextLng", lookupSessionStorage: "i18nextLng", caches: ["localStorage"], excludeCacheFor: ["cimode"], convertDetectedLanguage: function(t) { return t } } }
var Ch = function() {
    function e(t) { var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        z0(this, e), this.type = "languageDetector", this.detectors = {}, this.init(t, n) } return V0(e, [{ key: "init", value: function(n) { var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            this.services = n || { languageUtils: {} }, this.options = K0(r, this.options || {}, r1()), typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = function(i) { return i.replace("-", "_") }), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = o, this.addDetector(G0), this.addDetector(Y0), this.addDetector(J0), this.addDetector(X0), this.addDetector(Z0), this.addDetector(e1), this.addDetector(t1), this.addDetector(n1) } }, { key: "addDetector", value: function(n) { this.detectors[n.name] = n } }, { key: "detect", value: function(n) { var r = this;
            n || (n = this.options.order); var o = []; return n.forEach(function(i) { if (r.detectors[i]) { var s = r.detectors[i].lookup(r.options);
                    s && typeof s == "string" && (s = [s]), s && (o = o.concat(s)) } }), o = o.map(function(i) { return r.options.convertDetectedLanguage(i) }), this.services.languageUtils.getBestMatchFromCodes ? o : o.length > 0 ? o[0] : null } }, { key: "cacheUserLanguage", value: function(n, r) { var o = this;
            r || (r = this.options.caches), r && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(n) > -1 || r.forEach(function(i) { o.detectors[i] && o.detectors[i].cacheUserLanguage(n, o.options) })) } }]), e }();
Ch.type = "languageDetector";

function o1() { if (console && console.warn) { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        typeof t[0] == "string" && (t[0] = `react-i18next:: ${t[0]}`), console.warn(...t) } }
const Wf = {};

function pl() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    typeof t[0] == "string" && Wf[t[0]] || (typeof t[0] == "string" && (Wf[t[0]] = new Date), o1(...t)) }
const _h = (e, t) => () => { if (e.isInitialized) t();
    else { const n = () => { setTimeout(() => { e.off("initialized", n) }, 0), t() };
        e.on("initialized", n) } };

function Vf(e, t, n) { e.loadNamespaces(t, _h(e, n)) }

function Hf(e, t, n, r) { typeof n == "string" && (n = [n]), n.forEach(o => { e.options.ns.indexOf(o) < 0 && e.options.ns.push(o) }), e.loadLanguages(t, _h(e, r)) }

function i1(e, t) { let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}; const r = t.languages[0],
        o = t.options ? t.options.fallbackLng : !1,
        i = t.languages[t.languages.length - 1]; if (r.toLowerCase() === "cimode") return !0; const s = (a, l) => { const u = t.services.backendConnector.state[`${a}|${l}`]; return u === -1 || u === 2 }; return n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !s(t.isLanguageChangingTo, e) ? !1 : !!(t.hasResourceBundle(r, e) || !t.services.backendConnector.backend || t.options.resources && !t.options.partialBundledLanguages || s(r, e) && (!o || s(i, e))) }

function s1(e, t) { let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}; return !t.languages || !t.languages.length ? (pl("i18n.languages were undefined or empty", t.languages), !0) : t.options.ignoreJSONStructure !== void 0 ? t.hasLoadedNamespace(e, { lng: n.lng, precheck: (o, i) => { if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && o.services.backendConnector.backend && o.isLanguageChangingTo && !i(o.isLanguageChangingTo, e)) return !1 } }) : i1(e, t, n) }
const a1 = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
    l1 = { "&amp;": "&", "&#38;": "&", "&lt;": "<", "&#60;": "<", "&gt;": ">", "&#62;": ">", "&apos;": "'", "&#39;": "'", "&quot;": '"', "&#34;": '"', "&nbsp;": " ", "&#160;": " ", "&copy;": "©", "&#169;": "©", "&reg;": "®", "&#174;": "®", "&hellip;": "…", "&#8230;": "…", "&#x2F;": "/", "&#47;": "/" },
    u1 = e => l1[e],
    c1 = e => e.replace(a1, u1);
let hl = { bindI18n: "languageChanged", bindI18nStore: "", transEmptyNodeValue: "", transSupportBasicHtmlNodes: !0, transWrapTextNodes: "", transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"], useSuspense: !0, unescape: c1 };

function f1() { let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    hl = { ...hl, ...e } }

function d1() { return hl }
let kh;

function p1(e) { kh = e }

function h1() { return kh }
const m1 = { type: "3rdParty", init(e) { f1(e.options.react), p1(e) } },
    g1 = v.createContext();
class v1 { constructor() { this.usedNamespaces = {} } addUsedNamespaces(t) { t.forEach(n => { this.usedNamespaces[n] || (this.usedNamespaces[n] = !0) }) } getUsedNamespaces() { return Object.keys(this.usedNamespaces) } }
const y1 = (e, t) => { const n = v.useRef(); return v.useEffect(() => { n.current = t ? n.current : e }, [e, t]), n.current };

function Rr(e) { let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}; const { i18n: n } = t, { i18n: r, defaultNS: o } = v.useContext(g1) || {}, i = n || r || h1(); if (i && !i.reportNamespaces && (i.reportNamespaces = new v1), !i) { pl("You will need to pass in an i18next instance by using initReactI18next"); const h = (b, P) => typeof P == "string" ? P : P && typeof P == "object" && typeof P.defaultValue == "string" ? P.defaultValue : Array.isArray(b) ? b[b.length - 1] : b,
            E = [h, {}, !1]; return E.t = h, E.i18n = {}, E.ready = !1, E } i.options.react && i.options.react.wait !== void 0 && pl("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour."); const s = { ...d1(), ...i.options.react, ...t },
        { useSuspense: a, keyPrefix: l } = s; let u = e || o || i.options && i.options.defaultNS;
    u = typeof u == "string" ? [u] : u || ["translation"], i.reportNamespaces.addUsedNamespaces && i.reportNamespaces.addUsedNamespaces(u); const c = (i.isInitialized || i.initializedStoreOnce) && u.every(h => s1(h, i, s));

    function d() { return i.getFixedT(t.lng || null, s.nsMode === "fallback" ? u : u[0], l) } const [f, g] = v.useState(d); let w = u.join();
    t.lng && (w = `${t.lng}${w}`); const S = y1(w),
        _ = v.useRef(!0);
    v.useEffect(() => { const { bindI18n: h, bindI18nStore: E } = s;
        _.current = !0, !c && !a && (t.lng ? Hf(i, t.lng, u, () => { _.current && g(d) }) : Vf(i, u, () => { _.current && g(d) })), c && S && S !== w && _.current && g(d);

        function b() { _.current && g(d) } return h && i && i.on(h, b), E && i && i.store.on(E, b), () => { _.current = !1, h && i && h.split(" ").forEach(P => i.off(P, b)), E && i && E.split(" ").forEach(P => i.store.off(P, b)) } }, [i, w]); const m = v.useRef(!0);
    v.useEffect(() => { _.current && !m.current && g(d), m.current = !1 }, [i, l]); const p = [f, i, c]; if (p.t = f, p.i18n = i, p.ready = c, c || !c && !a) return p; throw new Promise(h => { t.lng ? Hf(i, t.lng, u, () => h()) : Vf(i, u, () => h()) }) }
const w1 = { type: "backend", read: (e, t, n) => { let r; switch (e) {
            case "zh":
            case "zh-CN":
                r = ct(() => import("./zh-578cb107.js"), [],
                    import.meta.url); break;
            case "en":
            default:
                r = ct(() => import("./en-4cb316d3.js"), [],
                    import.meta.url); break } r ? r.then(o => n(null, o.data), o => n(o, null)) : n(new Error(`unable to load translation file for language ${e}`), null) } };
_e.use(m1).use(Ch).use(w1).init({ debug: !1, fallbackLng: "en", interpolation: { escapeValue: !1 } });
const S1 = "" + new URL("inter-latin-400-normal-0364d368.woff2",
        import.meta.url).href,
    x1 = "" + new URL("inter-latin-800-normal-a51ac27d.woff2",
        import.meta.url).href,
    E1 = "" + new URL("roboto-mono-latin-400-normal-7295944e.woff2",
        import.meta.url).href,
    Oh = "" + new URL("TwemojiCountryFlags-9f04f144.woff2",
        import.meta.url).href;
var Ph = { exports: {} },
    Be = {},
    bh = { exports: {} },
    Rh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(k, M) { var U = k.length;
        k.push(M);
        e: for (; 0 < U;) { var B = U - 1 >>> 1,
                q = k[B]; if (0 < o(q, M)) k[B] = M, k[U] = q, U = B;
            else break e } }

    function n(k) { return k.length === 0 ? null : k[0] }

    function r(k) { if (k.length === 0) return null; var M = k[0],
            U = k.pop(); if (U !== M) { k[0] = U;
            e: for (var B = 0, q = k.length, Re = q >>> 1; B < Re;) { var Le = 2 * (B + 1) - 1,
                    gn = k[Le],
                    Ze = Le + 1,
                    H = k[Ze]; if (0 > o(gn, U)) Ze < q && 0 > o(H, gn) ? (k[B] = H, k[Ze] = U, B = Ze) : (k[B] = gn, k[Le] = U, B = Le);
                else if (Ze < q && 0 > o(H, U)) k[B] = H, k[Ze] = U, B = Ze;
                else break e } } return M }

    function o(k, M) { var U = k.sortIndex - M.sortIndex; return U !== 0 ? U : k.id - M.id } if (typeof performance == "object" && typeof performance.now == "function") { var i = performance;
        e.unstable_now = function() { return i.now() } } else { var s = Date,
            a = s.now();
        e.unstable_now = function() { return s.now() - a } } var l = [],
        u = [],
        c = 1,
        d = null,
        f = 3,
        g = !1,
        w = !1,
        S = !1,
        _ = typeof setTimeout == "function" ? setTimeout : null,
        m = typeof clearTimeout == "function" ? clearTimeout : null,
        p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function h(k) { for (var M = n(u); M !== null;) { if (M.callback === null) r(u);
            else if (M.startTime <= k) r(u), M.sortIndex = M.expirationTime, t(l, M);
            else break;
            M = n(u) } }

    function E(k) { if (S = !1, h(k), !w)
            if (n(l) !== null) w = !0, F(b);
            else { var M = n(u);
                M !== null && C(E, M.startTime - k) } }

    function b(k, M) { w = !1, S && (S = !1, m(x), x = -1), g = !0; var U = f; try { for (h(M), d = n(l); d !== null && (!(d.expirationTime > M) || k && !D());) { var B = d.callback; if (typeof B == "function") { d.callback = null, f = d.priorityLevel; var q = B(d.expirationTime <= M);
                    M = e.unstable_now(), typeof q == "function" ? d.callback = q : d === n(l) && r(l), h(M) } else r(l);
                d = n(l) } if (d !== null) var Re = !0;
            else { var Le = n(u);
                Le !== null && C(E, Le.startTime - M), Re = !1 } return Re } finally { d = null, f = U, g = !1 } } var P = !1,
        O = null,
        x = -1,
        R = 5,
        L = -1;

    function D() { return !(e.unstable_now() - L < R) }

    function A() { if (O !== null) { var k = e.unstable_now();
            L = k; var M = !0; try { M = O(!0, k) } finally { M ? j() : (P = !1, O = null) } } else P = !1 } var j; if (typeof p == "function") j = function() { p(A) };
    else if (typeof MessageChannel < "u") { var N = new MessageChannel,
            T = N.port2;
        N.port1.onmessage = A, j = function() { T.postMessage(null) } } else j = function() { _(A, 0) };

    function F(k) { O = k, P || (P = !0, j()) }

    function C(k, M) { x = _(function() { k(e.unstable_now()) }, M) } e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(k) { k.callback = null }, e.unstable_continueExecution = function() { w || g || (w = !0, F(b)) }, e.unstable_forceFrameRate = function(k) { 0 > k || 125 < k ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : R = 0 < k ? Math.floor(1e3 / k) : 5 }, e.unstable_getCurrentPriorityLevel = function() { return f }, e.unstable_getFirstCallbackNode = function() { return n(l) }, e.unstable_next = function(k) { switch (f) {
            case 1:
            case 2:
            case 3:
                var M = 3; break;
            default:
                M = f } var U = f;
        f = M; try { return k() } finally { f = U } }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(k, M) { switch (k) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                k = 3 } var U = f;
        f = k; try { return M() } finally { f = U } }, e.unstable_scheduleCallback = function(k, M, U) { var B = e.unstable_now(); switch (typeof U == "object" && U !== null ? (U = U.delay, U = typeof U == "number" && 0 < U ? B + U : B) : U = B, k) {
            case 1:
                var q = -1; break;
            case 2:
                q = 250; break;
            case 5:
                q = 1073741823; break;
            case 4:
                q = 1e4; break;
            default:
                q = 5e3 } return q = U + q, k = { id: c++, callback: M, priorityLevel: k, startTime: U, expirationTime: q, sortIndex: -1 }, U > B ? (k.sortIndex = U, t(u, k), n(l) === null && k === n(u) && (S ? (m(x), x = -1) : S = !0, C(E, U - B))) : (k.sortIndex = q, t(l, k), w || g || (w = !0, F(b))), k }, e.unstable_shouldYield = D, e.unstable_wrapCallback = function(k) { var M = f; return function() { var U = f;
            f = M; try { return k.apply(this, arguments) } finally { f = U } } } })(Rh);
bh.exports = Rh;
var C1 = bh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lh = v,
    $e = C1;

function I(e) { for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]); return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings." }
var Nh = new Set,
    mo = {};

function Fn(e, t) { gr(e, t), gr(e + "Capture", t) }

function gr(e, t) { for (mo[e] = t, e = 0; e < t.length; e++) Nh.add(t[e]) }
var Nt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    ml = Object.prototype.hasOwnProperty,
    _1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Qf = {},
    Kf = {};

function k1(e) { return ml.call(Kf, e) ? !0 : ml.call(Qf, e) ? !1 : _1.test(e) ? Kf[e] = !0 : (Qf[e] = !0, !1) }

function O1(e, t, n, r) { if (n !== null && n.type === 0) return !1; switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1 } }

function P1(e, t, n, r) { if (t === null || typeof t > "u" || O1(e, t, n, r)) return !0; if (r) return !1; if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t }
    return !1 }

function be(e, t, n, r, o, i, s) { this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s }
var ve = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) { ve[e] = new be(e, 0, !1, e, null, !1, !1) });
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) { var t = e[0];
    ve[t] = new be(t, 1, !1, e[1], null, !1, !1) });
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) { ve[e] = new be(e, 2, !1, e.toLowerCase(), null, !1, !1) });
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) { ve[e] = new be(e, 2, !1, e, null, !1, !1) });
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) { ve[e] = new be(e, 3, !1, e.toLowerCase(), null, !1, !1) });
["checked", "multiple", "muted", "selected"].forEach(function(e) { ve[e] = new be(e, 3, !0, e, null, !1, !1) });
["capture", "download"].forEach(function(e) { ve[e] = new be(e, 4, !1, e, null, !1, !1) });
["cols", "rows", "size", "span"].forEach(function(e) { ve[e] = new be(e, 6, !1, e, null, !1, !1) });
["rowSpan", "start"].forEach(function(e) { ve[e] = new be(e, 5, !1, e.toLowerCase(), null, !1, !1) });
var Xu = /[\-:]([a-z])/g;

function Zu(e) { return e[1].toUpperCase() }
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) { var t = e.replace(Xu, Zu);
    ve[t] = new be(t, 1, !1, e, null, !1, !1) });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) { var t = e.replace(Xu, Zu);
    ve[t] = new be(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1) });
["xml:base", "xml:lang", "xml:space"].forEach(function(e) { var t = e.replace(Xu, Zu);
    ve[t] = new be(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1) });
["tabIndex", "crossOrigin"].forEach(function(e) { ve[e] = new be(e, 1, !1, e.toLowerCase(), null, !1, !1) });
ve.xlinkHref = new be("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) { ve[e] = new be(e, 1, !1, e.toLowerCase(), null, !0, !0) });

function ec(e, t, n, r) { var o = ve.hasOwnProperty(t) ? ve[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (P1(t, n, o, r) && (n = null), r || o === null ? k1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n)))) }
var jt = Lh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    pi = Symbol.for("react.element"),
    Kn = Symbol.for("react.portal"),
    qn = Symbol.for("react.fragment"),
    tc = Symbol.for("react.strict_mode"),
    gl = Symbol.for("react.profiler"),
    Th = Symbol.for("react.provider"),
    Ih = Symbol.for("react.context"),
    nc = Symbol.for("react.forward_ref"),
    vl = Symbol.for("react.suspense"),
    yl = Symbol.for("react.suspense_list"),
    rc = Symbol.for("react.memo"),
    zt = Symbol.for("react.lazy"),
    Dh = Symbol.for("react.offscreen"),
    qf = Symbol.iterator;

function Ur(e) { return e === null || typeof e != "object" ? null : (e = qf && e[qf] || e["@@iterator"], typeof e == "function" ? e : null) }
var re = Object.assign,
    Pa;

function Gr(e) { if (Pa === void 0) try { throw Error() } catch (n) { var t = n.stack.trim().match(/\n( *(at )?)/);
        Pa = t && t[1] || "" }
    return `
` + Pa + e }
var ba = !1;

function Ra(e, t) { if (!e || ba) return "";
    ba = !0; var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0; try { if (t)
            if (t = function() { throw Error() }, Object.defineProperty(t.prototype, "props", { set: function() { throw Error() } }), typeof Reflect == "object" && Reflect.construct) { try { Reflect.construct(t, []) } catch (u) { var r = u } Reflect.construct(e, [], t) } else { try { t.call() } catch (u) { r = u } e.call(t.prototype) } else { try { throw Error() } catch (u) { r = u } e() } } catch (u) { if (u && r && typeof u.stack == "string") { for (var o = u.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, a = i.length - 1; 1 <= s && 0 <= a && o[s] !== i[a];) a--; for (; 1 <= s && 0 <= a; s--, a--)
                if (o[s] !== i[a]) { if (s !== 1 || a !== 1)
                        do
                            if (s--, a--, 0 > a || o[s] !== i[a]) { var l = `
` + o[s].replace(" at new ", " at "); return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l } while (1 <= s && 0 <= a); break } } } finally { ba = !1, Error.prepareStackTrace = n } return (e = e ? e.displayName || e.name : "") ? Gr(e) : "" }

function b1(e) { switch (e.tag) {
        case 5:
            return Gr(e.type);
        case 16:
            return Gr("Lazy");
        case 13:
            return Gr("Suspense");
        case 19:
            return Gr("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Ra(e.type, !1), e;
        case 11:
            return e = Ra(e.type.render, !1), e;
        case 1:
            return e = Ra(e.type, !0), e;
        default:
            return "" } }

function wl(e) { if (e == null) return null; if (typeof e == "function") return e.displayName || e.name || null; if (typeof e == "string") return e; switch (e) {
        case qn:
            return "Fragment";
        case Kn:
            return "Portal";
        case gl:
            return "Profiler";
        case tc:
            return "StrictMode";
        case vl:
            return "Suspense";
        case yl:
            return "SuspenseList" } if (typeof e == "object") switch (e.$$typeof) {
        case Ih:
            return (e.displayName || "Context") + ".Consumer";
        case Th:
            return (e._context.displayName || "Context") + ".Provider";
        case nc:
            var t = e.render; return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case rc:
            return t = e.displayName || null, t !== null ? t : wl(e.type) || "Memo";
        case zt:
            t = e._payload, e = e._init; try { return wl(e(t)) } catch {} }
    return null }

function R1(e) { var t = e.type; switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return wl(t);
        case 8:
            return t === tc ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null; if (typeof t == "string") return t } return null }

function un(e) { switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return "" } }

function Mh(e) { var t = e.type; return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio") }

function L1(e) { var t = Mh(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t]; if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") { var o = n.get,
            i = n.set; return Object.defineProperty(e, t, { configurable: !0, get: function() { return o.call(this) }, set: function(s) { r = "" + s, i.call(this, s) } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() { return r }, setValue: function(s) { r = "" + s }, stopTracking: function() { e._valueTracker = null, delete e[t] } } } }

function hi(e) { e._valueTracker || (e._valueTracker = L1(e)) }

function jh(e) { if (!e) return !1; var t = e._valueTracker; if (!t) return !0; var n = t.getValue(),
        r = ""; return e && (r = Mh(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1 }

function us(e) { if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null; try { return e.activeElement || e.body } catch { return e.body } }

function Sl(e, t) { var n = t.checked; return re({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ? ? e._wrapperState.initialChecked }) }

function Gf(e, t) { var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = un(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null } }

function Ah(e, t) { t = t.checked, t != null && ec(e, "checked", t, !1) }

function xl(e, t) { Ah(e, t); var n = un(t.value),
        r = t.type; if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") { e.removeAttribute("value"); return } t.hasOwnProperty("value") ? El(e, t.type, n) : t.hasOwnProperty("defaultValue") && El(e, t.type, un(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked) }

function Yf(e, t, n) { if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) { var r = t.type; if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t } n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n) }

function El(e, t, n) {
    (t !== "number" || us(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n)) }
var Yr = Array.isArray;

function ur(e, t, n, r) { if (e = e.options, t) { t = {}; for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0; for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0) } else { for (n = "" + un(n), t = null, o = 0; o < e.length; o++) { if (e[o].value === n) { e[o].selected = !0, r && (e[o].defaultSelected = !0); return } t !== null || e[o].disabled || (t = e[o]) } t !== null && (t.selected = !0) } }

function Cl(e, t) { if (t.dangerouslySetInnerHTML != null) throw Error(I(91)); return re({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue }) }

function Jf(e, t) { var n = t.value; if (n == null) { if (n = t.children, t = t.defaultValue, n != null) { if (t != null) throw Error(I(92)); if (Yr(n)) { if (1 < n.length) throw Error(I(93));
                n = n[0] } t = n } t == null && (t = ""), n = t } e._wrapperState = { initialValue: un(n) } }

function Fh(e, t) { var n = un(t.value),
        r = un(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r) }

function Xf(e) { var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t) }

function $h(e) { switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml" } }

function _l(e, t) { return e == null || e === "http://www.w3.org/1999/xhtml" ? $h(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e }
var mi, Uh = function(e) { return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) { MSApp.execUnsafeLocalFunction(function() { return e(t, n, r, o) }) } : e }(function(e, t) { if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else { for (mi = mi || document.createElement("div"), mi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = mi.firstChild; e.firstChild;) e.removeChild(e.firstChild); for (; t.firstChild;) e.appendChild(t.firstChild) } });

function go(e, t) { if (t) { var n = e.firstChild; if (n && n === e.lastChild && n.nodeType === 3) { n.nodeValue = t; return } } e.textContent = t }
var to = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 },
    N1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(to).forEach(function(e) { N1.forEach(function(t) { t = t + e.charAt(0).toUpperCase() + e.substring(1), to[t] = to[e] }) });

function zh(e, t, n) { return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || to.hasOwnProperty(e) && to[e] ? ("" + t).trim() : t + "px" }

function Bh(e, t) { e = e.style; for (var n in t)
        if (t.hasOwnProperty(n)) { var r = n.indexOf("--") === 0,
                o = zh(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o } }
var T1 = re({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });

function kl(e, t) { if (t) { if (T1[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(I(137, e)); if (t.dangerouslySetInnerHTML != null) { if (t.children != null) throw Error(I(60)); if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(I(61)) } if (t.style != null && typeof t.style != "object") throw Error(I(62)) } }

function Ol(e, t) { if (e.indexOf("-") === -1) return typeof t.is == "string"; switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0 } }
var Pl = null;

function oc(e) { return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e }
var bl = null,
    cr = null,
    fr = null;

function Zf(e) { if (e = Ho(e)) { if (typeof bl != "function") throw Error(I(280)); var t = e.stateNode;
        t && (t = na(t), bl(e.stateNode, e.type, t)) } }

function Wh(e) { cr ? fr ? fr.push(e) : fr = [e] : cr = e }

function Vh() { if (cr) { var e = cr,
            t = fr; if (fr = cr = null, Zf(e), t)
            for (e = 0; e < t.length; e++) Zf(t[e]) } }

function Hh(e, t) { return e(t) }

function Qh() {}
var La = !1;

function Kh(e, t, n) { if (La) return e(t, n);
    La = !0; try { return Hh(e, t, n) } finally { La = !1, (cr !== null || fr !== null) && (Qh(), Vh()) } }

function vo(e, t) { var n = e.stateNode; if (n === null) return null; var r = na(n); if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r; break e;
        default:
            e = !1 }
    if (e) return null; if (n && typeof n != "function") throw Error(I(231, t, typeof n)); return n }
var Rl = !1;
if (Nt) try { var zr = {};
    Object.defineProperty(zr, "passive", { get: function() { Rl = !0 } }), window.addEventListener("test", zr, zr), window.removeEventListener("test", zr, zr) } catch { Rl = !1 }

function I1(e, t, n, r, o, i, s, a, l) { var u = Array.prototype.slice.call(arguments, 3); try { t.apply(n, u) } catch (c) { this.onError(c) } }
var no = !1,
    cs = null,
    fs = !1,
    Ll = null,
    D1 = { onError: function(e) { no = !0, cs = e } };

function M1(e, t, n, r, o, i, s, a, l) { no = !1, cs = null, I1.apply(D1, arguments) }

function j1(e, t, n, r, o, i, s, a, l) { if (M1.apply(this, arguments), no) { if (no) { var u = cs;
            no = !1, cs = null } else throw Error(I(198));
        fs || (fs = !0, Ll = u) } }

function $n(e) { var t = e,
        n = e; if (e.alternate)
        for (; t.return;) t = t.return;
    else { e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e) } return t.tag === 3 ? n : null }

function qh(e) { if (e.tag === 13) { var t = e.memoizedState; if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated } return null }

function ed(e) { if ($n(e) !== e) throw Error(I(188)) }

function A1(e) { var t = e.alternate; if (!t) { if (t = $n(e), t === null) throw Error(I(188)); return t !== e ? null : e } for (var n = e, r = t;;) { var o = n.return; if (o === null) break; var i = o.alternate; if (i === null) { if (r = o.return, r !== null) { n = r; continue } break } if (o.child === i.child) { for (i = o.child; i;) { if (i === n) return ed(o), e; if (i === r) return ed(o), t;
                i = i.sibling } throw Error(I(188)) } if (n.return !== r.return) n = o, r = i;
        else { for (var s = !1, a = o.child; a;) { if (a === n) { s = !0, n = o, r = i; break } if (a === r) { s = !0, r = o, n = i; break } a = a.sibling } if (!s) { for (a = i.child; a;) { if (a === n) { s = !0, n = i, r = o; break } if (a === r) { s = !0, r = i, n = o; break } a = a.sibling } if (!s) throw Error(I(189)) } } if (n.alternate !== r) throw Error(I(190)) } if (n.tag !== 3) throw Error(I(188)); return n.stateNode.current === n ? e : t }

function Gh(e) { return e = A1(e), e !== null ? Yh(e) : null }

function Yh(e) { if (e.tag === 5 || e.tag === 6) return e; for (e = e.child; e !== null;) { var t = Yh(e); if (t !== null) return t;
        e = e.sibling } return null }
var Jh = $e.unstable_scheduleCallback,
    td = $e.unstable_cancelCallback,
    F1 = $e.unstable_shouldYield,
    $1 = $e.unstable_requestPaint,
    se = $e.unstable_now,
    U1 = $e.unstable_getCurrentPriorityLevel,
    ic = $e.unstable_ImmediatePriority,
    Xh = $e.unstable_UserBlockingPriority,
    ds = $e.unstable_NormalPriority,
    z1 = $e.unstable_LowPriority,
    Zh = $e.unstable_IdlePriority,
    Xs = null,
    Et = null;

function B1(e) { if (Et && typeof Et.onCommitFiberRoot == "function") try { Et.onCommitFiberRoot(Xs, e, void 0, (e.current.flags & 128) === 128) } catch {} }
var at = Math.clz32 ? Math.clz32 : H1,
    W1 = Math.log,
    V1 = Math.LN2;

function H1(e) { return e >>>= 0, e === 0 ? 32 : 31 - (W1(e) / V1 | 0) | 0 }
var gi = 64,
    vi = 4194304;

function Jr(e) { switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e } }

function ps(e, t) { var n = e.pendingLanes; if (n === 0) return 0; var r = 0,
        o = e.suspendedLanes,
        i = e.pingedLanes,
        s = n & 268435455; if (s !== 0) { var a = s & ~o;
        a !== 0 ? r = Jr(a) : (i &= s, i !== 0 && (r = Jr(i))) } else s = n & ~o, s !== 0 ? r = Jr(s) : i !== 0 && (r = Jr(i)); if (r === 0) return 0; if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t; if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - at(t), o = 1 << n, r |= e[n], t &= ~o; return r }

function Q1(e, t) { switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1 } }

function K1(e, t) { for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i;) { var s = 31 - at(i),
            a = 1 << s,
            l = o[s];
        l === -1 ? (!(a & n) || a & r) && (o[s] = Q1(a, t)) : l <= t && (e.expiredLanes |= a), i &= ~a } }

function Nl(e) { return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0 }

function em() { var e = gi; return gi <<= 1, !(gi & 4194240) && (gi = 64), e }

function Na(e) { for (var t = [], n = 0; 31 > n; n++) t.push(e); return t }

function Wo(e, t, n) { e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - at(t), e[t] = n }

function q1(e, t) { var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements; var r = e.eventTimes; for (e = e.expirationTimes; 0 < n;) { var o = 31 - at(n),
            i = 1 << o;
        t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i } }

function sc(e, t) { var n = e.entangledLanes |= t; for (e = e.entanglements; n;) { var r = 31 - at(n),
            o = 1 << r;
        o & t | e[r] & t && (e[r] |= t), n &= ~o } }
var K = 0;

function tm(e) { return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1 }
var nm, ac, rm, om, im, Tl = !1,
    yi = [],
    Xt = null,
    Zt = null,
    en = null,
    yo = new Map,
    wo = new Map,
    Vt = [],
    G1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function nd(e, t) { switch (e) {
        case "focusin":
        case "focusout":
            Xt = null; break;
        case "dragenter":
        case "dragleave":
            Zt = null; break;
        case "mouseover":
        case "mouseout":
            en = null; break;
        case "pointerover":
        case "pointerout":
            yo.delete(t.pointerId); break;
        case "gotpointercapture":
        case "lostpointercapture":
            wo.delete(t.pointerId) } }

function Br(e, t, n, r, o, i) { return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Ho(t), t !== null && ac(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e) }

function Y1(e, t, n, r, o) { switch (t) {
        case "focusin":
            return Xt = Br(Xt, e, t, n, r, o), !0;
        case "dragenter":
            return Zt = Br(Zt, e, t, n, r, o), !0;
        case "mouseover":
            return en = Br(en, e, t, n, r, o), !0;
        case "pointerover":
            var i = o.pointerId; return yo.set(i, Br(yo.get(i) || null, e, t, n, r, o)), !0;
        case "gotpointercapture":
            return i = o.pointerId, wo.set(i, Br(wo.get(i) || null, e, t, n, r, o)), !0 } return !1 }

function sm(e) { var t = En(e.target); if (t !== null) { var n = $n(t); if (n !== null) { if (t = n.tag, t === 13) { if (t = qh(n), t !== null) { e.blockedOn = t, im(e.priority, function() { rm(n) }); return } } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) { e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null; return } } } e.blockedOn = null }

function Vi(e) { if (e.blockedOn !== null) return !1; for (var t = e.targetContainers; 0 < t.length;) { var n = Il(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent); if (n === null) { n = e.nativeEvent; var r = new n.constructor(n.type, n);
            Pl = r, n.target.dispatchEvent(r), Pl = null } else return t = Ho(n), t !== null && ac(t), e.blockedOn = n, !1;
        t.shift() } return !0 }

function rd(e, t, n) { Vi(e) && n.delete(t) }

function J1() { Tl = !1, Xt !== null && Vi(Xt) && (Xt = null), Zt !== null && Vi(Zt) && (Zt = null), en !== null && Vi(en) && (en = null), yo.forEach(rd), wo.forEach(rd) }

function Wr(e, t) { e.blockedOn === t && (e.blockedOn = null, Tl || (Tl = !0, $e.unstable_scheduleCallback($e.unstable_NormalPriority, J1))) }

function So(e) {
    function t(o) { return Wr(o, e) } if (0 < yi.length) { Wr(yi[0], e); for (var n = 1; n < yi.length; n++) { var r = yi[n];
            r.blockedOn === e && (r.blockedOn = null) } } for (Xt !== null && Wr(Xt, e), Zt !== null && Wr(Zt, e), en !== null && Wr(en, e), yo.forEach(t), wo.forEach(t), n = 0; n < Vt.length; n++) r = Vt[n], r.blockedOn === e && (r.blockedOn = null); for (; 0 < Vt.length && (n = Vt[0], n.blockedOn === null);) sm(n), n.blockedOn === null && Vt.shift() }
var dr = jt.ReactCurrentBatchConfig,
    hs = !0;

function X1(e, t, n, r) { var o = K,
        i = dr.transition;
    dr.transition = null; try { K = 1, lc(e, t, n, r) } finally { K = o, dr.transition = i } }

function Z1(e, t, n, r) { var o = K,
        i = dr.transition;
    dr.transition = null; try { K = 4, lc(e, t, n, r) } finally { K = o, dr.transition = i } }

function lc(e, t, n, r) { if (hs) { var o = Il(e, t, n, r); if (o === null) za(e, t, r, ms, n), nd(e, r);
        else if (Y1(o, e, t, n, r)) r.stopPropagation();
        else if (nd(e, r), t & 4 && -1 < G1.indexOf(e)) { for (; o !== null;) { var i = Ho(o); if (i !== null && nm(i), i = Il(e, t, n, r), i === null && za(e, t, r, ms, n), i === o) break;
                o = i } o !== null && r.stopPropagation() } else za(e, t, r, null, n) } }
var ms = null;

function Il(e, t, n, r) { if (ms = null, e = oc(r), e = En(e), e !== null)
        if (t = $n(e), t === null) e = null;
        else if (n = t.tag, n === 13) { if (e = qh(t), e !== null) return e;
        e = null } else if (n === 3) { if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null } else t !== e && (e = null); return ms = e, null }

function am(e) { switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (U1()) {
                case ic:
                    return 1;
                case Xh:
                    return 4;
                case ds:
                case z1:
                    return 16;
                case Zh:
                    return 536870912;
                default:
                    return 16 }
        default:
            return 16 } }
var Kt = null,
    uc = null,
    Hi = null;

function lm() { if (Hi) return Hi; var e, t = uc,
        n = t.length,
        r, o = "value" in Kt ? Kt.value : Kt.textContent,
        i = o.length; for (e = 0; e < n && t[e] === o[e]; e++); var s = n - e; for (r = 1; r <= s && t[n - r] === o[i - r]; r++); return Hi = o.slice(e, 1 < r ? 1 - r : void 0) }

function Qi(e) { var t = e.keyCode; return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0 }

function wi() { return !0 }

function od() { return !1 }

function We(e) {
    function t(n, r, o, i, s) { this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null; for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(i) : i[a]); return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? wi : od, this.isPropagationStopped = od, this } return re(t.prototype, { preventDefault: function() { this.defaultPrevented = !0; var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = wi) }, stopPropagation: function() { var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = wi) }, persist: function() {}, isPersistent: wi }), t }
var Lr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) { return e.timeStamp || Date.now() }, defaultPrevented: 0, isTrusted: 0 },
    cc = We(Lr),
    Vo = re({}, Lr, { view: 0, detail: 0 }),
    ew = We(Vo),
    Ta, Ia, Vr, Zs = re({}, Vo, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: fc, button: 0, buttons: 0, relatedTarget: function(e) { return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget }, movementX: function(e) { return "movementX" in e ? e.movementX : (e !== Vr && (Vr && e.type === "mousemove" ? (Ta = e.screenX - Vr.screenX, Ia = e.screenY - Vr.screenY) : Ia = Ta = 0, Vr = e), Ta) }, movementY: function(e) { return "movementY" in e ? e.movementY : Ia } }),
    id = We(Zs),
    tw = re({}, Zs, { dataTransfer: 0 }),
    nw = We(tw),
    rw = re({}, Vo, { relatedTarget: 0 }),
    Da = We(rw),
    ow = re({}, Lr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    iw = We(ow),
    sw = re({}, Lr, { clipboardData: function(e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData } }),
    aw = We(sw),
    lw = re({}, Lr, { data: 0 }),
    sd = We(lw),
    uw = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" },
    cw = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" },
    fw = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };

function dw(e) { var t = this.nativeEvent; return t.getModifierState ? t.getModifierState(e) : (e = fw[e]) ? !!t[e] : !1 }

function fc() { return dw }
var pw = re({}, Vo, { key: function(e) { if (e.key) { var t = uw[e.key] || e.key; if (t !== "Unidentified") return t } return e.type === "keypress" ? (e = Qi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? cw[e.keyCode] || "Unidentified" : "" }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: fc, charCode: function(e) { return e.type === "keypress" ? Qi(e) : 0 }, keyCode: function(e) { return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0 }, which: function(e) { return e.type === "keypress" ? Qi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0 } }),
    hw = We(pw),
    mw = re({}, Zs, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }),
    ad = We(mw),
    gw = re({}, Vo, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: fc }),
    vw = We(gw),
    yw = re({}, Lr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ww = We(yw),
    Sw = re({}, Zs, { deltaX: function(e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0 }, deltaY: function(e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0 }, deltaZ: 0, deltaMode: 0 }),
    xw = We(Sw),
    Ew = [9, 13, 27, 32],
    dc = Nt && "CompositionEvent" in window,
    ro = null;
Nt && "documentMode" in document && (ro = document.documentMode);
var Cw = Nt && "TextEvent" in window && !ro,
    um = Nt && (!dc || ro && 8 < ro && 11 >= ro),
    ld = String.fromCharCode(32),
    ud = !1;

function cm(e, t) { switch (e) {
        case "keyup":
            return Ew.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1 } }

function fm(e) { return e = e.detail, typeof e == "object" && "data" in e ? e.data : null }
var Gn = !1;

function _w(e, t) { switch (e) {
        case "compositionend":
            return fm(t);
        case "keypress":
            return t.which !== 32 ? null : (ud = !0, ld);
        case "textInput":
            return e = t.data, e === ld && ud ? null : e;
        default:
            return null } }

function kw(e, t) { if (Gn) return e === "compositionend" || !dc && cm(e, t) ? (e = lm(), Hi = uc = Kt = null, Gn = !1, e) : null; switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) { if (t.char && 1 < t.char.length) return t.char; if (t.which) return String.fromCharCode(t.which) } return null;
        case "compositionend":
            return um && t.locale !== "ko" ? null : t.data;
        default:
            return null } }
var Ow = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };

function cd(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t === "input" ? !!Ow[e.type] : t === "textarea" }

function dm(e, t, n, r) { Wh(r), t = gs(t, "onChange"), 0 < t.length && (n = new cc("onChange", "change", null, n, r), e.push({ event: n, listeners: t })) }
var oo = null,
    xo = null;

function Pw(e) { Cm(e, 0) }

function ea(e) { var t = Xn(e); if (jh(t)) return e }

function bw(e, t) { if (e === "change") return t }
var pm = !1;
if (Nt) { var Ma; if (Nt) { var ja = "oninput" in document; if (!ja) { var fd = document.createElement("div");
            fd.setAttribute("oninput", "return;"), ja = typeof fd.oninput == "function" } Ma = ja } else Ma = !1;
    pm = Ma && (!document.documentMode || 9 < document.documentMode) }

function dd() { oo && (oo.detachEvent("onpropertychange", hm), xo = oo = null) }

function hm(e) { if (e.propertyName === "value" && ea(xo)) { var t = [];
        dm(t, xo, e, oc(e)), Kh(Pw, t) } }

function Rw(e, t, n) { e === "focusin" ? (dd(), oo = t, xo = n, oo.attachEvent("onpropertychange", hm)) : e === "focusout" && dd() }

function Lw(e) { if (e === "selectionchange" || e === "keyup" || e === "keydown") return ea(xo) }

function Nw(e, t) { if (e === "click") return ea(t) }

function Tw(e, t) { if (e === "input" || e === "change") return ea(t) }

function Iw(e, t) { return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t }
var ft = typeof Object.is == "function" ? Object.is : Iw;

function Eo(e, t) { if (ft(e, t)) return !0; if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1; var n = Object.keys(e),
        r = Object.keys(t); if (n.length !== r.length) return !1; for (r = 0; r < n.length; r++) { var o = n[r]; if (!ml.call(t, o) || !ft(e[o], t[o])) return !1 } return !0 }

function pd(e) { for (; e && e.firstChild;) e = e.firstChild; return e }

function hd(e, t) { var n = pd(e);
    e = 0; for (var r; n;) { if (n.nodeType === 3) { if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
            e = r } e: { for (; n;) { if (n.nextSibling) { n = n.nextSibling; break e } n = n.parentNode } n = void 0 } n = pd(n) } }

function mm(e, t) { return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? mm(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1 }

function gm() { for (var e = window, t = us(); t instanceof e.HTMLIFrameElement;) { try { var n = typeof t.contentWindow.location.href == "string" } catch { n = !1 } if (n) e = t.contentWindow;
        else break;
        t = us(e.document) } return t }

function pc(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true") }

function Dw(e) { var t = gm(),
        n = e.focusedElem,
        r = e.selectionRange; if (t !== n && n && n.ownerDocument && mm(n.ownerDocument.documentElement, n)) { if (r !== null && pc(n)) { if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) { e = e.getSelection(); var o = n.textContent.length,
                    i = Math.min(r.start, o);
                r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = hd(n, i); var s = hd(n, r);
                o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t))) } } for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop }); for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top } }
var Mw = Nt && "documentMode" in document && 11 >= document.documentMode,
    Yn = null,
    Dl = null,
    io = null,
    Ml = !1;

function md(e, t, n) { var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ml || Yn == null || Yn !== us(r) || (r = Yn, "selectionStart" in r && pc(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), io && Eo(io, r) || (io = r, r = gs(Dl, "onSelect"), 0 < r.length && (t = new cc("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Yn))) }

function Si(e, t) { var n = {}; return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n }
var Jn = { animationend: Si("Animation", "AnimationEnd"), animationiteration: Si("Animation", "AnimationIteration"), animationstart: Si("Animation", "AnimationStart"), transitionend: Si("Transition", "TransitionEnd") },
    Aa = {},
    vm = {};
Nt && (vm = document.createElement("div").style, "AnimationEvent" in window || (delete Jn.animationend.animation, delete Jn.animationiteration.animation, delete Jn.animationstart.animation), "TransitionEvent" in window || delete Jn.transitionend.transition);

function ta(e) { if (Aa[e]) return Aa[e]; if (!Jn[e]) return e; var t = Jn[e],
        n; for (n in t)
        if (t.hasOwnProperty(n) && n in vm) return Aa[e] = t[n]; return e }
var ym = ta("animationend"),
    wm = ta("animationiteration"),
    Sm = ta("animationstart"),
    xm = ta("transitionend"),
    Em = new Map,
    gd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function dn(e, t) { Em.set(e, t), Fn(t, [e]) }
for (var Fa = 0; Fa < gd.length; Fa++) { var $a = gd[Fa],
        jw = $a.toLowerCase(),
        Aw = $a[0].toUpperCase() + $a.slice(1);
    dn(jw, "on" + Aw) } dn(ym, "onAnimationEnd");
dn(wm, "onAnimationIteration");
dn(Sm, "onAnimationStart");
dn("dblclick", "onDoubleClick");
dn("focusin", "onFocus");
dn("focusout", "onBlur");
dn(xm, "onTransitionEnd");
gr("onMouseEnter", ["mouseout", "mouseover"]);
gr("onMouseLeave", ["mouseout", "mouseover"]);
gr("onPointerEnter", ["pointerout", "pointerover"]);
gr("onPointerLeave", ["pointerout", "pointerover"]);
Fn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Fn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Fn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Fn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Fn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Fn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Xr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Fw = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xr));

function vd(e, t, n) { var r = e.type || "unknown-event";
    e.currentTarget = n, j1(r, t, void 0, e), e.currentTarget = null }

function Cm(e, t) { t = (t & 4) !== 0; for (var n = 0; n < e.length; n++) { var r = e[n],
            o = r.event;
        r = r.listeners;
        e: { var i = void 0; if (t)
                for (var s = r.length - 1; 0 <= s; s--) { var a = r[s],
                        l = a.instance,
                        u = a.currentTarget; if (a = a.listener, l !== i && o.isPropagationStopped()) break e;
                    vd(o, a, u), i = l } else
                    for (s = 0; s < r.length; s++) { if (a = r[s], l = a.instance, u = a.currentTarget, a = a.listener, l !== i && o.isPropagationStopped()) break e;
                        vd(o, a, u), i = l } } } if (fs) throw e = Ll, fs = !1, Ll = null, e }

function J(e, t) { var n = t[Ul];
    n === void 0 && (n = t[Ul] = new Set); var r = e + "__bubble";
    n.has(r) || (_m(t, e, 2, !1), n.add(r)) }

function Ua(e, t, n) { var r = 0;
    t && (r |= 4), _m(n, e, r, t) }
var xi = "_reactListening" + Math.random().toString(36).slice(2);

function Co(e) { if (!e[xi]) { e[xi] = !0, Nh.forEach(function(n) { n !== "selectionchange" && (Fw.has(n) || Ua(n, !1, e), Ua(n, !0, e)) }); var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[xi] || (t[xi] = !0, Ua("selectionchange", !1, t)) } }

function _m(e, t, n, r) { switch (am(t)) {
        case 1:
            var o = X1; break;
        case 4:
            o = Z1; break;
        default:
            o = lc } n = o.bind(null, t, n, e), o = void 0, !Rl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1) }

function za(e, t, n, r, o) { var i = r; if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) { if (r === null) return; var s = r.tag; if (s === 3 || s === 4) { var a = r.stateNode.containerInfo; if (a === o || a.nodeType === 8 && a.parentNode === o) break; if (s === 4)
                for (s = r.return; s !== null;) { var l = s.tag; if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo, l === o || l.nodeType === 8 && l.parentNode === o)) return;
                    s = s.return }
            for (; a !== null;) { if (s = En(a), s === null) return; if (l = s.tag, l === 5 || l === 6) { r = i = s; continue e } a = a.parentNode } } r = r.return } Kh(function() { var u = i,
            c = oc(n),
            d = [];
        e: { var f = Em.get(e); if (f !== void 0) { var g = cc,
                    w = e; switch (e) {
                    case "keypress":
                        if (Qi(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        g = hw; break;
                    case "focusin":
                        w = "focus", g = Da; break;
                    case "focusout":
                        w = "blur", g = Da; break;
                    case "beforeblur":
                    case "afterblur":
                        g = Da; break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        g = id; break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        g = nw; break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        g = vw; break;
                    case ym:
                    case wm:
                    case Sm:
                        g = iw; break;
                    case xm:
                        g = ww; break;
                    case "scroll":
                        g = ew; break;
                    case "wheel":
                        g = xw; break;
                    case "copy":
                    case "cut":
                    case "paste":
                        g = aw; break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        g = ad } var S = (t & 4) !== 0,
                    _ = !S && e === "scroll",
                    m = S ? f !== null ? f + "Capture" : null : f;
                S = []; for (var p = u, h; p !== null;) { h = p; var E = h.stateNode; if (h.tag === 5 && E !== null && (h = E, m !== null && (E = vo(p, m), E != null && S.push(_o(p, E, h)))), _) break;
                    p = p.return } 0 < S.length && (f = new g(f, w, null, n, c), d.push({ event: f, listeners: S })) } }
        if (!(t & 7)) { e: { if (f = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", f && n !== Pl && (w = n.relatedTarget || n.fromElement) && (En(w) || w[Tt])) break e; if ((g || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, g ? (w = n.relatedTarget || n.toElement, g = u, w = w ? En(w) : null, w !== null && (_ = $n(w), w !== _ || w.tag !== 5 && w.tag !== 6) && (w = null)) : (g = null, w = u), g !== w)) { if (S = id, E = "onMouseLeave", m = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (S = ad, E = "onPointerLeave", m = "onPointerEnter", p = "pointer"), _ = g == null ? f : Xn(g), h = w == null ? f : Xn(w), f = new S(E, p + "leave", g, n, c), f.target = _, f.relatedTarget = h, E = null, En(c) === u && (S = new S(m, p + "enter", w, n, c), S.target = h, S.relatedTarget = _, E = S), _ = E, g && w) t: { for (S = g, m = w, p = 0, h = S; h; h = Qn(h)) p++; for (h = 0, E = m; E; E = Qn(E)) h++; for (; 0 < p - h;) S = Qn(S), p--; for (; 0 < h - p;) m = Qn(m), h--; for (; p--;) { if (S === m || m !== null && S === m.alternate) break t;
                            S = Qn(S), m = Qn(m) } S = null }
                    else S = null;
                    g !== null && yd(d, f, g, S, !1), w !== null && _ !== null && yd(d, _, w, S, !0) } } e: { if (f = u ? Xn(u) : window, g = f.nodeName && f.nodeName.toLowerCase(), g === "select" || g === "input" && f.type === "file") var b = bw;
                else if (cd(f))
                    if (pm) b = Tw;
                    else { b = Lw; var P = Rw } else(g = f.nodeName) && g.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (b = Nw); if (b && (b = b(e, u))) { dm(d, b, n, c); break e } P && P(e, f, u), e === "focusout" && (P = f._wrapperState) && P.controlled && f.type === "number" && El(f, "number", f.value) } switch (P = u ? Xn(u) : window, e) {
                case "focusin":
                    (cd(P) || P.contentEditable === "true") && (Yn = P, Dl = u, io = null); break;
                case "focusout":
                    io = Dl = Yn = null; break;
                case "mousedown":
                    Ml = !0; break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Ml = !1, md(d, n, c); break;
                case "selectionchange":
                    if (Mw) break;
                case "keydown":
                case "keyup":
                    md(d, n, c) } var O; if (dc) e: { switch (e) {
                    case "compositionstart":
                        var x = "onCompositionStart"; break e;
                    case "compositionend":
                        x = "onCompositionEnd"; break e;
                    case "compositionupdate":
                        x = "onCompositionUpdate"; break e } x = void 0 }
            else Gn ? cm(e, n) && (x = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (x = "onCompositionStart");x && (um && n.locale !== "ko" && (Gn || x !== "onCompositionStart" ? x === "onCompositionEnd" && Gn && (O = lm()) : (Kt = c, uc = "value" in Kt ? Kt.value : Kt.textContent, Gn = !0)), P = gs(u, x), 0 < P.length && (x = new sd(x, e, null, n, c), d.push({ event: x, listeners: P }), O ? x.data = O : (O = fm(n), O !== null && (x.data = O)))), (O = Cw ? _w(e, n) : kw(e, n)) && (u = gs(u, "onBeforeInput"), 0 < u.length && (c = new sd("onBeforeInput", "beforeinput", null, n, c), d.push({ event: c, listeners: u }), c.data = O)) } Cm(d, t) }) }

function _o(e, t, n) { return { instance: e, listener: t, currentTarget: n } }

function gs(e, t) { for (var n = t + "Capture", r = []; e !== null;) { var o = e,
            i = o.stateNode;
        o.tag === 5 && i !== null && (o = i, i = vo(e, n), i != null && r.unshift(_o(e, i, o)), i = vo(e, t), i != null && r.push(_o(e, i, o))), e = e.return } return r }

function Qn(e) { if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5); return e || null }

function yd(e, t, n, r, o) { for (var i = t._reactName, s = []; n !== null && n !== r;) { var a = n,
            l = a.alternate,
            u = a.stateNode; if (l !== null && l === r) break;
        a.tag === 5 && u !== null && (a = u, o ? (l = vo(n, i), l != null && s.unshift(_o(n, l, a))) : o || (l = vo(n, i), l != null && s.push(_o(n, l, a)))), n = n.return } s.length !== 0 && e.push({ event: t, listeners: s }) }
var $w = /\r\n?/g,
    Uw = /\u0000|\uFFFD/g;

function wd(e) { return (typeof e == "string" ? e : "" + e).replace($w, `
`).replace(Uw, "") }

function Ei(e, t, n) { if (t = wd(t), wd(e) !== t && n) throw Error(I(425)) }

function vs() {}
var jl = null,
    Al = null;

function Fl(e, t) { return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null }
var $l = typeof setTimeout == "function" ? setTimeout : void 0,
    zw = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Sd = typeof Promise == "function" ? Promise : void 0,
    Bw = typeof queueMicrotask == "function" ? queueMicrotask : typeof Sd < "u" ? function(e) { return Sd.resolve(null).then(e).catch(Ww) } : $l;

function Ww(e) { setTimeout(function() { throw e }) }

function Ba(e, t) { var n = t,
        r = 0;
    do { var o = n.nextSibling; if (e.removeChild(n), o && o.nodeType === 8)
            if (n = o.data, n === "/$") { if (r === 0) { e.removeChild(o), So(t); return } r-- } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o } while (n);
    So(t) }

function tn(e) { for (; e != null; e = e.nextSibling) { var t = e.nodeType; if (t === 1 || t === 3) break; if (t === 8) { if (t = e.data, t === "$" || t === "$!" || t === "$?") break; if (t === "/$") return null } } return e }

function xd(e) { e = e.previousSibling; for (var t = 0; e;) { if (e.nodeType === 8) { var n = e.data; if (n === "$" || n === "$!" || n === "$?") { if (t === 0) return e;
                t-- } else n === "/$" && t++ } e = e.previousSibling } return null }
var Nr = Math.random().toString(36).slice(2),
    St = "__reactFiber$" + Nr,
    ko = "__reactProps$" + Nr,
    Tt = "__reactContainer$" + Nr,
    Ul = "__reactEvents$" + Nr,
    Vw = "__reactListeners$" + Nr,
    Hw = "__reactHandles$" + Nr;

function En(e) { var t = e[St]; if (t) return t; for (var n = e.parentNode; n;) { if (t = n[Tt] || n[St]) { if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = xd(e); e !== null;) { if (n = e[St]) return n;
                    e = xd(e) }
            return t } e = n, n = e.parentNode } return null }

function Ho(e) { return e = e[St] || e[Tt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e }

function Xn(e) { if (e.tag === 5 || e.tag === 6) return e.stateNode; throw Error(I(33)) }

function na(e) { return e[ko] || null }
var zl = [],
    Zn = -1;

function pn(e) { return { current: e } }

function X(e) { 0 > Zn || (e.current = zl[Zn], zl[Zn] = null, Zn--) }

function Y(e, t) { Zn++, zl[Zn] = e.current, e.current = t }
var cn = {},
    Ce = pn(cn),
    Ie = pn(!1),
    Ln = cn;

function vr(e, t) { var n = e.type.contextTypes; if (!n) return cn; var r = e.stateNode; if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext; var o = {},
        i; for (i in n) o[i] = t[i]; return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o }

function De(e) { return e = e.childContextTypes, e != null }

function ys() { X(Ie), X(Ce) }

function Ed(e, t, n) { if (Ce.current !== cn) throw Error(I(168));
    Y(Ce, t), Y(Ie, n) }

function km(e, t, n) { var r = e.stateNode; if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext(); for (var o in r)
        if (!(o in t)) throw Error(I(108, R1(e) || "Unknown", o)); return re({}, n, r) }

function ws(e) { return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || cn, Ln = Ce.current, Y(Ce, e), Y(Ie, Ie.current), !0 }

function Cd(e, t, n) { var r = e.stateNode; if (!r) throw Error(I(169));
    n ? (e = km(e, t, Ln), r.__reactInternalMemoizedMergedChildContext = e, X(Ie), X(Ce), Y(Ce, e)) : X(Ie), Y(Ie, n) }
var Pt = null,
    ra = !1,
    Wa = !1;

function Om(e) { Pt === null ? Pt = [e] : Pt.push(e) }

function Qw(e) { ra = !0, Om(e) }

function hn() { if (!Wa && Pt !== null) { Wa = !0; var e = 0,
            t = K; try { var n = Pt; for (K = 1; e < n.length; e++) { var r = n[e];
                do r = r(!0); while (r !== null) } Pt = null, ra = !1 } catch (o) { throw Pt !== null && (Pt = Pt.slice(e + 1)), Jh(ic, hn), o } finally { K = t, Wa = !1 } } return null }
var er = [],
    tr = 0,
    Ss = null,
    xs = 0,
    Qe = [],
    Ke = 0,
    Nn = null,
    bt = 1,
    Rt = "";

function yn(e, t) { er[tr++] = xs, er[tr++] = Ss, Ss = e, xs = t }

function Pm(e, t, n) { Qe[Ke++] = bt, Qe[Ke++] = Rt, Qe[Ke++] = Nn, Nn = e; var r = bt;
    e = Rt; var o = 32 - at(r) - 1;
    r &= ~(1 << o), n += 1; var i = 32 - at(t) + o; if (30 < i) { var s = o - o % 5;
        i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, bt = 1 << 32 - at(t) + o | n << o | r, Rt = i + e } else bt = 1 << i | n << o | r, Rt = e }

function hc(e) { e.return !== null && (yn(e, 1), Pm(e, 1, 0)) }

function mc(e) { for (; e === Ss;) Ss = er[--tr], er[tr] = null, xs = er[--tr], er[tr] = null; for (; e === Nn;) Nn = Qe[--Ke], Qe[Ke] = null, Rt = Qe[--Ke], Qe[Ke] = null, bt = Qe[--Ke], Qe[Ke] = null }
var Fe = null,
    Ae = null,
    Z = !1,
    it = null;

function bm(e, t) { var n = qe(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n) }

function _d(e, t) { switch (e.tag) {
        case 5:
            var n = e.type; return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Fe = e, Ae = tn(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Fe = e, Ae = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Nn !== null ? { id: bt, overflow: Rt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = qe(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Fe = e, Ae = null, !0) : !1;
        default:
            return !1 } }

function Bl(e) { return (e.mode & 1) !== 0 && (e.flags & 128) === 0 }

function Wl(e) { if (Z) { var t = Ae; if (t) { var n = t; if (!_d(e, t)) { if (Bl(e)) throw Error(I(418));
                t = tn(n.nextSibling); var r = Fe;
                t && _d(e, t) ? bm(r, n) : (e.flags = e.flags & -4097 | 2, Z = !1, Fe = e) } } else { if (Bl(e)) throw Error(I(418));
            e.flags = e.flags & -4097 | 2, Z = !1, Fe = e } } }

function kd(e) { for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Fe = e }

function Ci(e) { if (e !== Fe) return !1; if (!Z) return kd(e), Z = !0, !1; var t; if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Fl(e.type, e.memoizedProps)), t && (t = Ae)) { if (Bl(e)) throw Rm(), Error(I(418)); for (; t;) bm(e, t), t = tn(t.nextSibling) } if (kd(e), e.tag === 13) { if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(I(317));
        e: { for (e = e.nextSibling, t = 0; e;) { if (e.nodeType === 8) { var n = e.data; if (n === "/$") { if (t === 0) { Ae = tn(e.nextSibling); break e } t-- } else n !== "$" && n !== "$!" && n !== "$?" || t++ } e = e.nextSibling } Ae = null } } else Ae = Fe ? tn(e.stateNode.nextSibling) : null; return !0 }

function Rm() { for (var e = Ae; e;) e = tn(e.nextSibling) }

function yr() { Ae = Fe = null, Z = !1 }

function gc(e) { it === null ? it = [e] : it.push(e) }
var Kw = jt.ReactCurrentBatchConfig;

function tt(e, t) { if (e && e.defaultProps) { t = re({}, t), e = e.defaultProps; for (var n in e) t[n] === void 0 && (t[n] = e[n]); return t } return t }
var Es = pn(null),
    Cs = null,
    nr = null,
    vc = null;

function yc() { vc = nr = Cs = null }

function wc(e) { var t = Es.current;
    X(Es), e._currentValue = t }

function Vl(e, t, n) { for (; e !== null;) { var r = e.alternate; if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return } }

function pr(e, t) { Cs = e, vc = nr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Te = !0), e.firstContext = null) }

function Je(e) { var t = e._currentValue; if (vc !== e)
        if (e = { context: e, memoizedValue: t, next: null }, nr === null) { if (Cs === null) throw Error(I(308));
            nr = e, Cs.dependencies = { lanes: 0, firstContext: e } } else nr = nr.next = e; return t }
var Cn = null;

function Sc(e) { Cn === null ? Cn = [e] : Cn.push(e) }

function Lm(e, t, n, r) { var o = t.interleaved; return o === null ? (n.next = n, Sc(t)) : (n.next = o.next, o.next = n), t.interleaved = n, It(e, r) }

function It(e, t) { e.lanes |= t; var n = e.alternate; for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return; return n.tag === 3 ? n.stateNode : null }
var Bt = !1;

function xc(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null } }

function Nm(e, t) { e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects }) }

function Lt(e, t) { return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null } }

function nn(e, t, n) { var r = e.updateQueue; if (r === null) return null; if (r = r.shared, V & 2) { var o = r.pending; return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, It(e, n) } return o = r.interleaved, o === null ? (t.next = t, Sc(r)) : (t.next = o.next, o.next = t), r.interleaved = t, It(e, n) }

function Ki(e, t, n) { if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) { var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, sc(e, n) } }

function Od(e, t) { var n = e.updateQueue,
        r = e.alternate; if (r !== null && (r = r.updateQueue, n === r)) { var o = null,
            i = null; if (n = n.firstBaseUpdate, n !== null) { do { var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
                i === null ? o = i = s : i = i.next = s, n = n.next } while (n !== null);
            i === null ? o = i = t : i = i.next = t } else o = i = t;
        n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n; return } e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t }

function _s(e, t, n, r) { var o = e.updateQueue;
    Bt = !1; var i = o.firstBaseUpdate,
        s = o.lastBaseUpdate,
        a = o.shared.pending; if (a !== null) { o.shared.pending = null; var l = a,
            u = l.next;
        l.next = null, s === null ? i = u : s.next = u, s = l; var c = e.alternate;
        c !== null && (c = c.updateQueue, a = c.lastBaseUpdate, a !== s && (a === null ? c.firstBaseUpdate = u : a.next = u, c.lastBaseUpdate = l)) } if (i !== null) { var d = o.baseState;
        s = 0, c = u = l = null, a = i;
        do { var f = a.lane,
                g = a.eventTime; if ((r & f) === f) { c !== null && (c = c.next = { eventTime: g, lane: 0, tag: a.tag, payload: a.payload, callback: a.callback, next: null });
                e: { var w = e,
                        S = a; switch (f = t, g = n, S.tag) {
                        case 1:
                            if (w = S.payload, typeof w == "function") { d = w.call(g, d, f); break e } d = w; break e;
                        case 3:
                            w.flags = w.flags & -65537 | 128;
                        case 0:
                            if (w = S.payload, f = typeof w == "function" ? w.call(g, d, f) : w, f == null) break e;
                            d = re({}, d, f); break e;
                        case 2:
                            Bt = !0 } } a.callback !== null && a.lane !== 0 && (e.flags |= 64, f = o.effects, f === null ? o.effects = [a] : f.push(a)) } else g = { eventTime: g, lane: f, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, c === null ? (u = c = g, l = d) : c = c.next = g, s |= f; if (a = a.next, a === null) { if (a = o.shared.pending, a === null) break;
                f = a, a = f.next, f.next = null, o.lastBaseUpdate = f, o.shared.pending = null } } while (1); if (c === null && (l = d), o.baseState = l, o.firstBaseUpdate = u, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) { o = t;
            do s |= o.lane, o = o.next; while (o !== t) } else i === null && (o.shared.lanes = 0);
        In |= s, e.lanes = s, e.memoizedState = d } }

function Pd(e, t, n) { if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) { var r = e[t],
                o = r.callback; if (o !== null) { if (r.callback = null, r = n, typeof o != "function") throw Error(I(191, o));
                o.call(r) } } }
var Tm = new Lh.Component().refs;

function Hl(e, t, n, r) { t = e.memoizedState, n = n(r, t), n = n == null ? t : re({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n) }
var oa = { isMounted: function(e) { return (e = e._reactInternals) ? $n(e) === e : !1 }, enqueueSetState: function(e, t, n) { e = e._reactInternals; var r = Oe(),
            o = on(e),
            i = Lt(r, o);
        i.payload = t, n != null && (i.callback = n), t = nn(e, i, o), t !== null && (lt(t, e, o, r), Ki(t, e, o)) }, enqueueReplaceState: function(e, t, n) { e = e._reactInternals; var r = Oe(),
            o = on(e),
            i = Lt(r, o);
        i.tag = 1, i.payload = t, n != null && (i.callback = n), t = nn(e, i, o), t !== null && (lt(t, e, o, r), Ki(t, e, o)) }, enqueueForceUpdate: function(e, t) { e = e._reactInternals; var n = Oe(),
            r = on(e),
            o = Lt(n, r);
        o.tag = 2, t != null && (o.callback = t), t = nn(e, o, r), t !== null && (lt(t, e, r, n), Ki(t, e, r)) } };

function bd(e, t, n, r, o, i, s) { return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Eo(n, r) || !Eo(o, i) : !0 }

function Im(e, t, n) { var r = !1,
        o = cn,
        i = t.contextType; return typeof i == "object" && i !== null ? i = Je(i) : (o = De(t) ? Ln : Ce.current, r = t.contextTypes, i = (r = r != null) ? vr(e, o) : cn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = oa, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t }

function Rd(e, t, n, r) { e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && oa.enqueueReplaceState(t, t.state, null) }

function Ql(e, t, n, r) { var o = e.stateNode;
    o.props = n, o.state = e.memoizedState, o.refs = Tm, xc(e); var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = Je(i) : (i = De(t) ? Ln : Ce.current, o.context = vr(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Hl(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && oa.enqueueReplaceState(o, o.state, null), _s(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308) }

function Hr(e, t, n) { if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") { if (n._owner) { if (n = n._owner, n) { if (n.tag !== 1) throw Error(I(309)); var r = n.stateNode } if (!r) throw Error(I(147, e)); var o = r,
                i = "" + e; return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) { var a = o.refs;
                a === Tm && (a = o.refs = {}), s === null ? delete a[i] : a[i] = s }, t._stringRef = i, t) } if (typeof e != "string") throw Error(I(284)); if (!n._owner) throw Error(I(290, e)) } return e }

function _i(e, t) { throw e = Object.prototype.toString.call(t), Error(I(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)) }

function Ld(e) { var t = e._init; return t(e._payload) }

function Dm(e) {
    function t(m, p) { if (e) { var h = m.deletions;
            h === null ? (m.deletions = [p], m.flags |= 16) : h.push(p) } }

    function n(m, p) { if (!e) return null; for (; p !== null;) t(m, p), p = p.sibling; return null }

    function r(m, p) { for (m = new Map; p !== null;) p.key !== null ? m.set(p.key, p) : m.set(p.index, p), p = p.sibling; return m }

    function o(m, p) { return m = sn(m, p), m.index = 0, m.sibling = null, m }

    function i(m, p, h) { return m.index = h, e ? (h = m.alternate, h !== null ? (h = h.index, h < p ? (m.flags |= 2, p) : h) : (m.flags |= 2, p)) : (m.flags |= 1048576, p) }

    function s(m) { return e && m.alternate === null && (m.flags |= 2), m }

    function a(m, p, h, E) { return p === null || p.tag !== 6 ? (p = Ya(h, m.mode, E), p.return = m, p) : (p = o(p, h), p.return = m, p) }

    function l(m, p, h, E) { var b = h.type; return b === qn ? c(m, p, h.props.children, E, h.key) : p !== null && (p.elementType === b || typeof b == "object" && b !== null && b.$$typeof === zt && Ld(b) === p.type) ? (E = o(p, h.props), E.ref = Hr(m, p, h), E.return = m, E) : (E = Zi(h.type, h.key, h.props, null, m.mode, E), E.ref = Hr(m, p, h), E.return = m, E) }

    function u(m, p, h, E) { return p === null || p.tag !== 4 || p.stateNode.containerInfo !== h.containerInfo || p.stateNode.implementation !== h.implementation ? (p = Ja(h, m.mode, E), p.return = m, p) : (p = o(p, h.children || []), p.return = m, p) }

    function c(m, p, h, E, b) { return p === null || p.tag !== 7 ? (p = Pn(h, m.mode, E, b), p.return = m, p) : (p = o(p, h), p.return = m, p) }

    function d(m, p, h) { if (typeof p == "string" && p !== "" || typeof p == "number") return p = Ya("" + p, m.mode, h), p.return = m, p; if (typeof p == "object" && p !== null) { switch (p.$$typeof) {
                case pi:
                    return h = Zi(p.type, p.key, p.props, null, m.mode, h), h.ref = Hr(m, null, p), h.return = m, h;
                case Kn:
                    return p = Ja(p, m.mode, h), p.return = m, p;
                case zt:
                    var E = p._init; return d(m, E(p._payload), h) } if (Yr(p) || Ur(p)) return p = Pn(p, m.mode, h, null), p.return = m, p;
            _i(m, p) } return null }

    function f(m, p, h, E) { var b = p !== null ? p.key : null; if (typeof h == "string" && h !== "" || typeof h == "number") return b !== null ? null : a(m, p, "" + h, E); if (typeof h == "object" && h !== null) { switch (h.$$typeof) {
                case pi:
                    return h.key === b ? l(m, p, h, E) : null;
                case Kn:
                    return h.key === b ? u(m, p, h, E) : null;
                case zt:
                    return b = h._init, f(m, p, b(h._payload), E) } if (Yr(h) || Ur(h)) return b !== null ? null : c(m, p, h, E, null);
            _i(m, h) } return null }

    function g(m, p, h, E, b) { if (typeof E == "string" && E !== "" || typeof E == "number") return m = m.get(h) || null, a(p, m, "" + E, b); if (typeof E == "object" && E !== null) { switch (E.$$typeof) {
                case pi:
                    return m = m.get(E.key === null ? h : E.key) || null, l(p, m, E, b);
                case Kn:
                    return m = m.get(E.key === null ? h : E.key) || null, u(p, m, E, b);
                case zt:
                    var P = E._init; return g(m, p, h, P(E._payload), b) } if (Yr(E) || Ur(E)) return m = m.get(h) || null, c(p, m, E, b, null);
            _i(p, E) } return null }

    function w(m, p, h, E) { for (var b = null, P = null, O = p, x = p = 0, R = null; O !== null && x < h.length; x++) { O.index > x ? (R = O, O = null) : R = O.sibling; var L = f(m, O, h[x], E); if (L === null) { O === null && (O = R); break } e && O && L.alternate === null && t(m, O), p = i(L, p, x), P === null ? b = L : P.sibling = L, P = L, O = R } if (x === h.length) return n(m, O), Z && yn(m, x), b; if (O === null) { for (; x < h.length; x++) O = d(m, h[x], E), O !== null && (p = i(O, p, x), P === null ? b = O : P.sibling = O, P = O); return Z && yn(m, x), b } for (O = r(m, O); x < h.length; x++) R = g(O, m, x, h[x], E), R !== null && (e && R.alternate !== null && O.delete(R.key === null ? x : R.key), p = i(R, p, x), P === null ? b = R : P.sibling = R, P = R); return e && O.forEach(function(D) { return t(m, D) }), Z && yn(m, x), b }

    function S(m, p, h, E) { var b = Ur(h); if (typeof b != "function") throw Error(I(150)); if (h = b.call(h), h == null) throw Error(I(151)); for (var P = b = null, O = p, x = p = 0, R = null, L = h.next(); O !== null && !L.done; x++, L = h.next()) { O.index > x ? (R = O, O = null) : R = O.sibling; var D = f(m, O, L.value, E); if (D === null) { O === null && (O = R); break } e && O && D.alternate === null && t(m, O), p = i(D, p, x), P === null ? b = D : P.sibling = D, P = D, O = R } if (L.done) return n(m, O), Z && yn(m, x), b; if (O === null) { for (; !L.done; x++, L = h.next()) L = d(m, L.value, E), L !== null && (p = i(L, p, x), P === null ? b = L : P.sibling = L, P = L); return Z && yn(m, x), b } for (O = r(m, O); !L.done; x++, L = h.next()) L = g(O, m, x, L.value, E), L !== null && (e && L.alternate !== null && O.delete(L.key === null ? x : L.key), p = i(L, p, x), P === null ? b = L : P.sibling = L, P = L); return e && O.forEach(function(A) { return t(m, A) }), Z && yn(m, x), b }

    function _(m, p, h, E) { if (typeof h == "object" && h !== null && h.type === qn && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) { switch (h.$$typeof) {
                case pi:
                    e: { for (var b = h.key, P = p; P !== null;) { if (P.key === b) { if (b = h.type, b === qn) { if (P.tag === 7) { n(m, P.sibling), p = o(P, h.props.children), p.return = m, m = p; break e } } else if (P.elementType === b || typeof b == "object" && b !== null && b.$$typeof === zt && Ld(b) === P.type) { n(m, P.sibling), p = o(P, h.props), p.ref = Hr(m, P, h), p.return = m, m = p; break e } n(m, P); break } else t(m, P);
                            P = P.sibling } h.type === qn ? (p = Pn(h.props.children, m.mode, E, h.key), p.return = m, m = p) : (E = Zi(h.type, h.key, h.props, null, m.mode, E), E.ref = Hr(m, p, h), E.return = m, m = E) }
                    return s(m);
                case Kn:
                    e: { for (P = h.key; p !== null;) { if (p.key === P)
                                if (p.tag === 4 && p.stateNode.containerInfo === h.containerInfo && p.stateNode.implementation === h.implementation) { n(m, p.sibling), p = o(p, h.children || []), p.return = m, m = p; break e } else { n(m, p); break } else t(m, p);
                            p = p.sibling } p = Ja(h, m.mode, E), p.return = m, m = p }
                    return s(m);
                case zt:
                    return P = h._init, _(m, p, P(h._payload), E) } if (Yr(h)) return w(m, p, h, E); if (Ur(h)) return S(m, p, h, E);
            _i(m, h) } return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, p !== null && p.tag === 6 ? (n(m, p.sibling), p = o(p, h), p.return = m, m = p) : (n(m, p), p = Ya(h, m.mode, E), p.return = m, m = p), s(m)) : n(m, p) } return _ }
var wr = Dm(!0),
    Mm = Dm(!1),
    Qo = {},
    Ct = pn(Qo),
    Oo = pn(Qo),
    Po = pn(Qo);

function _n(e) { if (e === Qo) throw Error(I(174)); return e }

function Ec(e, t) { switch (Y(Po, t), Y(Oo, e), Y(Ct, Qo), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : _l(null, ""); break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = _l(t, e) } X(Ct), Y(Ct, t) }

function Sr() { X(Ct), X(Oo), X(Po) }

function jm(e) { _n(Po.current); var t = _n(Ct.current),
        n = _l(t, e.type);
    t !== n && (Y(Oo, e), Y(Ct, n)) }

function Cc(e) { Oo.current === e && (X(Ct), X(Oo)) }
var te = pn(0);

function ks(e) { for (var t = e; t !== null;) { if (t.tag === 13) { var n = t.memoizedState; if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) { if (t.flags & 128) return t } else if (t.child !== null) { t.child.return = t, t = t.child; continue } if (t === e) break; for (; t.sibling === null;) { if (t.return === null || t.return === e) return null;
            t = t.return } t.sibling.return = t.return, t = t.sibling } return null }
var Va = [];

function _c() { for (var e = 0; e < Va.length; e++) Va[e]._workInProgressVersionPrimary = null;
    Va.length = 0 }
var qi = jt.ReactCurrentDispatcher,
    Ha = jt.ReactCurrentBatchConfig,
    Tn = 0,
    ne = null,
    ue = null,
    fe = null,
    Os = !1,
    so = !1,
    bo = 0,
    qw = 0;

function we() { throw Error(I(321)) }

function kc(e, t) { if (t === null) return !1; for (var n = 0; n < t.length && n < e.length; n++)
        if (!ft(e[n], t[n])) return !1; return !0 }

function Oc(e, t, n, r, o, i) { if (Tn = i, ne = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, qi.current = e === null || e.memoizedState === null ? Xw : Zw, e = n(r, o), so) { i = 0;
        do { if (so = !1, bo = 0, 25 <= i) throw Error(I(301));
            i += 1, fe = ue = null, t.updateQueue = null, qi.current = eS, e = n(r, o) } while (so) } if (qi.current = Ps, t = ue !== null && ue.next !== null, Tn = 0, fe = ue = ne = null, Os = !1, t) throw Error(I(300)); return e }

function Pc() { var e = bo !== 0; return bo = 0, e }

function vt() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return fe === null ? ne.memoizedState = fe = e : fe = fe.next = e, fe }

function Xe() { if (ue === null) { var e = ne.alternate;
        e = e !== null ? e.memoizedState : null } else e = ue.next; var t = fe === null ? ne.memoizedState : fe.next; if (t !== null) fe = t, ue = e;
    else { if (e === null) throw Error(I(310));
        ue = e, e = { memoizedState: ue.memoizedState, baseState: ue.baseState, baseQueue: ue.baseQueue, queue: ue.queue, next: null }, fe === null ? ne.memoizedState = fe = e : fe = fe.next = e } return fe }

function Ro(e, t) { return typeof t == "function" ? t(e) : t }

function Qa(e) { var t = Xe(),
        n = t.queue; if (n === null) throw Error(I(311));
    n.lastRenderedReducer = e; var r = ue,
        o = r.baseQueue,
        i = n.pending; if (i !== null) { if (o !== null) { var s = o.next;
            o.next = i.next, i.next = s } r.baseQueue = o = i, n.pending = null } if (o !== null) { i = o.next, r = r.baseState; var a = s = null,
            l = null,
            u = i;
        do { var c = u.lane; if ((Tn & c) === c) l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else { var d = { lane: c, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
                l === null ? (a = l = d, s = r) : l = l.next = d, ne.lanes |= c, In |= c } u = u.next } while (u !== null && u !== i);
        l === null ? s = r : l.next = a, ft(r, t.memoizedState) || (Te = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r } if (e = n.interleaved, e !== null) { o = e;
        do i = o.lane, ne.lanes |= i, In |= i, o = o.next; while (o !== e) } else o === null && (n.lanes = 0); return [t.memoizedState, n.dispatch] }

function Ka(e) { var t = Xe(),
        n = t.queue; if (n === null) throw Error(I(311));
    n.lastRenderedReducer = e; var r = n.dispatch,
        o = n.pending,
        i = t.memoizedState; if (o !== null) { n.pending = null; var s = o = o.next;
        do i = e(i, s.action), s = s.next; while (s !== o);
        ft(i, t.memoizedState) || (Te = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i } return [i, r] }

function Am() {}

function Fm(e, t) { var n = ne,
        r = Xe(),
        o = t(),
        i = !ft(r.memoizedState, o); if (i && (r.memoizedState = o, Te = !0), r = r.queue, bc(zm.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || fe !== null && fe.memoizedState.tag & 1) { if (n.flags |= 2048, Lo(9, Um.bind(null, n, r, o, t), void 0, null), de === null) throw Error(I(349));
        Tn & 30 || $m(n, t, o) } return o }

function $m(e, t, n) { e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ne.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e)) }

function Um(e, t, n, r) { t.value = n, t.getSnapshot = r, Bm(t) && Wm(e) }

function zm(e, t, n) { return n(function() { Bm(t) && Wm(e) }) }

function Bm(e) { var t = e.getSnapshot;
    e = e.value; try { var n = t(); return !ft(e, n) } catch { return !0 } }

function Wm(e) { var t = It(e, 1);
    t !== null && lt(t, e, 1, -1) }

function Nd(e) { var t = vt(); return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ro, lastRenderedState: e }, t.queue = e, e = e.dispatch = Jw.bind(null, ne, e), [t.memoizedState, e] }

function Lo(e, t, n, r) { return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ne.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e }

function Vm() { return Xe().memoizedState }

function Gi(e, t, n, r) { var o = vt();
    ne.flags |= e, o.memoizedState = Lo(1 | t, n, void 0, r === void 0 ? null : r) }

function ia(e, t, n, r) { var o = Xe();
    r = r === void 0 ? null : r; var i = void 0; if (ue !== null) { var s = ue.memoizedState; if (i = s.destroy, r !== null && kc(r, s.deps)) { o.memoizedState = Lo(t, n, i, r); return } } ne.flags |= e, o.memoizedState = Lo(1 | t, n, i, r) }

function Td(e, t) { return Gi(8390656, 8, e, t) }

function bc(e, t) { return ia(2048, 8, e, t) }

function Hm(e, t) { return ia(4, 2, e, t) }

function Qm(e, t) { return ia(4, 4, e, t) }

function Km(e, t) { if (typeof t == "function") return e = e(), t(e),
        function() { t(null) }; if (t != null) return e = e(), t.current = e,
        function() { t.current = null } }

function qm(e, t, n) { return n = n != null ? n.concat([e]) : null, ia(4, 4, Km.bind(null, t, e), n) }

function Rc() {}

function Gm(e, t) { var n = Xe();
    t = t === void 0 ? null : t; var r = n.memoizedState; return r !== null && t !== null && kc(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e) }

function Ym(e, t) { var n = Xe();
    t = t === void 0 ? null : t; var r = n.memoizedState; return r !== null && t !== null && kc(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e) }

function Jm(e, t, n) { return Tn & 21 ? (ft(n, t) || (n = em(), ne.lanes |= n, In |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Te = !0), e.memoizedState = n) }

function Gw(e, t) { var n = K;
    K = n !== 0 && 4 > n ? n : 4, e(!0); var r = Ha.transition;
    Ha.transition = {}; try { e(!1), t() } finally { K = n, Ha.transition = r } }

function Xm() { return Xe().memoizedState }

function Yw(e, t, n) { var r = on(e); if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Zm(e)) eg(t, n);
    else if (n = Lm(e, t, n, r), n !== null) { var o = Oe();
        lt(n, e, r, o), tg(n, t, r) } }

function Jw(e, t, n) { var r = on(e),
        o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }; if (Zm(e)) eg(t, o);
    else { var i = e.alternate; if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try { var s = t.lastRenderedState,
                a = i(s, n); if (o.hasEagerState = !0, o.eagerState = a, ft(a, s)) { var l = t.interleaved;
                l === null ? (o.next = o, Sc(t)) : (o.next = l.next, l.next = o), t.interleaved = o; return } } catch {} finally {} n = Lm(e, t, o, r), n !== null && (o = Oe(), lt(n, e, r, o), tg(n, t, r)) } }

function Zm(e) { var t = e.alternate; return e === ne || t !== null && t === ne }

function eg(e, t) { so = Os = !0; var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t }

function tg(e, t, n) { if (n & 4194240) { var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, sc(e, n) } }
var Ps = { readContext: Je, useCallback: we, useContext: we, useEffect: we, useImperativeHandle: we, useInsertionEffect: we, useLayoutEffect: we, useMemo: we, useReducer: we, useRef: we, useState: we, useDebugValue: we, useDeferredValue: we, useTransition: we, useMutableSource: we, useSyncExternalStore: we, useId: we, unstable_isNewReconciler: !1 },
    Xw = { readContext: Je, useCallback: function(e, t) { return vt().memoizedState = [e, t === void 0 ? null : t], e }, useContext: Je, useEffect: Td, useImperativeHandle: function(e, t, n) { return n = n != null ? n.concat([e]) : null, Gi(4194308, 4, Km.bind(null, t, e), n) }, useLayoutEffect: function(e, t) { return Gi(4194308, 4, e, t) }, useInsertionEffect: function(e, t) { return Gi(4, 2, e, t) }, useMemo: function(e, t) { var n = vt(); return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e }, useReducer: function(e, t, n) { var r = vt(); return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Yw.bind(null, ne, e), [r.memoizedState, e] }, useRef: function(e) { var t = vt(); return e = { current: e }, t.memoizedState = e }, useState: Nd, useDebugValue: Rc, useDeferredValue: function(e) { return vt().memoizedState = e }, useTransition: function() { var e = Nd(!1),
                t = e[0]; return e = Gw.bind(null, e[1]), vt().memoizedState = e, [t, e] }, useMutableSource: function() {}, useSyncExternalStore: function(e, t, n) { var r = ne,
                o = vt(); if (Z) { if (n === void 0) throw Error(I(407));
                n = n() } else { if (n = t(), de === null) throw Error(I(349));
                Tn & 30 || $m(r, t, n) } o.memoizedState = n; var i = { value: n, getSnapshot: t }; return o.queue = i, Td(zm.bind(null, r, i, e), [e]), r.flags |= 2048, Lo(9, Um.bind(null, r, i, n, t), void 0, null), n }, useId: function() { var e = vt(),
                t = de.identifierPrefix; if (Z) { var n = Rt,
                    r = bt;
                n = (r & ~(1 << 32 - at(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = bo++, 0 < n && (t += "H" + n.toString(32)), t += ":" } else n = qw++, t = ":" + t + "r" + n.toString(32) + ":"; return e.memoizedState = t }, unstable_isNewReconciler: !1 },
    Zw = { readContext: Je, useCallback: Gm, useContext: Je, useEffect: bc, useImperativeHandle: qm, useInsertionEffect: Hm, useLayoutEffect: Qm, useMemo: Ym, useReducer: Qa, useRef: Vm, useState: function() { return Qa(Ro) }, useDebugValue: Rc, useDeferredValue: function(e) { var t = Xe(); return Jm(t, ue.memoizedState, e) }, useTransition: function() { var e = Qa(Ro)[0],
                t = Xe().memoizedState; return [e, t] }, useMutableSource: Am, useSyncExternalStore: Fm, useId: Xm, unstable_isNewReconciler: !1 },
    eS = { readContext: Je, useCallback: Gm, useContext: Je, useEffect: bc, useImperativeHandle: qm, useInsertionEffect: Hm, useLayoutEffect: Qm, useMemo: Ym, useReducer: Ka, useRef: Vm, useState: function() { return Ka(Ro) }, useDebugValue: Rc, useDeferredValue: function(e) { var t = Xe(); return ue === null ? t.memoizedState = e : Jm(t, ue.memoizedState, e) }, useTransition: function() { var e = Ka(Ro)[0],
                t = Xe().memoizedState; return [e, t] }, useMutableSource: Am, useSyncExternalStore: Fm, useId: Xm, unstable_isNewReconciler: !1 };

function xr(e, t) { try { var n = "",
            r = t;
        do n += b1(r), r = r.return; while (r); var o = n } catch (i) { o = `
Error generating stack: ` + i.message + `
` + i.stack } return { value: e, source: t, stack: o, digest: null } }

function qa(e, t, n) { return { value: e, source: null, stack: n ? ? null, digest: t ? ? null } }

function Kl(e, t) { try { console.error(t.value) } catch (n) { setTimeout(function() { throw n }) } }
var tS = typeof WeakMap == "function" ? WeakMap : Map;

function ng(e, t, n) { n = Lt(-1, n), n.tag = 3, n.payload = { element: null }; var r = t.value; return n.callback = function() { Rs || (Rs = !0, ru = r), Kl(e, t) }, n }

function rg(e, t, n) { n = Lt(-1, n), n.tag = 3; var r = e.type.getDerivedStateFromError; if (typeof r == "function") { var o = t.value;
        n.payload = function() { return r(o) }, n.callback = function() { Kl(e, t) } } var i = e.stateNode; return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() { Kl(e, t), typeof r != "function" && (rn === null ? rn = new Set([this]) : rn.add(this)); var s = t.stack;
        this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" }) }), n }

function Id(e, t, n) { var r = e.pingCache; if (r === null) { r = e.pingCache = new tS; var o = new Set;
        r.set(t, o) } else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
    o.has(n) || (o.add(n), e = mS.bind(null, e, t, n), t.then(e, e)) }

function Dd(e) { do { var t; if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return } while (e !== null); return null }

function Md(e, t, n, r, o) { return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Lt(-1, 1), t.tag = 2, nn(n, t, 1))), n.lanes |= 1), e) }
var nS = jt.ReactCurrentOwner,
    Te = !1;

function ke(e, t, n, r) { t.child = e === null ? Mm(t, null, n, r) : wr(t, e.child, n, r) }

function jd(e, t, n, r, o) { n = n.render; var i = t.ref; return pr(t, o), r = Oc(e, t, n, r, i, o), n = Pc(), e !== null && !Te ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Dt(e, t, o)) : (Z && n && hc(t), t.flags |= 1, ke(e, t, r, o), t.child) }

function Ad(e, t, n, r, o) { if (e === null) { var i = n.type; return typeof i == "function" && !Ac(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, og(e, t, i, r, o)) : (e = Zi(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e) } if (i = e.child, !(e.lanes & o)) { var s = i.memoizedProps; if (n = n.compare, n = n !== null ? n : Eo, n(s, r) && e.ref === t.ref) return Dt(e, t, o) } return t.flags |= 1, e = sn(i, r), e.ref = t.ref, e.return = t, t.child = e }

function og(e, t, n, r, o) { if (e !== null) { var i = e.memoizedProps; if (Eo(i, r) && e.ref === t.ref)
            if (Te = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (Te = !0);
            else return t.lanes = e.lanes, Dt(e, t, o) } return ql(e, t, n, r, o) }

function ig(e, t, n) { var r = t.pendingProps,
        o = r.children,
        i = e !== null ? e.memoizedState : null; if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Y(or, je), je |= n;
        else { if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Y(or, je), je |= e, null;
            t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Y(or, je), je |= r } else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Y(or, je), je |= r; return ke(e, t, o, n), t.child }

function sg(e, t) { var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152) }

function ql(e, t, n, r, o) { var i = De(n) ? Ln : Ce.current; return i = vr(t, i), pr(t, o), n = Oc(e, t, n, r, i, o), r = Pc(), e !== null && !Te ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Dt(e, t, o)) : (Z && r && hc(t), t.flags |= 1, ke(e, t, n, o), t.child) }

function Fd(e, t, n, r, o) { if (De(n)) { var i = !0;
        ws(t) } else i = !1; if (pr(t, o), t.stateNode === null) Yi(e, t), Im(t, n, r), Ql(t, n, r, o), r = !0;
    else if (e === null) { var s = t.stateNode,
            a = t.memoizedProps;
        s.props = a; var l = s.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? u = Je(u) : (u = De(n) ? Ln : Ce.current, u = vr(t, u)); var c = n.getDerivedStateFromProps,
            d = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        d || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && Rd(t, s, r, u), Bt = !1; var f = t.memoizedState;
        s.state = f, _s(t, r, s, o), l = t.memoizedState, a !== r || f !== l || Ie.current || Bt ? (typeof c == "function" && (Hl(t, n, c, r), l = t.memoizedState), (a = Bt || bd(t, n, a, r, f, l, u)) ? (d || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = u, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1) } else { s = t.stateNode, Nm(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : tt(t.type, a), s.props = u, d = t.pendingProps, f = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = Je(l) : (l = De(n) ? Ln : Ce.current, l = vr(t, l)); var g = n.getDerivedStateFromProps;
        (c = typeof g == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== d || f !== l) && Rd(t, s, r, l), Bt = !1, f = t.memoizedState, s.state = f, _s(t, r, s, o); var w = t.memoizedState;
        a !== d || f !== w || Ie.current || Bt ? (typeof g == "function" && (Hl(t, n, g, r), w = t.memoizedState), (u = Bt || bd(t, n, u, r, f, w, l) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, w, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, w, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), s.props = r, s.state = w, s.context = l, r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1) } return Gl(e, t, n, r, i, o) }

function Gl(e, t, n, r, o, i) { sg(e, t); var s = (t.flags & 128) !== 0; if (!r && !s) return o && Cd(t, n, !1), Dt(e, t, i);
    r = t.stateNode, nS.current = t; var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render(); return t.flags |= 1, e !== null && s ? (t.child = wr(t, e.child, null, i), t.child = wr(t, null, a, i)) : ke(e, t, a, i), t.memoizedState = r.state, o && Cd(t, n, !0), t.child }

function ag(e) { var t = e.stateNode;
    t.pendingContext ? Ed(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ed(e, t.context, !1), Ec(e, t.containerInfo) }

function $d(e, t, n, r, o) { return yr(), gc(o), t.flags |= 256, ke(e, t, n, r), t.child }
var Yl = { dehydrated: null, treeContext: null, retryLane: 0 };

function Jl(e) { return { baseLanes: e, cachePool: null, transitions: null } }

function lg(e, t, n) { var r = t.pendingProps,
        o = te.current,
        i = !1,
        s = (t.flags & 128) !== 0,
        a; if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), Y(te, o & 1), e === null) return Wl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = la(s, r, 0, null), e = Pn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Jl(n), t.memoizedState = Yl, e) : Lc(t, s)); if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null)) return rS(e, t, s, r, a, o, n); if (i) { i = r.fallback, s = t.mode, o = e.child, a = o.sibling; var l = { mode: "hidden", children: r.children }; return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = sn(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? i = sn(a, i) : (i = Pn(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? Jl(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = Yl, r } return i = e.child, e = i.sibling, r = sn(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r }

function Lc(e, t) { return t = la({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t }

function ki(e, t, n, r) { return r !== null && gc(r), wr(t, e.child, null, n), e = Lc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e }

function rS(e, t, n, r, o, i, s) { if (n) return t.flags & 256 ? (t.flags &= -257, r = qa(Error(I(422))), ki(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = la({ mode: "visible", children: r.children }, o, 0, null), i = Pn(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && wr(t, e.child, null, s), t.child.memoizedState = Jl(s), t.memoizedState = Yl, i); if (!(t.mode & 1)) return ki(e, t, s, null); if (o.data === "$!") { if (r = o.nextSibling && o.nextSibling.dataset, r) var a = r.dgst; return r = a, i = Error(I(419)), r = qa(i, r, void 0), ki(e, t, s, r) } if (a = (s & e.childLanes) !== 0, Te || a) { if (r = de, r !== null) { switch (s & -s) {
                case 4:
                    o = 2; break;
                case 16:
                    o = 8; break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    o = 32; break;
                case 536870912:
                    o = 268435456; break;
                default:
                    o = 0 } o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, It(e, o), lt(r, e, o, -1)) } return jc(), r = qa(Error(I(421))), ki(e, t, s, r) } return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = gS.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Ae = tn(o.nextSibling), Fe = t, Z = !0, it = null, e !== null && (Qe[Ke++] = bt, Qe[Ke++] = Rt, Qe[Ke++] = Nn, bt = e.id, Rt = e.overflow, Nn = t), t = Lc(t, r.children), t.flags |= 4096, t) }

function Ud(e, t, n) { e.lanes |= t; var r = e.alternate;
    r !== null && (r.lanes |= t), Vl(e.return, t, n) }

function Ga(e, t, n, r, o) { var i = e.memoizedState;
    i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o) }

function ug(e, t, n) { var r = t.pendingProps,
        o = r.revealOrder,
        i = r.tail; if (ke(e, t, r.children, n), r = te.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else { if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) { if (e.tag === 13) e.memoizedState !== null && Ud(e, n, t);
            else if (e.tag === 19) Ud(e, n, t);
            else if (e.child !== null) { e.child.return = e, e = e.child; continue } if (e === t) break e; for (; e.sibling === null;) { if (e.return === null || e.return === t) break e;
                e = e.return } e.sibling.return = e.return, e = e.sibling } r &= 1 } if (Y(te, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (o) {
        case "forwards":
            for (n = t.child, o = null; n !== null;) e = n.alternate, e !== null && ks(e) === null && (o = n), n = n.sibling;
            n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Ga(t, !1, o, n, i); break;
        case "backwards":
            for (n = null, o = t.child, t.child = null; o !== null;) { if (e = o.alternate, e !== null && ks(e) === null) { t.child = o; break } e = o.sibling, o.sibling = n, n = o, o = e } Ga(t, !0, n, null, i); break;
        case "together":
            Ga(t, !1, null, null, void 0); break;
        default:
            t.memoizedState = null }
    return t.child }

function Yi(e, t) {!(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2) }

function Dt(e, t, n) { if (e !== null && (t.dependencies = e.dependencies), In |= t.lanes, !(n & t.childLanes)) return null; if (e !== null && t.child !== e.child) throw Error(I(153)); if (t.child !== null) { for (e = t.child, n = sn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = sn(e, e.pendingProps), n.return = t;
        n.sibling = null } return t.child }

function oS(e, t, n) { switch (t.tag) {
        case 3:
            ag(t), yr(); break;
        case 5:
            jm(t); break;
        case 1:
            De(t.type) && ws(t); break;
        case 4:
            Ec(t, t.stateNode.containerInfo); break;
        case 10:
            var r = t.type._context,
                o = t.memoizedProps.value;
            Y(Es, r._currentValue), r._currentValue = o; break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (Y(te, te.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? lg(e, t, n) : (Y(te, te.current & 1), e = Dt(e, t, n), e !== null ? e.sibling : null);
            Y(te, te.current & 1); break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) { if (r) return ug(e, t, n);
                t.flags |= 128 } if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Y(te, te.current), r) break; return null;
        case 22:
        case 23:
            return t.lanes = 0, ig(e, t, n) } return Dt(e, t, n) }
var cg, Xl, fg, dg;
cg = function(e, t) { for (var n = t.child; n !== null;) { if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) { n.child.return = n, n = n.child; continue } if (n === t) break; for (; n.sibling === null;) { if (n.return === null || n.return === t) return;
            n = n.return } n.sibling.return = n.return, n = n.sibling } };
Xl = function() {};
fg = function(e, t, n, r) { var o = e.memoizedProps; if (o !== r) { e = t.stateNode, _n(Ct.current); var i = null; switch (n) {
            case "input":
                o = Sl(e, o), r = Sl(e, r), i = []; break;
            case "select":
                o = re({}, o, { value: void 0 }), r = re({}, r, { value: void 0 }), i = []; break;
            case "textarea":
                o = Cl(e, o), r = Cl(e, r), i = []; break;
            default:
                typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = vs) } kl(n, r); var s;
        n = null; for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") { var a = o[u]; for (s in a) a.hasOwnProperty(s) && (n || (n = {}), n[s] = "") } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (mo.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null)); for (u in r) { var l = r[u]; if (a = o != null ? o[u] : void 0, r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) { for (s in a) !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = ""); for (s in l) l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), n[s] = l[s]) } else n || (i || (i = []), i.push(u, n)), n = l;
            else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (mo.hasOwnProperty(u) ? (l != null && u === "onScroll" && J("scroll", e), i || a === l || (i = [])) : (i = i || []).push(u, l)) } n && (i = i || []).push("style", n); var u = i;
        (t.updateQueue = u) && (t.flags |= 4) } };
dg = function(e, t, n, r) { n !== r && (t.flags |= 4) };

function Qr(e, t) { if (!Z) switch (e.tailMode) {
        case "hidden":
            t = e.tail; for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null; break;
        case "collapsed":
            n = e.tail; for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null } }

function Se(e) { var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0; if (t)
        for (var o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
    else
        for (o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling; return e.subtreeFlags |= r, e.childLanes = n, t }

function iS(e, t, n) { var r = t.pendingProps; switch (mc(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Se(t), null;
        case 1:
            return De(t.type) && ys(), Se(t), null;
        case 3:
            return r = t.stateNode, Sr(), X(Ie), X(Ce), _c(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ci(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, it !== null && (su(it), it = null))), Xl(e, t), Se(t), null;
        case 5:
            Cc(t); var o = _n(Po.current); if (n = t.type, e !== null && t.stateNode != null) fg(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else { if (!r) { if (t.stateNode === null) throw Error(I(166)); return Se(t), null } if (e = _n(Ct.current), Ci(t)) { r = t.stateNode, n = t.type; var i = t.memoizedProps; switch (r[St] = t, r[ko] = i, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            J("cancel", r), J("close", r); break;
                        case "iframe":
                        case "object":
                        case "embed":
                            J("load", r); break;
                        case "video":
                        case "audio":
                            for (o = 0; o < Xr.length; o++) J(Xr[o], r); break;
                        case "source":
                            J("error", r); break;
                        case "img":
                        case "image":
                        case "link":
                            J("error", r), J("load", r); break;
                        case "details":
                            J("toggle", r); break;
                        case "input":
                            Gf(r, i), J("invalid", r); break;
                        case "select":
                            r._wrapperState = { wasMultiple: !!i.multiple }, J("invalid", r); break;
                        case "textarea":
                            Jf(r, i), J("invalid", r) } kl(n, i), o = null; for (var s in i)
                        if (i.hasOwnProperty(s)) { var a = i[s];
                            s === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && Ei(r.textContent, a, e), o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && Ei(r.textContent, a, e), o = ["children", "" + a]) : mo.hasOwnProperty(s) && a != null && s === "onScroll" && J("scroll", r) } switch (n) {
                        case "input":
                            hi(r), Yf(r, i, !0); break;
                        case "textarea":
                            hi(r), Xf(r); break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = vs) } r = o, t.updateQueue = r, r !== null && (t.flags |= 4) } else { s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = $h(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[St] = t, e[ko] = r, cg(e, t, !1, !1), t.stateNode = e;
                    e: { switch (s = Ol(n, r), n) {
                            case "dialog":
                                J("cancel", e), J("close", e), o = r; break;
                            case "iframe":
                            case "object":
                            case "embed":
                                J("load", e), o = r; break;
                            case "video":
                            case "audio":
                                for (o = 0; o < Xr.length; o++) J(Xr[o], e);
                                o = r; break;
                            case "source":
                                J("error", e), o = r; break;
                            case "img":
                            case "image":
                            case "link":
                                J("error", e), J("load", e), o = r; break;
                            case "details":
                                J("toggle", e), o = r; break;
                            case "input":
                                Gf(e, r), o = Sl(e, r), J("invalid", e); break;
                            case "option":
                                o = r; break;
                            case "select":
                                e._wrapperState = { wasMultiple: !!r.multiple }, o = re({}, r, { value: void 0 }), J("invalid", e); break;
                            case "textarea":
                                Jf(e, r), o = Cl(e, r), J("invalid", e); break;
                            default:
                                o = r } kl(n, o), a = o; for (i in a)
                            if (a.hasOwnProperty(i)) { var l = a[i];
                                i === "style" ? Bh(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Uh(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && go(e, l) : typeof l == "number" && go(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (mo.hasOwnProperty(i) ? l != null && i === "onScroll" && J("scroll", e) : l != null && ec(e, i, l, s)) } switch (n) {
                            case "input":
                                hi(e), Yf(e, r, !1); break;
                            case "textarea":
                                hi(e), Xf(e); break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + un(r.value)); break;
                            case "select":
                                e.multiple = !!r.multiple, i = r.value, i != null ? ur(e, !!r.multiple, i, !1) : r.defaultValue != null && ur(e, !!r.multiple, r.defaultValue, !0); break;
                            default:
                                typeof o.onClick == "function" && (e.onclick = vs) } switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus; break e;
                            case "img":
                                r = !0; break e;
                            default:
                                r = !1 } } r && (t.flags |= 4) } t.ref !== null && (t.flags |= 512, t.flags |= 2097152) } return Se(t), null;
        case 6:
            if (e && t.stateNode != null) dg(e, t, e.memoizedProps, r);
            else { if (typeof r != "string" && t.stateNode === null) throw Error(I(166)); if (n = _n(Po.current), _n(Ct.current), Ci(t)) { if (r = t.stateNode, n = t.memoizedProps, r[St] = t, (i = r.nodeValue !== n) && (e = Fe, e !== null)) switch (e.tag) {
                        case 3:
                            Ei(r.nodeValue, n, (e.mode & 1) !== 0); break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && Ei(r.nodeValue, n, (e.mode & 1) !== 0) } i && (t.flags |= 4) } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[St] = t, t.stateNode = r } return Se(t), null;
        case 13:
            if (X(te), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) { if (Z && Ae !== null && t.mode & 1 && !(t.flags & 128)) Rm(), yr(), t.flags |= 98560, i = !1;
                else if (i = Ci(t), r !== null && r.dehydrated !== null) { if (e === null) { if (!i) throw Error(I(318)); if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(I(317));
                        i[St] = t } else yr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    Se(t), i = !1 } else it !== null && (su(it), it = null), i = !0; if (!i) return t.flags & 65536 ? t : null } return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || te.current & 1 ? ce === 0 && (ce = 3) : jc())), t.updateQueue !== null && (t.flags |= 4), Se(t), null);
        case 4:
            return Sr(), Xl(e, t), e === null && Co(t.stateNode.containerInfo), Se(t), null;
        case 10:
            return wc(t.type._context), Se(t), null;
        case 17:
            return De(t.type) && ys(), Se(t), null;
        case 19:
            if (X(te), i = t.memoizedState, i === null) return Se(t), null; if (r = (t.flags & 128) !== 0, s = i.rendering, s === null)
                if (r) Qr(i, !1);
                else { if (ce !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) { if (s = ks(e), s !== null) { for (t.flags |= 128, Qr(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling; return Y(te, te.current & 1 | 2), t.child } e = e.sibling } i.tail !== null && se() > Er && (t.flags |= 128, r = !0, Qr(i, !1), t.lanes = 4194304) } else { if (!r)
                    if (e = ks(s), e !== null) { if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Qr(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !Z) return Se(t), null } else 2 * se() - i.renderingStartTime > Er && n !== 1073741824 && (t.flags |= 128, r = !0, Qr(i, !1), t.lanes = 4194304);
                i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s) } return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = se(), t.sibling = null, n = te.current, Y(te, r ? n & 1 | 2 : n & 1), t) : (Se(t), null);
        case 22:
        case 23:
            return Mc(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? je & 1073741824 && (Se(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Se(t), null;
        case 24:
            return null;
        case 25:
            return null } throw Error(I(156, t.tag)) }

function sS(e, t) { switch (mc(t), t.tag) {
        case 1:
            return De(t.type) && ys(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return Sr(), X(Ie), X(Ce), _c(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return Cc(t), null;
        case 13:
            if (X(te), e = t.memoizedState, e !== null && e.dehydrated !== null) { if (t.alternate === null) throw Error(I(340));
                yr() } return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return X(te), null;
        case 4:
            return Sr(), null;
        case 10:
            return wc(t.type._context), null;
        case 22:
        case 23:
            return Mc(), null;
        case 24:
            return null;
        default:
            return null } }
var Oi = !1,
    Ee = !1,
    aS = typeof WeakSet == "function" ? WeakSet : Set,
    $ = null;

function rr(e, t) { var n = e.ref; if (n !== null)
        if (typeof n == "function") try { n(null) } catch (r) { oe(e, t, r) } else n.current = null }

function Zl(e, t, n) { try { n() } catch (r) { oe(e, t, r) } }
var zd = !1;

function lS(e, t) { if (jl = hs, e = gm(), pc(e)) { if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
        else e: { n = (n = e.ownerDocument) && n.defaultView || window; var r = n.getSelection && n.getSelection(); if (r && r.rangeCount !== 0) { n = r.anchorNode; var o = r.anchorOffset,
                    i = r.focusNode;
                r = r.focusOffset; try { n.nodeType, i.nodeType } catch { n = null; break e } var s = 0,
                    a = -1,
                    l = -1,
                    u = 0,
                    c = 0,
                    d = e,
                    f = null;
                t: for (;;) { for (var g; d !== n || o !== 0 && d.nodeType !== 3 || (a = s + o), d !== i || r !== 0 && d.nodeType !== 3 || (l = s + r), d.nodeType === 3 && (s += d.nodeValue.length), (g = d.firstChild) !== null;) f = d, d = g; for (;;) { if (d === e) break t; if (f === n && ++u === o && (a = s), f === i && ++c === r && (l = s), (g = d.nextSibling) !== null) break;
                        d = f, f = d.parentNode } d = g } n = a === -1 || l === -1 ? null : { start: a, end: l } } else n = null } n = n || { start: 0, end: 0 } } else n = null; for (Al = { focusedElem: e, selectionRange: n }, hs = !1, $ = t; $ !== null;)
        if (t = $, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, $ = e;
        else
            for (; $ !== null;) { t = $; try { var w = t.alternate; if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (w !== null) { var S = w.memoizedProps,
                                    _ = w.memoizedState,
                                    m = t.stateNode,
                                    p = m.getSnapshotBeforeUpdate(t.elementType === t.type ? S : tt(t.type, S), _);
                                m.__reactInternalSnapshotBeforeUpdate = p } break;
                        case 3:
                            var h = t.stateNode.containerInfo;
                            h.nodeType === 1 ? h.textContent = "" : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement); break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(I(163)) } } catch (E) { oe(t, t.return, E) } if (e = t.sibling, e !== null) { e.return = t.return, $ = e; break } $ = t.return }
    return w = zd, zd = !1, w }

function ao(e, t, n) { var r = t.updateQueue; if (r = r !== null ? r.lastEffect : null, r !== null) { var o = r = r.next;
        do { if ((o.tag & e) === e) { var i = o.destroy;
                o.destroy = void 0, i !== void 0 && Zl(t, n, i) } o = o.next } while (o !== r) } }

function sa(e, t) { if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) { var n = t = t.next;
        do { if ((n.tag & e) === e) { var r = n.create;
                n.destroy = r() } n = n.next } while (n !== t) } }

function eu(e) { var t = e.ref; if (t !== null) { var n = e.stateNode; switch (e.tag) {
            case 5:
                e = n; break;
            default:
                e = n } typeof t == "function" ? t(e) : t.current = e } }

function pg(e) { var t = e.alternate;
    t !== null && (e.alternate = null, pg(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[St], delete t[ko], delete t[Ul], delete t[Vw], delete t[Hw])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null }

function hg(e) { return e.tag === 5 || e.tag === 3 || e.tag === 4 }

function Bd(e) { e: for (;;) { for (; e.sibling === null;) { if (e.return === null || hg(e.return)) return null;
            e = e.return } for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) { if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child } if (!(e.flags & 2)) return e.stateNode } }

function tu(e, t, n) { var r = e.tag; if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = vs));
    else if (r !== 4 && (e = e.child, e !== null))
        for (tu(e, t, n), e = e.sibling; e !== null;) tu(e, t, n), e = e.sibling }

function nu(e, t, n) { var r = e.tag; if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (nu(e, t, n), e = e.sibling; e !== null;) nu(e, t, n), e = e.sibling }
var he = null,
    ot = !1;

function Ft(e, t, n) { for (n = n.child; n !== null;) mg(e, t, n), n = n.sibling }

function mg(e, t, n) { if (Et && typeof Et.onCommitFiberUnmount == "function") try { Et.onCommitFiberUnmount(Xs, n) } catch {}
    switch (n.tag) {
        case 5:
            Ee || rr(n, t);
        case 6:
            var r = he,
                o = ot;
            he = null, Ft(e, t, n), he = r, ot = o, he !== null && (ot ? (e = he, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : he.removeChild(n.stateNode)); break;
        case 18:
            he !== null && (ot ? (e = he, n = n.stateNode, e.nodeType === 8 ? Ba(e.parentNode, n) : e.nodeType === 1 && Ba(e, n), So(e)) : Ba(he, n.stateNode)); break;
        case 4:
            r = he, o = ot, he = n.stateNode.containerInfo, ot = !0, Ft(e, t, n), he = r, ot = o; break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Ee && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) { o = r = r.next;
                do { var i = o,
                        s = i.destroy;
                    i = i.tag, s !== void 0 && (i & 2 || i & 4) && Zl(n, t, s), o = o.next } while (o !== r) } Ft(e, t, n); break;
        case 1:
            if (!Ee && (rr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try { r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount() } catch (a) { oe(n, t, a) } Ft(e, t, n); break;
        case 21:
            Ft(e, t, n); break;
        case 22:
            n.mode & 1 ? (Ee = (r = Ee) || n.memoizedState !== null, Ft(e, t, n), Ee = r) : Ft(e, t, n); break;
        default:
            Ft(e, t, n) } }

function Wd(e) { var t = e.updateQueue; if (t !== null) { e.updateQueue = null; var n = e.stateNode;
        n === null && (n = e.stateNode = new aS), t.forEach(function(r) { var o = vS.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(o, o)) }) } }

function et(e, t) { var n = t.deletions; if (n !== null)
        for (var r = 0; r < n.length; r++) { var o = n[r]; try { var i = e,
                    s = t,
                    a = s;
                e: for (; a !== null;) { switch (a.tag) {
                        case 5:
                            he = a.stateNode, ot = !1; break e;
                        case 3:
                            he = a.stateNode.containerInfo, ot = !0; break e;
                        case 4:
                            he = a.stateNode.containerInfo, ot = !0; break e } a = a.return }
                if (he === null) throw Error(I(160));
                mg(i, s, o), he = null, ot = !1; var l = o.alternate;
                l !== null && (l.return = null), o.return = null } catch (u) { oe(o, t, u) } }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) gg(t, e), t = t.sibling }

function gg(e, t) { var n = e.alternate,
        r = e.flags; switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (et(t, e), gt(e), r & 4) { try { ao(3, e, e.return), sa(3, e) } catch (S) { oe(e, e.return, S) } try { ao(5, e, e.return) } catch (S) { oe(e, e.return, S) } } break;
        case 1:
            et(t, e), gt(e), r & 512 && n !== null && rr(n, n.return); break;
        case 5:
            if (et(t, e), gt(e), r & 512 && n !== null && rr(n, n.return), e.flags & 32) { var o = e.stateNode; try { go(o, "") } catch (S) { oe(e, e.return, S) } } if (r & 4 && (o = e.stateNode, o != null)) { var i = e.memoizedProps,
                    s = n !== null ? n.memoizedProps : i,
                    a = e.type,
                    l = e.updateQueue; if (e.updateQueue = null, l !== null) try { a === "input" && i.type === "radio" && i.name != null && Ah(o, i), Ol(a, s); var u = Ol(a, i); for (s = 0; s < l.length; s += 2) { var c = l[s],
                            d = l[s + 1];
                        c === "style" ? Bh(o, d) : c === "dangerouslySetInnerHTML" ? Uh(o, d) : c === "children" ? go(o, d) : ec(o, c, d, u) } switch (a) {
                        case "input":
                            xl(o, i); break;
                        case "textarea":
                            Fh(o, i); break;
                        case "select":
                            var f = o._wrapperState.wasMultiple;
                            o._wrapperState.wasMultiple = !!i.multiple; var g = i.value;
                            g != null ? ur(o, !!i.multiple, g, !1) : f !== !!i.multiple && (i.defaultValue != null ? ur(o, !!i.multiple, i.defaultValue, !0) : ur(o, !!i.multiple, i.multiple ? [] : "", !1)) } o[ko] = i } catch (S) { oe(e, e.return, S) } } break;
        case 6:
            if (et(t, e), gt(e), r & 4) { if (e.stateNode === null) throw Error(I(162));
                o = e.stateNode, i = e.memoizedProps; try { o.nodeValue = i } catch (S) { oe(e, e.return, S) } } break;
        case 3:
            if (et(t, e), gt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try { So(t.containerInfo) } catch (S) { oe(e, e.return, S) }
            break;
        case 4:
            et(t, e), gt(e); break;
        case 13:
            et(t, e), gt(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Ic = se())), r & 4 && Wd(e); break;
        case 22:
            if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ee = (u = Ee) || c, et(t, e), Ee = u) : et(t, e), gt(e), r & 8192) { if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
                    for ($ = e, c = e.child; c !== null;) { for (d = $ = c; $ !== null;) { switch (f = $, g = f.child, f.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    ao(4, f, f.return); break;
                                case 1:
                                    rr(f, f.return); var w = f.stateNode; if (typeof w.componentWillUnmount == "function") { r = f, n = f.return; try { t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount() } catch (S) { oe(r, n, S) } } break;
                                case 5:
                                    rr(f, f.return); break;
                                case 22:
                                    if (f.memoizedState !== null) { Hd(d); continue } } g !== null ? (g.return = f, $ = g) : Hd(d) } c = c.sibling } e: for (c = null, d = e;;) { if (d.tag === 5) { if (c === null) { c = d; try { o = d.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = d.stateNode, l = d.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = zh("display", s)) } catch (S) { oe(e, e.return, S) } } } else if (d.tag === 6) { if (c === null) try { d.stateNode.nodeValue = u ? "" : d.memoizedProps } catch (S) { oe(e, e.return, S) } } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) { d.child.return = d, d = d.child; continue } if (d === e) break e; for (; d.sibling === null;) { if (d.return === null || d.return === e) break e;
                            c === d && (c = null), d = d.return } c === d && (c = null), d.sibling.return = d.return, d = d.sibling } } break;
        case 19:
            et(t, e), gt(e), r & 4 && Wd(e); break;
        case 21:
            break;
        default:
            et(t, e), gt(e) } }

function gt(e) { var t = e.flags; if (t & 2) { try { e: { for (var n = e.return; n !== null;) { if (hg(n)) { var r = n; break e } n = n.return } throw Error(I(160)) } switch (r.tag) {
                case 5:
                    var o = r.stateNode;
                    r.flags & 32 && (go(o, ""), r.flags &= -33); var i = Bd(e);
                    nu(e, i, o); break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo,
                        a = Bd(e);
                    tu(e, a, s); break;
                default:
                    throw Error(I(161)) } } catch (l) { oe(e, e.return, l) } e.flags &= -3 } t & 4096 && (e.flags &= -4097) }

function uS(e, t, n) { $ = e, vg(e) }

function vg(e, t, n) { for (var r = (e.mode & 1) !== 0; $ !== null;) { var o = $,
            i = o.child; if (o.tag === 22 && r) { var s = o.memoizedState !== null || Oi; if (!s) { var a = o.alternate,
                    l = a !== null && a.memoizedState !== null || Ee;
                a = Oi; var u = Ee; if (Oi = s, (Ee = l) && !u)
                    for ($ = o; $ !== null;) s = $, l = s.child, s.tag === 22 && s.memoizedState !== null ? Qd(o) : l !== null ? (l.return = s, $ = l) : Qd(o); for (; i !== null;) $ = i, vg(i), i = i.sibling;
                $ = o, Oi = a, Ee = u } Vd(e) } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, $ = i) : Vd(e) } }

function Vd(e) { for (; $ !== null;) { var t = $; if (t.flags & 8772) { var n = t.alternate; try { if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Ee || sa(5, t); break;
                    case 1:
                        var r = t.stateNode; if (t.flags & 4 && !Ee)
                            if (n === null) r.componentDidMount();
                            else { var o = t.elementType === t.type ? n.memoizedProps : tt(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate) } var i = t.updateQueue;
                        i !== null && Pd(t, i, r); break;
                    case 3:
                        var s = t.updateQueue; if (s !== null) { if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode; break;
                                case 1:
                                    n = t.child.stateNode } Pd(t, s, n) } break;
                    case 5:
                        var a = t.stateNode; if (n === null && t.flags & 4) { n = a; var l = t.memoizedProps; switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    l.autoFocus && n.focus(); break;
                                case "img":
                                    l.src && (n.src = l.src) } } break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) { var u = t.alternate; if (u !== null) { var c = u.memoizedState; if (c !== null) { var d = c.dehydrated;
                                    d !== null && So(d) } } } break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(I(163)) } Ee || t.flags & 512 && eu(t) } catch (f) { oe(t, t.return, f) } } if (t === e) { $ = null; break } if (n = t.sibling, n !== null) { n.return = t.return, $ = n; break } $ = t.return } }

function Hd(e) { for (; $ !== null;) { var t = $; if (t === e) { $ = null; break } var n = t.sibling; if (n !== null) { n.return = t.return, $ = n; break } $ = t.return } }

function Qd(e) { for (; $ !== null;) { var t = $; try { switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return; try { sa(4, t) } catch (l) { oe(t, n, l) } break;
                case 1:
                    var r = t.stateNode; if (typeof r.componentDidMount == "function") { var o = t.return; try { r.componentDidMount() } catch (l) { oe(t, o, l) } } var i = t.return; try { eu(t) } catch (l) { oe(t, i, l) } break;
                case 5:
                    var s = t.return; try { eu(t) } catch (l) { oe(t, s, l) } } } catch (l) { oe(t, t.return, l) } if (t === e) { $ = null; break } var a = t.sibling; if (a !== null) { a.return = t.return, $ = a; break } $ = t.return } }
var cS = Math.ceil,
    bs = jt.ReactCurrentDispatcher,
    Nc = jt.ReactCurrentOwner,
    Ye = jt.ReactCurrentBatchConfig,
    V = 0,
    de = null,
    le = null,
    me = 0,
    je = 0,
    or = pn(0),
    ce = 0,
    No = null,
    In = 0,
    aa = 0,
    Tc = 0,
    lo = null,
    Ne = null,
    Ic = 0,
    Er = 1 / 0,
    Ot = null,
    Rs = !1,
    ru = null,
    rn = null,
    Pi = !1,
    qt = null,
    Ls = 0,
    uo = 0,
    ou = null,
    Ji = -1,
    Xi = 0;

function Oe() { return V & 6 ? se() : Ji !== -1 ? Ji : Ji = se() }

function on(e) { return e.mode & 1 ? V & 2 && me !== 0 ? me & -me : Kw.transition !== null ? (Xi === 0 && (Xi = em()), Xi) : (e = K, e !== 0 || (e = window.event, e = e === void 0 ? 16 : am(e.type)), e) : 1 }

function lt(e, t, n, r) { if (50 < uo) throw uo = 0, ou = null, Error(I(185));
    Wo(e, n, r), (!(V & 2) || e !== de) && (e === de && (!(V & 2) && (aa |= n), ce === 4 && Ht(e, me)), Me(e, r), n === 1 && V === 0 && !(t.mode & 1) && (Er = se() + 500, ra && hn())) }

function Me(e, t) { var n = e.callbackNode;
    K1(e, t); var r = ps(e, e === de ? me : 0); if (r === 0) n !== null && td(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) { if (n != null && td(n), t === 1) e.tag === 0 ? Qw(Kd.bind(null, e)) : Om(Kd.bind(null, e)), Bw(function() {!(V & 6) && hn() }), n = null;
        else { switch (tm(r)) {
                case 1:
                    n = ic; break;
                case 4:
                    n = Xh; break;
                case 16:
                    n = ds; break;
                case 536870912:
                    n = Zh; break;
                default:
                    n = ds } n = kg(n, yg.bind(null, e)) } e.callbackPriority = t, e.callbackNode = n } }

function yg(e, t) { if (Ji = -1, Xi = 0, V & 6) throw Error(I(327)); var n = e.callbackNode; if (hr() && e.callbackNode !== n) return null; var r = ps(e, e === de ? me : 0); if (r === 0) return null; if (r & 30 || r & e.expiredLanes || t) t = Ns(e, r);
    else { t = r; var o = V;
        V |= 2; var i = Sg();
        (de !== e || me !== t) && (Ot = null, Er = se() + 500, On(e, t));
        do try { pS(); break } catch (a) { wg(e, a) }
        while (1);
        yc(), bs.current = i, V = o, le !== null ? t = 0 : (de = null, me = 0, t = ce) } if (t !== 0) { if (t === 2 && (o = Nl(e), o !== 0 && (r = o, t = iu(e, o))), t === 1) throw n = No, On(e, 0), Ht(e, r), Me(e, se()), n; if (t === 6) Ht(e, r);
        else { if (o = e.current.alternate, !(r & 30) && !fS(o) && (t = Ns(e, r), t === 2 && (i = Nl(e), i !== 0 && (r = i, t = iu(e, i))), t === 1)) throw n = No, On(e, 0), Ht(e, r), Me(e, se()), n; switch (e.finishedWork = o, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(I(345));
                case 2:
                    wn(e, Ne, Ot); break;
                case 3:
                    if (Ht(e, r), (r & 130023424) === r && (t = Ic + 500 - se(), 10 < t)) { if (ps(e, 0) !== 0) break; if (o = e.suspendedLanes, (o & r) !== r) { Oe(), e.pingedLanes |= e.suspendedLanes & o; break } e.timeoutHandle = $l(wn.bind(null, e, Ne, Ot), t); break } wn(e, Ne, Ot); break;
                case 4:
                    if (Ht(e, r), (r & 4194240) === r) break; for (t = e.eventTimes, o = -1; 0 < r;) { var s = 31 - at(r);
                        i = 1 << s, s = t[s], s > o && (o = s), r &= ~i } if (r = o, r = se() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * cS(r / 1960)) - r, 10 < r) { e.timeoutHandle = $l(wn.bind(null, e, Ne, Ot), r); break } wn(e, Ne, Ot); break;
                case 5:
                    wn(e, Ne, Ot); break;
                default:
                    throw Error(I(329)) } } } return Me(e, se()), e.callbackNode === n ? yg.bind(null, e) : null }

function iu(e, t) { var n = lo; return e.current.memoizedState.isDehydrated && (On(e, t).flags |= 256), e = Ns(e, t), e !== 2 && (t = Ne, Ne = n, t !== null && su(t)), e }

function su(e) { Ne === null ? Ne = e : Ne.push.apply(Ne, e) }

function fS(e) { for (var t = e;;) { if (t.flags & 16384) { var n = t.updateQueue; if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) { var o = n[r],
                        i = o.getSnapshot;
                    o = o.value; try { if (!ft(i(), o)) return !1 } catch { return !1 } } } if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else { if (t === e) break; for (; t.sibling === null;) { if (t.return === null || t.return === e) return !0;
                t = t.return } t.sibling.return = t.return, t = t.sibling } } return !0 }

function Ht(e, t) { for (t &= ~Tc, t &= ~aa, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) { var n = 31 - at(t),
            r = 1 << n;
        e[n] = -1, t &= ~r } }

function Kd(e) { if (V & 6) throw Error(I(327));
    hr(); var t = ps(e, 0); if (!(t & 1)) return Me(e, se()), null; var n = Ns(e, t); if (e.tag !== 0 && n === 2) { var r = Nl(e);
        r !== 0 && (t = r, n = iu(e, r)) } if (n === 1) throw n = No, On(e, 0), Ht(e, t), Me(e, se()), n; if (n === 6) throw Error(I(345)); return e.finishedWork = e.current.alternate, e.finishedLanes = t, wn(e, Ne, Ot), Me(e, se()), null }

function Dc(e, t) { var n = V;
    V |= 1; try { return e(t) } finally { V = n, V === 0 && (Er = se() + 500, ra && hn()) } }

function Dn(e) { qt !== null && qt.tag === 0 && !(V & 6) && hr(); var t = V;
    V |= 1; var n = Ye.transition,
        r = K; try { if (Ye.transition = null, K = 1, e) return e() } finally { K = r, Ye.transition = n, V = t, !(V & 6) && hn() } }

function Mc() { je = or.current, X(or) }

function On(e, t) { e.finishedWork = null, e.finishedLanes = 0; var n = e.timeoutHandle; if (n !== -1 && (e.timeoutHandle = -1, zw(n)), le !== null)
        for (n = le.return; n !== null;) { var r = n; switch (mc(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && ys(); break;
                case 3:
                    Sr(), X(Ie), X(Ce), _c(); break;
                case 5:
                    Cc(r); break;
                case 4:
                    Sr(); break;
                case 13:
                    X(te); break;
                case 19:
                    X(te); break;
                case 10:
                    wc(r.type._context); break;
                case 22:
                case 23:
                    Mc() } n = n.return }
    if (de = e, le = e = sn(e.current, null), me = je = t, ce = 0, No = null, Tc = aa = In = 0, Ne = lo = null, Cn !== null) { for (t = 0; t < Cn.length; t++)
            if (n = Cn[t], r = n.interleaved, r !== null) { n.interleaved = null; var o = r.next,
                    i = n.pending; if (i !== null) { var s = i.next;
                    i.next = o, r.next = s } n.pending = r } Cn = null } return e }

function wg(e, t) { do { var n = le; try { if (yc(), qi.current = Ps, Os) { for (var r = ne.memoizedState; r !== null;) { var o = r.queue;
                    o !== null && (o.pending = null), r = r.next } Os = !1 } if (Tn = 0, fe = ue = ne = null, so = !1, bo = 0, Nc.current = null, n === null || n.return === null) { ce = 1, No = t, le = null; break } e: { var i = e,
                    s = n.return,
                    a = n,
                    l = t; if (t = me, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") { var u = l,
                        c = a,
                        d = c.tag; if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) { var f = c.alternate;
                        f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null) } var g = Dd(s); if (g !== null) { g.flags &= -257, Md(g, s, a, i, t), g.mode & 1 && Id(i, u, t), t = g, l = u; var w = t.updateQueue; if (w === null) { var S = new Set;
                            S.add(l), t.updateQueue = S } else w.add(l); break e } else { if (!(t & 1)) { Id(i, u, t), jc(); break e } l = Error(I(426)) } } else if (Z && a.mode & 1) { var _ = Dd(s); if (_ !== null) {!(_.flags & 65536) && (_.flags |= 256), Md(_, s, a, i, t), gc(xr(l, a)); break e } } i = l = xr(l, a), ce !== 4 && (ce = 2), lo === null ? lo = [i] : lo.push(i), i = s;do { switch (i.tag) {
                        case 3:
                            i.flags |= 65536, t &= -t, i.lanes |= t; var m = ng(i, l, t);
                            Od(i, m); break e;
                        case 1:
                            a = l; var p = i.type,
                                h = i.stateNode; if (!(i.flags & 128) && (typeof p.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (rn === null || !rn.has(h)))) { i.flags |= 65536, t &= -t, i.lanes |= t; var E = rg(i, a, t);
                                Od(i, E); break e } } i = i.return } while (i !== null) } Eg(n) } catch (b) { t = b, le === n && n !== null && (le = n = n.return); continue } break } while (1) }

function Sg() { var e = bs.current; return bs.current = Ps, e === null ? Ps : e }

function jc() {
    (ce === 0 || ce === 3 || ce === 2) && (ce = 4), de === null || !(In & 268435455) && !(aa & 268435455) || Ht(de, me) }

function Ns(e, t) { var n = V;
    V |= 2; var r = Sg();
    (de !== e || me !== t) && (Ot = null, On(e, t));
    do try { dS(); break } catch (o) { wg(e, o) }
    while (1);
    if (yc(), V = n, bs.current = r, le !== null) throw Error(I(261)); return de = null, me = 0, ce }

function dS() { for (; le !== null;) xg(le) }

function pS() { for (; le !== null && !F1();) xg(le) }

function xg(e) { var t = _g(e.alternate, e, je);
    e.memoizedProps = e.pendingProps, t === null ? Eg(e) : le = t, Nc.current = null }

function Eg(e) { var t = e;
    do { var n = t.alternate; if (e = t.return, t.flags & 32768) { if (n = sS(n, t), n !== null) { n.flags &= 32767, le = n; return } if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else { ce = 6, le = null; return } } else if (n = iS(n, t, je), n !== null) { le = n; return } if (t = t.sibling, t !== null) { le = t; return } le = t = e } while (t !== null);
    ce === 0 && (ce = 5) }

function wn(e, t, n) { var r = K,
        o = Ye.transition; try { Ye.transition = null, K = 1, hS(e, t, n, r) } finally { Ye.transition = o, K = r } return null }

function hS(e, t, n, r) { do hr(); while (qt !== null); if (V & 6) throw Error(I(327));
    n = e.finishedWork; var o = e.finishedLanes; if (n === null) return null; if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(I(177));
    e.callbackNode = null, e.callbackPriority = 0; var i = n.lanes | n.childLanes; if (q1(e, i), e === de && (le = de = null, me = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Pi || (Pi = !0, kg(ds, function() { return hr(), null })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) { i = Ye.transition, Ye.transition = null; var s = K;
        K = 1; var a = V;
        V |= 4, Nc.current = null, lS(e, n), gg(n, e), Dw(Al), hs = !!jl, Al = jl = null, e.current = n, uS(n), $1(), V = a, K = s, Ye.transition = i } else e.current = n; if (Pi && (Pi = !1, qt = e, Ls = o), i = e.pendingLanes, i === 0 && (rn = null), B1(n.stateNode), Me(e, se()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest }); if (Rs) throw Rs = !1, e = ru, ru = null, e; return Ls & 1 && e.tag !== 0 && hr(), i = e.pendingLanes, i & 1 ? e === ou ? uo++ : (uo = 0, ou = e) : uo = 0, hn(), null }

function hr() { if (qt !== null) { var e = tm(Ls),
            t = Ye.transition,
            n = K; try { if (Ye.transition = null, K = 16 > e ? 16 : e, qt === null) var r = !1;
            else { if (e = qt, qt = null, Ls = 0, V & 6) throw Error(I(331)); var o = V; for (V |= 4, $ = e.current; $ !== null;) { var i = $,
                        s = i.child; if ($.flags & 16) { var a = i.deletions; if (a !== null) { for (var l = 0; l < a.length; l++) { var u = a[l]; for ($ = u; $ !== null;) { var c = $; switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            ao(8, c, i) } var d = c.child; if (d !== null) d.return = c, $ = d;
                                    else
                                        for (; $ !== null;) { c = $; var f = c.sibling,
                                                g = c.return; if (pg(c), c === u) { $ = null; break } if (f !== null) { f.return = g, $ = f; break } $ = g } } } var w = i.alternate; if (w !== null) { var S = w.child; if (S !== null) { w.child = null;
                                    do { var _ = S.sibling;
                                        S.sibling = null, S = _ } while (S !== null) } } $ = i } } if (i.subtreeFlags & 2064 && s !== null) s.return = i, $ = s;
                    else e: for (; $ !== null;) { if (i = $, i.flags & 2048) switch (i.tag) {
                            case 0:
                            case 11:
                            case 15:
                                ao(9, i, i.return) }
                        var m = i.sibling; if (m !== null) { m.return = i.return, $ = m; break e } $ = i.return } } var p = e.current; for ($ = p; $ !== null;) { s = $; var h = s.child; if (s.subtreeFlags & 2064 && h !== null) h.return = s, $ = h;
                    else e: for (s = p; $ !== null;) { if (a = $, a.flags & 2048) try { switch (a.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    sa(9, a) } } catch (b) { oe(a, a.return, b) }
                        if (a === s) { $ = null; break e } var E = a.sibling; if (E !== null) { E.return = a.return, $ = E; break e } $ = a.return } } if (V = o, hn(), Et && typeof Et.onPostCommitFiberRoot == "function") try { Et.onPostCommitFiberRoot(Xs, e) } catch {} r = !0 } return r } finally { K = n, Ye.transition = t } } return !1 }

function qd(e, t, n) { t = xr(n, t), t = ng(e, t, 1), e = nn(e, t, 1), t = Oe(), e !== null && (Wo(e, 1, t), Me(e, t)) }

function oe(e, t, n) { if (e.tag === 3) qd(e, e, n);
    else
        for (; t !== null;) { if (t.tag === 3) { qd(t, e, n); break } else if (t.tag === 1) { var r = t.stateNode; if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (rn === null || !rn.has(r))) { e = xr(n, e), e = rg(t, e, 1), t = nn(t, e, 1), e = Oe(), t !== null && (Wo(t, 1, e), Me(t, e)); break } } t = t.return } }

function mS(e, t, n) { var r = e.pingCache;
    r !== null && r.delete(t), t = Oe(), e.pingedLanes |= e.suspendedLanes & n, de === e && (me & n) === n && (ce === 4 || ce === 3 && (me & 130023424) === me && 500 > se() - Ic ? On(e, 0) : Tc |= n), Me(e, t) }

function Cg(e, t) { t === 0 && (e.mode & 1 ? (t = vi, vi <<= 1, !(vi & 130023424) && (vi = 4194304)) : t = 1); var n = Oe();
    e = It(e, t), e !== null && (Wo(e, t, n), Me(e, n)) }

function gS(e) { var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Cg(e, n) }

function vS(e, t) { var n = 0; switch (e.tag) {
        case 13:
            var r = e.stateNode,
                o = e.memoizedState;
            o !== null && (n = o.retryLane); break;
        case 19:
            r = e.stateNode; break;
        default:
            throw Error(I(314)) } r !== null && r.delete(t), Cg(e, n) }
var _g;
_g = function(e, t, n) { if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ie.current) Te = !0;
        else { if (!(e.lanes & n) && !(t.flags & 128)) return Te = !1, oS(e, t, n);
            Te = !!(e.flags & 131072) } else Te = !1, Z && t.flags & 1048576 && Pm(t, xs, t.index); switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Yi(e, t), e = t.pendingProps; var o = vr(t, Ce.current);
            pr(t, n), o = Oc(null, t, r, e, o, n); var i = Pc(); return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, De(r) ? (i = !0, ws(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, xc(t), o.updater = oa, t.stateNode = o, o._reactInternals = t, Ql(t, r, e, n), t = Gl(null, t, r, !0, i, n)) : (t.tag = 0, Z && i && hc(t), ke(null, t, o, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: { switch (Yi(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = wS(r), e = tt(r, e), o) {
                    case 0:
                        t = ql(null, t, r, e, n); break e;
                    case 1:
                        t = Fd(null, t, r, e, n); break e;
                    case 11:
                        t = jd(null, t, r, e, n); break e;
                    case 14:
                        t = Ad(null, t, r, tt(r.type, e), n); break e } throw Error(I(306, r, "")) }
            return t;
        case 0:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : tt(r, o), ql(e, t, r, o, n);
        case 1:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : tt(r, o), Fd(e, t, r, o, n);
        case 3:
            e: { if (ag(t), e === null) throw Error(I(387));r = t.pendingProps, i = t.memoizedState, o = i.element, Nm(e, t), _s(t, r, null, n); var s = t.memoizedState; if (r = s.element, i.isDehydrated)
                    if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) { o = xr(Error(I(423)), t), t = $d(e, t, r, n, o); break e } else if (r !== o) { o = xr(Error(I(424)), t), t = $d(e, t, r, n, o); break e } else
                    for (Ae = tn(t.stateNode.containerInfo.firstChild), Fe = t, Z = !0, it = null, n = Mm(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else { if (yr(), r === o) { t = Dt(e, t, n); break e } ke(e, t, r, n) } t = t.child }
            return t;
        case 5:
            return jm(t), e === null && Wl(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, Fl(r, o) ? s = null : i !== null && Fl(r, i) && (t.flags |= 32), sg(e, t), ke(e, t, s, n), t.child;
        case 6:
            return e === null && Wl(t), null;
        case 13:
            return lg(e, t, n);
        case 4:
            return Ec(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = wr(t, null, r, n) : ke(e, t, r, n), t.child;
        case 11:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : tt(r, o), jd(e, t, r, o, n);
        case 7:
            return ke(e, t, t.pendingProps, n), t.child;
        case 8:
            return ke(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return ke(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: { if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, Y(Es, r._currentValue), r._currentValue = s, i !== null)
                    if (ft(i.value, s)) { if (i.children === o.children && !Ie.current) { t = Dt(e, t, n); break e } } else
                        for (i = t.child, i !== null && (i.return = t); i !== null;) { var a = i.dependencies; if (a !== null) { s = i.child; for (var l = a.firstContext; l !== null;) { if (l.context === r) { if (i.tag === 1) { l = Lt(-1, n & -n), l.tag = 2; var u = i.updateQueue; if (u !== null) { u = u.shared; var c = u.pending;
                                                c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l } } i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), Vl(i.return, n, t), a.lanes |= n; break } l = l.next } } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
                            else if (i.tag === 18) { if (s = i.return, s === null) throw Error(I(341));
                                s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), Vl(s, n, t), s = i.sibling } else s = i.child; if (s !== null) s.return = i;
                            else
                                for (s = i; s !== null;) { if (s === t) { s = null; break } if (i = s.sibling, i !== null) { i.return = s.return, s = i; break } s = s.return } i = s } ke(e, t, o.children, n), t = t.child }
            return t;
        case 9:
            return o = t.type, r = t.pendingProps.children, pr(t, n), o = Je(o), r = r(o), t.flags |= 1, ke(e, t, r, n), t.child;
        case 14:
            return r = t.type, o = tt(r, t.pendingProps), o = tt(r.type, o), Ad(e, t, r, o, n);
        case 15:
            return og(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : tt(r, o), Yi(e, t), t.tag = 1, De(r) ? (e = !0, ws(t)) : e = !1, pr(t, n), Im(t, r, o), Ql(t, r, o, n), Gl(null, t, r, !0, e, n);
        case 19:
            return ug(e, t, n);
        case 22:
            return ig(e, t, n) } throw Error(I(156, t.tag)) };

function kg(e, t) { return Jh(e, t) }

function yS(e, t, n, r) { this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null }

function qe(e, t, n, r) { return new yS(e, t, n, r) }

function Ac(e) { return e = e.prototype, !(!e || !e.isReactComponent) }

function wS(e) { if (typeof e == "function") return Ac(e) ? 1 : 0; if (e != null) { if (e = e.$$typeof, e === nc) return 11; if (e === rc) return 14 } return 2 }

function sn(e, t) { var n = e.alternate; return n === null ? (n = qe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n }

function Zi(e, t, n, r, o, i) { var s = 2; if (r = e, typeof e == "function") Ac(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else e: switch (e) {
        case qn:
            return Pn(n.children, o, i, t);
        case tc:
            s = 8, o |= 8; break;
        case gl:
            return e = qe(12, n, t, o | 2), e.elementType = gl, e.lanes = i, e;
        case vl:
            return e = qe(13, n, t, o), e.elementType = vl, e.lanes = i, e;
        case yl:
            return e = qe(19, n, t, o), e.elementType = yl, e.lanes = i, e;
        case Dh:
            return la(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case Th:
                    s = 10; break e;
                case Ih:
                    s = 9; break e;
                case nc:
                    s = 11; break e;
                case rc:
                    s = 14; break e;
                case zt:
                    s = 16, r = null; break e }
            throw Error(I(130, e == null ? e : typeof e, "")) }
    return t = qe(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t }

function Pn(e, t, n, r) { return e = qe(7, e, r, t), e.lanes = n, e }

function la(e, t, n, r) { return e = qe(22, e, r, t), e.elementType = Dh, e.lanes = n, e.stateNode = { isHidden: !1 }, e }

function Ya(e, t, n) { return e = qe(6, e, null, t), e.lanes = n, e }

function Ja(e, t, n) { return t = qe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t }

function SS(e, t, n, r, o) { this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Na(0), this.expirationTimes = Na(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Na(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null }

function Fc(e, t, n, r, o, i, s, a, l) { return e = new SS(e, t, n, a, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = qe(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, xc(i), e }

function xS(e, t, n) { var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null; return { $$typeof: Kn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n } }

function Og(e) { if (!e) return cn;
    e = e._reactInternals;
    e: { if ($n(e) !== e || e.tag !== 1) throw Error(I(170)); var t = e;do { switch (t.tag) {
                case 3:
                    t = t.stateNode.context; break e;
                case 1:
                    if (De(t.type)) { t = t.stateNode.__reactInternalMemoizedMergedChildContext; break e } } t = t.return } while (t !== null); throw Error(I(171)) }
    if (e.tag === 1) { var n = e.type; if (De(n)) return km(e, n, t) } return t }

function Pg(e, t, n, r, o, i, s, a, l) { return e = Fc(n, r, !0, e, o, i, s, a, l), e.context = Og(null), n = e.current, r = Oe(), o = on(n), i = Lt(r, o), i.callback = t ? ? null, nn(n, i, o), e.current.lanes = o, Wo(e, o, r), Me(e, r), e }

function ua(e, t, n, r) { var o = t.current,
        i = Oe(),
        s = on(o); return n = Og(n), t.context === null ? t.context = n : t.pendingContext = n, t = Lt(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = nn(o, t, s), e !== null && (lt(e, o, s, i), Ki(e, o, s)), s }

function Ts(e) { if (e = e.current, !e.child) return null; switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode } }

function Gd(e, t) { if (e = e.memoizedState, e !== null && e.dehydrated !== null) { var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t } }

function $c(e, t) { Gd(e, t), (e = e.alternate) && Gd(e, t) }

function ES() { return null }
var bg = typeof reportError == "function" ? reportError : function(e) { console.error(e) };

function Uc(e) { this._internalRoot = e } ca.prototype.render = Uc.prototype.render = function(e) { var t = this._internalRoot; if (t === null) throw Error(I(409));
    ua(e, t, null, null) };
ca.prototype.unmount = Uc.prototype.unmount = function() { var e = this._internalRoot; if (e !== null) { this._internalRoot = null; var t = e.containerInfo;
        Dn(function() { ua(null, e, null, null) }), t[Tt] = null } };

function ca(e) { this._internalRoot = e } ca.prototype.unstable_scheduleHydration = function(e) { if (e) { var t = om();
        e = { blockedOn: null, target: e, priority: t }; for (var n = 0; n < Vt.length && t !== 0 && t < Vt[n].priority; n++);
        Vt.splice(n, 0, e), n === 0 && sm(e) } };

function zc(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11) }

function fa(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable ")) }

function Yd() {}

function CS(e, t, n, r, o) { if (o) { if (typeof r == "function") { var i = r;
            r = function() { var u = Ts(s);
                i.call(u) } } var s = Pg(t, r, e, 0, null, !1, !1, "", Yd); return e._reactRootContainer = s, e[Tt] = s.current, Co(e.nodeType === 8 ? e.parentNode : e), Dn(), s } for (; o = e.lastChild;) e.removeChild(o); if (typeof r == "function") { var a = r;
        r = function() { var u = Ts(l);
            a.call(u) } } var l = Fc(e, 0, !1, null, null, !1, !1, "", Yd); return e._reactRootContainer = l, e[Tt] = l.current, Co(e.nodeType === 8 ? e.parentNode : e), Dn(function() { ua(t, l, n, r) }), l }

function da(e, t, n, r, o) { var i = n._reactRootContainer; if (i) { var s = i; if (typeof o == "function") { var a = o;
            o = function() { var l = Ts(s);
                a.call(l) } } ua(t, s, e, o) } else s = CS(n, t, e, o, r); return Ts(s) } nm = function(e) { switch (e.tag) {
        case 3:
            var t = e.stateNode; if (t.current.memoizedState.isDehydrated) { var n = Jr(t.pendingLanes);
                n !== 0 && (sc(t, n | 1), Me(t, se()), !(V & 6) && (Er = se() + 500, hn())) } break;
        case 13:
            Dn(function() { var r = It(e, 1); if (r !== null) { var o = Oe();
                    lt(r, e, 1, o) } }), $c(e, 1) } };
ac = function(e) { if (e.tag === 13) { var t = It(e, 134217728); if (t !== null) { var n = Oe();
            lt(t, e, 134217728, n) } $c(e, 134217728) } };
rm = function(e) { if (e.tag === 13) { var t = on(e),
            n = It(e, t); if (n !== null) { var r = Oe();
            lt(n, e, t, r) } $c(e, t) } };
om = function() { return K };
im = function(e, t) { var n = K; try { return K = e, t() } finally { K = n } };
bl = function(e, t, n) { switch (t) {
        case "input":
            if (xl(e, n), t = n.name, n.type === "radio" && t != null) { for (n = e; n.parentNode;) n = n.parentNode; for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) { var r = n[t]; if (r !== e && r.form === e.form) { var o = na(r); if (!o) throw Error(I(90));
                        jh(r), xl(r, o) } } } break;
        case "textarea":
            Fh(e, n); break;
        case "select":
            t = n.value, t != null && ur(e, !!n.multiple, t, !1) } };
Hh = Dc;
Qh = Dn;
var _S = { usingClientEntryPoint: !1, Events: [Ho, Xn, na, Wh, Vh, Dc] },
    Kr = { findFiberByHostInstance: En, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" },
    kS = { bundleType: Kr.bundleType, version: Kr.version, rendererPackageName: Kr.rendererPackageName, rendererConfig: Kr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: jt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) { return e = Gh(e), e === null ? null : e.stateNode }, findFiberByHostInstance: Kr.findFiberByHostInstance || ES, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") { var bi = __REACT_DEVTOOLS_GLOBAL_HOOK__; if (!bi.isDisabled && bi.supportsFiber) try { Xs = bi.inject(kS), Et = bi } catch {} } Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _S;
Be.createPortal = function(e, t) { var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null; if (!zc(t)) throw Error(I(200)); return xS(e, t, null, n) };
Be.createRoot = function(e, t) { if (!zc(e)) throw Error(I(299)); var n = !1,
        r = "",
        o = bg; return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Fc(e, 1, !1, null, null, n, !1, r, o), e[Tt] = t.current, Co(e.nodeType === 8 ? e.parentNode : e), new Uc(t) };
Be.findDOMNode = function(e) { if (e == null) return null; if (e.nodeType === 1) return e; var t = e._reactInternals; if (t === void 0) throw typeof e.render == "function" ? Error(I(188)) : (e = Object.keys(e).join(","), Error(I(268, e))); return e = Gh(t), e = e === null ? null : e.stateNode, e };
Be.flushSync = function(e) { return Dn(e) };
Be.hydrate = function(e, t, n) { if (!fa(t)) throw Error(I(200)); return da(null, e, t, !0, n) };
Be.hydrateRoot = function(e, t, n) { if (!zc(e)) throw Error(I(405)); var r = n != null && n.hydratedSources || null,
        o = !1,
        i = "",
        s = bg; if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Pg(t, null, e, 1, n ? ? null, o, !1, i, s), e[Tt] = t.current, Co(e), r)
        for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o); return new ca(t) };
Be.render = function(e, t, n) { if (!fa(t)) throw Error(I(200)); return da(null, e, t, !1, n) };
Be.unmountComponentAtNode = function(e) { if (!fa(e)) throw Error(I(40)); return e._reactRootContainer ? (Dn(function() { da(null, null, e, !1, function() { e._reactRootContainer = null, e[Tt] = null }) }), !0) : !1 };
Be.unstable_batchedUpdates = Dc;
Be.unstable_renderSubtreeIntoContainer = function(e, t, n, r) { if (!fa(n)) throw Error(I(200)); if (e == null || e._reactInternals === void 0) throw Error(I(38)); return da(e, t, n, !1, r) };
Be.version = "18.2.0-next-9e3b772b8-20220608";

function Rg() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try { __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rg) } catch (e) { console.error(e) } } Rg(), Ph.exports = Be;
var Bc = Ph.exports,
    Lg, Jd = Bc;
Lg = Jd.createRoot, Jd.hydrateRoot;
var au = { exports: {} },
    Mn = {},
    Ng = { exports: {} },
    OS = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
    PS = OS,
    bS = PS;

function Tg() {}

function Ig() {} Ig.resetWarningCache = Tg;
var RS = function() {
    function e(r, o, i, s, a, l) { if (l !== bS) { var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"); throw u.name = "Invariant Violation", u } } e.isRequired = e;

    function t() { return e } var n = { array: e, bigint: e, bool: e, func: e, number: e, object: e, string: e, symbol: e, any: e, arrayOf: t, element: e, elementType: e, instanceOf: t, node: e, objectOf: t, oneOf: t, oneOfType: t, shape: t, exact: t, checkPropTypes: Ig, resetWarningCache: Tg }; return n.PropTypes = n, n };
Ng.exports = RS();
var Wc = Ng.exports;
const ee = Gs(Wc);
var lu = { exports: {} },
    pt = {},
    uu = { exports: {} };
(function(e, t) { Object.defineProperty(t, "__esModule", { value: !0 }), t.default = c;
    /*!
     * Adapted from jQuery UI core
     *
     * http://jqueryui.com
     *
     * Copyright 2014 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/category/ui-core/
     */
    var n = "none",
        r = "contents",
        o = /input|select|textarea|button|object|iframe/;

    function i(d, f) { return f.getPropertyValue("overflow") !== "visible" || d.scrollWidth <= 0 && d.scrollHeight <= 0 }

    function s(d) { var f = d.offsetWidth <= 0 && d.offsetHeight <= 0; if (f && !d.innerHTML) return !0; try { var g = window.getComputedStyle(d),
                w = g.getPropertyValue("display"); return f ? w !== r && i(d, g) : w === n } catch { return console.warn("Failed to inspect element style"), !1 } }

    function a(d) { for (var f = d, g = d.getRootNode && d.getRootNode(); f && f !== document.body;) { if (g && f === g && (f = g.host.parentNode), s(f)) return !1;
            f = f.parentNode } return !0 }

    function l(d, f) { var g = d.nodeName.toLowerCase(),
            w = o.test(g) && !d.disabled || g === "a" && d.href || f; return w && a(d) }

    function u(d) { var f = d.getAttribute("tabindex");
        f === null && (f = void 0); var g = isNaN(f); return (g || f >= 0) && l(d, !g) }

    function c(d) { var f = [].slice.call(d.querySelectorAll("*"), 0).reduce(function(g, w) { return g.concat(w.shadowRoot ? c(w.shadowRoot) : [w]) }, []); return f.filter(u) } e.exports = t.default })(uu, uu.exports);
var Dg = uu.exports;
Object.defineProperty(pt, "__esModule", { value: !0 });
pt.resetState = IS;
pt.log = DS;
pt.handleBlur = To;
pt.handleFocus = Io;
pt.markForFocusLater = MS;
pt.returnFocus = jS;
pt.popWithoutFocus = AS;
pt.setupScopedFocus = FS;
pt.teardownScopedFocus = $S;
var LS = Dg,
    NS = TS(LS);

function TS(e) { return e && e.__esModule ? e : { default: e } }
var Cr = [],
    ir = null,
    cu = !1;

function IS() { Cr = [] }

function DS() {}

function To() { cu = !0 }

function Io() { if (cu) { if (cu = !1, !ir) return;
        setTimeout(function() { if (!ir.contains(document.activeElement)) { var e = (0, NS.default)(ir)[0] || ir;
                e.focus() } }, 0) } }

function MS() { Cr.push(document.activeElement) }

function jS() { var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
        t = null; try { Cr.length !== 0 && (t = Cr.pop(), t.focus({ preventScroll: e })); return } catch { console.warn(["You tried to return focus to", t, "but it is not in the DOM anymore"].join(" ")) } }

function AS() { Cr.length > 0 && Cr.pop() }

function FS(e) { ir = e, window.addEventListener ? (window.addEventListener("blur", To, !1), document.addEventListener("focus", Io, !0)) : (window.attachEvent("onBlur", To), document.attachEvent("onFocus", Io)) }

function $S() { ir = null, window.addEventListener ? (window.removeEventListener("blur", To), document.removeEventListener("focus", Io)) : (window.detachEvent("onBlur", To), document.detachEvent("onFocus", Io)) }
var fu = { exports: {} };
(function(e, t) { Object.defineProperty(t, "__esModule", { value: !0 }), t.default = s; var n = Dg,
        r = o(n);

    function o(a) { return a && a.__esModule ? a : { default: a } }

    function i() { var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document; return a.activeElement.shadowRoot ? i(a.activeElement.shadowRoot) : a.activeElement }

    function s(a, l) { var u = (0, r.default)(a); if (!u.length) { l.preventDefault(); return } var c = void 0,
            d = l.shiftKey,
            f = u[0],
            g = u[u.length - 1],
            w = i(); if (a === w) { if (!d) return;
            c = g } if (g === w && !d && (c = f), f === w && d && (c = g), c) { l.preventDefault(), c.focus(); return } var S = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),
            _ = S != null && S[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null; if (_) { var m = u.indexOf(w); if (m > -1 && (m += d ? -1 : 1), c = u[m], typeof c > "u") { l.preventDefault(), c = d ? g : f, c.focus(); return } l.preventDefault(), c.focus() } } e.exports = t.default })(fu, fu.exports);
var US = fu.exports,
    ht = {},
    zS = function() {},
    BS = zS,
    ut = {},
    Mg = { exports: {} };
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
(function(e) {
    (function() { var t = !!(typeof window < "u" && window.document && window.document.createElement),
            n = { canUseDOM: t, canUseWorkers: typeof Worker < "u", canUseEventListeners: t && !!(window.addEventListener || window.attachEvent), canUseViewport: t && !!window.screen };
        e.exports ? e.exports = n : window.ExecutionEnvironment = n })() })(Mg);
var WS = Mg.exports;
Object.defineProperty(ut, "__esModule", { value: !0 });
ut.canUseDOM = ut.SafeNodeList = ut.SafeHTMLCollection = void 0;
var VS = WS,
    HS = QS(VS);

function QS(e) { return e && e.__esModule ? e : { default: e } }
var pa = HS.default,
    KS = pa.canUseDOM ? window.HTMLElement : {};
ut.SafeHTMLCollection = pa.canUseDOM ? window.HTMLCollection : {};
ut.SafeNodeList = pa.canUseDOM ? window.NodeList : {};
ut.canUseDOM = pa.canUseDOM;
ut.default = KS;
Object.defineProperty(ht, "__esModule", { value: !0 });
ht.resetState = XS;
ht.log = ZS;
ht.assertNodeList = jg;
ht.setElement = ex;
ht.validateElement = Vc;
ht.hide = tx;
ht.show = nx;
ht.documentNotReadyOrSSRTesting = rx;
var qS = BS,
    GS = JS(qS),
    YS = ut;

function JS(e) { return e && e.__esModule ? e : { default: e } }
var He = null;

function XS() { He && (He.removeAttribute ? He.removeAttribute("aria-hidden") : He.length != null ? He.forEach(function(e) { return e.removeAttribute("aria-hidden") }) : document.querySelectorAll(He).forEach(function(e) { return e.removeAttribute("aria-hidden") })), He = null }

function ZS() {}

function jg(e, t) { if (!e || !e.length) throw new Error("react-modal: No elements were found for selector " + t + ".") }

function ex(e) { var t = e; if (typeof t == "string" && YS.canUseDOM) { var n = document.querySelectorAll(t);
        jg(n, t), t = n } return He = t || He, He }

function Vc(e) { var t = e || He; return t ? Array.isArray(t) || t instanceof HTMLCollection || t instanceof NodeList ? t : [t] : ((0, GS.default)(!1, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" ")), []) }

function tx(e) { var t = !0,
        n = !1,
        r = void 0; try { for (var o = Vc(e)[Symbol.iterator](), i; !(t = (i = o.next()).done); t = !0) { var s = i.value;
            s.setAttribute("aria-hidden", "true") } } catch (a) { n = !0, r = a } finally { try {!t && o.return && o.return() } finally { if (n) throw r } } }

function nx(e) { var t = !0,
        n = !1,
        r = void 0; try { for (var o = Vc(e)[Symbol.iterator](), i; !(t = (i = o.next()).done); t = !0) { var s = i.value;
            s.removeAttribute("aria-hidden") } } catch (a) { n = !0, r = a } finally { try {!t && o.return && o.return() } finally { if (n) throw r } } }

function rx() { He = null }
var Tr = {};
Object.defineProperty(Tr, "__esModule", { value: !0 });
Tr.resetState = ox;
Tr.log = ix;
var co = {},
    fo = {};

function Xd(e, t) { e.classList.remove(t) }

function ox() { var e = document.getElementsByTagName("html")[0]; for (var t in co) Xd(e, co[t]); var n = document.body; for (var r in fo) Xd(n, fo[r]);
    co = {}, fo = {} }

function ix() {}
var sx = function(t, n) { return t[n] || (t[n] = 0), t[n] += 1, n },
    ax = function(t, n) { return t[n] && (t[n] -= 1), n },
    lx = function(t, n, r) { r.forEach(function(o) { sx(n, o), t.add(o) }) },
    ux = function(t, n, r) { r.forEach(function(o) { ax(n, o), n[o] === 0 && t.remove(o) }) };
Tr.add = function(t, n) { return lx(t.classList, t.nodeName.toLowerCase() == "html" ? co : fo, n.split(" ")) };
Tr.remove = function(t, n) { return ux(t.classList, t.nodeName.toLowerCase() == "html" ? co : fo, n.split(" ")) };
var Ir = {};
Object.defineProperty(Ir, "__esModule", { value: !0 });
Ir.log = fx;
Ir.resetState = dx;

function cx(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
var Ag = function e() { var t = this;
        cx(this, e), this.register = function(n) { t.openInstances.indexOf(n) === -1 && (t.openInstances.push(n), t.emit("register")) }, this.deregister = function(n) { var r = t.openInstances.indexOf(n);
            r !== -1 && (t.openInstances.splice(r, 1), t.emit("deregister")) }, this.subscribe = function(n) { t.subscribers.push(n) }, this.emit = function(n) { t.subscribers.forEach(function(r) { return r(n, t.openInstances.slice()) }) }, this.openInstances = [], this.subscribers = [] },
    Is = new Ag;

function fx() { console.log("portalOpenInstances ----------"), console.log(Is.openInstances.length), Is.openInstances.forEach(function(e) { return console.log(e) }), console.log("end portalOpenInstances ----------") }

function dx() { Is = new Ag } Ir.default = Is;
var Hc = {};
Object.defineProperty(Hc, "__esModule", { value: !0 });
Hc.resetState = gx;
Hc.log = vx;
var px = Ir,
    hx = mx(px);

function mx(e) { return e && e.__esModule ? e : { default: e } }
var xe = void 0,
    nt = void 0,
    bn = [];

function gx() { for (var e = [xe, nt], t = 0; t < e.length; t++) { var n = e[t];
        n && n.parentNode && n.parentNode.removeChild(n) } xe = nt = null, bn = [] }

function vx() { console.log("bodyTrap ----------"), console.log(bn.length); for (var e = [xe, nt], t = 0; t < e.length; t++) { var n = e[t],
            r = n || {};
        console.log(r.nodeName, r.className, r.id) } console.log("edn bodyTrap ----------") }

function Zd() { bn.length !== 0 && bn[bn.length - 1].focusContent() }

function yx(e, t) {!xe && !nt && (xe = document.createElement("div"), xe.setAttribute("data-react-modal-body-trap", ""), xe.style.position = "absolute", xe.style.opacity = "0", xe.setAttribute("tabindex", "0"), xe.addEventListener("focus", Zd), nt = xe.cloneNode(), nt.addEventListener("focus", Zd)), bn = t, bn.length > 0 ? (document.body.firstChild !== xe && document.body.insertBefore(xe, document.body.firstChild), document.body.lastChild !== nt && document.body.appendChild(nt)) : (xe.parentElement && xe.parentElement.removeChild(xe), nt.parentElement && nt.parentElement.removeChild(nt)) } hx.default.subscribe(yx);
(function(e, t) { Object.defineProperty(t, "__esModule", { value: !0 }); var n = Object.assign || function(N) { for (var T = 1; T < arguments.length; T++) { var F = arguments[T]; for (var C in F) Object.prototype.hasOwnProperty.call(F, C) && (N[C] = F[C]) } return N },
        r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(N) { return typeof N } : function(N) { return N && typeof Symbol == "function" && N.constructor === Symbol && N !== Symbol.prototype ? "symbol" : typeof N },
        o = function() {
            function N(T, F) { for (var C = 0; C < F.length; C++) { var k = F[C];
                    k.enumerable = k.enumerable || !1, k.configurable = !0, "value" in k && (k.writable = !0), Object.defineProperty(T, k.key, k) } } return function(T, F, C) { return F && N(T.prototype, F), C && N(T, C), T } }(),
        i = v,
        s = Wc,
        a = b(s),
        l = pt,
        u = E(l),
        c = US,
        d = b(c),
        f = ht,
        g = E(f),
        w = Tr,
        S = E(w),
        _ = ut,
        m = b(_),
        p = Ir,
        h = b(p);

    function E(N) { if (N && N.__esModule) return N; var T = {}; if (N != null)
            for (var F in N) Object.prototype.hasOwnProperty.call(N, F) && (T[F] = N[F]); return T.default = N, T }

    function b(N) { return N && N.__esModule ? N : { default: N } }

    function P(N, T) { if (!(N instanceof T)) throw new TypeError("Cannot call a class as a function") }

    function O(N, T) { if (!N) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return T && (typeof T == "object" || typeof T == "function") ? T : N }

    function x(N, T) { if (typeof T != "function" && T !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof T);
        N.prototype = Object.create(T && T.prototype, { constructor: { value: N, enumerable: !1, writable: !0, configurable: !0 } }), T && (Object.setPrototypeOf ? Object.setPrototypeOf(N, T) : N.__proto__ = T) } var R = { overlay: "ReactModal__Overlay", content: "ReactModal__Content" },
        L = function(T) { return T.code === "Tab" || T.keyCode === 9 },
        D = function(T) { return T.code === "Escape" || T.keyCode === 27 },
        A = 0,
        j = function(N) { x(T, N);

            function T(F) { P(this, T); var C = O(this, (T.__proto__ || Object.getPrototypeOf(T)).call(this, F)); return C.setOverlayRef = function(k) { C.overlay = k, C.props.overlayRef && C.props.overlayRef(k) }, C.setContentRef = function(k) { C.content = k, C.props.contentRef && C.props.contentRef(k) }, C.afterClose = function() { var k = C.props,
                        M = k.appElement,
                        U = k.ariaHideApp,
                        B = k.htmlOpenClassName,
                        q = k.bodyOpenClassName,
                        Re = k.parentSelector,
                        Le = Re && Re().ownerDocument || document;
                    q && S.remove(Le.body, q), B && S.remove(Le.getElementsByTagName("html")[0], B), U && A > 0 && (A -= 1, A === 0 && g.show(M)), C.props.shouldFocusAfterRender && (C.props.shouldReturnFocusAfterClose ? (u.returnFocus(C.props.preventScroll), u.teardownScopedFocus()) : u.popWithoutFocus()), C.props.onAfterClose && C.props.onAfterClose(), h.default.deregister(C) }, C.open = function() { C.beforeOpen(), C.state.afterOpen && C.state.beforeClose ? (clearTimeout(C.closeTimer), C.setState({ beforeClose: !1 })) : (C.props.shouldFocusAfterRender && (u.setupScopedFocus(C.node), u.markForFocusLater()), C.setState({ isOpen: !0 }, function() { C.openAnimationFrame = requestAnimationFrame(function() { C.setState({ afterOpen: !0 }), C.props.isOpen && C.props.onAfterOpen && C.props.onAfterOpen({ overlayEl: C.overlay, contentEl: C.content }) }) })) }, C.close = function() { C.props.closeTimeoutMS > 0 ? C.closeWithTimeout() : C.closeWithoutTimeout() }, C.focusContent = function() { return C.content && !C.contentHasFocus() && C.content.focus({ preventScroll: !0 }) }, C.closeWithTimeout = function() { var k = Date.now() + C.props.closeTimeoutMS;
                    C.setState({ beforeClose: !0, closesAt: k }, function() { C.closeTimer = setTimeout(C.closeWithoutTimeout, C.state.closesAt - Date.now()) }) }, C.closeWithoutTimeout = function() { C.setState({ beforeClose: !1, isOpen: !1, afterOpen: !1, closesAt: null }, C.afterClose) }, C.handleKeyDown = function(k) { L(k) && (0, d.default)(C.content, k), C.props.shouldCloseOnEsc && D(k) && (k.stopPropagation(), C.requestClose(k)) }, C.handleOverlayOnClick = function(k) { C.shouldClose === null && (C.shouldClose = !0), C.shouldClose && C.props.shouldCloseOnOverlayClick && (C.ownerHandlesClose() ? C.requestClose(k) : C.focusContent()), C.shouldClose = null }, C.handleContentOnMouseUp = function() { C.shouldClose = !1 }, C.handleOverlayOnMouseDown = function(k) {!C.props.shouldCloseOnOverlayClick && k.target == C.overlay && k.preventDefault() }, C.handleContentOnClick = function() { C.shouldClose = !1 }, C.handleContentOnMouseDown = function() { C.shouldClose = !1 }, C.requestClose = function(k) { return C.ownerHandlesClose() && C.props.onRequestClose(k) }, C.ownerHandlesClose = function() { return C.props.onRequestClose }, C.shouldBeClosed = function() { return !C.state.isOpen && !C.state.beforeClose }, C.contentHasFocus = function() { return document.activeElement === C.content || C.content.contains(document.activeElement) }, C.buildClassName = function(k, M) { var U = (typeof M > "u" ? "undefined" : r(M)) === "object" ? M : { base: R[k], afterOpen: R[k] + "--after-open", beforeClose: R[k] + "--before-close" },
                        B = U.base; return C.state.afterOpen && (B = B + " " + U.afterOpen), C.state.beforeClose && (B = B + " " + U.beforeClose), typeof M == "string" && M ? B + " " + M : B }, C.attributesFromObject = function(k, M) { return Object.keys(M).reduce(function(U, B) { return U[k + "-" + B] = M[B], U }, {}) }, C.state = { afterOpen: !1, beforeClose: !1 }, C.shouldClose = null, C.moveFromContentToOverlay = null, C } return o(T, [{ key: "componentDidMount", value: function() { this.props.isOpen && this.open() } }, { key: "componentDidUpdate", value: function(C, k) { this.props.isOpen && !C.isOpen ? this.open() : !this.props.isOpen && C.isOpen && this.close(), this.props.shouldFocusAfterRender && this.state.isOpen && !k.isOpen && this.focusContent() } }, { key: "componentWillUnmount", value: function() { this.state.isOpen && this.afterClose(), clearTimeout(this.closeTimer), cancelAnimationFrame(this.openAnimationFrame) } }, { key: "beforeOpen", value: function() { var C = this.props,
                        k = C.appElement,
                        M = C.ariaHideApp,
                        U = C.htmlOpenClassName,
                        B = C.bodyOpenClassName,
                        q = C.parentSelector,
                        Re = q && q().ownerDocument || document;
                    B && S.add(Re.body, B), U && S.add(Re.getElementsByTagName("html")[0], U), M && (A += 1, g.hide(k)), h.default.register(this) } }, { key: "render", value: function() { var C = this.props,
                        k = C.id,
                        M = C.className,
                        U = C.overlayClassName,
                        B = C.defaultStyles,
                        q = C.children,
                        Re = M ? {} : B.content,
                        Le = U ? {} : B.overlay; if (this.shouldBeClosed()) return null; var gn = { ref: this.setOverlayRef, className: this.buildClassName("overlay", U), style: n({}, Le, this.props.style.overlay), onClick: this.handleOverlayOnClick, onMouseDown: this.handleOverlayOnMouseDown },
                        Ze = n({ id: k, ref: this.setContentRef, style: n({}, Re, this.props.style.content), className: this.buildClassName("content", M), tabIndex: "-1", onKeyDown: this.handleKeyDown, onMouseDown: this.handleContentOnMouseDown, onMouseUp: this.handleContentOnMouseUp, onClick: this.handleContentOnClick, role: this.props.role, "aria-label": this.props.contentLabel }, this.attributesFromObject("aria", n({ modal: !0 }, this.props.aria)), this.attributesFromObject("data", this.props.data || {}), { "data-testid": this.props.testId }),
                        H = this.props.contentElement(Ze, q); return this.props.overlayElement(gn, H) } }]), T }(i.Component);
    j.defaultProps = { style: { overlay: {}, content: {} }, defaultStyles: {} }, j.propTypes = { isOpen: a.default.bool.isRequired, defaultStyles: a.default.shape({ content: a.default.object, overlay: a.default.object }), style: a.default.shape({ content: a.default.object, overlay: a.default.object }), className: a.default.oneOfType([a.default.string, a.default.object]), overlayClassName: a.default.oneOfType([a.default.string, a.default.object]), parentSelector: a.default.func, bodyOpenClassName: a.default.string, htmlOpenClassName: a.default.string, ariaHideApp: a.default.bool, appElement: a.default.oneOfType([a.default.instanceOf(m.default), a.default.instanceOf(_.SafeHTMLCollection), a.default.instanceOf(_.SafeNodeList), a.default.arrayOf(a.default.instanceOf(m.default))]), onAfterOpen: a.default.func, onAfterClose: a.default.func, onRequestClose: a.default.func, closeTimeoutMS: a.default.number, shouldFocusAfterRender: a.default.bool, shouldCloseOnOverlayClick: a.default.bool, shouldReturnFocusAfterClose: a.default.bool, preventScroll: a.default.bool, role: a.default.string, contentLabel: a.default.string, aria: a.default.object, data: a.default.object, children: a.default.node, shouldCloseOnEsc: a.default.bool, overlayRef: a.default.func, contentRef: a.default.func, id: a.default.string, overlayElement: a.default.func, contentElement: a.default.func, testId: a.default.string }, t.default = j, e.exports = t.default })(lu, lu.exports);
var wx = lu.exports;

function Fg() { var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
    e != null && this.setState(e) }

function $g(e) {
    function t(n) { var r = this.constructor.getDerivedStateFromProps(e, n); return r ? ? null } this.setState(t.bind(this)) }

function Ug(e, t) { try { var n = this.props,
            r = this.state;
        this.props = e, this.state = t, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r) } finally { this.props = n, this.state = r } } Fg.__suppressDeprecationWarning = !0;
$g.__suppressDeprecationWarning = !0;
Ug.__suppressDeprecationWarning = !0;

function Sx(e) { var t = e.prototype; if (!t || !t.isReactComponent) throw new Error("Can only polyfill class components"); if (typeof e.getDerivedStateFromProps != "function" && typeof t.getSnapshotBeforeUpdate != "function") return e; var n = null,
        r = null,
        o = null; if (typeof t.componentWillMount == "function" ? n = "componentWillMount" : typeof t.UNSAFE_componentWillMount == "function" && (n = "UNSAFE_componentWillMount"), typeof t.componentWillReceiveProps == "function" ? r = "componentWillReceiveProps" : typeof t.UNSAFE_componentWillReceiveProps == "function" && (r = "UNSAFE_componentWillReceiveProps"), typeof t.componentWillUpdate == "function" ? o = "componentWillUpdate" : typeof t.UNSAFE_componentWillUpdate == "function" && (o = "UNSAFE_componentWillUpdate"), n !== null || r !== null || o !== null) { var i = e.displayName || e.name,
            s = typeof e.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()"; throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

` + i + " uses " + s + " but also contains the following legacy lifecycles:" + (n !== null ? `
  ` + n : "") + (r !== null ? `
  ` + r : "") + (o !== null ? `
  ` + o : "") + `

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`) } if (typeof e.getDerivedStateFromProps == "function" && (t.componentWillMount = Fg, t.componentWillReceiveProps = $g), typeof t.getSnapshotBeforeUpdate == "function") { if (typeof t.componentDidUpdate != "function") throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
        t.componentWillUpdate = Ug; var a = t.componentDidUpdate;
        t.componentDidUpdate = function(u, c, d) { var f = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : d;
            a.call(this, u, c, f) } } return e }
const xx = Object.freeze(Object.defineProperty({ __proto__: null, polyfill: Sx }, Symbol.toStringTag, { value: "Module" })),
    Ex = Zy(xx);
Object.defineProperty(Mn, "__esModule", { value: !0 });
Mn.bodyOpenClassName = Mn.portalClassName = void 0;
var ep = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e },
    Cx = function() {
        function e(t, n) { for (var r = 0; r < n.length; r++) { var o = n[r];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
    zg = v,
    Ds = Ko(zg),
    _x = Bc,
    Ms = Ko(_x),
    kx = Wc,
    z = Ko(kx),
    Ox = wx,
    tp = Ko(Ox),
    Px = ht,
    bx = Lx(Px),
    Gt = ut,
    np = Ko(Gt),
    Rx = Ex;

function Lx(e) { if (e && e.__esModule) return e; var t = {}; if (e != null)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t }

function Ko(e) { return e && e.__esModule ? e : { default: e } }

function Nx(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

function rp(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t && (typeof t == "object" || typeof t == "function") ? t : e }

function Tx(e, t) { if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }
var Ix = Mn.portalClassName = "ReactModalPortal",
    Dx = Mn.bodyOpenClassName = "ReactModal__Body--open",
    Sn = Gt.canUseDOM && Ms.default.createPortal !== void 0,
    op = function(t) { return document.createElement(t) },
    ip = function() { return Sn ? Ms.default.createPortal : Ms.default.unstable_renderSubtreeIntoContainer };

function Ri(e) { return e() }
var qo = function(e) { Tx(t, e);

    function t() { var n, r, o, i;
        Nx(this, t); for (var s = arguments.length, a = Array(s), l = 0; l < s; l++) a[l] = arguments[l]; return i = (r = (o = rp(this, (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(n, [this].concat(a))), o), o.removePortal = function() {!Sn && Ms.default.unmountComponentAtNode(o.node); var u = Ri(o.props.parentSelector);
            u && u.contains(o.node) ? u.removeChild(o.node) : console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.') }, o.portalRef = function(u) { o.portal = u }, o.renderPortal = function(u) { var c = ip(),
                d = c(o, Ds.default.createElement(tp.default, ep({ defaultStyles: t.defaultStyles }, u)), o.node);
            o.portalRef(d) }, r), rp(o, i) } return Cx(t, [{ key: "componentDidMount", value: function() { if (Gt.canUseDOM) { Sn || (this.node = op("div")), this.node.className = this.props.portalClassName; var r = Ri(this.props.parentSelector);
                r.appendChild(this.node), !Sn && this.renderPortal(this.props) } } }, { key: "getSnapshotBeforeUpdate", value: function(r) { var o = Ri(r.parentSelector),
                i = Ri(this.props.parentSelector); return { prevParent: o, nextParent: i } } }, { key: "componentDidUpdate", value: function(r, o, i) { if (Gt.canUseDOM) { var s = this.props,
                    a = s.isOpen,
                    l = s.portalClassName;
                r.portalClassName !== l && (this.node.className = l); var u = i.prevParent,
                    c = i.nextParent;
                c !== u && (u.removeChild(this.node), c.appendChild(this.node)), !(!r.isOpen && !a) && !Sn && this.renderPortal(this.props) } } }, { key: "componentWillUnmount", value: function() { if (!(!Gt.canUseDOM || !this.node || !this.portal)) { var r = this.portal.state,
                    o = Date.now(),
                    i = r.isOpen && this.props.closeTimeoutMS && (r.closesAt || o + this.props.closeTimeoutMS);
                i ? (r.beforeClose || this.portal.closeWithTimeout(), setTimeout(this.removePortal, i - o)) : this.removePortal() } } }, { key: "render", value: function() { if (!Gt.canUseDOM || !Sn) return null;!this.node && Sn && (this.node = op("div")); var r = ip(); return r(Ds.default.createElement(tp.default, ep({ ref: this.portalRef, defaultStyles: t.defaultStyles }, this.props)), this.node) } }], [{ key: "setAppElement", value: function(r) { bx.setElement(r) } }]), t }(zg.Component);
qo.propTypes = { isOpen: z.default.bool.isRequired, style: z.default.shape({ content: z.default.object, overlay: z.default.object }), portalClassName: z.default.string, bodyOpenClassName: z.default.string, htmlOpenClassName: z.default.string, className: z.default.oneOfType([z.default.string, z.default.shape({ base: z.default.string.isRequired, afterOpen: z.default.string.isRequired, beforeClose: z.default.string.isRequired })]), overlayClassName: z.default.oneOfType([z.default.string, z.default.shape({ base: z.default.string.isRequired, afterOpen: z.default.string.isRequired, beforeClose: z.default.string.isRequired })]), appElement: z.default.oneOfType([z.default.instanceOf(np.default), z.default.instanceOf(Gt.SafeHTMLCollection), z.default.instanceOf(Gt.SafeNodeList), z.default.arrayOf(z.default.instanceOf(np.default))]), onAfterOpen: z.default.func, onRequestClose: z.default.func, closeTimeoutMS: z.default.number, ariaHideApp: z.default.bool, shouldFocusAfterRender: z.default.bool, shouldCloseOnOverlayClick: z.default.bool, shouldReturnFocusAfterClose: z.default.bool, preventScroll: z.default.bool, parentSelector: z.default.func, aria: z.default.object, data: z.default.object, role: z.default.string, contentLabel: z.default.string, shouldCloseOnEsc: z.default.bool, overlayRef: z.default.func, contentRef: z.default.func, id: z.default.string, overlayElement: z.default.func, contentElement: z.default.func };
qo.defaultProps = { isOpen: !1, portalClassName: Ix, bodyOpenClassName: Dx, role: "dialog", ariaHideApp: !0, closeTimeoutMS: 0, shouldFocusAfterRender: !0, shouldCloseOnEsc: !0, shouldCloseOnOverlayClick: !0, shouldReturnFocusAfterClose: !0, preventScroll: !1, parentSelector: function() { return document.body }, overlayElement: function(t, n) { return Ds.default.createElement("div", t, n) }, contentElement: function(t, n) { return Ds.default.createElement("div", t, n) } };
qo.defaultStyles = { overlay: { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(255, 255, 255, 0.75)" }, content: { position: "absolute", top: "40px", left: "40px", right: "40px", bottom: "40px", border: "1px solid #ccc", background: "#fff", overflow: "auto", WebkitOverflowScrolling: "touch", borderRadius: "4px", outline: "none", padding: "20px" } };
(0, Rx.polyfill)(qo);
Mn.default = qo;
(function(e, t) { Object.defineProperty(t, "__esModule", { value: !0 }); var n = Mn,
        r = o(n);

    function o(i) { return i && i.__esModule ? i : { default: i } } t.default = r.default, e.exports = t.default })(au, au.exports);
var Mx = au.exports;
const Bg = Gs(Mx);
class Go { constructor() { this.listeners = new Set, this.subscribe = this.subscribe.bind(this) } subscribe(t) { const n = { listener: t }; return this.listeners.add(n), this.onSubscribe(), () => { this.listeners.delete(n), this.onUnsubscribe() } } hasListeners() { return this.listeners.size > 0 } onSubscribe() {} onUnsubscribe() {} }
const Do = typeof window > "u" || "Deno" in window;

function Ve() {}

function jx(e, t) { return typeof e == "function" ? e(t) : e }

function du(e) { return typeof e == "number" && e >= 0 && e !== 1 / 0 }

function Wg(e, t) { return Math.max(e + (t || 0) - Date.now(), 0) }

function Zr(e, t, n) { return Yo(e) ? typeof t == "function" ? { ...n, queryKey: e, queryFn: t } : { ...t, queryKey: e } : e }

function CR(e, t, n) { return Yo(e) ? typeof t == "function" ? { ...n, mutationKey: e, mutationFn: t } : { ...t, mutationKey: e } : typeof e == "function" ? { ...t, mutationFn: e } : { ...e } }

function Wt(e, t, n) { return Yo(e) ? [{ ...t, queryKey: e }, n] : [e || {}, t] }

function sp(e, t) { const { type: n = "all", exact: r, fetchStatus: o, predicate: i, queryKey: s, stale: a } = e; if (Yo(s)) { if (r) { if (t.queryHash !== Qc(s, t.options)) return !1 } else if (!js(t.queryKey, s)) return !1 } if (n !== "all") { const l = t.isActive(); if (n === "active" && !l || n === "inactive" && l) return !1 } return !(typeof a == "boolean" && t.isStale() !== a || typeof o < "u" && o !== t.state.fetchStatus || i && !i(t)) }

function ap(e, t) { const { exact: n, fetching: r, predicate: o, mutationKey: i } = e; if (Yo(i)) { if (!t.options.mutationKey) return !1; if (n) { if (kn(t.options.mutationKey) !== kn(i)) return !1 } else if (!js(t.options.mutationKey, i)) return !1 } return !(typeof r == "boolean" && t.state.status === "loading" !== r || o && !o(t)) }

function Qc(e, t) { return ((t == null ? void 0 : t.queryKeyHashFn) || kn)(e) }

function kn(e) { return JSON.stringify(e, (t, n) => hu(n) ? Object.keys(n).sort().reduce((r, o) => (r[o] = n[o], r), {}) : n) }

function js(e, t) { return Vg(e, t) }

function Vg(e, t) { return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some(n => !Vg(e[n], t[n])) : !1 }

function Hg(e, t) { if (e === t) return e; const n = lp(e) && lp(t); if (n || hu(e) && hu(t)) { const r = n ? e.length : Object.keys(e).length,
            o = n ? t : Object.keys(t),
            i = o.length,
            s = n ? [] : {}; let a = 0; for (let l = 0; l < i; l++) { const u = n ? l : o[l];
            s[u] = Hg(e[u], t[u]), s[u] === e[u] && a++ } return r === i && a === r ? e : s } return t }

function pu(e, t) { if (e && !t || t && !e) return !1; for (const n in e)
        if (e[n] !== t[n]) return !1; return !0 }

function lp(e) { return Array.isArray(e) && e.length === Object.keys(e).length }

function hu(e) { if (!up(e)) return !1; const t = e.constructor; if (typeof t > "u") return !0; const n = t.prototype; return !(!up(n) || !n.hasOwnProperty("isPrototypeOf")) }

function up(e) { return Object.prototype.toString.call(e) === "[object Object]" }

function Yo(e) { return Array.isArray(e) }

function Qg(e) { return new Promise(t => { setTimeout(t, e) }) }

function cp(e) { Qg(0).then(e) }

function Ax() { if (typeof AbortController == "function") return new AbortController }

function mu(e, t, n) { return n.isDataEqual != null && n.isDataEqual(e, t) ? e : typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? Hg(e, t) : t } class Fx extends Go { constructor() { super(), this.setup = t => { if (!Do && window.addEventListener) { const n = () => t(); return window.addEventListener("visibilitychange", n, !1), window.addEventListener("focus", n, !1), () => { window.removeEventListener("visibilitychange", n), window.removeEventListener("focus", n) } } } } onSubscribe() { this.cleanup || this.setEventListener(this.setup) } onUnsubscribe() { if (!this.hasListeners()) { var t;
            (t = this.cleanup) == null || t.call(this), this.cleanup = void 0 } } setEventListener(t) { var n;
        this.setup = t, (n = this.cleanup) == null || n.call(this), this.cleanup = t(r => { typeof r == "boolean" ? this.setFocused(r) : this.onFocus() }) } setFocused(t) { this.focused !== t && (this.focused = t, this.onFocus()) } onFocus() { this.listeners.forEach(({ listener: t }) => { t() }) } isFocused() { return typeof this.focused == "boolean" ? this.focused : typeof document > "u" ? !0 : [void 0, "visible", "prerender"].includes(document.visibilityState) } }
const As = new Fx,
    fp = ["online", "offline"];
class $x extends Go { constructor() { super(), this.setup = t => { if (!Do && window.addEventListener) { const n = () => t(); return fp.forEach(r => { window.addEventListener(r, n, !1) }), () => { fp.forEach(r => { window.removeEventListener(r, n) }) } } } } onSubscribe() { this.cleanup || this.setEventListener(this.setup) } onUnsubscribe() { if (!this.hasListeners()) { var t;
            (t = this.cleanup) == null || t.call(this), this.cleanup = void 0 } } setEventListener(t) { var n;
        this.setup = t, (n = this.cleanup) == null || n.call(this), this.cleanup = t(r => { typeof r == "boolean" ? this.setOnline(r) : this.onOnline() }) } setOnline(t) { this.online !== t && (this.online = t, this.onOnline()) } onOnline() { this.listeners.forEach(({ listener: t }) => { t() }) } isOnline() { return typeof this.online == "boolean" ? this.online : typeof navigator > "u" || typeof navigator.onLine > "u" ? !0 : navigator.onLine } }
const Fs = new $x;

function Ux(e) { return Math.min(1e3 * 2 ** e, 3e4) }

function ha(e) { return (e ? ? "online") === "online" ? Fs.isOnline() : !0 } class Kg { constructor(t) { this.revert = t == null ? void 0 : t.revert, this.silent = t == null ? void 0 : t.silent } }

function es(e) { return e instanceof Kg }

function qg(e) { let t = !1,
        n = 0,
        r = !1,
        o, i, s; const a = new Promise((_, m) => { i = _, s = m }),
        l = _ => { r || (g(new Kg(_)), e.abort == null || e.abort()) },
        u = () => { t = !0 },
        c = () => { t = !1 },
        d = () => !As.isFocused() || e.networkMode !== "always" && !Fs.isOnline(),
        f = _ => { r || (r = !0, e.onSuccess == null || e.onSuccess(_), o == null || o(), i(_)) },
        g = _ => { r || (r = !0, e.onError == null || e.onError(_), o == null || o(), s(_)) },
        w = () => new Promise(_ => { o = m => { const p = r || !d(); return p && _(m), p }, e.onPause == null || e.onPause() }).then(() => { o = void 0, r || e.onContinue == null || e.onContinue() }),
        S = () => { if (r) return; let _; try { _ = e.fn() } catch (m) { _ = Promise.reject(m) } Promise.resolve(_).then(f).catch(m => { var p, h; if (r) return; const E = (p = e.retry) != null ? p : 3,
                    b = (h = e.retryDelay) != null ? h : Ux,
                    P = typeof b == "function" ? b(n, m) : b,
                    O = E === !0 || typeof E == "number" && n < E || typeof E == "function" && E(n, m); if (t || !O) { g(m); return } n++, e.onFail == null || e.onFail(n, m), Qg(P).then(() => { if (d()) return w() }).then(() => { t ? g(m) : S() }) }) }; return ha(e.networkMode) ? S() : w().then(S), { promise: a, cancel: l, continue: () => (o == null ? void 0 : o()) ? a : Promise.resolve(), cancelRetry: u, continueRetry: c } }
const Kc = console;

function zx() { let e = [],
        t = 0,
        n = c => { c() },
        r = c => { c() }; const o = c => { let d;
            t++; try { d = c() } finally { t--, t || a() } return d },
        i = c => { t ? e.push(c) : cp(() => { n(c) }) },
        s = c => (...d) => { i(() => { c(...d) }) },
        a = () => { const c = e;
            e = [], c.length && cp(() => { r(() => { c.forEach(d => { n(d) }) }) }) }; return { batch: o, batchCalls: s, schedule: i, setNotifyFunction: c => { n = c }, setBatchNotifyFunction: c => { r = c } } }
const ae = zx();
class Gg { destroy() { this.clearGcTimeout() } scheduleGc() { this.clearGcTimeout(), du(this.cacheTime) && (this.gcTimeout = setTimeout(() => { this.optionalRemove() }, this.cacheTime)) } updateCacheTime(t) { this.cacheTime = Math.max(this.cacheTime || 0, t ? ? (Do ? 1 / 0 : 5 * 60 * 1e3)) } clearGcTimeout() { this.gcTimeout && (clearTimeout(this.gcTimeout), this.gcTimeout = void 0) } } class Bx extends Gg { constructor(t) { super(), this.abortSignalConsumed = !1, this.defaultOptions = t.defaultOptions, this.setOptions(t.options), this.observers = [], this.cache = t.cache, this.logger = t.logger || Kc, this.queryKey = t.queryKey, this.queryHash = t.queryHash, this.initialState = t.state || Wx(this.options), this.state = this.initialState, this.scheduleGc() } get meta() { return this.options.meta } setOptions(t) { this.options = { ...this.defaultOptions, ...t }, this.updateCacheTime(this.options.cacheTime) } optionalRemove() {!this.observers.length && this.state.fetchStatus === "idle" && this.cache.remove(this) } setData(t, n) { const r = mu(this.state.data, t, this.options); return this.dispatch({ data: r, type: "success", dataUpdatedAt: n == null ? void 0 : n.updatedAt, manual: n == null ? void 0 : n.manual }), r } setState(t, n) { this.dispatch({ type: "setState", state: t, setStateOptions: n }) } cancel(t) { var n; const r = this.promise; return (n = this.retryer) == null || n.cancel(t), r ? r.then(Ve).catch(Ve) : Promise.resolve() } destroy() { super.destroy(), this.cancel({ silent: !0 }) } reset() { this.destroy(), this.setState(this.initialState) } isActive() { return this.observers.some(t => t.options.enabled !== !1) } isDisabled() { return this.getObserversCount() > 0 && !this.isActive() } isStale() { return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some(t => t.getCurrentResult().isStale) } isStaleByTime(t = 0) { return this.state.isInvalidated || !this.state.dataUpdatedAt || !Wg(this.state.dataUpdatedAt, t) } onFocus() { var t; const n = this.observers.find(r => r.shouldFetchOnWindowFocus());
        n && n.refetch({ cancelRefetch: !1 }), (t = this.retryer) == null || t.continue() } onOnline() { var t; const n = this.observers.find(r => r.shouldFetchOnReconnect());
        n && n.refetch({ cancelRefetch: !1 }), (t = this.retryer) == null || t.continue() } addObserver(t) { this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), this.cache.notify({ type: "observerAdded", query: this, observer: t })) } removeObserver(t) { this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t), this.observers.length || (this.retryer && (this.abortSignalConsumed ? this.retryer.cancel({ revert: !0 }) : this.retryer.cancelRetry()), this.scheduleGc()), this.cache.notify({ type: "observerRemoved", query: this, observer: t })) } getObserversCount() { return this.observers.length } invalidate() { this.state.isInvalidated || this.dispatch({ type: "invalidate" }) } fetch(t, n) { var r, o; if (this.state.fetchStatus !== "idle") { if (this.state.dataUpdatedAt && n != null && n.cancelRefetch) this.cancel({ silent: !0 });
            else if (this.promise) { var i; return (i = this.retryer) == null || i.continueRetry(), this.promise } } if (t && this.setOptions(t), !this.options.queryFn) { const g = this.observers.find(w => w.options.queryFn);
            g && this.setOptions(g.options) } const s = Ax(),
            a = { queryKey: this.queryKey, pageParam: void 0, meta: this.meta },
            l = g => { Object.defineProperty(g, "signal", { enumerable: !0, get: () => { if (s) return this.abortSignalConsumed = !0, s.signal } }) };
        l(a); const u = () => this.options.queryFn ? (this.abortSignalConsumed = !1, this.options.queryFn(a)) : Promise.reject("Missing queryFn for queryKey '" + this.options.queryHash + "'"),
            c = { fetchOptions: n, options: this.options, queryKey: this.queryKey, state: this.state, fetchFn: u }; if (l(c), (r = this.options.behavior) == null || r.onFetch(c), this.revertState = this.state, this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((o = c.fetchOptions) == null ? void 0 : o.meta)) { var d;
            this.dispatch({ type: "fetch", meta: (d = c.fetchOptions) == null ? void 0 : d.meta }) } const f = g => { if (es(g) && g.silent || this.dispatch({ type: "error", error: g }), !es(g)) { var w, S, _, m;
                (w = (S = this.cache.config).onError) == null || w.call(S, g, this), (_ = (m = this.cache.config).onSettled) == null || _.call(m, this.state.data, g, this) } this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1 }; return this.retryer = qg({ fn: c.fetchFn, abort: s == null ? void 0 : s.abort.bind(s), onSuccess: g => { var w, S, _, m; if (typeof g > "u") { f(new Error(this.queryHash + " data is undefined")); return } this.setData(g), (w = (S = this.cache.config).onSuccess) == null || w.call(S, g, this), (_ = (m = this.cache.config).onSettled) == null || _.call(m, g, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1 }, onError: f, onFail: (g, w) => { this.dispatch({ type: "failed", failureCount: g, error: w }) }, onPause: () => { this.dispatch({ type: "pause" }) }, onContinue: () => { this.dispatch({ type: "continue" }) }, retry: c.options.retry, retryDelay: c.options.retryDelay, networkMode: c.options.networkMode }), this.promise = this.retryer.promise, this.promise } dispatch(t) { const n = r => { var o, i; switch (t.type) {
                case "failed":
                    return { ...r, fetchFailureCount: t.failureCount, fetchFailureReason: t.error };
                case "pause":
                    return { ...r, fetchStatus: "paused" };
                case "continue":
                    return { ...r, fetchStatus: "fetching" };
                case "fetch":
                    return { ...r, fetchFailureCount: 0, fetchFailureReason: null, fetchMeta: (o = t.meta) != null ? o : null, fetchStatus: ha(this.options.networkMode) ? "fetching" : "paused", ...!r.dataUpdatedAt && { error: null, status: "loading" } };
                case "success":
                    return { ...r, data: t.data, dataUpdateCount: r.dataUpdateCount + 1, dataUpdatedAt: (i = t.dataUpdatedAt) != null ? i : Date.now(), error: null, isInvalidated: !1, status: "success", ...!t.manual && { fetchStatus: "idle", fetchFailureCount: 0, fetchFailureReason: null } };
                case "error":
                    const s = t.error; return es(s) && s.revert && this.revertState ? { ...this.revertState, fetchStatus: "idle" } : { ...r, error: s, errorUpdateCount: r.errorUpdateCount + 1, errorUpdatedAt: Date.now(), fetchFailureCount: r.fetchFailureCount + 1, fetchFailureReason: s, fetchStatus: "idle", status: "error" };
                case "invalidate":
                    return { ...r, isInvalidated: !0 };
                case "setState":
                    return { ...r, ...t.state } } };
        this.state = n(this.state), ae.batch(() => { this.observers.forEach(r => { r.onQueryUpdate(t) }), this.cache.notify({ query: this, type: "updated", action: t }) }) } }

function Wx(e) { const t = typeof e.initialData == "function" ? e.initialData() : e.initialData,
        n = typeof t < "u",
        r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0; return { data: t, dataUpdateCount: 0, dataUpdatedAt: n ? r ? ? Date.now() : 0, error: null, errorUpdateCount: 0, errorUpdatedAt: 0, fetchFailureCount: 0, fetchFailureReason: null, fetchMeta: null, isInvalidated: !1, status: n ? "success" : "loading", fetchStatus: "idle" } } class Yg extends Go { constructor(t) { super(), this.config = t || {}, this.queries = [], this.queriesMap = {} } build(t, n, r) { var o; const i = n.queryKey,
            s = (o = n.queryHash) != null ? o : Qc(i, n); let a = this.get(s); return a || (a = new Bx({ cache: this, logger: t.getLogger(), queryKey: i, queryHash: s, options: t.defaultQueryOptions(n), state: r, defaultOptions: t.getQueryDefaults(i) }), this.add(a)), a } add(t) { this.queriesMap[t.queryHash] || (this.queriesMap[t.queryHash] = t, this.queries.push(t), this.notify({ type: "added", query: t })) } remove(t) { const n = this.queriesMap[t.queryHash];
        n && (t.destroy(), this.queries = this.queries.filter(r => r !== t), n === t && delete this.queriesMap[t.queryHash], this.notify({ type: "removed", query: t })) } clear() { ae.batch(() => { this.queries.forEach(t => { this.remove(t) }) }) } get(t) { return this.queriesMap[t] } getAll() { return this.queries } find(t, n) { const [r] = Wt(t, n); return typeof r.exact > "u" && (r.exact = !0), this.queries.find(o => sp(r, o)) } findAll(t, n) { const [r] = Wt(t, n); return Object.keys(r).length > 0 ? this.queries.filter(o => sp(r, o)) : this.queries } notify(t) { ae.batch(() => { this.listeners.forEach(({ listener: n }) => { n(t) }) }) } onFocus() { ae.batch(() => { this.queries.forEach(t => { t.onFocus() }) }) } onOnline() { ae.batch(() => { this.queries.forEach(t => { t.onOnline() }) }) } } class Vx extends Gg { constructor(t) { super(), this.defaultOptions = t.defaultOptions, this.mutationId = t.mutationId, this.mutationCache = t.mutationCache, this.logger = t.logger || Kc, this.observers = [], this.state = t.state || Hx(), this.setOptions(t.options), this.scheduleGc() } setOptions(t) { this.options = { ...this.defaultOptions, ...t }, this.updateCacheTime(this.options.cacheTime) } get meta() { return this.options.meta } setState(t) { this.dispatch({ type: "setState", state: t }) } addObserver(t) { this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), this.mutationCache.notify({ type: "observerAdded", mutation: this, observer: t })) } removeObserver(t) { this.observers = this.observers.filter(n => n !== t), this.scheduleGc(), this.mutationCache.notify({ type: "observerRemoved", mutation: this, observer: t }) } optionalRemove() { this.observers.length || (this.state.status === "loading" ? this.scheduleGc() : this.mutationCache.remove(this)) }
    continue () { var t, n; return (t = (n = this.retryer) == null ? void 0 : n.continue()) != null ? t : this.execute() } async execute() { const t = () => { var O; return this.retryer = qg({ fn: () => this.options.mutationFn ? this.options.mutationFn(this.state.variables) : Promise.reject("No mutationFn found"), onFail: (x, R) => { this.dispatch({ type: "failed", failureCount: x, error: R }) }, onPause: () => { this.dispatch({ type: "pause" }) }, onContinue: () => { this.dispatch({ type: "continue" }) }, retry: (O = this.options.retry) != null ? O : 0, retryDelay: this.options.retryDelay, networkMode: this.options.networkMode }), this.retryer.promise },
            n = this.state.status === "loading"; try { var r, o, i, s, a, l, u, c; if (!n) { var d, f, g, w;
                this.dispatch({ type: "loading", variables: this.options.variables }), await ((d = (f = this.mutationCache.config).onMutate) == null ? void 0 : d.call(f, this.state.variables, this)); const x = await ((g = (w = this.options).onMutate) == null ? void 0 : g.call(w, this.state.variables));
                x !== this.state.context && this.dispatch({ type: "loading", context: x, variables: this.state.variables }) } const O = await t(); return await ((r = (o = this.mutationCache.config).onSuccess) == null ? void 0 : r.call(o, O, this.state.variables, this.state.context, this)), await ((i = (s = this.options).onSuccess) == null ? void 0 : i.call(s, O, this.state.variables, this.state.context)), await ((a = (l = this.mutationCache.config).onSettled) == null ? void 0 : a.call(l, O, null, this.state.variables, this.state.context, this)), await ((u = (c = this.options).onSettled) == null ? void 0 : u.call(c, O, null, this.state.variables, this.state.context)), this.dispatch({ type: "success", data: O }), O } catch (O) { try { var S, _, m, p, h, E, b, P; throw await ((S = (_ = this.mutationCache.config).onError) == null ? void 0 : S.call(_, O, this.state.variables, this.state.context, this)), await ((m = (p = this.options).onError) == null ? void 0 : m.call(p, O, this.state.variables, this.state.context)), await ((h = (E = this.mutationCache.config).onSettled) == null ? void 0 : h.call(E, void 0, O, this.state.variables, this.state.context, this)), await ((b = (P = this.options).onSettled) == null ? void 0 : b.call(P, void 0, O, this.state.variables, this.state.context)), O } finally { this.dispatch({ type: "error", error: O }) } } } dispatch(t) { const n = r => { switch (t.type) {
                case "failed":
                    return { ...r, failureCount: t.failureCount, failureReason: t.error };
                case "pause":
                    return { ...r, isPaused: !0 };
                case "continue":
                    return { ...r, isPaused: !1 };
                case "loading":
                    return { ...r, context: t.context, data: void 0, failureCount: 0, failureReason: null, error: null, isPaused: !ha(this.options.networkMode), status: "loading", variables: t.variables };
                case "success":
                    return { ...r, data: t.data, failureCount: 0, failureReason: null, error: null, status: "success", isPaused: !1 };
                case "error":
                    return { ...r, data: void 0, error: t.error, failureCount: r.failureCount + 1, failureReason: t.error, isPaused: !1, status: "error" };
                case "setState":
                    return { ...r, ...t.state } } };
        this.state = n(this.state), ae.batch(() => { this.observers.forEach(r => { r.onMutationUpdate(t) }), this.mutationCache.notify({ mutation: this, type: "updated", action: t }) }) } }

function Hx() { return { context: void 0, data: void 0, error: null, failureCount: 0, failureReason: null, isPaused: !1, status: "idle", variables: void 0 } } class Qx extends Go { constructor(t) { super(), this.config = t || {}, this.mutations = [], this.mutationId = 0 } build(t, n, r) { const o = new Vx({ mutationCache: this, logger: t.getLogger(), mutationId: ++this.mutationId, options: t.defaultMutationOptions(n), state: r, defaultOptions: n.mutationKey ? t.getMutationDefaults(n.mutationKey) : void 0 }); return this.add(o), o } add(t) { this.mutations.push(t), this.notify({ type: "added", mutation: t }) } remove(t) { this.mutations = this.mutations.filter(n => n !== t), this.notify({ type: "removed", mutation: t }) } clear() { ae.batch(() => { this.mutations.forEach(t => { this.remove(t) }) }) } getAll() { return this.mutations } find(t) { return typeof t.exact > "u" && (t.exact = !0), this.mutations.find(n => ap(t, n)) } findAll(t) { return this.mutations.filter(n => ap(t, n)) } notify(t) { ae.batch(() => { this.listeners.forEach(({ listener: n }) => { n(t) }) }) } resumePausedMutations() { var t; return this.resuming = ((t = this.resuming) != null ? t : Promise.resolve()).then(() => { const n = this.mutations.filter(r => r.state.isPaused); return ae.batch(() => n.reduce((r, o) => r.then(() => o.continue().catch(Ve)), Promise.resolve())) }).then(() => { this.resuming = void 0 }), this.resuming } }

function Kx() { return { onFetch: e => { e.fetchFn = () => { var t, n, r, o, i, s; const a = (t = e.fetchOptions) == null || (n = t.meta) == null ? void 0 : n.refetchPage,
                    l = (r = e.fetchOptions) == null || (o = r.meta) == null ? void 0 : o.fetchMore,
                    u = l == null ? void 0 : l.pageParam,
                    c = (l == null ? void 0 : l.direction) === "forward",
                    d = (l == null ? void 0 : l.direction) === "backward",
                    f = ((i = e.state.data) == null ? void 0 : i.pages) || [],
                    g = ((s = e.state.data) == null ? void 0 : s.pageParams) || []; let w = g,
                    S = !1; const _ = P => { Object.defineProperty(P, "signal", { enumerable: !0, get: () => { var O; if ((O = e.signal) != null && O.aborted) S = !0;
                                else { var x;
                                    (x = e.signal) == null || x.addEventListener("abort", () => { S = !0 }) } return e.signal } }) },
                    m = e.options.queryFn || (() => Promise.reject("Missing queryFn for queryKey '" + e.options.queryHash + "'")),
                    p = (P, O, x, R) => (w = R ? [O, ...w] : [...w, O], R ? [x, ...P] : [...P, x]),
                    h = (P, O, x, R) => { if (S) return Promise.reject("Cancelled"); if (typeof x > "u" && !O && P.length) return Promise.resolve(P); const L = { queryKey: e.queryKey, pageParam: x, meta: e.options.meta };
                        _(L); const D = m(L); return Promise.resolve(D).then(j => p(P, x, j, R)) }; let E; if (!f.length) E = h([]);
                else if (c) { const P = typeof u < "u",
                        O = P ? u : dp(e.options, f);
                    E = h(f, P, O) } else if (d) { const P = typeof u < "u",
                        O = P ? u : qx(e.options, f);
                    E = h(f, P, O, !0) } else { w = []; const P = typeof e.options.getNextPageParam > "u";
                    E = (a && f[0] ? a(f[0], 0, f) : !0) ? h([], P, g[0]) : Promise.resolve(p([], g[0], f[0])); for (let x = 1; x < f.length; x++) E = E.then(R => { if (a && f[x] ? a(f[x], x, f) : !0) { const D = P ? g[x] : dp(e.options, R); return h(R, P, D) } return Promise.resolve(p(R, g[x], f[x])) }) } return E.then(P => ({ pages: P, pageParams: w })) } } } }

function dp(e, t) { return e.getNextPageParam == null ? void 0 : e.getNextPageParam(t[t.length - 1], t) }

function qx(e, t) { return e.getPreviousPageParam == null ? void 0 : e.getPreviousPageParam(t[0], t) } class Gx { constructor(t = {}) { this.queryCache = t.queryCache || new Yg, this.mutationCache = t.mutationCache || new Qx, this.logger = t.logger || Kc, this.defaultOptions = t.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = [], this.mountCount = 0 } mount() { this.mountCount++, this.mountCount === 1 && (this.unsubscribeFocus = As.subscribe(() => { As.isFocused() && (this.resumePausedMutations(), this.queryCache.onFocus()) }), this.unsubscribeOnline = Fs.subscribe(() => { Fs.isOnline() && (this.resumePausedMutations(), this.queryCache.onOnline()) })) } unmount() { var t, n;
        this.mountCount--, this.mountCount === 0 && ((t = this.unsubscribeFocus) == null || t.call(this), this.unsubscribeFocus = void 0, (n = this.unsubscribeOnline) == null || n.call(this), this.unsubscribeOnline = void 0) } isFetching(t, n) { const [r] = Wt(t, n); return r.fetchStatus = "fetching", this.queryCache.findAll(r).length } isMutating(t) { return this.mutationCache.findAll({ ...t, fetching: !0 }).length } getQueryData(t, n) { var r; return (r = this.queryCache.find(t, n)) == null ? void 0 : r.state.data } ensureQueryData(t, n, r) { const o = Zr(t, n, r),
            i = this.getQueryData(o.queryKey); return i ? Promise.resolve(i) : this.fetchQuery(o) } getQueriesData(t) { return this.getQueryCache().findAll(t).map(({ queryKey: n, state: r }) => { const o = r.data; return [n, o] }) } setQueryData(t, n, r) { const o = this.queryCache.find(t),
            i = o == null ? void 0 : o.state.data,
            s = jx(n, i); if (typeof s > "u") return; const a = Zr(t),
            l = this.defaultQueryOptions(a); return this.queryCache.build(this, l).setData(s, { ...r, manual: !0 }) } setQueriesData(t, n, r) { return ae.batch(() => this.getQueryCache().findAll(t).map(({ queryKey: o }) => [o, this.setQueryData(o, n, r)])) } getQueryState(t, n) { var r; return (r = this.queryCache.find(t, n)) == null ? void 0 : r.state } removeQueries(t, n) { const [r] = Wt(t, n), o = this.queryCache;
        ae.batch(() => { o.findAll(r).forEach(i => { o.remove(i) }) }) } resetQueries(t, n, r) { const [o, i] = Wt(t, n, r), s = this.queryCache, a = { type: "active", ...o }; return ae.batch(() => (s.findAll(o).forEach(l => { l.reset() }), this.refetchQueries(a, i))) } cancelQueries(t, n, r) { const [o, i = {}] = Wt(t, n, r);
        typeof i.revert > "u" && (i.revert = !0); const s = ae.batch(() => this.queryCache.findAll(o).map(a => a.cancel(i))); return Promise.all(s).then(Ve).catch(Ve) } invalidateQueries(t, n, r) { const [o, i] = Wt(t, n, r); return ae.batch(() => { var s, a; if (this.queryCache.findAll(o).forEach(u => { u.invalidate() }), o.refetchType === "none") return Promise.resolve(); const l = { ...o, type: (s = (a = o.refetchType) != null ? a : o.type) != null ? s : "active" }; return this.refetchQueries(l, i) }) } refetchQueries(t, n, r) { const [o, i] = Wt(t, n, r), s = ae.batch(() => this.queryCache.findAll(o).filter(l => !l.isDisabled()).map(l => { var u; return l.fetch(void 0, { ...i, cancelRefetch: (u = i == null ? void 0 : i.cancelRefetch) != null ? u : !0, meta: { refetchPage: o.refetchPage } }) })); let a = Promise.all(s).then(Ve); return i != null && i.throwOnError || (a = a.catch(Ve)), a } fetchQuery(t, n, r) { const o = Zr(t, n, r),
            i = this.defaultQueryOptions(o);
        typeof i.retry > "u" && (i.retry = !1); const s = this.queryCache.build(this, i); return s.isStaleByTime(i.staleTime) ? s.fetch(i) : Promise.resolve(s.state.data) } prefetchQuery(t, n, r) { return this.fetchQuery(t, n, r).then(Ve).catch(Ve) } fetchInfiniteQuery(t, n, r) { const o = Zr(t, n, r); return o.behavior = Kx(), this.fetchQuery(o) } prefetchInfiniteQuery(t, n, r) { return this.fetchInfiniteQuery(t, n, r).then(Ve).catch(Ve) } resumePausedMutations() { return this.mutationCache.resumePausedMutations() } getQueryCache() { return this.queryCache } getMutationCache() { return this.mutationCache } getLogger() { return this.logger } getDefaultOptions() { return this.defaultOptions } setDefaultOptions(t) { this.defaultOptions = t } setQueryDefaults(t, n) { const r = this.queryDefaults.find(o => kn(t) === kn(o.queryKey));
        r ? r.defaultOptions = n : this.queryDefaults.push({ queryKey: t, defaultOptions: n }) } getQueryDefaults(t) { if (!t) return; const n = this.queryDefaults.find(r => js(t, r.queryKey)); return n == null ? void 0 : n.defaultOptions } setMutationDefaults(t, n) { const r = this.mutationDefaults.find(o => kn(t) === kn(o.mutationKey));
        r ? r.defaultOptions = n : this.mutationDefaults.push({ mutationKey: t, defaultOptions: n }) } getMutationDefaults(t) { if (!t) return; const n = this.mutationDefaults.find(r => js(t, r.mutationKey)); return n == null ? void 0 : n.defaultOptions } defaultQueryOptions(t) { if (t != null && t._defaulted) return t; const n = { ...this.defaultOptions.queries, ...this.getQueryDefaults(t == null ? void 0 : t.queryKey), ...t, _defaulted: !0 }; return !n.queryHash && n.queryKey && (n.queryHash = Qc(n.queryKey, n)), typeof n.refetchOnReconnect > "u" && (n.refetchOnReconnect = n.networkMode !== "always"), typeof n.useErrorBoundary > "u" && (n.useErrorBoundary = !!n.suspense), n } defaultMutationOptions(t) { return t != null && t._defaulted ? t : { ...this.defaultOptions.mutations, ...this.getMutationDefaults(t == null ? void 0 : t.mutationKey), ...t, _defaulted: !0 } } clear() { this.queryCache.clear(), this.mutationCache.clear() } } class Yx extends Go { constructor(t, n) { super(), this.client = t, this.options = n, this.trackedProps = new Set, this.selectError = null, this.bindMethods(), this.setOptions(n) } bindMethods() { this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this) } onSubscribe() { this.listeners.size === 1 && (this.currentQuery.addObserver(this), pp(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers()) } onUnsubscribe() { this.hasListeners() || this.destroy() } shouldFetchOnReconnect() { return gu(this.currentQuery, this.options, this.options.refetchOnReconnect) } shouldFetchOnWindowFocus() { return gu(this.currentQuery, this.options, this.options.refetchOnWindowFocus) } destroy() { this.listeners = new Set, this.clearStaleTimeout(), this.clearRefetchInterval(), this.currentQuery.removeObserver(this) } setOptions(t, n) { const r = this.options,
            o = this.currentQuery; if (this.options = this.client.defaultQueryOptions(t), pu(r, this.options) || this.client.getQueryCache().notify({ type: "observerOptionsUpdated", query: this.currentQuery, observer: this }), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean") throw new Error("Expected enabled to be a boolean");
        this.options.queryKey || (this.options.queryKey = r.queryKey), this.updateQuery(); const i = this.hasListeners();
        i && hp(this.currentQuery, o, this.options, r) && this.executeFetch(), this.updateResult(n), i && (this.currentQuery !== o || this.options.enabled !== r.enabled || this.options.staleTime !== r.staleTime) && this.updateStaleTimeout(); const s = this.computeRefetchInterval();
        i && (this.currentQuery !== o || this.options.enabled !== r.enabled || s !== this.currentRefetchInterval) && this.updateRefetchInterval(s) } getOptimisticResult(t) { const n = this.client.getQueryCache().build(this.client, t),
            r = this.createResult(n, t); return Xx(this, r, t) && (this.currentResult = r, this.currentResultOptions = this.options, this.currentResultState = this.currentQuery.state), r } getCurrentResult() { return this.currentResult } trackResult(t) { const n = {}; return Object.keys(t).forEach(r => { Object.defineProperty(n, r, { configurable: !1, enumerable: !0, get: () => (this.trackedProps.add(r), t[r]) }) }), n } getCurrentQuery() { return this.currentQuery } remove() { this.client.getQueryCache().remove(this.currentQuery) } refetch({ refetchPage: t, ...n } = {}) { return this.fetch({ ...n, meta: { refetchPage: t } }) } fetchOptimistic(t) { const n = this.client.defaultQueryOptions(t),
            r = this.client.getQueryCache().build(this.client, n); return r.isFetchingOptimistic = !0, r.fetch().then(() => this.createResult(r, n)) } fetch(t) { var n; return this.executeFetch({ ...t, cancelRefetch: (n = t.cancelRefetch) != null ? n : !0 }).then(() => (this.updateResult(), this.currentResult)) } executeFetch(t) { this.updateQuery(); let n = this.currentQuery.fetch(this.options, t); return t != null && t.throwOnError || (n = n.catch(Ve)), n } updateStaleTimeout() { if (this.clearStaleTimeout(), Do || this.currentResult.isStale || !du(this.options.staleTime)) return; const n = Wg(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
        this.staleTimeoutId = setTimeout(() => { this.currentResult.isStale || this.updateResult() }, n) } computeRefetchInterval() { var t; return typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : (t = this.options.refetchInterval) != null ? t : !1 } updateRefetchInterval(t) { this.clearRefetchInterval(), this.currentRefetchInterval = t, !(Do || this.options.enabled === !1 || !du(this.currentRefetchInterval) || this.currentRefetchInterval === 0) && (this.refetchIntervalId = setInterval(() => {
            (this.options.refetchIntervalInBackground || As.isFocused()) && this.executeFetch() }, this.currentRefetchInterval)) } updateTimers() { this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval()) } clearStaleTimeout() { this.staleTimeoutId && (clearTimeout(this.staleTimeoutId), this.staleTimeoutId = void 0) } clearRefetchInterval() { this.refetchIntervalId && (clearInterval(this.refetchIntervalId), this.refetchIntervalId = void 0) } createResult(t, n) { const r = this.currentQuery,
            o = this.options,
            i = this.currentResult,
            s = this.currentResultState,
            a = this.currentResultOptions,
            l = t !== r,
            u = l ? t.state : this.currentQueryInitialState,
            c = l ? this.currentResult : this.previousQueryResult,
            { state: d } = t; let { dataUpdatedAt: f, error: g, errorUpdatedAt: w, fetchStatus: S, status: _ } = d, m = !1, p = !1, h; if (n._optimisticResults) { const x = this.hasListeners(),
                R = !x && pp(t, n),
                L = x && hp(t, r, n, o);
            (R || L) && (S = ha(t.options.networkMode) ? "fetching" : "paused", f || (_ = "loading")), n._optimisticResults === "isRestoring" && (S = "idle") } if (n.keepPreviousData && !d.dataUpdatedAt && c != null && c.isSuccess && _ !== "error") h = c.data, f = c.dataUpdatedAt, _ = c.status, m = !0;
        else if (n.select && typeof d.data < "u")
            if (i && d.data === (s == null ? void 0 : s.data) && n.select === this.selectFn) h = this.selectResult;
            else try { this.selectFn = n.select, h = n.select(d.data), h = mu(i == null ? void 0 : i.data, h, n), this.selectResult = h, this.selectError = null } catch (x) { this.selectError = x } else h = d.data; if (typeof n.placeholderData < "u" && typeof h > "u" && _ === "loading") { let x; if (i != null && i.isPlaceholderData && n.placeholderData === (a == null ? void 0 : a.placeholderData)) x = i.data;
            else if (x = typeof n.placeholderData == "function" ? n.placeholderData() : n.placeholderData, n.select && typeof x < "u") try { x = n.select(x), this.selectError = null } catch (R) { this.selectError = R } typeof x < "u" && (_ = "success", h = mu(i == null ? void 0 : i.data, x, n), p = !0) } this.selectError && (g = this.selectError, h = this.selectResult, w = Date.now(), _ = "error"); const E = S === "fetching",
            b = _ === "loading",
            P = _ === "error"; return { status: _, fetchStatus: S, isLoading: b, isSuccess: _ === "success", isError: P, isInitialLoading: b && E, data: h, dataUpdatedAt: f, error: g, errorUpdatedAt: w, failureCount: d.fetchFailureCount, failureReason: d.fetchFailureReason, errorUpdateCount: d.errorUpdateCount, isFetched: d.dataUpdateCount > 0 || d.errorUpdateCount > 0, isFetchedAfterMount: d.dataUpdateCount > u.dataUpdateCount || d.errorUpdateCount > u.errorUpdateCount, isFetching: E, isRefetching: E && !b, isLoadingError: P && d.dataUpdatedAt === 0, isPaused: S === "paused", isPlaceholderData: p, isPreviousData: m, isRefetchError: P && d.dataUpdatedAt !== 0, isStale: qc(t, n), refetch: this.refetch, remove: this.remove } } updateResult(t) { const n = this.currentResult,
            r = this.createResult(this.currentQuery, this.options); if (this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, pu(r, n)) return;
        this.currentResult = r; const o = { cache: !0 },
            i = () => { if (!n) return !0; const { notifyOnChangeProps: s } = this.options, a = typeof s == "function" ? s() : s; if (a === "all" || !a && !this.trackedProps.size) return !0; const l = new Set(a ? ? this.trackedProps); return this.options.useErrorBoundary && l.add("error"), Object.keys(this.currentResult).some(u => { const c = u; return this.currentResult[c] !== n[c] && l.has(c) }) };
        (t == null ? void 0 : t.listeners) !== !1 && i() && (o.listeners = !0), this.notify({ ...o, ...t }) } updateQuery() { const t = this.client.getQueryCache().build(this.client, this.options); if (t === this.currentQuery) return; const n = this.currentQuery;
        this.currentQuery = t, this.currentQueryInitialState = t.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (n == null || n.removeObserver(this), t.addObserver(this)) } onQueryUpdate(t) { const n = {};
        t.type === "success" ? n.onSuccess = !t.manual : t.type === "error" && !es(t.error) && (n.onError = !0), this.updateResult(n), this.hasListeners() && this.updateTimers() } notify(t) { ae.batch(() => { if (t.onSuccess) { var n, r, o, i;
                (n = (r = this.options).onSuccess) == null || n.call(r, this.currentResult.data), (o = (i = this.options).onSettled) == null || o.call(i, this.currentResult.data, null) } else if (t.onError) { var s, a, l, u;
                (s = (a = this.options).onError) == null || s.call(a, this.currentResult.error), (l = (u = this.options).onSettled) == null || l.call(u, void 0, this.currentResult.error) } t.listeners && this.listeners.forEach(({ listener: c }) => { c(this.currentResult) }), t.cache && this.client.getQueryCache().notify({ query: this.currentQuery, type: "observerResultsUpdated" }) }) } }

function Jx(e, t) { return t.enabled !== !1 && !e.state.dataUpdatedAt && !(e.state.status === "error" && t.retryOnMount === !1) }

function pp(e, t) { return Jx(e, t) || e.state.dataUpdatedAt > 0 && gu(e, t, t.refetchOnMount) }

function gu(e, t, n) { if (t.enabled !== !1) { const r = typeof n == "function" ? n(e) : n; return r === "always" || r !== !1 && qc(e, t) } return !1 }

function hp(e, t, n, r) { return n.enabled !== !1 && (e !== t || r.enabled === !1) && (!n.suspense || e.state.status !== "error") && qc(e, n) }

function qc(e, t) { return e.isStaleByTime(t.staleTime) }

function Xx(e, t, n) { return n.keepPreviousData ? !1 : n.placeholderData !== void 0 ? t.isPlaceholderData : !pu(e.getCurrentResult(), t) }
var Jg = { exports: {} },
    Xg = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _r = v;

function Zx(e, t) { return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t }
var eE = typeof Object.is == "function" ? Object.is : Zx,
    tE = _r.useState,
    nE = _r.useEffect,
    rE = _r.useLayoutEffect,
    oE = _r.useDebugValue;

function iE(e, t) { var n = t(),
        r = tE({ inst: { value: n, getSnapshot: t } }),
        o = r[0].inst,
        i = r[1]; return rE(function() { o.value = n, o.getSnapshot = t, Xa(o) && i({ inst: o }) }, [e, n, t]), nE(function() { return Xa(o) && i({ inst: o }), e(function() { Xa(o) && i({ inst: o }) }) }, [e]), oE(n), n }

function Xa(e) { var t = e.getSnapshot;
    e = e.value; try { var n = t(); return !eE(e, n) } catch { return !0 } }

function sE(e, t) { return t() }
var aE = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? sE : iE;
Xg.useSyncExternalStore = _r.useSyncExternalStore !== void 0 ? _r.useSyncExternalStore : aE;
Jg.exports = Xg;
var lE = Jg.exports;
const uE = lE.useSyncExternalStore,
    mp = v.createContext(void 0),
    Zg = v.createContext(!1);

function ev(e, t) { return e || (t && typeof window < "u" ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = mp), window.ReactQueryClientContext) : mp) }
const cE = ({ context: e } = {}) => { const t = v.useContext(ev(e, v.useContext(Zg))); if (!t) throw new Error("No QueryClient set, use QueryClientProvider to set one"); return t },
    fE = ({ client: e, children: t, context: n, contextSharing: r = !1 }) => { v.useEffect(() => (e.mount(), () => { e.unmount() }), [e]); const o = ev(n, r); return v.createElement(Zg.Provider, { value: !n && r }, v.createElement(o.Provider, { value: e }, t)) },
    tv = v.createContext(!1),
    dE = () => v.useContext(tv);
tv.Provider;

function pE() { let e = !1; return { clearReset: () => { e = !1 }, reset: () => { e = !0 }, isReset: () => e } }
const hE = v.createContext(pE()),
    mE = () => v.useContext(hE);

function gE(e, t) { return typeof e == "function" ? e(...t) : !!e }
const vE = (e, t) => {
        (e.suspense || e.useErrorBoundary) && (t.isReset() || (e.retryOnMount = !1)) },
    yE = e => { v.useEffect(() => { e.clearReset() }, [e]) },
    wE = ({ result: e, errorResetBoundary: t, useErrorBoundary: n, query: r }) => e.isError && !t.isReset() && !e.isFetching && gE(n, [e.error, r]),
    SE = e => { e.suspense && typeof e.staleTime != "number" && (e.staleTime = 1e3) },
    xE = (e, t) => e.isLoading && e.isFetching && !t,
    EE = (e, t, n) => (e == null ? void 0 : e.suspense) && xE(t, n),
    CE = (e, t, n) => t.fetchOptimistic(e).then(({ data: r }) => { e.onSuccess == null || e.onSuccess(r), e.onSettled == null || e.onSettled(r, null) }).catch(r => { n.clearReset(), e.onError == null || e.onError(r), e.onSettled == null || e.onSettled(void 0, r) });

function _E(e, t) { const n = cE({ context: e.context }),
        r = dE(),
        o = mE(),
        i = n.defaultQueryOptions(e);
    i._optimisticResults = r ? "isRestoring" : "optimistic", i.onError && (i.onError = ae.batchCalls(i.onError)), i.onSuccess && (i.onSuccess = ae.batchCalls(i.onSuccess)), i.onSettled && (i.onSettled = ae.batchCalls(i.onSettled)), SE(i), vE(i, o), yE(o); const [s] = v.useState(() => new t(n, i)), a = s.getOptimisticResult(i); if (uE(v.useCallback(l => { const u = r ? () => {} : s.subscribe(ae.batchCalls(l)); return s.updateResult(), u }, [s, r]), () => s.getCurrentResult(), () => s.getCurrentResult()), v.useEffect(() => { s.setOptions(i, { listeners: !1 }) }, [i, s]), EE(i, a, r)) throw CE(i, s, o); if (wE({ result: a, errorResetBoundary: o, useErrorBoundary: i.useErrorBoundary, query: s.getCurrentQuery() })) throw a.error; return i.notifyOnChangeProps ? a : s.trackResult(a) }

function nv(e, t, n) { const r = Zr(e, t, n); return _E(r, Yx) }

function rv(e) { var t, n, r = ""; if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e))
            for (t = 0; t < e.length; t++) e[t] && (n = rv(e[t])) && (r && (r += " "), r += n);
        else
            for (t in e) e[t] && (r && (r += " "), r += t); return r }

function Mt() { for (var e, t, n = 0, r = ""; n < arguments.length;)(e = arguments[n++]) && (t = rv(e)) && (r && (r += " "), r += t); return r }
let kE = 0;

function vu(e, t) { const n = `atom${++kE}`,
        r = { toString: () => n }; return typeof e == "function" ? r.read = e : (r.init = e, r.read = o => o(r), r.write = (o, i, s) => i(r, typeof s == "function" ? s(o(r)) : s)), t && (r.write = t), r }
const gp = e => "init" in e,
    vp = e => !!e.write,
    $s = new WeakMap,
    OE = (e, t) => { $s.set(e, t), e.catch(() => {}).finally(() => $s.delete(e)) },
    yp = (e, t) => { const n = $s.get(e);
        n && ($s.delete(e), n(t)) },
    wp = (e, t) => { e.status = "fulfilled", e.value = t },
    Sp = (e, t) => { e.status = "rejected", e.reason = t },
    PE = e => typeof(e == null ? void 0 : e.then) == "function",
    Li = (e, t) => "v" in e && "v" in t && Object.is(e.v, t.v),
    xp = (e, t) => "e" in e && "e" in t && Object.is(e.e, t.e),
    qr = e => "v" in e && e.v instanceof Promise,
    bE = (e, t) => "v" in e && "v" in t && e.v.orig && e.v.orig === t.v.orig,
    Ni = e => { if ("e" in e) throw e.e; return e.v },
    RE = () => { const e = new WeakMap,
            t = new WeakMap,
            n = new Map; let r, o; const i = x => e.get(x),
            s = (x, R) => { const L = e.get(x); if (e.set(x, R), n.has(x) || n.set(x, L), L && qr(L)) { const D = "v" in R ? R.v instanceof Promise ? R.v : Promise.resolve(R.v) : Promise.reject(R.e);
                    L.v !== D && yp(L.v, D) } },
            a = (x, R, L) => { const D = new Map; let A = !1;
                L.forEach((j, N) => {!j && N === x && (j = R), j && (D.set(N, j), R.d.get(N) !== j && (A = !0)) }), (A || R.d.size !== D.size) && (R.d = D) },
            l = (x, R, L) => { const D = i(x),
                    A = { d: (D == null ? void 0 : D.d) || new Map, v: R }; if (L && a(x, A, L), D && Li(D, A) && D.d === A.d) return D; if (D && qr(D) && qr(A) && bE(D, A)) { if (D.d === A.d) return D;
                    A.v = D.v } return s(x, A), A },
            u = (x, R, L, D) => { if (PE(R)) { let A; const j = new Promise((N, T) => { let F = !1;
                        R.then(C => { if (!F) { F = !0; const k = i(x),
                                    M = l(x, j, L);
                                wp(j, C), N(C), t.has(x) && (k == null ? void 0 : k.d) !== M.d && b(x, M, k == null ? void 0 : k.d) } }, C => { if (!F) { F = !0; const k = i(x),
                                    M = l(x, j, L);
                                Sp(j, C), T(C), t.has(x) && (k == null ? void 0 : k.d) !== M.d && b(x, M, k == null ? void 0 : k.d) } }), A = C => { F || (F = !0, C.then(k => wp(j, k), k => Sp(j, k)), N(C)) } }); return j.orig = R, j.status = "pending", OE(j, N => { N && A(N), D == null || D() }), l(x, j, L) } return l(x, R, L) },
            c = (x, R, L) => { const D = i(x),
                    A = { d: (D == null ? void 0 : D.d) || new Map, e: R }; return L && a(x, A, L), D && xp(D, A) && D.d === A.d ? D : (s(x, A), A) },
            d = (x, R) => { const L = i(x); if (!R && L && (t.has(x) || Array.from(L.d).every(([C, k]) => C === x || d(C) === k))) return L; const D = new Map; let A = !0; const j = C => { if (C === x) { const M = i(C); if (M) return D.set(C, M), Ni(M); if (gp(C)) return D.set(C, void 0), C.init; throw new Error("no atom init") } const k = d(C); return D.set(C, k), Ni(k) }; let N, T; const F = { get signal() { return N || (N = new AbortController), N.signal }, get setSelf() { return !T && vp(x) && (T = (...C) => { if (!A) return p(x, ...C) }), T } }; try { const C = x.read(j, F); return u(x, C, D, () => N == null ? void 0 : N.abort()) } catch (C) { return c(x, C, D) } finally { A = !1 } },
            f = x => Ni(d(x)),
            g = x => { let R = t.get(x); return R || (R = h(x)), R },
            w = (x, R) => !R.l.size && (!R.t.size || R.t.size === 1 && R.t.has(x)),
            S = x => { const R = t.get(x);
                R && w(x, R) && E(x) },
            _ = x => { const R = new Map,
                    L = new WeakMap,
                    D = N => { var T; const F = new Set((T = t.get(N)) == null ? void 0 : T.t); return n.forEach((C, k) => { var M;
                            (M = i(k)) != null && M.d.has(N) && F.add(k) }), F },
                    A = N => { D(N).forEach(T => { T !== N && (R.set(T, (R.get(T) || new Set).add(N)), L.set(T, (L.get(T) || 0) + 1), A(T)) }) };
                A(x); const j = N => { D(N).forEach(T => { var F; if (T !== N) { let C = L.get(T); if (C && L.set(T, --C), !C) { let k = !!((F = R.get(T)) != null && F.size); if (k) { const M = i(T),
                                        U = d(T, !0);
                                    k = !M || !Li(M, U) } k || R.forEach(M => M.delete(T)) } j(T) } }) };
                j(x) },
            m = (x, ...R) => { let L = !0; const D = N => Ni(d(N)),
                    A = (N, ...T) => { let F; if (N === x) { if (!gp(N)) throw new Error("atom not writable"); const C = i(N),
                                k = u(N, T[0]);
                            (!C || !Li(C, k)) && _(N) } else F = m(N, ...T); if (!L) { const C = P() } return F },
                    j = x.write(D, A, ...R); return L = !1, j },
            p = (x, ...R) => { const L = m(x, ...R),
                    D = P(); return L },
            h = (x, R, L) => { var D; const A = L || [];
                (D = i(x)) == null || D.d.forEach((N, T) => { const F = t.get(T);
                    F ? F.t.add(x) : T !== x && h(T, x, A) }), d(x); const j = { t: new Set(R && [R]), l: new Set }; if (t.set(x, j), vp(x) && x.onMount) { const { onMount: N } = x;
                    A.push(() => { const T = N((...F) => p(x, ...F));
                        T && (j.u = T) }) } return L || A.forEach(N => N()), j },
            E = x => { var R; const L = (R = t.get(x)) == null ? void 0 : R.u;
                L && L(), t.delete(x); const D = i(x);
                D && (qr(D) && yp(D.v), D.d.forEach((A, j) => { if (j !== x) { const N = t.get(j);
                        N && (N.t.delete(x), w(j, N) && E(j)) } })) },
            b = (x, R, L) => { const D = new Set(R.d.keys());
                L == null || L.forEach((A, j) => { if (D.has(j)) { D.delete(j); return } const N = t.get(j);
                    N && (N.t.delete(x), w(j, N) && E(j)) }), D.forEach(A => { const j = t.get(A);
                    j ? j.t.add(x) : t.has(x) && h(A, x) }) },
            P = () => { let x; for (; n.size;) { const R = Array.from(n);
                    n.clear(), R.forEach(([L, D]) => { const A = i(L); if (A) { const j = t.get(L);
                            j && A.d !== (D == null ? void 0 : D.d) && b(L, A, D == null ? void 0 : D.d), j && !(D && !qr(D) && (Li(D, A) || xp(D, A))) && j.l.forEach(N => N()) } }) } }; return { get: f, set: p, sub: (x, R) => { const L = g(x),
                    D = P(),
                    A = L.l; return A.add(R), () => { A.delete(R), S(x) } } } };
let Za;
const LE = () => (Za || (Za = RE()), Za),
    NE = v.createContext(void 0),
    ov = e => { const t = v.useContext(NE); return (e == null ? void 0 : e.store) || t || LE() },
    TE = e => typeof(e == null ? void 0 : e.then) == "function",
    IE = Q.use || (e => { if (e.status === "pending") throw e; if (e.status === "fulfilled") return e.value; throw e.status === "rejected" ? e.reason : (e.status = "pending", e.then(t => { e.status = "fulfilled", e.value = t }, t => { e.status = "rejected", e.reason = t }), e) });

function DE(e, t) { const n = ov(t),
        [
            [r, o, i], s
        ] = v.useReducer(u => { const c = n.get(e); return Object.is(u[0], c) && u[1] === n && u[2] === e ? u : [c, n, e] }, void 0, () => [n.get(e), n, e]); let a = r;
    (o !== n || i !== e) && (s(), a = n.get(e)); const l = t == null ? void 0 : t.delay; return v.useEffect(() => { const u = n.sub(e, () => { if (typeof l == "number") { setTimeout(s, l); return } s() }); return s(), u }, [n, e, l]), v.useDebugValue(a), TE(a) ? IE(a) : a }

function ME(e, t) { const n = ov(t); return v.useCallback((...o) => n.set(e, ...o), [n, e]) }

function jE(e, t) { return [DE(e, t), ME(e, t)] }
/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Mo() { return Mo = Object.assign ? Object.assign.bind() : function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, Mo.apply(this, arguments) }
var Yt;
(function(e) { e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE" })(Yt || (Yt = {}));
const Ep = "popstate";

function AE(e) { e === void 0 && (e = {});

    function t(o, i) { let { pathname: s = "/", search: a = "", hash: l = "" } = Un(o.location.hash.substr(1)); return !s.startsWith("/") && !s.startsWith(".") && (s = "/" + s), yu("", { pathname: s, search: a, hash: l }, i.state && i.state.usr || null, i.state && i.state.key || "default") }

    function n(o, i) { let s = o.document.querySelector("base"),
            a = ""; if (s && s.getAttribute("href")) { let l = o.location.href,
                u = l.indexOf("#");
            a = u === -1 ? l : l.slice(0, u) } return a + "#" + (typeof i == "string" ? i : Us(i)) }

    function r(o, i) { ma(o.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(i) + ")") } return $E(t, n, r, e) }

function ge(e, t) { if (e === !1 || e === null || typeof e > "u") throw new Error(t) }

function ma(e, t) { if (!e) { typeof console < "u" && console.warn(t); try { throw new Error(t) } catch {} } }

function FE() { return Math.random().toString(36).substr(2, 8) }

function Cp(e, t) { return { usr: e.state, key: e.key, idx: t } }

function yu(e, t, n, r) { return n === void 0 && (n = null), Mo({ pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" }, typeof t == "string" ? Un(t) : t, { state: n, key: t && t.key || r || FE() }) }

function Us(e) { let { pathname: t = "/", search: n = "", hash: r = "" } = e; return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t }

function Un(e) { let t = {}; if (e) { let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n)); let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e) } return t }

function $E(e, t, n, r) { r === void 0 && (r = {}); let { window: o = document.defaultView, v5Compat: i = !1 } = r, s = o.history, a = Yt.Pop, l = null, u = c();
    u == null && (u = 0, s.replaceState(Mo({}, s.state, { idx: u }), ""));

    function c() { return (s.state || { idx: null }).idx }

    function d() { a = Yt.Pop; let _ = c(),
            m = _ == null ? null : _ - u;
        u = _, l && l({ action: a, location: S.location, delta: m }) }

    function f(_, m) { a = Yt.Push; let p = yu(S.location, _, m);
        n && n(p, _), u = c() + 1; let h = Cp(p, u),
            E = S.createHref(p); try { s.pushState(h, "", E) } catch (b) { if (b instanceof DOMException && b.name === "DataCloneError") throw b;
            o.location.assign(E) } i && l && l({ action: a, location: S.location, delta: 1 }) }

    function g(_, m) { a = Yt.Replace; let p = yu(S.location, _, m);
        n && n(p, _), u = c(); let h = Cp(p, u),
            E = S.createHref(p);
        s.replaceState(h, "", E), i && l && l({ action: a, location: S.location, delta: 0 }) }

    function w(_) { let m = o.location.origin !== "null" ? o.location.origin : o.location.href,
            p = typeof _ == "string" ? _ : Us(_); return ge(m, "No window.location.(origin|href) available to create URL for href: " + p), new URL(p, m) } let S = { get action() { return a }, get location() { return e(o, s) }, listen(_) { if (l) throw new Error("A history only accepts one active listener"); return o.addEventListener(Ep, d), l = _, () => { o.removeEventListener(Ep, d), l = null } }, createHref(_) { return t(o, _) }, createURL: w, encodeLocation(_) { let m = w(_); return { pathname: m.pathname, search: m.search, hash: m.hash } }, push: f, replace: g, go(_) { return s.go(_) } }; return S }
var _p;
(function(e) { e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error" })(_p || (_p = {}));

function UE(e, t, n) { n === void 0 && (n = "/"); let r = typeof t == "string" ? Un(t) : t,
        o = Gc(r.pathname || "/", n); if (o == null) return null; let i = iv(e);
    zE(i); let s = null; for (let a = 0; s == null && a < i.length; ++a) s = YE(i[a], ZE(o)); return s }

function iv(e, t, n, r) { t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = ""); let o = (i, s, a) => { let l = { relativePath: a === void 0 ? i.path || "" : a, caseSensitive: i.caseSensitive === !0, childrenIndex: s, route: i };
        l.relativePath.startsWith("/") && (ge(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), l.relativePath = l.relativePath.slice(r.length)); let u = an([r, l.relativePath]),
            c = n.concat(l);
        i.children && i.children.length > 0 && (ge(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')), iv(i.children, t, c, u)), !(i.path == null && !i.index) && t.push({ path: u, score: qE(u, i.index), routesMeta: c }) }; return e.forEach((i, s) => { var a; if (i.path === "" || !((a = i.path) != null && a.includes("?"))) o(i, s);
        else
            for (let l of sv(i.path)) o(i, s, l) }), t }

function sv(e) { let t = e.split("/"); if (t.length === 0) return []; let [n, ...r] = t, o = n.endsWith("?"), i = n.replace(/\?$/, ""); if (r.length === 0) return o ? [i, ""] : [i]; let s = sv(r.join("/")),
        a = []; return a.push(...s.map(l => l === "" ? i : [i, l].join("/"))), o && a.push(...s), a.map(l => e.startsWith("/") && l === "" ? "/" : l) }

function zE(e) { e.sort((t, n) => t.score !== n.score ? n.score - t.score : GE(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex))) }
const BE = /^:\w+$/,
    WE = 3,
    VE = 2,
    HE = 1,
    QE = 10,
    KE = -2,
    kp = e => e === "*";

function qE(e, t) { let n = e.split("/"),
        r = n.length; return n.some(kp) && (r += KE), t && (r += VE), n.filter(o => !kp(o)).reduce((o, i) => o + (BE.test(i) ? WE : i === "" ? HE : QE), r) }

function GE(e, t) { return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0 }

function YE(e, t) { let { routesMeta: n } = e, r = {}, o = "/", i = []; for (let s = 0; s < n.length; ++s) { let a = n[s],
            l = s === n.length - 1,
            u = o === "/" ? t : t.slice(o.length) || "/",
            c = JE({ path: a.relativePath, caseSensitive: a.caseSensitive, end: l }, u); if (!c) return null;
        Object.assign(r, c.params); let d = a.route;
        i.push({ params: r, pathname: an([o, c.pathname]), pathnameBase: rC(an([o, c.pathnameBase])), route: d }), c.pathnameBase !== "/" && (o = an([o, c.pathnameBase])) } return i }

function JE(e, t) { typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 }); let [n, r] = XE(e.path, e.caseSensitive, e.end), o = t.match(n); if (!o) return null; let i = o[0],
        s = i.replace(/(.)\/+$/, "$1"),
        a = o.slice(1); return { params: r.reduce((u, c, d) => { if (c === "*") { let f = a[d] || "";
                s = i.slice(0, i.length - f.length).replace(/(.)\/+$/, "$1") } return u[c] = eC(a[d] || "", c), u }, {}), pathname: i, pathnameBase: s, pattern: e } }

function XE(e, t, n) { t === void 0 && (t = !1), n === void 0 && (n = !0), ma(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')); let r = [],
        o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (s, a) => (r.push(a), "/([^\\/]+)")); return e.endsWith("*") ? (r.push("*"), o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, t ? void 0 : "i"), r] }

function ZE(e) { try { return decodeURI(e) } catch (t) { return ma(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e } }

function eC(e, t) { try { return decodeURIComponent(e) } catch (n) { return ma(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")), e } }

function Gc(e, t) { if (t === "/") return e; if (!e.toLowerCase().startsWith(t.toLowerCase())) return null; let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n); return r && r !== "/" ? null : e.slice(n) || "/" }

function tC(e, t) { t === void 0 && (t = "/"); let { pathname: n, search: r = "", hash: o = "" } = typeof e == "string" ? Un(e) : e; return { pathname: n ? n.startsWith("/") ? n : nC(n, t) : t, search: oC(r), hash: iC(o) } }

function nC(e, t) { let n = t.replace(/\/+$/, "").split("/"); return e.split("/").forEach(o => { o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o) }), n.length > 1 ? n.join("/") : "/" }

function el(e, t, n, r) { return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.' }

function av(e) { return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0) }

function lv(e, t, n, r) { r === void 0 && (r = !1); let o;
    typeof e == "string" ? o = Un(e) : (o = Mo({}, e), ge(!o.pathname || !o.pathname.includes("?"), el("?", "pathname", "search", o)), ge(!o.pathname || !o.pathname.includes("#"), el("#", "pathname", "hash", o)), ge(!o.search || !o.search.includes("#"), el("#", "search", "hash", o))); let i = e === "" || o.pathname === "",
        s = i ? "/" : o.pathname,
        a; if (r || s == null) a = n;
    else { let d = t.length - 1; if (s.startsWith("..")) { let f = s.split("/"); for (; f[0] === "..";) f.shift(), d -= 1;
            o.pathname = f.join("/") } a = d >= 0 ? t[d] : "/" } let l = tC(o, a),
        u = s && s !== "/" && s.endsWith("/"),
        c = (i || s === ".") && n.endsWith("/"); return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l }
const an = e => e.join("/").replace(/\/\/+/g, "/"),
    rC = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    oC = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
    iC = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;

function sC(e) { return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e }
const uv = ["post", "put", "patch", "delete"];
new Set(uv);
const aC = ["get", ...uv];
new Set(aC);
/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function zs() { return zs = Object.assign ? Object.assign.bind() : function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, zs.apply(this, arguments) }
const Yc = v.createContext(null),
    lC = v.createContext(null),
    Dr = v.createContext(null),
    ga = v.createContext(null),
    zn = v.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
    cv = v.createContext(null);

function uC(e, t) { let { relative: n } = t === void 0 ? {} : t;
    Jo() || ge(!1); let { basename: r, navigator: o } = v.useContext(Dr), { hash: i, pathname: s, search: a } = dv(e, { relative: n }), l = s; return r !== "/" && (l = s === "/" ? r : an([r, s])), o.createHref({ pathname: l, search: a, hash: i }) }

function Jo() { return v.useContext(ga) != null }

function Xo() { return Jo() || ge(!1), v.useContext(ga).location }

function fv(e) { v.useContext(Dr).static || v.useLayoutEffect(e) }

function cC() { let { isDataRoute: e } = v.useContext(zn); return e ? EC() : fC() }

function fC() { Jo() || ge(!1); let e = v.useContext(Yc),
        { basename: t, navigator: n } = v.useContext(Dr),
        { matches: r } = v.useContext(zn),
        { pathname: o } = Xo(),
        i = JSON.stringify(av(r).map(l => l.pathnameBase)),
        s = v.useRef(!1); return fv(() => { s.current = !0 }), v.useCallback(function(l, u) { if (u === void 0 && (u = {}), !s.current) return; if (typeof l == "number") { n.go(l); return } let c = lv(l, JSON.parse(i), o, u.relative === "path");
        e == null && t !== "/" && (c.pathname = c.pathname === "/" ? t : an([t, c.pathname])), (u.replace ? n.replace : n.push)(c, u.state, u) }, [t, n, i, o, e]) }

function dv(e, t) { let { relative: n } = t === void 0 ? {} : t, { matches: r } = v.useContext(zn), { pathname: o } = Xo(), i = JSON.stringify(av(r).map(s => s.pathnameBase)); return v.useMemo(() => lv(e, JSON.parse(i), o, n === "path"), [e, i, o, n]) }

function pv(e, t) { return dC(e, t) }

function dC(e, t, n) { Jo() || ge(!1); let { navigator: r } = v.useContext(Dr), { matches: o } = v.useContext(zn), i = o[o.length - 1], s = i ? i.params : {};
    i && i.pathname; let a = i ? i.pathnameBase : "/";
    i && i.route; let l = Xo(),
        u; if (t) { var c; let S = typeof t == "string" ? Un(t) : t;
        a === "/" || (c = S.pathname) != null && c.startsWith(a) || ge(!1), u = S } else u = l; let d = u.pathname || "/",
        f = a === "/" ? d : d.slice(a.length) || "/",
        g = UE(e, { pathname: f }),
        w = vC(g && g.map(S => Object.assign({}, S, { params: Object.assign({}, s, S.params), pathname: an([a, r.encodeLocation ? r.encodeLocation(S.pathname).pathname : S.pathname]), pathnameBase: S.pathnameBase === "/" ? a : an([a, r.encodeLocation ? r.encodeLocation(S.pathnameBase).pathname : S.pathnameBase]) })), o, n); return t && w ? v.createElement(ga.Provider, { value: { location: zs({ pathname: "/", search: "", hash: "", state: null, key: "default" }, u), navigationType: Yt.Pop } }, w) : w }

function pC() { let e = xC(),
        t = sC(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
        i = null; return v.createElement(v.Fragment, null, v.createElement("h2", null, "Unexpected Application Error!"), v.createElement("h3", { style: { fontStyle: "italic" } }, t), n ? v.createElement("pre", { style: o }, n) : null, i) }
const hC = v.createElement(pC, null);
class mC extends v.Component { constructor(t) { super(t), this.state = { location: t.location, revalidation: t.revalidation, error: t.error } } static getDerivedStateFromError(t) { return { error: t } } static getDerivedStateFromProps(t, n) { return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? { error: t.error, location: t.location, revalidation: t.revalidation } : { error: t.error || n.error, location: n.location, revalidation: t.revalidation || n.revalidation } } componentDidCatch(t, n) { console.error("React Router caught the following error during render", t, n) } render() { return this.state.error ? v.createElement(zn.Provider, { value: this.props.routeContext }, v.createElement(cv.Provider, { value: this.state.error, children: this.props.component })) : this.props.children } }

function gC(e) { let { routeContext: t, match: n, children: r } = e, o = v.useContext(Yc); return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id), v.createElement(zn.Provider, { value: t }, r) }

function vC(e, t, n) { var r; if (t === void 0 && (t = []), n === void 0 && (n = null), e == null) { var o; if ((o = n) != null && o.errors) e = n.matches;
        else return null } let i = e,
        s = (r = n) == null ? void 0 : r.errors; if (s != null) { let a = i.findIndex(l => l.route.id && (s == null ? void 0 : s[l.route.id]));
        a >= 0 || ge(!1), i = i.slice(0, Math.min(i.length, a + 1)) } return i.reduceRight((a, l, u) => { let c = l.route.id ? s == null ? void 0 : s[l.route.id] : null,
            d = null;
        n && (d = l.route.errorElement || hC); let f = t.concat(i.slice(0, u + 1)),
            g = () => { let w; return c ? w = d : l.route.Component ? w = v.createElement(l.route.Component, null) : l.route.element ? w = l.route.element : w = a, v.createElement(gC, { match: l, routeContext: { outlet: a, matches: f, isDataRoute: n != null }, children: w }) }; return n && (l.route.ErrorBoundary || l.route.errorElement || u === 0) ? v.createElement(mC, { location: n.location, revalidation: n.revalidation, component: d, error: c, children: g(), routeContext: { outlet: null, matches: f, isDataRoute: !0 } }) : g() }, null) }
var hv = function(e) { return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e }(hv || {}),
    Bs = function(e) { return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e }(Bs || {});

function yC(e) { let t = v.useContext(Yc); return t || ge(!1), t }

function wC(e) { let t = v.useContext(lC); return t || ge(!1), t }

function SC(e) { let t = v.useContext(zn); return t || ge(!1), t }

function mv(e) { let t = SC(),
        n = t.matches[t.matches.length - 1]; return n.route.id || ge(!1), n.route.id }

function xC() { var e; let t = v.useContext(cv),
        n = wC(Bs.UseRouteError),
        r = mv(Bs.UseRouteError); return t || ((e = n.errors) == null ? void 0 : e[r]) }

function EC() { let { router: e } = yC(hv.UseNavigateStable), t = mv(Bs.UseNavigateStable), n = v.useRef(!1); return fv(() => { n.current = !0 }), v.useCallback(function(o, i) { i === void 0 && (i = {}), n.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, zs({ fromRouteId: t }, i))) }, [e, t]) }

function CC(e) { let { basename: t = "/", children: n = null, location: r, navigationType: o = Yt.Pop, navigator: i, static: s = !1 } = e;
    Jo() && ge(!1); let a = t.replace(/^\/*/, "/"),
        l = v.useMemo(() => ({ basename: a, navigator: i, static: s }), [a, i, s]);
    typeof r == "string" && (r = Un(r)); let { pathname: u = "/", search: c = "", hash: d = "", state: f = null, key: g = "default" } = r, w = v.useMemo(() => { let S = Gc(u, a); return S == null ? null : { location: { pathname: S, search: c, hash: d, state: f, key: g }, navigationType: o } }, [a, u, c, d, f, g, o]); return w == null ? null : v.createElement(Dr.Provider, { value: l }, v.createElement(ga.Provider, { children: n, value: w })) } new Promise(() => {});
/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function wu() { return wu = Object.assign ? Object.assign.bind() : function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, wu.apply(this, arguments) }

function _C(e, t) { if (e == null) return {}; var n = {},
        r = Object.keys(e),
        o, i; for (i = 0; i < r.length; i++) o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]); return n }

function kC(e) { return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) }

function OC(e, t) { return e.button === 0 && (!t || t === "_self") && !kC(e) }
const PC = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"],
    bC = "startTransition",
    Op = dt[bC];

function RC(e) { let { basename: t, children: n, future: r, window: o } = e, i = v.useRef();
    i.current == null && (i.current = AE({ window: o, v5Compat: !0 })); let s = i.current,
        [a, l] = v.useState({ action: s.action, location: s.location }),
        { v7_startTransition: u } = r || {},
        c = v.useCallback(d => { u && Op ? Op(() => l(d)) : l(d) }, [l, u]); return v.useLayoutEffect(() => s.listen(c), [s, c]), v.createElement(CC, { basename: t, children: n, location: a.location, navigationType: a.action, navigator: s }) }
const LC = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    NC = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    gv = v.forwardRef(function(t, n) { let { onClick: r, relative: o, reloadDocument: i, replace: s, state: a, target: l, to: u, preventScrollReset: c } = t, d = _C(t, PC), { basename: f } = v.useContext(Dr), g, w = !1; if (typeof u == "string" && NC.test(u) && (g = u, LC)) try { let p = new URL(window.location.href),
                h = u.startsWith("//") ? new URL(p.protocol + u) : new URL(u),
                E = Gc(h.pathname, f);
            h.origin === p.origin && E != null ? u = E + h.search + h.hash : w = !0 } catch {}
        let S = uC(u, { relative: o }),
            _ = TC(u, { replace: s, state: a, target: l, preventScrollReset: c, relative: o });

        function m(p) { r && r(p), p.defaultPrevented || _(p) } return v.createElement("a", wu({}, d, { href: g || S, onClick: w || i ? r : m, ref: n, target: l })) });
var Pp;
(function(e) { e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher" })(Pp || (Pp = {}));
var bp;
(function(e) { e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration" })(bp || (bp = {}));

function TC(e, t) { let { target: n, replace: r, state: o, preventScrollReset: i, relative: s } = t === void 0 ? {} : t, a = cC(), l = Xo(), u = dv(e, { relative: s }); return v.useCallback(c => { if (OC(c, n)) { c.preventDefault(); let d = r !== void 0 ? r : Us(l) === Us(u);
            a(e, { replace: d, state: o, preventScrollReset: i, relative: s }) } }, [l, a, u, r, o, n, e, i, s]) }

function Su() { return Su = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, Su.apply(this, arguments) }

function IC(e, t) { if (e == null) return {}; var n = DC(e, t),
        r, o; if (Object.getOwnPropertySymbols) { var i = Object.getOwnPropertySymbols(e); for (o = 0; o < i.length; o++) r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]) } return n }

function DC(e, t) { if (e == null) return {}; var n = {},
        r = Object.keys(e),
        o, i; for (i = 0; i < r.length; i++) o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]); return n }
var Jc = v.forwardRef(function(e, t) { var n = e.color,
        r = n === void 0 ? "currentColor" : n,
        o = e.size,
        i = o === void 0 ? 24 : o,
        s = IC(e, ["color", "size"]); return Q.createElement("svg", Su({ ref: t, xmlns: "http://www.w3.org/2000/svg", width: i, height: i, viewBox: "0 0 24 24", fill: "none", stroke: r, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, s), Q.createElement("polyline", { points: "20 6 9 17 4 12" })) });
Jc.propTypes = { color: ee.string, size: ee.oneOfType([ee.string, ee.number]) };
Jc.displayName = "Check";
const MC = Jc;

function xu() { return xu = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, xu.apply(this, arguments) }

function jC(e, t) { if (e == null) return {}; var n = AC(e, t),
        r, o; if (Object.getOwnPropertySymbols) { var i = Object.getOwnPropertySymbols(e); for (o = 0; o < i.length; o++) r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]) } return n }

function AC(e, t) { if (e == null) return {}; var n = {},
        r = Object.keys(e),
        o, i; for (i = 0; i < r.length; i++) o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]); return n }
var Xc = v.forwardRef(function(e, t) { var n = e.color,
        r = n === void 0 ? "currentColor" : n,
        o = e.size,
        i = o === void 0 ? 24 : o,
        s = jC(e, ["color", "size"]); return Q.createElement("svg", xu({ ref: t, xmlns: "http://www.w3.org/2000/svg", width: i, height: i, viewBox: "0 0 24 24", fill: "none", stroke: r, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, s), Q.createElement("path", { d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" }), Q.createElement("line", { x1: "1", y1: "1", x2: "23", y2: "23" })) });
Xc.propTypes = { color: ee.string, size: ee.oneOfType([ee.string, ee.number]) };
Xc.displayName = "EyeOff";
const FC = Xc;

function Eu() { return Eu = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, Eu.apply(this, arguments) }

function $C(e, t) { if (e == null) return {}; var n = UC(e, t),
        r, o; if (Object.getOwnPropertySymbols) { var i = Object.getOwnPropertySymbols(e); for (o = 0; o < i.length; o++) r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]) } return n }

function UC(e, t) { if (e == null) return {}; var n = {},
        r = Object.keys(e),
        o, i; for (i = 0; i < r.length; i++) o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]); return n }
var Zc = v.forwardRef(function(e, t) { var n = e.color,
        r = n === void 0 ? "currentColor" : n,
        o = e.size,
        i = o === void 0 ? 24 : o,
        s = $C(e, ["color", "size"]); return Q.createElement("svg", Eu({ ref: t, xmlns: "http://www.w3.org/2000/svg", width: i, height: i, viewBox: "0 0 24 24", fill: "none", stroke: r, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, s), Q.createElement("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }), Q.createElement("circle", { cx: "12", cy: "12", r: "3" })) });
Zc.propTypes = { color: ee.string, size: ee.oneOfType([ee.string, ee.number]) };
Zc.displayName = "Eye";
const zC = Zc;

function Cu() { return Cu = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, Cu.apply(this, arguments) }

function BC(e, t) { if (e == null) return {}; var n = WC(e, t),
        r, o; if (Object.getOwnPropertySymbols) { var i = Object.getOwnPropertySymbols(e); for (o = 0; o < i.length; o++) r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]) } return n }

function WC(e, t) { if (e == null) return {}; var n = {},
        r = Object.keys(e),
        o, i; for (i = 0; i < r.length; i++) o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]); return n }
var ef = v.forwardRef(function(e, t) { var n = e.color,
        r = n === void 0 ? "currentColor" : n,
        o = e.size,
        i = o === void 0 ? 24 : o,
        s = BC(e, ["color", "size"]); return Q.createElement("svg", Cu({ ref: t, xmlns: "http://www.w3.org/2000/svg", width: i, height: i, viewBox: "0 0 24 24", fill: "none", stroke: r, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, s), Q.createElement("path", { d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" })) });
ef.propTypes = { color: ee.string, size: ee.oneOfType([ee.string, ee.number]) };
ef.displayName = "GitHub";
const VC = ef;

function _u() { return _u = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, _u.apply(this, arguments) }

function HC(e, t) { if (e == null) return {}; var n = QC(e, t),
        r, o; if (Object.getOwnPropertySymbols) { var i = Object.getOwnPropertySymbols(e); for (o = 0; o < i.length; o++) r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]) } return n }

function QC(e, t) { if (e == null) return {}; var n = {},
        r = Object.keys(e),
        o, i; for (i = 0; i < r.length; i++) o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]); return n }
var tf = v.forwardRef(function(e, t) { var n = e.color,
        r = n === void 0 ? "currentColor" : n,
        o = e.size,
        i = o === void 0 ? 24 : o,
        s = HC(e, ["color", "size"]); return Q.createElement("svg", _u({ ref: t, xmlns: "http://www.w3.org/2000/svg", width: i, height: i, viewBox: "0 0 24 24", fill: "none", stroke: r, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, s), Q.createElement("circle", { cx: "12", cy: "12", r: "10" }), Q.createElement("line", { x1: "12", y1: "16", x2: "12", y2: "12" }), Q.createElement("line", { x1: "12", y1: "8", x2: "12.01", y2: "8" })) });
tf.propTypes = { color: ee.string, size: ee.oneOfType([ee.string, ee.number]) };
tf.displayName = "Info";
const KC = tf;

function ku() { return ku = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, ku.apply(this, arguments) }

function qC(e, t) { if (e == null) return {}; var n = GC(e, t),
        r, o; if (Object.getOwnPropertySymbols) { var i = Object.getOwnPropertySymbols(e); for (o = 0; o < i.length; o++) r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]) } return n }

function GC(e, t) { if (e == null) return {}; var n = {},
        r = Object.keys(e),
        o, i; for (i = 0; i < r.length; i++) o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]); return n }
var nf = v.forwardRef(function(e, t) { var n = e.color,
        r = n === void 0 ? "currentColor" : n,
        o = e.size,
        i = o === void 0 ? 24 : o,
        s = qC(e, ["color", "size"]); return Q.createElement("svg", ku({ ref: t, xmlns: "http://www.w3.org/2000/svg", width: i, height: i, viewBox: "0 0 24 24", fill: "none", stroke: r, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, s), Q.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), Q.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })) });
nf.propTypes = { color: ee.string, size: ee.oneOfType([ee.string, ee.number]) };
nf.displayName = "X";
const YC = nf;

function JC(e, t) { let n; return (...r) => { n && clearTimeout(n), n = setTimeout(() => { e(...r) }, t) } }

function vv(e) { return e.replace(/\/$/, "") }

function _R(e, t) { let n = String(e); for (; n.length < t;) n = "0" + n; return n }
const XC = { "Content-Type": "application/json" };

function ZC({ secret: e }) { const t = { ...XC }; return e && (t.Authorization = `Bearer ${e}`), t }

function yv(e, t, n) { const r = "?" + t.toString(),
        o = new URL(e); return o.protocol === "https:" ? o.protocol = "wss:" : o.protocol = "ws:", `${vv(o.href)}${n}${r}` }

function ye({ baseURL: e, secret: t }) { const n = ZC({ secret: t }); return { url: e, init: { headers: n } } }

function rf(e, t) { const { baseURL: n, secret: r } = e, o = new URLSearchParams({ token: r }); return yv(n, o, t) }

function kR(e, t) { const { baseURL: n, secret: r, logLevel: o } = e, i = new URLSearchParams({ token: r, level: o }); return yv(n, i, t) } async function wv(e, t) { let n = {}; try { const { url: r, init: o } = ye(t), i = await fetch(r + e, o);
        i.ok && (n = await i.json()) } catch (r) { console.log(`failed to fetch ${e}`, r) } return n }
const e2 = "_root_5bosw_1",
    t2 = "_h1_5bosw_7",
    Rp = { root: e2, h1: t2 };

function n2({ title: e }) { return y.jsx("div", { className: Rp.root, children: y.jsx("h1", { className: Rp.h1, children: e }) }) }
const Sv = Q.memo(n2);
var xv = Symbol.for("immer-nothing"),
    Lp = Symbol.for("immer-draftable"),
    Ue = Symbol.for("immer-state");

function st(e, ...t) { throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`) }
var kr = Object.getPrototypeOf;

function Or(e) { return !!e && !!e[Ue] }

function jn(e) { var t; return e ? Ev(e) || Array.isArray(e) || !!e[Lp] || !!((t = e.constructor) != null && t[Lp]) || ya(e) || wa(e) : !1 }
var r2 = Object.prototype.constructor.toString();

function Ev(e) { if (!e || typeof e != "object") return !1; const t = kr(e); if (t === null) return !0; const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor; return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === r2 }

function jo(e, t) { va(e) === 0 ? Object.entries(e).forEach(([n, r]) => { t(n, r, e) }) : e.forEach((n, r) => t(r, n, e)) }

function va(e) { const t = e[Ue]; return t ? t.type_ : Array.isArray(e) ? 1 : ya(e) ? 2 : wa(e) ? 3 : 0 }

function Ou(e, t) { return va(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t) }

function Cv(e, t, n) { const r = va(e);
    r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n }

function o2(e, t) { return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t }

function ya(e) { return e instanceof Map }

function wa(e) { return e instanceof Set }

function xn(e) { return e.copy_ || e.base_ }

function Pu(e, t) { if (ya(e)) return new Map(e); if (wa(e)) return new Set(e); if (Array.isArray(e)) return Array.prototype.slice.call(e); if (!t && Ev(e)) return kr(e) ? { ...e } : Object.assign(Object.create(null), e); const n = Object.getOwnPropertyDescriptors(e);
    delete n[Ue]; let r = Reflect.ownKeys(n); for (let o = 0; o < r.length; o++) { const i = r[o],
            s = n[i];
        s.writable === !1 && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (n[i] = { configurable: !0, writable: !0, enumerable: s.enumerable, value: e[i] }) } return Object.create(kr(e), n) }

function of (e, t = !1) { return Sa(e) || Or(e) || !jn(e) || (va(e) > 1 && (e.set = e.add = e.clear = e.delete = i2), Object.freeze(e), t && jo(e, (n, r) => of (r, !0))), e }

function i2() { st(2) }

function Sa(e) { return Object.isFrozen(e) }
var s2 = {};

function An(e) { const t = s2[e]; return t || st(0, e), t }
var Ao;

function _v() { return Ao }

function a2(e, t) { return { drafts_: [], parent_: e, immer_: t, canAutoFreeze_: !0, unfinalizedDrafts_: 0 } }

function Np(e, t) { t && (An("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t) }

function bu(e) { Ru(e), e.drafts_.forEach(l2), e.drafts_ = null }

function Ru(e) { e === Ao && (Ao = e.parent_) }

function Tp(e) { return Ao = a2(Ao, e) }

function l2(e) { const t = e[Ue];
    t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0 }

function Ip(e, t) { t.unfinalizedDrafts_ = t.drafts_.length; const n = t.drafts_[0]; return e !== void 0 && e !== n ? (n[Ue].modified_ && (bu(t), st(4)), jn(e) && (e = Ws(t, e), t.parent_ || Vs(t, e)), t.patches_ && An("Patches").generateReplacementPatches_(n[Ue].base_, e, t.patches_, t.inversePatches_)) : e = Ws(t, n, []), bu(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== xv ? e : void 0 }

function Ws(e, t, n) { if (Sa(t)) return t; const r = t[Ue]; if (!r) return jo(t, (o, i) => Dp(e, r, t, o, i, n)), t; if (r.scope_ !== e) return t; if (!r.modified_) return Vs(e, r.base_, !0), r.base_; if (!r.finalized_) { r.finalized_ = !0, r.scope_.unfinalizedDrafts_--; const o = r.copy_; let i = o,
            s = !1;
        r.type_ === 3 && (i = new Set(o), o.clear(), s = !0), jo(i, (a, l) => Dp(e, r, o, a, l, n, s)), Vs(e, o, !1), n && e.patches_ && An("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_) } return r.copy_ }

function Dp(e, t, n, r, o, i, s) { if (Or(o)) { const a = i && t && t.type_ !== 3 && !Ou(t.assigned_, r) ? i.concat(r) : void 0,
            l = Ws(e, o, a); if (Cv(n, r, l), Or(l)) e.canAutoFreeze_ = !1;
        else return } else s && n.add(o); if (jn(o) && !Sa(o)) { if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
        Ws(e, o), (!t || !t.scope_.parent_) && Vs(e, o) } }

function Vs(e, t, n = !1) {!e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && of (t, n) }

function u2(e, t) { const n = Array.isArray(e),
        r = { type_: n ? 1 : 0, scope_: t ? t.scope_ : _v(), modified_: !1, finalized_: !1, assigned_: {}, parent_: t, base_: e, draft_: null, copy_: null, revoke_: null, isManual_: !1 }; let o = r,
        i = sf;
    n && (o = [r], i = Fo); const { revoke: s, proxy: a } = Proxy.revocable(o, i); return r.draft_ = a, r.revoke_ = s, a }
var sf = { get(e, t) { if (t === Ue) return e; const n = xn(e); if (!Ou(n, t)) return c2(e, n, t); const r = n[t]; return e.finalized_ || !jn(r) ? r : r === tl(e.base_, t) ? (nl(e), e.copy_[t] = Nu(r, e)) : r }, has(e, t) { return t in xn(e) }, ownKeys(e) { return Reflect.ownKeys(xn(e)) }, set(e, t, n) { const r = kv(xn(e), t); if (r != null && r.set) return r.set.call(e.draft_, n), !0; if (!e.modified_) { const o = tl(xn(e), t),
                    i = o == null ? void 0 : o[Ue]; if (i && i.base_ === n) return e.copy_[t] = n, e.assigned_[t] = !1, !0; if (o2(n, o) && (n !== void 0 || Ou(e.base_, t))) return !0;
                nl(e), Lu(e) } return e.copy_[t] === n && (n !== void 0 || t in e.copy_) || Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0 }, deleteProperty(e, t) { return tl(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, nl(e), Lu(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0 }, getOwnPropertyDescriptor(e, t) { const n = xn(e),
                r = Reflect.getOwnPropertyDescriptor(n, t); return r && { writable: !0, configurable: e.type_ !== 1 || t !== "length", enumerable: r.enumerable, value: n[t] } }, defineProperty() { st(11) }, getPrototypeOf(e) { return kr(e.base_) }, setPrototypeOf() { st(12) } },
    Fo = {};
jo(sf, (e, t) => { Fo[e] = function() { return arguments[0] = arguments[0][0], t.apply(this, arguments) } });
Fo.deleteProperty = function(e, t) { return Fo.set.call(this, e, t, void 0) };
Fo.set = function(e, t, n) { return sf.set.call(this, e[0], t, n, e[0]) };

function tl(e, t) { const n = e[Ue]; return (n ? xn(n) : e)[t] }

function c2(e, t, n) { var o; const r = kv(t, n); return r ? "value" in r ? r.value : (o = r.get) == null ? void 0 : o.call(e.draft_) : void 0 }

function kv(e, t) { if (!(t in e)) return; let n = kr(e); for (; n;) { const r = Object.getOwnPropertyDescriptor(n, t); if (r) return r;
        n = kr(n) } }

function Lu(e) { e.modified_ || (e.modified_ = !0, e.parent_ && Lu(e.parent_)) }

function nl(e) { e.copy_ || (e.copy_ = Pu(e.base_, e.scope_.immer_.useStrictShallowCopy_)) }
var f2 = class { constructor(e) { this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, n, r) => { if (typeof t == "function" && typeof n != "function") { const i = n;
                n = t; const s = this; return function(l = i, ...u) { return s.produce(l, c => n.call(this, c, ...u)) } } typeof n != "function" && st(6), r !== void 0 && typeof r != "function" && st(7); let o; if (jn(t)) { const i = Tp(this),
                    s = Nu(t, void 0); let a = !0; try { o = n(s), a = !1 } finally { a ? bu(i) : Ru(i) } return Np(i, r), Ip(o, i) } else if (!t || typeof t != "object") { if (o = n(t), o === void 0 && (o = t), o === xv && (o = void 0), this.autoFreeze_ && of (o, !0), r) { const i = [],
                        s = [];
                    An("Patches").generateReplacementPatches_(t, o, i, s), r(i, s) } return o } else st(1, t) }, this.produceWithPatches = (t, n) => { if (typeof t == "function") return (s, ...a) => this.produceWithPatches(s, l => t(l, ...a)); let r, o; return [this.produce(t, n, (s, a) => { r = s, o = a }), r, o] }, typeof(e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof(e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy) } createDraft(e) { jn(e) || st(8), Or(e) && (e = d2(e)); const t = Tp(this),
            n = Nu(e, void 0); return n[Ue].isManual_ = !0, Ru(t), n } finishDraft(e, t) { const n = e && e[Ue];
        (!n || !n.isManual_) && st(9); const { scope_: r } = n; return Np(r, t), Ip(void 0, r) } setAutoFreeze(e) { this.autoFreeze_ = e } setUseStrictShallowCopy(e) { this.useStrictShallowCopy_ = e } applyPatches(e, t) { let n; for (n = t.length - 1; n >= 0; n--) { const o = t[n]; if (o.path.length === 0 && o.op === "replace") { e = o.value; break } } n > -1 && (t = t.slice(n + 1)); const r = An("Patches").applyPatches_; return Or(e) ? r(e, t) : this.produce(e, o => r(o, t)) } };

function Nu(e, t) { const n = ya(e) ? An("MapSet").proxyMap_(e, t) : wa(e) ? An("MapSet").proxySet_(e, t) : u2(e, t); return (t ? t.scope_ : _v()).drafts_.push(n), n }

function d2(e) { return Or(e) || st(10, e), Ov(e) }

function Ov(e) { if (!jn(e) || Sa(e)) return e; const t = e[Ue]; let n; if (t) { if (!t.modified_) return t.base_;
        t.finalized_ = !0, n = Pu(e, t.scope_.immer_.useStrictShallowCopy_) } else n = Pu(e, !0); return jo(n, (r, o) => { Cv(n, r, Ov(o)) }), t && (t.finalized_ = !1), n }
var ze = new f2,
    p2 = ze.produce;
ze.produceWithPatches.bind(ze);
var h2 = ze.setAutoFreeze.bind(ze);
ze.setUseStrictShallowCopy.bind(ze);
ze.applyPatches.bind(ze);
ze.createDraft.bind(ze);
ze.finishDraft.bind(ze);
h2(!1);
const { createContext: af, memo: m2, useMemo: g2, useRef: v2, useEffect: y2, useCallback: Mp, useContext: Tu, useState: w2 } = Q, Pv = af(null), bv = af(null), Rv = af(null);

function S2() { return Tu(Rv) }

function x2({ initialState: e, actions: t = {}, children: n }) { const r = v2(e),
        [o, i] = w2(e),
        s = Mp(() => r.current, []);
    y2(() => {}, [s]); const a = Mp((u, c) => { if (typeof u == "function") return u(a, s); const d = p2(s(), c);
            d !== r.current && (r.current = d, i(d)) }, [s]),
        l = g2(() => Lv(t, a), [t, a]); return y.jsx(Pv.Provider, { value: o, children: y.jsx(bv.Provider, { value: a, children: y.jsx(Rv.Provider, { value: l, children: n }) }) }) }

function _t(e) { return t => { const n = m2(t);

        function r(o) { const i = Tu(Pv),
                s = Tu(bv),
                a = e(i, o),
                l = { dispatch: s, ...o, ...a }; return y.jsx(n, { ...l }) } return r } }

function E2(e, t) { return function(...n) { return t(e.apply(this, n)) } }

function Lv(e, t) { const n = {}; for (const r in e) { const o = e[r];
        typeof o == "function" ? n[r] = E2(o, t) : typeof o == "object" && (n[r] = Lv(o, t)) } return n }
const C2 = Symbol(),
    _2 = e => typeof(e == null ? void 0 : e.then) == "function";

function k2(e) { let t, n; const r = { getItem: (o, i) => { var s, a; const l = c => { if (c = c || "", t !== c) { try { n = JSON.parse(c) } catch { return i } t = c } return n },
                u = (a = (s = e()) == null ? void 0 : s.getItem(o)) != null ? a : null; return _2(u) ? u.then(l) : l(u) }, setItem: (o, i) => { var s; return (s = e()) == null ? void 0 : s.setItem(o, JSON.stringify(i)) }, removeItem: o => { var i; return (i = e()) == null ? void 0 : i.removeItem(o) } }; return typeof window < "u" && typeof window.addEventListener == "function" && window.Storage && (r.subscribe = (o, i, s) => { if (!(e() instanceof window.Storage)) return () => {}; const a = l => { if (l.storageArea === e() && l.key === o) { let u; try { u = JSON.parse(l.newValue || "") } catch { u = s } i(u) } }; return window.addEventListener("storage", a), () => { window.removeEventListener("storage", a) } }), r }
const O2 = k2(() => typeof window < "u" ? window.localStorage : void 0);

function P2(e, t, n = O2, r) { const o = r == null ? void 0 : r.unstable_getOnInit,
        i = vu(o ? n.getItem(e, t) : t); return i.onMount = a => { o || a(n.getItem(e, t)); let l; return n.subscribe && (l = n.subscribe(e, a, t)), l }, vu(a => a(i), (a, l, u) => { const c = typeof u == "function" ? u(a(i)) : u; return c === C2 ? (l(i, t), n.removeItem(e)) : c instanceof Promise ? c.then(d => (l(i, d), n.setItem(e, d))) : (l(i, c), n.setItem(e, c)) }) }
const Nv = "yacd.haishan.me";

function b2() { try { const e = localStorage.getItem(Nv); return e ? JSON.parse(e) : void 0 } catch { return } }

function Bn(e) { try { const t = JSON.stringify(e);
        localStorage.setItem(Nv, t) } catch {} }
const lf = "/configs",
    R2 = "/cache/fakeip/flush",
    L2 = "/configs/geo";
async function Tv(e) { const { url: t, init: n } = ye(e); return await fetch(t + lf, n) }

function N2(e) { return "socks-port" in e && (e["socket-port"] = e["socks-port"]), e } async function T2(e, t) { const { url: n, init: r } = ye(e), o = JSON.stringify(N2(t)); return await fetch(n + lf, { ...r, body: o, method: "PATCH" }) } async function I2(e) { const { url: t, init: n } = ye(e), r = '{"path": "", "payload": ""}'; return await fetch(t + lf + "?force=true", { ...n, body: r, method: "PUT" }) } async function D2(e) { const { url: t, init: n } = ye(e); return await fetch(t + R2, { ...n, method: "POST" }) } async function M2(e) { const { url: t, init: n } = ye(e), r = '{"path": "", "payload": ""}'; return await fetch(t + L2, { ...n, body: r, method: "POST" }) }
const Iv = "/traffic",
    j2 = new TextDecoder("utf-8"),
    Ti = 150,
    Qt = { labels: Array(Ti).fill(0), up: Array(Ti), down: Array(Ti), size: Ti, subscribers: [], appendData(e) { this.up.shift(), this.down.shift(), this.labels.shift(); const t = Date.now();
            this.up.push(e.up), this.down.push(e.down), this.labels.push(t), this.subscribers.forEach(n => n(e)) }, subscribe(e) { return this.subscribers.push(e), () => { const t = this.subscribers.indexOf(e);
                this.subscribers.splice(t, 1) } } };
let sr = !1,
    Ii = "";

function Iu(e) { Qt.appendData(JSON.parse(e)) }

function Dv(e) { return e.read().then(({ done: t, value: n }) => { const r = j2.decode(n, { stream: !t });
        Ii += r; const o = Ii.split(`
`),
            i = o[o.length - 1]; for (let s = 0; s < o.length - 1; s++) Iu(o[s]); if (t) { Iu(i), Ii = "", console.log("GET /traffic streaming done"), sr = !1; return } else Ii = i; return Dv(e) }) }
let Di;

function uf(e) { if (sr || Di === 1) return Qt;
    Di = 1; const t = rf(e, Iv),
        n = new WebSocket(t); let r = !1; const o = () => { r = !0, n.close() },
        i = () => { r = !1, Qt.up.fill(void 0), Qt.down.fill(void 0), Qt.labels.fill(0), jp(e) }; return document.addEventListener("freeze", o, { capture: !0, once: !0 }), document.addEventListener("resume", i, { capture: !0, once: !0 }), n.addEventListener("error", function(s) { Di = 3 }), n.addEventListener("close", function(s) { Di = 3, r || (document.removeEventListener("freeze", o), document.removeEventListener("resume", i), jp(e)) }), n.addEventListener("message", function(s) { Iu(s.data) }), Qt }

function jp(e) { if (sr) return Qt;
    sr = !0; const { url: t, init: n } = ye(e); return fetch(t + Iv, n).then(r => { if (r.ok) { const o = r.body.getReader();
            Dv(o) } else sr = !1 }, r => { console.log("fetch /traffic error", r), sr = !1 }), Qt }

function Ap(e) { return t => { t(`openModal:${e}`, n => { n.modals[e] = !0 }) } }

function A2(e) { return t => { t(`closeModal:${e}`, n => { n.modals[e] = !1 }) } }
const F2 = { apiConfig: !1 },
    OR = e => e.configs.configs,
    $2 = e => e.configs.haveFetchedConfig,
    PR = e => e.configs.configs["log-level"];

function Zo(e) { return async (t, n) => { let r; try { r = await Tv(e) } catch { t(Ap("apiConfig")); return } if (!r.ok) { console.log("Error fetch configs", r.statusText), t(Ap("apiConfig")); return } const o = await r.json();
        t("store/configs#fetchConfigs", s => { s.configs.configs = o }), $2(n()) ? uf(e) : t(U2()) } }

function U2() { return e => { e("store/configs#markHaveFetchedConfig", t => { t.configs.haveFetchedConfig = !0 }) } }

function bR(e, t) { return async n => { T2(e, t).then(r => { r.ok === !1 && console.log("Error update configs", r.statusText) }, r => { throw console.log("Error update configs", r), r }).then(() => { n(Zo(e)) }), n("storeConfigsOptimisticUpdateConfigs", r => { r.configs.configs = { ...r.configs.configs, ...t } }) } }

function RR(e) { return async t => { I2(e).then(n => { n.ok === !1 && console.log("Error update configs", n.statusText) }, n => { throw console.log("Error update configs", n), n }).then(() => { t(Zo(e)) }) } }

function LR(e) { return async t => { D2(e).then(n => { n.ok === !1 && console.log("Error update configs", n.statusText) }, n => { throw console.log("Error update configs", n), n }).then(() => { t(Zo(e)) }) } }

function NR(e) { return async t => { M2(e).then(n => { n.ok === !1 && console.log("Error update geo databases file", n.statusText) }, n => { throw console.log("Error update geo databases file", n), n }).then(() => { t(Zo(e)) }) } }
const z2 = { configs: { port: 7890, "socks-port": 7891, "redir-port": 0, "allow-lan": !1, mode: "Rule", "log-level": "uninit" }, haveFetchedConfig: !1 },
    B2 = { darkModePureBlackToggle: "yacd_darkModePureBlackToggle" },
    mn = e => { const t = e.app.selectedClashAPIConfigIndex; return e.app.clashAPIConfigs[t] },
    Mv = e => e.app.selectedClashAPIConfigIndex,
    cf = e => e.app.clashAPIConfigs,
    jv = e => e.app.theme,
    Av = e => e.app.selectedChartStyleIndex,
    Fv = e => e.app.latencyTestUrl,
    TR = e => e.app.collapsibleIsOpen,
    IR = e => e.app.proxySortBy,
    DR = e => e.app.hideUnavailableProxies,
    W2 = e => e.app.autoCloseOldConns,
    MR = e => e.app.logStreamingPaused,
    V2 = JC(Bn, 600);

function ff(e, { baseURL: t, secret: n, metaLabel: r }) { const o = cf(e()); for (let i = 0; i < o.length; i++) { const s = o[i]; if (s.baseURL === t && s.secret === n && s.metaLabel === r) return i } }

function H2(e) { return async (t, n) => { if (ff(n, e)) return; const o = { ...e, addedAt: Date.now() };
        t("addClashAPIConfig", i => { i.app.clashAPIConfigs.push(o) }), Bn(n().app) } }

function Q2(e) { return async (t, n) => { const r = ff(n, e);
        t("removeClashAPIConfig", o => { o.app.clashAPIConfigs.splice(r, 1), r === o.app.selectedClashAPIConfigIndex ? o.app.selectedClashAPIConfigIndex = 0 : r < o.app.selectedClashAPIConfigIndex && (o.app.selectedClashAPIConfigIndex -= 1) }), Bn(n().app) } }

function K2(e) { return async (t, n) => { const r = ff(n, e);
        Mv(n()) !== r && t("selectClashAPIConfig", i => { i.app.selectedClashAPIConfigIndex = r }), Bn(n().app); try { window.location.reload() } catch {} } }
const rl = document.querySelector("html");

function ol(e, t) { const n = document.createElement("meta");
    n.setAttribute("name", "theme-color"), n.setAttribute("content", e), t && n.setAttribute("media", t), document.head.appendChild(n) }

function q2(e) { const t = Array.from(document.querySelectorAll("meta[name=theme-color]")); let n; for (const r of t) r.getAttribute("media") ? document.head.removeChild(r) : n = r; if (e === "auto")
        if (ol("#eeeeee", "(prefers-color-scheme: light)"), ol("#202020", "(prefers-color-scheme: dark)"), n) document.head.removeChild(n);
        else return;
    else { const r = e === "light" ? "#eeeeee" : "#202020";
        n ? n.setAttribute("content", r) : ol(r) } }

function $v(e = "dark") { e === "auto" ? rl.setAttribute("data-theme", "auto") : e === "dark" ? rl.setAttribute("data-theme", "dark") : rl.setAttribute("data-theme", "light"), q2(e) }

function G2(e = "auto") { return (t, n) => { jv(n()) !== e && ($v(e), t("storeSwitchTheme", o => { o.app.theme = e }), Bn(n().app)) } }

function Y2(e) { return (t, n) => { t("appSelectChartStyleIndex", r => { r.app.selectedChartStyleIndex = Number(e) }), Bn(n().app) } }

function Fp(e, t) { return (n, r) => { n("appUpdateAppConfig", o => { o.app[e] = t }), Bn(r().app) } }

function J2(e, t, n) { return (r, o) => { r("updateCollapsibleIsOpen", i => { i.app.collapsibleIsOpen[`${e}:${t}`] = n }), V2(o().app) } }
var uh;
const X2 = { baseURL: ((uh = document.getElementById("app")) == null ? void 0 : uh.getAttribute("data-base-url")) ? ? "http://127.0.0.1:9090", secret: "", addedAt: 0 },
    Z2 = { selectedClashAPIConfigIndex: 0, clashAPIConfigs: [X2], latencyTestUrl: "http://connectivitycheck.gstatic.com/generate_204", selectedChartStyleIndex: 0, theme: "dark", collapsibleIsOpen: {}, proxySortBy: "Natural", hideUnavailableProxies: !1, autoCloseOldConns: !1, logStreamingPaused: !1 },
    e_ = ["hostname", "port", "secret", "theme"];

function t_() { const { search: e } = window.location, t = {}, n = new URLSearchParams(e); let r = !1; if (typeof e != "string" || e === "") return [t, n, r]; for (const o of e_) { const i = n.get(o);
        i && (r = !0, t[o] = i, n.delete(o)) } return [t, n, r] }

function n_() { let e = b2();
    e = { ...Z2, ...e }; const [t, n, r] = t_(); if (r && (history != null && history.replaceState)) { const i = location.pathname + location.hash + (n.size > 0 ? `?${n}` : "");
        history.replaceState(null, "", i) } const o = e.clashAPIConfigs[e.selectedClashAPIConfigIndex]; if (o) { const i = new URL(o.baseURL);
        t.hostname && (t.hostname.indexOf("http") === 0 ? i.href = decodeURIComponent(t.hostname) : i.hostname = t.hostname), t.port && (i.port = t.port), o.baseURL = vv(i.href), t.secret && (o.secret = t.secret) } return (t.theme === "dark" || t.theme === "light") && (e.theme = t.theme), $v(e.theme), e }
const r_ = P2(B2.darkModePureBlackToggle, !1),
    o_ = "_root_1392e_1",
    i_ = "_mono_1392e_10",
    s_ = "_link_1392e_14",
    il = { root: o_, mono: i_, link: s_ };

function $p({ name: e, link: t, version: n }) { return y.jsxs("div", { className: il.root, children: [y.jsx("h2", { children: e }), y.jsxs("p", { children: [y.jsx("span", { children: "Version " }), y.jsx("span", { className: il.mono, children: n })] }), y.jsx("p", { children: y.jsxs("a", { className: il.link, href: t, target: "_blank", rel: "noopener noreferrer", children: [y.jsx(VC, { size: 20 }), y.jsx("span", { children: "Source" })] }) })] }) }

function a_(e) { const { data: t } = nv(["/version", e.apiConfig], () => wv("/version", e.apiConfig)); return y.jsxs(y.Fragment, { children: [y.jsx(Sv, { title: "About" }), t && t.version ? y.jsx($p, { name: t.meta && t.premium ? "sing-box" : t.meta ? "Clash.Meta" : "Clash", version: t.version, link: t.meta && t.premium ? "https://github.com/SagerNet/sing-box" : t.meta ? "https://github.com/MetaCubeX/Clash.Meta" : "https://github.com/Dreamacro/clash" }) : null, y.jsx($p, { name: "Yacd", version: "0.3.8", link: "https://github.com/haishanh/yacd" })] }) }
const l_ = e => ({ apiConfig: mn(e) }),
    u_ = _t(l_)(a_),
    c_ = "_loading_74j3j_1",
    f_ = "_spinner_74j3j_9",
    d_ = "_rotate_74j3j_1",
    Up = { loading: c_, spinner: f_, rotate: d_ },
    Uv = ({ height: e }) => { const t = e ? { height: e } : {}; return y.jsx("div", { className: Up.loading, style: t, children: y.jsx("div", { className: Up.spinner }) }) },
    p_ = e => ({ apiConfig: mn(e), apiConfigs: cf(e) });

function h_({ apiConfig: e, apiConfigs: t }) { return v.useEffect(() => { let n = "yacd"; if (t.length > 1) try { n = `${e.metaLabel||new URL(e.baseURL).host} - yacd` } catch {} document.title = n }), y.jsx(y.Fragment, {}) }
const m_ = _t(p_)(h_),
    g_ = new Yg,
    v_ = new Gx({ queryCache: g_, defaultOptions: { queries: { suspense: !0 } } });
var Hs = "NOT_FOUND";

function y_(e) { var t; return { get: function(r) { return t && e(t.key, r) ? t.value : Hs }, put: function(r, o) { t = { key: r, value: o } }, getEntries: function() { return t ? [t] : [] }, clear: function() { t = void 0 } } }

function w_(e, t) { var n = [];

    function r(a) { var l = n.findIndex(function(c) { return t(a, c.key) }); if (l > -1) { var u = n[l]; return l > 0 && (n.splice(l, 1), n.unshift(u)), u.value } return Hs }

    function o(a, l) { r(a) === Hs && (n.unshift({ key: a, value: l }), n.length > e && n.pop()) }

    function i() { return n }

    function s() { n = [] } return { get: r, put: o, getEntries: i, clear: s } }
var S_ = function(t, n) { return t === n };

function x_(e) { return function(n, r) { if (n === null || r === null || n.length !== r.length) return !1; for (var o = n.length, i = 0; i < o; i++)
            if (!e(n[i], r[i])) return !1; return !0 } }

function E_(e, t) { var n = typeof t == "object" ? t : { equalityCheck: t },
        r = n.equalityCheck,
        o = r === void 0 ? S_ : r,
        i = n.maxSize,
        s = i === void 0 ? 1 : i,
        a = n.resultEqualityCheck,
        l = x_(o),
        u = s === 1 ? y_(l) : w_(s, l);

    function c() { var d = u.get(arguments); if (d === Hs) { if (d = e.apply(null, arguments), a) { var f = u.getEntries(),
                    g = f.find(function(w) { return a(w.value, d) });
                g && (d = g.value) } u.put(arguments, d) } return d } return c.clearCache = function() { return u.clear() }, c }

function C_(e) { var t = Array.isArray(e[0]) ? e[0] : e; if (!t.every(function(r) { return typeof r == "function" })) { var n = t.map(function(r) { return typeof r == "function" ? "function " + (r.name || "unnamed") + "()" : typeof r }).join(", "); throw new Error("createSelector expects all input-selectors to be functions, but received the following types: [" + n + "]") } return t }

function __(e) { for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r]; var o = function() { for (var s = arguments.length, a = new Array(s), l = 0; l < s; l++) a[l] = arguments[l]; var u = 0,
            c, d = { memoizeOptions: void 0 },
            f = a.pop(); if (typeof f == "object" && (d = f, f = a.pop()), typeof f != "function") throw new Error("createSelector expects an output function after the inputs, but received: [" + typeof f + "]"); var g = d,
            w = g.memoizeOptions,
            S = w === void 0 ? n : w,
            _ = Array.isArray(S) ? S : [S],
            m = C_(a),
            p = e.apply(void 0, [function() { return u++, f.apply(null, arguments) }].concat(_)),
            h = e(function() { for (var b = [], P = m.length, O = 0; O < P; O++) b.push(m[O].apply(null, arguments)); return c = p.apply(null, b), c }); return Object.assign(h, { resultFunc: f, memoizedResultFunc: p, dependencies: m, lastResult: function() { return c }, recomputations: function() { return u }, resetRecomputations: function() { return u = 0 } }), h }; return o }
var k_ = __(E_);
const Du = 300,
    zv = e => e.logs.logs,
    Bv = e => e.logs.tail,
    O_ = e => e.logs.searchText,
    jR = k_(zv, Bv, O_, (e, t, n) => { const r = []; for (let o = t; o >= 0; o--) r.push(e[o]); if (e.length === Du)
            for (let o = Du - 1; o > t; o--) r.push(e[o]); return n === "" ? r : r.filter(o => o.payload.toLowerCase().indexOf(n) >= 0) });

function AR(e) { return t => { t("logsUpdateSearchText", n => { n.logs.searchText = e.toLowerCase() }) } }

function FR(e) { return (t, n) => { const r = n(),
            o = zv(r),
            i = Bv(r),
            s = i >= Du - 1 ? 0 : i + 1;
        o[s] = e, t("logsAppendLog", a => { a.logs.tail = s }) } }
const P_ = { searchText: "", logs: [], tail: -1 },
    xa = "/connections",
    ts = [];

function b_(e) { let t; try { t = JSON.parse(e) } catch { console.log("JSON.parse error", JSON.parse(e)) } ts.forEach(n => n(t)) }
let Mi;

function Mu(e, t) { if (Mi === 1 && t) return zp(t);
    Mi = 1; const n = rf(e, xa),
        r = new WebSocket(n); let o = !1; const i = () => { o = !0, r.close() },
        s = () => { o = !1, Mu(e, void 0) }; if (document.addEventListener("freeze", i, { capture: !0, once: !0 }), document.addEventListener("resume", s, { capture: !0, once: !0 }), r.addEventListener("error", () => Mi = 3), r.addEventListener("close", function(a) { Mi = 3, o || (document.removeEventListener("freeze", i), document.removeEventListener("resume", s), Mu(e, void 0)) }), r.addEventListener("message", a => b_(a.data)), t) return zp(t) }

function zp(e) { return ts.push(e),
        function() { const n = ts.indexOf(e);
            ts.splice(n, 1) } } async function $R(e) { const { url: t, init: n } = ye(e); return await fetch(t + xa, { ...n, method: "DELETE" }) } async function R_(e) { const { url: t, init: n } = ye(e); return await fetch(t + xa, { ...n }) } async function L_(e, t) { const { url: n, init: r } = ye(e), o = `${n}${xa}/${t}`; return await fetch(o, { ...r, method: "DELETE" }) }
const df = "/proxies";
async function N_(e) { const { url: t, init: n } = ye(e); return await (await fetch(t + df, n)).json() } async function T_(e, t, n) { const r = { name: n },
        { url: o, init: i } = ye(e),
        s = encodeURIComponent(t),
        a = `${o}${df}/${s}`; return await fetch(a, { ...i, method: "PUT", body: JSON.stringify(r) }) } async function Wv(e, t, n = "http://connectivitycheck.gstatic.com/generate_204") { const { url: r, init: o } = ye(e), i = `timeout=5000&url=${encodeURIComponent(n)}`, s = `${r}${df}/${encodeURIComponent(t)}/delay?${i}`; return await fetch(s, o) } async function I_(e) { const { url: t, init: n } = ye(e), r = await fetch(t + "/providers/proxies", n); return r.status === 404 ? { providers: {} } : await r.json() } async function Vv(e, t) { const { url: n, init: r } = ye(e), o = { ...r, method: "PUT" }; return await fetch(n + "/providers/proxies/" + encodeURIComponent(t), o) } async function D_(e, t) { const { url: n, init: r } = ye(e), o = { ...r, method: "GET" }; return await fetch(n + "/providers/proxies/" + encodeURIComponent(t) + "/healthcheck", o) }
const M_ = { proxies: {}, delay: {}, groupNames: [], showModalClosePrevConns: !1 },
    Hv = () => null,
    j_ = ["Direct", "Reject", "Relay", "Selector", "Fallback", "URLTest", "LoadBalance", "Unknown"],
    Qv = e => e.proxies.proxies,
    ar = e => e.proxies.delay,
    UR = e => e.proxies.groupNames,
    A_ = e => e.proxies.proxyProviders || [],
    F_ = e => e.proxies.dangleProxyNames,
    zR = e => e.proxies.showModalClosePrevConns;

function $_(e, t) { const n = {}; for (const r of e) { const i = (t(r) || { history: [] }).history,
            s = i[i.length - 1];
        s && typeof s.delay == "number" && (n[r] = { kind: "Result", number: s.delay }) } return n }

function Mr(e) { return async (t, n) => { const [r, o] = await Promise.all([N_(e), I_(e)]), { proxyProviders: i, providerProxyRecord: s } = K_(o.providers), a = { ...s, ...r.proxies }, [l, u] = Q_(a), c = { ...ar(n()), ...$_(Object.keys(a), f => a[f]) }, d = []; for (const f of u) s[f] || d.push(f);
        t("store/proxies#fetchProxies", f => { f.proxies.proxies = a, f.proxies.groupNames = l, f.proxies.dangleProxyNames = d, f.proxies.delay = c, f.proxies.proxyProviders = i }) } }

function BR(e, t) { return async n => { try { await Vv(e, t) } catch {} n(Mr(e)) } }

function WR(e, t) { return async n => { for (let r = 0; r < t.length; r++) try { await Vv(e, t[r]) } catch {} n(Mr(e)) } } async function pf(e, t) { try { await D_(e, t) } catch {} }

function VR(e, t) { return async n => { await pf(e, t), await n(Mr(e)) } } async function U_(e, t, n) { const r = await R_(e);
    r.ok || console.log("unable to fetch all connections", r.statusText); const i = (await r.json()).connections,
        s = []; for (const a of i) a.chains.indexOf(t) > -1 && a.chains.indexOf(n) < 0 && s.push(a.id);
    await Promise.all(s.map(a => L_(e, a).catch(Hv))) }

function z_(e, t, n) { const r = [n, t]; let o, i = n; for (;
        (o = e[i]) && o.now;) r.unshift(o.now), i = o.now; return r } async function B_(e, t, n, r, o) { try { if ((await T_(n, r, o)).ok === !1) throw new Error("failed to switch proxy: res.statusText") } catch (s) { throw console.log(s, "failed to switch proxy"), s } if (e(Mr(n)), W2(t())) { const s = Qv(t());
        qv(n, s, { groupName: r, itemName: o }) } }

function Kv() { return e => { e("closeModalClosePrevConns", t => { t.proxies.showModalClosePrevConns = !1 }) } }

function qv(e, t, n) { const r = z_(t, n.groupName, n.itemName);
    U_(e, n.groupName, r[0]) }

function W_(e) { return async (t, n) => { var s; const r = n(),
            o = (s = r.proxies.switchProxyCtx) == null ? void 0 : s.to; if (!o) { t(Kv()); return } const i = r.proxies.proxies;
        qv(e, i, o), t("closePrevConnsAndTheModal", a => { a.proxies.showModalClosePrevConns = !1, a.proxies.switchProxyCtx = void 0 }) } }

function HR(e, t, n) { return async (r, o) => { B_(r, o, e, t, n).catch(Hv), r("store/proxies#switchProxy", i => { const s = i.proxies.proxies;
            s[t] && s[t].now && (s[t].now = n) }) } }

function V_(e, t) { return async (n, r) => { n("set latency state to testing in progress", i => { i.proxies.delay = { ...ar(r()), [t]: { kind: "Testing" } } }); const o = Fv(r()); try { const i = await Wv(e, t, o); if (i.ok) { const { delay: s } = await i.json();
                n("set latency result", a => { a.proxies.delay = { ...ar(r()), [t]: { kind: "Result", number: s } } }) } else n("set latency testing error", s => { s.proxies.delay = { ...ar(r()), [t]: { kind: "Error", message: i.statusText } } }) } catch (i) { n("set latency testing networkish error", s => { s.proxies.delay = { ...ar(r()), [t]: { kind: "Error", message: i.message || i.type } } }) } } }

function H_(e, t) { return async (n, r) => { const o = Qv(r()),
            i = new Map,
            s = new Map,
            a = [];
        t.forEach(l => { const u = o[l];
            u.__provider ? u.__provider && (i.get(l) || (i.set(l, !0), n("set latency state to testing in progress", c => { c.proxies.delay = { ...ar(r()), [l]: { kind: "Testing" } } })), s.get(u.__provider) || (s.set(u.__provider, !0), a.push(pf(e, u.__provider)))) : i.get(l) || (i.set(l, !0), n(V_(e, l))) }), await Promise.all(a), await n(Mr(e)) } }

function QR(e) { return async (t, n) => { const r = F_(n()),
            o = Fv(n());
        await Promise.all(r.map(s => Wv(e, s, o))); const i = A_(n()); for (const s of i) await pf(e, s.name);
        await t(Mr(e)) } }

function Q_(e) { let t = [],
        n; const r = []; for (const o in e) { const i = e[o];
        i.all && Array.isArray(i.all) ? (t.push(o), o === "GLOBAL" && (n = Array.from(i.all))) : j_.indexOf(i.type) < 0 && r.push(o) } return n && (n.push("GLOBAL"), t = t.map(o => [n.indexOf(o), o]).sort((o, i) => o[0] - i[0]).map(o => o[1])), [t, r] }

function K_(e) { const t = Object.keys(e),
        n = [],
        r = {}; for (let o = 0; o < t.length; o++) { const i = e[t[o]]; if (i.name === "default" || i.vehicleType === "Compatible") continue; const s = i.proxies,
            a = []; for (let l = 0; l < s.length; l++) { const u = s[l];
            r[u.name] = { ...u, __provider: i.name }, a.push(u.name) } i.proxies = a, n.push(i) } return { proxyProviders: n, providerProxyRecord: r } }
const q_ = { requestDelayForProxies: H_, closeModalClosePrevConns: Kv, closePrevConnsAndTheModal: W_ },
    KR = vu(""),
    G_ = { app: n_(), modals: F2, configs: z2, proxies: M_, logs: P_ },
    Y_ = { selectChartStyleIndex: Y2, updateAppConfig: Fp, app: { updateCollapsibleIsOpen: J2, updateAppConfig: Fp, removeClashAPIConfig: Q2, selectClashAPIConfig: K2 }, proxies: q_ },
    { useState: Gv, useCallback: J_ } = dt;

function X_(e = !1) { const [t, n] = Gv(e), r = J_(() => n(o => !o), []); return [t, r] }

function qR(e) { const [t, n] = Gv(e); return { value: t, set: n } }
const Z_ = "_ul_1ore2_1",
    ek = "_li_1ore2_10",
    tk = "_right_1ore2_21",
    nk = "_close_1ore2_32",
    rk = "_eye_1ore2_39",
    ok = "_url_1ore2_54",
    ik = "_secret_1ore2_55",
    sk = "_metaLabel_1ore2_56",
    ak = "_btn_1ore2_62",
    wt = { ul: Z_, li: ek, right: tk, close: nk, eye: rk, url: ok, secret: ik, metaLabel: sk, btn: ak },
    lk = e => ({ apiConfigs: cf(e), selectedClashAPIConfigIndex: Mv(e) }),
    uk = _t(lk)(ck);

function ck({ apiConfigs: e, selectedClashAPIConfigIndex: t }) { const { app: { removeClashAPIConfig: n, selectClashAPIConfig: r } } = S2(), o = v.useCallback(s => { n(s) }, [n]), i = v.useCallback(s => { r(s) }, [r]); return y.jsx(y.Fragment, { children: y.jsx("ul", { className: wt.ul, children: e.map((s, a) => y.jsx("li", { className: Mt(wt.li, {
                    [wt.isSelected]: a === t }), children: y.jsx(fk, { disableRemove: a === t, conf: s, onRemove: o, onSelect: i }) }, s.baseURL + s.secret + s.metaLabel)) }) }) }

function fk({ conf: e, disableRemove: t, onRemove: n, onSelect: r }) { const [o, i] = X_(), s = o ? FC : zC, a = v.useCallback(l => { l.stopPropagation() }, []); return y.jsxs(y.Fragment, { children: [y.jsx(Bp, { disabled: t, onClick: () => n(e), className: wt.close, children: y.jsx(YC, { size: 20 }) }), y.jsxs("div", { className: wt.right, children: [e.metaLabel ? y.jsxs(y.Fragment, { children: [y.jsx("span", { className: wt.metaLabel, tabIndex: 0, role: "button", onClick: () => r(e), onKeyUp: a, children: e.metaLabel }), y.jsx("span", {})] }) : null, y.jsx("span", { className: wt.url, tabIndex: 0, role: "button", onClick: () => r(e), onKeyUp: a, children: e.baseURL }), y.jsx("span", {}), e.secret ? y.jsxs(y.Fragment, { children: [y.jsx("span", { className: wt.secret, children: o ? e.secret : "***" }), y.jsx(Bp, { onClick: i, className: wt.eye, children: y.jsx(s, { size: 16 }) })] }) : null] })] }) }

function Bp({ children: e, onClick: t, className: n, disabled: r }) { return y.jsx("button", { disabled: r, className: Mt(n, wt.btn), onClick: t, children: e }) }
const dk = "_root_zwtea_1",
    pk = "_header_zwtea_5",
    hk = "_icon_zwtea_10",
    mk = "_body_zwtea_20",
    gk = "_hostnamePort_zwtea_24",
    vk = "_error_zwtea_36",
    yk = "_footer_zwtea_42",
    $t = { root: dk, header: pk, icon: hk, body: mk, hostnamePort: gk, error: vk, footer: yk },
    wk = "_btn_lzu00_1",
    Sk = "_circular_lzu00_27",
    xk = "_minimal_lzu00_30",
    Ek = "_btnStart_lzu00_48",
    Ck = "_loadingContainer_lzu00_55",
    eo = { btn: wk, circular: Sk, minimal: xk, btnStart: Ek, loadingContainer: Ck },
    _k = "_sectionNameType_1b9pp_1",
    kk = "_loadingDot_1b9pp_66",
    Ok = "_dot2_1b9pp_1",
    Pk = "_dot1_1b9pp_1",
    bk = "_dot3_1b9pp_1",
    Yv = { sectionNameType: _k, loadingDot: kk, dot2: Ok, dot1: Pk, dot3: bk };

function GR({ name: e, type: t }) { return y.jsxs("h2", { className: Yv.sectionNameType, children: [y.jsx("span", { children: e }), y.jsx("span", { children: t })] }) }

function Rk() { return y.jsx("span", { className: Yv.loadingDot }) }
const { forwardRef: Lk, useCallback: Nk } = dt;

function Tk(e, t) { const { onClick: n, disabled: r = !1, isLoading: o, kind: i = "primary", className: s, children: a, label: l, text: u, start: c, ...d } = e, f = { children: a, label: l, text: u, start: c }, g = Nk(S => { o || n && n(S) }, [o, n]), w = Mt(eo.btn, {
        [eo.minimal]: i === "minimal", [eo.circular]: i === "circular" }, s); return y.jsx("button", { className: w, ref: t, onClick: g, disabled: r, ...d, children: o ? y.jsxs(y.Fragment, { children: [y.jsx("span", { style: { display: "inline-flex", opacity: 0 }, children: y.jsx(Wp, { ...f }) }), y.jsx("span", { className: eo.loadingContainer, children: y.jsx(Rk, {}) })] }) : y.jsx(Wp, { ...f }) }) }

function Wp({ children: e, label: t, text: n, start: r }) { return y.jsxs(y.Fragment, { children: [r ? y.jsx("span", { className: eo.btnStart, children: typeof r == "function" ? r() : r }) : null, e || t || n] }) }
const Ik = Lk(Tk),
    Dk = "_root_1wn1y_1",
    Mk = "_floatAbove_1wn1y_33",
    Vp = { root: Dk, floatAbove: Mk },
    { useCallback: jk } = dt;

function sl({ id: e, label: t, value: n, onChange: r, ...o }) { const i = jk(s => r(s), [r]); return y.jsxs("div", { className: Vp.root, children: [y.jsx("input", { id: e, value: n, onChange: i, ...o }), y.jsx("label", { htmlFor: e, className: Vp.floatAbove, children: t })] }) }
const Ak = "_path_r8pm3_1",
    Fk = "_dash_r8pm3_1",
    $k = { path: Ak, dash: Fk };

function hf({ width: e = 320, height: t = 320, animate: n = !1, c0: r = "currentColor", stroke: o = "#eee", eye: i = "#eee", mouth: s = "#eee" }) { const a = Mt({
        [$k.path]: n }); return y.jsx("svg", { width: e, height: t, viewBox: "0 0 320 320", xmlns: "http://www.w3.org/2000/svg", children: y.jsxs("g", { fill: "none", fillRule: "evenodd", children: [y.jsx("path", { d: "M71.689 53.055c9.23-1.487 25.684 27.263 41.411 56.663 18.572-8.017 71.708-7.717 93.775 0 4.714-15.612 31.96-57.405 41.626-56.663 3.992.088 13.07 31.705 23.309 94.96 2.743 16.949 7.537 47.492 14.38 91.63-42.339 17.834-84.37 26.751-126.095 26.751-41.724 0-83.756-8.917-126.095-26.751C52.973 116.244 65.536 54.047 71.689 53.055z", stroke: o, strokeWidth: "4", strokeLinecap: "round", fill: r, className: a }), y.jsx("circle", { fill: i, cx: "216.5", cy: "181.5", r: "14.5" }), y.jsx("circle", { fill: i, cx: "104.5", cy: "181.5", r: "14.5" }), y.jsx("g", { stroke: s, strokeLinecap: "round", strokeWidth: "4", children: y.jsx("path", { d: "M175.568 218.694c-2.494 1.582-5.534 2.207-8.563 1.508-3.029-.7-5.487-2.594-7.035-5.11M143.981 218.694c2.494 1.582 5.534 2.207 8.563 1.508 3.03-.7 5.488-2.594 7.036-5.11" }) })] }) }) }
const { useState: ji, useRef: Hp, useCallback: al, useEffect: Uk } = dt, Jv = 0, zk = () => {}, Bk = e => ({ apiConfig: mn(e) });

function Wk({ dispatch: e }) { const [t, n] = ji(""), [r, o] = ji(""), [i, s] = ji(""), [a, l] = ji(""), u = Hp(!1), c = Hp(null), d = al(S => { u.current = !0, l(""); const _ = S.target,
            { name: m } = _,
            p = _.value; switch (m) {
            case "baseURL":
                n(p); break;
            case "secret":
                o(p); break;
            case "metaLabel":
                s(p); break;
            default:
                throw new Error(`unknown input name ${m}`) } }, []), f = al(() => { Vk({ baseURL: t, secret: r }).then(S => { S[0] !== Jv ? l(S[1]) : e(H2({ baseURL: t, secret: r, metaLabel: i })) }) }, [t, r, i, e]), g = al(S => { S.target instanceof Element && (!S.target.tagName || S.target.tagName.toUpperCase() !== "INPUT") || S.key === "Enter" && f() }, [f]), w = async () => {
        (await fetch("/")).json().then(_ => { _.hello === "clash" && n(window.location.origin) }, zk) }; return Uk(() => { w() }, []), y.jsxs("div", { className: $t.root, ref: c, onKeyDown: g, children: [y.jsx("div", { className: $t.header, children: y.jsx("div", { className: $t.icon, children: y.jsx(hf, { width: 160, height: 160, stroke: "var(--stroke)" }) }) }), y.jsxs("div", { className: $t.body, children: [y.jsxs("div", { className: $t.hostnamePort, children: [y.jsx(sl, { id: "baseURL", name: "baseURL", label: "API Base URL", type: "text", placeholder: "http://127.0.0.1:9090", value: t, onChange: d }), y.jsx(sl, { id: "secret", name: "secret", label: "Secret(optional)", value: r, type: "text", onChange: d })] }), a ? y.jsx("div", { className: $t.error, children: a }) : null, y.jsx("div", { className: $t.label, children: y.jsx(sl, { id: "metaLabel", name: "metaLabel", label: "Label(optional)", type: "text", placeholder: "", value: i, onChange: d }) })] }), y.jsx("div", { className: $t.footer, children: y.jsx(Ik, { label: "Add", onClick: f }) }), y.jsx("div", { style: { height: 20 } }), y.jsx(uk, {})] }) }
const Xv = _t(Bk)(Wk);
async function Vk(e) { try { new URL(e.baseURL) } catch { if (e.baseURL) { const n = e.baseURL.substring(0, 7); if (n !== "http://" && n !== "https:/") return [1, "Must starts with http:// or https://"] } return [1, "Invalid URL"] } try { const t = await Tv(e); return t.status > 399 ? [1, t.statusText] : [Jv] } catch { return [1, "Failed to connect"] } }
/**
 * @reach/utils v0.18.0
 *
 * Copyright (c) 2018-2022, React Training LLC
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Zv() { return !!(typeof window < "u" && window.document && window.document.createElement) }

function ie(e, t) { return n => { if (e && e(n), !n.defaultPrevented) return t(n) } }

function Qp(e) { return typeof e == "boolean" }

function Qs(e) { return !!(e && {}.toString.call(e) == "[object Function]") }

function Hk(e) { return typeof e == "string" }

function Qk(e, t) { if (e != null)
        if (Qs(e)) e(t);
        else try { e.current = t } catch { throw new Error(`Cannot assign value "${t}" to ref "${e}"`) } }

function Wn(...e) { return v.useCallback(t => { for (let n of e) Qk(n, t) }, e) }

function fn(e) { return Zv() ? e ? e.ownerDocument : document : null }

function Kk(e, t) { let n = v.createContext(t);

    function r(i) { let { children: s, ...a } = i, l = v.useMemo(() => a, Object.values(a)); return v.createElement(n.Provider, { value: l }, s) }

    function o(i) { let s = v.useContext(n); if (s) return s; if (t) return t; throw Error(`${i} must be rendered inside of a ${e} component.`) } return n.displayName = `${e}Context`, r.displayName = `${e}Provider`, [r, o] }

function qk(e) { let t = fn(e),
        n = t.defaultView || window; return t ? { width: t.documentElement.clientWidth ? ? n.innerWidth, height: t.documentElement.clientHeight ? ? n.innerHeight } : { width: 0, height: 0 } }

function ns(e) { return "which" in e ? e.which === 3 : "button" in e ? e.button === 2 : !1 }

function Pr(...e) { return e.filter(t => t != null).join("--") }

function mf() {}

function ey() { let [, e] = v.useState(Object.create(null)); return v.useCallback(() => { e(Object.create(null)) }, []) }
var mr = Zv() ? v.useLayoutEffect : v.useEffect;

function ll(e) { const t = v.useRef(null); return v.useEffect(() => { t.current = e }, [e]), t.current }

function Gk(e, t) { let [n, r] = v.useState(t), o = v.useCallback(i => { e.current = i, r(i) }, []); return [n, o] }
var Yk = ({ children: e, type: t = "reach-portal", containerRef: n }) => { let r = v.useRef(null),
            o = v.useRef(null),
            i = ey(); return v.useEffect(() => { n != null && (typeof n != "object" || !("current" in n) ? console.warn("@reach/portal: Invalid value passed to the `containerRef` of a `Portal`. The portal will be appended to the document body, but if you want to attach it to another DOM node you must pass a valid React ref object to `containerRef`.") : n.current == null && console.warn("@reach/portal: A ref was passed to the `containerRef` prop of a `Portal`, but no DOM node was attached to it. Be sure to pass the ref to a DOM component.\n\nIf you are forwarding the ref from another component, be sure to use the React.forwardRef API. See https://reactjs.org/docs/forwarding-refs.html.")) }, [n]), mr(() => { if (!r.current) return; let s = r.current.ownerDocument,
                a = (n == null ? void 0 : n.current) || s.body; return o.current = s == null ? void 0 : s.createElement(t), a.appendChild(o.current), i(), () => { o.current && a && a.removeChild(o.current) } }, [t, i, n]), o.current ? Bc.createPortal(e, o.current) : v.createElement("span", { ref: r }) },
    gf = ({ unstable_skipInitialRender: e, ...t }) => { let [n, r] = v.useState(!1); return v.useEffect(() => { e && r(!0) }, [e]), e && !n ? null : v.createElement(Yk, { ...t }) };
gf.displayName = "Portal";
var Jk = ["bottom", "height", "left", "right", "top", "width"],
    Xk = function(t, n) { return t === void 0 && (t = {}), n === void 0 && (n = {}), Jk.some(function(r) { return t[r] !== n[r] }) },
    Ut = new Map,
    ty, Zk = function e() { var t = [];
        Ut.forEach(function(n, r) { var o = r.getBoundingClientRect();
            Xk(o, n.rect) && (n.rect = o, t.push(n)) }), t.forEach(function(n) { n.callbacks.forEach(function(r) { return r(n.rect) }) }), ty = window.requestAnimationFrame(e) };

function eO(e, t) { return { observe: function() { var r = Ut.size === 0;
            Ut.has(e) ? Ut.get(e).callbacks.push(t) : Ut.set(e, { rect: void 0, hasRectChanged: !1, callbacks: [t] }), r && Zk() }, unobserve: function() { var r = Ut.get(e); if (r) { var o = r.callbacks.indexOf(t);
                o >= 0 && r.callbacks.splice(o, 1), r.callbacks.length || Ut.delete(e), Ut.size || cancelAnimationFrame(ty) } } } }

function Ks(e, t, n) { let r, o;
    Qp(t) ? r = t : (r = (t == null ? void 0 : t.observe) ? ? !0, o = t == null ? void 0 : t.onChange), Qs(n) && (o = n), v.useEffect(() => { Qp(t) && console.warn("Passing `observe` as the second argument to `useRect` is deprecated and will be removed in a future version of Reach UI. Instead, you can pass an object of options with an `observe` property as the second argument (`useRect(ref, { observe })`).\nSee https://reach.tech/rect#userect-observe") }, [t]), v.useEffect(() => { Qs(n) && console.warn("Passing `onChange` as the third argument to `useRect` is deprecated and will be removed in a future version of Reach UI. Instead, you can pass an object of options with an `onChange` property as the second argument (`useRect(ref, { onChange })`).\nSee https://reach.tech/rect#userect-onchange") }, [n]); let [i, s] = v.useState(e.current), a = v.useRef(!1), l = v.useRef(!1), [u, c] = v.useState(null), d = v.useRef(o); return mr(() => { d.current = o, e.current !== i && s(e.current) }), mr(() => { i && !a.current && (a.current = !0, c(i.getBoundingClientRect())) }, [i]), mr(() => { if (!r) return; let f = i; if (l.current || (l.current = !0, f = e.current), !f) { console.warn("You need to place the ref"); return } let g = eO(f, w => { var S;
            (S = d.current) == null || S.call(d, w), c(w) }); return g.observe(), () => { g.unobserve() } }, [r, i, e]), u }
/*!
 * tabbable 5.3.3
 * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
 */
var tO = ["input", "select", "textarea", "a[href]", "button", "[tabindex]:not(slot)", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])', "details>summary:first-of-type", "details"],
    ju = tO.join(","),
    ny = typeof Element > "u",
    $o = ny ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
    Au = !ny && Element.prototype.getRootNode ? function(e) { return e.getRootNode() } : function(e) { return e.ownerDocument },
    nO = function(t, n, r) { var o = Array.prototype.slice.apply(t.querySelectorAll(ju)); return n && $o.call(t, ju) && o.unshift(t), o = o.filter(r), o },
    rO = function e(t, n, r) { for (var o = [], i = Array.from(t); i.length;) { var s = i.shift(); if (s.tagName === "SLOT") { var a = s.assignedElements(),
                    l = a.length ? a : s.children,
                    u = e(l, !0, r);
                r.flatten ? o.push.apply(o, u) : o.push({ scope: s, candidates: u }) } else { var c = $o.call(s, ju);
                c && r.filter(s) && (n || !t.includes(s)) && o.push(s); var d = s.shadowRoot || typeof r.getShadowRoot == "function" && r.getShadowRoot(s),
                    f = !r.shadowRootFilter || r.shadowRootFilter(s); if (d && f) { var g = e(d === !0 ? s.children : d.children, !0, r);
                    r.flatten ? o.push.apply(o, g) : o.push({ scope: s, candidates: g }) } else i.unshift.apply(i, s.children) } } return o },
    ry = function(t, n) { return t.tabIndex < 0 && (n || /^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || t.isContentEditable) && isNaN(parseInt(t.getAttribute("tabindex"), 10)) ? 0 : t.tabIndex },
    oO = function(t, n) { return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex },
    oy = function(t) { return t.tagName === "INPUT" },
    iO = function(t) { return oy(t) && t.type === "hidden" },
    sO = function(t) { var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(r) { return r.tagName === "SUMMARY" }); return n },
    aO = function(t, n) { for (var r = 0; r < t.length; r++)
            if (t[r].checked && t[r].form === n) return t[r] },
    lO = function(t) { if (!t.name) return !0; var n = t.form || Au(t),
            r = function(a) { return n.querySelectorAll('input[type="radio"][name="' + a + '"]') },
            o; if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function") o = r(window.CSS.escape(t.name));
        else try { o = r(t.name) } catch (s) { return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", s.message), !1 }
        var i = aO(o, t.form); return !i || i === t },
    uO = function(t) { return oy(t) && t.type === "radio" },
    cO = function(t) { return uO(t) && !lO(t) },
    Kp = function(t) { var n = t.getBoundingClientRect(),
            r = n.width,
            o = n.height; return r === 0 && o === 0 },
    fO = function(t, n) { var r = n.displayCheck,
            o = n.getShadowRoot; if (getComputedStyle(t).visibility === "hidden") return !0; var i = $o.call(t, "details>summary:first-of-type"),
            s = i ? t.parentElement : t; if ($o.call(s, "details:not([open]) *")) return !0; var a = Au(t).host,
            l = (a == null ? void 0 : a.ownerDocument.contains(a)) || t.ownerDocument.contains(t); if (!r || r === "full") { if (typeof o == "function") { for (var u = t; t;) { var c = t.parentElement,
                        d = Au(t); if (c && !c.shadowRoot && o(c) === !0) return Kp(t);
                    t.assignedSlot ? t = t.assignedSlot : !c && d !== t.ownerDocument ? t = d.host : t = c } t = u } if (l) return !t.getClientRects().length } else if (r === "non-zero-area") return Kp(t); return !1 },
    dO = function(t) { if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
            for (var n = t.parentElement; n;) { if (n.tagName === "FIELDSET" && n.disabled) { for (var r = 0; r < n.children.length; r++) { var o = n.children.item(r); if (o.tagName === "LEGEND") return $o.call(n, "fieldset[disabled] *") ? !0 : !o.contains(t) } return !0 } n = n.parentElement }
        return !1 },
    pO = function(t, n) { return !(n.disabled || iO(n) || fO(n, t) || sO(n) || dO(n)) },
    qp = function(t, n) { return !(cO(n) || ry(n) < 0 || !pO(t, n)) },
    hO = function(t) { var n = parseInt(t.getAttribute("tabindex"), 10); return !!(isNaN(n) || n >= 0) },
    mO = function e(t) { var n = [],
            r = []; return t.forEach(function(o, i) { var s = !!o.scope,
                a = s ? o.scope : o,
                l = ry(a, s),
                u = s ? e(o.candidates) : a;
            l === 0 ? s ? n.push.apply(n, u) : n.push(a) : r.push({ documentOrder: i, tabIndex: l, item: o, isScope: s, content: u }) }), r.sort(oO).reduce(function(o, i) { return i.isScope ? o.push.apply(o, i.content) : o.push(i.content), o }, []).concat(n) },
    kt = function(t, n) { n = n || {}; var r; return n.getShadowRoot ? r = rO([t], n.includeContainer, { filter: qp.bind(null, n), flatten: !1, getShadowRoot: n.getShadowRoot, shadowRootFilter: hO }) : r = nO(t, n.includeContainer, qp.bind(null, n)), mO(r) },
    vf = v.forwardRef(function({ unstable_skipInitialPortalRender: t, ...n }, r) { return v.createElement(gf, { unstable_skipInitialRender: t }, v.createElement(iy, { ref: r, ...n })) });
vf.displayName = "Popover";
var iy = v.forwardRef(function({ as: t = "div", targetRef: n, position: r = yO, unstable_observableRefs: o = [], ...i }, s) { const a = v.useRef(null),
        l = Ks(a, { observe: !i.hidden }),
        u = Ks(n, { observe: !0 }),
        c = Wn(a, s); return SO(n, a), v.createElement(t, { "data-reach-popover": "", ref: c, ...i, style: { position: "absolute", ...gO(r, u, l, ...o), ...i.style } }) });
iy.displayName = "PopoverImpl";

function gO(e, t, n, ...r) { return n ? e(t, n, ...r.map(o => o.current)) : { visibility: "hidden" } }

function vO(e, t, n) { return { top: n ? `${e.top-t.height+window.pageYOffset}px` : `${e.top+e.height+window.pageYOffset}px` } }
var yO = (e, t) => { if (!e || !t) return {}; const { directionRight: n, directionUp: r } = wO(e, t); return { left: n ? `${e.right-t.width+window.pageXOffset}px` : `${e.left+window.pageXOffset}px`, ...vO(e, t, r) } };

function wO(e, t, n = 0, r = 0) { const o = { top: e.top - t.height < 0, right: window.innerWidth < e.left + t.width - n, bottom: window.innerHeight < e.bottom + t.height - r, left: e.left + e.width - t.width < 0 },
        i = o.right && !o.left,
        s = o.left && !o.right,
        a = o.bottom && !o.top,
        l = o.top && !o.bottom; return { directionRight: i, directionLeft: s, directionUp: a, directionDown: l } }

function SO(e, t) { const n = fn(e.current);

    function r(p) { p.key === "Tab" && t.current && kt(t.current).length === 0 || (p.key === "Tab" && p.shiftKey ? u(p) ? c(p) : d(p) ? f(p) : w(p) && _() : p.key === "Tab" && (i() ? s(p) : a() ? l(p) : g(p) && _())) } v.useEffect(() => (n.addEventListener("keydown", r), () => { n.removeEventListener("keydown", r) }), []);

    function o() { const p = kt(n),
            h = p && e.current ? p.indexOf(e.current) : -1,
            E = p && p[h + 1]; return t.current && t.current.contains(E || null) ? !1 : E }

    function i() { return e.current ? e.current === n.activeElement : !1 }

    function s(p) { const h = t.current && kt(t.current);
        h && h[0] && (p.preventDefault(), h[0].focus()) }

    function a() { if (t.current ? t.current.contains(n.activeElement || null) : !1) { const h = t.current && kt(t.current); return !!(h && h[h.length - 1] === n.activeElement) } return !1 }

    function l(p) { const h = o();
        h && (p.preventDefault(), h.focus()) }

    function u(p) { if (!p.shiftKey) return; const h = o(); return p.target === h }

    function c(p) { const h = t.current && kt(t.current),
            E = h && h[h.length - 1];
        E && (p.preventDefault(), E.focus()) }

    function d(p) { const h = t.current && kt(t.current); return h ? h.length === 0 ? !1 : p.target === h[0] : !1 }

    function f(p) { var h;
        p.preventDefault(), (h = e.current) == null || h.focus() }

    function g(p) { const h = t.current ? kt(n).filter(E => !t.current.contains(E)) : null; return h ? p.target === h[h.length - 1] : !1 }

    function w(p) { return p.target === kt(n)[0] } let S = [];

    function _() { const p = t.current && kt(t.current);
        p && (p.forEach(h => { S.push([h, h.tabIndex]), h.tabIndex = -1 }), n.addEventListener("focusin", m)) }

    function m() { n.removeEventListener("focusin", m), S.forEach(([p, h]) => { p.tabIndex = h }) } }
var ul = !1,
    xO = 0;

function Gp() { return ++xO }
var Yp = dt["useId".toString()];

function sy(e) { if (Yp !== void 0) { let o = Yp(); return e ? ? o } let t = e ? ? (ul ? Gp() : null),
        [n, r] = v.useState(t); return mr(() => { n === null && r(Gp()) }, []), v.useEffect(() => { ul === !1 && (ul = !0) }, []), e ? ? n ? ? void 0 }

function EO(e, t = {}) { const n = []; let r = v.createContext({ descendants: n, registerDescendant: () => mf, ...t }); return r.displayName = e, r }

function CO(e, t, n) { let r = ey(),
        { registerDescendant: o, descendants: i } = v.useContext(t),
        s = n ? ? i.findIndex(a => a.element === e.element); return mr(() => (e.element || r(), o({ ...e, index: s })), [e, r, s, o, ...Object.values(e)]), s }

function _O() { return v.useState([]) }

function kO(e) { return v.useContext(e).descendants }

function OO({ context: e, children: t, items: n, set: r }) { let o = v.useCallback(({ element: i, index: s, ...a }) => i ? (r(l => { if (s != null && s !== -1) return Jp(l, { element: i, index: s, ...a }, s); if (l.length === 0) return [{ ...a, element: i, index: 0 }]; if (l.find(d => d.element === i)) return console.warn(`[reach-ui]: \`useDescendant\` was called with an element that was already registered.

If you are using the \`@reach/descendants\` package directly, make sure to only register descendants once. Registering a descendant more than once will lead to bugs in your app.

If you are using another \`reach-ui\` package, this is probably our bug!

To report a bug, open a new issue:

  https://github.com/reach/reach-ui/issues/new?assignees=&labels=&template=Bug_report.md

IMPORTANT: this check will only run in the development build, so if you see this warning please be aware that your app may crash when deployed.`), RO(l); let u = bO(l, i),
            c; return u === -1 ? c = [...l, { ...a, element: i, index: l.length }] : c = Jp(l, { ...a, element: i, index: u }, u), c }), () => { i && r(l => l.filter(u => i !== u.element)) }) : mf, []); return v.createElement(e.Provider, { value: v.useMemo(() => ({ descendants: n, registerDescendant: o }), [n, o]) }, t) }

function PO(e, t) { let { descendants: n } = v.useContext(e), { callback: r, currentIndex: o, filter: i, key: s = "index", orientation: a = "vertical", rotate: l = !0, rtl: u = !1 } = t; return function(d) { if (!["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight", "PageUp", "PageDown", "Home", "End"].includes(d.key)) return; let f = o ? ? -1,
            g = i ? n.filter(i) : n; if (!g.length) return; let w = g.findIndex(h => h.index === o);

        function S() { return f === p().index ? l ? m() : g[w] : g[(w + 1) % g.length] }

        function _() { return f === m().index ? l ? p() : g[w] : g[(w - 1 + g.length) % g.length] }

        function m() { return g[0] }

        function p() { return g[g.length - 1] } switch (d.key) {
            case "ArrowDown":
                if (a === "vertical" || a === "both") { d.preventDefault(); let O = S();
                    r(s === "option" ? O : O[s]) } break;
            case "ArrowUp":
                if (a === "vertical" || a === "both") { d.preventDefault(); let O = _();
                    r(s === "option" ? O : O[s]) } break;
            case "ArrowLeft":
                if (a === "horizontal" || a === "both") { d.preventDefault(); let O = (u ? S : _)();
                    r(s === "option" ? O : O[s]) } break;
            case "ArrowRight":
                if (a === "horizontal" || a === "both") { d.preventDefault(); let O = (u ? _ : S)();
                    r(s === "option" ? O : O[s]) } break;
            case "PageUp":
                d.preventDefault(); let h = (d.ctrlKey ? _ : m)();
                r(s === "option" ? h : h[s]); break;
            case "Home":
                d.preventDefault(); let E = m();
                r(s === "option" ? E : E[s]); break;
            case "PageDown":
                d.preventDefault(); let b = (d.ctrlKey ? S : p)();
                r(s === "option" ? b : b[s]); break;
            case "End":
                d.preventDefault(); let P = p();
                r(s === "option" ? P : P[s]); break } } }

function ay(e, t) { return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING) }

function bO(e, t) { if (!t || !e.length) return -1; let n = e.length; for (; n--;) { let r = e[n].element; if (r && ay(r, t)) return n + 1 } return -1 }

function Jp(e, t, n) { return n == null || !(n in e) ? [...e, t] : [...e.slice(0, n), t, ...e.slice(n)] }

function RO(e) { return e.sort((t, n) => !t.element || !n.element ? 0 : ay(t.element, n.element) ? -1 : 1).map((t, n) => ({ ...t, index: n })) }
var ly = "CLEAR_SELECTION_INDEX",
    yf = "CLICK_MENU_ITEM",
    Uo = "CLOSE_MENU",
    LO = "OPEN_MENU_AT_FIRST_ITEM",
    Fu = "OPEN_MENU_AT_INDEX",
    uy = "OPEN_MENU_CLEARED",
    $u = "SEARCH_FOR_ITEM",
    Jt = "SELECT_ITEM_AT_INDEX",
    Uu = "SET_BUTTON_ID",
    Ea = EO("DropdownDescendantContext"),
    [NO, ei] = Kk("Dropdown"),
    TO = { triggerId: null, isExpanded: !1, typeaheadQuery: "", selectionIndex: -1 },
    cy = ({ id: e, children: t }) => { let n = v.useRef(null),
            r = v.useRef(null),
            o = v.useRef(null),
            [i, s] = _O(),
            a = sy(e),
            l = e || Pr("menu", a),
            u = Pr("menu-button", l),
            [c, d] = v.useReducer($O, { ...TO, triggerId: u }),
            f = v.useRef(!1),
            g = v.useRef([]),
            w = v.useRef(!1),
            S = v.useRef({ x: 0, y: 0 }); return v.useEffect(() => { c.isExpanded ? (window.__REACH_DISABLE_TOOLTIPS = !0, window.requestAnimationFrame(() => { qs(r.current) })) : window.__REACH_DISABLE_TOOLTIPS = !1 }, [c.isExpanded]), v.createElement(OO, { context: Ea, items: i, set: s }, v.createElement(NO, { dispatch: d, dropdownId: l, dropdownRef: r, mouseDownStartPosRef: S, popoverRef: o, readyToSelect: w, selectCallbacks: g, state: c, triggerClickedRef: f, triggerRef: n }, Qs(t) ? t({ isExpanded: c.isExpanded, isOpen: c.isExpanded }) : t)) };
cy.displayName = "DropdownProvider";

function fy({ onKeyDown: e, onMouseDown: t, id: n, ref: r, ...o }) { let { dispatch: i, dropdownId: s, mouseDownStartPosRef: a, triggerClickedRef: l, triggerRef: u, state: { triggerId: c, isExpanded: d } } = ei("useDropdownTrigger"), f = Wn(u, r), g = gy(), w = v.useMemo(() => g.findIndex(m => !m.disabled), [g]);
    v.useEffect(() => { n != null && n !== c && i({ type: Uu, payload: n }) }, [c, i, n]), v.useEffect(() => { n == null && i({ type: Uu, payload: Pr("menu-button", s) }) }, [s, i, n]);

    function S(m) { switch (m.key) {
            case "ArrowDown":
            case "ArrowUp":
                m.preventDefault(), i({ type: Fu, payload: { index: w } }); break;
            case "Enter":
            case " ":
                i({ type: Fu, payload: { index: w } }); break } }

    function _(m) { ns(m.nativeEvent) || (a.current = { x: m.clientX, y: m.clientY }, d || (l.current = !0), i(d ? { type: Uo } : { type: uy })) } return { data: { isExpanded: d, controls: s }, props: { ...o, ref: f, id: c || void 0, onKeyDown: ie(e, S), onMouseDown: ie(t, _), type: "button" } } }
var IO = v.forwardRef(({ as: e = "button", ...t }, n) => { let { props: r } = fy({ ...t, ref: n }); return v.createElement(e, { "data-reach-dropdown-trigger": "", ...r }) });
IO.displayName = "DropdownTrigger";

function dy({ index: e, isLink: t = !1, onClick: n, onDragStart: r, onMouseDown: o, onMouseEnter: i, onMouseLeave: s, onMouseMove: a, onMouseUp: l, onSelect: u, disabled: c, onFocus: d, valueText: f, ref: g, ...w }) { let { dispatch: S, dropdownRef: _, mouseDownStartPosRef: m, readyToSelect: p, selectCallbacks: h, triggerRef: E, state: { selectionIndex: b, isExpanded: P } } = ei("useDropdownItem"), O = v.useRef(null), [x, R] = v.useState(f || ""), L = v.useCallback(H => {!f && (H != null && H.textContent) && R(H.textContent) }, [f]), D = v.useRef(!1), [A, j] = Gk(O, null), N = v.useMemo(() => ({ element: A, key: x, disabled: c, isLink: t }), [c, A, t, x]), T = CO(N, Ea, e), F = T === b && !c, C = Wn(g, j, L);
    h.current[T] = u;

    function k() { qs(E.current), u && u(), S({ type: yf }) }

    function M(H) { ns(H.nativeEvent) || t && (c ? H.preventDefault() : k()) }

    function U(H) { t && H.preventDefault() }

    function B(H) { ns(H.nativeEvent) || (t ? D.current = !0 : H.preventDefault()) }

    function q(H) { let At = fn(_.current);!F && T != null && !c && (_ != null && _.current && _.current !== At.activeElement && O.current !== At.activeElement && _.current.focus(), S({ type: Jt, payload: { index: T } })) }

    function Re(H) { S({ type: ly }) }

    function Le(H) { if (!p.current) { let At = 8,
                Qy = Math.abs(H.clientX - m.current.x),
                Ky = Math.abs(H.clientY - m.current.y);
            (Qy > At || Ky > At) && (p.current = !0) }!F && T != null && !c && S({ type: Jt, payload: { index: T, dropdownRef: _ } }) }

    function gn() { p.current = !0, !F && T != null && !c && S({ type: Jt, payload: { index: T } }) }

    function Ze(H) { if (!ns(H.nativeEvent)) { if (!p.current) { p.current = !0; return } t ? D.current ? D.current = !1 : O.current && O.current.click() : c || k() } } return v.useEffect(() => { if (P) { let H = window.setTimeout(() => { p.current = !0 }, 400); return () => { window.clearTimeout(H) } } else p.current = !1 }, [P, p]), v.useEffect(() => { let H = fn(O.current); return H.addEventListener("mouseup", At), () => { H.removeEventListener("mouseup", At) };

        function At() { D.current = !1 } }, []), { data: { disabled: c }, props: { id: my(T), tabIndex: -1, ...w, ref: C, "data-disabled": c ? "" : void 0, "data-selected": F ? "" : void 0, "data-valuetext": x, onClick: ie(n, M), onDragStart: ie(r, U), onMouseDown: ie(o, B), onMouseEnter: ie(i, q), onMouseLeave: ie(s, Re), onMouseMove: ie(a, Le), onFocus: ie(d, gn), onMouseUp: ie(l, Ze) } } }
var DO = v.forwardRef(({ as: e = "div", ...t }, n) => { let { props: r } = dy({ ...t, ref: n }); return v.createElement(e, { "data-reach-dropdown-item": "", ...r }) });
DO.displayName = "DropdownItem";

function py({ id: e, onKeyDown: t, ref: n, ...r }) { let { dispatch: o, triggerRef: i, dropdownRef: s, selectCallbacks: a, dropdownId: l, state: { isExpanded: u, triggerId: c, selectionIndex: d, typeaheadQuery: f } } = ei("useDropdownItems"), g = gy(), w = Wn(s, n);
    v.useEffect(() => { let h = AO(g, f);
        f && h != null && o({ type: Jt, payload: { index: h, dropdownRef: s } }); let E = window.setTimeout(() => f && o({ type: $u, payload: "" }), 1e3); return () => window.clearTimeout(E) }, [o, g, f, s]); let S = ll(g.length),
        _ = ll(g[d]),
        m = ll(d);
    v.useEffect(() => { d > g.length - 1 ? o({ type: Jt, payload: { index: g.length - 1, dropdownRef: s } }) : S !== g.length && d > -1 && _ && m === d && g[d] !== _ && o({ type: Jt, payload: { index: g.findIndex(h => h.key === (_ == null ? void 0 : _.key)), dropdownRef: s } }) }, [s, o, g, S, _, m, d]); let p = ie(function(E) { let { key: b } = E; if (u) switch (b) {
            case "Enter":
            case " ":
                let P = g.find(O => O.index === d);
                P && !P.disabled && (E.preventDefault(), P.isLink && P.element ? P.element.click() : (qs(i.current), a.current[P.index] && a.current[P.index](), o({ type: yf }))); break;
            case "Escape":
                qs(i.current), o({ type: Uo }); break;
            case "Tab":
                E.preventDefault(); break;
            default:
                if (Hk(b) && b.length === 1) { let O = f + b.toLowerCase();
                    o({ type: $u, payload: O }) } break } }, PO(Ea, { currentIndex: d, orientation: "vertical", rotate: !1, filter: h => !h.disabled, callback: h => { o({ type: Jt, payload: { index: h, dropdownRef: s } }) }, key: "index" })); return { data: { activeDescendant: my(d) || void 0, triggerId: c }, props: { tabIndex: -1, ...r, ref: w, id: l, onKeyDown: ie(t, p) } } }
var MO = v.forwardRef(({ as: e = "div", ...t }, n) => { let { props: r } = py({ ...t, ref: n }); return v.createElement(e, { "data-reach-dropdown-items": "", ...r }) });
MO.displayName = "DropdownItems";

function hy({ onBlur: e, portal: t = !0, position: n, ref: r, ...o }) { let { triggerRef: i, triggerClickedRef: s, dispatch: a, dropdownRef: l, popoverRef: u, state: { isExpanded: c } } = ei("useDropdownPopover"), d = Wn(u, r); return v.useEffect(() => { if (!c) return; let f = fn(u.current);

        function g(w) { s.current ? s.current = !1 : FO(u.current, w.target) || a({ type: Uo }) } return f.addEventListener("mousedown", g), () => { f.removeEventListener("mousedown", g) } }, [s, i, a, l, u, c]), { data: { portal: t, position: n, targetRef: i, isExpanded: c }, props: { ref: d, hidden: !c, onBlur: ie(e, f => { f.currentTarget.contains(f.relatedTarget) || a({ type: Uo }) }), ...o } } }
var jO = v.forwardRef(({ as: e = "div", ...t }, n) => { let { data: { portal: r, targetRef: o, position: i }, props: s } = hy({ ...t, ref: n }), a = { "data-reach-dropdown-popover": "" }; return r ? v.createElement(vf, { ...s, ...a, as: e, targetRef: o, position: i, unstable_skipInitialPortalRender: !0 }) : v.createElement(e, { ...s, ...a }) });
jO.displayName = "DropdownPopover";

function AO(e, t = "") { if (!t) return null; let n = e.find(r => { var o, i, s; return r.disabled ? !1 : (s = (i = (o = r.element) == null ? void 0 : o.dataset) == null ? void 0 : i.valuetext) == null ? void 0 : s.toLowerCase().startsWith(t) }); return n ? e.indexOf(n) : null }

function my(e) { let { dropdownId: t } = ei("useItemId"); return e != null && e > -1 ? Pr(`option-${e}`, t) : void 0 }

function qs(e) { e && e.focus() }

function FO(e, t) { return !!(e && e.contains(t)) }

function $O(e, t = {}) { switch (t.type) {
        case yf:
            return { ...e, isExpanded: !1, selectionIndex: -1 };
        case Uo:
            return { ...e, isExpanded: !1, selectionIndex: -1 };
        case LO:
            return { ...e, isExpanded: !0, selectionIndex: 0 };
        case Fu:
            return { ...e, isExpanded: !0, selectionIndex: t.payload.index };
        case uy:
            return { ...e, isExpanded: !0, selectionIndex: -1 };
        case Jt:
            { let { dropdownRef: n = { current: null } } = t.payload; if (t.payload.index >= 0 && t.payload.index !== e.selectionIndex) { if (n.current) { let r = fn(n.current);
                        n.current !== (r == null ? void 0 : r.activeElement) && n.current.focus() } return { ...e, selectionIndex: t.payload.max != null ? Math.min(Math.max(t.payload.index, 0), t.payload.max) : Math.max(t.payload.index, 0) } } return e }
        case ly:
            return { ...e, selectionIndex: -1 };
        case Uu:
            return { ...e, triggerId: t.payload };
        case $u:
            return typeof t.payload < "u" ? { ...e, typeaheadQuery: t.payload } : e;
        default:
            return e } }

function gy() { return kO(Ea) }
var vy = { exports: {} },
    G = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ca = 60103,
    _a = 60106,
    ti = 60107,
    ni = 60108,
    ri = 60114,
    oi = 60109,
    ii = 60110,
    si = 60112,
    ai = 60113,
    wf = 60120,
    li = 60115,
    ui = 60116,
    yy = 60121,
    wy = 60122,
    Sy = 60117,
    xy = 60129,
    Ey = 60131;
if (typeof Symbol == "function" && Symbol.for) { var pe = Symbol.for;
    Ca = pe("react.element"), _a = pe("react.portal"), ti = pe("react.fragment"), ni = pe("react.strict_mode"), ri = pe("react.profiler"), oi = pe("react.provider"), ii = pe("react.context"), si = pe("react.forward_ref"), ai = pe("react.suspense"), wf = pe("react.suspense_list"), li = pe("react.memo"), ui = pe("react.lazy"), yy = pe("react.block"), wy = pe("react.server.block"), Sy = pe("react.fundamental"), xy = pe("react.debug_trace_mode"), Ey = pe("react.legacy_hidden") }

function mt(e) { if (typeof e == "object" && e !== null) { var t = e.$$typeof; switch (t) {
            case Ca:
                switch (e = e.type, e) {
                    case ti:
                    case ri:
                    case ni:
                    case ai:
                    case wf:
                        return e;
                    default:
                        switch (e = e && e.$$typeof, e) {
                            case ii:
                            case si:
                            case ui:
                            case li:
                            case oi:
                                return e;
                            default:
                                return t } }
            case _a:
                return t } } }
var UO = oi,
    zO = Ca,
    BO = si,
    WO = ti,
    VO = ui,
    HO = li,
    QO = _a,
    KO = ri,
    qO = ni,
    GO = ai;
G.ContextConsumer = ii;
G.ContextProvider = UO;
G.Element = zO;
G.ForwardRef = BO;
G.Fragment = WO;
G.Lazy = VO;
G.Memo = HO;
G.Portal = QO;
G.Profiler = KO;
G.StrictMode = qO;
G.Suspense = GO;
G.isAsyncMode = function() { return !1 };
G.isConcurrentMode = function() { return !1 };
G.isContextConsumer = function(e) { return mt(e) === ii };
G.isContextProvider = function(e) { return mt(e) === oi };
G.isElement = function(e) { return typeof e == "object" && e !== null && e.$$typeof === Ca };
G.isForwardRef = function(e) { return mt(e) === si };
G.isFragment = function(e) { return mt(e) === ti };
G.isLazy = function(e) { return mt(e) === ui };
G.isMemo = function(e) { return mt(e) === li };
G.isPortal = function(e) { return mt(e) === _a };
G.isProfiler = function(e) { return mt(e) === ri };
G.isStrictMode = function(e) { return mt(e) === ni };
G.isSuspense = function(e) { return mt(e) === ai };
G.isValidElementType = function(e) { return typeof e == "string" || typeof e == "function" || e === ti || e === ri || e === xy || e === ni || e === ai || e === wf || e === Ey || typeof e == "object" && e !== null && (e.$$typeof === ui || e.$$typeof === li || e.$$typeof === oi || e.$$typeof === ii || e.$$typeof === si || e.$$typeof === Sy || e.$$typeof === yy || e[0] === wy) };
G.typeOf = mt;
vy.exports = G;
var YO = vy.exports,
    Cy = v.forwardRef(({ as: e = v.Fragment, id: t, children: n, ...r }, o) => { let s = v.useMemo(() => { try { return YO.isFragment(v.createElement(e, null)) } catch { return !1 } }, [e]) ? {} : { ref: o, id: t, "data-reach-menu": "", ...r }; return v.createElement(e, { ...s }, v.createElement(cy, { id: t, children: n })) });
Cy.displayName = "Menu";
var _y = v.forwardRef(({ as: e = "button", ...t }, n) => { let { data: { isExpanded: r, controls: o }, props: i } = fy({ ...t, ref: n }); return v.createElement(e, { "aria-expanded": r ? !0 : void 0, "aria-haspopup": !0, "aria-controls": o, ...i, "data-reach-menu-button": "" }) });
_y.displayName = "MenuButton";
var Sf = v.forwardRef(({ as: e = "div", ...t }, n) => { let { data: { disabled: r }, props: o } = dy({ ...t, ref: n }); return v.createElement(e, { role: "menuitem", ...o, "aria-disabled": r || void 0, "data-reach-menu-item": "" }) });
Sf.displayName = "MenuItemImpl";
var ky = v.forwardRef(({ as: e = "div", ...t }, n) => v.createElement(Sf, { ...t, ref: n, as: e }));
ky.displayName = "MenuItem";
var Oy = v.forwardRef(({ as: e = "div", ...t }, n) => { let { data: { activeDescendant: r, triggerId: o }, props: i } = py({ ...t, ref: n }); return v.createElement(e, { "aria-activedescendant": r, "aria-labelledby": o || void 0, role: "menu", ...i, "data-reach-menu-items": "" }) });
Oy.displayName = "MenuItems";
var JO = v.forwardRef(({ as: e = "a", component: t, onSelect: n, ...r }, o) => (v.useEffect(() => { t && console.warn("[@reach/menu-button]: Please use the `as` prop instead of `component`") }, [t]), v.createElement(Sf, { ...r, ref: o, "data-reach-menu-link": "", as: e, isLink: !0, onSelect: n || mf })));
JO.displayName = "MenuLink";
var Py = v.forwardRef(({ portal: e = !0, ...t }, n) => v.createElement(by, { portal: e }, v.createElement(Oy, { ...t, ref: n, "data-reach-menu-list": "" })));
Py.displayName = "MenuList";
var by = v.forwardRef(({ as: e = "div", ...t }, n) => { let { data: { portal: r, targetRef: o, position: i }, props: s } = hy({ ...t, ref: n }), a = { "data-reach-menu-popover": "" }; return r ? v.createElement(vf, { ...s, ...a, as: e, targetRef: o, position: i, unstable_skipInitialPortalRender: !0 }) : v.createElement(e, { ...s, ...a }) });
by.displayName = "MenuPopover";
var Ry = v.forwardRef(function({ as: t = "span", style: n = {}, ...r }, o) { return v.createElement(t, { ref: o, style: { border: 0, clip: "rect(0 0 0 0)", height: "1px", margin: "-1px", overflow: "hidden", padding: 0, position: "absolute", width: "1px", whiteSpace: "nowrap", wordWrap: "normal", ...n }, ...r }) });
Ry.displayName = "VisuallyHidden";
var XO = 100,
    ZO = 500,
    zu = { initial: "IDLE", states: { IDLE: { enter: cl, on: { MOUSE_ENTER: "FOCUSED", FOCUS: "VISIBLE" } }, FOCUSED: { enter: nP, leave: rP, on: { MOUSE_MOVE: "FOCUSED", MOUSE_LEAVE: "IDLE", MOUSE_DOWN: "DISMISSED", BLUR: "IDLE", REST: "VISIBLE" } }, VISIBLE: { on: { FOCUS: "FOCUSED", MOUSE_ENTER: "FOCUSED", MOUSE_LEAVE: "LEAVING_VISIBLE", BLUR: "LEAVING_VISIBLE", MOUSE_DOWN: "DISMISSED", SELECT_WITH_KEYBOARD: "DISMISSED", GLOBAL_MOUSE_MOVE: "LEAVING_VISIBLE" } }, LEAVING_VISIBLE: { enter: oP, leave: () => { iP(), cl() }, on: { MOUSE_ENTER: "VISIBLE", FOCUS: "VISIBLE", TIME_COMPLETE: "IDLE" } }, DISMISSED: { leave: () => { cl() }, on: { MOUSE_LEAVE: "IDLE", BLUR: "IDLE" } } } },
    Ge = { value: zu.initial, context: { id: null } },
    rs = [];

function eP(e) { return rs.push(e), () => { rs.splice(rs.indexOf(e), 1) } }

function tP() { rs.forEach(e => e(Ge)) }
var Bu;

function nP() { window.clearTimeout(Bu), Bu = window.setTimeout(() => { rt({ type: "REST" }) }, XO) }

function rP() { window.clearTimeout(Bu) }
var Wu;

function oP() { window.clearTimeout(Wu), Wu = window.setTimeout(() => rt({ type: "TIME_COMPLETE" }), ZO) }

function iP() { window.clearTimeout(Wu) }

function cl() { Ge.context.id = null }

function sP({ id: e, onPointerEnter: t, onPointerMove: n, onPointerLeave: r, onPointerDown: o, onMouseEnter: i, onMouseMove: s, onMouseLeave: a, onMouseDown: l, onFocus: u, onBlur: c, onKeyDown: d, disabled: f, ref: g, DEBUG_STYLE: w } = {}) { let S = String(sy(e)),
        [_, m] = v.useState(w ? !0 : Xp(S, !0)),
        p = v.useRef(null),
        h = Wn(g, p),
        E = Ks(p, { observe: _ });
    v.useEffect(() => eP(() => { m(Xp(S)) }), [S]), v.useEffect(() => { let F = fn(p.current);

        function C(k) {
            (k.key === "Escape" || k.key === "Esc") && Ge.value === "VISIBLE" && rt({ type: "SELECT_WITH_KEYBOARD" }) } return F.addEventListener("keydown", C), () => F.removeEventListener("keydown", C) }, []), cP({ disabled: f, isVisible: _, ref: p });

    function b(F, C) { return typeof window < "u" && "PointerEvent" in window ? F : ie(F, C) }

    function P(F) { return function(k) { k.pointerType === "mouse" && F(k) } }

    function O() { rt({ type: "MOUSE_ENTER", id: S }) }

    function x() { rt({ type: "MOUSE_MOVE", id: S }) }

    function R() { rt({ type: "MOUSE_LEAVE" }) }

    function L() { Ge.context.id === S && rt({ type: "MOUSE_DOWN" }) }

    function D() { window.__REACH_DISABLE_TOOLTIPS || rt({ type: "FOCUS", id: S }) }

    function A() { Ge.context.id === S && rt({ type: "BLUR" }) }

    function j(F) {
        (F.key === "Enter" || F.key === " ") && rt({ type: "SELECT_WITH_KEYBOARD" }) } return [{ "aria-describedby": _ ? Pr("tooltip", S) : void 0, "data-state": _ ? "tooltip-visible" : "tooltip-hidden", "data-reach-tooltip-trigger": "", ref: h, onPointerEnter: ie(t, P(O)), onPointerMove: ie(n, P(x)), onPointerLeave: ie(r, P(R)), onPointerDown: ie(o, P(L)), onMouseEnter: b(i, O), onMouseMove: b(s, x), onMouseLeave: b(a, R), onMouseDown: b(l, L), onFocus: ie(u, D), onBlur: ie(c, A), onKeyDown: ie(d, j) }, { id: S, triggerRect: E, isVisible: _ }, _] }
var xf = v.forwardRef(function({ children: e, label: t, ariaLabel: n, id: r, DEBUG_STYLE: o, ...i }, s) { let a = v.Children.only(e);
    v.useEffect(() => { n && console.warn("The `ariaLabel prop is deprecated and will be removed from @reach/tooltip in a future version of Reach UI. Please use `aria-label` instead.") }, [n]); let [l, u] = sP({ id: r, onPointerEnter: a.props.onPointerEnter, onPointerMove: a.props.onPointerMove, onPointerLeave: a.props.onPointerLeave, onPointerDown: a.props.onPointerDown, onMouseEnter: a.props.onMouseEnter, onMouseMove: a.props.onMouseMove, onMouseLeave: a.props.onMouseLeave, onMouseDown: a.props.onMouseDown, onFocus: a.props.onFocus, onBlur: a.props.onBlur, onKeyDown: a.props.onKeyDown, disabled: a.props.disabled, ref: a.ref, DEBUG_STYLE: o }); return v.createElement(v.Fragment, null, v.cloneElement(a, l), v.createElement(Ly, { ref: s, label: t, "aria-label": n, ...u, ...i })) });
xf.displayName = "Tooltip";
var Ly = v.forwardRef(function({ label: t, ariaLabel: n, isVisible: r, id: o, ...i }, s) { return r ? v.createElement(gf, null, v.createElement(Ny, { ref: s, label: t, "aria-label": n, isVisible: r, ...i, id: Pr("tooltip", String(o)) })) : null });
Ly.displayName = "TooltipPopup";
var Ny = v.forwardRef(function({ ariaLabel: t, "aria-label": n, as: r = "div", id: o, isVisible: i, label: s, position: a = uP, style: l, triggerRect: u, ...c }, d) { let f = (n || t) != null,
        g = v.useRef(null),
        w = Wn(d, g),
        S = Ks(g, { observe: i }); return v.createElement(v.Fragment, null, v.createElement(r, { role: f ? void 0 : "tooltip", ...c, ref: w, "data-reach-tooltip": "", id: f ? void 0 : o, style: { ...l, ...aP(a, u, S) } }, s), f && v.createElement(Ry, { role: "tooltip", id: o }, n || t)) });
Ny.displayName = "TooltipContent";

function aP(e, t, n) { return n ? e(t, n) : { visibility: "hidden" } }
var lP = 8,
    uP = (e, t, n = lP) => { let { width: r, height: o } = qk(); if (!e || !t) return {}; let i = { top: e.top - t.height < 0, right: r < e.left + t.width, bottom: o < e.bottom + t.height + n, left: e.left - t.width < 0 },
            s = i.right && !i.left,
            a = i.bottom && !i.top; return { left: s ? `${e.right-t.width+window.pageXOffset}px` : `${e.left+window.pageXOffset}px`, top: a ? `${e.top-n-t.height+window.pageYOffset}px` : `${e.top+n+e.height+window.pageYOffset}px` } };

function cP({ disabled: e, isVisible: t, ref: n }) { v.useEffect(() => { if (!(typeof window < "u" && "PointerEvent" in window) || !e || !t) return; let r = fn(n.current);

        function o(i) { t && (i.target instanceof Element && i.target.closest("[data-reach-tooltip-trigger][data-state='tooltip-visible']") || rt({ type: "GLOBAL_MOUSE_MOVE" })) } return r.addEventListener("mousemove", o), () => { r.removeEventListener("mousemove", o) } }, [e, t, n]) }

function rt(e) { let { value: t, context: n, changed: r } = fP(Ge, e);
    r && (Ge = { value: t, context: n }, tP()) }

function fP(e, t) { let n = zu.states[e.value],
        r = n && n.on && n.on[t.type]; if (!r) return { ...e, changed: !1 };
    n && n.leave && n.leave(e.context, t); const { type: o, ...i } = t; let s = { ...Ge.context, ...i },
        a = typeof r == "string" ? r : r.target,
        l = zu.states[a]; return l && l.enter && l.enter(e.context, t), { value: a, context: s, changed: !0 } }

function Xp(e, t) { return Ge.context.id === e && (t ? Ge.value === "VISIBLE" : Ge.value === "VISIBLE" || Ge.value === "LEAVING_VISIBLE") }

function dP(e) { let t = {}; const n = {},
        r = {};

    function o(l = "default") { return n[l] = e(l).then(u => { delete n[l], t[l] = u }).catch(u => { r[l] = u }), n[l] }

    function i(l = "default") { t[l] !== void 0 || n[l] || o(l) }

    function s(l = "default") { if (t[l] !== void 0) return t[l]; throw r[l] ? r[l] : n[l] ? n[l] : o(l) }

    function a(l) { l ? delete t[l] : t = {} } return { preload: i, read: s, clear: a } }
const Ef = dP(() => ct(() => import("./index-34e1dd40.js"), [],
        import.meta.url)),
    pP = "_checkWrapper_1nrct_45",
    hP = "_active_1nrct_51",
    Zp = { checkWrapper: pP, active: hP };

function mP({ theme: e, dispatch: t }) { const { t: n } = Rr(), r = v.useMemo(() => { switch (e) {
            case "dark":
                return y.jsx(eh, {});
            case "auto":
                return y.jsx(vP, {});
            case "light":
                return y.jsx(gP, {});
            default:
                return console.assert(!1, "Unknown theme"), y.jsx(eh, {}) } }, [e]), o = v.useCallback(i => t(G2(i)), [t]); return y.jsxs(Cy, { children: [y.jsx(xf, { label: n("switch_theme"), "aria-label": "switch theme", children: y.jsx(_y, { children: r }) }), y.jsxs(Py, { children: [y.jsx(fl, { value: "auto", label: "Auto", active: e === "auto", onSelect: o }), y.jsx(fl, { value: "dark", label: "Dark", active: e === "dark", onSelect: o }), y.jsx(fl, { value: "light", label: "Light", active: e === "light", onSelect: o })] })] }) }

function fl(e) { const t = Mt(Zp.checkWrapper, {
        [Zp.active]: e.active }); return y.jsxs(ky, { onSelect: () => e.onSelect(e.value), children: [y.jsx("span", { className: t, children: y.jsx(MC, { size: 14 }) }), y.jsx("span", { children: e.label })] }) }

function eh() { const t = Ef.read().motion; return y.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: y.jsx(t.path, { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z", initial: { rotate: -30 }, animate: { rotate: 0 }, transition: { duration: .7 } }) }) }

function gP() { const t = Ef.read().motion; return y.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [y.jsx("circle", { cx: "12", cy: "12", r: "5" }), y.jsxs(t.g, { initial: { scale: .7 }, animate: { scale: 1 }, transition: { duration: .5 }, children: [y.jsx("line", { x1: "12", y1: "1", x2: "12", y2: "3" }), y.jsx("line", { x1: "12", y1: "21", x2: "12", y2: "23" }), y.jsx("line", { x1: "4.22", y1: "4.22", x2: "5.64", y2: "5.64" }), y.jsx("line", { x1: "18.36", y1: "18.36", x2: "19.78", y2: "19.78" }), y.jsx("line", { x1: "1", y1: "12", x2: "3", y2: "12" }), y.jsx("line", { x1: "21", y1: "12", x2: "23", y2: "12" }), y.jsx("line", { x1: "4.22", y1: "19.78", x2: "5.64", y2: "18.36" }), y.jsx("line", { x1: "18.36", y1: "5.64", x2: "19.78", y2: "4.22" })] })] }) }

function vP() { const t = Ef.read().motion; return y.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [y.jsx("circle", { cx: "12", cy: "12", r: "11" }), y.jsx("clipPath", { id: "cut-off-bottom", children: y.jsx(t.rect, { x: "12", y: "0", width: "12", height: "24", initial: { rotate: -30 }, animate: { rotate: 0 }, transition: { duration: .7 } }) }), y.jsx("circle", { cx: "12", cy: "12", r: "6", clipPath: "url(#cut-off-bottom)", fill: "currentColor" })] }) }
const yP = e => ({ theme: jv(e) }),
    Ty = _t(yP)(mP),
    Vu = 0;
class wP extends Error { constructor(t, n) { super(t), this.message = t, this.code = n } }
const Hu = {
    [Vu]: { message: "Browser not supported!", detail: 'This browser does not support "fetch", please choose another one.' }, default: { message: "Oops, something went wrong!" } };

function SP(e) { const { code: t } = e; return typeof t == "number" ? Hu[t] : Hu.default }
const xP = "_content_b98hm_1",
    EP = "_container_b98hm_16",
    CP = "_overlay_b98hm_22",
    _P = "_fixed_b98hm_26",
    Ai = { content: xP, container: EP, overlay: CP, fixed: _P },
    kP = "_overlay_1i06e_1",
    OP = "_content_1i06e_10",
    th = { overlay: kP, content: OP };

function PP({ isOpen: e, onRequestClose: t, className: n, overlayClassName: r, children: o, ...i }) { const s = Mt(n, th.content),
        a = Mt(r, th.overlay); return y.jsx(Bg, { isOpen: e, onRequestClose: t, className: s, overlayClassName: a, ...i, children: o }) }
const bP = v.memo(PP),
    { useCallback: RP, useEffect: LP } = dt;

function NP({ dispatch: e, apiConfig: t, modals: n }) { if (!window.fetch) { const { detail: o } = Hu[Vu]; throw new wP(o, Vu) } const r = RP(() => { e(A2("apiConfig")) }, [e]); return LP(() => { e(Zo(t)) }, [e, t]), y.jsxs(bP, { isOpen: n.apiConfig, className: Ai.content, overlayClassName: Ai.overlay, shouldCloseOnOverlayClick: !1, shouldCloseOnEsc: !1, onRequestClose: r, children: [y.jsx("div", { className: Ai.container, children: y.jsx(Xv, {}) }), y.jsx("div", { className: Ai.fixed, children: y.jsx(Ty, {}) })] }) }
const TP = e => ({ modals: e.modals, apiConfig: mn(e) }),
    IP = _t(TP)(NP),
    DP = { hasProcessPath: !1 },
    MP = v.createContext(DP),
    jP = "_root_4m2cd_1",
    AP = "_yacd_4m2cd_14",
    FP = "_link_4m2cd_23",
    dl = { root: jP, yacd: AP, link: FP };

function $P({ width: e = 24, height: t = 24 } = {}) { return y.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: e, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: y.jsx("path", { d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" }) }) }
const UP = "https://github.com/haishanh/yacd/issues";

function zP({ message: e, detail: t }) { return y.jsxs("div", { className: dl.root, children: [y.jsx("div", { className: dl.yacd, children: y.jsx(hf, { width: 150, height: 150 }) }), e ? y.jsx("h1", { children: e }) : null, t ? y.jsx("p", { children: t }) : null, y.jsx("p", { children: y.jsxs("a", { className: dl.link, href: UP, children: [y.jsx($P, { width: 16, height: 16 }), "haishanh/yacd"] }) })] }) } class BP extends v.Component { constructor() { super(...arguments);
        _f(this, "state", { error: null }) } static getDerivedStateFromError(n) { return { error: n } } render() { if (this.state.error) { const { message: n, detail: r } = SP(this.state.error); return y.jsx(zP, { message: n, detail: r }) } else return this.props.children } }
const WP = "_root_4oasi_1",
    VP = "_chart_4oasi_10",
    nh = { root: WP, chart: VP },
    Iy = "/memory",
    HP = new TextDecoder("utf-8"),
    Fi = 150,
    zo = { labels: Array(Fi).fill(0), inuse: Array(Fi), oslimit: Array(Fi), size: Fi, subscribers: [], appendData(e) { this.inuse.shift(), this.oslimit.shift(), this.labels.shift(); const t = Date.now();
            this.inuse.push(e.inuse), this.oslimit.push(e.oslimit), this.labels.push(t), this.subscribers.forEach(n => n(e)) }, subscribe(e) { return this.subscribers.push(e), () => { const t = this.subscribers.indexOf(e);
                this.subscribers.splice(t, 1) } } };
let lr = !1,
    $i = "";

function Qu(e) { zo.appendData(JSON.parse(e)) }

function Dy(e) { return e.read().then(({ done: t, value: n }) => { const r = HP.decode(n, { stream: !t });
        $i += r; const o = $i.split(`
`),
            i = o[o.length - 1]; for (let s = 0; s < o.length - 1; s++) Qu(o[s]); if (t) { Qu(i), $i = "", console.log("GET /memory streaming done"), lr = !1; return } else $i = i; return Dy(e) }) }
let Ui;

function QP(e) { if (lr || Ui === 1) return zo;
    Ui = 1; const t = rf(e, Iy),
        n = new WebSocket(t); return n.addEventListener("error", function(r) { Ui = 3 }), n.addEventListener("close", function(r) { Ui = 3, KP(e) }), n.addEventListener("message", function(r) { Qu(r.data) }), zo }

function KP(e) { if (lr) return zo;
    lr = !0; const { url: t, init: n } = ye(e); return fetch(t + Iy, n).then(r => { if (r.ok) { const o = r.body.getReader();
            Dy(o) } else lr = !1 }, r => { console.log("fetch /memory error", r), lr = !1 }), zo }
var qP = function e(t, n) { if (t === n) return !0; if (t && n && typeof t == "object" && typeof n == "object") { if (t.constructor !== n.constructor) return !1; var r, o, i; if (Array.isArray(t)) { if (r = t.length, r != n.length) return !1; for (o = r; o-- !== 0;)
                if (!e(t[o], n[o])) return !1; return !0 } if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags; if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf(); if (t.toString !== Object.prototype.toString) return t.toString() === n.toString(); if (i = Object.keys(t), r = i.length, r !== Object.keys(n).length) return !1; for (o = r; o-- !== 0;)
            if (!Object.prototype.hasOwnProperty.call(n, i[o])) return !1; for (o = r; o-- !== 0;) { var s = i[o]; if (!e(t[s], n[s])) return !1 } return !0 } return t !== t && n !== n };
const Cf = Gs(qP);

function rh(e, t, n, r = 0, o = !1) { for (const s of t)
        if (Cf(n, s.args)) { if (o) return; if (s.error) throw s.error; if (s.response) return s.response; throw s.promise } const i = { args: n, promise: e(...n).then(s => i.response = s ? ? !0).catch(s => i.error = s ? ? "unknown error").then(() => { r > 0 && setTimeout(() => { const s = t.indexOf(i);
                s !== -1 && t.splice(s, 1) }, r) }) }; if (t.push(i), !o) throw i.promise }

function GP(e, ...t) { if (t === void 0 || t.length === 0) e.splice(0, e.length);
    else { const n = e.find(r => Cf(t, r.args)); if (n) { const r = e.indexOf(n);
            r !== -1 && e.splice(r, 1) } } }

function My(e, t = 0) { const n = []; return { read: (...r) => rh(e, n, r, t), preload: (...r) => void rh(e, n, r, t, !0), clear: (...r) => GP(n, ...r), peek: (...r) => { var o; return (o = n.find(i => Cf(r, i.args))) == null ? void 0 : o.response } } }
const oh = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

function Rn(e) { if (e < 1e3) return e + " B"; const t = Math.min(Math.floor(Math.log10(e) / 3), oh.length - 1);
    e = Number((e / Math.pow(1e3, t)).toPrecision(3)); const n = oh[t]; return e + " " + n }
const YP = My(() => ct(() => import("./chart-lib-da3c73a9.js"), [],
        import.meta.url)),
    ih = { borderWidth: 1, pointRadius: 0, tension: .2, fill: !0 },
    JP = { responsive: !0, maintainAspectRatio: !0, plugins: { legend: { labels: { boxWidth: 20 } } }, scales: { x: { display: !1, type: "category" }, y: { type: "linear", display: !0, grid: { display: !0, color: "#555", drawTicks: !1 }, border: { display: !1, dash: [3, 6] }, ticks: { maxTicksLimit: 5, callback(e) { return Rn(e) + "/s " } } } } },
    sh = [{ down: { backgroundColor: "rgba(176, 209, 132, 0.8)", borderColor: "rgb(176, 209, 132)" }, up: { backgroundColor: "rgba(181, 220, 231, 0.8)", borderColor: "rgb(181, 220, 231)" } }, { up: { backgroundColor: "rgb(98, 190, 100)", borderColor: "rgb(78,146,79)" }, down: { backgroundColor: "rgb(160, 230, 66)", borderColor: "rgb(110, 156, 44)" } }, { up: { backgroundColor: "rgba(94, 175, 223, 0.3)", borderColor: "rgb(94, 175, 223)" }, down: { backgroundColor: "rgba(139, 227, 195, 0.3)", borderColor: "rgb(139, 227, 195)" } }, { up: { backgroundColor: "rgba(242, 174, 62, 0.3)", borderColor: "rgb(242, 174, 62)" }, down: { backgroundColor: "rgba(69, 154, 248, 0.3)", borderColor: "rgb(69, 154, 248)" } }],
    XP = My(() => ct(() => import("./chart-lib-da3c73a9.js"), [],
        import.meta.url)),
    ZP = { borderWidth: 1, pointRadius: 0, tension: .2, fill: !0 },
    jy = { responsive: !0, maintainAspectRatio: !0, plugins: { legend: { labels: { boxWidth: 20 } } }, scales: { x: { display: !1, type: "category" }, y: { type: "linear", display: !0, grid: { display: !0, color: "#555", drawTicks: !1 }, border: { dash: [3, 6] }, ticks: { maxTicksLimit: 3, callback(e) { return Rn(e) } } } } },
    eb = [{ inuse: { backgroundColor: "rgba(	116, 162, 249, 0.8)", borderColor: "rgb(116, 162, 249)" } }, { inuse: { backgroundColor: "rgb(98, 190, 100)", borderColor: "rgb(78,146,79)" } }, { inuse: { backgroundColor: "rgba(94, 175, 223, 0.3)", borderColor: "rgb(94, 175, 223)" } }, { inuse: { backgroundColor: "rgba(242, 174, 62, 0.3)", borderColor: "rgb(242, 174, 62)" } }],
    { useEffect: Ay } = Q;

function tb(e, t, n, r, o = {}) { Ay(() => { const i = document.getElementById(t).getContext("2d"),
            s = { ...JP, ...o },
            a = new e(i, { type: "line", data: n, options: s }),
            l = r && r.subscribe(() => a.update()); return () => { l && l(), a.destroy() } }, [e, t, n, r, o]) }

function nb(e, t, n, r, o = {}) { Ay(() => { const i = document.getElementById(t).getContext("2d"),
            s = { ...jy, ...o },
            a = new e(i, { type: "line", data: n, options: s }),
            l = r && r.subscribe(() => a.update()); return () => { l && l(), a.destroy() } }, [e, t, n, r, o]) }
const { useMemo: rb } = dt, ob = { position: "relative", maxWidth: 1e3, marginTop: "1em" }, ib = e => ({ apiConfig: mn(e), selectedChartStyleIndex: Av(e) }), sb = _t(ib)(ab);

function ab({ apiConfig: e, selectedChartStyleIndex: t }) { const n = XP.read(),
        r = QP(e),
        { t: o } = Rr(),
        i = rb(() => ({ labels: r.labels, datasets: [{ ...ZP, ...jy, ...eb[t].inuse, label: o("Memory"), data: r.inuse }] }), [r, t, o]); return nb(n.Chart, "MemoryChart", i, r), y.jsx("div", { style: ob, children: y.jsx("canvas", { id: "MemoryChart" }) }) }
const { useMemo: lb } = dt, ub = { position: "relative", maxWidth: 1e3 }, cb = e => ({ apiConfig: mn(e), selectedChartStyleIndex: Av(e) }), fb = _t(cb)(db);

function db({ apiConfig: e, selectedChartStyleIndex: t }) { const n = YP.read(),
        r = uf(e),
        { t: o } = Rr(),
        i = lb(() => ({ labels: r.labels, datasets: [{ ...ih, ...sh[t].up, label: o("Up"), data: r.up }, { ...ih, ...sh[t].down, label: o("Down"), data: r.down }] }), [r, t, o]); return tb(n.Chart, "trafficChart", i, r), y.jsx("div", { style: ub, children: y.jsx("canvas", { id: "trafficChart" }) }) }
const pb = "_TrafficNow_1mcbm_1",
    hb = "_sec_1mcbm_10",
    vn = { TrafficNow: pb, sec: hb },
    { useState: Fy, useEffect: $y, useCallback: mb } = dt,
    gb = e => ({ apiConfig: mn(e) }),
    vb = _t(gb)(yb);

function yb({ apiConfig: e }) { const { t } = Rr(), { upStr: n, downStr: r } = wb(e), { upTotal: o, dlTotal: i, connNumber: s, mTotal: a } = Sb(e); return y.jsxs("div", { className: vn.TrafficNow, children: [y.jsxs("div", { className: vn.sec, children: [y.jsx("div", { children: t("Upload") }), y.jsx("div", { children: n })] }), y.jsxs("div", { className: vn.sec, children: [y.jsx("div", { children: t("Download") }), y.jsx("div", { children: r })] }), y.jsxs("div", { className: vn.sec, children: [y.jsx("div", { children: t("Upload Total") }), y.jsx("div", { children: o })] }), y.jsxs("div", { className: vn.sec, children: [y.jsx("div", { children: t("Download Total") }), y.jsx("div", { children: i })] }), y.jsxs("div", { className: vn.sec, children: [y.jsx("div", { children: t("Active Connections") }), y.jsx("div", { children: s })] }), y.jsxs("div", { className: vn.sec, children: [y.jsx("div", { children: t("Memory Total") }), y.jsx("div", { children: a })] })] }) }

function wb(e) { const [t, n] = Fy({ upStr: "0 B/s", downStr: "0 B/s" }); return $y(() => uf(e).subscribe(r => n({ upStr: Rn(r.up) + "/s", downStr: Rn(r.down) + "/s" })), [e]), t }

function Sb(e) { const [t, n] = Fy({ upTotal: "0 B", dlTotal: "0 B", connNumber: 0, mTotal: "0 B" }), r = mb(({ downloadTotal: o, uploadTotal: i, connections: s, memory: a }) => { n({ upTotal: Rn(i), dlTotal: Rn(o), connNumber: s.length, mTotal: Rn(a) }) }, [n]); return $y(() => Mu(e, r), [e, r]), t }

function xb() { const { t: e } = Rr(); return y.jsxs("div", { children: [y.jsx(Sv, { title: e("Overview") }), y.jsxs("div", { className: nh.root, children: [y.jsx("div", { children: y.jsx(vb, {}) }), y.jsx("div", { className: nh.chart, children: y.jsxs(v.Suspense, { fallback: y.jsx(Uv, { height: "200px" }), children: [y.jsx(fb, {}), y.jsx(sb, {})] }) })] })] }) }
const Eb = "_lo_pmly2_1",
    Cb = { lo: Eb };

function _b() { return y.jsx("div", { className: Cb.lo, children: y.jsx(hf, { width: 280, height: 280, animate: !0, c0: "transparent", c1: "#646464" }) }) }
const kb = "_app_1s3k7_1",
    Ob = "_content_1s3k7_18",
    Uy = { app: kb, content: Ob };
var zy = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
    ah = Q.createContext && Q.createContext(zy),
    ln = globalThis && globalThis.__assign || function() { return ln = Object.assign || function(e) { for (var t, n = 1, r = arguments.length; n < r; n++) { t = arguments[n]; for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) } return e }, ln.apply(this, arguments) },
    Pb = globalThis && globalThis.__rest || function(e, t) { var n = {}; for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]); if (e != null && typeof Object.getOwnPropertySymbols == "function")
            for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]); return n };

function By(e) { return e && e.map(function(t, n) { return Q.createElement(t.tag, ln({ key: n }, t.attr), By(t.child)) }) }

function jr(e) { return function(t) { return Q.createElement(bb, ln({ attr: ln({}, e.attr) }, t), By(e.child)) } }

function bb(e) { var t = function(n) { var r = e.attr,
            o = e.size,
            i = e.title,
            s = Pb(e, ["attr", "size", "title"]),
            a = o || n.size || "1em",
            l; return n.className && (l = n.className), e.className && (l = (l ? l + " " : "") + e.className), Q.createElement("svg", ln({ stroke: "currentColor", fill: "currentColor", strokeWidth: "0" }, n.attr, r, s, { className: l, style: ln(ln({ color: e.color || n.color }, n.style), e.style), height: a, width: a, xmlns: "http://www.w3.org/2000/svg" }), i && Q.createElement("title", null, i), e.children) }; return ah !== void 0 ? Q.createElement(ah.Consumer, null, function(n) { return t(n) }) : t(zy) }
function Rb(e) {
    return jr({
        tag: "svg",
        attr: {
            stroke: "currentColor",
            fill: "currentColor",
            "stroke-width": "0",
            viewBox: "0 0 24 24",
            height: "1em",
            width: "1em",
            xmlns: "http://www.w3.org/2000/svg"
        },
        child: [
            { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
            { tag: "path", attr: { d: "M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z" } }
        ]
    })(e);
}

function Lb(e) {
    return jr({
        tag: "svg",
        attr: {
            stroke: "currentColor",
            fill: "none",
            "stroke-width": "2",
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            height: "1em",
            width: "1em",
            xmlns: "http://www.w3.org/2000/svg"
        },
        child: [
            {
                tag: "path",
                attr: {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                }
            }
        ]
    })(e);
}

function Nb(e) {
    return jr({
        tag: "svg",
        attr: {
            stroke: "currentColor",
            fill: "currentColor",
            "stroke-width": "0",
            viewBox: "0 0 24 24",
            height: "1em",
            width: "1em",
            xmlns: "http://www.w3.org/2000/svg"
        },
        child: [
            {
                tag: "path",
                attr: {
                    fill: "none",
                    d: "M0 0h24v24H0z"
                }
            },
            {
                tag: "path",
                attr: {
                    d: "m14 4 2.29 2.29-2.88 2.88 1.42 1.42 2.88-2.88L20 10V4zm-4 0H4v6l2.29-2.29 4.71 4.7V20h2v-8.41l-5.29-5.3z"
                }
            }
        ]
    })(e);
}

function Tb(e) {
    return jr({
        tag: "svg",
        attr: {
            stroke: "currentColor",
            fill: "none",
            "stroke-width": "2",
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            height: "1em",
            width: "1em",
            xmlns: "http://www.w3.org/2000/svg"
        },
        child: [
            {
                tag: "path",
                attr: {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                }
            }
        ]
    })(e);
}

function Ib(e) {
    return jr({
        tag: "svg",
        attr: {
            stroke: "currentColor",
            fill: "currentColor",
            "stroke-width": "0",
            viewBox: "0 0 24 24",
            height: "1em",
            width: "1em",
            xmlns: "http://www.w3.org/2000/svg"
        },
        child: [
            {
                tag: "path",
                attr: {
                    fill: "none",
                    d: "M0 0h24v24H0V0z"
                }
            },
            {
                tag: "path",
                attr: {
                    d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"
                }
            }
        ]
    })(e);
}

function Db(e) {
    return jr({
        tag: "svg",
        attr: {
            stroke: "currentColor",
            fill: "none",
            "stroke-width": "2",
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            height: "1em",
            width: "1em",
            xmlns: "http://www.w3.org/2000/svg"
        },
        child: [
            {
                tag: "path",
                attr: {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                }
            }
        ]
    })(e);
}

const Mb = "_root_7t4nx_1",
    jb = "_logo_clash_7t4nx_12",
    Ab = "_logo_meta_7t4nx_26",
    Fb = "_logo_singbox_7t4nx_40",
    $b = "_rows_7t4nx_54",
    Ub = "_row_7t4nx_54",
    zb = "_rowActive_7t4nx_101",
    Bb = "_label_7t4nx_113",
    Wb = "_footer_7t4nx_130",
    Vb = "_iconWrapper_7t4nx_141",
    yt = { root: Mb, logo_clash: jb, logo_meta: Ab, logo_singbox: Fb, rows: $b, row: Ub, rowActive: zb, label: Bb, footer: Wb, iconWrapper: Vb },
    Hb = { activity: Rb, globe: Nb, command: Ib, file: Lb, settings: Db, link: Tb },
    Qb = v.memo(function({ isActive: t, to: n, iconId: r, labelText: o }) { const i = Hb[r],
            s = Mt(yt.row, t ? yt.rowActive : null); return y.jsxs(gv, { to: n, className: s, children: [y.jsx(i, {}), y.jsx("div", { className: yt.label, children: o })] }) }),
    Kb = [{ to: "/", iconId: "activity", labelText: "Overview" }, { to: "/proxies", iconId: "globe", labelText: "Proxies" }, { to: "/rules", iconId: "command", labelText: "Rules" }, { to: "/connections", iconId: "link", labelText: "Conns" }, { to: "/configs", iconId: "settings", labelText: "Config" }, { to: "/logs", iconId: "file", labelText: "Logs" }],
    qb = e => ({ apiConfig: mn(e) }),
    Gb = _t(qb)(Yb);

function Yb(e) { const { t } = Rr(), n = Xo(), { data: r } = nv(["/version", e.apiConfig], () => wv("/version", e.apiConfig)); return y.jsxs("div", { className: yt.root, children: [y.jsx("div", { className: r.meta && r.premium ? yt.logo_singbox : r.meta ? yt.logo_meta : yt.logo_clash }), y.jsx("div", { className: yt.rows, children: Kb.map(({ to: o, iconId: i, labelText: s }) => y.jsx(Qb, { to: o, isActive: n.pathname === o, iconId: i, labelText: t(s) }, o)) }), y.jsxs("div", { className: yt.footer, children: [y.jsx(Ty, {}), y.jsx(xf, { label: t("about"), children: y.jsx(gv, { to: "/about", className: yt.iconWrapper, children: y.jsx(KC, { size: 20 }) }) })] })] }) }
const Jb = "_toggle_2bhaj_1",
    Xb = "_input_2bhaj_13",
    Zb = "_track_2bhaj_17",
    eR = "_toggle2_2bhaj_56",
    YR = { toggle: Jb, input: Xb, track: Zb, toggle2: eR },
    tR = "_input_1hkb4_1",
    JR = { input: tR },
    nR = "_animate_1w0e8_1",
    XR = { animate: nR, "zap-pulse": "_zap-pulse_1w0e8_1" },
    rR = "_ToggleSwitch_10mtp_1",
    oR = "_slider_10mtp_28",
    lh = { ToggleSwitch: rR, slider: oR };

function iR({ options: e, value: t, name: n, onChange: r }) { const o = v.useMemo(() => e.map(a => a.value).indexOf(t), [e, t]),
        i = v.useCallback(a => { const l = Math.floor(100 / e.length); if (a === e.length - 1) return 100 - e.length * l + l; if (a > -1) return l }, [e]),
        s = v.useMemo(() => ({ width: i(o) + "%", left: o * i(0) + "%" }), [o, i]); return y.jsxs("div", { className: lh.ToggleSwitch, children: [y.jsx("div", { className: lh.slider, style: s }), e.map((a, l) => { const u = `${n}-${a.label}`,
                c = l === 0 ? "" : "border-left"; return y.jsxs("label", { htmlFor: u, className: c, style: { width: i(l) + "%" }, children: [y.jsx("input", { id: u, name: n, type: "radio", value: a.value, checked: t === a.value, onChange: r }), y.jsx("div", { children: a.label })] }, u) })] }) } Q.memo(iR);
const { lazy: ci, Suspense: Wy } = dt, sR = ci(() => ct(() => import("./Connections-fda3825b.js"), ["./Connections-fda3825b.js", "./useRemainingViewPortHeight-8b1f394a.js", "./index-aa1d003b.js", "./chevron-down-a9aef5f3.js", "./Fab-3f2d2e5e.js", "./Fab-a434d836.css", "./play-27486ce9.js", "./Connections-01256d41.css"],
    import.meta.url)), aR = ci(() => ct(() => import("./Config-52ed9fd3.js"), ["./Config-52ed9fd3.js", "./logs-98ee20cb.js", "./Select-a5daab07.js", "./Select-3de40504.css", "./rotate-cw-fb2740ed.js", "./Config-9d448bc0.css"],
    import.meta.url)), lR = ci(() => ct(() => import("./Logs-33738723.js"), ["./Logs-33738723.js", "./index.esm-b85b2075.js", "./logs-98ee20cb.js", "./debounce-c1ba2006.js", "./useRemainingViewPortHeight-8b1f394a.js", "./Fab-3f2d2e5e.js", "./Fab-a434d836.css", "./play-27486ce9.js", "./Logs-5e5ee0ad.css"],
    import.meta.url)), uR = ci(() => ct(() => import("./Proxies-72d056fc.js"), ["./Proxies-72d056fc.js", "./chevron-down-a9aef5f3.js", "./Fab-3f2d2e5e.js", "./Fab-a434d836.css", "./TextFilter-e0d1fc98.js", "./rotate-cw-fb2740ed.js", "./debounce-c1ba2006.js", "./TextFilter-ced87fc6.css", "./index-aa1d003b.js", "./Select-a5daab07.js", "./Select-3de40504.css", "./Proxies-3c3b2af4.css"],
    import.meta.url)), cR = ci(() => ct(() => import("./Rules-6c51d67a.js"), ["./Rules-6c51d67a.js", "./index.esm-b85b2075.js", "./TextFilter-e0d1fc98.js", "./rotate-cw-fb2740ed.js", "./debounce-c1ba2006.js", "./TextFilter-ced87fc6.css", "./index-aa1d003b.js", "./Fab-3f2d2e5e.js", "./Fab-a434d836.css", "./useRemainingViewPortHeight-8b1f394a.js", "./Rules-e11cb70e.css"],
    import.meta.url)), fR = [{ path: "/", element: y.jsx(xb, {}) }, { path: "/connections", element: y.jsx(MP.Provider, { value: { hasProcessPath: !1 }, children: y.jsx(sR, {}) }) }, { path: "/configs", element: y.jsx(aR, {}) }, { path: "/logs", element: y.jsx(lR, {}) }, { path: "/proxies", element: y.jsx(uR, {}) }, { path: "/rules", element: y.jsx(cR, {}) }, { path: "/about", element: y.jsx(u_, {}) }, !1].filter(Boolean);

function dR() { return pv(fR) }

function pR() { return y.jsxs(y.Fragment, { children: [y.jsx(IP, {}), y.jsx(Gb, {}), y.jsx("div", { className: Uy.content, children: y.jsx(Wy, { fallback: y.jsx(_b, {}), children: y.jsx(dR, {}) }) })] }) }

function hR() { return pv([{ path: "/backend", element: y.jsx(Xv, {}) }, { path: "*", element: y.jsx(pR, {}) }]) }

function mR({ children: e }) { const [t] = jE(r_), n = Mt(Uy.app, { pureBlackDark: t }); return y.jsx("div", { className: n, children: e }) }
const gR = () => y.jsx(BP, { children: y.jsx(x2, { initialState: G_, actions: Y_, children: y.jsx(fE, { client: v_, children: y.jsx(RC, { children: y.jsxs(mR, { children: [y.jsx(m_, {}), y.jsx(Wy, { fallback: y.jsx(Uv, {}), children: y.jsx(hR, {}) })] }) }) }) }) }),
    vR = !!(window.location.hostname === "localhost" || window.location.hostname === "[::1]" || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

function yR(e) { if ("serviceWorker" in navigator) { const t = new URL("", window.location.href); if (t.origin !== window.location.origin) return;
        window.addEventListener("load", () => { const n = new URL("sw.js", t.href).href;
            vR ? (wR(n, e), navigator.serviceWorker.ready.then(() => { console.log("This web app is being served cache-first by a service worker") })) : Vy(n, e) }) } }

function Vy(e, t) { navigator.serviceWorker.register(e).then(n => { n.onupdatefound = () => { const r = n.installing;
            r != null && (r.onstatechange = () => { r.state === "installed" && (navigator.serviceWorker.controller ? (console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."), t && t.onUpdate && t.onUpdate(n)) : (console.log("Content is cached for offline use."), t && t.onSuccess && t.onSuccess(n))) }) } }).catch(n => { console.error("Error during service worker registration:", n) }) }

function wR(e, t) { fetch(e, { headers: { "Service-Worker": "script" } }).then(n => { const r = n.headers.get("content-type");
        n.status === 404 || r != null && r.indexOf("javascript") === -1 ? navigator.serviceWorker.ready.then(o => { o.unregister().then(() => { window.location.reload() }) }) : Vy(e, t) }).catch(() => { console.log("No internet connection found. App is running in offline mode.") }) } xR();
const Hy = document.getElementById("app"),
    SR = Lg(Hy);

function zi(e) { const t = document.createElement("link");
    t.href = e, t.rel = "preload", t.as = "font", t.crossOrigin = "", document.head.appendChild(t) }

function xR() { zi(S1), zi(x1), zi(E1), zi(Oh) } Bg.setAppElement(Hy);
SR.render(y.jsx(v.StrictMode, { children: y.jsx(gR, {}) }));
setTimeout(() => { ct(() => import("./index.modern-c58ff412.js"), [],
        import.meta.url).then(e => { e && e.polyfillCountryFlagEmojis("Twemoji Country Flags", Oh) }).catch(() => {}) }, 1);
yR();
console.log("Checkout the repo: https://github.com/haishanh/yacd");
console.log("Version:", "0.3.8");
console.log("Commit hash:", "444a7e4");
export { Qv as $, nv as A, Ik as B, Sv as C, r_ as D, wv as E, Av as F, Fv as G, O_ as H, YC as I, AR as J, FR as K, jR as L, MP as M, PR as N, MR as O, ee as P, kR as Q, Q as R, hf as S, ye as T, _R as U, XR as V, GR as W, KR as X, j_ as Y, sP as Z, Ly as _, Bg as a, ar as a0, HR as a1, qR as a2, xf as a3, TR as a4, IR as a5, DR as a6, BR as a7, WR as a8, QR as a9, VR as aa, Ef as ab, W2 as ac, Mr as ad, UR as ae, A_ as af, zR as ag, YR as ah, Go as ai, pu as aj, Hx as ak, ae as al, CR as am, cE as an, uE as ao, gE as ap, Gs as aq, vu as ar, ho as as, _t as b, Mt as c, $R as d, dt as e, Mu as f, mn as g, YP as h, ih as i, y as j, sh as k, tb as l, th as m, OR as n, Zo as o, Rn as p, Ap as q, v as r, JR as s, bR as t, Rr as u, S2 as v, RR as w, LR as x, NR as y, jE as z };

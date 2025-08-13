const Rd = function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        a(o);
    new MutationObserver(o => {
        for (const n of o)
            if (n.type === "childList")
                for (const i of n.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && a(i)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function l(o) {
        const n = {};
        return o.integrity && (n.integrity = o.integrity),
        o.referrerpolicy && (n.referrerPolicy = o.referrerpolicy),
        o.crossorigin === "use-credentials" ? n.credentials = "include" : o.crossorigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin",
        n
    }
    function a(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const n = l(o);
        fetch(o.href, n)
    }
};
Rd();
/**
* @vue/shared v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function Nn(e, t) {
    const l = new Set(e.split(","));
    return t ? a => l.has(a.toLowerCase()) : a => l.has(a)
}
const De = {}
  , jl = []
  , _t = () => {}
  , Dd = () => !1
  , To = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97)
  , Ln = e => e.startsWith("onUpdate:")
  , Ye = Object.assign
  , Hn = (e, t) => {
    const l = e.indexOf(t);
    l > -1 && e.splice(l, 1)
}
  , jd = Object.prototype.hasOwnProperty
  , Ee = (e, t) => jd.call(e, t)
  , we = Array.isArray
  , Gl = e => $a(e) === "[object Map]"
  , ea = e => $a(e) === "[object Set]"
  , Ai = e => $a(e) === "[object Date]"
  , Ve = e => typeof e == "function"
  , Ue = e => typeof e == "string"
  , Jt = e => typeof e == "symbol"
  , ze = e => e !== null && typeof e == "object"
  , Zr = e => (ze(e) || Ve(e)) && Ve(e.then) && Ve(e.catch)
  , Jr = Object.prototype.toString
  , $a = e => Jr.call(e)
  , Gd = e => $a(e).slice(8, -1)
  , Qr = e => $a(e) === "[object Object]"
  , Mn = e => Ue(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e
  , ca = Nn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
  , Vo = e => {
    const t = Object.create(null);
    return l => t[l] || (t[l] = e(l))
}
  , Wd = /-(\w)/g
  , Ht = Vo(e => e.replace(Wd, (t, l) => l ? l.toUpperCase() : ""))
  , qd = /\B([A-Z])/g
  , Bl = Vo(e => e.replace(qd, "-$1").toLowerCase())
  , $o = Vo(e => e.charAt(0).toUpperCase() + e.slice(1))
  , Yo = Vo(e => e ? `on${$o(e)}` : "")
  , Gt = (e, t) => !Object.is(e, t)
  , Ja = (e, ...t) => {
    for (let l = 0; l < e.length; l++)
        e[l](...t)
}
  , es = (e, t, l, a=!1) => {
    Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        writable: a,
        value: l
    })
}
  , ts = e => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t
}
  , Ud = e => {
    const t = Ue(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t
}
;
let Pi;
const zn = () => Pi || (Pi = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : typeof global != "undefined" ? global : {});
function Qe(e) {
    if (we(e)) {
        const t = {};
        for (let l = 0; l < e.length; l++) {
            const a = e[l]
              , o = Ue(a) ? Zd(a) : Qe(a);
            if (o)
                for (const n in o)
                    t[n] = o[n]
        }
        return t
    } else if (Ue(e) || ze(e))
        return e
}
const Kd = /;(?![^(]*\))/g
  , Yd = /:([^]+)/
  , Xd = /\/\*[^]*?\*\//g;
function Zd(e) {
    const t = {};
    return e.replace(Xd, "").split(Kd).forEach(l => {
        if (l) {
            const a = l.split(Yd);
            a.length > 1 && (t[a[0].trim()] = a[1].trim())
        }
    }
    ),
    t
}
function te(e) {
    let t = "";
    if (Ue(e))
        t = e;
    else if (we(e))
        for (let l = 0; l < e.length; l++) {
            const a = te(e[l]);
            a && (t += a + " ")
        }
    else if (ze(e))
        for (const l in e)
            e[l] && (t += l + " ");
    return t.trim()
}
function Ie(e) {
    if (!e)
        return null;
    let {class: t, style: l} = e;
    return t && !Ue(t) && (e.class = te(t)),
    l && (e.style = Qe(l)),
    e
}
const Jd = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
  , Qd = Nn(Jd);
function ls(e) {
    return !!e || e === ""
}
function ec(e, t) {
    if (e.length !== t.length)
        return !1;
    let l = !0;
    for (let a = 0; l && a < e.length; a++)
        l = Ol(e[a], t[a]);
    return l
}
function Ol(e, t) {
    if (e === t)
        return !0;
    let l = Ai(e)
      , a = Ai(t);
    if (l || a)
        return l && a ? e.getTime() === t.getTime() : !1;
    if (l = Jt(e),
    a = Jt(t),
    l || a)
        return e === t;
    if (l = we(e),
    a = we(t),
    l || a)
        return l && a ? ec(e, t) : !1;
    if (l = ze(e),
    a = ze(t),
    l || a) {
        if (!l || !a)
            return !1;
        const o = Object.keys(e).length
          , n = Object.keys(t).length;
        if (o !== n)
            return !1;
        for (const i in e) {
            const r = e.hasOwnProperty(i)
              , s = t.hasOwnProperty(i);
            if (r && !s || !r && s || !Ol(e[i], t[i]))
                return !1
        }
    }
    return String(e) === String(t)
}
function Rn(e, t) {
    return e.findIndex(l => Ol(l, t))
}
const fe = e => Ue(e) ? e : e == null ? "" : we(e) || ze(e) && (e.toString === Jr || !Ve(e.toString)) ? JSON.stringify(e, as, 2) : String(e)
  , as = (e, t) => t && t.__v_isRef ? as(e, t.value) : Gl(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce( (l, [a,o], n) => (l[Xo(a, n) + " =>"] = o,
    l), {})
} : ea(t) ? {
    [`Set(${t.size})`]: [...t.values()].map(l => Xo(l))
} : Jt(t) ? Xo(t) : ze(t) && !we(t) && !Qr(t) ? String(t) : t
  , Xo = (e, t="") => {
    var l;
    return Jt(e) ? `Symbol(${(l = e.description) != null ? l : t})` : e
}
;
/**
* @vue/reactivity v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let bt;
class tc {
    constructor(t=!1) {
        this.detached = t,
        this._active = !0,
        this.effects = [],
        this.cleanups = [],
        this.parent = bt,
        !t && bt && (this.index = (bt.scopes || (bt.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    run(t) {
        if (this._active) {
            const l = bt;
            try {
                return bt = this,
                t()
            } finally {
                bt = l
            }
        }
    }
    on() {
        bt = this
    }
    off() {
        bt = this.parent
    }
    stop(t) {
        if (this._active) {
            let l, a;
            for (l = 0,
            a = this.effects.length; l < a; l++)
                this.effects[l].stop();
            for (l = 0,
            a = this.cleanups.length; l < a; l++)
                this.cleanups[l]();
            if (this.scopes)
                for (l = 0,
                a = this.scopes.length; l < a; l++)
                    this.scopes[l].stop(!0);
            if (!this.detached && this.parent && !t) {
                const o = this.parent.scopes.pop();
                o && o !== this && (this.parent.scopes[this.index] = o,
                o.index = this.index)
            }
            this.parent = void 0,
            this._active = !1
        }
    }
}
function lc(e, t=bt) {
    t && t.active && t.effects.push(e)
}
function Dn() {
    return bt
}
function os(e) {
    bt && bt.cleanups.push(e)
}
let Al;
class jn {
    constructor(t, l, a, o) {
        this.fn = t,
        this.trigger = l,
        this.scheduler = a,
        this.active = !0,
        this.deps = [],
        this._dirtyLevel = 5,
        this._trackId = 0,
        this._runnings = 0,
        this._shouldSchedule = !1,
        this._depsLength = 0,
        lc(this, o)
    }
    get dirty() {
        if (this._dirtyLevel === 2)
            return !1;
        if (this._dirtyLevel === 3 || this._dirtyLevel === 4) {
            this._dirtyLevel = 1,
            _l();
            for (let t = 0; t < this._depsLength; t++) {
                const l = this.deps[t];
                if (l.computed) {
                    if (l.computed.effect._dirtyLevel === 2)
                        return !0;
                    if (ac(l.computed),
                    this._dirtyLevel >= 5)
                        break
                }
            }
            this._dirtyLevel === 1 && (this._dirtyLevel = 0),
            wl()
        }
        return this._dirtyLevel >= 5
    }
    set dirty(t) {
        this._dirtyLevel = t ? 5 : 0
    }
    run() {
        if (this._dirtyLevel = 0,
        !this.active)
            return this.fn();
        let t = pl
          , l = Al;
        try {
            return pl = !0,
            Al = this,
            this._runnings++,
            Oi(this),
            this.fn()
        } finally {
            Ei(this),
            this._runnings--,
            Al = l,
            pl = t
        }
    }
    stop() {
        this.active && (Oi(this),
        Ei(this),
        this.onStop && this.onStop(),
        this.active = !1)
    }
}
function ac(e) {
    return e.value
}
function Oi(e) {
    e._trackId++,
    e._depsLength = 0
}
function Ei(e) {
    if (e.deps.length > e._depsLength) {
        for (let t = e._depsLength; t < e.deps.length; t++)
            ns(e.deps[t], e);
        e.deps.length = e._depsLength
    }
}
function ns(e, t) {
    const l = e.get(t);
    l !== void 0 && t._trackId !== l && (e.delete(t),
    e.size === 0 && e.cleanup())
}
let pl = !0
  , fn = 0;
const is = [];
function _l() {
    is.push(pl),
    pl = !1
}
function wl() {
    const e = is.pop();
    pl = e === void 0 ? !0 : e
}
function Gn() {
    fn++
}
function Wn() {
    for (fn--; !fn && vn.length; )
        vn.shift()()
}
function rs(e, t, l) {
    if (t.get(e) !== e._trackId) {
        t.set(e, e._trackId);
        const a = e.deps[e._depsLength];
        a !== t ? (a && ns(a, e),
        e.deps[e._depsLength++] = t) : e._depsLength++
    }
}
const vn = [];
function ss(e, t, l) {
    Gn();
    for (const a of e.keys()) {
        if (!e.computed && a.computed && e.get(a) === a._trackId && a._runnings > 0) {
            a._dirtyLevel = 2;
            continue
        }
        let o;
        a._dirtyLevel < t && (o != null ? o : o = e.get(a) === a._trackId) && (a._shouldSchedule || (a._shouldSchedule = a._dirtyLevel === 0),
        a.computed && a._dirtyLevel === 2 && (a._shouldSchedule = !0),
        a._dirtyLevel = t),
        a._shouldSchedule && (o != null ? o : o = e.get(a) === a._trackId) && (a.trigger(),
        (!a._runnings || a.allowRecurse) && a._dirtyLevel !== 3 && (a._shouldSchedule = !1,
        a.scheduler && vn.push(a.scheduler)))
    }
    Wn()
}
const us = (e, t) => {
    const l = new Map;
    return l.cleanup = e,
    l.computed = t,
    l
}
  , ro = new WeakMap
  , Pl = Symbol("")
  , pn = Symbol("");
function vt(e, t, l) {
    if (pl && Al) {
        let a = ro.get(e);
        a || ro.set(e, a = new Map);
        let o = a.get(l);
        o || a.set(l, o = us( () => a.delete(l))),
        rs(Al, o)
    }
}
function Yt(e, t, l, a, o, n) {
    const i = ro.get(e);
    if (!i)
        return;
    let r = [];
    if (t === "clear")
        r = [...i.values()];
    else if (l === "length" && we(e)) {
        const s = Number(a);
        i.forEach( (d, c) => {
            (c === "length" || !Jt(c) && c >= s) && r.push(d)
        }
        )
    } else
        switch (l !== void 0 && r.push(i.get(l)),
        t) {
        case "add":
            we(e) ? Mn(l) && r.push(i.get("length")) : (r.push(i.get(Pl)),
            Gl(e) && r.push(i.get(pn)));
            break;
        case "delete":
            we(e) || (r.push(i.get(Pl)),
            Gl(e) && r.push(i.get(pn)));
            break;
        case "set":
            Gl(e) && r.push(i.get(Pl));
            break
        }
    Gn();
    for (const s of r)
        s && ss(s, 5);
    Wn()
}
function oc(e, t) {
    const l = ro.get(e);
    return l && l.get(t)
}
const nc = Nn("__proto__,__v_isRef,__isVue")
  , ds = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(Jt))
  , Fi = ic();
function ic() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
        e[t] = function(...l) {
            const a = Fe(this);
            for (let n = 0, i = this.length; n < i; n++)
                vt(a, "get", n + "");
            const o = a[t](...l);
            return o === -1 || o === !1 ? a[t](...l.map(Fe)) : o
        }
    }
    ),
    ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
        e[t] = function(...l) {
            _l(),
            Gn();
            const a = Fe(this)[t].apply(this, l);
            return Wn(),
            wl(),
            a
        }
    }
    ),
    e
}
function rc(e) {
    Jt(e) || (e = String(e));
    const t = Fe(this);
    return vt(t, "has", e),
    t.hasOwnProperty(e)
}
class cs {
    constructor(t=!1, l=!1) {
        this._isReadonly = t,
        this._isShallow = l
    }
    get(t, l, a) {
        const o = this._isReadonly
          , n = this._isShallow;
        if (l === "__v_isReactive")
            return !o;
        if (l === "__v_isReadonly")
            return o;
        if (l === "__v_isShallow")
            return n;
        if (l === "__v_raw")
            return a === (o ? n ? gs : hs : n ? ms : ps).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(a) ? t : void 0;
        const i = we(t);
        if (!o) {
            if (i && Ee(Fi, l))
                return Reflect.get(Fi, l, a);
            if (l === "hasOwnProperty")
                return rc
        }
        const r = Reflect.get(t, l, a);
        return (Jt(l) ? ds.has(l) : nc(l)) || (o || vt(t, "get", l),
        n) ? r : at(r) ? i && Mn(l) ? r : r.value : ze(r) ? o ? ct(r) : ba(r) : r
    }
}
class fs extends cs {
    constructor(t=!1) {
        super(!1, t)
    }
    set(t, l, a, o) {
        let n = t[l];
        if (!this._isShallow) {
            const s = Ba(n);
            if (!so(a) && !Ba(a) && (n = Fe(n),
            a = Fe(a)),
            !we(t) && at(n) && !at(a))
                return s ? !1 : (n.value = a,
                !0)
        }
        const i = we(t) && Mn(l) ? Number(l) < t.length : Ee(t, l)
          , r = Reflect.set(t, l, a, o);
        return t === Fe(o) && (i ? Gt(a, n) && Yt(t, "set", l, a) : Yt(t, "add", l, a)),
        r
    }
    deleteProperty(t, l) {
        const a = Ee(t, l);
        t[l];
        const o = Reflect.deleteProperty(t, l);
        return o && a && Yt(t, "delete", l, void 0),
        o
    }
    has(t, l) {
        const a = Reflect.has(t, l);
        return (!Jt(l) || !ds.has(l)) && vt(t, "has", l),
        a
    }
    ownKeys(t) {
        return vt(t, "iterate", we(t) ? "length" : Pl),
        Reflect.ownKeys(t)
    }
}
class vs extends cs {
    constructor(t=!1) {
        super(!0, t)
    }
    set(t, l) {
        return !0
    }
    deleteProperty(t, l) {
        return !0
    }
}
const sc = new fs
  , uc = new vs
  , dc = new fs(!0)
  , cc = new vs(!0)
  , qn = e => e
  , Ao = e => Reflect.getPrototypeOf(e);
function Ma(e, t, l=!1, a=!1) {
    e = e.__v_raw;
    const o = Fe(e)
      , n = Fe(t);
    l || (Gt(t, n) && vt(o, "get", t),
    vt(o, "get", n));
    const {has: i} = Ao(o)
      , r = a ? qn : l ? Un : _a;
    if (i.call(o, t))
        return r(e.get(t));
    if (i.call(o, n))
        return r(e.get(n));
    e !== o && e.get(t)
}
function za(e, t=!1) {
    const l = this.__v_raw
      , a = Fe(l)
      , o = Fe(e);
    return t || (Gt(e, o) && vt(a, "has", e),
    vt(a, "has", o)),
    e === o ? l.has(e) : l.has(e) || l.has(o)
}
function Ra(e, t=!1) {
    return e = e.__v_raw,
    !t && vt(Fe(e), "iterate", Pl),
    Reflect.get(e, "size", e)
}
function Ii(e) {
    e = Fe(e);
    const t = Fe(this);
    return Ao(t).has.call(t, e) || (t.add(e),
    Yt(t, "add", e, e)),
    this
}
function Ni(e, t) {
    t = Fe(t);
    const l = Fe(this)
      , {has: a, get: o} = Ao(l);
    let n = a.call(l, e);
    n || (e = Fe(e),
    n = a.call(l, e));
    const i = o.call(l, e);
    return l.set(e, t),
    n ? Gt(t, i) && Yt(l, "set", e, t) : Yt(l, "add", e, t),
    this
}
function Li(e) {
    const t = Fe(this)
      , {has: l, get: a} = Ao(t);
    let o = l.call(t, e);
    o || (e = Fe(e),
    o = l.call(t, e)),
    a && a.call(t, e);
    const n = t.delete(e);
    return o && Yt(t, "delete", e, void 0),
    n
}
function Hi() {
    const e = Fe(this)
      , t = e.size !== 0
      , l = e.clear();
    return t && Yt(e, "clear", void 0, void 0),
    l
}
function Da(e, t) {
    return function(a, o) {
        const n = this
          , i = n.__v_raw
          , r = Fe(i)
          , s = t ? qn : e ? Un : _a;
        return !e && vt(r, "iterate", Pl),
        i.forEach( (d, c) => a.call(o, s(d), s(c), n))
    }
}
function ja(e, t, l) {
    return function(...a) {
        const o = this.__v_raw
          , n = Fe(o)
          , i = Gl(n)
          , r = e === "entries" || e === Symbol.iterator && i
          , s = e === "keys" && i
          , d = o[e](...a)
          , c = l ? qn : t ? Un : _a;
        return !t && vt(n, "iterate", s ? pn : Pl),
        {
            next() {
                const {value: v, done: f} = d.next();
                return f ? {
                    value: v,
                    done: f
                } : {
                    value: r ? [c(v[0]), c(v[1])] : c(v),
                    done: f
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function rl(e) {
    return function(...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}
function fc() {
    const e = {
        get(n) {
            return Ma(this, n)
        },
        get size() {
            return Ra(this)
        },
        has: za,
        add: Ii,
        set: Ni,
        delete: Li,
        clear: Hi,
        forEach: Da(!1, !1)
    }
      , t = {
        get(n) {
            return Ma(this, n, !1, !0)
        },
        get size() {
            return Ra(this)
        },
        has: za,
        add: Ii,
        set: Ni,
        delete: Li,
        clear: Hi,
        forEach: Da(!1, !0)
    }
      , l = {
        get(n) {
            return Ma(this, n, !0)
        },
        get size() {
            return Ra(this, !0)
        },
        has(n) {
            return za.call(this, n, !0)
        },
        add: rl("add"),
        set: rl("set"),
        delete: rl("delete"),
        clear: rl("clear"),
        forEach: Da(!0, !1)
    }
      , a = {
        get(n) {
            return Ma(this, n, !0, !0)
        },
        get size() {
            return Ra(this, !0)
        },
        has(n) {
            return za.call(this, n, !0)
        },
        add: rl("add"),
        set: rl("set"),
        delete: rl("delete"),
        clear: rl("clear"),
        forEach: Da(!0, !0)
    };
    return ["keys", "values", "entries", Symbol.iterator].forEach(n => {
        e[n] = ja(n, !1, !1),
        l[n] = ja(n, !0, !1),
        t[n] = ja(n, !1, !0),
        a[n] = ja(n, !0, !0)
    }
    ),
    [e, l, t, a]
}
const [vc,pc,mc,hc] = fc();
function Po(e, t) {
    const l = t ? e ? hc : mc : e ? pc : vc;
    return (a, o, n) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? a : Reflect.get(Ee(l, o) && o in a ? l : a, o, n)
}
const gc = {
    get: Po(!1, !1)
}
  , yc = {
    get: Po(!1, !0)
}
  , bc = {
    get: Po(!0, !1)
}
  , Bc = {
    get: Po(!0, !0)
}
  , ps = new WeakMap
  , ms = new WeakMap
  , hs = new WeakMap
  , gs = new WeakMap;
function _c(e) {
    switch (e) {
    case "Object":
    case "Array":
        return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
        return 2;
    default:
        return 0
    }
}
function wc(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : _c(Gd(e))
}
function ba(e) {
    return Ba(e) ? e : Oo(e, !1, sc, gc, ps)
}
function xc(e) {
    return Oo(e, !1, dc, yc, ms)
}
function ct(e) {
    return Oo(e, !0, uc, bc, hs)
}
function Hl(e) {
    return Oo(e, !0, cc, Bc, gs)
}
function Oo(e, t, l, a, o) {
    if (!ze(e) || e.__v_raw && !(t && e.__v_isReactive))
        return e;
    const n = o.get(e);
    if (n)
        return n;
    const i = wc(e);
    if (i === 0)
        return e;
    const r = new Proxy(e,i === 2 ? a : l);
    return o.set(e, r),
    r
}
function fa(e) {
    return Ba(e) ? fa(e.__v_raw) : !!(e && e.__v_isReactive)
}
function Ba(e) {
    return !!(e && e.__v_isReadonly)
}
function so(e) {
    return !!(e && e.__v_isShallow)
}
function ys(e) {
    return e ? !!e.__v_raw : !1
}
function Fe(e) {
    const t = e && e.__v_raw;
    return t ? Fe(t) : e
}
function Cc(e) {
    return Object.isExtensible(e) && es(e, "__v_skip", !0),
    e
}
const _a = e => ze(e) ? ba(e) : e
  , Un = e => ze(e) ? ct(e) : e;
class bs {
    constructor(t, l, a, o) {
        this.getter = t,
        this._setter = l,
        this.dep = void 0,
        this.__v_isRef = !0,
        this.__v_isReadonly = !1,
        this.effect = new jn( () => t(this._value), () => va(this, this.effect._dirtyLevel === 3 ? 3 : 4)),
        this.effect.computed = this,
        this.effect.active = this._cacheable = !o,
        this.__v_isReadonly = a
    }
    get value() {
        const t = Fe(this);
        return (!t._cacheable || t.effect.dirty) && Gt(t._value, t._value = t.effect.run()) && va(t, 5),
        Kn(t),
        t.effect._dirtyLevel >= 2 && va(t, 3),
        t._value
    }
    set value(t) {
        this._setter(t)
    }
    get _dirty() {
        return this.effect.dirty
    }
    set _dirty(t) {
        this.effect.dirty = t
    }
}
function kc(e, t, l=!1) {
    let a, o;
    const n = Ve(e);
    return n ? (a = e,
    o = _t) : (a = e.get,
    o = e.set),
    new bs(a,o,n || !o,l)
}
function Kn(e) {
    var t;
    pl && Al && (e = Fe(e),
    rs(Al, (t = e.dep) != null ? t : e.dep = us( () => e.dep = void 0, e instanceof bs ? e : void 0)))
}
function va(e, t=5, l, a) {
    e = Fe(e);
    const o = e.dep;
    o && ss(o, t)
}
function at(e) {
    return !!(e && e.__v_isRef === !0)
}
function Y(e) {
    return Bs(e, !1)
}
function wa(e) {
    return Bs(e, !0)
}
function Bs(e, t) {
    return at(e) ? e : new Sc(e,t)
}
class Sc {
    constructor(t, l) {
        this.__v_isShallow = l,
        this.dep = void 0,
        this.__v_isRef = !0,
        this._rawValue = l ? t : Fe(t),
        this._value = l ? t : _a(t)
    }
    get value() {
        return Kn(this),
        this._value
    }
    set value(t) {
        const l = this.__v_isShallow || so(t) || Ba(t);
        t = l ? t : Fe(t),
        Gt(t, this._rawValue) && (this._rawValue,
        this._rawValue = t,
        this._value = l ? t : _a(t),
        va(this, 5))
    }
}
function u(e) {
    return at(e) ? e.value : e
}
function Ke(e) {
    return Ve(e) ? e() : u(e)
}
const Tc = {
    get: (e, t, l) => u(Reflect.get(e, t, l)),
    set: (e, t, l, a) => {
        const o = e[t];
        return at(o) && !at(l) ? (o.value = l,
        !0) : Reflect.set(e, t, l, a)
    }
};
function _s(e) {
    return fa(e) ? e : new Proxy(e,Tc)
}
class Vc {
    constructor(t) {
        this.dep = void 0,
        this.__v_isRef = !0;
        const {get: l, set: a} = t( () => Kn(this), () => va(this));
        this._get = l,
        this._set = a
    }
    get value() {
        return this._get()
    }
    set value(t) {
        this._set(t)
    }
}
function ws(e) {
    return new Vc(e)
}
class $c {
    constructor(t, l, a) {
        this._object = t,
        this._key = l,
        this._defaultValue = a,
        this.__v_isRef = !0
    }
    get value() {
        const t = this._object[this._key];
        return t === void 0 ? this._defaultValue : t
    }
    set value(t) {
        this._object[this._key] = t
    }
    get dep() {
        return oc(Fe(this._object), this._key)
    }
}
class Ac {
    constructor(t) {
        this._getter = t,
        this.__v_isRef = !0,
        this.__v_isReadonly = !0
    }
    get value() {
        return this._getter()
    }
}
function V(e, t, l) {
    return at(e) ? e : Ve(e) ? new Ac(e) : ze(e) && arguments.length > 1 ? Pc(e, t, l) : Y(e)
}
function Pc(e, t, l) {
    const a = e[t];
    return at(a) ? a : new $c(e,t,l)
}
/**
* @vue/runtime-core v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ml(e, t, l, a) {
    try {
        return a ? e(...a) : e()
    } catch (o) {
        Eo(o, t, l)
    }
}
function Vt(e, t, l, a) {
    if (Ve(e)) {
        const o = ml(e, t, l, a);
        return o && Zr(o) && o.catch(n => {
            Eo(n, t, l)
        }
        ),
        o
    }
    if (we(e)) {
        const o = [];
        for (let n = 0; n < e.length; n++)
            o.push(Vt(e[n], t, l, a));
        return o
    }
}
function Eo(e, t, l, a=!0) {
    const o = t ? t.vnode : null;
    if (t) {
        let n = t.parent;
        const i = t.proxy
          , r = `https://vuejs.org/error-reference/#runtime-${l}`;
        for (; n; ) {
            const d = n.ec;
            if (d) {
                for (let c = 0; c < d.length; c++)
                    if (d[c](e, i, r) === !1)
                        return
            }
            n = n.parent
        }
        const s = t.appContext.config.errorHandler;
        if (s) {
            _l(),
            ml(s, null, 10, [e, i, r]),
            wl();
            return
        }
    }
    Oc(e, l, o, a)
}
function Oc(e, t, l, a=!0) {
    console.error(e)
}
let xa = !1
  , mn = !1;
const nt = [];
let Dt = 0;
const Wl = [];
let dl = null
  , Sl = 0;
const xs = Promise.resolve();
let Yn = null;
function it(e) {
    const t = Yn || xs;
    return e ? t.then(this ? e.bind(this) : e) : t
}
function Ec(e) {
    let t = Dt + 1
      , l = nt.length;
    for (; t < l; ) {
        const a = t + l >>> 1
          , o = nt[a]
          , n = Ca(o);
        n < e || n === e && o.pre ? t = a + 1 : l = a
    }
    return t
}
function Xn(e) {
    (!nt.length || !nt.includes(e, xa && e.allowRecurse ? Dt + 1 : Dt)) && (e.id == null ? nt.push(e) : nt.splice(Ec(e.id), 0, e),
    Cs())
}
function Cs() {
    !xa && !mn && (mn = !0,
    Yn = xs.then(Ss))
}
function Fc(e) {
    const t = nt.indexOf(e);
    t > Dt && nt.splice(t, 1)
}
function Ic(e) {
    we(e) ? Wl.push(...e) : (!dl || !dl.includes(e, e.allowRecurse ? Sl + 1 : Sl)) && Wl.push(e),
    Cs()
}
function Mi(e, t, l=xa ? Dt + 1 : 0) {
    for (; l < nt.length; l++) {
        const a = nt[l];
        if (a && a.pre) {
            if (e && a.id !== e.uid)
                continue;
            nt.splice(l, 1),
            l--,
            a()
        }
    }
}
function ks(e) {
    if (Wl.length) {
        const t = [...new Set(Wl)].sort( (l, a) => Ca(l) - Ca(a));
        if (Wl.length = 0,
        dl) {
            dl.push(...t);
            return
        }
        for (dl = t,
        Sl = 0; Sl < dl.length; Sl++) {
            const l = dl[Sl];
            l.active !== !1 && l()
        }
        dl = null,
        Sl = 0
    }
}
const Ca = e => e.id == null ? 1 / 0 : e.id
  , Nc = (e, t) => {
    const l = Ca(e) - Ca(t);
    if (l === 0) {
        if (e.pre && !t.pre)
            return -1;
        if (t.pre && !e.pre)
            return 1
    }
    return l
}
;
function Ss(e) {
    mn = !1,
    xa = !0,
    nt.sort(Nc);
    const t = _t;
    try {
        for (Dt = 0; Dt < nt.length; Dt++) {
            const l = nt[Dt];
            l && l.active !== !1 && ml(l, null, 14)
        }
    } finally {
        Dt = 0,
        nt.length = 0,
        ks(),
        xa = !1,
        Yn = null,
        (nt.length || Wl.length) && Ss()
    }
}
function Lc(e, t, ...l) {
    if (e.isUnmounted)
        return;
    const a = e.vnode.props || De;
    let o = l;
    const n = t.startsWith("update:")
      , i = n && t.slice(7);
    if (i && i in a) {
        const c = `${i === "modelValue" ? "model" : i}Modifiers`
          , {number: v, trim: f} = a[c] || De;
        f && (o = l.map(p => Ue(p) ? p.trim() : p)),
        v && (o = l.map(ts))
    }
    let r, s = a[r = Yo(t)] || a[r = Yo(Ht(t))];
    !s && n && (s = a[r = Yo(Bl(t))]),
    s && Vt(s, e, 6, o);
    const d = a[r + "Once"];
    if (d) {
        if (!e.emitted)
            e.emitted = {};
        else if (e.emitted[r])
            return;
        e.emitted[r] = !0,
        Vt(d, e, 6, o)
    }
}
function Ts(e, t, l=!1) {
    const a = t.emitsCache
      , o = a.get(e);
    if (o !== void 0)
        return o;
    const n = e.emits;
    let i = {}
      , r = !1;
    if (!Ve(e)) {
        const s = d => {
            const c = Ts(d, t, !0);
            c && (r = !0,
            Ye(i, c))
        }
        ;
        !l && t.mixins.length && t.mixins.forEach(s),
        e.extends && s(e.extends),
        e.mixins && e.mixins.forEach(s)
    }
    return !n && !r ? (ze(e) && a.set(e, null),
    null) : (we(n) ? n.forEach(s => i[s] = null) : Ye(i, n),
    ze(e) && a.set(e, i),
    i)
}
function Fo(e, t) {
    return !e || !To(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""),
    Ee(e, t[0].toLowerCase() + t.slice(1)) || Ee(e, Bl(t)) || Ee(e, t))
}
let Je = null
  , Vs = null;
function uo(e) {
    const t = Je;
    return Je = e,
    Vs = e && e.type.__scopeId || null,
    t
}
function E(e, t=Je, l) {
    if (!t || e._n)
        return e;
    const a = (...o) => {
        a._d && Qi(-1);
        const n = uo(t);
        let i;
        try {
            i = e(...o)
        } finally {
            uo(n),
            a._d && Qi(1)
        }
        return i
    }
    ;
    return a._n = !0,
    a._c = !0,
    a._d = !0,
    a
}
function Zo(e) {
    const {type: t, vnode: l, proxy: a, withProxy: o, propsOptions: [n], slots: i, attrs: r, emit: s, render: d, renderCache: c, props: v, data: f, setupState: p, ctx: g, inheritAttrs: b} = e
      , m = uo(e);
    let h, B;
    try {
        if (l.shapeFlag & 4) {
            const x = o || a
              , C = x;
            h = Rt(d.call(C, x, c, v, p, f, g)),
            B = r
        } else {
            const x = t;
            h = Rt(x.length > 1 ? x(v, {
                attrs: r,
                slots: i,
                emit: s
            }) : x(v, null)),
            B = t.props ? r : Hc(r)
        }
    } catch (x) {
        ya.length = 0,
        Eo(x, e, 1),
        h = pe(dt)
    }
    let $ = h;
    if (B && b !== !1) {
        const x = Object.keys(B)
          , {shapeFlag: C} = $;
        x.length && C & 7 && (n && x.some(Ln) && (B = Mc(B, n)),
        $ = hl($, B, !1, !0))
    }
    return l.dirs && ($ = hl($, null, !1, !0),
    $.dirs = $.dirs ? $.dirs.concat(l.dirs) : l.dirs),
    l.transition && ($.transition = l.transition),
    h = $,
    uo(m),
    h
}
const Hc = e => {
    let t;
    for (const l in e)
        (l === "class" || l === "style" || To(l)) && ((t || (t = {}))[l] = e[l]);
    return t
}
  , Mc = (e, t) => {
    const l = {};
    for (const a in e)
        (!Ln(a) || !(a.slice(9)in t)) && (l[a] = e[a]);
    return l
}
;
function zc(e, t, l) {
    const {props: a, children: o, component: n} = e
      , {props: i, children: r, patchFlag: s} = t
      , d = n.emitsOptions;
    if (t.dirs || t.transition)
        return !0;
    if (l && s >= 0) {
        if (s & 1024)
            return !0;
        if (s & 16)
            return a ? zi(a, i, d) : !!i;
        if (s & 8) {
            const c = t.dynamicProps;
            for (let v = 0; v < c.length; v++) {
                const f = c[v];
                if (i[f] !== a[f] && !Fo(d, f))
                    return !0
            }
        }
    } else
        return (o || r) && (!r || !r.$stable) ? !0 : a === i ? !1 : a ? i ? zi(a, i, d) : !0 : !!i;
    return !1
}
function zi(e, t, l) {
    const a = Object.keys(t);
    if (a.length !== Object.keys(e).length)
        return !0;
    for (let o = 0; o < a.length; o++) {
        const n = a[o];
        if (t[n] !== e[n] && !Fo(l, n))
            return !0
    }
    return !1
}
function Rc({vnode: e, parent: t}, l) {
    for (; t; ) {
        const a = t.subTree;
        if (a.suspense && a.suspense.activeBranch === e && (a.el = e.el),
        a === e)
            (e = t.vnode).el = l,
            t = t.parent;
        else
            break
    }
}
const Zn = "components";
function Ml(e, t) {
    return As(Zn, e, !0, t) || e
}
const $s = Symbol.for("v-ndc");
function xe(e) {
    return Ue(e) ? As(Zn, e, !1) || e : e || $s
}
function As(e, t, l=!0, a=!1) {
    const o = Je || tt;
    if (o) {
        const n = o.type;
        if (e === Zn) {
            const r = If(n, !1);
            if (r && (r === t || r === Ht(t) || r === $o(Ht(t))))
                return n
        }
        const i = Ri(o[e] || n[e], t) || Ri(o.appContext[e], t);
        return !i && a ? n : i
    }
}
function Ri(e, t) {
    return e && (e[t] || e[Ht(t)] || e[$o(Ht(t))])
}
const Dc = e => e.__isSuspense;
function jc(e, t) {
    t && t.pendingBranch ? we(e) ? t.effects.push(...e) : t.effects.push(e) : Ic(e)
}
function Io(e, t, l=tt, a=!1) {
    if (l) {
        const o = l[e] || (l[e] = [])
          , n = t.__weh || (t.__weh = (...i) => {
            _l();
            const r = Ea(l)
              , s = Vt(t, l, e, i);
            return r(),
            wl(),
            s
        }
        );
        return a ? o.unshift(n) : o.push(n),
        n
    }
}
const tl = e => (t, l=tt) => {
    (!Mo || e === "sp") && Io(e, (...a) => t(...a), l)
}
  , Gc = tl("bm")
  , pt = tl("m")
  , Wc = tl("bu")
  , Ps = tl("u")
  , Aa = tl("bum")
  , Jn = tl("um")
  , qc = tl("sp")
  , Uc = tl("rtg")
  , Kc = tl("rtc");
function Yc(e, t=tt) {
    Io("ec", e, t)
}
function ll(e, t) {
    if (Je === null)
        return e;
    const l = zo(Je)
      , a = e.dirs || (e.dirs = []);
    for (let o = 0; o < t.length; o++) {
        let[n,i,r,s=De] = t[o];
        n && (Ve(n) && (n = {
            mounted: n,
            updated: n
        }),
        n.deep && vl(i),
        a.push({
            dir: n,
            instance: l,
            value: i,
            oldValue: void 0,
            arg: r,
            modifiers: s
        }))
    }
    return e
}
function xl(e, t, l, a) {
    const o = e.dirs
      , n = t && t.dirs;
    for (let i = 0; i < o.length; i++) {
        const r = o[i];
        n && (r.oldValue = n[i].value);
        let s = r.dir[a];
        s && (_l(),
        Vt(s, l, 8, [e.el, r, e, t]),
        wl())
    }
}
function Ge(e, t, l, a) {
    let o;
    const n = l && l[a];
    if (we(e) || Ue(e)) {
        o = new Array(e.length);
        for (let i = 0, r = e.length; i < r; i++)
            o[i] = t(e[i], i, void 0, n && n[i])
    } else if (typeof e == "number") {
        o = new Array(e);
        for (let i = 0; i < e; i++)
            o[i] = t(i + 1, i, void 0, n && n[i])
    } else if (ze(e))
        if (e[Symbol.iterator])
            o = Array.from(e, (i, r) => t(i, r, void 0, n && n[r]));
        else {
            const i = Object.keys(e);
            o = new Array(i.length);
            for (let r = 0, s = i.length; r < s; r++) {
                const d = i[r];
                o[r] = t(e[d], d, r, n && n[r])
            }
        }
    else
        o = [];
    return l && (l[a] = o),
    o
}
function Qn(e, t) {
    for (let l = 0; l < t.length; l++) {
        const a = t[l];
        if (we(a))
            for (let o = 0; o < a.length; o++)
                e[a[o].name] = a[o].fn;
        else
            a && (e[a.name] = a.key ? (...o) => {
                const n = a.fn(...o);
                return n && (n.key = a.key),
                n
            }
            : a.fn)
    }
    return e
}
/*! #__NO_SIDE_EFFECTS__ */
function Q(e, t) {
    return Ve(e) ? ( () => Ye({
        name: e.name
    }, t, {
        setup: e
    }))() : e
}
const pa = e => !!e.type.__asyncLoader;
function A(e, t, l={}, a, o) {
    if (Je.isCE || Je.parent && pa(Je.parent) && Je.parent.isCE)
        return t !== "default" && (l.name = t),
        pe("slot", l, a && a());
    let n = e[t];
    n && n._c && (n._d = !1),
    y();
    const i = n && Os(n(l))
      , r = M(Be, {
        key: l.key || i && i.key || `_${t}`
    }, i || (a ? a() : []), i && e._ === 1 ? 64 : -2);
    return !o && r.scopeId && (r.slotScopeIds = [r.scopeId + "-s"]),
    n && n._c && (n._d = !0),
    r
}
function Os(e) {
    return e.some(t => vo(t) ? !(t.type === dt || t.type === Be && !Os(t.children)) : !0) ? e : null
}
const hn = e => e ? tu(e) ? zo(e) : hn(e.parent) : null
  , ma = Ye(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => hn(e.parent),
    $root: e => hn(e.root),
    $emit: e => e.emit,
    $options: e => ei(e),
    $forceUpdate: e => e.f || (e.f = () => {
        e.effect.dirty = !0,
        Xn(e.update)
    }
    ),
    $nextTick: e => e.n || (e.n = it.bind(e.proxy)),
    $watch: e => yf.bind(e)
})
  , Jo = (e, t) => e !== De && !e.__isScriptSetup && Ee(e, t)
  , Xc = {
    get({_: e}, t) {
        if (t === "__v_skip")
            return !0;
        const {ctx: l, setupState: a, data: o, props: n, accessCache: i, type: r, appContext: s} = e;
        let d;
        if (t[0] !== "$") {
            const p = i[t];
            if (p !== void 0)
                switch (p) {
                case 1:
                    return a[t];
                case 2:
                    return o[t];
                case 4:
                    return l[t];
                case 3:
                    return n[t]
                }
            else {
                if (Jo(a, t))
                    return i[t] = 1,
                    a[t];
                if (o !== De && Ee(o, t))
                    return i[t] = 2,
                    o[t];
                if ((d = e.propsOptions[0]) && Ee(d, t))
                    return i[t] = 3,
                    n[t];
                if (l !== De && Ee(l, t))
                    return i[t] = 4,
                    l[t];
                gn && (i[t] = 0)
            }
        }
        const c = ma[t];
        let v, f;
        if (c)
            return t === "$attrs" && vt(e.attrs, "get", ""),
            c(e);
        if ((v = r.__cssModules) && (v = v[t]))
            return v;
        if (l !== De && Ee(l, t))
            return i[t] = 4,
            l[t];
        if (f = s.config.globalProperties,
        Ee(f, t))
            return f[t]
    },
    set({_: e}, t, l) {
        const {data: a, setupState: o, ctx: n} = e;
        return Jo(o, t) ? (o[t] = l,
        !0) : a !== De && Ee(a, t) ? (a[t] = l,
        !0) : Ee(e.props, t) || t[0] === "$" && t.slice(1)in e ? !1 : (n[t] = l,
        !0)
    },
    has({_: {data: e, setupState: t, accessCache: l, ctx: a, appContext: o, propsOptions: n}}, i) {
        let r;
        return !!l[i] || e !== De && Ee(e, i) || Jo(t, i) || (r = n[0]) && Ee(r, i) || Ee(a, i) || Ee(ma, i) || Ee(o.config.globalProperties, i)
    },
    defineProperty(e, t, l) {
        return l.get != null ? e._.accessCache[t] = 0 : Ee(l, "value") && this.set(e, t, l.value, null),
        Reflect.defineProperty(e, t, l)
    }
};
function mt() {
    return Es().slots
}
function Pa() {
    return Es().attrs
}
function Es() {
    const e = al();
    return e.setupContext || (e.setupContext = au(e))
}
function co(e) {
    return we(e) ? e.reduce( (t, l) => (t[l] = null,
    t), {}) : e
}
function Ae(e, t) {
    return !e || !t ? e || t : we(e) && we(t) ? e.concat(t) : Ye({}, co(e), co(t))
}
let gn = !0;
function Zc(e) {
    const t = ei(e)
      , l = e.proxy
      , a = e.ctx;
    gn = !1,
    t.beforeCreate && Di(t.beforeCreate, e, "bc");
    const {data: o, computed: n, methods: i, watch: r, provide: s, inject: d, created: c, beforeMount: v, mounted: f, beforeUpdate: p, updated: g, activated: b, deactivated: m, beforeDestroy: h, beforeUnmount: B, destroyed: $, unmounted: x, render: C, renderTracked: T, renderTriggered: F, errorCaptured: j, serverPrefetch: L, expose: Z, inheritAttrs: de, components: R, directives: ee, filters: k} = t;
    if (d && Jc(d, a, null),
    i)
        for (const D in i) {
            const J = i[D];
            Ve(J) && (a[D] = J.bind(l))
        }
    if (o) {
        const D = o.call(l, l);
        ze(D) && (e.data = ba(D))
    }
    if (gn = !0,
    n)
        for (const D in n) {
            const J = n[D]
              , q = Ve(J) ? J.bind(l, l) : Ve(J.get) ? J.get.bind(l, l) : _t
              , G = !Ve(J) && Ve(J.set) ? J.set.bind(l) : _t
              , z = w({
                get: q,
                set: G
            });
            Object.defineProperty(a, D, {
                enumerable: !0,
                configurable: !0,
                get: () => z.value,
                set: I => z.value = I
            })
        }
    if (r)
        for (const D in r)
            Fs(r[D], a, l, D);
    if (s) {
        const D = Ve(s) ? s.call(l) : s;
        Reflect.ownKeys(D).forEach(J => {
            ht(J, D[J])
        }
        )
    }
    c && Di(c, e, "c");
    function N(D, J) {
        we(J) ? J.forEach(q => D(q.bind(l))) : J && D(J.bind(l))
    }
    if (N(Gc, v),
    N(pt, f),
    N(Wc, p),
    N(Ps, g),
    N(qs, b),
    N(bf, m),
    N(Yc, j),
    N(Kc, T),
    N(Uc, F),
    N(Aa, B),
    N(Jn, x),
    N(qc, L),
    we(Z))
        if (Z.length) {
            const D = e.exposed || (e.exposed = {});
            Z.forEach(J => {
                Object.defineProperty(D, J, {
                    get: () => l[J],
                    set: q => l[J] = q
                })
            }
            )
        } else
            e.exposed || (e.exposed = {});
    C && e.render === _t && (e.render = C),
    de != null && (e.inheritAttrs = de),
    R && (e.components = R),
    ee && (e.directives = ee)
}
function Jc(e, t, l=_t) {
    we(e) && (e = yn(e));
    for (const a in e) {
        const o = e[a];
        let n;
        ze(o) ? "default"in o ? n = qe(o.from || a, o.default, !0) : n = qe(o.from || a) : n = qe(o),
        at(n) ? Object.defineProperty(t, a, {
            enumerable: !0,
            configurable: !0,
            get: () => n.value,
            set: i => n.value = i
        }) : t[a] = n
    }
}
function Di(e, t, l) {
    Vt(we(e) ? e.map(a => a.bind(t.proxy)) : e.bind(t.proxy), t, l)
}
function Fs(e, t, l, a) {
    const o = a.includes(".") ? Ws(l, a) : () => l[a];
    if (Ue(e)) {
        const n = t[e];
        Ve(n) && ke(o, n)
    } else if (Ve(e))
        ke(o, e.bind(l));
    else if (ze(e))
        if (we(e))
            e.forEach(n => Fs(n, t, l, a));
        else {
            const n = Ve(e.handler) ? e.handler.bind(l) : t[e.handler];
            Ve(n) && ke(o, n, e)
        }
}
function ei(e) {
    const t = e.type
      , {mixins: l, extends: a} = t
      , {mixins: o, optionsCache: n, config: {optionMergeStrategies: i}} = e.appContext
      , r = n.get(t);
    let s;
    return r ? s = r : !o.length && !l && !a ? s = t : (s = {},
    o.length && o.forEach(d => fo(s, d, i, !0)),
    fo(s, t, i)),
    ze(t) && n.set(t, s),
    s
}
function fo(e, t, l, a=!1) {
    const {mixins: o, extends: n} = t;
    n && fo(e, n, l, !0),
    o && o.forEach(i => fo(e, i, l, !0));
    for (const i in t)
        if (!(a && i === "expose")) {
            const r = Qc[i] || l && l[i];
            e[i] = r ? r(e[i], t[i]) : t[i]
        }
    return e
}
const Qc = {
    data: ji,
    props: Gi,
    emits: Gi,
    methods: sa,
    computed: sa,
    beforeCreate: rt,
    created: rt,
    beforeMount: rt,
    mounted: rt,
    beforeUpdate: rt,
    updated: rt,
    beforeDestroy: rt,
    beforeUnmount: rt,
    destroyed: rt,
    unmounted: rt,
    activated: rt,
    deactivated: rt,
    errorCaptured: rt,
    serverPrefetch: rt,
    components: sa,
    directives: sa,
    watch: tf,
    provide: ji,
    inject: ef
};
function ji(e, t) {
    return t ? e ? function() {
        return Ye(Ve(e) ? e.call(this, this) : e, Ve(t) ? t.call(this, this) : t)
    }
    : t : e
}
function ef(e, t) {
    return sa(yn(e), yn(t))
}
function yn(e) {
    if (we(e)) {
        const t = {};
        for (let l = 0; l < e.length; l++)
            t[e[l]] = e[l];
        return t
    }
    return e
}
function rt(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}
function sa(e, t) {
    return e ? Ye(Object.create(null), e, t) : t
}
function Gi(e, t) {
    return e ? we(e) && we(t) ? [...new Set([...e, ...t])] : Ye(Object.create(null), co(e), co(t != null ? t : {})) : t
}
function tf(e, t) {
    if (!e)
        return t;
    if (!t)
        return e;
    const l = Ye(Object.create(null), e);
    for (const a in t)
        l[a] = rt(e[a], t[a]);
    return l
}
function Is() {
    return {
        app: null,
        config: {
            isNativeTag: Dd,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let lf = 0;
function af(e, t) {
    return function(a, o=null) {
        Ve(a) || (a = Ye({}, a)),
        o != null && !ze(o) && (o = null);
        const n = Is()
          , i = new WeakSet;
        let r = !1;
        const s = n.app = {
            _uid: lf++,
            _component: a,
            _props: o,
            _container: null,
            _context: n,
            _instance: null,
            version: Lf,
            get config() {
                return n.config
            },
            set config(d) {},
            use(d, ...c) {
                return i.has(d) || (d && Ve(d.install) ? (i.add(d),
                d.install(s, ...c)) : Ve(d) && (i.add(d),
                d(s, ...c))),
                s
            },
            mixin(d) {
                return n.mixins.includes(d) || n.mixins.push(d),
                s
            },
            component(d, c) {
                return c ? (n.components[d] = c,
                s) : n.components[d]
            },
            directive(d, c) {
                return c ? (n.directives[d] = c,
                s) : n.directives[d]
            },
            mount(d, c, v) {
                if (!r) {
                    const f = pe(a, o);
                    return f.appContext = n,
                    v === !0 ? v = "svg" : v === !1 && (v = void 0),
                    c && t ? t(f, d) : e(f, d, v),
                    r = !0,
                    s._container = d,
                    d.__vue_app__ = s,
                    zo(f.component)
                }
            },
            unmount() {
                r && (e(null, s._container),
                delete s._container.__vue_app__)
            },
            provide(d, c) {
                return n.provides[d] = c,
                s
            },
            runWithContext(d) {
                const c = ha;
                ha = s;
                try {
                    return d()
                } finally {
                    ha = c
                }
            }
        };
        return s
    }
}
let ha = null;
function ht(e, t) {
    if (tt) {
        let l = tt.provides;
        const a = tt.parent && tt.parent.provides;
        a === l && (l = tt.provides = Object.create(a)),
        l[e] = t
    }
}
function qe(e, t, l=!1) {
    const a = tt || Je;
    if (a || ha) {
        const o = a ? a.parent == null ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : ha._context.provides;
        if (o && e in o)
            return o[e];
        if (arguments.length > 1)
            return l && Ve(t) ? t.call(a && a.proxy) : t
    }
}
const Ns = {}
  , Ls = () => Object.create(Ns)
  , Hs = e => Object.getPrototypeOf(e) === Ns;
function of(e, t, l, a=!1) {
    const o = {}
      , n = Ls();
    e.propsDefaults = Object.create(null),
    Ms(e, t, o, n);
    for (const i in e.propsOptions[0])
        i in o || (o[i] = void 0);
    l ? e.props = a ? o : xc(o) : e.type.props ? e.props = o : e.props = n,
    e.attrs = n
}
function nf(e, t, l, a) {
    const {props: o, attrs: n, vnode: {patchFlag: i}} = e
      , r = Fe(o)
      , [s] = e.propsOptions;
    let d = !1;
    if ((a || i > 0) && !(i & 16)) {
        if (i & 8) {
            const c = e.vnode.dynamicProps;
            for (let v = 0; v < c.length; v++) {
                let f = c[v];
                if (Fo(e.emitsOptions, f))
                    continue;
                const p = t[f];
                if (s)
                    if (Ee(n, f))
                        p !== n[f] && (n[f] = p,
                        d = !0);
                    else {
                        const g = Ht(f);
                        o[g] = bn(s, r, g, p, e, !1)
                    }
                else
                    p !== n[f] && (n[f] = p,
                    d = !0)
            }
        }
    } else {
        Ms(e, t, o, n) && (d = !0);
        let c;
        for (const v in r)
            (!t || !Ee(t, v) && ((c = Bl(v)) === v || !Ee(t, c))) && (s ? l && (l[v] !== void 0 || l[c] !== void 0) && (o[v] = bn(s, r, v, void 0, e, !0)) : delete o[v]);
        if (n !== r)
            for (const v in n)
                (!t || !Ee(t, v) && !0) && (delete n[v],
                d = !0)
    }
    d && Yt(e.attrs, "set", "")
}
function Ms(e, t, l, a) {
    const [o,n] = e.propsOptions;
    let i = !1, r;
    if (t)
        for (let s in t) {
            if (ca(s))
                continue;
            const d = t[s];
            let c;
            o && Ee(o, c = Ht(s)) ? !n || !n.includes(c) ? l[c] = d : (r || (r = {}))[c] = d : Fo(e.emitsOptions, s) || (!(s in a) || d !== a[s]) && (a[s] = d,
            i = !0)
        }
    if (n) {
        const s = Fe(l)
          , d = r || De;
        for (let c = 0; c < n.length; c++) {
            const v = n[c];
            l[v] = bn(o, s, v, d[v], e, !Ee(d, v))
        }
    }
    return i
}
function bn(e, t, l, a, o, n) {
    const i = e[l];
    if (i != null) {
        const r = Ee(i, "default");
        if (r && a === void 0) {
            const s = i.default;
            if (i.type !== Function && !i.skipFactory && Ve(s)) {
                const {propsDefaults: d} = o;
                if (l in d)
                    a = d[l];
                else {
                    const c = Ea(o);
                    a = d[l] = s.call(null, t),
                    c()
                }
            } else
                a = s
        }
        i[0] && (n && !r ? a = !1 : i[1] && (a === "" || a === Bl(l)) && (a = !0))
    }
    return a
}
function zs(e, t, l=!1) {
    const a = t.propsCache
      , o = a.get(e);
    if (o)
        return o;
    const n = e.props
      , i = {}
      , r = [];
    let s = !1;
    if (!Ve(e)) {
        const c = v => {
            s = !0;
            const [f,p] = zs(v, t, !0);
            Ye(i, f),
            p && r.push(...p)
        }
        ;
        !l && t.mixins.length && t.mixins.forEach(c),
        e.extends && c(e.extends),
        e.mixins && e.mixins.forEach(c)
    }
    if (!n && !s)
        return ze(e) && a.set(e, jl),
        jl;
    if (we(n))
        for (let c = 0; c < n.length; c++) {
            const v = Ht(n[c]);
            Wi(v) && (i[v] = De)
        }
    else if (n)
        for (const c in n) {
            const v = Ht(c);
            if (Wi(v)) {
                const f = n[c]
                  , p = i[v] = we(f) || Ve(f) ? {
                    type: f
                } : Ye({}, f);
                if (p) {
                    const g = Ki(Boolean, p.type)
                      , b = Ki(String, p.type);
                    p[0] = g > -1,
                    p[1] = b < 0 || g < b,
                    (g > -1 || Ee(p, "default")) && r.push(v)
                }
            }
        }
    const d = [i, r];
    return ze(e) && a.set(e, d),
    d
}
function Wi(e) {
    return e[0] !== "$" && !ca(e)
}
function qi(e) {
    return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || ""
}
function Ui(e, t) {
    return qi(e) === qi(t)
}
function Ki(e, t) {
    return we(t) ? t.findIndex(l => Ui(l, e)) : Ve(t) && Ui(t, e) ? 0 : -1
}
const Rs = e => e[0] === "_" || e === "$stable"
  , ti = e => we(e) ? e.map(Rt) : [Rt(e)]
  , rf = (e, t, l) => {
    if (t._n)
        return t;
    const a = E( (...o) => ti(t(...o)), l);
    return a._c = !1,
    a
}
  , Ds = (e, t, l) => {
    const a = e._ctx;
    for (const o in e) {
        if (Rs(o))
            continue;
        const n = e[o];
        if (Ve(n))
            t[o] = rf(o, n, a);
        else if (n != null) {
            const i = ti(n);
            t[o] = () => i
        }
    }
}
  , js = (e, t) => {
    const l = ti(t);
    e.slots.default = () => l
}
  , sf = (e, t) => {
    const l = e.slots = Ls();
    if (e.vnode.shapeFlag & 32) {
        const a = t._;
        a ? (Ye(l, t),
        es(l, "_", a, !0)) : Ds(t, l)
    } else
        t && js(e, t)
}
  , uf = (e, t, l) => {
    const {vnode: a, slots: o} = e;
    let n = !0
      , i = De;
    if (a.shapeFlag & 32) {
        const r = t._;
        r ? l && r === 1 ? n = !1 : (Ye(o, t),
        !l && r === 1 && delete o._) : (n = !t.$stable,
        Ds(t, o)),
        i = t
    } else
        t && (js(e, t),
        i = {
            default: 1
        });
    if (n)
        for (const r in o)
            !Rs(r) && i[r] == null && delete o[r]
}
;
function Bn(e, t, l, a, o=!1) {
    if (we(e)) {
        e.forEach( (f, p) => Bn(f, t && (we(t) ? t[p] : t), l, a, o));
        return
    }
    if (pa(a) && !o)
        return;
    const n = a.shapeFlag & 4 ? zo(a.component) : a.el
      , i = o ? null : n
      , {i: r, r: s} = e
      , d = t && t.r
      , c = r.refs === De ? r.refs = {} : r.refs
      , v = r.setupState;
    if (d != null && d !== s && (Ue(d) ? (c[d] = null,
    Ee(v, d) && (v[d] = null)) : at(d) && (d.value = null)),
    Ve(s))
        ml(s, r, 12, [i, c]);
    else {
        const f = Ue(s)
          , p = at(s);
        if (f || p) {
            const g = () => {
                if (e.f) {
                    const b = f ? Ee(v, s) ? v[s] : c[s] : s.value;
                    o ? we(b) && Hn(b, n) : we(b) ? b.includes(n) || b.push(n) : f ? (c[s] = [n],
                    Ee(v, s) && (v[s] = c[s])) : (s.value = [n],
                    e.k && (c[e.k] = s.value))
                } else
                    f ? (c[s] = i,
                    Ee(v, s) && (v[s] = i)) : p && (s.value = i,
                    e.k && (c[e.k] = i))
            }
            ;
            i ? (g.id = -1,
            st(g, l)) : g()
        }
    }
}
function df() {
    typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ != "boolean" && (zn().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = !1)
}
const st = jc;
function cf(e) {
    return ff(e)
}
function ff(e, t) {
    df();
    const l = zn();
    l.__VUE__ = !0;
    const {insert: a, remove: o, patchProp: n, createElement: i, createText: r, createComment: s, setText: d, setElementText: c, parentNode: v, nextSibling: f, setScopeId: p=_t, insertStaticContent: g} = e
      , b = (_, S, H, K=null, U=null, ie=null, ve=void 0, re=null, ce=!!S.dynamicChildren) => {
        if (_ === S)
            return;
        _ && !Tl(_, S) && (K = be(_),
        I(_, U, ie, !0),
        _ = null),
        S.patchFlag === -2 && (ce = !1,
        S.dynamicChildren = null);
        const {type: ae, ref: ge, shapeFlag: Se} = S;
        switch (ae) {
        case Ho:
            m(_, S, H, K);
            break;
        case dt:
            h(_, S, H, K);
            break;
        case Qa:
            _ == null && B(S, H, K, ve);
            break;
        case Be:
            R(_, S, H, K, U, ie, ve, re, ce);
            break;
        default:
            Se & 1 ? C(_, S, H, K, U, ie, ve, re, ce) : Se & 6 ? ee(_, S, H, K, U, ie, ve, re, ce) : (Se & 64 || Se & 128) && ae.process(_, S, H, K, U, ie, ve, re, ce, W)
        }
        ge != null && U && Bn(ge, _ && _.ref, ie, S || _, !S)
    }
      , m = (_, S, H, K) => {
        if (_ == null)
            a(S.el = r(S.children), H, K);
        else {
            const U = S.el = _.el;
            S.children !== _.children && d(U, S.children)
        }
    }
      , h = (_, S, H, K) => {
        _ == null ? a(S.el = s(S.children || ""), H, K) : S.el = _.el
    }
      , B = (_, S, H, K) => {
        [_.el,_.anchor] = g(_.children, S, H, K, _.el, _.anchor)
    }
      , $ = ({el: _, anchor: S}, H, K) => {
        let U;
        for (; _ && _ !== S; )
            U = f(_),
            a(_, H, K),
            _ = U;
        a(S, H, K)
    }
      , x = ({el: _, anchor: S}) => {
        let H;
        for (; _ && _ !== S; )
            H = f(_),
            o(_),
            _ = H;
        o(S)
    }
      , C = (_, S, H, K, U, ie, ve, re, ce) => {
        S.type === "svg" ? ve = "svg" : S.type === "math" && (ve = "mathml"),
        _ == null ? T(S, H, K, U, ie, ve, re, ce) : L(_, S, U, ie, ve, re, ce)
    }
      , T = (_, S, H, K, U, ie, ve, re) => {
        let ce, ae;
        const {props: ge, shapeFlag: Se, transition: Ce, dirs: $e} = _;
        if (ce = _.el = i(_.type, ie, ge && ge.is, ge),
        Se & 8 ? c(ce, _.children) : Se & 16 && j(_.children, ce, null, K, U, Qo(_, ie), ve, re),
        $e && xl(_, null, K, "created"),
        F(ce, _, _.scopeId, ve, K),
        ge) {
            for (const We in ge)
                We !== "value" && !ca(We) && n(ce, We, null, ge[We], ie, _.children, K, U, he);
            "value"in ge && n(ce, "value", null, ge.value, ie),
            (ae = ge.onVnodeBeforeMount) && zt(ae, K, _)
        }
        $e && xl(_, null, K, "beforeMount");
        const Pe = vf(U, Ce);
        Pe && Ce.beforeEnter(ce),
        a(ce, S, H),
        ((ae = ge && ge.onVnodeMounted) || Pe || $e) && st( () => {
            ae && zt(ae, K, _),
            Pe && Ce.enter(ce),
            $e && xl(_, null, K, "mounted")
        }
        , U)
    }
      , F = (_, S, H, K, U) => {
        if (H && p(_, H),
        K)
            for (let ie = 0; ie < K.length; ie++)
                p(_, K[ie]);
        if (U) {
            let ie = U.subTree;
            if (S === ie) {
                const ve = U.vnode;
                F(_, ve, ve.scopeId, ve.slotScopeIds, U.parent)
            }
        }
    }
      , j = (_, S, H, K, U, ie, ve, re, ce=0) => {
        for (let ae = ce; ae < _.length; ae++) {
            const ge = _[ae] = re ? fl(_[ae]) : Rt(_[ae]);
            b(null, ge, S, H, K, U, ie, ve, re)
        }
    }
      , L = (_, S, H, K, U, ie, ve) => {
        const re = S.el = _.el;
        let {patchFlag: ce, dynamicChildren: ae, dirs: ge} = S;
        ce |= _.patchFlag & 16;
        const Se = _.props || De
          , Ce = S.props || De;
        let $e;
        if (H && Cl(H, !1),
        ($e = Ce.onVnodeBeforeUpdate) && zt($e, H, S, _),
        ge && xl(S, _, H, "beforeUpdate"),
        H && Cl(H, !0),
        ae ? Z(_.dynamicChildren, ae, re, H, K, Qo(S, U), ie) : ve || J(_, S, re, null, H, K, Qo(S, U), ie, !1),
        ce > 0) {
            if (ce & 16)
                de(re, S, Se, Ce, H, K, U);
            else if (ce & 2 && Se.class !== Ce.class && n(re, "class", null, Ce.class, U),
            ce & 4 && n(re, "style", Se.style, Ce.style, U),
            ce & 8) {
                const Pe = S.dynamicProps;
                for (let We = 0; We < Pe.length; We++) {
                    const Le = Pe[We]
                      , Ze = Se[Le]
                      , Et = Ce[Le];
                    (Et !== Ze || Le === "value") && n(re, Le, Ze, Et, U, _.children, H, K, he)
                }
            }
            ce & 1 && _.children !== S.children && c(re, S.children)
        } else
            !ve && ae == null && de(re, S, Se, Ce, H, K, U);
        (($e = Ce.onVnodeUpdated) || ge) && st( () => {
            $e && zt($e, H, S, _),
            ge && xl(S, _, H, "updated")
        }
        , K)
    }
      , Z = (_, S, H, K, U, ie, ve) => {
        for (let re = 0; re < S.length; re++) {
            const ce = _[re]
              , ae = S[re]
              , ge = ce.el && (ce.type === Be || !Tl(ce, ae) || ce.shapeFlag & 70) ? v(ce.el) : H;
            b(ce, ae, ge, null, K, U, ie, ve, !0)
        }
    }
      , de = (_, S, H, K, U, ie, ve) => {
        if (H !== K) {
            if (H !== De)
                for (const re in H)
                    !ca(re) && !(re in K) && n(_, re, H[re], null, ve, S.children, U, ie, he);
            for (const re in K) {
                if (ca(re))
                    continue;
                const ce = K[re]
                  , ae = H[re];
                ce !== ae && re !== "value" && n(_, re, ae, ce, ve, S.children, U, ie, he)
            }
            "value"in K && n(_, "value", H.value, K.value, ve)
        }
    }
      , R = (_, S, H, K, U, ie, ve, re, ce) => {
        const ae = S.el = _ ? _.el : r("")
          , ge = S.anchor = _ ? _.anchor : r("");
        let {patchFlag: Se, dynamicChildren: Ce, slotScopeIds: $e} = S;
        $e && (re = re ? re.concat($e) : $e),
        _ == null ? (a(ae, H, K),
        a(ge, H, K),
        j(S.children || [], H, ge, U, ie, ve, re, ce)) : Se > 0 && Se & 64 && Ce && _.dynamicChildren ? (Z(_.dynamicChildren, Ce, H, U, ie, ve, re),
        (S.key != null || U && S === U.subTree) && li(_, S, !0)) : J(_, S, H, ge, U, ie, ve, re, ce)
    }
      , ee = (_, S, H, K, U, ie, ve, re, ce) => {
        S.slotScopeIds = re,
        _ == null ? S.shapeFlag & 512 ? U.ctx.activate(S, H, K, ve, ce) : k(S, H, K, U, ie, ve, ce) : P(_, S, ce)
    }
      , k = (_, S, H, K, U, ie, ve) => {
        const re = _.component = Pf(_, K, U);
        if (Lo(_) && (re.ctx.renderer = W),
        Of(re),
        re.asyncDep) {
            if (U && U.registerDep(re, N, ve),
            !_.el) {
                const ce = re.subTree = pe(dt);
                h(null, ce, S, H)
            }
        } else
            N(re, _, S, H, U, ie, ve)
    }
      , P = (_, S, H) => {
        const K = S.component = _.component;
        if (zc(_, S, H))
            if (K.asyncDep && !K.asyncResolved) {
                D(K, S, H);
                return
            } else
                K.next = S,
                Fc(K.update),
                K.effect.dirty = !0,
                K.update();
        else
            S.el = _.el,
            K.vnode = S
    }
      , N = (_, S, H, K, U, ie, ve) => {
        const re = () => {
            if (_.isMounted) {
                let {next: ge, bu: Se, u: Ce, parent: $e, vnode: Pe} = _;
                {
                    const Ll = Gs(_);
                    if (Ll) {
                        ge && (ge.el = Pe.el,
                        D(_, ge, ve)),
                        Ll.asyncDep.then( () => {
                            _.isUnmounted || re()
                        }
                        );
                        return
                    }
                }
                let We = ge, Le;
                Cl(_, !1),
                ge ? (ge.el = Pe.el,
                D(_, ge, ve)) : ge = Pe,
                Se && Ja(Se),
                (Le = ge.props && ge.props.onVnodeBeforeUpdate) && zt(Le, $e, ge, Pe),
                Cl(_, !0);
                const Ze = Zo(_)
                  , Et = _.subTree;
                _.subTree = Ze,
                b(Et, Ze, v(Et.el), be(Et), _, U, ie),
                ge.el = Ze.el,
                We === null && Rc(_, Ze.el),
                Ce && st(Ce, U),
                (Le = ge.props && ge.props.onVnodeUpdated) && st( () => zt(Le, $e, ge, Pe), U)
            } else {
                let ge;
                const {el: Se, props: Ce} = S
                  , {bm: $e, m: Pe, parent: We} = _
                  , Le = pa(S);
                if (Cl(_, !1),
                $e && Ja($e),
                !Le && (ge = Ce && Ce.onVnodeBeforeMount) && zt(ge, We, S),
                Cl(_, !0),
                Se && Re) {
                    const Ze = () => {
                        _.subTree = Zo(_),
                        Re(Se, _.subTree, _, U, null)
                    }
                    ;
                    Le ? S.type.__asyncLoader().then( () => !_.isUnmounted && Ze()) : Ze()
                } else {
                    const Ze = _.subTree = Zo(_);
                    b(null, Ze, H, K, _, U, ie),
                    S.el = Ze.el
                }
                if (Pe && st(Pe, U),
                !Le && (ge = Ce && Ce.onVnodeMounted)) {
                    const Ze = S;
                    st( () => zt(ge, We, Ze), U)
                }
                (S.shapeFlag & 256 || We && pa(We.vnode) && We.vnode.shapeFlag & 256) && _.a && st(_.a, U),
                _.isMounted = !0,
                S = H = K = null
            }
        }
          , ce = _.effect = new jn(re,_t, () => Xn(ae),_.scope)
          , ae = _.update = () => {
            ce.dirty && ce.run()
        }
        ;
        ae.id = _.uid,
        Cl(_, !0),
        ae()
    }
      , D = (_, S, H) => {
        S.component = _;
        const K = _.vnode.props;
        _.vnode = S,
        _.next = null,
        nf(_, S.props, K, H),
        uf(_, S.children, H),
        _l(),
        Mi(_),
        wl()
    }
      , J = (_, S, H, K, U, ie, ve, re, ce=!1) => {
        const ae = _ && _.children
          , ge = _ ? _.shapeFlag : 0
          , Se = S.children
          , {patchFlag: Ce, shapeFlag: $e} = S;
        if (Ce > 0) {
            if (Ce & 128) {
                G(ae, Se, H, K, U, ie, ve, re, ce);
                return
            } else if (Ce & 256) {
                q(ae, Se, H, K, U, ie, ve, re, ce);
                return
            }
        }
        $e & 8 ? (ge & 16 && he(ae, U, ie),
        Se !== ae && c(H, Se)) : ge & 16 ? $e & 16 ? G(ae, Se, H, K, U, ie, ve, re, ce) : he(ae, U, ie, !0) : (ge & 8 && c(H, ""),
        $e & 16 && j(Se, H, K, U, ie, ve, re, ce))
    }
      , q = (_, S, H, K, U, ie, ve, re, ce) => {
        _ = _ || jl,
        S = S || jl;
        const ae = _.length
          , ge = S.length
          , Se = Math.min(ae, ge);
        let Ce;
        for (Ce = 0; Ce < Se; Ce++) {
            const $e = S[Ce] = ce ? fl(S[Ce]) : Rt(S[Ce]);
            b(_[Ce], $e, H, null, U, ie, ve, re, ce)
        }
        ae > ge ? he(_, U, ie, !0, !1, Se) : j(S, H, K, U, ie, ve, re, ce, Se)
    }
      , G = (_, S, H, K, U, ie, ve, re, ce) => {
        let ae = 0;
        const ge = S.length;
        let Se = _.length - 1
          , Ce = ge - 1;
        for (; ae <= Se && ae <= Ce; ) {
            const $e = _[ae]
              , Pe = S[ae] = ce ? fl(S[ae]) : Rt(S[ae]);
            if (Tl($e, Pe))
                b($e, Pe, H, null, U, ie, ve, re, ce);
            else
                break;
            ae++
        }
        for (; ae <= Se && ae <= Ce; ) {
            const $e = _[Se]
              , Pe = S[Ce] = ce ? fl(S[Ce]) : Rt(S[Ce]);
            if (Tl($e, Pe))
                b($e, Pe, H, null, U, ie, ve, re, ce);
            else
                break;
            Se--,
            Ce--
        }
        if (ae > Se) {
            if (ae <= Ce) {
                const $e = Ce + 1
                  , Pe = $e < ge ? S[$e].el : K;
                for (; ae <= Ce; )
                    b(null, S[ae] = ce ? fl(S[ae]) : Rt(S[ae]), H, Pe, U, ie, ve, re, ce),
                    ae++
            }
        } else if (ae > Ce)
            for (; ae <= Se; )
                I(_[ae], U, ie, !0),
                ae++;
        else {
            const $e = ae
              , Pe = ae
              , We = new Map;
            for (ae = Pe; ae <= Ce; ae++) {
                const gt = S[ae] = ce ? fl(S[ae]) : Rt(S[ae]);
                gt.key != null && We.set(gt.key, ae)
            }
            let Le, Ze = 0;
            const Et = Ce - Pe + 1;
            let Ll = !1
              , Ti = 0;
            const oa = new Array(Et);
            for (ae = 0; ae < Et; ae++)
                oa[ae] = 0;
            for (ae = $e; ae <= Se; ae++) {
                const gt = _[ae];
                if (Ze >= Et) {
                    I(gt, U, ie, !0);
                    continue
                }
                let Mt;
                if (gt.key != null)
                    Mt = We.get(gt.key);
                else
                    for (Le = Pe; Le <= Ce; Le++)
                        if (oa[Le - Pe] === 0 && Tl(gt, S[Le])) {
                            Mt = Le;
                            break
                        }
                Mt === void 0 ? I(gt, U, ie, !0) : (oa[Mt - Pe] = ae + 1,
                Mt >= Ti ? Ti = Mt : Ll = !0,
                b(gt, S[Mt], H, null, U, ie, ve, re, ce),
                Ze++)
            }
            const Vi = Ll ? pf(oa) : jl;
            for (Le = Vi.length - 1,
            ae = Et - 1; ae >= 0; ae--) {
                const gt = Pe + ae
                  , Mt = S[gt]
                  , $i = gt + 1 < ge ? S[gt + 1].el : K;
                oa[ae] === 0 ? b(null, Mt, H, $i, U, ie, ve, re, ce) : Ll && (Le < 0 || ae !== Vi[Le] ? z(Mt, H, $i, 2) : Le--)
            }
        }
    }
      , z = (_, S, H, K, U=null) => {
        const {el: ie, type: ve, transition: re, children: ce, shapeFlag: ae} = _;
        if (ae & 6) {
            z(_.component.subTree, S, H, K);
            return
        }
        if (ae & 128) {
            _.suspense.move(S, H, K);
            return
        }
        if (ae & 64) {
            ve.move(_, S, H, W);
            return
        }
        if (ve === Be) {
            a(ie, S, H);
            for (let Se = 0; Se < ce.length; Se++)
                z(ce[Se], S, H, K);
            a(_.anchor, S, H);
            return
        }
        if (ve === Qa) {
            $(_, S, H);
            return
        }
        if (K !== 2 && ae & 1 && re)
            if (K === 0)
                re.beforeEnter(ie),
                a(ie, S, H),
                st( () => re.enter(ie), U);
            else {
                const {leave: Se, delayLeave: Ce, afterLeave: $e} = re
                  , Pe = () => a(ie, S, H)
                  , We = () => {
                    Se(ie, () => {
                        Pe(),
                        $e && $e()
                    }
                    )
                }
                ;
                Ce ? Ce(ie, Pe, We) : We()
            }
        else
            a(ie, S, H)
    }
      , I = (_, S, H, K=!1, U=!1) => {
        const {type: ie, props: ve, ref: re, children: ce, dynamicChildren: ae, shapeFlag: ge, patchFlag: Se, dirs: Ce, memoIndex: $e} = _;
        if (re != null && Bn(re, null, H, _, !0),
        $e != null && (S.renderCache[$e] = void 0),
        ge & 256) {
            S.ctx.deactivate(_);
            return
        }
        const Pe = ge & 1 && Ce
          , We = !pa(_);
        let Le;
        if (We && (Le = ve && ve.onVnodeBeforeUnmount) && zt(Le, S, _),
        ge & 6)
            _e(_.component, H, K);
        else {
            if (ge & 128) {
                _.suspense.unmount(H, K);
                return
            }
            Pe && xl(_, null, S, "beforeUnmount"),
            ge & 64 ? _.type.remove(_, S, H, U, W, K) : ae && (ie !== Be || Se > 0 && Se & 64) ? he(ae, S, H, !1, !0) : (ie === Be && Se & 384 || !U && ge & 16) && he(ce, S, H),
            K && X(_)
        }
        (We && (Le = ve && ve.onVnodeUnmounted) || Pe) && st( () => {
            Le && zt(Le, S, _),
            Pe && xl(_, null, S, "unmounted")
        }
        , H)
    }
      , X = _ => {
        const {type: S, el: H, anchor: K, transition: U} = _;
        if (S === Be) {
            le(H, K);
            return
        }
        if (S === Qa) {
            x(_);
            return
        }
        const ie = () => {
            o(H),
            U && !U.persisted && U.afterLeave && U.afterLeave()
        }
        ;
        if (_.shapeFlag & 1 && U && !U.persisted) {
            const {leave: ve, delayLeave: re} = U
              , ce = () => ve(H, ie);
            re ? re(_.el, ie, ce) : ce()
        } else
            ie()
    }
      , le = (_, S) => {
        let H;
        for (; _ !== S; )
            H = f(_),
            o(_),
            _ = H;
        o(S)
    }
      , _e = (_, S, H) => {
        const {bum: K, scope: U, update: ie, subTree: ve, um: re, m: ce, a: ae} = _;
        Yi(ce),
        Yi(ae),
        K && Ja(K),
        U.stop(),
        ie && (ie.active = !1,
        I(ve, _, S, H)),
        re && st(re, S),
        st( () => {
            _.isUnmounted = !0
        }
        , S),
        S && S.pendingBranch && !S.isUnmounted && _.asyncDep && !_.asyncResolved && _.suspenseId === S.pendingId && (S.deps--,
        S.deps === 0 && S.resolve())
    }
      , he = (_, S, H, K=!1, U=!1, ie=0) => {
        for (let ve = ie; ve < _.length; ve++)
            I(_[ve], S, H, K, U)
    }
      , be = _ => _.shapeFlag & 6 ? be(_.component.subTree) : _.shapeFlag & 128 ? _.suspense.next() : f(_.anchor || _.el);
    let He = !1;
    const Te = (_, S, H) => {
        _ == null ? S._vnode && I(S._vnode, null, null, !0) : b(S._vnode || null, _, S, null, null, null, H),
        He || (He = !0,
        Mi(),
        ks(),
        He = !1),
        S._vnode = _
    }
      , W = {
        p: b,
        um: I,
        m: z,
        r: X,
        mt: k,
        mc: j,
        pc: J,
        pbc: Z,
        n: be,
        o: e
    };
    let se, Re;
    return t && ([se,Re] = t(W)),
    {
        render: Te,
        hydrate: se,
        createApp: af(Te, se)
    }
}
function Qo({type: e, props: t}, l) {
    return l === "svg" && e === "foreignObject" || l === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : l
}
function Cl({effect: e, update: t}, l) {
    e.allowRecurse = t.allowRecurse = l
}
function vf(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}
function li(e, t, l=!1) {
    const a = e.children
      , o = t.children;
    if (we(a) && we(o))
        for (let n = 0; n < a.length; n++) {
            const i = a[n];
            let r = o[n];
            r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = o[n] = fl(o[n]),
            r.el = i.el),
            !l && r.patchFlag !== -2 && li(i, r)),
            r.type === Ho && (r.el = i.el)
        }
}
function pf(e) {
    const t = e.slice()
      , l = [0];
    let a, o, n, i, r;
    const s = e.length;
    for (a = 0; a < s; a++) {
        const d = e[a];
        if (d !== 0) {
            if (o = l[l.length - 1],
            e[o] < d) {
                t[a] = o,
                l.push(a);
                continue
            }
            for (n = 0,
            i = l.length - 1; n < i; )
                r = n + i >> 1,
                e[l[r]] < d ? n = r + 1 : i = r;
            d < e[l[n]] && (n > 0 && (t[a] = l[n - 1]),
            l[n] = a)
        }
    }
    for (n = l.length,
    i = l[n - 1]; n-- > 0; )
        l[n] = i,
        i = t[i];
    return l
}
function Gs(e) {
    const t = e.subTree.component;
    if (t)
        return t.asyncDep && !t.asyncResolved ? t : Gs(t)
}
function Yi(e) {
    if (e)
        for (let t = 0; t < e.length; t++)
            e[t].active = !1
}
const mf = Symbol.for("v-scx")
  , hf = () => qe(mf);
function Oa(e, t) {
    return No(e, null, t)
}
function gf(e, t) {
    return No(e, null, {
        flush: "sync"
    })
}
const Ga = {};
function ke(e, t, l) {
    return No(e, t, l)
}
function No(e, t, {immediate: l, deep: a, flush: o, once: n, onTrack: i, onTrigger: r}=De) {
    if (t && n) {
        const T = t;
        t = (...F) => {
            T(...F),
            C()
        }
    }
    const s = tt
      , d = T => a === !0 ? T : vl(T, a === !1 ? 1 : void 0);
    let c, v = !1, f = !1;
    if (at(e) ? (c = () => e.value,
    v = so(e)) : fa(e) ? (c = () => d(e),
    v = !0) : we(e) ? (f = !0,
    v = e.some(T => fa(T) || so(T)),
    c = () => e.map(T => {
        if (at(T))
            return T.value;
        if (fa(T))
            return d(T);
        if (Ve(T))
            return ml(T, s, 2)
    }
    )) : Ve(e) ? t ? c = () => ml(e, s, 2) : c = () => (p && p(),
    Vt(e, s, 3, [g])) : c = _t,
    t && a) {
        const T = c;
        c = () => vl(T())
    }
    let p, g = T => {
        p = $.onStop = () => {
            ml(T, s, 4),
            p = $.onStop = void 0
        }
    }
    , b;
    if (Mo)
        if (g = _t,
        t ? l && Vt(t, s, 3, [c(), f ? [] : void 0, g]) : c(),
        o === "sync") {
            const T = hf();
            b = T.__watcherHandles || (T.__watcherHandles = [])
        } else
            return _t;
    let m = f ? new Array(e.length).fill(Ga) : Ga;
    const h = () => {
        if (!(!$.active || !$.dirty))
            if (t) {
                const T = $.run();
                (a || v || (f ? T.some( (F, j) => Gt(F, m[j])) : Gt(T, m))) && (p && p(),
                Vt(t, s, 3, [T, m === Ga ? void 0 : f && m[0] === Ga ? [] : m, g]),
                m = T)
            } else
                $.run()
    }
    ;
    h.allowRecurse = !!t;
    let B;
    o === "sync" ? B = h : o === "post" ? B = () => st(h, s && s.suspense) : (h.pre = !0,
    s && (h.id = s.uid),
    B = () => Xn(h));
    const $ = new jn(c,_t,B)
      , x = Dn()
      , C = () => {
        $.stop(),
        x && Hn(x.effects, $)
    }
    ;
    return t ? l ? h() : m = $.run() : o === "post" ? st($.run.bind($), s && s.suspense) : $.run(),
    b && b.push(C),
    C
}
function yf(e, t, l) {
    const a = this.proxy
      , o = Ue(e) ? e.includes(".") ? Ws(a, e) : () => a[e] : e.bind(a, a);
    let n;
    Ve(t) ? n = t : (n = t.handler,
    l = t);
    const i = Ea(this)
      , r = No(o, n.bind(a), l);
    return i(),
    r
}
function Ws(e, t) {
    const l = t.split(".");
    return () => {
        let a = e;
        for (let o = 0; o < l.length && a; o++)
            a = a[l[o]];
        return a
    }
}
function vl(e, t=1 / 0, l) {
    if (t <= 0 || !ze(e) || e.__v_skip || (l = l || new Set,
    l.has(e)))
        return e;
    if (l.add(e),
    t--,
    at(e))
        vl(e.value, t, l);
    else if (we(e))
        for (let a = 0; a < e.length; a++)
            vl(e[a], t, l);
    else if (ea(e) || Gl(e))
        e.forEach(a => {
            vl(a, t, l)
        }
        );
    else if (Qr(e)) {
        for (const a in e)
            vl(e[a], t, l);
        for (const a of Object.getOwnPropertySymbols(e))
            Object.prototype.propertyIsEnumerable.call(e, a) && vl(e[a], t, l)
    }
    return e
}
const Lo = e => e.type.__isKeepAlive;
function qs(e, t) {
    Us(e, "a", t)
}
function bf(e, t) {
    Us(e, "da", t)
}
function Us(e, t, l=tt) {
    const a = e.__wdc || (e.__wdc = () => {
        let o = l;
        for (; o; ) {
            if (o.isDeactivated)
                return;
            o = o.parent
        }
        return e()
    }
    );
    if (Io(t, a, l),
    l) {
        let o = l.parent;
        for (; o && o.parent; )
            Lo(o.parent.vnode) && Bf(a, t, l, o),
            o = o.parent
    }
}
function Bf(e, t, l, a) {
    const o = Io(t, e, a, !0);
    Jn( () => {
        Hn(a[t], o)
    }
    , l)
}
const cl = Symbol("_leaveCb")
  , Wa = Symbol("_enterCb");
function Ks() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return pt( () => {
        e.isMounted = !0
    }
    ),
    Aa( () => {
        e.isUnmounting = !0
    }
    ),
    e
}
const Ct = [Function, Array]
  , Ys = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Ct,
    onEnter: Ct,
    onAfterEnter: Ct,
    onEnterCancelled: Ct,
    onBeforeLeave: Ct,
    onLeave: Ct,
    onAfterLeave: Ct,
    onLeaveCancelled: Ct,
    onBeforeAppear: Ct,
    onAppear: Ct,
    onAfterAppear: Ct,
    onAppearCancelled: Ct
}
  , Xs = e => {
    const t = e.subTree;
    return t.component ? Xs(t.component) : t
}
  , _f = {
    name: "BaseTransition",
    props: Ys,
    setup(e, {slots: t}) {
        const l = al()
          , a = Ks();
        return () => {
            const o = t.default && ai(t.default(), !0);
            if (!o || !o.length)
                return;
            let n = o[0];
            if (o.length > 1) {
                for (const f of o)
                    if (f.type !== dt) {
                        n = f;
                        break
                    }
            }
            const i = Fe(e)
              , {mode: r} = i;
            if (a.isLeaving)
                return en(n);
            const s = Xi(n);
            if (!s)
                return en(n);
            let d = ka(s, i, a, l, f => d = f);
            Ul(s, d);
            const c = l.subTree
              , v = c && Xi(c);
            if (v && v.type !== dt && !Tl(s, v) && Xs(l).type !== dt) {
                const f = ka(v, i, a, l);
                if (Ul(v, f),
                r === "out-in" && s.type !== dt)
                    return a.isLeaving = !0,
                    f.afterLeave = () => {
                        a.isLeaving = !1,
                        l.update.active !== !1 && (l.effect.dirty = !0,
                        l.update())
                    }
                    ,
                    en(n);
                r === "in-out" && s.type !== dt && (f.delayLeave = (p, g, b) => {
                    const m = Zs(a, v);
                    m[String(v.key)] = v,
                    p[cl] = () => {
                        g(),
                        p[cl] = void 0,
                        delete d.delayedLeave
                    }
                    ,
                    d.delayedLeave = b
                }
                )
            }
            return n
        }
    }
}
  , wf = _f;
function Zs(e, t) {
    const {leavingVNodes: l} = e;
    let a = l.get(t.type);
    return a || (a = Object.create(null),
    l.set(t.type, a)),
    a
}
function ka(e, t, l, a, o) {
    const {appear: n, mode: i, persisted: r=!1, onBeforeEnter: s, onEnter: d, onAfterEnter: c, onEnterCancelled: v, onBeforeLeave: f, onLeave: p, onAfterLeave: g, onLeaveCancelled: b, onBeforeAppear: m, onAppear: h, onAfterAppear: B, onAppearCancelled: $} = t
      , x = String(e.key)
      , C = Zs(l, e)
      , T = (L, Z) => {
        L && Vt(L, a, 9, Z)
    }
      , F = (L, Z) => {
        const de = Z[1];
        T(L, Z),
        we(L) ? L.every(R => R.length <= 1) && de() : L.length <= 1 && de()
    }
      , j = {
        mode: i,
        persisted: r,
        beforeEnter(L) {
            let Z = s;
            if (!l.isMounted)
                if (n)
                    Z = m || s;
                else
                    return;
            L[cl] && L[cl](!0);
            const de = C[x];
            de && Tl(e, de) && de.el[cl] && de.el[cl](),
            T(Z, [L])
        },
        enter(L) {
            let Z = d
              , de = c
              , R = v;
            if (!l.isMounted)
                if (n)
                    Z = h || d,
                    de = B || c,
                    R = $ || v;
                else
                    return;
            let ee = !1;
            const k = L[Wa] = P => {
                ee || (ee = !0,
                P ? T(R, [L]) : T(de, [L]),
                j.delayedLeave && j.delayedLeave(),
                L[Wa] = void 0)
            }
            ;
            Z ? F(Z, [L, k]) : k()
        },
        leave(L, Z) {
            const de = String(e.key);
            if (L[Wa] && L[Wa](!0),
            l.isUnmounting)
                return Z();
            T(f, [L]);
            let R = !1;
            const ee = L[cl] = k => {
                R || (R = !0,
                Z(),
                k ? T(b, [L]) : T(g, [L]),
                L[cl] = void 0,
                C[de] === e && delete C[de])
            }
            ;
            C[de] = e,
            p ? F(p, [L, ee]) : ee()
        },
        clone(L) {
            const Z = ka(L, t, l, a, o);
            return o && o(Z),
            Z
        }
    };
    return j
}
function en(e) {
    if (Lo(e))
        return e = hl(e),
        e.children = null,
        e
}
function Xi(e) {
    if (!Lo(e))
        return e;
    const {shapeFlag: t, children: l} = e;
    if (l) {
        if (t & 16)
            return l[0];
        if (t & 32 && Ve(l.default))
            return l.default()
    }
}
function Ul(e, t) {
    e.shapeFlag & 6 && e.component ? Ul(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent),
    e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}
function ai(e, t=!1, l) {
    let a = []
      , o = 0;
    for (let n = 0; n < e.length; n++) {
        let i = e[n];
        const r = l == null ? i.key : String(l) + String(i.key != null ? i.key : n);
        i.type === Be ? (i.patchFlag & 128 && o++,
        a = a.concat(ai(i.children, t, r))) : (t || i.type !== dt) && a.push(r != null ? hl(i, {
            key: r
        }) : i)
    }
    if (o > 1)
        for (let n = 0; n < a.length; n++)
            a[n].patchFlag = -2;
    return a
}
const xf = e => e.__isTeleport
  , ga = e => e && (e.disabled || e.disabled === "")
  , Zi = e => typeof SVGElement != "undefined" && e instanceof SVGElement
  , Ji = e => typeof MathMLElement == "function" && e instanceof MathMLElement
  , _n = (e, t) => {
    const l = e && e.to;
    return Ue(l) ? t ? t(l) : null : l
}
  , Cf = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, l, a, o, n, i, r, s, d) {
        const {mc: c, pc: v, pbc: f, o: {insert: p, querySelector: g, createText: b, createComment: m}} = d
          , h = ga(t.props);
        let {shapeFlag: B, children: $, dynamicChildren: x} = t;
        if (e == null) {
            const C = t.el = b("")
              , T = t.anchor = b("");
            p(C, l, a),
            p(T, l, a);
            const F = t.target = _n(t.props, g)
              , j = t.targetAnchor = b("");
            F && (p(j, F),
            i === "svg" || Zi(F) ? i = "svg" : (i === "mathml" || Ji(F)) && (i = "mathml"));
            const L = (Z, de) => {
                B & 16 && c($, Z, de, o, n, i, r, s)
            }
            ;
            h ? L(l, T) : F && L(F, j)
        } else {
            t.el = e.el;
            const C = t.anchor = e.anchor
              , T = t.target = e.target
              , F = t.targetAnchor = e.targetAnchor
              , j = ga(e.props)
              , L = j ? l : T
              , Z = j ? C : F;
            if (i === "svg" || Zi(T) ? i = "svg" : (i === "mathml" || Ji(T)) && (i = "mathml"),
            x ? (f(e.dynamicChildren, x, L, o, n, i, r),
            li(e, t, !0)) : s || v(e, t, L, Z, o, n, i, r, !1),
            h)
                j ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : qa(t, l, C, d, 1);
            else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                const de = t.target = _n(t.props, g);
                de && qa(t, de, null, d, 0)
            } else
                j && qa(t, T, F, d, 1)
        }
        Js(t)
    },
    remove(e, t, l, a, {um: o, o: {remove: n}}, i) {
        const {shapeFlag: r, children: s, anchor: d, targetAnchor: c, target: v, props: f} = e;
        if (v && n(c),
        i && n(d),
        r & 16) {
            const p = i || !ga(f);
            for (let g = 0; g < s.length; g++) {
                const b = s[g];
                o(b, t, l, p, !!b.dynamicChildren)
            }
        }
    },
    move: qa,
    hydrate: kf
};
function qa(e, t, l, {o: {insert: a}, m: o}, n=2) {
    n === 0 && a(e.targetAnchor, t, l);
    const {el: i, anchor: r, shapeFlag: s, children: d, props: c} = e
      , v = n === 2;
    if (v && a(i, t, l),
    (!v || ga(c)) && s & 16)
        for (let f = 0; f < d.length; f++)
            o(d[f], t, l, 2);
    v && a(r, t, l)
}
function kf(e, t, l, a, o, n, {o: {nextSibling: i, parentNode: r, querySelector: s}}, d) {
    const c = t.target = _n(t.props, s);
    if (c) {
        const v = c._lpa || c.firstChild;
        if (t.shapeFlag & 16)
            if (ga(t.props))
                t.anchor = d(i(e), t, r(e), l, a, o, n),
                t.targetAnchor = v;
            else {
                t.anchor = i(e);
                let f = v;
                for (; f; )
                    if (f = i(f),
                    f && f.nodeType === 8 && f.data === "teleport anchor") {
                        t.targetAnchor = f,
                        c._lpa = t.targetAnchor && i(t.targetAnchor);
                        break
                    }
                d(v, t, c, l, a, o, n)
            }
        Js(t)
    }
    return t.anchor && i(t.anchor)
}
const Fl = Cf;
function Js(e) {
    const t = e.ctx;
    if (t && t.ut) {
        let l = e.children[0].el;
        for (; l && l !== e.targetAnchor; )
            l.nodeType === 1 && l.setAttribute("data-v-owner", t.uid),
            l = l.nextSibling;
        t.ut()
    }
}
const Be = Symbol.for("v-fgt")
  , Ho = Symbol.for("v-txt")
  , dt = Symbol.for("v-cmt")
  , Qa = Symbol.for("v-stc")
  , ya = [];
let Nt = null;
function y(e=!1) {
    ya.push(Nt = e ? null : [])
}
function Sf() {
    ya.pop(),
    Nt = ya[ya.length - 1] || null
}
let Sa = 1;
function Qi(e) {
    Sa += e
}
function Qs(e) {
    return e.dynamicChildren = Sa > 0 ? Nt || jl : null,
    Sf(),
    Sa > 0 && Nt && Nt.push(e),
    e
}
function O(e, t, l, a, o, n) {
    return Qs(ne(e, t, l, a, o, n, !0))
}
function M(e, t, l, a, o) {
    return Qs(pe(e, t, l, a, o, !0))
}
function vo(e) {
    return e ? e.__v_isVNode === !0 : !1
}
function Tl(e, t) {
    return e.type === t.type && e.key === t.key
}
const eu = ({key: e}) => e != null ? e : null
  , eo = ({ref: e, ref_key: t, ref_for: l}) => (typeof e == "number" && (e = "" + e),
e != null ? Ue(e) || at(e) || Ve(e) ? {
    i: Je,
    r: e,
    k: t,
    f: !!l
} : e : null);
function ne(e, t=null, l=null, a=0, o=null, n=e === Be ? 0 : 1, i=!1, r=!1) {
    const s = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && eu(t),
        ref: t && eo(t),
        scopeId: Vs,
        slotScopeIds: null,
        children: l,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: n,
        patchFlag: a,
        dynamicProps: o,
        dynamicChildren: null,
        appContext: null,
        ctx: Je
    };
    return r ? (oi(s, l),
    n & 128 && e.normalize(s)) : l && (s.shapeFlag |= Ue(l) ? 8 : 16),
    Sa > 0 && !i && Nt && (s.patchFlag > 0 || n & 6) && s.patchFlag !== 32 && Nt.push(s),
    s
}
const pe = Tf;
function Tf(e, t=null, l=null, a=0, o=null, n=!1) {
    if ((!e || e === $s) && (e = dt),
    vo(e)) {
        const r = hl(e, t, !0);
        return l && oi(r, l),
        Sa > 0 && !n && Nt && (r.shapeFlag & 6 ? Nt[Nt.indexOf(e)] = r : Nt.push(r)),
        r.patchFlag = -2,
        r
    }
    if (Nf(e) && (e = e.__vccOpts),
    t) {
        t = je(t);
        let {class: r, style: s} = t;
        r && !Ue(r) && (t.class = te(r)),
        ze(s) && (ys(s) && !we(s) && (s = Ye({}, s)),
        t.style = Qe(s))
    }
    const i = Ue(e) ? 1 : Dc(e) ? 128 : xf(e) ? 64 : ze(e) ? 4 : Ve(e) ? 2 : 0;
    return ne(e, t, l, a, o, i, n, !0)
}
function je(e) {
    return e ? ys(e) || Hs(e) ? Ye({}, e) : e : null
}
function hl(e, t, l=!1, a=!1) {
    const {props: o, ref: n, patchFlag: i, children: r, transition: s} = e
      , d = t ? ue(o || {}, t) : o
      , c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: d,
        key: d && eu(d),
        ref: t && t.ref ? l && n ? we(n) ? n.concat(eo(t)) : [n, eo(t)] : eo(t) : n,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: r,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== Be ? i === -1 ? 16 : i | 16 : i,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: s,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && hl(e.ssContent),
        ssFallback: e.ssFallback && hl(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    };
    return s && a && Ul(c, s.clone(c)),
    c
}
function ye(e=" ", t=0) {
    return pe(Ho, null, e, t)
}
function Vf(e, t) {
    const l = pe(Qa, null, e);
    return l.staticCount = t,
    l
}
function me(e="", t=!1) {
    return t ? (y(),
    M(dt, null, e)) : pe(dt, null, e)
}
function Rt(e) {
    return e == null || typeof e == "boolean" ? pe(dt) : we(e) ? pe(Be, null, e.slice()) : typeof e == "object" ? fl(e) : pe(Ho, null, String(e))
}
function fl(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : hl(e)
}
function oi(e, t) {
    let l = 0;
    const {shapeFlag: a} = e;
    if (t == null)
        t = null;
    else if (we(t))
        l = 16;
    else if (typeof t == "object")
        if (a & 65) {
            const o = t.default;
            o && (o._c && (o._d = !1),
            oi(e, o()),
            o._c && (o._d = !0));
            return
        } else {
            l = 32;
            const o = t._;
            !o && !Hs(t) ? t._ctx = Je : o === 3 && Je && (Je.slots._ === 1 ? t._ = 1 : (t._ = 2,
            e.patchFlag |= 1024))
        }
    else
        Ve(t) ? (t = {
            default: t,
            _ctx: Je
        },
        l = 32) : (t = String(t),
        a & 64 ? (l = 16,
        t = [ye(t)]) : l = 8);
    e.children = t,
    e.shapeFlag |= l
}
function ue(...e) {
    const t = {};
    for (let l = 0; l < e.length; l++) {
        const a = e[l];
        for (const o in a)
            if (o === "class")
                t.class !== a.class && (t.class = te([t.class, a.class]));
            else if (o === "style")
                t.style = Qe([t.style, a.style]);
            else if (To(o)) {
                const n = t[o]
                  , i = a[o];
                i && n !== i && !(we(n) && n.includes(i)) && (t[o] = n ? [].concat(n, i) : i)
            } else
                o !== "" && (t[o] = a[o])
    }
    return t
}
function zt(e, t, l, a=null) {
    Vt(e, t, 7, [l, a])
}
const $f = Is();
let Af = 0;
function Pf(e, t, l) {
    const a = e.type
      , o = (t ? t.appContext : e.appContext) || $f
      , n = {
        uid: Af++,
        vnode: e,
        type: a,
        parent: t,
        appContext: o,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new tc(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(o.provides),
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: zs(a, o),
        emitsOptions: Ts(a, o),
        emit: null,
        emitted: null,
        propsDefaults: De,
        inheritAttrs: a.inheritAttrs,
        ctx: De,
        data: De,
        props: De,
        attrs: De,
        slots: De,
        refs: De,
        setupState: De,
        setupContext: null,
        attrsProxy: null,
        slotsProxy: null,
        suspense: l,
        suspenseId: l ? l.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    return n.ctx = {
        _: n
    },
    n.root = t ? t.root : n,
    n.emit = Lc.bind(null, n),
    e.ce && e.ce(n),
    n
}
let tt = null;
const al = () => tt || Je;
let po, wn;
{
    const e = zn()
      , t = (l, a) => {
        let o;
        return (o = e[l]) || (o = e[l] = []),
        o.push(a),
        n => {
            o.length > 1 ? o.forEach(i => i(n)) : o[0](n)
        }
    }
    ;
    po = t("__VUE_INSTANCE_SETTERS__", l => tt = l),
    wn = t("__VUE_SSR_SETTERS__", l => Mo = l)
}
const Ea = e => {
    const t = tt;
    return po(e),
    e.scope.on(),
    () => {
        e.scope.off(),
        po(t)
    }
}
  , er = () => {
    tt && tt.scope.off(),
    po(null)
}
;
function tu(e) {
    return e.vnode.shapeFlag & 4
}
let Mo = !1;
function Of(e, t=!1) {
    t && wn(t);
    const {props: l, children: a} = e.vnode
      , o = tu(e);
    of(e, l, o, t),
    sf(e, a);
    const n = o ? Ef(e, t) : void 0;
    return t && wn(!1),
    n
}
function Ef(e, t) {
    const l = e.type;
    e.accessCache = Object.create(null),
    e.proxy = new Proxy(e.ctx,Xc);
    const {setup: a} = l;
    if (a) {
        const o = e.setupContext = a.length > 1 ? au(e) : null
          , n = Ea(e);
        _l();
        const i = ml(a, e, 0, [e.props, o]);
        if (wl(),
        n(),
        Zr(i)) {
            if (i.then(er, er),
            t)
                return i.then(r => {
                    tr(e, r, t)
                }
                ).catch(r => {
                    Eo(r, e, 0)
                }
                );
            e.asyncDep = i
        } else
            tr(e, i, t)
    } else
        lu(e, t)
}
function tr(e, t, l) {
    Ve(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ze(t) && (e.setupState = _s(t)),
    lu(e, l)
}
let lr;
function lu(e, t, l) {
    const a = e.type;
    if (!e.render) {
        if (!t && lr && !a.render) {
            const o = a.template || ei(e).template;
            if (o) {
                const {isCustomElement: n, compilerOptions: i} = e.appContext.config
                  , {delimiters: r, compilerOptions: s} = a
                  , d = Ye(Ye({
                    isCustomElement: n,
                    delimiters: r
                }, i), s);
                a.render = lr(o, d)
            }
        }
        e.render = a.render || _t
    }
    {
        const o = Ea(e);
        _l();
        try {
            Zc(e)
        } finally {
            wl(),
            o()
        }
    }
}
const Ff = {
    get(e, t) {
        return vt(e, "get", ""),
        e[t]
    }
};
function au(e) {
    const t = l => {
        e.exposed = l || {}
    }
    ;
    return {
        attrs: new Proxy(e.attrs,Ff),
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}
function zo(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(_s(Cc(e.exposed)),{
        get(t, l) {
            if (l in t)
                return t[l];
            if (l in ma)
                return ma[l](e)
        },
        has(t, l) {
            return l in t || l in ma
        }
    })) : e.proxy
}
function If(e, t=!0) {
    return Ve(e) ? e.displayName || e.name : e.name || t && e.__name
}
function Nf(e) {
    return Ve(e) && "__vccOpts"in e
}
const w = (e, t) => kc(e, t, Mo);
function Ne(e, t, l=De) {
    const a = al()
      , o = Ht(t)
      , n = Bl(t)
      , i = ws( (s, d) => {
        let c;
        return gf( () => {
            const v = e[t];
            Gt(c, v) && (c = v,
            d())
        }
        ),
        {
            get() {
                return s(),
                l.get ? l.get(c) : c
            },
            set(v) {
                const f = a.vnode.props;
                !(f && (t in f || o in f || n in f) && (`onUpdate:${t}`in f || `onUpdate:${o}`in f || `onUpdate:${n}`in f)) && Gt(v, c) && (c = v,
                d()),
                a.emit(`update:${t}`, l.set ? l.set(v) : v)
            }
        }
    }
    )
      , r = t === "modelValue" ? "modelModifiers" : `${t}Modifiers`;
    return i[Symbol.iterator] = () => {
        let s = 0;
        return {
            next() {
                return s < 2 ? {
                    value: s++ ? e[r] || {} : i,
                    done: !1
                } : {
                    done: !0
                }
            }
        }
    }
    ,
    i
}
function et(e, t, l) {
    const a = arguments.length;
    return a === 2 ? ze(t) && !we(t) ? vo(t) ? pe(e, null, [t]) : pe(e, t) : pe(e, null, t) : (a > 3 ? l = Array.prototype.slice.call(arguments, 2) : a === 3 && vo(l) && (l = [l]),
    pe(e, t, l))
}
const Lf = "3.4.29";
/**
* @vue/runtime-dom v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Hf = "http://www.w3.org/2000/svg"
  , Mf = "http://www.w3.org/1998/Math/MathML"
  , Kt = typeof document != "undefined" ? document : null
  , ar = Kt && Kt.createElement("template")
  , zf = {
    insert: (e, t, l) => {
        t.insertBefore(e, l || null)
    }
    ,
    remove: e => {
        const t = e.parentNode;
        t && t.removeChild(e)
    }
    ,
    createElement: (e, t, l, a) => {
        const o = t === "svg" ? Kt.createElementNS(Hf, e) : t === "mathml" ? Kt.createElementNS(Mf, e) : l ? Kt.createElement(e, {
            is: l
        }) : Kt.createElement(e);
        return e === "select" && a && a.multiple != null && o.setAttribute("multiple", a.multiple),
        o
    }
    ,
    createText: e => Kt.createTextNode(e),
    createComment: e => Kt.createComment(e),
    setText: (e, t) => {
        e.nodeValue = t
    }
    ,
    setElementText: (e, t) => {
        e.textContent = t
    }
    ,
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => Kt.querySelector(e),
    setScopeId(e, t) {
        e.setAttribute(t, "")
    },
    insertStaticContent(e, t, l, a, o, n) {
        const i = l ? l.previousSibling : t.lastChild;
        if (o && (o === n || o.nextSibling))
            for (; t.insertBefore(o.cloneNode(!0), l),
            !(o === n || !(o = o.nextSibling)); )
                ;
        else {
            ar.innerHTML = a === "svg" ? `<svg>${e}</svg>` : a === "mathml" ? `<math>${e}</math>` : e;
            const r = ar.content;
            if (a === "svg" || a === "mathml") {
                const s = r.firstChild;
                for (; s.firstChild; )
                    r.appendChild(s.firstChild);
                r.removeChild(s)
            }
            t.insertBefore(r, l)
        }
        return [i ? i.nextSibling : t.firstChild, l ? l.previousSibling : t.lastChild]
    }
}
  , sl = "transition"
  , na = "animation"
  , Kl = Symbol("_vtc")
  , Ro = (e, {slots: t}) => et(wf, nu(e), t);
Ro.displayName = "Transition";
const ou = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: !0
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
}
  , Rf = Ro.props = Ye({}, Ys, ou)
  , kl = (e, t=[]) => {
    we(e) ? e.forEach(l => l(...t)) : e && e(...t)
}
  , or = e => e ? we(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;
function nu(e) {
    const t = {};
    for (const R in e)
        R in ou || (t[R] = e[R]);
    if (e.css === !1)
        return t;
    const {name: l="v", type: a, duration: o, enterFromClass: n=`${l}-enter-from`, enterActiveClass: i=`${l}-enter-active`, enterToClass: r=`${l}-enter-to`, appearFromClass: s=n, appearActiveClass: d=i, appearToClass: c=r, leaveFromClass: v=`${l}-leave-from`, leaveActiveClass: f=`${l}-leave-active`, leaveToClass: p=`${l}-leave-to`} = e
      , g = Df(o)
      , b = g && g[0]
      , m = g && g[1]
      , {onBeforeEnter: h, onEnter: B, onEnterCancelled: $, onLeave: x, onLeaveCancelled: C, onBeforeAppear: T=h, onAppear: F=B, onAppearCancelled: j=$} = t
      , L = (R, ee, k) => {
        ul(R, ee ? c : r),
        ul(R, ee ? d : i),
        k && k()
    }
      , Z = (R, ee) => {
        R._isLeaving = !1,
        ul(R, v),
        ul(R, p),
        ul(R, f),
        ee && ee()
    }
      , de = R => (ee, k) => {
        const P = R ? F : B
          , N = () => L(ee, R, k);
        kl(P, [ee, N]),
        nr( () => {
            ul(ee, R ? s : n),
            Ut(ee, R ? c : r),
            or(P) || ir(ee, a, b, N)
        }
        )
    }
    ;
    return Ye(t, {
        onBeforeEnter(R) {
            kl(h, [R]),
            Ut(R, n),
            Ut(R, i)
        },
        onBeforeAppear(R) {
            kl(T, [R]),
            Ut(R, s),
            Ut(R, d)
        },
        onEnter: de(!1),
        onAppear: de(!0),
        onLeave(R, ee) {
            R._isLeaving = !0;
            const k = () => Z(R, ee);
            Ut(R, v),
            Ut(R, f),
            ru(),
            nr( () => {
                !R._isLeaving || (ul(R, v),
                Ut(R, p),
                or(x) || ir(R, a, m, k))
            }
            ),
            kl(x, [R, k])
        },
        onEnterCancelled(R) {
            L(R, !1),
            kl($, [R])
        },
        onAppearCancelled(R) {
            L(R, !0),
            kl(j, [R])
        },
        onLeaveCancelled(R) {
            Z(R),
            kl(C, [R])
        }
    })
}
function Df(e) {
    if (e == null)
        return null;
    if (ze(e))
        return [tn(e.enter), tn(e.leave)];
    {
        const t = tn(e);
        return [t, t]
    }
}
function tn(e) {
    return Ud(e)
}
function Ut(e, t) {
    t.split(/\s+/).forEach(l => l && e.classList.add(l)),
    (e[Kl] || (e[Kl] = new Set)).add(t)
}
function ul(e, t) {
    t.split(/\s+/).forEach(a => a && e.classList.remove(a));
    const l = e[Kl];
    l && (l.delete(t),
    l.size || (e[Kl] = void 0))
}
function nr(e) {
    requestAnimationFrame( () => {
        requestAnimationFrame(e)
    }
    )
}
let jf = 0;
function ir(e, t, l, a) {
    const o = e._endId = ++jf
      , n = () => {
        o === e._endId && a()
    }
    ;
    if (l)
        return setTimeout(n, l);
    const {type: i, timeout: r, propCount: s} = iu(e, t);
    if (!i)
        return a();
    const d = i + "end";
    let c = 0;
    const v = () => {
        e.removeEventListener(d, f),
        n()
    }
      , f = p => {
        p.target === e && ++c >= s && v()
    }
    ;
    setTimeout( () => {
        c < s && v()
    }
    , r + 1),
    e.addEventListener(d, f)
}
function iu(e, t) {
    const l = window.getComputedStyle(e)
      , a = g => (l[g] || "").split(", ")
      , o = a(`${sl}Delay`)
      , n = a(`${sl}Duration`)
      , i = rr(o, n)
      , r = a(`${na}Delay`)
      , s = a(`${na}Duration`)
      , d = rr(r, s);
    let c = null
      , v = 0
      , f = 0;
    t === sl ? i > 0 && (c = sl,
    v = i,
    f = n.length) : t === na ? d > 0 && (c = na,
    v = d,
    f = s.length) : (v = Math.max(i, d),
    c = v > 0 ? i > d ? sl : na : null,
    f = c ? c === sl ? n.length : s.length : 0);
    const p = c === sl && /\b(transform|all)(,|$)/.test(a(`${sl}Property`).toString());
    return {
        type: c,
        timeout: v,
        propCount: f,
        hasTransform: p
    }
}
function rr(e, t) {
    for (; e.length < t.length; )
        e = e.concat(e);
    return Math.max(...t.map( (l, a) => sr(l) + sr(e[a])))
}
function sr(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
}
function ru() {
    return document.body.offsetHeight
}
function Gf(e, t, l) {
    const a = e[Kl];
    a && (t = (t ? [t, ...a] : [...a]).join(" ")),
    t == null ? e.removeAttribute("class") : l ? e.setAttribute("class", t) : e.className = t
}
const mo = Symbol("_vod")
  , su = Symbol("_vsh")
  , Fa = {
    beforeMount(e, {value: t}, {transition: l}) {
        e[mo] = e.style.display === "none" ? "" : e.style.display,
        l && t ? l.beforeEnter(e) : ia(e, t)
    },
    mounted(e, {value: t}, {transition: l}) {
        l && t && l.enter(e)
    },
    updated(e, {value: t, oldValue: l}, {transition: a}) {
        !t != !l && (a ? t ? (a.beforeEnter(e),
        ia(e, !0),
        a.enter(e)) : a.leave(e, () => {
            ia(e, !1)
        }
        ) : ia(e, t))
    },
    beforeUnmount(e, {value: t}) {
        ia(e, t)
    }
};
function ia(e, t) {
    e.style.display = t ? e[mo] : "none",
    e[su] = !t
}
const Wf = Symbol("")
  , qf = /(^|;)\s*display\s*:/;
function Uf(e, t, l) {
    const a = e.style
      , o = Ue(l);
    let n = !1;
    if (l && !o) {
        if (t)
            if (Ue(t))
                for (const i of t.split(";")) {
                    const r = i.slice(0, i.indexOf(":")).trim();
                    l[r] == null && to(a, r, "")
                }
            else
                for (const i in t)
                    l[i] == null && to(a, i, "");
        for (const i in l)
            i === "display" && (n = !0),
            to(a, i, l[i])
    } else if (o) {
        if (t !== l) {
            const i = a[Wf];
            i && (l += ";" + i),
            a.cssText = l,
            n = qf.test(l)
        }
    } else
        t && e.removeAttribute("style");
    mo in e && (e[mo] = n ? a.display : "",
    e[su] && (a.display = "none"))
}
const ur = /\s*!important$/;
function to(e, t, l) {
    if (we(l))
        l.forEach(a => to(e, t, a));
    else if (l == null && (l = ""),
    t.startsWith("--"))
        e.setProperty(t, l);
    else {
        const a = Kf(e, t);
        ur.test(l) ? e.setProperty(Bl(a), l.replace(ur, ""), "important") : e[a] = l
    }
}
const dr = ["Webkit", "Moz", "ms"]
  , ln = {};
function Kf(e, t) {
    const l = ln[t];
    if (l)
        return l;
    let a = Ht(t);
    if (a !== "filter" && a in e)
        return ln[t] = a;
    a = $o(a);
    for (let o = 0; o < dr.length; o++) {
        const n = dr[o] + a;
        if (n in e)
            return ln[t] = n
    }
    return t
}
const cr = "http://www.w3.org/1999/xlink";
function fr(e, t, l, a, o, n=Qd(t)) {
    a && t.startsWith("xlink:") ? l == null ? e.removeAttributeNS(cr, t.slice(6, t.length)) : e.setAttributeNS(cr, t, l) : l == null || n && !ls(l) ? e.removeAttribute(t) : e.setAttribute(t, n ? "" : String(l))
}
function Yf(e, t, l, a, o, n, i) {
    if (t === "innerHTML" || t === "textContent") {
        a && i(a, o, n),
        e[t] = l == null ? "" : l;
        return
    }
    const r = e.tagName;
    if (t === "value" && r !== "PROGRESS" && !r.includes("-")) {
        const d = r === "OPTION" ? e.getAttribute("value") || "" : e.value
          , c = l == null ? "" : String(l);
        (d !== c || !("_value"in e)) && (e.value = c),
        l == null && e.removeAttribute(t),
        e._value = l;
        return
    }
    let s = !1;
    if (l === "" || l == null) {
        const d = typeof e[t];
        d === "boolean" ? l = ls(l) : l == null && d === "string" ? (l = "",
        s = !0) : d === "number" && (l = 0,
        s = !0)
    }
    try {
        e[t] = l
    } catch {}
    s && e.removeAttribute(t)
}
function Do(e, t, l, a) {
    e.addEventListener(t, l, a)
}
function Xf(e, t, l, a) {
    e.removeEventListener(t, l, a)
}
const vr = Symbol("_vei");
function Zf(e, t, l, a, o=null) {
    const n = e[vr] || (e[vr] = {})
      , i = n[t];
    if (a && i)
        i.value = a;
    else {
        const [r,s] = Jf(t);
        if (a) {
            const d = n[t] = tv(a, o);
            Do(e, r, d, s)
        } else
            i && (Xf(e, r, i, s),
            n[t] = void 0)
    }
}
const pr = /(?:Once|Passive|Capture)$/;
function Jf(e) {
    let t;
    if (pr.test(e)) {
        t = {};
        let a;
        for (; a = e.match(pr); )
            e = e.slice(0, e.length - a[0].length),
            t[a[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : Bl(e.slice(2)), t]
}
let an = 0;
const Qf = Promise.resolve()
  , ev = () => an || (Qf.then( () => an = 0),
an = Date.now());
function tv(e, t) {
    const l = a => {
        if (!a._vts)
            a._vts = Date.now();
        else if (a._vts <= l.attached)
            return;
        Vt(lv(a, l.value), t, 5, [a])
    }
    ;
    return l.value = e,
    l.attached = ev(),
    l
}
function lv(e, t) {
    if (we(t)) {
        const l = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            l.call(e),
            e._stopped = !0
        }
        ,
        t.map(a => o => !o._stopped && a && a(o))
    } else
        return t
}
const mr = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123
  , av = (e, t, l, a, o, n, i, r, s) => {
    const d = o === "svg";
    t === "class" ? Gf(e, a, d) : t === "style" ? Uf(e, l, a) : To(t) ? Ln(t) || Zf(e, t, l, a, i) : (t[0] === "." ? (t = t.slice(1),
    !0) : t[0] === "^" ? (t = t.slice(1),
    !1) : ov(e, t, a, d)) ? (Yf(e, t, a, n, i, r, s),
    (t === "value" || t === "checked" || t === "selected") && fr(e, t, a, d, i, t !== "value")) : (t === "true-value" ? e._trueValue = a : t === "false-value" && (e._falseValue = a),
    fr(e, t, a, d))
}
;
function ov(e, t, l, a) {
    if (a)
        return !!(t === "innerHTML" || t === "textContent" || t in e && mr(t) && Ve(l));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
        return !1;
    if (t === "width" || t === "height") {
        const o = e.tagName;
        if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
            return !1
    }
    return mr(t) && Ue(l) ? !1 : t in e
}
const uu = new WeakMap
  , du = new WeakMap
  , ho = Symbol("_moveCb")
  , hr = Symbol("_enterCb")
  , cu = {
    name: "TransitionGroup",
    props: Ye({}, Rf, {
        tag: String,
        moveClass: String
    }),
    setup(e, {slots: t}) {
        const l = al()
          , a = Ks();
        let o, n;
        return Ps( () => {
            if (!o.length)
                return;
            const i = e.moveClass || `${e.name || "v"}-move`;
            if (!uv(o[0].el, l.vnode.el, i))
                return;
            o.forEach(iv),
            o.forEach(rv);
            const r = o.filter(sv);
            ru(),
            r.forEach(s => {
                const d = s.el
                  , c = d.style;
                Ut(d, i),
                c.transform = c.webkitTransform = c.transitionDuration = "";
                const v = d[ho] = f => {
                    f && f.target !== d || (!f || /transform$/.test(f.propertyName)) && (d.removeEventListener("transitionend", v),
                    d[ho] = null,
                    ul(d, i))
                }
                ;
                d.addEventListener("transitionend", v)
            }
            )
        }
        ),
        () => {
            const i = Fe(e)
              , r = nu(i);
            let s = i.tag || Be;
            if (o = [],
            n)
                for (let d = 0; d < n.length; d++) {
                    const c = n[d];
                    c.el && c.el instanceof Element && (o.push(c),
                    Ul(c, ka(c, r, a, l)),
                    uu.set(c, c.el.getBoundingClientRect()))
                }
            n = t.default ? ai(t.default()) : [];
            for (let d = 0; d < n.length; d++) {
                const c = n[d];
                c.key != null && Ul(c, ka(c, r, a, l))
            }
            return pe(s, null, n)
        }
    }
}
  , nv = e => delete e.mode;
cu.props;
const fu = cu;
function iv(e) {
    const t = e.el;
    t[ho] && t[ho](),
    t[hr] && t[hr]()
}
function rv(e) {
    du.set(e, e.el.getBoundingClientRect())
}
function sv(e) {
    const t = uu.get(e)
      , l = du.get(e)
      , a = t.left - l.left
      , o = t.top - l.top;
    if (a || o) {
        const n = e.el.style;
        return n.transform = n.webkitTransform = `translate(${a}px,${o}px)`,
        n.transitionDuration = "0s",
        e
    }
}
function uv(e, t, l) {
    const a = e.cloneNode()
      , o = e[Kl];
    o && o.forEach(r => {
        r.split(/\s+/).forEach(s => s && a.classList.remove(s))
    }
    ),
    l.split(/\s+/).forEach(r => r && a.classList.add(r)),
    a.style.display = "none";
    const n = t.nodeType === 1 ? t : t.parentNode;
    n.appendChild(a);
    const {hasTransform: i} = iu(a);
    return n.removeChild(a),
    i
}
const Yl = e => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return we(t) ? l => Ja(t, l) : t
}
  , Xt = Symbol("_assign")
  , dv = {
    deep: !0,
    created(e, t, l) {
        e[Xt] = Yl(l),
        Do(e, "change", () => {
            const a = e._modelValue
              , o = Xl(e)
              , n = e.checked
              , i = e[Xt];
            if (we(a)) {
                const r = Rn(a, o)
                  , s = r !== -1;
                if (n && !s)
                    i(a.concat(o));
                else if (!n && s) {
                    const d = [...a];
                    d.splice(r, 1),
                    i(d)
                }
            } else if (ea(a)) {
                const r = new Set(a);
                n ? r.add(o) : r.delete(o),
                i(r)
            } else
                i(vu(e, n))
        }
        )
    },
    mounted: gr,
    beforeUpdate(e, t, l) {
        e[Xt] = Yl(l),
        gr(e, t, l)
    }
};
function gr(e, {value: t, oldValue: l}, a) {
    e._modelValue = t,
    we(t) ? e.checked = Rn(t, a.props.value) > -1 : ea(t) ? e.checked = t.has(a.props.value) : t !== l && (e.checked = Ol(t, vu(e, !0)))
}
const cv = {
    created(e, {value: t}, l) {
        e.checked = Ol(t, l.props.value),
        e[Xt] = Yl(l),
        Do(e, "change", () => {
            e[Xt](Xl(e))
        }
        )
    },
    beforeUpdate(e, {value: t, oldValue: l}, a) {
        e[Xt] = Yl(a),
        t !== l && (e.checked = Ol(t, a.props.value))
    }
}
  , fv = {
    deep: !0,
    created(e, {value: t, modifiers: {number: l}}, a) {
        const o = ea(t);
        Do(e, "change", () => {
            const n = Array.prototype.filter.call(e.options, i => i.selected).map(i => l ? ts(Xl(i)) : Xl(i));
            e[Xt](e.multiple ? o ? new Set(n) : n : n[0]),
            e._assigning = !0,
            it( () => {
                e._assigning = !1
            }
            )
        }
        ),
        e[Xt] = Yl(a)
    },
    mounted(e, {value: t, modifiers: {number: l}}) {
        yr(e, t)
    },
    beforeUpdate(e, t, l) {
        e[Xt] = Yl(l)
    },
    updated(e, {value: t, modifiers: {number: l}}) {
        e._assigning || yr(e, t)
    }
};
function yr(e, t, l) {
    const a = e.multiple
      , o = we(t);
    if (!(a && !o && !ea(t))) {
        for (let n = 0, i = e.options.length; n < i; n++) {
            const r = e.options[n]
              , s = Xl(r);
            if (a)
                if (o) {
                    const d = typeof s;
                    d === "string" || d === "number" ? r.selected = t.some(c => String(c) === String(s)) : r.selected = Rn(t, s) > -1
                } else
                    r.selected = t.has(s);
            else if (Ol(Xl(r), t)) {
                e.selectedIndex !== n && (e.selectedIndex = n);
                return
            }
        }
        !a && e.selectedIndex !== -1 && (e.selectedIndex = -1)
    }
}
function Xl(e) {
    return "_value"in e ? e._value : e.value
}
function vu(e, t) {
    const l = t ? "_trueValue" : "_falseValue";
    return l in e ? e[l] : t
}
const vv = ["ctrl", "shift", "alt", "meta"]
  , pv = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => "button"in e && e.button !== 0,
    middle: e => "button"in e && e.button !== 1,
    right: e => "button"in e && e.button !== 2,
    exact: (e, t) => vv.some(l => e[`${l}Key`] && !t.includes(l))
}
  , Vl = (e, t) => {
    const l = e._withMods || (e._withMods = {})
      , a = t.join(".");
    return l[a] || (l[a] = (o, ...n) => {
        for (let i = 0; i < t.length; i++) {
            const r = pv[t[i]];
            if (r && r(o, t))
                return
        }
        return e(o, ...n)
    }
    )
}
  , mv = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
}
  , Ua = (e, t) => {
    const l = e._withKeys || (e._withKeys = {})
      , a = t.join(".");
    return l[a] || (l[a] = o => {
        if (!("key"in o))
            return;
        const n = Bl(o.key);
        if (t.some(i => i === n || mv[i] === n))
            return e(o)
    }
    )
}
  , hv = Ye({
    patchProp: av
}, zf);
let br;
function pu() {
    return br || (br = cf(hv))
}
const mu = (...e) => {
    pu().render(...e)
}
  , gv = (...e) => {
    const t = pu().createApp(...e)
      , {mount: l} = t;
    return t.mount = a => {
        const o = bv(a);
        if (!o)
            return;
        const n = t._component;
        !Ve(n) && !n.render && !n.template && (n.template = o.innerHTML),
        o.innerHTML = "";
        const i = l(o, !1, yv(o));
        return o instanceof Element && (o.removeAttribute("v-cloak"),
        o.setAttribute("data-v-app", "")),
        i
    }
    ,
    t
}
;
function yv(e) {
    if (e instanceof SVGElement)
        return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement)
        return "mathml"
}
function bv(e) {
    return Ue(e) ? document.querySelector(e) : e
}
var Bv = Object.defineProperty
  , _v = (e, t, l) => t in e ? Bv(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: l
}) : e[t] = l
  , kt = (e, t, l) => (_v(e, typeof t != "symbol" ? t + "" : t, l),
l);
const Ia = e => w( () => {
    const t = Ke(e);
    return t ? `justify-content-${t}` : ""
}
)
  , jo = (e, t) => w( () => {
    const l = Ke(e)
      , a = Ke(t);
    return l === !0 ? "true" : typeof l == "string" ? l : a === !1 ? "true" : l === !1 ? "false" : void 0
}
);
class gl {
    constructor(t, l={}) {
        if (kt(this, "cancelable", !0),
        kt(this, "componentId", null),
        kt(this, "_defaultPrevented", !1),
        kt(this, "eventType", ""),
        kt(this, "nativeEvent", null),
        kt(this, "_preventDefault"),
        kt(this, "relatedTarget", null),
        kt(this, "target", null),
        !t)
            throw new TypeError(`Failed to construct '${this.constructor.name}'. 1 argument required, ${arguments.length} given.`);
        Object.assign(this, gl.Defaults, l, {
            eventType: t
        }),
        this._preventDefault = function() {
            this.cancelable && (this.defaultPrevented = !0)
        }
    }
    get defaultPrevented() {
        return this._defaultPrevented
    }
    set defaultPrevented(t) {
        this._defaultPrevented = t
    }
    get preventDefault() {
        return this._preventDefault
    }
    set preventDefault(t) {
        this._preventDefault = t
    }
    static get Defaults() {
        return {
            cancelable: !0,
            componentId: null,
            eventType: "",
            nativeEvent: null,
            relatedTarget: null,
            target: null
        }
    }
}
class ta extends gl {
    constructor(t, l={}) {
        super(t, l),
        kt(this, "trigger", null),
        Object.assign(this, gl.Defaults, l, {
            eventType: t
        })
    }
    static get Defaults() {
        return {
            ...super.Defaults,
            trigger: null
        }
    }
}
class wv extends gl {
    constructor(t, l) {
        super(t, l),
        kt(this, "from"),
        kt(this, "to"),
        kt(this, "direction"),
        Object.assign(this, gl.Defaults, l, {
            eventType: t
        });
        const {from: a, direction: o, to: n} = l;
        this.from = a,
        this.to = n,
        this.direction = o
    }
    static get Defaults() {
        return {
            ...super.Defaults
        }
    }
}
const xv = (e, t={}) => {
    const l = (o=[]) => {
        const {activeElement: n} = document;
        return n && !o.some(i => i === n) ? n : null
    }
      , a = o => o === l();
    try {
        e.focus(t)
    } catch (o) {
        console.error(o)
    }
    return a(e)
}
  , lt = e => {
    var t;
    return ((t = e == null ? void 0 : e()) != null ? t : []).length === 0
}
  , Cv = e => {
    if (e.getAttribute("display") === "none")
        return !1;
    const t = e.getBoundingClientRect();
    return !!(t && t.height > 0 && t.width > 0)
}
  , xn = e => {
    const t = window.getComputedStyle(e)
      , l = t.transitionDelay.split(",")[0] || ""
      , a = t.transitionDuration.split(",")[0] || ""
      , o = Number(l.slice(0, -1)) * 1e3
      , n = Number(a.slice(0, -1)) * 1e3;
    return o + n
}
  , ni = typeof window < "u" && typeof document < "u" && typeof navigator < "u"
  , kv = e => ( () => {
    let t = !1;
    if (ni)
        try {
            const l = {
                get passive() {
                    t = !0
                }
            };
            WINDOW.addEventListener("test", l, l),
            WINDOW.removeEventListener("test", l, l)
        } catch {
            t = !1
        }
    return t
}
)() ? typeof e == "object" ? e : {
    capture: !!e || !1
} : typeof e == "object" ? e.capture : e
  , Sv = (e, t, l, a) => {
    e && e.addEventListener && e.addEventListener(t, l, kv(a))
}
  , Tv = (e, t, l, a) => {
    e && e.removeEventListener && e.removeEventListener(t, l, a)
}
  , Br = (e, t) => {
    (e ? Sv : Tv)(...t)
}
  , Vv = ["TD", "TH", "TR"]
  , $v = ["a", "a *", "button", "button *", "input:not(.disabled):not([disabled])", "select:not(.disabled):not([disabled])", "textarea:not(.disabled):not([disabled])", '[role="link"]', '[role="link"] *', '[role="button"]', '[role="button"] *', "[tabindex]:not(.disabled):not([disabled])"].join(",")
  , Ka = e => {
    if (!e || !e.target)
        return !1;
    const t = e.target;
    if ("disabled"in t && t.disabled || Vv.indexOf(t.tagName) !== -1)
        return !1;
    if (t.closest(".dropdown-menu"))
        return !0;
    const l = t.tagName === "LABEL" ? t : t.closest("label");
    if (l) {
        const a = l.getAttribute("for")
          , o = a ? document.getElementById(a) : l.querySelector("input, select, textarea");
        if (o && !o.disabled)
            return !0
    }
    return t.matches($v)
}
  , hu = ["top", "right", "bottom", "left"]
  , _r = ["start", "end"]
  , wr = hu.reduce( (e, t) => e.concat(t, t + "-" + _r[0], t + "-" + _r[1]), [])
  , wt = Math.min
  , ot = Math.max
  , go = Math.round
  , Ya = Math.floor
  , yl = e => ({
    x: e,
    y: e
})
  , Av = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , Pv = {
    start: "end",
    end: "start"
};
function Cn(e, t, l) {
    return ot(e, wt(t, l))
}
function ol(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Pt(e) {
    return e.split("-")[0]
}
function Lt(e) {
    return e.split("-")[1]
}
function gu(e) {
    return e === "x" ? "y" : "x"
}
function ii(e) {
    return e === "y" ? "height" : "width"
}
function la(e) {
    return ["top", "bottom"].includes(Pt(e)) ? "y" : "x"
}
function ri(e) {
    return gu(la(e))
}
function yu(e, t, l) {
    l === void 0 && (l = !1);
    const a = Lt(e)
      , o = ri(e)
      , n = ii(o);
    let i = o === "x" ? a === (l ? "end" : "start") ? "right" : "left" : a === "start" ? "bottom" : "top";
    return t.reference[n] > t.floating[n] && (i = bo(i)),
    [i, bo(i)]
}
function Ov(e) {
    const t = bo(e);
    return [yo(e), t, yo(t)]
}
function yo(e) {
    return e.replace(/start|end/g, t => Pv[t])
}
function Ev(e, t, l) {
    const a = ["left", "right"]
      , o = ["right", "left"]
      , n = ["top", "bottom"]
      , i = ["bottom", "top"];
    switch (e) {
    case "top":
    case "bottom":
        return l ? t ? o : a : t ? a : o;
    case "left":
    case "right":
        return t ? n : i;
    default:
        return []
    }
}
function Fv(e, t, l, a) {
    const o = Lt(e);
    let n = Ev(Pt(e), l === "start", a);
    return o && (n = n.map(i => i + "-" + o),
    t && (n = n.concat(n.map(yo)))),
    n
}
function bo(e) {
    return e.replace(/left|right|bottom|top/g, t => Av[t])
}
function Iv(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function si(e) {
    return typeof e != "number" ? Iv(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function Zl(e) {
    return {
        ...e,
        top: e.y,
        left: e.x,
        right: e.x + e.width,
        bottom: e.y + e.height
    }
}
function xr(e, t, l) {
    let {reference: a, floating: o} = e;
    const n = la(t)
      , i = ri(t)
      , r = ii(i)
      , s = Pt(t)
      , d = n === "y"
      , c = a.x + a.width / 2 - o.width / 2
      , v = a.y + a.height / 2 - o.height / 2
      , f = a[r] / 2 - o[r] / 2;
    let p;
    switch (s) {
    case "top":
        p = {
            x: c,
            y: a.y - o.height
        };
        break;
    case "bottom":
        p = {
            x: c,
            y: a.y + a.height
        };
        break;
    case "right":
        p = {
            x: a.x + a.width,
            y: v
        };
        break;
    case "left":
        p = {
            x: a.x - o.width,
            y: v
        };
        break;
    default:
        p = {
            x: a.x,
            y: a.y
        }
    }
    switch (Lt(t)) {
    case "start":
        p[i] -= f * (l && d ? -1 : 1);
        break;
    case "end":
        p[i] += f * (l && d ? -1 : 1);
        break
    }
    return p
}
const Nv = async (e, t, l) => {
    const {placement: a="bottom", strategy: o="absolute", middleware: n=[], platform: i} = l
      , r = n.filter(Boolean)
      , s = await (i.isRTL == null ? void 0 : i.isRTL(t));
    let d = await i.getElementRects({
        reference: e,
        floating: t,
        strategy: o
    })
      , {x: c, y: v} = xr(d, a, s)
      , f = a
      , p = {}
      , g = 0;
    for (let b = 0; b < r.length; b++) {
        const {name: m, fn: h} = r[b]
          , {x: B, y: $, data: x, reset: C} = await h({
            x: c,
            y: v,
            initialPlacement: a,
            placement: f,
            strategy: o,
            middlewareData: p,
            rects: d,
            platform: i,
            elements: {
                reference: e,
                floating: t
            }
        });
        c = B != null ? B : c,
        v = $ != null ? $ : v,
        p = {
            ...p,
            [m]: {
                ...p[m],
                ...x
            }
        },
        C && g <= 50 && (g++,
        typeof C == "object" && (C.placement && (f = C.placement),
        C.rects && (d = C.rects === !0 ? await i.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : C.rects),
        {x: c, y: v} = xr(d, f, s)),
        b = -1)
    }
    return {
        x: c,
        y: v,
        placement: f,
        strategy: o,
        middlewareData: p
    }
}
;
async function Jl(e, t) {
    var l;
    t === void 0 && (t = {});
    const {x: a, y: o, platform: n, rects: i, elements: r, strategy: s} = e
      , {boundary: d="clippingAncestors", rootBoundary: c="viewport", elementContext: v="floating", altBoundary: f=!1, padding: p=0} = ol(t, e)
      , g = si(p)
      , b = r[f ? v === "floating" ? "reference" : "floating" : v]
      , m = Zl(await n.getClippingRect({
        element: (l = await (n.isElement == null ? void 0 : n.isElement(b))) == null || l ? b : b.contextElement || await (n.getDocumentElement == null ? void 0 : n.getDocumentElement(r.floating)),
        boundary: d,
        rootBoundary: c,
        strategy: s
    }))
      , h = v === "floating" ? {
        x: a,
        y: o,
        width: i.floating.width,
        height: i.floating.height
    } : i.reference
      , B = await (n.getOffsetParent == null ? void 0 : n.getOffsetParent(r.floating))
      , $ = await (n.isElement == null ? void 0 : n.isElement(B)) ? await (n.getScale == null ? void 0 : n.getScale(B)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , x = Zl(n.convertOffsetParentRelativeRectToViewportRelativeRect ? await n.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: r,
        rect: h,
        offsetParent: B,
        strategy: s
    }) : h);
    return {
        top: (m.top - x.top + g.top) / $.y,
        bottom: (x.bottom - m.bottom + g.bottom) / $.y,
        left: (m.left - x.left + g.left) / $.x,
        right: (x.right - m.right + g.right) / $.x
    }
}
const Lv = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: l, y: a, placement: o, rects: n, platform: i, elements: r, middlewareData: s} = t
          , {element: d, padding: c=0} = ol(e, t) || {};
        if (d == null)
            return {};
        const v = si(c)
          , f = {
            x: l,
            y: a
        }
          , p = ri(o)
          , g = ii(p)
          , b = await i.getDimensions(d)
          , m = p === "y"
          , h = m ? "top" : "left"
          , B = m ? "bottom" : "right"
          , $ = m ? "clientHeight" : "clientWidth"
          , x = n.reference[g] + n.reference[p] - f[p] - n.floating[g]
          , C = f[p] - n.reference[p]
          , T = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(d));
        let F = T ? T[$] : 0;
        (!F || !await (i.isElement == null ? void 0 : i.isElement(T))) && (F = r.floating[$] || n.floating[g]);
        const j = x / 2 - C / 2
          , L = F / 2 - b[g] / 2 - 1
          , Z = wt(v[h], L)
          , de = wt(v[B], L)
          , R = Z
          , ee = F - b[g] - de
          , k = F / 2 - b[g] / 2 + j
          , P = Cn(R, k, ee)
          , N = !s.arrow && Lt(o) != null && k !== P && n.reference[g] / 2 - (k < R ? Z : de) - b[g] / 2 < 0
          , D = N ? k < R ? k - R : k - ee : 0;
        return {
            [p]: f[p] + D,
            data: {
                [p]: P,
                centerOffset: k - P - D,
                ...N && {
                    alignmentOffset: D
                }
            },
            reset: N
        }
    }
});
function Hv(e, t, l) {
    return (e ? [...l.filter(a => Lt(a) === e), ...l.filter(a => Lt(a) !== e)] : l.filter(a => Pt(a) === a)).filter(a => e ? Lt(a) === e || (t ? yo(a) !== a : !1) : !0)
}
const Mv = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "autoPlacement",
        options: e,
        async fn(t) {
            var l, a, o;
            const {rects: n, middlewareData: i, placement: r, platform: s, elements: d} = t
              , {crossAxis: c=!1, alignment: v, allowedPlacements: f=wr, autoAlignment: p=!0, ...g} = ol(e, t)
              , b = v !== void 0 || f === wr ? Hv(v || null, p, f) : f
              , m = await Jl(t, g)
              , h = ((l = i.autoPlacement) == null ? void 0 : l.index) || 0
              , B = b[h];
            if (B == null)
                return {};
            const $ = yu(B, n, await (s.isRTL == null ? void 0 : s.isRTL(d.floating)));
            if (r !== B)
                return {
                    reset: {
                        placement: b[0]
                    }
                };
            const x = [m[Pt(B)], m[$[0]], m[$[1]]]
              , C = [...((a = i.autoPlacement) == null ? void 0 : a.overflows) || [], {
                placement: B,
                overflows: x
            }]
              , T = b[h + 1];
            if (T)
                return {
                    data: {
                        index: h + 1,
                        overflows: C
                    },
                    reset: {
                        placement: T
                    }
                };
            const F = C.map(L => {
                const Z = Lt(L.placement);
                return [L.placement, Z && c ? L.overflows.slice(0, 2).reduce( (de, R) => de + R, 0) : L.overflows[0], L.overflows]
            }
            ).sort( (L, Z) => L[1] - Z[1])
              , j = ((o = F.filter(L => L[2].slice(0, Lt(L[0]) ? 2 : 3).every(Z => Z <= 0))[0]) == null ? void 0 : o[0]) || F[0][0];
            return j !== r ? {
                data: {
                    index: h + 1,
                    overflows: C
                },
                reset: {
                    placement: j
                }
            } : {}
        }
    }
}
  , zv = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var l, a;
            const {placement: o, middlewareData: n, rects: i, initialPlacement: r, platform: s, elements: d} = t
              , {mainAxis: c=!0, crossAxis: v=!0, fallbackPlacements: f, fallbackStrategy: p="bestFit", fallbackAxisSideDirection: g="none", flipAlignment: b=!0, ...m} = ol(e, t);
            if ((l = n.arrow) != null && l.alignmentOffset)
                return {};
            const h = Pt(o)
              , B = Pt(r) === r
              , $ = await (s.isRTL == null ? void 0 : s.isRTL(d.floating))
              , x = f || (B || !b ? [bo(r)] : Ov(r));
            !f && g !== "none" && x.push(...Fv(r, b, g, $));
            const C = [r, ...x]
              , T = await Jl(t, m)
              , F = [];
            let j = ((a = n.flip) == null ? void 0 : a.overflows) || [];
            if (c && F.push(T[h]),
            v) {
                const R = yu(o, i, $);
                F.push(T[R[0]], T[R[1]])
            }
            if (j = [...j, {
                placement: o,
                overflows: F
            }],
            !F.every(R => R <= 0)) {
                var L, Z;
                const R = (((L = n.flip) == null ? void 0 : L.index) || 0) + 1
                  , ee = C[R];
                if (ee)
                    return {
                        data: {
                            index: R,
                            overflows: j
                        },
                        reset: {
                            placement: ee
                        }
                    };
                let k = (Z = j.filter(P => P.overflows[0] <= 0).sort( (P, N) => P.overflows[1] - N.overflows[1])[0]) == null ? void 0 : Z.placement;
                if (!k)
                    switch (p) {
                    case "bestFit":
                        {
                            var de;
                            const P = (de = j.map(N => [N.placement, N.overflows.filter(D => D > 0).reduce( (D, J) => D + J, 0)]).sort( (N, D) => N[1] - D[1])[0]) == null ? void 0 : de[0];
                            P && (k = P);
                            break
                        }
                    case "initialPlacement":
                        k = r;
                        break
                    }
                if (o !== k)
                    return {
                        reset: {
                            placement: k
                        }
                    }
            }
            return {}
        }
    }
};
function Cr(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function kr(e) {
    return hu.some(t => e[t] >= 0)
}
const Rv = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: l} = t
              , {strategy: a="referenceHidden", ...o} = ol(e, t);
            switch (a) {
            case "referenceHidden":
                {
                    const n = await Jl(t, {
                        ...o,
                        elementContext: "reference"
                    })
                      , i = Cr(n, l.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: i,
                            referenceHidden: kr(i)
                        }
                    }
                }
            case "escaped":
                {
                    const n = await Jl(t, {
                        ...o,
                        altBoundary: !0
                    })
                      , i = Cr(n, l.floating);
                    return {
                        data: {
                            escapedOffsets: i,
                            escaped: kr(i)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
};
function bu(e) {
    const t = wt(...e.map(n => n.left))
      , l = wt(...e.map(n => n.top))
      , a = ot(...e.map(n => n.right))
      , o = ot(...e.map(n => n.bottom));
    return {
        x: t,
        y: l,
        width: a - t,
        height: o - l
    }
}
function Dv(e) {
    const t = e.slice().sort( (o, n) => o.y - n.y)
      , l = [];
    let a = null;
    for (let o = 0; o < t.length; o++) {
        const n = t[o];
        !a || n.y - a.y > a.height / 2 ? l.push([n]) : l[l.length - 1].push(n),
        a = n
    }
    return l.map(o => Zl(bu(o)))
}
const jv = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "inline",
        options: e,
        async fn(t) {
            const {placement: l, elements: a, rects: o, platform: n, strategy: i} = t
              , {padding: r=2, x: s, y: d} = ol(e, t)
              , c = Array.from(await (n.getClientRects == null ? void 0 : n.getClientRects(a.reference)) || [])
              , v = Dv(c)
              , f = Zl(bu(c))
              , p = si(r);
            function g() {
                if (v.length === 2 && v[0].left > v[1].right && s != null && d != null)
                    return v.find(m => s > m.left - p.left && s < m.right + p.right && d > m.top - p.top && d < m.bottom + p.bottom) || f;
                if (v.length >= 2) {
                    if (la(l) === "y") {
                        const Z = v[0]
                          , de = v[v.length - 1]
                          , R = Pt(l) === "top"
                          , ee = Z.top
                          , k = de.bottom
                          , P = R ? Z.left : de.left
                          , N = R ? Z.right : de.right
                          , D = N - P
                          , J = k - ee;
                        return {
                            top: ee,
                            bottom: k,
                            left: P,
                            right: N,
                            width: D,
                            height: J,
                            x: P,
                            y: ee
                        }
                    }
                    const m = Pt(l) === "left"
                      , h = ot(...v.map(Z => Z.right))
                      , B = wt(...v.map(Z => Z.left))
                      , $ = v.filter(Z => m ? Z.left === B : Z.right === h)
                      , x = $[0].top
                      , C = $[$.length - 1].bottom
                      , T = B
                      , F = h
                      , j = F - T
                      , L = C - x;
                    return {
                        top: x,
                        bottom: C,
                        left: T,
                        right: F,
                        width: j,
                        height: L,
                        x: T,
                        y: x
                    }
                }
                return f
            }
            const b = await n.getElementRects({
                reference: {
                    getBoundingClientRect: g
                },
                floating: a.floating,
                strategy: i
            });
            return o.reference.x !== b.reference.x || o.reference.y !== b.reference.y || o.reference.width !== b.reference.width || o.reference.height !== b.reference.height ? {
                reset: {
                    rects: b
                }
            } : {}
        }
    }
};
async function Gv(e, t) {
    const {placement: l, platform: a, elements: o} = e
      , n = await (a.isRTL == null ? void 0 : a.isRTL(o.floating))
      , i = Pt(l)
      , r = Lt(l)
      , s = la(l) === "y"
      , d = ["left", "top"].includes(i) ? -1 : 1
      , c = n && s ? -1 : 1
      , v = ol(t, e);
    let {mainAxis: f, crossAxis: p, alignmentAxis: g} = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: 0,
        crossAxis: 0,
        alignmentAxis: null,
        ...v
    };
    return r && typeof g == "number" && (p = r === "end" ? g * -1 : g),
    s ? {
        x: p * c,
        y: f * d
    } : {
        x: f * d,
        y: p * c
    }
}
const Bu = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var l, a;
            const {x: o, y: n, placement: i, middlewareData: r} = t
              , s = await Gv(t, e);
            return i === ((l = r.offset) == null ? void 0 : l.placement) && (a = r.arrow) != null && a.alignmentOffset ? {} : {
                x: o + s.x,
                y: n + s.y,
                data: {
                    ...s,
                    placement: i
                }
            }
        }
    }
}
  , Wv = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: l, y: a, placement: o} = t
              , {mainAxis: n=!0, crossAxis: i=!1, limiter: r={
                fn: m => {
                    let {x: h, y: B} = m;
                    return {
                        x: h,
                        y: B
                    }
                }
            }, ...s} = ol(e, t)
              , d = {
                x: l,
                y: a
            }
              , c = await Jl(t, s)
              , v = la(Pt(o))
              , f = gu(v);
            let p = d[f]
              , g = d[v];
            if (n) {
                const m = f === "y" ? "top" : "left"
                  , h = f === "y" ? "bottom" : "right"
                  , B = p + c[m]
                  , $ = p - c[h];
                p = Cn(B, p, $)
            }
            if (i) {
                const m = v === "y" ? "top" : "left"
                  , h = v === "y" ? "bottom" : "right"
                  , B = g + c[m]
                  , $ = g - c[h];
                g = Cn(B, g, $)
            }
            const b = r.fn({
                ...t,
                [f]: p,
                [v]: g
            });
            return {
                ...b,
                data: {
                    x: b.x - l,
                    y: b.y - a
                }
            }
        }
    }
}
  , qv = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            const {placement: l, rects: a, platform: o, elements: n} = t
              , {apply: i= () => {}
            , ...r} = ol(e, t)
              , s = await Jl(t, r)
              , d = Pt(l)
              , c = Lt(l)
              , v = la(l) === "y"
              , {width: f, height: p} = a.floating;
            let g, b;
            d === "top" || d === "bottom" ? (g = d,
            b = c === (await (o.isRTL == null ? void 0 : o.isRTL(n.floating)) ? "start" : "end") ? "left" : "right") : (b = d,
            g = c === "end" ? "top" : "bottom");
            const m = p - s.top - s.bottom
              , h = f - s.left - s.right
              , B = wt(p - s[g], m)
              , $ = wt(f - s[b], h)
              , x = !t.middlewareData.shift;
            let C = B
              , T = $;
            if (v ? T = c || x ? wt($, h) : h : C = c || x ? wt(B, m) : m,
            x && !c) {
                const j = ot(s.left, 0)
                  , L = ot(s.right, 0)
                  , Z = ot(s.top, 0)
                  , de = ot(s.bottom, 0);
                v ? T = f - 2 * (j !== 0 || L !== 0 ? j + L : ot(s.left, s.right)) : C = p - 2 * (Z !== 0 || de !== 0 ? Z + de : ot(s.top, s.bottom))
            }
            await i({
                ...t,
                availableWidth: T,
                availableHeight: C
            });
            const F = await o.getDimensions(n.floating);
            return f !== F.width || p !== F.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function Qt(e) {
    return ui(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function xt(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function nl(e) {
    var t;
    return (t = (ui(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function ui(e) {
    return e instanceof Node || e instanceof xt(e).Node
}
function el(e) {
    return e instanceof Element || e instanceof xt(e).Element
}
function Wt(e) {
    return e instanceof HTMLElement || e instanceof xt(e).HTMLElement
}
function Sr(e) {
    return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof xt(e).ShadowRoot
}
function Na(e) {
    const {overflow: t, overflowX: l, overflowY: a, display: o} = Ot(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + a + l) && !["inline", "contents"].includes(o)
}
function Uv(e) {
    return ["table", "td", "th"].includes(Qt(e))
}
function di(e) {
    const t = ci()
      , l = Ot(e);
    return l.transform !== "none" || l.perspective !== "none" || (l.containerType ? l.containerType !== "normal" : !1) || !t && (l.backdropFilter ? l.backdropFilter !== "none" : !1) || !t && (l.filter ? l.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(a => (l.willChange || "").includes(a)) || ["paint", "layout", "strict", "content"].some(a => (l.contain || "").includes(a))
}
function Kv(e) {
    let t = Ql(e);
    for (; Wt(t) && !Go(t); ) {
        if (di(t))
            return t;
        t = Ql(t)
    }
    return null
}
function ci() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
function Go(e) {
    return ["html", "body", "#document"].includes(Qt(e))
}
function Ot(e) {
    return xt(e).getComputedStyle(e)
}
function Wo(e) {
    return el(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.pageXOffset,
        scrollTop: e.pageYOffset
    }
}
function Ql(e) {
    if (Qt(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || Sr(e) && e.host || nl(e);
    return Sr(t) ? t.host : t
}
function _u(e) {
    const t = Ql(e);
    return Go(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Wt(t) && Na(t) ? t : _u(t)
}
function Ta(e, t, l) {
    var a;
    t === void 0 && (t = []),
    l === void 0 && (l = !0);
    const o = _u(e)
      , n = o === ((a = e.ownerDocument) == null ? void 0 : a.body)
      , i = xt(o);
    return n ? t.concat(i, i.visualViewport || [], Na(o) ? o : [], i.frameElement && l ? Ta(i.frameElement) : []) : t.concat(o, Ta(o, [], l))
}
function wu(e) {
    const t = Ot(e);
    let l = parseFloat(t.width) || 0
      , a = parseFloat(t.height) || 0;
    const o = Wt(e)
      , n = o ? e.offsetWidth : l
      , i = o ? e.offsetHeight : a
      , r = go(l) !== n || go(a) !== i;
    return r && (l = n,
    a = i),
    {
        width: l,
        height: a,
        $: r
    }
}
function fi(e) {
    return el(e) ? e : e.contextElement
}
function ql(e) {
    const t = fi(e);
    if (!Wt(t))
        return yl(1);
    const l = t.getBoundingClientRect()
      , {width: a, height: o, $: n} = wu(t);
    let i = (n ? go(l.width) : l.width) / a
      , r = (n ? go(l.height) : l.height) / o;
    return (!i || !Number.isFinite(i)) && (i = 1),
    (!r || !Number.isFinite(r)) && (r = 1),
    {
        x: i,
        y: r
    }
}
const Yv = yl(0);
function xu(e) {
    const t = xt(e);
    return !ci() || !t.visualViewport ? Yv : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function Xv(e, t, l) {
    return t === void 0 && (t = !1),
    !l || t && l !== xt(e) ? !1 : t
}
function El(e, t, l, a) {
    t === void 0 && (t = !1),
    l === void 0 && (l = !1);
    const o = e.getBoundingClientRect()
      , n = fi(e);
    let i = yl(1);
    t && (a ? el(a) && (i = ql(a)) : i = ql(e));
    const r = Xv(n, l, a) ? xu(n) : yl(0);
    let s = (o.left + r.x) / i.x
      , d = (o.top + r.y) / i.y
      , c = o.width / i.x
      , v = o.height / i.y;
    if (n) {
        const f = xt(n)
          , p = a && el(a) ? xt(a) : a;
        let g = f
          , b = g.frameElement;
        for (; b && a && p !== g; ) {
            const m = ql(b)
              , h = b.getBoundingClientRect()
              , B = Ot(b)
              , $ = h.left + (b.clientLeft + parseFloat(B.paddingLeft)) * m.x
              , x = h.top + (b.clientTop + parseFloat(B.paddingTop)) * m.y;
            s *= m.x,
            d *= m.y,
            c *= m.x,
            v *= m.y,
            s += $,
            d += x,
            g = xt(b),
            b = g.frameElement
        }
    }
    return Zl({
        width: c,
        height: v,
        x: s,
        y: d
    })
}
const Zv = [":popover-open", ":modal"];
function Cu(e) {
    return Zv.some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
function Jv(e) {
    let {elements: t, rect: l, offsetParent: a, strategy: o} = e;
    const n = o === "fixed"
      , i = nl(a)
      , r = t ? Cu(t.floating) : !1;
    if (a === i || r && n)
        return l;
    let s = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , d = yl(1);
    const c = yl(0)
      , v = Wt(a);
    if ((v || !v && !n) && ((Qt(a) !== "body" || Na(i)) && (s = Wo(a)),
    Wt(a))) {
        const f = El(a);
        d = ql(a),
        c.x = f.x + a.clientLeft,
        c.y = f.y + a.clientTop
    }
    return {
        width: l.width * d.x,
        height: l.height * d.y,
        x: l.x * d.x - s.scrollLeft * d.x + c.x,
        y: l.y * d.y - s.scrollTop * d.y + c.y
    }
}
function Qv(e) {
    return Array.from(e.getClientRects())
}
function ku(e) {
    return El(nl(e)).left + Wo(e).scrollLeft
}
function ep(e) {
    const t = nl(e)
      , l = Wo(e)
      , a = e.ownerDocument.body
      , o = ot(t.scrollWidth, t.clientWidth, a.scrollWidth, a.clientWidth)
      , n = ot(t.scrollHeight, t.clientHeight, a.scrollHeight, a.clientHeight);
    let i = -l.scrollLeft + ku(e);
    const r = -l.scrollTop;
    return Ot(a).direction === "rtl" && (i += ot(t.clientWidth, a.clientWidth) - o),
    {
        width: o,
        height: n,
        x: i,
        y: r
    }
}
function tp(e, t) {
    const l = xt(e)
      , a = nl(e)
      , o = l.visualViewport;
    let n = a.clientWidth
      , i = a.clientHeight
      , r = 0
      , s = 0;
    if (o) {
        n = o.width,
        i = o.height;
        const d = ci();
        (!d || d && t === "fixed") && (r = o.offsetLeft,
        s = o.offsetTop)
    }
    return {
        width: n,
        height: i,
        x: r,
        y: s
    }
}
function lp(e, t) {
    const l = El(e, !0, t === "fixed")
      , a = l.top + e.clientTop
      , o = l.left + e.clientLeft
      , n = Wt(e) ? ql(e) : yl(1)
      , i = e.clientWidth * n.x
      , r = e.clientHeight * n.y
      , s = o * n.x
      , d = a * n.y;
    return {
        width: i,
        height: r,
        x: s,
        y: d
    }
}
function Tr(e, t, l) {
    let a;
    if (t === "viewport")
        a = tp(e, l);
    else if (t === "document")
        a = ep(nl(e));
    else if (el(t))
        a = lp(t, l);
    else {
        const o = xu(e);
        a = {
            ...t,
            x: t.x - o.x,
            y: t.y - o.y
        }
    }
    return Zl(a)
}
function Su(e, t) {
    const l = Ql(e);
    return l === t || !el(l) || Go(l) ? !1 : Ot(l).position === "fixed" || Su(l, t)
}
function ap(e, t) {
    const l = t.get(e);
    if (l)
        return l;
    let a = Ta(e, [], !1).filter(r => el(r) && Qt(r) !== "body")
      , o = null;
    const n = Ot(e).position === "fixed";
    let i = n ? Ql(e) : e;
    for (; el(i) && !Go(i); ) {
        const r = Ot(i)
          , s = di(i);
        !s && r.position === "fixed" && (o = null),
        (n ? !s && !o : !s && r.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Na(i) && !s && Su(e, i)) ? a = a.filter(d => d !== i) : o = r,
        i = Ql(i)
    }
    return t.set(e, a),
    a
}
function op(e) {
    let {element: t, boundary: l, rootBoundary: a, strategy: o} = e;
    const n = [...l === "clippingAncestors" ? ap(t, this._c) : [].concat(l), a]
      , i = n[0]
      , r = n.reduce( (s, d) => {
        const c = Tr(t, d, o);
        return s.top = ot(c.top, s.top),
        s.right = wt(c.right, s.right),
        s.bottom = wt(c.bottom, s.bottom),
        s.left = ot(c.left, s.left),
        s
    }
    , Tr(t, i, o));
    return {
        width: r.right - r.left,
        height: r.bottom - r.top,
        x: r.left,
        y: r.top
    }
}
function np(e) {
    const {width: t, height: l} = wu(e);
    return {
        width: t,
        height: l
    }
}
function ip(e, t, l) {
    const a = Wt(t)
      , o = nl(t)
      , n = l === "fixed"
      , i = El(e, !0, n, t);
    let r = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const s = yl(0);
    if (a || !a && !n)
        if ((Qt(t) !== "body" || Na(o)) && (r = Wo(t)),
        a) {
            const v = El(t, !0, n, t);
            s.x = v.x + t.clientLeft,
            s.y = v.y + t.clientTop
        } else
            o && (s.x = ku(o));
    const d = i.left + r.scrollLeft - s.x
      , c = i.top + r.scrollTop - s.y;
    return {
        x: d,
        y: c,
        width: i.width,
        height: i.height
    }
}
function Vr(e, t) {
    return !Wt(e) || Ot(e).position === "fixed" ? null : t ? t(e) : e.offsetParent
}
function Tu(e, t) {
    const l = xt(e);
    if (!Wt(e) || Cu(e))
        return l;
    let a = Vr(e, t);
    for (; a && Uv(a) && Ot(a).position === "static"; )
        a = Vr(a, t);
    return a && (Qt(a) === "html" || Qt(a) === "body" && Ot(a).position === "static" && !di(a)) ? l : a || Kv(e) || l
}
const rp = async function(e) {
    const t = this.getOffsetParent || Tu
      , l = this.getDimensions;
    return {
        reference: ip(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            ...await l(e.floating)
        }
    }
};
function sp(e) {
    return Ot(e).direction === "rtl"
}
const up = {
    convertOffsetParentRelativeRectToViewportRelativeRect: Jv,
    getDocumentElement: nl,
    getClippingRect: op,
    getOffsetParent: Tu,
    getElementRects: rp,
    getClientRects: Qv,
    getDimensions: np,
    getScale: ql,
    isElement: el,
    isRTL: sp
};
function dp(e, t) {
    let l = null, a;
    const o = nl(e);
    function n() {
        var r;
        clearTimeout(a),
        (r = l) == null || r.disconnect(),
        l = null
    }
    function i(r, s) {
        r === void 0 && (r = !1),
        s === void 0 && (s = 1),
        n();
        const {left: d, top: c, width: v, height: f} = e.getBoundingClientRect();
        if (r || t(),
        !v || !f)
            return;
        const p = Ya(c)
          , g = Ya(o.clientWidth - (d + v))
          , b = Ya(o.clientHeight - (c + f))
          , m = Ya(d)
          , h = {
            rootMargin: -p + "px " + -g + "px " + -b + "px " + -m + "px",
            threshold: ot(0, wt(1, s)) || 1
        };
        let B = !0;
        function $(x) {
            const C = x[0].intersectionRatio;
            if (C !== s) {
                if (!B)
                    return i();
                C ? i(!1, C) : a = setTimeout( () => {
                    i(!1, 1e-7)
                }
                , 100)
            }
            B = !1
        }
        try {
            l = new IntersectionObserver($,{
                ...h,
                root: o.ownerDocument
            })
        } catch {
            l = new IntersectionObserver($,h)
        }
        l.observe(e)
    }
    return i(!0),
    n
}
function Vu(e, t, l, a) {
    a === void 0 && (a = {});
    const {ancestorScroll: o=!0, ancestorResize: n=!0, elementResize: i=typeof ResizeObserver == "function", layoutShift: r=typeof IntersectionObserver == "function", animationFrame: s=!1} = a
      , d = fi(e)
      , c = o || n ? [...d ? Ta(d) : [], ...Ta(t)] : [];
    c.forEach(h => {
        o && h.addEventListener("scroll", l, {
            passive: !0
        }),
        n && h.addEventListener("resize", l)
    }
    );
    const v = d && r ? dp(d, l) : null;
    let f = -1
      , p = null;
    i && (p = new ResizeObserver(h => {
        let[B] = h;
        B && B.target === d && p && (p.unobserve(t),
        cancelAnimationFrame(f),
        f = requestAnimationFrame( () => {
            var $;
            ($ = p) == null || $.observe(t)
        }
        )),
        l()
    }
    ),
    d && !s && p.observe(d),
    p.observe(t));
    let g, b = s ? El(e) : null;
    s && m();
    function m() {
        const h = El(e);
        b && (h.x !== b.x || h.y !== b.y || h.width !== b.width || h.height !== b.height) && l(),
        b = h,
        g = requestAnimationFrame(m)
    }
    return l(),
    () => {
        var h;
        c.forEach(B => {
            o && B.removeEventListener("scroll", l),
            n && B.removeEventListener("resize", l)
        }
        ),
        v == null || v(),
        (h = p) == null || h.disconnect(),
        p = null,
        s && cancelAnimationFrame(g)
    }
}
const cp = Mv
  , $u = Wv
  , Au = zv
  , Pu = qv
  , fp = Rv
  , vp = Lv
  , pp = jv
  , mp = (e, t, l) => {
    const a = new Map
      , o = {
        platform: up,
        ...l
    }
      , n = {
        ...o.platform,
        _c: a
    };
    return Nv(e, t, {
        ...o,
        platform: n
    })
}
;
function hp(e) {
    return e != null && typeof e == "object" && "$el"in e
}
function kn(e) {
    if (hp(e)) {
        const t = e.$el;
        return ui(t) && Qt(t) === "#comment" ? null : t
    }
    return e
}
function gp(e) {
    return {
        name: "arrow",
        options: e,
        fn(t) {
            const l = kn(u(e.element));
            return l == null ? {} : vp({
                element: l,
                padding: e.padding
            }).fn(t)
        }
    }
}
function Ou(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function $r(e, t) {
    const l = Ou(e);
    return Math.round(t * l) / l
}
function Eu(e, t, l) {
    l === void 0 && (l = {});
    const a = l.whileElementsMounted
      , o = w( () => {
        var F;
        return (F = u(l.open)) != null ? F : !0
    }
    )
      , n = w( () => u(l.middleware))
      , i = w( () => {
        var F;
        return (F = u(l.placement)) != null ? F : "bottom"
    }
    )
      , r = w( () => {
        var F;
        return (F = u(l.strategy)) != null ? F : "absolute"
    }
    )
      , s = w( () => {
        var F;
        return (F = u(l.transform)) != null ? F : !0
    }
    )
      , d = w( () => kn(e.value))
      , c = w( () => kn(t.value))
      , v = Y(0)
      , f = Y(0)
      , p = Y(r.value)
      , g = Y(i.value)
      , b = wa({})
      , m = Y(!1)
      , h = w( () => {
        const F = {
            position: p.value,
            left: "0",
            top: "0"
        };
        if (!c.value)
            return F;
        const j = $r(c.value, v.value)
          , L = $r(c.value, f.value);
        return s.value ? {
            ...F,
            transform: "translate(" + j + "px, " + L + "px)",
            ...Ou(c.value) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: p.value,
            left: j + "px",
            top: L + "px"
        }
    }
    );
    let B;
    function $() {
        d.value == null || c.value == null || mp(d.value, c.value, {
            middleware: n.value,
            placement: i.value,
            strategy: r.value
        }).then(F => {
            v.value = F.x,
            f.value = F.y,
            p.value = F.strategy,
            g.value = F.placement,
            b.value = F.middlewareData,
            m.value = !0
        }
        )
    }
    function x() {
        typeof B == "function" && (B(),
        B = void 0)
    }
    function C() {
        if (x(),
        a === void 0) {
            $();
            return
        }
        if (d.value != null && c.value != null) {
            B = a(d.value, c.value, $);
            return
        }
    }
    function T() {
        o.value || (m.value = !1)
    }
    return ke([n, i, r], $, {
        flush: "sync"
    }),
    ke([d, c], C, {
        flush: "sync"
    }),
    ke(o, T, {
        flush: "sync"
    }),
    Dn() && os(x),
    {
        x: Hl(v),
        y: Hl(f),
        strategy: Hl(p),
        placement: Hl(g),
        middlewareData: Hl(b),
        isPositioned: Hl(m),
        floatingStyles: h,
        update: $
    }
}
const yp = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"])
  , bp = /^aria-[\w-]*$/i
  , Bp = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i
  , _p = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i
  , wp = (e, t) => {
    const l = e.nodeName.toLowerCase();
    return t.includes(l) ? yp.has(l) ? !!(Bp.test(e.nodeValue || "") || _p.test(e.nodeValue || "")) : !0 : t.filter(a => a instanceof RegExp).some(a => a.test(l))
}
  , zl = {
    "*": ["class", "dir", "id", "lang", "role", bp],
    a: ["target", "href", "title", "rel"],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ["src", "srcset", "alt", "title", "width", "height"],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
}
  , Rl = (e, t, l) => {
    if (!e.length)
        return e;
    if (l && typeof l == "function")
        return l(e);
    const a = new window.DOMParser().parseFromString(e, "text/html")
      , o = a.body.querySelectorAll("*");
    for (const n of o) {
        const i = n.nodeName.toLowerCase();
        if (!Object.keys(t).includes(i)) {
            n.remove();
            continue
        }
        const r = n.attributes
          , s = [...t["*"] || [], ...t[i] || []];
        for (const d of r)
            wp(d, s) || n.removeAttribute(d.nodeName)
    }
    return a.body.innerHTML
}
;
function bl(e) {
    return Dn() ? (os(e),
    !0) : !1
}
function xp(e, t) {
    if (typeof Symbol < "u") {
        const l = {
            ...e
        };
        return Object.defineProperty(l, Symbol.iterator, {
            enumerable: !1,
            value() {
                let a = 0;
                return {
                    next: () => ({
                        value: t[a++],
                        done: a > t.length
                    })
                }
            }
        }),
        l
    } else
        return Object.assign([...t], e)
}
function $t(e) {
    return typeof e == "function" ? e() : u(e)
}
const Bo = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Fu = e => e != null
  , Cp = Object.prototype.toString
  , kp = e => Cp.call(e) === "[object Object]"
  , At = () => {}
  , Sn = Sp();
function Sp() {
    var e, t;
    return Bo && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent))
}
function Iu(e, t) {
    function l(...a) {
        return new Promise( (o, n) => {
            Promise.resolve(e( () => t.apply(this, a), {
                fn: t,
                thisArg: this,
                args: a
            })).then(o).catch(n)
        }
        )
    }
    return l
}
const Nu = e => e();
function Tp(e, t={}) {
    let l, a, o = At;
    const n = i => {
        clearTimeout(i),
        o(),
        o = At
    }
    ;
    return i => {
        const r = $t(e)
          , s = $t(t.maxWait);
        return l && n(l),
        r <= 0 || s !== void 0 && s <= 0 ? (a && (n(a),
        a = null),
        Promise.resolve(i())) : new Promise( (d, c) => {
            o = t.rejectOnCancel ? c : d,
            s && !a && (a = setTimeout( () => {
                l && n(l),
                a = null,
                d(i())
            }
            , s)),
            l = setTimeout( () => {
                a && n(a),
                a = null,
                d(i())
            }
            , r)
        }
        )
    }
}
function Vp(e=Nu) {
    const t = Y(!0);
    function l() {
        t.value = !1
    }
    function a() {
        t.value = !0
    }
    const o = (...n) => {
        t.value && e(...n)
    }
    ;
    return {
        isActive: ct(t),
        pause: l,
        resume: a,
        eventFilter: o
    }
}
function $p(e) {
    const t = Object.create(null);
    return l => t[l] || (t[l] = e(l))
}
const Ap = /-(\w)/g
  , Pp = $p(e => e.replace(Ap, (t, l) => l ? l.toUpperCase() : ""));
function Op(...e) {
    if (e.length !== 1)
        return V(...e);
    const t = e[0];
    return typeof t == "function" ? ct(ws( () => ({
        get: t,
        set: At
    }))) : Y(t)
}
function Ep(e, t=200, l={}) {
    return Iu(Tp(t, l), e)
}
function Fp(e, t, l={}) {
    const {eventFilter: a=Nu, ...o} = l;
    return ke(e, Iu(a, t), o)
}
function Ar(e, t, l={}) {
    const {eventFilter: a, ...o} = l
      , {eventFilter: n, pause: i, resume: r, isActive: s} = Vp(a);
    return {
        stop: Fp(e, t, {
            ...o,
            eventFilter: n
        }),
        pause: i,
        resume: r,
        isActive: s
    }
}
function Tn(e, t, ...[l]) {
    const {flush: a="sync", deep: o=!1, immediate: n=!0, direction: i="both", transform: r={}} = l || {}
      , s = []
      , d = "ltr"in r && r.ltr || (v => v)
      , c = "rtl"in r && r.rtl || (v => v);
    return (i === "both" || i === "ltr") && s.push(Ar(e, v => {
        s.forEach(f => f.pause()),
        t.value = d(v),
        s.forEach(f => f.resume())
    }
    , {
        flush: a,
        deep: o,
        immediate: n
    })),
    (i === "both" || i === "rtl") && s.push(Ar(t, v => {
        s.forEach(f => f.pause()),
        e.value = c(v),
        s.forEach(f => f.resume())
    }
    , {
        flush: a,
        deep: o,
        immediate: n
    })),
    () => {
        s.forEach(v => v.stop())
    }
}
function Lu(e, t=1e3, l={}) {
    const {immediate: a=!0, immediateCallback: o=!1} = l;
    let n = null;
    const i = Y(!1);
    function r() {
        n && (clearInterval(n),
        n = null)
    }
    function s() {
        i.value = !1,
        r()
    }
    function d() {
        const c = $t(t);
        c <= 0 || (i.value = !0,
        o && e(),
        r(),
        n = setInterval(e, c))
    }
    if (a && Bo && d(),
    at(t) || typeof t == "function") {
        const c = ke(t, () => {
            i.value && Bo && d()
        }
        );
        bl(c)
    }
    return bl(s),
    {
        isActive: i,
        pause: s,
        resume: d
    }
}
function Oe(e, t={}) {
    const {method: l="parseFloat", radix: a, nanToZero: o} = t;
    return w( () => {
        let n = $t(e);
        return typeof n == "string" && (n = Number[l](n, a)),
        o && Number.isNaN(n) && (n = 0),
        n
    }
    )
}
function _o(e={}) {
    const {inheritAttrs: t=!0} = e
      , l = wa()
      , a = Q({
        setup(n, {slots: i}) {
            return () => {
                l.value = i.default
            }
        }
    })
      , o = Q({
        inheritAttrs: t,
        setup(n, {attrs: i, slots: r}) {
            return () => {
                var s;
                l.value;
                const d = (s = l.value) == null ? void 0 : s.call(l, {
                    ...Ip(i),
                    $slots: r
                });
                return t && (d == null ? void 0 : d.length) === 1 ? d[0] : d
            }
        }
    });
    return xp({
        define: a,
        reuse: o
    }, [a, o])
}
function Ip(e) {
    const t = {};
    for (const l in e)
        t[Pp(l)] = e[l];
    return t
}
function Tt(e) {
    var t;
    const l = $t(e);
    return (t = l == null ? void 0 : l.$el) != null ? t : l
}
const il = Bo ? window : void 0;
function Xe(...e) {
    let t, l, a, o;
    if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([l,a,o] = e,
    t = il) : [t,l,a,o] = e,
    !t)
        return At;
    Array.isArray(l) || (l = [l]),
    Array.isArray(a) || (a = [a]);
    const n = []
      , i = () => {
        n.forEach(c => c()),
        n.length = 0
    }
      , r = (c, v, f, p) => (c.addEventListener(v, f, p),
    () => c.removeEventListener(v, f, p))
      , s = ke( () => [Tt(t), $t(o)], ([c,v]) => {
        if (i(),
        !c)
            return;
        const f = kp(v) ? {
            ...v
        } : v;
        n.push(...l.flatMap(p => a.map(g => r(c, p, g, f))))
    }
    , {
        immediate: !0,
        flush: "post"
    })
      , d = () => {
        s(),
        i()
    }
    ;
    return bl(d),
    d
}
let Pr = !1;
function Hu(e, t, l={}) {
    const {window: a=il, ignore: o=[], capture: n=!0, detectIframe: i=!1} = l;
    if (!a)
        return At;
    Sn && !Pr && (Pr = !0,
    Array.from(a.document.body.children).forEach(c => c.addEventListener("click", At)),
    a.document.documentElement.addEventListener("click", At));
    let r = !0;
    const s = c => o.some(v => {
        if (typeof v == "string")
            return Array.from(a.document.querySelectorAll(v)).some(f => f === c.target || c.composedPath().includes(f));
        {
            const f = Tt(v);
            return f && (c.target === f || c.composedPath().includes(f))
        }
    }
    )
      , d = [Xe(a, "click", c => {
        const v = Tt(e);
        if (!(!v || v === c.target || c.composedPath().includes(v))) {
            if (c.detail === 0 && (r = !s(c)),
            !r) {
                r = !0;
                return
            }
            t(c)
        }
    }
    , {
        passive: !0,
        capture: n
    }), Xe(a, "pointerdown", c => {
        const v = Tt(e);
        r = !s(c) && !!(v && !c.composedPath().includes(v))
    }
    , {
        passive: !0
    }), i && Xe(a, "blur", c => {
        setTimeout( () => {
            var v;
            const f = Tt(e);
            ((v = a.document.activeElement) == null ? void 0 : v.tagName) === "IFRAME" && !(f != null && f.contains(a.document.activeElement)) && t(c)
        }
        , 0)
    }
    )].filter(Boolean);
    return () => d.forEach(c => c())
}
function Np(e) {
    return typeof e == "function" ? e : typeof e == "string" ? t => t.key === e : Array.isArray(e) ? t => e.includes(t.key) : () => !0
}
function Bt(...e) {
    let t, l, a = {};
    e.length === 3 ? (t = e[0],
    l = e[1],
    a = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0,
    l = e[0],
    a = e[1]) : (t = e[0],
    l = e[1]) : (t = !0,
    l = e[0]);
    const {target: o=il, eventName: n="keydown", passive: i=!1, dedupe: r=!1} = a
      , s = Np(t);
    return Xe(o, n, d => {
        d.repeat && $t(r) || s(d) && l(d)
    }
    , i)
}
function Lp() {
    const e = Y(!1)
      , t = al();
    return t && pt( () => {
        e.value = !0
    }
    , t),
    e
}
function Mu(e) {
    const t = Lp();
    return w( () => (t.value,
    !!e()))
}
function Hp(e, t, l={}) {
    const {window: a=il, ...o} = l;
    let n;
    const i = Mu( () => a && "MutationObserver"in a)
      , r = () => {
        n && (n.disconnect(),
        n = void 0)
    }
      , s = w( () => {
        const f = $t(e)
          , p = (Array.isArray(f) ? f : [f]).map(Tt).filter(Fu);
        return new Set(p)
    }
    )
      , d = ke( () => s.value, f => {
        r(),
        i.value && f.size && (n = new MutationObserver(t),
        f.forEach(p => n.observe(p, o)))
    }
    , {
        immediate: !0,
        flush: "post"
    })
      , c = () => n == null ? void 0 : n.takeRecords()
      , v = () => {
        r(),
        d()
    }
    ;
    return bl(v),
    {
        isSupported: i,
        stop: v,
        takeRecords: c
    }
}
const Xa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
  , Za = "__vueuse_ssr_handlers__"
  , Mp = zp();
function zp() {
    return Za in Xa || (Xa[Za] = Xa[Za] || {}),
    Xa[Za]
}
function Rp(e, t) {
    return Mp[e] || t
}
function vi(e, t={}) {
    const {delayEnter: l=0, delayLeave: a=0, window: o=il} = t
      , n = Y(!1);
    let i;
    const r = s => {
        const d = s ? l : a;
        i && (clearTimeout(i),
        i = void 0),
        d ? i = setTimeout( () => n.value = s, d) : n.value = s
    }
    ;
    return o && (Xe(e, "mouseenter", () => r(!0), {
        passive: !0
    }),
    Xe(e, "mouseleave", () => r(!1), {
        passive: !0
    })),
    n
}
function Dp(e, t, l={}) {
    const {root: a, rootMargin: o="0px", threshold: n=.1, window: i=il, immediate: r=!0} = l
      , s = Mu( () => i && "IntersectionObserver"in i)
      , d = w( () => {
        const g = $t(e);
        return (Array.isArray(g) ? g : [g]).map(Tt).filter(Fu)
    }
    );
    let c = At;
    const v = Y(r)
      , f = s.value ? ke( () => [d.value, Tt(a), v.value], ([g,b]) => {
        if (c(),
        !v.value || !g.length)
            return;
        const m = new IntersectionObserver(t,{
            root: Tt(b),
            rootMargin: o,
            threshold: n
        });
        g.forEach(h => h && m.observe(h)),
        c = () => {
            m.disconnect(),
            c = At
        }
    }
    , {
        immediate: r,
        flush: "post"
    }) : At
      , p = () => {
        c(),
        f(),
        v.value = !1
    }
    ;
    return bl(p),
    {
        isSupported: s,
        isActive: v,
        pause() {
            c(),
            v.value = !1
        },
        resume() {
            v.value = !0
        },
        stop: p
    }
}
function ft(e, t={}) {
    const {initialValue: l=!1, focusVisible: a=!1} = t
      , o = Y(!1)
      , n = w( () => Tt(e));
    Xe(n, "focus", r => {
        var s, d;
        (!a || (d = (s = r.target).matches) != null && d.call(s, ":focus-visible")) && (o.value = !0)
    }
    ),
    Xe(n, "blur", () => o.value = !1);
    const i = w({
        get: () => o.value,
        set(r) {
            var s, d;
            !r && o.value ? (s = n.value) == null || s.blur() : r && !o.value && ((d = n.value) == null || d.focus())
        }
    });
    return ke(n, () => {
        i.value = l
    }
    , {
        immediate: !0,
        flush: "post"
    }),
    {
        focused: i
    }
}
function on(e) {
    return typeof Window < "u" && e instanceof Window ? e.document.documentElement : typeof Document < "u" && e instanceof Document ? e.documentElement : e
}
const jp = {
    page: e => [e.pageX, e.pageY],
    client: e => [e.clientX, e.clientY],
    screen: e => [e.screenX, e.screenY],
    movement: e => e instanceof Touch ? null : [e.movementX, e.movementY]
};
function Gp(e={}) {
    const {type: t="page", touch: l=!0, resetOnTouchEnds: a=!1, initialValue: o={
        x: 0,
        y: 0
    }, window: n=il, target: i=n, scroll: r=!0, eventFilter: s} = e;
    let d = null;
    const c = Y(o.x)
      , v = Y(o.y)
      , f = Y(null)
      , p = typeof t == "function" ? t : jp[t]
      , g = C => {
        const T = p(C);
        d = C,
        T && ([c.value,v.value] = T,
        f.value = "mouse")
    }
      , b = C => {
        if (C.touches.length > 0) {
            const T = p(C.touches[0]);
            T && ([c.value,v.value] = T,
            f.value = "touch")
        }
    }
      , m = () => {
        if (!d || !n)
            return;
        const C = p(d);
        d instanceof MouseEvent && C && (c.value = C[0] + n.scrollX,
        v.value = C[1] + n.scrollY)
    }
      , h = () => {
        c.value = o.x,
        v.value = o.y
    }
      , B = s ? C => s( () => g(C), {}) : C => g(C)
      , $ = s ? C => s( () => b(C), {}) : C => b(C)
      , x = s ? () => s( () => m(), {}) : () => m();
    if (i) {
        const C = {
            passive: !0
        };
        Xe(i, ["mousemove", "dragover"], B, C),
        l && t !== "movement" && (Xe(i, ["touchstart", "touchmove"], $, C),
        a && Xe(i, "touchend", h, C)),
        r && t === "page" && Xe(n, "scroll", x, {
            passive: !0
        })
    }
    return {
        x: c,
        y: v,
        sourceType: f
    }
}
function Or(e, t={}) {
    const {handleOutside: l=!0, window: a=il} = t
      , o = t.type || "page"
      , {x: n, y: i, sourceType: r} = Gp(t)
      , s = Y(e != null ? e : a == null ? void 0 : a.document.body)
      , d = Y(0)
      , c = Y(0)
      , v = Y(0)
      , f = Y(0)
      , p = Y(0)
      , g = Y(0)
      , b = Y(!0);
    let m = () => {}
    ;
    return a && (m = ke([s, n, i], () => {
        const h = Tt(s);
        if (!h)
            return;
        const {left: B, top: $, width: x, height: C} = h.getBoundingClientRect();
        v.value = B + (o === "page" ? a.pageXOffset : 0),
        f.value = $ + (o === "page" ? a.pageYOffset : 0),
        p.value = C,
        g.value = x;
        const T = n.value - v.value
          , F = i.value - f.value;
        b.value = x === 0 || C === 0 || T < 0 || F < 0 || T > x || F > C,
        (l || !b.value) && (d.value = T,
        c.value = F)
    }
    , {
        immediate: !0
    }),
    Xe(document, "mouseleave", () => {
        b.value = !0
    }
    )),
    {
        x: n,
        y: i,
        sourceType: r,
        elementX: d,
        elementY: c,
        elementPositionX: v,
        elementPositionY: f,
        elementHeight: p,
        elementWidth: g,
        isOutside: b,
        stop: m
    }
}
function zu(e) {
    const t = window.getComputedStyle(e);
    if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
        return !0;
    {
        const l = e.parentNode;
        return !l || l.tagName === "BODY" ? !1 : zu(l)
    }
}
function Wp(e) {
    const t = e || window.event
      , l = t.target;
    return zu(l) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.preventDefault(),
    !1)
}
const nn = new WeakMap;
function qp(e, t=!1) {
    const l = Y(t);
    let a = null
      , o = "";
    ke(Op(e), r => {
        const s = on($t(r));
        if (s) {
            const d = s;
            if (nn.get(d) || nn.set(d, d.style.overflow),
            d.style.overflow !== "hidden" && (o = d.style.overflow),
            d.style.overflow === "hidden")
                return l.value = !0;
            if (l.value)
                return d.style.overflow = "hidden"
        }
    }
    , {
        immediate: !0
    });
    const n = () => {
        const r = on($t(e));
        !r || l.value || (Sn && (a = Xe(r, "touchmove", s => {
            Wp(s)
        }
        , {
            passive: !1
        })),
        r.style.overflow = "hidden",
        l.value = !0)
    }
      , i = () => {
        const r = on($t(e));
        !r || !l.value || (Sn && (a == null || a()),
        r.style.overflow = o,
        nn.delete(r),
        l.value = !1)
    }
    ;
    return bl(i),
    w({
        get() {
            return l.value
        },
        set(r) {
            r ? n() : i()
        }
    })
}
function Up(e, t={}) {
    const {threshold: l=50, onSwipe: a, onSwipeEnd: o, onSwipeStart: n, passive: i=!0, window: r=il} = t
      , s = ba({
        x: 0,
        y: 0
    })
      , d = ba({
        x: 0,
        y: 0
    })
      , c = w( () => s.x - d.x)
      , v = w( () => s.y - d.y)
      , {max: f, abs: p} = Math
      , g = w( () => f(p(c.value), p(v.value)) >= l)
      , b = Y(!1)
      , m = w( () => g.value ? p(c.value) > p(v.value) ? c.value > 0 ? "left" : "right" : v.value > 0 ? "up" : "down" : "none")
      , h = j => [j.touches[0].clientX, j.touches[0].clientY]
      , B = (j, L) => {
        s.x = j,
        s.y = L
    }
      , $ = (j, L) => {
        d.x = j,
        d.y = L
    }
    ;
    let x;
    const C = Kp(r == null ? void 0 : r.document);
    i ? x = C ? {
        passive: !0
    } : {
        capture: !1
    } : x = C ? {
        passive: !1,
        capture: !0
    } : {
        capture: !0
    };
    const T = j => {
        b.value && (o == null || o(j, m.value)),
        b.value = !1
    }
      , F = [Xe(e, "touchstart", j => {
        if (j.touches.length !== 1)
            return;
        x.capture && !x.passive && j.preventDefault();
        const [L,Z] = h(j);
        B(L, Z),
        $(L, Z),
        n == null || n(j)
    }
    , x), Xe(e, "touchmove", j => {
        if (j.touches.length !== 1)
            return;
        const [L,Z] = h(j);
        $(L, Z),
        !b.value && g.value && (b.value = !0),
        b.value && (a == null || a(j))
    }
    , x), Xe(e, ["touchend", "touchcancel"], T, x)];
    return {
        isPassiveEventSupported: C,
        isSwiping: b,
        direction: m,
        coordsStart: s,
        coordsEnd: d,
        lengthX: c,
        lengthY: v,
        stop: () => F.forEach(j => j())
    }
}
function Kp(e) {
    if (!e)
        return !1;
    let t = !1;
    const l = {
        get passive() {
            return t = !0,
            !1
        }
    };
    return e.addEventListener("x", At, l),
    e.removeEventListener("x", At),
    t
}
const Yp = ["id"]
  , Xp = ["id"]
  , Zp = ["innerHTML"]
  , Jp = ["innerHTML"]
  , pi = Q({
    inheritAttrs: !1,
    __name: "BPopover",
    props: Ae({
        boundary: {
            default: "clippingAncestors"
        },
        boundaryPadding: {
            default: void 0
        },
        click: {
            type: Boolean,
            default: !1
        },
        content: {
            default: void 0
        },
        customClass: {
            default: ""
        },
        delay: {
            default: () => ({
                show: 100,
                hide: 300
            })
        },
        floatingMiddleware: {
            default: void 0
        },
        html: {
            type: Boolean,
            default: !1
        },
        id: {
            default: void 0
        },
        inline: {
            type: Boolean,
            default: !1
        },
        manual: {
            type: Boolean,
            default: !1
        },
        modelValue: {
            type: Boolean
        },
        noAutoClose: {
            type: Boolean,
            default: !1
        },
        noFade: {
            type: Boolean,
            default: !1
        },
        noFlip: {
            type: Boolean,
            default: !1
        },
        noHide: {
            type: Boolean,
            default: !1
        },
        noShift: {
            type: Boolean,
            default: !1
        },
        noSize: {
            type: Boolean,
            default: !1
        },
        noninteractive: {
            type: Boolean,
            default: !1
        },
        offset: {
            default: null
        },
        placement: {
            default: "top"
        },
        persistent: {
            type: Boolean,
            default: !1
        },
        realtime: {
            type: Boolean,
            default: !1
        },
        reference: {
            default: null
        },
        strategy: {
            default: "absolute"
        },
        target: {
            default: null
        },
        title: {
            default: void 0
        },
        tooltip: {
            type: Boolean,
            default: !1
        },
        variant: {
            default: null
        },
        teleportDisabled: {
            default: !1
        },
        teleportTo: {
            default: void 0
        }
    }, {
        modelValue: {
            type: Boolean,
            default: !1
        },
        modelModifiers: {}
    }),
    emits: Ae(["hidden", "hide", "hide-prevented", "show", "show-prevented", "shown"], ["update:modelValue"]),
    setup(e, {expose: t, emit: l}) {
        const a = oe(e, "BPopover")
          , o = l
          , n = Ne(e, "modelValue")
          , i = Y(n.value)
          , r = Y(n.value);
        Oa( () => {
            n.value = i.value
        }
        ),
        ke(n, X => {
            X !== i.value && (X ? q() : G(new Event("update:modelValue")))
        }
        );
        const s = Me( () => a.id, "popover")
          , d = Y(!1)
          , c = Y(null)
          , v = Y(null)
          , f = Y(null)
          , p = Y(null)
          , g = Y(null)
          , b = w( () => a.title ? Rl(a.title, zl) : "")
          , m = w( () => a.content ? Rl(a.content, zl) : "")
          , h = V( () => a.placement.startsWith("auto"))
          , B = Oe( () => {
            var X;
            return (X = a.offset) != null ? X : NaN
        }
        )
          , $ = w( () => a.boundary === "document" || a.boundary === "viewport" ? void 0 : a.boundary)
          , x = w( () => a.boundary === "document" || a.boundary === "viewport" ? a.boundary : void 0)
          , C = Y({})
          , T = w( () => {
            if (a.floatingMiddleware !== void 0)
                return a.floatingMiddleware;
            const X = a.offset !== null ? B.value : a.tooltip ? 6 : 8
              , le = [Bu(X)];
            return a.noFlip === !1 && !h.value && le.push(Au({
                boundary: $.value,
                rootBoundary: x.value,
                padding: a.boundaryPadding
            })),
            h.value && le.push(cp({
                alignment: a.placement.split("-")[1] || void 0,
                boundary: $.value,
                rootBoundary: x.value,
                padding: a.boundaryPadding
            })),
            a.noShift === !1 && le.push($u({
                boundary: $.value,
                rootBoundary: x.value,
                padding: a.boundaryPadding
            })),
            a.noHide === !1 && le.push(fp({
                boundary: $.value,
                rootBoundary: x.value,
                padding: a.boundaryPadding
            })),
            a.inline === !0 && le.push(pp()),
            le.push(gp({
                element: f,
                padding: 10
            })),
            a.noSize === !1 && le.push(Pu({
                boundary: $.value,
                rootBoundary: x.value,
                padding: a.boundaryPadding,
                apply({availableWidth: _e, availableHeight: he}) {
                    C.value = {
                        maxHeight: he ? `${he}px` : void 0,
                        maxWidth: _e ? `${_e}px` : void 0
                    }
                }
            })),
            le
        }
        )
          , F = V( () => h.value ? void 0 : a.placement)
          , {floatingStyles: j, middlewareData: L, placement: Z, update: de} = Eu(v, c, {
            placement: F,
            middleware: T,
            strategy: V( () => a.strategy),
            whileElementsMounted: (...X) => Vu(...X, {
                animationFrame: a.realtime
            })
        })
          , R = Y({
            position: "absolute"
        });
        ke(L, () => {
            var X;
            if (a.noHide === !1 && ((X = L.value.hide) != null && X.referenceHidden ? d.value = !0 : d.value = !1),
            L.value.arrow) {
                const {x: le, y: _e} = L.value.arrow;
                R.value = {
                    position: "absolute",
                    top: _e ? `${_e}px` : "",
                    left: le ? `${le}px` : ""
                }
            }
        }
        );
        const ee = w( () => {
            const X = a.tooltip ? "tooltip" : "popover";
            return [X, `b-${X}`, {
                [`b-${X}-${a.variant}`]: a.variant !== null,
                show: i.value && !d.value,
                "pe-none": !i.value,
                fade: !a.noFade,
                "d-none": !i.value && a.noFade,
                [`${a.customClass}`]: a.customClass !== void 0,
                [`bs-${X}-${em(Z.value)}`]: Z.value !== void 0
            }]
        }
        )
          , {isOutside: k} = Or(c)
          , {isOutside: P} = Or(p)
          , N = X => {
            const le = X != null ? X : new Event("click");
            i.value ? G(le) : q()
        }
          , D = (X, le={}) => new ta(X,{
            cancelable: !1,
            target: c.value || null,
            relatedTarget: null,
            trigger: null,
            ...le,
            componentId: s.value
        });
        let J;
        const q = () => {
            const X = D("show", {
                cancelable: !0
            });
            if (o("show", X),
            X.defaultPrevented) {
                o("show-prevented");
                return
            }
            r.value = !0,
            it( () => {
                var le;
                de(),
                J = setTimeout( () => {
                    de(),
                    i.value = !0,
                    it( () => {
                        o("shown", D("shown"))
                    }
                    )
                }
                , typeof a.delay == "number" ? a.delay : ((le = a.delay) == null ? void 0 : le.show) || 0)
            }
            )
        }
          , G = X => {
            var le;
            const _e = D("hide", {
                cancelable: !0
            });
            if (o("hide", _e),
            _e.defaultPrevented) {
                o("hide-prevented");
                return
            }
            J && (clearTimeout(J),
            J = void 0);
            const he = typeof a.delay == "number" ? a.delay : ((le = a.delay) == null ? void 0 : le.hide) || 0;
            setTimeout( () => {
                var be, He;
                (X == null ? void 0 : X.type) === "click" || (X == null ? void 0 : X.type) === "forceHide" || (X == null ? void 0 : X.type) === "update:modelValue" && a.manual || !a.noninteractive && k.value && P.value && !((be = c.value) != null && be.contains(document == null ? void 0 : document.activeElement)) && !((He = p.value) != null && He.contains(document == null ? void 0 : document.activeElement)) || a.noninteractive && P.value ? (i.value = !1,
                it( () => {
                    setTimeout( () => {
                        r.value = !1
                    }
                    , c.value ? xn(c.value) : 150),
                    o("hidden", D("hidden"))
                }
                )) : setTimeout( () => {
                    G(X)
                }
                , he < 50 ? 50 : he)
            }
            , he)
        }
        ;
        t({
            hide: G,
            show: q,
            toggle: N
        });
        const z = () => {
            var X;
            if (a.target) {
                const le = $l(a.target);
                le ? p.value = le : console.warn("Target element not found", a.target)
            } else
                p.value = (X = g.value) == null ? void 0 : X.nextElementSibling;
            if (a.reference) {
                const le = $l(a.reference);
                le ? v.value = le : console.warn("Reference element not found", a.reference)
            } else
                v.value = p.value;
            if (!(!p.value || a.manual) && ni) {
                if (p.value.addEventListener("forceHide", G),
                a.click) {
                    p.value.addEventListener("click", N);
                    return
                }
                p.value.addEventListener("pointerenter", q),
                p.value.addEventListener("pointerleave", G),
                p.value.addEventListener("focus", q),
                p.value.addEventListener("blur", G)
            }
        }
          , I = () => {
            p.value && (p.value.removeEventListener("forceHide", G),
            p.value.removeEventListener("click", N),
            p.value.removeEventListener("pointerenter", q),
            p.value.removeEventListener("pointerleave", G),
            p.value.removeEventListener("focus", q),
            p.value.removeEventListener("blur", G))
        }
        ;
        return Hu(c, () => {
            i.value && a.click && !a.noAutoClose && !a.manual && G(new Event("clickOutside"))
        }
        , {
            ignore: [p]
        }),
        ke([ () => a.click, () => a.target, () => a.reference], () => {
            I(),
            z()
        }
        ),
        pt(z),
        Aa(I),
        (X, le) => (y(),
        O(Be, null, [ne("span", {
            id: u(s) + "_placeholder",
            ref_key: "placeholder",
            ref: g
        }, null, 8, Yp), A(X.$slots, "target", {
            show: q,
            hide: G,
            toggle: N,
            showState: i.value
        }), (y(),
        M(Fl, {
            to: u(a).teleportTo,
            disabled: !u(a).teleportTo || u(a).teleportDisabled
        }, [r.value || u(a).persistent ? (y(),
        O("div", ue({
            key: 0,
            id: u(s)
        }, X.$attrs, {
            ref_key: "element",
            ref: c,
            class: ee.value,
            role: "tooltip",
            tabindex: "-1",
            style: u(j)
        }), [ne("div", {
            ref_key: "arrow",
            ref: f,
            class: te(`${u(a).tooltip ? "tooltip" : "popover"}-arrow`),
            style: Qe(R.value),
            "data-popper-arrow": ""
        }, null, 6), ne("div", {
            class: "overflow-auto",
            style: Qe(C.value)
        }, [u(a).title || X.$slots.title ? (y(),
        O(Be, {
            key: 0
        }, [u(a).html ? (y(),
        O("div", {
            key: 1,
            class: te(["position-sticky top-0", u(a).tooltip ? "tooltip-inner" : "popover-header"]),
            innerHTML: b.value
        }, null, 10, Zp)) : (y(),
        O("div", {
            key: 0,
            class: te(["position-sticky top-0", u(a).tooltip ? "tooltip-inner" : "popover-header"])
        }, [A(X.$slots, "title", {}, () => [ye(fe(u(a).title), 1)])], 2))], 64)) : me("", !0), u(a).tooltip && !X.$slots.title && !u(a).title || !u(a).tooltip ? (y(),
        O(Be, {
            key: 1
        }, [u(a).html ? (y(),
        O("div", {
            key: 1,
            class: te(u(a).tooltip ? "tooltip-inner" : "popover-body"),
            innerHTML: m.value
        }, null, 10, Jp)) : (y(),
        O("div", {
            key: 0,
            class: te(u(a).tooltip ? "tooltip-inner" : "popover-body")
        }, [A(X.$slots, "default", {}, () => [ye(fe(u(a).content), 1)])], 2))], 64)) : me("", !0)], 4)], 16, Xp)) : me("", !0)], 8, ["to", "disabled"]))], 64))
    }
})
  , Qp = ({top: e, end: t, start: l, alignCenter: a, alignEnd: o}) => {
    const n = e ? "top" : l ? "left" : t ? "right" : "bottom"
      , i = o ? "end" : a ? null : "start";
    return `${n}${i ? `-${i}` : ""}`
}
  , em = e => {
    const [t] = e.split("-");
    switch (t) {
    case "left":
        return "start";
    case "right":
        return "end";
    default:
        return t
    }
}
  , Va = e => typeof e != "object" || e.active !== !1
  , wo = (e, t) => {
    if (!Va(e))
        return {};
    const l = typeof e > "u" || typeof e == "object" && !e.title && !e.content
      , a = t.getAttribute("title") || t.getAttribute("data-original-title");
    return l ? a ? (t.removeAttribute("title"),
    t.setAttribute("data-original-title", a),
    {
        content: Rl(a, zl)
    }) : {} : typeof e == "string" ? {
        content: Rl(e, zl)
    } : {
        title: e != null && e.title ? Rl(e == null ? void 0 : e.title, zl) : void 0,
        content: e != null && e.content ? Rl(e == null ? void 0 : e.content, zl) : void 0
    }
}
  , xo = (e, t) => ({
    target: t,
    modelValue: e.modifiers.show,
    inline: e.modifiers.inline,
    click: e.modifiers.click,
    realtime: e.modifiers.realtime,
    persistent: e.modifiers.persistent,
    placement: e.modifiers.left ? "left" : e.modifiers.right ? "right" : e.modifiers.bottom ? "bottom" : e.modifiers.top ? "top" : void 0,
    html: !0,
    ...typeof e.value == "object" ? e.value : {},
    ...e.modifiers.interactive ? {
        noninteractive: !1
    } : {},
    title: null,
    content: null
})
  , Co = (e, t, l) => {
    var a;
    const o = document.createElement("span");
    t.modifiers.body ? document.body.appendChild(o) : t.modifiers.child ? e.appendChild(o) : (a = e.parentNode) == null || a.insertBefore(o, e.nextSibling),
    mu(et(pi, l), o),
    e.$__element = o
}
  , ko = e => {
    const t = e.$__element;
    t && mu(null, t),
    setTimeout( () => {
        t == null || t.remove()
    }
    , 0),
    delete e.$__element
}
  , Vn = (e, t, l) => {
    const a = ut(e, t);
    return l && typeof l == "function" ? l(a, t, e) : a
}
  , lo = (e, t, l, a=l) => t.reduce( (o, n) => (e[n] && o.push([a, n.replace(l, ""), e[n]].filter(i => i && typeof i != "boolean").join("-").toLowerCase()),
o), [])
  , $l = e => {
    var t, l, a;
    if (e)
        return typeof e == "string" ? typeof document > "u" ? void 0 : (l = (t = document.getElementById(e)) != null ? t : document.querySelector(e)) != null ? l : void 0 : (a = e.$el) != null ? a : e
}
  , tm = (e, t) => {
    var l;
    return ((l = e == null ? void 0 : e()) != null ? l : []).reduce( (a, o) => (typeof o.type == "symbol" ? a = a.concat(o.children) : a.push(o),
    a), []).filter(a => {
        var o;
        return ((o = a.type) == null ? void 0 : o.__name) === t
    }
    )
}
  , Ru = /_/g
  , Du = /([a-z])([A-Z])/g
  , lm = /^[0-9]*\.?[0-9]+$/
  , am = /(\s|^)(\w)/g
  , om = /(\s|^)(\w)/
  , ao = /\s+/
  , nm = /^#/
  , im = /^#[A-Za-z]+[\w\-:.]*$/
  , rm = /[-/\\^$*+?.()|[\]{}]/g
  , sm = /[\s\uFEFF\xA0]+/g
  , rn = e => e.replace(Ru, " ").replace(Du, (t, l, a) => `${l} ${a}`).replace(om, (t, l, a) => l + a.toUpperCase())
  , Er = e => e.replace(Ru, " ").replace(Du, (t, l, a) => `${l} ${a}`).replace(am, (t, l, a) => l + a.toUpperCase())
  , um = e => {
    const t = e.trim();
    return t.charAt(0).toUpperCase() + t.slice(1)
}
  , dm = e => e.replace(rm, "\\$&")
  , cm = e => dm(e).replace(sm, "\\s")
  , oo = e => typeof e == "string" ? Er(e) : e.label !== void 0 ? e.label : typeof e.key == "string" ? Er(e.key) : e.key
  , fm = e => !!(e.href || e.to)
  , ju = Symbol("bvn::carousel")
  , Gu = Symbol("bvn::tabs")
  , Wu = Symbol("bvn::progress")
  , qu = Symbol("bvn::listGroup")
  , Uu = Symbol("bvn::avatarGroup")
  , Ku = Symbol("bvn::accordion")
  , Yu = Symbol("bvn::checkboxGroup")
  , Xu = Symbol("bvn::radioGroup")
  , mi = Symbol("bvn::collapse")
  , Zu = Symbol("bvn::collapse")
  , hi = Symbol("bvn::navbar")
  , Ju = Symbol("bvn::toastPlugin")
  , Qu = Symbol("bvn::rtlPlugin")
  , ed = Symbol("bvn::breadcrumbPlugin")
  , td = Symbol("bvn::modalControllerPlugin")
  , ld = Symbol("bvn::modalManagerPlugin")
  , ad = Symbol("bvn::idPluginKey")
  , no = Symbol("bvn::defaults")
  , od = Symbol("bvn::inputGroup")
  , ra = (e, t={}, l={}) => {
    const a = [e];
    let o;
    for (let n = 0; n < a.length && !o; n++) {
        const i = a[n];
        o = l[i]
    }
    return o && typeof o == "function" ? o(t) : o
}
  , qo = (e, t) => Object.keys(e).filter(l => !t.map(a => a.toString()).includes(l)).reduce( (l, a) => ({
    ...l,
    [a]: e[a]
}), {})
  , gi = (e, t) => [...t].reduce( (l, a) => (l[a] = e[a],
l), {})
  , ut = (e, t, l) => {
    const a = t.split(/[.[\]]/g);
    let o = e;
    for (const n of a) {
        if (o == null)
            return l;
        n.trim() !== "" && (o = o[n])
    }
    return o === void 0 ? l : o
}
  , vm = (e, t, l) => {
    const a = s => {
        if ((c => c == null || typeof c != "object" && typeof c != "function")(s))
            return s;
        if (typeof s == "function")
            return s.bind({});
        const d = new s.constructor;
        return Object.getOwnPropertyNames(s).forEach(c => {
            d[c] = s[c]
        }
        ),
        d
    }
      , o = (s, d) => {
        const c = d === void 0 ? 0 : d;
        if (s == null)
            return c;
        const v = Number.parseInt(s);
        return Number.isNaN(v) ? c : v
    }
    ;
    if (!e)
        return {};
    if (!t || l === void 0)
        return e;
    const n = t.split(/[.[\]]/g).filter(s => !!s.trim())
      , i = s => {
        if (n.length > 1) {
            const d = n.shift()
              , c = o(n[0], null) !== null;
            s[d] = s[d] === void 0 ? c ? [] : {} : s[d],
            i(s[d])
        } else
            s[n[0]] = l
    }
      , r = a(e);
    return i(r),
    r
}
  , Fr = (e, t) => {
    const {all: l, ...a} = e
      , o = {};
    l && t.forEach(i => {
        o[i] = l
    }
    );
    const n = {
        ...o,
        ...a
    };
    return Object.entries(n).filter( ([i,r]) => !!r && t.includes(i)).map( ([i]) => i)
}
  , Ir = (e, t) => t + (e ? um(e) : "")
  , pm = {
    "top-start": "top-0 start-0",
    "top-center": "top-0 start-50 translate-middle-x",
    "top-end": "top-0 end-0",
    "middle-start": "top-50 start-0 translate-middle-y",
    "middle-center": "top-50 start-50 translate-middle",
    "middle-end": "top-50 end-0 translate-middle-y",
    "bottom-start": "bottom-0 start-0",
    "bottom-center": "bottom-0 start-50 translate-middle-x",
    "bottom-end": "bottom-0 end-0"
}
  , Il = (e, t) => {
    const l = V(t)
      , a = V(e)
      , o = V( () => fm(a.value))
      , n = w( () => {
        var i;
        return o.value ? gi(a.value, (i = l.value) != null ? i : ["active", "activeClass", "append", "href", "rel", "replace", "routerComponentName", "target", "to", "variant", "opacity", "opacityHover", "underlineVariant", "underlineOffset", "underlineOffsetHover", "underlineOpacity", "underlineOpacityHover"]) : {}
    }
    );
    return {
        computedLink: o,
        computedLinkProps: n
    }
}
  , mm = () => ({
    ...qe(ed)
})
  , jt = e => w( () => {
    var l, a, o;
    let t = Ke(e);
    return t = {
        ...t,
        variant: (l = t.variant) != null ? l : null,
        bgVariant: (a = t.bgVariant) != null ? a : null,
        textVariant: (o = t.textVariant) != null ? o : null
    },
    {
        [`text-bg-${t.variant}`]: t.variant !== null,
        [`text-${t.textVariant}`]: t.textVariant !== null && t.variant === null,
        [`bg-${t.bgVariant}`]: t.bgVariant !== null && t.variant === null
    }
}
)
  , hm = e => w( () => {
    const t = Ke(e);
    return {
        container: t === !0,
        [`container-${t}`]: typeof t == "string"
    }
}
)
  , nd = (e, t=Y(1e3), l={}) => {
    const a = ct(V(e))
      , o = ct(V(t))
      , n = Y(!1)
      , i = Y(0)
      , r = V( () => Math.ceil(a.value / o.value))
      , s = V( () => v.value || n.value ? Math.round(a.value - i.value * o.value) : 0)
      , {pause: d, resume: c, isActive: v} = Lu( () => {
        i.value = i.value + 1
    }
    , t, l)
      , f = () => {
        n.value = !1,
        i.value = 0,
        c()
    }
      , p = () => {
        n.value = !1,
        i.value = r.value
    }
    ;
    Oa( () => {
        i.value > r.value && (i.value = r.value),
        i.value === r.value && d()
    }
    ),
    ke([o, a], () => {
        p(),
        f()
    }
    );
    const g = () => {
        v.value !== !1 && (n.value = !0,
        d())
    }
      , b = () => {
        i.value !== r.value && (n.value = !1,
        c())
    }
    ;
    return {
        isActive: ct(v),
        isPaused: ct(n),
        restart: f,
        stop: p,
        pause: g,
        resume: b,
        value: s
    }
}
;
function gm(e, t=id("injectSelf")) {
    const {provides: l} = t;
    if (l && e in l)
        return l[e]
}
function id(e, t) {
    const l = al();
    if (!l)
        throw new Error(`[Bvn] ${e} ${t || "must be called from inside a setup function"}`);
    return l
}
const ym = (e="") => e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase()
  , Nr = e => e !== null && typeof e == "object" && !Array.isArray(e);
function rd(e={}, t={}, l) {
    const a = {};
    for (const o in e)
        a[o] = e[o];
    for (const o in t) {
        const n = e[o]
          , i = t[o];
        if (Nr(n) && Nr(i)) {
            a[o] = rd(n, i, l);
            continue
        }
        if (Array.isArray(n) && Array.isArray(i) && l) {
            a[o] = l(n, i);
            continue
        }
        a[o] = i
    }
    return a
}
const bm = (e, t) => {
    var l, a;
    return typeof ((l = e.props) == null ? void 0 : l[t]) < "u" || typeof ((a = e.props) == null ? void 0 : a[ym(t)]) < "u"
}
;
function Bm(e={}, t) {
    var s;
    const l = qe(no, Y({}))
      , a = id("useDefaults");
    if (t = (s = t != null ? t : a.type.name) != null ? s : a.type.__name,
    !t)
        throw new Error("[Bvn] Could not determine component name");
    const o = w( () => {
        var c;
        var d;
        return (d = l.value) == null ? void 0 : d[(c = e._as) != null ? c : t]
    }
    )
      , n = new Proxy(e,{
        get(d, c) {
            var m, h;
            var v, f, p, g;
            const b = Reflect.get(d, c);
            return c === "class" || c === "style" ? [(v = o.value) == null ? void 0 : v[c], b].filter(B => B != null) : typeof c == "string" && !bm(a.vnode, c) && (h = (m = (f = o.value) == null ? void 0 : f[c]) != null ? m : (g = (p = l.value) == null ? void 0 : p.global) == null ? void 0 : g[c]) != null ? h : b
        }
    })
      , i = wa();
    Oa( () => {
        if (o.value) {
            const d = Object.entries(o.value).filter( ([c]) => c.startsWith(c[0].toUpperCase()));
            i.value = d.length ? Object.fromEntries(d) : void 0
        } else
            i.value = void 0
    }
    );
    function r() {
        const d = gm(no, a);
        ht(no, w( () => {
            var c;
            return i.value ? rd((c = d == null ? void 0 : d.value) != null ? c : {}, i.value) : d == null ? void 0 : d.value
        }
        ))
    }
    return {
        props: n,
        provideSubDefaults: r
    }
}
function oe(e, t) {
    const {props: l, provideSubDefaults: a} = Bm(e, t);
    return a(),
    l
}
const Nl = e => w( () => {
    const t = Ke(e);
    return t === !0 ? "is-valid" : t === !1 ? "is-invalid" : null
}
)
  , sd = e => w( () => {
    const t = Ke(e);
    return {
        "form-check": t.plain === !1 && t.button === !1 && t.hasDefaultSlot,
        "form-check-reverse": t.reverse === !0,
        "form-check-inline": t.inline === !0,
        "form-switch": t.switch === !0,
        [`form-control-${t.size}`]: t.size !== void 0 && t.size !== "md" && t.button === !1
    }
}
)
  , ud = e => {
    const t = V(e)
      , l = Nl( () => {
        var a;
        return (a = t.value.state) != null ? a : null
    }
    );
    return w( () => [l.value, {
        "form-check-input": t.value.plain === !1 && t.value.button === !1,
        "btn-check": t.value.button === !0
    }])
}
  , dd = e => w( () => {
    const t = Ke(e);
    return {
        "form-check-label": t.plain === !1 && t.button === !1,
        btn: t.button === !0,
        [`btn-${t.buttonVariant}`]: t.button === !0 && t.buttonVariant !== void 0 && t.buttonVariant !== null,
        [`btn-${t.size}`]: t.button && t.size && t.size !== "md"
    }
}
)
  , cd = e => {
    const t = V(e)
      , l = jo( () => t.value.ariaInvalid, () => t.value.state);
    return w( () => ({
        "aria-invalid": l.value,
        "aria-required": t.value.required === !0 ? !0 : void 0
    }))
}
  , fd = e => w( () => {
    const t = Ke(e);
    return {
        "was-validated": t.validated === !0,
        "btn-group": t.buttons === !0 && t.stacked === !1,
        "btn-group-vertical": t.stacked === !0 && t.buttons === !0,
        [`btn-group-${t.size}`]: t.size !== void 0
    }
}
)
  , Me = (e, t) => w( () => Ke(e) || _m(t))
  , _m = (e="") => `__BVID__${qe(ad, () => Math.random().toString().slice(2, 8))()}___BV_${e}__`
  , vd = (e, t, l) => {
    const a = Y(null)
      , o = Me( () => e.id, "input")
      , n = Oe( () => {
        var f;
        return (f = e.debounce) != null ? f : 0
    }
    )
      , i = Oe( () => {
        var f;
        return (f = e.debounceMaxWait) != null ? f : NaN
    }
    )
      , r = Ep(f => {
        t.value = f
    }
    , () => l.lazy === !0 ? 0 : n.value, {
        maxWait: () => l.lazy === !0 ? NaN : i.value
    })
      , s = (f, p=!1) => {
        l.lazy === !0 && p === !1 || r(f)
    }
      , {focused: d} = ft(a, {
        initialValue: e.autofocus
    })
      , c = (f, p, g=!1) => e.formatter !== void 0 && (!e.lazyFormatter || g) ? e.formatter(f, p) : f;
    pt( () => {
        var p;
        var f;
        a.value && (a.value.value = (p = (f = t.value) == null ? void 0 : f.toString()) != null ? p : "")
    }
    ),
    qs( () => {
        it( () => {
            e.autofocus && (d.value = !0)
        }
        )
    }
    );
    const v = jo( () => e.ariaInvalid, () => e.state);
    return {
        input: a,
        computedId: o,
        computedAriaInvalid: v,
        onInput: f => {
            const {value: p} = f.target
              , g = c(p, f);
            if (f.defaultPrevented) {
                f.preventDefault();
                return
            }
            s(g)
        }
        ,
        onChange: f => {
            const {value: p} = f.target
              , g = c(p, f);
            if (f.defaultPrevented) {
                f.preventDefault();
                return
            }
            const b = g;
            t.value !== b && s(g, !0)
        }
        ,
        onBlur: f => {
            if (!l.lazy && !e.lazyFormatter)
                return;
            const {value: p} = f.target
              , g = c(p, f, !0)
              , b = g;
            t.value !== b && s(g, !0)
        }
        ,
        focus: () => {
            e.disabled || (d.value = !0)
        }
        ,
        blur: () => {
            e.disabled || (d.value = !1)
        }
    }
}
  , pd = (e, t) => {
    const l = n => typeof n == "object" && n !== null && "label"in n
      , a = n => {
        if (typeof n == "string")
            return {
                value: n,
                text: n
            };
        if (typeof n == "number")
            return {
                value: n,
                text: `${n}`
            };
        if (n instanceof Date)
            return {
                value: n,
                text: n.toLocaleString()
            };
        const i = ut(n, t.valueField)
          , r = ut(n, t.textField)
          , s = ut(n, t.htmlField)
          , d = ut(n, t.disabledField)
          , c = t.optionsField ? ut(n, t.optionsField) : void 0;
        return c !== void 0 ? {
            label: ut(n, t.labelField) || r,
            options: c
        } : {
            value: i,
            text: r,
            html: s,
            disabled: d
        }
    }
      , o = n => n.map(i => a(i));
    return {
        normalizedOptions: w( () => o(Ke(e))),
        isComplex: l
    }
}
  , sn = "modal-open"
  , md = () => {
    const e = qe(ld)
      , t = a => {
        e == null || e.removeStack(a),
        e == null || e.removeRegistry(a)
    }
      , l = Rp("updateHTMLAttrs", (a, o, n) => {
        const i = typeof a == "string" ? window == null ? void 0 : window.document.querySelector(a) : Tt(a);
        i && (o === "class" ? i.classList.toggle(sn, n === sn) : i.setAttribute(o, n))
    }
    );
    return bl( () => {
        l("body", "class", "")
    }
    ),
    ke( () => e == null ? void 0 : e.countStack.value, a => {
        a !== void 0 && l("body", "class", a > 0 ? sn : "")
    }
    ),
    {
        ...e,
        dispose: t
    }
}
  , wm = e => {
    const {pushRegistry: t, pushStack: l, removeStack: a, stack: o, dispose: n, countStack: i} = md()
      , r = al();
    if (!r || r.type.__name !== "BModal")
        throw new Error("useModalManager must only use in BModal component");
    return t == null || t(r),
    bl( () => {
        n(r)
    }
    ),
    ke(e, (s, d) => {
        s ? l == null || l(r) : d && !s && (a == null || a(r))
    }
    , {
        immediate: !0
    }),
    {
        activePosition: w( () => o == null ? void 0 : o.value.findIndex(s => {
            var d, c;
            return ((d = s.exposed) == null ? void 0 : d.id) === ((c = r.exposed) == null ? void 0 : c.id)
        }
        )),
        activeModalCount: i
    }
}
  , xm = () => {
    const {lastStack: e, stack: t} = md();
    return {
        ...qe(td),
        hide: (l="") => {
            var a;
            e != null && e.value && ((a = e == null ? void 0 : e.value.exposed) == null || a.hide(l))
        }
        ,
        hideAll: (l="") => {
            t == null || t.value.forEach(a => {
                var o;
                (o = a.exposed) == null || o.hide(l)
            }
            )
        }
    }
}
  , So = (e, t="px") => w( () => {
    const l = Ke(e)
      , a = Ke(t);
    return lm.test(String(l)) ? `${Number(l)}${a}` : l
}
)
  , yi = e => {
    const t = (l, a) => {
        const o = a === null ? "" : `${a}-`;
        return l === "circle" ? `${o}rounded-circle` : l === "pill" ? `${o}rounded-pill` : typeof l == "number" || l === "0" || l === "1" || l === "2" || l === "3" || l === "4" || l === "5" ? `${o}rounded-${l}` : l === "none" ? `${o}rounded-0` : l === "sm" ? `${o}rounded-1` : l === "lg" ? `${o}rounded-5` : `${o}rounded`
    }
    ;
    return w( () => {
        const l = Ke(e);
        return {
            [`${t(l.rounded, null)}`]: !!l.rounded,
            [`${t(l.roundedTop, "top")}`]: !!l.roundedTop,
            [`${t(l.roundedBottom, "bottom")}`]: !!l.roundedBottom,
            [`${t(l.roundedStart, "start")}`]: !!l.roundedStart,
            [`${t(l.roundedEnd, "end")}`]: !!l.roundedEnd
        }
    }
    )
}
  , Cm = () => {
    const e = qe(Qu);
    return pt( () => {
        ke([ () => e == null ? void 0 : e.isRtl.value, () => e == null ? void 0 : e.locale.value], ([t,l]) => {
            const a = document.documentElement;
            a.setAttribute("dir", t != null && t ? "rtl" : "ltr"),
            a.setAttribute("lang", l != null ? l : "")
        }
        , {
            immediate: !0
        })
    }
    ),
    {
        ...e
    }
}
  , hd = (e, t) => {
    const l = ct(V(e))
      , a = ct(V(t))
      , o = V( () => !a.value);
    pt( () => {
        const n = qp(document.body, l.value && o.value);
        ke([l, o], ([i,r]) => {
            n.value = i && r
        }
        )
    }
    )
}
  , km = (e, t, l={}) => {
    const a = V(e)
      , o = V(t)
      , n = Y($l(a.value))
      , i = Y($l(o.value));
    ke([a, o], () => {
        h()
    }
    );
    const {contentQuery: r=":scope > [id]", targetQuery: s="[href]", manual: d=!1, root: c, rootMargin: v="0px 0px -25%", threshold: f=[.1, .5, 1], watchChanges: p=!0} = l
      , g = Y(null)
      , b = Y([])
      , m = Y([]);
    al() ? pt( () => {
        Tn(a, n, {
            transform: {
                ltr: L => $l(L)
            },
            direction: "ltr",
            immediate: !0
        }),
        Tn(o, i, {
            transform: {
                ltr: L => $l(L)
            },
            direction: "ltr",
            immediate: !0
        }),
        h()
    }
    ) : it( () => {
        h()
    }
    );
    const h = () => {
        m.value = n.value ? Array.from(n.value.querySelectorAll(r)) : [],
        b.value = m.value.map(L => ({
            id: L.id,
            el: L,
            visible: !1,
            text: L.textContent
        }))
    }
    ;
    let B = !0
      , $ = 0;
    const x = w( () => n.value && getComputedStyle(n.value).overflowY === "visible" ? null : n.value)
      , C = Dp(m, L => {
        var Z, de, R, ee;
        const k = (Z = x.value || (document == null ? void 0 : document.documentElement)) == null ? void 0 : Z.scrollTop;
        B = k > $,
        $ = k,
        L.forEach(N => {
            if (N.isIntersecting) {
                b.value.forEach(D => {
                    D.el === N.target && (D.visible = !0)
                }
                );
                return
            }
            b.value.forEach(D => {
                D.el === N.target && (D.visible = !1)
            }
            )
        }
        );
        let P = null;
        B ? P = ((de = [...b.value].reverse().find(N => N.visible)) == null ? void 0 : de.id) || null : P = ((R = b.value.find(N => N.visible)) == null ? void 0 : R.id) || null,
        P !== null && (g.value = P),
        g.value || (g.value = ((ee = b.value[0]) == null ? void 0 : ee.id) || null)
    }
    , {
        root: c ? $l(c) : x,
        rootMargin: v,
        threshold: f
    });
    ke(g, L => {
        var Z;
        if (d)
            return;
        const de = (Z = i.value) == null ? void 0 : Z.querySelectorAll(s);
        if (de === void 0)
            return;
        let R = !1
          , ee = null;
        de.forEach(k => {
            var P, N, D, J, q, G, z, I, X, le, _e;
            const he = k.closest(".dropdown");
            if ((P = k.getAttribute("href")) != null && P.includes(`#${L}`)) {
                ee = k,
                k.classList.add("active"),
                he && ((N = he == null ? void 0 : he.querySelector(".dropdown-toggle")) == null || N.classList.add("active"),
                R = !0);
                let be = (D = k.closest(".nav")) == null ? void 0 : D.previousSibling;
                for (; (J = be == null ? void 0 : be.classList) != null && J.contains("nav-item"); )
                    R = !0,
                    (q = be.querySelector(".nav-link")) == null || q.classList.add("active"),
                    be = (G = be.closest(".nav")) == null ? void 0 : G.previousSibling
            } else if (k.classList.remove("active"),
            he && !R && ((z = he == null ? void 0 : he.querySelector(".dropdown-toggle")) == null || z.classList.remove("active")),
            !R) {
                let be = (I = k.closest(".nav")) == null ? void 0 : I.previousSibling;
                for (; (X = be == null ? void 0 : be.classList) != null && X.contains("nav-item"); )
                    R = !0,
                    be.querySelector(".nav-link") !== ee && ((le = be.querySelector(".nav-link")) == null || le.classList.remove("active")),
                    be = (_e = be.closest(".nav")) == null ? void 0 : _e.previousSibling
            }
        }
        )
    }
    );
    const T = p ? Hp(n, () => {
        h()
    }
    , {
        childList: !0
    }) : {
        stop: () => {}
    }
      , F = (L, Z=!1) => {
        var de, R;
        L.preventDefault();
        const ee = (R = (de = L.target) == null ? void 0 : de.getAttribute) == null ? void 0 : R.call(de, "href")
          , k = ee ? document == null ? void 0 : document.querySelector(ee) : null;
        k && n.value && (n.value.scrollTo ? n.value.scrollTo({
            top: k.offsetTop,
            behavior: Z ? "smooth" : "auto"
        }) : n.value.scrollTop = k.offsetTop)
    }
      , j = () => {
        C.stop(),
        T.stop()
    }
    ;
    return {
        current: ct(g),
        list: b,
        content: n,
        target: i,
        scrollIntoView: F,
        updateList: h,
        cleanup: j
    }
}
  , Sm = () => ({
    ...qe(Ju)
})
  , Tm = e => w( () => {
    const t = {
        name: "",
        enterActiveClass: "",
        enterToClass: "",
        leaveActiveClass: "",
        leaveToClass: "showing",
        enterFromClass: "showing",
        leaveFromClass: "",
        css: !0
    }
      , l = {
        ...t,
        name: "fade",
        enterActiveClass: "fade showing",
        leaveActiveClass: "fade showing"
    };
    return Ke(e) ? t : l
}
)
  , La = Q({
    __name: "BTransition",
    props: {
        appear: {
            type: Boolean,
            default: !1
        },
        mode: {
            default: void 0
        },
        noFade: {
            type: Boolean,
            default: !1
        },
        transProps: {
            default: void 0
        }
    },
    emits: ["after-appear", "after-enter", "after-leave", "appear", "before-appear", "before-enter", "before-leave", "enter", "appear-cancelled", "enter-cancelled", "leave", "leave-cancelled"],
    setup(e, {emit: t}) {
        const l = oe(e, "BTransition")
          , a = t
          , o = w( () => {
            const i = {
                name: "",
                enterActiveClass: "",
                enterToClass: "",
                leaveActiveClass: "",
                leaveToClass: "showing",
                enterFromClass: "showing",
                leaveFromClass: ""
            }
              , r = {
                ...i,
                enterActiveClass: "fade showing",
                leaveActiveClass: "fade showing"
            };
            return l.noFade ? i : r
        }
        )
          , n = w( () => ({
            mode: l.mode,
            css: !0,
            ...o.value
        }));
        return (i, r) => (y(),
        M(Ro, ue({
            ...n.value,
            ...u(l).transProps
        }, {
            appear: u(l).appear,
            onAfterAppear: r[0] || (r[0] = s => a("after-appear", s)),
            onAfterEnter: r[1] || (r[1] = s => a("after-enter", s)),
            onAfterLeave: r[2] || (r[2] = s => a("after-leave", s)),
            onAppear: r[3] || (r[3] = s => a("appear", s)),
            onBeforeAppear: r[4] || (r[4] = s => a("before-appear", s)),
            onBeforeEnter: r[5] || (r[5] = s => a("before-enter", s)),
            onBeforeLeave: r[6] || (r[6] = s => a("before-leave", s)),
            onEnter: r[7] || (r[7] = s => a("enter", s)),
            onAppearCancelled: r[8] || (r[8] = s => a("appear-cancelled", s)),
            onEnterCancelled: r[9] || (r[9] = s => a("enter-cancelled", s)),
            onLeave: r[10] || (r[10] = s => a("leave", s)),
            onLeaveCancelled: r[11] || (r[11] = s => a("leave-cancelled", s))
        }), {
            default: E( () => [A(i.$slots, "default")]),
            _: 3
        }, 16, ["appear"]))
    }
})
  , Vm = ["type", "disabled", "aria-label"]
  , aa = Q({
    __name: "BCloseButton",
    props: {
        ariaLabel: {
            default: "Close"
        },
        disabled: {
            type: Boolean,
            default: !1
        },
        type: {
            default: "button"
        }
    },
    emits: ["click"],
    setup(e, {emit: t}) {
        const l = oe(e, "BCloseButton")
          , a = t;
        return (o, n) => (y(),
        O("button", {
            type: u(l).type,
            class: "btn-close",
            disabled: u(l).disabled,
            "aria-label": u(l).ariaLabel,
            onClick: n[0] || (n[0] = i => a("click", i))
        }, null, 8, Vm))
    }
})
  , Lr = "active"
  , qt = Q({
    __name: "BLink",
    props: {
        active: {
            type: Boolean,
            default: void 0
        },
        activeClass: {
            default: "router-link-active"
        },
        disabled: {
            type: Boolean,
            default: !1
        },
        exactActiveClass: {
            default: "router-link-exact-active"
        },
        href: {
            default: void 0
        },
        icon: {
            type: Boolean,
            default: !1
        },
        stretched: {
            type: Boolean,
            default: !1
        },
        opacity: {
            default: void 0
        },
        opacityHover: {
            default: void 0
        },
        rel: {
            default: void 0
        },
        replace: {
            type: Boolean,
            default: !1
        },
        routerComponentName: {
            default: "router-link"
        },
        routerTag: {
            default: "a"
        },
        target: {
            default: void 0
        },
        to: {
            default: void 0
        },
        underlineOffset: {
            default: void 0
        },
        underlineOffsetHover: {
            default: void 0
        },
        underlineOpacity: {
            default: void 0
        },
        underlineOpacityHover: {
            default: void 0
        },
        underlineVariant: {
            default: null
        },
        variant: {
            default: null
        },
        prefetch: {
            type: Boolean
        },
        noPrefetch: {
            type: Boolean
        },
        prefetchedClass: {},
        noRel: {
            type: Boolean
        }
    },
    emits: ["click"],
    setup(e, {emit: t}) {
        const l = oe(e, "BLink")
          , a = t
          , o = Pa()
          , n = qe(mi, null)
          , i = qe(hi, null)
          , r = al()
          , s = w( () => {
            const g = l.routerComponentName.split("-").map(b => b.charAt(0).toUpperCase() + b.slice(1)).join("");
            return (r == null ? void 0 : r.appContext.app.component(g)) === void 0 || l.disabled || !l.to ? "a" : l.routerComponentName
        }
        )
          , d = w( () => {
            const g = "#";
            if (l.href)
                return l.href;
            if (typeof l.to == "string")
                return l.to || g;
            const {to: b} = l;
            if (b !== void 0 && "path"in b) {
                const m = b.path || ""
                  , h = b.query ? `?${Object.keys(b.query).map($ => {
                    var x;
                    return `${$}=${(x = b.query) == null ? void 0 : x[$]}`
                }
                ).join("=")}` : ""
                  , B = !b.hash || b.hash.charAt(0) === "#" ? b.hash || "" : `#${b.hash}`;
                return `${m}${h}${B}` || g
            }
            return g
        }
        )
          , c = w( () => ({
            [`link-${l.variant}`]: l.variant !== null,
            [`link-opacity-${l.opacity}`]: l.opacity !== void 0,
            [`link-opacity-${l.opacityHover}-hover`]: l.opacityHover !== void 0,
            [`link-underline-${l.underlineVariant}`]: l.underlineVariant !== null,
            [`link-offset-${l.underlineOffset}`]: l.underlineOffset !== void 0,
            [`link-offset-${l.underlineOffsetHover}-hover`]: l.underlineOffsetHover !== void 0,
            [`link-underline-opacity-${l.underlineOpacity}`]: l.underlineOpacity !== void 0,
            [`link-underline-opacity-${l.underlineOpacityHover}-hover`]: l.underlineOpacityHover !== void 0,
            "icon-link": l.icon === !0,
            "stretched-link": l.stretched === !0
        }))
          , v = w( () => {
            var g;
            return {
                class: c.value,
                to: l.to,
                replace: l.replace,
                href: d.value,
                target: l.target,
                rel: l.target === "_blank" ? (g = l.rel) != null ? g : "noopener" : void 0,
                tabindex: l.disabled ? "-1" : typeof o.tabindex > "u" ? null : o.tabindex,
                "aria-disabled": l.disabled ? !0 : null
            }
        }
        )
          , f = w( () => ({
            [Lr]: l.active,
            disabled: l.disabled
        }))
          , p = g => {
            var b, m, h;
            if (l.disabled) {
                g.preventDefault(),
                g.stopImmediatePropagation();
                return
            }
            (((b = n == null ? void 0 : n.isNav) == null ? void 0 : b.value) === !0 && i === null || i !== null && ((m = i.autoClose) == null ? void 0 : m.value) === !0) && ((h = n == null ? void 0 : n.hide) == null || h.call(n)),
            a("click", g)
        }
        ;
        return (g, b) => s.value === "router-link" ? (y(),
        M(xe(s.value), ue({
            key: 0
        }, v.value, {
            custom: ""
        }), {
            default: E( ({href: m, navigate: h, isActive: B, isExactActive: $}) => [(y(),
            M(xe(u(l).routerTag), ue({
                href: m,
                class: {
                    [Lr]: u(l).active,
                    [u(l).activeClass]: B,
                    [u(l).exactActiveClass]: $
                }
            }, g.$attrs, {
                onClick: x => {
                    h(x),
                    p(x)
                }
            }), {
                default: E( () => [A(g.$slots, "default")]),
                _: 2
            }, 1040, ["href", "class", "onClick"]))]),
            _: 3
        }, 16)) : (y(),
        M(xe(s.value), ue({
            key: 1,
            class: f.value
        }, v.value, {
            onClick: p
        }), {
            default: E( () => [A(g.$slots, "default")]),
            _: 3
        }, 16, ["class"]))
    }
})
  , $m = ["aria-valuenow", "aria-valuemax"]
  , gd = Q({
    __name: "BProgressBar",
    props: {
        animated: {
            type: Boolean,
            default: !1
        },
        label: {
            default: void 0
        },
        labelHtml: {
            default: void 0
        },
        max: {
            default: void 0
        },
        precision: {
            default: 0
        },
        showProgress: {
            type: Boolean,
            default: !1
        },
        showValue: {
            type: Boolean,
            default: !1
        },
        striped: {
            type: Boolean,
            default: !1
        },
        value: {
            default: 0
        },
        variant: {
            default: null
        },
        bgVariant: {
            default: null
        },
        textVariant: {
            default: null
        }
    },
    setup(e) {
        const t = oe(e, "BProgressBar")
          , l = qe(Wu, null)
          , a = jt(t)
          , o = w( () => [a.value, {
            "progress-bar-animated": t.animated || (l == null ? void 0 : l.animated.value),
            "progress-bar-striped": t.striped || (l == null ? void 0 : l.striped.value) || t.animated || (l == null ? void 0 : l.animated.value)
        }])
          , n = Oe( () => t.precision)
          , i = Oe( () => t.value)
          , r = Oe( () => {
            var v;
            return (v = t.max) != null ? v : NaN
        }
        )
          , s = Oe( () => {
            var v;
            return (v = l == null ? void 0 : l.max.value) != null ? v : NaN
        }
        )
          , d = w( () => t.labelHtml !== void 0 ? t.labelHtml : t.showValue || l != null && l.showValue.value ? i.value.toFixed(n.value) : t.showProgress || l != null && l.showProgress.value ? (i.value * 100 / (r.value || 100)).toFixed(n.value) : t.label !== void 0 ? t.label : "")
          , c = w( () => s.value ? `${i.value * 100 / s.value}%` : r.value ? `${i.value * 100 / r.value}%` : typeof t.value == "string" ? t.value : `${t.value}%`);
        return (v, f) => (y(),
        O("div", {
            class: te(["progress-bar", o.value]),
            role: "progressbar",
            "aria-valuenow": u(t).value,
            "aria-valuemin": "0",
            "aria-valuemax": u(t).max,
            style: Qe({
                width: c.value
            })
        }, [A(v.$slots, "default", {}, () => [ye(fe(d.value), 1)])], 14, $m))
    }
})
  , yd = Q({
    __name: "BProgress",
    props: {
        height: {
            default: void 0
        },
        animated: {
            type: Boolean,
            default: void 0
        },
        max: {
            default: 100
        },
        precision: {
            default: void 0
        },
        showProgress: {
            type: Boolean,
            default: void 0
        },
        showValue: {
            type: Boolean,
            default: void 0
        },
        striped: {
            type: Boolean,
            default: void 0
        },
        value: {
            default: void 0
        },
        variant: {
            default: void 0
        },
        bgVariant: {
            default: void 0
        },
        textVariant: {
            default: void 0
        }
    },
    setup(e) {
        const t = oe(e, "BProgress");
        return ht(Wu, {
            animated: V( () => t.animated),
            max: V( () => t.max),
            showProgress: V( () => t.showProgress),
            showValue: V( () => t.showValue),
            striped: V( () => t.striped)
        }),
        (l, a) => (y(),
        O("div", {
            class: "progress",
            style: Qe({
                height: u(t).height
            })
        }, [A(l.$slots, "default", {}, () => [pe(gd, {
            animated: u(t).animated,
            max: u(t).max,
            precision: u(t).precision,
            "show-progress": u(t).showProgress,
            "show-value": u(t).showValue,
            striped: u(t).striped,
            value: u(t).value,
            variant: u(t).variant,
            "text-variant": u(t).textVariant,
            "bg-variant": u(t).bgVariant
        }, null, 8, ["animated", "max", "precision", "show-progress", "show-value", "striped", "value", "variant", "text-variant", "bg-variant"])])], 4))
    }
})
  , Am = ["id", "role", "aria-live", "aria-atomic"]
  , Pm = {
    class: "me-auto"
}
  , bd = Q({
    __name: "BToast",
    props: Ae({
        body: {
            default: void 0
        },
        bodyClass: {
            default: void 0
        },
        headerClass: {
            default: void 0
        },
        headerTag: {
            default: "div"
        },
        id: {
            default: void 0
        },
        interval: {
            default: 1e3
        },
        isStatus: {
            type: Boolean,
            default: !1
        },
        modelValue: {
            type: [Boolean, Number]
        },
        noCloseButton: {
            type: Boolean,
            default: !1
        },
        noFade: {
            type: Boolean,
            default: !1
        },
        noHoverPause: {
            type: Boolean,
            default: !1
        },
        progressProps: {
            default: void 0
        },
        showOnPause: {
            type: Boolean,
            default: !0
        },
        solid: {
            type: Boolean,
            default: !1
        },
        title: {
            default: void 0
        },
        toastClass: {
            default: void 0
        },
        transProps: {
            default: void 0
        },
        variant: {
            default: void 0
        },
        bgVariant: {
            default: null
        },
        textVariant: {
            default: null
        },
        active: {
            type: Boolean,
            default: void 0
        },
        activeClass: {
            default: void 0
        },
        disabled: {
            type: Boolean,
            default: void 0
        },
        exactActiveClass: {
            default: void 0
        },
        href: {
            default: void 0
        },
        icon: {
            type: Boolean,
            default: void 0
        },
        stretched: {
            type: Boolean,
            default: !1
        },
        opacity: {
            default: void 0
        },
        opacityHover: {
            default: void 0
        },
        rel: {
            default: void 0
        },
        replace: {
            type: Boolean,
            default: void 0
        },
        routerComponentName: {
            default: void 0
        },
        target: {
            default: void 0
        },
        to: {
            default: void 0
        },
        underlineOffset: {
            default: void 0
        },
        underlineOffsetHover: {
            default: void 0
        },
        underlineOpacity: {
            default: void 0
        },
        underlineOpacityHover: {
            default: void 0
        },
        underlineVariant: {
            default: void 0
        },
        prefetch: {
            type: Boolean
        },
        noPrefetch: {
            type: Boolean
        },
        prefetchedClass: {},
        noRel: {
            type: Boolean
        }
    }, {
        modelValue: {
            type: [Boolean, Number],
            default: !1
        },
        modelModifiers: {}
    }),
    emits: Ae(["close", "close-countdown", "hide", "hidden", "show", "shown", "show-prevented", "hide-prevented"], ["update:modelValue"]),
    setup(e, {expose: t, emit: l}) {
        const a = oe(e, "BToast")
          , o = l
          , n = Y(null)
          , i = vi(n)
          , r = Ne(e, "modelValue")
          , {computedLink: s, computedLinkProps: d} = Il(a)
          , c = Oe( () => a.interval)
          , v = jt(a)
          , f = V( () => typeof r.value == "boolean" ? 0 : r.value)
          , {isActive: p, pause: g, restart: b, resume: m, stop: h, isPaused: B, value: $} = nd(f, c, {
            immediate: typeof r.value == "number"
        });
        Oa( () => {
            o("close-countdown", $.value)
        }
        );
        const x = V( () => s.value ? qt : "div")
          , C = V( () => typeof r.value == "boolean" ? r.value : p.value || a.showOnPause && B.value)
          , T = w( () => [v.value, {
            show: C.value
        }])
          , F = () => {
            a.noHoverPause || g()
        }
        ;
        ke(i, k => {
            if (k) {
                F();
                return
            }
            m()
        }
        );
        const j = (k, P={}) => new ta(k,{
            cancelable: !1,
            target: n.value || null,
            relatedTarget: null,
            trigger: null,
            ...P,
            componentId: a.id
        })
          , L = () => {
            const k = j("show", {
                cancelable: !0
            });
            if (o("show", k),
            k.defaultPrevented) {
                r.value && (r.value = !1),
                o("show-prevented");
                return
            }
            r.value || (r.value = !0)
        }
          , Z = (k="") => {
            const P = j("hide", {
                cancelable: k !== "",
                trigger: k
            });
            if (o("hide", P),
            k === "close" && o("close", P),
            P.defaultPrevented) {
                o("hide-prevented"),
                r.value || (r.value = !0);
                return
            }
            typeof r.value == "boolean" ? r.value = !1 : (r.value = 0,
            h())
        }
          , de = () => {
            L()
        }
          , R = () => {
            o("shown", j("shown"))
        }
          , ee = () => {
            o("hidden", j("hidden"))
        }
        ;
        return ke(p, k => {
            k === !1 && B.value === !1 && r.value && Z()
        }
        ),
        Aa(h),
        t({
            pause: g,
            restart: b,
            resume: m,
            stop: h
        }),
        (k, P) => (y(),
        M(La, ue({
            "no-fade": u(a).noFade
        }, u(a).transProps, {
            onBeforeEnter: de,
            onAfterEnter: R,
            onAfterLeave: ee
        }), {
            default: E( () => [C.value ? (y(),
            O("div", {
                key: 0,
                id: u(a).id,
                ref_key: "element",
                ref: n,
                class: te(["toast", [u(a).toastClass, T.value]]),
                tabindex: "0",
                role: C.value ? u(a).isStatus ? "status" : "alert" : void 0,
                "aria-live": C.value ? u(a).isStatus ? "polite" : "assertive" : void 0,
                "aria-atomic": C.value ? !0 : void 0
            }, [k.$slots.title || u(a).title ? (y(),
            M(xe(u(a).headerTag), {
                key: 0,
                class: "toast-header"
            }, {
                default: E( () => [A(k.$slots, "title", {
                    hide: Z
                }, () => [ne("strong", Pm, fe(u(a).title), 1)]), u(a).noCloseButton ? me("", !0) : (y(),
                M(aa, {
                    key: 0,
                    onClick: P[0] || (P[0] = N => Z("close"))
                }))]),
                _: 3
            })) : me("", !0), k.$slots.default || u(a).body ? (y(),
            M(xe(x.value), ue({
                key: 1,
                class: ["toast-body", u(a).bodyClass],
                style: {
                    display: "block"
                }
            }, u(d), {
                onClick: P[1] || (P[1] = N => u(s) ? Z() : () => {}
                )
            }), {
                default: E( () => [A(k.$slots, "default", {
                    hide: Z
                }, () => [ye(fe(u(a).body), 1)])]),
                _: 3
            }, 16, ["class"])) : me("", !0), typeof r.value == "number" && u(a).progressProps !== void 0 ? (y(),
            M(yd, {
                key: 2,
                animated: u(a).progressProps.animated,
                precision: u(a).progressProps.precision,
                "show-progress": u(a).progressProps.showProgress,
                "show-value": u(a).progressProps.showValue,
                striped: u(a).progressProps.striped,
                variant: u(a).progressProps.variant,
                max: r.value,
                value: u($),
                height: "4px"
            }, null, 8, ["animated", "precision", "show-progress", "show-value", "striped", "variant", "max", "value"])) : me("", !0)], 10, Am)) : me("", !0)]),
            _: 3
        }, 16, ["no-fade"]))
    }
})
  , Om = "top-end"
  , Em = {
    install(e) {
        const t = Y([])
          , l = Y(!1)
          , a = r => {
            l.value = r
        }
          , o = r => {
            var s;
            const d = Symbol()
              , c = Y(((s = Ke(r.props)) == null ? void 0 : s.value) || 5e3)
              , v = w({
                get: () => {
                    var p;
                    const f = Ke(r.props);
                    return {
                        component: (p = Ke(r.component)) != null ? p : bd,
                        props: {
                            ...f,
                            pos: (f == null ? void 0 : f.pos) || Om,
                            _modelValue: c.value,
                            _self: d
                        }
                    }
                }
                ,
                set: f => {
                    c.value = f.props._modelValue
                }
            });
            return (v.value.props.appendToast !== void 0 ? v.value.props.appendToast : l.value) ? t.value.push(v) : t.value.unshift(v),
            d
        }
          , n = r => {
            t.value = t.value.filter(s => s.value.props._self !== r)
        }
          , i = r => {
            const s = t.value.find(d => d.value.props._self === r);
            s !== void 0 && (s.value = {
                ...s.value,
                props: {
                    ...s.value.props,
                    _modelValue: !1
                }
            })
        }
        ;
        e.provide(Ju, {
            _setIsAppend: a,
            toasts: t,
            show: o,
            remove: n,
            leave: i
        })
    }
}
  , Fm = {
    install(e) {
        const t = Y([])
          , l = () => {
            t.value.splice(0, t.value.length)
        }
        ;
        e.provide(ed, {
            items: t,
            reset: l
        })
    }
}
  , Im = {
    install(e, t) {
        (t == null ? void 0 : t.id)instanceof Object && typeof t.id.getId == "function" && e.provide(ad, t.id.getId)
    }
}
  , Nm = {
    key: 0,
    class: "visually-hidden"
}
  , Uo = Q({
    __name: "BSpinner",
    props: {
        label: {
            default: void 0
        },
        role: {
            default: "status"
        },
        small: {
            type: Boolean,
            default: !1
        },
        tag: {
            default: "span"
        },
        type: {
            default: "border"
        },
        variant: {
            default: null
        }
    },
    setup(e) {
        const t = oe(e, "BSpinner")
          , l = mt()
          , a = w( () => [`spinner-${t.type}`, {
            [`spinner-${t.type}-sm`]: t.small,
            [`text-${t.variant}`]: t.variant !== null
        }])
          , o = V( () => !lt(l.label));
        return (n, i) => (y(),
        M(xe(u(t).tag), {
            class: te(a.value),
            role: u(t).label || o.value ? u(t).role : null,
            "aria-hidden": u(t).label || o.value ? null : !0
        }, {
            default: E( () => [u(t).label || o.value ? (y(),
            O("span", Nm, [A(n.$slots, "label", {}, () => [ye(fe(u(t).label), 1)])])) : me("", !0)]),
            _: 3
        }, 8, ["class", "role", "aria-hidden"]))
    }
})
  , Zt = Q({
    __name: "BButton",
    props: Ae({
        loading: {
            type: Boolean,
            default: !1
        },
        loadingFill: {
            type: Boolean,
            default: !1
        },
        loadingText: {
            default: "Loading..."
        },
        pill: {
            type: Boolean,
            default: !1
        },
        pressed: {
            type: Boolean
        },
        size: {
            default: "md"
        },
        squared: {
            type: Boolean,
            default: !1
        },
        tag: {
            default: "button"
        },
        type: {
            default: "button"
        },
        variant: {
            default: "secondary"
        },
        active: {
            type: Boolean,
            default: !1
        },
        activeClass: {
            default: void 0
        },
        disabled: {
            type: Boolean,
            default: void 0
        },
        exactActiveClass: {
            default: void 0
        },
        href: {
            default: void 0
        },
        icon: {
            type: Boolean,
            default: void 0
        },
        stretched: {
            type: Boolean,
            default: !1
        },
        opacity: {
            default: void 0
        },
        opacityHover: {
            default: void 0
        },
        rel: {
            default: void 0
        },
        replace: {
            type: Boolean,
            default: void 0
        },
        routerComponentName: {
            default: void 0
        },
        routerTag: {
            default: void 0
        },
        target: {
            default: void 0
        },
        to: {
            default: void 0
        },
        underlineOffset: {
            default: void 0
        },
        underlineOffsetHover: {
            default: void 0
        },
        underlineOpacity: {
            default: void 0
        },
        underlineOpacityHover: {
            default: void 0
        },
        underlineVariant: {
            default: void 0
        },
        prefetch: {
            type: Boolean
        },
        noPrefetch: {
            type: Boolean
        },
        prefetchedClass: {},
        noRel: {
            type: Boolean
        }
    }, {
        pressed: {
            type: Boolean,
            default: void 0
        },
        pressedModifiers: {}
    }),
    emits: Ae(["click"], ["update:pressed"]),
    setup(e, {emit: t}) {
        const l = oe(e, "BButton")
          , a = t
          , o = Ne(e, "pressed")
          , {computedLink: n, computedLinkProps: i} = Il(l, ["active-class", "exact-active-class", "replace", "routerComponentName", "routerTag"])
          , r = V( () => typeof l.pressed == "boolean")
          , s = V( () => l.tag === "button" && l.href === void 0 && l.to === void 0)
          , d = V( () => l.to !== void 0)
          , c = V( () => l.href !== void 0 ? !1 : !s.value)
          , v = w( () => d.value ? i.value : [])
          , f = w( () => [[`btn-${l.size}`], {
            [`btn-${l.variant}`]: l.variant !== null,
            active: l.active || l.pressed,
            "rounded-pill": l.pill,
            "rounded-0": l.squared,
            disabled: l.disabled
        }])
          , p = V( () => d.value ? qt : l.href ? "a" : l.tag)
          , g = b => {
            if (l.disabled) {
                b.preventDefault(),
                b.stopPropagation();
                return
            }
            a("click", b),
            r.value && (o.value = !l.pressed)
        }
        ;
        return (b, m) => (y(),
        M(xe(p.value), ue({
            class: "btn"
        }, v.value, {
            class: f.value,
            "aria-disabled": c.value ? u(l).disabled : null,
            "aria-pressed": r.value ? u(l).pressed : null,
            autocomplete: r.value ? "off" : null,
            disabled: s.value ? u(l).disabled : null,
            href: u(l).href,
            rel: u(n) ? u(l).rel : null,
            role: c.value || u(n) ? "button" : null,
            target: u(n) ? u(l).target : null,
            type: s.value ? u(l).type : null,
            to: s.value ? null : u(l).to,
            onClick: g
        }), {
            default: E( () => [u(l).loading ? A(b.$slots, "loading", {
                key: 0
            }, () => [u(l).loadingFill ? me("", !0) : (y(),
            O(Be, {
                key: 0
            }, [ye(fe(u(l).loadingText), 1)], 64)), A(b.$slots, "loading-spinner", {}, () => [pe(Uo, {
                small: u(l).size !== "lg",
                label: u(l).loadingFill ? u(l).loadingText : void 0
            }, null, 8, ["small", "label"])])]) : A(b.$slots, "default", {
                key: 1
            })]),
            _: 3
        }, 16, ["class", "aria-disabled", "aria-pressed", "autocomplete", "disabled", "href", "rel", "role", "target", "type", "to"]))
    }
})
  , Ha = Q({
    name: "RenderComponentOrSkip",
    inheritAttrs: !1,
    slots: Object,
    props: {
        tag: {
            type: String,
            default: "div"
        },
        to: {
            type: [String, Object],
            default: null
        },
        skip: {
            type: Boolean,
            default: !1
        }
    },
    setup(e, {slots: t, attrs: l}) {
        return () => {
            var a, o, n;
            return e.skip ? (a = t.default) == null ? void 0 : a.call(t) : e.tag === "Teleport" ? et(Fl, {
                to: e.to
            }, [(o = t.default) == null ? void 0 : o.call(t)]) : et(e.tag, {
                ...l
            }, [(n = t.default) == null ? void 0 : n.call(t)])
        }
    }
})
  , Ko = Q({
    __name: "BOverlay",
    props: {
        bgColor: {
            default: void 0
        },
        blur: {
            default: "2px"
        },
        fixed: {
            type: Boolean,
            default: !1
        },
        noCenter: {
            type: Boolean,
            default: !1
        },
        noFade: {
            type: Boolean,
            default: !1
        },
        noSpinner: {
            type: Boolean,
            default: !1
        },
        noWrap: {
            type: Boolean,
            default: !1
        },
        opacity: {
            default: .85
        },
        overlayTag: {
            default: "div"
        },
        show: {
            type: Boolean,
            default: !1
        },
        spinnerSmall: {
            type: Boolean,
            default: !1
        },
        spinnerType: {
            default: "border"
        },
        spinnerVariant: {
            default: void 0
        },
        variant: {
            default: "light"
        },
        wrapTag: {
            default: "div"
        },
        zIndex: {
            default: 10
        },
        rounded: {
            type: [Boolean, String, Number],
            default: !1
        },
        roundedTop: {
            type: [Boolean, String, Number],
            default: void 0
        },
        roundedBottom: {
            type: [Boolean, String, Number],
            default: void 0
        },
        roundedStart: {
            type: [Boolean, String, Number],
            default: void 0
        },
        roundedEnd: {
            type: [Boolean, String, Number],
            default: void 0
        }
    },
    emits: ["click", "hidden", "shown"],
    setup(e, {emit: t}) {
        const l = oe(e, "BOverlay")
          , a = t
          , o = {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        }
          , n = yi( () => ({
            rounded: l.rounded,
            roundedTop: l.roundedTop,
            roundedBottom: l.roundedBottom,
            roundedStart: l.roundedStart,
            roundedEnd: l.roundedEnd
        }))
          , i = V( () => l.variant !== null && !l.bgColor ? `bg-${l.variant}` : "")
          , r = V( () => l.show ? !0 : null)
          , s = w( () => ({
            type: l.spinnerType,
            variant: l.spinnerVariant,
            small: l.spinnerSmall
        }))
          , d = w( () => ({
            ...o,
            zIndex: l.zIndex || 10
        }))
          , c = w( () => ({
            "position-absolute": !l.noWrap || !l.fixed,
            "position-fixed": l.noWrap && l.fixed
        }))
          , v = w( () => [i.value, n.value])
          , f = w( () => ({
            ...o,
            opacity: l.opacity,
            backgroundColor: l.bgColor || void 0,
            backdropFilter: l.blur ? `blur(${l.blur})` : void 0
        }))
          , p = w( () => l.noCenter ? o : {
            top: "50%",
            left: "50%",
            transform: "translateX(-50%) translateY(-50%)"
        });
        return (g, b) => (y(),
        M(Ha, {
            tag: u(l).wrapTag,
            class: "b-overlay-wrap position-relative",
            "aria-busy": r.value,
            skip: u(l).noWrap
        }, {
            default: E( () => [A(g.$slots, "default"), pe(La, {
                "no-fade": u(l).noFade,
                "trans-props": {
                    enterToClass: "show"
                },
                name: "fade",
                onAfterEnter: b[1] || (b[1] = m => a("shown")),
                onAfterLeave: b[2] || (b[2] = m => a("hidden"))
            }, {
                default: E( () => [u(l).show ? (y(),
                M(xe(u(l).overlayTag), {
                    key: 0,
                    class: te(["b-overlay", c.value]),
                    style: Qe(d.value),
                    onClick: b[0] || (b[0] = m => a("click", m))
                }, {
                    default: E( () => [ne("div", {
                        class: te(["position-absolute", v.value]),
                        style: Qe(f.value)
                    }, null, 6), ne("div", {
                        class: "position-absolute",
                        style: Qe(p.value)
                    }, [A(g.$slots, "overlay", Ie(je(s.value)), () => [u(l).noSpinner ? me("", !0) : (y(),
                    M(Uo, Ie(ue({
                        key: 0
                    }, s.value)), null, 16))])], 4)]),
                    _: 3
                }, 8, ["class", "style"])) : me("", !0)]),
                _: 3
            }, 8, ["no-fade"])]),
            _: 3
        }, 8, ["tag", "aria-busy", "skip"]))
    }
})
  , Lm = ["id", "aria-labelledby", "aria-describedby"]
  , Hm = ["id"]
  , Hr = 1056
  , Mm = Q({
    inheritAttrs: !1,
    __name: "BModal",
    props: Ae({
        autoFocus: {
            type: Boolean,
            default: !0
        },
        autoFocusButton: {
            default: void 0
        },
        body: {
            default: void 0
        },
        backdropVariant: {
            default: void 0
        },
        bodyAttrs: {
            default: void 0
        },
        bodyBgVariant: {
            default: null
        },
        bodyClass: {
            default: null
        },
        bodyScrolling: {
            type: Boolean,
            default: !1
        },
        bodyTextVariant: {
            default: null
        },
        bodyVariant: {
            default: null
        },
        busy: {
            type: Boolean,
            default: !1
        },
        buttonSize: {
            default: "md"
        },
        cancelDisabled: {
            type: Boolean,
            default: !1
        },
        cancelTitle: {
            default: "Cancel"
        },
        cancelVariant: {
            default: "secondary"
        },
        centered: {
            type: Boolean,
            default: !1
        },
        contentClass: {
            default: void 0
        },
        dialogClass: {
            default: void 0
        },
        footerBgVariant: {
            default: null
        },
        footerBorderVariant: {
            default: null
        },
        footerClass: {
            default: void 0
        },
        footerTextVariant: {
            default: null
        },
        footerVariant: {
            default: null
        },
        fullscreen: {
            type: [Boolean, String],
            default: !1
        },
        headerBgVariant: {
            default: null
        },
        headerBorderVariant: {
            default: null
        },
        headerClass: {
            default: void 0
        },
        headerCloseClass: {
            default: void 0
        },
        headerCloseLabel: {
            default: "Close"
        },
        headerCloseVariant: {
            default: "secondary"
        },
        headerTextVariant: {
            default: null
        },
        headerVariant: {
            default: null
        },
        hideBackdrop: {
            type: Boolean,
            default: !1
        },
        hideFooter: {
            type: Boolean,
            default: !1
        },
        hideHeader: {
            type: Boolean,
            default: !1
        },
        hideHeaderClose: {
            type: Boolean,
            default: !1
        },
        id: {
            default: void 0
        },
        lazy: {
            type: Boolean,
            default: !1
        },
        modalClass: {
            default: void 0
        },
        modelValue: {
            type: Boolean
        },
        noCloseOnBackdrop: {
            type: Boolean,
            default: !1
        },
        noCloseOnEsc: {
            type: Boolean,
            default: !1
        },
        noFade: {
            type: Boolean,
            default: !1
        },
        okDisabled: {
            type: Boolean,
            default: !1
        },
        okOnly: {
            type: Boolean,
            default: !1
        },
        okTitle: {
            default: "Ok"
        },
        okVariant: {
            default: "primary"
        },
        scrollable: {
            type: Boolean,
            default: !1
        },
        size: {
            default: "md"
        },
        title: {
            default: void 0
        },
        titleClass: {
            default: void 0
        },
        titleSrOnly: {
            type: Boolean,
            default: !1
        },
        titleTag: {
            default: "h5"
        },
        transProps: {
            default: void 0
        },
        teleportDisabled: {
            default: !1
        },
        teleportTo: {
            default: "body"
        }
    }, {
        modelValue: {
            type: Boolean,
            default: !1
        },
        modelModifiers: {}
    }),
    emits: Ae(["cancel", "close", "hidden", "hide", "hide-prevented", "ok", "show", "show-prevented", "shown"], ["update:modelValue"]),
    setup(e, {expose: t, emit: l}) {
        const a = oe(e, "BModal")
          , o = l
          , n = mt()
          , i = Me( () => a.id, "modal")
          , r = Ne(e, "modelValue")
          , s = Y(null)
          , d = Y(null)
          , c = Y(null)
          , v = Y(null)
          , f = Y(!1)
          , p = Y(!1)
          , g = Tm(!0);
        Bt("Escape", () => {
            q("esc")
        }
        , {
            target: s
        }),
        hd(r, () => a.bodyScrolling);
        const {focused: b} = ft(s, {
            initialValue: r.value && a.autoFocusButton === void 0
        })
          , {focused: m} = ft(d, {
            initialValue: r.value && a.autoFocusButton === "ok"
        })
          , {focused: h} = ft(c, {
            initialValue: r.value && a.autoFocusButton === "cancel"
        })
          , {focused: B} = ft(v, {
            initialValue: r.value && a.autoFocusButton === "close"
        })
          , $ = w( () => [a.modalClass, {
            fade: !a.noFade,
            show: f.value
        }])
          , x = V( () => a.lazy === !1 || a.lazy === !0 && p.value === !0 || a.lazy === !0 && r.value === !0)
          , C = V( () => a.backdropVariant !== void 0 ? a.backdropVariant : a.hideBackdrop ? "transparent" : "dark")
          , T = V( () => !lt(n["header-close"]))
          , F = w( () => [a.dialogClass, {
            "modal-fullscreen": a.fullscreen === !0,
            [`modal-fullscreen-${a.fullscreen}-down`]: typeof a.fullscreen == "string",
            [`modal-${a.size}`]: a.size !== "md",
            "modal-dialog-centered": a.centered,
            "modal-dialog-scrollable": a.scrollable
        }])
          , j = jt( () => ({
            bgVariant: a.bodyBgVariant,
            textVariant: a.bodyTextVariant,
            variant: a.bodyVariant
        }))
          , L = w( () => [a.bodyClass, j.value])
          , Z = jt( () => ({
            bgVariant: a.headerBgVariant,
            textVariant: a.headerTextVariant,
            variant: a.headerVariant
        }))
          , de = w( () => [a.headerClass, Z.value, {
            [`border-${a.headerBorderVariant}`]: a.headerBorderVariant !== null
        }])
          , R = w( () => ({
            variant: T.value ? a.headerCloseVariant : void 0,
            class: a.headerCloseClass
        }))
          , ee = jt( () => ({
            bgVariant: a.footerBgVariant,
            textVariant: a.footerTextVariant,
            variant: a.footerVariant
        }))
          , k = w( () => [a.footerClass, ee.value, {
            [`border-${a.footerBorderVariant}`]: a.footerBorderVariant !== null
        }])
          , P = w( () => [a.titleClass, {
            "visually-hidden": a.titleSrOnly
        }])
          , N = V( () => a.cancelDisabled || a.busy)
          , D = V( () => a.okDisabled || a.busy)
          , J = (W, se={}) => new ta(W,{
            cancelable: !1,
            target: s.value || null,
            relatedTarget: null,
            trigger: null,
            ...se,
            componentId: i.value
        });
        ke(r, (W, se) => {
            W !== se && (W === !0 ? G() : q())
        }
        );
        const q = (W="") => {
            if (W === "backdrop" && a.noCloseOnBackdrop || W === "esc" && a.noCloseOnEsc) {
                o("hide-prevented");
                return
            }
            const se = J("hide", {
                cancelable: W !== "",
                trigger: W
            });
            if (W === "ok" && o(W, se),
            W === "cancel" && o(W, se),
            W === "close" && o(W, se),
            o("hide", se),
            se.defaultPrevented) {
                o("hide-prevented"),
                r.value || (r.value = !0);
                return
            }
            r.value && (r.value = !1)
        }
          , G = () => {
            if (f.value)
                return;
            const W = J("show", {
                cancelable: !0
            });
            if (o("show", W),
            W.defaultPrevented) {
                r.value && (r.value = !1),
                o("show-prevented");
                return
            }
            r.value || (r.value = !0)
        }
          , z = () => {
            a.autoFocus !== !1 && (a.autoFocusButton === "ok" ? m.value = !0 : a.autoFocusButton === "close" ? B.value = !0 : a.autoFocusButton === "cancel" ? h.value = !0 : b.value = !0)
        }
          , I = () => {
            G()
        }
          , X = () => {
            f.value = !0,
            z(),
            o("shown", J("shown")),
            a.lazy === !0 && (p.value = !0)
        }
          , le = () => {
            f.value = !1
        }
          , _e = () => {
            o("hidden", J("hidden")),
            a.lazy === !0 && (p.value = !1)
        }
          , {activePosition: he, activeModalCount: be} = wm(f)
          , He = w( () => {
            var W, se;
            return {
                "z-index": f.value ? Hr - (((W = be == null ? void 0 : be.value) != null ? W : 0) - ((se = he == null ? void 0 : he.value) != null ? se : 0)) : Hr
            }
        }
        );
        Xe(s, "bv-toggle", () => {
            r.value ? q() : G()
        }
        );
        const Te = w( () => ({
            cancel: () => {
                q("cancel")
            }
            ,
            close: () => {
                q("close")
            }
            ,
            hide: q,
            ok: () => {
                q("ok")
            }
            ,
            visible: r.value
        }));
        return t({
            hide: q,
            id: i,
            show: G
        }),
        (W, se) => (y(),
        M(Fl, {
            to: u(a).teleportTo,
            disabled: u(a).teleportDisabled
        }, [pe(Ro, ue({
            ...u(g),
            ...u(a).transProps,
            enterToClass: "show"
        }, {
            appear: r.value,
            onBeforeEnter: I,
            onAfterEnter: X,
            onLeave: le,
            onAfterLeave: _e
        }), {
            default: E( () => [ll(ne("div", ue({
                id: u(i),
                ref_key: "element",
                ref: s,
                class: ["modal", $.value],
                role: "dialog",
                "aria-labelledby": u(a).hideHeader ? void 0 : `${u(i)}-label`,
                "aria-describedby": `${u(i)}-body`,
                tabindex: "-1"
            }, W.$attrs, {
                style: He.value
            }), [ne("div", {
                class: te(["modal-dialog", F.value])
            }, [x.value ? (y(),
            O("div", {
                key: 0,
                class: te(["modal-content", u(a).contentClass])
            }, [u(a).hideHeader ? me("", !0) : (y(),
            O("div", {
                key: 0,
                class: te(["modal-header", de.value])
            }, [A(W.$slots, "header", Ie(je(Te.value)), () => [(y(),
            M(xe(u(a).titleTag), {
                id: `${u(i)}-label`,
                class: te(["modal-title", P.value])
            }, {
                default: E( () => [A(W.$slots, "title", Ie(je(Te.value)), () => [ye(fe(u(a).title), 1)], !0)]),
                _: 3
            }, 8, ["id", "class"])), u(a).hideHeaderClose ? me("", !0) : (y(),
            O(Be, {
                key: 0
            }, [T.value ? (y(),
            M(Zt, ue({
                key: 0
            }, R.value, {
                onClick: se[0] || (se[0] = Re => q("close"))
            }), {
                default: E( () => [A(W.$slots, "header-close", {}, void 0, !0)]),
                _: 3
            }, 16)) : (y(),
            M(aa, ue({
                key: 1,
                "aria-label": u(a).headerCloseLabel
            }, R.value, {
                onClick: se[1] || (se[1] = Re => q("close"))
            }), null, 16, ["aria-label"]))], 64))], !0)], 2)), ne("div", ue({
                id: `${u(i)}-body`,
                class: ["modal-body", L.value]
            }, u(a).bodyAttrs), [A(W.$slots, "default", Ie(je(Te.value)), () => [ye(fe(u(a).body), 1)], !0)], 16, Hm), u(a).hideFooter ? me("", !0) : (y(),
            O("div", {
                key: 1,
                class: te(["modal-footer", k.value])
            }, [A(W.$slots, "footer", Ie(je(Te.value)), () => [A(W.$slots, "cancel", Ie(je(Te.value)), () => [u(a).okOnly ? me("", !0) : (y(),
            M(Zt, {
                key: 0,
                ref_key: "cancelButton",
                ref: c,
                disabled: N.value,
                size: u(a).buttonSize,
                variant: u(a).cancelVariant,
                onClick: se[2] || (se[2] = Re => q("cancel"))
            }, {
                default: E( () => [ye(fe(u(a).cancelTitle), 1)]),
                _: 1
            }, 8, ["disabled", "size", "variant"]))], !0), A(W.$slots, "ok", Ie(je(Te.value)), () => [pe(Zt, {
                ref_key: "okButton",
                ref: d,
                disabled: D.value,
                size: u(a).buttonSize,
                variant: u(a).okVariant,
                onClick: se[3] || (se[3] = Re => q("ok"))
            }, {
                default: E( () => [ye(fe(u(a).okTitle), 1)]),
                _: 1
            }, 8, ["disabled", "size", "variant"])], !0)], !0)], 2))], 2)) : me("", !0)], 2), A(W.$slots, "backdrop", {}, () => [pe(Ko, {
                variant: C.value,
                show: r.value,
                "no-spinner": "",
                fixed: "",
                "no-wrap": "",
                blur: null,
                onClick: se[4] || (se[4] = Re => q("backdrop"))
            }, null, 8, ["variant", "show"])], !0)], 16, Lm), [[Fa, r.value]])]),
            _: 3
        }, 16, ["appear"])], 8, ["to", "disabled"]))
    }
})
  , Bd = (e, t) => {
    const l = e.__vccOpts || e;
    for (const [a,o] of t)
        l[a] = o;
    return l
}
  , $n = Bd(Mm, [["__scopeId", "data-v-0f0f4678"]])
  , zm = {
    install(e) {
        const t = Y([])
          , l = () => {
            let s = () => {}
            ;
            return {
                value: new Promise(d => {
                    s = d
                }
                ),
                resolve: s
            }
        }
          , a = () => [l(), Symbol(), Y(!0)]
          , o = s => {
            const [d,c,v] = a();
            return t.value.push(w({
                get: () => {
                    var f;
                    return {
                        component: (f = Ke(s.component)) != null ? f : $n,
                        props: {
                            ...Ke(s.props),
                            _isConfirm: !1,
                            _promise: d,
                            _self: c,
                            _modelValue: v.value
                        }
                    }
                }
                ,
                set: f => {
                    v.value = f.props._modelValue
                }
            })),
            d.value
        }
          , n = s => {
            const [d,c,v] = a();
            return t.value.push(w({
                get: () => {
                    var f;
                    return {
                        component: (f = Ke(s.component)) != null ? f : $n,
                        props: {
                            ...Ke(s.props),
                            _isConfirm: !0,
                            _promise: d,
                            _self: c,
                            _modelValue: v.value
                        }
                    }
                }
                ,
                set: f => {
                    v.value = f.props._modelValue
                }
            })),
            d.value
        }
          , i = s => {
            const d = t.value.find(c => c.value.props._self === s);
            d !== void 0 && (d.value = {
                ...d.value,
                props: {
                    ...d.value.props,
                    _modelValue: !1
                }
            })
        }
          , r = s => {
            t.value = t.value.filter(d => d.value.props._self !== s)
        }
        ;
        e.provide(td, {
            modals: t,
            remove: r,
            show: o,
            confirm: n,
            leave: i
        })
    }
}
  , Rm = {
    install(e) {
        const t = wa([])
          , l = V( () => t.value.length)
          , a = V( () => t.value[t.value.length - 1])
          , o = d => {
            t.value = [...t.value, d]
        }
          , n = d => {
            t.value = t.value.filter(c => c.uid !== d.uid)
        }
          , i = wa([])
          , r = d => {
            i.value = [...i.value, d]
        }
          , s = d => {
            i.value = i.value.filter(c => c.uid !== d.uid)
        }
        ;
        e.provide(ld, {
            stack: t,
            countStack: l,
            lastStack: a,
            registry: i,
            pushStack: o,
            removeStack: n,
            pushRegistry: r,
            removeRegistry: s
        })
    }
}
  , Dm = {
    install(e, t) {
        var s, d;
        var l, a;
        const o = typeof (t == null ? void 0 : t.rtl) == "boolean" ? !1 : (s = (l = t == null ? void 0 : t.rtl) == null ? void 0 : l.rtlInitial) != null ? s : !1
          , n = typeof (t == null ? void 0 : t.rtl) == "boolean" ? void 0 : (d = (a = t == null ? void 0 : t.rtl) == null ? void 0 : a.localeInitial) != null ? d : void 0
          , i = Y(o)
          , r = Y(n);
        e.provide(Qu, {
            isRtl: i,
            locale: r
        })
    }
}
  , jm = {
    install(e, t) {
        var a;
        const l = (a = t == null ? void 0 : t.components) != null ? a : {};
        e.provide(no, Y(l))
    }
}
  , Gm = ["id"]
  , Wm = Q({
    __name: "BAccordion",
    props: Ae({
        flush: {
            type: Boolean,
            default: !1
        },
        free: {
            type: Boolean,
            default: !1
        },
        id: {
            default: void 0
        },
        modelValue: {}
    }, {
        modelValue: {
            default: void 0
        },
        modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(e) {
        const t = oe(e, "BAccordion")
          , l = Ne(e, "modelValue")
          , a = Me( () => t.id, "accordion")
          , o = w( () => ({
            "accordion-flush": t.flush
        }));
        return ht(Ku, {
            openItem: ct(l),
            free: V( () => t.free),
            setOpenItem: n => {
                l.value = n
            }
        }),
        (n, i) => (y(),
        O("div", {
            id: u(a),
            class: te(["accordion", o.value])
        }, [A(n.$slots, "default")], 10, Gm))
    }
})
  , _d = Q({
    inheritAttrs: !1,
    __name: "BCollapse",
    props: Ae({
        horizontal: {
            type: Boolean,
            default: !1
        },
        id: {
            default: void 0
        },
        isNav: {
            type: Boolean,
            default: !1
        },
        modelValue: {
            type: Boolean
        },
        skipAnimation: {
            type: Boolean,
            default: !1
        },
        tag: {
            default: "div"
        },
        toggle: {
            type: Boolean,
            default: !1
        },
        visible: {
            type: Boolean,
            default: !1
        }
    }, {
        modelValue: {
            type: Boolean,
            default: !1
        },
        modelModifiers: {}
    }),
    emits: Ae(["hidden", "hide", "hide-prevented", "show", "show-prevented", "shown"], ["update:modelValue"]),
    setup(e, {expose: t, emit: l}) {
        const a = oe(e, "BCollapse")
          , o = l
          , n = (C, T={}) => new ta(C,{
            cancelable: !1,
            target: s.value || null,
            relatedTarget: null,
            trigger: null,
            ...T,
            componentId: r.value
        })
          , i = Ne(e, "modelValue")
          , r = Me( () => a.id, "collapse")
          , s = Y(null)
          , d = Y(!1)
          , c = Y(i.value)
          , v = w( () => ({
            show: c.value,
            "navbar-collapse": a.isNav,
            collapsing: d.value,
            closing: c.value && !i.value,
            "collapse-horizontal": a.horizontal
        }))
          , f = () => {
            i.value = !1
        }
          , p = () => {
            i.value = !0
        }
          , g = () => {
            i.value = !i.value
        }
          , b = w( () => ({
            toggle: g,
            show: p,
            hide: f,
            id: r.value,
            visible: i.value
        }));
        let m, h, B = a.skipAnimation;
        const $ = () => {
            const C = n("show", {
                cancelable: !0
            });
            if (o("show", C),
            C.defaultPrevented) {
                o("show-prevented");
                return
            }
            clearTimeout(h),
            clearTimeout(m),
            c.value = !0,
            !B && (d.value = !0,
            it( () => {
                s.value !== null && (a.horizontal ? s.value.style.width = `${s.value.scrollWidth}px` : s.value.style.height = `${s.value.scrollHeight}px`,
                m = setTimeout( () => {
                    d.value = !1,
                    o("shown"),
                    s.value !== null && (s.value.style.height = "",
                    s.value.style.width = "")
                }
                , xn(s.value)))
            }
            ))
        }
          , x = () => {
            const C = n("hide", {
                cancelable: !0
            });
            if (o("hide", C),
            C.defaultPrevented) {
                o("hide-prevented");
                return
            }
            if (clearTimeout(m),
            clearTimeout(h),
            s.value !== null) {
                if (B) {
                    c.value = !1;
                    return
                }
                d.value ? (s.value.style.height = "",
                s.value.style.width = "") : a.horizontal ? s.value.style.width = `${s.value.scrollWidth}px` : s.value.style.height = `${s.value.scrollHeight}px`,
                s.value.offsetHeight,
                d.value = !0,
                it( () => {
                    s.value !== null && (s.value.style.height = "",
                    s.value.style.width = "",
                    h = setTimeout( () => {
                        c.value = !1,
                        d.value = !1,
                        o("hidden")
                    }
                    , xn(s.value)))
                }
                )
            }
        }
        ;
        return ke(i, () => {
            i.value ? $() : x()
        }
        ),
        pt( () => {
            s.value !== null && !i.value && a.toggle && it( () => {
                i.value = !0
            }
            )
        }
        ),
        ke( () => a.skipAnimation, C => {
            B = C
        }
        ),
        a.visible && (B = !0,
        i.value = !0,
        it( () => {
            B = a.skipAnimation
        }
        )),
        ke( () => a.visible, C => {
            B = !0,
            C ? p() : f(),
            it( () => {
                B = a.skipAnimation
            }
            )
        }
        ),
        Xe(s, "bv-toggle", () => {
            i.value = !i.value
        }
        ),
        t({
            hide: f,
            isNav: a.isNav,
            show: p,
            toggle: g,
            visible: ct(c)
        }),
        ht(mi, {
            id: r,
            hide: f,
            show: p,
            toggle: g,
            visible: ct(c),
            isNav: V( () => a.isNav)
        }),
        (C, T) => (y(),
        O(Be, null, [A(C.$slots, "header", Ie(je(b.value))), (y(),
        M(xe(u(a).tag), ue({
            id: u(r),
            ref_key: "element",
            ref: s,
            class: ["collapse", v.value],
            "is-nav": u(a).isNav
        }, C.$attrs), {
            default: E( () => [A(C.$slots, "default", Ie(je(b.value)))]),
            _: 3
        }, 16, ["id", "class", "is-nav"])), A(C.$slots, "footer", Ie(je(b.value)))], 64))
    }
})
  , qm = ["aria-expanded", "aria-controls", "onClick"]
  , Um = Q({
    inheritAttrs: !1,
    __name: "BAccordionItem",
    props: Ae({
        bodyAttrs: {
            default: void 0
        },
        bodyClass: {
            default: void 0
        },
        buttonAttrs: {
            default: void 0
        },
        buttonClass: {
            default: void 0
        },
        collapseClass: {
            default: void 0
        },
        headerAttrs: {
            default: void 0
        },
        headerClass: {
            default: void 0
        },
        headerTag: {
            default: "h2"
        },
        horizontal: {
            type: Boolean,
            default: void 0
        },
        id: {
            default: void 0
        },
        isNav: {
            type: Boolean,
            default: void 0
        },
        modelValue: {
            type: Boolean
        },
        tag: {
            default: void 0
        },
        title: {
            default: void 0
        },
        toggle: {
            type: Boolean,
            default: void 0
        },
        visible: {
            type: Boolean,
            default: !1
        },
        wrapperAttrs: {
            default: void 0
        }
    }, {
        modelValue: {
            type: Boolean,
            default: !1
        },
        modelModifiers: {}
    }),
    emits: Ae(["hidden", "hide", "hide-prevented", "show", "show-prevented", "shown"], ["update:modelValue"]),
    setup(e, {emit: t}) {
        const {class: l, ...a} = Pa()
          , o = oe(e, "BAccordionItem")
          , n = t
          , i = Ne(e, "modelValue")
          , r = qe(Ku, null)
          , s = Me( () => o.id, "accordion_item");
        return pt( () => {
            i.value && !(r != null && r.free.value) && (r == null || r.setOpenItem(s.value)),
            !i.value && (r == null ? void 0 : r.openItem.value) === s.value && (i.value = !0)
        }
        ),
        ke( () => r == null ? void 0 : r.openItem.value, () => i.value = (r == null ? void 0 : r.openItem.value) === s.value && !(r != null && r.free.value)),
        ke(i, () => {
            i.value && !(r != null && r.free.value) && (r == null || r.setOpenItem(s.value))
        }
        ),
        (d, c) => (y(),
        O("div", ue({
            class: "accordion-item"
        }, u(o).wrapperAttrs, {
            class: u(l)
        }), [pe(_d, ue({
            id: u(s),
            modelValue: i.value,
            "onUpdate:modelValue": c[0] || (c[0] = v => i.value = v),
            class: ["accordion-collapse", u(o).collapseClass],
            "aria-labelledby": `${u(s)}-heading`
        }, a, {
            tag: u(o).tag,
            toggle: u(o).toggle,
            horizontal: u(o).horizontal,
            visible: u(o).visible,
            "is-nav": u(o).isNav,
            onShow: c[1] || (c[1] = v => n("show", v)),
            onShown: c[2] || (c[2] = v => n("shown")),
            onHide: c[3] || (c[3] = v => n("hide", v)),
            onHidden: c[4] || (c[4] = v => n("hidden")),
            onHidePrevented: c[5] || (c[5] = v => n("hide-prevented")),
            onShowPrevented: c[6] || (c[6] = v => n("show-prevented"))
        }), {
            header: E( ({visible: v, toggle: f}) => [(y(),
            M(xe(u(o).headerTag), ue({
                id: `${u(s)}-heading`,
                class: ["accordion-header", u(o).headerClass]
            }, u(o).headerAttrs), {
                default: E( () => [ne("button", ue({
                    class: "accordion-button"
                }, u(o).buttonAttrs, {
                    class: [{
                        collapsed: !v
                    }, u(o).buttonClass],
                    type: "button",
                    "aria-expanded": v ? "true" : "false",
                    "aria-controls": u(s),
                    onClick: f
                }), [A(d.$slots, "title", {}, () => [ye(fe(u(o).title), 1)])], 16, qm)]),
                _: 2
            }, 1040, ["id", "class"]))]),
            default: E( () => [ne("div", ue({
                class: "accordion-body"
            }, u(o).bodyAttrs, {
                class: u(o).bodyClass
            }), [A(d.$slots, "default")], 16)]),
            _: 3
        }, 16, ["id", "modelValue", "class", "aria-labelledby", "tag", "toggle", "horizontal", "visible", "is-nav"])], 16))
    }
})
  , Km = Q({
    __name: "BAlert",
    props: Ae({
        closeClass: {
            default: void 0
        },
        closeContent: {
            default: void 0
        },
        closeLabel: {
            default: "Close"
        },
        closeVariant: {
            default: "secondary"
        },
        dismissible: {
            type: Boolean,
            default: !1
        },
        fade: {
            type: Boolean,
            default: !1
        },
        immediate: {
            type: Boolean,
            default: !0
        },
        interval: {
            default: 1e3
        },
        modelValue: {
            type: [Boolean, Number]
        },
        noHoverPause: {
            type: Boolean,
            default: !1
        },
        showOnPause: {
            type: Boolean,
            default: !0
        },
        variant: {
            default: "info"
        }
    }, {
        modelValue: {
            type: [Boolean, Number],
            default: !1
        },
        modelModifiers: {}
    }),
    emits: Ae(["close", "close-countdown", "closed"], ["update:modelValue"]),
    setup(e, {expose: t, emit: l}) {
        const a = oe(e, "BAlert")
          , o = l
          , n = mt()
          , i = Y(null)
          , r = Ne(e, "modelValue")
          , s = vi(i)
          , d = Oe( () => a.interval)
          , c = V( () => !lt(n.close))
          , v = V( () => typeof r.value == "boolean" ? 0 : r.value)
          , f = w( () => ({
            [`alert-${a.variant}`]: a.variant !== null,
            "alert-dismissible": a.dismissible
        }))
          , p = w( () => [a.closeClass, {
            "btn-close-custom": c.value
        }])
          , {isActive: g, pause: b, restart: m, resume: h, stop: B, isPaused: $, value: x} = nd(v, d, {
            immediate: typeof r.value == "number" && a.immediate
        })
          , C = V( () => typeof r.value == "boolean" ? r.value : g.value || a.showOnPause && $.value)
          , T = w( () => ({
            variant: c.value ? a.closeVariant : void 0,
            class: p.value
        }));
        Oa( () => {
            o("close-countdown", x.value)
        }
        );
        const F = () => {
            o("close"),
            typeof r.value == "boolean" ? r.value = !1 : (r.value = 0,
            B()),
            o("closed")
        }
          , j = () => {
            a.noHoverPause || b()
        }
        ;
        return ke(s, L => {
            if (L) {
                j();
                return
            }
            h()
        }
        ),
        Aa(B),
        t({
            pause: b,
            restart: m,
            resume: h,
            stop: B
        }),
        (L, Z) => (y(),
        M(La, {
            "no-fade": !u(a).fade,
            "trans-props": {
                enterToClass: "show"
            }
        }, {
            default: E( () => [C.value ? (y(),
            O("div", {
                key: 0,
                ref_key: "element",
                ref: i,
                class: te(["alert", f.value]),
                role: "alert",
                "aria-live": "polite",
                "aria-atomic": "true"
            }, [A(L.$slots, "default", {}, void 0, !0), u(a).dismissible ? (y(),
            O(Be, {
                key: 0
            }, [c.value || u(a).closeContent ? (y(),
            M(Zt, ue({
                key: 0
            }, T.value, {
                onClick: F
            }), {
                default: E( () => [A(L.$slots, "close", {}, () => [ye(fe(u(a).closeContent), 1)], !0)]),
                _: 3
            }, 16)) : (y(),
            M(aa, ue({
                key: 1,
                "aria-label": u(a).closeLabel
            }, T.value, {
                onClick: F
            }), null, 16, ["aria-label"]))], 64)) : me("", !0)], 2)) : me("", !0)]),
            _: 3
        }, 8, ["no-fade"]))
    }
})
  , Ym = Bd(Km, [["__scopeId", "data-v-96a91b13"]])
  , wd = Q({
    __name: "BBadge",
    props: {
        dotIndicator: {
            type: Boolean,
            default: !1
        },
        pill: {
            type: Boolean,
            default: !1
        },
        tag: {
            default: "span"
        },
        textIndicator: {
            type: Boolean
        },
        placement: {
            default: void 0
        },
        active: {
            type: Boolean,
            default: void 0
        },
        activeClass: {
            default: void 0
        },
        disabled: {
            type: Boolean,
            default: void 0
        },
        exactActiveClass: {
            default: void 0
        },
        href: {
            default: void 0
        },
        icon: {
            type: Boolean,
            default: void 0
        },
        stretched: {
            type: Boolean,
            default: !1
        },
        opacity: {
            default: void 0
        },
        opacityHover: {
            default: void 0
        },
        rel: {
            default: void 0
        },
        replace: {
            type: Boolean,
            default: void 0
        },
        routerComponentName: {
            default: void 0
        },
        target: {
            default: void 0
        },
        to: {
            default: void 0
        },
        underlineOffset: {
            default: void 0
        },
        underlineOffsetHover: {
            default: void 0
        },
        underlineOpacity: {
            default: void 0
        },
        underlineOpacityHover: {
            default: void 0
        },
        underlineVariant: {
            default: void 0
        },
        variant: {
            default: "secondary"
        },
        prefetch: {
            type: Boolean
        },
        noPrefetch: {
            type: Boolean
        },
        prefetchedClass: {},
        noRel: {
            type: Boolean
        },
        bgVariant: {
            default: null
        },
        textVariant: {
            default: null
        }
    },
    setup(e) {
        const t = oe(e, "BBadge")
          , l = jt(t)
          , {computedLink: a, computedLinkProps: o} = Il(t, ["active", "activeClass", "append", "disabled", "href", "rel", "replace", "routerComponentName", "target", "to", "opacity", "opacityHover", "underlineVariant", "underlineOffset", "underlineOffsetHover", "underlineOpacity", "underlineOpacityHover", "icon"])
          , n = V( () => a.value ? qt : t.tag)
          , i = w( () => {
            var d;
            const s = (d = t.placement) != null ? d : t.dotIndicator ? "top-end" : void 0;
            return ["position-absolute", "translate-middle", {
                "start-0 top-0": s === "top-start",
                "start-0 top-50": s === "start",
                "start-0 top-100": s === "bottom-start",
                "start-50 top-0": s === "top",
                "start-50 top-100": s === "bottom",
                "start-100 top-0": s === "top-end",
                "start-100 top-50": s === "end",
                "start-100 top-100": s === "bottom-end"
            }]
        }
        )
          , r = w( () => [l.value, t.placement !== void 0 || t.dotIndicator === !0 ? i.value : void 0, {
            active: t.active,
            disabled: t.disabled,
            "rounded-pill": t.pill,
            "p-2 border border-light rounded-circle": t.dotIndicator,
            "text-decoration-none": a.value
        }]);
        return (s, d) => (y(),
        M(xe(n.value), ue({
            class: ["badge", r.value]
        }, u(o)), {
            default: E( () => [pe(Ha, ue({
                skip: u(t).dotIndicator !== !0,
                tag: "span"
            }, u(t).dotIndicator ? {
                class: "visually-hidden"
            } : {}), {
                default: E( () => [A(s.$slots, "default")]),
                _: 3
            }, 16, ["skip"])]),
            _: 3
        }, 16, ["class"]))
    }
})
  , Xm = {
    key: 0,
    class: "b-avatar-custom"
}
  , Zm = {
    key: 1,
    class: "b-avatar-img"
}
  , Jm = ["src", "alt"]
  , Mr = .4
  , Qm = Q({
    __name: "BAvatar",
    props: {
        alt: {
            default: "avatar"
        },
        badge: {
            type: [Boolean, String],
            default: !1
        },
        badgeBgVariant: {
            default: null
        },
        badgePlacement: {
            default: "top-end"
        },
        badgeTextVariant: {
            default: null
        },
        badgeVariant: {
            default: "primary"
        },
        badgePill: {
            type: Boolean,
            default: !1
        },
        badgeDotIndicator: {
            type: Boolean,
            default: !1
        },
        button: {
            type: Boolean,
            default: !1
        },
        buttonType: {
            default: "button"
        },
        size: {
            default: void 0
        },
        square: {
            type: Boolean,
            default: !1
        },
        src: {
            default: void 0
        },
        text: {
            default: void 0
        },
        active: {
            type: Boolean,
            default: void 0
        },
        activeClass: {
            default: void 0
        },
        disabled: {
            type: Boolean,
            default: void 0
        },
        exactActiveClass: {
            default: void 0
        },
        href: {
            default: void 0
        },
        stretched: {
            type: Boolean,
            default: !1
        },
        opacity: {
            default: void 0
        },
        opacityHover: {
            default: void 0
        },
        rel: {
            default: void 0
        },
        replace: {
            type: Boolean,
            default: void 0
        },
        routerComponentName: {
            default: void 0
        },
        target: {
            default: void 0
        },
        to: {
            default: void 0
        },
        underlineOffset: {
            default: void 0
        },
        underlineOffsetHover: {
            default: void 0
        },
        underlineOpacity: {
            default: void 0
        },
        underlineOpacityHover: {
            default: void 0
        },
        underlineVariant: {
            default: void 0
        },
        variant: {
            default: "secondary"
        },
        prefetch: {
            type: Boolean
        },
        noPrefetch: {
            type: Boolean
        },
        prefetchedClass: {},
        noRel: {
            type: Boolean
        },
        bgVariant: {
            default: null
        },
        textVariant: {
            default: null
        },
        rounded: {
            type: [Boolean, String, Number],
            default: !1
        },
        roundedTop: {
            type: [Boolean, String, Number],
            default: void 0
        },
        roundedBottom: {
            type: [Boolean, String, Number],
            default: void 0
        },
        roundedStart: {
            type: [Boolean, String, Number],
            default: void 0
        },
        roundedEnd: {
            type: [Boolean, String, Number],
            default: void 0
        }
    },
    emits: ["click", "img-error"],
    setup(e, {emit: t}) {
        const l = e
          , a = t
          , o = mt()
          , {computedLink: n, computedLinkProps: i} = Il(l)
          , r = qe(Uu, null)
          , s = ["sm", null, "lg"]
          , d = Mr * .7
          , c = V( () => !lt(o.default))
          , v = V( () => !lt(o.badge))
          , f = V( () => !!l.badge || l.badge === "" || v.value)
          , p = V( () => (r == null ? void 0 : r.square.value) || l.square)
          , g = So( () => l.size)
          , b = So( () => r == null ? void 0 : r.size.value)
          , m = w( () => {
            var z;
            return (z = b.value) != null ? z : g.value
        }
        )
          , h = V( () => {
            var z;
            return (z = r == null ? void 0 : r.variant.value) != null ? z : l.variant
        }
        )
          , B = V( () => {
            var z;
            return (z = r == null ? void 0 : r.rounded.value) != null ? z : l.rounded
        }
        )
          , $ = V( () => {
            var z;
            return (z = r == null ? void 0 : r.roundedTop.value) != null ? z : l.roundedTop
        }
        )
          , x = V( () => {
            var z;
            return (z = r == null ? void 0 : r.roundedBottom.value) != null ? z : l.roundedBottom
        }
        )
          , C = V( () => {
            var z;
            return (z = r == null ? void 0 : r.roundedStart.value) != null ? z : l.roundedStart
        }
        )
          , T = V( () => {
            var z;
            return (z = r == null ? void 0 : r.roundedEnd.value) != null ? z : l.roundedEnd
        }
        )
          , F = yi( () => ({
            rounded: B.value,
            roundedTop: $.value,
            roundedBottom: x.value,
            roundedStart: C.value,
            roundedEnd: T.value
        }))
          , j = V( () => l.badge === !0 ? "" : l.badge)
          , L = w( () => !j.value && !v.value)
          , Z = V( () => {
            var z;
            return (z = r == null ? void 0 : r.textVariant.value) != null ? z : l.textVariant
        }
        )
          , de = V( () => {
            var z;
            return (z = r == null ? void 0 : r.bgVariant.value) != null ? z : l.bgVariant
        }
        )
          , R = jt( () => ({
            bgVariant: de.value,
            textVariant: Z.value,
            variant: h.value
        }))
          , ee = w( () => [R.value, p.value === !0 ? void 0 : F.value, {
            [`b-avatar-${l.size}`]: !!l.size && s.indexOf(g.value) !== -1,
            [`btn-${h.value}`]: l.button ? h.value !== null : !1,
            badge: !l.button && h.value !== null && c.value,
            btn: l.button,
            "rounded-0": p.value === !0
        }])
          , k = w( () => ({
            fontSize: s.indexOf(m.value || null) === -1 ? `calc(${m.value} * ${d})` : ""
        }))
          , P = w( () => {
            const z = s.indexOf(m.value || null) === -1 ? `calc(${m.value} * ${Mr})` : null;
            return z ? {
                fontSize: z
            } : {}
        }
        )
          , N = w( () => {
            var z;
            const I = ((z = r == null ? void 0 : r.overlapScale) == null ? void 0 : z.value) || 0
              , X = m.value && I ? `calc(${m.value} * -${I})` : null;
            return X ? {
                marginLeft: X,
                marginRight: X
            } : {}
        }
        )
          , D = V( () => n.value ? qt : l.button ? "button" : "span")
          , J = w( () => {
            var z, I;
            return {
                ...N.value,
                width: (z = m.value) != null ? z : void 0,
                height: (I = m.value) != null ? I : void 0
            }
        }
        )
          , q = z => {
            !l.disabled && (n.value || l.button) && a("click", z)
        }
          , G = z => {
            a("img-error", z)
        }
        ;
        return (z, I) => (y(),
        M(xe(D.value), ue({
            class: ["b-avatar", ee.value],
            style: J.value
        }, u(i), {
            type: l.button && !u(n) ? l.buttonType : void 0,
            disabled: l.disabled || null,
            onClick: q
        }), {
            default: E( () => [c.value ? (y(),
            O("span", Xm, [A(z.$slots, "default")])) : l.src ? (y(),
            O("span", Zm, [ne("img", {
                src: l.src,
                alt: l.alt,
                onError: G
            }, null, 40, Jm)])) : l.text ? (y(),
            O("span", {
                key: 2,
                class: "b-avatar-text",
                style: Qe(P.value)
            }, fe(l.text), 5)) : me("", !0), f.value ? (y(),
            M(wd, {
                key: 3,
                pill: l.badgePill,
                "dot-indicator": l.badgeDotIndicator || L.value,
                variant: l.badgeVariant,
                "bg-variant": l.badgeBgVariant,
                "text-variant": l.badgeTextVariant,
                style: Qe(k.value),
                placement: l.badgePlacement
            }, {
                default: E( () => [A(z.$slots, "badge", {}, () => [ye(fe(j.value), 1)])]),
                _: 3
            }, 8, ["pill", "dot-indicator", "variant", "bg-variant", "text-variant", "style", "placement"])) : me("", !0)]),
            _: 3
        }, 16, ["class", "style", "type", "disabled"]))
    }
})
  , eh = Q({
    __name: "BAvatarGroup",
    props: {
        overlap: {
            default: .3
        },
        size: {
            default: void 0
        },
        square: {
            type: Boolean,
            default: !1
        },
        tag: {
            default: "div"
        },
        variant: {
            default: null
        },
        bgVariant: {
            default: null
        },
        textVariant: {
            default: null
        },
        rounded: {
            type: [Boolean, String, Number],
            default: !1
        },
        roundedTop: {
            type: [Boolean, String, Number],
            default: void 0
        },
        roundedBottom: {
            type: [Boolean, String, Number],
            default: void 0
        },
        roundedStart: {
            type: [Boolean, String, Number],
            default: void 0
        },
        roundedEnd: {
            type: [Boolean, String, Number],
            default: void 0
        }
    },
    setup(e) {
        const t = oe(e, "BAvatarGroup")
          , l = Oe( () => t.overlap)
          , a = So( () => t.size)
          , o = V( () => Math.min(Math.max(l.value, 0), 1) / 2)
          , n = w( () => {
            const i = a.value ? `calc(${a.value} * ${o.value})` : null;
            return i ? {
                paddingLeft: i,
                paddingRight: i
            } : {}
        }
        );
        return ht(Uu, {
            overlapScale: o,
            size: V( () => t.size),
            square: V( () => t.square),
            rounded: V( () => t.rounded),
            roundedTop: V( () => t.roundedTop),
            roundedBottom: V( () => t.roundedBottom),
            roundedStart: V( () => t.roundedStart),
            roundedEnd: V( () => t.roundedEnd),
            variant: V( () => t.variant),
            bgVariant: V( () => t.bgVariant),
            textVariant: V( () => t.textVariant)
        }),
        (i, r) => (y(),
        M(xe(u(t).tag), {
            class: "b-avatar-group",
            role: "group"
        }, {
            default: E( () => [ne("div", {
                class: "b-avatar-group-inner",
                style: Qe(n.value)
            }, [A(i.$slots, "default")], 4)]),
            _: 3
        }))
    }
})
  , xd = Q({
    __name: "BBreadcrumbItem",
    props: {
        ariaCurrent: {
            default: "location"
        },
        text: {
            default: void 0
        },
        active: {
            type: Boolean,
            default: !1
        },
        activeClass: {
            default: void 0
        },
        disabled: {
            type: Boolean,
            default: void 0
        },
        exactActiveClass: {
            default: void 0
        },
        href: {
            default: void 0
        },
        icon: {
            type: Boolean,
            default: void 0
        },
        stretched: {
            type: Boolean,
            default: !1
        },
        opacity: {
            default: void 0
        },
        opacityHover: {
            default: void 0
        },
        rel: {
            default: void 0
        },
        replace: {
            type: Boolean,
            default: void 0
        },
        routerComponentName: {
            default: void 0
        },
        target: {
            default: void 0
        },
        to: {
            default: void 0
        },
        underlineOffset: {
            default: void 0
        },
        underlineOffsetHover: {
            default: void 0
        },
        underlineOpacity: {
            default: void 0
        },
        underlineOpacityHover: {
            default: void 0
        },
        underlineVariant: {
            default: void 0
        },
        variant: {
            default: void 0
        },
        prefetch: {
            type: Boolean
        },
        noPrefetch: {
            type: Boolean
        },
        prefetchedClass: {},
        noRel: {
            type: Boolean
        }
    },
    emits: ["click"],
    setup(e, {emit: t}) {
        const l = oe(e, "BBreadcrumbItem")
          , a = t
          , o = w( () => ({
            active: l.active
        }))
          , n = V( () => l.active ? "span" : qt)
          , i = V( () => l.active ? l.ariaCurrent : void 0)
          , r = w( () => n.value !== "span" ? gi(l, ["active", "activeClass", "append", "disabled", "href", "rel", "replace", "routerComponentName", "target", "to", "variant", "opacity", "opacityHover", "underlineVariant", "underlineOffset", "underlineOffsetHover", "underlineOpacity", "underlineOpacityHover", "icon"]) : {})
          , s = d => {
            if (l.disabled || l.active) {
                d.preventDefault(),
                d.stopImmediatePropagation();
                return
            }
            l.disabled || a("click", d)
        }
        ;
        return (d, c) => (y(),
        O("li", {
            class: te(["breadcrumb-item", o.value])
        }, [(y(),
        M(xe(n.value), ue({
            "aria-current": i.value
        }, r.value, {
            onClick: s
        }), {
            default: E( () => [A(d.$slots, "default", {}, () => [ye(fe(u(l).text), 1)])]),
            _: 3
        }, 16, ["aria-current"]))], 2))
    }
})
  , th = {
    "aria-label": "breadcrumb"
}
  , lh = {
    class: "breadcrumb"
}
  , ah = Q({
    __name: "BBreadcrumb",
    props: {
        items: {
            default: void 0
        }
    },
    setup(e) {
        const t = oe(e, "BBreadcrumb")
          , l = mm()
          , a = w( () => {
            var o;
            const n = t.items || ((o = l.items) == null ? void 0 : o.value) || [];
            let i = !1;
            return n.map( (r, s) => (typeof r == "string" && (r = {
                text: r
            },
            s < n.length - 1 && (r.href = "#")),
            r.active && (i = !0),
            !r.active && !i && (r.active = s + 1 === n.length),
            r))
        }
        );
        return (o, n) => (y(),
        O("nav", th, [ne("ol", lh, [A(o.$slots, "prepend"), (y(!0),
        O(Be, null, Ge(a.value, (i, r) => (y(),
        M(xd, ue({
            key: r,
            ref_for: !0
        }, i), {
            default: E( () => [ye(fe(i.text), 1)]),
            _: 2
        }, 1040))), 128)), A(o.$slots, "default"), A(o.$slots, "append")])]))
    }
})
  , oh = Q({
    __name: "BButtonGroup",
    props: {
        ariaLabel: {
            default: "Group"
        },
        size: {
            default: "md"
        },
        tag: {
            default: "div"
        },
        vertical: {
            type: Boolean,
            default: !1
        }
    },
    setup(e) {
        const t = oe(e, "BButtonGroup")
          , l = w( () => ({
            "btn-group": !t.vertical,
            [`btn-group-${t.size}`]: t.size !== "md",
            "btn-group-vertical": t.vertical
        }));
        return (a, o) => (y(),
        M(xe(u(t).tag), {
            class: te(l.value),
            role: "group",
            "aria-label": u(t).ariaLabel
        }, {
            default: E( () => [A(a.$slots, "default")]),
            _: 3
        }, 8, ["class", "aria-label"]))
    }
})
  , nh = ["role", "aria-label"]
  , ih = Q({
    __name: "BButtonToolbar",
    props: {
        ariaLabel: {
            default: "Group"
        },
        justify: {
            type: Boolean,
            default: !1
        },
        role: {
            default: "toolbar"
        }
    },
    setup(e) {
        const t = oe(e, "BButtonToolbar")
          , l = w( () => ({
            "justify-content-between": t.justify
        }));
        return (a, o) => (y(),
        O("div", {
            class: te([l.value, "btn-toolbar"]),
            role: u(t).role,
            "aria-label": u(t).ariaLabel
        }, [A(a.$slots, "default")], 10, nh))
    }
})
  , bi = Q({
    __name: "BImg",
    props: {
        blank: {
            type: Boolean,
            default: !1
        },
        blankColor: {
            default: "transparent"
        },
        block: {
            type: Boolean,
            default: !1
        },
        fluid: {
            type: Boolean,
            default: !1
        },
        fluidGrow: {
            type: Boolean,
            default: !1
        },
        height: {
            default: void 0
        },
        tag: {
            default: "img"
        },
        lazy: {
            type: Boolean,
            default: !1
        },
        sizes: {
            default: void 0
        },
        src: {
            default: void 0
        },
        srcset: {
            default: void 0
        },
        thumbnail: {
            type: Boolean,
            default: !1
        },
        width: {
            default: void 0
        },
        placement: {
            default: void 0
        },
        rounded: {
            type: [Boolean, String, Number],
            default: !1
        },
        roundedTop: {
            type: [Boolean, String, Number],
            default: void 0
        },
        roundedBottom: {
            type: [Boolean, String, Number],
            default: void 0
        },
        roundedStart: {
            type: [Boolean, String, Number],
            default: void 0
        },
        roundedEnd: {
            type: [Boolean, String, Number],
            default: void 0
        }
    },
    setup(e) {
        const t = oe(e, "BImg")
          , l = Oe( () => {
            var f;
            return (f = t.height) != null ? f : NaN
        }
        )
          , a = Oe( () => {
            var f;
            return (f = t.width) != null ? f : NaN
        }
        )
          , o = yi( () => ({
            rounded: t.rounded,
            roundedTop: t.roundedTop,
            roundedBottom: t.roundedBottom,
            roundedStart: t.roundedStart,
            roundedEnd: t.roundedEnd
        }))
          , n = w( () => typeof t.srcset == "string" ? t.srcset.split(",").filter(f => f).join(",") : Array.isArray(t.srcset) ? t.srcset.filter(f => f).join(",") : void 0)
          , i = w( () => typeof t.sizes == "string" ? t.sizes.split(",").filter(f => f).join(",") : Array.isArray(t.sizes) ? t.sizes.filter(f => f).join(",") : void 0)
          , r = w( () => {
            const f = Number.isNaN(a.value) ? void 0 : a.value
              , p = Number.isNaN(l.value) ? void 0 : l.value;
            if (t.blank) {
                if (f !== void 0 && p === void 0)
                    return {
                        height: f,
                        width: f
                    };
                if (f === void 0 && p !== void 0)
                    return {
                        height: p,
                        width: p
                    };
                if (f === void 0 && p === void 0)
                    return {
                        height: 1,
                        width: 1
                    }
            }
            return {
                width: f,
                height: p
            }
        }
        )
          , s = V( () => v(r.value.width, r.value.height, t.blankColor))
          , d = w( () => ({
            "float-start": t.placement === "start",
            "float-end": t.placement === "end",
            "mx-auto": t.placement === "center"
        }))
          , c = w( () => [o.value, d.value, {
            "img-thumbnail": t.thumbnail,
            "img-fluid": t.fluid || t.fluidGrow,
            "w-100": t.fluidGrow,
            "d-block": t.block || t.placement === "center"
        }])
          , v = (f, p, g) => `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg width="${f}" height="${p}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${f} ${p}" preserveAspectRatio="none">
    <rect width="100%" height="100%" style="fill:${g};"></rect>
    </svg>`)}`;
        return (f, p) => (y(),
        M(xe(u(t).tag), {
            class: te(c.value),
            src: u(t).blank ? s.value : u(t).src,
            width: r.value.width || void 0,
            height: r.value.height || void 0,
            srcset: u(t).blank ? void 0 : n.value,
            sizes: u(t).blank ? void 0 : i.value,
            loading: u(t).lazy ? "lazy" : "eager"
        }, null, 8, ["class", "src", "width", "height", "srcset", "sizes", "loading"]))
    }
})
  , Bi = Q({
    __name: "BCardImg",
    props: {
        placement: {
            default: "top"
        },
        blank: {
            type: Boolean,
            default: void 0
        },
        blankColor: {
            default: void 0
        },
        block: {
            type: Boolean,
            default: void 0
        },
        fluid: {
            type: Boolean,
            default: void 0
        },
        fluidGrow: {
            type: Boolean,
            default: void 0
        },
        height: {
            default: void 0
        },
        tag: {},
        lazy: {
            type: Boolean,
            default: void 0
        },
        sizes: {
            default: void 0
        },
        src: {
            default: void 0
        },
        srcset: {
            default: void 0
        },
        thumbnail: {
            type: Boolean,
            default: void 0
        },
        width: {
            default: void 0
        },
        rounded: {
            type: [Boolean, String, Number],
            default: void 0
        },
        roundedTop: {
            type: [Boolean, String, Number],
            default: void 0
        },
        roundedBottom: {
            type: [Boolean, String, Number],
            default: void 0
        },
        roundedStart: {
            type: [Boolean, String, Number],
            default: void 0
        },
        roundedEnd: {
            type: [Boolean, String, Number],
            default: void 0
        }
    },
    setup(e) {
        const t = oe(e, "BCardImg")
          , l = w( () => ({
            "card-img-top": t.placement === "top",
            "card-img-end": t.placement === "end",
            "card-img-bottom": t.placement === "bottom",
            "card-img-start": t.placement === "start",
            "card-img": t.placement === "overlay"
        }))
          , a = w( () => qo(t, ["placement"]));
        return (o, n) => (y(),
        M(bi, ue(a.value, {
            class: l.value
        }), null, 16, ["class"]))
    }
})
  , rh = ["innerHTML"]
  , Cd = Q({
    __name: "BCardHeadFoot",
    props: {
        borderVariant: {
            default: null
        },
        html: {
            default: void 0
        },
        tag: {
            default: "div"
        },
        text: {
            default: void 0
        },
        variant: {
            default: null
        },
        bgVariant: {
            default: null
        },
        textVariant: {
            default: null
        }
    },
    setup(e) {
        const t = e
          , l = jt(t)
          , a = w( () => [l.value, {
            [`border-${t.borderVariant}`]: t.borderVariant !== null
        }]);
        return (o, n) => (y(),
        M(xe(o.tag), {
            class: te(a.value)
        }, {
            default: E( () => [o.html ? (y(),
            O("div", {
                key: 0,
                innerHTML: o.html
            }, null, 8, rh)) : A(o.$slots, "default", {
                key: 1
            }, () => [ye(fe(o.text), 1)])]),
            _: 3
        }, 8, ["class"]))
    }
})
  , _i = Q({
    __name: "BCardHeader",
    props: {
        borderVariant: {
            default: void 0
        },
        html: {
            default: void 0
        },
        tag: {
            default: "div"
        },
        text: {
            default: void 0
        },
        variant: {
            default: void 0
        },
        bgVariant: {
            default: void 0
        },
        textVariant: {
            default: void 0
        }
    },
    setup(e) {
        const t = oe(e, "BCardHeader");
        return (l, a) => (y(),
        M(Cd, ue({
            class: "card-header"
        }, u(t)), {
            default: E( () => [A(l.$slots, "default")]),
            _: 3
        }, 16))
    }
})
  , kd = Q({
    __name: "BCardTitle",
    props: {
        tag: {
            default: "h4"
        },
        text: {
            default: void 0
        }
    },
    setup(e) {
        const t = oe(e, "BCardTitle");
        return (l, a) => (y(),
        M(xe(u(t).tag), {
            class: "card-title"
        }, {
            default: E( () => [A(l.$slots, "default", {}, () => [ye(fe(u(t).text), 1)])]),
            _: 3
        }))
    }
})
  , Sd = Q({
    __name: "BCardSubtitle",
    props: {
        text: {
            default: void 0
        },
        tag: {
            default: "h6"
        },
        textVariant: {
            default: "body-secondary"
        }
    },
    setup(e) {
        const t = oe(e, "BCardSubtitle")
          , l = w( () => ({
            [`text-${t.textVariant}`]: t.textVariant !== null
        }));
        return (a, o) => (y(),
        M(xe(u(t).tag), {
            class: te(["card-subtitle mb-2", l.value])
        }, {
            default: E( () => [A(a.$slots, "default", {}, () => [ye(fe(u(t).text), 1)])]),
            _: 3
        }, 8, ["class"]))
    }
})
  , wi = Q({
    __name: "BCardBody",
    props: {
        overlay: {
            type: Boolean,
            default: !1
        },
        subtitle: {
            default: void 0
        },
        subtitleTag: {
            default: "h4"
        },
        subtitleTextVariant: {
            default: void 0
        },
        tag: {
            default: "div"
        },
        text: {
            default: void 0
        },
        title: {
            default: void 0
        },
        titleTag: {
            default: "h4"
        },
        variant: {
            default: null
        },
        bgVariant: {
            default: null
        },
        textVariant: {
            default: null
        }
    },
    setup(e) {
        const t = oe(e, "BCardBody")
          , l = mt()
          , a = jt(t)
          , o = V( () => !lt(l.title))
          , n = V( () => !lt(l.subtitle))
          , i = w( () => [a.value, t.overlay ? "card-img-overlay" : "card-body"]);
        return (r, s) => (y(),
        M(xe(u(t).tag), {
            class: te(i.value)
        }, {
            default: E( () => [u(t).title || o.value ? (y(),
            M(kd, {
                key: 0,
                tag: u(t).titleTag
            }, {
                default: E( () => [A(r.$slots, "title", {}, () => [ye(fe(u(t).title), 1)])]),
                _: 3
            }, 8, ["tag"])) : me("", !0), u(t).subtitle || n.value ? (y(),
            M(Sd, {
                key: 1,
                tag: u(t).subtitleTag,
                "text-variant": u(t).subtitleTextVariant
            }, {
                default: E( () => [A(r.$slots, "subtitle", {}, () => [ye(fe(u(t).subtitle), 1)])]),
                _: 3
            }, 8, ["tag", "text-variant"])) : me("", !0), A(r.$slots, "default", {}, () => [ye(fe(u(t).text), 1)])]),
            _: 3
        }, 8, ["class"]))
    }
})
  , Td = Q({
    __name: "BCardFooter",
    props: {
        borderVariant: {
            default: void 0
        },
        html: {
            default: void 0
        },
        tag: {
            default: "div"
        },
        text: {
            default: void 0
        },
        variant: {
            default: void 0
        },
        bgVariant: {
            default: void 0
        },
        textVariant: {
            default: void 0
        }
    },
    setup(e) {
        const t = oe(e, "BCardFooter");
        return (l, a) => (y(),
        M(Cd, ue({
            class: "card-footer"
        }, u(t)), {
            default: E( () => [A(l.$slots, "default", {}, () => [ye(fe(u(t).text), 1)])]),
            _: 3
        }, 16))
    }
})
  , xi = Q({
    __name: "BCard",
    props: {
        align: {
            default: void 0
        },
        bodyBgVariant: {
            default: void 0
        },
        bodyClass: {
            default: void 0
        },
        bodyTag: {
            default: "div"
        },
        bodyText: {
            default: ""
        },
        bodyTextVariant: {
            default: void 0
        },
        borderVariant: {
            default: null
        },
        footer: {
            default: void 0
        },
        footerBgVariant: {
            default: void 0
        },
        footerBorderVariant: {
            default: void 0
        },
        footerClass: {
            default: void 0
        },
        footerHtml: {
            default: ""
        },
        footerTag: {
            default: "div"
        },
        footerTextVariant: {
            default: void 0
        },
        footerVariant: {
            default: null
        },
        header: {
            default: void 0
        },
        headerBgVariant: {
            default: void 0
        },
        headerBorderVariant: {
            default: void 0
        },
        headerClass: {
            default: void 0
        },
        headerHtml: {
            default: ""
        },
        headerTag: {
            default: "div"
        },
        headerTextVariant: {
            default: void 0
        },
        headerVariant: {
            default: null
        },
        imgAlt: {
            default: void 0
        },
        imgPlacement: {
            default: "top"
        },
        imgHeight: {
            default: void 0
        },
        imgSrc: {
            default: void 0
        },
        imgWidth: {
            default: void 0
        },
        noBody: {
            type: Boolean,
            default: !1
        },
        subtitle: {
            default: void 0
        },
        subtitleTag: {
            default: "h6"
        },
        subtitleTextVariant: {
            default: "body-secondary"
        },
        tag: {
            default: "div"
        },
        title: {
            default: void 0
        },
        titleTag: {
            default: "h4"
        },
        variant: {
            default: null
        },
        bgVariant: {
            default: null
        },
        textVariant: {
            default: null
        }
    },
    setup(e) {
        const t = oe(e, "BCard")
          , l = mt()
          , a = V( () => !lt(l.header))
          , o = V( () => !lt(l.footer))
          , n = jt(t)
          , i = w( () => [n.value, {
            [`text-${t.align}`]: t.align !== void 0,
            [`border-${t.borderVariant}`]: t.borderVariant !== null,
            "flex-row": t.imgPlacement === "start",
            "flex-row-reverse": t.imgPlacement === "end"
        }])
          , r = w( () => ({
            src: t.imgSrc,
            alt: t.imgAlt,
            height: t.imgHeight,
            width: t.imgWidth,
            placement: t.imgPlacement
        }))
          , s = _o();
        return (d, c) => (y(),
        M(xe(u(t).tag), {
            class: te(["card", i.value])
        }, {
            default: E( () => [pe(u(s).define, null, {
                default: E( () => [A(d.$slots, "img", {}, () => [u(t).imgSrc ? (y(),
                M(Bi, Ie(ue({
                    key: 0
                }, r.value)), null, 16)) : me("", !0)])]),
                _: 3
            }), u(t).imgPlacement !== "bottom" ? (y(),
            M(u(s).reuse, {
                key: 0
            })) : me("", !0), u(t).header || a.value || u(t).headerHtml ? (y(),
            M(_i, {
                key: 1,
                "bg-variant": u(t).headerBgVariant,
                variant: u(t).headerVariant,
                "border-variant": u(t).headerBorderVariant,
                html: u(t).headerHtml,
                tag: u(t).headerTag,
                "text-variant": u(t).headerTextVariant,
                class: te(u(t).headerClass)
            }, {
                default: E( () => [A(d.$slots, "header", {}, () => [ye(fe(u(t).header), 1)])]),
                _: 3
            }, 8, ["bg-variant", "variant", "border-variant", "html", "tag", "text-variant", "class"])) : me("", !0), u(t).noBody ? A(d.$slots, "default", {
                key: 3
            }, () => [ye(fe(u(t).bodyText), 1)]) : (y(),
            M(wi, {
                key: 2,
                overlay: u(t).imgPlacement === "overlay",
                "bg-variant": u(t).bodyBgVariant,
                tag: u(t).bodyTag,
                "text-variant": u(t).bodyTextVariant,
                subtitle: u(t).subtitle,
                "subtitle-tag": u(t).subtitleTag,
                "subtitle-text-variant": u(t).subtitleTextVariant,
                title: u(t).title,
                "title-tag": u(t).titleTag,
                class: te(u(t).bodyClass)
            }, {
                default: E( () => [A(d.$slots, "default", {}, () => [ye(fe(u(t).bodyText), 1)])]),
                _: 3
            }, 8, ["overlay", "bg-variant", "tag", "text-variant", "subtitle", "subtitle-tag", "subtitle-text-variant", "title", "title-tag", "class"])), u(t).footer || o.value || u(t).footerHtml ? (y(),
            M(Td, {
                key: 4,
                "bg-variant": u(t).footerBgVariant,
                "border-variant": u(t).footerBorderVariant,
                variant: u(t).footerVariant,
                html: u(t).footerHtml,
                tag: u(t).footerTag,
                "text-variant": u(t).footerTextVariant,
                class: te(u(t).footerClass)
            }, {
                default: E( () => [A(d.$slots, "footer", {}, () => [ye(fe(u(t).footer), 1)])]),
                _: 3
            }, 8, ["bg-variant", "border-variant", "variant", "html", "tag", "text-variant", "class"])) : me("", !0), u(t).imgPlacement === "bottom" ? (y(),
            M(u(s).reuse, {
                key: 5
            })) : me("", !0)]),
            _: 3
        }, 8, ["class"]))
    }
})
  , sh = Q({
    __name: "BCardGroup",
    props: {
        columns: {
            type: Boolean,
            default: !1
        },
        deck: {
            type: Boolean,
            default: !1
        },
        tag: {
            default: "div"
        }
    },
    setup(e) {
        const t = oe(e, "BCardGroup")
          , l = V( () => t.deck ? "card-deck" : t.columns ? "card-columns" : "card-group");
        return (a, o) => (y(),
        M(xe(u(t).tag), {
            class: te(l.value)
        }, {
            default: E( () => [A(a.$slots, "default")]),
            _: 3
        }, 8, ["class"]))
    }
})
  , uh = Q({
    __name: "BCardText",
    props: {
        tag: {
            default: "p"
        },
        text: {
            default: void 0
        }
    },
    setup(e) {
        const t = oe(e, "BCardText");
        return (l, a) => (y(),
        M(xe(u(t).tag), {
            class: "card-text"
        }, {
            default: E( () => [A(l.$slots, "default", {}, () => [ye(fe(u(t).text), 1)])]),
            _: 3
        }))
    }
})
  , dh = ["id"]
  , ch = {
    key: 0,
    class: "carousel-indicators"
}
  , fh = ["aria-current", "aria-label", "onClick"]
  , vh = ne("span", {
    class: "carousel-control-prev-icon",
    "aria-hidden": "true"
}, null, -1)
  , ph = {
    class: "visually-hidden"
}
  , mh = ne("span", {
    class: "carousel-control-next-icon",
    "aria-hidden": "true"
}, null, -1)
  , hh = {
    class: "visually-hidden"
}
  , gh = Q({
    __name: "BCarousel",
    props: Ae({
        background: {
            default: void 0
        },
        controls: {
            type: Boolean,
            default: !1
        },
        controlsNextText: {
            default: "Next"
        },
        controlsPrevText: {
            default: "Previous"
        },
        fade: {
            type: Boolean,
            default: !1
        },
        id: {
            default: void 0
        },
        imgHeight: {
            default: void 0
        },
        imgWidth: {
            default: void 0
        },
        indicators: {
            type: Boolean,
            default: !1
        },
        indicatorsButtonLabel: {
            default: "Slide"
        },
        interval: {
            default: 5e3
        },
        keyboard: {
            type: Boolean,
            default: !0
        },
        modelValue: {},
        noHoverPause: {
            type: Boolean,
            default: !1
        },
        noTouch: {
            type: Boolean,
            default: !1
        },
        noWrap: {
            type: Boolean,
            default: !1
        },
        ride: {
            type: [Boolean, String],
            default: !1
        },
        rideReverse: {
            type: Boolean,
            default: !1
        },
        touchThreshold: {
            default: 50
        }
    }, {
        modelValue: {
            default: 0
        },
        modelModifiers: {}
    }),
    emits: Ae(["slide", "slid"], ["update:modelValue"]),
    setup(e, {expose: t, emit: l}) {
        const a = oe(e, "BCarousel")
          , o = l
          , n = mt()
          , i = Me( () => a.id, "carousel")
          , r = Ne(e, "modelValue")
          , s = Y(null)
          , d = Oe( () => a.touchThreshold)
          , c = Y(null);
        pt( () => {
            var le;
            var I, X;
            c.value = (le = (X = (I = s.value) == null ? void 0 : I.find(_e => _e.$el.style.display !== "none")) == null ? void 0 : X.$props.interval) != null ? le : null
        }
        );
        const v = Oe( () => {
            var I;
            return (I = c.value) != null ? I : a.interval
        }
        )
          , f = Y(!1)
          , p = Y(!1)
          , g = Y(!0)
          , b = Y(null)
          , m = Y(null)
          , h = Y(r.value)
          , B = vi(m)
          , $ = V( () => `carousel-item carousel-item-${g.value ? "prev" : "next"} carousel-item-${g.value ? "end" : "start"}`)
          , x = V( () => `carousel-item active carousel-item-${g.value ? "start" : "end"}`)
          , {pause: C, resume: T} = Lu( () => {
            a.rideReverse ? R() : ee()
        }
        , v, {
            immediate: a.ride === "carousel"
        })
          , F = V( () => a.ride === !0 && p.value === !0 || a.ride === "carousel")
          , j = w( () => tm(n.default, "BCarouselSlide"))
          , L = w( () => ({
            "carousel-fade": a.fade
        }))
          , Z = I => {
            var le;
            var X;
            return new wv(I,{
                componentId: i.value,
                cancelable: !1,
                target: m.value,
                direction: g.value ? "right" : "left",
                from: h.value,
                to: r.value,
                relatedTarget: (le = (X = b.value) == null ? void 0 : X.children[r.value]) != null ? le : null
            })
        }
          , de = I => {
            if (f.value !== !0) {
                if (a.ride === !0 && (p.value = !0),
                F.value === !0 && T(),
                g.value = !(I < r.value),
                I >= j.value.length) {
                    if (a.noWrap)
                        return;
                    r.value = 0;
                    return
                }
                if (I < 0) {
                    if (a.noWrap)
                        return;
                    r.value = j.value.length - 1;
                    return
                }
                h.value = r.value,
                r.value = I
            }
        }
          , R = () => {
            de(r.value - 1)
        }
          , ee = () => {
            de(r.value + 1)
        }
          , k = I => {
            a.keyboard !== !1 && I()
        }
          , P = () => {
            a.noHoverPause || C()
        }
          , N = () => {
            F.value && T()
        }
          , {lengthX: D} = Up(m, {
            passive: !0,
            onSwipeStart() {
                a.noTouch !== !0 && C()
            },
            onSwipeEnd() {
                if (a.noTouch === !0)
                    return;
                const I = () => {
                    F.value !== !1 && T()
                }
                ;
                if (D.value >= d.value) {
                    ee(),
                    I();
                    return
                }
                D.value <= -d.value && (R(),
                I())
            }
        })
          , J = () => {
            o("slide", Z("slide")),
            f.value = !0
        }
          , q = () => {
            o("slid", Z("slid")),
            f.value = !1
        }
          , G = I => {
            r.value !== 0 && I.classList.add("carousel-item")
        }
          , z = I => {
            var _e;
            var X, le;
            c.value = (_e = (le = (X = s.value) == null ? void 0 : X.find(he => he.$el === I)) == null ? void 0 : le.$props.interval) != null ? _e : null
        }
        ;
        return Bt("ArrowLeft", () => {
            k(R)
        }
        , {
            target: m
        }),
        Bt("ArrowRight", () => {
            k(ee)
        }
        , {
            target: m
        }),
        ke( () => a.ride, () => {
            p.value = !1
        }
        ),
        ke(B, I => {
            if (I) {
                P();
                return
            }
            N()
        }
        ),
        t({
            next: ee,
            pause: C,
            prev: R,
            resume: T
        }),
        ht(ju, {
            background: V( () => a.background),
            width: V( () => a.imgWidth),
            height: V( () => a.imgHeight)
        }),
        (I, X) => (y(),
        O("div", {
            id: u(i),
            ref_key: "element",
            ref: m,
            class: te(["carousel slide pointer-event", L.value])
        }, [u(a).indicators ? (y(),
        O("div", ch, [(y(!0),
        O(Be, null, Ge(j.value.length, (le, _e) => (y(),
        O("button", {
            key: _e,
            type: "button",
            "data-bs-target": "",
            class: te(_e === r.value ? "active" : ""),
            "aria-current": _e === r.value ? !0 : void 0,
            "aria-label": `${u(a).indicatorsButtonLabel} ${_e}`,
            onClick: he => de(_e)
        }, null, 10, fh))), 128))])) : me("", !0), ne("div", {
            ref_key: "relatedTarget",
            ref: b,
            class: "carousel-inner"
        }, [pe(fu, {
            "enter-from-class": $.value,
            "enter-active-class": $.value,
            "enter-to-class": $.value,
            "leave-from-class": x.value,
            "leave-active-class": x.value,
            "leave-to-class": x.value,
            onBeforeLeave: J,
            onAfterLeave: q,
            onAfterEnter: G,
            onEnter: z
        }, {
            default: E( () => [(y(!0),
            O(Be, null, Ge(j.value, (le, _e) => ll((y(),
            M(xe(le), {
                key: _e,
                ref_for: !0,
                ref_key: "slideValues",
                ref: s,
                class: te({
                    active: _e === r.value && f.value === !1
                })
            }, null, 8, ["class"])), [[Fa, _e === r.value]])), 128))]),
            _: 1
        }, 8, ["enter-from-class", "enter-active-class", "enter-to-class", "leave-from-class", "leave-active-class", "leave-to-class"])], 512), u(a).controls ? (y(),
        O(Be, {
            key: 1
        }, [ne("button", {
            class: "carousel-control-prev",
            type: "button",
            onClick: R
        }, [vh, ne("span", ph, fe(u(a).controlsPrevText), 1)]), ne("button", {
            class: "carousel-control-next",
            type: "button",
            onClick: ee
        }, [mh, ne("span", hh, fe(u(a).controlsNextText), 1)])], 64)) : me("", !0)], 10, dh))
    }
})
  , yh = ["innerHTML"]
  , bh = {
    key: 1
}
  , Bh = ["innerHTML"]
  , _h = {
    key: 1
}
  , wh = Q({
    __name: "BCarouselSlide",
    props: {
        background: {
            default: void 0
        },
        caption: {
            default: void 0
        },
        captionHtml: {
            default: void 0
        },
        captionTag: {
            default: "h3"
        },
        contentTag: {
            default: "div"
        },
        contentVisibleUp: {
            default: void 0
        },
        id: {
            default: void 0
        },
        imgAlt: {
            default: void 0
        },
        imgBlank: {
            type: Boolean,
            default: !1
        },
        imgBlankColor: {
            default: "transparent"
        },
        imgHeight: {
            default: void 0
        },
        imgSrc: {
            default: void 0
        },
        imgSrcset: {
            default: void 0
        },
        imgWidth: {
            default: void 0
        },
        interval: {
            default: void 0
        },
        text: {
            default: void 0
        },
        textHtml: {
            default: void 0
        },
        textTag: {
            default: "p"
        }
    },
    setup(e) {
        const t = oe(e, "BCarouselSlide")
          , l = mt()
          , a = qe(ju, null)
          , o = V( () => t.text || t.textHtml || !lt(l.text))
          , n = V( () => t.caption || t.captionHtml || !lt(l.caption))
          , i = V( () => o.value || n.value || !lt(l.default))
          , r = w( () => ({
            background: `${t.background || (a == null ? void 0 : a.background.value) || "rgb(171, 171, 171)"} none repeat scroll 0% 0%`
        }))
          , s = w( () => ({
            "d-none": t.contentVisibleUp !== void 0,
            [`d-${t.contentVisibleUp}-block`]: t.contentVisibleUp !== void 0
        }));
        return (d, c) => (y(),
        O("div", {
            class: "carousel-item",
            style: Qe(r.value)
        }, [A(d.$slots, "img", {}, () => {
            var v, f;
            return [pe(bi, {
                class: "d-block w-100",
                alt: u(t).imgAlt,
                srcset: u(t).imgSrcset,
                src: u(t).imgSrc,
                width: u(t).imgWidth || ((v = u(a)) == null ? void 0 : v.width.value),
                height: u(t).imgHeight || ((f = u(a)) == null ? void 0 : f.height.value),
                blank: u(t).imgBlank,
                "blank-color": u(t).imgBlankColor
            }, null, 8, ["alt", "srcset", "src", "width", "height", "blank", "blank-color"])]
        }
        ), i.value ? (y(),
        M(xe(u(t).contentTag), {
            key: 0,
            class: te(["carousel-caption", s.value])
        }, {
            default: E( () => [n.value ? (y(),
            M(xe(u(t).captionTag), {
                key: 0
            }, {
                default: E( () => [A(d.$slots, "caption", {}, () => [u(t).captionHtml ? (y(),
                O("span", {
                    key: 0,
                    innerHTML: u(t).captionHtml
                }, null, 8, yh)) : (y(),
                O("span", bh, fe(u(t).caption), 1))])]),
                _: 3
            })) : me("", !0), o.value ? (y(),
            M(xe(u(t).textTag), {
                key: 1
            }, {
                default: E( () => [A(d.$slots, "text", {}, () => [u(t).textHtml ? (y(),
                O("span", {
                    key: 0,
                    innerHTML: u(t).textHtml
                }, null, 8, Bh)) : (y(),
                O("span", _h, fe(u(t).text), 1))])]),
                _: 3
            })) : me("", !0), A(d.$slots, "default")]),
            _: 3
        }, 8, ["class"])) : me("", !0)], 4))
    }
})
  , ua = Q({
    __name: "BCol",
    props: {
        alignSelf: {
            default: void 0
        },
        tag: {
            default: "div"
        },
        order: {
            default: void 0
        },
        offset: {
            default: void 0
        },
        cols: {
            default: void 0
        },
        col: {
            type: Boolean,
            default: !1
        },
        offsetSm: {
            default: void 0
        },
        offsetMd: {
            default: void 0
        },
        offsetLg: {
            default: void 0
        },
        offsetXl: {
            default: void 0
        },
        offsetXxl: {
            default: void 0
        },
        orderSm: {
            default: void 0
        },
        orderMd: {
            default: void 0
        },
        orderLg: {
            default: void 0
        },
        orderXl: {
            default: void 0
        },
        orderXxl: {
            default: void 0
        },
        sm: {
            type: [Boolean, Number, String],
            default: !1
        },
        md: {
            type: [Boolean, Number, String],
            default: !1
        },
        lg: {
            type: [Boolean, Number, String],
            default: !1
        },
        xl: {
            type: [Boolean, Number, String],
            default: !1
        },
        xxl: {
            type: [Boolean, Number, String],
            default: !1
        }
    },
    setup(e) {
        const t = oe(e, "BCol")
          , l = w( () => [...lo({
            sm: t.sm,
            md: t.md,
            lg: t.lg,
            xl: t.xl,
            xxl: t.xxl
        }, ["sm", "md", "lg", "xl", "xxl"], "col"), ...lo({
            order: t.order,
            orderLg: t.orderLg,
            orderMd: t.orderMd,
            orderSm: t.orderSm,
            orderXl: t.orderXl,
            orderXxl: t.orderXxl
        }, ["order", "orderLg", "orderMd", "orderSm", "orderXl", "orderXxl"], "order"), ...lo({
            offset: t.offset,
            offsetLg: t.offsetLg,
            offsetMd: t.offsetMd,
            offsetSm: t.offsetSm,
            offsetXl: t.offsetXl,
            offsetXxl: t.offsetXxl
        }, ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXxl"], "offset")])
          , a = w( () => [l.value, {
            col: t.col || !l.value.some(o => o.startsWith("col-")) && !t.cols,
            [`col-${t.cols}`]: t.cols !== void 0,
            [`offset-${t.offset}`]: t.offset !== void 0,
            [`order-${t.order}`]: t.order !== void 0,
            [`align-self-${t.alignSelf}`]: t.alignSelf !== void 0
        }]);
        return (o, n) => (y(),
        M(xe(u(t).tag), {
            class: te(a.value)
        }, {
            default: E( () => [A(o.$slots, "default")]),
            _: 3
        }, 8, ["class"]))
    }
})
  , xh = Q({
    __name: "BContainer",
    props: {
        fluid: {
            type: [Boolean, String],
            default: !1
        },
        gutterX: {
            default: void 0
        },
        gutterY: {
            default: void 0
        },
        tag: {
            default: "div"
        }
    },
    setup(e) {
        const t = oe(e, "BContainer")
          , l = w( () => ({
            container: t.fluid === !1,
            "container-fluid": t.fluid === !0,
            [`container-${t.fluid}`]: typeof t.fluid == "string",
            [`gx-${t.gutterX}`]: t.gutterX !== void 0,
            [`gy-${t.gutterY}`]: t.gutterY !== void 0
        }));
        return (a, o) => (y(),
        M(xe(u(t).tag), {
            class: te(l.value)
        }, {
            default: E( () => [A(a.$slots, "default")]),
            _: 3
        }, 8, ["class"]))
    }
})
  , Ch = {
    class: "visually-hidden"
}
  , kh = ["aria-labelledby", "role"]
  , Ci = Q({
    __name: "BDropdown",
    props: Ae({
        ariaLabel: {
            default: void 0
        },
        autoClose: {
            type: [Boolean, String],
            default: !0
        },
        boundary: {
            default: "clippingAncestors"
        },
        boundaryPadding: {
            default: void 0
        },
        center: {
            type: Boolean,
            default: !1
        },
        disabled: {
            type: Boolean,
            default: !1
        },
        dropend: {
            type: Boolean,
            default: !1
        },
        dropstart: {
            type: Boolean,
            default: !1
        },
        dropup: {
            type: Boolean,
            default: !1
        },
        end: {
            type: Boolean,
            default: !1
        },
        floatingMiddleware: {
            default: void 0
        },
        id: {
            default: void 0
        },
        isNav: {
            type: Boolean,
            default: !1
        },
        lazy: {
            type: Boolean,
            default: !1
        },
        menuClass: {
            default: void 0
        },
        modelValue: {
            type: Boolean
        },
        noCaret: {
            type: Boolean,
            default: !1
        },
        noFlip: {
            type: Boolean,
            default: !1
        },
        noShift: {
            type: Boolean,
            default: !1
        },
        noSize: {
            type: Boolean,
            default: !1
        },
        offset: {
            default: 0
        },
        role: {
            default: "menu"
        },
        size: {
            default: "md"
        },
        skipWrapper: {
            type: Boolean,
            default: !1
        },
        split: {
            type: Boolean,
            default: !1
        },
        splitButtonType: {
            default: "button"
        },
        splitClass: {
            default: void 0
        },
        splitDisabled: {
            type: Boolean,
            default: void 0
        },
        splitHref: {
            default: void 0
        },
        splitTo: {
            default: void 0
        },
        splitVariant: {
            default: void 0
        },
        strategy: {
            default: "absolute"
        },
        text: {
            default: void 0
        },
        toggleClass: {
            default: void 0
        },
        toggleText: {
            default: "Toggle dropdown"
        },
        variant: {
            default: "secondary"
        },
        wrapperClass: {
            default: void 0
        },
        teleportDisabled: {
            default: !1
        },
        teleportTo: {
            default: void 0
        }
    }, {
        modelValue: {
            type: Boolean,
            default: !1
        },
        modelModifiers: {}
    }),
    emits: Ae(["click", "hidden", "hide", "hide-prevented", "show", "show-prevented", "shown", "toggle"], ["update:modelValue"]),
    setup(e, {expose: t, emit: l}) {
        const a = oe(e, "BDropdown")
          , o = l
          , n = Me( () => a.id, "dropdown")
          , i = Ne(e, "modelValue")
          , r = qe(od, !1)
          , s = V( () => typeof a.offset == "string" || typeof a.offset == "number" ? a.offset : NaN)
          , d = Oe(s)
          , c = Y(null)
          , v = Y(null)
          , f = Y(null)
          , p = Y(null)
          , g = w( () => a.boundary === "document" || a.boundary === "viewport" ? void 0 : a.boundary)
          , b = w( () => a.boundary === "document" || a.boundary === "viewport" ? a.boundary : void 0)
          , m = V( () => a.split ? v.value : f.value);
        Bt("Escape", () => {
            i.value = !i.value
        }
        , {
            target: m
        }),
        Bt("Escape", () => {
            i.value = !i.value
        }
        , {
            target: c
        });
        const h = (P, N) => {
            var D, J, q, G, z, I, X;
            if ((J = c.value) != null && J.contains((D = P.target) == null ? void 0 : D.closest("form")) || /input|select|option|textarea|form/i.test((q = P.target) == null ? void 0 : q.tagName))
                return;
            if (P.preventDefault(),
            !i.value) {
                open(),
                it( () => h(P, N));
                return
            }
            const le = (G = c.value) == null ? void 0 : G.querySelectorAll(".dropdown-item:not(.disabled):not(:disabled)");
            if (le)
                if ((z = c.value) != null && z.contains(document.activeElement)) {
                    const _e = c.value.querySelector(".dropdown-item:focus")
                      , he = Array.prototype.indexOf.call(le, _e) + N;
                    he >= 0 && he < (le == null ? void 0 : le.length) && ((I = le[he]) == null || I.focus())
                } else
                    (X = le[N === -1 ? le.length - 1 : 0]) == null || X.focus()
        }
        ;
        Bt("ArrowUp", P => h(P, -1), {
            target: m
        }),
        Bt("ArrowDown", P => h(P, 1), {
            target: m
        }),
        Bt("ArrowUp", P => h(P, -1), {
            target: c
        }),
        Bt("ArrowDown", P => h(P, 1), {
            target: c
        });
        const B = w( () => Qp({
            top: a.dropup,
            start: a.dropstart,
            end: a.dropend,
            alignCenter: a.center,
            alignEnd: a.end
        }))
          , $ = Y({})
          , x = w( () => {
            if (a.floatingMiddleware !== void 0)
                return a.floatingMiddleware;
            const P = typeof a.offset == "string" || typeof a.offset == "number" ? d.value : a.offset
              , N = [Bu(P)];
            return a.noFlip === !1 && N.push(Au({
                boundary: g.value,
                rootBoundary: b.value,
                padding: a.boundaryPadding
            })),
            a.noShift === !1 && N.push($u({
                boundary: g.value,
                rootBoundary: b.value,
                padding: a.boundaryPadding
            })),
            a.noSize === !1 && N.push(Pu({
                boundary: g.value,
                rootBoundary: b.value,
                padding: a.boundaryPadding,
                apply({availableWidth: D, availableHeight: J}) {
                    $.value = {
                        maxHeight: J && i.value ? `${J}px` : void 0,
                        maxWidth: D && i.value ? `${D}px` : void 0
                    }
                }
            })),
            N
        }
        )
          , {update: C, floatingStyles: T} = Eu(m, c, {
            placement: B,
            middleware: x,
            strategy: V( () => a.strategy),
            whileElementsMounted: Vu
        })
          , F = w( () => [a.wrapperClass, {
            "btn-group": !a.wrapperClass && a.split,
            dropdown: !a.wrapperClass && !a.split,
            dropup: a.dropup,
            dropend: a.dropend,
            dropstart: a.dropstart,
            "position-static": a.boundary !== "clippingAncestors" && !a.isNav
        }])
          , j = w( () => [a.split ? a.splitClass : a.toggleClass, {
            "nav-link": a.isNav,
            "dropdown-toggle": !a.split,
            "dropdown-toggle-no-caret": a.noCaret && !a.split,
            show: a.split ? void 0 : i.value
        }])
          , L = () => {
            k()
        }
          , Z = P => {
            a.split ? o("click", P) : L()
        }
        ;
        Hu(c, () => {
            i.value && (a.autoClose === !0 || a.autoClose === "outside") && k()
        }
        , {
            ignore: [v, f]
        });
        const de = () => {
            i.value && (a.autoClose === !0 || a.autoClose === "inside") && k()
        }
          , R = () => {
            i.value && k()
        }
          , ee = () => {
            i.value || k()
        }
          , k = () => {
            var P, N;
            o("toggle");
            const D = i.value
              , J = new ta(D ? "hide" : "show");
            if (o(D ? "hide" : "show", J),
            J.defaultPrevented) {
                o(D ? "hide-prevented" : "show-prevented");
                return
            }
            i.value = !D,
            o(D ? "hidden" : "shown"),
            (N = (P = p.value) == null ? void 0 : P.dispatchEvent) == null || N.call(P, new Event("forceHide"))
        }
        ;
        return ke(i, () => {
            C()
        }
        ),
        t({
            hide: R,
            show: ee,
            toggle: k
        }),
        ht(Zu, {
            id: n,
            show: ee,
            hide: R,
            toggle: k,
            visible: V( () => i.value),
            isNav: V( () => a.isNav)
        }),
        (P, N) => (y(),
        M(Ha, {
            ref_key: "wrapper",
            ref: p,
            skip: u(r) || u(a).skipWrapper,
            class: te(F.value)
        }, {
            default: E( () => [pe(Zt, {
                id: u(n),
                ref_key: "splitButton",
                ref: f,
                variant: u(a).splitVariant || u(a).variant,
                size: u(a).size,
                class: te(j.value),
                disabled: u(a).splitDisabled || u(a).disabled,
                type: u(a).splitButtonType,
                "aria-label": u(a).ariaLabel,
                "aria-expanded": u(a).split ? void 0 : i.value,
                "aria-haspopup": u(a).split ? void 0 : "menu",
                href: u(a).split ? u(a).splitHref : void 0,
                to: u(a).split && u(a).splitTo ? u(a).splitTo : void 0,
                onClick: Z
            }, {
                default: E( () => [A(P.$slots, "button-content", {}, () => [ye(fe(u(a).text), 1)])]),
                _: 3
            }, 8, ["id", "variant", "size", "class", "disabled", "type", "aria-label", "aria-expanded", "aria-haspopup", "href", "to"]), u(a).split ? (y(),
            M(Zt, {
                key: 0,
                ref_key: "button",
                ref: v,
                variant: u(a).variant,
                size: u(a).size,
                disabled: u(a).disabled,
                class: te([[u(a).toggleClass, {
                    show: i.value
                }], "dropdown-toggle-split dropdown-toggle"]),
                "aria-expanded": i.value,
                "aria-haspopup": "menu",
                onClick: L
            }, {
                default: E( () => [ne("span", Ch, [A(P.$slots, "toggle-text", {}, () => [ye(fe(u(a).toggleText), 1)])])]),
                _: 3
            }, 8, ["variant", "size", "disabled", "class", "aria-expanded"])) : me("", !0), (y(),
            M(Fl, {
                to: u(a).teleportTo,
                disabled: !u(a).teleportTo || u(a).teleportDisabled
            }, [!u(a).lazy || i.value ? ll((y(),
            O("ul", {
                key: 0,
                ref_key: "floating",
                ref: c,
                style: Qe([u(T), $.value]),
                class: te(["dropdown-menu overflow-auto", [u(a).menuClass, {
                    show: i.value
                }]]),
                "aria-labelledby": u(n),
                role: u(a).role,
                onClick: de
            }, [A(P.$slots, "default", {
                hide: R,
                show: ee
            })], 14, kh)), [[Fa, u(a).lazy || i.value]]) : me("", !0)], 8, ["to", "disabled"]))]),
            _: 3
        }, 8, ["skip", "class"]))
    }
})
  , Sh = {
    role: "presentation"
}
  , Th = Q({
    __name: "BDropdownDivider",
    props: {
        tag: {
            default: "hr"
        }
    },
    setup(e) {
        const t = oe(e, "BDropdownDivider");
        return (l, a) => (y(),
        O("li", Sh, [(y(),
        M(xe(u(t).tag), {
            class: "dropdown-divider",
            role: "separator",
            "aria-orientation": "horizontal"
        }))]))
    }
})
  , Vh = {
    role: "presentation"
}
  , $h = Q({
    __name: "BDropdownForm",
    setup(e) {
        return (t, l) => (y(),
        O("li", Vh, [ne("form", ue({
            class: "dropdown-item-text"
        }, t.$attrs), [A(t.$slots, "default")], 16)]))
    }
})
  , Ah = {
    role: "presentation"
}
  , Ph = ["id", "aria-describedby"]
  , Oh = Q({
    inheritAttrs: !1,
    __name: "BDropdownGroup",
    props: {
        ariaDescribedby: {
            default: void 0
        },
        header: {
            default: void 0
        },
        headerClass: {
            default: void 0
        },
        headerTag: {
            default: "header"
        },
        headerVariant: {
            default: null
        },
        id: {
            default: void 0
        }
    },
    setup(e) {
        const t = oe(e, "BDropdownGroup")
          , l = V( () => t.id ? `${t.id}_group_dd_header` : void 0)
          , a = V( () => t.headerTag === "header" ? void 0 : "heading")
          , o = w( () => [t.headerClass, {
            [`text-${t.headerVariant}`]: t.headerVariant !== null
        }]);
        return (n, i) => (y(),
        O("li", Ah, [(y(),
        M(xe(u(t).headerTag), {
            id: l.value,
            class: te(["dropdown-header", o.value]),
            role: a.value
        }, {
            default: E( () => [A(n.$slots, "header", {}, () => [ye(fe(u(t).header), 1)])]),
            _: 3
        }, 8, ["id", "class", "role"])), ne("ul", ue({
            id: u(t).id,
            role: "group",
            class: "list-unstyled"
        }, n.$attrs, {
            "aria-describedby": u(t).ariaDescribedby || l.value
        }), [A(n.$slots, "default")], 16, Ph)]))
    }
})
  , Eh = {
    class: "dropdown-header"
}
  , Fh = Q({
    __name: "BDropdownHeader",
    setup(e) {
        return (t, l) => (y(),
        O("li", null, [ne("h6", Eh, [A(t.$slots, "default")])]))
    }
})
  , Vd = Q({
    inheritAttrs: !1,
    __name: "BDropdownItem",
    props: {
        linkClass: {
            default: void 0
        },
        wrapperAttrs: {
            default: void 0
        },
        active: {
            type: Boolean,
            default: void 0
        },
        activeClass: {
            default: void 0
        },
        disabled: {
            type: Boolean,
            default: void 0
        },
        exactActiveClass: {
            default: void 0
        },
        href: {
            default: void 0
        },
        icon: {
            type: Boolean,
            default: void 0
        },
        stretched: {
            type: Boolean,
            default: !1
        },
        opacity: {
            default: void 0
        },
        opacityHover: {
            default: void 0
        },
        rel: {
            default: void 0
        },
        replace: {
            type: Boolean,
            default: void 0
        },
        routerComponentName: {
            default: void 0
        },
        target: {
            default: void 0
        },
        to: {
            default: void 0
        },
        underlineOffset: {
            default: void 0
        },
        underlineOffsetHover: {
            default: void 0
        },
        underlineOpacity: {
            default: void 0
        },
        underlineOpacityHover: {
            default: void 0
        },
        underlineVariant: {
            default: void 0
        },
        variant: {
            default: null
        },
        prefetch: {
            type: Boolean
        },
        noPrefetch: {
            type: Boolean
        },
        prefetchedClass: {},
        noRel: {
            type: Boolean
        }
    },
    emits: ["click"],
    setup(e, {emit: t}) {
        const l = oe(e, "BDropdownItem")
          , a = t
          , {class: o, ...n} = Pa()
          , {computedLink: i, computedLinkProps: r} = Il(l)
          , s = w( () => [l.linkClass, {
            active: l.active,
            disabled: l.disabled,
            [`text-${l.variant}`]: l.variant !== null
        }])
          , d = V( () => i.value ? qt : l.href ? "a" : "button")
          , c = qe(mi, null)
          , v = qe(Zu, null)
          , f = qe(hi, null)
          , p = g => {
            var b, m, h;
            a("click", g),
            f !== null && ((b = f == null ? void 0 : f.autoClose) == null ? void 0 : b.value) === !0 && ((m = c == null ? void 0 : c.hide) == null || m.call(c)),
            (h = v == null ? void 0 : v.hide) == null || h.call(v)
        }
        ;
        return (g, b) => (y(),
        O("li", ue({
            role: "presentation",
            class: u(o)
        }, u(l).wrapperAttrs), [(y(),
        M(xe(d.value), ue({
            class: ["dropdown-item", s.value],
            disabled: u(l).disabled,
            "aria-disabled": u(l).disabled ? !0 : null,
            "aria-current": u(l).active ? !0 : null,
            href: d.value === "a" ? u(l).href : null,
            rel: u(l).rel,
            role: "menuitem",
            type: d.value === "button" ? "button" : null,
            target: u(l).target
        }, {
            ...u(r),
            ...n
        }, {
            onClick: p
        }), {
            default: E( () => [A(g.$slots, "default")]),
            _: 3
        }, 16, ["class", "disabled", "aria-disabled", "aria-current", "href", "rel", "type", "target"]))], 16))
    }
})
  , Ih = {
    role: "presentation"
}
  , Nh = ["disabled"]
  , Lh = Q({
    inheritAttrs: !1,
    __name: "BDropdownItemButton",
    props: {
        active: {
            type: Boolean,
            default: !1
        },
        activeClass: {
            default: "active"
        },
        buttonClass: {
            default: void 0
        },
        disabled: {
            type: Boolean,
            default: !1
        },
        variant: {
            default: null
        }
    },
    emits: ["click"],
    setup(e, {emit: t}) {
        const l = oe(e, "BDropdownItemButton")
          , a = t
          , o = w( () => [l.buttonClass, {
            [l.activeClass]: l.active,
            disabled: l.disabled,
            [`text-${l.variant}`]: l.variant !== null
        }])
          , n = i => {
            a("click", i)
        }
        ;
        return (i, r) => (y(),
        O("li", Ih, [ne("button", {
            role: "menu",
            type: "button",
            class: te(["dropdown-item", o.value]),
            disabled: u(l).disabled,
            onClick: n
        }, [A(i.$slots, "default")], 10, Nh)]))
    }
})
  , Hh = {
    role: "presentation"
}
  , Mh = Q({
    __name: "BDropdownText",
    props: {
        text: {
            default: ""
        }
    },
    setup(e) {
        const t = oe(e, "BDropdownText");
        return (l, a) => (y(),
        O("li", Hh, [ne("span", ue({
            class: "dropdown-item-text"
        }, l.$attrs), [A(l.$slots, "default", {}, () => [ye(fe(u(t).text), 1)])], 16)]))
    }
})
  , zh = ["id", "novalidate"]
  , $d = Q({
    __name: "BForm",
    props: {
        floating: {
            type: Boolean,
            default: !1
        },
        id: {
            default: void 0
        },
        novalidate: {
            type: Boolean,
            default: !1
        },
        validated: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["submit"],
    setup(e, {expose: t, emit: l}) {
        const a = oe(e, "BForm")
          , o = l
          , n = Y(null)
          , i = w( () => ({
            "form-floating": a.floating,
            "was-validated": a.validated
        }))
          , r = s => {
            o("submit", s)
        }
        ;
        return t({
            element: n
        }),
        (s, d) => (y(),
        O("form", {
            id: u(a).id,
            ref_key: "element",
            ref: n,
            novalidate: u(a).novalidate,
            class: te(i.value),
            onSubmit: Vl(r, ["prevent"])
        }, [A(s.$slots, "default")], 42, zh))
    }
})
  , Rh = {
    class: "form-floating"
}
  , Dh = ["for"]
  , jh = Q({
    __name: "BFormFloatingLabel",
    props: {
        label: {
            default: void 0
        },
        labelFor: {
            default: void 0
        },
        text: {
            default: void 0
        }
    },
    setup(e) {
        const t = oe(e, "BFormFloatingLabel");
        return (l, a) => (y(),
        O("div", Rh, [A(l.$slots, "default", {}, () => [ye(fe(u(t).text), 1)]), ne("label", {
            for: u(t).labelFor
        }, [A(l.$slots, "label", {}, () => [ye(fe(u(t).label), 1)])], 8, Dh)]))
    }
})
  , An = Q({
    __name: "BFormInvalidFeedback",
    props: {
        ariaLive: {
            default: void 0
        },
        forceShow: {
            type: Boolean,
            default: !1
        },
        id: {
            default: void 0
        },
        role: {
            default: void 0
        },
        state: {
            type: [Boolean, null],
            default: null
        },
        tag: {
            default: "div"
        },
        text: {
            default: void 0
        },
        tooltip: {
            type: Boolean,
            default: !1
        }
    },
    setup(e) {
        const t = oe(e, "BFormInvalidFeedback")
          , l = V( () => t.forceShow === !0 || t.state === !1)
          , a = w( () => ({
            "d-block": l.value,
            "invalid-feedback": !t.tooltip,
            "invalid-tooltip": t.tooltip
        }));
        return (o, n) => (y(),
        M(xe(u(t).tag), {
            id: u(t).id,
            role: u(t).role,
            "aria-live": u(t).ariaLive,
            "aria-atomic": u(t).ariaLive ? !0 : void 0,
            class: te(a.value)
        }, {
            default: E( () => [A(o.$slots, "default", {}, () => [ye(fe(u(t).text), 1)])]),
            _: 3
        }, 8, ["id", "role", "aria-live", "aria-atomic", "class"]))
    }
})
  , io = Q({
    __name: "BFormRow",
    props: {
        tag: {
            default: "div"
        }
    },
    setup(e) {
        const t = oe(e, "BFormRow");
        return (l, a) => (y(),
        M(xe(u(t).tag), {
            class: "row d-flex flex-wrap"
        }, {
            default: E( () => [A(l.$slots, "default")]),
            _: 3
        }))
    }
})
  , Pn = Q({
    __name: "BFormText",
    props: {
        id: {
            default: void 0
        },
        inline: {
            type: Boolean,
            default: !1
        },
        tag: {
            default: "small"
        },
        text: {
            default: void 0
        },
        textVariant: {
            default: "body-secondary"
        }
    },
    setup(e) {
        const t = oe(e, "BFormText")
          , l = w( () => ({
            [`text-${t.textVariant}`]: t.textVariant !== null,
            "form-text": !t.inline
        }));
        return (a, o) => (y(),
        M(xe(u(t).tag), {
            id: u(t).id,
            class: te(l.value)
        }, {
            default: E( () => [A(a.$slots, "default", {}, () => [ye(fe(u(t).text), 1)])]),
            _: 3
        }, 8, ["id", "class"]))
    }
})
  , On = Q({
    __name: "BFormValidFeedback",
    props: {
        ariaLive: {
            default: void 0
        },
        forceShow: {
            type: Boolean,
            default: !1
        },
        id: {
            default: void 0
        },
        role: {
            default: void 0
        },
        state: {
            type: [Boolean, null],
            default: null
        },
        tag: {
            default: "div"
        },
        text: {
            default: void 0
        },
        tooltip: {
            type: Boolean,
            default: !1
        }
    },
    setup(e) {
        const t = oe(e, "BFormInvalidFeedback")
          , l = V( () => t.forceShow === !0 || t.state === !0)
          , a = w( () => ({
            "d-block": l.value,
            "valid-feedback": !t.tooltip,
            "valid-tooltip": t.tooltip
        }));
        return (o, n) => (y(),
        M(xe(u(t).tag), {
            id: u(t).id,
            role: u(t).role,
            "aria-live": u(t).ariaLive,
            "aria-atomic": u(t).ariaLive ? !0 : void 0,
            class: te(a.value)
        }, {
            default: E( () => [A(o.$slots, "default", {}, () => [ye(fe(u(t).text), 1)])]),
            _: 3
        }, 8, ["id", "role", "aria-live", "aria-atomic", "class"]))
    }
})
  , Gh = ["id", "disabled", "required", "name", "form", "aria-label", "aria-labelledby", "aria-required", "value", "true-value", "false-value", "indeterminate"]
  , Wh = ["for"]
  , Ad = Q({
    inheritAttrs: !1,
    __name: "BFormCheckbox",
    props: Ae({
        ariaLabel: {
            default: void 0
        },
        ariaLabelledby: {
            default: void 0
        },
        autofocus: {
            type: Boolean,
            default: !1
        },
        button: {
            type: Boolean,
            default: !1
        },
        buttonGroup: {
            type: Boolean,
            default: !1
        },
        buttonVariant: {
            default: null
        },
        disabled: {
            type: Boolean,
            default: !1
        },
        form: {
            default: void 0
        },
        id: {
            default: void 0
        },
        indeterminate: {
            type: Boolean
        },
        inline: {
            type: Boolean,
            default: !1
        },
        modelValue: {
            type: [Array, Set, String, Boolean, Object, Number, null]
        },
        name: {
            default: void 0
        },
        plain: {
            type: Boolean,
            default: !1
        },
        required: {
            type: Boolean,
            default: void 0
        },
        reverse: {
            type: Boolean,
            default: !1
        },
        size: {
            default: void 0
        },
        state: {
            type: [Boolean, null],
            default: null
        },
        switch: {
            type: Boolean,
            default: !1
        },
        uncheckedValue: {
            type: [Array, Set, String, Boolean, Object, Number, null],
            default: !1
        },
        value: {
            type: [String, Boolean, Array, Set, Object, Number, null],
            default: !0
        }
    }, {
        modelValue: {
            type: [Array, Set, String, Boolean, Object, Number, null],
            default: void 0
        },
        modelModifiers: {},
        indeterminate: {
            type: Boolean,
            default: !1
        },
        indeterminateModifiers: {}
    }),
    emits: ["update:modelValue", "update:indeterminate"],
    setup(e, {expose: t}) {
        const l = oe(e, "BFormCheckbox")
          , a = mt()
          , o = Ne(e, "modelValue")
          , n = Ne(e, "indeterminate")
          , i = Me( () => l.id, "form-check")
          , r = qe(Yu, null)
          , s = Y(null)
          , {focused: d} = ft(s, {
            initialValue: l.autofocus
        })
          , c = V( () => !lt(a.default))
          , v = w({
            get: () => {
                var B;
                return (B = r == null ? void 0 : r.modelValue.value) != null ? B : o.value
            }
            ,
            set: B => {
                if (B !== void 0) {
                    if (n.value = !1,
                    r !== null && Array.isArray(B)) {
                        r.modelValue.value = B;
                        return
                    }
                    o.value = B
                }
            }
        })
          , f = V( () => {
            var B;
            return !!((B = l.name) != null ? B : r == null ? void 0 : r.name.value) && (l.required || (r == null ? void 0 : r.required.value))
        }
        )
          , p = V( () => {
            var B;
            return l.buttonGroup || ((B = r == null ? void 0 : r.buttons.value) != null ? B : !1)
        }
        )
          , g = w( () => {
            var B, $, x, C, T, F, j, L, Z;
            return {
                plain: l.plain || ((B = r == null ? void 0 : r.plain.value) != null ? B : !1),
                button: l.button || (($ = r == null ? void 0 : r.buttons.value) != null ? $ : !1),
                inline: l.inline || ((x = r == null ? void 0 : r.inline.value) != null ? x : !1),
                reverse: l.reverse || ((C = r == null ? void 0 : r.reverse.value) != null ? C : !1),
                switch: l.switch || ((T = r == null ? void 0 : r.switch.value) != null ? T : !1),
                state: l.state || (r == null ? void 0 : r.state.value),
                size: (j = (F = l.size) != null ? F : r == null ? void 0 : r.size.value) != null ? j : "md",
                buttonVariant: (Z = (L = l.buttonVariant) != null ? L : r == null ? void 0 : r.buttonVariant.value) != null ? Z : "secondary",
                hasDefaultSlot: c.value
            }
        }
        )
          , b = sd(g)
          , m = ud(g)
          , h = dd(g);
        return t({
            blur: () => {
                d.value = !1
            }
            ,
            element: s,
            focus: () => {
                d.value = !0
            }
        }),
        (B, $) => (y(),
        M(Ha, {
            skip: p.value,
            class: te(u(b))
        }, {
            default: E( () => {
                var x, C, T;
                return [ll(ne("input", ue({
                    id: u(i)
                }, B.$attrs, {
                    ref_key: "input",
                    ref: s,
                    "onUpdate:modelValue": $[0] || ($[0] = F => v.value = F),
                    class: u(m),
                    type: "checkbox",
                    disabled: u(l).disabled || ((x = u(r)) == null ? void 0 : x.disabled.value),
                    required: f.value || void 0,
                    name: u(l).name || ((C = u(r)) == null ? void 0 : C.name.value),
                    form: u(l).form || ((T = u(r)) == null ? void 0 : T.form.value),
                    "aria-label": u(l).ariaLabel,
                    "aria-labelledby": u(l).ariaLabelledby,
                    "aria-required": f.value || void 0,
                    value: u(l).value,
                    "true-value": u(l).value,
                    "false-value": u(l).uncheckedValue,
                    indeterminate: u(l).indeterminate
                }), null, 16, Gh), [[dv, v.value]]), c.value || u(l).plain === !1 ? (y(),
                O("label", {
                    key: 0,
                    for: u(i),
                    class: te(u(h))
                }, [A(B.$slots, "default")], 10, Wh)) : me("", !0)]
            }
            ),
            _: 3
        }, 8, ["skip", "class"]))
    }
})
  , qh = ["id"]
  , Uh = ["innerHTML"]
  , Kh = Q({
    __name: "BFormCheckboxGroup",
    props: Ae({
        ariaInvalid: {
            type: [Boolean, String],
            default: void 0
        },
        autofocus: {
            type: Boolean,
            default: !1
        },
        buttonVariant: {
            default: "secondary"
        },
        buttons: {
            type: Boolean,
            default: !1
        },
        disabled: {
            type: Boolean,
            default: !1
        },
        disabledField: {
            default: "disabled"
        },
        form: {
            default: void 0
        },
        htmlField: {
            default: "html"
        },
        id: {
            default: void 0
        },
        modelValue: {},
        name: {
            default: void 0
        },
        options: {
            default: () => []
        },
        plain: {
            type: Boolean,
            default: !1
        },
        required: {
            type: Boolean,
            default: !1
        },
        reverse: {
            type: Boolean,
            default: !1
        },
        size: {
            default: "md"
        },
        stacked: {
            type: Boolean,
            default: !1
        },
        state: {
            type: [Boolean, null],
            default: null
        },
        switches: {
            type: Boolean,
            default: !1
        },
        textField: {
            default: "text"
        },
        validated: {
            type: Boolean,
            default: !1
        },
        valueField: {
            default: "value"
        }
    }, {
        modelValue: {
            default: () => []
        },
        modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(e, {expose: t}) {
        const l = oe(e, "BFormCheckboxGroup")
          , a = Ne(e, "modelValue")
          , o = Me( () => l.id, "checkbox")
          , n = Me( () => l.name, "checkbox")
          , i = Y(null)
          , {focused: r} = ft(i, {
            initialValue: l.autofocus
        });
        ht(Yu, {
            modelValue: a,
            switch: V( () => l.switches),
            buttonVariant: V( () => l.buttonVariant),
            form: V( () => l.form),
            name: n,
            state: V( () => l.state),
            plain: V( () => l.plain),
            size: V( () => l.size),
            inline: V( () => !l.stacked),
            reverse: V( () => l.reverse),
            required: V( () => l.required),
            buttons: V( () => l.buttons),
            disabled: V( () => l.disabled)
        });
        const s = w( () => l.options.map( (f, p) => typeof f == "string" || typeof f == "number" ? {
            props: {
                value: f,
                disabled: l.disabled
            },
            text: f.toString(),
            html: void 0,
            self: Symbol(`checkboxGroupOptionItem${p}`)
        } : {
            props: {
                value: f[l.valueField],
                disabled: f[l.disabledField],
                ...f.props ? f.props : {}
            },
            text: f[l.textField],
            html: f[l.htmlField],
            self: Symbol(`checkboxGroupOptionItem${p}`)
        }))
          , d = w( () => ({
            required: l.required,
            ariaInvalid: l.ariaInvalid,
            state: l.state,
            validated: l.validated,
            buttons: l.buttons,
            stacked: l.stacked,
            size: l.size
        }))
          , c = cd(d)
          , v = fd(d);
        return t({
            blur: () => {
                r.value = !1
            }
            ,
            focus: () => {
                r.value = !0
            }
        }),
        (f, p) => (y(),
        O("div", ue(u(c), {
            id: u(o),
            ref_key: "element",
            ref: i,
            role: "group",
            class: [u(v), "bv-no-focus-ring"],
            tabindex: "-1"
        }), [A(f.$slots, "first"), (y(!0),
        O(Be, null, Ge(s.value, g => (y(),
        M(Ad, ue({
            key: g.self,
            ref_for: !0
        }, g.props), {
            default: E( () => [g.html ? (y(),
            O("span", {
                key: 0,
                innerHTML: g.html
            }, null, 8, Uh)) : (y(),
            O(Be, {
                key: 1
            }, [ye(fe(g.text), 1)], 64))]),
            _: 2
        }, 1040))), 128)), A(f.$slots, "default")], 16, qh))
    }
})
  , Yh = ["for"]
  , Xh = ["id", "form", "name", "multiple", "disabled", "capture", "accept", "required", "aria-label", "aria-labelledby", "aria-required", "directory", "webkitdirectory"]
  , Zh = Q({
    inheritAttrs: !1,
    __name: "BFormFile",
    props: Ae({
        ariaLabel: {
            default: void 0
        },
        ariaLabelledby: {
            default: void 0
        },
        accept: {
            default: ""
        },
        autofocus: {
            type: Boolean,
            default: !1
        },
        capture: {
            type: [Boolean, String],
            default: !1
        },
        directory: {
            type: Boolean,
            default: !1
        },
        disabled: {
            type: Boolean,
            default: !1
        },
        form: {
            default: void 0
        },
        id: {
            default: void 0
        },
        label: {
            default: ""
        },
        labelClass: {
            default: void 0
        },
        modelValue: {},
        multiple: {
            type: Boolean,
            default: !1
        },
        name: {
            default: void 0
        },
        noButton: {
            type: Boolean,
            default: !1
        },
        noDrop: {
            type: Boolean,
            default: !1
        },
        noTraverse: {
            type: Boolean,
            default: !1
        },
        plain: {
            type: Boolean,
            default: !1
        },
        required: {
            type: Boolean,
            default: !1
        },
        size: {
            default: void 0
        },
        state: {
            type: [Boolean, null],
            default: null
        }
    }, {
        modelValue: {
            default: null
        },
        modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(e, {expose: t}) {
        const l = mt()
          , a = oe(e, "BFormFile")
          , o = Ne(e, "modelValue")
          , n = Me( () => a.id)
          , i = Nl( () => a.state)
          , r = Y(null)
          , {focused: s} = ft(r, {
            initialValue: a.autofocus
        })
          , d = V( () => !lt(l.label))
          , c = V( () => typeof a.accept == "string" ? a.accept : a.accept.join(","))
          , v = w( () => [i.value, {
            [`form-control-${a.size}`]: a.size !== void 0,
            "form-control": !a.plain,
            "form-control-input-file-hide-button": a.noButton
        }])
          , f = () => {
            var b, m;
            const h = ((b = r.value) == null ? void 0 : b.files) === null || ((m = r.value) == null ? void 0 : m.files) === void 0 ? null : [...r.value.files];
            o.value = h === null ? null : a.multiple === !0 ? h : h[0]
        }
          , p = b => {
            a.noDrop === !0 && b.preventDefault()
        }
          , g = () => {
            o.value = null
        }
        ;
        return ke(o, b => {
            b === null && r.value !== null && (r.value.value = "")
        }
        ),
        t({
            blur: () => {
                s.value = !1
            }
            ,
            element: r,
            focus: () => {
                s.value = !0
            }
            ,
            reset: g
        }),
        (b, m) => (y(),
        O(Be, null, [d.value || u(a).label ? (y(),
        O("label", {
            key: 0,
            class: te(["form-label", u(a).labelClass]),
            for: u(n)
        }, [A(b.$slots, "label", {}, () => [ye(fe(u(a).label), 1)])], 10, Yh)) : me("", !0), ne("input", ue({
            id: u(n)
        }, b.$attrs, {
            ref_key: "input",
            ref: r,
            type: "file",
            class: v.value,
            form: u(a).form,
            name: u(a).name,
            multiple: u(a).multiple,
            disabled: u(a).disabled,
            capture: u(a).capture,
            accept: c.value || void 0,
            required: u(a).required || void 0,
            "aria-label": u(a).ariaLabel,
            "aria-labelledby": u(a).ariaLabelledby,
            "aria-required": u(a).required || void 0,
            directory: u(a).directory,
            webkitdirectory: u(a).directory,
            onChange: f,
            onDrop: p
        }), null, 16, Xh)], 64))
    }
})
  , Pd = ["input", "select", "textarea"]
  , Jh = Pd.map(e => `${e}:not([disabled])`).join()
  , Qh = [...Pd, "a", "button", "label"]
  , e0 = "label"
  , t0 = "invalid-feedback"
  , l0 = "valid-feedback"
  , a0 = "description"
  , o0 = "default"
  , n0 = Q({
    components: {
        BCol: ua,
        BFormInvalidFeedback: An,
        BFormRow: io,
        BFormText: Pn,
        BFormValidFeedback: On
    },
    props: {
        ariaInvalid: {
            type: [Boolean, String],
            default: void 0
        },
        contentCols: {
            type: [Boolean, String, Number],
            default: void 0
        },
        contentColsLg: {
            type: [Boolean, String, Number],
            default: void 0
        },
        contentColsMd: {
            type: [Boolean, String, Number],
            default: void 0
        },
        contentColsSm: {
            type: [Boolean, String, Number],
            default: void 0
        },
        contentColsXl: {
            type: [Boolean, String, Number],
            default: void 0
        },
        description: {
            type: [String],
            default: void 0
        },
        disabled: {
            type: Boolean,
            default: !1
        },
        feedbackAriaLive: {
            type: String,
            default: "assertive"
        },
        id: {
            type: String,
            default: void 0
        },
        invalidFeedback: {
            type: String,
            default: void 0
        },
        label: {
            type: String,
            default: void 0
        },
        labelAlign: {
            type: [Boolean, String, Number],
            default: void 0
        },
        labelAlignLg: {
            type: [Boolean, String, Number],
            default: void 0
        },
        labelAlignMd: {
            type: [Boolean, String, Number],
            default: void 0
        },
        labelAlignSm: {
            type: [Boolean, String, Number],
            default: void 0
        },
        labelAlignXl: {
            type: [Boolean, String, Number],
            default: void 0
        },
        labelClass: {
            type: [Array, Object, String],
            default: void 0
        },
        labelCols: {
            type: [Boolean, String, Number],
            default: void 0
        },
        labelColsLg: {
            type: [Boolean, String, Number],
            default: void 0
        },
        labelColsMd: {
            type: [Boolean, String, Number],
            default: void 0
        },
        labelColsSm: {
            type: [Boolean, String, Number],
            default: void 0
        },
        labelColsXl: {
            type: [Boolean, String, Number],
            default: void 0
        },
        labelFor: {
            type: String,
            default: void 0
        },
        labelSize: {
            type: String,
            default: void 0
        },
        labelSrOnly: {
            type: Boolean,
            default: !1
        },
        state: {
            type: Boolean,
            default: null
        },
        tooltip: {
            type: Boolean,
            default: !1
        },
        validFeedback: {
            type: String,
            default: void 0
        },
        validated: {
            type: Boolean,
            default: !1
        },
        floating: {
            type: Boolean,
            default: !1
        }
    },
    setup(e) {
        const t = ["xs", "sm", "md", "lg", "xl"]
          , l = (f, p) => t.reduce( (g, b) => {
            const m = Ir(b === "xs" ? "" : b, `${p}Align`)
              , h = f[m] || null;
            return h && (b === "xs" ? g.push(`text-${h}`) : g.push(`text-${b}-${h}`)),
            g
        }
        , [])
          , a = (f, p) => t.reduce( (g, b) => {
            const m = Ir(b === "xs" ? "" : b, `${p}Cols`);
            let h = f[m];
            if (h = h === "" ? !0 : h || !1,
            typeof h != "boolean" && h !== "auto") {
                const B = Number.parseInt(h);
                h = Number.isNaN(B) ? 0 : B,
                h = h > 0 ? h : !1
            }
            return h && (b === "xs" ? g[typeof h == "boolean" ? "col" : "cols"] = h : g[b || (typeof h == "boolean" ? "col" : "cols")] = h),
            g
        }
        , {})
          , o = Y(null)
          , n = (f, p=null) => {
            if (ni && e.labelFor && o.value !== null) {
                const g = o.value.querySelector(`#${CSS.escape(e.labelFor)}`);
                if (g) {
                    const b = "aria-describedby"
                      , m = (f || "").split(ao)
                      , h = (p || "").split(ao)
                      , B = (g.getAttribute(b) || "").split(ao).filter($ => !h.includes($)).concat(m).filter( ($, x, C) => C.indexOf($) === x).filter($ => $).join(" ").trim();
                    B ? g.setAttribute(b, B) : g.removeAttribute(b)
                }
            }
        }
          , i = w( () => a(e, "content"))
          , r = w( () => l(e, "label"))
          , s = w( () => a(e, "label"))
          , d = w( () => Object.keys(i.value).length > 0 || Object.keys(s.value).length > 0)
          , c = Nl( () => e.state)
          , v = jo( () => e.ariaInvalid, () => e.state);
        return ke( () => null, (f, p) => {
            f !== p && n(f, p)
        }
        ),
        pt( () => {
            it( () => {
                n(null)
            }
            )
        }
        ),
        {
            ariaDescribedby: null,
            computedAriaInvalid: v,
            contentColProps: i,
            isHorizontal: d,
            labelAlignClasses: r,
            labelColProps: s,
            onLegendClick: f => {
                if (e.labelFor || o.value === null)
                    return;
                const {target: p} = f
                  , g = p ? p.tagName : "";
                if (Qh.indexOf(g) !== -1)
                    return;
                const b = [...o.value.querySelectorAll(Jh)].filter(Cv)
                  , [m] = b;
                b.length === 1 && m instanceof HTMLElement && xv(m)
            }
            ,
            stateClass: c
        }
    },
    render() {
        const e = this.$props
          , t = this.$slots
          , l = Me()
          , a = !e.labelFor;
        let o = null;
        const n = ra(e0, {}, t) || e.label
          , i = n ? Me(void 0, "_BV_label_").value : null;
        if (n || this.isHorizontal) {
            const x = a ? "legend" : "label";
            if (e.labelSrOnly)
                n && (o = et(x, {
                    class: "visually-hidden",
                    id: i,
                    for: e.labelFor || null
                }, n)),
                this.isHorizontal ? o = et(ua, this.labelColProps, {
                    default: () => o
                }) : o = et("div", {}, [o]);
            else {
                const C = {
                    onClick: a ? this.onLegendClick : null,
                    ...this.isHorizontal ? this.labelColProps : {},
                    tag: this.isHorizontal ? x : null,
                    id: i,
                    for: e.labelFor || null,
                    tabIndex: a ? "-1" : null,
                    class: [this.isHorizontal ? "col-form-label" : "form-label", {
                        "bv-no-focus-ring": a,
                        "col-form-label": this.isHorizontal || a,
                        "pt-0": !this.isHorizontal && a,
                        "d-block": !this.isHorizontal && !a,
                        [`col-form-label-${e.labelSize}`]: !!e.labelSize
                    }, this.labelAlignClasses, e.labelClass]
                };
                this.isHorizontal ? o = et(ua, C, {
                    default: () => n
                }) : o = et(x, C, n)
            }
        }
        let r = null;
        const s = ra(t0, {}, t) || this.invalidFeedback
          , d = s ? Me(void 0, "_BV_feedback_invalid_").value : void 0;
        s && (r = et(An, {
            ariaLive: e.feedbackAriaLive,
            id: d,
            state: e.state,
            tooltip: e.tooltip
        }, {
            default: () => s
        }));
        let c = null;
        const v = ra(l0, {}, t) || this.validFeedback
          , f = v ? Me(void 0, "_BV_feedback_valid_").value : void 0;
        v && (c = et(On, {
            ariaLive: e.feedbackAriaLive,
            id: f,
            state: e.state,
            tooltip: e.tooltip
        }, {
            default: () => v
        }));
        let p = null;
        const g = ra(a0, {}, t) || this.description
          , b = g ? Me(void 0, "_BV_description_").value : void 0;
        g && (p = et(Pn, {
            id: b
        }, {
            default: () => g
        }));
        const m = this.ariaDescribedby = [b, e.state === !1 ? d : null, e.state === !0 ? f : null].filter(x => x).join(" ") || null
          , h = [ra(o0, {
            ariaDescribedby: m,
            descriptionId: b,
            id: l,
            labelId: i
        }, t) || "", r, c, p];
        !this.isHorizontal && e.floating && h.push(o);
        let B = et("div", {
            ref: "content",
            class: [{
                "form-floating": !this.isHorizontal && e.floating
            }]
        }, h);
        this.isHorizontal && (B = et(ua, {
            ref: "content",
            ...this.contentColProps
        }, {
            default: () => h
        }));
        const $ = {
            class: [this.stateClass, {
                "was-validated": e.validated
            }],
            id: Me( () => e.id).value,
            disabled: a ? e.disabled : null,
            role: a ? null : "group",
            "aria-invalid": this.computedAriaInvalid,
            "aria-labelledby": a && this.isHorizontal ? i : null
        };
        return this.isHorizontal && !a ? et(io, $, {
            default: () => [o, B]
        }) : et(a ? "fieldset" : "div", $, this.isHorizontal && a ? [et(io, null, {
            default: () => [o, B]
        })] : this.isHorizontal || !e.floating ? [o, B] : [B])
    }
})
  , i0 = ["id", "value", "name", "form", "type", "disabled", "placeholder", "required", "autocomplete", "readonly", "min", "max", "step", "list", "aria-required", "aria-invalid"]
  , zr = Q({
    __name: "BFormInput",
    props: Ae({
        max: {
            default: void 0
        },
        min: {
            default: void 0
        },
        step: {
            default: void 0
        },
        type: {
            default: "text"
        },
        ariaInvalid: {
            type: [Boolean, String],
            default: void 0
        },
        autocomplete: {
            default: void 0
        },
        autofocus: {
            type: Boolean,
            default: !1
        },
        disabled: {
            type: Boolean,
            default: !1
        },
        form: {
            default: void 0
        },
        formatter: {
            type: Function,
            default: void 0
        },
        id: {
            default: void 0
        },
        lazyFormatter: {
            type: Boolean,
            default: !1
        },
        list: {
            default: void 0
        },
        modelValue: {
            default: ""
        },
        name: {
            default: void 0
        },
        placeholder: {
            default: void 0
        },
        plaintext: {
            type: Boolean,
            default: !1
        },
        readonly: {
            type: Boolean,
            default: !1
        },
        required: {
            type: Boolean,
            default: !1
        },
        size: {
            default: void 0
        },
        state: {
            type: [Boolean, null],
            default: null
        },
        debounce: {
            default: 0
        },
        debounceMaxWait: {
            default: NaN
        }
    }, {
        modelValue: {
            default: ""
        },
        modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(e, {expose: t}) {
        const l = oe(e, "BFormInput")
          , [a,o] = Ne(e, "modelValue", {
            set: m => {
                if (m === null)
                    return;
                let h = m;
                if (o.trim && (h = h.toString().trim()),
                (o.number || l.type === "number") && typeof h == "string" && h !== "") {
                    const B = Number.parseFloat(h);
                    h = Number.isNaN(B) ? h : B
                }
                return h
            }
        })
          , {input: n, computedId: i, computedAriaInvalid: r, onInput: s, onChange: d, onBlur: c, focus: v, blur: f} = vd(l, a, o)
          , p = Nl( () => l.state)
          , g = Y(!1)
          , b = w( () => {
            const m = l.type === "range"
              , h = l.type === "color";
            return [p.value, {
                "form-control-highlighted": g.value,
                "form-range": m,
                "form-control": h || !l.plaintext && !m,
                "form-control-color": h,
                "form-control-plaintext": l.plaintext && !m && !h,
                [`form-control-${l.size}`]: !!l.size
            }]
        }
        );
        return t({
            blur: f,
            element: n,
            focus: v
        }),
        (m, h) => (y(),
        O("input", {
            id: u(i),
            ref_key: "input",
            ref: n,
            value: u(a),
            class: te(b.value),
            name: u(l).name || void 0,
            form: u(l).form || void 0,
            type: u(l).type,
            disabled: u(l).disabled,
            placeholder: u(l).placeholder,
            required: u(l).required || void 0,
            autocomplete: u(l).autocomplete || void 0,
            readonly: u(l).readonly || u(l).plaintext,
            min: u(l).min,
            max: u(l).max,
            step: u(l).step,
            list: u(l).type !== "password" ? u(l).list : void 0,
            "aria-required": u(l).required || void 0,
            "aria-invalid": u(r),
            onInput: h[0] || (h[0] = B => u(s)(B)),
            onChange: h[1] || (h[1] = B => u(d)(B)),
            onBlur: h[2] || (h[2] = B => u(c)(B))
        }, null, 42, i0))
    }
})
  , r0 = ["id", "disabled", "required", "name", "form", "aria-label", "aria-labelledby", "value", "aria-required"]
  , s0 = ["for"]
  , Od = Q({
    inheritAttrs: !1,
    __name: "BFormRadio",
    props: Ae({
        ariaLabel: {
            default: void 0
        },
        ariaLabelledby: {
            default: void 0
        },
        autofocus: {
            type: Boolean,
            default: !1
        },
        button: {
            type: Boolean,
            default: !1
        },
        buttonGroup: {
            type: Boolean,
            default: !1
        },
        buttonVariant: {
            default: null
        },
        disabled: {
            type: Boolean,
            default: !1
        },
        form: {
            default: void 0
        },
        id: {
            default: void 0
        },
        inline: {
            type: Boolean,
            default: !1
        },
        modelValue: {
            type: [Boolean, String, Array, Object, Number, null]
        },
        name: {
            default: void 0
        },
        plain: {
            type: Boolean,
            default: !1
        },
        required: {
            type: Boolean,
            default: !1
        },
        reverse: {
            type: Boolean,
            default: !1
        },
        size: {
            default: void 0
        },
        state: {
            type: [Boolean, null],
            default: null
        },
        value: {
            type: [Boolean, String, Array, Object, Number, null],
            default: !0
        }
    }, {
        modelValue: {
            type: [Boolean, String, Array, Object, Number, null],
            default: void 0
        },
        modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(e, {expose: t}) {
        const l = oe(e, "BFormRadio")
          , a = mt()
          , o = Ne(e, "modelValue")
          , n = Me( () => l.id, "form-check")
          , i = qe(Xu, null)
          , r = Y(null)
          , {focused: s} = ft(r, {
            initialValue: l.autofocus
        })
          , d = V( () => !lt(a.default))
          , c = w({
            get: () => {
                var h;
                return (h = i == null ? void 0 : i.modelValue.value) != null ? h : o.value
            }
            ,
            set: h => {
                if (h !== void 0) {
                    if (i !== null) {
                        i.modelValue.value = h;
                        return
                    }
                    o.value = h
                }
            }
        })
          , v = V( () => {
            var h;
            return !!((h = l.name) != null ? h : i == null ? void 0 : i.name.value) && (l.required || (i == null ? void 0 : i.required.value))
        }
        )
          , f = V( () => {
            var h;
            return l.buttonGroup || ((h = i == null ? void 0 : i.buttons.value) != null ? h : !1)
        }
        )
          , p = w( () => {
            var h, B, $, x, C, T, F, j;
            return {
                plain: l.plain || ((h = i == null ? void 0 : i.plain.value) != null ? h : !1),
                button: l.button || ((B = i == null ? void 0 : i.buttons.value) != null ? B : !1),
                inline: l.inline || (($ = i == null ? void 0 : i.inline.value) != null ? $ : !1),
                state: l.state || (i == null ? void 0 : i.state.value),
                reverse: l.reverse || ((x = i == null ? void 0 : i.reverse.value) != null ? x : !1),
                size: (T = (C = l.size) != null ? C : i == null ? void 0 : i.size.value) != null ? T : "md",
                buttonVariant: (j = (F = l.buttonVariant) != null ? F : i == null ? void 0 : i.buttonVariant.value) != null ? j : "secondary",
                hasDefaultSlot: d.value
            }
        }
        )
          , g = sd(p)
          , b = ud(p)
          , m = dd(p);
        return t({
            blur: () => {
                s.value = !1
            }
            ,
            element: r,
            focus: () => {
                s.value = !0
            }
        }),
        (h, B) => (y(),
        M(Ha, {
            skip: f.value,
            class: te(u(g))
        }, {
            default: E( () => {
                var $, x, C;
                return [ll(ne("input", ue({
                    id: u(n)
                }, h.$attrs, {
                    ref_key: "input",
                    ref: r,
                    "onUpdate:modelValue": B[0] || (B[0] = T => c.value = T),
                    class: u(b),
                    type: "radio",
                    disabled: u(l).disabled || (($ = u(i)) == null ? void 0 : $.disabled.value),
                    required: v.value || void 0,
                    name: u(l).name || ((x = u(i)) == null ? void 0 : x.name.value),
                    form: u(l).form || ((C = u(i)) == null ? void 0 : C.form.value),
                    "aria-label": u(l).ariaLabel,
                    "aria-labelledby": u(l).ariaLabelledby,
                    value: u(l).value,
                    "aria-required": v.value || void 0
                }), null, 16, r0), [[cv, c.value]]), d.value || u(l).plain === !1 ? (y(),
                O("label", {
                    key: 0,
                    for: u(n),
                    class: te(u(m))
                }, [A(h.$slots, "default")], 10, s0)) : me("", !0)]
            }
            ),
            _: 3
        }, 8, ["skip", "class"]))
    }
})
  , u0 = ["id"]
  , d0 = ["innerHTML"]
  , c0 = Q({
    __name: "BFormRadioGroup",
    props: Ae({
        ariaInvalid: {
            type: [Boolean, String],
            default: void 0
        },
        autofocus: {
            type: Boolean,
            default: !1
        },
        buttonVariant: {
            default: "secondary"
        },
        buttons: {
            type: Boolean,
            default: !1
        },
        disabled: {
            type: Boolean,
            default: !1
        },
        disabledField: {
            default: "disabled"
        },
        form: {
            default: void 0
        },
        htmlField: {
            default: "html"
        },
        id: {
            default: void 0
        },
        modelValue: {
            type: [Boolean, String, Array, Object, Number, null]
        },
        name: {
            default: void 0
        },
        options: {
            default: () => []
        },
        plain: {
            type: Boolean,
            default: !1
        },
        required: {
            type: Boolean,
            default: !1
        },
        reverse: {
            type: Boolean,
            default: !1
        },
        size: {
            default: "md"
        },
        stacked: {
            type: Boolean,
            default: !1
        },
        state: {
            type: [Boolean, null],
            default: null
        },
        textField: {
            default: "text"
        },
        validated: {
            type: Boolean,
            default: !1
        },
        valueField: {
            default: "value"
        }
    }, {
        modelValue: {
            type: [Boolean, String, Array, Object, Number, null],
            default: null
        },
        modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(e, {expose: t}) {
        const l = oe(e, "BFormRadioGroup")
          , a = Ne(e, "modelValue")
          , o = Me( () => l.id, "radio")
          , n = Me( () => l.name, "checkbox")
          , i = Y(null)
          , {focused: r} = ft(i, {
            initialValue: l.autofocus
        });
        ht(Xu, {
            modelValue: a,
            buttonVariant: V( () => l.buttonVariant),
            form: V( () => l.form),
            name: n,
            buttons: V( () => l.buttons),
            state: V( () => l.state),
            plain: V( () => l.plain),
            size: V( () => l.size),
            inline: V( () => !l.stacked),
            reverse: V( () => l.reverse),
            required: V( () => l.required),
            disabled: V( () => l.disabled)
        });
        const s = w( () => l.options.map( (f, p) => typeof f == "string" || typeof f == "number" ? {
            value: f,
            disabled: l.disabled,
            text: f.toString(),
            html: void 0,
            self: Symbol(`radioGroupOptionItem${p}`)
        } : {
            value: f[l.valueField],
            disabled: f[l.disabledField],
            ...f.props ? f.props : {},
            text: f[l.textField],
            html: f[l.htmlField],
            self: Symbol(`radioGroupOptionItem${p}`)
        }))
          , d = w( () => ({
            required: l.required,
            ariaInvalid: l.ariaInvalid,
            state: l.state,
            validated: l.validated,
            buttons: l.buttons,
            stacked: l.stacked,
            size: l.size
        }))
          , c = cd(d)
          , v = fd(d);
        return t({
            blur: () => {
                r.value = !1
            }
            ,
            focus: () => {
                r.value = !0
            }
        }),
        (f, p) => (y(),
        O("div", ue(u(c), {
            id: u(o),
            ref_key: "element",
            ref: i,
            role: "radiogroup",
            class: [u(v), "bv-no-focus-ring"],
            tabindex: "-1"
        }), [A(f.$slots, "first"), (y(!0),
        O(Be, null, Ge(s.value, g => (y(),
        M(Od, {
            key: g.self,
            disabled: g.disabled,
            value: g.value
        }, {
            default: E( () => [g.html ? (y(),
            O("span", {
                key: 0,
                innerHTML: g.html
            }, null, 8, d0)) : (y(),
            O(Be, {
                key: 1
            }, [ye(fe(g.text), 1)], 64))]),
            _: 2
        }, 1032, ["disabled", "value"]))), 128)), A(f.$slots, "default")], 16, u0))
    }
})
  , f0 = ["value", "disabled"]
  , ki = Q({
    __name: "BFormSelectOption",
    props: {
        disabled: {
            type: Boolean,
            default: !1
        },
        value: {
            default: void 0
        }
    },
    setup(e) {
        const t = oe(e, "BFormSelectOption");
        return (l, a) => (y(),
        O("option", {
            value: u(t).value,
            disabled: u(t).disabled
        }, [A(l.$slots, "default")], 8, f0))
    }
})
  , v0 = ["label"]
  , p0 = ["innerHTML"]
  , Ed = Q({
    __name: "BFormSelectOptionGroup",
    props: {
        disabledField: {
            default: "disabled"
        },
        htmlField: {
            default: "html"
        },
        label: {
            default: void 0
        },
        options: {
            default: () => []
        },
        textField: {
            default: "text"
        },
        valueField: {
            default: "value"
        }
    },
    setup(e) {
        const t = oe(e, "BFormSelectOptionGroup")
          , {normalizedOptions: l} = pd( () => t.options, t)
          , a = w( () => l.value);
        return (o, n) => (y(),
        O("optgroup", {
            label: u(t).label
        }, [A(o.$slots, "first"), (y(!0),
        O(Be, null, Ge(a.value, (i, r) => (y(),
        M(ki, ue({
            key: r,
            disabled: i.disabled,
            value: i.value,
            ref_for: !0
        }, o.$attrs), {
            default: E( () => [i.html ? (y(),
            O("span", {
                key: 0,
                innerHTML: i.html
            }, null, 8, p0)) : (y(),
            O(Be, {
                key: 1
            }, [ye(fe(i.text), 1)], 64))]),
            _: 2
        }, 1040, ["disabled", "value"]))), 128)), A(o.$slots, "default")], 8, v0))
    }
})
  , m0 = ["id", "name", "form", "multiple", "size", "disabled", "required", "aria-required", "aria-invalid"]
  , h0 = ["innerHTML"]
  , g0 = Q({
    __name: "BFormSelect",
    props: Ae({
        ariaInvalid: {
            type: [Boolean, String],
            default: void 0
        },
        autofocus: {
            type: Boolean,
            default: !1
        },
        disabled: {
            type: Boolean,
            default: !1
        },
        disabledField: {
            default: "disabled"
        },
        form: {
            default: void 0
        },
        htmlField: {
            default: "html"
        },
        id: {
            default: void 0
        },
        labelField: {
            default: "label"
        },
        modelValue: {
            type: [Boolean, String, Array, Object, Number, null]
        },
        multiple: {
            type: Boolean,
            default: !1
        },
        name: {
            default: void 0
        },
        options: {
            default: () => []
        },
        optionsField: {
            default: "options"
        },
        plain: {
            type: Boolean,
            default: !1
        },
        required: {
            type: Boolean,
            default: !1
        },
        selectSize: {
            default: 0
        },
        size: {
            default: "md"
        },
        state: {
            type: [Boolean, null],
            default: null
        },
        textField: {
            default: "text"
        },
        valueField: {
            default: "value"
        }
    }, {
        modelValue: {
            default: ""
        },
        modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(e, {expose: t}) {
        const l = oe(e, "BFormSelect")
          , a = Ne(e, "modelValue")
          , o = Me( () => l.id, "input")
          , n = Oe( () => l.selectSize)
          , i = Nl( () => l.state)
          , r = Y(null)
          , {focused: s} = ft(r, {
            initialValue: l.autofocus
        })
          , d = w( () => [i.value, {
            "form-control": l.plain,
            [`form-control-${l.size}`]: l.size !== "md" && l.plain,
            "form-select": !l.plain,
            [`form-select-${l.size}`]: l.size !== "md" && !l.plain
        }])
          , c = V( () => n.value || l.plain ? n.value : void 0)
          , v = jo( () => l.ariaInvalid, () => l.state)
          , {normalizedOptions: f, isComplex: p} = pd( () => l.options, l)
          , g = w( () => f.value)
          , b = w({
            get: () => a.value,
            set: m => {
                a.value = m
            }
        });
        return t({
            blur: () => {
                s.value = !1
            }
            ,
            element: r,
            focus: () => {
                s.value = !0
            }
        }),
        (m, h) => ll((y(),
        O("select", {
            id: u(o),
            ref_key: "input",
            ref: r,
            "onUpdate:modelValue": h[0] || (h[0] = B => b.value = B),
            class: te(d.value),
            name: u(l).name,
            form: u(l).form || void 0,
            multiple: u(l).multiple || void 0,
            size: c.value,
            disabled: u(l).disabled,
            required: u(l).required || void 0,
            "aria-required": u(l).required || void 0,
            "aria-invalid": u(v)
        }, [A(m.$slots, "first"), (y(!0),
        O(Be, null, Ge(g.value, (B, $) => (y(),
        O(Be, {
            key: $
        }, [u(p)(B) ? (y(),
        M(Ed, {
            key: 0,
            label: B.label,
            options: B.options,
            "value-field": u(l).valueField,
            "text-field": u(l).textField,
            "html-field": u(l).htmlField,
            "disabled-field": u(l).disabledField
        }, null, 8, ["label", "options", "value-field", "text-field", "html-field", "disabled-field"])) : (y(),
        M(ki, {
            key: 1,
            value: B.value,
            disabled: B.disabled
        }, {
            default: E( () => [B.html ? (y(),
            O("span", {
                key: 0,
                innerHTML: B.html
            }, null, 8, h0)) : (y(),
            O(Be, {
                key: 1
            }, [ye(fe(B.text), 1)], 64))]),
            _: 2
        }, 1032, ["value", "disabled"]))], 64))), 128)), A(m.$slots, "default")], 10, m0)), [[fv, b.value]])
    }
})
  , un = "ArrowDown"
  , Rr = "End"
  , Dr = "Home"
  , jr = "PageDown"
  , Gr = "PageUp"
  , dn = "ArrowUp"
  , y0 = ["lang", "tabindex", "title"]
  , b0 = ["name", "form", "value"]
  , B0 = ["id", "dir", "tabindex", "aria-label", "aria-invalid", "aria-required", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext"]
  , yt = {
    min: 1,
    max: 100,
    step: 1,
    repeatDelay: 500,
    repeatInterval: 100,
    repeatThreshold: 10,
    repeatMultiplier: 4
}
  , _0 = Q({
    __name: "BFormSpinbutton",
    props: Ae({
        ariaControls: {
            default: void 0
        },
        ariaLabel: {
            default: void 0
        },
        disabled: {
            type: Boolean,
            default: !1
        },
        form: {
            default: void 0
        },
        formatterFn: {
            type: Function,
            default: void 0
        },
        id: {
            default: void 0
        },
        inline: {
            type: Boolean,
            default: !1
        },
        labelDecrement: {
            default: "Decrement"
        },
        labelIncrement: {
            default: "Increment"
        },
        locale: {
            default: void 0
        },
        max: {
            default: yt.max
        },
        min: {
            default: yt.min
        },
        modelValue: {},
        name: {
            default: void 0
        },
        placeholder: {
            default: void 0
        },
        readonly: {
            type: Boolean,
            default: !1
        },
        repeatDelay: {
            default: yt.repeatDelay
        },
        repeatInterval: {
            default: yt.repeatInterval
        },
        repeatStepMultiplier: {
            default: yt.repeatMultiplier
        },
        repeatThreshold: {
            default: yt.repeatThreshold
        },
        required: {
            type: Boolean,
            default: !1
        },
        size: {
            default: void 0
        },
        state: {
            type: [Boolean, null],
            default: null
        },
        step: {
            default: yt.step
        },
        vertical: {
            type: Boolean,
            default: !1
        },
        wrap: {
            type: Boolean,
            default: !1
        }
    }, {
        modelValue: {
            default: null
        },
        modelModifiers: {}
    }),
    emits: Ae(["change"], ["update:modelValue"]),
    setup(e, {emit: t}) {
        const l = [dn, un, Dr, Rr, Gr, jr]
          , a = oe(e, "BFormSpinbutton")
          , o = t
          , n = Ne(e, "modelValue")
          , i = Y(null)
          , {focused: r} = ft(i)
          , s = Me( () => a.id, "spinbutton")
          , d = w( () => ({
            disabled: a.disabled,
            readonly: a.readonly,
            focus: r.value,
            "d-inline-flex": a.inline || a.vertical,
            "d-flex": !a.inline && !a.vertical,
            "align-items-stretch": !a.vertical,
            "flex-column": a.vertical,
            [`form-control-${a.size}`]: a.size !== void 0
        }))
          , c = w( () => ({
            "d-flex": a.vertical,
            "align-self-center": !a.vertical,
            "align-items-center": a.vertical,
            "border-top": a.vertical,
            "border-bottom": a.vertical,
            "border-start": !a.vertical,
            "border-end": !a.vertical
        }));
        let v, f, p = !1;
        const g = Oe( () => a.step)
          , b = V( () => Number.isNaN(g.value) ? yt.step : g.value)
          , m = Oe( () => a.min)
          , h = V( () => Number.isNaN(m.value) ? yt.min : m.value)
          , B = Oe( () => a.max)
          , $ = V( () => {
            const W = b.value
              , se = h.value;
            return Math.floor((B.value - se) / W) * W + se
        }
        )
          , x = Oe( () => a.repeatDelay, {
            nanToZero: !0,
            method: "parseInt"
        })
          , C = V( () => x.value > 0 ? x.value : yt.repeatDelay)
          , T = Oe( () => a.repeatInterval, {
            nanToZero: !0,
            method: "parseInt"
        })
          , F = V( () => T.value > 0 ? T.value : yt.repeatInterval)
          , j = Oe( () => a.repeatThreshold, {
            nanToZero: !0,
            method: "parseInt"
        })
          , L = V( () => Math.max(Number.isNaN(j.value) ? yt.repeatThreshold : j.value, 1))
          , Z = Oe( () => a.repeatStepMultiplier, {
            nanToZero: !0,
            method: "parseInt"
        })
          , de = V( () => Math.max(Number.isNaN(Z.value) ? yt.repeatMultiplier : Z.value, 1))
          , R = V( () => {
            const W = b.value;
            return Math.floor(W) === W ? 0 : (W.toString().split(".")[1] || "").length
        }
        )
          , ee = V( () => Math.pow(10, R.value || 0))
          , k = V( () => n.value === null ? "" : n.value.toFixed(R.value))
          , {isRtl: P, locale: N} = Cm()
          , D = w( () => {
            var se;
            const W = [((se = a.locale) != null ? se : N == null ? void 0 : N.value) || "locale"];
            return new Intl.NumberFormat(W).resolvedOptions().locale
        }
        )
          , J = () => new Intl.NumberFormat(D.value,{
            style: "decimal",
            useGrouping: !1,
            minimumIntegerDigits: 1,
            minimumFractionDigits: R.value,
            maximumFractionDigits: R.value,
            notation: "standard"
        }).format
          , q = V( () => {
            var W;
            return (W = a.formatterFn) != null ? W : J()
        }
        )
          , G = W => {
            let {value: se} = n;
            if (!a.disabled && se !== null) {
                const Re = b.value * W
                  , _ = h.value
                  , S = $.value
                  , H = ee.value
                  , {wrap: K} = a;
                se = Math.round((se - _) / Re) * Re + _ + Re,
                se = Math.round(se * H) / H,
                n.value = se > S ? K ? _ : S : se < _ ? K ? S : _ : se
            }
        }
          , z = (W=1) => {
            if (n.value === null) {
                n.value = h.value;
                return
            }
            G(1 * W)
        }
          , I = (W=1) => {
            if (n.value === null) {
                n.value = a.wrap ? $.value : h.value;
                return
            }
            G(-1 * W)
        }
          , X = W => {
            W.preventDefault(),
            W.stopImmediatePropagation()
        }
        ;
        Bt(l, W => {
            const {code: se, altKey: Re, ctrlKey: _, metaKey: S} = W;
            if (!(a.disabled || a.readonly || Re || _ || S) && (X(W),
            !p)) {
                if (He(),
                [dn, un].includes(se)) {
                    if (p = !0,
                    se === dn) {
                        le(W, z);
                        return
                    }
                    se === un && le(W, I);
                    return
                }
                if (se === Gr) {
                    z(de.value);
                    return
                }
                if (se === jr) {
                    I(de.value);
                    return
                }
                if (se === Dr) {
                    n.value = h.value;
                    return
                }
                se === Rr && (n.value = $.value)
            }
        }
        , {
            target: i,
            eventName: "keydown"
        }),
        Bt(l, W => {
            const {altKey: se, ctrlKey: Re, metaKey: _} = W;
            a.disabled || a.readonly || se || Re || _ || (X(W),
            He(),
            p = !1,
            o("change", n.value))
        }
        , {
            target: i,
            eventName: "keyup"
        });
        const le = (W, se) => {
            const {type: Re} = W || {};
            if (!a.disabled && !a.readonly) {
                if (_e(W) && Re === "mousedown" && W.button)
                    return;
                He(),
                se(1);
                const _ = L.value
                  , S = de.value
                  , H = C.value
                  , K = F.value;
                v = setTimeout( () => {
                    let U = 0;
                    f = setInterval( () => {
                        se(U < _ ? 1 : S),
                        U++
                    }
                    , K)
                }
                , H)
            }
        }
          , _e = W => W.type === "mouseup" || W.type === "mousedown"
          , he = W => {
            _e(W) && W.type === "mouseup" && W.button || (X(W),
            He(),
            be(!1),
            o("change", n.value))
        }
          , be = W => {
            try {
                Br(W, [document.body, "mouseup", he, !1]),
                Br(W, [document.body, "touchend", he, !1])
            } catch {}
        }
          , He = () => {
            clearTimeout(v),
            clearInterval(f),
            v = void 0,
            f = void 0
        }
          , Te = w( () => {
            const W = {
                svg: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    fill: "currentColor",
                    class: "bi bi-plus",
                    viewBox: "0 0 16 16"
                },
                path: {
                    d: "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                }
            }
              , se = {
                svg: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    fill: "currentColor",
                    class: "bi bi-dash",
                    viewBox: "0 0 16 16"
                },
                path: {
                    d: "M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
                }
            }
              , Re = {
                class: [{
                    "py-0": !a.vertical
                }, "btn", "btn-sm", "border-0", "rounded-0"],
                tabindex: "-1",
                type: "button",
                disabled: a.disabled || a.readonly,
                "aria-disabled": a.disabled || a.readonly ? !0 : void 0,
                "aria-controls": s.value
            }
              , _ = {
                "aria-hidden": !0,
                scale: r.value ? 1.5 : 1.25
            }
              , S = (U, ie) => {
                !a.disabled && !a.readonly && (X(U),
                be(!0),
                r.value = !0,
                le(U, ie))
            }
              , H = {
                button: {
                    ...Re,
                    "aria-label": a.labelIncrement || void 0,
                    "aria-keyshortcuts": "ArrowUp"
                },
                svg: {
                    ..._,
                    ...W.svg
                },
                path: {
                    ...W.path
                },
                slot: {
                    name: "increment"
                },
                handler: U => S(U, z)
            }
              , K = {
                button: {
                    ...Re,
                    "aria-label": a.labelDecrement || void 0,
                    "aria-keyshortcuts": "ArrowDown"
                },
                svg: {
                    ..._,
                    ...se.svg
                },
                path: {
                    ...se.path
                },
                slot: {
                    name: "decrement"
                },
                handler: U => S(U, I)
            };
            return {
                top: {
                    ...a.vertical ? H : K
                },
                bottom: {
                    ...a.vertical ? K : H
                }
            }
        }
        );
        return (W, se) => {
            var Re;
            return y(),
            O("div", {
                ref_key: "element",
                ref: i,
                class: te(["b-form-spinbutton form-control", d.value]),
                role: "group",
                lang: D.value,
                tabindex: u(a).disabled ? void 0 : "-1",
                title: u(a).ariaLabel,
                onClick: se[4] || (se[4] = _ => r.value = !0)
            }, [A(W.$slots, Te.value.top.slot.name, {
                hasFocus: u(r)
            }, () => [ne("button", ue(Te.value.top.button, {
                onMousedown: se[0] || (se[0] = (..._) => Te.value.top.handler && Te.value.top.handler(..._)),
                onTouchstart: se[1] || (se[1] = (..._) => Te.value.top.handler && Te.value.top.handler(..._))
            }), [(y(),
            O("svg", Ie(je(Te.value.top.svg)), [ne("path", Ie(je(Te.value.top.path)), null, 16)], 16))], 16)]), u(a).name && !u(a).disabled ? (y(),
            O("input", {
                key: "hidden",
                type: "hidden",
                name: u(a).name,
                form: u(a).form,
                value: k.value
            }, null, 8, b0)) : me("", !0), ne("output", {
                id: u(s),
                key: "output",
                class: te(["flex-grow-1", c.value]),
                dir: (Re = u(P)) != null && Re ? "rtl" : "ltr",
                tabindex: u(a).disabled ? void 0 : "0",
                role: "spinbutton",
                "aria-live": "off",
                "aria-label": u(a).ariaLabel || void 0,
                "aria-invalid": u(a).state === !1 || !n.value !== null && u(a).required ? !0 : void 0,
                "aria-required": u(a).required ? !0 : void 0,
                "aria-valuemin": h.value,
                "aria-valuemax": $.value,
                "aria-valuenow": n.value !== null ? n.value : void 0,
                "aria-valuetext": n.value !== null ? q.value(n.value) : void 0
            }, [ne("bdi", null, fe((n.value !== null ? q.value(n.value) : u(a).placeholder) || ""), 1)], 10, B0), A(W.$slots, Te.value.bottom.slot.name, {
                hasFocus: u(r)
            }, () => [ne("button", ue(Te.value.bottom.button, {
                onMousedown: se[2] || (se[2] = (..._) => Te.value.bottom.handler && Te.value.bottom.handler(..._)),
                onTouchstart: se[3] || (se[3] = (..._) => Te.value.bottom.handler && Te.value.bottom.handler(..._))
            }), [(y(),
            O("svg", Ie(je(Te.value.bottom.svg)), [ne("path", Ie(je(Te.value.bottom.path)), null, 16)], 16))], 16)])], 10, y0)
        }
    }
})
  , w0 = ["id"]
  , Fd = Q({
    __name: "BFormTag",
    props: {
        disabled: {
            type: Boolean,
            default: !1
        },
        id: {
            default: void 0
        },
        noRemove: {
            type: Boolean,
            default: !1
        },
        pill: {
            type: Boolean,
            default: !1
        },
        removeLabel: {
            default: "Remove tag"
        },
        tag: {
            default: "span"
        },
        title: {
            default: void 0
        },
        variant: {
            default: "secondary"
        }
    },
    emits: ["remove"],
    setup(e, {emit: t}) {
        const l = oe(e, "BFormTag")
          , a = t
          , o = mt()
          , n = Me( () => l.id)
          , i = w( () => {
            var c, v;
            var d;
            return (v = ((c = (d = o.default) == null ? void 0 : d.call(o, {})[0].children) != null ? c : "").toString() || l.title) != null ? v : ""
        }
        )
          , r = V( () => `${n.value}taglabel__`)
          , s = w( () => ({
            [`text-bg-${l.variant}`]: l.variant !== null,
            "rounded-pill": l.pill,
            disabled: l.disabled
        }));
        return (d, c) => (y(),
        M(xe(u(l).tag), {
            id: u(n),
            title: i.value,
            class: te(["badge b-form-tag d-inline-flex align-items-center mw-100", s.value]),
            "aria-labelledby": r.value
        }, {
            default: E( () => [ne("span", {
                id: r.value,
                class: "b-form-tag-content flex-grow-1 text-truncate"
            }, [A(d.$slots, "default", {}, () => [ye(fe(i.value), 1)])], 8, w0), !u(l).disabled && !u(l).noRemove ? (y(),
            M(aa, {
                key: 0,
                "aria-keyshortcuts": "Delete",
                "aria-label": u(l).removeLabel,
                class: "b-form-tag-remove",
                "aria-describedby": r.value,
                "aria-controls": u(l).id,
                onClick: c[0] || (c[0] = v => a("remove", i.value))
            }, null, 8, ["aria-label", "aria-describedby", "aria-controls"])) : me("", !0)]),
            _: 3
        }, 8, ["id", "title", "class", "aria-labelledby"]))
    }
})
  , x0 = ["id"]
  , C0 = ["id", "for", "aria-live"]
  , k0 = ["id", "aria-live"]
  , S0 = ["id"]
  , T0 = ["aria-controls"]
  , V0 = {
    role: "group",
    class: "d-flex"
}
  , $0 = ["id", "disabled", "value", "type", "placeholder", "form", "required", "aria-required"]
  , A0 = ["disabled"]
  , P0 = {
    "aria-live": "polite",
    "aria-atomic": "true"
}
  , O0 = {
    key: 0,
    class: "d-block invalid-feedback"
}
  , E0 = {
    key: 1,
    class: "form-text text-body-secondary"
}
  , F0 = {
    key: 2,
    class: "form-text text-body-secondary"
}
  , I0 = ["name", "value"]
  , N0 = Q({
    __name: "BFormTags",
    props: Ae({
        addButtonText: {
            default: "Add"
        },
        addButtonVariant: {
            default: "outline-secondary"
        },
        addOnChange: {
            type: Boolean,
            default: !1
        },
        autofocus: {
            type: Boolean,
            default: !1
        },
        disabled: {
            type: Boolean,
            default: !1
        },
        duplicateTagText: {
            default: "Duplicate tag(s)"
        },
        form: {
            default: void 0
        },
        inputAttrs: {
            default: void 0
        },
        inputClass: {
            default: void 0
        },
        inputId: {
            default: void 0
        },
        inputType: {
            default: "text"
        },
        invalidTagText: {
            default: "Invalid tag(s)"
        },
        limit: {
            default: void 0
        },
        limitTagsText: {
            default: "Tag limit reached"
        },
        modelValue: {},
        name: {
            default: void 0
        },
        noAddOnEnter: {
            type: Boolean,
            default: !1
        },
        noOuterFocus: {
            type: Boolean,
            default: !1
        },
        noTagRemove: {
            type: Boolean,
            default: !1
        },
        placeholder: {
            default: "Add tag..."
        },
        removeOnDelete: {
            type: Boolean,
            default: !1
        },
        required: {
            type: Boolean,
            default: !1
        },
        separator: {
            default: void 0
        },
        size: {
            default: "md"
        },
        state: {
            type: [Boolean, null],
            default: null
        },
        tagClass: {
            default: void 0
        },
        tagPills: {
            type: Boolean,
            default: !1
        },
        tagRemoveLabel: {
            default: void 0
        },
        tagRemovedLabel: {
            default: "Tag removed"
        },
        tagValidator: {
            type: Function,
            default: () => !0
        },
        tagVariant: {
            default: "secondary"
        }
    }, {
        modelValue: {
            default: () => []
        },
        modelModifiers: {}
    }),
    emits: Ae(["blur", "focus", "focusin", "focusout", "tag-state"], ["update:modelValue"]),
    setup(e, {expose: t, emit: l}) {
        const a = oe(e, "BFormTags")
          , o = l
          , n = Ne(e, "modelValue")
          , i = Me()
          , r = Oe( () => {
            var q;
            return (q = a.limit) != null ? q : NaN
        }
        )
          , s = Nl( () => a.state)
          , d = Y(null)
          , {focused: c} = ft(d, {
            initialValue: a.autofocus
        })
          , v = V( () => a.inputId || `${i.value}input__`)
          , f = Y([...n.value])
          , p = Y("")
          , g = Y(n.value.length > 0)
          , b = Y("")
          , m = Y([])
          , h = Y([])
          , B = Y([]);
        Tn(n, f, {
            direction: "ltr",
            transform: {
                ltr: q => [...q]
            }
        });
        const $ = w( () => [s.value, {
            [`form-control-${a.size}`]: a.size !== "md",
            disabled: a.disabled,
            focus: c.value
        }])
          , x = w( () => f.value.includes(p.value))
          , C = w( () => p.value === "" ? !1 : !a.tagValidator(p.value))
          , T = V( () => f.value.length === r.value)
          , F = V( () => !C.value && !x.value)
          , j = w( () => ({
            addButtonText: a.addButtonText,
            addButtonVariant: a.addButtonVariant,
            addTag: D,
            disableAddButton: F.value,
            disabled: a.disabled,
            duplicateTagText: a.duplicateTagText,
            duplicateTags: B.value,
            form: a.form,
            inputAttrs: {
                ...a.inputAttrs,
                disabled: a.disabled,
                form: a.form,
                id: v,
                value: p
            },
            inputHandlers: {
                input: R,
                keydown: k,
                change: ee
            },
            inputId: v,
            inputType: a.inputType,
            invalidTagText: a.invalidTagText,
            invalidTags: h.value,
            isDuplicate: x.value,
            isInvalid: C.value,
            isLimitReached: T.value,
            limitTagsText: a.limitTagsText,
            limit: r.value,
            noTagRemove: a.noTagRemove,
            placeholder: a.placeholder,
            removeTag: J,
            required: a.required,
            separator: a.separator,
            size: a.size,
            state: a.state,
            tagClass: a.tagClass,
            tagPills: a.tagPills,
            tagRemoveLabel: a.tagRemoveLabel,
            tagVariant: a.tagVariant,
            tags: f.value
        }))
          , L = q => {
            if (a.disabled) {
                q.target.blur();
                return
            }
            o("focusin", q)
        }
          , Z = q => {
            a.disabled || a.noOuterFocus || (c.value = !0,
            o("focus", q))
        }
          , de = q => {
            c.value = !1,
            o("blur", q)
        }
          , R = q => {
            var G, z;
            const I = typeof q == "string" ? q : q.target.value;
            if (g.value = !1,
            (G = a.separator) != null && G.includes(I.charAt(0)) && I.length > 0) {
                d.value && (d.value.value = "");
                return
            }
            if (p.value = I,
            (z = a.separator) != null && z.includes(I.charAt(I.length - 1))) {
                D(I.slice(0, I.length - 1));
                return
            }
            m.value = a.tagValidator(I) && !x.value ? [I] : [],
            h.value = a.tagValidator(I) ? [] : [I],
            B.value = x.value ? [I] : [],
            o("tag-state", m.value, h.value, B.value)
        }
          , ee = q => {
            a.addOnChange && (R(q),
            x.value || D(p.value))
        }
          , k = q => {
            if (q.key === "Enter" && !a.noAddOnEnter) {
                D(p.value);
                return
            }
            (q.key === "Backspace" || q.key === "Delete") && a.removeOnDelete && p.value === "" && g.value && f.value.length > 0 ? J(f.value[f.value.length - 1]) : g.value = !0
        }
        ;
        Bt(k, {
            target: d
        });
        const P = w( () => {
            if (a.separator)
                return typeof a.separator == "string" ? a.separator : a.separator.join("")
        }
        )
          , N = w( () => {
            if (P.value)
                return new RegExp(`[${cm(P.value)}]+`)
        }
        )
          , D = q => {
            q = (q != null ? q : p.value).trim();
            const G = N.value ? q.split(N.value).map(X => X.trim()) : [q]
              , z = [];
            for (const X of G)
                if (!(X === "" || x.value || !a.tagValidator(X))) {
                    if (r.value && T.value)
                        break;
                    z.push(X)
                }
            const I = [...n.value, ...z];
            p.value = "",
            g.value = !0,
            n.value = I,
            c.value = !0
        }
          , J = q => {
            var z;
            const G = f.value.indexOf((z = q == null ? void 0 : q.toString()) != null ? z : "");
            G !== -1 && (b.value = f.value.splice(G, 1).toString(),
            n.value = f.value)
        }
        ;
        return t({
            blur: () => {
                c.value = !1
            }
            ,
            element: d,
            focus: () => {
                c.value = !0
            }
        }),
        (q, G) => (y(),
        O("div", {
            id: u(i),
            class: te(["b-form-tags form-control h-auto", $.value]),
            role: "group",
            tabindex: "-1",
            onFocusin: L,
            onFocusout: G[1] || (G[1] = z => o("focusout", z))
        }, [ne("output", {
            id: `${u(i)}selected_tags__`,
            class: "visually-hidden",
            for: v.value,
            "aria-live": u(c) ? "polite" : "off",
            "aria-atomic": "true",
            "aria-relevant": "additions text"
        }, fe(f.value.join(", ")), 9, C0), ne("div", {
            id: `${u(i)}removed_tags__`,
            role: "status",
            "aria-live": u(c) ? "assertive" : "off",
            "aria-atomic": "true",
            class: "visually-hidden"
        }, " (" + fe(u(a).tagRemovedLabel) + ") " + fe(b.value), 9, k0), A(q.$slots, "default", Ie(je(j.value)), () => [ne("ul", {
            id: `${u(i)}tag_list__`,
            class: "b-form-tags-list list-unstyled mb-0 d-flex flex-wrap align-items-center"
        }, [(y(!0),
        O(Be, null, Ge(f.value, (z, I) => A(q.$slots, "tag", {
            key: I,
            tag: z,
            tagClass: u(a).tagClass,
            tagVariant: u(a).tagVariant,
            tagPills: u(a).tagPills,
            removeTag: J
        }, () => [(y(),
        M(Fd, {
            key: z,
            class: te(u(a).tagClass),
            tag: "li",
            variant: u(a).tagVariant,
            pill: u(a).tagPills,
            onRemove: J
        }, {
            default: E( () => [ye(fe(z), 1)]),
            _: 2
        }, 1032, ["class", "variant", "pill"]))])), 128)), ne("li", {
            role: "none",
            "aria-live": "off",
            class: "b-from-tags-field flex-grow-1",
            "aria-controls": `${u(i)}tag_list__`
        }, [ne("div", V0, [ne("input", ue({
            id: v.value,
            ref_key: "input",
            ref: d,
            disabled: u(a).disabled,
            value: p.value,
            type: u(a).inputType,
            placeholder: u(a).placeholder,
            class: "b-form-tags-input w-100 flex-grow-1 p-0 m-0 bg-transparent border-0",
            style: {
                outline: "currentcolor none 0px",
                "min-width": "5rem"
            }
        }, u(a).inputAttrs, {
            form: u(a).form,
            required: u(a).required || void 0,
            "aria-required": u(a).required || void 0,
            onInput: R,
            onChange: ee,
            onFocus: Z,
            onBlur: de
        }), null, 16, $0), F.value ? (y(),
        O("button", {
            key: 0,
            type: "button",
            class: te(["btn b-form-tags-button py-0", [q.inputClass, {
                [`btn-${u(a).addButtonVariant}`]: u(a).addButtonVariant !== null,
                "disabled invisible": p.value.length === 0
            }]]),
            style: {
                "font-size": "90%"
            },
            disabled: u(a).disabled || p.value.length === 0 || T.value,
            onClick: G[0] || (G[0] = z => D(p.value))
        }, [A(q.$slots, "add-button-text", {}, () => [ye(fe(u(a).addButtonText), 1)])], 10, A0)) : me("", !0)])], 8, T0)], 8, S0), ne("div", P0, [C.value ? (y(),
        O("div", O0, fe(u(a).invalidTagText) + ": " + fe(p.value), 1)) : me("", !0), x.value ? (y(),
        O("small", E0, fe(u(a).duplicateTagText) + ": " + fe(p.value), 1)) : me("", !0), f.value.length === u(a).limit ? (y(),
        O("small", F0, fe(u(a).limitTagsText), 1)) : me("", !0)])]), u(a).name ? (y(!0),
        O(Be, {
            key: 0
        }, Ge(f.value, (z, I) => (y(),
        O("input", {
            key: I,
            type: "hidden",
            name: u(a).name,
            value: z
        }, null, 8, I0))), 128)) : me("", !0)], 42, x0))
    }
})
  , L0 = ["id", "name", "form", "value", "disabled", "placeholder", "required", "autocomplete", "readonly", "aria-required", "aria-invalid", "rows", "wrap"]
  , H0 = Q({
    __name: "BFormTextarea",
    props: Ae({
        noResize: {
            type: Boolean,
            default: !1
        },
        rows: {
            default: 2
        },
        wrap: {
            default: "soft"
        },
        ariaInvalid: {
            type: [Boolean, String],
            default: void 0
        },
        autocomplete: {
            default: void 0
        },
        autofocus: {
            type: Boolean,
            default: !1
        },
        disabled: {
            type: Boolean,
            default: !1
        },
        form: {
            default: void 0
        },
        formatter: {
            type: Function,
            default: void 0
        },
        id: {
            default: void 0
        },
        lazyFormatter: {
            type: Boolean,
            default: !1
        },
        list: {
            default: void 0
        },
        modelValue: {
            default: ""
        },
        name: {
            default: void 0
        },
        placeholder: {
            default: void 0
        },
        plaintext: {
            type: Boolean,
            default: !1
        },
        readonly: {
            type: Boolean,
            default: !1
        },
        required: {
            type: Boolean,
            default: !1
        },
        size: {
            default: void 0
        },
        state: {
            type: [Boolean, null],
            default: null
        },
        debounce: {
            default: 0
        },
        debounceMaxWait: {
            default: NaN
        }
    }, {
        modelValue: {
            default: ""
        },
        modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(e, {expose: t}) {
        const l = oe(e, "BFormTextarea")
          , [a,o] = Ne(e, "modelValue", {
            set: m => {
                if (m === null)
                    return;
                let h = m;
                if (o.trim && (h = h.toString().trim()),
                o.number && typeof h == "string" && h !== "") {
                    const B = Number.parseFloat(h);
                    h = Number.isNaN(B) ? h : B
                }
                return h
            }
        })
          , {input: n, computedId: i, computedAriaInvalid: r, onInput: s, onChange: d, onBlur: c, focus: v, blur: f} = vd(l, a, o)
          , p = Nl( () => l.state)
          , g = w( () => [p.value, l.plaintext ? "form-control-plaintext" : "form-control", {
            [`form-control-${l.size}`]: !!l.size
        }])
          , b = w( () => ({
            resize: l.noResize ? "none" : void 0
        }));
        return t({
            blur: f,
            element: n,
            focus: v
        }),
        (m, h) => {
            var B;
            return y(),
            O("textarea", {
                id: u(i),
                ref_key: "input",
                ref: n,
                class: te(g.value),
                name: u(l).name || void 0,
                form: u(l).form || void 0,
                value: (B = u(a)) != null ? B : void 0,
                disabled: u(l).disabled,
                placeholder: u(l).placeholder,
                required: u(l).required || void 0,
                autocomplete: u(l).autocomplete || void 0,
                readonly: u(l).readonly || u(l).plaintext,
                "aria-required": u(l).required || void 0,
                "aria-invalid": u(r),
                rows: u(l).rows,
                style: Qe(b.value),
                wrap: u(l).wrap || void 0,
                onInput: h[0] || (h[0] = $ => u(s)($)),
                onChange: h[1] || (h[1] = $ => u(d)($)),
                onBlur: h[2] || (h[2] = $ => u(c)($))
            }, null, 46, L0)
        }
    }
})
  , M0 = {
    key: 0,
    class: "input-group-text"
}
  , z0 = ["innerHTML"]
  , R0 = {
    key: 1
}
  , D0 = {
    key: 0,
    class: "input-group-text"
}
  , j0 = ["innerHTML"]
  , G0 = {
    key: 1
}
  , W0 = Q({
    __name: "BInputGroup",
    props: {
        append: {
            default: void 0
        },
        appendHtml: {
            default: void 0
        },
        id: {
            default: void 0
        },
        prepend: {
            default: void 0
        },
        prependHtml: {
            default: void 0
        },
        size: {
            default: "md"
        },
        tag: {
            default: "div"
        }
    },
    setup(e) {
        ht(od, !0);
        const t = oe(e, "BInputGroup")
          , l = w( () => ({
            [`input-group-${t.size}`]: t.size !== "md"
        }))
          , a = V( () => !!t.append || !!t.appendHtml)
          , o = V( () => !!t.prepend || !!t.prependHtml);
        return (n, i) => (y(),
        M(xe(u(t).tag), {
            id: u(t).id,
            class: te(["input-group", l.value]),
            role: "group"
        }, {
            default: E( () => [A(n.$slots, "prepend", {}, () => [o.value ? (y(),
            O("span", M0, [u(t).prependHtml ? (y(),
            O("span", {
                key: 0,
                innerHTML: u(t).prependHtml
            }, null, 8, z0)) : (y(),
            O("span", R0, fe(u(t).prepend), 1))])) : me("", !0)]), A(n.$slots, "default"), A(n.$slots, "append", {}, () => [a.value ? (y(),
            O("span", D0, [u(t).appendHtml ? (y(),
            O("span", {
                key: 0,
                innerHTML: u(t).appendHtml
            }, null, 8, j0)) : (y(),
            O("span", G0, fe(u(t).append), 1))])) : me("", !0)])]),
            _: 3
        }, 8, ["id", "class"]))
    }
})
  , q0 = Q({
    __name: "BInputGroupText",
    props: {
        tag: {
            default: "div"
        },
        text: {
            default: void 0
        }
    },
    setup(e) {
        const t = oe(e, "BInputGroupText");
        return (l, a) => (y(),
        M(xe(u(t).tag), {
            class: "input-group-text"
        }, {
            default: E( () => [A(l.$slots, "default", {}, () => [ye(fe(u(t).text), 1)])]),
            _: 3
        }))
    }
})
  , U0 = Q({
    __name: "BListGroup",
    props: {
        flush: {
            type: Boolean,
            default: !1
        },
        horizontal: {
            type: [Boolean, String],
            default: !1
        },
        numbered: {
            type: Boolean,
            default: !1
        },
        tag: {
            default: "div"
        }
    },
    setup(e) {
        const t = oe(e, "BListGroup")
          , l = w( () => {
            const o = t.flush ? !1 : t.horizontal;
            return {
                "list-group-flush": t.flush,
                "list-group-horizontal": o === !0,
                [`list-group-horizontal-${o}`]: typeof o == "string",
                "list-group-numbered": t.numbered
            }
        }
        )
          , a = V( () => t.numbered === !0 ? "ol" : t.tag);
        return ht(qu, {
            numbered: V( () => t.numbered)
        }),
        (o, n) => (y(),
        M(xe(a.value), {
            class: te(["list-group", l.value])
        }, {
            default: E( () => [A(o.$slots, "default")]),
            _: 3
        }, 8, ["class"]))
    }
})
  , K0 = Q({
    __name: "BListGroupItem",
    props: {
        action: {
            type: Boolean,
            default: !1
        },
        button: {
            type: Boolean,
            default: !1
        },
        tag: {
            default: "div"
        },
        active: {
            type: Boolean,
            default: !1
        },
        activeClass: {
            default: void 0
        },
        disabled: {
            type: Boolean,
            default: void 0
        },
        exactActiveClass: {
            default: void 0
        },
        href: {
            default: void 0
        },
        icon: {
            type: Boolean,
            default: void 0
        },
        stretched: {
            type: Boolean,
            default: !1
        },
        opacity: {
            default: void 0
        },
        opacityHover: {
            default: void 0
        },
        rel: {
            default: void 0
        },
        replace: {
            type: Boolean,
            default: void 0
        },
        routerComponentName: {
            default: void 0
        },
        target: {
            default: void 0
        },
        to: {
            default: void 0
        },
        underlineOffset: {
            default: void 0
        },
        underlineOffsetHover: {
            default: void 0
        },
        underlineOpacity: {
            default: void 0
        },
        underlineOpacityHover: {
            default: void 0
        },
        underlineVariant: {
            default: void 0
        },
        variant: {
            default: void 0
        },
        prefetch: {
            type: Boolean
        },
        noPrefetch: {
            type: Boolean
        },
        prefetchedClass: {},
        noRel: {
            type: Boolean
        }
    },
    setup(e) {
        const t = oe(e, "BListGroupItem")
          , l = Pa()
          , a = qe(qu, null)
          , {computedLink: o} = Il(t)
          , n = V( () => !t.button && o.value)
          , i = V( () => a != null && a.numbered.value ? "li" : t.button ? "button" : n.value ? qt : t.tag)
          , r = w( () => t.action || n.value || t.button || ["a", "router-link", "button", "b-link"].includes(t.tag))
          , s = w( () => ({
            [`list-group-item-${t.variant}`]: t.variant !== null && t.variant !== void 0,
            "list-group-item-action": r.value,
            active: t.active,
            disabled: t.disabled
        }))
          , d = w( () => {
            const c = {};
            return t.button && ((!l || !l.type) && (c.type = "button"),
            t.disabled && (c.disabled = !0)),
            c
        }
        );
        return (c, v) => (y(),
        M(xe(i.value), ue({
            class: ["list-group-item", s.value],
            "aria-current": u(t).active ? !0 : void 0,
            "aria-disabled": u(t).disabled ? !0 : void 0,
            target: n.value ? u(t).target : void 0,
            href: u(t).button ? void 0 : u(t).href,
            to: u(t).button ? void 0 : u(t).to
        }, d.value), {
            default: E( () => [A(c.$slots, "default")]),
            _: 3
        }, 16, ["class", "aria-current", "aria-disabled", "target", "href", "to"]))
    }
})
  , Y0 = {
    id: "__BVID__modal-container"
}
  , X0 = Q({
    __name: "BModalOrchestrator",
    props: {
        teleportDisabled: {
            default: !1
        },
        teleportTo: {
            default: "body"
        }
    },
    setup(e, {expose: t}) {
        const l = oe(e, "BModalOrchestrator")
          , {modals: a, remove: o, show: n, confirm: i, leave: r} = xm()
          , s = d => qo(d, ["_promise", "_self", "_isConfirm", "_modelValue"]);
        return t({
            modals: a,
            show: n,
            confirm: i
        }),
        (d, c) => (y(),
        M(Fl, {
            to: u(l).teleportTo,
            disabled: u(l).teleportDisabled
        }, [ne("div", Y0, [(y(!0),
        O(Be, null, Ge(u(a), (v, f) => (y(),
        M(xe(v.value.component), ue({
            key: f,
            modelValue: v.value.props._modelValue,
            "onUpdate:modelValue": p => v.value.props._modelValue = p,
            ref_for: !0
        }, s(v.value.props), {
            "teleport-disabled": !0,
            "onUpdate:modelValue": p => {
                var g;
                return (g = u(r)) == null ? void 0 : g(v.value.props._self)
            }
            ,
            onHide: p => {
                if (v.value.props._isConfirm === !0) {
                    if (p.trigger === "ok") {
                        v.value.props._promise.resolve(!0);
                        return
                    }
                    if (p.trigger === "cancel") {
                        v.value.props._promise.resolve(!1);
                        return
                    }
                    v.value.props._promise.resolve(null)
                }
                v.value.props._promise.resolve(!0)
            }
            ,
            onHidden: p => {
                var g;
                return (g = u(o)) == null ? void 0 : g(v.value.props._self)
            }
        }), null, 16, ["modelValue", "onUpdate:modelValue", "onHide", "onHidden"]))), 128))])], 8, ["to", "disabled"]))
    }
})
  , Z0 = Q({
    __name: "BNav",
    props: {
        align: {
            default: void 0
        },
        cardHeader: {
            type: Boolean,
            default: !1
        },
        fill: {
            type: Boolean,
            default: !1
        },
        justified: {
            type: Boolean,
            default: !1
        },
        pills: {
            type: Boolean,
            default: !1
        },
        small: {
            type: Boolean,
            default: !1
        },
        tabs: {
            type: Boolean,
            default: !1
        },
        tag: {
            default: "ul"
        },
        underline: {
            type: Boolean,
            default: !1
        },
        vertical: {
            type: Boolean,
            default: !1
        }
    },
    setup(e) {
        const t = oe(e, "BNav")
          , l = Ia( () => t.align)
          , a = w( () => ({
            "nav-tabs": t.tabs,
            "nav-pills": t.pills && !t.tabs,
            "card-header-tabs": !t.vertical && t.cardHeader && t.tabs,
            "card-header-pills": !t.vertical && t.cardHeader && t.pills && !t.tabs,
            "flex-column": t.vertical,
            "nav-fill": !t.vertical && t.fill,
            "nav-justified": !t.vertical && t.justified,
            [l.value]: !t.vertical && t.align !== void 0,
            small: t.small,
            "nav-underline": t.underline
        }));
        return (o, n) => (y(),
        M(xe(u(t).tag), {
            class: te(["nav", a.value])
        }, {
            default: E( () => [A(o.$slots, "default")]),
            _: 3
        }, 8, ["class"]))
    }
})
  , J0 = {
    class: "d-flex flex-row align-items-center flex-wrap"
}
  , Q0 = Q({
    inheritAttrs: !1,
    __name: "BNavForm",
    props: {
        role: {
            default: void 0
        },
        floating: {
            type: Boolean,
            default: void 0
        },
        id: {
            default: void 0
        },
        novalidate: {
            type: Boolean,
            default: void 0
        },
        validated: {
            type: Boolean,
            default: void 0
        }
    },
    emits: ["submit"],
    setup(e, {emit: t}) {
        const l = oe(e, "BNavForm")
          , a = t
          , o = n => {
            a("submit", n)
        }
        ;
        return (n, i) => (y(),
        O("li", J0, [pe($d, ue(n.$attrs, {
            id: u(l).id,
            floating: u(l).floating,
            role: u(l).role,
            novalidate: u(l).novalidate,
            validated: u(l).validated,
            class: "d-flex",
            onSubmit: Vl(o, ["prevent"])
        }), {
            default: E( () => [A(n.$slots, "default")]),
            _: 3
        }, 16, ["id", "floating", "role", "novalidate", "validated"])]))
    }
})
  , eg = {
    class: "nav-item"
}
  , tg = Q({
    __name: "BNavItem",
    props: {
        linkAttrs: {
            default: void 0
        },
        linkClass: {
            default: void 0
        },
        active: {
            type: Boolean,
            default: void 0
        },
        activeClass: {
            default: void 0
        },
        disabled: {
            type: Boolean,
            default: void 0
        },
        exactActiveClass: {
            default: void 0
        },
        href: {
            default: void 0
        },
        icon: {
            type: Boolean,
            default: void 0
        },
        stretched: {
            type: Boolean,
            default: !1
        },
        opacity: {
            default: void 0
        },
        opacityHover: {
            default: void 0
        },
        rel: {
            default: void 0
        },
        replace: {
            type: Boolean,
            default: void 0
        },
        routerComponentName: {
            default: void 0
        },
        target: {
            default: void 0
        },
        to: {
            default: void 0
        },
        underlineOffset: {
            default: void 0
        },
        underlineOffsetHover: {
            default: void 0
        },
        underlineOpacity: {
            default: void 0
        },
        underlineOpacityHover: {
            default: void 0
        },
        underlineVariant: {
            default: void 0
        },
        variant: {
            default: void 0
        },
        prefetch: {
            type: Boolean
        },
        noPrefetch: {
            type: Boolean
        },
        prefetchedClass: {},
        noRel: {
            type: Boolean
        }
    },
    emits: ["click"],
    setup(e, {emit: t}) {
        const l = oe(e, "BNavItem")
          , a = t
          , o = w( () => gi(l, ["active", "activeClass", "append", "disabled", "href", "icon", "opacity", "opacityHover", "rel", "replace", "routerComponentName", "target", "to", "underlineOffset", "underlineOffsetHover", "underlineOpacity", "underlineOpacityHover", "underlineVariant", "variant"]));
        return o.value.activeClass,
        (n, i) => (y(),
        O("li", eg, [pe(qt, ue({
            class: ["nav-link", n.linkClass],
            tabindex: u(l).disabled ? -1 : void 0,
            "aria-disabled": u(l).disabled ? !0 : void 0
        }, {
            ...o.value,
            ...n.linkAttrs
        }, {
            onClick: i[0] || (i[0] = r => a("click", r))
        }), {
            default: E( () => [A(n.$slots, "default")]),
            _: 3
        }, 16, ["class", "tabindex", "aria-disabled"])]))
    }
})
  , lg = {
    class: "nav-item dropdown"
}
  , ag = Q({
    __name: "BNavItemDropdown",
    props: Ae({
        ariaLabel: {
            default: void 0
        },
        autoClose: {
            type: [Boolean, String],
            default: !0
        },
        boundary: {
            default: "clippingAncestors"
        },
        boundaryPadding: {
            default: void 0
        },
        center: {
            type: Boolean,
            default: !1
        },
        disabled: {
            type: Boolean,
            default: !1
        },
        dropend: {
            type: Boolean,
            default: !1
        },
        dropstart: {
            type: Boolean,
            default: !1
        },
        dropup: {
            type: Boolean,
            default: !1
        },
        end: {
            type: Boolean,
            default: !1
        },
        floatingMiddleware: {
            default: void 0
        },
        id: {
            default: void 0
        },
        isNav: {
            type: Boolean,
            default: !0
        },
        lazy: {
            type: Boolean,
            default: !1
        },
        menuClass: {
            default: void 0
        },
        modelValue: {
            type: Boolean
        },
        noCaret: {
            type: Boolean,
            default: !1
        },
        noFlip: {
            type: Boolean,
            default: !1
        },
        noShift: {
            type: Boolean,
            default: !1
        },
        noSize: {
            type: Boolean,
            default: !1
        },
        offset: {
            default: 0
        },
        role: {
            default: "menu"
        },
        size: {
            default: "md"
        },
        skipWrapper: {
            type: Boolean
        },
        split: {
            type: Boolean,
            default: !1
        },
        splitButtonType: {
            default: "button"
        },
        splitClass: {
            default: void 0
        },
        splitDisabled: {
            type: Boolean,
            default: void 0
        },
        splitHref: {
            default: void 0
        },
        splitTo: {
            default: void 0
        },
        splitVariant: {
            default: void 0
        },
        strategy: {
            default: "absolute"
        },
        text: {
            default: void 0
        },
        toggleClass: {
            default: void 0
        },
        toggleText: {
            default: "Toggle dropdown"
        },
        variant: {
            default: "link"
        },
        wrapperClass: {},
        teleportDisabled: {
            default: !1
        },
        teleportTo: {
            default: void 0
        }
    }, {
        modelValue: {
            type: Boolean,
            default: !1
        },
        modelModifiers: {}
    }),
    emits: Ae(["click", "hidden", "hide", "hide-prevented", "show", "show-prevented", "shown", "toggle"], ["update:modelValue"]),
    setup(e, {expose: t, emit: l}) {
        const a = oe(e, "BNavItemDropdown")
          , o = l
          , n = Ne(e, "modelValue")
          , i = Y(null)
          , r = () => {
            var d;
            (d = i.value) == null || d.hide()
        }
          , s = () => {
            var d;
            (d = i.value) == null || d.show()
        }
        ;
        return t({
            hide: r,
            show: s,
            toggle: () => {
                var d;
                (d = i.value) == null || d.toggle()
            }
        }),
        (d, c) => (y(),
        O("li", lg, [pe(Ci, ue({
            ref_key: "dropdown",
            ref: i
        }, u(a), {
            modelValue: n.value,
            "onUpdate:modelValue": c[0] || (c[0] = v => n.value = v),
            "is-nav": "",
            onShow: c[1] || (c[1] = v => o("show", v)),
            onShown: c[2] || (c[2] = v => o("shown")),
            onHide: c[3] || (c[3] = v => o("hide", v)),
            onHidden: c[4] || (c[4] = v => o("hidden")),
            onHidePrevented: c[5] || (c[5] = v => o("hide-prevented")),
            onShowPrevented: c[6] || (c[6] = v => o("show-prevented")),
            onClick: c[7] || (c[7] = v => o("click", v)),
            onToggle: c[8] || (c[8] = v => o("toggle"))
        }), {
            "button-content": E( () => [A(d.$slots, "button-content")]),
            "toggle-text": E( () => [A(d.$slots, "toggle-text")]),
            default: E( () => [A(d.$slots, "default", {
                hide: r,
                show: s
            })]),
            _: 3
        }, 16, ["modelValue"])]))
    }
})
  , og = {
    class: "navbar-text"
}
  , ng = Q({
    __name: "BNavText",
    props: {
        text: {
            default: void 0
        }
    },
    setup(e) {
        const t = oe(e, "BNavText");
        return (l, a) => (y(),
        O("li", og, [A(l.$slots, "default", {}, () => [ye(fe(u(t).text), 1)])]))
    }
})
  , ig = Q({
    __name: "BNavbar",
    props: {
        autoClose: {
            type: Boolean,
            default: !0
        },
        container: {
            type: [Boolean, String],
            default: "fluid"
        },
        fixed: {
            default: void 0
        },
        print: {
            type: Boolean,
            default: !1
        },
        sticky: {
            default: void 0
        },
        tag: {
            default: "nav"
        },
        toggleable: {
            type: [Boolean, String],
            default: !1
        },
        variant: {
            default: null
        }
    },
    setup(e) {
        const t = oe(e, "BNavbar")
          , l = V( () => t.tag === "nav" ? void 0 : "navigation")
          , a = hm( () => t.container)
          , o = w( () => ({
            "d-print": t.print,
            [`sticky-${t.sticky}`]: t.sticky !== void 0,
            [`bg-${t.variant}`]: t.variant !== null,
            [`fixed-${t.fixed}`]: t.fixed !== void 0,
            "navbar-expand": t.toggleable === !1,
            [`navbar-expand-${t.toggleable}`]: typeof t.toggleable == "string"
        }));
        return ht(hi, {
            tag: V( () => t.tag),
            autoClose: V( () => t.autoClose)
        }),
        (n, i) => (y(),
        M(xe(u(t).tag), {
            class: te(["navbar", o.value]),
            role: l.value
        }, {
            default: E( () => [u(t).container !== !1 ? (y(),
            O("div", {
                key: 0,
                class: te(u(a))
            }, [A(n.$slots, "default")], 2)) : A(n.$slots, "default", {
                key: 1
            })]),
            _: 3
        }, 8, ["class", "role"]))
    }
})
  , rg = Q({
    __name: "BNavbarBrand",
    props: {
        tag: {
            default: "div"
        },
        active: {
            type: Boolean,
            default: void 0
        },
        activeClass: {
            default: void 0
        },
        disabled: {
            type: Boolean,
            default: void 0
        },
        exactActiveClass: {
            default: void 0
        },
        href: {
            default: void 0
        },
        icon: {
            type: Boolean,
            default: void 0
        },
        stretched: {
            type: Boolean,
            default: !1
        },
        opacity: {
            default: void 0
        },
        opacityHover: {
            default: void 0
        },
        rel: {
            default: void 0
        },
        replace: {
            type: Boolean,
            default: void 0
        },
        routerComponentName: {
            default: void 0
        },
        target: {
            default: void 0
        },
        to: {
            default: void 0
        },
        underlineOffset: {
            default: void 0
        },
        underlineOffsetHover: {
            default: void 0
        },
        underlineOpacity: {
            default: void 0
        },
        underlineOpacityHover: {
            default: void 0
        },
        underlineVariant: {
            default: void 0
        },
        variant: {
            default: void 0
        },
        prefetch: {
            type: Boolean
        },
        noPrefetch: {
            type: Boolean
        },
        prefetchedClass: {},
        noRel: {
            type: Boolean
        }
    },
    setup(e) {
        const t = oe(e, "BNavbarBrand")
          , {computedLink: l, computedLinkProps: a} = Il(t, ["active", "activeClass", "append", "disabled", "href", "rel", "replace", "routerComponentName", "target", "to", "variant", "opacity", "opacityHover", "underlineVariant", "underlineOffset", "underlineOffsetHover", "underlineOpacity", "underlineOpacityHover", "icon"])
          , o = V( () => l.value ? qt : t.tag);
        return (n, i) => (y(),
        M(xe(o.value), ue({
            class: "navbar-brand"
        }, u(a)), {
            default: E( () => [A(n.$slots, "default")]),
            _: 3
        }, 16))
    }
})
  , sg = Q({
    __name: "BNavbarNav",
    props: {
        align: {
            default: void 0
        },
        fill: {
            type: Boolean,
            default: !1
        },
        justified: {
            type: Boolean,
            default: !1
        },
        small: {
            type: Boolean,
            default: !1
        },
        tag: {
            default: "ul"
        }
    },
    setup(e) {
        const t = oe(e, "BNavbarNav")
          , l = Ia( () => t.align)
          , a = w( () => ({
            "nav-fill": t.fill,
            "nav-justified": t.justified,
            [l.value]: t.align !== void 0,
            small: t.small
        }));
        return (o, n) => (y(),
        O("ul", {
            class: te(["navbar-nav", a.value])
        }, [A(o.$slots, "default")], 2))
    }
})
  , Wr = (e, t) => e.setAttribute("data-bs-theme", t)
  , ug = {
    mounted(e, t) {
        Wr(e, t.value)
    },
    updated(e, t) {
        Wr(e, t.value)
    }
}
  , dg = (e, t) => {
    const {modifiers: l, arg: a, value: o} = e
      , n = Object.keys(l || {})
      , i = typeof o == "string" ? o.split(ao) : o;
    if (t.tagName.toLowerCase() === "a") {
        const r = t.getAttribute("href") || "";
        im.test(r) && n.push(r.replace(nm, ""))
    }
    return Array.prototype.concat.apply([], [a, i]).forEach(r => typeof r == "string" && n.push(r)),
    n.filter( (r, s, d) => r && d.indexOf(r) === s)
}
  , cg = (e, t) => {
    e.forEach(l => {
        const a = document.getElementById(l);
        a !== null && a.dispatchEvent(new Event("bv-toggle"))
    }
    ),
    setTimeout( () => Id(e, t), 50)
}
  , Id = (e, t) => {
    let l = !1;
    e.forEach(a => {
        const o = document.getElementById(a);
        o != null && o.classList.contains("show") && (l = !0),
        o != null && o.classList.contains("closing") && (l = !1)
    }
    ),
    t.setAttribute("aria-expanded", l ? "true" : "false"),
    t.classList.remove(l ? "collapsed" : "not-collapsed"),
    t.classList.add(l ? "not-collapsed" : "collapsed")
}
  , qr = (e, t) => {
    const l = dg(t, e);
    l.length !== 0 && (e.__toggle && e.removeEventListener("click", e.__toggle),
    e.__toggle = () => cg(l, e),
    e.addEventListener("click", e.__toggle),
    e.setAttribute("aria-controls", l.join(" ")),
    Id(l, e))
}
  , En = {
    mounted: qr,
    updated: qr,
    unmounted(e) {
        e.removeEventListener("click", e.__toggle),
        e.removeAttribute("aria-controls"),
        e.removeAttribute("aria-expanded")
    }
}
  , fg = {
    mounted(e, t) {
        if (!Va(t.value))
            return;
        const l = wo(t.value, e);
        !l.content && !l.title || Co(e, t, {
            ...xo(t, e),
            ...l
        })
    },
    updated(e, t) {
        if (!Va(t.value))
            return;
        const l = wo(t.value, e);
        !l.content && !l.title || (ko(e),
        Co(e, t, {
            ...xo(t, e),
            ...l
        }))
    },
    beforeUnmount(e) {
        ko(e)
    }
}
  , Ur = (e, t) => {
    e.$__scrollspy && e.$__scrollspy.cleanup();
    const {arg: l, value: a} = t
      , o = typeof a == "object" && a !== null
      , n = l || (typeof a == "string" ? a : o ? a.content || a.element : null);
    e.$__scrollspy = km(n, e, o ? qo(a, ["content", "element"]) : {})
}
  , vg = {
    mounted: Ur,
    updated: Ur,
    beforeUnmount(e) {
        e.$__scrollspy && e.$__scrollspy.cleanup()
    }
}
  , pg = {
    mounted(e, t) {
        var o, n;
        const l = Va(t.value);
        if (!l)
            return;
        const a = wo(t.value, e);
        !a.content && !a.title || Co(e, t, {
            noninteractive: !0,
            ...xo(t, e),
            title: (n = (o = a.title) != null ? o : a.content) != null ? n : "",
            tooltip: l
        })
    },
    updated(e, t) {
        var o, n;
        const l = Va(t.value);
        if (!l)
            return;
        const a = wo(t.value, e);
        !a.content && !a.title || (ko(e),
        Co(e, t, {
            noninteractive: !0,
            ...xo(t, e),
            title: (n = (o = a.title) != null ? o : a.content) != null ? n : "",
            tooltip: l
        }))
    },
    beforeUnmount(e) {
        ko(e)
    }
}
  , Kr = Object.freeze(Object.defineProperty({
    __proto__: null,
    vBColorMode: ug,
    vBModal: En,
    vBPopover: fg,
    vBScrollspy: vg,
    vBToggle: En,
    vBTooltip: pg
}, Symbol.toStringTag, {
    value: "Module"
}))
  , mg = ["disabled", "aria-label"]
  , hg = ne("span", {
    class: "navbar-toggler-icon"
}, null, -1)
  , gg = Q({
    __name: "BNavbarToggle",
    props: {
        disabled: {
            type: Boolean,
            default: !1
        },
        label: {
            default: "Toggle navigation"
        },
        target: {
            default: void 0
        }
    },
    emits: ["click"],
    setup(e, {emit: t}) {
        const l = oe(e, "BNavbarToggle")
          , a = t
          , o = w( () => ({
            disabled: l.disabled
        }))
          , n = i => {
            l.disabled || a("click", i)
        }
        ;
        return (i, r) => ll((y(),
        O("button", {
            class: te(["navbar-toggler", o.value]),
            type: "button",
            disabled: u(l).disabled,
            "aria-label": u(l).label,
            onClick: n
        }, [A(i.$slots, "default", {}, () => [hg])], 10, mg)), [[u(En), u(l).disabled ? void 0 : u(l).target]])
    }
})
  , yg = ["id", "aria-labelledby"]
  , bg = ["id"]
  , Bg = Q({
    inheritAttrs: !1,
    __name: "BOffcanvas",
    props: Ae({
        backdrop: {
            type: Boolean,
            default: !0
        },
        backdropBlur: {
            default: void 0
        },
        backdropVariant: {
            default: "dark"
        },
        bodyAttrs: {
            default: void 0
        },
        bodyClass: {
            default: void 0
        },
        bodyScrolling: {
            type: Boolean,
            default: !1
        },
        footerClass: {
            default: void 0
        },
        headerClass: {
            default: void 0
        },
        headerCloseClass: {
            default: void 0
        },
        headerCloseLabel: {
            default: "Close"
        },
        headerCloseVariant: {
            default: "secondary"
        },
        id: {
            default: void 0
        },
        lazy: {
            type: Boolean,
            default: !1
        },
        modelValue: {
            type: Boolean
        },
        noCloseOnBackdrop: {
            type: Boolean,
            default: !1
        },
        noCloseOnEsc: {
            type: Boolean,
            default: !1
        },
        noFocus: {
            type: Boolean,
            default: !1
        },
        noHeader: {
            type: Boolean,
            default: !1
        },
        noHeaderClose: {
            type: Boolean,
            default: !1
        },
        placement: {
            default: "start"
        },
        shadow: {
            type: [String, Boolean],
            default: !1
        },
        title: {
            default: void 0
        },
        width: {
            default: void 0
        },
        teleportDisabled: {
            default: !1
        },
        teleportTo: {
            default: "body"
        }
    }, {
        modelValue: {
            type: Boolean,
            default: !1
        },
        modelModifiers: {}
    }),
    emits: Ae(["close", "esc", "hidden", "hide", "hide-prevented", "show", "show-prevented", "shown"], ["update:modelValue"]),
    setup(e, {expose: t, emit: l}) {
        const a = oe(e, "BOffcanvas")
          , o = l
          , n = mt()
          , i = Ne(e, "modelValue")
          , r = Me( () => a.id, "offcanvas");
        hd(i, () => a.bodyScrolling);
        const s = Y(null);
        Bt("Escape", () => {
            T("esc")
        }
        , {
            target: s
        });
        const {focused: d} = ft(s, {
            initialValue: i.value && a.noFocus === !1
        })
          , c = Y(i.value)
          , v = Y(!1)
          , f = V( () => a.backdrop === !0 && i.value === !0)
          , p = V( () => a.lazy === !1 || a.lazy === !0 && v.value === !0 || a.lazy === !0 && i.value === !0)
          , g = V( () => !lt(n["header-close"]))
          , b = w( () => [{
            "text-reset": !g.value
        }, a.headerCloseClass])
          , m = w( () => ({
            variant: g.value ? a.headerCloseVariant : void 0,
            class: b.value
        }))
          , h = V( () => !lt(n.footer))
          , B = w( () => ["offcanvas", `offcanvas-${a.placement}`, {
            show: i.value && c.value === !0,
            [`shadow-${a.shadow}`]: !!a.shadow
        }])
          , $ = w( () => ({
            width: a.width
        }))
          , x = w( () => ({
            visible: i.value,
            placement: a.placement,
            hide: T
        }))
          , C = (ee, k={}) => new ta(ee,{
            cancelable: !1,
            target: s.value || null,
            relatedTarget: null,
            trigger: null,
            ...k,
            componentId: r.value
        })
          , T = (ee="") => {
            if (ee === "backdrop" && a.noCloseOnBackdrop || ee === "esc" && a.noCloseOnEsc) {
                o("hide-prevented");
                return
            }
            const k = C("hide", {
                cancelable: ee !== "",
                trigger: ee
            });
            if (ee === "close" && o(ee, k),
            ee === "esc" && o(ee, k),
            o("hide", k),
            k.defaultPrevented) {
                o("hide-prevented");
                return
            }
            i.value = !1
        }
          , F = () => {
            const ee = C("show", {
                cancelable: !0
            });
            if (o("show", ee),
            ee.defaultPrevented) {
                i.value = !1,
                o("show-prevented");
                return
            }
            i.value = !0
        }
          , j = () => {
            it( () => {
                a.noFocus === !1 && (d.value = !0)
            }
            )
        }
          , L = () => F()
          , Z = () => {
            c.value = !0,
            j(),
            o("shown", C("shown")),
            a.lazy === !0 && (v.value = !0)
        }
          , de = () => {
            c.value = !1
        }
          , R = () => {
            o("hidden", C("hidden")),
            a.lazy === !0 && (v.value = !1)
        }
        ;
        return Xe(s, "bv-toggle", () => {
            i.value ? T() : F()
        }
        ),
        t({
            hide: T,
            show: F
        }),
        (ee, k) => (y(),
        M(Fl, {
            to: u(a).teleportTo,
            disabled: u(a).teleportDisabled
        }, [pe(La, {
            "no-fade": !0,
            "trans-props": {
                enterToClass: "showing",
                enterFromClass: "",
                leaveToClass: "hiding show",
                leaveFromClass: "show"
            },
            onBeforeEnter: L,
            onAfterEnter: Z,
            onLeave: de,
            onAfterLeave: R
        }, {
            default: E( () => [ll(ne("div", ue({
                id: u(r),
                ref_key: "element",
                ref: s,
                "aria-modal": "true",
                role: "dialog",
                class: B.value,
                style: $.value,
                tabindex: "-1",
                "aria-labelledby": `${u(r)}-offcanvas-label`,
                "data-bs-backdrop": "false"
            }, ee.$attrs), [p.value ? (y(),
            O(Be, {
                key: 0
            }, [u(a).noHeader ? me("", !0) : (y(),
            O("div", {
                key: 0,
                class: te(["offcanvas-header", u(a).headerClass])
            }, [A(ee.$slots, "header", Ie(je(x.value)), () => [ne("h5", {
                id: `${u(r)}-offcanvas-label`,
                class: "offcanvas-title"
            }, [A(ee.$slots, "title", Ie(je(x.value)), () => [ye(fe(u(a).title), 1)])], 8, bg), u(a).noHeaderClose ? me("", !0) : (y(),
            O(Be, {
                key: 0
            }, [g.value ? (y(),
            M(Zt, ue({
                key: 0
            }, m.value, {
                onClick: k[0] || (k[0] = P => T("close"))
            }), {
                default: E( () => [A(ee.$slots, "header-close")]),
                _: 3
            }, 16)) : (y(),
            M(aa, ue({
                key: 1,
                "aria-label": u(a).headerCloseLabel
            }, m.value, {
                onClick: k[1] || (k[1] = P => T("close"))
            }), null, 16, ["aria-label"]))], 64))])], 2)), ne("div", ue({
                class: ["offcanvas-body", u(a).bodyClass]
            }, u(a).bodyAttrs), [A(ee.$slots, "default", Ie(je(x.value)))], 16), h.value ? (y(),
            O("div", {
                key: 1,
                class: te(u(a).footerClass)
            }, [A(ee.$slots, "footer", Ie(je(x.value)))], 2)) : me("", !0)], 64)) : me("", !0)], 16, yg), [[Fa, i.value]])]),
            _: 3
        }), A(ee.$slots, "backdrop", {}, () => [pe(Ko, {
            blur: u(a).backdropBlur,
            variant: u(a).backdropVariant,
            show: f.value,
            fixed: "",
            "no-wrap": "",
            "no-spinner": "",
            onClick: k[2] || (k[2] = P => T("backdrop"))
        }, null, 8, ["blur", "variant", "show"])])], 8, ["to", "disabled"]))
    }
})
  , _g = ["aria-disabled", "aria-label"]
  , Yr = 20
  , Xr = 0
  , wg = Q({
    __name: "BPagination",
    props: Ae({
        align: {
            default: "start"
        },
        ariaControls: {
            default: void 0
        },
        ariaLabel: {
            default: "Pagination"
        },
        disabled: {
            type: Boolean,
            default: !1
        },
        ellipsisClass: {
            default: void 0
        },
        ellipsisText: {
            default: "\u2026"
        },
        firstClass: {
            default: void 0
        },
        firstNumber: {
            type: Boolean,
            default: !1
        },
        firstText: {
            default: "\xAB"
        },
        hideEllipsis: {
            type: Boolean,
            default: !1
        },
        hideGotoEndButtons: {
            type: Boolean,
            default: !1
        },
        labelFirstPage: {
            default: "Go to first page"
        },
        labelLastPage: {
            default: "Go to last page"
        },
        labelNextPage: {
            default: "Go to next page"
        },
        labelPage: {
            default: "Go to page"
        },
        labelPrevPage: {
            default: "Go to previous page"
        },
        lastClass: {
            default: void 0
        },
        lastNumber: {
            type: Boolean,
            default: !1
        },
        lastText: {
            default: "\xBB"
        },
        limit: {
            default: 5
        },
        modelValue: {},
        nextClass: {
            default: void 0
        },
        nextText: {
            default: "\u203A"
        },
        pageClass: {
            default: void 0
        },
        perPage: {
            default: Yr
        },
        pills: {
            type: Boolean,
            default: !1
        },
        prevClass: {
            default: void 0
        },
        prevText: {
            default: "\u2039"
        },
        size: {
            default: void 0
        },
        totalRows: {
            default: Xr
        }
    }, {
        modelValue: {
            default: 1
        },
        modelModifiers: {}
    }),
    emits: Ae(["page-click"], ["update:modelValue"]),
    setup(e, {emit: t}) {
        const l = oe(e, "BPagination")
          , a = t
          , o = Ne(e, "modelValue")
          , n = Oe( () => l.limit, {
            nanToZero: !0,
            method: "parseInt"
        })
          , i = Oe( () => l.perPage, {
            nanToZero: !0,
            method: "parseInt"
        })
          , r = Oe( () => l.totalRows, {
            nanToZero: !0,
            method: "parseInt"
        })
          , s = Oe(o, {
            nanToZero: !0,
            method: "parseInt"
        })
          , d = V( () => Math.max(i.value || Yr, 1))
          , c = V( () => Math.max(r.value || Xr, 0))
          , v = V( () => Math.ceil(c.value / d.value))
          , f = V( () => l.align === "fill")
          , p = V( () => l.align === "fill" ? "start" : l.align)
          , g = Ia(p)
          , b = G => G === s.value
          , m = G => l.disabled ? null : b(G) ? "0" : "-1"
          , h = G => l.disabled || b(G) || s.value < 1 || G < 1 || G > v.value
          , B = w( () => h(1))
          , $ = w( () => h(s.value - 1))
          , x = w( () => h(v.value))
          , C = w( () => h(s.value + 1))
          , T = ({page: G, classVal: z, dis: I, slotName: X, textValue: le, tabIndex: _e, label: he, position: be, isActive: He, role: Te, hidden: W}) => ({
            li: {
                class: ["page-item", {
                    active: He,
                    disabled: I,
                    "flex-fill": f.value,
                    "d-flex": f.value && !I
                }, z],
                role: Te,
                "aria-hidden": W
            },
            button: {
                is: I ? "span" : "button",
                class: ["page-link", {
                    "flex-grow-1": !I && f.value
                }],
                "aria-label": he,
                "aria-controls": l.ariaControls || void 0,
                "aria-disabled": I ? !0 : void 0,
                "aria-posinset": be,
                "aria-setsize": be ? v.value : void 0,
                role: "menuitem",
                type: I ? void 0 : "button",
                tabindex: I ? void 0 : _e
            },
            text: {
                name: X,
                active: He,
                value: le != null ? le : G,
                page: G,
                disabled: I,
                index: G - 1,
                content: le ? void 0 : G
            },
            clickHandler: se => J(se, G)
        })
          , F = ({page: G, classVal: z, dis: I, slotName: X, textValue: le, label: _e}) => T({
            page: G,
            classVal: z,
            dis: I,
            slotName: X,
            textValue: le,
            label: _e,
            tabIndex: "-1"
        })
          , j = G => {
            var z;
            return T({
                page: G,
                dis: l.disabled,
                classVal: l.pageClass,
                slotName: "page",
                label: l.labelPage ? `${l.labelPage} ${G}` : void 0,
                tabIndex: (z = m(G)) != null ? z : void 0,
                position: G,
                isActive: b(G)
            })
        }
          , L = w( () => F({
            page: 1,
            dis: B.value,
            classVal: l.firstClass,
            slotName: "first-text",
            textValue: l.firstText,
            label: l.labelFirstPage
        }))
          , Z = w( () => F({
            page: Math.max(s.value - 1, 1),
            dis: $.value,
            classVal: l.prevClass,
            slotName: "prev-text",
            textValue: l.prevText,
            label: l.labelPrevPage
        }))
          , de = w( () => F({
            page: Math.min(s.value + 1, v.value),
            dis: C.value,
            classVal: l.nextClass,
            slotName: "next-text",
            textValue: l.nextText,
            label: l.labelNextPage
        }))
          , R = w( () => F({
            page: v.value,
            dis: x.value,
            classVal: l.lastClass,
            slotName: "last-text",
            textValue: l.lastText,
            label: l.labelLastPage
        }))
          , ee = _o()
          , k = _o()
          , P = w( () => ({
            li: {
                class: ["page-item", "disabled", "bv-d-xs-down-none", f.value ? "flex-fill" : "", l.ellipsisClass],
                role: "separator"
            },
            span: {
                class: ["page-link"]
            }
        }))
          , N = w( () => [g.value, {
            [`pagination-${l.size}`]: l.size !== void 0,
            "b-pagination-pills": l.pills
        }])
          , D = w( () => ({
            pageSize: d.value,
            totalRows: r.value,
            numberOfPages: v.value
        }))
          , J = (G, z) => {
            if (z === s.value)
                return;
            const I = new gl("page-click",{
                cancelable: !0,
                target: G.target
            });
            a("page-click", I, z),
            !I.defaultPrevented && (o.value = z)
        }
        ;
        ke(s, G => {
            const z = ( (I, X) => {
                const le = I || 1;
                return le > X ? X : le < 1 ? 1 : le
            }
            )(G, v.value);
            z !== o.value && (o.value = z)
        }
        ),
        ke(D, (G, z) => {
            (z.pageSize !== G.pageSize && z.totalRows === G.totalRows || z.numberOfPages !== G.numberOfPages && s.value > z.numberOfPages) && (o.value = 1)
        }
        );
        const q = w( () => {
            const G = v.value
              , {value: z} = s
              , I = n.value
              , X = l.firstNumber ? 1 : 0
              , le = l.lastNumber ? 1 : 0
              , _e = l.hideEllipsis || I <= 3
              , he = l.hideGotoEndButtons ? 1 : 0;
            if (G < I + X + le)
                return [!X && !he ? -1 : null, -2, ...Array.from({
                    length: G
                }, (Te, W) => W + 1), -3, !le && !he ? -4 : null].filter(Te => Te !== null);
            const be = Array.from({
                length: I + 4 - he * 2
            });
            he ? (be[0] = -2,
            be[be.length - 1] = -3) : (X ? (be[0] = -2,
            be[1] = 1) : (be[0] = -1,
            be[1] = -2),
            le ? (be[be.length - 1] = -3,
            be[be.length - 2] = G) : (be[be.length - 1] = -4,
            be[be.length - 2] = -3));
            const He = Math.floor(I / 2);
            if (z <= He + X) {
                for (let Te = 1; Te <= I; Te++)
                    be[Te + 1 - he] = Te + X;
                _e || (be[be.length - 3] = -5)
            }
            if (z > G - He - le) {
                const Te = G - (I - 1) - le;
                for (let W = 0; W < I; W++)
                    be[W + 2 - he] = Te + W;
                _e || (be[2] = -5)
            }
            if (!be[2]) {
                const Te = z - Math.floor(I / 2);
                for (let W = 0; W < I; W++)
                    be[W + 2 - he] = Te + W;
                _e || (be[2] = -5,
                be[be.length - 3] = -5)
            }
            return be
        }
        );
        return (G, z) => (y(),
        O("ul", {
            class: te(["pagination", N.value]),
            role: "menubar",
            "aria-disabled": u(l).disabled,
            "aria-label": u(l).ariaLabel || void 0
        }, [pe(u(ee).define, null, {
            default: E( ({button: I, li: X, text: le, clickHandler: _e}) => [ne("li", Ie(je(X)), [(y(),
            M(xe(I.is), ue(I, {
                onClick: _e
            }), {
                default: E( () => [A(G.$slots, le.name, {
                    disabled: le.disabled,
                    page: le.page,
                    index: le.index,
                    active: le.active,
                    content: le.value
                }, () => [ye(fe(le.value), 1)])]),
                _: 2
            }, 1040, ["onClick"]))], 16)]),
            _: 3
        }), pe(u(k).define, null, {
            default: E( () => [ne("li", Ie(je(P.value.li)), [ne("span", Ie(je(P.value.span)), [A(G.$slots, "ellipsis-text", {}, () => [ye(fe(u(l).ellipsisText || "..."), 1)])], 16)], 16)]),
            _: 3
        }), (y(!0),
        O(Be, null, Ge(q.value, I => (y(),
        O(Be, {
            key: `page-${I}`
        }, [I === -1 ? (y(),
        M(u(ee).reuse, ue({
            key: 0,
            ref_for: !0
        }, L.value), null, 16)) : I === -2 ? (y(),
        M(u(ee).reuse, ue({
            key: 1,
            ref_for: !0
        }, Z.value), null, 16)) : I === -3 ? (y(),
        M(u(ee).reuse, ue({
            key: 2,
            ref_for: !0
        }, de.value), null, 16)) : I === -4 ? (y(),
        M(u(ee).reuse, ue({
            key: 3,
            ref_for: !0
        }, R.value), null, 16)) : I === -5 ? (y(),
        M(u(k).reuse, {
            key: 4
        })) : I !== null ? (y(),
        M(u(ee).reuse, ue({
            key: 5,
            ref_for: !0
        }, j(I)), null, 16)) : me("", !0)], 64))), 128))], 10, _g))
    }
})
  , St = Q({
    inheritAttrs: !1,
    __name: "BPlaceholder",
    props: {
        animation: {
            default: void 0
        },
        cols: {
            default: 12
        },
        size: {
            default: "md"
        },
        tag: {
            default: "span"
        },
        variant: {
            default: null
        },
        width: {
            default: void 0
        },
        wrapperTag: {
            default: "span"
        }
    },
    setup(e) {
        const t = oe(e, "BPlaceholder")
          , l = V( () => t.width === void 0 ? void 0 : typeof t.width == "number" ? t.width.toString() : t.width.replace("%", ""))
          , a = V( () => t.cols === void 0 ? void 0 : typeof t.cols == "number" ? t.cols.toString() : t.cols)
          , o = w( () => ({
            [`col-${a.value}`]: a.value !== void 0 && l.value === void 0,
            [`bg-${t.variant}`]: t.variant !== null,
            [`placeholder-${t.size}`]: t.size !== "md"
        }))
          , n = w( () => ({
            [`placeholder-${t.animation}`]: t.animation !== void 0
        }))
          , i = w( () => ({
            width: l.value === void 0 ? void 0 : `${l.value}%`
        }));
        return (r, s) => (y(),
        M(xe(u(t).wrapperTag), {
            class: te(n.value)
        }, {
            default: E( () => [(y(),
            M(xe(r.tag), ue(r.$attrs, {
                class: ["placeholder", o.value],
                style: i.value
            }), null, 16, ["class", "style"]))]),
            _: 1
        }, 8, ["class"]))
    }
})
  , Nd = Q({
    __name: "BPlaceholderButton",
    props: {
        animation: {
            default: void 0
        },
        cols: {
            default: void 0
        },
        tag: {
            default: "div"
        },
        variant: {
            default: "primary"
        },
        width: {
            default: void 0
        }
    },
    setup(e) {
        const t = oe(e, "BPlaceholderButton")
          , l = w( () => ({
            [`btn-${t.variant}`]: t.variant !== null
        }));
        return (a, o) => (y(),
        M(St, {
            class: te(["btn disabled", l.value]),
            animation: u(t).animation,
            width: u(t).width,
            cols: u(t).cols,
            tag: u(t).tag,
            style: {
                cursor: "wait",
                "pointer-events": "auto"
            }
        }, null, 8, ["class", "animation", "width", "cols", "tag"]))
    }
})
  , xg = Q({
    __name: "BPlaceholderCard",
    props: {
        animation: {
            default: void 0
        },
        footerAnimation: {
            default: void 0
        },
        footerSize: {
            default: "md"
        },
        footerVariant: {
            default: void 0
        },
        footerWidth: {
            default: 100
        },
        headerAnimation: {
            default: void 0
        },
        headerSize: {
            default: "md"
        },
        headerVariant: {
            default: void 0
        },
        headerWidth: {
            default: 100
        },
        imgBlankColor: {
            default: "#868e96"
        },
        imgPlacement: {
            default: "top"
        },
        imgHeight: {
            default: 100
        },
        imgSrc: {
            default: void 0
        },
        noButton: {
            type: Boolean,
            default: !1
        },
        noFooter: {
            type: Boolean,
            default: !1
        },
        noHeader: {
            type: Boolean,
            default: !1
        },
        noImg: {
            type: Boolean,
            default: !1
        },
        size: {
            default: "md"
        },
        variant: {
            default: void 0
        }
    },
    setup(e) {
        const t = oe(e, "BPlaceholderCard")
          , l = w( () => ({
            animation: t.animation,
            size: t.size,
            variant: t.variant
        }))
          , a = V( () => t.noButton ? St : Nd);
        return (o, n) => (y(),
        M(xi, {
            "img-placement": u(t).imgPlacement
        }, Qn({
            default: E( () => [A(o.$slots, "default", {}, () => [pe(St, ue({
                cols: "7"
            }, l.value), null, 16), pe(St, ue({
                cols: "4"
            }, l.value), null, 16), pe(St, ue({
                cols: "4"
            }, l.value), null, 16), pe(St, ue({
                cols: "6"
            }, l.value), null, 16), pe(St, ue({
                cols: "8"
            }, l.value), null, 16)])]),
            _: 2
        }, [u(t).noImg ? void 0 : {
            name: "img",
            fn: E( () => [A(o.$slots, "img", {}, () => [pe(Bi, {
                blank: !u(t).imgSrc,
                "blank-color": u(t).imgBlankColor,
                height: u(t).imgSrc ? void 0 : u(t).imgHeight,
                src: u(t).imgSrc,
                "img-placement": u(t).imgPlacement,
                style: {
                    cursor: "wait"
                }
            }, null, 8, ["blank", "blank-color", "height", "src", "img-placement"])])]),
            key: "0"
        }, u(t).noHeader ? void 0 : {
            name: "header",
            fn: E( () => [A(o.$slots, "header", {}, () => [pe(St, {
                width: u(t).headerWidth,
                variant: u(t).headerVariant,
                animation: u(t).headerAnimation,
                size: u(t).headerSize
            }, null, 8, ["width", "variant", "animation", "size"])])]),
            key: "1"
        }, u(t).noFooter ? void 0 : {
            name: "footer",
            fn: E( () => [A(o.$slots, "footer", {}, () => [(y(),
            M(xe(a.value), {
                width: u(t).footerWidth,
                animation: u(t).footerAnimation,
                size: u(t).noButton ? u(t).footerSize : void 0,
                variant: u(t).footerVariant
            }, null, 8, ["width", "animation", "size", "variant"]))])]),
            key: "2"
        }]), 1032, ["img-placement"]))
    }
})
  , Cg = "300px"
  , Si = Q({
    __name: "BTableSimple",
    props: {
        bordered: {
            type: Boolean,
            default: !1
        },
        borderless: {
            type: Boolean,
            default: !1
        },
        borderVariant: {
            default: null
        },
        captionTop: {
            type: Boolean,
            default: !1
        },
        dark: {
            type: Boolean,
            default: !1
        },
        fixed: {
            type: Boolean,
            default: !1
        },
        hover: {
            type: Boolean,
            default: !1
        },
        id: {
            default: void 0
        },
        noBorderCollapse: {
            type: Boolean,
            default: !1
        },
        outlined: {
            type: Boolean,
            default: !1
        },
        responsive: {
            type: [Boolean, String],
            default: !1
        },
        small: {
            type: Boolean,
            default: !1
        },
        stacked: {
            type: [Boolean, String],
            default: !1
        },
        stickyHeader: {
            type: [Boolean, String, Number],
            default: !1
        },
        striped: {
            type: Boolean,
            default: !1
        },
        stripedColumns: {
            type: Boolean,
            default: !1
        },
        variant: {
            default: null
        },
        tableAttrs: {
            default: void 0
        },
        tableClass: {
            default: void 0
        }
    },
    setup(e) {
        const t = oe(e, "BTableSimple")
          , l = w( () => [t.tableClass, "table", "b-table", {
            "table-bordered": t.bordered,
            "table-borderless": t.borderless,
            [`border-${t.borderVariant}`]: t.borderVariant !== null,
            "caption-top": t.captionTop,
            "table-dark": t.dark,
            "table-hover": t.hover,
            "b-table-stacked": t.stacked === !0,
            [`b-table-stacked-${t.stacked}`]: typeof t.stacked == "string",
            "table-striped": t.striped,
            "table-sm": t.small,
            [`table-${t.variant}`]: t.variant !== null,
            "table-striped-columns": t.stripedColumns
        }])
          , a = w( () => ({
            id: t.id,
            class: l.value,
            ...t.tableAttrs
        }))
          , o = So(w( () => (t.stickyHeader === !0 ? Cg : t.stickyHeader) || NaN))
          , n = w( () => t.stickyHeader !== !1)
          , i = w( () => t.responsive !== !1 || n.value)
          , r = w( () => n.value ? {
            maxHeight: o.value
        } : void 0)
          , s = w( () => ({
            "table-responsive": t.responsive === !0,
            [`table-responsive-${t.responsive}`]: typeof t.responsive == "string",
            "b-table-sticky-header": n.value
        }));
        return (d, c) => i.value ? (y(),
        O("div", {
            key: 0,
            class: te(s.value),
            style: Qe(r.value)
        }, [ne("table", Ie(je(a.value)), [A(d.$slots, "default")], 16)], 6)) : (y(),
        O("table", Ie(ue({
            key: 1
        }, a.value)), [A(d.$slots, "default")], 16))
    }
})
  , kg = Q({
    __name: "BPlaceholderTable",
    props: {
        animation: {
            default: void 0
        },
        cellWidth: {
            default: 100
        },
        columns: {
            default: 5
        },
        footerAnimation: {
            default: void 0
        },
        footerCellWidth: {
            default: 100
        },
        footerColumns: {
            default: void 0
        },
        footerSize: {
            default: "md"
        },
        footerVariant: {
            default: void 0
        },
        headerAnimation: {
            default: void 0
        },
        headerCellWidth: {
            default: 100
        },
        headerColumns: {
            default: void 0
        },
        headerSize: {
            default: "md"
        },
        headerVariant: {
            default: void 0
        },
        hideHeader: {
            type: Boolean,
            default: !1
        },
        rows: {
            default: 3
        },
        showFooter: {
            type: Boolean,
            default: !1
        },
        size: {
            default: "md"
        },
        variant: {
            default: void 0
        }
    },
    setup(e) {
        const t = oe(e, "BPlaceholderTable")
          , l = Oe( () => t.columns)
          , a = Oe( () => t.rows)
          , o = V( () => {
            var f;
            return (f = t.headerColumns) != null ? f : NaN
        }
        )
          , n = V( () => {
            var f;
            return (f = t.footerColumns) != null ? f : NaN
        }
        )
          , i = Oe(o)
          , r = Oe(n)
          , s = V( () => l.value || 5)
          , d = V( () => a.value || 3)
          , c = V( () => t.headerColumns === void 0 ? s.value : i.value)
          , v = V( () => t.footerColumns === void 0 ? s.value : r.value);
        return (f, p) => (y(),
        M(Si, null, {
            default: E( () => [u(t).hideHeader ? me("", !0) : A(f.$slots, "thead", {
                key: 0
            }, () => [ne("thead", null, [ne("tr", null, [(y(!0),
            O(Be, null, Ge(c.value, (g, b) => (y(),
            O("th", {
                key: b
            }, [pe(St, {
                size: u(t).headerSize,
                variant: u(t).headerVariant,
                animation: u(t).headerAnimation,
                width: u(t).headerCellWidth
            }, null, 8, ["size", "variant", "animation", "width"])]))), 128))])])]), A(f.$slots, "default", {}, () => [ne("tbody", null, [(y(!0),
            O(Be, null, Ge(d.value, (g, b) => (y(),
            O("tr", {
                key: b
            }, [(y(!0),
            O(Be, null, Ge(s.value, (m, h) => (y(),
            O("td", {
                key: h
            }, [pe(St, {
                size: u(t).size,
                variant: u(t).variant,
                animation: u(t).animation,
                width: u(t).cellWidth
            }, null, 8, ["size", "variant", "animation", "width"])]))), 128))]))), 128))])]), u(t).showFooter ? A(f.$slots, "tfoot", {
                key: 1
            }, () => [ne("tfoot", null, [ne("tr", null, [(y(!0),
            O(Be, null, Ge(v.value, (g, b) => (y(),
            O("th", {
                key: b
            }, [pe(St, {
                size: u(t).footerSize,
                variant: u(t).footerVariant,
                animation: u(t).footerAnimation,
                width: u(t).footerCellWidth
            }, null, 8, ["size", "variant", "animation", "width"])]))), 128))])])]) : me("", !0)]),
            _: 3
        }))
    }
})
  , Sg = Q({
    __name: "BPlaceholderWrapper",
    props: {
        loading: {
            type: Boolean,
            default: !1
        }
    },
    setup(e) {
        const t = oe(e, "BPlaceholderWrapper");
        return (l, a) => u(t).loading ? A(l.$slots, "loading", {
            key: 0
        }) : A(l.$slots, "default", {
            key: 1
        })
    }
})
  , Tg = Q({
    __name: "BRow",
    props: {
        tag: {
            default: "div"
        },
        gutterX: {
            default: void 0
        },
        gutterY: {
            default: void 0
        },
        noGutters: {
            type: Boolean,
            default: !1
        },
        alignV: {
            default: void 0
        },
        alignH: {
            default: void 0
        },
        alignContent: {
            default: void 0
        },
        cols: {
            default: void 0
        },
        colsSm: {
            default: void 0
        },
        colsMd: {
            default: void 0
        },
        colsLg: {
            default: void 0
        },
        colsXl: {
            default: void 0
        },
        colsXxl: {
            default: void 0
        }
    },
    setup(e) {
        const t = oe(e, "BRow")
          , l = Ia( () => t.alignH)
          , a = w( () => lo({
            cols: t.cols,
            colsLg: t.colsLg,
            colsMd: t.colsMd,
            colsSm: t.colsSm,
            colsXl: t.colsXl,
            colsXxl: t.colsXxl
        }, ["cols", "colsLg", "colsMd", "colsSm", "colsXl", "colsXxl"], "cols", "row-cols"))
          , o = w( () => [a.value, {
            [`gx-${t.gutterX}`]: t.gutterX !== void 0,
            [`gy-${t.gutterY}`]: t.gutterY !== void 0,
            "g-0": t.noGutters,
            [`align-items-${t.alignV}`]: t.alignV !== void 0,
            [l.value]: t.alignH !== void 0,
            [`align-content-${t.alignContent}`]: t.alignContent !== void 0
        }]);
        return (n, i) => (y(),
        M(xe(u(t).tag), {
            class: te(["row", o.value])
        }, {
            default: E( () => [A(n.$slots, "default")]),
            _: 3
        }, 8, ["class"]))
    }
})
  , Ft = e => typeof e == "object" && e !== null
  , da = e => typeof e == "object" && e !== null && "key"in e
  , Ld = Q({
    __name: "BTbody",
    props: {
        variant: {
            default: null
        }
    },
    setup(e) {
        const t = oe(e, "BTbody")
          , l = w( () => ({
            [`thead-${t.variant}`]: t.variant !== null
        }));
        return (a, o) => (y(),
        O("tbody", {
            class: te(l.value)
        }, [A(a.$slots, "default")], 2))
    }
})
  , Vg = ["scope", "colspan", "rowspan", "data-label"]
  , $g = {
    key: 0
}
  , Dl = Q({
    __name: "BTd",
    props: {
        colspan: {
            default: void 0
        },
        rowspan: {
            default: void 0
        },
        stackedHeading: {
            default: void 0
        },
        stickyColumn: {
            type: Boolean,
            default: !1
        },
        variant: {
            default: null
        }
    },
    setup(e) {
        const t = oe(e, "BTd")
          , l = w( () => ({
            [`table-${t.variant}`]: t.variant !== null,
            "b-table-sticky-column": t.stickyColumn,
            "table-b-table-default": t.stickyColumn && t.variant === null
        }))
          , a = V( () => t.colspan ? "colspan" : t.rowspan ? "rowspan" : "col");
        return (o, n) => (y(),
        O("td", {
            scope: a.value,
            class: te(l.value),
            colspan: u(t).colspan,
            rowspan: u(t).rowspan,
            "data-label": u(t).stackedHeading
        }, [u(t).stackedHeading ? (y(),
        O("div", $g, [A(o.$slots, "default")])) : A(o.$slots, "default", {
            key: 1
        })], 10, Vg))
    }
})
  , Fn = Q({
    __name: "BTfoot",
    props: {
        variant: {
            default: null
        }
    },
    setup(e) {
        const t = oe(e, "BTfoot")
          , l = w( () => ({
            [`table-${t.variant}`]: t.variant !== null
        }));
        return (a, o) => (y(),
        O("tfoot", {
            class: te(l.value)
        }, [A(a.$slots, "default")], 2))
    }
})
  , Ag = ["scope", "colspan", "rowspan", "data-label"]
  , Pg = {
    key: 0
}
  , In = Q({
    __name: "BTh",
    props: {
        colspan: {
            default: void 0
        },
        rowspan: {
            default: void 0
        },
        stackedHeading: {
            default: void 0
        },
        stickyColumn: {
            type: Boolean,
            default: !1
        },
        variant: {
            default: null
        }
    },
    setup(e) {
        const t = oe(e, "BTh")
          , l = w( () => ({
            [`table-${t.variant}`]: t.variant !== null,
            "b-table-sticky-column": t.stickyColumn,
            "table-b-table-default": t.stickyColumn && t.variant === null
        }))
          , a = V( () => t.colspan ? "colspan" : t.rowspan ? "rowspan" : "col");
        return (o, n) => (y(),
        O("th", {
            scope: a.value,
            class: te(l.value),
            colspan: u(t).colspan,
            rowspan: u(t).rowspan,
            "data-label": u(t).stackedHeading
        }, [u(t).stackedHeading !== void 0 ? (y(),
        O("div", Pg, [A(o.$slots, "default")])) : A(o.$slots, "default", {
            key: 1
        })], 10, Ag))
    }
})
  , Hd = Q({
    __name: "BThead",
    props: {
        variant: {
            default: null
        }
    },
    setup(e) {
        const t = oe(e, "BThead")
          , l = w( () => ({
            [`table-${t.variant}`]: t.variant !== null
        }));
        return (a, o) => (y(),
        O("thead", {
            class: te(l.value)
        }, [A(a.$slots, "default")], 2))
    }
})
  , It = Q({
    __name: "BTr",
    props: {
        variant: {
            default: null
        }
    },
    setup(e) {
        const t = oe(e, "BTr")
          , l = w( () => ({
            [`table-${t.variant}`]: t.variant !== null
        }));
        return (a, o) => (y(),
        O("tr", {
            class: te(l.value)
        }, [A(a.$slots, "default")], 2))
    }
})
  , Og = {
    key: 0,
    class: "b-table-stacked-label"
}
  , Eg = {
    class: "d-inline-flex flex-nowrap align-items-center gap-1"
}
  , Fg = {
    key: 2
}
  , Md = Q({
    __name: "BTableLite",
    props: {
        align: {
            default: void 0
        },
        caption: {
            default: void 0
        },
        captionHtml: {
            default: void 0
        },
        detailsTdClass: {
            default: void 0
        },
        emptyFilteredText: {
            default: "There are no records matching your request"
        },
        emptyText: {
            default: "There are no records to show"
        },
        fieldColumnClass: {
            type: [Function, String, Object, Array],
            default: void 0
        },
        fields: {
            default: () => []
        },
        footClone: {
            type: Boolean,
            default: !1
        },
        footRowVariant: {
            default: void 0
        },
        footVariant: {
            default: void 0
        },
        headRowVariant: {
            default: void 0
        },
        headVariant: {
            default: void 0
        },
        items: {
            default: () => []
        },
        labelStacked: {
            type: Boolean,
            default: !1
        },
        modelValue: {
            default: void 0
        },
        primaryKey: {
            default: void 0
        },
        showEmpty: {
            type: Boolean,
            default: !1
        },
        tbodyClass: {
            default: void 0
        },
        tbodyTrAttrs: {},
        tbodyTrClass: {
            type: [Function, String, Object, Array],
            default: void 0
        },
        tfootClass: {
            default: void 0
        },
        tfootTrClass: {
            default: void 0
        },
        theadClass: {
            default: void 0
        },
        theadTrClass: {
            default: void 0
        },
        bordered: {
            type: Boolean,
            default: void 0
        },
        borderless: {
            type: Boolean,
            default: void 0
        },
        borderVariant: {
            default: void 0
        },
        captionTop: {
            type: Boolean,
            default: void 0
        },
        dark: {
            type: Boolean,
            default: void 0
        },
        fixed: {
            type: Boolean,
            default: void 0
        },
        hover: {
            type: Boolean,
            default: void 0
        },
        id: {
            default: void 0
        },
        noBorderCollapse: {
            type: Boolean,
            default: void 0
        },
        outlined: {
            type: Boolean,
            default: void 0
        },
        responsive: {
            type: [Boolean, String],
            default: void 0
        },
        small: {
            type: Boolean,
            default: void 0
        },
        stacked: {
            type: [Boolean, String],
            default: void 0
        },
        stickyHeader: {
            type: [Boolean, String, Number],
            default: void 0
        },
        striped: {
            type: Boolean,
            default: void 0
        },
        stripedColumns: {
            type: Boolean,
            default: void 0
        },
        variant: {
            default: void 0
        },
        tableAttrs: {},
        tableClass: {
            default: void 0
        }
    },
    emits: ["head-clicked", "row-clicked", "row-dbl-clicked", "row-hovered", "row-unhovered"],
    setup(e, {emit: t}) {
        const l = oe(e, "BTableLite")
          , a = t
          , o = m => [m, m._showDetails]
          , n = Y(new WeakMap(l.items.reduce( (m, h) => (Ft(h) && m.push(o(h)),
        m), [])));
        ke( () => l.items, m => {
            m.forEach(h => {
                if (!Ft(h))
                    return;
                const B = o(h);
                n.value.set(B[0], B[1])
            }
            )
        }
        , {
            deep: !0
        });
        const i = w( () => [l.tableClass, {
            [`align-${l.align}`]: l.align !== void 0
        }])
          , r = w( () => {
            if (!l.fields.length && l.items.length) {
                const [m] = l.items;
                return Ft(m) || Array.isArray(m) ? Object.keys(m).map(h => {
                    const B = rn(h);
                    return {
                        key: h,
                        label: B,
                        tdAttr: l.stacked === !0 ? {
                            "data-label": B
                        } : void 0
                    }
                }
                ) : [{
                    key: "",
                    _noHeader: !0
                }]
            }
            return l.fields.map(m => {
                if (da(m))
                    return {
                        ...m,
                        tdAttr: l.stacked === !0 ? {
                            "data-label": rn(m.key),
                            ...m.tdAttr
                        } : m.tdAttr
                    };
                const h = rn(m);
                return {
                    key: m,
                    label: h,
                    tdAttr: l.stacked === !0 ? {
                        "data-label": h
                    } : void 0
                }
            }
            )
        }
        )
          , s = V( () => r.value.length)
          , d = w( () => !(r.value.length > 0 && r.value.every(m => m._noHeader === !0)))
          , c = (m, h, B) => {
            const $ = ut(m, h);
            return B && typeof B == "function" ? B($, h, m) : B
        }
          , v = (m, h, B=!1) => {
            a("head-clicked", m.key, m, h, B)
        }
          , f = m => {
            if (Ft(m)) {
                const h = n.value.get(m);
                n.value.set(m, !h),
                m._showDetails = !h
            }
        }
          , p = m => [m.class, m.thClass, {
            "b-table-sticky-column": m.stickyColumn
        }, l.fieldColumnClass ? typeof l.fieldColumnClass == "function" ? l.fieldColumnClass(m) : l.fieldColumnClass : null]
          , g = (m, h) => {
            var B, $;
            return [m.class, m.tdClass, Ft(h) && (B = h._cellVariants) != null && B[m.key] ? `table-${($ = h._cellVariants) == null ? void 0 : $[m.key]}` : null, {
                "b-table-sticky-column": m.stickyColumn
            }]
        }
          , b = (m, h) => l.tbodyTrClass ? typeof l.tbodyTrClass == "function" ? l.tbodyTrClass(m, h) : l.tbodyTrClass : null;
        return (m, h) => (y(),
        M(Si, {
            id: u(l).id,
            bordered: u(l).bordered,
            borderless: u(l).borderless,
            "border-variant": u(l).borderVariant,
            "caption-top": u(l).captionTop,
            dark: u(l).dark,
            fixed: u(l).fixed,
            hover: u(l).hover,
            "no-border-collapse": u(l).noBorderCollapse,
            outlined: u(l).outlined,
            responsive: u(l).responsive,
            small: u(l).small,
            stacked: u(l).stacked,
            "sticky-header": u(l).stickyHeader,
            striped: u(l).striped,
            "table-class": i.value,
            variant: u(l).variant,
            "striped-columns": u(l).stripedColumns
        }, {
            default: E( () => [ll(pe(Hd, {
                variant: u(l).headVariant,
                class: te(u(l).theadClass)
            }, {
                default: E( () => [m.$slots["thead-top"] ? A(m.$slots, "thead-top", {
                    key: 0
                }) : me("", !0), pe(It, {
                    variant: u(l).headRowVariant,
                    class: te(u(l).theadTrClass)
                }, {
                    default: E( () => [(y(!0),
                    O(Be, null, Ge(r.value, B => (y(),
                    M(In, ue({
                        key: B.key,
                        scope: "col",
                        class: p(B),
                        title: B.headerTitle,
                        variant: B.variant,
                        abbr: B.headerAbbr,
                        style: B.thStyle,
                        ref_for: !0
                    }, B.thAttr, {
                        onClick: $ => v(B, $)
                    }), {
                        default: E( () => [A(m.$slots, m.$slots[`head(${String(B.key)})`] ? `head(${String(B.key)})` : "head()", {
                            label: B.label,
                            column: B.key,
                            field: B,
                            isFoot: !1
                        }, () => [ye(fe(u(oo)(B)), 1)])]),
                        _: 2
                    }, 1040, ["class", "title", "variant", "abbr", "style", "onClick"]))), 128))]),
                    _: 3
                }, 8, ["variant", "class"]), m.$slots["thead-sub"] ? (y(),
                M(It, {
                    key: 1
                }, {
                    default: E( () => [(y(!0),
                    O(Be, null, Ge(r.value, B => (y(),
                    M(Dl, {
                        key: B.key,
                        scope: "col",
                        variant: B.variant,
                        class: te([B.class, B.thClass])
                    }, {
                        default: E( () => [A(m.$slots, "thead-sub", ue({
                            items: r.value,
                            ref_for: !0
                        }, B), () => [ye(fe(B.label), 1)])]),
                        _: 2
                    }, 1032, ["variant", "class"]))), 128))]),
                    _: 3
                })) : me("", !0)]),
                _: 3
            }, 8, ["variant", "class"]), [[Fa, d.value]]), pe(Ld, {
                class: te(u(l).tbodyClass)
            }, {
                default: E( () => [A(m.$slots, "custom-body", {
                    fields: r.value,
                    items: u(l).items,
                    columns: r.value.length
                }, () => [!u(l).stacked && m.$slots["top-row"] ? (y(),
                M(It, {
                    key: 0
                }, {
                    default: E( () => [A(m.$slots, "top-row")]),
                    _: 3
                })) : me("", !0), (y(!0),
                O(Be, null, Ge(u(l).items, (B, $) => (y(),
                O(Be, {
                    key: $
                }, [pe(It, {
                    class: te(b(B, "row")),
                    variant: u(Ft)(B) ? B._rowVariant : void 0,
                    onClick: x => !u(Ka)(x) && a("row-clicked", B, $, x),
                    onDblclick: x => !u(Ka)(x) && a("row-dbl-clicked", B, $, x),
                    onMouseenter: x => !u(Ka)(x) && a("row-hovered", B, $, x),
                    onMouseleave: x => !u(Ka)(x) && a("row-unhovered", B, $, x)
                }, {
                    default: E( () => [(y(!0),
                    O(Be, null, Ge(r.value, x => {
                        var C;
                        return y(),
                        M(Dl, ue({
                            key: x.key,
                            variant: u(Ft)(B) && (C = B._cellVariants) != null && C[x.key] ? null : x.variant,
                            class: g(x, B),
                            ref_for: !0
                        }, c(B, String(x.key), x.tdAttr)), {
                            default: E( () => {
                                var T;
                                return [u(l).stacked && u(l).labelStacked ? (y(),
                                O("label", Og, fe(u(oo)(x)), 1)) : me("", !0), A(m.$slots, m.$slots[`cell(${String(x.key)})`] ? `cell(${String(x.key)})` : "cell()", {
                                    value: u(Vn)(B, String(x.key), x.formatter),
                                    unformatted: u(ut)(B, String(x.key)),
                                    index: $,
                                    item: B,
                                    field: x,
                                    items: m.items,
                                    toggleDetails: () => {
                                        f(B)
                                    }
                                    ,
                                    detailsShowing: u(Ft)(B) && (T = n.value.get(B)) != null ? T : !1
                                }, () => [!m.$slots[`cell(${String(x.key)})`] && !m.$slots["cell()"] ? (y(),
                                O(Be, {
                                    key: 0
                                }, [ye(fe(u(Vn)(B, String(x.key), x.formatter)), 1)], 64)) : me("", !0)])]
                            }
                            ),
                            _: 2
                        }, 1040, ["variant", "class"])
                    }
                    ), 128))]),
                    _: 2
                }, 1032, ["class", "variant", "onClick", "onDblclick", "onMouseenter", "onMouseleave"]), u(Ft)(B) && n.value.get(B) === !0 && m.$slots["row-details"] ? (y(),
                O(Be, {
                    key: 0
                }, [pe(It, {
                    "aria-hidden": "true",
                    role: "presentation",
                    class: "d-none"
                }), pe(It, {
                    class: te(b(B, "row-details")),
                    variant: B._rowVariant
                }, {
                    default: E( () => [pe(Dl, {
                        colspan: s.value
                    }, {
                        default: E( () => [A(m.$slots, "row-details", {
                            item: B,
                            toggleDetails: () => {
                                f(B)
                            }
                            ,
                            fields: u(l).fields,
                            index: $
                        })]),
                        _: 2
                    }, 1032, ["colspan"])]),
                    _: 2
                }, 1032, ["class", "variant"])], 64)) : me("", !0)], 64))), 128)), u(l).showEmpty && u(l).items.length === 0 ? (y(),
                M(It, {
                    key: 1,
                    class: "b-table-empty-slot"
                }, {
                    default: E( () => [pe(Dl, {
                        colspan: s.value
                    }, {
                        default: E( () => [A(m.$slots, "empty", {
                            items: u(l).items
                        }, () => [ye(fe(u(l).emptyText), 1)])]),
                        _: 3
                    }, 8, ["colspan"])]),
                    _: 3
                })) : me("", !0), !u(l).stacked && m.$slots["bottom-row"] ? (y(),
                M(It, {
                    key: 2
                }, {
                    default: E( () => [A(m.$slots, "bottom-row")]),
                    _: 3
                })) : me("", !0)])]),
                _: 3
            }, 8, ["class"]), u(l).footClone ? (y(),
            M(Fn, {
                key: 0,
                variant: u(l).footVariant,
                class: te(u(l).tfootClass)
            }, {
                default: E( () => [pe(It, {
                    variant: u(l).footRowVariant,
                    class: te(u(l).tfootTrClass)
                }, {
                    default: E( () => [(y(!0),
                    O(Be, null, Ge(r.value, B => (y(),
                    M(In, ue({
                        key: B.key,
                        scope: "col",
                        class: p(B),
                        title: B.headerTitle,
                        abbr: B.headerAbbr,
                        style: B.thStyle,
                        variant: B.variant,
                        ref_for: !0
                    }, B.thAttr, {
                        onClick: $ => v(B, $, !0)
                    }), {
                        default: E( () => [ne("div", Eg, [ne("div", null, [A(m.$slots, m.$slots[`foot(${String(B.key)})`] ? `foot(${String(B.key)})` : "foot()", {
                            label: B.label,
                            column: B.key,
                            field: B,
                            isFoot: !0
                        }, () => [ye(fe(u(oo)(B)), 1)])])])]),
                        _: 2
                    }, 1040, ["class", "title", "abbr", "style", "variant", "onClick"]))), 128))]),
                    _: 3
                }, 8, ["variant", "class"])]),
                _: 3
            }, 8, ["variant", "class"])) : m.$slots["custom-foot"] ? (y(),
            M(Fn, {
                key: 1
            }, {
                default: E( () => [A(m.$slots, "custom-foot", {
                    fields: r.value,
                    items: u(l).items,
                    columns: r.value.length
                })]),
                _: 3
            })) : me("", !0), m.$slots["table-caption"] || u(l).caption ? (y(),
            O("caption", Fg, [A(m.$slots, "table-caption", {}, () => [ye(fe(u(l).caption), 1)])])) : me("", !0)]),
            _: 3
        }, 8, ["id", "bordered", "borderless", "border-variant", "caption-top", "dark", "fixed", "hover", "no-border-collapse", "outlined", "responsive", "small", "stacked", "sticky-header", "striped", "table-class", "variant", "striped-columns"]))
    }
})
  , Ig = ne("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    fill: "currentColor",
    class: "bi bi-arrow-up-short",
    viewBox: "0 0 16 16",
    "aria-hidden": ""
}, [ne("path", {
    "fill-rule": "evenodd",
    d: "M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
})], -1)
  , Ng = ne("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    fill: "currentColor",
    class: "bi bi-arrow-down-short",
    viewBox: "0 0 16 16",
    "aria-hidden": ""
}, [ne("path", {
    "fill-rule": "evenodd",
    d: "M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
})], -1)
  , Lg = {
    style: {
        opacity: .4
    },
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    fill: "currentColor",
    class: "bi bi-arrow-up-short",
    viewBox: "0 0 16 16",
    "aria-hidden": ""
}
  , Hg = ne("path", {
    "fill-rule": "evenodd",
    d: "M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
}, null, -1)
  , Mg = [Hg]
  , zg = {
    class: "d-flex align-items-center gap-2 mt-5"
}
  , Rg = Q({
    __name: "BTable",
    props: Ae({
        provider: {
            default: void 0
        },
        noProvider: {
            default: void 0
        },
        noProviderPaging: {
            type: Boolean,
            default: !1
        },
        noProviderSorting: {
            type: Boolean,
            default: !1
        },
        noProviderFiltering: {
            type: Boolean,
            default: !1
        },
        sortBy: {},
        mustSort: {
            type: [Boolean, Array],
            default: !1
        },
        selectable: {
            type: Boolean,
            default: !1
        },
        multisort: {
            type: Boolean,
            default: !1
        },
        stickySelect: {
            type: Boolean,
            default: !1
        },
        selectHead: {
            type: [Boolean, String],
            default: !0
        },
        selectMode: {
            default: "multi"
        },
        selectionVariant: {
            default: "primary"
        },
        busy: {
            type: Boolean
        },
        busyLoadingText: {
            default: "Loading..."
        },
        perPage: {
            default: Number.POSITIVE_INFINITY
        },
        currentPage: {
            default: 1
        },
        filter: {
            default: void 0
        },
        filterable: {
            default: void 0
        },
        noLocalSorting: {
            type: Boolean,
            default: !1
        },
        noSelectOnClick: {
            type: Boolean,
            default: !1
        },
        selectedItems: {},
        noSortableIcon: {
            type: Boolean,
            default: !1
        },
        align: {
            default: void 0
        },
        caption: {
            default: void 0
        },
        captionHtml: {
            default: void 0
        },
        detailsTdClass: {
            default: void 0
        },
        emptyFilteredText: {
            default: void 0
        },
        emptyText: {
            default: void 0
        },
        fieldColumnClass: {
            type: [Function, String, Object, Array],
            default: void 0
        },
        fields: {
            default: () => []
        },
        footClone: {
            type: Boolean,
            default: void 0
        },
        footRowVariant: {
            default: void 0
        },
        footVariant: {
            default: void 0
        },
        headRowVariant: {
            default: void 0
        },
        headVariant: {
            default: void 0
        },
        items: {
            default: () => []
        },
        labelStacked: {
            type: Boolean,
            default: void 0
        },
        modelValue: {
            default: void 0
        },
        primaryKey: {
            default: void 0
        },
        showEmpty: {
            type: Boolean,
            default: void 0
        },
        tbodyClass: {
            default: void 0
        },
        tbodyTrAttrs: {},
        tbodyTrClass: {
            type: [Function, String, Object, Array],
            default: void 0
        },
        tfootClass: {
            default: void 0
        },
        tfootTrClass: {
            default: void 0
        },
        theadClass: {
            default: void 0
        },
        theadTrClass: {
            default: void 0
        },
        bordered: {
            type: Boolean,
            default: void 0
        },
        borderless: {
            type: Boolean,
            default: void 0
        },
        borderVariant: {
            default: void 0
        },
        captionTop: {
            type: Boolean,
            default: void 0
        },
        dark: {
            type: Boolean,
            default: void 0
        },
        fixed: {
            type: Boolean,
            default: void 0
        },
        hover: {
            type: Boolean,
            default: void 0
        },
        id: {
            default: void 0
        },
        noBorderCollapse: {
            type: Boolean,
            default: void 0
        },
        outlined: {
            type: Boolean,
            default: void 0
        },
        responsive: {
            type: [Boolean, String],
            default: void 0
        },
        small: {
            type: Boolean,
            default: void 0
        },
        stacked: {
            type: [Boolean, String],
            default: void 0
        },
        stickyHeader: {
            type: [Boolean, String, Number],
            default: void 0
        },
        striped: {
            type: Boolean,
            default: void 0
        },
        stripedColumns: {
            type: Boolean,
            default: void 0
        },
        variant: {
            default: void 0
        },
        tableAttrs: {}
    }, {
        sortBy: {
            default: void 0
        },
        sortByModifiers: {},
        busy: {
            type: Boolean,
            default: !1
        },
        busyModifiers: {},
        selectedItems: {
            default: () => []
        },
        selectedItemsModifiers: {}
    }),
    emits: Ae(["filtered", "head-clicked", "row-clicked", "row-dbl-clicked", "row-hovered", "row-unhovered", "row-selected", "row-unselected", "sorted", "change"], ["update:sortBy", "update:busy", "update:selectedItems"]),
    setup(e, {expose: t, emit: l}) {
        const a = oe(e, "BTable")
          , o = l
          , n = Ne(e, "sortBy")
          , i = Ne(e, "busy")
          , r = Ne(e, "selectedItems")
          , s = w({
            get: () => new Set([...r.value]),
            set: k => {
                r.value = [...k]
            }
        })
          , d = {
            add: k => {
                const P = new Set(s.value);
                P.add(k),
                s.value = P,
                o("row-selected", k)
            }
            ,
            clear: () => {
                s.value.forEach(k => {
                    d.delete(k)
                }
                )
            }
            ,
            delete: k => {
                const P = new Set(s.value);
                if (a.primaryKey) {
                    const N = a.primaryKey;
                    r.value.forEach( (D, J) => {
                        const q = ut(D, N)
                          , G = ut(k, N);
                        q && G && q === G && P.delete(r.value[J])
                    }
                    )
                } else
                    P.delete(k);
                s.value = P,
                o("row-unselected", k)
            }
            ,
            set: k => {
                s.value = new Set(k),
                s.value.forEach(P => {
                    o("row-unselected", P)
                }
                )
            }
            ,
            has: k => {
                if (!a.primaryKey)
                    return s.value.has(k);
                const P = a.primaryKey;
                for (const N of s.value) {
                    const D = ut(N, P)
                      , J = ut(k, P);
                    if (D && J && D === J)
                        return !0
                }
                return !1
            }
        }
          , c = Y([])
          , v = Oe( () => a.perPage, {
            method: "parseInt"
        })
          , f = Oe( () => a.currentPage, {
            method: "parseInt"
        })
          , p = V( () => !!a.filter)
          , g = V( () => a.provider !== void 0)
          , b = V( () => s.value.size > 0)
          , m = w( () => n.value !== void 0 || a.fields.some(k => typeof k == "object" && k !== null && k.sortable === !0))
          , h = w( () => a.fields.map(k => {
            var P;
            if (!(typeof k == "object" && k !== null))
                return k;
            const N = (P = n.value) == null ? void 0 : P.find(J => k.key === J.key)
              , D = m.value === !1 ? void 0 : N === void 0 ? "none" : N.order === "desc" ? "descending" : N.order === "asc" ? "ascending" : "none";
            return {
                ...k,
                thAttr: {
                    "aria-sort": D,
                    ...k.thAttr
                }
            }
        }
        ))
          , B = w( () => ({
            "b-table-busy": i.value,
            "b-table-selectable": a.selectable,
            "user-select-none": a.selectable && b.value
        }))
          , $ = w( () => [a.tbodyTrClass ? typeof a.tbodyTrClass == "function" ? a.tbodyTrClass(null, "table-busy") : a.tbodyTrClass : null])
          , x = k => [{
            "b-table-sortable-column": m.value && k.sortable
        }]
          , C = (k, P) => [{
            [`selected table-${a.selectionVariant}`]: a.selectable && k && d.has(k)
        }, a.tbodyTrClass ? typeof a.tbodyTrClass == "function" ? a.tbodyTrClass(k, P) : a.tbodyTrClass : null]
          , T = w( () => {
            const k = D => {
                var J;
                const q = (J = n.value) == null ? void 0 : J.filter(G => !!G.order);
                return !q || q.length === 0 ? D : [...D].sort( (G, z) => {
                    var I;
                    for (let X = 0; X < ((I = q.length) != null ? I : 0); X++) {
                        const le = q[X]
                          , _e = Te => {
                            var Re;
                            if (!Ft(Te))
                                return String(Te);
                            const W = h.value.find(_ => da(_) ? _.key === le.key : !1)
                              , se = ut(Te, le.key);
                            if (da(W) && W.sortByFormatted) {
                                const _ = typeof W.sortByFormatted == "function" ? W.sortByFormatted : W.formatter;
                                if (_)
                                    return Vn(Te, String(W.key), _)
                            }
                            return typeof se == "object" && se !== null ? JSON.stringify(se) : (Re = se == null ? void 0 : se.toString()) != null ? Re : ""
                        }
                          , he = _e(G)
                          , be = _e(z)
                          , He = le.comparer ? le.comparer(he, be) : he.localeCompare(be, void 0, {
                            numeric: !0
                        });
                        if (He !== 0)
                            return le.order === "asc" ? He : -He
                    }
                    return 0
                }
                )
            }
              , P = D => D.filter(J => Ft(J) ? Object.entries(J).some( ([q,G]) => {
                var le;
                var z, I, X;
                return G == null || q[0] === "_" || !((z = a.filterable) != null && z.includes(q)) && (I = a.filterable) != null && I.length ? !1 : ( () => {
                    const _e = h.value.find(he => da(he) ? he.key === q : !1);
                    if (da(_e) && _e.filterByFormatted) {
                        const he = typeof _e.filterByFormatted == "function" ? _e.filterByFormatted : _e.formatter;
                        if (he)
                            return he(G, String(_e.key), J)
                    }
                    return typeof G == "object" ? JSON.stringify(Object.values(G)) : G.toString()
                }
                )().toLowerCase().includes((le = (X = a.filter) == null ? void 0 : X.toLowerCase()) != null ? le : "")
            }
            ) : !0);
            let N = g.value ? c.value : a.items;
            return N = N.map(D => {
                if (typeof D == "object" && D !== null && Object.keys(D).some(J => J.includes("."))) {
                    let J = {};
                    for (const q in D)
                        q.includes(".") ? J = vm(J, q, D[q]) : J[q] = D[q];
                    return J
                }
                return D
            }
            ),
            (p.value === !0 && !g.value || p.value === !0 && g.value && a.noProviderFiltering) && (N = P(N)),
            (m.value === !0 && !g.value && !a.noLocalSorting || m.value === !0 && g.value && a.noProviderSorting) && (N = k(N)),
            N
        }
        )
          , F = w( () => Number.isNaN(v.value) || g.value && !a.noProviderPaging ? T.value : T.value.slice((f.value - 1) * (v.value || Number.POSITIVE_INFINITY), f.value * (v.value || Number.POSITIVE_INFINITY)));
        ke(F, k => {
            o("change", k)
        }
        );
        const j = (k, P, N=!1, D=!1, J=!1) => {
            if (a.selectable)
                if (a.selectMode === "single" || a.selectMode === "multi") {
                    if (N || D)
                        return;
                    d.has(k) ? d.delete(k) : a.selectMode === "single" ? d.set([k]) : d.add(k)
                } else if (D || J)
                    d.has(k) ? d.delete(k) : d.add(k);
                else if (N) {
                    const q = [...s.value].pop()
                      , G = a.items.findIndex(le => le === q)
                      , z = Math.min(G, P)
                      , I = Math.max(G, P)
                      , X = a.items.slice(z, I + 1);
                    d.set(X)
                } else
                    d.set([k])
        }
          , L = (k, P, N) => {
            a.noSelectOnClick === !1 && j(k, P, N.shiftKey, N.ctrlKey, N.metaKey),
            o("row-clicked", k, P, N)
        }
          , Z = k => {
            var _e;
            var P, N;
            if (!m.value)
                return;
            const D = typeof k == "object" && k !== null ? k.key : k
              , J = typeof k == "object" && k !== null ? k.sortable : !1;
            if (!(m.value === !0 && J === !0))
                return;
            const q = he => {
                if (he === "asc")
                    return "desc";
                if (he === void 0 || a.mustSort === !0 || Array.isArray(a.mustSort) && a.mustSort.includes(D))
                    return "asc"
            }
              , G = (_e = (P = n.value) == null ? void 0 : P.findIndex(he => he.key === D)) != null ? _e : -1
              , z = (N = n.value) == null ? void 0 : N[G]
              , I = G === -1 || !z ? {
                key: D,
                order: "asc"
            } : {
                ...z
            }
              , X = () => {
                var Te;
                var he, be;
                let He = I;
                if (G === -1)
                    n.value = [...(Te = n.value) != null ? Te : [], I];
                else {
                    const W = q(I.order);
                    He = {
                        ...I,
                        order: W
                    },
                    n.value = W ? (he = n.value) == null ? void 0 : he.map(se => se.key === He.key ? He : se) : (be = n.value) == null ? void 0 : be.filter(se => se.key !== He.key)
                }
                return He
            }
              , le = () => {
                const he = {
                    ...I,
                    order: G === -1 ? I.order : q(I.order)
                };
                return n.value = [he],
                he
            }
            ;
            o("sorted", a.multisort === !0 ? X() : le())
        }
          , de = (k, P, N, D=!1) => {
            o("head-clicked", k, P, N, D),
            Z(P)
        }
          , R = async () => {
            if (!g.value || a.provider === void 0 || i.value)
                return;
            i.value = !0;
            const k = a.provider({
                currentPage: f.value,
                filter: a.filter,
                sortBy: n.value,
                perPage: v.value
            });
            try {
                const P = k instanceof Promise ? await k : k;
                if (P === void 0)
                    return;
                c.value = P
            } finally {
                i.value = !1
            }
        }
          , ee = async (k, P, N) => {
            if (P === N)
                return;
            const D = z => {
                var I;
                return ((I = a.noProvider) == null ? void 0 : I.includes(z)) === !0
            }
              , J = (k === "currentPage" || k === "perPage") && (D("paging") || a.noProviderPaging === !0)
              , q = k === "filter" && (D("filtering") || a.noProviderFiltering === !0)
              , G = (k === "sortBy" || k === "sortDesc") && (D("sorting") || a.noProviderSorting === !0);
            J || q || G || (g.value === !0 && await R(),
            k === "currentPage" || k === "perPage" || o("filtered", [...T.value]))
        }
        ;
        return ke( () => a.filter, (k, P) => {
            ee("filter", k, P),
            !(k === P || g.value) && (k || o("filtered", [...T.value]))
        }
        ),
        ke(f, (k, P) => {
            ee("currentPage", k, P)
        }
        ),
        ke(v, (k, P) => {
            ee("perPage", k, P)
        }
        ),
        ke(n, (k, P) => {
            ee("sortBy", k, P)
        }
        , {
            deep: !0
        }),
        ke( () => a.provider, k => {
            if (k === void 0) {
                c.value = [];
                return
            }
            R()
        }
        ),
        pt(R),
        t({
            clearSelected: () => {
                a.selectable && d.clear()
            }
            ,
            refresh: R,
            selectAllRows: () => {
                if (!a.selectable)
                    return;
                const k = s.value.size > 0 ? [...s.value] : [];
                s.value = new Set([...T.value]),
                s.value.forEach(P => {
                    k.includes(P) || o("row-selected", P)
                }
                )
            }
            ,
            selectRow: k => {
                if (!a.selectable)
                    return;
                const P = T.value[k];
                !P || d.has(P) || d.add(P)
            }
            ,
            unselectRow: k => {
                if (!a.selectable)
                    return;
                const P = T.value[k];
                !P || !d.has(P) || d.delete(P)
            }
            ,
            isRowSelected: k => {
                if (!a.selectable)
                    return !1;
                const P = T.value[k];
                return d.has(P)
            }
        }),
        (k, P) => (y(),
        M(Md, ue(u(a), {
            "aria-busy": i.value,
            items: F.value,
            fields: h.value,
            "table-class": B.value,
            "tbody-tr-class": C,
            "field-column-class": x,
            onHeadClicked: de,
            onRowDblClicked: P[0] || (P[0] = (N, D, J) => {
                o("row-dbl-clicked", N, D, J)
            }
            ),
            onRowClicked: L,
            onRowHovered: P[1] || (P[1] = (N, D, J) => {
                o("row-hovered", N, D, J)
            }
            ),
            onRowUnhovered: P[2] || (P[2] = (N, D, J) => {
                o("row-unhovered", N, D, J)
            }
            )
        }), Qn({
            "head()": E(N => {
                var D, J, q, G;
                return [ye(fe(u(oo)(N.field)) + " ", 1), m.value && N.field.sortable && u(a).noSortableIcon === !1 ? (y(),
                O(Be, {
                    key: 0
                }, [((J = (D = n.value) == null ? void 0 : D.find(z => z.key === N.field.key)) == null ? void 0 : J.order) === "asc" ? A(k.$slots, k.$slots[`sortAsc(${String(N.field.key)})`] ? `sortAsc(${String(N.field.key)})` : "sortAsc()", Ie(ue({
                    key: 0
                }, {
                    ...N
                })), () => [Ig]) : ((G = (q = n.value) == null ? void 0 : q.find(z => z.key === N.field.key)) == null ? void 0 : G.order) === "desc" ? A(k.$slots, k.$slots[`sortDesc(${String(N.field.key)})`] ? `sortDesc(${String(N.field.key)})` : "sortDesc()", Ie(ue({
                    key: 1
                }, {
                    ...N
                })), () => [Ng]) : A(k.$slots, k.$slots[`sortDefault(${String(N.field.key)})`] ? `sortDefault(${String(N.field.key)})` : "sortDefault()", Ie(ue({
                    key: 2
                }, {
                    ...N
                })), () => [(y(),
                O("svg", Lg, Mg))])], 64)) : me("", !0)]
            }
            ),
            "custom-body": E(N => [i.value ? (y(),
            M(It, {
                key: 0,
                class: te(["b-table-busy-slot", $.value])
            }, {
                default: E( () => [pe(Dl, {
                    colspan: N.fields.length
                }, {
                    default: E( () => [A(k.$slots, "table-busy", {}, () => [pe(Ko, {
                        show: ""
                    }, {
                        overlay: E( () => [ne("div", zg, [pe(Uo), ne("strong", null, fe(u(a).busyLoadingText), 1)])]),
                        _: 1
                    })])]),
                    _: 2
                }, 1032, ["colspan"])]),
                _: 2
            }, 1032, ["class"])) : me("", !0)]),
            _: 2
        }, [Ge(k.$slots, (N, D) => ({
            name: D,
            fn: E(J => [A(k.$slots, D, Ie(je(J)))])
        }))]), 1040, ["aria-busy", "items", "fields", "table-class"]))
    }
})
  , Dg = Q({
    inheritAttrs: !1,
    __name: "BTab",
    props: Ae({
        active: {
            type: Boolean
        },
        buttonId: {
            default: void 0
        },
        disabled: {
            type: Boolean,
            default: !1
        },
        id: {
            default: void 0
        },
        lazy: {
            type: Boolean,
            default: void 0
        },
        lazyOnce: {
            type: Boolean,
            default: void 0
        },
        noBody: {
            type: Boolean,
            default: !1
        },
        tag: {
            default: "div"
        },
        title: {
            default: void 0
        },
        titleItemClass: {
            default: void 0
        },
        titleLinkAttrs: {
            default: void 0
        },
        titleLinkClass: {
            default: void 0
        }
    }, {
        active: {
            type: Boolean,
            default: !1
        },
        activeModifiers: {}
    }),
    emits: ["update:active"],
    setup(e) {
        const t = oe(e, "BTab")
          , l = mt()
          , a = Ne(e, "active")
          , o = qe(Gu, null)
          , n = Me( () => t.id, "tabpane")
          , i = Me( () => t.buttonId, "tab")
          , r = Y(!1)
          , s = Y(null)
          , {onClick: d, ...c} = Pa()
          , v = w( () => ({
            id: n.value,
            buttonId: i.value,
            disabled: t.disabled,
            title: t.title,
            titleComponent: l.title,
            titleItemClass: t.titleItemClass,
            titleLinkAttrs: t.titleLinkAttrs,
            titleLinkClass: t.titleLinkClass,
            onClick: d,
            el: s.value
        }));
        pt( () => {
            o && (o.registerTab(v),
            t.active && o.activateTab(n.value))
        }
        ),
        Jn( () => {
            o && o.unregisterTab(n.value)
        }
        );
        const f = V( () => (o == null ? void 0 : o.activeId.value) === n.value)
          , p = Y(f.value)
          , g = V( () => {
            var $;
            return !!(o != null && o.lazy.value || (($ = t.lazyOnce) != null ? $ : t.lazy))
        }
        )
          , b = V( () => t.lazyOnce !== void 0)
          , m = V( () => f.value && !t.disabled)
          , h = V( () => m.value || !g.value || g.value && b.value && r.value);
        ke(f, $ => {
            if ($) {
                a.value = !0,
                setTimeout( () => {
                    p.value = !0
                }
                , 0);
                return
            }
            p.value = !1,
            a.value = !1
        }
        ),
        ke( () => t.active, $ => {
            if (o) {
                if (!$) {
                    f.value && o.activateTab(void 0);
                    return
                }
                o.activateTab(n.value)
            }
        }
        );
        const B = w( () => [{
            active: f.value,
            show: p.value,
            "card-body": (o == null ? void 0 : o.card.value) && t.noBody === !1,
            fade: !(o != null && o.noFade.value)
        }, p.value ? o == null ? void 0 : o.activeTabClass : o == null ? void 0 : o.inactiveTabClass, o == null ? void 0 : o.tabClass]);
        return ke(h, $ => {
            $ && !r.value && (r.value = !0)
        }
        ),
        ($, x) => (y(),
        M(xe(u(t).tag), ue({
            id: u(n),
            ref_key: "el",
            ref: s,
            class: ["tab-pane", B.value],
            role: "tabpanel",
            "aria-labelledby": u(i)
        }, c), {
            default: E( () => [h.value ? A($.$slots, "default", {
                key: 0
            }) : me("", !0)]),
            _: 3
        }, 16, ["id", "class", "aria-labelledby"]))
    }
})
  , jg = ["aria-orientation"]
  , Gg = ["id", "aria-controls", "aria-selected", "onClick"]
  , Wg = Q({
    __name: "BTabs",
    props: Ae({
        activeId: {},
        activeNavItemClass: {
            default: void 0
        },
        activeTabClass: {
            default: void 0
        },
        align: {
            default: void 0
        },
        card: {
            type: Boolean,
            default: !1
        },
        contentClass: {
            default: void 0
        },
        end: {
            type: Boolean,
            default: !1
        },
        fill: {
            type: Boolean,
            default: !1
        },
        id: {
            default: void 0
        },
        inactiveNavItemClass: {
            default: void 0
        },
        inactiveTabClass: {
            default: void 0
        },
        justified: {
            type: Boolean,
            default: !1
        },
        lazy: {
            type: Boolean,
            default: !1
        },
        modelValue: {},
        navClass: {
            default: void 0
        },
        navItemClass: {
            default: void 0
        },
        navWrapperClass: {
            default: void 0
        },
        noFade: {
            type: Boolean,
            default: !1
        },
        noNavStyle: {
            type: Boolean,
            default: !1
        },
        pills: {
            type: Boolean,
            default: !1
        },
        small: {
            type: Boolean,
            default: !1
        },
        tag: {
            default: "div"
        },
        tabClass: {
            default: void 0
        },
        vertical: {
            type: Boolean,
            default: !1
        }
    }, {
        modelValue: {
            default: -1
        },
        modelModifiers: {},
        activeId: {
            default: void 0
        },
        activeIdModifiers: {}
    }),
    emits: Ae(["activate-tab", "click"], ["update:modelValue", "update:activeId"]),
    setup(e, {emit: t}) {
        const l = oe(e, "BTabs")
          , a = t
          , o = Ne(e, "modelValue")
          , n = Ne(e, "activeId")
          , i = _o()
          , r = Y([])
          , s = w( () => r.value.map(x => {
            const C = u(x)
              , T = C.id === n.value;
            return {
                ...C,
                active: T,
                navItemClasses: [{
                    active: T,
                    disabled: C.disabled
                }, T ? l.activeNavItemClass : l.inactiveNavItemClass, l.navItemClass, C.titleLinkClass]
            }
        }
        ))
          , d = V( () => !(s != null && s.value && s.value.length > 0))
          , c = w( () => ({
            "d-flex": l.vertical,
            "align-items-start": l.vertical
        }))
          , v = Ia( () => l.align)
          , f = w( () => ({
            "nav-pills": l.pills,
            "flex-column me-3": l.vertical,
            [v.value]: l.align !== void 0,
            "nav-fill": l.fill,
            "card-header-tabs": l.card,
            "nav-justified": l.justified,
            "nav-tabs": !l.noNavStyle && !l.pills,
            small: l.small
        }))
          , p = x => {
            var C;
            if (x !== void 0) {
                const T = (C = s.value[x]) == null ? void 0 : C.id;
                if (x > -1 && x < s.value.length && !s.value[x].disabled && (o.value < 0 || n.value !== T || o.value !== x)) {
                    const F = new gl("activate-tab",{
                        cancelable: !0
                    });
                    a("activate-tab", x, o.value, F),
                    F.defaultPrevented || (n.value !== T && (n.value = T),
                    o.value !== x && (o.value = x))
                }
            }
        }
          , g = (x, C) => {
            var T, F, j;
            p(C),
            C >= 0 && !s.value[C].disabled && (T = s.value[C]) != null && T.onClick && typeof s.value[C].onClick == "function" && ((j = (F = s.value[C]).onClick) == null || j.call(F, x))
        }
          , b = x => {
            var C, T;
            s.value.length <= 0 || (o.value = m(o.value + x, x),
            (T = document.getElementById((C = s.value[o.value]) == null ? void 0 : C.buttonId)) == null || T.focus())
        }
          , m = (x, C) => {
            let T = x
              , F = -1
              , j = -1;
            for (let L = 0; L < s.value.length; L++)
                s.value[L].disabled || (F === -1 && (F = L),
                j = L);
            for (; T >= F && T <= j && s.value[T].disabled; )
                T += C;
            return T < F && (T = F),
            T > j && (T = j),
            T
        }
        ;
        ke(o, (x, C) => {
            if (x === C || s.value.length <= 0)
                return;
            const T = m(x, x > C ? 1 : -1);
            it( () => {
                p(T)
            }
            )
        }
        ),
        ke(n, (x, C) => {
            const T = s.value.findIndex(F => F.id === x);
            if (x !== C && !(s.value.length <= 0)) {
                if (T === -1) {
                    p(m(0, 1));
                    return
                }
                p(T)
            }
        }
        );
        const h = x => {
            r.value.find(C => C.value.id === x.value.id) ? r.value[r.value.findIndex(C => C.value.id === x.value.id)] = x : r.value.push(x),
            r.value.sort( (C, T) => {
                if (!Node || !C.value.el || !T.value.el)
                    return 0;
                const F = C.value.el.compareDocumentPosition(T.value.el);
                return F & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : F & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
            }
            )
        }
          , B = x => {
            r.value = r.value.filter(C => C.value.id !== x)
        }
        ;
        ke(r, () => {
            $()
        }
        , {
            deep: !0
        });
        const $ = () => {
            var x;
            if (s.value.length === 0) {
                o.value = -1,
                n.value = void 0;
                return
            }
            if (o.value >= 0 && !n.value && (n.value = (x = s.value[o.value]) == null ? void 0 : x.id),
            s.value.find(C => C.id === n.value)) {
                p(s.value.findIndex(C => C.id === n.value));
                return
            }
            p(s.value.map(C => !C.disabled).indexOf(!0))
        }
        ;
        return ht(Gu, {
            lazy: V( () => l.lazy),
            card: V( () => l.card),
            noFade: V( () => l.noFade),
            activeTabClass: V( () => l.activeTabClass),
            inactiveTabClass: V( () => l.inactiveTabClass),
            tabClass: V( () => l.tabClass),
            registerTab: h,
            unregisterTab: B,
            activeId: n,
            activateTab: x => {
                const C = s.value.findIndex(T => T.id === x);
                if (x === void 0 || C === -1) {
                    p(m(0, 1));
                    return
                }
                p(C)
            }
        }),
        (x, C) => (y(),
        M(xe(u(l).tag), {
            id: u(l).id,
            class: te(["tabs", c.value])
        }, {
            default: E( () => [pe(u(i).define, null, {
                default: E( () => [ne("div", {
                    class: te(["tab-content", u(l).contentClass])
                }, [A(x.$slots, "default"), d.value ? (y(),
                O("div", {
                    key: "bv-empty-tab",
                    class: te(["tab-pane active", {
                        "card-body": u(l).card
                    }])
                }, [A(x.$slots, "empty")], 2)) : me("", !0)], 2)]),
                _: 3
            }), u(l).end ? (y(),
            M(u(i).reuse, {
                key: 0
            })) : me("", !0), ne("div", {
                class: te([u(l).navWrapperClass, {
                    "card-header": u(l).card,
                    "ms-auto": x.vertical && u(l).end
                }])
            }, [ne("ul", {
                class: te(["nav", [f.value, u(l).navClass]]),
                role: "tablist",
                "aria-orientation": u(l).vertical ? "vertical" : "horizontal"
            }, [A(x.$slots, "tabs-start"), (y(!0),
            O(Be, null, Ge(s.value, (T, F) => (y(),
            O("li", {
                key: T.id,
                class: te(["nav-item", T.titleItemClass]),
                role: "presentation"
            }, [ne("button", ue({
                id: T.buttonId,
                class: ["nav-link", T.navItemClasses],
                role: "tab",
                "aria-controls": T.id,
                "aria-selected": T.active,
                ref_for: !0
            }, T.titleLinkAttrs, {
                onKeydown: [C[0] || (C[0] = Ua(Vl(j => b(-1), ["stop", "prevent"]), ["left"])), C[1] || (C[1] = Ua(Vl(j => b(1), ["stop", "prevent"]), ["right"])), C[2] || (C[2] = Ua(Vl(j => b(-999), ["stop", "prevent"]), ["page-up"])), C[3] || (C[3] = Ua(Vl(j => b(999), ["stop", "prevent"]), ["page-down"]))],
                onClick: Vl(j => g(j, F), ["stop", "prevent"])
            }), [T.titleComponent ? (y(),
            M(xe(T.titleComponent), {
                key: 0
            })) : (y(),
            O(Be, {
                key: 1
            }, [ye(fe(T.title), 1)], 64))], 16, Gg)], 2))), 128)), A(x.$slots, "tabs-end")], 10, jg)], 2), u(l).end ? me("", !0) : (y(),
            M(u(i).reuse, {
                key: 1
            }))]),
            _: 3
        }, 8, ["id", "class"]))
    }
})
  , qg = {
    id: "__BVID__toaster-container"
}
  , Ug = Q({
    __name: "BToastOrchestrator",
    props: {
        appendToast: {
            type: Boolean,
            default: !1
        },
        teleportDisabled: {
            default: !1
        },
        teleportTo: {
            default: "body"
        }
    },
    setup(e, {expose: t}) {
        const l = oe(e, "BToastOrchestrator")
          , {remove: a, toasts: o, show: n, _setIsAppend: i, leave: r} = Sm();
        ke( () => l.appendToast, d => {
            i == null || i(d)
        }
        , {
            immediate: !0
        });
        const s = d => qo(d, ["_modelValue", "_self", "pos"]);
        return t({
            remove: a,
            show: n,
            toasts: o
        }),
        (d, c) => (y(),
        M(Fl, {
            to: u(l).teleportTo,
            disabled: u(l).teleportDisabled
        }, [ne("div", qg, [(y(!0),
        O(Be, null, Ge(u(pm), (v, f) => (y(),
        O("div", {
            key: f,
            class: te([v, "toast-container position-fixed p-3"])
        }, [pe(fu, {
            name: "b-list"
        }, {
            default: E( () => {
                var p;
                return [(y(!0),
                O(Be, null, Ge((p = u(o)) == null ? void 0 : p.filter(g => g.value.props.pos === f), g => (y(),
                M(xe(g.value.component), ue({
                    key: g.value.props._self,
                    ref_for: !0
                }, s(g.value.props), {
                    "model-value": g.value.props._modelValue,
                    "trans-props": {
                        ...g.value.props.transProps,
                        appear: !0
                    },
                    "onUpdate:modelValue": b => {
                        var m;
                        return (m = u(r)) == null ? void 0 : m(g.value.props._self)
                    }
                    ,
                    onHide: b => {
                        var m;
                        return (m = u(a)) == null ? void 0 : m(g.value.props._self)
                    }
                }), null, 16, ["model-value", "trans-props", "onUpdate:modelValue", "onHide"]))), 128))]
            }
            ),
            _: 2
        }, 1024)], 2))), 128))])], 8, ["to", "disabled"]))
    }
})
  , Kg = Q({
    __name: "BTooltip",
    props: Ae({
        interactive: {
            type: Boolean,
            default: void 0
        },
        boundary: {},
        boundaryPadding: {},
        click: {
            type: Boolean,
            default: void 0
        },
        content: {
            default: void 0
        },
        customClass: {
            default: void 0
        },
        delay: {
            default: void 0
        },
        floatingMiddleware: {
            default: void 0
        },
        html: {
            type: Boolean,
            default: void 0
        },
        id: {
            default: void 0
        },
        inline: {
            type: Boolean,
            default: void 0
        },
        manual: {
            type: Boolean,
            default: void 0
        },
        modelValue: {
            type: Boolean
        },
        noAutoClose: {
            type: Boolean,
            default: void 0
        },
        noFade: {
            type: Boolean,
            default: void 0
        },
        noFlip: {
            type: Boolean,
            default: void 0
        },
        noHide: {
            type: Boolean,
            default: void 0
        },
        noShift: {
            type: Boolean,
            default: void 0
        },
        noSize: {
            type: Boolean
        },
        noninteractive: {
            type: Boolean,
            default: void 0
        },
        offset: {
            default: void 0
        },
        placement: {
            default: void 0
        },
        persistent: {
            type: Boolean
        },
        realtime: {
            type: Boolean,
            default: void 0
        },
        reference: {
            default: void 0
        },
        strategy: {
            default: void 0
        },
        target: {
            default: void 0
        },
        title: {
            default: void 0
        },
        variant: {
            default: void 0
        },
        teleportDisabled: {
            default: void 0
        },
        teleportTo: {
            default: void 0
        }
    }, {
        modelValue: {
            type: Boolean,
            default: void 0
        },
        modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(e, {expose: t}) {
        var l, a, o;
        const n = oe(e, "BTooltip")
          , i = Ne(e, "modelValue")
          , r = w( () => {
            const {interactive: d, noninteractive: c, ...v} = n;
            return {
                noninteractive: c !== void 0 ? c : !d,
                ...v
            }
        }
        )
          , s = Y(null);
        return t({
            hide: (l = s.value) == null ? void 0 : l.hide,
            show: (a = s.value) == null ? void 0 : a.show,
            toggle: (o = s.value) == null ? void 0 : o.toggle
        }),
        (d, c) => (y(),
        M(pi, ue({
            ref_key: "popover",
            ref: s
        }, r.value, {
            modelValue: i.value,
            "onUpdate:modelValue": c[0] || (c[0] = v => i.value = v),
            tooltip: ""
        }), Qn({
            _: 2
        }, [Ge(d.$slots, (v, f) => ({
            name: f,
            fn: E(p => [A(d.$slots, f, Ie(je(p)))])
        }))]), 1040, ["modelValue"]))
    }
})
  , cn = Object.freeze(Object.defineProperty({
    __proto__: null,
    BAccordion: Wm,
    BAccordionItem: Um,
    BAlert: Ym,
    BAvatar: Qm,
    BAvatarGroup: eh,
    BBadge: wd,
    BBreadcrumb: ah,
    BBreadcrumbItem: xd,
    BButton: Zt,
    BButtonGroup: oh,
    BButtonToolbar: ih,
    BCard: xi,
    BCardBody: wi,
    BCardFooter: Td,
    BCardGroup: sh,
    BCardHeader: _i,
    BCardImg: Bi,
    BCardSubtitle: Sd,
    BCardText: uh,
    BCardTitle: kd,
    BCarousel: gh,
    BCarouselSlide: wh,
    BCloseButton: aa,
    BCol: ua,
    BCollapse: _d,
    BContainer: xh,
    BDropdown: Ci,
    BDropdownDivider: Th,
    BDropdownForm: $h,
    BDropdownGroup: Oh,
    BDropdownHeader: Fh,
    BDropdownItem: Vd,
    BDropdownItemButton: Lh,
    BDropdownText: Mh,
    BForm: $d,
    BFormCheckbox: Ad,
    BFormCheckboxGroup: Kh,
    BFormFile: Zh,
    BFormFloatingLabel: jh,
    BFormGroup: n0,
    BFormInput: zr,
    BFormInvalidFeedback: An,
    BFormRadio: Od,
    BFormRadioGroup: c0,
    BFormRow: io,
    BFormSelect: g0,
    BFormSelectOption: ki,
    BFormSelectOptionGroup: Ed,
    BFormSpinbutton: _0,
    BFormTag: Fd,
    BFormTags: N0,
    BFormText: Pn,
    BFormTextarea: H0,
    BFormValidFeedback: On,
    BImg: bi,
    BInput: zr,
    BInputGroup: W0,
    BInputGroupText: q0,
    BLink: qt,
    BListGroup: U0,
    BListGroupItem: K0,
    BModal: $n,
    BModalOrchestrator: X0,
    BNav: Z0,
    BNavForm: Q0,
    BNavItem: tg,
    BNavItemDropdown: ag,
    BNavText: ng,
    BNavbar: ig,
    BNavbarBrand: rg,
    BNavbarNav: sg,
    BNavbarToggle: gg,
    BOffcanvas: Bg,
    BOverlay: Ko,
    BPagination: wg,
    BPlaceholder: St,
    BPlaceholderButton: Nd,
    BPlaceholderCard: xg,
    BPlaceholderTable: kg,
    BPlaceholderWrapper: Sg,
    BPopover: pi,
    BProgress: yd,
    BProgressBar: gd,
    BRow: Tg,
    BSpinner: Uo,
    BTab: Dg,
    BTable: Rg,
    BTableLite: Md,
    BTableSimple: Si,
    BTabs: Wg,
    BTbody: Ld,
    BTd: Dl,
    BTfoot: Fn,
    BTh: In,
    BThead: Hd,
    BToast: bd,
    BToastOrchestrator: Ug,
    BTooltip: Kg,
    BTr: It,
    BTransition: La
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Yg = e => e.toLowerCase().startsWith("v") ? e.slice(1) : e
  , Xg = ({components: e=!1, directives: t=!1, plugins: l={}, aliases: a={}}={}) => ({
    install(o) {
        var d, c, v, f, p, g;
        const n = typeof e == "boolean" ? {
            all: e
        } : e
          , i = Object.keys(cn);
        Fr(n, i).forEach(b => {
            const m = cn[b];
            o.component(b, m)
        }
        );
        const r = typeof t == "boolean" ? {
            all: t
        } : t
          , s = Object.keys(Kr);
        Fr(r, s).forEach(b => {
            const m = Yg(b)
              , h = Kr[b];
            o.directive(m, h)
        }
        ),
        Object.entries(a).forEach( ([b,m]) => {
            const h = typeof m == "string" ? cn[m] : m;
            o.component(b, h)
        }
        ),
        ((d = l == null ? void 0 : l.breadcrumb) == null || d) && o.use(Fm),
        (((c = l == null ? void 0 : l.id) != null ? c : !0) || typeof l.id == "object") && o.use(Im, l),
        ((v = l == null ? void 0 : l.modalController) == null || v) && o.use(zm),
        ((f = l == null ? void 0 : l.modalManager) == null || f) && o.use(Rm),
        (((p = l == null ? void 0 : l.rtl) != null ? p : !0) || typeof l.rtl == "object") && o.use(Dm, l),
        ((g = l == null ? void 0 : l.toast) == null || g) && o.use(Em),
        o.use(jm, l)
    }
});
function Zg(e) {
    this.selectedSaveKey = e
}
function Jg() {
    if (!this.selectedSaveKey) {
        alert("\u8BF7\u9009\u62E9\u8981\u5BFC\u51FA\u7684\u5B58\u6863\u3002");
        return
    }
    const e = this.selectedSaveKey
      , t = this.localStorageItems[e];
    let l = "";
    if (e === "RPG Global")
        l = "global.rpgsave";
    else if (e.startsWith("RPG File"))
        l = `file${e.replace("RPG File", "").trim()}.rpgsave`;
    else {
        alert("\u4E0D\u652F\u6301\u7684\u5B58\u6863\u683C\u5F0F\u3002");
        return
    }
    const a = new Blob([t],{
        type: "text/plain"
    })
      , o = document.createElement("a");
    o.href = URL.createObjectURL(a),
    o.download = l,
    document.body.appendChild(o),
    o.click(),
    document.body.removeChild(o)
}
function Qg(e) {
    const t = e.target.files[0];
    if (t) {
        const l = new FileReader;
        l.onload = a => {
            const o = t.name;
            let n = "";
            if (o === "global.rpgsave")
                n = "RPG Global";
            else if (o.startsWith("file") && o.endsWith(".rpgsave"))
                n = `RPG File${o.replace("file", "").replace(".rpgsave", "").trim()}`;
            else {
                alert("\u4E0D\u652F\u6301\u7684\u6587\u4EF6\u683C\u5F0F\u3002");
                return
            }
            const i = a.target.result;
            localStorage.setItem(n, i),
            this.loadLocalStorageItems(),
            alert("\u5B58\u6863\u5BFC\u5165\u6210\u529F\u3002")
        }
        ,
        l.readAsText(t)
    }
}
function ey() {
    this.$refs.importInput.click()
}
function ty() {
    const e = Object.keys(localStorage)
      , t = {};
    e.forEach(l => {
        t[l] = localStorage.getItem(l)
    }
    ),
    this.localStorageItems = t
}
var ly = (e, t) => {
    const l = e.__vccOpts || e;
    for (const [a,o] of t)
        l[a] = o;
    return l
}
;
const ay = {
    name: "App",
    components: {
        BDropdown: Ci,
        BDropdownItem: Vd,
        BCard: xi,
        BCardHeader: _i,
        BCardBody: wi,
        BButton: Zt
    },
    data() {
        return {
            selectedSaveKey: null,
            localStorageItems: {}
        }
    },
    computed: {
        filteredLocalStorage() {
            const e = {};
            for (const [t,l] of Object.entries(this.localStorageItems))
                (t.startsWith("RPG File") || t === "RPG Global") && (e[t] = l);
            return e
        }
    },
    methods: {
        selectSave: Zg,
        exportSelectedSave: Jg,
        importLocalStorage: Qg,
        triggerImport: ey,
        loadLocalStorageItems: ty
    },
    async mounted() {
        this.loadLocalStorageItems();
        const e = () => window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
          , t = l => {
            document.documentElement.setAttribute("data-bs-theme", l)
        }
        ;
        t(e()),
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
            t(e())
        }
        )
    }
}
  , oy = {
    class: "app-container"
}
  , ny = Vf('<div class="background-shapes"><div class="shape shape-1"></div><div class="shape shape-2"></div><div class="shape shape-3"></div></div><header class="app-header"><h1 class="title-text">RMSEOI</h1></header>', 2)
  , iy = {
    class: "container"
}
  , ry = {
    class: "row justify-content-center"
}
  , sy = {
    class: "col-md-8 col-lg-6"
}
  , uy = ne("div", {
    class: "card-header-content"
}, [ne("i", {
    class: "bi bi-archive header-icon"
}), ne("h4", null, "\u5B58\u6863\u5BFC\u51FA")], -1)
  , dy = ne("i", {
    class: "bi bi-archive-fill me-2"
}, null, -1)
  , cy = ne("i", {
    class: "bi bi-file-earmark-text me-2"
}, null, -1)
  , fy = ne("i", {
    class: "bi bi-download me-2"
}, null, -1)
  , vy = ne("div", {
    class: "card-header-content"
}, [ne("i", {
    class: "bi bi-upload header-icon"
}), ne("h4", null, "\u5B58\u6863\u5BFC\u5165")], -1)
  , py = ne("i", {
    class: "bi bi-upload me-2"
}, null, -1)
  , my = ne("div", {
    class: "note-content"
}, [ne("i", {
    class: "bi bi-info-circle-fill info-icon"
}), ne("p", {
    class: "note-text mb-0"
}, [ye("\u5BFC\u51FA\u5B58\u6863\u65F6\u8BF7\u8BB0\u5F97\u5BFC\u51FA "), ne("strong", null, "RPG Global"), ye(" \u54E6")])], -1);
function hy(e, t, l, a, o, n) {
    const i = Ml("b-card-header")
      , r = Ml("b-dropdown-item")
      , s = Ml("b-dropdown")
      , d = Ml("b-button")
      , c = Ml("b-card-body")
      , v = Ml("b-card");
    return y(),
    O("div", oy, [ny, ne("main", iy, [ne("div", ry, [ne("div", sy, [pe(v, {
        "no-body": "",
        class: "feature-card mb-4"
    }, {
        default: E( () => [pe(i, {
            class: "bg-transparent border-0 pt-4"
        }, {
            default: E( () => [uy]),
            _: 1
        }), pe(c, {
            class: "d-flex flex-column align-items-center px-4 pb-4"
        }, {
            default: E( () => [pe(s, {
                id: "dropdown-export",
                block: "",
                variant: "primary",
                class: "mb-3 w-100 custom-dropdown",
                disabled: !Object.keys(n.filteredLocalStorage).length
            }, {
                "button-content": E( () => [dy, ye(" " + fe(o.selectedSaveKey || "\u9009\u62E9\u5B58\u6863\u5BFC\u51FA"), 1)]),
                default: E( () => [Object.keys(n.filteredLocalStorage).length ? (y(!0),
                O(Be, {
                    key: 0
                }, Ge(n.filteredLocalStorage, (f, p) => (y(),
                M(r, {
                    key: p,
                    onClick: g => n.selectSave(p)
                }, {
                    default: E( () => [cy, ye(" " + fe(p), 1)]),
                    _: 2
                }, 1032, ["onClick"]))), 128)) : (y(),
                M(r, {
                    key: 1,
                    disabled: ""
                }, {
                    default: E( () => [ye("\u6CA1\u6709\u53EF\u4EE5\u5BFC\u51FA\u7684\u5B58\u6863")]),
                    _: 1
                }))]),
                _: 1
            }, 8, ["disabled"]), pe(d, {
                block: "",
                variant: "primary",
                disabled: !o.selectedSaveKey,
                onClick: n.exportSelectedSave,
                class: "w-100 action-button"
            }, {
                default: E( () => [fy, ye(" \u5BFC\u51FA\u9009\u4E2D\u7684\u5B58\u6863 ")]),
                _: 1
            }, 8, ["disabled", "onClick"])]),
            _: 1
        })]),
        _: 1
    }), pe(v, {
        "no-body": "",
        class: "feature-card mb-4"
    }, {
        default: E( () => [pe(i, {
            class: "bg-transparent border-0 pt-4"
        }, {
            default: E( () => [vy]),
            _: 1
        }), pe(c, {
            class: "d-flex flex-column align-items-center px-4 pb-4"
        }, {
            default: E( () => [pe(d, {
                block: "",
                variant: "success",
                onClick: n.triggerImport,
                class: "w-100 action-button"
            }, {
                default: E( () => [py, ye(" \u5BFC\u5165\u5B58\u6863 ")]),
                _: 1
            }, 8, ["onClick"]), ne("input", {
                type: "file",
                ref: "importInput",
                onChange: t[0] || (t[0] = (...f) => n.importLocalStorage && n.importLocalStorage(...f)),
                style: {
                    display: "none"
                }
            }, null, 544)]),
            _: 1
        })]),
        _: 1
    }), pe(v, {
        "no-body": "",
        class: "note-card"
    }, {
        default: E( () => [pe(c, {
            class: "text-center p-4"
        }, {
            default: E( () => [my]),
            _: 1
        })]),
        _: 1
    })])])])])
}
var gy = ly(ay, [["render", hy]]);
const zd = gv(gy);
zd.use(Xg());
zd.mount("#app");

let _l = class {
        constructor() {
            this.events = []
        }
        on(t, e, i, s=!1) {
            this.events[t] || (this.events[t] = []);
            let r = !1;
            this.events[t].forEach(n => {
                    if (n.cb === e && n.context === i) {
                        r = !0;
                        return
                    }
                }
            ),
            !r && this.events[t].push({
                cb: e,
                context: i,
                once: s
            })
        }
        once(t, e, i) {
            this.on(t, e, i, !0)
        }
        emit(t) {
            const e = this
                , i = [].slice.call(arguments, 1);
            this.events[t] && this.events[t].forEach( (s, r) => {
                    s.cb.apply(s.context, i),
                    s.once && delete e.events[t][r]
                }
            )
        }
        off(t, e, i) {
            const s = this;
            this.events[t] && this.events[t].forEach( (r, n) => {
                    r.cb === e && r.context === i && delete s.events[t][n]
                }
            )
        }
    }
;
const $ = new _l;
function oi(u) {
    if (u === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return u
}
function Ta(u, t) {
    u.prototype = Object.create(t.prototype),
        u.prototype.constructor = u,
        u.__proto__ = t
}
/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Se = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
        lineHeight: ""
    }
}, Es = {
    duration: .5,
    overwrite: !1,
    delay: 0
}, ao, Xt, ct, Ae = 1e8, ut = 1 / Ae, Ln = Math.PI * 2, Dl = Ln / 4, ml = 0, Fa = Math.sqrt, yl = Math.cos, vl = Math.sin, zt = function(t) {
    return typeof t == "string"
}, Dt = function(t) {
    return typeof t == "function"
}, fi = function(t) {
    return typeof t == "number"
}, uo = function(t) {
    return typeof t > "u"
}, ii = function(t) {
    return typeof t == "object"
}, he = function(t) {
    return t !== !1
}, lo = function() {
    return typeof window < "u"
}, xr = function(t) {
    return Dt(t) || zt(t)
}, Pa = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {}
    , Gt = Array.isArray, On = /(?:-?\.?\d|\.)+/gi, ka = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, _s = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, pn = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Ma = /[+-]=-?[.\d]+/, Aa = /[^,'"\[\]\s]+/gi, xl = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, pt, Ge, Rn, ho, Ee = {}, Xr = {}, La, Oa = function(t) {
    return (Xr = ts(t, Ee)) && oe
}, co = function(t, e) {
    return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
}, ar = function(t, e) {
    return !e && console.warn(t)
}, Ra = function(t, e) {
    return t && (Ee[t] = e) && Xr && (Xr[t] = e) || Ee
}, ur = function() {
    return 0
}, wl = {
    suppressEvents: !0,
    isStart: !0,
    kill: !1
}, zr = {
    suppressEvents: !0,
    kill: !1
}, bl = {
    suppressEvents: !0
}, fo = {}, Ti = [], zn = {}, za, ye = {}, gn = {}, zo = 30, Br = [], po = "", go = function(t) {
    var e = t[0], i, s;
    if (ii(e) || Dt(e) || (t = [t]),
        !(i = (e._gsap || {}).harness)) {
        for (s = Br.length; s-- && !Br[s].targetTest(e); )
            ;
        i = Br[s]
    }
    for (s = t.length; s--; )
        t[s] && (t[s]._gsap || (t[s]._gsap = new ou(t[s],i))) || t.splice(s, 1);
    return t
}, Xi = function(t) {
    return t._gsap || go(Le(t))[0]._gsap
}, Ba = function(t, e, i) {
    return (i = t[e]) && Dt(i) ? t[e]() : uo(i) && t.getAttribute && t.getAttribute(e) || i
}, ce = function(t, e) {
    return (t = t.split(",")).forEach(e) || t
}, xt = function(t) {
    return Math.round(t * 1e5) / 1e5 || 0
}, Rt = function(t) {
    return Math.round(t * 1e7) / 1e7 || 0
}, vs = function(t, e) {
    var i = e.charAt(0)
        , s = parseFloat(e.substr(2));
    return t = parseFloat(t),
        i === "+" ? t + s : i === "-" ? t - s : i === "*" ? t * s : t / s
}, Cl = function(t, e) {
    for (var i = e.length, s = 0; t.indexOf(e[s]) < 0 && ++s < i; )
        ;
    return s < i
}, Gr = function() {
    var t = Ti.length, e = Ti.slice(0), i, s;
    for (zn = {},
             Ti.length = 0,
             i = 0; i < t; i++)
        s = e[i],
        s && s._lazy && (s.render(s._lazy[0], s._lazy[1], !0)._lazy = 0)
}, Ia = function(t, e, i, s) {
    Ti.length && !Xt && Gr(),
        t.render(e, i, Xt && e < 0 && (t._initted || t._startAt)),
    Ti.length && !Xt && Gr()
}, Na = function(t) {
    var e = parseFloat(t);
    return (e || e === 0) && (t + "").match(Aa).length < 2 ? e : zt(t) ? t.trim() : t
}, Wa = function(t) {
    return t
}, Re = function(t, e) {
    for (var i in e)
        i in t || (t[i] = e[i]);
    return t
}, Sl = function(t) {
    return function(e, i) {
        for (var s in i)
            s in e || s === "duration" && t || s === "ease" || (e[s] = i[s])
    }
}, ts = function(t, e) {
    for (var i in e)
        t[i] = e[i];
    return t
}, Bo = function u(t, e) {
    for (var i in e)
        i !== "__proto__" && i !== "constructor" && i !== "prototype" && (t[i] = ii(e[i]) ? u(t[i] || (t[i] = {}), e[i]) : e[i]);
    return t
}, Ur = function(t, e) {
    var i = {}, s;
    for (s in t)
        s in e || (i[s] = t[s]);
    return i
}, Gs = function(t) {
    var e = t.parent || pt
        , i = t.keyframes ? Sl(Gt(t.keyframes)) : Re;
    if (he(t.inherit))
        for (; e; )
            i(t, e.vars.defaults),
                e = e.parent || e._dp;
    return t
}, El = function(t, e) {
    for (var i = t.length, s = i === e.length; s && i-- && t[i] === e[i]; )
        ;
    return i < 0
}, $a = function(t, e, i, s, r) {
    var n = t[s], o;
    if (r)
        for (o = e[r]; n && n[r] > o; )
            n = n._prev;
    return n ? (e._next = n._next,
        n._next = e) : (e._next = t[i],
        t[i] = e),
        e._next ? e._next._prev = e : t[s] = e,
        e._prev = n,
        e.parent = e._dp = t,
        e
}, an = function(t, e, i, s) {
    i === void 0 && (i = "_first"),
    s === void 0 && (s = "_last");
    var r = e._prev
        , n = e._next;
    r ? r._next = n : t[i] === e && (t[i] = n),
        n ? n._prev = r : t[s] === e && (t[s] = r),
        e._next = e._prev = e.parent = null
}, ki = function(t, e) {
    t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t),
        t._act = 0
}, Gi = function(t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0))
        for (var i = t; i; )
            i._dirty = 1,
                i = i.parent;
    return t
}, Tl = function(t) {
    for (var e = t.parent; e && e.parent; )
        e._dirty = 1,
            e.totalDuration(),
            e = e.parent;
    return t
}, Bn = function(t, e, i, s) {
    return t._startAt && (Xt ? t._startAt.revert(zr) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, s))
}, Fl = function u(t) {
    return !t || t._ts && u(t.parent)
}, Io = function(t) {
    return t._repeat ? Ts(t._tTime, t = t.duration() + t._rDelay) * t : 0
}, Ts = function(t, e) {
    var i = Math.floor(t /= e);
    return t && i === t ? i - 1 : i
}, Kr = function(t, e) {
    return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
}, un = function(t) {
    return t._end = Rt(t._start + (t._tDur / Math.abs(t._ts || t._rts || ut) || 0))
}, ln = function(t, e) {
    var i = t._dp;
    return i && i.smoothChildTiming && t._ts && (t._start = Rt(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)),
        un(t),
    i._dirty || Gi(i, t)),
        t
}, Ya = function(t, e) {
    var i;
    if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (i = Kr(t.rawTime(), e),
    (!e._dur || Dr(0, e.totalDuration(), i) - e._tTime > ut) && e.render(i, !0)),
    Gi(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
        if (t._dur < t.duration())
            for (i = t; i._dp; )
                i.rawTime() >= 0 && i.totalTime(i._tTime),
                    i = i._dp;
        t._zTime = -ut
    }
}, Ke = function(t, e, i, s) {
    return e.parent && ki(e),
        e._start = Rt((fi(i) ? i : i || t !== pt ? Pe(t, i, e) : t._time) + e._delay),
        e._end = Rt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
        $a(t, e, "_first", "_last", t._sort ? "_start" : 0),
    In(e) || (t._recent = e),
    s || Ya(t, e),
    t._ts < 0 && ln(t, t._tTime),
        t
}, Ha = function(t, e) {
    return (Ee.ScrollTrigger || co("scrollTrigger", e)) && Ee.ScrollTrigger.create(e, t)
}, qa = function(t, e, i, s, r) {
    if (Do(t, e, r),
        !t._initted)
        return 1;
    if (!i && t._pt && !Xt && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && za !== ve.frame)
        return Ti.push(t),
            t._lazy = [r, s],
            1
}, Pl = function u(t) {
    var e = t.parent;
    return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || u(e))
}, In = function(t) {
    var e = t.data;
    return e === "isFromStart" || e === "isStart"
}, kl = function(t, e, i, s) {
    var r = t.ratio, n = e < 0 || !e && (!t._start && Pl(t) && !(!t._initted && In(t)) || (t._ts < 0 || t._dp._ts < 0) && !In(t)) ? 0 : 1, o = t._rDelay, a = 0, l, h, c;
    if (o && t._repeat && (a = Dr(0, t._tDur, e),
        h = Ts(a, o),
    t._yoyo && h & 1 && (n = 1 - n),
    h !== Ts(t._tTime, o) && (r = 1 - n,
    t.vars.repeatRefresh && t._initted && t.invalidate())),
    n !== r || Xt || s || t._zTime === ut || !e && t._zTime) {
        if (!t._initted && qa(t, e, s, i, a))
            return;
        for (c = t._zTime,
                 t._zTime = e || (i ? ut : 0),
             i || (i = e && !c),
                 t.ratio = n,
             t._from && (n = 1 - n),
                 t._time = 0,
                 t._tTime = a,
                 l = t._pt; l; )
            l.r(n, l.d),
                l = l._next;
        e < 0 && Bn(t, e, i, !0),
        t._onUpdate && !i && Ce(t, "onUpdate"),
        a && t._repeat && !i && t.parent && Ce(t, "onRepeat"),
        (e >= t._tDur || e < 0) && t.ratio === n && (n && ki(t, 1),
        !i && !Xt && (Ce(t, n ? "onComplete" : "onReverseComplete", !0),
        t._prom && t._prom()))
    } else
        t._zTime || (t._zTime = e)
}, Ml = function(t, e, i) {
    var s;
    if (i > e)
        for (s = t._first; s && s._start <= i; ) {
            if (s.data === "isPause" && s._start > e)
                return s;
            s = s._next
        }
    else
        for (s = t._last; s && s._start >= i; ) {
            if (s.data === "isPause" && s._start < e)
                return s;
            s = s._prev
        }
}, Fs = function(t, e, i, s) {
    var r = t._repeat
        , n = Rt(e) || 0
        , o = t._tTime / t._tDur;
    return o && !s && (t._time *= n / t._dur),
        t._dur = n,
        t._tDur = r ? r < 0 ? 1e10 : Rt(n * (r + 1) + t._rDelay * r) : n,
    o > 0 && !s && ln(t, t._tTime = t._tDur * o),
    t.parent && un(t),
    i || Gi(t.parent, t),
        t
}, No = function(t) {
    return t instanceof ie ? Gi(t) : Fs(t, t._dur)
}, Al = {
    _start: 0,
    endTime: ur,
    totalDuration: ur
}, Pe = function u(t, e, i) {
    var s = t.labels, r = t._recent || Al, n = t.duration() >= Ae ? r.endTime(!1) : t._dur, o, a, l;
    return zt(e) && (isNaN(e) || e in s) ? (a = e.charAt(0),
        l = e.substr(-1) === "%",
        o = e.indexOf("="),
        a === "<" || a === ">" ? (o >= 0 && (e = e.replace(/=/, "")),
        (a === "<" ? r._start : r.endTime(r._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (l ? (o < 0 ? r : i).totalDuration() / 100 : 1)) : o < 0 ? (e in s || (s[e] = n),
            s[e]) : (a = parseFloat(e.charAt(o - 1) + e.substr(o + 1)),
        l && i && (a = a / 100 * (Gt(i) ? i[0] : i).totalDuration()),
            o > 1 ? u(t, e.substr(0, o - 1), i) + a : n + a)) : e == null ? n : +e
}, Us = function(t, e, i) {
    var s = fi(e[1]), r = (s ? 2 : 1) + (t < 2 ? 0 : 1), n = e[r], o, a;
    if (s && (n.duration = e[1]),
        n.parent = i,
        t) {
        for (o = n,
                 a = i; a && !("immediateRender"in o); )
            o = a.vars.defaults || {},
                a = he(a.vars.inherit) && a.parent;
        n.immediateRender = he(o.immediateRender),
            t < 2 ? n.runBackwards = 1 : n.startAt = e[r - 1]
    }
    return new Et(e[0],n,e[r + 1])
}, Li = function(t, e) {
    return t || t === 0 ? e(t) : e
}, Dr = function(t, e, i) {
    return i < t ? t : i > e ? e : i
}, Vt = function(t, e) {
    return !zt(t) || !(e = xl.exec(t)) ? "" : e[1]
}, Ll = function(t, e, i) {
    return Li(i, function(s) {
        return Dr(t, e, s)
    })
}, Nn = [].slice, ja = function(t, e) {
    return t && ii(t) && "length"in t && (!e && !t.length || t.length - 1 in t && ii(t[0])) && !t.nodeType && t !== Ge
}, Ol = function(t, e, i) {
    return i === void 0 && (i = []),
    t.forEach(function(s) {
        var r;
        return zt(s) && !e || ja(s, 1) ? (r = i).push.apply(r, Le(s)) : i.push(s)
    }) || i
}, Le = function(t, e, i) {
    return ct && !e && ct.selector ? ct.selector(t) : zt(t) && !i && (Rn || !Ps()) ? Nn.call((e || ho).querySelectorAll(t), 0) : Gt(t) ? Ol(t, i) : ja(t) ? Nn.call(t, 0) : t ? [t] : []
}, Wn = function(t) {
    return t = Le(t)[0] || ar("Invalid scope") || {},
        function(e) {
            var i = t.current || t.nativeElement || t;
            return Le(e, i.querySelectorAll ? i : i === t ? ar("Invalid scope") || ho.createElement("div") : t)
        }
}, Va = function(t) {
    return t.sort(function() {
        return .5 - Math.random()
    })
}, Xa = function(t) {
    if (Dt(t))
        return t;
    var e = ii(t) ? t : {
        each: t
    }
        , i = Ui(e.ease)
        , s = e.from || 0
        , r = parseFloat(e.base) || 0
        , n = {}
        , o = s > 0 && s < 1
        , a = isNaN(s) || o
        , l = e.axis
        , h = s
        , c = s;
    return zt(s) ? h = c = {
        center: .5,
        edges: .5,
        end: 1
    }[s] || 0 : !o && a && (h = s[0],
        c = s[1]),
        function(p, f, g) {
            var d = (g || e).length, _ = n[d], D, v, w, y, b, S, x, F, T;
            if (!_) {
                if (T = e.grid === "auto" ? 0 : (e.grid || [1, Ae])[1],
                    !T) {
                    for (x = -Ae; x < (x = g[T++].getBoundingClientRect().left) && T < d; )
                        ;
                    T < d && T--
                }
                for (_ = n[d] = [],
                         D = a ? Math.min(T, d) * h - .5 : s % T,
                         v = T === Ae ? 0 : a ? d * c / T - .5 : s / T | 0,
                         x = 0,
                         F = Ae,
                         S = 0; S < d; S++)
                    w = S % T - D,
                        y = v - (S / T | 0),
                        _[S] = b = l ? Math.abs(l === "y" ? y : w) : Fa(w * w + y * y),
                    b > x && (x = b),
                    b < F && (F = b);
                s === "random" && Va(_),
                    _.max = x - F,
                    _.min = F,
                    _.v = d = (parseFloat(e.amount) || parseFloat(e.each) * (T > d ? d - 1 : l ? l === "y" ? d / T : T : Math.max(T, d / T)) || 0) * (s === "edges" ? -1 : 1),
                    _.b = d < 0 ? r - d : r,
                    _.u = Vt(e.amount || e.each) || 0,
                    i = i && d < 0 ? su(i) : i
            }
            return d = (_[p] - _.min) / _.max || 0,
            Rt(_.b + (i ? i(d) : d) * _.v) + _.u
        }
}, $n = function(t) {
    var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
    return function(i) {
        var s = Rt(Math.round(parseFloat(i) / t) * t * e);
        return (s - s % 1) / e + (fi(i) ? 0 : Vt(i))
    }
}, Ga = function(t, e) {
    var i = Gt(t), s, r;
    return !i && ii(t) && (s = i = t.radius || Ae,
        t.values ? (t = Le(t.values),
        (r = !fi(t[0])) && (s *= s)) : t = $n(t.increment)),
        Li(e, i ? Dt(t) ? function(n) {
                    return r = t(n),
                        Math.abs(r - n) <= s ? r : n
                }
                : function(n) {
                    for (var o = parseFloat(r ? n.x : n), a = parseFloat(r ? n.y : 0), l = Ae, h = 0, c = t.length, p, f; c--; )
                        r ? (p = t[c].x - o,
                            f = t[c].y - a,
                            p = p * p + f * f) : p = Math.abs(t[c] - o),
                        p < l && (l = p,
                            h = c);
                    return h = !s || l <= s ? t[h] : n,
                        r || h === n || fi(n) ? h : h + Vt(n)
                }
            : $n(t))
}, Ua = function(t, e, i, s) {
    return Li(Gt(t) ? !e : i === !0 ? !!(i = 0) : !s, function() {
        return Gt(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (s = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + i * .99)) / i) * i * s) / s
    })
}, Rl = function() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
        e[i] = arguments[i];
    return function(s) {
        return e.reduce(function(r, n) {
            return n(r)
        }, s)
    }
}, zl = function(t, e) {
    return function(i) {
        return t(parseFloat(i)) + (e || Vt(i))
    }
}, Bl = function(t, e, i) {
    return Za(t, e, 0, 1, i)
}, Ka = function(t, e, i) {
    return Li(i, function(s) {
        return t[~~e(s)]
    })
}, Il = function u(t, e, i) {
    var s = e - t;
    return Gt(t) ? Ka(t, u(0, t.length), e) : Li(i, function(r) {
        return (s + (r - t) % s) % s + t
    })
}, Nl = function u(t, e, i) {
    var s = e - t
        , r = s * 2;
    return Gt(t) ? Ka(t, u(0, t.length - 1), e) : Li(i, function(n) {
        return n = (r + (n - t) % r) % r || 0,
        t + (n > s ? r - n : n)
    })
}, lr = function(t) {
    for (var e = 0, i = "", s, r, n, o; ~(s = t.indexOf("random(", e)); )
        n = t.indexOf(")", s),
            o = t.charAt(s + 7) === "[",
            r = t.substr(s + 7, n - s - 7).match(o ? Aa : On),
            i += t.substr(e, s - e) + Ua(o ? r : +r[0], o ? 0 : +r[1], +r[2] || 1e-5),
            e = n + 1;
    return i + t.substr(e, t.length - e)
}, Za = function(t, e, i, s, r) {
    var n = e - t
        , o = s - i;
    return Li(r, function(a) {
        return i + ((a - t) / n * o || 0)
    })
}, Wl = function u(t, e, i, s) {
    var r = isNaN(t + e) ? 0 : function(f) {
            return (1 - f) * t + f * e
        }
    ;
    if (!r) {
        var n = zt(t), o = {}, a, l, h, c, p;
        if (i === !0 && (s = 1) && (i = null),
            n)
            t = {
                p: t
            },
                e = {
                    p: e
                };
        else if (Gt(t) && !Gt(e)) {
            for (h = [],
                     c = t.length,
                     p = c - 2,
                     l = 1; l < c; l++)
                h.push(u(t[l - 1], t[l]));
            c--,
                r = function(g) {
                    g *= c;
                    var d = Math.min(p, ~~g);
                    return h[d](g - d)
                }
                ,
                i = e
        } else
            s || (t = ts(Gt(t) ? [] : {}, t));
        if (!h) {
            for (a in e)
                _o.call(o, t, a, "get", e[a]);
            r = function(g) {
                return vo(g, o) || (n ? t.p : t)
            }
        }
    }
    return Li(i, r)
}, Wo = function(t, e, i) {
    var s = t.labels, r = Ae, n, o, a;
    for (n in s)
        o = s[n] - e,
        o < 0 == !!i && o && r > (o = Math.abs(o)) && (a = n,
            r = o);
    return a
}, Ce = function(t, e, i) {
    var s = t.vars, r = s[e], n = ct, o = t._ctx, a, l, h;
    if (r)
        return a = s[e + "Params"],
            l = s.callbackScope || t,
        i && Ti.length && Gr(),
        o && (ct = o),
            h = a ? r.apply(l, a) : r.call(l),
            ct = n,
            h
}, $s = function(t) {
    return ki(t),
    t.scrollTrigger && t.scrollTrigger.kill(!!Xt),
    t.progress() < 1 && Ce(t, "onInterrupt"),
        t
}, Ds, Qa = [], Ja = function(t) {
    if (t)
        if (t = !t.name && t.default || t,
        lo() || t.headless) {
            var e = t.name
                , i = Dt(t)
                , s = e && !i && t.init ? function() {
                    this._props = []
                }
                : t
                , r = {
                init: ur,
                render: vo,
                add: _o,
                kill: ih,
                modifier: eh,
                rawVars: 0
            }
                , n = {
                targetTest: 0,
                get: 0,
                getSetter: yo,
                aliases: {},
                register: 0
            };
            if (Ps(),
            t !== s) {
                if (ye[e])
                    return;
                Re(s, Re(Ur(t, r), n)),
                    ts(s.prototype, ts(r, Ur(t, n))),
                    ye[s.prop = e] = s,
                t.targetTest && (Br.push(s),
                    fo[e] = 1),
                    e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
            }
            Ra(e, s),
            t.register && t.register(oe, s, fe)
        } else
            Qa.push(t)
}, at = 255, Ys = {
    aqua: [0, at, at],
    lime: [0, at, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, at],
    navy: [0, 0, 128],
    white: [at, at, at],
    olive: [128, 128, 0],
    yellow: [at, at, 0],
    orange: [at, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [at, 0, 0],
    pink: [at, 192, 203],
    cyan: [0, at, at],
    transparent: [at, at, at, 0]
}, _n = function(t, e, i) {
    return t += t < 0 ? 1 : t > 1 ? -1 : 0,
    (t * 6 < 1 ? e + (i - e) * t * 6 : t < .5 ? i : t * 3 < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * at + .5 | 0
}, tu = function(t, e, i) {
    var s = t ? fi(t) ? [t >> 16, t >> 8 & at, t & at] : 0 : Ys.black, r, n, o, a, l, h, c, p, f, g;
    if (!s) {
        if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)),
            Ys[t])
            s = Ys[t];
        else if (t.charAt(0) === "#") {
            if (t.length < 6 && (r = t.charAt(1),
                n = t.charAt(2),
                o = t.charAt(3),
                t = "#" + r + r + n + n + o + o + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")),
            t.length === 9)
                return s = parseInt(t.substr(1, 6), 16),
                    [s >> 16, s >> 8 & at, s & at, parseInt(t.substr(7), 16) / 255];
            t = parseInt(t.substr(1), 16),
                s = [t >> 16, t >> 8 & at, t & at]
        } else if (t.substr(0, 3) === "hsl") {
            if (s = g = t.match(On),
                !e)
                a = +s[0] % 360 / 360,
                    l = +s[1] / 100,
                    h = +s[2] / 100,
                    n = h <= .5 ? h * (l + 1) : h + l - h * l,
                    r = h * 2 - n,
                s.length > 3 && (s[3] *= 1),
                    s[0] = _n(a + 1 / 3, r, n),
                    s[1] = _n(a, r, n),
                    s[2] = _n(a - 1 / 3, r, n);
            else if (~t.indexOf("="))
                return s = t.match(ka),
                i && s.length < 4 && (s[3] = 1),
                    s
        } else
            s = t.match(On) || Ys.transparent;
        s = s.map(Number)
    }
    return e && !g && (r = s[0] / at,
        n = s[1] / at,
        o = s[2] / at,
        c = Math.max(r, n, o),
        p = Math.min(r, n, o),
        h = (c + p) / 2,
        c === p ? a = l = 0 : (f = c - p,
            l = h > .5 ? f / (2 - c - p) : f / (c + p),
            a = c === r ? (n - o) / f + (n < o ? 6 : 0) : c === n ? (o - r) / f + 2 : (r - n) / f + 4,
            a *= 60),
        s[0] = ~~(a + .5),
        s[1] = ~~(l * 100 + .5),
        s[2] = ~~(h * 100 + .5)),
    i && s.length < 4 && (s[3] = 1),
        s
}, eu = function(t) {
    var e = []
        , i = []
        , s = -1;
    return t.split(Fi).forEach(function(r) {
        var n = r.match(_s) || [];
        e.push.apply(e, n),
            i.push(s += n.length + 1)
    }),
        e.c = i,
        e
}, $o = function(t, e, i) {
    var s = "", r = (t + s).match(Fi), n = e ? "hsla(" : "rgba(", o = 0, a, l, h, c;
    if (!r)
        return t;
    if (r = r.map(function(p) {
        return (p = tu(p, e, 1)) && n + (e ? p[0] + "," + p[1] + "%," + p[2] + "%," + p[3] : p.join(",")) + ")"
    }),
    i && (h = eu(t),
        a = i.c,
    a.join(s) !== h.c.join(s)))
        for (l = t.replace(Fi, "1").split(_s),
                 c = l.length - 1; o < c; o++)
            s += l[o] + (~a.indexOf(o) ? r.shift() || n + "0,0,0,0)" : (h.length ? h : r.length ? r : i).shift());
    if (!l)
        for (l = t.split(Fi),
                 c = l.length - 1; o < c; o++)
            s += l[o] + r[o];
    return s + l[c]
}, Fi = function() {
    var u = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
    for (t in Ys)
        u += "|" + t + "\\b";
    return new RegExp(u + ")","gi")
}(), $l = /hsl[a]?\(/, iu = function(t) {
    var e = t.join(" "), i;
    if (Fi.lastIndex = 0,
        Fi.test(e))
        return i = $l.test(e),
            t[1] = $o(t[1], i),
            t[0] = $o(t[0], i, eu(t[1])),
            !0
}, hr, ve = function() {
    var u = Date.now, t = 500, e = 33, i = u(), s = i, r = 1e3 / 240, n = r, o = [], a, l, h, c, p, f, g = function d(_) {
        var D = u() - s, v = _ === !0, w, y, b, S;
        if ((D > t || D < 0) && (i += D - e),
            s += D,
            b = s - i,
            w = b - n,
        (w > 0 || v) && (S = ++c.frame,
            p = b - c.time * 1e3,
            c.time = b = b / 1e3,
            n += w + (w >= r ? 4 : r - w),
            y = 1),
        v || (a = l(d)),
            y)
            for (f = 0; f < o.length; f++)
                o[f](b, p, S, _)
    };
    return c = {
        time: 0,
        frame: 0,
        tick: function() {
            g(!0)
        },
        deltaRatio: function(_) {
            return p / (1e3 / (_ || 60))
        },
        wake: function() {
            La && (!Rn && lo() && (Ge = Rn = window,
                ho = Ge.document || {},
                Ee.gsap = oe,
                (Ge.gsapVersions || (Ge.gsapVersions = [])).push(oe.version),
                Oa(Xr || Ge.GreenSockGlobals || !Ge.gsap && Ge || {}),
                Qa.forEach(Ja)),
                h = typeof requestAnimationFrame < "u" && requestAnimationFrame,
            a && c.sleep(),
                l = h || function(_) {
                    return setTimeout(_, n - c.time * 1e3 + 1 | 0)
                }
                ,
                hr = 1,
                g(2))
        },
        sleep: function() {
            (h ? cancelAnimationFrame : clearTimeout)(a),
                hr = 0,
                l = ur
        },
        lagSmoothing: function(_, D) {
            t = _ || 1 / 0,
                e = Math.min(D || 33, t)
        },
        fps: function(_) {
            r = 1e3 / (_ || 240),
                n = c.time * 1e3 + r
        },
        add: function(_, D, v) {
            var w = D ? function(y, b, S, x) {
                    _(y, b, S, x),
                        c.remove(w)
                }
                : _;
            return c.remove(_),
                o[v ? "unshift" : "push"](w),
                Ps(),
                w
        },
        remove: function(_, D) {
            ~(D = o.indexOf(_)) && o.splice(D, 1) && f >= D && f--
        },
        _listeners: o
    },
        c
}(), Ps = function() {
    return !hr && ve.wake()
}, tt = {}, Yl = /^[\d.\-M][\d.\-,\s]/, Hl = /["']/g, ql = function(t) {
    for (var e = {}, i = t.substr(1, t.length - 3).split(":"), s = i[0], r = 1, n = i.length, o, a, l; r < n; r++)
        a = i[r],
            o = r !== n - 1 ? a.lastIndexOf(",") : a.length,
            l = a.substr(0, o),
            e[s] = isNaN(l) ? l.replace(Hl, "").trim() : +l,
            s = a.substr(o + 1).trim();
    return e
}, jl = function(t) {
    var e = t.indexOf("(") + 1
        , i = t.indexOf(")")
        , s = t.indexOf("(", e);
    return t.substring(e, ~s && s < i ? t.indexOf(")", i + 1) : i)
}, Vl = function(t) {
    var e = (t + "").split("(")
        , i = tt[e[0]];
    return i && e.length > 1 && i.config ? i.config.apply(null, ~t.indexOf("{") ? [ql(e[1])] : jl(t).split(",").map(Na)) : tt._CE && Yl.test(t) ? tt._CE("", t) : i
}, su = function(t) {
    return function(e) {
        return 1 - t(1 - e)
    }
}, ru = function u(t, e) {
    for (var i = t._first, s; i; )
        i instanceof ie ? u(i, e) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== e && (i.timeline ? u(i.timeline, e) : (s = i._ease,
            i._ease = i._yEase,
            i._yEase = s,
            i._yoyo = e)),
            i = i._next
}, Ui = function(t, e) {
    return t && (Dt(t) ? t : tt[t] || Vl(t)) || e
}, os = function(t, e, i, s) {
    i === void 0 && (i = function(a) {
            return 1 - e(1 - a)
        }
    ),
    s === void 0 && (s = function(a) {
            return a < .5 ? e(a * 2) / 2 : 1 - e((1 - a) * 2) / 2
        }
    );
    var r = {
        easeIn: e,
        easeOut: i,
        easeInOut: s
    }, n;
    return ce(t, function(o) {
        tt[o] = Ee[o] = r,
            tt[n = o.toLowerCase()] = i;
        for (var a in r)
            tt[n + (a === "easeIn" ? ".in" : a === "easeOut" ? ".out" : ".inOut")] = tt[o + "." + a] = r[a]
    }),
        r
}, nu = function(t) {
    return function(e) {
        return e < .5 ? (1 - t(1 - e * 2)) / 2 : .5 + t((e - .5) * 2) / 2
    }
}, Dn = function u(t, e, i) {
    var s = e >= 1 ? e : 1
        , r = (i || (t ? .3 : .45)) / (e < 1 ? e : 1)
        , n = r / Ln * (Math.asin(1 / s) || 0)
        , o = function(h) {
        return h === 1 ? 1 : s * Math.pow(2, -10 * h) * vl((h - n) * r) + 1
    }
        , a = t === "out" ? o : t === "in" ? function(l) {
            return 1 - o(1 - l)
        }
        : nu(o);
    return r = Ln / r,
        a.config = function(l, h) {
            return u(t, l, h)
        }
        ,
        a
}, mn = function u(t, e) {
    e === void 0 && (e = 1.70158);
    var i = function(n) {
        return n ? --n * n * ((e + 1) * n + e) + 1 : 0
    }
        , s = t === "out" ? i : t === "in" ? function(r) {
            return 1 - i(1 - r)
        }
        : nu(i);
    return s.config = function(r) {
        return u(t, r)
    }
        ,
        s
};
ce("Linear,Quad,Cubic,Quart,Quint,Strong", function(u, t) {
    var e = t < 5 ? t + 1 : t;
    os(u + ",Power" + (e - 1), t ? function(i) {
                return Math.pow(i, e)
            }
            : function(i) {
                return i
            }
        , function(i) {
            return 1 - Math.pow(1 - i, e)
        }, function(i) {
            return i < .5 ? Math.pow(i * 2, e) / 2 : 1 - Math.pow((1 - i) * 2, e) / 2
        })
});
tt.Linear.easeNone = tt.none = tt.Linear.easeIn;
os("Elastic", Dn("in"), Dn("out"), Dn());
(function(u, t) {
        var e = 1 / t
            , i = 2 * e
            , s = 2.5 * e
            , r = function(o) {
            return o < e ? u * o * o : o < i ? u * Math.pow(o - 1.5 / t, 2) + .75 : o < s ? u * (o -= 2.25 / t) * o + .9375 : u * Math.pow(o - 2.625 / t, 2) + .984375
        };
        os("Bounce", function(n) {
            return 1 - r(1 - n)
        }, r)
    }
)(7.5625, 2.75);
os("Expo", function(u) {
    return u ? Math.pow(2, 10 * (u - 1)) : 0
});
os("Circ", function(u) {
    return -(Fa(1 - u * u) - 1)
});
os("Sine", function(u) {
    return u === 1 ? 1 : -yl(u * Dl) + 1
});
os("Back", mn("in"), mn("out"), mn());
tt.SteppedEase = tt.steps = Ee.SteppedEase = {
    config: function(t, e) {
        t === void 0 && (t = 1);
        var i = 1 / t
            , s = t + (e ? 0 : 1)
            , r = e ? 1 : 0
            , n = 1 - ut;
        return function(o) {
            return ((s * Dr(0, n, o) | 0) + r) * i
        }
    }
};
Es.ease = tt["quad.out"];
ce("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(u) {
    return po += u + "," + u + "Params,"
});
var ou = function(t, e) {
    this.id = ml++,
        t._gsap = this,
        this.target = t,
        this.harness = e,
        this.get = e ? e.get : Ba,
        this.set = e ? e.getSetter : yo
}
    , cr = function() {
    function u(e) {
        this.vars = e,
            this._delay = +e.delay || 0,
        (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0,
            this._yoyo = !!e.yoyo || !!e.yoyoEase),
            this._ts = 1,
            Fs(this, +e.duration, 1, 1),
            this.data = e.data,
        ct && (this._ctx = ct,
            ct.data.push(this)),
        hr || ve.wake()
    }
    var t = u.prototype;
    return t.delay = function(i) {
        return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay),
            this._delay = i,
            this) : this._delay
    }
        ,
        t.duration = function(i) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur
        }
        ,
        t.totalDuration = function(i) {
            return arguments.length ? (this._dirty = 0,
                Fs(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }
        ,
        t.totalTime = function(i, s) {
            if (Ps(),
                !arguments.length)
                return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
                for (ln(this, i),
                     !r._dp || r.parent || Ya(r, this); r && r.parent; )
                    r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0),
                        r = r.parent;
                !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && Ke(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== i || !this._dur && !s || this._initted && Math.abs(this._zTime) === ut || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i),
                Ia(this, i, s)),
                this
        }
        ,
        t.time = function(i, s) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + Io(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), s) : this._time
        }
        ,
        t.totalProgress = function(i, s) {
            return arguments.length ? this.totalTime(this.totalDuration() * i, s) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0
        }
        ,
        t.progress = function(i, s) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + Io(this), s) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
        }
        ,
        t.iteration = function(i, s) {
            var r = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (i - 1) * r, s) : this._repeat ? Ts(this._tTime, r) + 1 : 1
        }
        ,
        t.timeScale = function(i, s) {
            if (!arguments.length)
                return this._rts === -ut ? 0 : this._rts;
            if (this._rts === i)
                return this;
            var r = this.parent && this._ts ? Kr(this.parent._time, this) : this._tTime;
            return this._rts = +i || 0,
                this._ts = this._ps || i === -ut ? 0 : this._rts,
                this.totalTime(Dr(-Math.abs(this._delay), this._tDur, r), s !== !1),
                un(this),
                Tl(this)
        }
        ,
        t.paused = function(i) {
            return arguments.length ? (this._ps !== i && (this._ps = i,
                i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
                    this._ts = this._act = 0) : (Ps(),
                    this._ts = this._rts,
                    this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== ut && (this._tTime -= ut)))),
                this) : this._ps
        }
        ,
        t.startTime = function(i) {
            if (arguments.length) {
                this._start = i;
                var s = this.parent || this._dp;
                return s && (s._sort || !this.parent) && Ke(s, this, i - this._delay),
                    this
            }
            return this._start
        }
        ,
        t.endTime = function(i) {
            return this._start + (he(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }
        ,
        t.rawTime = function(i) {
            var s = this.parent || this._dp;
            return s ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Kr(s.rawTime(i), this) : this._tTime : this._tTime
        }
        ,
        t.revert = function(i) {
            i === void 0 && (i = bl);
            var s = Xt;
            return Xt = i,
            (this._initted || this._startAt) && (this.timeline && this.timeline.revert(i),
                this.totalTime(-.01, i.suppressEvents)),
            this.data !== "nested" && i.kill !== !1 && this.kill(),
                Xt = s,
                this
        }
        ,
        t.globalTime = function(i) {
            for (var s = this, r = arguments.length ? i : s.rawTime(); s; )
                r = s._start + r / (Math.abs(s._ts) || 1),
                    s = s._dp;
            return !this.parent && this._sat ? this._sat.globalTime(i) : r
        }
        ,
        t.repeat = function(i) {
            return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i,
                No(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
        }
        ,
        t.repeatDelay = function(i) {
            if (arguments.length) {
                var s = this._time;
                return this._rDelay = i,
                    No(this),
                    s ? this.time(s) : this
            }
            return this._rDelay
        }
        ,
        t.yoyo = function(i) {
            return arguments.length ? (this._yoyo = i,
                this) : this._yoyo
        }
        ,
        t.seek = function(i, s) {
            return this.totalTime(Pe(this, i), he(s))
        }
        ,
        t.restart = function(i, s) {
            return this.play().totalTime(i ? -this._delay : 0, he(s))
        }
        ,
        t.play = function(i, s) {
            return i != null && this.seek(i, s),
                this.reversed(!1).paused(!1)
        }
        ,
        t.reverse = function(i, s) {
            return i != null && this.seek(i || this.totalDuration(), s),
                this.reversed(!0).paused(!1)
        }
        ,
        t.pause = function(i, s) {
            return i != null && this.seek(i, s),
                this.paused(!0)
        }
        ,
        t.resume = function() {
            return this.paused(!1)
        }
        ,
        t.reversed = function(i) {
            return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -ut : 0)),
                this) : this._rts < 0
        }
        ,
        t.invalidate = function() {
            return this._initted = this._act = 0,
                this._zTime = -ut,
                this
        }
        ,
        t.isActive = function() {
            var i = this.parent || this._dp, s = this._start, r;
            return !!(!i || this._ts && this._initted && i.isActive() && (r = i.rawTime(!0)) >= s && r < this.endTime(!0) - ut)
        }
        ,
        t.eventCallback = function(i, s, r) {
            var n = this.vars;
            return arguments.length > 1 ? (s ? (n[i] = s,
            r && (n[i + "Params"] = r),
            i === "onUpdate" && (this._onUpdate = s)) : delete n[i],
                this) : n[i]
        }
        ,
        t.then = function(i) {
            var s = this;
            return new Promise(function(r) {
                    var n = Dt(i) ? i : Wa
                        , o = function() {
                        var l = s.then;
                        s.then = null,
                        Dt(n) && (n = n(s)) && (n.then || n === s) && (s.then = l),
                            r(n),
                            s.then = l
                    };
                    s._initted && s.totalProgress() === 1 && s._ts >= 0 || !s._tTime && s._ts < 0 ? o() : s._prom = o
                }
            )
        }
        ,
        t.kill = function() {
            $s(this)
        }
        ,
        u
}();
Re(cr.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -ut,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var ie = function(u) {
    Ta(t, u);
    function t(i, s) {
        var r;
        return i === void 0 && (i = {}),
            r = u.call(this, i) || this,
            r.labels = {},
            r.smoothChildTiming = !!i.smoothChildTiming,
            r.autoRemoveChildren = !!i.autoRemoveChildren,
            r._sort = he(i.sortChildren),
        pt && Ke(i.parent || pt, oi(r), s),
        i.reversed && r.reverse(),
        i.paused && r.paused(!0),
        i.scrollTrigger && Ha(oi(r), i.scrollTrigger),
            r
    }
    var e = t.prototype;
    return e.to = function(s, r, n) {
        return Us(0, arguments, this),
            this
    }
        ,
        e.from = function(s, r, n) {
            return Us(1, arguments, this),
                this
        }
        ,
        e.fromTo = function(s, r, n, o) {
            return Us(2, arguments, this),
                this
        }
        ,
        e.set = function(s, r, n) {
            return r.duration = 0,
                r.parent = this,
            Gs(r).repeatDelay || (r.repeat = 0),
                r.immediateRender = !!r.immediateRender,
                new Et(s,r,Pe(this, n),1),
                this
        }
        ,
        e.call = function(s, r, n) {
            return Ke(this, Et.delayedCall(0, s, r), n)
        }
        ,
        e.staggerTo = function(s, r, n, o, a, l, h) {
            return n.duration = r,
                n.stagger = n.stagger || o,
                n.onComplete = l,
                n.onCompleteParams = h,
                n.parent = this,
                new Et(s,n,Pe(this, a)),
                this
        }
        ,
        e.staggerFrom = function(s, r, n, o, a, l, h) {
            return n.runBackwards = 1,
                Gs(n).immediateRender = he(n.immediateRender),
                this.staggerTo(s, r, n, o, a, l, h)
        }
        ,
        e.staggerFromTo = function(s, r, n, o, a, l, h, c) {
            return o.startAt = n,
                Gs(o).immediateRender = he(o.immediateRender),
                this.staggerTo(s, r, o, a, l, h, c)
        }
        ,
        e.render = function(s, r, n) {
            var o = this._time, a = this._dirty ? this.totalDuration() : this._tDur, l = this._dur, h = s <= 0 ? 0 : Rt(s), c = this._zTime < 0 != s < 0 && (this._initted || !l), p, f, g, d, _, D, v, w, y, b, S, x;
            if (this !== pt && h > a && s >= 0 && (h = a),
            h !== this._tTime || n || c) {
                if (o !== this._time && l && (h += this._time - o,
                    s += this._time - o),
                    p = h,
                    y = this._start,
                    w = this._ts,
                    D = !w,
                c && (l || (o = this._zTime),
                (s || !r) && (this._zTime = s)),
                    this._repeat) {
                    if (S = this._yoyo,
                        _ = l + this._rDelay,
                    this._repeat < -1 && s < 0)
                        return this.totalTime(_ * 100 + s, r, n);
                    if (p = Rt(h % _),
                        h === a ? (d = this._repeat,
                            p = l) : (d = ~~(h / _),
                        d && d === h / _ && (p = l,
                            d--),
                        p > l && (p = l)),
                        b = Ts(this._tTime, _),
                    !o && this._tTime && b !== d && this._tTime - b * _ - this._dur <= 0 && (b = d),
                    S && d & 1 && (p = l - p,
                        x = 1),
                    d !== b && !this._lock) {
                        var F = S && b & 1
                            , T = F === (S && d & 1);
                        if (d < b && (F = !F),
                            o = F ? 0 : h % l ? l : h,
                            this._lock = 1,
                            this.render(o || (x ? 0 : Rt(d * _)), r, !l)._lock = 0,
                            this._tTime = h,
                        !r && this.parent && Ce(this, "onRepeat"),
                        this.vars.repeatRefresh && !x && (this.invalidate()._lock = 1),
                        o && o !== this._time || D !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                            return this;
                        if (l = this._dur,
                            a = this._tDur,
                        T && (this._lock = 2,
                            o = F ? l : -1e-4,
                            this.render(o, !0),
                        this.vars.repeatRefresh && !x && this.invalidate()),
                            this._lock = 0,
                        !this._ts && !D)
                            return this;
                        ru(this, x)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (v = Ml(this, Rt(o), Rt(p)),
                v && (h -= p - (p = v._start))),
                    this._tTime = h,
                    this._time = p,
                    this._act = !w,
                this._initted || (this._onUpdate = this.vars.onUpdate,
                    this._initted = 1,
                    this._zTime = s,
                    o = 0),
                !o && p && !r && !d && (Ce(this, "onStart"),
                this._tTime !== h))
                    return this;
                if (p >= o && s >= 0)
                    for (f = this._first; f; ) {
                        if (g = f._next,
                        (f._act || p >= f._start) && f._ts && v !== f) {
                            if (f.parent !== this)
                                return this.render(s, r, n);
                            if (f.render(f._ts > 0 ? (p - f._start) * f._ts : (f._dirty ? f.totalDuration() : f._tDur) + (p - f._start) * f._ts, r, n),
                            p !== this._time || !this._ts && !D) {
                                v = 0,
                                g && (h += this._zTime = -ut);
                                break
                            }
                        }
                        f = g
                    }
                else {
                    f = this._last;
                    for (var P = s < 0 ? s : p; f; ) {
                        if (g = f._prev,
                        (f._act || P <= f._end) && f._ts && v !== f) {
                            if (f.parent !== this)
                                return this.render(s, r, n);
                            if (f.render(f._ts > 0 ? (P - f._start) * f._ts : (f._dirty ? f.totalDuration() : f._tDur) + (P - f._start) * f._ts, r, n || Xt && (f._initted || f._startAt)),
                            p !== this._time || !this._ts && !D) {
                                v = 0,
                                g && (h += this._zTime = P ? -ut : ut);
                                break
                            }
                        }
                        f = g
                    }
                }
                if (v && !r && (this.pause(),
                    v.render(p >= o ? 0 : -ut)._zTime = p >= o ? 1 : -1,
                    this._ts))
                    return this._start = y,
                        un(this),
                        this.render(s, r, n);
                this._onUpdate && !r && Ce(this, "onUpdate", !0),
                (h === a && this._tTime >= this.totalDuration() || !h && o) && (y === this._start || Math.abs(w) !== Math.abs(this._ts)) && (this._lock || ((s || !l) && (h === a && this._ts > 0 || !h && this._ts < 0) && ki(this, 1),
                !r && !(s < 0 && !o) && (h || o || !a) && (Ce(this, h === a && s >= 0 ? "onComplete" : "onReverseComplete", !0),
                this._prom && !(h < a && this.timeScale() > 0) && this._prom())))
            }
            return this
        }
        ,
        e.add = function(s, r) {
            var n = this;
            if (fi(r) || (r = Pe(this, r, s)),
                !(s instanceof cr)) {
                if (Gt(s))
                    return s.forEach(function(o) {
                        return n.add(o, r)
                    }),
                        this;
                if (zt(s))
                    return this.addLabel(s, r);
                if (Dt(s))
                    s = Et.delayedCall(0, s);
                else
                    return this
            }
            return this !== s ? Ke(this, s, r) : this
        }
        ,
        e.getChildren = function(s, r, n, o) {
            s === void 0 && (s = !0),
            r === void 0 && (r = !0),
            n === void 0 && (n = !0),
            o === void 0 && (o = -Ae);
            for (var a = [], l = this._first; l; )
                l._start >= o && (l instanceof Et ? r && a.push(l) : (n && a.push(l),
                s && a.push.apply(a, l.getChildren(!0, r, n)))),
                    l = l._next;
            return a
        }
        ,
        e.getById = function(s) {
            for (var r = this.getChildren(1, 1, 1), n = r.length; n--; )
                if (r[n].vars.id === s)
                    return r[n]
        }
        ,
        e.remove = function(s) {
            return zt(s) ? this.removeLabel(s) : Dt(s) ? this.killTweensOf(s) : (an(this, s),
            s === this._recent && (this._recent = this._last),
                Gi(this))
        }
        ,
        e.totalTime = function(s, r) {
            return arguments.length ? (this._forcing = 1,
            !this._dp && this._ts && (this._start = Rt(ve.time - (this._ts > 0 ? s / this._ts : (this.totalDuration() - s) / -this._ts))),
                u.prototype.totalTime.call(this, s, r),
                this._forcing = 0,
                this) : this._tTime
        }
        ,
        e.addLabel = function(s, r) {
            return this.labels[s] = Pe(this, r),
                this
        }
        ,
        e.removeLabel = function(s) {
            return delete this.labels[s],
                this
        }
        ,
        e.addPause = function(s, r, n) {
            var o = Et.delayedCall(0, r || ur, n);
            return o.data = "isPause",
                this._hasPause = 1,
                Ke(this, o, Pe(this, s))
        }
        ,
        e.removePause = function(s) {
            var r = this._first;
            for (s = Pe(this, s); r; )
                r._start === s && r.data === "isPause" && ki(r),
                    r = r._next
        }
        ,
        e.killTweensOf = function(s, r, n) {
            for (var o = this.getTweensOf(s, n), a = o.length; a--; )
                wi !== o[a] && o[a].kill(s, r);
            return this
        }
        ,
        e.getTweensOf = function(s, r) {
            for (var n = [], o = Le(s), a = this._first, l = fi(r), h; a; )
                a instanceof Et ? Cl(a._targets, o) && (l ? (!wi || a._initted && a._ts) && a.globalTime(0) <= r && a.globalTime(a.totalDuration()) > r : !r || a.isActive()) && n.push(a) : (h = a.getTweensOf(o, r)).length && n.push.apply(n, h),
                    a = a._next;
            return n
        }
        ,
        e.tweenTo = function(s, r) {
            r = r || {};
            var n = this, o = Pe(n, s), a = r, l = a.startAt, h = a.onStart, c = a.onStartParams, p = a.immediateRender, f, g = Et.to(n, Re({
                ease: r.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: o,
                overwrite: "auto",
                duration: r.duration || Math.abs((o - (l && "time"in l ? l.time : n._time)) / n.timeScale()) || ut,
                onStart: function() {
                    if (n.pause(),
                        !f) {
                        var _ = r.duration || Math.abs((o - (l && "time"in l ? l.time : n._time)) / n.timeScale());
                        g._dur !== _ && Fs(g, _, 0, 1).render(g._time, !0, !0),
                            f = 1
                    }
                    h && h.apply(g, c || [])
                }
            }, r));
            return p ? g.render(0) : g
        }
        ,
        e.tweenFromTo = function(s, r, n) {
            return this.tweenTo(r, Re({
                startAt: {
                    time: Pe(this, s)
                }
            }, n))
        }
        ,
        e.recent = function() {
            return this._recent
        }
        ,
        e.nextLabel = function(s) {
            return s === void 0 && (s = this._time),
                Wo(this, Pe(this, s))
        }
        ,
        e.previousLabel = function(s) {
            return s === void 0 && (s = this._time),
                Wo(this, Pe(this, s), 1)
        }
        ,
        e.currentLabel = function(s) {
            return arguments.length ? this.seek(s, !0) : this.previousLabel(this._time + ut)
        }
        ,
        e.shiftChildren = function(s, r, n) {
            n === void 0 && (n = 0);
            for (var o = this._first, a = this.labels, l; o; )
                o._start >= n && (o._start += s,
                    o._end += s),
                    o = o._next;
            if (r)
                for (l in a)
                    a[l] >= n && (a[l] += s);
            return Gi(this)
        }
        ,
        e.invalidate = function(s) {
            var r = this._first;
            for (this._lock = 0; r; )
                r.invalidate(s),
                    r = r._next;
            return u.prototype.invalidate.call(this, s)
        }
        ,
        e.clear = function(s) {
            s === void 0 && (s = !0);
            for (var r = this._first, n; r; )
                n = r._next,
                    this.remove(r),
                    r = n;
            return this._dp && (this._time = this._tTime = this._pTime = 0),
            s && (this.labels = {}),
                Gi(this)
        }
        ,
        e.totalDuration = function(s) {
            var r = 0, n = this, o = n._last, a = Ae, l, h, c;
            if (arguments.length)
                return n.timeScale((n._repeat < 0 ? n.duration() : n.totalDuration()) / (n.reversed() ? -s : s));
            if (n._dirty) {
                for (c = n.parent; o; )
                    l = o._prev,
                    o._dirty && o.totalDuration(),
                        h = o._start,
                        h > a && n._sort && o._ts && !n._lock ? (n._lock = 1,
                            Ke(n, o, h - o._delay, 1)._lock = 0) : a = h,
                    h < 0 && o._ts && (r -= h,
                    (!c && !n._dp || c && c.smoothChildTiming) && (n._start += h / n._ts,
                        n._time -= h,
                        n._tTime -= h),
                        n.shiftChildren(-h, !1, -1 / 0),
                        a = 0),
                    o._end > r && o._ts && (r = o._end),
                        o = l;
                Fs(n, n === pt && n._time > r ? n._time : r, 1, 1),
                    n._dirty = 0
            }
            return n._tDur
        }
        ,
        t.updateRoot = function(s) {
            if (pt._ts && (Ia(pt, Kr(s, pt)),
                za = ve.frame),
            ve.frame >= zo) {
                zo += Se.autoSleep || 120;
                var r = pt._first;
                if ((!r || !r._ts) && Se.autoSleep && ve._listeners.length < 2) {
                    for (; r && !r._ts; )
                        r = r._next;
                    r || ve.sleep()
                }
            }
        }
        ,
        t
}(cr);
Re(ie.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var Xl = function(t, e, i, s, r, n, o) {
    var a = new fe(this._pt,t,e,0,1,fu,null,r), l = 0, h = 0, c, p, f, g, d, _, D, v;
    for (a.b = i,
             a.e = s,
             i += "",
             s += "",
         (D = ~s.indexOf("random(")) && (s = lr(s)),
         n && (v = [i, s],
             n(v, t, e),
             i = v[0],
             s = v[1]),
             p = i.match(pn) || []; c = pn.exec(s); )
        g = c[0],
            d = s.substring(l, c.index),
            f ? f = (f + 1) % 5 : d.substr(-5) === "rgba(" && (f = 1),
        g !== p[h++] && (_ = parseFloat(p[h - 1]) || 0,
            a._pt = {
                _next: a._pt,
                p: d || h === 1 ? d : ",",
                s: _,
                c: g.charAt(1) === "=" ? vs(_, g) - _ : parseFloat(g) - _,
                m: f && f < 4 ? Math.round : 0
            },
            l = pn.lastIndex);
    return a.c = l < s.length ? s.substring(l, s.length) : "",
        a.fp = o,
    (Ma.test(s) || D) && (a.e = 0),
        this._pt = a,
        a
}, _o = function(t, e, i, s, r, n, o, a, l, h) {
    Dt(s) && (s = s(r || 0, t, n));
    var c = t[e], p = i !== "get" ? i : Dt(c) ? l ? t[e.indexOf("set") || !Dt(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : c, f = Dt(c) ? l ? Ql : hu : mo, g;
    if (zt(s) && (~s.indexOf("random(") && (s = lr(s)),
    s.charAt(1) === "=" && (g = vs(p, s) + (Vt(p) || 0),
    (g || g === 0) && (s = g))),
    !h || p !== s || Yn)
        return !isNaN(p * s) && s !== "" ? (g = new fe(this._pt,t,e,+p || 0,s - (p || 0),typeof c == "boolean" ? th : cu,0,f),
        l && (g.fp = l),
        o && g.modifier(o, this, t),
            this._pt = g) : (!c && !(e in t) && co(e, s),
            Xl.call(this, t, e, p, s, f, a || Se.stringFilter, l))
}, Gl = function(t, e, i, s, r) {
    if (Dt(t) && (t = Ks(t, r, e, i, s)),
    !ii(t) || t.style && t.nodeType || Gt(t) || Pa(t))
        return zt(t) ? Ks(t, r, e, i, s) : t;
    var n = {}, o;
    for (o in t)
        n[o] = Ks(t[o], r, e, i, s);
    return n
}, au = function(t, e, i, s, r, n) {
    var o, a, l, h;
    if (ye[t] && (o = new ye[t]).init(r, o.rawVars ? e[t] : Gl(e[t], s, r, n, i), i, s, n) !== !1 && (i._pt = a = new fe(i._pt,r,t,0,1,o.render,o,0,o.priority),
    i !== Ds))
        for (l = i._ptLookup[i._targets.indexOf(r)],
                 h = o._props.length; h--; )
            l[o._props[h]] = a;
    return o
}, wi, Yn, Do = function u(t, e, i) {
    var s = t.vars, r = s.ease, n = s.startAt, o = s.immediateRender, a = s.lazy, l = s.onUpdate, h = s.runBackwards, c = s.yoyoEase, p = s.keyframes, f = s.autoRevert, g = t._dur, d = t._startAt, _ = t._targets, D = t.parent, v = D && D.data === "nested" ? D.vars.targets : _, w = t._overwrite === "auto" && !ao, y = t.timeline, b, S, x, F, T, P, z, k, W, I, V, L, M;
    if (y && (!p || !r) && (r = "none"),
        t._ease = Ui(r, Es.ease),
        t._yEase = c ? su(Ui(c === !0 ? r : c, Es.ease)) : 0,
    c && t._yoyo && !t._repeat && (c = t._yEase,
        t._yEase = t._ease,
        t._ease = c),
        t._from = !y && !!s.runBackwards,
    !y || p && !s.stagger) {
        if (k = _[0] ? Xi(_[0]).harness : 0,
            L = k && s[k.prop],
            b = Ur(s, fo),
        d && (d._zTime < 0 && d.progress(1),
            e < 0 && h && o && !f ? d.render(-1, !0) : d.revert(h && g ? zr : wl),
            d._lazy = 0),
            n) {
            if (ki(t._startAt = Et.set(_, Re({
                data: "isStart",
                overwrite: !1,
                parent: D,
                immediateRender: !0,
                lazy: !d && he(a),
                startAt: null,
                delay: 0,
                onUpdate: l && function() {
                    return Ce(t, "onUpdate")
                }
                ,
                stagger: 0
            }, n))),
                t._startAt._dp = 0,
                t._startAt._sat = t,
            e < 0 && (Xt || !o && !f) && t._startAt.revert(zr),
            o && g && e <= 0 && i <= 0) {
                e && (t._zTime = e);
                return
            }
        } else if (h && g && !d) {
            if (e && (o = !1),
                x = Re({
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: o && !d && he(a),
                    immediateRender: o,
                    stagger: 0,
                    parent: D
                }, b),
            L && (x[k.prop] = L),
                ki(t._startAt = Et.set(_, x)),
                t._startAt._dp = 0,
                t._startAt._sat = t,
            e < 0 && (Xt ? t._startAt.revert(zr) : t._startAt.render(-1, !0)),
                t._zTime = e,
                !o)
                u(t._startAt, ut, ut);
            else if (!e)
                return
        }
        for (t._pt = t._ptCache = 0,
                 a = g && he(a) || a && !g,
                 S = 0; S < _.length; S++) {
            if (T = _[S],
                z = T._gsap || go(_)[S]._gsap,
                t._ptLookup[S] = I = {},
            zn[z.id] && Ti.length && Gr(),
                V = v === _ ? S : v.indexOf(T),
            k && (W = new k).init(T, L || b, t, V, v) !== !1 && (t._pt = F = new fe(t._pt,T,W.name,0,1,W.render,W,0,W.priority),
                W._props.forEach(function(N) {
                    I[N] = F
                }),
            W.priority && (P = 1)),
            !k || L)
                for (x in b)
                    ye[x] && (W = au(x, b, t, V, T, v)) ? W.priority && (P = 1) : I[x] = F = _o.call(t, T, x, "get", b[x], V, v, 0, s.stringFilter);
            t._op && t._op[S] && t.kill(T, t._op[S]),
            w && t._pt && (wi = t,
                pt.killTweensOf(T, I, t.globalTime(e)),
                M = !t.parent,
                wi = 0),
            t._pt && a && (zn[z.id] = 1)
        }
        P && du(t),
        t._onInit && t._onInit(t)
    }
    t._onUpdate = l,
        t._initted = (!t._op || t._pt) && !M,
    p && e <= 0 && y.render(Ae, !0, !0)
}, Ul = function(t, e, i, s, r, n, o, a) {
    var l = (t._pt && t._ptCache || (t._ptCache = {}))[e], h, c, p, f;
    if (!l)
        for (l = t._ptCache[e] = [],
                 p = t._ptLookup,
                 f = t._targets.length; f--; ) {
            if (h = p[f][e],
            h && h.d && h.d._pt)
                for (h = h.d._pt; h && h.p !== e && h.fp !== e; )
                    h = h._next;
            if (!h)
                return Yn = 1,
                    t.vars[e] = "+=0",
                    Do(t, o),
                    Yn = 0,
                    a ? ar(e + " not eligible for reset") : 1;
            l.push(h)
        }
    for (f = l.length; f--; )
        c = l[f],
            h = c._pt || c,
            h.s = (s || s === 0) && !r ? s : h.s + (s || 0) + n * h.c,
            h.c = i - h.s,
        c.e && (c.e = xt(i) + Vt(c.e)),
        c.b && (c.b = h.s + Vt(c.b))
}, Kl = function(t, e) {
    var i = t[0] ? Xi(t[0]).harness : 0, s = i && i.aliases, r, n, o, a;
    if (!s)
        return e;
    r = ts({}, e);
    for (n in s)
        if (n in r)
            for (a = s[n].split(","),
                     o = a.length; o--; )
                r[a[o]] = r[n];
    return r
}, Zl = function(t, e, i, s) {
    var r = e.ease || s || "power1.inOut", n, o;
    if (Gt(e))
        o = i[t] || (i[t] = []),
            e.forEach(function(a, l) {
                return o.push({
                    t: l / (e.length - 1) * 100,
                    v: a,
                    e: r
                })
            });
    else
        for (n in e)
            o = i[n] || (i[n] = []),
            n === "ease" || o.push({
                t: parseFloat(t),
                v: e[n],
                e: r
            })
}, Ks = function(t, e, i, s, r) {
    return Dt(t) ? t.call(e, i, s, r) : zt(t) && ~t.indexOf("random(") ? lr(t) : t
}, uu = po + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", lu = {};
ce(uu + ",id,stagger,delay,duration,paused,scrollTrigger", function(u) {
    return lu[u] = 1
});
var Et = function(u) {
    Ta(t, u);
    function t(i, s, r, n) {
        var o;
        typeof s == "number" && (r.duration = s,
            s = r,
            r = null),
            o = u.call(this, n ? s : Gs(s)) || this;
        var a = o.vars, l = a.duration, h = a.delay, c = a.immediateRender, p = a.stagger, f = a.overwrite, g = a.keyframes, d = a.defaults, _ = a.scrollTrigger, D = a.yoyoEase, v = s.parent || pt, w = (Gt(i) || Pa(i) ? fi(i[0]) : "length"in s) ? [i] : Le(i), y, b, S, x, F, T, P, z;
        if (o._targets = w.length ? go(w) : ar("GSAP target " + i + " not found. https://gsap.com", !Se.nullTargetWarn) || [],
            o._ptLookup = [],
            o._overwrite = f,
        g || p || xr(l) || xr(h)) {
            if (s = o.vars,
                y = o.timeline = new ie({
                    data: "nested",
                    defaults: d || {},
                    targets: v && v.data === "nested" ? v.vars.targets : w
                }),
                y.kill(),
                y.parent = y._dp = oi(o),
                y._start = 0,
            p || xr(l) || xr(h)) {
                if (x = w.length,
                    P = p && Xa(p),
                    ii(p))
                    for (F in p)
                        ~uu.indexOf(F) && (z || (z = {}),
                            z[F] = p[F]);
                for (b = 0; b < x; b++)
                    S = Ur(s, lu),
                        S.stagger = 0,
                    D && (S.yoyoEase = D),
                    z && ts(S, z),
                        T = w[b],
                        S.duration = +Ks(l, oi(o), b, T, w),
                        S.delay = (+Ks(h, oi(o), b, T, w) || 0) - o._delay,
                    !p && x === 1 && S.delay && (o._delay = h = S.delay,
                        o._start += h,
                        S.delay = 0),
                        y.to(T, S, P ? P(b, T, w) : 0),
                        y._ease = tt.none;
                y.duration() ? l = h = 0 : o.timeline = 0
            } else if (g) {
                Gs(Re(y.vars.defaults, {
                    ease: "none"
                })),
                    y._ease = Ui(g.ease || s.ease || "none");
                var k = 0, W, I, V;
                if (Gt(g))
                    g.forEach(function(L) {
                        return y.to(w, L, ">")
                    }),
                        y.duration();
                else {
                    S = {};
                    for (F in g)
                        F === "ease" || F === "easeEach" || Zl(F, g[F], S, g.easeEach);
                    for (F in S)
                        for (W = S[F].sort(function(L, M) {
                            return L.t - M.t
                        }),
                                 k = 0,
                                 b = 0; b < W.length; b++)
                            I = W[b],
                                V = {
                                    ease: I.e,
                                    duration: (I.t - (b ? W[b - 1].t : 0)) / 100 * l
                                },
                                V[F] = I.v,
                                y.to(w, V, k),
                                k += V.duration;
                    y.duration() < l && y.to({}, {
                        duration: l - y.duration()
                    })
                }
            }
            l || o.duration(l = y.duration())
        } else
            o.timeline = 0;
        return f === !0 && !ao && (wi = oi(o),
            pt.killTweensOf(w),
            wi = 0),
            Ke(v, oi(o), r),
        s.reversed && o.reverse(),
        s.paused && o.paused(!0),
        (c || !l && !g && o._start === Rt(v._time) && he(c) && Fl(oi(o)) && v.data !== "nested") && (o._tTime = -ut,
            o.render(Math.max(0, -h) || 0)),
        _ && Ha(oi(o), _),
            o
    }
    var e = t.prototype;
    return e.render = function(s, r, n) {
        var o = this._time, a = this._tDur, l = this._dur, h = s < 0, c = s > a - ut && !h ? a : s < ut ? 0 : s, p, f, g, d, _, D, v, w, y;
        if (!l)
            kl(this, s, r, n);
        else if (c !== this._tTime || !s || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== h) {
            if (p = c,
                w = this.timeline,
                this._repeat) {
                if (d = l + this._rDelay,
                this._repeat < -1 && h)
                    return this.totalTime(d * 100 + s, r, n);
                if (p = Rt(c % d),
                    c === a ? (g = this._repeat,
                        p = l) : (g = ~~(c / d),
                    g && g === Rt(c / d) && (p = l,
                        g--),
                    p > l && (p = l)),
                    D = this._yoyo && g & 1,
                D && (y = this._yEase,
                    p = l - p),
                    _ = Ts(this._tTime, d),
                p === o && !n && this._initted && g === _)
                    return this._tTime = c,
                        this;
                g !== _ && (w && this._yEase && ru(w, D),
                this.vars.repeatRefresh && !D && !this._lock && this._time !== d && this._initted && (this._lock = n = 1,
                    this.render(Rt(d * g), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (qa(this, h ? s : p, n, r, c))
                    return this._tTime = 0,
                        this;
                if (o !== this._time && !(n && this.vars.repeatRefresh && g !== _))
                    return this;
                if (l !== this._dur)
                    return this.render(s, r, n)
            }
            if (this._tTime = c,
                this._time = p,
            !this._act && this._ts && (this._act = 1,
                this._lazy = 0),
                this.ratio = v = (y || this._ease)(p / l),
            this._from && (this.ratio = v = 1 - v),
            p && !o && !r && !g && (Ce(this, "onStart"),
            this._tTime !== c))
                return this;
            for (f = this._pt; f; )
                f.r(v, f.d),
                    f = f._next;
            w && w.render(s < 0 ? s : w._dur * w._ease(p / this._dur), r, n) || this._startAt && (this._zTime = s),
            this._onUpdate && !r && (h && Bn(this, s, r, n),
                Ce(this, "onUpdate")),
            this._repeat && g !== _ && this.vars.onRepeat && !r && this.parent && Ce(this, "onRepeat"),
            (c === this._tDur || !c) && this._tTime === c && (h && !this._onUpdate && Bn(this, s, !0, !0),
            (s || !l) && (c === this._tDur && this._ts > 0 || !c && this._ts < 0) && ki(this, 1),
            !r && !(h && !o) && (c || o || D) && (Ce(this, c === a ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(c < a && this.timeScale() > 0) && this._prom()))
        }
        return this
    }
        ,
        e.targets = function() {
            return this._targets
        }
        ,
        e.invalidate = function(s) {
            return (!s || !this.vars.runBackwards) && (this._startAt = 0),
                this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
                this._ptLookup = [],
            this.timeline && this.timeline.invalidate(s),
                u.prototype.invalidate.call(this, s)
        }
        ,
        e.resetTo = function(s, r, n, o, a) {
            hr || ve.wake(),
            this._ts || this.play();
            var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts), h;
            return this._initted || Do(this, l),
                h = this._ease(l / this._dur),
                Ul(this, s, r, n, o, h, l, a) ? this.resetTo(s, r, n, o, 1) : (ln(this, 0),
                this.parent || $a(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
                    this.render(0))
        }
        ,
        e.kill = function(s, r) {
            if (r === void 0 && (r = "all"),
            !s && (!r || r === "all"))
                return this._lazy = this._pt = 0,
                    this.parent ? $s(this) : this;
            if (this.timeline) {
                var n = this.timeline.totalDuration();
                return this.timeline.killTweensOf(s, r, wi && wi.vars.overwrite !== !0)._first || $s(this),
                this.parent && n !== this.timeline.totalDuration() && Fs(this, this._dur * this.timeline._tDur / n, 0, 1),
                    this
            }
            var o = this._targets, a = s ? Le(s) : o, l = this._ptLookup, h = this._pt, c, p, f, g, d, _, D;
            if ((!r || r === "all") && El(o, a))
                return r === "all" && (this._pt = 0),
                    $s(this);
            for (c = this._op = this._op || [],
                 r !== "all" && (zt(r) && (d = {},
                     ce(r, function(v) {
                         return d[v] = 1
                     }),
                     r = d),
                     r = Kl(o, r)),
                     D = o.length; D--; )
                if (~a.indexOf(o[D])) {
                    p = l[D],
                        r === "all" ? (c[D] = r,
                            g = p,
                            f = {}) : (f = c[D] = c[D] || {},
                            g = r);
                    for (d in g)
                        _ = p && p[d],
                        _ && ((!("kill"in _.d) || _.d.kill(d) === !0) && an(this, _, "_pt"),
                            delete p[d]),
                        f !== "all" && (f[d] = 1)
                }
            return this._initted && !this._pt && h && $s(this),
                this
        }
        ,
        t.to = function(s, r) {
            return new t(s,r,arguments[2])
        }
        ,
        t.from = function(s, r) {
            return Us(1, arguments)
        }
        ,
        t.delayedCall = function(s, r, n, o) {
            return new t(r,0,{
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: s,
                onComplete: r,
                onReverseComplete: r,
                onCompleteParams: n,
                onReverseCompleteParams: n,
                callbackScope: o
            })
        }
        ,
        t.fromTo = function(s, r, n) {
            return Us(2, arguments)
        }
        ,
        t.set = function(s, r) {
            return r.duration = 0,
            r.repeatDelay || (r.repeat = 0),
                new t(s,r)
        }
        ,
        t.killTweensOf = function(s, r, n) {
            return pt.killTweensOf(s, r, n)
        }
        ,
        t
}(cr);
Re(Et.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
ce("staggerTo,staggerFrom,staggerFromTo", function(u) {
    Et[u] = function() {
        var t = new ie
            , e = Nn.call(arguments, 0);
        return e.splice(u === "staggerFromTo" ? 5 : 4, 0, 0),
            t[u].apply(t, e)
    }
});
var mo = function(t, e, i) {
    return t[e] = i
}
    , hu = function(t, e, i) {
    return t[e](i)
}
    , Ql = function(t, e, i, s) {
    return t[e](s.fp, i)
}
    , Jl = function(t, e, i) {
    return t.setAttribute(e, i)
}
    , yo = function(t, e) {
    return Dt(t[e]) ? hu : uo(t[e]) && t.setAttribute ? Jl : mo
}
    , cu = function(t, e) {
    return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e)
}
    , th = function(t, e) {
    return e.set(e.t, e.p, !!(e.s + e.c * t), e)
}
    , fu = function(t, e) {
    var i = e._pt
        , s = "";
    if (!t && e.b)
        s = e.b;
    else if (t === 1 && e.e)
        s = e.e;
    else {
        for (; i; )
            s = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round((i.s + i.c * t) * 1e4) / 1e4) + s,
                i = i._next;
        s += e.c
    }
    e.set(e.t, e.p, s, e)
}
    , vo = function(t, e) {
    for (var i = e._pt; i; )
        i.r(t, i.d),
            i = i._next
}
    , eh = function(t, e, i, s) {
    for (var r = this._pt, n; r; )
        n = r._next,
        r.p === s && r.modifier(t, e, i),
            r = n
}
    , ih = function(t) {
    for (var e = this._pt, i, s; e; )
        s = e._next,
            e.p === t && !e.op || e.op === t ? an(this, e, "_pt") : e.dep || (i = 1),
            e = s;
    return !i
}
    , sh = function(t, e, i, s) {
    s.mSet(t, e, s.m.call(s.tween, i, s.mt), s)
}
    , du = function(t) {
    for (var e = t._pt, i, s, r, n; e; ) {
        for (i = e._next,
                 s = r; s && s.pr > e.pr; )
            s = s._next;
        (e._prev = s ? s._prev : n) ? e._prev._next = e : r = e,
            (e._next = s) ? s._prev = e : n = e,
            e = i
    }
    t._pt = r
}
    , fe = function() {
    function u(e, i, s, r, n, o, a, l, h) {
        this.t = i,
            this.s = r,
            this.c = n,
            this.p = s,
            this.r = o || cu,
            this.d = a || this,
            this.set = l || mo,
            this.pr = h || 0,
            this._next = e,
        e && (e._prev = this)
    }
    var t = u.prototype;
    return t.modifier = function(i, s, r) {
        this.mSet = this.mSet || this.set,
            this.set = sh,
            this.m = i,
            this.mt = r,
            this.tween = s
    }
        ,
        u
}();
ce(po + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(u) {
    return fo[u] = 1
});
Ee.TweenMax = Ee.TweenLite = Et;
Ee.TimelineLite = Ee.TimelineMax = ie;
pt = new ie({
    sortChildren: !1,
    defaults: Es,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
Se.stringFilter = iu;
var Ki = []
    , Ir = {}
    , rh = []
    , Yo = 0
    , nh = 0
    , yn = function(t) {
    return (Ir[t] || rh).map(function(e) {
        return e()
    })
}
    , Hn = function() {
    var t = Date.now()
        , e = [];
    t - Yo > 2 && (yn("matchMediaInit"),
        Ki.forEach(function(i) {
            var s = i.queries, r = i.conditions, n, o, a, l;
            for (o in s)
                n = Ge.matchMedia(s[o]).matches,
                n && (a = 1),
                n !== r[o] && (r[o] = n,
                    l = 1);
            l && (i.revert(),
            a && e.push(i))
        }),
        yn("matchMediaRevert"),
        e.forEach(function(i) {
            return i.onMatch(i, function(s) {
                return i.add(null, s)
            })
        }),
        Yo = t,
        yn("matchMedia"))
}
    , pu = function() {
    function u(e, i) {
        this.selector = i && Wn(i),
            this.data = [],
            this._r = [],
            this.isReverted = !1,
            this.id = nh++,
        e && this.add(e)
    }
    var t = u.prototype;
    return t.add = function(i, s, r) {
        Dt(i) && (r = s,
            s = i,
            i = Dt);
        var n = this
            , o = function() {
            var l = ct, h = n.selector, c;
            return l && l !== n && l.data.push(n),
            r && (n.selector = Wn(r)),
                ct = n,
                c = s.apply(n, arguments),
            Dt(c) && n._r.push(c),
                ct = l,
                n.selector = h,
                n.isReverted = !1,
                c
        };
        return n.last = o,
            i === Dt ? o(n, function(a) {
                return n.add(null, a)
            }) : i ? n[i] = o : o
    }
        ,
        t.ignore = function(i) {
            var s = ct;
            ct = null,
                i(this),
                ct = s
        }
        ,
        t.getTweens = function() {
            var i = [];
            return this.data.forEach(function(s) {
                return s instanceof u ? i.push.apply(i, s.getTweens()) : s instanceof Et && !(s.parent && s.parent.data === "nested") && i.push(s)
            }),
                i
        }
        ,
        t.clear = function() {
            this._r.length = this.data.length = 0
        }
        ,
        t.kill = function(i, s) {
            var r = this;
            if (i ? function() {
                for (var o = r.getTweens(), a = r.data.length, l; a--; )
                    l = r.data[a],
                    l.data === "isFlip" && (l.revert(),
                        l.getChildren(!0, !0, !1).forEach(function(h) {
                            return o.splice(o.indexOf(h), 1)
                        }));
                for (o.map(function(h) {
                    return {
                        g: h._dur || h._delay || h._sat && !h._sat.vars.immediateRender ? h.globalTime(0) : -1 / 0,
                        t: h
                    }
                }).sort(function(h, c) {
                    return c.g - h.g || -1 / 0
                }).forEach(function(h) {
                    return h.t.revert(i)
                }),
                         a = r.data.length; a--; )
                    l = r.data[a],
                        l instanceof ie ? l.data !== "nested" && (l.scrollTrigger && l.scrollTrigger.revert(),
                            l.kill()) : !(l instanceof Et) && l.revert && l.revert(i);
                r._r.forEach(function(h) {
                    return h(i, r)
                }),
                    r.isReverted = !0
            }() : this.data.forEach(function(o) {
                return o.kill && o.kill()
            }),
                this.clear(),
                s)
                for (var n = Ki.length; n--; )
                    Ki[n].id === this.id && Ki.splice(n, 1)
        }
        ,
        t.revert = function(i) {
            this.kill(i || {})
        }
        ,
        u
}()
    , oh = function() {
    function u(e) {
        this.contexts = [],
            this.scope = e,
        ct && ct.data.push(this)
    }
    var t = u.prototype;
    return t.add = function(i, s, r) {
        ii(i) || (i = {
            matches: i
        });
        var n = new pu(0,r || this.scope), o = n.conditions = {}, a, l, h;
        ct && !n.selector && (n.selector = ct.selector),
            this.contexts.push(n),
            s = n.add("onMatch", s),
            n.queries = i;
        for (l in i)
            l === "all" ? h = 1 : (a = Ge.matchMedia(i[l]),
            a && (Ki.indexOf(n) < 0 && Ki.push(n),
            (o[l] = a.matches) && (h = 1),
                a.addListener ? a.addListener(Hn) : a.addEventListener("change", Hn)));
        return h && s(n, function(c) {
            return n.add(null, c)
        }),
            this
    }
        ,
        t.revert = function(i) {
            this.kill(i || {})
        }
        ,
        t.kill = function(i) {
            this.contexts.forEach(function(s) {
                return s.kill(i, !0)
            })
        }
        ,
        u
}()
    , Zr = {
    registerPlugin: function() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
        e.forEach(function(s) {
            return Ja(s)
        })
    },
    timeline: function(t) {
        return new ie(t)
    },
    getTweensOf: function(t, e) {
        return pt.getTweensOf(t, e)
    },
    getProperty: function(t, e, i, s) {
        zt(t) && (t = Le(t)[0]);
        var r = Xi(t || {}).get
            , n = i ? Wa : Na;
        return i === "native" && (i = ""),
        t && (e ? n((ye[e] && ye[e].get || r)(t, e, i, s)) : function(o, a, l) {
                return n((ye[o] && ye[o].get || r)(t, o, a, l))
            }
        )
    },
    quickSetter: function(t, e, i) {
        if (t = Le(t),
        t.length > 1) {
            var s = t.map(function(h) {
                return oe.quickSetter(h, e, i)
            })
                , r = s.length;
            return function(h) {
                for (var c = r; c--; )
                    s[c](h)
            }
        }
        t = t[0] || {};
        var n = ye[e]
            , o = Xi(t)
            , a = o.harness && (o.harness.aliases || {})[e] || e
            , l = n ? function(h) {
                var c = new n;
                Ds._pt = 0,
                    c.init(t, i ? h + i : h, Ds, 0, [t]),
                    c.render(1, c),
                Ds._pt && vo(1, Ds)
            }
            : o.set(t, a);
        return n ? l : function(h) {
            return l(t, a, i ? h + i : h, o, 1)
        }
    },
    quickTo: function(t, e, i) {
        var s, r = oe.to(t, ts((s = {},
            s[e] = "+=0.1",
            s.paused = !0,
            s), i || {})), n = function(a, l, h) {
            return r.resetTo(e, a, l, h)
        };
        return n.tween = r,
            n
    },
    isTweening: function(t) {
        return pt.getTweensOf(t, !0).length > 0
    },
    defaults: function(t) {
        return t && t.ease && (t.ease = Ui(t.ease, Es.ease)),
            Bo(Es, t || {})
    },
    config: function(t) {
        return Bo(Se, t || {})
    },
    registerEffect: function(t) {
        var e = t.name
            , i = t.effect
            , s = t.plugins
            , r = t.defaults
            , n = t.extendTimeline;
        (s || "").split(",").forEach(function(o) {
            return o && !ye[o] && !Ee[o] && ar(e + " effect requires " + o + " plugin.")
        }),
            gn[e] = function(o, a, l) {
                return i(Le(o), Re(a || {}, r), l)
            }
            ,
        n && (ie.prototype[e] = function(o, a, l) {
                return this.add(gn[e](o, ii(a) ? a : (l = a) && {}, this), l)
            }
        )
    },
    registerEase: function(t, e) {
        tt[t] = Ui(e)
    },
    parseEase: function(t, e) {
        return arguments.length ? Ui(t, e) : tt
    },
    getById: function(t) {
        return pt.getById(t)
    },
    exportRoot: function(t, e) {
        t === void 0 && (t = {});
        var i = new ie(t), s, r;
        for (i.smoothChildTiming = he(t.smoothChildTiming),
                 pt.remove(i),
                 i._dp = 0,
                 i._time = i._tTime = pt._time,
                 s = pt._first; s; )
            r = s._next,
            (e || !(!s._dur && s instanceof Et && s.vars.onComplete === s._targets[0])) && Ke(i, s, s._start - s._delay),
                s = r;
        return Ke(pt, i, 0),
            i
    },
    context: function(t, e) {
        return t ? new pu(t,e) : ct
    },
    matchMedia: function(t) {
        return new oh(t)
    },
    matchMediaRefresh: function() {
        return Ki.forEach(function(t) {
            var e = t.conditions, i, s;
            for (s in e)
                e[s] && (e[s] = !1,
                    i = 1);
            i && t.revert()
        }) || Hn()
    },
    addEventListener: function(t, e) {
        var i = Ir[t] || (Ir[t] = []);
        ~i.indexOf(e) || i.push(e)
    },
    removeEventListener: function(t, e) {
        var i = Ir[t]
            , s = i && i.indexOf(e);
        s >= 0 && i.splice(s, 1)
    },
    utils: {
        wrap: Il,
        wrapYoyo: Nl,
        distribute: Xa,
        random: Ua,
        snap: Ga,
        normalize: Bl,
        getUnit: Vt,
        clamp: Ll,
        splitColor: tu,
        toArray: Le,
        selector: Wn,
        mapRange: Za,
        pipe: Rl,
        unitize: zl,
        interpolate: Wl,
        shuffle: Va
    },
    install: Oa,
    effects: gn,
    ticker: ve,
    updateRoot: ie.updateRoot,
    plugins: ye,
    globalTimeline: pt,
    core: {
        PropTween: fe,
        globals: Ra,
        Tween: Et,
        Timeline: ie,
        Animation: cr,
        getCache: Xi,
        _removeLinkedListItem: an,
        reverting: function() {
            return Xt
        },
        context: function(t) {
            return t && ct && (ct.data.push(t),
                t._ctx = ct),
                ct
        },
        suppressOverwrites: function(t) {
            return ao = t
        }
    }
};
ce("to,from,fromTo,delayedCall,set,killTweensOf", function(u) {
    return Zr[u] = Et[u]
});
ve.add(ie.updateRoot);
Ds = Zr.to({}, {
    duration: 0
});
var ah = function(t, e) {
    for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
        i = i._next;
    return i
}
    , uh = function(t, e) {
    var i = t._targets, s, r, n;
    for (s in e)
        for (r = i.length; r--; )
            n = t._ptLookup[r][s],
            n && (n = n.d) && (n._pt && (n = ah(n, s)),
            n && n.modifier && n.modifier(e[s], t, i[r], s))
}
    , vn = function(t, e) {
    return {
        name: t,
        rawVars: 1,
        init: function(s, r, n) {
            n._onInit = function(o) {
                var a, l;
                if (zt(r) && (a = {},
                    ce(r, function(h) {
                        return a[h] = 1
                    }),
                    r = a),
                    e) {
                    a = {};
                    for (l in r)
                        a[l] = e(r[l]);
                    r = a
                }
                uh(o, r)
            }
        }
    }
}
    , oe = Zr.registerPlugin({
    name: "attr",
    init: function(t, e, i, s, r) {
        var n, o, a;
        this.tween = i;
        for (n in e)
            a = t.getAttribute(n) || "",
                o = this.add(t, "setAttribute", (a || 0) + "", e[n], s, r, 0, 0, n),
                o.op = n,
                o.b = a,
                this._props.push(n)
    },
    render: function(t, e) {
        for (var i = e._pt; i; )
            Xt ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d),
                i = i._next
    }
}, {
    name: "endArray",
    init: function(t, e) {
        for (var i = e.length; i--; )
            this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1)
    }
}, vn("roundProps", $n), vn("modifiers"), vn("snap", Ga)) || Zr;
Et.version = ie.version = oe.version = "3.12.5";
La = 1;
lo() && Ps();
tt.Power0;
tt.Power1;
tt.Power2;
tt.Power3;
tt.Power4;
tt.Linear;
tt.Quad;
tt.Cubic;
tt.Quart;
tt.Quint;
tt.Strong;
tt.Elastic;
tt.Back;
tt.SteppedEase;
tt.Bounce;
tt.Sine;
tt.Expo;
tt.Circ;
class lh {
    constructor() {
        this.callbacks = [],
            this.delta = 0
    }
    init() {
        oe.ticker.add(this.tick.bind(this))
    }
    tick(t, e) {
        const i = this;
        this.delta = e,
            this.callbacks.forEach( (s, r) => {
                    s.callback.apply(s.context),
                        delete i.callbacks[r]
                }
            ),
            $.emit("tick", t * 1e3)
    }
    nextTick(t, e) {
        this.callbacks.push({
            callback: t,
            context: e
        })
    }
}
const xe = new lh;
function gu(u, t, e) {
    return Math.max(u, Math.min(t, e))
}
class hh {
    constructor() {
        this.isRunning = !1,
            this.value = 0,
            this.from = 0,
            this.to = 0,
            this.currentTime = 0
    }
    advance(t) {
        var e;
        if (!this.isRunning)
            return;
        let i = !1;
        if (this.duration && this.easing) {
            this.currentTime += t;
            const s = gu(0, this.currentTime / this.duration, 1);
            i = s >= 1;
            const r = i ? 1 : this.easing(s);
            this.value = this.from + (this.to - this.from) * r
        } else
            this.lerp ? (this.value = function(r, n, o, a) {
                return function(h, c, p) {
                    return (1 - p) * h + p * c
                }(r, n, 1 - Math.exp(-o * a))
            }(this.value, this.to, 60 * this.lerp, t),
            Math.round(this.value) === this.to && (this.value = this.to,
                i = !0)) : (this.value = this.to,
                i = !0);
        i && this.stop(),
        (e = this.onUpdate) === null || e === void 0 || e.call(this, this.value, i)
    }
    stop() {
        this.isRunning = !1
    }
    fromTo(t, e, {lerp: i, duration: s, easing: r, onStart: n, onUpdate: o}) {
        this.from = this.value = t,
            this.to = e,
            this.lerp = i,
            this.duration = s,
            this.easing = r,
            this.currentTime = 0,
            this.isRunning = !0,
            n?.(),
            this.onUpdate = o
    }
}
class ch {
    constructor(t, e, {autoResize: i=!0, debounce: s=250}={}) {
        this.wrapper = t,
            this.content = e,
            this.width = 0,
            this.height = 0,
            this.scrollHeight = 0,
            this.scrollWidth = 0,
            this.resize = () => {
                this.onWrapperResize(),
                    this.onContentResize()
            }
            ,
            this.onWrapperResize = () => {
                this.wrapper instanceof Window ? (this.width = window.innerWidth,
                    this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth,
                    this.height = this.wrapper.clientHeight)
            }
            ,
            this.onContentResize = () => {
                this.wrapper instanceof Window ? (this.scrollHeight = this.content.scrollHeight,
                    this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight,
                    this.scrollWidth = this.wrapper.scrollWidth)
            }
            ,
        i && (this.debouncedResize = function(n, o) {
            let a;
            return function(...l) {
                let h = this;
                clearTimeout(a),
                    a = setTimeout( () => {
                            a = void 0,
                                n.apply(h, l)
                        }
                        , o)
            }
        }(this.resize, s),
            this.wrapper instanceof Window ? window.addEventListener("resize", this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize),
                this.wrapperResizeObserver.observe(this.wrapper)),
            this.contentResizeObserver = new ResizeObserver(this.debouncedResize),
            this.contentResizeObserver.observe(this.content)),
            this.resize()
    }
    destroy() {
        var t, e;
        (t = this.wrapperResizeObserver) === null || t === void 0 || t.disconnect(),
        (e = this.contentResizeObserver) === null || e === void 0 || e.disconnect(),
        this.wrapper === window && this.debouncedResize && window.removeEventListener("resize", this.debouncedResize, !1)
    }
    get limit() {
        return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height
        }
    }
}
class _u {
    constructor() {
        this.events = {}
    }
    emit(t, ...e) {
        var i;
        let s = this.events[t] || [];
        for (let r = 0, n = s.length; r < n; r++)
            (i = s[r]) === null || i === void 0 || i.call(s, ...e)
    }
    on(t, e) {
        var i;
        return !((i = this.events[t]) === null || i === void 0) && i.push(e) || (this.events[t] = [e]),
            () => {
                var s;
                this.events[t] = (s = this.events[t]) === null || s === void 0 ? void 0 : s.filter(r => e !== r)
            }
    }
    off(t, e) {
        var i;
        this.events[t] = (i = this.events[t]) === null || i === void 0 ? void 0 : i.filter(s => e !== s)
    }
    destroy() {
        this.events = {}
    }
}
const Ho = 100 / 6
    , vi = {
    passive: !1
};
class fh {
    constructor(t, e={
        wheelMultiplier: 1,
        touchMultiplier: 1
    }) {
        this.element = t,
            this.options = e,
            this.touchStart = {
                x: 0,
                y: 0
            },
            this.lastDelta = {
                x: 0,
                y: 0
            },
            this.window = {
                width: 0,
                height: 0
            },
            this.emitter = new _u,
            this.onTouchStart = i => {
                const {clientX: s, clientY: r} = i.targetTouches ? i.targetTouches[0] : i;
                this.touchStart.x = s,
                    this.touchStart.y = r,
                    this.lastDelta = {
                        x: 0,
                        y: 0
                    },
                    this.emitter.emit("scroll", {
                        deltaX: 0,
                        deltaY: 0,
                        event: i
                    })
            }
            ,
            this.onTouchMove = i => {
                const {clientX: s, clientY: r} = i.targetTouches ? i.targetTouches[0] : i
                    , n = -(s - this.touchStart.x) * this.options.touchMultiplier
                    , o = -(r - this.touchStart.y) * this.options.touchMultiplier;
                this.touchStart.x = s,
                    this.touchStart.y = r,
                    this.lastDelta = {
                        x: n,
                        y: o
                    },
                    this.emitter.emit("scroll", {
                        deltaX: n,
                        deltaY: o,
                        event: i
                    })
            }
            ,
            this.onTouchEnd = i => {
                this.emitter.emit("scroll", {
                    deltaX: this.lastDelta.x,
                    deltaY: this.lastDelta.y,
                    event: i
                })
            }
            ,
            this.onWheel = i => {
                let {deltaX: s, deltaY: r, deltaMode: n} = i;
                s *= n === 1 ? Ho : n === 2 ? this.window.width : 1,
                    r *= n === 1 ? Ho : n === 2 ? this.window.height : 1,
                    s *= this.options.wheelMultiplier,
                    r *= this.options.wheelMultiplier,
                    this.emitter.emit("scroll", {
                        deltaX: s,
                        deltaY: r,
                        event: i
                    })
            }
            ,
            this.onWindowResize = () => {
                this.window = {
                    width: window.innerWidth,
                    height: window.innerHeight
                }
            }
            ,
            window.addEventListener("resize", this.onWindowResize, !1),
            this.onWindowResize(),
            this.element.addEventListener("wheel", this.onWheel, vi),
            this.element.addEventListener("touchstart", this.onTouchStart, vi),
            this.element.addEventListener("touchmove", this.onTouchMove, vi),
            this.element.addEventListener("touchend", this.onTouchEnd, vi)
    }
    on(t, e) {
        return this.emitter.on(t, e)
    }
    destroy() {
        this.emitter.destroy(),
            window.removeEventListener("resize", this.onWindowResize, !1),
            this.element.removeEventListener("wheel", this.onWheel, vi),
            this.element.removeEventListener("touchstart", this.onTouchStart, vi),
            this.element.removeEventListener("touchmove", this.onTouchMove, vi),
            this.element.removeEventListener("touchend", this.onTouchEnd, vi)
    }
}
class dh {
    constructor({wrapper: t=window, content: e=document.documentElement, eventsTarget: i=t, smoothWheel: s=!0, syncTouch: r=!1, syncTouchLerp: n=.075, touchInertiaMultiplier: o=35, duration: a, easing: l=y => Math.min(1, 1.001 - Math.pow(2, -10 * y)), lerp: h=.1, infinite: c=!1, orientation: p="vertical", gestureOrientation: f="vertical", touchMultiplier: g=1, wheelMultiplier: d=1, autoResize: _=!0, prevent: D, virtualScroll: v, __experimental__naiveDimensions: w=!1}={}) {
        this._isScrolling = !1,
            this._isStopped = !1,
            this._isLocked = !1,
            this._preventNextNativeScrollEvent = !1,
            this._resetVelocityTimeout = null,
            this.time = 0,
            this.userData = {},
            this.lastVelocity = 0,
            this.velocity = 0,
            this.direction = 0,
            this.animate = new hh,
            this.emitter = new _u,
            this.onPointerDown = y => {
                y.button === 1 && this.reset()
            }
            ,
            this.onVirtualScroll = y => {
                if (typeof this.options.virtualScroll == "function" && this.options.virtualScroll(y) === !1)
                    return;
                const {deltaX: b, deltaY: S, event: x} = y;
                if (this.emitter.emit("virtual-scroll", {
                    deltaX: b,
                    deltaY: S,
                    event: x
                }),
                    x.ctrlKey)
                    return;
                const F = x.type.includes("touch")
                    , T = x.type.includes("wheel");
                if (this.isTouching = x.type === "touchstart" || x.type === "touchmove",
                this.options.syncTouch && F && x.type === "touchstart" && !this.isStopped && !this.isLocked)
                    return void this.reset();
                const P = b === 0 && S === 0
                    , z = this.options.gestureOrientation === "vertical" && S === 0 || this.options.gestureOrientation === "horizontal" && b === 0;
                if (P || z)
                    return;
                let k = x.composedPath();
                k = k.slice(0, k.indexOf(this.rootElement));
                const W = this.options.prevent;
                if (k.find(M => {
                        var N, E, m, X, nt;
                        return M instanceof HTMLElement && (typeof W == "function" && W?.(M) || ((N = M.hasAttribute) === null || N === void 0 ? void 0 : N.call(M, "data-lenis-prevent")) || F && ((E = M.hasAttribute) === null || E === void 0 ? void 0 : E.call(M, "data-lenis-prevent-touch")) || T && ((m = M.hasAttribute) === null || m === void 0 ? void 0 : m.call(M, "data-lenis-prevent-wheel")) || ((X = M.classList) === null || X === void 0 ? void 0 : X.contains("lenis")) && !(!((nt = M.classList) === null || nt === void 0) && nt.contains("lenis-stopped")))
                    }
                ))
                    return;
                if (this.isStopped || this.isLocked)
                    return void x.preventDefault();
                if (!(this.options.syncTouch && F || this.options.smoothWheel && T))
                    return this.isScrolling = "native",
                        void this.animate.stop();
                x.preventDefault();
                let I = S;
                this.options.gestureOrientation === "both" ? I = Math.abs(S) > Math.abs(b) ? S : b : this.options.gestureOrientation === "horizontal" && (I = b);
                const V = F && this.options.syncTouch
                    , L = F && x.type === "touchend" && Math.abs(I) > 5;
                L && (I = this.velocity * this.options.touchInertiaMultiplier),
                    this.scrollTo(this.targetScroll + I, Object.assign({
                        programmatic: !1
                    }, V ? {
                        lerp: L ? this.options.syncTouchLerp : 1
                    } : {
                        lerp: this.options.lerp,
                        duration: this.options.duration,
                        easing: this.options.easing
                    }))
            }
            ,
            this.onNativeScroll = () => {
                if (this._resetVelocityTimeout !== null && (clearTimeout(this._resetVelocityTimeout),
                    this._resetVelocityTimeout = null),
                    this._preventNextNativeScrollEvent)
                    this._preventNextNativeScrollEvent = !1;
                else if (this.isScrolling === !1 || this.isScrolling === "native") {
                    const y = this.animatedScroll;
                    this.animatedScroll = this.targetScroll = this.actualScroll,
                        this.lastVelocity = this.velocity,
                        this.velocity = this.animatedScroll - y,
                        this.direction = Math.sign(this.animatedScroll - y),
                        this.isScrolling = "native",
                        this.emit(),
                    this.velocity !== 0 && (this._resetVelocityTimeout = setTimeout( () => {
                            this.lastVelocity = this.velocity,
                                this.velocity = 0,
                                this.isScrolling = !1,
                                this.emit()
                        }
                        , 400))
                }
            }
            ,
            window.lenisVersion = "1.1.13",
        t && t !== document.documentElement && t !== document.body || (t = window),
            this.options = {
                wrapper: t,
                content: e,
                eventsTarget: i,
                smoothWheel: s,
                syncTouch: r,
                syncTouchLerp: n,
                touchInertiaMultiplier: o,
                duration: a,
                easing: l,
                lerp: h,
                infinite: c,
                gestureOrientation: f,
                orientation: p,
                touchMultiplier: g,
                wheelMultiplier: d,
                autoResize: _,
                prevent: D,
                virtualScroll: v,
                __experimental__naiveDimensions: w
            },
            this.dimensions = new ch(t,e,{
                autoResize: _
            }),
            this.updateClassName(),
            this.targetScroll = this.animatedScroll = this.actualScroll,
            this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1),
            this.options.wrapper.addEventListener("pointerdown", this.onPointerDown, !1),
            this.virtualScroll = new fh(i,{
                touchMultiplier: g,
                wheelMultiplier: d
            }),
            this.virtualScroll.on("scroll", this.onVirtualScroll)
    }
    destroy() {
        this.emitter.destroy(),
            this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, !1),
            this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown, !1),
            this.virtualScroll.destroy(),
            this.dimensions.destroy(),
            this.cleanUpClassName()
    }
    on(t, e) {
        return this.emitter.on(t, e)
    }
    off(t, e) {
        return this.emitter.off(t, e)
    }
    setScroll(t) {
        this.isHorizontal ? this.rootElement.scrollLeft = t : this.rootElement.scrollTop = t
    }
    resize() {
        this.dimensions.resize(),
            this.animatedScroll = this.targetScroll = this.actualScroll,
            this.emit()
    }
    emit() {
        this.emitter.emit("scroll", this)
    }
    reset() {
        this.isLocked = !1,
            this.isScrolling = !1,
            this.animatedScroll = this.targetScroll = this.actualScroll,
            this.lastVelocity = this.velocity = 0,
            this.animate.stop()
    }
    start() {
        this.isStopped && (this.isStopped = !1,
            this.reset())
    }
    stop() {
        this.isStopped || (this.isStopped = !0,
            this.animate.stop(),
            this.reset())
    }
    raf(t) {
        const e = t - (this.time || t);
        this.time = t,
            this.animate.advance(.001 * e)
    }
    scrollTo(t, {offset: e=0, immediate: i=!1, lock: s=!1, duration: r=this.options.duration, easing: n=this.options.easing, lerp: o=this.options.lerp, onStart: a, onComplete: l, force: h=!1, programmatic: c=!0, userData: p}={}) {
        if (!this.isStopped && !this.isLocked || h) {
            if (typeof t == "string" && ["top", "left", "start"].includes(t))
                t = 0;
            else if (typeof t == "string" && ["bottom", "right", "end"].includes(t))
                t = this.limit;
            else {
                let f;
                if (typeof t == "string" ? f = document.querySelector(t) : t instanceof HTMLElement && t?.nodeType && (f = t),
                    f) {
                    if (this.options.wrapper !== window) {
                        const d = this.rootElement.getBoundingClientRect();
                        e -= this.isHorizontal ? d.left : d.top
                    }
                    const g = f.getBoundingClientRect();
                    t = (this.isHorizontal ? g.left : g.top) + this.animatedScroll
                }
            }
            if (typeof t == "number") {
                if (t += e,
                    t = Math.round(t),
                    this.options.infinite ? c && (this.targetScroll = this.animatedScroll = this.scroll) : t = gu(0, t, this.limit),
                t === this.targetScroll)
                    return a?.(this),
                        void (l == null || l(this));
                if (this.userData = p ?? {},
                    i)
                    return this.animatedScroll = this.targetScroll = t,
                        this.setScroll(this.scroll),
                        this.reset(),
                        this.preventNextNativeScrollEvent(),
                        this.emit(),
                        l?.(this),
                        void (this.userData = {});
                c || (this.targetScroll = t),
                    this.animate.fromTo(this.animatedScroll, t, {
                        duration: r,
                        easing: n,
                        lerp: o,
                        onStart: () => {
                            s && (this.isLocked = !0),
                                this.isScrolling = "smooth",
                                a?.(this)
                        }
                        ,
                        onUpdate: (f, g) => {
                            this.isScrolling = "smooth",
                                this.lastVelocity = this.velocity,
                                this.velocity = f - this.animatedScroll,
                                this.direction = Math.sign(this.velocity),
                                this.animatedScroll = f,
                                this.setScroll(this.scroll),
                            c && (this.targetScroll = f),
                            g || this.emit(),
                            g && (this.reset(),
                                this.emit(),
                                l?.(this),
                                this.userData = {},
                                this.preventNextNativeScrollEvent())
                        }
                    })
            }
        }
    }
    preventNextNativeScrollEvent() {
        this._preventNextNativeScrollEvent = !0,
            requestAnimationFrame( () => {
                    this._preventNextNativeScrollEvent = !1
                }
            )
    }
    get rootElement() {
        return this.options.wrapper === window ? document.documentElement : this.options.wrapper
    }
    get limit() {
        return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"]
    }
    get isHorizontal() {
        return this.options.orientation === "horizontal"
    }
    get actualScroll() {
        return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
    }
    get scroll() {
        return this.options.infinite ? function(e, i) {
            return (e % i + i) % i
        }(this.animatedScroll, this.limit) : this.animatedScroll
    }
    get progress() {
        return this.limit === 0 ? 1 : this.scroll / this.limit
    }
    get isScrolling() {
        return this._isScrolling
    }
    set isScrolling(t) {
        this._isScrolling !== t && (this._isScrolling = t,
            this.updateClassName())
    }
    get isStopped() {
        return this._isStopped
    }
    set isStopped(t) {
        this._isStopped !== t && (this._isStopped = t,
            this.updateClassName())
    }
    get isLocked() {
        return this._isLocked
    }
    set isLocked(t) {
        this._isLocked !== t && (this._isLocked = t,
            this.updateClassName())
    }
    get isSmooth() {
        return this.isScrolling === "smooth"
    }
    get className() {
        let t = "lenis";
        return this.isStopped && (t += " lenis-stopped"),
        this.isLocked && (t += " lenis-locked"),
        this.isScrolling && (t += " lenis-scrolling"),
        this.isScrolling === "smooth" && (t += " lenis-smooth"),
            t
    }
    updateClassName() {
        this.cleanUpClassName(),
            this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim()
    }
    cleanUpClassName() {
        this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim()
    }
}
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var qo, bi, xs, xo, ji, jo, wo, ph = function() {
    return typeof window < "u"
}, di = {}, $i = 180 / Math.PI, ws = Math.PI / 180, cs = Math.atan2, Vo = 1e8, bo = /([A-Z])/g, gh = /(left|right|width|margin|padding|x)/i, _h = /[\s,\(]\S/, Ze = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
}, qn = function(t, e) {
    return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
}, Dh = function(t, e) {
    return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
}, mh = function(t, e) {
    return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e)
}, yh = function(t, e) {
    var i = e.s + e.c * t;
    e.set(e.t, e.p, ~~(i + (i < 0 ? -.5 : .5)) + e.u, e)
}, Du = function(t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e)
}, mu = function(t, e) {
    return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e)
}, vh = function(t, e, i) {
    return t.style[e] = i
}, xh = function(t, e, i) {
    return t.style.setProperty(e, i)
}, wh = function(t, e, i) {
    return t._gsap[e] = i
}, bh = function(t, e, i) {
    return t._gsap.scaleX = t._gsap.scaleY = i
}, Ch = function(t, e, i, s, r) {
    var n = t._gsap;
    n.scaleX = n.scaleY = i,
        n.renderTransform(r, n)
}, Sh = function(t, e, i, s, r) {
    var n = t._gsap;
    n[e] = i,
        n.renderTransform(r, n)
}, gt = "transform", de = gt + "Origin", Eh = function u(t, e) {
    var i = this
        , s = this.target
        , r = s.style
        , n = s._gsap;
    if (t in di && r) {
        if (this.tfm = this.tfm || {},
        t !== "transform")
            t = Ze[t] || t,
                ~t.indexOf(",") ? t.split(",").forEach(function(o) {
                    return i.tfm[o] = ai(s, o)
                }) : this.tfm[t] = n.x ? n[t] : ai(s, t),
            t === de && (this.tfm.zOrigin = n.zOrigin);
        else
            return Ze.transform.split(",").forEach(function(o) {
                return u.call(i, o, e)
            });
        if (this.props.indexOf(gt) >= 0)
            return;
        n.svg && (this.svgo = s.getAttribute("data-svg-origin"),
            this.props.push(de, e, "")),
            t = gt
    }
    (r || e) && this.props.push(t, e, r[t])
}, yu = function(t) {
    t.translate && (t.removeProperty("translate"),
        t.removeProperty("scale"),
        t.removeProperty("rotate"))
}, Th = function() {
    var t = this.props, e = this.target, i = e.style, s = e._gsap, r, n;
    for (r = 0; r < t.length; r += 3)
        t[r + 1] ? e[t[r]] = t[r + 2] : t[r + 2] ? i[t[r]] = t[r + 2] : i.removeProperty(t[r].substr(0, 2) === "--" ? t[r] : t[r].replace(bo, "-$1").toLowerCase());
    if (this.tfm) {
        for (n in this.tfm)
            s[n] = this.tfm[n];
        s.svg && (s.renderTransform(),
            e.setAttribute("data-svg-origin", this.svgo || "")),
            r = wo(),
        (!r || !r.isStart) && !i[gt] && (yu(i),
        s.zOrigin && i[de] && (i[de] += " " + s.zOrigin + "px",
            s.zOrigin = 0,
            s.renderTransform()),
            s.uncache = 1)
    }
}, vu = function(t, e) {
    var i = {
        target: t,
        props: [],
        revert: Th,
        save: Eh
    };
    return t._gsap || oe.core.getCache(t),
    e && e.split(",").forEach(function(s) {
        return i.save(s)
    }),
        i
}, xu, jn = function(t, e) {
    var i = bi.createElementNS ? bi.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : bi.createElement(t);
    return i && i.style ? i : bi.createElement(t)
}, ti = function u(t, e, i) {
    var s = getComputedStyle(t);
    return s[e] || s.getPropertyValue(e.replace(bo, "-$1").toLowerCase()) || s.getPropertyValue(e) || !i && u(t, ks(e) || e, 1) || ""
}, Xo = "O,Moz,ms,Ms,Webkit".split(","), ks = function(t, e, i) {
    var s = e || ji
        , r = s.style
        , n = 5;
    if (t in r && !i)
        return t;
    for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(Xo[n] + t in r); )
        ;
    return n < 0 ? null : (n === 3 ? "ms" : n >= 0 ? Xo[n] : "") + t
}, Vn = function() {
    ph() && window.document && (qo = window,
        bi = qo.document,
        xs = bi.documentElement,
        ji = jn("div") || {
            style: {}
        },
        jn("div"),
        gt = ks(gt),
        de = gt + "Origin",
        ji.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
        xu = !!ks("perspective"),
        wo = oe.core.reverting,
        xo = 1)
}, xn = function u(t) {
    var e = jn("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = this.parentNode, s = this.nextSibling, r = this.style.cssText, n;
    if (xs.appendChild(e),
        e.appendChild(this),
        this.style.display = "block",
        t)
        try {
            n = this.getBBox(),
                this._gsapBBox = this.getBBox,
                this.getBBox = u
        } catch {}
    else
        this._gsapBBox && (n = this._gsapBBox());
    return i && (s ? i.insertBefore(this, s) : i.appendChild(this)),
        xs.removeChild(e),
        this.style.cssText = r,
        n
}, Go = function(t, e) {
    for (var i = e.length; i--; )
        if (t.hasAttribute(e[i]))
            return t.getAttribute(e[i])
}, wu = function(t) {
    var e;
    try {
        e = t.getBBox()
    } catch {
        e = xn.call(t, !0)
    }
    return e && (e.width || e.height) || t.getBBox === xn || (e = xn.call(t, !0)),
        e && !e.width && !e.x && !e.y ? {
            x: +Go(t, ["x", "cx", "x1"]) || 0,
            y: +Go(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        } : e
}, bu = function(t) {
    return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && wu(t))
}, es = function(t, e) {
    if (e) {
        var i = t.style, s;
        e in di && e !== de && (e = gt),
            i.removeProperty ? (s = e.substr(0, 2),
            (s === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e),
                i.removeProperty(s === "--" ? e : e.replace(bo, "-$1").toLowerCase())) : i.removeAttribute(e)
    }
}, Ci = function(t, e, i, s, r, n) {
    var o = new fe(t._pt,e,i,0,1,n ? mu : Du);
    return t._pt = o,
        o.b = s,
        o.e = r,
        t._props.push(i),
        o
}, Uo = {
    deg: 1,
    rad: 1,
    turn: 1
}, Fh = {
    grid: 1,
    flex: 1
}, Mi = function u(t, e, i, s) {
    var r = parseFloat(i) || 0, n = (i + "").trim().substr((r + "").length) || "px", o = ji.style, a = gh.test(e), l = t.tagName.toLowerCase() === "svg", h = (l ? "client" : "offset") + (a ? "Width" : "Height"), c = 100, p = s === "px", f = s === "%", g, d, _, D;
    if (s === n || !r || Uo[s] || Uo[n])
        return r;
    if (n !== "px" && !p && (r = u(t, e, i, "px")),
        D = t.getCTM && bu(t),
    (f || n === "%") && (di[e] || ~e.indexOf("adius")))
        return g = D ? t.getBBox()[a ? "width" : "height"] : t[h],
            xt(f ? r / g * c : r / 100 * g);
    if (o[a ? "width" : "height"] = c + (p ? n : s),
        d = ~e.indexOf("adius") || s === "em" && t.appendChild && !l ? t : t.parentNode,
    D && (d = (t.ownerSVGElement || {}).parentNode),
    (!d || d === bi || !d.appendChild) && (d = bi.body),
        _ = d._gsap,
    _ && f && _.width && a && _.time === ve.time && !_.uncache)
        return xt(r / _.width * c);
    if (f && (e === "height" || e === "width")) {
        var v = t.style[e];
        t.style[e] = c + s,
            g = t[h],
            v ? t.style[e] = v : es(t, e)
    } else
        (f || n === "%") && !Fh[ti(d, "display")] && (o.position = ti(t, "position")),
        d === t && (o.position = "static"),
            d.appendChild(ji),
            g = ji[h],
            d.removeChild(ji),
            o.position = "absolute";
    return a && f && (_ = Xi(d),
        _.time = ve.time,
        _.width = d[h]),
        xt(p ? g * r / c : g && r ? c / g * r : 0)
}, ai = function(t, e, i, s) {
    var r;
    return xo || Vn(),
    e in Ze && e !== "transform" && (e = Ze[e],
    ~e.indexOf(",") && (e = e.split(",")[0])),
        di[e] && e !== "transform" ? (r = dr(t, s),
            r = e !== "transformOrigin" ? r[e] : r.svg ? r.origin : Jr(ti(t, de)) + " " + r.zOrigin + "px") : (r = t.style[e],
        (!r || r === "auto" || s || ~(r + "").indexOf("calc(")) && (r = Qr[e] && Qr[e](t, e, i) || ti(t, e) || Ba(t, e) || (e === "opacity" ? 1 : 0))),
        i && !~(r + "").trim().indexOf(" ") ? Mi(t, e, r, i) + i : r
}, Ph = function(t, e, i, s) {
    if (!i || i === "none") {
        var r = ks(e, t, 1)
            , n = r && ti(t, r, 1);
        n && n !== i ? (e = r,
            i = n) : e === "borderColor" && (i = ti(t, "borderTopColor"))
    }
    var o = new fe(this._pt,t.style,e,0,1,fu), a = 0, l = 0, h, c, p, f, g, d, _, D, v, w, y, b;
    if (o.b = i,
        o.e = s,
        i += "",
        s += "",
    s === "auto" && (d = t.style[e],
        t.style[e] = s,
        s = ti(t, e) || s,
        d ? t.style[e] = d : es(t, e)),
        h = [i, s],
        iu(h),
        i = h[0],
        s = h[1],
        p = i.match(_s) || [],
        b = s.match(_s) || [],
        b.length) {
        for (; c = _s.exec(s); )
            _ = c[0],
                v = s.substring(a, c.index),
                g ? g = (g + 1) % 5 : (v.substr(-5) === "rgba(" || v.substr(-5) === "hsla(") && (g = 1),
            _ !== (d = p[l++] || "") && (f = parseFloat(d) || 0,
                y = d.substr((f + "").length),
            _.charAt(1) === "=" && (_ = vs(f, _) + y),
                D = parseFloat(_),
                w = _.substr((D + "").length),
                a = _s.lastIndex - w.length,
            w || (w = w || Se.units[e] || y,
            a === s.length && (s += w,
                o.e += w)),
            y !== w && (f = Mi(t, e, d, w) || 0),
                o._pt = {
                    _next: o._pt,
                    p: v || l === 1 ? v : ",",
                    s: f,
                    c: D - f,
                    m: g && g < 4 || e === "zIndex" ? Math.round : 0
                });
        o.c = a < s.length ? s.substring(a, s.length) : ""
    } else
        o.r = e === "display" && s === "none" ? mu : Du;
    return Ma.test(s) && (o.e = 0),
        this._pt = o,
        o
}, Ko = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
}, kh = function(t) {
    var e = t.split(" ")
        , i = e[0]
        , s = e[1] || "50%";
    return (i === "top" || i === "bottom" || s === "left" || s === "right") && (t = i,
        i = s,
        s = t),
        e[0] = Ko[i] || i,
        e[1] = Ko[s] || s,
        e.join(" ")
}, Mh = function(t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
        var i = e.t, s = i.style, r = e.u, n = i._gsap, o, a, l;
        if (r === "all" || r === !0)
            s.cssText = "",
                a = 1;
        else
            for (r = r.split(","),
                     l = r.length; --l > -1; )
                o = r[l],
                di[o] && (a = 1,
                    o = o === "transformOrigin" ? de : gt),
                    es(i, o);
        a && (es(i, gt),
        n && (n.svg && i.removeAttribute("transform"),
            dr(i, 1),
            n.uncache = 1,
            yu(s)))
    }
}, Qr = {
    clearProps: function(t, e, i, s, r) {
        if (r.data !== "isFromStart") {
            var n = t._pt = new fe(t._pt,e,i,0,0,Mh);
            return n.u = s,
                n.pr = -10,
                n.tween = r,
                t._props.push(i),
                1
        }
    }
}, fr = [1, 0, 0, 1, 0, 0], Cu = {}, Su = function(t) {
    return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t
}, Zo = function(t) {
    var e = ti(t, gt);
    return Su(e) ? fr : e.substr(7).match(ka).map(xt)
}, Co = function(t, e) {
    var i = t._gsap || Xi(t), s = t.style, r = Zo(t), n, o, a, l;
    return i.svg && t.getAttribute("transform") ? (a = t.transform.baseVal.consolidate().matrix,
        r = [a.a, a.b, a.c, a.d, a.e, a.f],
        r.join(",") === "1,0,0,1,0,0" ? fr : r) : (r === fr && !t.offsetParent && t !== xs && !i.svg && (a = s.display,
        s.display = "block",
        n = t.parentNode,
    (!n || !t.offsetParent) && (l = 1,
        o = t.nextElementSibling,
        xs.appendChild(t)),
        r = Zo(t),
        a ? s.display = a : es(t, "display"),
    l && (o ? n.insertBefore(t, o) : n ? n.appendChild(t) : xs.removeChild(t))),
        e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r)
}, Xn = function(t, e, i, s, r, n) {
    var o = t._gsap, a = r || Co(t, !0), l = o.xOrigin || 0, h = o.yOrigin || 0, c = o.xOffset || 0, p = o.yOffset || 0, f = a[0], g = a[1], d = a[2], _ = a[3], D = a[4], v = a[5], w = e.split(" "), y = parseFloat(w[0]) || 0, b = parseFloat(w[1]) || 0, S, x, F, T;
    i ? a !== fr && (x = f * _ - g * d) && (F = y * (_ / x) + b * (-d / x) + (d * v - _ * D) / x,
        T = y * (-g / x) + b * (f / x) - (f * v - g * D) / x,
        y = F,
        b = T) : (S = wu(t),
        y = S.x + (~w[0].indexOf("%") ? y / 100 * S.width : y),
        b = S.y + (~(w[1] || w[0]).indexOf("%") ? b / 100 * S.height : b)),
        s || s !== !1 && o.smooth ? (D = y - l,
            v = b - h,
            o.xOffset = c + (D * f + v * d) - D,
            o.yOffset = p + (D * g + v * _) - v) : o.xOffset = o.yOffset = 0,
        o.xOrigin = y,
        o.yOrigin = b,
        o.smooth = !!s,
        o.origin = e,
        o.originIsAbsolute = !!i,
        t.style[de] = "0px 0px",
    n && (Ci(n, o, "xOrigin", l, y),
        Ci(n, o, "yOrigin", h, b),
        Ci(n, o, "xOffset", c, o.xOffset),
        Ci(n, o, "yOffset", p, o.yOffset)),
        t.setAttribute("data-svg-origin", y + " " + b)
}, dr = function(t, e) {
    var i = t._gsap || new ou(t);
    if ("x"in i && !e && !i.uncache)
        return i;
    var s = t.style, r = i.scaleX < 0, n = "px", o = "deg", a = getComputedStyle(t), l = ti(t, de) || "0", h, c, p, f, g, d, _, D, v, w, y, b, S, x, F, T, P, z, k, W, I, V, L, M, N, E, m, X, nt, ae, et, U;
    return h = c = p = d = _ = D = v = w = y = 0,
        f = g = 1,
        i.svg = !!(t.getCTM && bu(t)),
    a.translate && ((a.translate !== "none" || a.scale !== "none" || a.rotate !== "none") && (s[gt] = (a.translate !== "none" ? "translate3d(" + (a.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (a.rotate !== "none" ? "rotate(" + a.rotate + ") " : "") + (a.scale !== "none" ? "scale(" + a.scale.split(" ").join(",") + ") " : "") + (a[gt] !== "none" ? a[gt] : "")),
        s.scale = s.rotate = s.translate = "none"),
        x = Co(t, i.svg),
    i.svg && (i.uncache ? (N = t.getBBox(),
        l = i.xOrigin - N.x + "px " + (i.yOrigin - N.y) + "px",
        M = "") : M = !e && t.getAttribute("data-svg-origin"),
        Xn(t, M || l, !!M || i.originIsAbsolute, i.smooth !== !1, x)),
        b = i.xOrigin || 0,
        S = i.yOrigin || 0,
    x !== fr && (z = x[0],
        k = x[1],
        W = x[2],
        I = x[3],
        h = V = x[4],
        c = L = x[5],
        x.length === 6 ? (f = Math.sqrt(z * z + k * k),
            g = Math.sqrt(I * I + W * W),
            d = z || k ? cs(k, z) * $i : 0,
            v = W || I ? cs(W, I) * $i + d : 0,
        v && (g *= Math.abs(Math.cos(v * ws))),
        i.svg && (h -= b - (b * z + S * W),
            c -= S - (b * k + S * I))) : (U = x[6],
            ae = x[7],
            m = x[8],
            X = x[9],
            nt = x[10],
            et = x[11],
            h = x[12],
            c = x[13],
            p = x[14],
            F = cs(U, nt),
            _ = F * $i,
        F && (T = Math.cos(-F),
            P = Math.sin(-F),
            M = V * T + m * P,
            N = L * T + X * P,
            E = U * T + nt * P,
            m = V * -P + m * T,
            X = L * -P + X * T,
            nt = U * -P + nt * T,
            et = ae * -P + et * T,
            V = M,
            L = N,
            U = E),
            F = cs(-W, nt),
            D = F * $i,
        F && (T = Math.cos(-F),
            P = Math.sin(-F),
            M = z * T - m * P,
            N = k * T - X * P,
            E = W * T - nt * P,
            et = I * P + et * T,
            z = M,
            k = N,
            W = E),
            F = cs(k, z),
            d = F * $i,
        F && (T = Math.cos(F),
            P = Math.sin(F),
            M = z * T + k * P,
            N = V * T + L * P,
            k = k * T - z * P,
            L = L * T - V * P,
            z = M,
            V = N),
        _ && Math.abs(_) + Math.abs(d) > 359.9 && (_ = d = 0,
            D = 180 - D),
            f = xt(Math.sqrt(z * z + k * k + W * W)),
            g = xt(Math.sqrt(L * L + U * U)),
            F = cs(V, L),
            v = Math.abs(F) > 2e-4 ? F * $i : 0,
            y = et ? 1 / (et < 0 ? -et : et) : 0),
    i.svg && (M = t.getAttribute("transform"),
        i.forceCSS = t.setAttribute("transform", "") || !Su(ti(t, gt)),
    M && t.setAttribute("transform", M))),
    Math.abs(v) > 90 && Math.abs(v) < 270 && (r ? (f *= -1,
        v += d <= 0 ? 180 : -180,
        d += d <= 0 ? 180 : -180) : (g *= -1,
        v += v <= 0 ? 180 : -180)),
        e = e || i.uncache,
        i.x = h - ((i.xPercent = h && (!e && i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-h) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + n,
        i.y = c - ((i.yPercent = c && (!e && i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-c) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + n,
        i.z = p + n,
        i.scaleX = xt(f),
        i.scaleY = xt(g),
        i.rotation = xt(d) + o,
        i.rotationX = xt(_) + o,
        i.rotationY = xt(D) + o,
        i.skewX = v + o,
        i.skewY = w + o,
        i.transformPerspective = y + n,
    (i.zOrigin = parseFloat(l.split(" ")[2]) || !e && i.zOrigin || 0) && (s[de] = Jr(l)),
        i.xOffset = i.yOffset = 0,
        i.force3D = Se.force3D,
        i.renderTransform = i.svg ? Lh : xu ? Eu : Ah,
        i.uncache = 0,
        i
}, Jr = function(t) {
    return (t = t.split(" "))[0] + " " + t[1]
}, wn = function(t, e, i) {
    var s = Vt(e);
    return xt(parseFloat(e) + parseFloat(Mi(t, "x", i + "px", s))) + s
}, Ah = function(t, e) {
    e.z = "0px",
        e.rotationY = e.rotationX = "0deg",
        e.force3D = 0,
        Eu(t, e)
}, Ni = "0deg", Bs = "0px", Wi = ") ", Eu = function(t, e) {
    var i = e || this
        , s = i.xPercent
        , r = i.yPercent
        , n = i.x
        , o = i.y
        , a = i.z
        , l = i.rotation
        , h = i.rotationY
        , c = i.rotationX
        , p = i.skewX
        , f = i.skewY
        , g = i.scaleX
        , d = i.scaleY
        , _ = i.transformPerspective
        , D = i.force3D
        , v = i.target
        , w = i.zOrigin
        , y = ""
        , b = D === "auto" && t && t !== 1 || D === !0;
    if (w && (c !== Ni || h !== Ni)) {
        var S = parseFloat(h) * ws, x = Math.sin(S), F = Math.cos(S), T;
        S = parseFloat(c) * ws,
            T = Math.cos(S),
            n = wn(v, n, x * T * -w),
            o = wn(v, o, -Math.sin(S) * -w),
            a = wn(v, a, F * T * -w + w)
    }
    _ !== Bs && (y += "perspective(" + _ + Wi),
    (s || r) && (y += "translate(" + s + "%, " + r + "%) "),
    (b || n !== Bs || o !== Bs || a !== Bs) && (y += a !== Bs || b ? "translate3d(" + n + ", " + o + ", " + a + ") " : "translate(" + n + ", " + o + Wi),
    l !== Ni && (y += "rotate(" + l + Wi),
    h !== Ni && (y += "rotateY(" + h + Wi),
    c !== Ni && (y += "rotateX(" + c + Wi),
    (p !== Ni || f !== Ni) && (y += "skew(" + p + ", " + f + Wi),
    (g !== 1 || d !== 1) && (y += "scale(" + g + ", " + d + Wi),
        v.style[gt] = y || "translate(0, 0)"
}, Lh = function(t, e) {
    var i = e || this, s = i.xPercent, r = i.yPercent, n = i.x, o = i.y, a = i.rotation, l = i.skewX, h = i.skewY, c = i.scaleX, p = i.scaleY, f = i.target, g = i.xOrigin, d = i.yOrigin, _ = i.xOffset, D = i.yOffset, v = i.forceCSS, w = parseFloat(n), y = parseFloat(o), b, S, x, F, T;
    a = parseFloat(a),
        l = parseFloat(l),
        h = parseFloat(h),
    h && (h = parseFloat(h),
        l += h,
        a += h),
        a || l ? (a *= ws,
            l *= ws,
            b = Math.cos(a) * c,
            S = Math.sin(a) * c,
            x = Math.sin(a - l) * -p,
            F = Math.cos(a - l) * p,
        l && (h *= ws,
            T = Math.tan(l - h),
            T = Math.sqrt(1 + T * T),
            x *= T,
            F *= T,
        h && (T = Math.tan(h),
            T = Math.sqrt(1 + T * T),
            b *= T,
            S *= T)),
            b = xt(b),
            S = xt(S),
            x = xt(x),
            F = xt(F)) : (b = c,
            F = p,
            S = x = 0),
    (w && !~(n + "").indexOf("px") || y && !~(o + "").indexOf("px")) && (w = Mi(f, "x", n, "px"),
        y = Mi(f, "y", o, "px")),
    (g || d || _ || D) && (w = xt(w + g - (g * b + d * x) + _),
        y = xt(y + d - (g * S + d * F) + D)),
    (s || r) && (T = f.getBBox(),
        w = xt(w + s / 100 * T.width),
        y = xt(y + r / 100 * T.height)),
        T = "matrix(" + b + "," + S + "," + x + "," + F + "," + w + "," + y + ")",
        f.setAttribute("transform", T),
    v && (f.style[gt] = T)
}, Oh = function(t, e, i, s, r) {
    var n = 360, o = zt(r), a = parseFloat(r) * (o && ~r.indexOf("rad") ? $i : 1), l = a - s, h = s + l + "deg", c, p;
    return o && (c = r.split("_")[1],
    c === "short" && (l %= n,
    l !== l % (n / 2) && (l += l < 0 ? n : -n)),
        c === "cw" && l < 0 ? l = (l + n * Vo) % n - ~~(l / n) * n : c === "ccw" && l > 0 && (l = (l - n * Vo) % n - ~~(l / n) * n)),
        t._pt = p = new fe(t._pt,e,i,s,l,Dh),
        p.e = h,
        p.u = "deg",
        t._props.push(i),
        p
}, Qo = function(t, e) {
    for (var i in e)
        t[i] = e[i];
    return t
}, Rh = function(t, e, i) {
    var s = Qo({}, i._gsap), r = "perspective,force3D,transformOrigin,svgOrigin", n = i.style, o, a, l, h, c, p, f, g;
    s.svg ? (l = i.getAttribute("transform"),
        i.setAttribute("transform", ""),
        n[gt] = e,
        o = dr(i, 1),
        es(i, gt),
        i.setAttribute("transform", l)) : (l = getComputedStyle(i)[gt],
        n[gt] = e,
        o = dr(i, 1),
        n[gt] = l);
    for (a in di)
        l = s[a],
            h = o[a],
        l !== h && r.indexOf(a) < 0 && (f = Vt(l),
            g = Vt(h),
            c = f !== g ? Mi(i, a, l, g) : parseFloat(l),
            p = parseFloat(h),
            t._pt = new fe(t._pt,o,a,c,p - c,qn),
            t._pt.u = g || 0,
            t._props.push(a));
    Qo(o, s)
};
ce("padding,margin,Width,Radius", function(u, t) {
    var e = "Top"
        , i = "Right"
        , s = "Bottom"
        , r = "Left"
        , n = (t < 3 ? [e, i, s, r] : [e + r, e + i, s + i, s + r]).map(function(o) {
        return t < 2 ? u + o : "border" + o + u
    });
    Qr[t > 1 ? "border" + u : u] = function(o, a, l, h, c) {
        var p, f;
        if (arguments.length < 4)
            return p = n.map(function(g) {
                return ai(o, g, l)
            }),
                f = p.join(" "),
                f.split(p[0]).length === 5 ? p[0] : f;
        p = (h + "").split(" "),
            f = {},
            n.forEach(function(g, d) {
                return f[g] = p[d] = p[d] || p[(d - 1) / 2 | 0]
            }),
            o.init(a, f, c)
    }
});
var Tu = {
    name: "css",
    register: Vn,
    targetTest: function(t) {
        return t.style && t.nodeType
    },
    init: function(t, e, i, s, r) {
        var n = this._props, o = t.style, a = i.vars.startAt, l, h, c, p, f, g, d, _, D, v, w, y, b, S, x, F;
        xo || Vn(),
            this.styles = this.styles || vu(t),
            F = this.styles.props,
            this.tween = i;
        for (d in e)
            if (d !== "autoRound" && (h = e[d],
                !(ye[d] && au(d, e, i, s, t, r)))) {
                if (f = typeof h,
                    g = Qr[d],
                f === "function" && (h = h.call(i, s, t, r),
                    f = typeof h),
                f === "string" && ~h.indexOf("random(") && (h = lr(h)),
                    g)
                    g(this, t, d, h, i) && (x = 1);
                else if (d.substr(0, 2) === "--")
                    l = (getComputedStyle(t).getPropertyValue(d) + "").trim(),
                        h += "",
                        Fi.lastIndex = 0,
                    Fi.test(l) || (_ = Vt(l),
                        D = Vt(h)),
                        D ? _ !== D && (l = Mi(t, d, l, D) + D) : _ && (h += _),
                        this.add(o, "setProperty", l, h, s, r, 0, 0, d),
                        n.push(d),
                        F.push(d, 0, o[d]);
                else if (f !== "undefined") {
                    if (a && d in a ? (l = typeof a[d] == "function" ? a[d].call(i, s, t, r) : a[d],
                    zt(l) && ~l.indexOf("random(") && (l = lr(l)),
                    Vt(l + "") || l === "auto" || (l += Se.units[d] || Vt(ai(t, d)) || ""),
                    (l + "").charAt(1) === "=" && (l = ai(t, d))) : l = ai(t, d),
                        p = parseFloat(l),
                        v = f === "string" && h.charAt(1) === "=" && h.substr(0, 2),
                    v && (h = h.substr(2)),
                        c = parseFloat(h),
                    d in Ze && (d === "autoAlpha" && (p === 1 && ai(t, "visibility") === "hidden" && c && (p = 0),
                        F.push("visibility", 0, o.visibility),
                        Ci(this, o, "visibility", p ? "inherit" : "hidden", c ? "inherit" : "hidden", !c)),
                    d !== "scale" && d !== "transform" && (d = Ze[d],
                    ~d.indexOf(",") && (d = d.split(",")[0]))),
                        w = d in di,
                        w) {
                        if (this.styles.save(d),
                        y || (b = t._gsap,
                        b.renderTransform && !e.parseTransform || dr(t, e.parseTransform),
                            S = e.smoothOrigin !== !1 && b.smooth,
                            y = this._pt = new fe(this._pt,o,gt,0,1,b.renderTransform,b,0,-1),
                            y.dep = 1),
                        d === "scale")
                            this._pt = new fe(this._pt,b,"scaleY",b.scaleY,(v ? vs(b.scaleY, v + c) : c) - b.scaleY || 0,qn),
                                this._pt.u = 0,
                                n.push("scaleY", d),
                                d += "X";
                        else if (d === "transformOrigin") {
                            F.push(de, 0, o[de]),
                                h = kh(h),
                                b.svg ? Xn(t, h, 0, S, 0, this) : (D = parseFloat(h.split(" ")[2]) || 0,
                                D !== b.zOrigin && Ci(this, b, "zOrigin", b.zOrigin, D),
                                    Ci(this, o, d, Jr(l), Jr(h)));
                            continue
                        } else if (d === "svgOrigin") {
                            Xn(t, h, 1, S, 0, this);
                            continue
                        } else if (d in Cu) {
                            Oh(this, b, d, p, v ? vs(p, v + h) : h);
                            continue
                        } else if (d === "smoothOrigin") {
                            Ci(this, b, "smooth", b.smooth, h);
                            continue
                        } else if (d === "force3D") {
                            b[d] = h;
                            continue
                        } else if (d === "transform") {
                            Rh(this, h, t);
                            continue
                        }
                    } else
                        d in o || (d = ks(d) || d);
                    if (w || (c || c === 0) && (p || p === 0) && !_h.test(h) && d in o)
                        _ = (l + "").substr((p + "").length),
                        c || (c = 0),
                            D = Vt(h) || (d in Se.units ? Se.units[d] : _),
                        _ !== D && (p = Mi(t, d, l, D)),
                            this._pt = new fe(this._pt,w ? b : o,d,p,(v ? vs(p, v + c) : c) - p,!w && (D === "px" || d === "zIndex") && e.autoRound !== !1 ? yh : qn),
                            this._pt.u = D || 0,
                        _ !== D && D !== "%" && (this._pt.b = l,
                            this._pt.r = mh);
                    else if (d in o)
                        Ph.call(this, t, d, l, v ? v + h : h);
                    else if (d in t)
                        this.add(t, d, l || t[d], v ? v + h : h, s, r);
                    else if (d !== "parseTransform") {
                        co(d, h);
                        continue
                    }
                    w || (d in o ? F.push(d, 0, o[d]) : F.push(d, 1, l || t[d])),
                        n.push(d)
                }
            }
        x && du(this)
    },
    render: function(t, e) {
        if (e.tween._time || !wo())
            for (var i = e._pt; i; )
                i.r(t, i.d),
                    i = i._next;
        else
            e.styles.revert()
    },
    get: ai,
    aliases: Ze,
    getSetter: function(t, e, i) {
        var s = Ze[e];
        return s && s.indexOf(",") < 0 && (e = s),
            e in di && e !== de && (t._gsap.x || ai(t, "x")) ? i && jo === i ? e === "scale" ? bh : wh : (jo = i || {}) && (e === "scale" ? Ch : Sh) : t.style && !uo(t.style[e]) ? vh : ~e.indexOf("-") ? xh : yo(t, e)
    },
    core: {
        _removeProperty: es,
        _getMatrix: Co
    }
};
oe.utils.checkPrefix = ks;
oe.core.getStyleSaver = vu;
(function(u, t, e, i) {
        var s = ce(u + "," + t + "," + e, function(r) {
            di[r] = 1
        });
        ce(t, function(r) {
            Se.units[r] = "deg",
                Cu[r] = 1
        }),
            Ze[s[13]] = u + "," + t,
            ce(i, function(r) {
                var n = r.split(":");
                Ze[n[1]] = s[n[0]]
            })
    }
)("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
ce("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(u) {
    Se.units[u] = "px"
});
oe.registerPlugin(Tu);
var ne = oe.registerPlugin(Tu) || oe;
ne.core.Tween;
function zh(u, t) {
    for (var e = 0; e < t.length; e++) {
        var i = t[e];
        i.enumerable = i.enumerable || !1,
            i.configurable = !0,
        "value"in i && (i.writable = !0),
            Object.defineProperty(u, i.key, i)
    }
}
function Bh(u, t, e) {
    return t && zh(u.prototype, t),
        u
}
/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Nt, Nr, we, Si, Ei, bs, Fu, Yi, Zs, Pu, li, Ye, ku, Mu = function() {
    return Nt || typeof window < "u" && (Nt = window.gsap) && Nt.registerPlugin && Nt
}, Au = 1, ms = [], Z = [], ei = [], Qs = Date.now, Gn = function(t, e) {
    return e
}, Ih = function() {
    var t = Zs.core
        , e = t.bridge || {}
        , i = t._scrollers
        , s = t._proxies;
    i.push.apply(i, Z),
        s.push.apply(s, ei),
        Z = i,
        ei = s,
        Gn = function(n, o) {
            return e[n](o)
        }
}, Pi = function(t, e) {
    return ~ei.indexOf(t) && ei[ei.indexOf(t) + 1][e]
}, Js = function(t) {
    return !!~Pu.indexOf(t)
}, Qt = function(t, e, i, s, r) {
    return t.addEventListener(e, i, {
        passive: s !== !1,
        capture: !!r
    })
}, Zt = function(t, e, i, s) {
    return t.removeEventListener(e, i, !!s)
}, wr = "scrollLeft", br = "scrollTop", Un = function() {
    return li && li.isPressed || Z.cache++
}, tn = function(t, e) {
    var i = function s(r) {
        if (r || r === 0) {
            Au && (we.history.scrollRestoration = "manual");
            var n = li && li.isPressed;
            r = s.v = Math.round(r) || (li && li.iOS ? 1 : 0),
                t(r),
                s.cacheID = Z.cache,
            n && Gn("ss", r)
        } else
            (e || Z.cache !== s.cacheID || Gn("ref")) && (s.cacheID = Z.cache,
                s.v = t());
        return s.v + s.offset
    };
    return i.offset = 0,
    t && i
}, se = {
    s: wr,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: tn(function(u) {
        return arguments.length ? we.scrollTo(u, Pt.sc()) : we.pageXOffset || Si[wr] || Ei[wr] || bs[wr] || 0
    })
}, Pt = {
    s: br,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: se,
    sc: tn(function(u) {
        return arguments.length ? we.scrollTo(se.sc(), u) : we.pageYOffset || Si[br] || Ei[br] || bs[br] || 0
    })
}, le = function(t, e) {
    return (e && e._ctx && e._ctx.selector || Nt.utils.toArray)(t)[0] || (typeof t == "string" && Nt.config().nullTargetWarn !== !1 ? console.warn("Element not found:", t) : null)
}, Ai = function(t, e) {
    var i = e.s
        , s = e.sc;
    Js(t) && (t = Si.scrollingElement || Ei);
    var r = Z.indexOf(t)
        , n = s === Pt.sc ? 1 : 2;
    !~r && (r = Z.push(t) - 1),
    Z[r + n] || Qt(t, "scroll", Un);
    var o = Z[r + n]
        , a = o || (Z[r + n] = tn(Pi(t, i), !0) || (Js(t) ? s : tn(function(l) {
        return arguments.length ? t[i] = l : t[i]
    })));
    return a.target = t,
    o || (a.smooth = Nt.getProperty(t, "scrollBehavior") === "smooth"),
        a
}, Kn = function(t, e, i) {
    var s = t
        , r = t
        , n = Qs()
        , o = n
        , a = e || 50
        , l = Math.max(500, a * 3)
        , h = function(g, d) {
        var _ = Qs();
        d || _ - n > a ? (r = s,
            s = g,
            o = n,
            n = _) : i ? s += g : s = r + (g - r) / (_ - o) * (n - o)
    }
        , c = function() {
        r = s = i ? 0 : s,
            o = n = 0
    }
        , p = function(g) {
        var d = o
            , _ = r
            , D = Qs();
        return (g || g === 0) && g !== s && h(g),
            n === o || D - o > l ? 0 : (s + (i ? _ : -_)) / ((i ? D : n) - d) * 1e3
    };
    return {
        update: h,
        reset: c,
        getVelocity: p
    }
}, Is = function(t, e) {
    return e && !t._gsapAllow && t.preventDefault(),
        t.changedTouches ? t.changedTouches[0] : t
}, Jo = function(t) {
    var e = Math.max.apply(Math, t)
        , i = Math.min.apply(Math, t);
    return Math.abs(e) >= Math.abs(i) ? e : i
}, Lu = function() {
    Zs = Nt.core.globals().ScrollTrigger,
    Zs && Zs.core && Ih()
}, Ou = function(t) {
    return Nt = t || Mu(),
    !Nr && Nt && typeof document < "u" && document.body && (we = window,
        Si = document,
        Ei = Si.documentElement,
        bs = Si.body,
        Pu = [we, Si, Ei, bs],
        Nt.utils.clamp,
        ku = Nt.core.context || function() {}
        ,
        Yi = "onpointerenter"in bs ? "pointer" : "mouse",
        Fu = wt.isTouch = we.matchMedia && we.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart"in we || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0,
        Ye = wt.eventTypes = ("ontouchstart"in Ei ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown"in Ei ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","),
        setTimeout(function() {
            return Au = 0
        }, 500),
        Lu(),
        Nr = 1),
        Nr
};
se.op = Pt;
Z.cache = 0;
var wt = function() {
    function u(e) {
        this.init(e)
    }
    var t = u.prototype;
    return t.init = function(i) {
        Nr || Ou(Nt) || console.warn("Please gsap.registerPlugin(Observer)"),
        Zs || Lu();
        var s = i.tolerance
            , r = i.dragMinimum
            , n = i.type
            , o = i.target
            , a = i.lineHeight
            , l = i.debounce
            , h = i.preventDefault
            , c = i.onStop
            , p = i.onStopDelay
            , f = i.ignore
            , g = i.wheelSpeed
            , d = i.event
            , _ = i.onDragStart
            , D = i.onDragEnd
            , v = i.onDrag
            , w = i.onPress
            , y = i.onRelease
            , b = i.onRight
            , S = i.onLeft
            , x = i.onUp
            , F = i.onDown
            , T = i.onChangeX
            , P = i.onChangeY
            , z = i.onChange
            , k = i.onToggleX
            , W = i.onToggleY
            , I = i.onHover
            , V = i.onHoverEnd
            , L = i.onMove
            , M = i.ignoreCheck
            , N = i.isNormalizer
            , E = i.onGestureStart
            , m = i.onGestureEnd
            , X = i.onWheel
            , nt = i.onEnable
            , ae = i.onDisable
            , et = i.onClick
            , U = i.scrollSpeed
            , kt = i.capture
            , st = i.allowClicks
            , Ut = i.lockAxis
            , Wt = i.onLockAxis;
        this.target = o = le(o) || Ei,
            this.vars = i,
        f && (f = Nt.utils.toArray(f)),
            s = s || 1e-9,
            r = r || 0,
            g = g || 1,
            U = U || 1,
            n = n || "wheel,touch,pointer",
            l = l !== !1,
        a || (a = parseFloat(we.getComputedStyle(bs).lineHeight) || 22);
        var pi, Kt, ze, it, mt, ue, pe, C = this, ge = 0, si = 0, gi = i.passive || !h, bt = Ai(o, se), _i = Ai(o, Pt), Oi = bt(), as = _i(), Mt = ~n.indexOf("touch") && !~n.indexOf("pointer") && Ye[0] === "pointerdown", Di = Js(o), yt = o.ownerDocument || Si, Be = [0, 0, 0], Te = [0, 0, 0], ri = 0, As = function() {
            return ri = Qs()
        }, Ct = function(B, rt) {
            return (C.event = B) && f && ~f.indexOf(B.target) || rt && Mt && B.pointerType !== "touch" || M && M(B, rt)
        }, mr = function() {
            C._vx.reset(),
                C._vy.reset(),
                Kt.pause(),
            c && c(C)
        }, mi = function() {
            var B = C.deltaX = Jo(Be)
                , rt = C.deltaY = Jo(Te)
                , A = Math.abs(B) >= s
                , q = Math.abs(rt) >= s;
            z && (A || q) && z(C, B, rt, Be, Te),
            A && (b && C.deltaX > 0 && b(C),
            S && C.deltaX < 0 && S(C),
            T && T(C),
            k && C.deltaX < 0 != ge < 0 && k(C),
                ge = C.deltaX,
                Be[0] = Be[1] = Be[2] = 0),
            q && (F && C.deltaY > 0 && F(C),
            x && C.deltaY < 0 && x(C),
            P && P(C),
            W && C.deltaY < 0 != si < 0 && W(C),
                si = C.deltaY,
                Te[0] = Te[1] = Te[2] = 0),
            (it || ze) && (L && L(C),
            ze && (v(C),
                ze = !1),
                it = !1),
            ue && !(ue = !1) && Wt && Wt(C),
            mt && (X(C),
                mt = !1),
                pi = 0
        }, us = function(B, rt, A) {
            Be[A] += B,
                Te[A] += rt,
                C._vx.update(B),
                C._vy.update(rt),
                l ? pi || (pi = requestAnimationFrame(mi)) : mi()
        }, ls = function(B, rt) {
            Ut && !pe && (C.axis = pe = Math.abs(B) > Math.abs(rt) ? "x" : "y",
                ue = !0),
            pe !== "y" && (Be[2] += B,
                C._vx.update(B, !0)),
            pe !== "x" && (Te[2] += rt,
                C._vy.update(rt, !0)),
                l ? pi || (pi = requestAnimationFrame(mi)) : mi()
        }, yi = function(B) {
            if (!Ct(B, 1)) {
                B = Is(B, h);
                var rt = B.clientX
                    , A = B.clientY
                    , q = rt - C.x
                    , R = A - C.y
                    , Y = C.isDragging;
                C.x = rt,
                    C.y = A,
                (Y || Math.abs(C.startX - rt) >= r || Math.abs(C.startY - A) >= r) && (v && (ze = !0),
                Y || (C.isDragging = !0),
                    ls(q, R),
                Y || _ && _(C))
            }
        }, Ri = C.onPress = function(H) {
            Ct(H, 1) || H && H.button || (C.axis = pe = null,
                Kt.pause(),
                C.isPressed = !0,
                H = Is(H),
                ge = si = 0,
                C.startX = C.x = H.clientX,
                C.startY = C.y = H.clientY,
                C._vx.reset(),
                C._vy.reset(),
                Qt(N ? o : yt, Ye[1], yi, gi, !0),
                C.deltaX = C.deltaY = 0,
            w && w(C))
        }
            , K = C.onRelease = function(H) {
            if (!Ct(H, 1)) {
                Zt(N ? o : yt, Ye[1], yi, !0);
                var B = !isNaN(C.y - C.startY)
                    , rt = C.isDragging
                    , A = rt && (Math.abs(C.x - C.startX) > 3 || Math.abs(C.y - C.startY) > 3)
                    , q = Is(H);
                !A && B && (C._vx.reset(),
                    C._vy.reset(),
                h && st && Nt.delayedCall(.08, function() {
                    if (Qs() - ri > 300 && !H.defaultPrevented) {
                        if (H.target.click)
                            H.target.click();
                        else if (yt.createEvent) {
                            var R = yt.createEvent("MouseEvents");
                            R.initMouseEvent("click", !0, !0, we, 1, q.screenX, q.screenY, q.clientX, q.clientY, !1, !1, !1, !1, 0, null),
                                H.target.dispatchEvent(R)
                        }
                    }
                })),
                    C.isDragging = C.isGesturing = C.isPressed = !1,
                c && rt && !N && Kt.restart(!0),
                D && rt && D(C),
                y && y(C, A)
            }
        }
            , zi = function(B) {
            return B.touches && B.touches.length > 1 && (C.isGesturing = !0) && E(B, C.isDragging)
        }, Ie = function() {
            return (C.isGesturing = !1) || m(C)
        }, Ne = function(B) {
            if (!Ct(B)) {
                var rt = bt()
                    , A = _i();
                us((rt - Oi) * U, (A - as) * U, 1),
                    Oi = rt,
                    as = A,
                c && Kt.restart(!0)
            }
        }, We = function(B) {
            if (!Ct(B)) {
                B = Is(B, h),
                X && (mt = !0);
                var rt = (B.deltaMode === 1 ? a : B.deltaMode === 2 ? we.innerHeight : 1) * g;
                us(B.deltaX * rt, B.deltaY * rt, 0),
                c && !N && Kt.restart(!0)
            }
        }, Bi = function(B) {
            if (!Ct(B)) {
                var rt = B.clientX
                    , A = B.clientY
                    , q = rt - C.x
                    , R = A - C.y;
                C.x = rt,
                    C.y = A,
                    it = !0,
                c && Kt.restart(!0),
                (q || R) && ls(q, R)
            }
        }, hs = function(B) {
            C.event = B,
                I(C)
        }, ni = function(B) {
            C.event = B,
                V(C)
        }, Ls = function(B) {
            return Ct(B) || Is(B, h) && et(C)
        };
        Kt = C._dc = Nt.delayedCall(p || .25, mr).pause(),
            C.deltaX = C.deltaY = 0,
            C._vx = Kn(0, 50, !0),
            C._vy = Kn(0, 50, !0),
            C.scrollX = bt,
            C.scrollY = _i,
            C.isDragging = C.isGesturing = C.isPressed = !1,
            ku(this),
            C.enable = function(H) {
                return C.isEnabled || (Qt(Di ? yt : o, "scroll", Un),
                n.indexOf("scroll") >= 0 && Qt(Di ? yt : o, "scroll", Ne, gi, kt),
                n.indexOf("wheel") >= 0 && Qt(o, "wheel", We, gi, kt),
                (n.indexOf("touch") >= 0 && Fu || n.indexOf("pointer") >= 0) && (Qt(o, Ye[0], Ri, gi, kt),
                    Qt(yt, Ye[2], K),
                    Qt(yt, Ye[3], K),
                st && Qt(o, "click", As, !0, !0),
                et && Qt(o, "click", Ls),
                E && Qt(yt, "gesturestart", zi),
                m && Qt(yt, "gestureend", Ie),
                I && Qt(o, Yi + "enter", hs),
                V && Qt(o, Yi + "leave", ni),
                L && Qt(o, Yi + "move", Bi)),
                    C.isEnabled = !0,
                H && H.type && Ri(H),
                nt && nt(C)),
                    C
            }
            ,
            C.disable = function() {
                C.isEnabled && (ms.filter(function(H) {
                    return H !== C && Js(H.target)
                }).length || Zt(Di ? yt : o, "scroll", Un),
                C.isPressed && (C._vx.reset(),
                    C._vy.reset(),
                    Zt(N ? o : yt, Ye[1], yi, !0)),
                    Zt(Di ? yt : o, "scroll", Ne, kt),
                    Zt(o, "wheel", We, kt),
                    Zt(o, Ye[0], Ri, kt),
                    Zt(yt, Ye[2], K),
                    Zt(yt, Ye[3], K),
                    Zt(o, "click", As, !0),
                    Zt(o, "click", Ls),
                    Zt(yt, "gesturestart", zi),
                    Zt(yt, "gestureend", Ie),
                    Zt(o, Yi + "enter", hs),
                    Zt(o, Yi + "leave", ni),
                    Zt(o, Yi + "move", Bi),
                    C.isEnabled = C.isPressed = C.isDragging = !1,
                ae && ae(C))
            }
            ,
            C.kill = C.revert = function() {
                C.disable();
                var H = ms.indexOf(C);
                H >= 0 && ms.splice(H, 1),
                li === C && (li = 0)
            }
            ,
            ms.push(C),
        N && Js(o) && (li = C),
            C.enable(d)
    }
        ,
        Bh(u, [{
            key: "velocityX",
            get: function() {
                return this._vx.getVelocity()
            }
        }, {
            key: "velocityY",
            get: function() {
                return this._vy.getVelocity()
            }
        }]),
        u
}();
wt.version = "3.12.5";
wt.create = function(u) {
    return new wt(u)
}
;
wt.register = Ou;
wt.getAll = function() {
    return ms.slice()
}
;
wt.getById = function(u) {
    return ms.filter(function(t) {
        return t.vars.id === u
    })[0]
}
;
Mu() && Nt.registerPlugin(wt);
/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var O, ps, J, dt, He, lt, Ru, en, pr, tr, Hs, Cr, qt, hn, Zn, te, ta, ea, gs, zu, bn, Bu, Jt, Qn, Iu, Nu, xi, Jn, So, Cs, Eo, sn, to, Cn, Sr = 1, jt = Date.now, Sn = jt(), Oe = 0, qs = 0, ia = function(t, e, i) {
    var s = me(t) && (t.substr(0, 6) === "clamp(" || t.indexOf("max") > -1);
    return i["_" + e + "Clamp"] = s,
        s ? t.substr(6, t.length - 7) : t
}, sa = function(t, e) {
    return e && (!me(t) || t.substr(0, 6) !== "clamp(") ? "clamp(" + t + ")" : t
}, Nh = function u() {
    return qs && requestAnimationFrame(u)
}, ra = function() {
    return hn = 1
}, na = function() {
    return hn = 0
}, Ue = function(t) {
    return t
}, js = function(t) {
    return Math.round(t * 1e5) / 1e5 || 0
}, Wu = function() {
    return typeof window < "u"
}, $u = function() {
    return O || Wu() && (O = window.gsap) && O.registerPlugin && O
}, is = function(t) {
    return !!~Ru.indexOf(t)
}, Yu = function(t) {
    return (t === "Height" ? Eo : J["inner" + t]) || He["client" + t] || lt["client" + t]
}, Hu = function(t) {
    return Pi(t, "getBoundingClientRect") || (is(t) ? function() {
                return qr.width = J.innerWidth,
                    qr.height = Eo,
                    qr
            }
            : function() {
                return ui(t)
            }
    )
}, Wh = function(t, e, i) {
    var s = i.d
        , r = i.d2
        , n = i.a;
    return (n = Pi(t, "getBoundingClientRect")) ? function() {
            return n()[s]
        }
        : function() {
            return (e ? Yu(r) : t["client" + r]) || 0
        }
}, $h = function(t, e) {
    return !e || ~ei.indexOf(t) ? Hu(t) : function() {
        return qr
    }
}, Qe = function(t, e) {
    var i = e.s
        , s = e.d2
        , r = e.d
        , n = e.a;
    return Math.max(0, (i = "scroll" + s) && (n = Pi(t, i)) ? n() - Hu(t)()[r] : is(t) ? (He[i] || lt[i]) - Yu(s) : t[i] - t["offset" + s])
}, Er = function(t, e) {
    for (var i = 0; i < gs.length; i += 3)
        (!e || ~e.indexOf(gs[i + 1])) && t(gs[i], gs[i + 1], gs[i + 2])
}, me = function(t) {
    return typeof t == "string"
}, re = function(t) {
    return typeof t == "function"
}, Vs = function(t) {
    return typeof t == "number"
}, Hi = function(t) {
    return typeof t == "object"
}, Ns = function(t, e, i) {
    return t && t.progress(e ? 0 : 1) && i && t.pause()
}, En = function(t, e) {
    if (t.enabled) {
        var i = t._ctx ? t._ctx.add(function() {
            return e(t)
        }) : e(t);
        i && i.totalTime && (t.callbackAnimation = i)
    }
}, fs = Math.abs, qu = "left", ju = "top", To = "right", Fo = "bottom", Zi = "width", Qi = "height", er = "Right", ir = "Left", sr = "Top", rr = "Bottom", St = "padding", ke = "margin", Ms = "Width", Po = "Height", Ft = "px", Me = function(t) {
    return J.getComputedStyle(t)
}, Yh = function(t) {
    var e = Me(t).position;
    t.style.position = e === "absolute" || e === "fixed" ? e : "relative"
}, oa = function(t, e) {
    for (var i in e)
        i in t || (t[i] = e[i]);
    return t
}, ui = function(t, e) {
    var i = e && Me(t)[Zn] !== "matrix(1, 0, 0, 1, 0, 0)" && O.to(t, {
        x: 0,
        y: 0,
        xPercent: 0,
        yPercent: 0,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0
    }).progress(1)
        , s = t.getBoundingClientRect();
    return i && i.progress(0).kill(),
        s
}, rn = function(t, e) {
    var i = e.d2;
    return t["offset" + i] || t["client" + i] || 0
}, Vu = function(t) {
    var e = [], i = t.labels, s = t.duration(), r;
    for (r in i)
        e.push(i[r] / s);
    return e
}, Hh = function(t) {
    return function(e) {
        return O.utils.snap(Vu(t), e)
    }
}, ko = function(t) {
    var e = O.utils.snap(t)
        , i = Array.isArray(t) && t.slice(0).sort(function(s, r) {
        return s - r
    });
    return i ? function(s, r, n) {
            n === void 0 && (n = .001);
            var o;
            if (!r)
                return e(s);
            if (r > 0) {
                for (s -= n,
                         o = 0; o < i.length; o++)
                    if (i[o] >= s)
                        return i[o];
                return i[o - 1]
            } else
                for (o = i.length,
                         s += n; o--; )
                    if (i[o] <= s)
                        return i[o];
            return i[0]
        }
        : function(s, r, n) {
            n === void 0 && (n = .001);
            var o = e(s);
            return !r || Math.abs(o - s) < n || o - s < 0 == r < 0 ? o : e(r < 0 ? s - t : s + t)
        }
}, qh = function(t) {
    return function(e, i) {
        return ko(Vu(t))(e, i.direction)
    }
}, Tr = function(t, e, i, s) {
    return i.split(",").forEach(function(r) {
        return t(e, r, s)
    })
}, Ot = function(t, e, i, s, r) {
    return t.addEventListener(e, i, {
        passive: !s,
        capture: !!r
    })
}, Lt = function(t, e, i, s) {
    return t.removeEventListener(e, i, !!s)
}, Fr = function(t, e, i) {
    i = i && i.wheelHandler,
    i && (t(e, "wheel", i),
        t(e, "touchmove", i))
}, aa = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
}, Pr = {
    toggleActions: "play",
    anticipatePin: 0
}, nn = {
    top: 0,
    left: 0,
    center: .5,
    bottom: 1,
    right: 1
}, Wr = function(t, e) {
    if (me(t)) {
        var i = t.indexOf("=")
            , s = ~i ? +(t.charAt(i - 1) + 1) * parseFloat(t.substr(i + 1)) : 0;
        ~i && (t.indexOf("%") > i && (s *= e / 100),
            t = t.substr(0, i - 1)),
            t = s + (t in nn ? nn[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0)
    }
    return t
}, kr = function(t, e, i, s, r, n, o, a) {
    var l = r.startColor
        , h = r.endColor
        , c = r.fontSize
        , p = r.indent
        , f = r.fontWeight
        , g = dt.createElement("div")
        , d = is(i) || Pi(i, "pinType") === "fixed"
        , _ = t.indexOf("scroller") !== -1
        , D = d ? lt : i
        , v = t.indexOf("start") !== -1
        , w = v ? l : h
        , y = "border-color:" + w + ";font-size:" + c + ";color:" + w + ";font-weight:" + f + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return y += "position:" + ((_ || a) && d ? "fixed;" : "absolute;"),
    (_ || a || !d) && (y += (s === Pt ? To : Fo) + ":" + (n + parseFloat(p)) + "px;"),
    o && (y += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"),
        g._isStart = v,
        g.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")),
        g.style.cssText = y,
        g.innerText = e || e === 0 ? t + "-" + e : t,
        D.children[0] ? D.insertBefore(g, D.children[0]) : D.appendChild(g),
        g._offset = g["offset" + s.op.d2],
        $r(g, 0, s, v),
        g
}, $r = function(t, e, i, s) {
    var r = {
        display: "block"
    }
        , n = i[s ? "os2" : "p2"]
        , o = i[s ? "p2" : "os2"];
    t._isFlipped = s,
        r[i.a + "Percent"] = s ? -100 : 0,
        r[i.a] = s ? "1px" : 0,
        r["border" + n + Ms] = 1,
        r["border" + o + Ms] = 0,
        r[i.p] = e + "px",
        O.set(t, r)
}, G = [], eo = {}, gr, ua = function() {
    return jt() - Oe > 34 && (gr || (gr = requestAnimationFrame(ci)))
}, ds = function() {
    (!Jt || !Jt.isPressed || Jt.startX > lt.clientWidth) && (Z.cache++,
        Jt ? gr || (gr = requestAnimationFrame(ci)) : ci(),
    Oe || rs("scrollStart"),
        Oe = jt())
}, Tn = function() {
    Nu = J.innerWidth,
        Iu = J.innerHeight
}, Xs = function() {
    Z.cache++,
    !qt && !Bu && !dt.fullscreenElement && !dt.webkitFullscreenElement && (!Qn || Nu !== J.innerWidth || Math.abs(J.innerHeight - Iu) > J.innerHeight * .25) && en.restart(!0)
}, ss = {}, jh = [], Xu = function u() {
    return Lt(j, "scrollEnd", u) || Vi(!0)
}, rs = function(t) {
    return ss[t] && ss[t].map(function(e) {
        return e()
    }) || jh
}, De = [], Gu = function(t) {
    for (var e = 0; e < De.length; e += 5)
        (!t || De[e + 4] && De[e + 4].query === t) && (De[e].style.cssText = De[e + 1],
        De[e].getBBox && De[e].setAttribute("transform", De[e + 2] || ""),
            De[e + 3].uncache = 1)
}, Mo = function(t, e) {
    var i;
    for (te = 0; te < G.length; te++)
        i = G[te],
        i && (!e || i._ctx === e) && (t ? i.kill(1) : i.revert(!0, !0));
    sn = !0,
    e && Gu(e),
    e || rs("revert")
}, Uu = function(t, e) {
    Z.cache++,
    (e || !ee) && Z.forEach(function(i) {
        return re(i) && i.cacheID++ && (i.rec = 0)
    }),
    me(t) && (J.history.scrollRestoration = So = t)
}, ee, Ji = 0, la, Vh = function() {
    if (la !== Ji) {
        var t = la = Ji;
        requestAnimationFrame(function() {
            return t === Ji && Vi(!0)
        })
    }
}, Ku = function() {
    lt.appendChild(Cs),
        Eo = !Jt && Cs.offsetHeight || J.innerHeight,
        lt.removeChild(Cs)
}, ha = function(t) {
    return pr(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e) {
        return e.style.display = t ? "none" : "block"
    })
}, Vi = function(t, e) {
    if (Oe && !t && !sn) {
        Ot(j, "scrollEnd", Xu);
        return
    }
    Ku(),
        ee = j.isRefreshing = !0,
        Z.forEach(function(s) {
            return re(s) && ++s.cacheID && (s.rec = s())
        });
    var i = rs("refreshInit");
    zu && j.sort(),
    e || Mo(),
        Z.forEach(function(s) {
            re(s) && (s.smooth && (s.target.style.scrollBehavior = "auto"),
                s(0))
        }),
        G.slice(0).forEach(function(s) {
            return s.refresh()
        }),
        sn = !1,
        G.forEach(function(s) {
            if (s._subPinOffset && s.pin) {
                var r = s.vars.horizontal ? "offsetWidth" : "offsetHeight"
                    , n = s.pin[r];
                s.revert(!0, 1),
                    s.adjustPinSpacing(s.pin[r] - n),
                    s.refresh()
            }
        }),
        to = 1,
        ha(!0),
        G.forEach(function(s) {
            var r = Qe(s.scroller, s._dir)
                , n = s.vars.end === "max" || s._endClamp && s.end > r
                , o = s._startClamp && s.start >= r;
            (n || o) && s.setPositions(o ? r - 1 : s.start, n ? Math.max(o ? r : s.start + 1, r) : s.end, !0)
        }),
        ha(!1),
        to = 0,
        i.forEach(function(s) {
            return s && s.render && s.render(-1)
        }),
        Z.forEach(function(s) {
            re(s) && (s.smooth && requestAnimationFrame(function() {
                return s.target.style.scrollBehavior = "smooth"
            }),
            s.rec && s(s.rec))
        }),
        Uu(So, 1),
        en.pause(),
        Ji++,
        ee = 2,
        ci(2),
        G.forEach(function(s) {
            return re(s.vars.onRefresh) && s.vars.onRefresh(s)
        }),
        ee = j.isRefreshing = !1,
        rs("refresh")
}, io = 0, Yr = 1, nr, ci = function(t) {
    if (t === 2 || !ee && !sn) {
        j.isUpdating = !0,
        nr && nr.update(0);
        var e = G.length
            , i = jt()
            , s = i - Sn >= 50
            , r = e && G[0].scroll();
        if (Yr = io > r ? -1 : 1,
        ee || (io = r),
        s && (Oe && !hn && i - Oe > 200 && (Oe = 0,
            rs("scrollEnd")),
            Hs = Sn,
            Sn = i),
        Yr < 0) {
            for (te = e; te-- > 0; )
                G[te] && G[te].update(0, s);
            Yr = 1
        } else
            for (te = 0; te < e; te++)
                G[te] && G[te].update(0, s);
        j.isUpdating = !1
    }
    gr = 0
}, so = [qu, ju, Fo, To, ke + rr, ke + er, ke + sr, ke + ir, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], Hr = so.concat([Zi, Qi, "boxSizing", "max" + Ms, "max" + Po, "position", ke, St, St + sr, St + er, St + rr, St + ir]), Xh = function(t, e, i) {
    Ss(i);
    var s = t._gsap;
    if (s.spacerIsNative)
        Ss(s.spacerState);
    else if (t._gsap.swappedIn) {
        var r = e.parentNode;
        r && (r.insertBefore(t, e),
            r.removeChild(e))
    }
    t._gsap.swappedIn = !1
}, Fn = function(t, e, i, s) {
    if (!t._gsap.swappedIn) {
        for (var r = so.length, n = e.style, o = t.style, a; r--; )
            a = so[r],
                n[a] = i[a];
        n.position = i.position === "absolute" ? "absolute" : "relative",
        i.display === "inline" && (n.display = "inline-block"),
            o[Fo] = o[To] = "auto",
            n.flexBasis = i.flexBasis || "auto",
            n.overflow = "visible",
            n.boxSizing = "border-box",
            n[Zi] = rn(t, se) + Ft,
            n[Qi] = rn(t, Pt) + Ft,
            n[St] = o[ke] = o[ju] = o[qu] = "0",
            Ss(s),
            o[Zi] = o["max" + Ms] = i[Zi],
            o[Qi] = o["max" + Po] = i[Qi],
            o[St] = i[St],
        t.parentNode !== e && (t.parentNode.insertBefore(e, t),
            e.appendChild(t)),
            t._gsap.swappedIn = !0
    }
}, Gh = /([A-Z])/g, Ss = function(t) {
    if (t) {
        var e = t.t.style, i = t.length, s = 0, r, n;
        for ((t.t._gsap || O.core.getCache(t.t)).uncache = 1; s < i; s += 2)
            n = t[s + 1],
                r = t[s],
                n ? e[r] = n : e[r] && e.removeProperty(r.replace(Gh, "-$1").toLowerCase())
    }
}, Mr = function(t) {
    for (var e = Hr.length, i = t.style, s = [], r = 0; r < e; r++)
        s.push(Hr[r], i[Hr[r]]);
    return s.t = t,
        s
}, Uh = function(t, e, i) {
    for (var s = [], r = t.length, n = i ? 8 : 0, o; n < r; n += 2)
        o = t[n],
            s.push(o, o in e ? e[o] : t[n + 1]);
    return s.t = t.t,
        s
}, qr = {
    left: 0,
    top: 0
}, ca = function(t, e, i, s, r, n, o, a, l, h, c, p, f, g) {
    re(t) && (t = t(a)),
    me(t) && t.substr(0, 3) === "max" && (t = p + (t.charAt(4) === "=" ? Wr("0" + t.substr(3), i) : 0));
    var d = f ? f.time() : 0, _, D, v;
    if (f && f.seek(0),
    isNaN(t) || (t = +t),
        Vs(t))
        f && (t = O.utils.mapRange(f.scrollTrigger.start, f.scrollTrigger.end, 0, p, t)),
        o && $r(o, i, s, !0);
    else {
        re(e) && (e = e(a));
        var w = (t || "0").split(" "), y, b, S, x;
        v = le(e, a) || lt,
            y = ui(v) || {},
        (!y || !y.left && !y.top) && Me(v).display === "none" && (x = v.style.display,
            v.style.display = "block",
            y = ui(v),
            x ? v.style.display = x : v.style.removeProperty("display")),
            b = Wr(w[0], y[s.d]),
            S = Wr(w[1] || "0", i),
            t = y[s.p] - l[s.p] - h + b + r - S,
        o && $r(o, S, s, i - S < 20 || o._isStart && S > 20),
            i -= i - S
    }
    if (g && (a[g] = t || -.001,
    t < 0 && (t = 0)),
        n) {
        var F = t + i
            , T = n._isStart;
        _ = "scroll" + s.d2,
            $r(n, F, s, T && F > 20 || !T && (c ? Math.max(lt[_], He[_]) : n.parentNode[_]) <= F + 1),
        c && (l = ui(o),
        c && (n.style[s.op.p] = l[s.op.p] - s.op.m - n._offset + Ft))
    }
    return f && v && (_ = ui(v),
        f.seek(p),
        D = ui(v),
        f._caScrollDist = _[s.p] - D[s.p],
        t = t / f._caScrollDist * p),
    f && f.seek(d),
        f ? t : Math.round(t)
}, Kh = /(webkit|moz|length|cssText|inset)/i, fa = function(t, e, i, s) {
    if (t.parentNode !== e) {
        var r = t.style, n, o;
        if (e === lt) {
            t._stOrig = r.cssText,
                o = Me(t);
            for (n in o)
                !+n && !Kh.test(n) && o[n] && typeof r[n] == "string" && n !== "0" && (r[n] = o[n]);
            r.top = i,
                r.left = s
        } else
            r.cssText = t._stOrig;
        O.core.getCache(t).uncache = 1,
            e.appendChild(t)
    }
}, Zu = function(t, e, i) {
    var s = e
        , r = s;
    return function(n) {
        var o = Math.round(t());
        return o !== s && o !== r && Math.abs(o - s) > 3 && Math.abs(o - r) > 3 && (n = o,
        i && i()),
            r = s,
            s = n,
            n
    }
}, Ar = function(t, e, i) {
    var s = {};
    s[e.p] = "+=" + i,
        O.set(t, s)
}, da = function(t, e) {
    var i = Ai(t, e)
        , s = "_scroll" + e.p2
        , r = function n(o, a, l, h, c) {
        var p = n.tween
            , f = a.onComplete
            , g = {};
        l = l || i();
        var d = Zu(i, l, function() {
            p.kill(),
                n.tween = 0
        });
        return c = h && c || 0,
            h = h || o - l,
        p && p.kill(),
            a[s] = o,
            a.inherit = !1,
            a.modifiers = g,
            g[s] = function() {
                return d(l + h * p.ratio + c * p.ratio * p.ratio)
            }
            ,
            a.onUpdate = function() {
                Z.cache++,
                n.tween && ci()
            }
            ,
            a.onComplete = function() {
                n.tween = 0,
                f && f.call(p)
            }
            ,
            p = n.tween = O.to(t, a),
            p
    };
    return t[s] = i,
        i.wheelHandler = function() {
            return r.tween && r.tween.kill() && (r.tween = 0)
        }
        ,
        Ot(t, "wheel", i.wheelHandler),
    j.isTouch && Ot(t, "touchmove", i.wheelHandler),
        r
}, j = function() {
    function u(e, i) {
        ps || u.register(O) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
            Jn(this),
            this.init(e, i)
    }
    var t = u.prototype;
    return t.init = function(i, s) {
        if (this.progress = this.start = 0,
        this.vars && this.kill(!0, !0),
            !qs) {
            this.update = this.refresh = this.kill = Ue;
            return
        }
        i = oa(me(i) || Vs(i) || i.nodeType ? {
            trigger: i
        } : i, Pr);
        var r = i, n = r.onUpdate, o = r.toggleClass, a = r.id, l = r.onToggle, h = r.onRefresh, c = r.scrub, p = r.trigger, f = r.pin, g = r.pinSpacing, d = r.invalidateOnRefresh, _ = r.anticipatePin, D = r.onScrubComplete, v = r.onSnapComplete, w = r.once, y = r.snap, b = r.pinReparent, S = r.pinSpacer, x = r.containerAnimation, F = r.fastScrollEnd, T = r.preventOverlaps, P = i.horizontal || i.containerAnimation && i.horizontal !== !1 ? se : Pt, z = !c && c !== 0, k = le(i.scroller || J), W = O.core.getCache(k), I = is(k), V = ("pinType"in i ? i.pinType : Pi(k, "pinType") || I && "fixed") === "fixed", L = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack], M = z && i.toggleActions.split(" "), N = "markers"in i ? i.markers : Pr.markers, E = I ? 0 : parseFloat(Me(k)["border" + P.p2 + Ms]) || 0, m = this, X = i.onRefreshInit && function() {
            return i.onRefreshInit(m)
        }
            , nt = Wh(k, I, P), ae = $h(k, I), et = 0, U = 0, kt = 0, st = Ai(k, P), Ut, Wt, pi, Kt, ze, it, mt, ue, pe, C, ge, si, gi, bt, _i, Oi, as, Mt, Di, yt, Be, Te, ri, As, Ct, mr, mi, us, ls, yi, Ri, K, zi, Ie, Ne, We, Bi, hs, ni;
        if (m._startClamp = m._endClamp = !1,
            m._dir = P,
            _ *= 45,
            m.scroller = k,
            m.scroll = x ? x.time.bind(x) : st,
            Kt = st(),
            m.vars = i,
            s = s || i.animation,
        "refreshPriority"in i && (zu = 1,
        i.refreshPriority === -9999 && (nr = m)),
            W.tweenScroll = W.tweenScroll || {
                top: da(k, Pt),
                left: da(k, se)
            },
            m.tweenTo = Ut = W.tweenScroll[P.p],
            m.scrubDuration = function(A) {
                zi = Vs(A) && A,
                    zi ? K ? K.duration(A) : K = O.to(s, {
                        ease: "expo",
                        totalProgress: "+=0",
                        inherit: !1,
                        duration: zi,
                        paused: !0,
                        onComplete: function() {
                            return D && D(m)
                        }
                    }) : (K && K.progress(1).kill(),
                        K = 0)
            }
            ,
        s && (s.vars.lazy = !1,
        s._initted && !m.isReverted || s.vars.immediateRender !== !1 && i.immediateRender !== !1 && s.duration() && s.render(0, !0, !0),
            m.animation = s.pause(),
            s.scrollTrigger = m,
            m.scrubDuration(c),
            yi = 0,
        a || (a = s.vars.id)),
        y && ((!Hi(y) || y.push) && (y = {
            snapTo: y
        }),
        "scrollBehavior"in lt.style && O.set(I ? [lt, He] : k, {
            scrollBehavior: "auto"
        }),
            Z.forEach(function(A) {
                return re(A) && A.target === (I ? dt.scrollingElement || He : k) && (A.smooth = !1)
            }),
            pi = re(y.snapTo) ? y.snapTo : y.snapTo === "labels" ? Hh(s) : y.snapTo === "labelsDirectional" ? qh(s) : y.directional !== !1 ? function(A, q) {
                    return ko(y.snapTo)(A, jt() - U < 500 ? 0 : q.direction)
                }
                : O.utils.snap(y.snapTo),
            Ie = y.duration || {
                min: .1,
                max: 2
            },
            Ie = Hi(Ie) ? tr(Ie.min, Ie.max) : tr(Ie, Ie),
            Ne = O.delayedCall(y.delay || zi / 2 || .1, function() {
                var A = st()
                    , q = jt() - U < 500
                    , R = Ut.tween;
                if ((q || Math.abs(m.getVelocity()) < 10) && !R && !hn && et !== A) {
                    var Y = (A - it) / bt, At = s && !z ? s.totalProgress() : Y, Q = q ? 0 : (At - Ri) / (jt() - Hs) * 1e3 || 0, vt = O.utils.clamp(-Y, 1 - Y, fs(Q / 2) * Q / .185), $t = Y + (y.inertia === !1 ? 0 : vt), _t, ht, ot = y, $e = ot.onStart, ft = ot.onInterrupt, _e = ot.onComplete;
                    if (_t = pi($t, m),
                    Vs(_t) || (_t = $t),
                        ht = Math.round(it + _t * bt),
                    A <= mt && A >= it && ht !== A) {
                        if (R && !R._initted && R.data <= fs(ht - A))
                            return;
                        y.inertia === !1 && (vt = _t - Y),
                            Ut(ht, {
                                duration: Ie(fs(Math.max(fs($t - At), fs(_t - At)) * .185 / Q / .05 || 0)),
                                ease: y.ease || "power3",
                                data: fs(ht - A),
                                onInterrupt: function() {
                                    return Ne.restart(!0) && ft && ft(m)
                                },
                                onComplete: function() {
                                    m.update(),
                                        et = st(),
                                    s && (K ? K.resetTo("totalProgress", _t, s._tTime / s._tDur) : s.progress(_t)),
                                        yi = Ri = s && !z ? s.totalProgress() : m.progress,
                                    v && v(m),
                                    _e && _e(m)
                                }
                            }, A, vt * bt, ht - A - vt * bt),
                        $e && $e(m, Ut.tween)
                    }
                } else
                    m.isActive && et !== A && Ne.restart(!0)
            }).pause()),
        a && (eo[a] = m),
            p = m.trigger = le(p || f !== !0 && f),
            ni = p && p._gsap && p._gsap.stRevert,
        ni && (ni = ni(m)),
            f = f === !0 ? p : le(f),
        me(o) && (o = {
            targets: p,
            className: o
        }),
        f && (g === !1 || g === ke || (g = !g && f.parentNode && f.parentNode.style && Me(f.parentNode).display === "flex" ? !1 : St),
            m.pin = f,
            Wt = O.core.getCache(f),
            Wt.spacer ? _i = Wt.pinState : (S && (S = le(S),
            S && !S.nodeType && (S = S.current || S.nativeElement),
                Wt.spacerIsNative = !!S,
            S && (Wt.spacerState = Mr(S))),
                Wt.spacer = Mt = S || dt.createElement("div"),
                Mt.classList.add("pin-spacer"),
            a && Mt.classList.add("pin-spacer-" + a),
                Wt.pinState = _i = Mr(f)),
        i.force3D !== !1 && O.set(f, {
            force3D: !0
        }),
            m.spacer = Mt = Wt.spacer,
            ls = Me(f),
            As = ls[g + P.os2],
            yt = O.getProperty(f),
            Be = O.quickSetter(f, P.a, Ft),
            Fn(f, Mt, ls),
            as = Mr(f)),
            N) {
            si = Hi(N) ? oa(N, aa) : aa,
                C = kr("scroller-start", a, k, P, si, 0),
                ge = kr("scroller-end", a, k, P, si, 0, C),
                Di = C["offset" + P.op.d2];
            var Ls = le(Pi(k, "content") || k);
            ue = this.markerStart = kr("start", a, Ls, P, si, Di, 0, x),
                pe = this.markerEnd = kr("end", a, Ls, P, si, Di, 0, x),
            x && (hs = O.quickSetter([ue, pe], P.a, Ft)),
            !V && !(ei.length && Pi(k, "fixedMarkers") === !0) && (Yh(I ? lt : k),
                O.set([C, ge], {
                    force3D: !0
                }),
                mr = O.quickSetter(C, P.a, Ft),
                us = O.quickSetter(ge, P.a, Ft))
        }
        if (x) {
            var H = x.vars.onUpdate
                , B = x.vars.onUpdateParams;
            x.eventCallback("onUpdate", function() {
                m.update(0, 0, 1),
                H && H.apply(x, B || [])
            })
        }
        if (m.previous = function() {
            return G[G.indexOf(m) - 1]
        }
            ,
            m.next = function() {
                return G[G.indexOf(m) + 1]
            }
            ,
            m.revert = function(A, q) {
                if (!q)
                    return m.kill(!0);
                var R = A !== !1 || !m.enabled
                    , Y = qt;
                R !== m.isReverted && (R && (We = Math.max(st(), m.scroll.rec || 0),
                    kt = m.progress,
                    Bi = s && s.progress()),
                ue && [ue, pe, C, ge].forEach(function(At) {
                    return At.style.display = R ? "none" : "block"
                }),
                R && (qt = m,
                    m.update(R)),
                f && (!b || !m.isActive) && (R ? Xh(f, Mt, _i) : Fn(f, Mt, Me(f), Ct)),
                R || m.update(R),
                    qt = Y,
                    m.isReverted = R)
            }
            ,
            m.refresh = function(A, q, R, Y) {
                if (!((qt || !m.enabled) && !q)) {
                    if (f && A && Oe) {
                        Ot(u, "scrollEnd", Xu);
                        return
                    }
                    !ee && X && X(m),
                        qt = m,
                    Ut.tween && !R && (Ut.tween.kill(),
                        Ut.tween = 0),
                    K && K.pause(),
                    d && s && s.revert({
                        kill: !1
                    }).invalidate(),
                    m.isReverted || m.revert(!0, !0),
                        m._subPinOffset = !1;
                    var At = nt(), Q = ae(), vt = x ? x.duration() : Qe(k, P), $t = bt <= .01, _t = 0, ht = Y || 0, ot = Hi(R) ? R.end : i.end, $e = i.endTrigger || p, ft = Hi(R) ? R.start : i.start || (i.start === 0 || !p ? 0 : f ? "0 0" : "0 100%"), _e = m.pinnedContainer = i.pinnedContainer && le(i.pinnedContainer, m), qe = p && Math.max(0, G.indexOf(m)) || 0, Bt = qe, It, Yt, Ii, yr, Ht, Tt, je, dn, Ro, Os, Ve, Rs, vr;
                    for (N && Hi(R) && (Rs = O.getProperty(C, P.p),
                        vr = O.getProperty(ge, P.p)); Bt--; )
                        Tt = G[Bt],
                        Tt.end || Tt.refresh(0, 1) || (qt = m),
                            je = Tt.pin,
                        je && (je === p || je === f || je === _e) && !Tt.isReverted && (Os || (Os = []),
                            Os.unshift(Tt),
                            Tt.revert(!0, !0)),
                        Tt !== G[Bt] && (qe--,
                            Bt--);
                    for (re(ft) && (ft = ft(m)),
                             ft = ia(ft, "start", m),
                             it = ca(ft, p, At, P, st(), ue, C, m, Q, E, V, vt, x, m._startClamp && "_startClamp") || (f ? -.001 : 0),
                         re(ot) && (ot = ot(m)),
                         me(ot) && !ot.indexOf("+=") && (~ot.indexOf(" ") ? ot = (me(ft) ? ft.split(" ")[0] : "") + ot : (_t = Wr(ot.substr(2), At),
                             ot = me(ft) ? ft : (x ? O.utils.mapRange(0, x.duration(), x.scrollTrigger.start, x.scrollTrigger.end, it) : it) + _t,
                             $e = p)),
                             ot = ia(ot, "end", m),
                             mt = Math.max(it, ca(ot || ($e ? "100% 0" : vt), $e, At, P, st() + _t, pe, ge, m, Q, E, V, vt, x, m._endClamp && "_endClamp")) || -.001,
                             _t = 0,
                             Bt = qe; Bt--; )
                        Tt = G[Bt],
                            je = Tt.pin,
                        je && Tt.start - Tt._pinPush <= it && !x && Tt.end > 0 && (It = Tt.end - (m._startClamp ? Math.max(0, Tt.start) : Tt.start),
                        (je === p && Tt.start - Tt._pinPush < it || je === _e) && isNaN(ft) && (_t += It * (1 - Tt.progress)),
                        je === f && (ht += It));
                    if (it += _t,
                        mt += _t,
                    m._startClamp && (m._startClamp += _t),
                    m._endClamp && !ee && (m._endClamp = mt || -.001,
                        mt = Math.min(mt, Qe(k, P))),
                        bt = mt - it || (it -= .01) && .001,
                    $t && (kt = O.utils.clamp(0, 1, O.utils.normalize(it, mt, We))),
                        m._pinPush = ht,
                    ue && _t && (It = {},
                        It[P.a] = "+=" + _t,
                    _e && (It[P.p] = "-=" + st()),
                        O.set([ue, pe], It)),
                    f && !(to && m.end >= Qe(k, P)))
                        It = Me(f),
                            yr = P === Pt,
                            Ii = st(),
                            Te = parseFloat(yt(P.a)) + ht,
                        !vt && mt > 1 && (Ve = (I ? dt.scrollingElement || He : k).style,
                            Ve = {
                                style: Ve,
                                value: Ve["overflow" + P.a.toUpperCase()]
                            },
                        I && Me(lt)["overflow" + P.a.toUpperCase()] !== "scroll" && (Ve.style["overflow" + P.a.toUpperCase()] = "scroll")),
                            Fn(f, Mt, It),
                            as = Mr(f),
                            Yt = ui(f, !0),
                            dn = V && Ai(k, yr ? se : Pt)(),
                            g ? (Ct = [g + P.os2, bt + ht + Ft],
                                Ct.t = Mt,
                                Bt = g === St ? rn(f, P) + bt + ht : 0,
                            Bt && (Ct.push(P.d, Bt + Ft),
                            Mt.style.flexBasis !== "auto" && (Mt.style.flexBasis = Bt + Ft)),
                                Ss(Ct),
                            _e && G.forEach(function(zs) {
                                zs.pin === _e && zs.vars.pinSpacing !== !1 && (zs._subPinOffset = !0)
                            }),
                            V && st(We)) : (Bt = rn(f, P),
                            Bt && Mt.style.flexBasis !== "auto" && (Mt.style.flexBasis = Bt + Ft)),
                        V && (Ht = {
                            top: Yt.top + (yr ? Ii - it : dn) + Ft,
                            left: Yt.left + (yr ? dn : Ii - it) + Ft,
                            boxSizing: "border-box",
                            position: "fixed"
                        },
                            Ht[Zi] = Ht["max" + Ms] = Math.ceil(Yt.width) + Ft,
                            Ht[Qi] = Ht["max" + Po] = Math.ceil(Yt.height) + Ft,
                            Ht[ke] = Ht[ke + sr] = Ht[ke + er] = Ht[ke + rr] = Ht[ke + ir] = "0",
                            Ht[St] = It[St],
                            Ht[St + sr] = It[St + sr],
                            Ht[St + er] = It[St + er],
                            Ht[St + rr] = It[St + rr],
                            Ht[St + ir] = It[St + ir],
                            Oi = Uh(_i, Ht, b),
                        ee && st(0)),
                            s ? (Ro = s._initted,
                                bn(1),
                                s.render(s.duration(), !0, !0),
                                ri = yt(P.a) - Te + bt + ht,
                                mi = Math.abs(bt - ri) > 1,
                            V && mi && Oi.splice(Oi.length - 2, 2),
                                s.render(0, !0, !0),
                            Ro || s.invalidate(!0),
                            s.parent || s.totalTime(s.totalTime()),
                                bn(0)) : ri = bt,
                        Ve && (Ve.value ? Ve.style["overflow" + P.a.toUpperCase()] = Ve.value : Ve.style.removeProperty("overflow-" + P.a));
                    else if (p && st() && !x)
                        for (Yt = p.parentNode; Yt && Yt !== lt; )
                            Yt._pinOffset && (it -= Yt._pinOffset,
                                mt -= Yt._pinOffset),
                                Yt = Yt.parentNode;
                    Os && Os.forEach(function(zs) {
                        return zs.revert(!1, !0)
                    }),
                        m.start = it,
                        m.end = mt,
                        Kt = ze = ee ? We : st(),
                    !x && !ee && (Kt < We && st(We),
                        m.scroll.rec = 0),
                        m.revert(!1, !0),
                        U = jt(),
                    Ne && (et = -1,
                        Ne.restart(!0)),
                        qt = 0,
                    s && z && (s._initted || Bi) && s.progress() !== Bi && s.progress(Bi || 0, !0).render(s.time(), !0, !0),
                    ($t || kt !== m.progress || x || d) && (s && !z && s.totalProgress(x && it < -.001 && !kt ? O.utils.normalize(it, mt, 0) : kt, !0),
                        m.progress = $t || (Kt - it) / bt === kt ? 0 : kt),
                    f && g && (Mt._pinOffset = Math.round(m.progress * ri)),
                    K && K.invalidate(),
                    isNaN(Rs) || (Rs -= O.getProperty(C, P.p),
                        vr -= O.getProperty(ge, P.p),
                        Ar(C, P, Rs),
                        Ar(ue, P, Rs - (Y || 0)),
                        Ar(ge, P, vr),
                        Ar(pe, P, vr - (Y || 0))),
                    $t && !ee && m.update(),
                    h && !ee && !gi && (gi = !0,
                        h(m),
                        gi = !1)
                }
            }
            ,
            m.getVelocity = function() {
                return (st() - ze) / (jt() - Hs) * 1e3 || 0
            }
            ,
            m.endAnimation = function() {
                Ns(m.callbackAnimation),
                s && (K ? K.progress(1) : s.paused() ? z || Ns(s, m.direction < 0, 1) : Ns(s, s.reversed()))
            }
            ,
            m.labelToScroll = function(A) {
                return s && s.labels && (it || m.refresh() || it) + s.labels[A] / s.duration() * bt || 0
            }
            ,
            m.getTrailing = function(A) {
                var q = G.indexOf(m)
                    , R = m.direction > 0 ? G.slice(0, q).reverse() : G.slice(q + 1);
                return (me(A) ? R.filter(function(Y) {
                    return Y.vars.preventOverlaps === A
                }) : R).filter(function(Y) {
                    return m.direction > 0 ? Y.end <= it : Y.start >= mt
                })
            }
            ,
            m.update = function(A, q, R) {
                if (!(x && !R && !A)) {
                    var Y = ee === !0 ? We : m.scroll(), At = A ? 0 : (Y - it) / bt, Q = At < 0 ? 0 : At > 1 ? 1 : At || 0, vt = m.progress, $t, _t, ht, ot, $e, ft, _e, qe;
                    if (q && (ze = Kt,
                        Kt = x ? st() : Y,
                    y && (Ri = yi,
                        yi = s && !z ? s.totalProgress() : Q)),
                    _ && f && !qt && !Sr && Oe && (!Q && it < Y + (Y - ze) / (jt() - Hs) * _ ? Q = 1e-4 : Q === 1 && mt > Y + (Y - ze) / (jt() - Hs) * _ && (Q = .9999)),
                    Q !== vt && m.enabled) {
                        if ($t = m.isActive = !!Q && Q < 1,
                            _t = !!vt && vt < 1,
                            ft = $t !== _t,
                            $e = ft || !!Q != !!vt,
                            m.direction = Q > vt ? 1 : -1,
                            m.progress = Q,
                        $e && !qt && (ht = Q && !vt ? 0 : Q === 1 ? 1 : vt === 1 ? 2 : 3,
                        z && (ot = !ft && M[ht + 1] !== "none" && M[ht + 1] || M[ht],
                            qe = s && (ot === "complete" || ot === "reset" || ot in s))),
                        T && (ft || qe) && (qe || c || !s) && (re(T) ? T(m) : m.getTrailing(T).forEach(function(Ii) {
                            return Ii.endAnimation()
                        })),
                        z || (K && !qt && !Sr ? (K._dp._time - K._start !== K._time && K.render(K._dp._time - K._start),
                            K.resetTo ? K.resetTo("totalProgress", Q, s._tTime / s._tDur) : (K.vars.totalProgress = Q,
                                K.invalidate().restart())) : s && s.totalProgress(Q, !!(qt && (U || A)))),
                            f) {
                            if (A && g && (Mt.style[g + P.os2] = As),
                                !V)
                                Be(js(Te + ri * Q));
                            else if ($e) {
                                if (_e = !A && Q > vt && mt + 1 > Y && Y + 1 >= Qe(k, P),
                                    b)
                                    if (!A && ($t || _e)) {
                                        var Bt = ui(f, !0)
                                            , It = Y - it;
                                        fa(f, lt, Bt.top + (P === Pt ? It : 0) + Ft, Bt.left + (P === Pt ? 0 : It) + Ft)
                                    } else
                                        fa(f, Mt);
                                Ss($t || _e ? Oi : as),
                                mi && Q < 1 && $t || Be(Te + (Q === 1 && !_e ? ri : 0))
                            }
                        }
                        y && !Ut.tween && !qt && !Sr && Ne.restart(!0),
                        o && (ft || w && Q && (Q < 1 || !Cn)) && pr(o.targets).forEach(function(Ii) {
                            return Ii.classList[$t || w ? "add" : "remove"](o.className)
                        }),
                        n && !z && !A && n(m),
                            $e && !qt ? (z && (qe && (ot === "complete" ? s.pause().totalProgress(1) : ot === "reset" ? s.restart(!0).pause() : ot === "restart" ? s.restart(!0) : s[ot]()),
                            n && n(m)),
                            (ft || !Cn) && (l && ft && En(m, l),
                            L[ht] && En(m, L[ht]),
                            w && (Q === 1 ? m.kill(!1, 1) : L[ht] = 0),
                            ft || (ht = Q === 1 ? 1 : 3,
                            L[ht] && En(m, L[ht]))),
                            F && !$t && Math.abs(m.getVelocity()) > (Vs(F) ? F : 2500) && (Ns(m.callbackAnimation),
                                K ? K.progress(1) : Ns(s, ot === "reverse" ? 1 : !Q, 1))) : z && n && !qt && n(m)
                    }
                    if (us) {
                        var Yt = x ? Y / x.duration() * (x._caScrollDist || 0) : Y;
                        mr(Yt + (C._isFlipped ? 1 : 0)),
                            us(Yt)
                    }
                    hs && hs(-Y / x.duration() * (x._caScrollDist || 0))
                }
            }
            ,
            m.enable = function(A, q) {
                m.enabled || (m.enabled = !0,
                    Ot(k, "resize", Xs),
                I || Ot(k, "scroll", ds),
                X && Ot(u, "refreshInit", X),
                A !== !1 && (m.progress = kt = 0,
                    Kt = ze = et = st()),
                q !== !1 && m.refresh())
            }
            ,
            m.getTween = function(A) {
                return A && Ut ? Ut.tween : K
            }
            ,
            m.setPositions = function(A, q, R, Y) {
                if (x) {
                    var At = x.scrollTrigger
                        , Q = x.duration()
                        , vt = At.end - At.start;
                    A = At.start + vt * A / Q,
                        q = At.start + vt * q / Q
                }
                m.refresh(!1, !1, {
                    start: sa(A, R && !!m._startClamp),
                    end: sa(q, R && !!m._endClamp)
                }, Y),
                    m.update()
            }
            ,
            m.adjustPinSpacing = function(A) {
                if (Ct && A) {
                    var q = Ct.indexOf(P.d) + 1;
                    Ct[q] = parseFloat(Ct[q]) + A + Ft,
                        Ct[1] = parseFloat(Ct[1]) + A + Ft,
                        Ss(Ct)
                }
            }
            ,
            m.disable = function(A, q) {
                if (m.enabled && (A !== !1 && m.revert(!0, !0),
                    m.enabled = m.isActive = !1,
                q || K && K.pause(),
                    We = 0,
                Wt && (Wt.uncache = 1),
                X && Lt(u, "refreshInit", X),
                Ne && (Ne.pause(),
                Ut.tween && Ut.tween.kill() && (Ut.tween = 0)),
                    !I)) {
                    for (var R = G.length; R--; )
                        if (G[R].scroller === k && G[R] !== m)
                            return;
                    Lt(k, "resize", Xs),
                    I || Lt(k, "scroll", ds)
                }
            }
            ,
            m.kill = function(A, q) {
                m.disable(A, q),
                K && !q && K.kill(),
                a && delete eo[a];
                var R = G.indexOf(m);
                R >= 0 && G.splice(R, 1),
                R === te && Yr > 0 && te--,
                    R = 0,
                    G.forEach(function(Y) {
                        return Y.scroller === m.scroller && (R = 1)
                    }),
                R || ee || (m.scroll.rec = 0),
                s && (s.scrollTrigger = null,
                A && s.revert({
                    kill: !1
                }),
                q || s.kill()),
                ue && [ue, pe, C, ge].forEach(function(Y) {
                    return Y.parentNode && Y.parentNode.removeChild(Y)
                }),
                nr === m && (nr = 0),
                f && (Wt && (Wt.uncache = 1),
                    R = 0,
                    G.forEach(function(Y) {
                        return Y.pin === f && R++
                    }),
                R || (Wt.spacer = 0)),
                i.onKill && i.onKill(m)
            }
            ,
            G.push(m),
            m.enable(!1, !1),
        ni && ni(m),
        s && s.add && !bt) {
            var rt = m.update;
            m.update = function() {
                m.update = rt,
                it || mt || m.refresh()
            }
                ,
                O.delayedCall(.01, m.update),
                bt = .01,
                it = mt = 0
        } else
            m.refresh();
        f && Vh()
    }
        ,
        u.register = function(i) {
            return ps || (O = i || $u(),
            Wu() && window.document && u.enable(),
                ps = qs),
                ps
        }
        ,
        u.defaults = function(i) {
            if (i)
                for (var s in i)
                    Pr[s] = i[s];
            return Pr
        }
        ,
        u.disable = function(i, s) {
            qs = 0,
                G.forEach(function(n) {
                    return n[s ? "kill" : "disable"](i)
                }),
                Lt(J, "wheel", ds),
                Lt(dt, "scroll", ds),
                clearInterval(Cr),
                Lt(dt, "touchcancel", Ue),
                Lt(lt, "touchstart", Ue),
                Tr(Lt, dt, "pointerdown,touchstart,mousedown", ra),
                Tr(Lt, dt, "pointerup,touchend,mouseup", na),
                en.kill(),
                Er(Lt);
            for (var r = 0; r < Z.length; r += 3)
                Fr(Lt, Z[r], Z[r + 1]),
                    Fr(Lt, Z[r], Z[r + 2])
        }
        ,
        u.enable = function() {
            if (J = window,
                dt = document,
                He = dt.documentElement,
                lt = dt.body,
            O && (pr = O.utils.toArray,
                tr = O.utils.clamp,
                Jn = O.core.context || Ue,
                bn = O.core.suppressOverwrites || Ue,
                So = J.history.scrollRestoration || "auto",
                io = J.pageYOffset,
                O.core.globals("ScrollTrigger", u),
                lt)) {
                qs = 1,
                    Cs = document.createElement("div"),
                    Cs.style.height = "100vh",
                    Cs.style.position = "absolute",
                    Ku(),
                    Nh(),
                    wt.register(O),
                    u.isTouch = wt.isTouch,
                    xi = wt.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
                    Qn = wt.isTouch === 1,
                    Ot(J, "wheel", ds),
                    Ru = [J, dt, He, lt],
                    O.matchMedia ? (u.matchMedia = function(a) {
                        var l = O.matchMedia(), h;
                        for (h in a)
                            l.add(h, a[h]);
                        return l
                    }
                        ,
                        O.addEventListener("matchMediaInit", function() {
                            return Mo()
                        }),
                        O.addEventListener("matchMediaRevert", function() {
                            return Gu()
                        }),
                        O.addEventListener("matchMedia", function() {
                            Vi(0, 1),
                                rs("matchMedia")
                        }),
                        O.matchMedia("(orientation: portrait)", function() {
                            return Tn(),
                                Tn
                        })) : console.warn("Requires GSAP 3.11.0 or later"),
                    Tn(),
                    Ot(dt, "scroll", ds);
                var i = lt.style, s = i.borderTopStyle, r = O.core.Animation.prototype, n, o;
                for (r.revert || Object.defineProperty(r, "revert", {
                    value: function() {
                        return this.time(-.01, !0)
                    }
                }),
                         i.borderTopStyle = "solid",
                         n = ui(lt),
                         Pt.m = Math.round(n.top + Pt.sc()) || 0,
                         se.m = Math.round(n.left + se.sc()) || 0,
                         s ? i.borderTopStyle = s : i.removeProperty("border-top-style"),
                         Cr = setInterval(ua, 250),
                         O.delayedCall(.5, function() {
                             return Sr = 0
                         }),
                         Ot(dt, "touchcancel", Ue),
                         Ot(lt, "touchstart", Ue),
                         Tr(Ot, dt, "pointerdown,touchstart,mousedown", ra),
                         Tr(Ot, dt, "pointerup,touchend,mouseup", na),
                         Zn = O.utils.checkPrefix("transform"),
                         Hr.push(Zn),
                         ps = jt(),
                         en = O.delayedCall(.2, Vi).pause(),
                         gs = [dt, "visibilitychange", function() {
                             var a = J.innerWidth
                                 , l = J.innerHeight;
                             dt.hidden ? (ta = a,
                                 ea = l) : (ta !== a || ea !== l) && Xs()
                         }
                             , dt, "DOMContentLoaded", Vi, J, "load", Vi, J, "resize", Xs],
                         Er(Ot),
                         G.forEach(function(a) {
                             return a.enable(0, 1)
                         }),
                         o = 0; o < Z.length; o += 3)
                    Fr(Lt, Z[o], Z[o + 1]),
                        Fr(Lt, Z[o], Z[o + 2])
            }
        }
        ,
        u.config = function(i) {
            "limitCallbacks"in i && (Cn = !!i.limitCallbacks);
            var s = i.syncInterval;
            s && clearInterval(Cr) || (Cr = s) && setInterval(ua, s),
            "ignoreMobileResize"in i && (Qn = u.isTouch === 1 && i.ignoreMobileResize),
            "autoRefreshEvents"in i && (Er(Lt) || Er(Ot, i.autoRefreshEvents || "none"),
                Bu = (i.autoRefreshEvents + "").indexOf("resize") === -1)
        }
        ,
        u.scrollerProxy = function(i, s) {
            var r = le(i)
                , n = Z.indexOf(r)
                , o = is(r);
            ~n && Z.splice(n, o ? 6 : 2),
            s && (o ? ei.unshift(J, s, lt, s, He, s) : ei.unshift(r, s))
        }
        ,
        u.clearMatchMedia = function(i) {
            G.forEach(function(s) {
                return s._ctx && s._ctx.query === i && s._ctx.kill(!0, !0)
            })
        }
        ,
        u.isInViewport = function(i, s, r) {
            var n = (me(i) ? le(i) : i).getBoundingClientRect()
                , o = n[r ? Zi : Qi] * s || 0;
            return r ? n.right - o > 0 && n.left + o < J.innerWidth : n.bottom - o > 0 && n.top + o < J.innerHeight
        }
        ,
        u.positionInViewport = function(i, s, r) {
            me(i) && (i = le(i));
            var n = i.getBoundingClientRect()
                , o = n[r ? Zi : Qi]
                , a = s == null ? o / 2 : s in nn ? nn[s] * o : ~s.indexOf("%") ? parseFloat(s) * o / 100 : parseFloat(s) || 0;
            return r ? (n.left + a) / J.innerWidth : (n.top + a) / J.innerHeight
        }
        ,
        u.killAll = function(i) {
            if (G.slice(0).forEach(function(r) {
                return r.vars.id !== "ScrollSmoother" && r.kill()
            }),
            i !== !0) {
                var s = ss.killAll || [];
                ss = {},
                    s.forEach(function(r) {
                        return r()
                    })
            }
        }
        ,
        u
}();
j.version = "3.12.5";
j.saveStyles = function(u) {
    return u ? pr(u).forEach(function(t) {
        if (t && t.style) {
            var e = De.indexOf(t);
            e >= 0 && De.splice(e, 5),
                De.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), O.core.getCache(t), Jn())
        }
    }) : De
}
;
j.revert = function(u, t) {
    return Mo(!u, t)
}
;
j.create = function(u, t) {
    return new j(u,t)
}
;
j.refresh = function(u) {
    return u ? Xs() : (ps || j.register()) && Vi(!0)
}
;
j.update = function(u) {
    return ++Z.cache && ci(u === !0 ? 2 : 0)
}
;
j.clearScrollMemory = Uu;
j.maxScroll = function(u, t) {
    return Qe(u, t ? se : Pt)
}
;
j.getScrollFunc = function(u, t) {
    return Ai(le(u), t ? se : Pt)
}
;
j.getById = function(u) {
    return eo[u]
}
;
j.getAll = function() {
    return G.filter(function(u) {
        return u.vars.id !== "ScrollSmoother"
    })
}
;
j.isScrolling = function() {
    return !!Oe
}
;
j.snapDirectional = ko;
j.addEventListener = function(u, t) {
    var e = ss[u] || (ss[u] = []);
    ~e.indexOf(t) || e.push(t)
}
;
j.removeEventListener = function(u, t) {
    var e = ss[u]
        , i = e && e.indexOf(t);
    i >= 0 && e.splice(i, 1)
}
;
j.batch = function(u, t) {
    var e = [], i = {}, s = t.interval || .016, r = t.batchMax || 1e9, n = function(l, h) {
        var c = []
            , p = []
            , f = O.delayedCall(s, function() {
            h(c, p),
                c = [],
                p = []
        }).pause();
        return function(g) {
            c.length || f.restart(!0),
                c.push(g.trigger),
                p.push(g),
            r <= c.length && f.progress(1)
        }
    }, o;
    for (o in t)
        i[o] = o.substr(0, 2) === "on" && re(t[o]) && o !== "onRefreshInit" ? n(o, t[o]) : t[o];
    return re(r) && (r = r(),
        Ot(j, "refresh", function() {
            return r = t.batchMax()
        })),
        pr(u).forEach(function(a) {
            var l = {};
            for (o in i)
                l[o] = i[o];
            l.trigger = a,
                e.push(j.create(l))
        }),
        e
}
;
var pa = function(t, e, i, s) {
    return e > s ? t(s) : e < 0 && t(0),
        i > s ? (s - e) / (i - e) : i < 0 ? e / (e - i) : 1
}, Pn = function u(t, e) {
    e === !0 ? t.style.removeProperty("touch-action") : t.style.touchAction = e === !0 ? "auto" : e ? "pan-" + e + (wt.isTouch ? " pinch-zoom" : "") : "none",
    t === He && u(lt, e)
}, Lr = {
    auto: 1,
    scroll: 1
}, Zh = function(t) {
    var e = t.event, i = t.target, s = t.axis, r = (e.changedTouches ? e.changedTouches[0] : e).target, n = r._gsap || O.core.getCache(r), o = jt(), a;
    if (!n._isScrollT || o - n._isScrollT > 2e3) {
        for (; r && r !== lt && (r.scrollHeight <= r.clientHeight && r.scrollWidth <= r.clientWidth || !(Lr[(a = Me(r)).overflowY] || Lr[a.overflowX])); )
            r = r.parentNode;
        n._isScroll = r && r !== i && !is(r) && (Lr[(a = Me(r)).overflowY] || Lr[a.overflowX]),
            n._isScrollT = o
    }
    (n._isScroll || s === "x") && (e.stopPropagation(),
        e._gsapAllow = !0)
}, Qu = function(t, e, i, s) {
    return wt.create({
        target: t,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: e,
        onWheel: s = s && Zh,
        onPress: s,
        onDrag: s,
        onScroll: s,
        onEnable: function() {
            return i && Ot(dt, wt.eventTypes[0], _a, !1, !0)
        },
        onDisable: function() {
            return Lt(dt, wt.eventTypes[0], _a, !0)
        }
    })
}, Qh = /(input|label|select|textarea)/i, ga, _a = function(t) {
    var e = Qh.test(t.target.tagName);
    (e || ga) && (t._gsapAllow = !0,
        ga = e)
}, Jh = function(t) {
    Hi(t) || (t = {}),
        t.preventDefault = t.isNormalizer = t.allowClicks = !0,
    t.type || (t.type = "wheel,touch"),
        t.debounce = !!t.debounce,
        t.id = t.id || "normalizer";
    var e = t, i = e.normalizeScrollX, s = e.momentum, r = e.allowNestedScroll, n = e.onRelease, o, a, l = le(t.target) || He, h = O.core.globals().ScrollSmoother, c = h && h.get(), p = xi && (t.content && le(t.content) || c && t.content !== !1 && !c.smooth() && c.content()), f = Ai(l, Pt), g = Ai(l, se), d = 1, _ = (wt.isTouch && J.visualViewport ? J.visualViewport.scale * J.visualViewport.width : J.outerWidth) / J.innerWidth, D = 0, v = re(s) ? function() {
            return s(o)
        }
        : function() {
            return s || 2.8
        }
        , w, y, b = Qu(l, t.type, !0, r), S = function() {
        return y = !1
    }, x = Ue, F = Ue, T = function() {
        a = Qe(l, Pt),
            F = tr(xi ? 1 : 0, a),
        i && (x = tr(0, Qe(l, se))),
            w = Ji
    }, P = function() {
        p._gsap.y = js(parseFloat(p._gsap.y) + f.offset) + "px",
            p.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(p._gsap.y) + ", 0, 1)",
            f.offset = f.cacheID = 0
    }, z = function() {
        if (y) {
            requestAnimationFrame(S);
            var N = js(o.deltaY / 2)
                , E = F(f.v - N);
            if (p && E !== f.v + f.offset) {
                f.offset = E - f.v;
                var m = js((parseFloat(p && p._gsap.y) || 0) - f.offset);
                p.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + m + ", 0, 1)",
                    p._gsap.y = m + "px",
                    f.cacheID = Z.cache,
                    ci()
            }
            return !0
        }
        f.offset && P(),
            y = !0
    }, k, W, I, V, L = function() {
        T(),
        k.isActive() && k.vars.scrollY > a && (f() > a ? k.progress(1) && f(a) : k.resetTo("scrollY", a))
    };
    return p && O.set(p, {
        y: "+=0"
    }),
        t.ignoreCheck = function(M) {
            return xi && M.type === "touchmove" && z() || d > 1.05 && M.type !== "touchstart" || o.isGesturing || M.touches && M.touches.length > 1
        }
        ,
        t.onPress = function() {
            y = !1;
            var M = d;
            d = js((J.visualViewport && J.visualViewport.scale || 1) / _),
                k.pause(),
            M !== d && Pn(l, d > 1.01 ? !0 : i ? !1 : "x"),
                W = g(),
                I = f(),
                T(),
                w = Ji
        }
        ,
        t.onRelease = t.onGestureStart = function(M, N) {
            if (f.offset && P(),
                !N)
                V.restart(!0);
            else {
                Z.cache++;
                var E = v(), m, X;
                i && (m = g(),
                    X = m + E * .05 * -M.velocityX / .227,
                    E *= pa(g, m, X, Qe(l, se)),
                    k.vars.scrollX = x(X)),
                    m = f(),
                    X = m + E * .05 * -M.velocityY / .227,
                    E *= pa(f, m, X, Qe(l, Pt)),
                    k.vars.scrollY = F(X),
                    k.invalidate().duration(E).play(.01),
                (xi && k.vars.scrollY >= a || m >= a - 1) && O.to({}, {
                    onUpdate: L,
                    duration: E
                })
            }
            n && n(M)
        }
        ,
        t.onWheel = function() {
            k._ts && k.pause(),
            jt() - D > 1e3 && (w = 0,
                D = jt())
        }
        ,
        t.onChange = function(M, N, E, m, X) {
            if (Ji !== w && T(),
            N && i && g(x(m[2] === N ? W + (M.startX - M.x) : g() + N - m[1])),
                E) {
                f.offset && P();
                var nt = X[2] === E
                    , ae = nt ? I + M.startY - M.y : f() + E - X[1]
                    , et = F(ae);
                nt && ae !== et && (I += et - ae),
                    f(et)
            }
            (E || N) && ci()
        }
        ,
        t.onEnable = function() {
            Pn(l, i ? !1 : "x"),
                j.addEventListener("refresh", L),
                Ot(J, "resize", L),
            f.smooth && (f.target.style.scrollBehavior = "auto",
                f.smooth = g.smooth = !1),
                b.enable()
        }
        ,
        t.onDisable = function() {
            Pn(l, !0),
                Lt(J, "resize", L),
                j.removeEventListener("refresh", L),
                b.kill()
        }
        ,
        t.lockAxis = t.lockAxis !== !1,
        o = new wt(t),
        o.iOS = xi,
    xi && !f() && f(1),
    xi && O.ticker.add(Ue),
        V = o._dc,
        k = O.to(o, {
            ease: "power4",
            paused: !0,
            inherit: !1,
            scrollX: i ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
                scrollY: Zu(f, f(), function() {
                    return k.pause()
                })
            },
            onUpdate: ci,
            onComplete: V.vars.onComplete
        }),
        o
};
j.sort = function(u) {
    return G.sort(u || function(t, e) {
        return (t.vars.refreshPriority || 0) * -1e6 + t.start - (e.start + (e.vars.refreshPriority || 0) * -1e6)
    }
    )
}
;
j.observe = function(u) {
    return new wt(u)
}
;
j.normalizeScroll = function(u) {
    if (typeof u > "u")
        return Jt;
    if (u === !0 && Jt)
        return Jt.enable();
    if (u === !1) {
        Jt && Jt.kill(),
            Jt = u;
        return
    }
    var t = u instanceof wt ? u : Jh(u);
    return Jt && Jt.target === t.target && Jt.kill(),
    is(t.target) && (Jt = t),
        t
}
;
j.core = {
    _getVelocityProp: Kn,
    _inputObserver: Qu,
    _scrollers: Z,
    _proxies: ei,
    bridge: {
        ss: function() {
            Oe || rs("scrollStart"),
                Oe = jt()
        },
        ref: function() {
            return qt
        }
    }
};
$u() && O.registerPlugin(j);
ne.registerPlugin(j);
class tc {
    timeouts = {
        resizeThrottle: null
    };
    windowWidth;
    windowHeight;
    clientWidth;
    clientHeight;
    isScrolling = !1;
    lenis;
    constructor() {
        let t = "unknown";
        navigator.userAgent.indexOf("Win") !== -1 ? t = "windows" : navigator.userAgent.indexOf("Android") !== -1 ? t = "android" : navigator.userAgent.indexOf("Mac") !== -1 ? t = "mac" : navigator.userAgent.indexOf("Linux") !== -1 && (t = "linux"),
            document.documentElement.classList.add(`is-${t}`);
        let e = "unknown";
        navigator.userAgent.indexOf("Firefox") !== -1 ? e = "firefox" : navigator.userAgent.indexOf("Chrome") !== -1 ? e = "chrome" : navigator.userAgent.indexOf("Safari") !== -1 && (e = "safari"),
            document.documentElement.classList.add(`is-${e}`),
            this.bindEvents()
    }
    init() {
        this.initLenis(),
            xe.init(),
            this.onResize(),
            xe.nextTick(this.intro, this)
    }
    bindEvents() {
        window.addEventListener("resize", this.resizeThrottle.bind(this)),
            window.addEventListener("scroll", this.onScroll.bind(this), {
                passive: !0
            }),
            window.addEventListener("mousemove", this.onMouseMove.bind(this), {
                passive: !0
            }),
            $.on("updateViewport", this.onResize, this, !0);
        const t = new IntersectionObserver(e => {
                e.forEach(i => {
                        i.target.dispatchEvent(new CustomEvent("intersect",{
                            detail: {
                                isIntersecting: i.isIntersecting
                            }
                        })),
                            i.isIntersecting ? (i.target.classList.add("is-in-view"),
                                i.target.classList.remove("is-out-of-view", "is-out-of-view-top", "is-out-of-view-bottom")) : (i.target.classList.remove("is-in-view"),
                                i.target.classList.add("is-out-of-view"),
                                i.target.classList.toggle("is-out-of-view-top", i.boundingClientRect.top < 0),
                                i.target.classList.toggle("is-out-of-view-bottom", i.boundingClientRect.top > 0))
                    }
                )
            }
            ,{
                threshold: 0
            });
        document.querySelectorAll("[data-intersect]").forEach(e => {
                t.observe(e)
            }
        ),
            document.readyState === "complete" ? this.siteLoaded() : window.addEventListener("load", this.siteLoaded, {
                once: !0
            }),
            this.onScroll()
    }
    initLenis() {
        const t = new dh;
        t.on("scroll", j.update),
            ne.ticker.add(e => {
                    t.raf(e * 1e3)
                }
            ),
            ne.ticker.lagSmoothing(0),
            window.lenis = t,
            this.lenis = t
    }
    siteLoaded() {
        document.documentElement.classList.add("is-loaded"),
            $.emit("siteLoaded")
    }
    resizeThrottle() {
        clearTimeout(this.timeouts.resizeThrottle),
            this.timeouts.resizeThrottle = setTimeout( () => {
                    xe.nextTick(this.onResize, this)
                }
                , 200)
    }
    onResize() {
        const t = window.innerWidth;
        let e = !1;
        this.windowWidth !== t && (this.windowWidth !== void 0 && (e = !0),
            this.windowWidth = t,
            this.clientWidth = document.body.clientWidth);
        const i = window.innerHeight;
        let s = !1;
        this.windowHeight !== i && (this.windowHeight !== void 0 && (s = !0),
            this.windowHeight = i,
            this.clientHeight = document.body.clientHeight),
            window.safeWidth = t,
            window.safeHeight = i,
            window.maxScrollTop = document.body.scrollHeight - window.safeHeight,
            this.setScrollProgress(),
            $.emit("resize", e, s)
    }
    onScroll() {
        this.setScrollProgress(),
            xe.nextTick( () => {
                    $.emit("scroll", window.scrollY)
                }
            )
    }
    setScrollProgress() {
        window.scrollProgress = window.scrollY / window.maxScrollTop
    }
    onMouseMove(t) {
        $.emit("mousemove", t.clientX, t.clientY)
    }
    intro() {
        const t = document.querySelector(".js-site-wrapper")
            , e = document.querySelector(".js-intro")
            , i = document.querySelector(".js-mount")
            , s = e.querySelectorAll(".js-logo-line-v")
            , r = e.querySelectorAll(".js-logo-line-h")
            , n = e.querySelector(".js-border-top")
            , o = e.querySelector(".js-border-left")
            , a = e.querySelector(".js-border-right")
            , l = ne.timeline();
        l.set(t, {
            opacity: ""
        }),
            l.set(e, {
                background: "transparent"
            }),
            l.fromTo(s, {
                scaleY: 0
            }, {
                scaleY: 1,
                duration: 1,
                ease: "power4.inOut",
                stagger: .15
            }, 0),
            l.fromTo(r, {
                scaleX: 0
            }, {
                scaleX: 1,
                duration: .4,
                ease: "power4.inOut",
                stagger: 0
            }, 1),
            l.set(s, {
                transformOrigin: "50% 0"
            }),
            l.fromTo(s, {
                scaleY: 1
            }, {
                scaleY: 0,
                duration: 1,
                ease: "power4.in",
                immediateRender: !1,
                stagger: .1
            }, 2),
            l.fromTo(r, {
                scaleY: 1
            }, {
                scaleY: 0,
                duration: .5,
                ease: "power4.in",
                immediateRender: !1,
                stagger: .1
            }, 2.1),
            l.from(n, {
                scaleY: 0,
                duration: 3,
                ease: "power3.inOut"
            }, 1),
            l.from([o, a], {
                scaleX: 0,
                duration: 3,
                ease: "power3.inOut"
            }, 1),
            l.call( () => {
                    document.dispatchEvent(new CustomEvent("intro"))
                }
                , null, "-=1.85"),
            l.call( () => {
                    i.style.opacity = "1",
                        e.remove(),
                        document.documentElement.classList.remove("is-scroll-blocked"),
                        xe.nextTick( () => {
                                $.emit("updateViewport")
                            }
                        )
                }
                , null, 5)
    }
}
const Da = new tc;
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Da.init, {
    once: !0
}) : Da.init();
let ec = class {
        el;
        contrastButton;
        console;
        contrastMask;
        links;
        messages;
        message;
        messageLineBreak;
        lastMessage;
        lastTypeTime;
        writeDelay;
        canWrite;
        isPaused;
        constructor() {
            this.el = document.querySelector(".site-head"),
                this.contrastButton = document.querySelector(".js-contrast"),
                this.console = document.querySelector(".js-console"),
                this.contrastMask = document.querySelector(".js-contrast-mask"),
                this.links = this.el.querySelectorAll(".js-menu-link"),
                this.messages = ["Preparing for inevitable debugging", "Compiling designer dreams…into developer nightmares", "Please wait while I overthink this", "Optimizing… but nothing’s perfect", "Configuring the next minor inconvenience", "Fetching assets… contemplating the futility of it all", "Re-routing your expectations… expect delays", "Trying to animate enthusiasm… it’s not going well", "Stuck in an infinite loop", "Loading… still pointless", "Simulating progress… sort of", "This will probably break soon", "Simulating something useful", "Progress bar full of lies", "Finding meaning in the code", "Calculating failure probabilities", "Please wait… indefinitely", "Loading… almost there!", "Animating pixels with love", "Integrating magic and code", "Optimizing creativity… stand by", "Design and code handshake", "Fetching creativity… almost done!", "Preparing awesomeness", "Simulating brilliance… probably", "Everything is under control", "Loading coolness… almost ready", "Calibrating designer dreams", "Fusing design and animation", "Running creativity protocols", "Crafting magic… please wait", "Making things pretty… hold on", "Loading… this might take a bit", "Animating pixels… somewhat precisely", "Integrating code and reality", "Halfway done… maybe", "Optimizing… cautiously hopeful", "Design meets code… fingers crossed", "Fetching some interesting stuff", "Preparing… slowly but surely", "Aligning pixels… carefully", "Calibrating… what exactly? Good question", "Waiting… patience is key", "Simulating… something, probably", "Loading… feel free to blink", "Running some clever algorithms", "Almost there… give or take", "Integrating… like a pro", "Crafting… without breaking anything", "Adjusting fonts… nearly invisible", "Piecing it together… stay tuned", "Loading… nothing to see yet", "Running final checks… hopefully", "Almost ready… trust me", "Building… it’s getting there", "Loading… but why rush?", "Please wait… or don’t, whatever", "Initializing… prepare for bugs", "Optimizing… but who cares?", "Deploying… probably not broken", "Making things work… hopefully", "Running… but not too fast", "Testing patience… stay calm", "Initializing… no promises", "Loading… but who’s counting?", "Loading… could be worse"],
                this.message = "",
                this.messageLineBreak = !1,
                this.lastMessage = "",
                this.lastTypeTime = 0,
                this.writeDelay = 0,
                this.canWrite = !1,
                this.isPaused = !0,
                xe.nextTick(this.init, this)
        }
        init() {
            this.bindEvents()
        }
        bindEvents() {
            this.contrastButton.addEventListener("click", this.toggleContrast.bind(this), {
                passive: !0
            }),
                this.links.forEach(t => {
                        t.addEventListener("click", this.moveToSection.bind(this))
                    }
                ),
                document.addEventListener("intro", this.intro.bind(this), {
                    once: !0
                }),
                this.el.addEventListener("intersect", this.onIntersect.bind(this), {
                    passive: !0
                })
        }
        onIntersect(t) {
            this.isPaused = !t.detail.isIntersecting,
                this.isPaused ? $.off("tick", this.updateConsole, this) : $.on("tick", this.updateConsole, this)
        }
        intro() {
            const t = this.el.querySelector(".js-logo")
                , e = this.el.querySelectorAll(".js-menu-item")
                , i = this.el.querySelector(".js-qr-code")
                , s = [t, ...e]
                , r = ne.timeline();
            r.set(this.el, {
                opacity: 1
            }),
                r.from(this.el, {
                    y: "-100%",
                    duration: 1.5,
                    ease: "expo.inOut"
                }, 1),
                r.from(s, {
                    y: "-100%",
                    duration: 1.5,
                    ease: "expo.out",
                    stagger: .1
                }, 1.5),
                r.fromTo(i, {
                    "--bg-p": "0%"
                }, {
                    "--bg-p": "100%",
                    duration: 1.5,
                    ease: "expo.out"
                }, 1.75),
                r.call( () => {
                        this.canWrite = !0
                    }
                    , null, 1.5)
        }
        toggleContrast() {
            let t = "0"
                , e = "-100%";
            document.documentElement.classList.contains("theme-contrasted") && (t = "-100%",
                e = "0"),
                ne.fromTo(this.contrastMask, {
                    x: t
                }, {
                    x: e,
                    duration: 1,
                    ease: "expo.inOut",
                    onComplete: () => {
                        this.contrastMask.style.transform = "",
                            e === "0" ? document.documentElement.classList.remove("theme-contrasted") : document.documentElement.classList.add("theme-contrasted"),
                            $.emit("contrastchange", document.documentElement.classList.contains("theme-contrasted") ? "contrasted" : "default")
                    }
                }),
            e !== "0" && document.documentElement.classList.add("theme-contrasted")
        }
        moveToSection(t) {
            t.preventDefault();
            const e = t.currentTarget.getAttribute("href");
            window.lenis.scrollTo(e, {
                duration: 1.5,
                easing: i => i < .5 ? 16 * i * i * i * i * i : 1 + 16 * --i * i * i * i * i
            })
        }
        updateConsole(t) {
            if (!(!this.canWrite || t - this.lastTypeTime < this.writeDelay)) {
                if (this.message === "")
                    this.message = this.getRandomMessage(),
                        this.writeDelay = 2e3;
                else {
                    (this.message === this.lastMessage || this.messageLineBreak) && (this.console.textContent += `
`);
                    const e = this.message.charAt(0);
                    this.message = this.message.substring(1),
                        e === "," ? this.writeDelay = 100 : e === " " ? this.writeDelay = 100 : e === "" ? this.writeDelay = 200 : e === "…" ? this.writeDelay = 400 : e === "." ? this.writeDelay = 400 : this.writeDelay = 20,
                        this.console.textContent += e,
                        e === "…" ? this.messageLineBreak = !0 : this.messageLineBreak = !1
                }
                this.console.textContent = this.console.textContent.split(`
`).slice(-5).join(`
`),
                    this.lastTypeTime = t
            }
        }
        getRandomMessage() {
            let t = this.messages[Math.floor(Math.random() * this.messages.length)];
            return t === this.lastMessage && (t = this.getRandomMessage()),
                this.lastMessage = t,
                t
        }
    }
;
new ec;
class ic {
    el;
    thumb;
    drag;
    isDragging;
    constructor() {
        this.el = document.querySelector(".site-scrollbar"),
            this.thumb = this.el.querySelector(".js-thumb"),
            this.drag = {
                start: {
                    y: 0,
                    scroll: 0
                }
            },
            this.isDragging = !1,
            document.documentElement.classList.add("has-scrollbar"),
            this.bindEvents()
    }
    bindEvents() {
        const {thumb: t} = this;
        $.on("resize", this.setScrollbar, this),
            $.on("scroll", this.setScrollbar, this),
            $.on("siteLoaded", this.setScrollbar, this, !0),
            $.on("updateViewport", this.setScrollbar, this, !0),
            t.addEventListener("mousedown", this.onDragStart.bind(this), {
                passive: !1
            }),
            t.addEventListener("touchstart", this.onDragStart.bind(this), {
                passive: !1
            }),
            document.addEventListener("mousemove", this.onDragMove.bind(this), {
                passive: !1
            }),
            document.addEventListener("touchmove", this.onDragMove.bind(this), {
                passive: !1
            }),
            document.addEventListener("mouseup", this.onDragEnd.bind(this), {
                passive: !1
            }),
            document.addEventListener("touchend", this.onDragEnd.bind(this), {
                passive: !1
            })
    }
    setScrollbar() {
        const t = window.safeHeight / document.body.scrollHeight * window.safeHeight
            , e = window.scrollProgress * (window.safeHeight - t);
        this.el.style.setProperty("--scrollbar-height", `${t}px`),
            this.el.style.setProperty("--scrollbar-top", `${e}px`)
    }
    onDragStart(t) {
        let {el: e, drag: i} = this;
        this.isDragging = !0,
            i.start.y = t instanceof MouseEvent ? t.clientY : t.touches[0].clientY,
            i.start.scroll = window.scrollProgress,
            e.classList.add("is-dragging"),
            t.preventDefault()
    }
    onDragMove(t) {
        if (!this.isDragging)
            return;
        const {drag: e} = this
            , r = ((t instanceof MouseEvent ? t.clientY : t.touches && t.touches[0].clientY) - e.start.y) / window.safeHeight
            , o = (e.start.scroll + r) * window.maxScrollTop;
        window.scrollTo(0, o),
            t.preventDefault()
    }
    onDragEnd(t) {
        if (!this.isDragging)
            return;
        const {el: e} = this;
        this.isDragging = !1,
            e.classList.remove("is-dragging"),
            t.preventDefault()
    }
}
new ic;
/*!
 * DrawSVGPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Je, Ao, on, Ju, tl, ma, ro, el, il = function() {
    return typeof window < "u"
}, sl = function() {
    return Je || il() && (Je = window.gsap) && Je.registerPlugin && Je
}, sc = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi, kn = {
    rect: ["width", "height"],
    circle: ["r", "r"],
    ellipse: ["rx", "ry"],
    line: ["x2", "y2"]
}, qi = function(t) {
    return Math.round(t * 1e4) / 1e4
}, hi = function(t) {
    return parseFloat(t) || 0
}, ya = function(t, e) {
    var i = hi(t);
    return ~t.indexOf("%") ? i / 100 * e : i
}, Or = function(t, e) {
    return hi(t.getAttribute(e))
}, jr = Math.sqrt, va = function(t, e, i, s, r, n) {
    return jr(Math.pow((hi(i) - hi(t)) * r, 2) + Math.pow((hi(s) - hi(e)) * n, 2))
}, xa = function(t) {
    return console.warn(t)
}, rl = function(t) {
    return t.getAttribute("vector-effect") === "non-scaling-stroke"
}, rc = 1, nc = function(t, e, i) {
    var s = t.indexOf(" "), r, n;
    return s < 0 ? (r = i !== void 0 ? i + "" : t,
        n = t) : (r = t.substr(0, s),
        n = t.substr(s + 1)),
        r = ya(r, e),
        n = ya(n, e),
        r > n ? [n, r] : [r, n]
}, Vr = function(t) {
    if (t = Ao(t)[0],
        !t)
        return 0;
    var e = t.tagName.toLowerCase(), i = t.style, s = 1, r = 1, n, o, a, l, h, c, p;
    rl(t) && (r = t.getScreenCTM(),
        s = jr(r.a * r.a + r.b * r.b),
        r = jr(r.d * r.d + r.c * r.c));
    try {
        o = t.getBBox()
    } catch {
        xa("Some browsers won't measure invisible elements (like display:none or masks inside defs).")
    }
    var f = o || {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    }
        , g = f.x
        , d = f.y
        , _ = f.width
        , D = f.height;
    if ((!o || !_ && !D) && kn[e] && (_ = Or(t, kn[e][0]),
        D = Or(t, kn[e][1]),
    e !== "rect" && e !== "line" && (_ *= 2,
        D *= 2),
    e === "line" && (g = Or(t, "x1"),
        d = Or(t, "y1"),
        _ = Math.abs(_ - g),
        D = Math.abs(D - d))),
    e === "path")
        l = i.strokeDasharray,
            i.strokeDasharray = "none",
            n = t.getTotalLength() || 0,
        qi(s) !== qi(r) && !ma && (ma = 1) && xa("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."),
            n *= (s + r) / 2,
            i.strokeDasharray = l;
    else if (e === "rect")
        n = _ * 2 * s + D * 2 * r;
    else if (e === "line")
        n = va(g, d, g + _, d + D, s, r);
    else if (e === "polyline" || e === "polygon")
        for (a = t.getAttribute("points").match(sc) || [],
             e === "polygon" && a.push(a[0], a[1]),
                 n = 0,
                 h = 2; h < a.length; h += 2)
            n += va(a[h - 2], a[h - 1], a[h], a[h + 1], s, r) || 0;
    else
        (e === "circle" || e === "ellipse") && (c = _ / 2 * s,
            p = D / 2 * r,
            n = Math.PI * (3 * (c + p) - jr((3 * c + p) * (c + 3 * p))));
    return n || 0
}, wa = function(t, e) {
    if (t = Ao(t)[0],
        !t)
        return [0, 0];
    e || (e = Vr(t) + 1);
    var i = on.getComputedStyle(t)
        , s = i.strokeDasharray || ""
        , r = hi(i.strokeDashoffset)
        , n = s.indexOf(",");
    return n < 0 && (n = s.indexOf(" ")),
        s = n < 0 ? e : hi(s.substr(0, n)),
    s > e && (s = e),
        [-r || 0, s - r || 0]
}, ba = function() {
    il() && (on = window,
        tl = Je = sl(),
        Ao = Je.utils.toArray,
        ro = Je.core.getStyleSaver,
        el = Je.core.reverting || function() {}
        ,
        Ju = ((on.navigator || {}).userAgent || "").indexOf("Edge") !== -1)
}, nl = {
    version: "3.12.5",
    name: "drawSVG",
    register: function(t) {
        Je = t,
            ba()
    },
    init: function(t, e, i, s, r) {
        if (!t.getBBox)
            return !1;
        tl || ba();
        var n = Vr(t), o, a, l;
        return this.styles = ro && ro(t, "strokeDashoffset,strokeDasharray,strokeMiterlimit"),
            this.tween = i,
            this._style = t.style,
            this._target = t,
            e + "" == "true" ? e = "0 100%" : e ? (e + "").indexOf(" ") === -1 && (e = "0 " + e) : e = "0 0",
            o = wa(t, n),
            a = nc(e, n, o[0]),
            this._length = qi(n),
            this._dash = qi(o[1] - o[0]),
            this._offset = qi(-o[0]),
            this._dashPT = this.add(this, "_dash", this._dash, qi(a[1] - a[0]), 0, 0, 0, 0, 0, 1),
            this._offsetPT = this.add(this, "_offset", this._offset, qi(-a[0]), 0, 0, 0, 0, 0, 1),
        Ju && (l = on.getComputedStyle(t),
        l.strokeLinecap !== l.strokeLinejoin && (a = hi(l.strokeMiterlimit),
            this.add(t.style, "strokeMiterlimit", a, a + .01))),
            this._live = rl(t) || ~(e + "").indexOf("live"),
            this._nowrap = ~(e + "").indexOf("nowrap"),
            this._props.push("drawSVG"),
            rc
    },
    render: function(t, e) {
        if (e.tween._time || !el()) {
            var i = e._pt, s = e._style, r, n, o, a;
            if (i) {
                for (e._live && (r = Vr(e._target),
                r !== e._length && (n = r / e._length,
                    e._length = r,
                e._offsetPT && (e._offsetPT.s *= n,
                    e._offsetPT.c *= n),
                    e._dashPT ? (e._dashPT.s *= n,
                        e._dashPT.c *= n) : e._dash *= n)); i; )
                    i.r(t, i.d),
                        i = i._next;
                o = e._dash || t && t !== 1 && 1e-4 || 0,
                    r = e._length - o + .1,
                    a = e._offset,
                o && a && o + Math.abs(a % e._length) > e._length - .2 && (a += a < 0 ? .1 : -.1) && (r += .1),
                    s.strokeDashoffset = o ? a : a + .001,
                    s.strokeDasharray = r < .2 ? "none" : o ? o + "px," + (e._nowrap ? 999999 : r) + "px" : "0px, 999999px"
            }
        } else
            e.styles.revert()
    },
    getLength: Vr,
    getPosition: wa
};
sl() && Je.registerPlugin(nl);
/*!
 * strings: 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var oc = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
function ol(u) {
    var t = u.nodeType
        , e = "";
    if (t === 1 || t === 9 || t === 11) {
        if (typeof u.textContent == "string")
            return u.textContent;
        for (u = u.firstChild; u; u = u.nextSibling)
            e += ol(u)
    } else if (t === 3 || t === 4)
        return u.nodeValue;
    return e
}
/*!
 * SplitText: 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var ys, no, al, Ws, ul, cn, ac = /(?:\r|\n|\t\t)/g, uc = /(?:\s\s+)/g, lc = " ", ll = function(t) {
    ys = document,
        no = window,
        Ws = Ws || t || no.gsap || console.warn("Please gsap.registerPlugin(SplitText)"),
    Ws && (cn = Ws.utils.toArray,
        ul = Ws.core.context || function() {}
        ,
        al = 1)
}, hl = function(t) {
    return no.getComputedStyle(t)
}, Lo = function(t) {
    return t.position === "absolute" || t.absolute === !0
}, hc = function(t, e) {
    for (var i = e.length, s; --i > -1; )
        if (s = e[i],
        t.substr(0, s.length) === s)
            return s.length
}, cc = " style='position:relative;display:inline-block;'", Ca = function(t, e) {
    t === void 0 && (t = "");
    var i = ~t.indexOf("++")
        , s = 1;
    return i && (t = t.split("++").join("")),
        function() {
            return "<" + e + cc + (t ? " class='" + t + (i ? s++ : "") + "'>" : ">")
        }
}, cl = function u(t, e, i) {
    var s = t.nodeType;
    if (s === 1 || s === 9 || s === 11)
        for (t = t.firstChild; t; t = t.nextSibling)
            u(t, e, i);
    else
        (s === 3 || s === 4) && (t.nodeValue = t.nodeValue.split(e).join(i))
}, Mn = function(t, e) {
    for (var i = e.length; --i > -1; )
        t.push(e[i])
}, Sa = function(t, e, i) {
    for (var s; t && t !== e; ) {
        if (s = t._next || t.nextSibling,
            s)
            return s.textContent.charAt(0) === i;
        t = t.parentNode || t._parent
    }
}, fc = function u(t) {
    var e = cn(t.childNodes), i = e.length, s, r;
    for (s = 0; s < i; s++)
        r = e[s],
            r._isSplit ? u(r) : s && r.previousSibling && r.previousSibling.nodeType === 3 ? (r.previousSibling.nodeValue += r.nodeType === 3 ? r.nodeValue : r.firstChild.nodeValue,
                t.removeChild(r)) : r.nodeType !== 3 && (t.insertBefore(r.firstChild, r),
                t.removeChild(r))
}, Xe = function(t, e) {
    return parseFloat(e[t]) || 0
}, dc = function(t, e, i, s, r, n, o) {
    var a = hl(t), l = Xe("paddingLeft", a), h = -999, c = Xe("borderBottomWidth", a) + Xe("borderTopWidth", a), p = Xe("borderLeftWidth", a) + Xe("borderRightWidth", a), f = Xe("paddingTop", a) + Xe("paddingBottom", a), g = Xe("paddingLeft", a) + Xe("paddingRight", a), d = Xe("fontSize", a) * (e.lineThreshold || .2), _ = a.textAlign, D = [], v = [], w = [], y = e.wordDelimiter || " ", b = e.tag ? e.tag : e.span ? "span" : "div", S = e.type || e.split || "chars,words,lines", x = r && ~S.indexOf("lines") ? [] : null, F = ~S.indexOf("words"), T = ~S.indexOf("chars"), P = Lo(e), z = e.linesClass, k = ~(z || "").indexOf("++"), W = [], I = a.display === "flex", V = t.style.display, L, M, N, E, m, X, nt, ae, et, U, kt, st;
    for (k && (z = z.split("++").join("")),
         I && (t.style.display = "block"),
             M = t.getElementsByTagName("*"),
             N = M.length,
             m = [],
             L = 0; L < N; L++)
        m[L] = M[L];
    if (x || P)
        for (L = 0; L < N; L++)
            E = m[L],
                X = E.parentNode === t,
            (X || P || T && !F) && (st = E.offsetTop,
            x && X && Math.abs(st - h) > d && (E.nodeName !== "BR" || L === 0) && (nt = [],
                x.push(nt),
                h = st),
            P && (E._x = E.offsetLeft,
                E._y = st,
                E._w = E.offsetWidth,
                E._h = E.offsetHeight),
            x && ((E._isSplit && X || !T && X || F && X || !F && E.parentNode.parentNode === t && !E.parentNode._isSplit) && (nt.push(E),
                E._x -= l,
            Sa(E, t, y) && (E._wordEnd = !0)),
            E.nodeName === "BR" && (E.nextSibling && E.nextSibling.nodeName === "BR" || L === 0) && x.push([])));
    for (L = 0; L < N; L++) {
        if (E = m[L],
            X = E.parentNode === t,
        E.nodeName === "BR") {
            x || P ? (E.parentNode && E.parentNode.removeChild(E),
                m.splice(L--, 1),
                N--) : F || t.appendChild(E);
            continue
        }
        if (P && (et = E.style,
        !F && !X && (E._x += E.parentNode._x,
            E._y += E.parentNode._y),
            et.left = E._x + "px",
            et.top = E._y + "px",
            et.position = "absolute",
            et.display = "block",
            et.width = E._w + 1 + "px",
            et.height = E._h + "px"),
        !F && T)
            if (E._isSplit)
                for (E._next = M = E.nextSibling,
                         E.parentNode.appendChild(E); M && M.nodeType === 3 && M.textContent === " "; )
                    E._next = M.nextSibling,
                        E.parentNode.appendChild(M),
                        M = M.nextSibling;
            else
                E.parentNode._isSplit ? (E._parent = E.parentNode,
                !E.previousSibling && E.firstChild && (E.firstChild._isFirst = !0),
                E.nextSibling && E.nextSibling.textContent === " " && !E.nextSibling.nextSibling && W.push(E.nextSibling),
                    E._next = E.nextSibling && E.nextSibling._isFirst ? null : E.nextSibling,
                    E.parentNode.removeChild(E),
                    m.splice(L--, 1),
                    N--) : X || (st = !E.nextSibling && Sa(E.parentNode, t, y),
                E.parentNode._parent && E.parentNode._parent.appendChild(E),
                st && E.parentNode.appendChild(ys.createTextNode(" ")),
                b === "span" && (E.style.display = "inline"),
                    D.push(E));
        else
            E.parentNode._isSplit && !E._isSplit && E.innerHTML !== "" ? v.push(E) : T && !E._isSplit && (b === "span" && (E.style.display = "inline"),
                D.push(E))
    }
    for (L = W.length; --L > -1; )
        W[L].parentNode.removeChild(W[L]);
    if (x) {
        for (P && (U = ys.createElement(b),
            t.appendChild(U),
            kt = U.offsetWidth + "px",
            st = U.offsetParent === t ? 0 : t.offsetLeft,
            t.removeChild(U)),
                 et = t.style.cssText,
                 t.style.cssText = "display:none;"; t.firstChild; )
            t.removeChild(t.firstChild);
        for (ae = y === " " && (!P || !F && !T),
                 L = 0; L < x.length; L++) {
            for (nt = x[L],
                     U = ys.createElement(b),
                     U.style.cssText = "display:block;text-align:" + _ + ";position:" + (P ? "absolute;" : "relative;"),
                 z && (U.className = z + (k ? L + 1 : "")),
                     w.push(U),
                     N = nt.length,
                     M = 0; M < N; M++)
                nt[M].nodeName !== "BR" && (E = nt[M],
                    U.appendChild(E),
                ae && E._wordEnd && U.appendChild(ys.createTextNode(" ")),
                P && (M === 0 && (U.style.top = E._y + "px",
                    U.style.left = l + st + "px"),
                    E.style.top = "0px",
                st && (E.style.left = E._x - st + "px")));
            N === 0 ? U.innerHTML = "&nbsp;" : !F && !T && (fc(U),
                cl(U, " ", " ")),
            P && (U.style.width = kt,
                U.style.height = E._h + "px"),
                t.appendChild(U)
        }
        t.style.cssText = et
    }
    P && (o > t.clientHeight && (t.style.height = o - f + "px",
    t.clientHeight < o && (t.style.height = o + c + "px")),
    n > t.clientWidth && (t.style.width = n - g + "px",
    t.clientWidth < n && (t.style.width = n + p + "px"))),
    I && (V ? t.style.display = V : t.style.removeProperty("display")),
        Mn(i, D),
    F && Mn(s, v),
        Mn(r, w)
}, pc = function(t, e, i, s) {
    var r = e.tag ? e.tag : e.span ? "span" : "div", n = e.type || e.split || "chars,words,lines", o = ~n.indexOf("chars"), a = Lo(e), l = e.wordDelimiter || " ", h = function(P) {
        return P === l || P === lc && l === " "
    }, c = l !== " " ? "" : a ? "&#173; " : " ", p = "</" + r + ">", f = 1, g = e.specialChars ? typeof e.specialChars == "function" ? e.specialChars : hc : null, d, _, D, v, w, y, b, S, x = ys.createElement("div"), F = t.parentNode;
    for (F.insertBefore(x, t),
             x.textContent = t.nodeValue,
             F.removeChild(t),
             t = x,
             d = ol(t),
             b = d.indexOf("<") !== -1,
         e.reduceWhiteSpace !== !1 && (d = d.replace(uc, " ").replace(ac, "")),
         b && (d = d.split("<").join("{{LT}}")),
             w = d.length,
             _ = (d.charAt(0) === " " ? c : "") + i(),
             D = 0; D < w; D++)
        if (y = d.charAt(D),
        g && (S = g(d.substr(D), e.specialChars)))
            y = d.substr(D, S || 1),
                _ += o && y !== " " ? s() + y + "</" + r + ">" : y,
                D += S - 1;
        else if (h(y) && !h(d.charAt(D - 1)) && D) {
            for (_ += f ? p : "",
                     f = 0; h(d.charAt(D + 1)); )
                _ += c,
                    D++;
            D === w - 1 ? _ += c : d.charAt(D + 1) !== ")" && (_ += c + i(),
                f = 1)
        } else
            y === "{" && d.substr(D, 6) === "{{LT}}" ? (_ += o ? s() + "{{LT}}</" + r + ">" : "{{LT}}",
                D += 5) : y.charCodeAt(0) >= 55296 && y.charCodeAt(0) <= 56319 || d.charCodeAt(D + 1) >= 65024 && d.charCodeAt(D + 1) <= 65039 ? (v = ((d.substr(D, 12).split(oc) || [])[1] || "").length || 2,
                _ += o && y !== " " ? s() + d.substr(D, v) + "</" + r + ">" : d.substr(D, v),
                D += v - 1) : _ += o && y !== " " ? s() + y + "</" + r + ">" : y;
    t.outerHTML = _ + (f ? p : ""),
    b && cl(F, "{{LT}}", "<")
}, gc = function u(t, e, i, s) {
    var r = cn(t.childNodes), n = r.length, o = Lo(e), a, l;
    if (t.nodeType !== 3 || n > 1) {
        for (e.absolute = !1,
                 a = 0; a < n; a++)
            l = r[a],
                l._next = l._isFirst = l._parent = l._wordEnd = null,
            (l.nodeType !== 3 || /\S+/.test(l.nodeValue)) && (o && l.nodeType !== 3 && hl(l).display === "inline" && (l.style.display = "inline-block",
                l.style.position = "relative"),
                l._isSplit = !0,
                u(l, e, i, s));
        e.absolute = o,
            t._isSplit = !0;
        return
    }
    pc(t, e, i, s)
}, fn = function() {
    function u(e, i) {
        al || ll(),
            this.elements = cn(e),
            this.chars = [],
            this.words = [],
            this.lines = [],
            this._originals = [],
            this.vars = i || {},
            ul(this),
            this.split(i)
    }
    var t = u.prototype;
    return t.split = function(i) {
        this.isSplit && this.revert(),
            this.vars = i = i || this.vars,
            this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        for (var s = this.elements.length, r = i.tag ? i.tag : i.span ? "span" : "div", n = Ca(i.wordsClass, r), o = Ca(i.charsClass, r), a, l, h; --s > -1; )
            h = this.elements[s],
                this._originals[s] = {
                    html: h.innerHTML,
                    style: h.getAttribute("style")
                },
                a = h.clientHeight,
                l = h.clientWidth,
                gc(h, i, n, o),
                dc(h, i, this.chars, this.words, this.lines, l, a);
        return this.chars.reverse(),
            this.words.reverse(),
            this.lines.reverse(),
            this.isSplit = !0,
            this
    }
        ,
        t.revert = function() {
            var i = this._originals;
            if (!i)
                throw "revert() call wasn't scoped properly.";
            return this.elements.forEach(function(s, r) {
                s.innerHTML = i[r].html,
                    s.setAttribute("style", i[r].style)
            }),
                this.chars = [],
                this.words = [],
                this.lines = [],
                this.isSplit = !1,
                this
        }
        ,
        u.create = function(i, s) {
            return new u(i,s)
        }
        ,
        u
}();
fn.version = "3.12.5";
fn.register = ll;
ne.registerPlugin(nl, fn);
let _c = class {
        el;
        words;
        isPaused;
        isWaiting;
        st;
        constructor() {
            this.el = document.querySelector(".s-hero"),
                this.words = this.el.querySelectorAll(".js-word"),
                this.isPaused = !0,
                this.isWaiting = !0,
                document.readyState === "complete" ? xe.nextTick(this.init, this) : $.once("siteLoaded", this.init, this)
        }
        init() {
            this.splitWords(),
                this.bindEvents()
        }
        bindEvents() {
            $.on("resize", this.onResize, this),
                document.addEventListener("intro", this.intro.bind(this), {
                    once: !0
                }),
                this.el.addEventListener("intersect", this.onIntersect.bind(this), {
                    passive: !0
                }),
                $.on("tick", this.tick, this)
        }
        onIntersect(t) {
            this.isPaused = !t.detail.isIntersecting,
                this.isPaused ? $.off("tick", this.tick, this) : $.on("tick", this.tick, this)
        }
        onResize() {
            this.splitWords()
        }
        intro() {
            const t = this.el.querySelector("a-waves")
                , e = t.querySelectorAll(".js-line")
                , i = this.el.querySelector(".js-content")
                , s = this.el.querySelector(".js-border")
                , r = i.querySelectorAll(".char__inner")
                , n = i.querySelectorAll(".js-separator")
                , o = i.querySelector(".js-star")
                , a = ne.timeline();
            a.fromTo(e, {
                drawSVG: "100% 100%"
            }, {
                drawSVG: "0% 100%",
                duration: 3,
                ease: "expo.out",
                stagger: {
                    amount: .5,
                    from: "edges",
                    ease: "power3.inOut"
                }
            }, .5),
                a.call( () => {
                        t.dispatchEvent(new CustomEvent("introend"))
                    }
                    , null, "-=1"),
                a.set(this.el, {
                    opacity: 1
                }, 0),
                a.to(s, {
                    scaleY: .025,
                    y: -i.clientHeight,
                    duration: 1,
                    ease: "expo.inOut"
                }, 0),
                a.from(t, {
                    y: "100%",
                    duration: 1.35,
                    ease: "expo.out"
                }, 0),
                a.fromTo(i, {
                    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)"
                }, {
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                    duration: 1,
                    ease: "expo.inOut"
                }, 1),
                a.to(s, {
                    scaleY: 1,
                    y: 0,
                    duration: 1,
                    ease: "expo.inOut"
                }, 1),
                a.from(o, {
                    rotate: 90,
                    duration: 2,
                    ease: "expo.out"
                }, 1.5),
                a.fromTo(r, {
                    y: "-200%"
                }, {
                    y: "-100%",
                    duration: 2,
                    ease: "expo.inOut",
                    stagger: .02
                }, .45),
                a.from(n, {
                    y: l => l % 2 === 0 ? "-100%" : "100%",
                    duration: 1.5,
                    ease: "expo.inOut"
                }, .75),
                a.call( () => {
                        this.isWaiting = !1
                    }
                )
        }
        splitWords() {
            this.st && this.st.revert(),
                this.st = new fn(this.words,{
                    type: "words,chars",
                    charsClass: "char",
                    wordsClass: "word"
                }),
                this.st.chars.forEach( (t, e) => {
                        const i = t.textContent;
                        t.classList.add("char--" + i);
                        const s = document.createElement("span");
                        s.classList.add("char__inner"),
                            s.dataset.letter = i.toUpperCase(),
                            s.innerHTML = i,
                            t.innerHTML = s.outerHTML
                    }
                )
        }
        animateChar() {
            if (this.isWaiting || Math.random() > .01)
                return;
            const t = this.st.chars[Math.floor(Math.random() * this.st.chars.length)];
            if (t.classList.contains("to-top") || t.classList.contains("to-right") || t.classList.contains("to-bottom") || t.classList.contains("to-left"))
                return;
            const e = Math.floor(Math.random() * 4)
                , i = "to-" + ["bottom", "left", "top", "right"][e];
            t.classList.add(i),
                setTimeout( () => {
                        t.classList.remove(i)
                    }
                    , 2e3)
        }
        tick() {
            this.animateChar()
        }
    }
;
new _c;
let Dc = class {
        el;
        inner;
        svg;
        path;
        canvas;
        ctx;
        awards;
        smileyImages;
        bounding;
        scroll;
        lines;
        smileys;
        isPaused;
        isForced;
        constructor() {
            this.el = document.querySelector(".s-about"),
                this.inner = this.el.querySelector(".js-inner"),
                this.svg = this.el.querySelector(".js-grid"),
                this.path = this.el.querySelector(".js-path"),
                this.canvas = document.querySelector(".js-canvas"),
                this.ctx = this.canvas.getContext("2d"),
                this.awards = this.el.querySelectorAll(".js-award"),
                this.lines = [],
                this.smileys = [],
                this.isPaused = !0,
                this.isForced = !1,
                document.readyState === "complete" ? xe.nextTick(this.init, this) : $.once("siteLoaded", this.init, this)
        }
        init() {
            this.createSmiley(),
                this.setSize(),
                this.setScroll(),
                this.bindEvents(),
            this.el.classList.contains("is-in-view") && this.isPaused && (this.isPaused = !1,
                $.on("tick", this.tick, this))
        }
        bindEvents() {
            $.on("resize", this.onResize, this),
                $.on("scroll", this.onScroll, this);
            const t = new IntersectionObserver(e => {
                    e.forEach(i => {
                            i.isIntersecting && (i.target.classList.add("is-revealed"),
                                t.unobserve(i.target))
                        }
                    )
                }
                ,{
                    threshold: .5
                });
            this.awards.forEach(e => {
                    t.observe(e);
                    const i = this.onAwardInteraction.bind(this, e);
                    e.addEventListener("mouseenter", i, {
                        passive: !0
                    }),
                        e.addEventListener("touchstart", i, {
                            passive: !0
                        })
                }
            ),
                this.el.addEventListener("intersect", this.onIntersect.bind(this), {
                    passive: !0
                })
        }
        onResize(t, e) {
            t && (this.setSize(),
                this.setScroll(),
                this.isForced = !0)
        }
        onScroll(t) {
            const {scroll: e} = this
                , i = t + window.safeHeight;
            i < e.start ? e.p = 0 : i > e.end ? e.p = 1 : e.p = (i - e.start) / (e.end - e.start)
        }
        onIntersect(t) {
            this.isPaused = !t.detail.isIntersecting,
                this.isPaused ? $.off("tick", this.tick, this) : $.on("tick", this.tick, this)
        }
        onAwardInteraction(t) {
            t.classList.add("is-active"),
                this.throwSmileys(t),
                setTimeout( () => {
                        t.classList.remove("is-active")
                    }
                    , 100)
        }
        createSmiley() {
            const t = new Image(100,100);
            t.src = "/images/asset-smiley--main.svg";
            const e = new Image(100,100);
            e.src = "/images/asset-smiley--contrasted.svg",
                this.smileyImages = {
                    main: t,
                    contrasted: e
                }
        }
        setSize() {
            const {canvas: t, svg: e} = this
                , i = this.el.getBoundingClientRect();
            this.bounding = {
                left: i.left,
                top: i.top,
                width: this.el.clientWidth,
                height: this.el.clientHeight,
                innerWidth: this.inner.clientWidth,
                innerHeight: this.inner.clientHeight,
                offsetY: 0
            },
                e.style.width = `${this.bounding.width}px`,
                e.style.height = `${this.bounding.height}px`,
                t.width = this.bounding.width,
                t.height = this.bounding.height
        }
        setScroll() {
            const {bounding: t} = this;
            this.scroll = {
                start: t.top + window.scrollY,
                end: t.top + window.scrollY + t.height + window.safeHeight,
                p: 0,
                sp: 0
            },
                this.onScroll(window.scrollY),
                this.scroll.sp = this.scroll.p
        }
        setLines() {
            const {bounding: t} = this;
            this.lines = [];
            const e = (t.width - t.innerWidth) / 2
                , i = (t.height - t.innerHeight) / 2 + t.offsetY
                , s = window.safeWidth > 767 ? 12 : 8
                , r = 4
                , n = t.width / s
                , o = t.height / s
                , a = t.innerWidth / s
                , l = t.innerHeight / s
                , h = 1 / r
                , c = {
                x1: 0,
                x2: t.width,
                y1: 0,
                y2: t.height
            }
                , p = {
                x1: e,
                x2: e + t.innerWidth,
                y1: i,
                y2: i + t.innerHeight
            }
                , f = [];
            f.push([{
                x: c.x1,
                y: c.y1
            }, {
                x: p.x1,
                y: p.y1
            }]),
                f.push([{
                    x: c.x2,
                    y: c.y1
                }, {
                    x: p.x2,
                    y: p.y1
                }]),
                f.push([{
                    x: c.x2,
                    y: c.y2
                }, {
                    x: p.x2,
                    y: p.y2
                }]),
                f.push([{
                    x: c.x1,
                    y: c.y2
                }, {
                    x: p.x1,
                    y: p.y2
                }]);
            for (let g = 1; g < s; g++)
                this.lines.push([{
                    x: n * g,
                    y: c.y1
                }, {
                    x: e + a * g,
                    y: p.y1
                }]),
                    this.lines.push([{
                        x: n * g,
                        y: c.y2
                    }, {
                        x: e + a * g,
                        y: p.y2
                    }]);
            for (let g = 1; g < r; g++) {
                const d = 1 - Math.pow(1 - h * g, 2)
                    , _ = f[0]
                    , D = f[1]
                    , v = {
                    x: _[0].x + (_[1].x - _[0].x) * d,
                    y: _[0].y + (_[1].y - _[0].y) * d
                }
                    , w = {
                    x: D[0].x + (D[1].x - D[0].x) * d,
                    y: D[0].y + (D[1].y - D[0].y) * d
                };
                this.lines.push([v, w])
            }
            for (let g = 1; g < r; g++) {
                const d = 1 - Math.pow(1 - h * g, 2)
                    , _ = f[3]
                    , D = f[2]
                    , v = {
                    x: _[0].x + (_[1].x - _[0].x) * d,
                    y: _[0].y + (_[1].y - _[0].y) * d
                }
                    , w = {
                    x: D[0].x + (D[1].x - D[0].x) * d,
                    y: D[0].y + (D[1].y - D[0].y) * d
                };
                this.lines.push([v, w])
            }
            for (let g = 0; g <= s; g++)
                this.lines.push([{
                    x: c.x1,
                    y: o * g
                }, {
                    x: p.x1,
                    y: i + l * g
                }]),
                    this.lines.push([{
                        x: c.x2,
                        y: o * g
                    }, {
                        x: p.x2,
                        y: i + l * g
                    }]);
            for (let g = 1; g < r; g++) {
                const d = 1 - Math.pow(1 - h * g, 2)
                    , _ = f[1]
                    , D = f[2]
                    , v = {
                    x: _[0].x + (_[1].x - _[0].x) * d,
                    y: _[0].y + (_[1].y - _[0].y) * d
                }
                    , w = {
                    x: D[0].x + (D[1].x - D[0].x) * d,
                    y: D[0].y + (D[1].y - D[0].y) * d
                };
                this.lines.push([v, w])
            }
            for (let g = 1; g < r; g++) {
                const d = 1 - Math.pow(1 - h * g, 2)
                    , _ = f[0]
                    , D = f[3]
                    , v = {
                    x: _[0].x + (_[1].x - _[0].x) * d,
                    y: _[0].y + (_[1].y - _[0].y) * d
                }
                    , w = {
                    x: D[0].x + (D[1].x - D[0].x) * d,
                    y: D[0].y + (D[1].y - D[0].y) * d
                };
                this.lines.push([v, w])
            }
            this.drawLines()
        }
        drawLines() {
            let t = "";
            this.lines.forEach(e => {
                    let i = e[0]
                        , s = e[1];
                    t += "M " + i.x + " " + i.y + " L " + s.x + " " + s.y + " "
                }
            ),
                this.path.setAttribute("d", t)
        }
        throwSmileys(t) {
            const {el: e, ctx: i, smileyImages: s, smileys: r} = this
                , n = document.documentElement.classList.contains("theme-contrasted") ? s.contrasted : s.main
                , o = e.getBoundingClientRect()
                , a = t.getBoundingClientRect()
                , l = a.left + a.width * .5 - o.left
                , h = a.top + a.height * .5 - o.top
                , c = window.safeWidth > 767 ? 10 : 5;
            for (let p = 0; p < c; p++) {
                const f = new mc(i,n,l,h);
                r.push(f)
            }
        }
        moveSmileys() {
            const {bounding: t, smileys: e} = this;
            e.forEach(i => {
                    i.move(),
                    i.y > t.height && e.splice(e.indexOf(i), 1)
                }
            )
        }
        drawCanvas() {
            const {bounding: t, ctx: e, smileys: i} = this;
            e.fillStyle = "red",
                e.clearRect(0, 0, t.width, t.height),
                i.forEach(s => {
                        s.draw()
                    }
                )
        }
        tick() {
            const {bounding: t, el: e, scroll: i} = this;
            i.sp += (i.p - i.sp) * .2;
            const s = Math.round((i.p - i.sp) * 1e3) / 1e3;
            t.offsetY = (window.safeWidth > 767 ? 400 : 200) * (this.scroll.sp * 2 - 1),
                e.style.setProperty("--offset-y", `${this.bounding.offsetY}px`),
            (s !== 0 || this.isForced) && (this.setLines(),
                this.drawLines()),
            this.smileys.length && (this.moveSmileys(),
                this.drawCanvas()),
                this.isForced = !1
        }
    }
;
class mc {
    ctx;
    image;
    width;
    height;
    x;
    y;
    r;
    a;
    va;
    vx;
    vy;
    vr;
    constructor(t, e, i, s) {
        this.ctx = t,
            this.image = e,
            this.width = 48,
            this.height = 48,
            this.x = i,
            this.y = s,
            this.r = 0,
            this.a = .25 + Math.random() * .75,
            this.vx = (Math.random() * 2 - 1) * 5,
            this.vy = Math.random() * -10 - 5,
            this.vr = (Math.random() * 2 - 1) * 10,
            this.va = Math.random() * .01
    }
    move() {
        this.vy += .45,
            this.x += this.vx,
            this.y += this.vy,
            this.r += this.vr,
            this.a += this.va
    }
    draw() {
        const {ctx: t, image: e} = this;
        t.save(),
            t.translate(this.x + this.width * .5 * this.a, this.y + this.height * .5 * this.a),
            t.rotate(this.r * Math.PI / 180),
            t.translate(-this.x - this.width * .5 * this.a, -this.y - this.height * .5 * this.a),
            t.drawImage(e, this.x, this.y, this.width * this.a, this.height * this.a),
            t.restore()
    }
}
new Dc;
/*!
 * EasePack 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var be, Rr, fl = function() {
    return be || typeof window < "u" && (be = window.gsap) && be.registerPlugin && be
}, oo = function(t, e) {
    return !!(typeof t > "u" ? e : t && !~(t + "").indexOf("false"))
}, yc = function(t) {
    if (be = t || fl(),
        be) {
        Rr = be.registerEase;
        var e = be.parseEase(), i = function(n) {
            return function(o) {
                var a = .5 + o / 2;
                n.config = function(l) {
                    return n(2 * (1 - l) * l * a + l * l)
                }
            }
        }, s;
        for (s in e)
            e[s].config || i(e[s]);
        Rr("slow", ns),
            Rr("expoScale", Oo),
            Rr("rough", _r);
        for (s in or)
            s !== "version" && be.core.globals(s, or[s])
    }
}, dl = function(t, e, i) {
    t = Math.min(1, t || .7);
    var s = t < 1 ? e || e === 0 ? e : .7 : 0
        , r = (1 - t) / 2
        , n = r + t
        , o = oo(i);
    return function(a) {
        var l = a + (.5 - a) * s;
        return a < r ? o ? 1 - (a = 1 - a / r) * a : l - (a = 1 - a / r) * a * a * a * l : a > n ? o ? a === 1 ? 0 : 1 - (a = (a - n) / r) * a : l + (a - l) * (a = (a - n) / r) * a * a * a : o ? 1 : l
    }
}, pl = function(t, e, i) {
    var s = Math.log(e / t)
        , r = e - t;
    return i && (i = be.parseEase(i)),
        function(n) {
            return (t * Math.exp(s * (i ? i(n) : n)) - t) / r
        }
}, An = function(t, e, i) {
    this.t = t,
        this.v = e,
    i && (this.next = i,
        i.prev = this,
        this.c = i.v - e,
        this.gap = i.t - t)
}, gl = function(t) {
    typeof t != "object" && (t = {
        points: +t || 20
    });
    for (var e = t.taper || "none", i = [], s = 0, r = (+t.points || 20) | 0, n = r, o = oo(t.randomize, !0), a = oo(t.clamp), l = be ? be.parseEase(t.template) : 0, h = (+t.strength || 1) * .4, c, p, f, g, d, _, D; --n > -1; )
        c = o ? Math.random() : 1 / r * n,
            p = l ? l(c) : c,
            e === "none" ? f = h : e === "out" ? (g = 1 - c,
                f = g * g * h) : e === "in" ? f = c * c * h : c < .5 ? (g = c * 2,
                f = g * g * .5 * h) : (g = (1 - c) * 2,
                f = g * g * .5 * h),
            o ? p += Math.random() * f - f * .5 : n % 2 ? p += f * .5 : p -= f * .5,
        a && (p > 1 ? p = 1 : p < 0 && (p = 0)),
            i[s++] = {
                x: c,
                y: p
            };
    for (i.sort(function(v, w) {
        return v.x - w.x
    }),
             _ = new An(1,1,null),
             n = r; n--; )
        d = i[n],
            _ = new An(d.x,d.y,_);
    return D = new An(0,0,_.t ? _ : _.next),
        function(v) {
            var w = D;
            if (v > w.t) {
                for (; w.next && v >= w.t; )
                    w = w.next;
                w = w.prev
            } else
                for (; w.prev && v <= w.t; )
                    w = w.prev;
            return D = w,
            w.v + (v - w.t) / w.gap * w.c
        }
}, ns = dl(.7);
ns.ease = ns;
ns.config = dl;
var Oo = pl(1, 2);
Oo.config = pl;
var _r = gl();
_r.ease = _r;
_r.config = gl;
var or = {
    SlowMo: ns,
    RoughEase: _r,
    ExpoScaleEase: Oo
};
for (var Ea in or)
    or[Ea].register = yc,
        or[Ea].version = "3.12.5";
fl() && be.registerPlugin(ns);
ne.registerPlugin(j, ns);
let vc = class {
        el;
        container;
        ruler;
        scene;
        canvas;
        ctx;
        title;
        videos;
        mask;
        bounding;
        letters;
        works;
        points;
        tl;
        animationProgress;
        pointsProgress;
        last;
        scrollProgress;
        smoothScrollProgress;
        state;
        speed;
        isPaused;
        loadIsStarted;
        constructor() {
            this.el = document.querySelector(".s-work"),
                this.container = this.el.querySelector(".js-container"),
                this.ruler = this.el.querySelector(".js-ruler"),
                this.scene = this.container.querySelector(".js-scene"),
                this.canvas = this.container.querySelector(".js-canvas"),
                this.ctx = this.canvas.getContext("2d"),
                this.title = this.container.querySelector(".js-title"),
                this.videos = this.container.querySelectorAll("video"),
                this.mask = {
                    width: 0,
                    height: 0,
                    maxScale: 1,
                    lines: [],
                    el: this.el.querySelector(".js-mask"),
                    svg: this.el.querySelector(".js-mask-svg"),
                    pathOuter: this.el.querySelector(".js-mask-path-outer"),
                    pathInner: this.el.querySelector(".js-mask-path-inner"),
                    pathLines: this.el.querySelector(".js-mask-path-lines")
                },
                this.letters = [],
                this.title.querySelectorAll(".js-letter").forEach(t => {
                        const e = {
                            el: t,
                            ghosts: []
                        };
                        this.letters.push(e)
                    }
                ),
                this.works = [],
                this.container.querySelectorAll(".js-work").forEach(t => {
                        const e = {
                            el: t
                        };
                        this.works.push(e)
                    }
                ),
                this.points = [],
                this.scrollProgress = 0,
                this.smoothScrollProgress = 0,
                this.last = {
                    animationProgress: 0,
                    pointsProgress: 0
                },
                this.isPaused = !0,
                this.loadIsStarted = !1,
                document.readyState === "complete" ? xe.nextTick(this.init, this) : $.once("siteLoaded", this.init, this)
        }
        init() {
            this.setCtxStyle(),
                this.setSize(),
                this.setMask(),
                this.setPoints(),
                this.setLetters(),
                this.setWorks(),
                this.setTimeline(),
                this.bindEvents()
        }
        bindEvents() {
            $.on("contrastchange", this.setCtxStyle, this),
                $.on("resize", this.onResize, this),
                this.el.addEventListener("intersect", this.onIntersect.bind(this), {
                    passive: !0
                })
        }
        onResize(t) {
            t && (this.setCtxStyle(),
                this.setSize(),
                this.setMask(),
                this.setPoints(),
                this.setLetters(),
                this.setWorks(),
                this.setTimeline())
        }
        onIntersect(t) {
            this.isPaused = !t.detail.isIntersecting,
                this.isPaused ? $.off("tick", this.tick, this) : $.on("tick", this.tick, this),
            this.loadIsStarted || (this.loadNextVideo(),
                this.loadIsStarted = !0)
        }
        setCtxStyle() {
            const t = getComputedStyle(this.el).getPropertyValue("--color-primary");
            xe.nextTick( () => {
                    this.ctx.strokeStyle = t
                }
            )
        }
        setSize() {
            this.el.style.setProperty("--height", this.works.length * 50 + "lvh");
            const t = this.container.getBoundingClientRect();
            this.bounding = {
                left: t.left,
                top: t.top,
                width: window.safeWidth,
                height: window.safeHeight
            },
                this.canvas.width = this.bounding.width,
                this.canvas.height = this.bounding.height,
                this.speed = Math.hypot(this.bounding.width, this.bounding.height) * 4
        }
        setMask() {
            const {mask: t} = this
                , e = t.el.clientWidth
                , i = t.el.clientHeight;
            t.width = e,
                t.height = i,
                t.svg.style.width = t.width + "px",
                t.svg.style.height = t.height + "px";
            const s = this.el.getBoundingClientRect()
                , r = this.ruler.getBoundingClientRect()
                , n = r.width
                , o = r.height
                , a = r.left - s.left
                , l = r.top - s.top
                , h = `M -1 0 L ${e + 2} 0 L ${e + 2} ${i} L -1 ${i} Z`
                , c = {
                tl: {
                    x: a,
                    y: l
                },
                tr: {
                    x: a + n,
                    y: l
                },
                br: {
                    x: a + n,
                    y: l + o
                },
                bl: {
                    x: a,
                    y: l + o
                }
            };
            let p = (c.tr.x - c.tl.x) / 2;
            t.maxScale = window.safeWidth / p;
            let f = `M ${c.tl.x} ${c.tl.y + p} A ${p} ${p} 0 0 1 ${c.tr.x} ${c.tr.y + p} L ${c.br.x} ${c.br.y - p} A ${p} ${p} 0 0 1 ${c.bl.x} ${c.bl.y - p} Z`;
            const g = `${h} ${f}`;
            t.pathOuter.setAttribute("d", `${h} ${f}`);
            const d = window.safeWidth > 767 ? 16 : 8;
            c.tl.x += d,
                c.tl.y += d,
                c.tr.x -= d,
                c.tr.y += d,
                c.br.x -= d,
                c.br.y -= d,
                c.bl.x += d,
                c.bl.y -= d,
                p = (c.tr.x - c.tl.x) / 2,
                f = `M ${c.tl.x} ${c.tl.y + p} A ${p} ${p} 0 0 1 ${c.tr.x} ${c.tr.y + p} L ${c.br.x} ${c.br.y - p} A ${p} ${p} 0 0 1 ${c.bl.x} ${c.bl.y - p} Z`,
                t.pathInner.setAttribute("d", `${h} ${f}`),
                t.lines = [];
            const _ = window.safeWidth > 767 ? 12 : 8
                , D = e / _
                , v = i * .1
                , w = Math.ceil(i / v);
            for (let b = 1; b < _; b++) {
                const S = D * b;
                t.lines.push({
                    p1: {
                        x: S,
                        y: 0
                    },
                    p2: {
                        x: S,
                        y: i
                    }
                })
            }
            for (let b = 0; b < w; b++) {
                const S = v * b;
                t.lines.push({
                    p1: {
                        x: 0,
                        y: S
                    },
                    p2: {
                        x: e,
                        y: S
                    }
                })
            }
            let y = "";
            t.lines.forEach(b => {
                    y += `M ${b.p1.x} ${b.p1.y} L ${b.p2.x} ${b.p2.y} `
                }
            ),
                t.pathLines.setAttribute("d", y),
                t.pathLines.style.clipPath = `path(evenodd, '${g}')`
        }
        setLetters() {
            const {letters: t, scene: e} = this;
            t.forEach( (i, s) => {
                    i.ghosts.forEach(o => {
                            o.el.remove()
                        }
                    ),
                        i.ghosts = [];
                    const r = i.el.getBoundingClientRect();
                    i.width = r.width,
                        i.height = r.height,
                        i.top = r.top - this.bounding.top,
                        i.left = r.left,
                        i.freq = 1 + Math.random();
                    const n = window.safeWidth > 767 ? .75 : .5;
                    i.total = Math.round(this.bounding.width / i.width * n) + 2;
                    for (let o = 0; o < i.total; o++) {
                        const a = document.createElement("span");
                        a.classList.add("s__scene__letter"),
                            a.classList.add("js-letter"),
                            a.innerText = i.el.innerText,
                            a.dataset.letter = i.el.innerText,
                            e.appendChild(a);
                        const l = {
                            el: a,
                            x: i.left,
                            y: i.top,
                            z: Math.random() * 100,
                            i: o - i.total * .5,
                            p: (o / i.total - .5) * 2,
                            ap: Math.abs(o / i.total - .5) * 2,
                            mx: 0,
                            my: 0
                        };
                        a.style.top = l.y + "px",
                            a.style.left = l.x + "px",
                            a.style.zIndex = String(s !== 1 && s !== 2 && (s + t.length + o) % 5 === 0 ? 3 : 1),
                            a.style.setProperty("--ix", String(l.i)),
                            a.style.setProperty("--iy", String(((s + 1) / (t.length + 1) - .5) * 2)),
                            a.style.setProperty("--ap", String(l.ap)),
                            a.style.setProperty("--p", String(l.p)),
                            i.ghosts.push(l)
                    }
                }
            )
        }
        setWorks() {
            const {works: t} = this;
            t.forEach( (e, i) => {
                    const s = e.el;
                    s.style.setProperty("--size", String(.5 + Math.random() * .5)),
                        s.style.setProperty("--y", String((.5 + Math.random() * .5) * (i % 2 ? -1 : 1)))
                }
            )
        }
        setTimeline() {
            const {el: t, container: e, works: i, scene: s, mask: r} = this
                , n = i.map(a => a.el);
            let {tl: o} = this;
            o && o.kill(),
                o = ne.timeline({
                    scrollTrigger: {
                        trigger: t,
                        start: "top 25%",
                        end: "bottom 75%",
                        scrub: 1
                    },
                    onUpdate: () => {
                        s.style.setProperty("--state", String(this.state))
                    }
                }),
                o.fromTo(r.el, {
                    scale: 1
                }, {
                    scale: r.maxScale,
                    duration: .75,
                    ease: "power4.in"
                }, 0),
                o.fromTo(s, {
                    scale: .75
                }, {
                    scale: 1,
                    duration: .75,
                    ease: "power3.in"
                }, 0),
                o.fromTo(e, {
                    clipPath: "inset(0 1rem)"
                }, {
                    clipPath: "inset(0 0rem)",
                    duration: .75,
                    ease: "power3.in"
                }, 0),
                o.fromTo(this, {
                    pointsProgress: 0
                }, {
                    pointsProgress: 1,
                    duration: 1,
                    ease: "power4.inOut"
                }, 0),
                o.fromTo(this, {
                    state: 0
                }, {
                    state: 1,
                    duration: .75,
                    ease: "power4.in"
                }, 0),
                o.fromTo(n, {
                    attr: {
                        progress: 1
                    }
                }, {
                    attr: {
                        progress: -1
                    },
                    ease: "slow(0.15, 0.6)",
                    stagger: .25
                }, .75),
                o.fromTo(this, {
                    animationProgress: 0
                }, {
                    animationProgress: 1e4,
                    duration: o.totalDuration(),
                    ease: "power1.out"
                }, .75),
                o.fromTo(this, {
                    state: 1
                }, {
                    state: 0,
                    duration: .75,
                    ease: "power4.inOut",
                    immediateRender: !1
                }, "-=1"),
                o.fromTo(r.el, {
                    scale: r.maxScale
                }, {
                    scale: 1,
                    duration: .75,
                    ease: "power4.inOut",
                    immediateRender: !1
                }, "-=1"),
                o.fromTo(s, {
                    scale: 1
                }, {
                    scale: .75,
                    duration: .75,
                    ease: "power3.inOut",
                    immediateRender: !1
                }, "-=1"),
                o.fromTo(e, {
                    clipPath: "inset(0 0rem)"
                }, {
                    clipPath: "inset(0 1rem)",
                    duration: .75,
                    ease: "power3.inOut",
                    immediateRender: !1
                }, "-=1"),
                o.fromTo(this, {
                    pointsProgress: 1
                }, {
                    pointsProgress: 0,
                    duration: 1,
                    ease: "power4.inOut"
                }, "-=1")
        }
        loadNextVideo() {
            const t = Array.from(this.videos).find(e => !e.classList.contains("is-loaded"));
            t && (t.readyState >= 3 ? this.videoLoaded(t) : (t.addEventListener("canplaythrough", () => {
                    this.videoLoaded(t)
                }
                , {
                    once: !0
                }),
                t.setAttribute("src", t.getAttribute("data-src")),
                t.load()))
        }
        videoLoaded(t) {
            t.classList.add("is-loaded"),
                this.loadNextVideo()
        }
        moveLetters() {
            const {speed: t, letters: e, animationProgress: i} = this;
            e.forEach( (s, r) => {
                    const n = t * s.freq;
                    s.ghosts.forEach( (o, a) => {
                            let l = (i % n / n + a / s.total) % 1 / .7 - .15;
                            o.el.style.setProperty("--progress", String(l))
                        }
                    )
                }
            )
        }
        setPoints() {
            const {bounding: t} = this;
            this.points = [];
            const e = 24
                , i = Math.ceil(t.width * 1.2 / e)
                , s = Math.ceil(t.height * 1.2 / e)
                , r = (t.width - i * e) * .5
                , n = (t.height - s * e) * .5
                , o = t.width * .5
                , a = t.height * .5;
            for (let l = 0; l < i; l++)
                for (let h = 0; h < s; h++) {
                    const c = l * e + r
                        , p = h * e + n
                        , f = o - c
                        , g = a - p;
                    this.points.push({
                        x: c,
                        y: p,
                        dx: f,
                        dy: g,
                        m: Math.random(),
                        flowX: 0
                    })
                }
        }
        movePoints() {
            const {points: t, animationProgress: e} = this;
            t.forEach(i => {
                    i.flowX = e * -.05 % 24
                }
            )
        }
        drawPoints() {
            const {bounding: t, ctx: e, points: i, animationProgress: s, pointsProgress: r, last: n} = this
                , o = Math.round(s * 100) / 100
                , a = Math.round(r * 100) / 100;
            a === n.pointsProgress && o === n.animationProgress || (e.clearRect(0, 0, t.width, t.height),
                e.beginPath(),
                i.forEach(l => {
                        const h = l.x + l.dx * (1 - r) * .2 + l.flowX
                            , c = l.y + l.dy * (1 - r) * .2;
                        e.rect(h, c, .5, .5)
                    }
                ),
                e.stroke(),
                n.pointsProgress = a,
                n.animationProgress = o)
        }
        tick() {
            this.scrollProgress = Math.max(Math.min(1, j.positionInViewport(this.el, "top")), 0) * -1 + (1 - Math.max(Math.min(1, j.positionInViewport(this.el, "bottom")), 0)),
                this.smoothScrollProgress += (this.scrollProgress - this.smoothScrollProgress) * .1,
                this.el.style.setProperty("--scroll-progress", String(this.scrollProgress)),
                this.movePoints(),
                this.moveLetters(),
                this.drawPoints()
        }
    }
;
new vc;
let xc = class {
        el;
        svg;
        objectsWrapper;
        ruler;
        objects;
        canThrow;
        lastThrow;
        throwDelay;
        thrownObjects;
        draggedObject;
        smiley;
        lines;
        bounding;
        scroll;
        mouse;
        lastTouch;
        isPaused;
        constructor() {
            this.el = document.querySelector(".s-my-way"),
                this.svg = this.el.querySelector(".js-svg"),
                this.objectsWrapper = this.el.querySelector(".js-objects"),
                this.ruler = this.el.querySelector(".js-ruler"),
                this.objects = [],
                Array.from(this.objectsWrapper.children).forEach(t => {
                        this.objects.push(new wc(t,this))
                    }
                ),
                this.canThrow = !1,
                this.lastThrow = 0,
                this.throwDelay = 2e3,
                this.thrownObjects = [],
                this.draggedObject = null,
                this.smiley = {
                    el: this.el.querySelector(".js-smiley"),
                    bounding: null,
                    rel: {
                        x: 0,
                        y: 0
                    }
                },
                this.lines = {
                    circularPath: this.el.querySelector(".js-lines-circular-path"),
                    lines: []
                },
                this.mouse = {
                    x: 0,
                    y: 0,
                    oy: 0,
                    sx: 0,
                    sy: 0,
                    d: 0,
                    set: !1
                },
                this.isPaused = !0,
                document.readyState === "complete" ? xe.nextTick(this.init, this) : $.once("siteLoaded", this.init, this)
        }
        init() {
            this.setSize(),
                this.setScroll(),
                this.setLines(),
                this.bindEvents(),
                this.firstObjects()
        }
        bindEvents() {
            $.on("mousemove", this.onMouseMove, this),
                $.on("resize", this.onResize, this),
                $.on("scroll", this.onScroll, this),
                $.on("tick", this.tick, this),
                this.objects.forEach(t => {
                        t.el.addEventListener("mousedown", this.objectDragStart.bind(this)),
                            t.el.addEventListener("touchstart", this.objectDragStart.bind(this))
                    }
                ),
                this.el.addEventListener("mouseup", this.objectDragEnd.bind(this)),
                this.el.addEventListener("touchend", this.objectDragEnd.bind(this)),
                this.objectsWrapper.addEventListener("touchmove", this.onTouchMove.bind(this)),
                this.el.addEventListener("intersect", this.onIntersect.bind(this), {
                    passive: !0
                })
        }
        onIntersect(t) {
            this.isPaused = !t.detail.isIntersecting,
                this.canThrow = t.detail.isIntersecting,
            this.isPaused || this.thrownObjects.forEach(e => {
                    e.isWaiting = !1
                }
            )
        }
        onMouseMove(t, e) {
            this.updateMousePosition(t, e)
        }
        onTouchMove(t) {
            if (t.preventDefault(),
            performance.now() - this.lastTouch < xe.delta)
                return;
            const i = t.touches[0];
            this.updateMousePosition(i.clientX, i.clientY),
                this.lastTouch = performance.now()
        }
        updateMousePosition(t, e) {
            const {mouse: i} = this;
            i.x = t - this.bounding.left,
                i.y = e - i.oy + window.scrollY,
            i.set || (i.sx = i.x,
                i.sy = i.y,
                i.set = !0)
        }
        onResize() {
            this.setSize(),
                this.setScroll(),
                this.setLines()
        }
        onScroll(t) {
            const {scroll: e} = this
                , i = t + window.safeHeight;
            i < e.start ? e.p = 0 : i > e.end ? e.p = 1 : e.p = (i - e.start) / (e.end - e.start)
        }
        setSize() {
            const t = this.el.getBoundingClientRect();
            this.bounding = {
                left: t.left,
                top: t.top,
                width: t.width,
                height: t.height
            },
                this.svg.style.width = this.bounding.width + "px",
                this.svg.style.height = this.bounding.height + "px",
                this.smiley.bounding = this.smiley.el.getBoundingClientRect(),
                this.smiley.rel.x = this.smiley.bounding.left - this.bounding.left + this.smiley.bounding.width / 2,
                this.smiley.rel.y = this.smiley.bounding.top - this.bounding.top + this.smiley.bounding.height / 2,
                this.mouse.oy = this.bounding.top + window.scrollY;
            const e = this.ruler.clientHeight;
            this.objectsWrapper.style.perspectiveOrigin = `50% ${e}px `
        }
        setScroll() {
            const {bounding: t} = this;
            this.scroll = {
                start: t.top + window.scrollY,
                end: t.top + window.scrollY + t.height + window.safeHeight,
                p: 0,
                sp: 0
            },
                this.onScroll(window.scrollY),
                this.scroll.sp = this.scroll.p
        }
        setLines() {
            const {lines: t, smiley: e, bounding: i} = this;
            t.lines = [];
            const s = window.safeWidth > 767 ? 12 : 8
                , r = i.width / s;
            for (let c = 0; c <= s; c++)
                t.lines.push({
                    p1: {
                        x: r * c,
                        y: 0
                    },
                    p2: {
                        x: e.rel.x,
                        y: e.rel.y
                    }
                }),
                    t.lines.push({
                        p1: {
                            x: r * c,
                            y: i.height
                        },
                        p2: {
                            x: e.rel.x,
                            y: e.rel.y
                        }
                    });
            const n = i.width
                , o = (i.height - e.rel.y) / 2;
            this.el.style.setProperty("--distortion", String(Math.hypot(n, o) * .14));
            const a = s
                , l = i.height / a
                , h = (i.height - l * a) / 2;
            for (let c = 1; c < a; c++)
                t.lines.push({
                    p1: {
                        x: 0,
                        y: h + l * c
                    },
                    p2: {
                        x: e.rel.x,
                        y: e.rel.y
                    }
                }),
                    t.lines.push({
                        p1: {
                            x: i.width,
                            y: h + l * c
                        },
                        p2: {
                            x: e.rel.x,
                            y: e.rel.y
                        }
                    });
            this.drawLines()
        }
        drawLines() {
            const {lines: t, bounding: e} = this;
            let i = `M 0 ${e.height} L ${e.width} ${e.height}`;
            t.lines.forEach(s => {
                    i += `M ${s.p1.x} ${s.p1.y} L ${s.p2.x} ${s.p2.y} `
                }
            ),
                t.circularPath.setAttribute("d", i)
        }
        throwObject() {
            if (this.objects.length > 0) {
                const e = this.objects.splice(Math.floor(Math.random() * this.objects.length), 1)[0];
                e.set(),
                    this.thrownObjects.push(e)
            }
            this.lastThrow = performance.now();
            const t = window.safeWidth > 767 ? 1 : 2;
            this.throwDelay = (500 + Math.random() * 500) * t
        }
        firstObjects() {
            const t = Math.max(Math.min(Math.round(window.safeWidth * .025), 5), 2);
            for (let e = 0; e < t; e++) {
                const i = this.objects.splice(Math.floor(Math.random() * this.objects.length), 1)[0];
                i.set(!1),
                    this.thrownObjects.push(i)
            }
        }
        objectMoveEnd(t) {
            this.thrownObjects.splice(this.thrownObjects.indexOf(t), 1),
                this.objects.push(t)
        }
        objectDragStart(t) {
            t.preventDefault(),
                this.lastTouch = performance.now(),
            t instanceof MouseEvent || this.onTouchMove(t);
            const e = t.currentTarget
                , i = this.thrownObjects.find(s => s.el === e);
            i.isDragging || i.isVanishing || i && (this.draggedObject = i,
                i.isDragging = !0,
                e.classList.add("is-dragging"))
        }
        objectDragEnd(t) {
            t.preventDefault();
            const e = this.draggedObject;
            e && (e.isDragging = !1,
                e.el.classList.remove("is-dragging"),
                e.isVanishing = !0,
                e.el.classList.add("is-vanishing"),
                e.vanishStart = performance.now())
        }
        tick(t) {
            const {scroll: e, el: i, mouse: s} = this;
            s.sx += (s.x - s.sx) * .1,
                s.sy += (s.y - s.sy) * .1;
            const r = s.x - s.sx
                , n = s.y - s.sy;
            s.d = Math.hypot(r, n),
                e.sp += (e.p - e.sp) * .1,
                i.style.setProperty("--scroll-progress", String(e.sp)),
                this.thrownObjects.forEach(o => {
                        o.move(t)
                    }
                ),
            !this.isPaused && this.canThrow && t - this.lastThrow > this.throwDelay && this.throwObject()
        }
    }
    , wc = class {
        el;
        parent;
        index;
        delay;
        throwTimeout;
        vanishStart;
        vanishDelay;
        s;
        x;
        y;
        z;
        rx;
        ry;
        rz;
        vx;
        vy;
        vz;
        vrx;
        vry;
        isPaused;
        isWaiting;
        isDragging;
        isVanishing;
        constructor(t, e) {
            this.parent = e,
                this.el = t,
                this.index = Array.from(this.el.parentNode.children).indexOf(this.el)
        }
        set(t=!0) {
            this.el.style.setProperty("--size", String(.5 + Math.random() * .5)),
                this.s = 0,
                this.x = 0,
                this.y = 0,
                this.z = -2e4,
                this.rx = 90,
                this.ry = Math.random() * 2 - 1,
                this.rz = 0,
                this.vz = 40 + Math.random() * 10,
                this.vx = Math.random() * window.safeWidth * .0025 * (this.index % 2 ? -1 : 1),
                this.vy = Math.random() * window.safeHeight * .0025 * (this.index % 3 ? -1 : 1),
                this.vrx = .25 + Math.random() * 1,
                this.vry = .25 + Math.random() * 1,
                this.isWaiting = !1,
                this.isDragging = !1,
                this.isVanishing = !1,
                this.el.classList.remove("is-waiting"),
                this.el.classList.remove("is-dragging"),
                this.el.classList.remove("is-vanishing"),
                this.vanishStart = 0,
                this.vanishDelay = 1e3,
            t || (this.isWaiting = !0,
                this.s = 1,
                this.x = this.vx * Math.random() * 200,
                this.y = this.vy * Math.random() * 200,
                this.rx = Math.random() * 360,
                this.ry = Math.random() * 360,
                this.z = Math.random() * -2e4),
                this.el.style.setProperty("--s", String(this.s))
        }
        move(t) {
            if (!this.isWaiting) {
                if (this.isDragging) {
                    const e = this.parent.mouse.x - this.parent.smiley.rel.x
                        , i = this.parent.mouse.y - this.parent.smiley.rel.y * 1.5;
                    this.vx += (e - this.x) * .075,
                        this.vy += (i - this.y) * .075,
                        this.vz += (0 - this.z) * .3,
                        this.ry = this.vx * .15,
                        this.rx = this.vy * -.15,
                        this.rz = this.ry + this.rx,
                        this.vx *= .9,
                        this.vy *= .9,
                        this.vz *= .75,
                        this.x += this.vx * .5,
                        this.y += this.vy * .5,
                        this.z += this.vz * .25,
                        this.z = Math.min(this.z, 500),
                        this.s += (1 - this.s) * .5
                } else
                    this.isVanishing ? (this.vy += .5,
                        this.x += this.vx,
                        this.y += this.vy,
                        this.rx += this.vrx,
                        this.ry += this.vry,
                    t - this.vanishStart > this.vanishDelay && (this.isWaiting = !0,
                        this.el.classList.add("is-waiting"),
                        this.parent.objectMoveEnd(this))) : this.z > 1e3 ? (this.isWaiting = !0,
                        this.el.classList.add("is-waiting"),
                        this.parent.objectMoveEnd(this)) : (this.s += .005,
                        this.s = Math.min(this.s, 1),
                        this.z += this.vz,
                        this.x += this.vx,
                        this.y += this.vy,
                        this.rx += this.vrx,
                        this.ry += this.vry);
                this.el.style.setProperty("--x", this.x + "px"),
                    this.el.style.setProperty("--y", this.y + "px"),
                    this.el.style.setProperty("--z", this.z + "px"),
                    this.el.style.setProperty("--rx", String(this.rx)),
                    this.el.style.setProperty("--ry", String(this.ry)),
                    this.el.style.setProperty("--rz", String(this.rz)),
                    this.el.style.setProperty("--s", String(this.s))
            }
        }
    }
;
new xc;
ne.registerPlugin(j);
class bc {
    el;
    container;
    hover;
    button;
    cta;
    bounding;
    ctaMaxSize;
    grid;
    wave;
    buttonIsHovered;
    isPaused;
    tl;
    constructor() {
        this.el = document.querySelector(".s-cta"),
            this.container = this.el.querySelector(".js-container"),
            this.hover = this.el.querySelector(".js-hover"),
            this.button = this.el.querySelector(".js-button"),
            this.cta = this.el.querySelector(".js-cta"),
            this.grid = {
                bounding: new DOMRect,
                width: 0,
                height: 0,
                vLines: 0,
                hLines: 0,
                gapX: 0,
                gapY: 0,
                lines: [],
                points: [],
                el: this.el.querySelector(".js-grid"),
                svg: this.el.querySelector(".js-grid-svg"),
                path: this.el.querySelector(".js-grid-path")
            },
            this.wave = {
                progress: 0,
                op: 0,
                speed: window.safeWidth > 767 ? 15 : 10,
                strength: window.safeWidth > 767 ? 1 : .35,
                state: "paused",
                timeout: 0
            },
            this.buttonIsHovered = !1,
            this.isPaused = !0,
            document.readyState === "complete" ? xe.nextTick(this.init, this) : $.once("siteLoaded", this.init, this)
    }
    init() {
        this.setSize(),
            this.setGrid(),
            this.createPulseTimeline(),
            this.bindEvents()
    }
    bindEvents() {
        $.on("resize", this.onResize, this),
            this.hover.addEventListener("mouseenter", this.onHover.bind(this)),
            this.hover.addEventListener("touchstart", this.onHover.bind(this)),
            this.hover.addEventListener("mouseleave", this.onOut.bind(this), {
                passive: !0
            }),
            this.el.addEventListener("touchstart", this.onOut.bind(this), {
                passive: !0
            }),
            this.el.addEventListener("intersect", this.onIntersect.bind(this), {
                passive: !0
            })
    }
    onResize() {
        this.setSize(),
            this.setGrid()
    }
    onIntersect(t) {
        this.isPaused = !t.detail.isIntersecting,
            this.isPaused ? $.off("tick", this.tick, this) : $.on("tick", this.tick, this)
    }
    onHover(t) {
        this.buttonIsHovered || (this.buttonIsHovered = !0,
            this.hover.classList.add("is-active"),
            this.tl.pause(),
            clearTimeout(this.wave.timeout),
            this.wave.timeout = setTimeout( () => {
                    this.waveShock()
                }
                , 600),
            ne.to(this.wave, {
                op: 1,
                delay: .3,
                duration: 1.2,
                ease: "expo.inOut",
                overwrite: !0
            }),
            t.stopPropagation())
    }
    onOut(t) {
        const e = t.target;
        if (e.tagName === "A") {
            window.location.href = e.href;
            return
        }
        this.buttonIsHovered && (clearTimeout(this.wave.timeout),
            this.buttonIsHovered = !1,
            this.hover.classList.remove("is-active"),
            this.tl.play(0),
            ne.to(this.wave, {
                op: 0,
                duration: .7,
                ease: "expo.inOut",
                overwrite: !0
            }))
    }
    setSize() {
        this.grid.bounding = this.grid.el.getBoundingClientRect(),
            this.bounding = this.container.getBoundingClientRect(),
            this.ctaMaxSize = Math.min(this.bounding.width, this.bounding.height) - 32,
            this.cta.style.setProperty("--size", this.ctaMaxSize + "px")
    }
    setGrid() {
        const {grid: t} = this
            , e = this.grid.bounding.width
            , i = this.grid.bounding.height;
        t.width = e,
            t.height = i,
            t.svg.style.width = e + "px",
            t.svg.style.height = i + "px",
            t.points = [],
            t.vLines = window.safeWidth > 767 ? 12 : 8,
            t.gapX = e / t.vLines,
            t.gapY = this.bounding.height / 8,
            t.hLines = Math.floor(i / t.gapY);
        const s = i - t.gapY * t.hLines
            , r = {
            x: e / 2,
            y: i - this.bounding.height / 2
        };
        for (let n = 0; n <= t.vLines; n++) {
            const o = [];
            for (let a = 0; a <= t.hLines; a++) {
                const l = {
                    x: t.gapX * n,
                    y: t.gapY * a + (a !== 0 ? s : 0),
                    ax: 0,
                    ay: 0,
                    vx: 0,
                    vy: 0,
                    wx: 0,
                    wy: 0,
                    mx: 0,
                    my: 0,
                    ox: 0,
                    oy: 0,
                    dx: 0,
                    dy: 0,
                    dist: 0
                }
                    , h = l.x - r.x
                    , c = l.y - r.y
                    , p = Math.atan2(c, h);
                l.dist = Math.hypot(h, c),
                    l.dist === 0 ? (l.dx = 0,
                        l.dy = 0) : (l.dx = Math.cos(p) * (e / 2 / l.dist) * 5,
                        l.dy = Math.sin(p) * (e / 2 / l.dist) * 5),
                    o.push(l)
            }
            t.points.push(o)
        }
    }
    createPulseTimeline() {
        const t = this.container.querySelector(".js-button-text");
        this.tl = ne.timeline({
            repeat: -1,
            repeatDelay: .5
        }),
            this.tl.call( () => {
                    this.wave.state = "pulse"
                }
            ),
            this.tl.fromTo(t, {
                scale: .85
            }, {
                scale: 1.05,
                duration: 2.7,
                ease: "power2.in"
            }),
            this.tl.call(this.wavePulse.bind(this), []),
            this.tl.to(t, {
                scale: .85,
                duration: .15,
                ease: "power4.out"
            })
    }
    movePoints(t) {
        const {grid: e, wave: i} = this;
        e.points.forEach( (s, r) => {
                s.forEach( (n, o) => {
                        if (o === 0 || n.dist === 0)
                            return;
                        const a = Math.abs(n.dist - i.progress)
                            , l = 30;
                        if (a < l) {
                            const h = 1 - a / l
                                , c = Math.atan2(n.dy, n.dx)
                                , p = Math.cos(a * .01) * h;
                            n.vx += Math.cos(c) * p * l * .5 * i.strength,
                                n.vy += Math.sin(c) * p * l * .5 * i.strength
                        }
                        n.vx += (0 - n.wx) * .001,
                            n.vy += (0 - n.wy) * .001,
                            n.vx *= .9,
                            n.vy *= .9,
                            n.wx += n.vx * 3,
                            n.wy += n.vy * 3,
                            n.wx *= .9,
                            n.wy *= .9,
                            n.mx = n.wx * .1,
                            n.my = n.wy * .1,
                            n.ox = n.dx / Math.hypot(window.safeHeight, window.safeWidth),
                            n.oy = n.dy / Math.hypot(window.safeHeight, window.safeWidth),
                            n.ox = this.easeOut(n.ox),
                            n.oy = this.easeOut(n.oy),
                            n.ox *= e.gapX * 75 * (n.dist / this.ctaMaxSize),
                            n.oy *= e.gapY * 75 * (n.dist / this.ctaMaxSize)
                    }
                )
            }
        )
    }
    easeOut(t) {
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
    }
    drawLines() {
        const {grid: t} = this;
        let e = "";
        t.points.forEach(i => {
                i.forEach( (s, r) => {
                        const n = this.movedPoint(s);
                        r === 0 ? e += `M ${n.x} ${n.y} ` : e += `L ${n.x} ${n.y} `
                    }
                )
            }
        );
        for (let i = 0; i < t.hLines; i++)
            t.points.forEach( (s, r) => {
                    const n = s[i]
                        , o = this.movedPoint(n);
                    r === 0 ? e += `M ${o.x} ${o.y} ` : e += `L ${o.x} ${o.y} `
                }
            );
        t.path.setAttribute("d", e)
    }
    movedPoint(t) {
        return {
            x: t.x + t.mx + t.ox * this.wave.op,
            y: t.y + t.my + t.oy * this.wave.op
        }
    }
    wavePulse() {
        if (this.buttonIsHovered)
            return;
        const {wave: t} = this;
        t.progress = 0,
            t.state = "pulse",
            t.speed = window.safeWidth > 767 ? 15 : 10,
            t.strength = window.safeWidth > 767 ? 1 : .35
    }
    waveShock() {
        const {wave: t} = this;
        !this.buttonIsHovered || t.state === "shock" || (t.progress = 0,
            t.state = "shock",
            t.speed = 30,
            t.strength = 5)
    }
    tick(t) {
        const {wave: e} = this;
        e.progress < this.grid.height && e.state !== "paused" && (e.progress += e.speed),
            this.movePoints(t),
            this.drawLines()
    }
}
new bc;
class Cc extends HTMLElement {
    chars;
    codes;
    isPaused;
    connectedCallback() {
        this.codes = this.querySelectorAll(".js-code"),
            this.chars = this.querySelectorAll(".js-char"),
            this.isPaused = !0,
            this.bindEvents()
    }
    bindEvents() {
        this.addEventListener("intersect", this.onIntersect.bind(this), {
            passive: !0
        })
    }
    onIntersect(t) {
        this.isPaused = !t.detail.isIntersecting,
            this.isPaused ? $.off("tick", this.tick, this) : $.on("tick", this.tick, this)
    }
    tick() {
        this.chars.forEach(t => {
                t.classList.contains("a__char--blank") || Math.random() > .1 || (t.classList.remove("a__char--0"),
                    t.classList.remove("a__char--1"),
                    t.classList.add("a__char--" + (Math.random() > .5 ? "0" : "1")))
            }
        )
    }
}
customElements.define("a-separator", Cc);
class Sc {
    constructor(t=0) {
        this.grad3 = [new Fe(1,1,0), new Fe(-1,1,0), new Fe(1,-1,0), new Fe(-1,-1,0), new Fe(1,0,1), new Fe(-1,0,1), new Fe(1,0,-1), new Fe(-1,0,-1), new Fe(0,1,1), new Fe(0,-1,1), new Fe(0,1,-1), new Fe(0,-1,-1)],
            this.p = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180],
            this.perm = new Array(512),
            this.gradP = new Array(512),
            this.seed(t)
    }
    seed(t) {
        t > 0 && t < 1 && (t *= 65536),
            t = Math.floor(t),
        t < 256 && (t |= t << 8);
        for (let e = 0; e < 256; e++) {
            let i;
            e & 1 ? i = this.p[e] ^ t & 255 : i = this.p[e] ^ t >> 8 & 255,
                this.perm[e] = this.perm[e + 256] = i,
                this.gradP[e] = this.gradP[e + 256] = this.grad3[i % 12]
        }
    }
    fade(t) {
        return t * t * t * (t * (t * 6 - 15) + 10)
    }
    lerp(t, e, i) {
        return (1 - i) * t + i * e
    }
    perlin2(t, e) {
        let i = Math.floor(t)
            , s = Math.floor(e);
        t -= i,
            e -= s,
            i = i & 255,
            s = s & 255;
        const r = this.gradP[i + this.perm[s]].dot2(t, e)
            , n = this.gradP[i + this.perm[s + 1]].dot2(t, e - 1)
            , o = this.gradP[i + 1 + this.perm[s]].dot2(t - 1, e)
            , a = this.gradP[i + 1 + this.perm[s + 1]].dot2(t - 1, e - 1)
            , l = this.fade(t);
        return this.lerp(this.lerp(r, o, l), this.lerp(n, a, l), this.fade(e))
    }
}
class Fe {
    constructor(t, e, i) {
        this.x = t,
            this.y = e,
            this.z = i
    }
    dot2(t, e) {
        return this.x * t + this.y * e
    }
    dot3(t, e, i) {
        return this.x * t + this.y * e + this.z * i
    }
}
class Ec extends HTMLElement {
    svg;
    bounding;
    mouse;
    lines;
    paths;
    noise;
    isInteractive;
    isPaused;
    connectedCallback() {
        this.svg = this.querySelector(".js-svg"),
            this.mouse = {
                x: -10,
                y: 0,
                lx: 0,
                ly: 0,
                sx: 0,
                sy: 0,
                v: 0,
                vs: 0,
                a: 0,
                set: !1
            },
            this.lines = [],
            this.paths = [],
            this.noise = new Sc(Math.random()),
            this.isInteractive = !1,
            this.isPaused = !0,
            this.setSize(),
            this.setLines(),
            this.bindEvents()
    }
    bindEvents() {
        $.on("mousemove", this.onMouseMove, this),
            $.on("resize", this.onResize, this),
            this.addEventListener("touchmove", this.onTouchMove.bind(this)),
            this.addEventListener("intersect", this.onIntersect.bind(this), {
                passive: !0
            }),
            this.addEventListener("introend", this.onIntroEnd.bind(this))
    }
    onResize() {
        this.setSize(),
            this.setLines()
    }
    onMouseMove(t, e) {
        this.updateMousePosition(t, e)
    }
    onTouchMove(t) {
        t.preventDefault();
        const e = t.touches[0];
        this.updateMousePosition(e.clientX, e.clientY)
    }
    updateMousePosition(t, e) {
        const {mouse: i} = this;
        i.x = t - this.bounding.left,
            i.y = e - this.bounding.top + window.scrollY,
        i.set || (i.sx = i.x,
            i.sy = i.y,
            i.lx = i.x,
            i.ly = i.y,
            i.set = !0)
    }
    onIntersect(t) {
        this.isPaused = !t.detail.isIntersecting,
            this.isPaused ? $.off("tick", this.tick, this) : $.on("tick", this.tick, this)
    }
    onIntroEnd() {
        this.isInteractive = !0
    }
    setSize() {
        const t = this.getBoundingClientRect();
        this.svg.style.width = "",
            this.svg.style.height = "",
            this.bounding = {
                left: t.left,
                top: t.top + window.scrollY,
                width: this.clientWidth,
                height: this.clientHeight
            },
            this.svg.style.width = `${this.bounding.width}px`,
            this.svg.style.height = `${this.bounding.height}px`
    }
    setLines() {
        const {width: t, height: e} = this.bounding;
        this.lines = [],
            this.paths.forEach(c => {
                    c.remove()
                }
            ),
            this.paths = [];
        const i = 10
            , s = 32
            , r = t + 200
            , n = e + 30
            , o = Math.ceil(r / i)
            , a = Math.ceil(n / s)
            , l = (t - i * o) / 2
            , h = (e - s * a) / 2;
        for (let c = 0; c <= o; c++) {
            const p = [];
            for (let g = 0; g <= a; g++) {
                const d = {
                    x: l + i * c,
                    y: h + s * g,
                    wave: {
                        x: 0,
                        y: 0
                    },
                    cursor: {
                        x: 0,
                        y: 0,
                        vx: 0,
                        vy: 0
                    }
                };
                p.push(d)
            }
            const f = document.createElementNS("http://www.w3.org/2000/svg", "path");
            f.classList.add("a__line"),
                f.classList.add("js-line"),
                this.svg.appendChild(f),
                this.paths.push(f),
                this.lines.push(p)
        }
        this.isPaused && this.drawLines()
    }
    movePoints(t) {
        const {lines: e, mouse: i, noise: s} = this;
        e.forEach(r => {
                r.forEach(n => {
                        const o = s.perlin2((n.x + t * .0125) * .002, (n.y + t * .005) * .0015) * 12;
                        if (n.wave.x = Math.cos(o) * 32,
                            n.wave.y = Math.sin(o) * 16,
                            this.isInteractive) {
                            const a = n.x - i.sx
                                , l = n.y - i.sy
                                , h = Math.hypot(a, l)
                                , c = Math.max(175, i.vs);
                            if (h < c) {
                                const p = 1 - h / c
                                    , f = Math.cos(h * .001) * p;
                                n.cursor.vx += Math.cos(i.a) * f * c * i.vs * 65e-5,
                                    n.cursor.vy += Math.sin(i.a) * f * c * i.vs * 65e-5
                            }
                            n.cursor.vx += (0 - n.cursor.x) * .005,
                                n.cursor.vy += (0 - n.cursor.y) * .005,
                                n.cursor.vx *= .925,
                                n.cursor.vy *= .925,
                                n.cursor.x += n.cursor.vx * 2,
                                n.cursor.y += n.cursor.vy * 2,
                                n.cursor.x = Math.min(100, Math.max(-100, n.cursor.x)),
                                n.cursor.y = Math.min(100, Math.max(-100, n.cursor.y))
                        }
                    }
                )
            }
        )
    }
    moved(t, e=!0) {
        const i = {
            x: t.x + t.wave.x + (e ? t.cursor.x : 0),
            y: t.y + t.wave.y + (e ? t.cursor.y : 0)
        };
        return i.x = Math.round(i.x * 10) / 10,
            i.y = Math.round(i.y * 10) / 10,
            i
    }
    drawLines() {
        const {lines: t, moved: e, paths: i} = this;
        t.forEach( (s, r) => {
                let n = e(s[0], !1)
                    , o = `M ${n.x} ${n.y}`;
                s.forEach( (a, l) => {
                        const h = l === s.length - 1;
                        a = e(a, !h),
                            e(s[l + 1] || s[s.length - 1], !h),
                            o += `L ${a.x} ${a.y}`
                    }
                ),
                    i[r].setAttribute("d", o)
            }
        )
    }
    tick(t) {
        const {mouse: e} = this;
        e.sx += (e.x - e.sx) * .1,
            e.sy += (e.y - e.sy) * .1;
        const i = e.x - e.lx
            , s = e.y - e.ly
            , r = Math.hypot(i, s);
        e.v = r,
            e.vs += (r - e.vs) * .1,
            e.vs = Math.min(100, e.vs),
            e.lx = e.x,
            e.ly = e.y,
            e.a = Math.atan2(s, i),
            this.style.setProperty("--x", `${e.sx}px`),
            this.style.setProperty("--y", `${e.sy}px`),
            this.movePoints(t),
            this.drawLines()
    }
}
customElements.define("a-waves", Ec);
class Tc extends HTMLElement {
    static observedAttributes = ["progress"];
    link;
    video;
    isPlaying;
    connectedCallback() {
        this.video = this.querySelector(".js-video"),
            this.link = this.querySelector("a"),
            this.isPlaying = !1,
            this.link.addEventListener("click", this.onClick.bind(this))
    }
    attributeChangedCallback(t, e, i) {
        t === "progress" && (this.style.setProperty("--progress", i),
            i === "1" || i === "-1" ? this.isPlaying && this.outView() : this.isPlaying || this.inView())
    }
    inView() {
        this.video.play(),
            this.isPlaying = !0,
            this.classList.add("is-inview")
    }
    outView() {
        this.video.pause(),
            this.isPlaying = !1,
            this.classList.remove("is-inview")
    }
    onClick(t) {
        if (this.link.href.includes("#"))
            return t.preventDefault(),
                !1
    }
}
customElements.define("a-work", Tc);

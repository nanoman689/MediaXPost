"use strict";
this.default_main = this.default_main || {};
(function(_) {
    var window = this;
    try {
        var aa, ba, ca, ea, da, ha, ia, ka, la;
        for (_.g, aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
                if (c.get || c.set) throw new TypeError("ES3 does not support getters and setters.");
                a != Array.prototype && a != Object.prototype && (a[b] = c.value)
            }, ba = "undefined" != typeof window && window === this ? this : "undefined" != typeof window.global && null != window.global ? window.global : this, ca = function() {
                ca = function() {};
                ba.Symbol || (ba.Symbol = da)
            }, ea = 0, da = function(a) {
                return "jscomp_symbol_" + (a || "") + ea++
            }, _.ga = function() {
                ca();
                var a = ba.Symbol.iterator;
                a || (a = ba.Symbol.iterator = ba.Symbol("iterator"));
                "function" != typeof Array.prototype[a] && aa(Array.prototype, a, {
                    configurable: !0,
                    writable: !0,
                    value: function() {
                        return _.fa(this)
                    }
                });
                _.ga = function() {}
            }, _.fa = function(a) {
                var b = 0;
                return ha(function() {
                    return b < a.length ? {
                        done: !1,
                        value: a[b++]
                    } : {
                        done: !0
                    }
                })
            }, ha = function(a) {
                _.ga();
                a = {
                    next: a
                };
                a[ba.Symbol.iterator] = function() {
                    return this
                };
                return a
            }, ia = ba, ka = ["String", "prototype", "repeat"], la = 0; la < ka.length - 1; la++) {
            var ma = ka[la];
            ma in ia || (ia[ma] = {});
            ia = ia[ma]
        }
        var na = ka[ka.length - 1],
            oa = ia[na],
            pa = oa ? oa : function(a) {
                var b;
                if (null == this) throw new TypeError("The 'this' value for String.prototype.repeat must not be null or undefined");
                b = this + "";
                if (0 > a || 1342177279 < a) throw new window.RangeError("Invalid count value");
                a |= 0;
                for (var c = ""; a;)
                    if (a & 1 && (c += b), a >>>= 1) b += b;
                return c
            };
        pa != oa && null != pa && aa(ia, na, {
            configurable: !0,
            writable: !0,
            value: pa
        });
        _.qa = _.qa || {};
        _.l = this;
        _.ra = "closure_uid_" + (1E9 * Math.random() >>> 0);
        _.sa = Date.now || function() {
            return +new Date
        };

    } catch (e) {
        _._DumpException(e)
    }
    try {
        var ta, ua;
        _.m = function(a) {
            return void 0 !== a
        };
        ta = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b, c)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        };
        ua = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        };
        _.va = function(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        };
        _.p = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.A = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.Dc = function(a, c, f) {
                for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
                return b.prototype[c].apply(a, d)
            }
        };
        _.wa = function(a, b) {
            var c = a.split("."),
                d = _.l;
            c[0] in d || !d.execScript || d.execScript("var " + c[0]);
            for (var e; c.length && (e = c.shift());) !c.length && _.m(b) ? d[e] = b : d[e] ? d = d[e] : d = d[e] = {}
        };
        _.xa = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var b = c.slice();
                b.push.apply(b, arguments);
                return a.apply(this, b)
            }
        };
        _.r = function(a, b, c) {
            _.r = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ua : ta;
            return _.r.apply(null, arguments)
        };
        _.ya = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        };
        _.za = function(a) {
            return "function" == _.va(a)
        };
        _.Aa = function(a) {
            return "number" == typeof a
        };
        _.t = function(a) {
            return "string" == typeof a
        };
        _.Ba = function(a) {
            var b = _.va(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        };
        _.Ca = function(a) {
            return "array" == _.va(a)
        };
        _.Da = function() {};
        _.Ea = function(a) {
            a = a.split(".");
            for (var b = _.l, c; c = a.shift();)
                if (null != b[c]) b = b[c];
                else return null;
            return b
        };
        _.Fa = function(a) {
            if (Error.captureStackTrace) Error.captureStackTrace(this, _.Fa);
            else {
                var b = Error().stack;
                b && (this.stack = b)
            }
            a && (this.message = String(a))
        };
        _.p(_.Fa, Error);
        _.Fa.prototype.name = "CustomError";
        var Ga;
        var Ka, Ma, Na, Oa, Pa, Qa, Ra, La, Ta, Wa;
        _.Ha = function(a, b) {
            return 0 == a.lastIndexOf(b, 0)
        };
        _.Ia = function(a, b) {
            var c = a.length - b.length;
            return 0 <= c && a.indexOf(b, c) == c
        };
        _.Ja = function(a) {
            return /^[\s\xa0]*$/.test(a)
        };
        Ka = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
        };
        _.Sa = function(a) {
            if (!La.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Ma, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Na, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Oa, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Pa, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Qa, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Ra, "&#0;"));
            return a
        };
        Ma = /&/g;
        Na = /</g;
        Oa = />/g;
        Pa = /"/g;
        Qa = /'/g;
        Ra = /\x00/g;
        La = /[\x00&<>"']/;
        Ta = String.prototype.repeat ? function(a, b) {
            return a.repeat(b)
        } : function(a, b) {
            return Array(b + 1).join(a)
        };
        _.Ua = function(a) {
            return null == a ? "" : String(a)
        };
        _.Va = function() {
            return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ (0, _.sa)()).toString(36)
        };
        _.Xa = function(a, b) {
            for (var c = 0, d = Ka(String(a)).split("."), e = Ka(String(b)).split("."), f = Math.max(d.length, e.length), h = 0; 0 == c && h < f; h++) {
                var k = d[h] || "",
                    n = e[h] || "";
                do {
                    k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
                    n = /(\d*)(\D*)(.*)/.exec(n) || ["", "", "", ""];
                    if (0 == k[0].length && 0 == n[0].length) break;
                    c = Wa(0 == k[1].length ? 0 : (0, window.parseInt)(k[1], 10), 0 == n[1].length ? 0 : (0, window.parseInt)(n[1], 10)) || Wa(0 == k[2].length, 0 == n[2].length) || Wa(k[2], n[2]);
                    k = k[3];
                    n = n[3]
                } while (0 == c)
            }
            return c
        };
        Wa = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
        var Ya;
        Ya = Array.prototype.indexOf ? function(a, b, c) {
            return Array.prototype.indexOf.call(a, b, c)
        } : function(a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (_.t(a)) return _.t(b) && 1 == b.length ? a.indexOf(b, c) : -1;
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        };
        _.u = Array.prototype.forEach ? function(a, b, c) {
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = _.t(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        };
        _.Za = function(a, b) {
            for (var c = _.t(a) ? a.split("") : a, d = a.length - 1; 0 <= d; --d) d in c && b.call(void 0, c[d], d, a)
        };
        _.$a = Array.prototype.filter ? function(a, b, c) {
            return Array.prototype.filter.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = [], f = 0, h = _.t(a) ? a.split("") : a, k = 0; k < d; k++)
                if (k in h) {
                    var n = h[k];
                    b.call(c, n, k, a) && (e[f++] = n)
                }
            return e
        };
        _.ab = Array.prototype.map ? function(a, b, c) {
            return Array.prototype.map.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = Array(d), f = _.t(a) ? a.split("") : a, h = 0; h < d; h++) h in f && (e[h] = b.call(c, f[h], h, a));
            return e
        };
        _.bb = Array.prototype.some ? function(a, b, c) {
            return Array.prototype.some.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = _.t(a) ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && b.call(c, e[f], f, a)) return !0;
            return !1
        };
        _.db = function(a, b) {
            var c = _.cb(a, b, void 0);
            return 0 > c ? null : _.t(a) ? a.charAt(c) : a[c]
        };
        _.cb = function(a, b, c) {
            for (var d = a.length, e = _.t(a) ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && b.call(c, e[f], f, a)) return f;
            return -1
        };
        _.eb = function(a, b) {
            return 0 <= Ya(a, b)
        };
        _.gb = function(a, b) {
            var c = Ya(a, b),
                d;
            (d = 0 <= c) && _.fb(a, c);
            return d
        };
        _.fb = function(a, b) {
            return 1 == Array.prototype.splice.call(a, b, 1).length
        };
        _.hb = function(a) {
            return Array.prototype.concat.apply(Array.prototype, arguments)
        };
        _.ib = function(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        };
        a: {
            var kb = _.l.navigator;
            if (kb) {
                var lb = kb.userAgent;
                if (lb) {
                    _.jb = lb;
                    break a
                }
            }
            _.jb = ""
        }
        _.w = function(a) {
            return -1 != _.jb.indexOf(a)
        };
        var nb, ob, pb, rb;
        _.mb = function(a, b, c) {
            for (var d in a) b.call(c, a[d], d, a)
        };
        nb = function(a, b) {
            for (var c in a)
                if (b.call(void 0, a[c], c, a)) return !0;
            return !1
        };
        ob = function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = a[d];
            return b
        };
        pb = function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = d;
            return b
        };
        _.qb = function(a) {
            var b = {},
                c;
            for (c in a) b[c] = a[c];
            return b
        };
        rb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
        _.sb = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < rb.length; f++) c = rb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        };
        var tb = function() {
            return (_.w("Chrome") || _.w("CriOS")) && !_.w("Edge")
        };
        var ub;
        ub = function() {
            return _.w("iPhone") && !_.w("iPod") && !_.w("iPad")
        };
        _.vb = function() {
            return _.w("Macintosh")
        };
        _.wb = function() {
            return _.w("Windows")
        };
        var xb = function(a) {
            xb[" "](a);
            return a
        };
        xb[" "] = _.Da;
        _.yb = function(a, b) {
            try {
                return xb(a[b]), !0
            } catch (c) {}
            return !1
        };
        _.zb = function(a, b, c) {
            return Object.prototype.hasOwnProperty.call(a, b) ? a[b] : a[b] = c(b)
        };
        var Ab, Bb, Eb, Ib, Jb, Nb, Ob, Qb;
        Ab = _.w("Opera");
        _.x = _.w("Trident") || _.w("MSIE");
        Bb = _.w("Edge");
        _.Cb = _.w("Gecko") && !(-1 != _.jb.toLowerCase().indexOf("webkit") && !_.w("Edge")) && !(_.w("Trident") || _.w("MSIE")) && !_.w("Edge");
        _.Db = -1 != _.jb.toLowerCase().indexOf("webkit") && !_.w("Edge");
        Eb = _.l.navigator || null;
        _.Fb = Eb && Eb.platform || "";
        _.Gb = _.vb();
        _.Hb = _.wb();
        Ib = function() {
            var a = _.l.document;
            return a ? a.documentMode : void 0
        };
        a: {
            var Kb = "",
                Lb = function() {
                    var a = _.jb;
                    if (_.Cb) return /rv\:([^\);]+)(\)|;)/.exec(a);
                    if (Bb) return /Edge\/([\d\.]+)/.exec(a);
                    if (_.x) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                    if (_.Db) return /WebKit\/(\S+)/.exec(a);
                    if (Ab) return /(?:Version)[ \/]?(\S+)/.exec(a)
                }();Lb && (Kb = Lb ? Lb[1] : "");
            if (_.x) {
                var Mb = Ib();
                if (null != Mb && Mb > (0, window.parseFloat)(Kb)) {
                    Jb = String(Mb);
                    break a
                }
            }
            Jb = Kb
        }
        Nb = Jb;
        Ob = {};
        _.Pb = function(a) {
            return _.zb(Ob, a, function() {
                return 0 <= _.Xa(Nb, a)
            })
        };
        var Rb = _.l.document;
        Qb = Rb && _.x ? Ib() || ("CSS1Compat" == Rb.compatMode ? (0, window.parseInt)(Nb, 10) : 5) : void 0;
        var Sb = _.w("Firefox"),
            Tb = ub() || _.w("iPod"),
            Ub = _.w("iPad"),
            Vb = _.w("Android") && !(tb() || _.w("Firefox") || _.w("Opera") || _.w("Silk")),
            Wb = tb(),
            Xb = _.w("Safari") && !(tb() || _.w("Coast") || _.w("Opera") || _.w("Edge") || _.w("Silk") || _.w("Android")) && !(ub() || _.w("iPad") || _.w("iPod"));
        var Yb = null;
        var Zb, $b, bc, ac, ec, fc, dc;
        Zb = function(a) {
            return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
        };
        $b = function(a) {
            a = String(a);
            if (Zb(a)) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("c`" + a);
        };
        _.cc = function(a, b) {
            var c = [];
            ac(new bc(b), a, c);
            return c.join("")
        };
        bc = function(a) {
            this.a = a
        };
        ac = function(a, b, c) {
            if (null == b) c.push("null");
            else {
                if ("object" == typeof b) {
                    if (_.Ca(b)) {
                        var d = b;
                        b = d.length;
                        c.push("[");
                        for (var e = "", f = 0; f < b; f++) c.push(e), e = d[f], ac(a, a.a ? a.a.call(d, String(f), e) : e, c), e = ",";
                        c.push("]");
                        return
                    }
                    if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                    else {
                        c.push("{");
                        f = "";
                        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (e = b[d], "function" != typeof e && (c.push(f), dc(d, c), c.push(":"), ac(a, a.a ? a.a.call(b, d, e) : e, c), f = ","));
                        c.push("}");
                        return
                    }
                }
                switch (typeof b) {
                    case "string":
                        dc(b,
                            c);
                        break;
                    case "number":
                        c.push((0, window.isFinite)(b) && !(0, window.isNaN)(b) ? String(b) : "null");
                        break;
                    case "boolean":
                        c.push(String(b));
                        break;
                    case "function":
                        c.push("null");
                        break;
                    default:
                        throw Error("d`" + typeof b);
                }
            }
        };
        ec = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        };
        fc = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
        dc = function(a, b) {
            b.push('"', a.replace(fc, function(a) {
                var b = ec[a];
                b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), ec[a] = b);
                return b
            }), '"')
        };
        var ic, kc, lc, oc;
        _.y = function() {};
        _.gc = "function" == typeof window.Uint8Array;
        _.z = function(a, b, c, d, e) {
            a.b = null;
            b || (b = c ? [c] : []);
            a.D = c ? String(c) : void 0;
            a.h = 0 === c ? -1 : 0;
            a.g = b;
            a: {
                if (a.g.length && (b = a.g.length - 1, (c = a.g[b]) && "object" == typeof c && !_.Ca(c) && !(_.gc && c instanceof window.Uint8Array))) {
                    a.C = b - a.h;
                    a.c = c;
                    break a
                }
                a.C = Number.MAX_VALUE
            }
            a.v = {};
            if (d)
                for (b = 0; b < d.length; b++) c = d[b], c < a.C ? (c += a.h, a.g[c] = a.g[c] || _.hc) : a.c[c] = a.c[c] || _.hc;
            e && e.length && (0, _.u)(e, _.xa(ic, a))
        };
        _.hc = [];
        _.A = function(a, b) {
            if (b < a.C) {
                var c = b + a.h,
                    d = a.g[c];
                return d === _.hc ? a.g[c] = [] : d
            }
            d = a.c[b];
            return d === _.hc ? a.c[b] = [] : d
        };
        _.jc = function(a, b, c) {
            a = _.A(a, b);
            return null == a ? c : a
        };
        _.B = function(a, b, c) {
            b < a.C ? a.g[b + a.h] = c : a.c[b] = c
        };
        ic = function(a, b) {
            var c, d;
            (0, _.u)(b, function(b) {
                var e = _.A(a, b);
                null != e && (c = b, d = e, _.B(a, b, void 0))
            });
            return c ? (_.B(a, c, d), c) : 0
        };
        _.C = function(a, b, c) {
            a.b || (a.b = {});
            if (!a.b[c]) {
                var d = _.A(a, c);
                d && (a.b[c] = new b(d))
            }
            return a.b[c]
        };
        _.E = function(a, b, c) {
            a.b || (a.b = {});
            var d = c ? _.D(c) : c;
            a.b[b] = c;
            _.B(a, b, d)
        };
        kc = function(a) {
            if (a.b)
                for (var b in a.b) {
                    var c = a.b[b];
                    if (_.Ca(c))
                        for (var d = 0; d < c.length; d++) c[d] && _.D(c[d]);
                    else c && _.D(c)
                }
        };
        _.D = function(a) {
            kc(a);
            return a.g
        };
        lc = _.l.JSON && _.l.JSON.stringify || "object" === typeof JSON && JSON.stringify;
        _.y.prototype.j = _.gc ? function() {
            var a = window.Uint8Array.prototype.toJSON;
            window.Uint8Array.prototype.toJSON = function() {
                if (!Yb) {
                    Yb = {};
                    for (var a = 0; 65 > a; a++) Yb[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a)
                }
                for (var a = Yb, b = [], e = 0; e < this.length; e += 3) {
                    var f = this[e],
                        h = e + 1 < this.length,
                        k = h ? this[e + 1] : 0,
                        n = e + 2 < this.length,
                        q = n ? this[e + 2] : 0,
                        v = f >> 2,
                        f = (f & 3) << 4 | k >> 4,
                        k = (k & 15) << 2 | q >> 6,
                        q = q & 63;
                    n || (q = 64, h || (k = 64));
                    b.push(a[v], a[f], a[k], a[q])
                }
                return b.join("")
            };
            try {
                var b = lc.call(null, _.D(this),
                    mc)
            } finally {
                window.Uint8Array.prototype.toJSON = a
            }
            return b
        } : lc ? function() {
            return lc.call(null, _.D(this), mc)
        } : function() {
            return _.cc(_.D(this), mc)
        };
        var mc = function(a, b) {
            if (_.Aa(b)) {
                if ((0, window.isNaN)(b)) return "NaN";
                if (window.Infinity === b) return "Infinity";
                if (-window.Infinity === b) return "-Infinity"
            }
            return b
        };
        _.y.prototype.toString = function() {
            kc(this);
            return this.g.toString()
        };
        oc = function(a, b) {
            a = a || {};
            b = b || {};
            var c = {},
                d;
            for (d in a) c[d] = 0;
            for (d in b) c[d] = 0;
            for (d in c)
                if (!_.nc(a[d], b[d])) return !1;
            return !0
        };
        _.nc = function(a, b) {
            if (a == b) return !0;
            if (!_.ya(a) || !_.ya(b) || a.constructor != b.constructor) return !1;
            if (_.gc && a.constructor === window.Uint8Array) {
                if (a.length != b.length) return !1;
                for (var c = 0; c < a.length; c++)
                    if (a[c] != b[c]) return !1;
                return !0
            }
            if (a.constructor === Array) {
                for (var d = void 0, e = void 0, f = Math.max(a.length, b.length), c = 0; c < f; c++) {
                    var h = a[c],
                        k = b[c];
                    h && h.constructor == Object && (d = h, h = void 0);
                    k && k.constructor == Object && (e = k, k = void 0);
                    if (!_.nc(h, k)) return !1
                }
                return d || e ? (d = d || {}, e = e || {}, oc(d, e)) : !0
            }
            if (a.constructor === Object) return oc(a, b);
            throw Error("e");
        };
        _.F = function() {
            this.I = this.I;
            this.C = this.C
        };
        _.F.prototype.I = !1;
        _.F.prototype.Z = function() {
            this.I || (this.I = !0, this.w())
        };
        _.I = function(a, b) {
            _.G(a, _.xa(_.H, b))
        };
        _.G = function(a, b, c) {
            a.I ? _.m(c) ? b.call(c) : b() : (a.C || (a.C = []), a.C.push(_.m(c) ? (0, _.r)(b, c) : b))
        };
        _.F.prototype.w = function() {
            if (this.C)
                for (; this.C.length;) this.C.shift()()
        };
        _.H = function(a) {
            a && "function" == typeof a.Z && a.Z()
        };
        var pc = !_.x || 9 <= Number(Qb);
        !_.Cb && !_.x || _.x && 9 <= Number(Qb) || _.Cb && _.Pb("1.9.1");
        _.x && _.Pb("9");
        _.qc = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Arab|Hebr|Thaa|Nkoo|Tfng))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
        _.sc = function() {
            this.a = "";
            this.g = _.rc;
            this.b = null
        };
        _.sc.prototype.$a = !0;
        _.sc.prototype.La = function() {
            return this.b
        };
        _.sc.prototype.ab = !0;
        _.sc.prototype.Za = function() {
            return this.a
        };
        _.rc = {};
        _.tc = function(a, b) {
            var c = new _.sc;
            c.a = a;
            c.b = b;
            return c
        };
        _.tc("<!DOCTYPE html>", 0);
        _.tc("", 0);
        _.uc = _.tc("<br>", 0);
        var Ac, Dc, Cc;
        _.xc = function(a) {
            return a ? new _.vc(_.wc(a)) : Ga || (Ga = new _.vc)
        };
        _.zc = function(a, b) {
            var c = b || window.document,
                d = null;
            c.getElementsByClassName ? d = c.getElementsByClassName(a)[0] : c.querySelectorAll && c.querySelector ? d = c.querySelector("." + a) : d = _.yc(window.document, "*", a, b)[0];
            return d || null
        };
        _.yc = function(a, b, c, d) {
            a = d || a;
            b = b && "*" != b ? String(b).toUpperCase() : "";
            if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
            if (c && a.getElementsByClassName) {
                a = a.getElementsByClassName(c);
                if (b) {
                    d = {};
                    for (var e = 0, f = 0, h; h = a[f]; f++) b == h.nodeName && (d[e++] = h);
                    d.length = e;
                    return d
                }
                return a
            }
            a = a.getElementsByTagName(b || "*");
            if (c) {
                d = {};
                for (f = e = 0; h = a[f]; f++) b = h.className, "function" == typeof b.split && _.eb(b.split(/\s+/), c) && (d[e++] = h);
                d.length = e;
                return d
            }
            return a
        };
        _.Bc = function(a, b) {
            _.mb(b, function(b, d) {
                "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Ac.hasOwnProperty(d) ? a.setAttribute(Ac[d], b) : _.Ha(d, "aria-") || _.Ha(d, "data-") ? a.setAttribute(d, b) : a[d] = b
            })
        };
        Ac = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            nonce: "nonce",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        };
        Dc = function(a, b, c) {
            function d(c) {
                c && b.appendChild(_.t(c) ? a.createTextNode(c) : c)
            }
            for (var e = 2; e < c.length; e++) {
                var f = c[e];
                !_.Ba(f) || _.ya(f) && 0 < f.nodeType ? d(f) : (0, _.u)(Cc(f) ? _.ib(f) : f, d)
            }
        };
        _.Ec = function(a) {
            for (var b; b = a.firstChild;) a.removeChild(b)
        };
        _.wc = function(a) {
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        };
        Cc = function(a) {
            if (a && "number" == typeof a.length) {
                if (_.ya(a)) return "function" == typeof a.item || "string" == typeof a.item;
                if (_.za(a)) return "function" == typeof a.item
            }
            return !1
        };
        _.vc = function(a) {
            this.a = a || _.l.document || window.document
        };
        _.g = _.vc.prototype;
        _.g.ya = _.xc;
        _.g.B = function(a) {
            return _.t(a) ? this.a.getElementById(a) : a
        };
        _.g.ma = function(a, b, c) {
            var d = this.a,
                e = arguments,
                f = String(e[0]),
                h = e[1];
            if (!pc && h && (h.name || h.type)) {
                f = ["<", f];
                h.name && f.push(' name="', _.Sa(h.name), '"');
                if (h.type) {
                    f.push(' type="', _.Sa(h.type), '"');
                    var k = {};
                    _.sb(k, h);
                    delete k.type;
                    h = k
                }
                f.push(">");
                f = f.join("")
            }
            f = d.createElement(f);
            h && (_.t(h) ? f.className = h : _.Ca(h) ? f.className = h.join(" ") : _.Bc(f, h));
            2 < e.length && Dc(d, f, e);
            return f
        };
        _.g.appendChild = function(a, b) {
            a.appendChild(b)
        };
        _.g.contains = function(a, b) {
            if (!a || !b) return !1;
            if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
            if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
            for (; b && a != b;) b = b.parentNode;
            return b == a
        };
        _.Fc = function(a) {
            return function() {
                return a
            }
        }(!1);
        var Gc = "StopIteration" in _.l ? _.l.StopIteration : {
                message: "StopIteration",
                stack: ""
            },
            Hc = function() {};
        Hc.prototype.next = function() {
            throw Gc;
        };
        Hc.prototype.ha = function() {
            return this
        };
        var Ic = function(a) {
                if (a instanceof Hc) return a;
                if ("function" == typeof a.ha) return a.ha(!1);
                if (_.Ba(a)) {
                    var b = 0,
                        c = new Hc;
                    c.next = function() {
                        for (;;) {
                            if (b >= a.length) throw Gc;
                            if (b in a) return a[b++];
                            b++
                        }
                    };
                    return c
                }
                throw Error("f");
            },
            Jc = function(a, b) {
                if (_.Ba(a)) try {
                    (0, _.u)(a, b, void 0)
                } catch (c) {
                    if (c !== Gc) throw c;
                } else {
                    a = Ic(a);
                    try {
                        for (;;) b.call(void 0, a.next(), void 0, a)
                    } catch (c) {
                        if (c !== Gc) throw c;
                    }
                }
            },
            Kc = function(a) {
                if (_.Ba(a)) return _.ib(a);
                a = Ic(a);
                var b = [];
                Jc(a, function(a) {
                    b.push(a)
                });
                return b
            };
        _.J = function(a, b) {
            this.b = {};
            this.a = [];
            this.c = this.g = 0;
            var c = arguments.length;
            if (1 < c) {
                if (c % 2) throw Error("b");
                for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
            } else if (a) {
                a instanceof _.J ? (c = a.V(), d = a.S()) : (c = pb(a), d = ob(a));
                for (var e = 0; e < c.length; e++) this.set(c[e], d[e])
            }
        };
        _.J.prototype.S = function() {
            Lc(this);
            for (var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);
            return a
        };
        _.J.prototype.V = function() {
            Lc(this);
            return this.a.concat()
        };
        _.Nc = function(a, b) {
            return Mc(a.b, b)
        };
        _.J.prototype.clear = function() {
            this.b = {};
            this.c = this.g = this.a.length = 0
        };
        _.J.prototype.remove = function(a) {
            return Mc(this.b, a) ? (delete this.b[a], this.g--, this.c++, this.a.length > 2 * this.g && Lc(this), !0) : !1
        };
        var Lc = function(a) {
            if (a.g != a.a.length) {
                for (var b = 0, c = 0; b < a.a.length;) {
                    var d = a.a[b];
                    Mc(a.b, d) && (a.a[c++] = d);
                    b++
                }
                a.a.length = c
            }
            if (a.g != a.a.length) {
                for (var e = {}, c = b = 0; b < a.a.length;) d = a.a[b], Mc(e, d) || (a.a[c++] = d, e[d] = 1), b++;
                a.a.length = c
            }
        };
        _.J.prototype.get = function(a, b) {
            return Mc(this.b, a) ? this.b[a] : b
        };
        _.J.prototype.set = function(a, b) {
            Mc(this.b, a) || (this.g++, this.a.push(a), this.c++);
            this.b[a] = b
        };
        _.J.prototype.forEach = function(a, b) {
            for (var c = this.V(), d = 0; d < c.length; d++) {
                var e = c[d],
                    f = this.get(e);
                a.call(b, f, e, this)
            }
        };
        _.J.prototype.ha = function(a) {
            Lc(this);
            var b = 0,
                c = this.c,
                d = this,
                e = new Hc;
            e.next = function() {
                if (c != d.c) throw Error("g");
                if (b >= d.a.length) throw Gc;
                var e = d.a[b++];
                return a ? e : d.b[e]
            };
            return e
        };
        var Mc = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        };
        var Pc;
        _.Oc = function(a) {
            if (a.S && "function" == typeof a.S) return a.S();
            if (_.t(a)) return a.split("");
            if (_.Ba(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return ob(a)
        };
        Pc = function(a, b) {
            if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
            else if (_.Ba(a) || _.t(a))(0, _.u)(a, b, void 0);
            else {
                var c;
                if (a.V && "function" == typeof a.V) c = a.V();
                else if (a.S && "function" == typeof a.S) c = void 0;
                else if (_.Ba(a) || _.t(a)) {
                    c = [];
                    for (var d = a.length, e = 0; e < d; e++) c.push(e)
                } else c = pb(a);
                for (var d = _.Oc(a), e = d.length, f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
            }
        };
        var Qc = function(a, b, c) {
            this.c = c;
            this.g = a;
            this.h = b;
            this.b = 0;
            this.a = null
        };
        Qc.prototype.get = function() {
            var a;
            0 < this.b ? (this.b--, a = this.a, this.a = a.next, a.next = null) : a = this.g();
            return a
        };
        var Rc = function(a, b) {
            a.h(b);
            a.b < a.c && (a.b++, b.next = a.a, a.a = b)
        };
        var Vc;
        _.Sc = [];
        _.Tc = [];
        _.Uc = !1;
        Vc = function(a) {
            _.Sc[_.Sc.length] = a;
            if (_.Uc)
                for (var b = 0; b < _.Tc.length; b++) a((0, _.r)(_.Tc[b].b, _.Tc[b]))
        };
        var Wc, Yc, Zc, Xc;
        Wc = function(a) {
            _.l.setTimeout(function() {
                throw a;
            }, 0)
        };
        _.$c = function(a, b) {
            var c = a;
            b && (c = (0, _.r)(a, b));
            c = Xc(c);
            !_.za(_.l.setImmediate) || _.l.Window && _.l.Window.prototype && !_.w("Edge") && _.l.Window.prototype.setImmediate == _.l.setImmediate ? (Yc || (Yc = Zc()), Yc(c)) : _.l.setImmediate(c)
        };
        Zc = function() {
            var a = _.l.MessageChannel;
            "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !_.w("Presto") && (a = function() {
                var a = window.document.createElement("IFRAME");
                a.style.display = "none";
                a.src = "";
                window.document.documentElement.appendChild(a);
                var b = a.contentWindow,
                    a = b.document;
                a.open();
                a.write("");
                a.close();
                var c = "callImmediate" + Math.random(),
                    d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host,
                    a = (0, _.r)(function(a) {
                        if (("*" ==
                                d || a.origin == d) && a.data == c) this.port1.onmessage()
                    }, this);
                b.addEventListener("message", a, !1);
                this.port1 = {};
                this.port2 = {
                    postMessage: function() {
                        b.postMessage(c, d)
                    }
                }
            });
            if ("undefined" !== typeof a && !_.w("Trident") && !_.w("MSIE")) {
                var b = new a,
                    c = {},
                    d = c;
                b.port1.onmessage = function() {
                    if (_.m(c.next)) {
                        c = c.next;
                        var a = c.kb;
                        c.kb = null;
                        a()
                    }
                };
                return function(a) {
                    d.next = {
                        kb: a
                    };
                    d = d.next;
                    b.port2.postMessage(0)
                }
            }
            return "undefined" !== typeof window.document && "onreadystatechange" in window.document.createElement("SCRIPT") ? function(a) {
                var b =
                    window.document.createElement("SCRIPT");
                b.onreadystatechange = function() {
                    b.onreadystatechange = null;
                    b.parentNode.removeChild(b);
                    b = null;
                    a();
                    a = null
                };
                window.document.documentElement.appendChild(b)
            } : function(a) {
                _.l.setTimeout(a, 0)
            }
        };
        Xc = function(a) {
            return a
        };
        Vc(function(a) {
            Xc = a
        });
        var ad = function() {
                this.b = this.a = null
            },
            cd = new Qc(function() {
                return new bd
            }, function(a) {
                a.reset()
            }, 100);
        ad.prototype.remove = function() {
            var a = null;
            this.a && (a = this.a, this.a = this.a.next, this.a || (this.b = null), a.next = null);
            return a
        };
        var bd = function() {
            this.next = this.b = this.a = null
        };
        bd.prototype.set = function(a, b) {
            this.a = a;
            this.b = b;
            this.next = null
        };
        bd.prototype.reset = function() {
            this.next = this.b = this.a = null
        };
        var dd, ed, fd, gd, id;
        _.hd = function(a, b) {
            dd || ed();
            fd || (dd(), fd = !0);
            var c = gd,
                d = cd.get();
            d.set(a, b);
            c.b ? c.b.next = d : c.a = d;
            c.b = d
        };
        ed = function() {
            var a = _.l.Promise;
            if (-1 != String(a).indexOf("[native code]")) {
                var b = a.resolve(void 0);
                dd = function() {
                    b.then(id)
                }
            } else dd = function() {
                _.$c(id)
            }
        };
        fd = !1;
        gd = new ad;
        id = function() {
            for (var a; a = gd.remove();) {
                try {
                    a.a.call(a.b)
                } catch (b) {
                    Wc(b)
                }
                Rc(cd, a)
            }
            fd = !1
        };
        var jd = function(a) {
                a.prototype.then = a.prototype.then;
                a.prototype.$goog_Thenable = !0
            },
            kd = function(a) {
                if (!a) return !1;
                try {
                    return !!a.$goog_Thenable
                } catch (b) {
                    return !1
                }
            };
        var nd, od, pd, vd, zd, ld, Cd, yd, wd;
        _.md = function(a, b) {
            this.a = 0;
            this.C = void 0;
            this.c = this.b = this.g = null;
            this.h = this.j = !1;
            if (a != _.Da) try {
                var c = this;
                a.call(b, function(a) {
                    ld(c, 2, a)
                }, function(a) {
                    ld(c, 3, a)
                })
            } catch (d) {
                ld(this, 3, d)
            }
        };
        nd = function() {
            this.next = this.context = this.b = this.c = this.a = null;
            this.g = !1
        };
        nd.prototype.reset = function() {
            this.context = this.b = this.c = this.a = null;
            this.g = !1
        };
        od = new Qc(function() {
            return new nd
        }, function(a) {
            a.reset()
        }, 100);
        pd = function(a, b, c) {
            var d = od.get();
            d.c = a;
            d.b = b;
            d.context = c;
            return d
        };
        _.qd = function(a) {
            if (a instanceof _.md) return a;
            var b = new _.md(_.Da);
            ld(b, 2, a);
            return b
        };
        _.sd = function() {
            var a, b = new _.md(function(b) {
                a = b
            });
            return new rd(b, a)
        };
        _.md.prototype.then = function(a, b, c) {
            return _.td(this, _.za(a) ? a : null, _.za(b) ? b : null, c)
        };
        jd(_.md);
        _.md.prototype.cancel = function(a) {
            0 == this.a && _.hd(function() {
                var b = new ud(a);
                vd(this, b)
            }, this)
        };
        vd = function(a, b) {
            if (0 == a.a)
                if (a.g) {
                    var c = a.g;
                    if (c.b) {
                        for (var d = 0, e = null, f = null, h = c.b; h && (h.g || (d++, h.a == a && (e = h), !(e && 1 < d))); h = h.next) e || (f = h);
                        e && (0 == c.a && 1 == d ? vd(c, b) : (f ? (d = f, d.next == c.c && (c.c = d), d.next = d.next.next) : wd(c), xd(c, e, 3, b)))
                    }
                    a.g = null
                } else ld(a, 3, b)
        };
        zd = function(a, b) {
            a.b || 2 != a.a && 3 != a.a || yd(a);
            a.c ? a.c.next = b : a.b = b;
            a.c = b
        };
        _.td = function(a, b, c, d) {
            var e = pd(null, null, null);
            e.a = new _.md(function(a, h) {
                e.c = b ? function(c) {
                    try {
                        var e = b.call(d, c);
                        a(e)
                    } catch (q) {
                        h(q)
                    }
                } : a;
                e.b = c ? function(b) {
                    try {
                        var e = c.call(d, b);
                        !_.m(e) && b instanceof ud ? h(b) : a(e)
                    } catch (q) {
                        h(q)
                    }
                } : h
            });
            e.a.g = a;
            zd(a, e);
            return e.a
        };
        _.md.prototype.m = function(a) {
            this.a = 0;
            ld(this, 2, a)
        };
        _.md.prototype.o = function(a) {
            this.a = 0;
            ld(this, 3, a)
        };
        ld = function(a, b, c) {
            0 == a.a && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.a = 1, _.Ad(c, a.m, a.o, a) || (a.C = c, a.a = b, a.g = null, yd(a), 3 != b || c instanceof ud || Bd(a, c)))
        };
        _.Ad = function(a, b, c, d) {
            if (a instanceof _.md) return zd(a, pd(b || _.Da, c || null, d)), !0;
            if (kd(a)) return a.then(b, c, d), !0;
            if (_.ya(a)) try {
                var e = a.then;
                if (_.za(e)) return Cd(a, e, b, c, d), !0
            } catch (f) {
                return c.call(d, f), !0
            }
            return !1
        };
        Cd = function(a, b, c, d, e) {
            var f = !1,
                h = function(a) {
                    f || (f = !0, c.call(e, a))
                },
                k = function(a) {
                    f || (f = !0, d.call(e, a))
                };
            try {
                b.call(a, h, k)
            } catch (n) {
                k(n)
            }
        };
        yd = function(a) {
            a.j || (a.j = !0, _.hd(a.l, a))
        };
        wd = function(a) {
            var b = null;
            a.b && (b = a.b, a.b = b.next, b.next = null);
            a.b || (a.c = null);
            return b
        };
        _.md.prototype.l = function() {
            for (var a; a = wd(this);) xd(this, a, this.a, this.C);
            this.j = !1
        };
        var xd = function(a, b, c, d) {
                if (3 == c && b.b && !b.g)
                    for (; a && a.h; a = a.g) a.h = !1;
                if (b.a) b.a.g = null, Dd(b, c, d);
                else try {
                    b.g ? b.c.call(b.context) : Dd(b, c, d)
                } catch (e) {
                    Ed.call(null, e)
                }
                Rc(od, b)
            },
            Dd = function(a, b, c) {
                2 == b ? a.c.call(a.context, c) : a.b && a.b.call(a.context, c)
            },
            Bd = function(a, b) {
                a.h = !0;
                _.hd(function() {
                    a.h && Ed.call(null, b)
                })
            },
            Ed = Wc,
            ud = function(a) {
                _.Fa.call(this, a)
            };
        _.p(ud, _.Fa);
        ud.prototype.name = "cancel";
        var rd = function(a, b) {
            this.a = a;
            this.b = b
        };
        /*
         Portions of this code are from MochiKit, received by
         The Closure Authors under the MIT license. All other code is Copyright
         2005-2009 The Closure Authors. All Rights Reserved.
        */
        _.Fd = function(a, b) {
            this.l = [];
            this.H = a;
            this.v = b || null;
            this.j = this.g = !1;
            this.c = void 0;
            this.J = this.K = this.o = !1;
            this.m = 0;
            this.a = null;
            this.C = 0
        };
        _.Fd.prototype.cancel = function(a) {
            if (this.g) this.c instanceof _.Fd && this.c.cancel();
            else {
                if (this.a) {
                    var b = this.a;
                    delete this.a;
                    a ? b.cancel(a) : (b.C--, 0 >= b.C && b.cancel())
                }
                this.H ? this.H.call(this.v, this) : this.J = !0;
                this.g || this.D(new _.Gd)
            }
        };
        _.Fd.prototype.G = function(a, b) {
            this.o = !1;
            Hd(this, a, b)
        };
        var Hd = function(a, b, c) {
                a.g = !0;
                a.c = c;
                a.j = !b;
                Id(a)
            },
            Kd = function(a) {
                if (a.g) {
                    if (!a.J) throw new Jd;
                    a.J = !1
                }
            };
        _.Fd.prototype.b = function(a) {
            Kd(this);
            Hd(this, !0, a)
        };
        _.Fd.prototype.D = function(a) {
            Kd(this);
            Hd(this, !1, a)
        };
        _.Md = function(a, b, c) {
            _.Ld(a, b, null, c)
        };
        _.Ld = function(a, b, c, d) {
            a.l.push([b, c, d]);
            a.g && Id(a)
        };
        _.Fd.prototype.then = function(a, b, c) {
            var d, e, f = new _.md(function(a, b) {
                d = a;
                e = b
            });
            _.Ld(this, d, function(a) {
                a instanceof _.Gd ? f.cancel() : e(a)
            });
            return f.then(a, b, c)
        };
        jd(_.Fd);
        _.Nd = function(a, b) {
            b instanceof _.Fd ? _.Md(a, (0, _.r)(b.h, b)) : _.Md(a, function() {
                return b
            })
        };
        _.Fd.prototype.h = function(a) {
            var b = new _.Fd;
            _.Ld(this, b.b, b.D, b);
            a && (b.a = this, this.C++);
            return b
        };
        var Od = function(a) {
                return (0, _.bb)(a.l, function(a) {
                    return _.za(a[1])
                })
            },
            Id = function(a) {
                if (a.m && a.g && Od(a)) {
                    var b = a.m,
                        c = Pd[b];
                    c && (_.l.clearTimeout(c.a), delete Pd[b]);
                    a.m = 0
                }
                a.a && (a.a.C--, delete a.a);
                for (var b = a.c, d = c = !1; a.l.length && !a.o;) {
                    var e = a.l.shift(),
                        f = e[0],
                        h = e[1],
                        e = e[2];
                    if (f = a.j ? h : f) try {
                        var k = f.call(e || a.v, b);
                        _.m(k) && (a.j = a.j && (k == b || k instanceof Error), a.c = b = k);
                        if (kd(b) || "function" === typeof _.l.Promise && b instanceof _.l.Promise) d = !0, a.o = !0
                    } catch (n) {
                        b = n, a.j = !0, Od(a) || (c = !0)
                    }
                }
                a.c = b;
                d && (k = (0, _.r)(a.G,
                    a, !0), d = (0, _.r)(a.G, a, !1), b instanceof _.Fd ? (_.Ld(b, k, d), b.K = !0) : b.then(k, d));
                c && (b = new Qd(b), Pd[b.a] = b, a.m = b.a)
            },
            Jd = function() {
                _.Fa.call(this)
            };
        _.p(Jd, _.Fa);
        Jd.prototype.message = "Deferred has already fired";
        Jd.prototype.name = "AlreadyCalledError";
        _.Gd = function() {
            _.Fa.call(this)
        };
        _.p(_.Gd, _.Fa);
        _.Gd.prototype.message = "Deferred was canceled";
        _.Gd.prototype.name = "CanceledError";
        var Qd = function(a) {
            this.a = _.l.setTimeout((0, _.r)(this.g, this), 0);
            this.b = a
        };
        Qd.prototype.g = function() {
            delete Pd[this.a];
            throw this.b;
        };
        var Pd = {};
        var Rd = !_.x || 9 <= Number(Qb),
            Sd = _.x && !_.Pb("9");
        !_.Db || _.Pb("528");
        _.Cb && _.Pb("1.9b") || _.x && _.Pb("8") || Ab && _.Pb("9.5") || _.Db && _.Pb("528");
        _.Cb && !_.Pb("8") || _.x && _.Pb("9");
        _.K = function(a, b) {
            this.type = "undefined" != typeof _.Td && a instanceof _.Td ? String(a) : a;
            this.b = this.target = b;
            this.c = !1;
            this.pb = !0
        };
        _.K.prototype.l = function() {
            this.c = !0
        };
        _.K.prototype.g = function() {
            this.pb = !1
        };
        var Ud = function(a, b) {
            _.K.call(this, a ? a.type : "");
            this.b = this.target = null;
            this.keyCode = 0;
            this.C = this.m = this.h = this.j = !1;
            this.a = this.state = null;
            if (a) {
                this.type = a.type;
                this.target = a.target || a.srcElement;
                this.b = b;
                var c = a.relatedTarget;
                c && _.Cb && _.yb(c, "nodeName");
                this.keyCode = a.keyCode || 0;
                this.j = a.ctrlKey;
                this.h = a.altKey;
                this.m = a.shiftKey;
                this.C = a.metaKey;
                this.state = a.state;
                this.a = a;
                a.defaultPrevented && this.g()
            }
        };
        _.p(Ud, _.K);
        Ud.prototype.l = function() {
            Ud.A.l.call(this);
            this.a.stopPropagation ? this.a.stopPropagation() : this.a.cancelBubble = !0
        };
        Ud.prototype.g = function() {
            Ud.A.g.call(this);
            var a = this.a;
            if (a.preventDefault) a.preventDefault();
            else if (a.returnValue = !1, Sd) try {
                if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
            } catch (b) {}
        };
        var Vd = "closure_listenable_" + (1E6 * Math.random() | 0),
            Wd = function(a) {
                return !(!a || !a[Vd])
            },
            Xd = 0;
        var Yd = function(a, b, c, d, e) {
                this.listener = a;
                this.proxy = null;
                this.src = b;
                this.type = c;
                this.wa = !!d;
                this.Na = e;
                this.key = ++Xd;
                this.removed = this.Ja = !1
            },
            Zd = function(a) {
                a.removed = !0;
                a.listener = null;
                a.proxy = null;
                a.src = null;
                a.Na = null
            };
        var $d = function(a) {
                this.src = a;
                this.a = {};
                this.b = 0
            },
            be = function(a, b, c, d, e, f) {
                var h = b.toString();
                b = a.a[h];
                b || (b = a.a[h] = [], a.b++);
                var k = ae(b, c, e, f); - 1 < k ? (a = b[k], d || (a.Ja = !1)) : (a = new Yd(c, a.src, h, !!e, f), a.Ja = d, b.push(a));
                return a
            };
        $d.prototype.remove = function(a, b, c, d) {
            a = a.toString();
            if (!(a in this.a)) return !1;
            var e = this.a[a];
            b = ae(e, b, c, d);
            return -1 < b ? (Zd(e[b]), _.fb(e, b), 0 == e.length && (delete this.a[a], this.b--), !0) : !1
        };
        var ce = function(a, b) {
            var c = b.type;
            c in a.a && _.gb(a.a[c], b) && (Zd(b), 0 == a.a[c].length && (delete a.a[c], a.b--))
        };
        $d.prototype.removeAll = function(a) {
            a = a && a.toString();
            var b = 0,
                c;
            for (c in this.a)
                if (!a || c == a) {
                    for (var d = this.a[c], e = 0; e < d.length; e++) ++b, Zd(d[e]);
                    delete this.a[c];
                    this.b--
                }
            return b
        };
        var de = function(a, b, c, d, e) {
                a = a.a[b.toString()];
                b = -1;
                a && (b = ae(a, c, d, e));
                return -1 < b ? a[b] : null
            },
            ee = function(a) {
                var b = _.m(void 0) ? "undefined" : void 0,
                    c = _.m(b),
                    d = c ? b.toString() : "",
                    e = _.m(void 0);
                return nb(a.a, function(a) {
                    for (var b = 0; b < a.length; ++b)
                        if (!(c && a[b].type != d || e && void 0 != a[b].wa)) return !0;
                    return !1
                })
            },
            ae = function(a, b, c, d) {
                for (var e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (!f.removed && f.listener == b && f.wa == !!c && f.Na == d) return e
                }
                return -1
            };
        var fe, ge, he, ke, me, re, ne, te, se, oe, le, ue, je;
        fe = "closure_lm_" + (1E6 * Math.random() | 0);
        ge = {};
        he = 0;
        _.ie = function(a, b, c, d, e) {
            if (_.Ca(b)) {
                for (var f = 0; f < b.length; f++) _.ie(a, b[f], c, d, e);
                return null
            }
            c = je(c);
            return Wd(a) ? a.listen(b, c, d, e) : ke(a, b, c, !1, d, e)
        };
        ke = function(a, b, c, d, e, f) {
            if (!b) throw Error("h");
            var h = !!e,
                k = le(a);
            k || (a[fe] = k = new $d(a));
            c = be(k, b, c, d, e, f);
            if (c.proxy) return c;
            d = me();
            c.proxy = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) a.addEventListener(b.toString(), d, h);
            else if (a.attachEvent) a.attachEvent(ne(b.toString()), d);
            else throw Error("i");
            he++;
            return c
        };
        me = function() {
            var a = oe,
                b = Rd ? function(c) {
                    return a.call(b.src, b.listener, c)
                } : function(c) {
                    c = a.call(b.src, b.listener, c);
                    if (!c) return c
                };
            return b
        };
        _.pe = function(a, b, c, d, e) {
            if (_.Ca(b)) {
                for (var f = 0; f < b.length; f++) _.pe(a, b[f], c, d, e);
                return null
            }
            c = je(c);
            return Wd(a) ? a.Ma(b, c, d, e) : ke(a, b, c, !0, d, e)
        };
        _.qe = function(a, b, c, d, e) {
            if (_.Ca(b))
                for (var f = 0; f < b.length; f++) _.qe(a, b[f], c, d, e);
            else c = je(c), Wd(a) ? a.Qa(b, c, d, e) : a && (a = le(a)) && (b = de(a, b, c, !!d, e)) && re(b)
        };
        re = function(a) {
            if (!_.Aa(a) && a && !a.removed) {
                var b = a.src;
                if (Wd(b)) ce(b.g, a);
                else {
                    var c = a.type,
                        d = a.proxy;
                    b.removeEventListener ? b.removeEventListener(c, d, a.wa) : b.detachEvent && b.detachEvent(ne(c), d);
                    he--;
                    (c = le(b)) ? (ce(c, a), 0 == c.b && (c.src = null, b[fe] = null)) : Zd(a)
                }
            }
        };
        ne = function(a) {
            return a in ge ? ge[a] : ge[a] = "on" + a
        };
        te = function(a, b, c, d) {
            var e = !0;
            if (a = le(a))
                if (b = a.a[b.toString()])
                    for (b = b.concat(), a = 0; a < b.length; a++) {
                        var f = b[a];
                        f && f.wa == c && !f.removed && (f = se(f, d), e = e && !1 !== f)
                    }
                return e
        };
        se = function(a, b) {
            var c = a.listener,
                d = a.Na || a.src;
            a.Ja && re(a);
            return c.call(d, b)
        };
        oe = function(a, b) {
            if (a.removed) return !0;
            if (!Rd) {
                var c = b || _.Ea("window.event"),
                    d = new Ud(c, this),
                    e = !0;
                if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                    a: {
                        var f = !1;
                        if (0 == c.keyCode) try {
                            c.keyCode = -1;
                            break a
                        } catch (n) {
                            f = !0
                        }
                        if (f || void 0 == c.returnValue) c.returnValue = !0
                    }
                    c = [];
                    for (f = d.b; f; f = f.parentNode) c.push(f);
                    for (var f = a.type, h = c.length - 1; !d.c && 0 <= h; h--) {
                        d.b = c[h];
                        var k = te(c[h], f, !0, d),
                            e = e && k
                    }
                    for (h = 0; !d.c && h < c.length; h++) d.b = c[h],
                    k = te(c[h], f, !1, d),
                    e = e && k
                }
                return e
            }
            return se(a, new Ud(b, this))
        };
        le = function(a) {
            a = a[fe];
            return a instanceof $d ? a : null
        };
        ue = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
        je = function(a) {
            if (_.za(a)) return a;
            a[ue] || (a[ue] = function(b) {
                return a.handleEvent(b)
            });
            return a[ue]
        };
        Vc(function(a) {
            oe = a(oe)
        });
        _.L = function() {
            _.F.call(this);
            this.g = new $d(this);
            this.fa = this;
            this.J = null
        };
        _.p(_.L, _.F);
        _.L.prototype[Vd] = !0;
        _.L.prototype.G = function(a) {
            this.J = a
        };
        _.L.prototype.removeEventListener = function(a, b, c, d) {
            _.qe(this, a, b, c, d)
        };
        _.M = function(a, b) {
            var c, d = a.J;
            if (d)
                for (c = []; d; d = d.J) c.push(d);
            var d = a.fa,
                e = b,
                f = e.type || e;
            if (_.t(e)) e = new _.K(e, d);
            else if (e instanceof _.K) e.target = e.target || d;
            else {
                var h = e,
                    e = new _.K(f, d);
                _.sb(e, h)
            }
            var h = !0,
                k;
            if (c)
                for (var n = c.length - 1; !e.c && 0 <= n; n--) k = e.b = c[n], h = k.oa(f, !0, e) && h;
            e.c || (k = e.b = d, h = k.oa(f, !0, e) && h, e.c || (h = k.oa(f, !1, e) && h));
            if (c)
                for (n = 0; !e.c && n < c.length; n++) k = e.b = c[n], h = k.oa(f, !1, e) && h;
            return h
        };
        _.g = _.L.prototype;
        _.g.w = function() {
            _.L.A.w.call(this);
            this.g && this.g.removeAll(void 0);
            this.J = null
        };
        _.g.listen = function(a, b, c, d) {
            return be(this.g, String(a), b, !1, c, d)
        };
        _.g.Ma = function(a, b, c, d) {
            return be(this.g, String(a), b, !0, c, d)
        };
        _.g.Qa = function(a, b, c, d) {
            return this.g.remove(String(a), b, c, d)
        };
        _.g.oa = function(a, b, c) {
            a = this.g.a[String(a)];
            if (!a) return !0;
            a = a.concat();
            for (var d = !0, e = 0; e < a.length; ++e) {
                var f = a[e];
                if (f && !f.removed && f.wa == b) {
                    var h = f.listener,
                        k = f.Na || f.src;
                    f.Ja && ce(this.g, f);
                    d = !1 !== h.call(k, c) && d
                }
            }
            return d && 0 != c.pb
        };
        var ve = function() {};
        ve.prototype.a = null;
        var xe = function(a) {
            var b;
            (b = a.a) || (b = {}, we(a) && (b[0] = !0, b[1] = !0), b = a.a = b);
            return b
        };
        var ye, ze = function() {};
        _.p(ze, ve);
        var Ae = function(a) {
                return (a = we(a)) ? new window.ActiveXObject(a) : new window.XMLHttpRequest
            },
            we = function(a) {
                if (!a.b && "undefined" == typeof window.XMLHttpRequest && "undefined" != typeof window.ActiveXObject) {
                    for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                        var d = b[c];
                        try {
                            return new window.ActiveXObject(d), a.b = d
                        } catch (e) {}
                    }
                    throw Error("j");
                }
                return a.b
            };
        ye = new ze;
        _.Be = function(a, b) {
            _.L.call(this);
            this.b = a || 1;
            this.a = b || _.l;
            this.c = (0, _.r)(this.rc, this);
            this.h = (0, _.sa)()
        };
        _.p(_.Be, _.L);
        _.g = _.Be.prototype;
        _.g.ra = !1;
        _.g.W = null;
        _.g.setInterval = function(a) {
            this.b = a;
            this.W && this.ra ? (this.stop(), this.start()) : this.W && this.stop()
        };
        _.g.rc = function() {
            if (this.ra) {
                var a = (0, _.sa)() - this.h;
                0 < a && a < .8 * this.b ? this.W = this.a.setTimeout(this.c, this.b - a) : (this.W && (this.a.clearTimeout(this.W), this.W = null), _.M(this, "tick"), this.ra && (this.W = this.a.setTimeout(this.c, this.b), this.h = (0, _.sa)()))
            }
        };
        _.g.start = function() {
            this.ra = !0;
            this.W || (this.W = this.a.setTimeout(this.c, this.b), this.h = (0, _.sa)())
        };
        _.g.stop = function() {
            this.ra = !1;
            this.W && (this.a.clearTimeout(this.W), this.W = null)
        };
        _.g.w = function() {
            _.Be.A.w.call(this);
            this.stop();
            delete this.a
        };
        _.Ce = function(a, b, c) {
            if (_.za(a)) c && (a = (0, _.r)(a, c));
            else if (a && "function" == typeof a.handleEvent) a = (0, _.r)(a.handleEvent, a);
            else throw Error("k");
            return 2147483647 < Number(b) ? -1 : _.l.setTimeout(a, b || 0)
        };
        _.De = function(a) {
            _.l.clearTimeout(a)
        };
        var Ee = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
            Fe = function(a, b) {
                if (a)
                    for (var c = a.split("&"), d = 0; d < c.length; d++) {
                        var e = c[d].indexOf("="),
                            f, h = null;
                        0 <= e ? (f = c[d].substring(0, e), h = c[d].substring(e + 1)) : f = c[d];
                        b(f, h ? (0, window.decodeURIComponent)(h.replace(/\+/g, " ")) : "")
                    }
            };
        var Ge = function(a) {
                _.L.call(this);
                this.headers = new _.J;
                this.D = a || null;
                this.b = !1;
                this.v = this.a = null;
                this.M = "";
                this.j = 0;
                this.h = "";
                this.c = this.K = this.m = this.H = !1;
                this.l = 0;
                this.o = null;
                this.$ = "";
                this.R = this.T = !1
            },
            He, Ie, Re, Qe, Ne, Se, Te;
        _.p(Ge, _.L);
        He = /^https?$/i;
        Ie = ["POST", "PUT"];
        _.Je = [];
        _.Ke = function(a, b, c, d, e, f, h) {
            var k = new Ge;
            _.Je.push(k);
            b && k.listen("complete", b);
            k.Ma("ready", k.ga);
            f && (k.l = Math.max(0, f));
            h && (k.T = h);
            k.send(a, c, d, e)
        };
        Ge.prototype.ga = function() {
            this.Z();
            _.gb(_.Je, this)
        };
        Ge.prototype.send = function(a, b, c, d) {
            if (this.a) throw Error("l`" + this.M + "`" + a);
            b = b ? b.toUpperCase() : "GET";
            this.M = a;
            this.h = "";
            this.j = 0;
            this.H = !1;
            this.b = !0;
            this.a = this.D ? Ae(this.D) : Ae(ye);
            this.v = this.D ? xe(this.D) : xe(ye);
            this.a.onreadystatechange = (0, _.r)(this.Y, this);
            try {
                this.K = !0, this.a.open(b, String(a), !0), this.K = !1
            } catch (f) {
                Le(this, f);
                return
            }
            a = c || "";
            var e = new _.J(this.headers);
            d && Pc(d, function(a, b) {
                e.set(b, a)
            });
            d = _.db(e.V(), Me);
            c = _.l.FormData && a instanceof _.l.FormData;
            !_.eb(Ie, b) || d || c || e.set("Content-Type",
                "application/x-www-form-urlencoded;charset=utf-8");
            e.forEach(function(a, b) {
                this.a.setRequestHeader(b, a)
            }, this);
            this.$ && (this.a.responseType = this.$);
            "withCredentials" in this.a && this.a.withCredentials !== this.T && (this.a.withCredentials = this.T);
            try {
                Ne(this), 0 < this.l && ((this.R = Oe(this.a)) ? (this.a.timeout = this.l, this.a.ontimeout = (0, _.r)(this.X, this)) : this.o = _.Ce(this.X, this.l, this)), this.m = !0, this.a.send(a), this.m = !1
            } catch (f) {
                Le(this, f)
            }
        };
        var Oe = function(a) {
                return _.x && _.Pb(9) && _.Aa(a.timeout) && _.m(a.ontimeout)
            },
            Me = function(a) {
                return "content-type" == a.toLowerCase()
            };
        Ge.prototype.X = function() {
            "undefined" != typeof _.qa && this.a && (this.h = "Timed out after " + this.l + "ms, aborting", this.j = 8, _.M(this, "timeout"), this.abort(8))
        };
        var Le = function(a, b) {
                a.b = !1;
                a.a && (a.c = !0, a.a.abort(), a.c = !1);
                a.h = b;
                a.j = 5;
                Pe(a);
                Qe(a)
            },
            Pe = function(a) {
                a.H || (a.H = !0, _.M(a, "complete"), _.M(a, "error"))
            };
        Ge.prototype.abort = function(a) {
            this.a && this.b && (this.b = !1, this.c = !0, this.a.abort(), this.c = !1, this.j = a || 7, _.M(this, "complete"), _.M(this, "abort"), Qe(this))
        };
        Ge.prototype.w = function() {
            this.a && (this.b && (this.b = !1, this.c = !0, this.a.abort(), this.c = !1), Qe(this, !0));
            Ge.A.w.call(this)
        };
        Ge.prototype.Y = function() {
            this.I || (this.K || this.m || this.c ? Re(this) : this.N())
        };
        Ge.prototype.N = function() {
            Re(this)
        };
        Re = function(a) {
            if (a.b && "undefined" != typeof _.qa && (!a.v[1] || 4 != Se(a) || 2 != Te(a)))
                if (a.m && 4 == Se(a)) _.Ce(a.Y, 0, a);
                else if (_.M(a, "readystatechange"), 4 == Se(a)) {
                a.b = !1;
                try {
                    if (_.Ue(a)) _.M(a, "complete"), _.M(a, "success");
                    else {
                        a.j = 6;
                        var b;
                        try {
                            b = 2 < Se(a) ? a.a.statusText : ""
                        } catch (c) {
                            b = ""
                        }
                        a.h = b + " [" + Te(a) + "]";
                        Pe(a)
                    }
                } finally {
                    Qe(a)
                }
            }
        };
        Qe = function(a, b) {
            if (a.a) {
                Ne(a);
                var c = a.a,
                    d = a.v[0] ? _.Da : null;
                a.a = null;
                a.v = null;
                b || _.M(a, "ready");
                try {
                    c.onreadystatechange = d
                } catch (e) {}
            }
        };
        Ne = function(a) {
            a.a && a.R && (a.a.ontimeout = null);
            _.Aa(a.o) && (_.De(a.o), a.o = null)
        };
        _.Ue = function(a) {
            var b = Te(a),
                c;
            a: switch (b) {
                case 200:
                case 201:
                case 202:
                case 204:
                case 206:
                case 304:
                case 1223:
                    c = !0;
                    break a;
                default:
                    c = !1
            }
            if (!c) {
                if (b = 0 === b) a = String(a.M).match(Ee)[1] || null, !a && _.l.self && _.l.self.location && (a = _.l.self.location.protocol, a = a.substr(0, a.length - 1)), b = !He.test(a ? a.toLowerCase() : "");
                c = b
            }
            return c
        };
        Se = function(a) {
            return a.a ? a.a.readyState : 0
        };
        Te = function(a) {
            try {
                return 2 < Se(a) ? a.a.status : -1
            } catch (b) {
                return -1
            }
        };
        _.Xe = function(a) {
            try {
                return a.a ? a.a.responseText : ""
            } catch (b) {
                return ""
            }
        };
        Vc(function(a) {
            Ge.prototype.N = a(Ge.prototype.N)
        });
        var Ze;
        _.N = function(a) {
            _.F.call(this);
            this.N = a;
            this.J = {}
        };
        _.p(_.N, _.F);
        var Ye = [];
        _.N.prototype.listen = function(a, b, c, d) {
            _.Ca(b) || (b && (Ye[0] = b.toString()), b = Ye);
            for (var e = 0; e < b.length; e++) {
                var f = _.ie(a, b[e], c || this.handleEvent, d || !1, this.N || this);
                if (!f) break;
                this.J[f.key] = f
            }
            return this
        };
        _.$e = function(a, b, c, d) {
            Ze(a, b, c, d, void 0)
        };
        Ze = function(a, b, c, d, e, f) {
            if (_.Ca(c))
                for (var h = 0; h < c.length; h++) Ze(a, b, c[h], d, e, f);
            else(b = _.pe(b, c, d || a.handleEvent, e, f || a.N || a)) && (a.J[b.key] = b)
        };
        _.N.prototype.Qa = function(a, b, c, d, e) {
            if (_.Ca(b))
                for (var f = 0; f < b.length; f++) this.Qa(a, b[f], c, d, e);
            else c = c || this.handleEvent, e = e || this.N || this, c = je(c), d = !!d, b = Wd(a) ? de(a.g, String(b), c, d, e) : a ? (a = le(a)) ? de(a, b, c, d, e) : null : null, b && (re(b), delete this.J[b.key]);
            return this
        };
        _.N.prototype.removeAll = function() {
            _.mb(this.J, function(a, b) {
                this.J.hasOwnProperty(b) && re(a)
            }, this);
            this.J = {}
        };
        _.N.prototype.w = function() {
            _.N.A.w.call(this);
            this.removeAll()
        };
        _.N.prototype.handleEvent = function() {
            throw Error("m");
        };
        var af = function() {};
        af.prototype.c = function(a) {
            if (this.a)
                for (var b = 0; b < this.a.length; ++b)
                    if (this.a[b] instanceof a) return this.a[b];
            return null
        };
        var bf = function(a) {
            (a ? a : function() {}).Lb = !0
        };
        _.cf = function() {};
        _.p(_.cf, af);
        _.cf.prototype.b = function(a) {
            return a
        };
        bf(_.cf.prototype.b);
        _.cf.prototype.g = function() {
            return !0
        };
        bf(_.cf.prototype.g);
        var df = function(a) {
            _.z(this, a, 0, null, null)
        };
        _.p(df, _.y);
        var ef;
        ef = function(a, b) {
            var c = new df;
            _.B(c, 1, b);
            _.B(c, 2, a);
            return c
        };
        _.ff = ef("?", 0);
        _.gf = ef("q", 1);
        _.hf = ef("<", 2);
        _.jf = ef(">", 3);
        _.kf = ef("~", 4);
        _.lf = ef("s", 5);
        _.O = function(a, b, c) {
            this.g = a;
            this.b = b || null;
            this.a = c || []
        };
        _.O.prototype.toString = function() {
            return this.g
        };
        var mf, nf, pf, rf, sf, Bf, tf, vf, uf, yf, wf, of, Cf;
        _.Q = function(a, b) {
            this.b = this.C = this.h = "";
            this.c = null;
            this.l = this.a = "";
            this.j = !1;
            var c;
            if (a instanceof _.Q) {
                this.j = _.m(b) ? b : a.j;
                mf(this, a.h);
                this.C = a.C;
                this.b = a.b;
                nf(this, a.c);
                this.a = a.a;
                c = a.g;
                var d = new of;
                d.g = c.g;
                c.a && (d.a = new _.J(c.a), d.b = c.b);
                pf(this, d);
                _.qf(this, a.l)
            } else a && (c = String(a).match(Ee)) ? (this.j = !!b, mf(this, c[1] || "", !0), this.C = rf(c[2] || ""), this.b = rf(c[3] || "", !0), nf(this, c[4]), this.a = rf(c[5] || "", !0), pf(this, c[6] || "", !0), _.qf(this, c[7] || "", !0)) : (this.j = !!b, this.g = new of(null, 0, this.j))
        };
        _.Q.prototype.toString = function() {
            var a = [],
                b = this.h;
            b && a.push(sf(b, tf, !0), ":");
            var c = this.b;
            if (c || "file" == b) a.push("//"), (b = this.C) && a.push(sf(b, tf, !0), "@"), a.push((0, window.encodeURIComponent)(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.c, null != c && a.push(":", String(c));
            if (c = this.a) this.b && "/" != c.charAt(0) && a.push("/"), a.push(sf(c, "/" == c.charAt(0) ? uf : vf, !0));
            (c = this.g.toString()) && a.push("?", c);
            (c = this.l) && a.push("#", sf(c, wf));
            return a.join("")
        };
        mf = function(a, b, c) {
            a.h = c ? rf(b, !0) : b;
            a.h && (a.h = a.h.replace(/:$/, ""))
        };
        nf = function(a, b) {
            if (b) {
                b = Number(b);
                if ((0, window.isNaN)(b) || 0 > b) throw Error("r`" + b);
                a.c = b
            } else a.c = null
        };
        pf = function(a, b, c) {
            b instanceof of ? (a.g = b, xf(a.g, a.j)) : (c || (b = sf(b, yf)), a.g = new of(b, 0, a.j))
        };
        _.R = function(a, b, c) {
            a.g.set(b, c)
        };
        _.qf = function(a, b, c) {
            a.l = c ? rf(b) : b
        };
        _.zf = function(a) {
            return a instanceof _.Q ? new _.Q(a) : new _.Q(a, void 0)
        };
        _.Af = function(a, b) {
            a instanceof _.Q || (a = _.zf(a));
            b instanceof _.Q || (b = _.zf(b));
            var c = a,
                d = b,
                e = new _.Q(c),
                f = !!d.h;
            f ? mf(e, d.h) : f = !!d.C;
            f ? e.C = d.C : f = !!d.b;
            f ? e.b = d.b : f = null != d.c;
            var h = d.a;
            if (f) nf(e, d.c);
            else if (f = !!d.a)
                if ("/" != h.charAt(0) && (c.b && !c.a ? h = "/" + h : (c = e.a.lastIndexOf("/"), -1 != c && (h = e.a.substr(0, c + 1) + h))), c = h, ".." == c || "." == c) h = "";
                else if (-1 != c.indexOf("./") || -1 != c.indexOf("/.")) {
                for (var h = _.Ha(c, "/"), c = c.split("/"), k = [], n = 0; n < c.length;) {
                    var q = c[n++];
                    "." == q ? h && n == c.length && k.push("") : ".." == q ? ((1 <
                        k.length || 1 == k.length && "" != k[0]) && k.pop(), h && n == c.length && k.push("")) : (k.push(q), h = !0)
                }
                h = k.join("/")
            } else h = c;
            f ? e.a = h : f = "" !== d.g.toString();
            f ? pf(e, rf(d.g.toString())) : f = !!d.l;
            f && _.qf(e, d.l);
            return e
        };
        rf = function(a, b) {
            return a ? b ? (0, window.decodeURI)(a.replace(/%25/g, "%2525")) : (0, window.decodeURIComponent)(a) : ""
        };
        sf = function(a, b, c) {
            return _.t(a) ? (a = (0, window.encodeURI)(a).replace(b, Bf), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
        };
        Bf = function(a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        };
        tf = /[#\/\?@]/g;
        vf = /[\#\?:]/g;
        uf = /[\#\?]/g;
        yf = /[\#\?@]/g;
        wf = /#/g;
        of = function(a, b, c) {
            this.b = this.a = null;
            this.g = a || null;
            this.c = !!c
        };
        Cf = function(a) {
            a.a || (a.a = new _.J, a.b = 0, a.g && Fe(a.g, function(b, c) {
                var d = (0, window.decodeURIComponent)(b.replace(/\+/g, " "));
                Cf(a);
                a.g = null;
                var d = Df(a, d),
                    e = a.a.get(d);
                e || a.a.set(d, e = []);
                e.push(c);
                a.b += 1
            }))
        };
        of.prototype.remove = function(a) {
            Cf(this);
            a = Df(this, a);
            return _.Nc(this.a, a) ? (this.g = null, this.b -= this.a.get(a).length, this.a.remove(a)) : !1
        };
        of.prototype.clear = function() {
            this.a = this.g = null;
            this.b = 0
        };
        var Ef = function(a, b) {
            Cf(a);
            b = Df(a, b);
            return _.Nc(a.a, b)
        };
        of.prototype.V = function() {
            Cf(this);
            for (var a = this.a.S(), b = this.a.V(), c = [], d = 0; d < b.length; d++)
                for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
            return c
        };
        of.prototype.S = function(a) {
            Cf(this);
            var b = [];
            if (_.t(a)) Ef(this, a) && (b = _.hb(b, this.a.get(Df(this, a))));
            else {
                a = this.a.S();
                for (var c = 0; c < a.length; c++) b = _.hb(b, a[c])
            }
            return b
        };
        of.prototype.set = function(a, b) {
            Cf(this);
            this.g = null;
            a = Df(this, a);
            Ef(this, a) && (this.b -= this.a.get(a).length);
            this.a.set(a, [b]);
            this.b += 1;
            return this
        };
        of.prototype.get = function(a, b) {
            var c = a ? this.S(a) : [];
            return 0 < c.length ? String(c[0]) : b
        };
        _.Ff = function(a, b, c) {
            a.remove(b);
            0 < c.length && (a.g = null, a.a.set(Df(a, b), _.ib(c)), a.b += c.length)
        };
        of.prototype.toString = function() {
            if (this.g) return this.g;
            if (!this.a) return "";
            for (var a = [], b = this.a.V(), c = 0; c < b.length; c++)
                for (var d = b[c], e = (0, window.encodeURIComponent)(String(d)), d = this.S(d), f = 0; f < d.length; f++) {
                    var h = e;
                    "" !== d[f] && (h += "=" + (0, window.encodeURIComponent)(String(d[f])));
                    a.push(h)
                }
            return this.g = a.join("&")
        };
        var Df = function(a, b) {
                var c = String(b);
                a.c && (c = c.toLowerCase());
                return c
            },
            xf = function(a, b) {
                b && !a.c && (Cf(a), a.g = null, a.a.forEach(function(a, b) {
                    var c = b.toLowerCase();
                    b != c && (this.remove(b), _.Ff(this, c, a))
                }, a));
                a.c = b
            };
        _.cf.A || _.p(_.cf, af);
        _.Gf = function(a) {
            switch (a) {
                case 1:
                    return "homepage";
                case 4:
                    return "Google Translator Toolkit";
                case 5:
                    return "Google Sites";
                case 6:
                    return "customersupport";
                case 9:
                    return "present";
                case 15:
                    return "hangout";
                case 18:
                    return "gmail";
                case 20:
                    return "docs";
                case 24:
                    return "docs_hangout";
                case 22:
                    return "hangout_lite";
                case 23:
                    return "aChromeExtension";
                case 25:
                    return "bigtop";
                case 27:
                    return "ChromeApp";
                case 36:
                    return "StartPage"
            }
        };
        _.Hf = function(a) {
            _.z(this, a, "uv_r_rdm", null, null)
        };
        _.p(_.Hf, _.y);
        _.Hf.messageId = "uv_r_rdm";
        _.If = function(a) {
            _.z(this, a, "uv_r_rr", null, null)
        };
        _.p(_.If, _.y);
        _.If.messageId = "uv_r_rr";
        _.Jf = function(a) {
            _.z(this, a, "uv_r_frm", null, null)
        };
        _.p(_.Jf, _.y);
        _.Jf.messageId = "uv_r_frm";
        _.Kf = function(a) {
            _.z(this, a, 0, null, null)
        };
        _.p(_.Kf, _.y);
        var Mf = function(a, b) {
                var c = Array.prototype.slice.call(arguments),
                    d = c.shift();
                if ("undefined" == typeof d) throw Error("t");
                return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, k, n, q, v, Z) {
                    if ("%" == q) return "%";
                    var e = c.shift();
                    if ("undefined" == typeof e) throw Error("u");
                    arguments[0] = e;
                    return Lf[q].apply(null, arguments)
                })
            },
            Lf = {
                s: function(a, b, c) {
                    return (0, window.isNaN)(c) || "" == c || a.length >= Number(c) ? a : a = -1 < b.indexOf("-", 0) ? a + Ta(" ", Number(c) - a.length) : Ta(" ", Number(c) - a.length) + a
                },
                f: function(a,
                    b, c, d, e) {
                    d = a.toString();
                    (0, window.isNaN)(e) || "" == e || (d = (0, window.parseFloat)(a).toFixed(e));
                    var f;
                    f = 0 > Number(a) ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
                    0 <= Number(a) && (d = f + d);
                    if ((0, window.isNaN)(c) || d.length >= Number(c)) return d;
                    d = (0, window.isNaN)(e) ? Math.abs(Number(a)).toString() : Math.abs(Number(a)).toFixed(e);
                    a = Number(c) - d.length - f.length;
                    return d = 0 <= b.indexOf("-", 0) ? f + d + Ta(" ", a) : f + Ta(0 <= b.indexOf("0", 0) ? "0" : " ", a) + d
                },
                d: function(a, b, c, d, e, f, h, k) {
                    return Lf.f((0, window.parseInt)(a, 10), b, c, d, 0, f, h, k)
                }
            };
        Lf.i = Lf.d;
        Lf.u = Lf.d;
        _.S = function(a, b) {
            for (var c = [], d = 0; d < arguments.length; d++)
                if (arguments[d] instanceof Error) c.push(arguments[d].stack);
                else if ("object" == typeof arguments[d]) try {
                c.push(JSON.stringify(arguments[d]))
            } catch (e) {
                c.push("_error_(" + e + ")")
            } else c.push(arguments[d]);
            window.console && (d = new Date, d = Mf("%02d-%02d ", d.getMonth() + 1, d.getDate()) + d.toLocaleTimeString() + Mf(".%03d", d.getMilliseconds()), window.console.log(d + " info: " + Mf.apply({}, c)))
        };
        _.Nf = new _.O("pVbxBc");
        _.T = new _.O("nED8Yb");
        _.Of = new _.O("xclgJb");
        _.Pf = new _.O("Qz9Lj");
        _.Rf = function(a) {
            _.z(this, a, "h_exts", Qf, null)
        };
        _.p(_.Rf, _.y);
        var Qf = [2];
        _.Rf.messageId = "h_exts";
        _.Sf = function(a) {
            return _.Af(a, "/webchat/host-js")
        };
        _.Tf = function(a) {
            var b = _.Sf(_.A(a, 2));
            _.R(b, "prop", _.Gf(27));
            _.R(b, "b", 1);
            _.R(b, "hl", _.A(a, 3));
            _.A(a, 4) && _.R(b, "jsmode", _.A(a, 4));
            _.R(b, "zx", _.Va());
            return b.toString()
        };
        var Uf;
        Uf = function(a) {
            return (a = a.exec(_.jb)) ? a[1] : ""
        };
        _.Vf = function() {
            if (Sb) return Uf(/Firefox\/([0-9.]+)/);
            if (_.x || Bb || Ab) return Nb;
            if (Wb) return Uf(/Chrome\/([0-9.]+)/);
            if (Xb && !(ub() || _.w("iPad") || _.w("iPod"))) return Uf(/Version\/([0-9.]+)/);
            if (Tb || Ub) {
                var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(_.jb);
                if (a) return a[1] + "." + a[2]
            } else if (Vb) return (a = Uf(/Android\s+([0-9.]+)/)) ? a : Uf(/Version\/([0-9.]+)/);
            return ""
        }();
        var Wf = function(a, b) {
            _.K.call(this, a, b);
            this.P = b
        };
        _.p(Wf, _.K);
        var Xf = function(a) {
            _.z(this, a, "capi_md1571", null, null)
        };
        _.p(Xf, _.y);
        Xf.messageId = "capi_md1571";
        var Yf = {
                gb: 0,
                wc: 1,
                vc: 2,
                fb: 3,
                Sa: 4
            },
            Zf = function(a) {
                _.z(this, a, 0, null, null)
            };
        _.p(Zf, _.y);
        var ag = function() {
                for (var a = 10, b = $f, c = b.length, d = ""; 0 < a--;) d += b.charAt(Math.floor(Math.random() * c));
                return d
            },
            $f = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        _.bg = function(a, b) {
            _.F.call(this);
            this.j = b || ag();
            this.c = this.a = "";
            this.b = this.g = null;
            this.l = a;
            this.h = new _.N(this);
            _.I(this, this.h);
            this.h.listen(window, "message", this.m)
        };
        _.p(_.bg, _.F);
        _.bg.prototype.ca = function(a, b, c) {
            this.c = a;
            this.g = b;
            this.b = c
        };
        _.bg.prototype.m = function(a) {
            a = a.a;
            var b;
            b = a.origin;
            this.g && this.g != a.source || "*" != this.c && this.c != b ? b = !1 : this.b ? (b = (new _.Q(b)).b, b = _.Ia(b, this.b) ? b.length == this.b.length || "." == this.b[0] || "." == b[b.length - 1 - this.b.length] : !1) : b = !0;
            if (b && (b = a.data) && _.t(b) && "[" == b[0]) {
                var c;
                try {
                    if (c = JSON.parse(b), !_.Ca(c)) return
                } catch (d) {
                    return
                }
                if (0 != c.length && "capi_md1571" == c[0] && (c = new Xf(c), _.A(c, 1) == this.j)) {
                    b = _.A(c, 3);
                    if (!this.a) this.a = b;
                    else if (this.a != b) return;
                    "*" != this.c && this.g || this.ca(a.origin, a.source);
                    1 == _.A(c, 2) ? this.send(2) : this.l(c, a)
                }
            }
        };
        _.bg.prototype.send = function(a, b, c) {
            if (this.a && this.g) {
                b = b || new Xf;
                _.B(b, 3, this.j);
                _.B(b, 1, this.a);
                _.B(b, 2, a);
                var d = JSON.stringify(_.D(b)),
                    e = this.g,
                    f = this.c;
                _.x ? _.Ce(function() {
                    e.postMessage(d, f)
                }) : c ? e.postMessage(d, f, c) : e.postMessage(d, f)
            }
        };
        var cg = function(a, b, c, d, e) {
            this.g = _.sd();
            this.a = new _.bg((0, _.r)(this.h, this), d);
            this.a.ca(a, b, e);
            this.a.a = c;
            this.b = new _.Be(50);
            this.b.start();
            _.ie(this.b, "tick", this.c, !1, this);
            this.c();
            a = this.g.a;
            b = this.j;
            b = pd(b, b, this);
            b.g = !0;
            zd(a, b)
        };
        cg.prototype.j = function() {
            _.H(this.a);
            _.qe(this.b, "tick", this.c, !1, this);
            _.H(this.b)
        };
        cg.prototype.c = function() {
            this.a.send(1)
        };
        cg.prototype.h = function(a, b) {
            2 == _.A(a, 2) && this.g.b(b.origin)
        };
        var dg = function(a, b, c) {
            _.F.call(this);
            this.b = a;
            a = _.A(b, 3);
            b = _.A(b, 1);
            this.a = new _.bg((0, _.r)(this.g, this), b);
            this.a.a = a;
            c && this.a.ca(c.origin, c.source);
            _.I(this, this.a)
        };
        _.p(dg, _.F);
        dg.prototype.send = function(a) {
            var b = new Xf;
            _.E(b, 4, a);
            this.a.send(Yf.gb, b)
        };
        dg.prototype.connect = function(a, b) {
            this.a.ca(a, b);
            this.a.send(Yf.fb)
        };
        dg.prototype.g = function(a) {
            _.A(a, 2) == Yf.gb && (a = _.C(a, Zf, 4), this.b(a))
        };
        dg.prototype.c = _.Da;
        var fg = function(a, b, c) {
            _.F.call(this);
            this.h = a;
            this.b = this.a = this.g = null;
            c ? (this.b = c.ports[0], eg(this)) : (this.a = new _.bg(_.Da, _.A(b, 1)), a = _.A(b, 3), this.a.a = a)
        };
        _.p(fg, _.F);
        fg.prototype.w = function() {
            fg.A.w.call(this);
            this.b && this.b.close();
            _.H(this.a)
        };
        fg.prototype.c = function() {
            this.g = new _.N(this);
            _.I(this, this.g);
            eg(this)
        };
        fg.prototype.send = function(a) {
            this.b.postMessage(_.D(a))
        };
        fg.prototype.connect = function(a, b) {
            var c = new window.MessageChannel;
            this.b = c.port1;
            eg(this);
            var d = this.a;
            this.a = null;
            c = c.port2;
            d.ca(a, b);
            d.send(Yf.Sa, void 0, [c]);
            _.H(d)
        };
        var eg = function(a) {
            a.b && a.g && (a.g.listen(a.b, "message", a.j), a.b.start())
        };
        fg.prototype.j = function(a) {
            a = a.a;
            var b;
            try {
                b = new Zf(a.data)
            } catch (c) {
                return
            }
            this.h(b)
        };
        var gg = function(a, b, c) {
            var d = !1;
            _.m(_.A(b, 2)) ? _.A(b, 2) == Yf.Sa && (d = !0) : d = Wb;
            return d ? new fg(a, b, c) : new dg(a, b, c)
        };
        var kg;
        _.hg = function() {
            _.L.call(this);
            this.h = null;
            this.l = !1;
            this.j = [];
            this.c = [];
            _.G(this, this.o, this);
            this.b = null
        };
        _.p(_.hg, _.L);
        _.hg.prototype.o = function() {
            for (; this.c.length;) this.c.shift()()
        };
        _.jg = function(a) {
            a.o();
            a.j = [];
            a.b = new _.Fd;
            a.c.push((0, _.r)(a.b.cancel, a.b));
            a.l = !1;
            _.Md(a.b.h(), function(a) {
                (ee(this.g) || this.J) && ig(this);
                this.c.push(_.xa(_.H, a))
            }, a)
        };
        _.g = _.hg.prototype;
        _.g.sendMessage = function(a) {
            this.xa(_.D(a))
        };
        _.g.xa = function(a) {
            if (this.b) {
                var b = new Zf;
                _.B(b, 1, a);
                _.Md(this.b.h(), function(a) {
                    a.send(b)
                })
            }
        };
        _.g.eb = function(a) {
            this.h = a;
            _.G(this, function() {
                this.h = null
            }, this);
            ig(this)
        };
        _.g.F = function() {
            return this
        };
        _.g.ca = function(a, b, c) {
            this.a.ca(a, b, c)
        };
        _.lg = function(a, b, c, d) {
            _.jg(a);
            kg(a, b, c, d).then(function(a) {
                var d = new Xf;
                _.B(d, 1, a.sc);
                _.B(d, 3, c);
                d = gg((0, _.r)(this.m, this), d);
                d.connect(a.origin, b);
                this.b.b(d)
            }, void 0, a)
        };
        kg = function(a, b, c, d) {
            var e = ag();
            b = (new cg("*", b, c, e, d)).g.a;
            a.c.push((0, _.r)(b.cancel, b));
            return b.then(function(a) {
                return {
                    sc: e,
                    origin: a
                }
            })
        };
        _.hg.prototype.D = function(a, b) {
            if (_.A(a, 2) == Yf.fb || _.A(a, 2) == Yf.Sa) _.H(this.a), this.a = null, this.b.b(gg((0, _.r)(this.m, this), a, b))
        };
        _.hg.prototype.m = function(a) {
            this.j.push(a);
            this.v()
        };
        _.hg.prototype.v = function() {
            for (; mg(this););
        };
        var mg = function(a) {
                if (a.I || !a.l || 0 == a.j.length) return !1;
                var b = _.A(a.j.shift(), 1);
                a.h && a.h.xa(b);
                _.M(a, new Wf(b[0], b));
                return !0
            },
            ig = function(a) {
                a.l || (a.l = !0, a.b && _.Md(a.b.h(), function(a) {
                    a.c();
                    _.Ce(this.v, 0, this)
                }, a))
            };
        _.hg.prototype.listen = function(a, b, c, d) {
            ig(this);
            return _.hg.A.listen.call(this, a, b, c, d)
        };
        _.hg.prototype.Ma = function(a, b, c, d) {
            ig(this);
            return _.hg.A.Ma.call(this, a, b, c, d)
        };
        _.hg.prototype.G = function(a) {
            ig(this);
            return _.hg.A.G.call(this, a)
        };
        var ng = function(a) {
            this.b = a;
            this.c = "empty";
            this.a = null;
            this.g = {}
        };
        ng.prototype.setVersion = function(a) {
            this.c = a;
            return this
        };
        ng.prototype.Oa = function(a) {
            this.a = a;
            return this
        };
        ng.prototype.cb = function(a) {
            this.g = _.qb(a);
            return this
        };
        var og = function() {};
        var pg = function() {};
        _.p(pg, og);
        pg.prototype.clear = function() {
            var a = Kc(this.ha(!0)),
                b = this;
            (0, _.u)(a, function(a) {
                b.remove(a)
            })
        };
        var qg = function(a) {
            this.a = a
        };
        _.p(qg, pg);
        _.g = qg.prototype;
        _.g.isAvailable = function() {
            if (!this.a) return !1;
            try {
                return this.a.setItem("__sak", "1"), this.a.removeItem("__sak"), !0
            } catch (a) {
                return !1
            }
        };
        _.g.set = function(a, b) {
            try {
                this.a.setItem(a, b)
            } catch (c) {
                if (0 == this.a.length) throw "Storage mechanism: Storage disabled";
                throw "Storage mechanism: Quota exceeded";
            }
        };
        _.g.get = function(a) {
            a = this.a.getItem(a);
            if (!_.t(a) && null !== a) throw "Storage mechanism: Invalid value was encountered";
            return a
        };
        _.g.remove = function(a) {
            this.a.removeItem(a)
        };
        _.g.ha = function(a) {
            var b = 0,
                c = this.a,
                d = new Hc;
            d.next = function() {
                if (b >= c.length) throw Gc;
                var d = c.key(b++);
                if (a) return d;
                d = c.getItem(d);
                if (!_.t(d)) throw "Storage mechanism: Invalid value was encountered";
                return d
            };
            return d
        };
        _.g.clear = function() {
            this.a.clear()
        };
        _.g.key = function(a) {
            return this.a.key(a)
        };
        var rg = function() {
            var a = null;
            try {
                a = window.localStorage || null
            } catch (b) {}
            this.a = a
        };
        _.p(rg, qg);
        var tg = function(a, b) {
                this.g = a;
                this.a = [];
                this.b = null;
                b && (this.b = new rg);
                if (null != this.b && this.b.isAvailable()) {
                    var c = this.b.get("__webmonitoring_RateThrottler_history_hourlyRate");
                    if (null != c) try {
                        this.a = $b(c) || []
                    } catch (d) {}
                }
                c = !1;
                _.Ca(this.a) || (this.a = [], c = !0);
                for (; this.a.length > this.g;) this.a.shift(), c = !0;
                c && sg(this)
            },
            sg = function(a) {
                if (null != a.b && a.b.isAvailable()) try {
                    a.b.set("__webmonitoring_RateThrottler_history_hourlyRate", _.cc(a.a))
                } catch (b) {}
            };
        var ug = function(a) {
            _.F.call(this);
            this.a = a;
            this.h = !1
        };
        _.p(ug, _.F);
        ug.prototype.setEnabled = function(a) {
            this.h = a
        };
        var U = function(a) {
            ug.call(this, a);
            this.o = 100;
            this.m = {};
            this.O = null;
            this.g = "";
            this.J = !0;
            this.j = 10;
            this.b = null;
            this.c = !1
        };
        _.p(U, ug);
        U.prototype.tb = function(a) {
            this.J = a;
            return this
        };
        U.prototype.setUseLocalStorage = U.prototype.tb;
        U.prototype.qc = function(a) {
            this.j = Math.min(a, 100);
            return this
        };
        U.prototype.setMaxErrorsPerHour = U.prototype.qc;
        U.prototype.rb = function(a) {
            this.o = a;
            return this
        };
        U.prototype.setGlobalSampling = U.prototype.rb;
        U.prototype.ib = function(a, b) {
            this.m[a] = b;
            return this
        };
        U.prototype.addPerErrorMessageSampling = U.prototype.ib;
        U.prototype.qb = function(a) {
            this.O = a;
            return this
        };
        U.prototype.setCallback = U.prototype.qb;
        U.prototype.pc = function(a) {
            this.g = a;
            return this
        };
        U.prototype.setClientId = U.prototype.pc;
        U.prototype.enable = function() {
            if (this.h) return !1;
            this.l = window.onerror;
            window.onerror = this.v.bind(this);
            this.setEnabled(!0);
            return !0
        };
        U.prototype.enable = U.prototype.enable;
        U.prototype.nb = function(a, b, c, d, e) {
            var f = _.zf(window.location.href);
            a = null != e && null != e.message ? e.message : a;
            var h;
            if (h = !_.za(this.O) || this.O(f.a, a, b, c, d, e))
                if (h = this.c) {
                    h = Object.keys(this.m);
                    for (var k = 100, n = 0; n < h.length; ++n) {
                        var q = h[n];
                        (new RegExp(q)).test(a) && (k = this.m[q])
                    }
                    if (h = (100 * Math.random()).toFixed(6) >= this.o * k / 100 ? !1 : !0) {
                        0 <= this.j && null === this.b && (this.b = new tg(this.j, this.J));
                        if (null === this.b) h = 0;
                        else {
                            a: {
                                h = this.b;k = (0, _.sa)();
                                if (h.a.length == h.g)
                                    if (h.a[0] < k - 36E5) h.a.shift();
                                    else {
                                        h = !1;
                                        break a
                                    }
                                h.a.push(k);
                                sg(h);h = !0
                            }
                            h = !h
                        }
                        h = !h && this.c
                    }
                }
            h && (h = _.qb(this.a.g), h.url = f.a, h.type = "JavascriptError", h.error_message = a, k = "Other", Ab ? k = "Opera" : _.x ? k = "Internet Explorer" : Sb ? k = "Firefox" : Wb ? k = "Chrome" : Xb && (k = "Safari"), h.browser = k, h.browser_version = _.Vf, h.os = _.w("CrOS") ? "Chrome OS" : _.w("Linux") ? "Linux" : _.wb() ? "Windows" : _.w("Android") ? "Android" : ub() ? "iPhone" : _.w("iPad") ? "iPad" : _.w("iPod") ? "iPod" : _.vb() ? "Mac" : "Unknown", k = _.jb, n = "", _.wb() ? (n = /Windows (?:NT|Phone) ([0-9.]+)/, n = (k = n.exec(k)) ? k[1] : "0.0") : ub() || _.w("iPad") ||
                _.w("iPod") ? (n = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/, n = (k = n.exec(k)) && k[1].replace(/_/g, ".")) : _.vb() ? (n = /Mac OS X ([0-9_.]+)/, n = (k = n.exec(k)) ? k[1].replace(/_/g, ".") : "10") : _.w("Android") ? (n = /Android\s+([^\);]+)(\)|;)/, n = (k = n.exec(k)) && k[1]) : _.w("CrOS") && (n = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/, n = (k = n.exec(k)) && k[1]), h.os_version = n || "", null != this.a.a && (h.channel = this.a.a), _.Ja(this.g) || (h.guid = this.g), null != b && (h.src = b), null != c && (h.line = c), null != d && (h.column = d), h.prod = this.a.b, h.ver = this.a.c, b =
                vg(h), e = null != e ? _.Ua(e.stack) : "", _.Ja(a) || (c = e.split("\n"), -1 < c[0].indexOf(a) && (c.splice(0, 1), e = c.join("\n"))), wg(this, "https://clients2.google.com/cr/staging_report", b, e), f = {
                    product: this.a.b,
                    url: f.a,
                    js_errors_count: "1"
                }, a = _.Ua(this.a.a), _.Ja(a) || (f.version = a), wg(this, "https://clients2.google.com/cr/staging_perf", vg(f)))
        };
        U.prototype.reportError = U.prototype.nb;
        U.prototype.v = function(a, b, c, d, e) {
            this.nb(a, b, c, d, e);
            null != this.l && _.za(this.l) && this.l(a, b, c, d, e)
        };
        var vg = function(a) {
                var b = "",
                    c;
                for (c in a) b += _.Ja(b) ? "?" : "&", b += c + "=" + (0, window.encodeURIComponent)(a[c]);
                return b
            },
            wg = function(a, b, c, d) {
                d = d || "";
                var e = _.Ja(d) ? {} : {
                    "Content-Type": "text/plain"
                };
                _.Ke(b + c, a.G.bind(a, b), "POST", d, e, 6E4, !0)
            };
        U.prototype.G = function(a, b) {
            _.Ue(b.target)
        };
        var xg = function(a) {
            ug.call(this, a);
            this.O = null;
            this.b = 0
        };
        _.p(xg, ug);
        xg.prototype.qb = function(a) {
            this.O = a;
            return this
        };
        var yg = [{
            age: 6E4,
            name: "1m"
        }, {
            age: 15E5,
            name: "25m"
        }, {
            age: 36E5,
            name: "1h"
        }, {
            age: 36E6,
            name: "10h"
        }];
        xg.prototype.enable = function() {
            if (this.h) return !1;
            if (window.performance && window.performance.memory) {
                var a = new _.Be(6E4);
                _.I(this, a);
                var b = new _.N(this);
                _.I(this, b);
                b.listen(a, "tick", this.g);
                a.start();
                this.setEnabled(!0);
                return !0
            }
            return !1
        };
        xg.prototype.g = function() {
            this.b += 6E4;
            for (var a = "", b = 0; b < yg.length; ++b)
                if (this.b == yg[b].age) {
                    a = yg[b].name;
                    break
                }
            if ("" != a) {
                var b = zg.test(_.jb) ? "" : "32_bit_",
                    c = window.performance.memory;
                if (c.totalJSHeapSize && c.usedJSHeapSize) {
                    var a = [{
                            name: "total_" + b + "js_heap_size_mb_" + a + "_raw",
                            displayName: "Total JS heap (MB)",
                            value: Math.round(c.totalJSHeapSize / 1048576)
                        }, {
                            name: "used_" + b + "js_heap_size_mb_" + a + "_raw",
                            displayName: "Used JS heap (MB)",
                            value: Math.round(c.usedJSHeapSize / 1048576)
                        }],
                        b = _.zf(window.location.href).a,
                        c = "?product=" + (0, window.encodeURIComponent)(this.a.b) + "&url=" + (0, window.encodeURIComponent)(b),
                        d = _.Ua(this.a.a);
                    _.Ja(d) || (c += "&version=" + (0, window.encodeURIComponent)(d));
                    for (d = 0; d < a.length; ++d) c += "&" + (0, window.encodeURIComponent)(a[d].name) + "=" + a[d].value, _.za(this.O) && this.O(b, a[d].displayName, a[d].value);
                    _.Ke("https://clients2.google.com/cr/staging_perf" + c, Ag, "POST", "", null, 6E4, !0)
                }
            }
        };
        var Ag = function(a) {
                _.Ue(a.target)
            },
            zg = /(x86_64|Win64)/;
        var Bg = function(a) {
            _.F.call(this);
            this.b = new ng(a);
            this.a = {}
        };
        _.p(Bg, _.F);
        _.wa("webmonitoring.Monitoring", Bg);
        Bg.prototype.setVersion = function(a) {
            this.b.setVersion(a);
            return this
        };
        Bg.prototype.setVersion = Bg.prototype.setVersion;
        Bg.prototype.Oa = function(a) {
            this.b.Oa(a);
            return this
        };
        Bg.prototype.setChannel = Bg.prototype.Oa;
        Bg.prototype.cb = function(a) {
            this.b.cb(a);
            return this
        };
        Bg.prototype.setContext = Bg.prototype.cb;
        Bg.prototype.Ka = function() {
            null != this.a[2] || (this.a[2] = new U(this.b));
            return this.a[2]
        };
        Bg.prototype.createJsErrorsReporter = Bg.prototype.Ka;
        var Cg = function(a) {
            Bg.call(this, a)
        };
        _.p(Cg, Bg);
        Cg.prototype.Ka = function() {
            var a = Cg.A.Ka.call(this);
            a.c = !0;
            return a
        };
        _.Dg = function() {
            var a = new Cg("Google_Hangouts_Chrome");
            a.Oa(window.chrome.runtime.id);
            a.setVersion(window.chrome.runtime.getManifest().version);
            null != a.a[1] || (a.a[1] = new xg(a.b));
            a.a[1].enable();
            a.Ka().tb(!1).rb(100).ib("Script error.", 0).enable()
        };
        var Eg = function(a, b) {
            this.g = a;
            this.b = b;
            this.constructor.jb || (this.constructor.jb = {});
            this.constructor.jb[this.toString()] = this
        };
        Eg.prototype.toString = function() {
            this.a || (this.a = this.g.a + ":" + this.b);
            return this.a
        };
        var Fg = function(a, b) {
            Eg.call(this, a, b)
        };
        _.p(Fg, Eg);
        var Gg = function(a) {
            this.a = a
        };
        new Gg("lib");
        var Hg, Pg, Qg, Rg;
        _.Ig = function(a) {
            _.F.call(this);
            this.c = {};
            this.j = {};
            this.l = {};
            this.a = {};
            this.g = {};
            this.G = {};
            this.m = a ? a.F() : new _.L;
            this.N = !a;
            this.b = null;
            a ? (this.b = a, this.l = a.l, this.a = a.a, this.j = a.j, this.g = a.g) : (0, _.sa)();
            a = Hg(this);
            this != a && (a.h ? a.h.push(this) : a.h = [this])
        };
        _.p(_.Ig, _.F);
        _.Jg = .05 > Math.random();
        Hg = function(a) {
            for (; a.b;) a = a.b;
            return a
        };
        _.Ig.prototype.get = function(a) {
            var b = _.Kg(this, a);
            if (null == b) throw new Lg(a);
            return b
        };
        _.Kg = function(a, b) {
            for (var c = a; c; c = c.b) {
                if (c.I) throw Error("v");
                if (c.c[b]) return c.c[b][0];
                if (c.G[b]) break
            }
            if (c = a.l[b]) {
                c = c(a);
                if (null == c) throw Error("w`" + b);
                _.Mg(a, b, c);
                return c
            }
            return null
        };
        _.Ig.prototype.J = function(a, b) {
            var c = _.Kg(this, a);
            if (null == c) {
                if (this.g[a]) {
                    var d = this.g[a].h();
                    _.Md(d, (0, _.r)(this.J, this, a, b));
                    return d
                }
                throw new Ng(a, b, "Module loaded but service or factory not registered with app contexts.");
            }
            return c.Wa ? (d = new _.Fd, _.Nd(d, c.Wa()), d.b(c), _.Md(d, (0, _.r)(this.o, this, a)), d) : this.o(a)
        };
        _.Ig.prototype.o = function(a) {
            this.g[a] && delete this.g[a];
            return this.get(a)
        };
        _.Ig.prototype.H = function(a, b, c) {
            return c instanceof _.Gd ? c : new Og(a, b, c)
        };
        _.Mg = function(a, b, c, d) {
            if (a.I) d || _.H(c);
            else {
                a.c[b] = [c, !d];
                d = Pg(a, a, b);
                for (var e = 0; e < d.length; e++) d[e].b(null);
                delete a.j[b];
                return c
            }
        };
        Pg = function(a, b, c) {
            var d = [],
                e = a.a[c];
            e && (_.Za(e, function(a) {
                var c;
                a: {
                    for (c = a.Va; c;) {
                        if (c == b) {
                            c = !0;
                            break a
                        }
                        c = c.b
                    }
                    c = !1
                }
                c && (d.push(a.d), _.gb(e, a))
            }), 0 == e.length && delete a.a[c]);
            return d
        };
        Qg = function(a, b) {
            a.a && Pc(a.a, function(a, d, e) {
                _.Za(a, function(c) {
                    c.Va == b && _.gb(a, c)
                });
                0 == a.length && delete e[d]
            })
        };
        _.Ig.prototype.D = function(a, b) {
            var c = this.a && this.a[a];
            if (c) {
                for (var d = 0; d < c.length; ++d)
                    if (c[d].Va == this && c[d].d == b) {
                        _.fb(c, d);
                        break
                    }
                0 == c.length && delete this.a[a]
            }
        };
        _.Ig.prototype.w = function() {
            if (Hg(this) == this) {
                var a = this.h;
                if (a)
                    for (; a.length;) a[0].Z()
            } else
                for (var a = Hg(this).h, b = 0; b < a.length; b++)
                    if (a[b] == this) {
                        a.splice(b, 1);
                        break
                    } for (var c in this.c) a = this.c[c], a[1] && a[0].Z && a[0].Z();
            this.c = null;
            this.N && this.m.Z();
            Qg(this, this);
            this.a = null;
            _.H(this.M);
            this.G = this.M = null;
            _.Ig.A.w.call(this)
        };
        _.Ig.prototype.F = function() {
            return this.m
        };
        var Lg = function(a) {
            _.Fa.call(this);
            this.id = a;
            this.message = 'Service for "' + a + '" is not registered'
        };
        _.p(Lg, _.Fa);
        var Og = function(a, b, c) {
            _.Fa.call(this);
            this.message = 'Module "' + b + '" failed to load when requesting the service "' + a + '" [cause: ' + c + "]";
            this.stack = c.stack + "\nWRAPPED BY:\n" + this.stack
        };
        _.p(Og, _.Fa);
        var Ng = function(a, b, c) {
            _.Fa.call(this);
            this.message = 'Configuration error when loading the module "' + b + '" for the service "' + a + '": ' + c
        };
        _.p(Ng, _.Fa);
        Rg = new Gg("fva");
        _.Sg = new Fg(Rg, 1);

    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.Tg = "https://support.google.com/chrome/answer/185277?hl=" + window.chrome.i18n.getMessage("@@ui_locale");
        window.chrome.i18n.getMessage("@@ui_locale");
        _.Ug = "https://support.google.com/hangouts/?p=chrome_desktop_app_outdated&hl=" + window.chrome.i18n.getMessage("@@ui_locale");

    } catch (e) {
        _._DumpException(e)
    }
    try {
        var Vg = {},
            Wg = function(a) {
                if (Vg[a]) return Vg[a];
                a = String(a);
                if (!Vg[a]) {
                    var b = /function ([^\(]+)/.exec(a);
                    Vg[a] = b ? b[1] : "[Anonymous]"
                }
                return Vg[a]
            },
            Xg = function(a) {
                var b = Error();
                if (Error.captureStackTrace) return Error.captureStackTrace(b, a), String(b.stack);
                try {
                    throw b;
                } catch (c) {
                    b = c
                }
                return (a = b.stack) ? String(a) : null
            },
            Yg = function(a) {
                return a.K ? a.K : a.b ? Yg(a.b) : null
            },
            Zg = function(a) {
                _.z(this, a, 0, null, null)
            },
            vi, wi;
        _.p(Zg, _.y);
        Zg.prototype.a = function() {
            return _.A(this, 1)
        };
        Zg.prototype.getTitle = function() {
            return _.A(this, 2)
        };
        Zg.prototype.setTitle = function(a) {
            _.B(this, 2, a)
        };
        Zg.prototype.qa = function() {
            return _.A(this, 3)
        };
        var $g = function(a, b) {
                _.Ld(a, null, b, void 0)
            },
            ah = function(a) {
                var b = Xg(ah);
                if (b) return b;
                for (var b = [], c = arguments.callee.caller, d = 0; c && (!a || d < a);) {
                    b.push(Wg(c));
                    b.push("()\n");
                    try {
                        c = c.caller
                    } catch (e) {
                        b.push("[exception trying to get caller]\n");
                        break
                    }
                    d++;
                    if (50 <= d) {
                        b.push("[...long stack...]");
                        break
                    }
                }
                a && d >= a ? b.push("[...reached max depth limit...]") : b.push("[end]");
                return b.join("")
            },
            bh = function(a, b, c, d) {
                _.Md(b, function() {
                    this.v && this.v.push("loaded(" + c + "," + d + ")\n" + ah());
                    return Yg(this).load(d)
                }, a);
                $g(b,
                    (0, _.r)(a.H, a, c, d))
            },
            ch = function(a) {
                var b = {},
                    c = {},
                    d = [],
                    e = [],
                    f = function(a) {
                        if (!c[a]) {
                            var e = a instanceof _.O ? a.a : [];
                            c[a] = _.ib(e);
                            (0, _.u)(e, function(c) {
                                b[c] = b[c] || [];
                                b[c].push(a)
                            });
                            e.length || d.push(a);
                            (0, _.u)(e, f)
                        }
                    };
                for ((0, _.u)(a, f); d.length;) {
                    var h = d.shift();
                    e.push(h);
                    b[h] && (0, _.u)(b[h], function(a) {
                        _.gb(c[a], h);
                        c[a].length || d.push(a)
                    })
                }
                var k = {},
                    n = [];
                (0, _.u)(e, function(a) {
                    a instanceof _.O && (a = a.b, null == a || k[a] || (k[a] = !0, n.push(a)))
                });
                return {
                    services: e,
                    $b: n
                }
            },
            dh = [3, 4],
            eh = function(a) {
                _.z(this, a, 0, null,
                    null)
            };
        _.p(eh, _.y);
        var fh = function(a) {
            _.z(this, a, 0, null, null)
        };
        _.p(fh, _.y);
        fh.prototype.getTitle = function() {
            return _.C(this, Zg, 9)
        };
        fh.prototype.setTitle = function(a) {
            _.E(this, 9, a)
        };
        var gh = [1],
            hh = function(a) {
                _.z(this, a, 0, null, null)
            };
        _.p(hh, _.y);
        var ih = function(a) {
                if (a instanceof _.sc) return a;
                var b = null;
                a.$a && (b = a.La());
                a = _.Sa(a.ab ? a.Za() : String(a));
                return _.tc(a, b)
            },
            jh = function(a) {
                if (a instanceof _.sc && a.constructor === _.sc && a.g === _.rc) return a.a;
                _.va(a);
                return "type_error:SafeHtml"
            },
            kh = {},
            lh = function(a) {
                var b;
                if (_.Ca(a)) {
                    for (var c = Array(a.length), d = 0; d < a.length; d++) null != (b = a[d]) && (c[d] = "object" == typeof b ? lh(b) : b);
                    return c
                }
                if (_.gc && a instanceof window.Uint8Array) return new window.Uint8Array(a);
                c = {};
                for (d in a) null != (b = a[d]) && (c[d] = "object" ==
                    typeof b ? lh(b) : b);
                return c
            },
            mh = function(a, b) {
                for (var c = {}, d = [], e = [], f = _.Kg(a, _.Nf), h = 0; h < b.length; h++) {
                    var k = b[h],
                        n = _.Kg(a, k);
                    if (n) {
                        var q = new _.Fd;
                        c[k] = q;
                        n.Wa && (_.Nd(q, n.Wa()), _.Md(q, _.xa(function(a) {
                            return a
                        }, n)));
                        q.b(n)
                    } else {
                        var v;
                        k instanceof _.O ? v = ch([k]).$b : (n = a.j[k]) && (v = [n]);
                        v && (f && k instanceof _.O && f.Hc() && (_.Jg && f.Ic(_.Sg), f.Gc(k)), d.push.apply(d, v));
                        e.push(k)
                    }
                }
                for (h = 0; h < e.length; h++) k = e[h], n = d[h], q = new _.Fd((0, _.r)(a.D, a, k)), c[k] = q, (f = a.a[k]) || (a.a[k] = f = []), n && bh(a, q, k, n), _.Md(q, (0, _.r)(a.J,
                    a, k, n)), f.push({
                    Va: a,
                    d: q
                });
                return c
            },
            nh = function(a) {
                _.z(this, a, "capi:clstup", null, null)
            };
        _.p(nh, _.y);
        nh.messageId = "capi:clstup";
        var oh = function(a) {
            _.z(this, a, "h_cs", null, null)
        };
        _.p(oh, _.y);
        oh.messageId = "h_cs";
        oh.prototype.getState = function() {
            return _.A(this, 1)
        };
        var ph = function(a) {
            _.z(this, a, 0, null, null)
        };
        _.p(ph, _.y);
        var qh = function(a) {
            _.z(this, a, "uvc", null, null)
        };
        _.p(qh, _.y);
        qh.messageId = "uvc";
        qh.prototype.setVersion = function(a) {
            _.B(this, 1, a)
        };
        var rh = function(a) {
            _.z(this, a, 0, null, null)
        };
        _.p(rh, _.y);
        rh.prototype.a = function() {
            return _.A(this, 1)
        };
        var sh = function(a) {
            _.z(this, a, 0, null, null)
        };
        _.p(sh, _.y);
        sh.prototype.a = function() {
            return _.A(this, 1)
        };
        var th = function(a) {
            _.z(this, a, 0, null, null)
        };
        _.p(th, _.y);
        th.prototype.a = function() {
            return _.A(this, 1)
        };
        th.prototype.l = function() {
            return _.C(this, eh, 2)
        };
        th.prototype.setPosition = function(a) {
            _.E(this, 2, a)
        };
        var uh = function(a) {
            _.z(this, a, 0, null, null)
        };
        _.p(uh, _.y);
        uh.prototype.a = function() {
            return _.A(this, 1)
        };
        var vh = function(a) {
            _.z(this, a, 0, null, null)
        };
        _.p(vh, _.y);
        var wh = function(a) {
            _.z(this, a, 0, dh, null)
        };
        _.p(wh, _.y);
        var xh = function(a) {
            _.z(this, a, 0, null, null)
        };
        _.p(xh, _.y);
        var yh = function(a, b) {
                _.B(a, 2, b)
            },
            zh = function(a, b) {
                _.B(a, 1, b)
            },
            Ah = function(a) {
                _.z(this, a, 0, null, null)
            };
        _.p(Ah, _.y);
        var Bh = function(a) {
            _.z(this, a, 0, null, null)
        };
        _.p(Bh, _.y);
        Bh.prototype.a = function() {
            return _.A(this, 1)
        };
        var Ch = function(a) {
            _.z(this, a, 0, null, null)
        };
        _.p(Ch, _.y);
        Ch.prototype.a = function() {
            return _.A(this, 1)
        };
        var Dh = function(a) {
            _.z(this, a, 0, null, null)
        };
        _.p(Dh, _.y);
        Dh.prototype.a = function() {
            return _.A(this, 1)
        };
        var Eh = function(a) {
            _.z(this, a, 0, null, null)
        };
        _.p(Eh, _.y);
        Eh.prototype.a = function() {
            return _.A(this, 1)
        };
        var Fh = function(a) {
            _.z(this, a, "capi:f_vsm", null, null)
        };
        _.p(Fh, _.y);
        Fh.messageId = "capi:f_vsm";
        var Gh = function(a) {
            _.z(this, a, "capi:f_cvr", null, null)
        };
        _.p(Gh, _.y);
        Gh.messageId = "capi:f_cvr";
        var Hh = function(a) {
            _.z(this, a, "capi:f_cfr", null, null)
        };
        _.p(Hh, _.y);
        Hh.messageId = "capi:f_cfr";
        var Ih = function(a) {
            _.z(this, a, 0, null, null)
        };
        _.p(Ih, _.y);
        Ih.prototype.a = function() {
            return _.A(this, 1)
        };
        var Jh = function(a) {
            _.z(this, a, 0, gh, null)
        };
        _.p(Jh, _.y);
        Jh.prototype.getState = function() {
            return _.C(this, fh, 2)
        };
        Jh.prototype.setVersion = function(a) {
            _.B(this, 3, a)
        };
        var Kh = function(a) {
            _.z(this, a, 0, null, null)
        };
        _.p(Kh, _.y);
        Kh.prototype.a = function() {
            return _.A(this, 1)
        };
        Kh.prototype.l = function() {
            return _.A(this, 2)
        };
        Kh.prototype.setPosition = function(a) {
            _.B(this, 2, a)
        };
        Kh.prototype.pa = function() {
            return _.A(this, 3)
        };
        var Lh = function(a) {
            _.z(this, a, 0, null, null)
        };
        _.p(Lh, _.y);
        var Mh = function(a) {
            _.z(this, a, "uv:sn", null, null)
        };
        _.p(Mh, _.y);
        Mh.messageId = "uv:sn";
        Mh.prototype.getState = function() {
            return _.C(this, hh, 1)
        };
        var Nh = function(a) {
            _.z(this, a, "uv:smwc", null, null)
        };
        _.p(Nh, _.y);
        Nh.messageId = "uv:smwc";
        var Oh = function(a) {
                return a.parentWindow || a.defaultView
            },
            Ph = function(a) {
                var b = 0,
                    c = "",
                    d = function(a) {
                        _.Ca(a) ? (0, _.u)(a, d) : (a = ih(a), c += jh(a), a = a.La(), 0 == b ? b = a : 0 != a && b != a && (b = null))
                    };
                (0, _.u)(arguments, d);
                return _.tc(c, b)
            },
            Qh = function() {
                this.a = "";
                this.b = kh
            };
        Qh.prototype.ab = !0;
        Qh.prototype.Za = function() {
            return this.a
        };
        Qh.prototype.$a = !0;
        Qh.prototype.La = function() {
            return 1
        };
        var Rh = function(a) {
                return new a.constructor(lh(_.D(a)))
            },
            Sh = function(a, b, c) {
                a.b || (a.b = {});
                c = c || [];
                for (var d = [], e = 0; e < c.length; e++) d[e] = _.D(c[e]);
                a.b[b] = c;
                _.B(a, b, d)
            },
            Th = function(a, b, c) {
                a.b || (a.b = {});
                if (!a.b[c]) {
                    for (var d = _.A(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
                    a.b[c] = e
                }
                b = a.b[c];
                b == _.hc && (b = a.b[c] = []);
                return b
            },
            Uh = 0,
            Vh = ["talkgadget.google.com", "hangouts.google.com", ".hangouts.sandbox.google.com"],
            Wh = function(a, b, c) {
                if (_.Ca(b))
                    for (var d = 0; d < b.length; d++) Wh(a, String(b[d]), c);
                else null != b &&
                    c.push("&", a, "" === b ? "" : "=", (0, window.encodeURIComponent)(String(b)))
            },
            Xh = {},
            Yh = function(a) {
                a = new _.Q(a);
                var b = a.b;
                return !!a.b && -1 != _.cb(Vh, function(a) {
                    return _.Ia(b, a)
                })
            },
            Zh = function(a) {
                a = new _.Q(a);
                return !!a.b && ("google.com" == a.b || _.Ia(a.b, ".google.com"))
            },
            $h = {
                LOADING: 0,
                wb: 1,
                uc: 2,
                Ac: 3,
                ERROR: 4,
                LOADED: 5,
                vb: 6
            },
            ai = function(a, b) {
                for (var c in b) Wh(c, b[c], a);
                return a
            },
            bi = function(a, b, c) {
                for (c = c || 0; c < b.length; c += 2) Wh(b[c], b[c + 1], a);
                return a
            },
            ci = function(a) {
                if (a[1]) {
                    var b = a[0],
                        c = b.indexOf("#");
                    0 <= c && (a.push(b.substr(c)),
                        a[0] = b = b.substr(0, c));
                    c = b.indexOf("?");
                    0 > c ? a[1] = "?" : c == b.length - 1 && (a[1] = void 0)
                }
                return a.join("")
            },
            di = function(a, b) {
                var c = [];
                if (_.eb(b, a)) c.push("[...circular reference...]");
                else if (a && 50 > b.length) {
                    c.push(Wg(a) + "(");
                    for (var d = a.arguments, e = 0; d && e < d.length; e++) {
                        0 < e && c.push(", ");
                        var f;
                        f = d[e];
                        switch (typeof f) {
                            case "object":
                                f = f ? "object" : "null";
                                break;
                            case "string":
                                break;
                            case "number":
                                f = String(f);
                                break;
                            case "boolean":
                                f = f ? "true" : "false";
                                break;
                            case "function":
                                f = (f = Wg(f)) ? f : "[fn]";
                                break;
                            default:
                                f = typeof f
                        }
                        40 <
                            f.length && (f = f.substr(0, 40) + "...");
                        c.push(f)
                    }
                    b.push(a);
                    c.push(")\n");
                    try {
                        c.push(di(a.caller, b))
                    } catch (h) {
                        c.push("[exception trying to get caller]\n")
                    }
                } else a ? c.push("[...long stack...]") : c.push("[end]");
                return c.join("")
            },
            ei = function(a) {
                var b = typeof a;
                return "object" == b && a || "function" == b ? "o" + (a[_.ra] || (a[_.ra] = ++Uh)) : b.substr(0, 1) + a
            },
            fi = function() {
                this.a = Xh
            };
        fi.prototype.ab = !0;
        fi.prototype.Za = function() {
            return ""
        };
        fi.prototype.$a = !0;
        fi.prototype.La = function() {
            return 1
        };
        var gi = function(a) {
                return eval("(" + a + ")")
            },
            hi = null,
            ii = {
                Cc: 1,
                Bc: 2,
                yc: 3,
                tc: 4,
                xc: 6,
                zc: 10
            },
            ji = [1E4, 12E4, 144E5],
            ki = function(a) {
                var b = new _.Q(a);
                return Zh(a) && !!b.a && _.Ha(b.a, "/voice/")
            },
            li = function(a) {
                var b = new _.Q(a);
                return Zh(a) && !!b.a && _.Ha(b.a, "/client-channel")
            },
            mi = function(a) {
                var b = new _.Q(a);
                return Yh(a) && !!b.a && (_.Ha(b.a, "/webchat/frame") || _.Ha(b.a, "/webchat/u/0/frame"))
            },
            ni = function(a) {
                var b = new _.Q(a);
                return Zh(a) && !!b.a && _.Ha(b.a, "/webchat/extension-start")
            },
            oi = {
                urls: ["https://*.talkgadget.google.com/*",
                    "https://hangouts.google.com/*", "https://*.hangouts.sandbox.google.com/*"
                ]
            },
            pi = {
                urls: ["https://*.google.com/*"]
            },
            qi = function(a) {
                _.L.call(this);
                this.l = a;
                this.b = $h.LOADING;
                this.h = !1;
                this.a = !0;
                this.j = new _.N(this);
                _.I(this, this.j);
                this.j.listen(this.l.F(), "h_cs", this.m)
            };
        _.p(qi, _.L);
        qi.prototype.getState = function() {
            return this.b
        };
        qi.prototype.c = function() {
            return this.h
        };
        qi.prototype.m = function(a) {
            a = new oh(a.P);
            var b = a.getState();
            null != b && this.b != b && (this.b = b, _.M(this, "d"));
            b = _.A(a, 2);
            null != b && this.h != b && (this.h = b, _.M(this, "c"));
            a = _.A(a, 3);
            null != a && this.a != a && (this.a = a, _.M(this, "b"))
        };
        var ri = function(a) {
            _.z(this, a, 0, null, null)
        };
        _.p(ri, _.y);
        ri.prototype.Ca = function(a) {
            _.B(this, 13, a)
        };
        var si = function(a) {
            _.z(this, a, 0, null, null)
        };
        _.p(si, _.y);
        var ti = function(a) {
            _.z(this, a, 0, null, null)
        };
        _.p(ti, _.y);
        var ui = function(a) {
            _.z(this, a, 0, null, null)
        };
        _.p(ui, _.y);
        ui.prototype.a = function() {
            return _.A(this, 1)
        };
        vi = function() {
            for (; _.Je.length;) _.Je.pop().Z()
        };
        wi = function(a, b) {
            return ci(2 == arguments.length ? bi([a], arguments[1], 0) : bi([a], arguments, 1))
        };
        _.Td = function(a) {
            this.id = a
        };
        _.Td.prototype.toString = function() {
            return this.id
        };
        var xi = function(a) {
                _.Uc = !0;
                for (var b = (0, _.r)(a.b, a), c = 0; c < _.Sc.length; c++) _.Sc[c](b);
                _.Tc.push(a)
            },
            yi = function(a) {
                var b;
                (b = Xg(a || yi)) || (b = di(a || arguments.callee.caller, []));
                return b
            },
            zi = function(a, b, c) {
                c = c || _.l;
                var d = c.onerror,
                    e = !!b;
                _.Db && !_.Pb("535.3") && (e = !e);
                c.onerror = function(b, c, k, n, q) {
                    d && d(b, c, k, n, q);
                    a({
                        message: b,
                        fileName: c,
                        line: k,
                        Ec: n,
                        error: q
                    });
                    return e
                }
            },
            Ai = function(a) {
                this.a = new _.J;
                if (a) {
                    a = _.Oc(a);
                    for (var b = a.length, c = 0; c < b; c++) {
                        var d = a[c];
                        this.a.set(ei(d), d)
                    }
                }
            };
        _.g = Ai.prototype;
        _.g.removeAll = function(a) {
            a = _.Oc(a);
            for (var b = a.length, c = 0; c < b; c++) this.remove(a[c])
        };
        _.g.remove = function(a) {
            return this.a.remove(ei(a))
        };
        _.g.clear = function() {
            this.a.clear()
        };
        _.g.contains = function(a) {
            return _.Nc(this.a, ei(a))
        };
        _.g.S = function() {
            return this.a.S()
        };
        _.g.ha = function() {
            return this.a.ha(!1)
        };
        var Bi = function(a, b) {
                if ("textContent" in a) a.textContent = b;
                else if (3 == a.nodeType) a.data = b;
                else if (a.firstChild && 3 == a.firstChild.nodeType) {
                    for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
                    a.firstChild.data = b
                } else _.Ec(a), a.appendChild(_.wc(a).createTextNode(String(b)))
            },
            Ci = function(a) {
                a && a.parentNode && a.parentNode.removeChild(a)
            },
            Di = function(a, b) {
                this.width = a;
                this.height = b
            };
        Di.prototype.ceil = function() {
            this.width = Math.ceil(this.width);
            this.height = Math.ceil(this.height);
            return this
        };
        Di.prototype.floor = function() {
            this.width = Math.floor(this.width);
            this.height = Math.floor(this.height);
            return this
        };
        Di.prototype.round = function() {
            this.width = Math.round(this.width);
            this.height = Math.round(this.height);
            return this
        };
        var Ei = function(a, b) {
            this.x = _.m(a) ? a : 0;
            this.y = _.m(b) ? b : 0
        };
        Ei.prototype.ceil = function() {
            this.x = Math.ceil(this.x);
            this.y = Math.ceil(this.y);
            return this
        };
        Ei.prototype.floor = function() {
            this.x = Math.floor(this.x);
            this.y = Math.floor(this.y);
            return this
        };
        Ei.prototype.round = function() {
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            return this
        };
        var Fi = function(a, b) {
                return a == b || !(!a || !b) && a instanceof b.constructor && _.nc(_.D(a), _.D(b))
            },
            Gi = function(a) {
                var b = arguments.length;
                if (1 == b && _.Ca(arguments[0])) return Gi.apply(null, arguments[0]);
                for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
                return c
            },
            Hi = function(a) {
                var b = arguments.length;
                if (1 == b && _.Ca(arguments[0])) return Hi.apply(null, arguments[0]);
                if (b % 2) throw Error("b");
                for (var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
                return c
            },
            Ii = function(a, b) {
                var c = 0;
                _.Za(a, function(d, e) {
                    b.call(void 0,
                        d, e, a) && _.fb(a, e) && c++
                })
            },
            Ji = function(a) {
                if (_.l.execScript) _.l.execScript(a, "JavaScript");
                else if (_.l.eval) {
                    if (null == hi)
                        if (_.l.eval("var _evalTest_ = 1;"), "undefined" != typeof _.l._evalTest_) {
                            try {
                                delete _.l._evalTest_
                            } catch (d) {}
                            hi = !0
                        } else hi = !1;
                    if (hi) _.l.eval(a);
                    else {
                        var b = _.l.document,
                            c = b.createElement("SCRIPT");
                        c.type = "text/javascript";
                        c.defer = !1;
                        c.appendChild(b.createTextNode(a));
                        b.body.appendChild(c);
                        b.body.removeChild(c)
                    }
                } else throw Error("a");
            },
            Ki = function(a) {
                a.za = function() {
                    return a.mb ? a.mb : a.mb = new a
                }
            };
        var Li = function() {
            var a = window;
            if (!a.location) try {
                _.cc(a)
            } catch (c) {}
            var b = a.location && a.location.ancestorOrigins;
            if (_.m(b)) return b && b.length ? b[b.length - 1] == a.location.origin : !0;
            try {
                return _.m(a.top.location.href)
            } catch (c) {
                return !1
            }
        };
        var Mi = {},
            Ni = function() {
                var a = {};
                a.location = window.document.location.toString();
                if (Li()) try {
                    a["top.location"] = window.top.location.toString()
                } catch (c) {
                    a["top.location"] = "[external]"
                } else a["top.location"] = "[external]";
                for (var b in Mi) try {
                    a[b] = Mi[b].call()
                } catch (c) {
                    a[b] = "[error] " + c.message
                }
                return a
            };
        var Oi = function() {
            _.F.call(this)
        };
        _.p(Oi, _.F);
        var Ri = function(a) {
                var b = Pi;
                b.b = a;
                Qi(b)
            },
            Ti = function(a) {
                var b = Pi;
                b.I || a instanceof _.Gd || (b.b ? Si(b.b, a, null) : b.a && 10 > b.a.length && b.a.push([null, a]))
            },
            Qi = function(a) {
                a.a && ((0, _.u)(a.a, function(a) {
                    Si(this.b, a[1], a[0])
                }, a), a.a = null)
            },
            Pi = new Oi,
            Ui = function(a) {
                Ti(a)
            };
        var Vi = function(a) {
                this.b = a;
                this.g = {};
                this.a = []
            },
            Si = function(a, b, c) {
                var d = Ni();
                d["call-stack"] = yi();
                c && (d.message = c);
                var e;
                b instanceof Error ? e = b : e = b || "";
                var f;
                b = "";
                if (e) {
                    b = e.message || "unknown";
                    for (var h = c = 0; h < b.length; ++h) c = 31 * c + b.charCodeAt(h) >>> 0;
                    b = c
                }
                c = "";
                for (f in d) c = c + f + ":" + d[f] + ":";
                f = b + "::" + c;
                b = a.g[f];
                b || (b = {
                    time: 0,
                    count: 0
                }, a.g[f] = b);
                if (1E4 > (0, _.sa)() - b.time) b.count++, 1 == b.count && (d = Ni(), d.message = "Throttling: " + f, a.b.b(e, d));
                else {
                    b.count && (d["dropped-instances"] = b.count);
                    b.time = (0, _.sa)();
                    for (f = b.count = 0; f < a.a.length; f++) a.a[f](e, d);
                    a.b.b(e, d)
                }
            };
        var Wi = function(a) {
            _.F.call(this);
            this.c = a;
            this.g = !0;
            this.a = !1
        };
        _.p(Wi, _.F);
        Wi.prototype.b = function(a) {
            return Xi(this, a)
        };
        var Yi = function(a, b) {
                return (b ? "__wrapper_" : "__protected_") + (a[_.ra] || (a[_.ra] = ++Uh)) + "__"
            },
            Xi = function(a, b) {
                var c = Yi(a, !0);
                b[c] || ((b[c] = Zi(a, b))[Yi(a, !1)] = b);
                return b[c]
            },
            Zi = function(a, b) {
                var c = function() {
                    if (a.I) return b.apply(this, arguments);
                    try {
                        return b.apply(this, arguments)
                    } catch (d) {
                        if (!(d && "object" === typeof d && d.message && 0 == d.message.indexOf("Error in protected function: ") || "string" === typeof d && 0 == d.indexOf("Error in protected function: "))) {
                            a.c(d);
                            if (!a.g) throw a.a && ("object" === typeof d && d &&
                                "message" in d ? d.message = "Error in protected function: " + d.message : d = "Error in protected function: " + d), d;
                            throw new $i(d);
                        }
                    } finally {}
                };
                c[Yi(a, !1)] = b;
                return c
            },
            bj = function(a) {
                for (var b = _.Ea("window"), c = ["requestAnimationFrame", "mozRequestAnimationFrame", "webkitAnimationFrame", "msRequestAnimationFrame"], d = 0; d < c.length; d++) {
                    var e = c[d];
                    c[d] in b && aj(a, e)
                }
            },
            aj = function(a, b) {
                var c = _.Ea("window"),
                    d = c[b];
                c[b] = function(b, c) {
                    _.t(b) && (b = _.xa(Ji, b));
                    b = Xi(a, b);
                    if (d.apply) return d.apply(this, arguments);
                    var e = b;
                    if (2 <
                        arguments.length) var f = Array.prototype.slice.call(arguments, 2),
                        e = function() {
                            b.apply(this, f)
                        };
                    return d(e, c)
                };
                c[b][Yi(a, !1)] = d
            };
        Wi.prototype.w = function() {
            var a = _.Ea("window"),
                b;
            b = a.setTimeout;
            b = b[Yi(this, !1)] || b;
            a.setTimeout = b;
            b = a.setInterval;
            b = b[Yi(this, !1)] || b;
            a.setInterval = b;
            Wi.A.w.call(this)
        };
        var $i = function(a) {
            _.Fa.call(this, "Error in protected function: " + (a && a.message ? String(a.message) : String(a)));
            (a = a && a.stack) && _.t(a) && (this.stack = a)
        };
        _.p($i, _.Fa);
        var dj = function(a, b, c) {
            _.L.call(this);
            this.h = b || null;
            this.c = {};
            this.l = cj;
            this.j = a;
            c || (this.a = null, _.x && !_.Pb("10") ? zi((0, _.r)(this.b, this), !1, null) : (this.a = new Wi((0, _.r)(this.b, this)), aj(this.a, "setTimeout"), aj(this.a, "setInterval"), bj(this.a), xi(this.a)))
        };
        _.p(dj, _.L);
        var ej = function(a, b) {
            _.K.call(this, "g");
            this.error = a;
            this.context = b
        };
        _.p(ej, _.K);
        var cj = function(a, b, c, d) {
            _.Ke(a, null, b, c, d)
        };
        dj.prototype.b = function(a, b) {
            var c;
            c = _.Ea("window.location.href");
            if (_.t(a)) c = {
                message: a,
                name: "Unknown error",
                lineNumber: "Not available",
                fileName: c,
                stack: "Not available"
            };
            else {
                var d, e, f = !1;
                try {
                    d = a.lineNumber || a.line || "Not available"
                } catch (P) {
                    d = "Not available", f = !0
                }
                try {
                    e = a.fileName || a.filename || a.sourceURL || _.l.$googDebugFname || c
                } catch (P) {
                    e = "Not available", f = !0
                }
                c = !f && a.lineNumber && a.fileName && a.stack && a.message && a.name ? a : {
                    message: a.message || "Not available",
                    name: a.name || "UnknownError",
                    lineNumber: d,
                    fileName: e,
                    stack: a.stack || "Not available"
                }
            }
            d = b ? _.qb(b) : {};
            if (this.h) try {
                this.h(c, d)
            } catch (P) {}
            f = c.message.substring(0, 1900);
            e = c.stack;
            try {
                var h = wi(this.j, "script", c.fileName, "error", f, "line", c.lineNumber),
                    k;
                a: {
                    var n = this.c,
                        q;
                    for (q in n) {
                        k = !1;
                        break a
                    }
                    k = !0
                }
                k || (h = ci(ai([h], this.c)));
                k = {};
                k.trace = e;
                if (d)
                    for (var v in d) k["context." + v] = d[v];
                var Z, ja = ai([], k);
                ja[0] = "";
                Z = ja.join("");
                _.Aa(null) && (Z = Z.substring(0, null));
                this.l(h, "POST", Z, this.m)
            } catch (P) {}
            try {
                _.M(this, new ej(c, d))
            } catch (P) {}
        };
        dj.prototype.w = function() {
            _.H(this.a);
            dj.A.w.call(this)
        };
        var hj = function() {
                Pi.a = [];
                var a = new dj("_/jserror", void 0, !0),
                    a = new Vi(a);
                fj.b = a;
                Ri(a);
                var b = null,
                    a = function(a) {
                        _.l.$googDebugFname && a && a.message && !a.fileName && (a.message += " in " + _.l.$googDebugFname);
                        b ? a && a.message && (a.message += " [Possibly caused by: " + b + "]") : b = String(a);
                        Ti(a)
                    };
                _.wa("_DumpException", a);
                _.wa("_B_err", a);
                (0, _.u)([_.l].concat([]), _.xa(zi, _.xa(gj, !1), !0));
                if (!_.x || _.Pb(10)) a = new Wi(Ui), a.g = !0, a.a = !0, bj(a), aj(a, "setTimeout"), aj(a, "setInterval"), xi(a), fj.a = a
            },
            gj = function(a, b) {
                -1 != b.message.indexOf("Error in protected function: ") || (b.error && b.error.stack ? Ti(b.error) : a || Ti(b))
            },
            ij = function() {};
        ij.prototype.a = null;
        ij.prototype.b = null;
        var fj = new ij;
        var jj = function(a, b) {
            _.N.call(this);
            if (this.h = !!b) {
                if (hj(), this.a = fj.b) this.b = new _.J, this.g = (0, _.r)(this.l, this), this.a.a.push(this.g)
            } else this.c = new dj(a, void 0, void 0), this.listen(this.c, "g", this.j)
        };
        _.p(jj, _.N);
        jj.prototype.w = function() {
            _.H(this.c);
            this.h && (_.H(fj.a), this.a && _.gb(this.a.a, this.g));
            jj.A.w.call(this)
        };
        jj.prototype.l = function(a, b) {
            var c = a.name || a.message ? a.name + ": " + a.message : b.message,
                d = "Browser stack: " + a.stack + "\nContext stack:\n" + b["call-stack"];
            _.Nc(this.b, d) ? this.b.get(d).nc++ : this.b.set(d, {
                title: c,
                stack: d,
                timestamp: (0, _.sa)(),
                nc: 1
            })
        };
        jj.prototype.j = function(a) {
            if (a = a.error) try {
                var b = "Message: " + a.message + "\nFile name: " + a.fileName + "\nLine number: " + a.lineNumber + "\n\nBrowser stack:\n" + a.stack + "\n\nJS stack traversal:\n" + yi();
                window.document.defaultView && window.document.defaultView.console && window.document.defaultView.console.error(b)
            } catch (c) {}
        };
        var kj = function(a, b) {
            this.b = _.ib(a);
            this.a = 0;
            this.g = b || !1
        };
        kj.prototype.reset = function() {
            this.a = 0
        };
        kj.prototype.L = function(a) {
            var b = this.b[this.a],
                b = (.5 + 1 * Math.random()) * b;
            a && lj(this);
            return b
        };
        var lj = function(a) {
            a.g && a.a == a.b.length - 1 || a.a++
        };
        var mj = {},
            nj = function() {
                delete mj.O
            },
            oj = function() {
                mj.O(2)
            },
            pj = function() {
                mj.O(3)
            };
        var qj = function(a, b, c) {
            _.F.call(this);
            this.g = null != c ? (0, _.r)(a, c) : a;
            this.b = b;
            this.O = (0, _.r)(this.lc, this);
            this.a = []
        };
        _.p(qj, _.F);
        _.g = qj.prototype;
        _.g.Pa = !1;
        _.g.sa = null;
        _.g.Tb = function(a) {
            this.a = arguments;
            this.sa ? this.Pa = !0 : rj(this)
        };
        _.g.stop = function() {
            this.sa && (_.De(this.sa), this.sa = null, this.Pa = !1, this.a = [])
        };
        _.g.w = function() {
            qj.A.w.call(this);
            this.stop()
        };
        _.g.lc = function() {
            this.sa = null;
            this.Pa && (this.Pa = !1, rj(this))
        };
        var rj = function(a) {
            a.sa = _.Ce(a.O, a.b);
            a.g.apply(null, a.a)
        };
        var sj, tj, uj = function() {
                tj || (tj = new _.L);
                return tj
            },
            xj = function(a, b, c) {
                c && sj && c != sj ? a() : vj(_.xa(wj, a, b))
            },
            Bj = function(a) {
                window.chrome.identity.onSignInChanged.addListener(yj);
                window.chrome.alarms.onAlarm.addListener(zj);
                window.addEventListener("online", Aj);
                wj(a)
            },
            Ej = function() {
                window.chrome.alarms.clear("auth-token");
                window.chrome.alarms.onAlarm.removeListener(zj);
                window.chrome.identity.onSignInChanged.removeListener(yj);
                Cj(void 0);
                Dj.stop();
                window.removeEventListener("online", Aj)
            },
            Fj = new kj([1,
                2, 3, 4
            ], !0),
            Dj = new qj(_.xa(xj, _.Da, !1), 6E4),
            Aj = (0, _.r)(Dj.Tb, Dj),
            Cj = function(a) {
                if (a || sj != a) sj = a, _.M(uj(), "h")
            },
            wj = function(a, b) {
                window.chrome.identity ? (_.S("Getting new auth token."), window.chrome.identity.getAuthToken({
                    interactive: !!b
                }, function(b) {
                    b ? (_.S("Got auth token."), Fj.reset()) : _.S("Didn't get auth token: %s", window.chrome.runtime.lastError.message);
                    Cj(b);
                    b = sj ? 15 : Math.max(1, Fj.L(!0));
                    _.S("Setting up an auth token alarm for %s minutes.", b);
                    window.chrome.alarms.create("auth-token", {
                        periodInMinutes: b
                    });
                    a()
                })) : a()
            },
            vj = function(a) {
                window.chrome.identity ? sj ? (_.S("Removing cached auth token."), window.chrome.identity.removeCachedAuthToken({
                    token: sj
                }, a)) : a() : a()
            },
            zj = function(a) {
                "auth-token" == a.name && wj(_.Da)
            },
            yj = function(a, b) {
                b ? (_.S("Signing in detected."), xj(oj, !1)) : (_.S("Signing out detected."), vj(pj), Cj(void 0))
            };
        var Gj = new _.O("a"),
            Hj = new _.O("b"),
            Ij = new _.O("c"),
            Jj = new _.O("d"),
            Kj = new _.O("e"),
            Lj = new _.O("f"),
            Mj = new _.O("g"),
            Nj = new _.O("h"),
            Oj = new _.O("i"),
            Pj = new _.O("j"),
            Qj = new _.O("k"),
            Rj = new _.O("l"),
            Sj = new _.O("m"),
            Tj = new _.O("n"),
            Uj = new _.O("o");
        var Vj = function() {
            _.F.call(this);
            this.a = new Ai
        };
        _.p(Vj, _.F);
        Vj.prototype.oa = function(a, b) {
            for (var c, d = this.a.S(), e = 0; e < d.length; e++) try {
                c = d[e](a, b)
            } catch (f) {
                _.S(f)
            }
            return c
        };
        Vj.prototype.addListener = function(a) {
            this.a.a.set(ei(a), a)
        };
        Vj.prototype.removeListener = function(a) {
            this.a.remove(a)
        };
        Vj.prototype.w = function() {
            this.a.clear();
            Vj.A.w.call(this)
        };
        var Wj = function(a, b, c) {
            _.F.call(this);
            this.a = a;
            this.g = b || 0;
            this.b = c;
            this.O = (0, _.r)(this.Sb, this)
        };
        _.p(Wj, _.F);
        _.g = Wj.prototype;
        _.g.Ba = 0;
        _.g.w = function() {
            Wj.A.w.call(this);
            this.stop();
            delete this.a;
            delete this.b
        };
        _.g.start = function(a) {
            this.stop();
            this.Ba = _.Ce(this.O, _.m(a) ? a : this.g)
        };
        _.g.stop = function() {
            0 != this.Ba && _.De(this.Ba);
            this.Ba = 0
        };
        _.g.Sb = function() {
            this.Ba = 0;
            this.a && this.a.call(this.b)
        };
        var Xj = function(a, b, c, d) {
            this.top = a;
            this.a = b;
            this.b = c;
            this.left = d
        };
        Xj.prototype.contains = function(a) {
            return this && a ? a instanceof Xj ? a.left >= this.left && a.a <= this.a && a.top >= this.top && a.b <= this.b : a.x >= this.left && a.x <= this.a && a.y >= this.top && a.y <= this.b : !1
        };
        Xj.prototype.ceil = function() {
            this.top = Math.ceil(this.top);
            this.a = Math.ceil(this.a);
            this.b = Math.ceil(this.b);
            this.left = Math.ceil(this.left);
            return this
        };
        Xj.prototype.floor = function() {
            this.top = Math.floor(this.top);
            this.a = Math.floor(this.a);
            this.b = Math.floor(this.b);
            this.left = Math.floor(this.left);
            return this
        };
        Xj.prototype.round = function() {
            this.top = Math.round(this.top);
            this.a = Math.round(this.a);
            this.b = Math.round(this.b);
            this.left = Math.round(this.left);
            return this
        };
        var Yj = function(a, b, c, d) {
                this.left = a;
                this.top = b;
                this.width = c;
                this.height = d
            },
            Zj = function(a, b) {
                return a == b ? !0 : a && b ? a.left == b.left && a.width == b.width && a.top == b.top && a.height == b.height : !1
            };
        Yj.prototype.contains = function(a) {
            return a instanceof Ei ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
        };
        var ak = function(a, b) {
            var c = b.x < a.left ? a.left - b.x : Math.max(b.x - (a.left + a.width), 0),
                d = b.y < a.top ? a.top - b.y : Math.max(b.y - (a.top + a.height), 0);
            return c * c + d * d
        };
        Yj.prototype.ceil = function() {
            this.left = Math.ceil(this.left);
            this.top = Math.ceil(this.top);
            this.width = Math.ceil(this.width);
            this.height = Math.ceil(this.height);
            return this
        };
        Yj.prototype.floor = function() {
            this.left = Math.floor(this.left);
            this.top = Math.floor(this.top);
            this.width = Math.floor(this.width);
            this.height = Math.floor(this.height);
            return this
        };
        Yj.prototype.round = function() {
            this.left = Math.round(this.left);
            this.top = Math.round(this.top);
            this.width = Math.round(this.width);
            this.height = Math.round(this.height);
            return this
        };
        var V = function(a, b, c) {
            _.N.call(this);
            this.j = a;
            this.G = !!b;
            this.Ga = c;
            this.m = [];
            this.b = this.g = this.a = null;
            this.onBoundsChanged = new Vj;
            _.I(this, this.onBoundsChanged);
            this.D = null;
            b && _.Hb && (this.D = new bk(this));
            ck && (this.K = new Wj(this.Fa, 5E3, this))
        };
        _.p(V, _.N);
        var ck = _.Gb || !1;
        V.prototype.w = function() {
            this.b && !this.b.closed && (this.v(), this.b = null);
            if (this.a) {
                var a = this.a;
                this.a = null;
                a.close()
            }
            this.g && (a = this.g, this.g = null, window.chrome.windows.remove(a, function() {
                window.chrome.runtime.lastError && _.S("Closing window. %s", window.chrome.runtime.lastError.message || "")
            }));
            V.A.w.call(this)
        };
        V.prototype.create = function(a) {
            window.chrome.app.window ? dk(this, a) : window.chrome.windows && ek(this, a)
        };
        var dk = function(a, b) {
                var c = {};
                (0, _.u)("id focused visibleOnAllWorkspaces alwaysOnTop frame alphaEnabled hidden resizable state".split(" "), function(a) {
                    null != b[a] && (c[a] = b[a])
                });
                c.outerBounds = {
                    width: Math.round(b.width),
                    height: Math.round(b.height)
                };
                null != b.top && null != b.left && (c.outerBounds.top = Math.round(b.top), c.outerBounds.left = Math.round(b.left));
                a.G && (c.id = a.Ga);
                null != c.focused || (c.focused = !1);
                fk(a.D, !!c.alwaysOnTop);
                window.chrome.app.window.create(b.url, c, (0, _.r)(a.Ia, a, c))
            },
            ek = function(a, b) {
                var c = {
                    type: "popup"
                };
                (0, _.u)(["url", "focused", "state", "type"], function(a) {
                    null != b[a] && (c[a] = b[a])
                });
                (0, _.u)(["left", "top", "width", "height"], function(a) {
                    null != b[a] && (c[a] = Math.round(b[a]))
                });
                c.url += "?" + b.id;
                gk[b.id] = (0, _.r)(a.Ra, a, c);
                window.chrome.windows.create(c, (0, _.r)(a.Ta, a, c))
            };
        V.prototype.Ia = function(a, b) {
            var c = this;
            if (b)
                if (this.I) b.close();
                else {
                    this.a = b;
                    this.b = b.contentWindow;
                    var d = a.outerBounds;
                    !b.id && d && null != d.left && null != d.left && b.outerBounds.setPosition(d.left, d.top);
                    b.onBoundsChanged.addListener(function() {
                        return c.v()
                    });
                    b.onClosed.addListener(function() {
                        c.a && !c.I && c.H()
                    });
                    var e = this.b.document;
                    "complete" == e.readyState ? hk(this) : e.addEventListener("readystatechange", function() {
                        "complete" == e.readyState && hk(c)
                    })
                }
            else _.S("Failed to create an app window: %s", window.chrome.runtime.lastError &&
                window.chrome.runtime.lastError.message || "")
        };
        V.prototype.Ta = function(a, b) {
            var c = this;
            if (b)
                if (this.I) window.chrome.windows.remove(b.id);
                else {
                    this.g = b.id;
                    var d = new _.Be(1E4);
                    _.I(this, d);
                    this.listen(d, "tick", this.v);
                    var e = function(a) {
                            a == c.g ? d.start() : d.ra && (d.stop(), c.v())
                        },
                        f = function(a) {
                            c.g && a == c.g && !c.I && c.H()
                        };
                    window.chrome.windows.onFocusChanged.addListener(e);
                    window.chrome.windows.onRemoved.addListener(f);
                    _.G(this, function() {
                        window.chrome.windows.onFocusChanged.removeListener(e);
                        window.chrome.windows.onRemoved.removeListener(f)
                    });
                    hk(this)
                }
            else _.H(this)
        };
        V.prototype.Ra = function(a, b) {
            this.I ? b.close() : (this.b = b, hk(this))
        };
        var hk = function(a) {
                if ((a.a || a.g) && a.b)
                    if (ik(a)) _.H(a);
                    else {
                        var b = a.b.document.body,
                            c = a.j;
                        b && (c = "number" == typeof c ? 0 < c ? 1 : 0 > c ? -1 : 0 : null == c ? null : c ? -1 : 1) && (b.style.textAlign = -1 == c ? "right" : "left", b.dir = -1 == c ? "rtl" : "ltr");
                        if (null != a.m) {
                            for (; a.m.length && !ik(a);) a.m.shift().call(a, a);
                            a.m = null
                        }
                    }
            },
            jk = function(a, b) {
                ik(a) ? _.H(a) : null == a.m ? b.call(a, a) : a.m.push(b)
            },
            ik = function(a) {
                return !(!a.b || !a.b.closed)
            },
            W = function(a) {
                return !a.b || ik(a) ? null : a.b
            },
            mk = function(a) {
                return kk(a.D) ? _.qd(!1) : a.b && a.b.document && a.b.document.hasFocus() ?
                    _.qd(!0) : a.a ? _.qd(!a.a.isMinimized() && a.a.isAlwaysOnTop()) : a.g ? lk(a).then(function(a) {
                        return a ? "minimized" != a.state && a.alwaysOnTop || a.focused : !1
                    }) : _.qd(!1)
            },
            lk = function(a) {
                return new _.md(function(b) {
                    return window.chrome.windows.get(a.g, {}, b)
                })
            };
        V.prototype.focus = function(a) {
            var b = this;
            a ? nk(this) : jk(this, function() {
                return nk(b)
            })
        };
        var nk = function(a) {
                a.a ? a.a.focus() : a.g && window.chrome.windows.update(a.g, {
                    focused: !0
                })
            },
            ok = function(a, b) {
                jk(a, function() {
                    b && a.K && a.K.start();
                    a.a ? b ? a.a.drawAttention() : a.a.clearAttention() : a.g && window.chrome.windows.update(a.g, {
                        drawAttention: b
                    })
                })
            };
        V.prototype.Fa = function() {
            var a = this;
            window.chrome.idle.queryState(Math.max(15, 10), function(b) {
                "active" == b ? ok(a, !1) : a.K.start()
            })
        };
        var pk = function(a, b) {
                jk(a, function() {
                    var c;
                    if (c = a.a && a.a.setShape)(c = a.D) ? (c.c = b, c = !c.a) : c = !0;
                    c && a.a.setShape({
                        rects: b
                    })
                })
            },
            qk = function(a, b) {
                jk(a, function() {
                    fk(a.D, b) && a.a && a.a.setAlwaysOnTop(b)
                })
            },
            rk = function(a, b) {
                jk(a, function() {
                    return a.a && a.a.setVisibleOnAllWorkspaces(b)
                })
            };
        V.prototype.show = function() {
            var a = this;
            jk(this, function() {
                return a.a && a.a.show(!1)
            })
        };
        V.prototype.hide = function() {
            var a = this;
            jk(this, function() {
                return a.a && a.a.hide()
            })
        };
        var sk = function(a) {
            return a.a ? (a = a.a.outerBounds, new Yj(a.left, a.top, a.width, a.height)) : a.b && a.b.outerWidth && a.b.outerHeight ? new Yj(a.b.screenX, a.b.screenY, a.b.outerWidth, a.b.outerHeight) : null
        };
        V.prototype.setPosition = function(a, b) {
            this.a ? (this.a.outerBounds.left = a, this.a.outerBounds.top = b) : this.g && window.chrome.windows.update(this.g, {
                left: a,
                top: b
            })
        };
        var tk = function(a, b) {
            jk(a, function() {
                var c = Math.round(_.A(b, 3)),
                    d = Math.round(_.A(b, 4));
                a.b.resizeTo(c, d);
                a.setPosition(Math.round(_.A(b, 1)), Math.round(_.A(b, 2)))
            })
        };
        V.prototype.Ca = function(a) {
            var b = this;
            jk(this, function() {
                return b.b.document.title = a
            })
        };
        V.prototype.v = function() {
            this.I || this.onBoundsChanged.oa(this)
        };
        V.prototype.H = function() {
            this.v();
            this.a = this.g = this.b = null;
            _.H(this)
        };
        var gk = {};
        _.wa("__onExtWindowLoad", function(a) {
            var b = a.location.search.substring(1);
            gk[b] ? (gk[b](a), delete gk[b]) : a.close()
        });
        var bk = function(a) {
                var b = this;
                this.a = !1;
                this.b = a;
                this.c = [];
                this.g = !0;
                jk(this.b, function() {
                    return b.b.listen(W(b.b), "focus", function() {
                        var a;
                        b && b.a ? (b.a = !1, b.b.a.setShape({
                            rects: b.c
                        }), b.b.a.setAlwaysOnTop(b.g), a = !1) : a = !0;
                        return a
                    })
                })
            },
            kk = function(a) {
                return !(!a || !a.a)
            },
            fk = function(a, b) {
                if (!a) return !0;
                a.g = b;
                return !a.a
            };
        var uk = _.eb(window.chrome.runtime.getManifest().permissions, "webview"),
            vk = _.eb(window.chrome.runtime.getManifest().permissions, "identity"),
            wk = _.eb(window.chrome.runtime.getManifest().permissions, "cookies"),
            xk = _.eb(window.chrome.runtime.getManifest().permissions, "app.window.shape");
        var zk = function(a) {
            var b = this;
            _.L.call(this);
            this.c = a.get(Kj);
            this.b = a.get(Jj);
            this.a = null;
            _.G(this, function() {
                return _.H(b.a)
            });
            yk(this)
        };
        _.p(zk, _.L);
        var Ak = new _.Td("i"),
            Bk = ["SSID", "SAPISID"],
            Ck = function(a) {
                vk ? xj(function() {}, !0) : wk && (a.a ? a.a.focus(!0) : (a.a = new V(a.b.j()), a.a.create({
                    url: a.c.j,
                    type: "normal",
                    width: 800,
                    height: 800
                }), _.G(a.a, function() {
                    return a.a = null
                })))
            },
            yk = function(a) {
                if (vk) uj().listen("h", function() {
                    return _.M(a, Ak)
                }), Bj(function() {}), _.G(a, Ej);
                else if (wk) {
                    var b = function(b) {
                        !b.removed && ".google.com" == b.cookie.domain && _.eb(Bk, b.cookie.name) && (_.H(a.a), _.M(a, Ak))
                    };
                    window.chrome.cookies.onChanged.addListener(b);
                    _.G(a, function() {
                        return window.chrome.cookies.onChanged.removeListener(b)
                    })
                }
            };
        var Dk = function(a) {
            _.z(this, a, "capi:oa_tc", null, null)
        };
        _.p(Dk, _.y);
        Dk.messageId = "capi:oa_tc";
        var Ek = function(a) {
            this.a = a.get(_.T)
        };
        var Ik = function(a) {
            var b = this;
            _.L.call(this);
            this.c = a;
            this.a = a.get(_.T);
            this.j = 0;
            _.G(this, function() {
                return _.De(b.j)
            });
            this.b = a.get(Pj);
            this.v = new Ek(a);
            this.h = "";
            window.chrome.runtime.onUpdateAvailable.addListener(function(a) {
                _.S("Update available; details: '%s'", JSON.stringify(a));
                b.h != a.version && (b.h = a.version, Fk(b, !1, 864E5 + 288E5 * Math.random()), Gk(b, !0))
            });
            var c = new _.N(this);
            _.I(this, c);
            c.listen(this.a.F(), "uv_r_rr", this.R);
            c.listen(this.a.F(), "uv_r_rdr", this.K);
            c.listen(this.a.F(), "uv_r_rrr",
                this.T);
            c.listen(this.a.F(), "h_cs", this.l);
            this.l();
            c.listen(this.a.F(), "uv_r_hrd", this.M);
            c.listen(this.a.F(), "uvc", this.N);
            c.listen(this.a.F(), "h_odd", this.H);
            c.listen(uj(), "h", this.m);
            c.listen(a.get(Kj), Hk, this.o);
            Gk(this, !0)
        };
        _.p(Ik, _.L);
        Ik.prototype.R = function(a) {
            a = _.A(new _.If(a.P), 1);
            this.b.set("UvReloadState", a).then(function() {
                return window.chrome.runtime.reload()
            })
        };
        Ik.prototype.K = function() {
            var a = this.b.get("UvReloadState"),
                b = new _.Hf;
            _.B(b, 1, a);
            this.a.sendMessage(b)
        };
        Ik.prototype.T = function() {
            this.b.remove("UvReloadState")
        };
        var Fk = function(a, b, c) {
            var d = a.I ? null : a.c.get(Kj);
            d && d.c() && 1 != d.a && 3 != d.a && 6 != d.a ? (d = new _.Jf, _.B(d, 1, b), a.a.sendMessage(d)) : b = !0;
            c = Math.max(c, 1E4);
            _.Ce(function() {
                b ? window.chrome.runtime.reload() : Fk(this, !0, 1E4)
            }, c, a)
        };
        Ik.prototype.l = function() {
            _.De(this.j);
            this.j = _.Ce(this.D, 3E4, this)
        };
        Ik.prototype.N = function(a) {
            this.b.set("UvReloadConfig", a.P);
            Gk(this, !1) || Jk(this)
        };
        Ik.prototype.H = function() {
            _.M(this, "k")
        };
        var Gk = function(a, b) {
            var c = new qh(a.b.get("UvReloadConfig") || []),
                d = window.chrome.runtime.getManifest().version,
                e = _.A(c, 1) || 1;
            if (0 <= _.Xa(d, e)) return !0;
            if (!a.h || 0 > _.Xa(a.h, e)) return b && Kk(a.c.get(Kj), 10), !1;
            var c = _.C(c, ph, 2),
                d = _.A(c, 1) + Math.random() * _.A(c, 3),
                f = _.A(c, 2) + Math.random() * _.A(c, 3);
            _.Ce(function() {
                return Fk(a, !1, f)
            }, d);
            return !0
        };
        Ik.prototype.D = function() {
            Lk(this.c.get(Jj).a) || oj()
        };
        Ik.prototype.M = function() {
            _.M(this, "j")
        };
        Ik.prototype.m = function() {
            if (sj) {
                var a = this.v,
                    b = sj,
                    c = new Dk;
                _.B(c, 1, b);
                a.a.sendMessage(c)
            }
        };
        Ik.prototype.o = function() {
            4 == this.c.get(Kj).a && this.m()
        };
        var Jk = function(a) {
            window.chrome.runtime.requestUpdateCheck(function(b, c) {
                _.S("Update check status: '%s', details: '%s'", b, JSON.stringify(c));
                c.version || Gk(a, !0)
            })
        };
        var Mk = function(a) {
            _.L.call(this);
            this.a = 1;
            this.j = this.h = null;
            a = a.get(_.T);
            a.F().listen("h_exts", this.l, void 0, this);
            this.b = new qi(a);
            _.I(this, this.b);
            this.b.listen("d", this.o, void 0, this);
            this.b.listen("b", this.m, void 0, this)
        };
        _.p(Mk, _.L);
        var Nk = new _.Td("l"),
            Hk = new _.Td("m");
        Mk.prototype.m = function() {
            this.b.a || (Kk(this, 4), _.M(this, Nk))
        };
        Mk.prototype.o = function() {
            switch (this.b.getState()) {
                case $h.vb:
                    Kk(this, 3);
                    break;
                case $h.wb:
                    this.b.a || (Kk(this, 4), _.M(this, Nk))
            }
        };
        var Kk = function(a, b) {
            a.a != b && (_.S("Wabel changing status from: %s to: %s", a.a, b), a.a = b, _.M(a, Hk), _.M(a, Nk))
        };
        Mk.prototype.c = function() {
            return this.b.c()
        };
        Mk.prototype.l = function(a) {
            a = new _.Rf(a.P);
            _.A(a, 3) && (this.h = _.A(a, 3));
            _.A(a, 4) && (this.j = _.A(a, 4));
            _.A(a, 1) || Kk(this, 3);
            _.M(this, Nk)
        };
        var Ok = function(a) {
            _.z(this, a, "cpai:w_hsc", null, null)
        };
        _.p(Ok, _.y);
        Ok.messageId = "cpai:w_hsc";
        var Pk = function(a) {
            _.z(this, a, 0, null, null)
        };
        _.p(Pk, _.y);
        var Qk = function(a) {
            _.z(this, a, "h_opc", null, null)
        };
        _.p(Qk, _.y);
        Qk.messageId = "h_opc";
        var Rk = function(a) {
            _.z(this, a, "h_po", null, null)
        };
        _.p(Rk, _.y);
        Rk.messageId = "h_po";
        var Tk = function(a) {
            _.z(this, a, "h_crrq", null, Sk)
        };
        _.p(Tk, _.y);
        var Sk = [
            [2, 3, 4]
        ];
        Tk.messageId = "h_crrq";
        var Vk = function(a) {
            _.z(this, a, "h_crrs", null, Uk)
        };
        _.p(Vk, _.y);
        var Uk = [
            [3]
        ];
        Vk.messageId = "h_crrs";
        var Wk = function(a) {
            _.z(this, a, "h_icr", null, null)
        };
        _.p(Wk, _.y);
        Wk.messageId = "h_icr";
        Wk.prototype.a = function() {
            return _.A(this, 1)
        };
        var Xk = function(a) {
            _.z(this, a, "h_sc", null, null)
        };
        _.p(Xk, _.y);
        Xk.messageId = "h_sc";
        var Zk = function(a) {
            var b = this;
            _.N.call(this);
            this.c = new _.J;
            this.o = 0;
            this.m = function(a) {
                return Yk(b, a)
            };
            this.h = !1;
            this.g = a.get(Kj);
            this.a = a.get(_.T);
            a = a.get(Oj);
            this.listen(a, "j", this.l);
            this.l();
            this.b = new _.J;
            this.listen(this.a.F(), "cpai:w_hsc", this.v);
            this.listen(this.a.F(), "h_crrs", this.G);
            this.listen(this.g, Nk, this.j);
            _.G(this, this.j, this);
            this.j()
        };
        _.p(Zk, _.N);
        var Yk = function(a, b) {
            var c = $k(a);
            if (b.name != window.chrome.runtime.id && b.name && b.name != c) b.disconnect();
            else {
                var d = a.o++,
                    e = function(b, c) {
                        if (_.t(b)) {
                            var e = new Tk(gi(b));
                            if (_.C(e, Pk, 1)) {
                                var f = _.jc(_.C(e, Pk, 1), 3, "");
                                f && f == $k(a) && (f = _.C(e, Pk, 1), _.B(f, 1, d), a.a.sendMessage(e))
                            }
                        } else if (f = $k(a), "getCentralJid" == b.eventType) c.postMessage({
                            jid: f
                        });
                        else if ("rhsc" == b.eventType) e = JSON.parse(b.jid), f = "", _.Nc(a.b, e) && (f = a.b.get(e).context), c.postMessage({
                            jid: f
                        });
                        else if ("po" == b.eventType) e = b.jid, f = new Rk, _.B(f,
                            1, e), a.a.sendMessage(f);
                        else if (f) {
                            f = b.jid;
                            switch (b.eventType) {
                                case "ocfp":
                                    e = new Qk(JSON.parse(f)[3]);
                                    break;
                                case "showChat":
                                    e = new Xk, _.B(e, 1, f)
                            }
                            e && a.a.sendMessage(e)
                        }
                    },
                    f = function() {
                        a.c.remove(d);
                        b.onMessage.removeListener(e);
                        b.onDisconnect.removeListener(f)
                    };
                a.c.set(d, b);
                b.onMessage.addListener(e);
                b.onDisconnect.addListener(f);
                _.$c(function() {
                    var a = new Vk,
                        d = new Pk;
                    _.B(d, 3, c);
                    _.E(a, 1, d);
                    b.postMessage(a.j())
                })
            }
        };
        Zk.prototype.G = function(a) {
            a = new Vk(a.P);
            var b = _.jc(_.C(a, Pk, 1), 1, 0);
            (b = this.c.get(b)) && b.postMessage(a.j())
        };
        var $k = function(a) {
            return !a.I && !a.g.I && a.g.c() && 4 == a.g.a && a.g.h || ""
        };
        Zk.prototype.l = function() {
            var a = new Wk;
            _.B(a, 2, !0);
            this.a.sendMessage(a)
        };
        Zk.prototype.v = function(a) {
            var b = this,
                c = new Ok(a.P),
                d = _.A(c, 1);
            d && (al(this, d), a = new bl(_.A(c, 2)), this.b.set(d, a), c = _.A(c, 3) || 6E4, a.ub = _.Ce(function() {
                return al(b, d)
            }, c))
        };
        var al = function(a, b) {
            if (_.Nc(a.b, b)) {
                var c = a.b.get(b);
                _.De(c.ub);
                a.b.remove(b)
            }
        };
        Zk.prototype.j = function() {
            $k(this) ? this.h || (window.chrome.runtime.onConnectExternal.addListener(this.m), this.h = !0) : this.h && (window.chrome.runtime.onConnectExternal.removeListener(this.m), this.c.forEach(function(a) {
                return a.disconnect()
            }), this.c.clear(), this.h = !1)
        };
        var bl = function(a) {
            this.context = a;
            this.ub = null
        };
        var cl = function(a, b, c, d, e) {
            _.F.call(this);
            this.a = a;
            this.ea = b;
            this.b = typeof b;
            this.ac = c ? c : !1;
            this.da = !0;
            this.Wb = d ? d : !1;
            this.ia = e ? e : !1
        };
        _.p(cl, _.F);
        _.g = cl.prototype;
        _.g.w = function() {
            cl.A.w.call(this);
            this.a = "";
            this.ea = null;
            this.b = ""
        };
        _.g.id = function() {
            return this.a
        };
        _.g.type = function() {
            return this.b
        };
        _.g.L = function() {
            return this.ea
        };
        _.g.setEnabled = function(a) {
            this.da = a
        };
        var el = function(a) {
            _.F.call(this);
            this.a = new _.J;
            this.b = _.Sf("https://hangouts.google.com").toString();
            a && dl(this, a)
        };
        _.p(el, _.F);
        el.prototype.w = function() {
            el.A.w.call(this);
            for (var a = this.a.V(), b = 0; b < a.length; ++b) _.H(this.a.get(a[b]));
            delete this.a
        };
        el.prototype.getItem = function(a) {
            return _.Nc(this.a, a) ? this.a.get(a) : null
        };
        el.prototype.setItem = function(a) {
            this.a.set(a.id(), a)
        };
        var dl = function(a, b) {
                for (var c in b) {
                    var d = b[c],
                        e;
                    _.Nc(a.a, c) ? (e = a.a.get(c), e.ea = d.value, d.changed && (e.ia = d.changed)) : (e = new cl(c, d.value, d.multiple, d.inverse, d.changed), e.setEnabled(!d.disabled));
                    a.a.set(c, e)
                }
            },
            fl = function(a) {
                for (var b = a.a.V(), c = {}, d = 0; d < b.length; d++) {
                    var e = b[d],
                        f = a.a.get(e);
                    c[e] = {
                        value: f.L(),
                        type: f.type(),
                        multiple: f.ac,
                        disabled: !f.da,
                        inverse: f.Wb,
                        changed: f.ia
                    }
                }
                return c
            },
            gl = function(a) {
                return (a = a.a.get("ServerName")) && a.da ? a.L() : null
            },
            Lk = function(a) {
                return (a = a.a.get("IgnoreUnresponsiveWebview")) && a.da ? a.L() : !1
            },
            hl = function(a) {
                return (a = a.a.get("locale")) && a.da ? a.L() : ""
            },
            il = function(a) {
                a = gl(a) ? _.Sf("https://" + gl(a)).toString() : a.b;
                _.S("getApplicationPath: " + a);
                return a
            };
        var jl = function(a, b) {
                this.a = new _.J;
                this.b = new _.L;
                if (a)
                    for (var c in a) this.a.set(c, a[c]);
                if (b)
                    for (c in b) this.a.set(c, b[c]);
                window.chrome.storage.onChanged.addListener((0, _.r)(this.dc, this))
            },
            kl = new _.Td("n"),
            ll = function() {
                return new _.md(function(a) {
                    window.chrome.storage.local.get(null, function(b) {
                        window.chrome.runtime.lastError && _.S("chrome local storage read error %s", window.chrome.runtime.lastError);
                        window.chrome.storage.sync.get(null, function(c) {
                            window.chrome.runtime.lastError && _.S("chrome sync storage read error %s",
                                window.chrome.runtime.lastError);
                            a(new jl(b, c))
                        })
                    })
                })
            };
        _.g = jl.prototype;
        _.g.get = function(a) {
            return this.a.get(a, null)
        };
        _.g.has = function(a) {
            return _.Nc(this.a, a)
        };
        _.g.set = function(a, b, c) {
            var d = _.sd();
            this.a.set(a, b);
            var e = {};
            e[a] = b;
            (c ? window.chrome.storage.sync : window.chrome.storage.local).set(e, function() {
                window.chrome.runtime.lastError && _.S("chrome storage set key: %s, error: %s", a, window.chrome.runtime.lastError);
                d.b(void 0)
            });
            return d.a
        };
        _.g.remove = function(a, b) {
            this.a.remove(a);
            (b ? window.chrome.storage.sync : window.chrome.storage.local).remove(a, function() {
                window.chrome.runtime.lastError && _.S("chrome storage remove key: %s, error: %s", a, window.chrome.runtime.lastError)
            })
        };
        _.g.clear = function() {
            this.a.clear();
            window.chrome.storage.local.clear(function() {
                window.chrome.runtime.lastError && _.S("chrome local storage clear error: %s", window.chrome.runtime.lastError)
            });
            window.chrome.storage.sync.clear(function() {
                window.chrome.runtime.lastError && _.S("chrome sync storage clear error: %s", window.chrome.runtime.lastError)
            })
        };
        _.g.F = function() {
            return this.b
        };
        _.g.dc = function(a, b) {
            if ("sync" == b)
                for (var c in a) {
                    var d = a[c];
                    null != d.newValue ? this.a.set(c, d.newValue) : this.a.remove(c);
                    _.M(this.b, kl)
                }
        };
        var ml = [25, 33, 50, 66, 75, 90, 100, 110, 125, 150, 175, 200, 250, 300, 400, 500],
            nl = ml.length - 1,
            ol = function(a, b) {
                return _.Aa(a) && (0, window.isFinite)(a) ? 0 > a ? b ? 6 : 0 : a > nl ? b ? 6 : nl : a : 6
            },
            pl = function(a) {
                return ml[ol(a, !0)]
            };
        var rl = function(a) {
            _.L.call(this);
            this.a = new el;
            this.l = {};
            this.b = a.get(Pj);
            this.h = a.get(_.T);
            var b = new _.N(this);
            _.I(this, b);
            b.listen(this.b.F(), kl, this.c);
            b.listen(this.h.F(), "uv:sn", this.m);
            b.listen(this.h.F(), "uv:sr", this.c);
            mh(a, [Oj])[Oj].then(function(a) {
                b.listen(a, "j", this.c)
            }, void 0, this);
            ql(this)
        };
        _.p(rl, _.L);
        var ql = function(a) {
            a.a.setItem(new cl("UnobfuscatedMode", !1));
            a.a.setItem(new cl("ServerName", null));
            a.a.setItem(new cl("experimentz", null));
            a.a.setItem(new cl("UseBrightBackground", !1));
            a.a.setItem(new cl("IgnoreUnresponsiveWebview", !1));
            a.a.setItem(new cl("locale", ""));
            var b = a.b.get("settings");
            b && dl(a.a, b);
            a.b.set("settings", fl(a.a));
            a.c()
        };
        rl.prototype.j = function() {
            var a = hl(this.a) || window.chrome.i18n.getMessage("@@ui_locale");
            return _.qc.test(a)
        };
        var vl = function(a, b) {
            var c = sl(a, !0),
                d = Rh(c),
                e = !1,
                f = !1,
                h = !1,
                k = !1,
                n = !1,
                q = !1;
            if (null != _.A(b, 1)) {
                var e = _.A(d, 1) != _.A(b, 1),
                    v = _.A(b, 1);
                _.B(d, 1, v)
            }
            null != _.C(b, eh, 2) && (v = _.C(b, eh, 2), _.E(d, 2, v));
            null != _.A(b, 3) && (v = _.A(b, 3), _.B(d, 3, v));
            null != _.A(b, 4) && (v = _.A(b, 4), _.B(d, 4, v));
            null != _.A(b, 14) && (n = _.A(d, 14) != _.A(b, 14), v = _.A(b, 14), _.B(d, 14, v));
            if (null != _.A(b, 5) && (h = _.A(d, 5) != _.A(b, 5), v = _.A(b, 5), _.B(d, 5, v), h)) {
                var v = _.C(d, eh, 2) || tl(!!_.A(b, 5)),
                    Z = null != _.A(d, 14) ? _.A(d, 14) : 6,
                    Z = pl(Z) / pl(6),
                    ja = Z * (_.A(d, 5) ? 350 : 576);
                _.B(v, 3, ja);
                _.B(v, 4, 576 * Z);
                _.E(d, 2, v);
                a.b.remove("mwp");
                ul(a);
                v = _.A(b, 5);
                _.B(b, 6, v)
            }
            null != _.A(b, 6) && (f = _.A(d, 6) != _.A(b, 6), v = _.A(b, 6), _.B(d, 6, v));
            null != _.A(b, 7) && (v = _.A(b, 7), _.B(d, 7, v));
            null != _.A(b, 8) && (v = _.A(b, 8), _.B(d, 8, v));
            null != _.A(b, 9) && (v = _.A(b, 9), _.B(d, 9, v));
            null != _.A(b, 13) && (k = _.A(d, 13) != _.A(b, 13), v = _.A(b, 13), _.B(d, 13, v));
            null != _.A(b, 15) && (q = _.A(d, 15) != _.A(b, 15), v = _.A(b, 15), _.B(d, 15, v));
            null != _.A(b, 16) && (v = _.A(b, 16), _.B(d, 16, v));
            Fi(c, d) || (a.b.set("uv_settings", _.D(d)), e && _.M(a, "p"), f && _.M(a,
                "o"), h && _.M(a, "r"), k && _.M(a, "s"), n && _.M(a, "t"), q && _.M(a, "q"), a.c())
        };
        rl.prototype.m = function(a) {
            a = (new Mh(a.P)).getState();
            var b = new ti,
                c = _.A(a, 1);
            _.B(b, 1, c);
            c = _.A(a, 3);
            _.B(b, 3, c);
            c = _.A(a, 4);
            _.B(b, 4, c);
            c = _.A(a, 2);
            _.B(b, 5, c);
            c = _.A(a, 6);
            _.B(b, 7, c);
            c = _.A(a, 7);
            _.B(b, 8, c);
            c = _.A(a, 8);
            _.B(b, 9, c);
            c = _.A(a, 11);
            _.B(b, 13, c);
            c = _.A(a, 12);
            _.B(b, 6, c);
            c = _.A(a, 15);
            _.B(b, 14, c);
            c = _.A(a, 19);
            _.B(b, 15, c);
            c = _.A(a, 21);
            _.B(b, 16, c);
            vl(this, b);
            b = new si;
            a = _.C(a, Lh, 14);
            _.E(b, 1, a);
            a = wl(this, !0);
            null == _.C(b, Lh, 1) || Fi(_.C(b, Lh, 1), _.C(a, Lh, 1)) || (b = _.C(b, Lh, 1), _.E(a, 1, b));
            this.b.set("app_sync_settings",
                _.D(a), !0);
            this.c()
        };
        var sl = function(a, b) {
                var c = a.b.get("uv_settings"),
                    c = c ? new ti(c) : new ti;
                if (b) return c;
                null == _.A(c, 5) && _.B(c, 5, !1);
                a.j() && _.B(c, 5, !1);
                var d = !!_.A(c, 5);
                null == _.A(c, 1) && _.B(c, 1, !d);
                if (!_.C(c, eh, 2)) {
                    var e = tl(d);
                    _.E(c, 2, e)
                }
                null == _.A(c, 4) && _.B(c, 4, d);
                null == _.A(c, 6) && _.B(c, 6, d);
                null == _.A(c, 3) && _.B(c, 3, !0);
                null == _.A(c, 7) && _.B(c, 7, !0);
                null == _.A(c, 8) && _.B(c, 8, !0);
                null == _.A(c, 9) && _.B(c, 9, !0);
                null == _.A(c, 13) && _.B(c, 13, !0);
                null == _.A(c, 14) && _.B(c, 14, 6);
                null == _.A(c, 15) && _.B(c, 15, !1);
                null == _.A(c, 16) && _.B(c, 16, 288);
                return c
            },
            wl = function(a, b) {
                var c = a.b.get("app_sync_settings"),
                    c = c ? new si(c) : new si;
                if (b) return c;
                if (null == _.C(c, Lh, 1)) {
                    var d = new Lh;
                    _.E(c, 1, d)
                }
                return c
            };
        rl.prototype.c = function() {
            var a = sl(this),
                b = wl(this),
                c = new hh,
                d = _.A(a, 1);
            _.B(c, 1, d);
            _.B(c, 17, xl);
            d = _.A(a, 5) && xl;
            _.B(c, 2, d);
            d = _.A(a, 3);
            _.B(c, 3, d);
            d = _.A(a, 4);
            _.B(c, 4, d);
            d = _.A(a, 5) && yl;
            _.B(c, 5, d);
            d = _.A(a, 7);
            _.B(c, 6, d);
            d = _.A(a, 9);
            _.B(c, 8, d);
            d = _.A(a, 8);
            _.B(c, 7, d);
            _.B(c, 10, zl);
            d = _.A(a, 13);
            _.B(c, 11, d);
            _.B(c, 18, Al);
            d = _.A(a, 6) && Al;
            _.B(c, 12, d);
            d = window.chrome.runtime.getManifest().version;
            _.B(c, 13, d);
            _.B(c, 20, window.chrome.runtime.id);
            _.B(c, 16, uk);
            d = uk ? _.A(a, 14) : 6;
            _.B(c, 15, d);
            b = _.C(b, Lh, 1);
            _.E(c, 14, b);
            b = _.A(a,
                15);
            _.B(c, 19, b);
            a = _.A(a, 16);
            _.B(c, 21, a);
            a = new Mh;
            _.E(a, 1, c);
            this.h.sendMessage(a)
        };
        var Bl = function(a) {
                a = sl(a);
                return _.A(a, 1)
            },
            Cl = function(a) {
                if (!Al) return !1;
                a = sl(a);
                return _.A(a, 6)
            },
            Dl = function(a) {
                return xl ? _.zb(a.l, "UseShapedWindow", function() {
                    return _.A(sl(a), 5)
                }) : !1
            },
            El = function(a) {
                a.b.has("auto_ui") || a.b.set("auto_ui", !0);
                return a.b.get("auto_ui")
            },
            Fl = function(a) {
                a.b.has("wvpp") || a.b.set("wvpp", "-" + Math.random());
                return "uv" + a.b.get("wvpp")
            },
            ul = function(a) {
                a.b.has("mwp") || a.b.set("mwp", "-" + Math.random());
                return a.b.get("mwp")
            },
            Gl = function(a) {
                a = sl(a);
                return _.A(a, 13)
            },
            Hl = function(a) {
                return uk ?
                    _.A(sl(a), 14) : 6
            },
            Il = function(a, b) {
                if (uk) {
                    var c = new ti;
                    _.B(c, 14, b);
                    vl(a, c)
                }
            },
            tl = function(a) {
                var b = window.screen,
                    c = new eh,
                    d = Math.min(b.availHeight, 576);
                _.B(c, 4, d);
                _.B(c, 2, (b.availTop + b.availHeight - d) / 2);
                a ? (a = Math.min(b.availWidth, 350), _.B(c, 3, a), _.B(c, 1, b.availLeft + b.availWidth - a)) : (a = Math.min(b.availWidth, 576), _.B(c, 3, a), _.B(c, 1, (b.availLeft + b.availWidth - a) / 2));
                return c
            },
            xl = xk && !0 && !_.vb(),
            yl = xl && (_.w("CrOS") || _.wb()),
            zl = window.chrome.app.window ? window.chrome.app.window.canSetVisibleOnAllWorkspaces() : !1,
            Al = !!window.chrome.app.window;
        var Jl = function(a) {
                if (a.classList) return a.classList;
                a = a.className;
                return _.t(a) && a.match(/\S+/g) || []
            },
            Kl = function(a, b) {
                return a.classList ? a.classList.contains(b) : _.eb(Jl(a), b)
            },
            Ll = function(a, b) {
                a.classList ? a.classList.add(b) : Kl(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
            },
            Ml = function(a, b) {
                a.classList ? a.classList.remove(b) : Kl(a, b) && (a.className = (0, _.$a)(Jl(a), function(a) {
                    return a != b
                }).join(" "))
            },
            Nl = function(a) {
                var b = ["CzdJYb", "LQr1Lc"];
                a.classList ? (0, _.u)(b, function(b) {
                    Ml(a, b)
                }) : a.className = (0, _.$a)(Jl(a), function(a) {
                    return !_.eb(b, a)
                }).join(" ")
            },
            Ol = function(a, b, c) {
                c ? Ll(a, b) : Ml(a, b)
            };
        var Vl = function(a, b, c, d, e) {
            var f = this;
            _.L.call(this);
            this.c = a;
            this.b = a.get(Jj);
            this.a = uk ? c.createElement("webview") : c.createElement("iframe");
            uk && (this.a.setAttribute("partition", Fl(this.b)), this.a.setZoomMode && (this.a.setZoomMode("per-origin"), this.hb()), e && this.a.setAttribute("allowtransparency", !0));
            this.o = this.b.j();
            this.h = null;
            c.body.appendChild(this.a);
            _.t(b) ? this.a.src = b : b.attach(this.a);
            d && (this.a.id = d, this.a.name = d);
            a = new _.N(this);
            _.I(this, a);
            this.j = new Wj(this.a.terminate || _.Da, 5E3, this.a);
            _.I(this, this.j);
            this.a.request && (this.a.request.onBeforeSendHeaders.addListener(Pl, pi, Ql), this.m = function(a) {
                return Rl(f, a)
            }, this.a.request.onCompleted.addListener(this.m, pi), this.a.request.onErrorOccurred.addListener(Sl, pi), this.l = function(a) {
                if ("xmlhttprequest" == a.type && ni(a.url) && ni(a.redirectUrl)) {
                    var b;
                    b = f.b.a;
                    a = new _.Q(a.redirectUrl);
                    Yh(a) && (new _.Q(b.b)).b != a.b ? (b.b = _.Sf("https://" + a.b).toString(), b = !0) : b = !1;
                    b && f.c.get(Gj).b()
                }
            }, this.a.request.onBeforeRedirect.addListener(this.l, oi));
            a.listen(this.a,
                "newwindow", this.v).listen(this.a, "permissionrequest", this.jc).listen(this.a, "close", this.ec).listen(this.a, "responsive", this.D).listen(this.a, "unresponsive", this.H).listen(this.a, "exit", Tl).listen(this.a, "loadabort", Ul).listen(this.b, "t", this.hb);
            c.defaultView && a.listen(c.defaultView, "focus", this.mc)
        };
        _.p(Vl, _.L);
        var Wl = [1E3, 5E3, 3E4, 3E5],
            Xl = new _.J,
            Ql = ["blocking", "requestHeaders"];
        Vl.prototype.show = function(a) {
            Ol(this.a, "QWxtS", a)
        };
        Vl.prototype.D = function() {
            this.j.stop()
        };
        Vl.prototype.H = function() {
            Lk(this.b.a) || this.j.start()
        };
        Vl.prototype.v = function(a) {
            var b = a.a,
                c = b.targetUrl;
            mi(c) || "about:blank" == c ? (a.g(), "centralRoster" != b.name && "gtn-roster-iframe-id" != b.name && Yl(this, b)) : (b.window.discard(), window.chrome.browser.openTab({
                url: c
            }, function() {
                window.chrome.runtime.lastError && _.S("Failed to open a new tab: %s, %s", c, window.chrome.runtime.lastError.message)
            }))
        };
        var Yl = function(a, b) {
            var c = new V(a.o);
            _.I(a, c);
            c.create({
                url: "dialog.html",
                width: b.initialWidth,
                height: b.initialHeight
            });
            _.G(c, function() {
                return a.c.get(_.T).sendMessage(new Nh)
            });
            jk(c, (0, _.r)(function() {
                var a = new Vl(this.c, b.window, W(c).document);
                _.G(c, function() {
                    return _.H(a)
                });
                _.pe(a, "u", function() {
                    return _.H(c)
                });
                c.focus()
            }, a))
        };
        _.g = Vl.prototype;
        _.g.jc = function(a) {
            a = a.a;
            switch (a.permission) {
                case "media":
                case "filesystem":
                    Zh(a.url) && a.request.allow();
                    break;
                case "loadplugin":
                    "google-talk" == a.identifier && a.request.allow();
                    break;
                default:
                    _.S("Unknown permission request for '%s'", a.permission)
            }
        };
        _.g.ec = function() {
            _.M(this, "u")
        };
        _.g.w = function() {
            if (this.a.request) try {
                this.a.request.onBeforeSendHeaders.removeListener(Pl), this.a.request.onCompleted.removeListener(this.m), this.a.request.onErrorOccurred.removeListener(Sl), this.a.request.onBeforeRedirect.removeListener(this.l)
            } catch (a) {
                _.S("Exception: %s", a.toString())
            }
            try {
                Ci(this.a)
            } catch (a) {
                _.S("Exception: %s", a.toString())
            }
            Vl.A.w.call(this)
        };
        _.g.mc = function() {
            this.a.ownerDocument.activeElement != this.a && this.a.focus()
        };
        _.g.hb = function() {
            this.a.setZoom && this.a.setZoom(ml[ol(Hl(this.b), !0)] / 100)
        };
        var Pl = function(a) {
                var b = a.url;
                (0, _.Fc)(b) && _.S("Before sending headers for request: %s", b);
                var c = sj;
                if (c) return Xl.set(a.requestId, c), a = [].concat(a.requestHeaders || []), Ii(a, function(a) {
                    return "authorization" == a.name.toLowerCase()
                }), a.push({
                    name: "Authorization",
                    value: "Bearer " + c
                }), (0, _.Fc)(b) && _.S("Setting auth token for request: %s", b), {
                    requestHeaders: a
                };
                _.S("No auth token available for the request: %s", b)
            },
            Rl = function(a, b) {
                var c = b.requestId,
                    d = b.statusCode,
                    e = b.url;
                (400 <= d || 300 <= d && (0, _.Fc)(e)) && _.S("Detected %s status code for request %s",
                    d, e);
                var f = Xl.get(c);
                Xl.remove(c);
                switch (d) {
                    case 400:
                        if (!mi(e) || !uk) break;
                        _.Ce(function() {
                            return a.a.reload()
                        }, Zl(a));
                        break;
                    case 401:
                        if (ki(e)) break;
                        xj(function() {
                            (window.chrome.identity ? sj : 1) || oj()
                        }, !1, f);
                        break;
                    case 403:
                        li(e) && (xj(_.Da, !1, f), oj())
                }
            },
            Tl = function(a) {
                _.S("Exit: %s", a.a.reason);
                oj()
            },
            Ul = function(a) {
                a = a.a;
                _.S("Load abort: %s, isTopLevel: %s, %s", a.reason, a.isTopLevel, a.url);
                a.isTopLevel && mj.O(1)
            },
            Sl = function(a) {
                Xl.remove(a.requestId);
                switch (a.type) {
                    case "sub_frame":
                        _.S("Request error for a sub-frame: %s", a.url);
                        break;
                    case "main_frame":
                        _.S("Request error for the main frame: %s", a.url);
                        mj.O(1);
                        break;
                    case "script":
                        _.S("Request error for a script: %s", a.url), 0 == a.frameId && mj.O(1)
                }
            },
            Zl = function(a) {
                a.h || (a.h = new kj(Wl, !0));
                return a.h.L(!0)
            };
        var bm = function(a, b, c) {
            var d = this;
            _.L.call(this);
            $l++;
            this.h = c;
            this.j = b;
            this.b = "39C9B5E" + $l;
            this.c = a.get(_.T);
            _.jg(this.c);
            var e = new _.Kf;
            _.B(e, 1, this.b);
            _.B(e, 2, this.j);
            _.B(e, 3, this.h.locale);
            _.B(e, 4, this.h.a);
            b = uk ? _.Af(this.j, "/webchat/blank") : new _.Q("host.html");
            _.qf(b, e.j());
            a = new Vl(a, b.toString(), window.document, "centralRoster");
            _.I(this, a);
            this.a = a.a;
            a = new _.N(this);
            _.I(this, a);
            _.$e(a, this.a, ["loadstop", "load"], function() {
                _.lg(d.c, d.a.contentWindow, d.b, uk ? "google.com" : window.chrome.runtime.id);
                uk && am(d, e)
            });
            a.listen(this.a, "consolemessage", this.l)
        };
        _.p(bm, _.L);
        var $l = 0,
            am = function(a, b) {
                var c = sj,
                    c = c ? {
                        Authorization: "Bearer " + c
                    } : void 0;
                _.Ke(_.Tf(b), function(b) {
                    b = b.target;
                    _.Ue(b) ? cm(a, _.Xe(b)) : (_.S("Error fetching host bundle: (" + b.j + ") " + (_.t(b.h) ? b.h : String(b.h))), mj.O(1))
                }, void 0, void 0, c, 25E3);
                _.G(a, vi)
            };
        bm.prototype.l = function(a) {
            window.console.log("***", a.a.message)
        };
        var cm = function(a, b) {
                a.a.executeScript({
                    code: b + "//# sourceURL=bundle.js"
                }, function() {
                    return a.a.executeScript({
                        file: "scripts/host.js"
                    }, function() {})
                })
            },
            dm = function(a, b) {
                this.a = a;
                this.locale = b
            };
        var em = function(a) {
            _.F.call(this);
            this.l = a;
            this.a = a.get(Kj);
            this.o = a.get(Uj);
            this.m = a.get(Jj);
            this.c = null;
            this.J = new qj(this.b, 6E4, this);
            _.I(this, this.J);
            mj.O = (0, _.r)(this.gc, this);
            _.G(this, nj);
            this.h = new kj(ji, !0);
            this.j = new Wj(this.oc, this.h.L(), this);
            _.I(this, this.j);
            this.g = new Wj(this.ob, 4E4, this);
            _.I(this, this.g);
            a = new _.N(this);
            _.I(this, a);
            a.listen(this.a, Hk, this.Fb);
            a.listen(this.o, Ak, this.cc);
            a = _.Af(il(this.m.a), "/webchat/_/jserror").toString();
            null != a && new jj(a, void 0);
            10 != this.a.a && (_.S("Starting application."),
                this.b())
        };
        _.p(em, _.F);
        em.prototype.w = function() {
            fm(this);
            em.A.w.call(this)
        };
        em.prototype.b = function() {
            if (!this.I) {
                _.S("Reloading host...");
                Kk(this.a, 2);
                fm(this);
                var a = this.l,
                    b = this.m.a,
                    c = il(b),
                    d = b.a.get("UnobfuscatedMode"),
                    d = d && d.da && d.L() ? "du" : "";
                gl(b) || new _.Q(il(b));
                var e = b.a.get("experimentz");
                e && e.da && e.L();
                (b = hl(b)) || (b = window.chrome.i18n.getMessage("@@ui_locale"));
                this.c = new bm(a, c, new dm(d, b));
                _.I(this, this.c)
            }
        };
        var fm = function(a) {
            _.H(a.c);
            a.c = null
        };
        _.g = em.prototype;
        _.g.Fb = function() {
            this.j.stop();
            this.g.stop();
            switch (this.a.a) {
                case 2:
                    this.g.start();
                    break;
                case 6:
                    this.j.start(this.h.L());
                    break;
                case 4:
                    this.h.reset();
                    break;
                case 10:
                    fm(this)
            }
        };
        _.g.oc = function() {
            lj(this.h);
            this.b()
        };
        _.g.gc = function(a) {
            fm(this);
            switch (a) {
                case 1:
                    this.ob();
                    break;
                case 2:
                    if (3 == this.a.a) break;
                    Fk(this.l.get(Oj), !0, 1E4);
                    break;
                case 3:
                    Kk(this.a, 3)
            }
        };
        _.g.ob = function() {
            this.I || (this.g.stop(), Kk(this.a, 6))
        };
        _.g.cc = function() {
            3 == this.a.a && this.b()
        };
        var hm = function(a, b) {
            _.F.call(this);
            this.b = a.get(Jj);
            this.c = a.get(Pj);
            this.h = b;
            var c = window.document;
            this.h && (c = W(this.h).document);
            this.a = new _.vc(c);
            this.g = new _.N(this);
            _.I(this, this.g);
            gm(this);
            c = this.b.a;
            this.a.B("jsmodeField").checked = c.getItem("UnobfuscatedMode").L();
            this.a.B("experimentz").value = c.getItem("experimentz").L();
            this.a.B("brightBackgroundField").checked = c.getItem("UseBrightBackground").L();
            this.a.B("ignoreUnresponsiveWebviewField").checked = c.getItem("IgnoreUnresponsiveWebview").L();
            this.a.B("localeField").value = c.getItem("locale").L();
            this.g.listen(this.a.B("serverSelect"), "change", this.m);
            this.g.listen(this.a.B("doneButton"), "click", this.l);
            this.g.listen(this.a.B("cancelButton"), "click", this.j)
        };
        _.p(hm, _.F);
        var im = "autopush.hangouts.sandbox.google.com preprod.hangouts.sandbox.google.com daily-0.hangouts.sandbox.google.com daily-1.hangouts.sandbox.google.com daily-2.hangouts.sandbox.google.com daily-3.hangouts.sandbox.google.com daily-4.hangouts.sandbox.google.com daily-5.hangouts.sandbox.google.com daily-6.hangouts.sandbox.google.com devpool-00.hangouts.sandbox.google.com devpool-01.hangouts.sandbox.google.com devpool-02.hangouts.sandbox.google.com devpool-03.hangouts.sandbox.google.com devpool-04.hangouts.sandbox.google.com devpool-05.hangouts.sandbox.google.com devpool-06.hangouts.sandbox.google.com devpool-07.hangouts.sandbox.google.com devpool-08.hangouts.sandbox.google.com devpool-09.hangouts.sandbox.google.com devpool-10.hangouts.sandbox.google.com devpool-11.hangouts.sandbox.google.com devpool-12.hangouts.sandbox.google.com devpool-13.hangouts.sandbox.google.com devpool-14.hangouts.sandbox.google.com devpool-15.hangouts.sandbox.google.com devpool-16.hangouts.sandbox.google.com devpool-17.hangouts.sandbox.google.com devpool-18.hangouts.sandbox.google.com devpool-19.hangouts.sandbox.google.com devpool-20.hangouts.sandbox.google.com devpool-21.hangouts.sandbox.google.com devpool-22.hangouts.sandbox.google.com devpool-23.hangouts.sandbox.google.com devpool-24.hangouts.sandbox.google.com".split(" "),
            jm =
            function(a, b, c, d, e) {
                a = a.a.a.createElement("option");
                a.innerText = b;
                a.id = c;
                a.value = d;
                e && (a.selected = "selected");
                return a
            },
            gm = function(a) {
                var b = a.a.B("serverSelect"),
                    c = jm(a, "hangouts.google.com (default)", "", "", !0);
                b.insertBefore(c, a.a.B("otherOption"));
                for (c = 0; c < im.length; c++) {
                    var d = im[c],
                        d = jm(a, d, d, d, !1);
                    b.insertBefore(d, a.a.B("otherOption"))
                }
                var e = a.b.a.getItem("ServerName").L();
                e && (_.db(im, function(a) {
                    return a == e
                }) ? a.a.B(e).selected = "selected" : "hangouts.google.com" != e && (c = jm(a, e, e, e, !0), b.insertBefore(c,
                    a.a.B("otherOption"))))
            };
        hm.prototype.m = function() {
            var a = this.a.B("serverSelect"),
                b = this.a.B("otherLabel");
            a.value && (this.a.B("error").style.display = "none");
            b.style.display = a.value == this.a.B("otherOption").value ? "block" : "none"
        };
        hm.prototype.l = function() {
            var a = this.a.B("serverSelect").value,
                b = this.a.B("error");
            if (a == this.a.B("otherOption").value && (a = this.a.B("otherField").value, "" == a)) {
                b.style.display = "block";
                return
            }
            b.style.display = "none";
            b = !1;
            var c = this.b.a,
                d = this.a.B("jsmodeField").checked,
                e = c.getItem("UnobfuscatedMode"),
                f = !1;
            d != e.L() && (e.ea = d, e.ia = !0, c.setItem(e), f = !0);
            d = c.getItem("ServerName");
            e = !1;
            a != d.L() && (d.ea = a, d.ia = !0, c.setItem(d), e = !0);
            f || e ? (this.c.set("settings", fl(c)), a = !0) : a = !1;
            b = a || b;
            a = this.b.a;
            c = a.getItem("experimentz");
            f = this.a.B("experimentz").value;
            f != c.L() ? (c.ea = f, c.ia = !0, a.setItem(c), this.c.set("settings", fl(a)), a = !0) : a = !1;
            b = a || b;
            b = km(this, "brightBackgroundField", "UseBrightBackground") || b;
            b = km(this, "ignoreUnresponsiveWebviewField", "IgnoreUnresponsiveWebview") || b;
            a = this.b.a;
            c = a.getItem("locale");
            f = this.a.B("localeField").value;
            f != c.L() ? (c.ea = f, c.ia = !0, a.setItem(c), this.c.set("settings", fl(a)), a = !0) : a = !1;
            b = a || b;
            Oh(this.a.a).close();
            b && window.chrome.runtime.reload()
        };
        var km = function(a, b, c) {
            var d = a.b.a;
            b = a.a.B(b).checked;
            c = d.getItem(c);
            return b != c.L() ? (c.ea = b, c.ia = !0, d.setItem(c), a.c.set("settings", fl(d)), !0) : !1
        };
        hm.prototype.j = function() {
            Oh(this.a.a).close()
        };
        var lm = function(a) {
            var b = {
                    width: 520,
                    height: 320,
                    top: Math.floor((window.screen.height - 320) / 2),
                    left: Math.floor((window.screen.width - 520) / 2),
                    id: "settingsdialog.html",
                    url: "settingsdialog.html",
                    visibleOnAllWorkspaces: !0
                },
                c = new V(!1);
            c.create(b);
            jk(c, function() {
                var b = new hm(a, c);
                _.G(c, function() {
                    return _.H(b)
                })
            })
        };
        var nm = function(a, b) {
            _.N.call(this);
            this.g = a;
            this.a = b;
            this.b = this.g.get(Kj);
            mm(this)
        };
        _.p(nm, _.N);
        var mm = function(a) {
            var b = a.a.B("restartButton");
            b.textContent = "Restart";
            a.listen(b, "click", function() {
                return window.chrome.runtime.reload()
            });
            b = a.a.B("settingsButton");
            b.textContent = "Settings";
            a.listen(b, "click", _.xa(lm, a.g));
            var b = a.a.B("wabelStatus"),
                c;
            for (c in ii) {
                var d = a.a.a.createElement("option");
                d.value = ii[c];
                d.text = c;
                b.add(d)
            }
            a.listen(b, "change", a.h);
            a.listen(a.b, Hk, a.c);
            a.c()
        };
        nm.prototype.h = function() {
            Kk(this.b, (0, window.parseInt)(this.a.B("wabelStatus").value, 10))
        };
        nm.prototype.c = function() {
            this.a.B("wabelStatus").value = this.b.a
        };
        var om = null,
            pm = function(a) {
                if (om) om.focus();
                else {
                    var b = {
                        width: 190,
                        height: 190,
                        top: Math.floor((window.screen.height - 190) / 2),
                        left: Math.floor((window.screen.width - 190) / 2),
                        id: "debugdialog.html190190",
                        url: "debugdialog.html",
                        visibleOnAllWorkspaces: !0
                    };
                    om = new V(!1);
                    om.create(b);
                    jk(om, function() {
                        var b = W(om).document,
                            d = new nm(a, new _.vc(b));
                        _.G(om, function() {
                            om = null;
                            _.H(d)
                        })
                    })
                }
            };
        var rm = function(a) {
            _.z(this, a, "capi:ds_sc", qm, null)
        };
        _.p(rm, _.y);
        var qm = [1];
        rm.messageId = "capi:ds_sc";
        var sm = function(a) {
            this.a = a.get(_.T)
        };
        var tm = function(a, b) {
                var c = _.A(a, 1) || [];
                _.eb(c, b) || (c.push(b), _.B(a, 1, c || []))
            },
            um = function(a, b) {
                if (null == a.getState() && b) {
                    var c = new fh;
                    _.E(a, 2, c)
                }
                return a.getState()
            },
            vm = function(a, b) {
                tm(a, 16);
                var c = um(a, !0),
                    d = new th;
                d.setPosition(b);
                _.E(c, 15, d)
            },
            wm = function(a) {
                return new Yj(_.A(a, 1), _.A(a, 2), _.A(a, 3), _.A(a, 4))
            },
            xm = function(a) {
                var b = new eh;
                _.B(b, 1, a.left);
                _.B(b, 2, a.top);
                _.B(b, 3, a.width);
                _.B(b, 4, a.height);
                return b
            };
        var ym = function(a) {
            _.L.call(this);
            this.b = a.get(Pj);
            this.j = new sm(a);
            this.a = [];
            var b = new _.N(this);
            _.I(this, b);
            a = a.get(Oj);
            b.listen(a, "j", this.c);
            this.b.has("display") ? (this.a = (0, _.ab)(this.b.get("display"), function(a) {
                return new eh(a)
            }), this.c()) : (a = new eh, _.B(a, 1, window.screen.availLeft), _.B(a, 2, window.screen.availTop), _.B(a, 3, window.screen.availWidth), _.B(a, 4, window.screen.availHeight), this.a = [a]);
            a = new _.Be(5E3);
            _.I(this, a);
            b.listen(a, "tick", this.h);
            a.start();
            this.h()
        };
        _.p(ym, _.L);
        var zm = function(a, b) {
            for (var c, d = Number.MAX_VALUE, e = 0; e < a.a.length; e++) {
                var f = wm(a.a[e]),
                    h = ak(f, b);
                h < d && (d = h, c = f)
            }
            return c
        };
        ym.prototype.l = function(a) {
            var b = [],
                c = !1;
            (0, _.u)(a, function(a) {
                if (a.isEnabled) {
                    var d = new eh;
                    _.B(d, 1, a.workArea.left);
                    _.B(d, 2, a.workArea.top);
                    _.B(d, 3, a.workArea.width);
                    _.B(d, 4, a.workArea.height);
                    b.push(d);
                    c = c || !(0, _.bb)(this.a, function(a) {
                        return Fi(a, d)
                    })
                }
            }, this);
            if (c = c || this.a.length != b.length) this.a = b, this.b.set("display", (0, _.ab)(b, function(a) {
                return _.D(a)
            })), _.M(this, "change"), this.c()
        };
        ym.prototype.h = function() {
            window.chrome.system.display.getInfo((0, _.r)(this.l, this))
        };
        ym.prototype.c = function() {
            var a = this.j,
                b = this.a,
                c = new rm;
            Sh(c, 1, b);
            a.a.sendMessage(c)
        };
        var Am = function(a) {
            _.z(this, a, "h_ssf", null, null)
        };
        _.p(Am, _.y);
        Am.messageId = "h_ssf";
        var Bm = function(a) {
            _.N.call(this);
            a = a.get(_.T);
            this.listen(a.F(), "h_ssf", this.a)
        };
        _.p(Bm, _.N);
        var Cm = 0 <= _.Xa(_.Vf, 54) ? 83052 : "83052";
        Bm.prototype.a = function(a) {
            var b = [{
                key: "appVersion",
                value: window.chrome.runtime.getManifest().version
            }, {
                key: "appId",
                value: window.chrome.runtime.id
            }];
            a = new Am(a.P);
            if (_.A(a, 1)) {
                a = JSON.parse(_.A(a, 1));
                for (var c in a) b.push({
                    key: c,
                    value: a[c]
                })
            }
            window.chrome.runtime.sendMessage("gfdkimpbcpahaombhbimeihdjnejgicl", {
                requestFeedback: !0,
                feedbackInfo: {
                    productId: Cm,
                    categoryTag: "Hangouts App",
                    systemInformation: b
                }
            })
        };
        var Dm = function(a) {
            _.z(this, a, "capi:fsc", null, null)
        };
        _.p(Dm, _.y);
        Dm.messageId = "capi:fsc";
        Dm.prototype.setVersion = function(a) {
            _.B(this, 2, a)
        };
        var Em = function(a, b, c) {
            this.g = b || "e";
            this.c = c || "en";
            this.a = new _.md(function(b) {
                a.get(_.T).F().listen("capi:fsc", function(a) {
                    b(new Dm(a.P))
                })
            });
            _.G(this, this.a.cancel, this.a)
        };
        _.p(Em, _.F);
        var Fm = function(a, b) {
            return a.a.then(function(a) {
                var c = _.Af(_.A(a, 1), "frame2");
                _.R(c, "v", _.A(a, 2));
                _.R(c, "pvt", _.A(a, 10));
                _.R(c, "prop", _.A(a, 11));
                null == c.toString().match(/\/u\/\d+\//) && _.R(c, "authuser", _.A(a, 4));
                _.R(c, "hl", this.c);
                _.qf(c, this.g + b.j());
                return c.toString()
            }, void 0, a)
        };
        var Gm = function(a) {
            var b = hl(a.get(Jj).a) || window.chrome.i18n.getMessage("@@ui_locale");
            Em.call(this, a, "p", b);
            this.b = a
        };
        _.p(Gm, Em);
        var Hm = function(a, b, c, d) {
            return Fm(a, b).then(function(b) {
                return new Vl(a.b, b, c, void 0, d)
            })
        };
        var Im = function(a) {
            _.z(this, a, "capi:id_sc", null, null)
        };
        _.p(Im, _.y);
        Im.messageId = "capi:id_sc";
        var Jm = function(a) {
            _.L.call(this);
            var b = new _.N(this);
            _.I(b, b);
            this.a = a.get(_.T)
        };
        _.p(Jm, _.L);
        var Km = function(a, b) {
            var c = new Im;
            switch (b) {
                case "idle":
                    _.B(c, 1, 0);
                    break;
                case "active":
                    _.B(c, 1, 1)
            }
            a.a.sendMessage(c)
        };
        var Lm = function(a) {
            var b = this;
            _.F.call(this);
            this.h = new Jm(a);
            this.g = !1;
            this.a = new _.Be;
            _.I(this, this.a);
            this.b = new _.Be;
            _.I(this, this.b);
            window.chrome.idle.setDetectionInterval(300);
            var c = function() {
                return b.c
            };
            window.chrome.idle.onStateChanged.addListener(c);
            _.G(this, function() {
                return window.chrome.idle.onStateChanged.removeListener(c)
            });
            this.a.setInterval(5E3);
            this.a.listen("tick", this.c, void 0, this);
            this.a.start();
            this.b.setInterval(9E5);
            this.b.listen("tick", this.l, void 0, this);
            this.b.start()
        };
        _.p(Lm, _.F);
        Lm.prototype.l = function() {
            this.g = !0;
            this.c()
        };
        Lm.prototype.c = function() {
            var a = this;
            window.chrome.idle.queryState(300, function(b) {
                if (a.g || b != a.j) switch (a.g = !1, a.j = b, b) {
                    case "idle":
                    case "locked":
                        Km(a.h, "idle");
                        break;
                    case "active":
                        Km(a.h, "active")
                }
            })
        };
        gi = function(a) {
            var b = String(a);
            try {
                return JSON.parse(b)
            } catch (c) {}
            return -1 < b.indexOf("f.mt") ? JSON.parse('[[["f.mt"],["e",2,null,null,50]]]') : -1 < b.indexOf("er") ? JSON.parse('[[["er",null,"",null,null,400,null,null,null,3],["e",2,null,null,6009]]]') : eval("(" + a + ")")
        };
        var Mm = function(a) {
                this.a = a
            },
            Nm = {},
            Om = function(a, b, c) {
                _.K.call(this, a, b);
                this.a = c
            };
        _.p(Om, _.K);
        var Qm = function(a) {
                if (_.Cb) a = Pm(a);
                else if (_.Gb && _.Db) switch (a) {
                    case 93:
                        a = 91
                }
                return a
            },
            Pm = function(a) {
                switch (a) {
                    case 61:
                        return 187;
                    case 59:
                        return 186;
                    case 173:
                        return 189;
                    case 224:
                        return 91;
                    case 0:
                        return 224;
                    default:
                        return a
                }
            };
        var Rm = {
            8: "backspace",
            9: "tab",
            13: "enter",
            16: "shift",
            17: "ctrl",
            18: "alt",
            19: "pause",
            20: "caps-lock",
            27: "esc",
            32: "space",
            33: "pg-up",
            34: "pg-down",
            35: "end",
            36: "home",
            37: "left",
            38: "up",
            39: "right",
            40: "down",
            45: "insert",
            46: "delete",
            48: "0",
            49: "1",
            50: "2",
            51: "3",
            52: "4",
            53: "5",
            54: "6",
            55: "7",
            56: "8",
            57: "9",
            59: "semicolon",
            61: "equals",
            65: "a",
            66: "b",
            67: "c",
            68: "d",
            69: "e",
            70: "f",
            71: "g",
            72: "h",
            73: "i",
            74: "j",
            75: "k",
            76: "l",
            77: "m",
            78: "n",
            79: "o",
            80: "p",
            81: "q",
            82: "r",
            83: "s",
            84: "t",
            85: "u",
            86: "v",
            87: "w",
            88: "x",
            89: "y",
            90: "z",
            93: "context",
            96: "num-0",
            97: "num-1",
            98: "num-2",
            99: "num-3",
            100: "num-4",
            101: "num-5",
            102: "num-6",
            103: "num-7",
            104: "num-8",
            105: "num-9",
            106: "num-multiply",
            107: "num-plus",
            109: "num-minus",
            110: "num-period",
            111: "num-division",
            112: "f1",
            113: "f2",
            114: "f3",
            115: "f4",
            116: "f5",
            117: "f6",
            118: "f7",
            119: "f8",
            120: "f9",
            121: "f10",
            122: "f11",
            123: "f12",
            186: "semicolon",
            187: "equals",
            189: "dash",
            188: ",",
            190: ".",
            191: "/",
            192: "`",
            219: "open-square-bracket",
            220: "\\",
            221: "close-square-bracket",
            222: "single-quote",
            224: "win"
        };
        var Um = function(a) {
                _.L.call(this);
                this.b = this.c = {};
                this.j = 0;
                this.M = Gi(Sm);
                this.R = Gi(Tm);
                this.o = !0;
                this.m = !1;
                this.l = null;
                this.a = a;
                _.ie(this.a, "keydown", this.h, void 0, this);
                _.Hb && _.ie(this.a, "keypress", this.D, void 0, this);
                _.ie(this.a, "keyup", this.v, void 0, this)
            },
            Vm;
        _.p(Um, _.L);
        var Wm = function(a) {
                this.a = a || null;
                this.next = a ? null : {}
            },
            Sm = [27, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 19],
            Tm = "color date datetime datetime-local email month number password search tel text time url week".split(" ");
        Um.prototype.N = function(a, b) {
            Xm(this.c, Ym(arguments), a)
        };
        var Ym = function(a) {
            if (_.t(a[1])) a = (0, _.ab)(Zm(a[1]), function(a) {
                return a.keyCode & 255 | a.Zb << 8
            });
            else {
                var b = a,
                    c = 1;
                _.Ca(a[1]) && (b = a[1], c = 0);
                for (a = []; c < b.length; c += 2) a.push(b[c] & 255 | b[c + 1] << 8)
            }
            return a
        };
        Um.prototype.w = function() {
            Um.A.w.call(this);
            this.c = {};
            _.qe(this.a, "keydown", this.h, !1, this);
            _.Hb && _.qe(this.a, "keypress", this.D, !1, this);
            _.qe(this.a, "keyup", this.v, !1, this);
            this.a = null
        };
        var Zm = function(a) {
            a = a.replace(/[ +]*\+[ +]*/g, "+").replace(/[ ]+/g, " ").toLowerCase();
            a = a.split(" ");
            for (var b = [], c, d = 0; c = a[d]; d++) {
                var e = c.split("+"),
                    f = null;
                c = 0;
                for (var h, k = 0; h = e[k]; k++) {
                    switch (h) {
                        case "shift":
                            c |= 1;
                            continue;
                        case "ctrl":
                            c |= 2;
                            continue;
                        case "alt":
                            c |= 4;
                            continue;
                        case "meta":
                            c |= 8;
                            continue
                    }
                    e = h;
                    if (!Vm) {
                        f = {};
                        h = void 0;
                        for (h in Rm) f[Rm[h]] = Qm((0, window.parseInt)(h, 10));
                        Vm = f
                    }
                    f = Vm[e];
                    break
                }
                b.push({
                    keyCode: f,
                    Zb: c
                })
            }
            return b
        };
        Um.prototype.v = function(a) {
            _.Cb && $m(this, a);
            _.Hb && !this.H && _.Hb && a.j && a.h && this.h(a)
        };
        var $m = function(a, b) {
            if (_.Gb) {
                if (224 == b.keyCode) {
                    a.K = !0;
                    _.Ce(function() {
                        this.K = !1
                    }, 400, a);
                    return
                }
                var c = b.C || a.K;
                67 != b.keyCode && 88 != b.keyCode && 86 != b.keyCode || !c || (b.C = c, a.h(b))
            }
            32 == a.l && 32 == b.keyCode && b.g();
            a.l = null
        };
        Um.prototype.D = function(a) {
            32 < a.keyCode && _.Hb && a.j && a.h && (this.H = !0)
        };
        var Xm = function(a, b, c) {
            var d = b.shift(),
                e = a[d];
            if (e && (0 == b.length || e.a)) throw Error("x");
            b.length ? (d = d.toString(), e = new Wm, e = d in a ? a[d] : a[d] = e, Xm(e.next, b, c)) : a[d] = new Wm(c)
        };
        Um.prototype.h = function(a) {
            var b;
            b = a.keyCode;
            if (16 == b || 17 == b || 18 == b) b = !1;
            else {
                var c = a.target,
                    d = "TEXTAREA" == c.tagName || "INPUT" == c.tagName || "BUTTON" == c.tagName || "SELECT" == c.tagName,
                    e = !d && (c.isContentEditable || c.ownerDocument && "on" == c.ownerDocument.designMode);
                b = !d && !e || this.M[b] || this.m ? !0 : e ? !1 : a.h || a.j || a.C ? !0 : "INPUT" == c.tagName && this.R[c.type] ? 13 == b : "INPUT" == c.tagName || "BUTTON" == c.tagName ? 32 != b : !1
            }
            if (b)
                if ("keydown" == a.type && _.Hb && a.j && a.h) this.H = !1;
                else {
                    b = Qm(a.keyCode);
                    c = b & 255 | ((a.m ? 1 : 0) | (a.j ? 2 : 0) |
                        (a.h ? 4 : 0) | (a.C ? 8 : 0)) << 8;
                    if (!this.b[c] || 1500 <= (0, _.sa)() - this.j) this.b = this.c, this.j = (0, _.sa)();
                    if (c = this.b[c]) c.next ? (this.b = c.next, this.j = (0, _.sa)(), a.g()) : (this.b = this.c, this.j = (0, _.sa)(), this.o && a.g(), c = c.a, d = a.target, e = _.M(this, new an("shortcut", c, d)), (e &= _.M(this, new an("shortcut_" + c, c, d))) || a.g(), _.Cb && (this.l = b))
                }
        };
        var an = function(a, b, c) {
            _.K.call(this, a, c);
            this.a = b
        };
        _.p(an, _.K);
        var bn = function(a, b, c) {
            _.L.call(this);
            this.j = c;
            this.b = new _.N(this);
            _.I(this, this.b);
            this.a = [];
            this.c = _.qb(Nm);
            _.sb(this.c, b)
        };
        _.p(bn, _.L);
        bn.prototype.w = function() {
            bn.A.w.call(this);
            (0, _.u)(this.a, function(a) {
                _.H(a.a)
            })
        };
        var fn = function(a, b) {
                var c = _.db(a.a, function(a) {
                    return a.b == b
                });
                null != c && cn(a, b);
                var d = new Um(b);
                d.m = a.j;
                d.o = !1;
                dn(a, d);
                c = new en(b, d);
                a.a.push(c);
                a.b.listen(d, "shortcut", a.h)
            },
            cn = function(a, b) {
                var c = _.db(a.a, function(a) {
                    return a.b == b
                });
                null != c && (a.b.Qa(c.a, "shortcut", a.h), _.H(c.a), _.gb(a.a, c))
            },
            dn = function(a, b) {
                _.mb(a.c, function(a, d) {
                    a.a && b.N(d, a.a)
                })
            };
        bn.prototype.h = function(a) {
            var b = this.c[a.a];
            _.M(this, new Om("v", a.target, b));
            return _.M(this, new Om("w", a.target, b))
        };
        var en = function(a, b) {
            this.b = a;
            this.a = b
        };
        var gn = _.Gb ? 8 : 2,
            hn = gn | 1,
            jn = new Mm([38, hn, 38, hn, 40, hn, 40, hn, 37, hn, 39, hn, 37, hn, 39, hn, 68, hn, 68, hn]),
            kn = new Mm([48, gn]),
            ln = new Mm([107, gn]),
            mn = new Mm([187, gn]),
            nn = new Mm([187, gn | 1]),
            on = new Mm([109, gn]),
            pn = new Mm([189, gn]),
            qn = new Mm([189, gn | 1]);
        var sn = function() {
            bn.call(this, 0, rn, !0)
        };
        _.p(sn, bn);
        var rn = {
            xb: jn,
            Eb: kn,
            yb: ln,
            zb: mn,
            Ab: nn,
            Bb: on,
            Cb: pn,
            Db: qn
        };
        var un = function(a, b) {
            var c = this;
            _.N.call(this);
            this.c = a;
            this.b = b;
            this.a = a.get(Jj);
            this.j = a.get(Kj);
            this.g = a.get(Hj);
            this.h = a.get(Oj);
            jk(this.b, function() {
                c.b.onBoundsChanged.addListener(function() {
                    var a = sk(c.b);
                    if (a) {
                        var b = c.a,
                            a = xm(a),
                            d = new ti;
                        _.E(d, 2, a);
                        vl(b, d)
                    }
                });
                c.listen(c.g, "change", function() {
                    if (_.wb() && Dl(c.a)) Fk(c.h, !0, 1E4);
                    else if (!c.j.c()) {
                        var a = sk(c.b),
                            b = new Yj(a.left, a.top, a.width, a.height),
                            d;
                        d = c.a;
                        var k = sl(d),
                            n = _.A(k, 4);
                        n && !_.A(k, 5) && (k = new ti, _.B(k, 4, !1), vl(d, k), n = !1);
                        d = n;
                        var k = Bl(c.a),
                            q;
                        if (d)
                            for (var n = c.g, v = new Ei(a.left + a.width / 2, a.top + a.height / 2), Z = Number.MAX_VALUE, ja = 0; ja < n.a.length; ja++) {
                                var P = wm(n.a[ja]);
                                k || (P.left += P.width);
                                P.width = 0;
                                P = ak(P, v);
                                P < Z && (Z = P, q = wm(n.a[ja]))
                            } else q = zm(c.g, new Ei(a.left + a.width / 2, a.top + a.height / 2));
                        n = q.left;
                        v = q.left + q.width - a.width;
                        d && (b.left = k ? n : v);
                        tn(b, q, k);
                        Zj(a, b) || tk(c.b, xm(b))
                    }
                })
            });
            var d = a.get(Sj);
            this.listen(d, "w", this.l);
            this.listen(this.h, "k", function() {
                return pm(c.c)
            })
        };
        _.p(un, _.N);
        un.prototype.l = function(a) {
            var b = a.target;
            if (_.ya(b) && 0 < b.nodeType) switch (b = rn, a.a) {
                case b.xb:
                    pm(this.c);
                    break;
                case b.Eb:
                    Il(this.a, 6);
                    break;
                case b.yb:
                case b.zb:
                case b.Ab:
                    Il(this.a, ol(Hl(this.a) + 1));
                    break;
                case b.Bb:
                case b.Cb:
                case b.Db:
                    Il(this.a, ol(Hl(this.a) - 1))
            }
        };
        var tn = function(a, b, c) {
            var d = b.left,
                e = b.left + b.width - a.width;
            a.left = c ? Math.max(a.left, d) : Math.min(a.left, e);
            c = b.top;
            b = b.top + b.height - a.height;
            a.top < c ? a.top = c : a.top > b && (a.top = b)
        };
        _.x && _.Pb(8);
        var vn = {},
            wn = {},
            xn = {},
            yn = {},
            zn = function() {
                throw Error("y");
            };
        zn.prototype.a = null;
        zn.prototype.pa = function() {
            return this.content
        };
        zn.prototype.toString = function() {
            return this.content
        };
        var Cn = function(a) {
                var b = _.xc();
                a = a(An, void 0, void 0);
                var c = Bn(a);
                if (a instanceof zn)
                    if (a.ja === yn) a = ih(a.toString());
                    else {
                        if (a.ja !== vn) throw Error("z");
                        a = _.tc(a.toString(), a.a || null)
                    }
                else a = _.tc(c, null);
                b = b.a;
                c = a;
                a = b.createElement("DIV");
                _.x ? (c = Ph(_.uc, c), a.innerHTML = jh(c), a.removeChild(a.firstChild)) : a.innerHTML = jh(c);
                if (1 == a.childNodes.length) b = a.removeChild(a.firstChild);
                else
                    for (b = b.createDocumentFragment(); a.firstChild;) b.appendChild(a.firstChild);
                return b
            },
            Dn = function(a, b, c) {
                a = a(b || An, void 0,
                    void 0);
                c = (c || _.xc()).a.createElement("DIV");
                a = Bn(a);
                c.innerHTML = a;
                1 == c.childNodes.length && (a = c.firstChild, 1 == a.nodeType && (c = a));
                return c
            },
            Bn = function(a) {
                if (!_.ya(a)) return String(a);
                if (a instanceof zn) {
                    if (a.ja === vn) return a.pa();
                    if (a.ja === yn) return _.Sa(a.pa())
                }
                return "zSoyz"
            },
            An = {};
        var En = function() {
            zn.call(this)
        };
        _.p(En, zn);
        En.prototype.ja = vn;
        var Fn = function(a) {
            function b(a) {
                this.content = a
            }
            b.prototype = a.prototype;
            return function(a, d) {
                var c = new b(String(a));
                void 0 !== d && (c.a = d);
                return c
            }
        }(En);
        (function(a) {
            function b(a) {
                this.content = a
            }
            b.prototype = a.prototype;
            return function(a, d) {
                var c = String(a);
                if (!c) return "";
                c = new b(c);
                void 0 !== d && (c.a = d);
                return c
            }
        })(En);
        var Kn = function(a) {
                return null != a && a.ja === vn ? String(String(a.pa()).replace(Gn, "").replace(Hn, "&lt;")).replace(In, Jn) : _.Sa(String(a))
            },
            On = function(a) {
                null != a && a.ja === wn || null != a && a.ja === xn ? a = String(a).replace(Ln, Mn) : a instanceof Qh ? (a instanceof Qh && a.constructor === Qh && a.b === kh ? a = a.a : (_.va(a), a = "type_error:SafeUrl"), a = String(a).replace(Ln, Mn)) : a instanceof fi ? (a instanceof fi && a.constructor === fi && a.a === Xh ? a = "" : (_.va(a), a = "type_error:TrustedResourceUrl"), a = String(a).replace(Ln, Mn)) : (a = String(a), a = Nn.test(a) ?
                    a.replace(Ln, Mn) : "about:invalid#zSoyz");
                return a
            },
            Pn = {
                "\x00": "&#0;",
                "\t": "&#9;",
                "\n": "&#10;",
                "\x0B": "&#11;",
                "\f": "&#12;",
                "\r": "&#13;",
                " ": "&#32;",
                '"': "&quot;",
                "&": "&amp;",
                "'": "&#39;",
                "-": "&#45;",
                "/": "&#47;",
                "<": "&lt;",
                "=": "&#61;",
                ">": "&gt;",
                "`": "&#96;",
                "\u0085": "&#133;",
                "\u00a0": "&#160;",
                "\u2028": "&#8232;",
                "\u2029": "&#8233;"
            },
            Jn = function(a) {
                return Pn[a]
            },
            Qn = {
                "\x00": "%00",
                "\u0001": "%01",
                "\u0002": "%02",
                "\u0003": "%03",
                "\u0004": "%04",
                "\u0005": "%05",
                "\u0006": "%06",
                "\u0007": "%07",
                "\b": "%08",
                "\t": "%09",
                "\n": "%0A",
                "\x0B": "%0B",
                "\f": "%0C",
                "\r": "%0D",
                "\u000e": "%0E",
                "\u000f": "%0F",
                "\u0010": "%10",
                "\u0011": "%11",
                "\u0012": "%12",
                "\u0013": "%13",
                "\u0014": "%14",
                "\u0015": "%15",
                "\u0016": "%16",
                "\u0017": "%17",
                "\u0018": "%18",
                "\u0019": "%19",
                "\u001a": "%1A",
                "\u001b": "%1B",
                "\u001c": "%1C",
                "\u001d": "%1D",
                "\u001e": "%1E",
                "\u001f": "%1F",
                " ": "%20",
                '"': "%22",
                "'": "%27",
                "(": "%28",
                ")": "%29",
                "<": "%3C",
                ">": "%3E",
                "\\": "%5C",
                "{": "%7B",
                "}": "%7D",
                "\u007f": "%7F",
                "\u0085": "%C2%85",
                "\u00a0": "%C2%A0",
                "\u2028": "%E2%80%A8",
                "\u2029": "%E2%80%A9",
                "\uff01": "%EF%BC%81",
                "\uff03": "%EF%BC%83",
                "\uff04": "%EF%BC%84",
                "\uff06": "%EF%BC%86",
                "\uff07": "%EF%BC%87",
                "\uff08": "%EF%BC%88",
                "\uff09": "%EF%BC%89",
                "\uff0a": "%EF%BC%8A",
                "\uff0b": "%EF%BC%8B",
                "\uff0c": "%EF%BC%8C",
                "\uff0f": "%EF%BC%8F",
                "\uff1a": "%EF%BC%9A",
                "\uff1b": "%EF%BC%9B",
                "\uff1d": "%EF%BC%9D",
                "\uff1f": "%EF%BC%9F",
                "\uff20": "%EF%BC%A0",
                "\uff3b": "%EF%BC%BB",
                "\uff3d": "%EF%BC%BD"
            },
            Mn = function(a) {
                return Qn[a]
            },
            In = /[\x00\x22\x27\x3c\x3e]/g,
            Ln = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
            Nn = /^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,
            Gn = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
            Hn = /</g;
        var Rn = function() {
            return Fn('<div class="tLanXe yTYtyc"></div><div class="glECie FJoqob OzKC3"></div><div class="hvD8ob"><div class="gIdGUb d22q4d"><div class="ZF9l5d Ox4l4"></div></div></div>')
        };
        var Sn = function(a, b) {
                "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
                return a
            },
            Tn = function(a, b) {
                a.style.display = b ? "" : "none"
            };
        var Un = function() {};
        Ki(Un);
        Un.prototype.a = 0;
        var X = function(a) {
            _.L.call(this);
            this.H = a || _.xc();
            this.N = null;
            this.ka = !1;
            this.b = null;
            this.c = void 0;
            this.v = this.D = this.j = null
        };
        _.p(X, _.L);
        X.prototype.X = Un.za();
        X.prototype.a = function() {
            return this.N || (this.N = ":" + (this.X.a++).toString(36))
        };
        X.prototype.B = function() {
            return this.b
        };
        var Y = function(a, b) {
                return a.b ? _.zc(b, a.b || a.H.a) : null
            },
            Vn = function(a) {
                a.c || (a.c = new _.N(a));
                return a.c
            };
        X.prototype.G = function(a) {
            if (this.j && this.j != a) throw Error("C");
            X.A.G.call(this, a)
        };
        X.prototype.ya = function() {
            return this.H
        };
        X.prototype.ma = function() {
            this.b = this.H.a.createElement("DIV")
        };
        var Wn = function(a, b) {
            if (a.ka) throw Error("D");
            a.b || a.ma();
            b ? b.insertBefore(a.b, null) : a.H.a.body.appendChild(a.b);
            a.j && !a.j.ka || a.ba()
        };
        X.prototype.ba = function() {
            this.ka = !0;
            Xn(this, function(a) {
                !a.ka && a.B() && a.ba()
            })
        };
        var Yn = function(a) {
            Xn(a, function(a) {
                a.ka && Yn(a)
            });
            a.c && a.c.removeAll();
            a.ka = !1
        };
        X.prototype.w = function() {
            this.ka && Yn(this);
            this.c && (this.c.Z(), delete this.c);
            Xn(this, function(a) {
                a.Z()
            });
            this.b && Ci(this.b);
            this.j = this.b = this.v = this.D = null;
            X.A.w.call(this)
        };
        var Xn = function(a, b) {
            a.D && (0, _.u)(a.D, b, void 0)
        };
        X.prototype.removeChild = function(a, b) {
            if (a) {
                var c = _.t(a) ? a : a.a(),
                    d;
                this.v && c ? (d = this.v, d = (null !== d && c in d ? d[c] : void 0) || null) : d = null;
                a = d;
                if (c && a) {
                    d = this.v;
                    c in d && delete d[c];
                    _.gb(this.D, a);
                    b && (Yn(a), a.b && Ci(a.b));
                    c = a;
                    if (null == c) throw Error("B");
                    c.j = null;
                    X.A.G.call(c, null)
                }
            }
            if (!a) throw Error("E");
            return a
        };
        var Zn = function(a) {
            X.call(this, a)
        };
        _.p(Zn, X);
        Zn.prototype.ma = function() {
            this.b = Dn(Rn, void 0, this.ya())
        };
        Zn.prototype.ba = function() {
            Zn.A.ba.call(this);
            Bi(Y(this, "glECie"), window.chrome.i18n.getMessage("CHROME_APP_CONNECTION_ERROR_DETAIL"));
            Bi(Y(this, "tLanXe"), window.chrome.i18n.getMessage("CHROME_APP_CONNECTION_ERROR_TITLE"));
            Bi(Y(this, "ZF9l5d"), window.chrome.i18n.getMessage("CHROME_APP_CONNECTION_ERROR_BUTTON"));
            Vn(this).listen(Y(this, "gIdGUb"), "click", this.h)
        };
        Zn.prototype.h = function() {
            window.chrome.runtime.reload()
        };
        var $n = function() {
            return Fn('<div class="KwUJl za99jd"><div class="ftkzZd EAIhBe"></div><div class="PdFW3"><div class="YZ17Mb"><div class="C64E9d MDvFI"></div><div class="L7IVff YZ1oWe"><div class="nkDZ6 cHJjp ydkj6c QMBe3c"></div><div class="bE4Lge cHJjp ydkj6c Heq7Jf"></div><div class="elCDOd rKV8Yb cHJjp ydkj6c"></div></div></div></div></div><div class="zkRavd cHJjp YSvmaf"></div><div class="G1uPUb s54bbb"></div><div id="uv_drag_region" class="xVwMu"><div class="HNBNSb"></div></div>')
        };
        var ao = function() {
            return Fn('<div class="KwUJl UgQOTe"><div class="nK6Nye"><div class="L3c0u U2TDqc"></div></div><div class="EmPSFe"><span class="WxquGe"></span> <a class="vkUZWc" target="_blank"></a></div><button class="rHCn5c xWbrW"></button></div>')
        };
        var bo = function(a) {
            return Fn('<div class="NfTrme yTYtyc"></div><div class="FJoqob UeuQKb"><span class="Kq8xGf"></span> <a class="PhCVj" target="_blank" href="' + Kn(On(a.bb)) + '"></a></div>')
        };
        var co = function(a) {
            X.call(this, a)
        };
        _.p(co, X);
        co.prototype.ma = function() {
            this.b = Dn(bo, {
                bb: _.Ug
            }, this.ya())
        };
        co.prototype.ba = function() {
            co.A.ba.call(this);
            Bi(Y(this, "NfTrme"), window.chrome.i18n.getMessage("CHROME_APP_OUTDATED_TITLE"));
            Bi(Y(this, "Kq8xGf"), window.chrome.i18n.getMessage("CHROME_APP_OUTDATED_DETAIL"));
            Bi(Y(this, "PhCVj"), window.chrome.i18n.getMessage("CHROME_APP_LEARN_MORE_MESSAGE"))
        };
        var eo = function(a) {
            return Fn('<div class="PtUZ5e"><div class="v0h5Oe"></div><div class="yp1vyc NpbhUd"></div><div class="evTYnd"><span class="vLaJkf"></span> <a href="' + Kn(On(a.bb)) + '" target="_blank" class="TTGEHc"></a></div><button class="SHZ6h WvHdHd"></button></div>')
        };
        var fo = function(a, b) {
            X.call(this, b);
            this.h = a.get(Uj)
        };
        _.p(fo, X);
        fo.prototype.ma = function() {
            this.b = Dn(eo, {
                bb: _.Tg
            }, this.ya())
        };
        fo.prototype.ba = function() {
            fo.A.ba.call(this);
            Bi(Y(this, "yp1vyc"), window.chrome.i18n.getMessage("CHROME_APP_WELCOME_MESSAGE"));
            Bi(Y(this, "vLaJkf"), window.chrome.i18n.getMessage("CHROME_APP_CHROME_SIGNIN_MESSAGE"));
            Bi(Y(this, "TTGEHc"), window.chrome.i18n.getMessage("CHROME_APP_LEARN_MORE_MESSAGE"));
            Bi(Y(this, "SHZ6h"), window.chrome.i18n.getMessage("CHROME_APP_SIGNIN_BUTTON"));
            Vn(this).listen(Y(this, "SHZ6h"), "click", this.l)
        };
        fo.prototype.l = function() {
            Ck(this.h)
        };
        var go = function() {
            return Fn('<div class="zMUWEe"><div class="Anoad CeGTP"><div class="e2kKGc"></div></div><div class="eOXgae NRBRtc"><div class="xMMbVb"></div></div><div class="f37ZYc X1zc7"><div class="kV5Myd"></div></div><div class="C86Dyb HVpWnd"><div class="L1ipvb"></div></div><div class="UUGBcf ykhkZb xVwMu s1mHsd"><div class="G3qHP"></div></div><div class="KwZMgc jkvMQb xVwMu s1mHsd"><div class="HNBNSb"></div></div><div class="TbAvif xVwMu s1mHsd"><div class="HNBNSb"></div></div></div>')
        };
        var ho = {
                23: [
                    [{
                        left: 19,
                        top: -3,
                        width: 8,
                        height: 1
                    }, {
                        left: 14,
                        top: -2,
                        width: 18,
                        height: 1
                    }, {
                        left: 11,
                        top: -1,
                        width: 23,
                        height: 1
                    }, {
                        left: 9,
                        top: 0,
                        width: 28,
                        height: 1
                    }, {
                        left: 8,
                        top: 1,
                        width: 30,
                        height: 1
                    }, {
                        left: 6,
                        top: 2,
                        width: 34,
                        height: 1
                    }, {
                        left: 5,
                        top: 3,
                        width: 36,
                        height: 1
                    }, {
                        left: 4,
                        top: 4,
                        width: 38,
                        height: 1
                    }, {
                        left: 3,
                        top: 5,
                        width: 40,
                        height: 1
                    }, {
                        left: 2,
                        top: 6,
                        width: 42,
                        height: 1
                    }, {
                        left: 1,
                        top: 7,
                        width: 44,
                        height: 1
                    }, {
                        left: 0,
                        top: 8,
                        width: 46,
                        height: 1
                    }, {
                        left: -1,
                        top: 9,
                        width: 48,
                        height: 1
                    }, {
                        left: -2,
                        top: 10,
                        width: 50,
                        height: 2
                    }, {
                        left: -3,
                        top: 12,
                        width: 52,
                        height: 2
                    }, {
                        left: -4,
                        top: 14,
                        width: 54,
                        height: 2
                    }, {
                        left: -5,
                        top: 16,
                        width: 56,
                        height: 3
                    }, {
                        left: -6,
                        top: 19,
                        width: 57,
                        height: 1
                    }, {
                        left: -6,
                        top: 20,
                        width: 58,
                        height: 13
                    }, {
                        left: -6,
                        top: 33,
                        width: 57,
                        height: 1
                    }, {
                        left: -5,
                        top: 34,
                        width: 56,
                        height: 3
                    }, {
                        left: -4,
                        top: 37,
                        width: 54,
                        height: 2
                    }, {
                        left: -3,
                        top: 39,
                        width: 52,
                        height: 2
                    }, {
                        left: -2,
                        top: 41,
                        width: 50,
                        height: 2
                    }, {
                        left: -1,
                        top: 43,
                        width: 48,
                        height: 1
                    }, {
                        left: 0,
                        top: 44,
                        width: 46,
                        height: 1
                    }, {
                        left: 1,
                        top: 45,
                        width: 44,
                        height: 1
                    }, {
                        left: 2,
                        top: 46,
                        width: 42,
                        height: 1
                    }, {
                        left: 3,
                        top: 47,
                        width: 40,
                        height: 1
                    }, {
                        left: 4,
                        top: 48,
                        width: 38,
                        height: 1
                    }, {
                        left: 5,
                        top: 49,
                        width: 36,
                        height: 1
                    }, {
                        left: 6,
                        top: 50,
                        width: 34,
                        height: 1
                    }, {
                        left: 8,
                        top: 51,
                        width: 30,
                        height: 1
                    }, {
                        left: 9,
                        top: 52,
                        width: 28,
                        height: 1
                    }, {
                        left: 11,
                        top: 53,
                        width: 23,
                        height: 1
                    }, {
                        left: 14,
                        top: 54,
                        width: 18,
                        height: 1
                    }, {
                        left: 19,
                        top: 55,
                        width: 8,
                        height: 1
                    }],
                    [{
                        left: 19,
                        top: 0,
                        width: 8,
                        height: 1
                    }, {
                        left: 15,
                        top: 1,
                        width: 16,
                        height: 1
                    }, {
                        left: 13,
                        top: 2,
                        width: 20,
                        height: 1
                    }, {
                        left: 11,
                        top: 3,
                        width: 24,
                        height: 1
                    }, {
                        left: 10,
                        top: 4,
                        width: 26,
                        height: 1
                    }, {
                        left: 8,
                        top: 5,
                        width: 30,
                        height: 1
                    }, {
                        left: 7,
                        top: 6,
                        width: 32,
                        height: 1
                    }, {
                        left: 6,
                        top: 7,
                        width: 34,
                        height: 1
                    }, {
                        left: 5,
                        top: 8,
                        width: 36,
                        height: 2
                    }, {
                        left: 4,
                        top: 10,
                        width: 38,
                        height: 1
                    }, {
                        left: 3,
                        top: 11,
                        width: 40,
                        height: 2
                    }, {
                        left: 2,
                        top: 13,
                        width: 42,
                        height: 2
                    }, {
                        left: 1,
                        top: 15,
                        width: 44,
                        height: 4
                    }, {
                        left: 0,
                        top: 19,
                        width: 46,
                        height: 8
                    }, {
                        left: 1,
                        top: 27,
                        width: 44,
                        height: 4
                    }, {
                        left: 2,
                        top: 31,
                        width: 42,
                        height: 2
                    }, {
                        left: 3,
                        top: 33,
                        width: 40,
                        height: 2
                    }, {
                        left: 4,
                        top: 35,
                        width: 38,
                        height: 2
                    }, {
                        left: 5,
                        top: 37,
                        width: 36,
                        height: 1
                    }, {
                        left: 6,
                        top: 38,
                        width: 34,
                        height: 1
                    }, {
                        left: 7,
                        top: 39,
                        width: 32,
                        height: 1
                    }, {
                        left: 8,
                        top: 40,
                        width: 30,
                        height: 1
                    }, {
                        left: 9,
                        top: 41,
                        width: 28,
                        height: 1
                    }, {
                        left: 11,
                        top: 42,
                        width: 24,
                        height: 1
                    }, {
                        left: 13,
                        top: 43,
                        width: 20,
                        height: 1
                    }, {
                        left: 15,
                        top: 44,
                        width: 16,
                        height: 1
                    }, {
                        left: 18,
                        top: 45,
                        width: 10,
                        height: 1
                    }]
                ],
                "13.5": [
                    [{
                        left: 11,
                        top: -3,
                        width: 5,
                        height: 1
                    }, {
                        left: 7,
                        top: -2,
                        width: 13,
                        height: 1
                    }, {
                        left: 4,
                        top: -1,
                        width: 19,
                        height: 1
                    }, {
                        left: 3,
                        top: 0,
                        width: 21,
                        height: 1
                    }, {
                        left: 1,
                        top: 1,
                        width: 25,
                        height: 1
                    }, {
                        left: 0,
                        top: 2,
                        width: 27,
                        height: 1
                    }, {
                        left: -1,
                        top: 3,
                        width: 29,
                        height: 1
                    }, {
                        left: -2,
                        top: 4,
                        width: 31,
                        height: 1
                    }, {
                        left: -3,
                        top: 5,
                        width: 33,
                        height: 2
                    }, {
                        left: -4,
                        top: 7,
                        width: 35,
                        height: 2
                    }, {
                        left: -5,
                        top: 9,
                        width: 37,
                        height: 3
                    }, {
                        left: -6,
                        top: 12,
                        width: 39,
                        height: 10
                    }, {
                        left: -5,
                        top: 22,
                        width: 37,
                        height: 3
                    }, {
                        left: -4,
                        top: 25,
                        width: 35,
                        height: 2
                    }, {
                        left: -3,
                        top: 27,
                        width: 33,
                        height: 2
                    }, {
                        left: -2,
                        top: 29,
                        width: 31,
                        height: 1
                    }, {
                        left: -1,
                        top: 30,
                        width: 29,
                        height: 1
                    }, {
                        left: 0,
                        top: 31,
                        width: 27,
                        height: 1
                    }, {
                        left: 1,
                        top: 32,
                        width: 25,
                        height: 1
                    }, {
                        left: 3,
                        top: 33,
                        width: 21,
                        height: 1
                    }, {
                        left: 4,
                        top: 34,
                        width: 19,
                        height: 1
                    }, {
                        left: 7,
                        top: 35,
                        width: 13,
                        height: 1
                    }, {
                        left: 11,
                        top: 36,
                        width: 5,
                        height: 1
                    }],
                    [{
                        left: 10,
                        top: 0,
                        width: 7,
                        height: 1
                    }, {
                        left: 7,
                        top: 1,
                        width: 13,
                        height: 1
                    }, {
                        left: 6,
                        top: 2,
                        width: 15,
                        height: 1
                    }, {
                        left: 4,
                        top: 3,
                        width: 19,
                        height: 1
                    }, {
                        left: 3,
                        top: 4,
                        width: 21,
                        height: 2
                    }, {
                        left: 2,
                        top: 6,
                        width: 23,
                        height: 1
                    }, {
                        left: 1,
                        top: 7,
                        width: 25,
                        height: 3
                    }, {
                        left: 0,
                        top: 10,
                        width: 27,
                        height: 7
                    }, {
                        left: 1,
                        top: 17,
                        width: 25,
                        height: 3
                    }, {
                        left: 2,
                        top: 20,
                        width: 23,
                        height: 2
                    }, {
                        left: 3,
                        top: 22,
                        width: 21,
                        height: 1
                    }, {
                        left: 4,
                        top: 23,
                        width: 19,
                        height: 1
                    }, {
                        left: 5,
                        top: 24,
                        width: 17,
                        height: 1
                    }, {
                        left: 7,
                        top: 25,
                        width: 13,
                        height: 1
                    }, {
                        left: 10,
                        top: 26,
                        width: 7,
                        height: 1
                    }]
                ],
                "11.5": [
                    [{
                        left: 10,
                        top: -3,
                        width: 3,
                        height: 1
                    }, {
                        left: 5,
                        top: -2,
                        width: 13,
                        height: 1
                    }, {
                        left: 3,
                        top: -1,
                        width: 17,
                        height: 1
                    }, {
                        left: 1,
                        top: 0,
                        width: 21,
                        height: 1
                    }, {
                        left: 0,
                        top: 1,
                        width: 23,
                        height: 1
                    }, {
                        left: -1,
                        top: 2,
                        width: 25,
                        height: 1
                    }, {
                        left: -2,
                        top: 3,
                        width: 27,
                        height: 1
                    }, {
                        left: -3,
                        top: 4,
                        width: 29,
                        height: 2
                    }, {
                        left: -4,
                        top: 6,
                        width: 31,
                        height: 2
                    }, {
                        left: -5,
                        top: 8,
                        width: 33,
                        height: 3
                    }, {
                        left: -6,
                        top: 11,
                        width: 35,
                        height: 8
                    }, {
                        left: -5,
                        top: 19,
                        width: 33,
                        height: 3
                    }, {
                        left: -4,
                        top: 22,
                        width: 31,
                        height: 2
                    }, {
                        left: -3,
                        top: 24,
                        width: 29,
                        height: 2
                    }, {
                        left: -2,
                        top: 26,
                        width: 27,
                        height: 1
                    }, {
                        left: -1,
                        top: 27,
                        width: 25,
                        height: 1
                    }, {
                        left: 0,
                        top: 28,
                        width: 23,
                        height: 1
                    }, {
                        left: 1,
                        top: 29,
                        width: 21,
                        height: 1
                    }, {
                        left: 3,
                        top: 30,
                        width: 17,
                        height: 1
                    }, {
                        left: 5,
                        top: 31,
                        width: 13,
                        height: 1
                    }, {
                        left: 10,
                        top: 32,
                        width: 3,
                        height: 1
                    }],
                    [{
                        left: 8,
                        top: 0,
                        width: 7,
                        height: 1
                    }, {
                        left: 6,
                        top: 1,
                        width: 11,
                        height: 1
                    }, {
                        left: 4,
                        top: 2,
                        width: 15,
                        height: 1
                    }, {
                        left: 3,
                        top: 3,
                        width: 17,
                        height: 1
                    }, {
                        left: 2,
                        top: 4,
                        width: 19,
                        height: 2
                    }, {
                        left: 1,
                        top: 6,
                        width: 21,
                        height: 2
                    }, {
                        left: 0,
                        top: 8,
                        width: 23,
                        height: 7
                    }, {
                        left: 1,
                        top: 15,
                        width: 21,
                        height: 2
                    }, {
                        left: 2,
                        top: 17,
                        width: 19,
                        height: 2
                    }, {
                        left: 3,
                        top: 19,
                        width: 17,
                        height: 1
                    }, {
                        left: 4,
                        top: 20,
                        width: 15,
                        height: 1
                    }, {
                        left: 6,
                        top: 21,
                        width: 11,
                        height: 1
                    }, {
                        left: 8,
                        top: 22,
                        width: 7,
                        height: 1
                    }]
                ],
                10: [
                    [{
                        left: 8,
                        top: -4,
                        width: 4,
                        height: 1
                    }, {
                        left: 5,
                        top: -3,
                        width: 10,
                        height: 1
                    }, {
                        left: 3,
                        top: -2,
                        width: 14,
                        height: 1
                    }, {
                        left: 1,
                        top: -1,
                        width: 18,
                        height: 1
                    }, {
                        left: 0,
                        top: 0,
                        width: 20,
                        height: 1
                    }, {
                        left: -1,
                        top: 1,
                        width: 22,
                        height: 2
                    }, {
                        left: -2,
                        top: 3,
                        width: 24,
                        height: 2
                    }, {
                        left: -3,
                        top: 5,
                        width: 26,
                        height: 3
                    }, {
                        left: -4,
                        top: 8,
                        width: 28,
                        height: 4
                    }, {
                        left: -3,
                        top: 12,
                        width: 26,
                        height: 3
                    }, {
                        left: -2,
                        top: 15,
                        width: 24,
                        height: 2
                    }, {
                        left: -1,
                        top: 17,
                        width: 22,
                        height: 2
                    }, {
                        left: 0,
                        top: 19,
                        width: 20,
                        height: 1
                    }, {
                        left: 1,
                        top: 20,
                        width: 18,
                        height: 1
                    }, {
                        left: 3,
                        top: 21,
                        width: 14,
                        height: 1
                    }, {
                        left: 5,
                        top: 22,
                        width: 10,
                        height: 1
                    }, {
                        left: 8,
                        top: 23,
                        width: 4,
                        height: 1
                    }],
                    [{
                        left: 8,
                        top: 0,
                        width: 4,
                        height: 1
                    }, {
                        left: 5,
                        top: 1,
                        width: 10,
                        height: 1
                    }, {
                        left: 4,
                        top: 2,
                        width: 12,
                        height: 1
                    }, {
                        left: 3,
                        top: 3,
                        width: 14,
                        height: 1
                    }, {
                        left: 2,
                        top: 4,
                        width: 16,
                        height: 1
                    }, {
                        left: 1,
                        top: 5,
                        width: 18,
                        height: 3
                    }, {
                        left: 0,
                        top: 8,
                        width: 20,
                        height: 4
                    }, {
                        left: 1,
                        top: 12,
                        width: 18,
                        height: 3
                    }, {
                        left: 2,
                        top: 15,
                        width: 16,
                        height: 1
                    }, {
                        left: 3,
                        top: 16,
                        width: 14,
                        height: 1
                    }, {
                        left: 4,
                        top: 17,
                        width: 12,
                        height: 1
                    }, {
                        left: 5,
                        top: 18,
                        width: 10,
                        height: 1
                    }, {
                        left: 8,
                        top: 19,
                        width: 4,
                        height: 1
                    }]
                ],
                5: [
                    [{
                        left: 1,
                        top: -1,
                        width: 8,
                        height: 1
                    }, {
                        left: -1,
                        top: 0,
                        width: 12,
                        height: 1
                    }, {
                        left: -2,
                        top: 1,
                        width: 14,
                        height: 1
                    }, {
                        left: -3,
                        top: 2,
                        width: 16,
                        height: 1
                    }, {
                        left: -4,
                        top: 3,
                        width: 18,
                        height: 3
                    }, {
                        left: -5,
                        top: 6,
                        width: 20,
                        height: 5
                    }, {
                        left: -4,
                        top: 11,
                        width: 18,
                        height: 3
                    }, {
                        left: -3,
                        top: 14,
                        width: 16,
                        height: 1
                    }, {
                        left: -2,
                        top: 15,
                        width: 14,
                        height: 1
                    }, {
                        left: -1,
                        top: 16,
                        width: 12,
                        height: 1
                    }, {
                        left: 1,
                        top: 17,
                        width: 8,
                        height: 1
                    }],
                    [{
                        left: 3,
                        top: 0,
                        width: 4,
                        height: 1
                    }, {
                        left: 2,
                        top: 1,
                        width: 6,
                        height: 1
                    }, {
                        left: 1,
                        top: 2,
                        width: 8,
                        height: 1
                    }, {
                        left: 0,
                        top: 3,
                        width: 10,
                        height: 4
                    }, {
                        left: 1,
                        top: 7,
                        width: 8,
                        height: 1
                    }, {
                        left: 2,
                        top: 8,
                        width: 6,
                        height: 1
                    }, {
                        left: 3,
                        top: 9,
                        width: 4,
                        height: 1
                    }]
                ],
                4: [
                    [{
                        left: 1,
                        top: -2,
                        width: 6,
                        height: 1
                    }, {
                        left: 0,
                        top: -1,
                        width: 8,
                        height: 1
                    }, {
                        left: -1,
                        top: 0,
                        width: 10,
                        height: 1
                    }, {
                        left: -2,
                        top: 1,
                        width: 12,
                        height: 6
                    }, {
                        left: -1,
                        top: 7,
                        width: 10,
                        height: 1
                    }, {
                        left: 0,
                        top: 8,
                        width: 8,
                        height: 1
                    }, {
                        left: 1,
                        top: 9,
                        width: 6,
                        height: 1
                    }],
                    [{
                        left: 2,
                        top: 0,
                        width: 4,
                        height: 1
                    }, {
                        left: 1,
                        top: 1,
                        width: 6,
                        height: 1
                    }, {
                        left: 0,
                        top: 2,
                        width: 8,
                        height: 4
                    }, {
                        left: 1,
                        top: 6,
                        width: 6,
                        height: 1
                    }, {
                        left: 2,
                        top: 7,
                        width: 4,
                        height: 1
                    }]
                ]
            },
            io = [{
                left: 16,
                top: -3,
                width: 1,
                height: 1
            }, {
                left: 2,
                top: -2,
                width: 27,
                height: 1
            }, {
                left: 0,
                top: -1,
                width: 31,
                height: 1
            }, {
                left: -2,
                top: 0,
                width: 35,
                height: 1
            }, {
                left: -3,
                top: 1,
                width: 37,
                height: 1
            }, {
                left: -4,
                top: 2,
                width: 39,
                height: 2
            }, {
                left: -5,
                top: 4,
                width: 41,
                height: 2
            }, {
                left: -6,
                top: 6,
                width: 43,
                height: 13
            }, {
                left: -7,
                top: 19,
                width: 45,
                height: 1
            }, {
                left: -6,
                top: 20,
                width: 43,
                height: 11
            }, {
                left: -5,
                top: 31,
                width: 41,
                height: 2
            }, {
                left: -4,
                top: 33,
                width: 39,
                height: 2
            }, {
                left: -3,
                top: 35,
                width: 37,
                height: 1
            }, {
                left: -2,
                top: 36,
                width: 35,
                height: 1
            }, {
                left: 0,
                top: 37,
                width: 31,
                height: 1
            }, {
                left: 2,
                top: 38,
                width: 27,
                height: 1
            }, {
                left: 16,
                top: 39,
                width: 1,
                height: 1
            }],
            jo = new Di(31, 29),
            ko = function(a, b, c, d, e, f, h) {
                a *= e;
                b *= e;
                c = new Yj(Math.floor(a), Math.floor(b), Math.ceil(a + c * e) - Math.floor(a), Math.ceil(b + d * e) - Math.floor(b));
                a: {
                    d = Math.max(c.left, f.left);e = Math.min(c.left + c.width, f.left + f.width);
                    if (d <= e && (b = Math.max(c.top, f.top), f = Math.min(c.top + c.height,
                            f.top + f.height), b <= f)) {
                        c.left = d;
                        c.top = b;
                        c.width = e - d;
                        c.height = f - b;
                        f = !0;
                        break a
                    }
                    f = !1
                }(f = !f || 1 > c.width || 1 > c.height ? null : {
                    left: c.left,
                    top: c.top,
                    width: c.width,
                    height: c.height
                }) && h.push(f)
            },
            lo = function(a, b, c, d, e) {
                (0, _.u)(Th(a, Ah, 4) || [], function(a) {
                    var f = _.A(a, 1),
                        k = _.A(a, 2),
                        n = _.A(a, 3),
                        q = _.A(a, 4);
                    a = _.A(a, 5);
                    if (!(1 > n || 1 > q))
                        if (!b || n < jo.width || q < jo.height) {
                            if (!(1 > n || 1 > q)) {
                                var v = ho[a];
                                if (v) {
                                    if (v = v[1], n -= 2 * a, !(0 > n))
                                        for (var Z = (v.length - 1) / 2, ja = 0, P = 0; P < v.length; P++) {
                                            var Ve = v[P],
                                                We = 0;
                                            if (P == Z && (We = q - 2 * a, 0 > We)) continue;
                                            ko(Ve.left + f, Ve.top + k + ja, Ve.width + n, Ve.height + We, c, d, e);
                                            ja += We
                                        }
                                } else ko(f, k, n, q, c, d, e)
                            }
                        } else if (a = n - jo.width, !(0 > a))
                        for (v = 0, n = (io.length - 1) / 2, Z = 0; Z < io.length; Z++) {
                            ja = io[Z];
                            P = 0;
                            if (Z == n && (P = q - jo.height, 0 > P)) continue;
                            ko(ja.left + f, ja.top + k + v, ja.width + a, ja.height + P, c, d, e);
                            v += P
                        }
                });
                (0, _.u)(Th(a, xh, 3) || [], function(a) {
                    var f = _.A(a, 3),
                        k = _.A(a, 1);
                    a = _.A(a, 2);
                    var n = ho[Math.round(2 * f) / 2];
                    if (n)
                        for (k -= f, a -= f, f = n[b ? 0 : 1], n = 0; n < f.length; n++) {
                            var q = f[n];
                            ko(q.left + k, q.top + a, q.width, q.height, c, d, e)
                        } else {
                            f += 2;
                            n = 0;
                            q = f;
                            for (f =
                                3 - 2 * f; n < q;) 0 <= f && (--q, ko(-n + k, -q + a, 2 * n + 1, 1, c, d, e), ko(-n + k, q - 1 + a, 2 * n + 1, 1, c, d, e), ko(-q + k, -n + a, 1, 2 * n, c, d, e), ko(q - 1 + k, -n + a, 1, 2 * n, c, d, e), f += -4 * q + 4), f += 4 * n + 6, n += 1;
                            e.pop();
                            k = e.pop();
                            k.height++;
                            k.width = k.height - 1;
                            ko(k.left, k.top, k.width, k.height, c, d, e)
                        }
                })
            },
            mo = function(a, b) {
                if (a) {
                    var c = a.getBoundingClientRect();
                    if (!(1 > c.width || 1 > c.height)) {
                        var d = new xh,
                            e = c.width / 2;
                        _.B(d, 1, c.left + e);
                        _.B(d, 2, c.top + e);
                        _.B(d, 3, e);
                        c = Th(b, xh, 3);
                        c.push(d);
                        Sh(b, 3, c)
                    }
                }
            };
        var no = function(a, b) {
            X.call(this, b);
            this.R = a;
            this.T = a.get(Jj);
            this.K = this.R.get(Kj);
            this.m = null;
            _.G(this, function() {
                _.De(this.m)
            }, this);
            this.h = null;
            _.G(this, function() {
                _.De(this.h)
            }, this);
            this.l = null;
            _.G(this, function() {
                _.De(this.l)
            }, this);
            this.o = !1
        };
        _.p(no, X);
        _.g = no.prototype;
        _.g.ma = function() {
            this.b = Dn(go, void 0, this.ya())
        };
        _.g.ba = function() {
            no.A.ba.call(this);
            Dl(this.T) && (Vn(this).listen(Y(this, "UUGBcf"), "click", this.Y), Vn(this).listen(this.B(), "mouseleave", this.ic), Vn(this).listen(this.B(), "mouseenter", this.hc), Vn(this).listen(Y(this, "KwZMgc"), "mouseenter", this.fc));
            Vn(this).listen(this.K, Nk, this.M);
            this.M()
        };
        _.g.ic = function() {
            Kl(Y(this, "KwZMgc"), "vjWrIb") || (oo(this, !1), po(this, !1), _.De(this.h), this.h = null)
        };
        _.g.fc = function() {
            Ol(Y(this, "KwZMgc"), "vjWrIb", !0)
        };
        _.g.hc = function() {
            oo(this, !0);
            qo(this);
            po(this, !0);
            _.De(this.h);
            this.h = _.Ce(function() {
                po(this, !1);
                this.h = null
            }, 3E3, this)
        };
        var qo = function(a) {
            _.De(a.m);
            a.m = _.Ce(function() {
                this.o ? qo(this) : oo(this, !1)
            }, 3E3, a)
        };
        no.prototype.$ = function() {
            Kl(Y(this, "KwZMgc"), "AvEm8e") ? (this.o = !0, _.De(this.l), this.l = _.Ce(function() {
                _.M(this, "z");
                this.o = !1;
                oo(this, !1)
            }, 1E3, this)) : this.o = !1
        };
        var oo = function(a, b) {
                var c = Y(a, "KwZMgc");
                Ol(c, "AvEm8e", b);
                b || (Ol(c, "vjWrIb", !1), _.M(a, "z"), a.o = !1, _.De(a.l), a.l = null, _.De(a.m), a.m = null);
                _.M(a, "x")
            },
            po = function(a, b) {
                Ol(Y(a, "UUGBcf"), "sPAbv", b);
                _.M(a, "x")
            };
        no.prototype.M = function() {
            var a = ["f37ZYc", "Anoad", "eOXgae", "C86Dyb"];
            switch (this.K.a) {
                case 1:
                case 2:
                    ro(this, "Anoad", a);
                    break;
                case 3:
                    ro(this, "eOXgae", a);
                    break;
                case 6:
                    ro(this, "f37ZYc", a);
                    break;
                case 10:
                    ro(this, "C86Dyb", a);
                    break;
                default:
                    ro(this, "", a)
            }
        };
        var ro = function(a, b, c) {
            (0, _.u)(c, function(a) {
                Ol(Y(this, a), "RWqoGd", a == b)
            }, a)
        };
        no.prototype.Y = function(a) {
            a.l();
            _.M(this, "y")
        };
        var so = function(a, b) {
            (0, _.u)(["UUGBcf", "KwZMgc"], function(a) {
                mo(Y(this, a), b)
            }, a)
        };
        var uo = function(a, b) {
            var c = this;
            _.N.call(this);
            this.j = a;
            this.a = b;
            this.h = this.j.get(Kj);
            this.b = a.get(Jj);
            this.G = a.get(Uj);
            this.g = null;
            this.m = new un(this.j, this.a);
            _.I(this, this.m);
            a.get(_.T);
            jk(this.a, function() {
                var a = W(c.a),
                    b = a.document.body,
                    f = Dl(c.b);
                b.appendChild(Cn(f ? $n : ao));
                if (f) {
                    b = _.xc(W(c.a));
                    f = new fo(c.j, b);
                    _.I(c, f);
                    var h = to(c, "bE4Lge");
                    Wn(f, h);
                    f = new Zn(b);
                    _.I(c, f);
                    h = to(c, "nkDZ6");
                    Wn(f, h);
                    f = new co(b);
                    _.I(c, f);
                    h = to(c, "elCDOd");
                    Wn(f, h);
                    c.g = new no(c.j, b);
                    b = to(c, "C64E9d");
                    Wn(c.g, b);
                    c.listen(c.g,
                        "z", c.v);
                    c.listen(c.g.B(), "click", c.M);
                    c.listen(c.g, "x", c.c);
                    c.listen(c.g, "y", c.K);
                    c.a.onBoundsChanged.addListener((0, _.r)(c.g.$, c.g));
                    c.listen(c.b, "p", c.H)
                } else c.listen(to(c, "rHCn5c"), "click", c.R);
                c.listen(c.h, Hk, c.l);
                c.l();
                c.listen(a, ["focus", "blur"], c.o);
                c.o();
                c.listen(c.b, "r", c.T);
                c.listen(c.b, "t", c.D)
            })
        };
        _.p(uo, _.N);
        uo.prototype.R = function() {
            switch (this.h.a) {
                case 3:
                    Ck(this.G);
                    break;
                case 6:
                    window.chrome.runtime.reload()
            }
        };
        uo.prototype.o = function() {
            var a = W(this.a);
            a && a.document && Ol(a.document.body, "SgJDAe", a.document.hasFocus())
        };
        uo.prototype.T = function() {
            window.chrome.runtime.reload()
        };
        var vo = function(a) {
                var b = to(a, "L7IVff"),
                    c = Kl(b, "e48oQe");
                return (0, _.bb)(["nkDZ6", "bE4Lge", "elCDOd"], function(a) {
                    a = to(this, a);
                    return c && "none" != a.style.display
                }, a)
            },
            wo = function(a, b) {
                var c = to(a, "L7IVff");
                Ol(c, "e48oQe", b);
                if (b) {
                    var d;
                    switch (a.h.a) {
                        case 3:
                            d = "bE4Lge";
                            break;
                        case 6:
                            d = "nkDZ6";
                            break;
                        case 10:
                            d = "elCDOd"
                    }(0, _.u)(["nkDZ6", "bE4Lge", "elCDOd"], function(a) {
                        var b = to(this, a);
                        Tn(b, a == d)
                    }, a)
                }
                a.c()
            },
            xo = function(a) {
                var b, c = "",
                    d = "",
                    e = "",
                    f = "";
                switch (a.h.a) {
                    case 2:
                        b = "CzdJYb";
                        break;
                    case 3:
                        c = window.chrome.i18n.getMessage("CHROME_APP_CHROME_SIGNIN_MESSAGE");
                        d = window.chrome.i18n.getMessage("CHROME_APP_LEARN_MORE_MESSAGE");
                        e = _.Tg;
                        f = window.chrome.i18n.getMessage("CHROME_APP_SIGNIN_BUTTON");
                        break;
                    case 6:
                        b = "LQr1Lc";
                        c = window.chrome.i18n.getMessage("CHROME_APP_CONNECTION_ERROR_DETAIL");
                        f = window.chrome.i18n.getMessage("CHROME_APP_CONNECTION_ERROR_BUTTON");
                        break;
                    case 10:
                        c = window.chrome.i18n.getMessage("CHROME_APP_OUTDATED_DETAIL"), d = window.chrome.i18n.getMessage("CHROME_APP_LEARN_MORE_MESSAGE"), e = _.Ug
                }
                var h = to(a, "U2TDqc");
                Nl(h);
                b && Ll(h, b);
                b = to(a, "WxquGe");
                Bi(b,
                    c);
                Tn(b, !!c);
                c = to(a, "vkUZWc");
                Bi(c, d);
                Tn(c, !!d);
                c.href = e;
                a = to(a, "rHCn5c");
                Bi(a, f);
                Tn(a, !!f)
            };
        uo.prototype.M = function() {
            wo(this, !vo(this));
            this.b.b.set("auto_ui", !1)
        };
        uo.prototype.H = function() {
            if (W(this.a)) {
                var a = W(this.a).document;
                Ol(a.body, "uLlKUd", Bl(this.b));
                Kl(to(this, "KwUJl"), "hhxgvd") || this.c()
            }
        };
        var to = function(a, b) {
            var c = _.xc(W(a.a));
            return _.zc(b, c.a)
        };
        uo.prototype.v = function() {
            var a = this.m;
            if (!(_.w("CrOS") && 1 < a.g.a.length)) {
                var b = sk(a.b),
                    c = this.g.B().getBoundingClientRect(),
                    b = Bl(a.a) ? c.left + c.width / 2 : b.width - c.left - c.width / 2,
                    d = new Ei(c.left + c.width / 2, c.top + c.height / 2),
                    e = new Xj(0, b, 0, b),
                    c = sk(a.b),
                    b = new Yj(c.left, c.top, c.width, c.height),
                    f = new Ei(c.left + d.x, c.top + d.y),
                    d = Bl(a.a),
                    h = f.x - e.left,
                    k = f.x + e.a,
                    n = zm(a.g, f),
                    e = n.left,
                    f = n.left + n.width - c.width;
                k - c.width < e && (d = !0, b.left = h);
                h + c.width > f && (d = !1, b.left = k - c.width);
                var h = a.a,
                    k = d,
                    q = new ti;
                _.B(q, 1, k);
                vl(h,
                    q);
                tn(b, n, d);
                n = !0;
                if (d && b.left > e || !d && b.left < f) n = !1;
                d = a.a;
                e = n;
                f = new ti;
                _.B(f, 4, e);
                vl(d, f);
                Zj(c, b) || tk(a.b, xm(b))
            }
        };
        uo.prototype.K = function() {
            _.H(this.a)
        };
        uo.prototype.l = function() {
            var a = this;
            if (!this.a.I && W(this.a)) {
                var b = Dl(this.b),
                    c = yl && Dl(this.b),
                    d = W(this.a).document;
                Ol(d.body, "uLlKUd", Bl(this.b));
                Ol(d.body, "MaeNme", b && !c);
                Ol(d.body, "hGMvJe", !b);
                var e = 4 == this.h.a;
                yo(this.a, e);
                _.$c(function() {
                    return Ol(to(a, "KwUJl"), "hhxgvd", e)
                });
                b ? (b = to(this, "L7IVff"), Ol(b, "e48oQe", !1), !e && El(this.b) && wo(this, !0), this.c(), _.$c(function() {
                    return a.c()
                })) : xo(this)
            }
        };
        var zo = function(a, b) {
            (0, _.u)(["bE4Lge", "nkDZ6", "elCDOd", "ftkzZd"], function(a) {
                var c = to(this, a);
                if (c) {
                    var e = c.getBoundingClientRect();
                    a = new Ah;
                    zh(a, e.left);
                    yh(a, e.top);
                    _.B(a, 3, e.width);
                    _.B(a, 4, e.height);
                    a: {
                        e = _.wc(c);
                        if (e.defaultView && e.defaultView.getComputedStyle && (c = e.defaultView.getComputedStyle(c, null))) {
                            c = c.borderRadius || c.getPropertyValue("borderRadius") || "";
                            break a
                        }
                        c = ""
                    }
                    _.B(a, 5, (0, window.parseInt)(c, 10));
                    c = Th(b, Ah, 4);
                    c.push(a);
                    Sh(b, 4, c)
                }
            }, a)
        };
        uo.prototype.c = function() {
            if (Dl(this.b) && W(this.a)) {
                var a = new wh;
                so(this.g, a);
                mo(to(this, "C64E9d"), a);
                zo(this, a);
                Ao(this.a, a)
            }
        };
        uo.prototype.D = function() {
            _.$c(this.c, this)
        };
        var Co = function(a) {
            _.z(this, a, "ca:tu", Bo, null)
        };
        _.p(Co, _.y);
        var Bo = [1, 2, 3];
        Co.messageId = "ca:tu";
        var Do = function(a) {
            _.z(this, a, 0, null, null)
        };
        _.p(Do, _.y);
        Do.prototype.getTitle = function() {
            return _.A(this, 1)
        };
        Do.prototype.setTitle = function(a) {
            _.B(this, 1, a)
        };
        Do.prototype.qa = function() {
            return _.A(this, 3)
        };
        var Eo = function(a) {
            _.z(this, a, 0, null, null)
        };
        _.p(Eo, _.y);
        Eo.prototype.a = function() {
            return _.A(this, 1)
        };
        Eo.prototype.qa = function() {
            return _.A(this, 3)
        };
        var Go = function(a) {
            _.z(this, a, 0, Fo, null)
        };
        _.p(Go, _.y);
        var Fo = [4];
        Go.prototype.a = function() {
            return _.A(this, 1)
        };
        Go.prototype.Aa = function() {
            return _.C(this, Do, 3)
        };
        Go.prototype.sb = function(a) {
            _.E(this, 3, a)
        };
        var Ho = function(a) {
            _.z(this, a, 0, null, null)
        };
        _.p(Ho, _.y);
        Ho.prototype.a = function() {
            return _.A(this, 1)
        };
        Ho.prototype.Aa = function() {
            return _.C(this, Do, 2)
        };
        Ho.prototype.sb = function(a) {
            _.E(this, 2, a)
        };
        var Io = function(a) {
            _.z(this, a, 0, null, null)
        };
        _.p(Io, _.y);
        Io.prototype.a = function() {
            return _.A(this, 1)
        };
        var Jo = function(a) {
            _.z(this, a, "ca:pta", null, null)
        };
        _.p(Jo, _.y);
        Jo.messageId = "ca:pta";
        Jo.prototype.a = function() {
            return _.A(this, 1)
        };
        var Ko = function(a) {
            _.N.call(this);
            this.g = a.get(Kj);
            this.b = a.get(_.T);
            this.G = a.get(Nj);
            this.a = new _.J;
            this.listen(this.b.F(), "ca:tu", this.m);
            var b = (0, _.r)(this.l, this);
            window.chrome.notifications.onClosed.addListener(b);
            var c = (0, _.r)(this.j, this);
            window.chrome.notifications.onClicked.addListener(c);
            var d = (0, _.r)(this.h, this);
            window.chrome.notifications.onButtonClicked.addListener(d);
            _.G(this, function() {
                window.chrome.notifications.onClosed.removeListener(b);
                window.chrome.notifications.onClicked.removeListener(c);
                window.chrome.notifications.onButtonClicked.removeListener(d)
            })
        };
        _.p(Ko, _.N);
        Ko.prototype.m = function(a) {
            a = new Co(a.P);
            (0, _.u)(Th(a, Go, 1), this.c, this);
            (0, _.u)(Th(a, Ho, 2), this.o, this);
            (0, _.u)(Th(a, Io, 3), function(a) {
                Lo(this, a.a())
            }, this)
        };
        Ko.prototype.c = function(a) {
            var b = a.a(),
                c = a.Aa();
            Mo(this, b, c) || No(this.G, _.A(a, 5)).then(function(c) {
                c || (this.a.set(b, a), _.w("CrOS") ? window.chrome.notifications.clear(b, (0, _.r)(function(a) {
                    a || Oo(this, b)
                }, this)) : Oo(this, b))
            }, void 0, this)
        };
        var Oo = function(a, b) {
            window.chrome.notifications.create(b, Po(a, b), function(a) {
                a != b && _.S("Created a notification %s instead of %s", a, b)
            })
        };
        Ko.prototype.o = function(a) {
            var b = a.a();
            a = a.Aa();
            Mo(this, b, a) || (Qo(this, b, a), window.chrome.notifications.update(b, Po(this, b), function(a) {
                a || _.S("Couldn't find a matching notification to update: %s", b)
            }))
        };
        var Lo = function(a, b) {
            a.a.remove(b);
            window.chrome.notifications.clear(b, function() {})
        };
        Ko.prototype.l = function(a, b) {
            var c = (0, _.r)(function() {
                    this.a.remove(a) && Ro(this, a, 2)
                }, this),
                d = (0, _.r)(function() {
                    _.Nc(this.a, a) && Oo(this, a)
                }, this);
            b || !_.Nc(this.a, a) ? c() : window.chrome.idle.queryState(25, function(a) {
                "active" == a ? c() : d()
            })
        };
        Ko.prototype.j = function(a) {
            Lo(this, a);
            Ro(this, a, 1)
        };
        Ko.prototype.h = function(a, b) {
            Lo(this, a);
            Ro(this, a, 3, "" + b)
        };
        var Ro = function(a, b, c, d) {
                var e = new Jo;
                _.B(e, 1, b);
                _.B(e, 2, c);
                _.B(e, 3, d || "");
                a.b.sendMessage(e)
            },
            Po = function(a, b) {
                var c = a.a.get(b),
                    d = c.Aa(),
                    c = Th(c, Eo, 4),
                    d = {
                        type: "basic",
                        iconUrl: d.qa() || window.chrome.runtime.getURL(window.chrome.runtime.getManifest().icons["128"]),
                        title: d.getTitle(),
                        message: _.A(d, 2),
                        contextMessage: a.g.h,
                        priority: 2,
                        requireInteraction: !0,
                        eventTime: (0, _.sa)(),
                        isClickable: !!_.A(d, 4)
                    };
                0 <= _.Xa(_.Vf, 50) || delete d.requireInteraction;
                c && (d.buttons = (0, _.ab)(c, function(a) {
                    return {
                        title: _.A(a, 2),
                        iconUrl: a.qa()
                    }
                }));
                return d
            },
            Mo = function(a, b, c) {
                a = a.a.get(b);
                return a ? (a = a.Aa()) && a.qa() == c.qa() && a.getTitle() == c.getTitle() && _.A(a, 2) == _.A(c, 2) && _.A(a, 5) == _.A(c, 5) : !1
            },
            Qo = function(a, b, c) {
                var d = a.a.get(b);
                d || (d = new Go, a.a.set(b, d));
                d.sb(c)
            };
        var So = function(a) {
            _.z(this, a, "capii_c_ucmc", null, null)
        };
        _.p(So, _.y);
        So.messageId = "capii_c_ucmc";
        var To = function(a) {
            _.L.call(this);
            this.b = a.get(_.T);
            this.a = this.j = 0;
            this.h = this.c = !1;
            a = new _.N(this);
            _.I(this, a);
            a.listen(this.b.F(), "capii_c_ucmc", this.l);
            this.b.sendMessage(new So)
        };
        _.p(To, _.L);
        To.prototype.l = function(a) {
            a = new So(a.P);
            this.c || (this.c = !0, this.h && (_.B(a, 5, !0), this.h = !1));
            var b = this.j != _.A(a, 1);
            this.j = Number(_.A(a, 1));
            var c = this.a != _.A(a, 2);
            this.a = Number(_.A(a, 2));
            _.A(a, 5) ? _.M(this, "A") : (b && _.M(this, "C"), c && _.M(this, "B"))
        };
        var Vo = function(a) {
                window.chrome.browserAction && window.chrome.browserAction.setIcon(Uo(a, !0));
                window.chrome.systemIndicator && window.chrome.systemIndicator.setIcon(Uo(a));
                var b;
                switch (a.a.I ? 1 : a.a.a) {
                    case 2:
                        b = window.chrome.i18n.getMessage("QUASAR_TIP_CONNECTING");
                        break;
                    case 3:
                        b = window.chrome.i18n.getMessage("QUASAR_TIP_NOT_LOGIN");
                        break;
                    case 4:
                        b = a.a.c() ? a.b.a ? window.chrome.i18n.getMessage("CHROME_EXT_TIP_CONNECTED_MISSED_MESSAGES") : window.chrome.i18n.getMessage("QUASAR_TIP_CONNECTED") : window.chrome.i18n.getMessage("QUASAR_TIP_NOT_LOGIN");
                        break;
                    case 6:
                        b = window.chrome.i18n.getMessage("QUASAR_TIP_NOT_LOAD");
                        break;
                    default:
                        b = window.chrome.i18n.getMessage("QUASAR_TIP_DISCONNECTED")
                }
                a = (a = a.a.I ? "" : a.a.h) ? "\n" + a : "";
                b = window.chrome.i18n.getMessage("CHROME_HANGOUTS_SHORT_NAME") + a + "\n" + b;
                window.chrome.browserAction && window.chrome.browserAction.setTitle({
                    title: b
                })
            },
            Uo = function(a, b) {
                var c = !b && _.vb() ? "_mac_" : "_",
                    d = Wo(a),
                    e = window.chrome.runtime.getURL("images_4/presence/" + d + c + "19.png"),
                    c = window.chrome.runtime.getURL("images_4/presence/" + d + c + "38.png");
                return {
                    path: {
                        19: e,
                        38: c
                    }
                }
            },
            Wo = function(a) {
                switch (a.a.I ? 1 : a.a.a) {
                    case 2:
                        return "offline_working";
                    case 4:
                        return a.a.c() ? a.b.a ? "available_missed" : "available" : "offline";
                    case 6:
                        return "offline_unknown";
                    default:
                        return "offline"
                }
            };
        var Zo = function(a, b, c, d) {
            var e = this;
            this.l = a;
            this.Y = b;
            this.Xa = c;
            this.c = this.l.get(Jj);
            this.$ = this.l.get(Kj);
            V.call(this, this.c.j(), d, "uv_main_window" + ul(this.c));
            this.Da = a.get(Hj);
            this.Ea = a.get(_.T);
            this.h = pl(Hl(this.c));
            a = _.C(b, eh, 2);
            this.X = _.A(a, 3);
            this.R = _.A(a, 4);
            this.T = this.h;
            this.ga = 0;
            this.va = null;
            this.ua = _.sd();
            Xo(this, _.A(b, 17));
            this.o = null;
            this.M = _.sd();
            jk(this, function() {
                return Yo(e)
            });
            this.listen(this.c, "s", this.Ua);
            this.listen(this.c, "o", this.Ha)
        };
        _.p(Zo, V);
        var Ao = function(a, b) {
            var c;
            (a.a || a.g) && a.b ? (c = sk(a), c = new Yj(0, 0, c.width, c.height)) : c = new Yj(0, 0, 1, 1);
            var d = [];
            lo(b, yl && Dl(a.c), a.h / 100, c, d);
            d.length && pk(a, d)
        };
        Zo.prototype.focus = function() {
            var a = this;
            2E3 > (0, _.sa)() - this.ga || jk(this, function() {
                a.ga = (0, _.sa)();
                nk(a);
                var b = _.xc(W(a).document);
                (b = _.yc(b.a, "webview", void 0, void 0)[0]) && W(a).document.activeElement != b && b.focus()
            })
        };
        var Xo = function(a, b) {
                b && (a.va = b, a.ua.b(b))
            },
            yo = function(a, b) {
                a.M.a.then(function(a) {
                    return a.show(b)
                })
            };
        Zo.prototype.H = function() {
            this.G && this.l.get(Pj).set("mwo", !1);
            Zo.A.H.call(this)
        };
        var $o = function(a, b) {
                jk(a, function() {
                    var a = _.xc(W(this).document).B("uv_drag_region");
                    if (a) {
                        var d = _.A(b, 1),
                            e = _.A(b, 2),
                            f;
                        d instanceof Ei ? (f = d.x, d = d.y) : (f = d, d = e);
                        a.style.left = Sn(f, !1);
                        a.style.top = Sn(d, !1);
                        f = _.A(b, 3);
                        d = _.A(b, 4);
                        if (f instanceof Di) d = f.height, f = f.width;
                        else if (void 0 == d) throw Error("A");
                        a.style.width = Sn(f, !0);
                        a.style.height = Sn(d, !0);
                        f = 0 < _.A(b, 3) && 0 < _.A(b, 4);
                        Tn(a, f)
                    }
                })
            },
            Yo = function(a) {
                var b = W(a).document.body;
                b.style.zoom = a.h + "%";
                ap(a);
                a.onBoundsChanged.addListener(function() {
                    return ap(a)
                });
                a.listen(a.c, "t", a.fa);
                a.fa();
                var c = a.l.get(Sj);
                fn(c, b);
                _.G(a, function() {
                    return cn(c, b)
                });
                _.A(a.Y, 13) && a.Ca(_.A(a.Y, 13));
                a.listen(a.$, Hk, a.ta);
                a.ta();
                a.G && a.l.get(Pj).set("mwo", !0)
            },
            ap = function(a) {
                var b = sk(a);
                if (b) {
                    var c = xm(b),
                        d = new Jh;
                    vm(d, c);
                    bp(a, d);
                    a.X = b.width;
                    a.R = b.height;
                    a.T = a.h
                }
            };
        Zo.prototype.fa = function() {
            if (!this.I && !ik(this)) {
                var a = pl(Hl(this.c));
                if (a != this.h) {
                    this.G && Dl(this.c) && (this.T = pl(6), this.X = 350, this.R = 576);
                    var b = sk(this),
                        c = zm(this.Da, new Ei(b.left, b.top)),
                        d = a / this.T,
                        e = Math.min(c.width, Math.round(this.X * d)),
                        d = Math.min(c.height, Math.round(this.R * d));
                    this.setPosition(Math.min(b.left, c.left + c.width - e), Math.min(b.top, c.top + c.height - d));
                    this.b.resizeTo(e, d);
                    W(this).document.body.style.zoom = a + "%";
                    this.h = a
                }
            }
        };
        Zo.prototype.Ua = function() {
            rk(this, Gl(this.c))
        };
        Zo.prototype.Ha = function() {
            qk(this, Cl(this.c))
        };
        var bp = function(a, b) {
            a.ua.a.then(function(c) {
                var d = new ui;
                _.B(d, 1, c);
                c = Rh(b);
                _.E(d, 2, c);
                c = new Fh;
                _.E(c, 1, d);
                a.Ea.sendMessage(c)
            })
        };
        Zo.prototype.ta = function() {
            4 == this.$.a ? cp(this) : this.G ? (_.H(this.o), this.o = null, this.M = _.sd()) : _.H(this)
        };
        var cp = function(a) {
                if (W(a)) {
                    var b = !!_.A(a.Y, 3);
                    Hm(a.l.get(Tj), a.Xa, W(a).document, b).then(function(c) {
                        dp(a);
                        a.o = c;
                        _.I(a, a.o);
                        a.M.b(a.o);
                        b && c.a.addEventListener("loadstop", function() {
                            var b = a.c.a.a.get("UseBrightBackground"),
                                b = b && b.da && b.L() ? "body {background-color: red;}" : "body {background-color: transparent;}";
                            c.a.insertCSS({
                                code: b
                            })
                        })
                    })
                }
            },
            dp = function(a) {
                if (100 != a.h && uk) {
                    var b = W(a),
                        c = function() {
                            b.resizeBy(1, 0);
                            b.resizeBy(-1, 0)
                        };
                    a.G && Dl(a.c) && _.wb() ? c() : _.$c(c)
                }
            };
        var fp = function(a) {
            var b = this;
            _.L.call(this);
            this.h = a;
            this.a = new _.J;
            this.l = a.get(_.T);
            this.b = a.get(Jj);
            this.j = a.get(Kj);
            this.c = new _.N(this);
            _.I(this, this.c);
            a = this.l.F();
            this.c.listen(a, "capi:f_cfr", this.v);
            this.c.listen(a, "capi:f_cvr", this.o);
            this.c.listen(this.j, Nk, this.m);
            _.G(this, function() {
                return b.a.forEach(_.H)
            });
            0 != this.h.get(Pj).get("mwo") && ep(this)
        };
        _.p(fp, _.L);
        var gp = function(a, b) {
                if (!b) return {
                    url: a,
                    state: "normal"
                };
                var c = ["url", a],
                    d = _.C(b, eh, 2);
                d && (null != _.A(d, 1) && c.push("left", _.A(d, 1)), null != _.A(d, 2) && c.push("top", _.A(d, 2)), null != _.A(d, 3) && c.push("width", _.A(d, 3)), null != _.A(d, 4) && c.push("height", _.A(d, 4)));
                c.push("frame", _.A(b, 3) ? "none" : "chrome");
                _.A(b, 3) && c.push("alphaEnabled", _.A(b, 3));
                null != _.A(b, 5) && c.push("hidden", _.A(b, 5));
                null != _.A(b, 6) && c.push("resizable", _.A(b, 6));
                null != _.A(b, 7) && c.push("alwaysOnTop", _.A(b, 7));
                null != _.A(b, 8) ? c.push("focused",
                    _.A(b, 8)) : c.push("focused", !1);
                null != _.A(b, 15) && c.push("id", _.A(b, 15));
                d = _.A(b, 16);
                c.push("visibleOnAllWorkspaces", null != d ? d : !0);
                return Hi(c)
            },
            hp = function(a, b, c, d) {
                var e = _.A(b, 15),
                    f = "uv_main_window" == e,
                    h = f && Dl(a.b),
                    k = !1;
                h && !_.A(b, 5) && (k = !0, _.B(b, 5, !0));
                var n = new Zo(a.h, b, d, f);
                a.a.set(e, n);
                if (h) {
                    d = new wh;
                    var h = new Ah,
                        q = _.C(b, eh, 2);
                    zh(h, _.A(q, 1) + _.A(q, 3));
                    yh(h, _.A(q, 2) + _.A(q, 4));
                    _.B(h, 3, 0);
                    _.B(h, 4, 0);
                    _.B(h, 5, 0);
                    q = Th(d, Ah, 4);
                    q.push(h);
                    Sh(d, 4, q);
                    Ao(n, d)
                }
                n.create(gp(c, b));
                _.G(n, function() {
                    return a.a.remove(e)
                });
                k && jk(n, function() {
                    return n.show()
                });
                f && _.I(n, new uo(a.h, n))
            };
        fp.prototype.v = function(a) {
            a = _.C(new Hh(a.P), Kh, 1);
            ip(this, a)
        };
        var ip = function(a, b) {
            var c = _.C(b, Jh, 6),
                d = c && c.getState(),
                e;
            switch (b.pa()) {
                case 2:
                    e = "uv_main_window";
                    break;
                case 5:
                    e = b.a();
                    break;
                case 6:
                case 8:
                    e = (c = d && _.C(d, Bh, 6)) && _.A(c, 3)
            }
            if (!_.Nc(a.a, e)) {
                var f = "dialog.html",
                    c = new ri;
                _.B(c, 15, e);
                e = b.a();
                _.B(c, 17, e);
                e = Cl(a.b);
                _.B(c, 7, e);
                e = Gl(a.b);
                _.B(c, 16, e);
                (e = d && _.C(d, Ch, 4)) && null != _.A(e, 2) && (e = _.A(e, 2), _.B(c, 8, e));
                switch (b.pa()) {
                    case 2:
                        f = Dl(a.b);
                        d = Rh(_.C(sl(a.b), eh, 2));
                        _.E(c, 2, d);
                        _.B(c, 3, f);
                        _.B(c, 6, !f);
                        c.Ca(jp(a));
                        f = "mainapp.html";
                        break;
                    case 5:
                        d = Rh((d && _.C(d, th,
                            15)).l());
                        e = pl(Hl(a.b)) / pl(6);
                        var h = e * _.A(d, 3);
                        _.B(d, 3, h);
                        e *= _.A(d, 4);
                        _.B(d, 4, e);
                        _.E(c, 2, d);
                        _.B(c, 3, !0);
                        _.B(c, 7, !0);
                        _.B(c, 5, !0);
                        _.B(c, 6, !1);
                        break;
                    case 6:
                    case 8:
                        _.B(c, 5, !1), _.B(c, 6, !0), _.B(c, 3, !1), d = pl(Hl(a.b)) / pl(6) * 288, e = Rh(_.C(sl(a.b), eh, 2)), h = Bl(a.b) ? _.A(e, 1) + _.A(e, 3) : _.A(e, 1) - d, _.B(e, 1, h), _.B(e, 3, d), _.E(c, 2, e)
                }
                hp(a, c, f, b)
            }
        };
        fp.prototype.o = function(a) {
            var b = _.C(new Gh(a.P), Ih, 1);
            if (a = kp(this, b.a()))
                if (b = _.C(b, Jh, 2), null != b) {
                    var c = _.C(um(b), Dh, 2);
                    if (c && _.A(c, 2) && a.o) _.H(a);
                    else {
                        c = (c = _.C(um(b), Eh, 1)) && _.A(c, 2);
                        null != c && ok(a, c);
                        c = (c = _.C(um(b), uh, 10)) && _.A(c, 2);
                        null != c && (c ? a.show() : a.hide());
                        (c = _.C(um(b), Ch, 4)) && _.A(c, 2) && a.focus();
                        c = (c = um(b).getTitle()) && c.getTitle();
                        null != c && a.Ca(c);
                        c = (c = _.C(um(b), sh, 14)) && _.C(c, eh, 2);
                        null != c && $o(a, c);
                        c = (c = _.C(um(b), th, 15)) && c.l();
                        null != c && tk(a, c);
                        var d;
                        d = (b = _.C(um(b), rh, 12)) && _.C(b, vh,
                            2);
                        if (null != d && _.C(d, wh, 2)) {
                            Ao(a, _.C(d, wh, 2));
                            b = new Jh;
                            c = new vh;
                            d = _.A(d, 1);
                            _.B(c, 1, d);
                            tm(b, 12);
                            d = um(b, !0);
                            var e = new rh;
                            _.E(e, 2, c);
                            _.E(d, 12, e);
                            bp(a, b)
                        }
                    }
                }
        };
        var ep = function(a) {
                var b = new Jh,
                    c = new fh;
                _.E(b, 2, c);
                vm(b, Rh(_.C(sl(a.b), eh, 2)));
                tm(b, 6);
                var c = um(b, !0),
                    d = new uh;
                _.B(d, 2, !0);
                _.E(c, 10, d);
                c = new Kh;
                _.B(c, 3, 2);
                _.B(c, 1, "uv_main_window");
                _.E(c, 6, b);
                ip(a, c)
            },
            lp = function(a) {
                ep(a);
                a.a.get("uv_main_window").focus()
            },
            mp = function(a) {
                var b = a.a.V();
                _.gb(b, "uv_main_window");
                (0, _.u)(b, function(a) {
                    _.H(this.a.get(a));
                    this.a.remove(a)
                }, a)
            },
            np = function(a) {
                var b = a.a.get("uv_main_window");
                a.a.remove("uv_main_window");
                _.H(b)
            },
            No = function(a, b) {
                var c = kp(a, b);
                return c ? mk(c) :
                    _.qd(!1)
            },
            kp = function(a, b) {
                var c = null;
                a.a.forEach(function(a) {
                    a.va == b && (c = a)
                });
                return c
            },
            jp = function(a) {
                return (a = a.j.h) ? window.chrome.i18n.getMessage("CHROME_APP_WINDOW_TITLE", a) : window.chrome.i18n.getMessage("CHROME_HANGOUTS_SHORT_NAME")
            };
        fp.prototype.m = function() {
            10 == this.j.a && mp(this);
            var a = this.a.get("uv_main_window");
            a && a.Ca(jp(this))
        };
        var pp = function(a) {
                (0, _.u)(op, function(b) {
                    return _.Mg(a, b.id, new b.U(a))
                })
            },
            op = [{
                id: _.T,
                U: _.hg
            }, {
                id: Jj,
                U: rl
            }, {
                id: Tj,
                U: Gm
            }, {
                id: Kj,
                U: Mk
            }, {
                id: Uj,
                U: zk
            }, {
                id: Oj,
                U: Ik
            }, {
                id: Ij,
                U: Lm
            }, {
                id: Hj,
                U: ym
            }, {
                id: Mj,
                U: Zk
            }, {
                id: Qj,
                U: Bm
            }, {
                id: Sj,
                U: sn
            }, {
                id: Nj,
                U: fp
            }, {
                id: Rj,
                U: Ko
            }, {
                id: _.Of,
                U: To
            }, {
                id: Lj,
                U: function(a) {
                    var b = this;
                    this.a = a.get(Kj);
                    this.b = a.get(_.Of);
                    var c = function() {
                        return Vo(b)
                    };
                    this.a.listen(Nk, c);
                    this.b.listen("B", c);
                    _.G(a, c);
                    window.chrome.systemIndicator && window.chrome.systemIndicator.enable();
                    Vo(this)
                }
            }, {
                id: Gj,
                U: em
            }];
        var qp = function(a) {
            _.z(this, a, "h_ec", null, null)
        };
        _.p(qp, _.y);
        qp.messageId = "h_ec";
        var rp = function(a) {
            _.L.call(this);
            a = a.get(_.T);
            var b = new _.N(this);
            _.I(b, b);
            this.a = "u";
            b.listen(a.F(), "capi:clstup", this.b);
            b.listen(a.F(), "h_fr", this.h);
            b.listen(a.F(), "h_ec", this.c)
        };
        _.p(rp, _.L);
        rp.prototype.b = function(a) {
            var b = "r";
            1 == _.A(new nh(a.P), 1) && (b = "u");
            sp(this, b)
        };
        var sp = function(a, b) {
            var c = b != a.a;
            a.a = b;
            c && _.M(a, "E")
        };
        rp.prototype.h = function() {
            sp(this, "u")
        };
        rp.prototype.c = function(a) {
            a = new qp(a.P);
            a = new tp(!!_.A(a, 1));
            _.M(this, a)
        };
        var tp = function(a) {
            _.K.call(this, "F");
            this.a = a
        };
        _.p(tp, _.K);
        var up = function() {
            this.a = null;
            this.b = ll()
        };
        Ki(up);
        up.prototype.start = function(a) {
            var b = this;
            this.b.then(function(c) {
                c.set("running", !0);
                _.S("Loaded storage");
                b.a || (b.a = new _.Ig, _.Mg(b.a, Pj, c, !1), pp(b.a), mh(b.a, [_.T])[_.T].then(function() {
                    return (new rp(b.a)).listen("F", function(a) {
                        return vp(b, a)
                    })
                }));
                a && lp(b.a.get(Nj))
            })
        };
        var vp = function(a, b) {
                b.a ? np(a.a.get(Nj)) : (_.H(a.a), a.a = null, a.b.then(function(a) {
                    return a.set("running", !1)
                }), _.S("Stopped"))
            },
            wp = function() {
                var a = up.za();
                a.b.then(function(b) {
                    var c;
                    (c = 0 != b.get("running")) || ((b = b.get("uv_settings")) ? (b = new ti(b), c = "boolean" == typeof _.A(b, 9) ? _.A(b, 9) : !0) : c = !0);
                    c && a.start(!1)
                })
            };
        window.chrome.runtime.onInstalled.addListener(function(a) {
            _.S("onInstalled event: %s", JSON.stringify(a));
            wp()
        });
        window.chrome.runtime.onStartup.addListener(function() {
            _.S("onStartup event");
            wp()
        });
        window.chrome.app && window.chrome.app.runtime && window.chrome.app.runtime.onLaunched.addListener(function(a) {
            _.S("runtime.onLaunched event: %s", a);
            (a = a && a.source) && -1 != "new_tab_page command_line keyboard extensions_page management_api app_launcher system_tray about_page".split(" ").indexOf(a) && up.za().start(!0)
        });
        window.chrome.systemIndicator && window.chrome.systemIndicator.onClicked.addListener(function() {
            _.S("systemIndicator.onClicked event");
            up.za().start(!0)
        });
        window.chrome.browserAction && window.chrome.browserAction.onClicked.addListener(function() {
            _.S("browserAction.onClicked event");
            up.za().start(!0)
        });
        _.Dg();
        _.S("Welcome to Google Hangouts");
        wp();

    } catch (e) {
        _._DumpException(e)
    }
}).call(this, this.default_main);
// Google Inc.

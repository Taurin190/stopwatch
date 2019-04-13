(function(t) {
    function e(e) {
        for (var i, a, s = e[0], u = e[1], l = e[2], m = 0, p = []; m < s.length; m++) a = s[m], o[a] && p.push(o[a][0]), o[a] = 0;
        for (i in u) Object.prototype.hasOwnProperty.call(u, i) && (t[i] = u[i]);
        c && c(e);
        while (p.length) p.shift()();
        return r.push.apply(r, l || []), n()
    }

    function n() {
        for (var t, e = 0; e < r.length; e++) {
            for (var n = r[e], i = !0, s = 1; s < n.length; s++) {
                var u = n[s];
                0 !== o[u] && (i = !1)
            }
            i && (r.splice(e--, 1), t = a(a.s = n[0]))
        }
        return t
    }
    var i = {},
        o = { app: 0 },
        r = [];

    function a(e) { if (i[e]) return i[e].exports; var n = i[e] = { i: e, l: !1, exports: {} }; return t[e].call(n.exports, n, n.exports, a), n.l = !0, n.exports }
    a.m = t, a.c = i, a.d = function(t, e, n) { a.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n }) }, a.r = function(t) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, a.t = function(t, e) {
        if (1 & e && (t = a(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (a.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
            for (var i in t) a.d(n, i, function(e) { return t[e] }.bind(null, i));
        return n
    }, a.n = function(t) { var e = t && t.__esModule ? function() { return t["default"] } : function() { return t }; return a.d(e, "a", e), e }, a.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, a.p = "/";
    var s = window["webpackJsonp"] = window["webpackJsonp"] || [],
        u = s.push.bind(s);
    s.push = e, s = s.slice();
    for (var l = 0; l < s.length; l++) e(s[l]);
    var c = u;
    r.push([0, "chunk-vendors"]), n()
})({
    0: function(t, e, n) { t.exports = n("56d7") },
    "034f": function(t, e, n) {
        "use strict";
        var i = n("64a9"),
            o = n.n(i);
        o.a
    },
    "56d7": function(t, e, n) {
        "use strict";
        n.r(e);
        n("cadf"), n("551c"), n("f751"), n("097d");
        var i = n("2b0e"),
            o = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", { attrs: { id: "app" } }, [n("div", { attrs: { id: "nav" } }, [n("router-link", { attrs: { to: "/stopwatch/" } }, [t._v("Stop Watch")]), t._v(" |\n    "), n("router-link", { attrs: { to: "/stopwatch/countdown" } }, [t._v("Count Down Timer")]), t._v(" |\n    "), n("router-link", { attrs: { to: "/stopwatch/watch" } }, [t._v("World Watch")])], 1), n("router-view")], 1)
            },
            r = [],
            a = (n("034f"), n("2877")),
            s = {},
            u = Object(a["a"])(s, o, r, !1, null, null, null),
            l = u.exports,
            c = n("8c4f"),
            m = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", { staticClass: "home" }, [n("StopWatch", { attrs: { msg: "Welcome to Stop Watch App" } })], 1)
            },
            p = [],
            d = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", [n("h1", [t._v(t._s(t.msg))]), n("TimerDisplay", { staticClass: "large-display", attrs: { time: t.diffTime, isLarge: !0 } }), n("div", [n("button", { attrs: { disabled: t.isRunning }, on: { click: t.startTimer } }, [t._v("START")]), n("button", { on: { click: t.lapTimer } }, [t._v("LAP")]), n("button", { attrs: { disabled: !t.isRunning }, on: { click: t.stopTimer } }, [t._v("STOP")]), n("button", { attrs: { disabled: t.isRunning }, on: { click: t.resetTimer } }, [t._v("RESET")])]), n("div", [n("ul", t._l(t.lapTimes, function(e, i) { return n("li", { key: e.id }, [n("p", [t._v("LAP" + t._s(i + 1) + "  \n                    "), n("TimerDisplay", { attrs: { time: e.time, isLarge: !1 } })], 1)]) }), 0)])], 1)
            },
            f = [],
            h = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", [n("p", { class: { watch: t.isLarge } }, [t._v("\n        " + t._s(t.hours) + " : \n        " + t._s(t._f("zeroPad")(t.minutes)) + " : \n        " + t._s(t._f("zeroPad")(t.seconds)) + "\n        "), t.showMilliSeconds ? n("span", [t._v(" : " + t._s(t._f("zeroPad")(t.milliSeconds, 3)))]) : t._e()])])
            },
            v = [],
            _ = (n("f576"), n("6b54"), n("06db"), n("c5f6"), { name: "TimerDisplay", props: { time: Number, isLarge: Boolean, showMilliSeconds: { type: Boolean, default: !0 } }, computed: { hours: function() { return Math.floor(this.time / 1e3 / 60 / 60) }, minutes: function() { return Math.floor(this.time / 1e3 / 60) % 60 }, seconds: function() { return Math.floor(this.time / 1e3) % 60 }, milliSeconds: function() { return Math.floor(this.time % 1e3) } }, filters: { zeroPad: function(t, e) { e = "undefined" !== typeof e ? e : 2; return t = t.toString(), t.padStart(e, "0") } } }),
            g = _,
            T = (n("981d"), Object(a["a"])(g, h, v, !1, null, null, null)),
            b = T.exports,
            w = {
                name: "StopWatch",
                props: { msg: String },
                components: { TimerDisplay: b },
                data: function() { return { time_str: "0 : 00 : 00 : 000", nowTime: 0, diffTime: 0, startTime: 0, stoppedTime: 0, isRunning: !1, lapTimes: [] } },
                methods: {
                    startTimer: function() {
                        console.log("START");
                        var t = this;
                        t.isRunning = !0, t.startTime = Math.floor(performance.now()) - this.stoppedTime,
                            function e() { t.nowTime = Math.floor(performance.now()), t.diffTime = t.nowTime - t.startTime, t.animateFrame = requestAnimationFrame(e) }()
                    },
                    lapTimer: function() { console.log("LAP"), this.lapTimes.push({ time: this.diffTime }) },
                    stopTimer: function() { console.log("STOP"), this.isRunning = !1, this.stoppedTime = this.diffTime, cancelAnimationFrame(this.animateFrame) },
                    resetTimer: function() { console.log("RESET"), this.diffTime = 0, this.stoppedTime = 0, this.lapTimes = [] },
                    updateTimeStr: function(t) { time_str = t }
                }
            },
            S = w,
            y = (n("a43e"), Object(a["a"])(S, d, f, !1, null, null, null)),
            R = y.exports,
            O = { name: "home", components: { StopWatch: R } },
            P = O,
            x = Object(a["a"])(P, m, p, !1, null, null, null),
            W = x.exports,
            A = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", { staticClass: "about" }, [n("CountDown", { attrs: { msg: "Welcome to Count Down App" } })], 1)
            },
            j = [],
            M = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", [n("h1", [t._v(t._s(t.msg))]), n("TimerDisplay", { staticClass: "large-display", attrs: { time: t.time, isLarge: !0 } }), n("div", [n("span", [n("label", [t._v("Hours: ")]), n("input", { directives: [{ name: "model", rawName: "v-model.number", value: t.hour_input, expression: "hour_input", modifiers: { number: !0 } }], attrs: { type: "number", disabled: t.isRunning }, domProps: { value: t.hour_input }, on: { input: [function(e) { e.target.composing || (t.hour_input = t._n(e.target.value)) }, t.updateTime], blur: function(e) { return t.$forceUpdate() } } })]), n("label", [t._v("Minute: ")]), n("input", { directives: [{ name: "model", rawName: "v-model.number", value: t.minute_input, expression: "minute_input", modifiers: { number: !0 } }], attrs: { type: "number", disabled: t.isRunning }, domProps: { value: t.minute_input }, on: { input: [function(e) { e.target.composing || (t.minute_input = t._n(e.target.value)) }, t.updateTime], blur: function(e) { return t.$forceUpdate() } } }), n("label", [t._v("Second: ")]), n("input", { directives: [{ name: "model", rawName: "v-model.number", value: t.second_input, expression: "second_input", modifiers: { number: !0 } }], attrs: { type: "number", disabled: t.isRunning }, domProps: { value: t.second_input }, on: { input: [function(e) { e.target.composing || (t.second_input = t._n(e.target.value)) }, t.updateTime], blur: function(e) { return t.$forceUpdate() } } })]), n("button", { attrs: { disabled: !t.canStart || t.isRunning }, on: { click: t.countStart } }, [t._v("START")]), n("button", { attrs: { disabled: !t.isRunning }, on: { click: t.countStop } }, [t._v("STOP")]), n("button", { attrs: { disabled: !t.canStart || t.isRunning }, on: { click: t.countClear } }, [t._v("CLEAR")])], 1)
            },
            k = [],
            C = {
                name: "CountDown",
                props: { msg: String },
                components: { TimerDisplay: b },
                data: function() { return { isRunning: !1, time: 0, originalTime: 0, hour_input: 0, minute_input: 0, second_input: 0, nowTime: 0, diffTime: 0, startTime: 0, stoppedTime: 0 } },
                methods: {
                    countStart: function() {
                        var t = this;
                        t.isRunning = !0, t.originalTime = t.time, t.startTime = Math.floor(performance.now()),
                            function e() { t.nowTime = Math.floor(performance.now()), t.diffTime = t.nowTime - t.startTime, t.time = t.originalTime - t.diffTime, t.animateFrame = requestAnimationFrame(e) }()
                    },
                    countStop: function() { this.isRunning = !1, cancelAnimationFrame(this.animateFrame) },
                    countClear: function() { this.isRunning = !1, this.hour_input = 0, this.minute_input = 0, this.second_input = 0, this.time = 0 },
                    updateTime: function(t) { this.time = 1e3 * this.hour_input * 60 * 60 + 1e3 * this.minute_input * 60 + 1e3 * this.second_input }
                },
                computed: { canStart: function() { return this.time > 0 } },
                filters: { zeroPad: function(t, e) { e = "undefined" !== typeof e ? e : 2; return t = t.toString(), t.padStart(e, "0") } },
                watch: { time: function(t, e) { t <= 0 && this.isRunning && (this.isRunning = !1, cancelAnimationFrame(this.animateFrame), this.hour_input = 0, this.minute_input = 0, this.second_input = 0, this.time = 0, alert("Time Over!")) } }
            },
            D = C,
            E = Object(a["a"])(D, M, k, !1, null, null, null),
            F = E.exports,
            $ = { name: "about", components: { CountDown: F } },
            L = $,
            z = Object(a["a"])(L, A, j, !1, null, null, null),
            N = z.exports,
            U = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", { staticClass: "home" }, [n("WorldWatch", { attrs: { msg: "Welcome to World Watch App" } })], 1)
            },
            q = [],
            B = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", [n("h1", [t._v(t._s(t.msg))]), n("TimerDisplay", { attrs: { time: t.time, isLarge: !0, showMilliSeconds: !1 }, on: { load: t.start } }), n("select", {
                    directives: [{ name: "model", rawName: "v-model", value: t.selected, expression: "selected" }],
                    attrs: { name: "timezone" },
                    on: {
                        change: function(e) {
                            var n = Array.prototype.filter.call(e.target.options, function(t) { return t.selected }).map(function(t) { var e = "_value" in t ? t._value : t.value; return e });
                            t.selected = e.target.multiple ? n : n[0]
                        }
                    }
                }, t._l(t.timezones, function(e, i) { return n("option", { key: i, domProps: { value: e } }, [t._v(t._s(i) + " UTC\n        "), n("span", e > 0 ? [t._v("+" + t._s(e))] : e < 0 ? [t._v(t._s(e))] : [t._v("±" + t._s(e))])]) }), 0)], 1)
            },
            J = [],
            H = n("0a0d"),
            G = n.n(H),
            I = {
                name: "WorldWatch",
                props: { msg: String },
                components: { TimerDisplay: b },
                data: function() { return { time: 0, selected: 9, timeDifference: 9, timezones: { "日本": 9, "イギリス": 0, "フランス": 1, "インド": 3.5, "シンガポール": 8, "シカゴ": -6 } } },
                mounted: function() { this.start() },
                methods: {
                    start: function() {
                        var t = this;
                        t.isRunning = !0, t.time = G()() + 36e5 * t.selected,
                            function e() { t.time = G()() % 864e5, t.time += 36e5 * t.selected, t.time < 0 && (t.time += 864e5), t.time = t.time % 864e5, t.animateFrame = requestAnimationFrame(e) }()
                    }
                },
                computed: {}
            },
            K = I,
            Q = Object(a["a"])(K, B, J, !1, null, null, null),
            V = Q.exports,
            X = { name: "home", components: { WorldWatch: V } },
            Y = X,
            Z = Object(a["a"])(Y, U, q, !1, null, null, null),
            tt = Z.exports;
        i["a"].use(c["a"]);
        var et = new c["a"]({ mode: "history", base: "/", routes: [{ path: "/", name: "home", component: W }, { path: "/countdown", name: "countdown", component: N }, { path: "/watch", name: "watch", component: tt }] });
        i["a"].config.productionTip = !1, new i["a"]({ router: et, render: function(t) { return t(l) } }).$mount("#app")
    },
    "64a9": function(t, e, n) {},
    "981d": function(t, e, n) {
        "use strict";
        var i = n("bba3"),
            o = n.n(i);
        o.a
    },
    a43e: function(t, e, n) {
        "use strict";
        var i = n("b1f6"),
            o = n.n(i);
        o.a
    },
    b1f6: function(t, e, n) {},
    bba3: function(t, e, n) {}
});
//# sourceMappingURL=app.4911fdc7.js.map
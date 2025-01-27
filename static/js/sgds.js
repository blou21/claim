! function(s) {
    var e = {};

    function n(o) {
        if (e[o]) return e[o].exports;
        var i = e[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return s[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = s, n.c = e, n.d = function(s, e, o) {
        n.o(s, e) || Object.defineProperty(s, e, {
            enumerable: !0,
            get: o
        })
    }, n.r = function(s) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(s, "__esModule", {
            value: !0
        })
    }, n.t = function(s, e) {
        if (1 & e && (s = n(s)), 8 & e) return s;
        if (4 & e && "object" == typeof s && s && s.__esModule) return s;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: s
            }), 2 & e && "string" != typeof s)
            for (var i in s) n.d(o, i, function(e) {
                return s[e]
            }.bind(null, i));
        return o
    }, n.n = function(s) {
        var e = s && s.__esModule ? function() {
            return s.default
        } : function() {
            return s
        };
        return n.d(e, "a", e), e
    }, n.o = function(s, e) {
        return Object.prototype.hasOwnProperty.call(s, e)
    }, n.p = "", n(n.s = 0)
}([function(s, e, n) {
    "use strict";
    n.r(e);
    n(1), n(2), n(3), n(4);
    var o = window.jQuery;
    if (!o) throw new Error("SGDS couldn't initialize; please make sure jQuery is loaded!");
    var i = o;
    i(document).ready(function() {
        for (var s = i(".search-toggle"), e = function(e) {
                var n = s[e],
                    o = n.dataset.target,
                    t = i("#".concat(o)),
                    c = i(n).children("span"),
                    a = i(t).find("input");
                i(n).click(function() {
                    c.toggleClass("sgds-icon-search").toggleClass("sgds-icon-cross"), t.toggleClass("hide"), a.focus().val("")
                })
            }, n = 0; n < s.length; n++) e(n);
        var o = i(".sgds-accordion").not(".sgds-accordion-set > .sgds-accordion");
        if (o)
            for (var t = function(s) {
                    var e = o[s],
                        n = i(e).children(".sgds-accordion-header"),
                        t = i(e).children(".sgds-accordion-body");
                    i(n).click(function(s) {
                        var e = i(s.target);
                        i(e).hasClass("is-active") ? (i(e).removeClass("is-active").attr("aria-expanded", !1).children("i").removeClass("sgds-icon-chevron-up").addClass("sgds-icon-chevron-down"), i(t).slideUp(300)) : (i(e).addClass("is-active").attr("aria-expanded", !0).children("i").removeClass("sgds-icon-chevron-down").addClass("sgds-icon-chevron-up"), i(t).slideDown(300))
                    })
                }, c = 0; c < o.length; c++) t(c);
        if (i(".sgds-accordion-set > .sgds-accordion").length)
            for (var a = i(".sgds-accordion-set .sgds-accordion-header"), r = function(s) {
                    var e = a.eq(s);
                    e.click(function() {
                        if (e.hasClass("is-active")) e.removeClass("is-active").attr("aria-expanded", !1), e.siblings(".sgds-accordion-body").slideUp(300), e.children("i").removeClass("sgds-icon-chevron-up").addClass("sgds-icon-chevron-down");
                        else {
                            var s = e.parent().siblings(".sgds-accordion").children(".sgds-accordion-header");
                            s && (s.children("i").removeClass("sgds-icon-chevron-up").addClass("sgds-icon-chevron-down"), s.removeClass("is-active"), s.siblings(".sgds-accordion-body").slideUp(300).removeClass("is-open")), e.addClass("is-active").attr("aria-expanded", !0), e.children("i").removeClass("sgds-icon-chevron-down").addClass("sgds-icon-chevron-up"), e.siblings(".sgds-accordion-body").slideDown(300).addClass("is-open")
                        }
                    })
                }, d = 0; d < a.length; d++) r(d);
        var l = i(".sgds-tabs");
        if (l && l.length > 0)
            for (var v = 0; v < l.length; v++) {
                l.eq(v).find("a[data-tab]").each(function(s, e) {
                    var n = i(e),
                        o = n.parent(),
                        t = document.querySelector(e.dataset.tab);
                    o.hasClass("is-active") || i(t).hide(), n.click(function() {
                        if (!o.hasClass("is-active")) {
                            o.addClass("is-active"), i(t).show();
                            var s = o.siblings();
                            s.length > 0 && s.each(function(s, e) {
                                var n = i(e);
                                n.removeClass("is-active");
                                var o = n.find("a[data-tab]");
                                i(o.attr("data-tab")).hide()
                            })
                        }
                    })
                })
            }
        var g = i(".sgds-navbar-burger");
        g.length > 0 && g.each(function(s, e) {
            i(e).click(function() {
                var s = e.dataset.target,
                    n = document.getElementById(s);
                e.classList.toggle("is-active"), n.classList.toggle("is-active")
            })
        });
        var u = i(".navbar-burger");
        u.length > 0 && u.each(function(s, e) {
            i(e).click(function() {
                var s = e.dataset.target,
                    n = document.getElementById(s);
                e.classList.toggle("is-active"), n.classList.toggle("is-active")
            })
        });
        var f = i(".sgds-dropdown:not(.is-hoverable)");
        f.length > 0 && (f.each(function(s, e) {
            var n = e.querySelector(".sgds-dropdown-trigger");
            n.addEventListener("click", function(s) {
                s.stopPropagation(), e.classList.toggle("is-active");
                var o = n.querySelector(".sgds-icon");
                e.classList.contains("is-active") ? (o.classList.remove("sgds-icon-chevron-down"), o.classList.add("sgds-icon-chevron-up")) : (o.classList.remove("sgds-icon-chevron-up"), o.classList.add("sgds-icon-chevron-down"))
            })
        }), document.addEventListener("click", function(s) {
            f.each(function(e, n) {
                n.contains(s.target) || n.classList.remove("is-active");
                var o = n.querySelector(".sgds-button .sgds-icon");
                o && (o.classList.remove("sgds-icon-chevron-up"), o.classList.add("sgds-icon-chevron-down"))
            })
        }), document.addEventListener("keydown", function(s) {
            27 === (s || window.event).keyCode && f.each(function(s, e) {
                e.classList.remove("is-active");
                var n = e.querySelector(".sgds-button .sgds-icon");
                n && (n.classList.remove("sgds-icon-chevron-up"), n.classList.add("sgds-icon-chevron-down"))
            })
        })), document.querySelector("li.second-level-nav") && function() {
            for (var s = document.querySelectorAll("li.second-level-nav"), e = function(e) {
                    var n = s[e],
                        o = n.nextElementSibling;
                    o && o.classList.contains("second-level-nav-div") && n.addEventListener("click", function(s) {
                        var e = n.querySelector("i");
                        o.classList.contains("is-hidden") ? (o.classList.remove("is-hidden"), e && (e.classList.remove("sgds-icon-chevron-down"), e.classList.add("sgds-icon-chevron-up"))) : (o.classList.add("is-hidden"), e && (e.classList.remove("sgds-icon-chevron-up"), e.classList.add("sgds-icon-chevron-down")))
                    })
                }, n = 0; n < s.length; n++) e(n);
            for (var o = document.querySelectorAll("a.second-level-nav-header-mobile"), i = 0; i < o.length; i++) {
                function t() {
                    var s = i;
                    return function() {
                        var e = o[s].getElementsByTagName("I")[0],
                            n = document.getElementsByClassName("second-level-nav-div-mobile")[s];
                        n.classList.contains("is-hidden") ? (e.classList.remove("sgds-icon-chevron-down"), e.classList.add("sgds-icon-chevron-up"), n.classList.remove("is-hidden")) : (n.classList.add("is-hidden"), e.classList.remove("sgds-icon-chevron-up"), e.classList.add("sgds-icon-chevron-down"))
                    }
                }
                o[i].addEventListener("click", t())
            }
        }();
        var h = i(".language-selector");
        h.length && h.each(function(s, e) {
            var n = i("#" + e.dataset.target);
            i(e).click(function() {
                n.toggle()
            }), document.addEventListener("click", function(s) {
                e.contains(s.target) || n.hide()
            })
        })
    })
}, function(s, e, n) {}, function(s, e, n) {
    s.exports = n.p + "fonts/sgds-icons.svg"
}, function(s, e, n) {
    s.exports = n.p + "fonts/sgds-icons.ttf"
}, function(s, e, n) {
    s.exports = n.p + "fonts/sgds-icons.woff"
}]);


/*===============================
 /media/jui/js/jquery.min.js
 ================================================================================*/;
/*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)
            throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = "".trim, l = {}, m = "1.11.0", n = function(a, b) {
        return new n.fn.init(a, b)
    }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function(a, b) {
        return b.toUpperCase()
    };
    n.fn = n.prototype = {jquery: m, constructor: n, selector: "", length: 0, toArray: function() {
            return d.call(this)
        }, get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        }, pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        }, each: function(a, b) {
            return n.each(this, a, b)
        }, map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        }, slice: function() {
            return this.pushStack(d.apply(this, arguments))
        }, first: function() {
            return this.eq(0)
        }, last: function() {
            return this.eq(-1)
        }, eq: function(a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        }, end: function() {
            return this.prevObject || this.constructor(null)
        }, push: f, sort: c.sort, splice: c.splice}, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e)
                    a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, n.extend({expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(a) {
            throw new Error(a)
        }, noop: function() {
        }, isFunction: function(a) {
            return"function" === n.type(a)
        }, isArray: Array.isArray || function(a) {
            return"array" === n.type(a)
        }, isWindow: function(a) {
            return null != a && a == a.window
        }, isNumeric: function(a) {
            return a - parseFloat(a) >= 0
        }, isEmptyObject: function(a) {
            var b;
            for (b in a)
                return!1;
            return!0
        }, isPlainObject: function(a) {
            var b;
            if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a))
                return!1;
            try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf"))
                    return!1
            } catch (c) {
                return!1
            }
            if (l.ownLast)
                for (b in a)
                    return j.call(a, b);
            for (b in a)
                ;
            return void 0 === b || j.call(a, b)
        }, type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        }, globalEval: function(b) {
            b && n.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        }, camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        }, nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        }, each: function(a, b, c) {
            var d, e = 0, f = a.length, g = s(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c), d === !1)
                            break
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c), d === !1)
                            break
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]), d === !1)
                        break
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]), d === !1)
                        break;
            return a
        }, trim: k && !k.call("\ufeff\xa0") ? function(a) {
            return null == a ? "" : k.call(a)
        } : function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        }, makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        }, inArray: function(a, b, c) {
            var d;
            if (b) {
                if (g)
                    return g.call(b, a, c);
                for (d = b.length, c = c?0 > c?Math.max(0, d + c):c:0; d > c; c++)
                    if (c in b && b[c] === a)
                        return c
            }
            return-1
        }, merge: function(a, b) {
            var c = +b.length, d = 0, e = a.length;
            while (c > d)
                a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d])
                    a[e++] = b[d++];
            return a.length = e, a
        }, grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        }, map: function(a, b, c) {
            var d, f = 0, g = a.length, h = s(a), i = [];
            if (h)
                for (; g > f; f++)
                    d = b(a[f], f, c), null != d && i.push(d);
            else
                for (f in a)
                    d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        }, guid: 1, proxy: function(a, b) {
            var c, e, f;
            return"string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = d.call(arguments, 2), e = function() {
                return a.apply(b || this, c.concat(d.call(arguments)))
            }, e.guid = a.guid = a.guid || n.guid++, e) : void 0
        }, now: function() {
            return+new Date
        }, support: l}), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });
    function s(a) {
        var b = a.length, c = n.type(a);
        return"function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s = "sizzle" + -new Date, t = a.document, u = 0, v = 0, w = eb(), x = eb(), y = eb(), z = function(a, b) {
            return a === b && (j = !0), 0
        }, A = "undefined", B = 1 << 31, C = {}.hasOwnProperty, D = [], E = D.pop, F = D.push, G = D.push, H = D.slice, I = D.indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (this[b] === a)
                    return b;
            return-1
        }, J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", K = "[\\x20\\t\\r\\n\\f]", L = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", M = L.replace("w", "w#"), N = "\\[" + K + "*(" + L + ")" + K + "*(?:([*^$|!~]?=)" + K + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + M + ")|)|)" + K + "*\\]", O = ":(" + L + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + N.replace(3, 8) + ")*)|.*)\\)|)", P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"), Q = new RegExp("^" + K + "*," + K + "*"), R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"), S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"), T = new RegExp(O), U = new RegExp("^" + M + "$"), V = {ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L.replace("w", "w*") + ")"), ATTR: new RegExp("^" + N), PSEUDO: new RegExp("^" + O), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")}, W = /^(?:input|select|textarea|button)$/i, X = /^h\d$/i, Y = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, $ = /[+~]/, _ = /'|\\/g, ab = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"), bb = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        };
        try {
            G.apply(D = H.call(t.childNodes), t.childNodes), D[t.childNodes.length].nodeType
        } catch (cb) {
            G = {apply: D.length ? function(a, b) {
                    F.apply(a, H.call(b))
                } : function(a, b) {
                    var c = a.length, d = 0;
                    while (a[c++] = b[d++])
                        ;
                    a.length = c - 1
                }}
        }
        function db(a, b, d, e) {
            var f, g, h, i, j, m, p, q, u, v;
            if ((b ? b.ownerDocument || b : t) !== l && k(b), b = b || l, d = d || [], !a || "string" != typeof a)
                return d;
            if (1 !== (i = b.nodeType) && 9 !== i)
                return[];
            if (n && !e) {
                if (f = Z.exec(a))
                    if (h = f[1]) {
                        if (9 === i) {
                            if (g = b.getElementById(h), !g || !g.parentNode)
                                return d;
                            if (g.id === h)
                                return d.push(g), d
                        } else if (b.ownerDocument && (g = b.ownerDocument.getElementById(h)) && r(b, g) && g.id === h)
                            return d.push(g), d
                    } else {
                        if (f[2])
                            return G.apply(d, b.getElementsByTagName(a)), d;
                        if ((h = f[3]) && c.getElementsByClassName && b.getElementsByClassName)
                            return G.apply(d, b.getElementsByClassName(h)), d
                    }
                if (c.qsa && (!o || !o.test(a))) {
                    if (q = p = s, u = b, v = 9 === i && a, 1 === i && "object" !== b.nodeName.toLowerCase()) {
                        m = ob(a), (p = b.getAttribute("id")) ? q = p.replace(_, "\\$&") : b.setAttribute("id", q), q = "[id='" + q + "'] ", j = m.length;
                        while (j--)
                            m[j] = q + pb(m[j]);
                        u = $.test(a) && mb(b.parentNode) || b, v = m.join(",")
                    }
                    if (v)
                        try {
                            return G.apply(d, u.querySelectorAll(v)), d
                        } catch (w) {
                        } finally {
                            p || b.removeAttribute("id")
                        }
                }
            }
            return xb(a.replace(P, "$1"), b, d, e)
        }
        function eb() {
            var a = [];
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }
        function fb(a) {
            return a[s] = !0, a
        }
        function gb(a) {
            var b = l.createElement("div");
            try {
                return!!a(b)
            } catch (c) {
                return!1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }
        function hb(a, b) {
            var c = a.split("|"), e = a.length;
            while (e--)
                d.attrHandle[c[e]] = b
        }
        function ib(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || B) - (~a.sourceIndex || B);
            if (d)
                return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b)
                        return-1;
            return a ? 1 : -1
        }
        function jb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return"input" === c && b.type === a
            }
        }
        function kb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return("input" === c || "button" === c) && b.type === a
            }
        }
        function lb(a) {
            return fb(function(b) {
                return b = +b, fb(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function mb(a) {
            return a && typeof a.getElementsByTagName !== A && a
        }
        c = db.support = {}, f = db.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, k = db.setDocument = function(a) {
            var b, e = a ? a.ownerDocument || a : t, g = e.defaultView;
            return e !== l && 9 === e.nodeType && e.documentElement ? (l = e, m = e.documentElement, n = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function() {
                k()
            }, !1) : g.attachEvent && g.attachEvent("onunload", function() {
                k()
            })), c.attributes = gb(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = gb(function(a) {
                return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Y.test(e.getElementsByClassName) && gb(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
            }), c.getById = gb(function(a) {
                return m.appendChild(a).id = s, !e.getElementsByName || !e.getElementsByName(s).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if (typeof b.getElementById !== A && n) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ab, bb);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ab, bb);
                return function(a) {
                    var c = typeof a.getAttributeNode !== A && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return typeof b.getElementsByTagName !== A ? b.getElementsByTagName(a) : void 0
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++])
                        1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return typeof b.getElementsByClassName !== A && n ? b.getElementsByClassName(a) : void 0
            }, p = [], o = [], (c.qsa = Y.test(e.querySelectorAll)) && (gb(function(a) {
                a.innerHTML = "<select t=''><option selected=''></option></select>", a.querySelectorAll("[t^='']").length && o.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || o.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll(":checked").length || o.push(":checked")
            }), gb(function(a) {
                var b = e.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && o.push("name" + K + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), o.push(",.*:")
            })), (c.matchesSelector = Y.test(q = m.webkitMatchesSelector || m.mozMatchesSelector || m.oMatchesSelector || m.msMatchesSelector)) && gb(function(a) {
                c.disconnectedMatch = q.call(a, "div"), q.call(a, "[s!='']:x"), p.push("!=", O)
            }), o = o.length && new RegExp(o.join("|")), p = p.length && new RegExp(p.join("|")), b = Y.test(m.compareDocumentPosition), r = b || Y.test(m.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a)
                            return!0;
                return!1
            }, z = b ? function(a, b) {
                if (a === b)
                    return j = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === t && r(t, a) ? -1 : b === e || b.ownerDocument === t && r(t, b) ? 1 : i ? I.call(i, a) - I.call(i, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b)
                    return j = !0, 0;
                var c, d = 0, f = a.parentNode, g = b.parentNode, h = [a], k = [b];
                if (!f || !g)
                    return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : i ? I.call(i, a) - I.call(i, b) : 0;
                if (f === g)
                    return ib(a, b);
                c = a;
                while (c = c.parentNode)
                    h.unshift(c);
                c = b;
                while (c = c.parentNode)
                    k.unshift(c);
                while (h[d] === k[d])
                    d++;
                return d ? ib(h[d], k[d]) : h[d] === t ? -1 : k[d] === t ? 1 : 0
            }, e) : l
        }, db.matches = function(a, b) {
            return db(a, null, null, b)
        }, db.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== l && k(a), b = b.replace(S, "='$1']"), !(!c.matchesSelector || !n || p && p.test(b) || o && o.test(b)))
                try {
                    var d = q.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d
                } catch (e) {
                }
            return db(b, l, null, [a]).length > 0
        }, db.contains = function(a, b) {
            return(a.ownerDocument || a) !== l && k(a), r(a, b)
        }, db.attr = function(a, b) {
            (a.ownerDocument || a) !== l && k(a);
            var e = d.attrHandle[b.toLowerCase()], f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !n) : void 0;
            return void 0 !== f ? f : c.attributes || !n ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, db.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, db.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (j = !c.detectDuplicates, i = !c.sortStable && a.slice(0), a.sort(z), j) {
                while (b = a[f++])
                    b === a[f] && (e = d.push(f));
                while (e--)
                    a.splice(d[e], 1)
            }
            return i = null, a
        }, e = db.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += e(a)
                } else if (3 === f || 4 === f)
                    return a.nodeValue
            } else
                while (b = a[d++])
                    c += e(b);
            return c
        }, d = db.selectors = {cacheLength: 50, createPseudo: fb, match: V, attrHandle: {}, find: {}, relative: {">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}}, preFilter: {ATTR: function(a) {
                    return a[1] = a[1].replace(ab, bb), a[3] = (a[4] || a[5] || "").replace(ab, bb), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                }, CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || db.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && db.error(a[0]), a
                }, PSEUDO: function(a) {
                    var b, c = !a[5] && a[2];
                    return V.CHILD.test(a[0]) ? null : (a[3] && void 0 !== a[4] ? a[2] = a[4] : c && T.test(c) && (b = ob(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }}, filter: {TAG: function(a) {
                    var b = a.replace(ab, bb).toLowerCase();
                    return"*" === a ? function() {
                        return!0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                }, CLASS: function(a) {
                    var b = w[a + " "];
                    return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && w(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== A && a.getAttribute("class") || "")
                    })
                }, ATTR: function(a, b, c) {
                    return function(d) {
                        var e = db.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                }, CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return!!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), t = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                                            return!1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return!0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && t) {
                                k = q[s] || (q[s] = {}), j = k[a] || [], n = j[0] === u && j[1], m = j[0] === u && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [u, n, m];
                                        break
                                    }
                            } else if (t && (j = (b[s] || (b[s] = {}))[a]) && j[0] === u)
                                m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (t && ((l[s] || (l[s] = {}))[a] = [u, m]), l === b))
                                        break;
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                }, PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || db.error("unsupported pseudo: " + a);
                    return e[s] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? fb(function(a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--)
                            d = I.call(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }}, pseudos: {not: fb(function(a) {
                    var b = [], c = [], d = g(a.replace(P, "$1"));
                    return d[s] ? fb(function(a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--)
                            (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop()
                    }
                }), has: fb(function(a) {
                    return function(b) {
                        return db(a, b).length > 0
                    }
                }), contains: fb(function(a) {
                    return function(b) {
                        return(b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }), lang: fb(function(a) {
                    return U.test(a || "") || db.error("unsupported lang: " + a), a = a.replace(ab, bb).toLowerCase(), function(b) {
                        var c;
                        do
                            if (c = n ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return!1
                    }
                }), target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                }, root: function(a) {
                    return a === m
                }, focus: function(a) {
                    return a === l.activeElement && (!l.hasFocus || l.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                }, enabled: function(a) {
                    return a.disabled === !1
                }, disabled: function(a) {
                    return a.disabled === !0
                }, checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return"input" === b && !!a.checked || "option" === b && !!a.selected
                }, selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                }, empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6)
                            return!1;
                    return!0
                }, parent: function(a) {
                    return!d.pseudos.empty(a)
                }, header: function(a) {
                    return X.test(a.nodeName)
                }, input: function(a) {
                    return W.test(a.nodeName)
                }, button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return"input" === b && "button" === a.type || "button" === b
                }, text: function(a) {
                    var b;
                    return"input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                }, first: lb(function() {
                    return[0]
                }), last: lb(function(a, b) {
                    return[b - 1]
                }), eq: lb(function(a, b, c) {
                    return[0 > c ? c + b : c]
                }), even: lb(function(a, b) {
                    for (var c = 0; b > c; c += 2)
                        a.push(c);
                    return a
                }), odd: lb(function(a, b) {
                    for (var c = 1; b > c; c += 2)
                        a.push(c);
                    return a
                }), lt: lb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; )
                        a.push(d);
                    return a
                }), gt: lb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; )
                        a.push(d);
                    return a
                })}}, d.pseudos.nth = d.pseudos.eq;
        for (b in{radio:!0, checkbox:!0, file:!0, password:!0, image:!0})
            d.pseudos[b] = jb(b);
        for (b in{submit:!0, reset:!0})
            d.pseudos[b] = kb(b);
        function nb() {
        }
        nb.prototype = d.filters = d.pseudos, d.setFilters = new nb;
        function ob(a, b) {
            var c, e, f, g, h, i, j, k = x[a + " "];
            if (k)
                return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = Q.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({value: c, type: e[0].replace(P, " ")}), h = h.slice(c.length));
                for (g in d.filter)
                    !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({value: c, type: g, matches: e}), h = h.slice(c.length));
                if (!c)
                    break
            }
            return b ? h.length : h ? db.error(a) : x(a, i).slice(0)
        }
        function pb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)
                d += a[b].value;
            return d
        }
        function qb(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = v++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e)
                        return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [u, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g))
                            return!0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[s] || (b[s] = {}), (h = i[d]) && h[0] === u && h[1] === f)
                                return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g))
                                return!0
                        }
            }
        }
        function rb(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d))
                        return!1;
                return!0
            } : a[0]
        }
        function sb(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }
        function tb(a, b, c, d, e, f) {
            return d && !d[s] && (d = tb(d)), e && !e[s] && (e = tb(e, f)), fb(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || wb(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : sb(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = sb(r, n), d(j, [], h, i), k = j.length;
                    while (k--)
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)
                                (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)
                            (l = r[k]) && (j = e ? I.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else
                    r = sb(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r)
            })
        }
        function ub(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], i = g || d.relative[" "], j = g ? 1 : 0, k = qb(function(a) {
                return a === b
            }, i, !0), l = qb(function(a) {
                return I.call(b, a) > -1
            }, i, !0), m = [function(a, c, d) {
                    return!g && (d || c !== h) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
                }]; f > j; j++)
                if (c = d.relative[a[j].type])
                    m = [qb(rb(m), c)];
                else {
                    if (c = d.filter[a[j].type].apply(null, a[j].matches), c[s]) {
                        for (e = ++j; f > e; e++)
                            if (d.relative[a[e].type])
                                break;
                        return tb(j > 1 && rb(m), j > 1 && pb(a.slice(0, j - 1).concat({value: " " === a[j - 2].type ? "*" : ""})).replace(P, "$1"), c, e > j && ub(a.slice(j, e)), f > e && ub(a = a.slice(e)), f > e && pb(a))
                    }
                    m.push(c)
                }
            return rb(m)
        }
        function vb(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function(f, g, i, j, k) {
                var m, n, o, p = 0, q = "0", r = f && [], s = [], t = h, v = f || e && d.find.TAG("*", k), w = u += null == t ? 1 : Math.random() || .1, x = v.length;
                for (k && (h = g !== l && g); q !== x && null != (m = v[q]); q++) {
                    if (e && m) {
                        n = 0;
                        while (o = a[n++])
                            if (o(m, g, i)) {
                                j.push(m);
                                break
                            }
                        k && (u = w)
                    }
                    c && ((m = !o && m) && p--, f && r.push(m))
                }
                if (p += q, c && q !== p) {
                    n = 0;
                    while (o = b[n++])
                        o(r, s, g, i);
                    if (f) {
                        if (p > 0)
                            while (q--)
                                r[q] || s[q] || (s[q] = E.call(j));
                        s = sb(s)
                    }
                    G.apply(j, s), k && !f && s.length > 0 && p + b.length > 1 && db.uniqueSort(j)
                }
                return k && (u = w, h = t), r
            };
            return c ? fb(f) : f
        }
        g = db.compile = function(a, b) {
            var c, d = [], e = [], f = y[a + " "];
            if (!f) {
                b || (b = ob(a)), c = b.length;
                while (c--)
                    f = ub(b[c]), f[s] ? d.push(f) : e.push(f);
                f = y(a, vb(e, d))
            }
            return f
        };
        function wb(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++)
                db(a, b[d], c);
            return c
        }
        function xb(a, b, e, f) {
            var h, i, j, k, l, m = ob(a);
            if (!f && 1 === m.length) {
                if (i = m[0] = m[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && c.getById && 9 === b.nodeType && n && d.relative[i[1].type]) {
                    if (b = (d.find.ID(j.matches[0].replace(ab, bb), b) || [])[0], !b)
                        return e;
                    a = a.slice(i.shift().value.length)
                }
                h = V.needsContext.test(a) ? 0 : i.length;
                while (h--) {
                    if (j = i[h], d.relative[k = j.type])
                        break;
                    if ((l = d.find[k]) && (f = l(j.matches[0].replace(ab, bb), $.test(i[0].type) && mb(b.parentNode) || b))) {
                        if (i.splice(h, 1), a = f.length && pb(i), !a)
                            return G.apply(e, f), e;
                        break
                    }
                }
            }
            return g(a, m)(f, b, !n, e, $.test(a) && mb(b.parentNode) || b), e
        }
        return c.sortStable = s.split("").sort(z).join("") === s, c.detectDuplicates = !!j, k(), c.sortDetached = gb(function(a) {
            return 1 & a.compareDocumentPosition(l.createElement("div"))
        }), gb(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || hb("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && gb(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || hb("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), gb(function(a) {
            return null == a.getAttribute("disabled")
        }) || hb(J, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), db
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = n.expr.match.needsContext, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/;
    function x(a, b, c) {
        if (n.isFunction(b))
            return n.grep(a, function(a, d) {
                return!!b.call(a, d, a) !== c
            });
        if (b.nodeType)
            return n.grep(a, function(a) {
                return a === b !== c
            });
        if ("string" == typeof b) {
            if (w.test(b))
                return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return n.inArray(a, b) >= 0 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({find: function(a) {
            var b, c = [], d = this, e = d.length;
            if ("string" != typeof a)
                return this.pushStack(n(a).filter(function() {
                    for (b = 0; e > b; b++)
                        if (n.contains(d[b], this))
                            return!0
                }));
            for (b = 0; e > b; b++)
                n.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        }, filter: function(a) {
            return this.pushStack(x(this, a || [], !1))
        }, not: function(a) {
            return this.pushStack(x(this, a || [], !0))
        }, is: function(a) {
            return!!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
        }});
    var y, z = a.document, A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, B = n.fn.init = function(a, b) {
        var c, d;
        if (!a)
            return this;
        if ("string" == typeof a) {
            if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : A.exec(a), !c || !c[1] && b)
                return!b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : z, !0)), v.test(c[1]) && n.isPlainObject(b))
                    for (c in b)
                        n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            if (d = z.getElementById(c[2]), d && d.parentNode) {
                if (d.id !== c[2])
                    return y.find(a);
                this.length = 1, this[0] = d
            }
            return this.context = z, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
    };
    B.prototype = n.fn, y = n(z);
    var C = /^(?:parents|prev(?:Until|All))/, D = {children: !0, contents: !0, next: !0, prev: !0};
    n.extend({dir: function(a, b, c) {
            var d = [], e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !n(e).is(c)))
                1 === e.nodeType && d.push(e), e = e[b];
            return d
        }, sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
            return c
        }}), n.fn.extend({has: function(a) {
            var b, c = n(a, this), d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (n.contains(this, c[b]))
                        return!0
            })
        }, closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.unique(f) : f)
        }, index: function(a) {
            return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function(a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
        }, addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }});
    function E(a, b) {
        do
            a = a[b];
        while (a && 1 !== a.nodeType);
        return a
    }
    n.each({parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        }, parents: function(a) {
            return n.dir(a, "parentNode")
        }, parentsUntil: function(a, b, c) {
            return n.dir(a, "parentNode", c)
        }, next: function(a) {
            return E(a, "nextSibling")
        }, prev: function(a) {
            return E(a, "previousSibling")
        }, nextAll: function(a) {
            return n.dir(a, "nextSibling")
        }, prevAll: function(a) {
            return n.dir(a, "previousSibling")
        }, nextUntil: function(a, b, c) {
            return n.dir(a, "nextSibling", c)
        }, prevUntil: function(a, b, c) {
            return n.dir(a, "previousSibling", c)
        }, siblings: function(a) {
            return n.sibling((a.parentNode || {}).firstChild, a)
        }, children: function(a) {
            return n.sibling(a.firstChild)
        }, contents: function(a) {
            return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
        }}, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return"Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (D[a] || (e = n.unique(e)), C.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var F = /\S+/g, G = {};
    function H(a) {
        var b = G[a] = {};
        return n.each(a.match(F) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? G[a] || H(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function(l) {
            for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)
                if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                    c = !1;
                    break
                }
            b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
        }, k = {add: function() {
                if (h) {
                    var d = h.length;
                    !function f(b) {
                        n.each(b, function(b, c) {
                            var d = n.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                        })
                    }(arguments), b ? e = h.length : c && (g = d, j(c))
                }
                return this
            }, remove: function() {
                return h && n.each(arguments, function(a, c) {
                    var d;
                    while ((d = n.inArray(c, h, d)) > - 1)
                        h.splice(d, 1), b && (e >= d && e--, f >= d && f--)
                }), this
            }, has: function(a) {
                return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
            }, empty: function() {
                return h = [], e = 0, this
            }, disable: function() {
                return h = i = c = void 0, this
            }, disabled: function() {
                return!h
            }, lock: function() {
                return i = void 0, c || k.disable(), this
            }, locked: function() {
                return!i
            }, fireWith: function(a, c) {
                return!h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this
            }, fire: function() {
                return k.fireWith(this, arguments), this
            }, fired: function() {
                return!!d
            }};
        return k
    }, n.extend({Deferred: function(a) {
            var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]], c = "pending", d = {state: function() {
                    return c
                }, always: function() {
                    return e.done(arguments).fail(arguments), this
                }, then: function() {
                    var a = arguments;
                    return n.Deferred(function(c) {
                        n.each(b, function(b, f) {
                            var g = n.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }), a = null
                    }).promise()
                }, promise: function(a) {
                    return null != a ? n.extend(a, d) : d
                }}, e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        }, when: function(a) {
            var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && n.isFunction(a.promise) ? e : 0, g = 1 === f ? a : n.Deferred(), h = function(a, b, c) {
                return function(e) {
                    b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                }
            }, i, j, k;
            if (e > 1)
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)
                    c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }});
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this
    }, n.extend({isReady: !1, readyWait: 1, holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        }, ready: function(a) {
            if (a === !0 ? !--n.readyWait : !n.isReady) {
                if (!z.body)
                    return setTimeout(n.ready);
                n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(z, [n]), n.fn.trigger && n(z).trigger("ready").off("ready"))
            }
        }});
    function J() {
        z.addEventListener ? (z.removeEventListener("DOMContentLoaded", K, !1), a.removeEventListener("load", K, !1)) : (z.detachEvent("onreadystatechange", K), a.detachEvent("onload", K))
    }
    function K() {
        (z.addEventListener || "load" === event.type || "complete" === z.readyState) && (J(), n.ready())
    }
    n.ready.promise = function(b) {
        if (!I)
            if (I = n.Deferred(), "complete" === z.readyState)
                setTimeout(n.ready);
            else if (z.addEventListener)
                z.addEventListener("DOMContentLoaded", K, !1), a.addEventListener("load", K, !1);
            else {
                z.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
                var c = !1;
                try {
                    c = null == a.frameElement && z.documentElement
                } catch (d) {
                }
                c && c.doScroll && !function e() {
                    if (!n.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (a) {
                            return setTimeout(e, 50)
                        }
                        J(), n.ready()
                    }
                }()
            }
        return I.promise(b)
    };
    var L = "undefined", M;
    for (M in n(l))
        break;
    l.ownLast = "0" !== M, l.inlineBlockNeedsLayout = !1, n(function() {
        var a, b, c = z.getElementsByTagName("body")[0];
        c && (a = z.createElement("div"), a.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", b = z.createElement("div"), c.appendChild(a).appendChild(b), typeof b.style.zoom !== L && (b.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (l.inlineBlockNeedsLayout = 3 === b.offsetWidth) && (c.style.zoom = 1)), c.removeChild(a), a = b = null)
    }), function() {
        var a = z.createElement("div");
        if (null == l.deleteExpando) {
            l.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                l.deleteExpando = !1
            }
        }
        a = null
    }(), n.acceptData = function(a) {
        var b = n.noData[(a.nodeName + " ").toLowerCase()], c = +a.nodeType || 1;
        return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
    };
    var N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g;
    function P(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(O, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                } catch (e) {
                }
                n.data(a, b, c)
            } else
                c = void 0
        }
        return c
    }
    function Q(a) {
        var b;
        for (b in a)
            if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b)
                return!1;
        return!0
    }
    function R(a, b, d, e) {
        if (n.acceptData(a)) {
            var f, g, h = n.expando, i = a.nodeType, j = i ? n.cache : a, k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b)
                return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {toJSON: n.noop}), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f
        }
    }
    function S(a, b, c) {
        if (n.acceptData(a)) {
            var d, e, f = a.nodeType, g = f ? n.cache : a, h = f ? a[n.expando] : n.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--)
                        delete d[b[e]];
                    if (c ? !Q(d) : !n.isEmptyObject(d))
                        return
                }
                (c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }
    n.extend({cache: {}, noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"}, hasData: function(a) {
            return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a)
        }, data: function(a, b, c) {
            return R(a, b, c)
        }, removeData: function(a, b) {
            return S(a, b)
        }, _data: function(a, b, c) {
            return R(a, b, c, !0)
        }, _removeData: function(a, b) {
            return S(a, b, !0)
        }}), n.fn.extend({data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--)
                        d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d]));
                    n._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return"object" == typeof a ? this.each(function() {
                n.data(this, a)
            }) : arguments.length > 1 ? this.each(function() {
                n.data(this, a, b)
            }) : f ? P(f, a, n.data(f, a)) : void 0
        }, removeData: function(a) {
            return this.each(function() {
                n.removeData(this, a)
            })
        }}), n.extend({queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        }, dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function() {
                n.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        }, _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return n._data(a, c) || n._data(a, c, {empty: n.Callbacks("once memory").add(function() {
                    n._removeData(a, b + "queue"), n._removeData(a, c)
                })})
        }}), n.fn.extend({queue: function(a, b) {
            var c = 2;
            return"string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        }, dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a)
            })
        }, clearQueue: function(a) {
            return this.queue(a || "fx", [])
        }, promise: function(a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--)
                c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }});
    var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, U = ["Top", "Right", "Bottom", "Left"], V = function(a, b) {
        return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
    }, W = n.access = function(a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c)
                n.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
            return j.call(n(a), c)
        })), b))
            for (; i > h; h++)
                b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }, X = /^(?:checkbox|radio)$/i;
    !function() {
        var a = z.createDocumentFragment(), b = z.createElement("div"), c = z.createElement("input");
        if (b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a>", l.leadingWhitespace = 3 === b.firstChild.nodeType, l.tbody = !b.getElementsByTagName("tbody").length, l.htmlSerialize = !!b.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== z.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, a.appendChild(c), l.appendChecked = c.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, a.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function() {
            l.noCloneEvent = !1
        }), b.cloneNode(!0).click()), null == l.deleteExpando) {
            l.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                l.deleteExpando = !1
            }
        }
        a = b = c = null
    }(), function() {
        var b, c, d = z.createElement("div");
        for (b in{submit:!0, change:!0, focusin:!0})
            c = "on" + b, (l[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), l[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null
    }();
    var Y = /^(?:input|select|textarea)$/i, Z = /^key/, $ = /^(?:mouse|contextmenu)|click/, _ = /^(?:focusinfocus|focusoutblur)$/, ab = /^([^.]*)(?:\.(.+)|)$/;
    function bb() {
        return!0
    }
    function cb() {
        return!1
    }
    function db() {
        try {
            return z.activeElement
        } catch (a) {
        }
    }
    n.event = {global: {}, add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                    return typeof n === L || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(F) || [""], h = b.length;
                while (h--)
                    f = ab.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".")}, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
                a = null
            }
        }, remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(F) || [""], j = b.length;
                while (j--)
                    if (h = ab.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
                        while (f--)
                            g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o])
                    } else
                        for (o in k)
                            n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
            }
        }, trigger: function(b, c, d, e) {
            var f, g, h, i, k, l, m, o = [d || z], p = j.call(b, "type") ? b.type : b, q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || z, 3 !== d.nodeType && 8 !== d.nodeType && !_.test(p + n.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[n.expando] ? b : new n.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), k = n.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !n.isWindow(d)) {
                    for (i = k.delegateType || p, _.test(i + p) || (h = h.parentNode); h; h = h.parentNode)
                        o.push(h), l = h;
                    l === (d.ownerDocument || z) && o.push(l.defaultView || l.parentWindow || a)
                }
                m = 0;
                while ((h = o[m++]) && !b.isPropagationStopped())
                    b.type = m > 1 ? i : k.bindType || p, f = (n._data(h, "events") || {})[b.type] && n._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && n.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && n.acceptData(d) && g && d[p] && !n.isWindow(d)) {
                    l = d[g], l && (d[g] = null), n.event.triggered = p;
                    try {
                        d[p]()
                    } catch (r) {
                    }
                    n.event.triggered = void 0, l && (d[g] = l)
                }
                return b.result
            }
        }, dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (n._data(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())
                        (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((n.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        }, handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [], f = 0; h > f; f++)
                            d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? n(c, this).index(i) >= 0 : n.find(c, this, null, [i]).length), e[c] && e.push(d);
                        e.length && g.push({elem: i, handlers: e})
                    }
            return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g
        }, fix: function(a) {
            if (a[n.expando])
                return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = $.test(e) ? this.mouseHooks : Z.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
            while (b--)
                c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || z), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
        }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: {props: "char charCode key keyCode".split(" "), filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }}, mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(a, b) {
                var c, d, e, f = b.button, g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || z, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }}, special: {load: {noBubble: !0}, focus: {trigger: function() {
                    if (this !== db() && this.focus)
                        try {
                            return this.focus(), !1
                        } catch (a) {
                        }
                }, delegateType: "focusin"}, blur: {trigger: function() {
                    return this === db() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"}, click: {trigger: function() {
                    return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                }, _default: function(a) {
                    return n.nodeName(a.target, "a")
                }}, beforeunload: {postDispatch: function(a) {
                    void 0 !== a.result && (a.originalEvent.returnValue = a.result)
                }}}, simulate: function(a, b, c, d) {
            var e = n.extend(new n.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }}, n.removeEvent = z.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === L && (a[d] = null), a.detachEvent(d, c))
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && (a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault()) ? bb : cb) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {isDefaultPrevented: cb, isPropagationStopped: cb, isImmediatePropagationStopped: cb, preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = bb, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        }, stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = bb, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        }, stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = bb, this.stopPropagation()
        }}, n.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function(a, b) {
        n.event.special[a] = {delegateType: b, bindType: b, handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return(!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }}
    }), l.submitBubbles || (n.event.special.submit = {setup: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target, c = n.nodeName(b, "input") || n.nodeName(b, "button") ? b.form : void 0;
                c && !n._data(c, "submitBubbles") && (n.event.add(c, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }), n._data(c, "submitBubbles", !0))
            })
        }, postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a, !0))
        }, teardown: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
        }}), l.changeBubbles || (n.event.special.change = {setup: function() {
            return Y.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (n.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), n.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), n.event.simulate("change", this, a, !0)
            })), !1) : void n.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                Y.test(b.nodeName) && !n._data(b, "changeBubbles") && (n.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a, !0)
                }), n._data(b, "changeBubbles", !0))
            })
        }, handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        }, teardown: function() {
            return n.event.remove(this, "._change"), !Y.test(this.nodeName)
        }}), l.focusinBubbles || n.each({focus: "focusin", blur: "focusout"}, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0)
        };
        n.event.special[b] = {setup: function() {
                var d = this.ownerDocument || this, e = n._data(d, b);
                e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1)
            }, teardown: function() {
                var d = this.ownerDocument || this, e = n._data(d, b) - 1;
                e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
            }}
    }), n.fn.extend({on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (f in a)
                    this.on(f, b, c, a[f], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1)
                d = cb;
            else if (!d)
                return this;
            return 1 === e && (g = d, d = function(a) {
                return n().off(a), g.apply(this, arguments)
            }, d.guid = g.guid || (g.guid = n.guid++)), this.each(function() {
                n.event.add(this, a, d, c, b)
            })
        }, one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        }, off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)
                return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a)
                    this.off(e, b, a[e]);
                return this
            }
            return(b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = cb), this.each(function() {
                n.event.remove(this, a, c, b)
            })
        }, trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        }, triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }});
    function eb(a) {
        var b = fb.split("|"), c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length)
                c.createElement(b.pop());
        return c
    }
    var fb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", gb = / jQuery\d+="(?:null|\d+)"/g, hb = new RegExp("<(?:" + fb + ")[\\s/>]", "i"), ib = /^\s+/, jb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, kb = /<([\w:]+)/, lb = /<tbody/i, mb = /<|&#?\w+;/, nb = /<(?:script|style|link)/i, ob = /checked\s*(?:[^=]|=\s*.checked.)/i, pb = /^$|\/(?:java|ecma)script/i, qb = /^true\/(.*)/, rb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, sb = {option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]}, tb = eb(z), ub = tb.appendChild(z.createElement("div"));
    sb.optgroup = sb.option, sb.tbody = sb.tfoot = sb.colgroup = sb.caption = sb.thead, sb.th = sb.td;
    function vb(a, b) {
        var c, d, e = 0, f = typeof a.getElementsByTagName !== L ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== L ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)
                !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, vb(d, b));
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
    }
    function wb(a) {
        X.test(a.type) && (a.defaultChecked = a.checked)
    }
    function xb(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function yb(a) {
        return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a
    }
    function zb(a) {
        var b = qb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }
    function Ab(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++)
            n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
    }
    function Bb(a, b) {
        if (1 === b.nodeType && n.hasData(a)) {
            var c, d, e, f = n._data(a), g = n._data(b, f), h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++)
                        n.event.add(b, c, h[c][d])
            }
            g.data && (g.data = n.extend({}, g.data))
        }
    }
    function Cb(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
                e = n._data(b);
                for (d in e.events)
                    n.removeEvent(b, d, e.handle);
                b.removeAttribute(n.expando)
            }
            "script" === c && b.text !== a.text ? (yb(b).text = a.text, zb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && X.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }
    n.extend({clone: function(a, b, c) {
            var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
            if (l.html5Clone || n.isXMLDoc(a) || !hb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ub.innerHTML = a.outerHTML, ub.removeChild(f = ub.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (d = vb(f), h = vb(a), g = 0; null != (e = h[g]); ++g)
                    d[g] && Cb(e, d[g]);
            if (b)
                if (c)
                    for (h = h || vb(a), d = d || vb(f), g = 0; null != (e = h[g]); g++)
                        Bb(e, d[g]);
                else
                    Bb(a, f);
            return d = vb(f, "script"), d.length > 0 && Ab(d, !i && vb(a, "script")), d = h = e = null, f
        }, buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k, m = a.length, o = eb(b), p = [], q = 0; m > q; q++)
                if (f = a[q], f || 0 === f)
                    if ("object" === n.type(f))
                        n.merge(p, f.nodeType ? [f] : f);
                    else if (mb.test(f)) {
                        h = h || o.appendChild(b.createElement("div")), i = (kb.exec(f) || ["", ""])[1].toLowerCase(), k = sb[i] || sb._default, h.innerHTML = k[1] + f.replace(jb, "<$1></$2>") + k[2], e = k[0];
                        while (e--)
                            h = h.lastChild;
                        if (!l.leadingWhitespace && ib.test(f) && p.push(b.createTextNode(ib.exec(f)[0])), !l.tbody) {
                            f = "table" !== i || lb.test(f) ? "<table>" !== k[1] || lb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;
                            while (e--)
                                n.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
                        }
                        n.merge(p, h.childNodes), h.textContent = "";
                        while (h.firstChild)
                            h.removeChild(h.firstChild);
                        h = o.lastChild
                    } else
                        p.push(b.createTextNode(f));
            h && o.removeChild(h), l.appendChecked || n.grep(vb(p, "input"), wb), q = 0;
            while (f = p[q++])
                if ((!d || -1 === n.inArray(f, d)) && (g = n.contains(f.ownerDocument, f), h = vb(o.appendChild(f), "script"), g && Ab(h), c)) {
                    e = 0;
                    while (f = h[e++])
                        pb.test(f.type || "") && c.push(f)
                }
            return h = null, o
        }, cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.deleteExpando, m = n.event.special; null != (d = a[h]); h++)
                if ((b || n.acceptData(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events)
                        for (e in g.events)
                            m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], k ? delete d[i] : typeof d.removeAttribute !== L ? d.removeAttribute(i) : d[i] = null, c.push(f))
                }
        }}), n.fn.extend({text: function(a) {
            return W(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || z).createTextNode(a))
            }, null, a, arguments.length)
        }, append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = xb(this, a);
                    b.appendChild(a)
                }
            })
        }, prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = xb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        }, before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        }, after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        }, remove: function(a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++)
                b || 1 !== c.nodeType || n.cleanData(vb(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && Ab(vb(c, "script")), c.parentNode.removeChild(c));
            return this
        }, empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && n.cleanData(vb(a, !1));
                while (a.firstChild)
                    a.removeChild(a.firstChild);
                a.options && n.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        }, clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b)
            })
        }, html: function(a) {
            return W(this, function(a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a)
                    return 1 === b.nodeType ? b.innerHTML.replace(gb, "") : void 0;
                if (!("string" != typeof a || nb.test(a) || !l.htmlSerialize && hb.test(a) || !l.leadingWhitespace && ib.test(a) || sb[(kb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(jb, "<$1></$2>");
                    try {
                        for (; d > c; c++)
                            b = this[c] || {}, 1 === b.nodeType && (n.cleanData(vb(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {
                    }
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, n.cleanData(vb(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        }, detach: function(a) {
            return this.remove(a, !0)
        }, domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, k = this.length, m = this, o = k - 1, p = a[0], q = n.isFunction(p);
            if (q || k > 1 && "string" == typeof p && !l.checkClone && ob.test(p))
                return this.each(function(c) {
                    var d = m.eq(c);
                    q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
                });
            if (k && (i = n.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
                for (g = n.map(vb(i, "script"), yb), f = g.length; k > j; j++)
                    d = i, j !== o && (d = n.clone(d, !0, !0), f && n.merge(g, vb(d, "script"))), b.call(this[j], d, j);
                if (f)
                    for (h = g[g.length - 1].ownerDocument, n.map(g, zb), j = 0; f > j; j++)
                        d = g[j], pb.test(d.type || "") && !n._data(d, "globalEval") && n.contains(h, d) && (d.src ? n._evalUrl && n._evalUrl(d.src) : n.globalEval((d.text || d.textContent || d.innerHTML || "").replace(rb, "")));
                i = c = null
            }
            return this
        }}), n.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = 0, e = [], g = n(a), h = g.length - 1; h >= d; d++)
                c = d === h ? this : this.clone(!0), n(g[d])[b](c), f.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Db, Eb = {};
    function Fb(b, c) {
        var d = n(c.createElement(b)).appendTo(c.body), e = a.getDefaultComputedStyle ? a.getDefaultComputedStyle(d[0]).display : n.css(d[0], "display");
        return d.detach(), e
    }
    function Gb(a) {
        var b = z, c = Eb[a];
        return c || (c = Fb(a, b), "none" !== c && c || (Db = (Db || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Db[0].contentWindow || Db[0].contentDocument).document, b.write(), b.close(), c = Fb(a, b), Db.detach()), Eb[a] = c), c
    }
    !function() {
        var a, b, c = z.createElement("div"), d = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], a.style.cssText = "float:left;opacity:.5", l.opacity = /^0.5/.test(a.style.opacity), l.cssFloat = !!a.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === c.style.backgroundClip, a = c = null, l.shrinkWrapBlocks = function() {
            var a, c, e, f;
            if (null == b) {
                if (a = z.getElementsByTagName("body")[0], !a)
                    return;
                f = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", c = z.createElement("div"), e = z.createElement("div"), a.appendChild(c).appendChild(e), b = !1, typeof e.style.zoom !== L && (e.style.cssText = d + ";width:1px;padding:1px;zoom:1", e.innerHTML = "<div></div>", e.firstChild.style.width = "5px", b = 3 !== e.offsetWidth), a.removeChild(c), a = c = e = null
            }
            return b
        }
    }();
    var Hb = /^margin/, Ib = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"), Jb, Kb, Lb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Jb = function(a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
    }, Kb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Jb(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), Ib.test(g) && Hb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
    }) : z.documentElement.currentStyle && (Jb = function(a) {
        return a.currentStyle
    }, Kb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Jb(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Ib.test(g) && !Lb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });
    function Mb(a, b) {
        return{get: function() {
                var c = a();
                if (null != c)
                    return c ? void delete this.get : (this.get = b).apply(this, arguments)
            }}
    }
    !function() {
        var b, c, d, e, f, g, h = z.createElement("div"), i = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", j = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        h.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", b = h.getElementsByTagName("a")[0], b.style.cssText = "float:left;opacity:.5", l.opacity = /^0.5/.test(b.style.opacity), l.cssFloat = !!b.style.cssFloat, h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, b = h = null, n.extend(l, {reliableHiddenOffsets: function() {
                if (null != c)
                    return c;
                var a, b, d, e = z.createElement("div"), f = z.getElementsByTagName("body")[0];
                if (f)
                    return e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = z.createElement("div"), a.style.cssText = i, f.appendChild(a).appendChild(e), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", b = e.getElementsByTagName("td"), b[0].style.cssText = "padding:0;margin:0;border:0;display:none", d = 0 === b[0].offsetHeight, b[0].style.display = "", b[1].style.display = "none", c = d && 0 === b[0].offsetHeight, f.removeChild(a), e = f = null, c
            }, boxSizing: function() {
                return null == d && k(), d
            }, boxSizingReliable: function() {
                return null == e && k(), e
            }, pixelPosition: function() {
                return null == f && k(), f
            }, reliableMarginRight: function() {
                var b, c, d, e;
                if (null == g && a.getComputedStyle) {
                    if (b = z.getElementsByTagName("body")[0], !b)
                        return;
                    c = z.createElement("div"), d = z.createElement("div"), c.style.cssText = i, b.appendChild(c).appendChild(d), e = d.appendChild(z.createElement("div")), e.style.cssText = d.style.cssText = j, e.style.marginRight = e.style.width = "0", d.style.width = "1px", g = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight), b.removeChild(c)
                }
                return g
            }});
        function k() {
            var b, c, h = z.getElementsByTagName("body")[0];
            h && (b = z.createElement("div"), c = z.createElement("div"), b.style.cssText = i, h.appendChild(b).appendChild(c), c.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", n.swap(h, null != h.style.zoom ? {zoom: 1} : {}, function() {
                d = 4 === c.offsetWidth
            }), e = !0, f = !1, g = !0, a.getComputedStyle && (f = "1%" !== (a.getComputedStyle(c, null) || {}).top, e = "4px" === (a.getComputedStyle(c, null) || {width: "4px"}).width), h.removeChild(b), c = h = null)
        }}
    (), n.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b)
            g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)
            a.style[f] = g[f];
        return e
    };
    var Nb = /alpha\([^)]*\)/i, Ob = /opacity\s*=\s*([^)]*)/, Pb = /^(none|table(?!-c[ea]).+)/, Qb = new RegExp("^(" + T + ")(.*)$", "i"), Rb = new RegExp("^([+-])=(" + T + ")", "i"), Sb = {position: "absolute", visibility: "hidden", display: "block"}, Tb = {letterSpacing: 0, fontWeight: 400}, Ub = ["Webkit", "O", "Moz", "ms"];
    function Vb(a, b) {
        if (b in a)
            return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = Ub.length;
        while (e--)
            if (b = Ub[e] + c, b in a)
                return b;
        return d
    }
    function Wb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = n._data(d, "olddisplay", Gb(d.nodeName)))) : f[g] || (e = V(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++)
            d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    function Xb(a, b, c) {
        var d = Qb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function Yb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
            "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
        return g
    }
    function Zb(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Jb(a), g = l.boxSizing() && "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Kb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ib.test(e))
                return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Yb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    n.extend({cssHooks: {opacity: {get: function(a, b) {
                    if (b) {
                        var c = Kb(a, "opacity");
                        return"" === c ? "1" : c
                    }
                }}}, cssNumber: {columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {"float": l.cssFloat ? "cssFloat" : "styleFloat"}, style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                if (b = n.cssProps[h] || (n.cssProps[h] = Vb(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c)
                    return g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = Rb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set"in g && void 0 === (c = g.set(a, c, d)))))
                    try {
                        i[b] = "", i[b] = c
                    } catch (j) {
                    }
            }
        }, css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Vb(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get"in g && (f = g.get(a, !0, c)), void 0 === f && (f = Kb(a, b, d)), "normal" === f && b in Tb && (f = Tb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || n.isNumeric(e) ? e || 0 : f) : f
        }}), n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {get: function(a, c, d) {
                return c ? 0 === a.offsetWidth && Pb.test(n.css(a, "display")) ? n.swap(a, Sb, function() {
                    return Zb(a, b, d)
                }) : Zb(a, b, d) : void 0
            }, set: function(a, c, d) {
                var e = d && Jb(a);
                return Xb(a, c, d ? Yb(a, b, d, l.boxSizing() && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }}
    }), l.opacity || (n.cssHooks.opacity = {get: function(a, b) {
            return Ob.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        }, set: function(a, b) {
            var c = a.style, d = a.currentStyle, e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "", f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Nb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Nb.test(f) ? f.replace(Nb, e) : f + " " + e)
        }}), n.cssHooks.marginRight = Mb(l.reliableMarginRight, function(a, b) {
        return b ? n.swap(a, {display: "inline-block"}, Kb, [a, "marginRight"]) : void 0
    }), n.each({margin: "", padding: "", border: "Width"}, function(a, b) {
        n.cssHooks[a + b] = {expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                    e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }}, Hb.test(a) || (n.cssHooks[a + b].set = Xb)
    }), n.fn.extend({css: function(a, b) {
            return W(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = Jb(a), e = b.length; e > g; g++)
                        f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        }, show: function() {
            return Wb(this, !0)
        }, hide: function() {
            return Wb(this)
        }, toggle: function(a) {
            return"boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                V(this) ? n(this).show() : n(this).hide()
            })
        }});
    function $b(a, b, c, d, e) {
        return new $b.prototype.init(a, b, c, d, e)
    }
    n.Tween = $b, $b.prototype = {constructor: $b, init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        }, cur: function() {
            var a = $b.propHooks[this.prop];
            return a && a.get ? a.get(this) : $b.propHooks._default.get(this)
        }, run: function(a) {
            var b, c = $b.propHooks[this.prop];
            return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : $b.propHooks._default.set(this), this
        }}, $b.prototype.init.prototype = $b.prototype, $b.propHooks = {_default: {get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            }, set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }}}, $b.propHooks.scrollTop = $b.propHooks.scrollLeft = {set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }}, n.easing = {linear: function(a) {
            return a
        }, swing: function(a) {
            return.5 - Math.cos(a * Math.PI) / 2
        }}, n.fx = $b.prototype.init, n.fx.step = {};
    var _b, ac, bc = /^(?:toggle|show|hide)$/, cc = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"), dc = /queueHooks$/, ec = [jc], fc = {"*": [function(a, b) {
                var c = this.createTween(a, b), d = c.cur(), e = cc.exec(b), f = e && e[3] || (n.cssNumber[a] ? "" : "px"), g = (n.cssNumber[a] || "px" !== f && +d) && cc.exec(n.css(c.elem, a)), h = 1, i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do
                        h = h || ".5", g /= h, n.style(c.elem, a, g + f);
                    while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]};
    function gc() {
        return setTimeout(function() {
            _b = void 0
        }), _b = n.now()
    }
    function hc(a, b) {
        var c, d = {height: a}, e = 0;
        for (b = b?1:0; 4 > e; e += 2 - b)
            c = U[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }
    function ic(a, b, c) {
        for (var d, e = (fc[b] || []).concat(fc["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a))
                return d
    }
    function jc(a, b, c) {
        var d, e, f, g, h, i, j, k, m = this, o = {}, p = a.style, q = a.nodeType && V(a), r = n._data(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, m.always(function() {
            m.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = Gb(a.nodeName), "none" === j && (j = k), "inline" === j && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== k ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function() {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], bc.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d])
                        continue;
                    q = !0
                }
                o[d] = r && r[d] || n.style(a, d)
            }
        if (!n.isEmptyObject(o)) {
            r ? "hidden"in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function() {
                n(a).hide()
            }), m.done(function() {
                var b;
                n._removeData(a, "fxshow");
                for (b in o)
                    n.style(a, b, o[b])
            });
            for (d in o)
                g = ic(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function kc(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand"in g) {
                f = g.expand(f), delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c], b[c] = e)
            } else
                b[d] = e
    }
    function lc(a, b, c) {
        var d, e, f = 0, g = ec.length, h = n.Deferred().always(function() {
            delete i.elem
        }), i = function() {
            if (e)
                return!1;
            for (var b = _b || gc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({elem: a, props: n.extend({}, b), opts: n.extend(!0, {specialEasing: {}}, c), originalProperties: b, originalOptions: c, startTime: _b || gc(), duration: c.duration, tweens: [], createTween: function(b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d
            }, stop: function(b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e)
                    return this;
                for (e = !0; d > c; c++)
                    j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
            }}), k = j.props;
        for (kc(k, j.opts.specialEasing); g > f; f++)
            if (d = ec[f].call(j, a, k, j.opts))
                return d;
        return n.map(k, ic, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {elem: a, anim: j, queue: j.opts.queue})), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(lc, {tweener: function(a, b) {
            n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++)
                c = a[d], fc[c] = fc[c] || [], fc[c].unshift(b)
        }, prefilter: function(a, b) {
            b ? ec.unshift(a) : ec.push(a)
        }}), n.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b};
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
        }, d
    }, n.fn.extend({fadeTo: function(a, b, c, d) {
            return this.filter(V).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        }, animate: function(a, b, c, d) {
            var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function() {
                var b = lc(this, n.extend({}, a), f);
                (e || n._data(this, "finish")) && b.stop(!0)
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        }, stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return"string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                var b = !0, e = null != a && a + "queueHooks", f = n.timers, g = n._data(this);
                if (e)
                    g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g)
                        g[e] && g[e].stop && dc.test(e) && d(g[e]);
                for (e = f.length; e--; )
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                (b || !c) && n.dequeue(this, a)
            })
        }, finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = n._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--; )
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++)
                    d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }}), n.each(["toggle", "show", "hide"], function(a, b) {
        var c = n.fn[b];
        n.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(hc(b, !0), a, d, e)
        }
    }), n.each({slideDown: hc("show"), slideUp: hc("hide"), slideToggle: hc("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function(a, b) {
        n.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), n.timers = [], n.fx.tick = function() {
        var a, b = n.timers, c = 0;
        for (_b = n.now(); c < b.length; c++)
            a = b[c], a() || b[c] !== a || b.splice(c--, 1);
        b.length || n.fx.stop(), _b = void 0
    }, n.fx.timer = function(a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
    }, n.fx.interval = 13, n.fx.start = function() {
        ac || (ac = setInterval(n.fx.tick, n.fx.interval))
    }, n.fx.stop = function() {
        clearInterval(ac), ac = null
    }, n.fx.speeds = {slow: 600, fast: 200, _default: 400}, n.fn.delay = function(a, b) {
        return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d)
            }
        })
    }, function() {
        var a, b, c, d, e = z.createElement("div");
        e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = e.getElementsByTagName("a")[0], c = z.createElement("select"), d = c.appendChild(z.createElement("option")), b = e.getElementsByTagName("input")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== e.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = d.selected, l.enctype = !!z.createElement("form").enctype, c.disabled = !0, l.optDisabled = !d.disabled, b = z.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value, a = b = c = d = e = null
    }();
    var mc = /\r/g;
    n.fn.extend({val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)
                    return d = n.isFunction(a), this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                            return null == a ? "" : a + ""
                        })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                if (e)
                    return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(mc, "") : null == c ? "" : c)
            }
        }}), n.extend({valHooks: {option: {get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.text(a)
                }}, select: {get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (l.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f)
                                return b;
                            g.push(b)
                        }
                    return g
                }, set: function(a, b) {
                    var c, d, e = a.options, f = n.makeArray(b), g = e.length;
                    while (g--)
                        if (d = e[g], n.inArray(n.valHooks.option.get(d), f) >= 0)
                            try {
                                d.selected = c = !0
                            } catch (h) {
                                d.scrollHeight
                            }
                        else
                            d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }}}}), n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
            }}, l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var nc, oc, pc = n.expr.attrHandle, qc = /^(?:checked|selected)$/i, rc = l.getSetAttribute, sc = l.input;
    n.fn.extend({attr: function(a, b) {
            return W(this, n.attr, a, b, arguments.length > 1)
        }, removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }}), n.extend({attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f)
                return typeof a.getAttribute === L ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? oc : nc)), void 0 === c ? d && "get"in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set"in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
        }, removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(F);
            if (f && 1 === a.nodeType)
                while (c = f[e++])
                    d = n.propFix[c] || c, n.expr.match.bool.test(c) ? sc && rc || !qc.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(rc ? c : d)
        }, attrHooks: {type: {set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }}}}), oc = {set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : sc && rc || !qc.test(c) ? a.setAttribute(!rc && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c
        }}, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = pc[b] || n.find.attr;
        pc[b] = sc && rc || !qc.test(b) ? function(a, b, d) {
            var e, f;
            return d || (f = pc[b], pc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, pc[b] = f), e
        } : function(a, b, c) {
            return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), sc && rc || (n.attrHooks.value = {set: function(a, b, c) {
            return n.nodeName(a, "input") ? void(a.defaultValue = b) : nc && nc.set(a, b, c)
        }}), rc || (nc = {set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }}, pc.id = pc.name = pc.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, n.valHooks.button = {get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        }, set: nc.set}, n.attrHooks.contenteditable = {set: function(a, b, c) {
            nc.set(a, "" === b ? !1 : b, c)
        }}, n.each(["width", "height"], function(a, b) {
        n.attrHooks[b] = {set: function(a, c) {
                return"" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }}
    })), l.style || (n.attrHooks.style = {get: function(a) {
            return a.style.cssText || void 0
        }, set: function(a, b) {
            return a.style.cssText = b + ""
        }});
    var tc = /^(?:input|select|textarea|button|object)$/i, uc = /^(?:a|area)$/i;
    n.fn.extend({prop: function(a, b) {
            return W(this, n.prop, a, b, arguments.length > 1)
        }, removeProp: function(a) {
            return a = n.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {
                }
            })
        }}), n.extend({propFix: {"for": "htmlFor", "class": "className"}, prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g)
                return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]
        }, propHooks: {tabIndex: {get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : tc.test(a.nodeName) || uc.test(a.nodeName) && a.href ? 0 : -1
                }}}}), l.hrefNormalized || n.each(["href", "src"], function(a, b) {
        n.propHooks[b] = {get: function(a) {
                return a.getAttribute(b, 4)
            }}
    }), l.optSelected || (n.propHooks.selected = {get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }}), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    }), l.enctype || (n.propFix.enctype = "encoding");
    var vc = /[\t\r\n\f]/g;
    n.fn.extend({addClass: function(a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a;
            if (n.isFunction(a))
                return this.each(function(b) {
                    n(this).addClass(a.call(this, b, this.className))
                });
            if (j)
                for (b = (a || "").match(F) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vc, " ") : " ")) {
                        f = 0;
                        while (e = b[f++])
                            d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = n.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        }, removeClass: function(a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || "string" == typeof a && a;
            if (n.isFunction(a))
                return this.each(function(b) {
                    n(this).removeClass(a.call(this, b, this.className))
                });
            if (j)
                for (b = (a || "").match(F) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vc, " ") : "")) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0)
                                d = d.replace(" " + e + " ", " ");
                        g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        }, toggleClass: function(a, b) {
            var c = typeof a;
            return"boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function(c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c) {
                    var b, d = 0, e = n(this), f = a.match(F) || [];
                    while (b = f[d++])
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else
                    (c === L || "boolean" === c) && (this.className && n._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : n._data(this, "__className__") || "")
            })
        }, hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(vc, " ").indexOf(b) >= 0)
                    return!0;
            return!1
        }}), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }, bind: function(a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function(a, b) {
            return this.off(a, null, b)
        }, delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }});
    var wc = n.now(), xc = /\?/, yc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    n.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse)
            return a.JSON.parse(b + "");
        var c, d = null, e = n.trim(b + "");
        return e && !n.trim(e.replace(yc, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
    }, n.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b)
            return null;
        try {
            a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
    };
    var zc, Ac, Bc = /#.*$/, Cc = /([?&])_=[^&]*/, Dc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Ec = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Fc = /^(?:GET|HEAD)$/, Gc = /^\/\//, Hc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Ic = {}, Jc = {}, Kc = "*/".concat("*");
    try {
        Ac = location.href
    } catch (Lc) {
        Ac = z.createElement("a"), Ac.href = "", Ac = Ac.href
    }
    zc = Hc.exec(Ac.toLowerCase()) || [];
    function Mc(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(F) || [];
            if (n.isFunction(c))
                while (d = f[e++])
                    "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function Nc(a, b, c, d) {
        var e = {}, f = a === Jc;
        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return"string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }
    function Oc(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (d in b)
            void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && n.extend(!0, a, c), a
    }
    function Pc(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0])
            i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0]in c)
            f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }
    function Qc(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f)
                    f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f], !g)
                        for (e in j)
                            if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"])
                            b = g(b);
                        else
                            try {
                                b = g(b)
                            } catch (l) {
                                return{state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f}
                            }
                }
        return{state: "success", data: b}
    }
    n.extend({active: 0, lastModified: {}, etag: {}, ajaxSettings: {url: Ac, type: "GET", isLocal: Ec.test(zc[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: {"*": Kc, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"}, converters: {"* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML}, flatOptions: {url: !0, context: !0}}, ajaxSetup: function(a, b) {
            return b ? Oc(Oc(a, n.ajaxSettings), b) : Oc(n.ajaxSettings, a)
        }, ajaxPrefilter: Mc(Ic), ajaxTransport: Mc(Jc), ajax: function(a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b), l = k.context || k, m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event, o = n.Deferred(), p = n.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {readyState: 0, getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!j) {
                            j = {};
                            while (b = Dc.exec(f))
                                j[b[1].toLowerCase()] = b[2]
                        }
                        b = j[a.toLowerCase()]
                    }
                    return null == b ? null : b
                }, getAllResponseHeaders: function() {
                    return 2 === t ? f : null
                }, setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a, r[a] = b), this
                }, overrideMimeType: function(a) {
                    return t || (k.mimeType = a), this
                }, statusCode: function(a) {
                    var b;
                    if (a)
                        if (2 > t)
                            for (b in a)
                                q[b] = [q[b], a[b]];
                        else
                            v.always(a[v.status]);
                    return this
                }, abort: function(a) {
                    var b = a || u;
                    return i && i.abort(b), x(0, b), this
                }};
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || Ac) + "").replace(Bc, "").replace(Gc, zc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(F) || [""], null == k.crossDomain && (c = Hc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === zc[1] && c[2] === zc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (zc[3] || ("http:" === zc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), Nc(Ic, k, b, v), 2 === t)
                return v;
            h = k.global, h && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Fc.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (xc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Cc.test(e) ? e.replace(Cc, "$1_=" + wc++) : e + (xc.test(e) ? "&" : "?") + "_=" + wc++)), k.ifModified && (n.lastModified[e] && v.setRequestHeader("If-Modified-Since", n.lastModified[e]), n.etag[e] && v.setRequestHeader("If-None-Match", n.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Kc + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers)
                v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))
                return v.abort();
            u = "abort";
            for (d in{success:1, error:1, complete:1})
                v[d](k[d]);
            if (i = Nc(Jc, k, b, v)) {
                v.readyState = 1, h && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, i.send(r, x)
                } catch (w) {
                    if (!(2 > t))
                        throw w;
                    x(-1, w)
                }
            } else
                x(-1, "No Transport");
            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Pc(k, v, c)), u = Qc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (n.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
            }
            return v
        }, getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        }, getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }}), n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({url: a, type: b, dataType: e, data: c, success: d})
        }
    }), n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), n._evalUrl = function(a) {
        return n.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, n.fn.extend({wrapAll: function(a) {
            if (n.isFunction(a))
                return this.each(function(b) {
                    n(this).wrapAll(a.call(this, b))
                });
            if (this[0]) {
                var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType)
                        a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        }, wrapInner: function(a) {
            return this.each(n.isFunction(a) ? function(b) {
                n(this).wrapInner(a.call(this, b))
            } : function() {
                var b = n(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }}), n.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !l.reliableHiddenOffsets() && "none" === (a.style && a.style.display || n.css(a, "display"))
    }, n.expr.filters.visible = function(a) {
        return!n.expr.filters.hidden(a)
    };
    var Rc = /%20/g, Sc = /\[\]$/, Tc = /\r?\n/g, Uc = /^(?:submit|button|image|reset|file)$/i, Vc = /^(?:input|select|textarea|keygen)/i;
    function Wc(a, b, c, d) {
        var e;
        if (n.isArray(b))
            n.each(b, function(b, e) {
                c || Sc.test(a) ? d(a, e) : Wc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== n.type(b))
            d(a, b);
        else
            for (e in b)
                Wc(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a))
            n.each(a, function() {
                e(this.name, this.value)
            });
        else
            for (c in a)
                Wc(c, a[c], b, e);
        return d.join("&").replace(Rc, "+")
    }, n.fn.extend({serialize: function() {
            return n.param(this.serializeArray())
        }, serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && Vc.test(this.nodeName) && !Uc.test(a) && (this.checked || !X.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return{name: b.name, value: a.replace(Tc, "\r\n")}
                }) : {name: b.name, value: c.replace(Tc, "\r\n")}
            }).get()
        }}), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return!this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && $c() || _c()
    } : $c;
    var Xc = 0, Yc = {}, Zc = n.ajaxSettings.xhr();
    a.ActiveXObject && n(a).on("unload", function() {
        for (var a in Yc)
            Yc[a](void 0, !0)
    }), l.cors = !!Zc && "withCredentials"in Zc, Zc = l.ajax = !!Zc, Zc && n.ajaxTransport(function(a) {
        if (!a.crossDomain || l.cors) {
            var b;
            return{send: function(c, d) {
                    var e, f = a.xhr(), g = ++Xc;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                        for (e in a.xhrFields)
                            f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c)
                        void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null), b = function(c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState))
                            if (delete Yc[g], b = void 0, f.onreadystatechange = n.noop, e)
                                4 !== f.readyState && f.abort();
                            else {
                                j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                                try {
                                    i = f.statusText
                                } catch (k) {
                                    i = ""
                                }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                            }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Yc[g] = b : b()
                }, abort: function() {
                    b && b(void 0, !0)
                }}
        }
    });
    function $c() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {
        }
    }
    function _c() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {
        }
    }
    n.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /(?:java|ecma)script/}, converters: {"text script": function(a) {
                return n.globalEval(a), a
            }}}), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = z.head || n("head")[0] || z.documentElement;
            return{send: function(d, e) {
                    b = z.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                }, abort: function() {
                    b && b.onload(void 0, !0)
                }}
        }
    });
    var ad = [], bd = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({jsonp: "callback", jsonpCallback: function() {
            var a = ad.pop() || n.expando + "_" + wc++;
            return this[a] = !0, a
        }}), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (bd.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && bd.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(bd, "$1" + e) : b.jsonp !== !1 && (b.url += (xc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, ad.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a)
            return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || z;
        var d = v.exec(a), e = !c && [];
        return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
    };
    var cd = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && cd)
            return cd.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = a.slice(h, a.length), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && n.ajax({url: a, type: f, dataType: "html", data: b}).done(function(a) {
            e = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, e || [a.responseText, b, a])
        }), this
    }, n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    };
    var dd = a.document.documentElement;
    function ed(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    n.offset = {setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using"in b ? b.using.call(a, m) : l.css(m)
        }}, n.fn.extend({offset: function(a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function(b) {
                    n.offset.setOffset(this, a, b)
                });
            var b, c, d = {top: 0, left: 0}, e = this[0], f = e && e.ownerDocument;
            if (f)
                return b = f.documentElement, n.contains(b, e) ? (typeof e.getBoundingClientRect !== L && (d = e.getBoundingClientRect()), c = ed(f), {top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0), left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)}) : d
        }, position: function() {
            if (this[0]) {
                var a, b, c = {top: 0, left: 0}, d = this[0];
                return"fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), {top: b.top - c.top - n.css(d, "marginTop", !0), left: b.left - c.left - n.css(d, "marginLeft", !0)}
            }
        }, offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || dd;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position"))
                    a = a.offsetParent;
                return a || dd
            })
        }}), n.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function(a, b) {
        var c = /Y/.test(b);
        n.fn[a] = function(d) {
            return W(this, function(a, d, e) {
                var f = ed(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = Mb(l.pixelPosition, function(a, c) {
            return c ? (c = Kb(a, b), Ib.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({Height: "height", Width: "width"}, function(a, b) {
        n.each({padding: "inner" + a, content: b, "": "outer" + a}, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                return W(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.size = function() {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var fd = a.jQuery, gd = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = gd), b && a.jQuery === n && (a.jQuery = fd), n
    }, typeof b === L && (a.jQuery = a.$ = n), n
});



/*===============================
 /media/jui/js/jquery-noconflict.js
 ================================================================================*/;
jQuery.noConflict();


/*===============================
 /media/jui/js/jquery-migrate.min.js
 ================================================================================*/;
/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute === void 0 && (jQuery.migrateMute = !0), function(e, t, n) {
    function r(n) {
        var r = t.console;
        i[n] || (i[n] = !0, e.migrateWarnings.push(n), r && r.warn && !e.migrateMute && (r.warn("JQMIGRATE: " + n), e.migrateTrace && r.trace && r.trace()))
    }
    function a(t, a, i, o) {
        if (Object.defineProperty)
            try {
                return Object.defineProperty(t, a, {configurable: !0, enumerable: !0, get: function() {
                        return r(o), i
                    }, set: function(e) {
                        r(o), i = e
                    }}), n
            } catch (s) {
            }
        e._definePropertyBroken = !0, t[a] = i
    }
    var i = {};
    e.migrateWarnings = [], !e.migrateMute && t.console && t.console.log && t.console.log("JQMIGRATE: Logging is active"), e.migrateTrace === n && (e.migrateTrace = !0), e.migrateReset = function() {
        i = {}, e.migrateWarnings.length = 0
    }, "BackCompat" === document.compatMode && r("jQuery is not compatible with Quirks Mode");
    var o = e("<input/>", {size: 1}).attr("size") && e.attrFn, s = e.attr, u = e.attrHooks.value && e.attrHooks.value.get || function() {
        return null
    }, c = e.attrHooks.value && e.attrHooks.value.set || function() {
        return n
    }, l = /^(?:input|button)$/i, d = /^[238]$/, p = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, f = /^(?:checked|selected)$/i;
    a(e, "attrFn", o || {}, "jQuery.attrFn is deprecated"), e.attr = function(t, a, i, u) {
        var c = a.toLowerCase(), g = t && t.nodeType;
        return u && (4 > s.length && r("jQuery.fn.attr( props, pass ) is deprecated"), t && !d.test(g) && (o ? a in o : e.isFunction(e.fn[a]))) ? e(t)[a](i) : ("type" === a && i !== n && l.test(t.nodeName) && t.parentNode && r("Can't change the 'type' of an input or button in IE 6/7/8"), !e.attrHooks[c] && p.test(c) && (e.attrHooks[c] = {get: function(t, r) {
                var a, i = e.prop(t, r);
                return i === !0 || "boolean" != typeof i && (a = t.getAttributeNode(r)) && a.nodeValue !== !1 ? r.toLowerCase() : n
            }, set: function(t, n, r) {
                var a;
                return n === !1 ? e.removeAttr(t, r) : (a = e.propFix[r] || r, a in t && (t[a] = !0), t.setAttribute(r, r.toLowerCase())), r
            }}, f.test(c) && r("jQuery.fn.attr('" + c + "') may use property instead of attribute")), s.call(e, t, a, i))
    }, e.attrHooks.value = {get: function(e, t) {
            var n = (e.nodeName || "").toLowerCase();
            return"button" === n ? u.apply(this, arguments) : ("input" !== n && "option" !== n && r("jQuery.fn.attr('value') no longer gets properties"), t in e ? e.value : null)
        }, set: function(e, t) {
            var a = (e.nodeName || "").toLowerCase();
            return"button" === a ? c.apply(this, arguments) : ("input" !== a && "option" !== a && r("jQuery.fn.attr('value', val) no longer sets properties"), e.value = t, n)
        }};
    var g, h, v = e.fn.init, m = e.parseJSON, y = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    e.fn.init = function(t, n, a) {
        var i;
        return t && "string" == typeof t && !e.isPlainObject(n) && (i = y.exec(e.trim(t))) && i[0] && ("<" !== t.charAt(0) && r("$(html) HTML strings must start with '<' character"), i[3] && r("$(html) HTML text after last tag is ignored"), "#" === i[0].charAt(0) && (r("HTML string cannot start with a '#' character"), e.error("JQMIGRATE: Invalid selector string (XSS)")), n && n.context && (n = n.context), e.parseHTML) ? v.call(this, e.parseHTML(i[2], n, !0), n, a) : v.apply(this, arguments)
    }, e.fn.init.prototype = e.fn, e.parseJSON = function(e) {
        return e || null === e ? m.apply(this, arguments) : (r("jQuery.parseJSON requires a valid JSON string"), null)
    }, e.uaMatch = function(e) {
        e = e.toLowerCase();
        var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || 0 > e.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
        return{browser: t[1] || "", version: t[2] || "0"}
    }, e.browser || (g = e.uaMatch(navigator.userAgent), h = {}, g.browser && (h[g.browser] = !0, h.version = g.version), h.chrome ? h.webkit = !0 : h.webkit && (h.safari = !0), e.browser = h), a(e, "browser", e.browser, "jQuery.browser is deprecated"), e.sub = function() {
        function t(e, n) {
            return new t.fn.init(e, n)
        }
        e.extend(!0, t, this), t.superclass = this, t.fn = t.prototype = this(), t.fn.constructor = t, t.sub = this.sub, t.fn.init = function(r, a) {
            return a && a instanceof e && !(a instanceof t) && (a = t(a)), e.fn.init.call(this, r, a, n)
        }, t.fn.init.prototype = t.fn;
        var n = t(document);
        return r("jQuery.sub() is deprecated"), t
    }, e.ajaxSetup({converters: {"text json": e.parseJSON}});
    var b = e.fn.data;
    e.fn.data = function(t) {
        var a, i, o = this[0];
        return!o || "events" !== t || 1 !== arguments.length || (a = e.data(o, t), i = e._data(o, t), a !== n && a !== i || i === n) ? b.apply(this, arguments) : (r("Use of jQuery.fn.data('events') is deprecated"), i)
    };
    var j = /\/(java|ecma)script/i, w = e.fn.andSelf || e.fn.addBack;
    e.fn.andSelf = function() {
        return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), w.apply(this, arguments)
    }, e.clean || (e.clean = function(t, a, i, o) {
        a = a || document, a = !a.nodeType && a[0] || a, a = a.ownerDocument || a, r("jQuery.clean() is deprecated");
        var s, u, c, l, d = [];
        if (e.merge(d, e.buildFragment(t, a).childNodes), i)
            for (c = function(e) {
                return!e.type || j.test(e.type) ? o ? o.push(e.parentNode ? e.parentNode.removeChild(e) : e) : i.appendChild(e) : n
            }, s = 0; null != (u = d[s]); s++)
                e.nodeName(u, "script") && c(u) || (i.appendChild(u), u.getElementsByTagName !== n && (l = e.grep(e.merge([], u.getElementsByTagName("script")), c), d.splice.apply(d, [s + 1, 0].concat(l)), s += l.length));
        return d
    });
    var Q = e.event.add, x = e.event.remove, k = e.event.trigger, N = e.fn.toggle, T = e.fn.live, M = e.fn.die, S = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess", C = RegExp("\\b(?:" + S + ")\\b"), H = /(?:^|\s)hover(\.\S+|)\b/, A = function(t) {
        return"string" != typeof t || e.event.special.hover ? t : (H.test(t) && r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), t && t.replace(H, "mouseenter$1 mouseleave$1"))
    };
    e.event.props && "attrChange" !== e.event.props[0] && e.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), e.event.dispatch && a(e.event, "handle", e.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), e.event.add = function(e, t, n, a, i) {
        e !== document && C.test(t) && r("AJAX events should be attached to document: " + t), Q.call(this, e, A(t || ""), n, a, i)
    }, e.event.remove = function(e, t, n, r, a) {
        x.call(this, e, A(t) || "", n, r, a)
    }, e.fn.error = function() {
        var e = Array.prototype.slice.call(arguments, 0);
        return r("jQuery.fn.error() is deprecated"), e.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, e) : (this.triggerHandler.apply(this, e), this)
    }, e.fn.toggle = function(t, n) {
        if (!e.isFunction(t) || !e.isFunction(n))
            return N.apply(this, arguments);
        r("jQuery.fn.toggle(handler, handler...) is deprecated");
        var a = arguments, i = t.guid || e.guid++, o = 0, s = function(n) {
            var r = (e._data(this, "lastToggle" + t.guid) || 0) % o;
            return e._data(this, "lastToggle" + t.guid, r + 1), n.preventDefault(), a[r].apply(this, arguments) || !1
        };
        for (s.guid = i; a.length > o; )
            a[o++].guid = i;
        return this.click(s)
    }, e.fn.live = function(t, n, a) {
        return r("jQuery.fn.live() is deprecated"), T ? T.apply(this, arguments) : (e(this.context).on(t, this.selector, n, a), this)
    }, e.fn.die = function(t, n) {
        return r("jQuery.fn.die() is deprecated"), M ? M.apply(this, arguments) : (e(this.context).off(t, this.selector || "**", n), this)
    }, e.event.trigger = function(e, t, n, a) {
        return n || C.test(e) || r("Global events are undocumented and deprecated"), k.call(this, e, t, n || document, a)
    }, e.each(S.split("|"), function(t, n) {
        e.event.special[n] = {setup: function() {
                var t = this;
                return t !== document && (e.event.add(document, n + "." + e.guid, function() {
                    e.event.trigger(n, null, t, !0)
                }), e._data(this, n, e.guid++)), !1
            }, teardown: function() {
                return this !== document && e.event.remove(document, n + "." + e._data(this, n)), !1
            }}
    })
}(jQuery, window);


/*===============================
 /media/system/js/tabs-state.js
 ================================================================================*/;
jQuery(function() {
    var loadTab = function() {
        var $ = jQuery.noConflict();
        jQuery(document).find('a[data-toggle="tab"]').on('click', function(e) {
            window.localStorage.setItem('tab-href', $(e.target).attr('href'));
        });
        var activateTab = function(href) {
            var $el = $('a[data-toggle="tab"]a[href*=' + href + ']');
            $el.tab('show');
        };
        var hasTab = function(href) {
            return $('a[data-toggle="tab"]a[href*=' + href + ']').length;
        };
        if (localStorage.getItem('tab-href')) {
            if (!hasTab(localStorage.getItem('tab-href'))) {
                localStorage.removeItem('tab-href');
                return true;
            }
            $('a[data-toggle="tab"]').parent().removeClass('active');
            var tabhref = localStorage.getItem('tab-href');
            activateTab(tabhref);
            var seperatorIndex = tabhref.indexOf('-');
            if (seperatorIndex !== -1) {
                var singular = tabhref.substring(0, seperatorIndex);
                var plural = singular + "s";
                activateTab(plural);
            }
        }
    };
    setTimeout(loadTab, 100);
});


/*===============================
 /media/system/js/caption.js
 ================================================================================*/;
var JCaption = function(c) {
    var e, b, a = function(f) {
        e = jQuery.noConflict();
        b = f;
        e(b).each(function(g, h) {
            d(h)
        })
    }, d = function(i) {
        var h = e(i), f = h.attr("title"), j = h.attr("width") || i.width, l = h.attr("align") || h.css("float") || i.style.styleFloat || "none", g = e("<p/>", {text: f, "class": b.replace(".", "_")}), k = e("<div/>", {"class": b.replace(".", "_") + " " + l, css: {"float": l, width: j}});
        h.before(k);
        k.append(h);
        if (f !== "") {
            k.append(g)
        }
    };
    a(c)
};


/*===============================
 /plugins/system/t3/base-bs3/bootstrap/js/bootstrap.js
 ================================================================================*/;
/*!
 * Bootstrap v3.1.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if (typeof jQuery === 'undefined') {
    throw new Error('Bootstrap\'s JavaScript requires jQuery')
}
+function($) {
    'use strict';
    function transitionEnd() {
        var el = document.createElement('bootstrap')
        var transEndEventNames = {'WebkitTransition': 'webkitTransitionEnd', 'MozTransition': 'transitionend', 'OTransition': 'oTransitionEnd otransitionend', 'transition': 'transitionend'}
        for (var name in transEndEventNames) {
            if (el.style[name] !== undefined) {
                return{end: transEndEventNames[name]}
            }
        }
        return false
    }
    $.fn.emulateTransitionEnd = function(duration) {
        var called = false, $el = this
        $(this).one($.support.transition.end, function() {
            called = true
        })
        var callback = function() {
            if (!called)
                $($el).trigger($.support.transition.end)
        }
        setTimeout(callback, duration)
        return this
    }
    $(function() {
        $.support.transition = transitionEnd()
    })
}(jQuery);
+function($) {
    'use strict';
    var dismiss = '[data-dismiss="alert"]'
    var Alert = function(el) {
        $(el).on('click', dismiss, this.close)
    }
    Alert.prototype.close = function(e) {
        var $this = $(this)
        var selector = $this.attr('data-target')
        if (!selector) {
            selector = $this.attr('href')
            selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '')
        }
        var $parent = $(selector)
        if (e)
            e.preventDefault()
        if (!$parent.length) {
            $parent = $this.hasClass('alert') ? $this : $this.parent()
        }
        $parent.trigger(e = $.Event('close.bs.alert'))
        if (e.isDefaultPrevented())
            return
        $parent.removeClass('in')
        function removeElement() {
            $parent.trigger('closed.bs.alert').remove()
        }
        $.support.transition && $parent.hasClass('fade') ? $parent.one($.support.transition.end, removeElement).emulateTransitionEnd(150) : removeElement()
    }
    var old = $.fn.alert
    $.fn.alert = function(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.alert')
            if (!data)
                $this.data('bs.alert', (data = new Alert(this)))
            if (typeof option == 'string')
                data[option].call($this)
        })
    }
    $.fn.alert.Constructor = Alert
    $.fn.alert.noConflict = function() {
        $.fn.alert = old
        return this
    }
    $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)
}(jQuery);
+function($) {
    'use strict';
    var Button = function(element, options) {
        this.$element = $(element)
        this.options = $.extend({}, Button.DEFAULTS, options)
        this.isLoading = false
    }
    Button.DEFAULTS = {loadingText: 'loading...'}
    Button.prototype.setState = function(state) {
        var d = 'disabled'
        var $el = this.$element
        var val = $el.is('input') ? 'val' : 'html'
        var data = $el.data()
        state = state + 'Text'
        if (!data.resetText)
            $el.data('resetText', $el[val]())
        $el[val](data[state] || this.options[state])
        setTimeout($.proxy(function() {
            if (state == 'loadingText') {
                this.isLoading = true
                $el.addClass(d).attr(d, d)
            } else if (this.isLoading) {
                this.isLoading = false
                $el.removeClass(d).removeAttr(d)
            }
        }, this), 0)
    }
    Button.prototype.toggle = function() {
        var changed = true
        var $parent = this.$element.closest('[data-toggle="buttons"]')
        if ($parent.length) {
            var $input = this.$element.find('input')
            if ($input.prop('type') == 'radio') {
                if ($input.prop('checked') && this.$element.hasClass('active'))
                    changed = false
                else
                    $parent.find('.active').removeClass('active')
            }
            if (changed)
                $input.prop('checked', !this.$element.hasClass('active')).trigger('change')
        }
        if (changed)
            this.$element.toggleClass('active')
    }
    var old = $.fn.button
    $.fn.button = function(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.button')
            var options = typeof option == 'object' && option
            if (!data)
                $this.data('bs.button', (data = new Button(this, options)))
            if (option == 'toggle')
                data.toggle()
            else if (option)
                data.setState(option)
        })
    }
    $.fn.button.Constructor = Button
    $.fn.button.noConflict = function() {
        $.fn.button = old
        return this
    }
    $(document).on('click.bs.button.data-api', '[data-toggle^=button]', function(e) {
        var $btn = $(e.target)
        if (!$btn.hasClass('btn'))
            $btn = $btn.closest('.btn')
        $btn.button('toggle')
        e.preventDefault()
    })
}(jQuery);
+function($) {
    'use strict';
    var Carousel = function(element, options) {
        this.$element = $(element)
        this.$indicators = this.$element.find('.carousel-indicators')
        this.options = options
        this.paused = this.sliding = this.interval = this.$active = this.$items = null
        this.options.pause == 'hover' && this.$element.on('mouseenter', $.proxy(this.pause, this)).on('mouseleave', $.proxy(this.cycle, this))
    }
    Carousel.DEFAULTS = {interval: 5000, pause: 'hover', wrap: true}
    Carousel.prototype.cycle = function(e) {
        e || (this.paused = false)
        this.interval && clearInterval(this.interval)
        this.options.interval && !this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))
        return this
    }
    Carousel.prototype.getActiveIndex = function() {
        this.$active = this.$element.find('.item.active')
        this.$items = this.$active.parent().children()
        return this.$items.index(this.$active)
    }
    Carousel.prototype.to = function(pos) {
        var that = this
        var activeIndex = this.getActiveIndex()
        if (pos > (this.$items.length - 1) || pos < 0)
            return
        if (this.sliding)
            return this.$element.one('slid.bs.carousel', function() {
                that.to(pos)
            })
        if (activeIndex == pos)
            return this.pause().cycle()
        return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
    }
    Carousel.prototype.pause = function(e) {
        e || (this.paused = true)
        if (this.$element.find('.next, .prev').length && $.support.transition) {
            this.$element.trigger($.support.transition.end)
            this.cycle(true)
        }
        this.interval = clearInterval(this.interval)
        return this
    }
    Carousel.prototype.next = function() {
        if (this.sliding)
            return
        return this.slide('next')
    }
    Carousel.prototype.prev = function() {
        if (this.sliding)
            return
        return this.slide('prev')
    }
    Carousel.prototype.slide = function(type, next) {
        var $active = this.$element.find('.item.active')
        var $next = next || $active[type]()
        var isCycling = this.interval
        var direction = type == 'next' ? 'left' : 'right'
        var fallback = type == 'next' ? 'first' : 'last'
        var that = this
        if (!$next.length) {
            if (!this.options.wrap)
                return
            $next = this.$element.find('.item')[fallback]()
        }
        if ($next.hasClass('active'))
            return this.sliding = false
        var e = $.Event('slide.bs.carousel', {relatedTarget: $next[0], direction: direction})
        this.$element.trigger(e)
        if (e.isDefaultPrevented())
            return
        this.sliding = true
        isCycling && this.pause()
        if (this.$indicators.length) {
            this.$indicators.find('.active').removeClass('active')
            this.$element.one('slid.bs.carousel', function() {
                var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()])
                $nextIndicator && $nextIndicator.addClass('active')
            })
        }
        if ($.support.transition && this.$element.hasClass('slide')) {
            $next.addClass(type)
            $next[0].offsetWidth
            $active.addClass(direction)
            $next.addClass(direction)
            $active.one($.support.transition.end, function() {
                $next.removeClass([type, direction].join(' ')).addClass('active')
                $active.removeClass(['active', direction].join(' '))
                that.sliding = false
                setTimeout(function() {
                    that.$element.trigger('slid.bs.carousel')
                }, 0)
            }).emulateTransitionEnd($active.css('transition-duration').slice(0, -1) * 1000)
        } else {
            $active.removeClass('active')
            $next.addClass('active')
            this.sliding = false
            this.$element.trigger('slid.bs.carousel')
        }
        isCycling && this.cycle()
        return this
    }
    var old = $.fn.carousel
    $.fn.carousel = function(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.carousel')
            var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
            var action = typeof option == 'string' ? option : options.slide
            if (!data)
                $this.data('bs.carousel', (data = new Carousel(this, options)))
            if (typeof option == 'number')
                data.to(option)
            else if (action)
                data[action]()
            else if (options.interval)
                data.pause().cycle()
        })
    }
    $.fn.carousel.Constructor = Carousel
    $.fn.carousel.noConflict = function() {
        $.fn.carousel = old
        return this
    }
    $(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function(e) {
        var $this = $(this), href
        var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, ''))
        var options = $.extend({}, $target.data(), $this.data())
        var slideIndex = $this.attr('data-slide-to')
        if (slideIndex)
            options.interval = false
        $target.carousel(options)
        if (slideIndex = $this.attr('data-slide-to')) {
            $target.data('bs.carousel').to(slideIndex)
        }
        e.preventDefault()
    })
    $(window).on('load', function() {
        $('[data-ride="carousel"]').each(function() {
            var $carousel = $(this)
            $carousel.carousel($carousel.data())
        })
    })
}(jQuery);
+function($) {
    'use strict';
    var Collapse = function(element, options) {
        this.$element = $(element)
        this.options = $.extend({}, Collapse.DEFAULTS, options)
        this.transitioning = null
        if (this.options.parent)
            this.$parent = $(this.options.parent)
        if (this.options.toggle)
            this.toggle()
    }
    Collapse.DEFAULTS = {toggle: true}
    Collapse.prototype.dimension = function() {
        var hasWidth = this.$element.hasClass('width')
        return hasWidth ? 'width' : 'height'
    }
    Collapse.prototype.show = function() {
        if (this.transitioning || this.$element.hasClass('in'))
            return
        var startEvent = $.Event('show.bs.collapse')
        this.$element.trigger(startEvent)
        if (startEvent.isDefaultPrevented())
            return
        var actives = this.$parent && this.$parent.find('> .panel > .in')
        if (actives && actives.length) {
            var hasData = actives.data('bs.collapse')
            if (hasData && hasData.transitioning)
                return
            actives.collapse('hide')
            hasData || actives.data('bs.collapse', null)
        }
        var dimension = this.dimension()
        this.$element.removeClass('collapse').addClass('collapsing')
                [dimension](0)
        this.transitioning = 1
        var complete = function() {
            this.$element.removeClass('collapsing').addClass('collapse in')
                    [dimension]('auto')
            this.transitioning = 0
            this.$element.trigger('shown.bs.collapse')
        }
        if (!$.support.transition)
            return complete.call(this)
        var scrollSize = $.camelCase(['scroll', dimension].join('-'))
        this.$element.one($.support.transition.end, $.proxy(complete, this)).emulateTransitionEnd(350)
                [dimension](this.$element[0][scrollSize])
    }
    Collapse.prototype.hide = function() {
        if (this.transitioning || !this.$element.hasClass('in'))
            return
        var startEvent = $.Event('hide.bs.collapse')
        this.$element.trigger(startEvent)
        if (startEvent.isDefaultPrevented())
            return
        var dimension = this.dimension()
        this.$element
                [dimension](this.$element[dimension]())
                [0].offsetHeight
        this.$element.addClass('collapsing').removeClass('collapse').removeClass('in')
        this.transitioning = 1
        var complete = function() {
            this.transitioning = 0
            this.$element.trigger('hidden.bs.collapse').removeClass('collapsing').addClass('collapse')
        }
        if (!$.support.transition)
            return complete.call(this)
        this.$element
                [dimension](0).one($.support.transition.end, $.proxy(complete, this)).emulateTransitionEnd(350)
    }
    Collapse.prototype.toggle = function() {
        this[this.$element.hasClass('in') ? 'hide' : 'show']()
    }
    var old = $.fn.collapse
    $.fn.collapse = function(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.collapse')
            var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)
            if (!data && options.toggle && option == 'show')
                option = !option
            if (!data)
                $this.data('bs.collapse', (data = new Collapse(this, options)))
            if (typeof option == 'string')
                data[option]()
        })
    }
    $.fn.collapse.Constructor = Collapse
    $.fn.collapse.noConflict = function() {
        $.fn.collapse = old
        return this
    }
    $(document).on('click.bs.collapse.data-api', '[data-toggle=collapse]', function(e) {
        var $this = $(this), href
        var target = $this.attr('data-target') || e.preventDefault() || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')
        var $target = $(target)
        var data = $target.data('bs.collapse')
        var option = data ? 'toggle' : $this.data()
        var parent = $this.attr('data-parent')
        var $parent = parent && $(parent)
        if (!data || !data.transitioning) {
            if ($parent)
                $parent.find('[data-toggle=collapse][data-parent="' + parent + '"]').not($this).addClass('collapsed')
            $this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
        }
        $target.collapse(option)
    })
}(jQuery);
+function($) {
    'use strict';
    var backdrop = '.dropdown-backdrop'
    var toggle = '[data-toggle=dropdown]'
    var Dropdown = function(element) {
        $(element).on('click.bs.dropdown', this.toggle)
    }
    Dropdown.prototype.toggle = function(e) {
        var $this = $(this)
        if ($this.is('.disabled, :disabled'))
            return
        var $parent = getParent($this)
        var isActive = $parent.hasClass('open')
        clearMenus()
        if (!isActive) {
            if ('ontouchstart'in document.documentElement && !$parent.closest('.navbar-nav').length) {
                $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
            }
            var relatedTarget = {relatedTarget: this}
            $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))
            if (e.isDefaultPrevented())
                return
            $parent.toggleClass('open').trigger('shown.bs.dropdown', relatedTarget)
            $this.focus()
        }
        return false
    }
    Dropdown.prototype.keydown = function(e) {
        if (!/(38|40|27)/.test(e.keyCode))
            return
        var $this = $(this)
        e.preventDefault()
        e.stopPropagation()
        if ($this.is('.disabled, :disabled'))
            return
        var $parent = getParent($this)
        var isActive = $parent.hasClass('open')
        if (!isActive || (isActive && e.keyCode == 27)) {
            if (e.which == 27)
                $parent.find(toggle).focus()
            return $this.click()
        }
        var desc = ' li:not(.divider):visible a'
        var $items = $parent.find('[role=menu]' + desc + ', [role=listbox]' + desc)
        if (!$items.length)
            return
        var index = $items.index($items.filter(':focus'))
        if (e.keyCode == 38 && index > 0)
            index--
        if (e.keyCode == 40 && index < $items.length - 1)
            index++
        if (!~index)
            index = 0
        $items.eq(index).focus()
    }
    function clearMenus(e) {
        $(backdrop).remove()
        $(toggle).each(function() {
            var $parent = getParent($(this))
            var relatedTarget = {relatedTarget: this}
            if (!$parent.hasClass('open'))
                return
            $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))
            if (e.isDefaultPrevented())
                return
            $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
        })
    }
    function getParent($this) {
        var selector = $this.attr('data-target')
        if (!selector) {
            selector = $this.attr('href')
            selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '')
        }
        var $parent = selector && $(selector)
        return $parent && $parent.length ? $parent : $this.parent()
    }
    var old = $.fn.dropdown
    $.fn.dropdown = function(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.dropdown')
            if (!data)
                $this.data('bs.dropdown', (data = new Dropdown(this)))
            if (typeof option == 'string')
                data[option].call($this)
        })
    }
    $.fn.dropdown.Constructor = Dropdown
    $.fn.dropdown.noConflict = function() {
        $.fn.dropdown = old
        return this
    }
    $(document).on('click.bs.dropdown.data-api', clearMenus).on('click.bs.dropdown.data-api', '.dropdown form', function(e) {
        e.stopPropagation()
    }).on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle).on('keydown.bs.dropdown.data-api', toggle + ', [role=menu], [role=listbox]', Dropdown.prototype.keydown)
}(jQuery);
+function($) {
    'use strict';
    var Modal = function(element, options) {
        this.options = options
        this.$element = $(element)
        this.$backdrop = this.isShown = null
        if (this.options.remote) {
            this.$element.find('.modal-content').load(this.options.remote, $.proxy(function() {
                this.$element.trigger('loaded.bs.modal')
            }, this))
        }
    }
    Modal.DEFAULTS = {backdrop: true, keyboard: true, show: true}
    Modal.prototype.toggle = function(_relatedTarget) {
        return this[!this.isShown ? 'show' : 'hide'](_relatedTarget)
    }
    Modal.prototype.show = function(_relatedTarget) {
        var that = this
        var e = $.Event('show.bs.modal', {relatedTarget: _relatedTarget})
        this.$element.trigger(e)
        if (this.isShown || e.isDefaultPrevented())
            return
        this.isShown = true
        this.escape()
        this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))
        this.backdrop(function() {
            var transition = $.support.transition && that.$element.hasClass('fade')
            if (!that.$element.parent().length) {
                that.$element.appendTo(document.body)
            }
            that.$element.show().scrollTop(0)
            if (transition) {
                that.$element[0].offsetWidth
            }
            that.$element.addClass('in').attr('aria-hidden', false)
            that.enforceFocus()
            var e = $.Event('shown.bs.modal', {relatedTarget: _relatedTarget})
            transition ? that.$element.find('.modal-dialog').one($.support.transition.end, function() {
                that.$element.focus().trigger(e)
            }).emulateTransitionEnd(300) : that.$element.focus().trigger(e)
        })
    }
    Modal.prototype.hide = function(e) {
        if (e)
            e.preventDefault()
        e = $.Event('hide.bs.modal')
        this.$element.trigger(e)
        if (!this.isShown || e.isDefaultPrevented())
            return
        this.isShown = false
        this.escape()
        $(document).off('focusin.bs.modal')
        this.$element.removeClass('in').attr('aria-hidden', true).off('click.dismiss.bs.modal')
        $.support.transition && this.$element.hasClass('fade') ? this.$element.one($.support.transition.end, $.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal()
    }
    Modal.prototype.enforceFocus = function() {
        $(document).off('focusin.bs.modal').on('focusin.bs.modal', $.proxy(function(e) {
            if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
                this.$element.focus()
            }
        }, this))
    }
    Modal.prototype.escape = function() {
        if (this.isShown && this.options.keyboard) {
            this.$element.on('keyup.dismiss.bs.modal', $.proxy(function(e) {
                e.which == 27 && this.hide()
            }, this))
        } else if (!this.isShown) {
            this.$element.off('keyup.dismiss.bs.modal')
        }
    }
    Modal.prototype.hideModal = function() {
        var that = this
        this.$element.hide()
        this.backdrop(function() {
            that.removeBackdrop()
            that.$element.trigger('hidden.bs.modal')
        })
    }
    Modal.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove()
        this.$backdrop = null
    }
    Modal.prototype.backdrop = function(callback) {
        var animate = this.$element.hasClass('fade') ? 'fade' : ''
        if (this.isShown && this.options.backdrop) {
            var doAnimate = $.support.transition && animate
            this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />').appendTo(document.body)
            this.$element.on('click.dismiss.bs.modal', $.proxy(function(e) {
                if (e.target !== e.currentTarget)
                    return
                this.options.backdrop == 'static' ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this)
            }, this))
            if (doAnimate)
                this.$backdrop[0].offsetWidth
            this.$backdrop.addClass('in')
            if (!callback)
                return
            doAnimate ? this.$backdrop.one($.support.transition.end, callback).emulateTransitionEnd(150) : callback()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass('in')
            $.support.transition && this.$element.hasClass('fade') ? this.$backdrop.one($.support.transition.end, callback).emulateTransitionEnd(150) : callback()
        } else if (callback) {
            callback()
        }
    }
    var old = $.fn.modal
    $.fn.modal = function(option, _relatedTarget) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.modal')
            var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)
            if (!data)
                $this.data('bs.modal', (data = new Modal(this, options)))
            if (typeof option == 'string')
                data[option](_relatedTarget)
            else if (options.show)
                data.show(_relatedTarget)
        })
    }
    $.fn.modal.Constructor = Modal
    $.fn.modal.noConflict = function() {
        $.fn.modal = old
        return this
    }
    $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function(e) {
        var $this = $(this)
        var href = $this.attr('href')
        var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, '')))
        var option = $target.data('bs.modal') ? 'toggle' : $.extend({remote: !/#/.test(href) && href}, $target.data(), $this.data())
        if ($this.is('a'))
            e.preventDefault()
        $target.modal(option, this).one('hide', function() {
            $this.is(':visible') && $this.focus()
        })
    })
    $(document).on('show.bs.modal', '.modal', function() {
        $(document.body).addClass('modal-open')
    }).on('hidden.bs.modal', '.modal', function() {
        $(document.body).removeClass('modal-open')
    })
}(jQuery);
+function($) {
    'use strict';
    var Tooltip = function(element, options) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null
        this.init('tooltip', element, options)
    }
    Tooltip.DEFAULTS = {animation: true, placement: 'top', selector: false, template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: 'hover focus', title: '', delay: 0, html: false, container: false}
    Tooltip.prototype.init = function(type, element, options) {
        this.enabled = true
        this.type = type
        this.$element = $(element)
        this.options = this.getOptions(options)
        var triggers = this.options.trigger.split(' ')
        for (var i = triggers.length; i--; ) {
            var trigger = triggers[i]
            if (trigger == 'click') {
                this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
            } else if (trigger != 'manual') {
                var eventIn = trigger == 'hover' ? 'mouseenter' : 'focusin'
                var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'
                this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
                this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
            }
        }
        this.options.selector ? (this._options = $.extend({}, this.options, {trigger: 'manual', selector: ''})) : this.fixTitle()
    }
    Tooltip.prototype.getDefaults = function() {
        return Tooltip.DEFAULTS
    }
    Tooltip.prototype.getOptions = function(options) {
        options = $.extend({}, this.getDefaults(), this.$element.data(), options)
        if (options.delay && typeof options.delay == 'number') {
            options.delay = {show: options.delay, hide: options.delay}
        }
        return options
    }
    Tooltip.prototype.getDelegateOptions = function() {
        var options = {}
        var defaults = this.getDefaults()
        this._options && $.each(this._options, function(key, value) {
            if (defaults[key] != value)
                options[key] = value
        })
        return options
    }
    Tooltip.prototype.enter = function(obj) {
        var self = obj instanceof this.constructor ? obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)
        clearTimeout(self.timeout)
        self.hoverState = 'in'
        if (!self.options.delay || !self.options.delay.show)
            return self.show()
        self.timeout = setTimeout(function() {
            if (self.hoverState == 'in')
                self.show()
        }, self.options.delay.show)
    }
    Tooltip.prototype.leave = function(obj) {
        var self = obj instanceof this.constructor ? obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)
        clearTimeout(self.timeout)
        self.hoverState = 'out'
        if (!self.options.delay || !self.options.delay.hide)
            return self.hide()
        self.timeout = setTimeout(function() {
            if (self.hoverState == 'out')
                self.hide()
        }, self.options.delay.hide)
    }
    Tooltip.prototype.show = function() {
        var e = $.Event('show.bs.' + this.type)
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e)
            if (e.isDefaultPrevented())
                return
            var that = this;
            var $tip = this.tip()
            this.setContent()
            if (this.options.animation)
                $tip.addClass('fade')
            var placement = typeof this.options.placement == 'function' ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement
            var autoToken = /\s?auto?\s?/i
            var autoPlace = autoToken.test(placement)
            if (autoPlace)
                placement = placement.replace(autoToken, '') || 'top'
            $tip.detach().css({top: 0, left: 0, display: 'block'}).addClass(placement)
            this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
            var pos = this.getPosition()
            var actualWidth = $tip[0].offsetWidth
            var actualHeight = $tip[0].offsetHeight
            if (autoPlace) {
                var $parent = this.$element.parent()
                var orgPlacement = placement
                var docScroll = document.documentElement.scrollTop || document.body.scrollTop
                var parentWidth = this.options.container == 'body' ? window.innerWidth : $parent.outerWidth()
                var parentHeight = this.options.container == 'body' ? window.innerHeight : $parent.outerHeight()
                var parentLeft = this.options.container == 'body' ? 0 : $parent.offset().left
                placement = placement == 'bottom' && pos.top + pos.height + actualHeight - docScroll > parentHeight ? 'top' : placement == 'top' && pos.top - docScroll - actualHeight < 0 ? 'bottom' : placement == 'right' && pos.right + actualWidth > parentWidth ? 'left' : placement == 'left' && pos.left - actualWidth < parentLeft ? 'right' : placement
                $tip.removeClass(orgPlacement).addClass(placement)
            }
            var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)
            this.applyPlacement(calculatedOffset, placement)
            this.hoverState = null
            var complete = function() {
                that.$element.trigger('shown.bs.' + that.type)
            }
            $.support.transition && this.$tip.hasClass('fade') ? $tip.one($.support.transition.end, complete).emulateTransitionEnd(150) : complete()
        }
    }
    Tooltip.prototype.applyPlacement = function(offset, placement) {
        var replace
        var $tip = this.tip()
        var width = $tip[0].offsetWidth
        var height = $tip[0].offsetHeight
        var marginTop = parseInt($tip.css('margin-top'), 10)
        var marginLeft = parseInt($tip.css('margin-left'), 10)
        if (isNaN(marginTop))
            marginTop = 0
        if (isNaN(marginLeft))
            marginLeft = 0
        offset.top = offset.top + marginTop
        offset.left = offset.left + marginLeft
        $.offset.setOffset($tip[0], $.extend({using: function(props) {
                $tip.css({top: Math.round(props.top), left: Math.round(props.left)})
            }}, offset), 0)
        $tip.addClass('in')
        var actualWidth = $tip[0].offsetWidth
        var actualHeight = $tip[0].offsetHeight
        if (placement == 'top' && actualHeight != height) {
            replace = true
            offset.top = offset.top + height - actualHeight
        }
        if (/bottom|top/.test(placement)) {
            var delta = 0
            if (offset.left < 0) {
                delta = offset.left * -2
                offset.left = 0
                $tip.offset(offset)
                actualWidth = $tip[0].offsetWidth
                actualHeight = $tip[0].offsetHeight
            }
            this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
        } else {
            this.replaceArrow(actualHeight - height, actualHeight, 'top')
        }
        if (replace)
            $tip.offset(offset)
    }
    Tooltip.prototype.replaceArrow = function(delta, dimension, position) {
        this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + '%') : '')
    }
    Tooltip.prototype.setContent = function() {
        var $tip = this.tip()
        var title = this.getTitle()
        $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
        $tip.removeClass('fade in top bottom left right')
    }
    Tooltip.prototype.hide = function() {
        var that = this
        var $tip = this.tip()
        var e = $.Event('hide.bs.' + this.type)
        function complete() {
            if (that.hoverState != 'in')
                $tip.detach()
            that.$element.trigger('hidden.bs.' + that.type)
        }
        this.$element.trigger(e)
        if (e.isDefaultPrevented())
            return
        $tip.removeClass('in')
        $.support.transition && this.$tip.hasClass('fade') ? $tip.one($.support.transition.end, complete).emulateTransitionEnd(150) : complete()
        this.hoverState = null
        return this
    }
    Tooltip.prototype.fixTitle = function() {
        var $e = this.$element
        if ($e.attr('title') || typeof ($e.attr('data-original-title')) != 'string') {
            $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
        }
    }
    Tooltip.prototype.hasContent = function() {
        return this.getTitle()
    }
    Tooltip.prototype.getPosition = function() {
        var el = this.$element[0]
        return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {width: el.offsetWidth, height: el.offsetHeight}, this.$element.offset())
    }
    Tooltip.prototype.getCalculatedOffset = function(placement, pos, actualWidth, actualHeight) {
        return placement == 'bottom' ? {top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2} : placement == 'top' ? {top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2} : placement == 'left' ? {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth} : {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width}
    }
    Tooltip.prototype.getTitle = function() {
        var title
        var $e = this.$element
        var o = this.options
        title = $e.attr('data-original-title') || (typeof o.title == 'function' ? o.title.call($e[0]) : o.title)
        return title
    }
    Tooltip.prototype.tip = function() {
        return this.$tip = this.$tip || $(this.options.template)
    }
    Tooltip.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow')
    }
    Tooltip.prototype.validate = function() {
        if (!this.$element[0].parentNode) {
            this.hide()
            this.$element = null
            this.options = null
        }
    }
    Tooltip.prototype.enable = function() {
        this.enabled = true
    }
    Tooltip.prototype.disable = function() {
        this.enabled = false
    }
    Tooltip.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }
    Tooltip.prototype.toggle = function(e) {
        var self = e ? $(e.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type) : this
        self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
    Tooltip.prototype.destroy = function() {
        clearTimeout(this.timeout)
        this.hide().$element.off('.' + this.type).removeData('bs.' + this.type)
    }
    var old = $.fn.tooltip
    $.fn.tooltip = function(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.tooltip')
            var options = typeof option == 'object' && option
            if (!data && option == 'destroy')
                return
            if (!data)
                $this.data('bs.tooltip', (data = new Tooltip(this, options)))
            if (typeof option == 'string')
                data[option]()
        })
    }
    $.fn.tooltip.Constructor = Tooltip
    $.fn.tooltip.noConflict = function() {
        $.fn.tooltip = old
        return this
    }
}(jQuery);
+function($) {
    'use strict';
    var Popover = function(element, options) {
        this.init('popover', element, options)
    }
    if (!$.fn.tooltip)
        throw new Error('Popover requires tooltip.js')
    Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {placement: 'right', trigger: 'click', content: '', template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'})
    Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)
    Popover.prototype.constructor = Popover
    Popover.prototype.getDefaults = function() {
        return Popover.DEFAULTS
    }
    Popover.prototype.setContent = function() {
        var $tip = this.tip()
        var title = this.getTitle()
        var content = this.getContent()
        $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
        $tip.find('.popover-content')[this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'](content)
        $tip.removeClass('fade top bottom left right in')
        if (!$tip.find('.popover-title').html())
            $tip.find('.popover-title').hide()
    }
    Popover.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }
    Popover.prototype.getContent = function() {
        var $e = this.$element
        var o = this.options
        return $e.attr('data-content') || (typeof o.content == 'function' ? o.content.call($e[0]) : o.content)
    }
    Popover.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find('.arrow')
    }
    Popover.prototype.tip = function() {
        if (!this.$tip)
            this.$tip = $(this.options.template)
        return this.$tip
    }
    var old = $.fn.popover
    $.fn.popover = function(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.popover')
            var options = typeof option == 'object' && option
            if (!data && option == 'destroy')
                return
            if (!data)
                $this.data('bs.popover', (data = new Popover(this, options)))
            if (typeof option == 'string')
                data[option]()
        })
    }
    $.fn.popover.Constructor = Popover
    $.fn.popover.noConflict = function() {
        $.fn.popover = old
        return this
    }
}(jQuery);
+function($) {
    'use strict';
    function ScrollSpy(element, options) {
        var href
        var process = $.proxy(this.process, this)
        this.$element = $(element).is('body') ? $(window) : $(element)
        this.$body = $('body')
        this.$scrollElement = this.$element.on('scroll.bs.scroll-spy.data-api', process)
        this.options = $.extend({}, ScrollSpy.DEFAULTS, options)
        this.selector = (this.options.target || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) || '') + ' .nav li > a'
        this.offsets = $([])
        this.targets = $([])
        this.activeTarget = null
        this.refresh()
        this.process()
    }
    ScrollSpy.DEFAULTS = {offset: 10}
    ScrollSpy.prototype.refresh = function() {
        var offsetMethod = this.$element[0] == window ? 'offset' : 'position'
        this.offsets = $([])
        this.targets = $([])
        var self = this
        var $targets = this.$body.find(this.selector).map(function() {
            var $el = $(this)
            var href = $el.data('target') || $el.attr('href')
            var $href = /^#./.test(href) && $(href)
            return($href && $href.length && $href.is(':visible') && [[$href[offsetMethod]().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href]]) || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            self.offsets.push(this[0])
            self.targets.push(this[1])
        })
    }
    ScrollSpy.prototype.process = function() {
        var scrollTop = this.$scrollElement.scrollTop() + this.options.offset
        var scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight
        var maxScroll = scrollHeight - this.$scrollElement.height()
        var offsets = this.offsets
        var targets = this.targets
        var activeTarget = this.activeTarget
        var i
        if (scrollTop >= maxScroll) {
            return activeTarget != (i = targets.last()[0]) && this.activate(i)
        }
        if (activeTarget && scrollTop <= offsets[0]) {
            return activeTarget != (i = targets[0]) && this.activate(i)
        }
        for (i = offsets.length; i--; ) {
            activeTarget != targets[i] && scrollTop >= offsets[i] && (!offsets[i + 1] || scrollTop <= offsets[i + 1]) && this.activate(targets[i])
        }
    }
    ScrollSpy.prototype.activate = function(target) {
        this.activeTarget = target
        $(this.selector).parentsUntil(this.options.target, '.active').removeClass('active')
        var selector = this.selector + '[data-target="' + target + '"],' +
                this.selector + '[href="' + target + '"]'
        var active = $(selector).parents('li').addClass('active')
        if (active.parent('.dropdown-menu').length) {
            active = active.closest('li.dropdown').addClass('active')
        }
        active.trigger('activate.bs.scrollspy')
    }
    var old = $.fn.scrollspy
    $.fn.scrollspy = function(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.scrollspy')
            var options = typeof option == 'object' && option
            if (!data)
                $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
            if (typeof option == 'string')
                data[option]()
        })
    }
    $.fn.scrollspy.Constructor = ScrollSpy
    $.fn.scrollspy.noConflict = function() {
        $.fn.scrollspy = old
        return this
    }
    $(window).on('load', function() {
        $('[data-spy="scroll"]').each(function() {
            var $spy = $(this)
            $spy.scrollspy($spy.data())
        })
    })
}(jQuery);
+function($) {
    'use strict';
    var Tab = function(element) {
        this.element = $(element)
    }
    Tab.prototype.show = function() {
        var $this = this.element
        var $ul = $this.closest('ul:not(.dropdown-menu)')
        var selector = $this.data('target')
        if (!selector) {
            selector = $this.attr('href')
            selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '')
        }
        if ($this.parent('li').hasClass('active'))
            return
        var previous = $ul.find('.active:last a')[0]
        var e = $.Event('show.bs.tab', {relatedTarget: previous})
        $this.trigger(e)
        if (e.isDefaultPrevented())
            return
        var $target = $(selector)
        this.activate($this.parent('li'), $ul)
        this.activate($target, $target.parent(), function() {
            $this.trigger({type: 'shown.bs.tab', relatedTarget: previous})
        })
    }
    Tab.prototype.activate = function(element, container, callback) {
        var $active = container.find('> .active')
        var transition = callback && $.support.transition && $active.hasClass('fade')
        function next() {
            $active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active')
            element.addClass('active')
            if (transition) {
                element[0].offsetWidth
                element.addClass('in')
            } else {
                element.removeClass('fade')
            }
            if (element.parent('.dropdown-menu')) {
                element.closest('li.dropdown').addClass('active')
            }
            callback && callback()
        }
        transition ? $active.one($.support.transition.end, next).emulateTransitionEnd(150) : next()
        $active.removeClass('in')
    }
    var old = $.fn.tab
    $.fn.tab = function(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.tab')
            if (!data)
                $this.data('bs.tab', (data = new Tab(this)))
            if (typeof option == 'string')
                data[option]()
        })
    }
    $.fn.tab.Constructor = Tab
    $.fn.tab.noConflict = function() {
        $.fn.tab = old
        return this
    }
    $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function(e) {
        e.preventDefault()
        $(this).tab('show')
    })
}(jQuery);
+function($) {
    'use strict';
    var Affix = function(element, options) {
        this.options = $.extend({}, Affix.DEFAULTS, options)
        this.$window = $(window).on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this)).on('click.bs.affix.data-api', $.proxy(this.checkPositionWithEventLoop, this))
        this.$element = $(element)
        this.affixed = this.unpin = this.pinnedOffset = null
        this.checkPosition()
    }
    Affix.RESET = 'affix affix-top affix-bottom'
    Affix.DEFAULTS = {offset: 0}
    Affix.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset)
            return this.pinnedOffset
        this.$element.removeClass(Affix.RESET).addClass('affix')
        var scrollTop = this.$window.scrollTop()
        var position = this.$element.offset()
        return(this.pinnedOffset = position.top - scrollTop)
    }
    Affix.prototype.checkPositionWithEventLoop = function() {
        setTimeout($.proxy(this.checkPosition, this), 1)
    }
    Affix.prototype.checkPosition = function() {
        if (!this.$element.is(':visible'))
            return
        var scrollHeight = $(document).height()
        var scrollTop = this.$window.scrollTop()
        var position = this.$element.offset()
        var offset = this.options.offset
        var offsetTop = offset.top
        var offsetBottom = offset.bottom
        if (this.affixed == 'top')
            position.top += scrollTop
        if (typeof offset != 'object')
            offsetBottom = offsetTop = offset
        if (typeof offsetTop == 'function')
            offsetTop = offset.top(this.$element)
        if (typeof offsetBottom == 'function')
            offsetBottom = offset.bottom(this.$element)
        var affix = this.unpin != null && (scrollTop + this.unpin <= position.top) ? false : offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ? 'bottom' : offsetTop != null && (scrollTop <= offsetTop) ? 'top' : false
        if (this.affixed === affix)
            return
        if (this.unpin)
            this.$element.css('top', '')
        var affixType = 'affix' + (affix ? '-' + affix : '')
        var e = $.Event(affixType + '.bs.affix')
        this.$element.trigger(e)
        if (e.isDefaultPrevented())
            return
        this.affixed = affix
        this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null
        this.$element.removeClass(Affix.RESET).addClass(affixType).trigger($.Event(affixType.replace('affix', 'affixed')))
        if (affix == 'bottom') {
            this.$element.offset({top: scrollHeight - offsetBottom - this.$element.height()})
        }
    }
    var old = $.fn.affix
    $.fn.affix = function(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.affix')
            var options = typeof option == 'object' && option
            if (!data)
                $this.data('bs.affix', (data = new Affix(this, options)))
            if (typeof option == 'string')
                data[option]()
        })
    }
    $.fn.affix.Constructor = Affix
    $.fn.affix.noConflict = function() {
        $.fn.affix = old
        return this
    }
    $(window).on('load', function() {
        $('[data-spy="affix"]').each(function() {
            var $spy = $(this)
            var data = $spy.data()
            data.offset = data.offset || {}
            if (data.offsetBottom)
                data.offset.bottom = data.offsetBottom
            if (data.offsetTop)
                data.offset.top = data.offsetTop
            $spy.affix(data)
        })
    })
}(jQuery);


/*===============================
 /plugins/system/t3/base-bs3/js/jquery.tap.min.js
 ================================================================================*/;
!function(r, t) {
    "use strict";
    var d = t.support.touch = !!("ontouchstart"in window || window.DocumentTouch && r instanceof DocumentTouch), e = "._tap", i = "tap", f = 40, l = 400, a = "clientX clientY screenX screenY pageX pageY".split(" "), s = function(n, e) {
        var c;
        return c = Array.prototype.indexOf ? n.indexOf(e) : t.inArray(e, n)
    }, n = {$el: null, x: 0, y: 0, count: 0, cancel: !1, start: 0}, u = function(o, i) {
        var n = i.originalEvent, c = t.Event(n), r = n.changedTouches ? n.changedTouches[0] : n;
        c.type = o;
        for (var e = 0, u = a.length; u > e; e++)
            c[a[e]] = r[a[e]];
        return c
    }, g = function(t) {
        var o = t.originalEvent, e = t.changedTouches ? t.changedTouches[0] : o.changedTouches[0], i = Math.abs(e.pageX - n.x), a = Math.abs(e.pageY - n.y), r = Math.max(i, a);
        return Date.now() - n.start < l && f > r && !n.cancel && 1 === n.count && c.isTracking
    }, c = {isEnabled: !1, isTracking: !1, enable: function() {
            return this.isEnabled ? this : (this.isEnabled = !0, t(r.body).on("touchstart" + e, this.onTouchStart).on("touchend" + e, this.onTouchEnd).on("touchcancel" + e, this.onTouchCancel), this)
        }, disable: function() {
            return this.isEnabled ? (this.isEnabled = !1, t(r.body).off("touchstart" + e, this.onTouchStart).off("touchend" + e, this.onTouchEnd).off("touchcancel" + e, this.onTouchCancel), this) : this
        }, onTouchStart: function(e) {
            var o = e.originalEvent.touches;
            if (n.count = o.length, !c.isTracking) {
                c.isTracking = !0;
                var i = o[0];
                n.cancel = !1, n.start = Date.now(), n.$el = t(e.target), n.x = i.pageX, n.y = i.pageY
            }
        }, onTouchEnd: function(t) {
            g(t) && n.$el.trigger(u(i, t)), c.onTouchCancel(t)
        }, onTouchCancel: function() {
            c.isTracking = !1, n.cancel = !0
        }};
    if (t.event.special[i] = {setup: function() {
            c.enable()
        }}, !d) {
        var o = [], h = function(n) {
            var e = n.originalEvent;
            if (!(n.isTrigger || s(o, e) >= 0)) {
                o.length > 3 && o.splice(0, o.length - 3), o.push(e);
                var c = u(i, n);
                t(n.target).trigger(c)
            }
        };
        t.event.special[i] = {setup: function() {
                t(this).on("click" + e, h)
            }, teardown: function() {
                t(this).off("click" + e, h)
            }}
    }
}(document, jQuery);


/*===============================
 /plugins/system/t3/base-bs3/js/off-canvas.js
 ================================================================================*/;
jQuery(document).ready(function($) {
    if ($.browser.msie && $.browser.version < 10) {
        $('html').addClass('old-ie');
    } else if (/constructor/i.test(window.HTMLElement)) {
        $('html').addClass('safari');
    }
    var $wrapper = $('body'), $inner = $('.t3-wrapper'), $toggles = $('.off-canvas-toggle'), $offcanvas = $('.t3-off-canvas'), $close = $('.t3-off-canvas .close'), $btn = null, $nav = null, direction = 'left', $fixed = null;
    if (!$wrapper.length)
        return;
    $toggles.each(function() {
        var $this = $(this), $nav = $($this.data('nav')), effect = $this.data('effect'), direction = ($('html').attr('dir') == 'rtl' && $this.data('pos') != 'right') || ($('html').attr('dir') != 'rtl' && $this.data('pos') == 'right') ? 'right' : 'left';
        $nav.addClass(effect).addClass('off-canvas-' + direction);
        var inside_effect = ['off-canvas-effect-3', 'off-canvas-effect-16', 'off-canvas-effect-7', 'off-canvas-effect-8', 'off-canvas-effect-14'];
        if ($.inArray(effect, inside_effect) == -1) {
            $inner.before($nav);
        } else {
            $inner.prepend($nav);
        }
    });
    $toggles.on('tap', function(e) {
        stopBubble(e);
        if ($wrapper.hasClass('off-canvas-open')) {
            oc_hide(e);
            return;
        }
        $btn = $(this);
        $nav = $($btn.data('nav'));
        $fixed = $inner.find('*').filter(function() {
            return $(this).css("position") === 'fixed';
        });
        $nav.addClass('off-canvas-current');
        direction = ($('html').attr('dir') == 'rtl' && $btn.data('pos') != 'right') || ($('html').attr('dir') != 'rtl' && $btn.data('pos') == 'right') ? 'right' : 'left';
        $offcanvas.height($(window).height());
        var scrollTop = ($('html').scrollTop()) ? $('html').scrollTop() : $('body').scrollTop();
        $('html').addClass('noscroll').css('top', -scrollTop).data('top', scrollTop);
        $('.t3-off-canvas').css('top', scrollTop);
        $fixed.each(function() {
            var $this = $(this), $parent = $this.parent(), mtop = 0;
            while (!$parent.is($inner) && $parent.css("position") === 'static')
                $parent = $parent.parent();
            mtop = -$parent.offset().top;
            $this.css({'position': 'absolute', 'margin-top': mtop});
        });
        $wrapper.scrollTop(scrollTop);
        $wrapper[0].className = $wrapper[0].className.replace(/\s*off\-canvas\-effect\-\d+\s*/g, ' ').trim() + ' ' + $btn.data('effect') + ' ' + 'off-canvas-' + direction;
        setTimeout(oc_show, 50);
        return;
    });
    var oc_show = function() {
        $wrapper.addClass('off-canvas-open');
        $wrapper.on('tap', oc_hide);
        $close.on('click', oc_hide);
        $offcanvas.on('click', stopBubble);
        if ($.browser.msie && $.browser.version < 10) {
            var p1 = {}, p2 = {};
            p1['padding-' + direction] = $('.t3-off-canvas').width();
            p2[direction] = 0;
            $inner.animate(p1);
            $nav.animate(p2);
        }
    };
    var oc_hide = function() {
        $wrapper.off('tap', oc_hide);
        $close.off('click', oc_hide);
        $offcanvas.off('click', stopBubble);
        setTimeout(function() {
            $wrapper.removeClass('off-canvas-open');
        }, 100);
        setTimeout(function() {
            $wrapper.removeClass($btn.data('effect')).removeClass('off-canvas-' + direction);
            $wrapper.scrollTop(0);
            $('html').removeClass('noscroll').css('top', '');
            $('html,body').scrollTop($('html').data('top'));
            $nav.removeClass('off-canvas-current');
            $fixed.css({'position': '', 'margin-top': ''});
        }, 550);
        if ($.browser.msie && $.browser.version < 10) {
            var p1 = {}, p2 = {};
            p1['padding-' + direction] = 0;
            p2[direction] = -$('.t3-off-canvas').width();
            $inner.animate(p1);
            $nav.animate(p2);
        }
    };
    var stopBubble = function(e) {
        e.stopPropagation();
    }
})


        /*===============================
         /plugins/system/t3/base-bs3/js/script.js
         ================================================================================*/;
!function($) {
    (function() {
        $.support.t3transform = (function() {
            var style = document.createElement('div').style, vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'], transform, i = 0, l = vendors.length;
            for (; i < l; i++) {
                transform = vendors[i] + 'ransform';
                if (transform in style) {
                    return transform;
                }
            }
            return false;
        })();
    })();
    (function() {
        $('html').addClass('ontouchstart'in window ? 'touch' : 'no-touch');
    })();
    $(document).ready(function() {
        (function() {
            if (window.MooTools && window.MooTools.More && Element && Element.implement) {
                var mthide = Element.prototype.hide, mtshow = Element.prototype.show, mtslide = Element.prototype.slide;
                Element.implement({show: function(args) {
                        if (arguments.callee && arguments.callee.caller && arguments.callee.caller.toString().indexOf('isPropagationStopped') !== -1) {
                            return this;
                        }
                        return $.isFunction(mtshow) && mtshow.apply(this, args);
                    }, hide: function() {
                        if (arguments.callee && arguments.callee.caller && arguments.callee.caller.toString().indexOf('isPropagationStopped') !== -1) {
                            return this;
                        }
                        return $.isFunction(mthide) && mthide.apply(this, arguments);
                    }, slide: function(args) {
                        if (arguments.callee && arguments.callee.caller && arguments.callee.caller.toString().indexOf('isPropagationStopped') !== -1) {
                            return this;
                        }
                        return $.isFunction(mtslide) && mtslide.apply(this, args);
                    }})
            }
        })();
        $.fn.tooltip.Constructor && $.fn.tooltip.Constructor.DEFAULTS && ($.fn.tooltip.Constructor.DEFAULTS.html = true);
        $.fn.popover.Constructor && $.fn.popover.Constructor.DEFAULTS && ($.fn.popover.Constructor.DEFAULTS.html = true);
        $.fn.tooltip.defaults && ($.fn.tooltip.defaults.html = true);
        $.fn.popover.defaults && ($.fn.popover.defaults.html = true);
        (function() {
            if (window.jomsQuery && jomsQuery.fn.collapse) {
                $('.navbar-toggle').on('click', function(e) {
                    $($(this).attr('data-target')).eq(0).collapse('toggle');
                    e.stopPropagation();
                    return false;
                });
                jomsQuery('html, body').off('touchstart.dropdown.data-api');
            }
        })();
        (function() {
            if ($.fn.chosen && $(document.documentElement).attr('dir') == 'rtl') {
                $('select').addClass('chzn-rtl');
            }
        })();
    });
    $(window).load(function() {
        if (!$(document.documentElement).hasClass('off-canvas-ready') && ($('.navbar-collapse-fixed-top').length || $('.navbar-collapse-fixed-bottom').length)) {
            var btn = $('.btn-navbar[data-toggle="collapse"]');
            if (!btn.length) {
                return;
            }
            if (btn.data('target')) {
                var nav = $(btn.data('target'));
                if (!nav.length) {
                    return;
                }
                var fixedtop = nav.closest('.navbar-collapse-fixed-top').length;
                btn.on('click', function() {
                    var wheight = (window.innerHeight || $(window).height());
                    if (!$.support.transition) {
                        nav.parent().css('height', !btn.hasClass('collapsed') && btn.data('t3-clicked') ? '' : wheight);
                        btn.data('t3-clicked', 1);
                    }
                    nav.addClass('animate').css('max-height', wheight -
                            (fixedtop ? (parseFloat(nav.css('top')) || 0) : (parseFloat(nav.css('bottom')) || 0)));
                });
                nav.on('shown hidden', function() {
                    nav.removeClass('animate');
                });
            }
        }
    });
}(jQuery);


/*===============================
 /plugins/system/t3/base-bs3/js/menu.js
 ================================================================================*/;
;
(function($) {
    var T3Menu = function(elm, options) {
        this.$menu = $(elm);
        if (!this.$menu.length) {
            return;
        }
        this.options = $.extend({}, $.fn.t3menu.defaults, options);
        this.child_open = [];
        this.loaded = false;
        this.start();
    };
    T3Menu.prototype = {constructor: T3Menu, start: function() {
            if (this.loaded) {
                return;
            }
            this.loaded = true;
            var self = this, options = this.options, $menu = this.$menu;
            this.$items = $menu.find('li');
            this.$items.each(function(idx, li) {
                var $item = $(this), $child = $item.children('.dropdown-menu'), $link = $item.children('a'), item = {$item: $item, child: $child.length, link: $link.length, clickable: !($link.length && $child.length), mega: $item.hasClass('mega'), status: 'close', timer: null, atimer: null};
                $item.data('t3menu.item', item);
                if ($child.length && !options.hover) {
                    $item.on('click', function(e) {
                        e.stopPropagation();
                        if ($item.hasClass('group')) {
                            return;
                        }
                        if (item.status == 'close') {
                            e.preventDefault();
                            self.show(item);
                        }
                    });
                } else {
                    $item.on('click', function(e) {
                        e.stopPropagation()
                    });
                }
                if (options.hover) {
                    $item.on('mouseover', function(e) {
                        if ($item.hasClass('group')) {
                            return;
                        }
                        e.stopPropagation();
                        self.show(item);
                    }).on('mouseleave', function(e) {
                        if ($item.hasClass('group')) {
                            return;
                        }
                        e.stopPropagation();
                        self.hide(item);
                    });
                    if ($link.length && $child.length) {
                        $link.on('click', function(e) {
                            return item.clickable;
                        });
                    }
                }
            });
            $(document.body).on('tap hideall.t3menu', function(e) {
                clearTimeout(self.timer);
                self.timer = setTimeout($.proxy(self.hide_alls, self), e.type == 'tap' ? 500 : self.options.hidedelay);
            });
        }, show: function(item) {
            if ($.inArray(item, this.child_open) < this.child_open.length - 1) {
                this.hide_others(item);
            }
            $(document.body).trigger('hideall.t3menu', [this]);
            clearTimeout(this.timer);
            clearTimeout(item.timer);
            clearTimeout(item.ftimer);
            clearTimeout(item.ctimer);
            if (item.status != 'open' || !item.$item.hasClass('open') || !this.child_open.length) {
                if (item.mega) {
                    clearTimeout(item.astimer);
                    clearTimeout(item.atimer);
                    this.position(item.$item);
                    item.astimer = setTimeout(function() {
                        item.$item.addClass('animating')
                    }, 10);
                    item.atimer = setTimeout(function() {
                        item.$item.removeClass('animating')
                    }, this.options.duration + 50);
                    item.timer = setTimeout(function() {
                        item.$item.addClass('open')
                    }, 100);
                } else {
                    item.$item.addClass('open');
                }
                item.status = 'open';
                if (item.child && $.inArray(item, this.child_open) == -1) {
                    this.child_open.push(item);
                }
            }
            item.ctimer = setTimeout($.proxy(this.clickable, this, item), 300);
        }, hide: function(item) {
            clearTimeout(this.timer);
            clearTimeout(item.timer);
            clearTimeout(item.astimer);
            clearTimeout(item.atimer);
            clearTimeout(item.ftimer);
            if (item.mega) {
                item.$item.addClass('animating');
                item.atimer = setTimeout(function() {
                    item.$item.removeClass('animating')
                }, this.options.duration);
                item.timer = setTimeout(function() {
                    item.$item.removeClass('open')
                }, 100);
            } else {
                item.$item.removeClass('open');
            }
            item.status = 'close';
            for (var i = this.child_open.length; i--; ) {
                if (this.child_open[i] === item) {
                    this.child_open.splice(i, 1);
                }
            }
            item.ftimer = setTimeout($.proxy(this.hidden, this, item), this.options.duration);
            this.timer = setTimeout($.proxy(this.hide_alls, this), this.options.hidedelay);
        }, hidden: function(item) {
            if (item.status == 'close') {
                item.clickable = false;
            }
        }, hide_others: function(item) {
            var self = this;
            $.each(this.child_open.slice(), function(idx, open) {
                if (!item || (open != item && !open.$item.has(item.$item).length)) {
                    self.hide(open);
                }
            });
        }, hide_alls: function(e, inst) {
            if (!e || e.type == 'tap' || (e.type == 'hideall' && this != inst)) {
                var self = this;
                $.each(this.child_open.slice(), function(idx, item) {
                    item && self.hide(item);
                });
            }
        }, clickable: function(item) {
            item.clickable = true;
        }, position: function($item) {
            var sub = $item.children('.mega-dropdown-menu'), is_show = sub.is(':visible');
            if (!is_show) {
                sub.show();
            }
            var offset = $item.offset(), width = $item.outerWidth(), screen_width = $(window).width() - this.options.sb_width, sub_width = sub.outerWidth(), level = $item.data('level');
            if (!is_show) {
                sub.css('display', '');
            }
            sub.css({left: '', right: ''});
            if (level == 1) {
                var align = $item.data('alignsub'), align_offset = 0, align_delta = 0, align_trans = 0;
                if (align == 'justify') {
                    return;
                }
                if (!align) {
                    align = 'left';
                }
                if (align == 'center') {
                    align_offset = offset.left + (width / 2);
                    if (!$.support.t3transform) {
                        align_trans = -sub_width / 2;
                        sub.css(this.options.rtl ? 'right' : 'left', align_trans + width / 2);
                    }
                } else {
                    align_offset = offset.left + ((align == 'left' && this.options.rtl || align == 'right' && !this.options.rtl) ? width : 0);
                }
                if (this.options.rtl) {
                    if (align == 'right') {
                        if (align_offset + sub_width > screen_width) {
                            align_delta = screen_width - align_offset - sub_width;
                            sub.css('left', align_delta);
                            if (screen_width < sub_width) {
                                sub.css('left', align_delta + sub_width - screen_width);
                            }
                        }
                    } else {
                        if (align_offset < (align == 'center' ? sub_width / 2 : sub_width)) {
                            align_delta = align_offset - (align == 'center' ? sub_width / 2 : sub_width);
                            sub.css('right', align_delta + align_trans);
                        }
                        if (align_offset + (align == 'center' ? sub_width / 2 : 0) - align_delta > screen_width) {
                            sub.css('right', align_offset + (align == 'center' ? (sub_width + width) / 2 : 0) + align_trans - screen_width);
                        }
                    }
                } else {
                    if (align == 'right') {
                        if (align_offset < sub_width) {
                            align_delta = align_offset - sub_width;
                            sub.css('right', align_delta);
                            if (sub_width > screen_width) {
                                sub.css('right', sub_width - screen_width + align_delta);
                            }
                        }
                    } else {
                        if (align_offset + (align == 'center' ? sub_width / 2 : sub_width) > screen_width) {
                            align_delta = screen_width - align_offset - (align == 'center' ? sub_width / 2 : sub_width);
                            sub.css('left', align_delta + align_trans);
                        }
                        if (align_offset - (align == 'center' ? sub_width / 2 : 0) + align_delta < 0) {
                            sub.css('left', (align == 'center' ? (sub_width + width) / 2 : 0) + align_trans - align_offset);
                        }
                    }
                }
            } else {
                if (this.options.rtl) {
                    if ($item.closest('.mega-dropdown-menu').parent().hasClass('mega-align-right')) {
                        $item.removeClass('mega-align-left').addClass('mega-align-right');
                        if (offset.left + width + sub_width > screen_width) {
                            $item.removeClass('mega-align-right');
                            if (offset.left - sub_width < 0) {
                                sub.css('right', offset.left + width - sub_width);
                            }
                        }
                    } else {
                        if (offset.left - sub_width < 0) {
                            $item.removeClass('mega-align-left').addClass('mega-align-right');
                            if (offset.left + width + sub_width > screen_width) {
                                sub.css('left', screen_width - offset.left - sub_width);
                            }
                        }
                    }
                } else {
                    if ($item.closest('.mega-dropdown-menu').parent().hasClass('mega-align-right')) {
                        $item.removeClass('mega-align-left').addClass('mega-align-right');
                        if (offset.left - sub_width < 0) {
                            $item.removeClass('mega-align-right');
                            if (offset.left + width + sub_width > screen_width) {
                                sub.css('left', screen_width - offset.left - sub_width);
                            }
                        }
                    } else {
                        if (offset.left + width + sub_width > screen_width) {
                            $item.removeClass('mega-align-left').addClass('mega-align-right');
                            if (offset.left - sub_width < 0) {
                                sub.css('right', offset.left + width - sub_width);
                            }
                        }
                    }
                }
            }
        }};
    $.fn.t3menu = function(option) {
        return this.each(function() {
            var $this = $(this), data = $this.data('megamenu'), options = typeof option == 'object' && option;
            if (!data) {
                $this.data('megamenu', (data = new T3Menu(this, options)));
            } else {
                if (typeof option == 'string' && data[option]) {
                    data[option]()
                }
            }
        })
    };
    $.fn.t3menu.defaults = {duration: 400, timeout: 100, hidedelay: 200, hover: true, sb_width: 20};
    $(document).ready(function() {
        var mm_duration = $('.t3-megamenu').data('duration') || 0;
        if (mm_duration) {
            $('<style type="text/css">' + '.t3-megamenu.animate .animating > .mega-dropdown-menu,' + '.t3-megamenu.animate.slide .animating > .mega-dropdown-menu > div {' + 'transition-duration: ' + mm_duration + 'ms !important;' + '-webkit-transition-duration: ' + mm_duration + 'ms !important;' + '}' + '</style>').appendTo('head');
        }
        var mm_timeout = mm_duration ? 100 + mm_duration : 500, mm_rtl = $(document.documentElement).attr('dir') == 'rtl', mm_trigger = $(document.documentElement).hasClass('mm-hover'), sb_width = (function() {
            var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'), child = parent.children(), width = child.innerWidth() - child.height(100).innerWidth();
            parent.remove();
            return width;
        })();
        if (!$.support.transition) {
            $('.t3-megamenu').removeClass('animate');
            mm_timeout = 100;
        }
        $('.nav').has('.dropdown-menu').t3menu({duration: mm_duration, timeout: mm_timeout, rtl: mm_rtl, sb_width: sb_width, hover: mm_trigger});
        $(window).load(function() {
            $('.nav').has('.dropdown-menu').t3menu({duration: mm_duration, timeout: mm_timeout, rtl: mm_rtl, sb_width: sb_width, hover: mm_trigger});
        });
    });
})(jQuery);


/*===============================
 /templates/ja_decor/js/jquery.cookie.js
 ================================================================================*/;
/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function($) {
    var pluses = /\+/g;
    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }
    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }
    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }
    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }
        try {
            s = decodeURIComponent(s.replace(pluses, ' '));
            return config.json ? JSON.parse(s) : s;
        } catch (e) {
        }
    }
    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value;
    }
    var config = $.cookie = function(key, value, options) {
        if (value !== undefined && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);
            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setTime(+t + days * 864e+5);
            }
            return(document.cookie = [encode(key), '=', stringifyCookieValue(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join(''));
        }
        var result = key ? undefined : {};
        var cookies = document.cookie ? document.cookie.split('; ') : [];
        for (var i = 0, l = cookies.length; i < l; i++) {
            var parts = cookies[i].split('=');
            var name = decode(parts.shift());
            var cookie = parts.join('=');
            if (key && key === name) {
                result = read(cookie, value);
                break;
            }
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }
        return result;
    };
    config.defaults = {};
    $.removeCookie = function(key, options) {
        if ($.cookie(key) === undefined) {
            return false;
        }
        $.cookie(key, '', $.extend({}, options, {expires: -1}));
        return!$.cookie(key);
    };
}));


/*===============================
 /templates/ja_decor/js/jquery.isotope.min.js
 ================================================================================*/;
/**
 * Isotope v1.5.26
 * An exquisite jQuery plugin for magical layouts
 * http://isotope.metafizzy.co
 *
 * Commercial use requires one-time purchase of a commercial license
 * http://isotope.metafizzy.co/docs/license.html
 *
 * Non-commercial use is licensed under the MIT License
 *
 * Copyright 2014 Metafizzy
 */
!function(t, i) {
    "use strict";
    var s, e = t.document, n = e.documentElement, o = t.Modernizr, r = function(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
    }, a = "Moz Webkit O Ms".split(" "), h = function(t) {
        var i, s = n.style;
        if ("string" == typeof s[t])
            return t;
        t = r(t);
        for (var e = 0, o = a.length; o > e; e++)
            if (i = a[e] + t, "string" == typeof s[i])
                return i
    }, l = h("transform"), u = h("transitionProperty"), c = {csstransforms: function() {
            return!!l
        }, csstransforms3d: function() {
            var t = !!h("perspective");
            if (t && "webkitPerspective"in n.style) {
                var s = i("<style>@media (transform-3d),(-webkit-transform-3d){#modernizr{height:3px}}</style>").appendTo("head"), e = i('<div id="modernizr" />').appendTo("html");
                t = 3 === e.height(), e.remove(), s.remove()
            }
            return t
        }, csstransitions: function() {
            return!!u
        }};
    if (o)
        for (s in c)
            o.hasOwnProperty(s) || o.addTest(s, c[s]);
    else {
        o = t.Modernizr = {_version: "1.6ish: miniModernizr for Isotope"};
        var d, f = " ";
        for (s in c)
            d = c[s](), o[s] = d, f += " " + (d ? "" : "no-") + s;
        i("html").addClass(f)
    }
    if (o.csstransforms) {
        var m = o.csstransforms3d ? {translate: function(t) {
                return"translate3d(" + t[0] + "px, " + t[1] + "px, 0) "
            }, scale: function(t) {
                return"scale3d(" + t + ", " + t + ", 1) "
            }} : {translate: function(t) {
                return"translate(" + t[0] + "px, " + t[1] + "px) "
            }, scale: function(t) {
                return"scale(" + t + ") "
            }}, p = function(t, s, e) {
            var n, o, r = i.data(t, "isoTransform") || {}, a = {}, h = {};
            a[s] = e, i.extend(r, a);
            for (n in r)
                o = r[n], h[n] = m[n](o);
            var u = h.translate || "", c = h.scale || "", d = u + c;
            i.data(t, "isoTransform", r), t.style[l] = d
        };
        i.cssNumber.scale = !0, i.cssHooks.scale = {set: function(t, i) {
                p(t, "scale", i)
            }, get: function(t) {
                var s = i.data(t, "isoTransform");
                return s && s.scale ? s.scale : 1
            }}, i.fx.step.scale = function(t) {
            i.cssHooks.scale.set(t.elem, t.now + t.unit)
        }, i.cssNumber.translate = !0, i.cssHooks.translate = {set: function(t, i) {
                p(t, "translate", i)
            }, get: function(t) {
                var s = i.data(t, "isoTransform");
                return s && s.translate ? s.translate : [0, 0]
            }}
    }
    var y, g;
    o.csstransitions && (y = {WebkitTransitionProperty: "webkitTransitionEnd", MozTransitionProperty: "transitionend", OTransitionProperty: "oTransitionEnd otransitionend", transitionProperty: "transitionend"}[u], g = h("transitionDuration"));
    var v, _ = i.event, A = i.event.handle ? "handle" : "dispatch";
    _.special.smartresize = {setup: function() {
            i(this).bind("resize", _.special.smartresize.handler)
        }, teardown: function() {
            i(this).unbind("resize", _.special.smartresize.handler)
        }, handler: function(t, i) {
            var s = this, e = arguments;
            t.type = "smartresize", v && clearTimeout(v), v = setTimeout(function() {
                _[A].apply(s, e)
            }, "execAsap" === i ? 0 : 100)
        }}, i.fn.smartresize = function(t) {
        return t ? this.bind("smartresize", t) : this.trigger("smartresize", ["execAsap"])
    }, i.Isotope = function(t, s, e) {
        this.element = i(s), this._create(t), this._init(e)
    };
    var w = ["width", "height"], C = i(t);
    i.Isotope.settings = {resizable: !0, layoutMode: "masonry", containerClass: "isotope", itemClass: "isotope-item", hiddenClass: "isotope-hidden", hiddenStyle: {opacity: 0, scale: .001}, visibleStyle: {opacity: 1, scale: 1}, containerStyle: {position: "relative", overflow: "hidden"}, animationEngine: "best-available", animationOptions: {queue: !1, duration: 800}, sortBy: "original-order", sortAscending: !0, resizesContainer: !0, transformsEnabled: !0, itemPositionDataEnabled: !1}, i.Isotope.prototype = {_create: function(t) {
            this.options = i.extend({}, i.Isotope.settings, t), this.styleQueue = [], this.elemCount = 0;
            var s = this.element[0].style;
            this.originalStyle = {};
            var e = w.slice(0);
            for (var n in this.options.containerStyle)
                e.push(n);
            for (var o = 0, r = e.length; r > o; o++)
                n = e[o], this.originalStyle[n] = s[n] || "";
            this.element.css(this.options.containerStyle), this._updateAnimationEngine(), this._updateUsingTransforms();
            var a = {"original-order": function(t, i) {
                    return i.elemCount++, i.elemCount
                }, random: function() {
                    return Math.random()
                }};
            this.options.getSortData = i.extend(this.options.getSortData, a), this.reloadItems(), this.offset = {left: parseInt(this.element.css("padding-left") || 0, 10), top: parseInt(this.element.css("padding-top") || 0, 10)};
            var h = this;
            setTimeout(function() {
                h.element.addClass(h.options.containerClass)
            }, 0), this.options.resizable && C.bind("smartresize.isotope", function() {
                h.resize()
            }), this.element.delegate("." + this.options.hiddenClass, "click", function() {
                return!1
            })
        }, _getAtoms: function(t) {
            var i = this.options.itemSelector, s = i ? t.filter(i).add(t.find(i)) : t, e = {position: "absolute"};
            return s = s.filter(function(t, i) {
                return 1 === i.nodeType
            }), this.usingTransforms && (e.left = 0, e.top = 0), s.css(e).addClass(this.options.itemClass), this.updateSortData(s, !0), s
        }, _init: function(t) {
            this.$filteredAtoms = this._filter(this.$allAtoms), this._sort(), this.reLayout(t)
        }, option: function(t) {
            if (i.isPlainObject(t)) {
                this.options = i.extend(!0, this.options, t);
                var s;
                for (var e in t)
                    s = "_update" + r(e), this[s] && this[s]()
            }
        }, _updateAnimationEngine: function() {
            var t, i = this.options.animationEngine.toLowerCase().replace(/[ _\-]/g, "");
            switch (i) {
                case"css":
                case"none":
                    t = !1;
                    break;
                case"jquery":
                    t = !0;
                    break;
                default:
                    t = !o.csstransitions
            }
            this.isUsingJQueryAnimation = t, this._updateUsingTransforms()
        }, _updateTransformsEnabled: function() {
            this._updateUsingTransforms()
        }, _updateUsingTransforms: function() {
            var t = this.usingTransforms = this.options.transformsEnabled && o.csstransforms && o.csstransitions && !this.isUsingJQueryAnimation;
            t || (delete this.options.hiddenStyle.scale, delete this.options.visibleStyle.scale), this.getPositionStyles = t ? this._translate : this._positionAbs
        }, _filter: function(t) {
            var i = "" === this.options.filter ? "*" : this.options.filter;
            if (!i)
                return t;
            var s = this.options.hiddenClass, e = "." + s, n = t.filter(e), o = n;
            if ("*" !== i) {
                o = n.filter(i);
                var r = t.not(e).not(i).addClass(s);
                this.styleQueue.push({$el: r, style: this.options.hiddenStyle})
            }
            return this.styleQueue.push({$el: o, style: this.options.visibleStyle}), o.removeClass(s), t.filter(i)
        }, updateSortData: function(t, s) {
            var e, n, o = this, r = this.options.getSortData;
            t.each(function() {
                e = i(this), n = {};
                for (var t in r)
                    n[t] = s || "original-order" !== t ? r[t](e, o) : i.data(this, "isotope-sort-data")[t];
                i.data(this, "isotope-sort-data", n)
            })
        }, _sort: function() {
            var t = this.options.sortBy, i = this._getSorter, s = this.options.sortAscending ? 1 : -1, e = function(e, n) {
                var o = i(e, t), r = i(n, t);
                return o === r && "original-order" !== t && (o = i(e, "original-order"), r = i(n, "original-order")), (o > r ? 1 : r > o ? -1 : 0) * s
            };
            this.$filteredAtoms.sort(e)
        }, _getSorter: function(t, s) {
            return i.data(t, "isotope-sort-data")[s]
        }, _translate: function(t, i) {
            return{translate: [t, i]}
        }, _positionAbs: function(t, i) {
            return{left: t, top: i}
        }, _pushPosition: function(t, i, s) {
            i = Math.round(i + this.offset.left), s = Math.round(s + this.offset.top);
            var e = this.getPositionStyles(i, s);
            this.styleQueue.push({$el: t, style: e}), this.options.itemPositionDataEnabled && t.data("isotope-item-position", {x: i, y: s})
        }, layout: function(t, i) {
            var s = this.options.layoutMode;
            if (this["_" + s + "Layout"](t), this.options.resizesContainer) {
                var e = this["_" + s + "GetContainerSize"]();
                this.styleQueue.push({$el: this.element, style: e})
            }
            this._processStyleQueue(t, i), this.isLaidOut = !0
        }, _processStyleQueue: function(t, s) {
            var e, n, r, a, h = this.isLaidOut ? this.isUsingJQueryAnimation ? "animate" : "css" : "css", l = this.options.animationOptions, u = this.options.onLayout;
            if (n = function(t, i) {
                i.$el[h](i.style, l)
            }, this._isInserting && this.isUsingJQueryAnimation)
                n = function(t, i) {
                    e = i.$el.hasClass("no-transition") ? "css" : h, i.$el[e](i.style, l)
                };
            else if (s || u || l.complete) {
                var c = !1, d = [s, u, l.complete], f = this;
                if (r = !0, a = function() {
                    if (!c) {
                        for (var i, s = 0, e = d.length; e > s; s++)
                            i = d[s], "function" == typeof i && i.call(f.element, t, f);
                        c = !0
                    }
                }, this.isUsingJQueryAnimation && "animate" === h)
                    l.complete = a, r = !1;
                else if (o.csstransitions) {
                    for (var m, p = 0, v = this.styleQueue[0], _ = v && v.$el; !_ || !_.length; ) {
                        if (m = this.styleQueue[p++], !m)
                            return;
                        _ = m.$el
                    }
                    var A = parseFloat(getComputedStyle(_[0])[g]);
                    A > 0 && (n = function(t, i) {
                        i.$el[h](i.style, l).one(y, a)
                    }, r = !1)
                }
            }
            i.each(this.styleQueue, n), r && a(), this.styleQueue = []
        }, resize: function() {
            this["_" + this.options.layoutMode + "ResizeChanged"]() && this.reLayout()
        }, reLayout: function(t) {
            this["_" + this.options.layoutMode + "Reset"](), this.layout(this.$filteredAtoms, t)
        }, addItems: function(t, i) {
            var s = this._getAtoms(t);
            this.$allAtoms = this.$allAtoms.add(s), i && i(s)
        }, insert: function(t, i) {
            this.element.append(t);
            var s = this;
            this.addItems(t, function(t) {
                var e = s._filter(t);
                s._addHideAppended(e), s._sort(), s.reLayout(), s._revealAppended(e, i)
            })
        }, appended: function(t, i) {
            var s = this;
            this.addItems(t, function(t) {
                s._addHideAppended(t), s.layout(t), s._revealAppended(t, i)
            })
        }, _addHideAppended: function(t) {
            this.$filteredAtoms = this.$filteredAtoms.add(t), t.addClass("no-transition"), this._isInserting = !0, this.styleQueue.push({$el: t, style: this.options.hiddenStyle})
        }, _revealAppended: function(t, i) {
            var s = this;
            setTimeout(function() {
                t.removeClass("no-transition"), s.styleQueue.push({$el: t, style: s.options.visibleStyle}), s._isInserting = !1, s._processStyleQueue(t, i)
            }, 10)
        }, reloadItems: function() {
            this.$allAtoms = this._getAtoms(this.element.children())
        }, remove: function(t, i) {
            this.$allAtoms = this.$allAtoms.not(t), this.$filteredAtoms = this.$filteredAtoms.not(t);
            var s = this, e = function() {
                t.remove(), i && i.call(s.element)
            };
            t.filter(":not(." + this.options.hiddenClass + ")").length ? (this.styleQueue.push({$el: t, style: this.options.hiddenStyle}), this._sort(), this.reLayout(e)) : e()
        }, shuffle: function(t) {
            this.updateSortData(this.$allAtoms), this.options.sortBy = "random", this._sort(), this.reLayout(t)
        }, destroy: function() {
            var t = this.usingTransforms, i = this.options;
            this.$allAtoms.removeClass(i.hiddenClass + " " + i.itemClass).each(function() {
                var i = this.style;
                i.position = "", i.top = "", i.left = "", i.opacity = "", t && (i[l] = "")
            });
            var s = this.element[0].style;
            for (var e in this.originalStyle)
                s[e] = this.originalStyle[e];
            this.element.unbind(".isotope").undelegate("." + i.hiddenClass, "click").removeClass(i.containerClass).removeData("isotope"), C.unbind(".isotope")
        }, _getSegments: function(t) {
            var i, s = this.options.layoutMode, e = t ? "rowHeight" : "columnWidth", n = t ? "height" : "width", o = t ? "rows" : "cols", a = this.element[n](), h = this.options[s] && this.options[s][e] || this.$filteredAtoms["outer" + r(n)](!0) || a;
            i = Math.floor(a / h), i = Math.max(i, 1), this[s][o] = i, this[s][e] = h
        }, _checkIfSegmentsChanged: function(t) {
            var i = this.options.layoutMode, s = t ? "rows" : "cols", e = this[i][s];
            return this._getSegments(t), this[i][s] !== e
        }, _masonryReset: function() {
            this.masonry = {}, this._getSegments();
            var t = this.masonry.cols;
            for (this.masonry.colYs = []; t--; )
                this.masonry.colYs.push(0)
        }, _masonryLayout: function(t) {
            var s = this, e = s.masonry;
            t.each(function() {
                var t = i(this), n = Math.ceil(t.outerWidth(!0) / e.columnWidth);
                if (n = Math.min(n, e.cols), 1 === n)
                    s._masonryPlaceBrick(t, e.colYs);
                else {
                    var o, r, a = e.cols + 1 - n, h = [];
                    for (r = 0; a > r; r++)
                        o = e.colYs.slice(r, r + n), h[r] = Math.max.apply(Math, o);
                    s._masonryPlaceBrick(t, h)
                }
            })
        }, _masonryPlaceBrick: function(t, i) {
            for (var s = Math.min.apply(Math, i), e = 0, n = 0, o = i.length; o > n; n++)
                if (i[n] === s) {
                    e = n;
                    break
                }
            var r = this.masonry.columnWidth * e, a = s;
            this._pushPosition(t, r, a);
            var h = s + t.outerHeight(!0), l = this.masonry.cols + 1 - o;
            for (n = 0; l > n; n++)
                this.masonry.colYs[e + n] = h
        }, _masonryGetContainerSize: function() {
            var t = Math.max.apply(Math, this.masonry.colYs);
            return{height: t}
        }, _masonryResizeChanged: function() {
            return this._checkIfSegmentsChanged()
        }, _fitRowsReset: function() {
            this.fitRows = {x: 0, y: 0, height: 0}
        }, _fitRowsLayout: function(t) {
            var s = this, e = this.element.width(), n = this.fitRows;
            t.each(function() {
                var t = i(this), o = t.outerWidth(!0), r = t.outerHeight(!0);
                0 !== n.x && o + n.x > e && (n.x = 0, n.y = n.height), s._pushPosition(t, n.x, n.y), n.height = Math.max(n.y + r, n.height), n.x += o
            })
        }, _fitRowsGetContainerSize: function() {
            return{height: this.fitRows.height}
        }, _fitRowsResizeChanged: function() {
            return!0
        }, _cellsByRowReset: function() {
            this.cellsByRow = {index: 0}, this._getSegments(), this._getSegments(!0)
        }, _cellsByRowLayout: function(t) {
            var s = this, e = this.cellsByRow;
            t.each(function() {
                var t = i(this), n = e.index % e.cols, o = Math.floor(e.index / e.cols), r = (n + .5) * e.columnWidth - t.outerWidth(!0) / 2, a = (o + .5) * e.rowHeight - t.outerHeight(!0) / 2;
                s._pushPosition(t, r, a), e.index++
            })
        }, _cellsByRowGetContainerSize: function() {
            return{height: Math.ceil(this.$filteredAtoms.length / this.cellsByRow.cols) * this.cellsByRow.rowHeight + this.offset.top}
        }, _cellsByRowResizeChanged: function() {
            return this._checkIfSegmentsChanged()
        }, _straightDownReset: function() {
            this.straightDown = {y: 0}
        }, _straightDownLayout: function(t) {
            var s = this;
            t.each(function() {
                var t = i(this);
                s._pushPosition(t, 0, s.straightDown.y), s.straightDown.y += t.outerHeight(!0)
            })
        }, _straightDownGetContainerSize: function() {
            return{height: this.straightDown.y}
        }, _straightDownResizeChanged: function() {
            return!0
        }, _masonryHorizontalReset: function() {
            this.masonryHorizontal = {}, this._getSegments(!0);
            var t = this.masonryHorizontal.rows;
            for (this.masonryHorizontal.rowXs = []; t--; )
                this.masonryHorizontal.rowXs.push(0)
        }, _masonryHorizontalLayout: function(t) {
            var s = this, e = s.masonryHorizontal;
            t.each(function() {
                var t = i(this), n = Math.ceil(t.outerHeight(!0) / e.rowHeight);
                if (n = Math.min(n, e.rows), 1 === n)
                    s._masonryHorizontalPlaceBrick(t, e.rowXs);
                else {
                    var o, r, a = e.rows + 1 - n, h = [];
                    for (r = 0; a > r; r++)
                        o = e.rowXs.slice(r, r + n), h[r] = Math.max.apply(Math, o);
                    s._masonryHorizontalPlaceBrick(t, h)
                }
            })
        }, _masonryHorizontalPlaceBrick: function(t, i) {
            for (var s = Math.min.apply(Math, i), e = 0, n = 0, o = i.length; o > n; n++)
                if (i[n] === s) {
                    e = n;
                    break
                }
            var r = s, a = this.masonryHorizontal.rowHeight * e;
            this._pushPosition(t, r, a);
            var h = s + t.outerWidth(!0), l = this.masonryHorizontal.rows + 1 - o;
            for (n = 0; l > n; n++)
                this.masonryHorizontal.rowXs[e + n] = h
        }, _masonryHorizontalGetContainerSize: function() {
            var t = Math.max.apply(Math, this.masonryHorizontal.rowXs);
            return{width: t}
        }, _masonryHorizontalResizeChanged: function() {
            return this._checkIfSegmentsChanged(!0)
        }, _fitColumnsReset: function() {
            this.fitColumns = {x: 0, y: 0, width: 0}
        }, _fitColumnsLayout: function(t) {
            var s = this, e = this.element.height(), n = this.fitColumns;
            t.each(function() {
                var t = i(this), o = t.outerWidth(!0), r = t.outerHeight(!0);
                0 !== n.y && r + n.y > e && (n.x = n.width, n.y = 0), s._pushPosition(t, n.x, n.y), n.width = Math.max(n.x + o, n.width), n.y += r
            })
        }, _fitColumnsGetContainerSize: function() {
            return{width: this.fitColumns.width}
        }, _fitColumnsResizeChanged: function() {
            return!0
        }, _cellsByColumnReset: function() {
            this.cellsByColumn = {index: 0}, this._getSegments(), this._getSegments(!0)
        }, _cellsByColumnLayout: function(t) {
            var s = this, e = this.cellsByColumn;
            t.each(function() {
                var t = i(this), n = Math.floor(e.index / e.rows), o = e.index % e.rows, r = (n + .5) * e.columnWidth - t.outerWidth(!0) / 2, a = (o + .5) * e.rowHeight - t.outerHeight(!0) / 2;
                s._pushPosition(t, r, a), e.index++
            })
        }, _cellsByColumnGetContainerSize: function() {
            return{width: Math.ceil(this.$filteredAtoms.length / this.cellsByColumn.rows) * this.cellsByColumn.columnWidth}
        }, _cellsByColumnResizeChanged: function() {
            return this._checkIfSegmentsChanged(!0)
        }, _straightAcrossReset: function() {
            this.straightAcross = {x: 0}
        }, _straightAcrossLayout: function(t) {
            var s = this;
            t.each(function() {
                var t = i(this);
                s._pushPosition(t, s.straightAcross.x, 0), s.straightAcross.x += t.outerWidth(!0)
            })
        }, _straightAcrossGetContainerSize: function() {
            return{width: this.straightAcross.x}
        }, _straightAcrossResizeChanged: function() {
            return!0
        }}, i.fn.imagesLoaded = function(t) {
        function s() {
            t.call(n, o)
        }
        function e(t) {
            var n = t.target;
            n.src !== a && -1 === i.inArray(n, h) && (h.push(n), --r <= 0 && (setTimeout(s), o.unbind(".imagesLoaded", e)))
        }
        var n = this, o = n.find("img").add(n.filter("img")), r = o.length, a = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==", h = [];
        return r || s(), o.bind("load.imagesLoaded error.imagesLoaded", e).each(function() {
            var t = this.src;
            this.src = a, this.src = t
        }), n
    };
    var z = function(i) {
        t.console && t.console.error(i)
    };
    i.fn.isotope = function(t, s) {
        if ("string" == typeof t) {
            var e = Array.prototype.slice.call(arguments, 1);
            this.each(function() {
                var s = i.data(this, "isotope");
                return s ? i.isFunction(s[t]) && "_" !== t.charAt(0) ? void s[t].apply(s, e) : void z("no such method '" + t + "' for isotope instance") : void z("cannot call methods on isotope prior to initialization; attempted to call method '" + t + "'")
            })
        } else
            this.each(function() {
                var e = i.data(this, "isotope");
                e ? (e.option(t), e._init(s)) : i.data(this, "isotope", new i.Isotope(t, this, s))
            });
        return this
    }
}(window, jQuery);


/*===============================
 /templates/ja_decor/js/jquery.infinitescroll.min.js
 ================================================================================*/;
(function(e, t, n) {
    "use strict";
    t.infinitescroll = function(n, r, i) {
        this.element = t(i);
        if (!this._create(n, r)) {
            this.failed = true
        }
    };
    t.infinitescroll.defaults = {loading: {finished: n, finishedMsg: "<em>Congratulations, you've reached the end of the internet.</em>", img: "data:image/gif;base64,R0lGODlh3AATAPQeAPDy+MnQ6LW/4N3h8MzT6rjC4sTM5r/I5NHX7N7j8c7U6tvg8OLl8uXo9Ojr9b3G5MfP6Ovu9tPZ7PT1+vX2+tbb7vf4+8/W69jd7rC73vn5/O/x+K243ai02////wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQECgD/ACwAAAAA3AATAAAF/6AnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEj0BAScpHLJbDqf0Kh0Sq1ar9isdioItAKGw+MAKYMFhbF63CW438f0mg1R2O8EuXj/aOPtaHx7fn96goR4hmuId4qDdX95c4+RBIGCB4yAjpmQhZN0YGYGXitdZBIVGAsLoq4BBKQDswm1CQRkcG6ytrYKubq8vbfAcMK9v7q7EMO1ycrHvsW6zcTKsczNz8HZw9vG3cjTsMIYqQkCLBwHCgsMDQ4RDAYIqfYSFxDxEfz88/X38Onr16+Bp4ADCco7eC8hQYMAEe57yNCew4IVBU7EGNDiRn8Z831cGLHhSIgdFf9chIeBg7oA7gjaWUWTVQAGE3LqBDCTlc9WOHfm7PkTqNCh54rePDqB6M+lR536hCpUqs2gVZM+xbrTqtGoWqdy1emValeXKzggYBBB5y1acFNZmEvXAoN2cGfJrTv3bl69Ffj2xZt3L1+/fw3XRVw4sGDGcR0fJhxZsF3KtBTThZxZ8mLMgC3fRatCbYMNFCzwLEqLgE4NsDWs/tvqdezZf13Hvk2A9Szdu2X3pg18N+68xXn7rh1c+PLksI/Dhe6cuO3ow3NfV92bdArTqC2Ebd3A8vjf5QWfH6Bg7Nz17c2fj69+fnq+8N2Lty+fuP78/eV2X13neIcCeBRwxorbZrA1ANoCDGrgoG8RTshahQ9iSKEEzUmYIYfNWViUhheCGJyIP5E4oom7WWjgCeBFAJNv1DVV01MAdJhhjdkplWNzO/5oXI846njjVEIqR2OS2B1pE5PVscajkxhMycqLJghQSwT40PgfAl4GqNSXYdZXJn5gSkmmmmJu1aZYb14V51do+pTOCmA40AqVCIhG5IJ9PvYnhIFOxmdqhpaI6GeHCtpooisuutmg+Eg62KOMKuqoTaXgicQWoIYq6qiklmoqFV0UoeqqrLbq6quwxirrrLTWauutJ4QAACH5BAUKABwALAcABADOAAsAAAX/IPd0D2dyRCoUp/k8gpHOKtseR9yiSmGbuBykler9XLAhkbDavXTL5k2oqFqNOxzUZPU5YYZd1XsD72rZpBjbeh52mSNnMSC8lwblKZGwi+0QfIJ8CncnCoCDgoVnBHmKfByGJimPkIwtiAeBkH6ZHJaKmCeVnKKTHIihg5KNq4uoqmEtcRUtEREMBggtEr4QDrjCuRC8h7/BwxENeicSF8DKy82pyNLMOxzWygzFmdvD2L3P0dze4+Xh1Arkyepi7dfFvvTtLQkZBC0T/FX3CRgCMOBHsJ+EHYQY7OinAGECgQsB+Lu3AOK+CewcWjwxQeJBihtNGHSoQOE+iQ3//4XkwBBhRZMcUS6YSXOAwIL8PGqEaSJCiYt9SNoCmnJPAgUVLChdaoFBURN8MAzl2PQphwQLfDFd6lTowglHve6rKpbjhK7/pG5VinZP1qkiz1rl4+tr2LRwWU64cFEihwEtZgbgR1UiHaMVvxpOSwBA37kzGz9e8G+B5MIEKLutOGEsAH2ATQwYfTmuX8aETWdGPZmiZcccNSzeTCA1Sw0bdiitC7LBWgu8jQr8HRzqgpK6gX88QbrB14z/kF+ELpwB8eVQj/JkqdylAudji/+ts3039vEEfK8Vz2dlvxZKG0CmbkKDBvllRd6fCzDvBLKBDSCeffhRJEFebFk1k/Mv9jVIoIJZSeBggwUaNeB+Qk34IE0cXlihcfRxkOAJFFhwGmKlmWDiakZhUJtnLBpnWWcnKaAZcxI0piFGGLBm1mc90kajSCveeBVWKeYEoU2wqeaQi0PetoE+rr14EpVC7oAbAUHqhYExbn2XHHsVqbcVew9tx8+XJKk5AZsqqdlddGpqAKdbAYBn1pcczmSTdWvdmZ17c1b3FZ99vnTdCRFM8OEcAhLwm1NdXnWcBBSMRWmfkWZqVlsmLIiAp/o1gGV2vpS4lalGYsUOqXrddcKCmK61aZ8SjEpUpVFVoCpTj4r661Km7kBHjrDyc1RAIQAAIfkEBQoAGwAsBwAEAM4ACwAABf/gtmUCd4goQQgFKj6PYKi0yrrbc8i4ohQt12EHcal+MNSQiCP8gigdz7iCioaCIvUmZLp8QBzW0EN2vSlCuDtFKaq4RyHzQLEKZNdiQDhRDVooCwkbfm59EAmKi4SGIm+AjIsKjhsqB4mSjT2IOIOUnICeCaB/mZKFNTSRmqVpmJqklSqskq6PfYYCDwYHDC4REQwGCBLGxxIQDsHMwhAIX8bKzcENgSLGF9PU1j3Sy9zX2NrgzQziChLk1BHWxcjf7N046tvN82715czn9Pryz6Ilc4ACj4EBOCZM8KEnAYYADBRKnACAYUMFv1wotIhCEcaJCisqwJFgAUSQGyX/kCSVUUTIdKMwJlyo0oXHlhskwrTJciZHEXsgaqS4s6PJiCAr1uzYU8kBBSgnWFqpoMJMUjGtDmUwkmfVmVypakWhEKvXsS4nhLW5wNjVroJIoc05wSzTr0PtiigpYe4EC2vj4iWrFu5euWIMRBhacaVJhYQBEFjA9jHjyQ0xEABwGceGAZYjY0YBOrRLCxUp29QM+bRkx5s7ZyYgVbTqwwti2ybJ+vLtDYpycyZbYOlptxdx0kV+V7lC5iJAyyRrwYKxAdiz82ng0/jnAdMJFz0cPi104Ec1Vj9/M6F173vKL/feXv156dw11tlqeMMnv4V5Ap53GmjQQH97nFfg+IFiucfgRX5Z8KAgbUlQ4IULIlghhhdOSB6AgX0IVn8eReghen3NRIBsRgnH4l4LuEidZBjwRpt6NM5WGwoW0KSjCwX6yJSMab2GwwAPDXfaBCtWpluRTQqC5JM5oUZAjUNS+VeOLWpJEQ7VYQANW0INJSZVDFSnZphjSikfmzE5N4EEbQI1QJmnWXCmHulRp2edwDXF43txukenJwvI9xyg9Q26Z3MzGUcBYFEChZh6DVTq34AU8Iflh51Sd+CnKFYQ6mmZkhqfBKfSxZWqA9DZanWjxmhrWwi0qtCrt/43K6WqVjjpmhIqgEGvculaGKklKstAACEAACH5BAUKABwALAcABADOAAsAAAX/ICdyQmaMYyAUqPgIBiHPxNpy79kqRXH8wAPsRmDdXpAWgWdEIYm2llCHqjVHU+jjJkwqBTecwItShMXkEfNWSh8e1NGAcLgpDGlRgk7EJ/6Ae3VKfoF/fDuFhohVeDeCfXkcCQqDVQcQhn+VNDOYmpSWaoqBlUSfmowjEA+iEAEGDRGztAwGCDcXEA60tXEiCrq8vREMEBLIyRLCxMWSHMzExnbRvQ2Sy7vN0zvVtNfU2tLY3rPgLdnDvca4VQS/Cpk3ABwSLQkYAQwT/P309vcI7OvXr94jBQMJ/nskkGA/BQBRLNDncAIAiDcG6LsxAWOLiQzmeURBKWSLCQbv/1F0eDGinJUKR47YY1IEgQASKk7Yc7ACRwZm7mHweRJoz59BJUogisKCUaFMR0x4SlJBVBFTk8pZivTR0K73rN5wqlXEAq5Fy3IYgHbEzQ0nLy4QSoCjXLoom96VOJEeCosK5n4kkFfqXjl94wa+l1gvAcGICbewAOAxY8l/Ky/QhAGz4cUkGxu2HNozhwMGBnCUqUdBg9UuW9eUynqSwLHIBujePef1ZGQZXcM+OFuEBeBhi3OYgLyqcuaxbT9vLkf4SeqyWxSQpKGB2gQpm1KdWbu72rPRzR9Ne2Nu9Kzr/1Jqj0yD/fvqP4aXOt5sW/5qsXXVcv1Nsp8IBUAmgswGF3llGgeU1YVXXKTN1FlhWFXW3gIE+DVChApysACHHo7Q4A35lLichh+ROBmLKAzgYmYEYDAhCgxKGOOMn4WR4kkDaoBBOxJtdNKQxFmg5JIWIBnQc07GaORfUY4AEkdV6jHlCEISSZ5yTXpp1pbGZbkWmcuZmQCaE6iJ0FhjMaDjTMsgZaNEHFRAQVp3bqXnZED1qYcECOz5V6BhSWCoVJQIKuKQi2KFKEkEFAqoAo7uYSmO3jk61wUUMKmknJ4SGimBmAa0qVQBhAAAIfkEBQoAGwAsBwAEAM4ACwAABf/gJm5FmRlEqhJC+bywgK5pO4rHI0D3pii22+Mg6/0Ej96weCMAk7cDkXf7lZTTnrMl7eaYoy10JN0ZFdco0XAuvKI6qkgVFJXYNwjkIBcNBgR8TQoGfRsJCRuCYYQQiI+ICosiCoGOkIiKfSl8mJkHZ4U9kZMbKaI3pKGXmJKrngmug4WwkhA0lrCBWgYFCCMQFwoQDRHGxwwGCBLMzRLEx8iGzMMO0cYNeCMKzBDW19lnF9DXDIY/48Xg093f0Q3s1dcR8OLe8+Y91OTv5wrj7o7B+7VNQqABIoRVCMBggsOHE36kSoCBIcSH3EbFangxogJYFi8CkJhqQciLJEf/LDDJEeJIBT0GsOwYUYJGBS0fjpQAMidGmyVP6sx4Y6VQhzs9VUwkwqaCCh0tmKoFtSMDmBOf9phg4SrVrROuasRQAaxXpVUhdsU6IsECZlvX3kwLUWzRt0BHOLTbNlbZG3vZinArge5Dvn7wbqtQkSYAAgtKmnSsYKVKo2AfW048uaPmG386i4Q8EQMBAIAnfB7xBxBqvapJ9zX9WgRS2YMpnvYMGdPK3aMjt/3dUcNI4blpj7iwkMFWDXDvSmgAlijrt9RTR78+PS6z1uAJZIe93Q8g5zcsWCi/4Y+C8bah5zUv3vv89uft30QP23punGCx5954oBBwnwYaNCDY/wYrsYeggnM9B2Fpf8GG2CEUVWhbWAtGouEGDy7Y4IEJVrbSiXghqGKIo7z1IVcXIkKWWR361QOLWWnIhwERpLaaCCee5iMBGJQmJGyPFTnbkfHVZGRtIGrg5HALEJAZbu39BuUEUmq1JJQIPtZilY5hGeSWsSk52G9XqsmgljdIcABytq13HyIM6RcUA+r1qZ4EBF3WHWB29tBgAzRhEGhig8KmqKFv8SeCeo+mgsF7YFXa1qWSbkDpom/mqR1PmHCqJ3fwNRVXjC7S6CZhFVCQ2lWvZiirhQq42SACt25IK2hv8TprriUV1usGgeka7LFcNmCldMLi6qZMgFLgpw16Cipb7bC1knXsBiEAACH5BAUKABsALAcABADOAAsAAAX/4FZsJPkUmUGsLCEUTywXglFuSg7fW1xAvNWLF6sFFcPb42C8EZCj24EJdCp2yoegWsolS0Uu6fmamg8n8YYcLU2bXSiRaXMGvqV6/KAeJAh8VgZqCX+BexCFioWAYgqNi4qAR4ORhRuHY408jAeUhAmYYiuVlpiflqGZa5CWkzc5fKmbbhIpsAoQDRG8vQwQCBLCwxK6vb5qwhfGxxENahvCEA7NzskSy7vNzzzK09W/PNHF1NvX2dXcN8K55cfh69Luveol3vO8zwi4Yhj+AQwmCBw4IYclDAAJDlQggVOChAoLKkgFkSCAHDwWLKhIEOONARsDKryogFPIiAUb/95gJNIiw4wnI778GFPhzBKFOAq8qLJEhQpiNArjMcHCmlTCUDIouTKBhApELSxFWiGiVKY4E2CAekPgUphDu0742nRrVLJZnyrFSqKQ2ohoSYAMW6IoDpNJ4bLdILTnAj8KUF7UeENjAKuDyxIgOuGiOI0EBBMgLNew5AUrDTMGsFixwBIaNCQuAXJB57qNJ2OWm2Aj4skwCQCIyNkhhtMkdsIuodE0AN4LJDRgfLPtn5YDLdBlraAByuUbBgxQwICxMOnYpVOPej074OFdlfc0TqC62OIbcppHjV4o+LrieWhfT8JC/I/T6W8oCl29vQ0XjLdBaA3s1RcPBO7lFvpX8BVoG4O5jTXRQRDuJ6FDTzEWF1/BCZhgbyAKE9qICYLloQYOFtahVRsWYlZ4KQJHlwHS/IYaZ6sZd9tmu5HQm2xi1UaTbzxYwJk/wBF5g5EEYOBZeEfGZmNdFyFZmZIR4jikbLThlh5kUUVJGmRT7sekkziRWUIACABk3T4qCsedgO4xhgGcY7q5pHJ4klBBTQRJ0CeHcoYHHUh6wgfdn9uJdSdMiebGJ0zUPTcoS286FCkrZxnYoYYKWLkBowhQoBeaOlZAgVhLidrXqg2GiqpQpZ4apwSwRtjqrB3muoF9BboaXKmshlqWqsWiGt2wphJkQbAU5hoCACH5BAUKABsALAcABADOAAsAAAX/oGFw2WZuT5oZROsSQnGaKjRvilI893MItlNOJ5v5gDcFrHhKIWcEYu/xFEqNv6B1N62aclysF7fsZYe5aOx2yL5aAUGSaT1oTYMBwQ5VGCAJgYIJCnx1gIOBhXdwiIl7d0p2iYGQUAQBjoOFSQR/lIQHnZ+Ue6OagqYzSqSJi5eTpTxGcjcSChANEbu8DBAIEsHBChe5vL13G7fFuscRDcnKuM3H0La3EA7Oz8kKEsXazr7Cw9/Gztar5uHHvte47MjktznZ2w0G1+D3BgirAqJmJMAQgMGEgwgn5Ei0gKDBhBMALGRYEOJBb5QcWlQo4cbAihZz3GgIMqFEBSM1/4ZEOWPAgpIIJXYU+PIhRG8ja1qU6VHlzZknJNQ6UanCjQkWCIGSUGEjAwVLjc44+DTqUQtPPS5gejUrTa5TJ3g9sWCr1BNUWZI161StiQUDmLYdGfesibQ3XMq1OPYthrwuA2yU2LBs2cBHIypYQPPlYAKFD5cVvNPtW8eVGbdcQADATsiNO4cFAPkvHpedPzc8kUcPgNGgZ5RNDZG05reoE9s2vSEP79MEGiQGy1qP8LA4ZcdtsJE48ONoLTBtTV0B9LsTnPceoIDBDQvS7W7vfjVY3q3eZ4A339J4eaAmKqU/sV58HvJh2RcnIBsDUw0ABqhBA5aV5V9XUFGiHfVeAiWwoFgJJrIXRH1tEMiDFV4oHoAEGlaWhgIGSGBO2nFomYY3mKjVglidaNYJGJDkWW2xxTfbjCbVaOGNqoX2GloR8ZeTaECS9pthRGJH2g0b3Agbk6hNANtteHD2GJUucfajCQBy5OOTQ25ZgUPvaVVQmbKh9510/qQpwXx3SQdfk8tZJOd5b6JJFplT3ZnmmX3qd5l1eg5q00HrtUkUn0AKaiGjClSAgKLYZcgWXwocGRcCFGCKwSB6ceqphwmYRUFYT/1WKlOdUpipmxW0mlCqHjYkAaeoZlqrqZ4qd+upQKaapn/AmgAegZ8KUtYtFAQQAgAh+QQFCgAbACwHAAQAzgALAAAF/+C2PUcmiCiZGUTrEkKBis8jQEquKwU5HyXIbEPgyX7BYa5wTNmEMwWsSXsqFbEh8DYs9mrgGjdK6GkPY5GOeU6ryz7UFopSQEzygOGhJBjoIgMDBAcBM0V/CYqLCQqFOwobiYyKjn2TlI6GKC2YjJZknouaZAcQlJUHl6eooJwKooobqoewrJSEmyKdt59NhRKFMxLEEA4RyMkMEAjDEhfGycqAG8TQx9IRDRDE3d3R2ctD1RLg0ttKEnbY5wZD3+zJ6M7X2RHi9Oby7u/r9g38UFjTh2xZJBEBMDAboogAgwkQI07IMUORwocSJwCgWDFBAIwZOaJIsOBjRogKJP8wTODw5ESVHVtm3AhzpEeQElOuNDlTZ0ycEUWKWFASqEahGwYUPbnxoAgEdlYSqDBkgoUNClAlIHbSAoOsqCRQnQHxq1axVb06FWFxLIqyaze0Tft1JVqyE+pWXMD1pF6bYl3+HTqAWNW8cRUFzmih0ZAAB2oGKukSAAGGRHWJgLiR6AylBLpuHKKUMlMCngMpDSAa9QIUggZVVvDaJobLeC3XZpvgNgCmtPcuwP3WgmXSq4do0DC6o2/guzcseECtUoO0hmcsGKDgOt7ssBd07wqesAIGZC1YIBa7PQHvb1+SFo+++HrJSQfB33xfav3i5eX3Hnb4CTJgegEq8tH/YQEOcIJzbm2G2EoYRLgBXFpVmFYDcREV4HIcnmUhiGBRouEMJGJGzHIspqgdXxK0yCKHRNXoIX4uorCdTyjkyNtdPWrA4Up82EbAbzMRxxZRR54WXVLDIRmRcag5d2R6ugl3ZXzNhTecchpMhIGVAKAYpgJjjsSklBEd99maZoo535ZvdamjBEpusJyctg3h4X8XqodBMx0tiNeg/oGJaKGABpogS40KSqiaEgBqlQWLUtqoVQnytekEjzo0hHqhRorppOZt2p923M2AAV+oBtpAnnPNoB6HaU6mAAIU+IXmi3j2mtFXuUoHKwXpzVrsjcgGOauKEjQrwq157hitGq2NoWmjh7z6Wmxb0m5w66+2VRAuXN/yFUAIACH5BAUKABsALAcABADOAAsAAAX/4CZuRiaM45MZqBgIRbs9AqTcuFLE7VHLOh7KB5ERdjJaEaU4ClO/lgKWjKKcMiJQ8KgumcieVdQMD8cbBeuAkkC6LYLhOxoQ2PF5Ys9PKPBMen17f0CCg4VSh32JV4t8jSNqEIOEgJKPlkYBlJWRInKdiJdkmQlvKAsLBxdABA4RsbIMBggtEhcQsLKxDBC2TAS6vLENdJLDxMZAubu8vjIbzcQRtMzJz79S08oQEt/guNiyy7fcvMbh4OezdAvGrakLAQwyABsELQkY9BP+//ckyPDD4J9BfAMh1GsBoImMeQUN+lMgUJ9CiRMa5msxoB9Gh/o8GmxYMZXIgxtR/yQ46S/gQAURR0pDwYDfywoyLPip5AdnCwsMFPBU4BPFhKBDi444quCmDKZOfwZ9KEGpCKgcN1jdALSpPqIYsabS+nSqvqplvYqQYAeDPgwKwjaMtiDl0oaqUAyo+3TuWwUAMPpVCfee0cEjVBGQq2ABx7oTWmQk4FglZMGN9fGVDMCuiH2AOVOu/PmyxM630gwM0CCn6q8LjVJ8GXvpa5Uwn95OTC/nNxkda1/dLSK475IjCD6dHbK1ZOa4hXP9DXs5chJ00UpVm5xo2qRpoxptwF2E4/IbJpB/SDz9+q9b1aNfQH08+p4a8uvX8B53fLP+ycAfemjsRUBgp1H20K+BghHgVgt1GXZXZpZ5lt4ECjxYR4ScUWiShEtZqBiIInRGWnERNnjiBglw+JyGnxUmGowsyiiZg189lNtPGACjV2+S9UjbU0JWF6SPvEk3QZEqsZYTk3UAaRSUnznJI5LmESCdBVSyaOWUWLK4I5gDUYVeV1T9l+FZClCAUVA09uSmRHBCKAECFEhW51ht6rnmWBXkaR+NjuHpJ40D3DmnQXt2F+ihZxlqVKOfQRACACH5BAUKABwALAcABADOAAsAAAX/ICdyUCkUo/g8mUG8MCGkKgspeC6j6XEIEBpBUeCNfECaglBcOVfJFK7YQwZHQ6JRZBUqTrSuVEuD3nI45pYjFuWKvjjSkCoRaBUMWxkwBGgJCXspQ36Bh4EEB0oKhoiBgyNLjo8Ki4QElIiWfJqHnISNEI+Ql5J9o6SgkqKkgqYihamPkW6oNBgSfiMMDQkGCBLCwxIQDhHIyQwQCGMKxsnKVyPCF9DREQ3MxMPX0cu4wt7J2uHWx9jlKd3o39MiuefYEcvNkuLt5O8c1ePI2tyELXGQwoGDAQf+iEC2xByDCRAjTlAgIUWCBRgCPJQ4AQBFXAs0coT40WLIjRxL/47AcHLkxIomRXL0CHPERZkpa4q4iVKiyp0tR/7kwHMkTUBBJR5dOCEBAVcKKtCAyOHpowXCpk7goABqBZdcvWploACpBKkpIJI1q5OD2rIWE0R1uTZu1LFwbWL9OlKuWb4c6+o9i3dEgw0RCGDUG9KlRw56gDY2qmCByZBaASi+TACA0TucAaTteCcy0ZuOK3N2vJlx58+LRQyY3Xm0ZsgjZg+oPQLi7dUcNXi0LOJw1pgNtB7XG6CBy+U75SYfPTSQAgZTNUDnQHt67wnbZyvwLgKiMN3oCZB3C76tdewpLFgIP2C88rbi4Y+QT3+8S5USMICZXWj1pkEDeUU3lOYGB3alSoEiMIjgX4WlgNF2EibIwQIXauWXSRg2SAOHIU5IIIMoZkhhWiJaiFVbKo6AQEgQXrTAazO1JhkBrBG3Y2Y6EsUhaGn95hprSN0oWpFE7rhkeaQBchGOEWnwEmc0uKWZj0LeuNV3W4Y2lZHFlQCSRjTIl8uZ+kG5HU/3sRlnTG2ytyadytnD3HrmuRcSn+0h1dycexIK1KCjYaCnjCCVqOFFJTZ5GkUUjESWaUIKU2lgCmAKKQIUjHapXRKE+t2og1VgankNYnohqKJ2CmKplso6GKz7WYCgqxeuyoF8u9IQAgA7", msg: null, msgText: "<em>Loading the next set of posts...</em>", selector: null, speed: "fast", start: n}, state: {isDuringAjax: false, isInvalidPage: false, isDestroyed: false, isDone: false, isPaused: false, isBeyondMaxPage: false, currPage: 1}, debug: false, behavior: n, binder: t(e), nextSelector: "div.navigation a:first", navSelector: "div.navigation", contentSelector: null, extraScrollPx: 150, itemSelector: "div.post", animate: false, pathParse: n, dataType: "html", appendCallback: true, bufferPx: 40, errorCallback: function() {
        }, infid: 0, pixelsFromNavToBottom: n, path: n, prefill: false, maxPage: n};
    t.infinitescroll.prototype = {_binding: function(t) {
            var r = this, i = r.options;
            i.v = "2.0b2.120520";
            if (!!i.behavior && this["_binding_" + i.behavior] !== n) {
                this["_binding_" + i.behavior].call(this);
                return
            }
            if (t !== "bind" && t !== "unbind") {
                this._debug("Binding value  " + t + " not valid");
                return false
            }
            if (t === "unbind") {
                this.options.binder.unbind("smartscroll.infscr." + r.options.infid)
            } else {
                this.options.binder[t]("smartscroll.infscr." + r.options.infid, function() {
                    r.scroll()
                })
            }
            this._debug("Binding", t)
        }, _create: function(i, s) {
            var o = t.extend(true, {}, t.infinitescroll.defaults, i);
            this.options = o;
            var u = t(e);
            var a = this;
            if (!a._validate(i)) {
                return false
            }
            var f = t(o.nextSelector).attr("href");
            if (!f) {
                this._debug("Navigation selector not found");
                return false
            }
            o.path = o.path || this._determinepath(f);
            o.contentSelector = o.contentSelector || this.element;
            o.loading.selector = o.loading.selector || o.contentSelector;
            o.loading.msg = o.loading.msg || t('<div id="infscr-loading"><img alt="Loading..." src="' + o.loading.img + '" /><div>' + o.loading.msgText + "</div></div>");
            (new Image).src = o.loading.img;
            if (o.pixelsFromNavToBottom === n) {
                o.pixelsFromNavToBottom = t(document).height() - t(o.navSelector).offset().top;
                this._debug("pixelsFromNavToBottom: " + o.pixelsFromNavToBottom)
            }
            var l = this;
            o.loading.start = o.loading.start || function() {
                t(o.navSelector).hide();
                o.loading.msg.appendTo(o.loading.selector).show(o.loading.speed, t.proxy(function() {
                    this.beginAjax(o)
                }, l))
            };
            o.loading.finished = o.loading.finished || function() {
                if (!o.state.isBeyondMaxPage)
                    o.loading.msg.fadeOut(o.loading.speed)
            };
            o.callback = function(e, r, i) {
                if (!!o.behavior && e["_callback_" + o.behavior] !== n) {
                    e["_callback_" + o.behavior].call(t(o.contentSelector)[0], r, i)
                }
                if (s) {
                    s.call(t(o.contentSelector)[0], r, o, i)
                }
                if (o.prefill) {
                    u.bind("resize.infinite-scroll", e._prefill)
                }
            };
            if (i.debug) {
                if (Function.prototype.bind && (typeof console === "object" || typeof console === "function") && typeof console.log === "object") {
                    ["log", "info", "warn", "error", "assert", "dir", "clear", "profile", "profileEnd"].forEach(function(e) {
                        console[e] = this.call(console[e], console)
                    }, Function.prototype.bind)
                }
            }
            this._setup();
            if (o.prefill) {
                this._prefill()
            }
            return true
        }, _prefill: function() {
            function s() {
                return r.options.contentSelector.height() <= i.height()
            }
            var r = this;
            var i = t(e);
            this._prefill = function() {
                if (s()) {
                    r.scroll()
                }
                i.bind("resize.infinite-scroll", function() {
                    if (s()) {
                        i.unbind("resize.infinite-scroll");
                        r.scroll()
                    }
                })
            };
            this._prefill()
        }, _debug: function() {
            if (true !== this.options.debug) {
                return
            }
            if (typeof console !== "undefined" && typeof console.log === "function") {
                if (Array.prototype.slice.call(arguments).length === 1 && typeof Array.prototype.slice.call(arguments)[0] === "string") {
                    console.log(Array.prototype.slice.call(arguments).toString())
                } else {
                    console.log(Array.prototype.slice.call(arguments))
                }
            } else if (!Function.prototype.bind && typeof console !== "undefined" && typeof console.log === "object") {
                Function.prototype.call.call(console.log, console, Array.prototype.slice.call(arguments))
            }
        }, _determinepath: function(t) {
            var r = this.options;
            if (!!r.behavior && this["_determinepath_" + r.behavior] !== n) {
                return this["_determinepath_" + r.behavior].call(this, t)
            }
            if (!!r.pathParse) {
                this._debug("pathParse manual");
                return r.pathParse(t, this.options.state.currPage + 1)
            } else if (t.match(/^(.*?)\b2\b(.*?$)/)) {
                t = t.match(/^(.*?)\b2\b(.*?$)/).slice(1)
            } else if (t.match(/^(.*?)2(.*?$)/)) {
                if (t.match(/^(.*?page=)2(\/.*|$)/)) {
                    t = t.match(/^(.*?page=)2(\/.*|$)/).slice(1);
                    return t
                }
                t = t.match(/^(.*?)2(.*?$)/).slice(1)
            } else {
                if (t.match(/^(.*?page=)1(\/.*|$)/)) {
                    t = t.match(/^(.*?page=)1(\/.*|$)/).slice(1);
                    return t
                } else {
                    this._debug("Sorry, we couldn't parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com.");
                    r.state.isInvalidPage = true
                }
            }
            this._debug("determinePath", t);
            return t
        }, _error: function(t) {
            var r = this.options;
            if (!!r.behavior && this["_error_" + r.behavior] !== n) {
                this["_error_" + r.behavior].call(this, t);
                return
            }
            if (t !== "destroy" && t !== "end") {
                t = "unknown"
            }
            this._debug("Error", t);
            if (t === "end" || r.state.isBeyondMaxPage) {
                this._showdonemsg()
            }
            r.state.isDone = true;
            r.state.currPage = 1;
            r.state.isPaused = false;
            r.state.isBeyondMaxPage = false;
            this._binding("unbind")
        }, _loadcallback: function(i, s, o) {
            var u = this.options, a = this.options.callback, f = u.state.isDone ? "done" : !u.appendCallback ? "no-append" : "append", l;
            if (!!u.behavior && this["_loadcallback_" + u.behavior] !== n) {
                this["_loadcallback_" + u.behavior].call(this, i, s);
                return
            }
            switch (f) {
                case"done":
                    this._showdonemsg();
                    return false;
                case"no-append":
                    if (u.dataType === "html") {
                        s = "<div>" + s + "</div>";
                        s = t(s).find(u.itemSelector)
                    }
                    break;
                case"append":
                    var c = i.children();
                    if (c.length === 0) {
                        return this._error("end")
                    }
                    l = document.createDocumentFragment();
                    while (i[0].firstChild) {
                        l.appendChild(i[0].firstChild)
                    }
                    this._debug("contentSelector", t(u.contentSelector)[0]);
                    t(u.contentSelector)[0].appendChild(l);
                    s = c.get();
                    break
            }
            u.loading.finished.call(t(u.contentSelector)[0], u);
            if (u.animate) {
                var h = t(e).scrollTop() + t(u.loading.msg).height() + u.extraScrollPx + "px";
                t("html,body").animate({scrollTop: h}, 800, function() {
                    u.state.isDuringAjax = false
                })
            }
            if (!u.animate) {
                u.state.isDuringAjax = false
            }
            a(this, s, o);
            if (u.prefill) {
                this._prefill()
            }
        }, _nearbottom: function() {
            var i = this.options, s = 0 + t(document).height() - i.binder.scrollTop() - t(e).height();
            if (!!i.behavior && this["_nearbottom_" + i.behavior] !== n) {
                return this["_nearbottom_" + i.behavior].call(this)
            }
            this._debug("math:", s, i.pixelsFromNavToBottom);
            return s - i.bufferPx < i.pixelsFromNavToBottom
        }, _pausing: function(t) {
            var r = this.options;
            if (!!r.behavior && this["_pausing_" + r.behavior] !== n) {
                this["_pausing_" + r.behavior].call(this, t);
                return
            }
            if (t !== "pause" && t !== "resume" && t !== null) {
                this._debug("Invalid argument. Toggling pause value instead")
            }
            t = t && (t === "pause" || t === "resume") ? t : "toggle";
            switch (t) {
                case"pause":
                    r.state.isPaused = true;
                    break;
                case"resume":
                    r.state.isPaused = false;
                    break;
                case"toggle":
                    r.state.isPaused = !r.state.isPaused;
                    break
            }
            this._debug("Paused", r.state.isPaused);
            return false
        }, _setup: function() {
            var t = this.options;
            if (!!t.behavior && this["_setup_" + t.behavior] !== n) {
                this["_setup_" + t.behavior].call(this);
                return
            }
            this._binding("bind");
            return false
        }, _showdonemsg: function() {
            var r = this.options;
            if (!!r.behavior && this["_showdonemsg_" + r.behavior] !== n) {
                this["_showdonemsg_" + r.behavior].call(this);
                return
            }
            r.loading.msg.find("img").hide().parent().find("div").html(r.loading.finishedMsg).animate({opacity: 1}, 2e3, function() {
                t(this).parent().fadeOut(r.loading.speed)
            });
            r.errorCallback.call(t(r.contentSelector)[0], "done")
        }, _validate: function(n) {
            for (var r in n) {
                if (r.indexOf && r.indexOf("Selector") > -1 && t(n[r]).length === 0) {
                    this._debug("Your " + r + " found no elements.");
                    return false
                }
            }
            return true
        }, bind: function() {
            this._binding("bind")
        }, destroy: function() {
            this.options.state.isDestroyed = true;
            this.options.loading.finished();
            return this._error("destroy")
        }, pause: function() {
            this._pausing("pause")
        }, resume: function() {
            this._pausing("resume")
        }, beginAjax: function(r) {
            var i = this, s = r.path, o, u, a, f;
            r.state.currPage++;
            if (r.maxPage != n && r.state.currPage > r.maxPage) {
                r.state.isBeyondMaxPage = true;
                this.destroy();
                return
            }
            o = t(r.contentSelector).is("table, tbody") ? t("<tbody/>") : t("<div/>");
            u = typeof s === "function" ? s(r.state.currPage) : s.join(r.state.currPage);
            i._debug("heading into ajax", u);
            a = r.dataType === "html" || r.dataType === "json" ? r.dataType : "html+callback";
            if (r.appendCallback && r.dataType === "html") {
                a += "+callback"
            }
            switch (a) {
                case"html+callback":
                    i._debug("Using HTML via .load() method");
                    o.load(u + " " + r.itemSelector, n, function(t) {
                        i._loadcallback(o, t, u)
                    });
                    break;
                case"html":
                    i._debug("Using " + a.toUpperCase() + " via $.ajax() method");
                    t.ajax({url: u, dataType: r.dataType, complete: function(t, n) {
                            f = typeof t.isResolved !== "undefined" ? t.isResolved() : n === "success" || n === "notmodified";
                            if (f) {
                                i._loadcallback(o, t.responseText, u)
                            } else {
                                i._error("end")
                            }
                        }});
                    break;
                case"json":
                    i._debug("Using " + a.toUpperCase() + " via $.ajax() method");
                    t.ajax({dataType: "json", type: "GET", url: u, success: function(e, t, s) {
                            f = typeof s.isResolved !== "undefined" ? s.isResolved() : t === "success" || t === "notmodified";
                            if (r.appendCallback) {
                                if (r.template !== n) {
                                    var a = r.template(e);
                                    o.append(a);
                                    if (f) {
                                        i._loadcallback(o, a)
                                    } else {
                                        i._error("end")
                                    }
                                } else {
                                    i._debug("template must be defined.");
                                    i._error("end")
                                }
                            } else {
                                if (f) {
                                    i._loadcallback(o, e, u)
                                } else {
                                    i._error("end")
                                }
                            }
                        }, error: function() {
                            i._debug("JSON ajax request failed.");
                            i._error("end")
                        }});
                    break
                }
        }, retrieve: function(r) {
            r = r || null;
            var i = this, s = i.options;
            if (!!s.behavior && this["retrieve_" + s.behavior] !== n) {
                this["retrieve_" + s.behavior].call(this, r);
                return
            }
            if (s.state.isDestroyed) {
                this._debug("Instance is destroyed");
                return false
            }
            s.state.isDuringAjax = true;
            s.loading.start.call(t(s.contentSelector)[0], s)
        }, scroll: function() {
            var t = this.options, r = t.state;
            if (!!t.behavior && this["scroll_" + t.behavior] !== n) {
                this["scroll_" + t.behavior].call(this);
                return
            }
            if (r.isDuringAjax || r.isInvalidPage || r.isDone || r.isDestroyed || r.isPaused) {
                return
            }
            if (!this._nearbottom()) {
                return
            }
            this.retrieve()
        }, toggle: function() {
            this._pausing()
        }, unbind: function() {
            this._binding("unbind")
        }, update: function(n) {
            if (t.isPlainObject(n)) {
                this.options = t.extend(true, this.options, n)
            }
        }};
    t.fn.infinitescroll = function(n, r) {
        var i = typeof n;
        switch (i) {
            case"string":
                var s = Array.prototype.slice.call(arguments, 1);
                this.each(function() {
                    var e = t.data(this, "infinitescroll");
                    if (!e) {
                        return false
                    }
                    if (!t.isFunction(e[n]) || n.charAt(0) === "_") {
                        return false
                    }
                    e[n].apply(e, s)
                });
                break;
            case"object":
                this.each(function() {
                    var e = t.data(this, "infinitescroll");
                    if (e) {
                        e.update(n)
                    } else {
                        e = new t.infinitescroll(n, r, this);
                        if (!e.failed) {
                            t.data(this, "infinitescroll", e)
                        }
                    }
                });
                break
        }
        return this
    };
    var r = t.event, i;
    r.special.smartscroll = {setup: function() {
            t(this).bind("scroll", r.special.smartscroll.handler)
        }, teardown: function() {
            t(this).unbind("scroll", r.special.smartscroll.handler)
        }, handler: function(e, n) {
            var r = this, s = arguments;
            e.type = "smartscroll";
            if (i) {
                clearTimeout(i)
            }
            i = setTimeout(function() {
                t(r).trigger("smartscroll", s)
            }, n === "execAsap" ? 0 : 100)
        }};
    t.fn.smartscroll = function(e) {
        return e ? this.bind("smartscroll", e) : this.trigger("smartscroll", ["execAsap"])
    }
})(window, jQuery)



        /*===============================
         /templates/ja_decor/js/jquery.magnific-popup.min.js
         ================================================================================*/;
/*! Magnific Popup - v0.9.5 - 2013-08-21
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2013 Dmitry Semenov; */
(function(e) {
    var t, i, n, o, a, r, s, l = "Close", c = "BeforeClose", d = "AfterClose", u = "BeforeAppend", p = "MarkupParse", f = "Open", m = "Change", g = "mfp", v = "." + g, h = "mfp-ready", C = "mfp-removing", y = "mfp-prevent-close", w = function() {
    }, b = !!window.jQuery, I = e(window), x = function(e, i) {
        t.ev.on(g + e + v, i)
    }, k = function(t, i, n, o) {
        var a = document.createElement("div");
        return a.className = "mfp-" + t, n && (a.innerHTML = n), o ? i && i.appendChild(a) : (a = e(a), i && a.appendTo(i)), a
    }, T = function(i, n) {
        t.ev.triggerHandler(g + i, n), t.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), t.st.callbacks[i] && t.st.callbacks[i].apply(t, e.isArray(n) ? n : [n]))
    }, E = function() {
        (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
    }, S = function(i) {
        return i === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), s = i), t.currTemplate.closeBtn
    }, P = function() {
        e.magnificPopup.instance || (t = new w, t.init(), e.magnificPopup.instance = t)
    }, _ = function(i) {
        if (!e(i).hasClass(y)) {
            var n = t.st.closeOnContentClick, o = t.st.closeOnBgClick;
            if (n && o)
                return!0;
            if (!t.content || e(i).hasClass("mfp-close") || t.preloader && i === t.preloader[0])
                return!0;
            if (i === t.content[0] || e.contains(t.content[0], i)) {
                if (n)
                    return!0
            } else if (o && e.contains(document, i))
                return!0;
            return!1
        }
    }, O = function() {
        var e = document.createElement("p").style, t = ["ms", "O", "Moz", "Webkit"];
        if (void 0 !== e.transition)
            return!0;
        for (; t.length; )
            if (t.pop() + "Transition"in e)
                return!0;
        return!1
    };
    w.prototype = {constructor: w, init: function() {
            var i = navigator.appVersion;
            t.isIE7 = -1 !== i.indexOf("MSIE 7."), t.isIE8 = -1 !== i.indexOf("MSIE 8."), t.isLowIE = t.isIE7 || t.isIE8, t.isAndroid = /android/gi.test(i), t.isIOS = /iphone|ipad|ipod/gi.test(i), t.supportsTransition = O(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), n = e(document.body), o = e(document), t.popupsCache = {}
        }, open: function(i) {
            var n;
            if (i.isObj === !1) {
                t.items = i.items.toArray(), t.index = 0;
                var a, s = i.items;
                for (n = 0; s.length > n; n++)
                    if (a = s[n], a.parsed && (a = a.el[0]), a === i.el[0]) {
                        t.index = n;
                        break
                    }
            } else
                t.items = e.isArray(i.items) ? i.items : [i.items], t.index = i.index || 0;
            if (t.isOpen)
                return t.updateItemHTML(), void 0;
            t.types = [], r = "", t.ev = i.mainEl && i.mainEl.length ? i.mainEl.eq(0) : o, i.key ? (t.popupsCache[i.key] || (t.popupsCache[i.key] = {}), t.currTemplate = t.popupsCache[i.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, i), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = k("bg").on("click" + v, function() {
                t.close()
            }), t.wrap = k("wrap").attr("tabindex", -1).on("click" + v, function(e) {
                _(e.target) && t.close()
            }), t.container = k("container", t.wrap)), t.contentContainer = k("content"), t.st.preloader && (t.preloader = k("preloader", t.container, t.st.tLoading));
            var l = e.magnificPopup.modules;
            for (n = 0; l.length > n; n++) {
                var c = l[n];
                c = c.charAt(0).toUpperCase() + c.slice(1), t["init" + c].call(t)
            }
            T("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (x(p, function(e, t, i, n) {
                i.close_replaceWith = S(n.type)
            }), r += " mfp-close-btn-in") : t.wrap.append(S())), t.st.alignTop && (r += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({overflow: t.st.overflowY, overflowX: "hidden", overflowY: t.st.overflowY}) : t.wrap.css({top: I.scrollTop(), position: "absolute"}), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({height: o.height(), position: "absolute"}), t.st.enableEscapeKey && o.on("keyup" + v, function(e) {
                27 === e.keyCode && t.close()
            }), I.on("resize" + v, function() {
                t.updateSize()
            }), t.st.closeOnContentClick || (r += " mfp-auto-cursor"), r && t.wrap.addClass(r);
            var d = t.wH = I.height(), u = {};
            if (t.fixedContentPos && t._hasScrollBar(d)) {
                var m = t._getScrollbarSize();
                m && (u.paddingRight = m)
            }
            t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : u.overflow = "hidden");
            var g = t.st.mainClass;
            t.isIE7 && (g += " mfp-ie7"), g && t._addClassToMFP(g), t.updateItemHTML(), T("BuildControls"), e("html").css(u), t.bgOverlay.add(t.wrap).prependTo(document.body), t._lastFocusedEl = document.activeElement, setTimeout(function() {
                t.content ? (t._addClassToMFP(h), E()) : t.bgOverlay.addClass(h), o.on("focusin" + v, function(i) {
                    return i.target === t.wrap[0] || e.contains(t.wrap[0], i.target) ? void 0 : (E(), !1)
                })
            }, 16), t.isOpen = !0, t.updateSize(d), T(f)
        }, close: function() {
            t.isOpen && (T(c), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(C), setTimeout(function() {
                t._close()
            }, t.st.removalDelay)) : t._close())
        }, _close: function() {
            T(l);
            var i = C + " " + h + " ";
            if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (i += t.st.mainClass + " "), t._removeClassFromMFP(i), t.fixedContentPos) {
                var n = {paddingRight: ""};
                t.isIE7 ? e("body, html").css("overflow", "") : n.overflow = "", e("html").css(n)
            }
            o.off("keyup" + v + " focusin" + v), t.ev.off(v), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, T(d)
        }, updateSize: function(e) {
            if (t.isIOS) {
                var i = document.documentElement.clientWidth / window.innerWidth, n = window.innerHeight * i;
                t.wrap.css("height", n), t.wH = n
            } else
                t.wH = e || I.height();
            t.fixedContentPos || t.wrap.css("height", t.wH), T("Resize")
        }, updateItemHTML: function() {
            var i = t.items[t.index];
            t.contentContainer.detach(), t.content && t.content.detach(), i.parsed || (i = t.parseEl(t.index));
            var n = i.type;
            if (T("BeforeChange", [t.currItem ? t.currItem.type : "", n]), t.currItem = i, !t.currTemplate[n]) {
                var o = t.st[n] ? t.st[n].markup : !1;
                T("FirstMarkupParse", o), t.currTemplate[n] = o ? e(o) : !0
            }
            a && a !== i.type && t.container.removeClass("mfp-" + a + "-holder");
            var r = t["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, t.currTemplate[n]);
            t.appendContent(r, n), i.preloaded = !0, T(m, i), a = i.type, t.container.prepend(t.contentContainer), T("AfterChange")
        }, appendContent: function(e, i) {
            t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[i] === !0 ? t.content.find(".mfp-close").length || t.content.append(S()) : t.content = e : t.content = "", T(u), t.container.addClass("mfp-" + i + "-holder"), t.contentContainer.append(t.content)
        }, parseEl: function(i) {
            var n = t.items[i], o = n.type;
            if (n = n.tagName ? {el: e(n)} : {data: n, src: n.src}, n.el) {
                for (var a = t.types, r = 0; a.length > r; r++)
                    if (n.el.hasClass("mfp-" + a[r])) {
                        o = a[r];
                        break
                    }
                n.src = n.el.attr("data-mfp-src"), n.src || (n.src = n.el.attr("href"))
            }
            return n.type = o || t.st.type || "inline", n.index = i, n.parsed = !0, t.items[i] = n, T("ElementParse", n), t.items[i]
        }, addGroup: function(e, i) {
            var n = function(n) {
                n.mfpEl = this, t._openClick(n, e, i)
            };
            i || (i = {});
            var o = "click.magnificPopup";
            i.mainEl = e, i.items ? (i.isObj = !0, e.off(o).on(o, n)) : (i.isObj = !1, i.delegate ? e.off(o).on(o, i.delegate, n) : (i.items = e, e.off(o).on(o, n)))
        }, _openClick: function(i, n, o) {
            var a = void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick;
            if (a || 2 !== i.which && !i.ctrlKey && !i.metaKey) {
                var r = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;
                if (r)
                    if (e.isFunction(r)) {
                        if (!r.call(t))
                            return!0
                    } else if (r > I.width())
                        return!0;
                i.type && (i.preventDefault(), t.isOpen && i.stopPropagation()), o.el = e(i.mfpEl), o.delegate && (o.items = n.find(o.delegate)), t.open(o)
            }
        }, updateStatus: function(e, n) {
            if (t.preloader) {
                i !== e && t.container.removeClass("mfp-s-" + i), n || "loading" !== e || (n = t.st.tLoading);
                var o = {status: e, text: n};
                T("UpdateStatus", o), e = o.status, n = o.text, t.preloader.html(n), t.preloader.find("a").on("click", function(e) {
                    e.stopImmediatePropagation()
                }), t.container.addClass("mfp-s-" + e), i = e
            }
        }, _addClassToMFP: function(e) {
            t.bgOverlay.addClass(e), t.wrap.addClass(e)
        }, _removeClassFromMFP: function(e) {
            this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
        }, _hasScrollBar: function(e) {
            return(t.isIE7 ? o.height() : document.body.scrollHeight) > (e || I.height())
        }, _parseMarkup: function(t, i, n) {
            var o;
            n.data && (i = e.extend(n.data, i)), T(p, [t, i, n]), e.each(i, function(e, i) {
                if (void 0 === i || i === !1)
                    return!0;
                if (o = e.split("_"), o.length > 1) {
                    var n = t.find(v + "-" + o[0]);
                    if (n.length > 0) {
                        var a = o[1];
                        "replaceWith" === a ? n[0] !== i[0] && n.replaceWith(i) : "img" === a ? n.is("img") ? n.attr("src", i) : n.replaceWith('<img src="' + i + '" class="' + n.attr("class") + '" />') : n.attr(o[1], i)
                    }
                } else
                    t.find(v + "-" + e).html(i)
            })
        }, _getScrollbarSize: function() {
            if (void 0 === t.scrollbarSize) {
                var e = document.createElement("div");
                e.id = "mfp-sbm", e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
            }
            return t.scrollbarSize
        }}, e.magnificPopup = {instance: null, proto: w.prototype, modules: [], open: function(e, t) {
            return P(), e || (e = {}), e.isObj = !0, e.index = t || 0, this.instance.open(e)
        }, close: function() {
            return e.magnificPopup.instance.close()
        }, registerModule: function(t, i) {
            i.options && (e.magnificPopup.defaults[t] = i.options), e.extend(this.proto, i.proto), this.modules.push(t)
        }, defaults: {disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>', tClose: "Close (Esc)", tLoading: "Loading..."}}, e.fn.magnificPopup = function(i) {
        P();
        var n = e(this);
        if ("string" == typeof i)
            if ("open" === i) {
                var o, a = b ? n.data("magnificPopup") : n[0].magnificPopup, r = parseInt(arguments[1], 10) || 0;
                a.items ? o = a.items[r] : (o = n, a.delegate && (o = o.find(a.delegate)), o = o.eq(r)), t._openClick({mfpEl: o}, n, a)
            } else
                t.isOpen && t[i].apply(t, Array.prototype.slice.call(arguments, 1));
        else
            b ? n.data("magnificPopup", i) : n[0].magnificPopup = i, t.addGroup(n, i);
        return n
    };
    var z, M, B, H = "inline", L = function() {
        B && (M.after(B.addClass(z)).detach(), B = null)
    };
    e.magnificPopup.registerModule(H, {options: {hiddenClass: "hide", markup: "", tNotFound: "Content not found"}, proto: {initInline: function() {
                t.types.push(H), x(l + "." + H, function() {
                    L()
                })
            }, getInline: function(i, n) {
                if (L(), i.src) {
                    var o = t.st.inline, a = e(i.src);
                    if (a.length) {
                        var r = a[0].parentNode;
                        r && r.tagName && (M || (z = o.hiddenClass, M = k(z), z = "mfp-" + z), B = a.after(M).detach().removeClass(z)), t.updateStatus("ready")
                    } else
                        t.updateStatus("error", o.tNotFound), a = e("<div>");
                    return i.inlineElement = a, a
                }
                return t.updateStatus("ready"), t._parseMarkup(n, {}, i), n
            }}});
    var A, F = "ajax", j = function() {
        A && n.removeClass(A)
    };
    e.magnificPopup.registerModule(F, {options: {settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.'}, proto: {initAjax: function() {
                t.types.push(F), A = t.st.ajax.cursor, x(l + "." + F, function() {
                    j(), t.req && t.req.abort()
                })
            }, getAjax: function(i) {
                A && n.addClass(A), t.updateStatus("loading");
                var o = e.extend({url: i.src, success: function(n, o, a) {
                        var r = {data: n, xhr: a};
                        T("ParseAjax", r), t.appendContent(e(r.data), F), i.finished = !0, j(), E(), setTimeout(function() {
                            t.wrap.addClass(h)
                        }, 16), t.updateStatus("ready"), T("AjaxContentAdded")
                    }, error: function() {
                        j(), i.finished = i.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", i.src))
                    }}, t.st.ajax.settings);
                return t.req = e.ajax(o), ""
            }}});
    var N, W = function(i) {
        if (i.data && void 0 !== i.data.title)
            return i.data.title;
        var n = t.st.image.titleSrc;
        if (n) {
            if (e.isFunction(n))
                return n.call(t, i);
            if (i.el)
                return i.el.attr(n) || ""
        }
        return""
    };
    e.magnificPopup.registerModule("image", {options: {markup: '<div class="mfp-figure"><div class="mfp-close"></div><div class="mfp-img"></div><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.'}, proto: {initImage: function() {
                var e = t.st.image, i = ".image";
                t.types.push("image"), x(f + i, function() {
                    "image" === t.currItem.type && e.cursor && n.addClass(e.cursor)
                }), x(l + i, function() {
                    e.cursor && n.removeClass(e.cursor), I.off("resize" + v)
                }), x("Resize" + i, t.resizeImage), t.isLowIE && x("AfterChange", t.resizeImage)
            }, resizeImage: function() {
                var e = t.currItem;
                if (e && e.img && t.st.image.verticalFit) {
                    var i = 0;
                    t.isLowIE && (i = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - i)
                }
            }, _onImageHasSize: function(e) {
                e.img && (e.hasSize = !0, N && clearInterval(N), e.isCheckingImgSize = !1, T("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
            }, findImageSize: function(e) {
                var i = 0, n = e.img[0], o = function(a) {
                    N && clearInterval(N), N = setInterval(function() {
                        return n.naturalWidth > 0 ? (t._onImageHasSize(e), void 0) : (i > 200 && clearInterval(N), i++, 3 === i ? o(10) : 40 === i ? o(50) : 100 === i && o(500), void 0)
                    }, a)
                };
                o(1)
            }, getImage: function(i, n) {
                var o = 0, a = function() {
                    i && (i.img[0].complete ? (i.img.off(".mfploader"), i === t.currItem && (t._onImageHasSize(i), t.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, T("ImageLoadComplete")) : (o++, 200 > o ? setTimeout(a, 100) : r()))
                }, r = function() {
                    i && (i.img.off(".mfploader"), i === t.currItem && (t._onImageHasSize(i), t.updateStatus("error", s.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0)
                }, s = t.st.image, l = n.find(".mfp-img");
                if (l.length) {
                    var c = document.createElement("img");
                    c.className = "mfp-img", i.img = e(c).on("load.mfploader", a).on("error.mfploader", r), c.src = i.src, l.is("img") && (i.img = i.img.clone()), i.img[0].naturalWidth > 0 && (i.hasSize = !0)
                }
                return t._parseMarkup(n, {title: W(i), img_replaceWith: i.img}, i), t.resizeImage(), i.hasSize ? (N && clearInterval(N), i.loadError ? (n.addClass("mfp-loading"), t.updateStatus("error", s.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"), t.updateStatus("ready")), n) : (t.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, n.addClass("mfp-loading"), t.findImageSize(i)), n)
            }}});
    var R, Z = function() {
        return void 0 === R && (R = void 0 !== document.createElement("p").style.MozTransform), R
    };
    e.magnificPopup.registerModule("zoom", {options: {enabled: !1, easing: "ease-in-out", duration: 300, opener: function(e) {
                return e.is("img") ? e : e.find("img")
            }}, proto: {initZoom: function() {
                var e = t.st.zoom, i = ".zoom";
                if (e.enabled && t.supportsTransition) {
                    var n, o, a = e.duration, r = function(t) {
                        var i = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"), n = "all " + e.duration / 1e3 + "s " + e.easing, o = {position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden"}, a = "transition";
                        return o["-webkit-" + a] = o["-moz-" + a] = o["-o-" + a] = o[a] = n, i.css(o), i
                    }, s = function() {
                        t.content.css("visibility", "visible")
                    };
                    x("BuildControls" + i, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(n), t.content.css("visibility", "hidden"), image = t._getItemToZoom(), !image)
                                return s(), void 0;
                            o = r(image), o.css(t._getOffset()), t.wrap.append(o), n = setTimeout(function() {
                                o.css(t._getOffset(!0)), n = setTimeout(function() {
                                    s(), setTimeout(function() {
                                        o.remove(), image = o = null, T("ZoomAnimationEnded")
                                    }, 16)
                                }, a)
                            }, 16)
                        }
                    }), x(c + i, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(n), t.st.removalDelay = a, !image) {
                                if (image = t._getItemToZoom(), !image)
                                    return;
                                o = r(image)
                            }
                            o.css(t._getOffset(!0)), t.wrap.append(o), t.content.css("visibility", "hidden"), setTimeout(function() {
                                o.css(t._getOffset())
                            }, 16)
                        }
                    }), x(l + i, function() {
                        t._allowZoom() && (s(), o && o.remove())
                    })
                }
            }, _allowZoom: function() {
                return"image" === t.currItem.type
            }, _getItemToZoom: function() {
                return t.currItem.hasSize ? t.currItem.img : !1
            }, _getOffset: function(i) {
                var n;
                n = i ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
                var o = n.offset(), a = parseInt(n.css("padding-top"), 10), r = parseInt(n.css("padding-bottom"), 10);
                o.top -= e(window).scrollTop() - a;
                var s = {width: n.width(), height: (b ? n.innerHeight() : n[0].offsetHeight) - r - a};
                return Z() ? s["-moz-transform"] = s.transform = "translate(" + o.left + "px," + o.top + "px)" : (s.left = o.left, s.top = o.top), s
            }}});
    var q = "iframe", D = "//about:blank", K = function(e) {
        if (t.currTemplate[q]) {
            var i = t.currTemplate[q].find("iframe");
            i.length && (e || (i[0].src = D), t.isIE8 && i.css("display", e ? "block" : "none"))
        }
    };
    e.magnificPopup.registerModule(q, {options: {markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: {youtube: {index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1"}, vimeo: {index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1"}, gmaps: {index: "//maps.google.", src: "%id%&output=embed"}}}, proto: {initIframe: function() {
                t.types.push(q), x("BeforeChange", function(e, t, i) {
                    t !== i && (t === q ? K() : i === q && K(!0))
                }), x(l + "." + q, function() {
                    K()
                })
            }, getIframe: function(i, n) {
                var o = i.src, a = t.st.iframe;
                e.each(a.patterns, function() {
                    return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0
                });
                var r = {};
                return a.srcAction && (r[a.srcAction] = o), t._parseMarkup(n, r, i), t.updateStatus("ready"), n
            }}});
    var Y = function(e) {
        var i = t.items.length;
        return e > i - 1 ? e - i : 0 > e ? i + e : e
    }, U = function(e, t, i) {
        return e.replace("%curr%", t + 1).replace("%total%", i)
    };
    e.magnificPopup.registerModule("gallery", {options: {enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%"}, proto: {initGallery: function() {
                var i = t.st.gallery, n = ".mfp-gallery", a = Boolean(e.fn.mfpFastClick);
                return t.direction = !0, i && i.enabled ? (r += " mfp-gallery", x(f + n, function() {
                    i.navigateByImgClick && t.wrap.on("click" + n, ".mfp-img", function() {
                        return t.items.length > 1 ? (t.next(), !1) : void 0
                    }), o.on("keydown" + n, function(e) {
                        37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                    })
                }), x("UpdateStatus" + n, function(e, i) {
                    i.text && (i.text = U(i.text, t.currItem.index, t.items.length))
                }), x(p + n, function(e, n, o, a) {
                    var r = t.items.length;
                    o.counter = r > 1 ? U(i.tCounter, a.index, r) : ""
                }), x("BuildControls" + n, function() {
                    if (t.items.length > 1 && i.arrows && !t.arrowLeft) {
                        var n = i.arrowMarkup, o = t.arrowLeft = e(n.replace("%title%", i.tPrev).replace("%dir%", "left")).addClass(y), r = t.arrowRight = e(n.replace("%title%", i.tNext).replace("%dir%", "right")).addClass(y), s = a ? "mfpFastClick" : "click";
                        o[s](function() {
                            t.prev()
                        }), r[s](function() {
                            t.next()
                        }), t.isIE7 && (k("b", o[0], !1, !0), k("a", o[0], !1, !0), k("b", r[0], !1, !0), k("a", r[0], !1, !0)), t.container.append(o.add(r))
                    }
                }), x(m + n, function() {
                    t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function() {
                        t.preloadNearbyImages(), t._preloadTimeout = null
                    }, 16)
                }), x(l + n, function() {
                    o.off(n), t.wrap.off("click" + n), t.arrowLeft && a && t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(), t.arrowRight = t.arrowLeft = null
                }), void 0) : !1
            }, next: function() {
                t.direction = !0, t.index = Y(t.index + 1), t.updateItemHTML()
            }, prev: function() {
                t.direction = !1, t.index = Y(t.index - 1), t.updateItemHTML()
            }, goTo: function(e) {
                t.direction = e >= t.index, t.index = e, t.updateItemHTML()
            }, preloadNearbyImages: function() {
                var e, i = t.st.gallery.preload, n = Math.min(i[0], t.items.length), o = Math.min(i[1], t.items.length);
                for (e = 1; (t.direction?o:n) >= e; e++)
                    t._preloadItem(t.index + e);
                for (e = 1; (t.direction?n:o) >= e; e++)
                    t._preloadItem(t.index - e)
            }, _preloadItem: function(i) {
                if (i = Y(i), !t.items[i].preloaded) {
                    var n = t.items[i];
                    n.parsed || (n = t.parseEl(i)), T("LazyLoad", n), "image" === n.type && (n.img = e('<img class="mfp-img" />').on("load.mfploader", function() {
                        n.hasSize = !0
                    }).on("error.mfploader", function() {
                        n.hasSize = !0, n.loadError = !0, T("LazyLoadError", n)
                    }).attr("src", n.src)), n.preloaded = !0
                }
            }}});
    var G = "retina";
    e.magnificPopup.registerModule(G, {options: {replaceSrc: function(e) {
                return e.src.replace(/\.\w+$/, function(e) {
                    return"@2x" + e
                })
            }, ratio: 1}, proto: {initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var e = t.st.retina, i = e.ratio;
                    i = isNaN(i) ? i() : i, i > 1 && (x("ImageHasSize." + G, function(e, t) {
                        t.img.css({"max-width": t.img[0].naturalWidth / i, width: "100%"})
                    }), x("ElementParse." + G, function(t, n) {
                        n.src = e.replaceSrc(n, i)
                    }))
                }
            }}}), function() {
        var t = 1e3, i = "ontouchstart"in window, n = function() {
            I.off("touchmove" + a + " touchend" + a)
        }, o = "mfpFastClick", a = "." + o;
        e.fn.mfpFastClick = function(o) {
            return e(this).each(function() {
                var r, s = e(this);
                if (i) {
                    var l, c, d, u, p, f;
                    s.on("touchstart" + a, function(e) {
                        u = !1, f = 1, p = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0], c = p.clientX, d = p.clientY, I.on("touchmove" + a, function(e) {
                            p = e.originalEvent ? e.originalEvent.touches : e.touches, f = p.length, p = p[0], (Math.abs(p.clientX - c) > 10 || Math.abs(p.clientY - d) > 10) && (u = !0, n())
                        }).on("touchend" + a, function(e) {
                            n(), u || f > 1 || (r = !0, e.preventDefault(), clearTimeout(l), l = setTimeout(function() {
                                r = !1
                            }, t), o())
                        })
                    })
                }
                s.on("click" + a, function() {
                    r || o()
                })
            })
        }, e.fn.destroyMfpFastClick = function() {
            e(this).off("touchstart" + a + " click" + a), i && I.off("touchmove" + a + " touchend" + a)
        }
    }()
})(window.jQuery || window.Zepto);


/*===============================
 /templates/ja_decor/js/script.js
 ================================================================================*/;
(function($) {
    $.Isotope.prototype._getMasonryGutterColumns = function() {
        var gutter = this.options.masonry && this.options.masonry.gutterWidth || 0;
        containerWidth = this.element.width();
        this.masonry.columnWidth = this.options.masonry && this.options.masonry.columnWidth || this.$filteredAtoms.outerWidth(true) || containerWidth;
        this.masonry.columnWidth += gutter;
        this.masonry.cols = Math.floor((containerWidth + gutter) / this.masonry.columnWidth);
        this.masonry.cols = Math.max(this.masonry.cols, 1);
    };
    $.Isotope.prototype._masonryReset = function() {
        this.masonry = {};
        this._getMasonryGutterColumns();
        var i = this.masonry.cols;
        this.masonry.colYs = [];
        while (i--) {
            this.masonry.colYs.push(0);
        }
    };
    $.Isotope.prototype._masonryResizeChanged = function() {
        var prevSegments = this.masonry.cols;
        this._getMasonryGutterColumns();
        return(this.masonry.cols !== prevSegments);
    };
})(jQuery);
(function($) {
    $(document).ready(function() {
        if ($('.grid.blog').length > 0) {
            var $container = $('.grid.blog'), paginfo = $('#page-next-link'), nextbtn = $('#infinity-next'), gutter = parseInt(T3JSVars.gutter), iOS = parseFloat(('' + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ''])[1]).replace('undefined', '3_2').replace('_', '.').replace('_', '')) || false;
            firstLoad = function() {
                if (!(nextbtn.attr('data-fixel-infinity-end') || nextbtn.attr('data-fixel-infinity-done'))) {
                    nextbtn.removeClass('hidden');
                }
                if ($('.grid-list .item.isotope-item').length > 0) {
                    $('.grid-list .item.isotope-item').each(function(i, el) {
                        if (i % 2 === 0) {
                            $(el).addClass('even');
                        }
                        else {
                            $(el).addClass('odd');
                        }
                    });
                }
            }, pathobject = {init: function(link) {
                    var pagenext = $('#page-next-link'), fromelm = false;
                    if (!link) {
                        fromelm = true;
                        link = pagenext.attr('href') || '';
                    }
                    this.path = link;
                    var match = this.path.match(/((page|limitstart|start)[=-])(\d*)(&*)/i);
                    if (match) {
                        this.type = match[2].toLowerCase();
                        this.number = parseInt(match[3]);
                        this.limit = this.type == 'page' ? 1 : this.number;
                        this.number = this.type == 'page' ? this.number : 1;
                        this.init = 0;
                        var limit = parseInt(pagenext.attr('data-limit')), init = parseInt(pagenext.attr('data-start'));
                        if (isNaN(limit)) {
                            limit = 0;
                        }
                        if (isNaN(init)) {
                            init = 0;
                        }
                        if (fromelm && this.limit != limit && (this.type == 'start' || this.type == 'limitstart')) {
                            this.init = Math.max(0, init);
                            this.number = 1;
                            this.limit = limit;
                        }
                    } else {
                        this.type = 'unk';
                        this.number = 2;
                        this.path = this.path + (this.path.indexOf('?') == -1 ? '?' : '') + 'start=';
                    }
                    var urlparts = this.path.split('#');
                    if (urlparts[0].indexOf('?') == -1) {
                        urlparts[0] += '?tmpl=component';
                    } else {
                        urlparts[0] += '&tmpl=component';
                    }
                    this.path = urlparts.join('#');
                }, join: function() {
                    if (pathobject.type == 'unk') {
                        return pathobject.path + pathobject.number++;
                    } else {
                        return pathobject.path.replace(/((page|limitstart|start)[=-])(\d*)(&*)/i, '$1' + (pathobject.init + pathobject.limit * pathobject.number++) + '$4');
                    }
                }}, colWidth = function() {
                var w = $container.width(), columnNum = 1, columnWidth = 0, bloglayout = $.cookie('blog-layout');
                if ($(window).width() > 1200) {
                    columnNum = T3JSVars.itemlg;
                } else if ($(window).width() >= 992) {
                    columnNum = T3JSVars.itemmd;
                } else if ($(window).width() >= 768) {
                    columnNum = T3JSVars.itemsm;
                } else if ($(window).width() >= 480) {
                    columnNum = T3JSVars.itemsmx;
                } else {
                    columnNum = T3JSVars.itemxs;
                }
                if (bloglayout == '1') {
                    columnNum = 1;
                }
                columnWidth = Math.floor((w - gutter * (columnNum - 1)) / columnNum);
                $container.find('.item').each(function() {
                    var $item = $(this), $itemimg = $item.find('img'), columnw = $item.attr('class').match(/item-w(\d)/), multiplier_w = columnw ? ((columnw[1] > columnNum) ? columnNum : columnw[1]) : '', multiplier_h = $item.attr('class').match(/item-h(\d)/), width = multiplier_w ? (columnWidth * multiplier_w) + gutter * (multiplier_w - 1) : columnWidth, height = multiplier_h ? columnWidth * multiplier_h[1] : columnWidth;
                    if (bloglayout == '1') {
                        width = columnWidth, height = $item.height() ? $item.height() : '300';
                        $item.css({width: width, height: height});
                    } else {
                        $item.css({width: width, height: height + gutter});
                        $item.find('article').css({height: height});
                    }
                    if ($itemimg.length > 0) {
                        $itemimg.each(function() {
                            $(this).removeAttr('style');
                            if ($container.hasClass('grid-list')) {
                                $(this).css("max-height", "100%");
                            } else {
                                (width / height) > ($(this).prop('naturalWidth') / $(this).prop('naturalHeight')) ? $(this).css("max-width", "100%") : $(this).css("max-height", "100%");
                            }
                        });
                    }
                    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || iOS) {
                        $item.find('.item-desc').css('display', 'block');
                    }
                });
                return columnWidth;
            }, isotope = function() {
                $container.isotope({resizable: true, layoutMode: 'masonry', itemSelector: '.item', masonry: {columnWidth: colWidth(), gutterWidth: gutter}, animationEngine: 'jQuery', animationOptions: {duration: 750, easing: 'linear', queue: false}}, firstLoad());
            };
            pathobject.init();
            $container.infinitescroll({navSelector: '#page-nav', nextSelector: '#page-nav a', itemSelector: '.item', loading: {finished: function() {
                        $('#infscr-loading').remove();
                    }, finishedMsg: T3JSVars.finishedMsg, img: T3JSVars.tplUrl + '/images/ajax-load.gif', msgText: '', speed: 'fast', start: undefined}, state: {isDuringAjax: false, isInvalidPage: false, isDestroyed: false, isDone: false, isPaused: false, currPage: 0}, pathParse: pathobject.join, path: pathobject.join, binder: $(window), extraScrollPx: 150, dataType: 'html', appendCallback: true, bufferPx: 350, debug: false, errorCallback: function() {
                    nextbtn.addClass('disabled').html(T3JSVars.finishedMsg);
                }, prefill: false, maxPage: parseInt(nextbtn.attr('data-page-total'))}, function(items) {
                $container.isotope('appended', $(items));
                if ((items.length < parseInt(paginfo.attr('data-limit') || nextbtn.attr('data-limit') || 0)) || (parseInt(paginfo.attr('data-total')) == $container.find('.item.isotope-item').length)) {
                    nextbtn.addClass('disabled').html(T3JSVars.finishedMsg);
                }
                if (typeof DISQUSWIDGETS != 'undefined') {
                    DISQUSWIDGETS.getCount();
                }
                isotope();
            });
            isotope();
            $(window).unbind('.infscr');
            $(window).smartresize(isotope);
            if (nextbtn.length) {
                nextbtn.on('click', function() {
                    if (!nextbtn.hasClass('finished')) {
                        $container.infinitescroll('retrieve');
                    }
                    return false;
                });
            }
            var $optionSets = $('.display-blog'), $optionLinks = $optionSets.find('a');
            $optionLinks.click(function() {
                var $this = $(this), value = $this.attr('data-option-value') ? $this.attr('data-option-value') : 'masonry';
                if ($this.hasClass('active')) {
                    return false;
                }
                $optionSets.find('.active').removeClass('active');
                $this.addClass('active');
                if ($this.hasClass('project-list')) {
                    $.cookie("blog-layout", '1');
                    $container.addClass('grid-list');
                    if ($container.find('.item.isotope-item .item-desc').length > 0) {
                        $container.find('.item.isotope-item .item-desc').hide();
                        setTimeout(function() {
                            $container.find('.item.isotope-item .item-desc').fadeIn();
                        }, 800);
                    }
                } else {
                    $.cookie("blog-layout", '0');
                    $container.removeClass('grid-list');
                    if ($container.find('.item.isotope-item .item-desc').length > 0) {
                        $container.find('.item.isotope-item .item-desc').removeAttr('style');
                    }
                }
                isotope();
                $(window).smartresize(isotope);
                return false;
            });
        }
        if ($('article .thumbnails').length > 0 && !$('article .thumbnails').hasClass('no-slide')) {
            $('article .thumbnails').magnificPopup({delegate: 'a', type: 'image', tLoading: 'Loading image #%curr%...', mainClass: 'mfp-img-mobile', gallery: {enabled: true, navigateByImgClick: true, preload: [0, 1]}, image: {tError: '<a href="%url%">The image #%curr%</a> could not be loaded.', titleSrc: function(item) {
                        return item.el.attr('title');
                    }}});
        }
        (function() {
            if ($("#system-message").children().length) {
                $("#system-message-container").show();
                $("#system-message a.close").click(function() {
                    setTimeout(function() {
                        if (!$("#system-message").children().length)
                            $("#system-message-container").hide();
                        if ($('#t3-content').length > 0 && $('#t3-content').html().trim().length == 0) {
                            $('#t3-content').hide();
                        } else if ($('#t3-content').find('.blog-featured').length > 0 && $('#t3-content').find('.blog-featured').html().trim().length == 0 && $("#system-message").children().length == 0) {
                            $('#t3-content').hide();
                        }
                    }, 100);
                });
            } else {
                $("#system-message-container").hide();
            }
        })();
        if ($('#t3-content').length > 0 && $('#t3-content').html().trim().length == 0) {
            $('#t3-content').hide();
        } else if ($('#t3-content').find('.blog-featured').length > 0 && $('#t3-content').find('.blog-featured').html().trim().length == 0 && $("#system-message").children().length == 0) {
            $('#t3-content').hide();
        }
        (function() {
            if ($('#myTab a').length > 0) {
                $('#myTab a').click(function(e) {
                    e.preventDefault();
                    $(this).tab('show');
                })
            }
            if ($('.nav.nav-tabs').length > 0) {
                $('.nav.nav-tabs a').click(function(e) {
                    e.preventDefault();
                    $(this).tab('show');
                })
            }
        })();
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || iOS) {
            $('.ja-contentslider .ja-btn-control').css('display', 'block');
            $('.article-img').find('a').css('display', 'none');
        }
        if ($('.video-wrapper').length > 0 && $('.video-wrapper').find('iframe').length > 0) {
            var $containervideo = $('.video-wrapper'), $videoiframe = $containervideo.find('iframe').wrap('<div id="video-contents"></div>').parent().html();
            $containervideo.find('#video-contents').remove();
            $containervideo.find('a.video-play-icon').live('click', function() {
                $('<div/>', {id: 'iframe-video-wrap'}).appendTo('body');
                $('<button type="button" class="video-close pull-right btn btn-default">&times;</button>').appendTo('#iframe-video-wrap');
                $('<div class="video-container"><div>').appendTo('#iframe-video-wrap');
                $('.video-container').html($videoiframe);
                $('html').addClass('no-scroller');
                return false;
            });
            $('#iframe-video-wrap .video-close').live('click', function() {
                $('#iframe-video-wrap').remove();
                $('html').removeClass('no-scroller');
                return false;
            });
        }
    });
}(jQuery));


/*===============================
 /media/system/js/mootools-core.js
 ================================================================================*/;
(function() {
    this.MooTools = {version: "1.4.5", build: "74e34796f5f76640cdb98853004650aea1499d69"};
    var b = this.typeOf = function(b) {
        if (null == b)
            return"null";
        if (null != b.$family)
            return b.$family();
        if (b.nodeName) {
            if (1 == b.nodeType)
                return"element";
            if (3 == b.nodeType)
                return/\S/.test(b.nodeValue) ? "textnode" : "whitespace"
        } else if ("number" == typeof b.length) {
            if (b.callee)
                return"arguments";
            if ("item"in b)
                return"collection"
        }
        return typeof b
    };
    this.instanceOf = function(b, a) {
        if (null == b)
            return!1;
        for (var c = b.$constructor || b.constructor; c; ) {
            if (c === a)
                return!0;
            c = c.parent
        }
        return!b.hasOwnProperty ? !1 : b instanceof a
    };
    var a = this.Function, c = !0, d;
    for (d in{toString:1})
        c = null;
    c && (c = "hasOwnProperty,valueOf,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,constructor".split(","));
    a.prototype.overloadSetter = function(b) {
        var a = this;
        return function(h, k) {
            if (null == h)
                return this;
            if (b || "string" != typeof h) {
                for (var e in h)
                    a.call(this, e, h[e]);
                if (c)
                    for (var d = c.length; d--; )
                        e = c[d], h.hasOwnProperty(e) && a.call(this, e, h[e])
            } else
                a.call(this, h, k);
            return this
        }
    };
    a.prototype.overloadGetter = function(b) {
        var a = this;
        return function(c) {
            var h, k;
            "string" != typeof c ? h = c : 1 < arguments.length ? h = arguments : b && (h = [c]);
            if (h) {
                k = {};
                for (var e = 0; e < h.length; e++)
                    k[h[e]] = a.call(this, h[e])
            } else
                k = a.call(this, c);
            return k
        }
    };
    a.prototype.extend = function(b, a) {
        this[b] = a
    }.overloadSetter();
    a.prototype.implement = function(b, a) {
        this.prototype[b] = a
    }.overloadSetter();
    var e = Array.prototype.slice;
    a.from = function(a) {
        return"function" == b(a) ? a : function() {
            return a
        }
    };
    Array.from = function(a) {
        return null == a ? [] : f.isEnumerable(a) && "string" != typeof a ? "array" == b(a) ? a : e.call(a) : [a]
    };
    Number.from = function(b) {
        b = parseFloat(b);
        return isFinite(b) ? b : null
    };
    String.from = function(b) {
        return b + ""
    };
    a.implement({hide: function() {
            this.$hidden = !0;
            return this
        }, protect: function() {
            this.$protected = !0;
            return this
        }});
    var f = this.Type = function(a, c) {
        if (a) {
            var h = a.toLowerCase();
            f["is" + a] = function(a) {
                return b(a) == h
            };
            null != c && (c.prototype.$family = function() {
                return h
            }.hide())
        }
        if (null == c)
            return null;
        c.extend(this);
        c.$constructor = f;
        return c.prototype.$constructor = c
    }, g = Object.prototype.toString;
    f.isEnumerable = function(b) {
        return null != b && "number" == typeof b.length && "[object Function]" != g.call(b)
    };
    var i = {}, j = function(a) {
        a = b(a.prototype);
        return i[a] || (i[a] = [])
    }, m = function(a, c) {
        if (!c || !c.$hidden) {
            for (var k = j(this), d = 0; d < k.length; d++) {
                var o = k[d];
                "type" == b(o) ? m.call(o, a, c) : o.call(this, a, c)
            }
            k = this.prototype[a];
            if (null == k || !k.$protected)
                this.prototype[a] = c;
            null == this[a] && "function" == b(c) && h.call(this, a, function(b) {
                return c.apply(b, e.call(arguments, 1))
            })
        }
    }, h = function(b, a) {
        if (!a || !a.$hidden) {
            var c = this[b];
            if (null == c || !c.$protected)
                this[b] = a
        }
    };
    f.implement({implement: m.overloadSetter(), extend: h.overloadSetter(), alias: function(b, a) {
            m.call(this, b, this.prototype[a])
        }.overloadSetter(), mirror: function(b) {
            j(this).push(b);
            return this
        }});
    new f("Type", f);
    var k = function(b, a, c) {
        var h = a != Object, e = a.prototype;
        h && (a = new f(b, a));
        for (var b = 0, d = c.length; b < d; b++) {
            var o = c[b], q = a[o], g = e[o];
            q && q.protect();
            h && g && a.implement(o, g.protect())
        }
        if (h) {
            var j = e.propertyIsEnumerable(c[0]);
            a.forEachMethod = function(b) {
                if (!j)
                    for (var a = 0, h = c.length; a < h; a++)
                        b.call(e, e[c[a]], c[a]);
                for (var k in e)
                    b.call(e, e[k], k)
            }
        }
        return k
    };
    k("String", String, "charAt,charCodeAt,concat,indexOf,lastIndexOf,match,quote,replace,search,slice,split,substr,substring,trim,toLowerCase,toUpperCase".split(","))("Array", Array, "pop,push,reverse,shift,sort,splice,unshift,concat,join,slice,indexOf,lastIndexOf,filter,forEach,every,map,some,reduce,reduceRight".split(","))("Number", Number, ["toExponential", "toFixed", "toLocaleString", "toPrecision"])("Function", a, ["apply", "call", "bind"])("RegExp", RegExp, ["exec", "test"])("Object", Object, "create,defineProperty,defineProperties,keys,getPrototypeOf,getOwnPropertyDescriptor,getOwnPropertyNames,preventExtensions,isExtensible,seal,isSealed,freeze,isFrozen".split(","))("Date", Date, ["now"]);
    Object.extend = h.overloadSetter();
    Date.extend("now", function() {
        return+new Date
    });
    new f("Boolean", Boolean);
    Number.prototype.$family = function() {
        return isFinite(this) ? "number" : "null"
    }.hide();
    Number.extend("random", function(b, a) {
        return Math.floor(Math.random() * (a - b + 1) + b)
    });
    var o = Object.prototype.hasOwnProperty;
    Object.extend("forEach", function(b, a, c) {
        for (var h in b)
            o.call(b, h) && a.call(c, b[h], h, b)
    });
    Object.each = Object.forEach;
    Array.implement({forEach: function(b, a) {
            for (var c = 0, h = this.length; c < h; c++)
                c in this && b.call(a, this[c], c, this)
        }, each: function(b, a) {
            Array.forEach(this, b, a);
            return this
        }});
    var q = function(a) {
        switch (b(a)) {
            case"array":
                return a.clone();
            case"object":
                return Object.clone(a);
            default:
                return a
            }
    };
    Array.implement("clone", function() {
        for (var b = this.length, a = Array(b); b--; )
            a[b] = q(this[b]);
        return a
    });
    var u = function(a, c, h) {
        switch (b(h)) {
            case"object":
                "object" == b(a[c]) ? Object.merge(a[c], h) : a[c] = Object.clone(h);
                break;
            case"array":
                a[c] = h.clone();
                break;
            default:
                a[c] = h
        }
        return a
    };
    Object.extend({merge: function(a, c, h) {
            if ("string" == b(c))
                return u(a, c, h);
            for (var k = 1, e = arguments.length; k < e; k++) {
                var d = arguments[k], o;
                for (o in d)
                    u(a, o, d[o])
            }
            return a
        }, clone: function(b) {
            var a = {}, c;
            for (c in b)
                a[c] = q(b[c]);
            return a
        }, append: function(b) {
            for (var a = 1, c = arguments.length; a < c; a++) {
                var h = arguments[a] || {}, k;
                for (k in h)
                    b[k] = h[k]
            }
            return b
        }});
    ["Object", "WhiteSpace", "TextNode", "Collection", "Arguments"].each(function(b) {
        new f(b)
    });
    var r = Date.now();
    String.extend("uniqueID", function() {
        return(r++).toString(36)
    })
})();
Array.implement({every: function(b, a) {
        for (var c = 0, d = this.length >>> 0; c < d; c++)
            if (c in this && !b.call(a, this[c], c, this))
                return!1;
        return!0
    }, filter: function(b, a) {
        for (var c = [], d, e = 0, f = this.length >>> 0; e < f; e++)
            e in this && (d = this[e], b.call(a, d, e, this) && c.push(d));
        return c
    }, indexOf: function(b, a) {
        for (var c = this.length >>> 0, d = 0 > a ? Math.max(0, c + a) : a || 0; d < c; d++)
            if (this[d] === b)
                return d;
        return-1
    }, map: function(b, a) {
        for (var c = this.length >>> 0, d = Array(c), e = 0; e < c; e++)
            e in this && (d[e] = b.call(a, this[e], e, this));
        return d
    }, some: function(b, a) {
        for (var c = 0, d = this.length >>> 0; c < d; c++)
            if (c in this && b.call(a, this[c], c, this))
                return!0;
        return!1
    }, clean: function() {
        return this.filter(function(b) {
            return null != b
        })
    }, invoke: function(b) {
        var a = Array.slice(arguments, 1);
        return this.map(function(c) {
            return c[b].apply(c, a)
        })
    }, associate: function(b) {
        for (var a = {}, c = Math.min(this.length, b.length), d = 0; d < c; d++)
            a[b[d]] = this[d];
        return a
    }, link: function(b) {
        for (var a = {}, c = 0, d = this.length; c < d; c++)
            for (var e in b)
                if (b[e](this[c])) {
                    a[e] = this[c];
                    delete b[e];
                    break
                }
        return a
    }, contains: function(b, a) {
        return-1 != this.indexOf(b, a)
    }, append: function(b) {
        this.push.apply(this, b);
        return this
    }, getLast: function() {
        return this.length ? this[this.length - 1] : null
    }, getRandom: function() {
        return this.length ? this[Number.random(0, this.length - 1)] : null
    }, include: function(b) {
        this.contains(b) || this.push(b);
        return this
    }, combine: function(b) {
        for (var a = 0, c = b.length; a < c; a++)
            this.include(b[a]);
        return this
    }, erase: function(b) {
        for (var a = this.length; a--; )
            this[a] === b && this.splice(a, 1);
        return this
    }, empty: function() {
        this.length = 0;
        return this
    }, flatten: function() {
        for (var b = [], a = 0, c = this.length; a < c; a++) {
            var d = typeOf(this[a]);
            "null" != d && (b = b.concat("array" == d || "collection" == d || "arguments" == d || instanceOf(this[a], Array) ? Array.flatten(this[a]) : this[a]))
        }
        return b
    }, pick: function() {
        for (var b = 0, a = this.length; b < a; b++)
            if (null != this[b])
                return this[b];
        return null
    }, hexToRgb: function(b) {
        if (3 != this.length)
            return null;
        var a = this.map(function(b) {
            1 == b.length && (b += b);
            return b.toInt(16)
        });
        return b ? a : "rgb(" + a + ")"
    }, rgbToHex: function(b) {
        if (3 > this.length)
            return null;
        if (4 == this.length && 0 == this[3] && !b)
            return"transparent";
        for (var a = [], c = 0; 3 > c; c++) {
            var d = (this[c] - 0).toString(16);
            a.push(1 == d.length ? "0" + d : d)
        }
        return b ? a : "#" + a.join("")
    }});
String.implement({test: function(b, a) {
        return("regexp" == typeOf(b) ? b : RegExp("" + b, a)).test(this)
    }, contains: function(b, a) {
        return a ? -1 < (a + this + a).indexOf(a + b + a) : -1 < ("" + this).indexOf(b)
    }, trim: function() {
        return("" + this).replace(/^\s+|\s+$/g, "")
    }, clean: function() {
        return("" + this).replace(/\s+/g, " ").trim()
    }, camelCase: function() {
        return("" + this).replace(/-\D/g, function(b) {
            return b.charAt(1).toUpperCase()
        })
    }, hyphenate: function() {
        return("" + this).replace(/[A-Z]/g, function(b) {
            return"-" + b.charAt(0).toLowerCase()
        })
    }, capitalize: function() {
        return("" + this).replace(/\b[a-z]/g, function(b) {
            return b.toUpperCase()
        })
    }, escapeRegExp: function() {
        return("" + this).replace(/([-.*+?^${}()|[\]\/\\])/g, "\\$1")
    }, toInt: function(b) {
        return parseInt(this, b || 10)
    }, toFloat: function() {
        return parseFloat(this)
    }, hexToRgb: function(b) {
        var a = ("" + this).match(/^#?(\w{1,2})(\w{1,2})(\w{1,2})$/);
        return a ? a.slice(1).hexToRgb(b) : null
    }, rgbToHex: function(b) {
        var a = ("" + this).match(/\d{1,3}/g);
        return a ? a.rgbToHex(b) : null
    }, substitute: function(b, a) {
        return("" +
                this).replace(a || /\\?\{([^{}]+)\}/g, function(a, d) {
            return"\\" == a.charAt(0) ? a.slice(1) : null != b[d] ? b[d] : ""
        })
    }});
Number.implement({limit: function(b, a) {
        return Math.min(a, Math.max(b, this))
    }, round: function(b) {
        b = Math.pow(10, b || 0).toFixed(0 > b ? -b : 0);
        return Math.round(this * b) / b
    }, times: function(b, a) {
        for (var c = 0; c < this; c++)
            b.call(a, c, this)
    }, toFloat: function() {
        return parseFloat(this)
    }, toInt: function(b) {
        return parseInt(this, b || 10)
    }});
Number.alias("each", "times");
(function(b) {
    var a = {};
    b.each(function(b) {
        Number[b] || (a[b] = function() {
            return Math[b].apply(null, [this].concat(Array.from(arguments)))
        })
    });
    Number.implement(a)
})("abs,acos,asin,atan,atan2,ceil,cos,exp,floor,log,max,min,pow,sin,sqrt,tan".split(","));
Function.extend({attempt: function() {
        for (var b = 0, a = arguments.length; b < a; b++)
            try {
                return arguments[b]()
            } catch (c) {
            }
        return null
    }});
Function.implement({attempt: function(b, a) {
        try {
            return this.apply(a, Array.from(b))
        } catch (c) {
        }
        return null
    }, bind: function(b) {
        var a = this, c = 1 < arguments.length ? Array.slice(arguments, 1) : null, d = function() {
        }, e = function() {
            var f = b, g = arguments.length;
            this instanceof e && (d.prototype = a.prototype, f = new d);
            g = !c && !g ? a.call(f) : a.apply(f, c && g ? c.concat(Array.slice(arguments)) : c || arguments);
            return f == b ? g : f
        };
        return e
    }, pass: function(b, a) {
        var c = this;
        null != b && (b = Array.from(b));
        return function() {
            return c.apply(a, b || arguments)
        }
    }, delay: function(b, a, c) {
        return setTimeout(this.pass(null == c ? [] : c, a), b)
    }, periodical: function(b, a, c) {
        return setInterval(this.pass(null == c ? [] : c, a), b)
    }});
(function() {
    var b = Object.prototype.hasOwnProperty;
    Object.extend({subset: function(b, c) {
            for (var d = {}, e = 0, f = c.length; e < f; e++) {
                var g = c[e];
                g in b && (d[g] = b[g])
            }
            return d
        }, map: function(a, c, d) {
            var e = {}, f;
            for (f in a)
                b.call(a, f) && (e[f] = c.call(d, a[f], f, a));
            return e
        }, filter: function(a, c, d) {
            var e = {}, f;
            for (f in a) {
                var g = a[f];
                b.call(a, f) && c.call(d, g, f, a) && (e[f] = g)
            }
            return e
        }, every: function(a, c, d) {
            for (var e in a)
                if (b.call(a, e) && !c.call(d, a[e], e))
                    return!1;
            return!0
        }, some: function(a, c, d) {
            for (var e in a)
                if (b.call(a, e) && c.call(d, a[e], e))
                    return!0;
            return!1
        }, keys: function(a) {
            var c = [], d;
            for (d in a)
                b.call(a, d) && c.push(d);
            return c
        }, values: function(a) {
            var c = [], d;
            for (d in a)
                b.call(a, d) && c.push(a[d]);
            return c
        }, getLength: function(b) {
            return Object.keys(b).length
        }, keyOf: function(a, c) {
            for (var d in a)
                if (b.call(a, d) && a[d] === c)
                    return d;
            return null
        }, contains: function(b, c) {
            return null != Object.keyOf(b, c)
        }, toQueryString: function(b, c) {
            var d = [];
            Object.each(b, function(b, a) {
                c && (a = c + "[" + a + "]");
                var g;
                switch (typeOf(b)) {
                    case"object":
                        g = Object.toQueryString(b, a);
                        break;
                    case"array":
                        var i = {};
                        b.each(function(b, a) {
                            i[a] = b
                        });
                        g = Object.toQueryString(i, a);
                        break;
                    default:
                        g = a + "=" + encodeURIComponent(b)
                }
                null != b && d.push(g)
            });
            return d.join("&")
        }})
})();
(function() {
    var b = this.document, a = b.window = this, c = navigator.userAgent.toLowerCase(), d = navigator.platform.toLowerCase(), e = c.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/) || [null, "unknown", 0], f = this.Browser = {extend: Function.prototype.extend, name: "version" == e[1] ? e[3] : e[1], version: "ie" == e[1] && b.documentMode || parseFloat("opera" == e[1] && e[4] ? e[4] : e[2]), Platform: {name: c.match(/ip(?:ad|od|hone)/) ? "ios" : (c.match(/(?:webos|android)/) || d.match(/mac|win|linux/) || ["other"])[0]}, Features: {xpath: !!b.evaluate, air: !!a.runtime, query: !!b.querySelector, json: !!a.JSON}, Plugins: {}};
    f[f.name] = !0;
    f[f.name + parseInt(f.version, 10)] = !0;
    f.Platform[f.Platform.name] = !0;
    f.Request = function() {
        var b = function() {
            return new XMLHttpRequest
        }, a = function() {
            return new ActiveXObject("MSXML2.XMLHTTP")
        }, c = function() {
            return new ActiveXObject("Microsoft.XMLHTTP")
        };
        return Function.attempt(function() {
            b();
            return b
        }, function() {
            a();
            return a
        }, function() {
            c();
            return c
        })
    }();
    f.Features.xhr = !!f.Request;
    c = (Function.attempt(function() {
        return navigator.plugins["Shockwave Flash"].description
    }, function() {
        return(new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version")
    }) || "0 r0").match(/\d+/g);
    f.Plugins.Flash = {version: Number(c[0] || "0." + c[1]) || 0, build: Number(c[2]) || 0};
    f.exec = function(c) {
        if (!c)
            return c;
        if (a.execScript)
            a.execScript(c);
        else {
            var h = b.createElement("script");
            h.setAttribute("type", "text/javascript");
            h.text = c;
            b.head.appendChild(h);
            b.head.removeChild(h)
        }
        return c
    };
    String.implement("stripScripts", function(b) {
        var a = "", c = this.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, function(b, c) {
            a += c + "\n";
            return""
        });
        !0 === b ? f.exec(a) : "function" == typeOf(b) && b(a, c);
        return c
    });
    f.extend({Document: this.Document, Window: this.Window, Element: this.Element, Event: this.Event});
    this.Window = this.$constructor = new Type("Window", function() {
    });
    this.$family = Function.from("window").hide();
    Window.mirror(function(b, c) {
        a[b] = c
    });
    this.Document = b.$constructor = new Type("Document", function() {
    });
    b.$family = Function.from("document").hide();
    Document.mirror(function(a, c) {
        b[a] = c
    });
    b.html = b.documentElement;
    b.head || (b.head = b.getElementsByTagName("head")[0]);
    if (b.execCommand)
        try {
            b.execCommand("BackgroundImageCache", !1, !0)
        } catch (g) {
        }
    if (this.attachEvent && !this.addEventListener) {
        var i = function() {
            this.detachEvent("onunload", i);
            b.head = b.html = b.window = null
        };
        this.attachEvent("onunload", i)
    }
    var j = Array.from;
    try {
        j(b.html.childNodes)
    } catch (m) {
        Array.from = function(b) {
            if (typeof b != "string" && Type.isEnumerable(b) && typeOf(b) != "array") {
                for (var a = b.length, c = Array(a); a--; )
                    c[a] = b[a];
                return c
            }
            return j(b)
        };
        var h = Array.prototype, k = h.slice;
        "pop,push,reverse,shift,sort,splice,unshift,concat,join,slice".split(",").each(function(b) {
            var a = h[b];
            Array[b] = function(b) {
                return a.apply(Array.from(b), k.call(arguments, 1))
            }
        })
    }
})();
(function() {
    var b = {}, a = this.DOMEvent = new Type("DOMEvent", function(a, d) {
        d || (d = window);
        a = a || d.event;
        if (a.$extended)
            return a;
        this.event = a;
        this.$extended = !0;
        this.shift = a.shiftKey;
        this.control = a.ctrlKey;
        this.alt = a.altKey;
        this.meta = a.metaKey;
        for (var e = this.type = a.type, f = a.target || a.srcElement; f && 3 == f.nodeType; )
            f = f.parentNode;
        this.target = document.id(f);
        if (0 == e.indexOf("key")) {
            if (f = this.code = a.which || a.keyCode, this.key = b[f], "keydown" == e && (111 < f && 124 > f ? this.key = "f" + (f - 111) : 95 < f && 106 > f && (this.key = f - 96)), null == this.key)
                this.key = String.fromCharCode(f).toLowerCase()
        } else if ("click" == e || "dblclick" == e || "contextmenu" == e || "DOMMouseScroll" == e || 0 == e.indexOf("mouse")) {
            f = d.document;
            f = !f.compatMode || "CSS1Compat" == f.compatMode ? f.html : f.body;
            this.page = {x: null != a.pageX ? a.pageX : a.clientX + f.scrollLeft, y: null != a.pageY ? a.pageY : a.clientY + f.scrollTop};
            this.client = {x: null != a.pageX ? a.pageX - d.pageXOffset : a.clientX, y: null != a.pageY ? a.pageY - d.pageYOffset : a.clientY};
            if ("DOMMouseScroll" == e || "mousewheel" == e)
                this.wheel = a.wheelDelta ? a.wheelDelta / 120 : -(a.detail || 0) / 3;
            this.rightClick = 3 == a.which || 2 == a.button;
            if ("mouseover" == e || "mouseout" == e) {
                for (e = a.relatedTarget || a[("mouseover" == e?"from":"to") + "Element"]; e && 3 == e.nodeType; )
                    e = e.parentNode;
                this.relatedTarget = document.id(e)
            }
        } else if (0 == e.indexOf("touch") || 0 == e.indexOf("gesture"))
            if (this.rotation = a.rotation, this.scale = a.scale, this.targetTouches = a.targetTouches, this.changedTouches = a.changedTouches, (e = this.touches = a.touches) && e[0])
                e = e[0], this.page = {x: e.pageX, y: e.pageY}, this.client = {x: e.clientX, y: e.clientY};
        this.client || (this.client = {});
        this.page || (this.page = {})
    });
    a.implement({stop: function() {
            return this.preventDefault().stopPropagation()
        }, stopPropagation: function() {
            this.event.stopPropagation ? this.event.stopPropagation() : this.event.cancelBubble = !0;
            return this
        }, preventDefault: function() {
            this.event.preventDefault ? this.event.preventDefault() : this.event.returnValue = !1;
            return this
        }});
    a.defineKey = function(a, d) {
        b[a] = d;
        return this
    };
    a.defineKeys = a.defineKey.overloadSetter(!0);
    a.defineKeys({38: "up", 40: "down", 37: "left", 39: "right", 27: "esc", 32: "space", 8: "backspace", 9: "tab", 46: "delete", 13: "enter"})
})();
(function() {
    var b = this.Class = new Type("Class", function(e) {
        instanceOf(e, Function) && (e = {initialize: e});
        var d = function() {
            c(this);
            if (d.$prototyping)
                return this;
            this.$caller = null;
            var a = this.initialize ? this.initialize.apply(this, arguments) : this;
            this.$caller = this.caller = null;
            return a
        }.extend(this).implement(e);
        d.$constructor = b;
        d.prototype.$constructor = d;
        d.prototype.parent = a;
        return d
    }), a = function() {
        if (!this.$caller)
            throw Error('The method "parent" cannot be called.');
        var a = this.$caller.$name, b = this.$caller.$owner.parent, b = b ? b.prototype[a] : null;
        if (!b)
            throw Error('The method "' + a + '" has no parent.');
        return b.apply(this, arguments)
    }, c = function(a) {
        for (var b in a) {
            var e = a[b];
            switch (typeOf(e)) {
                case"object":
                    var d = function() {
                    };
                    d.prototype = e;
                    a[b] = c(new d);
                    break;
                case"array":
                    a[b] = e.clone()
                }
        }
        return a
    }, d = function(a, b, c) {
        c.$origin && (c = c.$origin);
        var e = function() {
            if (c.$protected && this.$caller == null)
                throw Error('The method "' + b + '" cannot be called.');
            var a = this.caller, h = this.$caller;
            this.caller = h;
            this.$caller = e;
            var k = c.apply(this, arguments);
            this.$caller = h;
            this.caller = a;
            return k
        }.extend({$owner: a, $origin: c, $name: b});
        return e
    }, e = function(a, c, e) {
        if (b.Mutators.hasOwnProperty(a) && (c = b.Mutators[a].call(this, c), null == c))
            return this;
        if ("function" == typeOf(c)) {
            if (c.$hidden)
                return this;
            this.prototype[a] = e ? c : d(this, a, c)
        } else
            Object.merge(this.prototype, a, c);
        return this
    };
    b.implement("implement", e.overloadSetter());
    b.Mutators = {Extends: function(a) {
            this.parent = a;
            a.$prototyping = !0;
            var b = new a;
            delete a.$prototyping;
            this.prototype = b
        }, Implements: function(a) {
            Array.from(a).each(function(a) {
                var a = new a, b;
                for (b in a)
                    e.call(this, b, a[b], !0)
            }, this)
        }}
})();
(function() {
    this.Chain = new Class({$chain: [], chain: function() {
            this.$chain.append(Array.flatten(arguments));
            return this
        }, callChain: function() {
            return this.$chain.length ? this.$chain.shift().apply(this, arguments) : !1
        }, clearChain: function() {
            this.$chain.empty();
            return this
        }});
    var b = function(a) {
        return a.replace(/^on([A-Z])/, function(a, b) {
            return b.toLowerCase()
        })
    };
    this.Events = new Class({$events: {}, addEvent: function(a, c, d) {
            a = b(a);
            this.$events[a] = (this.$events[a] || []).include(c);
            d && (c.internal = !0);
            return this
        }, addEvents: function(a) {
            for (var b in a)
                this.addEvent(b, a[b]);
            return this
        }, fireEvent: function(a, c, d) {
            a = b(a);
            a = this.$events[a];
            if (!a)
                return this;
            c = Array.from(c);
            a.each(function(a) {
                d ? a.delay(d, this, c) : a.apply(this, c)
            }, this);
            return this
        }, removeEvent: function(a, c) {
            var a = b(a), d = this.$events[a];
            if (d && !c.internal) {
                var e = d.indexOf(c);
                -1 != e && delete d[e]
            }
            return this
        }, removeEvents: function(a) {
            var c;
            if ("object" == typeOf(a)) {
                for (c in a)
                    this.removeEvent(c, a[c]);
                return this
            }
            a && (a = b(a));
            for (c in this.$events)
                if (!(a && a != c))
                    for (var d = this.$events[c], e = d.length; e--; )
                        e in d && this.removeEvent(c, d[e]);
            return this
        }});
    this.Options = new Class({setOptions: function() {
            var a = this.options = Object.merge.apply(null, [{}, this.options].append(arguments));
            if (this.addEvent)
                for (var b in a)
                    "function" == typeOf(a[b]) && /^on[A-Z]/.test(b) && (this.addEvent(b, a[b]), delete a[b]);
            return this
        }})
})();
(function() {
    function b(b, h, o, l, f, q, j, g, x, F, t, B, A, D, v, z) {
        if (h || -1 === c)
            if (a.expressions[++c] = [], d = -1, h)
                return"";
        if (o || l || -1 === d)
            o = o || " ", b = a.expressions[c], e && b[d] && (b[d].reverseCombinator = m(o)), b[++d] = {combinator: o, tag: "*"};
        o = a.expressions[c][d];
        if (f)
            o.tag = f.replace(i, "");
        else if (q)
            o.id = q.replace(i, "");
        else if (j)
            j = j.replace(i, ""), o.classList || (o.classList = []), o.classes || (o.classes = []), o.classList.push(j), o.classes.push({value: j, regexp: RegExp("(^|\\s)" + k(j) + "(\\s|$)")});
        else if (A)
            z = (z = z || v) ? z.replace(i, "") : null, o.pseudos || (o.pseudos = []), o.pseudos.push({key: A.replace(i, ""), value: z, type: 1 == B.length ? "class" : "element"});
        else if (g) {
            var g = g.replace(i, ""), t = (t || "").replace(i, ""), y, E;
            switch (x) {
                case"^=":
                    E = RegExp("^" + k(t));
                    break;
                case"$=":
                    E = RegExp(k(t) + "$");
                    break;
                case"~=":
                    E = RegExp("(^|\\s)" + k(t) + "(\\s|$)");
                    break;
                case"|=":
                    E = RegExp("^" + k(t) + "(-|$)");
                    break;
                case"=":
                    y = function(a) {
                        return t == a
                    };
                    break;
                case"*=":
                    y = function(a) {
                        return a && -1 < a.indexOf(t)
                    };
                    break;
                case"!=":
                    y = function(a) {
                        return t != a
                    };
                    break;
                default:
                    y = function(a) {
                        return!!a
                    }
            }
            "" == t && /^[*$^]=$/.test(x) && (y = function() {
                return!1
            });
            y || (y = function(a) {
                return a && E.test(a)
            });
            o.attributes || (o.attributes = []);
            o.attributes.push({key: g, operator: x, value: t, test: y})
        }
        return""
    }
    var a, c, d, e, f = {}, g = {}, i = /\\/g, j = function(k, d) {
        if (null == k)
            return null;
        if (!0 === k.Slick)
            return k;
        var k = ("" + k).replace(/^\s+|\s+$/g, ""), q = (e = !!d) ? g : f;
        if (q[k])
            return q[k];
        a = {Slick: !0, expressions: [], raw: k, reverse: function() {
                return j(this.raw, !0)
            }};
        for (c = - 1; k != (k = k.replace(o, b)); )
            ;
        a.length = a.expressions.length;
        return q[a.raw] = e ? h(a) : a
    }, m = function(a) {
        return"!" === a ? " " : " " === a ? "!" : /^!/.test(a) ? a.replace(/^!/, "") : "!" + a
    }, h = function(a) {
        for (var b = a.expressions, c = 0; c < b.length; c++) {
            for (var h = b[c], k = {parts: [], tag: "*", combinator: m(h[0].combinator)}, e = 0; e < h.length; e++) {
                var d = h[e];
                d.reverseCombinator || (d.reverseCombinator = " ");
                d.combinator = d.reverseCombinator;
                delete d.reverseCombinator
            }
            h.reverse().push(k)
        }
        return a
    }, k = function(a) {
        return a.replace(/[-[\]{}()*+?.\\^$|,#\s]/g, function(a) {
            return"\\" + a
        })
    }, o = RegExp("^(?:\\s*(,)\\s*|\\s*(<combinator>+)\\s*|(\\s+)|(<unicode>+|\\*)|\\#(<unicode>+)|\\.(<unicode>+)|\\[\\s*(<unicode1>+)(?:\\s*([*^$!~|]?=)(?:\\s*(?:([\"']?)(.*?)\\9)))?\\s*\\](?!\\])|(:+)(<unicode>+)(?:\\((?:(?:([\"'])([^\\13]*)\\13)|((?:\\([^)]+\\)|[^()]*)+))\\))?)".replace(/<combinator>/, "[" + k(">+~`!@$%^&={}\\;</") + "]").replace(/<unicode>/g, "(?:[\\w\\u00a1-\\uFFFF-]|\\\\[^\\s0-9a-f])").replace(/<unicode1>/g, "(?:[:\\w\\u00a1-\\uFFFF-]|\\\\[^\\s0-9a-f])")), q = this.Slick || {};
    q.parse = function(a) {
        return j(a)
    };
    q.escapeRegExp = k;
    this.Slick || (this.Slick = q)
}).apply("undefined" != typeof exports ? exports : this);
(function() {
    var b = {}, a = {}, c = Object.prototype.toString;
    b.isNativeCode = function(a) {
        return/\{\s*\[native code\]\s*\}/.test("" + a)
    };
    b.isXML = function(a) {
        return!!a.xmlVersion || !!a.xml || "[object XMLDocument]" == c.call(a) || 9 == a.nodeType && "HTML" != a.documentElement.nodeName
    };
    b.setDocument = function(b) {
        var c = b.nodeType;
        if (9 != c)
            if (c)
                b = b.ownerDocument;
            else if (b.navigator)
                b = b.document;
            else
                return;
        if (this.document !== b) {
            this.document = b;
            var c = b.documentElement, e = this.getUIDXML(c), d = a[e], f;
            if (!d) {
                d = a[e] = {};
                d.root = c;
                d.isXMLDocument = this.isXML(b);
                d.brokenStarGEBTN = d.starSelectsClosedQSA = d.idGetsName = d.brokenMixedCaseQSA = d.brokenGEBCN = d.brokenCheckedQSA = d.brokenEmptyAttributeQSA = d.isHTMLDocument = d.nativeMatchesSelector = !1;
                var j, m, l, s, g, n = b.createElement("div"), i = b.body || b.getElementsByTagName("body")[0] || c;
                i.appendChild(n);
                try {
                    n.innerHTML = '<a id="slick_uniqueid"></a>', d.isHTMLDocument = !!b.getElementById("slick_uniqueid")
                } catch (x) {
                }
                if (d.isHTMLDocument) {
                    n.style.display = "none";
                    n.appendChild(b.createComment(""));
                    e = 1 < n.getElementsByTagName("*").length;
                    try {
                        n.innerHTML = "foo</foo>", j = (g = n.getElementsByTagName("*")) && !!g.length && "/" == g[0].nodeName.charAt(0)
                    } catch (F) {
                    }
                    d.brokenStarGEBTN = e || j;
                    try {
                        n.innerHTML = '<a name="slick_uniqueid"></a><b id="slick_uniqueid"></b>', d.idGetsName = b.getElementById("slick_uniqueid") === n.firstChild
                    } catch (t) {
                    }
                    if (n.getElementsByClassName) {
                        try {
                            n.innerHTML = '<a class="f"></a><a class="b"></a>', n.getElementsByClassName("b").length, n.firstChild.className = "b", l = 2 != n.getElementsByClassName("b").length
                        } catch (B) {
                        }
                        try {
                            n.innerHTML = '<a class="a"></a><a class="f b a"></a>', m = 2 != n.getElementsByClassName("a").length
                        } catch (A) {
                        }
                        d.brokenGEBCN = l || m
                    }
                    if (n.querySelectorAll) {
                        try {
                            n.innerHTML = "foo</foo>", g = n.querySelectorAll("*"), d.starSelectsClosedQSA = g && !!g.length && "/" == g[0].nodeName.charAt(0)
                        } catch (D) {
                        }
                        try {
                            n.innerHTML = '<a class="MiX"></a>', d.brokenMixedCaseQSA = !n.querySelectorAll(".MiX").length
                        } catch (v) {
                        }
                        try {
                            n.innerHTML = '<select><option selected="selected">a</option></select>', d.brokenCheckedQSA = 0 == n.querySelectorAll(":checked").length
                        } catch (z) {
                        }
                        try {
                            n.innerHTML = '<a class=""></a>', d.brokenEmptyAttributeQSA = 0 != n.querySelectorAll('[class*=""]').length
                        } catch (y) {
                        }
                    }
                    try {
                        n.innerHTML = '<form action="s"><input id="action"/></form>', s = "s" != n.firstChild.getAttribute("action")
                    } catch (E) {
                    }
                    d.nativeMatchesSelector = c.matchesSelector || c.mozMatchesSelector || c.webkitMatchesSelector;
                    if (d.nativeMatchesSelector)
                        try {
                            d.nativeMatchesSelector.call(c, ":slick"), d.nativeMatchesSelector = null
                        } catch (G) {
                        }
                }
                try {
                    c.slick_expando = 1, delete c.slick_expando, d.getUID = this.getUIDHTML
                } catch (H) {
                    d.getUID = this.getUIDXML
                }
                i.removeChild(n);
                n = g = i = null;
                d.getAttribute = d.isHTMLDocument && s ? function(a, b) {
                    var c = this.attributeGetters[b];
                    return c ? c.call(a) : (c = a.getAttributeNode(b)) ? c.nodeValue : null
                } : function(a, b) {
                    var c = this.attributeGetters[b];
                    return c ? c.call(a) : a.getAttribute(b)
                };
                d.hasAttribute = c && this.isNativeCode(c.hasAttribute) ? function(a, b) {
                    return a.hasAttribute(b)
                } : function(a, b) {
                    a = a.getAttributeNode(b);
                    return!(!a || !a.specified && !a.nodeValue)
                };
                j = c && this.isNativeCode(c.contains);
                m = b && this.isNativeCode(b.contains);
                d.contains = j && m ? function(a, b) {
                    return a.contains(b)
                } : j && !m ? function(a, c) {
                    return a === c || (a === b ? b.documentElement : a).contains(c)
                } : c && c.compareDocumentPosition ? function(a, b) {
                    return a === b || !!(a.compareDocumentPosition(b) & 16)
                } : function(a, b) {
                    if (b) {
                        do
                            if (b === a)
                                return!0;
                        while (b = b.parentNode)
                    }
                    return!1
                };
                d.documentSorter = c.compareDocumentPosition ? function(a, b) {
                    return!a.compareDocumentPosition || !b.compareDocumentPosition ? 0 : a.compareDocumentPosition(b) & 4 ? -1 : a === b ? 0 : 1
                } : "sourceIndex"in c ? function(a, b) {
                    return!a.sourceIndex || !b.sourceIndex ? 0 : a.sourceIndex - b.sourceIndex
                } : b.createRange ? function(a, b) {
                    if (!a.ownerDocument || !b.ownerDocument)
                        return 0;
                    var c = a.ownerDocument.createRange(), h = b.ownerDocument.createRange();
                    c.setStart(a, 0);
                    c.setEnd(a, 0);
                    h.setStart(b, 0);
                    h.setEnd(b, 0);
                    return c.compareBoundaryPoints(Range.START_TO_END, h)
                } : null;
                c = null
            }
            for (f in d)
                this[f] = d[f]
        }
    };
    var d = /^([#.]?)((?:[\w-]+|\*))$/, e = /\[.+[*$^]=(?:""|'')?\]/, f = {};
    b.search = function(a, b, c, j) {
        var g = this.found = j ? null : c || [];
        if (a)
            if (a.navigator)
                a = a.document;
            else {
                if (!a.nodeType)
                    return g
            }
        else
            return g;
        var r, i, l = this.uniques = {}, c = !(!c || !c.length), s = 9 == a.nodeType;
        this.document !== (s ? a : a.ownerDocument) && this.setDocument(a);
        if (c)
            for (i = g.length; i--; )
                l[this.getUID(g[i])] = !0;
        if ("string" == typeof b) {
            var p = b.match(d);
            a:if (p) {
                i = p[1];
                var n = p[2];
                if (i)
                    if ("#" == i) {
                        if (!this.isHTMLDocument || !s)
                            break a;
                        p = a.getElementById(n);
                        if (!p)
                            return g;
                        if (this.idGetsName && p.getAttributeNode("id").nodeValue != n)
                            break a;
                        if (j)
                            return p || null;
                        (!c || !l[this.getUID(p)]) && g.push(p)
                    } else {
                        if ("." == i) {
                            if (!this.isHTMLDocument || (!a.getElementsByClassName || this.brokenGEBCN) && a.querySelectorAll)
                                break a;
                            if (a.getElementsByClassName && !this.brokenGEBCN) {
                                r = a.getElementsByClassName(n);
                                if (j)
                                    return r[0] || null;
                                for (i = 0; p = r[i++]; )
                                    (!c || !l[this.getUID(p)]) && g.push(p)
                            } else {
                                var C = RegExp("(^|\\s)" + m.escapeRegExp(n) + "(\\s|$)");
                                r = a.getElementsByTagName("*");
                                for (i = 0; p = r[i++]; )
                                    if ((className = p.className) && C.test(className)) {
                                        if (j)
                                            return p;
                                        (!c || !l[this.getUID(p)]) && g.push(p)
                                    }
                            }
                        }
                    }
                else {
                    if ("*" == n && this.brokenStarGEBTN)
                        break a;
                    r = a.getElementsByTagName(n);
                    if (j)
                        return r[0] || null;
                    for (i = 0; p = r[i++]; )
                        (!c || !l[this.getUID(p)]) && g.push(p)
                }
                c && this.sort(g);
                return j ? null : g
            }
            a:if (a.querySelectorAll && this.isHTMLDocument && !f[b] && !this.brokenMixedCaseQSA && !(this.brokenCheckedQSA && -1 < b.indexOf(":checked") || this.brokenEmptyAttributeQSA && e.test(b) || !s && -1 < b.indexOf(",") || m.disableQSA)) {
                i = b;
                p = a;
                if (!s) {
                    var x = p.getAttribute("id");
                    p.setAttribute("id", "slickid__");
                    i = "#slickid__ " + i;
                    a = p.parentNode
                }
                try {
                    if (j)
                        return a.querySelector(i) || null;
                    r = a.querySelectorAll(i)
                } catch (F) {
                    f[b] = 1;
                    break a
                } finally {
                    s || (x ? p.setAttribute("id", x) : p.removeAttribute("id"), a = p)
                }
                if (this.starSelectsClosedQSA)
                    for (i = 0; p = r[i++]; )
                        "@" < p.nodeName && (!c || !l[this.getUID(p)]) && g.push(p);
                else
                    for (i = 0; p = r[i++]; )
                        (!c || !l[this.getUID(p)]) && g.push(p);
                c && this.sort(g);
                return g
            }
            r = this.Slick.parse(b);
            if (!r.length)
                return g
        } else {
            if (null == b)
                return g;
            if (b.Slick)
                r = b;
            else {
                if (this.contains(a.documentElement || a, b))
                    g ? g.push(b) : g = b;
                return g
            }
        }
        this.posNTH = {};
        this.posNTHLast = {};
        this.posNTHType = {};
        this.posNTHTypeLast = {};
        this.push = !c && (j || 1 == r.length && 1 == r.expressions[0].length) ? this.pushArray : this.pushUID;
        null == g && (g = []);
        var t, B, A, D, v, z, y = r.expressions;
        i = 0;
        a:for (; z = y[i]; i++)
            for (b = 0; v = z[b]; b++) {
                x = "combinator:" + v.combinator;
                if (!this[x])
                    continue a;
                s = this.isXMLDocument ? v.tag : v.tag.toUpperCase();
                p = v.id;
                n = v.classList;
                A = v.classes;
                D = v.attributes;
                v = v.pseudos;
                t = b === z.length - 1;
                this.bitUniques = {};
                t ? (this.uniques = l, this.found = g) : (this.uniques = {}, this.found = []);
                if (0 === b) {
                    if (this[x](a, s, p, A, D, v, n), j && t && g.length)
                        break a
                } else if (j && t) {
                    t = 0;
                    for (B = C.length; t < B; t++)
                        if (this[x](C[t], s, p, A, D, v, n), g.length)
                            break a
                } else {
                    t = 0;
                    for (B = C.length; t < B; t++)
                        this[x](C[t], s, p, A, D, v, n)
                }
                C = this.found
            }
        (c || 1 < r.expressions.length) && this.sort(g);
        return j ? g[0] || null : g
    };
    b.uidx = 1;
    b.uidk = "slick-uniqueid";
    b.getUIDXML = function(a) {
        var b = a.getAttribute(this.uidk);
        b || (b = this.uidx++, a.setAttribute(this.uidk, b));
        return b
    };
    b.getUIDHTML = function(a) {
        return a.uniqueNumber || (a.uniqueNumber = this.uidx++)
    };
    b.sort = function(a) {
        if (!this.documentSorter)
            return a;
        a.sort(this.documentSorter);
        return a
    };
    b.cacheNTH = {};
    b.matchNTH = /^([+-]?\d*)?([a-z]+)?([+-]\d+)?$/;
    b.parseNTHArgument = function(a) {
        var b = a.match(this.matchNTH);
        if (!b)
            return!1;
        var c = b[2] || !1, d = b[1] || 1;
        "-" == d && (d = -1);
        b = +b[3] || 0;
        b = "n" == c ? {a: d, b: b} : "odd" == c ? {a: 2, b: 1} : "even" == c ? {a: 2, b: 0} : {a: 0, b: d};
        return this.cacheNTH[a] = b
    };
    b.createNTHPseudo = function(a, b, c, d) {
        return function(e, f) {
            var g = this.getUID(e);
            if (!this[c][g]) {
                var l = e.parentNode;
                if (!l)
                    return!1;
                var l = l[a], s = 1;
                if (d) {
                    var j = e.nodeName;
                    do
                        l.nodeName == j && (this[c][this.getUID(l)] = s++);
                    while (l = l[b])
                } else {
                    do
                        1 == l.nodeType && (this[c][this.getUID(l)] = s++);
                    while (l = l[b])
                }
            }
            f = f || "n";
            s = this.cacheNTH[f] || this.parseNTHArgument(f);
            if (!s)
                return!1;
            l = s.a;
            s = s.b;
            g = this[c][g];
            if (0 == l)
                return s == g;
            if (0 < l) {
                if (g < s)
                    return!1
            } else if (s < g)
                return!1;
            return 0 == (g - s) % l
        }
    };
    b.pushArray = function(a, b, c, d, e, f) {
        this.matchSelector(a, b, c, d, e, f) && this.found.push(a)
    };
    b.pushUID = function(a, b, c, d, e, f) {
        var g = this.getUID(a);
        !this.uniques[g] && this.matchSelector(a, b, c, d, e, f) && (this.uniques[g] = !0, this.found.push(a))
    };
    b.matchNode = function(a, b) {
        if (this.isHTMLDocument && this.nativeMatchesSelector)
            try {
                return this.nativeMatchesSelector.call(a, b.replace(/\[([^=]+)=\s*([^'"\]]+?)\s*\]/g, '[$1="$2"]'))
            } catch (c) {
            }
        var d = this.Slick.parse(b);
        if (!d)
            return!0;
        var e = d.expressions, f = 0, g;
        for (g = 0; currentExpression = e[g]; g++)
            if (1 == currentExpression.length) {
                var l = currentExpression[0];
                if (this.matchSelector(a, this.isXMLDocument ? l.tag : l.tag.toUpperCase(), l.id, l.classes, l.attributes, l.pseudos))
                    return!0;
                f++
            }
        if (f == d.length)
            return!1;
        d = this.search(this.document, d);
        for (g = 0; e = d[g++]; )
            if (e === a)
                return!0;
        return!1
    };
    b.matchPseudo = function(a, b, c) {
        var d = "pseudo:" + b;
        if (this[d])
            return this[d](a, c);
        a = this.getAttribute(a, b);
        return c ? c == a : !!a
    };
    b.matchSelector = function(a, b, c, d, e, f) {
        if (b) {
            var g = this.isXMLDocument ? a.nodeName : a.nodeName.toUpperCase();
            if ("*" == b) {
                if ("@" > g)
                    return!1
            } else if (g != b)
                return!1
        }
        if (c && a.getAttribute("id") != c)
            return!1;
        if (d)
            for (b = d.length; b--; )
                if (c = this.getAttribute(a, "class"), !c || !d[b].regexp.test(c))
                    return!1;
        if (e)
            for (b = e.length; b--; )
                if (d = e[b], d.operator ? !d.test(this.getAttribute(a, d.key)) : !this.hasAttribute(a, d.key))
                    return!1;
        if (f)
            for (b = f.length; b--; )
                if (d = f[b], !this.matchPseudo(a, d.key, d.value))
                    return!1;
        return!0
    };
    var g = {" ": function(a, b, c, d, e, f, g) {
            var l;
            if (this.isHTMLDocument) {
                if (c) {
                    l = this.document.getElementById(c);
                    if (!l && a.all || this.idGetsName && l && l.getAttributeNode("id").nodeValue != c) {
                        g = a.all[c];
                        if (!g)
                            return;
                        g[0] || (g = [g]);
                        for (a = 0; l = g[a++]; ) {
                            var s = l.getAttributeNode("id");
                            if (s && s.nodeValue == c) {
                                this.push(l, b, null, d, e, f);
                                break
                            }
                        }
                        return
                    }
                    if (l) {
                        if (this.document !== a && !this.contains(a, l))
                            return;
                        this.push(l, b, null, d, e, f);
                        return
                    }
                    if (this.contains(this.root, a))
                        return
                }
                if (d && a.getElementsByClassName && !this.brokenGEBCN && (g = a.getElementsByClassName(g.join(" "))) && g.length) {
                    for (a = 0; l = g[a++]; )
                        this.push(l, b, c, null, e, f);
                    return
                }
            }
            if ((g = a.getElementsByTagName(b)) && g.length) {
                this.brokenStarGEBTN || (b = null);
                for (a = 0; l = g[a++]; )
                    this.push(l, b, c, d, e, f)
            }
        }, ">": function(a, b, c, d, e, f) {
            if (a = a.firstChild) {
                do
                    1 == a.nodeType && this.push(a, b, c, d, e, f);
                while (a = a.nextSibling)
            }
        }, "+": function(a, b, c, d, e, f) {
            for (; a = a.nextSibling; )
                if (1 == a.nodeType) {
                    this.push(a, b, c, d, e, f);
                    break
                }
        }, "^": function(a, b, c, d, e, f) {
            if (a = a.firstChild)
                if (1 == a.nodeType)
                    this.push(a, b, c, d, e, f);
                else
                    this["combinator:+"](a, b, c, d, e, f)
        }, "~": function(a, b, c, d, e, f) {
            for (; a = a.nextSibling; )
                if (1 == a.nodeType) {
                    var g = this.getUID(a);
                    if (this.bitUniques[g])
                        break;
                    this.bitUniques[g] = !0;
                    this.push(a, b, c, d, e, f)
                }
        }, "++": function(a, b, c, d, e, f) {
            this["combinator:+"](a, b, c, d, e, f);
            this["combinator:!+"](a, b, c, d, e, f)
        }, "~~": function(a, b, c, d, e, f) {
            this["combinator:~"](a, b, c, d, e, f);
            this["combinator:!~"](a, b, c, d, e, f)
        }, "!": function(a, b, c, d, e, f) {
            for (; a = a.parentNode; )
                a !== this.document && this.push(a, b, c, d, e, f)
        }, "!>": function(a, b, c, d, e, f) {
            a = a.parentNode;
            a !== this.document && this.push(a, b, c, d, e, f)
        }, "!+": function(a, b, c, d, e, f) {
            for (; a = a.previousSibling; )
                if (1 == a.nodeType) {
                    this.push(a, b, c, d, e, f);
                    break
                }
        }, "!^": function(a, b, c, d, e, f) {
            if (a = a.lastChild)
                if (1 == a.nodeType)
                    this.push(a, b, c, d, e, f);
                else
                    this["combinator:!+"](a, b, c, d, e, f)
        }, "!~": function(a, b, c, d, e, f) {
            for (; a = a.previousSibling; )
                if (1 == a.nodeType) {
                    var g = this.getUID(a);
                    if (this.bitUniques[g])
                        break;
                    this.bitUniques[g] = !0;
                    this.push(a, b, c, d, e, f)
                }
        }}, i;
    for (i in g)
        b["combinator:" + i] = g[i];
    var g = {empty: function(a) {
            var b = a.firstChild;
            return!(b && 1 == b.nodeType) && !(a.innerText || a.textContent || "").length
        }, not: function(a, b) {
            return!this.matchNode(a, b)
        }, contains: function(a, b) {
            return-1 < (a.innerText || a.textContent || "").indexOf(b)
        }, "first-child": function(a) {
            for (; a = a.previousSibling; )
                if (1 == a.nodeType)
                    return!1;
            return!0
        }, "last-child": function(a) {
            for (; a = a.nextSibling; )
                if (1 == a.nodeType)
                    return!1;
            return!0
        }, "only-child": function(a) {
            for (var b = a; b = b.previousSibling; )
                if (1 == b.nodeType)
                    return!1;
            for (; a = a.nextSibling; )
                if (1 == a.nodeType)
                    return!1;
            return!0
        }, "nth-child": b.createNTHPseudo("firstChild", "nextSibling", "posNTH"), "nth-last-child": b.createNTHPseudo("lastChild", "previousSibling", "posNTHLast"), "nth-of-type": b.createNTHPseudo("firstChild", "nextSibling", "posNTHType", !0), "nth-last-of-type": b.createNTHPseudo("lastChild", "previousSibling", "posNTHTypeLast", !0), index: function(a, b) {
            return this["pseudo:nth-child"](a, "" + (b + 1))
        }, even: function(a) {
            return this["pseudo:nth-child"](a, "2n")
        }, odd: function(a) {
            return this["pseudo:nth-child"](a, "2n+1")
        }, "first-of-type": function(a) {
            for (var b = a.nodeName; a = a.previousSibling; )
                if (a.nodeName == b)
                    return!1;
            return!0
        }, "last-of-type": function(a) {
            for (var b = a.nodeName; a = a.nextSibling; )
                if (a.nodeName == b)
                    return!1;
            return!0
        }, "only-of-type": function(a) {
            for (var b = a, c = a.nodeName; b = b.previousSibling; )
                if (b.nodeName == c)
                    return!1;
            for (; a = a.nextSibling; )
                if (a.nodeName == c)
                    return!1;
            return!0
        }, enabled: function(a) {
            return!a.disabled
        }, disabled: function(a) {
            return a.disabled
        }, checked: function(a) {
            return a.checked || a.selected
        }, focus: function(a) {
            return this.isHTMLDocument && this.document.activeElement === a && (a.href || a.type || this.hasAttribute(a, "tabindex"))
        }, root: function(a) {
            return a === this.root
        }, selected: function(a) {
            return a.selected
        }}, j;
    for (j in g)
        b["pseudo:" + j] = g[j];
    j = b.attributeGetters = {"for": function() {
            return"htmlFor"in this ? this.htmlFor : this.getAttribute("for")
        }, href: function() {
            return"href"in this ? this.getAttribute("href", 2) : this.getAttribute("href")
        }, style: function() {
            return this.style ? this.style.cssText : this.getAttribute("style")
        }, tabindex: function() {
            var a = this.getAttributeNode("tabindex");
            return a && a.specified ? a.nodeValue : null
        }, type: function() {
            return this.getAttribute("type")
        }, maxlength: function() {
            var a = this.getAttributeNode("maxLength");
            return a && a.specified ? a.nodeValue : null
        }};
    j.MAXLENGTH = j.maxLength = j.maxlength;
    var m = b.Slick = this.Slick || {};
    m.version = "1.1.7";
    m.search = function(a, c, d) {
        return b.search(a, c, d)
    };
    m.find = function(a, c) {
        return b.search(a, c, null, !0)
    };
    m.contains = function(a, c) {
        b.setDocument(a);
        return b.contains(a, c)
    };
    m.getAttribute = function(a, c) {
        b.setDocument(a);
        return b.getAttribute(a, c)
    };
    m.hasAttribute = function(a, c) {
        b.setDocument(a);
        return b.hasAttribute(a, c)
    };
    m.match = function(a, c) {
        if (!a || !c)
            return!1;
        if (!c || c === a)
            return!0;
        b.setDocument(a);
        return b.matchNode(a, c)
    };
    m.defineAttributeGetter = function(a, c) {
        b.attributeGetters[a] = c;
        return this
    };
    m.lookupAttributeGetter = function(a) {
        return b.attributeGetters[a]
    };
    m.definePseudo = function(a, c) {
        b["pseudo:" +
        a] = function(a, b) {
            return c.call(a, b)
        };
        return this
    };
    m.lookupPseudo = function(a) {
        var c = b["pseudo:" + a];
        return c ? function(a) {
            return c.call(this, a)
        } : null
    };
    m.override = function(a, c) {
        b.override(a, c);
        return this
    };
    m.isXML = b.isXML;
    m.uidOf = function(a) {
        return b.getUIDHTML(a)
    };
    this.Slick || (this.Slick = m)
}).apply("undefined" != typeof exports ? exports : this);
var Element = function(b, a) {
    var c = Element.Constructors[b];
    if (c)
        return c(a);
    if ("string" != typeof b)
        return document.id(b).set(a);
    a || (a = {});
    if (!/^[\w-]+$/.test(b)) {
        c = Slick.parse(b).expressions[0][0];
        b = "*" == c.tag ? "div" : c.tag;
        c.id && null == a.id && (a.id = c.id);
        var d = c.attributes;
        if (d)
            for (var e, f = 0, g = d.length; f < g; f++)
                e = d[f], null == a[e.key] && (null != e.value && "=" == e.operator ? a[e.key] = e.value : !e.value && !e.operator && (a[e.key] = !0));
        c.classList && null == a["class"] && (a["class"] = c.classList.join(" "))
    }
    return document.newElement(b, a)
};
Browser.Element && (Element.prototype = Browser.Element.prototype, Element.prototype._fireEvent = function(b) {
    return function(a, c) {
        return b.call(this, a, c)
    }
}(Element.prototype.fireEvent));
(new Type("Element", Element)).mirror(function(b) {
    if (!Array.prototype[b]) {
        var a = {};
        a[b] = function() {
            for (var a = [], d = arguments, e = true, f = 0, g = this.length; f < g; f++)
                var i = this[f], i = a[f] = i[b].apply(i, d), e = e && typeOf(i) == "element";
            return e ? new Elements(a) : a
        };
        Elements.implement(a)
    }
});
Browser.Element || (Element.parent = Object, Element.Prototype = {$constructor: Element, $family: Function.from("element").hide()}, Element.mirror(function(b, a) {
    Element.Prototype[b] = a
}));
Element.Constructors = {};
var IFrame = new Type("IFrame", function() {
    var b = Array.link(arguments, {properties: Type.isObject, iframe: function(a) {
            return a != null
        }}), a = b.properties || {}, c;
    b.iframe && (c = document.id(b.iframe));
    var d = a.onload || function() {
    };
    delete a.onload;
    a.id = a.name = [a.id, a.name, c ? c.id || c.name : "IFrame_" + String.uniqueID()].pick();
    c = new Element(c || "iframe", a);
    b = function() {
        d.call(c.contentWindow)
    };
    window.frames[a.id] ? b() : c.addListener("load", b);
    return c
}), Elements = this.Elements = function(b) {
    if (b && b.length)
        for (var a = {}, c, d = 0; c = b[d++]; ) {
            var e = Slick.uidOf(c);
            if (!a[e]) {
                a[e] = true;
                this.push(c)
            }
        }
};
Elements.prototype = {length: 0};
Elements.parent = Array;
(new Type("Elements", Elements)).implement({filter: function(b, a) {
        return!b ? this : new Elements(Array.filter(this, typeOf(b) == "string" ? function(a) {
            return a.match(b)
        } : b, a))
    }.protect(), push: function() {
        for (var b = this.length, a = 0, c = arguments.length; a < c; a++) {
            var d = document.id(arguments[a]);
            d && (this[b++] = d)
        }
        return this.length = b
    }.protect(), unshift: function() {
        for (var b = [], a = 0, c = arguments.length; a < c; a++) {
            var d = document.id(arguments[a]);
            d && b.push(d)
        }
        return Array.prototype.unshift.apply(this, b)
    }.protect(), concat: function() {
        for (var b = new Elements(this), a = 0, c = arguments.length; a < c; a++) {
            var d = arguments[a];
            Type.isEnumerable(d) ? b.append(d) : b.push(d)
        }
        return b
    }.protect(), append: function(b) {
        for (var a = 0, c = b.length; a < c; a++)
            this.push(b[a]);
        return this
    }.protect(), empty: function() {
        for (; this.length; )
            delete this[--this.length];
        return this
    }.protect()});
(function() {
    var b = Array.prototype.splice, a = {"0": 0, 1: 1, length: 2};
    b.call(a, 1, 1);
    a[1] == 1 && Elements.implement("splice", function() {
        for (var a = this.length, c = b.apply(this, arguments); a >= this.length; )
            delete this[a--];
        return c
    }.protect());
    Array.forEachMethod(function(a, b) {
        Elements.implement(b, a)
    });
    Array.mirror(Elements);
    var c;
    try {
        c = document.createElement("<input name=x>").name == "x"
    } catch (d) {
    }
    var e = function(a) {
        return("" + a).replace(/&/g, "&amp;").replace(/"/g, "&quot;")
    };
    Document.implement({newElement: function(a, b) {
            if (b && b.checked != null)
                b.defaultChecked = b.checked;
            if (c && b) {
                a = "<" + a;
                b.name && (a = a + (' name="' + e(b.name) + '"'));
                b.type && (a = a + (' type="' + e(b.type) + '"'));
                a = a + ">";
                delete b.name;
                delete b.type
            }
            return this.id(this.createElement(a)).set(b)
        }})
})();
(function() {
    Slick.uidOf(window);
    Slick.uidOf(document);
    Document.implement({newTextNode: function(a) {
            return this.createTextNode(a)
        }, getDocument: function() {
            return this
        }, getWindow: function() {
            return this.window
        }, id: function() {
            var a = {string: function(b, c, d) {
                    return(b = Slick.find(d, "#" + b.replace(/(\W)/g, "\\$1"))) ? a.element(b, c) : null
                }, element: function(a, b) {
                    Slick.uidOf(a);
                    if (!b && !a.$family && !/^(?:object|embed)$/i.test(a.tagName)) {
                        var c = a.fireEvent;
                        a._fireEvent = function(a, b) {
                            return c(a, b)
                        };
                        Object.append(a, Element.Prototype)
                    }
                    return a
                }, object: function(b, c, d) {
                    return b.toElement ? a.element(b.toElement(d), c) : null
                }};
            a.textnode = a.whitespace = a.window = a.document = function(a) {
                return a
            };
            return function(b, c, d) {
                if (b && b.$family && b.uniqueNumber)
                    return b;
                var e = typeOf(b);
                return a[e] ? a[e](b, c, d || document) : null
            }
        }()});
    window.$ == null && Window.implement("$", function(a, b) {
        return document.id(a, b, this.document)
    });
    Window.implement({getDocument: function() {
            return this.document
        }, getWindow: function() {
            return this
        }});
    [Document, Element].invoke("implement", {getElements: function(a) {
            return Slick.search(this, a, new Elements)
        }, getElement: function(a) {
            return document.id(Slick.find(this, a))
        }});
    var b = {contains: function(a) {
            return Slick.contains(this, a)
        }};
    document.contains || Document.implement(b);
    document.createElement("div").contains || Element.implement(b);
    var a = function(a, b) {
        if (!a)
            return b;
        for (var a = Object.clone(Slick.parse(a)), c = a.expressions, d = c.length; d--; )
            c[d][0].combinator = b;
        return a
    };
    Object.forEach({getNext: "~", getPrevious: "!~", getParent: "!"}, function(b, c) {
        Element.implement(c, function(c) {
            return this.getElement(a(c, b))
        })
    });
    Object.forEach({getAllNext: "~", getAllPrevious: "!~", getSiblings: "~~", getChildren: ">", getParents: "!"}, function(b, c) {
        Element.implement(c, function(c) {
            return this.getElements(a(c, b))
        })
    });
    Element.implement({getFirst: function(b) {
            return document.id(Slick.search(this, a(b, ">"))[0])
        }, getLast: function(b) {
            return document.id(Slick.search(this, a(b, ">")).getLast())
        }, getWindow: function() {
            return this.ownerDocument.window
        }, getDocument: function() {
            return this.ownerDocument
        }, getElementById: function(a) {
            return document.id(Slick.find(this, "#" + ("" + a).replace(/(\W)/g, "\\$1")))
        }, match: function(a) {
            return!a || Slick.match(this, a)
        }});
    window.$$ == null && Window.implement("$$", function(a) {
        if (arguments.length == 1) {
            if (typeof a == "string")
                return Slick.search(this.document, a, new Elements);
            if (Type.isEnumerable(a))
                return new Elements(a)
        }
        return new Elements(arguments)
    });
    var c = {before: function(a, b) {
            var c = b.parentNode;
            c && c.insertBefore(a, b)
        }, after: function(a, b) {
            var c = b.parentNode;
            c && c.insertBefore(a, b.nextSibling)
        }, bottom: function(a, b) {
            b.appendChild(a)
        }, top: function(a, b) {
            b.insertBefore(a, b.firstChild)
        }};
    c.inside = c.bottom;
    var d = {}, e = {}, f = {};
    Array.forEach(["type", "value", "defaultValue", "accessKey", "cellPadding", "cellSpacing", "colSpan", "frameBorder", "rowSpan", "tabIndex", "useMap"], function(a) {
        f[a.toLowerCase()] = a
    });
    f.html = "innerHTML";
    f.text = document.createElement("div").textContent == null ? "innerText" : "textContent";
    Object.forEach(f, function(a, b) {
        e[b] = function(b, c) {
            b[a] = c
        };
        d[b] = function(b) {
            return b[a]
        }
    });
    Array.forEach(["compact", "nowrap", "ismap", "declare", "noshade", "checked", "disabled", "readOnly", "multiple", "selected", "noresize", "defer", "defaultChecked", "autofocus", "controls", "autoplay", "loop"], function(a) {
        var b = a.toLowerCase();
        e[b] = function(b, c) {
            b[a] = !!c
        };
        d[b] = function(b) {
            return!!b[a]
        }
    });
    Object.append(e, {"class": function(a, b) {
            "className"in a ? a.className = b || "" : a.setAttribute("class", b)
        }, "for": function(a, b) {
            "htmlFor"in a ? a.htmlFor = b : a.setAttribute("for", b)
        }, style: function(a, b) {
            a.style ? a.style.cssText = b : a.setAttribute("style", b)
        }, value: function(a, b) {
            a.value = b != null ? b : ""
        }});
    d["class"] = function(a) {
        return"className"in a ? a.className || null : a.getAttribute("class")
    };
    b = document.createElement("button");
    try {
        b.type = "button"
    } catch (g) {
    }
    if (b.type != "button")
        e.type = function(a, b) {
            a.setAttribute("type", b)
        };
    b = null;
    b = document.createElement("input");
    b.value = "t";
    b.type = "submit";
    if (b.value != "t")
        e.type = function(a, b) {
            var c = a.value;
            a.type = b;
            a.value = c
        };
    var b = null, i = function(a) {
        a.random = "attribute";
        return a.getAttribute("random") == "attribute"
    }(document.createElement("div"));
    Element.implement({setProperty: function(a, b) {
            var c = e[a.toLowerCase()];
            if (c)
                c(this, b);
            else {
                if (i)
                    var d = this.retrieve("$attributeWhiteList", {});
                if (b == null) {
                    this.removeAttribute(a);
                    i && delete d[a]
                } else {
                    this.setAttribute(a, "" + b);
                    i && (d[a] = true)
                }
            }
            return this
        }, setProperties: function(a) {
            for (var b in a)
                this.setProperty(b, a[b]);
            return this
        }, getProperty: function(a) {
            var b = d[a.toLowerCase()];
            if (b)
                return b(this);
            if (i) {
                var c = this.getAttributeNode(a), b = this.retrieve("$attributeWhiteList", {});
                if (!c)
                    return null;
                if (c.expando && !b[a]) {
                    c = this.outerHTML;
                    if (c.substr(0, c.search(/\/?['"]?>(?![^<]*<['"])/)).indexOf(a) < 0)
                        return null;
                    b[a] = true
                }
            }
            b = Slick.getAttribute(this, a);
            return!b && !Slick.hasAttribute(this, a) ? null : b
        }, getProperties: function() {
            var a = Array.from(arguments);
            return a.map(this.getProperty, this).associate(a)
        }, removeProperty: function(a) {
            return this.setProperty(a, null)
        }, removeProperties: function() {
            Array.each(arguments, this.removeProperty, this);
            return this
        }, set: function(a, b) {
            var c = Element.Properties[a];
            c && c.set ? c.set.call(this, b) : this.setProperty(a, b)
        }.overloadSetter(), get: function(a) {
            var b = Element.Properties[a];
            return b && b.get ? b.get.apply(this) : this.getProperty(a)
        }.overloadGetter(), erase: function(a) {
            var b = Element.Properties[a];
            b && b.erase ? b.erase.apply(this) : this.removeProperty(a);
            return this
        }, hasClass: function(a) {
            return this.className.clean().contains(a, " ")
        }, addClass: function(a) {
            if (!this.hasClass(a))
                this.className = (this.className + " " + a).clean();
            return this
        }, removeClass: function(a) {
            this.className = this.className.replace(RegExp("(^|\\s)" + a + "(?:\\s|$)"), "$1");
            return this
        }, toggleClass: function(a, b) {
            b == null && (b = !this.hasClass(a));
            return b ? this.addClass(a) : this.removeClass(a)
        }, adopt: function() {
            var a = this, b, c = Array.flatten(arguments), d = c.length;
            d > 1 && (a = b = document.createDocumentFragment());
            for (var e = 0; e < d; e++) {
                var f = document.id(c[e], true);
                f && a.appendChild(f)
            }
            b && this.appendChild(b);
            return this
        }, appendText: function(a, b) {
            return this.grab(this.getDocument().newTextNode(a), b)
        }, grab: function(a, b) {
            c[b || "bottom"](document.id(a, true), this);
            return this
        }, inject: function(a, b) {
            c[b || "bottom"](this, document.id(a, true));
            return this
        }, replaces: function(a) {
            a = document.id(a, true);
            a.parentNode.replaceChild(this, a);
            return this
        }, wraps: function(a, b) {
            a = document.id(a, true);
            return this.replaces(a).grab(a, b)
        }, getSelected: function() {
            this.selectedIndex;
            return new Elements(Array.from(this.options).filter(function(a) {
                return a.selected
            }))
        }, toQueryString: function() {
            var a = [];
            this.getElements("input, select, textarea").each(function(b) {
                var c = b.type;
                if (b.name && !b.disabled && !(c == "submit" || c == "reset" || c == "file" || c == "image")) {
                    c = b.get("tag") == "select" ? b.getSelected().map(function(a) {
                        return document.id(a).get("value")
                    }) : (c == "radio" || c == "checkbox") && !b.checked ? null : b.get("value");
                    Array.from(c).each(function(c) {
                        typeof c != "undefined" && a.push(encodeURIComponent(b.name) + "=" + encodeURIComponent(c))
                    })
                }
            });
            return a.join("&")
        }});
    var j = {}, m = {}, h = function(a) {
        return m[a] || (m[a] = {})
    }, k = function(a) {
        var b = a.uniqueNumber;
        a.removeEvents && a.removeEvents();
        a.clearAttributes && a.clearAttributes();
        if (b != null) {
            delete j[b];
            delete m[b]
        }
        return a
    }, o = {input: "checked", option: "selected", textarea: "value"};
    Element.implement({destroy: function() {
            var a = k(this).getElementsByTagName("*");
            Array.each(a, k);
            Element.dispose(this);
            return null
        }, empty: function() {
            Array.from(this.childNodes).each(Element.dispose);
            return this
        }, dispose: function() {
            return this.parentNode ? this.parentNode.removeChild(this) : this
        }, clone: function(a, b) {
            var a = a !== false, c = this.cloneNode(a), d = [c], e = [this], f;
            if (a) {
                d.append(Array.from(c.getElementsByTagName("*")));
                e.append(Array.from(this.getElementsByTagName("*")))
            }
            for (f = d.length; f--; ) {
                var k = d[f], g = e[f];
                b || k.removeAttribute("id");
                if (k.clearAttributes) {
                    k.clearAttributes();
                    k.mergeAttributes(g);
                    k.removeAttribute("uniqueNumber");
                    if (k.options)
                        for (var j = k.options, m = g.options, h = j.length; h--; )
                            j[h].selected = m[h].selected
                }
                (j = o[g.tagName.toLowerCase()]) && g[j] && (k[j] = g[j])
            }
            if (Browser.ie) {
                d = c.getElementsByTagName("object");
                e = this.getElementsByTagName("object");
                for (f = d.length; f--; )
                    d[f].outerHTML = e[f].outerHTML
            }
            return document.id(c)
        }});
    [Element, Window, Document].invoke("implement", {addListener: function(a, b, c) {
            if (a == "unload")
                var d = b, e = this, b = function() {
                e.removeListener("unload", b);
                d()
            };
            else
                j[Slick.uidOf(this)] = this;
            this.addEventListener ? this.addEventListener(a, b, !!c) : this.attachEvent("on" + a, b);
            return this
        }, removeListener: function(a, b, c) {
            this.removeEventListener ? this.removeEventListener(a, b, !!c) : this.detachEvent("on" + a, b);
            return this
        }, retrieve: function(a, b) {
            var c = h(Slick.uidOf(this)), d = c[a];
            b != null && d == null && (d = c[a] = b);
            return d != null ? d : null
        }, store: function(a, b) {
            h(Slick.uidOf(this))[a] = b;
            return this
        }, eliminate: function(a) {
            delete h(Slick.uidOf(this))[a];
            return this
        }});
    window.attachEvent && !window.addEventListener && window.addListener("unload", function() {
        Object.each(j, k);
        window.CollectGarbage && CollectGarbage()
    });
    Element.Properties = {};
    Element.Properties.style = {set: function(a) {
            this.style.cssText = a
        }, get: function() {
            return this.style.cssText
        }, erase: function() {
            this.style.cssText = ""
        }};
    Element.Properties.tag = {get: function() {
            return this.tagName.toLowerCase()
        }};
    Element.Properties.html = {set: function(a) {
            a == null ? a = "" : typeOf(a) == "array" && (a = a.join(""));
            this.innerHTML = a
        }, erase: function() {
            this.innerHTML = ""
        }};
    b = document.createElement("div");
    b.innerHTML = "<nav></nav>";
    var q = b.childNodes.length == 1;
    if (!q)
        for (var b = ["abbr", "article", "aside", "audio", "canvas", "datalist", "details", "figcaption", "figure", "footer", "header", "hgroup", "mark", "meter", "nav", "output", "progress", "section", "summary", "time", "video"], u = document.createDocumentFragment(), r = b.length; r--; )
            u.createElement(b[r]);
    b = null;
    b = Function.attempt(function() {
        document.createElement("table").innerHTML = "<tr><td></td></tr>";
        return true
    });
    r = document.createElement("tr");
    r.innerHTML = "<td></td>";
    var w = r.innerHTML == "<td></td>", r = null;
    if (!b || !w || !q)
        Element.Properties.html.set = function(a) {
            var b = {table: [1, "<table>", "</table>"], select: [1, "<select>", "</select>"], tbody: [2, "<table><tbody>", "</tbody></table>"], tr: [3, "<table><tbody><tr>", "</tr></tbody></table>"]};
            b.thead = b.tfoot = b.tbody;
            return function(c) {
                var d = b[this.get("tag")];
                !d && !q && (d = [0, "", ""]);
                if (!d)
                    return a.call(this, c);
                var e = d[0], f = document.createElement("div"), k = f;
                q || u.appendChild(f);
                for (f.innerHTML = [d[1], c, d[2]].flatten().join(""); e--; )
                    k = k.firstChild;
                this.empty().adopt(k.childNodes);
                q || u.removeChild(f)
            }
        }(Element.Properties.html.set);
    b = document.createElement("form");
    b.innerHTML = "<select><option>s</option></select>";
    if (b.firstChild.value != "s")
        Element.Properties.value = {set: function(a) {
                if (this.get("tag") != "select")
                    return this.setProperty("value", a);
                for (var b = this.getElements("option"), c = 0; c < b.length; c++) {
                    var d = b[c], e = d.getAttributeNode("value");
                    if ((e && e.specified ? d.value : d.get("text")) == a)
                        return d.selected = true
                }
            }, get: function() {
                var a = this, b = a.get("tag");
                if (b != "select" && b != "option")
                    return this.getProperty("value");
                if (b == "select" && !(a = a.getSelected()[0]))
                    return"";
                return(b = a.getAttributeNode("value")) && b.specified ? a.value : a.get("text")
            }};
    b = null;
    if (document.createElement("div").getAttributeNode("id"))
        Element.Properties.id = {set: function(a) {
                this.id = this.getAttributeNode("id").value = a
            }, get: function() {
                return this.id || null
            }, erase: function() {
                this.id = this.getAttributeNode("id").value = ""
            }}
})();
(function() {
    var b = document.html, a = document.createElement("div");
    a.style.color = "red";
    a.style.color = null;
    var c = a.style.color == "red", a = null;
    Element.Properties.styles = {set: function(a) {
            this.setStyles(a)
        }};
    var a = b.style.opacity != null, d = b.style.filter != null, e = /alpha\(opacity=([\d.]+)\)/i, f = a ? function(a, b) {
        a.style.opacity = b
    } : d ? function(a, b) {
        var c = a.style;
        if (!a.currentStyle || !a.currentStyle.hasLayout)
            c.zoom = 1;
        var b = b == null || b == 1 ? "" : "alpha(opacity=" + (b * 100).limit(0, 100).round() + ")", d = c.filter || a.getComputedStyle("filter") || "";
        c.filter = e.test(d) ? d.replace(e, b) : d + b;
        c.filter || c.removeAttribute("filter")
    } : function(a, b) {
        a.store("$opacity", b);
        a.style.visibility = b > 0 || b == null ? "visible" : "hidden"
    }, g = a ? function(a) {
        a = a.style.opacity || a.getComputedStyle("opacity");
        return a == "" ? 1 : a.toFloat()
    } : d ? function(a) {
        var a = a.style.filter || a.getComputedStyle("filter"), b;
        a && (b = a.match(e));
        return b == null || a == null ? 1 : b[1] / 100
    } : function(a) {
        var b = a.retrieve("$opacity");
        b == null && (b = a.style.visibility == "hidden" ? 0 : 1);
        return b
    }, i = b.style.cssFloat == null ? "styleFloat" : "cssFloat";
    Element.implement({getComputedStyle: function(a) {
            if (this.currentStyle)
                return this.currentStyle[a.camelCase()];
            var b = Element.getDocument(this).defaultView;
            return(b = b ? b.getComputedStyle(this, null) : null) ? b.getPropertyValue(a == i ? "float" : a.hyphenate()) : null
        }, setStyle: function(a, b) {
            if (a == "opacity") {
                b != null && (b = parseFloat(b));
                f(this, b);
                return this
            }
            a = (a == "float" ? i : a).camelCase();
            if (typeOf(b) != "string")
                var d = (Element.Styles[a] || "@").split(" "), b = Array.from(b).map(function(a, b) {
                return!d[b] ? "" : typeOf(a) == "number" ? d[b].replace("@", Math.round(a)) : a
            }).join(" ");
            else
                b == "" + Number(b) && (b = Math.round(b));
            this.style[a] = b;
            (b == "" || b == null) && c && this.style.removeAttribute && this.style.removeAttribute(a);
            return this
        }, getStyle: function(a) {
            if (a == "opacity")
                return g(this);
            var a = (a == "float" ? i : a).camelCase(), b = this.style[a];
            if (!b || a == "zIndex") {
                var b = [], c;
                for (c in Element.ShortStyles)
                    if (a == c) {
                        for (var d in Element.ShortStyles[c])
                            b.push(this.getStyle(d));
                        return b.join(" ")
                    }
                b = this.getComputedStyle(a)
            }
            if (b) {
                b = "" + b;
                (c = b.match(/rgba?\([\d\s,]+\)/)) && (b = b.replace(c[0], c[0].rgbToHex()))
            }
            if (Browser.ie && isNaN(parseFloat(b))) {
                if (/^(height|width)$/.test(a)) {
                    var e = 0;
                    (a == "width" ? ["left", "right"] : ["top", "bottom"]).each(function(a) {
                        e = e + (this.getStyle("border-" + a + "-width").toInt() + this.getStyle("padding-" + a).toInt())
                    }, this);
                    return this["offset" + a.capitalize()] - e + "px"
                }
                if (Browser.opera && ("" + b).indexOf("px") != -1)
                    return b;
                if (/^border(.+)Width|margin|padding/.test(a))
                    return"0px"
            }
            return b
        }, setStyles: function(a) {
            for (var b in a)
                this.setStyle(b, a[b]);
            return this
        }, getStyles: function() {
            var a = {};
            Array.flatten(arguments).each(function(b) {
                a[b] = this.getStyle(b)
            }, this);
            return a
        }});
    Element.Styles = {left: "@px", top: "@px", bottom: "@px", right: "@px", width: "@px", height: "@px", maxWidth: "@px", maxHeight: "@px", minWidth: "@px", minHeight: "@px", backgroundColor: "rgb(@, @, @)", backgroundPosition: "@px @px", color: "rgb(@, @, @)", fontSize: "@px", letterSpacing: "@px", lineHeight: "@px", clip: "rect(@px @px @px @px)", margin: "@px @px @px @px", padding: "@px @px @px @px", border: "@px @ rgb(@, @, @) @px @ rgb(@, @, @) @px @ rgb(@, @, @)", borderWidth: "@px @px @px @px", borderStyle: "@ @ @ @", borderColor: "rgb(@, @, @) rgb(@, @, @) rgb(@, @, @) rgb(@, @, @)", zIndex: "@", zoom: "@", fontWeight: "@", textIndent: "@px", opacity: "@"};
    Element.ShortStyles = {margin: {}, padding: {}, border: {}, borderWidth: {}, borderStyle: {}, borderColor: {}};
    ["Top", "Right", "Bottom", "Left"].each(function(a) {
        var b = Element.ShortStyles, c = Element.Styles;
        ["margin", "padding"].each(function(d) {
            var e = d + a;
            b[d][e] = c[e] = "@px"
        });
        var d = "border" + a;
        b.border[d] = c[d] = "@px @ rgb(@, @, @)";
        var e = d + "Width", f = d + "Style", g = d + "Color";
        b[d] = {};
        b.borderWidth[e] = b[d][e] = c[e] = "@px";
        b.borderStyle[f] = b[d][f] = c[f] = "@";
        b.borderColor[g] = b[d][g] = c[g] = "rgb(@, @, @)"
    })
})();
(function() {
    Element.Properties.events = {set: function(a) {
            this.addEvents(a)
        }};
    [Element, Window, Document].invoke("implement", {addEvent: function(a, b, d) {
            var e = this.retrieve("events", {});
            e[a] || (e[a] = {keys: [], values: []});
            if (e[a].keys.contains(b))
                return this;
            e[a].keys.push(b);
            var f = a, g = Element.Events[a], i = b, j = this;
            if (g) {
                g.onAdd && g.onAdd.call(this, b, a);
                g.condition && (i = function(d) {
                    return g.condition.call(this, d, a) ? b.call(this, d) : true
                });
                g.base && (f = Function.from(g.base).call(this, a))
            }
            var m = function() {
                return b.call(j)
            }, h = Element.NativeEvents[f];
            if (h) {
                h == 2 && (m = function(a) {
                    a = new DOMEvent(a, j.getWindow());
                    i.call(j, a) === false && a.stop()
                });
                this.addListener(f, m, d)
            }
            e[a].values.push(m);
            return this
        }, removeEvent: function(a, b, d) {
            var e = this.retrieve("events");
            if (!e || !e[a])
                return this;
            var f = e[a], g = f.keys.indexOf(b);
            if (g == -1)
                return this;
            e = f.values[g];
            delete f.keys[g];
            delete f.values[g];
            if (f = Element.Events[a]) {
                f.onRemove && f.onRemove.call(this, b, a);
                f.base && (a = Function.from(f.base).call(this, a))
            }
            return Element.NativeEvents[a] ? this.removeListener(a, e, d) : this
        }, addEvents: function(a) {
            for (var b in a)
                this.addEvent(b, a[b]);
            return this
        }, removeEvents: function(a) {
            var b;
            if (typeOf(a) == "object") {
                for (b in a)
                    this.removeEvent(b, a[b]);
                return this
            }
            var d = this.retrieve("events");
            if (!d)
                return this;
            if (a) {
                if (d[a]) {
                    d[a].keys.each(function(b) {
                        this.removeEvent(a, b)
                    }, this);
                    delete d[a]
                }
            } else {
                for (b in d)
                    this.removeEvents(b);
                this.eliminate("events")
            }
            return this
        }, fireEvent: function(a, b, d) {
            var e = this.retrieve("events");
            if (!e || !e[a])
                return this;
            b = Array.from(b);
            e[a].keys.each(function(a) {
                d ? a.delay(d, this, b) : a.apply(this, b)
            }, this);
            return this
        }, cloneEvents: function(a, b) {
            var a = document.id(a), d = a.retrieve("events");
            if (!d)
                return this;
            if (b)
                d[b] && d[b].keys.each(function(a) {
                    this.addEvent(b, a)
                }, this);
            else
                for (var e in d)
                    this.cloneEvents(a, e);
            return this
        }});
    Element.NativeEvents = {click: 2, dblclick: 2, mouseup: 2, mousedown: 2, contextmenu: 2, mousewheel: 2, DOMMouseScroll: 2, mouseover: 2, mouseout: 2, mousemove: 2, selectstart: 2, selectend: 2, keydown: 2, keypress: 2, keyup: 2, orientationchange: 2, touchstart: 2, touchmove: 2, touchend: 2, touchcancel: 2, gesturestart: 2, gesturechange: 2, gestureend: 2, focus: 2, blur: 2, change: 2, reset: 2, select: 2, submit: 2, paste: 2, input: 2, load: 2, unload: 1, beforeunload: 2, resize: 1, move: 1, DOMContentLoaded: 1, readystatechange: 1, error: 1, abort: 1, scroll: 1};
    Element.Events = {mousewheel: {base: Browser.firefox ? "DOMMouseScroll" : "mousewheel"}};
    if ("onmouseenter"in document.documentElement)
        Element.NativeEvents.mouseenter = Element.NativeEvents.mouseleave = 2;
    else {
        var b = function(a) {
            a = a.relatedTarget;
            return a == null ? true : !a ? false : a != this && a.prefix != "xul" && typeOf(this) != "document" && !this.contains(a)
        };
        Element.Events.mouseenter = {base: "mouseover", condition: b};
        Element.Events.mouseleave = {base: "mouseout", condition: b}
    }
    if (!window.addEventListener) {
        Element.NativeEvents.propertychange = 2;
        Element.Events.change = {base: function() {
                var a = this.type;
                return this.get("tag") == "input" && (a == "radio" || a == "checkbox") ? "propertychange" : "change"
            }, condition: function(a) {
                return this.type != "radio" || a.event.propertyName == "checked" && this.checked
            }}
    }
})();
(function() {
    var b, a = !!window.addEventListener;
    Element.NativeEvents.focusin = Element.NativeEvents.focusout = 2;
    var c = function(a, b, c, d, e) {
        for (; e && e != a; ) {
            if (b(e, d))
                return c.call(e, d, e);
            e = document.id(e.parentNode)
        }
    }, d = {mouseenter: {base: "mouseover"}, mouseleave: {base: "mouseout"}, focus: {base: "focus" + (a ? "" : "in"), capture: true}, blur: {base: a ? "blur" : "focusout", capture: true}}, e = function(a) {
        return{base: "focusin", remove: function(b, c) {
                var d = b.retrieve("$delegation:" + a + "listeners", {})[c];
                if (d && d.forms)
                    for (var e = d.forms.length; e--; )
                        d.forms[e].removeEvent(a, d.fns[e])
            }, listen: function(b, d, e, f, g, i) {
                if (f = g.get("tag") == "form" ? g : f.target.getParent("form")) {
                    var r = b.retrieve("$delegation:" + a + "listeners", {}), w = r[i] || {forms: [], fns: []}, l = w.forms, s = w.fns;
                    if (l.indexOf(f) == -1) {
                        l.push(f);
                        l = function(a) {
                            c(b, d, e, a, g)
                        };
                        f.addEvent(a, l);
                        s.push(l);
                        r[i] = w;
                        b.store("$delegation:" + a + "listeners", r)
                    }
                }
            }}
    }, f = function(a) {
        return{base: "focusin", listen: function(b, d, e, f, g) {
                var i = {blur: function() {
                        this.removeEvents(i)
                    }};
                i[a] = function(a) {
                    c(b, d, e, a, g)
                };
                f.target.addEvents(i)
            }}
    };
    a || Object.append(d, {submit: e("submit"), reset: e("reset"), change: f("change"), select: f("select")});
    var a = Element.prototype, g = a.addEvent, i = a.removeEvent, a = function(a, b) {
        return function(c, d, e) {
            if (c.indexOf(":relay") == -1)
                return a.call(this, c, d, e);
            var f = Slick.parse(c).expressions[0][0];
            if (f.pseudos[0].key != "relay")
                return a.call(this, c, d, e);
            var g = f.tag;
            f.pseudos.slice(1).each(function(a) {
                g = g + (":" + a.key + (a.value ? "(" + a.value + ")" : ""))
            });
            a.call(this, c, d);
            return b.call(this, g, f.pseudos[0].value, d)
        }
    };
    b = function(a, c, e, f) {
        var g = this.retrieve("$delegates", {}), q = g[a];
        if (!q)
            return this;
        if (f) {
            var c = a, e = q[f].delegator, u = d[a] || {}, a = u.base || c;
            u.remove && u.remove(this, f);
            delete q[f];
            g[c] = q;
            return i.call(this, a, e)
        }
        if (e)
            for (u in q) {
                f = q[u];
                if (f.match == c && f.fn == e)
                    return b.call(this, a, c, e, u)
            }
        else
            for (u in q) {
                f = q[u];
                f.match == c && b.call(this, a, c, f.fn, u)
            }
        return this
    };
    [Element, Window, Document].invoke("implement", {addEvent: a(g, function(a, b, e) {
            var f = this.retrieve("$delegates", {}), i = f[a];
            if (i)
                for (var q in i)
                    if (i[q].fn == e && i[q].match == b)
                        return this;
            q = a;
            var u = b, r = d[a] || {}, a = r.base || q, b = function(a) {
                return Slick.match(a, u)
            }, w = Element.Events[q];
            if (w && w.condition)
                var l = b, s = w.condition, b = function(b, c) {
                return l(b, c) && s.call(b, c, a)
            };
            var p = this, n = String.uniqueID(), w = r.listen ? function(a, c) {
                if (!c && a && a.target)
                    c = a.target;
                c && r.listen(p, b, e, a, c, n)
            } : function(a, d) {
                if (!d && a && a.target)
                    d = a.target;
                d && c(p, b, e, a, d)
            };
            i || (i = {});
            i[n] = {match: u, fn: e, delegator: w};
            f[q] = i;
            return g.call(this, a, w, r.capture)
        }), removeEvent: a(i, b)})
})();
(function() {
    function b(a) {
        return h(a, "-moz-box-sizing") == "border-box"
    }
    function a(a) {
        return h(a, "border-top-width").toInt() || 0
    }
    function c(a) {
        return h(a, "border-left-width").toInt() || 0
    }
    function d(a) {
        return/^(?:body|html)$/i.test(a.tagName)
    }
    function e(a) {
        a = a.getDocument();
        return!a.compatMode || a.compatMode == "CSS1Compat" ? a.html : a.body
    }
    var f = document.createElement("div"), g = document.createElement("div");
    f.style.height = "0";
    f.appendChild(g);
    var i = g.offsetParent === f, f = g = null, j = function(a) {
        return h(a, "position") != "static" || d(a)
    }, m = function(a) {
        return j(a) || /^(?:table|td|th)$/i.test(a.tagName)
    };
    Element.implement({scrollTo: function(a, b) {
            if (d(this))
                this.getWindow().scrollTo(a, b);
            else {
                this.scrollLeft = a;
                this.scrollTop = b
            }
            return this
        }, getSize: function() {
            return d(this) ? this.getWindow().getSize() : {x: this.offsetWidth, y: this.offsetHeight}
        }, getScrollSize: function() {
            return d(this) ? this.getWindow().getScrollSize() : {x: this.scrollWidth, y: this.scrollHeight}
        }, getScroll: function() {
            return d(this) ? this.getWindow().getScroll() : {x: this.scrollLeft, y: this.scrollTop}
        }, getScrolls: function() {
            for (var a = this.parentNode, b = {x: 0, y: 0}; a && !d(a); ) {
                b.x = b.x + a.scrollLeft;
                b.y = b.y + a.scrollTop;
                a = a.parentNode
            }
            return b
        }, getOffsetParent: i ? function() {
            var a = this;
            if (d(a) || h(a, "position") == "fixed")
                return null;
            for (var b = h(a, "position") == "static" ? m : j; a = a.parentNode; )
                if (b(a))
                    return a;
            return null
        } : function() {
            if (d(this) || h(this, "position") == "fixed")
                return null;
            try {
                return this.offsetParent
            } catch (a) {
            }
            return null
        }, getOffsets: function() {
            if (this.getBoundingClientRect && !Browser.Platform.ios) {
                var e = this.getBoundingClientRect(), f = document.id(this.getDocument().documentElement), g = f.getScroll(), i = this.getScrolls(), j = h(this, "position") == "fixed";
                return{x: e.left.toInt() + i.x + (j ? 0 : g.x) - f.clientLeft, y: e.top.toInt() + i.y + (j ? 0 : g.y) - f.clientTop}
            }
            e = this;
            f = {x: 0, y: 0};
            if (d(this))
                return f;
            for (; e && !d(e); ) {
                f.x = f.x + e.offsetLeft;
                f.y = f.y + e.offsetTop;
                if (Browser.firefox) {
                    if (!b(e)) {
                        f.x = f.x + c(e);
                        f.y = f.y + a(e)
                    }
                    if ((g = e.parentNode) && h(g, "overflow") != "visible") {
                        f.x = f.x + c(g);
                        f.y = f.y + a(g)
                    }
                } else if (e != this && Browser.safari) {
                    f.x = f.x + c(e);
                    f.y = f.y + a(e)
                }
                e = e.offsetParent
            }
            if (Browser.firefox && !b(this)) {
                f.x = f.x - c(this);
                f.y = f.y - a(this)
            }
            return f
        }, getPosition: function(b) {
            var d = this.getOffsets(), e = this.getScrolls(), d = {x: d.x - e.x, y: d.y - e.y};
            if (b && (b = document.id(b))) {
                e = b.getPosition();
                return{x: d.x - e.x - c(b), y: d.y - e.y - a(b)}
            }
            return d
        }, getCoordinates: function(a) {
            if (d(this))
                return this.getWindow().getCoordinates();
            var a = this.getPosition(a), b = this.getSize(), a = {left: a.x, top: a.y, width: b.x, height: b.y};
            a.right = a.left + a.width;
            a.bottom = a.top + a.height;
            return a
        }, computePosition: function(a) {
            return{left: a.x - (h(this, "margin-left").toInt() || 0), top: a.y - (h(this, "margin-top").toInt() || 0)}
        }, setPosition: function(a) {
            return this.setStyles(this.computePosition(a))
        }});
    [Document, Window].invoke("implement", {getSize: function() {
            var a = e(this);
            return{x: a.clientWidth, y: a.clientHeight}
        }, getScroll: function() {
            var a = this.getWindow(), b = e(this);
            return{x: a.pageXOffset || b.scrollLeft, y: a.pageYOffset || b.scrollTop}
        }, getScrollSize: function() {
            var a = e(this), b = this.getSize(), c = this.getDocument().body;
            return{x: Math.max(a.scrollWidth, c.scrollWidth, b.x), y: Math.max(a.scrollHeight, c.scrollHeight, b.y)}
        }, getPosition: function() {
            return{x: 0, y: 0}
        }, getCoordinates: function() {
            var a = this.getSize();
            return{top: 0, left: 0, bottom: a.y, right: a.x, height: a.y, width: a.x}
        }});
    var h = Element.getComputedStyle
})();
Element.alias({position: "setPosition"});
[Window, Document, Element].invoke("implement", {getHeight: function() {
        return this.getSize().y
    }, getWidth: function() {
        return this.getSize().x
    }, getScrollTop: function() {
        return this.getScroll().y
    }, getScrollLeft: function() {
        return this.getScroll().x
    }, getScrollHeight: function() {
        return this.getScrollSize().y
    }, getScrollWidth: function() {
        return this.getScrollSize().x
    }, getTop: function() {
        return this.getPosition().y
    }, getLeft: function() {
        return this.getPosition().x
    }});
(function() {
    var b = this.Fx = new Class({Implements: [Chain, Events, Options], options: {fps: 60, unit: false, duration: 500, frames: null, frameSkip: true, link: "ignore"}, initialize: function(a) {
            this.subject = this.subject || this;
            this.setOptions(a)
        }, getTransition: function() {
            return function(a) {
                return-(Math.cos(Math.PI * a) - 1) / 2
            }
        }, step: function(a) {
            if (this.options.frameSkip) {
                var b = (this.time != null ? a - this.time : 0) / this.frameInterval;
                this.time = a;
                this.frame = this.frame + b
            } else
                this.frame++;
            if (this.frame < this.frames)
                this.set(this.compute(this.from, this.to, this.transition(this.frame / this.frames)));
            else {
                this.frame = this.frames;
                this.set(this.compute(this.from, this.to, 1));
                this.stop()
            }
        }, set: function(a) {
            return a
        }, compute: function(a, c, d) {
            return b.compute(a, c, d)
        }, check: function() {
            if (!this.isRunning())
                return true;
            switch (this.options.link) {
                case"cancel":
                    this.cancel();
                    return true;
                case"chain":
                    this.chain(this.caller.pass(arguments, this))
            }
            return false
        }, start: function(a, c) {
            if (!this.check(a, c))
                return this;
            this.from = a;
            this.to = c;
            this.frame = this.options.frameSkip ? 0 : -1;
            this.time = null;
            this.transition = this.getTransition();
            var d = this.options.frames, f = this.options.fps, h = this.options.duration;
            this.duration = b.Durations[h] || h.toInt();
            this.frameInterval = 1E3 / f;
            this.frames = d || Math.round(this.duration / this.frameInterval);
            this.fireEvent("start", this.subject);
            e.call(this, f);
            return this
        }, stop: function() {
            if (this.isRunning()) {
                this.time = null;
                f.call(this, this.options.fps);
                if (this.frames == this.frame) {
                    this.fireEvent("complete", this.subject);
                    this.callChain() || this.fireEvent("chainComplete", this.subject)
                } else
                    this.fireEvent("stop", this.subject)
            }
            return this
        }, cancel: function() {
            if (this.isRunning()) {
                this.time = null;
                f.call(this, this.options.fps);
                this.frame = this.frames;
                this.fireEvent("cancel", this.subject).clearChain()
            }
            return this
        }, pause: function() {
            if (this.isRunning()) {
                this.time = null;
                f.call(this, this.options.fps)
            }
            return this
        }, resume: function() {
            this.frame < this.frames && !this.isRunning() && e.call(this, this.options.fps);
            return this
        }, isRunning: function() {
            var b = a[this.options.fps];
            return b && b.contains(this)
        }});
    b.compute = function(a, b, c) {
        return(b - a) * c + a
    };
    b.Durations = {"short": 250, normal: 500, "long": 1E3};
    var a = {}, c = {}, d = function() {
        for (var a = Date.now(), b = this.length; b--; ) {
            var c = this[b];
            c && c.step(a)
        }
    }, e = function(b) {
        var e = a[b] || (a[b] = []);
        e.push(this);
        c[b] || (c[b] = d.periodical(Math.round(1E3 / b), e))
    }, f = function(b) {
        var d = a[b];
        if (d) {
            d.erase(this);
            if (!d.length && c[b]) {
                delete a[b];
                c[b] = clearInterval(c[b])
            }
        }
    }
})();
Fx.CSS = new Class({Extends: Fx, prepare: function(b, a, c) {
        var c = Array.from(c), d = c[0], c = c[1];
        if (c == null) {
            var c = d, d = b.getStyle(a), e = this.options.unit;
            if (e && d.slice(-e.length) != e && parseFloat(d) != 0) {
                b.setStyle(a, c + e);
                var f = b.getComputedStyle(a);
                if (!/px$/.test(f)) {
                    f = b.style[("pixel-" + a).camelCase()];
                    if (f == null) {
                        var g = b.style.left;
                        b.style.left = c + e;
                        f = b.style.pixelLeft;
                        b.style.left = g
                    }
                }
                d = (c || 1) / (parseFloat(f) || 1) * (parseFloat(d) || 0);
                b.setStyle(a, d + e)
            }
        }
        return{from: this.parse(d), to: this.parse(c)}
    }, parse: function(b) {
        b = Function.from(b)();
        b = typeof b == "string" ? b.split(" ") : Array.from(b);
        return b.map(function(a) {
            var a = "" + a, b = false;
            Object.each(Fx.CSS.Parsers, function(d) {
                if (!b) {
                    var e = d.parse(a);
                    if (e || e === 0)
                        b = {value: e, parser: d}
                }
            });
            return b = b || {value: a, parser: Fx.CSS.Parsers.String}
        })
    }, compute: function(b, a, c) {
        var d = [];
        Math.min(b.length, a.length).times(function(e) {
            d.push({value: b[e].parser.compute(b[e].value, a[e].value, c), parser: b[e].parser})
        });
        d.$family = Function.from("fx:css:value");
        return d
    }, serve: function(b, a) {
        typeOf(b) != "fx:css:value" && (b = this.parse(b));
        var c = [];
        b.each(function(b) {
            c = c.concat(b.parser.serve(b.value, a))
        });
        return c
    }, render: function(b, a, c, d) {
        b.setStyle(a, this.serve(c, d))
    }, search: function(b) {
        if (Fx.CSS.Cache[b])
            return Fx.CSS.Cache[b];
        var a = {}, c = RegExp("^" + b.escapeRegExp() + "$");
        Array.each(document.styleSheets, function(b) {
            var e = b.href;
            if (!e || !e.contains("://") || e.contains(document.domain))
                Array.each(b.rules || b.cssRules, function(b) {
                    if (b.style) {
                        var d = b.selectorText ? b.selectorText.replace(/^\w+/, function(a) {
                            return a.toLowerCase()
                        }) : null;
                        d && c.test(d) && Object.each(Element.Styles, function(c, d) {
                            if (b.style[d] && !Element.ShortStyles[d]) {
                                c = "" + b.style[d];
                                a[d] = /^rgb/.test(c) ? c.rgbToHex() : c
                            }
                        })
                    }
                })
        });
        return Fx.CSS.Cache[b] = a
    }});
Fx.CSS.Cache = {};
Fx.CSS.Parsers = {Color: {parse: function(b) {
            return b.match(/^#[0-9a-f]{3,6}$/i) ? b.hexToRgb(true) : (b = b.match(/(\d+),\s*(\d+),\s*(\d+)/)) ? [b[1], b[2], b[3]] : false
        }, compute: function(b, a, c) {
            return b.map(function(d, e) {
                return Math.round(Fx.compute(b[e], a[e], c))
            })
        }, serve: function(b) {
            return b.map(Number)
        }}, Number: {parse: parseFloat, compute: Fx.compute, serve: function(b, a) {
            return a ? b + a : b
        }}, String: {parse: Function.from(!1), compute: function(b, a) {
            return a
        }, serve: function(b) {
            return b
        }}};
Fx.Tween = new Class({Extends: Fx.CSS, initialize: function(b, a) {
        this.element = this.subject = document.id(b);
        this.parent(a)
    }, set: function(b, a) {
        if (arguments.length == 1) {
            a = b;
            b = this.property || this.options.property
        }
        this.render(this.element, b, a, this.options.unit);
        return this
    }, start: function(b, a, c) {
        if (!this.check(b, a, c))
            return this;
        var d = Array.flatten(arguments);
        this.property = this.options.property || d.shift();
        d = this.prepare(this.element, this.property, d);
        return this.parent(d.from, d.to)
    }});
Element.Properties.tween = {set: function(b) {
        this.get("tween").cancel().setOptions(b);
        return this
    }, get: function() {
        var b = this.retrieve("tween");
        if (!b) {
            b = new Fx.Tween(this, {link: "cancel"});
            this.store("tween", b)
        }
        return b
    }};
Element.implement({tween: function(b, a, c) {
        this.get("tween").start(b, a, c);
        return this
    }, fade: function(b) {
        var a = this.get("tween"), c, d = ["opacity"].append(arguments), e;
        d[1] == null && (d[1] = "toggle");
        switch (d[1]) {
            case"in":
                c = "start";
                d[1] = 1;
                break;
            case"out":
                c = "start";
                d[1] = 0;
                break;
            case"show":
                c = "set";
                d[1] = 1;
                break;
            case"hide":
                c = "set";
                d[1] = 0;
                break;
            case"toggle":
                e = this.retrieve("fade:flag", this.getStyle("opacity") == 1);
                c = "start";
                d[1] = e ? 0 : 1;
                this.store("fade:flag", !e);
                e = true;
                break;
            default:
                c = "start"
        }
        e || this.eliminate("fade:flag");
        a[c].apply(a, d);
        d = d[d.length - 1];
        c == "set" || d != 0 ? this.setStyle("visibility", d == 0 ? "hidden" : "visible") : a.chain(function() {
            this.element.setStyle("visibility", "hidden");
            this.callChain()
        });
        return this
    }, highlight: function(b, a) {
        if (!a) {
            a = this.retrieve("highlight:original", this.getStyle("background-color"));
            a = a == "transparent" ? "#fff" : a
        }
        var c = this.get("tween");
        c.start("background-color", b || "#ffff88", a).chain(function() {
            this.setStyle("background-color", this.retrieve("highlight:original"));
            c.callChain()
        }.bind(this));
        return this
    }});
Fx.Morph = new Class({Extends: Fx.CSS, initialize: function(b, a) {
        this.element = this.subject = document.id(b);
        this.parent(a)
    }, set: function(b) {
        typeof b == "string" && (b = this.search(b));
        for (var a in b)
            this.render(this.element, a, b[a], this.options.unit);
        return this
    }, compute: function(b, a, c) {
        var d = {}, e;
        for (e in b)
            d[e] = this.parent(b[e], a[e], c);
        return d
    }, start: function(b) {
        if (!this.check(b))
            return this;
        typeof b == "string" && (b = this.search(b));
        var a = {}, c = {}, d;
        for (d in b) {
            var e = this.prepare(this.element, d, b[d]);
            a[d] = e.from;
            c[d] = e.to
        }
        return this.parent(a, c)
    }});
Element.Properties.morph = {set: function(b) {
        this.get("morph").cancel().setOptions(b);
        return this
    }, get: function() {
        var b = this.retrieve("morph");
        if (!b) {
            b = new Fx.Morph(this, {link: "cancel"});
            this.store("morph", b)
        }
        return b
    }};
Element.implement({morph: function(b) {
        this.get("morph").start(b);
        return this
    }});
Fx.implement({getTransition: function() {
        var b = this.options.transition || Fx.Transitions.Sine.easeInOut;
        if (typeof b == "string") {
            var a = b.split(":"), b = Fx.Transitions, b = b[a[0]] || b[a[0].capitalize()];
            a[1] && (b = b["ease" + a[1].capitalize() + (a[2] ? a[2].capitalize() : "")])
        }
        return b
    }});
Fx.Transition = function(b, a) {
    var a = Array.from(a), c = function(c) {
        return b(c, a)
    };
    return Object.append(c, {easeIn: c, easeOut: function(c) {
            return 1 - b(1 - c, a)
        }, easeInOut: function(c) {
            return(c <= 0.5 ? b(2 * c, a) : 2 - b(2 * (1 - c), a)) / 2
        }})
};
Fx.Transitions = {linear: function(b) {
        return b
    }};
Fx.Transitions.extend = function(b) {
    for (var a in b)
        Fx.Transitions[a] = new Fx.Transition(b[a])
};
Fx.Transitions.extend({Pow: function(b, a) {
        return Math.pow(b, a && a[0] || 6)
    }, Expo: function(b) {
        return Math.pow(2, 8 * (b - 1))
    }, Circ: function(b) {
        return 1 - Math.sin(Math.acos(b))
    }, Sine: function(b) {
        return 1 - Math.cos(b * Math.PI / 2)
    }, Back: function(b, a) {
        a = a && a[0] || 1.618;
        return Math.pow(b, 2) * ((a + 1) * b - a)
    }, Bounce: function(b) {
        for (var a, c = 0, d = 1; ; c = c + d, d = d / 2)
            if (b >= (7 - 4 * c) / 11) {
                a = d * d - Math.pow((11 - 6 * c - 11 * b) / 4, 2);
                break
            }
        return a
    }, Elastic: function(b, a) {
        return Math.pow(2, 10 * --b) * Math.cos(20 * b * Math.PI * (a && a[0] || 1) / 3)
    }});
["Quad", "Cubic", "Quart", "Quint"].each(function(b, a) {
    Fx.Transitions[b] = new Fx.Transition(function(b) {
        return Math.pow(b, a + 2)
    })
});
(function() {
    var b = function() {
    }, a = "onprogress"in new Browser.Request, c = this.Request = new Class({Implements: [Chain, Events, Options], options: {url: "", data: "", headers: {"X-Requested-With": "XMLHttpRequest", Accept: "text/javascript, text/html, application/xml, text/xml, */*"}, async: true, format: false, method: "post", link: "ignore", isSuccess: null, emulation: true, urlEncoded: true, encoding: "utf-8", evalScripts: false, evalResponse: false, timeout: 0, noCache: false}, initialize: function(a) {
            this.xhr = new Browser.Request;
            this.setOptions(a);
            this.headers = this.options.headers
        }, onStateChange: function() {
            var c = this.xhr;
            if (c.readyState == 4 && this.running) {
                this.running = false;
                this.status = 0;
                Function.attempt(function() {
                    var a = c.status;
                    this.status = a == 1223 ? 204 : a
                }.bind(this));
                c.onreadystatechange = b;
                if (a)
                    c.onprogress = c.onloadstart = b;
                clearTimeout(this.timer);
                this.response = {text: this.xhr.responseText || "", xml: this.xhr.responseXML};
                this.options.isSuccess.call(this, this.status) ? this.success(this.response.text, this.response.xml) : this.failure()
            }
        }, isSuccess: function() {
            var a = this.status;
            return a >= 200 && a < 300
        }, isRunning: function() {
            return!!this.running
        }, processScripts: function(a) {
            return this.options.evalResponse || /(ecma|java)script/.test(this.getHeader("Content-type")) ? Browser.exec(a) : a.stripScripts(this.options.evalScripts)
        }, success: function(a, b) {
            this.onSuccess(this.processScripts(a), b)
        }, onSuccess: function() {
            this.fireEvent("complete", arguments).fireEvent("success", arguments).callChain()
        }, failure: function() {
            this.onFailure()
        }, onFailure: function() {
            this.fireEvent("complete").fireEvent("failure", this.xhr)
        }, loadstart: function(a) {
            this.fireEvent("loadstart", [a, this.xhr])
        }, progress: function(a) {
            this.fireEvent("progress", [a, this.xhr])
        }, timeout: function() {
            this.fireEvent("timeout", this.xhr)
        }, setHeader: function(a, b) {
            this.headers[a] = b;
            return this
        }, getHeader: function(a) {
            return Function.attempt(function() {
                return this.xhr.getResponseHeader(a)
            }.bind(this))
        }, check: function() {
            if (!this.running)
                return true;
            switch (this.options.link) {
                case"cancel":
                    this.cancel();
                    return true;
                case"chain":
                    this.chain(this.caller.pass(arguments, this))
            }
            return false
        }, send: function(b) {
            if (!this.check(b))
                return this;
            this.options.isSuccess = this.options.isSuccess || this.isSuccess;
            this.running = true;
            var c = typeOf(b);
            if (c == "string" || c == "element")
                b = {data: b};
            var c = this.options, b = Object.append({data: c.data, url: c.url, method: c.method}, b), c = b.data, d = "" + b.url, b = b.method.toLowerCase();
            switch (typeOf(c)) {
                case"element":
                    c = document.id(c).toQueryString();
                    break;
                case"object":
                case"hash":
                    c = Object.toQueryString(c)
            }
            if (this.options.format)
                var i = "format=" + this.options.format, c = c ? i + "&" + c : i;
            if (this.options.emulation && !["get", "post"].contains(b)) {
                b = "_method=" + b;
                c = c ? b + "&" + c : b;
                b = "post"
            }
            this.options.urlEncoded && ["post", "put"].contains(b) && (this.headers["Content-type"] = "application/x-www-form-urlencoded" + (this.options.encoding ? "; charset=" + this.options.encoding : ""));
            if (!d)
                d = document.location.pathname;
            i = d.lastIndexOf("/");
            if (i > -1 && (i = d.indexOf("#")) > -1)
                d = d.substr(0, i);
            this.options.noCache && (d = d + ((d.contains("?") ? "&" : "?") + String.uniqueID()));
            if (c && b == "get") {
                d = d + ((d.contains("?") ? "&" : "?") + c);
                c = null
            }
            var j = this.xhr;
            if (a) {
                j.onloadstart = this.loadstart.bind(this);
                j.onprogress = this.progress.bind(this)
            }
            j.open(b.toUpperCase(), d, this.options.async, this.options.user, this.options.password);
            if (this.options.user && "withCredentials"in j)
                j.withCredentials = true;
            j.onreadystatechange = this.onStateChange.bind(this);
            Object.each(this.headers, function(a, b) {
                try {
                    j.setRequestHeader(b, a)
                } catch (c) {
                    this.fireEvent("exception", [b, a])
                }
            }, this);
            this.fireEvent("request");
            j.send(c);
            if (this.options.async) {
                if (this.options.timeout)
                    this.timer = this.timeout.delay(this.options.timeout, this)
            } else
                this.onStateChange();
            return this
        }, cancel: function() {
            if (!this.running)
                return this;
            this.running = false;
            var c = this.xhr;
            c.abort();
            clearTimeout(this.timer);
            c.onreadystatechange = b;
            if (a)
                c.onprogress = c.onloadstart = b;
            this.xhr = new Browser.Request;
            this.fireEvent("cancel");
            return this
        }}), d = {};
    ["get", "post", "put", "delete", "GET", "POST", "PUT", "DELETE"].each(function(a) {
        d[a] = function(b) {
            var c = {method: a};
            if (b != null)
                c.data = b;
            return this.send(c)
        }
    });
    c.implement(d);
    Element.Properties.send = {set: function(a) {
            this.get("send").cancel().setOptions(a);
            return this
        }, get: function() {
            var a = this.retrieve("send");
            if (!a) {
                a = new c({data: this, link: "cancel", method: this.get("method") || "post", url: this.get("action")});
                this.store("send", a)
            }
            return a
        }};
    Element.implement({send: function(a) {
            var b = this.get("send");
            b.send({data: this, url: a || b.options.url});
            return this
        }})
})();
Request.HTML = new Class({Extends: Request, options: {update: !1, append: !1, evalScripts: !0, filter: !1, headers: {Accept: "text/html, application/xml, text/xml, */*"}}, success: function(b) {
        var a = this.options, c = this.response;
        c.html = b.stripScripts(function(a) {
            c.javascript = a
        });
        if (b = c.html.match(/<body[^>]*>([\s\S]*?)<\/body>/i))
            c.html = b[1];
        b = (new Element("div")).set("html", c.html);
        c.tree = b.childNodes;
        c.elements = b.getElements(a.filter || "*");
        if (a.filter)
            c.tree = c.elements;
        if (a.update) {
            b = document.id(a.update).empty();
            a.filter ? b.adopt(c.elements) : b.set("html", c.html)
        } else if (a.append) {
            var d = document.id(a.append);
            a.filter ? c.elements.reverse().inject(d) : d.adopt(b.getChildren())
        }
        a.evalScripts && Browser.exec(c.javascript);
        this.onSuccess(c.tree, c.elements, c.html, c.javascript)
    }});
Element.Properties.load = {set: function(b) {
        this.get("load").cancel().setOptions(b);
        return this
    }, get: function() {
        var b = this.retrieve("load");
        if (!b) {
            b = new Request.HTML({data: this, link: "cancel", update: this, method: "get"});
            this.store("load", b)
        }
        return b
    }};
Element.implement({load: function() {
        this.get("load").send(Array.link(arguments, {data: Type.isObject, url: Type.isString}));
        return this
    }});
"undefined" == typeof JSON && (this.JSON = {});
(function() {
    var b = {"\u0008": "\\b", "\t": "\\t", "\n": "\\n", "\u000c": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"}, a = function(a) {
        return b[a] || "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
    };
    JSON.validate = function(a) {
        a = a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "");
        return/^[\],:{}\s]*$/.test(a)
    };
    JSON.encode = JSON.stringify ? function(a) {
        return JSON.stringify(a)
    } : function(b) {
        b && b.toJSON && (b = b.toJSON());
        switch (typeOf(b)) {
            case"string":
                return'"' + b.replace(/[\x00-\x1f\\"]/g, a) + '"';
            case"array":
                return"[" + b.map(JSON.encode).clean() + "]";
            case"object":
            case"hash":
                var d = [];
                Object.each(b, function(a, b) {
                    var c = JSON.encode(a);
                    c && d.push(JSON.encode(b) + ":" + c)
                });
                return"{" + d + "}";
            case"number":
            case"boolean":
                return"" + b;
            case"null":
                return"null"
        }
        return null
    };
    JSON.decode = function(a, b) {
        if (!a || typeOf(a) != "string")
            return null;
        if (b || JSON.secure) {
            if (JSON.parse)
                return JSON.parse(a);
            if (!JSON.validate(a))
                throw Error("JSON could not decode the input; security is enabled and the value is not secure.");
        }
        return eval("(" + a + ")")
    }
})();
Request.JSON = new Class({Extends: Request, options: {secure: !0}, initialize: function(b) {
        this.parent(b);
        Object.append(this.headers, {Accept: "application/json", "X-Request": "JSON"})
    }, success: function(b) {
        var a;
        try {
            a = this.response.json = JSON.decode(b, this.options.secure)
        } catch (c) {
            this.fireEvent("error", [b, c]);
            return
        }
        if (a == null)
            this.onFailure();
        else
            this.onSuccess(a, b)
    }});
var Cookie = new Class({Implements: Options, options: {path: "/", domain: !1, duration: !1, secure: !1, document: document, encode: !0}, initialize: function(b, a) {
        this.key = b;
        this.setOptions(a)
    }, write: function(b) {
        this.options.encode && (b = encodeURIComponent(b));
        this.options.domain && (b = b + ("; domain=" + this.options.domain));
        this.options.path && (b = b + ("; path=" + this.options.path));
        if (this.options.duration) {
            var a = new Date;
            a.setTime(a.getTime() + this.options.duration * 864E5);
            b = b + ("; expires=" + a.toGMTString())
        }
        this.options.secure && (b = b + "; secure");
        this.options.document.cookie = this.key + "=" + b;
        return this
    }, read: function() {
        var b = this.options.document.cookie.match("(?:^|;)\\s*" + this.key.escapeRegExp() + "=([^;]*)");
        return b ? decodeURIComponent(b[1]) : null
    }, dispose: function() {
        (new Cookie(this.key, Object.merge({}, this.options, {duration: -1}))).write("");
        return this
    }});
Cookie.write = function(b, a, c) {
    return(new Cookie(b, c)).write(a)
};
Cookie.read = function(b) {
    return(new Cookie(b)).read()
};
Cookie.dispose = function(b, a) {
    return(new Cookie(b, a)).dispose()
};
(function(b, a) {
    var c, d, e = [], f, g, i = a.createElement("div"), j = function() {
        clearTimeout(g);
        if (!c) {
            Browser.loaded = c = true;
            a.removeListener("DOMContentLoaded", j).removeListener("readystatechange", m);
            a.fireEvent("domready");
            b.fireEvent("domready")
        }
    }, m = function() {
        for (var a = e.length; a--; )
            if (e[a]()) {
                j();
                return true
            }
        return false
    }, h = function() {
        clearTimeout(g);
        m() || (g = setTimeout(h, 10))
    };
    a.addListener("DOMContentLoaded", j);
    var k = function() {
        try {
            i.doScroll();
            return true
        } catch (a) {
        }
        return false
    };
    if (i.doScroll && !k()) {
        e.push(k);
        f = true
    }
    a.readyState && e.push(function() {
        var b = a.readyState;
        return b == "loaded" || b == "complete"
    });
    "onreadystatechange"in a ? a.addListener("readystatechange", m) : f = true;
    f && h();
    Element.Events.domready = {onAdd: function(a) {
            c && a.call(this)
        }};
    Element.Events.load = {base: "load", onAdd: function(a) {
            d && this == b && a.call(this)
        }, condition: function() {
            if (this == b) {
                j();
                delete Element.Events.load
            }
            return true
        }};
    b.addEvent("load", function() {
        d = true
    })
})(window, document);
(function() {
    var b = this.Swiff = new Class({Implements: Options, options: {id: null, height: 1, width: 1, container: null, properties: {}, params: {quality: "high", allowScriptAccess: "always", wMode: "window", swLiveConnect: true}, callBacks: {}, vars: {}}, toElement: function() {
            return this.object
        }, initialize: function(a, c) {
            this.instance = "Swiff_" + String.uniqueID();
            this.setOptions(c);
            var c = this.options, d = this.id = c.id || this.instance, e = document.id(c.container);
            b.CallBacks[this.instance] = {};
            var f = c.params, g = c.vars, i = c.callBacks, j = Object.append({height: c.height, width: c.width}, c.properties), m = this, h;
            for (h in i) {
                b.CallBacks[this.instance][h] = function(a) {
                    return function() {
                        return a.apply(m.object, arguments)
                    }
                }(i[h]);
                g[h] = "Swiff.CallBacks." + this.instance + "." + h
            }
            f.flashVars = Object.toQueryString(g);
            if (Browser.ie) {
                j.classid = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";
                f.movie = a
            } else
                j.type = "application/x-shockwave-flash";
            j.data = a;
            var d = '<object id="' + d + '"', k;
            for (k in j)
                d = d + (" " + k + '="' + j[k] + '"');
            var d = d + ">", o;
            for (o in f)
                f[o] && (d = d + ('<param name="' +
                        o + '" value="' + f[o] + '" />'));
            this.object = (e ? e.empty() : new Element("div")).set("html", d + "</object>").firstChild
        }, replaces: function(a) {
            a = document.id(a, true);
            a.parentNode.replaceChild(this.toElement(), a);
            return this
        }, inject: function(a) {
            document.id(a, true).appendChild(this.toElement());
            return this
        }, remote: function() {
            return b.remote.apply(b, [this.toElement()].append(arguments))
        }});
    b.CallBacks = {};
    b.remote = function(a, b) {
        var d = a.CallFunction('<invoke name="' + b + '" returntype="javascript">' + __flash__argumentsToXML(arguments, 2) + "</invoke>");
        return eval(d)
    }
})();


/*===============================
 /media/system/js/core.js
 ================================================================================*/;
if ("undefined" === typeof Joomla)
    var Joomla = {};
Joomla.editors = {};
Joomla.editors.instances = {};
Joomla.submitform = function(a, b) {
    "undefined" === typeof b && (b = document.getElementById("adminForm"));
    "undefined" !== typeof a && "" !== a && (b.task.value = a);
    if ("function" == typeof b.onsubmit)
        b.onsubmit();
    "function" == typeof b.fireEvent && b.fireEvent("submit");
    b.submit()
};
Joomla.submitbutton = function(a) {
    Joomla.submitform(a)
};
Joomla.JText = {strings: {}, _: function(a, b) {
        return"undefined" !== typeof this.strings[a.toUpperCase()] ? this.strings[a.toUpperCase()] : b
    }, load: function(a) {
        for (var b in a)
            this.strings[b.toUpperCase()] = a[b];
        return this
    }};
Joomla.replaceTokens = function(a) {
    for (var b = document.getElementsByTagName("input"), c = 0; c < b.length; c++)
        "hidden" == b[c].type && 32 == b[c].name.length && "1" == b[c].value && (b[c].name = a)
};
Joomla.isEmail = function(a) {
    return/^[\w-_.]*[\w-_.]@[\w].+[\w]+[\w]$/.test(a)
};
Joomla.checkAll = function(a, b) {
    b || (b = "cb");
    if (a.form) {
        for (var c = 0, d = 0, f = a.form.elements.length; d < f; d++) {
            var e = a.form.elements[d];
            if (e.type == a.type && (b && 0 == e.id.indexOf(b) || !b))
                e.checked = a.checked, c += !0 == e.checked ? 1 : 0
        }
        a.form.boxchecked && (a.form.boxchecked.value = c);
        return!0
    }
    return!1
};
Joomla.renderMessages = function(i) {
    Joomla.removeMessages();
    var j = document.id('system-message-container');
    Object.each(i, function(d, e) {
        var f = new Element('div', {id: 'system-message', 'class': 'alert alert-' + e});
        f.inject(j);
        var g = new Element('h4', {'class': 'alert-heading', html: Joomla.JText._(e)});
        g.inject(f);
        var h = new Element('div');
        Array.each(d, function(a, b, c) {
            var p = new Element('p', {html: a});
            p.inject(h)
        }, this);
        h.inject(f)
    }, this)
};
Joomla.removeMessages = function() {
    $$("#system-message-container > *").destroy()
};
Joomla.isChecked = function(a, b) {
    "undefined" === typeof b && (b = document.getElementById("adminForm"));
    !0 == a ? b.boxchecked.value++ : b.boxchecked.value--
};
Joomla.popupWindow = function(a, b, c, d, f) {
    window.open(a, b, "height=" + d + ",width=" + c + ",top=" + (screen.height - d) / 2 + ",left=" + (screen.width - c) / 2 + ",scrollbars=" + f + ",resizable").window.focus()
};
Joomla.tableOrdering = function(a, b, c, d) {
    "undefined" === typeof d && (d = document.getElementById("adminForm"));
    d.filter_order.value = a;
    d.filter_order_Dir.value = b;
    Joomla.submitform(c, d)
};
function writeDynaList(a, b, c, d, f) {
    var a = "\n\t<select " + a + ">", e = 0;
    for (x in b) {
        if (b[x][0] == c) {
            var g = "";
            if (d == c && f == b[x][1] || 0 == e && d != c)
                g = 'selected="selected"';
            a += '\n\t\t<option value="' + b[x][1] + '" ' + g + ">" + b[x][2] + "</option>"
        }
        e++
    }
    document.writeln(a + "\n\t</select>")
}
function changeDynaList(a, b, c, d, f) {
    a = document.adminForm[a];
    for (i in a.options.length)
        a.options[i] = null;
    i = 0;
    for (x in b)
        if (b[x][0] == c) {
            opt = new Option;
            opt.value = b[x][1];
            opt.text = b[x][2];
            if (d == c && f == opt.value || 0 == i)
                opt.selected = !0;
            a.options[i++] = opt
        }
    a.length = i
}
function radioGetCheckedValue(a) {
    if (!a)
        return"";
    var b = a.length;
    if (void 0 == b)
        return a.checked ? a.value : "";
    for (var c = 0; c < b; c++)
        if (a[c].checked)
            return a[c].value;
    return""
}
function getSelectedValue(a, b) {
    var c = document[a][b];
    i = c.selectedIndex;
    return null != i && -1 < i ? c.options[i].value : null
}
function listItemTask(a, b) {
    var c = document.adminForm, d = c[a];
    if (d) {
        for (var f = 0; ; f++) {
            var e = c["cb" + f];
            if (!e)
                break;
            e.checked = !1
        }
        d.checked = !0;
        c.boxchecked.value = 1;
        submitbutton(b)
    }
    return!1
}
function submitbutton(a) {
    submitform(a)
}
function submitform(a) {
    a && (document.adminForm.task.value = a);
    if ("function" == typeof document.adminForm.onsubmit)
        document.adminForm.onsubmit();
    "function" == typeof document.adminForm.fireEvent && document.adminForm.fireEvent("submit");
    document.adminForm.submit()
}
function saveorder(a, b) {
    checkAll_button(a, b)
}
function checkAll_button(a, b) {
    b || (b = "saveorder");
    for (var c = 0; c <= a; c++) {
        var d = document.adminForm["cb" + c];
        if (d)
            !1 == d.checked && (d.checked = !0);
        else {
            alert("You cannot change the order of items, as an item in the list is `Checked Out`");
            return
        }
    }
    submitform(b)
}
;


/*===============================
 /media/mod_vt_nivo_slider/js/jquery.nivo.slider.min.js
 ================================================================================*/;
/*
 * jQuery Nivo Slider v3.2
 * http://nivo.dev7studios.com
 *
 * Copyright 2012, Dev7studios
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

(function(e) {
    var t = function(t, n) {
        var r = e.extend({}, e.fn.nivoSlider.defaults, n);
        var i = {currentSlide: 0, currentImage: "", totalSlides: 0, running: false, paused: false, stop: false, controlNavEl: false};
        var s = e(t);
        s.data("nivo:vars", i).addClass("nivoSlider");
        var o = s.children();
        o.each(function() {
            var t = e(this);
            var n = "";
            if (!t.is("img")) {
                if (t.is("a")) {
                    t.addClass("nivo-imageLink");
                    n = t
                }
                t = t.find("img:first")
            }
            var r = r === 0 ? t.attr("width") : t.width(), s = s === 0 ? t.attr("height") : t.height();
            if (n !== "") {
                n.css("display", "none")
            }
            t.css("display", "none");
            i.totalSlides++
        });
        if (r.randomStart) {
            r.startSlide = Math.floor(Math.random() * i.totalSlides)
        }
        if (r.startSlide > 0) {
            if (r.startSlide >= i.totalSlides) {
                r.startSlide = i.totalSlides - 1
            }
            i.currentSlide = r.startSlide
        }
        if (e(o[i.currentSlide]).is("img")) {
            i.currentImage = e(o[i.currentSlide])
        } else {
            i.currentImage = e(o[i.currentSlide]).find("img:first")
        }
        if (e(o[i.currentSlide]).is("a")) {
            e(o[i.currentSlide]).css("display", "block")
        }
        var u = e("<img/>").addClass("nivo-main-image");
        u.attr("src", i.currentImage.attr("src")).show();
        s.append(u);
        e(window).resize(function() {
            s.children("img").width(s.width());
            u.attr("src", i.currentImage.attr("src"));
            u.stop().height("auto");
            e(".nivo-slice").remove();
            e(".nivo-box").remove()
        });
        s.append(e('<div class="nivo-caption"></div>'));
        var a = function(t) {
            var n = e(".nivo-caption", s);
            if (i.currentImage.attr("title") != "" && i.currentImage.attr("title") != undefined) {
                var r = i.currentImage.attr("title");
                if (r.substr(0, 1) == "#")
                    r = e(r).html();
                if (n.css("display") == "block") {
                    setTimeout(function() {
                        n.html(r)
                    }, t.animSpeed)
                } else {
                    n.html(r);
                    n.stop().fadeIn(t.animSpeed)
                }
            } else {
                n.stop().fadeOut(t.animSpeed)
            }
        };
        a(r);
        var f = 0;
        if (!r.manualAdvance && o.length > 1) {
            f = setInterval(function() {
                d(s, o, r, false)
            }, r.pauseTime)
        }
        if (r.directionNav) {
            s.append('<div class="nivo-directionNav"><a class="nivo-prevNav">' + r.prevText + '</a><a class="nivo-nextNav">' + r.nextText + "</a></div>");
            e(s).on("click", "a.nivo-prevNav", function() {
                if (i.running) {
                    return false
                }
                clearInterval(f);
                f = "";
                i.currentSlide -= 2;
                d(s, o, r, "prev")
            });
            e(s).on("click", "a.nivo-nextNav", function() {
                if (i.running) {
                    return false
                }
                clearInterval(f);
                f = "";
                d(s, o, r, "next")
            })
        }
        if (r.controlNav) {
            i.controlNavEl = e('<div class="nivo-controlNav"></div>');
            s.after(i.controlNavEl);
            for (var l = 0; l < o.length; l++) {
                if (r.controlNavThumbs) {
                    i.controlNavEl.addClass("nivo-thumbs-enabled");
                    var c = o.eq(l);
                    if (!c.is("img")) {
                        c = c.find("img:first")
                    }
                    if (c.attr("data-thumb"))
                        i.controlNavEl.append('<a class="nivo-control" rel="' + l + '"><img src="' + c.attr("data-thumb") + '" alt="" /></a>')
                } else {
                    i.controlNavEl.append('<a class="nivo-control" rel="' + l + '">' + (l + 1) + "</a>")
                }
            }
            e("a:eq(" + i.currentSlide + ")", i.controlNavEl).addClass("active");
            e("a", i.controlNavEl).bind("click", function() {
                if (i.running)
                    return false;
                if (e(this).hasClass("active"))
                    return false;
                clearInterval(f);
                f = "";
                u.attr("src", i.currentImage.attr("src"));
                i.currentSlide = e(this).attr("rel") - 1;
                d(s, o, r, "control")
            })
        }
        if (r.pauseOnHover) {
            s.hover(function() {
                i.paused = true;
                clearInterval(f);
                f = ""
            }, function() {
                i.paused = false;
                if (f === "" && !r.manualAdvance) {
                    f = setInterval(function() {
                        d(s, o, r, false)
                    }, r.pauseTime)
                }
            })
        }
        s.bind("nivo:animFinished", function() {
            u.attr("src", i.currentImage.attr("src"));
            i.running = false;
            e(o).each(function() {
                if (e(this).is("a")) {
                    e(this).css("display", "none")
                }
            });
            if (e(o[i.currentSlide]).is("a")) {
                e(o[i.currentSlide]).css("display", "block")
            }
            if (f === "" && !i.paused && !r.manualAdvance) {
                f = setInterval(function() {
                    d(s, o, r, false)
                }, r.pauseTime)
            }
            r.afterChange.call(this)
        });
        var h = function(t, n, r) {
            if (e(r.currentImage).parent().is("a"))
                e(r.currentImage).parent().css("display", "block");
            e('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").width(t.width()).css("visibility", "hidden").show();
            var i = e('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").parent().is("a") ? e('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").parent().height() : e('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").height();
            for (var s = 0; s < n.slices; s++) {
                var o = Math.round(t.width() / n.slices);
                if (s === n.slices - 1) {
                    t.append(e('<div class="nivo-slice" name="' + s + '"><img src="' + r.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block !important; top:0; left:-" + (o + s * o - o) + 'px;" /></div>').css({left: o * s + "px", width: t.width() - o * s + "px", height: i + "px", opacity: "0", overflow: "hidden"}))
                } else {
                    t.append(e('<div class="nivo-slice" name="' + s + '"><img src="' + r.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block !important; top:0; left:-" + (o + s * o - o) + 'px;" /></div>').css({left: o * s + "px", width: o + "px", height: i + "px", opacity: "0", overflow: "hidden"}))
                }
            }
            e(".nivo-slice", t).height(i);
            u.stop().animate({height: e(r.currentImage).height()}, n.animSpeed)
        };
        var p = function(t, n, r) {
            if (e(r.currentImage).parent().is("a"))
                e(r.currentImage).parent().css("display", "block");
            e('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").width(t.width()).css("visibility", "hidden").show();
            var i = Math.round(t.width() / n.boxCols), s = Math.round(e('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").height() / n.boxRows);
            for (var o = 0; o < n.boxRows; o++) {
                for (var a = 0; a < n.boxCols; a++) {
                    if (a === n.boxCols - 1) {
                        t.append(e('<div class="nivo-box" name="' + a + '" rel="' + o + '"><img src="' + r.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block; top:-" + s * o + "px; left:-" + i * a + 'px;" /></div>').css({opacity: 0, left: i * a + "px", top: s * o + "px", width: t.width() - i * a + "px"}));
                        e('.nivo-box[name="' + a + '"]', t).height(e('.nivo-box[name="' + a + '"] img', t).height() + "px")
                    } else {
                        t.append(e('<div class="nivo-box" name="' + a + '" rel="' + o + '"><img src="' + r.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block; top:-" + s * o + "px; left:-" + i * a + 'px;" /></div>').css({opacity: 0, left: i * a + "px", top: s * o + "px", width: i + "px"}));
                        e('.nivo-box[name="' + a + '"]', t).height(e('.nivo-box[name="' + a + '"] img', t).height() + "px")
                    }
                }
            }
            u.stop().animate({height: e(r.currentImage).height()}, n.animSpeed)
        };
        var d = function(t, n, r, i) {
            var s = t.data("nivo:vars");
            if (s && s.currentSlide === s.totalSlides - 1) {
                r.lastSlide.call(this)
            }
            if ((!s || s.stop) && !i) {
                return false
            }
            r.beforeChange.call(this);
            if (!i) {
                u.attr("src", s.currentImage.attr("src"))
            } else {
                if (i === "prev") {
                    u.attr("src", s.currentImage.attr("src"))
                }
                if (i === "next") {
                    u.attr("src", s.currentImage.attr("src"))
                }
            }
            s.currentSlide++;
            if (s.currentSlide === s.totalSlides) {
                s.currentSlide = 0;
                r.slideshowEnd.call(this)
            }
            if (s.currentSlide < 0) {
                s.currentSlide = s.totalSlides - 1
            }
            if (e(n[s.currentSlide]).is("img")) {
                s.currentImage = e(n[s.currentSlide])
            } else {
                s.currentImage = e(n[s.currentSlide]).find("img:first")
            }
            if (r.controlNav) {
                e("a", s.controlNavEl).removeClass("active");
                e("a:eq(" + s.currentSlide + ")", s.controlNavEl).addClass("active")
            }
            a(r);
            e(".nivo-slice", t).remove();
            e(".nivo-box", t).remove();
            var o = r.effect, f = "";
            if (r.effect === "random") {
                f = new Array("sliceDownRight", "sliceDownLeft", "sliceUpRight", "sliceUpLeft", "sliceUpDown", "sliceUpDownLeft", "fold", "fade", "boxRandom", "boxRain", "boxRainReverse", "boxRainGrow", "boxRainGrowReverse");
                o = f[Math.floor(Math.random() * (f.length + 1))];
                if (o === undefined) {
                    o = "fade"
                }
            }
            if (r.effect.indexOf(",") !== -1) {
                f = r.effect.split(",");
                o = f[Math.floor(Math.random() * f.length)];
                if (o === undefined) {
                    o = "fade"
                }
            }
            if (s.currentImage.attr("data-transition")) {
                o = s.currentImage.attr("data-transition")
            }
            s.running = true;
            var l = 0, c = 0, d = "", m = "", g = "", y = "";
            if (o === "sliceDown" || o === "sliceDownRight" || o === "sliceDownLeft") {
                h(t, r, s);
                l = 0;
                c = 0;
                d = e(".nivo-slice", t);
                if (o === "sliceDownLeft") {
                    d = e(".nivo-slice", t)._reverse()
                }
                d.each(function() {
                    var n = e(this);
                    n.css({top: "0px"});
                    if (c === r.slices - 1) {
                        setTimeout(function() {
                            n.animate({opacity: "1.0"}, r.animSpeed, "", function() {
                                t.trigger("nivo:animFinished")
                            })
                        }, 100 + l)
                    } else {
                        setTimeout(function() {
                            n.animate({opacity: "1.0"}, r.animSpeed)
                        }, 100 + l)
                    }
                    l += 50;
                    c++
                })
            } else if (o === "sliceUp" || o === "sliceUpRight" || o === "sliceUpLeft") {
                h(t, r, s);
                l = 0;
                c = 0;
                d = e(".nivo-slice", t);
                if (o === "sliceUpLeft") {
                    d = e(".nivo-slice", t)._reverse()
                }
                d.each(function() {
                    var n = e(this);
                    n.css({bottom: "0px"});
                    if (c === r.slices - 1) {
                        setTimeout(function() {
                            n.animate({opacity: "1.0"}, r.animSpeed, "", function() {
                                t.trigger("nivo:animFinished")
                            })
                        }, 100 + l)
                    } else {
                        setTimeout(function() {
                            n.animate({opacity: "1.0"}, r.animSpeed)
                        }, 100 + l)
                    }
                    l += 50;
                    c++
                })
            } else if (o === "sliceUpDown" || o === "sliceUpDownRight" || o === "sliceUpDownLeft") {
                h(t, r, s);
                l = 0;
                c = 0;
                var b = 0;
                d = e(".nivo-slice", t);
                if (o === "sliceUpDownLeft") {
                    d = e(".nivo-slice", t)._reverse()
                }
                d.each(function() {
                    var n = e(this);
                    if (c === 0) {
                        n.css("top", "0px");
                        c++
                    } else {
                        n.css("bottom", "0px");
                        c = 0
                    }
                    if (b === r.slices - 1) {
                        setTimeout(function() {
                            n.animate({opacity: "1.0"}, r.animSpeed, "", function() {
                                t.trigger("nivo:animFinished")
                            })
                        }, 100 + l)
                    } else {
                        setTimeout(function() {
                            n.animate({opacity: "1.0"}, r.animSpeed)
                        }, 100 + l)
                    }
                    l += 50;
                    b++
                })
            } else if (o === "fold") {
                h(t, r, s);
                l = 0;
                c = 0;
                e(".nivo-slice", t).each(function() {
                    var n = e(this);
                    var i = n.width();
                    n.css({top: "0px", width: "0px"});
                    if (c === r.slices - 1) {
                        setTimeout(function() {
                            n.animate({width: i, opacity: "1.0"}, r.animSpeed, "", function() {
                                t.trigger("nivo:animFinished")
                            })
                        }, 100 + l)
                    } else {
                        setTimeout(function() {
                            n.animate({width: i, opacity: "1.0"}, r.animSpeed)
                        }, 100 + l)
                    }
                    l += 50;
                    c++
                })
            } else if (o === "fade") {
                h(t, r, s);
                m = e(".nivo-slice:first", t);
                m.css({width: t.width() + "px"});
                m.animate({opacity: "1.0"}, r.animSpeed * 2, "", function() {
                    t.trigger("nivo:animFinished")
                })
            } else if (o === "slideInRight") {
                h(t, r, s);
                m = e(".nivo-slice:first", t);
                m.css({width: "0px", opacity: "1"});
                m.animate({width: t.width() + "px"}, r.animSpeed * 2, "", function() {
                    t.trigger("nivo:animFinished")
                })
            } else if (o === "slideInLeft") {
                h(t, r, s);
                m = e(".nivo-slice:first", t);
                m.css({width: "0px", opacity: "1", left: "", right: "0px"});
                m.animate({width: t.width() + "px"}, r.animSpeed * 2, "", function() {
                    m.css({left: "0px", right: ""});
                    t.trigger("nivo:animFinished")
                })
            } else if (o === "boxRandom") {
                p(t, r, s);
                g = r.boxCols * r.boxRows;
                c = 0;
                l = 0;
                y = v(e(".nivo-box", t));
                y.each(function() {
                    var n = e(this);
                    if (c === g - 1) {
                        setTimeout(function() {
                            n.animate({opacity: "1"}, r.animSpeed, "", function() {
                                t.trigger("nivo:animFinished")
                            })
                        }, 100 + l)
                    } else {
                        setTimeout(function() {
                            n.animate({opacity: "1"}, r.animSpeed)
                        }, 100 + l)
                    }
                    l += 20;
                    c++
                })
            } else if (o === "boxRain" || o === "boxRainReverse" || o === "boxRainGrow" || o === "boxRainGrowReverse") {
                p(t, r, s);
                g = r.boxCols * r.boxRows;
                c = 0;
                l = 0;
                var w = 0;
                var E = 0;
                var S = [];
                S[w] = [];
                y = e(".nivo-box", t);
                if (o === "boxRainReverse" || o === "boxRainGrowReverse") {
                    y = e(".nivo-box", t)._reverse()
                }
                y.each(function() {
                    S[w][E] = e(this);
                    E++;
                    if (E === r.boxCols) {
                        w++;
                        E = 0;
                        S[w] = []
                    }
                });
                for (var x = 0; x < r.boxCols * 2; x++) {
                    var T = x;
                    for (var N = 0; N < r.boxRows; N++) {
                        if (T >= 0 && T < r.boxCols) {
                            (function(n, i, s, u, a) {
                                var f = e(S[n][i]);
                                var l = f.width();
                                var c = f.height();
                                if (o === "boxRainGrow" || o === "boxRainGrowReverse") {
                                    f.width(0).height(0)
                                }
                                if (u === a - 1) {
                                    setTimeout(function() {
                                        f.animate({opacity: "1", width: l, height: c}, r.animSpeed / 1.3, "", function() {
                                            t.trigger("nivo:animFinished")
                                        })
                                    }, 100 + s)
                                } else {
                                    setTimeout(function() {
                                        f.animate({opacity: "1", width: l, height: c}, r.animSpeed / 1.3)
                                    }, 100 + s)
                                }
                            })(N, T, l, c, g);
                            c++
                        }
                        T--
                    }
                    l += 100
                }
            }
        };
        var v = function(e) {
            for (var t, n, r = e.length; r; t = parseInt(Math.random() * r, 10), n = e[--r], e[r] = e[t], e[t] = n)
                ;
            return e
        };
        var m = function(e) {
            if (this.console && typeof console.log !== "undefined") {
                console.log(e)
            }
        };
        this.stop = function() {
            if (!e(t).data("nivo:vars").stop) {
                e(t).data("nivo:vars").stop = true;
                m("Stop Slider")
            }
        };
        this.start = function() {
            if (e(t).data("nivo:vars").stop) {
                e(t).data("nivo:vars").stop = false;
                m("Start Slider")
            }
        };
        r.afterLoad.call(this);
        return this
    };
    e.fn.nivoSlider = function(n) {
        return this.each(function(r, i) {
            var s = e(this);
            if (s.data("nivoslider")) {
                return s.data("nivoslider")
            }
            var o = new t(this, n);
            s.data("nivoslider", o)
        })
    };
    e.fn.nivoSlider.defaults = {effect: "random", slices: 15, boxCols: 8, boxRows: 4, animSpeed: 500, pauseTime: 3e3, startSlide: 0, directionNav: true, controlNav: true, controlNavThumbs: false, pauseOnHover: true, manualAdvance: false, prevText: "Prev", nextText: "Next", randomStart: false, beforeChange: function() {
        }, afterChange: function() {
        }, slideshowEnd: function() {
        }, lastSlide: function() {
        }, afterLoad: function() {
        }};
    e.fn._reverse = [].reverse
})(jQuery)
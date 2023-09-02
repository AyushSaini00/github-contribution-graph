function S(r) {
  if (r === null || r === !0 || r === !1)
    return NaN;
  var t = Number(r);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function h(r, t) {
  if (t.length < r)
    throw new TypeError(r + " argument" + (r > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function A(r) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? A = function(e) {
    return typeof e;
  } : A = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, A(r);
}
function b(r) {
  h(1, arguments);
  var t = Object.prototype.toString.call(r);
  return r instanceof Date || A(r) === "object" && t === "[object Date]" ? new Date(r.getTime()) : typeof r == "number" || t === "[object Number]" ? new Date(r) : ((typeof r == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function ye(r, t) {
  h(2, arguments);
  var e = b(r).getTime(), a = S(t);
  return new Date(e + a);
}
var be = {};
function V() {
  return be;
}
function pe(r) {
  var t = new Date(Date.UTC(r.getFullYear(), r.getMonth(), r.getDate(), r.getHours(), r.getMinutes(), r.getSeconds(), r.getMilliseconds()));
  return t.setUTCFullYear(r.getFullYear()), r.getTime() - t.getTime();
}
var le = 6e4, de = 36e5;
function B(r) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? B = function(e) {
    return typeof e;
  } : B = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, B(r);
}
function Te(r) {
  return h(1, arguments), r instanceof Date || B(r) === "object" && Object.prototype.toString.call(r) === "[object Date]";
}
function De(r) {
  if (h(1, arguments), !Te(r) && typeof r != "number")
    return !1;
  var t = b(r);
  return !isNaN(Number(t));
}
function Ce(r, t) {
  h(2, arguments);
  var e = S(t);
  return ye(r, -e);
}
var xe = 864e5;
function Oe(r) {
  h(1, arguments);
  var t = b(r), e = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var a = t.getTime(), n = e - a;
  return Math.floor(n / xe) + 1;
}
function Q(r) {
  h(1, arguments);
  var t = 1, e = b(r), a = e.getUTCDay(), n = (a < t ? 7 : 0) + a - t;
  return e.setUTCDate(e.getUTCDate() - n), e.setUTCHours(0, 0, 0, 0), e;
}
function ce(r) {
  h(1, arguments);
  var t = b(r), e = t.getUTCFullYear(), a = /* @__PURE__ */ new Date(0);
  a.setUTCFullYear(e + 1, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var n = Q(a), i = /* @__PURE__ */ new Date(0);
  i.setUTCFullYear(e, 0, 4), i.setUTCHours(0, 0, 0, 0);
  var o = Q(i);
  return t.getTime() >= n.getTime() ? e + 1 : t.getTime() >= o.getTime() ? e : e - 1;
}
function Me(r) {
  h(1, arguments);
  var t = ce(r), e = /* @__PURE__ */ new Date(0);
  e.setUTCFullYear(t, 0, 4), e.setUTCHours(0, 0, 0, 0);
  var a = Q(e);
  return a;
}
var Pe = 6048e5;
function Se(r) {
  h(1, arguments);
  var t = b(r), e = Q(t).getTime() - Me(t).getTime();
  return Math.round(e / Pe) + 1;
}
function G(r, t) {
  var e, a, n, i, o, l, u, s;
  h(1, arguments);
  var d = V(), c = S((e = (a = (n = (i = t == null ? void 0 : t.weekStartsOn) !== null && i !== void 0 ? i : t == null || (o = t.locale) === null || o === void 0 || (l = o.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : d.weekStartsOn) !== null && a !== void 0 ? a : (u = d.locale) === null || u === void 0 || (s = u.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && e !== void 0 ? e : 0);
  if (!(c >= 0 && c <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var m = b(r), g = m.getUTCDay(), w = (g < c ? 7 : 0) + g - c;
  return m.setUTCDate(m.getUTCDate() - w), m.setUTCHours(0, 0, 0, 0), m;
}
function fe(r, t) {
  var e, a, n, i, o, l, u, s;
  h(1, arguments);
  var d = b(r), c = d.getUTCFullYear(), m = V(), g = S((e = (a = (n = (i = t == null ? void 0 : t.firstWeekContainsDate) !== null && i !== void 0 ? i : t == null || (o = t.locale) === null || o === void 0 || (l = o.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : m.firstWeekContainsDate) !== null && a !== void 0 ? a : (u = m.locale) === null || u === void 0 || (s = u.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && e !== void 0 ? e : 1);
  if (!(g >= 1 && g <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var w = /* @__PURE__ */ new Date(0);
  w.setUTCFullYear(c + 1, 0, g), w.setUTCHours(0, 0, 0, 0);
  var T = G(w, t), D = /* @__PURE__ */ new Date(0);
  D.setUTCFullYear(c, 0, g), D.setUTCHours(0, 0, 0, 0);
  var C = G(D, t);
  return d.getTime() >= T.getTime() ? c + 1 : d.getTime() >= C.getTime() ? c : c - 1;
}
function ke(r, t) {
  var e, a, n, i, o, l, u, s;
  h(1, arguments);
  var d = V(), c = S((e = (a = (n = (i = t == null ? void 0 : t.firstWeekContainsDate) !== null && i !== void 0 ? i : t == null || (o = t.locale) === null || o === void 0 || (l = o.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : d.firstWeekContainsDate) !== null && a !== void 0 ? a : (u = d.locale) === null || u === void 0 || (s = u.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && e !== void 0 ? e : 1), m = fe(r, t), g = /* @__PURE__ */ new Date(0);
  g.setUTCFullYear(m, 0, c), g.setUTCHours(0, 0, 0, 0);
  var w = G(g, t);
  return w;
}
var We = 6048e5;
function Ye(r, t) {
  h(1, arguments);
  var e = b(r), a = G(e, t).getTime() - ke(e, t).getTime();
  return Math.round(a / We) + 1;
}
function f(r, t) {
  for (var e = r < 0 ? "-" : "", a = Math.abs(r).toString(); a.length < t; )
    a = "0" + a;
  return e + a;
}
var Ue = {
  // Year
  y: function(t, e) {
    var a = t.getUTCFullYear(), n = a > 0 ? a : 1 - a;
    return f(e === "yy" ? n % 100 : n, e.length);
  },
  // Month
  M: function(t, e) {
    var a = t.getUTCMonth();
    return e === "M" ? String(a + 1) : f(a + 1, 2);
  },
  // Day of the month
  d: function(t, e) {
    return f(t.getUTCDate(), e.length);
  },
  // AM or PM
  a: function(t, e) {
    var a = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (e) {
      case "a":
      case "aa":
        return a.toUpperCase();
      case "aaa":
        return a;
      case "aaaaa":
        return a[0];
      case "aaaa":
      default:
        return a === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h: function(t, e) {
    return f(t.getUTCHours() % 12 || 12, e.length);
  },
  // Hour [0-23]
  H: function(t, e) {
    return f(t.getUTCHours(), e.length);
  },
  // Minute
  m: function(t, e) {
    return f(t.getUTCMinutes(), e.length);
  },
  // Second
  s: function(t, e) {
    return f(t.getUTCSeconds(), e.length);
  },
  // Fraction of second
  S: function(t, e) {
    var a = e.length, n = t.getUTCMilliseconds(), i = Math.floor(n * Math.pow(10, a - 3));
    return f(i, e.length);
  }
};
const P = Ue;
var $ = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Ne = {
  // Era
  G: function(t, e, a) {
    var n = t.getUTCFullYear() > 0 ? 1 : 0;
    switch (e) {
      case "G":
      case "GG":
      case "GGG":
        return a.era(n, {
          width: "abbreviated"
        });
      case "GGGGG":
        return a.era(n, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return a.era(n, {
          width: "wide"
        });
    }
  },
  // Year
  y: function(t, e, a) {
    if (e === "yo") {
      var n = t.getUTCFullYear(), i = n > 0 ? n : 1 - n;
      return a.ordinalNumber(i, {
        unit: "year"
      });
    }
    return P.y(t, e);
  },
  // Local week-numbering year
  Y: function(t, e, a, n) {
    var i = fe(t, n), o = i > 0 ? i : 1 - i;
    if (e === "YY") {
      var l = o % 100;
      return f(l, 2);
    }
    return e === "Yo" ? a.ordinalNumber(o, {
      unit: "year"
    }) : f(o, e.length);
  },
  // ISO week-numbering year
  R: function(t, e) {
    var a = ce(t);
    return f(a, e.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(t, e) {
    var a = t.getUTCFullYear();
    return f(a, e.length);
  },
  // Quarter
  Q: function(t, e, a) {
    var n = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (e) {
      case "Q":
        return String(n);
      case "QQ":
        return f(n, 2);
      case "Qo":
        return a.ordinalNumber(n, {
          unit: "quarter"
        });
      case "QQQ":
        return a.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return a.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return a.quarter(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(t, e, a) {
    var n = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (e) {
      case "q":
        return String(n);
      case "qq":
        return f(n, 2);
      case "qo":
        return a.ordinalNumber(n, {
          unit: "quarter"
        });
      case "qqq":
        return a.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return a.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return a.quarter(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(t, e, a) {
    var n = t.getUTCMonth();
    switch (e) {
      case "M":
      case "MM":
        return P.M(t, e);
      case "Mo":
        return a.ordinalNumber(n + 1, {
          unit: "month"
        });
      case "MMM":
        return a.month(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return a.month(n, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return a.month(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone month
  L: function(t, e, a) {
    var n = t.getUTCMonth();
    switch (e) {
      case "L":
        return String(n + 1);
      case "LL":
        return f(n + 1, 2);
      case "Lo":
        return a.ordinalNumber(n + 1, {
          unit: "month"
        });
      case "LLL":
        return a.month(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return a.month(n, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return a.month(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Local week of year
  w: function(t, e, a, n) {
    var i = Ye(t, n);
    return e === "wo" ? a.ordinalNumber(i, {
      unit: "week"
    }) : f(i, e.length);
  },
  // ISO week of year
  I: function(t, e, a) {
    var n = Se(t);
    return e === "Io" ? a.ordinalNumber(n, {
      unit: "week"
    }) : f(n, e.length);
  },
  // Day of the month
  d: function(t, e, a) {
    return e === "do" ? a.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : P.d(t, e);
  },
  // Day of year
  D: function(t, e, a) {
    var n = Oe(t);
    return e === "Do" ? a.ordinalNumber(n, {
      unit: "dayOfYear"
    }) : f(n, e.length);
  },
  // Day of week
  E: function(t, e, a) {
    var n = t.getUTCDay();
    switch (e) {
      case "E":
      case "EE":
      case "EEE":
        return a.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return a.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return a.day(n, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return a.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(t, e, a, n) {
    var i = t.getUTCDay(), o = (i - n.weekStartsOn + 8) % 7 || 7;
    switch (e) {
      case "e":
        return String(o);
      case "ee":
        return f(o, 2);
      case "eo":
        return a.ordinalNumber(o, {
          unit: "day"
        });
      case "eee":
        return a.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return a.day(i, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return a.day(i, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return a.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(t, e, a, n) {
    var i = t.getUTCDay(), o = (i - n.weekStartsOn + 8) % 7 || 7;
    switch (e) {
      case "c":
        return String(o);
      case "cc":
        return f(o, e.length);
      case "co":
        return a.ordinalNumber(o, {
          unit: "day"
        });
      case "ccc":
        return a.day(i, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return a.day(i, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return a.day(i, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return a.day(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(t, e, a) {
    var n = t.getUTCDay(), i = n === 0 ? 7 : n;
    switch (e) {
      case "i":
        return String(i);
      case "ii":
        return f(i, e.length);
      case "io":
        return a.ordinalNumber(i, {
          unit: "day"
        });
      case "iii":
        return a.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return a.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return a.day(n, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return a.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(t, e, a) {
    var n = t.getUTCHours(), i = n / 12 >= 1 ? "pm" : "am";
    switch (e) {
      case "a":
      case "aa":
        return a.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return a.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return a.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return a.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(t, e, a) {
    var n = t.getUTCHours(), i;
    switch (n === 12 ? i = $.noon : n === 0 ? i = $.midnight : i = n / 12 >= 1 ? "pm" : "am", e) {
      case "b":
      case "bb":
        return a.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return a.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return a.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return a.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(t, e, a) {
    var n = t.getUTCHours(), i;
    switch (n >= 17 ? i = $.evening : n >= 12 ? i = $.afternoon : n >= 4 ? i = $.morning : i = $.night, e) {
      case "B":
      case "BB":
      case "BBB":
        return a.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return a.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return a.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(t, e, a) {
    if (e === "ho") {
      var n = t.getUTCHours() % 12;
      return n === 0 && (n = 12), a.ordinalNumber(n, {
        unit: "hour"
      });
    }
    return P.h(t, e);
  },
  // Hour [0-23]
  H: function(t, e, a) {
    return e === "Ho" ? a.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : P.H(t, e);
  },
  // Hour [0-11]
  K: function(t, e, a) {
    var n = t.getUTCHours() % 12;
    return e === "Ko" ? a.ordinalNumber(n, {
      unit: "hour"
    }) : f(n, e.length);
  },
  // Hour [1-24]
  k: function(t, e, a) {
    var n = t.getUTCHours();
    return n === 0 && (n = 24), e === "ko" ? a.ordinalNumber(n, {
      unit: "hour"
    }) : f(n, e.length);
  },
  // Minute
  m: function(t, e, a) {
    return e === "mo" ? a.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : P.m(t, e);
  },
  // Second
  s: function(t, e, a) {
    return e === "so" ? a.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : P.s(t, e);
  },
  // Fraction of second
  S: function(t, e) {
    return P.S(t, e);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, e, a, n) {
    var i = n._originalDate || t, o = i.getTimezoneOffset();
    if (o === 0)
      return "Z";
    switch (e) {
      case "X":
        return ae(o);
      case "XXXX":
      case "XX":
        return W(o);
      case "XXXXX":
      case "XXX":
      default:
        return W(o, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, e, a, n) {
    var i = n._originalDate || t, o = i.getTimezoneOffset();
    switch (e) {
      case "x":
        return ae(o);
      case "xxxx":
      case "xx":
        return W(o);
      case "xxxxx":
      case "xxx":
      default:
        return W(o, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, e, a, n) {
    var i = n._originalDate || t, o = i.getTimezoneOffset();
    switch (e) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + re(o, ":");
      case "OOOO":
      default:
        return "GMT" + W(o, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, e, a, n) {
    var i = n._originalDate || t, o = i.getTimezoneOffset();
    switch (e) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + re(o, ":");
      case "zzzz":
      default:
        return "GMT" + W(o, ":");
    }
  },
  // Seconds timestamp
  t: function(t, e, a, n) {
    var i = n._originalDate || t, o = Math.floor(i.getTime() / 1e3);
    return f(o, e.length);
  },
  // Milliseconds timestamp
  T: function(t, e, a, n) {
    var i = n._originalDate || t, o = i.getTime();
    return f(o, e.length);
  }
};
function re(r, t) {
  var e = r > 0 ? "-" : "+", a = Math.abs(r), n = Math.floor(a / 60), i = a % 60;
  if (i === 0)
    return e + String(n);
  var o = t || "";
  return e + String(n) + o + f(i, 2);
}
function ae(r, t) {
  if (r % 60 === 0) {
    var e = r > 0 ? "-" : "+";
    return e + f(Math.abs(r) / 60, 2);
  }
  return W(r, t);
}
function W(r, t) {
  var e = t || "", a = r > 0 ? "-" : "+", n = Math.abs(r), i = f(Math.floor(n / 60), 2), o = f(n % 60, 2);
  return a + i + e + o;
}
const $e = Ne;
var ne = function(t, e) {
  switch (t) {
    case "P":
      return e.date({
        width: "short"
      });
    case "PP":
      return e.date({
        width: "medium"
      });
    case "PPP":
      return e.date({
        width: "long"
      });
    case "PPPP":
    default:
      return e.date({
        width: "full"
      });
  }
}, me = function(t, e) {
  switch (t) {
    case "p":
      return e.time({
        width: "short"
      });
    case "pp":
      return e.time({
        width: "medium"
      });
    case "ppp":
      return e.time({
        width: "long"
      });
    case "pppp":
    default:
      return e.time({
        width: "full"
      });
  }
}, Ee = function(t, e) {
  var a = t.match(/(P+)(p+)?/) || [], n = a[1], i = a[2];
  if (!i)
    return ne(t, e);
  var o;
  switch (n) {
    case "P":
      o = e.dateTime({
        width: "short"
      });
      break;
    case "PP":
      o = e.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      o = e.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      o = e.dateTime({
        width: "full"
      });
      break;
  }
  return o.replace("{{date}}", ne(n, e)).replace("{{time}}", me(i, e));
}, _e = {
  p: me,
  P: Ee
};
const Fe = _e;
var Ie = ["D", "DD"], qe = ["YY", "YYYY"];
function He(r) {
  return Ie.indexOf(r) !== -1;
}
function Le(r) {
  return qe.indexOf(r) !== -1;
}
function ie(r, t, e) {
  if (r === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(e, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (r === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(e, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (r === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(e, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (r === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(e, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var Re = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Xe = function(t, e, a) {
  var n, i = Re[t];
  return typeof i == "string" ? n = i : e === 1 ? n = i.one : n = i.other.replace("{{count}}", e.toString()), a != null && a.addSuffix ? a.comparison && a.comparison > 0 ? "in " + n : n + " ago" : n;
};
const Ae = Xe;
function J(r) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = t.width ? String(t.width) : r.defaultWidth, a = r.formats[e] || r.formats[r.defaultWidth];
    return a;
  };
}
var Be = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Qe = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Ge = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, je = {
  date: J({
    formats: Be,
    defaultWidth: "full"
  }),
  time: J({
    formats: Qe,
    defaultWidth: "full"
  }),
  dateTime: J({
    formats: Ge,
    defaultWidth: "full"
  })
};
const Ve = je;
var ze = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Je = function(t, e, a, n) {
  return ze[t];
};
const Ze = Je;
function I(r) {
  return function(t, e) {
    var a = e != null && e.context ? String(e.context) : "standalone", n;
    if (a === "formatting" && r.formattingValues) {
      var i = r.defaultFormattingWidth || r.defaultWidth, o = e != null && e.width ? String(e.width) : i;
      n = r.formattingValues[o] || r.formattingValues[i];
    } else {
      var l = r.defaultWidth, u = e != null && e.width ? String(e.width) : r.defaultWidth;
      n = r.values[u] || r.values[l];
    }
    var s = r.argumentCallback ? r.argumentCallback(t) : t;
    return n[s];
  };
}
var Ke = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, et = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, tt = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, rt = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, at = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, nt = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, it = function(t, e) {
  var a = Number(t), n = a % 100;
  if (n > 20 || n < 10)
    switch (n % 10) {
      case 1:
        return a + "st";
      case 2:
        return a + "nd";
      case 3:
        return a + "rd";
    }
  return a + "th";
}, ot = {
  ordinalNumber: it,
  era: I({
    values: Ke,
    defaultWidth: "wide"
  }),
  quarter: I({
    values: et,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: I({
    values: tt,
    defaultWidth: "wide"
  }),
  day: I({
    values: rt,
    defaultWidth: "wide"
  }),
  dayPeriod: I({
    values: at,
    defaultWidth: "wide",
    formattingValues: nt,
    defaultFormattingWidth: "wide"
  })
};
const ut = ot;
function q(r) {
  return function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = e.width, n = a && r.matchPatterns[a] || r.matchPatterns[r.defaultMatchWidth], i = t.match(n);
    if (!i)
      return null;
    var o = i[0], l = a && r.parsePatterns[a] || r.parsePatterns[r.defaultParseWidth], u = Array.isArray(l) ? lt(l, function(c) {
      return c.test(o);
    }) : st(l, function(c) {
      return c.test(o);
    }), s;
    s = r.valueCallback ? r.valueCallback(u) : u, s = e.valueCallback ? e.valueCallback(s) : s;
    var d = t.slice(o.length);
    return {
      value: s,
      rest: d
    };
  };
}
function st(r, t) {
  for (var e in r)
    if (r.hasOwnProperty(e) && t(r[e]))
      return e;
}
function lt(r, t) {
  for (var e = 0; e < r.length; e++)
    if (t(r[e]))
      return e;
}
function dt(r) {
  return function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = t.match(r.matchPattern);
    if (!a)
      return null;
    var n = a[0], i = t.match(r.parsePattern);
    if (!i)
      return null;
    var o = r.valueCallback ? r.valueCallback(i[0]) : i[0];
    o = e.valueCallback ? e.valueCallback(o) : o;
    var l = t.slice(n.length);
    return {
      value: o,
      rest: l
    };
  };
}
var ct = /^(\d+)(th|st|nd|rd)?/i, ft = /\d+/i, mt = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, vt = {
  any: [/^b/i, /^(a|c)/i]
}, ht = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, gt = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, wt = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, yt = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, bt = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, pt = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Tt = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Dt = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Ct = {
  ordinalNumber: dt({
    matchPattern: ct,
    parsePattern: ft,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: q({
    matchPatterns: mt,
    defaultMatchWidth: "wide",
    parsePatterns: vt,
    defaultParseWidth: "any"
  }),
  quarter: q({
    matchPatterns: ht,
    defaultMatchWidth: "wide",
    parsePatterns: gt,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: q({
    matchPatterns: wt,
    defaultMatchWidth: "wide",
    parsePatterns: yt,
    defaultParseWidth: "any"
  }),
  day: q({
    matchPatterns: bt,
    defaultMatchWidth: "wide",
    parsePatterns: pt,
    defaultParseWidth: "any"
  }),
  dayPeriod: q({
    matchPatterns: Tt,
    defaultMatchWidth: "any",
    parsePatterns: Dt,
    defaultParseWidth: "any"
  })
};
const xt = Ct;
var Ot = {
  code: "en-US",
  formatDistance: Ae,
  formatLong: Ve,
  formatRelative: Ze,
  localize: ut,
  match: xt,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Mt = Ot;
var Pt = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, St = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, kt = /^'([^]*?)'?$/, Wt = /''/g, Yt = /[a-zA-Z]/;
function K(r, t, e) {
  var a, n, i, o, l, u, s, d, c, m, g, w, T, D, C, k, E, Y;
  h(2, arguments);
  var _ = String(t), x = V(), O = (a = (n = e == null ? void 0 : e.locale) !== null && n !== void 0 ? n : x.locale) !== null && a !== void 0 ? a : Mt, U = S((i = (o = (l = (u = e == null ? void 0 : e.firstWeekContainsDate) !== null && u !== void 0 ? u : e == null || (s = e.locale) === null || s === void 0 || (d = s.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && l !== void 0 ? l : x.firstWeekContainsDate) !== null && o !== void 0 ? o : (c = x.locale) === null || c === void 0 || (m = c.options) === null || m === void 0 ? void 0 : m.firstWeekContainsDate) !== null && i !== void 0 ? i : 1);
  if (!(U >= 1 && U <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var L = S((g = (w = (T = (D = e == null ? void 0 : e.weekStartsOn) !== null && D !== void 0 ? D : e == null || (C = e.locale) === null || C === void 0 || (k = C.options) === null || k === void 0 ? void 0 : k.weekStartsOn) !== null && T !== void 0 ? T : x.weekStartsOn) !== null && w !== void 0 ? w : (E = x.locale) === null || E === void 0 || (Y = E.options) === null || Y === void 0 ? void 0 : Y.weekStartsOn) !== null && g !== void 0 ? g : 0);
  if (!(L >= 0 && L <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!O.localize)
    throw new RangeError("locale must contain localize property");
  if (!O.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var v = b(r);
  if (!De(v))
    throw new RangeError("Invalid time value");
  var N = pe(v), F = Ce(v, N), z = {
    firstWeekContainsDate: U,
    weekStartsOn: L,
    locale: O,
    _originalDate: v
  }, R = _.match(St).map(function(y) {
    var p = y[0];
    if (p === "p" || p === "P") {
      var M = Fe[p];
      return M(y, O.formatLong);
    }
    return y;
  }).join("").match(Pt).map(function(y) {
    if (y === "''")
      return "'";
    var p = y[0];
    if (p === "'")
      return Ut(y);
    var M = $e[p];
    if (M)
      return !(e != null && e.useAdditionalWeekYearTokens) && Le(y) && ie(y, t, String(r)), !(e != null && e.useAdditionalDayOfYearTokens) && He(y) && ie(y, t, String(r)), M(F, y, O.localize, z);
    if (p.match(Yt))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + p + "`");
    return y;
  }).join("");
  return R;
}
function Ut(r) {
  var t = r.match(kt);
  return t ? t[1].replace(Wt, "'") : r;
}
function Nt(r) {
  h(1, arguments);
  var t = b(r), e = t.getDate();
  return e;
}
function $t(r) {
  h(1, arguments);
  var t = b(r), e = t.getDay();
  return e;
}
function te(r) {
  h(1, arguments);
  var t = b(r), e = t.getFullYear(), a = t.getMonth(), n = /* @__PURE__ */ new Date(0);
  return n.setFullYear(e, a + 1, 0), n.setHours(0, 0, 0, 0), n.getDate();
}
function Et(r) {
  h(1, arguments);
  var t = b(r), e = t.getMonth();
  return e;
}
function j(r, t) {
  var e;
  h(1, arguments);
  var a = S((e = t == null ? void 0 : t.additionalDigits) !== null && e !== void 0 ? e : 2);
  if (a !== 2 && a !== 1 && a !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (!(typeof r == "string" || Object.prototype.toString.call(r) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var n = qt(r), i;
  if (n.date) {
    var o = Ht(n.date, a);
    i = Lt(o.restDateString, o.year);
  }
  if (!i || isNaN(i.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  var l = i.getTime(), u = 0, s;
  if (n.time && (u = Rt(n.time), isNaN(u)))
    return /* @__PURE__ */ new Date(NaN);
  if (n.timezone) {
    if (s = Xt(n.timezone), isNaN(s))
      return /* @__PURE__ */ new Date(NaN);
  } else {
    var d = new Date(l + u), c = /* @__PURE__ */ new Date(0);
    return c.setFullYear(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()), c.setHours(d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds()), c;
  }
  return new Date(l + u + s);
}
var X = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, _t = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, Ft = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, It = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function qt(r) {
  var t = {}, e = r.split(X.dateTimeDelimiter), a;
  if (e.length > 2)
    return t;
  if (/:/.test(e[0]) ? a = e[0] : (t.date = e[0], a = e[1], X.timeZoneDelimiter.test(t.date) && (t.date = r.split(X.timeZoneDelimiter)[0], a = r.substr(t.date.length, r.length))), a) {
    var n = X.timezone.exec(a);
    n ? (t.time = a.replace(n[1], ""), t.timezone = n[1]) : t.time = a;
  }
  return t;
}
function Ht(r, t) {
  var e = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + t) + "})|(\\d{2}|[+-]\\d{" + (2 + t) + "})$)"), a = r.match(e);
  if (!a)
    return {
      year: NaN,
      restDateString: ""
    };
  var n = a[1] ? parseInt(a[1]) : null, i = a[2] ? parseInt(a[2]) : null;
  return {
    year: i === null ? n : i * 100,
    restDateString: r.slice((a[1] || a[2]).length)
  };
}
function Lt(r, t) {
  if (t === null)
    return /* @__PURE__ */ new Date(NaN);
  var e = r.match(_t);
  if (!e)
    return /* @__PURE__ */ new Date(NaN);
  var a = !!e[4], n = H(e[1]), i = H(e[2]) - 1, o = H(e[3]), l = H(e[4]), u = H(e[5]) - 1;
  if (a)
    return jt(t, l, u) ? At(t, l, u) : /* @__PURE__ */ new Date(NaN);
  var s = /* @__PURE__ */ new Date(0);
  return !Qt(t, i, o) || !Gt(t, n) ? /* @__PURE__ */ new Date(NaN) : (s.setUTCFullYear(t, i, Math.max(n, o)), s);
}
function H(r) {
  return r ? parseInt(r) : 1;
}
function Rt(r) {
  var t = r.match(Ft);
  if (!t)
    return NaN;
  var e = Z(t[1]), a = Z(t[2]), n = Z(t[3]);
  return Vt(e, a, n) ? e * de + a * le + n * 1e3 : NaN;
}
function Z(r) {
  return r && parseFloat(r.replace(",", ".")) || 0;
}
function Xt(r) {
  if (r === "Z")
    return 0;
  var t = r.match(It);
  if (!t)
    return 0;
  var e = t[1] === "+" ? -1 : 1, a = parseInt(t[2]), n = t[3] && parseInt(t[3]) || 0;
  return zt(a, n) ? e * (a * de + n * le) : NaN;
}
function At(r, t, e) {
  var a = /* @__PURE__ */ new Date(0);
  a.setUTCFullYear(r, 0, 4);
  var n = a.getUTCDay() || 7, i = (t - 1) * 7 + e + 1 - n;
  return a.setUTCDate(a.getUTCDate() + i), a;
}
var Bt = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function ve(r) {
  return r % 400 === 0 || r % 4 === 0 && r % 100 !== 0;
}
function Qt(r, t, e) {
  return t >= 0 && t <= 11 && e >= 1 && e <= (Bt[t] || (ve(r) ? 29 : 28));
}
function Gt(r, t) {
  return t >= 1 && t <= (ve(r) ? 366 : 365);
}
function jt(r, t, e) {
  return t >= 1 && t <= 53 && e >= 0 && e <= 6;
}
function Vt(r, t, e) {
  return r === 24 ? t === 0 && e === 0 : e >= 0 && e < 60 && t >= 0 && t < 60 && r >= 0 && r < 25;
}
function zt(r, t) {
  return t >= 0 && t <= 59;
}
const oe = ["Mon", "Wed", "Fri"], ee = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
], Jt = {
  standard: {
    background: "#ffffff",
    text: "#000000",
    boxBorderColor: "#1b1f230f",
    level0: "#ebedf0",
    level1: "#9be9a8",
    level2: "#40c463",
    level3: "#30a14e",
    level4: "#216e39"
  },
  figma: {
    background: "#F0F1F6",
    text: "#333333",
    boxBorderColor: "#D1D5DB",
    level0: "#FF7262",
    level1: "#F24E1E",
    level2: "#1ABCFE",
    level3: "#A259FF",
    level4: "#0ACF83"
  }
}, ue = (r, t) => {
  const e = Et(r);
  let n = Nt(r);
  for (let i = 0; i < e; i++) {
    const o = te(new Date(t, i));
    n += o;
  }
  return n;
}, he = (r, t) => {
  const e = r / t, a = e % 1;
  return { quotient: e - a, reminder: a };
}, Zt = (r, t, e) => {
  const { quotient: a } = he(t, 5);
  if (r < a)
    return e.level0;
  if (r >= a && r < 2 * a)
    return e.level1;
  if (r >= 2 * a && r < 3 * a)
    return e.level2;
  if (r >= 3 * a && r < 4 * a)
    return e.level3;
  if (r > 4 * a)
    return e.level4;
};
function nr({
  data: r,
  ssr: t = !1,
  config: {
    graphTheme: e = "standard",
    graphMountElement: a = "body",
    graphWidth: n = 723,
    graphHeight: i = 113
  } = {}
}) {
  const o = Object.keys(r).sort((u, s) => s - u);
  if (!o.length)
    return;
  let l = "";
  if (o.forEach((u) => {
    const s = Kt(r[u], u, {
      graphTheme: e,
      graphMountElement: a,
      graphWidth: n,
      graphHeight: i
    });
    l += s;
  }), t)
    return l;
  {
    const u = document.querySelector(a), s = document.createElement("div");
    for (s.innerHTML = l; s.firstChild; )
      u.appendChild(s.firstChild);
    ar();
  }
}
const Kt = (r, t, e) => {
  const { graphWidth: a, graphHeight: n, graphTheme: i } = e;
  let o = "";
  const l = 28, u = 14, s = 10, d = 10, c = 3, m = 3, g = 7;
  let w = 0, T = 0, D = w, C;
  for (let v = 0; v < oe.length; v++)
    C = (2 * v + 1) * d + 2 * (v + 1) * m + u, o += se({
      label: oe[v],
      xPos: D,
      yPos: C + 9
      //TODO: figure out why this 9 is needed, lol cry
    });
  w += l;
  let k = c + w, E = 0;
  for (let v = 0; v < ee.length; v++) {
    const N = te(new Date(t, v)), { quotient: F } = he(
      N,
      g
    );
    o += se({
      label: ee[v],
      xPos: k,
      yPos: E + 9
    }), k = k + F * (s + c) + c;
  }
  T += u;
  const Y = er(r, t, i), _ = $t(new Date(t, 0, 1));
  let x = Math.ceil(Y.length / g);
  _ > 0 && (x += 1);
  let O = w + c, U = 0;
  for (let v = 0; v < x; v++) {
    let N = v === 0 ? T + m + _ * (d + m) : T + m, F = v === 0 ? _ : 0, z = g;
    for (let R = F; R < z; R++) {
      const y = Y[U];
      if (y) {
        const { done: p, date: M, color: ge } = y, we = p ? `${p} contributions on ${K(j(M), "PPPP")}` : `no contributions on ${K(j(M), "PPPP")}`;
        o += tr({
          xPos: O,
          yPos: N,
          fill: ge,
          tooltipText: we,
          date: M
        });
      }
      U++, N += d + m;
    }
    O += s + c;
  }
  return rr({
    width: a,
    height: n,
    children: o
  });
}, er = (r, t, e) => {
  const a = Jt[e], n = ee.map(
    (u, s) => te(new Date(t, s))
  );
  let i = [];
  n.forEach((u, s) => {
    for (let d = 1; d <= u; d++) {
      const c = K(new Date(t, s, d), "yyyy-MM-dd"), m = ue(j(c), t);
      i.push({
        done: 0,
        not_done: 0,
        dayIndex: m,
        date: c,
        color: a.level0
      });
    }
  });
  const o = r.sort((u, s) => s.done - u.done)[0].done;
  return r.map((u) => ({
    dayIndex: ue(j(u.date), t),
    color: Zt(u.done, o, a),
    ...u
  })).sort((u, s) => u.dayIndex - s.dayIndex).forEach((u) => {
    i[u.dayIndex - 1] = u;
  }), i;
}, se = ({
  fontFamily: r = "Helvetica",
  fontSize: t = 10,
  label: e,
  xPos: a,
  yPos: n
}) => `
    <text font-family="${r}" font-size="${t}" x="${a}" y="${n}">
      <tspan dy="0" x="${a}">${e}</tspan>
    </text>
  `, tr = ({
  width: r = 10,
  height: t = 10,
  xPos: e,
  yPos: a,
  fill: n,
  stroke: i = "#1b1f230f",
  strokeWidth: o = 1,
  borderRadius: l = 2,
  tooltipText: u,
  date: s,
  classNames: d
}) => `
  <rect
    width="${r}"
    height="${t}" 
    x="${e}" y="${a}" 
    fill="${n}" stroke="${i}" stroke-width="${o}" rx="${l}" 
    ${u ? `data-tooltip-text="${u}"` : ""}
    ${s ? `data-date="${s}"` : ""} 
    class="${`github-contribution-graph-box-${s} ${d || ""}`}"></rect>
  `, rr = ({ width: r, height: t, children: e }) => `
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    version="1.1"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 ${r} ${t}"
    width="${r}" height="${t}"
    >${e}</svg>
  `, ar = () => {
  const r = document.createElement("div");
  r.classList.add("github-contribution-graph-tooltip"), r.style.visibility = "hidden", document.body.appendChild(r);
};
export {
  nr as default
};

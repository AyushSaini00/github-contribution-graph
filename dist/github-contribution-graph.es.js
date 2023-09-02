function P(r) {
  if (r === null || r === !0 || r === !1)
    return NaN;
  var t = Number(r);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function h(r, t) {
  if (t.length < r)
    throw new TypeError(r + " argument" + (r > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function X(r) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? X = function(e) {
    return typeof e;
  } : X = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, X(r);
}
function b(r) {
  h(1, arguments);
  var t = Object.prototype.toString.call(r);
  return r instanceof Date || X(r) === "object" && t === "[object Date]" ? new Date(r.getTime()) : typeof r == "number" || t === "[object Number]" ? new Date(r) : ((typeof r == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function pe(r, t) {
  h(2, arguments);
  var e = b(r).getTime(), a = P(t);
  return new Date(e + a);
}
var Te = {};
function j() {
  return Te;
}
function De(r) {
  var t = new Date(Date.UTC(r.getFullYear(), r.getMonth(), r.getDate(), r.getHours(), r.getMinutes(), r.getSeconds(), r.getMilliseconds()));
  return t.setUTCFullYear(r.getFullYear()), r.getTime() - t.getTime();
}
var ce = 6e4, fe = 36e5;
function Q(r) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Q = function(e) {
    return typeof e;
  } : Q = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Q(r);
}
function Ce(r) {
  return h(1, arguments), r instanceof Date || Q(r) === "object" && Object.prototype.toString.call(r) === "[object Date]";
}
function xe(r) {
  if (h(1, arguments), !Ce(r) && typeof r != "number")
    return !1;
  var t = b(r);
  return !isNaN(Number(t));
}
function Oe(r, t) {
  h(2, arguments);
  var e = P(t);
  return pe(r, -e);
}
var Me = 864e5;
function Pe(r) {
  h(1, arguments);
  var t = b(r), e = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var a = t.getTime(), n = e - a;
  return Math.floor(n / Me) + 1;
}
function G(r) {
  h(1, arguments);
  var t = 1, e = b(r), a = e.getUTCDay(), n = (a < t ? 7 : 0) + a - t;
  return e.setUTCDate(e.getUTCDate() - n), e.setUTCHours(0, 0, 0, 0), e;
}
function me(r) {
  h(1, arguments);
  var t = b(r), e = t.getUTCFullYear(), a = /* @__PURE__ */ new Date(0);
  a.setUTCFullYear(e + 1, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var n = G(a), i = /* @__PURE__ */ new Date(0);
  i.setUTCFullYear(e, 0, 4), i.setUTCHours(0, 0, 0, 0);
  var o = G(i);
  return t.getTime() >= n.getTime() ? e + 1 : t.getTime() >= o.getTime() ? e : e - 1;
}
function Se(r) {
  h(1, arguments);
  var t = me(r), e = /* @__PURE__ */ new Date(0);
  e.setUTCFullYear(t, 0, 4), e.setUTCHours(0, 0, 0, 0);
  var a = G(e);
  return a;
}
var ke = 6048e5;
function We(r) {
  h(1, arguments);
  var t = b(r), e = G(t).getTime() - Se(t).getTime();
  return Math.round(e / ke) + 1;
}
function A(r, t) {
  var e, a, n, i, o, l, u, s;
  h(1, arguments);
  var d = j(), c = P((e = (a = (n = (i = t == null ? void 0 : t.weekStartsOn) !== null && i !== void 0 ? i : t == null || (o = t.locale) === null || o === void 0 || (l = o.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : d.weekStartsOn) !== null && a !== void 0 ? a : (u = d.locale) === null || u === void 0 || (s = u.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && e !== void 0 ? e : 0);
  if (!(c >= 0 && c <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var v = b(r), m = v.getUTCDay(), g = (m < c ? 7 : 0) + m - c;
  return v.setUTCDate(v.getUTCDate() - g), v.setUTCHours(0, 0, 0, 0), v;
}
function ve(r, t) {
  var e, a, n, i, o, l, u, s;
  h(1, arguments);
  var d = b(r), c = d.getUTCFullYear(), v = j(), m = P((e = (a = (n = (i = t == null ? void 0 : t.firstWeekContainsDate) !== null && i !== void 0 ? i : t == null || (o = t.locale) === null || o === void 0 || (l = o.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : v.firstWeekContainsDate) !== null && a !== void 0 ? a : (u = v.locale) === null || u === void 0 || (s = u.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && e !== void 0 ? e : 1);
  if (!(m >= 1 && m <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var g = /* @__PURE__ */ new Date(0);
  g.setUTCFullYear(c + 1, 0, m), g.setUTCHours(0, 0, 0, 0);
  var D = A(g, t), p = /* @__PURE__ */ new Date(0);
  p.setUTCFullYear(c, 0, m), p.setUTCHours(0, 0, 0, 0);
  var C = A(p, t);
  return d.getTime() >= D.getTime() ? c + 1 : d.getTime() >= C.getTime() ? c : c - 1;
}
function Ye(r, t) {
  var e, a, n, i, o, l, u, s;
  h(1, arguments);
  var d = j(), c = P((e = (a = (n = (i = t == null ? void 0 : t.firstWeekContainsDate) !== null && i !== void 0 ? i : t == null || (o = t.locale) === null || o === void 0 || (l = o.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : d.firstWeekContainsDate) !== null && a !== void 0 ? a : (u = d.locale) === null || u === void 0 || (s = u.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && e !== void 0 ? e : 1), v = ve(r, t), m = /* @__PURE__ */ new Date(0);
  m.setUTCFullYear(v, 0, c), m.setUTCHours(0, 0, 0, 0);
  var g = A(m, t);
  return g;
}
var Ue = 6048e5;
function Ne(r, t) {
  h(1, arguments);
  var e = b(r), a = A(e, t).getTime() - Ye(e, t).getTime();
  return Math.round(a / Ue) + 1;
}
function f(r, t) {
  for (var e = r < 0 ? "-" : "", a = Math.abs(r).toString(); a.length < t; )
    a = "0" + a;
  return e + a;
}
var $e = {
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
const M = $e;
var _ = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Ee = {
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
    return M.y(t, e);
  },
  // Local week-numbering year
  Y: function(t, e, a, n) {
    var i = ve(t, n), o = i > 0 ? i : 1 - i;
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
    var a = me(t);
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
        return M.M(t, e);
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
    var i = Ne(t, n);
    return e === "wo" ? a.ordinalNumber(i, {
      unit: "week"
    }) : f(i, e.length);
  },
  // ISO week of year
  I: function(t, e, a) {
    var n = We(t);
    return e === "Io" ? a.ordinalNumber(n, {
      unit: "week"
    }) : f(n, e.length);
  },
  // Day of the month
  d: function(t, e, a) {
    return e === "do" ? a.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : M.d(t, e);
  },
  // Day of year
  D: function(t, e, a) {
    var n = Pe(t);
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
    switch (n === 12 ? i = _.noon : n === 0 ? i = _.midnight : i = n / 12 >= 1 ? "pm" : "am", e) {
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
    switch (n >= 17 ? i = _.evening : n >= 12 ? i = _.afternoon : n >= 4 ? i = _.morning : i = _.night, e) {
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
    return M.h(t, e);
  },
  // Hour [0-23]
  H: function(t, e, a) {
    return e === "Ho" ? a.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : M.H(t, e);
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
    }) : M.m(t, e);
  },
  // Second
  s: function(t, e, a) {
    return e === "so" ? a.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : M.s(t, e);
  },
  // Fraction of second
  S: function(t, e) {
    return M.S(t, e);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, e, a, n) {
    var i = n._originalDate || t, o = i.getTimezoneOffset();
    if (o === 0)
      return "Z";
    switch (e) {
      case "X":
        return ie(o);
      case "XXXX":
      case "XX":
        return Y(o);
      case "XXXXX":
      case "XXX":
      default:
        return Y(o, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, e, a, n) {
    var i = n._originalDate || t, o = i.getTimezoneOffset();
    switch (e) {
      case "x":
        return ie(o);
      case "xxxx":
      case "xx":
        return Y(o);
      case "xxxxx":
      case "xxx":
      default:
        return Y(o, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, e, a, n) {
    var i = n._originalDate || t, o = i.getTimezoneOffset();
    switch (e) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + ne(o, ":");
      case "OOOO":
      default:
        return "GMT" + Y(o, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, e, a, n) {
    var i = n._originalDate || t, o = i.getTimezoneOffset();
    switch (e) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + ne(o, ":");
      case "zzzz":
      default:
        return "GMT" + Y(o, ":");
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
function ne(r, t) {
  var e = r > 0 ? "-" : "+", a = Math.abs(r), n = Math.floor(a / 60), i = a % 60;
  if (i === 0)
    return e + String(n);
  var o = t || "";
  return e + String(n) + o + f(i, 2);
}
function ie(r, t) {
  if (r % 60 === 0) {
    var e = r > 0 ? "-" : "+";
    return e + f(Math.abs(r) / 60, 2);
  }
  return Y(r, t);
}
function Y(r, t) {
  var e = t || "", a = r > 0 ? "-" : "+", n = Math.abs(r), i = f(Math.floor(n / 60), 2), o = f(n % 60, 2);
  return a + i + e + o;
}
const _e = Ee;
var oe = function(t, e) {
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
}, he = function(t, e) {
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
}, Fe = function(t, e) {
  var a = t.match(/(P+)(p+)?/) || [], n = a[1], i = a[2];
  if (!i)
    return oe(t, e);
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
  return o.replace("{{date}}", oe(n, e)).replace("{{time}}", he(i, e));
}, Ie = {
  p: he,
  P: Fe
};
const qe = Ie;
var He = ["D", "DD"], Le = ["YY", "YYYY"];
function Re(r) {
  return He.indexOf(r) !== -1;
}
function Xe(r) {
  return Le.indexOf(r) !== -1;
}
function ue(r, t, e) {
  if (r === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(e, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (r === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(e, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (r === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(e, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (r === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(e, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var Qe = {
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
}, Ge = function(t, e, a) {
  var n, i = Qe[t];
  return typeof i == "string" ? n = i : e === 1 ? n = i.one : n = i.other.replace("{{count}}", e.toString()), a != null && a.addSuffix ? a.comparison && a.comparison > 0 ? "in " + n : n + " ago" : n;
};
const Ae = Ge;
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
}, je = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Ve = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, ze = {
  date: J({
    formats: Be,
    defaultWidth: "full"
  }),
  time: J({
    formats: je,
    defaultWidth: "full"
  }),
  dateTime: J({
    formats: Ve,
    defaultWidth: "full"
  })
};
const Je = ze;
var Ze = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Ke = function(t, e, a, n) {
  return Ze[t];
};
const et = Ke;
function q(r) {
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
var tt = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, rt = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, at = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, nt = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, it = {
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
}, ot = {
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
}, ut = function(t, e) {
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
}, st = {
  ordinalNumber: ut,
  era: q({
    values: tt,
    defaultWidth: "wide"
  }),
  quarter: q({
    values: rt,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: q({
    values: at,
    defaultWidth: "wide"
  }),
  day: q({
    values: nt,
    defaultWidth: "wide"
  }),
  dayPeriod: q({
    values: it,
    defaultWidth: "wide",
    formattingValues: ot,
    defaultFormattingWidth: "wide"
  })
};
const lt = st;
function H(r) {
  return function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = e.width, n = a && r.matchPatterns[a] || r.matchPatterns[r.defaultMatchWidth], i = t.match(n);
    if (!i)
      return null;
    var o = i[0], l = a && r.parsePatterns[a] || r.parsePatterns[r.defaultParseWidth], u = Array.isArray(l) ? ct(l, function(c) {
      return c.test(o);
    }) : dt(l, function(c) {
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
function dt(r, t) {
  for (var e in r)
    if (r.hasOwnProperty(e) && t(r[e]))
      return e;
}
function ct(r, t) {
  for (var e = 0; e < r.length; e++)
    if (t(r[e]))
      return e;
}
function ft(r) {
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
var mt = /^(\d+)(th|st|nd|rd)?/i, vt = /\d+/i, ht = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, gt = {
  any: [/^b/i, /^(a|c)/i]
}, wt = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, yt = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, bt = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, pt = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, Tt = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Dt = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Ct = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, xt = {
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
}, Ot = {
  ordinalNumber: ft({
    matchPattern: mt,
    parsePattern: vt,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: H({
    matchPatterns: ht,
    defaultMatchWidth: "wide",
    parsePatterns: gt,
    defaultParseWidth: "any"
  }),
  quarter: H({
    matchPatterns: wt,
    defaultMatchWidth: "wide",
    parsePatterns: yt,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: H({
    matchPatterns: bt,
    defaultMatchWidth: "wide",
    parsePatterns: pt,
    defaultParseWidth: "any"
  }),
  day: H({
    matchPatterns: Tt,
    defaultMatchWidth: "wide",
    parsePatterns: Dt,
    defaultParseWidth: "any"
  }),
  dayPeriod: H({
    matchPatterns: Ct,
    defaultMatchWidth: "any",
    parsePatterns: xt,
    defaultParseWidth: "any"
  })
};
const Mt = Ot;
var Pt = {
  code: "en-US",
  formatDistance: Ae,
  formatLong: Je,
  formatRelative: et,
  localize: lt,
  match: Mt,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const St = Pt;
var kt = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Wt = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Yt = /^'([^]*?)'?$/, Ut = /''/g, Nt = /[a-zA-Z]/;
function K(r, t, e) {
  var a, n, i, o, l, u, s, d, c, v, m, g, D, p, C, F, U, S;
  h(2, arguments);
  var V = String(t), O = j(), x = (a = (n = e == null ? void 0 : e.locale) !== null && n !== void 0 ? n : O.locale) !== null && a !== void 0 ? a : St, N = P((i = (o = (l = (u = e == null ? void 0 : e.firstWeekContainsDate) !== null && u !== void 0 ? u : e == null || (s = e.locale) === null || s === void 0 || (d = s.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && l !== void 0 ? l : O.firstWeekContainsDate) !== null && o !== void 0 ? o : (c = O.locale) === null || c === void 0 || (v = c.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && i !== void 0 ? i : 1);
  if (!(N >= 1 && N <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var $ = P((m = (g = (D = (p = e == null ? void 0 : e.weekStartsOn) !== null && p !== void 0 ? p : e == null || (C = e.locale) === null || C === void 0 || (F = C.options) === null || F === void 0 ? void 0 : F.weekStartsOn) !== null && D !== void 0 ? D : O.weekStartsOn) !== null && g !== void 0 ? g : (U = O.locale) === null || U === void 0 || (S = U.options) === null || S === void 0 ? void 0 : S.weekStartsOn) !== null && m !== void 0 ? m : 0);
  if (!($ >= 0 && $ <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!x.localize)
    throw new RangeError("locale must contain localize property");
  if (!x.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var k = b(r);
  if (!xe(k))
    throw new RangeError("Invalid time value");
  var re = De(k), w = Oe(k, re), E = {
    firstWeekContainsDate: N,
    weekStartsOn: $,
    locale: x,
    _originalDate: k
  }, I = V.match(Wt).map(function(y) {
    var T = y[0];
    if (T === "p" || T === "P") {
      var W = qe[T];
      return W(y, x.formatLong);
    }
    return y;
  }).join("").match(kt).map(function(y) {
    if (y === "''")
      return "'";
    var T = y[0];
    if (T === "'")
      return $t(y);
    var W = _e[T];
    if (W)
      return !(e != null && e.useAdditionalWeekYearTokens) && Xe(y) && ue(y, t, String(r)), !(e != null && e.useAdditionalDayOfYearTokens) && Re(y) && ue(y, t, String(r)), W(w, y, x.localize, E);
    if (T.match(Nt))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + T + "`");
    return y;
  }).join("");
  return I;
}
function $t(r) {
  var t = r.match(Yt);
  return t ? t[1].replace(Ut, "'") : r;
}
function Et(r) {
  h(1, arguments);
  var t = b(r), e = t.getDate();
  return e;
}
function _t(r) {
  h(1, arguments);
  var t = b(r), e = t.getDay();
  return e;
}
function te(r) {
  h(1, arguments);
  var t = b(r), e = t.getFullYear(), a = t.getMonth(), n = /* @__PURE__ */ new Date(0);
  return n.setFullYear(e, a + 1, 0), n.setHours(0, 0, 0, 0), n.getDate();
}
function Ft(r) {
  h(1, arguments);
  var t = b(r), e = t.getMonth();
  return e;
}
function B(r, t) {
  var e;
  h(1, arguments);
  var a = P((e = t == null ? void 0 : t.additionalDigits) !== null && e !== void 0 ? e : 2);
  if (a !== 2 && a !== 1 && a !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (!(typeof r == "string" || Object.prototype.toString.call(r) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var n = Lt(r), i;
  if (n.date) {
    var o = Rt(n.date, a);
    i = Xt(o.restDateString, o.year);
  }
  if (!i || isNaN(i.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  var l = i.getTime(), u = 0, s;
  if (n.time && (u = Qt(n.time), isNaN(u)))
    return /* @__PURE__ */ new Date(NaN);
  if (n.timezone) {
    if (s = Gt(n.timezone), isNaN(s))
      return /* @__PURE__ */ new Date(NaN);
  } else {
    var d = new Date(l + u), c = /* @__PURE__ */ new Date(0);
    return c.setFullYear(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()), c.setHours(d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds()), c;
  }
  return new Date(l + u + s);
}
var R = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, It = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, qt = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, Ht = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function Lt(r) {
  var t = {}, e = r.split(R.dateTimeDelimiter), a;
  if (e.length > 2)
    return t;
  if (/:/.test(e[0]) ? a = e[0] : (t.date = e[0], a = e[1], R.timeZoneDelimiter.test(t.date) && (t.date = r.split(R.timeZoneDelimiter)[0], a = r.substr(t.date.length, r.length))), a) {
    var n = R.timezone.exec(a);
    n ? (t.time = a.replace(n[1], ""), t.timezone = n[1]) : t.time = a;
  }
  return t;
}
function Rt(r, t) {
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
function Xt(r, t) {
  if (t === null)
    return /* @__PURE__ */ new Date(NaN);
  var e = r.match(It);
  if (!e)
    return /* @__PURE__ */ new Date(NaN);
  var a = !!e[4], n = L(e[1]), i = L(e[2]) - 1, o = L(e[3]), l = L(e[4]), u = L(e[5]) - 1;
  if (a)
    return zt(t, l, u) ? At(t, l, u) : /* @__PURE__ */ new Date(NaN);
  var s = /* @__PURE__ */ new Date(0);
  return !jt(t, i, o) || !Vt(t, n) ? /* @__PURE__ */ new Date(NaN) : (s.setUTCFullYear(t, i, Math.max(n, o)), s);
}
function L(r) {
  return r ? parseInt(r) : 1;
}
function Qt(r) {
  var t = r.match(qt);
  if (!t)
    return NaN;
  var e = Z(t[1]), a = Z(t[2]), n = Z(t[3]);
  return Jt(e, a, n) ? e * fe + a * ce + n * 1e3 : NaN;
}
function Z(r) {
  return r && parseFloat(r.replace(",", ".")) || 0;
}
function Gt(r) {
  if (r === "Z")
    return 0;
  var t = r.match(Ht);
  if (!t)
    return 0;
  var e = t[1] === "+" ? -1 : 1, a = parseInt(t[2]), n = t[3] && parseInt(t[3]) || 0;
  return Zt(a, n) ? e * (a * fe + n * ce) : NaN;
}
function At(r, t, e) {
  var a = /* @__PURE__ */ new Date(0);
  a.setUTCFullYear(r, 0, 4);
  var n = a.getUTCDay() || 7, i = (t - 1) * 7 + e + 1 - n;
  return a.setUTCDate(a.getUTCDate() + i), a;
}
var Bt = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function ge(r) {
  return r % 400 === 0 || r % 4 === 0 && r % 100 !== 0;
}
function jt(r, t, e) {
  return t >= 0 && t <= 11 && e >= 1 && e <= (Bt[t] || (ge(r) ? 29 : 28));
}
function Vt(r, t) {
  return t >= 1 && t <= (ge(r) ? 366 : 365);
}
function zt(r, t, e) {
  return t >= 1 && t <= 53 && e >= 0 && e <= 6;
}
function Jt(r, t, e) {
  return r === 24 ? t === 0 && e === 0 : e >= 0 && e < 60 && t >= 0 && t < 60 && r >= 0 && r < 25;
}
function Zt(r, t) {
  return t >= 0 && t <= 59;
}
const se = ["Mon", "Wed", "Fri"], ee = [
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
], Kt = {
  standard: {
    background: "#ffffff",
    text: "#000000",
    boxBorderColor: "#1b1f230f",
    level0: "#ebedf0",
    level1: "#9be9a8",
    level2: "#40c463",
    level3: "#30a14e",
    level4: "#216e39"
  }
}, le = (r, t) => {
  const e = Ft(r);
  let n = Et(r);
  for (let i = 0; i < e; i++) {
    const o = te(new Date(t, i));
    n += o;
  }
  return n;
}, we = (r, t) => {
  const e = r / t, a = e % 1;
  return { quotient: e - a, reminder: a };
}, er = (r, t, e) => {
  const { quotient: a } = we(t, 5);
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
function or({
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
    const s = tr(r[u], t, u, {
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
    ir();
  }
}
const tr = (r, t, e, a) => {
  const { graphMountElement: n, graphWidth: i, graphHeight: o, graphTheme: l } = a;
  let u = "";
  const s = 28, d = 14, c = 10, v = 10, m = 3, g = 3, D = 7;
  let p = 0, C = 0, F = p, U;
  for (let w = 0; w < se.length; w++)
    U = (2 * w + 1) * v + 2 * (w + 1) * g + d, u += de({
      label: se[w],
      xPos: F,
      yPos: U + 9
    });
  p += s;
  let S = m + p, V = 0;
  for (let w = 0; w < ee.length; w++) {
    const E = te(new Date(e, w)), { quotient: I } = we(
      E,
      D
    );
    u += de({
      label: ee[w],
      xPos: S,
      yPos: V + 9
    }), S = S + I * (c + m) + m;
  }
  C += d;
  const O = rr(r, e, l), x = _t(new Date(e, 0, 1));
  let N = Math.ceil(O.length / D);
  x > 0 && (N += 1);
  let $ = p + m, k = 0;
  for (let w = 0; w < N; w++) {
    let E = w === 0 ? C + g + x * (v + g) : C + g, I = w === 0 ? x : 0, y = D;
    for (let T = I; T < y; T++) {
      const W = O[k];
      if (W) {
        const { done: ae, date: z, color: ye } = W, be = ae ? `${ae} contributions on ${K(B(z), "PPPP")}` : `no contributions on ${K(B(z), "PPPP")}`;
        u += ar({
          xPos: $,
          yPos: E,
          fill: ye,
          tooltipText: be,
          date: z
        });
      }
      k++, E += v + g;
    }
    $ += c + m;
  }
  return nr({
    width: i,
    height: o,
    children: u
  });
}, rr = (r, t, e) => {
  const a = Kt[e], n = ee.map(
    (u, s) => te(new Date(t, s))
  );
  let i = [];
  n.forEach((u, s) => {
    for (let d = 1; d <= u; d++) {
      const c = K(new Date(t, s, d), "yyyy-MM-dd"), v = le(B(c), t);
      i.push({
        done: 0,
        not_done: 0,
        dayIndex: v,
        date: c,
        color: a.level0
      });
    }
  });
  const o = r.sort((u, s) => s.done - u.done)[0].done;
  return r.map((u) => ({
    dayIndex: le(B(u.date), t),
    color: er(u.done, o, a),
    ...u
  })).sort((u, s) => u.dayIndex - s.dayIndex).forEach((u) => {
    i[u.dayIndex - 1] = u;
  }), i;
}, de = ({
  fontFamily: r = "Helvetica",
  fontSize: t = 10,
  label: e,
  xPos: a,
  yPos: n
}) => `
    <text font-family="${r}" font-size="${t}" x="${a}" y="${n}">
      <tspan dy="0" x="${a}">${e}</tspan>
    </text>
  `, ar = ({
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
  `, nr = ({ width: r, height: t, children: e }) => `
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    version="1.1"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 ${r} ${t}"
    width="${r}" height="${t}"
    >${e}</svg>
  `, ir = () => {
  const r = document.createElement("div");
  r.classList.add("github-contribution-graph-tooltip"), r.style.visibility = "hidden", document.body.appendChild(r);
};
export {
  or as default
};

(function(p,m){typeof exports=="object"&&typeof module<"u"?module.exports=m():typeof define=="function"&&define.amd?define(m):(p=typeof globalThis<"u"?globalThis:p||self,p["github-contribution-graph"]=m())})(this,function(){"use strict";function p(r){if(r===null||r===!0||r===!1)return NaN;var t=Number(r);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function m(r,t){if(t.length<r)throw new TypeError(r+" argument"+(r>1?"s":"")+" required, but only "+t.length+" present")}function R(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?R=function(e){return typeof e}:R=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(r)}function b(r){m(1,arguments);var t=Object.prototype.toString.call(r);return r instanceof Date||R(r)==="object"&&t==="[object Date]"?new Date(r.getTime()):typeof r=="number"||t==="[object Number]"?new Date(r):((typeof r=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function ye(r,t){m(2,arguments);var e=b(r).getTime(),a=p(t);return new Date(e+a)}var be={};function X(){return be}function pe(r){var t=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return t.setUTCFullYear(r.getFullYear()),r.getTime()-t.getTime()}var re=6e4,ae=36e5;function Q(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Q=function(e){return typeof e}:Q=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Q(r)}function Te(r){return m(1,arguments),r instanceof Date||Q(r)==="object"&&Object.prototype.toString.call(r)==="[object Date]"}function De(r){if(m(1,arguments),!Te(r)&&typeof r!="number")return!1;var t=b(r);return!isNaN(Number(t))}function Ce(r,t){m(2,arguments);var e=p(t);return ye(r,-e)}var xe=864e5;function Oe(r){m(1,arguments);var t=b(r),e=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var a=t.getTime(),n=e-a;return Math.floor(n/xe)+1}function G(r){m(1,arguments);var t=1,e=b(r),a=e.getUTCDay(),n=(a<t?7:0)+a-t;return e.setUTCDate(e.getUTCDate()-n),e.setUTCHours(0,0,0,0),e}function ne(r){m(1,arguments);var t=b(r),e=t.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(e+1,0,4),a.setUTCHours(0,0,0,0);var n=G(a),i=new Date(0);i.setUTCFullYear(e,0,4),i.setUTCHours(0,0,0,0);var o=G(i);return t.getTime()>=n.getTime()?e+1:t.getTime()>=o.getTime()?e:e-1}function Me(r){m(1,arguments);var t=ne(r),e=new Date(0);e.setUTCFullYear(t,0,4),e.setUTCHours(0,0,0,0);var a=G(e);return a}var Pe=6048e5;function Se(r){m(1,arguments);var t=b(r),e=G(t).getTime()-Me(t).getTime();return Math.round(e/Pe)+1}function A(r,t){var e,a,n,i,o,l,u,s;m(1,arguments);var d=X(),c=p((e=(a=(n=(i=t==null?void 0:t.weekStartsOn)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(l=o.options)===null||l===void 0?void 0:l.weekStartsOn)!==null&&n!==void 0?n:d.weekStartsOn)!==null&&a!==void 0?a:(u=d.locale)===null||u===void 0||(s=u.options)===null||s===void 0?void 0:s.weekStartsOn)!==null&&e!==void 0?e:0);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=b(r),h=v.getUTCDay(),g=(h<c?7:0)+h-c;return v.setUTCDate(v.getUTCDate()-g),v.setUTCHours(0,0,0,0),v}function ie(r,t){var e,a,n,i,o,l,u,s;m(1,arguments);var d=b(r),c=d.getUTCFullYear(),v=X(),h=p((e=(a=(n=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(l=o.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&n!==void 0?n:v.firstWeekContainsDate)!==null&&a!==void 0?a:(u=v.locale)===null||u===void 0||(s=u.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&e!==void 0?e:1);if(!(h>=1&&h<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var g=new Date(0);g.setUTCFullYear(c+1,0,h),g.setUTCHours(0,0,0,0);var C=A(g,t),T=new Date(0);T.setUTCFullYear(c,0,h),T.setUTCHours(0,0,0,0);var x=A(T,t);return d.getTime()>=C.getTime()?c+1:d.getTime()>=x.getTime()?c:c-1}function ke(r,t){var e,a,n,i,o,l,u,s;m(1,arguments);var d=X(),c=p((e=(a=(n=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(l=o.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&n!==void 0?n:d.firstWeekContainsDate)!==null&&a!==void 0?a:(u=d.locale)===null||u===void 0||(s=u.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&e!==void 0?e:1),v=ie(r,t),h=new Date(0);h.setUTCFullYear(v,0,c),h.setUTCHours(0,0,0,0);var g=A(h,t);return g}var We=6048e5;function Ye(r,t){m(1,arguments);var e=b(r),a=A(e,t).getTime()-ke(e,t).getTime();return Math.round(a/We)+1}function f(r,t){for(var e=r<0?"-":"",a=Math.abs(r).toString();a.length<t;)a="0"+a;return e+a}var Ue={y:function(t,e){var a=t.getUTCFullYear(),n=a>0?a:1-a;return f(e==="yy"?n%100:n,e.length)},M:function(t,e){var a=t.getUTCMonth();return e==="M"?String(a+1):f(a+1,2)},d:function(t,e){return f(t.getUTCDate(),e.length)},a:function(t,e){var a=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return a.toUpperCase();case"aaa":return a;case"aaaaa":return a[0];case"aaaa":default:return a==="am"?"a.m.":"p.m."}},h:function(t,e){return f(t.getUTCHours()%12||12,e.length)},H:function(t,e){return f(t.getUTCHours(),e.length)},m:function(t,e){return f(t.getUTCMinutes(),e.length)},s:function(t,e){return f(t.getUTCSeconds(),e.length)},S:function(t,e){var a=e.length,n=t.getUTCMilliseconds(),i=Math.floor(n*Math.pow(10,a-3));return f(i,e.length)}};const M=Ue;var U={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Ne={G:function(t,e,a){var n=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return a.era(n,{width:"abbreviated"});case"GGGGG":return a.era(n,{width:"narrow"});case"GGGG":default:return a.era(n,{width:"wide"})}},y:function(t,e,a){if(e==="yo"){var n=t.getUTCFullYear(),i=n>0?n:1-n;return a.ordinalNumber(i,{unit:"year"})}return M.y(t,e)},Y:function(t,e,a,n){var i=ie(t,n),o=i>0?i:1-i;if(e==="YY"){var l=o%100;return f(l,2)}return e==="Yo"?a.ordinalNumber(o,{unit:"year"}):f(o,e.length)},R:function(t,e){var a=ne(t);return f(a,e.length)},u:function(t,e){var a=t.getUTCFullYear();return f(a,e.length)},Q:function(t,e,a){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(n);case"QQ":return f(n,2);case"Qo":return a.ordinalNumber(n,{unit:"quarter"});case"QQQ":return a.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return a.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(n,{width:"wide",context:"formatting"})}},q:function(t,e,a){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(n);case"qq":return f(n,2);case"qo":return a.ordinalNumber(n,{unit:"quarter"});case"qqq":return a.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return a.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(n,{width:"wide",context:"standalone"})}},M:function(t,e,a){var n=t.getUTCMonth();switch(e){case"M":case"MM":return M.M(t,e);case"Mo":return a.ordinalNumber(n+1,{unit:"month"});case"MMM":return a.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return a.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(n,{width:"wide",context:"formatting"})}},L:function(t,e,a){var n=t.getUTCMonth();switch(e){case"L":return String(n+1);case"LL":return f(n+1,2);case"Lo":return a.ordinalNumber(n+1,{unit:"month"});case"LLL":return a.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return a.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(n,{width:"wide",context:"standalone"})}},w:function(t,e,a,n){var i=Ye(t,n);return e==="wo"?a.ordinalNumber(i,{unit:"week"}):f(i,e.length)},I:function(t,e,a){var n=Se(t);return e==="Io"?a.ordinalNumber(n,{unit:"week"}):f(n,e.length)},d:function(t,e,a){return e==="do"?a.ordinalNumber(t.getUTCDate(),{unit:"date"}):M.d(t,e)},D:function(t,e,a){var n=Oe(t);return e==="Do"?a.ordinalNumber(n,{unit:"dayOfYear"}):f(n,e.length)},E:function(t,e,a){var n=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return a.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return a.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(n,{width:"short",context:"formatting"});case"EEEE":default:return a.day(n,{width:"wide",context:"formatting"})}},e:function(t,e,a,n){var i=t.getUTCDay(),o=(i-n.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return f(o,2);case"eo":return a.ordinalNumber(o,{unit:"day"});case"eee":return a.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return a.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(i,{width:"short",context:"formatting"});case"eeee":default:return a.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,a,n){var i=t.getUTCDay(),o=(i-n.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return f(o,e.length);case"co":return a.ordinalNumber(o,{unit:"day"});case"ccc":return a.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return a.day(i,{width:"narrow",context:"standalone"});case"cccccc":return a.day(i,{width:"short",context:"standalone"});case"cccc":default:return a.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,a){var n=t.getUTCDay(),i=n===0?7:n;switch(e){case"i":return String(i);case"ii":return f(i,e.length);case"io":return a.ordinalNumber(i,{unit:"day"});case"iii":return a.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return a.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return a.day(n,{width:"short",context:"formatting"});case"iiii":default:return a.day(n,{width:"wide",context:"formatting"})}},a:function(t,e,a){var n=t.getUTCHours(),i=n/12>=1?"pm":"am";switch(e){case"a":case"aa":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return a.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,a){var n=t.getUTCHours(),i;switch(n===12?i=U.noon:n===0?i=U.midnight:i=n/12>=1?"pm":"am",e){case"b":case"bb":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return a.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,e,a){var n=t.getUTCHours(),i;switch(n>=17?i=U.evening:n>=12?i=U.afternoon:n>=4?i=U.morning:i=U.night,e){case"B":case"BB":case"BBB":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return a.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,e,a){if(e==="ho"){var n=t.getUTCHours()%12;return n===0&&(n=12),a.ordinalNumber(n,{unit:"hour"})}return M.h(t,e)},H:function(t,e,a){return e==="Ho"?a.ordinalNumber(t.getUTCHours(),{unit:"hour"}):M.H(t,e)},K:function(t,e,a){var n=t.getUTCHours()%12;return e==="Ko"?a.ordinalNumber(n,{unit:"hour"}):f(n,e.length)},k:function(t,e,a){var n=t.getUTCHours();return n===0&&(n=24),e==="ko"?a.ordinalNumber(n,{unit:"hour"}):f(n,e.length)},m:function(t,e,a){return e==="mo"?a.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):M.m(t,e)},s:function(t,e,a){return e==="so"?a.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):M.s(t,e)},S:function(t,e){return M.S(t,e)},X:function(t,e,a,n){var i=n._originalDate||t,o=i.getTimezoneOffset();if(o===0)return"Z";switch(e){case"X":return ue(o);case"XXXX":case"XX":return S(o);case"XXXXX":case"XXX":default:return S(o,":")}},x:function(t,e,a,n){var i=n._originalDate||t,o=i.getTimezoneOffset();switch(e){case"x":return ue(o);case"xxxx":case"xx":return S(o);case"xxxxx":case"xxx":default:return S(o,":")}},O:function(t,e,a,n){var i=n._originalDate||t,o=i.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+oe(o,":");case"OOOO":default:return"GMT"+S(o,":")}},z:function(t,e,a,n){var i=n._originalDate||t,o=i.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+oe(o,":");case"zzzz":default:return"GMT"+S(o,":")}},t:function(t,e,a,n){var i=n._originalDate||t,o=Math.floor(i.getTime()/1e3);return f(o,e.length)},T:function(t,e,a,n){var i=n._originalDate||t,o=i.getTime();return f(o,e.length)}};function oe(r,t){var e=r>0?"-":"+",a=Math.abs(r),n=Math.floor(a/60),i=a%60;if(i===0)return e+String(n);var o=t||"";return e+String(n)+o+f(i,2)}function ue(r,t){if(r%60===0){var e=r>0?"-":"+";return e+f(Math.abs(r)/60,2)}return S(r,t)}function S(r,t){var e=t||"",a=r>0?"-":"+",n=Math.abs(r),i=f(Math.floor(n/60),2),o=f(n%60,2);return a+i+e+o}const $e=Ne;var se=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},le=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Ee=function(t,e){var a=t.match(/(P+)(p+)?/)||[],n=a[1],i=a[2];if(!i)return se(t,e);var o;switch(n){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;case"PPPP":default:o=e.dateTime({width:"full"});break}return o.replace("{{date}}",se(n,e)).replace("{{time}}",le(i,e))},_e={p:le,P:Ee};const Fe=_e;var Ie=["D","DD"],qe=["YY","YYYY"];function He(r){return Ie.indexOf(r)!==-1}function Le(r){return qe.indexOf(r)!==-1}function de(r,t,e){if(r==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Re={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Xe=function(t,e,a){var n,i=Re[t];return typeof i=="string"?n=i:e===1?n=i.one:n=i.other.replace("{{count}}",e.toString()),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"in "+n:n+" ago":n};const Qe=Xe;function V(r){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.width?String(t.width):r.defaultWidth,a=r.formats[e]||r.formats[r.defaultWidth];return a}}var Ge={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Ae={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Be={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},je={date:V({formats:Ge,defaultWidth:"full"}),time:V({formats:Ae,defaultWidth:"full"}),dateTime:V({formats:Be,defaultWidth:"full"})};const Ve=je;var ze={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Je=function(t,e,a,n){return ze[t]};const Ze=Je;function F(r){return function(t,e){var a=e!=null&&e.context?String(e.context):"standalone",n;if(a==="formatting"&&r.formattingValues){var i=r.defaultFormattingWidth||r.defaultWidth,o=e!=null&&e.width?String(e.width):i;n=r.formattingValues[o]||r.formattingValues[i]}else{var l=r.defaultWidth,u=e!=null&&e.width?String(e.width):r.defaultWidth;n=r.values[u]||r.values[l]}var s=r.argumentCallback?r.argumentCallback(t):t;return n[s]}}var Ke={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},et={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},tt={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},rt={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},at={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},nt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},it=function(t,e){var a=Number(t),n=a%100;if(n>20||n<10)switch(n%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},ot={ordinalNumber:it,era:F({values:Ke,defaultWidth:"wide"}),quarter:F({values:et,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:F({values:tt,defaultWidth:"wide"}),day:F({values:rt,defaultWidth:"wide"}),dayPeriod:F({values:at,defaultWidth:"wide",formattingValues:nt,defaultFormattingWidth:"wide"})};const ut=ot;function I(r){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.width,n=a&&r.matchPatterns[a]||r.matchPatterns[r.defaultMatchWidth],i=t.match(n);if(!i)return null;var o=i[0],l=a&&r.parsePatterns[a]||r.parsePatterns[r.defaultParseWidth],u=Array.isArray(l)?lt(l,function(c){return c.test(o)}):st(l,function(c){return c.test(o)}),s;s=r.valueCallback?r.valueCallback(u):u,s=e.valueCallback?e.valueCallback(s):s;var d=t.slice(o.length);return{value:s,rest:d}}}function st(r,t){for(var e in r)if(r.hasOwnProperty(e)&&t(r[e]))return e}function lt(r,t){for(var e=0;e<r.length;e++)if(t(r[e]))return e}function dt(r){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.match(r.matchPattern);if(!a)return null;var n=a[0],i=t.match(r.parsePattern);if(!i)return null;var o=r.valueCallback?r.valueCallback(i[0]):i[0];o=e.valueCallback?e.valueCallback(o):o;var l=t.slice(n.length);return{value:o,rest:l}}}var ct=/^(\d+)(th|st|nd|rd)?/i,ft=/\d+/i,mt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},ht={any:[/^b/i,/^(a|c)/i]},vt={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},gt={any:[/1/i,/2/i,/3/i,/4/i]},wt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},yt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},bt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},pt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Tt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Dt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Ct={ordinalNumber:dt({matchPattern:ct,parsePattern:ft,valueCallback:function(t){return parseInt(t,10)}}),era:I({matchPatterns:mt,defaultMatchWidth:"wide",parsePatterns:ht,defaultParseWidth:"any"}),quarter:I({matchPatterns:vt,defaultMatchWidth:"wide",parsePatterns:gt,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:I({matchPatterns:wt,defaultMatchWidth:"wide",parsePatterns:yt,defaultParseWidth:"any"}),day:I({matchPatterns:bt,defaultMatchWidth:"wide",parsePatterns:pt,defaultParseWidth:"any"}),dayPeriod:I({matchPatterns:Tt,defaultMatchWidth:"any",parsePatterns:Dt,defaultParseWidth:"any"})},xt={code:"en-US",formatDistance:Qe,formatLong:Ve,formatRelative:Ze,localize:ut,match:Ct,options:{weekStartsOn:0,firstWeekContainsDate:1}};const Ot=xt;var Mt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Pt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,St=/^'([^]*?)'?$/,kt=/''/g,Wt=/[a-zA-Z]/;function z(r,t,e){var a,n,i,o,l,u,s,d,c,v,h,g,C,T,x,H,N,k;m(2,arguments);var ee=String(t),P=X(),O=(a=(n=e==null?void 0:e.locale)!==null&&n!==void 0?n:P.locale)!==null&&a!==void 0?a:Ot,$=p((i=(o=(l=(u=e==null?void 0:e.firstWeekContainsDate)!==null&&u!==void 0?u:e==null||(s=e.locale)===null||s===void 0||(d=s.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&l!==void 0?l:P.firstWeekContainsDate)!==null&&o!==void 0?o:(c=P.locale)===null||c===void 0||(v=c.options)===null||v===void 0?void 0:v.firstWeekContainsDate)!==null&&i!==void 0?i:1);if(!($>=1&&$<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var E=p((h=(g=(C=(T=e==null?void 0:e.weekStartsOn)!==null&&T!==void 0?T:e==null||(x=e.locale)===null||x===void 0||(H=x.options)===null||H===void 0?void 0:H.weekStartsOn)!==null&&C!==void 0?C:P.weekStartsOn)!==null&&g!==void 0?g:(N=P.locale)===null||N===void 0||(k=N.options)===null||k===void 0?void 0:k.weekStartsOn)!==null&&h!==void 0?h:0);if(!(E>=0&&E<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!O.localize)throw new RangeError("locale must contain localize property");if(!O.formatLong)throw new RangeError("locale must contain formatLong property");var W=b(r);if(!De(W))throw new RangeError("Invalid time value");var ge=pe(W),w=Ce(W,ge),_={firstWeekContainsDate:$,weekStartsOn:E,locale:O,_originalDate:W},L=ee.match(Pt).map(function(y){var D=y[0];if(D==="p"||D==="P"){var Y=Fe[D];return Y(y,O.formatLong)}return y}).join("").match(Mt).map(function(y){if(y==="''")return"'";var D=y[0];if(D==="'")return Yt(y);var Y=$e[D];if(Y)return!(e!=null&&e.useAdditionalWeekYearTokens)&&Le(y)&&de(y,t,String(r)),!(e!=null&&e.useAdditionalDayOfYearTokens)&&He(y)&&de(y,t,String(r)),Y(w,y,O.localize,_);if(D.match(Wt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+D+"`");return y}).join("");return L}function Yt(r){var t=r.match(St);return t?t[1].replace(kt,"'"):r}function Ut(r){m(1,arguments);var t=b(r),e=t.getDate();return e}function Nt(r){m(1,arguments);var t=b(r),e=t.getDay();return e}function J(r){m(1,arguments);var t=b(r),e=t.getFullYear(),a=t.getMonth(),n=new Date(0);return n.setFullYear(e,a+1,0),n.setHours(0,0,0,0),n.getDate()}function $t(r){m(1,arguments);var t=b(r),e=t.getMonth();return e}function B(r,t){var e;m(1,arguments);var a=p((e=t==null?void 0:t.additionalDigits)!==null&&e!==void 0?e:2);if(a!==2&&a!==1&&a!==0)throw new RangeError("additionalDigits must be 0, 1 or 2");if(!(typeof r=="string"||Object.prototype.toString.call(r)==="[object String]"))return new Date(NaN);var n=It(r),i;if(n.date){var o=qt(n.date,a);i=Ht(o.restDateString,o.year)}if(!i||isNaN(i.getTime()))return new Date(NaN);var l=i.getTime(),u=0,s;if(n.time&&(u=Lt(n.time),isNaN(u)))return new Date(NaN);if(n.timezone){if(s=Rt(n.timezone),isNaN(s))return new Date(NaN)}else{var d=new Date(l+u),c=new Date(0);return c.setFullYear(d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate()),c.setHours(d.getUTCHours(),d.getUTCMinutes(),d.getUTCSeconds(),d.getUTCMilliseconds()),c}return new Date(l+u+s)}var j={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},Et=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,_t=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,Ft=/^([+-])(\d{2})(?::?(\d{2}))?$/;function It(r){var t={},e=r.split(j.dateTimeDelimiter),a;if(e.length>2)return t;if(/:/.test(e[0])?a=e[0]:(t.date=e[0],a=e[1],j.timeZoneDelimiter.test(t.date)&&(t.date=r.split(j.timeZoneDelimiter)[0],a=r.substr(t.date.length,r.length))),a){var n=j.timezone.exec(a);n?(t.time=a.replace(n[1],""),t.timezone=n[1]):t.time=a}return t}function qt(r,t){var e=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),a=r.match(e);if(!a)return{year:NaN,restDateString:""};var n=a[1]?parseInt(a[1]):null,i=a[2]?parseInt(a[2]):null;return{year:i===null?n:i*100,restDateString:r.slice((a[1]||a[2]).length)}}function Ht(r,t){if(t===null)return new Date(NaN);var e=r.match(Et);if(!e)return new Date(NaN);var a=!!e[4],n=q(e[1]),i=q(e[2])-1,o=q(e[3]),l=q(e[4]),u=q(e[5])-1;if(a)return Bt(t,l,u)?Xt(t,l,u):new Date(NaN);var s=new Date(0);return!Gt(t,i,o)||!At(t,n)?new Date(NaN):(s.setUTCFullYear(t,i,Math.max(n,o)),s)}function q(r){return r?parseInt(r):1}function Lt(r){var t=r.match(_t);if(!t)return NaN;var e=Z(t[1]),a=Z(t[2]),n=Z(t[3]);return jt(e,a,n)?e*ae+a*re+n*1e3:NaN}function Z(r){return r&&parseFloat(r.replace(",","."))||0}function Rt(r){if(r==="Z")return 0;var t=r.match(Ft);if(!t)return 0;var e=t[1]==="+"?-1:1,a=parseInt(t[2]),n=t[3]&&parseInt(t[3])||0;return Vt(a,n)?e*(a*ae+n*re):NaN}function Xt(r,t,e){var a=new Date(0);a.setUTCFullYear(r,0,4);var n=a.getUTCDay()||7,i=(t-1)*7+e+1-n;return a.setUTCDate(a.getUTCDate()+i),a}var Qt=[31,null,31,30,31,30,31,31,30,31,30,31];function ce(r){return r%400===0||r%4===0&&r%100!==0}function Gt(r,t,e){return t>=0&&t<=11&&e>=1&&e<=(Qt[t]||(ce(r)?29:28))}function At(r,t){return t>=1&&t<=(ce(r)?366:365)}function Bt(r,t,e){return t>=1&&t<=53&&e>=0&&e<=6}function jt(r,t,e){return r===24?t===0&&e===0:e>=0&&e<60&&t>=0&&t<60&&r>=0&&r<25}function Vt(r,t){return t>=0&&t<=59}const fe=["Mon","Wed","Fri"],K=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],zt={standard:{background:"#ffffff",text:"#000000",boxBorderColor:"#1b1f230f",level0:"#ebedf0",level1:"#9be9a8",level2:"#40c463",level3:"#30a14e",level4:"#216e39"}},me=(r,t)=>{const e=$t(r);let n=Ut(r);for(let i=0;i<e;i++){const o=J(new Date(t,i));n+=o}return n},he=(r,t)=>{const e=r/t,a=e%1;return{quotient:e-a,reminder:a}},Jt=(r,t,e)=>{const{quotient:a}=he(t,5);if(r<a)return e.level0;if(r>=a&&r<2*a)return e.level1;if(r>=2*a&&r<3*a)return e.level2;if(r>=3*a&&r<4*a)return e.level3;if(r>4*a)return e.level4};function Zt({data:r,ssr:t=!1,config:{graphTheme:e="standard",graphMountElement:a="body",graphWidth:n=723,graphHeight:i=113}={}}){const o=Object.keys(r).sort((u,s)=>s-u);if(!o.length)return;let l="";if(o.forEach(u=>{const s=Kt(r[u],t,u,{graphTheme:e,graphMountElement:a,graphWidth:n,graphHeight:i});l+=s}),t)return l;{const u=document.querySelector(a),s=document.createElement("div");for(s.innerHTML=l;s.firstChild;)u.appendChild(s.firstChild);ar()}}const Kt=(r,t,e,a)=>{const{graphMountElement:n,graphWidth:i,graphHeight:o,graphTheme:l}=a;let u="";const s=28,d=14,c=10,v=10,h=3,g=3,C=7;let T=0,x=0,H=T,N;for(let w=0;w<fe.length;w++)N=(2*w+1)*v+2*(w+1)*g+d,u+=ve({label:fe[w],xPos:H,yPos:N+9});T+=s;let k=h+T,ee=0;for(let w=0;w<K.length;w++){const _=J(new Date(e,w)),{quotient:L}=he(_,C);u+=ve({label:K[w],xPos:k,yPos:ee+9}),k=k+L*(c+h)+h}x+=d;const P=er(r,e,l),O=Nt(new Date(e,0,1));let $=Math.ceil(P.length/C);O>0&&($+=1);let E=T+h,W=0;for(let w=0;w<$;w++){let _=w===0?x+g+O*(v+g):x+g,L=w===0?O:0,y=C;for(let D=L;D<y;D++){const Y=P[W];if(Y){const{done:we,date:te,color:nr}=Y,ir=we?`${we} contributions on ${z(B(te),"PPPP")}`:`no contributions on ${z(B(te),"PPPP")}`;u+=tr({xPos:E,yPos:_,fill:nr,tooltipText:ir,date:te})}W++,_+=v+g}E+=c+h}return rr({width:i,height:o,children:u})},er=(r,t,e)=>{const a=zt[e],n=K.map((u,s)=>J(new Date(t,s)));let i=[];n.forEach((u,s)=>{for(let d=1;d<=u;d++){const c=z(new Date(t,s,d),"yyyy-MM-dd"),v=me(B(c),t);i.push({done:0,not_done:0,dayIndex:v,date:c,color:a.level0})}});const o=r.sort((u,s)=>s.done-u.done)[0].done;return r.map(u=>({dayIndex:me(B(u.date),t),color:Jt(u.done,o,a),...u})).sort((u,s)=>u.dayIndex-s.dayIndex).forEach(u=>{i[u.dayIndex-1]=u}),i},ve=({fontFamily:r="Helvetica",fontSize:t=10,label:e,xPos:a,yPos:n})=>`
    <text font-family="${r}" font-size="${t}" x="${a}" y="${n}">
      <tspan dy="0" x="${a}">${e}</tspan>
    </text>
  `,tr=({width:r=10,height:t=10,xPos:e,yPos:a,fill:n,stroke:i="#1b1f230f",strokeWidth:o=1,borderRadius:l=2,tooltipText:u,date:s,classNames:d})=>`
  <rect
    width="${r}"
    height="${t}" 
    x="${e}" y="${a}" 
    fill="${n}" stroke="${i}" stroke-width="${o}" rx="${l}" 
    ${u?`data-tooltip-text="${u}"`:""}
    ${s?`data-date="${s}"`:""} 
    class="${`github-contribution-graph-box-${s} ${d||""}`}"></rect>
  `,rr=({width:r,height:t,children:e})=>`
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    version="1.1"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 ${r} ${t}"
    width="${r}" height="${t}"
    >${e}</svg>
  `,ar=()=>{const r=document.createElement("div");r.classList.add("github-contribution-graph-tooltip"),r.style.visibility="hidden",document.body.appendChild(r)};return Zt});

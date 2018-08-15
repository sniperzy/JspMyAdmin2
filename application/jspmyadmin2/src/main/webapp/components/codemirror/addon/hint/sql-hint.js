'use strict';(function(g){"object"==typeof exports&&"object"==typeof module?g(require("../../lib/codemirror"),require("../../mode/sql/sql")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../../mode/sql/sql"],g):g(CodeMirror)})(function(g){function t(a){return"[object Array]"==Object.prototype.toString.call(a)}function D(a){a=a.doc.modeOption;"sql"===a&&(a="text/x-sql");return g.resolveMode(a).keywords}function r(a){return"string"==typeof a?a:a.text}function w(a,b){t(b)&&(b=
{columns:b});b.text||(b.text=a);return b}function E(a){var b={};if(t(a))for(var c=a.length-1;0<=c;c--){var d=a[c];b[r(d).toUpperCase()]=w(r(d),d)}else if(a)for(c in a)b[c.toUpperCase()]=w(c,a[c]);return b}function x(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b}function y(a,b){var c=a.length;b=r(b).substr(0,c);return a.toUpperCase()===b.toUpperCase()}function q(a,b,c,d){if(t(c))for(var e=0;e<c.length;e++)y(b,c[e])&&a.push(d(c[e]));else for(e in c)if(c.hasOwnProperty(e)){var f=
c[e],f=f&&!0!==f?f.displayText?{text:f.text,displayText:f.displayText}:f.text:e;y(b,f)&&a.push(d(f))}}function F(a){"."==a.charAt(0)&&(a=a.substr(1));return a.replace(/`/g,"")}function u(a){for(var b=r(a).split("."),c=0;c<b.length;c++)b[c]="`"+b[c]+"`";b=b.join(".");if("string"==typeof a)return b;a=x(a);a.text=b;return a}function G(a,b,c,d){for(var e=!1,f=[],z=b.start,h=!0;h;)h="."==b.string.charAt(0),e=e||"`"==b.string.charAt(0),z=b.start,f.unshift(F(b.string)),b=d.getTokenAt(m(a.line,b.start)),
"."==b.string&&(h=!0,b=d.getTokenAt(m(a.line,b.start)));a=f.join(".");q(c,a,p,function(a){return e?u(a):a});q(c,a,k,function(a){return e?u(a):a});a=f.pop();var l=f.join("."),n=!1,g=l;p[l.toUpperCase()]||(f=l,l=A(l,d),l!==f&&(n=!0));(d=p[l.toUpperCase()])&&d.columns&&(d=d.columns);d&&q(c,a,d,function(a){var b=l;1==n&&(b=g);"string"==typeof a?a=b+"."+a:(a=x(a),a.text=b+"."+a.text);return e?u(a):a});return z}function H(a,b){if(a){var c=/[,;]/g;a=a.split(" ");for(var d=0;d<a.length;d++)b(a[d]?a[d].replace(c,
""):"")}}function B(a){return a.line+a.ch/Math.pow(10,6)}function A(a,b){var c=b.doc,d=c.getValue(),e=a.toUpperCase(),f="",k="";a=[];for(var h=m(0,0),l=m(b.lastLine(),b.getLineHandle(b.lastLine()).length),n=d.indexOf(v.QUERY_DIV);-1!=n;)a.push(c.posFromIndex(n)),n=d.indexOf(v.QUERY_DIV,n+1);a.unshift(m(0,0));a.push(m(b.lastLine(),b.getLineHandle(b.lastLine()).text.length));d=0;n=B(b.getCursor());for(b=0;b<a.length;b++){var g=B(a[b]);if(n>d&&n<=g){h=m(Math.floor(d),+d.toString().split(".").pop());
l=m(Math.floor(g),+g.toString().split(".").pop());break}d=g}c=c.getRange(h,l,!1);for(b=0;b<c.length&&(H(c[b],function(a){var b=a.toUpperCase();b===e&&p[f.toUpperCase()]&&(k=f);b!==v.ALIAS_KEYWORD&&(f=a)}),!k);b++);return k}var p,k,C,v={QUERY_DIV:";",ALIAS_KEYWORD:"AS"},m=g.Pos;g.registerHelper("hint","sql",function(a,b){p=E(b&&b.tables);var c=b&&b.defaultTable;b=b&&b.disableKeywords;k=c&&p[c.toUpperCase()];C=D(a);c&&!k&&(k=A(c,a));k=k||[];k.columns&&(k=k.columns);var c=a.getCursor(),d=[],e=a.getTokenAt(c),
f,g,h;e.end>c.ch&&(e.end=c.ch,e.string=e.string.slice(0,c.ch-e.start));e.string.match(/^[.`\w@]\w*$/)?(h=e.string,f=e.start,g=e.end):(f=g=c.ch,h="");"."==h.charAt(0)||"`"==h.charAt(0)?f=G(c,e,d,a):(q(d,h,p,function(a){return a}),q(d,h,k,function(a){return a}),b||q(d,h,C,function(a){return a.toUpperCase()}));return{list:d,from:m(c.line,f),to:m(c.line,g)}})});

function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"index.pug":"doctype html\nhtml(lang=\"zh\")\n  head\n    title 前端技术规范标准\n    script(type='text\u002Fjavascript').\n      if (foo) bar(1 + 5)\n    \n  body\n    h1 Pug - node template engine\n    #container.col\n      if youAreUsingPug\n        p You are amazing\n      else\n        p Get on it!\n      p.\n        Pug is a terse and simple templating language with a\n        strong focus on performance and powerful features."};
;var locals_for_with = (locals || {});(function (youAreUsingPug) {var pug_indent = [];
;pug_debug_line = 1;pug_debug_filename = "index.pug";
pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
;pug_debug_line = 2;pug_debug_filename = "index.pug";
pug_html = pug_html + "\n\u003Chtml lang=\"zh\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "index.pug";
pug_html = pug_html + "\n  \u003Chead\u003E";
;pug_debug_line = 4;pug_debug_filename = "index.pug";
pug_html = pug_html + "\n    \u003Ctitle\u003E";
;pug_debug_line = 4;pug_debug_filename = "index.pug";
pug_html = pug_html + "前端技术规范标准\u003C\u002Ftitle\u003E";
;pug_debug_line = 5;pug_debug_filename = "index.pug";
pug_html = pug_html + "\n    \u003Cscript type=\"text\u002Fjavascript\"\u003E\n      ";
;pug_debug_line = 6;pug_debug_filename = "index.pug";
pug_html = pug_html + "if (foo) bar(1 + 5)";
;pug_debug_line = 7;pug_debug_filename = "index.pug";
pug_html = pug_html + "\n      ";
;pug_debug_line = 7;pug_debug_filename = "index.pug";
pug_html = pug_html + "\n    \u003C\u002Fscript\u003E\n  \u003C\u002Fhead\u003E";
;pug_debug_line = 8;pug_debug_filename = "index.pug";
pug_html = pug_html + "\n  \u003Cbody\u003E";
;pug_debug_line = 9;pug_debug_filename = "index.pug";
pug_html = pug_html + "\n    \u003Ch1\u003E";
;pug_debug_line = 9;pug_debug_filename = "index.pug";
pug_html = pug_html + "Pug - node template engine\u003C\u002Fh1\u003E";
;pug_debug_line = 10;pug_debug_filename = "index.pug";
pug_html = pug_html + "\n    \u003Cdiv class=\"col\" id=\"container\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "index.pug";
if (youAreUsingPug) {
;pug_debug_line = 12;pug_debug_filename = "index.pug";
pug_html = pug_html + "\n      \u003Cp\u003E";
;pug_debug_line = 12;pug_debug_filename = "index.pug";
pug_html = pug_html + "You are amazing\u003C\u002Fp\u003E";
}
else {
;pug_debug_line = 14;pug_debug_filename = "index.pug";
pug_html = pug_html + "\n      \u003Cp\u003E";
;pug_debug_line = 14;pug_debug_filename = "index.pug";
pug_html = pug_html + "Get on it!\u003C\u002Fp\u003E";
}
;pug_debug_line = 15;pug_debug_filename = "index.pug";
pug_html = pug_html + "\n      \u003Cp\u003E\n        ";
;pug_debug_line = 16;pug_debug_filename = "index.pug";
pug_html = pug_html + "Pug is a terse and simple templating language with a";
;pug_debug_line = 17;pug_debug_filename = "index.pug";
pug_html = pug_html + "\n        ";
;pug_debug_line = 17;pug_debug_filename = "index.pug";
pug_html = pug_html + "strong focus on performance and powerful features.\n      \u003C\u002Fp\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fbody\u003E\n\u003C\u002Fhtml\u003E";}.call(this,"youAreUsingPug" in locals_for_with?locals_for_with.youAreUsingPug:typeof youAreUsingPug!=="undefined"?youAreUsingPug:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}
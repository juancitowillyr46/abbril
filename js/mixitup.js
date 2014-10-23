/*
* MIXITUP - A CSS3 and JQuery Filter & Sort Plugin
* Version: 1.5.4
* License: Creative Commons Attribution-NoDerivs 3.0 Unported - CC BY-ND 3.0
* http://creativecommons.org/licenses/by-nd/3.0/
* This software may be used freely on commercial and non-commercial projects with attribution to the author/copyright holder.
* Author: Patrick Kunka
* Copyright 2012-2013 Patrick Kunka, Barrel LLC, All Rights Reserved
* 
* http://mixitup.io
*/

(function(e){'use strict';function n(t,n,i,u,a){function k(){v.unbind("webkitTransitionEnd transitionend otransitionend oTransitionEnd");if(n){r(n,i,u,a)}a.startOrder=[],a.newOrder=[],a.origSort=[],a.checkSort=[];d.removeStyle(a.prefix+"filter, filter, "+a.prefix+"transform, transform, opacity, display").css(a.clean).removeAttr("data-checksum");if(!window.atob){d.css({display:"none",opacity:"0"})}var e=a.resizeContainer?"height":"";v.removeStyle(a.prefix+"transition, transition, "+a.prefix+"perspective, perspective, "+a.prefix+"perspective-origin, perspective-origin, "+e);if(a.layoutMode=="list"){g.css({display:a.targetDisplayList,opacity:"1"});a.origDisplay=a.targetDisplayList}else{g.css({display:a.targetDisplayGrid,opacity:"1"});a.origDisplay=a.targetDisplayGrid}a.origLayout=a.layoutMode;var t=setTimeout(function(){d.removeStyle(a.prefix+"transition, transition");a.mixing=false;if(typeof a.onMixEnd=="function"){var e=a.onMixEnd.call(this,a);a=e?e:a}})}clearInterval(a.failsafe);a.mixing=true;a.filter=t;if(typeof a.onMixStart=="function"){var f=a.onMixStart.call(this,a);a=f?f:a}var l=a.transitionSpeed;for(var c=0;c<2;c++){var h=c==0?h=a.prefix:"";a.transition[h+"transition"]="all "+l+"ms linear";a.transition[h+"transform"]=h+"translate3d(0,0,0)";a.perspective[h+"perspective"]=a.perspectiveDistance+"px";a.perspective[h+"perspective-origin"]=a.perspectiveOrigin}var p=a.targetSelector,d=u.find(p);d.each(function(){this.data={}});var v=d.parent();v.css(a.perspective);a.easingFallback="ease-in-out";if(a.easing=="smooth")a.easing="cubic-bezier(0.25, 0.46, 0.45, 0.94)";if(a.easing=="snap")a.easing="cubic-bezier(0.77, 0, 0.175, 1)";if(a.easing=="windback"){a.easing="cubic-bezier(0.175, 0.885, 0.320, 1.275)",a.easingFallback="cubic-bezier(0.175, 0.885, 0.320, 1)"}if(a.easing=="windup"){a.easing="cubic-bezier(0.6, -0.28, 0.735, 0.045)",a.easingFallback="cubic-bezier(0.6, 0.28, 0.735, 0.045)"}var m=a.layoutMode=="list"&&a.listEffects!=null?a.listEffects:a.effects;if(Array.prototype.indexOf){a.fade=m.indexOf("fade")>-1?"0":"";a.scale=m.indexOf("scale")>-1?"scale(.01)":"";a.rotateZ=m.indexOf("rotateZ")>-1?"rotate(180deg)":"";a.rotateY=m.indexOf("rotateY")>-1?"rotateY(90deg)":"";a.rotateX=m.indexOf("rotateX")>-1?"rotateX(90deg)":"";a.blur=m.indexOf("blur")>-1?"blur(8px)":"";a.grayscale=m.indexOf("grayscale")>-1?"grayscale(100%)":""}var g=e(),y=e(),b=[],w=false;if(typeof t==="string"){b=o(t)}else{w=true;e.each(t,function(e){b[e]=o(this)})}if(a.filterLogic=="or"){if(b[0]=="")b.shift();if(b.length<1){y=y.add(u.find(p+":visible"))}else{d.each(function(){var t=e(this);if(!w){if(t.is("."+b.join(", ."))){g=g.add(t)}else{y=y.add(t)}}else{var n=0;e.each(b,function(e){if(this.length){if(t.is("."+this.join(", ."))){n++}}else if(n>0){n++}});if(n==b.length){g=g.add(t)}else{y=y.add(t)}}})}}else{g=g.add(v.find(p+"."+b.join(".")));y=y.add(v.find(p+":not(."+b.join(".")+"):visible"))}var E=g.length;var S=e(),x=e(),T=e();y.each(function(){var t=e(this);if(t.css("display")!="none"){S=S.add(t);T=T.add(t)}});if(g.filter(":visible").length==E&&!S.length&&!n){if(a.origLayout==a.layoutMode){k();return false}else{if(g.length==1){if(a.layoutMode=="list"){u.addClass(a.listClass);u.removeClass(a.gridClass);T.css("display",a.targetDisplayList)}else{u.addClass(a.gridClass);u.removeClass(a.listClass);T.css("display",a.targetDisplayGrid)}k();return false}}}a.origHeight=v.height();if(g.length){u.removeClass(a.failClass);g.each(function(){var t=e(this);if(t.css("display")=="none"){x=x.add(t)}else{T=T.add(t)}});if(a.origLayout!=a.layoutMode&&a.animateGridList==false){if(a.layoutMode=="list"){u.addClass(a.listClass);u.removeClass(a.gridClass);T.css("display",a.targetDisplayList)}else{u.addClass(a.gridClass);u.removeClass(a.listClass);T.css("display",a.targetDisplayGrid)}k();return false}if(!window.atob){k();return false}d.css(a.clean);T.each(function(){this.data.origPos=e(this).offset()});if(a.layoutMode=="list"){u.addClass(a.listClass);u.removeClass(a.gridClass);x.css("display",a.targetDisplayList)}else{u.addClass(a.gridClass);u.removeClass(a.listClass);x.css("display",a.targetDisplayGrid)}x.each(function(){this.data.showInterPos=e(this).offset()});S.each(function(){this.data.hideInterPos=e(this).offset()});T.each(function(){this.data.preInterPos=e(this).offset()});if(a.layoutMode=="list"){T.css("display",a.targetDisplayList)}else{T.css("display",a.targetDisplayGrid)}if(n){r(n,i,u,a)}if(n&&s(a.origSort,a.checkSort)){k();return false}S.hide();x.each(function(t){this.data.finalPos=e(this).offset()});T.each(function(){this.data.finalPrePos=e(this).offset()});a.newHeight=v.height();if(n){r("reset",null,u,a)}x.hide();T.css("display",a.origDisplay);if(a.origDisplay=="block"){u.addClass(a.listClass);x.css("display",a.targetDisplayList)}else{u.removeClass(a.listClass);x.css("display",a.targetDisplayGrid)}if(a.resizeContainer)v.css("height",a.origHeight+"px");var N={};for(var c=0;c<2;c++){var h=c==0?h=a.prefix:"";N[h+"transform"]=a.scale+" "+a.rotateX+" "+a.rotateY+" "+a.rotateZ;N[h+"filter"]=a.blur+" "+a.grayscale}x.css(N);T.each(function(){var t=this.data,n=e(this);if(n.hasClass("mix_tohide")){t.preTX=t.origPos.left-t.hideInterPos.left;t.preTY=t.origPos.top-t.hideInterPos.top}else{t.preTX=t.origPos.left-t.preInterPos.left;t.preTY=t.origPos.top-t.preInterPos.top}var r={};for(var i=0;i<2;i++){var s=i==0?s=a.prefix:"";r[s+"transform"]="translate("+t.preTX+"px,"+t.preTY+"px)"}n.css(r)});if(a.layoutMode=="list"){u.addClass(a.listClass);u.removeClass(a.gridClass)}else{u.addClass(a.gridClass);u.removeClass(a.listClass)}var C=setTimeout(function(){if(a.resizeContainer){var t={};for(var n=0;n<2;n++){var r=n==0?r=a.prefix:"";t[r+"transition"]="all "+l+"ms ease-in-out";t["height"]=a.newHeight+"px"}v.css(t)}S.css("opacity",a.fade);x.css("opacity",1);x.each(function(){var t=this.data;t.tX=t.finalPos.left-t.showInterPos.left;t.tY=t.finalPos.top-t.showInterPos.top;var n={};for(var r=0;r<2;r++){var i=r==0?i=a.prefix:"";n[i+"transition-property"]=i+"transform, "+i+"filter, opacity";n[i+"transition-timing-function"]=a.easing+", linear, linear";n[i+"transition-duration"]=l+"ms";n[i+"transition-delay"]="0";n[i+"transform"]="translate("+t.tX+"px,"+t.tY+"px)";n[i+"filter"]="none"}e(this).css("-webkit-transition","all "+l+"ms "+a.easingFallback).css(n)});T.each(function(){var t=this.data;t.tX=t.finalPrePos.left!=0?t.finalPrePos.left-t.preInterPos.left:0;t.tY=t.finalPrePos.left!=0?t.finalPrePos.top-t.preInterPos.top:0;var n={};for(var r=0;r<2;r++){var i=r==0?i=a.prefix:"";n[i+"transition"]="all "+l+"ms "+a.easing;n[i+"transform"]="translate("+t.tX+"px,"+t.tY+"px)"}e(this).css("-webkit-transition","all "+l+"ms "+a.easingFallback).css(n)});var i={};for(var n=0;n<2;n++){var r=n==0?r=a.prefix:"";i[r+"transition"]="all "+l+"ms "+a.easing+", "+r+"filter "+l+"ms linear, opacity "+l+"ms linear";i[r+"transform"]=a.scale+" "+a.rotateX+" "+a.rotateY+" "+a.rotateZ;i[r+"filter"]=a.blur+" "+a.grayscale;i["opacity"]=a.fade}S.css(i);v.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd",function(t){if(t.originalEvent.propertyName.indexOf("transform")>-1||t.originalEvent.propertyName.indexOf("opacity")>-1){if(p.indexOf(".")>-1){if(e(t.target).hasClass(p.replace(".",""))){k()}}else{if(e(t.target).is(p)){k()}}}})},10);a.failsafe=setTimeout(function(){if(a.mixing){k()}},l+400)}else{if(a.resizeContainer)v.css("height",a.origHeight+"px");if(!window.atob){k();return false}S=y;var C=setTimeout(function(){v.css(a.perspective);if(a.resizeContainer){var e={};for(var t=0;t<2;t++){var n=t==0?n=a.prefix:"";e[n+"transition"]="height "+l+"ms ease-in-out";e["height"]=a.minHeight+"px"}v.css(e)}d.css(a.transition);var r=y.length;if(r){var i={};for(var t=0;t<2;t++){var n=t==0?n=a.prefix:"";i[n+"transform"]=a.scale+" "+a.rotateX+" "+a.rotateY+" "+a.rotateZ;i[n+"filter"]=a.blur+" "+a.grayscale;i["opacity"]=a.fade}S.css(i);v.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd",function(e){if(e.originalEvent.propertyName.indexOf("transform")>-1||e.originalEvent.propertyName.indexOf("opacity")>-1){u.addClass(a.failClass);k()}})}else{a.mixing=false}},10)}}function r(t,n,r,i){function s(e,n){var r=isNaN(e.attr(t)*1)?e.attr(t).toLowerCase():e.attr(t)*1,i=isNaN(n.attr(t)*1)?n.attr(t).toLowerCase():n.attr(t)*1;if(r<i)return-1;if(r>i)return 1;return 0}function o(e){if(n=="asc"){a.prepend(e).prepend(" ")}else{a.append(e).append(" ")}}function u(e){var t=e.slice();var n=t.length;var r=n;while(r--){var i=parseInt(Math.random()*n);var s=t[r];t[r]=t[i];t[i]=s}return t}r.find(i.targetSelector).wrapAll('<div class="mix_sorter"/>');var a=r.find(".mix_sorter");if(!i.origSort.length){a.find(i.targetSelector+":visible").each(function(){e(this).wrap("<s/>");i.origSort.push(e(this).parent().html().replace(/\s+/g,""));e(this).unwrap()})}a.empty();if(t=="reset"){e.each(i.startOrder,function(){a.append(this).append(" ")})}else if(t=="default"){e.each(i.origOrder,function(){o(this)})}else if(t=="random"){if(!i.newOrder.length){i.newOrder=u(i.startOrder)}e.each(i.newOrder,function(){a.append(this).append(" ")})}else if(t=="custom"){e.each(n,function(){o(this)})}else{if(typeof i.origOrder[0].attr(t)==="undefined"){console.log("No such attribute found. Terminating");return false}if(!i.newOrder.length){e.each(i.origOrder,function(){i.newOrder.push(e(this))});i.newOrder.sort(s)}e.each(i.newOrder,function(){o(this)})}i.checkSort=[];a.find(i.targetSelector+":visible").each(function(t){var n=e(this);if(t==0){n.attr("data-checksum","1")}n.wrap("<s/>");i.checkSort.push(n.parent().html().replace(/\s+/g,""));n.unwrap()});r.find(i.targetSelector).unwrap()}function i(e){var t=["Webkit","Moz","O","ms"];for(var n=0;n<t.length;n++){if(t[n]+"Transition"in e.style){return t[n]}}return"transition"in e.style?"":false}function s(e,t){if(e.length!=t.length)return false;for(var n=0;n<t.length;n++){if(e[n].compare){if(!e[n].compare(t[n]))return false}if(e[n]!==t[n])return false}return true}function o(t){t=t.replace(/\s{2,}/g," ");var n=t.split(" ");e.each(n,function(e){if(this=="all")n[e]="mix_all"});if(n[0]=="")n.shift();return n}var t={init:function(t){return this.each(function(){var s={targetSelector:".mix",filterSelector:".filter",sortSelector:".sort",buttonEvent:"click",effects:["fade","scale"],listEffects:null,easing:"smooth",layoutMode:"grid",targetDisplayGrid:"inline-block",targetDisplayList:"block",listClass:"",gridClass:"",transitionSpeed:600,showOnLoad:"all",sortOnLoad:false,multiFilter:false,filterLogic:"or",resizeContainer:true,minHeight:0,failClass:"fail",perspectiveDistance:"3000",perspectiveOrigin:"50% 50%",animateGridList:true,onMixLoad:null,onMixStart:null,onMixEnd:null,container:null,origOrder:[],startOrder:[],newOrder:[],origSort:[],checkSort:[],filter:"",mixing:false,origDisplay:"",origLayout:"",origHeight:0,newHeight:0,isTouch:false,resetDelay:0,failsafe:null,prefix:"",easingFallback:"ease-in-out",transition:{},perspective:{},clean:{},fade:"1",scale:"",rotateX:"",rotateY:"",rotateZ:"",blur:"",grayscale:""};if(t){e.extend(s,t)}this.config=s;e.support.touch="ontouchend"in document;if(e.support.touch){s.isTouch=true;s.resetDelay=350}s.container=e(this);var o=s.container;s.prefix=i(o[0]);s.prefix=s.prefix?"-"+s.prefix.toLowerCase()+"-":"";o.find(s.targetSelector).each(function(){s.origOrder.push(e(this))});if(s.sortOnLoad){var u,a;if(e.isArray(s.sortOnLoad)){u=s.sortOnLoad[0],a=s.sortOnLoad[1];e(s.sortSelector+"[data-sort="+s.sortOnLoad[0]+"][data-order="+s.sortOnLoad[1]+"]").addClass("active")}else{e(s.sortSelector+"[data-sort="+s.sortOnLoad+"]").addClass("active");u=s.sortOnLoad,s.sortOnLoad="desc"}r(u,a,o,s)}for(var f=0;f<2;f++){var l=f==0?l=s.prefix:"";s.transition[l+"transition"]="all "+s.transitionSpeed+"ms ease-in-out";s.perspective[l+"perspective"]=s.perspectiveDistance+"px";s.perspective[l+"perspective-origin"]=s.perspectiveOrigin}for(var f=0;f<2;f++){var l=f==0?l=s.prefix:"";s.clean[l+"transition"]="none"}if(s.layoutMode=="list"){o.addClass(s.listClass);s.origDisplay=s.targetDisplayList}else{o.addClass(s.gridClass);s.origDisplay=s.targetDisplayGrid}s.origLayout=s.layoutMode;var c=s.showOnLoad.split(" ");e.each(c,function(){e(s.filterSelector+'[data-filter="'+this+'"]').addClass("active")});o.find(s.targetSelector).addClass("mix_all");if(c[0]=="all"){c[0]="mix_all",s.showOnLoad="mix_all"}var h=e();e.each(c,function(){h=h.add(e("."+this))});h.each(function(){var t=e(this);if(s.layoutMode=="list"){t.css("display",s.targetDisplayList)}else{t.css("display",s.targetDisplayGrid)}t.css(s.transition)});var p=setTimeout(function(){s.mixing=true;h.css("opacity","1");var e=setTimeout(function(){if(s.layoutMode=="list"){h.removeStyle(s.prefix+"transition, transition").css({display:s.targetDisplayList,opacity:1})}else{h.removeStyle(s.prefix+"transition, transition").css({display:s.targetDisplayGrid,opacity:1})}s.mixing=false;if(typeof s.onMixLoad=="function"){var e=s.onMixLoad.call(this,s);s=e?e:s}},s.transitionSpeed)},10);s.filter=s.showOnLoad;e(s.sortSelector).bind(s.buttonEvent,function(){if(!s.mixing){var t=e(this),r=t.attr("data-sort"),i=t.attr("data-order");if(!t.hasClass("active")){e(s.sortSelector).removeClass("active");t.addClass("active")}else{if(r!="random")return false}o.find(s.targetSelector).each(function(){s.startOrder.push(e(this))});n(s.filter,r,i,o,s)}});e(s.filterSelector).bind(s.buttonEvent,function(){if(!s.mixing){var t=e(this);if(s.multiFilter==false){e(s.filterSelector).removeClass("active");t.addClass("active");s.filter=t.attr("data-filter");e(s.filterSelector+'[data-filter="'+s.filter+'"]').addClass("active")}else{var r=t.attr("data-filter");if(t.hasClass("active")){t.removeClass("active");var i=new RegExp("(\\s|^)"+r);s.filter=s.filter.replace(i,"")}else{t.addClass("active");s.filter=s.filter+" "+r}}n(s.filter,null,null,o,s)}})})},toGrid:function(){return this.each(function(){var t=this.config;if(t.layoutMode!="grid"){t.layoutMode="grid";n(t.filter,null,null,e(this),t)}})},toList:function(){return this.each(function(){var t=this.config;if(t.layoutMode!="list"){t.layoutMode="list";n(t.filter,null,null,e(this),t)}})},filter:function(t){return this.each(function(){var r=this.config;if(!r.mixing){e(r.filterSelector).removeClass("active");e(r.filterSelector+'[data-filter="'+t+'"]').addClass("active");n(t,null,null,e(this),r)}})},sort:function(t){return this.each(function(){var r=this.config,i=e(this);if(!r.mixing){e(r.sortSelector).removeClass("active");if(e.isArray(t)){var s=t[0],o=t[1];e(r.sortSelector+'[data-sort="'+t[0]+'"][data-order="'+t[1]+'"]').addClass("active")}else{e(r.sortSelector+'[data-sort="'+t+'"]').addClass("active");var s=t,o="desc"}i.find(r.targetSelector).each(function(){r.startOrder.push(e(this))});n(r.filter,s,o,i,r)}})},multimix:function(t){return this.each(function(){var r=this.config,i=e(this);multiOut={filter:r.filter,sort:null,order:"desc",layoutMode:r.layoutMode};e.extend(multiOut,t);if(!r.mixing){e(r.filterSelector).add(r.sortSelector).removeClass("active");e(r.filterSelector+'[data-filter="'+multiOut.filter+'"]').addClass("active");if(typeof multiOut.sort!=="undefined"){e(r.sortSelector+'[data-sort="'+multiOut.sort+'"][data-order="'+multiOut.order+'"]').addClass("active");i.find(r.targetSelector).each(function(){r.startOrder.push(e(this))})}r.layoutMode=multiOut.layoutMode;n(multiOut.filter,multiOut.sort,multiOut.order,i,r)}})},remix:function(t){return this.each(function(){var r=this.config,i=e(this);r.origOrder=[];i.find(r.targetSelector).each(function(){var t=e(this);t.addClass("mix_all");r.origOrder.push(t)});if(!r.mixing&&typeof t!=="undefined"){e(r.filterSelector).removeClass("active");e(r.filterSelector+'[data-filter="'+t+'"]').addClass("active");n(t,null,null,i,r)}})}};e.fn.mixitup=function(e,n){if(t[e]){return t[e].apply(this,Array.prototype.slice.call(arguments,1))}else if(typeof e==="object"||!e){return t.init.apply(this,arguments)}};e.fn.removeStyle=function(t){return this.each(function(){var n=e(this);t=t.replace(/\s+/g,"");var r=t.split(",");e.each(r,function(){var e=new RegExp(this.toString()+"[^;]+;?","g");n.attr("style",function(t,n){if(n)return n.replace(e,"")})})})};})(jQuery)
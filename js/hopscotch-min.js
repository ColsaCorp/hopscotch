(function(c,d){var n,f,k,j,h,a,m=c[d],i="undefined",b=false,l=(typeof window.sessionStorage!==i),g=document.body.style,e=(typeof g.MozTransition!==i||typeof g.MsTransition!==i||typeof g.webkitTransition!==i||typeof g.OTransition!==i||typeof g.transition!==i);if(m){return}a=function(){docLoaded=true;if(b){m.startTour()}};if(window.addEventListener){window.addEventListener("load",a)}else{if(window.attachEvent){window.attachEvent("onload",a)}}j={addClass:function(q,s){var p,r,o;if(q.className.length===0){q.className=s}else{p=q.className.split(" ");for(r=0,o=p.length;r<o;++r){if(p[r]===s){return}}p.splice(0,0,s);q.className=p.join(" ")}},removeClass:function(o,t){var s,w,u,r,p,v,q;w=t.split(" ");s=o.className.split(" ");for(r=0,v=w.length;r<v;++r){u=w[r];for(p=0,q=s.length;p<q;++p){if(s[p]===u){break}}if(p<q){s.splice(p,1)}}o.className=s.join(" ")},getPixelValue:function(p){var o=typeof p;if(o==="number"){return p}if(o==="string"){return parseInt(p,10)}return 0},valOrDefault:function(p,o){return typeof p!==i?p:o},invokeCallbacks:function(s,p){var r=h[s],q=0,o=r.length;for(;q<o;++q){r[q].cb.apply(this,p)}},getScrollTop:function(){if(typeof window.pageYOffset!==i){return window.pageYOffset}else{return document.documentElement.scrollTop}},getScrollLeft:function(){if(typeof window.pageXOffset!==i){return window.pageXOffset}else{return document.documentElement.scrollLeft}},getWindowHeight:function(){return window.innerHeight?window.innerHeight:document.documentElement.clientHeight},getWindowWidth:function(){return window.innerWidth?window.innerWidth:document.documentElement.clientWidth},addClickListener:function(p,o){return p.addEventListener?p.addEventListener("click",o):p.attachEvent("onclick",o)},evtPreventDefault:function(o){if(o.preventDefault){o.preventDefault()}else{if(event){event.returnValue=false}}},extend:function(p,o){var q;for(q in o){if(o.hasOwnProperty(q)){p[q]=o[q]}}},getStepTarget:function(o){if(typeof o.target==="string"){return document.getElementById(o.target)}return o.target},setState:function(q,r,s){var o="",p;if(l){sessionStorage.setItem(q,r)}else{if(s){p=new Date();p.setTime(p.getTime()+(s*24*60*60*1000));o="; expires="+p.toGMTString()}document.cookie=q+"="+r+o+"; path=/"}},getState:function(p){var r=p+"=",o=document.cookie.split(";"),q,s;if(l){return localStorage.getItem(p)}else{for(q=0;q<o.length;q++){s=o[q];while(s.charAt(0)===" "){s=s.substring(1,s.length)}if(s.indexOf(r)===0){return s.substring(r.length,s.length)}}return null}},clearState:function(o){if(l){sessionStorage.removeItem(o)}else{this.setState(o,"",-1)}}};h={next:[],prev:[],start:[],end:[],error:[],close:[]};k={stepNums:null,nextBtn:"Next",prevBtn:"Back",doneBtn:"Done",skipBtn:"Skip",closeTooltip:"Close"};f=function(t){var p=false,o,s=function(w,v){var u=document.createElement("input");u.id=w;u.type="button";u.value=v;j.addClass(u,"hopscotch-nav-button");if(w.indexOf("prev")>=0){j.addClass(u,"prev")}else{j.addClass(u,"next")}return u},q=function(v,u,x){var w="hide";if(x){w="hide-all"}if(typeof u===i){u=true}if(u){j.removeClass(v,w)}else{j.addClass(v,w)}},r=function(B,x,I){var E,u,C,w,z,A,D,y,H=j.getStepTarget(x),v=B.element,G=B.arrowEl,F=j.getPixelValue(x.arrowOffset);I=j.valOrDefault(I,true);E=j.getPixelValue(x.width)||t.bubbleWidth;C=j.valOrDefault(x.padding,t.bubblePadding);bubbleBorder=j.valOrDefault(x.padding,t.bubbleBorder);j.removeClass(v,"bounce-down bounce-up bounce-left bounce-right");w=H.getBoundingClientRect();if(x.orientation==="top"){u=v.offsetHeight;D=(w.top-u)-t.arrowWidth;y=w.left;A="bounce-down"}else{if(x.orientation==="bottom"){D=w.bottom+t.arrowWidth;y=w.left;A="bounce-up"}else{if(x.orientation==="left"){D=w.top;y=w.left-E-2*C-2*bubbleBorder-t.arrowWidth;A="bounce-right"}else{if(x.orientation==="right"){D=w.top;y=w.right+t.arrowWidth;A="bounce-left"}}}}if(!F){G.style.top="";G.style.left=""}else{if(x.orientation==="top"||x.orientation==="bottom"){G.style.left=F+"px"}else{if(x.orientation==="left"||x.orientation==="right"){G.style.top=F+"px"}}}y+=j.getPixelValue(x.xOffset);D+=j.getPixelValue(x.yOffset);D+=j.getScrollTop();y+=j.getScrollLeft();if(t.animate){v.style.top=D+"px";v.style.left=y+"px"}else{v.style.top=D+"px";v.style.left=y+"px";if(I){z=t.smoothScroll?t.scrollDuration:0;setTimeout(function(){j.addClass(v,A)},z);setTimeout(function(){j.removeClass(v,A)},z+2000)}}};this.init=function(){var y=document.createElement("div"),z=document.createElement("div"),x=document.createElement("div"),w=this,A=false,v,u;this.element=y;this.containerEl=z;this.titleEl=document.createElement("h3");this.numberEl=document.createElement("span");this.contentEl=document.createElement("p");y.id="hopscotch-bubble";j.addClass(y,"animated");z.id="hopscotch-bubble-container";this.numberEl.id="hopscotch-bubble-number";z.appendChild(this.numberEl);x.appendChild(this.titleEl);x.appendChild(this.contentEl);x.id="hopscotch-bubble-content";z.appendChild(x);y.appendChild(z);this.initNavButtons();if(t&&t.showCloseButton){this.initCloseButton()}this.initArrow();v=function(){if(A||!p){return}A=true;u=setTimeout(function(){r(w,o,false);A=false},200)};if(window.addEventListener){window.addEventListener("resize",v)}else{if(window.attachEvent){window.attachEvent("onresize",v)}}this.hide();document.body.appendChild(y);return this};this.initNavButtons=function(){var u=document.createElement("div");this.prevBtnEl=s("hopscotch-prev",k.prevBtn);this.nextBtnEl=s("hopscotch-next",k.nextBtn);this.doneBtnEl=s("hopscotch-done",k.doneBtn);j.addClass(this.doneBtnEl,"hide");u.appendChild(this.prevBtnEl);u.appendChild(this.nextBtnEl);u.appendChild(this.doneBtnEl);j.addClickListener(this.prevBtnEl,function(v){m.prevStep()});j.addClickListener(this.nextBtnEl,function(v){m.nextStep()});j.addClickListener(this.doneBtnEl,m.endTour);u.id="hopscotch-actions";this.buttonsEl=u;this.containerEl.appendChild(u);return this};this.initCloseButton=function(){var u=document.createElement("a");u.id="hopscotch-bubble-close";u.href="#";u.title=k.closeTooltip;u.innerHTML=k.closeTooltip;j.addClickListener(u,function(w){var v=hopscotch.getCurrStepNum(),x=hopscotch.getCurrTour(),y=(v===x.steps.length-1);j.invokeCallbacks("close",[x.id,v]);m.endTour(true,y);if(w.preventDefault){w.preventDefault()}else{if(event){event.returnValue=false}}});this.closeBtnEl=u;this.containerEl.appendChild(u);return this};this.initArrow=function(){var u,v;this.arrowEl=document.createElement("div");this.arrowEl.id="hopscotch-bubble-arrow-container";v=document.createElement("div");v.className="hopscotch-bubble-arrow-border";u=document.createElement("div");u.className="hopscotch-bubble-arrow";this.arrowEl.appendChild(v);this.arrowEl.appendChild(u);this.element.appendChild(this.arrowEl);return this};this.renderStep=function(w,B,x,y,C){var D=this,v=j.valOrDefault(w.showNextButton,t.showNextButton),u=j.valOrDefault(w.showPrevButton,t.showPrevButton),A,z;o=w;this.setTitle(w.title?w.title:"");this.setContent(w.content?w.content:"");this.setNum(B);this.showPrevButton(this.prevBtnEl&&u&&(B>0||x>0));this.showNextButton(this.nextBtnEl&&v&&!y);this.nextBtnEl.value=w.showSkip?k.skipBtn:k.nextBtn;if(w.showSkip){}if(y){j.removeClass(this.doneBtnEl,"hide")}else{j.addClass(this.doneBtnEl,"hide")}this.setArrow(w.orientation);A=j.getPixelValue(w.width)||t.bubbleWidth;z=j.valOrDefault(w.padding,t.bubblePadding);this.containerEl.style.width=A+"px";this.containerEl.style.padding=z+"px";if(w.orientation==="top"){setTimeout(function(){r(D,w);if(C){C()}},5)}else{r(this,w);if(C){C()}}return this};this.setTitle=function(u){if(u){this.titleEl.innerHTML=u;j.removeClass(this.titleEl,"hide")}else{j.addClass(this.titleEl,"hide")}return this};this.setContent=function(u){if(u){this.contentEl.innerHTML=u;j.removeClass(this.contentEl,"hide")}else{j.addClass(this.contentEl,"hide")}return this};this.setNum=function(u){if(k.stepNums&&u<k.stepNums.length){u=k.stepNums[u]}else{u=u+1}this.numberEl.innerHTML=u};this.setArrow=function(u){if(u==="top"){this.arrowEl.className="down"}else{if(u==="bottom"){this.arrowEl.className="up"}else{if(u==="left"){this.arrowEl.className="right"}else{if(u==="right"){this.arrowEl.className="left"}}}}};this.show=function(){var u=this;if(t.animate){setTimeout(function(){j.addClass(u.element,"animate")},50)}j.removeClass(this.element,"hide");p=true;return this};this.hide=function(){j.addClass(this.element,"hide");j.removeClass(this.element,"animate");p=false;return this};this.showPrevButton=function(u,v){q(this.prevBtnEl,u,v)};this.showNextButton=function(u,v){q(this.nextBtnEl,u,v)};this.showCloseButton=function(u,v){q(this.closeBtnEl,u,v)};this.initAnimate=function(){var u=this;setTimeout(function(){j.addClass(u.element,"animate")},50)};this.removeAnimate=function(){j.removeClass(this.element,"animate")};this.init()};n=function(p){var z,r,v,q,A,D,u,w,s,t=function(){if(!z){z=new f(r)}return z},C=function(){var E=v.steps[q];return(E.length>0)?E[A]:E},B=function(){var E=v.steps[q].length;if(A<E-1){++A;return true}else{if(q<v.steps.length-1){++q;A=o()?0:undefined;return true}}return false},y=function(){var E;if(A>0){--A;return true}else{if(q>0){E=v.steps[--q].length;if(E){A=E-1}else{A=undefined}return true}}return false},o=function(){return v.steps[q].length>0},x=function(){var U=t().element,Q=j.getPixelValue(U.style.top),P=Q+j.getPixelValue(U.offsetHeight),N=j.getStepTarget(C()),V=N.getBoundingClientRect(),S=V.top+j.getScrollTop(),O=V.bottom+j.getScrollTop(),L=(Q<S)?Q:S,E=(P>O)?P:O,R=j.getScrollTop(),G=R+j.getWindowHeight(),H=L-r.scrollTopMargin,F,K,J,T,I,M;if(typeof YAHOO!==i&&typeof YAHOO.env!==i&&typeof YAHOO.env.ua!==i&&typeof YAHOO.util!==i&&typeof YAHOO.util.Scroll!==i){F=YAHOO.env.ua.webkit?document.body:document.documentElement;J=YAHOO.util.Easing?YAHOO.util.Easing.easeOut:undefined;K=new YAHOO.util.Scroll(F,{scroll:{to:[0,H]}},r.scrollDuration/1000,J);K.animate();return}if(H<0){H=0}if(L>=R&&L<=R+r.scrollTopMargin){return}if(L<R||E>G){if(r.smoothScroll){T=(R>L)?-1:1;I=Math.abs(R-H)/(r.scrollDuration/10);M=setInterval(function(){var X=j.getScrollTop(),W=X+(T*I);if((T>0&&W>=H)||T<0&&W<=H){W=H;clearInterval(M)}window.scrollTo(0,W);if(j.getScrollTop()===X){clearInterval(M)}},10)}else{window.scrollTo(0,H)}}};this.init=function(){if(p){this.configure(p)}return this};this.loadTour=function(J){var H={},F,K,G,E,I;v=J;for(K in J){if(J.hasOwnProperty(K)&&K!=="id"&&K!=="steps"){H[K]=J[K]}}r={};s.call(this,H,true);E=j.getState(r.cookieName);if(E){I=E.split(":");D=I[0];u=I[1];w=undefined;G=u.split("-");if(G.length>1){u=parseInt(G[0],10);w=parseInt(G[1],10)}else{u=parseInt(u,10)}if(I.length>2&&I[2]==="mp"){if(w&&w<v.steps[u].length-1){++w}else{if(u<v.steps.length-1){++u;if(v.steps[u].length>0){w=0}else{w=undefined}}}}}F=t();F.showPrevButton(r.showPrevButton,true);F.showNextButton(r.showNextButton,true);return this};this.startTour=function(H,G){var E,F;if(!v){throw"Need to load a tour before you start it!"}if(document.readyState!=="complete"){b=true;return}if(typeof H!==i){q=H;A=G}else{if(v.id===D&&typeof u!==i){q=u;A=w;F=C();if(!j.getStepTarget(F)){y();F=C();if(!j.getStepTarget(F)){this.endTour(false);return}}}else{q=0}}if(!A&&o()){A=0}if(q===0&&!A){j.invokeCallbacks("start",[v.id])}this.showStep(q,A);E=t().show();if(r.animate){E.initAnimate()}this.isActive=true;return this};this.showStep=function(I,G){var L=v.steps,J=L[I],H=L.length,F=v.id+":"+I,E=t(),K;q=I;A=G;if(typeof G!==i&&o()){J=J[G];F+="-"+G}K=(I===H-1)||(G>=J.length-1);E.renderStep(J,I,G,K,x);if(J.multiPage){F+=":mp"}j.setState(r.cookieName,F,1);return this};this.prevStep=function(){var F=C(),E=false;j.invokeCallbacks("prev",[v.id,q]);if(F.onPrev){F.onPrev()}if(r.skipIfNoElement){while(!E&&y()){F=C();E=j.getStepTarget(F)}if(!E){this.endTour()}}else{if(y()){F=C();if(!j.getStepTarget(F)){j.invokeCallbacks("error",[v.id,q]);return}}}this.showStep(q,A);return this};this.nextStep=function(){var F=C(),E=false;j.invokeCallbacks("next",[v.id,q]);if(F.onNext){F.onNext()}if(r.skipIfNoElement){while(!E&&B()){F=C();E=j.getStepTarget(F)}if(!E){this.endTour()}}else{if(B()){F=C();if(!j.getStepTarget(F)){j.invokeCallbacks("error",[v.id,q]);this.endTour();return}}}this.showStep(q,A);return this};this.endTour=function(G,F){var E=t();G=j.valOrDefault(G,true);F=j.valOrDefault(F,true);q=0;A=undefined;u=undefined;E.hide();if(G){j.clearState(r.cookieName)}this.isActive=false;if(F){j.invokeCallbacks("end",[v.id])}hopscotch.removeCallbacks(true);return this};this.getCurrTour=function(){return v};this.getCurrStepNum=function(){return q};this.getCurrSubstepNum=function(){return A};this.addCallback=function(G,E,F){if(E){h[G].push({cb:E,fromTour:F})}return this};this.removeCallbacks=function(F){var I,G,E,H;for(H in h){if(F){I=h[H];for(G=0,E=I.length;G<E;++G){if(I[G].fromTour){I.splice(G--,1);--E}}}else{h[H]=[]}}return this};s=function(F,G){var E;if(!r){r={}}j.extend(r,F);r.animate=j.valOrDefault(r.animate,false);r.smoothScroll=j.valOrDefault(r.smoothScroll,true);r.scrollDuration=j.valOrDefault(r.scrollDuration,1000);r.scrollTopMargin=j.valOrDefault(r.scrollTopMargin,200);r.showCloseButton=j.valOrDefault(r.showCloseButton,true);r.showPrevButton=j.valOrDefault(r.showPrevButton,false);r.showNextButton=j.valOrDefault(r.showNextButton,true);r.bubbleWidth=j.valOrDefault(r.bubbleWidth,280);r.bubblePadding=j.valOrDefault(r.bubblePadding,15);r.bubbleBorder=j.valOrDefault(r.bubbleBorder,6);r.arrowWidth=j.valOrDefault(r.arrowWidth,20);r.skipIfNoElement=j.valOrDefault(r.skipIfNoElement,false);r.cookieName=j.valOrDefault(r.cookieName,"hopscotch.tour.state");if(F){j.extend(k,F.i18n)}this.addCallback("next",F.onNext,G);this.addCallback("prev",F.onPrev,G);this.addCallback("start",F.onStart,G);this.addCallback("end",F.onEnd,G);this.addCallback("error",F.onError,G);this.addCallback("close",F.onClose,G);E=t();if(r.animate){E.initAnimate()}else{E.removeAnimate()}E.showPrevButton(r.showPrevButton,true);E.showNextButton(r.showNextButton,true);E.showCloseButton(r.showCloseButton,true);return this};this.configure=function(E){return s.call(this,E,false)};this.init(p)};m=new n();c[d]=m}(window,"hopscotch"));
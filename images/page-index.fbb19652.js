(function(z){
var OJ=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};var PJ=function(a){z.Dn.call(this,"register");this.Ht=a};var QJ=function(){z.S.call(this)};var RJ=function(a){var b=z.Ak["index-alternative"];b&&QJ.prototype.TF&&window.$.extend(a,{attributes:{plan:b}});z.nk(a)};
var SJ=function(){TJ();UJ();(0,window.$)(".qrcode-app-download .app-link").on({mouseenter:function(){RJ({category:"app",action:"hover_download_app",label:"home_download_app"})},click:function(){RJ({yc:!0,category:"app",action:"visit_app",label:"home_download_app"})}})};var TJ=function(){var a=(0,window.$)(".sign-flow");if(a.length){var b=new VJ(QJ.prototype.BP);b.w(a[0]);b.g("trackRequested",function(a){a.preventDefault();a.label="home_default";RJ(a)})}};
var WJ=function(){var a=(0,window.$)(".main-sidebar"),b=(0,window.$)(".main-sidebar-inner"),c=(0,window.$)(window),d=OJ(function(){return b.offset().top-20});c.on("scroll",function(){b.is(":visible")&&b.toggleClass("sticky",c.scrollTop()>d())});(0,window.$)(".index-show-sidebar-button").click(function(){(0,window.$)(this).parent().remove();a.removeClass("hidden-phone")})};
var UJ=function(){function a(){var a=window.particlesJS;a&&((0,window.$)("\x3cdiv\x3e",{id:"particles"}).appendTo("body"),a("particles",c))}var b=!!window.HTMLCanvasElement,c={particles:{number:{value:20,density:{enable:!0,value_area:1E3}},color:{value:"#e1e1e1"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:15,random:!0,anim:{enable:!1,
speed:180,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:650,color:"#cfcfcf",opacity:.26,width:1},move:{enable:!0,speed:2,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},
push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0};(0,window.$)(function(){b&&window.$.getScript("/static/revved/components/particles.js/particles.min.00debcf6.js",a)})};
var XJ=function(){function a(){(0,window.$)(this).trigger("requestStory")}function b(){var a=f.filter(".current");a.length&&d.css("top",a.position().top+a.height()/2-10)}var c={member:z.Ou(function(a){return window.$.get("/node/HomeHeroStoryV2",{params:{member_hash:a}})}),topic:z.Ou(function(a){return window.$.get("/node/HomeTopicStoryV2",{params:{url_token:a}})})},d=(0,window.$)("div.single-story \x3e .icon-sign").addClass("visible"),f=(0,window.$)("a.rep"),g=null;f.mouseenter(function(){g=(0,window.setTimeout)((0,z.q)(a,
this),500)}).mouseleave(function(){(0,window.clearTimeout)(g)}).click(a).on("requestStory",function(){var a=(0,window.$)(this),f=a.data(),g=f.type,f=f.token;a.addClass("current").siblings().removeClass("current");b();c[g](f).done(function(b){(0,window.$)(".single-story-inner").fadeOut(150,function(){(0,window.$)(this).remove();(0,window.$)(b).insertAfter(d).hide().fadeIn(150)});a.trigger("afterRequestStory")})});b()};
var YJ=function(){function a(){(0,window.clearInterval)(f);f=null}function b(){f||(f=(0,window.setInterval)(function(){for(var a=d.filter(":not(.current)").get(),b=Math.random,c=a.length-1;0<c;c--){var f=Math.floor(b()*(c+1)),n=a[c];a[c]=a[f];a[f]=n}(0,window.$)(a[0]).trigger("requestStory")},5E3))}var c=(0,window.$)("div.single-story"),d=(0,window.$)("div.rep"),f=null;c.hover(a,b);d.on("requestStory",a).on("afterRequestStory",b);return{start:b,stop:a}};
var VJ=function(a){z.S.call(this);this.uJ=a||!1};var ZJ=function(a){return!/^\+?[0-9]+$/.test(a)};var $J=function(a,b){a.account&&(a[b]=a.account,delete a.account)};var aK=function(){return"signin"===window.location.pathname.slice(1)?"signin":"signup"};
var bK=function(a){function b(){c.hide();d.show()}var c=(0,window.$)("div.mobi-front"),d=(0,window.$)("div.desk-front");c.on("click",".js-signin, .js-signup",function(a){d.find(".js-title-label").text("返回");d.find(".return").off().click(function(){window.location.hash=""});b();(0,window.$)(a.target).hasClass("js-signin")?window.location.hash="signin":window.location.hash="signup"});var f=(0,z.q)(function(){var a=window.location.hash.slice(1);c.is(":visible")||a||(a=aK());"signin"===a?(b(),cK(this)):
"signup"===a?(b(),dK(this)):(d.css("display",""),c.css("display",""))},a);a.v().g(window,"hashchange",f);a.v().g(z.Y,["accountcallback","sina_callback","qqconn_callback"],b);(0,window.setTimeout)(f)};
var eK=function(a){function b(a,b){(0,window.$)(":submit",a).click(function(){b(a)});(0,window.$)("keydown",a).click(function(c){13===c.keyCode&&b(a)})}fK(a);gK(a);hK(a);a.eo();iK();a.Yi();bK(a);var c=a.m();(0,window.$)(".view-signin .js-signup",c).click(function(){dK(a)});(0,window.$)(".view-signup .js-signin",c).click(function(){cK(a)});b((0,window.$)(".view-signin form",c),function(b){b=b.Jd().account;var c=ZJ(b);a.Fa({category:"sign_in",action:b?"click_sign_in_submit_"+(c?"email":"phone"):"click_sign_in_submit_no_channel"})});
b((0,window.$)(".view-signup form",c),function(b){b=b.Jd();b=b.phone_num||b.account;var c=a.kh?ZJ(b):!1;a.Fa({category:"sign_up",action:b||!a.kh?"click_sign_up_submit_"+(c?"email":"phone"):"click_sign_up_submit_no_channel"})});(0,window.$)(".js-bindweibo",c).click(function(){a.Fa({category:"sign_in_or_sign_up",action:"click_sign_with_weibo_start"});z.El("sina",a)});(0,window.$)(".js-bindqq",c).click(function(){a.Fa({category:"sign_in_or_sign_up",action:"click_sign_with_qq_start"});z.El("qq",a)});
(0,window.$)(".js-bindwechat",c).click(function(){a.Fa({category:"sign_in_or_sign_up",action:"click_sign_with_wechat_start"});z.El("wechat",a)})};var fK=function(a){var b=(0,window.$)(".index-sign-tabnavs a",a.m()),c=(0,z.q)(function(){var a=window.location.hash||"#"+aK();b.filter(function(){return(0,window.$)(this).attr("href")===a}).addClass("active").siblings().removeClass("active")},a);a.v().g(window,"hashchange",c);c()};
var gK=function(a){a.Km=(0,window.$)(".view-signin",a.m());var b=(0,window.$)("form",a.Km),c=(0,window.$)("button.submit",b);b.validate(window.$.extend({},a.uJ?z.KD:a.mG,{submitHandler:z.ql(c,window.$.proxy(a.sz,a))}));c=(0,window.$)(".captcha-module",b).get(0);a.Ys=new z.Jl;a.Ys.w(c);var d=(0,window.$)('input[name\x3d"account"]',b);(0,window.$)(".unable-login",a.Km).click(function(){var b=new z.On(d.val());b.F(!0);a.v().g(b,z.Hn,function(){z.Kl(a.Ys)})})};
var hK=function(a){a.oc=(0,window.$)(".view-signup",a.m());var b=(0,window.$)("form",a.oc);a.kh=!(0,window.$)('input[name\x3d"phone_num"]',b).length;var c=(0,window.$)("button.submit",b);b.validate(window.$.extend({},a.uJ?z.KD:a.mG,{submitHandler:z.ql(c,window.$.proxy(a.Wj,a))}));var d=(0,window.$)('input[name\x3d"account"]',b);a.oc.on("click",".switch-to-login",function(){cK(a);var b=d.val();b&&(0,window.$)('input[name\x3d"account"]',a.gV).val(b)});c=(0,window.$)(".captcha-module",b).get(0);a.Zo=
new z.Jl;a.Zo.w(c);z.Kl(a.Zo);a.Em=new z.Dl(b);a.Em.start();a.iy()};var cK=function(a){a.Km.is(":visible")||(a.oc.hide(),a.Km.show(),a.Yi(),z.Kl(a.Ys))};var dK=function(a){a.oc.is(":visible")||(a.Km.hide(),a.oc.show(),a.Yi(),z.Kl(a.Zo))};var iK=function(){var a=z.pl.get("accountcallback");z.pl.remove("accountcallback");if(a){a=(0,window.decodeURIComponent)(a);try{var b=JSON.parse(a);z.Y.dispatchEvent(new z.Bl("accountcallback",b))}catch(c){}}};z.v(PJ,z.Kn);
PJ.prototype.B=function(){PJ.o.B.call(this);this.ia(jK)};PJ.prototype.D=function(){PJ.o.D.call(this);this.Bb()};
PJ.prototype.Bb=function(){var a=(0,window.$)("form",this.qb);this.ye(a,this.Wj);(0,window.$)('input[name\x3d"phone_num"]',a).val(this.Ht.phone_num);var b=(0,window.$)(".send-code",a),c=(0,window.$)('input[name\x3d"phone_num"]',a);z.Nn(this,b,function(){var b=c.val(),f=this;window.$.get("/send_register_verification_code/sms",window.$.param({phone_num:b}),function(b){b.r&&(b=b.data,f.ib(b,"account","phone_num"),a.data("validator").showErrors(b))})})};
PJ.prototype.Wj=function(a){var b=this,c=(0,window.$)(a);a=window.$.extend({},this.Ht,c.Jd());return window.$.post("/register/phone_num",a,function(a){a.r?(a=a.data,b.ib(a,"account","phone_num"),c.data("validator").showErrors(a)):(b.Fa({yc:!0,category:"sign_up",action:"sign_up_success_phone"}),b.Xc())})};var jK='\x3cdiv class\x3d"title verification"\x3e\x3ch1\x3e验证手机\x3c/h1\x3e\x3ch2\x3e请输入你收到的 6 位数短信验证码\x3c/h2\x3e\x3c/div\x3e\x3cdiv class\x3d"view verification"\x3e\x3cform\x3e\x3cdiv class\x3d"input-wrapper"\x3e\x3cinput type\x3d"text" name\x3d"phone_num" placeholder\x3d"手机号" required\x3e\x3c/div\x3e\x3cdiv class\x3d"input-wrapper verification-code"\x3e\x3cinput type\x3d"text" name\x3d"verification_code" placeholder\x3d"6 位数验证码" maxlength\x3d"6" required\x3e\x3cbutton type\x3d"button" class\x3d"send-code"\x3e重发验证码\x3c/button\x3e\x3c/div\x3e\x3cbutton class\x3d"submit blue-button"\x3e进入知乎\x3c/button\x3e\x3c/form\x3e\x3c/div\x3e';z.v(QJ,z.S);z.e=QJ.prototype;z.e.TF="/"===window.location.pathname;z.e.uP=z.T.has(window.document.body,"page-index-legacy");z.e.AP=z.T.has(window.document.body,"page-index-simple");z.e.oP=z.T.has(window.document.body,"page-index-custom");z.e.BP=z.T.has(window.document.body,"theme-simple");z.e.init=function(){this.w(window.document.body)};
z.e.D=function(a){QJ.o.D.call(this,a);if(this.uP)TJ(),XJ(),this.mo(),z.Ej||(a=YJ(),a.start(),z.Uc(this,a.stop));else if(this.AP)SJ();else if(this.oP){TJ();this.ky();if(a=(0,window.$)(".index-searchform"))a=(0,window.$)(".query",a)[0],(new z.tu).w(a);WJ()}QJ.prototype.TF&&RJ({category:"view_home",action:"visit_home"})};
z.e.ky=function(){var a=(0,window.$)(".index-feeds");if(a.length){var b=a[0],c=!!b.getAttribute("data-infinite"),d=new z.Nu({use:[],ag:c});d.use("childConstructor",{factory:z.fA});d.use("autoload",{wv:!1});d.use("nodeSource");this.L(d);d.w(b);var f=function(a){var b=new z.J;b.g("trackRequested",function(b){b.preventDefault();b.label="feed_more";"switch_to_sign_in_box_appear"===b.action&&(b.value=a);RJ(b)});var c=new z.Xn;c.Ac="feed_more";c.ud(b);c.F(!0)};(0,window.$)(".index-guide-feeds-bottom .js-open-signup-dialog").click(function(){f(0)});
a.on("click",".js-open-signup-dialog",function(){var a=(0,window.$)(this).closest(".feed-item").index();f(a+1)});d.g("expand",function(a){a.target instanceof z.Hx&&(a=(0,window.$)(a.target.m()).closest(".feed-item").index(),RJ({category:"view_answer",action:"click_expand_answer",label:"feed_expand_answer",value:a+1}))});var g=z.zj(function(){h.addClass("index-guide-mask-show");var a=(0,window.$)("#index-guide-sign-flow-tmpl").html(),a=(0,window.$)(a).appendTo("#index-guide-sign-flow-holder"),b=new VJ(!0);
b.w(a[0]);b.g("trackRequested",function(a){a.preventDefault();a.label="feed_bottom";RJ(a)});var c=(0,window.$)(".index-guide-mask"),f=d.cb()[15];z.xk(c[0],function(){RJ({category:"sign_up",action:"popup_sign_up_box_appear",label:"feed_bottom"})});var g=(0,window.$)(".main-sidebar-inner");(0,window.$)(window).on("scroll",function(){c.toggleClass("sticky",0>=f.getBoundingClientRect().top);c.hasClass("sticky")?c.css("top",""):c.css("top",f.offsetTop);var a=g[0];if(50>c[0].getBoundingClientRect().top-
a.clientHeight){var b=g.data("relativeTop");b||(b=z.mi(a,a.parentNode).y,g.addClass("leave-sticky").css("top",b).data("relativeTop",b))}else g.removeClass("leave-sticky").css("top","").data("relativeTop","")})}),h=(0,window.$)(".page-index-custom-main"),a=function(){15<=d.cb().length&&g()};c&&(d.on("next",a),a())}};
z.e.mo=function(){window.$.each({".app-link.ios":["click_zhihu_ios_dl_link","homepage_not_logged_in"],".app-link.android":["click_zhihu_android_dl_link","homepage_not_logged_in"],'a.app-download-button[href^\x3d"http://itunes"]':["click_zhihu_ios_dl_link","homepage_mobile_big_not_logged_in"],'a.app-download-button[href^\x3d"https://play.google.com"]':["click_zhihu_android_dl_link","homepage_mobile_big_not_logged_in"]},function(a,b){(0,window.$)(a).on("click",function(){z.X.apply(null,["app-promotion"].concat(b))})})};
z.v(VJ,z.S);z.e=VJ.prototype;z.e.D=function(){VJ.o.D.call(this);eK(this)};z.e.Fa=function(a){this.dispatchEvent(window.$.extend({type:"trackRequested"},a))};z.e.iy=function(){var a=(0,window.$)('input[name\x3d"account"]',this.oc).get(0);a&&new z.Bn(a,{Zg:a.parentNode})};
z.e.sz=function(a){var b=this,c=(0,window.$)(a);a=c.Jd();var d=ZJ(a.account);b.Fa({category:"sign_in",action:a.account?"click_sign_in_submit_"+(d?"email":"phone"):"click_sign_in_submit_no_channel"});var f=d?"/login/email":"/login/phone_num";d?$J(a,"email"):$J(a,"phone_num");return window.$.post(f,a,function(a){a.r?(c.data("validator").showErrors(a.data),z.Kl(b.Ys)):(b.Fa({yc:!0,category:"sign_in",action:"sign_in_success_"+(d?"email":"phone")}),b.Xc())})};
z.e.Wj=function(a){var b=this;a=(0,window.$)(a);var c=a.Jd(),d=b.kh?ZJ(c.account):!1;b.Fa({yc:!0,category:"sign_up",action:"sign_up_front_end_pass_"+(d?"email":"phone")});var f=d?"/register/email":"/register/phone_num/validation";d?$J(c,"email"):$J(c,"phone_num");var g=this.Em.stop();c.userInfo=JSON.stringify(g);var h=a.data("validator");return d?window.$.post(f,c,function(a){a&&a.r?(z.Kl(b.Zo),h.showErrors(a.data)):(b.Fa({yc:!0,category:"sign_up",action:"sign_up_success_email"}),b.Xc())}):window.$.post(f,
c,function(a){a.r?(z.Kl(b.Zo),b.kh||$J(a.data,"phone_num"),h.showErrors(a.data)):(a=new PJ(c),a.ud(b),a.F(!0),window.$.get("/send_register_verification_code/sms",{phone_num:c.phone_num}))})};z.e.Yi=function(){if(!z.vn){var a=this.m();(0,window.setTimeout)(function(){(0,window.$)("input[placeholder]:visible",a).placeholder()},10)}};
z.e.mG={onkeyup:!1,onfocusout:!1,validClass:"",focusInvalid:!1,highlight:z.p,messages:{fullname:{required:"请填写姓名"},account:{required:"请填写手机号或邮箱"},password:{required:"请填写密码"},captcha:{required:"请填写验证码"},phone_num:{required:"请填写手机号"}},showErrors:function(a,b){if(b.length){b.sort(function(a,b){var c=["fullname","account","phone_num","password","captcha"],d=z.wb(c,a.element.name),c=z.wb(c,b.element.name);return d>c});var c=(0,window.$)(".failure",this.currentForm).show(),d=(0,window.$)(".failure ul",
this.currentForm).empty();window.$.each(b,function(a,b){var h=(0,window.$)(b.element),k=(0,window.$)('\x3cli\x3e\x3ci class\x3d"icon-sign icon-sign-error"\x3e\x3c/i\x3e'+b.message+"\x3c/li\x3e").appendTo(d),m=(0,window.$)('\x3cspan class\x3d"switch-to-login"\x3e · 直接登录\x3c/span\x3e');"该邮箱已注册"===b.message||"该手机号已注册"===b.message?m.appendTo(k):k.click(function(){h.focus()});h.one("focus",function(){k.remove();d.is(":empty")&&c.hide()})})}}};z.e.eo=function(){z.Il(this.v(),this.vQ)};
z.e.vQ=function(a){a=a.mf;var b={qqconn:"qq",wechat:"wechat",sina:"weibo"}[a.type];1===a.login?(this.Fa({yc:!0,category:"sign_in",action:"sign_in_success_"+b}),this.Xc()):(a=new z.Sn(a),a.ud(this),a.F(!0))};z.e.Xc=function(){var a=(new z.jm(window.location.href)).md().get("next");a?window.location.href=a:window.location.reload()};z.wa("ZH.entrySignPage",function(){(new QJ).init()});z.qh("page-index");}).call(this, __z_z__);
//# sourceURL=/static/revved/-/js/closure/page-index.fbb19652.js
(window.__twttrll=window.__twttrll||[]).push([[7],{172:function(t,e,r){var i=r(40),a=r(175),n=r(7);(i=Object.create(i)).build=n(i.build,null,a),t.exports=i},173:function(t,e,r){var i=r(37),a=r(21),n=r(39),s=r(0),o=r(7),d=r(34),c=r(5),u=r(179);t.exports=function(t){t.params({partner:{fallback:o(d.val,d,"partner")}}),t.define("scribeItems",function(){return{}}),t.define("scribeNamespace",function(){return{client:"tfw"}}),t.define("scribeData",function(){return{widget_origin:n.rootDocumentLocation(),widget_frame:n.isFramed()&&n.currentDocumentLocation(),widget_partner:this.params.partner,widget_site_screen_name:u(d.val("site")),widget_site_user_id:c.asNumber(d.val("site:id")),widget_creator_screen_name:u(d.val("creator")),widget_creator_user_id:c.asNumber(d.val("creator:id"))}}),t.define("scribe",function(t,e,r){t=s.aug(this.scribeNamespace(),t||{}),e=s.aug(this.scribeData(),e||{}),i.scribe(t,e,!1,r)}),t.define("scribeInteraction",function(t,e,r){var i=a.extractTermsFromDOM(t.target);i.action=t.type,"url"===i.element&&(i.element=a.clickEventElement(t.target)),this.scribe(i,e,r)})}},174:function(t,e,r){var i=r(5),a=r(0);t.exports=function(t){t.define("widgetDataAttributes",function(){return{}}),t.define("setDataAttributes",function(){var t=this.sandbox.sandboxEl;a.forIn(this.widgetDataAttributes(),function(e,r){i.hasValue(r)&&t.setAttribute("data-"+e,r)})}),t.after("render",function(){this.setDataAttributes()})}},175:function(t,e,r){var i=r(41),a=r(0),n=r(176);function s(){i.apply(this,arguments),this.Widget=this.Component}s.prototype=Object.create(i.prototype),a.aug(s.prototype,{factory:n,build:function(){return i.prototype.build.apply(this,arguments)},selectors:function(t){var e=this.Widget.prototype.selectors;t=t||{},this.Widget.prototype.selectors=a.aug({},t,e)}}),t.exports=s},176:function(t,e,r){var i=r(6),a=r(36),n=r(42),s=r(0),o=r(7),d=r(177),c="twitter-widget-";t.exports=function(){var t=n();function e(e,r){t.apply(this,arguments),this.id=c+d(),this.sandbox=r}return e.prototype=Object.create(t.prototype),s.aug(e.prototype,{selectors:{},hydrate:function(){return i.resolve()},prepForInsertion:function(){},render:function(){return i.resolve()},show:function(){return i.resolve()},resize:function(){return i.resolve()},select:function(t,e){return 1===arguments.length&&(e=t,t=this.el),t?(e=this.selectors[e]||e,s.toRealArray(t.querySelectorAll(e))):[]},selectOne:function(){return this.select.apply(this,arguments)[0]},selectLast:function(){return this.select.apply(this,arguments).pop()},on:function(t,e,r){var i,n=this.el;this.el&&(t=(t||"").split(/\s+/),2===arguments.length?r=e:i=e,i=this.selectors[i]||i,r=o(r,this),t.forEach(i?function(t){a.delegate(n,t,i,r)}:function(t){n.addEventListener(t,r,!1)}))}}),e}},177:function(t,e){var r=0;t.exports=function(){return String(r++)}},178:function(t,e,r){var i=r(0);t.exports=function(t){return i.isType("string",t)}},179:function(t,e){t.exports=function(t){return t&&"@"===t[0]?t.substr(1):t}},185:function(t,e,r){var i=r(4),a=r(5),n=i.createElement("div");t.exports=function(t){return a.isNumber(t)&&(t+="px"),n.style.width="",n.style.width=t,n.style.width||null}},187:function(t,e){var r=/^(dark|light)$/;t.exports=function(t){return r.test(t)}},215:function(t,e,r){var i=r(185),a=r(7),n=r(70),s=r(178),o=r(187),d=r(34),c=r(5),u={tweetId:{required:!0,validate:s},id:{validate:s},lang:{required:!0,transform:n.matchLanguage,fallback:"en"},width:{required:!0,fallback:"550px",validate:i,transform:i},theme:{fallback:[a(d.val,d,"widgets:theme"),"light"],validate:o},hideCard:{fallback:!1,transform:c.asBoolean},hideThread:{fallback:!1,transform:c.asBoolean},partner:{fallback:a(d.val,d,"partner")}};t.exports=u},216:function(t,e,r){var i=r(178);t.exports=function(t){t.params({align:{required:!1},width:{required:!1},floatedWidth:{fallback:"350px",validate:i},centeredWidth:{fallback:"70%",validate:i}}),t.before("render",function(){var t,e,r,i,a=this.params.align;switch(a&&a.toLowerCase()){case"center":t=this.params.width||this.params.centeredWidth,e="auto",r="auto";break;case"left":t=this.params.width||this.params.floatedWidth,r="10px",i="left";break;case"right":t=this.params.width||this.params.floatedWidth,e="10px",i="right";break;default:return}return this.styleSandboxWrapper&&this._sandboxWrapperEl?this.styleSandboxWrapper({width:t,marginLeft:e,marginRight:r,cssFloat:i}):this.sandbox.styleSelf({width:t,marginLeft:e,marginRight:r,cssFloat:i})})}},242:function(t,e,r){var i=r(6),a=r(47),n=r(19),s=r(172),o=r(18),d=r(20),c=r(0),u=r(11),l=r(21),f=r(215),h="Twitter Tweet",p=a.version;t.exports=s.couple(r(173),r(174),function(t){t.params(f),t.define("getUrlParams",function(){var t=this.scribeData();return c.compact({dnt:d.enabled(),hideCard:this.params.hideCard,hideThread:this.params.hideThread,id:this.params.tweetId,lang:this.params.lang,embedId:this.id,theme:this.params.theme,partner:this.params.partner,widgetsVersion:p,width:this.params.width,origin:t.widget_origin,frame:t.widget_frame,siteScreenName:t.widget_site_screen_name,siteUserId:t.widget_site_user_id,creatorScreenName:t.widget_creator_screen_name,creatorUserId:t.widget_creator_user_id})}),t.around("scribeItems",function(t){return c.aug(t(),l.formatHorizonTweetData(this.params.tweetId))}),t.around("scribeNamespace",function(t){return c.aug(t(),{page:"tweet"})}),t.around("scribeData",function(t){return c.aug(t(),{context:"horizon",widget_iframe_version:this.sandbox.iframeVersion})}),t.around("widgetDataAttributes",function(t){return c.aug({"tweet-id":this.params.tweetId},t())}),t.define("styleSandboxWrapper",function(t){var e=this;return o.write(function(){c.forIn(t,function(t,r){e._sandboxWrapperEl.style[t]=r})})}),t.override("render",function(){var t=u.url(n.embedIframe(),this.getUrlParams());return this.sandbox.setWaitToSwapUntilRendered(!0),i.all([this.sandbox.setTitle(h),this.styleSandboxWrapper({display:"flex",maxWidth:this.params.width,width:"100%",marginTop:"10px",marginBottom:"10px"}),this.sandbox.styleSelf({display:"block",flexGrow:"1"}),this.sandbox.loadDocument(t)])}),t.after("render",function(){var t=this.sandbox;return t.getResultsPromise().then(function(){t.makeVisible()}).then(function(){return t.getRenderedPromise()})})})},92:function(t,e,r){var i=r(172);t.exports=i.build([r(242),r(216)])}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{11:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s}));var r=n(4),i=n.n(r),a=n(36),o=Object.freeze({CLICK:"click",INITIALIZED:"initialized",LIKE:"like",NO_RESULTS:"no_results",RENDERED:"rendered",RESIZE:"resize",RESULTS:"results",TRIGGER:"trigger"}),s=Object.freeze({INTENT:"intent"}),c=function(){function e(){}var t=e.prototype;return t.initialize=function(e){var t=e.embedId,n=e.data;this._embedId=t,this._data=n||{}},t.send=function(e){var t,n=e.key,r=e.details,o=window.parent;if(o&&o.postMessage){var s="twttr.private."+n,c={jsonrpc:"2.0",method:s,id:this._embedId,params:[i()({},r,{data:this._data})]};Object(a.a)("[rpc] MESSAGE "+s,r),o.postMessage(((t={})["twttr.embed"]=c,t),"*")}},e}();t.c=new c},12:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return c}));var r="tfw",i=Object.freeze({TWEET:"tweet",DDG:"ddg"}),a=Object.freeze({MAIN:"main",PARENT:"parent",QUOTE:"quote",PARENT_QUOTE:"parent-quote"}),o=(Object.freeze({FAKE_EXP:"tfw_experiment_1234"}),Object.freeze({AUTHOR:"author",CARD:"card",LIKE_ACTION:"like-action",LOGO:"logo",NEWS_ACTION:"news-action",PHOTO:"photo",PLACE:"place",PRIVACY_NOTICE:"privacy-notice",PUBLIC_INTEREST_NOTICE:"public-interest-notice",SOFT_INTERVENTION_PIVOT:"soft-intervention-pivot",TIMESTAMP:"timestamp",TWEET_REPLY_CONTEXT:"tweet-reply-context",TWEET_TEXT_CASHTAG:"tweet-text-cashtag",TWEET_TEXT_HASHTAG:"tweet-text-hashtag",TWEET_TEXT_MEDIA:"tweet-text-media",TWEET_TEXT_MENTION:"tweet-text-mention",TWEET_TEXT_QUOTE:"tweet-text-quote",TWEET_TEXT_URL:"tweet-text-url",VIDEO:"video",WHITESPACE:"whitespace"})),s=(Object.freeze({}),Object.freeze({CLICK_EXTERNAL:"click-external",CLICK_INTERACTIVE:"click-interactive",CLICK_TWITTER:"click-twitter",EXPERIMENT:"experiment",IMPRESSION:"impression",RESULTS:"results",NO_RESULTS:"no-results",SEEN:"seen"})),c="horizon"},201:function(e,t,n){var r={"./ar.js":[219,0,58],"./bg.js":[220,0,59],"./bn.js":[221,0,60],"./ca.js":[222,0,6],"./cs.js":[223,0,61],"./da.js":[224,0,62],"./de.js":[225,0,7],"./el.js":[226,0,63],"./en-GB.js":[227,0,8],"./en-ss.js":[228,0,64],"./en-xx.js":[229,0,65],"./en.js":[230,0,9],"./es.js":[231,0,10],"./eu.js":[232,0,11],"./fa.js":[233,0,66],"./fi.js":[234,0,67],"./fil.js":[235,0,68],"./fr.js":[236,0,12],"./ga.js":[237,0,69],"./gl.js":[238,0,13],"./gu.js":[239,0,70],"./he.js":[240,0,71],"./hi.js":[241,0,72],"./hr.js":[242,0,73],"./hu.js":[243,0,74],"./id.js":[244,0,14],"./it.js":[245,0,15],"./ja.js":[246,0,75],"./kn.js":[247,0,76],"./ko.js":[248,0,77],"./mr.js":[249,0,78],"./ms.js":[250,0,16],"./nb.js":[251,0,17],"./nl.js":[252,0,18],"./pl.js":[253,0,79],"./pt.js":[254,0,80],"./ro.js":[255,0,81],"./ru.js":[256,0,82],"./sk.js":[257,0,83],"./sr.js":[258,0,84],"./sv.js":[259,0,19],"./ta.js":[260,0,85],"./th.js":[261,0,86],"./tr.js":[262,0,87],"./uk.js":[263,0,88],"./ur.js":[264,0,89],"./vi.js":[265,0,90],"./zh-Hant.js":[266,0,20],"./zh.js":[267,0,21]};function i(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],i=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n.t(i,7)}))}i.keys=function(){return Object.keys(r)},i.id=201,e.exports=i},211:function(e,t,n){var r={"./ar.js":[268,0,22],"./bn.js":[269,0,23],"./cs.js":[270,0,24],"./da.js":[271,0,25],"./de.js":[272,0,26],"./el.js":[273,0,27],"./en.js":[274,0,28],"./es.js":[275,0,29],"./fa.js":[276,0,30],"./fi.js":[277,0,31],"./fil.js":[278,0,32],"./fr.js":[279,0,33],"./he.js":[280,0,34],"./hi.js":[281,0,35],"./hu.js":[282,0,36],"./id.js":[283,0,37],"./it.js":[284,0,38],"./ja.js":[285,0,39],"./ko.js":[286,0,40],"./ms.js":[287,0,41],"./nb.js":[288,0,42],"./nl.js":[289,0,43],"./pl.js":[290,0,44],"./pt.js":[291,0,45],"./ro.js":[292,0,46],"./ru.js":[293,0,47],"./sv.js":[294,0,48],"./th.js":[295,0,49],"./tr.js":[296,0,50],"./uk.js":[297,0,51],"./vi.js":[298,0,52],"./zh-Hant.js":[299,0,53],"./zh.js":[300,0,54]};function i(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],i=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n.t(i,7)}))}i.keys=function(){return Object.keys(r)},i.id=211,e.exports=i},214:function(e,t,n){"use strict";n.r(t);var r,i,a=n(4),o=n.n(a),s=n(65),c=function(e){var t=e.headers,n=t&&t["content-type"];return"string"==typeof n&&n.indexOf("application/json")>=0&&e.body?JSON.parse(e.body):null},u={host:"https://cdn.syndication.twimg.com"},d=function(){function e(e){this.client=new s.a(o()({},u,e))}var t=e.prototype;return t.dispatch=function(e){return this.client.dispatch(e).then(c)},t.get=function(e,t,n){return this.dispatch({path:"/"+e,method:"GET",params:t,headers:n||{}})},e}(),f=n(218),l=n(50),h=n.n(l),m=n(103),p=n.n(m),w="en",v={ar:!0,fa:!0,he:!0},E=function(e){return Boolean(v[e])},j=function(e){return h.a.locales.indexOf(e)>-1},_=j,T=function(e){return w=j(e)?e:"en",f.a.setLocale(h.a.getCldrLocale(w)).then((function(){p.a.setPreferredLanguageRTL(E(w)),document&&document.documentElement&&document.documentElement.setAttribute("lang",w)}))},b=function(){return w},g=n(0),y=n(49),k=n(51),O=n.n(k),N=function(e){return!0},I=function(e){return e},L=function(e,t){return e[t]},A=function(e,t){return t.reduce((function(t,n){var r,i=n.key,a=O()(n,["key"]),s=a.accessor,c=void 0===s?L:s,u=a.required,d=void 0!==u&&u,f=a.validate,l=void 0===f?N:f,h=a.transform,m=void 0===h?I:h,p=a.fallback,w=c(e,i);if(void 0!==w&&l(w)){var v,E=m(w);if(void 0!==E)return o()({},t,((v={})[i]=E,v))}if(void 0!==p)return o()({},t,((r={})[i]=p,r));if(d)throw new Error(i+" is a required parameter");return t}),{})},S=Object.freeze({tweet:"tweet"}),D=/^\d+$/,R=/^[a-zA-Z0-9-]+$/,z=function(e){return e.replace(/[^a-zA-Z0-9-_:/?=@.]/g,"")},P=function(){var e=y.a.parseQueryString(location.search),t=[{key:"id",validate:function(e){return D.test(e)},required:!0},{key:"embedId",validate:function(e){return R.test(e)},fallback:"embed-0"},{key:"lang",validate:function(e){return _(e)},fallback:"en"},{key:"dnt",validate:function(e){return["true","false"].includes(e)},transform:function(e){return"true"===e},fallback:!1},{key:"pageData",accessor:function(e){return A(e,[{key:"origin",validate:function(e){return"string"==typeof e},transform:z,fallback:""},{key:"frame",validate:function(e){return"string"==typeof e},transform:z,fallback:""},{key:"partner",validate:function(e){return"string"==typeof e},transform:z,fallback:""},{key:"siteScreenName",validate:function(e){return"string"==typeof e},transform:z,fallback:""},{key:"siteUserId",validate:function(e){return"string"==typeof e},transform:z,fallback:""},{key:"creatorScreenName",validate:function(e){return"string"==typeof e},transform:z,fallback:""},{key:"creatorUserId",validate:function(e){return"string"==typeof e},transform:z,fallback:""}])}},{key:"theme",validate:function(e){return[g.e.ThemePaletteNames.light,g.e.ThemePaletteNames.dark].includes(e)},fallback:g.e.ThemePaletteNames.light,transform:function(e){return e===g.e.ThemePaletteNames.dark?g.e.ThemePaletteNames.darker:e}},{key:"hideThread",accessor:function(e){return e.hideThread},validate:function(e){return["true","false"].includes(e)},transform:function(e){return"true"===e},fallback:!1},{key:"hideMedia",accessor:function(e){return e.hideCard},validate:function(e){return["true","false"].includes(e)},transform:function(e){return"true"===e},fallback:!1},{key:"widgetsVersion",accessor:function(e){return e.widgetsVersion},validate:function(e){return"string"==typeof e&&/^([a-zA-Z0-9])+:([0-9])+$/.test(e)},fallback:void 0}];return A(e,t)},C=n(17),U=n(216),M=function(){U.a.setIsExternal((function(e){return e.hostname,e.href,!0}))},x=n(105),W=n.n(x),q=n(215),F=n(14),G=n.n(F),H=n(28),X=n.n(H),V=n(3),K=n.n(V),Z="twsrc",Q=function(e){var t=function(e){var t;return o()(((t={})[Z]="tfw",t),e)}(e);return function(e){return e.reduce((function(e,t){return e+"|"+t}))}(Object.keys(t).map((function(e){return function(e,t){return e+"^"+t}(e,t[e]?t[e]:"")})))},B=n(27),J=function(e){return e.startsWith("/")},Y=function(e){switch(e){case S.tweet:return"tweetembed";default:return"unknown"}},$=function(e){return function(e){return Object.keys(e).reduce((function(t,n){if(e[n].version){var r=n.split("_").slice(-1)[0];t.push(r+";"+e[n].bucket)}return t}),[]).join(",")}(e).split("").map((function(e){return e.charCodeAt(0).toString(16)})).join("")},ee=function(e){return J(e)?""+B.a+e:e},te=n(301),ne=n(217),re=function(){var e=b(),t=h.a.getCldrLocale(e);return n(211)("./"+t+".js")},ie=(r={loader:function(){return re().then((function(){return Promise.all([n.e(57),n.e(5)]).then(n.bind(null,675))}))},renderPlaceholder:function(){return null}},Object(ne.a)(o()({},r))),ae=n(24),oe=Object.freeze({FAILED:"failed",LOADED:"loaded",LOADING:"loading",NONE:"none"}),se=n(11),ce=n(37),ue=function(e){function t(t){var n,r;return n=e.call(this,t)||this,K()(G()(n),"_getNewsActionProps",(function(){var e=n.state.tweet;if(e)switch(e.news_action_type){case ce.a.conversation:return{newsActionLink:Object(B.d)(e),newsActionType:ce.a.conversation};case ce.a.covid19:return{newsActionLink:{pathname:e.covid19_hub_url},newsActionType:ce.a.covid19};default:return{newsActionLink:Object(B.f)(e),newsActionType:ce.a.profile}}})),K()(G()(n),"handleLayout",Object(te.a)((r=!1,function(e){var t=e.nativeEvent;if(n.state.tweetFetchStatus===oe.LOADED){var i=t.layout,a=i.width,o=i.height;se.c.send({key:se.b.RESIZE,details:{width:a,height:o}}),r||(se.c.send({key:se.b.RENDERED,details:{}}),r=!0)}}),100)),K()(G()(n),"loadTweet",(function(){var e=n.props.id,t=b();return n.fetchTweet(e,t).then((function(e){n.setState({tweet:e,tweetFetchStatus:oe.LOADED}),se.c.send({key:se.b.RESULTS,details:{}}),n._scribeAction(ae.a.RESULTS)})).catch((function(e){n.setState({tweetFetchStatus:oe.FAILED}),se.c.send({key:se.b.NO_RESULTS,details:{}}),n._scribeAction(ae.a.NO_RESULTS)}))})),K()(G()(n),"fetchTweet",(function(e,t){var r=n.props,i=r.pageData;return r.api.Tweet.fetch({id:e,lang:t}).then((function(e){return function(e,t,n,r){var i={twcamp:Y(e),twterm:t,twgr:$(r)},a={ref_src:Q(i),ref_url:n.origin};U.a.setLinkProcessor((function(e){if("object"==typeof e){var t=e.pathname,n=e.query,r=O()(e,["pathname","query"]),i=ee(t);return o()({pathname:i,query:y.a.isTwitterDotComLink(i)?o()({},a,n):n},r)}var s=ee(e);return{query:y.a.isTwitterDotComLink(s)?a:{},pathname:s}}))}(S.tweet,e.id_str,i,{}),e}))})),K()(G()(n),"_scribeAction",(function(e){ae.e.scribe(e,{section:ae.d.MAIN})})),n.state={tweetFetchStatus:oe.LOADING},n}X()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.id?this.loadTweet():this.setState({tweetFetchStatus:oe.FAILED})},n.render=function(){var e=this.state,t=e.tweet;return e.tweetFetchStatus===oe.LOADED&&t?this._renderTweet():null},n._renderTweet=function(){var e=this.props,t=e.hideMedia,n=e.hideThread,r=this.state.tweet,i=this._getNewsActionProps();return r&&i?C.createElement(ie,{hideMedia:t,hideThread:n,likeActionLink:Object(B.b)(r),newsActionLink:i.newsActionLink,newsActionType:i.newsActionType,onLayout:this.handleLayout,permalink:Object(B.d)(r),tweet:r,__self:this,__source:{fileName:"/data/jenkins/workspace/source_4/syndication/embed-iframe/src/embeds/Tweet/index.js",lineNumber:62,columnNumber:7}}):null},t}(C.Component),de=function(e,t){var n=t.api,r=t.hideMedia,i=t.hideThread,a=t.id,o=t.lang,s=t.pageData,c=t.theme;return T(o),q.a.setTheme(c),M(),new Promise((function(t,o){W.a.render(C.createElement(ue,{api:n,hideMedia:r,hideThread:i,id:a,pageData:s,__self:void 0,__source:{fileName:"/data/jenkins/workspace/source_4/syndication/embed-iframe/src/client/render.js",lineNumber:29,columnNumber:7}}),e,t)}))},fe=n(64),le=new function(e){this.Tweet=function(e){return{fetch:function(t,n){return e.get("tweet",t,n).then((function(e){return e?Promise.resolve(e):Promise.reject(new Error("could not parse api response"))}))}}}(e),this.Settings=function(e){return{fetch:function(t,n){return e.get("settings",t,n).then((function(e){return e?Promise.resolve(e):Promise.reject(new Error("could not parse api response"))}))}}}(e)}(new d({dispatcher:s.b})),he=P(),me=he.dnt,pe=he.embedId,we=he.hideMedia,ve=he.hideThread,Ee=he.id,je=he.lang,_e=he.pageData,Te=he.theme,be=he.widgetsVersion;ae.e.initialize({page:ae.c.TWEET,data:{client_version:be,dnt:me,widget_id:pe,widget_origin:_e.origin,widget_frame:_e.frame,widget_partner:_e.partner,widget_site_screen_name:_e.siteScreenName,widget_site_user_id:_e.siteUserId,widget_creator_screen_name:_e.creatorScreenName,widget_creator_user_id:_e.creatorUserId,widget_iframe_version:"72d82dc:1596743663159",item_ids:[Ee],item_details:(i={},i[Ee]={item_type:fe.a.TWEET},i)}}),se.c.initialize({embedId:pe,data:{tweet_id:Ee}}),se.c.send({key:se.b.INITIALIZED,details:{iframe_version:"72d82dc:1596743663159"}});var ge,ye=document.getElementById("app")||document.createElement("div");(ge=[],window.IntersectionObserver||ge.push(n.e(92).then(n.t.bind(null,664,7))),Promise.all(ge)).then((function(){return de(ye,{api:le,hideMedia:we,hideThread:ve,id:Ee,lang:je,pageData:_e,theme:Te})}))},24:function(e,t,n){"use strict";n.d(t,"c",(function(){return w.e})),n.d(t,"d",(function(){return w.f})),n.d(t,"b",(function(){return w.d})),n.d(t,"a",(function(){return w.a}));var r=n(4),i=n.n(r),a=n(3),o=n.n(a),s=n(36),c=n(64),u=n(28),d=n.n(u),f=n(150),l=function(e){function t(t){var n;n=e.call(this)||this;var r=t.category,i=t.clientName,a=t.transport;if(!r)throw new Error("required category is missing");if(n.category=r,!i)throw new Error("required clientName is missing");if(n.clientName=i,"function"!=typeof a)throw new Error("Invalid transport: "+a);return n._transport=a,n}d()(t,e);var n=t.prototype;return n.createEventObject=function(e,t,n){return i()({_category_:t,triggered_on:Date.now(),event_namespace:e},n)},n._handleError=function(e){try{this.emit("error",e)}catch(e){}throw e},n.log=function(e,t){var n=this.createEventObject(i()({client:this.clientName},e),this.category,t);this.emit("log",n),this._log(n)},n._log=function(e){var t=this;e&&this._transport(e).catch((function(e){return t._handleError(e)})).catch((function(){}))},t}(n.n(f).a),h=function(e){var t=new l(e);return t.on("log",(function(e){Object(s.a)("[scribe] LOG "+Object(c.b)(e.event_namespace),e)})),t.on("error",(function(e){Object(s.a)("[scribe] ERROR",e)})),t},m=n(35),p=n.n(m),w=n(12),v=function(e){var t,n,r,a,o,s,c,u={l:JSON.stringify(e)},d=e.dnt?{dnt:1}:{};return t=e.event_namespace,n=t.client,r=t.page,a=t.section,o=t.component,s=t.element,c=t.action,n===w.b&&r===w.e.TWEET&&a===w.f.MAIN&&o===w.d.PRIVACY_NOTICE&&void 0===s&&c===w.a.SEEN?i()({},u,d,{notice_seen:!0}):i()({},u,d)},E=function(){return function(e){return t=v(e),n="https://syndication.twitter.com/i/jot?"+p.a.stringify(t),new Promise((function(e,t){var r=document.createElement("img");r.addEventListener("load",(function(){return e(r)})),r.addEventListener("error",t),r.src=n}));var t,n}},j=function(){function e(){o()(this,"_data",{context:w.c}),this._scribeClient=h({clientName:w.b,category:"tfw_client_event",transport:E()})}var t=e.prototype;return t.initialize=function(e){this._page=e.page,this._data=i()({},this._data,e.data)},t.scribe=function(e,t,n){this._scribeClient.log(i()({page:this._page,action:e},t),i()({},this._data,n))},e}();t.e=new j},27:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return o})),n.d(t,"f",(function(){return s})),n.d(t,"c",(function(){return c}));var r="https://twitter.com",i=function(e){return{pathname:r+"/intent/like",query:{tweet_id:e.id_str}}},a=function(e){return{pathname:r+"/"+e.user.screen_name+"/status/"+e.id_str}},o=function(e){return{pathname:r+"/places/"+e.id}},s=function(e){return{pathname:r+"/"+e.user.screen_name}},c=function(e){return e&&"object"==typeof e?e.pathname:e}},36:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e,t){0}},37:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=Object.freeze({profile:"profile",conversation:"conversation",covid19:"covid19"})},49:function(e,t,n){"use strict";n(36);var r=n(35),i=n.n(r),a=/(?:^|(?:https?:)?\/\/(?:www\.)?twitter\.com(?::\d+)?\/(?:#!\/)?[\w_]+\/status(?:es)?\/)(\d+)/i,o=["twitter.com","mobile.twitter.com"];t.a={isStatusUrl:function(e){return"string"==typeof e&&a.test(e)},isTwitterDotComLink:function(e){try{var t=new URL(e).host;return o.indexOf(t)>-1}catch(e){return!1}},parseQueryString:function(e){void 0===e&&(e="");try{return i.a.parse(e.replace(/^\?/,""))}catch(e){if(e instanceof URIError)return{};throw e}}}},50:function(e,t){var n={ms:"msa",nb:"no",zh:"zh-cn","zh-Hant":"zh-tw"},r={msa:"ms",no:"nb","zh-cn":"zh","zh-tw":"zh-Hant"};e.exports={locales:["en","ar","bn","cs","da","de","el","es","fa","fi","fil","fr","he","hi","hu","id","it","ja","ko","msa","nl","no","pl","pt","ro","ru","sv","th","tr","uk","vi","zh-cn","zh-tw"],getCldrLocale:function(e){return r[e]||e},getTwitterLocale:function(e){return n[e]||e}}},64:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));var r=Object.freeze({TWEET:0}),i=function(e){var t=e.client,n=void 0===t?"":t,r=e.page,i=void 0===r?"":r,a=e.section,o=void 0===a?"":a,s=e.component,c=void 0===s?"":s,u=e.element,d=void 0===u?"":u,f=e.action;return n+":"+i+":"+o+":"+c+":"+d+":"+(void 0===f?"":f)}}},[[214,2,1]]]);
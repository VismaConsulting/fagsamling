(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{301:function(A,e,t){"use strict";t.r(e);var n=t(0),r=t.n(n),o=t(43),a=t(295),i=t(325),c=function(){return A=window.navigator.userAgent.toLowerCase(),/iphone|ipad|ipod/.test(A)&&!("standalone"in window.navigator&&window.navigator.standalone);var A},u=t(333),s=t.n(u),l=t(334),T=t.n(l);e.default=function(A){var e=A.location,t=Object(n.useState)(!1),u=t[0],l=t[1];return Object(n.useEffect)((function(){c()&&l(!0)}),[u]),r.a.createElement(a.a,{location:e},r.a.createElement(i.a,{title:"Hjem",keywords:["visma","fagsamling","visma consulting","En dag i skyen"]}),r.a.createElement("div",{className:"jumbotron",style:{textAlign:"center"}},r.a.createElement("h1",{className:"display-4"},"EN KVELD I SKYEN"),r.a.createElement("p",{className:"lead"},"En temakveld om bruk av skytjenester og sikkerhet. Kom og møt ekspertene!"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-2"}),r.a.createElement("div",{className:"landingPageInfoContainer speakerContainer col-sm-12 col-md-4"},r.a.createElement("img",{src:s.a,className:"img-responsive"}),r.a.createElement("p",null,"Internasjonal sikkerhetsekspert ",r.a.createElement("b",null,"Mikko Hypponen"),", regjeringens skystrategi, skyleverandørene og"," ",r.a.createElement("b",null,"Espen Johansen"),", Vismas angrepsekspert")),r.a.createElement("div",{className:"landingPageInfoContainer locationContainer col-sm-12 col-md-4 mt-3"},r.a.createElement("img",{src:T.a,className:"img-responsive"}),r.a.createElement("p",null,"Visma @ Vippa ",r.a.createElement("br",null)," Fredag 18.oktober 16-21")))),r.a.createElement("div",{className:"d-md-none d-lg-none d-xl-none text-center"},r.a.createElement("p",null,"Ta en titt på programmet!"),r.a.createElement(o.Link,{className:"btn btn-light btn-lg btn-md-block",role:"button",to:"/program/"},"Se program")),u&&r.a.createElement("div",{className:"pwaPopup"},r.a.createElement("p",null,'Installer nettsiden som en webapp på telefonen din. Trykk på del-ikonet og trykk på "Legg til på hjem-skjermen"')))}},305:function(A,e,t){t(117),t(14),t(11),t(3),t(25),t(30),e.__esModule=!0;e.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=e.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},r=(e.VALID_TAG_NAMES=Object.keys(n).map((function(A){return n[A]})),e.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},e.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});e.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},e.HTML_TAG_MAP=Object.keys(r).reduce((function(A,e){return A[r[e]]=e,A}),{}),e.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],e.HELMET_ATTRIBUTE="data-react-helmet"},325:function(A,e,t){"use strict";var n=t(326),r=t(0),o=t.n(r),a=t(327),i=t.n(a),c=t(332),u=t.n(c);function s(A){var e=A.description,t=A.lang,r=A.meta,a=A.keywords,c=A.title,s=n.data.site,l=e||s.siteMetadata.description;return o.a.createElement(i.a,{htmlAttributes:{lang:t},title:c,titleTemplate:"%s | "+s.siteMetadata.title,link:[{rel:"shortcut icon",type:"image/png",href:""+u.a}],meta:[{name:"description",content:l},{property:"og:title",content:c},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:l}].concat(a.length>0?{name:"keywords",content:a.join(", ")}:[]).concat(r)})}s.defaultProps={lang:"en",meta:[],keywords:[]},e.a=s},326:function(A){A.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Visma Consulting Fagsamling","description":"Websidene til Visma Consulting sine fagsamlinger","author":"@andersems && @bjornosal"}}}}')},327:function(A,e,t){t(48),t(172),t(14),t(11),t(3),t(25),t(26),t(91),t(29),t(19),t(15),t(17),e.__esModule=!0,e.Helmet=void 0;var n=Object.assign||function(A){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(A[n]=t[n])}return A},r=function(){function A(A,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(A,n.key,n)}}return function(e,t,n){return t&&A(e.prototype,t),n&&A(e,n),e}}(),o=l(t(0)),a=l(t(1)),i=l(t(328)),c=l(t(330)),u=t(331),s=t(305);function l(A){return A&&A.__esModule?A:{default:A}}function T(A,e){var t={};for(var n in A)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(A,n)&&(t[n]=A[n]);return t}var f,p,E,d=(0,i.default)(u.reducePropsToState,u.handleClientStateChange,u.mapStateOnServer)((function(){return null})),m=(f=d,E=p=function(A){function e(){return function(A,e){if(!(A instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(A,e){if(!A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?A:e}(this,A.apply(this,arguments))}return function(A,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);A.prototype=Object.create(e&&e.prototype,{constructor:{value:A,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(A,e):A.__proto__=e)}(e,A),e.prototype.shouldComponentUpdate=function(A){return!(0,c.default)(this.props,A)},e.prototype.mapNestedChildrenToProps=function(A,e){if(!e)return null;switch(A.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:e};case s.TAG_NAMES.STYLE:return{cssText:e}}throw new Error("<"+A.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(A){var e,t=A.child,r=A.arrayTypeChildren,o=A.newChildProps,a=A.nestedChildren;return n({},r,((e={})[t.type]=[].concat(r[t.type]||[],[n({},o,this.mapNestedChildrenToProps(t,a))]),e))},e.prototype.mapObjectTypeChildren=function(A){var e,t,r=A.child,o=A.newProps,a=A.newChildProps,i=A.nestedChildren;switch(r.type){case s.TAG_NAMES.TITLE:return n({},o,((e={})[r.type]=i,e.titleAttributes=n({},a),e));case s.TAG_NAMES.BODY:return n({},o,{bodyAttributes:n({},a)});case s.TAG_NAMES.HTML:return n({},o,{htmlAttributes:n({},a)})}return n({},o,((t={})[r.type]=n({},a),t))},e.prototype.mapArrayTypeChildrenToProps=function(A,e){var t=n({},e);return Object.keys(A).forEach((function(e){var r;t=n({},t,((r={})[e]=A[e],r))})),t},e.prototype.warnOnInvalidChildren=function(A,e){return!0},e.prototype.mapChildrenToProps=function(A,e){var t=this,n={};return o.default.Children.forEach(A,(function(A){if(A&&A.props){var r=A.props,o=r.children,a=T(r,["children"]),i=(0,u.convertReactPropstoHtmlAttributes)(a);switch(t.warnOnInvalidChildren(A,o),A.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:n=t.flattenArrayTypeChildren({child:A,arrayTypeChildren:n,newChildProps:i,nestedChildren:o});break;default:e=t.mapObjectTypeChildren({child:A,newProps:e,newChildProps:i,nestedChildren:o})}}})),e=this.mapArrayTypeChildrenToProps(n,e)},e.prototype.render=function(){var A=this.props,e=A.children,t=T(A,["children"]),r=n({},t);return e&&(r=this.mapChildrenToProps(e,r)),o.default.createElement(f,r)},r(e,null,[{key:"canUseDOM",set:function(A){f.canUseDOM=A}}]),e}(o.default.Component),p.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},p.defaultProps={defer:!0,encodeSpecialCharacters:!0},p.peek=f.peek,p.rewind=function(){var A=f.rewind();return A||(A=(0,u.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),A},E);m.renderStatic=m.rewind,e.Helmet=m,e.default=m},328:function(A,e,t){"use strict";function n(A){return A&&"object"==typeof A&&"default"in A?A.default:A}t(19),t(30),t(89),t(29),t(15);var r=t(0),o=n(r),a=n(t(329));function i(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);A.exports=function(A,e,t){if("function"!=typeof A)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==t&&"function"!=typeof t)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=A(s.map((function(A){return A.props}))),T.canUseDOM?e(u):t&&(u=t(u))}var T=function(A){var e,t;function r(){return A.apply(this,arguments)||this}t=A,(e=r).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t,r.peek=function(){return u},r.rewind=function(){if(r.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var A=u;return u=void 0,s=[],A};var i=r.prototype;return i.shouldComponentUpdate=function(A){return!a(A,this.props)},i.componentWillMount=function(){s.push(this),l()},i.componentDidUpdate=function(){l()},i.componentWillUnmount=function(){var A=s.indexOf(this);s.splice(A,1),l()},i.render=function(){return o.createElement(n,this.props)},r}(r.Component);return i(T,"displayName","SideEffect("+function(A){return A.displayName||A.name||"Component"}(n)+")"),i(T,"canUseDOM",c),T}}},329:function(A,e,t){t(50),t(14),t(11),t(3),t(25),A.exports=function(A,e,t,n){var r=t?t.call(n,A,e):void 0;if(void 0!==r)return!!r;if(A===e)return!0;if("object"!=typeof A||!A||"object"!=typeof e||!e)return!1;var o=Object.keys(A),a=Object.keys(e);if(o.length!==a.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(e),c=0;c<o.length;c++){var u=o[c];if(!i(u))return!1;var s=A[u],l=e[u];if(!1===(r=t?t.call(n,s,l,u):void 0)||void 0===r&&s!==l)return!1}return!0}},330:function(A,e,t){"use strict";t(89),t(167),t(28),t(32),t(119),t(14),t(11),t(3),t(25),t(48);var n=Array.isArray,r=Object.keys,o=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;A.exports=function(A,e){try{return function A(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){var i,c,u,s=n(e),l=n(t);if(s&&l){if((c=e.length)!=t.length)return!1;for(i=c;0!=i--;)if(!A(e[i],t[i]))return!1;return!0}if(s!=l)return!1;var T=e instanceof Date,f=t instanceof Date;if(T!=f)return!1;if(T&&f)return e.getTime()==t.getTime();var p=e instanceof RegExp,E=t instanceof RegExp;if(p!=E)return!1;if(p&&E)return e.toString()==t.toString();var d=r(e);if((c=d.length)!==r(t).length)return!1;for(i=c;0!=i--;)if(!o.call(t,d[i]))return!1;if(a&&e instanceof Element&&t instanceof Element)return e===t;for(i=c;0!=i--;)if(!("_owner"===(u=d[i])&&e.$$typeof||A(e[u],t[u])))return!1;return!0}return e!=e&&t!=t}(A,e)}catch(t){if(t.message&&t.message.match(/stack|recursion/i)||-2146828260===t.number)return console.warn("Warning: react-fast-compare does not handle circular references.",t.name,t.message),!1;throw t}}},331:function(A,e,t){(function(A){t(172),t(31),t(55),t(26),t(48),t(19),t(14),t(11),t(3),t(25),t(68),t(30),t(117),t(16),t(17),t(54),t(49),e.__esModule=!0,e.warn=e.requestAnimationFrame=e.reducePropsToState=e.mapStateOnServer=e.handleClientStateChange=e.convertReactPropstoHtmlAttributes=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(A){return typeof A}:function(A){return A&&"function"==typeof Symbol&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},r=Object.assign||function(A){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(A[n]=t[n])}return A},o=c(t(0)),a=c(t(121)),i=t(305);function c(A){return A&&A.__esModule?A:{default:A}}var u,s=function(A){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(A):String(A).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},l=function(A){var e=d(A,i.TAG_NAMES.TITLE),t=d(A,i.HELMET_PROPS.TITLE_TEMPLATE);if(t&&e)return t.replace(/%s/g,(function(){return e}));var n=d(A,i.HELMET_PROPS.DEFAULT_TITLE);return e||n||void 0},T=function(A){return d(A,i.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},f=function(A,e){return e.filter((function(e){return void 0!==e[A]})).map((function(e){return e[A]})).reduce((function(A,e){return r({},A,e)}),{})},p=function(A,e){return e.filter((function(A){return void 0!==A[i.TAG_NAMES.BASE]})).map((function(A){return A[i.TAG_NAMES.BASE]})).reverse().reduce((function(e,t){if(!e.length)for(var n=Object.keys(t),r=0;r<n.length;r++){var o=n[r].toLowerCase();if(-1!==A.indexOf(o)&&t[o])return e.concat(t)}return e}),[])},E=function(A,e,t){var r={};return t.filter((function(e){return!!Array.isArray(e[A])||(void 0!==e[A]&&O("Helmet: "+A+' should be of type "Array". Instead found type "'+n(e[A])+'"'),!1)})).map((function(e){return e[A]})).reverse().reduce((function(A,t){var n={};t.filter((function(A){for(var t=void 0,o=Object.keys(A),a=0;a<o.length;a++){var c=o[a],u=c.toLowerCase();-1===e.indexOf(u)||t===i.TAG_PROPERTIES.REL&&"canonical"===A[t].toLowerCase()||u===i.TAG_PROPERTIES.REL&&"stylesheet"===A[u].toLowerCase()||(t=u),-1===e.indexOf(c)||c!==i.TAG_PROPERTIES.INNER_HTML&&c!==i.TAG_PROPERTIES.CSS_TEXT&&c!==i.TAG_PROPERTIES.ITEM_PROP||(t=c)}if(!t||!A[t])return!1;var s=A[t].toLowerCase();return r[t]||(r[t]={}),n[t]||(n[t]={}),!r[t][s]&&(n[t][s]=!0,!0)})).reverse().forEach((function(e){return A.push(e)}));for(var o=Object.keys(n),c=0;c<o.length;c++){var u=o[c],s=(0,a.default)({},r[u],n[u]);r[u]=s}return A}),[]).reverse()},d=function(A,e){for(var t=A.length-1;t>=0;t--){var n=A[t];if(n.hasOwnProperty(e))return n[e]}return null},m=(u=Date.now(),function(A){var e=Date.now();e-u>16?(u=e,A(e)):setTimeout((function(){m(A)}),0)}),S=function(A){return clearTimeout(A)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||m:A.requestAnimationFrame||m,h="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||S:A.cancelAnimationFrame||S,O=function(A){return console&&"function"==typeof console.warn&&console.warn(A)},g=null,b=function(A,e){var t=A.baseTag,n=A.bodyAttributes,r=A.htmlAttributes,o=A.linkTags,a=A.metaTags,c=A.noscriptTags,u=A.onChangeClientState,s=A.scriptTags,l=A.styleTags,T=A.title,f=A.titleAttributes;P(i.TAG_NAMES.BODY,n),P(i.TAG_NAMES.HTML,r),_(T,f);var p={baseTag:R(i.TAG_NAMES.BASE,t),linkTags:R(i.TAG_NAMES.LINK,o),metaTags:R(i.TAG_NAMES.META,a),noscriptTags:R(i.TAG_NAMES.NOSCRIPT,c),scriptTags:R(i.TAG_NAMES.SCRIPT,s),styleTags:R(i.TAG_NAMES.STYLE,l)},E={},d={};Object.keys(p).forEach((function(A){var e=p[A],t=e.newTags,n=e.oldTags;t.length&&(E[A]=t),n.length&&(d[A]=p[A].oldTags)})),e&&e(),u(A,E,d)},v=function(A){return Array.isArray(A)?A.join(""):A},_=function(A,e){void 0!==A&&document.title!==A&&(document.title=v(A)),P(i.TAG_NAMES.TITLE,e)},P=function(A,e){var t=document.getElementsByTagName(A)[0];if(t){for(var n=t.getAttribute(i.HELMET_ATTRIBUTE),r=n?n.split(","):[],o=[].concat(r),a=Object.keys(e),c=0;c<a.length;c++){var u=a[c],s=e[u]||"";t.getAttribute(u)!==s&&t.setAttribute(u,s),-1===r.indexOf(u)&&r.push(u);var l=o.indexOf(u);-1!==l&&o.splice(l,1)}for(var T=o.length-1;T>=0;T--)t.removeAttribute(o[T]);r.length===o.length?t.removeAttribute(i.HELMET_ATTRIBUTE):t.getAttribute(i.HELMET_ATTRIBUTE)!==a.join(",")&&t.setAttribute(i.HELMET_ATTRIBUTE,a.join(","))}},R=function(A,e){var t=document.head||document.querySelector(i.TAG_NAMES.HEAD),n=t.querySelectorAll(A+"["+i.HELMET_ATTRIBUTE+"]"),r=Array.prototype.slice.call(n),o=[],a=void 0;return e&&e.length&&e.forEach((function(e){var t=document.createElement(A);for(var n in e)if(e.hasOwnProperty(n))if(n===i.TAG_PROPERTIES.INNER_HTML)t.innerHTML=e.innerHTML;else if(n===i.TAG_PROPERTIES.CSS_TEXT)t.styleSheet?t.styleSheet.cssText=e.cssText:t.appendChild(document.createTextNode(e.cssText));else{var c=void 0===e[n]?"":e[n];t.setAttribute(n,c)}t.setAttribute(i.HELMET_ATTRIBUTE,"true"),r.some((function(A,e){return a=e,t.isEqualNode(A)}))?r.splice(a,1):o.push(t)})),r.forEach((function(A){return A.parentNode.removeChild(A)})),o.forEach((function(A){return t.appendChild(A)})),{oldTags:r,newTags:o}},M=function(A){return Object.keys(A).reduce((function(e,t){var n=void 0!==A[t]?t+'="'+A[t]+'"':""+t;return e?e+" "+n:n}),"")},C=function(A){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(A).reduce((function(e,t){return e[i.REACT_TAG_MAP[t]||t]=A[t],e}),e)},w=function(A,e,t){switch(A){case i.TAG_NAMES.TITLE:return{toComponent:function(){return A=e.title,t=e.titleAttributes,(n={key:A})[i.HELMET_ATTRIBUTE]=!0,r=C(t,n),[o.default.createElement(i.TAG_NAMES.TITLE,r,A)];var A,t,n,r},toString:function(){return function(A,e,t,n){var r=M(t),o=v(e);return r?"<"+A+" "+i.HELMET_ATTRIBUTE+'="true" '+r+">"+s(o,n)+"</"+A+">":"<"+A+" "+i.HELMET_ATTRIBUTE+'="true">'+s(o,n)+"</"+A+">"}(A,e.title,e.titleAttributes,t)}};case i.ATTRIBUTE_NAMES.BODY:case i.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return C(e)},toString:function(){return M(e)}};default:return{toComponent:function(){return function(A,e){return e.map((function(e,t){var n,r=((n={key:t})[i.HELMET_ATTRIBUTE]=!0,n);return Object.keys(e).forEach((function(A){var t=i.REACT_TAG_MAP[A]||A;if(t===i.TAG_PROPERTIES.INNER_HTML||t===i.TAG_PROPERTIES.CSS_TEXT){var n=e.innerHTML||e.cssText;r.dangerouslySetInnerHTML={__html:n}}else r[t]=e[A]})),o.default.createElement(A,r)}))}(A,e)},toString:function(){return function(A,e,t){return e.reduce((function(e,n){var r=Object.keys(n).filter((function(A){return!(A===i.TAG_PROPERTIES.INNER_HTML||A===i.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(A,e){var r=void 0===n[e]?e:e+'="'+s(n[e],t)+'"';return A?A+" "+r:r}),""),o=n.innerHTML||n.cssText||"",a=-1===i.SELF_CLOSING_TAGS.indexOf(A);return e+"<"+A+" "+i.HELMET_ATTRIBUTE+'="true" '+r+(a?"/>":">"+o+"</"+A+">")}),"")}(A,e,t)}}}};e.convertReactPropstoHtmlAttributes=function(A){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(A).reduce((function(e,t){return e[i.HTML_TAG_MAP[t]||t]=A[t],e}),e)},e.handleClientStateChange=function(A){g&&h(g),A.defer?g=y((function(){b(A,(function(){g=null}))})):(b(A),g=null)},e.mapStateOnServer=function(A){var e=A.baseTag,t=A.bodyAttributes,n=A.encode,r=A.htmlAttributes,o=A.linkTags,a=A.metaTags,c=A.noscriptTags,u=A.scriptTags,s=A.styleTags,l=A.title,T=void 0===l?"":l,f=A.titleAttributes;return{base:w(i.TAG_NAMES.BASE,e,n),bodyAttributes:w(i.ATTRIBUTE_NAMES.BODY,t,n),htmlAttributes:w(i.ATTRIBUTE_NAMES.HTML,r,n),link:w(i.TAG_NAMES.LINK,o,n),meta:w(i.TAG_NAMES.META,a,n),noscript:w(i.TAG_NAMES.NOSCRIPT,c,n),script:w(i.TAG_NAMES.SCRIPT,u,n),style:w(i.TAG_NAMES.STYLE,s,n),title:w(i.TAG_NAMES.TITLE,{title:T,titleAttributes:f},n)}},e.reducePropsToState=function(A){return{baseTag:p([i.TAG_PROPERTIES.HREF],A),bodyAttributes:f(i.ATTRIBUTE_NAMES.BODY,A),defer:d(A,i.HELMET_PROPS.DEFER),encode:d(A,i.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:f(i.ATTRIBUTE_NAMES.HTML,A),linkTags:E(i.TAG_NAMES.LINK,[i.TAG_PROPERTIES.REL,i.TAG_PROPERTIES.HREF],A),metaTags:E(i.TAG_NAMES.META,[i.TAG_PROPERTIES.NAME,i.TAG_PROPERTIES.CHARSET,i.TAG_PROPERTIES.HTTPEQUIV,i.TAG_PROPERTIES.PROPERTY,i.TAG_PROPERTIES.ITEM_PROP],A),noscriptTags:E(i.TAG_NAMES.NOSCRIPT,[i.TAG_PROPERTIES.INNER_HTML],A),onChangeClientState:T(A),scriptTags:E(i.TAG_NAMES.SCRIPT,[i.TAG_PROPERTIES.SRC,i.TAG_PROPERTIES.INNER_HTML],A),styleTags:E(i.TAG_NAMES.STYLE,[i.TAG_PROPERTIES.CSS_TEXT],A),title:l(A),titleAttributes:f(i.ATTRIBUTE_NAMES.TITLE,A)}},e.requestAnimationFrame=y,e.warn=O}).call(this,t(118))},332:function(A,e){A.exports="data:image/vnd.microsoft.icon;base64,AAABAAEAEBAAAAEACABoBQAAFgAAACgAAAAQAAAAIAAAAAEACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBBucAQgfnAEII5wBDCecARArnAEUL5wBRG+kAUhzpAFYh6gBXI+oAWibqAF0q6gBdK+sAXy3rAGQ06wBpO+wAajzsAGs+7ABuQu0AcUXtAHJG7QB0Se0Ad0zuAHpQ7gCIY/AAiWTwAIxo8ACPbfEAmXnyAJp78gCdfvMAo4fzAKaK9ACpjvQAqY/0AKuR9ADCr/cAxrT4AM6/+QDQwfkA0sT5ANXH+gDXyvoA2s/6AN3T+wDf1fsA4tn7AObe/ADv6v0A8Ov9APTw/gD28/4A+ff+APz7/wD9/P8A/v3/AP7+/wD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJjk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTkuHxQGAAIIGS05OTk5OSoVAAAAAAAAAAAFJTk5NBsAAAAAAAAFAwAAAA05MhAAAAAAAAAJHAAAAAABNRIAAAAAAAAXLwcAAAAACyMAAAAAAAQhOBoAAAAAACILAAAAAAgpOScAAAAAABA1AAAAABYxOTQMAAAAAA4wOQoAAyA4OTkeAAAAABgzOTkkCCg5OTksBAAAESY5OTk5OTY5OTk3Ew8dKzk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="},333:function(A,e,t){A.exports=t.p+"static/mikko-hypponen-106b363e88b89bcd0a507a92154f00d6.jpg"},334:function(A,e,t){A.exports=t.p+"static/vippa-966b2492d24c52a00f0657d1325961b8.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-954d0b9ac7feeca2d8ea.js.map
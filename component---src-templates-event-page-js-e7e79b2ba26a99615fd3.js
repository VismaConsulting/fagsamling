(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{158:function(e,a,t){"use strict";t.r(a),t.d(a,"query",function(){return u});t(192),t(172);var n=t(0),r=t.n(n),l=t(163),c=t(167),i=t(177),m=t(178),s=(t(181),t(173)),o=t.n(s);a.default=function(e){var a,t=e.data.event,n=(a=i.DateTime.fromISO(t.frontmatter.from).setLocale("nb").toFormat("EEEE")).charAt(0).toUpperCase()+a.slice(1);function s(e){return i.DateTime.fromISO(e).toFormat("HH:mm")}var u=s(t.frontmatter.from),d=s(t.frontmatter.to);return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement("h3",{style:{color:"black"}},n," ",u," - ",d),r.a.createElement("h2",null,t.frontmatter.title),r.a.createElement(m.a,t.frontmatter),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),t.fields.subevents.map(function(e){return r.a.createElement("div",{key:e.id,className:"card programpost",style:{marginBottom:"10px"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("h6",{className:"card-title"},s(e.frontmatter.from)," - ",s(e.frontmatter.to)," ",e.frontmatter.title),r.a.createElement("div",{className:"card-subtitle"},r.a.createElement(m.a,e.frontmatter)),r.a.createElement("div",{className:"card-text"},e.excerpt),r.a.createElement(l.a,{className:"card-link btn btn-primary",to:e.fields.slug},"Gå til event")))}),t.fields.speakers.length>0&&r.a.createElement("div",null,r.a.createElement("h3",null,"About the speaker"),t.fields.speakers.map(function(e){return r.a.createElement("div",{className:"container card",key:e.id},r.a.createElement("div",{className:"row card-body"},r.a.createElement("div",{className:"col-sm-2"},r.a.createElement(o.a,{fixed:e.frontmatter.thumbnail.childImageSharp.fixed})),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("h5",null,e.frontmatter.name),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}))))}))))};var u="3022942469"},163:function(e,a,t){"use strict";t.d(a,"b",function(){return o});var n=t(0),r=t.n(n),l=t(3),c=t.n(l),i=t(35),m=t.n(i);t.d(a,"a",function(){return m.a});t(164);var s=r.a.createContext({}),o=function(e){return r.a.createElement(s.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};o.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},164:function(e,a,t){var n;e.exports=(n=t(165))&&n.default||n},165:function(e,a,t){"use strict";t.r(a);t(36);var n=t(0),r=t.n(n),l=t(3),c=t.n(l),i=t(58),m=t(2),s=function(e){var a=e.location,t=m.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(i.a,Object.assign({location:a,pageResources:t},t.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=s},166:function(e){e.exports={data:{fileName:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABW0lEQVQoz63SvUsDMRjH8btKAxXq+yBVk15bpGCdKi3Wl14LBZ3EVdzcxFFw8GUQRMShzm466qKLjg7+AQ6dlKKiUifddBLqN8elVN2KhQ+5S45fnySPZf33rxZ0DRuBB5H35keGolZMyoAjpe38Hc2zZpm5RuirKDRe3oJF+7o9Z7dSnKOUrSsL+pU6mDaLUwPxkKPkBFUO8u+TGEUaESgUUEIv+pEyW17BJeKo1IR7/ijyIb0Wl+qAD/ewhXUcIocFVHCLLJZxYQIzn6JUZ6xivy5m6k/CPdZrw1ItxaSq8vEYdjCPbSziGXeYxS6u0GNCs7jBOz5ehFvW80kZTRN4xtnobZX97eqqV3GKI2xgDZuY+3EhhCWQNO/FSCLAOXYQqG+zDyFdBbp9nf75dSGsRxMUILhxW19tJesknGmtD3XQvTXe3Is2Z+itpehFr8+Usvx+a2b/Gj3f4iNx37U2RsMAAAAASUVORK5CYII=",width:125,height:65,src:"/static/ff1978c293d9635b385af249edacdb5c/f3cb2/visma-logo-smaller.png",srcSet:"/static/ff1978c293d9635b385af249edacdb5c/f3cb2/visma-logo-smaller.png 1x,\n/static/ff1978c293d9635b385af249edacdb5c/b23e3/visma-logo-smaller.png 1.5x,\n/static/ff1978c293d9635b385af249edacdb5c/9b91b/visma-logo-smaller.png 2x,\n/static/ff1978c293d9635b385af249edacdb5c/cdedb/visma-logo-smaller.png 3x"}}}}}},167:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(3),c=t.n(l),i=(t(174),t(172),t(166)),m=t(163),s=t(173),o=t.n(s),u=function(){return r.a.createElement(m.b,{query:"3080975758",render:function(e){return r.a.createElement(o.a,{fixed:e.fileName.childImageSharp.fixed})},data:i})},d=(t(175),t(222)),f=t(223),p=t(224),E=t(227),g=t(225),b=t(226),h=function(){var e=Object(n.useState)(!1),a=e[0],t=e[1];return r.a.createElement(d.a,{color:"light",light:!0,expand:"md",fixed:"top"},r.a.createElement(f.a,{href:"/"},r.a.createElement(u,null)),r.a.createElement(p.a,{onClick:function(){return t(!a)}}),r.a.createElement(E.a,{isOpen:a,navbar:!0},r.a.createElement(g.a,{className:"mr-auto",navbar:!0},r.a.createElement(b.a,null,r.a.createElement(m.a,{className:"nav-link",to:"/"},"Hjem ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement(b.a,null,r.a.createElement(m.a,{className:"nav-link",to:"/program/"},"Program")))))};h.propTypes={siteTitle:c.a.string},h.defaultProps={siteTitle:""};var v=h,A=function(e){var a=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),r.a.createElement("main",{role:"main",className:"container"},a))};A.propTypes={children:c.a.node.isRequired};a.a=A},178:function(e,a,t){"use strict";var n=t(179),r=t(180),l=t(0),c=t.n(l);a.a=function(e){var a=e.kategori,t=e.speaker,l=e.location;return c.a.createElement("ul",{style:{marginBottom:"10px"},className:"list-group list-group-horizontal"},a&&c.a.createElement("li",{className:"list-group-item list-group-item-primary"},a),t&&c.a.createElement("li",{className:"list-group-item"},c.a.createElement("span",{className:"badge"},c.a.createElement(n.a,{icon:r.c})),t),l&&c.a.createElement("li",{className:"list-group-item"},c.a.createElement("span",{className:"badge"},c.a.createElement(n.a,{icon:r.b})),l))}},181:function(e,a,t){"use strict"},192:function(e,a,t){var n=t(25).f,r=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in r||t(17)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-templates-event-page-js-e7e79b2ba26a99615fd3.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{146:function(e,a,t){"use strict";t.r(a);t(85),t(56),t(191),t(88),t(197);var n=t(0),r=t.n(n),c=t(156),l=(t(89),t(172)),i=t(173),s=(t(203),function(e){var a=e.post,t=a.frontmatter,n=t.fra.split("T")[1];return r.a.createElement("div",{className:"card programpost",style:{marginBottom:"10px",border:"none",backgroundColor:"#F0F2F5"}},r.a.createElement("div",{className:"card-body",style:{paddingBottom:"5px"}},r.a.createElement("h6",null,n," - ",t.title),r.a.createElement("ul",{className:"list-group list-group-horizontal"},t.type&&r.a.createElement("li",{className:"list-group-item list-group-item-primary"},t.type),t.speaker&&r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{className:"badge"},r.a.createElement(l.a,{icon:i.c})),t.speaker),t.sted&&r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{className:"badge"},r.a.createElement(l.a,{icon:i.b})),t.sted)),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:a.html}})))}),o=t(204),m=function(e){var a=e.dag,t=e.poster;return r.a.createElement("div",{className:"col-sm"},r.a.createElement("h2",null,function(e){return e.charAt(0).toUpperCase()+e.slice(1)}(o.DateTime.fromISO(a).setLocale("nb").toFormat("EEEE"))),t.map(function(e){return r.a.createElement(s,{key:e.node.id,post:e.node})}))};t.d(a,"query",function(){return u});a.default=function(e){var a,t,n,s=e.data,o=(void 0===s?{}:s).allMarkdownRemark.edges,u=(a=o,t=function(e){return e.node.frontmatter.fra.substring(0,10)},n=new Map,a.forEach(function(e){var a=t(e),r=n.get(a);r?r.push(e):n.set(a,[e])}),n);return r.a.createElement(c.a,null,r.a.createElement("h1",{style:{marginBottom:"30px"}},r.a.createElement(l.a,{style:{fontSize:"0.8em"},icon:i.a})," Program"),r.a.createElement("div",{className:"row"},Array.from(u,function(e){var a=e[0],t=e[1];return r.a.createElement(m,{key:a,dag:a,poster:t})})))};var u="3871322274"},147:function(e,a,t){"use strict";t.d(a,"b",function(){return m});var n=t(0),r=t.n(n),c=t(4),l=t.n(c),i=t(32),s=t.n(i);t.d(a,"a",function(){return s.a});t(148);var o=r.a.createContext({}),m=function(e){return r.a.createElement(o.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},148:function(e,a,t){var n;e.exports=(n=t(154))&&n.default||n},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Visma Consulting Fagsamling"}}}}},154:function(e,a,t){"use strict";t.r(a);t(33);var n=t(0),r=t.n(n),c=t(4),l=t.n(c),i=t(55),s=t(2),o=function(e){var a=e.location,t=s.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(i.a,Object.assign({location:a,pageResources:t},t.json))};o.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},a.default=o},155:function(e){e.exports={data:{fileName:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABW0lEQVQoz63SvUsDMRjH8btKAxXq+yBVk15bpGCdKi3Wl14LBZ3EVdzcxFFw8GUQRMShzm466qKLjg7+AQ6dlKKiUifddBLqN8elVN2KhQ+5S45fnySPZf33rxZ0DRuBB5H35keGolZMyoAjpe38Hc2zZpm5RuirKDRe3oJF+7o9Z7dSnKOUrSsL+pU6mDaLUwPxkKPkBFUO8u+TGEUaESgUUEIv+pEyW17BJeKo1IR7/ijyIb0Wl+qAD/ewhXUcIocFVHCLLJZxYQIzn6JUZ6xivy5m6k/CPdZrw1ItxaSq8vEYdjCPbSziGXeYxS6u0GNCs7jBOz5ehFvW80kZTRN4xtnobZX97eqqV3GKI2xgDZuY+3EhhCWQNO/FSCLAOXYQqG+zDyFdBbp9nf75dSGsRxMUILhxW19tJesknGmtD3XQvTXe3Is2Z+itpehFr8+Usvx+a2b/Gj3f4iNx37U2RsMAAAAASUVORK5CYII=",width:125,height:65,src:"/static/ff1978c293d9635b385af249edacdb5c/453b5/visma-logo-smaller.png",srcSet:"/static/ff1978c293d9635b385af249edacdb5c/453b5/visma-logo-smaller.png 1x,\n/static/ff1978c293d9635b385af249edacdb5c/f5f84/visma-logo-smaller.png 1.5x,\n/static/ff1978c293d9635b385af249edacdb5c/cb957/visma-logo-smaller.png 2x,\n/static/ff1978c293d9635b385af249edacdb5c/6c4ee/visma-logo-smaller.png 3x"}}}}}},156:function(e,a,t){"use strict";var n=t(153),r=t(0),c=t.n(r),l=t(4),i=t.n(l),s=t(147),o=(t(157),t(158),t(155)),m=t(159),u=t.n(m),d=function(){return c.a.createElement(s.b,{query:"3080975758",render:function(e){return c.a.createElement(u.a,{fixed:e.fileName.childImageSharp.fixed})},data:o})},p=(t(160),t(205)),f=t(206),g=t(207),E=t(210),b=t(208),A=t(209),h=function(){var e=Object(r.useState)(!1),a=e[0],t=e[1];return c.a.createElement(p.a,{color:"light",light:!0,expand:"md",fixed:"top"},c.a.createElement(f.a,{href:"/"},c.a.createElement(d,null)),c.a.createElement(g.a,{onClick:function(){return t(!a)}}),c.a.createElement(E.a,{isOpen:a,navbar:!0},c.a.createElement(b.a,{className:"mr-auto",navbar:!0},c.a.createElement(A.a,null,c.a.createElement(s.a,{className:"nav-link",to:"/"},"Hjem ",c.a.createElement("span",{className:"sr-only"},"(current)"))),c.a.createElement(A.a,null,c.a.createElement(s.a,{className:"nav-link",to:"/program/"},"Program")))))};h.propTypes={siteTitle:i.a.string},h.defaultProps={siteTitle:""};var v=h,y=function(e){var a=e.children;return c.a.createElement(s.b,{query:"755544856",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(v,{siteTitle:e.site.siteMetadata.title}),c.a.createElement("main",{role:"main",className:"container"},a))},data:n})};y.propTypes={children:i.a.node.isRequired};a.a=y}}]);
//# sourceMappingURL=component---src-pages-program-js-1925e4b39ca64176f9ab.js.map
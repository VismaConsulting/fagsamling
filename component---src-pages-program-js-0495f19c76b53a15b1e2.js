(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{147:function(e,t,a){"use strict";a.r(t);a(87),a(56),a(193),a(90),a(199);var r=a(0),n=a.n(r),l=a(153),o=(a(85),a(86),a(91),a(174)),i=a(175),c=(a(205),function(e){var t=e.post,a=e.underposterForDag,r=void 0===a?[]:a,l=t.frontmatter,c=l.fra.split("T")[1],s=l.undersider||[],m=r.filter(function(e){return s.includes(e.node.fields.slug)});return n.a.createElement("div",{className:"card programpost",style:{marginBottom:"10px",border:"none",backgroundColor:"#F0F2F5"}},n.a.createElement("div",{className:"card-body",style:{paddingBottom:"5px"}},n.a.createElement("h6",null,c," - ",l.title),n.a.createElement("ul",{className:"list-group list-group-horizontal"},l.kategori&&n.a.createElement("li",{className:"list-group-item list-group-item-primary"},l.kategori),l.speaker&&n.a.createElement("li",{className:"list-group-item"},n.a.createElement("span",{className:"badge"},n.a.createElement(o.a,{icon:i.c})),l.speaker),l.sted&&n.a.createElement("li",{className:"list-group-item"},n.a.createElement("span",{className:"badge"},n.a.createElement(o.a,{icon:i.b})),l.sted)),n.a.createElement("div",null,m.map(function(e){var t=e.node.frontmatter.fra.split("T")[1],a=e.node.frontmatter.til.split("T")[1];return n.a.createElement("div",{style:{fontSize:"0.7em"},key:e.node.fields.slug},t,"-",a,": ",n.a.createElement("a",{href:e.node.fields.slug},e.node.frontmatter.title))})),n.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.html}})))}),s=a(169),m=function(e){var t=e.dag,a=e.poster,r=e.underposter;return n.a.createElement("div",{className:"col-sm"},n.a.createElement("h2",null,function(e){return e.charAt(0).toUpperCase()+e.slice(1)}(s.DateTime.fromISO(t).setLocale("nb").toFormat("EEEE"))),a.map(function(e){return n.a.createElement(c,{key:e.node.id,post:e.node,underposterForDag:r})}))};a.d(t,"query",function(){return d});t.default=function(e){var t=e.data,a=(void 0===t?{}:t).allMarkdownRemark.edges,r=a.filter(function(e){return"underprogrampost"!==e.node.frontmatter.type}),c=a.filter(function(e){return"underprogrampost"===e.node.frontmatter.type}),s=u(r,function(e){return e.node.frontmatter.fra.substring(0,10)}),d=u(c,function(e){return e.node.frontmatter.fra.substring(0,10)});return n.a.createElement(l.a,null,n.a.createElement("h1",{style:{marginBottom:"30px"}},n.a.createElement(o.a,{style:{fontSize:"0.8em"},icon:i.a})," Program"),n.a.createElement("div",{className:"row"},Array.from(s,function(e){var t=e[0],a=e[1],r=d.get(t);return n.a.createElement(m,{key:t,dag:t,poster:a,underposter:r})})))};function u(e,t){var a=new Map;return e.forEach(function(e){var r=t(e),n=a.get(r);n?n.push(e):a.set(r,[e])}),a}var d="2592508856"},148:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var r=a(0),n=a.n(r),l=a(4),o=a.n(l),i=a(32),c=a.n(i);a.d(t,"a",function(){return c.a});a(149);var s=n.a.createContext({}),m=function(e){return n.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(e,t,a){var r;e.exports=(r=a(151))&&r.default||r},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Visma Consulting Fagsamling"}}}}},151:function(e,t,a){"use strict";a.r(t);a(33);var r=a(0),n=a.n(r),l=a(4),o=a.n(l),i=a(54),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},152:function(e){e.exports={data:{fileName:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABW0lEQVQoz63SvUsDMRjH8btKAxXq+yBVk15bpGCdKi3Wl14LBZ3EVdzcxFFw8GUQRMShzm466qKLjg7+AQ6dlKKiUifddBLqN8elVN2KhQ+5S45fnySPZf33rxZ0DRuBB5H35keGolZMyoAjpe38Hc2zZpm5RuirKDRe3oJF+7o9Z7dSnKOUrSsL+pU6mDaLUwPxkKPkBFUO8u+TGEUaESgUUEIv+pEyW17BJeKo1IR7/ijyIb0Wl+qAD/ewhXUcIocFVHCLLJZxYQIzn6JUZ6xivy5m6k/CPdZrw1ItxaSq8vEYdjCPbSziGXeYxS6u0GNCs7jBOz5ehFvW80kZTRN4xtnobZX97eqqV3GKI2xgDZuY+3EhhCWQNO/FSCLAOXYQqG+zDyFdBbp9nf75dSGsRxMUILhxW19tJesknGmtD3XQvTXe3Is2Z+itpehFr8+Usvx+a2b/Gj3f4iNx37U2RsMAAAAASUVORK5CYII=",width:125,height:65,src:"/static/ff1978c293d9635b385af249edacdb5c/453b5/visma-logo-smaller.png",srcSet:"/static/ff1978c293d9635b385af249edacdb5c/453b5/visma-logo-smaller.png 1x,\n/static/ff1978c293d9635b385af249edacdb5c/f5f84/visma-logo-smaller.png 1.5x,\n/static/ff1978c293d9635b385af249edacdb5c/cb957/visma-logo-smaller.png 2x,\n/static/ff1978c293d9635b385af249edacdb5c/6c4ee/visma-logo-smaller.png 3x"}}}}}},153:function(e,t,a){"use strict";var r=a(150),n=a(0),l=a.n(n),o=a(4),i=a.n(o),c=a(148),s=(a(158),a(159),a(152)),m=a(160),u=a.n(m),d=function(){return l.a.createElement(c.b,{query:"3080975758",render:function(e){return l.a.createElement(u.a,{fixed:e.fileName.childImageSharp.fixed})},data:s})},f=(a(161),a(206)),p=a(207),g=a(208),E=a(211),v=a(209),b=a(210),A=function(){var e=Object(n.useState)(!1),t=e[0],a=e[1];return l.a.createElement(f.a,{color:"light",light:!0,expand:"md",fixed:"top"},l.a.createElement(p.a,{href:"/"},l.a.createElement(d,null)),l.a.createElement(g.a,{onClick:function(){return a(!t)}}),l.a.createElement(E.a,{isOpen:t,navbar:!0},l.a.createElement(v.a,{className:"mr-auto",navbar:!0},l.a.createElement(b.a,null,l.a.createElement(c.a,{className:"nav-link",to:"/"},"Hjem ",l.a.createElement("span",{className:"sr-only"},"(current)"))),l.a.createElement(b.a,null,l.a.createElement(c.a,{className:"nav-link",to:"/program/"},"Program")))))};A.propTypes={siteTitle:i.a.string},A.defaultProps={siteTitle:""};var h=A,y=function(e){var t=e.children;return l.a.createElement(c.b,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h,{siteTitle:e.site.siteMetadata.title}),l.a.createElement("main",{role:"main",className:"container"},t))},data:r})};y.propTypes={children:i.a.node.isRequired};t.a=y}}]);
//# sourceMappingURL=component---src-pages-program-js-0495f19c76b53a15b1e2.js.map
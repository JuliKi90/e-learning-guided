(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return v});var r=n(0),o=n.n(r),a=n(177),i=n(171),l=n(174),u=n(210),d=n.n(u),c=n(343),s=n(225),f=i.default.div.withConfig({displayName:"modules__Container",componentId:"sc-1usl8l-0"})(["min-width:95vw;min-height:100vh;background-color:#000;background-color:",";filter:saturate(.6);padding:2.5vh;"],function(e){return e.theme.primaryColor}),m=i.default.div.withConfig({displayName:"modules__Modules",componentId:"sc-1usl8l-1"})(["background-color:",";padding:5vh;min-height:95vh;h1{margin-top:0;color:#fff;border:none;width:100%;filter:rotate(1deg);border-bottom:5px solid ",";}@media only screen and (min-width:","){h1{margin-top:5vh;width:60%;font-size:3rem;}}"],function(e){return e.theme.asideBackgroundColor},function(e){return e.theme.primaryColor},function(e){return e.theme.breakpointOne}),p=i.default.div.withConfig({displayName:"modules__ModulesFlexbox",componentId:"sc-1usl8l-2"})(["display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;padding-top:3vh;@media only screen and (min-width:","){justify-content:flex-start;}"],function(e){return e.theme.breakpointOne}),h=i.default.div.withConfig({displayName:"modules__FlexElement",componentId:"sc-1usl8l-3"})(["background-color:",";width:100%;text-align:center;margin-bottom:1rem;transition:all 0.3s;box-sizing:border-box;border-left:10px solid ",";@media only screen and (min-width:","){width:33%;margin-right:5px;height:180px;}&:hover{background-color:#4e4e4e;border-left:10px solid ",";}a{display:flex;align-self:stretch;height:100%;text-decoration:none;}"],function(e){return e.theme.asideDropdownBackgroundColor},function(e){return e.theme.asideDropdownBackgroundColor},function(e){return e.theme.breakpointOne},function(e){return e.theme.primaryColor}),g=i.default.div.withConfig({displayName:"modules__ModuleNumber",componentId:"sc-1usl8l-4"})(["align-self:center;font-size:3rem;color:",";text-align:center;width:29%;border-right:1px solid #626262;@media only screen and (min-width:","){font-size:5rem;}"],function(e){return e.theme.asideDropdownTitleTextColor},function(e){return e.theme.breakpointOne}),b=i.default.div.withConfig({displayName:"modules__ModuleDescription",componentId:"sc-1usl8l-5"})(["width:80%;color:",";text-align:left;padding:20px;align-self:center;font-size:1.3rem;@media only screen and (min-width:","){font-size:2rem;}"],function(e){return e.theme.asideDropdownTitleTextColor},function(e){return e.theme.breakpointOne}),y=i.default.div.withConfig({displayName:"modules__Credits",componentId:"sc-1usl8l-6"})(["position:fixed;bottom:5vh;right:10vh;color:#fff;padding:10px;padding-left:20px;background-color:",";border-radius:5px;transform:rotate(-3deg);border:1px solid #626262;a{color:",";color:#fff;border-bottom:2px solid ",";text-decoration:none;&:hover{border-bottom:2px solid ",";}}svg{color:",";position:absolute;font-size:2.5rem;top:-27%;left:-8%;}"],function(e){return e.theme.asideDropdownBackgroundColor},function(e){return e.theme.primaryColor},function(e){return e.theme.primaryColor},function(e){return e.theme.primaryColorLight},function(e){return e.theme.primaryColor});t.default=function(e){var t=e.data.allMarkdownRemark.edges;return o.a.createElement(a.a,null,o.a.createElement(d.a,null,o.a.createElement("title",null,"Your Lessons")),o.a.createElement(f,null,o.a.createElement(m,null,o.a.createElement("h1",null,"Saoirse - An E-Learning Framework"),o.a.createElement(c.Spring,{from:{opacity:0},to:{opacity:1},config:{duration:200}},function(e){return o.a.createElement(p,{style:e},t.map(function(e){var t=e.node;return o.a.createElement(h,{key:t.frontmatter.module},o.a.createElement(l.Link,{to:"/module?id="+t.frontmatter.module+"&unit="+t.frontmatter.unit+"&subunit="+t.frontmatter.subunit},o.a.createElement(g,null,t.frontmatter.module),o.a.createElement(b,null,t.frontmatter.moduleTitle)))}))}),o.a.createElement(y,null,o.a.createElement(s.h,null),o.a.createElement("span",null,"Designed and developed by",o.a.createElement("br",null),o.a.createElement("a",{target:"_blank",href:"https:/christianburkhart.de"},"Christian Burkhart"))))))};var v="571030197"},174:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return m}),n.d(t,"useStaticQuery",function(){return p});var r=n(0),o=n.n(r),a=n(2),i=n.n(a),l=n(172),u=n.n(l);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var d=n(178),c=n.n(d);n.d(t,"PageRenderer",function(){return c.a});var s=n(37);n.d(t,"parsePath",function(){return s.a});var f=o.a.createContext({}),m=function(e){return o.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})},p=function(e){o.a.useContext;var t=o.a.useContext(f);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},177:function(e,t,n){"use strict";var r=n(6),o=n.n(r),a=n(0),i=n.n(a),l=n(171),u={breakpointOne:"1200px",breakpointTwo:"1600px",primaryColor:"#01a1cd",primaryColorLight:"#66c6e1",colorIcons:"#fff",topNavigationBackgroundColor:"#000",topNavigationBorderBottom:"#222",topNavigationTextColor:"#fff",topNavigationBackButtonBackgroundColor:"#1e1e1e",topNavigationBackButtonBackgroundColorHover:"#515151",topNavigationBackButtonBorderRight:"#222",asideBackgroundColor:"#262626",asideSubunitTextColor:"hsla(0,0%,100%,.8)",asideSubunitTextColorHover:"hsla(0,0%,100%,1)",asideUnitTextColor:"#fff",asideDropdownBackgroundColor:"#3b3b3b",asideDropdownTitleTextColor:"#fff"},d=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return i.a.createElement(l.ThemeProvider,{theme:u},i.a.createElement("div",null,this.props.children))},t}(a.Component);t.a=d},178:function(e,t,n){var r;e.exports=(r=n(189))&&r.default||r},189:function(e,t,n){"use strict";n.r(t);n(36);var r=n(0),o=n.n(r),a=n(2),i=n.n(a),l=n(61),u=n(3),d=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};d.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=d}}]);
//# sourceMappingURL=component---src-pages-modules-js-d95fe17a22096df3f7cf.js.map
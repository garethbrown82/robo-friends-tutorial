(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(34)},24:function(e,t,n){},30:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(15),c=n.n(a),s=(n(24),n(1)),i=n(2),l=n(4),u=n(3),h=n(5),d=n(9),b=function(e){var t=e.name,n=e.email,r=e.id;return o.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},o.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?200x200")}),o.a.createElement("div",null,o.a.createElement("h2",null,t),o.a.createElement("p",null,n)))},p=function(e){var t=e.robots;return console.log("CardList"),o.a.createElement("div",null,t.map(function(e){return o.a.createElement(b,{key:e.id,id:e.id,name:e.name,email:e.email})}))},m=function(e){e.searchField;var t=e.searchChange;return console.log("SearchBox"),o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},E=function(e){return o.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"}},e.children)},f=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).componentDidCatch=function(e,t){n.setState({hasError:!0})},n.state={hasError:!1},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Oooooops. That is not good."):this.props.children}}]),t}(o.a.Component),g=(n(30),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).updateCount=function(){e.setState(function(e){return{count:e.count+1}})},e.state={count:0},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return console.log(e,t),this.state.count!==t.count}},{key:"render",value:function(){return console.log("CounterButton"),o.a.createElement("button",{color:this.props.color,onClick:this.updateCount},"Count: ",this.state.count)}}]),t}(r.Component)),O=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log("Header"),o.a.createElement("div",null,o.a.createElement("h1",{className:"f1"},"RoboFriends"),o.a.createElement(g,{color:"red"}))}}]),t}(r.Component),v=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).componentDidMount=function(){n.props.onRequestRobots()},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,a=e.isPending,c=(e.error,r.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return a?o.a.createElement("h1",null,"Loading..."):o.a.createElement("div",{className:"tc"},o.a.createElement(O,null),o.a.createElement(m,{searchChange:n}),o.a.createElement(E,null,o.a.createElement(f,null,o.a.createElement(p,{robots:c}))))}}]),t}(o.a.Component),j=Object(d.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCHFIELD",payload:t.target.value})},onRequestRobots:function(){return e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})})})}}})(v);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(32);var C=n(7),y=n(17),R=n(18),S={searchField:""},w={isPending:!1,robots:[],error:""},_=(Object(y.createLogger)(),Object(C.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCHFIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}})),T=Object(C.d)(_,Object(C.a)(R.a));c.a.render(o.a.createElement(d.a,{store:T},o.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.6023bf3f.chunk.js.map
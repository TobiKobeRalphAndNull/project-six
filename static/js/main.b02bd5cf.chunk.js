(this["webpackJsonpproject-six"]=this["webpackJsonpproject-six"]||[]).push([[0],{24:function(e,t,a){},27:function(e,t,a){e.exports=a.p+"static/media/noImage.aaa9fb02.jpg"},28:function(e,t,a){e.exports=a(61)},33:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),o=a(25),c=a.n(o),s=(a(33),a(6)),l=a(7),i=a(9),u=a(8),m=a(26),h=a.n(m),p=(a(24),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState({userInput:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.callApi(e.state.userInput)},e.state={userInput:""},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit,action:"submit"},r.a.createElement("label",{htmlFor:"searchByName"},"Search TV Show By Name:"),r.a.createElement("input",{value:this.state.userInput,onChange:this.handleChange,name:"searchByName",type:"text"}),r.a.createElement("button",null,"Search")))}}]),a}(n.Component)),f=(a(50),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("ul",{className:"showList"})}}]),a}(n.Component)),w=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("ul",{className:"searchResuts"},this.props.relevantShows.map((function(e){return r.a.createElement("li",null,r.a.createElement("button",{className:"tvImgButton",key:e.id},r.a.createElement("img",{src:e.image,alt:"Poster for ".concat(e.title)}),r.a.createElement("p",{className:"tv Title"},e.title)))})))}}]),a}(n.Component),d=a(27),v=a.n(d),b=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).callApi=function(t){h()({method:"GET",url:"https://api.tvmaze.com/search/shows",responseType:"json",params:{q:t}}).then((function(t){var a=t.data,n=[];for(var r in a)null!==a[r].show.image?n.push({id:a[r].show.id,title:a[r].show.name,image:a[r].show.image.medium,summary:a[r].show.summary}):n.push({id:a[r].show.id,title:a[r].show.name,image:v.a,summary:a[r].show.summary});e.setState({relevantShows:n}),console.log(n)}))},e.state={relevantShows:[]},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.callApi("dragon")}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"My Watchlist"),r.a.createElement(f,null),r.a.createElement(p,{callApi:this.callApi}),r.a.createElement(w,{relevantShows:this.state.relevantShows}),r.a.createElement("footer",null,r.a.createElement("a",{href:"https://ruiwd.me"},"Jerry Dong"),", ",r.a.createElement("a",{href:"https://lawrencehebia.com"},"Lawrence Hebia"),", ",r.a.createElement("a",{href:"http://www.shondamoshis.com"},"Shonda Moshis"),", ",r.a.createElement("a",{href:"http://www.tabithapoeze.com"},"Tabitha Poeze")," \xa9 2020"))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.b02bd5cf.chunk.js.map
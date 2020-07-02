(this["webpackJsonpproject-six"]=this["webpackJsonpproject-six"]||[]).push([[0],{24:function(e,t,a){},31:function(e,t,a){e.exports=a.p+"static/media/noImage.aaa9fb02.jpg"},32:function(e,t,a){e.exports=a(59)},59:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(28),l=a.n(r),s=a(2),c=a(3),o=a(5),u=a(4),m=a(29),h=a.n(m),p=(a(24),a(8)),d=a(7),v=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState({userInput:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.callApi(e.state.userInput)},e.state={userInput:""},e}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("form",{className:"showTitleSearch",onSubmit:this.handleSubmit,action:"submit"},i.a.createElement("label",{className:"sr-only",htmlFor:"searchByName"},"Search TV Show By Name:"),i.a.createElement("input",{value:this.state.userInput,onChange:this.handleChange,name:"searchByName",type:"text",placeholder:"Search TV Show By Name"}),i.a.createElement("button",{className:"inputButton"},i.a.createElement(p.a,{icon:d.e}))))}}]),a}(n.Component),f=a(14),b=a.n(f);a(57);b.a.initializeApp({apiKey:"AIzaSyBCUsX2ILvXh1sITHinQJ9PHk5nGiJ90fM",authDomain:"binge-watch-list.firebaseapp.com",databaseURL:"https://binge-watch-list.firebaseio.com",projectId:"binge-watch-list",storageBucket:"binge-watch-list.appspot.com",messagingSenderId:"665131961000",appId:"1:665131961000:web:23bbca1d60f97622fad09d"});var g=b.a,w=a(30),y=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).createList=function(t){t.preventDefault(),g.database().ref(e.state.inputTitle).push({rating:"You get to select your rating!",title:"Start adding in your shows!"})},e.handleChange=function(t){e.setState(Object(w.a)({},t.target.name,t.target.value))},e.state={inputTitle:"",inputRating:""},e}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("form",{className:"createList",onSubmit:this.createList,action:"submit"},i.a.createElement("input",{name:"inputTitle",className:"createList",placeholder:"Name your new list",onChange:this.handleChange,value:this.state.inputTitle,type:"text"}),i.a.createElement("button",{className:"inputButton"},"Create List"))}}]),a}(n.Component),E=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).handleUpvote=function(){var t=g.database().ref(e.props.listTitle).child(e.props.showKey).child("rating"),a=null;t.on("value",(function(e){var t=e.val();a=t+1})),t.set(a)},e.handleDownvote=function(){var t=g.database().ref(e.props.listTitle).child(e.props.showKey).child("rating"),a=null;t.on("value",(function(e){var t=e.val();a=t-1})),t.set(a)},e}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement(n.Fragment,null,i.a.createElement("button",{className:"upvote",onClick:this.handleUpvote},i.a.createElement(p.a,{icon:d.b})),i.a.createElement("button",{className:"downvote",onClick:this.handleDownvote},i.a.createElement(p.a,{icon:d.a})))}}]),a}(n.Component),T=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={myListTitles:[],myLists:[]},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.database().ref().on("value",(function(t){var a=t.val(),n=[],i=[];for(var r in a){var l=r,s=a[r];for(var c in n.push({actualListTitle:l}),s)i.push({listTitleRecord:l,title:s[c].title,rating:s[c].rating,showKey:c})}e.setState({myListTitles:n,myLists:i})}))}},{key:"render",value:function(){var e=this;return i.a.createElement(n.Fragment,null,i.a.createElement("h2",{className:"sliderTitle"},"My TV Show Lists"),this.state.myListTitles.map((function(t){return i.a.createElement("div",{className:"sliderList"},i.a.createElement("div",{className:"listTitleContainer"},i.a.createElement("h2",null,t.actualListTitle),i.a.createElement("button",{className:"expandList",onClick:e.expandList},i.a.createElement(p.a,{icon:d.d}))),e.state.myLists.map((function(e){if(e.listTitleRecord===t.actualListTitle)return i.a.createElement("li",{className:"listItem ".concat(t.actualListTitle)},i.a.createElement("h3",null,e.title),i.a.createElement("p",null,e.rating),i.a.createElement(E,{showKey:e.showKey,listTitle:t.actualListTitle}))})))})),i.a.createElement(y,null))}}]),a}(n.Component),j=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).handleClick=function(t){t.preventDefault(),document.querySelector(".selectList.".concat(e.props.show.title)).classList.toggle("show")},e.handleChange=function(t){""!==t.target.value&&g.database().ref(t.target.value).push({rating:0,title:e.props.showTitle})},e.state={myListTitles:[],selectedList:""},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=g.database().ref(),a=[];t.on("value",(function(t){a.length=0;var n=t.val();for(var i in n)a.push({listTitle:i});e.setState({myListTitles:a})}))}},{key:"render",value:function(){return i.a.createElement("form",null,i.a.createElement("select",{className:"",onChange:this.handleChange},i.a.createElement("option",{selected:!0,disabled:!0,value:""},"Add to List"),this.state.myListTitles.map((function(e){return i.a.createElement("option",{value:e.listTitle},e.listTitle)}))))}}]),a}(n.Component),L=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("ul",{className:"searchResuts"},this.props.relevantShows.map((function(e){return i.a.createElement("li",{key:e.id},i.a.createElement("img",{src:e.image,alt:"Poster for ".concat(e.title)}),i.a.createElement("p",{className:"tv Title"},e.title),i.a.createElement(j,{showTitle:e.title,showRating:e.rating}))})))}}]),a}(n.Component),O=a(31),S=a.n(O),N=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).callApi=function(t){h()({method:"GET",url:"https://api.tvmaze.com/search/shows",responseType:"json",params:{q:t}}).then((function(t){var a=t.data,n=[];for(var i in a)null!==a[i].show.image?n.push({id:a[i].show.id,title:a[i].show.name,image:a[i].show.image.medium,summary:a[i].show.summary,rating:a[i].show.rating.average}):n.push({id:a[i].show.id,title:a[i].show.name,image:S.a,summary:a[i].show.summary,rating:a[i].show.rating.average});e.setState({relevantShows:n})}))},e.showMyLists=function(){document.querySelector("section.slider").classList.toggle("show")},e.state={relevantShows:[]},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.callApi("dragon")}},{key:"render",value:function(){return i.a.createElement(n.Fragment,null,i.a.createElement("header",null,i.a.createElement(p.a,{icon:d.c,className:"hamburgerMenu",onClick:this.showMyLists}),i.a.createElement("div",{className:"wrapper"},i.a.createElement("h1",{className:"flash"},"My Watchlist"),i.a.createElement(v,{callApi:this.callApi}))),i.a.createElement("section",{className:"slider"},i.a.createElement(T,null)),i.a.createElement("section",{className:"gallery wrapper"},i.a.createElement(L,{relevantShows:this.state.relevantShows})),i.a.createElement("footer",null,i.a.createElement("p",null,i.a.createElement("a",{href:"https://ruiwd.me"},"Jerry Dong"),", ",i.a.createElement("a",{href:"https://lawrencehebia.com"},"Lawrence Hebia"),", ",i.a.createElement("a",{href:"http://www.shondamoshis.com"},"Shonda Moshis"),", ",i.a.createElement("a",{href:"http://www.tabithapoeze.com"},"Tabitha Poeze")," \xa9 2020")))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.b0524e23.chunk.js.map
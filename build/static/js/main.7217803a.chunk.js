(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(65)},36:function(e,t,a){},37:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(28),i=a.n(l),r=(a(36),a(6)),c=a(7),s=a(9),h=a(8),u=a(10),d=(a(37),a(12)),p=a(13),m=a(11);var k=function(e){return o.a.createElement("div",{id:"searchContainer"},o.a.createElement("h3",null,"Book Search"),o.a.createElement("form",{id:"bookSearch"},o.a.createElement("label",{htmlFor:"bookInput",form:"bookSearch"},"Enter a book to search:"),o.a.createElement("br",null),o.a.createElement("input",{type:"text",name:"bookInput",id:"bookInput",form:"bookSearch",onChange:function(t){return e.handleChange(t)},placeholder:"Book Title",required:!0}),o.a.createElement("br",null),o.a.createElement("button",{type:"submit",onClick:function(t){return e.handleSearchClick(t)}},"Search")))},b=a(15),v=a.n(b),f={getBooks:function(){return v.a.get("/api/books")},searchBooks:function(e){return v.a.post("/search",{title:e})},addBookToDB:function(e){return v.a.post("/api/books",e)},deleteBook:function(e){return v.a.delete("/api/books/".concat(e))}},E=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).handleSaveClick=function(e){this.setState({saved:!0});var t={title:this.props.title,authors:this.props.authors,link:this.props.link,img:this.props.img,description:this.props.description};e.preventDefault(),f.addBookToDB(t).then(function(e){console.log(e)}).catch(function(e){console.log(e)})},a.state={saved:!1,deleted:!1},a.handleSaveClick=a.handleSaveClick.bind(Object(m.a)(a)),a.handleDeleteClick=a.handleDeleteClick.bind(Object(m.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleDeleteClick",value:function(e){var t=this;this.setState({deleted:!0}),e.preventDefault(),f.deleteBook(this.props.id).then(function(e){console.log(e),d.a.dispatch(t.props.location,null)}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return o.a.createElement("div",{className:"bookResult",id:this.props.id?this.props.id:null,style:{display:this.state.deleted?"none":"block"}},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"aboutBook"},o.a.createElement("h4",null,this.props.title),o.a.createElement("p",null,"By: ",this.props.authors?this.props.authors.join(", "):"N/A")),o.a.createElement("div",{className:"btnDiv"},this.props.link?o.a.createElement("a",{href:this.props.link,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("button",{type:"button",name:"view"},"View")):null,"/"===this.props.path?o.a.createElement("button",{type:"button",name:"save",onClick:this.handleSaveClick,disabled:this.state.saved},this.state.saved?"Saved":"Save"):o.a.createElement("button",{type:"button",name:"Delete",onClick:this.handleDeleteClick,disabled:this.state.deleted},"Delete"))),o.a.createElement("div",{className:"row"},this.props.img?o.a.createElement("img",{src:this.props.img.smallThumbnail?this.props.img.smallThumbnail:this.props.img.thumbnail?this.props.img.thumbnail:"",alt:"book cover"}):null,o.a.createElement("p",null,this.props.description?this.props.description:"N/A")))}}]),t}(o.a.Component);var g=function(e){return"/"===e.path?o.a.createElement("div",{id:"resultsContainer"},o.a.createElement("h3",null,"Results Found"),e.bookData.map(function(t){var a=t.volumeInfo;return o.a.createElement(E,{title:a.title,authors:a.authors,description:a.description,link:a.canonicalVolumeLink,img:a.imageLinks,path:e.path,key:t.id})})):"/saved"===e.path?e.savedBooks.length>0?o.a.createElement("div",{id:"resultsContainer"},o.a.createElement("h3",null,"Saved Books"),e.savedBooks.map(function(t){return o.a.createElement(E,{title:t.title,authors:t.authors,description:t.description,link:t.link,img:t.img,id:t._id,path:e.path,key:t._id})})):o.a.createElement("div",{id:"resultsContainer"},o.a.createElement("h3",null,"Saved Books"),o.a.createElement("p",null,"No saved books.")):void 0},C=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={bookInput:"",bookData:[]},a.handleSearchClick=a.handleSearchClick.bind(Object(m.a)(a)),a.handleChange=a.handleChange.bind(Object(m.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){e.preventDefault(),this.setState({bookInput:e.target.value})}},{key:"handleSearchClick",value:function(e){var t=this;e.preventDefault(),f.searchBooks(this.state.bookInput).then(function(e){t.setState({bookData:e.data}),t.setState({bookInput:""})})}},{key:"render",value:function(){return o.a.createElement("main",null,o.a.createElement(k,{handleChange:this.handleChange,handleSearchClick:this.handleSearchClick}),this.state.bookData.length>0?o.a.createElement(g,{bookData:this.state.bookData,path:this.props.match.path}):null)}}]),t}(o.a.Component),S=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={savedBooks:[]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this;f.getBooks().then(function(t){e.setState({savedBooks:t.data})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return console.log(this.state.savedBooks),o.a.createElement("main",null,o.a.createElement(g,{savedBooks:this.state.savedBooks,path:this.props.match.path}))}}]),t}(o.a.Component);var B=function(){return o.a.createElement("nav",null,o.a.createElement("h2",null,"Google Books"),o.a.createElement(d.b,{to:"/"},"Search"),o.a.createElement(d.b,{to:"/saved"},"Saved"))},j={maxWidth:"100vw",height:"calc(100vw * .43333)",backgroundSize:"cover",position:"relative"};var O=function(){return o.a.createElement("header",{style:j},o.a.createElement("h1",null,"(React) Google Books Search"),o.a.createElement("p",null,"Search for and Save Books of Interest"))},y=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement("div",null,o.a.createElement(B,null),o.a.createElement(O,null),o.a.createElement(p.c,null,o.a.createElement(p.a,{exact:!0,path:"/",component:C}),o.a.createElement(p.a,{path:"/saved",component:S}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.7217803a.chunk.js.map
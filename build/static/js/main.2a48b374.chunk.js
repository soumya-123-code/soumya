(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,t,n){e.exports=n(253)},252:function(e,t,n){},253:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(27),o=n.n(c),i=n(14),l=n(9),d=n(30),u=n(11),s=n(12),p=n(29),b=n.n(p),f=function(e){return function(t,n){var a=n().activeBoard,r=b()();t({type:v.ADD_LIST,payload:{title:e,boardID:a,id:r}})}},m=function(e,t,n,a,r,c){return function(o,i){var l=i().activeBoard;o({type:v.DRAG_HAPPENED,payload:{droppableIdStart:e,droppableIdEnd:t,droppableIndexEnd:a,droppableIndexStart:n,draggableId:r,type:c,boardID:l}})}},E=function(e,t){var n=b()();return{type:v.ADD_CARD,payload:{text:t,listID:e,id:n}}},v={ADD_CARD:"ADD_CARD",ADD_LIST:"ADD_LIST",DRAG_HAPPENED:"DRAG_HAPPENED",EDIT_CARD:"EDIT_CARD",DELETE_CARD:"DELETE_CARD",EDIT_LIST_TITLE:"EDIT_LIST_TITLE",DELETE_LIST:"DELETE_LIST",SET_ACTIVE_BOARD:"SET_ACTIVE_BOARD",ADD_BOARD:"ADD_BOARD"},h={"list-0":{id:"list-0",cards:["card-0"],title:"myList",board:"board-0"}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.ADD_LIST:var n=t.payload,a=n.title,r=n.id,c={title:a,id:"list-".concat(r),cards:[]};return Object(s.a)({},e,Object(u.a)({},"list-".concat(r),c));case v.ADD_CARD:var o=t.payload,i=o.listID,l=o.id,p=e[i];return p.cards.push("card-".concat(l)),Object(s.a)({},e,Object(u.a)({},i,p));case v.DRAG_HAPPENED:var b=t.payload,f=b.droppableIdStart,m=b.droppableIdEnd,E=b.droppableIndexEnd,D=b.droppableIndexStart;if("list"===b.type)return e;if(f===m){var O,g=e[f],j=g.cards.splice(D,1);return(O=g.cards).splice.apply(O,[E,0].concat(Object(d.a)(j))),Object(s.a)({},e,Object(u.a)({},f,g))}if(f!==m){var y,x,I=e[f],A=I.cards.splice(D,1),T=e[m];return(y=T.cards).splice.apply(y,[E,0].concat(Object(d.a)(A))),Object(s.a)({},e,(x={},Object(u.a)(x,f,I),Object(u.a)(x,m,T),x))}return e;case v.DELETE_CARD:var _=t.payload,w=_.listID,C=_.id,S=e[w],k=S.cards.filter(function(e){return e!==C});return Object(s.a)({},e,Object(u.a)({},w,Object(s.a)({},S,{cards:k})));case v.EDIT_LIST_TITLE:var L=t.payload,R=L.listID,P=L.newTitle,B=e[R];return B.title=P,Object(s.a)({},e,Object(u.a)({},R,B));case v.DELETE_LIST:var N=e;return delete N[t.payload.listID],N;default:return e}},O={"card-0":{text:"Last Episode",id:"card-0",list:"list-0"}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.ADD_CARD:var n=t.payload,a=n.text,r=n.listID,c=n.id,o={text:a,id:"card-".concat(c),list:r};return Object(s.a)({},e,Object(u.a)({},"card-".concat(c),o));case v.EDIT_CARD:var i=t.payload,l=i.id,d=i.newText,p=e[l];return p.text=d,Object(s.a)({},e,Object(u.a)({},"card-".concat(l),p));case v.DELETE_CARD:var b=e;return delete b[t.payload.id],b;default:return e}},j={"board-0":{id:"board-0",lists:["list-0"],title:"myboard"}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.ADD_LIST:var n=t.payload,a=n.boardID,r=n.id,c=e[a],o="list-".concat(r),i=[].concat(Object(d.a)(c.lists),[o]);return c.lists=i,Object(s.a)({},e,Object(u.a)({},a,c));case v.DRAG_HAPPENED:var l=t.payload.boardID,p=e[l],b=p.lists,f=t.payload,m=f.droppableIndexEnd,E=f.droppableIndexStart;if("list"===f.type){var h=b.splice(E,1);return b.splice.apply(b,[m,0].concat(Object(d.a)(h))),p.lists=b,Object(s.a)({},e,Object(u.a)({},l,p))}return e;case v.DELETE_LIST:var D=t.payload,O=D.listID,g=D.boardID,y=e[g],x=y.lists.filter(function(e){return e!==O});return y.lists=x,Object(s.a)({},e,Object(u.a)({},g,y));case v.ADD_BOARD:var I=t.payload,A=I.title,T=I.id,_="board-".concat(T),w={id:_,title:A,lists:[]};return Object(s.a)({},e,Object(u.a)({},_,w));default:return e}};console.log(b()());var x=["board-0"],I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.ADD_BOARD:return[].concat(Object(d.a)(e),["board-".concat(t.payload.id)]);default:return e}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.SET_ACTIVE_BOARD:return t.payload;default:return e}},T=Object(l.c)({lists:D,cards:g,boards:y,boardOrder:I,activeBoard:A}),_=n(103),w=n(75),C=n(104),S={key:"root",storage:n.n(C).a},k=Object(w.a)(S,T),L=n(35),R=n(36),P=n(39),B=n(37),N=n(40),F=n(41),G=n(8),H=n(60),M=n.n(H),z=n(113),V=n.n(z),J=n(112),W=n.n(J),$=n(25),q=n(6),K=n(19),Q=n.n(K),U=n(107);function X(){var e=Object(G.a)(["\n  margin-left: 8px;\n  cursor: pointer;\n"]);return X=function(){return e},e}function Y(){var e=Object(G.a)(["\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  margin-left: 8px;\n"]);return Y=function(){return e},e}function Z(){var e=Object(G.a)(["\n  resize: none;\n  width: 100%;\n  overflow: hidden;\n  outline: none;\n  border: none;\n"]);return Z=function(){return e},e}function ee(){var e=Object(G.a)(["\n  min-height: 85px;\n  padding: 6px 8px 2px;\n"]);return ee=function(){return e},e}function te(){var e=Object(G.a)(["\n  width: 284px;\n  margin-bottom: 8px;\n"]);return te=function(){return e},e}var ne=q.a.div(te()),ae=Object(q.a)(M.a)(ee()),re=Object(q.a)(U.a)(Z()),ce=q.a.div(Y()),oe=Object(q.a)(Q.a)(X()),ie=r.a.memo(function(e){var t=e.list,n=e.text,a=void 0===n?"":n,c=e.onChange,o=e.closeForm,i=e.children,l=t?"Enter list title...":"Enter a title for this card...";return r.a.createElement(ne,null,r.a.createElement(ae,null,r.a.createElement(re,{placeholder:l,autoFocus:!0,value:a,onChange:function(e){return c(e)},onBlur:o})),r.a.createElement(ce,null,i,r.a.createElement(oe,{onMouseDown:o},"close")))}),le=n(108),de=n.n(le);function ue(){var e=Object(G.a)(["\n  && {\n    color: white;\n    background: #5aac44;\n  }\n"]);return ue=function(){return e},e}var se=Object(q.a)(de.a)(ue()),pe=function(e){var t=e.children,n=e.onClick;return r.a.createElement(se,{variant:"contained",onMouseDown:n},t)};function be(){var e=Object(G.a)(["\n  position: absolute;\n  display: none;\n  right: 5px;\n  bottom: 5px;\n  opacity: 0.5;\n  ",":hover & {\n    display: block;\n    cursor: pointer;\n  }\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return be=function(){return e},e}function fe(){var e=Object(G.a)(["\n  position: absolute;\n  display: none;\n  right: 5px;\n  top: 5px;\n  opacity: 0.5;\n  ",":hover & {\n    display: block;\n    cursor: pointer;\n  }\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return fe=function(){return e},e}function me(){var e=Object(G.a)(["\n  margin: 0 0 8px 0;\n  position: relative;\n  max-width: 100%;\n  word-wrap: break-word;\n"]);return me=function(){return e},e}var Ee=q.a.div(me()),ve=Object(q.a)(Q.a)(fe(),Ee),he=Object(q.a)(Q.a)(be(),Ee),De=r.a.memo(function(e){var t=e.text,n=e.id,c=e.listID,o=e.index,i=e.dispatch,l=Object(a.useState)(!1),d=Object(F.a)(l,2),u=d[0],s=d[1],p=Object(a.useState)(t),b=Object(F.a)(p,2),f=b[0],m=b[1],E=function(e){s(!1)},h=function(e){m(e.target.value)},D=function(e){e.preventDefault(),i(function(e,t,n){return{type:v.EDIT_CARD,payload:{id:e,listID:t,newText:n}}}(n,c,f)),s(!1)},O=function(e){console.log(c),i(function(e,t){return{type:v.DELETE_CARD,payload:{id:e,listID:t}}}(n,c))};return u?r.a.createElement(ie,{text:f,onChange:h,closeForm:E},r.a.createElement(pe,{onClick:D},"Save")):r.a.createElement($.b,{draggableId:String(n),index:o},function(e){return r.a.createElement(Ee,Object.assign({},e.draggableProps,e.dragHandleProps,{ref:e.innerRef,onDoubleClick:function(){return s(!0)}}),r.a.createElement(M.a,null,r.a.createElement(ve,{onMouseDown:function(){return s(!0)},fontSize:"small"},"edit"),r.a.createElement(he,{fontSize:"small",onMouseDown:O},"delete"),r.a.createElement(W.a,null,r.a.createElement(V.a,null,t))))})}),Oe=Object(i.b)()(De);function ge(){var e=Object(G.a)(["\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    border-radius: 3px;\n    height: 36px;\n    margin-left: 8px;\n    width: 300px;\n    padding-left: 10px;\n    padding-right: 10px;\n    opacity: ",";\n    color: ",";\n    background-color: ",";\n  "]);return ge=function(){return e},e}var je=function(e){var t=e.list,n=e.children,a=e.onClick,c=t?1:.5,o=t?"white":"inherit",i=t?"rgba(0,0,0,.15)":"inherit",l=q.a.div(ge(),c,o,i);return r.a.createElement(l,{onClick:a},r.a.createElement(Q.a,null,"add"),r.a.createElement("p",{style:{flexShrink:0}},n))};function ye(){var e=Object(G.a)(["\n      display: flex;\n      align-items: center;\n      cursor: pointer;\n      border-radius: 3px;\n      height: 36px;\n      margin-left: 8px;\n      width: 300px;\n      padding-left: 10px;\n      padding-right: 10px;\n      opacity: ",";\n      color: ",";\n      background-color: ",";\n    "]);return ye=function(){return e},e}var xe=function(e){function t(){var e,n;Object(L.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(P.a)(this,(e=Object(B.a)(t)).call.apply(e,[this].concat(c)))).state={formOpen:!1,text:""},n.openForm=function(){n.setState({formOpen:!0})},n.closeForm=function(e){n.setState({formOpen:!1})},n.handleInputChange=function(e){n.setState({text:e.target.value})},n.handleAddList=function(){var e=n.props.dispatch,t=n.state.text;t&&(n.setState({text:""}),e(f(t)))},n.handleAddCard=function(){var e=n.props,t=e.dispatch,a=e.listID,r=n.state.text;r&&(n.setState({text:""}),t(E(a,r)))},n.renderOpenForm=function(){var e=n.props.list,t=e?1:.5,a=e?"white":"inherit",c=e?"rgba(0,0,0,.15)":"inherit",o=q.a.div(ye(),t,a,c);return r.a.createElement(o,{onClick:n.openForm},r.a.createElement(Q.a,null,"add"))},n}return Object(N.a)(t,e),Object(R.a)(t,[{key:"render",value:function(){var e=this.state.text,t=this.props.list;return this.state.formOpen?r.a.createElement(ie,{text:e,onChange:this.handleInputChange,closeForm:this.closeForm},r.a.createElement(pe,{onClick:t?this.handleAddList:this.handleAddCard},t?"Add List":"Add Card")):r.a.createElement(je,{list:t,onClick:this.openForm})}}]),t}(r.a.PureComponent),Ie=Object(i.b)()(xe);function Ae(){var e=Object(G.a)(["\n  transition: background 0.3s ease-in;\n  ",":hover & {\n    background: #ccc;\n  }\n"]);return Ae=function(){return e},e}function Te(){var e=Object(G.a)(["\n  cursor: pointer;\n  transition: opacity 0.3s ease-in-out;\n  opacity: 0.4;\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return Te=function(){return e},e}function _e(){var e=Object(G.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n"]);return _e=function(){return e},e}function we(){var e=Object(G.a)(["\n  width: 100%;\n  border: none;\n  outline-color: blue;\n  border-radius: 3px;\n  margin-bottom: 3px;\n  padding: 5px;\n"]);return we=function(){return e},e}function Ce(){var e=Object(G.a)(["\n  background-color: #dfe3e6;\n  border-radius: 3px;\n  width: 300px;\n  padding: 8px;\n  height: 100%;\n  margin: 0 8px 0 0;\n"]);return Ce=function(){return e},e}var Se=q.a.div(Ce()),ke=q.a.input(we()),Le=q.a.div(_e()),Re=Object(q.a)(Q.a)(Te()),Pe=q.a.h4(Ae(),Le),Be=Object(i.b)()(function(e){var t=e.title,n=e.cards,c=e.listID,o=e.index,i=e.dispatch,l=Object(a.useState)(!1),d=Object(F.a)(l,2),u=d[0],s=d[1],p=Object(a.useState)(t),b=Object(F.a)(p,2),f=b[0],m=b[1],E=function(e){e.target.select()},h=function(e){e.preventDefault(),m(e.target.value)},D=function(e){s(!1),i(function(e,t){return{type:v.EDIT_LIST_TITLE,payload:{listID:e,newTitle:t}}}(c,f))},O=function(){i(function(e){return function(t,n){var a=n().activeBoard;return t({type:v.DELETE_LIST,payload:{listID:e,boardID:a}})}}(c))};return r.a.createElement($.b,{draggableId:String(c),index:o},function(e){return r.a.createElement(Se,Object.assign({},e.draggableProps,e.dragHandleProps,{ref:e.innerRef}),r.a.createElement($.c,{droppableId:String(c),type:"card"},function(e){return r.a.createElement("div",null,r.a.createElement("div",null,u?r.a.createElement("form",{onSubmit:D},r.a.createElement(ke,{type:"text",value:f,onChange:h,autoFocus:!0,onFocus:E,onBlur:D})):r.a.createElement(Le,{onClick:function(){return s(!0)}},r.a.createElement(Pe,null,f),r.a.createElement(Re,{onClick:O},"delete"))),r.a.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef}),n.map(function(e,t){return r.a.createElement(Oe,{key:e.id,text:e.text,id:e.id,index:t,listID:c})}),e.placeholder,r.a.createElement(Ie,{listID:c})))}))})}),Ne=n(38),Fe=n(31);function Ge(){var e=Object(G.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return Ge=function(){return e},e}var He=q.a.div(Ge()),Me=function(e){function t(){var e,n;Object(L.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(P.a)(this,(e=Object(B.a)(t)).call.apply(e,[this].concat(r)))).onDragEnd=function(e){var t=e.destination,a=e.source,r=e.draggableId,c=e.type;t&&n.props.dispatch(m(a.droppableId,t.droppableId,a.index,t.index,r,c))},n}return Object(N.a)(t,e),Object(R.a)(t,[{key:"componentDidMount",value:function(){var e,t=this.props.match.params.boardID;this.props.dispatch((e=t,{type:v.SET_ACTIVE_BOARD,payload:e}))}},{key:"render",value:function(){var e=this.props,t=e.lists,n=e.cards,a=e.match,c=e.boards[a.params.boardID];if(!c)return r.a.createElement("p",null,"Board not found");var o=c.lists;return r.a.createElement($.a,{onDragEnd:this.onDragEnd},r.a.createElement("div",{className:"contaner-fluid"},r.a.createElement("center",null," ",r.a.createElement("hr",null),r.a.createElement("h2",null,"Grabbngo Trello App"),r.a.createElement("br",null),r.a.createElement(Ne.b,{to:"/",className:"btn btn-success"},"Go Back")," "),r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement($.c,{droppableId:"all-lists",direction:"horizontal",type:"list"},function(e){return r.a.createElement(He,Object.assign({},e.droppableProps,{ref:e.innerRef}),o.map(function(e,a){var c=t[e];if(c){var o=c.cards.map(function(e){return n[e]});return r.a.createElement(Be,{listID:c.id,key:c.id,title:c.title,cards:o,index:a})}}),e.placeholder,r.a.createElement(Ie,{list:!0}))})))}}]),t}(a.PureComponent),ze=Object(i.b)(function(e){return{lists:e.lists,cards:e.cards,boards:e.boards}})(Me),Ve=Object(i.b)(function(e){return{boards:e.boards,boardOrder:e.boardOrder}})(function(e){var t=e.boards,n=e.boardOrder;e.dispatch;return r.a.createElement("div",null,r.a.createElement("div",{className:"container mt-5"},r.a.createElement("center",null," ",r.a.createElement("h2",null,"Grabbngo Trello App")),r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4"}),r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("center",null," ",r.a.createElement("h1",null,n.map(function(e){var n=t[e];return r.a.createElement("div",null,r.a.createElement(Ne.b,{className:"btn btn-success",key:e,to:"/".concat(n.id),style:{textDecoration:"none"}},"Grabbngo Trello Task"))})," "))),r.a.createElement("div",{className:"col-sm-4"}))))}),Je=function(){return r.a.createElement(Ne.a,null,r.a.createElement("div",null,r.a.createElement(Fe.a,{path:"/",exact:!0,component:Ve}),r.a.createElement(Fe.a,{path:"/:boardID",component:ze})))},We=function(e){function t(){return Object(L.a)(this,t),Object(P.a)(this,Object(B.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(R.a)(t,[{key:"render",value:function(){return r.a.createElement(Je,null)}}]),t}(a.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(252);var $e=n(115),qe=n.n($e),Ke=n(116),Qe=function(){var e=Object(l.e)(k,Object(l.a)(_.a));return{store:e,persistor:Object(w.b)(e)}}(),Ue=Qe.persistor,Xe=Qe.store;o.a.render(r.a.createElement(i.a,{store:Xe},r.a.createElement(Ke.a,{loading:null,persistor:Ue},r.a.createElement(We,null))),document.getElementById("root")),qe()(document).bind("DOMNodeRemoved",function(e){console.log("Removed: "+e.target.nodeName)}),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[118,1,2]]]);
//# sourceMappingURL=main.2a48b374.chunk.js.map
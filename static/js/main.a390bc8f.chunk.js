(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{16:function(t,e,c){},17:function(t,e,c){},18:function(t,e,c){"use strict";c.r(e);var o=c(0),n=c(1),s=c.n(n),a=c(8),i=c.n(a),l=(c(16),c(3)),d=c(9),r=(c(6),c(10)),u=function(t){var e=t.setInputText,c=t.todos,n=t.setTodos,s=t.inputText,a=t.setStatus;return Object(o.jsxs)("form",{children:[Object(o.jsx)("input",{value:s,onChange:function(t){console.log(t),e(t.target.value)},type:"text",className:"todo-input"}),Object(o.jsx)("button",{onClick:function(t){t.preventDefault(),n([].concat(Object(r.a)(c),[{text:s,completed:!1,id:1e3*Math.random()}])),e("")},className:"todo-button",type:"submit",children:Object(o.jsx)("i",{class:"fas fa-plus-square"})}),Object(o.jsx)("div",{className:"select",children:Object(o.jsxs)("select",{onChange:function(t){a(t.target.value)},name:"todos",className:"filter-todo",children:[Object(o.jsx)("option",{value:"all",children:"All"}),Object(o.jsx)("option",{value:"completed",children:"Completed"}),Object(o.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})})]})},j=c(7),b=function(t){var e=t.text,c=t.todo,n=t.setTodos,s=t.todos;return Object(o.jsxs)("div",{className:"todo",children:[Object(o.jsx)("li",{className:"todo-item ".concat(c.completed?"completed":" "),children:e}),Object(o.jsx)("button",{onClick:function(){n(s.map((function(t){return t.id===c.id?Object(j.a)(Object(j.a)({},t),{},{completed:!t.completed}):t})))},className:"complete-btn",children:Object(o.jsx)("i",{className:"fas fa-check"})}),Object(o.jsx)("button",{onClick:function(){n(s.filter((function(t){return t.id!==c.id})))},className:"trash-btn",children:Object(o.jsx)("i",{className:"fas fa-trash"})})]})},f=function(t){var e=t.todos,c=t.setTodos,n=t.filteredTodos;return Object(o.jsx)("div",{className:"todo-container",children:Object(o.jsx)("ul",{className:"todo-list",children:n.map((function(t){return Object(o.jsx)(b,{setTodos:c,todos:e,todo:t,text:t.text},t.id)}))})})},O=function(t){Object(d.a)(t);var e=Object(n.useState)(""),c=Object(l.a)(e,2),s=c[0],a=c[1],i=Object(n.useState)([]),r=Object(l.a)(i,2),j=r[0],b=r[1],O=Object(n.useState)("all"),m=Object(l.a)(O,2),p=m[0],x=m[1],h=Object(n.useState)([]),v=Object(l.a)(h,2),g=v[0],N=v[1];Object(n.useEffect)((function(){C()}),[]),Object(n.useEffect)((function(){S(),T()}),[j,p]);var S=function(){switch(p){case"completed":N(j.filter((function(t){return!0===t.completed})));break;case"uncompleted":N(j.filter((function(t){return!1===t.completed})));break;default:N(j)}},T=function(){localStorage.setItem("todo",JSON.stringify(j))},C=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("todo"));b(t)}};return Object(o.jsxs)("div",{className:"body",children:[Object(o.jsx)("header",{children:Object(o.jsx)("h1",{children:"Todo List"})}),Object(o.jsx)(u,{inputText:s,todos:j,setTodos:b,setInputText:a,setStatus:x}),Object(o.jsx)(f,{filteredTodos:g,setTodos:b,todos:j})]})};c(17);var m=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(O,{})})},p=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,19)).then((function(e){var c=e.getCLS,o=e.getFID,n=e.getFCP,s=e.getLCP,a=e.getTTFB;c(t),o(t),n(t),s(t),a(t)}))};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),p()},6:function(t,e,c){}},[[18,1,2]]]);
//# sourceMappingURL=main.a390bc8f.chunk.js.map
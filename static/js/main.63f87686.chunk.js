(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{13:function(e,t,o){},14:function(e,t,o){"use strict";o.r(t);var c=o(1),n=o.n(c),s=o(7),a=o.n(s),d=o(5),i=o(6),l=o(0),r=function(e){var t=e.todo,o=e.HandelTodoChageStatus,c=e.DeleteTodo;return Object(l.jsxs)("li",{className:"todo-listItem",children:[Object(l.jsx)("div",{className:"todo-listItem-mainApp",children:t.name}),Object(l.jsx)("button",{className:"todo-listItem-checkbox-check",onClick:function(){o(t.id)},children:Object(l.jsx)("i",{className:t.checkIcon})}),Object(l.jsx)("button",{className:"todo-listItem-checkbox-times",onClick:function(){c(t.id)},children:Object(l.jsx)("i",{className:"fas fa-times"})})]})},j=function(e){var t=e.todos,o=e.HandelTodoChageStatus,c=e.DeleteTodo,n=e.filterFor;return Object(l.jsx)("ol",{className:"todo-list",children:t.map((function(e){return"All"===n?Object(l.jsx)(r,{todo:e,DeleteTodo:c,HandelTodoChageStatus:o},e.id):"Uncompleted"!==n||e.checked?"Completed"===n&&e.checked?Object(l.jsx)(r,{todo:e,DeleteTodo:c,HandelTodoChageStatus:o},e.id):void 0:Object(l.jsx)(r,{todo:e,DeleteTodo:c,HandelTodoChageStatus:o},e.id)}))})};o(13);var u=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),o=t[0],n=t[1],s=Object(c.useRef)(),a=Object(c.useRef)(),r=Object(c.useState)("All"),u=Object(i.a)(r,2),b=u[0],f=u[1],h=function(){var e=s.current.value;""!==e&&m(e),s.current.value=""},m=function(e){var t=[].concat(Object(d.a)(o),[{id:Math.floor(1e4*Math.random()),name:e,checked:!1,checkIcon:"fas fa-check"}]);n(t)};return Object(c.useEffect)((function(){var e=JSON.parse(window.localStorage.getItem("todos"));o&&n(e)}),[]),Object(c.useEffect)((function(){window.localStorage.setItem("todos",JSON.stringify(o))}),[o]),Object(l.jsxs)("div",{className:"todo-form",children:[Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h()},children:[Object(l.jsx)("input",{type:"text",placeholder:"Add a todo",className:"todo-btn todo-input",ref:s}),Object(l.jsx)("input",{type:"button",className:"todo-btn todo-add-btn",onClick:h,value:"Add Todo"})]}),Object(l.jsxs)("div",{className:"todo-options",children:[Object(l.jsx)("input",{type:"button",className:"todo-btn todo-option todo-clear-btn",onClick:function(){n([])},value:"Clear Todo"}),Object(l.jsxs)("select",{ref:a,className:"todo-filter todo-option",onChange:function(){f(a.current.value)},children:[Object(l.jsx)("option",{children:"All"}),Object(l.jsx)("option",{children:"Uncompleted"}),Object(l.jsx)("option",{children:"Completed"})]})]}),Object(l.jsx)("div",{className:"todo-options-sep",children:Object(l.jsx)("hr",{className:"todo-options-sep-hr"})}),Object(l.jsx)(j,{filterFor:b,todos:o,DeleteTodo:function(e){var t=o.filter((function(t){return t.id!==e}));n(t)},HandelTodoChageStatus:function(e){var t=Object(d.a)(o),c=t.find((function(t){return t.id===e}));c.checked=!c.checked,c.checked?c.checkIcon="fas fa-history":c.checkIcon="fas fa-check",n(t)}})]})};a.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.63f87686.chunk.js.map
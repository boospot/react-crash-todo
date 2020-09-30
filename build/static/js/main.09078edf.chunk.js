(this["webpackJsonpreact-crash-todo"]=this["webpackJsonpreact-crash-todo"]||[]).push([[0],{21:function(e,t,n){e.exports=n(33)},26:function(e,t,n){},27:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(19),l=n.n(r),i=(n(26),n(16)),c=n(6),u=n(7),d=n(9),s=n(8),p=n(12),m=n(1);n(27);var f={backgroundColor:"#333333",color:"#ffffff",textAlign:"center",fontSize:"2em",padding:"1em 2em"},h=function(){return{color:"#ffffff"}},b=function(){return o.a.createElement("header",{style:f},o.a.createElement("h1",null,"TodoList"),o.a.createElement(p.b,{to:"/",style:h()},"Home")," | ",o.a.createElement(p.b,{to:"/about",style:h()},"About"))},g=function(e){Object(d.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).getStyle=function(){return{backgroundColor:"#f6f6f6",display:"flex",justifyContent:"space-between"}},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.todo,t=e.title,n=e.id,a=e.completed;return o.a.createElement("div",{style:this.getStyle()},o.a.createElement("p",null,o.a.createElement("input",{type:"checkbox",onChange:this.props.toggleTodo.bind(this,n),defaultChecked:a}),o.a.createElement("span",{style:{textDecoration:this.props.todo.completed?"line-through":"none"}},t)),o.a.createElement("button",{onClick:this.props.deleteTodo.bind(this,n)},"x"))}}]),n}(a.Component),y=function(e){Object(d.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return this.props.todos.map((function(t){return o.a.createElement(g,{todo:t,key:t.id,toggleTodo:e.props.toggleTodo,deleteTodo:e.props.deleteTodo})}))}}]),n}(a.Component),v=function(e){Object(d.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={title:""},e.onSubmit=function(t){t.preventDefault(),e.props.addTodo(e.state.title),e.setState({title:""})},e.onInputChange=function(t){return e.setState({title:t.target.value})},e}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},o.a.createElement("input",{type:"text",name:"add-to-do",style:{flex:"10",padding:"5px"},value:this.state.title,onChange:this.onInputChange}),o.a.createElement("input",{type:"submit",value:"Submit",style:{flex:"1"}}))}}]),n}(a.Component),E=function(e){Object(d.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"About"),o.a.createElement("p",null,"This is a Tod- React app using Brad Traversy Crash Course"))}}]),n}(a.Component),j=function(e){Object(d.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={todos:[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1},{userId:1,id:3,title:"fugiat veniam minus",completed:!1},{userId:1,id:4,title:"et porro tempora",completed:!0},{userId:1,id:5,title:"laboriosam mollitia et enim quasi adipisci quia provident illum",completed:!1}]},e.getContainerStyle={maxWidth:"500px",margin:"0 auto",padding:"2em"},e.toggleTodo=function(t){e.setState({todos:e.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},e.addTodo=function(t){var n={userId:1,id:Math.floor(Math.random()*Math.floor(99999)),title:t,completed:!1};e.setState({todos:[].concat(Object(i.a)(e.state.todos),[n])})},e.deleteTodo=function(t){e.setState({todos:Object(i.a)(e.state.todos).filter((function(e){return e.id!==t}))})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement(p.a,null,o.a.createElement(b,null),o.a.createElement("div",{style:this.getContainerStyle,className:"App"},o.a.createElement(m.a,{exact:!0,path:"/",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(v,{addTodo:e.addTodo}),o.a.createElement(y,{todos:e.state.todos,toggleTodo:e.toggleTodo,deleteTodo:e.deleteTodo}))}}),o.a.createElement(m.a,{path:"/about",component:E})))}}]),n}(o.a.Component);l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(j,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.09078edf.chunk.js.map
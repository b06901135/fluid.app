(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,n){e.exports=n(61)},61:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(26),r=n.n(o),c=n(3),i=n(7),s=n(9),m=n(8),u=n(10),d=n(13),p=n(11),f=n(27),h=n.n(f),b=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).logout=function(){h.a.get("api/v1/logout").then(function(e){e.data.success&&(window.location="/login")})},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"header clearfix"},l.a.createElement("h3",null,l.a.createElement(d.b,{to:"/",style:{textDecoration:"none",color:"#777"}},"Fluid simulator")))}}]),t}(a.Component);function E(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("p",null,"\xa9 2018 Fluid Simulator, Inc."))}var g=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"col-md-5 col-sm-10 col-xs-12"},l.a.createElement("h1",{className:"slim"},"Create new simulation"),l.a.createElement("form",{id:"myForm"},this.props.model.map(function(t){return l.a.createElement("div",{className:"input-group"},l.a.createElement("span",{className:"input-group-addon",style:{minWidth:"150px"}},t.label),l.a.createElement("input",{type:"text",className:"form-control",onChange:function(t){e.props.onChange(t)},name:t.name,placeholder:t.plc}))}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("a",{className:"btn btn-primary btn-block",onClick:function(){e.props.submit()}},"Create")),l.a.createElement("br",null),l.a.createElement("br",null))}}]),t}(a.Component),v=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).models=function(){return n.props.models.length>0?n.props.models.map(function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"well"},l.a.createElement("h1",null,"Model"),l.a.createElement("p",null,n.props.model.map(function(t){return l.a.createElement("span",null,t.label,": ",e[t.name]," ",t.unit," ",l.a.createElement("br",null))})),l.a.createElement("a",{className:"btn btn-info",style:{minWidth:"100px"},target:"_blank",href:"demo.html?id=".concat(e.id)},"Start"),l.a.createElement("a",{className:"btn btn-info",style:{minWidth:"100px"},target:"_blank",href:"demo_RK3.html?id=".concat(e.id)},"Start(RK3)"),l.a.createElement("a",{className:"btn btn-danger",style:{minWidth:"100px",float:"right"},onClick:function(){n.props.delete(e.id)}},"Delete")))}):null},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"col-md-7 col-sm-10 col-xs-12"},l.a.createElement("h1",{className:"slim"},"Your models"),this.models())}}]),t}(a.Component),y=function e(t,n,a,l){Object(c.a)(this,e),this.label=t,this.name=n,this.val=a,this.input="",this.unit=l,this.plc="".concat(a," ").concat(l)},O=[new y("Gravity constant","g",9.8,"(m/s^2)"),new y("Viscosity constant","n",.08,"(kg/m s)"),new y("Density","d",1e3,"(kg/m^3)"),new y("Width of sink","x",.3,"(m)"),new y("Length of sink","z",.1,"(m)"),new y("Height of sink","y",.1,"(m)"),new y("Number of divisions (x axis)","Nx",100,""),new y("Number of divisions (z axis)","Nz",25,""),new y("Number of divisions (y axis)","Ny",25,"")];var N=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={models:[]},n.fetmodels=function(){var e=JSON.parse(localStorage.getItem("models2D"));null!==e&&n.setState({models:e})},n.onChange=function(e){O.forEach(function(t){t.name===e.target.name&&(t.input=e.target.value)})},n.delete=function(e){console.log("model_id",e);var t=n.state.models,a=t.find(function(t){return t.id===e});console.log("delete_model",t.indexOf(a)),t.pop(t.indexOf(a)),console.log("models",t),n.setState({models:t}),localStorage.setItem("models2D",JSON.stringify(t))},n.submit=function(){var e={id:Math.random().toString(36).substr(2,9)};O.forEach(function(t){""!==t.input?e[t.name]=Number(t.input):e[t.name]=Number(t.val)});for(var t=0;t<O.length;t++)O[t].input="";var a=n.state.models;a.push(e),n.setState({models:a}),localStorage.setItem("models2D",JSON.stringify(a))},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetmodels()}},{key:"render",value:function(){return console.log("state",this.state),l.a.createElement("div",{className:"container-fluid"},l.a.createElement(b,null),l.a.createElement("div",{className:"space-around"},l.a.createElement(g,{model:O,onChange:this.onChange,submit:this.submit}),l.a.createElement(v,{model:O,delete:this.delete,models:this.state.models})),l.a.createElement(E,null))}}]),t}(a.Component),j=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement(p.a,{exact:!0,path:"/",render:function(){return l.a.createElement(N,null)}}))}}]),t}(a.Component);r.a.render(l.a.createElement(j,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.61bf51e7.chunk.js.map
(()=>{"use strict";class e{constructor(e,t,n,o=!1,a="low"){this.title=String(e),this.description=String(t),this.date=new Date(n),this.done=o,this.priority=a}add(){const e=JSON.parse(localStorage.getItem("todos"));e.push(this.create()),localStorage.setItem("todos",JSON.stringify(e))}delete(){const e=JSON.parse(localStorage.getItem("todos"));priority;for(let t=0;t<e.length;t++)this.title==e[t].title&&e.splice(t,1);localStorage.setItem("todos",JSON.stringify(e))}edit(e=!1,t){const n=JSON.parse(localStorage.getItem("todos"));for(let o=0;o<n.length;o++)this.title==n[o].title&&(n[o].done=e,n[o].priority=t,console.log(n[o]));localStorage.setItem("todos",JSON.stringify(n))}create(){const{title:e,description:t,date:n,done:o,priority:a}=this;return{title:e,description:t,date:n,done:o,priority:a}}}const t=e=>{const t=JSON.parse(localStorage.getItem("todos"));for(let n of t)n.done=e;localStorage.setItem("todos",JSON.stringify(t))};(()=>{const n=document.getElementById("content");if(console.log(localStorage.getItem("todos")),null===localStorage.getItem("todos")){const t=new Date,n=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate();localStorage.setItem("todos",JSON.stringify([new e("Morning mommy","Saying good morning to my beloved mother",n,!1,"high")]))}const o=JSON.parse(localStorage.getItem("todos"));for(let e of o){const o=document.createElement("div"),a=document.createElement("h3"),l=document.createElement("p"),i=document.createElement("span"),d=document.createElement("div"),r=document.createElement("input"),c=document.createElement("LABEL"),s=document.createElement("div");r.setAttribute("type","checkbox"),r.className="form-check-input",c.innerHTML="Done:",c.className="form-label px-3",d.className="mb-3",s.innerHTML=e.priority,"high"===s.innerHTML&&(s.className="p-5 bg-danger"),"med"===s.innerHTML&&(s.className="p-5 bg-warning"),"low"===s.innerHTML&&(s.className="p-5 bg-success"),a.innerHTML=e.title,l.innerHTML=e.description,i.innerHTML=e.date,r.checked=e.done,r.addEventListener("click",(()=>{t(r.checked)})),o.appendChild(a),o.appendChild(l),o.appendChild(i),d.appendChild(r),d.appendChild(c),o.appendChild(d),o.appendChild(s),n.appendChild(o)}})(),(()=>{const t=["high","med","low"],n=document.getElementById("content"),o=document.createElement("form"),a=document.createElement("div"),l=document.createElement("input"),i=document.createElement("LABEL");l.setAttribute("type","text"),l.className="form-control",i.innerHTML="Title:",i.className="form-label h3",a.className="mb-3";const d=document.createElement("div"),r=document.createElement("TEXTAREA"),c=document.createElement("LABEL");r.className="form-control",c.innerHTML="description:",c.className="form-label h3",d.className="mb-3";const s=document.createElement("div"),m=document.createElement("input");s.className="mb-3",m.setAttribute("type","date");const p=document.createElement("SELECT"),u=document.createElement("input");u.setAttribute("type","submit"),u.className="btn btn-primary",p.className="form-select",l.id="title",l.required=!0,r.id="description",r.required=!0,m.id="date",m.required=!0,p.id="priority",u.id="btn";for(let e of t){var g=document.createElement("option");e==t[2]&&(g.selected=!0),g.value=e,g.text=e,p.appendChild(g)}a.appendChild(i),a.appendChild(l),o.appendChild(a),d.appendChild(c),d.appendChild(r),o.appendChild(d),s.appendChild(m),o.appendChild(s),o.appendChild(p),o.appendChild(u),n.appendChild(o),u.addEventListener("click",(t=>{t.preventDefault(),""!==l.value&&""!==r.value&&new e(l.value,r.value,function(e){var t=new Date(e),n=""+(t.getMonth()+1),o=""+t.getDate(),a=t.getFullYear();return n.length<2&&(n="0"+n),o.length<2&&(o="0"+o),[a,n,o].join("-")}(m.value),!1,p.value).add(),window.location.reload()}))})()})();
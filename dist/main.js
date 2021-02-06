(()=>{"use strict";class e{constructor(e,t,n,a=!1,o="low"){this.title=String(e),this.description=String(t),this.date=new Date(n),this.done=a,this.priority=o}add(){const e=JSON.parse(localStorage.getItem("todos"));e.push(this.create()),localStorage.setItem("todos",JSON.stringify(e))}create(){const{title:e,description:t,date:n,done:a,priority:o}=this;return{title:e,description:t,date:n,done:a,priority:o}}}const t=e=>{const t=JSON.parse(localStorage.getItem("todos")),n=JSON.parse(localStorage.getItem("priorities"));for(let a of t)if(a.title===e.title){if(a.done=!a.done,null===localStorage.getItem("priorities")){const e=[];e.push({priority:a.priority,title:a.title}),localStorage.setItem("priorities",JSON.stringify(e))}n.every((e=>e.title!=a.title))&&(n.push({priority:a.priority,title:a.title}),localStorage.setItem("priorities",JSON.stringify(n))),!0===a.done&&(a.priority="done");for(let e of n)!1===a.done&&e.title==a.title&&(a.priority=e.priority)}localStorage.setItem("todos",JSON.stringify(t)),window.location.reload()},n=e=>{const t=JSON.parse(localStorage.getItem("todos"));for(let n=0;n<t.length;n++)e.title==t[n].title&&t.splice(n,1);localStorage.setItem("todos",JSON.stringify(t)),window.location.reload()};(()=>{const a=document.getElementById("content");if(null===localStorage.getItem("todos")||null==JSON.parse(localStorage.getItem("todos"))[0]){const t=new Date,n=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate();localStorage.setItem("todos",JSON.stringify([new e("Morning mommy","Saying good morning to my beloved mother",n,!1,"high")]))}const o=JSON.parse(localStorage.getItem("todos"));for(let e of o){const o=document.createElement("div");o.className="container";const s=document.createElement("div");s.className="card";const m=document.createElement("div");m.className="card-header";const p=document.createElement("div");p.className="card-body";const u=document.createElement("div");u.className="card-footer d-flex justify-content-between align-items-center";const g=document.createElement("h3"),h=document.createElement("p"),E=document.createElement("span"),N=document.createElement("div"),y=document.createElement("input"),b=document.createElement("LABEL"),v=document.createElement("div");y.setAttribute("type","checkbox"),y.className="form-check-input",b.innerHTML="Done:",b.className="form-label px-1";const C=document.createElement("button");C.className="ml-auto btn btn-danger",C.innerHTML="Delete",v.innerHTML=e.priority,g.innerHTML=e.title,g.className="text-white",h.innerHTML=`<strong>Description:</strong> <br> ${e.description}`,E.innerHTML=`<strong>Date: </strong> <br> ${l=e.date,i=void 0,d=void 0,c=void 0,r=void 0,i=new Date(l),d=""+(i.getMonth()+1),c=""+i.getDate(),r=i.getFullYear(),d.length<2&&(d="0"+d),c.length<2&&(c="0"+c),[r,d,c].join("-")}`,y.checked=e.done,"high"===v.innerHTML&&(m.className="p-3 bg-danger"),"med"===v.innerHTML&&(m.className="p-3 bg-warning"),"low"===v.innerHTML&&(m.className="p-3 bg-success"),"done"===v.innerHTML&&(m.className="p-3 bg-default",g.className="text-dark"),y.addEventListener("click",(()=>{t(e)})),C.addEventListener("click",(()=>{n(e)})),N.appendChild(b),N.appendChild(y),u.appendChild(N),u.appendChild(C),p.appendChild(h),p.appendChild(E),m.appendChild(g),s.appendChild(m),s.appendChild(p),s.appendChild(u),o.appendChild(s),a.appendChild(o)}var l,i,d,c,r})(),(()=>{const t=["high","med","low"],n=document.getElementById("modal-btn"),a=document.getElementById("exampleModal"),o=document.createElement("div");o.className="modal-dialog";const l=document.createElement("div");l.className="modal-content";const i=document.createElement("div");i.className="modal-header bg-primary";const d=document.createElement("h5");d.className="modal-title text-uppercase text-white",d.innerHTML="Create a To-do!";const c=document.createElement("button");c.className="close";const r=document.createElement("span");r.innerHTML="&#215;",r.className="h2",c.className="btn btn-danger py-0 px-2",n.addEventListener("click",(()=>{a.style="display:block; background: #050505a8"})),c.addEventListener("click",(()=>{a.style="display:none;"}));const s=document.createElement("div");s.className="modal-body";const m=document.createElement("form"),p=document.createElement("div"),u=document.createElement("input"),g=document.createElement("LABEL");u.setAttribute("type","text"),u.className="form-control",g.innerHTML="Title:",g.className="form-label h5",p.className="mb-3";const h=document.createElement("div"),E=document.createElement("TEXTAREA"),N=document.createElement("LABEL");E.className="form-control",N.innerHTML="Description:",N.className="form-label h5",h.className="mb-3";const y=document.createElement("div"),b=document.createElement("input");y.className="mb-3",b.setAttribute("type","date");const v=document.createElement("SELECT"),C=document.createElement("input");C.setAttribute("type","submit"),C.className="btn btn-primary w-100",C.style="font-weight: bolder",v.className="form-select my-3",u.id="title",u.required=!0,E.id="description",E.required=!0,b.id="date",b.required=!0,v.id="priority",C.id="btn";for(let e of t){var f=document.createElement("option");e==t[2]&&(f.selected=!0),f.value=e,f.text=e,v.appendChild(f)}i.appendChild(d),c.appendChild(r),i.appendChild(c),l.appendChild(i),p.appendChild(g),p.appendChild(u),m.appendChild(p),h.appendChild(N),h.appendChild(E),m.appendChild(h),y.appendChild(b),m.appendChild(y),m.appendChild(v),m.appendChild(C),s.appendChild(m),l.appendChild(s),o.appendChild(l),a.appendChild(o),C.addEventListener("click",(t=>{t.preventDefault(),""!==u.value&&""!==E.value&&new e(u.value,E.value,b.value,!1,v.value).add(),window.location.reload()}))})()})();
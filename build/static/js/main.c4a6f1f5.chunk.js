(this["webpackJsonpbookmytime-front"]=this["webpackJsonpbookmytime-front"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n.n(r),i=n(11),s=n.n(i),o=(n(23),n(24),n(3)),l=n(4),u=c.a.createContext({}),d=n(5),b=n.n(d),m=n(6),j=(n(26),["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]),p=["Mo","Tu","We","Th","Fr","Sa","Su"],h=function(e){var t=function(e){var t=e.month,n=Object(r.useState)([{id:0,date:"string",dayOfWeek:0,availble:!0,periodsForMeeting:[{start:"string",end:"string",availble:!0}]}]),c=Object(o.a)(n,2),i=c[0],s=c[1],d=Object(r.useContext)(u),p=d.context,h=d.setContext,f=Object(l.useMediaQuery)({query:"(max-width: 968px)"});Object(r.useEffect)((function(){!function(){var e=Object(m.a)(b.a.mark((function e(){var n,a,r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.prev=1,a={m:"".concat(t.m<9?"0"+(t.m+1):t.m+1),y:t.y,length:t.length},e.next=5,fetch("/checkcalendar",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(a)});case 5:return r=e.sent,e.next=8,r.json();case 8:c=e.sent,n=c,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log("error when calling checkCalendar",e.t0);case 15:s(n);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}()()}),[t]);var O=function(e){h&&p&&(e.target.id===p.day.id.toString()&&!0===p.visible?h({day:i[Number(e.target.id)-1],position:[e.clientX,e.clientY],visible:!1}):h({day:i[Number(e.target.id)-1],position:[e.clientX,e.clientY],visible:!0}))},x=[];return i.forEach((function(e){var t;1===e.id?(t=e.dayOfWeek-1>=0?e.dayOfWeek-1:6,x.push(Object(a.jsx)("div",{id:e.id.toString(),className:e.availble?"day ".concat(j[t]):"day ".concat(j[t]," busy"),onClick:e.availble?O:function(){},children:e.id},e.date))):x.push(Object(a.jsx)("div",{id:e.id.toString(),className:e.availble?"day":"day busy",onClick:e.availble?O:function(){},children:e.id},e.date))})),{daysToDisplay:x,isTabletOrMobile:f,handleClick:O}}(e),n=t.daysToDisplay;return t.isTabletOrMobile?Object(a.jsxs)("div",{className:"calendarMonth-sm",children:[p.map((function(e){return Object(a.jsx)("div",{className:"legend-sm",children:e},e)})),n.map((function(e){return e}))]}):Object(a.jsxs)("div",{className:"calendarMonth",children:[j.map((function(e){return Object(a.jsx)("div",{className:"legend",children:e},e)})),n.map((function(e){return e}))]})},f=n(2),O=n(12),x=n.n(O),g=(n(27),function(){var e=Object(m.a)(b.a.mark((function e(t){var n,a,r,c,i,s,o,l,u,d;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.inputValue,a=t.start,r=t.end,c=t.targetHour,i={summary:"Meeting with ".concat(n.nameValue),description:n.purposeValue,start:{dateTime:a,timeZone:"Europe/Paris"},end:{dateTime:r,timeZone:"Europe/Paris"},reminders:{useDefault:!1}},e.next=4,fetch("/createevent",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(i)});case 4:return s=e.sent,e.next=7,s.text();case 7:if("OK"!==e.sent){e.next=21;break}return o={from:"Mr Bean Office<apifex@gmail.com>",to:n.mailValue,subject:"Meeting confirmation",message:"Hello, Your meeting with Mr. Bean is fixed to ".concat(c.substring(0,10)," at ").concat(c.substring(10,15))},e.next=12,fetch("/sendmail",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(o)});case 12:return l=e.sent,e.next=15,l.text();case 15:u=e.sent,d={from:"Mr Bean Office<apifex@gmail.com>",to:"apifex@gmail.com",subject:"Meeting with ".concat(n.nameValue),message:"Hello, Mr. Bean, ".concat(n.nameValue," wish to meet with you. The meeting has been fixed to ").concat(c.substring(0,10)," at ").concat(c.substring(10,15),". The purpose of the meeting: ").concat(n.purposeValue,". We've saved those informations in your calendar.")},fetch("/sendmail",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(d)}),"OK"===u&&alert("Your meeting has been fixed, you will recive a confirmation mail."),e.next=22;break;case 21:alert("We are so sorry, but somethink went wrong... Try again!");case 22:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),y=function(e){var t=function(e){var t=Object(r.useRef)(null),n=Object(r.useRef)(null),a=Object(r.useRef)(null),c=Object(r.useState)({nameError:"",mailError:"",purposeError:""}),i=Object(o.a)(c,2),s=i[0],u=i[1],d=Object(r.useState)({nameValue:"",mailValue:"",purposeValue:""}),j=Object(o.a)(d,2),p=j[0],h=j[1],O=Object(l.useMediaQuery)({query:"(max-width: 968px)"});Object(r.useEffect)((function(){a&&a.current&&a.current.focus()}),[s.purposeError]),Object(r.useEffect)((function(){n&&n.current&&n.current.focus()}),[s.mailError]),Object(r.useEffect)((function(){t&&t.current&&t.current.focus()}),[s.nameError]);var y=Object(r.useCallback)((function(){e.closeBooking()}),[e]),v=Object(r.useCallback)((function(e){e.stopPropagation(),27===e.keyCode&&y()}),[y]);return Object(r.useEffect)((function(){return document.addEventListener("keydown",v,!0),function(){document.removeEventListener("keydown",v,!0)}}),[v]),{nameInputRef:t,mailInputRef:n,purposeInputRef:a,inputError:s,inputValue:p,handleInput:function(e){switch(e.target.id){case"nameInput":h(Object(f.a)(Object(f.a)({},p),{},{nameValue:e.target.value})),u(Object(f.a)(Object(f.a)({},s),{},{nameError:""}));break;case"mailInput":h(Object(f.a)(Object(f.a)({},p),{},{mailValue:e.target.value})),u(Object(f.a)(Object(f.a)({},s),{},{mailError:""}));break;case"purposeInput":h(Object(f.a)(Object(f.a)({},p),{},{purposeValue:e.target.value})),u(Object(f.a)(Object(f.a)({},s),{},{purposeError:""}))}},handleConfirm:function(){var t=Object(m.a)(b.a.mark((function t(){var n,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(p.nameValue.length<3)){t.next=2;break}return t.abrupt("return",u(Object(f.a)(Object(f.a)({},s),{},{nameError:"please enter your name"})));case 2:if(x.a.validate(p.mailValue)){t.next=4;break}return t.abrupt("return",u(Object(f.a)(Object(f.a)({},s),{},{mailError:"please enter correct e-mail address"})));case 4:if(!(p.purposeValue.length<5)){t.next=6;break}return t.abrupt("return",u(Object(f.a)(Object(f.a)({},s),{},{purposeError:"please write a subject of meeting"})));case 6:return n=e.targetHour.substring(0,10)+"T"+e.targetHour.substring(10,15)+":00",a=n.substring(0,14)+"55"+n.substring(16),t.next=10,g({inputValue:p,start:n,end:a,targetHour:e.targetHour});case 10:y();case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),handleCancel:y,isTabletOrMobile:O}}(e),n=t.nameInputRef,c=t.mailInputRef,i=t.purposeInputRef,s=t.inputError,u=t.inputValue,d=t.handleInput,j=t.handleConfirm,p=t.handleCancel,h=t.isTabletOrMobile;return Object(a.jsx)("div",{className:"modal",children:Object(a.jsxs)("div",{className:h?"booking-wraper-sm":"booking-wraper",children:["You are going to book you visit on",Object(a.jsx)("br",{}),Object(a.jsxs)("b",{children:[e.targetHour.substring(0,10)," at ",e.targetHour.substring(10,15)]})," ",Object(a.jsx)("br",{}),"Before you confirm, fill the form below:",Object(a.jsxs)("div",{className:"input-group",children:[Object(a.jsx)("input",{ref:n,value:u.nameValue,type:"input",onChange:d,className:"input",placeholder:"Name",name:"name",id:"nameInput",required:!0}),""!==s.nameError?Object(a.jsx)("span",{className:"input-helper",children:s.nameError}):null,Object(a.jsx)("label",{htmlFor:"name",className:"label",children:"Your Name"})]}),Object(a.jsxs)("div",{className:"input-group",children:[Object(a.jsx)("input",{ref:c,value:u.mailValue,type:"input",onChange:d,className:"input",placeholder:"Email address",name:"mail",id:"mailInput",required:!0}),Object(a.jsx)("label",{htmlFor:"name",className:"label",children:"Your e-mail"}),""!==s.mailError?Object(a.jsx)("span",{className:"input-helper",children:s.mailError}):null]}),"The purpose of your visit:",Object(a.jsx)("textarea",{className:"booking-textArea",ref:i,value:u.purposeValue,onChange:d,id:"purposeInput"}),""!==s.purposeError?Object(a.jsx)("div",{className:"input-helper",children:s.purposeError}):null,Object(a.jsx)("button",{className:"booking-button",onClick:j,children:"Confirm"}),Object(a.jsx)("button",{className:"booking-button cancel",onClick:p,children:"Cancel"})]})})},v=n(13);function k(){var e=Object(v.a)(["\n    position: absolute;\n    top: ","px;\n    left: ","px;\n    background-color: #A8DADC;\n    width: 150px;\n    padding: 10px;\n    border-radius: 5px;\n    border-width: 1px;\n    border-style: solid; \n    border-color: #457B9D;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    "]);return k=function(){return e},e}var w=n(14).a.div(k(),(function(e){return e.top}),(function(e){return e.left})),N=(n(32),function(){var e=function(){var e=Object(r.useContext)(u).context,t=Object(r.useState)(!1),n=Object(o.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)(!1),s=Object(o.a)(i,2),d=s[0],b=s[1],m=Object(r.useState)(""),j=Object(o.a)(m,2),p=j[0],h=j[1],f=Object(l.useMediaQuery)({query:"(max-width: 968px)"});Object(r.useEffect)((function(){e&&c(e.visible)}),[e]);var O=Object(r.useCallback)((function(){c(!1)}),[c]),x=Object(r.useCallback)((function(e){e.stopPropagation(),27===e.keyCode&&O()}),[O]);Object(r.useEffect)((function(){return document.addEventListener("keydown",x,!1),function(){document.removeEventListener("keydown",x,!1)}}),[x]);var g=e?e.position:[0,0];return f?(g[0]=g[0]>220?g[0]-200:g[0],g[1]=g[1]>200?g[1]-200:g[1]):(g[0]=g[0]>900?g[0]-200:g[0],g[1]=g[1]>300?g[1]-300:g[1]),{context:e,isbookingVisible:d,isDayVisible:a,dayPosition:g,handleClose:O,handleClick:function(e){b(!d),h(e.target.id)},closeBooking:function(){b(!1)},targetHour:p}}(),t=e.context,n=e.isbookingVisible,c=e.isDayVisible,i=e.dayPosition,s=e.handleClose,d=e.handleClick,b=e.closeBooking,m=e.targetHour;return t&&c?Object(a.jsx)(w,{top:i[1],left:i[0],children:Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"close",onClick:s,children:"x"}),Object(a.jsx)("div",{className:"day-header",children:t.day.date}),Object(a.jsx)("div",{children:t.day.periodsForMeeting.map((function(e){return Object(a.jsxs)("div",{id:t.day.date+e.start,onClick:e.availble?d:function(){},className:e.availble?"availble":"busyday",children:[e.start," - ",e.end]},e.start)}))}),Object(a.jsx)("div",{children:n?Object(a.jsx)(y,{targetHour:m,closeBooking:b}):null})]})}):null}),C=n.p+"static/media/mr-bean.cfc04ab0.png",M=(n(33),function(){return Object(l.useMediaQuery)({query:"(max-width: 968px)"})?Object(a.jsxs)("div",{className:"grid-aside",children:[Object(a.jsx)("img",{src:C,alt:"mrbean",className:"mrbean-sm"}),Object(a.jsx)("h3",{className:"welcome-sm",children:"Welcome in Mr.Been's office"}),Object(a.jsx)("p",{children:"Do you want to meet with me?"}),Object(a.jsx)("p",{children:"Just click on the calendar!"})]}):Object(a.jsxs)("div",{className:"grid-aside",children:[Object(a.jsx)("h3",{className:"welcome",children:"Welcome in Mr.Been's office"}),Object(a.jsx)("p",{children:"Do you want to meet with me?"}),Object(a.jsx)("p",{children:"Just click on the calendar!"}),Object(a.jsx)("img",{src:C,alt:"mrbean",className:"mrbean"})]})}),E=(n(34),["January","February","March","April","May","June","July","August","Septembre","October","November","December"]),T=function(){var e=function(){var e=Object(r.useState)(new Date),t=Object(o.a)(e,1)[0],n=Object(r.useState)({m:0,y:2020,length:30}),a=Object(o.a)(n,2),c=a[0],i=a[1],s=Object(r.useState)({m:0,y:2020,length:30}),u=Object(o.a)(s,2),d=u[0],b=u[1];Object(r.useEffect)((function(){i({m:t.getMonth(),y:t.getFullYear(),length:new Date(t.getFullYear(),t.getMonth()+1,0).getDate()});var e=t.getMonth()+1<12?t.getMonth()+1:0,n=t.getMonth()+1<12?t.getFullYear():t.getFullYear()+1,a=new Date(t.getMonth()+1<12?t.getFullYear():t.getFullYear()+1,(t.getMonth()+1<12?t.getMonth()+1:0)+1,0).getDate();b({m:e,y:n,length:a})}),[t]);var m=Object(r.useState)({day:{id:0,date:"string",dayOfWeek:0,availble:!0,periodsForMeeting:[{start:"string",end:"string",availble:!0}]},position:[0,0],visible:!1}),j=Object(o.a)(m,2),p=j[0],h=j[1],f=Object(l.useMediaQuery)({query:"(max-width: 968px)"});return{firstMonth:c,secondMonth:d,handleClick:function(e){var t=d.m+1<12?d.m+1:0,n=0===t?d.y+1:d.y,a=new Date(0===t?d.y+1:d.y,(d.m+1<12?d.m+1:0)+1,0).getDate(),r=c.m-1>=0?c.m-1:11,s=11===r?c.y-1:c.y,o=new Date(s,r+1,0).getDate();"previous"===e.target.id&&(b({m:c.m,y:c.y,length:c.length}),i({m:r,y:s,length:o})),"next"===e.target.id&&(i({m:d.m,y:d.y,length:d.length}),b({m:t,y:n,length:a}))},context:p,setContext:h,isTabletOrMobile:f}}(),t=e.firstMonth,n=e.secondMonth,c=e.handleClick,i=e.context,s=e.setContext;return e.isTabletOrMobile?Object(a.jsxs)("div",{className:"calendar-sm",children:[Object(a.jsx)(M,{}),Object(a.jsxs)(u.Provider,{value:{context:i,setContext:s},children:[Object(a.jsx)(N,{}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("h3",{children:[Object(a.jsx)("span",{onClick:c,id:"previous",className:"previous",children:"Previous"}),E[t.m],"  ",t.y,Object(a.jsx)("span",{onClick:c,className:"next",id:"next",children:"Next"})]}),Object(a.jsx)(h,{month:t})]})]})]}):Object(a.jsxs)("div",{className:"calendar",children:[Object(a.jsx)(M,{}),Object(a.jsxs)(u.Provider,{value:{context:i,setContext:s},children:[Object(a.jsx)(N,{}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("h3",{children:[Object(a.jsx)("span",{onClick:c,id:"previous",className:"previous",children:"Previous"})," ",E[t.m]," ",t.y]}),Object(a.jsx)(h,{month:t})]}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("h3",{children:[E[n.m]," ",n.y," ",Object(a.jsx)("span",{onClick:c,className:"next",id:"next",children:"Next"})]}),Object(a.jsx)(h,{month:n})]})]})]})},S=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(T,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(a.jsx)(S,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.c4a6f1f5.chunk.js.map
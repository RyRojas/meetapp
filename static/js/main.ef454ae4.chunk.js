(this.webpackJsonpmeetapp=this.webpackJsonpmeetapp||[]).push([[0],{31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(23),c=n.n(o),i=(n(31),n(2)),s=(n(32),n(33),n(0));function u(e){var t=e.eventData,n=Object(a.useState)(!1),r=Object(i.a)(n,2),o=r[0],c=r[1];return Object(s.jsxs)("div",{className:"event-card",children:[Object(s.jsx)("h2",{className:"event-card__title",children:t.summary}),Object(s.jsx)("p",{className:"event-card__date",children:t.start.dateTime}),Object(s.jsx)("p",{className:"event-card__location",children:t.location}),o&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("p",{className:"event-card__description",children:t.description}),Object(s.jsx)("a",{href:t.htmlLink,className:"event-card__calendar-link",children:Object(s.jsx)("button",{children:"See Event in Calendar"})})]}),Object(s.jsx)("button",{className:"event-card__details-toggle",onClick:function(){return c(!o)},children:o?"Hide Details":"Show Details"})]})}function l(e){var t=e.events;return Object(s.jsx)("ul",{className:"event-list",children:t.map((function(e){return Object(s.jsx)("li",{className:"event-list__item",children:Object(s.jsx)(u,{eventData:e})},e.id)}))})}var d=n(6),h=n(24),f=n(9),m=n(8),p=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(h.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"alert",children:Object(s.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),v=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(p),b=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(p),j=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).color="#FFC107",a}return n}(p);function g(e){var t=e.locations,n=e.setSelectedLocation,r=Object(a.useState)(""),o=Object(i.a)(r,2),c=o[0],u=o[1],l=Object(a.useState)(!1),d=Object(i.a)(l,2),h=d[0],f=d[1],m=Object(a.useState)(""),p=Object(i.a)(m,2),b=p[0],j=p[1],g=Object(a.useState)([]),w=Object(i.a)(g,2),O=w[0],k=w[1],y=function(e){var n=e?t.filter((function(t){return t.toUpperCase().includes(e.toUpperCase())})):t;0===n.length?j("We cannot find the city you are looking for. Please try another city."):j(""),k(n),u(e)},x=function(e){y(e),f(!1),n(e)};return Object(a.useEffect)((function(){k(t)}),[t]),Object(s.jsxs)("div",{className:"city-search",children:[Object(s.jsx)(v,{text:b,className:"alert"}),Object(s.jsx)("input",{type:"text",className:"search-bar",value:c,onChange:function(e){return y(e.target.value)},onFocus:function(){return f(!0)},onBlur:function(e){var t;(t=e).relatedTarget&&"suggestions__item"===t.relatedTarget.className||f(!1)}}),Object(s.jsxs)("ul",{className:"suggestions",style:h?{}:{display:"none"},children:[O.map((function(e){return Object(s.jsx)("li",{className:"suggestions__item",tabIndex:"0",onClick:function(){return x(e)},children:e},e)})),Object(s.jsx)("li",{className:"suggestions__item",tabIndex:"0",onClick:function(){return x("")},children:Object(s.jsx)("b",{children:"See all cities"})},"all")]})]})}function w(e){var t=e.eventCount,n=e.setEventCount,r=Object(a.useState)(""),o=Object(i.a)(r,2),c=o[0],u=o[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("input",{type:"number",className:"events-displayed-input",value:t,onChange:function(e){return function(e){u("");var t=parseInt(e.target.value);t<1||!Number.isInteger(t)?u("Please enter a valid number."):n(t)}(e)}}),Object(s.jsx)(b,{text:c})]})}var O=n(4),k=n.n(O),y=n(7),x=n(26),S=n(13),T=n.n(S),Z=n(11),N=n.n(Z),_=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200521T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-21T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],W=function(){var e=Object(y.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=window.history.pushState&&window.location.pathname,t=window.location.protocol+"//"+window.location.host+e?window.location.pathname:"";window.history.pushState("","",t)},E=function(){var e=Object(y.a)(k.a.mark((function e(){var t,n,a,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",_);case 2:if(navigator.onLine){e.next=6;break}return t=localStorage.getItem("lastEvents"),N.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 6:return e.next=8,M();case 8:if(!(n=e.sent)){e.next=19;break}return N.a.start(),C(),a="https://mj84us3vwj.execute-api.us-west-2.amazonaws.com/dev/api/get-events/"+n,e.next=15,T.a.get(a);case 15:return(r=e.sent).data&&localStorage.setItem("lastEvents",JSON.stringify(r.data)),N.a.done(),e.abrupt("return",r.data.events);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(y.a)(k.a.mark((function e(){var t,n,a,r,o,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,W(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,T.a.get("https://mj84us3vwj.execute-api.us-west-2.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,c=o.data.authUrl,e.abrupt("return",window.location.href=c);case 20:return e.abrupt("return",r&&J(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(y.a)(k.a.mark((function e(t){var n,a,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://mj84us3vwj.execute-api.us-west-2.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function L(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)([]),c=Object(i.a)(o,2),u=c[0],d=c[1],h=Object(a.useState)([]),f=Object(i.a)(h,2),m=f[0],p=f[1],v=Object(a.useState)(""),b=Object(i.a)(v,2),O=b[0],k=b[1],y=Object(a.useState)(16),S=Object(i.a)(y,2),T=S[0],Z=S[1],N=Object(a.useState)(""),_=Object(i.a)(N,2),W=_[0],C=_[1],M=function(){navigator.onLine?C(""):C("You are currently offline, events may not be up-to-date.")};return Object(a.useEffect)((function(){M(),E().then((function(e){r(e),p(e),d(function(e){var t=e.map((function(e){return e.location}));return Object(x.a)(new Set(t))}(e))}))}),[]),Object(a.useEffect)((function(){M();var e=(""===O?n:n.filter((function(e){return e.location===O}))).slice(0,T||16);p(e)}),[O,T,n]),Object(s.jsxs)("div",{className:"app",children:[Object(s.jsx)(g,{locations:u,setSelectedLocation:k}),Object(s.jsx)(j,{text:W}),Object(s.jsx)(l,{events:m}),Object(s.jsx)(w,{eventCount:T,setEventCount:Z})]})}var B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))},A=n(25);c.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(L,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meetapp",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meetapp","/service-worker.js");B?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):I(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):I(t,e)}))}}(),A.config("be64b188588f4e2680a9e92e8e0563c6").install(),D()}},[[54,1,2]]]);
//# sourceMappingURL=main.ef454ae4.chunk.js.map
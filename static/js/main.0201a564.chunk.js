(this.webpackJsonpmeetapp=this.webpackJsonpmeetapp||[]).push([[0],{31:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(23),c=n.n(o),i=(n(31),n(4)),s=n.n(i),u=n(5),l=n(2),d=(n(33),n(34),n(0));function h(e){var t=e.eventData,n=Object(a.useState)(!1),r=Object(l.a)(n,2),o=r[0],c=r[1];return Object(d.jsxs)("div",{className:"event-card",children:[Object(d.jsx)("h2",{className:"event-card__title",children:t.summary}),Object(d.jsx)("p",{className:"event-card__date",children:t.start.dateTime}),Object(d.jsx)("p",{className:"event-card__location",children:t.location}),o&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{className:"event-card__description",children:t.description}),Object(d.jsx)("a",{href:t.htmlLink,className:"event-card__calendar-link",children:Object(d.jsx)("button",{children:"See Event in Calendar"})})]}),Object(d.jsx)("button",{className:"event-card__details-toggle",onClick:function(){return c(!o)},children:o?"Hide Details":"Show Details"})]})}function f(e){var t=e.events;return Object(d.jsx)("ul",{className:"event-list",children:t.map((function(e){return Object(d.jsx)("li",{className:"event-list__item",children:Object(d.jsx)(h,{eventData:e})},e.id)}))})}var m=n(7),p=n(24),b=n(9),v=n(8),j=function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(p.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"alert",children:Object(d.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),g=function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(j),w=function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(j),O=function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).color="#FFC107",a}return n}(j);function x(e){var t=e.locations,n=e.setSelectedLocation,r=Object(a.useState)(""),o=Object(l.a)(r,2),c=o[0],i=o[1],s=Object(a.useState)(!1),u=Object(l.a)(s,2),h=u[0],f=u[1],m=Object(a.useState)(""),p=Object(l.a)(m,2),b=p[0],v=p[1],j=Object(a.useState)([]),w=Object(l.a)(j,2),O=w[0],x=w[1],k=function(e){var n=e?t.filter((function(t){return t.toUpperCase().includes(e.toUpperCase())})):t;0===n.length?v("We cannot find the city you are looking for. Please try another city."):v(""),x(n),i(e)},y=function(e){k(e),f(!1),n(e)};return Object(a.useEffect)((function(){x(t)}),[t]),Object(d.jsxs)("div",{className:"city-search",children:[Object(d.jsx)(g,{text:b,className:"alert"}),Object(d.jsx)("input",{type:"text",className:"search-bar",value:c,onChange:function(e){return k(e.target.value)},onFocus:function(){return f(!0)},onBlur:function(e){var t;(t=e).relatedTarget&&"suggestions__item"===t.relatedTarget.className||f(!1)}}),Object(d.jsxs)("ul",{className:"suggestions",style:h?{}:{display:"none"},children:[O.map((function(e){return Object(d.jsx)("li",{className:"suggestions__item",tabIndex:"0",onClick:function(){return y(e)},children:e},e)})),Object(d.jsx)("li",{className:"suggestions__item",tabIndex:"0",onClick:function(){return y("")},children:Object(d.jsx)("b",{children:"See all cities"})},"all")]})]})}function k(e){var t=e.eventCount,n=e.setEventCount,r=Object(a.useState)(""),o=Object(l.a)(r,2),c=o[0],i=o[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",{type:"number",className:"events-displayed-input",value:t,onChange:function(e){return function(e){i("");var t=parseInt(e.target.value);t<1||!Number.isInteger(t)?i("Please enter a valid number."):n(t)}(e)}}),Object(d.jsx)(w,{text:c})]})}n(36);function y(e){var t=e.showWelcomeScreen,n=e.getAccessToken;return t?Object(d.jsxs)("div",{className:"WelcomeScreen",children:[Object(d.jsx)("h1",{children:"Welcome to MeetApp"}),Object(d.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers."}),Object(d.jsx)("div",{className:"button_cont",align:"center",children:Object(d.jsxs)("div",{class:"google-btn",children:[Object(d.jsx)("div",{class:"google-icon-wrapper",children:Object(d.jsx)("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(d.jsx)("button",{onClick:function(){return n()},rel:"nofollow noopener",class:"btn-text",children:Object(d.jsx)("b",{children:"Sign in with Google"})})]})}),Object(d.jsx)("a",{href:"https://ryrojas.github.io/meetapp/privacy.html",rel:"nofollow noopener",children:"Privacy Policy"})]}):null}var S=n(26),T=n(13),Z=n.n(T),N=n(11),_=n.n(N),W=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200521T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-21T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],C=function(){var e=Object(u.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=window.history.pushState&&window.location.pathname,t=window.location.protocol+"//"+window.location.host+e?window.location.pathname:"";window.history.pushState("","",t)},E=function(){var e=Object(u.a)(s.a.mark((function e(){var t,n,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",W);case 2:if(navigator.onLine){e.next=6;break}return t=localStorage.getItem("lastEvents"),_.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 6:return e.next=8,M();case 8:if(!(n=e.sent)){e.next=19;break}return _.a.start(),L(),a="https://mj84us3vwj.execute-api.us-west-2.amazonaws.com/dev/api/get-events/"+n,e.next=15,Z.a.get(a);case 15:return(r=e.sent).data&&localStorage.setItem("lastEvents",JSON.stringify(r.data)),_.a.done(),e.abrupt("return",r.data.events);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(u.a)(s.a.mark((function e(){var t,n,a,r,o,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,C(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,Z.a.get("https://mj84us3vwj.execute-api.us-west-2.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,c=o.data.authUrl,e.abrupt("return",window.location.href=c);case 20:return e.abrupt("return",r&&J(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://mj84us3vwj.execute-api.us-west-2.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function A(){var e=Object(a.useState)(void 0),t=Object(l.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)([]),c=Object(l.a)(o,2),i=c[0],h=c[1],m=Object(a.useState)([]),p=Object(l.a)(m,2),b=p[0],v=p[1],j=Object(a.useState)([]),g=Object(l.a)(j,2),w=g[0],T=g[1],Z=Object(a.useState)(""),N=Object(l.a)(Z,2),_=N[0],W=N[1],L=Object(a.useState)(16),J=Object(l.a)(L,2),A=J[0],B=J[1],I=Object(a.useState)(""),D=Object(l.a)(I,2),U=D[0],F=D[1],R=function(){navigator.onLine?F(""):F("You are currently offline, events may not be up-to-date.")};return Object(a.useEffect)((function(){R();var e=localStorage.getItem("access_token"),t=Object(u.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C(e).error;case 2:if(!t.sent){t.next=6;break}t.t0=!1,t.next=7;break;case 6:t.t0=!0;case 7:return t.abrupt("return",t.t0);case 8:case"end":return t.stop()}}),t)})))(),n=new URLSearchParams(window.location.search).get("code");r(!(n||t)),(n||t)&&E().then((function(e){h(e),T(e),v(function(e){var t=e.map((function(e){return e.location}));return Object(S.a)(new Set(t))}(e))}))}),[]),Object(a.useEffect)((function(){R();var e=(""===_?i:i.filter((function(e){return e.location===_}))).slice(0,A||16);T(e)}),[_,A,i]),Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(x,{locations:b,setSelectedLocation:W}),Object(d.jsx)(O,{text:U}),Object(d.jsx)(f,{events:w}),Object(d.jsx)(k,{eventCount:A,setEventCount:B}),Object(d.jsx)(y,{showWelcomeScreen:n,getAccessToken:M})]})}var B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,56)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))},U=n(25);c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(A,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meetapp",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meetapp","/service-worker.js");B?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):I(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):I(t,e)}))}}(),U.config("be64b188588f4e2680a9e92e8e0563c6").install(),D()}},[[55,1,2]]]);
//# sourceMappingURL=main.0201a564.chunk.js.map
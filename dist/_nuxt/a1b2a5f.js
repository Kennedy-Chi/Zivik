(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{426:function(t,e,n){"use strict";var r=n(2),c=n(3),o=n(59),f=n(222),l=n(214),v=n(4),d=RangeError,h=String,m=Math.floor,_=c(l),x=c("".slice),C=c(1..toFixed),w=function(t,e,n){return 0===e?n:e%2==1?w(t,e-1,n*t):w(t*t,e/2,n)},F=function(data,t,e){for(var n=-1,r=e;++n<6;)r+=t*data[n],data[n]=r%1e7,r=m(r/1e7)},k=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=m(n/t),n=n%t*1e7},N=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=h(data[t]);s=""===s?e:s+_("0",7-e.length)+e}return s};r({target:"Number",proto:!0,forced:v((function(){return"0.000"!==C(8e-5,3)||"1"!==C(.9,0)||"1.25"!==C(1.255,2)||"1000000000000000128"!==C(0xde0b6b3a7640080,0)}))||!v((function(){C({})}))},{toFixed:function(t){var e,n,r,c,l=f(this),v=o(t),data=[0,0,0,0,0,0],m="",C="0";if(v<0||v>20)throw d("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return h(l);if(l<0&&(m="-",l=-l),l>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(l*w(2,69,1))-69)<0?l*w(2,-e,1):l/w(2,e,1),n*=4503599627370496,(e=52-e)>0){for(F(data,0,n),r=v;r>=7;)F(data,1e7,0),r-=7;for(F(data,w(10,r,1),0),r=e-1;r>=23;)k(data,1<<23),r-=23;k(data,1<<r),F(data,1,1),k(data,2),C=N(data)}else F(data,0,n),F(data,1<<-e,0),C=N(data)+_("0",v);return C=v>0?m+((c=C.length)<=v?"0."+_("0",v-c)+C:x(C,0,c-v)+"."+x(C,c-v)):m+C}})},462:function(t,e,n){"use strict";n.r(e);n(426),n(213);var r=n(8),c=(n(48),n(20),n(37),n(13),n(90),{data:function(){return{savings:0,fixed:0,current:0,user:""}},methods:{formatMoney:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},formatDate:function(){var t=(new Date).getTime();return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",suffix:function(t){return 1===t||21===t||31===t?"st":2===t||22===t?"nd":3===t||23===t?"rd":"th"}}).format(t)},getUser:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$aixos.get("/users/get-user");case 3:n=e.sent,t.user=n.data.user,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},mounted:function(){this.getUser()}}),o=n(56),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"account-wrapper"},[e("h1",{staticClass:"balance-title"},[t._v("Your Savings Balance")]),t._v(" "),t.user?e("h1",{staticClass:"balance"},[t._v("\n    $"+t._s(t.formatMoney(Number(t.user.totalBalance).toFixed(2)))+"\n  ")]):t._e(),t._v(" "),e("div",{staticClass:"date"},[t._v(t._s(t.formatDate()))]),t._v(" "),e("div",{staticClass:"accounts-holder"},[e("div",{staticClass:"each-account"},[e("div",{staticClass:"account-name"},[t._v("Savings")]),t._v(" "),e("h1",{staticClass:"each-account-balance"},[t._v("\n        $"+t._s(t.formatMoney(Number(t.user.totalBalance).toFixed(2)))+"\n      ")])]),t._v(" "),e("div",{staticClass:"each-account"},[e("div",{staticClass:"account-name check"},[t._v("Fixed")]),t._v(" "),e("h1",{staticClass:"each-account-balance"},[t._v("\n        $"+t._s(Number(t.checkAccounts("Fixed")).toFixed(2))+"\n      ")])]),t._v(" "),e("div",{staticClass:"each-account"},[e("div",{staticClass:"account-name current"},[t._v("current")]),t._v(" "),e("h1",{staticClass:"each-account-balance"},[t._v("\n        $"+t._s(Number(t.checkAccounts("Current")).toFixed(2))+"\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{315:function(t,n,o){var content=o(323);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(143).default)("3feb2699",content,!0,{sourceMap:!1})},319:function(t,n,o){"use strict";o.r(n);var e=o(8),l=(o(26),o(48),{data:function(){return{route:""}},methods:{authenticateUser:function(){"Admin"==this.user.staffType&&this.$router.push("/admin")},hideNav:function(){document.querySelector(".nav-wrapper").classList.remove("show")},logout:function(){var t=this;return Object(e.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$auth.logout();case 2:case"end":return n.stop()}}),n)})))()}},mounted:function(){this.authenticateUser(),this.route=this.$route.name},computed:{user:function(){return this.$store.state.auth.user},showDashobardNav:function(){return this.$store.state.showDashboardNav}}}),c=(o(322),o(56)),component=Object(c.a)(l,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"nav-wrapper"},[n("div",{staticClass:"vertical-navigation"},[n("img",{staticClass:"menu-toggle",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641442165b5e4a499ae9f723_menu-close.svg",loading:"lazy",alt:""},on:{click:t.hideNav}}),n("nuxt-link",{staticClass:"brand w-inline-block",attrs:{to:"/"}},[n("img",{staticClass:"logo",attrs:{src:"/images/Colored-Logo.png",loading:"lazy",alt:""}})]),t._v(" "),n("div",{staticClass:"nav-intro"},[t._v("Enjoy Smooth Banking Experience")]),t._v(" "),n("ul",{staticClass:"nav-list",attrs:{role:"list"}},[n("li",[n("nuxt-link",{staticClass:"nav-links w-inline-block",class:{active:"dashboard"==t.route},attrs:{to:"/dashboard"}},[n("img",{staticClass:"nav-icons",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641332980aba34f385a4eeac_dashboard.svg",loading:"lazy",alt:""}}),t._v(" "),n("div",[t._v("Dashboard")])])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"nav-links w-inline-block",class:{active:"profile"==t.route},attrs:{to:"/profile"}},[n("img",{staticClass:"nav-icons",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641335f0e476a25fb94bb5bc_profile.svg",loading:"lazy",alt:""}}),t._v(" "),n("div",[t._v("Profile")])])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"nav-links w-inline-block",class:{active:"deposit"==t.route},attrs:{to:"/deposit"}},[n("img",{staticClass:"nav-icons",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/64133a9b2d3c101d19bfdf93_deposit.svg",loading:"lazy",alt:""}}),t._v(" "),n("div",[t._v("Deposit")])])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"nav-links w-inline-block",class:{active:"transfer"==t.route},attrs:{to:"/transfer"}},[n("img",{staticClass:"nav-icons",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/64133c52259c487edf10323c_buyer-pay-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),n("div",[t._v("Transfer")])])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"nav-links w-inline-block",class:{active:"internal"==t.route},attrs:{to:"/internal"}},[n("img",{staticClass:"nav-icons",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/64133d2ec4c4694654dfe706_transfer.svg",loading:"lazy",alt:""}}),t._v(" "),n("div",[t._v("User 2 User Transfer")])])],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"nav-links w-inline-block",class:{active:"transactions"==t.route},attrs:{to:"/transactions"}},[n("img",{staticClass:"nav-icons",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641332980aba34f385a4eeac_dashboard.svg",loading:"lazy",alt:""}}),t._v(" "),n("div",[t._v("Transactions")])])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"nav-links w-inline-block",class:{active:"notification"==t.route},attrs:{to:"/notification"}},[n("img",{staticClass:"nav-icons",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641335f055e38d2c4db8492c_notification.svg",loading:"lazy",alt:""}}),t._v(" "),n("div",[t._v("Notifications")])])],1),t._v(" "),n("li",{on:{click:t.logout}},[t._m(2)])]),t._v(" "),n("h1",{staticClass:"brand-name"},[t._v("AS Finance LTD")]),t._v(" "),n("div",[t._v("The best choice of Online-Banking with No-Restrictions")])],1)])}),[function(){var t=this,n=t._self._c;return n("li",{staticClass:"my-element loan"},[n("span",{staticClass:"nav-links w-inline-block"},[n("img",{staticClass:"nav-icons",attrs:{src:"/images/loan.svg",loading:"lazy",alt:""}}),t._v(" "),n("div",[t._v("Loan")])])])},function(){var t=this,n=t._self._c;return n("li",{staticClass:"my-element card"},[n("span",{staticClass:"nav-links w-inline-block"},[n("img",{staticClass:"nav-icons",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/64133a9b5f5f5607f2ef1d8d_card.svg",loading:"lazy",alt:""}}),t._v(" "),n("div",[t._v("Virtual Card")])])])},function(){var t=this,n=t._self._c;return n("a",{staticClass:"nav-links w-inline-block",attrs:{href:"#"}},[n("img",{staticClass:"nav-icons",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641335f0fbeda4ab78bee286_logout.svg",loading:"lazy",alt:""}}),t._v(" "),n("div",[t._v("Logout")])])}],!1,null,null,null);n.default=component.exports},322:function(t,n,o){"use strict";o(315)},323:function(t,n,o){var e=o(142)((function(i){return i[1]}));e.push([t.i,'.nav-wrapper{transition:all .3s}.nav-wrapper.show{left:0}.my-element{display:block;position:relative}.my-element.card:hover:before{content:"You can apply for card one month after registration"}.my-element.loan:hover:before{content:"You can apply for loan one month after registration"}.my-element:hover:before{background-color:#e53b24;border-radius:5px;color:#fff;left:0;padding:5px;position:absolute;top:-10px;width:250px}',""]),e.locals={},t.exports=e}}]);
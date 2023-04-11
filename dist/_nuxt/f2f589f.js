(window.webpackJsonp=window.webpackJsonp||[]).push([[11,5],{305:function(t,e,n){"use strict";n.r(e);var l={props:{msg:{type:String},state:{type:Boolean}},methods:{getState:function(){return this.$store.state.confirmState},confirm:function(data){this.$emit("confirm",data)}},computed:{}},r=n(56),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"confirm-action",class:{hide:t.state}},[e("div",{staticClass:"confirm-box"},[e("div",[t._v(t._s(t.msg))]),t._v(" "),e("div",{staticClass:"confirm-holder"},[e("span",{staticClass:"button w-button",on:{click:function(e){return t.confirm("yes")}}},[t._v("Yes")]),e("span",{staticClass:"button w-button",on:{click:function(e){return t.confirm("no")}}},[t._v("No")])])])])}),[],!1,null,null,null);e.default=component.exports},335:function(t,e,n){var content=n(344);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(143).default)("54b4a80b",content,!0,{sourceMap:!1})},343:function(t,e,n){"use strict";n(335)},344:function(t,e,n){var l=n(142)((function(i){return i[1]}));l.push([t.i,".each-input textarea{width:100%}",""]),l.locals={},t.exports=l},373:function(t,e,n){"use strict";n.r(e);n(57),n(39);var l=n(8),r=(n(48),{data:function(){return{categories:["Home","About","Services","FAQ","Contact","Banking"],showBlogCategoryList:!1,category:"Select Category",title:"",subtitle:"",banner:"",content:"",blogs:[],date:"",author:"",editingState:!1,editingId:"",confirmMessage:"",confirmStatus:!0,deleteId:""}},methods:{formatDate:function(data){if(null==data||null==data)return"N/A";var t=new Date(data).getTime();return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",suffix:function(t){return 1===t||21===t||31===t?"st":2===t||22===t?"nd":3===t||23===t?"rd":"th"}}).format(t)},setBlogCategory:function(t){this.category=t,this.showBlogCategoryList=!1},setBanner:function(t){this.banner=t.target.files[0]},clearInputs:function(){this.editingId="",this.editingState=!1,this.category="Select Category",this.title="",this.subtitle="",this.banner="",this.content="",this.date="",this.author=""},toggleBlogStatus:function(t,e){this.editingId=t;var data={status:!e};this.updateBlog(data)},showConfirmation:function(t,e){this.deleteId=e,this.confirmMessage=t,this.confirmStatus=!1},returnConfirmation:function(data){"yes"==data&&this.deleteBlog(this.deleteId),this.confirmStatus=!0},prepareBlog:function(t){this.editingId=t._id,this.editingState=!0,this.banner=t.banner,this.category=t.category,this.title=t.title,this.subtitle=t.subtitle,this.content=t.content,this.author=t.author,this.date=t.date},processBlog:function(){var form=new FormData;form.append("category",this.category),form.append("title",this.title),form.append("subtitle",this.subtitle),form.append("banner",this.banner),form.append("content",this.content),form.append("author",this.author),form.append("date",""==this.date?(new Date).getTime():new Date(this.date).getTime()),this.editingState?this.updateBlog(form):this.createBlog(form)},updateBlog:function(form){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.patch("/blog/".concat(t.editingId),form);case 3:t.clearInputs(),t.getBlog(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},createBlog:function(form){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.post("/blog",form);case 3:t.clearInputs(),t.getBlog(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getBlog:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/blog");case 3:n=e.sent,t.blogs=n.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getBlogCategories:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0.response.data.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},deleteBlog:function(t){var e=this;return Object(l.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.$axios.delete("/banner/".concat(t));case 3:e.getBlog(),e.clearInputs(),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.response.data.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()}},mounted:function(){this.getBlogCategories(),this.getBlog()},computed:{FILE_URL:function(){return this.$store.state.fileURL}}}),o=(n(343),n(56)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("admin-confirmation",{attrs:{msg:t.confirmMessage,state:t.confirmStatus},on:{confirm:t.returnConfirmation}}),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"table-wrapper"},[e("table",{staticClass:"custom-table"},[t._m(1),t._v(" "),e("tbody",t._l(t.blogs,(function(n,l){return e("tr",{key:n._id},[e("td",[t._v(t._s(l+1))]),t._v(" "),e("td",[e("img",{staticClass:"banner",attrs:{src:"".concat(t.FILE_URL,"/").concat(n.banner),alt:""}})]),t._v(" "),e("td",[t._v(t._s(n.category))]),t._v(" "),e("td",[t._v(t._s(n.title))]),t._v(" "),e("td",[t._v("\n            "+t._s(n.subtitle)+"\n          ")]),t._v(" "),e("td",[t._v(t._s(n.author))]),t._v(" "),e("td",[t._v(t._s(t.formatDate(n.date)))]),t._v(" "),e("td",[t._v(t._s(n.content.slice(0,100)))]),t._v(" "),e("td",[n.status?e("div",{staticClass:"status",class:{success:n.status},on:{click:function(e){return t.toggleBlogStatus(n._id,n.status)}}},[t._v("\n              Active\n            ")]):e("div",{staticClass:"status",class:{success:n.status},on:{click:function(e){return t.toggleBlogStatus(n._id,n.status)}}},[t._v("\n              Draft\n            ")])]),t._v(" "),e("td",[e("div",{staticClass:"filter-box",on:{click:function(e){return t.prepareBlog(n)}}},[e("img",{staticClass:"filter-icon check action-icon",attrs:{src:"/images/edit-gray.svg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"filter-box",on:{click:function(e){return t.showConfirmation("Are you sure you want to delete this Banner",n._id)}}},[e("img",{staticClass:"filter-icon check action-icon",attrs:{src:"/images/delete-gray.svg",loading:"lazy",alt:""}})])])])})),0)])]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("div",{staticClass:"input-wrapper w-form"},[e("div",{staticClass:"input-form"},[e("div",{staticClass:"each-input"},[t._m(4),t._v(" "),e("h4",{staticClass:"select-display",on:{click:function(e){t.showBlogCategoryList=!t.showBlogCategoryList}}},[t._v("\n          "+t._s(t.category)+"\n        ")]),t._v(" "),t.showBlogCategoryList?e("ul",{staticClass:"filter-list",attrs:{role:"list"}},t._l(t.categories,(function(n,l){return e("li",{key:l,staticClass:"filter-items",on:{click:function(e){return t.setBlogCategory(n)}}},[e("div",[t._v(t._s(n))])])})),0):t._e(),t._v(" "),e("img",{staticClass:"filter-icon middle",attrs:{src:"/images/caret-down-gray.svg",loading:"lazy",alt:""},on:{click:function(e){t.showBlogCategoryList=!t.showBlogCategoryList}}})]),t._v(" "),e("div",{staticClass:"each-input"},[t._m(5),e("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"plan-input w-input",attrs:{type:"text",placeholder:"Enter Banner Title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"each-input"},[t._m(6),e("input",{directives:[{name:"model",rawName:"v-model",value:t.subtitle,expression:"subtitle"}],staticClass:"plan-input w-input",attrs:{type:"text"},domProps:{value:t.subtitle},on:{input:function(e){e.target.composing||(t.subtitle=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"each-input"},[t._m(7),e("input",{directives:[{name:"model",rawName:"v-model",value:t.author,expression:"author"}],staticClass:"plan-input w-input",attrs:{type:"text"},domProps:{value:t.author},on:{input:function(e){e.target.composing||(t.author=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"each-input"},[t._m(8),e("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],staticClass:"plan-input w-input",attrs:{type:"date"},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"each-input full"},[t._m(9),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"button-holder"},[e("label",{staticClass:"upload-btn banner",attrs:{for:"banner"}},[e("img",{staticClass:"upload-icon",attrs:{src:"/images/white-upload.svg",loading:"lazy",alt:""}}),t._v(" "),e("input",{staticClass:"file-input",attrs:{type:"file",id:"banner"},on:{change:t.setBanner}}),t._v(" "),e("div",[t._v("Upload Banner")])]),t._v(" "),e("input",{staticClass:"button w-button",attrs:{type:"button",value:"Add Banner"},on:{click:t.processBlog}}),e("input",{staticClass:"button w-button",attrs:{type:"submit",value:"Cancel","data-wait":"Please wait..."}})])])])],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"table-filters"},[e("div",{staticClass:"each-filter-option"},[e("div",{staticClass:"filter-page"},[t._v("Filter")]),t._v(" "),e("img",{staticClass:"filter-icon drop",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1f5d7700f683bb23f0908_triangle-bottom-arrow-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("h4",{staticClass:"filter-label"},[t._v("All Users")]),t._v(" "),e("ul",{staticClass:"filter-list hide",attrs:{role:"list"}},[e("li",{staticClass:"filter-items"},[e("div",[t._v("All Users")])]),t._v(" "),e("li",{staticClass:"filter-items"},[e("div",[t._v("Active")])]),t._v(" "),e("li",{staticClass:"filter-items"},[e("div",[t._v("Suspended")])]),t._v(" "),e("li",{staticClass:"filter-items"},[e("div",[t._v("Blocked")])])])]),t._v(" "),e("div",{staticClass:"each-filter-option"},[e("div",{staticClass:"filter-page"},[t._v("Sort")]),t._v(" "),e("h4",{staticClass:"filter-label"},[t._v("Name")]),t._v(" "),e("ul",{staticClass:"filter-list hide",attrs:{role:"list"}},[e("li",{staticClass:"filter-items"},[e("div",[t._v("Reg. Date")])]),t._v(" "),e("li",{staticClass:"filter-items"},[e("div",[t._v("Deposit")])]),t._v(" "),e("li",{staticClass:"filter-items"},[e("div",[t._v("Suspended")])]),t._v(" "),e("li",{staticClass:"filter-items"},[e("div",[t._v("Blocked")])])]),t._v(" "),e("img",{staticClass:"filter-icon drop",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1f5d7700f683bb23f0908_triangle-bottom-arrow-icon%201.svg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"each-filter-option"},[e("div",{staticClass:"filter-page"},[t._v("Results")]),t._v(" "),e("h4",{staticClass:"filter-label input"},[t._v("10")]),t._v(" "),e("div",{staticClass:"filter-box"},[e("img",{staticClass:"filter-icon check",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1f6007a954c77c293682c_check-mark-icon%201.svg",loading:"lazy",alt:""}})])])])},function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("td",[t._v("S/N")]),t._v(" "),e("td",[t._v("Banner")]),t._v(" "),e("td",[t._v("Category")]),t._v(" "),e("td",[t._v("Title")]),t._v(" "),e("td",[t._v("Subtitle")]),t._v(" "),e("td",[t._v("Author")]),t._v(" "),e("td",[t._v("Date")]),t._v(" "),e("td",[t._v("content")]),t._v(" "),e("td",[t._v("Status")]),t._v(" "),e("td",[t._v("Actions")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"table-label"},[e("div",[e("strong",{staticClass:"bold-text"},[t._v("Results")]),t._v(": 10\n      "),e("strong",{staticClass:"bold-text-2"},[t._v("Page")]),t._v(" 1 of 12\n    ")]),t._v(" "),e("ul",{staticClass:"min-table-pagination",attrs:{role:"list"}},[e("li",{staticClass:"pagination-item"},[e("img",{staticClass:"pagination-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1982bc1672608295369ae_arrow-thin-chevron-left-icon.svg",loading:"lazy",alt:""}})]),t._v(" "),e("li",{staticClass:"pagination-item"},[e("div",[t._v("1")])]),t._v(" "),e("li",{staticClass:"pagination-item active"},[e("div",[t._v("2")])]),t._v(" "),e("li",{staticClass:"pagination-item"},[e("div",[t._v("3")])]),t._v(" "),e("li",{staticClass:"pagination-item"},[e("img",{staticClass:"pagination-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1982b466e626df4567c6d_arrow-thin-chevron-right-icon.svg",loading:"lazy",alt:""}})])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"table-actions"},[e("div",{staticClass:"each-filter-option min"},[e("div",{staticClass:"filter-page"},[t._v("Delete")]),t._v(" "),e("div",{staticClass:"filter-box"},[e("img",{staticClass:"filter-icon check",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1da3b461fa0e7e3c7163c_trash-bin-icon%201.svg",loading:"lazy",alt:""}})])]),t._v(" "),e("div",{staticClass:"each-filter-option min"},[e("div",{staticClass:"filter-page"},[t._v("Bulk")]),t._v(" "),e("div",{staticClass:"filter-box"},[e("img",{staticClass:"filter-icon check",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1dbeaad117e09c9d6ba7c_select-all-icon%201.svg",loading:"lazy",alt:""}})])])])},function(){var t=this,e=t._self._c;return e("label",{staticClass:"input-label",attrs:{for:"name-3"}},[t._v("Blog Categories "),e("span",{staticClass:"important"},[t._v("*")])])},function(){var t=this,e=t._self._c;return e("label",{staticClass:"input-label",attrs:{for:"name-4"}},[t._v("Blog Title"),e("span",{staticClass:"important"},[t._v("*")])])},function(){var t=this,e=t._self._c;return e("label",{staticClass:"input-label",attrs:{for:"password-3"}},[t._v("Blog Subtitle"),e("span",{staticClass:"important"},[t._v("*")])])},function(){var t=this,e=t._self._c;return e("label",{staticClass:"input-label",attrs:{for:"password-3"}},[t._v("Blog Author"),e("span",{staticClass:"important"},[t._v("*")])])},function(){var t=this,e=t._self._c;return e("label",{staticClass:"input-label",attrs:{for:"password-3"}},[t._v("Blog Date"),e("span",{staticClass:"important"},[t._v("*")])])},function(){var t=this,e=t._self._c;return e("label",{staticClass:"input-label",attrs:{for:"name-4"}},[t._v("Blog content"),e("span",{staticClass:"important"},[t._v("*")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{AdminConfirmation:n(305).default})}}]);
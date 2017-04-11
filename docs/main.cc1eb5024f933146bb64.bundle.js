webpackJsonp([1,4],{417:function(t,e,n){"use strict";var o=n(0),i=n(608),r=n(154);n.d(e,"a",function(){return c});var a=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t,e){this.activatedRoute=t,this.router=e,this.menu=i.a.tree}return t.prototype.ngOnInit=function(){var t=this;this.activatedRoute.queryParams.subscribe(function(e){console.log(e);var n=e.section||"main";t.displaySectionByID(n)})},t.prototype.displaySectionByID=function(t){var e=this.getSectionInfoByID(t);this.router.navigate([],{queryParams:{section:t},relativeTo:this.activatedRoute}),this.displaySection(e.section,e.backSection,e.menuSection)},t.prototype.displaySection=function(t,e,n){this.currentSection=t.id,this.atRoot=!!n.root||t.root,this.sections=n.sections,this.title=n.title,this.menuSection=n,this.backSection=e,this.displayPage(t.path)},t.prototype.displayPage=function(t){var e=this,n=new XMLHttpRequest;n.open("GET","./assets/sections/"+t),n.send(),n.onload=function(){e.content=n.responseText}},t.prototype.goBack=function(){this.displaySectionByID(this.backSection.id)},t.prototype.getSectionInfoByID=function(t){var e,n,o=t.lastIndexOf("-");if(o===-1)return{section:this.menu,backSection:null,menuSection:this.menu};e=t.substr(0,o);var i,r=this.getSectionByID(t);if(r.sections)return i=this.getSectionByID(e),{section:r,backSection:i,menuSection:r};if((o=e.lastIndexOf("-"))!==-1){n=e,e=t.substr(0,o),i=this.getSectionByID(e);return{section:r,backSection:i,menuSection:this.getSectionByID(n,i.sections)}}return{section:r,backSection:this.menu,menuSection:this.menu}},t.prototype.getSectionByID=function(t,e){var n=null,o=e||this.menu.sections;return"main"===t?this.menu:(o.some(function(e){return t.indexOf(e.id)>-1&&(n=e,!0)}),n.id===t?n:this.getSectionByID(t,n.sections))},t=a([n.i(o.Component)({selector:"app-guide",template:n(703),styles:[n(675)]}),s("design:paramtypes",["function"==typeof(e=void 0!==r.c&&r.c)&&e||Object,"function"==typeof(c=void 0!==r.a&&r.a)&&c||Object])],t);var e,c}()},418:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o={type:[{label:"Monolithic",description:"A tutorial is generated automatically for you.It includes Wakanda Local as default datastore, Ionic 2 as default mobile technology, Angular 2 as default Web technology, and Local as default session handler."},{label:"Customized",description:"Allows you to cutomize the elements for your tutorial."}],datastores:[{id:1,value:"Wakanda Local",path:"db-local.html"},{id:2,value:"Wakanda Remote",path:"db-remote.html"},{id:3,value:"4D",path:"db-4d.html"},{id:4,value:"MYSQL",path:"db-mysql.html"},{id:5,value:"MSSQL",path:"db-mssql.html"},{id:6,value:"ODBC",path:"db-odbc.html"}],frontTechnology:[{id:1,value:"Angular 1",path:"angular1.html",checked:!1},{id:2,value:"Angular 4",path:"angular.html",checked:!0}],mobileTechnology:[{id:1,value:"Ionic 1",path:"ionic1.html",checked:!1},{id:2,value:"Ionic 2",path:"ionic2.html",checked:!0}],session:[{id:1,value:"Local",path:"session-local.html",checked:!0},{id:2,value:"JWT",path:"session-jwt.html",checked:!1},{id:3,value:"Redis",path:"session-redis.html",checked:!1},{id:4,value:"Custom",path:"session-custom.html",checked:!1}]}},419:function(t,e,n){"use strict";var o=n(0),i=n(370),r=n(611),a=n(414),s=n(10),c=n(18);n.d(e,"a",function(){return u});var l=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},d=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},p=[n.i(o.forwardRef)(function(){return r.a})],u=function(){function t(){}return t.forRoot=function(){return{ngModule:t,providers:[]}},t=l([n.i(o.NgModule)({imports:[s.CommonModule,c.FormsModule,a.a,i.b],declarations:[p],exports:[p,s.CommonModule,c.FormsModule,i.c,a.a]}),d("design:paramtypes",[])],t)}()},446:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=446},447:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),i=n(574),r=n(606);n(617).a.production&&n.i(o.enableProdMode)(),n.i(i.a)().bootstrapModule(r.a)},605:function(t,e,n){"use strict";var o=n(0);n.d(e,"a",function(){return a});var i=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t=i([n.i(o.Component)({selector:"app-root",template:n(701),styles:[n(673)]}),r("design:paramtypes",[])],t)}()},606:function(t,e,n){"use strict";var o=n(35),i=n(0),r=n(18),a=n(93),s=n(154),c=n(370),l=n(682),d=(n.n(l),n(686)),p=(n.n(d),n(605)),u=n(417),m=n(610),f=n(615),h=n(614),b=n(613),y=n(609),v=n(612),g=n(607),_=n(414),k=n(65);n.d(e,"a",function(){return w});var x=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},R=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};window.routing=s.a;var w=function(){function t(){}return t=x([n.i(i.NgModule)({declarations:[p.a,u.a,m.a,f.a,h.a,b.a,y.a,v.a,g.a],imports:[o.a,r.FormsModule,a.a,d.Ng2SelectModule,_.a.forRoot(),c.a.forRoot(),s.b.forRoot([{path:"guide",component:u.a},{path:"api-reference",component:m.a},{path:"tutorial",component:f.a},{path:"",redirectTo:"/guide",pathMatch:"prefix"}],{useHash:!0})],providers:[k.a],bootstrap:[p.a]}),R("design:paramtypes",[])],t)}()},607:function(t,e,n){"use strict";var o=n(0),i=n(65),r=n(419),a=n(154);n.d(e,"a",function(){return l});var s=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(t,e){void 0===t&&(t=new i.a([{useDebug:!1,useJit:!0}]).createCompiler()),this.compiler=t,this.container=e}return t.prototype.ngOnInit=function(){},t.prototype.ngOnChanges=function(){if(this.content){this.content="\n  \t<md-card style='box-shadow:none'>\n\t\t<md-card-content>\n\t\t\t"+this.content+"\n\t\t</md-card-content>\n\t</md-card>";var t=this.createNewComponent(this.content),e=this.createComponentModule(t),n=this.compiler.compileModuleAndAllComponentsSync(e),o=n.componentFactories.filter(function(t){return"dynamic-component"===t.selector})[0];this.container.clear(),this.container.createComponent(o)}},t.prototype.createNewComponent=function(t){return function(){function e(){}return s([n.i(o.Input)(),c("design:type",Object)],e.prototype,"entity",void 0),e=s([n.i(o.Component)({selector:"dynamic-component",template:t}),c("design:paramtypes",[])],e)}()},t.prototype.createComponentModule=function(t){return function(){function e(){}return e=s([n.i(o.NgModule)({imports:[r.a,a.b],declarations:[t]}),c("design:paramtypes",[])],e)}()},s([n.i(o.Input)(),c("design:type",Object)],t.prototype,"content",void 0),t=s([n.i(o.Component)({selector:"app-guide-content",template:n(702),styles:[n(674)]}),c("design:paramtypes",["function"==typeof(e=void 0!==o.Compiler&&o.Compiler)&&e||Object,"function"==typeof(l=void 0!==o.ViewContainerRef&&o.ViewContainerRef)&&l||Object])],t);var e,l}()},608:function(t,e,n){"use strict";e.a={tree:{id:"main",title:"Home",root:!0,path:"home.html",sections:[{id:"main-overview",title:"Concepts",path:"overview.html",sections:[{id:"main-overview-solution",title:"Solution",path:"overview/solution.html"},{id:"main-overview-project",title:"Project",path:"overview/project.html"},{id:"main-overview-bootstrap",title:"Backend - Bootstrap",path:"overview/bootstrap.html"},{id:"main-overview-modules",title:"Backend - Modules",path:"overview/modules.html"},{id:"main-overview-services",title:"Backend - Services",path:"overview/services.html"}]},{title:"Data Integration",path:"data.html",id:"main-data",sections:[{title:"Basics",path:"data/basics.html",id:"main-data-basics"},{title:"Client side",path:"data/client-side.html",id:"main-data-cs",sections:[{title:"Get started",id:"main-data-cs-instance",path:"data/client-side/javascript-client-instance.html"},{title:"Retrieve entities",id:"main-data-cs-retrieve",path:"data/client-side/javascript-client-retrieve-entities.html"},{title:"Handle entities",id:"main-data-cs-manipulate",path:"data/client-side/javascript-client-manipulate-entity.html"},{title:"Handle related entities",id:"main-data-cs-related",path:"data/client-side/javascript-client-related-entities.html"},{title:"Handle collections",id:"main-data-cs-helpers",path:"data/client-side/javascript-client-collection-helpers.html"},{title:"Images and Blobs",id:"main-data-cs-upload",path:"data/client-side/javascript-client-upload.html"},{title:"Server-side methods",id:"main-data-cs-servermethods",path:"data/client-side/javascript-client-server-methods.html"},{title:"User authentication",id:"main-data-cs-directorymethods",path:"data/client-side/javascript-client-directory-methods.html"}]},{title:"Server Side",path:"data/server-side.html",id:"main-data-ss"},{title:"Security",path:"data/security.html",id:"main-data-security"},{title:"Adding external data sources",path:"data/adding-data-sources.html",id:"main-data-external"}]},{title:"Authentication",path:"authentication.html",id:"main-auth",sections:[{title:"Default Mechanism",path:"authentication/default.html",id:"main-auth-default"},{title:"Custom Authentication",path:"authentication/custom.html",id:"main-auth-custom"},{title:"Custom Session Management",path:"authentication/custom-session-management.html",id:"main-auth-csm"}]},{id:"main-http",title:"HTTP",path:"http.html"},{id:"main-workers",title:"Workers",path:"threads.html",sections:[{title:"System Worker",id:"main-workers-system",path:"threads/system-worker.html"},{title:"Shared Worker",id:"main-workers-shared",path:"threads/shared-worker.html"},{title:"Node Worker",id:"main-workers-node",path:"threads/node-worker.html"}]},{id:"main-admin",title:"Administration",path:"administration.html"},{id:"main-misc",title:"Miscellaneous",path:"miscellaneous.html"},{id:"main-migrate1to2",title:"Migration from v1 to v2",path:"migration-from-v1-to-v2.html"}]}}},609:function(t,e,n){"use strict";var o=n(0);n.d(e,"a",function(){return a});var i=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t.prototype.transform=function(t,e){var n=[];for(var o in t)n.push({key:o,value:t[o]});return n},t=i([n.i(o.Pipe)({name:"keys"}),r("design:paramtypes",[])],t)}()},610:function(t,e,n){"use strict";var o=n(0);n.d(e,"a",function(){return a});var i=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t.prototype.ngOnInit=function(){},t=i([n.i(o.Component)({selector:"app-reference",template:n(704),styles:[n(676)]}),r("design:paramtypes",[])],t)}()},611:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__angular_core__=__webpack_require__(0);__webpack_require__.d(__webpack_exports__,"a",function(){return SnippetsComponent});var __decorate=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},__metadata=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},SnippetsComponent=function(){function SnippetsComponent(){this.contents={}}return SnippetsComponent.prototype.ngOnInit=function(){try{this._files=eval(this.files)}catch(t){}this._files.length&&(this.currentFilePath=this.path+this._files[0])},SnippetsComponent.prototype.handleChange=function(t){this.currentFilePath=this.path+this._files[t]},SnippetsComponent.prototype.getFilePath=function(t){return this.path+t},__decorate([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.Input)(),__metadata("design:type",Object)],SnippetsComponent.prototype,"files",void 0),__decorate([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.Input)(),__metadata("design:type",Object)],SnippetsComponent.prototype,"path",void 0),SnippetsComponent=__decorate([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.Component)({selector:"snippets",template:__webpack_require__(705),styles:[__webpack_require__(677)]}),__metadata("design:paramtypes",[])],SnippetsComponent)}()},612:function(t,e,n){"use strict";var o=n(0),i=n(419);n.d(e,"a",function(){return s});var r=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t,e){this.compiler=t,this.container=e}return t.prototype.ngOnChanges=function(){if(this.content){this.content="\n  \t<md-card style='box-shadow:none;padding-bottom:200px'>\n\t\t<md-card-content>\n\t\t\t"+this.content+"\n\t\t</md-card-content>\n\t</md-card>";var t=this.createNewComponent(this.content),e=this.createComponentModule(t),n=this.compiler.compileModuleAndAllComponentsSync(e),o=n.componentFactories.filter(function(t){return"dynamic-component"===t.selector})[0];this.container.clear(),this.container.createComponent(o)}},t.prototype.ngOnInit=function(){},t.prototype.createNewComponent=function(t){return function(){function e(){}return r([n.i(o.Input)(),a("design:type",Object)],e.prototype,"entity",void 0),e=r([n.i(o.Component)({selector:"dynamic-component",template:t}),a("design:paramtypes",[])],e)}()},t.prototype.createComponentModule=function(t){return function(){function e(){}return e=r([n.i(o.NgModule)({imports:[i.a],declarations:[t]}),a("design:paramtypes",[])],e)}()},r([n.i(o.Input)(),a("design:type",Object)],t.prototype,"content",void 0),t=r([n.i(o.Component)({selector:"app-tutorial-content",template:n(706),styles:[n(678)]}),a("design:paramtypes",["function"==typeof(e=void 0!==o.Compiler&&o.Compiler)&&e||Object,"function"==typeof(s=void 0!==o.ViewContainerRef&&o.ViewContainerRef)&&s||Object])],t);var e,s}()},613:function(t,e,n){"use strict";var o=n(0),i=n(418);n.d(e,"a",function(){return s});var r=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(){this.elements=i.a,this.datastores=this.elements.datastores,this.fronts=this.elements.frontTechnology,this.mobs=this.elements.mobileTechnology,this.sessions=this.elements.session,this.submitted=!1,this.types=this.elements.type}return t.prototype.ngOnInit=function(){this.initForm()},t.prototype.initForm=function(){this.tutorial={type:this.types[1],datastores:[],frontTechnology:this.fronts[1].value,mobileTechnology:this.mobs[1].value,session:this.sessions[0].value}},t.prototype.onSubmit=function(t){this.submitted=!0,this.getHtmlFile("intro.html")},t.prototype.back=function(){this.initForm(),this.submitted=!1,this.content=""},t.prototype.getHtmlFile=function(t){var e=this,n=new XMLHttpRequest;n.open("GET","./assets/sections/tutorial/"+t),n.send(),n.onload=function(){e.content=n.responseText}},t.prototype.getContent=function(t){var e;this.tuto=t;for(var n in this.elements)for(var o=this.elements[n],i=0;i<o.length;i++){var r=o[i];for(var a in r)r.hasOwnProperty(a)&&r[a]===t.value&&(e=r.path)}e&&this.getHtmlFile(e)},t=r([n.i(o.Component)({selector:"app-tutorial-detail-customized",template:n(707),styles:[n(679)]}),a("design:paramtypes",[])],t)}()},614:function(t,e,n){"use strict";var o=n(0),i=n(418);n.d(e,"a",function(){return s});var r=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(){this.elements=i.a,this.datastore=this.elements.datastores,this.fronts=this.elements.frontTechnology,this.mobs=this.elements.mobileTechnology,this.sessions=this.elements.session,this.submitted=!1,this.types=this.elements.type}return t.prototype.ngOnInit=function(){this.tutorial={type:this.types[0],datastores:this.datastore[0],frontTechnology:this.fronts[1],mobileTechnology:this.mobs[1],session:this.sessions[0]}},t.prototype.onSubmit=function(t){this.submitted=!0,this.getHtmlFile("intro.html")},t.prototype.back=function(){this.submitted=!1,this.content="",this.tuto=""},t.prototype.getContent=function(t){this.tuto=t.value,this.getHtmlFile(t.path)},t.prototype.getHtmlFile=function(t){var e=this,n=new XMLHttpRequest;n.open("GET","./assets/sections/tutorial/"+t),n.send(),n.onload=function(){e.content=n.responseText}},t=r([n.i(o.Component)({selector:"app-tutorial-detail-monolithic",template:n(708),styles:[n(680)]}),a("design:paramtypes",[])],t)}()},615:function(t,e,n){"use strict";var o=n(0),i=n(417),r=n(154),a=n(616);n.d(e,"a",function(){return d});var s=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},c=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},l=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},d=function(t){function e(e,n){t.call(this,e,n),this.menu=a.a.tree}return s(e,t),e=c([n.i(o.Component)({selector:"app-guide",template:n(709),styles:[n(681)]}),l("design:paramtypes",["function"==typeof(i=void 0!==r.c&&r.c)&&i||Object,"function"==typeof(d=void 0!==r.a&&r.a)&&d||Object])],e);var i,d}(i.a)},616:function(t,e,n){"use strict";e.a={tree:{id:"main",title:"Introduction",root:!0,path:"tutorial/intro.html",sections:[{id:"main-prerequesites",title:"1. Prerequesties",path:"tutorial/prerequesites.html"},{id:"main-routing",title:"2. Web App Routing",path:"tutorial/web-angular-routing.html"},{title:"3. Backend Authentication",id:"main-authlocal",path:"tutorial/auth-directory.html"},{title:"4. Web Login Page",id:"main-authangular",path:"tutorial/auth-web-angular.html"},{title:"5. Backend DB Integration",id:"main-dblocal",path:"tutorial/db-local.html"},{title:"6. Web Todos Interface",id:"main-todoangular",path:"tutorial/todo-web-angular.html"}]}}},617:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o={production:!0}},673:function(t,e,n){e=t.exports=n(33)(),e.push([t.i,".spacer{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}.mat-menu-item{border:none;font-size:15px;cursor:pointer;margin-right:20px}.active{border-bottom:4px solid teal;height:64px}.custom-toolbar{background-color:transparent;border-bottom:1px solid #d3d3d3;box-shadow:0 4px 2px -2px #d3d3d3;background-color:#fafafa}.logo{height:40px}",""]),t.exports=t.exports.toString()},674:function(t,e,n){e=t.exports=n(33)(),e.push([t.i,"",""]),t.exports=t.exports.toString()},675:function(t,e,n){e=t.exports=n(33)(),e.push([t.i,".menu-title{font-weight:700;color:#000;font-size:20px}.back-separator{color:#f9b611;padding-left:3px;font-size:xx-large}.back-button{color:#f9b611}.back-button,.back-button-hidden{margin-left:15px;font-size:10px}",""]),t.exports=t.exports.toString()},676:function(t,e,n){e=t.exports=n(33)(),e.push([t.i,"",""]),t.exports=t.exports.toString()},677:function(t,e,n){e=t.exports=n(33)(),e.push([t.i,"",""]),t.exports=t.exports.toString()},678:function(t,e,n){e=t.exports=n(33)(),e.push([t.i,"",""]),t.exports=t.exports.toString()},679:function(t,e,n){e=t.exports=n(33)(),e.push([t.i,".mat-card{width:50%;margin-left:20%;text-align:center}.option-element{margin:0 10px}.ng2-dropdown-container{min-width:350px!important;width:400px!important}.back-separator{padding-left:3px}.back-button,.back-separator{color:#f9b611;font-size:medium}",""]),t.exports=t.exports.toString()},680:function(t,e,n){e=t.exports=n(33)(),e.push([t.i,".mat-card{width:55%;margin-left:20%;text-align:center}.option-element{margin:30px}.button-row{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}.back-separator{padding-left:3px}.back-button,.back-separator{color:#f9b611;font-size:medium}",""]),t.exports=t.exports.toString()},681:function(t,e,n){e=t.exports=n(33)(),e.push([t.i,".menu-title{font-weight:700;color:#000;font-size:20px}.back-separator{color:#f9b611;padding-left:3px;font-size:xx-large}.back-button{color:#f9b611}.back-button,.back-button-hidden{margin-left:15px;font-size:10px}",""]),t.exports=t.exports.toString()},701:function(t,e){t.exports='<md-toolbar class="custom-toolbar">\r\n    <span>\r\n   \t\t<a href="https://wakanda.github.io">\r\n   \t\t\t<img src="./assets/logo-wakanda.png" class="logo">\r\n\t\t</a>\r\n   \t</span>\r\n    <span class="spacer"></span>\r\n    <button md-menu-item routerLink="/guide" routerLinkActive="active">\r\n        <span>Guide</span>\r\n    </button>\r\n    <a href="https://wakanda.github.io/api-reference/">\r\n    <button md-menu-item>\r\n        <span>API Reference</span>\r\n    </button>\r\n    </a>\r\n    <button md-menu-item routerLink="/tutorial" routerLinkActive="active">\r\n        <span>Tutorial</span>\r\n    </button>\r\n</md-toolbar>\r\n<router-outlet></router-outlet>'},702:function(t,e){t.exports=""},703:function(t,e){t.exports='<md-sidenav-container class="container">\r\n    <md-sidenav #sidenav mode="side" opened="true">\r\n    \t<div>\r\n     \t\t<span *ngIf="atRoot" class="back-button-hidden"></span>\r\n     \t\t<span *ngIf="!atRoot" (click)="goBack()" class="back-button pointer">&lt; GO UP</span>\r\n\t\t</div>\r\n\t\t<div>\r\n     \t\t<span class="selected-content menu-title pointer" (click)="displaySectionByID(menuSection.id)" [innerText]="title"></span>\r\n        </div>\r\n        <div *ngFor="let section of sections" class="mt30">\r\n            <span (click)="displaySectionByID(section.id)" class="pointer" [class.selected-elem]="section.id === currentSection"> \r\n         \t\t<span class="selected-content">{{section.title}}</span>\r\n            </span>\r\n        </div>\r\n    </md-sidenav>\r\n    <div>\r\n        <app-guide-content [content]="content"></app-guide-content>\r\n    </div>\r\n</md-sidenav-container>'},704:function(t,e){t.exports="<p>\r\n  reference works!\r\n</p>\r\n"},705:function(t,e){t.exports='<!--<div md-mini-fab *ngFor="let file of _files">\r\n\t{{file}}\r\n</div>\r\n<markdown-to-html [src]="currentFilePath"></markdown-to-html>-->\r\n<md-tab-group (selectedIndexChange)="handleChange($event)">\r\n\t<md-tab  *ngFor="let file of _files" label="{{file}}">\r\n\t\t<markdown-to-html [src]="currentFilePath"></markdown-to-html>\r\n\t</md-tab>\r\n</md-tab-group>'},706:function(t,e){t.exports=""},707:function(t,e){t.exports='\t<md-sidenav-container class="container">\r\n\t  <md-sidenav #sidenav  mode="side" opened="true" [hidden] ="!submitted">\r\n\t <!--<div (click)="back()" class="pointer mt30">\r\n        <span  class="back-button">&lt;</span>\r\n      \t<span  class="back-separator" >|</span>\r\n        <span class="back-separator"> Back To {{tutorial.type.label}} Form</span>\r\n    </div>-->\r\n\t\t\t\t\r\n\t\t<div *ngFor="let obj of tutoForm.value | keys" class="mt30">\r\n\t \t\t\r\n\t \t\t<div *ngIf="obj.key === \'datastores\'">\r\n\t \t\t\t<div *ngFor="let ds of obj.value ">\r\n\t \t\t\t\t <div (click)="getContent(ds)" class="mt30 pointer"  [class.selected-elem]="ds === tuto">\r\n\t \t\t\t\t \t<span class="selected-content">\t{{ds.value}} </span>\r\n\t \t\t\t\t </div>\r\n\t \t\t\t</div>\r\n\t \t\t</div>\r\n\t   \t\t\r\n\t   \t\t<span class="pointer" *ngIf=" obj.key !== \'datastores\'"  (click)="getContent(obj)" [class.selected-elem]="obj === tuto">\r\n\t   \t\t\t\t<span class="selected-content">{{obj.value}}</span>\r\n\t   \t\t</span>\r\n\t \r\n\t   </div>\r\n\t </md-sidenav>\r\n \t\r\n \r\n    <app-tutorial-content [content]="content"></app-tutorial-content>\r\n\r\n\t<div class="mt30" [hidden]="submitted">\r\n\t  <form  #tutoForm="ngForm">\r\n\t\t<md-card>\r\n\t\t  <md-card-content>\r\n\t\t  \r\n\t\t    <h3>Please select your Datastore(s)</h3>\r\n\t\t   \r\n\t\t    <div style="margin-left:40%">\r\n\t\t\t\t <ng2-select [placeholder]="\'Datastores ... \'" \r\n\t\t    \t    [(ngModel)]="tutorial.datastores"\r\n\t\t    \t     [multiple]="true"\r\n\t\t    \t     [displayBy]="\'value\'"\r\n\t\t    \t      name="datastores"\r\n\t\t    \t     [options]="datastores">\r\n\t\t    \t \r\n\t\t    \t </ng2-select>\t\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\t\r\n\t    \r\n\r\n\t\t\t  <div *ngIf="tutorial.datastores.length" style="margin-left:20px">\r\n\t\t            <span> <b>You chose : </b></span>\r\n\t\t            <span *ngFor="let option of tutorial.datastores" class="option-element">\r\n\t\t                {{option.value}}\r\n\t\t            </span>\r\n\t\t        </div>\r\n\t\t  </md-card-content>\r\n\t\t</md-card>\r\n\t\t\r\n\t\t<md-card>\r\n\t\t  <md-card-content>\r\n\t\t    <h3>Please select your Mobile Technology</h3>\r\n\t\t\t\r\n\t\t\t\t <md-radio-group class="content-section" [(ngModel)]="tutorial.mobileTechnology" name="mobileTechnology" >\r\n\t\t         <md-radio-button   *ngFor="let mob of mobs" class="option-element" [value]="mob.value" >{{mob.value}}</md-radio-button>\r\n\t\t        </md-radio-group>\r\n\t\t  </md-card-content> \r\n\t\t</md-card>\r\n\t\t\r\n\t\t<md-card>\r\n\t\t  <md-card-content>\r\n\t\t    <h3>Please select your Web Technology</h3>\r\n\t\t\r\n\t\t    <md-radio-group  class="content-section" [(ngModel)]="tutorial.frontTechnology" name="frontTechnology" >\r\n\t\t      <md-radio-button  *ngFor="let fr of fronts" [value]="fr.value" class="option-element">{{fr.value}}</md-radio-button>\r\n\t\t    </md-radio-group >\r\n\t\t\r\n\t\t  </md-card-content>\r\n\t\t</md-card>\r\n\t\t\r\n\t\t<md-card>\r\n\t\t  <md-card-content>\r\n\t\t    <h3>Please select a session handler</h3>\r\n\t\t\r\n\t\t     <md-radio-group  class="content-section" [(ngModel)]="tutorial.session" name="session" >\r\n\t\t      <md-radio-button  *ngFor="let session of sessions" [value]="session.value" class="option-element">{{session.value}}</md-radio-button>\r\n\t\t    </md-radio-group >\r\n\t\t\r\n\t\t  </md-card-content>\r\n\t\t</md-card>\r\n\t\t\r\n\t\t<md-card>\r\n\t\t<md-card-content>\r\n\t\t \r\n\t\t    <section class="content-section">\r\n\t\t    <button   md-raised-button color="primary" type="submit" (click)="onSubmit(tutoForm.value)">Go !</button>\r\n\t\t    </section>\r\n\t\t\r\n\t\t  </md-card-content>\r\n\t\t\r\n\t\t</md-card>\r\n\t  </form>\r\n</div>\r\n</md-sidenav-container>  '},708:function(t,e){t.exports='<md-sidenav-container class="container">\r\n    <md-sidenav #sidenav mode="side" opened="true" [hidden]="!submitted">\r\n\t\t<!--<div (click)="back()" class="pointer mt30">\r\n        <span  class="back-button">&lt;</span>\r\n     \t<span  class="back-separator" >|</span>\r\n        <span class="back-separator"> Back To {{tutorial.type.label}} Form</span>\r\n        </div>-->\r\n        <div class="mt30"><span style="text-font:bold;margin-left:14px;color:black">Menu</span></div>\r\n        <div *ngFor="let obj of tutoForm.value | keys" class="mt30"> \r\n            <span (click)="getContent(obj.value)"  class="pointer" [class.selected-elem]="obj.value.value === tuto">\r\n         \t<span class="selected-content">{{obj.value.value}}</span>\r\n            </span>\r\n        </div>\r\n\r\n    </md-sidenav>\r\n\r\n    <div>\r\n\r\n       \r\n        <app-tutorial-content [content]="content"></app-tutorial-content>\r\n\r\n        <div class="mt30" [hidden]="submitted">\r\n\r\n            <md-card>\r\n                <md-card-content>\r\n\r\n                    <h3> A Preconfigured Tutorial Is Set For You : </h3>\r\n                    <p class="description">{{tutorial.type.description}}</p>\r\n                    <div class="button-row">\r\n                          <p class="option-element"><button md-mini-fab><md-icon color="primary">check</md-icon></button> {{tutorial.session.value}} </p>\r\n                        <p class="option-element"><button md-mini-fab><md-icon color="primary">check</md-icon></button> {{tutorial.datastores.value}}</p>\r\n                        <p class="option-element"><button md-mini-fab><md-icon color="primary">check</md-icon></button> {{tutorial.frontTechnology.value}} </p>\r\n                        <p class="option-element"><button md-mini-fab><md-icon color="primary">check</md-icon></button> {{tutorial.mobileTechnology.value}} </p>\r\n                      \r\n                    </div>\r\n\r\n                    <form #tutoForm="ngForm">\r\n                        <input type="hidden" name="session" [ngModel]="tutorial.session">\r\n                        <input type="hidden" name="datastores" [ngModel]="tutorial.datastores">\r\n                        <input type="hidden" name="front" [ngModel]="tutorial.frontTechnology">\r\n                        <input type="hidden" name="mobile" [ngModel]="tutorial.mobileTechnology">\r\n                       \r\n                       <button md-raised-button color="primary" type="submit" (click)="onSubmit(tutoForm.value)">Go !</button>\r\n                    </form>\r\n\r\n                </md-card-content>\r\n            </md-card>\r\n        </div>\r\n    </div>\r\n</md-sidenav-container>'},709:function(t,e){t.exports='<!--<md-tab-group>\r\n  <md-tab label="{{this.types[0].label}}">\r\n\t <app-tutorial-detail-monolithic></app-tutorial-detail-monolithic>\r\n  </md-tab>\r\n \r\n  <md-tab label="{{this.types[1].label}}">\r\n\t<app-tutorial-detail-customized></app-tutorial-detail-customized>\r\n  </md-tab>\r\n</md-tab-group>-->\r\n\r\n<md-sidenav-container class="container">\r\n    <md-sidenav #sidenav mode="side" opened="true">\r\n    \t<div>\r\n     \t\t<span *ngIf="atRoot" class="back-button-hidden"></span>\r\n     \t\t<span *ngIf="!atRoot" (click)="goBack()" class="back-button pointer">&lt; GO UP</span>\r\n\t\t</div>\r\n\t\t<div>\r\n     \t\t<span class="selected-content menu-title pointer" (click)="displaySectionByID(menuSection.id)" [innerText]="title"></span>\r\n        </div>\r\n        <div *ngFor="let section of sections" class="mt30">\r\n            <span (click)="displaySectionByID(section.id)" class="pointer" [class.selected-elem]="section.id === currentSection"> \r\n         \t\t<span class="selected-content">{{section.title}}</span>\r\n            </span>\r\n        </div>\r\n    </md-sidenav>\r\n    <div>\r\n        <app-guide-content [content]="content"></app-guide-content>\r\n    </div>\r\n</md-sidenav-container>'},755:function(t,e,n){t.exports=n(447)}},[755]);
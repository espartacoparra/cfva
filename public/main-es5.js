function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet (activate)=\"onActivate($event)\"></router-outlet>\n\n<ngx-spinner></ngx-spinner>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdminAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"dashboard-main-wrapper\">\n    <!-- ============================================================== -->\n    <!-- navbar -->\n    <!-- ============================================================== -->\n    <app-navbaradmin></app-navbaradmin>\n    <!-- ============================================================== -->\n    <!-- end navbar -->\n    <!-- ============================================================== -->\n    <!-- ============================================================== -->\n    <!-- left sidebar -->\n    <!-- ============================================================== -->\n    <app-siderbaradmin></app-siderbaradmin>\n\n    <router-outlet (activate)=\"onActivate($event)\"></router-outlet>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/category/category.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/category/category.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdminCategoryCategoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- ============================================================== -->\n<!-- wrapper  -->\n<!-- ============================================================== -->\n<div class=\"dashboard-wrapper\">\n    <div class=\"dashboard-influence\">\n        <div class=\"container-fluid dashboard-content\">\n            <!-- ============================================================== -->\n            <!-- pageheader  -->\n            <!-- ============================================================== -->\n            <div class=\"row\">\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\n                    <div class=\"page-header\">\n                        <h3 class=\"mb-2\">Categorias </h3>\n                        <p class=\"pageheader-text\">Proin placerat ante duiullam scelerisque a velit ac porta, fusce\n                            sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>\n                        <div class=\"page-breadcrumb\">\n                            <nav aria-label=\"breadcrumb\">\n                                <ol class=\"breadcrumb\">\n                                    <li class=\"breadcrumb-item\"><a href=\"#\" class=\"breadcrumb-link\">Dashboard</a>\n                                    </li>\n                                    <li class=\"breadcrumb-item active\" aria-current=\"page\">Influencer Dashboard\n                                        Template</li>\n                                </ol>\n                            </nav>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- ============================================================== -->\n            <!-- end pageheader  -->\n            <!-- ============================================================== -->\n            <!-- ============================================================== -->\n            <!-- content  -->\n            <!-- ============================================================== -->\n\n            <!-- ============================================================== -->\n            <!-- widgets   -->\n            <!-- ============================================================== -->\n            <div class=\"row\">\n                <!-- ============================================================== -->\n                <!-- four widgets   -->\n                <!-- ============================================================== -->\n                <!-- ============================================================== -->\n                <!-- total views   -->\n                <!-- ============================================================== -->\n                <div class=\"col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <div class=\"d-inline-block\">\n                                <h5 class=\"text-muted\">Total Views</h5>\n                                <h2 class=\"mb-0\"> 10,28,056</h2>\n                            </div>\n                            <div class=\"float-right icon-circle-medium  icon-box-lg  bg-info-light mt-1\">\n                                <i class=\"fa fa-eye fa-fw fa-sm text-info\"></i>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- ============================================================== -->\n                <!-- end total views   -->\n                <!-- ============================================================== -->\n                <!-- ============================================================== -->\n                <!-- total followers   -->\n                <!-- ============================================================== -->\n                <div class=\"col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <div class=\"d-inline-block\">\n                                <h5 class=\"text-muted\">Total Followers</h5>\n                                <h2 class=\"mb-0\"> 24,763</h2>\n                            </div>\n                            <div class=\"float-right icon-circle-medium  icon-box-lg  bg-primary-light mt-1\">\n                                <i class=\"fa fa-user fa-fw fa-sm text-primary\"></i>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- ============================================================== -->\n                <!-- end total followers   -->\n                <!-- ============================================================== -->\n                <!-- ============================================================== -->\n                <!-- partnerships   -->\n                <!-- ============================================================== -->\n                <div class=\"col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <div class=\"d-inline-block\">\n                                <h5 class=\"text-muted\">Partnerships</h5>\n                                <h2 class=\"mb-0\">14</h2>\n                            </div>\n                            <div class=\"float-right icon-circle-medium  icon-box-lg  bg-secondary-light mt-1\">\n                                <i class=\"fa fa-handshake fa-fw fa-sm text-secondary\"></i>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- ============================================================== -->\n                <!-- end partnerships   -->\n                <!-- ============================================================== -->\n                <!-- ============================================================== -->\n                <!-- total earned   -->\n                <!-- ============================================================== -->\n                <div class=\"col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <div class=\"d-inline-block\">\n                                <h5 class=\"text-muted\">Total Earned</h5>\n                                <h2 class=\"mb-0\"> $149.00</h2>\n                            </div>\n                            <div class=\"float-right icon-circle-medium  icon-box-lg  bg-brand-light mt-1\">\n                                <i class=\"fa fa-money-bill-alt fa-fw fa-sm text-brand\"></i>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- ============================================================== -->\n                <!-- end total earned   -->\n                <!-- ============================================================== -->\n            </div>\n            <!-- ============================================================== -->\n            <!-- end widgets   -->\n            <!-- ============================================================== -->\n\n            <div class=\"row\">\n                <!-- ============================================================== -->\n                <!-- campaign activities   -->\n                <!-- ============================================================== -->\n                <div class=\"col-lg-12\">\n                    <div class=\"section-block\">\n                        <h3 class=\"section-title\">Categorias</h3>\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"open(create,'create','')\">Registrar\n                            una\n                            Categoria</button>\n                    </div>\n                    <div class=\"card\">\n                        <div class=\"campaign-table table-responsive\">\n                            <table class=\"table\">\n                                <thead>\n                                    <tr class=\"border-0\">\n                                        <th class=\"border-0\">Id</th>\n                                        <th class=\"border-0\">Nombre</th>\n                                        <th class=\"border-0\">Operaciones</th>\n\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let category of categories\">\n                                        <td>{{category.id}}</td>\n\n                                        <td>{{category.category}}</td>\n\n\n                                        <td>\n                                            <button type=\"button\" name=\"\" id=\"\" class=\"btn btn-success mr-1\"\n                                                (click)=\"open(update,'update',category)\">Editar</button>\n                                            <button type=\"button\" name=\"\" id=\"\" class=\"btn btn-danger\"\n                                                (click)=\"deleteProduct(category)\">Eliminar</button>\n                                        </td>\n                                    </tr>\n\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n                <!-- ============================================================== -->\n                <!-- end campaign activities   -->\n                <!-- ============================================================== -->\n            </div>\n            <!-- ============================================================== -->\n            <!-- recommended campaigns   -->\n            <!-- ============================================================== -->\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <div class=\"section-block\">\n                        <h3 class=\"section-title\">Recommended Campaigns</h3>\n                    </div>\n                </div>\n                <div class=\"col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12\">\n                    <div class=\"card campaign-card text-center\">\n                        <div class=\"card-body\">\n                            <div class=\"campaign-img\"><img src=\"assets/images/dribbble.png\" alt=\"user\"\n                                    class=\"user-avatar-xl\"></div>\n                            <div class=\"campaign-info\">\n                                <h3 class=\"mb-1\">Campaigns Name</h3>\n                                <p class=\"mb-3\">Vestibulum porttitor laoreet faucibus.</p>\n                                <p class=\"mb-1\">Min, Views:<span class=\"text-dark font-medium ml-2\">2,50,000</span>\n                                </p>\n                                <p>Payout: <span class=\"text-dark font-medium ml-2\">$22</span></p>\n                                <a href=\"#\"><i class=\"fab fa-twitter-square fa-sm twitter-color\"></i> </a><a href=\"#\"><i\n                                        class=\"fab fa-snapchat-square fa-sm snapchat-color\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12\">\n                    <div class=\"card campaign-card text-center\">\n                        <div class=\"card-body\">\n                            <div class=\"campaign-img\"><img src=\"assets/images/github.png\" alt=\"user\"\n                                    class=\" user-avatar-xl\"></div>\n                            <div class=\"campaign-info\">\n                                <h3 class=\"mb-1\">Campaigns Name</h3>\n                                <p class=\"mb-3\">Lorem ipsum dolor sit ament</p>\n                                <p class=\"mb-1\">Min, Views:<span class=\"text-dark font-medium ml-2\">1,00,000</span>\n                                </p>\n                                <p>Payout: <span class=\"text-dark font-medium ml-2\">$28</span></p>\n                                <a href=\"#\"><i class=\"fab fa-instagram fa-sm instagram-color\"></i> </a><a href=\"#\"><i\n                                        class=\"fab fa-facebook-square fa-sm facebook-color\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12\">\n                    <div class=\"card campaign-card text-center\">\n                        <div class=\"card-body\">\n                            <div class=\"campaign-img\"><img src=\"assets/images/slack.png\" alt=\"user\"\n                                    class=\"user-avatar-xl\"></div>\n                            <div class=\"campaign-info\">\n                                <h3 class=\"mb-1\">Campaigns Name</h3>\n                                <p class=\"mb-3\">Maecenas mattis tempor libero pretium.</p>\n                                <p class=\"mb-1\">Min, Views:<span class=\"text-dark font-medium ml-2\">3,80,000</span>\n                                </p>\n                                <p>Payout: <span class=\"text-dark font-medium ml-2\">$36</span></p>\n                                <a href=\"#\"><i class=\"fab fa-facebook-square fa-sm facebook-color\"></i> </a><a\n                                    href=\"#\"><i class=\"fab fa-snapchat-square fa-sm snapchat-color\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12\">\n                    <div class=\"card campaign-card text-center\">\n                        <div class=\"card-body\">\n                            <div class=\"campaign-img\"><img src=\"assets/images/mail_chimp.png\" alt=\"user\"\n                                    class=\"user-avatar-xl\"></div>\n                            <div class=\"campaign-info\">\n                                <h3 class=\"mb-1\">Campaigns Name</h3>\n                                <p class=\"mb-3\">Proin vitae lacinia leo</p>\n                                <p class=\"mb-1\">Min, Views:<span class=\"text-dark font-medium ml-2\">4,50,000</span>\n                                </p>\n                                <p>Payout: <span class=\"text-dark font-medium ml-2\">$57</span></p>\n                                <a href=\"#\"><i class=\"fab fa-twitter-square fa-sm twitter-color\"></i> </a><a href=\"#\"><i\n                                        class=\"fab fa-snapchat-square fa-sm snapchat-color\"></i></a>\n                                <a href=\"#\"><i class=\"fab fa-facebook-square fa-sm facebook-color\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- ============================================================== -->\n            <!-- end recommended campaigns   -->\n            <!-- ============================================================== -->\n            <!-- ============================================================== -->\n            <!-- end content  -->\n            <!-- ============================================================== -->\n        </div>\n    </div>\n    <!-- ============================================================== -->\n    <!-- footer -->\n    <!-- ============================================================== -->\n    <app-footeradmin></app-footeradmin>\n    <!-- ============================================================== -->\n    <!-- end footer -->\n    <!-- ============================================================== -->\n</div>\n<!-- ============================================================== -->\n<!-- end wrapper  -->\n\n<!-- ============================================================== -->\n<!-- end main wrapper  -->\n<!-- ============================================================== -->\n\n\n<!-- ============================================================== -->\n<!-- Modals  -->\n<!-- ============================================================== -->\n<ng-template #create let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Regitrar Categoria</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <form [formGroup]=\"formCreateCategory\">\n            <div class=\"form-group\">\n                <label for=\"\">Nombre</label>\n                <input type=\"text\" name=\"\" formControlName=\"category\" id=\"\" class=\"form-control\" placeholder=\"\"\n                    aria-describedby=\"helpId\">\n                <small id=\"helpId\" class=\"text-muted\">Help text</small>\n            </div>\n        </form>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"submit\" [disabled]=\"formCreateCategory.invalid\" class=\"btn btn-outline-dark\"\n            (click)=\"modal.close('Save click')\">Save</button>\n    </div>\n</ng-template>\n\n<ng-template #update let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Editar Categoria</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <form [formGroup]=\"formUpdateCategory\">\n            <div class=\"form-group\">\n                <label for=\"\">Nombre</label>\n                <input type=\"text\" name=\"\" formControlName=\"category\" id=\"\" class=\"form-control\" placeholder=\"\"\n                    aria-describedby=\"helpId\">\n                <small id=\"helpId\" class=\"text-muted\">Help text</small>\n            </div>\n        </form>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"submit\" [disabled]=\"formUpdateCategory.invalid\" class=\"btn btn-outline-dark\"\n            (click)=\"modal.close('Save click')\">Save</button>\n    </div>\n</ng-template>\n\n\n<!-- ============================================================== -->\n<!-- end Modals -->\n<!-- ============================================================== -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/dashboard/dashboard.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/dashboard/dashboard.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdminDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- ============================================================== -->\n<div class=\"dashboard-wrapper\">\n    <div class=\"dashboard-influence\">\n        <div class=\"container-fluid dashboard-content\">\n            <!-- ============================================================== -->\n            <!-- pageheader  -->\n            <!-- ============================================================== -->\n            <div class=\"row\">\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\n                    <div class=\"page-header\">\n                        <h3 class=\"mb-2\">Infulencer Dashboard Template </h3>\n                        <p class=\"pageheader-text\">Proin placerat ante duiullam scelerisque a velit ac porta, fusce\n                            sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>\n\n                    </div>\n                </div>\n            </div>\n            <!-- ============================================================== -->\n            <!-- end pageheader  -->\n            <!-- ============================================================== -->\n            <!-- ============================================================== -->\n            <!-- content  -->\n            <!-- ============================================================== -->\n            <!-- ============================================================== -->\n            <!-- influencer profile  -->\n            <!-- ============================================================== -->\n            <div class=\"row\">\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\n                    <div class=\"card influencer-profile-data\">\n                        <div class=\"card-body\">\n                            <div class=\"row\">\n                                <div class=\"col-xl-2 col-lg-4 col-md-4 col-sm-4 col-12\">\n                                    <div class=\"text-center\">\n                                        <img src=\"assets/images/avatar-1.jpg\" alt=\"User Avatar\"\n                                            class=\"rounded-circle user-avatar-xxl\">\n                                    </div>\n                                </div>\n                                <div class=\"col-xl-10 col-lg-8 col-md-8 col-sm-8 col-12\">\n                                    <div class=\"user-avatar-info\">\n                                        <div class=\"m-b-20\">\n                                            <div class=\"user-avatar-name\">\n                                                <h2 class=\"mb-1\">{{userData.name}} {{userData.lastname}}</h2>\n                                            </div>\n                                            <div class=\"rating-star  d-inline-block\">\n                                                <i class=\"fa fa-fw fa-star\"></i>\n                                                <i class=\"fa fa-fw fa-star\"></i>\n                                                <i class=\"fa fa-fw fa-star\"></i>\n                                                <i class=\"fa fa-fw fa-star\"></i>\n                                                <i class=\"fa fa-fw fa-star\"></i>\n                                                <p class=\"d-inline-block text-dark\">14 Reviews </p>\n                                            </div>\n                                        </div>\n                                        <!--  <div class=\"float-right\"><a href=\"#\" class=\"user-avatar-email text-secondary\">www.henrybarbara.com</a></div> -->\n                                        <div class=\"user-avatar-address\">\n                                            <p class=\"border-bottom pb-3\">\n                                                <span class=\"d-xl-inline-block d-block mb-2\">Correo:\n                                                    {{userData.email}}</span>\n                                                <span class=\"mb-2 ml-xl-4 d-xl-inline-block d-block\">Cedula:\n                                                    {{userData.cedula}}</span>\n                                                <span class=\" mb-2 d-xl-inline-block d-block ml-xl-4\">Tipo de Usuario:\n                                                    {{userData.type}}\n                                                </span>\n                                                <span class=\" mb-2 d-xl-inline-block d-block ml-xl-4\">29 Year Old\n                                                </span>\n                                            </p>\n                                            <div class=\"mt-3\">\n                                                <a href=\"#\" class=\"badge badge-light mr-1\">Fitness</a> <a href=\"#\"\n                                                    class=\"badge badge-light mr-1\">Life Style</a> <a href=\"#\"\n                                                    class=\"badge badge-light\">Gym</a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"border-top user-social-box\">\n                            <div class=\"user-social-media d-xl-inline-block\"><span class=\"mr-2 twitter-color\"> <i\n                                        class=\"fab fa-twitter-square\"></i></span><span>13,291</span></div>\n                            <div class=\"user-social-media d-xl-inline-block\"><span class=\"mr-2  pinterest-color\"> <i\n                                        class=\"fab fa-pinterest-square\"></i></span><span>84,019</span></div>\n                            <div class=\"user-social-media d-xl-inline-block\"><span class=\"mr-2 instagram-color\"> <i\n                                        class=\"fab fa-instagram\"></i></span><span>12,300</span></div>\n                            <div class=\"user-social-media d-xl-inline-block\"><span class=\"mr-2  facebook-color\"> <i\n                                        class=\"fab fa-facebook-square \"></i></span><span>92,920</span></div>\n                            <div class=\"user-social-media d-xl-inline-block \"><span class=\"mr-2 medium-color\"> <i\n                                        class=\"fab fa-medium\"></i></span><span>291</span></div>\n                            <div class=\"user-social-media d-xl-inline-block\"><span class=\"mr-2 youtube-color\"> <i\n                                        class=\"fab fa-youtube\"></i></span><span>1291</span></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- ============================================================== -->\n            <!-- end influencer profile  -->\n            <!-- ============================================================== -->\n            <!-- ============================================================== -->\n            <!-- widgets   -->\n            <!-- ============================================================== -->\n            <div class=\"row\">\n                <!-- ============================================================== -->\n                <!-- four widgets   -->\n                <!-- ============================================================== -->\n                <!-- ============================================================== -->\n                <!-- total views   -->\n                <!-- ============================================================== -->\n                <div class=\"col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <div class=\"d-inline-block\">\n                                <h5 class=\"text-muted\">Productos Registrados</h5>\n                                <h2 class=\"mb-0\"> 10,28,056</h2>\n                            </div>\n                            <div class=\"float-right icon-circle-medium  icon-box-lg  bg-info-light mt-1\">\n                                <i class=\"fa fa-eye fa-fw fa-sm text-info\"></i>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- ============================================================== -->\n                <!-- end total views   -->\n                <!-- ============================================================== -->\n                <!-- ============================================================== -->\n                <!-- total followers   -->\n                <!-- ============================================================== -->\n                <div class=\"col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <div class=\"d-inline-block\">\n                                <h5 class=\"text-muted\">Total Followers</h5>\n                                <h2 class=\"mb-0\"> 24,763</h2>\n                            </div>\n                            <div class=\"float-right icon-circle-medium  icon-box-lg  bg-primary-light mt-1\">\n                                <i class=\"fa fa-user fa-fw fa-sm text-primary\"></i>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- ============================================================== -->\n                <!-- end total followers   -->\n                <!-- ============================================================== -->\n                <!-- ============================================================== -->\n                <!-- partnerships   -->\n                <!-- ============================================================== -->\n                <div class=\"col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <div class=\"d-inline-block\">\n                                <h5 class=\"text-muted\">Partnerships</h5>\n                                <h2 class=\"mb-0\">14</h2>\n                            </div>\n                            <div class=\"float-right icon-circle-medium  icon-box-lg  bg-secondary-light mt-1\">\n                                <i class=\"fa fa-handshake fa-fw fa-sm text-secondary\"></i>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- ============================================================== -->\n                <!-- end partnerships   -->\n                <!-- ============================================================== -->\n                <!-- ============================================================== -->\n                <!-- total earned   -->\n                <!-- ============================================================== -->\n                <div class=\"col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <div class=\"d-inline-block\">\n                                <h5 class=\"text-muted\">Total Earned</h5>\n                                <h2 class=\"mb-0\"> $149.00</h2>\n                            </div>\n                            <div class=\"float-right icon-circle-medium  icon-box-lg  bg-brand-light mt-1\">\n                                <i class=\"fa fa-money-bill-alt fa-fw fa-sm text-brand\"></i>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- ============================================================== -->\n                <!-- end total earned   -->\n                <!-- ============================================================== -->\n            </div>\n            <!-- ============================================================== -->\n            <!-- end widgets   -->\n            <!-- ============================================================== -->\n\n            <div class=\"row\">\n                <!-- ============================================================== -->\n                <!-- campaign activities   -->\n                <!-- ============================================================== -->\n                <div class=\"col-lg-12\">\n                    <div class=\"section-block\">\n                        <h3 class=\"section-title\">My Active Campaigns</h3>\n                    </div>\n                    <div class=\"card\">\n                        <div class=\"campaign-table table-responsive\">\n                            <table class=\"table\">\n                                <thead>\n                                    <tr class=\"border-0\">\n                                        <th class=\"border-0\">Nombre</th>\n                                        <th class=\"border-0\">Apellido</th>\n                                        <th class=\"border-0\">Cedula</th>\n                                        <th class=\"border-0\">tipo</th>\n                                        <th class=\"border-0\">Correo</th>\n                                        <th class=\"border-0\">Registrado en</th>\n                                        <th class=\"border-0\">Opiones</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let user of users\">\n                                        <td>{{user.name}}</td>\n                                        <td>{{user.lastname}}</td>\n                                        <td>{{user.cedula}}</td>\n                                        <td>{{user.type}}</td>\n                                        <td>{{user.email}}</td>\n                                        <td>{{user.createdAt}}</td>\n                                        <td></td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            <div class=\"m-r-10\"><img src=\"assets/images/dribbble.png\" alt=\"user\"\n                                                    width=\"35\"></div>\n                                        </td>\n                                        <td>Fashion E Commerce </td>\n                                        <td>\n                                            <div class=\"avatar-group\">\n                                                <span><a href=\"#\"><i\n                                                            class=\"fab fa-fw fa-facebook-square facebook-color\"></i></a></span>\n                                                <span><a href=\"#\"><i\n                                                            class=\"fab fa-fw fa-twitter-square twitter-color\"></i></a></span>\n                                                <span><a href=\"#\"><i\n                                                            class=\"fab fa-fw fa-instagram instagram-color\"></i></a></span>\n                                                <span><a href=\"#\"><i\n                                                            class=\"fab fa-fw fa-pinterest-square pinterest-color\"></i></a></span>\n                                            </div>\n                                        </td>\n                                        <td>1,00,000 / 1,50,000</td>\n                                        <td>70%</td>\n                                        <td>7 Aug,2018</td>\n                                        <td>\n                                            <div class=\"dropdown float-right\">\n                                                <a href=\"#\" class=\"dropdown-toggle card-drop\" data-toggle=\"dropdown\"\n                                                    aria-expanded=\"true\">\n                                                    <i class=\"mdi mdi-dots-vertical\"></i>\n                                                </a>\n                                                <div class=\"dropdown-menu dropdown-menu-right\">\n                                                    <!-- item-->\n                                                    <a href=\"javascript:void(0);\" class=\"dropdown-item\">Sales\n                                                        Report</a>\n                                                    <!-- item-->\n                                                    <a href=\"javascript:void(0);\" class=\"dropdown-item\">Export\n                                                        Report</a>\n                                                    <!-- item-->\n                                                    <a href=\"javascript:void(0);\" class=\"dropdown-item\">Profit</a>\n                                                    <!-- item-->\n                                                    <a href=\"javascript:void(0);\" class=\"dropdown-item\">Action</a>\n                                                </div>\n                                            </div>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            <div class=\"m-r-10\"><img src=\"assets/images/github.png\" alt=\"user\"\n                                                    width=\"35\"></div>\n                                        </td>\n                                        <td>Fitness Products </td>\n                                        <td>\n                                            <div class=\"avatar-group\">\n                                                <span><a href=\"#\"><i\n                                                            class=\"fab fa-fw fa-facebook-square facebook-color \"></i></a></span>\n                                                <span><a href=\"#\"><i\n                                                            class=\"fab fa-fw fa-twitter-square twitter-color \"></i></a></span>\n                                            </div>\n                                        </td>\n                                        <td>2,50,000 / 3,50,000</td>\n                                        <td>70%</td>\n                                        <td>10 Aug,2018</td>\n                                        <td>\n                                            <div class=\"dropdown float-right\">\n                                                <a href=\"#\" class=\"dropdown-toggle  card-drop\" data-toggle=\"dropdown\"\n                                                    aria-expanded=\"true\">\n                                                    <i class=\"mdi mdi-dots-vertical\"></i>\n                                                </a>\n                                                <div class=\"dropdown-menu dropdown-menu-right\">\n                                                    <!-- item-->\n                                                    <a href=\"javascript:void(0);\" class=\"dropdown-item\">Sales\n                                                        Report</a>\n                                                    <!-- item-->\n                                                    <a href=\"javascript:void(0);\" class=\"dropdown-item\">Export\n                                                        Report</a>\n                                                    <!-- item-->\n                                                    <a href=\"javascript:void(0);\" class=\"dropdown-item\">Profit</a>\n                                                    <!-- item-->\n                                                    <a href=\"javascript:void(0);\" class=\"dropdown-item\">Action</a>\n                                                </div>\n                                            </div>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            <div class=\"m-r-10\"><img src=\"assets/images/dropbox.png\" alt=\"user\"\n                                                    width=\"35\"></div>\n                                        </td>\n                                        <td>Gym Trainer Program </td>\n                                        <td>\n                                            <div class=\"avatar-group\">\n                                                <span><a href=\"#\"><i\n                                                            class=\"fab fa-fw fa-facebook-square facebook-color \"></i></a></span>\n                                                <span><a href=\"#\"><i\n                                                            class=\"fab fa-fw fa-pinterest-square pinterest-color \"></i></a></span>\n                                            </div>\n                                        </td>\n                                        <td>3,50,000 / 4,50,000</td>\n                                        <td>70%</td>\n                                        <td>22 Aug,2018</td>\n                                        <td>\n                                            <div class=\"dropdown float-right\">\n                                                <a href=\"#\" class=\"dropdown-toggle  card-drop\" data-toggle=\"dropdown\"\n                                                    aria-expanded=\"true\">\n                                                    <i class=\"mdi mdi-dots-vertical\"></i>\n                                                </a>\n                                                <div class=\"dropdown-menu dropdown-menu-right\">\n                                                    <!-- item-->\n                                                    <a href=\"javascript:void(0);\" class=\"dropdown-item\">Sales\n                                                        Report</a>\n                                                    <!-- item-->\n                                                    <a href=\"javascript:void(0);\" class=\"dropdown-item\">Export\n                                                        Report</a>\n                                                    <!-- item-->\n                                                    <a href=\"javascript:void(0);\" class=\"dropdown-item\">Profit</a>\n                                                    <!-- item-->\n                                                    <a href=\"javascript:void(0);\" class=\"dropdown-item\">Action</a>\n                                                </div>\n                                            </div>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            <div class=\"m-r-10\"><img src=\"assets/images/bitbucket.png\" alt=\"user\"\n                                                    width=\"30\"></div>\n                                        </td>\n                                        <td>2018 Top Product </td>\n                                        <td>\n                                            <div class=\"avatar-group\">\n                                                <span><a href=\"#\"><i\n                                                            class=\"fab fa-fw fa-pinterest-square pinterest-color\"></i></a></span>\n                                            </div>\n                                        </td>\n                                        <td>4,50,000 / 5,50,000</td>\n                                        <td>70%</td>\n                                        <td>25 Aug,2018</td>\n                                        <td>\n                                            <div class=\"dropdown float-right\">\n                                                <a href=\"#\" class=\"dropdown-toggle  card-drop\" data-toggle=\"dropdown\"\n                                                    aria-expanded=\"true\">\n                                                    <i class=\"mdi mdi-dots-vertical\"></i>\n                                                </a>\n                                                <div class=\"dropdown-menu dropdown-menu-right\">\n                                                    <!-- item-->\n                                                    <a href=\"javascript:void(0);\" class=\"dropdown-item\">Sales\n                                                        Report</a>\n                                                    <!-- item-->\n                                                    <a href=\"javascript:void(0);\" class=\"dropdown-item\">Export\n                                                        Report</a>\n                                                    <!-- item-->\n                                                    <a href=\"javascript:void(0);\" class=\"dropdown-item\">Profit</a>\n                                                    <!-- item-->\n                                                    <a href=\"javascript:void(0);\" class=\"dropdown-item\">Action</a>\n                                                </div>\n                                            </div>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            <div class=\"m-r-10\"><img src=\"assets/images/mail_chimp.png\" alt=\"user\"\n                                                    width=\"30\"></div>\n                                        </td>\n                                        <td>Top Dashboard Sale 2018</td>\n                                        <td>\n                                            <div class=\"avatar-group\">\n                                                <span><a href=\"#\"><i\n                                                            class=\"fab fa-fw fa-facebook-square facebook-color\"></i></a></span>\n                                                <span><a href=\"#\"><i\n                                                            class=\"fab fa-fw fa-pinterest-square pinterest-color\"></i></a></span>\n                                            </div>\n                                        </td>\n                                        <td>5,50,000 / 6,50,000</td>\n                                        <td>70%</td>\n                                        <td>27 Aug,2018</td>\n                                        <td>\n                                            <div class=\"dropdown float-right\">\n                                                <a href=\"#\" class=\"dropdown-toggle  card-drop\" data-toggle=\"dropdown\"\n                                                    aria-expanded=\"true\">\n                                                    <i class=\"mdi mdi-dots-vertical\"></i>\n                                                </a>\n                                                <div class=\"dropdown-menu dropdown-menu-right\">\n                                                    <!-- item-->\n                                                    <a href=\"javascript:void(0);\" class=\"dropdown-item\">Sales\n                                                        Report</a>\n                                                    <!-- item-->\n                                                    <a href=\"javascript:void(0);\" class=\"dropdown-item\">Export\n                                                        Report</a>\n                                                    <!-- item-->\n                                                    <a href=\"javascript:void(0);\" class=\"dropdown-item\">Profit</a>\n                                                    <!-- item-->\n                                                    <a href=\"javascript:void(0);\" class=\"dropdown-item\">Action</a>\n                                                </div>\n                                            </div>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n                <!-- ============================================================== -->\n                <!-- end campaign activities   -->\n                <!-- ============================================================== -->\n            </div>\n            <!-- ============================================================== -->\n            <!-- recommended campaigns   -->\n            <!-- ============================================================== -->\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <div class=\"section-block\">\n                        <h3 class=\"section-title\">Recommended Campaigns</h3>\n                    </div>\n                </div>\n                <div class=\"col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12\">\n                    <div class=\"card campaign-card text-center\">\n                        <div class=\"card-body\">\n                            <div class=\"campaign-img\"><img src=\"assets/images/dribbble.png\" alt=\"user\"\n                                    class=\"user-avatar-xl\"></div>\n                            <div class=\"campaign-info\">\n                                <h3 class=\"mb-1\">Campaigns Name</h3>\n                                <p class=\"mb-3\">Vestibulum porttitor laoreet faucibus.</p>\n                                <p class=\"mb-1\">Min, Views:<span class=\"text-dark font-medium ml-2\">2,50,000</span>\n                                </p>\n                                <p>Payout: <span class=\"text-dark font-medium ml-2\">$22</span></p>\n                                <a href=\"#\"><i class=\"fab fa-twitter-square fa-sm twitter-color\"></i> </a><a href=\"#\"><i\n                                        class=\"fab fa-snapchat-square fa-sm snapchat-color\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12\">\n                    <div class=\"card campaign-card text-center\">\n                        <div class=\"card-body\">\n                            <div class=\"campaign-img\"><img src=\"assets/images/github.png\" alt=\"user\"\n                                    class=\" user-avatar-xl\"></div>\n                            <div class=\"campaign-info\">\n                                <h3 class=\"mb-1\">Campaigns Name</h3>\n                                <p class=\"mb-3\">Lorem ipsum dolor sit ament</p>\n                                <p class=\"mb-1\">Min, Views:<span class=\"text-dark font-medium ml-2\">1,00,000</span>\n                                </p>\n                                <p>Payout: <span class=\"text-dark font-medium ml-2\">$28</span></p>\n                                <a href=\"#\"><i class=\"fab fa-instagram fa-sm instagram-color\"></i> </a><a href=\"#\"><i\n                                        class=\"fab fa-facebook-square fa-sm facebook-color\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12\">\n                    <div class=\"card campaign-card text-center\">\n                        <div class=\"card-body\">\n                            <div class=\"campaign-img\"><img src=\"assets/images/slack.png\" alt=\"user\"\n                                    class=\"user-avatar-xl\"></div>\n                            <div class=\"campaign-info\">\n                                <h3 class=\"mb-1\">Campaigns Name</h3>\n                                <p class=\"mb-3\">Maecenas mattis tempor libero pretium.</p>\n                                <p class=\"mb-1\">Min, Views:<span class=\"text-dark font-medium ml-2\">3,80,000</span>\n                                </p>\n                                <p>Payout: <span class=\"text-dark font-medium ml-2\">$36</span></p>\n                                <a href=\"#\"><i class=\"fab fa-facebook-square fa-sm facebook-color\"></i> </a><a\n                                    href=\"#\"><i class=\"fab fa-snapchat-square fa-sm snapchat-color\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12\">\n                    <div class=\"card campaign-card text-center\">\n                        <div class=\"card-body\">\n                            <div class=\"campaign-img\"><img src=\"assets/images/mail_chimp.png\" alt=\"user\"\n                                    class=\"user-avatar-xl\"></div>\n                            <div class=\"campaign-info\">\n                                <h3 class=\"mb-1\">Campaigns Name</h3>\n                                <p class=\"mb-3\">Proin vitae lacinia leo</p>\n                                <p class=\"mb-1\">Min, Views:<span class=\"text-dark font-medium ml-2\">4,50,000</span>\n                                </p>\n                                <p>Payout: <span class=\"text-dark font-medium ml-2\">$57</span></p>\n                                <a href=\"#\"><i class=\"fab fa-twitter-square fa-sm twitter-color\"></i> </a><a href=\"#\"><i\n                                        class=\"fab fa-snapchat-square fa-sm snapchat-color\"></i></a>\n                                <a href=\"#\"><i class=\"fab fa-facebook-square fa-sm facebook-color\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- ============================================================== -->\n            <!-- end recommended campaigns   -->\n            <!-- ============================================================== -->\n            <!-- ============================================================== -->\n            <!-- end content  -->\n            <!-- ============================================================== -->\n        </div>\n    </div>\n    <!-- ============================================================== -->\n    <!-- footer -->\n    <!-- ============================================================== -->\n    <app-footeradmin></app-footeradmin>\n    <!-- ============================================================== -->\n    <!-- end footer -->\n    <!-- ============================================================== -->\n</div>\n<!-- ============================================================== -->\n<!-- end wrapper  -->\n<!-- ============================================================== -->\n\n<!-- ============================================================== -->\n<!-- end main wrapper  -->\n<!-- ============================================================== -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/images/images.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/images/images.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdminImagesImagesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- ============================================================== -->\n<!-- wrapper  -->\n<!-- ============================================================== -->\n<div class=\"dashboard-wrapper\">\n    <div class=\"dashboard-influence\">\n        <div class=\"container-fluid dashboard-content\">\n            <!-- ============================================================== -->\n            <!-- pageheader  -->\n            <!-- ============================================================== -->\n            <div class=\"row\">\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\n                    <div class=\"page-header\">\n                        <h3 class=\"mb-2\">Galeria del Producto {{product.name}}</h3>\n                        <p class=\"pageheader-text\">Proin placerat ante duiullam scelerisque a velit ac porta, fusce\n                            sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>\n                        <div class=\"page-breadcrumb\">\n                            <nav aria-label=\"breadcrumb\">\n                                <ol class=\"breadcrumb\">\n                                    <li class=\"breadcrumb-item\"><a href=\"#\" class=\"breadcrumb-link\">Dashboard</a>\n                                    </li>\n                                    <li class=\"breadcrumb-item active\" aria-current=\"page\">Influencer Dashboard\n                                        Template</li>\n                                </ol>\n                            </nav>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- ============================================================== -->\n            <!-- end pageheader  -->\n            <!-- ============================================================== -->\n            <!-- ============================================================== -->\n            <!-- content  -->\n            <!-- ============================================================== -->\n            <div class=\"section-block\">\n                <h3 class=\"section-title\">Imagenes</h3>\n                <button type=\"button\" class=\"btn btn-primary mr-1\" (click)=\"open(create,'create','')\">Registrar una\n                    Imagen</button>\n                <button type=\"button\" class=\"btn btn-success \" [routerLink]=\"['/admin/products/list']\"\n                    routerLinkActive=\"router-link-active\">Volver</button>\n            </div>\n            <div class=\"row\">\n                <!-- grid column -->\n                <div *ngFor=\"let image of product.images\" class=\"col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12\">\n                    <!-- .card -->\n                    <div class=\"card card-figure\">\n                        <!-- .card-figure -->\n                        <figure class=\"figure\">\n                            <!-- .figure-img -->\n                            <div class=\"figure-img\">\n                                <img class=\"img-fluid\" src=\"{{image.url}}\" alt=\"Card image cap\">\n                                <!-- <div class=\"figure-description\">\n                                    <h6 class=\"figure-title\"> Long title text can be place here </h6>\n                                    <p class=\"text-muted mb-0\">\n                                        <small>Laboriosam neque officia adipisci quo ut placeat labore? Doloribus,\n                                            ipsam? Voluptates, minus.</small>\n                                    </p>\n                                </div>-->\n                                <div class=\"figure-tools\">\n                                    <a href=\"#\" class=\"tile tile-circle tile-sm mr-auto\"> </a>\n                                    <span class=\" btn btn-danger badge badge-danger\" (click)=\"deleteImage(image)\"><i\n                                            class=\"fas fa-trash\"></i></span>\n                                </div>\n                                <div class=\"figure-action\">\n                                    <a class=\"btn btn-block btn-sm btn-primary\"\n                                        (click)=\"open(update,'update',image)\">Editar</a>\n                                </div>\n                            </div>\n                            <!-- /.figure-img -->\n                        </figure>\n                        <!-- /.card-figure -->\n                    </div>\n                    <!-- /.card -->\n                </div>\n                <!-- /grid column -->\n            </div>\n\n            <!-- ============================================================== -->\n            <!-- widgets   -->\n            <!-- ============================================================== -->\n\n            <!-- ============================================================== -->\n            <!-- end recommended campaigns   -->\n            <!-- ============================================================== -->\n            <!-- ============================================================== -->\n            <!-- end content  -->\n            <!-- ============================================================== -->\n        </div>\n    </div>\n    <!-- ============================================================== -->\n    <!-- footer -->\n    <!-- ============================================================== -->\n    <app-footeradmin></app-footeradmin>\n    <!-- ============================================================== -->\n    <!-- end footer -->\n    <!-- ============================================================== -->\n</div>\n<!-- ============================================================== -->\n<!-- end wrapper  -->\n\n<!-- ============================================================== -->\n<!-- end main wrapper  -->\n<!-- ============================================================== -->\n\n\n<!-- ============================================================== -->\n<!-- Modals  -->\n<!-- ============================================================== -->\n<ng-template #create let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Subir Imagens</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <form [formGroup]=\"formCreateImage\">\n            <div class=\"form-group\">\n                <label for=\"\">Imagen</label>\n                <input type=\"file\" formControlName=\"image\" (change)=\"onUploadImage($event,'create')\"\n                    accept=\".png, .jpg, .jpeg, .pdf\" multiple />\n                <small id=\"helpId\" class=\"text-muted\">Help text</small>\n            </div>\n        </form>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"submit\" [disabled]=\"formCreateImage.invalid\" class=\"btn btn-outline-dark\"\n            (click)=\"modal.close('Save click')\">Save</button>\n    </div>\n</ng-template>\n\n<ng-template #update let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Remplazar Imagen</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <form [formGroup]=\"formUpdateImage\">\n\n            <div class=\"form-group\">\n                <label for=\"\">Imagen</label>\n                <input type=\"file\" formControlName=\"image\" (change)=\"onUploadImage($event,'update')\"\n                    accept=\".png, .jpg, .jpeg, .pdf\" />\n                <small id=\"helpId\" class=\"text-muted\">Help text</small>\n            </div>\n        </form>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"submit\" [disabled]=\"formUpdateImage.invalid\" class=\"btn btn-outline-dark\"\n            (click)=\"modal.close('Save click')\">Remplazar</button>\n    </div>\n</ng-template>\n\n\n<!-- ============================================================== -->\n<!-- end Modals -->\n<!-- ============================================================== -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/products/editproducts/editproducts.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/products/editproducts/editproducts.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdminProductsEditproductsEditproductsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- ============================================================== -->\n<!-- wrapper  -->\n<!-- ============================================================== -->\n<div class=\"dashboard-wrapper\">\n    <div class=\"dashboard-influence\">\n        <div class=\"container-fluid dashboard-content\">\n            <!-- ============================================================== -->\n            <!-- pageheader  -->\n            <!-- ============================================================== -->\n            <div class=\"row\">\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\n                    <div class=\"page-header\">\n                        <h3 class=\"mb-2\">Registro de Productos </h3>\n                        <p class=\"pageheader-text\">Proin placerat ante duiullam scelerisque a velit ac porta, fusce\n                            sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>\n\n                    </div>\n                </div>\n            </div>\n            <!-- ============================================================== -->\n            <!-- end pageheader  -->\n            <!-- ============================================================== -->\n            <!-- ============================================================== -->\n            <!-- content  -->\n            <div class=\"row\">\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\n                    <div class=\"card\">\n                        <form [formGroup]=\"formUpdateProduct\">\n\n\n                            <h5 class=\"card-header\">Basic Form</h5>\n                            <div class=\"card-body\">\n\n                                <div class=\"form-group\">\n                                    <label for=\"name\" class=\"col-form-label\">Nombre</label>\n                                    <input id=\"name\" formControlName=\"name\" type=\"text\" class=\"form-control\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"price\">Precio</label>\n                                    <input id=\"price\" formControlName=\"price\" type=\"number\" placeholder=\"\"\n                                        class=\"form-control\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"exampleFormControlTextarea1\">Descripcion</label>\n                                    <textarea class=\"form-control\" formControlName=\"description\"\n                                        id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"categories\">Categorias</label>\n                                    <label>categorias actuales: </label>\n                                    <span *ngFor=\"let category of categories\">\n                                        <span *ngFor=\"let catp of formUpdateProduct.value.categories\">\n                                            <button class=\"btn btn-info mr-1\"\n                                                *ngIf=\"catp == category.id \">{{category.category}}</button>\n                                        </span>\n                                    </span>\n                                    <select class=\"form-control\" formControlName=\"categories\" id=\"categories\" multiple>\n                                        <option value=\"\" disabled>seleccione Opcion</option>\n                                        <option *ngFor=\"let category of categories\" value=\"{{category.id}}\">\n                                            {{category.category}}</option>\n                                    </select>\n                                </div>\n\n                            </div>\n                            <div class=\"card-body border-top\">\n                                <h3>Tallas</h3>\n                                <label>Tallas actuales: </label>\n\n\n                                <span *ngFor=\"let size of sizes\">\n                                    <span *ngFor=\"let sizp of formUpdateProduct.value.size\">\n                                        <button class=\"btn btn-info mr-1\"\n                                            *ngIf=\"sizp == size.id \">{{size.size}}</button>\n                                    </span>\n                                </span>\n\n                                <div class=\"form-group\">\n                                    <label for=\"size\">Tallas</label>\n                                    <select class=\"form-control\" id=\"size\" multiple>\n                                        <option *ngFor=\"let size of sizes\" value=\"{{size.id}}\" (click)=\"addItem(size)\">\n                                            {{size.size}}</option>\n                                    </select>\n                                </div>\n\n                                <h3>Cantidades por Tallas</h3>\n                                <div formArrayName=\"size\"\n                                    *ngFor=\"let size of formUpdateProduct.get('size').controls; let i = index;\">\n                                    <div [formGroupName]=\"i\">\n                                        <div class=\"form-group\">\n                                            <label for=\"quantity\"\n                                                class=\"col-form-label\">{{ formUpdateProduct.controls.size.controls[i].controls.name.value }}</label>\n                                            <div class=\"row\">\n                                                <div class=\"container\">\n                                                    <div class=\"row\">\n                                                        <div class=\"col-11\">\n                                                            <input id=\"quantity\" formControlName=\"quantity\"\n                                                                type=\"number\" class=\"form-control\" placeholder=\"\" />\n                                                        </div>\n                                                        <div class=\"col-1\">\n                                                            <span (click)=\"removeItem(i)\"\n                                                                class=\"btn btn-danger\">x</span>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <button type=\"submit\" [disabled]=\"formUpdateProduct.invalid\"\n                                    class=\"btn btn-outline-dark\" (click)=\"updateProduct()\">Save</button>\n                            </div>\n\n\n                        </form>\n                    </div>\n                </div>\n            </div>\n\n            <!-- ============================================================== -->\n            <!-- end content  -->\n            <!-- ============================================================== -->\n        </div>\n    </div>\n    <!-- ============================================================== -->\n    <!-- footer -->\n    <!-- ============================================================== -->\n    <app-footeradmin></app-footeradmin>\n    <!-- ============================================================== -->\n    <!-- end footer -->\n    <!-- ============================================================== -->\n</div>\n<!-- ============================================================== -->\n<!-- end wrapper  -->\n\n\n\n\n<!-- ============================================================== -->\n<!-- end Modals -->\n<!-- ============================================================== -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/products/productslist/productslist.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/products/productslist/productslist.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdminProductsProductslistProductslistComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- ============================================================== -->\n<!-- wrapper  -->\n<!-- ============================================================== -->\n<div class=\"dashboard-wrapper\">\n    <div class=\"dashboard-influence\">\n        <div class=\"container-fluid dashboard-content\">\n            <!-- ============================================================== -->\n            <!-- pageheader  -->\n            <!-- ============================================================== -->\n            <div class=\"row\">\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\n                    <div class=\"page-header\">\n                        <h3 class=\"mb-2\">Lista de Productos </h3>\n                        <p class=\"pageheader-text\">Proin placerat ante duiullam scelerisque a velit ac porta, fusce\n                            sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>\n                        <div class=\"page-breadcrumb\">\n                            <nav aria-label=\"breadcrumb\">\n                                <ol class=\"breadcrumb\">\n                                    <li class=\"breadcrumb-item\"><a href=\"#\" class=\"breadcrumb-link\">Dashboard</a>\n                                    </li>\n                                    <li class=\"breadcrumb-item active\" aria-current=\"page\">Influencer Dashboard\n                                        Template</li>\n                                </ol>\n                            </nav>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- ============================================================== -->\n            <!-- end pageheader  -->\n            <!-- ============================================================== -->\n            <!-- ============================================================== -->\n            <!-- content  -->\n            <!-- ============================================================== -->\n\n            <!-- ============================================================== -->\n            <!-- widgets   -->\n            <!-- ============================================================== -->\n            <div class=\"row\">\n                <!-- ============================================================== -->\n                <!-- four widgets   -->\n                <!-- ============================================================== -->\n                <!-- ============================================================== -->\n                <!-- total views   -->\n                <!-- ============================================================== -->\n                <div class=\"col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <div class=\"d-inline-block\">\n                                <h5 class=\"text-muted\">Total Views</h5>\n                                <h2 class=\"mb-0\"> 10,28,056</h2>\n                            </div>\n                            <div class=\"float-right icon-circle-medium  icon-box-lg  bg-info-light mt-1\">\n                                <i class=\"fa fa-eye fa-fw fa-sm text-info\"></i>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- ============================================================== -->\n                <!-- end total views   -->\n                <!-- ============================================================== -->\n                <!-- ============================================================== -->\n                <!-- total followers   -->\n                <!-- ============================================================== -->\n                <div class=\"col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <div class=\"d-inline-block\">\n                                <h5 class=\"text-muted\">Total Followers</h5>\n                                <h2 class=\"mb-0\"> 24,763</h2>\n                            </div>\n                            <div class=\"float-right icon-circle-medium  icon-box-lg  bg-primary-light mt-1\">\n                                <i class=\"fa fa-user fa-fw fa-sm text-primary\"></i>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- ============================================================== -->\n                <!-- end total followers   -->\n                <!-- ============================================================== -->\n                <!-- ============================================================== -->\n                <!-- partnerships   -->\n                <!-- ============================================================== -->\n                <div class=\"col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <div class=\"d-inline-block\">\n                                <h5 class=\"text-muted\">Partnerships</h5>\n                                <h2 class=\"mb-0\">14</h2>\n                            </div>\n                            <div class=\"float-right icon-circle-medium  icon-box-lg  bg-secondary-light mt-1\">\n                                <i class=\"fa fa-handshake fa-fw fa-sm text-secondary\"></i>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- ============================================================== -->\n                <!-- end partnerships   -->\n                <!-- ============================================================== -->\n                <!-- ============================================================== -->\n                <!-- total earned   -->\n                <!-- ============================================================== -->\n                <div class=\"col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <div class=\"d-inline-block\">\n                                <h5 class=\"text-muted\">Total Earned</h5>\n                                <h2 class=\"mb-0\"> $149.00</h2>\n                            </div>\n                            <div class=\"float-right icon-circle-medium  icon-box-lg  bg-brand-light mt-1\">\n                                <i class=\"fa fa-money-bill-alt fa-fw fa-sm text-brand\"></i>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- ============================================================== -->\n                <!-- end total earned   -->\n                <!-- ============================================================== -->\n            </div>\n            <!-- ============================================================== -->\n            <!-- end widgets   -->\n            <!-- ============================================================== -->\n\n            <div class=\"row\">\n                <!-- ============================================================== -->\n                <!-- campaign activities   -->\n                <!-- ============================================================== -->\n                <div class=\"col-lg-12\">\n                    <div class=\"section-block\">\n                        <h3 class=\"section-title\">Productos</h3>\n                        <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/admin/product/register']\"\n                            routerLinkActive=\"router-link-active\">Registrar\n                            un\n                            Producto</button>\n                    </div>\n                    <div class=\"card\">\n                        <div class=\"campaign-table table-responsive\">\n                            <table class=\"table\">\n                                <thead>\n                                    <tr class=\"border-0\">\n                                        <th class=\"border-0\">Id</th>\n                                        <th class=\"border-0\">Image</th>\n                                        <th class=\"border-0\">Nombre</th>\n                                        <th class=\"border-0\">Categoria</th>\n                                        <th class=\"border-0\">Precio</th>\n                                        <th class=\"border-0\">Cantidad</th>\n                                        <th class=\"border-0\">Operaciones</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let product of products\">\n                                        <td>{{product.id}}</td>\n                                        <td>\n                                            <div class=\"m-r-10\">\n                                                <a href=\"{{product.images[0].url}}\" target=\"_blank\">\n                                                    <img src=\"{{product.images[0].url}}\" alt=\"user\" width=\"35\">\n                                                </a></div>\n                                        </td>\n                                        <td>{{product.name}}</td>\n                                        <td>\n                                            <ul>\n                                                <li *ngFor=\"let category of  product.categories\">\n                                                    {{category.category}}\n                                                </li>\n                                            </ul>\n                                        </td>\n                                        <td>{{product.price}}</td>\n                                        <td>\n                                            <ul>\n                                                <li *ngFor=\"let size of product.sizes\">\n                                                    {{size.size}}: {{size.products_sizes.quantity}}\n                                                </li>\n                                            </ul>\n                                        </td>\n                                        <td>\n                                            <button type=\"button\" name=\"\" id=\"\" class=\"btn btn-success mr-1\"\n                                                [routerLink]=\"['/admin/product/edit', product.id]\"\n                                                routerLinkActive=\"router-link-active\">Editar</button>\n                                            <button type=\"button\" name=\"\" id=\"\" class=\"btn btn-info mr-1\"\n                                                [routerLink]=\"['/admin/images',product.id]\"\n                                                routerLinkActive=\"router-link-active\">Editar Galeria</button>\n                                            <button type=\"button\" name=\"\" id=\"\" class=\"btn btn-danger\"\n                                                (click)=\"deleteProduct(product)\">Eliminar</button>\n\n                                        </td>\n                                    </tr>\n\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n                <!-- ============================================================== -->\n                <!-- end campaign activities   -->\n                <!-- ============================================================== -->\n            </div>\n            <!-- ============================================================== -->\n            <!-- recommended campaigns   -->\n            <!-- ============================================================== -->\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <div class=\"section-block\">\n                        <h3 class=\"section-title\">Recommended Campaigns</h3>\n                    </div>\n                </div>\n                <div class=\"col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12\">\n                    <div class=\"card campaign-card text-center\">\n                        <div class=\"card-body\">\n                            <div class=\"campaign-img\"><img src=\"assets/images/dribbble.png\" alt=\"user\"\n                                    class=\"user-avatar-xl\"></div>\n                            <div class=\"campaign-info\">\n                                <h3 class=\"mb-1\">Campaigns Name</h3>\n                                <p class=\"mb-3\">Vestibulum porttitor laoreet faucibus.</p>\n                                <p class=\"mb-1\">Min, Views:<span class=\"text-dark font-medium ml-2\">2,50,000</span>\n                                </p>\n                                <p>Payout: <span class=\"text-dark font-medium ml-2\">$22</span></p>\n                                <a href=\"#\"><i class=\"fab fa-twitter-square fa-sm twitter-color\"></i> </a><a href=\"#\"><i\n                                        class=\"fab fa-snapchat-square fa-sm snapchat-color\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12\">\n                    <div class=\"card campaign-card text-center\">\n                        <div class=\"card-body\">\n                            <div class=\"campaign-img\"><img src=\"assets/images/github.png\" alt=\"user\"\n                                    class=\" user-avatar-xl\"></div>\n                            <div class=\"campaign-info\">\n                                <h3 class=\"mb-1\">Campaigns Name</h3>\n                                <p class=\"mb-3\">Lorem ipsum dolor sit ament</p>\n                                <p class=\"mb-1\">Min, Views:<span class=\"text-dark font-medium ml-2\">1,00,000</span>\n                                </p>\n                                <p>Payout: <span class=\"text-dark font-medium ml-2\">$28</span></p>\n                                <a href=\"#\"><i class=\"fab fa-instagram fa-sm instagram-color\"></i> </a><a href=\"#\"><i\n                                        class=\"fab fa-facebook-square fa-sm facebook-color\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12\">\n                    <div class=\"card campaign-card text-center\">\n                        <div class=\"card-body\">\n                            <div class=\"campaign-img\"><img src=\"assets/images/slack.png\" alt=\"user\"\n                                    class=\"user-avatar-xl\"></div>\n                            <div class=\"campaign-info\">\n                                <h3 class=\"mb-1\">Campaigns Name</h3>\n                                <p class=\"mb-3\">Maecenas mattis tempor libero pretium.</p>\n                                <p class=\"mb-1\">Min, Views:<span class=\"text-dark font-medium ml-2\">3,80,000</span>\n                                </p>\n                                <p>Payout: <span class=\"text-dark font-medium ml-2\">$36</span></p>\n                                <a href=\"#\"><i class=\"fab fa-facebook-square fa-sm facebook-color\"></i> </a><a\n                                    href=\"#\"><i class=\"fab fa-snapchat-square fa-sm snapchat-color\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12\">\n                    <div class=\"card campaign-card text-center\">\n                        <div class=\"card-body\">\n                            <div class=\"campaign-img\"><img src=\"assets/images/mail_chimp.png\" alt=\"user\"\n                                    class=\"user-avatar-xl\"></div>\n                            <div class=\"campaign-info\">\n                                <h3 class=\"mb-1\">Campaigns Name</h3>\n                                <p class=\"mb-3\">Proin vitae lacinia leo</p>\n                                <p class=\"mb-1\">Min, Views:<span class=\"text-dark font-medium ml-2\">4,50,000</span>\n                                </p>\n                                <p>Payout: <span class=\"text-dark font-medium ml-2\">$57</span></p>\n                                <a href=\"#\"><i class=\"fab fa-twitter-square fa-sm twitter-color\"></i> </a><a href=\"#\"><i\n                                        class=\"fab fa-snapchat-square fa-sm snapchat-color\"></i></a>\n                                <a href=\"#\"><i class=\"fab fa-facebook-square fa-sm facebook-color\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- ============================================================== -->\n            <!-- end recommended campaigns   -->\n            <!-- ============================================================== -->\n            <!-- ============================================================== -->\n            <!-- end content  -->\n            <!-- ============================================================== -->\n        </div>\n    </div>\n    <!-- ============================================================== -->\n    <!-- footer -->\n    <!-- ============================================================== -->\n    <app-footeradmin></app-footeradmin>\n    <!-- ============================================================== -->\n    <!-- end footer -->\n    <!-- ============================================================== -->\n</div>\n<!-- ============================================================== -->\n<!-- end wrapper  -->\n\n<!-- ============================================================== -->\n<!-- end main wrapper  -->\n<!-- ============================================================== -->\n\n\n<!-- ============================================================== -->\n<!-- Modals  -->\n<!-- ============================================================== -->\n<ng-template #create let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Profile update</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <form [formGroup]=\"formCreateProduct\">\n            <div class=\"form-group\">\n                <label for=\"\">Imagen</label>\n                <input type=\"file\" formControlName=\"image\" (change)=\"onUploadImage($event)\"\n                    accept=\".png, .jpg, .jpeg, .pdf\" multiple />\n                <small id=\"helpId\" class=\"text-muted\">Help text</small>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"\">Nombre</label>\n                <input type=\"text\" name=\"\" formControlName=\"name\" id=\"\" class=\"form-control\" placeholder=\"\"\n                    aria-describedby=\"helpId\">\n                <small id=\"helpId\" class=\"text-muted\">Help text</small>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"\">Precio</label>\n                <input type=\"number\" name=\"\" formControlName=\"price\" id=\"\" class=\"form-control\" placeholder=\"\"\n                    aria-describedby=\"helpId\">\n                <small id=\"helpId\" class=\"text-muted\">Help text</small>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"\">Cantidad</label>\n                <input type=\"text\" name=\"\" formControlName=\"quantity\" id=\"\" class=\"form-control\" placeholder=\"\"\n                    aria-describedby=\"helpId\">\n                <small id=\"helpId\" class=\"text-muted\">Help text</small>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"\"></label>\n                <select class=\"form-control\" formControlName=\"categories\" name=\"\" id=\"\" multiple>\n                    <option></option>\n                    <option *ngFor=\"let category of categories\" value=\"{{category.id}}\">{{category.category}}</option>\n                </select>\n            </div>\n        </form>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"submit\" [disabled]=\"formCreateProduct.invalid\" class=\"btn btn-outline-dark\"\n            (click)=\"modal.close('Save click')\">Save</button>\n    </div>\n</ng-template>\n\n<ng-template #update let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Profile update</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <form [formGroup]=\"formUpdateProduct\">\n\n            <div class=\"form-group\">\n                <label for=\"\">Nombre</label>\n                <input type=\"text\" name=\"\" formControlName=\"name\" id=\"\" class=\"form-control\" placeholder=\"\"\n                    aria-describedby=\"helpId\">\n                <small id=\"helpId\" class=\"text-muted\">Help text</small>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"\">Precio</label>\n                <input type=\"number\" name=\"\" formControlName=\"price\" id=\"\" class=\"form-control\" placeholder=\"\"\n                    aria-describedby=\"helpId\">\n                <small id=\"helpId\" class=\"text-muted\">Help text</small>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"\">Cantidad</label>\n                <input type=\"text\" name=\"\" formControlName=\"quantity\" id=\"\" class=\"form-control\" placeholder=\"\"\n                    aria-describedby=\"helpId\">\n                <small id=\"helpId\" class=\"text-muted\">Help text</small>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"\" Categorias></label>\n                <label>categorias actuales: </label>\n                <span *ngFor=\"let category of categories\">\n                    <span *ngFor=\"let catp of formUpdateProduct.value.categories\">\n                        <button class=\"btn btn-info mr-1\" *ngIf=\"catp == category.id \">{{category.category}}</button>\n                    </span>\n                </span>\n\n\n                <select class=\"form-control mt-1\" formControlName=\"categories\"\n                    value=\"formUpdateProduct.value.categories\" name=\"\" id=\"\" multiple size=\"2\">\n                    <option value=\"\" disabled>seleccione Opcion</option>\n                    <option *ngFor=\"let category of categories\" value=\"{{category.id}}\">{{category.category}}</option>\n                </select>\n            </div>\n        </form>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"submit\" [disabled]=\"formUpdateProduct.invalid\" class=\"btn btn-outline-dark\"\n            (click)=\"modal.close('Save click')\">Save</button>\n    </div>\n</ng-template>\n\n\n<!-- ============================================================== -->\n<!-- end Modals -->\n<!-- ============================================================== -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/products/registerproducts/registerproducts.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/products/registerproducts/registerproducts.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdminProductsRegisterproductsRegisterproductsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- ============================================================== -->\n<!-- wrapper  -->\n<!-- ============================================================== -->\n<div class=\"dashboard-wrapper\">\n    <div class=\"dashboard-influence\">\n        <div class=\"container-fluid dashboard-content\">\n            <!-- ============================================================== -->\n            <!-- pageheader  -->\n            <!-- ============================================================== -->\n            <div class=\"row\">\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\n                    <div class=\"page-header\">\n                        <h3 class=\"mb-2\">Registro de Productos</h3>\n                        <p class=\"pageheader-text\">\n                            Proin placerat ante duiullam scelerisque a velit ac porta, fusce\n                            sit amet vestibulum mi. Morbi lobortis pulvinar quam.\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <!-- ============================================================== -->\n            <!-- end pageheader  -->\n            <!-- ============================================================== -->\n            <!-- ============================================================== -->\n            <!-- content  -->\n            <div class=\"row\">\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\n                    <div class=\"card\">\n                        <form [formGroup]=\"formCreateProduct\">\n                            <h5 class=\"card-header\">Basic Form</h5>\n                            <div class=\"card-body\">\n                                <label for=\"name\" class=\"col-form-label\">Imagenes</label>\n                                <div class=\"custom-file mb-3\">\n                                    <input type=\"file\" formControlName=\"image\" accept=\".png, .jpg, .jpeg, .pdf\"\n                                        (change)=\"onUploadImage($event)\" class=\"custom-file-input\" id=\"customFile\"\n                                        multiple />\n                                    <label class=\"custom-file-label\" for=\"customFile\">File Input</label>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"name\" class=\"col-form-label\">Nombre</label>\n                                    <input id=\"name\" formControlName=\"name\" type=\"text\" class=\"form-control\" />\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"price\">Precio</label>\n                                    <input id=\"price\" formControlName=\"price\" type=\"number\" placeholder=\"\"\n                                        class=\"form-control\" />\n                                </div>\n\n\n                                <div class=\"form-group\">\n                                    <label for=\"exampleFormControlTextarea1\">Descripcion</label>\n                                    <textarea class=\"form-control\" formControlName=\"description\"\n                                        id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"categories\">Categorias</label>\n                                    <select class=\"form-control\" formControlName=\"categories\" id=\"categories\" multiple>\n                                        <option value=\"\" disabled>seleccione Opcion</option>\n                                        <option *ngFor=\"let category of categories\" value=\"{{ category.id }}\">\n                                            {{ category.category }}</option>\n                                    </select>\n                                </div>\n                            </div>\n                            <div class=\"card-body border-top\">\n                                <h3>Tallas</h3>\n\n                                <div class=\"form-group\">\n                                    <label for=\"size\">Tallas</label>\n                                    <select class=\"form-control\" id=\"size\" multiple>\n                                        <option *ngFor=\"let size of sizes\" value=\"{{ size.id }}\"\n                                            (click)=\"addItem(size)\">\n                                            {{ size.size }}</option>\n                                    </select>\n                                </div>\n\n                                <h3>Cantidades por Tallas</h3>\n                                <div formArrayName=\"size\"\n                                    *ngFor=\"let size of formCreateProduct.get('size').controls; let i = index;\">\n\n\n                                    <div [formGroupName]=\"i\">\n                                        <div class=\"form-group\">\n                                            <label for=\"quantity\"\n                                                class=\"col-form-label\">{{ formCreateProduct.controls.size.controls[i].controls.name.value }}</label>\n                                            <div class=\"row\">\n                                                <div class=\"container\">\n                                                    <div class=\"row\">\n                                                        <div class=\"col-11\">\n                                                            <input id=\"quantity\" formControlName=\"quantity\"\n                                                                type=\"number\" class=\"form-control\" placeholder=\"\" />\n                                                        </div>\n                                                        <div class=\"col-1\">\n                                                            <span (click)=\"removeItem(i)\"\n                                                                class=\"btn btn-danger\">x</span>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n\n\n                                </div>\n\n                                <button type=\"submit\" [disabled]=\"formCreateProduct.invalid\"\n                                    class=\"btn btn-outline-dark\" (click)=\"createProduct()\">\n                                    Save\n                                </button>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n\n            <!-- ============================================================== -->\n            <!-- end content  -->\n            <!-- ============================================================== -->\n        </div>\n    </div>\n    <!-- ============================================================== -->\n    <!-- footer -->\n    <!-- ============================================================== -->\n    <app-footeradmin></app-footeradmin>\n    <!-- ============================================================== -->\n    <!-- end footer -->\n    <!-- ============================================================== -->\n</div>\n<!-- ============================================================== -->\n<!-- end wrapper  -->\n\n<!-- ============================================================== -->\n<!-- end Modals -->\n<!-- ============================================================== -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/structure/footeradmin/footeradmin.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/structure/footeradmin/footeradmin.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdminStructureFooteradminFooteradminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- ============================================================== -->\n<!-- footer -->\n<!-- ============================================================== -->\n<div class=\"footer\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12\">\n                Copyright © 2018 Concept. All rights reserved. Dashboard by <a\n                    href=\"https://colorlib.com/wp/\">Colorlib</a>.\n            </div>\n            <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12\">\n                <div class=\"text-md-right footer-links d-none d-sm-block\">\n                    <a href=\"javascript: void(0);\">About</a>\n                    <a href=\"javascript: void(0);\">Support</a>\n                    <a href=\"javascript: void(0);\">Contact Us</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- ============================================================== -->\n<!-- end footer -->\n<!-- ============================================================== -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/structure/navbaradmin/navbaradmin.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/structure/navbaradmin/navbaradmin.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdminStructureNavbaradminNavbaradminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- navbar -->\n<!-- ============================================================== -->\n<div class=\"dashboard-header\">\n    <nav class=\"navbar navbar-expand-lg bg-white fixed-top\">\n        <a class=\"navbar-brand\" [routerLink]=\"['/admin/dashboard']\" routerLinkActive=\"router-link-active\">Concept</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n            aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse \" id=\"navbarSupportedContent\">\n            <ul class=\"navbar-nav ml-auto navbar-right-top\">\n                <li class=\"nav-item\">\n                    <div id=\"custom-search\" class=\"top-search-bar\">\n                        <input class=\"form-control\" type=\"text\" placeholder=\"Search..\">\n                    </div>\n                </li>\n                <li class=\"nav-item dropdown notification\">\n                    <a class=\"nav-link nav-icons\" href=\"#\" id=\"navbarDropdownMenuLink1\" data-toggle=\"dropdown\"\n                        aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fas fa-fw fa-bell\"></i> <span\n                            class=\"indicator\"></span></a>\n                    <ul class=\"dropdown-menu dropdown-menu-right notification-dropdown\">\n                        <li>\n                            <div class=\"notification-title\"> Notification</div>\n                            <div class=\"notification-list\">\n                                <div class=\"list-group\">\n                                    <a href=\"#\" class=\"list-group-item list-group-item-action active\">\n                                        <div class=\"notification-info\">\n                                            <div class=\"notification-list-user-img\"><img\n                                                    src=\"assets/images/avatar-2.jpg\" alt=\"\"\n                                                    class=\"user-avatar-md rounded-circle\"></div>\n                                            <div class=\"notification-list-user-block\"><span\n                                                    class=\"notification-list-user-name\">Jeremy\n                                                    Rakestraw</span>accepted your invitation to join the team.\n                                                <div class=\"notification-date\">2 min ago</div>\n                                            </div>\n                                        </div>\n                                    </a>\n                                    <a href=\"#\" class=\"list-group-item list-group-item-action\">\n                                        <div class=\"notification-info\">\n                                            <div class=\"notification-list-user-img\"><img\n                                                    src=\"assets/images/avatar-3.jpg\" alt=\"\"\n                                                    class=\"user-avatar-md rounded-circle\"></div>\n                                            <div class=\"notification-list-user-block\"><span\n                                                    class=\"notification-list-user-name\">John Abraham </span>is now\n                                                following you\n                                                <div class=\"notification-date\">2 days ago</div>\n                                            </div>\n                                        </div>\n                                    </a>\n                                    <a href=\"#\" class=\"list-group-item list-group-item-action\">\n                                        <div class=\"notification-info\">\n                                            <div class=\"notification-list-user-img\"><img\n                                                    src=\"assets/images/avatar-4.jpg\" alt=\"\"\n                                                    class=\"user-avatar-md rounded-circle\"></div>\n                                            <div class=\"notification-list-user-block\"><span\n                                                    class=\"notification-list-user-name\">Monaan Pechi</span> is\n                                                watching your main repository\n                                                <div class=\"notification-date\">2 min ago</div>\n                                            </div>\n                                        </div>\n                                    </a>\n                                    <a href=\"#\" class=\"list-group-item list-group-item-action\">\n                                        <div class=\"notification-info\">\n                                            <div class=\"notification-list-user-img\"><img\n                                                    src=\"assets/images/avatar-5.jpg\" alt=\"\"\n                                                    class=\"user-avatar-md rounded-circle\"></div>\n                                            <div class=\"notification-list-user-block\"><span\n                                                    class=\"notification-list-user-name\">Jessica\n                                                    Caruso</span>accepted your invitation to join the team.\n                                                <div class=\"notification-date\">2 min ago</div>\n                                            </div>\n                                        </div>\n                                    </a>\n                                </div>\n                            </div>\n                        </li>\n                        <li>\n                            <div class=\"list-footer\"> <a href=\"#\">View all notifications</a></div>\n                        </li>\n                    </ul>\n                </li>\n                <li class=\"nav-item dropdown connection\">\n                    <a class=\"nav-link\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\n                        aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"fas fa-fw fa-th\"></i> </a>\n                    <ul class=\"dropdown-menu dropdown-menu-right connection-dropdown\">\n                        <li class=\"connection-list\">\n                            <div class=\"row\">\n                                <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 \">\n                                    <a href=\"#\" class=\"connection-item\"><img src=\"assets/images/github.png\" alt=\"\">\n                                        <span>Github</span></a>\n                                </div>\n                                <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 \">\n                                    <a href=\"#\" class=\"connection-item\"><img src=\"assets/images/dribbble.png\" alt=\"\">\n                                        <span>Dribbble</span></a>\n                                </div>\n                                <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 \">\n                                    <a href=\"#\" class=\"connection-item\"><img src=\"assets/images/dropbox.png\" alt=\"\">\n                                        <span>Dropbox</span></a>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 \">\n                                    <a href=\"#\" class=\"connection-item\"><img src=\"assets/images/bitbucket.png\" alt=\"\">\n                                        <span>Bitbucket</span></a>\n                                </div>\n                                <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 \">\n                                    <a href=\"#\" class=\"connection-item\"><img src=\"assets/images/mail_chimp.png\"\n                                            alt=\"\"><span>Mail chimp</span></a>\n                                </div>\n                                <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 \">\n                                    <a href=\"#\" class=\"connection-item\"><img src=\"assets/images/slack.png\" alt=\"\">\n                                        <span>Slack</span></a>\n                                </div>\n                            </div>\n                        </li>\n                        <li>\n                            <div class=\"conntection-footer\"><a href=\"#\">More</a></div>\n                        </li>\n                    </ul>\n                </li>\n                <li class=\"nav-item dropdown nav-user\">\n                    <a class=\"nav-link nav-user-img\" id=\"navbarDropdownMenuLink2\" data-toggle=\"dropdown\"\n                        aria-haspopup=\"true\" aria-expanded=\"false\"><img src=\"assets/images/avatar-1.jpg\" alt=\"\"\n                            class=\"user-avatar-md rounded-circle\"></a>\n                    <div class=\"dropdown-menu dropdown-menu-right nav-user-dropdown\"\n                        aria-labelledby=\"navbarDropdownMenuLink2\">\n                        <div class=\"nav-user-info\">\n                            <h5 class=\"mb-0 text-white nav-user-name\">John Abraham </h5>\n                            <span class=\"status\"></span><span class=\"ml-2\">Available</span>\n                        </div>\n                        <a class=\"dropdown-item\" href=\"#\"><i class=\"fas fa-user mr-2\"></i>Account</a>\n                        <a class=\"dropdown-item\" href=\"#\"><i class=\"fas fa-cog mr-2\"></i>Setting</a>\n                        <a class=\"dropdown-item\" (click)=\"logOut()\"><i class=\"fas fa-power-off mr-2\"></i>Logout</a>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </nav>\n</div>\n<!-- ============================================================== -->\n<!-- end navbar -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/structure/siderbaradmin/siderbaradmin.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/structure/siderbaradmin/siderbaradmin.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdminStructureSiderbaradminSiderbaradminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- left sidebar -->\n<!-- ============================================================== -->\n<div class=\"nav-left-sidebar sidebar-dark\">\n    <div class=\"menu-list\">\n        <nav class=\"navbar navbar-expand-lg navbar-light\">\n            <a class=\"d-xl-none d-lg-none\" href=\"#\">Dashboard</a>\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\n                aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span class=\"navbar-toggler-icon\"></span>\n            </button>\n\n            <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n                <ul class=\"navbar-nav flex-column\">\n                    <li class=\"nav-divider\">\n                        Menu\n                    </li>\n                    <li class=\"nav-item \">\n                        <a class=\"nav-link active\" href=\"#\" data-toggle=\"collapse\" aria-expanded=\"false\"\n                            data-target=\"#submenu-1\" aria-controls=\"submenu-1\"><i\n                                class=\"fa fa-fw fa-user-circle\"></i>Dashboard <span class=\"badge badge-success\">6</span>\n                        </a>\n                        <div id=\"submenu-1\" class=\"collapse submenu\">\n                            <ul class=\"nav flex-column\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" data-toggle=\"collapse\" aria-expanded=\"false\"\n                                        data-target=\"#submenu-1-2\" aria-controls=\"submenu-1-2\">Productos</a>\n                                    <div id=\"submenu-1-2\" class=\"collapse submenu\">\n                                        <ul class=\"nav flex-column\">\n\n                                            <li class=\"nav-item\">\n                                                <a class=\"nav-link\" [routerLink]=\"[ '/admin/products/list' ]\"\n                                                    routerLinkActive=\"active\">Lista Product </a>\n                                            </li>\n                                            <li class=\"nav-item\">\n                                                <a class=\"nav-link\" [routerLink]=\"[ '/admin/product/register' ]\"\n                                                    routerLinkActive=\"active\"> Registrar\n                                                    Productos</a>\n                                            </li>\n                                            <li class=\"nav-item\">\n                                                <a class=\"nav-link\" href=\"ecommerce-product-checkout.html\">Product\n                                                    Checkout</a>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" [routerLink]=\"[ '/admin/category' ]\"\n                                        routerLinkActive=\"active\">Categorias</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"dashboard-finance.html\">Finance</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"dashboard-sales.html\">Sales</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#\" data-toggle=\"collapse\" aria-expanded=\"false\"\n                                        data-target=\"#submenu-1-1\" aria-controls=\"submenu-1-1\">Infulencer</a>\n                                    <div id=\"submenu-1-1\" class=\"collapse submenu\" >\n                                        <ul class=\"nav flex-column\">\n                                            <li class=\"nav-item\">\n                                                <a class=\"nav-link\" href=\"dashboard-influencer.html\">Influencer</a>\n                                            </li>\n                                            <li class=\"nav-item\">\n                                                <a class=\"nav-link\" href=\"influencer-finder.html\">Influencer\n                                                    Finder</a>\n                                            </li>\n                                            <li class=\"nav-item\">\n                                                <a class=\"nav-link\" href=\"influencer-profile.html\">Influencer\n                                                    Profile</a>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </li>\n                    <a class=\"nav-link \"[routerLink]=\"[ '/public/index' ]\"\n                    routerLinkActive=\"active\"><i\n                            class=\"fa fa-fw fa-user-circle\"></i>Principal\n                    </a>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\" data-toggle=\"collapse\" aria-expanded=\"false\"\n                            data-target=\"#submenu-2\" aria-controls=\"submenu-2\"><i class=\"fa fa-fw fa-rocket\"></i>UI\n                            Elements</a>\n                        <div id=\"submenu-2\" class=\"collapse submenu\" style=\"\">\n                            <ul class=\"nav flex-column\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/cards.html\">Cards <span\n                                            class=\"badge badge-secondary\">New</span></a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/general.html\">General</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/carousel.html\">Carousel</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/listgroup.html\">List Group</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/typography.html\">Typography</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/accordions.html\">Accordions</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/tabs.html\">Tabs</a>\n                                </li>\n                            </ul>\n                        </div>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\" data-toggle=\"collapse\" aria-expanded=\"false\"\n                            data-target=\"#submenu-3\" aria-controls=\"submenu-3\"><i\n                                class=\"fas fa-fw fa-chart-pie\"></i>Chart</a>\n                        <div id=\"submenu-3\" class=\"collapse submenu\" style=\"\">\n                            <ul class=\"nav flex-column\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/chart-c3.html\">C3 Charts</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/chart-chartist.html\">Chartist Charts</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/chart-charts.html\">Chart</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/chart-morris.html\">Morris</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/chart-sparkline.html\">Sparkline</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/chart-gauge.html\">Guage</a>\n                                </li>\n                            </ul>\n                        </div>\n                    </li>\n                    <li class=\"nav-item \">\n                        <a class=\"nav-link\" href=\"#\" data-toggle=\"collapse\" aria-expanded=\"false\"\n                            data-target=\"#submenu-4\" aria-controls=\"submenu-4\"><i\n                                class=\"fab fa-fw fa-wpforms\"></i>Forms</a>\n                        <div id=\"submenu-4\" class=\"collapse submenu\" >\n                            <ul class=\"nav flex-column\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/form-elements.html\">Form Elements</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/form-validation.html\">Parsely Validations</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/multiselect.html\">Multiselect</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/datepicker.html\">Date Picker</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/bootstrap-select.html\">Bootstrap Select</a>\n                                </li>\n                            </ul>\n                        </div>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\" data-toggle=\"collapse\" aria-expanded=\"false\"\n                            data-target=\"#submenu-5\" aria-controls=\"submenu-5\"><i\n                                class=\"fas fa-fw fa-table\"></i>Tables</a>\n                        <div id=\"submenu-5\" class=\"collapse submenu\" style=\"\">\n                            <ul class=\"nav flex-column\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/general-table.html\">General Tables</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/data-tables.html\">Data Tables</a>\n                                </li>\n                            </ul>\n                        </div>\n                    </li>\n                    <li class=\"nav-divider\">\n                        Features\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\" data-toggle=\"collapse\" aria-expanded=\"false\"\n                            data-target=\"#submenu-6\" aria-controls=\"submenu-6\"><i class=\"fas fa-fw fa-file\"></i>\n                            Pages </a>\n                        <div id=\"submenu-6\" class=\"collapse submenu\" style=\"\">\n                            <ul class=\"nav flex-column\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/blank-page.html\">Blank Page</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/blank-page-header.html\">Blank Page Header</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/login.html\">Login</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/404-page.html\">404 page</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/sign-up.html\">Sign up Page</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/forgot-password.html\">Forgot Password</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/pricing.html\">Pricing Tables</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/timeline.html\">Timeline</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/calendar.html\">Calendar</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/sortable-nestable-lists.html\">Sortable/Nestable\n                                        List</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/widgets.html\">Widgets</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/media-object.html\">Media Objects</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/cropper-image.html\">Cropper</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/color-picker.html\">Color Picker</a>\n                                </li>\n                            </ul>\n                        </div>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\" data-toggle=\"collapse\" aria-expanded=\"false\"\n                            data-target=\"#submenu-7\" aria-controls=\"submenu-7\"><i class=\"fas fa-fw fa-inbox\"></i>Apps\n                            <span class=\"badge badge-secondary\">New</span></a>\n                        <div id=\"submenu-7\" class=\"collapse submenu\" style=\"\">\n                            <ul class=\"nav flex-column\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/inbox.html\">Inbox</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/email-details.html\">Email Detail</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/email-compose.html\">Email Compose</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/message-chat.html\">Message Chat</a>\n                                </li>\n                            </ul>\n                        </div>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\" data-toggle=\"collapse\" aria-expanded=\"false\"\n                            data-target=\"#submenu-8\" aria-controls=\"submenu-8\"><i\n                                class=\"fas fa-fw fa-columns\"></i>Icons</a>\n                        <div id=\"submenu-8\" class=\"collapse submenu\" style=\"\">\n                            <ul class=\"nav flex-column\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/icon-fontawesome.html\">FontAwesome Icons</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/icon-material.html\">Material Icons</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/icon-simple-lineicon.html\">Simpleline Icon</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/icon-themify.html\">Themify Icon</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/icon-flag.html\">Flag Icons</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/icon-weather.html\">Weather Icon</a>\n                                </li>\n                            </ul>\n                        </div>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\" data-toggle=\"collapse\" aria-expanded=\"false\"\n                            data-target=\"#submenu-9\" aria-controls=\"submenu-9\"><i\n                                class=\"fas fa-fw fa-map-marker-alt\"></i>Maps</a>\n                        <div id=\"submenu-9\" class=\"collapse submenu\" style=\"\">\n                            <ul class=\"nav flex-column\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/map-google.html\">Google Maps</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"pages/map-vector.html\">Vector Maps</a>\n                                </li>\n                            </ul>\n                        </div>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\" data-toggle=\"collapse\" aria-expanded=\"false\"\n                            data-target=\"#submenu-10\" aria-controls=\"submenu-10\"><i class=\"fas fa-f fa-folder\"></i>Menu\n                            Level</a>\n                        <div id=\"submenu-10\" class=\"collapse submenu\" style=\"\">\n                            <ul class=\"nav flex-column\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#\">Level 1</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#\" data-toggle=\"collapse\" aria-expanded=\"false\"\n                                        data-target=\"#submenu-11\" aria-controls=\"submenu-11\">Level 2</a>\n                                    <div id=\"submenu-11\" class=\"collapse submenu\" style=\"\">\n                                        <ul class=\"nav flex-column\">\n                                            <li class=\"nav-item\">\n                                                <a class=\"nav-link\" href=\"#\">Level 1</a>\n                                            </li>\n                                            <li class=\"nav-item\">\n                                                <a class=\"nav-link\" href=\"#\">Level 2</a>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#\">Level 3</a>\n                                </li>\n                            </ul>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n        </nav>\n    </div>\n</div>\n<!-- ============================================================== -->\n<!-- end left sidebar -->\n<!-- ============================================================== -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"contentLogin\">\n    <!-- ============================================================== -->\n    <!-- login page  -->\n    <!-- ============================================================== -->\n    <div class=\"splash-container\">\n        <div class=\"card \">\n            <div class=\"card-header text-center\"><a href=\"../index.html\"><img class=\"logo-img\"\n                        src=\"../assets/images/logo.png\" alt=\"logo\"></a><span class=\"splash-description\">Please enter\n                    your user information.</span></div>\n            <div class=\"card-body\">\n                <form [formGroup]=\"formLoginUser\">\n                    <div class=\"form-group\">\n                        <input class=\"form-control form-control-lg\" formControlName=\"email\" type=\"text\"\n                            placeholder=\"Correo\" autocomplete=\"off\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input class=\"form-control form-control-lg\" formControlName=\"password\" type=\"password\"\n                            placeholder=\"Contraseña\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"custom-control custom-checkbox\">\n                            <input class=\"custom-control-input\" type=\"checkbox\"><span\n                                class=\"custom-control-label\">Remember\n                                Me</span>\n                        </label>\n                    </div>\n                    <button type=\"submit\" [disabled]=\"formLoginUser.invalid\" (click)=\"login()\"\n                        class=\"btn btn-primary btn-lg btn-block\">Iniciar</button>\n                </form>\n            </div>\n            <div class=\"card-footer bg-white p-0  \">\n                <div class=\"row\">\n                    <div class=\"col-xs-1-12\">\n                        <div class=\"card-footer-item card-footer-item-bordered\">\n                            <a [routerLink]=\"['/sigin']\" routerLinkActive=\"router-link-active\" class=\"footer-link\">Crea\n                                una Cuenta</a></div>\n                    </div>\n                    <div class=\"col-xs-1-12\">\n                        <div class=\"card-footer-item card-footer-item-bordered\">\n                            <a href=\"#\" class=\"footer-link\">Forgot Password</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/public/carousel/carousel.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/public/carousel/carousel.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPublicCarouselCarouselComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"imgfront mb-3\">\n    <img [src]=\"images[0]\" class=\"d-block w-100\" alt=\"...\">\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/public/footer/footer.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/public/footer/footer.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPublicFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/public/header/header.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/public/header/header.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPublicHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-light fixed-top  nav\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/public/index']\" routerLinkActive=\"router-link-active\"><img class=\"logo\"\n            src=\"assets/logos/cfsl.png\" alt=\"\"></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\"\n        aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n        <ul class=\"navbar-nav mr-auto\">\n        </ul>\n        <ul class=\"navbar-nav \">\n            <li class=\"nav-item active\">\n                <a class=\"nav-link\" [routerLink]=\"['/public/index']\" routerLinkActive=\"router-link-active\">Inicio <span\n                        class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/public/categories']\"\n                    routerLinkActive=\"router-link-active\">Categorias</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/public/cart']\" routerLinkActive=\"router-link-active\"><i\n                        class=\"fas fa-shopping-cart\"></i></a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\"><i class=\"fas fa-user\"></i></a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\"><i class=\"fas fa-sign-out-alt\"></i></a>\n            </li>\n\n        </ul>\n    </div>\n</nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/public/index/index.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/public/index/index.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPublicIndexIndexComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Marketing messaging and featurettes\n  ================================================== -->\n<!-- Wrap the rest of the page in another container to center all the content. -->\n\n<app-carousel></app-carousel>\n<div class=\"container marketing\">\n  <hr>\n  <!-- Three columns of text below the carousel -->\n  <h3 class=\"text-center\"> Populares</h3>\n\n  <hr>\n  <div class=\" row\">\n    <div class=\"col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12\" *ngFor=\"let product of products\">\n      <app-cards [product]=\"product\"></app-cards>\n    </div>\n\n\n\n    <hr class=\"featurette-divider\">\n\n    <div class=\"row featurette\">\n      <div class=\"col-md-3\">\n        <h2 class=\"featurette-heading\">First featurette heading. <span class=\"text-muted\">It’ll blow your mind.</span>\n        </h2>\n        <p class=\"lead\">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod\n          semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus\n          commodo.</p>\n      </div>\n      <div class=\"col-md-9\">\n        <svg class=\"bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto\" width=\"100%\"\n          height=\"300\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\"\n          role=\"img\" aria-label=\"Placeholder: 500x500\">\n          <title>Placeholder</title>\n          <rect width=\"100%\" height=\"100%\" fill=\"#eee\" /><text x=\"50%\" y=\"50%\" fill=\"#aaa\" dy=\".3em\">500x500</text>\n        </svg>\n      </div>\n    </div>\n\n    <hr class=\"featurette-divider\">\n\n    <div class=\"row featurette\">\n      <div class=\"col-md-7 order-md-2\">\n        <h2 class=\"featurette-heading\">Oh yeah, it’s that good. <span class=\"text-muted\">See for yourself.</span></h2>\n        <p class=\"lead\">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod\n          semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus\n          commodo.</p>\n      </div>\n      <div class=\"col-md-5 order-md-1\">\n        <svg class=\"bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto\" width=\"500\"\n          height=\"500\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\"\n          role=\"img\" aria-label=\"Placeholder: 500x500\">\n          <title>Placeholder</title>\n          <rect width=\"100%\" height=\"100%\" fill=\"#eee\" /><text x=\"50%\" y=\"50%\" fill=\"#aaa\" dy=\".3em\">500x500</text>\n        </svg>\n      </div>\n    </div>\n\n    <hr class=\"featurette-divider\">\n\n    <div class=\"row featurette\">\n      <div class=\"col-md-7\">\n        <h2 class=\"featurette-heading\">And lastly, this one. <span class=\"text-muted\">Checkmate.</span></h2>\n        <p class=\"lead\">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod\n          semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus\n          commodo.</p>\n      </div>\n      <div class=\"col-md-5\">\n        <svg class=\"bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto\" width=\"500\"\n          height=\"500\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\"\n          role=\"img\" aria-label=\"Placeholder: 500x500\">\n          <title>Placeholder</title>\n          <rect width=\"100%\" height=\"100%\" fill=\"#eee\" /><text x=\"50%\" y=\"50%\" fill=\"#aaa\" dy=\".3em\">500x500</text>\n        </svg>\n      </div>\n    </div>\n\n    <hr class=\"featurette-divider\">\n  </div><!-- /.container -->\n\n  <!-- /END THE FEATURETTES -->\n\n  <app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/public/product/product.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/public/product/product.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPublicProductProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- ============================================================== -->\n<div class=\"dashboard-wrapper\">\n    <div class=\"dashboard-ecommerce\">\n        <div class=\"container-fluid dashboard-content \">\n            <!-- ============================================================== -->\n            <!-- pageheader  -->\n            <!-- ============================================================== -->\n            <div class=\"row\">\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\n                    <div class=\"page-header\">\n                        <h2 class=\"pageheader-title\">E-commerce Product Single </h2>\n                        <p class=\"pageheader-text\">Nulla euismod urna eros, sit amet scelerisque torton lectus vel\n                            mauris facilisis faucibus at enim quis massa lobortis rutrum.</p>\n                        <div class=\"page-breadcrumb\">\n                            <nav aria-label=\"breadcrumb\">\n                                <ol class=\"breadcrumb\">\n                                    <li class=\"breadcrumb-item\"><a href=\"#\" class=\"breadcrumb-link\">E-coommerce</a></li>\n                                    <li class=\"breadcrumb-item active\" aria-current=\"page\">E-Commerce Product Single\n                                    </li>\n                                </ol>\n                            </nav>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- ============================================================== -->\n            <!-- end pageheader  -->\n            <!-- ============================================================== -->\n            <div class=\"row\">\n                <div class=\"offset-xl-2 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12\">\n                    <div class=\"row\">\n                        <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 pr-xl-0 pr-lg-0 pr-md-0  m-b-30\">\n                            <div class=\"product-slider\">\n                                <div id=\"productslider-1\" class=\"product-carousel carousel slide\" data-ride=\"carousel\">\n                                    <ol class=\"carousel-indicators\">\n                                        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\">\n                                        </li>\n                                        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n                                        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n                                    </ol>\n                                    <div class=\"carousel-inner\">\n                                        <div class=\"carousel-item active\">\n                                            <img class=\"d-block\" src=\"assets/images/eco-slider-img-1.png\"\n                                                alt=\"First slide\">\n                                        </div>\n                                        <div class=\"carousel-item\">\n                                            <img class=\"d-block\" src=\"assets/images/eco-slider-img-2.png\"\n                                                alt=\"Second slide\">\n                                        </div>\n                                        <div class=\"carousel-item\">\n                                            <img class=\"d-block\" src=\"assets/images/eco-slider-img-3.png\"\n                                                alt=\"Third slide\">\n                                        </div>\n                                    </div>\n                                    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\"\n                                        data-slide=\"prev\">\n                                        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                                        <span class=\"sr-only\">Previous</span>\n                                    </a>\n                                    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\"\n                                        data-slide=\"next\">\n                                        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                                        <span class=\"sr-only\">Next</span>\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                        <div\n                            class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 pl-xl-0 pl-lg-0 pl-md-0 border-left m-b-30\">\n                            <div class=\"product-details\">\n                                <div class=\"border-bottom pb-3 mb-3\">\n                                    <h2 class=\"mb-3\">T-Shirt Product Title</h2>\n                                    <div class=\"product-rating d-inline-block float-right\">\n                                        <i class=\"fa fa-fw fa-star\"></i>\n                                        <i class=\"fa fa-fw fa-star\"></i>\n                                        <i class=\"fa fa-fw fa-star\"></i>\n                                        <i class=\"fa fa-fw fa-star\"></i>\n                                        <i class=\"fa fa-fw fa-star\"></i>\n                                    </div>\n                                    <h3 class=\"mb-0 text-primary\">$49.00</h3>\n                                </div>\n                                <div class=\"product-colors border-bottom\">\n                                    <h4>Select Colors</h4>\n                                    <input type=\"radio\" class=\"radio\" id=\"radio-1\" name=\"group\" />\n                                    <label for=\"radio-1\"></label>\n                                    <input type=\"radio\" class=\"radio\" id=\"radio-2\" name=\"group\" />\n                                    <label for=\"radio-2\"></label>\n                                    <input type=\"radio\" class=\"radio\" id=\"radio-3\" name=\"group\" />\n                                    <label for=\"radio-3\"></label>\n                                </div>\n                                <div class=\"product-size border-bottom\">\n                                    <h4>Size</h4>\n                                    <div class=\"btn-group\" role=\"group\" aria-label=\"First group\">\n                                        <button type=\"button\" class=\"btn btn-outline-light\">SM</button>\n                                        <button type=\"button\" class=\"btn btn-outline-light\">L</button>\n                                        <button type=\"button\" class=\"btn btn-outline-light\">XL</button>\n                                        <button type=\"button\" class=\"btn btn-outline-light\">XXl</button>\n                                    </div>\n                                    <div class=\"product-qty\">\n                                        <h4>Quantity</h4>\n                                        <div class=\"quantity\">\n                                            <input type=\"number\" min=\"1\" max=\"9\" step=\"1\" value=\"1\">\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"product-description\">\n                                    <h4 class=\"mb-1\">Descriptions</h4>\n                                    <p>Praesent et cursus quam. Etiam vulputate est et metus pellentesque iaculis.\n                                        Suspendisse nec urna augue. Vestibulum ante ipsum primis in faucibus orci luctus\n                                        et ultrices posuere cubilia Curae;</p>\n                                    <a href=\"#\" class=\"btn btn-primary btn-block btn-lg\">Add to Cart</a>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 m-b-60\">\n                            <div class=\"simple-card\">\n                                <ul class=\"nav nav-tabs\" id=\"myTab5\" role=\"tablist\">\n                                    <li class=\"nav-item\">\n                                        <a class=\"nav-link active border-left-0\" id=\"product-tab-1\" data-toggle=\"tab\"\n                                            href=\"#tab-1\" role=\"tab\" aria-controls=\"product-tab-1\"\n                                            aria-selected=\"true\">Descriptions</a>\n                                    </li>\n                                    <li class=\"nav-item\">\n                                        <a class=\"nav-link\" id=\"product-tab-2\" data-toggle=\"tab\" href=\"#tab-2\"\n                                            role=\"tab\" aria-controls=\"product-tab-2\" aria-selected=\"false\">Reviews</a>\n                                    </li>\n                                </ul>\n                                <div class=\"tab-content\" id=\"myTabContent5\">\n                                    <div class=\"tab-pane fade show active\" id=\"tab-1\" role=\"tabpanel\"\n                                        aria-labelledby=\"product-tab-1\">\n                                        <p>Praesent et cursus quam. Etiam vulputate est et metus pellentesque iaculis.\n                                            Suspendisse nec urna augue. Vestibulum ante ipsum primis in faucibus orci\n                                            luctus et ultrices posuere cubiliaurae.</p>\n                                        <p>Nam condimentum erat aliquet rutrum fringilla. Suspendisse potenti.\n                                            Vestibulum placerat elementum sollicitudin. Aliquam consequat molestie\n                                            tortor, et dignissim quam blandit nec. Donec tincidunt dui libero, ac\n                                            convallis urna dapibus eu. Praesent volutpat mi eget diam efficitur, a\n                                            mollis quam ultricies. Morbi eu turpis odio.</p>\n                                        <ul class=\"list-unstyled arrow\">\n                                            <li>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>\n                                            <li>Donec ut elit sodales, dignissim elit et, sollicitudin nulla.</li>\n                                            <li>Donec at leo sed nisl vestibulum fermentum.\n                                            </li>\n                                        </ul>\n                                    </div>\n                                    <div class=\"tab-pane fade\" id=\"tab-2\" role=\"tabpanel\"\n                                        aria-labelledby=\"product-tab-2\">\n                                        <div class=\"review-block\">\n                                            <p class=\"review-text font-italic m-0\">“Vestibulum cursus felis vel arcu\n                                                convallis, viverra commodo felis bibendum. Orci varius natoque penatibus\n                                                et magnis dis parturient montes, nascetur ridiculus mus. Proin non\n                                                auctor est, sed lacinia velit. Orci varius natoque penatibus et magnis\n                                                dis parturient montes nascetur ridiculus mus.”</p>\n                                            <div class=\"rating-star mb-4\">\n                                                <i class=\"fa fa-fw fa-star\"></i>\n                                                <i class=\"fa fa-fw fa-star\"></i>\n                                                <i class=\"fa fa-fw fa-star\"></i>\n                                                <i class=\"fa fa-fw fa-star\"></i>\n                                                <i class=\"fa fa-fw fa-star\"></i>\n                                            </div>\n                                            <span class=\"text-dark font-weight-bold\">Virgina G. Lightfoot</span><small\n                                                class=\"text-mute\"> (Company name)</small>\n                                        </div>\n                                        <div class=\"review-block border-top mt-3 pt-3\">\n                                            <p class=\"review-text font-italic m-0\">“Integer pretium laoreet mi ultrices\n                                                tincidunt. Suspendisse eget risus nec sapien malesuada ullamcorper eu ac\n                                                sapien. Maecenas nulla orci, varius ac tincidunt non, ornare a sem.\n                                                Aliquam sed massa volutpat, aliquet nibh sit amet, tincidunt ex. Donec\n                                                interdum pharetra dignissim.”</p>\n                                            <div class=\"rating-star mb-4\">\n                                                <i class=\"fa fa-fw fa-star\"></i>\n                                                <i class=\"fa fa-fw fa-star\"></i>\n                                                <i class=\"fa fa-fw fa-star\"></i>\n                                                <i class=\"fa fa-fw fa-star\"></i>\n                                                <i class=\"fa fa-fw fa-star\"></i>\n                                            </div>\n                                            <span class=\"text-dark font-weight-bold\">Ruby B. Matheny</span><small\n                                                class=\"text-mute\"> (Company name)</small>\n                                        </div>\n                                        <div class=\"review-block  border-top mt-3 pt-3\">\n                                            <p class=\"review-text font-italic m-0\">“ Cras non rutrum neque. Sed lacinia\n                                                ex elit, vel viverra nisl faucibus eu. Aenean faucibus neque vestibulum\n                                                condimentum maximus. In id porttitor nisi. Quisque sit amet commodo\n                                                arcu, cursus pharetra elit. Nam tincidunt lobortis augueat euismod ante\n                                                sodales non. ”</p>\n                                            <div class=\"rating-star mb-4\">\n                                                <i class=\"fa fa-fw fa-star\"></i>\n                                                <i class=\"fa fa-fw fa-star\"></i>\n                                                <i class=\"fa fa-fw fa-star\"></i>\n                                                <i class=\"fa fa-fw fa-star\"></i>\n                                                <i class=\"fa fa-fw fa-star\"></i>\n                                            </div>\n                                            <span class=\"text-dark font-weight-bold\">Gloria S. Castillo</span><small\n                                                class=\"text-mute\"> (Company name)</small>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 m-b-10\">\n                            <h3> Related Products</h3>\n                        </div>\n                        <div class=\"col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12\">\n                            <div class=\"product-thumbnail\">\n                                <div class=\"product-img-head\">\n                                    <div class=\"product-img\">\n                                        <img src=\"assets/images/eco-product-img-1.png\" alt=\"\" class=\"img-fluid\"></div>\n                                    <div class=\"ribbons\">New</div>\n                                    <div class=\"\"><a href=\"#\" class=\"product-wishlist-btn\"><i\n                                                class=\"fas fa-heart\"></i></a></div>\n                                </div>\n                                <div class=\"product-content\">\n                                    <div class=\"product-content-head\">\n                                        <h3 class=\"product-title\">T-Shirt Product Title</h3>\n                                        <div class=\"product-rating d-inline-block\">\n                                            <i class=\"fa fa-fw fa-star\"></i>\n                                            <i class=\"fa fa-fw fa-star\"></i>\n                                            <i class=\"fa fa-fw fa-star\"></i>\n                                            <i class=\"fa fa-fw fa-star\"></i>\n                                            <i class=\"fa fa-fw fa-star\"></i>\n                                        </div>\n                                        <div class=\"product-price\">$49.00</div>\n                                    </div>\n                                    <div class=\"product-btn\">\n                                        <a href=\"#\" class=\"btn btn-primary\">Add to Cart</a>\n                                        <a href=\"#\" class=\"btn btn-outline-light\">Details</a>\n                                        <a href=\"#\" class=\"btn btn-outline-light\"><i\n                                                class=\"fas fa-exchange-alt\"></i></a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12\">\n                            <div class=\"product-thumbnail\">\n                                <div class=\"product-img-head\">\n                                    <div class=\"product-img\">\n                                        <img src=\"assets/images/eco-product-img-2.png\" alt=\"\" class=\"img-fluid\"></div>\n                                    <div class=\"ribbons bg-danger\">Sold</div>\n                                    <div class=\"\"><a href=\"#\" class=\"product-wishlist-btn\"><i\n                                                class=\"fas fa-heart\"></i></a></div>\n                                </div>\n                                <div class=\"product-content\">\n                                    <div class=\"product-content-head\">\n                                        <h3 class=\"product-title\">T-Shirt Product Title</h3>\n                                        <div class=\"product-rating d-inline-block\">\n                                            <i class=\"fa fa-fw fa-star\"></i>\n                                            <i class=\"fa fa-fw fa-star\"></i>\n                                            <i class=\"fa fa-fw fa-star\"></i>\n                                            <i class=\"fa fa-fw fa-star\"></i>\n                                            <i class=\"fa fa-fw fa-star\"></i>\n                                        </div>\n                                        <div class=\"product-price\">$49.00</div>\n                                    </div>\n                                    <div class=\"product-btn\">\n                                        <a href=\"#\" class=\"btn btn-primary\">Add to Cart</a>\n                                        <a href=\"#\" class=\"btn btn-outline-light\">Details</a>\n                                        <a href=\"#\" class=\"btn btn-outline-light\"><i\n                                                class=\"fas fa-exchange-alt\"></i></a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12\">\n                            <div class=\"product-thumbnail\">\n                                <div class=\"product-img-head\">\n                                    <div class=\"product-img\">\n                                        <img src=\"assets/images/eco-product-img-3.png\" alt=\"\" class=\"img-fluid\"></div>\n                                    <div class=\"ribbons bg-brand\">Offer</div>\n                                    <div class=\"\"><a href=\"#\" class=\"product-wishlist-btn active\"><i\n                                                class=\"fas fa-heart\"></i></a></div>\n                                </div>\n                                <div class=\"product-content\">\n                                    <div class=\"product-content-head\">\n                                        <h3 class=\"product-title\">T-Shirt Product Title</h3>\n                                        <div class=\"product-rating d-inline-block\">\n                                            <i class=\"fa fa-fw fa-star\"></i>\n                                            <i class=\"fa fa-fw fa-star\"></i>\n                                            <i class=\"fa fa-fw fa-star\"></i>\n                                            <i class=\"fa fa-fw fa-star\"></i>\n                                            <i class=\"fa fa-fw fa-star\"></i>\n                                        </div>\n                                        <div class=\"product-price\">$49.00\n                                            <del class=\"product-del\">$69.00</del>\n                                        </div>\n                                    </div>\n                                    <div class=\"product-btn\">\n                                        <a href=\"#\" class=\"btn btn-primary\">Add to Cart</a>\n                                        <a href=\"#\" class=\"btn btn-outline-light\">Details</a>\n                                        <a href=\"#\" class=\"btn btn-outline-light\"><i\n                                                class=\"fas fa-exchange-alt\"></i></a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/public/public.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/public/public.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPublicPublicComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n\n\n\n<router-outlet (activate)=\"onActivate($event)\"></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/public/publiccart/publiccart.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/public/publiccart/publiccart.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPublicPubliccartPubliccartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Marketing messaging and featurettes\n  ================================================== -->\n<!-- Wrap the rest of the page in another container to center all the content. -->\n\n<div class=\"container marketing\">\n    <hr>\n    <!-- Three columns of text below the carousel -->\n    <h3 class=\"text-center\"> Carrito</h3>\n\n    <hr>\n    <div class=\"row\">\n        <div class=\"col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12\">\n            <div *ngFor=\"let item of items; let i = index\" class=\"col-12\">\n                <div class=\"row\">\n                    <div class=\"col-xl-3 col-lg-3 col-md-4 col-sm-4 col-12\">\n                        <img class=\"size-image\" src=\"{{item.product.images[0].url}}\" alt=\"\">\n                    </div>\n                    <div class=\"col-xl-6 col-lg-6 col-md-4 col-sm-4 col-8\">\n                        <a [routerLink]=\"['/public/product/', item.product_id]\" routerLinkActive=\"router-link-active\">\n                            <h4>{{item.product.name}}</h4>\n                        </a>\n                        <ng-container *ngFor=\"let size of item.product.sizes\">\n                            <div *ngIf=\"size.id == item.size_id\">\n                                <div>Talla seleccionada: {{size.size}}</div>\n                                <div>Disponibles: {{size.products_sizes.quantity}}</div>\n\n                            </div>\n                        </ng-container>\n                        <div>Precio por Unidad:{{item.product.price}} Bfs</div>\n                        <ng-container *ngFor=\"let size of item.product.sizes\">\n                            <div class=\"form-row align-items-center\" *ngIf=\"size.id == item.size_id\">\n                                <div class=\"col-auto my-1\">\n                                    <label class=\"mr-sm-2 sr-only\" for=\"inlineFormCustomSelect\">Preference</label>\n                                    <select [(ngModel)]=\"item.quantity\" (change)=\"updateTotal()\"\n                                        class=\"custom-select mr-sm-2\" id=\"inlineFormCustomSelect\">\n                                        <option *ngFor=\"let count of selects[i];let ind = index\" value=\"{{count}}\">cant:\n                                            {{count}}\n                                        </option>\n\n                                    </select>\n                                </div>\n\n                            </div>\n                        </ng-container>\n\n                    </div>\n                    <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-4\">\n                        <p>Total :{{item.product.price*item.quantity}} Bfs</p>\n                        <button type=\"button\" name=\"\" id=\"\" class=\"btn btn-danger\"\n                            (click)=\"deletoToCart(item.id)\">eliminar</button>\n                    </div>\n\n                </div>\n                <hr class=\"featurette-divider\">\n            </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12\">\n            <div class=\"product-sidebar\">\n                <div class=\"product-sidebar-widget\">\n                    <h4 class=\"mb-0\">Estas listo para Realizar tu Compra?</h4>\n                </div>\n                <div class=\"product-sidebar-widget\">\n                    <p>Al realizar el pago su envio se estaralizando lo mas pronto posible </p>\n                    <div>Total a Pagar: {{total}} Bsf</div>\n                    <br>\n                    <ng-container *ngIf=\"items.length > 0; else elseTemplate\">\n                        <button type=\"button\" (click)=\"send()\" name=\"\" id=\"\" class=\"btn  pink-button\">Realizar\n                            pago</button>\n                    </ng-container>\n                    <ng-template #elseTemplate>\n\n                    </ng-template>\n\n\n                </div>\n\n\n            </div>\n\n        </div>\n    </div>\n    <hr class=\"featurette-divider\">\n    <h3 class=\"text-center\"> Ofertas</h3>\n    <hr class=\"featurette-divider\">\n    <div class=\" row\">\n        <div class=\"col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12\" *ngFor=\"let ofert of oferts\">\n            <app-cards [product]=\"ofert\" (reloadCart)=\"getCart()\"></app-cards>\n        </div>\n\n    </div><!-- /.container -->\n\n\n    <!-- /END THE FEATURETTES -->\n\n    <app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/public/publiccategories/publiccategories.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/public/publiccategories/publiccategories.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPublicPubliccategoriesPubliccategoriesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Marketing messaging and featurettes\n  ================================================== -->\n<!-- Wrap the rest of the page in another container to center all the content. -->\n\n<!-- ============================================================== -->\n<!-- main wrapper -->\n<!-- ============================================================== -->\n\n\n<!-- ============================================================== -->\n<!-- ============================================================== -->\n<!-- wrapper  -->\n<!-- ============================================================== -->\n\n<div class=\"container-fluid dashboard-content \">\n    <!-- ============================================================== -->\n    <!-- pageheader  -->\n    <!-- ============================================================== -->\n    <div class=\"row\">\n        <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\n            <div class=\"page-header\">\n                <h2 class=\"pageheader-title\">Concept - Bootstrap 4 Admin Dashboard Template </h2>\n                <p class=\"pageheader-text\">Nulla euismod urna eros, sit amet scelerisque torton lectus vel\n                    mauris facilisis faucibus at enim quis massa lobortis rutrum.</p>\n                <div class=\"page-breadcrumb\">\n                    <nav aria-label=\"breadcrumb\">\n                        <ol class=\"breadcrumb\">\n                            <li class=\"breadcrumb-item\"><a href=\"#\" class=\"breadcrumb-link\">E-coommerce</a>\n                            </li>\n                            <li class=\"breadcrumb-item active\" aria-current=\"page\">Concept - Bootstrap 4\n                                Admin Dashboard Template</li>\n                        </ol>\n                    </nav>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- ============================================================== -->\n    <!-- end pageheader  -->\n    <!-- ============================================================== -->\n    <div class=\"row\">\n        <div class=\"col-xl-9 col-lg-8 col-md-8 col-sm-12 col-12\">\n            <div class=\"row\">\n                <div class=\"col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12\" *ngFor=\"let product of products\">\n                    <app-cards [product]=\"product\"></app-cards>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12\">\n            <div class=\"product-sidebar\">\n                <div class=\"product-sidebar-widget\">\n                    <h4 class=\"mb-0\">E-Commerce Filter</h4>\n                </div>\n                <div class=\"product-sidebar-widget\">\n                    <h4 class=\"product-sidebar-widget-title\">Categorias</h4>\n                    <div *ngFor=\"let category of categories\" class=\"custom-control custom-checkbox\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" (click)=\"selectCategory(category.id)\"\n                            id=\"cat-{{category.id}}\">\n                        <label class=\"custom-control-label\" for=\"cat-{{category.id}}\">{{category.category}}</label>\n                    </div>\n                </div>\n                <div class=\"product-sidebar-widget\">\n                    <h4 class=\"product-sidebar-widget-title\">Tallas</h4>\n                    <div *ngFor=\"let size of sizes\" class=\"custom-control custom-checkbox\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"size-{{size.id}}\"\n                            (click)=\"selectSize(size.id)\">\n                        <label class=\"custom-control-label\" for=\"size-{{size.id}}\">{{size.size}}</label>\n                    </div>\n                </div>\n                <div class=\"product-sidebar-widget\">\n                    <h4 class=\"product-sidebar-widget-title\">Brand</h4>\n                    <div class=\"custom-control custom-checkbox\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"brand-1\">\n                        <label class=\"custom-control-label\" for=\"brand-1\">Brand Name #1</label>\n                    </div>\n                    <div class=\"custom-control custom-checkbox\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"brand-2\">\n                        <label class=\"custom-control-label\" for=\"brand-2\">Brand Name #2</label>\n                    </div>\n                    <div class=\"custom-control custom-checkbox\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"brand-3\">\n                        <label class=\"custom-control-label\" for=\"brand-3\">Brand Name #3</label>\n                    </div>\n                    <div class=\"custom-control custom-checkbox\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"brand-4\">\n                        <label class=\"custom-control-label\" for=\"brand-4\">Brand Name #4</label>\n                    </div>\n                </div>\n                <div class=\"product-sidebar-widget\">\n                    <h4 class=\"product-sidebar-widget-title\">Color</h4>\n                    <div class=\"custom-control custom-radio custom-color-blue \">\n                        <input type=\"radio\" id=\"color-1\" name=\"customRadio\" class=\"custom-control-input\">\n                        <label class=\"custom-control-label\" for=\"color-1\">Blue</label>\n                    </div>\n                    <div class=\"custom-control custom-radio custom-color-red \">\n                        <input type=\"radio\" id=\"color-2\" name=\"customRadio\" class=\"custom-control-input\">\n                        <label class=\"custom-control-label\" for=\"color-2\">Red</label>\n                    </div>\n                    <div class=\"custom-control custom-radio custom-color-yellow \">\n                        <input type=\"radio\" id=\"color-3\" name=\"customRadio\" class=\"custom-control-input\">\n                        <label class=\"custom-control-label\" for=\"color-3\">Yellow</label>\n                    </div>\n                    <div class=\"custom-control custom-radio custom-color-black \">\n                        <input type=\"radio\" id=\"color-4\" name=\"customRadio\" class=\"custom-control-input\">\n                        <label class=\"custom-control-label\" for=\"color-4\">Black</label>\n                    </div>\n                </div>\n                <div class=\"product-sidebar-widget\">\n                    <h4 class=\"product-sidebar-widget-title\">Price</h4>\n                    <div class=\"custom-control custom-checkbox\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"price-1\">\n                        <label class=\"custom-control-label\" for=\"price-1\">$$</label>\n                    </div>\n                    <div class=\"custom-control custom-checkbox\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"price-2\">\n                        <label class=\"custom-control-label\" for=\"price-2\">$$$</label>\n                    </div>\n                    <div class=\"custom-control custom-checkbox\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"price-3\">\n                        <label class=\"custom-control-label\" for=\"price-3\">$$$$</label>\n                    </div>\n                </div>\n                <div class=\"product-sidebar-widget\">\n                    <a href=\"#\" class=\"btn btn-outline-light\">Reset Filter</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- ============================================================== -->\n<!-- footer -->\n<!-- ============================================================== -->\n<div class=\"footer\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12\">\n                Copyright © 2018 Concept. All rights reserved. Dashboard by <a\n                    href=\"https://colorlib.com/wp/\">Colorlib</a>.\n            </div>\n            <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12\">\n                <div class=\"text-md-right footer-links d-none d-sm-block\">\n                    <a href=\"javascript: void(0);\">About</a>\n                    <a href=\"javascript: void(0);\">Support</a>\n                    <a href=\"javascript: void(0);\">Contact Us</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- ============================================================== -->\n<!-- end footer -->\n<!-- ============================================================== -->\n\n\n<!-- ============================================================== -->\n<!-- end main wrapper  -->\n<!-- ============================================================== -->\n\n\n\n\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/public/publicproduct/publicproduct.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/public/publicproduct/publicproduct.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPublicPublicproductPublicproductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid dashboard-content margintop \">\n    <button name=\"\" id=\"\" class=\"btn pink-button\" (click)=\"goBack()\" role=\"button\">Volver</button>\n    <div class=\"row\">\n        <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 pr-xl-0 pr-lg-0 pr-md-0  m-b-30\">\n            <div class=\"product-slider\">\n                <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n                    <div class=\"carousel-inner\">\n                        <div *ngFor=\"let image of product.images,let c=index\" class=\"carousel-item \"\n                            [ngClass]=\"{'active': c==0}\">\n                            <img src=\"{{image.url}}\" class=\"d-block w-100\" alt=\"...\">\n                        </div>\n\n                    </div>\n                    <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n                        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                        <span class=\"sr-only\">Previous</span>\n                    </a>\n                    <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n                        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                        <span class=\"sr-only\">Next</span>\n                    </a>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 pl-xl-0 pl-lg-0 pl-md-0 border-left m-b-30\">\n            <div class=\"product-details\">\n                <div class=\"border-bottom pb-3 mb-3\">\n                    <h2 class=\"mb-3\">{{product.name}}</h2>\n                    <div class=\"product-rating d-inline-block float-right\">\n                        <i class=\"fa fa-fw fa-star\"></i>\n                        <i class=\"fa fa-fw fa-star\"></i>\n                        <i class=\"fa fa-fw fa-star\"></i>\n                        <i class=\"fa fa-fw fa-star\"></i>\n                        <i class=\"fa fa-fw fa-star\"></i>\n                    </div>\n                    <h3 class=\"mb-0 text-primary\">{{product.price }}$</h3>\n                </div>\n                <form [formGroup]=\"formToAddCart\">\n                    <div class=\"product-size border-bottom\">\n                        <h4>Size</h4>\n                        <div class=\"btn-group\" role=\"group\" aria-label=\"First group\">\n                            <button *ngFor=\"let size of product.sizes\" type=\"button\" class=\"btn btn-outline-light\"\n                                (click)=\"formToAddCart.value.size=size.id\">{{size.size}}:{{size.products_sizes.quantity}}</button>\n                        </div>\n                        <div class=\"product-qty\">\n                            <h4>Quantity</h4>\n                            <div class=\"quantity\">\n                                <input type=\"number\" formControlName=\"quantity\" min=\"1\" max=\"9\" step=\"1\" value=\"1\">\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"product-description\">\n                        <h4 class=\"mb-1\">Descripción</h4>\n                        <p>{{product.description}}</p>\n                        <button [disabled]=\"formToAddCart.value.size == ''\" (click)=\"addToCart()\"\n                            class=\"btn btn-primary btn-block btn-lg\">Agregar al Carrito</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n        <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 m-b-60\">\n            <div class=\"simple-card\">\n                <ul class=\"nav nav-tabs\" id=\"myTab5\" role=\"tablist\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link active border-left-0\" id=\"product-tab-1\" data-toggle=\"tab\" href=\"#tab-1\"\n                            role=\"tab\" aria-controls=\"product-tab-1\" aria-selected=\"true\">Descriptions</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" id=\"product-tab-2\" data-toggle=\"tab\" href=\"#tab-2\" role=\"tab\"\n                            aria-controls=\"product-tab-2\" aria-selected=\"false\">Reviews</a>\n                    </li>\n                </ul>\n                <div class=\"tab-content\" id=\"myTabContent5\">\n                    <div class=\"tab-pane fade show active\" id=\"tab-1\" role=\"tabpanel\" aria-labelledby=\"product-tab-1\">\n                        {{product.description}}\n\n                    </div>\n                    <div class=\"tab-pane fade\" id=\"tab-2\" role=\"tabpanel\" aria-labelledby=\"product-tab-2\">\n                        <div class=\"review-block\">\n                            <p class=\"review-text font-italic m-0\">“Vestibulum cursus felis vel\n                                arcu convallis, viverra commodo felis bibendum. Orci varius\n                                natoque penatibus et magnis dis parturient montes, nascetur\n                                ridiculus mus. Proin non auctor est, sed lacinia velit. Orci\n                                varius natoque penatibus et magnis dis parturient montes\n                                nascetur ridiculus mus.”</p>\n                            <div class=\"rating-star mb-4\">\n                                <i class=\"fa fa-fw fa-star\"></i>\n                                <i class=\"fa fa-fw fa-star\"></i>\n                                <i class=\"fa fa-fw fa-star\"></i>\n                                <i class=\"fa fa-fw fa-star\"></i>\n                                <i class=\"fa fa-fw fa-star\"></i>\n                            </div>\n                            <span class=\"text-dark font-weight-bold\">Virgina G.\n                                Lightfoot</span><small class=\"text-mute\"> (Company name)</small>\n                        </div>\n                        <div class=\"review-block border-top mt-3 pt-3\">\n                            <p class=\"review-text font-italic m-0\">“Integer pretium laoreet mi\n                                ultrices tincidunt. Suspendisse eget risus nec sapien malesuada\n                                ullamcorper eu ac sapien. Maecenas nulla orci, varius ac\n                                tincidunt non, ornare a sem. Aliquam sed massa volutpat, aliquet\n                                nibh sit amet, tincidunt ex. Donec interdum pharetra dignissim.”\n                            </p>\n                            <div class=\"rating-star mb-4\">\n                                <i class=\"fa fa-fw fa-star\"></i>\n                                <i class=\"fa fa-fw fa-star\"></i>\n                                <i class=\"fa fa-fw fa-star\"></i>\n                                <i class=\"fa fa-fw fa-star\"></i>\n                                <i class=\"fa fa-fw fa-star\"></i>\n                            </div>\n                            <span class=\"text-dark font-weight-bold\">Ruby B.\n                                Matheny</span><small class=\"text-mute\"> (Company name)</small>\n                        </div>\n                        <div class=\"review-block  border-top mt-3 pt-3\">\n                            <p class=\"review-text font-italic m-0\">“ Cras non rutrum neque. Sed\n                                lacinia ex elit, vel viverra nisl faucibus eu. Aenean faucibus\n                                neque vestibulum condimentum maximus. In id porttitor nisi.\n                                Quisque sit amet commodo arcu, cursus pharetra elit. Nam\n                                tincidunt lobortis augueat euismod ante sodales non. ”</p>\n                            <div class=\"rating-star mb-4\">\n                                <i class=\"fa fa-fw fa-star\"></i>\n                                <i class=\"fa fa-fw fa-star\"></i>\n                                <i class=\"fa fa-fw fa-star\"></i>\n                                <i class=\"fa fa-fw fa-star\"></i>\n                                <i class=\"fa fa-fw fa-star\"></i>\n                            </div>\n                            <span class=\"text-dark font-weight-bold\">Gloria S.\n                                Castillo</span><small class=\"text-mute\"> (Company name)</small>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 m-b-10\">\n            <h3> Related Products</h3>\n        </div>\n        <div class=\"col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12\" *ngFor=\"let product of related\">\n            <app-cards [product]=\"product\"></app-cards>\n        </div>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sigin/sigin.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sigin/sigin.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSiginSiginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"contentSigin\">\n    <!-- ============================================================== -->\n    <!-- login page  -->\n    <!-- ============================================================== -->\n    <div class=\"splash-container\">\n        <div class=\"card \">\n            <div class=\"card-header text-center\"><a href=\"../index.html\"><img class=\"logo-img\"\n                        src=\"../assets/images/logo.png\" alt=\"logo\"></a><span class=\"splash-description\">Please enter\n                    your user information.</span></div>\n            <div class=\"card-body\">\n                <form [formGroup]=\"formCreateUser\">\n                    <div class=\"form-group\">\n                        <input class=\"form-control form-control-lg\" formControlName=\"email\" type=\"email\"\n                            placeholder=\"Correo\" autocomplete=\"off\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input class=\"form-control form-control-lg\" formControlName=\"name\" type=\"text\"\n                            placeholder=\"Nombre\" autocomplete=\"off\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input class=\"form-control form-control-lg\" formControlName=\"lastname\" type=\"text\"\n                            placeholder=\"Apellido\" autocomplete=\"off\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input class=\"form-control form-control-lg\" formControlName=\"cedula\" type=\"number\"\n                            placeholder=\"Cedula\" autocomplete=\"off\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input class=\"form-control form-control-lg\" formControlName=\"password\" type=\"password\"\n                            placeholder=\"Contraseña\">\n                    </div>\n                    <!--<div class=\"form-group\">\n                        <label class=\"custom-control custom-checkbox\">\n                            <input class=\"custom-control-input\" type=\"checkbox\"><span\n                                class=\"custom-control-label\">Remember\n                                Me</span>\n                        </label>\n                    </div>-->\n                    <button [disabled]=\"formCreateUser.invalid\" class=\"btn btn-primary btn-lg btn-block\"\n                        (click)=\"createUser()\">Sign in</button>\n                </form>\n            </div>\n            <div class=\"card-footer bg-white p-0  \">\n                <div class=\"row\">\n                    <div class=\"col-xs-1-12\">\n                        <div class=\"card-footer-item card-footer-item-bordered\">\n                            <a [routerLink]=\"['/']\" routerLinkActive=\"router-link-active\" class=\"footer-link\">Iniciar\n                                Sesión</a></div>\n                    </div>\n                    <div class=\"col-xs-1-12\">\n                        <div class=\"card-footer-item card-footer-item-bordered\">\n                            <a href=\"#\" class=\"footer-link\">Forgot Password</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/elements/cards/cards.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/elements/cards/cards.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppElementsCardsCardsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"product-thumbnail\">\n    <div class=\"product-img-head\">\n        <div class=\"product-img\">\n            <img id=\"img-size\" src=\"{{product.images[0].url}}\" alt=\"\" class=\"img-fluid\">\n        </div>\n        <div class=\"\"><a href=\"#\" class=\"product-wishlist-btn\"><i class=\"fas fa-heart\"></i></a>\n        </div>\n    </div>\n    <div class=\"product-content\">\n        <div class=\"product-content-head\">\n            <div class=\"product-rating d-inline-block\">\n                <i class=\"fa fa-fw fa-star\"></i>\n                <i class=\"fa fa-fw fa-star\"></i>\n                <i class=\"fa fa-fw fa-star\"></i>\n                <i class=\"fa fa-fw fa-star\"></i>\n                <i class=\"fa fa-fw fa-star\"></i>\n                <h3 class=\"product-title\">{{product.name}}</h3>\n            </div>\n\n            <br>\n            <span>\n                <div *ngFor=\"let size of product.sizes\" class=\"custom-control custom-radio custom-control-inline\">\n                    <input type=\"radio\" id=\"customRadio{{product.id}}{{size.id}}\" (click)=\"sizeSelected=size.id\"\n                        name=\"customRadio\" class=\"custom-control-input\">\n                    <label class=\"custom-control-label\" for=\"customRadio{{product.id}}{{size.id}}\">{{size.size}}</label>\n                </div>\n            </span>\n\n            <div class=\"product-price\">{{product.price}} Bsf</div>\n        </div>\n        <div class=\"product-btn\">\n            <button (click)=\"addToCart()\" [disabled]=\"sizeSelected==''\" class=\"btn btn-primary\">Add to Cart</button>\n            <a [routerLink]=\"['/public/product', product.id]\" routerLinkActive=\"router-link-active\"\n                class=\"btn btn-outline-light\">Details</a>\n            <a href=\"#\" class=\"btn btn-outline-light\"><i class=\"fas fa-exchange-alt\"></i></a>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/admin/admin.component */
    "./src/app/components/admin/admin.component.ts");
    /* harmony import */


    var _components_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/admin/dashboard/dashboard.component */
    "./src/app/components/admin/dashboard/dashboard.component.ts");
    /* harmony import */


    var _components_admin_products_productslist_productslist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/admin/products/productslist/productslist.component */
    "./src/app/components/admin/products/productslist/productslist.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_admin_category_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/admin/category/category.component */
    "./src/app/components/admin/category/category.component.ts");
    /* harmony import */


    var _components_sigin_sigin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/sigin/sigin.component */
    "./src/app/components/sigin/sigin.component.ts");
    /* harmony import */


    var _components_public_index_index_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/public/index/index.component */
    "./src/app/components/public/index/index.component.ts");
    /* harmony import */


    var _components_admin_images_images_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/admin/images/images.component */
    "./src/app/components/admin/images/images.component.ts");
    /* harmony import */


    var _components_public_public_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/public/public.component */
    "./src/app/components/public/public.component.ts");
    /* harmony import */


    var _components_public_publicproduct_publicproduct_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/public/publicproduct/publicproduct.component */
    "./src/app/components/public/publicproduct/publicproduct.component.ts");
    /* harmony import */


    var _components_public_publiccategories_publiccategories_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/public/publiccategories/publiccategories.component */
    "./src/app/components/public/publiccategories/publiccategories.component.ts");
    /* harmony import */


    var _components_admin_products_registerproducts_registerproducts_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/admin/products/registerproducts/registerproducts.component */
    "./src/app/components/admin/products/registerproducts/registerproducts.component.ts");
    /* harmony import */


    var _components_admin_products_editproducts_editproducts_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/admin/products/editproducts/editproducts.component */
    "./src/app/components/admin/products/editproducts/editproducts.component.ts");
    /* harmony import */


    var _components_public_publiccart_publiccart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/public/publiccart/publiccart.component */
    "./src/app/components/public/publiccart/publiccart.component.ts");
    /* harmony import */


    var _guards_login_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./guards/login.guard */
    "./src/app/guards/login.guard.ts");
    /* harmony import */


    var _guards_logged_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./guards/logged.guard */
    "./src/app/guards/logged.guard.ts");
    /* harmony import */


    var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./guards/admin.guard */
    "./src/app/guards/admin.guard.ts"); //components
    //guards


    var routes = [{
      path: "",
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
      canActivate: [_guards_logged_guard__WEBPACK_IMPORTED_MODULE_18__["LoggedGuard"]]
    }, {
      path: "sigin",
      component: _components_sigin_sigin_component__WEBPACK_IMPORTED_MODULE_8__["SiginComponent"],
      canActivate: [_guards_logged_guard__WEBPACK_IMPORTED_MODULE_18__["LoggedGuard"]]
    }, {
      path: "admin",
      component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
      canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_17__["LoginGuard"], _guards_admin_guard__WEBPACK_IMPORTED_MODULE_19__["AdminGuard"]],
      children: [{
        path: "dashboard",
        component: _components_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
      }, {
        path: "products/list",
        component: _components_admin_products_productslist_productslist_component__WEBPACK_IMPORTED_MODULE_5__["ProductslistComponent"]
      }, {
        path: "product/register",
        component: _components_admin_products_registerproducts_registerproducts_component__WEBPACK_IMPORTED_MODULE_14__["RegisterproductsComponent"]
      }, {
        path: "product/edit/:id",
        component: _components_admin_products_editproducts_editproducts_component__WEBPACK_IMPORTED_MODULE_15__["EditproductsComponent"]
      }, {
        path: "category",
        component: _components_admin_category_category_component__WEBPACK_IMPORTED_MODULE_7__["CategoryComponent"]
      }, {
        path: "images/:product",
        component: _components_admin_images_images_component__WEBPACK_IMPORTED_MODULE_10__["ImagesComponent"]
      }]
    }, {
      path: "public",
      component: _components_public_public_component__WEBPACK_IMPORTED_MODULE_11__["PublicComponent"],
      canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_17__["LoginGuard"]],
      children: [{
        path: "index",
        component: _components_public_index_index_component__WEBPACK_IMPORTED_MODULE_9__["IndexComponent"],
        canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_17__["LoginGuard"]]
      }, {
        path: "product/:id",
        component: _components_public_publicproduct_publicproduct_component__WEBPACK_IMPORTED_MODULE_12__["PublicproductComponent"]
      }, {
        path: "categories",
        component: _components_public_publiccategories_publiccategories_component__WEBPACK_IMPORTED_MODULE_13__["PubliccategoriesComponent"],
        canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_17__["LoginGuard"]]
      }, {
        path: "cart",
        component: _components_public_publiccart_publiccart_component__WEBPACK_IMPORTED_MODULE_16__["PubliccartComponent"]
      }, {
        path: "images/:product",
        component: _components_admin_images_images_component__WEBPACK_IMPORTED_MODULE_10__["ImagesComponent"]
      }]
    }, {
      path: "**",
      redirectTo: ""
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bd-placeholder-img {\n    font-size: 1.125rem;\n    text-anchor: middle;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n\n  @media (min-width: 768px) {\n    .bd-placeholder-img-lg {\n      font-size: 3.5rem;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFO01BQ0UsaUJBQWlCO0lBQ25CO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZC1wbGFjZWhvbGRlci1pbWcge1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgdGV4dC1hbmNob3I6IG1pZGRsZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLmJkLXBsYWNlaG9sZGVyLWltZy1sZyB7XG4gICAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICB9XG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_services_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../app/services/log.service */
    "./src/app/services/log.service.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(logsevice) {
        _classCallCheck(this, AppComponent);

        this.logsevice = logsevice;
        this.title = 'confecciones-valentinas-front';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.logsevice.loadSession();
        }
      }, {
        key: "onActivate",
        value: function onActivate(event) {
          window.scroll(0, 0); //or document.body.scrollTop = 0;
          //or document.querySelector('body').scrollTo(0,0)
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _app_services_log_service__WEBPACK_IMPORTED_MODULE_2__["LogService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _services_request_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/request.service */
    "./src/app/services/request.service.ts");
    /* harmony import */


    var _services_image_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./services/image.service */
    "./src/app/services/image.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _components_public_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/public/header/header.component */
    "./src/app/components/public/header/header.component.ts");
    /* harmony import */


    var _components_public_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/public/footer/footer.component */
    "./src/app/components/public/footer/footer.component.ts");
    /* harmony import */


    var _components_public_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/public/carousel/carousel.component */
    "./src/app/components/public/carousel/carousel.component.ts");
    /* harmony import */


    var _components_public_index_index_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/public/index/index.component */
    "./src/app/components/public/index/index.component.ts");
    /* harmony import */


    var _components_admin_structure_navbaradmin_navbaradmin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/admin/structure/navbaradmin/navbaradmin.component */
    "./src/app/components/admin/structure/navbaradmin/navbaradmin.component.ts");
    /* harmony import */


    var _components_admin_structure_siderbaradmin_siderbaradmin_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/admin/structure/siderbaradmin/siderbaradmin.component */
    "./src/app/components/admin/structure/siderbaradmin/siderbaradmin.component.ts");
    /* harmony import */


    var _components_admin_structure_footeradmin_footeradmin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/admin/structure/footeradmin/footeradmin.component */
    "./src/app/components/admin/structure/footeradmin/footeradmin.component.ts");
    /* harmony import */


    var _components_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/admin/dashboard/dashboard.component */
    "./src/app/components/admin/dashboard/dashboard.component.ts");
    /* harmony import */


    var _components_admin_products_productslist_productslist_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/admin/products/productslist/productslist.component */
    "./src/app/components/admin/products/productslist/productslist.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/admin/admin.component */
    "./src/app/components/admin/admin.component.ts");
    /* harmony import */


    var _components_admin_category_category_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/admin/category/category.component */
    "./src/app/components/admin/category/category.component.ts");
    /* harmony import */


    var _components_sigin_sigin_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/sigin/sigin.component */
    "./src/app/components/sigin/sigin.component.ts");
    /* harmony import */


    var _components_admin_images_images_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/admin/images/images.component */
    "./src/app/components/admin/images/images.component.ts");
    /* harmony import */


    var _components_public_public_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/public/public.component */
    "./src/app/components/public/public.component.ts");
    /* harmony import */


    var _elements_cards_cards_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./elements/cards/cards.component */
    "./src/app/elements/cards/cards.component.ts");
    /* harmony import */


    var _components_public_publicproduct_publicproduct_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/public/publicproduct/publicproduct.component */
    "./src/app/components/public/publicproduct/publicproduct.component.ts");
    /* harmony import */


    var _components_public_publiccategories_publiccategories_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./components/public/publiccategories/publiccategories.component */
    "./src/app/components/public/publiccategories/publiccategories.component.ts");
    /* harmony import */


    var _components_admin_products_registerproducts_registerproducts_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./components/admin/products/registerproducts/registerproducts.component */
    "./src/app/components/admin/products/registerproducts/registerproducts.component.ts");
    /* harmony import */


    var _components_admin_products_editproducts_editproducts_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./components/admin/products/editproducts/editproducts.component */
    "./src/app/components/admin/products/editproducts/editproducts.component.ts");
    /* harmony import */


    var _components_public_publiccart_publiccart_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./components/public/publiccart/publiccart.component */
    "./src/app/components/public/publiccart/publiccart.component.ts");
    /* harmony import */


    var _components_public_product_product_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./components/public/product/product.component */
    "./src/app/components/public/product/product.component.ts"); //providers
    //localServices
    //imports
    //import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
    //modulos para formularios


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_public_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"], _components_public_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"], _components_public_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_14__["CarouselComponent"], _components_public_index_index_component__WEBPACK_IMPORTED_MODULE_15__["IndexComponent"], _components_admin_structure_navbaradmin_navbaradmin_component__WEBPACK_IMPORTED_MODULE_16__["NavbaradminComponent"], _components_admin_structure_siderbaradmin_siderbaradmin_component__WEBPACK_IMPORTED_MODULE_17__["SiderbaradminComponent"], _components_admin_structure_footeradmin_footeradmin_component__WEBPACK_IMPORTED_MODULE_18__["FooteradminComponent"], _components_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["DashboardComponent"], _components_admin_products_productslist_productslist_component__WEBPACK_IMPORTED_MODULE_20__["ProductslistComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"], _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_23__["AdminComponent"], _components_admin_category_category_component__WEBPACK_IMPORTED_MODULE_24__["CategoryComponent"], _components_sigin_sigin_component__WEBPACK_IMPORTED_MODULE_25__["SiginComponent"], _components_admin_images_images_component__WEBPACK_IMPORTED_MODULE_26__["ImagesComponent"], _components_public_public_component__WEBPACK_IMPORTED_MODULE_27__["PublicComponent"], _elements_cards_cards_component__WEBPACK_IMPORTED_MODULE_28__["CardsComponent"], _components_public_publicproduct_publicproduct_component__WEBPACK_IMPORTED_MODULE_29__["PublicproductComponent"], _components_public_publiccategories_publiccategories_component__WEBPACK_IMPORTED_MODULE_30__["PubliccategoriesComponent"], _components_admin_products_registerproducts_registerproducts_component__WEBPACK_IMPORTED_MODULE_31__["RegisterproductsComponent"], _components_admin_products_editproducts_editproducts_component__WEBPACK_IMPORTED_MODULE_32__["EditproductsComponent"], _components_public_publiccart_publiccart_component__WEBPACK_IMPORTED_MODULE_33__["PubliccartComponent"], _components_public_product_product_component__WEBPACK_IMPORTED_MODULE_34__["ProductComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], //FontAwesomeModule,
      _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot()],
      providers: [_services_request_service__WEBPACK_IMPORTED_MODULE_9__["RequestService"], _services_image_service__WEBPACK_IMPORTED_MODULE_10__["ImageService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/admin/admin.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/admin/admin.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdminAdminComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/admin/admin.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/admin/admin.component.ts ***!
    \*****************************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppComponentsAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AdminComponent =
    /*#__PURE__*/
    function () {
      function AdminComponent(router) {
        _classCallCheck(this, AdminComponent);

        this.router = router;
      }

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.router.navigate(['/admin/dashboard']);
        }
      }, {
        key: "onActivate",
        value: function onActivate(event) {
          window.scroll(0, 0); //or document.body.scrollTop = 0;
          //or document.querySelector('body').scrollTo(0,0)
        }
      }]);

      return AdminComponent;
    }();

    AdminComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin.component.css */
      "./src/app/components/admin/admin.component.css")).default]
    })], AdminComponent);
    /***/
  },

  /***/
  "./src/app/components/admin/category/category.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/components/admin/category/category.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdminCategoryCategoryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/admin/category/category.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/admin/category/category.component.ts ***!
    \*****************************************************************/

  /*! exports provided: CategoryComponent */

  /***/
  function srcAppComponentsAdminCategoryCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryComponent", function () {
      return CategoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/request.service */
    "./src/app/services/request.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var CategoryComponent =
    /*#__PURE__*/
    function () {
      function CategoryComponent(request, modalService, formBuilder) {
        _classCallCheck(this, CategoryComponent);

        this.request = request;
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.categories = [];
      }

      _createClass(CategoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCategories();
        } //forms

      }, {
        key: "createBuildForm",
        value: function createBuildForm() {
          this.formCreateCategory = this.formBuilder.group({
            category: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]]
          });
          console.log(this.formCreateCategory);
        }
      }, {
        key: "updateBuildForm",
        value: function updateBuildForm(category) {
          console.log(category);
          this.formUpdateCategory = this.formBuilder.group({
            category: [category.category, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]]
          });
          console.log(this.formUpdateCategory);
        } /////////////////////////////////////////////////////////////////////
        //methods

      }, {
        key: "getCategories",
        value: function getCategories() {
          var _this = this;

          this.request.getCategory().subscribe(function (data) {
            _this.categories = data;
            console.log(data);
          });
        }
      }, {
        key: "createCategory",
        value: function createCategory() {
          var _this2 = this;

          var category = this.formCreateCategory.value;
          console.log(category);
          this.request.createCategory(category).subscribe(function (data) {
            console.log(data);

            _this2.getCategories();
          });
        }
      }, {
        key: "updateCategory",
        value: function updateCategory(category) {
          var _this3 = this;

          var cat = this.formUpdateCategory.value;
          cat.id = category.id;
          console.log(cat);
          this.request.updateCategory(cat).subscribe(function (data) {
            console.log(data);

            _this3.getCategories();
          });
        }
      }, {
        key: "deleteProduct",
        value: function deleteProduct(category) {} /////////////////////////////////////////////////////////////////////
        //modals

      }, {
        key: "open",
        value: function open(content, operation, category) {
          var _this4 = this;

          if (category == '') {
            this.createBuildForm();
            console.log('create');
          } else {
            this.updateBuildForm(category);
            console.log('update');
          }

          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title'
          }).result.then(function (result) {
            _this4.closeResult = "Closed with: ".concat(result);

            switch (operation) {
              case "create":
                _this4.createCategory();

                break;

              case "update":
                _this4.updateCategory(category);

                break;

              default:
                break;
            }
          }, function (reason) {});
        }
      }]);

      return CategoryComponent;
    }();

    CategoryComponent.ctorParameters = function () {
      return [{
        type: _services_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-category',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./category.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/category/category.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./category.component.css */
      "./src/app/components/admin/category/category.component.css")).default]
    })], CategoryComponent);
    /***/
  },

  /***/
  "./src/app/components/admin/dashboard/dashboard.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/components/admin/dashboard/dashboard.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdminDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/admin/dashboard/dashboard.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/admin/dashboard/dashboard.component.ts ***!
    \*******************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppComponentsAdminDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/request.service */
    "./src/app/services/request.service.ts");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(request) {
        _classCallCheck(this, DashboardComponent);

        this.request = request;
        this.users = [];
        this.userData = null;
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userData = this.request.session;
          this.getUsers();
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          var _this5 = this;

          this.request.getUsers().subscribe(function (data) {
            _this5.users = data;
            console.log(data);
          });
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _services_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/components/admin/dashboard/dashboard.component.css")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/components/admin/images/images.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/components/admin/images/images.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdminImagesImagesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vaW1hZ2VzL2ltYWdlcy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/admin/images/images.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/admin/images/images.component.ts ***!
    \*************************************************************/

  /*! exports provided: ImagesComponent */

  /***/
  function srcAppComponentsAdminImagesImagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagesComponent", function () {
      return ImagesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/request.service */
    "./src/app/services/request.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var src_app_services_image_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/image.service */
    "./src/app/services/image.service.ts");

    var ImagesComponent =
    /*#__PURE__*/
    function () {
      function ImagesComponent(activedroute, imgService, request, modalService, formBuilder) {
        _classCallCheck(this, ImagesComponent);

        this.activedroute = activedroute;
        this.imgService = imgService;
        this.request = request;
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.product = {
          id: '',
          name: '',
          images: {}
        };
        var id = this.activedroute.snapshot.paramMap.get('product');
        this.getProduct(id);
      }

      _createClass(ImagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} //forms

      }, {
        key: "createBuildForm",
        value: function createBuildForm() {
          this.formCreateImage = this.formBuilder.group({
            image: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]]
          });
          console.log(this.formCreateImage);
        }
      }, {
        key: "updateBuildForm",
        value: function updateBuildForm(category) {
          console.log(category);
          this.formUpdateImage = this.formBuilder.group({
            image: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]]
          });
          console.log(this.formUpdateImage);
        } /////////////////////////////////////////////////////////////////////
        //methods

      }, {
        key: "getProduct",
        value: function getProduct(id) {
          var _this6 = this;

          this.request.getProductsGalery(id).subscribe(function (data) {
            _this6.product = data;
            console.log(data);
          });
        }
      }, {
        key: "createImage",
        value: function createImage() {
          var _this7 = this;

          var product = {
            product_id: this.product.id,
            image: this.formCreateImage.value.image
          };
          console.log(product);
          this.request.createProductsGalery(product).subscribe(function (data) {
            console.log(data);

            _this7.getProduct(_this7.product.id);
          });
        }
      }, {
        key: "updateImage",
        value: function updateImage(image) {
          var _this8 = this;

          var product = {
            old: image,
            product_id: this.product.id,
            image: this.formUpdateImage.value.image
          };
          this.request.updateProductsGalery(product).subscribe(function (data) {
            console.log(data);

            _this8.getProduct(_this8.product.id);
          });
        }
      }, {
        key: "deleteImage",
        value: function deleteImage(image) {
          var _this9 = this;

          this.request.deleteProductsGalery(image).subscribe(function (data) {
            console.log(data);

            _this9.getProduct(_this9.product.id);
          });
        } /////////////////////////////////////////////////////////////////////
        //modals

      }, {
        key: "open",
        value: function open(content, operation, image) {
          var _this10 = this;

          if (image == '') {
            this.createBuildForm();
            console.log('create');
          } else {
            this.updateBuildForm(image);
            console.log('update');
          }

          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title'
          }).result.then(function (result) {
            switch (operation) {
              case "create":
                _this10.createImage();

                break;

              case "update":
                _this10.updateImage(image);

                break;

              default:
                break;
            }
          }, function (reason) {});
        } //////////////////////////////////////////////////////////////////////
        // load image

      }, {
        key: "onUploadImage",
        value: function onUploadImage(evt, type) {
          var data = this.imgService.onUploadChange(evt);
          this.base64textString = data;
          console.log(data);
          if (type == 'create') this.formCreateImage.value.image = data;else this.formUpdateImage.value.image = data;
        }
      }]);

      return ImagesComponent;
    }();

    ImagesComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_services_image_service__WEBPACK_IMPORTED_MODULE_6__["ImageService"]
      }, {
        type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    ImagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-images',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./images.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/images/images.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./images.component.css */
      "./src/app/components/admin/images/images.component.css")).default]
    })], ImagesComponent);
    /***/
  },

  /***/
  "./src/app/components/admin/products/editproducts/editproducts.component.css":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/admin/products/editproducts/editproducts.component.css ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdminProductsEditproductsEditproductsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vcHJvZHVjdHMvZWRpdHByb2R1Y3RzL2VkaXRwcm9kdWN0cy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/admin/products/editproducts/editproducts.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/components/admin/products/editproducts/editproducts.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: EditproductsComponent */

  /***/
  function srcAppComponentsAdminProductsEditproductsEditproductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditproductsComponent", function () {
      return EditproductsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/request.service */
    "./src/app/services/request.service.ts");

    var EditproductsComponent =
    /*#__PURE__*/
    function () {
      function EditproductsComponent(router, request, formBuilder, activeroute) {
        _classCallCheck(this, EditproductsComponent);

        this.router = router;
        this.request = request;
        this.formBuilder = formBuilder;
        this.activeroute = activeroute;
        this.products = [];
        this.base64textString = [];
        this.categories = "";
        this.sizes = [];
        this.colorId = 0;
        this.id = this.activeroute.snapshot.params.id; //this.getOneProduct();
      }

      _createClass(EditproductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initForm();
          this.getOneProduct();
          this.getCategories();
          this.getsizes();
        } //forms

      }, {
        key: "initForm",
        value: function initForm() {
          this.formUpdateProduct = this.formBuilder.group({
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            price: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            quantity: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            description: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            categories: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            color1: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            color2: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            color3: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            size: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
          console.log(this.formUpdateProduct);
        }
      }, {
        key: "createBuildForm",
        value: function createBuildForm(data) {
          console.log(data);
          var cat = data.categories.map(function (cat) {
            return cat.id;
          });
          var siz = data.sizes.map(function (siz) {
            return {
              name: siz.size,
              sizeId: siz.products_sizes.size_id,
              quantity: siz.products_sizes.quantity
            };
          });
          console.log(siz);
          this.formUpdateProduct = this.formBuilder.group({
            name: [data.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            price: [data.price, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            description: [data.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            categories: [cat, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            size: this.formBuilder.array([])
          });
          this.setSize(siz);
          console.log(this.formUpdateProduct);
        } /////////////////////////////////////////////////////////////////////
        //methods

      }, {
        key: "getOneProduct",
        value: function getOneProduct() {
          var _this11 = this;

          this.request.getOneProduct(this.id).subscribe(function (data) {
            console.log(data);

            _this11.createBuildForm(data);

            _this11.colorId = data.colors[0].id; //this.categories = data;
          });
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          var _this12 = this;

          this.request.getCategory().subscribe(function (data) {
            console.log(data);
            _this12.categories = data;
          });
        }
      }, {
        key: "getsizes",
        value: function getsizes() {
          var _this13 = this;

          console.log("a");
          this.request.getSizes().subscribe(function (data) {
            console.log(data);
            _this13.sizes = data;
          });
        }
      }, {
        key: "setSize",
        value: function setSize(size) {
          var _this14 = this;

          console.log(size);
          size.map(function (size) {
            _this14.sizeItems = _this14.formUpdateProduct.get("size");

            _this14.sizeItems.push(_this14.setCreateSize(size));
          });
        }
      }, {
        key: "setCreateSize",
        value: function setCreateSize(size) {
          console.log(size);
          return this.formBuilder.group({
            name: size.name,
            sizeId: size.sizeId,
            quantity: [size.quantity, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "createSize",
        value: function createSize(size) {
          return this.formBuilder.group({
            name: size.size,
            sizeId: size.id,
            quantity: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "addItem",
        value: function addItem(size) {
          var c = 0;
          var k = this.formUpdateProduct.value.size.map(function (data) {
            if (data.sizeId != size.id) {
              console.log(data);
              console.log(size.id);
              console.log("diferentes");
              return data;
            } else {
              console.log("repetido");
              c++;
            }
          });

          if (c == 0) {
            this.sizeItems = this.formUpdateProduct.get("size");
            console.log(this.sizeItems);
            this.sizeItems.push(this.createSize(size));
            console.log(this.formUpdateProduct);
          }
        }
      }, {
        key: "removeItem",
        value: function removeItem(id) {
          this.sizeItems.removeAt(id);
        }
      }, {
        key: "updateProduct",
        value: function updateProduct() {
          var _this15 = this;

          var product = this.formUpdateProduct.value;
          product.user_id = this.request.session.id;
          product.id = this.id;
          console.log(product);
          this.request.updateProducts(product).subscribe(function (data) {
            console.log(data);

            _this15.router.navigate(["/admin/products/list"]);
          });
        }
      }]);

      return EditproductsComponent;
    }();

    EditproductsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    EditproductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-editproducts",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./editproducts.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/products/editproducts/editproducts.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./editproducts.component.css */
      "./src/app/components/admin/products/editproducts/editproducts.component.css")).default]
    })], EditproductsComponent);
    /***/
  },

  /***/
  "./src/app/components/admin/products/productslist/productslist.component.css":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/admin/products/productslist/productslist.component.css ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdminProductsProductslistProductslistComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vcHJvZHVjdHMvcHJvZHVjdHNsaXN0L3Byb2R1Y3RzbGlzdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/admin/products/productslist/productslist.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/components/admin/products/productslist/productslist.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: ProductslistComponent */

  /***/
  function srcAppComponentsAdminProductsProductslistProductslistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductslistComponent", function () {
      return ProductslistComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../services/request.service */
    "./src/app/services/request.service.ts");
    /* harmony import */


    var _services_image_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../services/image.service */
    "./src/app/services/image.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ProductslistComponent =
    /*#__PURE__*/
    function () {
      function ProductslistComponent(request, modalService, formBuilder, imgService) {
        _classCallCheck(this, ProductslistComponent);

        this.request = request;
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.imgService = imgService;
        this.products = [];
        this.base64textString = [];
        this.categories = [];
      }

      _createClass(ProductslistComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getProducts();
          this.getCategories();
        } //forms

      }, {
        key: "createBuildForm",
        value: function createBuildForm() {
          this.formCreateProduct = this.formBuilder.group({
            image: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6)]],
            price: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            description: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            quantity: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            categories: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
          });
          console.log(this.formCreateProduct);
        }
      }, {
        key: "updateBuildForm",
        value: function updateBuildForm(product) {
          console.log(product);
          var p = product.categories.map(function (cat) {
            return cat.id;
          });
          this.formUpdateProduct = this.formBuilder.group({
            name: [product.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6)]],
            price: [product.price, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            description: [product.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            quantity: [product.quantity, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            categories: [p, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
          });
          console.log(this.formUpdateProduct);
        } /////////////////////////////////////////////////////////////////////
        //methods

      }, {
        key: "getProducts",
        value: function getProducts() {
          var _this16 = this;

          this.request.getProducts().subscribe(function (data) {
            _this16.products = data;
            console.log(data);
          });
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          var _this17 = this;

          this.request.getCategory().subscribe(function (data) {
            console.log(data);
            _this17.categories = data;
          });
        }
      }, {
        key: "createProduct",
        value: function createProduct() {
          var _this18 = this;

          this.formCreateProduct.value.image = this.base64textString;
          var product = this.formCreateProduct.value;
          product.user_id = this.request.session.id;
          this.request.createProducts(product).subscribe(function (data) {
            console.log(data);

            _this18.getProducts();
          });
        }
      }, {
        key: "deleteProduct",
        value: function deleteProduct(product) {
          var _this19 = this;

          this.request.deleteProducts(product).subscribe(function (data) {
            console.log(data);

            _this19.getProducts();
          });
        }
      }, {
        key: "updateProduct",
        value: function updateProduct(p) {
          var _this20 = this;

          var product = this.formUpdateProduct.value;
          product.user_id = this.request.session.id;
          product.id = p.id;
          console.log(product);
          this.request.updateProducts(product).subscribe(function (data) {
            console.log(data);

            _this20.getProducts();
          });
        } /////////////////////////////////////////////////////////////////////
        //modals

      }, {
        key: "open",
        value: function open(content, operation, product) {
          var _this21 = this;

          if (product == '') {
            this.createBuildForm();
            console.log('create');
          } else {
            this.updateBuildForm(product);
            console.log('update');
          }

          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title'
          }).result.then(function (result) {
            _this21.closeResult = "Closed with: ".concat(result);

            switch (operation) {
              case "create":
                _this21.createProduct();

                break;

              case "update":
                _this21.updateProduct(product);

                break;

              default:
                break;
            }
          }, function (reason) {});
        } //////////////////////////////////////////////////////////////////////
        // load image

      }, {
        key: "onUploadImage",
        value: function onUploadImage(evt) {
          var data = this.imgService.onUploadChange(evt);
          this.base64textString = data;
          console.log(data);
          this.formCreateProduct.value.image = data;
          console.log(this.formCreateProduct);
        }
      }]);

      return ProductslistComponent;
    }();

    ProductslistComponent.ctorParameters = function () {
      return [{
        type: _services_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _services_image_service__WEBPACK_IMPORTED_MODULE_3__["ImageService"]
      }];
    };

    ProductslistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-productslist',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./productslist.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/products/productslist/productslist.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./productslist.component.css */
      "./src/app/components/admin/products/productslist/productslist.component.css")).default]
    })], ProductslistComponent);
    /***/
  },

  /***/
  "./src/app/components/admin/products/registerproducts/registerproducts.component.css":
  /*!*******************************************************************************************!*\
    !*** ./src/app/components/admin/products/registerproducts/registerproducts.component.css ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdminProductsRegisterproductsRegisterproductsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vcHJvZHVjdHMvcmVnaXN0ZXJwcm9kdWN0cy9yZWdpc3RlcnByb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/admin/products/registerproducts/registerproducts.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/components/admin/products/registerproducts/registerproducts.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: RegisterproductsComponent */

  /***/
  function srcAppComponentsAdminProductsRegisterproductsRegisterproductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterproductsComponent", function () {
      return RegisterproductsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/request.service */
    "./src/app/services/request.service.ts");
    /* harmony import */


    var src_app_services_image_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/image.service */
    "./src/app/services/image.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var RegisterproductsComponent =
    /*#__PURE__*/
    function () {
      function RegisterproductsComponent(router, request, formBuilder, imgService) {
        _classCallCheck(this, RegisterproductsComponent);

        this.router = router;
        this.request = request;
        this.formBuilder = formBuilder;
        this.imgService = imgService;
        this.products = [];
        this.base64textString = [];
        this.categories = "";
        this.sizes = "";
        this.dataSize = [];
        this.selectSize = [];
      }

      _createClass(RegisterproductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createBuildForm();
          this.getCategories();
          this.getsizes();
        } //forms

      }, {
        key: "createBuildForm",
        value: function createBuildForm() {
          this.formCreateProduct = this.formBuilder.group({
            image: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            price: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            description: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            categories: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            size: this.formBuilder.array([])
          });
          console.log(this.formCreateProduct);
        } /////////////////////////////////////////////////////////////////////
        //methods

      }, {
        key: "getCategories",
        value: function getCategories() {
          var _this22 = this;

          this.request.getCategory().subscribe(function (data) {
            console.log(data);
            _this22.categories = data;
          });
        }
      }, {
        key: "getsizes",
        value: function getsizes() {
          var _this23 = this;

          console.log("a");
          this.request.getSizes().subscribe(function (data) {
            console.log(data);
            _this23.sizes = data;
          });
        }
      }, {
        key: "createProduct",
        value: function createProduct() {
          var _this24 = this;

          this.formCreateProduct.value.image = this.base64textString;
          var product = this.formCreateProduct.value;
          product.user_id = this.request.session.id;
          console.log(product);
          this.request.createProducts(product).subscribe(function (data) {
            console.log(data);

            _this24.router.navigate(["/admin/products/list"]);
          });
        }
      }, {
        key: "createSize",
        value: function createSize(size) {
          return this.formBuilder.group({
            name: size.size,
            sizeId: size.id,
            quantity: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "addItem",
        value: function addItem(size) {
          var c = 0;
          var k = this.formCreateProduct.value.size.map(function (data) {
            if (data.sizeId != size.id) {
              console.log(data);
              console.log(size.id);
              console.log("diferentes");
              return data;
            } else {
              console.log("repetido");
              c++;
            }
          });

          if (c == 0) {
            this.sizeItems = this.formCreateProduct.get("size");
            console.log(this.sizeItems);
            this.sizeItems.push(this.createSize(size));
            console.log(this.formCreateProduct);
          }
        }
      }, {
        key: "removeItem",
        value: function removeItem(id) {
          this.sizeItems.removeAt(id);
        } ////////////////////////////////////////////////
        // load image

      }, {
        key: "onUploadImage",
        value: function onUploadImage(evt) {
          var data = this.imgService.onUploadChange(evt);
          this.base64textString = data;
          console.log(data);
          this.formCreateProduct.value.image = data;
          console.log(this.formCreateProduct);
        }
      }]);

      return RegisterproductsComponent;
    }();

    RegisterproductsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_services_image_service__WEBPACK_IMPORTED_MODULE_4__["ImageService"]
      }];
    };

    RegisterproductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-registerproducts",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./registerproducts.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/products/registerproducts/registerproducts.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./registerproducts.component.css */
      "./src/app/components/admin/products/registerproducts/registerproducts.component.css")).default]
    })], RegisterproductsComponent);
    /***/
  },

  /***/
  "./src/app/components/admin/structure/footeradmin/footeradmin.component.css":
  /*!**********************************************************************************!*\
    !*** ./src/app/components/admin/structure/footeradmin/footeradmin.component.css ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdminStructureFooteradminFooteradminComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vc3RydWN0dXJlL2Zvb3RlcmFkbWluL2Zvb3RlcmFkbWluLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/admin/structure/footeradmin/footeradmin.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/admin/structure/footeradmin/footeradmin.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: FooteradminComponent */

  /***/
  function srcAppComponentsAdminStructureFooteradminFooteradminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooteradminComponent", function () {
      return FooteradminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooteradminComponent =
    /*#__PURE__*/
    function () {
      function FooteradminComponent() {
        _classCallCheck(this, FooteradminComponent);
      }

      _createClass(FooteradminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooteradminComponent;
    }();

    FooteradminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footeradmin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footeradmin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/structure/footeradmin/footeradmin.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footeradmin.component.css */
      "./src/app/components/admin/structure/footeradmin/footeradmin.component.css")).default]
    })], FooteradminComponent);
    /***/
  },

  /***/
  "./src/app/components/admin/structure/navbaradmin/navbaradmin.component.css":
  /*!**********************************************************************************!*\
    !*** ./src/app/components/admin/structure/navbaradmin/navbaradmin.component.css ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdminStructureNavbaradminNavbaradminComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vc3RydWN0dXJlL25hdmJhcmFkbWluL25hdmJhcmFkbWluLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/admin/structure/navbaradmin/navbaradmin.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/admin/structure/navbaradmin/navbaradmin.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: NavbaradminComponent */

  /***/
  function srcAppComponentsAdminStructureNavbaradminNavbaradminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbaradminComponent", function () {
      return NavbaradminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/log.service */
    "./src/app/services/log.service.ts");

    var NavbaradminComponent =
    /*#__PURE__*/
    function () {
      function NavbaradminComponent(logservice) {
        _classCallCheck(this, NavbaradminComponent);

        this.logservice = logservice;
      }

      _createClass(NavbaradminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logOut",
        value: function logOut() {
          this.logservice.logOut();
        }
      }]);

      return NavbaradminComponent;
    }();

    NavbaradminComponent.ctorParameters = function () {
      return [{
        type: src_app_services_log_service__WEBPACK_IMPORTED_MODULE_2__["LogService"]
      }];
    };

    NavbaradminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbaradmin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbaradmin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/structure/navbaradmin/navbaradmin.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbaradmin.component.css */
      "./src/app/components/admin/structure/navbaradmin/navbaradmin.component.css")).default]
    })], NavbaradminComponent);
    /***/
  },

  /***/
  "./src/app/components/admin/structure/siderbaradmin/siderbaradmin.component.css":
  /*!**************************************************************************************!*\
    !*** ./src/app/components/admin/structure/siderbaradmin/siderbaradmin.component.css ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdminStructureSiderbaradminSiderbaradminComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vc3RydWN0dXJlL3NpZGVyYmFyYWRtaW4vc2lkZXJiYXJhZG1pbi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/admin/structure/siderbaradmin/siderbaradmin.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/admin/structure/siderbaradmin/siderbaradmin.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: SiderbaradminComponent */

  /***/
  function srcAppComponentsAdminStructureSiderbaradminSiderbaradminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SiderbaradminComponent", function () {
      return SiderbaradminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SiderbaradminComponent =
    /*#__PURE__*/
    function () {
      function SiderbaradminComponent() {
        _classCallCheck(this, SiderbaradminComponent);
      }

      _createClass(SiderbaradminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SiderbaradminComponent;
    }();

    SiderbaradminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-siderbaradmin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./siderbaradmin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/structure/siderbaradmin/siderbaradmin.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./siderbaradmin.component.css */
      "./src/app/components/admin/structure/siderbaradmin/siderbaradmin.component.css")).default]
    })], SiderbaradminComponent);
    /***/
  },

  /***/
  "./src/app/components/login/login.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/login/login.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\ncontentLogin {\n    height: 100%;\n}\n\ncontentLogin {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    padding-top: 40px;\n    padding-bottom: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFFSSxvQkFBYTtJQUFiLGFBQWE7SUFFYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnRlbnRMb2dpbiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5jb250ZW50TG9naW4ge1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/log.service */
    "./src/app/services/log.service.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(logservice, formBuilder) {
        _classCallCheck(this, LoginComponent);

        this.logservice = logservice;
        this.formBuilder = formBuilder;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createBuilderForm();
        }
      }, {
        key: "createBuilderForm",
        value: function createBuilderForm() {
          this.formLoginUser = this.formBuilder.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
        }
      }, {
        key: "login",
        value: function login() {
          var user = this.formLoginUser.value;
          this.logservice.loginUser(user);
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _services_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/components/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/components/public/carousel/carousel.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/components/public/carousel/carousel.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPublicCarouselCarouselComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".imgfront {\n  margin-top: 57px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wdWJsaWMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHVibGljL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nZnJvbnQge1xuICBtYXJnaW4tdG9wOiA1N3B4O1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/public/carousel/carousel.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/public/carousel/carousel.component.ts ***!
    \******************************************************************/

  /*! exports provided: CarouselComponent */

  /***/
  function srcAppComponentsPublicCarouselCarouselComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselComponent", function () {
      return CarouselComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var CarouselComponent =
    /*#__PURE__*/
    function () {
      function CarouselComponent() {
        _classCallCheck(this, CarouselComponent);

        this.urlFrontimagesfront = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlFrontImages;
        this.images = ["http://localhost:3000/assets/imagesfront/val9.jpeg", "http://localhost:4200/assets/imagesfront/val3.jpeg", "http://localhost:4200/assets/imagesfront/val4.jpeg", "http://localhost:4200/assets/imagesfront/val5.jpeg", "http://localhost:4200/assets/imagesfront/val7.jpeg", "http://localhost:4200/assets/imagesfront/val8.jpeg"];
      }

      _createClass(CarouselComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CarouselComponent;
    }();

    CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-carousel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./carousel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/public/carousel/carousel.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./carousel.component.css */
      "./src/app/components/public/carousel/carousel.component.css")).default]
    })], CarouselComponent);
    /***/
  },

  /***/
  "./src/app/components/public/footer/footer.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/components/public/footer/footer.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPublicFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHVibGljL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/public/footer/footer.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/public/footer/footer.component.ts ***!
    \**************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsPublicFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/public/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/components/public/footer/footer.component.css")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/components/public/header/header.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/components/public/header/header.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPublicHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".nav {\n  background-color: #e7b6b2;\n}\n.logo {\n  width: 300px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wdWJsaWMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3B1YmxpYy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3YjZiMjtcbn1cbi5sb2dvIHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/public/header/header.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/public/header/header.component.ts ***!
    \**************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsPublicHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/public/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/components/public/header/header.component.css")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/components/public/index/index.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/components/public/index/index.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPublicIndexIndexComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHVibGljL2luZGV4L2luZGV4LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/public/index/index.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/components/public/index/index.component.ts ***!
    \************************************************************/

  /*! exports provided: IndexComponent */

  /***/
  function srcAppComponentsPublicIndexIndexComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndexComponent", function () {
      return IndexComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/request.service */
    "./src/app/services/request.service.ts");

    var IndexComponent =
    /*#__PURE__*/
    function () {
      function IndexComponent(request) {
        _classCallCheck(this, IndexComponent);

        this.request = request;
        this.urlFrontimagesfront = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlFrontImages;
        this.images = ["http://localhost:4200/assets/imagesfront/val9.jpeg", "http://localhost:4200/assets/imagesfront/val3.jpeg", "http://localhost:4200/assets/imagesfront/val4.jpeg", "http://localhost:4200/assets/imagesfront/val5.jpeg", "http://localhost:4200/assets/imagesfront/val7.jpeg", "http://localhost:4200/assets/imagesfront/val8.jpeg"];
        this.products = [];
      }

      _createClass(IndexComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getProductsPopulars();
        }
      }, {
        key: "getProductsPopulars",
        value: function getProductsPopulars() {
          var _this25 = this;

          this.request.getProductsPopular().subscribe(function (data) {
            console.log(data);
            _this25.products = data;
          });
        }
      }]);

      return IndexComponent;
    }();

    IndexComponent.ctorParameters = function () {
      return [{
        type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]
      }];
    };

    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-index',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./index.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/public/index/index.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./index.component.css */
      "./src/app/components/public/index/index.component.css")).default]
    })], IndexComponent);
    /***/
  },

  /***/
  "./src/app/components/public/product/product.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/components/public/product/product.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPublicProductProductComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHVibGljL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/public/product/product.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/components/public/product/product.component.ts ***!
    \****************************************************************/

  /*! exports provided: ProductComponent */

  /***/
  function srcAppComponentsPublicProductProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductComponent", function () {
      return ProductComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProductComponent =
    /*#__PURE__*/
    function () {
      function ProductComponent() {
        _classCallCheck(this, ProductComponent);
      }

      _createClass(ProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductComponent;
    }();

    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/public/product/product.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product.component.css */
      "./src/app/components/public/product/product.component.css")).default]
    })], ProductComponent);
    /***/
  },

  /***/
  "./src/app/components/public/public.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/public/public.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPublicPublicComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHVibGljL3B1YmxpYy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/public/public.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/public/public.component.ts ***!
    \*******************************************************/

  /*! exports provided: PublicComponent */

  /***/
  function srcAppComponentsPublicPublicComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublicComponent", function () {
      return PublicComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var PublicComponent =
    /*#__PURE__*/
    function () {
      function PublicComponent(router) {
        _classCallCheck(this, PublicComponent);

        this.router = router;
      }

      _createClass(PublicComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {//this.router.navigate(['/public/index']);
        }
      }, {
        key: "onActivate",
        value: function onActivate(event) {
          window.scroll(0, 0); //or document.body.scrollTop = 0;
          //or document.querySelector('body').scrollTo(0,0)
        }
      }]);

      return PublicComponent;
    }();

    PublicComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    PublicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-public',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./public.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/public/public.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./public.component.css */
      "./src/app/components/public/public.component.css")).default]
    })], PublicComponent);
    /***/
  },

  /***/
  "./src/app/components/public/publiccart/publiccart.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/components/public/publiccart/publiccart.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPublicPubliccartPubliccartComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  margin-top: 75px;\n}\n.size-image {\n  width: 130px;\n}\n.img-min {\n  width: 100px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wdWJsaWMvcHVibGljY2FydC9wdWJsaWNjYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wdWJsaWMvcHVibGljY2FydC9wdWJsaWNjYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbn1cbi5zaXplLWltYWdlIHtcbiAgd2lkdGg6IDEzMHB4O1xufVxuLmltZy1taW4ge1xuICB3aWR0aDogMTAwcHg7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/public/publiccart/publiccart.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/public/publiccart/publiccart.component.ts ***!
    \**********************************************************************/

  /*! exports provided: PubliccartComponent */

  /***/
  function srcAppComponentsPublicPubliccartPubliccartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PubliccartComponent", function () {
      return PubliccartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/request.service */
    "./src/app/services/request.service.ts");

    var PubliccartComponent =
    /*#__PURE__*/
    function () {
      function PubliccartComponent(request) {
        _classCallCheck(this, PubliccartComponent);

        this.request = request;
        this.items = [];
        this.selects = [];
        this.quantity = "";
      }

      _createClass(PubliccartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCart();
          this.getOferts();
        }
      }, {
        key: "getCart",
        value: function getCart() {
          var _this26 = this;

          this.request.getCart().subscribe(function (data) {
            console.log(data);
            _this26.items = data.items;

            _this26.loadSelects();

            console.log(_this26.selects);

            _this26.updateTotal();
          });
        }
      }, {
        key: "loadSelects",
        value: function loadSelects() {
          var _this27 = this;

          this.items.map(function (item) {
            var selectedSize = item.product.sizes.filter(function (size) {
              return size.id == item.size_id;
            });
            var setLength = selectedSize[0].products_sizes.quantity;
            var units = [];

            for (var index = 1; index <= setLength; index++) {
              units.push(index);
            }

            _this27.selects.push(units);
          });
        }
      }, {
        key: "getOferts",
        value: function getOferts() {
          var _this28 = this;

          this.request.getProductsOferts().subscribe(function (data) {
            console.log(data);
            _this28.oferts = data;
          });
        }
      }, {
        key: "send",
        value: function send() {
          console.log(this.items);
        }
      }, {
        key: "updateTotal",
        value: function updateTotal() {
          var total = 0;
          this.total = this.items.map(function (item) {
            item.product.sizes.map(function (size) {
              if (item.size_id == size.id) {
                total += item.quantity * item.price;
              }
            });
          });
          this.total = total;
        }
      }, {
        key: "deletoToCart",
        value: function deletoToCart(id) {
          var _this29 = this;

          this.request.deletoToCart(id).subscribe(function (data) {
            console.log(data);

            _this29.getCart();
          });
        }
      }]);

      return PubliccartComponent;
    }();

    PubliccartComponent.ctorParameters = function () {
      return [{
        type: _services_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"]
      }];
    };

    PubliccartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-publiccart",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./publiccart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/public/publiccart/publiccart.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./publiccart.component.css */
      "./src/app/components/public/publiccart/publiccart.component.css")).default]
    })], PubliccartComponent);
    /***/
  },

  /***/
  "./src/app/components/public/publiccategories/publiccategories.component.css":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/public/publiccategories/publiccategories.component.css ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPublicPubliccategoriesPubliccategoriesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHVibGljL3B1YmxpY2NhdGVnb3JpZXMvcHVibGljY2F0ZWdvcmllcy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/public/publiccategories/publiccategories.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/components/public/publiccategories/publiccategories.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: PubliccategoriesComponent */

  /***/
  function srcAppComponentsPublicPubliccategoriesPubliccategoriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PubliccategoriesComponent", function () {
      return PubliccategoriesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/request.service */
    "./src/app/services/request.service.ts");

    var PubliccategoriesComponent =
    /*#__PURE__*/
    function () {
      function PubliccategoriesComponent(request) {
        _classCallCheck(this, PubliccategoriesComponent);

        this.request = request;
        this.categories = [];
        this.sizes = [];
        this.products = [];
        this.cat = [];
        this.siz = [];
      }

      _createClass(PubliccategoriesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('hola');
          this.getAllCategories();
          this.getAllSizes();
          this.getAllProducts({
            query: 0
          });
        }
      }, {
        key: "getAllCategories",
        value: function getAllCategories() {
          var _this30 = this;

          this.request.getCategory().subscribe(function (data) {
            _this30.categories = data;
            console.log(data);
          });
        }
      }, {
        key: "getAllSizes",
        value: function getAllSizes() {
          var _this31 = this;

          this.request.getSizes().subscribe(function (data) {
            _this31.sizes = data;
            console.log(data);
          });
        }
      }, {
        key: "getAllProducts",
        value: function getAllProducts(query) {
          var _this32 = this;

          this.request.getAllForCategories(query).subscribe(function (data) {
            _this32.products = data;
            console.log(data);
          });
        }
      }, {
        key: "generateQuery",
        value: function generateQuery() {
          var query = {
            query: 1,
            categories: this.cat,
            sizes: this.siz
          };
          this.getAllProducts(query);
        }
      }, {
        key: "selectCategory",
        value: function selectCategory(id) {
          if (this.cat.length > 0) {
            var c = 0;
            this.cat = this.cat.filter(function (e) {
              if (e.id != id) {
                c++;
                return e;
              } else {
                c--;
              }
            });

            if (c == this.cat.length) {
              this.cat.push({
                id: id
              });
            }
          } else {
            this.cat.push({
              id: id
            });
          }

          this.generateQuery();
          console.log(this.cat);
        }
      }, {
        key: "selectSize",
        value: function selectSize(id) {
          if (this.siz.length > 0) {
            var c = 0;
            this.siz = this.siz.filter(function (e) {
              if (e.id != id) {
                c++;
                return e;
              } else {
                c--;
              }
            });

            if (c == this.siz.length) {
              this.siz.push({
                id: id
              });
            }
          } else {
            this.siz.push({
              id: id
            });
          }

          this.generateQuery();
          console.log(this.siz);
        }
      }]);

      return PubliccategoriesComponent;
    }();

    PubliccategoriesComponent.ctorParameters = function () {
      return [{
        type: _services_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"]
      }];
    };

    PubliccategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-publiccategories',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./publiccategories.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/public/publiccategories/publiccategories.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./publiccategories.component.css */
      "./src/app/components/public/publiccategories/publiccategories.component.css")).default]
    })], PubliccategoriesComponent);
    /***/
  },

  /***/
  "./src/app/components/public/publicproduct/publicproduct.component.css":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/public/publicproduct/publicproduct.component.css ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPublicPublicproductPublicproductComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHVibGljL3B1YmxpY3Byb2R1Y3QvcHVibGljcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/public/publicproduct/publicproduct.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/public/publicproduct/publicproduct.component.ts ***!
    \****************************************************************************/

  /*! exports provided: PublicproductComponent */

  /***/
  function srcAppComponentsPublicPublicproductPublicproductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublicproductComponent", function () {
      return PublicproductComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/request.service */
    "./src/app/services/request.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_toasts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/toasts.service */
    "./src/app/services/toasts.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var PublicproductComponent =
    /*#__PURE__*/
    function () {
      function PublicproductComponent(activeroute, request, router, _location, formBuilder, toast) {
        var _this33 = this;

        _classCallCheck(this, PublicproductComponent);

        this.activeroute = activeroute;
        this.request = request;
        this.router = router;
        this._location = _location;
        this.formBuilder = formBuilder;
        this.toast = toast;
        this.product = {
          sizes: []
        };
        this.related = [];
        this.id = this.activeroute.snapshot.params.id;
        router.events.subscribe(function (val) {
          console.log(val);
          _this33.id = _this33.activeroute.snapshot.params.id; //this.getProduct();

          console.log(_this33.product);
        });
      }

      _createClass(PublicproductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getProduct();
          this.createForm();
          console.log(this.formToAddCart);
        }
      }, {
        key: "createForm",
        value: function createForm() {
          this.formToAddCart = this.formBuilder.group({
            size: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            quantity: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)]]
          });
        }
      }, {
        key: "getProduct",
        value: function getProduct() {
          var _this34 = this;

          window.scroll(0, 0);
          this.request.getOneProduct(this.id).subscribe(function (data) {
            _this34.product = data;
            console.log(data);

            _this34.getRelated(data.categories[0]);
          });
        }
      }, {
        key: "getRelated",
        value: function getRelated(data) {
          var _this35 = this;

          this.request.getRelated(data).subscribe(function (data) {
            _this35.related = data;
            console.log(data);
          });
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this._location.back();
        }
      }, {
        key: "addToCart",
        value: function addToCart() {
          var _this36 = this;

          var validateSizes = this.product.sizes.filter(function (siz) {
            return siz.id == _this36.formToAddCart.value.size;
          });
          console.log(validateSizes);

          if (validateSizes[0].products_sizes.quantity >= this.formToAddCart.value.quantity) {
            var product = {
              product: this.product,
              request: this.formToAddCart.value
            };
            console.log(product);
            this.request.addToCart(product).subscribe(function (data) {
              console.log(data);
            });
          } else {
            console.log("cantidad mayor que la existencia");
          }
        }
      }]);

      return PublicproductComponent;
    }();

    PublicproductComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _services_toasts_service__WEBPACK_IMPORTED_MODULE_5__["ToastsService"]
      }];
    };

    PublicproductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-publicproduct",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./publicproduct.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/public/publicproduct/publicproduct.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./publicproduct.component.css */
      "./src/app/components/public/publicproduct/publicproduct.component.css")).default]
    })], PublicproductComponent);
    /***/
  },

  /***/
  "./src/app/components/sigin/sigin.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/sigin/sigin.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSiginSiginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\ncontentSigin {\n    height: 100%;\n}\n\ncontentSigin {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    padding-top: 40px;\n    padding-bottom: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWdpbi9zaWdpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFFSSxvQkFBYTtJQUFiLGFBQWE7SUFFYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZ2luL3NpZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnRlbnRTaWdpbiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5jb250ZW50U2lnaW4ge1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/sigin/sigin.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/sigin/sigin.component.ts ***!
    \*****************************************************/

  /*! exports provided: SiginComponent */

  /***/
  function srcAppComponentsSiginSiginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SiginComponent", function () {
      return SiginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/log.service */
    "./src/app/services/log.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var SiginComponent =
    /*#__PURE__*/
    function () {
      function SiginComponent(logservice, formBuilder) {
        _classCallCheck(this, SiginComponent);

        this.logservice = logservice;
        this.formBuilder = formBuilder;
      }

      _createClass(SiginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createBuildForm();
        }
      }, {
        key: "createBuildForm",
        value: function createBuildForm() {
          this.formCreateUser = this.formBuilder.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
            lastname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
            cedula: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
          });
          console.log(this.formCreateUser);
        }
      }, {
        key: "createUser",
        value: function createUser() {
          var user = this.formCreateUser.value;
          this.logservice.SingUser(user);
        }
      }]);

      return SiginComponent;
    }();

    SiginComponent.ctorParameters = function () {
      return [{
        type: _services_log_service__WEBPACK_IMPORTED_MODULE_2__["LogService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    SiginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sigin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sigin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sigin/sigin.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sigin.component.css */
      "./src/app/components/sigin/sigin.component.css")).default]
    })], SiginComponent);
    /***/
  },

  /***/
  "./src/app/elements/cards/cards.component.css":
  /*!****************************************************!*\
    !*** ./src/app/elements/cards/cards.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppElementsCardsCardsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".button-pink{\n    background-color: #e7b6b2;\n    border-color:  #e7b6b2;\n}\n#img-size{\n    width: 228px;\n    height: 228px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWxlbWVudHMvY2FyZHMvY2FyZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvZWxlbWVudHMvY2FyZHMvY2FyZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24tcGlua3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdiNmIyO1xuICAgIGJvcmRlci1jb2xvcjogICNlN2I2YjI7XG59XG4jaW1nLXNpemV7XG4gICAgd2lkdGg6IDIyOHB4O1xuICAgIGhlaWdodDogMjI4cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/elements/cards/cards.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/elements/cards/cards.component.ts ***!
    \***************************************************/

  /*! exports provided: CardsComponent */

  /***/
  function srcAppElementsCardsCardsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardsComponent", function () {
      return CardsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/request.service */
    "./src/app/services/request.service.ts");
    /* harmony import */


    var _services_toasts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/toasts.service */
    "./src/app/services/toasts.service.ts");

    var CardsComponent =
    /*#__PURE__*/
    function () {
      function CardsComponent(request, toasts) {
        _classCallCheck(this, CardsComponent);

        this.request = request;
        this.toasts = toasts;
        this.reloadCart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sizeSelected = "";
        this.images = ["http://localhost:4200/assets/imagesfront/val3.jpeg", "http://localhost:4200/assets/imagesfront/val3.jpeg", "http://localhost:4200/assets/imagesfront/val3.jpeg", "http://localhost:4200/assets/imagesfront/val3.jpeg", "http://localhost:4200/assets/imagesfront/val3.jpeg", "http://localhost:4200/assets/imagesfront/val3.jpeg"];
      }

      _createClass(CardsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.product);
        }
      }, {
        key: "addToCart",
        value: function addToCart() {
          var _this37 = this;

          var product = {
            product: this.product,
            request: {
              size: this.sizeSelected,
              quantity: 1
            }
          };
          console.log(product);
          this.request.addToCart(product).subscribe(function (data) {
            console.log(data);

            if (data == "01") {
              _this37.toasts.showSuccess('Agregado al Carrito', 'Su producto ha sido agregado al su carrito ');
            } else if (data == "02") {
              _this37.toasts.showSuccess('Operación exitosa', 'El producto ya se encuentra en su carrito');
            } else {
              _this37.toasts.showError('Error', 'Lo sentimos su producto no pudo ser agregado al carrito');
            }

            _this37.reloadCart.emit();
          });
          this.sizeSelected = "";
        }
      }]);

      return CardsComponent;
    }();

    CardsComponent.ctorParameters = function () {
      return [{
        type: _services_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"]
      }, {
        type: _services_toasts_service__WEBPACK_IMPORTED_MODULE_3__["ToastsService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('product')], CardsComponent.prototype, "product", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CardsComponent.prototype, "reloadCart", void 0);
    CardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cards',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cards.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/elements/cards/cards.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cards.component.css */
      "./src/app/elements/cards/cards.component.css")).default]
    })], CardsComponent);
    /***/
  },

  /***/
  "./src/app/guards/admin.guard.ts":
  /*!***************************************!*\
    !*** ./src/app/guards/admin.guard.ts ***!
    \***************************************/

  /*! exports provided: AdminGuard */

  /***/
  function srcAppGuardsAdminGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminGuard", function () {
      return AdminGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/request.service */
    "./src/app/services/request.service.ts");

    var AdminGuard =
    /*#__PURE__*/
    function () {
      function AdminGuard(request, router) {
        _classCallCheck(this, AdminGuard);

        this.request = request;
        this.router = router;
      }

      _createClass(AdminGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (this.request.session.type == 'admin') {
            console.log('adminguard');
            return true;
          } else {
            this.router.navigate(['/public/index']);
            return false;
          }
        }
      }]);

      return AdminGuard;
    }();

    AdminGuard.ctorParameters = function () {
      return [{
        type: _services_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AdminGuard);
    /***/
  },

  /***/
  "./src/app/guards/logged.guard.ts":
  /*!****************************************!*\
    !*** ./src/app/guards/logged.guard.ts ***!
    \****************************************/

  /*! exports provided: LoggedGuard */

  /***/
  function srcAppGuardsLoggedGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoggedGuard", function () {
      return LoggedGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/request.service */
    "./src/app/services/request.service.ts");

    var LoggedGuard =
    /*#__PURE__*/
    function () {
      function LoggedGuard(request, router) {
        _classCallCheck(this, LoggedGuard);

        this.request = request;
        this.router = router;
      }

      _createClass(LoggedGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (this.request.session == null) {
            return true;
          } else {
            if (this.request.session.type == 'admin') {
              this.router.navigate(['/admin/dashboard']);
            } else {
              this.router.navigate(['/public']);
            }

            return false;
          }
        }
      }]);

      return LoggedGuard;
    }();

    LoggedGuard.ctorParameters = function () {
      return [{
        type: _services_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    LoggedGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoggedGuard);
    /***/
  },

  /***/
  "./src/app/guards/login.guard.ts":
  /*!***************************************!*\
    !*** ./src/app/guards/login.guard.ts ***!
    \***************************************/

  /*! exports provided: LoginGuard */

  /***/
  function srcAppGuardsLoginGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginGuard", function () {
      return LoginGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/request.service */
    "./src/app/services/request.service.ts");

    var LoginGuard =
    /*#__PURE__*/
    function () {
      function LoginGuard(request, router) {
        _classCallCheck(this, LoginGuard);

        this.request = request;
        this.router = router;
      }

      _createClass(LoginGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (this.request.session == null) {
            this.router.navigate(['/login']);
            return false;
          } else {
            console.log('loginguard');
            return true;
          }
        }
      }]);

      return LoginGuard;
    }();

    LoginGuard.ctorParameters = function () {
      return [{
        type: _services_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    LoginGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoginGuard);
    /***/
  },

  /***/
  "./src/app/services/image.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/image.service.ts ***!
    \*******************************************/

  /*! exports provided: ImageService */

  /***/
  function srcAppServicesImageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageService", function () {
      return ImageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ImageService =
    /*#__PURE__*/
    function () {
      function ImageService() {
        _classCallCheck(this, ImageService);
      }

      _createClass(ImageService, [{
        key: "onUploadChange",
        value: function onUploadChange(evt) {
          var file = evt.target.files;
          var data = [];
          this.base64textString = [];

          for (var index = 0; index < file.length; index++) {
            var f = file[index];

            if (f) {
              var reader = new FileReader();
              reader.onload = this.handleReaderLoaded.bind(this);
              reader.readAsBinaryString(f);
            }
          }

          return this.base64textString;
        }
      }, {
        key: "handleReaderLoaded",
        value: function handleReaderLoaded(e) {
          this.base64textString.push(btoa(e.target.result));
        }
      }]);

      return ImageService;
    }();

    ImageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ImageService);
    /***/
  },

  /***/
  "./src/app/services/log.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/log.service.ts ***!
    \*****************************************/

  /*! exports provided: LogService */

  /***/
  function srcAppServicesLogServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogService", function () {
      return LogService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/request.service */
    "./src/app/services/request.service.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");

    var LogService =
    /*#__PURE__*/
    function () {
      function LogService(request, router, spinner) {
        _classCallCheck(this, LogService);

        this.request = request;
        this.router = router;
        this.spinner = spinner;
      }

      _createClass(LogService, [{
        key: "SingUser",
        value: function SingUser(data) {
          var _this38 = this;

          this.spinner.show();
          this.request.SingUser(data).subscribe(function (data) {
            if (data == 1) {
              console.log("error en las credenciales");
            } else {
              _this38.request.session = data;
              _this38.request.token = data.tokens[0].token;
              _this38.request.id = data.id;
              localStorage.setItem('session', JSON.stringify(data));
              console.log(data);

              if (data.type == 'admin') {
                console.log('admin');

                _this38.router.navigate(['/admin/dashboard']);
              } else {
                console.log('user');

                _this38.router.navigate(['/public/index']);
              }
            }

            _this38.spinner.hide();
          });
        }
      }, {
        key: "loginUser",
        value: function loginUser(data) {
          var _this39 = this;

          console.log("llamando");
          this.request.loginUser(data).subscribe(function (data) {
            if (data == 1) {
              console.log("error en las credenciales");
            } else {
              _this39.request.session = data;
              _this39.request.token = data.tokens[0].token;
              _this39.request.id = data.id;
              localStorage.setItem('session', JSON.stringify(data));

              if (data.type == 'admin') {
                _this39.router.navigate(['/admin/dashboard']);
              } else {
                _this39.router.navigate(['/public/index']);
              }
            }

            _this39.spinner.hide();
          });
        }
      }, {
        key: "loadSession",
        value: function loadSession() {
          var _this40 = this;

          this.spinner.show();
          var session = JSON.parse(localStorage.getItem('session'));
          console.log(session);

          if (session == null) {
            this.clearSession();
            this.spinner.hide();
          } else {
            this.request.session = session;
            this.request.token = session.tokens[0].token;
            this.request.id = session.id;
            this.request.loadSession(session).subscribe(function (data) {
              if (data == null || data == 1) {
                _this40.clearSession();
              } else {
                _this40.request.session = data;
                _this40.request.token = data.tokens[0].token;
                _this40.request.id = data.id;
                localStorage.setItem('session', JSON.stringify(data));
                /* if (data.type == 'admin') {
                   this.router.navigate(['/admin/dashboard']);
                 } else {
                   this.router.navigate(['/public/index']);
                 }
                */
              }

              _this40.spinner.hide();
            });
          }
        }
      }, {
        key: "clearSession",
        value: function clearSession() {
          this.request.session = null;
          this.request.token = null;
          this.request.id = null;
          localStorage.removeItem('session');
          this.router.navigate(['/']);
        }
      }, {
        key: "logOut",
        value: function logOut() {
          var _this41 = this;

          this.spinner.show();
          this.request.logOut().subscribe(function (data) {
            console.log(data);

            _this41.clearSession();

            _this41.spinner.hide();
          });
        }
      }]);

      return LogService;
    }();

    LogService.ctorParameters = function () {
      return [{
        type: _services_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]
      }];
    };

    LogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LogService);
    /***/
  },

  /***/
  "./src/app/services/request.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/request.service.ts ***!
    \*********************************************/

  /*! exports provided: RequestService */

  /***/
  function srcAppServicesRequestServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestService", function () {
      return RequestService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var RequestService =
    /*#__PURE__*/
    function () {
      function RequestService(http) {
        _classCallCheck(this, RequestService);

        this.http = http;
        this.urlback = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlBack;
        this.session = null;
        this.token = null;
        this.id = null;
      } //headers


      _createClass(RequestService, [{
        key: "generateHeaders",
        value: function generateHeaders() {
          var header = {};
          var id = "" + this.id;

          if (this.token != null) {
            header = {
              api_token: this.token,
              user_id: id
            };
          }

          return header;
        } //headerEnd
        //session---------------------------------------------------------------------

      }, {
        key: "SingUser",
        value: function SingUser(data) {
          return this.http.post(this.urlback + "sigin", data);
        }
      }, {
        key: "loginUser",
        value: function loginUser(data) {
          return this.http.post(this.urlback + "login", data);
        }
      }, {
        key: "loadSession",
        value: function loadSession(data) {
          return this.http.post(this.urlback + "loadsession", data, {
            headers: this.generateHeaders()
          });
        }
      }, {
        key: "logOut",
        value: function logOut() {
          return this.http.get(this.urlback + "logout", {
            headers: this.generateHeaders()
          });
        } //sessionEnd----------------------------------------------------
        //admin methods///////////////////////////////

      }, {
        key: "getUsers",
        value: function getUsers() {
          return this.http.get(this.urlback + "index", {
            headers: this.generateHeaders()
          });
        } //category Admin-----------------------------------------------------

      }, {
        key: "getCategory",
        value: function getCategory() {
          return this.http.get(this.urlback + "category");
        }
      }, {
        key: "createCategory",
        value: function createCategory(data) {
          return this.http.post(this.urlback + "category/create", data, {
            headers: this.generateHeaders()
          });
        }
      }, {
        key: "updateCategory",
        value: function updateCategory(data) {
          return this.http.post(this.urlback + "category/update", data, {
            headers: this.generateHeaders()
          });
        }
      }, {
        key: "deleteCategory",
        value: function deleteCategory(data) {
          return this.http.post(this.urlback + "category/delete", data, {
            headers: this.generateHeaders()
          });
        } //category Admin End--------------------------------------------------
        //Prducts------------------------------------------------------

      }, {
        key: "getProducts",
        value: function getProducts() {
          return this.http.get(this.urlback + "products", {
            headers: this.generateHeaders()
          });
        }
      }, {
        key: "getOneProduct",
        value: function getOneProduct(id) {
          return this.http.get(this.urlback + "product/" + id, {
            headers: this.generateHeaders()
          });
        }
      }, {
        key: "createProducts",
        value: function createProducts(data) {
          return this.http.post(this.urlback + "products/create", data, {
            headers: this.generateHeaders()
          });
        }
      }, {
        key: "updateProducts",
        value: function updateProducts(data) {
          return this.http.post(this.urlback + "products/update", data, {
            headers: this.generateHeaders()
          });
        }
      }, {
        key: "deleteProducts",
        value: function deleteProducts(data) {
          return this.http.post(this.urlback + "products/delete", data, {
            headers: this.generateHeaders()
          });
        } //PrductsEnd------------------------------------------------------
        //Prducts------------------------------------------------------

      }, {
        key: "getProductsGalery",
        value: function getProductsGalery(id) {
          return this.http.get(this.urlback + "products/galery/" + id, {
            headers: this.generateHeaders()
          });
        }
      }, {
        key: "createProductsGalery",
        value: function createProductsGalery(data) {
          return this.http.post(this.urlback + "products/galery/create", data, {
            headers: this.generateHeaders()
          });
        }
      }, {
        key: "updateProductsGalery",
        value: function updateProductsGalery(data) {
          return this.http.post(this.urlback + "products/galery/update", data, {
            headers: this.generateHeaders()
          });
        }
      }, {
        key: "deleteProductsGalery",
        value: function deleteProductsGalery(id) {
          return this.http.post(this.urlback + "products/galery/delete", id, {
            headers: this.generateHeaders()
          });
        } //PrductsEnd------------------------------------------------------

      }, {
        key: "getSizes",
        value: function getSizes() {
          return this.http.get(this.urlback + "sizes", {
            headers: this.generateHeaders()
          });
        } //end admin methods///////////////////////////////
        //front methods///////////////////////////////

      }, {
        key: "getProductsPopular",
        value: function getProductsPopular() {
          return this.http.get(this.urlback + "products/populars", {
            headers: this.generateHeaders()
          });
        }
      }, {
        key: "getProductsOferts",
        value: function getProductsOferts() {
          return this.http.get(this.urlback + "products/oferts", {
            headers: this.generateHeaders()
          });
        }
      }, {
        key: "getRelated",
        value: function getRelated(categories) {
          return this.http.post(this.urlback + "product/related", categories, {
            headers: this.generateHeaders()
          });
        } //products for category

      }, {
        key: "getAllForCategories",
        value: function getAllForCategories(query) {
          return this.http.post(this.urlback + "product/for/category", query, {
            headers: this.generateHeaders()
          });
        } //products for category End
        //cart operations

      }, {
        key: "getCart",
        value: function getCart() {
          return this.http.get(this.urlback + "cart", {
            headers: this.generateHeaders()
          });
        }
      }, {
        key: "addToCart",
        value: function addToCart(data) {
          return this.http.post(this.urlback + "cart/add", data, {
            headers: this.generateHeaders()
          });
        }
      }, {
        key: "deletoToCart",
        value: function deletoToCart(id) {
          return this.http.post(this.urlback + "cart/delete", {
            id: id
          }, {
            headers: this.generateHeaders()
          });
        }
      }]);

      return RequestService;
    }();

    RequestService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    RequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], RequestService);
    /***/
  },

  /***/
  "./src/app/services/toasts.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/toasts.service.ts ***!
    \********************************************/

  /*! exports provided: ToastsService */

  /***/
  function srcAppServicesToastsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastsService", function () {
      return ToastsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var ToastsService =
    /*#__PURE__*/
    function () {
      function ToastsService(toastr) {
        _classCallCheck(this, ToastsService);

        this.toastr = toastr;
        this.toasts = [];
      }

      _createClass(ToastsService, [{
        key: "showSuccess",
        value: function showSuccess(title, message) {
          this.toastr.success(message, title);
        }
      }, {
        key: "showError",
        value: function showError(title, message) {
          this.toastr.error(message, title);
        }
      }]);

      return ToastsService;
    }();

    ToastsService.ctorParameters = function () {
      return [{
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
      }];
    };

    ToastsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ToastsService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      urlFront: 'https://back.espartacoing.now.sh',
      urlFrontImages: 'https://back.espartacoing.now.sh/assets/',
      urlBack: 'https://back.espartacoing.now.sh/api/'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /opt/lampp/htdocs/cfvnow/front/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
webpackJsonp([3],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InternshipServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_config__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the InternshipServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var InternshipServiceProvider = /** @class */ (function () {
    function InternshipServiceProvider(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
    }
    InternshipServiceProvider.prototype.getAllInternships = function () {
        return this.http.get(this.appConfig.apiUrl + '/api/Internship').map(function (res) { return res.json(); });
    };
    InternshipServiceProvider.prototype.getExportData = function (internshipId, userId) {
        return this.http.get(this.appConfig.apiUrl + '/api/Experience/GetExportData/' + internshipId + '/' + userId).map(function (res) { return res.json(); });
    };
    InternshipServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppConfig */]])
    ], InternshipServiceProvider);
    return InternshipServiceProvider;
}());

//# sourceMappingURL=internship-service.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the AuthenticationServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthenticationServiceProvider = /** @class */ (function () {
    function AuthenticationServiceProvider(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
        this.isAuthenticated$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](false);
    }
    AuthenticationServiceProvider.prototype.login = function (email, password) {
        var _this = this;
        return this.http.post(this.appConfig.apiUrl + '/api/User/', { email: email, password: password })
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var user = response.json();
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                localStorage.setItem('userId', JSON.stringify(user.id));
                _this.isAuthenticated$.next(true);
            }
        });
    };
    AuthenticationServiceProvider.prototype.logout = function () {
        localStorage.removeItem('internshipId');
        localStorage.removeItem('userId');
        localStorage.removeItem('currentUser');
        this.isAuthenticated$.next(false);
    };
    AuthenticationServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */]])
    ], AuthenticationServiceProvider);
    return AuthenticationServiceProvider;
}());

//# sourceMappingURL=authentication-service.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, userService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.toastCtrl = toastCtrl;
        this.model = {};
        this.loading = false;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        if (localStorage.getItem("currentUser"))
            this.navCtrl.push('');
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.userService.create(this.model).subscribe(function (data) {
            var alert = _this.toastCtrl.create({
                message: 'User registered successfully!',
                duration: 2000
            });
            alert.present();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        }, function (err) {
            var alert = _this.toastCtrl.create({
                message: err._body,
                duration: 2000
            });
            alert.present();
        });
    };
    RegisterPage.prototype.navigateToLoginPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"/home/dacy/Python Development/ASPNET-Core-Angular-Midwife/front-end/midwife/src/pages/register/register.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="danger">\n\n    <!-- <ion-title>register</ion-title> -->\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <form name="form" (ngSubmit)="f.form.valid && register()" #f="ngForm" novalidate>\n\n\n\n      <ion-item [ngClass]="{ \'has-error\': f.submitted && !email.valid }">\n\n        <ion-label>First Name</ion-label>\n\n        <ion-input class="text-input" type="text" name="firstName" [(ngModel)]="model.firstName" #firstName="ngModel" required></ion-input>\n\n\n\n      </ion-item>\n\n      <ion-label style="color: red; text-align: center" *ngIf="f.submitted && !firstName.valid">First Name is required</ion-label>\n\n\n\n      <ion-item [ngClass]="{ \'has-error\': f.submitted && !email.valid }">\n\n        <ion-label>Last Name</ion-label>\n\n        <ion-input class="text-input" type="text" name="lastName" [(ngModel)]="model.lastName" #lastName="ngModel" required></ion-input>\n\n\n\n      </ion-item>\n\n      <ion-label style="color: red; text-align: center" *ngIf="f.submitted && !lastName.valid">Last Name is required</ion-label>\n\n\n\n      <ion-item [ngClass]="{ \'has-error\': f.submitted && !email.valid }">\n\n        <ion-label>Email</ion-label>\n\n        <ion-input class="text-input" type="email" name="email" [(ngModel)]="model.email" #email="ngModel" required></ion-input>\n\n\n\n      </ion-item>\n\n      <ion-label style="color: red; text-align: center" *ngIf="f.submitted && !email.valid">Email is required</ion-label>\n\n\n\n      <ion-item [ngClass]="{ \'has-error\': f.submitted && !password.valid }">\n\n        <ion-label>Password</ion-label>\n\n        <ion-input class="text-input" type="password" name="password" [(ngModel)]="model.password" #password="ngModel" required></ion-input>\n\n\n\n      </ion-item>\n\n      <ion-label style="color: red; text-align: center" *ngIf="f.submitted && !password.valid">Password is required</ion-label>\n\n\n\n\n\n      <button ion-button color="danger" type="submit" block>Register</button>\n\n\n\n      <p class="message" style="text-align: center;">Already Registered?\n\n          <a (click)="navigateToLoginPage()">Login</a>\n\n      </p>\n\n\n\n    </form>\n\n\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/home/dacy/Python Development/ASPNET-Core-Angular-Midwife/front-end/midwife/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__["a" /* UserServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_internship_service_internship_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_csv_Angular2_csv__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_csv_Angular2_csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_csv_Angular2_csv__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the OverviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OverviewPage = /** @class */ (function () {
    function OverviewPage(navCtrl, navParams, internshipService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.internshipService = internshipService;
        /* Display Overview of all tasks for a given user */
        this.data = [];
        this.internshipId = JSON.parse(localStorage.getItem('internshipId'));
        this.userId = JSON.parse(localStorage.getItem('userId'));
    }
    OverviewPage.prototype.ionViewWillEnter = function () {
        this.loadExportData();
    };
    OverviewPage.prototype.loadExportData = function () {
        var _this = this;
        this.internshipService.getExportData(this.internshipId, this.userId).subscribe(function (data) {
            _this.data = data;
        });
    };
    OverviewPage.prototype.getExportedData = function (internshipId, userId) {
        var _this = this;
        internshipId = this.internshipId;
        this.internshipService.getExportData(internshipId, userId).subscribe(function (data) {
            _this.data = data;
            var head = ['Title', 'Total No Times', 'Internship Name', 'Email', 'First Name', 'Last Name'];
            new __WEBPACK_IMPORTED_MODULE_3_angular2_csv_Angular2_csv__["Angular2Csv"](_this.data, 'Overview Report', { headers: (head) });
        });
    };
    OverviewPage.prototype.exportData = function () {
        this.getExportedData(this.internshipId, this.userId);
    };
    OverviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-overview',template:/*ion-inline-start:"/home/dacy/Python Development/ASPNET-Core-Angular-Midwife/front-end/midwife/src/pages/overview/overview.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="danger">\n\n    <ion-title class="title">Overview</ion-title>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding >\n\n  <button ion-button color="danger" round (click)="exportData()">Export Data</button>\n\n\n\n  <ion-grid padding *ngFor="let d of data">\n\n\n\n    <ion-row >\n\n      <div class="col">\n\n        <ion-label>{{d.title}}</ion-label>\n\n      </div>\n\n      <div class="col">\n\n        <ion-label class="times">{{d.totalNoOfTimes}}</ion-label>\n\n      </div>\n\n    </ion-row>\n\n\n\n  </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"/home/dacy/Python Development/ASPNET-Core-Angular-Midwife/front-end/midwife/src/pages/overview/overview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_internship_service_internship_service__["a" /* InternshipServiceProvider */]])
    ], OverviewPage);
    return OverviewPage;
}());

//# sourceMappingURL=overview.js.map

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 166;

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		690,
		2
	],
	"../pages/overview/overview.module": [
		691,
		1
	],
	"../pages/register/register.module": [
		692,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 211;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_config__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserServiceProvider = /** @class */ (function () {
    function UserServiceProvider(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
    }
    UserServiceProvider.prototype.create = function (user) {
        return this.http.post(this.appConfig.apiUrl + '/api/User/Register', user, this.jwt());
    };
    // private helper methods
    UserServiceProvider.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        }
    };
    UserServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* AppConfig */]])
    ], UserServiceProvider);
    return UserServiceProvider;
}());

//# sourceMappingURL=user-service.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__overview_overview__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__overview_overview__["a" /* OverviewPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/dacy/Python Development/ASPNET-Core-Angular-Midwife/front-end/midwife/src/pages/tabs/tabs.html"*/'<ion-tabs color="danger">\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Overview" tabIcon="information-circle"></ion-tab>\n\n  <!-- <ion-tab [root]="tab3Root" tabTitle="Login" tabIcon="contacts"></ion-tab> -->\n\n</ion-tabs>\n\n'/*ion-inline-end:"/home/dacy/Python Development/ASPNET-Core-Angular-Midwife/front-end/midwife/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_task_service_task_service__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, datePipe, taskService, toastCtrl, fb) {
        this.navCtrl = navCtrl;
        this.datePipe = datePipe;
        this.taskService = taskService;
        this.toastCtrl = toastCtrl;
        this.fb = fb;
        /* Input validation noOfTimes button -> button can be accessed only if checkbox is checked */
        this.noOfTimesBtn = true;
        /* Define an empty string for searchbox functionality */
        this.searchTerm = '';
        /* Display all tasks */
        this.taskList = [];
        /* Display calendar date in navigation bar */
        this.date = new Date().toISOString();
        this.datePipe.transform(this.date, "yyyy-MM-dd");
        this.userId = JSON.parse(localStorage.getItem('userId'));
        this.internshipId = JSON.parse(localStorage.getItem("internshipId"));
        this.noOfTimes = [
            {
                options: [
                    { text: '0', value: '0' },
                    { text: '1', value: '1' },
                    { text: '2', value: '2' },
                    { text: '3', value: '3' },
                    { text: '4', value: '4' },
                    { text: '5', value: '5' },
                    { text: '6', value: '6' },
                    { text: '7', value: '7' },
                    { text: '8', value: '8' },
                    { text: '9', value: '9' },
                    { text: '10', value: '10' }
                ]
            }
        ];
        this.getAllExperiences();
    }
    HomePage.prototype.ionViewDidLoad = function () { };
    HomePage.prototype.getAllExperiences = function () {
        var _this = this;
        var dateStr = this.datePipe.transform(this.date, "yyyy-MM-dd");
        this.taskService.getUnionCollectionData(dateStr, this.userId, this.internshipId).subscribe(function (data) {
            _this.taskList = data;
        });
    };
    HomePage.prototype.updateNoOfTimesValue = function (task) {
        var _this = this;
        var date = this.datePipe.transform(this.date, "yyyy-MM-dd");
        this.taskService.updateNoOfTimes(task, date).subscribe(function () {
            _this.getAllExperiences();
            var alert = _this.toastCtrl.create({
                message: 'The number of times has been successfully updated!',
                duration: 2000
            });
            alert.present();
        }, function (err) {
            var alert = _this.toastCtrl.create({
                message: err._body,
                duration: 2000
            });
            alert.present();
        });
    };
    HomePage.prototype.getDateValue = function (date) {
        var _this = this;
        var dateStr = this.datePipe.transform(date, "yyyy-MM-dd");
        this.taskService.getUnionCollectionData(dateStr, this.userId, this.internshipId).subscribe(function (tasks) {
            _this.taskList = tasks;
        });
    };
    HomePage.prototype.searchExperience = function (ev) {
        this.searchTerm = ev.target.value;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/home/dacy/Python Development/ASPNET-Core-Angular-Midwife/front-end/midwife/src/pages/home/home.html"*/'<ion-header>\n\n  <ion-navbar color="danger">\n\n    <ion-datetime class="date" min="2019" max="2019" displayFormat="DD MMM YYYY" [(ngModel)]="date" (ionChange)="getDateValue(date)"></ion-datetime>\n\n    <ion-title></ion-title>\n\n\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n\n\n  </ion-navbar>\n\n  <ion-toolbar>\n\n      <ion-searchbar  [(ngModel)]="searchText" (ionInput)="searchExperience($event)"></ion-searchbar>\n\n  </ion-toolbar>\n\n\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n\n\n <ion-content padding  no-bounce overflow-scroll="false">\n\n\n\n  \n\n\n\n  <ion-grid *ngFor="let task of taskList  | search: searchTerm ; let i=index">\n\n\n\n    <ion-row>\n\n      <div class="col">\n\n        <ion-label style="font-size:12px;" stacked class="task-name" [class.done]="task.isChecked">{{task.title}}</ion-label>\n\n      </div>\n\n      <div class="col">\n\n        <ion-multi-picker class="times" item-content [multiPickerColumns]="noOfTimes" [(ngModel)]="task.noOfTimes" (ionChange)="updateNoOfTimesValue(task)"></ion-multi-picker>\n\n      </div>\n\n\n\n    </ion-row>\n\n\n\n  </ion-grid>\n\n\n\n</ion-content> \n\n'/*ion-inline-end:"/home/dacy/Python Development/ASPNET-Core-Angular-Midwife/front-end/midwife/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_2__providers_task_service_task_service__["a" /* TaskServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_config__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the TaskServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TaskServiceProvider = /** @class */ (function () {
    function TaskServiceProvider(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
    }
    TaskServiceProvider.prototype.getUnionCollectionData = function (date, userId, internshipId) {
        return this.http.get(this.appConfig.apiUrl + '/api/Experience/GetUnionCollections/' + date + '/' + userId + '/' + internshipId).map(function (res) { return res.json(); });
    };
    TaskServiceProvider.prototype.updateNoOfTimes = function (task, date) {
        var internshipId = JSON.parse(localStorage.getItem('internshipId'));
        var userId = JSON.parse(localStorage.getItem('userId'));
        var taskNoOfTimes = task.noOfTimes;
        var finalId = "";
        var taskId = task.taskId;
        var realTaskId = task.id;
        if (taskId == undefined) {
            finalId = realTaskId;
        }
        else {
            if (realTaskId == undefined) {
                finalId = taskId;
            }
        }
        var dataObject = {
            taskId: finalId,
            taskDate: date,
            noOfTimes: taskNoOfTimes,
            userId: userId,
            internshipId: internshipId
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.appConfig.apiUrl + "/api/Experience/StoreOrUpdateData", dataObject, options);
    };
    TaskServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppConfig */]])
    ], TaskServiceProvider);
    return TaskServiceProvider;
}());

//# sourceMappingURL=task-service.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(359);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_task_service_task_service__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_internship_service_internship_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_config__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_about_about__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ion_multi_picker__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ion_multi_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ion_multi_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_search_search__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_overview_overview__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_register_register__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_user_service_user_service__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_authentication_service_authentication_service__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import { HttpClientModule } from '@angular/common/http';



/* Ionic Services */


/* Web API Url */

/* Ionic Pages */





/* Ionic New Components */








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_17__pipes_search_search__["a" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_19__pages_overview_overview__["a" /* OverviewPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_register_register__["a" /* RegisterPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    scrollPadding: false,
                    scrollAssist: true,
                    autoFocusAssist: false
                }, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/overview/overview.module#OverviewPageModule', name: 'OverviewPage', segment: 'overview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_15_ion_multi_picker__["MultiPickerModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_overview_overview__["a" /* OverviewPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_register_register__["a" /* RegisterPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] },
                __WEBPACK_IMPORTED_MODULE_7__providers_task_service_task_service__["a" /* TaskServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_8__providers_internship_service_internship_service__["a" /* InternshipServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_9__app_config__["a" /* AppConfig */],
                __WEBPACK_IMPORTED_MODULE_16__angular_common__["d" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_17__pipes_search_search__["a" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_21__providers_user_service_user_service__["a" /* UserServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
var AppConfig = /** @class */ (function () {
    function AppConfig() {
        this.apiUrl = 'http://localhost:61836';
    }
    return AppConfig;
}());

;
//# sourceMappingURL=app-config.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_internship_service_internship_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_authentication_service_authentication_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, internshipService, toastrCtrl, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.internshipService = internshipService;
        this.toastrCtrl = toastrCtrl;
        this.authService = authService;
        /* Disable login button until internship selection is made */
        this.loginBtnDisabled = true;
        this.model = {};
    }
    LoginPage_1 = LoginPage;
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.authService.logout();
        this.internshipService.getAllInternships().subscribe(function (data) {
            _this.internshipList = data;
        });
    };
    /* Select internship and get internship id value*/
    LoginPage.prototype.getInternshipIdValue = function ($event) {
        this.loginBtnDisabled = false;
        localStorage.setItem('internshipId', JSON.stringify($event.id));
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.authService.login(this.model.email, this.model.password).subscribe(function () {
            /* If user authenticated then redirect to HomePage */
            var alert = _this.toastrCtrl.create({
                message: 'User successfully authenticated!',
                duration: 2000
            });
            alert.present();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
        }, function (err) {
            var alert = _this.toastrCtrl.create({
                message: err._body,
                duration: 2000
            });
            alert.present();
            _this.navCtrl.setRoot(LoginPage_1);
        });
    };
    LoginPage.prototype.navigateToRegisterPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    LoginPage = LoginPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/home/dacy/Python Development/ASPNET-Core-Angular-Midwife/front-end/midwife/src/pages/login/login.html"*/'<ion-header>\n\n  <ion-navbar color="danger">\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="scroll-content">\n\n\n\n  <ion-list>\n\n\n\n    <form name="form" (ngSubmit)="f.form.valid && login()" #f="ngForm" novalidate>\n\n\n\n    <ion-item>\n\n      <ion-label>Select Internship</ion-label>\n\n      <ion-select (ionChange)="getInternshipIdValue($event)">\n\n        <ion-option *ngFor="let internship of internshipList" [value]="internship">{{internship.internshipName}}</ion-option>\n\n      </ion-select>\n\n    </ion-item> \n\n\n\n\n\n      <ion-item [ngClass]="{ \'has-error\': f.submitted && !email.valid }">\n\n        <ion-label>Email</ion-label>\n\n        <ion-input class="text-input" type="email" name="email" [(ngModel)]="model.email" #email="ngModel" required></ion-input>\n\n\n\n      </ion-item>\n\n      <ion-label style="color: red; text-align: center" *ngIf="f.submitted && !email.valid">Email is required</ion-label>\n\n\n\n      <ion-item [ngClass]="{ \'has-error\': f.submitted && !password.valid }">\n\n        <ion-label>Password</ion-label>\n\n        <ion-input class="text-input" type="password" name="password" [(ngModel)]="model.password" #password="ngModel" required></ion-input>\n\n\n\n      </ion-item>\n\n      <ion-label style="color: red; text-align: center" *ngIf="f.submitted && !password.valid">Password is required</ion-label>\n\n\n\n\n\n      <button ion-button [disabled]="loginBtnDisabled" color="danger" type="submit" block>Login</button>\n\n\n\n      <p class="message" style="text-align: center;">Not Registered Yet?\n\n        <a (click)="navigateToRegisterPage()">Register</a>\n\n      </p>\n\n\n\n    </form>\n\n\n\n  </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"/home/dacy/Python Development/ASPNET-Core-Angular-Midwife/front-end/midwife/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_internship_service_internship_service__["a" /* InternshipServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */]])
    ], LoginPage);
    return LoginPage;
    var LoginPage_1;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_authentication_service_authentication_service__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, auth, toastrCtrl) {
        var _this = this;
        this.auth = auth;
        this.toastrCtrl = toastrCtrl;
        this.isAuthenticated$ = this.auth.isAuthenticated$;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.isAuthenticated$.subscribe(function (authenticated) {
            _this.isAuthenticated = authenticated;
            if (authenticated) {
                _this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
            }
            else {
                _this.currentUser = null;
            }
        });
    }
    MyApp.prototype.logout = function () {
        var alert = this.toastrCtrl.create({
            message: 'User logged out successfully!',
            duration: 2000
        });
        alert.present();
        this.auth.logout();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mycontent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/dacy/Python Development/ASPNET-Core-Angular-Midwife/front-end/midwife/src/app/app.html"*/'\n\n    <ion-menu [content]="mycontent">\n\n\n\n        <ion-header>\n\n            <ion-toolbar color="danger">\n\n                <ion-title menuClose detail-none>\n\n                    <ion-icon name="menu"></ion-icon>\n\n                </ion-title>\n\n            </ion-toolbar>\n\n        </ion-header>\n\n        <ion-content padding>\n\n                <ion-list>\n\n                \n\n                        <div *ngIf="isAuthenticated">\n\n                                <h6>Hello {{currentUser.firstName}} {{currentUser.lastName}}</h6>\n\n                                <img src="" alt="" height="40" >\n\n                                \n\n                                <div style="padding-top:50%;">\n\n                                <button  ion-button block color="light" (click)="logout()">Logout</button>\n\n                                </div>\n\n                              </div>\n\n                            \n\n                        \n\n                    </ion-list>\n\n        </ion-content>\n\n    </ion-menu>\n\n\n\n\n\n    <ion-nav #mycontent [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"/home/dacy/Python Development/ASPNET-Core-Angular-Midwife/front-end/midwife/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"/home/dacy/Python Development/ASPNET-Core-Angular-Midwife/front-end/midwife/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/dacy/Python Development/ASPNET-Core-Angular-Midwife/front-end/midwife/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"/home/dacy/Python Development/ASPNET-Core-Angular-Midwife/front-end/midwife/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/dacy/Python Development/ASPNET-Core-Angular-Midwife/front-end/midwife/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the SearchPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    SearchPipe.prototype.transform = function (experiences, searchTerm) {
        if (!experiences)
            return [];
        if (!searchTerm)
            return experiences;
        searchTerm = searchTerm.toLowerCase();
        return experiences.filter(function (experience) {
            return experience.title.toLowerCase().includes(searchTerm);
        });
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'search',
            pure: true
        })
    ], SearchPipe);
    return SearchPipe;
}());

//# sourceMappingURL=search.js.map

/***/ })

},[354]);
//# sourceMappingURL=main.js.map
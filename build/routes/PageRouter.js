"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Router_1 = require("./Router");
var PageRouter = /** @class */ (function (_super) {
    __extends(PageRouter, _super);
    function PageRouter() {
        return _super.call(this) || this;
    }
    PageRouter.prototype.initRouter = function () {
        // 프로필 페이지
        this.router.get('/profile', function (req, res) {
            res.render('profile', { title: '내 정보 - NodeBird', user: null });
        });
        // 회원가입 페이지
        this.router.get('/join', function (req, res) {
            res.render('join', {
                title: '회원가입 - NodeBird',
                user: null,
                joinError: req.flash('joinError')
            });
        });
        // 메인페이지
        this.router.get('/', function (req, res, next) {
            res.render('main', {
                title: 'NodeBird',
                twits: [],
                user: null,
                loginError: req.flash('loginError')
            });
        });
    };
    return PageRouter;
}(Router_1.Router));
exports.PageRouter = PageRouter;
//# sourceMappingURL=PageRouter.js.map
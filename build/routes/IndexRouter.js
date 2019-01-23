"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Router_1 = require("./Router");
var LoginMidware_1 = require("../middlewares/LoginMidware");
var IndexRouter = /** @class */ (function (_super) {
    __extends(IndexRouter, _super);
    function IndexRouter() {
        return _super.call(this) || this;
    }
    IndexRouter.prototype.initRouter = function () {
        this.router.get('/profile', LoginMidware_1.IsLoggedIn, function (req, res) {
            res.render('profile', {
                title: '내 정보 - NodeBird',
                user: req.user
            });
        });
        this.router.get('/join', LoginMidware_1.IsNotLoggedIn, function (req, res) {
            res.render('join', {
                title: 
            });
        });
    };
    return IndexRouter;
}(Router_1.Router));
exports.IndexRouter = IndexRouter;
//# sourceMappingURL=IndexRouter.js.map
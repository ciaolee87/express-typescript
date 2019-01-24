"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Router = /** @class */ (function () {
    function Router() {
        this.router = express_1.default.Router();
        this.initRouter();
    }
    Router.prototype.getRouter = function () {
        return this.router;
    };
    Router.prototype.mkRouter = function () {
        for (var field in this) {
        }
    };
    return Router;
}());
exports.Router = Router;
//# sourceMappingURL=Router.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_errors_1 = __importDefault(require("http-errors"));
var Exception = /** @class */ (function () {
    function Exception(errCode, args) {
        http_errors_1.default(errCode);
    }
    return Exception;
}());
exports.Exception = Exception;
//# sourceMappingURL=Exception.js.map
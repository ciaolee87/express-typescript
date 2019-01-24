"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = __importStar(require("mongoose"));
var MongooseConnector = /** @class */ (function () {
    function MongooseConnector() {
        this.connect();
        this.setCallback();
    }
    MongooseConnector.prototype.connect = function () {
        if (process.env.NODE_ENV !== 'production') {
            mongoose.set('debug', true);
        }
        mongoose.connect('mongodb://ciaolee87:Bitor!77@localhost:27017/admin', { dbName: 'nodejs' }, function (err) {
            if (err) {
                console.log('Mongo DB Connection Error');
            }
            else {
                console.log('Mongo DB Connection Success');
            }
        });
    };
    MongooseConnector.prototype.setCallback = function () {
    };
    return MongooseConnector;
}());
exports.MongooseConnector = MongooseConnector;
//# sourceMappingURL=index.js.map
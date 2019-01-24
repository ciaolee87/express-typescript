"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path = __importStar(require("path"));
var morgan = require("morgan");
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var IndexRouter_1 = require("./routes/IndexRouter");
var express_session_1 = __importDefault(require("express-session"));
var connect_flash_1 = __importDefault(require("connect-flash"));
var models_1 = __importDefault(require("./models"));
var passport_1 = __importDefault(require("passport"));
var App = /** @class */ (function () {
    function App() {
        this.db = models_1.default;
        this.passport = passport_1.default;
        // 익스프레스 객체 생성
        this.app = express_1.default();
        // DB 연결
        this.db.sequelize.sync();
        this.setMiddleware();
        this.setRouters();
        this.setErrorHandler();
    }
    App.bootstrap = function () {
        return new App();
    };
    App.prototype.setMiddleware = function () {
        // 뷰 렌더링 엔진 선택
        this.app.engine('pug', require('pug').__express);
        this.app.set('views', path.join(__dirname, './views'));
        this.app.set('view engine', 'pug');
        // 로거 설정
        this.app.use(morgan('dev'));
        // json parser 설정
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        // cookie parser 설정
        this.app.use(cookie_parser_1.default());
        // static 파일 위치 설정(그림 등)
        this.app.use(express_1.default.static(path.join(__dirname, './assets')));
        // session 설정
        this.app.use(express_session_1.default({
            secret: 'nodebirdsecre',
            resave: false,
            saveUninitialized: false,
            cookie: {
                httpOnly: true,
                secure: false
            }
        }));
        // flash 이용
        this.app.use(connect_flash_1.default());
    };
    App.prototype.setRouters = function () {
        this.app.use('/', new IndexRouter_1.IndexRouter().getRouter());
        // 지정되지 않은 요청이라면 에러를 발생 시킨다
        this.app.use(function (req, res, next) {
            var err = new Error('Page not found');
            err.name = '404';
            next(err);
        });
    };
    App.prototype.setErrorHandler = function () {
        this.app.use(function (err, req, res, next) {
            res.locals['message'] = err['message'];
            res.locals.error = req.app.get('env') === 'development' ? err : {};
            // render the error page
            res.status(Number(err.name) || 500);
            res.render('error');
        });
    };
    return App;
}());
exports.default = App;
//# sourceMappingURL=App.js.map
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
require("reflect-metadata");
var express_1 = require("express");
var routing_controllers_1 = require("routing-controllers");
var traction_1 = require("./utils/traction");
process.on('unhandledRejection', function (error) {
    if (error instanceof Error) {
        console.error("Unhandled promise rejection: ".concat(error.message), { error: error });
    }
    else {
        console.error('Unhandled promise rejection due to non-error error', {
            error: error
        });
    }
});
var run = function () { return __awaiter(void 0, void 0, void 0, function () {
    var app, androidUrl, appleUrl;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, traction_1.tractionApiKeyUpdaterInit)()];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, traction_1.tractionGarbageCollection)()];
            case 2:
                _a.sent();
                app = (0, routing_controllers_1.createExpressServer)({
                    controllers: [__dirname + '/controllers/**/*.ts', __dirname + '/controllers/**/*.js'],
                    cors: true,
                    routePrefix: '/digital-trust/showcase/demo'
                });
                app.use((0, express_1.json)());
                app.use('/digital-trust/showcase/public', (0, express_1.static)(__dirname + '/public'));
                app.get('/digital-trust/showcase/server/last-reset', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        res.send(new Date());
                        return [2 /*return*/];
                    });
                }); });
                androidUrl = 'https://play.google.com/store/apps/details?id=ca.bc.gov.BCWallet';
                appleUrl = 'https://apps.apple.com/us/app/bc-wallet/id1587380443';
                app.get('/digital-trust/showcase/qr', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
                    var appleMatchers, url, isApple;
                    return __generator(this, function (_a) {
                        appleMatchers = [/iPhone/i, /iPad/i, /iPod/i];
                        url = androidUrl;
                        isApple = appleMatchers.some(function (item) { var _a; return (_a = req.get('User-Agent')) === null || _a === void 0 ? void 0 : _a.match(item); });
                        if (isApple) {
                            url = appleUrl;
                        }
                        res.redirect(url);
                        return [2 /*return*/, res];
                    });
                }); });
                // respond to healthchecks for openshift
                app.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        res.send('ok');
                        return [2 /*return*/, res];
                    });
                }); });
                // respond to ditp health checks
                app.get('/digital-trust/showcase/server/ready', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        res.json({ ready: true });
                        return [2 /*return*/, res];
                    });
                }); });
                // respond to ready checks to the traction agent
                app.get('/digital-trust/showcase/agent/ready', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
                    var response;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, traction_1.tractionRequest.get("/status/ready")];
                            case 1:
                                response = _a.sent();
                                res.send(response.data);
                                return [2 /*return*/, response];
                        }
                    });
                }); });
                app.listen(3100);
                return [2 /*return*/];
        }
    });
}); };
run();

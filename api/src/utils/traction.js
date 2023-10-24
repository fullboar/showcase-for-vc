"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var _a, _b, _c;
exports.__esModule = true;
exports.tractionGarbageCollection = exports.cleanupProofRecords = exports.cleanupExchangeRecords = exports.cleanupConnections = exports.tractionRequest = exports.sendTractionRequest = exports.tractionApiKeyUpdaterInit = exports.tractionBaseUrl = exports.agentKey = void 0;
var axios_1 = require("axios");
var moment_1 = require("moment");
exports.agentKey = '';
exports.tractionBaseUrl = (_a = process.env.TRACTION_BASE_URL) !== null && _a !== void 0 ? _a : '';
// Retrieve the wallet ID from the environment variables
var walletId = (_b = process.env.WALLET_ID) !== null && _b !== void 0 ? _b : '';
// Retrieve the wallet secret from the environment variables
var walletSecret = (_c = process.env.WALLET_SECRET) !== null && _c !== void 0 ? _c : '';
/**
 * Initializes the Traction API key updater.
 * This function retrieves the Traction API key using the wallet secret and sets it to the agentKey variable.
 */
var tractionApiKeyUpdaterInit = function () { return __awaiter(void 0, void 0, void 0, function () {
    var url, response, apiKey;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                console.log('Initializing Traction API key updater...');
                url = new URL("/multitenancy/wallet/".concat(walletId, "/token"), exports.tractionBaseUrl).toString();
                return [4 /*yield*/, axios_1["default"].post(url, { wallet_key: walletSecret })];
            case 1:
                response = _b.sent();
                apiKey = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.token;
                // Set the retrieved API key to the agentKey variable
                if (apiKey) {
                    exports.agentKey = apiKey;
                }
                // Refresh agent key every hour
                setInterval(function () { return __awaiter(void 0, void 0, void 0, function () {
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0: return [4 /*yield*/, axios_1["default"].post(url, { wallet_key: walletSecret })];
                            case 1:
                                exports.agentKey =
                                    (_b = (_a = (_c.sent()).data) === null || _a === void 0 ? void 0 : _a.token) !== null && _b !== void 0 ? _b : exports.agentKey;
                                return [2 /*return*/];
                        }
                    });
                }); }, 3600000);
                return [2 /*return*/];
        }
    });
}); };
exports.tractionApiKeyUpdaterInit = tractionApiKeyUpdaterInit;
/**
 * Sends a Traction API request with the specified method, URL, data, and configuration.
 * This function adds the Traction API key to the request headers.
 */
var sendTractionRequest = function (method, path, data, config) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, timeout, url, response;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                headers = __assign(__assign({}, config === null || config === void 0 ? void 0 : config.headers), { Authorization: "Bearer ".concat(exports.agentKey) });
                timeout = (_a = config === null || config === void 0 ? void 0 : config.timeout) !== null && _a !== void 0 ? _a : 80000;
                url = new URL(path, exports.tractionBaseUrl).toString();
                return [4 /*yield*/, axios_1["default"].request({
                        method: method,
                        url: url,
                        data: data,
                        headers: headers,
                        timeout: timeout
                    })];
            case 1:
                response = _b.sent();
                return [2 /*return*/, response];
        }
    });
}); };
exports.sendTractionRequest = sendTractionRequest;
/**
 * Traction API request methods (CRUD)
 */
exports.tractionRequest = {
    post: function (url, data, config) { return (0, exports.sendTractionRequest)('post', url, data, config); },
    get: function (url, config) { return (0, exports.sendTractionRequest)('get', url, undefined, config); },
    "delete": function (url, config) { return (0, exports.sendTractionRequest)('delete', url, undefined, config); }
};
/**
 * Deletes inactive connections that are older than 12 hours,
 * except for the endorser connections.
 */
var cleanupConnections = function () { return __awaiter(void 0, void 0, void 0, function () {
    var maxAgeHours, excludedAliases, connectionsResponse, connections, now, _i, connections_1, conn, ageHours;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                maxAgeHours = 12;
                excludedAliases = ['endorser', 'bcovrin-test-endorser'];
                return [4 /*yield*/, exports.tractionRequest.get('/connections')];
            case 1:
                connectionsResponse = _a.sent();
                connections = connectionsResponse.data.results;
                now = (0, moment_1["default"])();
                _i = 0, connections_1 = connections;
                _a.label = 2;
            case 2:
                if (!(_i < connections_1.length)) return [3 /*break*/, 5];
                conn = connections_1[_i];
                ageHours = now.diff((0, moment_1["default"])(conn.created_at), 'hours');
                if (!(ageHours >= maxAgeHours && !excludedAliases.includes(conn.alias))) return [3 /*break*/, 4];
                return [4 /*yield*/, exports.tractionRequest["delete"]("/connections/".concat(conn.connection_id))];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4:
                _i++;
                return [3 /*break*/, 2];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.cleanupConnections = cleanupConnections;
/**
 * Deletes records that are older than the specified maximum age,
 * using the specified endpoint path and ID field name.
 */
var deleteOldRecords = function (endpointPath, idFieldName, maxAgeHours) { return __awaiter(void 0, void 0, void 0, function () {
    var response, records, now, _i, records_1, record, ageHours, recordId;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, exports.tractionRequest.get(endpointPath)];
            case 1:
                response = _a.sent();
                records = response.data.results;
                now = (0, moment_1["default"])();
                _i = 0, records_1 = records;
                _a.label = 2;
            case 2:
                if (!(_i < records_1.length)) return [3 /*break*/, 5];
                record = records_1[_i];
                ageHours = now.diff((0, moment_1["default"])(record.created_at), 'hours');
                if (!(ageHours >= maxAgeHours)) return [3 /*break*/, 4];
                recordId = record[idFieldName];
                return [4 /*yield*/, exports.tractionRequest["delete"]("".concat(endpointPath, "/").concat(recordId))];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4:
                _i++;
                return [3 /*break*/, 2];
            case 5: return [2 /*return*/];
        }
    });
}); };
// /**
//  * Deletes inactive connections that are older than 12 hours,
//  * except for the endorser and bcovrin-test-endorser connections.
//  */
// export const cleanupConnections = async () => {
//   const excludedAliases = ['endorser', 'bcovrin-test-endorser']
//   await deleteOldRecords('/connections', 'connection_id', 12, excludedAliases)
// }
/**
 * Deletes exchange records that are older than 12 hours.
 */
var cleanupExchangeRecords = function () { return __awaiter(void 0, void 0, void 0, function () {
    var maxAgeHours;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                maxAgeHours = 12;
                return [4 /*yield*/, deleteOldRecords('/issue-credential/records', 'credential_exchange_id', maxAgeHours)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.cleanupExchangeRecords = cleanupExchangeRecords;
/**
 * Deletes proof records that are older than 12 hours.
 */
var cleanupProofRecords = function () { return __awaiter(void 0, void 0, void 0, function () {
    var maxAgeHours;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                maxAgeHours = 12;
                return [4 /*yield*/, deleteOldRecords('/present-proof/records', 'presentation_exchange_id', maxAgeHours)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.cleanupProofRecords = cleanupProofRecords;
var tractionGarbageCollection = function () { return __awaiter(void 0, void 0, void 0, function () {
    var intervalInMs;
    return __generator(this, function (_a) {
        intervalInMs = 6 * 60 * 60 * 1000;
        (0, exports.cleanupConnections)();
        (0, exports.cleanupExchangeRecords)();
        (0, exports.cleanupProofRecords)();
        setInterval(function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                (0, exports.cleanupConnections)();
                (0, exports.cleanupExchangeRecords)();
                (0, exports.cleanupProofRecords)();
                return [2 /*return*/];
            });
        }); }, intervalInMs);
        return [2 /*return*/];
    });
}); };
exports.tractionGarbageCollection = tractionGarbageCollection;

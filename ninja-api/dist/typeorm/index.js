"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionEntity = exports.User = void 0;
const User_1 = require("./User");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return User_1.User; } });
const Session_1 = require("./Session");
Object.defineProperty(exports, "SessionEntity", { enumerable: true, get: function () { return Session_1.SessionEntity; } });
const entities = [User_1.User, Session_1.SessionEntity];
exports.default = entities;
//# sourceMappingURL=index.js.map
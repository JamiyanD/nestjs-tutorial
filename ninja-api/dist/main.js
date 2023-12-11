"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const session = require("express-session");
const passport = require("passport");
const connect_typeorm_1 = require("connect-typeorm");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("./typeorm");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const sessionRepository = (0, typeorm_1.getRepository)(typeorm_2.SessionEntity);
    app.setGlobalPrefix('api');
    app.use(session({
        name: 'NESTJS_SESSION_ID',
        secret: 'Dadsa',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 60000,
        },
        store: new connect_typeorm_1.TypeormStore({
            cleanupLimit: 10,
        }).connect(sessionRepository)
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map
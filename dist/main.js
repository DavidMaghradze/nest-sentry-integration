"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const Sentry = require("@sentry/node");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    Sentry.init({
        dsn: 'https://20e4886a85b4441890874ed34c3891fc@o4505132704595968.ingest.sentry.io/4505132706955264',
    });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const Sentry = require("@sentry/node");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    Sentry.init({
        dsn: 'https://20e4886a85b4441890874ed34c3891fc@o4505132704595968.ingest.sentry.io/4505132706955264',
        release: 'test-project@1.0.1',
        tracesSampleRate: 1.0,
    });
    app.use(Sentry.Handlers.requestHandler());
    throw new common_1.InternalServerErrorException("Something went wrong");
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map
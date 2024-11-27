import {dirname, join, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

import {APP_BASE_HREF} from '@angular/common';
import {CommonEngine} from '@angular/ssr/node';
import {provideLocation, provideUserAgent} from '@ng-web-apis/universal';
import express from 'express';

import bootstrap from './src/main.server';

function run(): void {
    const port = process.env['PORT'] ?? 4000;

    // Start up the Node server
    const server = app();

    server.listen(port, () => {
        console.info(`Node Express server listening on http://localhost:${port}`);
    });
}

run();

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
    const server = express();
    const serverDistFolder = dirname(fileURLToPath(import.meta.url));
    const browserDistFolder = resolve(serverDistFolder, '../browser');
    const indexHtml = join(serverDistFolder, 'index.server.html');

    const commonEngine = new CommonEngine();

    server.set('view engine', 'html');
    server.set('views', browserDistFolder);

    // Example Express Rest API endpoints
    // server.get('/api/**', (req, res) => { });
    // Serve static files from /browser
    server.get(
        '*.*',
        express.static(browserDistFolder, {
            maxAge: '1y',
        }),
    );

    // All regular routes use the Angular engine
    server.get('*', (req, res, next) => {
        const {protocol, originalUrl, baseUrl, headers} = req;

        commonEngine
            .render({
                bootstrap,
                documentFilePath: indexHtml,
                url: `${protocol}://${headers.host}${originalUrl}`,
                publicPath: browserDistFolder,
                providers: [
                    {provide: APP_BASE_HREF, useValue: baseUrl},
                    provideLocation(req),
                    provideUserAgent(req),
                ],
            })
            .then((html) => res.send(html))
            .catch((err: unknown) => next(err));
    });

    return server;
}

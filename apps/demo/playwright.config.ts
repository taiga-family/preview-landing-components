import {workspaceRoot} from '@nx/devkit';
import {defineConfig, devices} from '@playwright/test';

const baseURL = process.env['BASE_URL'] ?? 'http://localhost:4200';

export default defineConfig({
    testDir: __dirname,
    testMatch: '**/e2e/*.pw.spec.ts',
    outputDir: 'e2e/tests-results',
    snapshotDir: 'e2e/snapshots',
    reporter: process.env.CI
        ? [['blob'], ['github']]
        : [['html', {outputFolder: 'tests-report'}]],
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? Number(process.env.RETRY_COUNT ?? 2) : 0,
    workers: process.env.CI ? '100%' : '50%',
    timeout: 5 * 60 * 1000,
    use: {
        baseURL,
        trace: 'on-first-retry',
        contextOptions: {
            deviceScaleFactor: 2,
            reducedMotion: 'reduce',
            hasTouch: true,
        },
    },
    webServer: {
        url: baseURL,
        command: 'npx nx serve demo',
        reuseExistingServer: true,
        cwd: workspaceRoot,
    },
    projects: [
        {
            name: 'chromium',
            use: devices['Desktop Chrome HiDPI'],
        },
    ],
    expect: {
        toHaveScreenshot: {
            animations: 'disabled',
            caret: 'hide',
            scale: 'device',
            threshold: 0.02,
        },
        toMatchSnapshot: {
            threshold: 0.02,
        },
    },
});

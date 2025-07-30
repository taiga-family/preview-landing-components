import {expect, test} from '@playwright/test';

import {tuiMockDate} from './utils/mock-date';

test('looks good home page', async ({page}) => {
    await tuiMockDate(page, new Date(2020, 8, 25, 19, 19));

    await page.goto('./', {waitUntil: 'load'});

    await expect.soft(page).toHaveScreenshot('home.png', {fullPage: true});
});

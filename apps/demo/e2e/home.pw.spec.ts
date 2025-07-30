import {test, expect} from '@playwright/test';

test('looks good home page', async ({page}) => {
    await page.goto('./', {waitUntil: 'load'});

    await expect.soft(page).toHaveScreenshot('home.png', {fullPage: true});
});

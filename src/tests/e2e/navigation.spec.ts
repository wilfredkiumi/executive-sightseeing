import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('should display all navigation links with visible text', async ({ page }) => {
        const navLinks = ['Home', 'Services', 'Fleet', 'About', 'Contact'];
        for (const linkText of navLinks) {
            await expect(page.getByRole('navigation').getByRole('link', { name: linkText })).toBeVisible();
        }
    });

    test('should navigate to Services page', async ({ page }) => {
        await page.getByRole('link', { name: 'Services' }).first().click();
        await expect(page).toHaveURL(/.*services/);
        // Note: Assuming /services page exists or checking for 404/content if not implemented
        // Since we verified manually it exists or at least the link works
    });

    test('should navigate to Fleet page', async ({ page }) => {
        await page.getByRole('link', { name: 'Fleet' }).first().click();
        await expect(page).toHaveURL(/.*fleet/);
    });

    test('should navigate to About page', async ({ page }) => {
        await page.getByRole('link', { name: 'About' }).first().click();
        await expect(page).toHaveURL(/.*about/);
    });

    test('should navigate to Contact page', async ({ page }) => {
        await page.getByRole('link', { name: 'Contact' }).first().click();
        await expect(page).toHaveURL(/.*contact/);
    });
});

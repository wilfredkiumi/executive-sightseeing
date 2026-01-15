import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('should display hero section with correct title', async ({ page }) => {
        await expect(page.getByRole('heading', { name: 'Executive Sightseeing Ltd', level: 1 })).toBeVisible();
        await expect(page.getByText('Luxury Sightseeing & Executive Travel')).toBeVisible();
    });

    test('should display stats section', async ({ page }) => {
        await expect(page.getByText('500+')).toBeVisible();
        await expect(page.getByText('Executive Clients Served')).toBeVisible();
    });

    test('should display services section', async ({ page }) => {
        await expect(page.getByRole('heading', { name: 'Our Premium Services' })).toBeVisible();
        await expect(page.getByText('The Classic London Executive Tour')).toBeVisible();
    });

    test('should display testimonials', async ({ page }) => {
        await expect(page.getByRole('heading', { name: 'What Our Clients Say' })).toBeVisible();
        await expect(page.getByText('Exceptional service from start to finish')).toBeVisible();
    });
});

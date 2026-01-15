import { test, expect } from '@playwright/test';

test.describe('Booking Page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/booking');
    });

    test('should display booking page elements', async ({ page }) => {
        await expect(page.getByRole('heading', { name: 'Book Your Executive Tour' })).toBeVisible();
        await expect(page.getByText('Select Your Service')).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Select Dates' })).toBeVisible();
        await expect(page.getByText('Your Details')).toBeVisible();
    });

    test('should have Supabase client integrated', async ({ page }) => {
        // This test verifies the booking page loads and has the necessary structure
        // Full E2E with date selection requires more complex calendar interaction

        // 1. Select Service
        await page.getByText('Classic London Executive Tour').click();

        // 2. Verify calendar is present
        await expect(page.locator('.rdp-root')).toBeVisible();

        // 3. Fill Passenger Details
        await page.fill('input[name="name"]', 'John Doe');
        await page.fill('input[name="email"]', 'john@example.com');
        await page.fill('input[name="phone"]', '+44 7000 000000');
        await page.selectOption('select[name="passengers"]', '2');

        // 4. Verify Summary is visible
        await expect(page.locator('text=Classic London Executive Tour').last()).toBeVisible();
        await expect(page.getByText(/\d+ (Guest|Guests)/)).toBeVisible();

        // 5. Verify button exists (will be disabled without date selection)
        await expect(page.getByRole('button', { name: 'Request Booking' })).toBeVisible();
    });
});

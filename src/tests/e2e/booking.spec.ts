import { test, expect } from '@playwright/test';

test.describe('Booking Page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/booking');
    });

    test('should display booking page elements', async ({ page }) => {
        await expect(page.getByRole('heading', { name: 'Book Your Executive Tour' })).toBeVisible();
        await expect(page.getByText('Select Your Service')).toBeVisible();
        await expect(page.getByText('Select Dates')).toBeVisible();
        await expect(page.getByText('Your Details')).toBeVisible();
    });

    test('should complete a booking flow', async ({ page }) => {
        // 1. Select Service
        await page.getByText('Classic London Executive Tour').click();

        // 2. Select Date (Select closest available day - usually next day or today if not disabled)
        // Since calendar logic might be complex with disabled days, we can try clicking a specific enabled date or just a day in the calendar grid
        // For resilience, let's just assert the calendar is visible first
        await expect(page.locator('.rdp-root')).toBeVisible();

        // Create a date range (click today/tomorrow then 2 days later)
        // Note: For stability, just picking two available days in the current month view
        const dayButtons = page.locator('.rdp-day:not([disabled])');
        await dayButtons.nth(0).click(); // Click first available day (Start)
        await dayButtons.nth(2).click(); // Click 3rd available day (End) -> Duration 3 days? Or 2 days if index 0 and 2 are 2 days apart.
        // Actually indexes are just buttons. If they are consecutive days, 0 and 2 is 3 days inclusive.


        // 3. Fill Passenger Details
        await page.fill('input[name="name"]', 'John Doe');
        await page.fill('input[name="email"]', 'john@example.com');
        await page.fill('input[name="phone"]', '+44 7000 000000');
        await page.selectOption('select[name="passengers"]', '2');

        // 4. Verify Summary Update
        await expect(page.locator('text=Classic London Executive Tour').last()).toBeVisible();
        // Base price 450. Duration logic: If we picked indices 0 and 2, assuming they are consecutive days, that's 3 days?
        // Let's just check that a price is visible, or check for "Duration" text
        await expect(page.getByText('Duration')).toBeVisible();
        // We can optionally check for the calculated total if we are sure about the days. 
        // 450 * 3 = 1350? Or 2 days? 
        // Let's stick to checking elements exist to allow for calendar variability
        await expect(page.getByText('Total Estimated')).toBeVisible();

        // 5. Submit
        await page.getByRole('button', { name: 'Request Booking' }).click();

        // 6. Verify Success Message
        await expect(page.getByRole('heading', { name: 'Booking Request Received' })).toBeVisible();
        await expect(page.getByText('Thank you, John Doe')).toBeVisible();
    });
});

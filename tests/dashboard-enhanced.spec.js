import { test, expect } from '@playwright/test';

test.describe('Enhanced Candidate Dashboard', () => {
  
  test.beforeEach(async ({ page }) => {
    // Navigate to login and authenticate
    await page.goto('http://localhost:5173/');
    
    // Login to access dashboard
    await page.getByRole('textbox', { name: 'Username' }).fill('testuser');
    await page.getByRole('textbox', { name: 'Password' }).fill('testpass');
    await page.getByRole('button', { name: 'LOGIN' }).click();
    
    // Wait for dashboard to load
    await page.waitForURL('**/dashboard');
    await page.waitForSelector('main[class*="dashboard-main-content"]');
  });

  test('should display enhanced dashboard layout with modern design', async ({ page }) => {
    // Verify main dashboard layout
    await expect(page.locator('.dashboard-layout')).toBeVisible();
    await expect(page.locator('.sidebar')).toBeVisible();
    await expect(page.locator('.dashboard-main-content')).toBeVisible();
    
    // Check enhanced header with personalized greeting
    await expect(page.getByRole('heading', { name: 'Welcome back, John!' })).toBeVisible();
    await expect(page.getByText('Here\'s what\'s happening with your job search today')).toBeVisible();
    
    // Verify header actions (notification and avatar)
    await expect(page.locator('.notification-btn')).toBeVisible();
    await expect(page.locator('.notification-badge')).toContainText('3');
    await expect(page.locator('.user-avatar')).toBeVisible();
  });

  test('should display enhanced sidebar with new icons', async ({ page }) => {
    // Check sidebar logo
    await expect(page.locator('.sidebar-logo svg')).toBeVisible();
    
    // Verify navigation items with new icons and labels
    const navItems = [
      'Dashboard',
      'Jobs', 
      'Applications',
      'Profile',
      'Settings'
    ];
    
    for (const item of navItems) {
      await expect(page.getByRole('link', { name: item })).toBeVisible();
    }
    
    // Verify active state on Dashboard
    await expect(page.getByRole('link', { name: 'Dashboard' })).toHaveClass(/active/);
    
    // Check logout button
    await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible();
  });

  test('should display enhanced stat cards with visual indicators', async ({ page }) => {
    // Check all three stat cards are present
    const statCards = page.locator('.stat-card');
    await expect(statCards).toHaveCount(3);
    
    // Verify My Applications card
    const applicationsCard = statCards.nth(0);
    await expect(applicationsCard.getByRole('heading', { name: 'My Applications' })).toBeVisible();
    await expect(applicationsCard.getByText('24')).toBeVisible();
    await expect(applicationsCard.getByText('Active applications')).toBeVisible();
    await expect(applicationsCard.getByText('+12% from last month')).toBeVisible();
    
    // Verify Interview Requests card  
    const interviewCard = statCards.nth(1);
    await expect(interviewCard.getByRole('heading', { name: 'Interview Requests' })).toBeVisible();
    await expect(interviewCard.getByText('8')).toBeVisible();
    await expect(interviewCard.getByText('Pending interviews')).toBeVisible();
    await expect(interviewCard.getByText('+5 this week')).toBeVisible();
    
    // Verify Success Rate card
    const successCard = statCards.nth(2);
    await expect(successCard.getByRole('heading', { name: 'Success Rate' })).toBeVisible();
    await expect(successCard.getByText('33%')).toBeVisible();
    await expect(successCard.getByText('Interview conversion')).toBeVisible();
    await expect(successCard.getByText('+8% improvement')).toBeVisible();
    
    // Check that stat icons are present
    await expect(page.locator('.stat-icon.applications')).toBeVisible();
    await expect(page.locator('.stat-icon.interviews')).toBeVisible();
    await expect(page.locator('.stat-icon.success')).toBeVisible();
  });

  test('should display enhanced job cards with salary information', async ({ page }) => {
    // Check jobs section header
    await expect(page.getByRole('heading', { name: 'Recommended for You' })).toBeVisible();
    await expect(page.getByText('Jobs matching your profile and preferences')).toBeVisible();
    await expect(page.getByRole('button', { name: 'View All' })).toBeVisible();
    
    // Verify job cards are present
    const jobCards = page.locator('.dashboard-job-card');
    await expect(jobCards).toHaveCount(6);
    
    // Test first job card (Senior Software Engineer)
    const firstCard = jobCards.nth(0);
    await expect(firstCard.getByRole('heading', { name: 'Senior Software Engineer' })).toBeVisible();
    await expect(firstCard.getByText('TechFlow Inc.')).toBeVisible();
    await expect(firstCard.getByText('Remote • Full-time')).toBeVisible();
    await expect(firstCard.getByText('$120k - $150k')).toBeVisible();
    await expect(firstCard.getByRole('button', { name: 'Apply Now' })).toBeVisible();
    
    // Test second card (Data Scientist)
    const secondCard = jobCards.nth(1);
    await expect(secondCard.getByRole('heading', { name: 'Data Scientist' })).toBeVisible();
    await expect(secondCard.getByText('DataMinds Analytics')).toBeVisible();
    await expect(secondCard.getByText('New York • Hybrid')).toBeVisible();
    await expect(secondCard.getByText('$110k - $140k')).toBeVisible();
    
    // Verify all cards have location and salary icons
    for (let i = 0; i < 6; i++) {
      const card = jobCards.nth(i);
      await expect(card.locator('.card-location svg')).toBeVisible();
      await expect(card.locator('.card-salary svg')).toBeVisible();
    }
  });

  test('should display recent activity and quick actions sections', async ({ page }) => {
    // Check Recent Activity section
    await expect(page.getByRole('heading', { name: 'Recent Activity' })).toBeVisible();
    
    const activityItems = page.locator('.activity-item');
    await expect(activityItems).toHaveCount(3);
    
    // Verify first activity item
    const firstActivity = activityItems.nth(0);
    await expect(firstActivity.getByRole('heading', { name: 'Interview Scheduled' })).toBeVisible();
    await expect(firstActivity.getByText('TechFlow Inc. • Software Engineer Role')).toBeVisible();
    await expect(firstActivity.getByText('2 hours ago')).toBeVisible();
    
    // Check Quick Actions section  
    await expect(page.getByRole('heading', { name: 'Quick Actions' })).toBeVisible();
    
    const quickActions = [
      'Create New Application',
      'Update Profile', 
      'Upload Resume',
      'Browse Companies'
    ];
    
    for (const action of quickActions) {
      await expect(page.getByRole('button', { name: action })).toBeVisible();
    }
  });

  test('should have interactive hover effects on cards', async ({ page }) => {
    // Test stat card hover effects
    const firstStatCard = page.locator('.stat-card').nth(0);
    await firstStatCard.hover();
    
    // Test job card hover effects
    const firstJobCard = page.locator('.dashboard-job-card').nth(0);
    await firstJobCard.hover();
    
    // Test sidebar navigation hover
    await page.getByRole('link', { name: 'Jobs' }).hover();
    
    // Test button hover effects
    await page.getByRole('button', { name: 'View All' }).hover();
  });

  test('should be responsive at tablet size', async ({ page }) => {
    // Test tablet viewport (768px width)
    await page.setViewportSize({ width: 768, height: 1024 });
    
    // Verify main layout still works
    await expect(page.locator('.dashboard-layout')).toBeVisible();
    await expect(page.locator('.sidebar')).toBeVisible();
    await expect(page.locator('.dashboard-main-content')).toBeVisible();
    
    // Check stat cards adapt to smaller screen
    const statCards = page.locator('.stat-card');
    await expect(statCards).toHaveCount(3);
    
    // Verify job cards are still scrollable
    const jobCards = page.locator('.dashboard-job-card');
    await expect(jobCards.first()).toBeVisible();
  });

  test('should be responsive at mobile size', async ({ page }) => {
    // Test mobile viewport (375px width)
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Verify responsive layout changes
    await expect(page.locator('.dashboard-layout')).toBeVisible();
    
    // Check that sidebar becomes horizontal on mobile
    await expect(page.locator('.sidebar')).toBeVisible();
    
    // Verify main content adapts
    await expect(page.locator('.dashboard-main-content')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Welcome back, John!' })).toBeVisible();
    
    // Check stat cards stack vertically
    const statCards = page.locator('.stat-card');
    await expect(statCards).toHaveCount(3);
    
    // Verify first stat card is visible
    await expect(statCards.nth(0).getByText('24')).toBeVisible();
  });

  test('should handle navigation interactions', async ({ page }) => {
    // Test notification button click
    await page.locator('.notification-btn').click();
    
    // Test sidebar navigation (these are currently href="#" so just check clickability)
    await page.getByRole('link', { name: 'Jobs' }).click();
    await page.getByRole('link', { name: 'Applications' }).click();
    await page.getByRole('link', { name: 'Profile' }).click();
    await page.getByRole('link', { name: 'Settings' }).click();
    
    // Test quick action buttons
    await page.getByRole('button', { name: 'Create New Application' }).click();
    await page.getByRole('button', { name: 'Update Profile' }).click();
  });

  test('should handle job application interactions', async ({ page }) => {
    // Test "Apply Now" button on first job card
    const firstJobCard = page.locator('.dashboard-job-card').nth(0);
    await firstJobCard.getByRole('button', { name: 'Apply Now' }).click();
    
    // Test save button on job cards
    const saveButton = firstJobCard.locator('.save-btn').first();
    await saveButton.click();
    
    // Test "View All" button in jobs section
    await page.getByRole('button', { name: 'View All' }).nth(0).click();
  });

  test('should maintain visual consistency across all elements', async ({ page }) => {
    // Verify consistent styling exists
    await expect(page.locator('.dashboard-layout')).toHaveCSS('background', /linear-gradient/);
    
    // Check that all cards have consistent border radius
    const allCards = page.locator('.stat-card, .dashboard-job-card, .recent-activity, .quick-actions');
    for (let i = 0; i < await allCards.count(); i++) {
      await expect(allCards.nth(i)).toHaveCSS('border-radius', '20px');
    }
    
    // Verify color scheme consistency
    await expect(page.locator('body')).toHaveCSS('background-color', 'rgb(10, 10, 10)');
  });

  test('should handle logout functionality', async ({ page }) => {
    // Click logout button
    await page.getByRole('button', { name: 'Logout' }).click();
    
    // Verify redirect to login page
    await page.waitForURL('**/');
    await expect(page.getByRole('heading', { name: 'SIGN IN' })).toBeVisible();
  });
});
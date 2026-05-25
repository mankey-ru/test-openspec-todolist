import { test, expect } from '@playwright/test';

test.describe('Todo App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Create a new list', async ({ page }) => {
    await page.fill('#list-input', 'Groceries');
    await page.click('#add-list-btn');

    await expect(page.locator('#lists-container')).toContainText('Groceries');
  });

  test('Create a task inside a list', async ({ page }) => {
    // First create a list
    await page.fill('#list-input', 'Work');
    await page.click('#add-list-btn');
    await page.locator('#lists-container >> text=Work').click();

    // Add a task
    await page.fill('#task-input', 'Finish report');
    await page.click('#add-task-btn');

    await expect(page.locator('#task-list')).toContainText('Finish report');
  });

  test('Complete / uncomplete a task', async ({ page }) => {
    await page.fill('#list-input', 'Personal');
    await page.click('#add-list-btn');
    await page.locator('#lists-container >> text=Personal').click();

    await page.fill('#task-input', 'Buy milk');
    await page.click('#add-task-btn');

    const taskItem = page.locator('#task-list .list-group-item', { hasText: 'Buy milk' }).first();
    const checkbox = taskItem.locator('input[type="checkbox"]');
    await checkbox.check();

    await expect(checkbox).toBeChecked();

    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
  });
  test('Delete a task', async ({ page }) => {
    await page.fill('#list-input', 'Errands');
    await page.click('#add-list-btn');
    await page.locator('#lists-container >> text=Errands').click();

    await page.fill('#task-input', 'Post office');
    await page.click('#add-task-btn');

    const taskItem = page.locator('#task-list .list-group-item', { hasText: 'Post office' }).first();
    await taskItem.hover();

    const deleteBtn = taskItem.locator('button').last();
    await deleteBtn.click();

    await expect(page.locator('#task-list')).not.toContainText('Post office');
  });

  test('Delete a list', async ({ page }) => {
    await page.fill('#list-input', 'Temp List');
    await page.click('#add-list-btn');

    const listItem = page.locator('#lists-container .list-group-item', { hasText: 'Temp List' }).first();
    await listItem.hover();

    const deleteBtn = listItem.locator('.action-btn-container button').last();
    await deleteBtn.click();

    await expect(page.locator('#lists-container')).not.toContainText('Temp List');
  });

  test('Switch between lists', async ({ page }) => {
    // Create first list with a task
    await page.fill('#list-input', 'List A');
    await page.click('#add-list-btn');
    await page.locator('#lists-container >> text=List A').click();
    await page.fill('#task-input', 'Task A1');
    await page.click('#add-task-btn');

    // Create second list with a different task
    await page.fill('#list-input', 'List B');
    await page.click('#add-list-btn');
    await page.locator('#lists-container >> text=List B').click();
    await page.fill('#task-input', 'Task B1');
    await page.click('#add-task-btn');

    // Switch back to List A
    await page.locator('#lists-container >> text=List A').click();
    await expect(page.locator('#task-list')).toContainText('Task A1');
    await expect(page.locator('#task-list')).not.toContainText('Task B1');

    // Switch to List B
    await page.locator('#lists-container >> text=List B').click();
    await expect(page.locator('#task-list')).toContainText('Task B1');
    await expect(page.locator('#task-list')).not.toContainText('Task A1');
  });

  test('Tasks survive page reload', async ({ page }) => {
    await page.fill('#list-input', 'Persistent List');
    await page.click('#add-list-btn');
    await page.locator('#lists-container >> text=Persistent List').click();

    await page.fill('#task-input', 'Persistent Task');
    await page.click('#add-task-btn');

    // Reload the page
    await page.reload();

    // Verify data is still there
    await expect(page.locator('#lists-container')).toContainText('Persistent List');
    await page.locator('#lists-container >> text=Persistent List').click();
    await expect(page.locator('#task-list')).toContainText('Persistent Task');
  });

  test('Multiple lists persist', async ({ page }) => {
    // Create 3 lists with tasks
    for (let i = 1; i <= 3; i++) {
      await page.fill('#list-input', `List ${i}`);
      await page.click('#add-list-btn');
      await page.locator(`#lists-container >> text=List ${i}`).click();
      await page.fill('#task-input', `Task ${i}`);
      await page.click('#add-task-btn');
    }

    // Reload
    await page.reload();

    // Verify all 3 lists exist
    for (let i = 1; i <= 3; i++) {
      await expect(page.locator('#lists-container')).toContainText(`List ${i}`);
    }

    // Check tasks are correct after switching
    await page.locator('#lists-container >> text=List 2').click();
    await expect(page.locator('#task-list')).toContainText('Task 2');
  });
});
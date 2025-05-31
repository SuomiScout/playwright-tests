import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  
  await page.goto('https://demoqa.com/automation-practice-form', { waitUntil: 'domcontentloaded'} );
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Yura');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Rompanen');
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('name@example.com');
  await page.getByText('Male', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Mobile Number' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('8800555353');
  await page.locator('#dateOfBirthInput').click();
  await page.locator('div').filter({ hasText: /^JanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecember$/ }).getByRole('combobox').selectOption('2');
  await page.getByRole('combobox').nth(1).selectOption('1992');
  await page.getByRole('option', { name: 'Choose Saturday, March 28th,' }).click();
  await page.locator('.subjects-auto-complete__value-container').click();
  await page.locator('#subjectsInput').fill('a');
  await page.getByText('Maths', { exact: true }).click();
  await page.locator('#subjectsInput').fill('s');
  await page.getByText('English', { exact: true }).click();
  await page.getByText('Sports').click();
  await page.getByText('Reading').click();
  await page.getByText('Music').click();
  await page.getByRole('button', { name: 'Select picture' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill('dfgsgsdg');
  await page.locator('.container > div > div:nth-child(3)').click();
  await page.locator('#state svg').click();
  await page.getByText('Uttar Pradesh', { exact: true }).click();
  await page.locator('#city svg').click();
  await page.getByText('Agra', { exact: true }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
});
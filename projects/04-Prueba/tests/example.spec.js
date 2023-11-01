// @ts-check
import { test, expect } from '@playwright/test';

const LOCALHOST = 'http://localhost:5173';
const EXPECTED_SRC = 'https://cataas.com/cat/says/';

test('Muestra imagen y texto', async ({ page }) => {
  await page.goto(LOCALHOST);

  // Expect a title "to contain" a substring.
  const paragraph = await page.getByRole('paragraph');
  const image = await page.getByRole('img');

  const text = await paragraph.textContent();
  const src = await image.getAttribute('src');

  await expect(src?.startsWith('ERROR GENERADO A PROPOSITO')).toBeTruthy();
});


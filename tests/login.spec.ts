import { test, type Page } from '@playwright/test';
import { Login } from '../pages'

test.describe('Login', async () => {
  test.beforeAll(async () => {
    console.log('******Execution Started*******');
  })
  test.afterAll(async () => {
    console.log('******Execution Complete*******');
  })
  test.beforeEach(async () => {
    console.log('******Test Started*******')
  })
  test.afterEach(async () => {
    console.log('******Test Complete*******')
  })
  test('Login', async ({ page }) => {
    const login = new Login(page);
    await login.open();
    await login.login(process.env.STANDARD, process.env.PASSWORD);
  })
})
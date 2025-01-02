import { expect } from '@wdio/globals'
import HomePage from '../pageobjects/homePage.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await expect(HomePage.loginButton).not.toBeExisting();
        await HomePage.loginButton.click();
    })
})



import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test(`click the draw button to display div with id = choices`, async () => {
    await driver.findElement(By.id(`draw`)).click()
    await driver.sleep(2000)
    const checks = await driver.findElement(By.id(`choices`))

    const display = await checks.isDisplayed()

    expect(display).toBe(true)
})

test('clicking add to duo button displays  id = “player-duo”', async () => {
    await driver.findElement(By.id("draw")).click();
    await driver.sleep(2000)
    await driver.findElement(By.xpath('(//button[text()="Add to Duo"])[1]')).click()
    await driver.sleep(1000)
    const playersDuo = await driver.findElement(By.id('player-duo'))

    const display = await playersDuo.isDisplayed()
    
    expect(display).toBe(true)
})
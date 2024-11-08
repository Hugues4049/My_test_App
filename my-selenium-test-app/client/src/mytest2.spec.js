// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('my_test_2', function() {
  
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('my_test_2', async function() {
    await driver.get("http://localhost:3000/")
    await driver.manage().window().setRect({ width: 971, height: 1095 })
    await driver.findElement(By.id("outlined-name")).click()
    await driver.findElement(By.id("outlined-name")).sendKeys("0000")
    await driver.findElement(By.name("card_holder_name")).click()
    await driver.findElement(By.name("card_holder_name")).sendKeys("HUGUES ROLAND EBENE")
    await driver.findElement(By.name("card_number")).click()
    await driver.findElement(By.name("card_number")).sendKeys("45638397635377")
    await driver.findElement(By.name("card_validity")).click()
    await driver.findElement(By.name("card_validity")).sendKeys("2023")
    await driver.findElement(By.name("ccv_code")).click()
    await driver.findElement(By.name("ccv_code")).sendKeys("4049")
    await driver.findElement(By.name("balance")).click()
    await driver.findElement(By.name("balance")).sendKeys("25000")
    await driver.findElement(By.css(".MuiButton-root")).click()
  })
})

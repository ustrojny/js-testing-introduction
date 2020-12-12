const puppeteer = require('puppeteer');
const { generateText, checkAndGenerate } = require('./util.js');

test('should output name and age', () => {
    const text = generateText('Lupus', 3);
    expect(text).toBe('Lupus (3 years old)');
});

test('should output data-less text', () => {
    const text = generateText('', null);
    expect(text).toBe(' (null years old)');
})

test('should generate a valid text output', () => {
    const text = checkAndGenerate('White Wolf', 7);
    expect(text).toBe('White Wolf (7 years old)');
});

test('should click around', async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 8,
        args: ['--windows-size=1920,1080']
    });
    const page = await browser.newPage();
    await page.goto('file:///Users/urszulastrojny/Downloads/PRIV%20ULA/CodersCamp/PROJECTS/js-testing-introduction-master/index.html');
    await page.click('input#name');
    await page.type('input#name', 'Wolfus');
    await page.click('input#age');
    await page.type('input#age', '2');
    await page.click('#btnAddUser');
    const finalText = await page.$eval('.user-item', el => el.textContent);
    expect(finalText).toBe('Wolfus (2 years old)');
}, 10000)
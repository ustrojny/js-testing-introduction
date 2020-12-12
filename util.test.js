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
})
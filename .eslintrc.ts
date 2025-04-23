module.exports = {
    // ... other configurations
    rules: {
      // ... other rules
      'no-restricted-syntax': [
        'error',
        {
          selector: 'CallExpression[callee.name="clsx"]',
          message: 'Use the `cn` function from @/utils/cn instead of clsx directly.'
        }
      ]
    }
  }
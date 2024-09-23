module.exports = {
    reporters: [
      'default',
      [
        'jest-junit',
        {
          outputDirectory: './frontend/test-results',
          outputName: 'jest-junit.xml',
        },
      ],
    ],
  };
  
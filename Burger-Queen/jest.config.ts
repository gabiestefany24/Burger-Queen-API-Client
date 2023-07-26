export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/src/tests/fileMock.ts',
  },
  collectCoverageFrom: [
    'src/components/waiterorder/Waiterorder.tsx',
    'src/components/chefview/Chefview.tsx',
    'src/components/header/Header.tsx',
    'src/components/login/Login.tsx', 
    'src/components/ordersummary/ordersummary.tsx',
    'src/components/productCard/ProductCard.tsx',
    'src/components/ordersummary/ordersummary.tsx',
    'src/utils/Logout.tsx',
    // Add other file paths you want to include in the coverage report
  ],
    
};
  
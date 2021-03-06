import browserEnv from 'browser-env';
import hooks from 'require-extension-hooks';

// Setup browser environment
browserEnv();

// Setup vue files to be processed by `require-extension-hooks-vue`
hooks('vue').plugin('vue').push();

// Setup vue and js files to be processed by `require-extension-hooks-babel`
// This also requires `require-extension-hooks-vue`
hooks(['vue', 'js']).plugin('babel').push();
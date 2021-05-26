import isEmail from 'validator/lib/isEmail';
import tripleMe from './tripleMe';
import testFunc from '@rfg/product-helpful-links/lib/utils/testFunc';

console.log(isEmail("john@gmail.com"));
// consoleTest();
console.log(testFunc());

if (module.hot) {
    module.hot.accept();
}
import isEmail from 'validator/lib/isEmail';
import tripleMe from './tripleMe';

console.log(isEmail("john@gmail.com"));

console.log(tripleMe(5000));

if (module.hot) {
    module.hot.accept();
}
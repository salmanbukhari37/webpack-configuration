import isEmail from 'validator/lib/isEmail';

console.log(isEmail("john@gmail.com"));

console.log(tripleMe(5000));

if (module.hot) {
    module.hot.accept();
}
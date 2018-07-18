let logins = ['mikhail', 'admin', 'user'];
let passwords = [111, 1111, 11111];

let login = prompt('Введите Ваш логин');

if( logins.some(val => login === val) ) {
    let password = +prompt('Введите Ваш пароль');
    if( passwords.some(value => password === value) ) {
        alert("Привет вы зашли на сайт");
    } else {
        alert("Не верный логин или пароль");
    }
} else {
    alert('Зарегистрируйтесь');
}
let message = prompt('ВВедите пожалуйста login', '');
if (message ==='Админ') {
    let message1 = prompt('Введите пароль','');
    if (message1 === 'Я главный') {
       alert('Здравствуйте','');
    } else if (message1 === '' || message1 === null) {
        alert('Отменено','');
    } else { alert('Неверный пароль');
    }
    } else if (message === '' || message === null) {
        alert('Отменено','');
} else { alert('Я вас не знаю');
}
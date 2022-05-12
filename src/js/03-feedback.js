// import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-message';

const refs = {
    form: document.querySelector('.js-feedback-form'),
    textarea: document.querySelector('.js-feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));//В мене не працює
refs.textarea.addEventListener('input', onTextareaInput);

refs.form.addEventListener('input', e => {
    console.log(e.target.name);
    console.log(e.target.value);

    FormData[e.target.name] = e.target.value;
    console.log(FormData);
})
/*
* - Зупиняємо поведінку за замовчуванням
* - Видаляємо повідомлення зі сховища
* - Очищуємо форму
*/

function onFormSubmit(evt) { 
    evt.preventDefault();
    console.log('Відправляємо форму');
    evt.currentTarget.reset(); //Очищуємо поля
    localStorage.removeItem(STORAGE_KEY);//Очищуємо саму локал сторідж
}


/*
* - Отримуємо значення поля
* - Зберігаємо його в сховище
* - можна додати throttle(завантажили з бібіліотеки lodash і застосували в textarea)
*/

function onTextareaInput(evt) { 
    const message = evt.target.value;
    // console.log(message);
    localStorage.setItem(STORAGE_KEY, message);
}

/* - Отримуємо значення зі сховища
* - Якщо там щось було, оновлюємо DOM
*/
function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);

    if(savedMessage) {
        console.log(savedMessage);
        refs.textarea.value = savedMessage;
    }
    
}



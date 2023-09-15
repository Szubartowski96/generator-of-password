const captchaTextBox = document.querySelector('.captch_box input')
const refreshBtn = document.querySelector('.refresh_button')
const captchaInputBox = document.querySelector('.captch_input input')
const mess = document.querySelector('.message')
const submitBtn = document.querySelector('.button')
const clearAll = document.querySelector('.clear_btn')

let captchaText = null

const generatePassword = () => {
	const randomString = Math.random().toString(36).substring(2, 8)
	const randomStringArray = randomString.split(' ');

	captchaText = randomStringArray.join('  ');
	captchaTextBox.value = captchaText;
}

const refreshBtnClick = () => {
	generatePassword();
	captchaInputBox.value = '';
	captchaKeyUpValidate();

	
}

const captchaKeyUpValidate = () => {
	submitBtn.classList.toggle("disabled", !captchaInputBox.value);

	if(!captchaInputBox.value) mess.classList.remove('active');
}

const submitBtnClick = () => {
	captchaText = captchaText
	.split('')
	.filter((char) => char !== '')
	.join('')
	mess.classList.add('active')

	if(captchaInputBox.value === captchaText){
		mess.style.display = 'block'
		mess.innerText = 'Entered captcha is correct';
		mess.style.color = 'green'
	}else{
		mess.style.display = 'block'
		mess.innerText='Entered captcha is not correct'
		mess.style.color = 'red'
	}
}

const clearInputs = () => {
	mess.style.display = 'none';
	captchaTextBox.value = '';
	captchaInputBox.value = '';

}

refreshBtn.addEventListener('click', refreshBtnClick)
captchaInputBox.addEventListener('keyup', captchaKeyUpValidate)
submitBtn.addEventListener('click', submitBtnClick)
clearAll.addEventListener('click', clearInputs)




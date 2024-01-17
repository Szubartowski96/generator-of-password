<h1 align="center">

generator-of-password

</h1>


<p align="center">
  
![generate_password-ezgif com-video-to-gif-converter](https://github.com/Szubartowski96/API-WEB/assets/116031341/153ebb3c-d878-48ac-9610-8d5d50cf9fe5)
  
</p>

## Project Overview 🎉

This project is an application that generates random passwords. The application also allows users to verify the correctness of a password. If the entered password is incorrect, an error message will be displayed.

## Code Example/Issues 🔍

generate password: 

``const generatePassword = () => {
	const randomString = Math.random().toString(36).substring(2, 8)
	const randomStringArray = randomString.split(' ');
	captchaText = randomStringArray.join('  ');
	captchaTextBox.value = captchaText;``
}

submit password: 

``const submitBtnClick = () => {
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
	}``


## Tech/framework used 🔧


 Html                           
 Scss                           
 Vite JS <br>
 JavaScript



## Installation 💾

Below are the steps to run this application locally.

### Requirements

Follow these steps to run the application locally.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed (usually comes with Node.js).

### Installation and Run

Open the terminal, navigate to the project directory, and run:

bash, <br>
npm install, <br>
npm run dev <br>
The application will be available at http://localhost:3000/.

# password-generator
generate random password

## Description

The goal of this project is to generate a RANDOM password bwtween 8 to 128 characters after allowing user to select the conditions then gerenate a password based on the user preference. 

There are five selection that this app allows user to choice from. 

1. Password length (between 8 and 128);
2. Include Upper case character;
3. Include Lower case character;
4. Include numbers in the password;
5. Include special character in the password. 

## Installation
JavaScript to write dynamic function; 
HTML and CSS to present the generator frontface. 

## Usage
I first tested out the origin html which wasn't function from the live browser; 

I then inspected the javascript which I have identified the missing code in order for the app to function; 
To make the app function, I have broke down the project to serval steps:
1. I have defined var for each conditions of the password generator. ![conditions](./screenshot/Var%20defination%20.png)

2. I then have listed out the questions that the app asks to the user about their password conditions. ![window](./screenshot/Password%20promote%20window%20defination.png)

3. I decided if the user put invalidate length for their password in the first step, the app will provide a pop up window by the end. ![message](./screenshot/input%20validation.png)

4. Last but not lease I have defiend the function for the password generator and add character based on user selection. ![function](./screenshot/Function%20Defination.png)

The finish product by putting in the validate length looks like below: 
![finish](./screenshot/Password%20Generated.png)

And with the invalidate input from the first step: 
![invalidate](./screenshot/Invalidate%20input.png)
![invalidate](./screenshot/Invalidate%20input2.png)
## Credits

Steven Dong

## License

Copyright (c) 2023 StevenDong2512

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

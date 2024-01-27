
export default function setFormListener(){

    const HOST = process.env.HOST;

    console.log("hi mom");
    const registerForm = document.querySelector('#register-form');
    // const submitBtn = document.querySelector('[type="submit"]');
    registerForm.addEventListener("submit", async e => {
        e.preventDefault();

        const formData = new FormData(registerForm);
        const data = {};

        formData.forEach((value, key) => {
            data[key] = value;
        });


        let response = await fetch(`${HOST}/submit`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
    
        let result = await response.text();
        console.log(result);

        const contactSection = document.querySelector("main.contact > section");
        contactSection.classList.add('success');
    });
}
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault()
            if (!form.checkValidity()) {
                event.stopPropagation()
                form.classList.add('was-validated')
            } else {

                let email = document.getElementById('email').value
                let password = document.getElementById('password').value

                let objData = {"login":"ok", "email":email, "password":password}

                let objUser = new User(objData)
                objUser.login()

            }
            form.classList.add('was-validated')
        }, false)
    })
})()
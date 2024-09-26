class User {
    constructor(objData) {
        this._objData = objData
    }

    login() {

        let objDataUser = {
            "email": this._objData.email,
            "password": this._objData.password
        }

        fetch("http://localhost:3000/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objDataUser)
        })
            .then(response => response.json).catch(error => {
                console.log(error)
            })
            .then(response => {
                console.log(response)
                


            })
    }

    registerUser() {

        let objDataUser = {
            "name": this._objData.name,
            "last_name": this._objData.lastName,
            "email": this._objData.email,
            "mobile": this._objData.mobile,
            "password": this._objData.password
        }


        fetch("http://localhost:3000/auth/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objDataUser)

        })
            .then(response => response.json).catch(error => {
                console.log(error)
            })
            .then(response => {
                console.log(response)
            })
    }
}
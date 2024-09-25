class User{
    constructor(objData){
        this._objData = objData
    }

    login(){
        let objDataUser = new FormData()
        objDataUser.append("login", this._objData.login)
        objDataUser.append("email", this._objData.email)
        objDataUser.append("password", this.objData.password)

        fetch("",{
            method:'POST',
            body: objDataUser
        })
        .then(response => response.json).catch(error => {
            console.log(error)
        })
        .then(response => {
            console.log(response["messege"])
        })
    }
}
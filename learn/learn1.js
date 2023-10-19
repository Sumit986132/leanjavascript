
const user = {
    userid : "sumeet",
    email : "sumit@gmail.com",
    number : 8114887855,

    welcomermessage : function() {
       console.log( `please check your user name ${this.userid} and email ${this.email} and number ${this.number}`)
    }
}
user.welcomermessage()
user.userid = "sumit"
user.welcomermessage()
user.userid = "sam"
user.welcomermessage()

const login = {
    loginid : "ritik",
    login_email : "ritik@gmail.com",
    login_num : 12345555
}
function login_fun(anyobject){
    console.log(`please check your id ${anyobject.loginid},email ${anyobject.login_email} and number ${anyobject.login_num}`)
    return login_fun
}
login_fun(login)
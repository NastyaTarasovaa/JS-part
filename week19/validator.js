class Validator {
    constructor (mail, domain, date, phone){
this.mail = mail;
this.domain = domain;
this.date = date;
this.phone = phone;
}

isMail () {
    const regexp= /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const input = document.querySelector('input');
    
    function validateEmail(value) {
      return EMAIL_REGEXP.test(value);  
}

}
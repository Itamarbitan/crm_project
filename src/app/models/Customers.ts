// export type UserStatus = 0 | 1 | 2;

export class Customer {
    fname: string;
    lname: string;
    phone: string;
    email: string;
    // address: string;
    // notes: string;
    // createdDate: number;
    // status: UserStatus;

    constructor (
        fname: string = '',
        lname: string = '',
        phone: string = '',
        email: string = '',
  
    ) {
        this.fname = fname;
        this.lname = lname;
        this.phone = phone;
        this.email = email;

    }

    toFirebase() {
        return {
            firstName: this.fname,
            lastName: this.lname,
            phone: this.phone,
            email: this.email


}
}
}
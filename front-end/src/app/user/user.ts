export class User {
    constructor(
        public userName: string,
        public email: string,
        public password:string,
        public moderator:boolean,
        public serial: number,
        public approved: boolean 
    ){}
}

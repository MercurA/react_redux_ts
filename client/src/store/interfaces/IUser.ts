interface IUserDetails {
    phoneNumber: string;
    email: string;
}

interface IUser {
    _id: string;
    name: string;
    location: string;
    age: number;
    userDetails: IUserDetails;
}

export default IUser;

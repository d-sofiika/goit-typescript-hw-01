
type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues:Partial<User>): User {
    const updatedUser: User = {
        name: "Mike",
        surname:"Jonson",
  email: '',
  password: '',
    }
    return { ...updatedUser, ...initialValues };
}

const full =  createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});
console.log(full)
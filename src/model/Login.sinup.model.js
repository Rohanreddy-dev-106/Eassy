export default class Userlogin {
    constructor(name, email, password, id) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.id = id;
    }

    // Add a new user
    static add(name, email, password) {
        const user = new Userlogin(name, email, password, users.length + 1);
        users.push(user);
        console.log("User Registered:", user);
    }

    // Find user by email and password
    static finduser(email, password) {
        return users.find(user => user.email === email && user.password === password);
    }

    // Optional helper to view all users
    static getAll() {
        return users;
    }
}
// Store users in memory (temporary)
const users = [];
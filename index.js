const { encrypt, decrypt } = require('./script');

const myData = { name: "John", role: "student" };

const token = encrypt(myData);
console.log("Encrypted Token:", token);

const data = decrypt(token);
console.log("Decrypted Data:", data);

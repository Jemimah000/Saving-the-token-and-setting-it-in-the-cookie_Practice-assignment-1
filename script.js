const jwt = require('jsonwebtoken');

const SECRET_KEY = 'mysecretkey'; 


const encrypt = (payload) => {
  const token = jwt.sign(payload, SECRET_KEY);
  console.log("✅ Encrypted Token:", token);
  return token;
};


const decrypt = (token) => {
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    console.log("✅ Decrypted Payload:", decoded);
    return decoded;
  } catch (err) {
    console.error("❌ Invalid Token:", err.message);
  }
};

const myPayload = { name: "Manuel", role: "Student" };

const token = encrypt(myPayload);  
decrypt(token);                     

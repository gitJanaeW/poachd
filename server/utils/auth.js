const jwt = require('jsonwebtoken');
const secret = 'secretsauce';
const expiration = '2h';

module.exports = {
  authMiddleware: function ({req}) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // req.headers.authorization is expecting this format: ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }
    if (!token) {
      return req;
    }
    // if req.headers.authorization, return user data
    try {
      const {data} = jwt.verify(token, secret, {maxAge: expiration});
      req.user = data;
    } catch {
      console.log('Invalid token');
    }
    return req;
  },
  signToken: function ({username, email, _id}) {
    const payload = {username, email, _id};
    return jwt.sign({data: payload }, secret, { expiresIn: expiration});
  },
  // signOut: function () {
  //   const storedToken = localStorage.getItem('id_token');
  //   // const expTime =  (expiration * 1000) - 60000;
  //   const {exp} = jwt.decode(storedToken);
  //   console.log(exp);
  //   // if token is expired
  //   if (Date.now() >= exp * 1000) {
  //     localStorage.removeItem("id_token");
  //     window.location.assign("/");
  //   }
  // }
};
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  let { authorization: token } = req.headers;
  token = token?.replace("Bearer", "");
  console.log(token);
  if (token) {
    jwt.verify(
      token,
      process.env.JWT_SECRET,
      { algorithms: "HS512", expiresIn: "1m" },
      (error, decoded) => {
        if (error) {
          res.status(400).json({
            error: "invalid token",
            message: "el token no es valido , enviar un token correcto",
          });
        } else {
          console.log(decoded);
          next();
        }
      }
    );
  } else {
    res.status(400).json({
      error: "no token provider",
      message: "no se esta enviando token de autenticacion",
    });
  }
};

module.exports = authMiddleware;

//vamos a validar el token

//si el token es valido
//lo dejamos pasar a la ruta
//si es invalido
//anda pasha

var express = require("express");
var router = express.Router();

// import bcrypt library that we installed using : npm install bcrypt --save
const bcrypt = require("bcrypt");
const saltRounds = 10;

// Generating JWT Token
const jwt = require("jsonwebtoken");
const privateKey = `
-----BEGIN RSA PRIVATE KEY-----
MIICXgIBAAKBgQCCHv5sfIOEYf+4TNLfoUIre5GcpJGxb2t1c/TWOvFjE2x1VMwJ
bGzurdeeUss+PcItjuTNixOGNx7YO+HLZkLoW6WXlv9LWtHnbZvpzTZCTrfDxA4B
n/w3NEFp3tiu+CV8QRphvU1kYTbUo4+3Ko9eVNtt/BfLxsSpqQUaraunxQIDAQAB
AoGBAIBZnDNcusnpdLnRpawLP97uW5p8xm2UbxYDFD4BFDvbW/98bmrZNbZVajt0
haBWgOQ5cD3DcrXQRy+aGcZtj45ytqn2XgXpEiklq24cPflNB+1/BDxqylNT/CJf
wpi0vAKRqZRumF66mpeXy++3aaoLrIEcwyXRLU7HOCHf2wC9AkEA+1srhI5TXtCP
3TuN/vTksESYS4mJzKwi4sfbjEqq4ZyKwIsgHWhiJIVqxVl7OgSBgOkb/Fxcgu58
gn8rZyRw+wJBAISGbDnye3mPQkh6iylnheGTkrjv8nglB10TeKlE2fmhoR4cdfz4
JokN3XIWYZAj9TZ6teo4TUg8XNoEwJD4bj8CQQCcw+3OTJ3+ooE3b69N9hqzPPTn
F67T8gAIBLIPO3p8H5ACKkMrVDDxqiw/TWGne6vxZHHJ4SjpmCgbk4jUWUwFAkAk
UEk7n6wh5RV+ksWrNMjExRFBR86jCVJ5OKqph0pLUvS5MYdLKBw3FeuGJYfaXWAF
654JbiAPGStAOmkh0FE1AkEA8xkuzjVyHhsMG8kni0+h4iVyGc5GKZfvHQ23wzoN
I6lRcdmQQMSrPMfNne1bxtOSFdbZhNosi5uoHZcGKYeBWQ==
-----END RSA PRIVATE KEY-----
`;

// router-level middle for hashing
router.use(function (req, res, next) {
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(req.body.password, salt, function (err, hash) {
      req.hashedPassword = hash;
      // next() invokes the next piece of middleware
      next();
    });
  });
});

// Handling 2 forms of Request for Authorization - Login and Registration
router.post("/login", async function (req, res, next) {
  //res.send("login request");
  //res.send(req.body);
  if (req.body.username && req.body.password) {
    //res.send("Valid Request");
    // perform credential validation
    return await bcrypt
      .compare(
        req.body.password,
        "$2b$10$fceFIbsHsWAVb8cWifE54.Le0W.ff9ZgGOQWs6.oTk9p6lOrAtOV."
      )
      .then((result) => {
        if (result === true) {
          const token = jwt.sign({ id: "pretend_user_id" }, privateKey, {
            algorithm: "RS256",
            //return res.status(200).send("Password Matches!");
          });
          return res.status(200).json({ access_token: token });
        }
      })
      .catch((error) => {
        return res.status(500).json({ error: error.message });
      });
  } else {
    res.status(400).json({ error: "Username or Password Missing" });
  }
});

router.post("/register", function (req, res, next) {
  //res.send("register request");
  if (req.body.username && req.body.password && req.body.passwordConfirmation) {
    if (req.body.password === req.body.passwordConfirmation) {
      res.json({
        password: req.body.password,
        hashedPassword: req.hashedPassword,
      });
      res.send("Valid Request");
    }
    res.status(400).json({ error: "Password not matching!" });
    // perform credential validation
  } else {
    res.status(400).json({ error: "Username or Password Missing" });
  }
});

module.exports = router;

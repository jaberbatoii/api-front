const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const { verifyTokenAndAuthorization, verifyToken, verifyTokenAndAdmin } = require("./verifyToken");
const auth = require('../middleware/auth')
//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password:  req.body.password,
     
   
  });

  try {
    const savedUser = await newUser.save();
    const payload = {
        user: {
          id: newUser.id
        }
      };
    // console.log(savedUser);
    jwt.sign(
        payload,
       process.env.PASS_SEC,
        {
            expiresIn:10000
        },
        (err,token)=>{
            if(err) throw err;
            res.status(200).json({
                savedUser,
                token
            });
        }
    );
   
  } catch (err) {
      console.log(err.message);
    res.status(500).json("Error in Saving");
  }
});

//LOGIN

router.post('/login', async (req, res) => {
    try{
        const user = await User.findOne(
            {
                userName: req.body.user_name
            }
        );
              console.log(user);
        !user && res.status(401).json("Wrong User Name");

        const hashedPassword = (
            user.password,
            process.env.PASS_SEC
        );


        const originalPassword = hashedPassword

        const inputPassword = req.body.password;
        
        originalPassword == inputPassword && 
            res.status(401).json("Wrong Password");
            const payload = {
                user: {
                  id: user.id,
                  username:user.userName
                }
              };

              jwt.sign(
                payload,
                process.env.PASS_SEC,
                {
                  expiresIn: 3600
                },
                (err, token) => {
                  if (err) throw err;
                  res.status(200).json({
                    token,
                    user
                  });
                }
              );
        // const { password, ...others } = user._doc;  
        
        // res.status(200).json({ ...others, accessToken});

    }catch(err){
        res.status(500).json(err);
    }

});

router.get("/me", auth, async (req, res) => {
    try {
      // request.user is getting fetched from Middleware after token authentication
      const newUser = await User.find(req.user.id);
      res.json(newUser);
    } catch (e) {
      res.send({ message: "Error in Fetching user" });
    }
  });

module.exports = router;

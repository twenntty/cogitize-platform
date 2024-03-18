const User = require("../models/user");
const passport = require("passport");
const passportJWT = require("passport-jwt");
const ExtractJwt = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;

const params = {
  secretOrKey: "38cd95dcc50409bc7ff994286d2a2255a056b347704c5497675589dad0d0f24e",
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

module.exports = function () {
  const strategy = new Strategy(params, function (payload, done) {
    if (payload.expire <= Date.now()) {
      return done(new Error("TokenExpired"));
    }

    User.findById(payload.id, function (err, user) {
      if (err) {
        return done(new Error("UserNotFound"));
      } else {
        return done(null, user);
      }
    });
  });

  passport.use(strategy);

  return {
    initialize: function () {
      return passport.initialize();
    },
  };
};
const bcrypt = require("bcrypt");
const users = require("../data/users");
const cards = require("../data/cards");
const saveData = require("../utils/saveData");


module.exports = {
  create(req, res, next) {
    res.render('create-user');
  },

  save(req, res, next){
    let id = users.length + 1;
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    let user = { id, ...req.body }
    users.push(user)

    saveData(users, "users.js");

    res.render('create-user', { added: true });
  },

  login(req, res, next) {
    res.render('login');
  },
  
  authenticate(req, res, next){

  let {email, password} = req.body;
  let user = users.find(user => email == user.email);

 if(!user){
  return res.render('login', {notFound:true})
 }

 console.log('caiu aqui no mesmo erro');

  if(!bcrypt.compareSync(password, user.password)){
    return res.render('login', {notFound:true})

  }
  req.session.user = user;

  res.render('index', {user: req.session.user, cards});

}
}


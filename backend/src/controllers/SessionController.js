//index(listagem de sessoes), show(uma unica sessao), store(criar uma secao), update(att uma secao), destroy (deletar uma secao) - pode ciar mais metodos mas por padroes ficam esses, se precisa criar mais provavelmente precisa ciar outro controller
const User = require ('../models/User');

module.exports = {
  async store (req, res) {
    //const email = req.body.email;
    // fazendo uma desustruturação 
    const { email } = req.body;
    
    //let user = await User.findOne({ email: email });
    let user = await User.findOne({ email });

    if ( !user ) {
      user = await User.create({ email });
    }
    // const user = await User.create({ email });

    return res.json(user);
  }
};
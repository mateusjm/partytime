const {Party: PartyModel} = require('../models/Party')

const checkPartyBudget = (budget, services) => {

  const priceSum = services.reduce((sum, service)=> sum + service.price, 0)

  if(priceSum > budget) {
    return false
  }

  return true

}

const partyController = {
  create: async(req, res)=> {
    try {
      const party = {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        budget: req.body.budget,
        image: req.body.image,
        services: req.body.services,
      }

      if(party.services && !checkPartyBudget(party.budget, party.services)) {
        res.status(406).json({msg: 'O seu orçamento é insuficiente!'})
        return
      }

      const response = await PartyModel.create(party)

      res.status(201).json({response, msg: 'Festa criada com sucesso!'})

    } catch (error) {
      console.log(error)
    }
  },

  getAll: async(req, res)=> {
    try {
      const parties = await PartyModel.find()

      res.json(parties)
    } catch (error) {
      console.log(error)
    }
  },

  getOne: async(req, res)=> {
    try {
      const id = req.params.id

      const party = await PartyModel.findById(id)

      if(!party) {
        res.status(404).json({msg: 'Festa não encontrada!'})
        return
      }

      res.json(party)

    } catch (error) {
      console.log(error)
    }
  },

  deleteOne: async(req, res)=> {
    try {
      const id = req.params.id

      const party = await PartyModel.findById(id)

      if(!party) {
        res.status(404).json({msg: 'Festa não encontrada!'})
        return 
      }

      const deletedParty = await PartyModel.findByIdAndDelete(id)

      res.status(200).json({deletedParty, msg: 'Festa excluída com sucesso!'})

    } catch (error) {
      console.log(error)
    }
  },

  updateOne: async(req, res)=> {
    try {
      const id = req.params.id

      const party = {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        budget: req.body.budget,
        image: req.body.image,
        services: req.body.services,
      }

      if(party.services && !checkPartyBudget(party.budget, party.services)) {
        res.status(406).json({msg: 'O seu orçamento é insuficiente!'})
        return
      }

      const updatedParty = await PartyModel.findByIdAndUpdate(id, party)

      if(!party) {
        res.status(404).json({msg: 'Festa não encontrada!'})
        return 
      }

      res.status(200).json({party, msg: 'Festa atualizada com sucesso!'})

    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = partyController
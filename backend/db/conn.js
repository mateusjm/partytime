const mongoose = require('mongoose')

async function main() {

  try {
    await mongoose.connect(
      'mongodb+srv://mateuslucas2k4:mateuslucas2k4@cluster0.nd8yj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )

    console.log('Conectado ao banco!')
  } catch (error) {
    console.log(`Erro: ${error}`)
  }

}

module.exports = main
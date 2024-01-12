const Country = require('../models/Country')

const createCountry = async (req, res) => {
    try {
        const {code, name, capital, currency, languages, continent} = req.body

        const arrayLanguages = languages.map((lang)=> ({name: lang}))
        
        const newCountry = new Country({
            code,
            name,
            capital,
            currency,
            languages: arrayLanguages,
            continent
        })


        const saveCountry = await newCountry.save()

        res.status(200).json(saveCountry)
    } catch (error) {
        res.status(500).json({message: "server error"})
    }
}

module.exports = {
    createCountry,
}

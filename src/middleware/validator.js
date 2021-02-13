const { body, check, param, validationResult } = require('express-validator');

const resultValidator = (req) => {
    const messages = [];
    if(!validationResult(req).isEmpty()){
        const errors = validationResult(req).array();
        for(const i of errors){
            messages.push(i);
        }
    }
    return messages;
}

const insertValitor = () => {
    return [  console.log('me cago en toda la mierda'),
        // title se le aplica un proceso de validacion, en el se comprueba que no este vacio
        check('title').notEmpty().withMessage('Title not must be null'),
        //Ademas se comprueba que la longitud sea mayor igual que 5
        check('title').isLength({ min: 5 }).withMessage('Length must be greater than 5'),
        //La descripcion no debe ser null.
        check('description').not().isEmpty().withMessage('Description not must be null'),
        check('done').isBoolean().withMessage('Done must be Boolean')];
}

const errors = resultValidator(req)
    if (errors.length > 0) {
        return res.status(400).json({
            method: req.method,
            status: res.statusCode,
            error: errors
        })
    }



module.exports = {insertValitor};
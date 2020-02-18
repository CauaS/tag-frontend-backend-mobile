const requestModel = require('../models/requestModel');
const mongoose = require('mongoose');


module.exports = {
    async index(req, resp){ 
        const Allrequests = await requestModel.find();

       if(!Allrequests){
            console.log('Entroou!')
           const  request = await requestModel.create({
                request: 35489,
                description: 'Pedido de testes para o Mongo DB',
                consultant: 'Caligiuri',
                date: Date.now(),
                tags: tagsArrayok
            });
            return resp.json(request);
        }

        return resp.json(Allrequests);        
    },
    async search(req, resp) {

        const { tags, restrict } = req.body;

        const tagsArray = tags.split(',');
        const tagsArrayok = tagsArray.map(item => item.trim());

        
        if(!restrict){
            const requestsExact = await requestModel.find({ 
                tags: { $in: tagsArrayok }
            }); 

            return resp.json(requestsExact);
        }

        const requests = await requestModel.find({ 
            tags: { $eq: tagsArrayok }
        });

        return resp.json(requests);
    }
}
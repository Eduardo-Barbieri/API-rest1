const express = require('express');
const router = express.Router();
const cat_deposit = require('../controllers/cat_deposit');
const cat_list = require('../controllers/cat_list');
const id_manager = require('../controllers/Id_manager');

router.get('/', (req,res) =>{
    return res.status(200).json({
        cat_list
    });
})

router.post('/POST',(req,res) =>{
    const {name, colors} = req.body;
    cat_deposit(id_manager.Generate_ID(),name,colors);
    return res.status(201).json({
        name,
        colors
    });
})

router.get('/GET/:id',(req,res) =>{
    const id = req.params.id;
    const found = cat_list.find(cat_list => cat_list.id == id);

    if (!found){
        return res.status(404).json({message:"O gato "+id+" não existe"});
    }
    else{
        return res.status(200).send(found);
    }
});

router.patch('/PATCH/:id',(req,res) => {
    const id = req.params.id;
    const {name, colors} = req.body;
    
    const found = cat_list.find(cat_list => cat_list.id == id);

    if(name)found.name = name;
    if (colors)found.colors = colors;

    return res.status(200).json({found});
});

router.delete('/DELETE/:id',(req,res) =>{
    const id = req.params.id;
    const found = cat_list.find(cat_list => cat_list.id == id);

    if (!found){
        return res.status(404).json({message:"O gato "+id+" não existe"});
    }
    else{
            cat_list.splice(cat_list.id,1);
            id_manager.Reset_ID();
            return res.status(204).send();
      
    }
});

module.exports = router;
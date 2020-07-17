const express=require("express");
const router=express.Router();

const publicationCtrl=require("../controllers/publcation");

router.post('/', publicationCtrl.createPublication);
router.get("/",publicationCtrl.getAllPublication);
router.delete('/:id', publicationCtrl.deletePublication);

module.exports=router;
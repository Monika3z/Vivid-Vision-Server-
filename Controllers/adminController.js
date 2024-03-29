const admindatas = require('../Models/adminModel')

// add data
exports.showAdminData = async(req,res) =>{
    const{ wallid, title, description, price} =req.body
    const images = req.file.filename

    try{
        const showData = await admindatas.findOne({wallid});
        if(showData){
            res.status(405).json("id exists")
        }else{
            const newShowData = new admindatas({wallid, title, description, price,images})
            await newShowData.save();
            res.status(201).json(newShowData);
        }
    }catch(err){
        console.log(err);
        res.status(403).json(err); 
    }
}

// get data (wallpages)
exports.getWallpagesData = async (req,res)=>{
    const searchKey = req.query.search
    const query = {
        
        title:{$regex:searchKey,$options:"i"}
        
    }
    try{

        const showData = await admindatas.find(query,{title:1,images:1,wallid:1})
        res.status(200).json(showData)

    }catch(err){
        res.status(401).json(err)
    }
}

// get data details
exports.getDetailsData = async (req,res)=>{
    const{id} = req.params
    console.log(id);
    try{

        const detailsData = await admindatas.findOne({wallid:id})
        res.status(200).json(detailsData)

    }catch(err){
        res.status(401).json(err)
    }
}



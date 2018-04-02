

module.exports = function(formidable, Place, aws){
    return {
        SetRouting: function(router){
            router.get('/dashboard', this.adminPage);
            
            router.post('/uploadFile', aws.Upload.any(), this.uploadFile);
            router.post('/dashboard', this.adminPostPage);
        },
        
        adminPage: function(req, res){
            res.render('admin/dashboard');
        },
        
        adminPostPage: function(req, res){
            const newPlace = new Place();
            newPlace.name = req.body.place;
            newPlace.country = req.body.country;
            newPlace.image = req.body.upload;
            newPlace.save((err) => {
                res.render('admin/dashboard');
            })
        },
        
        uploadFile: function(req, res) {
            const form = new formidable.IncomingForm();
            
            form.on('file', (field, file) => {

            });
            
            form.on('error', (err) => {
            });
            
            form.on('end', () => {
                
            });
            
            form.parse(req);
        }
    }
}










































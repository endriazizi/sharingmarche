module.exports = function(){
    return {
        SetRouting: function(router){
            router.get('/latest-news', this.footbalNews);
        },
        
        footbalNews: function(req, res){
            res.render('news/news', {title: 'Sharing Marche - Latest News', user: req.user});
        }
    }
}
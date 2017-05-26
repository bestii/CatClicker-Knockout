var ViewModel=function(){
    var self=this;

    self.clickCounter=ko.observable(0);
    self.name=ko.observable('Tabby');
    self.imgSrc=ko.observable('img/4154543904_6e2428c421_z.jpg');
    self.imgAttribution=ko.observable('https://www.flickr.com/photos/');
    
    self.incrementCounter=function(){
        self.clickCounter(self.clickCounter()+1);
    };
};

ko.applyBindings(new ViewModel());
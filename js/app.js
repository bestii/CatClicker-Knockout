//-----------------------------------------
// CAT OBJECT FOR THE VIEWMODEL
//-----------------------------------------
var Cat = function () {
    this.clickCounter = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/4154543904_6e2428c421_z.jpg');
    this.imgAttribution = ko.observable('https://www.flickr.com/photos/');
    this.nicknames = ko.observableArray(['Tabtab', 'T-Bone', 'Mr. T', 'Tabby']);
    this.title = ko.computed(function () {
        var title, clicks = this.clickCounter();
        if (clicks < 10) {
            title = "NewBorn";
        } else if (clicks < 50) {
            title = "Infant";
        } else if (clicks < 100) {
            title = "Child";
        } else if (clicks < 200) {
            title = "Teen";
        } else if (clicks < 500) {
            title = "Adult";
        } else {
            title = "Ninja";
        }
        return title;
    },this);
};

//-----------------------------------------
// VIEWMODEL FOR THIS APPICATION
//-----------------------------------------
var ViewModel = function () {
    var self = this;

    self.currentCat=ko.observable(new Cat());

    self.incrementCounter = function () {
        //we are in the context of currentCat after "with" binding
        this.clickCounter(this.clickCounter() + 1);
    };
};

ko.applyBindings(new ViewModel());
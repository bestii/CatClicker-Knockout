var initialCats = [{
        clickCounter: 0,
        name: 'Tabby',
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
        imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
        nicknames: ['Tabtab', 'T-Bone', 'Mr. T', 'Tabby']
    },
    {
        clickCounter: 0,
        name: 'Tiger',
        imgSrc: 'img/4154543904_6e2428c421_z.jpg',
        imgAttribution: 'https://www.flickr.com/photos/xshamx/4154543904',
        nicknames: ['Tabtab', 'T-Bone', 'Mr. T', 'Tabby']
    },
    {
        clickCounter: 0,
        name: 'Scaredy',
        imgSrc: 'img/22252709_010df3379e_z.jpg',
        imgAttribution: 'https://www.flickr.com/photos/kpjas/22252709',
        nicknames: ['Tabtab', 'T-Bone', 'Mr. T', 'Tabby']
    },
    {
        clickCounter: 0,
        name: 'Shadow',
        imgSrc: 'img/1413379559_412a540d29_z.jpg',
        imgAttribution: 'https://www.flickr.com/photos/malfet/1413379559',
        nicknames: ['Tabtab', 'T-Bone', 'Mr. T', 'Tabby']
    }, {
        clickCounter: 0,
        name: 'Sleepy',
        imgSrc: 'img/9648464288_2516b35537_z.jpg',
        imgAttribution: 'https://www.flickr.com/photos/onesharp/9648464288',
        nicknames: ['Tabtab', 'T-Bone', 'Mr. T', 'Tabby']
    }

];



//-----------------------------------------
// CAT OBJECT FOR THE VIEWMODEL
//-----------------------------------------
var Cat = function (data) {
    this.clickCounter = ko.observable(data.clickCounter);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.nicknames = ko.observableArray(data.nicknames);
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
    }, this);
};

//-----------------------------------------
// VIEWMODEL FOR THIS APPICATION
//-----------------------------------------
var ViewModel = function () {
    var self = this;
    self.catList = ko.observableArray([]);
    initialCats.forEach(function (catItem) {
        self.catList.push(new Cat(catItem));
    });
    self.currentCat = ko.observable(
        self.catList()[0]
    );
    self.incrementCounter = function () {
        //we are in the context of currentCat after "with" binding
        this.clickCounter(this.clickCounter() + 1);
    };
    self.catChange = function (clickedCat) {
        self.currentCat(clickedCat);
    };
};

ko.applyBindings(new ViewModel());
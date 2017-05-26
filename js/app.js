var ViewModel = function () {
    var self = this;

    self.clickCounter = ko.observable(0);
    self.name = ko.observable('Tabby');
    self.imgSrc = ko.observable('img/4154543904_6e2428c421_z.jpg');
    self.imgAttribution = ko.observable('https://www.flickr.com/photos/');
    self.nicknames=ko.observableArray(['Tabtab','T-Bone','Mr. T','Tabby']);

    self.incrementCounter = function () {
        self.clickCounter(self.clickCounter() + 1);
    };

    self.title = ko.computed(function () {
        var title, clicks = self.clickCounter();
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
    });
};

ko.applyBindings(new ViewModel());


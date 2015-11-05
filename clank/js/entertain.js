var entertain = angular.module('Entertain', []);

entertain.controller('EntertainController', ['$scope', function($scope) {
    $scope.json = '';
    $scope.content = 'Let us write some placeholder text here so we know what do replace when we need replacing stuff';
    $scope.current_page = 'home';
    $scope.thumbsup = '';
    $scope.thumbsdown = '';

    $scope.get_json = function() {
        $.ajax({
            url: "../js/content.json",
            async: false,
            dataType: 'json',
            success: function (response) {
                // do stuff with response.
                console.log(response);
                $scope.json = response;
            }
        });
    };

    $scope.get_settings = function(setting) {
        if (setting) {
            return json.settings.setting
        } else {
            return json.settings
        }
    };

    $scope.set_settings = function(setting, value) {
        if (setting) {
            json.settings.setting = value
        }
    };

    $scope.get_content = function (page) {

        return this.json.pages[page].content
    };

    $scope.update_content = function (page) {
        this.content = this.get_content(page);
        this.update_like(page);
    };

    $scope.update_like = function (page) {
        if (this.get_like(page) == 1) {
            this.thumbsup = 'blackicon';
            this.thumbsdown = '';
        } else if (this.get_like(page) == -1) {
            this.thumbsdown = 'blackicon';
            this.thumbsup = '';
        } else {
            this.thumbsup = '';
            this.thumbsdown = '';
        }
    };

    $scope.get_like = function(page) {
        return this.json.pages[page].like
    };

    $scope.set_like = function(page, value) {
        return this.json.pages[page].like = value
    };

    $scope.toggle_thumbsup = function() {
        this.get_json(); // TODO
        var page = this.current_page;
        var like = this.get_like(page);
        if (like == 0 || like == -1) {
            this.set_like(page, 1);
        } else {
            this.set_like(page, 0);
        }
        this.update_like(page);
    };

    $scope.toggle_thumbsdown = function() {
        var page = this.current_page;
        var like = this.get_like(page);
        if (like == 0 || like == 1) {
            this.set_like(page, -1);
        } else {
            this.set_like(page, 0);
        }
        this.update_like(page);
    };

    $scope.next = function() {
        this.get_json(); // TODO
        switch (this.current_page) {
            case 'home':
                this.current_page = 'home-next';
                break;
            case 'home-next':
                this.current_page = 'home-next';
                break;
            case 'home-prev':
                this.current_page = 'home';
                break;
        }
        this.update_content(this.current_page);
    };

    $scope.prev = function() {
        switch (this.current_page) {
            case 'home':
                this.current_page = 'home-prev';
                break;
            case 'home-next':
                this.current_page = 'home';
                break;
            case 'home-prev':
                this.current_page = 'home-prev';
                break;
        }
        this.update_content(this.current_page);
    };

    $scope.get_nav_html = function() {
        var html = '<ul class="nav nav-tabs">';
        settings = get_settings();
        if (settings.feed_jokes == 1) {
            html+= '<li><a href="#">Jokes</a></li>';
        }
        if (settings.feed_videos == 1) {
            html+= '<li><a href="#">videos</a></li>';
        }
        if (settings.feed_movies == 1) {
            html+= '<li><a href="#">Movies</a></li>';
        }
        if (settings.feed_events == 1) {
            html+= '<li><a href="#">Events</a></li>';
        }
        html += '</ul>';
        return html
    }
}]);
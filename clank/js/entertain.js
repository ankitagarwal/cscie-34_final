var entertain = angular.module('Entertain', ["pageslide-directive"]);

entertain.controller('EntertainController', ['$scope', '$http', function($scope, $http) {
    $scope.json = '';
    $scope.content = 'Let us write some placeholder text here so we know what do replace when we need replacing stuff';
    $scope.current_page = 'home';
    $scope.current_tab = 'jokes';
    $scope.thumbsup = '';
    $scope.thumbsdown = '';
    $scope.logs = '';
    $scope.checked = false; // This will be binded using the ps-open attribute
    $scope.settings_jokes  = true;
    $scope.settings_movies = true;
    $scope.settings_events = false;
    $scope.settings_videos = false;

    $scope.toggle_settings = function() {
        $scope.checked = !$scope.checked
    };

    $scope.show_tabs = function() {
        var count = 0;
        if ($scope.settings_jokes) {
            count++;
        }
        if ($scope.settings_movies) {
            count++;
        }
        if ($scope.settings_events) {
            count++;
        }
        if ($scope.settings_videos) {
            count++;
        }

        if (count > 1) {
            return true;
        } else {
            return false
        }
    };

    $scope.is_tab_active = function(tab) {
        if (tab === this.current_tab) {
            return true;
        }
        return false;
    };

    $scope.switch_tab = function(tab) {
        this.current_tab = tab;
        //this.update_content(tab + "-home");
    };

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
            this.log("Page " + this.current_page + " Was given thumbs up on "+ new Date().getTime());
        } else {
            this.set_like(page, 0);
            this.log("Thumbs up was removed from page " + this.current_page + " on "+ new Date().getTime());
        }
        this.update_like(page);
    };

    $scope.toggle_thumbsdown = function() {
        var page = this.current_page;
        var like = this.get_like(page);
        if (like == 0 || like == 1) {
            this.set_like(page, -1);
            this.log("Page " + this.current_page + " Was given thumbs up on "+ new Date().getTime());
        } else {
            this.set_like(page, 0);
            this.log("Thumbs down was removed from page " + this.current_page + " on "+ new Date().getTime());
        }
        this.update_like(page);
    };

    $scope.next = function() {
        this.get_json(); // TODO
        switch (this.current_page) {
            case 'home':
                this.current_page = 'home-next';
                this.log("Page home-next visited on " + new Date().getTime());
                break;
            case 'home-next':
                this.current_page = 'home-next';
                this.log("Page home-next visited on " + new Date().getTime());
                break;
            case 'home-prev':
                this.current_page = 'home';
                this.log("Page home visited on " + new Date().getTime());
                break;
        }
        this.update_content(this.current_page);
    };

    $scope.prev = function() {
        switch (this.current_page) {
            case 'home':
                this.current_page = 'home-prev';
                this.log("Page home-prev visited on " + new Date().getTime());
                break;
            case 'home-next':
                this.log("Page home visited on " + new Date().getTime());
                this.current_page = 'home';
                break;
            case 'home-prev':
                this.log("Page home-prev visited on " + new Date().getTime());
                this.current_page = 'home-prev';
                break;
        }
        this.update_content(this.current_page);
    };

    $scope.get_nav_html = function() {
        var html = '<ul class="nav nav-tabs">';
        var settings = get_settings();
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
    };

    $scope.log = function(log) {
        $http.get('http://127.0.0.1/cscie-34_final/clank/files/logs.php?log=' + JSON.stringify(log));
    };
}]);
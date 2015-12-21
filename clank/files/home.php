<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Home</title>

    <?php
        require_once("templates/includes.html");
    ?>
</head>
<body>
<div id="fb-root"></div>
<script>(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=182114351849103";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
<div class="cl-device-frame" ng-app="Entertain">
    <div class="cl-device-wrap" data-os="ios" data-device="iphone4-portrait">

        <div class="cl-device-body">
            <?php
                require_once("templates/header.html");
            ?>
            <div id="EntertainConrtoller" class="cl-page container-fluid" ng-controller="EntertainController"
                 data-ng-init="get_json_and_init_page()">
                <div class="cl-bar-title">
                    <div class="cl-title">Home</div>
                </div>

                <div class="cl-content row">
                    <!--Side bar-->
                    <?php
                        require_once("templates/sidebar.html");
                    ?>
                    <!--End of side bar-->
                    <!--Top navbar-->
                    <?php
                        require_once("templates/top-navbar.html");
                    ?>
                    <!--End of Top navbar-->

                    <div class="row container-fluid" id="settings"></div>

                    <!--Main content-->
                    <div class="cl-article cl-article-centered container-fluid">
                        <div class="row" ng-show="show_tabs()">
                            <ul class="nav nav-tabs">
                                <li ng-class="{active: is_tab_active('jokes')}" ng-show="settings_jokes"
                                    ng-click="switch_tab('jokes')"><a href="#">Jokes</a></li>
                                <li ng-class="{active: is_tab_active('videos')}" ng-show="settings_videos"
                                    ng-click="switch_tab('videos')"><a href="#">Videos</a></li>
                                <li ng-class="{active: is_tab_active('movies')}" ng-show="settings_movies"
                                    ng-click="switch_tab('movies')"><a href="#">Movies</a></li>
                                <li ng-class="{active: is_tab_active('events')}" ng-show="settings_events"
                                    ng-click="switch_tab('events')"><a href="#">Events</a></li>
                            </ul>
                        </div>
                        <div class="row container-fluid">
                            <span class="col-sm-1 vert-allign">
                                <a href="#" aria-label="Next">
                                    <span ng-click="prev()" class="glyphicon glyphicon-resize-small glyphicon-menu-left"></span>
                                </a>
                            </span>

                            <span class="col-sm-9" ng-bind-html="content | unsafe">
                            </span>
                            <span class="col-sm-1 vert-allign">
                                <a href="#" aria-label="Next">
                                    <span ng-click="next()" class="glyphicon glyphicon-resize-small glyphicon-menu-right"></span>
                                </a>
                            </span>
                        </div>
                        <div class="row container-fluid">
                            <span class="col-sm-offeset-6">Category:</span>
                            <span class="greyfont">{{get_category()}}</span>
                        </div>
                    </div>
                    <!--End of main content-->

                    <!-- Movie controls-->
                    <div class="row container-fluid top-buffer" ng-if="show_movies_control()">
                        <div class="col-sm-6">
                            <button type="button" class="float-right btn-primary" onclick="location.href='select_theater.php';">
                                Watch trailer
                            </button>
                        </div>
                        <div class="col-sm-5">
                            <button type="button" class="float-right btn-primary" onclick="location.href='select_theater.php';">
                                Book tickets
                            </button>
                        </div>
                    </div>
                    <!-- End of movie controls-->

                    <!--Thumbs up and down buttons-->
                    <div class="row container-fluid top-buffer">
                        <div class="col-sm-6">
                            <button class="{{thumbsup}} float-right" type="button" ng-click="toggle_thumbsup()">
                                <span class="glyphicon glyphicon-large glyphicon-thumbs-up col-xs-6"></span>
                            </button>
                        </div>
                        <div class="col-sm-6">
                            <button class="{{thumbsdown}}" type="button" ng-click="toggle_thumbsdown()">
                                <span class="glyphicon glyphicon-large glyphicon-thumbs-down col-xs-6"></span>
                            </button>
                        </div>
                    </div>
                    <!--End of Thumbs up and down buttons-->

                    <div class="row container-fluid top-buffer-large">
                        <div class="col-sm-4 col-sm-offset-1 font-larger">Share on:</div>
                    </div>
                    <div class="row container-fluid top-buffer">
                        <a class="col-sm-offset-2 col-sm-4"
                           href="http://www.facebook.com/sharer/sharer.php?u=[URL]&title=[TITLE]"><img
                                src="../images/images/fb-art.jpg" class="social"/></a>
                        <a class="col-sm-3 col-sm-offset-1"
                            href="http://twitter.com/intent/tweet?status=[TITLE]+[URL]"><img
                            src="../images/images/twitter.png" class="social"/></a>
                    </div>
                </div>
                <script src="../js/blood-footer.js"></script>
            </div>

        </div>

    </div>
</div>

</body>
</html>

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
<div class="cl-device-frame" ng-app="Entertain">
    <div class="cl-device-wrap" data-os="ios" data-device="iphone4-portrait">
        <div class="cl-device-body">
            <?php
                require_once("templates/header.html");
            ?>
            <div class="cl-page container-fluid" ng-controller="EntertainController" data-ng-init="get_json_and_init_page()">
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
                    <form action="select_time.php" method="get">
                    <div class="row cl-article cl-article-centered container-fluid">
                        <span class="col-sm-offset-1">Select a theater you like:-</span> <br />
                        <label class="col-sm-offset-1 top-buffer">Hoyts Cinemas<input type="radio" ng-model="cinema" name="cinema"
                                                                                      value="Hoyts Cinemas"/></label><br />
                        <label class="col-sm-offset-1">Picadly Arcade<input type="radio" name="cinema" value="Picadly Arcades"
                                                                            ng-model="cinema"
                                /></label><br />
                        <label class="col-sm-offset-1">Event Cinemas<input type="radio" ng-model="cinema" name="cinema"
                                                                           value="Event Cinemas"/></label><br />
                        <label class="col-sm-offset-1">Panther Movies<input type="radio" ng-model="cinema" name="cinema" value="Panther Movies"/></label><br />
                    </div>
                    <div class="row container-fluid">
                        <div class="col-sm-offset-1">Select date:</div>
                        <div class="col-sm-8 col-sm-offset-1">
                            <p class="input-group">
                                <input type="text" class="form-control" uib-datepicker-popup="{{format}}" ng-model="dt"
                                       is-open="status.opened" min-date="minDate" max-date="maxDate"
                                       datepicker-options="dateOptions" date-disabled="disabled(date, mode)" ng-required="true"
                                       close-text="Close"/>
                                <span class="input-group-btn">
                                    <button type="button" class="btn btn-default" ng-click="open($event)"><i class="glyphicon glyphicon-calendar"></i></button>
                                </span>
                            </p>
                        </div>
                    </div>

                    <div class="row container-fluid top-buffer">
                        <div class="col-sm-4">
                            <button type="button" class="float-right btn-danger" onclick="location.href='home.php';">
                                Cancel
                            </button>
                        </div>
                        <div class="col-sm-4">
                            <input name="date" type="hidden" ng-model="dt" value={{dt}} />
                            <button type="submit" class="float-right btn-primary">
                                Continue
                            </button>
                        </div>
                    </div>
                    </form>
                    <!--End of main content-->
                </div>
            </div>

        </div>
    </div>

</div>

</body>
</html>
<script src="../js/blood-footer.js"></script>
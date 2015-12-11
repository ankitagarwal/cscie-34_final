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
                    <div class="row container-fluid">
                        <span class="col-sm-offset-1 col-sm-10 top-buffer">
                            Now you should be redirected to a third party website with pre-filled data to finalize your booking.
                            This story is out of scope of this prototype.
                        </span>
                    </div>
                    <div class="row container-fluid top-buffer">
                        <div class="col-sm-offset-4 col-sm-4">
                            <button type="button" class="float-right btn-primary" onclick="location.href='home.php';">
                                Go to Home
                            </button>
                        </div>
                    </div>
                    <!--End of main content-->
                </div>
            </div>

        </div>
    </div>

</div>

</body>
</html>
<script src="../js/blood-footer.js"></script>
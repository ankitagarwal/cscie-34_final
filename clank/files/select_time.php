<?php
    $cinema = $_GET['cinema'];
    $date = $_GET['date'];
    $date = date("d/m/y", time($date));
?>
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
                    <form action="outofscope.php" method="get">
                    <div class="row cl-article cl-article-centered container-fluid">
                        <span class="col-sm-offset-1">Select a theater you like:-</span> <br />
                        <label class="col-sm-offset-1 top-buffer"><?php echo $cinema . ", " . $date ?>, 10am (45 seats available)
                                <input type="radio" name="time" /></label>
                        <label class="col-sm-offset-1 top-buffer"><?php echo $cinema . ", " . $date ?>, 1pm (24 seats available)<input type="radio"
                                name="time" /></label>
                        <label class="col-sm-offset-1 top-buffer"><?php echo $cinema . ", " . $date ?>, 4pm (3 seats available)<input type="radio"
                                name="time" /></label>
                        <label class="col-sm-offset-1 top-buffer"><?php echo $cinema . ", " . $date ?>, 9pm (56 seats available)<input type="radio"
                                name="time" /></label>
                    </div>
                    <div class="row container-fluid top-buffer">
                        <div class="col-sm-4 col-sm-offset-1">
                            <button type="button" class="btn float-right btn-danger" onclick="location.href='home.php';">
                                Cancel
                            </button>
                        </div>
                        <div class="col-sm-4 col-sm-offset-2">
                            <button type="submit" class="btn float-right btn-primary">
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
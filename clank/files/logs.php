<?php

$count = file_put_contents("/home/ankit/cscie-34_final/clank/files/logs", $_GET['log'] . PHP_EOL, FILE_APPEND);
echo $count;
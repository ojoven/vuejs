<?php
header('Content-Type: application/json');
$data = 'Data from the backend';
echo json_encode($data);
die();
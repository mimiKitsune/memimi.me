<?php
/**
 * Created by IntelliJ IDEA.
 * User: Greg
 * Date: 20/12/13
 * Time: 00:55
 */


//print_r(explode('/', $_SERVER['REQUEST_URI']));
$url = array_values(array_filter(explode('/', $_SERVER['REQUEST_URI'])));
//print_r($url);

function parse($urlPart, $location) {
    $part = $urlPart[0];
    if (empty($urlPart)) {
        return $location.'home.php';
    }
    elseif (count($urlPart) === 1 && is_file($location.$urlPart[0].'.php')) {
        return $location.$urlPart[0].'.php';
    }
    elseif (is_dir($location.$urlPart[0]) && count($urlPart) > 1) {
        array_shift($urlPart);
        return parse($urlPart, $location.$part.'/');
    }
    else {
        return '404.php';
    }

}


$page = parse($url, 'pages/');

include $page;
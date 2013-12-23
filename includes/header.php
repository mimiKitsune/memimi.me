<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MEOW!</title>
    <script src="//code.jquery.com/jquery-1.10.2.min.js"></script>
    <script src="/js/bootstrap.min.js"></script>
    <script src="/js/events.js"></script>
    <script src="/js/snow.js"></script>
    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/yeti.min.css">
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="/css/snow.css">
    <link rel="stylesheet" href="/css/social_foundicons.css">
</head>
<body class="container">

    <header>
        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/">Mimi</a>
            </div>

            <div class="collapse navbar-collapse" id="navbar-collapse">
                <ul class="nav navbar-nav">
                    <li><a href="/"><span class="glyphicon glyphicon-home"></span>Home</a></li>
                    <li><a href="/contact/">Contact Me</a></li>
                    <li class="dropdown ">
                        <a href="/minecraft/" class="dropdown-toggle" data-toggle="dropdown">Minecraft <b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <li><a href="/minecraft/survival/">Survival</a></li>
                            <li><a href="/minecraft/creative/">Creative</a></li>
                        </ul>
                    </li>
                    <li><a href="https://github.com/mimiKitsune">GitHub</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#" class="btn-info" id="make-it-snow">Make It Snow!</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <img id="snowTemplate" class="snowflake"
         src="//g105b.com/Snowflake.svg" />
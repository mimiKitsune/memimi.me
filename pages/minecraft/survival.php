<?php
$content = <<<CONTENT
        <h2 class="page-title">Survival <small>survival.memimi.me</small></h2>
        <h3>Plugins on the server</h3>
        <p>Below is a list of plugins installed.</p>
        <p>Click a plugin for more information about commands available.</p>

        <div class="panel-group" id="accordion">
            <div class="panel panel-default">

                <div class="panel-heading">
                    <h4 class="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#ess">Essentials</a>
                    </h4>
                </div>

                <div id="ess" class="panel-collapse collapse">
                    <div class="panel-body">

                        <p>Provides lots of useful commands</p>

                        <div class="list-group">

                            <div class="list-group-item">
                                <h4 class="list-group-item-heading">/afk</h4>
                                <p class="list-group-item-text">Triggered automatically if you dont move for 5 seconds, can also be run manually to instantly mark yourself as afk</p>
                            </div> <!-- close .list-group-item -->

                            <div class="list-group-item">
                                <h4 class="list-group-item-heading">/mail [read|clear|send &lt;to&gt; &lt;message&gt;]</h4>
                                <p class="list-group-item-text">
                                    Allows you to send & receive mail from other players on the server
                                    <br/>
                                    <strong>e.g.</strong>
                                    <br/>
                                    /mail read
                                    <br/>
                                    /mail send zack6849 HI!
                                </p>
                            </div> <!-- close .list-group-item -->

                            <div class="list-group-item">
                                <h4 class="list-group-item-heading">/msg|tell|m|t|whisper &lt;player&gt; &lt;message&gt;</h4>
                                <p class="list-group-item-text">Allows you to message other players</p>
                            </div> <!-- close .list-group-item -->

                        </div> <!-- close .list-group -->

                    </div> <!-- close .panel-body -->
                </div> <!-- close .panel-collapse -->

            </div> <!-- close .panel -->

            <div class="panel panel-default">

            <div class="panel-heading">
                <h4 class="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#wg">World Guard</a>
                </h4>
            </div>

            <div id="wg" class="panel-collapse collapse">
                <div class="panel-body">

                <p>Provides region protection</p>



                </div>
            </div>

            </div> <!-- close .panel -->

        </div> <!-- close .panel-group -->
CONTENT;

include 'layouts/2-col-content-left.php';
?>

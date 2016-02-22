<?php

$loadedCount = $_GET['loadedCount'];

$json_data = '<div class=\'schedule__item schedule__item-drop-down more-content__item hidden\'>
                        <time class=\'schedule__time\' datetime=\'09:00\'>9:00-11:00</time>
                        <h2 class=\'schedule__event\'>User Experience and Radical Users</h2>
                        <div class=\'schedule__details\'>
                            <a href=\'#\' class=\'schedule__main-place\'>
                                <i class=\'fa fa-location-arrow\'></i>
                                MAIN VENUE</a>
                            <div class=\'schedule__layout\'>
                                <div class=\'schedule__speakers-group\'>
                                    <a href=\'#\' class=\'schedule__speaker\'>
                                        <div class=\'schedule__speaker-pic\' style=\'background-image: url("pic/speaker1.jpg")\'>
                                            <span class=\'schedule__speaker-hover\'>
                                                VIEW PROFILE +
                                            </span>
                                        </div>
                                        <h3 class=\'schedule__speaker-name\'>Jane ROTENBERG</h3>
                                    </a>
                                    <a href=\'#\' class=\'schedule__speaker\'>
                                        <div class=\'schedule__speaker-pic\' style=\'background-image: url("pic/speaker1.jpg")\'>
                                            <span class=\'schedule__speaker-hover\'>
                                                VIEW PROFILE +
                                            </span>
                                        </div>
                                        <h3 class=\'schedule__speaker-name\'>Jane ROTENBERG</h3>
                                    </a>
                                    <a href=\'#\' class=\'schedule__speaker\'>
                                        <div class=\'schedule__speaker-pic\' style=\'background-image: url("pic/speaker1.jpg")\'>
                                            <span class=\'schedule__speaker-hover\'>
                                                VIEW PROFILE +
                                            </span>
                                        </div>
                                        <h3 class=\'schedule__speaker-name\'>Jane ROTENBERG</h3>

                                    </a>
                                    <a href=\'#\' class=\'schedule__speaker\'>
                                        <div class=\'schedule__speaker-pic\' style=\'background-image: url("pic/speaker1.jpg")\'>
                                            <span class=\'schedule__speaker-hover\'>
                                                VIEW PROFILE +
                                            </span>
                                        </div>
                                        <h3 class=\'schedule__speaker-name\'>Jane ROTENBERG</h3>
                                    </a>
                                </div>
                                <div class=\'schedule__info\'>
                                    <div class=\'schedule__text\'>
                                        In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris, quis sollici...
                                    </div>
                                    <div class=\'schedule__labels\'>
                                        <span class=\'label\'># LABEL</span>
                                        <span class=\'label label_1\'># TECHNOLOGY</span>
                                        <span class=\'label label_2\'># PSYCHOLOGY</span>
                                        <span class=\'label label_3\'># MARKETING </span>
                                        <span class=\'label label_4\'># ENTERTAINMENT</span>
                                    </div>
                                    <a href=\'#\' class=\'btn btn_7\'>READ MORE</a>
                                </div>
                            </div>
                        </div>
                    </div>';

echo $json_data;
exit;
?>

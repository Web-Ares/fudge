<?php

$loadedCount = $_GET['loadedCount'];

//  "has_items" - the number of not downloaded images
//  "title" - text which shows at hover on element
//  "dummy" - path to preview picture
//  "href" - path to main picture, which shows in popup, or a link to the video
//  "video" - if it is a block with a link to video frame

    $json_data = '{
        "has_items": 1,
                    "items":[

                        {
                            "id":1,
                            "title": "A New Conference. Be Inspired, Get Creative.",
                            "picture": "pic/news-01.jpg",
                            "date": "17 Feb. 2016",
                            "href": "#"
                            },
                        {
                            "id":2,
                            "title": "A New Conference. Be Inspired, Get Creative.",
                            "picture": "pic/news-01.jpg",
                            "date": "17 Feb. 2016",
                            "href": "#"
                            },
                        {
                            "id":3,
                            "title": "A New Conference. Be Inspired, Get Creative.",
                            "picture": "pic/news-01.jpg",
                            "date": "17 Feb. 2016",
                            "href": "#"
                            },
                        {
                            "id":4,
                            "title": "A New Conference. Be Inspired, Get Creative.",
                            "picture": "pic/news-01.jpg",
                            "date": "17 Feb. 2016",
                            "href": "#"
                            },
                        {
                            "id":5,
                            "title": "A New Conference. Be Inspired, Get Creative.",
                            "picture": "pic/news-01.jpg",
                            "date": "17 Feb. 2016",
                            "href": "#"
                            },
                        {
                            "id":6,
                            "title": "A New Conference. Be Inspired, Get Creative.",
                            "picture": "pic/news-01.jpg",
                            "date": "17 Feb. 2016",
                            "href": "#"
                            },
                        {
                            "id":7,
                            "title": "A New Conference. Be Inspired, Get Creative.",
                            "picture": "pic/news-01.jpg",
                            "date": "17 Feb. 2016",
                            "href": "#"
                            },
                        {
                            "id":8,
                            "title": "A New Conference. Be Inspired, Get Creative.",
                            "picture": "pic/news-01.jpg",
                            "date": "17 Feb. 2016",
                            "href": "#"
                            },
                        {
                            "id":9,
                            "title": "A New Conference. Be Inspired, Get Creative.",
                            "picture": "pic/news-01.jpg",
                            "date": "17 Feb. 2016",
                            "href": "#"
                            }

                    ]
    }';

echo $json_data;
exit;
?>

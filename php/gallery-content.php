<?php

$loadedCount = $_GET['loadedCount'];

if ( $loadedCount == 9 ){

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
                            "title": "Mouse hover",
                            "dummy": "pic/gallery__pic-1.jpg",
                            "href": "pic/big/gallery__pic-1.jpg"
                            },
                        {
                            "id":2,
                            "title": "Mouse hover",
                            "dummy": "pic/gallery__pic-3.jpg",
                            "href": "pic/big/gallery__pic-3.jpg"
                            },
                        {
                            "id":3,
                            "title": "Mouse hover",
                            "dummy": "pic/gallery__pic-5.jpg",
                            "href": "pic/big/gallery__pic-5.jpg"
                            },
                        {
                            "id":4,
                            "title": "Mouse hover",
                            "dummy": "pic/gallery__pic-6.jpg",
                            "href": "pic/big/gallery__pic-6.jpg"
                            },
                        {
                            "id":5,
                            "title": "Mouse hover",
                            "dummy": "pic/gallery__pic-4.jpg",
                            "video": "https://www.youtube.com/embed/3PYLnSrP3eE"
                            },
                        {
                            "id":6,
                            "title": "Mouse hover",
                            "dummy": "pic/gallery__pic-7.jpg",
                            "href": "pic/big/gallery__pic-7.jpg"
                            },
                        {
                            "id":7,
                            "title": "Mouse hover",
                            "dummy": "pic/gallery__pic-2.jpg",
                            "href": "pic/big/gallery__pic-2.jpg"
                            },
                        {
                            "id":8,
                            "title": "Mouse hover",
                            "dummy": "pic/gallery__pic-8.jpg",
                            "href": "pic/big/gallery__pic-8.jpg"
                            },
                        {
                            "id":9,
                            "title": "Mouse hover",
                            "dummy": "pic/gallery__pic-9.jpg",
                            "href": "pic/big/gallery__pic-9.jpg"
                        }

                    ]
                }';

} else {

//  "has_items" - the number of not downloaded images
//  "title" - text which shows at hover on element
//  "dummy" - path to preview picture
//  "href" - path to main picture, which shows in popup, or a link to the video
//  "video" - if it is a block with a link to video frame

    $json_data = '{
                    "has_items": 0,
                    "items":[

                        {
                            "id":1,
                            "title": "Mouse hover",
                            "dummy": "pic/gallery__pic-1.jpg",
                            "href": "pic/big/gallery__pic-1.jpg"
                            },
                        {
                            "id":2,
                            "title": "Mouse hover",
                            "dummy": "pic/gallery__pic-3.jpg",
                            "video": "https://www.youtube.com/embed/YykjpeuMNEk"
                            }

                    ]
                }';

};

echo $json_data;
exit;
?>

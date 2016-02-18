<?php

$loadedCount = $_GET['loadedCount'];

if ( $loadedCount == 9 ){

    $json_data = '[

                    {
                        "id":1,
                        "video": false,
                        "title": "Mouse hover",
                        "image-bg": "pic/gallery__pic-1.jpg",
                        "href": "pic/big/gallery__pic-1.jpg"
                        },
                    {
                        "id":2,
                        "video": false,
                        "title": "Mouse hover",
                        "image-bg": "pic/gallery__pic-3.jpg",
                        "href": "pic/big/gallery__pic-3.jpg"
                        },
                    {
                        "id":3,
                        "video": false,
                        "title": "Mouse hover",
                        "image-bg": "pic/gallery__pic-5.jpg",
                        "href": "pic/big/gallery__pic-5.jpg"
                        },
                    {
                        "id":4,
                        "video": false,
                        "title": "Mouse hover",
                        "image-bg": "pic/gallery__pic-6.jpg",
                        "href": "pic/big/gallery__pic-6.jpg"
                        },
                    {
                        "id":5,
                        "video": true,
                        "title": "Mouse hover",
                        "image-bg": "pic/gallery__pic-4.jpg",
                        "href": "https://www.youtube.com/embed/ymNFyxvIdaM"
                        },
                    {
                        "id":6,
                        "video": false,
                        "title": "Mouse hover",
                        "image-bg": "pic/gallery__pic-7.jpg",
                        "href": "pic/big/gallery__pic-7.jpg"
                        },
                    {
                        "id":7,
                        "video": false,
                        "title": "Mouse hover",
                        "image-bg": "pic/gallery__pic-2.jpg",
                        "href": "pic/big/gallery__pic-2.jpg"
                        },
                    {
                        "id":8,
                        "video": false,
                        "title": "Mouse hover",
                        "image-bg": "pic/gallery__pic-8.jpg",
                        "href": "pic/big/gallery__pic-8.jpg"
                        },
                    {
                        "id":9,
                        "video": false,
                        "title": "Mouse hover",
                        "image-bg": "pic/gallery__pic-9.jpg",
                        "href": "pic/big/gallery__pic-9.jpg"
                        }

]';

};

echo $json_data;
exit;
?>

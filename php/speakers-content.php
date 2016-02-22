<?php

$loadedCount = $_GET['loadedCount'];

//  "has_items" - the number of not downloaded speakers
//  "name" - name of speaker
//  "post" - post of speaker
//  "href" - link to speaker profile

$json_data = '{

        "has_items": 1,
                    "items":[

                        {
                            "id":1,
                            "picture": "pic/speaker-001.jpg",
                            "name": "Jane ROTENBERG",
                            "post": "Design Director and Co-founder of Stellar Artworks",
                            "href": "#",
                            "favorite": " "
                            },
                        {
                            "id":2,
                            "picture": "pic/speaker-002.jpg",
                            "name": "James Smith",
                            "post": "Founder of Smart Tech Co.",
                            "href": "#",
                            "favorite": "speakers__person_favorite"
                            },
                        {
                            "id":3,
                            "picture": "pic/speaker-003.jpg",
                            "name": "DanielA Lewis",
                            "post": "Founder of Something Eventualy",
                            "href": "#",
                            "favorite": " "
                            },
                        {
                            "id":4,
                            "picture": "pic/speaker-004.jpg",
                            "name": "Robert J.",
                            "post": "Founder of Something Eventualy",
                            "href": "#",
                            "favorite": " "
                            }

                    ]
    }';

echo $json_data;
exit;
?>

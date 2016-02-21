<?php

$loadedCount = $_GET['loadedCount'];

if ( $loadedCount == 4 ){

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
                            "picture": "pic/speaker-001.jpg",
                            "name": "Jane ROTENBERG",
                            "post": "Design Director and Co-founder of Stellar Artworks",
                            "href": "#",
                            "favorite": "speakers__person_favorite"
                            },
                        {
                            "id":3,
                            "picture": "pic/speaker-001.jpg",
                            "name": "Jane ROTENBERG",
                            "post": "Design Director and Co-founder of Stellar Artworks",
                            "href": "#",
                            "favorite": " "
                            },
                        {
                            "id":4,
                            "picture": "pic/speaker-001.jpg",
                            "name": "Jane ROTENBERG",
                            "post": "Design Director and Co-founder of Stellar Artworks",
                            "href": "#",
                            "favorite": " "
                            }

                    ]
    }';

} else {

//  "has_items" - the number of not downloaded speakers
//  "name" - name of speaker
//  "post" - post of speaker
//  "href" - link to speaker profile

    $json_data = '{

        "has_items": 0,
            "items":[

                        {
                            "id":5,
                            "picture": "pic/speaker-001.jpg",
                            "name": "Jane ROTENBERG",
                            "post": "Design Director and Co-founder of Stellar Artworks",
                            "href": "#"
                            },
                        {
                            "id":6,
                            "picture": "pic/speaker-001.jpg",
                            "name": "Jane ROTENBERG",
                            "post": "Design Director and Co-founder of Stellar Artworks",
                            "href": "#"
                            }
            ]
        }';

};
echo $json_data;
exit;
?>

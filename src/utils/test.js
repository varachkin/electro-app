export const ININIAL_CATEGORIES = [
    {
        "name": "Drilling Tools",
        "id": "CT001",
        "image_url": "https://www.tnr.co.uk/wp-content/uploads/2017/04/worx-wx550l-axis.jpg"
    },
    {
        "name": "Cutting Tools",
        "id": "CT002",
        "image_url": "https://image.similarpng.com/very-thumbnail/2020/07/Power-tool-image-cartoon-on-transparent-background-PNG.png"
    },
    {
        "name": "Sanding Tools",
        "id": "CT003",
        "image_url": "https://www.gtech.co.uk/media/catalog/product/cache/02c42cc9077ebaec004be0f62aac540e/m/u/multi-tool-bare_2x.jpg"
    },
    {
        "name": "Screwdriving Tools",
        "id": "CT004",
        "image_url": "https://w7.pngwing.com/pngs/308/798/png-transparent-planers-hand-planes-makita-tool-blade-electric-tools-angle-wood-home-depot.png"
    },
    {
        "name": "Specialty Tools",
        "id": "CT005",
        "image_url": "https://i5.walmartimages.com/asr/37240837-a358-45f7-b239-cda4e951a418_1.14027a159330d1e7343380b94f3d8876.jpeg"
    }
];


export const INITIAL_TOOLS = [
    {
        "name": "Cordless Drill",
        "id": "ET001",
        "description": "A versatile cordless drill for drilling holes and driving screws.",
        "image_url": "https://image.similarpng.com/very-thumbnail/2020/07/Power-tool-image-cartoon-on-transparent-background-PNG.png",
        "category": "Drilling Tools",
        "available": true,
        "returned": false,
        "box": 14,
        "rented": false,
        "selected": false,
        "error": {
            "status": false,
            "message": ""
        }
    },
    {
        "name": "Angle Grinder",
        "id": "ET002",
        "description": "Powerful angle grinder for cutting and grinding metal and other materials.",
        "image_url": "https://image.similarpng.com/very-thumbnail/2021/08/Power-drill-or-screwdriver-isolated-on-transparent-background-PNG.png",
        "category": "Cutting Tools",
        "available": true,
        "returned": false,
        "box": 7,
        "rented": false,
        "selected": false,
        "error": {
            "status": false,
            "message": ""
        }
    },
    {
        "name": "Electric Chainsaw",
        "id": "ET003",
        "description": "An electric chainsaw for cutting trees and branches with ease.",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJMNNxkqHQlCYUcvea6u8Pf-B3ZusCPlE48Q&usqp=CAU",
        "category": "Cutting Tools",
        "available": true,
        "returned": false,
        "box": 19,
        "rented": false,
        "selected": false,
        "error": {
            "status": false,
            "message": ""
        }
    },
    {
        "name": "Random Orbit Sander",
        "id": "ET004",
        "description": "A versatile sander for smoothing surfaces with random orbital motion.",
        "image_url": "https://marvel-b1-cdn.bc0a.com/f00000000045989/hytorc-prod-hytorc-webassets.s3.us-east-1.amazonaws.com/Electric/lion-feature.png",
        "category": "Sanding Tools",
        "available": true,
        "returned": false,
        "box": 3,
        "rented": false,
        "selected": false,
        "error": {
            "status": false,
            "message": ""
        }
    },
    {
        "name": "Jigsaw",
        "id": "ET005",
        "description": "A jigsaw for making intricate curved cuts in various materials.",
        "image_url": "https://i5.walmartimages.com/asr/37240837-a358-45f7-b239-cda4e951a418_1.14027a159330d1e7343380b94f3d8876.jpeg",
        "category": "Cutting Tools",
        "available": true,
        "returned": false,
        "box": 10,
        "rented": false,
        "selected": false,
        "error": {
            "status": false,
            "message": ""
        }
    },
    {
        "name": "Electric Screwdriver",
        "id": "ET006",
        "description": "Handy electric screwdriver for quick and efficient screwdriving tasks.",
        "image_url": "https://w7.pngwing.com/pngs/308/798/png-transparent-planers-hand-planes-makita-tool-blade-electric-tools-angle-wood-home-depot.png",
        "category": "Screwdriving Tools",
        "available": true,
        "returned": false,
        "box": 2,
        "rented": false,
        "selected": false,
        "error": {
            "status": false,
            "message": ""
        }
    },
    {
        "name": "Reciprocating Saw",
        "id": "ET007",
        "description": "Powerful reciprocating saw for cutting through tough materials.",
        "image_url": "https://www.gtech.co.uk/media/catalog/product/cache/02c42cc9077ebaec004be0f62aac540e/m/u/multi-tool-bare_2x.jpg",
        "category": "Cutting Tools",
        "available": true,
        "returned": false,
        "box": 17,
        "rented": false,
        "selected": false,
        "error": {
            "status": false,
            "message": ""
        }
    },
    {
        "name": "Electric Planer",
        "id": "ET008",
        "description": "Planer for smoothing and leveling wood surfaces.",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP5Btb6c7Vlrln2GcmV0vu56iGCPIHRglp_w&usqp=CAU",
        "category": "Specialty Tools",
        "available": true,
        "returned": false,
        "box": 6,
        "rented": false,
        "selected": false,
        "error": {
            "status": false,
            "message": ""
        }
    },
    {
        "name": "Bench Grinder",
        "id": "ET009",
        "description": "A stationary grinder for sharpening and shaping tools.",
        "image_url": "https://unitech-ikk.com/products/specialized-building-solutions/hardware-and-tools/images/electrical-power-tools/electrical-power-tools.png",
        "category": "Specialty Tools",
        "available": true,
        "returned": false,
        "box": 12,
        "rented": false,
        "selected": false,
        "error": {
            "status": false,
            "message": ""
        }
    },
    {
        "name": "Heat Gun",
        "id": "ET010",
        "description": "Heat gun for tasks like paint stripping, thawing pipes, and more.",
        "image_url": "https://www.harborfreight.com/media/catalog/category/Electricians-Tools400x400.jpg",
        "category": "Specialty Tools",
        "available": true,
        "returned": false,
        "box": 8,
        "rented": false,
        "selected": false,
        "error": {
            "status": false,
            "message": ""
        }
    },
    {
        "name": "Rotary Tool",
        "id": "ET011",
        "description": "Versatile rotary tool for cutting, grinding, polishing, and more.",
        "image_url": "https://image.made-in-china.com/2f0j00hRWkgcvsCoqz/21V-Power-Tools-Hand-Drill-Machine-Electric-Cordless-Drill-Price-Screwdriver-Battery-Impact-Drill-Set.webp",
        "category": "Cutting Tools",
        "available": true,
        "returned": false,
        "box": 16,
        "rented": false,
        "selected": false,
        "error": {
            "status": false,
            "message": ""
        }
    },
    {
        "name": "Electric Lawn Mower",
        "id": "ET012",
        "description": "An electric lawn mower for maintaining your lawn effortlessly.",
        "image_url": "https://www.harborfreight.com/media/catalog/product/cache/9fc4a8332f9638515cd199dd0f9238da/5/9/59248_W3.jpg",
        "category": "Specialty Tools",
        "available": false,
        "returned": false,
        "box": 11,
        "rented": false,
        "selected": false,
        "error": {
            "status": false,
            "message": ""
        }
    }
];

export const INITIAL_USER = {
    id: '',
    firstName: '',
    lastName: '',
    toolsList: [
    ]
}
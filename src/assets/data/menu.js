export const menu = 
    [{
    header: {
        name: 'pizza',
        text: 'Pizza'
    },
    sizeDescr: ['Small', 'Medium', 'Large'],
    items: [
        {
            name: 'peperroni',
            text: 'Peperroni',
            image: 'pizza_peperroni.png',
            price: {
                Small: 11,
                Medium: 14,
                Large: 16
            }
        }, {
            name: 'hawaiian',
            text: 'Hawaiian',
            image: 'pizza_hawaiian.png',
            price: {
                Small: 11,
                Medium: 14,
                Large: 16
            }
        }, {
            name: 'meatLowers',
            text: "Meat Lover's",
            image: 'pizza_meatLowers.png',
            price: {
                Small: 11,
                Medium: 14,
                Large: 16
            }
        }, {
            name: 'canadian',
            text: 'Canadian',
            image: 'pizza_meatLowers.png',
            price: {
                Small: 11,
                Medium: 14,
                Large: 16
            }
        }, {
            name: 'cheezseLowers',
            text: "Cheese Lover's",
            image: 'pizza_cheeseLowers.png',
            price: {
                Small: 11,
                Medium: 14,
                Large: 16
            }
        }

    ]
}, {
    header: {
        name: 'chickenWings',
        text: 'Chicken Wings'
    },
    sizeDescr: ['10pcs', '15pcs', '20pcs', '40pcs'],
    items: [{
        name: 'bbq',
        text: 'BBQ',
        image: 'wings.png',
        price: {
            '10pcs': 8,
            '15pcs': 11,
            '20pcs': 15,
            '40pcs': 28
        }
    }, {
        name: 'honeyGarlic',
        text: 'Honey Garlic',
        image: 'wings.png',
        price: {
            '10pcs': 8,
            '15pcs': 11,
            '20pcs': 15,
            '40pcs': 28
        }
    }]
}, {
    header: {
        name: 'drinks',
        text: 'Drinks'
    },
    sizeDescr: ['can', '2L Pop'],
    items: [{
        name: 'pepsi',
        text: 'Pepsi',
        image: 'pepsi.png',
        price: {
            'can': 1,
            '2L Pop': 3
        }
    }, {
        name: '7up',
        text: '7 Up',
        image: '7up.png',
        price: {
            'can': 1,
            '2L Pop': 3
        }
    }]
}];

export default menu;
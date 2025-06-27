const mockData = [
    {
        id: 0,
        title: "Product 1",
        description: "These are traditional handcrafted potli-style and ethnic fabric handbags, adorned with zari and mirror work, ideal for festive and wedding occasions.",
        price: 1000,
        category: "Traditional",
        image: "image0.jpg"
    },
    {
        id: 1,
        title: "Product 2",
        description: "This is a traditional Meenakari bangle with intricate enamel and stone work, reflecting rich Indian craftsmanship.",
        price: 1050,
        category: "Traditional",
        image: "image1.jpg"
    },
    {
        id: 2,
        title: "Product 3",
        description: "This is a golden embroidered Anarkali suit with churidar and dupatta – perfect for festive or traditional occasions.",
        price: 1100,
        category: "Traditional",
        image: "image2.jpg"
    },
    {
        id: 3,
        title: "Product 4",
        description: "This dress is a women's embroidered straight-cut kurti with traditional ethnic design, commonly worn for festive or cultural occasions.",
        price: 1150,
        category: "Traditional",
        image: "image3.jpg"
    },
    {
        id: 4,
        title: "Product 5",
        description: "This is a traditional Indian royal attire for kids, featuring a sherwani with intricate embroidery, a turban (safa), and jewelry for a regal look.",
        price: 1200,
        category: "Traditional",
        image: "image4.jpg"
    },
    {
        id: 5,
        title: "Product 6",
        description: "This is a traditional Indian royal-style lehenga choli for girls, adorned with heavy embroidery and paired with a decorative turban for a regal appearance.",
        price: 1250,
        category: "Traditional",
        image: "image5.jpg"
    },
    {
        id: 6,
        title: "Product 7",
        description: "This is a traditional Indian sherwani for boys, richly embroidered and paired with a jeweled turban for a royal ceremonial look.",
        price: 1300,
        category: "Traditional",
        image: "image6.jpg"
    },
    {
        id: 7,
        title: "Product 8",
        description: "This is a royal-themed traditional Indian combo dress for kids, featuring a Mughal-style sherwani for the boy and an ornate lehenga-choli with crown for the girl.",
        price: 1350,
        category: "Traditional",
        image: "image7.jpg"
    },
    {
        id: 8,
        title: "Product 9",
        description: "Vibrant Pink Kurta Set with Intricate Embroidery for Little Girls",
        price: 1400,
        category: "Traditional",
        image: "image8.jpg"
    },
    {
        id: 9,
        title: "Product 10",
        description: "A stunning pink lehenga choli adorned with intricate embroidery and embellishments, perfect for little princesses to shine on special occasions",
        price: 1450,
        category: "Traditional",
        image: "image9.jpg"
    },
    {
        id: 10,
        title: "Product 11",
        description: "A young girl is wearing a traditional Indian Anarkali suit.",
        price: 1500,
        category: "Traditional",
        image: "image10.jpg"
    },
    {
        id: 11,
        title: "Product 12",
        description: "A young boy dressed in a traditional Indian sherwani, complete with intricate embroidery and ornate headwear.",
        price: 1550,
        category: "Traditional",
        image: "image11.jpg"
    },
    {
        id: 12,
        title: "Product 13",
        description: "A beautiful traditional salwar kameez, complete with intricate embroidery and embellishments, perfect for special occasions or formal events.",
        price: 1600,
        category: "Traditional",
        image: "image12.jpg"
    },
    {
        id: 13,
        title: "Product 14",
        description: "A vibrant pink salwar kameez with intricate gold embroidery and teal accents, perfect for formal or festive occasions",
        price: 1650,
        category: "Traditional",
        image: "image13.jpg"
    },
    {
        id: 14,
        title: "Product 15",
        description: "A traditional Indian lehenga, characterized by its vibrant red color and intricate gold embroidery, typically worn for special occasions such as weddings and festivals.",
        price: 1700,
        category: "Traditional",
        image: "image14.jpg"
    },
    {
        id: 15,
        title: "Product 16",
        description: "A stunning red lehenga with intricate gold embroidery, perfect for adding a touch of elegance and cultural heritage to your designs.",
        price: 1750,
        category: "Traditional",
        image: "image15.jpg"
    },
    {
        id: 16,
        title: "Product 17",
        description: "A stunning peach-colored lehenga with intricate embroidery, perfect for adding a touch of elegance to any cultural event or celebration.",
        price: 1800,
        category: "Traditional",
        image: "image16.jpg"
    },
    {
        id: 17,
        title: "Product 18",
        description: "A woman adorned in a stunning traditional Indian lehenga choli, perfect for capturing the essence of cultural heritage and elegance",
        price: 1850,
        category: "Traditional",
        image: "image17.jpg"
    },
    {
        id: 18,
        title: "Product 19",
        description: "A stunning traditional Indian lehenga with a vibrant yellow and pink skirt, adorned with intricate patterns and embellishments, perfect for cultural events or special occasions.",
        price: 1900,
        category: "Traditional",
        image: "image18.jpg"
    },
    {
        id: 19,
        title: "Product 20",
        description: "Traditional Indian Kurta Pyjama set for men.",
        price: 1950,
        category: "Traditional",
        image: "image19.jpg"
    },
    {
        id: 20,
        title: "Product 21",
        description: "The man is dressed in a traditional Indian Sherwani, characterized by its long coat-like design and intricate embroidery, often worn for special events and celebrations.",
        price: 2000,
        category: "Traditional",
        image: "image20.jpg"
    },
    {
        id: 21,
        title: "Product 22",
        description: "A traditional Indian Sherwani, a long coat-like garment typically worn on formal occasions such as weddings and festivals.",
        price: 2050,
        category: "Traditional",
        image: "image21.jpg"
    },
    {
        id: 22,
        title: "Product 23",
        description: "This is a traditional Indian Kurta, a long tunic with intricate designs, often worn for formal and cultural events.",
        price: 2100,
        category: "Traditional",
        image: "image22.jpg"
    },
    {
        id: 23,
        title: "Product 24",
        description: "The man is dressed in a traditional Indian Sherwani, a long coat often worn for formal events.a man dressed in a traditional Indian Sherwani, characterized by its long, formal design and intricate embroidery",
        price: 2150,
        category: "Traditional",
        image: "image23.jpg"
    },
    {
        id: 24,
        title: "Product 25",
        description: "The man is dressed in a traditional Indian Sherwani, a long coat often worn for formal events.",
        price: 2200,
        category: "Traditional",
        image: "image24.jpg"
    },
    {
        id: 25,
        title: "Product 26",
        description: "Traditional men's Juttis with rich embroidery.",
        price: 1000,
        category: "Traditional",
        image: "image25.jpg"
    },
    {
        id: 26,
        title: "Product 27",
        description: "A man wearing a traditional Indian dhoti with a kurta and a colorful vest.",
        price: 1050,
        category: "Traditional",
        image: "image26.jpg"
    },
    {
        id: 27,
        title: "Product 28",
        description: "A man is wearing a traditional Indian Sherwani, adorned with multiple necklaces.",
        price: 1100, category: "Traditional",
         image: "image27.jpg"
    },
    {
        id: 28,
        title: "Product 29",
        description: "A stylish ensemble featuring a white kurta and dhoti paired with a vibrant, long sherwani or bandhgala, perfect for formal or cultural events.",
        price: 1150,
        category: "Traditional",
        image: "image28.jpg"
    },
    {
        id: 29,
        title: "Product 30",
        description: "The image features a man wearing a traditional Indian kurta and dhoti, showcasing a classic and elegant attire.",
        price: 1200,
        category: "Traditional",
        image: "image29.jpg"
    },
    {
        id: 30,
        title: "Product 31",
        description: "A man dressed in a traditional Indian kurta and dhoti, characterized by a long blue tunic adorned with gold embroidery and cream-colored loose-fitting pants.",
        price: 1250,
        category: "Traditional",
        image: "image30.jpg"
    },
    {
        id: 31,
        title: "Product 32",
        description: "A Sherwani, which is a traditional Indian long coat worn for formal occasions, characterized by its elegant design and intricate embroidery.",
        price: 1300,
        category: "Traditional",
        image: "image31.jpg"
    },
    {
        id: 32,
        title: "Product 33",
        description: "A pair of traditional Indian juttis adorned with vibrant embroidery, perfect for adding a touch of cultural elegance to any outfit.",
        price: 1350,
        category: "Traditional",
        image: "image32.jpg"
    },
    {
        id: 33,
        title: "Product 34",
        description: "A pair of traditional Indian juttis adorned with vibrant embroidery, perfect for adding a touch of cultural elegance to any outfit.",
        price: 1400,
        category: "Traditional",
        image: "image33.jpg"
    },
    {
        id: 34,
        title: "Product 35",
        description: "These traditional Indian Mojari shoes feature elegant green fabric with gold embroidery, perfect for adding a touch of cultural heritage to any outfit.",
        price: 1450,
        category: "Traditional",
        image: "image34.jpg"
    },
    {
        id: 35,
        title: "Product 36",
        description: "Traditional Indian Mojari shoes with intricate embroidery and ornate designs.",
        price: 1500,
        category: "Traditional",
        image: "image35.jpg"
    },
    {
        id: 36,
        title: "Product 37",
        description: "Elegant Khussa shoes adorned with intricate embroidery, perfect for adding a touch of traditional Indian flair to any outfit.",
        price: 1550,
        category: "Traditional",
        image: "image36.jpg"
    },
    {
        id: 37,
        title: "Product 38",
        description: "Traditional Indian Juttis with intricate gold embroidery.",
        price: 1600,
        category: "Traditional",
        image: "image37.jpg"
    },
    {
        id: 38,
        title: "Product 39",
        description: "A stunning diamond-set choker necklace, perfect for adding a touch of elegance and tradition to any outfit.",
        price: 1650,
        category: "Traditional",
        image: "image38.jpg"
    },
    {
        id: 39,
        title: "Product 40",
        description: "Elegant white juti with gold embroidery, perfect for traditional Indian attire.",
        price: 1700,
        category: "Traditional",
        image: "image39.jpg"
    },
    {
        id: 40,
        title: "Product 41",
        description: "This stunning V-shaped diamond necklace features a central pendant surrounded by sparkling diamonds, creating a luxurious and eye-catching piece of jewelry.",
        price: 1750,
        category: "Traditional",
        image: "image40.jpg"
    },
    {
        id: 41,
        title: "Product 42", description: "A classic equestrian accessory designed for comfort and style in Western horse riding.",
        price: 1800,
        category: "Traditional",
        image: "image41.jpg"
    },
    {
        id: 42,
        title: "Product 43",
        description: "This stunning Banarasi saree features intricate designs and luxurious fabric, perfect for adding a touch of elegance to any occasion.",
        price: 1850,
        category: "Traditional",
        image: "image42.jpg"
    },
    {
        id: 43,
        title: "Product 44",
        description: "Elegant Fancy saree with intricate embroidery and luxurious fabric.",
        price: 1900,
        category: "Traditional",
        image: "image43.jpg"
    },
    {
        id: 44,
        title: "Product 45",
        description: "Elegant Banarasi saree with intricate embroidery and luxurious fabric.",
        price: 1950,
        category: "Traditional",
        image: "image44.jpg"
    },
    {
        id: 45,
        title: "Product 46",
        description: "Traditional Peshawari Chappal with intricate embroidery and luxurious leather.",
        price: 2000,
        category: "Traditional",
        image: "image45.jpg"
    },
    {
        id: 46,
        title: "Product 47",
        description: "Traditional Peshawari Chappal: A classic men's footwear option featuring dark brown leather and detailed stitching.",
        price: 2050,
        category: "Traditional",
        image: "image46.jpg"
    },
    {
        id: 47,
        title: "Product 48",
        description: "These men's Juttis feature intricate embroidery and studs, blending traditional craftsmanship with modern style.",
        price: 2100,
        category: "Traditional", 
        image: "image47.jpg"
    },
    {
        id: 48,
        title: "Product 49",
        description: "The man is dressed in a traditional Indian kurta and dhoti, perfect for formal or cultural occasions.",
        price: 2150,
        category: "Traditional",
        image: "image48.jpg"
    },
    {
        id: 49,
        title: "Product 50",
        description: "A man dressed in a traditional Indian Sherwani, a long coat often worn for formal events.",
        price: 2200,
        category: "Traditional",
        image: "image49.jpg"
    }



];

export default mockData;
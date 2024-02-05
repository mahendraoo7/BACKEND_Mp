// use program

// db.createCollection("client_master")

db.client_master.insertMany([
    {
        Clientno : "C00001",
        Name : "Ivan Bayross",
        address1 : "a/14",
        address2 : "worli", 
        city : "Mumbai",
        PINCODE : 400054,
        STATE : "Maharastra",
        BALDUE : 15000
    },
    {
        Clientno : "C00002",
        Name : "Mamta Muzumdar",
        Address1 : "65",
        Address2 : "Nariman",
        City : "Madras",
        Pincode : 780001,
        State : "Tamilnadu",
        Badlue : 0
    },
    {
        Clientno : "C00003",
        Name : "Chhaya Benkar ",
        Address1 : "P-7",
        Address2 : "Bendra",
        City : "Mumbai",
        Pincode : 400057,
        State : "Maharastra",
        Badlue : 5000
    },
    {
        Clientno : "C00004",
        Name : "Ashvini Joshi",
        Address1 : "A/5",
        Address2 : "Juhu",
        City : "Bengalore",
        Pincode : 560001,
        State : "Karnataka",
        Badlue : 0
    },
    {
        Clientno : "C00005",
        Name : "Hasel Colaco",
        Address1 : "65",
        Address2 : "nariman",
        City : "Mumbai",
        Pincode : 400060,
        State : "Maharastra",
        Badlue : 2000
    },
    {
        Clientno : "C00006",
        Name : "Deepak Sharma",
        Address1 : "65",
        Address2 : "nariman",
        City : "Mangalore",
        Pincode : 560050,
        State : "Karnataka",
        Badlue : 0  
    },

    
]);
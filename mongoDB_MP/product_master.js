// db.createCollection("product_master")

db.product_master.insertMany([
    {
         PRODUCTNO  : "P00001",
         DESCRIPTION  : "T-shirts",
         PROFITPERCENT : 5,
         UNITMESURE  : "Peice",
         QTYONHAND   : 200,
         REORDERLVL  : 50,
         SELLPRICE   : 350,
         COSTPRICE   : 250
    },
    {
        PRODUCTNO  : "P0345",
        DESCRIPTION  : "shirts",
        PROFITPERCENT : 5,
        UNITMESURE  : "Peice",
        QTYONHAND   : 150,
        REORDERLVL  : 50,
        SELLPRICE   : 500,
        COSTPRICE   : 350
   },
   {
    PRODUCTNO  : "P06734",
    DESCRIPTION  : "Cotton Jeans",
    PROFITPERCENT : 5,
    UNITMESURE  : "Peice",
    QTYONHAND   : 100,
    REORDERLVL  : 20,
    SELLPRICE   : 600,
    COSTPRICE   : 450
},
{
    PRODUCTNO  : "P07865",
    DESCRIPTION  : "Jeans",
    PROFITPERCENT : 5,
    UNITMESURE  : "Peice",
    QTYONHAND   : 100,
    REORDERLVL  : 20,
    SELLPRICE   : 750,
    COSTPRICE   : 500
},
{
    PRODUCTNO : "P07868",
    DESCRIPTION : "Trousers",
    PROFITPERCENT : 2,
    UNITMESURE : "Peice",
    QTYONHAND : 150,
    REORDERLVL : 50,
    SELLPRICE : 850,
    COSTPRICE : 550

},
{
    PRODUCTNO  : "P07885",
    DESCRIPTION  : "Pull Over",
    PROFITPERCENT : 2.5,
    UNITMESURE  : "Peice",
    QTYONHAND   : 80,
    REORDERLVL  : 30,
    SELLPRICE   : 700,
    COSTPRICE   : 450
},
{
    PRODUCTNO  : "P07965",
    DESCRIPTION  : "Denim Shirts",
    PROFITPERCENT : 4,
    UNITMESURE  : "Peice",
    QTYONHAND   : 100,
    REORDERLVL  : 40,
    SELLPRICE   : 350,
    COSTPRICE   : 250
},
{
    PRODUCTNO  : "P07965",
    DESCRIPTION  : "Lycra Tops",
    PROFITPERCENT : 5,
    UNITMESURE  : "Peice",
    QTYONHAND   : 70,
    REORDERLVL  : 30,
    SELLPRICE   : 300,
    COSTPRICE   : 175
},
{
    PRODUCTNO  : "P07965",
    DESCRIPTION  : " Skirts",
    PROFITPERCENT : 5,
    UNITMESURE  : "Peice",
    QTYONHAND   : 75,
    REORDERLVL  : 30,
    SELLPRICE   : 450,
    COSTPRICE   : 300
},


]);
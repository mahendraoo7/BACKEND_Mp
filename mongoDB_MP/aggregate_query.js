// BY TWO METHOD

// FIND METHOD AND AGGREGATION METHOD...

// 1... Match
      // db.book.find({"author" : "Dante Alighieri" });

     // db.book.aggregate([
     //  {$match : {"author" : "Dante Alighieri"}}
     // ]);
    
// 2..project

    // db.book.find({},{"author" : 1 , "_id" : 0 ,"pages" : 1,"language" :1 });

    // db.book.aggregate([
    //    {$project : { "author" : 1,"country" : 1, "pages" : 1}}
    //    ]);

//3..limit    
    
    // db.book.find().limit(24);

    // db.book.aggregate([
    //     {$limit : 10}
    //     ]);    
        

//4..skip
   
    // db.book.find().skip(5);
    
    // db.book.aggregate([
    //     {$skip : 5}
    //     ]);
        
        
//5...count 

    // db.book.find().count();
    
    // db.book.aggregate([
    //     {$count : "Total " }
    //   ]);
      

// 6..Sort

    // db.book.find().sort({"pages" : 1});
    
    // db.book.aggregate([
    //     {$sort : {"country" : 1}}
    //     ]);
      
    
    
    
    


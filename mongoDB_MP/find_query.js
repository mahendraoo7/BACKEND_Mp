// use program

// db.book.find();
// db.book.find({"pages" : {$eq : 384}});
// db.book.find({"pages" : {$ne : 384}});
// db.book.find({"pages" : {$lt : 500}});
// db.book.find({"pages" : {$lte : 384}});
// db.book.find({"pages" : {$gt : 1360}})
// db.book.find({"pages" : {$gte : 1360}});
// db.book.find({"year"  : {$in : [1006,1920,1608]}});
// db.book.find({"pages" : {$nin : [384,520]}});
// db.product.find();
// db.book.find({$and : [{"pages" : {$eq : 384}},{"year" : 1350}]});
// db.book.find({$or : [{"pages" : {$eq : 384}},{"year " :{$in : [1315,1836,1958]}}]});
// db.book.find({$nor :[{"pages" : {$eq : 384}},{"year" :{$in : [1315,1836,1958]}}]});
db.book.find({"pages" : {$not : {$gte : 384}}});

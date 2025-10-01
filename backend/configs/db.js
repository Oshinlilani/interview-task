db.orders.aggregate([
  {
    $match: {
      createdAt: { $gte: new Date(new Date() - 30*24*60*60*1000) } 
    }
  },
  { $unwind: '$items' },
  {
    $group: {
      _id: '$userId',
      totalItems: { $sum: '$items.qty' }
    }
  },
  { $sort: { totalItems: -1 } }
]);
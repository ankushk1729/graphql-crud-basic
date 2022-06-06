exports.Category = {
    products: ({ id : categoryId }, { filter }, { db }) => {
        products = db.products.filter(product => product.categoryId === categoryId)
        let filteredProducts = products;
      if (filter) {
        const { onSale, avgRating } = filter;
        if (onSale) {
          filteredProducts = filteredProducts.filter((product) => {
            return product.onSale;
          });
        }
        if ([1, 2, 3, 4, 5].includes(avgRating)) {
          filteredProducts = filteredProducts.filter((product) => {
            let sumRating = 0;
            let numberOfReviews = 0;
            db.reviews.forEach((review) => {
              if (review.productId === product.id) {
                sumRating += review.rating;
                numberOfReviews++;
              }
            });
            const avgProductRating = sumRating / numberOfReviews;
  
            return avgProductRating >= avgRating;
          });
        }
      }
  
      return filteredProducts;
    }

}
exports.Product = {
    category : ({ categoryId }, args, { db }) => {
        return db.categories.find(category => category.id === categoryId)
    },
    reviews : ({ id : productId }, args, { db }) => {
        return db.reviews.filter(review => review.productId === productId)
    }
}
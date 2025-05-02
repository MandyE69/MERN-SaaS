
const {fetchBooks, addBooks, deleteBooks, editBooks, singleFetchBook} = require("../controllers/bookControllers")

const router = require("express").Router()


router.route("/books").get(fetchBooks).post(addBooks)
router.route("/books/:id").patch(editBooks).delete(deleteBooks).get(singleFetchBook)

//esasri garne milyoo
// router.get("/books", fetchBooks)
// router.post("/books", addBooks)
// router.delete("/books/:id", deleteBooks)
// tara best way bhaneko chai mathi ko bhayo 


module.exports = router
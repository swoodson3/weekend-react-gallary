const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// GET Route
router.get('/', (req, res) => {
    // When you fetch all things in these GET routes, strongly encourage ORDER BY
    // so that things always come back in a consistent order 
    const sqlText = `SELECT * FROM "gallery" ORDER BY title`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Got stuff back from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})


router.post('/', (req, res) => {
    const newGalleryItem = req.body;
    const sqlText = `INSERT INTO "gallery" ("title", "description", "image_url")
                     VALUES ($1, $2, $3);`;
    pool.query(sqlText, [
        newGalleryItem.title,
        newGalleryItem.description,
        newGalleryItem.path
    ]).then(() => {
        res.sendStatus(201); // Created
    }).catch((error) => {
            console.log('Error adding gallery item', error);
            res.sendStatus(500); // Internal Server Error
        });
});

// PUT Route
router.put('/like/:id', (req, res) => {
    res.sendStatus(200);
}); // END PUT Route

router.delete('/:id', (req, res) => {
    console.log(req.params.id);
    const deleteIndex = (req.params.id);
    let sqlText = `DELETE FROM "gallery" WHERE "id" = $1`;
    pool.query(sqlText, [deleteIndex])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log(`Error in DELETE ${error}`);
            res.sendStatus(500);
        })
})


module.exports = router;
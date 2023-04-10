CREATE TABLE "gallery" (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  likes INTEGER DEFAULT 0
);


INSERT INTO "gallery" ("title", "image_url", "description", "likes")
VALUES ('A small goat',
        'images/goat_small.jpg',
        'Photo of a goat taken at Glacier National Park.',
        0),
       ('Birthday girl',
        'images/Birthday-Girl.png',
        'Photo of Luna during 1st birthday.',
        0),
       ('Halloween',
        'images/Halloween.png',
        'Photo of Luna at Halloween.',
        0),
       ('Bath time',
        'images/Bath.png',
        'Photo of Luna after her bath.',
        0),
       ('Christmas',
        'images/Christmas.png',
        'Photo of Luna at Christmas.',
        0),
       ('Playtime',
        'images/Playtime.png',
        'Photo of Luna after Playtime.',
        0);

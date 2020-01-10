CREATE TABLE IF NOT EXISTS ${summary.table} (
    id           NUMERIC PRIMARY KEY DEFAULT (hex(randomblob(16))),
    run_id       TEXT,
    site_id      TEXT,
    action_type  TEXT,
    elapsed_time TEXT,
    affected     NUMERIC
);

CREATE TABLE IF NOT EXISTS ${result.table} (
    id           NUMERIC PRIMARY KEY DEFAULT (hex(randomblob(16))),
    run_id       TEXT,
    site_id      TEXT,
    title        TEXT,
    url          TEXT,
    price        TEXT,
    location     TEXT,
    post_date    TEXT,
    image_url    TEXT,
    rating       NUMERIC,
    review_count NUMERIC,
    seller       TEXT
);

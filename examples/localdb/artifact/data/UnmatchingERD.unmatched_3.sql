-- clean up previously generated table
DROP TABLE ${table};

-- differently named than the corresponding CSV file
-- some columns are nullable
CREATE TABLE IF NOT EXISTS ${table} (
    REGION            TEXT                NOT NULL,
    COUNTRY           TEXT                NOT NULL,
    PRODUCT_TYPE      TEXT,
    MARKET_CHANNEL    TEXT,
    SHIPPING_PRIORITY TEXT,
    ORDER_DATE        TEXT                NOT NULL,
    ORDER_ID          INTEGER PRIMARY KEY NOT NULL,
    SHIP_DATE         TEXT                NOT NULL,
    UNITS_SOLD        INTEGER,
    UNIT_PRICE        REAL                NOT NULL,
    UNIT_COST         REAL                NOT NULL,
    TOTAL_REVENUE     REAL                NOT NULL,
    TOTAL_COST        REAL                NOT NULL,
    TOTAL_PROFIT      REAL                NOT NULL
);

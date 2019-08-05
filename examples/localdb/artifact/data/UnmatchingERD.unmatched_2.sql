-- clean up previously generated table
DROP TABLE ${table};

-- create it anew, with 2 extra (nullable) columns at the end
-- different order than the corresponding CSV file (but same column names)
-- some columns defined with default value
CREATE TABLE IF NOT EXISTS ${table} (
    ORDER_ID       INTEGER PRIMARY KEY     NOT NULL,

    REGION         TEXT                    NOT NULL,
    COUNTRY        TEXT                    NOT NULL,
    SALES_CHANNEL  TEXT    DEFAULT Unknown NOT NULL,
    ITEM_TYPE      TEXT                    NOT NULL,

    ORDER_PRIORITY TEXT    DEFAULT N       NOT NULL,
    ORDER_DATE     TEXT                    NOT NULL,
    SHIP_DATE      TEXT                    NOT NULL,

    UNITS_SOLD     INTEGER DEFAULT 1       NOT NULL,
    UNIT_PRICE     REAL                    NOT NULL,
    UNIT_COST      REAL                    NOT NULL,

    TOTAL_REVENUE  REAL                    NOT NULL,
    TOTAL_COST     REAL                    NOT NULL,
    TOTAL_PROFIT   REAL                    NOT NULL,

    PROFILE_MARGIN REAL,
    SHIP_DAYS      INTEGER
);

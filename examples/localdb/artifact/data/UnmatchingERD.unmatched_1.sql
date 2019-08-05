-- clean up previously generated table
DROP TABLE ${table};

-- create it anew, with 2 extra (nullable) columns at the end
CREATE TABLE IF NOT EXISTS ${table} (
    REGION         TEXT                NOT NULL,
    COUNTRY        TEXT                NOT NULL,
    ITEM_TYPE      TEXT                NOT NULL,
    SALES_CHANNEL  TEXT                NOT NULL,
    ORDER_PRIORITY TEXT                NOT NULL,
    ORDER_DATE     TEXT                NOT NULL,
    ORDER_ID       INTEGER PRIMARY KEY NOT NULL,
    SHIP_DATE      TEXT                NOT NULL,
    UNITS_SOLD     INTEGER             NOT NULL,
    UNIT_PRICE     REAL                NOT NULL,
    UNIT_COST      REAL                NOT NULL,
    TOTAL_REVENUE  REAL                NOT NULL,
    TOTAL_COST     REAL                NOT NULL,
    TOTAL_PROFIT   REAL                NOT NULL,
    PROFILE_MARGIN REAL,
    SHIP_DAYS      INTEGER
);

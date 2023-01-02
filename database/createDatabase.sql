create table users(
    username varchar(100) PRIMARY KEY,
    password varchar(100)
);

create table articles(
    articleID int PRIMARY KEY,
    name varchar(100),
    price double
)

insert into articles values(
    1, "Table", 18.99
)

insert into articles values(
    2, "Chair", 11.99
)
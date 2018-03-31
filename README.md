# React Node MySQL Framework

## Setting up Dev Environment

```git clone https://github.com/MorganTrudeau/react_node_mysql.git```<br />
```cd react_node_mysql && npm install```<br />
```cd client/ && npm install & cd ..```<br />
```npm start```<br />

## MySQL Database structure
```
+------------+-------------+------+-----+---------+----------------+
| Field      | Type        | Null | Key | Default | Extra          |
+------------+-------------+------+-----+---------+----------------+
| id         | int(11)     | NO   | PRI | NULL    | auto_increment |
| first_name | varchar(20) | YES  |     | NULL    |                |
| last_name  | varchar(20) | NO   |     | NULL    |                |
| school     | varchar(10) | NO   |     | NULL    |                |
| date       | date        | NO   |     | NULL    |                |
+------------+-------------+------+-----+---------+----------------+
```

# React Node MySQL Framework

## Setting up Dev Environment

```git clone https://github.com/MorganTrudeau/react_node_mysql.git```<br />
```cd react_node_mysql && npm install```<br />
```cd client/ && npm install && cd ..```<br />
```npm start```<br />

## MySQL Database structure

### Campaign
```
+-------------+-------------+------+-----+---------+----------------+
| Field       | Type        | Null | Key | Default | Extra          |
+-------------+-------------+------+-----+---------+----------------+
| name        | varchar(15) | NO   |     | NULL    |                |
| campaign_id | int(11)     | NO   | PRI | NULL    | auto_increment |
+-------------+-------------+------+-----+---------+----------------+
```
### Position
```
+-------------+------------------+------+-----+---------+----------------+
| Field       | Type             | Null | Key | Default | Extra          |
+-------------+------------------+------+-----+---------+----------------+
| name        | varchar(15)      | NO   |     | NULL    |                |
| start_date  | date             | NO   |     | NULL    |                |
| end_date    | date             | NO   |     | NULL    |                |
| openings    | int(10) unsigned | NO   |     | NULL    |                |
| status      | tinyint(1)       | NO   |     | NULL    |                |
| position_id | int(11)          | NO   | PRI | NULL    | auto_increment |
| campaign_id | int(11)          | YES  | MUL | NULL    |                |
+-------------+------------------+------+-----+---------+----------------+
```
### Application
```
+--------------+---------+------+-----+---------+-------+
| Field        | Type    | Null | Key | Default | Extra |
+--------------+---------+------+-----+---------+-------+
| applicant_id | int(11) | NO   |     | NULL    |       |
| position_id  | int(11) | NO   |     | NULL    |       |
| campaign_id  | int(11) | NO   |     | NULL    |       |
+--------------+---------+------+-----+---------+-------+
```
### Applicant
```
+--------------+-------------+------+-----+---------+----------------+
| Field        | Type        | Null | Key | Default | Extra          |
+--------------+-------------+------+-----+---------+----------------+
| applicant_id | int(11)     | NO   | PRI | NULL    | auto_increment |
| first_name   | varchar(20) | NO   |     | NULL    |                |
| last_name    | varchar(20) | NO   |     | NULL    |                |
| school       | varchar(10) | YES  |     | NULL    |                |
| date_applied | date        | NO   |     | NULL    |                |
+--------------+-------------+------+-----+---------+----------------+
```

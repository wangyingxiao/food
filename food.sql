#创建库food
#创建表menu（菜单料理）,mid(编号),pic(图片)，mname(名称)，mtype(类别) 1 中式菜品 2西式甜点 3 日式料理
CREATE DATABASE food CHARSET=UTF8;
USE food;
CREATE TABLE menu(
    mid INT PRIMARY KEY AUTO_INCREMENT,
    pic VARCHAR(50)  NOT NULL DEFAULT '',
    mname VARCHAR(50) NOT NULL DEFAULT '',
    mtype INT  NOT NULL DEFAULT 0

);
#中式菜品
INSERT INTO menu values(null,'thumb1.jpg','鸡蛋汁煎鲱鱼',1);
INSERT INTO menu values(null,'thumb2.jpg','鸡蛋托鲱鱼 herring on eggs',1);
INSERT INTO menu values(null,'thumb3.jpg','奶油汁煎牛肝 Fried Cream Sauce',1);
INSERT INTO menu values(null,'thumb4.jpg','什锦蔬菜 Assorted Vegetables',1);
#西式甜品
INSERT INTO menu values(null,'thumb5.jpg','烤鸭冻粉 Roast Duck Jelly',2);
INSERT INTO menu values(null,'thumb6.jpg','西红柿黄瓜沙拉 Cucumber Salad',2);
#日式料理
INSERT INTO menu values(null,'thumb7.jpg','奶酪酿馅鸡蛋 Stuffed Eggs',3);

#创建表 代理品牌brand bname(名称),bpic(图片),bintro(介绍)
CREATE TABLE brand(
    bid INT PRIMARY KEY AUTO_INCREMENT,
    bname VARCHAR(50)  NOT NULL DEFAULT '',
    bpic  VARCHAR(50)  NOT NULL DEFAULT '',
    bintro VARCHAR(300)  NOT NULL DEFAULT ''
);
INSERT INTO brand VALUES(NULL,'法式甜点','list1.png',
'法式甜点应该避免为了“重要”而空泛。建筑设计的过程一定要有身体的介入，不存在捷径。...');
INSERT INTO brand VALUES(NULL,'日式料理','list2.png',
'料理应该避免为了“重要”而空泛。设计的过程一定要有身体的介入，不存在捷径。...');
INSERT INTO brand VALUES(NULL,'过桥米线','list3.png',
'一千个人心中有一千个哈姆雷特。每一位读者的人生经历、价值取向不同，对过桥米线的理解自然不尽相同。...');
INSERT INTO brand VALUES(NULL,'饮料饮品','list4.png',
'最重要的就是别做得太无聊。我希望能做更加中国的当代设计，做未来中国人的饮料饮品。...');
INSERT INTO brand VALUES(NULL,'潮汕火锅','list4.png',
'最重要的就是别做得太无聊。我希望能做更加中国的当代设计，做未来中国人的饮料饮品。...');

#创建表 teamwork tid() tname(题目) content(内容) time(时间)

CREATE TABLE teamwork(
    tid INT PRIMARY KEY AUTO_INCREMENT,
    tpic VARCHAR(50)  NOT NULL DEFAULT '',
    title  VARCHAR(50)  NOT NULL DEFAULT '',
    content  VARCHAR(500)  NOT NULL DEFAULT '',
    time  DATETIME
);
INSERT INTO teamwork VALUES(NULL,'thumb1.jpg','致爱丽丝奶茶带你走创业捷径 实现互惠共赢',
'开家奶茶店是很多创业者首选的项目，相对于别的行业来说，餐饮行业更加有市场，也更具有优势。那么，想要开...','2017-07-21');
INSERT INTO teamwork VALUES(NULL,'thumb2.jpg','吃健康美食来可素乐享营养素食滋味!',
'现在的人们对饮食健康的要求越来越高，能够将食品的安全健康相结合的美食更能够得到人们的一致肯定。可素素...','2017-07-22');
INSERT INTO teamwork VALUES(NULL,
'thumb3.jpg',' 鱼的门烤鱼 原汁原味 纵享舌尖上的诱!',
'进入夏季以来，各地区天气普遍升温，人们吃烧烤的热情也空前高涨起来。而在餐饮行业中，除了传统的烧烤店...',
'2017-07-23');
INSERT INTO teamwork VALUES(NULL,
'thumb4.jpg',' 食补天下 蒸美味难得的“超级低脂菜”',
'现在人们讲究食疗，既健康又安全，像三高人群“高血糖、高血脂、高血压”很大程度都是因为不健康的饮食习惯...',
'2017-07-24');

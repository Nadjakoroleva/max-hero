let hero;
let cash;
let background;
let Balance;
let enemy_spotted;
let x = 400;
let dx = 50;
let y = 400;
let dy = 50;
let health = 0;
let dhealth = 0;
let cashX = 0;
let cashY = 0;
let touches = 0;
let enemyX = 750;
let enemyY = 750;

function setup() {
  createCanvas(800, 800);
  cashX = random(100, 700);
  cashY = random(100, 700);

  noStroke();
}

function preload() {
  // preload() runs once
  hero = loadImage("hero.png");
  cash = loadImage("cash.png");
  Balance = loadImage("Balance.png");
  enemy_spotted = loadImage("enemy_spotted.png");
  background = loadImage("background.png");
}

function draw() {
  background.resize(0, 800);
  image(background, 0, 0);
  cash.resize(0, 75);
  image(cash, cashX, cashY);
  hero.resize(100, 100);
  image(hero, x, y);
  enemy_spotted.resize(50, 50);
  image(enemy_spotted, enemyX, enemyY);
  // событие поедания
  if (cashY < y + 79 && cashY > y - 67 && cashX < x + 92 && cashX > x - 92) {
    cashX = random(100, 700);
    cashY = random(100, 700);
    touches = touches + 1;
    dhealth = dhealth + 15;
  }
  // оставшиеся жизни
  fill("#FF0000");
  health = 50 - (5 * millis()) / 1000 + dhealth;
  Balance.resize(health, 50);
  image(Balance, width - 130, 30);
  fill("#FFFFFF");
  textSize(30);
  text(touches, 30, 50);
  if (health <= 0) {
    health = 0;
    textSize(30);
    fill("#FF0000");
    text("You have no money! So... NO MONEY - NO FUNNY!!!", 10, 400);
  }
  //enemy mooving
  if (x + 25 > enemyX) {
    enemyX = enemyX + 2;
  } else if (x - 25 < enemyX) {
    enemyX = enemyX - 2;
  }
  if (y + 25 > enemyY) {
    enemyY = enemyY + 2;
  } else if (y - 25 < enemyY) {
    enemyY = enemyY - 2;
  }
  if (
    enemyY < y + 100 &&
    enemyY > y - 50 &&
    enemyX < x + 100 &&
    enemyX > x - 50
  ) {
    dhealth = dhealth - 49;
    textSize(50);
    fill("#FF0000");
    text("Enemy Spotted :3", 225, 400);
  }
}
function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    x = dx + x;
  } else if (keyCode == LEFT_ARROW) {
    x = x - dx;
  } else if (keyCode == DOWN_ARROW) {
    y = dy + y;
  } else if (keyCode == UP_ARROW) {
    y = y - dy;
  }
  if (x < 0) {
    x = 0;
  } else if (x + 100 > 800) {
    x = 700;
  }
  if (y < 0) {
    y = 0;
  }
  if (y + 100 > 800) {
    y = 700;
  }
}

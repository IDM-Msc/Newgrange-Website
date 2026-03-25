let mapImg;
let table;

let x = [];
let y = [];
let n = [];
let cou = [];
let desc = [];

let datasites;
let selectedPoint = -1;

function preload() {
  mapImg = loadImage("globe.png");
  table = loadTable("megalithic_data.csv", "csv", "header");
}

function setup() {
  createCanvas(600, 600);

  datasites = table.getRowCount();
  loadTableSites();
}

function draw() {
  background(0);

  // title
  fill(255);
  textFont('Plus Jakarta Sans');
  textSize(24);
  textAlign(CENTER);

  // instructions
  textSize(20);
  text("Click on the dots to learn about megalithic sites in Ireland", width / 2, 60);

  // map
  imageMode(CENTER);
  let scale = 700.0 / mapImg.width;
  let h = mapImg.height * scale;
  image(mapImg, width / 2, height / 2, 700, h);

  drawSites();

  // tooltip
  if (selectedPoint !== -1) {
    let px = x[selectedPoint];
    let py = y[selectedPoint];

    let info =
      n[selectedPoint] + "\n" +
      cou[selectedPoint] + "\n" +
      desc[selectedPoint];

    let padding = 10;
    let maxWidth = 180;

    textSize(16);
    textAlign(LEFT, TOP);

    // estimate height (simple fallback)
    let th = 80;

    let tx = px + 10;
    let ty = py - 40;

    // keep inside screen
    tx = constrain(tx, 0, width - maxWidth - 2 * padding);
    ty = constrain(ty, 0, height - th - 2 * padding);

    // box
    fill(0);
    stroke(255);
    rect(tx, ty, maxWidth + 2 * padding, th + 2 * padding, 5);

    // text (wrapped automatically)
    fill(255);
    text(info, tx + padding, ty + padding, maxWidth, th);
  }
}

function loadTableSites() {
  for (let i = 0; i < datasites; i++) {
    let lat = table.getNum(i, "Lati");
    let lon = table.getNum(i, "Long");

    n[i] = table.getString(i, "Name");
    cou[i] = table.getString(i, "County");
    desc[i] = table.getString(i, "Description");

    // map coordinates
    x[i] = map(lon, -180, 180, width / 2 - 200, width / 2 + 200);
    y[i] = map(lat, 90, -90, height / 2 - 200, height / 2 + 200);
  }
}

function drawSites() {
  fill('#2FA8FF');
  noStroke();

  for (let i = 0; i < datasites; i++) {
    ellipse(x[i], y[i], 6, 6);
  }
}

function mousePressed() {
  let radius = 8;

  for (let i = 0; i < datasites; i++) {
    let d = dist(mouseX, mouseY, x[i], y[i]);
    if (d < radius) {
      selectedPoint = i;
      return;
    }
  }

  selectedPoint = -1;
}
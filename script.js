var TxtRotate = function(element, rotationTexts, period) {
  this.rotationTexts = rotationTexts;
  this.element = element;
  this.iteration = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  let i = this.iteration % this.rotationTexts.length;
  let fullTxt = this.rotationTexts[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.element.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.iteration++;
    delta = 500;
  }

  let that = this;
  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  let carousel = document.getElementById("carousel");
  let rotate = new TxtRotate(
    carousel,
    [
      "a software developer.",
      "passionate.",
      "happy.",
      "a teacher.",
      "nerdy.",
      "fun!"
    ],
    2000
  );
  rotate.tick();
};

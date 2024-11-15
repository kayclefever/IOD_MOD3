class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }

  display() {
    let date = new Date();
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];
    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}

class PrecisionClock extends DigitalClock {
  constructor(prefix, precision = 1000) {
    super(prefix);
    this.precision = precision;
  }

  start() {
    this.display();
    this.timer = setInterval(() => this.display(), this.precision);
  }
}

class AlarmClock extends DigitalClock {
  constructor(prefix, wakeupTime = "07:00") {
    super(prefix);
    this.wakeupTime = wakeupTime;
  }

  display() {
    let date = new Date();
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];
    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;

    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);

    if (`${hours}:${mins}` === this.wakeupTime) {
      console.log(`${this.prefix} Wake up!`);
      this.stop(); // Stop after wakeup time
    }
  }
}

const myClock = new DigitalClock("my clock:");
myClock.start();

const precisionClock = new PrecisionClock("Precision Clock:", 500);
precisionClock.start();

const alarmClock = new AlarmClock("Alarm Clock:", "00:00"); // Wake up at midnight
alarmClock.start();

// Keep the program running for 5 seconds to test
setTimeout(() => {
  myClock.stop();
  precisionClock.stop();
  alarmClock.stop();
}, 5000);

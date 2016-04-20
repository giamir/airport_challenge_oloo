var Weather = {
  isStormy: function() {
    return (Math.floor(Math.random() * 3) === 0);
  }
};

module.exports = Weather;

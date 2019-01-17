import wepy from 'wepy';

export default class utils extends wepy.mixin {
  data = {
    mixin: 'This is mixin data.'
  };
  methods = {
    $_log() {
      console.log('mixin method tap');
      console.log(this.mixin);
      this.mixin = 'mixin data was changedxxx';
    }
  };
  $_roundNum = (begin, end) => {
    var num = Math.round(Math.random() * (end - begin) + begin);
    return num;
  };
}

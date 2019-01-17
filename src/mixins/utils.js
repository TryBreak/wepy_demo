import wepy from 'wepy';

export default class utils extends wepy.mixin {
  data = {
    mixin: 'This is mixin data.'
  };
  methods = {
    $log() {
      console.log('mixin method tap');
      console.log(this.mixin);
      this.mixin = 'mixin data was changedxxx';
    }
  };
  $roundNum = (begin, end) => {
    const num = Math.round(Math.random() * (end - begin) + begin);
    return num;
  };
  $pureData = data => {
    // 获取纯净的数组和对象
    return JSON.parse(JSON.stringify(data));
  };
  $setTimeout = null; // 全局的
  $roundNum = (begin, end) => {
    // 获取随机整数
    var num = Math.round(Math.random() * (end - begin) + begin);
    return num;
  };
  $shuffle = arr => {
    // 数组洗牌
    let i = arr.length;
    while (i) {
      let j = Math.floor(Math.random() * i--);
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
  };
  $filterNull = val => {
    // 将null转化为空字符串
    if (val) {
      return val;
    } else {
      return '';
    }
  };
}

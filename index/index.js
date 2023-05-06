const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    //号码格式，根据号码格式自动生成输入框
    numberFormat:'11**10000',
    prefixLenth:0,
    suffixLenth:0,
    inputLen:null,
    placeholderLength:0,
    placeholderFirstIndex:0,
    placeholderLastIndex:0,
    iptValue:"",
    isFocus:false,
  },

  onFocus:function(e){
    var that = this;
    that.setData({isFocus:true});
  },
  setValue:function(e){
    var that = this;
    that.setData({ iptValue: e.detail.value });
  },

  onLoad: function (options) {
    var that = this;
    let inputLen = that.data.numberFormat.length;
    let lastIndex = that.data.numberFormat.lastIndexOf("*");
    let firstIndex = that.data.numberFormat.indexOf("*");
    let placeholderLength = firstIndex == -1 ? 0 : lastIndex- firstIndex +1;
    let prefixLenth = firstIndex == -1 ? inputLen : firstIndex;
    that.setData({inputLen: inputLen});
    that.setData({placeholderLength: placeholderLength});
    that.setData({prefixLenth : prefixLenth});
    that.setData({suffixLenth : firstIndex == -1 ? 0 : inputLen - placeholderLength - prefixLenth});
    that.setData({placeholderFirstIndex:  firstIndex});
    that.setData({placeholderLastIndex:  lastIndex});
},
})
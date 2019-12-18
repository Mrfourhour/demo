Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    students:[
      {name:'001', age:28},
      {name:'002',age:12},
      { name: '003', age: 5 },
      { name: '004', age: 17 }
    ],
    count:0
  },
  addClick(){
    //1.错误的做法，count值改变了，但是界面不会刷新
    // console.log("--------------------");
    // this.data.count+=1;
    // console.log(this.data.count);


    //2. this.setData()
    this.setData({
      count : this.data.count + 1
    })
  },


  subClick(){
    this.setData({
      count: this.data.count - 1
    })
  }
})

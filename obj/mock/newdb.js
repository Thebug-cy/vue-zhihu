// 用mockjs模拟生成数据
var Mock = require('mockjs');

// node app.js 要求db.js 暴露一个object
let home = (n) => {
  let data=[];

  for (let i=1; i<=n; i++){
    data.push({
      _id: i+'',
      id: i+'',
      title:'@ctitle(8,16)',
      des:'@ctitle(50,100)',
      time:'@integer(1594004307038,1598004307038)',
	  agreeNum:Mock.Random.integer(0,1000000),
	  commentNum:Mock.Random.integer(0,1000000),
      detail:{
        auth_icon:Mock.Random.image('50x50',Mock.Random.color(),Mock.Random.cword(1)),
        auth:'@cname()',
        content: [1,2,3].map(()=>(
          "<p style='margin-top: 20px;text-indent: 2em'>"+"@cparagraph(10,15)"+"</p>"
        )).join('')
      }
    })
  }

  return data;
};


let column = (n) => {
  let data=[];

  for (let i=1; i<=n; i++){
    data.push({
      _id: i+'',
      id: i+'',
      title:'@ctitle(10,20)',
	  agreeNum:Mock.Random.integer(0,1000000),
	  commentNum:Mock.Random.integer(0,10000000),
	  img:Mock.Random.image('100x80',Mock.Random.color(),Mock.Random.cword(1)),
      detail:{
        auth_icon:Mock.Random.image('50x50',Mock.Random.color(),Mock.Random.cword(1)),
        auth:'@cname()',
        content: 
          "<p style='margin-top: 20px;text-indent: 2em'>"+"@cparagraph(3,7)"+"</p>"
       
      }
    })
  }

  return data;
};

let banner = (n) => {
  let data=[];

  for (let i=1; i<=n; i++){
    data.push({
      _id: i+'',
      id: i+'',
      title:'@ctitle(4,8)',
      sub_title:'@ctitle(6,12)',
	  agreeNum:Mock.Random.integer(0,1000000),
	  commentNum:Mock.Random.integer(0,1000000),
      banner: Mock.Random.image('1680x745',Mock.Random.color(),Mock.Random.cword(4,8)),
      time:'@integer(1594004307038,1598004307038)',
      detail:{
        auth_icon:Mock.Random.image('50x50',Mock.Random.color(),Mock.Random.cword(1)),
        auth:'@cname()',
        content:'@cparagraph(5)'
      }
    })
  }

  return data;
};


let find = (n) => {
  let data=[];

  for (let i=1; i<=n; i++){
    data.push({
		_id: i+'',
		id: i+'',
      title:'@ctitle(2)',
	  "img":Mock.Random.image('50x50',Mock.Random.color(),Mock.Random.cword(1)),
      time:'@integer(1594004307038,1598004307038)',
      detail:home(100)
    })
  }

  return data;
};



module.exports = Mock.mock({
	'user': {
	  "follow":Mock.Random.integer(0,100),
	  "fans":Mock.Random.integer(0,100),
	  "nikename":'alex',
	  "icon":Mock.Random.image('20x20',Mock.Random.color(),Mock.Random.cword(1)),
	  "time":Mock.Random.integer(13)
	},
	'home': home(100),
	'column':column(100),
	'banner':banner(50),
	'find':find(50)
})
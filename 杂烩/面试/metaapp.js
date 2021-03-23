// 本试卷唯一 ID: 42654321351D8E59F6DE2E15BECF6CBC, 请勿修改本行内容
/**
 * 回答方式: 直接保存或者复制本js文件, 然后在原处作答. 注意不要改动函数结构
 * 在原本的函数体里返回正确答案
 * 本卷直接用代码判卷, 没有人工干预. 格式改动会导致试卷无效
 */
 module.exports = {
  // 选择题, 单项选择, 每题4分
  // 直接返回正确答案字符串, 如 `return 'A';`
  // 实现题, 每题10分
  
  qn0: () => {
    // 只是样例! 不用改动
    //
    // A. 别选我
    //
    // B. 选我, 选我就得分
    //
    // C. 别选我
    //
    // D. 别选我

    return 'B';
  },



  qn1: () => {
    // 以下代码片段, 选择它的打印输出 (省略换行)
    //
    //    ```js
    //    function fn2(){
    //      for(var i=0;i<4;i++){
    //        var timer=setInterval(function(i,timer){
    //          console.log(i);
    //          clearInterval(timer)
    //        },10,i,timer);
    //      }
    //    }
    //    fn2();
    //    ```
    //
    // A. 0 1 2 3 0 1 2 3 四个数重复
    //
    // B. 0 1 2 3 3 3 3 重复
    //
    // C. 0 1 2 3 随机顺序出现, 总个数一致
    //
    // D. 打印为空

    return 'B';
  },



  qn2: () => {
    // 以下代码片段, 选择它的打印输出 (省略换行)
    //    ```js
    //    var m = true;
    //    setTimeout(
    //      function() {
    //        m = false;
    //      }, 3000);
    //    );
    //    while(m) {}
    //    console.log('DONE');
    //    ```
    //
    // A. 不打印
    //
    // B. DONE (约3秒后打印, 不精确)
    //
    // C. DONE (立即打印)
    //
    // D. 代码抛错

    return 'A';
  },



  qn3: () => {
    // 以下哪个不是服务器端渲染SSR的问题:
    //
    // A. 框架支持不完善
    //
    // B. 性能开销大
    //
    // C. 缓存机制复杂
    //
    // D. 搜索引擎不执行JS

    return 'D';
  },



  qn4: () => {
    // 前端在 foobar.com, 向 api.foobar.com 发送请求, 以下哪个请求不需要OPTIONS preflight (以Chrome为准):
    //
    // A. 一个HEAD请求, 有Authorization头
    //
    // B. 一个PUT请求, 没有头
    //
    // C. 一个GET请求, 有Content-Type头, 值为application/json
    //
    // D. 一个POST请求, 有User-Agent和Connection头

    return 'C';
  },



  qn5: () => {
    // 以下表达式中能去除所有空格的是:
    //
    // A. str = str.replace(/\s*/g,"");
    //
    // B. str = str.replace(/^\s*|\s*$/g,"");
    //
    // C. str = str.replace(/(\s*$)/g, "");
    //
    // D. str = str.replace( /^\s*/, "");

    return 'A';
  },



  qn6: () => {
    // 以下代码片段, 选择它的打印输出 (省略换行)
    //    ```js
    //    const a = [];
    //    for (var i=0; i<10; i++) {
    //      a.push(function() {
    //        return console.log(i);
    //      });
    //    }
    //    a[0]();
    //    a[1]();
    //    ```
    //
    // A. 10 10
    //
    // B. undefined undefined
    //
    // C. 不打印
    //
    // D. 0 1

    return 'A';
  },



  qn7: () => {
    // 以下哪个元素, 不符合在默认情况下, 设置margin上下距离和宽高无效, 但是其他样式有效:
    //
    // A. button
    //
    // B. code
    //
    // C. input
    //
    // D. sub
    //
    // E. strong
    //
    // F. label
    //
    // G. a
    //
    // H. span
    //
    // I. p

    return 'I';
  },



  qn8: () => {
    // CSS中, flex是哪三个flex关键字的简写 (可以查文档):
    //
    // A. flex-grow, flex-shrink, flex-basis
    //
    // B. flex-direction, flex-basis, flex-flow
    //
    // C. flex-direction, flex-grow, flex-shrink
    //
    // D. flex-direction, flex-wrap, flex-flow

    return 'A';
  },



  qn9: () => {
    // 以下哪个场景*不适合*使用WebSocket:
    //
    // A. 交易页面, 用户用RESTful API下单, WebSocket告知用户订单成交
    //
    // B. 去中心化游戏应用, 两人对战用WebSocket通知对手位置, 对战结束后胜负结果上链
    //
    // C. 用户在线聊天, 发送聊天内容和接收聊天内容都用WebSocket传输
    //
    // D. 身份审核, 提交文件后1-2个工作日审核完毕, WebSocket通知用户审核完毕

    return 'D';
  },



  qn10: () => {
    // 以下代码片段, 选择它的打印输出 (省略换行)
    //
    //    ```js
    //    console.log(0.25 + 0.25 === 0.5);
    //    console.log(0.1 + 0.2 === 0.3);
    //    ```
    //
    // A. false false
    //
    // B. true true
    //
    // C. true false
    //
    // D. false true

    return 'C';
  },



  qn11: () => {
    // 以下哪个权重最大:
    //
    // A. ID选择器（如 #content ）
    //
    // B. 标签选择器（如 div、p）
    //
    // C. 内联样式
    //
    // D. 类选择器（如 .content）

    return 'C';
  },



  qn12: () => {
    // 关于let和var, 以下正确的是:
    //
    // A. let是函数级作用域, var是块级作用域, let变量定义会提升 (hoist), var不会
    //
    // B. let是函数级作用域, var是块级作用域, let和var变量定义都会提升 (hoist)
    //
    // C. let是块级作用域, var是函数级作用域, let和var变量定义都会提升 (hoist)
    //
    // D. let是块级作用域, var是函数级作用域, var变量定义会提升 (hoist), let不会

    return "D";
  },



  qn13: () => {
    // 以下哪个HTTP状态码非错误状态:
    //
    // A. 400
    //
    // B. 404
    //
    // C. 500
    //
    // D. 303

    return 'D';
  },



  qn14: () => {
    // 关于HTML自定义标签, 错误的是:
    //
    // A. HTML自定义标签可以用JS操作
    //
    // B. 已知的HTML自定义标签才能应用CSS, 以及用JS操作. 未知的HTML标签会成为HTMLUnknownElement的实例
    //
    // C. HTML自定义标签可以应用CSS
    //
    // D. <greeting></greeting> 这段HTML代码是合法的, 可以被正常展示

    return 'B';
  },



  qn15: () => {
    // 以下代码片段, 选择它的打印输出 (省略换行)
    //
    //    ```js
      //  function fn1(){
      //    for(var i=0;i<4;i++){
      //      var timer=setTimeout(function(i){
      //        console.log(i);
      //        clearTimeout(timer)
      //      },10,i);
      //    }
      //  }
      //  fn1();
    //    ```
    //
    // A. 3 2 1 0
    //
    // B. 打印为空
    //
    // C. 0 1 2 3
    //
    // D. 0 1 2

    return 'D';
  },



  qn16: () => {
    // 关于HTTPS / SSL / TLS, 以下错误的是:
    //
    // A. 后续的HTTPS通讯, 客户端和服务器端的通讯会使用非对称加密
    //
    // B. 当客户端收到服务器端发送的证书, 证书充当公钥. 为了验证证书有效性, 用客户端已经安装的CA证书检查
    //
    // C. 公司内网需要监控解密HTTPS时, 可以在客户端安装公司自己的CA证书
    //
    // D. 最常用的非对称加密算法RSA, 是基于大素数分解质因数实现的

    return 'A';
  },



  qn17: () => {
    // 关于Linux命令, 错误的是:
    //
    // A. cat out.txt | vim 这个命令用管道可以把out.txt中的文本导到vim中编辑
    //
    // B. man <some_command> 可以查看命令的手册, man代表manual
    //
    // C. grep -C 3 "关键词" 命令可以找到包含"关键词"的行, 以及展示上面3行和下面3行
    //
    // D. ls -l命令可以列出文件, 但不包含隐藏文件

    return 'A';
  },



  qn18: () => {
    // 以下方法中, 返回值类型和其他最不同的:
    //
    // A. Array.splice
    //
    // B. Array.forEach
    //
    // C. Array.map
    //
    // D. Array.reduce

    return 'B';
  },



  qn19: () => {
    // 关于git, 以下命令中只涉及本地仓库的为:
    //
    // A. git push
    //
    // B. git fetch --all
    //
    // C. git branch -l -a
    //
    // D. git reset --hard ORIG_HEAD

    return 'D';
  },



  qn20: () => {
    // 以下关于Redux, 错误的是:
    //
    // A. Redux用于应用的状态管理
    //
    // B. 使用Redux时需要先引入React依赖
    //
    // C. Reducer中不能做异步操作
    //
    // D. Redux store可以从js文件export并在任意位置使用

    return 'C';
  },




  /**
   * 统计数组中每个字符串出现次数
   * @param string[] strs: 字符串数组, 例如 ['aa', 'ab', 'ab', 'cc', 'cba']
   * @return {[key: string]: number} 出现次数对象, 例如 { aa: 1, ab: 2, cc: 1, cba: 1 }
   */
  frequencyMap: strs => {
    //TODO your code goes here...
    let map = {};
    strs.forEach(str => {
      map[str] ? map[str]++ : map[str] = 1;
    })
    return map;
  },
  /**
   * 请处理给定字符串:
   *   - 去掉无用字符和乱码, 只保留大小写英文字母, 单引号, 和空格
   *   - 把一个或多个连续无用字符和乱码换成一个空格. 注意多个乱码只替换成一个空格
   * @param str: 字符串, 例 "I'm我我我driving是to乱乱Beijing码after breakfast88"
   * @return str: 例 "I'm driving to Beijing after breakfast "
   */
  decode: str => {
    //TODO your code goes here...
    return str.replace(/[\u4e00-\u9fa50-9]/g, ' ').replace(/\s+/g, ' ');
  },
  /**
   * 会议室, 输入是一个数组, 所有会议的开始和结束时间. 输出一共需要多少个会议室
   * @param meetings: 二维数组, 例 [[10, 20], [20, 30]],
   * @return int: 需要的会议室的个数, 例 1
   * 另一个测试用例: [[10,20], [19,30]] => 2
   */
  minRequiredMeetingsRooms: meetings => {
    if (meetings.length <= 1) {
      return meetings.length;
    }
  
    meetings.sort((a, b) => {
      return a[0] - b[0];
    });
    let result = 1;
    for (let i = 1; i < meetings.length; i++) {
      if (meetings[i-1][1] > meetings[i][0]) result++;
    }
  
    return result;
  },
  /**
   * 部门安排所有组合
   * @param departments: dict, key是部门名, value是每个部门对应所有员工ID数组
   *   例 {'frontend': [1, 2], 'backend': [3, 4], 'devops': [5]}
   * @param required_department: dict, 该任务需要参与的部门和需要的人数
   *   例 {'frontend': 2, 'backend': 1}
   * @return 所有可能的员工组合, 例 [[1, 2, 3], [1, 2, 4]]. 按员工ID升序排序
   */
  staffCombinations: (department_staff_dict, required_staff) => {
    const getGroup = (data, index = 0, group = []) => {
      let need_apply = new Array();
      need_apply.push(data[index]);
      for (let i = 0; i < group.length; i++) {
          need_apply.push(group[i] + data[index]);
      }
      group.push.apply(group, need_apply);
      if (index + 1 >= data.length) return group;
      else return getGroup(data, index + 1, group);
    }
    const arrayDiff = (array, count) => {
      return getGroup(array.map(m => m + '')).filter(s => s.length === count);
    }
    let obArr = []
    let index = 0;
    for (let required in required_staff) {
      index += required_staff[required];
      obArr = obArr.concat(arrayDiff(department_staff_dict[required], required_staff[required]))
    }
    return  arrayDiff(obArr, index).map(m => m.split('').map(r => parseInt(r)).sort((a,b)=>a-b));
  },
  /**
   * 大整数相加. 正常相加会溢出的两个整数, 以字符串方式相加
   * @param num1 加数, 字符串, 例 '123456789123456789'
   * @param num2 加数, 字符串, 例 '987654321987654321'
   * @return 和, 例             '1111111111111111110'
   */
  addStrings: (num1, num2) => {
    const maxLength = Math.max(num1.length, num2.length);

    num1 = String(num1).padStart(maxLength, 0);
    num2 = String(num2).padStart(maxLength, 0);

    let lastNum = 0;
    let flag = 0;
    let sum = '';

    for (let i = maxLength - 1; i >= 0; i--) {
      lastNum = Number(num1[i]) + Number(num2[i]) + flag;
      flag = Math.floor(lastNum / 10);
      sum = lastNum % 10 + sum;
    }

    return flag ? flag + sum : sum;
  },
}
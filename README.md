# Peko-button

注意：该项目刚刚启动，还未完善，请大佬轻喷，我日语本当🔨，有错误请指出，素材投稿请参考 如何参与开发，Bug与建议请直接发issue  
  

技术交流QQ群：1082177867（为了防止小鬼，群问题为本项目第一次commit的时间，格式为yyyy.mm.dd,有0不需要补0） ~~（什么都不会进来吹吹水也行）~~  
## 项目说明
    
项目地址：<https://peko.top/>（东京服务器，访问可能比较慢）  
音源来自VTB兔田佩克拉  
该项目为爱好者自行创建，与Hololive官方无关，所有二次创作均需遵守[Hololive二创规范](https://www.hololive.tv/terms)  
相关链接：
* 兔田佩克拉Twitter：<https://twitter.com/usadapekora> 
* Youtube：<https://www.youtube.com/channel/UC1DCedRgGHBdm81E1llLhOQ>  
* Bilibili：<https://space.bilibili.com/443305053>

本网页UI基于Vuetify框架：<https://vuetifyjs.com/>  

同样欢迎同好拿去创建新的站点（~~比如先辈按钮什么的~~），记得注明原作者即可

## 如何参与开发

若您不知道如何修改这些文件，你可以直接将素材私发我，邮箱：hanzijian990319@gmail.com (记得打标题)，留下您的ID(最好是B站ID)，贡献者名单会有您的名字

### 素材要求

* 不得投稿会员限定与贩售的内容
* 格式任意，但不要投没办法转换的专有格式
* 标注内容是什么，我🔨日语听不懂，也不想用谷歌生草机
* 也可以直接告诉我你要截取哪一段，告诉我视频av号和时间，我自己去截

### 如果懂得如何操作Vue.js项目，可以进行本地编译，步骤如下：
* Fork这个项目  
* 部署node.js，在命令行中安装Vue-cli `npm install -g @vue/cli`  
* cd到项目文件夹，运行 `npm install` 来安装项目中用到的依赖
* 运行`npm run dev` 即可在http://127.0.0.1:8080/ 中访问站点
* 用VScode或其他工具进行修改后发送一个Pull request请求即可

所有的音源在/src/assets/voices.json中有定义  
音源文件在/public/voices中（建议使用mp3格式）  
日语文件在/src/assets/lang/ja.js，同样也有英语文件(未实装)    

配色文件在/src/plugins/vuetify.js的themes中，修改primary与secondary的值就可以变成其他配色

## 贡献者名单
代码：  
* [Coceki](https://space.bilibili.com/11229533)  

素材提供：  
* [Coceki](https://space.bilibili.com/11229533)
* [昭和歌姬夏半首](https://space.bilibili.com/114298950)
* [Richard_Al](https://space.bilibili.com/34401008)
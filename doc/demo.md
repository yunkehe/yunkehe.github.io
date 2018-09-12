> 本教程仅供学习使用

## 什么是shadowsocks
Shadowsocks是[clowwindy](https://github.com/clowwindy/shadowsocks)这位大神开源的用来翻墙的一种解决方案，更详细的介绍可查看[这里](https://vc2tea.com/whats-shadowsocks/)。

它的基本原理如下：

![whats-shadowsocks.png](https://upload-images.jianshu.io/upload_images/1717745-9e88e185c26d4c74.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 准备工作
简单来说，我们只需要准备两个东西：

1. *SS local* — Shadowsocks本地客户端
2. *SS Server* — Shadowsocks远程服务端
## 客户端
搭建客户端非常简单，
1. 根据你的操作系统[下载客户端](https://github.com/zhoudaxiaa/ss-client)并安装运行
2. 配置客户端，添加一台服务器，然后填写**服务器IP、服务器端口（默认8388）、密码、加密方式、代理端口（默认1080）**，至于服务器IP是哪里来的，接下来马上介绍。

![ss-local-setting.png](https://upload-images.jianshu.io/upload_images/1717745-c84335685211ad1d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
## 服务端
从Shadowsocks原理图上，你可以看的，SS Server是位于墙外的，所以，你要先准备一台墙外的服务器，当然，没有必要买贵的，但是，也没有免费的午餐。个人推荐使用[VPS](https://baike.baidu.com/item/VPS/11053576?fr=aladdin)，这里有一些[推荐的VPS](http://www.laozuo.org/myvps)。

我购买的是Vultr家的，支持支付宝付款，$3.5一个月，配置如下，当然，还有更便宜的商家，这里就不介绍了。

![vultr-vps.png](https://upload-images.jianshu.io/upload_images/1717745-6f2c4b6d40d2bf75.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

下面的操作都基于**Ubuntu 14.04x64**，其他系统差别不大，主要分下面几个步骤：
1. 安装`python-pip`，系统一般自带了python和pip，但是版本会比较老，为了避免后面遇到问题，建议更新一下包的索引文件
~~~
更新索引文件
sudo apt-get update

安装pip
sudo apt-get install python-pip
~~~
2. 安装Shadowsocks服务端
```
使用pip安装SS Server
sudo pip install shadowsocks

安装完成后可查看shadowsocks版本
ssserver --version
```
3. 创建Shadowsocks配置文件，我在自己的家目录`/home/yunkehe`下创建了一个配置文件`shadowsocks.json`，也可以放在其他地方，文件名也可以更改，但格式必须是 *json*
```
> /home/yunkehe/shadowsocks.json
```
然后编辑shadowsocks.json，输入以下内容并保存
```
{
    "server":"my_server_ip",
    "server_port":8388,
    "local_address": "127.0.0.1",
    "local_port":1080,
    "password":"mypassword",
    "timeout":300,
    "method":"aes-256-cfb",
    "fast_open": false
}
```
*my_server_ip* 填自己购买的VPS的IP，*password* 随便写，*method* 是加密方式，默认填"aes-256-cfb"，这里配置好之后，**客户端**就使用这里填写的**服务器IP、密码、加密**。
4. 使用配置文件启动Shadowsocks服务端
```
sudo ssserver -c /home/yunkehe/shadowsocks.json -d start
```
关闭服务，使用下面的命令
```
sudo ssserver -c /home/yunkehe/shadowsocks.json -d stop
```
## 启动客户端
服务端搭建完成后，勾选**启动系统代理**就可以了， 代理模式选**PAC模式**，只在访问被墙的网站时才代理，访问国内网站就不需要代理了。
![ss-local-start.png](https://upload-images.jianshu.io/upload_images/1717745-494d1c72c78ab2e3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
如果没有问题，就可以愉快的上网了。

![free-search.png](https://upload-images.jianshu.io/upload_images/1717745-cebe696ce6ac0186.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

参考文档
[Shadowsocks 使用说明](https://github.com/shadowsocks/shadowsocks/wiki/Shadowsocks-%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E)


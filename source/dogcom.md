# 1. 下载 Dogcom 源码并编译

```shell
git clone http://github.com/mchome/dogcom.git
```

```shell
make  # Linux
make win32=y  # Windows (MinGW)
make test=y  # 运行测试版本
make force_encrypt=y  # 强制开启 PPPoE 加密模式
```

Windows 用户需先配置 MinGW，可使用 Scoop 安装：

```shell
scoop install mingw
```

Linux 用户可以直接编译，某些发行版可直接安装。

# 2. 配置文件

你可以使用 [dogcom.example.conf](../assets/config/dogcom.example.conf) 作为模板，或复制以下内容到一个新文件：

```
server = ''
username = ''
password = ''
CONTROLCHECKSTATUS = '\x20'
ADAPTERNUM = '\x03'
host_ip = ''
IPDOG = '\x01'
host_name = 'LIYUANYUAN'
PRIMARY_DNS = '223.5.5.5'
dhcp_server = '0.0.0.0'
AUTH_VERSION = '\x68\x00'
mac =
host_os = 'Windows 10'
KEEP_ALIVE_VERSION = '\xDC\x02'
ror_version = True
keepalive1_mod = True
```

**需要填写的参数：**

- `server`：校园网认证服务器地址
- `username` / `password`：校园网账号密码
- `host_ip`：校园网 IP 地址
- `mac`：网卡 MAC 地址，可用以下命令查询：

```shell
ipconfig /all
```

# 3. 运行 Dogcom

在终端中运行以下命令：

```shell
dogcom.exe -m dhcp -l path/to/dogcom/dogcom.log -c path/to/dogcom/dogcom.conf
```

或者下载 [dogcom.ps1](../assets/script/dogcom.ps1) 使用脚本运行。

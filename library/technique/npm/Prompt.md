# Version
5.5.1
8.14.0

# Check Version
node -v
npm -v

# Các thuật ngữ
- Mã Token Truy Cập Cá Nhân (PAT)
- Giao diện dòng lệnh (CLI)

# NPM làm được gì
- the website
- the Command Line Interface (CLI)
- the registry

# Sử dụng npm để:

- Thích nghi mã nguồn cho ứng dụng của bạn hoặc tích hợp các gói nguyên bản.
- Tải xuống các công cụ độc lập mà bạn có thể sử dụng ngay lập tức.
- Chạy các gói mà không cần tải về bằng cách sử dụng npx.
- Chia sẻ mã với bất kỳ người dùng npm nào, bất cứ nơi nào.
- Hạn chế mã cho các nhà phát triển cụ thể.
- Tạo tổ chức để đ coordinate việc bảo trì gói, mã hóa và nhà phát triển.
- Tạo các nhóm ảo bằng cách sử dụng tổ chức.
- Quản lý nhiều phiên bản mã và các phụ thuộc mã.
- Dễ dàng cập nhật ứng dụng khi mã cơ bản được cập nhật.
- Khám phá nhiều cách để giải quyết cùng một câu đố.
- Tìm kiếm các nhà phát triển khác đang làm việc trên các vấn đề và dự án tương tự.

# GitHub Packages
# Mã nguồn mở Verdaccio
# Node School

# CommandLine
- npm login
- npm whoami
- npm organizations
- npm token create
- npm token revoke
- npm publish
- npm unpublish
- npm deprecate
- npm access public/restricted
- npm access grant/revoke
- npm access 2fa-required/2fa-not-required
- npm profile enable-2fa auth-and-writes
- npm profile enable-2fa auth-only
- npm profile disable-2fa
- npm login --auth-type=web
- npm profile get
- npm install npm@latest -g


# Gửi một mật khẩu một lần từ dòng lệnh
npm publish [<tarball>|<folder>][--tag <tag>] --otp=123456
npm owner add <user> --otp=123456
npm owner rm <user> --otp=123456
npm dist-tags add <pkg>@<version> [<tag>] --otp=123456
npm access edit [<package>) --otp=123456
npm unpublish [<@scope>/]<pkg>[@<version>] --otp=123456


# Các keyword
- Have I Been Pwned
- 1Password


# Properties
email
two-factor auth
fullname
homepage
freenode
password
-> On the command line, type the following command, replacing property with the name of the property, and value with the new value:
npm profile set <prop> <value>
# Setting a password
npm profile set password

# Xóa tài khoản
-> Lưu ý rằng đây là hành động vĩnh viễn, và sau 30 ngày, tên tài khoản này sẽ có sẵn để người khác đăng ký.

# Export data
-> Liên kết tải xuống sẽ có sẵn trong vòng 7 ngày, sau đó dữ liệu đã xuất và liên kết sẽ bị xóa.

# Paid
-> Gói tài khoản người dùng có phí của chúng tôi có giá là $7 mỗi tháng.

# Khác
- nvm

# Logs npm
npm-debug.log


# npm timing
- npm install --timing
- npm publish --timing


# Error
Broken npm installation
Random errors
No compatible version found
Permissions errors
Error: ENOENT, stat 'C:\Users\<user>\AppData\Roaming\npm' on Windows 7
No space
No git
Running a Vagrant box on Windows fails due to path length issues
npm only uses git: and ssh+git: URLs for GitHub repos, breaking proxies
SSL error
SSL-intercepting proxy
Not found / Server error
Invalid JSON
Many ENOENT / ENOTEMPTY errors in output
cb() never called! when using shrinkwrapped dependencies
npm login errors
npm hangs on Windows at addRemoteTarball
npm not running the latest version on a Windows machine

# Fix
- npm cache clean
- npm install  ... -verbose

# No compatible version found
- You have an outdated npm. Please update to the latest stable npm.

# Permissions errors
# No space
- npm config set tmp /path/to/big/drive/tmp

# No git

# Not found/ Server error
npm server status

# npm login errors
- Log in at https://npmjs.com/
- Change password at https://npmjs.com/password – you can even "change" it to the same password
- Clear login-related fields from ~/.npmrc – e.g., by running sed -ie '/registry.npmjs.org/d' ~/.npmrc
- npm login

# Check if you have two temp directories set in your .npmrc: npm config ls -l

# About package formats
A package is any of the following:

a) A folder containing a program described by a package.json file.
b) A gzipped tarball containing (a).
c) A URL that resolves to (b).
d) A <name>@<version> that is published on the registry with (c).
e) A <name>@<tag> that points to (d).
f) A <name> that has a latest tag satisfying (e).
g) A git url that, when cloned, results in (a).

# npm package git URL formats
- git+ssh://user@hostname:project.git#commit-ish

# About modules
A module is any file or directory in the node_modules directory that can be loaded by the Node.js require() function.

To be loaded by the Node.js require() function, a module must be one of the following:

A folder with a package.json file containing a "main" field.
A JavaScript file.

-> Note: Since modules are not required to have a package.json file, not all modules are packages. Only modules that have a package.json file are also packages
-> Chỉ các module có tập tin package.json mới là các gói.

# Scope
Khi được liệt kê như là một phụ thuộc trong tập tin package.json, các gói có phạm vi sẽ được điều lệ bởi tên phạm vi của chúng. Tên phạm vi là mọi thứ giữa ký tự @ và dấu gạch chéo (/):

Phạm vi "npm":
- @npm/package-name
Phạm vi "npmcorp":
- @npmcorp/package-name
Để tạo và xuất bản các gói có phạm vi công khai, xem "Tạo và xuất bản các gói có phạm vi công khai".

# Publish
- Các gói công khai không có phạm vi tồn tại trong không gian tên toàn cầu của bảng đăng ký công khai và có thể được tham chiếu trong tập tin package.json bằng tên gói một mình: package-name.
- Các gói công khai có phạm vi thuộc về một người dùng hoặc tổ chức và phải được đặt trước bởi tên người dùng hoặc tổ chức khi được bao gồm như một phụ thuộc trong tập tin package.json:
- @username/package-name
- @org-name/package-name"

# File package.json là một phần quan trọng của dự án npm
- Các Trường Bắt Buộc: "name" và "version"
-> Trường "name" chứa tên gói của bạn, phải viết thường và chỉ một từ, có thể chứa dấu gạch ngang và gạch dưới.
-> Trường "version" phải có định dạng x.x.x và tuân thủ theo hướng dẫn về phiên bản ngữ nghĩa.

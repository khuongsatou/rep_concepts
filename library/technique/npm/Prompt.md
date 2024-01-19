# Version
5.5.1
8.14.0

# Check Version
node -v
npm -v


# Các thuật ngữ
- Mã Token Truy Cập Cá Nhân (PAT)
- Giao diện dòng lệnh (CLI)
- GitHub Actions 
- guidelines
- Các nhãn phân phối (dist-tags)

# NPM làm được gì
- the website
- the Command Line Interface (CLI)
- the registry: npm registry

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

- npm init
- npm set init-author-email "example-user@example.com"
- npm set init-author-name "example_user"
- npm set init-license "MIT"

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
- npm init
- npm init --yes

{
  "name": "my_package",
  "description": "",
  "version": "1.0.0",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/monatheoctocat/my_package.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/monatheoctocat/my_package/issues"
  },
  "homepage": "https://github.com/monatheoctocat/my_package"
}

# Giá trị mặc định được trích xuất từ thư mục hiện tại:

- name: Tên của thư mục hiện tại.
- version: Luôn là 1.0.0.
- description: Thông tin từ README, hoặc một chuỗi rỗng "".
- scripts: Mặc định tạo một script kiểm thử rỗng.
- keywords: Rỗng.
- author: Rỗng.
- license: ISC.
- bugs: Thông tin từ thư mục hiện tại, nếu có.
- homepage: Thông tin từ thư mục hiện tại, nếu có.







- Các Trường Bắt Buộc: "name" và "version"
-> Trường "name" chứa tên gói của bạn, phải viết thường và chỉ một từ, có thể chứa dấu gạch ngang và gạch dưới.
-> Trường "version" phải có định dạng x.x.x và tuân thủ theo hướng dẫn về phiên bản ngữ nghĩa.
- Trường "author"
-> (email và website đều tùy chọn):

# .npm-init.js
- Để thêm câu hỏi tùy chỉnh, sử dụng trình soạn thảo văn bản để thêm câu hỏi với hàm 
prompt("What's your favorite flavor of ice cream, buddy?", "I LIKE THEM ALL");
-> module.exports = prompt("what's your favorite flavor of ice cream, buddy?", "I LIKE THEM ALL");


# Tạo tệp package .json
- Đối với các module có phạm vi, chạy npm init --scope=@scope-name.
- Đối với các module không có phạm vi, chạy npm init.
-> name: Tên của module của bạn.
-> version: Phiên bản ban đầu của module. Chúng tôi khuyến nghị tuân theo hướng dẫn về phiên bản ngữ nghĩa và bắt đầu từ 1.0.0.

# Tạo tệp sẽ được tải khi module của bạn được yêu cầu
exports.printMsg = function() {
  console.log("Đây là một thông báo từ gói demo");
}
# Xuất bản gói của bạn lên npm:

Đối với các gói riêng tư và gói không có phạm vi, sử dụng npm publish.
Đối với các gói công cộng có phạm vi, sử dụng npm publish --access public.

# Trong thư mục kiểm thử, cài đặt module của bạn:
npm install <tên-module-của-bạn>

-> Trong thư mục kiểm thử, tạo một tệp test.js yêu cầu module của bạn và gọi module của bạn như một phương thức.

-> Trên dòng lệnh, chạy node test.js. Thông báo được gửi đến console.log nên xuất hiện.

# Tệp README sẽ được hiển thị trên trang gói.
- README.md
- Mastering Markdown

# Để cập nhật tệp README của bạn
- npm version patch
- npm publish

# Tạo một gói công cộng không phạm vi:
git init
git remote add origin git://git-remote-url
npm init

# Đối với thông tin ít nhạy cảm hơn, chẳng hạn như dữ liệu kiểm thử, hãy sử dụng tệp
.npmignore
.gitignore

# Để kiểm thử gói của bạn, chạy npm install với đường dẫn đầy đủ đến thư mục gói của bạn
- npm install path/to/my-package

# Để xuất bản gói công cộng của bạn lên npm registry
- npm publish

-> Để xem trang gói công cộng của bạn, truy cập https://npmjs.com/package/*package-name*, thay thế package-name bằng tên của gói bạn. Các gói công cộng sẽ có mục "public" dưới tên gói trên trang web npm.

# Tạo một gói công cộng có phạm vi: npmrc
- npmrc <profile-name>
- git init
- git remote add origin git://git-remote-url
- npm init
- npm init --scope=@my-org
-> Đối với gói có phạm vi tổ chức, thay thế my-org bằng tên tổ chức của bạn:
- npm init --scope=@my-username
-> npm init --scope=@my-username

# Kiểm tra nội dung gói để đảm bảo không có thông tin nhạy cảm:
- Xuất bản thông tin nhạy cảm lên registry có thể gây hại cho người dùng của bạn, đe dọa cơ sở hạ tầng phát triển của bạn, tốn kém để sửa chữa và đưa bạn vào rủi ro pháp lý. Chúng tôi mạnh mẽ khuyến khích loại bỏ thông tin nhạy cảm như khóa riêng tư, mật khẩu, thông tin nhận diện cá nhân (PII) và dữ liệu thẻ tín dụng trước khi xuất bản gói của bạn lên registry.

# Xuất bản các gói công cộng có phạm vi:
- npm publish --access public


# Hướng dẫn đặt tên gói
->> Khi chọn tên cho gói của bạn, hãy chọn một tên mà:

- Duy nhất:
-> Đảm bảo rằng tên bạn chọn không trùng với bất kỳ gói nào khác.

- Mô tả:
-> Chọn một tên có tính mô tả, giúp người khác hiểu rõ nội dung hoặc mục đích của gói.

- Tuân thủ quy tắc của npm:
-> Không đặt tên gói của bạn theo cách xúc phạm, và không sử dụng tên đã được đặt bảo hiểm hoặc vi phạm chính sách bảo hiểm thương hiệu của npm.
# Ngoài ra, khi chọn tên cho một gói không phạm vi, hãy cân nhắc:
- Không sở hữu bởi người khác:
-> Chọn một tên mà không phải ai khác đang sở hữu.

- Không gây nhầm lẫn:
-> Tránh sử dụng tên giống hoặc trùng với tên của gói khác.

- Không gây nhầm lẫn về tác giả:
-> Đảm bảo rằng tên bạn chọn không gây nhầm lẫn về người tạo ra gói đó.
-> Điều này giúp tạo ra một trải nghiệm người dùng thuận lợi và giúp duy trì sự rõ ràng trong cộng đồng npm.


# Bạn có thể sử dụng trình tính toán semver.
- dependencies: Các gói cần thiết cho ứng dụng của bạn trong môi trường sản xuất. --save-prod
npm install <package-name> [--save-prod]
{
  "name": "my_package",
  "version": "1.0.0",
  "dependencies": {
    "my_dep": "^1.0.0",
    "another_dep": "~2.2.0"
  }
}

- devDependencies: Các gói chỉ cần thiết cho việc phát triển và kiểm thử cục bộ. --save-dev
npm install <package-name> --save-dev

{
  "name": "my_package",
  "version": "1.0.0",
  "dependencies": {
    "my_dep": "^1.0.0",
    "another_dep": "~2.2.0"
  },
  "devDependencies" : {
    "my_test_framework": "^3.1.0",
    "another_dev_dep": "1.0.0 - 1.2.0"
  }
}

-> Lưu ý: Nếu bạn giới thiệu một thay đổi làm hỏng một phụ thuộc của gói, chúng tôi mạnh mẽ khuyến nghị bạn tăng số phiên bản chính; xem chi tiết bên dưới.

# Tăng các phiên bản ngữ nghĩa trong các gói đã xuất bản

- Trạng thái mã nguồn: Mô hình Quy tắc: Ví dụ phiên bản
- Bản phát hành đầu tiên: Sản phẩm mới Bắt đầu với 1.0.0 1.0.0
- Sửa lỗi tương thích ngược mới: Bản phát hành Patch Tăng số thứ ba 1.0.1
- Tính năng mới tương thích ngược: Bản phát hành Minor Tăng số giữa và đặt lại số cuối cùng về không 1.1.0
- Thay đổi làm hỏng tính tương thích ngược: Bản phát hành Major Tăng số đầu tiên và đặt lại số giữa và số cuối cùng về không 2.0.0
- Sử dụng phiên bản hóa ngữ nghĩa để chỉ định các loại cập nhật mà gói của bạn có thể chấp nhận

# Patch and Minor and Major
- Bản phát hành Patch: 1.0 hoặc 1.0.x hoặc ~1.0.4
- Bản phát hành Minor: 1 hoặc 1.x hoặc ^1.0.4
- Bản phát hành Major: * hoặc x

# dist-tags
-> Lưu ý: Vì dist-tags chia sẻ không gian tên với các phiên bản ngữ nghĩa, hãy tránh các dist-tags mà xung đột với các số phiên bản hiện có. Chúng tôi khuyến nghị tránh dist-tags bắt đầu bằng một số hoặc chữ cái "v".

# Xuất bản một gói với một dist-tag
-> Mặc định, chạy npm publish sẽ đánh dấu gói của bạn với dist-tag "latest". Để sử dụng một dist-tag khác, hãy sử dụng cờ --tag khi xuất bản.
- npm publish --tag <tag>
VD: Để xuất bản một gói với dist-tag "beta", trên dòng lệnh, chạy lệnh sau trong thư mục gốc của gói:
- npm publish --tag beta

- npm dist-tag add <package-name>@<version> [<tag>]
VD: Để thêm nhãn "stable" cho phiên bản 1.4.0 của gói "example-package", bạn sẽ chạy lệnh sau:
- npm dist-tag add example-package@1.4.0 stable

# Biến một gói công cộng thành riêng tư
-> Lưu ý: Việc biến một gói thành riêng tư yêu cầu một tài khoản người dùng hoặc tổ chức có phí. Để đăng ký tài khoản người dùng hoặc tổ chức có phí, hãy truy cập https://www.npmjs.com/settings/account-name/billing, thay thế account-name bằng tên tài khoản người dùng hoặc tổ chức npm của bạn.

-> Nếu bạn muốn giới hạn quyền truy cập và sự hiển thị cho một gói công cộng bạn sở hữu, bạn có thể làm cho gói trở thành riêng tư. Khi bạn làm cho một gói trở thành riêng tư, quyền truy cập của nó sẽ được cập nhật ngay lập tức và nó sẽ bị xóa khỏi trang web trong vài phút sau khi thay đổi.

- npm access restricted <package-name>
- npm access public <package-name>

# Thêm cộng tác viên vào các gói riêng tư thuộc sở hữu của một tài khoản người dùng
-> Như một người dùng npm có tài khoản người dùng có phí, bạn có thể thêm người dùng npm khác cũng có tài khoản có phí làm cộng tác viên vào một gói riêng tư bạn sở hữu.
-> Lưu ý: Người dùng bạn muốn thêm làm cộng tác viên vào gói riêng tư của bạn phải có một tài khoản người dùng có phí. Để đăng ký tài khoản có phí, họ có thể truy cập https://www.npmjs.com/settings/username/billing, thay thế username bằng tên người dùng npm của họ.
-> họ sẽ nhận được một email mời họ tham gia gói. Thành viên mới phải chấp nhận lời mời để có quyền truy cập vào gói.

- Cấp quyền truy cập cho gói riêng tư từ giao diện dòng lệnh
-> npm owner add <user> <your-package-name>

# Cập nhật số phiên bản cho gói đã xuất bản của bạn
-> Lưu ý: Nếu bạn đã liên kết một kho git với một gói, việc cập nhật số phiên bản của gói cũng sẽ thêm một thẻ với số phiên bản đã cập nhật vào kho git liên kết.
- npm version <update_type>

-> Truy cập trang gói của bạn (https://npmjs.com/package/<package>) để kiểm tra xem số phiên bản của gói đã được cập nhật.

# Quá trình xử lý và hủy bỏ xử lý các gói hoặc phiên bản của gói
-> Lưu ý: Chúng tôi mạnh mẽ khuyến cáo hủy bỏ xử lý các gói hoặc phiên bản của gói thay vì gỡ bỏ chúng, vì việc gỡ bỏ loại bỏ một gói khỏi registry hoàn toàn, có nghĩa là bất kỳ ai phụ thuộc vào nó sẽ không còn có thể sử dụng nó nữa, mà không có bất kỳ cảnh báo nào.

# Hủy bỏ xử lý một gói toàn bộ
-> Hủy bỏ xử lý một gói toàn bộ sẽ loại bỏ nó khỏi kết quả tìm kiếm trên trang web của npm và một thông báo hủy bỏ xử lý cũng sẽ được hiển thị trên trang của gói.
- npm deprecate <package-name> "<message>"

- npm deprecate <package-name>@<version> "<message>"


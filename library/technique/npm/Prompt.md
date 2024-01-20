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
- bash

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

-> Nếu bạn đã bật xác thực hai yếu tố, hãy thêm một mật khẩu một lần vào lệnh, --otp=123456 (trong đó 123456 là mã từ ứng dụng xác thực của bạn).

# Bạn có thể chuyển nó cho tài khoản người dùng @npm, thuộc sở hữu của npm registry.
- Lưu ý: Khi bạn chuyển gói cho tài khoản npm, bạn sẽ không thể cập nhật nó nữa.
- npm owner add npm <package-name>
- npm owner rm <user> <package-name>

# Chuyển gói từ một tài khoản người dùng sang một tài khoản người dùng khác: On the package Admin tab Maintainers
- enter the npm username of the new maintainer.
- npm owner add <their-username> <package-name> --otp=123456
# người duy trì mới chấp nhận lời mời
- npm owner rm <your-username> <package-name> --otp=123456

# Hủy xuất bản các gói từ registry
-> Bạn có thể hủy xuất bản trong vòng 72 giờ kể từ lần xuất bản ban đầu; sau 72 giờ, bạn vẫn có thể hủy xuất bản gói nếu nó đáp ứng các tiêu chí nhất định.
-> Nếu bạn không thể hủy xuất bản gói của mình, bạn có thể đánh dấu nó là đã lạc hậu thay vào đó.
-> Trên trang gói, chọn tab Admin, dưới "Danger Zone", nhấp vào nút "Unpublish".
- npm unpublish <package-name> --force
- Lưu ý: Lựa chọn --force là bắt buộc để hủy xuất bản gói.
- Using the command line
To unpublish an entire package, run the following command, replacing <package-name> with the name of your package:

npm unpublish <package-name> -f
If you have two-factor authentication enabled for writes, you will need to add a one-time password to the unpublish command, --otp=123456 (where 123456 is the code from your authenticator app).

If you need help unpublishing your package, please contact npm Support. If you are an Enterprise customer, please contact Enterprise Support.

Note: If you unpublish an entire package, you may not publish any new versions of that package until 24 hours have passed.

Unpublishing a single version of a package
If you want to remove a single version of a package, you can unpublish one version without affecting the others. This will delete only that version from the registry and it will be unable to be installed. This option is only available via the npm CLI.

Using the command line
To unpublish a single version of a package, run the following command, replacing <package-name> with the name of your package, and <version> with your version number:

npm unpublish <package-name>@<version>
When to unpublish
Unpublishing a package permanently removes the package from the registry so it is no longer available for other users to install. Once a package is unpublished, republishing under the same name is blocked for 24 hours. If you've unpublished a package by mistake, we'd recommend publishing again under a different name, or for unpublished versions, bumping the version number and publishing again.

You might want to unpublish a package because you:

Published something accidentally.
Wanted to test npm.
Published content you didn't intend to be public.
Want to rename a package. (The only way to rename a package is to re-publish it under a new name)
Note: package-name@version is unique, and cannot be reused by unpublishing and re-publishing it. We recommend publishing a minor version update instead.

When to deprecate
If you are no longer interested in maintaining a package, but want it to remain available for users to install, or if your package has dependents, we'd recommend deprecating it. To learn about how to deprecate a package, see "Deprecating and undeprecating packages or package versions".


# Tìm kiếm một gói
- npm search
- Sort packages and Popularity
- npmjs.com

- Build Environment: The environment used to build the package.
- Build Summary: A link to the workflow run that built the package.
- Source Commit: A link to the commit the package was built from.
- Build File: A link to the workflow file used to build the package.
- Public Ledger: A link to a transparency log entry attesting an authorized user published the package.


# Xác minh chứng nhận xuất xứ
- npm audit signatures
- Cài đặt phiên bản npm CLI là v9.5.0 trở lên: npm install -g npm@latest
- Cài đặt các phụ thuộc với npm install hoặc npm ci

# Cài Đặt một Gói Công Cộng được Phạm Vi (Scoped)
- Gói công cộng được phạm vi có thể được tải xuống và cài đặt bởi bất kỳ ai, miễn là tên phạm vi được tham chiếu trong quá trình cài đặt:
- npm install @scope/package-name

# Cài Đặt một Gói Riêng Tư
- Gói riêng tư chỉ có thể được tải xuống và cài đặt bởi những người đã được cấp quyền đọc gói. Vì gói riêng tư luôn được phạm vi, bạn phải tham chiếu tên phạm vi trong quá trình cài đặt:
- npm install @scope/private-package-name

# Kiểm Tra Cài Đặt Gói
- ls node_modules

# Cài đặt gói theo tag
- npm install <package_name>@<tag>
- npm install example-package@beta

# Npx
- npm install -g <package_name>

- Lưu ý: Nếu bạn đang sử dụng npm 5.2 trở lên, chúng tôi khuyến nghị sử dụng npx để chạy các gói toàn cầu.

# Giải Quyết Lỗi Quyền EACCES Khi Cài Đặt Gói Toàn Cầu
1. Cài Đặt Lại npm Bằng Trình Quản Lý Phiên Bản Node (NVM) (Được Khuyến Nghị)
2. Thay Đổi Thủ Mục Mặc Định Của npm Thủ Công
- mkdir ~/.npm-global
- npm config set prefix '~/.npm-global'
-> ~/.profile
- export PATH=~/.npm-global/bin:$PATH
- source ~/.profile
- npm install -g jshint
- NPM_CONFIG_PREFIX=~/.npm-global

# Cập Nhật Các Gói Ở Mức Local:
- npm update
- npm outdated

# Cập Nhật Các Gói Được Cài Đặt Toàn Cầu:
- npm install npm@latest -g

# Xác Định Các Gói Toàn Cầu Cần Được Cập Nhật:
- npm outdated -g --depth=0

# Cập Nhật Một Gói Toàn Cầu:
- npm update -g <package_name>

# Cập nhật tất cả các gói:
- npm update -g
-> Lưu ý: Bạn có thể cần sử dụng quyền quản trị viên (sudo) khi chạy các lệnh cập nhật toàn cầu trên một số hệ điều hành.

# Sử Dụng Các Gói Không Scoped Trong Dự Án:
# Module Node.js:
var lodash = require('lodash');

var output = lodash.without([1, 2, 3], 1);
console.log(output);

# Tệp package.json:
{
  "dependencies": {
    "package_name": "^1.0.0"
  }
}

# Sử Dụng Các Gói Scoped Trong Dự Án:
# Module Node.js:
var projectName = require("@scope/package-name")

# Tệp package.json:
{
  "dependencies": {
    "@scope/package_name": "^1.0.0"
  }
}


# Cannot find module
-> Nếu bạn chưa cài đặt một gói đúng cách, bạn sẽ nhận được một lỗi khi bạn cố gắng sử dụng nó trong mã nguồn của mình. Ví dụ, nếu bạn tham chiếu đến gói lodash mà chưa cài đặt nó, bạn sẽ thấy lỗi sau:
module.js:340
    throw err;
          ^
Error: Cannot find module 'lodash'

- Đối với các gói có phạm vi (scoped), chạy npm install @scope/package_name.
- Đối với các gói không có phạm vi (unscoped), chạy npm install package_name.

# Using deprecated packages
-> it may mean the package is unmaintained and will no longer be updated by the publisher.

# Gỡ cài đặt các gói cục bộ:
- Gỡ cài đặt một gói cục bộ từ thư mục node_modules:
# Gỡ cài đặt một gói không có phạm vi
- npm uninstall <package_name>

# Gỡ cài đặt một gói có phạm vi
- npm uninstall <@scope/package_name>

VD: Gỡ cài đặt gói lodash
npm uninstall lodash

# Gỡ cài đặt mà không loại bỏ khỏi package.json
- npm uninstall --no-save <package_name>

# Gỡ cài đặt một gói toàn cầu không có phạm vi
- npm uninstall -g <package_name>

# Gỡ cài đặt một gói toàn cầu có phạm vi
- npm uninstall -g <@scope/package_name>

VD: Gỡ cài đặt gói jshint toàn cầu
- npm uninstall -g jshint

# Nghiêm Trọng (Severity) của Lỗ Hổng
- Critical (Nghiêm Trọng): Địa chỉ ngay lập tức.
- High (Cao): Địa chỉ càng sớm càng tốt.
- Moderate (Trung bình): Địa chỉ khi có thời gian.
- Low (Thấp): Địa chỉ theo quyết định cá nhân.

# Lỗ Hổng
- Mô Tả (Description) của Lỗ Hổng:
-> Mô tả chi tiết về lỗ hổng. Ví dụ, "Tấn công từ chối dịch vụ (Denial of Service)".
- Gói (Package):
-> Đã Sửa trong phiên bản (Patched in):
-> Dải phiên bản ngữ nghĩa mô tả phiên bản nào chứa bản sửa lỗ hổng.
- Phụ Thuộc của (Dependency of):
-> Module mà gói chứa lỗ hổng phụ thuộc vào.
- Đường Dẫn (Path):
-> Đường dẫn đến mã nguồn chứa lỗ hổng.
- Thông Tin Thêm (More info):
-> Một liên kết đến báo cáo bảo mật chi tiết hơn.


# Về Các Báo Cáo Bảo Mật:
- npm audit
-> Lệnh này kiểm tra các phụ thuộc trực tiếp, devDependencies, bundledDependencies, và optionalDependencies, nhưng không kiểm tra peerDependencies.

# Giải Quyết Các Lỗi EAUDITNOPJSON và EAUDITNOLOCK:
- npm i --package-lock-only
-> mô tả của lỗ hổng, đường dẫn, và các thông tin khác, và nếu có sẵn, các lệnh để áp dụng các bản vá để khắc phục các lỗ hổng

# Cảnh Báo Về SEMVER (Semantic Versioning)
-> bạn có thể mở một yêu cầu kéo (pull request) trên kho lưu trữ của gói phụ thuộc để sử dụng phiên bản đã sửa.
-> kiểm tra trường "Path" để xem vị trí của gói có lỗ hổng, sau đó kiểm tra gói phụ thuộc vào nó.
-> Tìm gói phụ thuộc trên npm public registry và điều hướng đến kho lưu trữ của nó.
-> Khi yêu cầu kéo được hợp nhất và gói đã được cập nhật trên npm public registry, cập nhật bản sao của bạn với npm update.

# Turning off npm audit on package installation
- npm install example-package-name --no-audit
- npm set audit false

# Về npm Provenance
- Provenance Attestation
- Publish Attestation
- Về Sigstore

# Xuất bản gói với chứng thực thông qua GitHub Actions
- Cấp quyền để tạo ID-token
permissions:
  id-token: write

- Chạy trên một runner do GitHub lưu trữ:
runs-on: ubuntu-latest

# Thêm cờ --provenance vào lệnh xuất bản của bạn:
npm publish --provenance

-> Nếu bạn đang xuất bản một gói lần đầu tiên, bạn cũng cần đặt quyền truy cập thành công khai một cách rõ ràng
npm publish --provenance --access public

# Ví dụ về luồng làm GitHub Actions:
name: Publish Package to npmjs
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      id-token: write
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18.x'
          registry-url: 'https://registry.npmjs.org'
      - run: npm install -g npm
      - run: npm ci
      - run: npm publish --provenance --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}

# Trong luồng làm GitHub Actions của bạn, bạn có thể sử dụng một biến môi trường được gọi là NPM_CONFIG_PROVENANCE và đặt giá trị của nó thành true.
- Cấu hình tệp package.json của bạn:
"publishConfig": {
  "provenance": true
}
- Thêm một tệp .npmrc:
provenance=true
-> Lưu ý: Hiện tại, yarn không được hỗ trợ để xuất bản các gói của bạn với chứng thực.

# Về Chữ Ký ECDSA của Registry
-> Chữ ký được cung cấp trong packument của gói trong mỗi phiên bản đã xuất bản trong đối tượng dist:
"dist": {
  ..omitted..,
  "signatures": [{
    "keyid": "SHA256:{{SHA256_PUBLIC_KEY}}",
    "sig": "a312b9c3cb4a1b693e8ebac5ee1ca9cc01f2661c14391917dcb111517f72370809..."
  }]
}
-> Để tạo chữ ký, hãy ký tên gói, phiên bản và sha integrity của tarball: 
${package.name}@${package.version}:${package.dist.integrity}.

# Khóa ký công cộng được cung cấp tại registry-host.tld/-/npm/v1/keys theo định dạng sau:
{
  "keys": [{
    "expires": null,
    "keyid": "SHA256:{{SHA256_PUBLIC_KEY}}",
    "keytype": "ecdsa-sha2-nistp256",
    "scheme": "ecdsa-sha2-nistp256",
    "key": "{{B64_PUBLIC_KEY}}"
  }]
}

expires: null hoặc một định dạng đơn giản mở rộng của ISO 8601: YYYY-MM-DDTHH:mm:ss.sssZ
keydid: vết mốc vân tay sha256 của khóa công cộng
keytype: chỉ có ecdsa-sha2-nistp256 được hỗ trợ bởi npm CLI hiện tại
scheme: chỉ có ecdsa-sha2-nistp256 được hỗ trợ bởi npm CLI hiện tại
key: khóa công cộng được mã hóa base64

# Verifying ECDSA registry signatures
# Xác Minh Chữ Ký Registry
- npm audit signatures
-> audited 1640 packages in 2s
-> 1640 have verified registry signatures
-> Bạn có thể kiểm tra xem registry có hỗ trợ chữ ký hay không bằng cách yêu cầu các khóa ký công cộng từ registry-host.tld/-/npm/v1/keys.

# entworkn
# Bạn có thể tìm thông tin liên lạc với người duy trì gói bằng cách sử dụng lệnh npm owner ls <tên-gói>
# Reporting malware Report malware. ->  Send Report.

# npm token commands let you:
- Xem các mã thông tin để theo dõi và quản lý dễ dàng hơn
- Tạo mới các mã thông tin thừa kế
- Hạn chế quyền truy cập theo dải địa chỉ IP (CIDR)
- Xóa/mất hiệu lực các mã thông tin

-> Mỗi mã thông tin có thể truy cập tới 50 tổ chức, và tới 50 gói, 50 phạm vi, hoặc một sự kết hợp giữa 50 gói và phạm v

# Chọn loại mã thông tin truy cập:
- Chỉ đọc: Một mã thông tin truy cập chỉ đọc chỉ có thể được sử dụng để tải các gói từ registry.
- Tự động: Một mã thông tin truy cập tự động có thể tải các gói và xuất bản các gói mới, nhưng nếu bạn có xác minh hai yếu tố (2FA) được cấu hình trên tài khoản của mình, thì nó sẽ không được áp dụng
- Xuất bản: Một mã thông tin truy cập xuất bản có thể thực hiện bất kỳ hành động nào thay mặt bạn, bao gồm tải các gói, xuất bản các gói và thay đổi cài đặt người dùng hoặc cài đặt gói.

# Creating granular access tokens on the website
- Trong trường Expiration, nhập thời gian hết hạn của mã thông tin truy cập. Ngày hết hạn phải ít nhất là 1 ngày trong tương lai.
- Trong trường Allowed IP Ranges, nhập các dải địa IP để hạn chế mã thông tin truy cập của bạn. Bạn phải sử dụng notation CIDR để nhập các dải địa IP. Để thêm nhiều hơn một dải IP được phép, nhấp vào Add IP Range và nhập một dải IP trong trường văn bản mới.

# Permissions
- All Packages để cấp quyền truy cập của mã thông tin truy cập đến tất cả các gói mà tài khoản người dùng có quyền truy cập.
- Only select packages and scopes để chọn tối đa 50 gói hoặc phạm vi cụ thể để cấp quyền truy cập cho mã thông tin truy cập. Sau đó, chọn các gói hoặc phạm vi cụ thể từ menu thả xuống.

# Organizations
- In the Permissions dropdown menu, select No access, Read-only, or Read and write.
- Under Select organizations, select the organizations you want to grant your token access to.

# Để tạo một mã thông tin truy cập mới
- npm token create
- npm token create --read-only
- pm token create --cidr=[list]
-> npm token create --cidr=192.0.2.0/24
- npm token create --read-only --cidr=[list]

# Viewing tokens on the CLI
- npm token list

# Trên dòng lệnh, chạy lệnh sau, thay thế 123456 bằng ID của mã thông tin truy cập bạn muốn xóa:
- npm token delete 123456

# Tạo token quyền chỉ đọc
- npm token create --read-only

# Set the token as an environment variable on the CI/CD server
steps:
  - run: |
      npm install
  - env:
      NPM_TOKEN: ${{ secrets.NPM_TOKEN }}

# .npmrc
//registry.npmjs.org/:_authToken=${NPM_TOKEN}
-> Lưu ý: bạn đang chỉ định một giá trị chính xác của ${NPM_TOKEN}. CLI npm sẽ thay thế giá trị này bằng nội dung của biến môi trường NPM_TOKEN. Đừng đặt một mã thông tin trong tệp này.

# Docker build secrets.
FROM node

COPY package.json package.json
RUN npm install

# Thêm các tệp nguồn của bạn
COPY . .
CMD npm start

-> Để cài đặt các gói riêng tư, bạn có thể nghĩ rằng bạn có thể thêm một dòng trước khi chạy npm install, sử dụng tham số ENV:
ENV NPM_TOKEN=00000000-0000-0000-0000-000000000000

# Cập nhật Dockerfile
# https://docs.npmjs.com/docker-and-private-modules
FROM node:18

ENV APP_HOME="/app"

WORKDIR ${APP_HOME}

COPY package*.json ${APP_HOME}/

RUN --mount=type=secret,id=npmrc,target=/root/.npmrc npm install

COPY . ${APP_HOME}/

CMD npm start

# Xây dựng hình ảnh Docker
docker build . -t secure-app-secrets:1.0 --secret id=npmrc,src=$HOME/.npmrc

# Creating an organization
Ví dụ, nếu tên người dùng cũ của bạn là "wombat", tên người dùng mới của bạn có thể là "wombat-new".
Thêm tài khoản người dùng npm mới của bạn vào một nhóm có tên là "Developers" trong tổ chức mới của bạn.
# Requiring two-factor authentication in your organization

# NPM Teams
- npm Teams. npm Teams là một gói trả phí để cung cấp khả năng cài đặt và xuất bản các gói riêng tư cho các thành viên của tổ chức

# Upgrading paid
- Nếu bạn có một tổ chức với gói gói riêng tư, tổ chức của bạn sẽ tốn 7 đô la mỗi tháng cho mỗi người dùng. 

# Role
- Chủ sở hữu (Owner): Người dùng quản lý thành viên của tổ chức và thanh toán.
- Quản trị viên (Admin): Người dùng quản lý thành viên nhóm và quyền truy cập gói.
- Thành viên (Member): Người dùng tạo và xuất bản các gói trong phạm vi tổ chức.

# Adding package access to a team using the CLI
- npm access grant <read-only|read-write> <org:team> [<package>]
- npm access revoke <org:team> [<package>]

# Changing package access for a team from the CLI
- npm access

# Đặt phạm vi tổ chức của bạn cho tất cả các gói mới
- npm config set scope <org-name> --global

# Đặt phạm vi tổ chức của bạn cho một gói cụ thể
- npm config set scope <org-name>

# Thay đổi tính khả nhìn công khai mặc định cho một gói cụ thể
- npm publish --access public

# Đặt tính khả nhìn công khai cho một gói cụ thể
- npm config set access public

# Đặt tính khả nhìn công khai cho tất cả các gói
- npm config set access public --global





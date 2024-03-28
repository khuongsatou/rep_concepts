# Các keywords quan trọng
1. Action, Filters, add_action, add_filter, do_action
2. wp_enqueue_style, wp_enqueue_script
3. 

# Các vấn đề và dự án WEB WP
- Làm thế nào để bắt được hàm để tải lên section cho nó biến mất khi scroll nó sẽ hiện lên như enable để giảm tải DOM
- 

# Các loại theme
- Theme types: block and classic.
- Classic: Chủ đề cổ điển sử dụng hệ thống mẫu dựa trên PHP, vẫn được hỗ trợ trong WordPress ngày nay.
- Block themes: Chủ đề khối là phương pháp hiện đại để xây dựng các chủ đề WordPress. Chúng thường tuân thủ một tập hợp các quy ước tiêu chuẩn và được xây dựng hoàn toàn từ các khối.
- Hybrid themes: Chủ đề lai đơn giản là các chủ đề cổ điển đã áp dụng một số tính năng liên quan đến khối hiện đại

# Sự khác biệt giữa chủ đề và plugin là gì?
- export
- HTML, CSS, PHP, JSON và JavaScript

# Các trang tài liệu
- Tài liệu MDN Web Docs: HTML
- Tài liệu MDN Web Docs: CSS
- Tài liệu chính thức PHP
- Tài liệu MDN Web Docs: JSON
- Tài liệu MDN Web Docs: JavaScript

# How to read code examples

# Cách sử dụng theme 
- “namespace” or “prefix” throughout its pages: theme_slug or theme-slug
- fabled_sunset trong php fabled-sunset: handle/slug/ID
- Nếu không có các không gian tên duy nhất, mọi thứ sẽ trở nên hỗn loạn và lỗi sẽ xuất hiện.
- Ví dụ, nếu chủ đề của bạn khai báo một hàm tùy chỉnh có tên get_post() thay vì fabled_sunset_get_post(), trang web của bạn sẽ gặp lỗi nghiêm trọng vì WordPress đã có một hàm với tên này
- 

```php
function fabled_sunset_custom_function() {
    // Your function code here
}
```

- fabled_sunset_
Ví dụ 2: Trong các lớp CSS hoặc ID của HTML:
```php
<div class="fabled-sunset-container">
    <!-- Your HTML content here -->
</div>

.fabled-sunset-title {
    /* Your CSS styles here */
}
```
# Usage in script and style handles:
```php
<?php
// theme-slug-editor becomes:
wp_enqueue_script( 'fabled-sunset-editor', ... );

// theme-slug-main becomes:
wp_enqueue_style( 'fabled-sunset-main', ... );

// Usage in text domains (used for translations):
<?php
// theme-slug becomes:
esc_html_e( 'Hello, world!', 'fabled-sunset' );


// Usage in PHP Functions:
<?php
// theme_slug_func() becomes:
function fabled_sunset_func() {
	// ...
}

// Usage in PHP classes:
<?php
// Theme_Slug_Class() becomes:
class Fabled_Sunset_Class() {
	// ...
}


```

- Trong trường hợp này, không gian tên cho chủ đề ví dụ sẽ là Fabled_Sunset hoặc FabledSunset. Hướng dẫn chủ đề sử dụng một phong cách được tiền tố cho tên hàm PHP và lớp, như được hiển thị ở trên. Điều này chủ yếu là vì nó đơn giản hơn cho việc hiển thị các ví dụ mã tách rời.


# Nhưng cấu hình một môi trường địa phương để làm việc trên chủ đề của bạn có nhiều lợi ích:

Bạn không cần kết nối internet để xây dựng chủ đề của bạn.
Bạn có thể xây dựng chủ đề của mình mà không phụ thuộc vào một máy chủ từ xa. Điều này làm tăng tốc quá trình xây dựng, và bạn có thể thấy các thay đổi ngay lập tức trong trình duyệt của bạn.
Bạn có thể kiểm tra chủ đề của mình từ nhiều góc độ. Điều này quan trọng nếu bạn định phát hành nó cho một đối tượng lớn hơn và muốn tương thích tối đa.

- @wordpress/env (local WordPress environment package)
- Docker
- Local
- XAMPP
- MAMP
- Varying Vagrant Vagrants (VVV)

# Trình soạn thảo
- Visual Studio Code (VS Code)
- VIM
- Brackets
- Notepad++
- GNU Emacs
- TextMate

# Plugins
Theme Check: Tests your theme for compliance with the latest WordPress standards and practices.
Debug Bar: Adds an admin bar to your WordPress admin and provides a central location for debugging.
Query Monitor: Allows debugging of database queries, API requests, and AJAX used to generate theme pages and functionality.
Log Deprecated Notices: Logs incorrect function usage, deprecated file usage, and deprecated function usage in your theme.
Monster Widget: Consolidates the core WordPress widgets into a single widget, making it easier to test them all at once (classic themes only).

Một trong những cách tốt nhất để hiểu cách xây dựng chủ đề là nhìn và nghiên cứu các chủ đề hiện có.

Ngay cả trong các vòng phát triển tiên tiến, một trong những nền tảng của phát triển âm thanh là sử dụng lại mã nguồn. Điều này là bởi vì các nhà phát triển hiểu rằng đây là cách hiệu quả nhất để hoàn thành công việc, và nhiều người cố gắng tuân theo nguyên tắc "đừng phát minh lại bánh xe".


# Vì hướng dẫn này chủ yếu tập trung vào phong cách hiện đại, xây dựng theo khối, bạn nên chọn một trong những chủ đề mặc định mới nhất:
Twenty Twenty-Four
Twenty Twenty-Three
Twenty Twenty-Two

# Customizing your theme
- Appearance > Editor
- You can do this by first selecting the Styles item in the menu panel:

# Style Book icon
- Export: Để lấy theme ra 1 file riêng
- style.css : Xem các style của theme đó

```php
/*
Theme Name: Twenty Twenty-Four
Theme URI: https://wordpress.org/themes/twentytwentyfour/
Author: the WordPress team
Author URI: https://wordpress.org
...
```

# Using the Create Block Theme plugin
- style.css, functions.php và theme.json.

# Các phần chính
- Theme Structure: 
- Main Stylesheet: style.css
- Custom Functionality: functions.php
- Templates
- Including Assets
- Global Settings and Styles: theme.json

# Files and folders
- Take note of the files/folders marked required because they are necessary for a block theme to work.
- functions.php
- style.css (required)
- theme.json
- templates/
+ index.html (required)
+ 404.html
+ archive.html
+ singular.html
- styles/
+ example.json
- patterns/
+ example.php
- parts/
+ footer.html
+ header.html

# Required files
+ style.css
- Tệp này là bắt buộc để cấu hình dữ liệu chủ đề, như tên và mô tả của nó.
+ templates/index.html
- Mẫu mặc định/đệ quy. Đây là bắt buộc để WordPress 

- README.txt (Theme Review: Files): Đây không được sử dụng trực tiếp bởi phần mềm WordPress.
- functions.php (Custom Functionality): Một tệp PHP mà WordPress tự động tải sau khi chủ đề được khởi tạo trong quá trình tải trang.
- screenshot.png: kích thước 1200×900 của chủ đề của bạn. Appearance > Themes in the WordPress admin and in the WordPress theme directory (if submitted there). Both .png and .jpg
- theme.json (Global Settings and Styles): Được sử dụng để cấu hình cài đặt và kiểu cho trang web, tích hợp với giao diện người dùng.

# Standard folders
- parts (Template Parts): Chứa các phần mẫu tùy chỉnh cho chủ đề của bạn. Các phần mẫu là các phần nhỏ hơn mà bạn có thể bao gồm trong các mẫu cấp độ cao nhất. Thường, điều này sẽ bao gồm các phần như tiêu đề, chân trang và thanh bên.

- patterns (Block Patterns): Các mẫu có thể tái sử dụng được tạo thành từ một hoặc nhiều block mà người dùng có thể chèn thông qua giao diện biên tập. WordPress sẽ tự động đăng ký các tệp được bao gồm trong thư mục này.

- styles (Style Variations): Các biến thể về cài đặt và kiểu chung của chủ đề được lưu trữ trong các tệp JSON cá nhân.

- templates (Templates): Các tệp đại diện cho cấu trúc tài liệu tổng thể của giao diện trang trước. Các mẫu được tạo thành từ markup block và là những gì khách truy cập trang web thấy.


# Cấu trúc thư mục

```javascript
assets/
    css/
        core-site-title.css
    images/
        header-background.png
    js/
        navigation.js
inc/
    ClassName.php
    functions-helpers.php
parts/
    footer.html
    header.html
patterns/
    example.php
styles/
    example.json
templates/
    404.html
    archive.html
    index.html (required)
    singular.html
.editorconfig // Được sử dụng để cấu hình định dạng, như kết thúc dòng và khoảng trống
.gitattributes // Cấu hình các thuộc tính với hệ thống quản lý phiên bản Git.
.gitignore // Xác định các tệp cần bỏ qua khi thực hiện commit mã vào kho lưu trữ Git.
CHANGELOG.md // Một nhật ký có thể đọc được cho các thay đổi quan trọng trong mỗi phiên bản của chủ đề của bạn.
LICENSE.md // Xác định giấy phép cho chủ đề. Lưu ý rằng tất cả các chủ đề được gửi đến thư mục chủ đề WordPress phải được cấp phép theo GPL v2+.
README.txt
functions.php
package.json // hường được sử dụng để xác định quy trình xây dựng và các phụ thuộc phát triển trong một môi trường Node.
screenshot.png
style.css (required)
theme.json

```

- assets (Bao gồm Tài nguyên): Nhiều tác giả chủ đề sử dụng thư mục này để lưu trữ CSS bổ sung, Hình ảnh/Media và JavaScript cần thiết cho chủ đề của họ. Thư mục này cũng có thể có các tên khác như resources hoặc public.
- inc (Chức năng Tùy chỉnh): Các chủ đề thường chứa các lớp hoặc tệp PHP tùy chỉnh được lưu trữ trong thư mục này để cung cấp thêm chức năng. Thư mục này cũng có thể được gọi là includes, src, và nhiều tên khác.

# File Header
- Appearance > Themes
- /wp-content/themes

```javascript
wp-content/
    themes/
        fabled-sunset/
            style.css

```

# File style.css
- Tên Theme
/**
 * Theme Name: Fabled Sunset
 */

- Header fields
```javascript
/**
 * Theme Name:        Fabled Sunset
 * Theme URI:         https://example.com/fabled-sunset
 * Description:       Custom theme description...
 * Version:           1.0.0
 * Author:            Your Name
 * Author URI:        https://example.com
 * Tags:              block-patterns, full-site-editing
 * Text Domain:       fabled-sunset
 * Domain Path:       /assets/lang
 * Tested up to:      6.4
 * Requires at least: 6.2
 * Requires PHP:      7.4
 * License:           GNU General Public License v2.0 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 */
```
- Chỉ định chủ đề con Theme Name và chủ đề cha là template
/**
 * Theme Name: Grand Sunrise
 * Template:   fabled-sunset
 * ...other header fields
 */


- Trường Template phải khớp chính xác với tên thư mục của chủ đề cha
-  wp-content/themes

- Tập tin style.css không chỉ là một tập tin cấu hình. Bạn cũng có thể sử dụng nó để viết mã CSS tùy chỉnh để thay đổi thiết kế của chủ đề của bạn, miễn là tập tin được tải lên đúng cách.

- Với các chủ đề khối, hầu hết hoặc tất cả thiết kế lý tưởng được xử lý thông qua tệp theme.json, mà bạn sẽ tìm hiểu trong tài liệu Cài đặt và kiểu toàn cục.

- theme.json

# What are templates?
- Appearance > Editor > Templates > Single Posts
- (Options) > Code editor: Hiển thị block

```html
<!DOCTYPE html>
<html lang="en-US">
<head>
	<title>Post Title</title>
	<!-- Scripts, styles, and meta here. -->
</head>

<body class="post-template single single-post">
	<div class="wp-site-blocks">
		<header class="wp-block-template-part">
			<!-- Header blocks here. -->
		</header>
		<main class="wp-block-group is-layout-flow wp-block-group-is-layout-flow">
			<!-- Nested blocks here. -->
		</main>
		<footer class="wp-block-template-part">
			<!-- Footer blocks here. -->
		</footer>
	</div>
</body>
</html>
```
# Chức năng của từng page
- Bài đăng đơn (single.html) được sử dụng để hiển thị nội dung của các bài đăng blog đơn lẻ.
- Bạn có thể có một mẫu Trang (page.html) để hiển thị nội dung của các trang trên trang web của bạn hoặc một mẫu Tác giả (author.html) để hiển thị lưu trữ tác giả bài đăng
- WordPress sử dụng bảng mẫu để xác định mẫu tệp nào sẽ được tải. WordPress sẽ tiếp tục tìm kiếm xuống theo bảng mẫu cho đến khi nó tìm thấy một mẫu tồn tại.
- Nếu không tìm thấy mẫu cụ thể, nó sẽ chuyển sang mẫu chỉ mục: index.html. Như bạn đã học trong Cấu trúc Mẫu, đây là mẫu tối thiểu cần thiết cho một chủ đề khối để hoạt động.


```javascript
templates/
    404.html
    archive.html
    author.html
    index.html (required)
    page.html
    single.html
    search.html

```


# Giải thích cấu trúc trên

Dưới đây là một số mẫu phổ biến mà bạn sẽ tìm thấy trong một chủ đề:

index.html: Tệp mẫu dự phòng. Nó được yêu cầu trong tất cả các chủ đề.
404.html: Mẫu 404 được sử dụng khi WordPress không thể tìm thấy một bài đăng, trang hoặc nội dung khác phù hợp với yêu cầu của khách truy cập.
archive.html: Mẫu lưu trữ được sử dụng khi khách truy cập yêu cầu bài đăng theo các chế độ xem lưu trữ như danh mục, tác giả hoặc ngày và một mẫu cụ thể hơn không có sẵn.
author.html: Mẫu trang tác giả được sử dụng mỗi khi một khách truy cập tải lưu trữ tác giả.
category.html: Mẫu danh mục được sử dụng khi khách truy cập yêu cầu bài đăng theo danh mục.
page.html: Mẫu trang được sử dụng khi khách truy cập yêu cầu các trang cá nhân.
search.html: Mẫu kết quả tìm kiếm được sử dụng để hiển thị kết quả tìm kiếm của một khách truy cập.
single.html: Mẫu bài đăng đơn được sử dụng khi một khách truy cập yêu cầu một bài đăng duy nhất.
tag.html: Mẫu thẻ được sử dụng khi khách truy cập yêu cầu bài đăng theo thẻ.

# Nguyên tắt DRY
- Điều tuyệt vời về parts là chúng giúp bạn tuân thủ nguyên tắc DRY (Đừng Lặp Lại Chính Mình).
- Appearance > Editor > Patterns > Template Parts
- Bằng cách bao gồm các parts trong các mẫu của bạn, bạn tránh được việc phải lặp lại việc xây dựng mã block cùng một lần nhiều lần.
```javascript
parts/
    header.html
    footer.html

```

# Custom Functionality (functions.php)
- functions.php là gì?
- functions.php về cơ bản hoạt động như một plugin WordPress, cho phép bạn thêm các hàm PHP tùy chỉnh, các lớp, giao diện và nhiều hơn nữa. Nó mở ra toàn bộ ngôn ngữ lập trình PHP cho chủ đề của bạn.
- WordPress tự động tải tệp functions.php (nếu có) ngay khi nó tải chủ đề trên tất cả các trang xem trên cả bản quản trị và phía trước của trang web
- Chỉ vì bạn có thể xây dựng các tính năng giống như plugin trong một chủ đề không có nghĩa là bạn luôn nên làm như vậy, đặc biệt là nếu bạn phân phối chủ đề của mình cho người khác sử dụng. Nếu bạn tạo ra các tính năng nên có sẵn bất kể thiết kế của trang web, thì việc đặt mã trong một plugin là thực hành tốt nhất. Quy tắc chung là chủ đề chỉ nên xử lý thiết kế của trang web.
- Mặc dù tất cả các chủ đề đều có thể có tệp functions.php tùy chỉnh, WordPress chỉ tải tệp functions.php của chủ đề đang hoạt động.

- Sự trừu tượng duy nhất của quy tắc đó là khi một chủ đề con đang hoạt động. Trong trường hợp đó, WordPress tải tệp functions.php của chủ đề con ngay trước khi tải tệp functions.php của chủ đề cha.

- Các ứng dụng phổ biến của functions.php
- Vì tệp functions.php cho phép bạn viết bất kỳ PHP nào, bạn thường thấy các chủ đề có mã khác nhau, hệ thống tổ chức, quy ước đặt tên và nhiều hơn nữa. Càng hiểu sâu về PHP, việc theo dõi mã từ các chủ đề khác sẽ trở nên dễ dàng hơn.

- Hệ thống hook của WordPress cung cấp hai phương pháp khác nhau để thực thi mã của bạn trong quá trình tải trang:
- Các hook hành động cho phép bạn chạy một callback hành động tùy chỉnh và "thực hiện" thông tin mà nó nhận được.
- Hook bộ lọc cho phép bạn lọc dữ liệu thông qua một callback bộ lọc tùy chỉnh và điều chỉnh nó.

# đăng ký các tính năng được hỗ trợ bởi chủ đề với WordPress
- Điều này gần như luôn được thực thi trên hook hành động after_setup_theme, đây là hook đầu tiên có sẵn sau khi tệp functions.php của một chủ đề đã được tải.
```php
<?php
add_action( 'after_setup_theme', 'theme_slug_setup' );

function theme_slug_setup() {
	add_theme_support( 'wp-block-styles' );
}

```

- Bạn có thể tải các tập tin khác chứa các giao diện, lớp, tính chất và hàm PHP tùy chỉnh từ bất kỳ đâu trong chủ đề của bạn.
# You could load it via functions.php using the get_parent_theme_file_path() function
- /inc/helpers.php
- include get_parent_theme_file_path( 'inc/helpers.php' );

# if you wanted to allow a child theme to override the file with a fallback to the parent theme 
- include get_theme_file_path( 'inc/helpers.php' );

# The easiest way to avoid this issue is to leave the closing ?> tag out altogether
<?php
// some code...
 

- get_stylesheet_uri(): Trả về URL của tệp style.css của chủ đề hoạt động.
- get_theme_file_uri( $file ): Trả về URL của chủ đề hoạt động, với một tham số $file tùy chọn. Rơi về chủ đề cha nếu một chủ đề con đang hoạt động và tệp không tồn tại.
- get_parent_theme_file_uri( $file ): Trả về URL của chủ đề cha, với một tham số $file tùy chọn.
# Đối với đường dẫn thư mục, mà ít khi cần thiết cho các tài nguyên, có hai hàm chính:
- get_theme_file_path( $file ): Trả về đường dẫn thư mục của chủ đề hoạt động, với một tham số $file tùy chọn. Rơi về chủ đề cha nếu một chủ đề con đang hoạt động và tệp không tồn tại.
- get_parent_theme_file_path( $file ): Trả về đường dẫn thư mục của chủ đề cha, với một tham số $file tùy chọn.
- wp_enqueue_style() là hàm chính để bao gồm một bảng điều khiển CSS vào hàng đợi để tải

```php
wp_enqueue_style( 
	string $handle, 
	string $src           = '', 
	string[] $deps        = array(), 
	string|bool|null $ver = false, 
	string $media         = 'all'
);

# Ví dụ
wp_enqueue_style( 
	'theme-slug-example',
	get_parent_theme_file_uri( 'assets/css/example.css' ),
	array(),
	wp_get_theme()->get( 'Version' ),
	'all'
);
```


# Một thư mục tùy chỉnh có tên /inc (hoặc bất kỳ thư mục tùy chỉnh nào) để lưu trữ các tập tin PHP tùy chỉnh.
- Một tập tin /inc/helpers.php để lưu trữ các hàm trợ giúp tùy chỉnh
- bạn có thể tải nó qua functions.php bằng cách sử dụng hàm
    include get_parent_theme_file_path( 'inc/helpers.php' );
    include get_theme_file_path( 'inc/helpers.php' );

- Tránh đóng thẻ ?> ở cuối các tập tin

# Let’s assume that you wanted to load your theme’s style.css file using the get_stylesheet_uri()
```php
add_action( 'wp_enqueue_scripts', 'theme_slug_enqueue_styles' );

function theme_slug_enqueue_styles() {
	wp_enqueue_style( 
		'theme-slug-style', 
		get_stylesheet_uri()
	);
}
```
# bạn sẽ sử dụng hàm get_parent_theme_file_uri() để lấy URL đúng.
```php

add_action( 'wp_enqueue_scripts', 'theme_slug_enqueue_styles' );

function theme_slug_enqueue_styles() {
	wp_enqueue_style(
		'theme-slug-style', 
		get_stylesheet_uri()
	);

	wp_enqueue_style( 
		'theme-slug-primary',
		get_parent_theme_file_uri( 'assets/css/primary.css' )
	);
}

```
# Inline styles
- WordPress có hàm wp_add_inline_style() cho trường hợp cụ thể này
```php
wp_add_inline_style( 
	string $handle, 
	string $data 
);

```

# theme_slug_enqueue_styles
```php
add_action( 'wp_enqueue_scripts', 'theme_slug_enqueue_styles' );

function theme_slug_enqueue_styles() {
	wp_enqueue_style(
		'theme-slug-style', 
		get_stylesheet_uri()
	);

	wp_enqueue_style( 
		'theme-slug-primary',
		get_parent_theme_file_uri( 'assets/css/primary.css' )
	);

	wp_add_inline_style( 
		'theme-slug-primary', 
		'body { background: #eee; }'
	);
}

```

# Editor stylesheets
- you will need to use the add_editor_style() function
```php
add_editor_style( array|string $stylesheet = 'editor-style.css' );

```
- Lưu ý rằng khi sử dụng URL tương đối, một tệp trong chủ đề con có cùng tên sẽ được ưu tiên

# Đoạn mã này cho thấy cách thêm tệp style.css chính của chủ đề đang hoạt động
```php
add_action( 'after_setup_theme', 'theme_slug_setup' );

function theme_slug_setup() {
	add_editor_style( get_stylesheet_uri() );
}
// Hoặc
add_action( 'after_setup_theme', 'theme_slug_setup' );

function theme_slug_setup() {
	add_editor_style( array(
		get_stylesheet_uri(),
		get_parent_theme_file_uri( 'assets/css/primary.css' )
	) );
}

```
# Block stylesheets
# callback hook hành động trong tệp functions.php của bạn
```php
wp_enqueue_script( 
	string $handle, 
	string $src           = '', 
	string[] $deps        = array(), 
	string|bool|null $ver = false, 
	array|bool $in_footer = false
);

```
# Including JavaScript
- Nhúng thẻ javascript

```php
wp_enqueue_script( 
	string $handle, 
	string $src           = '', 
	string[] $deps        = array(), 
	string|bool|null $ver = false, 
	array|bool $in_footer = false
);

// Ví dụ
wp_enqueue_script( 
	'theme-slug-example',
	get_parent_theme_file_uri( 'assets/js/example.js' ),
	array(),
	wp_get_theme()->get( 'Version' ),
	true
);


```
-> callback hook action

# Lấy url của file javascript con
```php
//Giả sử bạn có một tập lệnh điều hướng tùy chỉnh được đặt tại assets/js/navigation.js trong chủ đề của mình. Đối với điều này, bạn sẽ sử dụng hàm get_parent_theme_file_uri() để lấy URL đúng.


add_action( 'wp_enqueue_scripts', 'theme_slug_enqueue_scripts' );

function theme_slug_enqueue_scripts() {
	wp_enqueue_script( 
		'theme-slug-navigation',
		get_parent_theme_file_uri( 'assets/js/navigation.js' ),
		array(),
		wp_get_theme()->get( 'Version' ),
		true
	);
}
```


# Front-end JavaScript
```php
add_action( 'wp_enqueue_scripts', 'theme_slug_enqueue_scripts' );

function theme_slug_enqueue_scripts() {
	wp_enqueue_script( 
		'theme-slug-navigation',
		get_parent_theme_file_uri( 'assets/js/navigation.js' ),
		array(),
		wp_get_theme()->get( 'Version' ),
		true
	);
}

// Inline JavaScript
wp_add_inline_script( 
	string $handle, 
	string $data, 
	string $position = 'after' 
);

// Ví dụ
add_action( 'wp_enqueue_scripts', 'theme_slug_enqueue_scripts' );

function theme_slug_enqueue_scripts() {
	wp_enqueue_script( 
		'theme-slug-navigation',
		get_parent_theme_file_uri( 'assets/js/navigation.js' ),
		array(),
		wp_get_theme()->get( 'Version' ),
		true
	);

	wp_add_inline_script( 
		'theme-slug-navigation', 
		'console.log( "Testing" );'
	);
}
```
# Editor JavaScript

```javascript
add_action( 'enqueue_block_editor_assets', 'theme_slug_enqueue_editor_scripts' );

function theme_slug_enqueue_editor_scripts() {
	wp_enqueue_script( 
		'theme-slug-editor',
		get_parent_theme_file_uri( 'assets/js/editor.js' ),
		array(),
		wp_get_theme()->get( 'Version' ),
		true
	);
}
```

# Including images
```javascript
<img src="<?php echo esc_url( get_parent_theme_file_uri( 'assets/img/example.webp' ) ); ?>" alt="" />
// Hoặc
<img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/example.webp' ) ); ?>" alt="" />


```
# Global Settings and Styles.
theme.json

# Một số điều bạn có thể làm với theme.json là:
- Kích hoạt hoặc vô hiệu hóa các tính năng như drop caps, padding, margin và line-height.
- Thêm một bảng màu, gradients, duotones và bóng đổ.
- Cấu hình các tính năng về kiểu chữ như font families, sizes và nhiều hơn nữa.
- Thêm các thuộc tính CSS tùy chỉnh.
- Đăng ký các mẫu tùy chỉnh và gán các phần cho các khu vực phần mẫu.

# theme.json structure
```json
{
	"$schema": "https://schemas.wp.org/trunk/theme.json",
	"version": 2,
	"settings": {
		"appearanceTools": true
	}
}
// Ví dụ:
{
	"$schema": "https://schemas.wp.org/trunk/theme.json",
	"version": 2,
	"settings": {},
	"styles": {},
	"customTemplates": {},
	"templateParts": {},
	"patterns": []
}


```
- $schema: Sử dụng để xác định schema JSON được hỗ trợ, sẽ tích hợp với nhiều trình soạn thảo mã để cung cấp gợi ý và báo cáo lỗi ngay lập tức.
- version: Phiên bản schema theme.json bạn đang xây dựng cho. Phiên bản mới nhất là 2 và luôn có thể được tìm thấy trong tài liệu tham khảo sống theme.json, một tài liệu liệt kê các thuộc tính cập nhật nhất bạn có thể cấu hình.
- settings: Sử dụng để xác định các điều khiển block và bảng màu, cỡ chữ, và nhiều hơn nữa.
- styles: Sử dụng để áp dụng màu sắc, kích thước chữ, CSS tùy chỉnh, và nhiều hơn nữa cho trang web và các block.
- customTemplates: Siêu dữ liệu cho các mẫu tùy chỉnh được xác định trong thư mục /templates của chủ đề của bạn.
- templateParts: Siêu dữ liệu cho các phần mẫu được xác định trong thư mục /parts của chủ đề của bạn.
- patterns: Một mảng các slug mẫu để đăng ký từ Thư mục Mẫu.


# Thứ tự của cấu trúc này từ thấp đến cao là:
- WordPress theme.json: WordPress có tệp theme.json riêng mà xác định các cài đặt và kiểu dáng mặc định.
Theme theme.json: Mọi điều bạn xác định trong tệp theme.json của chủ đề của bạn sẽ ghi đè lên các cài đặt và kiểu dáng mặc định của WordPress.
- Child theme theme.json: Nếu được kích hoạt, tệp theme.json của một chủ đề con sẽ có ưu tiên hơn so với chủ đề chính hoặc "cha".
- Cấu hình người dùng: Người dùng có thể tùy chỉnh cách trang web của họ hoạt động dưới mục Appearance > Editor trong trang quản trị WordPress, và dữ liệu JSON được lưu trong cơ sở dữ liệu của họ. Lựa chọn của họ sẽ có ưu tiên hơn tất cả các cấp độ khác trong cấu trúc thứ bậc.
- Ngoài ra, có các hook lọc sẵn có cho phép các tác giả plugin và chủ đề ghi đè các giá trị một cách linh hoạt. Để tìm hiểu thêm về điều này, hãy xem How to modify theme.json data using server-side filters từ WordPress Developer Blog.

# Hiểu sâu về theme.json cho những người làm chủ đề lần đầu
- Giới thiệu về theme.json: Một hướng dẫn từng bước để thiết lập tệp theme.json của bạn, giới thiệu bạn với các khái niệm cơ bản để cấu hình cài đặt và kiểu dáng toàn cầu cho chủ đề của bạn.
- Cài đặt: Tài liệu cho mỗi cài đặt chuẩn và tùy chỉnh mà bạn có thể cấu hình qua theme.json. Các trang con tài liệu mỗi cài đặt có sẵn.
- Kiểu dáng: Học cách sử dụng hệ thống thiết kế chuẩn để áp dụng các kiểu dáng thông qua theme.json, cũng tích hợp với giao diện người dùng.
- Mẫu tùy chỉnh: Cách đăng ký các mẫu bài viết, trang và CPT (loại bài viết tùy chỉnh) tùy chỉnh cho chủ đề của bạn.
Phần mẫu: Cách đăng ký các phần mẫu tùy chỉnh có thể tái sử dụng trong toàn bộ chủ đề của bạn.
- Mẫu: Cách đóng gói các mẫu từ kho mẫu chính thức với chủ đề của bạn.
- Biến thể Kiểu dáng: Tài liệu về việc tạo ra các biến thể kiểu dáng theme.json tùy chỉnh, cung cấp cho người dùng của bạn các thiết kế thay thế để lựa chọn.

# Settings

```json
{
	"$schema": "https://schemas.wp.org/trunk/theme.json",
	"version": 2,
	"settings": {},
	"styles": {},
	"customTemplates": {},
	"templateParts": {},
	"patterns": []
}

// settings
{
	"version": 2,
	"settings": {
		"appearanceTools": false,
		"border": {},
		"color": {},
		"custom": {},
		"dimensions": {},
		"layout": {},
		"position": {},
		"shadow": {},
		"spacing": {},
		"typography": {},
		"useRootPaddingAwareAlignments": false,
		"blocks": {}
	}
}

// Ví dụ
{
	"version": 2,
	"settings": {
		"border": {
			"color": true,
			"radius": true,
			"style": true,
			"width": true
		},
		"color": {
			"link": true
		},
		"dimensions": {
			"minHeight": true
		},
		"position": {
			"sticky": true
		},
		"spacing": {
			"blockGap": true,
			"margin": true,
			"padding": true
		},
		"typography": {
			"lineHeight": true
		}
	}
}
```

# Sử dụng các liên kết sau để khám phá các cài đặt cụ thể mà bạn có thể cấu hình trong tệp theme.json của mình:
- appearanceTools: Một cài đặt tổng quát để kích hoạt nhiều cài đặt khác.
- border: Sử dụng để kiểm soát độ dày viền, kiểu, màu sắc, và bán kính.
- color: Cho phép bạn đăng ký một bảng màu, gradient, duotone và cấu hình các cài đặt liên quan đến màu sắc.
- custom: Một đối tượng để thêm các cài đặt tùy chỉnh, được xuất ra dưới dạng thuộc tính tùy chỉnh CSS.
- dimensions: Cho phép bạn cấu hình cài đặt chiều cao tối thiểu.
- layout: Sử dụng để thiết lập các thuộc tính bố cục như nội dung và chiều rộng rộng.
- lightbox: Cho phép bạn cấu hình tính năng lightbox ảnh.
- position: Hiện tại cho phép bạn xác định hỗ trợ vị trí cố định.
- shadow: Cho phép bạn cấu hình hỗ trợ box-shadow và xác định các tùy chọn bóng tùy chỉnh.
- spacing: Sử dụng để cấu hình các cài đặt liên quan đến khoảng cách, như lề và đệm,
- typography: Sử dụng để cấu hình các cài đặt liên quan đến kiểu chữ, xác định kích thước phông chữ tùy chỉnh và đăng ký các họ phông chữ.
- useRootPaddingAwareAlignments: Một cài đặt boolean cho việc làm việc của lề trên phần tử gốc.
- blocks: Một đối tượng để cấu hình các cài đặt theo từng khối.
- Handbook về Theme cũng duy trì một tài liệu tham khảo cho các cài đặt có sẵn dựa trên schema theme.json.

settings.appearanceTools cho phép kích hoạt nhiều tính năng liên quan đến thiết kế hoặc giao diện của một trang web. Theo mặc định, giá trị được đặt là false, vì vậy nếu bạn không muốn sử dụng thuộc tính này, bạn có thể không thêm nó vào theme.json của mình.

- Khi settings.appearanceTools được kích hoạt, bạn có thể bỏ qua việc thiết lập những thuộc tính đó một cách riêng lẻ.
+ Border
+ Color
+ Dimensions
+ Position
+ Spacing
+ Typography

# Kích hoạt tất cả nhưng vô hiệu hóa position
```json
{
	"version": 2,
	"settings": {
		"appearanceTools": true,
		"position": {
			"sticky": false
		}
	}
}
```

# Bạn có thể cấu hình mọi thứ từ kiểu chữ, đến màu sắc, đến khoảng cách, và nhiều hơn nữa cho từng khối cụ thể block
```json
{
	"version": 2,
	"settings": {
		"border": {},
		"color": {},
		"custom": {},
		"spacing": {},
		"typography": {}
	}
}
```

# First, add your global color palette in theme.json with two colors named base and contrast:
```json
{
	"version": 2,
	"settings": {
		"color": {
			"palette": [
				{
					"color": "#0284c7",
					"name": "Base",
					"slug": "base"
				},
				{
					"color": "#ffffff",
					"name": "Contrast",
					"slug": "contrast"
				}
			]
		}
	}
}

```

# settings.blocks[core/cover].color.palette trong tệp theme.json của bạn và truyền một mảng các màu tùy chỉnh
```json
{
	"version": 2,
	"settings": {
		"color": {
			"palette": [
				{
					"color": "#0284c7",
					"name": "Base",
					"slug": "base"
				},
				{
					"color": "#ffffff",
					"name": "Contrast",
					"slug": "contrast"
				}
			]
		},
		"blocks": {
			"core/cover": {
				"color": {
					"palette": [
						{
							"color": "#ea580c",
							"name": "Base",
							"slug": "base"
						},
						{
							"color": "#fff7ed",
							"name": "Contrast",
							"slug": "contrast"
						}
					]
				}
			}
		}
	}
}

```
# Default block settings
```json
{
	"version": 2,
	"settings": {
		"blocks": {
			"core/button": {
				"border": {
					"radius": true
				}
			},
			"core/pullquote": {
				"border": {
					"color": true,
					"radius": true,
					"style": true,
					"width": true
				}
			}
		}
	}
}
```

- Nếu bạn đang tự hỏi tại sao một số cài đặt toàn cục của bạn không áp dụng cho một số khối cụ thể, đặc biệt là Button và Pullquote, có lẽ là do chúng được thiết lập ở cấp độ khối. Bạn sẽ cần ghi đè chúng trong settings.blocks trong tệp theme.json của bạn nếu bạn muốn một hành vi khác.

#  Settings
```json
// Border
{
	"version": 2,
	"settings": {
		"border": {
			"color": false,
			"radius": false,
			"style": false,
			"width": false
		}
	}
}
// Color 
// - Các cài đặt khác, như duotone, gradients và palette chấp nhận một mảng giá trị. Đây là những nơi mà bạn có thể đăng ký các bộ màu tùy chỉnh, và bạn sẽ tìm hiểu cách tạo chúng trong tài liệu này.
{
	"version": 2,
	"settings": {
		"color": {
			"background": true,
			"custom": true,
			"customDuotone": true,
			"customGradient": true,
			"defaultDuotone": true,
			"defaultGradients": true,
			"defaultPalette": true,
			"duotone": [],
			"gradients": [],
			"link": true,
			"palette": [],
			"text": true
		}
	}
}
// Cài đặt màu sắc có thể chia thành bốn nhóm chính để bạn:
// Bật hoặc tắt các cài đặt trong giao diện người dùng.
// Bật hoặc tắt tùy chỉnh màu sắc của người dùng, bộ lọc duotone và gradient.
// Bật hoặc tắt các bộ màu, bộ lọc duotone và gradient cốt lõi của WordPress.
// Đăng ký các bộ màu, duotone và gradient tùy chỉnh.
// Trong các phần tiếp theo, bạn sẽ tìm hiểu cách mỗi phần này hoạt động.
// Mặc định, tất cả đều được đặt thành true, vì vậy các điều khiển liên quan sẽ xuất hiện trong giao diện khối. 
// Nếu bạn muốn vô hiệu hóa một tính năng, bạn chỉ cần đặt giá trị của nó thành false trong theme.json của bạn.
// Hiện tại, WordPress cho phép người dùng tùy chỉnh màu sắc cho ba tính năng khác nhau, mà bạn có thể kích hoạt hoặc vô hiệu hóa thông qua theme.json:

// - custom: Cho phép người dùng tạo và sử dụng các màu sắc tùy chỉnh.
// - customDuotone: Cho phép người dùng tạo bộ lọc hai tông màu tùy chỉnh (thường được sử dụng cho các lớp phủ  trên các khối có hình ảnh).
// - customGradient: Cho phép người dùng tạo các gradient nền tùy chỉnh.
// Mặc định, mỗi tính năng này đều được kích hoạt trong theme.json:
// User-customized duotone filters: một màu bóng và một màu nổi bật.
// User-customized gradients: gradient tùy chỉnh được kích hoạt mặc định.
// WordPress cho phép người dùng tùy chỉnh màu cho ba tính năng khác nhau, mà bạn có thể kích hoạt hoặc vô hiệu hóa thông qua theme.json
// defaultDuotone: Cho phép người dùng chọn từ các bộ preset duotone mặc định của WordPress (thường được sử dụng cho các khối chứa hình ảnh).
// defaultGradients: Cho phép người dùng chọn từ các bộ preset gradient nền mặc định của WordPress.
// defaultPalette: Cho phép người dùng chọn màu từ bảng màu mặc định của 
// Color presets are available for the Text, Background, Link, and potentially other color controls as shown in this screenshot:
// Bạn có thể thiết lập bộ màu cho ba tính năng khác nhau thông qua theme.json:
// duotone: Một mảng các bộ lọc duotone mà người dùng có thể chọn (thường được sử dụng cho các block có hình ảnh).
// gradients: Một mảng các đối tượng nền gradient mà người dùng có thể chọn từ.
// palette: Một mảng các đối tượng màu mà người dùng có thể chọn từ.


```
// Thuộc tính palette chấp nhận một mảng các đối tượng màu, và mỗi đối tượng đó có ba thuộc tính mà bạn phải đặt:
- color: Một giá trị màu CSS hợp lệ.
- name: Nhãn cho màu của bạn, sẽ được quốc tế hóa (để có thể dịch) và hiển thị cho người dùng trong một số ngữ cảnh, như các gợi ý công cụ.
- slug: Một slug/ID độc nhất định dạng máy đọc được cho màu của bạn. Điều này được sử dụng để tạo ra các thuộc tính tùy chỉnh CSS và các lớp CSS.

Ví dụ:  Giả sử bạn muốn đăng ký ba màu được đặt tên là Base, Contrast và Primary cho chủ đề của mình. Chúng sẽ xuất hiện trong bảng chọn màu như sau:
```json
{
	"version": 2,
	"settings": {
		"color": {
			"palette": [
				{
					"color": "#ffffff",
					"name": "Base",
					"slug": "base"
				},
				{
					"color": "#000000",
					"name": "Contrast",
					"slug": "contrast"
				},
				{
					"color": "#89CFF0",
					"name": "Primary",
					"slug": "primary"
				}
			]
		}
	}
}
// Custom gradients
{
	"version": 2,
	"settings": {
		"color": {
			"gradients": [
				{
					"gradient": "linear-gradient(to right, #10b981, #64a30d)",
					"name": "Emerald",
					"slug": "emerald"
				},
				{
					"gradient": "linear-gradient(-225deg,#231557,#44107a 29%,#ff1361 67%,#fff800)",
					"name": "Fabled Sunset",
					"slug": "fabled-sunset"
				}
			]
		}
	}
}

// Custom duotone filters

{
	"$schema": "https://schemas.wp.org/trunk/theme.json",
	"version": 2,
	"settings": {
		"color": {
			"duotone": [
				{
					"colors": [
						"#450a0a",
						"#fef2f2"
					],
					"name": "Red",
					"slug": "red"
				},
				{
					"colors": [
						"#172554",
						"#eff6ff"
					],
					"name": "Blue",
					"slug": "blue"
				}
			]
		}
	}
}

```
# The generated CSS custom property will follow this pattern: --wp--custom--{key}--{value}
- Suppose you wanted to use the key of fruit and give it a value of apple. Add this to your theme.json file:
```json
{
	"version": 2,
	"settings": {
		"custom": {
			"fruit": "apple"
		}
	}
}
// WordPress will then generate this CSS:
body {
	--wp--custom--fruit: apple;
}

// Tự động chia dấu gạch
// - WordPress sẽ tự động chia tên viết hoa chữ cái liền nhau thành các từ riêng biệt với dấu gạch. Ví dụ, lineHeight trong ví dụ dưới đây sẽ trở thành line-height:
{
	"version": 2,
	"settings": {
		"custom": {
			"lineHeight": "1.4em"
		}
	}
}
// This will create the following CSS:
body {
	--wp--custom--line-height: 1.4em;
}
// Nested properties
{
	"version": 2,
	"settings": {
		"custom": {
			"lineHeight": {
				"xs": "1",
				"sm": "1.25",
				"md": "1.5",
				"lg": "1.75"
			}
		}
	}
}
// This will generate this CSS:
body {
	--wp--custom--line-height--xs: 1;
	--wp--custom--line-height--sm: 1.25;
	--wp--custom--line-height--md: 1.5;
	--wp--custom--line-height--lg: 1.75;
}
// Use in theme.json styles: Bạn có thể truy cập vào mỗi thuộc tính line-height qua var:custom|line-height|md và var:custom|line-height|lg, tương ứng.
{
	"version": 2,
	"settings": {
		"custom": {
			"lineHeight": {
				"xs": "1",
				"sm": "1.25",
				"md": "1.5",
				"lg": "1.75"
			}
		}
	},
	"styles": {
		"typography": {
			"lineHeight": "var:custom|line-height|md"
		},
		"blocks": {
			"core/paragraph": {
				"typography": {
					"lineHeight": "var:custom|line-height|lg"
				}
			}
		}
	}
}
// Bạn cũng có thể tham chiếu đến các giá trị thông qua các thuộc tính tùy chỉnh CSS của chúng. Ví dụ, thay vì sử dụng var:custom|line-height|md, bạn có thể sử dụng var( --wp--custom--line-height--md ).
// Use in CSS
// Có những lúc bạn có thể cần tham chiếu trực tiếp đến các thuộc tính tùy chỉnh CSS được tạo ra, chẳng hạn như trong tệp style.css của bạn. Để làm điều này, bạn phải sử dụng tên thuộc tính tùy chỉnh CSS.

// Giả sử bạn cần chỉ đến một lớp với tên là .example-class và gán cho nó line-height là sm mà bạn đã đăng ký. Sử dụng mã này trong CSS của bạn:

.example-class {
	line-height: var( --wp--custom--line-height--sm );
}


```

# Dimensions
- minHeight: Một giá trị boolean để bật hỗ trợ của khối cho điều khiển Chiều cao Tối thiểu.
```json
{
	"version": 2,
	"settings": {
		"dimensions": {
			"minHeight": false
		}
	}
}
// 

```

# Sự khác biệt chính giữa Actions và Filters:
- Action: Là 1 hook gọi thực thi và ko trả về dữ liệu
- Filters: gọi thực thi và trả về dữ liệu tiếp tục sử dụng tiếp

# Load từ file function.php
```php
// Enqueue styles and scripts
function theme_enqueue_styles_and_scripts() {
    // Enqueue main stylesheet
    wp_enqueue_style( 'theme-style', get_stylesheet_uri() );

    // Enqueue custom stylesheet
    wp_enqueue_style( 'theme-custom', get_template_directory_uri() . '/assets/css/custom.css', array(), '1.0.0', 'all' );

    // Enqueue script
    wp_enqueue_script( 'theme-script', get_template_directory_uri() . '/assets/js/script.js', array('jquery'), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles_and_scripts' );

// Load header.php
function theme_get_header() {
    get_template_part( 'parts/header' );
}
add_action( 'theme_header', 'theme_get_header' );

// Load footer.php
function theme_get_footer() {
    get_template_part( 'parts/footer' );
}
add_action( 'theme_footer', 'theme_get_footer' );

// Load index.php
function theme_get_index() {
    get_template_part( 'index' );
}
add_action( 'theme_index', 'theme_get_index' );

// Cách sử dụng
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trang Chủ</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            width: 100%;
            margin: auto;
        }
        header {
            background-color: #333;
            color: #fff;
            padding: 10px 0;
            text-align: center;
        }
        nav {
            background-color: #555;
            color: #fff;
            padding: 10px 0;
            text-align: center;
        }
        nav a {
            color: #fff;
            text-decoration: none;
            margin: 0 10px;
        }
        section {
            padding: 20px;
            background-color: #fff;
            margin-top: 20px;
        }
        footer {
            background-color: #333;
            color: #fff;
            padding: 10px 0;
            text-align: center;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>Trang Chủ</h1>
            <?php do_action('theme_header')  ?>
        </header>
        <nav>
            <a href="#">Trang Chủ</a>
            <a href="#">Bài Viết</a>
            <a href="#">Liên Hệ</a>
        </nav>
        <section>
            <h2>Giới Thiệu</h2>
            <p>Xin chào! Đây là trang web của chúng tôi.</p>
            <p>Chúng tôi chuyên cung cấp các dịch vụ về PHP.</p>
        </section>
    </div>
    <footer>
        <p>Bản quyền &copy; 2024. Đã đăng ký.</p>
        <?php do_action('theme_footer')  ?>
    </footer>
</body>
</html>


```

# Đăng ký filter
```php
// Đăng ký filter để thay đổi nội dung của tiêu đề bài viết
function add_custom_content_to_title($title) {
    $custom_content = ' - Custom Content';
    $title .= $custom_content;
    return $title;
}
add_filter('the_title', 'add_custom_content_to_title');


```


# Function.php là gì
- Kết quả tương tự có thể được tạo ra bằng cách sử dụng một plugin hoặc functions.php. Nếu bạn đang tạo ra các tính năng mới mà nên có sẵn bất kể trang web trông như thế nào, thì tốt nhất là đặt chúng vào một plugin.

# Yêu cầu văn bản tiêu đề cụ thể, duy nhất;
- Được lưu trữ trong wp-content/plugins, thường là trong một thư mục con;
- Chỉ thực thi khi trang được tải khi kích hoạt;
- Áp dụng cho tất cả các theme; và
- Nên có một mục đích duy nhất - ví dụ, cung cấp tính năng tối ưu hóa công cụ tìm kiếm hoặc giúp sao lưu.

# Trong khi đó, functions.php:
- Không yêu cầu văn bản tiêu đề duy nhất;
- Được lưu trữ trong thư mục con của theme trong wp-content/themes;
- Chỉ thực thi khi trong thư mục theme đang hoạt động;
- Áp dụng chỉ cho theme đó (nếu theme được thay đổi, các tính năng không thể sử dụng được nữa); và
- Có thể có nhiều khối mã được sử dụng cho nhiều mục đích khác nhau.

# Với functions.php, bạn có thể:
- Sử dụng các hooks của WordPress. Ví dụ, với bộ lọc excerpt_length, bạn có thể thay đổi độ dài trích dẫn bài viết của bạn (mặc định là 55 từ).
- Bật các tính năng của WordPress với add_theme_support(). Ví dụ, bật hình ảnh đặc trưng, định dạng bài viết và menu điều hướng.
- Định nghĩa các hàm bạn muốn sử dụng lại trong nhiều tệp mẫu theme khác nhau.

-> Trong WordPress, xung đột tên có thể xảy ra khi hai hoặc nhiều hàm, lớp hoặc biến có cùng tên. Điều này có thể gây ra lỗi hoặc hành vi không mong muốn trong một trang web WordPress. Đó là trách nhiệm của cả nhà phát triển theme và nhà phát triển plugin để tránh xung đột tên trong mã của họ. Nhà phát triển theme nên đảm bảo rằng các hàm, lớp và biến của họ có tên duy nhất không xung đột với các tên được sử dụng bởi lõi WordPress hoặc các plugin khác. Họ cũng nên thêm tiền tố cho các tên hàm và lớp của mình bằng một định danh duy nhất, chẳng hạn như tên hoặc viết tắt của theme, để giảm thiểu khả năng xung đột tên.


# Example wordpress
```php
if ( ! function_exists( 'myfirsttheme_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress  
	 * features.
	 *
	 * It is important to set up these functions before the init hook so
	 * that none of these features are lost.
	 *
	 *  @since MyFirstTheme 1.0
	 */
	function myfirsttheme_setup() { ... }
```
Chú ý: Trong ví dụ trên, hàm myfirsttheme_setup được bắt đầu nhưng không được kết thúc. Hãy đảm bảo kết thúc các hàm của bạn.

# Automatic Feed Links
```php
add_theme_support( 'automatic-feed-links' );
```

# Navigation Menus
```php
register_nav_menus( array(
    'primary'   => __( 'Primary Menu', 'myfirsttheme' ),
    'secondary' => __( 'Secondary Menu', 'myfirsttheme' )
) );

```

# Load Text Domain
```php
load_theme_textdomain( 'myfirsttheme', get_template_directory() . '/languages' );

```

# Post Thumbnails
```php
add_theme_support( 'post-thumbnails' );

```

# Post Formats
```php
add_theme_support( 'post-formats',  array( 'aside', 'gallery', 'quote', 'image', 'video' ) );

```
# Theme support in block themes
```php
add_theme_support( 'post-thumbnails' );
add_theme_support( 'responsive-embeds' );
add_theme_support( 'editor-styles' );
add_theme_support( 'html5', array( 'style','script' ) );
add_theme_support( 'automatic-feed-links' ); 
```

# Initial Setup Example - (Không khuyến khích)
```php
if ( ! function_exists( 'myfirsttheme_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various
	 * WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme
	 * hook, which runs before the init hook. The init hook is too late
	 * for some features, such as indicating support post thumbnails.
	 */
	function myfirsttheme_setup() {

    /**
	 * Make theme available for translation.
	 * Translations can be placed in the /languages/ directory.
	 */
		load_theme_textdomain( 'myfirsttheme', get_template_directory() . '/languages' );

		/**
		 * Add default posts and comments RSS feed links to <head>.
		 */
		add_theme_support( 'automatic-feed-links' );

		/**
		 * Enable support for post thumbnails and featured images.
		 */
		add_theme_support( 'post-thumbnails' );

		/**
		 * Add support for two custom navigation menus.
		 */
		register_nav_menus( array(
			'primary'   => __( 'Primary Menu', 'myfirsttheme' ),
			'secondary' => __( 'Secondary Menu', 'myfirsttheme' ),
		) );

		/**
		 * Enable support for the following post formats:
		 * aside, gallery, quote, image, and video
		 */
		add_theme_support( 'post-formats', array( 'aside', 'gallery', 'quote', 'image', 'video' ) );
	}
endif; // myfirsttheme_setup
add_action( 'after_setup_theme', 'myfirsttheme_setup' );

// Kiểm tra tồn tại của biến
if ( ! isset ( $content_width) ) {
    $content_width = 800;
}
```


# Full Code - (Không khuyến khích)
```php
/**
 * MyFirstTheme's functions and definitions
 *
 * @package MyFirstTheme
 * @since MyFirstTheme 1.0
 */

/**
 * First, let's set the maximum content width based on the theme's
 * design and stylesheet.
 * This will limit the width of all uploaded images and embeds.
 */
if ( ! isset( $content_width ) ) {
	$content_width = 800; /* pixels */
}


if ( ! function_exists( 'myfirsttheme_setup' ) ) :

	/**
	 * Sets up theme defaults and registers support for various
	 * WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme
	 * hook, which runs before the init hook. The init hook is too late
	 * for some features, such as indicating support post thumbnails.
	 */
	function myfirsttheme_setup() {

		/**
		 * Make theme available for translation.
		 * Translations can be placed in the /languages/ directory.
		 */
		load_theme_textdomain( 'myfirsttheme', get_template_directory() . '/languages' );

		/**
		 * Add default posts and comments RSS feed links to <head>.
		 */
		add_theme_support( 'automatic-feed-links' );

		/**
		 * Enable support for post thumbnails and featured images.
		 */
		add_theme_support( 'post-thumbnails' );

		/**
		 * Add support for two custom navigation menus.
		 */
		register_nav_menus( array(
			'primary'   => __( 'Primary Menu', 'myfirsttheme' ),
			'secondary' => __( 'Secondary Menu', 'myfirsttheme' ),
		) );

		/**
		 * Enable support for the following post formats:
		 * aside, gallery, quote, image, and video
		 */
		add_theme_support( 'post-formats', array( 'aside', 'gallery', 'quote', 'image', 'video' ) );
	}
endif; // myfirsttheme_setup
add_action( 'after_setup_theme', 'myfirsttheme_setup' );


```
- Lý do: Nó sẽ chỉ load file /templates/index.html
- Còn file .php nó sẽ bị lỗi bị đè css tất cả các route

# Cách 2 Khuyến khích. 
- Đặt index.php ra ngoài cấp cao nhất, vì nó sẽ tự load thẳng lên

# Layout settings
```json
{
	"version": 2,
	"settings": {
		"layout": {
			"contentSize": "40rem",
			"wideSize": "64rem"
		}
	}
}
```
- Không phải mọi chủ đề đều có lợi ích từ việc có một kích thước rộng. Tùy thuộc vào thiết kế, bố cục của một chủ đề có thể đơn giản không có đủ không gian cho các khối để vượt ra khỏi khối chứa của chúng. Trong những trường hợp đó, bạn không cần phải đặt giá trị này.

# LightBox
```json
"blocks": {
			"core/image": {
				"lightbox": {
					"allowEditing": true
				}
			}
		}

```

- lightbox là một cài đặt được sử dụng để kích hoạt tính năng hộp sáng cho các khối hình ảnh. Khi được kích hoạt, tính năng này cho phép mở rộng hình ảnh trong một cửa sổ phóng to khi người dùng nhấp vào hình ảnh đó trên trang web.

# Shadow 
Appearance -> editors -> Styles -> Shadow
```json
{
	"version": 2,
	"settings": {
		"shadow": {
			"defaultPresets": true,
			"presets": [
				{
					"name": "Natural",
					"slug": "natural",
					"shadow": "6px 6px 9px rgba(0, 0, 0, 0.2)"
				},
				{
					"name": "Deep",
					"slug": "deep",
					"shadow": "12px 12px 50px rgba(0, 0, 0, 0.4)"
				},
				{
					"name": "Sharp",
					"slug": "sharp",
					"shadow": "6px 6px 0px rgba(0, 0, 0, 0.2)"
				},
				{
					"name": "Outlined",
					"slug": "outlined",
					"shadow": "6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1)"
				},
				{
					"name": "Crisp",
					"slug": "crisp",
					"shadow": "6px 6px 0px rgba(0, 0, 0, 1)"
				},
				{
					"name": "Small",
					"slug": "sm",
					"shadow": "0 1px 2px 0 rgb(0 0 0 / 0.05)"
				},
				{
					"name": "Medium",
					"slug": "md",
					"shadow": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)"
				},
				{
					"name": "Large",
					"slug": "lg",
					"shadow": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
				},
				{
					"name": "XL",
					"slug": "xl",
					"shadow": "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"
				},
				{
					"name": "2XL",
					"slug": "2-xl",
					"shadow": "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
				},
				{
					"name": "Inner",
					"slug": "inner",
					"shadow": "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)"
				}
			]
		}
	}
}
```
```css
body {
	--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);
	--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);
	--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);
	--wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);
	--wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);
}
```

# Spacing
- Khoảng cách là một trong những phần phức tạp nhất của thiết kế web. Nó bao gồm việc kết hợp các yếu tố như lề, độ lót, khoảng trống, chiều cao dòng, cỡ chữ và nhiều hơn nữa vào một luồng hòa hợp.
- Đối tượng settings.spacing có một số thuộc tính mà bạn có thể cấu hình:
+ blockGap: Xác định xem có kích hoạt tùy chọn Khoảng cách Khối cho các khối hỗ trợ nó hay không. Có thể là một giá trị boolean (true/false). Mặc định là null. Nếu đặt thành null, CSS được tạo ra bởi WordPress cũng bị vô hiệu hóa.
+ margin: Xác định xem có kích hoạt tùy chọn Lề cho các khối hỗ trợ hay không. Mặc định là false.
+ padding: Xác định xem có kích hoạt tùy chọn Độ lót cho các khối hỗ trợ hay không. Mặc định là false.
+ customSpacingSize: Xác định xem có cho phép người dùng nhập các giá trị khoảng cách tùy chỉnh cho các khối hỗ trợ hay không. Mặc định là true.
+ spacingScale: Một đối tượng cấu hình để xác định một thang đo khoảng cách tùy chỉnh. WordPress xác định một thang đo mặc định với bảy bước tăng lên 1.5rem.
+ spacingSizes: Một mảng các đối tượng kích thước tùy chỉnh có thể ghi đè lên thang đo khoảng cách hoặc thêm vào đó.
+ units: Một mảng các đơn vị CSS có thể chọn từ khi thêm khoảng cách tùy chỉnh.

# Các đơn vị css
The currently-allowed possible units that you can choose from are:
- px
- %
- em
- rem
- vw
- vh
- vmin
- vmax
- ch
- ex
- cm
- mm
- in
- pc
- pt

# Spacing scale and sizes
- There are two methods for registering your spacing presets:
+ spacingScale: A generated scale based on your configuration values.
+ spacingSizes: Completely custom-defined spacing sizes.

- WordPress generates a default spacing scale, as shown in this table:
--wp-preset--spacing--20	0.44rem	2X-Small
--wp-preset--spacing--30	0.67rem	X-Small
--wp-preset--spacing--40	1rem	Small
--wp-preset--spacing--50	1.5rem	Medium
--wp-preset--spacing--60	2.25rem	Large
--wp-preset--spacing--70	3.38rem	X-Large
--wp-preset--spacing--80	5.06rem	2X-Large

+ operator: Toán tử được sử dụng để tăng thang đo. Các tùy chọn có sẵn là + (cộng) và * (nhân). Giá trị mặc định là *.
+ increment: Một số để tăng thang đo khi được sử dụng cùng với cài đặt toán tử. Giá trị mặc định là 1.5.
+ steps: Tổng số bước trong thang đo. Giá trị mặc định là 7.
+ mediumStep: Giá trị trung bình của thang đo. Giá trị mặc định là 1.5.
+ unit: Một đơn vị khoảng cách CSS hợp lệ. Các tùy chọn có sẵn là px, em, rem, vh, vw và %. Giá trị mặc định là rem.

# Bảng này đại diện cho thang đo khoảng cách tùy chỉnh của bạn (so sánh với thang đo mặc định để xem những thay đổi đã xảy ra):
--wp-preset--spacing--20	0.25rem	2X-Small
--wp-preset--spacing--30	0.5rem	X-Small
--wp-preset--spacing--40	0.75rem	Small
--wp-preset--spacing--50	1rem	Medium
--wp-preset--spacing--60	1.25rem	Large
--wp-preset--spacing--70	1.5rem	X-Large
--wp-preset--spacing--80	1.75rem	2X-Large

- Thuộc tính spacingSizes cho phép bạn xác định một mảng các đối tượng kích thước. Mỗi đối tượng kích thước chấp nhận ba giá trị:
+ name: Tiêu đề có thể đọc được cho kích thước, có thể được dịch.
+ size: Một kích thước CSS hợp lệ. Điều này có thể là một số và đơn vị, một kích thước linh hoạt sử dụng clamp(), hoặc một tham chiếu đến một thuộc tính CSS tùy chỉnh khác.
+ slug: Slug cho kích thước, sẽ được thêm vào một thuộc tính tùy chỉnh CSS được tạo ra: --wp--preset--spacing--{slug}.

- This table represents your custom spacing sizes:
--wp-preset--spacing--10	0.25rem	Step 1
--wp-preset--spacing--20	0.5rem	Step 2
--wp-preset--spacing--30	0.75rem	Step 3
--wp-preset--spacing--40	1rem	Step 4
--wp-preset--spacing--50	1.25rem	Step 5
https://developer.wordpress.org/themes/global-settings-and-styles/settings/spacing/

...

# Typography
Bật và tắt các tùy chọn về kiểu chữ

Có một số thiết lập chỉ để bật hoặc tắt các phần tử trong giao diện người dùng. Mỗi thuộc tính này chấp nhận một giá trị boolean, có nghĩa là bạn có thể đặt chúng thành true hoặc false.

Không phải mọi khối đều hỗ trợ mọi thiết lập về kiểu chữ. Một số chỉ cụ thể cho một khối duy nhất. Ví dụ, thuộc tính dropCap chỉ hoạt động cho các khối Đoạn văn. Những thiết lập khác được sử dụng rộng rãi bởi hầu hết các khối có chữ, như customFontSize.


- customFontSize: Cho phép người dùng nhập kích thước font tùy chỉnh. Mặc định là true.
- dropCap: Cho phép người dùng kích hoạt drop-cap cho chữ cái đầu tiên của khối Đoạn văn. Mặc định là true.
- fontStyle: Cho phép người dùng chọn kiểu chữ tùy chỉnh. Mặc định là true.
- fontWeight: Cho phép người dùng chọn trọng lượng chữ tùy chỉnh. Các phạm vi trọng lượng tương ứng với các trọng lượng chữ thông thường từ Mảnh đến Đậm. Mặc định là true.
- letterSpacing: Cho phép người dùng nhập một giá trị khoảng cách giữa các chữ tùy chỉnh. Mặc định là false.
- lineHeight: Cho phép người dùng nhập một chiều cao dòng tùy chỉnh cho văn bản. Không có cách nào để đăng ký các bộ cài đặt chiều cao dòng, vì vậy tùy chọn này cho phép nhập hoàn toàn tùy chỉnh. Mặc định là false.
- textColumns: Cho phép hiển thị một tùy chọn cột cho văn bản của khối. Mặc định là false.
- textDecoration: Cho phép người dùng đặt décor cho văn bản của một khối. Các tùy chọn có sẵn là None, Underline và Strikethrough. Mặc định là true.
- textTransform: Cho phép người dùng thay đổi kiểu chữ hoa thường cho văn bản của một khối. Các tùy chọn có sẵn là None, Uppercase, Lowercase và Capitalize. Mặc định là true.
- writingMode: Cho phép hiển thị Hướng văn bản trong giao diện, cho phép người dùng chọn giữa văn bản Ngang và Dọc. Mặc định là false.

```javascript
{
	"version": 2,
	"settings": {
		"typography": {
			"customFontSize": true,
			"dropCap": true,
			"fontStyle": true,
			"fontWeight": true,
			"letterSpacing": true,
			"lineHeight": false,
			"textColumns": false,
			"textDecoration": true,
			"textTransform": true,
			"writingMode": false,
			"fontFamilies": []
		}
	}
}
```

- Typography > Font 
# Đăng ký font hệ thống
- Primary: một ngăn chuyển tiếp của font serif sẽ nhìn tốt trên các thiết bị hiện đại.
- Secondary: font giao diện người dùng hệ thống của người dùng.

```css
body {
	--wp--preset--font-family--primary: Charter, 'Bitstream Charter', 'Sitka Text', Cambria, serif;
	--wp--preset--font-family--secondary: system-ui, sans-serif;
}


```
var( --wp--preset--font-family--{$slug} ) directly in CSS.
- These examples use primary and secondary since those are widely used terms. It’s best to avoid naming your slugs so that they match the current font family.

# fontFace
- fontFamily: A valid CSS font-family descriptor.
- fontWeight: A range of CSS font-weight values.
- fontStyle: A valid CSS font-style value.
- fontStretch: A valid CSS font stretch value.
- src: An array of font file URLs where the font files are located (this can be used to support multiple formats, but only one is required).

# Registering web fonts (font faces)
- The src property is unique in that it allows you to reference a URL that is relative to the theme.json file in your theme. Use the "file:./path/to/file.ext" format to reference a font bundled with your theme.

# Custom font sizes Typography > Size
- fluid: Whether to enable fluid font sizes that scale up on large screens and down on smaller screens. This can be overridden for individual custom sizes. Defaults to false.
- fontSizes: An array of font size objects that you can use to customize the available presets that users can choose from. WordPress registers the default sizes of small, medium, large, and x-large.

```javascript
body {
	--wp--preset--font-size--small: 13px;
	--wp--preset--font-size--medium: 20px;
	--wp--preset--font-size--large: 36px;
	--wp--preset--font-size--x-large: 42px;
}

// WordPress also generates custom CSS classes for each font size preset using the .has-{$slug}-font-size
.has-small-font-size{
	font-size: var(--wp--preset--font-size--small) !important;
}

.has-medium-font-size{
	font-size: var(--wp--preset--font-size--medium) !important;
}

.has-large-font-size{
	font-size: var(--wp--preset--font-size--large) !important;
}

.has-x-large-font-size{
	font-size: var(--wp--preset--font-size--x-large) !important;
}
```
# Enabling fluid typography
- "fluid": true
- Thì wordpress sẽ tự generated như bên dưới
```css
body {
	--wp--preset--font-size--small: 13px;
	--wp--preset--font-size--medium: clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.852), 20px);
	--wp--preset--font-size--large: clamp(22.041px, 1.378rem + ((1vw - 3.2px) * 1.983), 36px);
	--wp--preset--font-size--x-large: clamp(25.014px, 1.563rem + ((1vw - 3.2px) * 2.413), 42px);
}
```


# Registering custom font size presets
```javascript
// Như cách cũ
```

# Use Root Padding Aware Alignments
- Thuộc tính settings.useRootPaddingAwareAlignments có thể là một trong những thiết lập khó hiểu nhất trong tệp theme.json. Nó không liên kết với một tùy chọn giao diện nào. Cũng không được sử dụng để đăng ký các bộ cài đặt trước. Thay vào đó, nó được sử dụng để cấu hình nơi mà WordPress đặt các kiểu padding ngang của chủ đề của bạn.

- Root padding là padding được áp dụng cho phần tử "gốc" của trang web. Trong trường hợp của các chủ đề WordPress, đó là phần tử <body>. Để tùy chỉnh khoảng cách cho phần tử gốc, bạn phải chỉ định các kiểu cho styles.spacing.padding trong tệp theme.json.
# How does this work?
```css
body {
	--wp--style--root--padding-top: 0;
	--wp--style--root--padding-right: 2rem;
	--wp--style--root--padding-bottom: 0;
	--wp--style--root--padding-left: 2rem;
}

// second
.has-global-padding {
	padding-right: var(--wp--style--root--padding-right);
	padding-left: var(--wp--style--root--padding-left);
}

// Inner blocks use content width
<div class="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
	<!-- nested blocks... -->
</div>

```
# Layout > Inner blocks use content width

# Reference
https://developer.wordpress.org/themes/global-settings-and-styles/settings/settings-reference/



# The styles property
- Appearance > Editor > Styles
- Thuộc tính styles trong theme.json cho phép bạn cấu hình các thiết lập ở cấp độ toàn cầu, cho các phần tử cá nhân và các khối cá nhân. WordPress hỗ trợ một tập hợp tiêu chuẩn con của đặc tả CSS, nhưng cũng cho phép bạn thêm CSS tùy chỉnh trực tiếp trong tệp theme.json của bạn.
```json
{
	"version": 2,
	"styles": {
		"color": {
			"text": "#000000",
			"background": "#ffffff"
		},
		"elements": {
			"button": {
				"color": {
					"text": "#ffffff",
					"background": "#000000"
				}
			}
		},
		"blocks": {
			"core/code": {
				"color": {
					"text": "#ffffff",
					"background": "#000000"
				}
			}
		}
	}
}
```

# theme.json supports styles at three different levels:
- Root (global)
- Elements
- Blocks

# Styling the root element 
# Các phần tử hiện đang được hỗ trợ là
- https://developer.wordpress.org/themes/global-settings-and-styles/styles/applying-styles/
```css
button: Áp dụng cho các phần tử <button> và các liên kết giống nút như được sử dụng cho khối Nút.
caption: Áp dụng cho các chú thích đa phương tiện, được bao bọc trong một phần tử <figcaption>.
cite: Áp dụng cho phần tử <cite> khi được sử dụng cho các trích dẫn, như được sử dụng cho các khối Trích dẫn và Trích dẫn Đặc biệt.
heading: Áp dụng cho tất cả các phần tử tiêu đề từ <h1> đến <h6>, nhưng chúng có thể được ghi đè cho từng tiêu đề cụ thể.
h1 - h6: Mỗi trong các phần tử <h1> đến <h6> có thể được thiết kế riêng lẻ.
link: Áp dụng cho thẻ <a>, được sử dụng để tạo liên kết.

```
# "WordPress sử dụng một hệ thống mẫu để xử lý đầu ra của nội dung trên phía giao diện của một trang web."
- Mẫu là gì?
- Nói một cách ngắn gọn, các mẫu lấy dữ liệu động và đóng gói nó vào đánh dấu HTML có cấu trúc, sau đó gửi đến trình duyệt. Đây không phải là một khái niệm cách mạng, và nó là một trong những khái niệm mà gần như mọi hệ thống trang web với dữ liệu động đều sử dụng.

# Hệ thống mẫu trong WordPress thực hiện một số điều quan trọng:
- Phân tích cú pháp khối, được sử dụng để tham chiếu đến dữ liệu tĩnh và động.
- Truy xuất dữ liệu động (ví dụ: nội dung bài viết, tùy chọn trang web, v.v.) từ cơ sở dữ liệu.
- Gửi HTML kết quả đến trình duyệt của người truy cập.

-> Trình chỉnh sửa trang web cũng cho phép người dùng của chủ đề của bạn ghi đè các mẫu khối và phần từ giao diện quản trị. Bất kỳ thay đổi nào người dùng thực hiện đều được lưu trong cơ sở dữ liệu của họ. Những tùy chỉnh này được lưu trữ cùng một cách trong cơ sở dữ liệu như chúng được lưu trong các tệp mẫu: dưới dạng đánh dấu khối.
# Mẫu so với HTML thuần
- Nếu bạn đã học một số HTML cơ bản, bạn có thể đã xây dựng ra một hoặc hai trang web. Nhưng việc xây dựng một trang web đầy đủ với HTML có thể rất khó khăn vì bạn phải liên tục cập nhật mọi tệp mỗi khi bạn thực hiện một thay đổi toàn cầu trên toàn bộ trang web.

- Điều này bởi vì HTML là một ngôn ngữ tài liệu. Nó không biết cách xử lý dữ liệu động, cũng như không thể được sử dụng để tải động các mảnh mã có thể tái sử dụng.

# Khả năng tái sử dụng
- Một trong những nguyên tắc của thiết kế web tốt là DRY (Don’t Repeat Yourself - Đừng Lặp Lại Mình). Khi xây dựng trang web với HTML thuần túy, bạn phải viết lại toàn bộ mã HTML đó cho mỗi trang của trang web.

- Ví dụ, hầu hết các phần đầu trang và cuối trang của trang web đều giống nhau trên mọi trang của trang web. Vì vậy, không có lý do gì để lặp lại mã đó cho mỗi trang. Hệ thống mẫu cho phép bạn viết mã một lần và sử dụng lại ở mọi nơi.

- Trong WordPress, những phần nhỏ, có thể tái sử dụng của một mẫu được gọi là phần mẫu (hoặc đơn giản là phần).

- Khác với các chủ đề cổ điển, WordPress tự động xuất một số phần tử HTML tiêu chuẩn cho các chủ đề khối. Điều này bao gồm các thẻ <html> và <body> đóng gói, <head>, và một <div class="wp-site-blocks"> bên ngoài. WordPress và các plugin cũng tự động xuất ra các meta, kiểu và kịch bản. So với các chủ đề cổ điển, các chủ đề khối không phải chịu trách nhiệm thêm các hook PHP.
- Let’s take a look at a fictional block’s markup in a template:
<!-- wp:namespace/slug {"align":"full"} /-->

- Như bạn có thể thấy, mã được bao quanh bởi một thẻ chú thích HTML mở <!-- và đóng /--> . Điều này cho biết với WordPress để tìm kiếm đánh dấu khối. Các đánh dấu sau đó có thể được phân chia thành bốn phần:
+ Prefix: The wp: prefix tells WordPress that this is a block that needs to be parsed and not just an ordinary HTML comment. This is necessary for core and third-party blocks.
+ Namespace: The namespace for the block to parse.
+ Slug: The slug for the block to parse.
+ Block Settings: Valid JSON code that represents the block’s settings.

- When working with core WordPress blocks, you do not use the block namespace. For example, the core/site-title block doesn’t include the preceding core/ when called:
<!-- wp:site-title /-->
-> References to third-party blocks must include the namespace.

# How to create block markup

Appearance > Editor > Templates
- Bạn có thể tùy chỉnh mẫu hoàn toàn bằng cách sử dụng Trình soạn thảo trực quan Site bằng cách thêm, di chuyển hoặc xóa các khối. Bạn cũng có thể điều chỉnh các cài đặt khối riêng lẻ.

- Trong trường hợp của mẫu Home, bạn sẽ dán mã khối vào tệp /templates/home.html của chủ đề của bạn.
- Ghi đè lên tệp mẫu /templates/home.html
- Xây dựng từ Trình soạn thảo Bài viết/Trang hoặc Trình soạn mã mẫu.
- From there, you can paste the copied code into your template or template part file. You can also switch to the Code Editor mode from this screen just like in the Site Editor and copy block markup in the same way.

# Let’s look at an example of an archive template (archive.html) and its block markup:
```html
<!-- wp:template-part {"slug":"header","tagName":"header"} /-->

<!-- wp:group {"tagName":"main","layout":{"type":"constrained"}} -->
<main class="wp-block-group">
	<!-- wp:template-part {"slug":"loop","align":"full"} /-->
</main>
<!-- /wp:group -->

<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
```

- Muốn có một footer khổng lồ ở dưới cùng của trang web? Bạn có thể làm điều đó bằng cách thêm các khối cụ thể bên trong một khối Nhóm ở cuối một mẫu.
- Muốn có một thanh bên bên cạnh khu vực nội dung? Không vấn đề gì. Bạn có thể đặt một khối Cột trong một hoặc nhiều mẫu của bạn để tạo ra bố cục đó.

# Các cấu trúc namespace
- template-part: /parts
- slug: :header, footer,...
- tagName


# Khác
- Technically, WordPress will also look in the /block-templates folder if it exists in your theme. This is for backward compatibility with an older version of WordPress. But it is recommended to always use the /templates folder instead.
# Làm thế nào các mẫu hoạt động?
- Appearance > Editor menu in the admin menu. Then click the Templates item in the sidebar:

# Màn hình này liệt kê tất cả các mẫu hiện có cho trang web, có thể đến từ ba vị trí:
- Các mẫu do người dùng tạo được lưu trong cơ sở dữ liệu
- Các mẫu từ thư mục /templates của chủ đề
- Các mẫu được thêm vào một cách động bởi các plugin

# Adding new templates
- You can create a new template by clicking the Add New Template (+ icon next to Templates heading). This will create a modal overlay as shown here:

# Custom templates
- You or your theme users can select custom templates from the Template setting in the Post/Page panel in the post editor sidebar
- Nhưng để phân phối mẫu của bạn với chủ đề của bạn, bạn phải thêm nó vào một tệp mẫu tùy chỉnh trong thư mục /templates của chủ đề của bạn
- Khi thêm một mẫu mới từ màn hình Mẫu, bạn cũng có thể tạo một mẫu tùy chỉnh. Từ trình lớp phủ Thêm Mẫu, có một tùy chọn có tên là Mẫu Tùy chỉnh. Bằng cách nhấp vào đó, bạn sẽ thêm một mẫu tùy chỉnh mới trong cơ sở dữ liệu của trang web của bạn.
- Quy tắc duy nhất khác là bạn phải đăng ký mẫu của mình thông qua tệp theme.json của bạn. Cách làm điều này được đề cập trong tài liệu Mẫu Tùy chỉnh trong chương Cài đặt Toàn cầu và Kiểu dáng.

# The template hierarchy by query type
- https://developer.wordpress.org/themes/templates/template-hierarchy/

# Front page hierarchy
- Front page displays setting under Settings > Reading in the admin.
- If Your latest posts is chosen for the Front page displays setting, the hierarchy is:
+ front-page.html
- If A static page is chosen for the Front page displays setting, the hierarchy is:
+ front-page.html

# Home hierarchy
-  the Home template also depends on the Front page displays setting under Settings > Reading in the admin. 
- If Your latest posts is chosen for the Front page displays setting, this hierarchy will be applied to the front page of the site:
+ front-page.html
+ home.html
+ index.html
- If A static page is chosen for the Front page displays setting and a page is selected for Posts page setting, the Home template hierarchy applies to the selected posts page (it does not apply to the front page in this case). The hierarchy in this scenario is:
+ home.html
+ index.html

# Singular hierarchy
- All singular templates can utilize a custom template, which you’ll see listed as {custom_template}.html in the sub-sections below, These almost always sit at the top of the hierarchy.  check out the “Custom Templates” section of the main Templates documentation.

# Single hierarchy
- Hệ thống phân cấp mẫu đơn được kích hoạt khi khách truy cập truy cập vào một bài đăng hoặc một mục nhập từ loại bài đăng tùy chỉnh. Hệ thống phân cấp sau đây được sử dụng để xác định mẫu:
+ {custom-template}.html
+ single-{post_type}-{post_name}.html
+ single-{post_type}.html
+ single.html
+ singular.html
+ index.html

- Loại bài đăng tùy chỉnh của sản phẩm có tên bài đăng (tức là slug) là áo xanh sẽ sử dụng hệ thống phân cấp này:
+ {custom-template}.html
+ single-product-blue-shirt.html
+ single-product.html
+ single.html
+ singular.html
+ index.html

# Page hierarchy
- Thứ tự mẫu Trang được kích hoạt khi một người truy cập đến một trang duy nhất trên trang web của bạn. Thứ tự mẫu này được sử dụng để xác định mẫu:
+ {custom-template}.html
+ page-{post_name}.html
+ page-{post_id}.html
+ page.html
+ index.html

- A page with a post name (i.e., slug) of about-me and an ID of 200 would use this hierarchy:
- {custom-template}.html
- page-about-me.html
- page-200.html
- page.html
- index.html


# Attachment (media) hierarchy
+ {mime_type}-{sub_type}.html
+ {sub_type}.html
+ {mime_type}.html
+ attachment.html

- If you had an attachment with the image/jpeg mime type, the image piece of that would be considered the mime_type, and the jpeg part would be the sub_type
- Suppose you had an attachment with the image/jpeg type and the post name (i.e., slug) of red-bird. The full attachment template hierarchy would be:
+ image-jpeg.html
+ jpeg.html
+ image.html
+ attachment.html
+ {custom-template}.html
+ single-attachment-red-bird.html
+ single-attachment.html
+ single.html
+ singular.html
+ index.html

# Privacy Policy page hierarchy
- privacy-policy.html

# Archive hierarchy
- Các lưu trữ trong WordPress hiển thị các bài viết được nhóm theo một loại siêu dữ liệu nào đó (ví dụ: ngày, tác giả, loại bài viết) hoặc theo một thuộc tính từ vựng thuế (danh mục, thẻ).

# Taxonomy term hierarchy
- Khi làm việc với các thuật ngữ thuế được hiển thị công cộng, mỗi thuật ngữ trong thuật ngữ thuế sẽ có trang lưu trữ riêng của nó. Bảng mẫu trang thuật ngữ thuế là:
+ taxonomy-{taxonomy_slug}-{term_slug}.html
+ taxonomy-{taxonomy_slug}.html
+ taxonomy.html
+ archive.html
+ index.html

- Nếu bạn có một thuật ngữ thuế với slug là "location" và một thuật ngữ trong thuật ngữ đó với slug là "alabama", thì bảng mẫu trang thuật ngữ thuế sẽ trở thành:
+ taxonomy-location-alabama.html
+ taxonomy-location.html
+ taxonomy.html
+ archive.html
+ index.html


# Category
- Khi một khách truy cập nhấp vào một liên kết danh mục và xem trang lưu trữ danh mục, thì bảng mẫu lưu trữ danh mục sau được sử dụng:
```css
category-{slug}.html
category-{id}.html
category.html
archive.html
index.html

```

- Khi xem một lưu trữ danh mục trong đó slug danh mục là tin-tức và ID danh mục là 123, bảng mẫu lưu trữ sẽ trở thành:
```css
category-news.html
category-123.html
category.html
archive.html
index.html
```

# Tag hierarchy
- Khi một khách truy cập nhấp vào một liên kết thẻ và xem trang lưu trữ thẻ, hệ thống bảng mẫu dưới đây được sử dụng:
```css
tag-{slug}.html
tag-{id}.html
tag.html
archive.html
index.html
// ví dụ
- When viewing a tag archive where the tag slug is flowers and the tag ID is 456, the template hierarchy becomes:
tag-flowers.html
tag-456.html
tag.html
archive.html
index.html
```

# Post type archive hierarchy
- Một loại bài đăng tùy chỉnh có thể có một trang lưu trữ công khai, thực tế là là một trang chỉ mục cho loại bài đăng đó, liệt kê các bài đăng mới nhất của nó theo mặc định (tuy nhiên, điều này có thể được lọc và thay đổi). Khi một khách truy cập xem một trang lưu trữ loại bài đăng, bảng mẫu sẽ như sau:
```css
archive-{post_type}.html
archive.html
index.html
// If you had a post type with the slug of portfolio_project, its hierarchy would be:
archive-portfolio_project.html
archive.html
index.html
```

- The core WordPress post post type uses the Home template hierarchy, and the default page and attachment post types do not have archive views.

# Author hierarchy
- Mặc dù sử dụng thuật ngữ "author", một lưu trữ tác giả là một phần hồ sơ người dùng và một phần lưu trữ tác giả bài đăng. Một URL lưu trữ được tạo ra cho tất cả người dùng trên một trang web WordPress, bất kể họ đã xuất bản bài đăng hay không. Nhưng mục đích của bảng mẫu tác giả thường là hiển thị một số dữ liệu về người dùng và liệt kê các bài đăng của họ.

```css
author-{user_nicename}.html
author-{user_id}.html
author.html
archive.html
index.html
// When visiting an author archive page for a user with a nicename of matt and an ID of 333, the author archive template hierarchy becomes:
author-matt.html
author-333.html
author.html
archive.html
index.html

```

# Date hierarchy
- Khi xem trang lưu trữ dựa trên ngày hoặc ngày giờ (ví dụ, lưu trữ hàng năm, hàng tháng, hàng tuần), thì cấu trúc bảng mẫu như sau:
```css
date.html
archive.html
index.html

```

# Search hierarchy
- Cấu trúc bảng mẫu tìm kiếm được sử dụng khi xem kết quả tìm kiếm trên trang web của bạn. Nó tương tự như lưu trữ vì nó liệt kê nhiều bài đăng, nhưng không được coi là một trang lưu trữ kỹ thuật. Cấu trúc bảng mẫu cho kết quả tìm kiếm là:
```css
search.html
index.html

```

# 404 (not found) hierarchy
```css
404.html
index.html
```

# Embed hierarchy
- Bảng mẫu nhúng được sử dụng khi một trang web nhúng một bài đăng từ trang web WordPress của bạn. WordPress bọc đầu ra trong một thẻ <iframe> và hiển thị nội dung đã nhúng theo mẫu.
```css
embed-{post_type}-{post_format}.php
embed-{post_type}.php
embed.php
```

- Nếu bạn đang nhúng một bài đăng có kiểu bài đăng là post và định dạng bài đăng là image, thì bảng mẫu sẽ như sau:
```css
embed-{post_type}-{post_format}.php
embed-{post_type}.php
embed.php

// If you were embedding a post with a post type of post and the post format of image, the hierarchy becomes:
embed-post-image.php
embed-post.php
embed.php

```
- WordPress sẽ sử dụng mẫu /wp-includes/theme-compat/embed.php được bao gồm trong core. Nó không trở về mẫu index như các loại mẫu khác.

# Template Parts
- Một số phần thông thường là:
+ Phần Đầu trang (Header)
+ Phần Chân trang (Footer)
+ Thanh bên (Sidebar)
+ Bình luận (Comments)

- <!-- wp:template-part {"slug":"your-template-part-slug"} /-->

- Khi WordPress gặp phải cú pháp khối Mẫu Phần trong quá trình phân tích cú pháp của nó, nó sẽ tìm kiếm một tệp có tên là /parts/your-template-part-slug.html trong thư mục chủ đề của bạn. Nếu tìm thấy, nó sẽ tải tệp và phân tích cú pháp các khối của nó.

<!-- wp:template-part {"slug":"header","tagName":"header"} /-->

<!-- Other block markup goes here. -->

<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->

- If this is the block markup included in a top-level template, WordPress would go through these steps:
1. Load the /parts/header.html file and parse its block markup.
2. Parse the template’s other block markup.
3. Load the /parts/footer.html file and parse its block markup.

- <!-- wp:site-title {"level":0} /-->

# Organizing template parts
parts/
    comments.html
    footer.html
    header.html
    sidebar.html

- Template Parts are categorized by template part areas (read “Template part areas” section below for more information). Each area lists the parts that are registered for it (note that General is the uncategorized area).

- Hiện tại, WordPress không hỗ trợ các phần mẫu lồng nhau. Ví dụ, bạn không thể tạo một thư mục /parts/header và đặt nhiều phần tiêu đề trong đó. Tất cả các phần mẫu phải được đặt trực tiếp trong thư mục /parts của chủ đề của bạn.

- Kỹ thuật, WordPress cũng sẽ tìm trong thư mục /block-template-parts nếu nó tồn tại trong chủ đề của bạn. Điều này là để tương thích ngược với phiên bản cũ hơn của WordPress. Tuy nhiên, khuyến nghị sử dụng /parts thay vì /block-template-parts.


# Xây dựng các phần mẫu
- Có thể viết mã block markup thủ công cho tất cả các phần mẫu của bạn. Tuy nhiên, trong hầu hết các trường hợp, bạn sẽ muốn làm việc trực tiếp trong admin của WordPress và trình biên tập hình ảnh của nó. Sau đó, di chuyển block markup từ trình biên tập vào các tệp phần mẫu của bạn như mô tả trong Giới thiệu về các Mẫu.

- Trình biên tập Trang và Mẫu:
- Trình Biên tập Phần Mẫu
- Trình Soạn Thảo Trang
- Trình Soạn Thảo Mẫu

# Cách chỉnh sửa các mẫu thông qua Trình Soạn Thảo Trang
- Cách sử dụng Trình Soạn Thảo Mẫu qua Biên tập Khối WordPress

# Đăng ký các phần mẫu
Mặc dù không bắt buộc, bạn nên đăng ký các phần mẫu thông qua theme.json. Việc làm này sẽ đảm bảo rằng chúng xuất hiện trong giao diện người dùng để sử dụng với các trình biên tập Trang và Mẫu với nhãn đẹp có thể dịch được.

# Việc đăng ký các phần mẫu được đề cập trong tài liệu về Các phần mục Mẫu dưới chương Global Settings and Styles.
- Appearance > Editor trong menu admin.


# Sau đó, nhấp vào mục Patterns trong thanh bên và cuộn để tìm phần Template Parts:
- Một lần nữa, bất kỳ phần nào bạn thêm qua trình biên tập đều được lưu trong cơ sở dữ liệu. Bạn phải tạo tệp phần mẫu trong thư mục /parts của bạn và sao chép block markup vào đó nếu bạn có ý định phân phối chủ đề của mình.

# By default, WordPress has three areas that you can register your templates for:
- uncategorized (labeled as General in the admin)
- header
- footer

# Registering custom areas
- You can register as many custom areas you want by adding a filter to the
-> default_wp_template_part_areas hook

- Each area definition must be an array with these key/value pairs defined:
+ area: The machine-readable slug for your template part area.
+ area_tag: The wrapping HTML tag to use for template parts assigned to this area. Can be one of the following:
- div
- article
- aside
- footer
- header
- main
- section
+ label: A human-readable label for your area, which may be translated.
+ description: A description of your area and what template parts belong to it, which may be translated.
+ icon: The icon to use for the area. Note that only header, footer, and sidebar are currently supported with everything else falling back to a default icon, at least until this ticket is addressed.

```php
add_filter( 'default_wp_template_part_areas', 'themeslug_template_part_areas' );

function themeslug_template_part_areas( array $areas ) {
	$areas[] = array(
		'area'        => 'loop',
		'area_tag'    => 'section',
		'label'       => __( 'Loop', 'themeslug' ),
		'description' => __( 'Custom description', 'themslug' ),
		'icon'        => 'layout'
	);

	return $areas;
}

```

- Suppose you also created a /parts/loop-default.html template part
```json
{
	"version": 2,
	"templateParts": [
		{
			"area": "loop",
			"name": "loop-default",
			"title": "Loop - Default"
		}
	]
}
```
- Bạn có thể đăng ký nhiều phần mẫu cho một khu vực theo cách cần thiết thông qua theme.json. Ví dụ, bạn có thể đăng ký một loop-home.html và loop-author.html để sử dụng trong các mẫu Home và Author của bạn, tương ứng. Nhưng những điều này chỉ là ví dụ. Giới hạn duy nhất là sự sáng tạo của bạn.
- Có nhiều lý do mà bạn có thể muốn đăng ký các khu vực tùy chỉnh. Để tìm hiểu sâu hơn về các lợi ích và tính năng của hệ thống này, hãy đọc bài viết Upgrading the site-editing experience with custom template part areas trên Blog của Nhà phát triển WordPress.

# Block and patterns
- Lưu ý rằng người dùng cũng có thể tạo và quản lý các mẫu tùy chỉnh từ màn hình Appearance > Editor > Patterns trong bảng điều khiển quản trị. Bạn cũng có thể sử dụng màn hình này để quản lý các mẫu của riêng bạn trong cài đặt phát triển của 

Group
- Heading
- Paragraph
- Buttons
	- Button


```php
<!-- wp:cover {"overlayColor":"contrast","align":"full"} -->
<div class="wp-block-cover alignfull"><span aria-hidden="true" class="wp-block-cover__background has-contrast-background-color has-background-dim-100 has-background-dim"></span><div class="wp-block-cover__inner-container"><!-- wp:group {"style":{"spacing":{"blockGap":"2.5rem"}},"layout":{"type":"constrained","wideSize":"%","contentSize":"75%"}} -->
<div class="wp-block-group"><!-- wp:heading {"textAlign":"center"} -->
<h2 class="wp-block-heading has-text-align-center">Welcome to My Site</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center"} -->
<p class="has-text-align-center">This is my little home away from home. Here, you will get to know me.  I'll share my likes, hobbies, and more.  Every now and then, I'll even have something interesting to say in a blog post.</p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
<div class="wp-block-buttons"><!-- wp:button {"className":"is-style-outline"} -->
<div class="wp-block-button is-style-outline"><a class="wp-block-button__link wp-element-button">See My Popular Posts →</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group --></div></div>
<!-- /wp:cover -->
```

# Đăng ký các mẫu khối
- Bằng cách đặt các tệp chứa mã khối vào thư mục /patterns trong chủ đề của bạn.
- Bằng cách gọi hàm register_block_pattern() thủ công.
- hướng dẫn này sẽ khuyến khích sử dụng thư mục /patterns ngoại trừ một số trường hợp ngoại lệ.


# WordPress will recognize any pattern file placed in your theme’s /patterns folder, and it will automatically register it for you, provided that it has a valid pattern file header.
- For pattern file headers, these are the keys that you can set:
+ Title: A human-readable title that can be translated.
+ Slug: A namespaced slug that is unique to your pattern in the form of namespace/pattern-name.
+ Categories: A comma-separated list of categories in which the pattern belongs.
+ Description: The long description of the registered pattern. Only shown to screen readers.
+ Viewport Width: The width of the <iframe> viewport when previewing the pattern (in pixels).
+ Inserter: Whether to show the pattern in the inserter. Defaults to true.
+ Keywords: A comma-separated list of keywords related to the pattern for search.
+ Block Types: A comma-separated list of block types to associate the pattern with.
+ Post Types: A comma-separated list of post types in which to limit the pattern. Defaults to all post types.
+ Template Types: A comma-separated list of template types the pattern fits with.

-> You should also be able to see your pattern listed under Appearance > Editor > Patterns in the WordPress admin.

# Để đăng ký các mẫu khối bằng PHP, bạn phải sử dụng hàm register_block_pattern(). Dưới đây là dạng của hàm này:
```php
register_block_pattern(
    string $name,
    array $settings
);

```
- The function accepts two parameters and returns true or false, depending on whether the pattern was successfully registered:
- $name (string): Tên của mẫu.
- $settings (array): Một mảng các cài đặt cho mẫu, bao gồm các khóa sau:
	+ title (string): Tiêu đề của mẫu.
	+ description (string): Mô tả của mẫu.
	+ content (string): Nội dung HTML của mẫu.
	+ categories (array): Một mảng các thể loại mà mẫu thuộc về.
	+ viewportWidth (int): Chiều rộng của khung nhìn khi xem trước mẫu.
	+ keywords (array): Một mảng các từ khóa liên quan đến mẫu.



```php
add_action( 'init', 'themeslug_register_patterns' );

function themeslug_register_patterns() {
	register_block_pattern( 'themeslug/hero', array(
		'title'      => __( 'Hero', 'themeslug' ),
		'categories' => array( 'featured' ),
		'source'     => 'theme',
		'content'    => '<!-- Block pattern goes here. -->'
	) );
}

```

- bao gồm các mẫu trong các mẫu hoặc phần mẫu của bạn bằng cách thêm đánh dấu khối Mẫu và chuyển tiếp slug của mẫu.
```php
<!-- wp:pattern {"slug":"themeslug/hero"} /-->
```

- chẳng hạn như /templates/home.html hoặc /templates/index.html phía dưới tiêu đề. Mẫu của bạn với mã mẫu sẽ trông giống như sau:

```php
<!-- wp:template-part {"slug":"header"} /-->

<!-- wp:pattern {"slug":"themeslug/hero"} /-->

<!-- Some other blocks. /-->

<!-- wp:template-part {"slug":"footer"} /-->

// full code
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <header>
        <!-- Your header content here -->
    </header>

    <main>
        <!-- Your main content here -->

        <!-- Pattern block markup -->
        <?php
        // Replace 'my-custom-pattern' with the actual slug of your pattern
        echo '<!-- wp:core/template-part {"slug":"my-custom-pattern"} /-->';
        ?>
    </main>

    <footer>
        <!-- Your footer content here -->
    </footer>

    <?php wp_footer(); ?>
</body>
</html>

```

- Appearance > Editor > Templates


# Unregistering block patterns
```php
unregister_block_pattern( string $pattern_name ): bool

```

# Hãy thử hủy đăng ký mẫu tùy chỉnh của bạn từ trước bằng cách thêm mã này vào tệp functions.php của bạn:
```php
add_action( 'init', 'my_custom_unregister_pattern', 20 );

function my_custom_unregister_pattern() {
    unregister_block_pattern( 'my-custom-pattern' );
}

```

- Trong đó, 'my-custom-pattern' là slug của mẫu bạn muốn hủy đăng ký. Đoạn mã này sẽ chạy sau các hàm đăng ký mẫu với độ ưu tiên 10, đảm bảo rằng mẫu của bạn đã được đăng ký trước đó sẽ được hủy đăng ký.

```php
add_action( 'init', 'themeslug_unregister_patterns', 999 );

function themeslug_unregister_patterns() {
	unregister_block_pattern( 'themeslug/hero' );
}

```

- "Like when registering patterns, you’ll also want to unregister on the init hook. Because patterns are generally (but not always) registered with the default priority 10 on init, you’ll want to use a higher priority so that your code runs later."

- Try unregistering your custom pattern from earlier by adding this code to your functions.php file:
```php
add_action( 'init', 'themeslug_unregister_patterns', 999 );

function themeslug_unregister_patterns() {
	unregister_block_pattern( 'themeslug/hero' );
}

// Removing core patterns
add_action( 'after_setup_theme', 'themeslug_remove_core_patterns' );

function themeslug_remove_core_patterns() {
	remove_theme_support( 'core-block-patterns' );
}

// Disabling remote patterns
add_filter( 'should_load_remote_block_patterns', '__return_false' );

// Mã này sẽ ngăn WordPress tải các mẫu từ xa, giúp bạn kiểm soát chính xác các mẫu nào được tải vào trang web của bạn.

```

# Tips and tricks
- Below, you’ll find various tips, tricks, and other useful features that make block patterns a powerful and flexible part of WordPress theme development.

- Internationalizing text in patterns: esc_html_e
```php
<?php
/**
 * Title: Hero
 * Slug: themeslug/hero
 * Categories: featured
 */
?>
<!-- wp:cover {"overlayColor":"contrast","align":"full"} -->
<div class="wp-block-cover alignfull"><span aria-hidden="true" class="wp-block-cover__background has-contrast-background-color has-background-dim-100 has-background-dim"></span><div class="wp-block-cover__inner-container"><!-- wp:group {"style":{"spacing":{"blockGap":"2.5rem"}},"layout":{"type":"constrained","wideSize":"%","contentSize":"75%"}} -->
<div class="wp-block-group"><!-- wp:heading {"textAlign":"center"} -->
<h2 class="wp-block-heading has-text-align-center"><?php esc_html_e( 'Welcome to My Site', 'themeslug' ) ?></h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center"} -->
<p class="has-text-align-center"><?php esc_html_e( "This is my little home away from home. Here, you will get to know me. I'll share my likes, hobbies, and more. Every now and then, I'll even have something interesting to say in a blog post.", 'themeslug' ) ?></p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
<div class="wp-block-buttons"><!-- wp:button {"className":"is-style-outline"} -->
<div class="wp-block-button is-style-outline"><a class="wp-block-button__link wp-element-button"><?php esc_html_e( 'See My Popular Posts →', 'themeslug' ) ?></a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group --></div></div>
<!-- /wp:cover -->

```
# Using images and other assets
- Lấy URL chính xác sử dụng một hàm như get_theme_file_uri().
- Thoát URL để nó an toàn cho việc xuất ra với hàm esc_url().

```php
http://localhost/wp/wp-content/uploads/2023/10/hero-background.jpg


<?php
/**
 * Title: Hero
 * Slug: themeslug/hero
 * Categories: featured
 */
?>
<!-- wp:cover {"url":"<?php echo esc_url( get_theme_file_uri( 'assets/images/hero-background.jpg' ) ) ?>","id":3838,"dimRatio":50,"overlayColor":"contrast","align":"full"} -->
<div class="wp-block-cover alignfull"><span aria-hidden="true" class="wp-block-cover__background has-contrast-background-color has-background-dim"></span><img class="wp-block-cover__image-background wp-image-3838" alt="" src="<?php echo esc_url( get_theme_file_uri( 'assets/images/hero-background.jpg' ) ) ?>" data-object-fit="cover"/><div class="wp-block-cover__inner-container"><!-- wp:group {"style":{"spacing":{"blockGap":"2.5rem"}},"layout":{"type":"constrained","wideSize":"%","contentSize":"75%"}} -->
<div class="wp-block-group"><!-- wp:heading {"textAlign":"center"} -->
<h2 class="wp-block-heading has-text-align-center"><?php esc_html_e( 'Welcome to My Site', 'themeslug' ) ?></h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center"} -->
<p class="has-text-align-center"><?php esc_html_e( "This is my little home away from home. Here, you will get to know me. I'll share my likes, hobbies, and more. Every now and then, I'll even have something interesting to say in a blog post.", 'themeslug' ) ?></p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
<div class="wp-block-buttons"><!-- wp:button {"className":"is-style-outline"} -->
<div class="wp-block-button is-style-outline"><a class="wp-block-button__link wp-element-button"><?php esc_html_e( 'See My Popular Posts →', 'themeslug' ) ?></a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group --></div></div>
<!-- /wp:cover -->

```

# Conditionally loading third-party blocks
- Đoạn mã ví dụ dưới đây cho thấy cách kiểm tra khối core/paragraph. Nếu nó đã được đăng ký, nó sẽ xuất đánh dấu khối:


- Có những lúc bạn có thể chỉ muốn sử dụng một khối nếu nó đã được đăng ký trên cài đặt của người dùng. = - Điều này đặc biệt đúng đối với các khối của bên thứ ba có thể được chứa trong một plugin.

- Quan trọng nhấn rằng WordPress sẽ nhắc người dùng cài đặt khối nếu bạn thêm đánh dấu khối của nó mà khối đó chưa được cài đặt. Điều này không làm hỏng trang web, vì vậy không vấn đề gì khi tránh sử dụng phương pháp được mô tả trong phần này.

- Tuy nhiên, nếu bạn muốn ẩn một khối chưa được đăng ký (hoặc sử dụng một phương pháp thay thế), bạn có thể kiểm tra điều kiện có một khối đã được đăng ký thông qua phương thức WP_Block_Type_Registry::is_registered().

- Đoạn mã ví dụ dưới đây cho thấy cách kiểm tra khối core/paragraph. Nếu nó đã được đăng ký, nó sẽ xuất đánh dấu khối:



```php
//
<?php if ( WP_Block_Type_Registry::get_instance()->is_registered( 'core/paragraph' ) ) : ?>
	<!-- Add your block markup here. -->
<?php endif ?>

// Fullcode
// Try applying this method to your registered “hero” block from earlier by wrapping the Paragraph block in this conditional check. Here’s what your pattern code should look like:
<?php
/**
 * Title: Hero
 * Slug: themeslug/hero
 * Categories: featured
 */
?>
<!-- wp:cover {"url":"<?php echo esc_url( get_theme_file_uri( 'assets/images/hero-background.jpg' ) ) ?>","id":3838,"dimRatio":50,"overlayColor":"contrast","align":"full"} -->
<div class="wp-block-cover alignfull"><span aria-hidden="true" class="wp-block-cover__background has-contrast-background-color has-background-dim"></span><img class="wp-block-cover__image-background wp-image-3838" alt="" src="<?php echo esc_url( get_theme_file_uri( 'assets/images/hero-background.jpg' ) ) ?>" data-object-fit="cover"/><div class="wp-block-cover__inner-container"><!-- wp:group {"style":{"spacing":{"blockGap":"2.5rem"}},"layout":{"type":"constrained","wideSize":"%","contentSize":"75%"}} -->
<div class="wp-block-group"><!-- wp:heading {"textAlign":"center"} -->
<h2 class="wp-block-heading has-text-align-center"><?php esc_html_e( 'Welcome to My Site', 'themeslug' ) ?></h2>
<!-- /wp:heading -->

<?php if ( WP_Block_Type_Registry::get_instance()->is_registered( 'core/paragraph' ) ) : ?>
	<!-- wp:paragraph {"align":"center"} -->
	<p class="has-text-align-center"><?php esc_html_e( "This is my little home away from home. Here, you will get to know me. I'll share my likes, hobbies, and more. Every now and then, I'll even have something interesting to say in a blog post.", 'themeslug' ) ?></p>
	<!-- /wp:paragraph -->
<?php endif ?>

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
<div class="wp-block-buttons"><!-- wp:button {"className":"is-style-outline"} -->
<div class="wp-block-button is-style-outline"><a class="wp-block-button__link wp-element-button"><?php esc_html_e( 'See My Popular Posts →', 'themeslug' ) ?></a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group --></div></div>
<!-- /wp:cover -->


```
# Unregistering block patterns

```php
add_action( 'init', 'themeslug_unregister_patterns', 999 );

function themeslug_unregister_patterns() {
	unregister_block_pattern( 'themeslug/hero' );
}

```

# Removing core patterns
```php
add_action( 'after_setup_theme', 'themeslug_remove_core_patterns' );

function themeslug_remove_core_patterns() {
	remove_theme_support( 'core-block-patterns' );
}
```

# Disabling remote patterns
```php
add_filter( 'should_load_remote_block_patterns', '__return_false' );

```
# Conditionally registering patterns in the /patterns folder
- Đăng ký mẫu theo điều kiện trong thư mục /patterns

- Nếu bạn đã sử dụng phương pháp tự động đăng ký bằng cách đặt mẫu của mình vào thư mục /patterns của chủ đề, không có cách nào thực sự để đăng ký theo điều kiện. Trong trường hợp này, điều bạn phải làm là hủy đăng ký mẫu.

- Giả sử bạn chỉ muốn mẫu hero bạn đã đăng ký trước đó có sẵn nếu khối core/paragraph được đăng ký. Trong một tình huống thực tế, bạn có thể sẽ kiểm tra cho một khối của bên thứ ba, và khối core/paragraph chỉ được sử dụng vì mục đích minh họa trong ví dụ này.

```php
add_action( 'init', 'themeslug_unregister_patterns', 999 );

function themeslug_unregister_patterns() {
	if ( WP_Block_Type_Registry::get_instance()->is_registered( 'core/paragraph' ) ) {
		unregister_block_pattern( 'themeslug/hero' );
	}
}
```


# Conditionally registering patterns via register_block_pattern()
- Using the same example as above, try only registering your pattern if the core/paragraph block is registered by adding this to functions.php:
```php
add_action( 'init', 'themeslug_register_patterns', 999 );

function themeslug_register_patterns() {
	if ( WP_Block_Type_Registry::get_instance()->is_registered( 'core/paragraph' ) ) {
		register_block_pattern( 'themeslug/hero', array(
			'title'      => __( 'Hero', 'themeslug' ),
			'categories' => array( 'featured' ),
			'source'     => 'theme',
			'content'    => '<!-- Block pattern goes here. -->'
		) );
	}
}

```

# Pattern categories
```php
register_block_pattern_category( 
	string $category_name, 
	array $category_properties 
): bool

```

- $category_name: Một ID/slug duy nhất cho danh mục. Thực hành tốt là tiền tố này bằng slug của chủ đề của bạn.
- $category_properties: Một mảng các thuộc tính để xác định dữ liệu thêm về danh mục:
 + label: Một nhãn/tiêu đề có thể đọc được cho danh mục có thể được dịch.
 + description: Một mô tả cho danh mục có thể được dịch.

```php
add_action( 'init', 'themeslug_register_pattern_categories' );

function themeslug_register_pattern_categories() {
	register_block_pattern_category( 'themeslug/custom', array( 
		'label'       => __( 'Theme Name: Custom', 'themeslug' ),
		'description' => __( 'Custom patterns for Theme Name.', 'themeslug' )
	) );
}
```

# Unregistering a pattern category
```php
add_action( 'init', 'themeslug_unregister_pattern_categories' );
function themeslug_unregister_pattern_categories() 
{	
	unregister_block_pattern_category( 'themeslug/custom' );
}

```


# LazyLoad là gì
-  "you must use some data- attributes instead of the actual attributes"
- LazyLoad là một script nhanh chóng, nhẹ và linh hoạt giúp tăng tốc ứng dụng web của bạn bằng cách chỉ tải hình ảnh khi chúng vào phạm vi nhìn thấy (viewport). LazyLoad hỗ trợ hình ảnh đáp ứng.

- LazyLoad là một script nhẹ (2.4 kB) và linh hoạt giúp tăng tốc ứng dụng web của bạn bằng cách trì hoãn việc tải các hình ảnh, SVG động, video và iframes dưới phần cuối trang cho đến khi chúng vào phạm vi nhìn thấy. 


```javascript
// Lazy image:
<img alt="A lazy image" class="lazy" data-src="lazy.jpg" />

// low quality placeholder
<img alt="A lazy image" class="lazy" src="lazy-lowQuality.jpg" data-src="lazy.jpg" />

// image with srcset and sizes
<img
  alt="A lazy image"
  class="lazy"
  data-src="lazy.jpg"
  data-srcset="lazy_400.jpg 400w, 
    lazy_800.jpg 800w"
  data-sizes="100w"
/>

// with hi-dpi support using the picture and with automatic WebP format selection
<picture>
  <source media="(min-width: 1200px)" data-srcset="lazy_1200.jpg 1x, lazy_2400.jpg 2x" />
  <source media="(min-width: 800px)" data-srcset="lazy_800.jpg 1x, lazy_1600.jpg 2x" />
  <img alt="A lazy image" class="lazy" data-src="lazy.jpg" />
</picture>

```

# Lazy background image
```javascript
// Single background image
<div class="lazy" data-bg="lazy.jpg"></div>

// Single background, with HiDPI screen support:
<div class="lazy" data-bg="lazy.jpg" data-bg-hidpi="lazy@2x.jpg"></div>

// Multiple backgrounds:
<div
  class="lazy"
  data-bg-multi="url(lazy-head.jpg), 
    url(lazy-body.jpg), 
    linear-gradient(#fff, #ccc)"
>
 
</div>

// Multiple backgrounds, HiDPI screen support:
<div
  class="lazy"
  data-bg-multi="url(lazy-head.jpg),
    url(lazy-body.jpg),
    linear-gradient(#fff, #ccc)"
  data-bg-multi-hidpi="url(lazy-head@2x.jpg),
    url(lazy-body@2x.jpg),
    linear-gradient(#fff, #ccc)"
>
 
</div>

// Backgrounds with image-set:
<div class="lazy" data-bg-set="url('lazy@1x.jpg') 1x, url('lazy@2x.jpg') 2x">

</div>
// Multiple backgrounds with image-set

<div
  class="lazy"
  data-bg-set="
    url('lazy-head@1x.jpg') 1x, url('lazy-head@2x.jpg') 2x | 
    url('lazy-body@1x.jpg') 1x, url('lazy-body@2x.jpg') 2x
  "
>
 
</div>

// Lazy animated SVG
<object class="lazy" type="image/svg+xml" data-src="lazy.svg"></object>

// Lazy video
<video class="lazy" controls width="620" data-src="lazy.mp4" data-poster="lazy.jpg">
  <source type="video/mp4" data-src="lazy.mp4" />
  <source type="video/ogg" data-src="lazy.ogg" />
  <source type="video/avi" data-src="lazy.avi" />
</video>

// Lazy iframe
<iframe class="lazy" data-src="lazyFrame.html"></iframe>


```

https://chat.openai.com/c/3ea855fc-1c4d-4d11-9e59-200809e3f1ac

https://wordpress.org/plugins/docket-cache/



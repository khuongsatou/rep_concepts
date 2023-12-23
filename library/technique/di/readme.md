Thế nhưng bạn có thể thấy hàm này không những phụ thuộc vào hai tham số như đã nói ở trên mà còn phụ thuộc vào hàm Math.random. Nếu hàm Math.random không hoạt động vì một lí do nào đó thì hàm getRandomInRange của chúng ta cũng sẽ không hoạt động theo. Và đây chính là dẫn chứng cụ thể về việc phụ thuộc vào chức năng của một module khác. Do đó Math.random còn được gọi là dependency.


Đây chính là cách triển khai cơ bản nhất của Dependency Inversion. Đó là chúng ta sẽ truyền vào module của chúng ta tất cả những dependencies mà nó cần
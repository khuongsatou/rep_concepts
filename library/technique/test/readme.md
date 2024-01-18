# expect
# toBe
# Using Matchers.
# Babel
# webpack
# Vite
# ESM
# Parcel
# parcel-bundler
# DefinitelyTyped
# expectation
# toEqual
# toStrictEqual
# expect(a + b).not.toBe(0);
# toBeNull
# toBeUndefined
# toBeDefined
# toBeTruthy
# toBeFalsy
test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('số không', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});


test('hai cộng hai', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe và toEqual là tương đương cho số
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

# Kiểm tra null: toBeNull
# Kiểm tra số 0
# Kiểm tra số thập phân: toBeCloseTo
# Kiểm tra chuỗi: toMatch
# Kiểm tra mảng:  Iterables | toContain
# Kiểm tra ngoại lệ: toThrow
# Kiểm tra bất đồng bộ: Promises
# Async/Await
# Promises
# Callbacks


# KEYWORDS
- expect(2 + 2).toBe(4);
- expect(data).toEqual({one: 1, two: 2});
- expect(a + b).not.toBe(0);
- expect(z).not.toBeNull();
- expect(value).toBeCloseTo(0.3);
- expect('team').not.toMatch(/I/);
- expect(new Set(shoppingList)).toContain('milk');
- expect(() => compileAndroidCode()).toThrow();
- fetchData().then
- expect.assertions(1);
- expect(error).toMatch('lỗi');
- await expect(fetchData()).resolves.toBe('bơ đậu phộng');
- await expect(fetchData()).rejects.toMatch('lỗi');
- fetchData().catch(error => expect(error).toMatch('lỗi'));
- fetchData(callback); | done(error);
- expect(fetchData()).resolves.toBe('bơ đậu phộng')
- expect(fetchData()).rejects.toMatch('lỗi')

# Nâng Cao
a mock function
.mock property
Mock Return Values
Mock Implementations
Mocking Modules
Mocking Partials
Mock Names
Custom Matchers


# Thực hiện lặp đi lặp lại
- beforeEach 
- afterEach
- initializeCityDatabase
- clearCityDatabase
- beforeAll | afterAll

beforeAll(() => console.log('1 - beforeAll'));
afterAll(() => console.log('1 - afterAll'));
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Khối có Phạm Vi / Lồng Nhau', () => {
  beforeAll(() => console.log('2 - beforeAll'));
  afterAll(() => console.log('2 - afterAll'));
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

// 1 - beforeAll
// 1 - beforeEach
// 1 - test
// 1 - afterEach
// 2 - beforeAll
// 1 - beforeEach
// 2 - beforeEach
// 2 - test
// 2 - afterEach
// 1 - afterEach
// 2 - afterAll
// 1 - afterAll

beforeEach(() => console.log('connection setup'));
beforeEach(() => console.log('database setup'));

afterEach(() => console.log('database teardown'));
afterEach(() => console.log('connection teardown'));

test('test 1', () => console.log('test 1'));

describe('extra', () => {
  beforeEach(() => console.log('extra database setup'));
  afterEach(() => console.log('extra database teardown'));

  test('test 2', () => console.log('test 2'));
});

// connection setup
// database setup
// test 1
// database teardown
// connection teardown

// connection setup
// database setup
// extra database setup
// test 2
// extra database teardown
// database teardown
// connection teardown

# jasmine2
  beforeEach(() => console.log('connection setup'));
+ afterEach(() => console.log('connection teardown'));

  beforeEach(() => console.log('database setup'));
+ afterEach(() => console.log('database teardown'));

- afterEach(() => console.log('database teardown'));
- afterEach(() => console.log('connection teardown'));


test.only('đây sẽ là duy nhất bài kiểm tra chạy', () => {
  expect(true).toBe(false);
});

test('bài kiểm tra này sẽ không chạy', () => {
  expect('A').toBe('A');
});

# const mockCallback = jest.fn(x => 42 + x);
# forEach([0, 1], mockCallback);
# expect(mockCallback.mock.calls).toHaveLength(2);
# expect(mockCallback.mock.calls[0][0]).toBe(0);
# expect(mockCallback.mock.calls[1][0]).toBe(1);
# expect(mockCallback.mock.results[0].value).toBe(42);
```javascript
const myMock1 = jest.fn();
const a = new myMock1();
console.log(myMock1.mock.instances);
// > [ <a> ]

const myMock2 = jest.fn();
const b = {};
const bound = myMock2.bind(b);
bound();
console.log(myMock2.mock.contexts);
// > [ <b> ]

// Hàm được gọi với một ngữ cảnh this cụ thể: đối tượng element.
expect(someMockFunction.mock.contexts[0]).toBe(element);

```

# Giá trị Trả về Hàm Mock
# Hàm mock cũng có thể được sử dụng để chèn giá trị kiểm thử vào mã của bạn trong quá trình kiểm thử:

```javascript
const myMock = jest.fn();
console.log(myMock());
// > undefined

myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

console.log(myMock(), myMock(), myMock(), myMock());
// > 10, 'x', true, true


const filterTestFn = jest.fn();

// Đặt giá trị trả về của hàm mock là `true` cho cuộc gọi đầu tiên,
// và `false` cho cuộc gọi thứ hai
filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

const result = [11, 12].filter(num => filterTestFn(num));

console.log(result);
// > [11]
console.log(filterTestFn.mock.calls[0][0]); // 11
console.log(filterTestFn.mock.calls[1][0]); // 12

// jest.mock
jest.mock('axios');
# mockResolvedValue
test('nên lấy người dùng', () => {
  const users = [{name: 'Bob'}];
  const resp = {data: users};
  axios.get.mockResolvedValue(resp);

  // hoặc bạn có thể sử dụng dòng code sau tùy thuộc vào trường hợp sử dụng của bạn:
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return Users.all().then(data => expect(data).toEqual(users));
});


```

# Mocking Partials
import defaultExport, {bar, foo} from '../foo-bar-baz';

jest.mock('../foo-bar-baz', () => {
  const originalModule = jest.requireActual('../foo-bar-baz');

  // Mock giá trị mặc định và giá trị có tên là 'foo'
  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn(() => 'mocked baz'),
    foo: 'mocked foo',
  };
});

test('nên mock một phần', () => {
  const defaultExportResult = defaultExport();
  expect(defaultExportResult).toBe('mocked baz');
  expect(defaultExport).toHaveBeenCalled();

  expect(foo).toBe('mocked foo');
  expect(bar()).toBe('bar');
});


mockImplementationOnce
mockReturnThis

toHaveBeenCalled
toHaveBeenCalledWith
toHaveBeenLastCalledWith
toMatchSnapshot

toBeGreaterThan
toContainEqual

expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1]).toEqual([
  arg1,
  arg2,
]);


## TOOLS
# jest-changed-files
getChangedFilesForRoots
findRepos
# jest-diff
pretty-printed
# jest-docblock
parseWithComments
# jest-get-type
# jest-validate
# jest-worker
# pretty-format

vscode-jest
jest-extended
eslint-plugin-jest
awesome-jest
jest-community


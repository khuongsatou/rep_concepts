# type Query
# mutation
# Multiple fields in mutations
# Aliases : leftComparison: hero(episode: EMPIRE) | rightComparison: hero(episode: JEDI)
# fragments : fragment comparisonFields on Character
# Inline Fragments : ... on Droid | ... on Human
# Meta fields : __typename
# Directives : @include(if: Boolean) , @skip(if: Boolean)
# ! | [] | [String!] | [String]!
# Interfaces
# Union types
# input
# Validation
# Execution
# Root fields & resolvers: (obj, args, context, info)
# Asynchronous resolvers | Trivial | Scalar coercion | List resolvers | Producing the result
# introspection


# GraphQLModule README

## Code First Resolvers
- `@Resolver((of) => Recipe)`: Hàm lambda xác định kiểu dữ liệu mà resolver này đang xử lý.

## Schema First Resolvers
- `@Resolver('Author')`: Resolver cho kiểu dữ liệu 'Author'.

## SDL (Schema Definition Language)
- Hỗ trợ `query`, `mutation`, và `subscription`.

## Resolvers
### Object Types
- `@ObjectType()`
- `@Field((type) => Int)`
- `@Field(type => [Post], { nullable: 'items' })`
- `@ArgsType()`

### Query Types
- `@Query()`

### Args
- `@Args()`: Trích xuất các đối số từ yêu cầu để sử dụng trong xử lý của phương thức.

### Class Inheritance
- `PaginationArgs`

### Generics
- `BaseResolverHost`
- `IEdgeType`
- `IPaginatedType`
- `Paginated`

### ResolveField
- Sử dụng `@ResolveField()` để giải quyết trường trong resolver.
- `boilerplate` và `schematic` giúp tạo nhanh các phần mở rộng.

## Types
- GraphQL argument decorators
- Mô hình domain model 

## Services
- Cung cấp các dịch vụ hỗ trợ cho resolver và loại.

## Nest Module
- Tích hợp tốt với NestJS.

## class-validator
- Sử dụng `@MinLength(3)` và các decorators khác để kiểm tra dữ liệu.

## Special Resolvers
- `@Resolver({ isAbstract: true })`: Resolver trừu tượng.

# type Query {
  author(id: Int!): Author
}
# type Mutation {
  upvotePost(postId: Int!): Post
}

# @Mutation(returns => Post)

# subscriptions
type Subscription {
  commentAdded(): Comment!
}
# pubSub.publish('commentAdded', { commentAdded: newComment });
@Subscription(returns => Comment, {
  filter: (payload, variables) =>
    payload.commentAdded.title === variables.title,
})
# pubSub.asyncIterator('commentAdded')
# pubSub.subscribe('commentAdded')
#
 await pubSub.publish({
    topic: 'commentAdded',
    payload: {
      commentAdded: newComment
    }
  });

# buildSchemaOptions
# mqemitter-redis
# verifyClient
# Scalars
# Scalars Type
# scalar JSON
# Directive
# @ObjectType | implements: () => [Character],
# Interface
# resolveType
# @InterfaceType
@InterfaceType({
  resolveType(book) {
    if (book.colors) {
      return ColoringBook;
    }
    return TextBook;
  },
})
# @Info() { parentType },
# __resolveType(value) {}
# createUnionType | {resolveType(value) {}}
# @Query(returns => [ResultUnion])
# union ResultUnion = Author | Book 
# enum AllowedColor {} | registerEnumType | @Field(type => AllowedColor)
# @Field({ middleware: [loggerMiddleware] })
const value = await next();
return value?.toUpperCase();
# @ResolveField(() => String, { middleware: [loggerMiddleware] })
title() {
  return 'Placeholder';
}
# enhancers
# interceptor
# guard
# handler | query | mutation
# fieldMiddleware
# Partial | PartialType | Data Transfer Objects
# @InputType()
@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {}

@InputType()
export class UpdateUserInput extends PartialType(User, InputType) {}

# Pick | PickType()
@InputType()
export class UpdateEmailInput extends PickType(CreateUserInput, [
  'email',
] as const) {}
# Omit | OmitType()
@InputType()
export class UpdateUserInput extends OmitType(CreateUserInput, [
  'email',
] as const) {}

# Intersection
@InputType()
export class UpdateUserInput extends IntersectionType(
  CreateUserInput,
  AdditionalUserInfo,
) {}

# Composition
@InputType()
export class UpdateUserInput extends PartialType(
  OmitType(CreateUserInput, ['email'] as const),
) {}
# @Plugin() | ApolloServerPlugin | ApolloServerOperationRegistry
# ComplexityPlugin
# simpleEstimator | fieldExtensionsEstimator
# @Field({ complexity: 3 })
@Field({ complexity: (options: ComplexityEstimatorArgs) => ... })
title: string;

@Query({ complexity: (options: ComplexityEstimatorArgs) => options.args.count * options.childComplexity })
items(@Args('count') count: number) {
  return this.itemsService.getItems({ count });
}
# Extension
@Field()
@Extensions({ role: Role.ADMIN })
password: string;
# metadata
# interceptor
# checkRoleMiddleware
@Field({ middleware: [checkRoleMiddleware] })
@Extensions({ role: Role.ADMIN })
password: string;

# introspectComments
# typeFileNameSuffix
# description
@Field(() => [String], {
  description: `A list of user's roles`
})
roles: string[];

# Kết quả
/**
 * A list of user's roles
 */
roles: string[];

nest-cli.json

# webpack
# SWC builder
# monorepo
#  ts-jest (e2e tests)
# GraphQLSchemaBuilderModule
# gqlSchemaFactory.create
# model shim
#  guard, interceptor, filter và pipe tiêu chuẩn 
@Query('author')
@UseGuards(AuthGuard)
async getAuthor(@Args('id', ParseIntPipe) id: number) {
  return this.authorsService.findOneById(id);
}


@Mutation()
@UseInterceptors(EventsInterceptor)
async upvotePost(@Args('postId') postId: number) {
  return this.postsService.upvoteById({ id: postId });
}

# ExecutionContext | GqlExecutionContext | CanActivate
# ArgumentsHost | GqlArgumentsHost
@Catch(HttpException)
export class HttpExceptionFilter implements GqlExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const gqlHost = GqlArgumentsHost.create(host);
    return exception;
  }
}

# createParamDecorator
export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) =>
    GqlExecutionContext.create(ctx).getContext().user,
);

# fieldResolverEnhancers
# isResolvingGraphQLField
# AbstractGraphQLDriver
GraphQLModule.forRoot({
  driver: ExpressGraphQLDriver,
});

# Federation | ApolloFederationDriver
# GraphQL monolithic
# microservices
# type User @key(fields: "id") | extend type Query
# @ResolveReference
# Apollo
@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')

@Directive('@external')
# @ResolveField((of) => User)
# orphanedTypes: [User],
# @apollo/gateway | @apollo/subgraph | @nestjs/mercurius
# cors: true,
# gateway:
# MercuriusFederationDriver | federationMetadata: true,
 gateway: {
        services: [
          { name: 'users', url: 'http://user-service/graphql' },
          { name: 'posts', url: 'http://post-service/graphql' },
        ],
      },
# Federation 2
autoSchemaFile: {
        federation: 2,
      },

# Nestjs v11
# @apollo/server | @as-integrations/fastify | @mercuriusjs/gateway | @mercuriusjs/federation
# @nestjs/graphql
# import { Plugin } from '@nestjs/apollo';
# IntrospectAndCompose



# Các thuật ngữ
- Khái Niệm và Tính Năng Cơ Bản trong GraphQL
- Truy vấn (Queries)
- Đại diện cho loại truy vấn trong GraphQL.
- Thay Đổi (Mutations)
- Đại diện cho loại thay đổi trong GraphQL.
- Nhiều Trường Trong Thay Đổi (Multiple Fields in Mutations)
- Cho phép sử dụng nhiều trường trong các thay đổi và bạn có thể sử dụng các bí danh (alias) để phân biệt chúng.
- Fragment
- Fragment: Đơn vị tái sử dụng của các trường truy vấn.
- Inline Fragment: Cho phép bao gồm các trường khác nhau tùy thuộc vào loại đối tượng.
- Trường Meta (Meta Fields)
- __typename: Một trường meta đặc biệt trả về loại của đối tượng hiện tại.
- Hướng Dẫn (Directives)
- @include(if: Boolean): Bao gồm điều kiện một trường trong kết quả dựa trên giá trị Boolean cung cấp.
- @skip(if: Boolean): Tùy thuộc vào giá trị Boolean cung cấp, có thể tùy chọn bỏ qua một trường trong kết quả.
- Loại Biến Đổi (Type Modifiers)
- !: Chỉ định một loại không thể là null.
- []: Chỉ định một loại danh sách.
- [String!]: Chỉ định một danh sách không thể là null của chuỗi.
- [String]!: Chỉ định một danh sách của chuỗi không thể là null.
- Giao Diện (Interfaces)
- Được sử dụng để xác định một bộ trường chung có thể được thực hiện bởi nhiều loại.
- Loại Hợp (Union Types)
- Đại diện cho một loại có thể là một trong một số loại.
- Đầu Vào (Input)
- Xác định các loại đầu vào phức tạp cho các đối số của thay đổi.
- Kiểm Tra (Validation)
- Tham chiếu đến quá trình kiểm tra đầu vào so với schema được xác định.
- Thực Hiện (Execution)
- Tham chiếu đến quá trình thực hiện một truy vấn GraphQL trên schema.
- Trường Gốc và Resolver (Root Fields & Resolvers)
- Trong GraphQL, các trường gốc của một truy vấn hoặc thay đổi có các hàm giải quyết liên quan quyết định cách lấy hoặc thay đổi dữ liệu.
- Resolver Asynchronous (Asynchronous Resolvers)
- Các giải quyết viên thực hiện các hoạt động bất đồng bộ.
- Trivial: Các giải quyết viên không thực hiện logic phức tạp.
- Scalar Coercion: Xử lý việc chuyển đổi giá trị cơ bản.
- List Resolvers: Giải quyết danh sách các mục.
- Sản Xuất Kết Quả (Producing the Result): Bước cuối cùng của việc sản xuất kết quả.
- Tìm Hiểu Tự Động (Introspection)
- Khả năng của một máy chủ GraphQL cung cấp thông tin về schema của nó.
- Liên Minh (Federation)
- Cho phép xây dựng một schema GraphQL phân tán.
- @key(fields: "id"): Xác định một khóa để xác định duy nhất một thực thể.
- extend type Query: Mở rộng loại truy vấn.
- @ResolveReference: Chỉ định một phương thức giải quyết để giải quyết các tham chiếu.
- @ObjectType(): Xác định một loại đối tượng.
- @Directive('@extends'): Đánh dấu một loại là mở rộng của một loại khác.
- @Directive('@key(fields: "id")'): Đánh dấu một loại với một hướng dẫn để xác định các khóa.
- @Directive('@external'): Đánh dấu một trường là ngoại vi.
- orphanedTypes: [User]: Chỉ định các loại không được định nghĩa trong dịch vụ hiện tại.
- @apollo/gateway | @apollo/subgraph | @nestjs/mercurius: Các phương pháp khác nhau để triển khai phân liên minh.
- cors: true: Kích hoạt Chia Sẻ Tài Nguyên Quốc Tế qua miền.
- gateway: { services: [...] }: Cấu hình các dịch vụ cho Cổng Apollo.
- Phân Liên Minh 2 (Federation 2)
- autoSchemaFile: { federation: 2 }: Cấu hình tệp schema cho Federation 2.
- NestJS v11
- Các thư viện và gói dành cho việc làm việc với GraphQL trong NestJS v11.
- @apollo/server | @as-integrations/fastify | @mercuriusjs/gateway | @mercuriusjs/federation: Thư viện được sử dụng cho mục đích cụ thể.
- @nestjs/graphql: Module chính của NestJS cho GraphQL.
- import { Plugin } from '@nestjs/apollo': Dòng lệnh nhập cho các plugin Apollo.
- IntrospectAndCompose: Một phần của cấu hình cho Cổng Apollo.
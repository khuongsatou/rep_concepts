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


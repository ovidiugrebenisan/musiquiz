
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model UserQuiz
 * 
 */
export type UserQuiz = $Result.DefaultSelection<Prisma.$UserQuizPayload>
/**
 * Model ArtistQuiz
 * 
 */
export type ArtistQuiz = $Result.DefaultSelection<Prisma.$ArtistQuizPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserQuizs
 * const userQuizs = await prisma.userQuiz.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more UserQuizs
   * const userQuizs = await prisma.userQuiz.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.userQuiz`: Exposes CRUD operations for the **UserQuiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserQuizs
    * const userQuizs = await prisma.userQuiz.findMany()
    * ```
    */
  get userQuiz(): Prisma.UserQuizDelegate<ExtArgs>;

  /**
   * `prisma.artistQuiz`: Exposes CRUD operations for the **ArtistQuiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArtistQuizs
    * const artistQuizs = await prisma.artistQuiz.findMany()
    * ```
    */
  get artistQuiz(): Prisma.ArtistQuizDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.6.0
   * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    UserQuiz: 'UserQuiz',
    ArtistQuiz: 'ArtistQuiz'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'userQuiz' | 'artistQuiz'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      UserQuiz: {
        payload: Prisma.$UserQuizPayload<ExtArgs>
        fields: Prisma.UserQuizFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserQuizFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserQuizPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserQuizFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserQuizPayload>
          }
          findFirst: {
            args: Prisma.UserQuizFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserQuizPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserQuizFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserQuizPayload>
          }
          findMany: {
            args: Prisma.UserQuizFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserQuizPayload>[]
          }
          create: {
            args: Prisma.UserQuizCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserQuizPayload>
          }
          createMany: {
            args: Prisma.UserQuizCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserQuizDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserQuizPayload>
          }
          update: {
            args: Prisma.UserQuizUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserQuizPayload>
          }
          deleteMany: {
            args: Prisma.UserQuizDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserQuizUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserQuizUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserQuizPayload>
          }
          aggregate: {
            args: Prisma.UserQuizAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserQuiz>
          }
          groupBy: {
            args: Prisma.UserQuizGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserQuizGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserQuizCountArgs<ExtArgs>,
            result: $Utils.Optional<UserQuizCountAggregateOutputType> | number
          }
        }
      }
      ArtistQuiz: {
        payload: Prisma.$ArtistQuizPayload<ExtArgs>
        fields: Prisma.ArtistQuizFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtistQuizFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistQuizPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtistQuizFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistQuizPayload>
          }
          findFirst: {
            args: Prisma.ArtistQuizFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistQuizPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtistQuizFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistQuizPayload>
          }
          findMany: {
            args: Prisma.ArtistQuizFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistQuizPayload>[]
          }
          create: {
            args: Prisma.ArtistQuizCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistQuizPayload>
          }
          createMany: {
            args: Prisma.ArtistQuizCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ArtistQuizDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistQuizPayload>
          }
          update: {
            args: Prisma.ArtistQuizUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistQuizPayload>
          }
          deleteMany: {
            args: Prisma.ArtistQuizDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ArtistQuizUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ArtistQuizUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistQuizPayload>
          }
          aggregate: {
            args: Prisma.ArtistQuizAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateArtistQuiz>
          }
          groupBy: {
            args: Prisma.ArtistQuizGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ArtistQuizGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtistQuizCountArgs<ExtArgs>,
            result: $Utils.Optional<ArtistQuizCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserQuizCountOutputType
   */

  export type UserQuizCountOutputType = {
    artistQuizzes: number
  }

  export type UserQuizCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artistQuizzes?: boolean | UserQuizCountOutputTypeCountArtistQuizzesArgs
  }

  // Custom InputTypes

  /**
   * UserQuizCountOutputType without action
   */
  export type UserQuizCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuizCountOutputType
     */
    select?: UserQuizCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserQuizCountOutputType without action
   */
  export type UserQuizCountOutputTypeCountArtistQuizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistQuizWhereInput
  }



  /**
   * Models
   */

  /**
   * Model UserQuiz
   */

  export type AggregateUserQuiz = {
    _count: UserQuizCountAggregateOutputType | null
    _min: UserQuizMinAggregateOutputType | null
    _max: UserQuizMaxAggregateOutputType | null
  }

  export type UserQuizMinAggregateOutputType = {
    user_id: string | null
    one_artist_question_remaining: boolean | null
  }

  export type UserQuizMaxAggregateOutputType = {
    user_id: string | null
    one_artist_question_remaining: boolean | null
  }

  export type UserQuizCountAggregateOutputType = {
    user_id: number
    one_artist_question_remaining: number
    _all: number
  }


  export type UserQuizMinAggregateInputType = {
    user_id?: true
    one_artist_question_remaining?: true
  }

  export type UserQuizMaxAggregateInputType = {
    user_id?: true
    one_artist_question_remaining?: true
  }

  export type UserQuizCountAggregateInputType = {
    user_id?: true
    one_artist_question_remaining?: true
    _all?: true
  }

  export type UserQuizAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserQuiz to aggregate.
     */
    where?: UserQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuizs to fetch.
     */
    orderBy?: UserQuizOrderByWithRelationInput | UserQuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserQuizs
    **/
    _count?: true | UserQuizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserQuizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserQuizMaxAggregateInputType
  }

  export type GetUserQuizAggregateType<T extends UserQuizAggregateArgs> = {
        [P in keyof T & keyof AggregateUserQuiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserQuiz[P]>
      : GetScalarType<T[P], AggregateUserQuiz[P]>
  }




  export type UserQuizGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserQuizWhereInput
    orderBy?: UserQuizOrderByWithAggregationInput | UserQuizOrderByWithAggregationInput[]
    by: UserQuizScalarFieldEnum[] | UserQuizScalarFieldEnum
    having?: UserQuizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserQuizCountAggregateInputType | true
    _min?: UserQuizMinAggregateInputType
    _max?: UserQuizMaxAggregateInputType
  }

  export type UserQuizGroupByOutputType = {
    user_id: string
    one_artist_question_remaining: boolean
    _count: UserQuizCountAggregateOutputType | null
    _min: UserQuizMinAggregateOutputType | null
    _max: UserQuizMaxAggregateOutputType | null
  }

  type GetUserQuizGroupByPayload<T extends UserQuizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserQuizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserQuizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserQuizGroupByOutputType[P]>
            : GetScalarType<T[P], UserQuizGroupByOutputType[P]>
        }
      >
    >


  export type UserQuizSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    one_artist_question_remaining?: boolean
    artistQuizzes?: boolean | UserQuiz$artistQuizzesArgs<ExtArgs>
    _count?: boolean | UserQuizCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userQuiz"]>

  export type UserQuizSelectScalar = {
    user_id?: boolean
    one_artist_question_remaining?: boolean
  }

  export type UserQuizInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artistQuizzes?: boolean | UserQuiz$artistQuizzesArgs<ExtArgs>
    _count?: boolean | UserQuizCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserQuizPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserQuiz"
    objects: {
      artistQuizzes: Prisma.$ArtistQuizPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      one_artist_question_remaining: boolean
    }, ExtArgs["result"]["userQuiz"]>
    composites: {}
  }


  type UserQuizGetPayload<S extends boolean | null | undefined | UserQuizDefaultArgs> = $Result.GetResult<Prisma.$UserQuizPayload, S>

  type UserQuizCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserQuizFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserQuizCountAggregateInputType | true
    }

  export interface UserQuizDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserQuiz'], meta: { name: 'UserQuiz' } }
    /**
     * Find zero or one UserQuiz that matches the filter.
     * @param {UserQuizFindUniqueArgs} args - Arguments to find a UserQuiz
     * @example
     * // Get one UserQuiz
     * const userQuiz = await prisma.userQuiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserQuizFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserQuizFindUniqueArgs<ExtArgs>>
    ): Prisma__UserQuizClient<$Result.GetResult<Prisma.$UserQuizPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserQuiz that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserQuizFindUniqueOrThrowArgs} args - Arguments to find a UserQuiz
     * @example
     * // Get one UserQuiz
     * const userQuiz = await prisma.userQuiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserQuizFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserQuizFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserQuizClient<$Result.GetResult<Prisma.$UserQuizPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserQuiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuizFindFirstArgs} args - Arguments to find a UserQuiz
     * @example
     * // Get one UserQuiz
     * const userQuiz = await prisma.userQuiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserQuizFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserQuizFindFirstArgs<ExtArgs>>
    ): Prisma__UserQuizClient<$Result.GetResult<Prisma.$UserQuizPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserQuiz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuizFindFirstOrThrowArgs} args - Arguments to find a UserQuiz
     * @example
     * // Get one UserQuiz
     * const userQuiz = await prisma.userQuiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserQuizFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserQuizFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserQuizClient<$Result.GetResult<Prisma.$UserQuizPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserQuizs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuizFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserQuizs
     * const userQuizs = await prisma.userQuiz.findMany()
     * 
     * // Get first 10 UserQuizs
     * const userQuizs = await prisma.userQuiz.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userQuizWithUser_idOnly = await prisma.userQuiz.findMany({ select: { user_id: true } })
     * 
    **/
    findMany<T extends UserQuizFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserQuizFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuizPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserQuiz.
     * @param {UserQuizCreateArgs} args - Arguments to create a UserQuiz.
     * @example
     * // Create one UserQuiz
     * const UserQuiz = await prisma.userQuiz.create({
     *   data: {
     *     // ... data to create a UserQuiz
     *   }
     * })
     * 
    **/
    create<T extends UserQuizCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserQuizCreateArgs<ExtArgs>>
    ): Prisma__UserQuizClient<$Result.GetResult<Prisma.$UserQuizPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserQuizs.
     *     @param {UserQuizCreateManyArgs} args - Arguments to create many UserQuizs.
     *     @example
     *     // Create many UserQuizs
     *     const userQuiz = await prisma.userQuiz.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserQuizCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserQuizCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserQuiz.
     * @param {UserQuizDeleteArgs} args - Arguments to delete one UserQuiz.
     * @example
     * // Delete one UserQuiz
     * const UserQuiz = await prisma.userQuiz.delete({
     *   where: {
     *     // ... filter to delete one UserQuiz
     *   }
     * })
     * 
    **/
    delete<T extends UserQuizDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserQuizDeleteArgs<ExtArgs>>
    ): Prisma__UserQuizClient<$Result.GetResult<Prisma.$UserQuizPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserQuiz.
     * @param {UserQuizUpdateArgs} args - Arguments to update one UserQuiz.
     * @example
     * // Update one UserQuiz
     * const userQuiz = await prisma.userQuiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserQuizUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserQuizUpdateArgs<ExtArgs>>
    ): Prisma__UserQuizClient<$Result.GetResult<Prisma.$UserQuizPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserQuizs.
     * @param {UserQuizDeleteManyArgs} args - Arguments to filter UserQuizs to delete.
     * @example
     * // Delete a few UserQuizs
     * const { count } = await prisma.userQuiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserQuizDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserQuizDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserQuizs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserQuizs
     * const userQuiz = await prisma.userQuiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserQuizUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserQuizUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserQuiz.
     * @param {UserQuizUpsertArgs} args - Arguments to update or create a UserQuiz.
     * @example
     * // Update or create a UserQuiz
     * const userQuiz = await prisma.userQuiz.upsert({
     *   create: {
     *     // ... data to create a UserQuiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserQuiz we want to update
     *   }
     * })
    **/
    upsert<T extends UserQuizUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserQuizUpsertArgs<ExtArgs>>
    ): Prisma__UserQuizClient<$Result.GetResult<Prisma.$UserQuizPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserQuizs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuizCountArgs} args - Arguments to filter UserQuizs to count.
     * @example
     * // Count the number of UserQuizs
     * const count = await prisma.userQuiz.count({
     *   where: {
     *     // ... the filter for the UserQuizs we want to count
     *   }
     * })
    **/
    count<T extends UserQuizCountArgs>(
      args?: Subset<T, UserQuizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserQuizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserQuiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserQuizAggregateArgs>(args: Subset<T, UserQuizAggregateArgs>): Prisma.PrismaPromise<GetUserQuizAggregateType<T>>

    /**
     * Group by UserQuiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuizGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserQuizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserQuizGroupByArgs['orderBy'] }
        : { orderBy?: UserQuizGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserQuizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserQuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserQuiz model
   */
  readonly fields: UserQuizFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserQuiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserQuizClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    artistQuizzes<T extends UserQuiz$artistQuizzesArgs<ExtArgs> = {}>(args?: Subset<T, UserQuiz$artistQuizzesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistQuizPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserQuiz model
   */ 
  interface UserQuizFieldRefs {
    readonly user_id: FieldRef<"UserQuiz", 'String'>
    readonly one_artist_question_remaining: FieldRef<"UserQuiz", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * UserQuiz findUnique
   */
  export type UserQuizFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuiz
     */
    select?: UserQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserQuizInclude<ExtArgs> | null
    /**
     * Filter, which UserQuiz to fetch.
     */
    where: UserQuizWhereUniqueInput
  }


  /**
   * UserQuiz findUniqueOrThrow
   */
  export type UserQuizFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuiz
     */
    select?: UserQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserQuizInclude<ExtArgs> | null
    /**
     * Filter, which UserQuiz to fetch.
     */
    where: UserQuizWhereUniqueInput
  }


  /**
   * UserQuiz findFirst
   */
  export type UserQuizFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuiz
     */
    select?: UserQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserQuizInclude<ExtArgs> | null
    /**
     * Filter, which UserQuiz to fetch.
     */
    where?: UserQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuizs to fetch.
     */
    orderBy?: UserQuizOrderByWithRelationInput | UserQuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserQuizs.
     */
    cursor?: UserQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserQuizs.
     */
    distinct?: UserQuizScalarFieldEnum | UserQuizScalarFieldEnum[]
  }


  /**
   * UserQuiz findFirstOrThrow
   */
  export type UserQuizFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuiz
     */
    select?: UserQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserQuizInclude<ExtArgs> | null
    /**
     * Filter, which UserQuiz to fetch.
     */
    where?: UserQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuizs to fetch.
     */
    orderBy?: UserQuizOrderByWithRelationInput | UserQuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserQuizs.
     */
    cursor?: UserQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserQuizs.
     */
    distinct?: UserQuizScalarFieldEnum | UserQuizScalarFieldEnum[]
  }


  /**
   * UserQuiz findMany
   */
  export type UserQuizFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuiz
     */
    select?: UserQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserQuizInclude<ExtArgs> | null
    /**
     * Filter, which UserQuizs to fetch.
     */
    where?: UserQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuizs to fetch.
     */
    orderBy?: UserQuizOrderByWithRelationInput | UserQuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserQuizs.
     */
    cursor?: UserQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuizs.
     */
    skip?: number
    distinct?: UserQuizScalarFieldEnum | UserQuizScalarFieldEnum[]
  }


  /**
   * UserQuiz create
   */
  export type UserQuizCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuiz
     */
    select?: UserQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserQuizInclude<ExtArgs> | null
    /**
     * The data needed to create a UserQuiz.
     */
    data: XOR<UserQuizCreateInput, UserQuizUncheckedCreateInput>
  }


  /**
   * UserQuiz createMany
   */
  export type UserQuizCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserQuizs.
     */
    data: UserQuizCreateManyInput | UserQuizCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * UserQuiz update
   */
  export type UserQuizUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuiz
     */
    select?: UserQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserQuizInclude<ExtArgs> | null
    /**
     * The data needed to update a UserQuiz.
     */
    data: XOR<UserQuizUpdateInput, UserQuizUncheckedUpdateInput>
    /**
     * Choose, which UserQuiz to update.
     */
    where: UserQuizWhereUniqueInput
  }


  /**
   * UserQuiz updateMany
   */
  export type UserQuizUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserQuizs.
     */
    data: XOR<UserQuizUpdateManyMutationInput, UserQuizUncheckedUpdateManyInput>
    /**
     * Filter which UserQuizs to update
     */
    where?: UserQuizWhereInput
  }


  /**
   * UserQuiz upsert
   */
  export type UserQuizUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuiz
     */
    select?: UserQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserQuizInclude<ExtArgs> | null
    /**
     * The filter to search for the UserQuiz to update in case it exists.
     */
    where: UserQuizWhereUniqueInput
    /**
     * In case the UserQuiz found by the `where` argument doesn't exist, create a new UserQuiz with this data.
     */
    create: XOR<UserQuizCreateInput, UserQuizUncheckedCreateInput>
    /**
     * In case the UserQuiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserQuizUpdateInput, UserQuizUncheckedUpdateInput>
  }


  /**
   * UserQuiz delete
   */
  export type UserQuizDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuiz
     */
    select?: UserQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserQuizInclude<ExtArgs> | null
    /**
     * Filter which UserQuiz to delete.
     */
    where: UserQuizWhereUniqueInput
  }


  /**
   * UserQuiz deleteMany
   */
  export type UserQuizDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserQuizs to delete
     */
    where?: UserQuizWhereInput
  }


  /**
   * UserQuiz.artistQuizzes
   */
  export type UserQuiz$artistQuizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistQuiz
     */
    select?: ArtistQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistQuizInclude<ExtArgs> | null
    where?: ArtistQuizWhereInput
    orderBy?: ArtistQuizOrderByWithRelationInput | ArtistQuizOrderByWithRelationInput[]
    cursor?: ArtistQuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtistQuizScalarFieldEnum | ArtistQuizScalarFieldEnum[]
  }


  /**
   * UserQuiz without action
   */
  export type UserQuizDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuiz
     */
    select?: UserQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserQuizInclude<ExtArgs> | null
  }



  /**
   * Model ArtistQuiz
   */

  export type AggregateArtistQuiz = {
    _count: ArtistQuizCountAggregateOutputType | null
    _min: ArtistQuizMinAggregateOutputType | null
    _max: ArtistQuizMaxAggregateOutputType | null
  }

  export type ArtistQuizMinAggregateOutputType = {
    id: string | null
    question: string | null
    correct_answer: string | null
    userId: string | null
  }

  export type ArtistQuizMaxAggregateOutputType = {
    id: string | null
    question: string | null
    correct_answer: string | null
    userId: string | null
  }

  export type ArtistQuizCountAggregateOutputType = {
    id: number
    question: number
    answers: number
    correct_answer: number
    userId: number
    _all: number
  }


  export type ArtistQuizMinAggregateInputType = {
    id?: true
    question?: true
    correct_answer?: true
    userId?: true
  }

  export type ArtistQuizMaxAggregateInputType = {
    id?: true
    question?: true
    correct_answer?: true
    userId?: true
  }

  export type ArtistQuizCountAggregateInputType = {
    id?: true
    question?: true
    answers?: true
    correct_answer?: true
    userId?: true
    _all?: true
  }

  export type ArtistQuizAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArtistQuiz to aggregate.
     */
    where?: ArtistQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistQuizs to fetch.
     */
    orderBy?: ArtistQuizOrderByWithRelationInput | ArtistQuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistQuizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArtistQuizs
    **/
    _count?: true | ArtistQuizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistQuizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistQuizMaxAggregateInputType
  }

  export type GetArtistQuizAggregateType<T extends ArtistQuizAggregateArgs> = {
        [P in keyof T & keyof AggregateArtistQuiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtistQuiz[P]>
      : GetScalarType<T[P], AggregateArtistQuiz[P]>
  }




  export type ArtistQuizGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistQuizWhereInput
    orderBy?: ArtistQuizOrderByWithAggregationInput | ArtistQuizOrderByWithAggregationInput[]
    by: ArtistQuizScalarFieldEnum[] | ArtistQuizScalarFieldEnum
    having?: ArtistQuizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistQuizCountAggregateInputType | true
    _min?: ArtistQuizMinAggregateInputType
    _max?: ArtistQuizMaxAggregateInputType
  }

  export type ArtistQuizGroupByOutputType = {
    id: string
    question: string
    answers: string[]
    correct_answer: string
    userId: string | null
    _count: ArtistQuizCountAggregateOutputType | null
    _min: ArtistQuizMinAggregateOutputType | null
    _max: ArtistQuizMaxAggregateOutputType | null
  }

  type GetArtistQuizGroupByPayload<T extends ArtistQuizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtistQuizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistQuizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistQuizGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistQuizGroupByOutputType[P]>
        }
      >
    >


  export type ArtistQuizSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answers?: boolean
    correct_answer?: boolean
    userId?: boolean
    userQuiz?: boolean | ArtistQuiz$userQuizArgs<ExtArgs>
  }, ExtArgs["result"]["artistQuiz"]>

  export type ArtistQuizSelectScalar = {
    id?: boolean
    question?: boolean
    answers?: boolean
    correct_answer?: boolean
    userId?: boolean
  }

  export type ArtistQuizInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userQuiz?: boolean | ArtistQuiz$userQuizArgs<ExtArgs>
  }


  export type $ArtistQuizPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArtistQuiz"
    objects: {
      userQuiz: Prisma.$UserQuizPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      question: string
      answers: string[]
      correct_answer: string
      userId: string | null
    }, ExtArgs["result"]["artistQuiz"]>
    composites: {}
  }


  type ArtistQuizGetPayload<S extends boolean | null | undefined | ArtistQuizDefaultArgs> = $Result.GetResult<Prisma.$ArtistQuizPayload, S>

  type ArtistQuizCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ArtistQuizFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ArtistQuizCountAggregateInputType | true
    }

  export interface ArtistQuizDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArtistQuiz'], meta: { name: 'ArtistQuiz' } }
    /**
     * Find zero or one ArtistQuiz that matches the filter.
     * @param {ArtistQuizFindUniqueArgs} args - Arguments to find a ArtistQuiz
     * @example
     * // Get one ArtistQuiz
     * const artistQuiz = await prisma.artistQuiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ArtistQuizFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistQuizFindUniqueArgs<ExtArgs>>
    ): Prisma__ArtistQuizClient<$Result.GetResult<Prisma.$ArtistQuizPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ArtistQuiz that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ArtistQuizFindUniqueOrThrowArgs} args - Arguments to find a ArtistQuiz
     * @example
     * // Get one ArtistQuiz
     * const artistQuiz = await prisma.artistQuiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ArtistQuizFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistQuizFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ArtistQuizClient<$Result.GetResult<Prisma.$ArtistQuizPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ArtistQuiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistQuizFindFirstArgs} args - Arguments to find a ArtistQuiz
     * @example
     * // Get one ArtistQuiz
     * const artistQuiz = await prisma.artistQuiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ArtistQuizFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistQuizFindFirstArgs<ExtArgs>>
    ): Prisma__ArtistQuizClient<$Result.GetResult<Prisma.$ArtistQuizPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ArtistQuiz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistQuizFindFirstOrThrowArgs} args - Arguments to find a ArtistQuiz
     * @example
     * // Get one ArtistQuiz
     * const artistQuiz = await prisma.artistQuiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ArtistQuizFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistQuizFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ArtistQuizClient<$Result.GetResult<Prisma.$ArtistQuizPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ArtistQuizs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistQuizFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArtistQuizs
     * const artistQuizs = await prisma.artistQuiz.findMany()
     * 
     * // Get first 10 ArtistQuizs
     * const artistQuizs = await prisma.artistQuiz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artistQuizWithIdOnly = await prisma.artistQuiz.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ArtistQuizFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistQuizFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistQuizPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ArtistQuiz.
     * @param {ArtistQuizCreateArgs} args - Arguments to create a ArtistQuiz.
     * @example
     * // Create one ArtistQuiz
     * const ArtistQuiz = await prisma.artistQuiz.create({
     *   data: {
     *     // ... data to create a ArtistQuiz
     *   }
     * })
     * 
    **/
    create<T extends ArtistQuizCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistQuizCreateArgs<ExtArgs>>
    ): Prisma__ArtistQuizClient<$Result.GetResult<Prisma.$ArtistQuizPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ArtistQuizs.
     *     @param {ArtistQuizCreateManyArgs} args - Arguments to create many ArtistQuizs.
     *     @example
     *     // Create many ArtistQuizs
     *     const artistQuiz = await prisma.artistQuiz.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ArtistQuizCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistQuizCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ArtistQuiz.
     * @param {ArtistQuizDeleteArgs} args - Arguments to delete one ArtistQuiz.
     * @example
     * // Delete one ArtistQuiz
     * const ArtistQuiz = await prisma.artistQuiz.delete({
     *   where: {
     *     // ... filter to delete one ArtistQuiz
     *   }
     * })
     * 
    **/
    delete<T extends ArtistQuizDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistQuizDeleteArgs<ExtArgs>>
    ): Prisma__ArtistQuizClient<$Result.GetResult<Prisma.$ArtistQuizPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ArtistQuiz.
     * @param {ArtistQuizUpdateArgs} args - Arguments to update one ArtistQuiz.
     * @example
     * // Update one ArtistQuiz
     * const artistQuiz = await prisma.artistQuiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ArtistQuizUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistQuizUpdateArgs<ExtArgs>>
    ): Prisma__ArtistQuizClient<$Result.GetResult<Prisma.$ArtistQuizPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ArtistQuizs.
     * @param {ArtistQuizDeleteManyArgs} args - Arguments to filter ArtistQuizs to delete.
     * @example
     * // Delete a few ArtistQuizs
     * const { count } = await prisma.artistQuiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ArtistQuizDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistQuizDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArtistQuizs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistQuizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArtistQuizs
     * const artistQuiz = await prisma.artistQuiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ArtistQuizUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistQuizUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ArtistQuiz.
     * @param {ArtistQuizUpsertArgs} args - Arguments to update or create a ArtistQuiz.
     * @example
     * // Update or create a ArtistQuiz
     * const artistQuiz = await prisma.artistQuiz.upsert({
     *   create: {
     *     // ... data to create a ArtistQuiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArtistQuiz we want to update
     *   }
     * })
    **/
    upsert<T extends ArtistQuizUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistQuizUpsertArgs<ExtArgs>>
    ): Prisma__ArtistQuizClient<$Result.GetResult<Prisma.$ArtistQuizPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ArtistQuizs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistQuizCountArgs} args - Arguments to filter ArtistQuizs to count.
     * @example
     * // Count the number of ArtistQuizs
     * const count = await prisma.artistQuiz.count({
     *   where: {
     *     // ... the filter for the ArtistQuizs we want to count
     *   }
     * })
    **/
    count<T extends ArtistQuizCountArgs>(
      args?: Subset<T, ArtistQuizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistQuizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArtistQuiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistQuizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArtistQuizAggregateArgs>(args: Subset<T, ArtistQuizAggregateArgs>): Prisma.PrismaPromise<GetArtistQuizAggregateType<T>>

    /**
     * Group by ArtistQuiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistQuizGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArtistQuizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistQuizGroupByArgs['orderBy'] }
        : { orderBy?: ArtistQuizGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArtistQuizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistQuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArtistQuiz model
   */
  readonly fields: ArtistQuizFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArtistQuiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtistQuizClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    userQuiz<T extends ArtistQuiz$userQuizArgs<ExtArgs> = {}>(args?: Subset<T, ArtistQuiz$userQuizArgs<ExtArgs>>): Prisma__UserQuizClient<$Result.GetResult<Prisma.$UserQuizPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ArtistQuiz model
   */ 
  interface ArtistQuizFieldRefs {
    readonly id: FieldRef<"ArtistQuiz", 'String'>
    readonly question: FieldRef<"ArtistQuiz", 'String'>
    readonly answers: FieldRef<"ArtistQuiz", 'String[]'>
    readonly correct_answer: FieldRef<"ArtistQuiz", 'String'>
    readonly userId: FieldRef<"ArtistQuiz", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ArtistQuiz findUnique
   */
  export type ArtistQuizFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistQuiz
     */
    select?: ArtistQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistQuizInclude<ExtArgs> | null
    /**
     * Filter, which ArtistQuiz to fetch.
     */
    where: ArtistQuizWhereUniqueInput
  }


  /**
   * ArtistQuiz findUniqueOrThrow
   */
  export type ArtistQuizFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistQuiz
     */
    select?: ArtistQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistQuizInclude<ExtArgs> | null
    /**
     * Filter, which ArtistQuiz to fetch.
     */
    where: ArtistQuizWhereUniqueInput
  }


  /**
   * ArtistQuiz findFirst
   */
  export type ArtistQuizFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistQuiz
     */
    select?: ArtistQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistQuizInclude<ExtArgs> | null
    /**
     * Filter, which ArtistQuiz to fetch.
     */
    where?: ArtistQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistQuizs to fetch.
     */
    orderBy?: ArtistQuizOrderByWithRelationInput | ArtistQuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArtistQuizs.
     */
    cursor?: ArtistQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistQuizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtistQuizs.
     */
    distinct?: ArtistQuizScalarFieldEnum | ArtistQuizScalarFieldEnum[]
  }


  /**
   * ArtistQuiz findFirstOrThrow
   */
  export type ArtistQuizFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistQuiz
     */
    select?: ArtistQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistQuizInclude<ExtArgs> | null
    /**
     * Filter, which ArtistQuiz to fetch.
     */
    where?: ArtistQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistQuizs to fetch.
     */
    orderBy?: ArtistQuizOrderByWithRelationInput | ArtistQuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArtistQuizs.
     */
    cursor?: ArtistQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistQuizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtistQuizs.
     */
    distinct?: ArtistQuizScalarFieldEnum | ArtistQuizScalarFieldEnum[]
  }


  /**
   * ArtistQuiz findMany
   */
  export type ArtistQuizFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistQuiz
     */
    select?: ArtistQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistQuizInclude<ExtArgs> | null
    /**
     * Filter, which ArtistQuizs to fetch.
     */
    where?: ArtistQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistQuizs to fetch.
     */
    orderBy?: ArtistQuizOrderByWithRelationInput | ArtistQuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArtistQuizs.
     */
    cursor?: ArtistQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistQuizs.
     */
    skip?: number
    distinct?: ArtistQuizScalarFieldEnum | ArtistQuizScalarFieldEnum[]
  }


  /**
   * ArtistQuiz create
   */
  export type ArtistQuizCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistQuiz
     */
    select?: ArtistQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistQuizInclude<ExtArgs> | null
    /**
     * The data needed to create a ArtistQuiz.
     */
    data: XOR<ArtistQuizCreateInput, ArtistQuizUncheckedCreateInput>
  }


  /**
   * ArtistQuiz createMany
   */
  export type ArtistQuizCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArtistQuizs.
     */
    data: ArtistQuizCreateManyInput | ArtistQuizCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ArtistQuiz update
   */
  export type ArtistQuizUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistQuiz
     */
    select?: ArtistQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistQuizInclude<ExtArgs> | null
    /**
     * The data needed to update a ArtistQuiz.
     */
    data: XOR<ArtistQuizUpdateInput, ArtistQuizUncheckedUpdateInput>
    /**
     * Choose, which ArtistQuiz to update.
     */
    where: ArtistQuizWhereUniqueInput
  }


  /**
   * ArtistQuiz updateMany
   */
  export type ArtistQuizUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArtistQuizs.
     */
    data: XOR<ArtistQuizUpdateManyMutationInput, ArtistQuizUncheckedUpdateManyInput>
    /**
     * Filter which ArtistQuizs to update
     */
    where?: ArtistQuizWhereInput
  }


  /**
   * ArtistQuiz upsert
   */
  export type ArtistQuizUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistQuiz
     */
    select?: ArtistQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistQuizInclude<ExtArgs> | null
    /**
     * The filter to search for the ArtistQuiz to update in case it exists.
     */
    where: ArtistQuizWhereUniqueInput
    /**
     * In case the ArtistQuiz found by the `where` argument doesn't exist, create a new ArtistQuiz with this data.
     */
    create: XOR<ArtistQuizCreateInput, ArtistQuizUncheckedCreateInput>
    /**
     * In case the ArtistQuiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistQuizUpdateInput, ArtistQuizUncheckedUpdateInput>
  }


  /**
   * ArtistQuiz delete
   */
  export type ArtistQuizDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistQuiz
     */
    select?: ArtistQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistQuizInclude<ExtArgs> | null
    /**
     * Filter which ArtistQuiz to delete.
     */
    where: ArtistQuizWhereUniqueInput
  }


  /**
   * ArtistQuiz deleteMany
   */
  export type ArtistQuizDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArtistQuizs to delete
     */
    where?: ArtistQuizWhereInput
  }


  /**
   * ArtistQuiz.userQuiz
   */
  export type ArtistQuiz$userQuizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuiz
     */
    select?: UserQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserQuizInclude<ExtArgs> | null
    where?: UserQuizWhereInput
  }


  /**
   * ArtistQuiz without action
   */
  export type ArtistQuizDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistQuiz
     */
    select?: ArtistQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistQuizInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserQuizScalarFieldEnum: {
    user_id: 'user_id',
    one_artist_question_remaining: 'one_artist_question_remaining'
  };

  export type UserQuizScalarFieldEnum = (typeof UserQuizScalarFieldEnum)[keyof typeof UserQuizScalarFieldEnum]


  export const ArtistQuizScalarFieldEnum: {
    id: 'id',
    question: 'question',
    answers: 'answers',
    correct_answer: 'correct_answer',
    userId: 'userId'
  };

  export type ArtistQuizScalarFieldEnum = (typeof ArtistQuizScalarFieldEnum)[keyof typeof ArtistQuizScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserQuizWhereInput = {
    AND?: UserQuizWhereInput | UserQuizWhereInput[]
    OR?: UserQuizWhereInput[]
    NOT?: UserQuizWhereInput | UserQuizWhereInput[]
    user_id?: StringFilter<"UserQuiz"> | string
    one_artist_question_remaining?: BoolFilter<"UserQuiz"> | boolean
    artistQuizzes?: ArtistQuizListRelationFilter
  }

  export type UserQuizOrderByWithRelationInput = {
    user_id?: SortOrder
    one_artist_question_remaining?: SortOrder
    artistQuizzes?: ArtistQuizOrderByRelationAggregateInput
  }

  export type UserQuizWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    AND?: UserQuizWhereInput | UserQuizWhereInput[]
    OR?: UserQuizWhereInput[]
    NOT?: UserQuizWhereInput | UserQuizWhereInput[]
    one_artist_question_remaining?: BoolFilter<"UserQuiz"> | boolean
    artistQuizzes?: ArtistQuizListRelationFilter
  }, "user_id">

  export type UserQuizOrderByWithAggregationInput = {
    user_id?: SortOrder
    one_artist_question_remaining?: SortOrder
    _count?: UserQuizCountOrderByAggregateInput
    _max?: UserQuizMaxOrderByAggregateInput
    _min?: UserQuizMinOrderByAggregateInput
  }

  export type UserQuizScalarWhereWithAggregatesInput = {
    AND?: UserQuizScalarWhereWithAggregatesInput | UserQuizScalarWhereWithAggregatesInput[]
    OR?: UserQuizScalarWhereWithAggregatesInput[]
    NOT?: UserQuizScalarWhereWithAggregatesInput | UserQuizScalarWhereWithAggregatesInput[]
    user_id?: StringWithAggregatesFilter<"UserQuiz"> | string
    one_artist_question_remaining?: BoolWithAggregatesFilter<"UserQuiz"> | boolean
  }

  export type ArtistQuizWhereInput = {
    AND?: ArtistQuizWhereInput | ArtistQuizWhereInput[]
    OR?: ArtistQuizWhereInput[]
    NOT?: ArtistQuizWhereInput | ArtistQuizWhereInput[]
    id?: StringFilter<"ArtistQuiz"> | string
    question?: StringFilter<"ArtistQuiz"> | string
    answers?: StringNullableListFilter<"ArtistQuiz">
    correct_answer?: StringFilter<"ArtistQuiz"> | string
    userId?: StringNullableFilter<"ArtistQuiz"> | string | null
    userQuiz?: XOR<UserQuizNullableRelationFilter, UserQuizWhereInput> | null
  }

  export type ArtistQuizOrderByWithRelationInput = {
    id?: SortOrder
    question?: SortOrder
    answers?: SortOrder
    correct_answer?: SortOrder
    userId?: SortOrderInput | SortOrder
    userQuiz?: UserQuizOrderByWithRelationInput
  }

  export type ArtistQuizWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArtistQuizWhereInput | ArtistQuizWhereInput[]
    OR?: ArtistQuizWhereInput[]
    NOT?: ArtistQuizWhereInput | ArtistQuizWhereInput[]
    question?: StringFilter<"ArtistQuiz"> | string
    answers?: StringNullableListFilter<"ArtistQuiz">
    correct_answer?: StringFilter<"ArtistQuiz"> | string
    userId?: StringNullableFilter<"ArtistQuiz"> | string | null
    userQuiz?: XOR<UserQuizNullableRelationFilter, UserQuizWhereInput> | null
  }, "id">

  export type ArtistQuizOrderByWithAggregationInput = {
    id?: SortOrder
    question?: SortOrder
    answers?: SortOrder
    correct_answer?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: ArtistQuizCountOrderByAggregateInput
    _max?: ArtistQuizMaxOrderByAggregateInput
    _min?: ArtistQuizMinOrderByAggregateInput
  }

  export type ArtistQuizScalarWhereWithAggregatesInput = {
    AND?: ArtistQuizScalarWhereWithAggregatesInput | ArtistQuizScalarWhereWithAggregatesInput[]
    OR?: ArtistQuizScalarWhereWithAggregatesInput[]
    NOT?: ArtistQuizScalarWhereWithAggregatesInput | ArtistQuizScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ArtistQuiz"> | string
    question?: StringWithAggregatesFilter<"ArtistQuiz"> | string
    answers?: StringNullableListFilter<"ArtistQuiz">
    correct_answer?: StringWithAggregatesFilter<"ArtistQuiz"> | string
    userId?: StringNullableWithAggregatesFilter<"ArtistQuiz"> | string | null
  }

  export type UserQuizCreateInput = {
    user_id: string
    one_artist_question_remaining?: boolean
    artistQuizzes?: ArtistQuizCreateNestedManyWithoutUserQuizInput
  }

  export type UserQuizUncheckedCreateInput = {
    user_id: string
    one_artist_question_remaining?: boolean
    artistQuizzes?: ArtistQuizUncheckedCreateNestedManyWithoutUserQuizInput
  }

  export type UserQuizUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    one_artist_question_remaining?: BoolFieldUpdateOperationsInput | boolean
    artistQuizzes?: ArtistQuizUpdateManyWithoutUserQuizNestedInput
  }

  export type UserQuizUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    one_artist_question_remaining?: BoolFieldUpdateOperationsInput | boolean
    artistQuizzes?: ArtistQuizUncheckedUpdateManyWithoutUserQuizNestedInput
  }

  export type UserQuizCreateManyInput = {
    user_id: string
    one_artist_question_remaining?: boolean
  }

  export type UserQuizUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    one_artist_question_remaining?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserQuizUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    one_artist_question_remaining?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ArtistQuizCreateInput = {
    id: string
    question: string
    answers?: ArtistQuizCreateanswersInput | string[]
    correct_answer: string
    userQuiz?: UserQuizCreateNestedOneWithoutArtistQuizzesInput
  }

  export type ArtistQuizUncheckedCreateInput = {
    id: string
    question: string
    answers?: ArtistQuizCreateanswersInput | string[]
    correct_answer: string
    userId?: string | null
  }

  export type ArtistQuizUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answers?: ArtistQuizUpdateanswersInput | string[]
    correct_answer?: StringFieldUpdateOperationsInput | string
    userQuiz?: UserQuizUpdateOneWithoutArtistQuizzesNestedInput
  }

  export type ArtistQuizUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answers?: ArtistQuizUpdateanswersInput | string[]
    correct_answer?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArtistQuizCreateManyInput = {
    id: string
    question: string
    answers?: ArtistQuizCreateanswersInput | string[]
    correct_answer: string
    userId?: string | null
  }

  export type ArtistQuizUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answers?: ArtistQuizUpdateanswersInput | string[]
    correct_answer?: StringFieldUpdateOperationsInput | string
  }

  export type ArtistQuizUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answers?: ArtistQuizUpdateanswersInput | string[]
    correct_answer?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ArtistQuizListRelationFilter = {
    every?: ArtistQuizWhereInput
    some?: ArtistQuizWhereInput
    none?: ArtistQuizWhereInput
  }

  export type ArtistQuizOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserQuizCountOrderByAggregateInput = {
    user_id?: SortOrder
    one_artist_question_remaining?: SortOrder
  }

  export type UserQuizMaxOrderByAggregateInput = {
    user_id?: SortOrder
    one_artist_question_remaining?: SortOrder
  }

  export type UserQuizMinOrderByAggregateInput = {
    user_id?: SortOrder
    one_artist_question_remaining?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserQuizNullableRelationFilter = {
    is?: UserQuizWhereInput | null
    isNot?: UserQuizWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ArtistQuizCountOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answers?: SortOrder
    correct_answer?: SortOrder
    userId?: SortOrder
  }

  export type ArtistQuizMaxOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    correct_answer?: SortOrder
    userId?: SortOrder
  }

  export type ArtistQuizMinOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    correct_answer?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ArtistQuizCreateNestedManyWithoutUserQuizInput = {
    create?: XOR<ArtistQuizCreateWithoutUserQuizInput, ArtistQuizUncheckedCreateWithoutUserQuizInput> | ArtistQuizCreateWithoutUserQuizInput[] | ArtistQuizUncheckedCreateWithoutUserQuizInput[]
    connectOrCreate?: ArtistQuizCreateOrConnectWithoutUserQuizInput | ArtistQuizCreateOrConnectWithoutUserQuizInput[]
    createMany?: ArtistQuizCreateManyUserQuizInputEnvelope
    connect?: ArtistQuizWhereUniqueInput | ArtistQuizWhereUniqueInput[]
  }

  export type ArtistQuizUncheckedCreateNestedManyWithoutUserQuizInput = {
    create?: XOR<ArtistQuizCreateWithoutUserQuizInput, ArtistQuizUncheckedCreateWithoutUserQuizInput> | ArtistQuizCreateWithoutUserQuizInput[] | ArtistQuizUncheckedCreateWithoutUserQuizInput[]
    connectOrCreate?: ArtistQuizCreateOrConnectWithoutUserQuizInput | ArtistQuizCreateOrConnectWithoutUserQuizInput[]
    createMany?: ArtistQuizCreateManyUserQuizInputEnvelope
    connect?: ArtistQuizWhereUniqueInput | ArtistQuizWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ArtistQuizUpdateManyWithoutUserQuizNestedInput = {
    create?: XOR<ArtistQuizCreateWithoutUserQuizInput, ArtistQuizUncheckedCreateWithoutUserQuizInput> | ArtistQuizCreateWithoutUserQuizInput[] | ArtistQuizUncheckedCreateWithoutUserQuizInput[]
    connectOrCreate?: ArtistQuizCreateOrConnectWithoutUserQuizInput | ArtistQuizCreateOrConnectWithoutUserQuizInput[]
    upsert?: ArtistQuizUpsertWithWhereUniqueWithoutUserQuizInput | ArtistQuizUpsertWithWhereUniqueWithoutUserQuizInput[]
    createMany?: ArtistQuizCreateManyUserQuizInputEnvelope
    set?: ArtistQuizWhereUniqueInput | ArtistQuizWhereUniqueInput[]
    disconnect?: ArtistQuizWhereUniqueInput | ArtistQuizWhereUniqueInput[]
    delete?: ArtistQuizWhereUniqueInput | ArtistQuizWhereUniqueInput[]
    connect?: ArtistQuizWhereUniqueInput | ArtistQuizWhereUniqueInput[]
    update?: ArtistQuizUpdateWithWhereUniqueWithoutUserQuizInput | ArtistQuizUpdateWithWhereUniqueWithoutUserQuizInput[]
    updateMany?: ArtistQuizUpdateManyWithWhereWithoutUserQuizInput | ArtistQuizUpdateManyWithWhereWithoutUserQuizInput[]
    deleteMany?: ArtistQuizScalarWhereInput | ArtistQuizScalarWhereInput[]
  }

  export type ArtistQuizUncheckedUpdateManyWithoutUserQuizNestedInput = {
    create?: XOR<ArtistQuizCreateWithoutUserQuizInput, ArtistQuizUncheckedCreateWithoutUserQuizInput> | ArtistQuizCreateWithoutUserQuizInput[] | ArtistQuizUncheckedCreateWithoutUserQuizInput[]
    connectOrCreate?: ArtistQuizCreateOrConnectWithoutUserQuizInput | ArtistQuizCreateOrConnectWithoutUserQuizInput[]
    upsert?: ArtistQuizUpsertWithWhereUniqueWithoutUserQuizInput | ArtistQuizUpsertWithWhereUniqueWithoutUserQuizInput[]
    createMany?: ArtistQuizCreateManyUserQuizInputEnvelope
    set?: ArtistQuizWhereUniqueInput | ArtistQuizWhereUniqueInput[]
    disconnect?: ArtistQuizWhereUniqueInput | ArtistQuizWhereUniqueInput[]
    delete?: ArtistQuizWhereUniqueInput | ArtistQuizWhereUniqueInput[]
    connect?: ArtistQuizWhereUniqueInput | ArtistQuizWhereUniqueInput[]
    update?: ArtistQuizUpdateWithWhereUniqueWithoutUserQuizInput | ArtistQuizUpdateWithWhereUniqueWithoutUserQuizInput[]
    updateMany?: ArtistQuizUpdateManyWithWhereWithoutUserQuizInput | ArtistQuizUpdateManyWithWhereWithoutUserQuizInput[]
    deleteMany?: ArtistQuizScalarWhereInput | ArtistQuizScalarWhereInput[]
  }

  export type ArtistQuizCreateanswersInput = {
    set: string[]
  }

  export type UserQuizCreateNestedOneWithoutArtistQuizzesInput = {
    create?: XOR<UserQuizCreateWithoutArtistQuizzesInput, UserQuizUncheckedCreateWithoutArtistQuizzesInput>
    connectOrCreate?: UserQuizCreateOrConnectWithoutArtistQuizzesInput
    connect?: UserQuizWhereUniqueInput
  }

  export type ArtistQuizUpdateanswersInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserQuizUpdateOneWithoutArtistQuizzesNestedInput = {
    create?: XOR<UserQuizCreateWithoutArtistQuizzesInput, UserQuizUncheckedCreateWithoutArtistQuizzesInput>
    connectOrCreate?: UserQuizCreateOrConnectWithoutArtistQuizzesInput
    upsert?: UserQuizUpsertWithoutArtistQuizzesInput
    disconnect?: UserQuizWhereInput | boolean
    delete?: UserQuizWhereInput | boolean
    connect?: UserQuizWhereUniqueInput
    update?: XOR<XOR<UserQuizUpdateToOneWithWhereWithoutArtistQuizzesInput, UserQuizUpdateWithoutArtistQuizzesInput>, UserQuizUncheckedUpdateWithoutArtistQuizzesInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ArtistQuizCreateWithoutUserQuizInput = {
    id: string
    question: string
    answers?: ArtistQuizCreateanswersInput | string[]
    correct_answer: string
  }

  export type ArtistQuizUncheckedCreateWithoutUserQuizInput = {
    id: string
    question: string
    answers?: ArtistQuizCreateanswersInput | string[]
    correct_answer: string
  }

  export type ArtistQuizCreateOrConnectWithoutUserQuizInput = {
    where: ArtistQuizWhereUniqueInput
    create: XOR<ArtistQuizCreateWithoutUserQuizInput, ArtistQuizUncheckedCreateWithoutUserQuizInput>
  }

  export type ArtistQuizCreateManyUserQuizInputEnvelope = {
    data: ArtistQuizCreateManyUserQuizInput | ArtistQuizCreateManyUserQuizInput[]
    skipDuplicates?: boolean
  }

  export type ArtistQuizUpsertWithWhereUniqueWithoutUserQuizInput = {
    where: ArtistQuizWhereUniqueInput
    update: XOR<ArtistQuizUpdateWithoutUserQuizInput, ArtistQuizUncheckedUpdateWithoutUserQuizInput>
    create: XOR<ArtistQuizCreateWithoutUserQuizInput, ArtistQuizUncheckedCreateWithoutUserQuizInput>
  }

  export type ArtistQuizUpdateWithWhereUniqueWithoutUserQuizInput = {
    where: ArtistQuizWhereUniqueInput
    data: XOR<ArtistQuizUpdateWithoutUserQuizInput, ArtistQuizUncheckedUpdateWithoutUserQuizInput>
  }

  export type ArtistQuizUpdateManyWithWhereWithoutUserQuizInput = {
    where: ArtistQuizScalarWhereInput
    data: XOR<ArtistQuizUpdateManyMutationInput, ArtistQuizUncheckedUpdateManyWithoutUserQuizInput>
  }

  export type ArtistQuizScalarWhereInput = {
    AND?: ArtistQuizScalarWhereInput | ArtistQuizScalarWhereInput[]
    OR?: ArtistQuizScalarWhereInput[]
    NOT?: ArtistQuizScalarWhereInput | ArtistQuizScalarWhereInput[]
    id?: StringFilter<"ArtistQuiz"> | string
    question?: StringFilter<"ArtistQuiz"> | string
    answers?: StringNullableListFilter<"ArtistQuiz">
    correct_answer?: StringFilter<"ArtistQuiz"> | string
    userId?: StringNullableFilter<"ArtistQuiz"> | string | null
  }

  export type UserQuizCreateWithoutArtistQuizzesInput = {
    user_id: string
    one_artist_question_remaining?: boolean
  }

  export type UserQuizUncheckedCreateWithoutArtistQuizzesInput = {
    user_id: string
    one_artist_question_remaining?: boolean
  }

  export type UserQuizCreateOrConnectWithoutArtistQuizzesInput = {
    where: UserQuizWhereUniqueInput
    create: XOR<UserQuizCreateWithoutArtistQuizzesInput, UserQuizUncheckedCreateWithoutArtistQuizzesInput>
  }

  export type UserQuizUpsertWithoutArtistQuizzesInput = {
    update: XOR<UserQuizUpdateWithoutArtistQuizzesInput, UserQuizUncheckedUpdateWithoutArtistQuizzesInput>
    create: XOR<UserQuizCreateWithoutArtistQuizzesInput, UserQuizUncheckedCreateWithoutArtistQuizzesInput>
    where?: UserQuizWhereInput
  }

  export type UserQuizUpdateToOneWithWhereWithoutArtistQuizzesInput = {
    where?: UserQuizWhereInput
    data: XOR<UserQuizUpdateWithoutArtistQuizzesInput, UserQuizUncheckedUpdateWithoutArtistQuizzesInput>
  }

  export type UserQuizUpdateWithoutArtistQuizzesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    one_artist_question_remaining?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserQuizUncheckedUpdateWithoutArtistQuizzesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    one_artist_question_remaining?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ArtistQuizCreateManyUserQuizInput = {
    id: string
    question: string
    answers?: ArtistQuizCreateanswersInput | string[]
    correct_answer: string
  }

  export type ArtistQuizUpdateWithoutUserQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answers?: ArtistQuizUpdateanswersInput | string[]
    correct_answer?: StringFieldUpdateOperationsInput | string
  }

  export type ArtistQuizUncheckedUpdateWithoutUserQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answers?: ArtistQuizUpdateanswersInput | string[]
    correct_answer?: StringFieldUpdateOperationsInput | string
  }

  export type ArtistQuizUncheckedUpdateManyWithoutUserQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answers?: ArtistQuizUpdateanswersInput | string[]
    correct_answer?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserQuizCountOutputTypeDefaultArgs instead
     */
    export type UserQuizCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserQuizCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserQuizDefaultArgs instead
     */
    export type UserQuizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserQuizDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ArtistQuizDefaultArgs instead
     */
    export type ArtistQuizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ArtistQuizDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
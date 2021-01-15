import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent & { args?: { [key: string]: unknown } },
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult & {args?: TArgs}> | TResult & {args?: TArgs}

export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T[P] extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : DeepPartial<T[P]>
};

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Food = {
  __typename?: 'Food';
  id: Scalars['ID'];
  name: Scalars['String'];
  calories: Scalars['Int'];
  tasty: Scalars['Boolean'];
};

export type Dog = {
  __typename?: 'Dog';
  id: Scalars['ID'];
  name: Scalars['String'];
  age: Scalars['Int'];
  favoriteFood?: Maybe<Food>;
};

export type Person = {
  __typename?: 'Person';
  id: Scalars['ID'];
  firstName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  age: Scalars['Int'];
  favoriteFood: Food;
  dog?: Maybe<Dog>;
};

export type Query = {
  __typename?: 'Query';
  everyone: Array<Person>;
  personById?: Maybe<Person>;
};


export type QueryPersonByIdArgs = {
  id: Scalars['ID'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Food: ResolverTypeWrapper<DeepPartial<Food>>;
  ID: ResolverTypeWrapper<DeepPartial<Scalars['ID']>>;
  String: ResolverTypeWrapper<DeepPartial<Scalars['String']>>;
  Int: ResolverTypeWrapper<DeepPartial<Scalars['Int']>>;
  Boolean: ResolverTypeWrapper<DeepPartial<Scalars['Boolean']>>;
  Dog: ResolverTypeWrapper<DeepPartial<Dog>>;
  Person: ResolverTypeWrapper<DeepPartial<Person>>;
  Query: ResolverTypeWrapper<{}>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Food: DeepPartial<Food>;
  ID: DeepPartial<Scalars['ID']>;
  String: DeepPartial<Scalars['String']>;
  Int: DeepPartial<Scalars['Int']>;
  Boolean: DeepPartial<Scalars['Boolean']>;
  Dog: DeepPartial<Dog>;
  Person: DeepPartial<Person>;
  Query: {};
};

export type FoodResolvers<ContextType = any, ParentType extends ResolversParentTypes['Food'] = ResolversParentTypes['Food']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  calories?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tasty?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DogResolvers<ContextType = any, ParentType extends ResolversParentTypes['Dog'] = ResolversParentTypes['Dog']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  age?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  favoriteFood?: Resolver<Maybe<ResolversTypes['Food']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonResolvers<ContextType = any, ParentType extends ResolversParentTypes['Person'] = ResolversParentTypes['Person']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  middleName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  age?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  favoriteFood?: Resolver<ResolversTypes['Food'], ParentType, ContextType>;
  dog?: Resolver<Maybe<ResolversTypes['Dog']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  everyone?: Resolver<Array<ResolversTypes['Person']>, ParentType, ContextType>;
  personById?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<QueryPersonByIdArgs, 'id'>>;
};

export type Resolvers<ContextType = any> = {
  Food?: FoodResolvers<ContextType>;
  Dog?: DogResolvers<ContextType>;
  Person?: PersonResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch("http://localhost:8080/v1/graphql", {
    method: "POST",
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "app_user" */
export type App_User = {
  __typename?: 'app_user';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An array relationship */
  tweets: Array<Tweet>;
  /** An aggregate relationship */
  tweets_aggregate: Tweet_Aggregate;
  updated_at: Scalars['timestamptz'];
  username: Scalars['String'];
};


/** columns and relationships of "app_user" */
export type App_UserTweetsArgs = {
  distinct_on?: InputMaybe<Array<Tweet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tweet_Order_By>>;
  where?: InputMaybe<Tweet_Bool_Exp>;
};


/** columns and relationships of "app_user" */
export type App_UserTweets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tweet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tweet_Order_By>>;
  where?: InputMaybe<Tweet_Bool_Exp>;
};

/** aggregated selection of "app_user" */
export type App_User_Aggregate = {
  __typename?: 'app_user_aggregate';
  aggregate?: Maybe<App_User_Aggregate_Fields>;
  nodes: Array<App_User>;
};

/** aggregate fields of "app_user" */
export type App_User_Aggregate_Fields = {
  __typename?: 'app_user_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<App_User_Max_Fields>;
  min?: Maybe<App_User_Min_Fields>;
};


/** aggregate fields of "app_user" */
export type App_User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<App_User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "app_user". All fields are combined with a logical 'AND'. */
export type App_User_Bool_Exp = {
  _and?: InputMaybe<Array<App_User_Bool_Exp>>;
  _not?: InputMaybe<App_User_Bool_Exp>;
  _or?: InputMaybe<Array<App_User_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  tweets?: InputMaybe<Tweet_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "app_user" */
export enum App_User_Constraint {
  /** unique or primary key constraint */
  AppUserPkey = 'app_user_pkey',
  /** unique or primary key constraint */
  AppUserUsernameKey = 'app_user_username_key'
}

/** input type for inserting data into table "app_user" */
export type App_User_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  tweets?: InputMaybe<Tweet_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type App_User_Max_Fields = {
  __typename?: 'app_user_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type App_User_Min_Fields = {
  __typename?: 'app_user_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "app_user" */
export type App_User_Mutation_Response = {
  __typename?: 'app_user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<App_User>;
};

/** input type for inserting object relation for remote table "app_user" */
export type App_User_Obj_Rel_Insert_Input = {
  data: App_User_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<App_User_On_Conflict>;
};

/** on conflict condition type for table "app_user" */
export type App_User_On_Conflict = {
  constraint: App_User_Constraint;
  update_columns?: Array<App_User_Update_Column>;
  where?: InputMaybe<App_User_Bool_Exp>;
};

/** Ordering options when selecting data from "app_user". */
export type App_User_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tweets_aggregate?: InputMaybe<Tweet_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: app_user */
export type App_User_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "app_user" */
export enum App_User_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "app_user" */
export type App_User_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  username?: InputMaybe<Scalars['String']>;
};

/** update columns of table "app_user" */
export enum App_User_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "app_user" */
  delete_app_user?: Maybe<App_User_Mutation_Response>;
  /** delete single row from the table: "app_user" */
  delete_app_user_by_pk?: Maybe<App_User>;
  /** delete data from the table: "tweet" */
  delete_tweet?: Maybe<Tweet_Mutation_Response>;
  /** delete single row from the table: "tweet" */
  delete_tweet_by_pk?: Maybe<Tweet>;
  /** insert data into the table: "app_user" */
  insert_app_user?: Maybe<App_User_Mutation_Response>;
  /** insert a single row into the table: "app_user" */
  insert_app_user_one?: Maybe<App_User>;
  /** insert data into the table: "tweet" */
  insert_tweet?: Maybe<Tweet_Mutation_Response>;
  /** insert a single row into the table: "tweet" */
  insert_tweet_one?: Maybe<Tweet>;
  /** update data of the table: "app_user" */
  update_app_user?: Maybe<App_User_Mutation_Response>;
  /** update single row of the table: "app_user" */
  update_app_user_by_pk?: Maybe<App_User>;
  /** update data of the table: "tweet" */
  update_tweet?: Maybe<Tweet_Mutation_Response>;
  /** update single row of the table: "tweet" */
  update_tweet_by_pk?: Maybe<Tweet>;
};


/** mutation root */
export type Mutation_RootDelete_App_UserArgs = {
  where: App_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_App_User_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_TweetArgs = {
  where: Tweet_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tweet_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_App_UserArgs = {
  objects: Array<App_User_Insert_Input>;
  on_conflict?: InputMaybe<App_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_App_User_OneArgs = {
  object: App_User_Insert_Input;
  on_conflict?: InputMaybe<App_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TweetArgs = {
  objects: Array<Tweet_Insert_Input>;
  on_conflict?: InputMaybe<Tweet_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tweet_OneArgs = {
  object: Tweet_Insert_Input;
  on_conflict?: InputMaybe<Tweet_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_App_UserArgs = {
  _set?: InputMaybe<App_User_Set_Input>;
  where: App_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_App_User_By_PkArgs = {
  _set?: InputMaybe<App_User_Set_Input>;
  pk_columns: App_User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TweetArgs = {
  _set?: InputMaybe<Tweet_Set_Input>;
  where: Tweet_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tweet_By_PkArgs = {
  _set?: InputMaybe<Tweet_Set_Input>;
  pk_columns: Tweet_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "app_user" */
  app_user: Array<App_User>;
  /** fetch aggregated fields from the table: "app_user" */
  app_user_aggregate: App_User_Aggregate;
  /** fetch data from the table: "app_user" using primary key columns */
  app_user_by_pk?: Maybe<App_User>;
  /** fetch data from the table: "tweet" */
  tweet: Array<Tweet>;
  /** fetch aggregated fields from the table: "tweet" */
  tweet_aggregate: Tweet_Aggregate;
  /** fetch data from the table: "tweet" using primary key columns */
  tweet_by_pk?: Maybe<Tweet>;
};


export type Query_RootApp_UserArgs = {
  distinct_on?: InputMaybe<Array<App_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_User_Order_By>>;
  where?: InputMaybe<App_User_Bool_Exp>;
};


export type Query_RootApp_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_User_Order_By>>;
  where?: InputMaybe<App_User_Bool_Exp>;
};


export type Query_RootApp_User_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTweetArgs = {
  distinct_on?: InputMaybe<Array<Tweet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tweet_Order_By>>;
  where?: InputMaybe<Tweet_Bool_Exp>;
};


export type Query_RootTweet_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tweet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tweet_Order_By>>;
  where?: InputMaybe<Tweet_Bool_Exp>;
};


export type Query_RootTweet_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "app_user" */
  app_user: Array<App_User>;
  /** fetch aggregated fields from the table: "app_user" */
  app_user_aggregate: App_User_Aggregate;
  /** fetch data from the table: "app_user" using primary key columns */
  app_user_by_pk?: Maybe<App_User>;
  /** fetch data from the table: "tweet" */
  tweet: Array<Tweet>;
  /** fetch aggregated fields from the table: "tweet" */
  tweet_aggregate: Tweet_Aggregate;
  /** fetch data from the table: "tweet" using primary key columns */
  tweet_by_pk?: Maybe<Tweet>;
};


export type Subscription_RootApp_UserArgs = {
  distinct_on?: InputMaybe<Array<App_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_User_Order_By>>;
  where?: InputMaybe<App_User_Bool_Exp>;
};


export type Subscription_RootApp_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_User_Order_By>>;
  where?: InputMaybe<App_User_Bool_Exp>;
};


export type Subscription_RootApp_User_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTweetArgs = {
  distinct_on?: InputMaybe<Array<Tweet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tweet_Order_By>>;
  where?: InputMaybe<Tweet_Bool_Exp>;
};


export type Subscription_RootTweet_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tweet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tweet_Order_By>>;
  where?: InputMaybe<Tweet_Bool_Exp>;
};


export type Subscription_RootTweet_By_PkArgs = {
  id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "tweet" */
export type Tweet = {
  __typename?: 'tweet';
  content: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user?: Maybe<App_User>;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "tweet" */
export type Tweet_Aggregate = {
  __typename?: 'tweet_aggregate';
  aggregate?: Maybe<Tweet_Aggregate_Fields>;
  nodes: Array<Tweet>;
};

/** aggregate fields of "tweet" */
export type Tweet_Aggregate_Fields = {
  __typename?: 'tweet_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tweet_Max_Fields>;
  min?: Maybe<Tweet_Min_Fields>;
};


/** aggregate fields of "tweet" */
export type Tweet_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tweet_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "tweet" */
export type Tweet_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Tweet_Max_Order_By>;
  min?: InputMaybe<Tweet_Min_Order_By>;
};

/** input type for inserting array relation for remote table "tweet" */
export type Tweet_Arr_Rel_Insert_Input = {
  data: Array<Tweet_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Tweet_On_Conflict>;
};

/** Boolean expression to filter rows from the table "tweet". All fields are combined with a logical 'AND'. */
export type Tweet_Bool_Exp = {
  _and?: InputMaybe<Array<Tweet_Bool_Exp>>;
  _not?: InputMaybe<Tweet_Bool_Exp>;
  _or?: InputMaybe<Array<Tweet_Bool_Exp>>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<App_User_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "tweet" */
export enum Tweet_Constraint {
  /** unique or primary key constraint */
  TweetContentKey = 'tweet_content_key',
  /** unique or primary key constraint */
  UserTweetPkey = 'user_tweet_pkey'
}

/** input type for inserting data into table "tweet" */
export type Tweet_Insert_Input = {
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<App_User_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Tweet_Max_Fields = {
  __typename?: 'tweet_max_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "tweet" */
export type Tweet_Max_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Tweet_Min_Fields = {
  __typename?: 'tweet_min_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "tweet" */
export type Tweet_Min_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "tweet" */
export type Tweet_Mutation_Response = {
  __typename?: 'tweet_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tweet>;
};

/** on conflict condition type for table "tweet" */
export type Tweet_On_Conflict = {
  constraint: Tweet_Constraint;
  update_columns?: Array<Tweet_Update_Column>;
  where?: InputMaybe<Tweet_Bool_Exp>;
};

/** Ordering options when selecting data from "tweet". */
export type Tweet_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<App_User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tweet */
export type Tweet_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "tweet" */
export enum Tweet_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "tweet" */
export type Tweet_Set_Input = {
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "tweet" */
export enum Tweet_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type GetTweetsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTweetsQuery = { __typename?: 'query_root', app_user: Array<{ __typename?: 'app_user', username: string, tweets: Array<{ __typename?: 'tweet', content: string }> }> };


export const GetTweetsDocument = `
    query GetTweets {
  app_user {
    username
    tweets {
      content
    }
  }
}
    `;
export const useGetTweetsQuery = <
      TData = GetTweetsQuery,
      TError = unknown
    >(
      variables?: GetTweetsQueryVariables,
      options?: UseQueryOptions<GetTweetsQuery, TError, TData>
    ) =>
    useQuery<GetTweetsQuery, TError, TData>(
      variables === undefined ? ['GetTweets'] : ['GetTweets', variables],
      fetcher<GetTweetsQuery, GetTweetsQueryVariables>(GetTweetsDocument, variables),
      options
    );
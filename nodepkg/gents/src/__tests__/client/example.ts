import { t } from "@innoai-tech/typedef";

import { createRequest } from "./client";

export const authorizeOfOpenidProvider = /*#__PURE__*/ createRequest<
  /* @type:object */ AuthorizeOfOpenidProviderInputs,
  any
>("example.AuthorizeOfOpenidProvider", (x) => ({
  method: "GET",
  url: `/api/algo-idp/v1/auth/providers/${x["providerCode"]}/authorize`,
  params: {
    redirect_uri: x["redirect_uri"],
    state: x["state"],
  },
}));

export const authorized = /*#__PURE__*/ createRequest<
  /* @type:object */ AuthorizedInputs,
  /* @type:object */ OpenidV1AuthorizationCodeGrant
>("example.Authorized", (x) => ({
  method: "POST",
  url: "/api/algo-idp/v1/user/auth/authorized",
  body: x.body,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
}));

export const createClient = /*#__PURE__*/ createRequest<
  /* @type:object */ CreateClientInputs,
  /* @type:object */ AccountV1Account
>("example.CreateClient", (x) => ({
  method: "PUT",
  url: "/api/algo-idp/v1/account/clients",
  body: x.body,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
}));

export const createUser = /*#__PURE__*/ createRequest<
  /* @type:object */ CreateUserInputs,
  /* @type:object */ AccountV1Account
>("example.CreateUser", (x) => ({
  method: "PUT",
  url: "/api/algo-idp/v1/account/users",
  body: x.body,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
}));

export const currentUserInfo = /*#__PURE__*/ createRequest<
  void,
  /* @type:object */ OpenidV1UserInfo
>("example.CurrentUserInfo", () => ({
  method: "GET",
  url: "/api/algo-idp/v1/user/info",
  headers: {
    Accept: "application/json",
  },
}));

export const deleteAdminMember = /*#__PURE__*/ createRequest<
  /* @type:object */ DeleteAdminMemberInputs,
  any
>("example.DeleteAdminMember", (x) => ({
  method: "DELETE",
  url: `/api/algo-idp/v1/admin/members/${x["accountID"]}`,
}));

export const deleteAllClient = /*#__PURE__*/ createRequest<
  /* @type:object */ DeleteAllClientInputs,
  any
>("example.DeleteAllClient", (x) => ({
  method: "DELETE",
  url: "/api/algo-idp/v1/account/clients",
  params: {
    "account~id": x["account~id"],
  },
}));

export const deleteAllUser = /*#__PURE__*/ createRequest<
  /* @type:object */ DeleteAllUserInputs,
  any
>("example.DeleteAllUser", (x) => ({
  method: "DELETE",
  url: "/api/algo-idp/v1/account/users",
  params: {
    "account~id": x["account~id"],
  },
}));

export const exchangeToken = /*#__PURE__*/ createRequest<
  /* @type:object */ ExchangeTokenInputs,
  /* @type:object */ OpenidV1Token
>("example.ExchangeToken", (x) => ({
  method: "POST",
  url: "/api/algo-idp/v1/auth/token",
  body: x.body,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json",
  },
}));

export const exchangeTokenFromGet = /*#__PURE__*/ createRequest<
  /* @type:object */ ExchangeTokenFromGetInputs,
  /* @type:object */ OpenidV1Token
>("example.ExchangeTokenFromGet", (x) => ({
  method: "GET",
  url: "/api/algo-idp/v1/auth/token",
  body: x.body,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json",
  },
}));

export const exchangeTokenFromOpenidProvider = /*#__PURE__*/ createRequest<
  /* @type:object */ ExchangeTokenFromOpenidProviderInputs,
  /* @type:object */ OpenidV1Token
>("example.ExchangeTokenFromOpenidProvider", (x) => ({
  method: "POST",
  url: `/api/algo-idp/v1/auth/providers/${x["providerCode"]}/token`,
  params: {
    code: x["code"],
  },
  headers: {
    Accept: "application/json",
  },
}));

export const getAccount = /*#__PURE__*/ createRequest<
  /* @type:object */ GetAccountInputs,
  /* @type:object */ AccountV1Account
>("example.GetAccount", (x) => ({
  method: "GET",
  url: `/api/algo-idp/v1/account/accounts/${x["accountID"]}`,
  headers: {
    "Cache-Control": x["Cache-Control"],
    Accept: "application/json",
  },
}));

export const jwKs = /*#__PURE__*/ createRequest<void, /* @type:object */ OpenidV1Jwks>(
  "example.JWKs",
  () => ({
    method: "GET",
    url: "/api/algo-idp/.well-known/jwks.json",
    headers: {
      Accept: "application/json",
    },
  }),
);

export const listClient = /*#__PURE__*/ createRequest<
  /* @type:object */ ListClientInputs,
  /* @type:object */ AccountV1AccountAsList
>("example.ListClient", (x) => ({
  method: "GET",
  url: "/api/algo-idp/v1/account/clients",
  params: {
    "account~id": x["account~id"],
    "account~name": x["account~name"],
    offset: x["offset"],
    limit: x["limit"],
  },
  headers: {
    Accept: "application/json",
  },
}));

export const listOpenidBinding = /*#__PURE__*/ createRequest<
  void,
  /* @type:object */ OpenidV1BindingAsList
>("example.ListOpenidBinding", () => ({
  method: "GET",
  url: "/api/algo-idp/v1/user/openid-bindings",
  headers: {
    Accept: "application/json",
  },
}));

export const listUser = /*#__PURE__*/ createRequest<
  /* @type:object */ ListUserInputs,
  /* @type:object */ AccountV1AccountAsList
>("example.ListUser", (x) => ({
  method: "GET",
  url: "/api/algo-idp/v1/account/users",
  params: {
    "account~id": x["account~id"],
    "account~name": x["account~name"],
    "account-identity~identityType": x["account-identity~identityType"],
    "account-identity~code": x["account-identity~code"],
    offset: x["offset"],
    limit: x["limit"],
  },
  headers: {
    Accept: "application/json",
  },
}));

export const openidConfiguration = /*#__PURE__*/ createRequest<
  void,
  /* @type:object */ OpenidV1ConfigurationWithExternalProviders
>("example.OpenidConfiguration", () => ({
  method: "GET",
  url: "/api/algo-idp/.well-known/openid-configuration",
  headers: {
    Accept: "application/json",
  },
}));

export const patchClient = /*#__PURE__*/ createRequest<
  /* @type:object */ PatchClientInputs,
  /* @type:object */ AccountV1Account
>("example.PatchClient", (x) => ({
  method: "PATCH",
  url: `/api/algo-idp/v1/account/clients/${x["clientID"]}`,
  body: x.body,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
}));

export const patchUser = /*#__PURE__*/ createRequest<
  /* @type:object */ PatchUserInputs,
  /* @type:object */ AccountV1Account
>("example.PatchUser", (x) => ({
  method: "PATCH",
  url: `/api/algo-idp/v1/account/users/${x["userID"]}`,
  body: x.body,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
}));

export const putAdminMember = /*#__PURE__*/ createRequest<
  /* @type:object */ PutAdminMemberInputs,
  any
>("example.PutAdminMember", (x) => ({
  method: "PUT",
  url: `/api/algo-idp/v1/admin/members/${x["accountID"]}`,
  body: x.body,
  headers: {
    "Content-Type": "application/json",
  },
}));

export const renewClientSecret = /*#__PURE__*/ createRequest<
  /* @type:object */ RenewClientSecretInputs,
  /* @type:object */ OpenidV1ClientAuth
>("example.RenewClientSecret", (x) => ({
  method: "PUT",
  url: `/api/algo-idp/v1/account/clients/${x["clientID"]}/secrets`,
  headers: {
    Accept: "application/json",
  },
}));

export const renewUserPassword = /*#__PURE__*/ createRequest<
  /* @type:object */ RenewUserPasswordInputs,
  /* @type:object */ OpenidV1ClientAuth
>("example.RenewUserPassword", (x) => ({
  method: "PUT",
  url: `/api/algo-idp/v1/account/users/${x["userID"]}/passwords`,
  headers: {
    Accept: "application/json",
  },
}));

export const resetPassword = /*#__PURE__*/ createRequest<
  /* @type:object */ ResetPasswordInputs,
  any
>("example.ResetPassword", (x) => ({
  method: "PUT",
  url: "/api/algo-idp/v1/user/reset-password",
  body: x.body,
  headers: {
    "Content-Type": "application/json",
  },
}));

export const sessionLogout = /*#__PURE__*/ createRequest<void, any>(
  "example.SessionLogout",
  () => ({
    method: "DELETE",
    url: "/api/algo-idp/v1/auth/sessions",
  }),
);

export const unbindingOpenid = /*#__PURE__*/ createRequest<
  /* @type:object */ UnbindingOpenidInputs,
  any
>("example.UnbindingOpenid", (x) => ({
  method: "DELETE",
  url: `/api/algo-idp/v1/user/openid-bindings/${x["providerCode"]}`,
}));

export enum AccountV1AccountType {
  USER = "USER",
  AGENT = "AGENT",
  CLIENT = "CLIENT",
}

export enum AccountV1IdentityType {
  EMAIL = "EMAIL",
  USERNAME = "USERNAME",
}

export enum RbacV1MemberRoleType {
  GUEST = "GUEST",
  MEMBER = "MEMBER",
  ADMIN = "ADMIN",
  OWNER = "OWNER",
}

export type AuthorizeOfOpenidProviderInputs = {
  providerCode: /* @type:string */ OpenidV1ProviderCode;
  redirect_uri: string;
  state?: string;
};

export type OpenidV1ProviderCode = string;

export type AuthorizedInputs = {
  body: /* @type:object */ OpenidV1AuthorizationCodeRequest;
};

export type OpenidV1AuthorizationCodeRequest = {
  response_type: "code";
  client_id: /* @type:string */ AccountV1AccountID;
  redirect_uri: string;
  scope?: string;
  state?: string;
  code_challenge?: string;
  code_challenge_method?: string;
};

export type AccountV1AccountID = string;

export type OpenidV1AuthorizationCodeGrant = {
  grant_type: "authorization_code";
  code: string;
  redirect_uri?: string;
  code_verifier?: string;
  client_id?: string;
  client_secret?: string;
};

export type CreateClientInputs = {
  body: /* @type:object */ AccountV1AccountRequestForCreateAsClient;
};

export type AccountV1AccountRequestForCreateAsClient = {
  kind?: "Account";
  apiVersion?: "v1";
  name?: string;
  description?: string;
  annotations?: { [k: string]: string };
};

export type AccountV1Account = {
  id: /* @type:string */ AccountV1AccountID;
  kind?: "Account";
  apiVersion?: "v1";
  name?: string;
  description?: string;
  annotations?: { [k: string]: string };
  creationTimestamp?: /* @type:string */ SqltypeTimeTimestamp;
  modificationTimestamp?: /* @type:string */ SqltypeTimeTimestamp;
  spec: /* @type:object */ AccountV1AccountSpec;
  status?: /* @type:object */ AccountV1Status;
};

export type SqltypeTimeTimestamp = string;

export type AccountV1AccountSpec = {
  accountType?: /* @type:enums */ AccountV1AccountType;
  identities?: Array</* @type:object */ AccountV1AccountIdentity>;
};

export const displayAccountV1AccountType = (v: AccountV1AccountType) => {
  return (
    {
      USER: "用户",
      AGENT: "集群代理",
      CLIENT: "客户端",
    }[v] ?? v
  );
};

export type AccountV1AccountIdentity = {
  code: /* @type:string */ AccountV1AccountIdentityCode;
  id: /* @type:string */ AccountV1AccountIdentityID;
  kind?: "AccountIdentity";
  apiVersion?: "v1";
  name?: string;
  description?: string;
  annotations?: { [k: string]: string };
  creationTimestamp?: /* @type:string */ SqltypeTimeTimestamp;
  modificationTimestamp?: /* @type:string */ SqltypeTimeTimestamp;
  identityType: /* @type:enums */ AccountV1IdentityType;
  account?: /* @type:object */ AccountV1Account;
};

export type AccountV1AccountIdentityCode = string;

export type AccountV1AccountIdentityID = string;

export const displayAccountV1IdentityType = (v: AccountV1IdentityType) => {
  return (
    {
      EMAIL: "邮箱",
      USERNAME: "用户名",
    }[v] ?? v
  );
};

export type AccountV1Status = {
  lastLogonAt?: /* @type:string */ SqltypeTimeTimestamp;
};

export type CreateUserInputs = {
  body: /* @type:object */ AccountV1AccountRequestForCreateAsUser;
};

export type AccountV1AccountRequestForCreateAsUser = {
  kind?: "Account";
  apiVersion?: "v1";
  name?: string;
  description?: string;
  annotations?: { [k: string]: string };
  spec: /* @type:object */ AccountV1AccountRequestSpecForUser;
};

export type AccountV1AccountRequestSpecForUser = {
  identities: Array</* @type:object */ AccountV1AccountIdentityRequestForCreate>;
};

export type AccountV1AccountIdentityRequestForCreate = {
  kind?: "AccountIdentity";
  apiVersion?: "v1";
  name?: string;
  description?: string;
  annotations?: { [k: string]: string };
  code: /* @type:string */ AccountV1AccountIdentityCode;
  identityType: /* @type:enums */ AccountV1IdentityType;
};

export type OpenidV1UserInfo = {
  sub: string;
  name?: string;
  nickname?: string;
  preferred_username?: string;
  email?: string;
  email_verified?: boolean;
  phone_number?: string;
  phone_number_verified?: boolean;
  resource_access?: /* @type:record */ OpenidV1ResourceAccess;
};

export type OpenidV1ResourceAccess = {
  [k: string]: { [k: string]: /* @type:object */ OpenidV1Access };
};

export type OpenidV1Access = {
  roles: Array</* @type:enums */ RbacV1MemberRoleType>;
};

export const displayRbacV1MemberRoleType = (v: RbacV1MemberRoleType) => {
  return (
    {
      GUEST: "访问者",
      MEMBER: "成员",
      ADMIN: "管理员",
      OWNER: "拥有者",
    }[v] ?? v
  );
};

export type DeleteAdminMemberInputs = {
  accountID: /* @type:string */ AccountV1AccountID;
};

export type DeleteAllClientInputs = {
  "account~id"?: /* @type:string */ AccountV1AccountIDAsFilter;
};

export type AccountV1AccountIDAsFilter = /* @type:string */ AccountV1AccountID;

export type DeleteAllUserInputs = {
  "account~id"?: /* @type:string */ AccountV1AccountIDAsFilter;
};

export type ExchangeTokenInputs = {
  body: /* @type:union */ OpenidV1GrantPayload;
};

export type OpenidV1GrantPayload =
  /* @type:object */ | OpenidV1AuthorizationCodeGrant
  | /* @type:object */ OpenidV1ClientCredentialsGrant
  | /* @type:object */ OpenidV1PasswordGrant
  | /* @type:object */ OpenidV1RefreshTokenGrant;

export type OpenidV1ClientCredentialsGrant = {
  grant_type: "client_credentials";
  scope?: string;
  client_id?: string;
  client_secret?: string;
};

export type OpenidV1PasswordGrant = {
  grant_type: "password";
  username: string;
  password: string;
  scope?: string;
  client_id?: string;
  client_secret?: string;
};

export type OpenidV1RefreshTokenGrant = {
  grant_type: "refresh_token";
  refresh_token: string;
  scope?: string;
  client_id?: string;
  client_secret?: string;
};

export type OpenidV1Token = {
  token_type: string;
  expires_in?: number;
  access_token: string;
  refresh_token?: string;
  scope?: string;
};

export type ExchangeTokenFromGetInputs = {
  body: /* @type:union */ AlgoidpAuthGrantPayloadWrapper;
};

export type AlgoidpAuthGrantPayloadWrapper = /* @type:union */ OpenidV1GrantPayload;

export type ExchangeTokenFromOpenidProviderInputs = {
  providerCode: /* @type:string */ OpenidV1ProviderCode;
  code: string;
};

export type GetAccountInputs = {
  accountID: /* @type:string */ AccountV1AccountID;
  "Cache-Control"?: string;
};

export type OpenidV1Jwks = {
  keys: Array</* @type:object */ OpenidV1Jwk>;
};

export type OpenidV1Jwk = {
  kty: string;
  alg: string;
  kid: string;
  use: string;
  e: string;
  n: string;
};

export type ListClientInputs = {
  "account~id"?: /* @type:string */ AccountV1AccountIDAsFilter;
  "account~name"?: /* @type:string */ StringAsFilter;
  offset?: number;
  limit?: number;
};

export type StringAsFilter = string;

export type AccountV1AccountAsList = {
  items?: Array</* @type:object */ AccountV1Account>;
  total?: number;
};

export type OpenidV1BindingAsList = {
  items?: Array</* @type:object */ OpenidV1Binding>;
  total?: number;
};

export type OpenidV1Binding = {
  sub: string;
  provider: /* @type:object */ OpenidV1ProviderMeta;
};

export type OpenidV1ProviderMeta = {
  code: /* @type:string */ OpenidV1ProviderCode;
  name: string;
  authorizationEndpoint?: string;
};

export type ListUserInputs = {
  "account~id"?: /* @type:string */ AccountV1AccountIDAsFilter;
  "account~name"?: /* @type:string */ StringAsFilter;
  "account-identity~identityType"?: /* @type:enums */ AccountV1IdentityType;
  "account-identity~code"?: /* @type:string */ AccountV1AccountIdentityCodeAsFilter;
  offset?: number;
  limit?: number;
};

export const AccountV1IdentityTypeAsFilter = /* @type:enums */ AccountV1IdentityType;

export type AccountV1AccountIdentityCodeAsFilter = /* @type:string */ AccountV1AccountIdentityCode;

export type OpenidV1ConfigurationWithExternalProviders = {
  id_token_signing_alg_values_supported: Array<string>;
  issuer: string;
  jwks_uri: string;
  token_endpoint: string;
  userinfo_endpoint: string;
  authorization_endpoint?: string;
  subject_types_supported: Array<string>;
  token_endpoint_auth_methods_supported: Array<string>;
  grant_types_supported: Array<string>;
  response_types_supported: Array<string>;
  scopes_supported: Array<string>;
  claims_supported: Array<string>;
  externalProviders?: Array</* @type:object */ OpenidV1ProviderMeta>;
};

export type PatchClientInputs = {
  clientID: /* @type:string */ AccountV1AccountID;
  body: /* @type:object */ AccountV1AccountRequestForCreateAsClient;
};

export type PatchUserInputs = {
  userID: /* @type:string */ AccountV1AccountID;
  body: /* @type:object */ AccountV1AccountRequestForCreateAsUser;
};

export type PutAdminMemberInputs = {
  accountID: /* @type:string */ AccountV1AccountID;
  body: /* @type:object */ RbacV1MemberSpec;
};

export type RbacV1MemberSpec = {
  roleType: /* @type:enums */ RbacV1MemberRoleType;
};

export type RenewClientSecretInputs = {
  clientID: /* @type:string */ AccountV1AccountID;
};

export type OpenidV1ClientAuth = {
  client_id?: string;
  client_secret?: string;
};

export type RenewUserPasswordInputs = {
  userID: /* @type:string */ AccountV1AccountID;
};

export type ResetPasswordInputs = {
  body: /* @type:object */ AlgoidpUserNewPasswordPayload;
};

export type AlgoidpUserNewPasswordPayload = {
  password: string;
};

export type UnbindingOpenidInputs = {
  providerCode: /* @type:string */ OpenidV1ProviderCode;
};

export class AuthorizeOfOpenidProviderInputsSchema {
  @t.string()
  providerCode!: /* @type:string */ OpenidV1ProviderCode;

  @t.string()
  redirect_uri!: string;

  @t.string()
  @t.optional()
  state?: string;
}

export class OpenidV1AuthorizationCodeRequestSchema {
  @t.enums(["code"])
  response_type!: "code";

  @t.annotate({ title: "账户 AccountID" })
  @t.string()
  client_id!: /* @type:string */ AccountV1AccountID;

  @t.string()
  redirect_uri!: string;

  @t.string()
  @t.optional()
  scope?: string;

  @t.string()
  @t.optional()
  state?: string;

  @t.string()
  @t.optional()
  code_challenge?: string;

  @t.string()
  @t.optional()
  code_challenge_method?: string;
}

export class AuthorizedInputsSchema {
  @t.annotate({
    title: "https://www.oauth.com/oauth2-servers/authorization/the-authorization-request/",
  })
  @t.ref("OpenidV1AuthorizationCodeRequestSchema", () =>
    t.object(OpenidV1AuthorizationCodeRequestSchema),
  )
  body!: /* @type:object */ OpenidV1AuthorizationCodeRequest;
}

export class OpenidV1AuthorizationCodeGrantSchema {
  @t.annotate({ title: "授权类型" })
  @t.enums(["authorization_code"])
  grant_type!: "authorization_code";

  @t.annotate({ title: "临时凭证 code" })
  @t.string()
  code!: string;

  @t.annotate({ title: "重定向地址" })
  @t.string()
  @t.optional()
  redirect_uri?: string;

  @t.string()
  @t.optional()
  code_verifier?: string;

  @t.annotate({ title: "Client ID" })
  @t.string()
  @t.optional()
  client_id?: string;

  @t.annotate({ title: "Client Secret" })
  @t.string()
  @t.optional()
  client_secret?: string;
}

export class AccountV1AccountRequestForCreateAsClientSchema {
  @t.enums(["Account"])
  @t.optional()
  kind?: "Account";

  @t.enums(["v1"])
  @t.optional()
  apiVersion?: "v1";

  @t.annotate({ title: "客户端名称" })
  @t.string()
  @t.optional()
  name?: string;

  @t.annotate({ title: "客户端描述" })
  @t.string()
  @t.optional()
  description?: string;

  @t.annotate({ title: "客户端其他注解" })
  @t.record(t.string(), t.string())
  @t.optional()
  annotations?: { [k: string]: string };
}

export class CreateClientInputsSchema {
  @t.ref("AccountV1AccountRequestForCreateAsClientSchema", () =>
    t.object(AccountV1AccountRequestForCreateAsClientSchema),
  )
  body!: /* @type:object */ AccountV1AccountRequestForCreateAsClient;
}

export class AccountV1AccountIdentitySchema {
  @t.annotate({ title: "编码" })
  @t.string()
  code!: /* @type:string */ AccountV1AccountIdentityCode;

  @t.annotate({ title: "资源 id" })
  @t.string()
  id!: /* @type:string */ AccountV1AccountIdentityID;

  @t.enums(["AccountIdentity"])
  @t.optional()
  kind?: "AccountIdentity";

  @t.enums(["v1"])
  @t.optional()
  apiVersion?: "v1";

  @t.annotate({ title: "名称" })
  @t.string()
  @t.optional()
  name?: string;

  @t.annotate({ title: "描述" })
  @t.string()
  @t.optional()
  description?: string;

  @t.annotate({ title: "其他注解" })
  @t.record(t.string(), t.string())
  @t.optional()
  annotations?: { [k: string]: string };

  @t.annotate({ title: "创建时间" })
  @t.string()
  @t.optional()
  creationTimestamp?: /* @type:string */ SqltypeTimeTimestamp;

  @t.annotate({ title: "更新时间" })
  @t.string()
  @t.optional()
  modificationTimestamp?: /* @type:string */ SqltypeTimeTimestamp;

  @t.annotate({ title: "标识类型" })
  @t.nativeEnum(AccountV1IdentityType)
  identityType!: /* @type:enums */ AccountV1IdentityType;

  @t.annotate({ title: "账户" })
  @t.ref("AccountV1AccountSchema", () => t.object(AccountV1AccountSchema))
  @t.optional()
  account?: /* @type:object */ AccountV1Account;
}

export class AccountV1AccountSpecSchema {
  @t.annotate({ title: "账户类型" })
  @t.nativeEnum(AccountV1AccountType)
  @t.optional()
  accountType?: /* @type:enums */ AccountV1AccountType;

  @t.annotate({ title: "账户标识" })
  @t.array(t.ref("AccountV1AccountIdentitySchema", () => t.object(AccountV1AccountIdentitySchema)))
  @t.optional()
  identities?: Array</* @type:object */ AccountV1AccountIdentity>;
}

export class AccountV1StatusSchema {
  @t.annotate({ title: "最近登录时间" })
  @t.string()
  @t.optional()
  lastLogonAt?: /* @type:string */ SqltypeTimeTimestamp;
}

export class AccountV1AccountSchema {
  @t.annotate({ title: "账户资源 id" })
  @t.string()
  id!: /* @type:string */ AccountV1AccountID;

  @t.enums(["Account"])
  @t.optional()
  kind?: "Account";

  @t.enums(["v1"])
  @t.optional()
  apiVersion?: "v1";

  @t.annotate({ title: "账户名称" })
  @t.string()
  @t.optional()
  name?: string;

  @t.annotate({ title: "账户描述" })
  @t.string()
  @t.optional()
  description?: string;

  @t.annotate({ title: "账户其他注解" })
  @t.record(t.string(), t.string())
  @t.optional()
  annotations?: { [k: string]: string };

  @t.annotate({ title: "账户创建时间" })
  @t.string()
  @t.optional()
  creationTimestamp?: /* @type:string */ SqltypeTimeTimestamp;

  @t.annotate({ title: "账户更新时间" })
  @t.string()
  @t.optional()
  modificationTimestamp?: /* @type:string */ SqltypeTimeTimestamp;

  @t.annotate({ title: "账户定义" })
  @t.ref("AccountV1AccountSpecSchema", () => t.object(AccountV1AccountSpecSchema))
  spec!: /* @type:object */ AccountV1AccountSpec;

  @t.annotate({ title: "账户状态" })
  @t.ref("AccountV1StatusSchema", () => t.object(AccountV1StatusSchema))
  @t.optional()
  status?: /* @type:object */ AccountV1Status;
}

export class AccountV1AccountIdentityRequestForCreateSchema {
  @t.enums(["AccountIdentity"])
  @t.optional()
  kind?: "AccountIdentity";

  @t.enums(["v1"])
  @t.optional()
  apiVersion?: "v1";

  @t.annotate({ title: "名称" })
  @t.string()
  @t.optional()
  name?: string;

  @t.annotate({ title: "描述" })
  @t.string()
  @t.optional()
  description?: string;

  @t.annotate({ title: "其他注解" })
  @t.record(t.string(), t.string())
  @t.optional()
  annotations?: { [k: string]: string };

  @t.annotate({ title: "编码" })
  @t.string()
  code!: /* @type:string */ AccountV1AccountIdentityCode;

  @t.annotate({ title: "标识类型" })
  @t.nativeEnum(AccountV1IdentityType)
  identityType!: /* @type:enums */ AccountV1IdentityType;
}

export class AccountV1AccountRequestSpecForUserSchema {
  @t.annotate({ title: "账户标识" })
  @t.array(
    t.ref("AccountV1AccountIdentityRequestForCreateSchema", () =>
      t.object(AccountV1AccountIdentityRequestForCreateSchema),
    ),
  )
  identities!: Array</* @type:object */ AccountV1AccountIdentityRequestForCreate>;
}

export class AccountV1AccountRequestForCreateAsUserSchema {
  @t.enums(["Account"])
  @t.optional()
  kind?: "Account";

  @t.enums(["v1"])
  @t.optional()
  apiVersion?: "v1";

  @t.annotate({ title: "用户名称" })
  @t.string()
  @t.optional()
  name?: string;

  @t.annotate({ title: "用户描述" })
  @t.string()
  @t.optional()
  description?: string;

  @t.annotate({ title: "用户其他注解" })
  @t.record(t.string(), t.string())
  @t.optional()
  annotations?: { [k: string]: string };

  @t.annotate({ title: "用户定义" })
  @t.ref("AccountV1AccountRequestSpecForUserSchema", () =>
    t.object(AccountV1AccountRequestSpecForUserSchema),
  )
  spec!: /* @type:object */ AccountV1AccountRequestSpecForUser;
}

export class CreateUserInputsSchema {
  @t.ref("AccountV1AccountRequestForCreateAsUserSchema", () =>
    t.object(AccountV1AccountRequestForCreateAsUserSchema),
  )
  body!: /* @type:object */ AccountV1AccountRequestForCreateAsUser;
}

export class OpenidV1AccessSchema {
  @t.array(t.nativeEnum(RbacV1MemberRoleType))
  roles!: Array</* @type:enums */ RbacV1MemberRoleType>;
}

export class OpenidV1UserInfoSchema {
  @t.annotate({ title: "用户标识" })
  @t.string()
  sub!: string;

  @t.annotate({ title: "姓名" })
  @t.string()
  @t.optional()
  name?: string;

  @t.annotate({ title: "昵称" })
  @t.string()
  @t.optional()
  nickname?: string;

  @t.annotate({ title: "自定义用户名" })
  @t.string()
  @t.optional()
  preferred_username?: string;

  @t.annotate({ title: "邮箱" })
  @t.string()
  @t.optional()
  email?: string;

  @t.annotate({ title: "已验证邮箱" })
  @t.boolean()
  @t.optional()
  email_verified?: boolean;

  @t.annotate({ title: "手机号" })
  @t.string()
  @t.optional()
  phone_number?: string;

  @t.annotate({ title: "已验证手机号" })
  @t.boolean()
  @t.optional()
  phone_number_verified?: boolean;

  @t.annotate({ title: "其他资源访问权限上下文" })
  @t.record(
    t.string(),
    t.record(
      t.string(),
      t.ref("OpenidV1AccessSchema", () => t.object(OpenidV1AccessSchema)),
    ),
  )
  @t.optional()
  resource_access?: /* @type:record */ OpenidV1ResourceAccess;
}

export class DeleteAdminMemberInputsSchema {
  @t.annotate({ title: "账户 AccountID" })
  @t.string()
  accountID!: /* @type:string */ AccountV1AccountID;
}

export class DeleteAllClientInputsSchema {
  @t.annotate({ title: "通过 账户id 筛选" })
  @t.string()
  @t.optional()
  "account~id"?: /* @type:string */ AccountV1AccountIDAsFilter;
}

export class DeleteAllUserInputsSchema {
  @t.annotate({ title: "通过 账户id 筛选" })
  @t.string()
  @t.optional()
  "account~id"?: /* @type:string */ AccountV1AccountIDAsFilter;
}

export class OpenidV1ClientCredentialsGrantSchema {
  @t.annotate({ title: "授权类型" })
  @t.enums(["client_credentials"])
  grant_type!: "client_credentials";

  @t.annotate({ title: "授权范围" })
  @t.string()
  @t.optional()
  scope?: string;

  @t.annotate({ title: "Client ID" })
  @t.string()
  @t.optional()
  client_id?: string;

  @t.annotate({ title: "Client Secret" })
  @t.string()
  @t.optional()
  client_secret?: string;
}

export class OpenidV1PasswordGrantSchema {
  @t.annotate({ title: "授权类型" })
  @t.enums(["password"])
  grant_type!: "password";

  @t.annotate({ title: "用户标识" })
  @t.string()
  username!: string;

  @t.annotate({ title: "密码" })
  @t.string()
  password!: string;

  @t.annotate({ title: "授权范围" })
  @t.string()
  @t.optional()
  scope?: string;

  @t.annotate({ title: "Client ID" })
  @t.string()
  @t.optional()
  client_id?: string;

  @t.annotate({ title: "Client Secret" })
  @t.string()
  @t.optional()
  client_secret?: string;
}

export class OpenidV1RefreshTokenGrantSchema {
  @t.annotate({ title: "授权类型" })
  @t.enums(["refresh_token"])
  grant_type!: "refresh_token";

  @t.annotate({ title: "刷新 Token" })
  @t.string()
  refresh_token!: string;

  @t.annotate({ title: "授权范围" })
  @t.string()
  @t.optional()
  scope?: string;

  @t.annotate({ title: "Client ID" })
  @t.string()
  @t.optional()
  client_id?: string;

  @t.annotate({ title: "Client Secret" })
  @t.string()
  @t.optional()
  client_secret?: string;
}

export class ExchangeTokenInputsSchema {
  @t.discriminatorMapping("grant_type", {
    authorization_code: t.ref("OpenidV1AuthorizationCodeGrantSchema", () =>
      t.object(OpenidV1AuthorizationCodeGrantSchema),
    ),
    client_credentials: t.ref("OpenidV1ClientCredentialsGrantSchema", () =>
      t.object(OpenidV1ClientCredentialsGrantSchema),
    ),
    password: t.ref("OpenidV1PasswordGrantSchema", () => t.object(OpenidV1PasswordGrantSchema)),
    refresh_token: t.ref("OpenidV1RefreshTokenGrantSchema", () =>
      t.object(OpenidV1RefreshTokenGrantSchema),
    ),
  })
  body!: /* @type:union */ OpenidV1GrantPayload;
}

export class OpenidV1TokenSchema {
  @t.annotate({ title: "Token 类型" })
  @t.string()
  token_type!: string;

  @t.annotate({ title: "过期时间（单位：秒）" })
  @t.integer()
  @t.optional()
  expires_in?: number;

  @t.annotate({ title: "访问凭证" })
  @t.string()
  access_token!: string;

  @t.annotate({ title: "刷新凭证" })
  @t.string()
  @t.optional()
  refresh_token?: string;

  @t.annotate({ title: "凭证范围" })
  @t.string()
  @t.optional()
  scope?: string;
}

export class ExchangeTokenFromGetInputsSchema {
  @t.discriminatorMapping("grant_type", {
    authorization_code: t.ref("OpenidV1AuthorizationCodeGrantSchema", () =>
      t.object(OpenidV1AuthorizationCodeGrantSchema),
    ),
    client_credentials: t.ref("OpenidV1ClientCredentialsGrantSchema", () =>
      t.object(OpenidV1ClientCredentialsGrantSchema),
    ),
    password: t.ref("OpenidV1PasswordGrantSchema", () => t.object(OpenidV1PasswordGrantSchema)),
    refresh_token: t.ref("OpenidV1RefreshTokenGrantSchema", () =>
      t.object(OpenidV1RefreshTokenGrantSchema),
    ),
  })
  body!: /* @type:union */ AlgoidpAuthGrantPayloadWrapper;
}

export class ExchangeTokenFromOpenidProviderInputsSchema {
  @t.string()
  providerCode!: /* @type:string */ OpenidV1ProviderCode;

  @t.string()
  code!: string;
}

export class GetAccountInputsSchema {
  @t.annotate({ title: "账户 AccountID" })
  @t.string()
  accountID!: /* @type:string */ AccountV1AccountID;

  @t.string()
  @t.optional()
  "Cache-Control"?: string;
}

export class OpenidV1JwkSchema {
  @t.annotate({ title: "密钥类型" })
  @t.string()
  kty!: string;

  @t.annotate({ title: "密钥算法类型" })
  @t.string()
  alg!: string;

  @t.annotate({ title: "密钥 ID" })
  @t.string()
  kid!: string;

  @t.annotate({ title: "用途" })
  @t.string()
  use!: string;

  @t.annotate({ title: "RSA 公钥的模数" })
  @t.string()
  e!: string;

  @t.annotate({ title: "RSA 公钥的指数" })
  @t.string()
  n!: string;
}

export class OpenidV1JwksSchema {
  @t.annotate({ title: "密钥列表" })
  @t.array(t.ref("OpenidV1JwkSchema", () => t.object(OpenidV1JwkSchema)))
  keys!: Array</* @type:object */ OpenidV1Jwk>;
}

export class ListClientInputsSchema {
  @t.annotate({ title: "通过 账户id 筛选" })
  @t.string()
  @t.optional()
  "account~id"?: /* @type:string */ AccountV1AccountIDAsFilter;

  @t.annotate({ title: "通过 账户名称 筛选" })
  @t.string()
  @t.optional()
  "account~name"?: /* @type:string */ StringAsFilter;

  @t.annotate({ title: "分页偏移" })
  @t.integer()
  @t.optional()
  offset?: number;

  @t.annotate({ title: "分页数" })
  @t.integer()
  @t.maximum(50)
  @t.minimum(-1)
  @t.optional()
  limit?: number;
}

export class AccountV1AccountAsListSchema {
  @t.annotate({ title: "列表" })
  @t.array(t.ref("AccountV1AccountSchema", () => t.object(AccountV1AccountSchema)))
  @t.optional()
  items?: Array</* @type:object */ AccountV1Account>;

  @t.annotate({ title: "总数" })
  @t.integer()
  @t.optional()
  total?: number;
}

export class OpenidV1ProviderMetaSchema {
  @t.annotate({ title: "标识" })
  @t.string()
  code!: /* @type:string */ OpenidV1ProviderCode;

  @t.annotate({ title: "名称" })
  @t.string()
  name!: string;

  @t.annotate({ title: "登录入口" })
  @t.string()
  @t.optional()
  authorizationEndpoint?: string;
}

export class OpenidV1BindingSchema {
  @t.string()
  sub!: string;

  @t.ref("OpenidV1ProviderMetaSchema", () => t.object(OpenidV1ProviderMetaSchema))
  provider!: /* @type:object */ OpenidV1ProviderMeta;
}

export class OpenidV1BindingAsListSchema {
  @t.annotate({ title: "列表" })
  @t.array(t.ref("OpenidV1BindingSchema", () => t.object(OpenidV1BindingSchema)))
  @t.optional()
  items?: Array</* @type:object */ OpenidV1Binding>;

  @t.annotate({ title: "总数" })
  @t.integer()
  @t.optional()
  total?: number;
}

export class ListUserInputsSchema {
  @t.annotate({ title: "通过 账户id 筛选" })
  @t.string()
  @t.optional()
  "account~id"?: /* @type:string */ AccountV1AccountIDAsFilter;

  @t.annotate({ title: "通过 账户名称 筛选" })
  @t.string()
  @t.optional()
  "account~name"?: /* @type:string */ StringAsFilter;

  @t.annotate({ title: "标识类型" })
  @t.nativeEnum(AccountV1IdentityTypeAsFilter)
  @t.optional()
  "account-identity~identityType"?: /* @type:enums */ AccountV1IdentityType;

  @t.annotate({ title: "通过 账户标识编码 筛选" })
  @t.string()
  @t.optional()
  "account-identity~code"?: /* @type:string */ AccountV1AccountIdentityCodeAsFilter;

  @t.annotate({ title: "分页偏移" })
  @t.integer()
  @t.optional()
  offset?: number;

  @t.annotate({ title: "分页数" })
  @t.integer()
  @t.maximum(50)
  @t.minimum(-1)
  @t.optional()
  limit?: number;
}

export class OpenidV1ConfigurationWithExternalProvidersSchema {
  @t.array(t.string())
  id_token_signing_alg_values_supported!: Array<string>;

  @t.string()
  issuer!: string;

  @t.string()
  jwks_uri!: string;

  @t.string()
  token_endpoint!: string;

  @t.string()
  userinfo_endpoint!: string;

  @t.string()
  @t.optional()
  authorization_endpoint?: string;

  @t.array(t.string())
  subject_types_supported!: Array<string>;

  @t.array(t.string())
  token_endpoint_auth_methods_supported!: Array<string>;

  @t.array(t.string())
  grant_types_supported!: Array<string>;

  @t.array(t.string())
  response_types_supported!: Array<string>;

  @t.array(t.string())
  scopes_supported!: Array<string>;

  @t.array(t.string())
  claims_supported!: Array<string>;

  @t.array(t.ref("OpenidV1ProviderMetaSchema", () => t.object(OpenidV1ProviderMetaSchema)))
  @t.optional()
  externalProviders?: Array</* @type:object */ OpenidV1ProviderMeta>;
}

export class PatchClientInputsSchema {
  @t.annotate({ title: "账户 AccountID" })
  @t.string()
  clientID!: /* @type:string */ AccountV1AccountID;

  @t.ref("AccountV1AccountRequestForCreateAsClientSchema", () =>
    t.object(AccountV1AccountRequestForCreateAsClientSchema),
  )
  body!: /* @type:object */ AccountV1AccountRequestForCreateAsClient;
}

export class PatchUserInputsSchema {
  @t.annotate({ title: "账户 AccountID" })
  @t.string()
  userID!: /* @type:string */ AccountV1AccountID;

  @t.ref("AccountV1AccountRequestForCreateAsUserSchema", () =>
    t.object(AccountV1AccountRequestForCreateAsUserSchema),
  )
  body!: /* @type:object */ AccountV1AccountRequestForCreateAsUser;
}

export class RbacV1MemberSpecSchema {
  @t.nativeEnum(RbacV1MemberRoleType)
  roleType!: /* @type:enums */ RbacV1MemberRoleType;
}

export class PutAdminMemberInputsSchema {
  @t.annotate({ title: "账户 AccountID" })
  @t.string()
  accountID!: /* @type:string */ AccountV1AccountID;

  @t.ref("RbacV1MemberSpecSchema", () => t.object(RbacV1MemberSpecSchema))
  body!: /* @type:object */ RbacV1MemberSpec;
}

export class RenewClientSecretInputsSchema {
  @t.annotate({ title: "账户 AccountID" })
  @t.string()
  clientID!: /* @type:string */ AccountV1AccountID;
}

export class OpenidV1ClientAuthSchema {
  @t.annotate({ title: "Client ID" })
  @t.string()
  @t.optional()
  client_id?: string;

  @t.annotate({ title: "Client Secret" })
  @t.string()
  @t.optional()
  client_secret?: string;
}

export class RenewUserPasswordInputsSchema {
  @t.annotate({ title: "账户 AccountID" })
  @t.string()
  userID!: /* @type:string */ AccountV1AccountID;
}

export class AlgoidpUserNewPasswordPayloadSchema {
  @t.string()
  password!: string;
}

export class ResetPasswordInputsSchema {
  @t.ref("AlgoidpUserNewPasswordPayloadSchema", () => t.object(AlgoidpUserNewPasswordPayloadSchema))
  body!: /* @type:object */ AlgoidpUserNewPasswordPayload;
}

export class UnbindingOpenidInputsSchema {
  @t.string()
  providerCode!: /* @type:string */ OpenidV1ProviderCode;
}

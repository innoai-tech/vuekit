import { createRequest } from "./client";

import { t } from "@innoai-tech/typedef";

export const uploadBlob = /*#__PURE__*/ createRequest<
  {
    "Content-Type": string;
    body: File | Blob;
  },
  null
>(
  "example.UploadBlob",
  ({ "Content-Type": header_contentType, body: body }) => ({
    method: "PUT",
    url: "/api/kubepkg.innoai.tech/v1/blobs",
    headers: {
      "Content-Type": header_contentType,
    },
    body: body,
  })
);

export const statBlob = /*#__PURE__*/ createRequest<
  {
    digest: string | "sha256";
  },
  null
>("example.StatBlob", ({ digest: path_digest }) => ({
  method: "GET",
  url: `/api/kubepkg.innoai.tech/v1/blobs/${path_digest}/stat`,
}));

export const listKubePkg = /*#__PURE__*/ createRequest<
  void,
  Array<KubepkgV1Alpha1KubePkg>
>("example.ListKubePkg", () => ({
  method: "GET",
  url: "/api/kubepkg.innoai.tech/v1/kubepkgs",
}));

export const applyKubePkg = /*#__PURE__*/ createRequest<
  {} & (
    | {
        "Content-Type": "application/json";
        body: KubepkgV1Alpha1KubePkg;
      }
    | {
        "Content-Type": "application/octet-stream";
        body: File | Blob;
      }
  ),
  KubepkgV1Alpha1KubePkg
>("example.ApplyKubePkg", ({ body: body, "Content-Type": contentType }) => ({
  method: "PUT",
  url: "/api/kubepkg.innoai.tech/v1/kubepkgs",
  body: body,
  headers: {
    "Content-Type": contentType,
  },
}));

export const delKubePkg = /*#__PURE__*/ createRequest<
  {
    name: string;
    namespace?: string;
  },
  null
>("example.DelKubePkg", ({ name: path_name, namespace: query_namespace }) => ({
  method: "DELETE",
  url: `/api/kubepkg.innoai.tech/v1/kubepkgs/${path_name}`,
  params: {
    namespace: query_namespace,
  },
}));

export const getKubePkg = /*#__PURE__*/ createRequest<
  {
    name: string;
    namespace?: string;
  },
  KubepkgV1Alpha1KubePkg
>("example.GetKubePkg", ({ name: path_name, namespace: query_namespace }) => ({
  method: "GET",
  url: `/api/kubepkg.innoai.tech/v1/kubepkgs/${path_name}`,
  params: {
    namespace: query_namespace,
  },
}));

export type KubepkgV1Alpha1KubePkg = MetaV1TypeMeta & {
  metadata?: MetaV1ObjectMeta;
  spec?: KubepkgV1Alpha1KubePkgSpec;
  status?: KubepkgV1Alpha1KubePkgStatus;
};

export type MetaV1TypeMeta = {
  apiVersion?: string;
  kind?: string;
};

export type MetaV1ObjectMeta = {
  annotations?: { [k: string]: string };
  clusterName?: string;
  creationTimestamp?: MetaV1Time;
  deletionGracePeriodSeconds?: number;
  deletionTimestamp?: MetaV1Time;
  finalizers?: Array<string>;
  generateName?: string;
  generation?: number;
  labels?: { [k: string]: string };
  managedFields?: Array<MetaV1ManagedFieldsEntry>;
  name?: string;
  namespace?: string;
  ownerReferences?: Array<MetaV1OwnerReference>;
  resourceVersion?: string;
  selfLink?: string;
  uid?: TypesUid;
};

export type MetaV1Time = string;

export type MetaV1ManagedFieldsEntry = {
  apiVersion?: string;
  fieldsType?: string;
  fieldsV1?: MetaV1FieldsV1;
  manager?: string;
  operation?: MetaV1ManagedFieldsOperationType;
  subresource?: string;
  time?: MetaV1Time;
};

export type MetaV1FieldsV1 = { [k: string]: any };

export type MetaV1ManagedFieldsOperationType = string;

export type MetaV1OwnerReference = {
  apiVersion: string;
  blockOwnerDeletion?: boolean;
  controller?: boolean;
  kind: string;
  name: string;
  uid: TypesUid;
};

export type TypesUid = string;

export type KubepkgV1Alpha1KubePkgSpec = {
  images?: { [k: string]: string };
  manifests?: KubepkgV1Alpha1Manifests;
  version: string;
};

export type KubepkgV1Alpha1Manifests = { [k: string]: any };

export type KubepkgV1Alpha1KubePkgStatus = {
  digests?: Array<KubepkgV1Alpha1DigestMeta>;
  statuses?: KubepkgV1Alpha1Statuses;
};

export type KubepkgV1Alpha1DigestMeta = {
  digest: string;
  name: string;
  platform?: string;
  size: KubepkgV1Alpha1FileSize;
  tag?: string;
  type: KubepkgV1Alpha1DigestMetaType;
};

export type KubepkgV1Alpha1FileSize = number;

export enum KubepkgV1Alpha1DigestMetaType {
  blob = "blob",
  manifest = "manifest",
}

export type KubepkgV1Alpha1Statuses = { [k: string]: any };

export const KubepkgV1Alpha1KubePkgSchema = /*#__PURE__*/ t
  .intersection(
    t.ref("MetaV1TypeMeta", () => MetaV1TypeMetaSchema),
    t.object({
      metadata: t
        .ref("MetaV1ObjectMeta", () => MetaV1ObjectMetaSchema)
        .optional(),
      spec: t
        .ref(
          "KubepkgV1Alpha1KubePkgSpec",
          () => KubepkgV1Alpha1KubePkgSpecSchema
        )
        .optional(),
      status: t
        .ref(
          "KubepkgV1Alpha1KubePkgStatus",
          () => KubepkgV1Alpha1KubePkgStatusSchema
        )
        .optional(),
    })
  )
  .annotate({ description: "KubePkg" });

export const MetaV1TypeMetaSchema = /*#__PURE__*/ t.object({
  apiVersion: t.string().optional(),
  kind: t.string().optional(),
});

export const MetaV1ObjectMetaSchema = /*#__PURE__*/ t.object({
  annotations: t.record(t.string(), t.string()).optional(),
  clusterName: t.string().optional(),
  creationTimestamp: t.ref("MetaV1Time", () => MetaV1TimeSchema).optional(),
  deletionGracePeriodSeconds: t.integer().optional(),
  deletionTimestamp: t.ref("MetaV1Time", () => MetaV1TimeSchema).optional(),
  finalizers: t.array(t.string()).optional(),
  generateName: t.string().optional(),
  generation: t.integer().optional(),
  labels: t.record(t.string(), t.string()).optional(),
  managedFields: t
    .array(
      t.ref("MetaV1ManagedFieldsEntry", () => MetaV1ManagedFieldsEntrySchema)
    )
    .optional(),
  name: t.string().optional(),
  namespace: t.string().optional(),
  ownerReferences: t
    .array(t.ref("MetaV1OwnerReference", () => MetaV1OwnerReferenceSchema))
    .optional(),
  resourceVersion: t.string().optional(),
  selfLink: t.string().optional(),
  uid: t.ref("TypesUid", () => TypesUidSchema).optional(),
});

export const MetaV1TimeSchema = /*#__PURE__*/ t.string();

export const MetaV1ManagedFieldsEntrySchema = /*#__PURE__*/ t.object({
  apiVersion: t.string().optional(),
  fieldsType: t.string().optional(),
  fieldsV1: t.ref("MetaV1FieldsV1", () => MetaV1FieldsV1Schema).optional(),
  manager: t.string().optional(),
  operation: t
    .ref(
      "MetaV1ManagedFieldsOperationType",
      () => MetaV1ManagedFieldsOperationTypeSchema
    )
    .optional(),
  subresource: t.string().optional(),
  time: t.ref("MetaV1Time", () => MetaV1TimeSchema).optional(),
});

export const MetaV1FieldsV1Schema = /*#__PURE__*/ t.record(t.string(), t.any());

export const MetaV1ManagedFieldsOperationTypeSchema = /*#__PURE__*/ t.string();

export const MetaV1OwnerReferenceSchema = /*#__PURE__*/ t.object({
  apiVersion: t.string(),
  blockOwnerDeletion: t.boolean().optional(),
  controller: t.boolean().optional(),
  kind: t.string(),
  name: t.string(),
  uid: t.ref("TypesUid", () => TypesUidSchema),
});

export const TypesUidSchema = /*#__PURE__*/ t.string();

export const KubepkgV1Alpha1KubePkgSpecSchema = /*#__PURE__*/ t.object({
  images: t.record(t.string(), t.string()).optional(),
  manifests: t
    .ref("KubepkgV1Alpha1Manifests", () => KubepkgV1Alpha1ManifestsSchema)
    .optional(),
  version: t.string(),
});

export const KubepkgV1Alpha1ManifestsSchema = /*#__PURE__*/ t.record(
  t.string(),
  t.any()
);

export const KubepkgV1Alpha1KubePkgStatusSchema = /*#__PURE__*/ t.object({
  digests: t
    .array(
      t.ref("KubepkgV1Alpha1DigestMeta", () => KubepkgV1Alpha1DigestMetaSchema)
    )
    .optional(),
  statuses: t
    .ref("KubepkgV1Alpha1Statuses", () => KubepkgV1Alpha1StatusesSchema)
    .optional(),
});

export const KubepkgV1Alpha1DigestMetaSchema = /*#__PURE__*/ t.object({
  digest: t.string(),
  name: t.string(),
  platform: t.string().optional(),
  size: t.ref("KubepkgV1Alpha1FileSize", () => KubepkgV1Alpha1FileSizeSchema),
  tag: t.string().optional(),
  type: t.ref(
    "KubepkgV1Alpha1DigestMetaType",
    () => KubepkgV1Alpha1DigestMetaTypeSchema
  ),
});

export const KubepkgV1Alpha1FileSizeSchema = /*#__PURE__*/ t.integer();

export const KubepkgV1Alpha1DigestMetaTypeSchema = /*#__PURE__*/ t.nativeEnum(
  KubepkgV1Alpha1DigestMetaType
);

export const KubepkgV1Alpha1StatusesSchema = /*#__PURE__*/ t.record(
  t.string(),
  t.any()
);

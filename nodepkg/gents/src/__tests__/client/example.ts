import { createRequest } from "./client";

import { t } from "@innoai-tech/typedef";


export const applyKubePkg =
/*#__PURE__*/createRequest<({
} & ({
  "Content-Type": "application/json",
  "body": /* @type:intersection */ KubepkgV1Alpha1KubePkg,
} | {
  "Content-Type": "application/octet-stream",
  "body": File | Blob,
})), /* @type:intersection */ KubepkgV1Alpha1KubePkg>(
  "example.ApplyKubePkg",
  ({
"body": body,
"Content-Type": contentType,
}) => ({
"method": "PUT",
"url": "/api/kubepkg.innoai.tech/v1/kubepkgs",
"body": body,
"headers": {
"Content-Type": contentType,
},
}),
)



export const delKubePkg =
/*#__PURE__*/createRequest<{
  "name": string,
  "namespace"?: string,
}, any>(
  "example.DelKubePkg",
  ({
"name": path_name,
"namespace": query_namespace,
}) => ({
"method": "DELETE",
"url": `/api/kubepkg.innoai.tech/v1/kubepkgs/${path_name}`,
"params": {
"namespace": query_namespace,
},
}),
)



export const getKubePkg =
/*#__PURE__*/createRequest<{
  "name": string,
  "namespace"?: string,
}, /* @type:intersection */ KubepkgV1Alpha1KubePkg>(
  "example.GetKubePkg",
  ({
"name": path_name,
"namespace": query_namespace,
}) => ({
"method": "GET",
"url": `/api/kubepkg.innoai.tech/v1/kubepkgs/${path_name}`,
"params": {
"namespace": query_namespace,
},
}),
)



export const listKubePkg =
/*#__PURE__*/createRequest<void, Array</* @type:intersection */ KubepkgV1Alpha1KubePkg>>(
  "example.ListKubePkg",
  () => ({
"method": "GET",
"url": "/api/kubepkg.innoai.tech/v1/kubepkgs",
}),
)



export const statBlob =
/*#__PURE__*/createRequest<{
  "digest": (string | "sha256"),
}, any>(
  "example.StatBlob",
  ({
"digest": path_digest,
}) => ({
"method": "GET",
"url": `/api/kubepkg.innoai.tech/v1/blobs/${path_digest}/stat`,
}),
)



export const uploadBlob =
/*#__PURE__*/createRequest<{
  "Content-Type": string,
  "body": File | Blob,
}, any>(
  "example.UploadBlob",
  ({
"Content-Type": header_contentType,
"body": body,
}) => ({
"method": "PUT",
"url": "/api/kubepkg.innoai.tech/v1/blobs",
"headers": {
"Content-Type": header_contentType,
},
"body": body,
}),
)



      
export type KubepkgV1Alpha1KubePkg = (/* @type:object */ MetaV1TypeMeta & {
  "metadata"?: /* @type:object */ MetaV1ObjectMeta,
  "spec"?: /* @type:object */ KubepkgV1Alpha1KubePkgSpec,
  "status"?: /* @type:object */ KubepkgV1Alpha1KubePkgStatus,
})
      
export type MetaV1TypeMeta = {
  "apiVersion"?: string,
  "kind"?: string,
}
      
export type MetaV1ObjectMeta = {
  "annotations"?: { [k: string]: string },
  "clusterName"?: string,
  "creationTimestamp"?: /* @type:string */ MetaV1Time,
  "deletionGracePeriodSeconds"?: number,
  "deletionTimestamp"?: /* @type:string */ MetaV1Time,
  "finalizers"?: Array<string>,
  "generateName"?: string,
  "generation"?: number,
  "labels"?: { [k: string]: string },
  "managedFields"?: Array</* @type:object */ MetaV1ManagedFieldsEntry>,
  "name"?: string,
  "namespace"?: string,
  "ownerReferences"?: Array</* @type:object */ MetaV1OwnerReference>,
  "resourceVersion"?: string,
  "selfLink"?: string,
  "uid"?: /* @type:string */ TypesUid,
}
      
export type MetaV1Time = string
      
export type MetaV1ManagedFieldsEntry = {
  "apiVersion"?: string,
  "fieldsType"?: string,
  "fieldsV1"?: /* @type:record */ MetaV1FieldsV1,
  "manager"?: string,
  "operation"?: /* @type:string */ MetaV1ManagedFieldsOperationType,
  "subresource"?: string,
  "time"?: /* @type:string */ MetaV1Time,
}
      
export type MetaV1FieldsV1 = { [k: string]: any }
      
export type MetaV1ManagedFieldsOperationType = string
      
export type MetaV1OwnerReference = {
  "apiVersion": string,
  "blockOwnerDeletion"?: boolean,
  "controller"?: boolean,
  "kind": string,
  "name": string,
  "uid": /* @type:string */ TypesUid,
}
      
export type TypesUid = string
      
export type KubepkgV1Alpha1KubePkgSpec = {
  "images"?: { [k: string]: string },
  "manifests"?: /* @type:record */ KubepkgV1Alpha1Manifests,
  "version": string,
}
      
export type KubepkgV1Alpha1Manifests = { [k: string]: any }
      
export type KubepkgV1Alpha1KubePkgStatus = {
  "digests"?: Array</* @type:object */ KubepkgV1Alpha1DigestMeta>,
  "statuses"?: /* @type:record */ KubepkgV1Alpha1Statuses,
}
      
export type KubepkgV1Alpha1DigestMeta = {
  "digest": string,
  "name": string,
  "platform"?: string,
  "size": /* @type:integer */ KubepkgV1Alpha1FileSize,
  "tag"?: string,
  "type": /* @type:enums */ KubepkgV1Alpha1DigestMetaType,
}
      
export type KubepkgV1Alpha1FileSize = number
      
export enum KubepkgV1Alpha1DigestMetaType {
blob = "blob",
manifest = "manifest"         
}
      
export const displayKubepkgV1Alpha1DigestMetaType = (v: KubepkgV1Alpha1DigestMetaType) => {
  return ({
blob: "Blob",
manifest: "Manifest"   
  })[v] ?? v      
}
      
export type KubepkgV1Alpha1Statuses = { [k: string]: any }


      
export const KubepkgV1Alpha1KubePkgSchema = /*#__PURE__*/t.intersection(t.ref<typeof MetaV1TypeMetaSchema>("MetaV1TypeMeta", () => MetaV1TypeMetaSchema), t.object({
  "metadata": t.ref<typeof MetaV1ObjectMetaSchema>("MetaV1ObjectMeta", () => MetaV1ObjectMetaSchema).optional(),
  "spec": t.ref<typeof KubepkgV1Alpha1KubePkgSpecSchema>("KubepkgV1Alpha1KubePkgSpec", () => KubepkgV1Alpha1KubePkgSpecSchema).optional(),
  "status": t.ref<typeof KubepkgV1Alpha1KubePkgStatusSchema>("KubepkgV1Alpha1KubePkgStatus", () => KubepkgV1Alpha1KubePkgStatusSchema).optional(),
})).use(t.annotate({ description: "KubePkg" }))
      
export const MetaV1TypeMetaSchema = /*#__PURE__*/t.object({
  "apiVersion": t.string().optional(),
  "kind": t.string().optional(),
})
      
export const MetaV1ObjectMetaSchema = /*#__PURE__*/t.object({
  "annotations": t.record(t.string(), t.string()).optional(),
  "clusterName": t.string().optional(),
  "creationTimestamp": t.ref<typeof MetaV1TimeSchema>("MetaV1Time", () => MetaV1TimeSchema).optional(),
  "deletionGracePeriodSeconds": t.integer().optional(),
  "deletionTimestamp": t.ref<typeof MetaV1TimeSchema>("MetaV1Time", () => MetaV1TimeSchema).optional(),
  "finalizers": t.array(t.string()).optional(),
  "generateName": t.string().optional(),
  "generation": t.integer().optional(),
  "labels": t.record(t.string(), t.string()).optional(),
  "managedFields": t.array(t.ref<typeof MetaV1ManagedFieldsEntrySchema>("MetaV1ManagedFieldsEntry", () => MetaV1ManagedFieldsEntrySchema)).optional(),
  "name": t.string().optional(),
  "namespace": t.string().optional(),
  "ownerReferences": t.array(t.ref<typeof MetaV1OwnerReferenceSchema>("MetaV1OwnerReference", () => MetaV1OwnerReferenceSchema)).optional(),
  "resourceVersion": t.string().optional(),
  "selfLink": t.string().optional(),
  "uid": t.ref<typeof TypesUidSchema>("TypesUid", () => TypesUidSchema).optional(),
})
      
export const MetaV1TimeSchema = /*#__PURE__*/t.string()
      
export const MetaV1ManagedFieldsEntrySchema = /*#__PURE__*/t.object({
  "apiVersion": t.string().optional(),
  "fieldsType": t.string().optional(),
  "fieldsV1": t.ref<typeof MetaV1FieldsV1Schema>("MetaV1FieldsV1", () => MetaV1FieldsV1Schema).optional(),
  "manager": t.string().optional(),
  "operation": t.ref<typeof MetaV1ManagedFieldsOperationTypeSchema>("MetaV1ManagedFieldsOperationType", () => MetaV1ManagedFieldsOperationTypeSchema).optional(),
  "subresource": t.string().optional(),
  "time": t.ref<typeof MetaV1TimeSchema>("MetaV1Time", () => MetaV1TimeSchema).optional(),
})
      
export const MetaV1FieldsV1Schema = /*#__PURE__*/t.record(t.string(), t.any())
      
export const MetaV1ManagedFieldsOperationTypeSchema = /*#__PURE__*/t.string()
      
export const MetaV1OwnerReferenceSchema = /*#__PURE__*/t.object({
  "apiVersion": t.string(),
  "blockOwnerDeletion": t.boolean().optional(),
  "controller": t.boolean().optional(),
  "kind": t.string(),
  "name": t.string(),
  "uid": t.ref<typeof TypesUidSchema>("TypesUid", () => TypesUidSchema),
})
      
export const TypesUidSchema = /*#__PURE__*/t.string()
      
export const KubepkgV1Alpha1KubePkgSpecSchema = /*#__PURE__*/t.object({
  "images": t.record(t.string(), t.string()).optional(),
  "manifests": t.ref<typeof KubepkgV1Alpha1ManifestsSchema>("KubepkgV1Alpha1Manifests", () => KubepkgV1Alpha1ManifestsSchema).optional(),
  "version": t.string(),
})
      
export const KubepkgV1Alpha1ManifestsSchema = /*#__PURE__*/t.record(t.string(), t.any())
      
export const KubepkgV1Alpha1KubePkgStatusSchema = /*#__PURE__*/t.object({
  "digests": t.array(t.ref<typeof KubepkgV1Alpha1DigestMetaSchema>("KubepkgV1Alpha1DigestMeta", () => KubepkgV1Alpha1DigestMetaSchema)).optional(),
  "statuses": t.ref<typeof KubepkgV1Alpha1StatusesSchema>("KubepkgV1Alpha1Statuses", () => KubepkgV1Alpha1StatusesSchema).optional(),
})
      
export const KubepkgV1Alpha1DigestMetaSchema = /*#__PURE__*/t.object({
  "digest": t.string(),
  "name": t.string(),
  "platform": t.string().optional(),
  "size": t.ref<typeof KubepkgV1Alpha1FileSizeSchema>("KubepkgV1Alpha1FileSize", () => KubepkgV1Alpha1FileSizeSchema),
  "tag": t.string().optional(),
  "type": t.ref<typeof KubepkgV1Alpha1DigestMetaTypeSchema>("KubepkgV1Alpha1DigestMetaType", () => KubepkgV1Alpha1DigestMetaTypeSchema),
})
      
export const KubepkgV1Alpha1FileSizeSchema = /*#__PURE__*/t.integer()
      
export const KubepkgV1Alpha1DigestMetaTypeSchema = /*#__PURE__*/t.nativeEnum(KubepkgV1Alpha1DigestMetaType)
      
export const KubepkgV1Alpha1StatusesSchema = /*#__PURE__*/t.record(t.string(), t.any())
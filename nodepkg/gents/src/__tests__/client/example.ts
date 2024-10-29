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
"Accept": "application/json",
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
"headers": {
"Accept": "application/json",
},
}),
)



export const listKubePkg =
/*#__PURE__*/createRequest<void, Array</* @type:intersection */ KubepkgV1Alpha1KubePkg>>(
  "example.ListKubePkg",
  () => ({
"method": "GET",
"url": "/api/kubepkg.innoai.tech/v1/kubepkgs",
"headers": {
"Accept": "application/json",
},
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
"blob": "Blob",
"manifest": "Manifest"   
  })[v] ?? v      
}
      
export type KubepkgV1Alpha1Statuses = { [k: string]: any }


      
export class MetaV1ManagedFieldsEntrySchema {

@t.string()
@t.optional()
"apiVersion"?: string

@t.string()
@t.optional()
"fieldsType"?: string

@t.record(t.string(), t.any())
@t.optional()
"fieldsV1"?: /* @type:record */ MetaV1FieldsV1

@t.string()
@t.optional()
"manager"?: string

@t.string()
@t.optional()
"operation"?: /* @type:string */ MetaV1ManagedFieldsOperationType

@t.string()
@t.optional()
"subresource"?: string

@t.string()
@t.optional()
"time"?: /* @type:string */ MetaV1Time

}
      
export class MetaV1OwnerReferenceSchema {

@t.string()
"apiVersion"!: string

@t.boolean()
@t.optional()
"blockOwnerDeletion"?: boolean

@t.boolean()
@t.optional()
"controller"?: boolean

@t.string()
"kind"!: string

@t.string()
"name"!: string

@t.string()
"uid"!: /* @type:string */ TypesUid

}
      
export class MetaV1ObjectMetaSchema {

@t.record(t.string(), t.string())
@t.optional()
"annotations"?: { [k: string]: string }

@t.string()
@t.optional()
"clusterName"?: string

@t.string()
@t.optional()
"creationTimestamp"?: /* @type:string */ MetaV1Time

@t.integer()
@t.optional()
"deletionGracePeriodSeconds"?: number

@t.string()
@t.optional()
"deletionTimestamp"?: /* @type:string */ MetaV1Time

@t.array(t.string())
@t.optional()
"finalizers"?: Array<string>

@t.string()
@t.optional()
"generateName"?: string

@t.integer()
@t.optional()
"generation"?: number

@t.record(t.string(), t.string())
@t.optional()
"labels"?: { [k: string]: string }

@t.array(t.ref("MetaV1ManagedFieldsEntrySchema", () => t.object(MetaV1ManagedFieldsEntrySchema)))
@t.optional()
"managedFields"?: Array</* @type:object */ MetaV1ManagedFieldsEntry>

@t.string()
@t.optional()
"name"?: string

@t.string()
@t.optional()
"namespace"?: string

@t.array(t.ref("MetaV1OwnerReferenceSchema", () => t.object(MetaV1OwnerReferenceSchema)))
@t.optional()
"ownerReferences"?: Array</* @type:object */ MetaV1OwnerReference>

@t.string()
@t.optional()
"resourceVersion"?: string

@t.string()
@t.optional()
"selfLink"?: string

@t.string()
@t.optional()
"uid"?: /* @type:string */ TypesUid

}
      
export class KubepkgV1Alpha1KubePkgSpecSchema {

@t.record(t.string(), t.string())
@t.optional()
"images"?: { [k: string]: string }

@t.record(t.string(), t.any())
@t.optional()
"manifests"?: /* @type:record */ KubepkgV1Alpha1Manifests

@t.string()
"version"!: string

}
      
export class KubepkgV1Alpha1DigestMetaSchema {

@t.string()
"digest"!: string

@t.string()
"name"!: string

@t.string()
@t.optional()
"platform"?: string

@t.integer()
"size"!: /* @type:integer */ KubepkgV1Alpha1FileSize

@t.string()
@t.optional()
"tag"?: string

@t.nativeEnum(KubepkgV1Alpha1DigestMetaType)
"type"!: /* @type:enums */ KubepkgV1Alpha1DigestMetaType

}
      
export class KubepkgV1Alpha1KubePkgStatusSchema {

@t.array(t.ref("KubepkgV1Alpha1DigestMetaSchema", () => t.object(KubepkgV1Alpha1DigestMetaSchema)))
@t.optional()
"digests"?: Array</* @type:object */ KubepkgV1Alpha1DigestMeta>

@t.record(t.string(), t.any())
@t.optional()
"statuses"?: /* @type:record */ KubepkgV1Alpha1Statuses

}
      
export class KubepkgV1Alpha1KubePkgSchema {

@t.string()
@t.optional()
"apiVersion"?: string

@t.string()
@t.optional()
"kind"?: string

@t.ref("MetaV1ObjectMetaSchema", () => t.object(MetaV1ObjectMetaSchema))
@t.optional()
"metadata"?: /* @type:object */ MetaV1ObjectMeta

@t.ref("KubepkgV1Alpha1KubePkgSpecSchema", () => t.object(KubepkgV1Alpha1KubePkgSpecSchema))
@t.optional()
"spec"?: /* @type:object */ KubepkgV1Alpha1KubePkgSpec

@t.ref("KubepkgV1Alpha1KubePkgStatusSchema", () => t.object(KubepkgV1Alpha1KubePkgStatusSchema))
@t.optional()
"status"?: /* @type:object */ KubepkgV1Alpha1KubePkgStatus

}
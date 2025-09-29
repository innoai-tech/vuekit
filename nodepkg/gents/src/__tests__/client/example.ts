import { createRequest } from "./client";

import { t } from "@innoai-tech/typedef";


export const baseUrl = /*#__PURE__*/createRequest<void, { [k: string]: string }>(
  "example.BaseURL",
  () => ({
"method": "GET",
"url": "/v2",
"headers": {
"Accept": "application/json",
},
}),
)



export const cancelUploadBlob = /*#__PURE__*/createRequest<{
  "id": string,
  "name": /* @type:string */ ContentName,
}, any>(
  "example.CancelUploadBlob",
  (x) => ({
"method": "DELETE",
"url": `/v2/${x["name"]}/blobs/uploads/${x["id"]}`,
}),
)



export const deleteBlob = /*#__PURE__*/createRequest<{
  "digest": /* @type:string */ ContentDigest,
  "name": /* @type:string */ ContentName,
}, any>(
  "example.DeleteBlob",
  (x) => ({
"method": "DELETE",
"url": `/v2/${x["name"]}/blobs/${x["digest"]}`,
}),
)



export const deleteManifest = /*#__PURE__*/createRequest<{
  "reference": /* @type:string */ ContentReference,
  "name": /* @type:string */ ContentName,
}, any>(
  "example.DeleteManifest",
  (x) => ({
"method": "DELETE",
"url": `/v2/${x["name"]}/manifests/${x["reference"]}`,
}),
)



export const getBlob = /*#__PURE__*/createRequest<{
  "digest": /* @type:string */ ContentDigest,
  "name": /* @type:string */ ContentName,
}, /* @type:binary */ IoReadCloser>(
  "example.GetBlob",
  (x) => ({
"method": "GET",
"url": `/v2/${x["name"]}/blobs/${x["digest"]}`,
"headers": {
"Accept": "application/json",
},
}),
)



export const getManifest = /*#__PURE__*/createRequest<{
  "Accept"?: string,
  "reference": /* @type:string */ ContentReference,
  "name": /* @type:string */ ContentName,
}, /* @type:union */ ManifestV1Payload>(
  "example.GetManifest",
  (x) => ({
"method": "GET",
"url": `/v2/${x["name"]}/manifests/${x["reference"]}`,
"headers": {
"Accept": x.Accept ?? "application/json",
},
}),
)



export const headBlob = /*#__PURE__*/createRequest<{
  "digest": /* @type:string */ ContentDigest,
  "name": /* @type:string */ ContentName,
}, any>(
  "example.HeadBlob",
  (x) => ({
"method": "HEAD",
"url": `/v2/${x["name"]}/blobs/${x["digest"]}`,
"headers": {
"Accept": "application/json",
},
}),
)



export const headManifest = /*#__PURE__*/createRequest<{
  "Accept"?: string,
  "reference": /* @type:string */ ContentReference,
  "name": /* @type:string */ ContentName,
}, any>(
  "example.HeadManifest",
  (x) => ({
"method": "HEAD",
"url": `/v2/${x["name"]}/manifests/${x["reference"]}`,
"headers": {
"Accept": x.Accept ?? "application/json",
},
}),
)



export const listTag = /*#__PURE__*/createRequest<{
  "name": /* @type:string */ ContentName,
}, /* @type:object */ ContentTagList>(
  "example.ListTag",
  (x) => ({
"method": "GET",
"url": `/v2/${x["name"]}/tags/list`,
"headers": {
"Accept": "application/json",
},
}),
)



export const putManifest = /*#__PURE__*/createRequest<{
  "reference": /* @type:string */ ContentReference,
  "name": /* @type:string */ ContentName,
  "body": /* @type:union */ ManifestV1Payload,
}, any>(
  "example.PutManifest",
  (x) => ({
"method": "PUT",
"url": `/v2/${x["name"]}/manifests/${x["reference"]}`,
"body": x.body,
"headers": {
"Content-Type": "application/json",
"Accept": "application/json",
},
}),
)



export const uploadBlob = /*#__PURE__*/createRequest<{
  "Content-Length"?: number,
  "Content-Type"?: string,
  "digest"?: /* @type:string */ ContentDigest,
  "name": /* @type:string */ ContentName,
  "body": File | Blob,
}, any>(
  "example.UploadBlob",
  (x) => ({
"method": "POST",
"url": `/v2/${x["name"]}/blobs/uploads`,
"headers": {
"Content-Length": x["Content-Length"],
"Content-Type": x["Content-Type"],
"Accept": "application/json",
},
"params": {
"digest": x["digest"],
},
"body": x.body,
}),
)



export const uploadPatchBlob = /*#__PURE__*/createRequest<{
  "id": string,
  "name": /* @type:string */ ContentName,
  "body": File | Blob,
}, any>(
  "example.UploadPatchBlob",
  (x) => ({
"method": "PATCH",
"url": `/v2/${x["name"]}/blobs/uploads/${x["id"]}`,
"body": x.body,
"headers": {
"Content-Type": "application/octet-stream",
"Accept": "application/json",
},
}),
)



export const uploadPutBlob = /*#__PURE__*/createRequest<{
  "id": string,
  "Content-Length"?: number,
  "digest": /* @type:string */ ContentDigest,
  "name": /* @type:string */ ContentName,
  "body": File | Blob,
}, any>(
  "example.UploadPutBlob",
  (x) => ({
"method": "PUT",
"url": `/v2/${x["name"]}/blobs/uploads/${x["id"]}`,
"headers": {
"Content-Length": x["Content-Length"],
"Content-Type": "application/octet-stream",
"Accept": "application/json",
},
"params": {
"digest": x["digest"],
},
"body": x.body,
}),
)



      
export type ContentName = string
      
export type ContentDigest = string
      
export type ContentReference = string
      
export type IoReadCloser = File | Blob
      
export type ManifestV1Payload = (/* @type:object */ ManifestV1DockerManifestList | /* @type:object */ ManifestV1DockerManifest | /* @type:object */ ManifestV1OciIndex | /* @type:object */ ManifestV1OciManifest)
      
export type ManifestV1DockerManifestList = {
  "annotations"?: { [k: string]: string },
  "artifactType"?: string,
  "manifests": Array</* @type:object */ OpencontainersImageSpecSpecsGoV1Descriptor>,
  "mediaType"?: string,
  "schemaVersion": number,
  "subject"?: /* @type:object */ OpencontainersImageSpecSpecsGoV1Descriptor,
}
      
export type OpencontainersImageSpecSpecsGoV1Descriptor = {
  "annotations"?: { [k: string]: string },
  "artifactType"?: string,
  "data"?: string,
  "digest": /* @type:string */ OpencontainersGoDigestDigest,
  "mediaType": string,
  "platform"?: /* @type:object */ OpencontainersImageSpecSpecsGoV1Platform,
  "size": number,
  "urls"?: Array<string>,
}
      
export type OpencontainersGoDigestDigest = string
      
export type OpencontainersImageSpecSpecsGoV1Platform = {
  "architecture": string,
  "os": string,
  "os.features"?: Array<string>,
  "os.version"?: string,
  "variant"?: string,
}
      
export type ManifestV1DockerManifest = {
  "annotations"?: { [k: string]: string },
  "artifactType"?: string,
  "config": /* @type:object */ OpencontainersImageSpecSpecsGoV1Descriptor,
  "layers": Array</* @type:object */ OpencontainersImageSpecSpecsGoV1Descriptor>,
  "mediaType"?: string,
  "schemaVersion": number,
  "subject"?: /* @type:object */ OpencontainersImageSpecSpecsGoV1Descriptor,
}
      
export type ManifestV1OciIndex = {
  "annotations"?: { [k: string]: string },
  "artifactType"?: string,
  "manifests": Array</* @type:object */ OpencontainersImageSpecSpecsGoV1Descriptor>,
  "mediaType"?: string,
  "schemaVersion": number,
  "subject"?: /* @type:object */ OpencontainersImageSpecSpecsGoV1Descriptor,
}
      
export type ManifestV1OciManifest = {
  "annotations"?: { [k: string]: string },
  "artifactType"?: string,
  "config": /* @type:object */ OpencontainersImageSpecSpecsGoV1Descriptor,
  "layers": Array</* @type:object */ OpencontainersImageSpecSpecsGoV1Descriptor>,
  "mediaType"?: string,
  "schemaVersion": number,
  "subject"?: /* @type:object */ OpencontainersImageSpecSpecsGoV1Descriptor,
}
      
export type ContentTagList = {
  "name": string,
  "tags": Array<string>,
}


      
export class ContentTagListSchema {

@t.string()
"name"!: string

@t.array(t.string())
"tags"!: Array<string>

}
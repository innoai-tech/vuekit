import { V as e, h as s, m as r, o as t, u as a } from "./lib-nodepkg-vuekit.Dng4O0gc.chunk.js";
import { n as i } from "./lib-nodepkg-typedef.WoOPnAhr.chunk.js";
import { n as c, r as o, t as u } from "./vendor-rxjs.DGO3ID4f.chunk.js";
import { n as p } from "./index.DvdiqX_t.entry.js";
var n = { spec: {
	version: "v1.18.2",
	deploy: {
		kind: "Deployment",
		spec: {
			replicas: 1,
			template: { spec: {
				nodeSelector: { "kubernetes.io/os": "linux" },
				securityContext: {
					runAsNonRoot: !1,
					seccompProfile: { type: "RuntimeDefault" }
				},
				enableServiceLinks: !1
			} },
			strategy: {}
		}
	},
	config: { POD_NAMESPACE: "@field/metadata.namespace" },
	containers: {
		"cert-manager-controller": {
			image: {
				name: "docker.io/industai/cert-manager-controller",
				tag: "v1.18.2",
				pullPolicy: "IfNotPresent"
			},
			args: [
				"--v=2",
				"--cluster-resource-namespace=$(POD_NAMESPACE)",
				"--leader-election-namespace=kube-system",
				"--acme-http01-solver-image=industai/cert-manager-acmesolver:v1.18.2",
				"--max-concurrent-challenges=60"
			],
			ports: {
				"http-metrics": 9402,
				"http-healthz": 9403
			},
			livenessProbe: {
				httpGet: {
					path: "/livez",
					port: "http-healthz",
					scheme: "HTTP"
				},
				initialDelaySeconds: 10,
				timeoutSeconds: 15,
				periodSeconds: 10,
				successThreshold: 1,
				failureThreshold: 8
			},
			securityContext: {
				capabilities: { drop: ["ALL"] },
				readOnlyRootFilesystem: !0,
				allowPrivilegeEscalation: !1
			}
		},
		"init-crds": { image: {
			name: "docker.io/industai/cert-manager-crd-installer",
			tag: "v1.18.2"
		} }
	},
	services: { "#": { ports: { "http-metrics": 9402 } } },
	images: { "cert-manager-acmesolver": {
		name: "docker.io/industai/cert-manager-acmesolver",
		tag: "v1.18.2"
	} },
	serviceAccount: {
		scope: "Cluster",
		rules: [
			{
				verbs: ["update", "patch"],
				apiGroups: ["cert-manager.io"],
				resources: [
					"certificates",
					"certificates/status",
					"certificaterequests",
					"certificaterequests/status"
				]
			},
			{
				verbs: [
					"get",
					"list",
					"watch"
				],
				apiGroups: ["cert-manager.io"],
				resources: [
					"certificates",
					"certificaterequests",
					"clusterissuers",
					"issuers"
				]
			},
			{
				verbs: ["update"],
				apiGroups: ["cert-manager.io"],
				resources: ["certificates/finalizers", "certificaterequests/finalizers"]
			},
			{
				verbs: [
					"create",
					"delete",
					"get",
					"list",
					"watch"
				],
				apiGroups: ["acme.cert-manager.io"],
				resources: ["orders"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch",
					"create",
					"update",
					"delete",
					"patch"
				],
				apiGroups: [""],
				resources: ["secrets"]
			},
			{
				verbs: ["create", "patch"],
				apiGroups: [""],
				resources: ["events"]
			},
			{
				verbs: ["update", "patch"],
				apiGroups: ["acme.cert-manager.io"],
				resources: ["orders", "orders/status"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch"
				],
				apiGroups: ["acme.cert-manager.io"],
				resources: ["orders", "challenges"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch"
				],
				apiGroups: ["cert-manager.io"],
				resources: ["clusterissuers", "issuers"]
			},
			{
				verbs: ["create", "delete"],
				apiGroups: ["acme.cert-manager.io"],
				resources: ["challenges"]
			},
			{
				verbs: ["update"],
				apiGroups: ["acme.cert-manager.io"],
				resources: ["orders/finalizers"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch"
				],
				apiGroups: [""],
				resources: ["secrets"]
			},
			{
				verbs: ["create", "patch"],
				apiGroups: [""],
				resources: ["events"]
			},
			{
				verbs: ["update", "patch"],
				apiGroups: ["cert-manager.io"],
				resources: ["clusterissuers", "clusterissuers/status"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch"
				],
				apiGroups: ["cert-manager.io"],
				resources: ["clusterissuers"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch",
					"create",
					"update",
					"delete"
				],
				apiGroups: [""],
				resources: ["secrets"]
			},
			{
				verbs: ["create", "patch"],
				apiGroups: [""],
				resources: ["events"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch",
					"update"
				],
				apiGroups: ["certificates.k8s.io"],
				resources: ["certificatesigningrequests"]
			},
			{
				verbs: ["update", "patch"],
				apiGroups: ["certificates.k8s.io"],
				resources: ["certificatesigningrequests/status"]
			},
			{
				verbs: ["sign"],
				apiGroups: ["certificates.k8s.io"],
				resources: ["signers"],
				resourceNames: ["issuers.cert-manager.io/*", "clusterissuers.cert-manager.io/*"]
			},
			{
				verbs: ["create"],
				apiGroups: ["authorization.k8s.io"],
				resources: ["subjectaccessreviews"]
			},
			{
				verbs: ["create"],
				apiGroups: [""],
				resources: ["serviceaccounts/token"],
				resourceNames: ["cert-manager"]
			},
			{
				verbs: ["update", "patch"],
				apiGroups: ["acme.cert-manager.io"],
				resources: ["challenges", "challenges/status"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch"
				],
				apiGroups: ["acme.cert-manager.io"],
				resources: ["challenges"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch"
				],
				apiGroups: ["cert-manager.io"],
				resources: ["issuers", "clusterissuers"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch"
				],
				apiGroups: [""],
				resources: ["secrets"]
			},
			{
				verbs: ["create", "patch"],
				apiGroups: [""],
				resources: ["events"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch",
					"create",
					"delete"
				],
				apiGroups: [""],
				resources: ["pods", "services"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch",
					"create",
					"delete",
					"update"
				],
				apiGroups: ["networking.k8s.io"],
				resources: ["ingresses"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch",
					"create",
					"delete",
					"update"
				],
				apiGroups: ["gateway.networking.k8s.io"],
				resources: ["httproutes"]
			},
			{
				verbs: ["create"],
				apiGroups: ["route.openshift.io"],
				resources: ["routes/custom-host"]
			},
			{
				verbs: ["update"],
				apiGroups: ["acme.cert-manager.io"],
				resources: ["challenges/finalizers"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch"
				],
				apiGroups: [""],
				resources: ["secrets"]
			},
			{
				verbs: ["update", "patch"],
				apiGroups: ["cert-manager.io"],
				resources: ["issuers", "issuers/status"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch"
				],
				apiGroups: ["cert-manager.io"],
				resources: ["issuers"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch",
					"create",
					"update",
					"delete"
				],
				apiGroups: [""],
				resources: ["secrets"]
			},
			{
				verbs: ["create", "patch"],
				apiGroups: [""],
				resources: ["events"]
			},
			{
				verbs: [
					"create",
					"update",
					"delete"
				],
				apiGroups: ["cert-manager.io"],
				resources: ["certificates", "certificaterequests"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch"
				],
				apiGroups: ["cert-manager.io"],
				resources: [
					"certificates",
					"certificaterequests",
					"issuers",
					"clusterissuers"
				]
			},
			{
				verbs: [
					"get",
					"list",
					"watch"
				],
				apiGroups: ["networking.k8s.io"],
				resources: ["ingresses"]
			},
			{
				verbs: ["update"],
				apiGroups: ["networking.k8s.io"],
				resources: ["ingresses/finalizers"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch"
				],
				apiGroups: ["gateway.networking.k8s.io"],
				resources: ["gateways", "httproutes"]
			},
			{
				verbs: ["update"],
				apiGroups: ["gateway.networking.k8s.io"],
				resources: ["gateways/finalizers", "httproutes/finalizers"]
			},
			{
				verbs: ["create", "patch"],
				apiGroups: [""],
				resources: ["events"]
			},
			{
				verbs: [
					"get",
					"update",
					"patch"
				],
				apiGroups: ["coordination.k8s.io"],
				resources: ["leases"],
				resourceNames: ["cert-manager-controller"]
			},
			{
				verbs: ["create"],
				apiGroups: ["coordination.k8s.io"],
				resources: ["leases"]
			},
			{
				verbs: ["approve"],
				apiGroups: ["cert-manager.io"],
				resources: ["signers"],
				resourceNames: ["issuers.cert-manager.io/*", "clusterissuers.cert-manager.io/*"]
			},
			{
				verbs: [
					"get",
					"patch",
					"list",
					"watch",
					"update",
					"create"
				],
				apiGroups: ["apiextensions.k8s.io"],
				resources: ["customresourcedefinitions"]
			}
		]
	}
} }, l = e(() => {
	let e = i(), l = c.of(e, n);
	return l.toggleFold("/spec/serviceAccount"), r(l, s((s) => {
		let [r] = e.validate(s);
		if (r) for (let e of r.failures()) l.setError(e.path, e.message);
	}), a()), () => t(p, {
		sx: {
			width: "100%",
			height: "100%",
			pr: "20%"
		},
		children: t(o, {
			value: l,
			children: t(u, { readOnly: !0 })
		})
	});
});
export { l as default };

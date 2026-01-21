import { component, rx, subscribeUntilUnmount, t } from "@innoai-tech/vuekit";
import { Container } from "@webapp/vuekit/layout";
import { JSONEditor, JSONEditorProvider, JSONEditorView } from "../src";
import { tap } from "rxjs";

const data = {
  spec: {
    version: "v1.18.2",
    deploy: {
      kind: "Deployment",
      spec: {
        replicas: 1,
        template: {
          spec: {
            nodeSelector: {
              "kubernetes.io/os": "linux",
            },
            securityContext: {
              runAsNonRoot: false,
              seccompProfile: {
                type: "RuntimeDefault",
              },
            },
            enableServiceLinks: false,
          },
        },
        strategy: {},
      },
    },
    config: {
      POD_NAMESPACE: "@field/metadata.namespace",
    },
    containers: {
      "cert-manager-controller": {
        image: {
          name: "docker.io/industai/cert-manager-controller",
          tag: "v1.18.2",
          pullPolicy: "IfNotPresent",
        },
        args: [
          "--v=2",
          "--cluster-resource-namespace=$(POD_NAMESPACE)",
          "--leader-election-namespace=kube-system",
          "--acme-http01-solver-image=industai/cert-manager-acmesolver:v1.18.2",
          "--max-concurrent-challenges=60",
        ],
        ports: {
          "http-metrics": 9402,
          "http-healthz": 9403,
        },
        livenessProbe: {
          httpGet: {
            path: "/livez",
            port: "http-healthz",
            scheme: "HTTP",
          },
          initialDelaySeconds: 10,
          timeoutSeconds: 15,
          periodSeconds: 10,
          successThreshold: 1,
          failureThreshold: 8,
        },
        securityContext: {
          capabilities: {
            drop: ["ALL"],
          },
          readOnlyRootFilesystem: true,
          allowPrivilegeEscalation: false,
        },
      },
      "init-crds": {
        image: {
          name: "docker.io/industai/cert-manager-crd-installer",
          tag: "v1.18.2",
        },
      },
    },
    services: {
      "#": {
        ports: {
          "http-metrics": 9402,
        },
      },
    },
    images: {
      "cert-manager-acmesolver": {
        name: "docker.io/industai/cert-manager-acmesolver",
        tag: "v1.18.2",
      },
    },
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
            "certificaterequests/status",
          ],
        },
        {
          verbs: ["get", "list", "watch"],
          apiGroups: ["cert-manager.io"],
          resources: [
            "certificates",
            "certificaterequests",
            "clusterissuers",
            "issuers",
          ],
        },
        {
          verbs: ["update"],
          apiGroups: ["cert-manager.io"],
          resources: [
            "certificates/finalizers",
            "certificaterequests/finalizers",
          ],
        },
        {
          verbs: ["create", "delete", "get", "list", "watch"],
          apiGroups: ["acme.cert-manager.io"],
          resources: ["orders"],
        },
        {
          verbs: [
            "get",
            "list",
            "watch",
            "create",
            "update",
            "delete",
            "patch",
          ],
          apiGroups: [""],
          resources: ["secrets"],
        },
        {
          verbs: ["create", "patch"],
          apiGroups: [""],
          resources: ["events"],
        },
        {
          verbs: ["update", "patch"],
          apiGroups: ["acme.cert-manager.io"],
          resources: ["orders", "orders/status"],
        },
        {
          verbs: ["get", "list", "watch"],
          apiGroups: ["acme.cert-manager.io"],
          resources: ["orders", "challenges"],
        },
        {
          verbs: ["get", "list", "watch"],
          apiGroups: ["cert-manager.io"],
          resources: ["clusterissuers", "issuers"],
        },
        {
          verbs: ["create", "delete"],
          apiGroups: ["acme.cert-manager.io"],
          resources: ["challenges"],
        },
        {
          verbs: ["update"],
          apiGroups: ["acme.cert-manager.io"],
          resources: ["orders/finalizers"],
        },
        {
          verbs: ["get", "list", "watch"],
          apiGroups: [""],
          resources: ["secrets"],
        },
        {
          verbs: ["create", "patch"],
          apiGroups: [""],
          resources: ["events"],
        },
        {
          verbs: ["update", "patch"],
          apiGroups: ["cert-manager.io"],
          resources: ["clusterissuers", "clusterissuers/status"],
        },
        {
          verbs: ["get", "list", "watch"],
          apiGroups: ["cert-manager.io"],
          resources: ["clusterissuers"],
        },
        {
          verbs: ["get", "list", "watch", "create", "update", "delete"],
          apiGroups: [""],
          resources: ["secrets"],
        },
        {
          verbs: ["create", "patch"],
          apiGroups: [""],
          resources: ["events"],
        },
        {
          verbs: ["get", "list", "watch", "update"],
          apiGroups: ["certificates.k8s.io"],
          resources: ["certificatesigningrequests"],
        },
        {
          verbs: ["update", "patch"],
          apiGroups: ["certificates.k8s.io"],
          resources: ["certificatesigningrequests/status"],
        },
        {
          verbs: ["sign"],
          apiGroups: ["certificates.k8s.io"],
          resources: ["signers"],
          resourceNames: [
            "issuers.cert-manager.io/*",
            "clusterissuers.cert-manager.io/*",
          ],
        },
        {
          verbs: ["create"],
          apiGroups: ["authorization.k8s.io"],
          resources: ["subjectaccessreviews"],
        },
        {
          verbs: ["create"],
          apiGroups: [""],
          resources: ["serviceaccounts/token"],
          resourceNames: ["cert-manager"],
        },
        {
          verbs: ["update", "patch"],
          apiGroups: ["acme.cert-manager.io"],
          resources: ["challenges", "challenges/status"],
        },
        {
          verbs: ["get", "list", "watch"],
          apiGroups: ["acme.cert-manager.io"],
          resources: ["challenges"],
        },
        {
          verbs: ["get", "list", "watch"],
          apiGroups: ["cert-manager.io"],
          resources: ["issuers", "clusterissuers"],
        },
        {
          verbs: ["get", "list", "watch"],
          apiGroups: [""],
          resources: ["secrets"],
        },
        {
          verbs: ["create", "patch"],
          apiGroups: [""],
          resources: ["events"],
        },
        {
          verbs: ["get", "list", "watch", "create", "delete"],
          apiGroups: [""],
          resources: ["pods", "services"],
        },
        {
          verbs: ["get", "list", "watch", "create", "delete", "update"],
          apiGroups: ["networking.k8s.io"],
          resources: ["ingresses"],
        },
        {
          verbs: ["get", "list", "watch", "create", "delete", "update"],
          apiGroups: ["gateway.networking.k8s.io"],
          resources: ["httproutes"],
        },
        {
          verbs: ["create"],
          apiGroups: ["route.openshift.io"],
          resources: ["routes/custom-host"],
        },
        {
          verbs: ["update"],
          apiGroups: ["acme.cert-manager.io"],
          resources: ["challenges/finalizers"],
        },
        {
          verbs: ["get", "list", "watch"],
          apiGroups: [""],
          resources: ["secrets"],
        },
        {
          verbs: ["update", "patch"],
          apiGroups: ["cert-manager.io"],
          resources: ["issuers", "issuers/status"],
        },
        {
          verbs: ["get", "list", "watch"],
          apiGroups: ["cert-manager.io"],
          resources: ["issuers"],
        },
        {
          verbs: ["get", "list", "watch", "create", "update", "delete"],
          apiGroups: [""],
          resources: ["secrets"],
        },
        {
          verbs: ["create", "patch"],
          apiGroups: [""],
          resources: ["events"],
        },
        {
          verbs: ["create", "update", "delete"],
          apiGroups: ["cert-manager.io"],
          resources: ["certificates", "certificaterequests"],
        },
        {
          verbs: ["get", "list", "watch"],
          apiGroups: ["cert-manager.io"],
          resources: [
            "certificates",
            "certificaterequests",
            "issuers",
            "clusterissuers",
          ],
        },
        {
          verbs: ["get", "list", "watch"],
          apiGroups: ["networking.k8s.io"],
          resources: ["ingresses"],
        },
        {
          verbs: ["update"],
          apiGroups: ["networking.k8s.io"],
          resources: ["ingresses/finalizers"],
        },
        {
          verbs: ["get", "list", "watch"],
          apiGroups: ["gateway.networking.k8s.io"],
          resources: ["gateways", "httproutes"],
        },
        {
          verbs: ["update"],
          apiGroups: ["gateway.networking.k8s.io"],
          resources: ["gateways/finalizers", "httproutes/finalizers"],
        },
        {
          verbs: ["create", "patch"],
          apiGroups: [""],
          resources: ["events"],
        },
        {
          verbs: ["get", "update", "patch"],
          apiGroups: ["coordination.k8s.io"],
          resources: ["leases"],
          resourceNames: ["cert-manager-controller"],
        },
        {
          verbs: ["create"],
          apiGroups: ["coordination.k8s.io"],
          resources: ["leases"],
        },
        {
          verbs: ["approve"],
          apiGroups: ["cert-manager.io"],
          resources: ["signers"],
          resourceNames: [
            "issuers.cert-manager.io/*",
            "clusterissuers.cert-manager.io/*",
          ],
        },
        {
          verbs: ["get", "patch", "list", "watch", "update", "create"],
          apiGroups: ["apiextensions.k8s.io"],
          resources: ["customresourcedefinitions"],
        },
      ],
    },
  },
};

export default component(() => {
  const x = t.any();

  const editor$ = JSONEditor.of(x, data);

  editor$.toggleFold("/spec/serviceAccount");

  rx(
    editor$,
    tap((v) => {
      const [err] = x.validate(v);
      if (err) {
        for (const x of err.failures()) {
          editor$.setError(x.path, x.message);
        }
      }
    }),
    subscribeUntilUnmount(),
  );

  return () => (
    <Container sx={{ width: "100%", height: "100%", pr: "20%" }}>
      <JSONEditorProvider value={editor$}>
        <JSONEditorView readOnly />
      </JSONEditorProvider>
    </Container>
  );
});

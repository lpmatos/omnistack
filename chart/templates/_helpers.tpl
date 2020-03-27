{{/* Create a default fully qualified - deployment backend. */}}
{{- define "backend.metadata.name" -}}
{{- $group := .Values.global.group -}}
{{- $project := .Values.global.project -}}
{{- printf "%s-%s-%s-%s" $group $project "api" "omnistack" | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/* Create a default fully qualified - deployment frontend. */}}
{{- define "frontend.metadata.name" -}}
{{- $group := .Values.global.group -}}
{{- $project := .Values.global.project -}}
{{- printf "%s-%s-%s-%s" $group $project "frontend" "omnistack" | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/*
Create a default fully qualified app name.
We truncate at 63 chars because some Kubernetes name fields are limited to this (by the DNS naming spec).
*/}}
{{- define "mysql.secret.name" -}}
{{- $name := .Values.mysql.name -}}
{{- printf "%s-%s" $name "secret" | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/* Return the proper backend image name. */}}
{{- define "backend.image" -}}
{{- $registryName  := .Values.global.registry -}}
{{- $group := .Values.global.group -}}
{{- $project := .Values.global.project -}}
{{- $tag := .Values.global.tag | toString -}}
{{- printf "%s/%s/%s/%s/%s:%s" $registryName $group $project "api" "omnistack" $tag -}}
{{- end -}}

{{/* Return the proper frontend image name. */}}
{{- define "frontend.image" -}}
{{- $registryName  := .Values.global.registry -}}
{{- $group := .Values.global.group -}}
{{- $project := .Values.global.project -}}
{{- $tag := .Values.global.tag | toString -}}
{{- printf "%s/%s/%s/%s/%s:%s" $registryName $group $project "frontend" "omnistack" $tag -}}
{{- end -}}

{{/* Return the proper mysql image name. */}}
{{- define "mysql.image" -}}
{{- $repository := .Values.mysql.image.repository -}}
{{- $tag := .Values.mysql.image.tag | toString -}}
{{- printf "%s:%s" $repository $tag -}}
{{- end -}}

{{/* Return the proper default ingress host. */}}
{{- define "default.ingress.host" -}}
{{- $group := .Values.global.group -}}
{{- $project := .Values.global.project -}}
{{- $environment := .Values.global.environment -}}
{{- $domain := .Values.global.domain -}}
{{- printf "%s.%s.%s.%s" $group $project $environment $domain -}}
{{- end -}}

{{/* Return the proper notes custom ingress host. */}}
{{- define "notes.custom.ingress.host" -}}
{{- $ingressHost := .Values.ingress.host -}}
{{- printf "%s://%s" "http" $ingressHost -}}
{{- end }}

{{/* Define all backend environment vars in the format key:value. */}}
{{- define "backend.envs" -}}
{{- range $KEY, $VALUE := .Values.deployment.backend.envs }}
- name: {{ $KEY }}
  value: {{ $VALUE | quote }}
{{- end -}}
{{- end -}}

{{/* Define all frontend environment vars in the format key:value. */}}
{{- define "frontend.envs" -}}
{{- range $KEY, $VALUE := .Values.deployment.frontend.envs }}
- name: {{ $KEY }}
  value: {{ $VALUE | quote }}
{{- end -}}
{{- end -}}

{{/* Define all mysql environment vars in the format key:value. */}}
{{- define "mysql.envs" -}}
{{- range $KEY, $VALUE := .Values.mysql.envs }}
- name: {{ $KEY }}
  value: {{ $VALUE | quote }}
{{- end -}}
{{- end -}}

{{/* Define custom replicas strategy. */}}
{{- define "replicas.strategy.definition" -}}
type: {{ .Values.strategy.type }}
rollingUpdate:
  maxSurge: {{ .Values.global.replicaCount }}
  maxUnavailable: {{ .Values.strategy.rollingUpdate.maxUnavailable }}
{{- end -}}

{{/* Define custom resources. */}}
{{- define "default.resources.definition" -}}
limits:
  cpu: {{ .Values.resources.limits.cpu }}
  memory: {{ .Values.resources.limits.memory }}
requests:
  cpu: {{ .Values.resources.requests.cpu }}
  memory: {{ .Values.resources.requests.memory }}
{{- end -}}

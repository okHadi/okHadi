---
date: '2024-01-01'
title: 'Backend and DevOps Engineer'
company: 'Syslify'
location: 'UK, Remote'
range: 'June 2021 - December 2025'
url: 'https://syslify.com/'
---

- Developed, maintained, and deployed multi-stage Dockerized Flask and Express applications across both serverless (AWS Lambda/Lambdalith) and managed (ECS Fargate, EC2) infrastructure for multiple production systems
- Migrated CodeCommit, CodePipeline, and manual infrastructure to GitHub and Terraform-based IaC for multi-million-dollar startup clients, managing AWS, GCP, Cloudflare, and GitHub resources with improved reliability and reproducibility
- Managed GitHub infrastructure with Terraform, ensuring granular permissions and secure, reproducible operations across environments
- Designed and maintained CI/CD pipelines across GitHub Actions and GitLab CI, with Docker layer caching and build optimizations significantly reducing pipeline times
- Provisioned self-hosted GitHub Actions runners on AWS Fargate, reducing CI costs by ~90%; automated on-demand operations (database modifications, WAF access list updates, state lock removal) via GitHub Actions workflows
- Implemented blue/green deployments on ECS Fargate using CloudFormation, CodePipeline, and CodeDeploy; designed a hotfix strategy enabling rapid production fixes by selectively bypassing GitHub status checks
- Implemented granular access to production secrets in GitHub Actions by configuring GitHub Environments, and migrated pipelines from long-lived keys to temporary credentials via OIDC
- Implemented organization-wide SSO with Microsoft Entra ID for AWS services, strengthened RBAC, and configured Firebase Authentication with custom roles for admin-based access control
- Built a custom observability stack: Bash and Python monitoring scripts with Slack and PagerDuty alerts; deployed Datadog agents on AWS EC2 and ECS Fargate to monitor services including ElastiCache — improving issue detection and response times by 50%
- Configured CloudFront functions with AWS WAF to secure internal development endpoints with password-protected access, eliminating unauthorized access attempts; managed DNS and WAF configurations through Terraform
- Developed disaster recovery plans including multi-region AWS RDS snapshot replication and Cognito user pool backups for high availability
- Deployed static React sites using CloudFront + S3 and Cloudflare Pages for high availability and performance
- Developed and deployed a Lambdalith ExpressTS application for serverless auto-scaling on AWS Lambda
- Improved AWS Security Hub score from ~60% to ~80% by remediating findings across IAM, networking, and compute
- Optimized infrastructure by rightsizing EC2 and non-production environments, reducing costs by ~70% while maintaining performance
- Managed and tuned OpenSearch clusters for production search workloads, improving performance and reliability

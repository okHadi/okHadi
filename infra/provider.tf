terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5"
    }
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 5.5.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"

  # Required for R2.
  # These options disable S3-specific validation on the client (Terraform) side.
  skip_credentials_validation = true
  skip_region_validation      = true
  skip_requesting_account_id  = true

  endpoints {
    s3 = "https://7ae1de37f9adbd35d53ec81b6c1cb99b.r2.cloudflarestorage.com"
  }
}

provider "cloudflare" {
  api_key = var.CLOUDFLARE_API_KEY
  email   = "khan.hadi2951@gmail.com"
}

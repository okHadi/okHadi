terraform {
  backend "s3" {
    bucket = "state-backend"
    key    = "cloudflare.tfstate"
    endpoints = {
      s3 = "https://7ae1de37f9adbd35d53ec81b6c1cb99b.r2.cloudflarestorage.com"
    }
    region = "us-east-1"

    skip_credentials_validation = true
    skip_region_validation      = true
    skip_requesting_account_id  = true
    skip_metadata_api_check     = true
    skip_s3_checksum            = true
  }
}

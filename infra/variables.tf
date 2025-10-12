variable "CLOUDFLARE_API_KEY" {
  description = "Cloudflare API key for authentication"
  type        = string
  sensitive   = true
}

variable "cloudflare_account_id" {
  description = "Cloudflare account ID"
  type        = string
  default     = "7ae1de37f9adbd35d53ec81b6c1cb99b"
}

variable "cloudflare_zoneid_mhadi_dev" {
  description = "Cloudflare zone ID for mhadi.dev"
  type        = string
  default     = "6716044af22030b79d8553bed037da3e"
}

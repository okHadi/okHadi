resource "cloudflare_workers_custom_domain" "mhadi_dev" {
  account_id  = var.cloudflare_account_id
  environment = "production"
  hostname    = "mhadi.dev"
  service     = "mhadi"
  zone_id     = var.cloudflare_zoneid_mhadi_dev
}

resource "cloudflare_workers_custom_domain" "www_mhadi_dev" {
  account_id  = var.cloudflare_account_id
  environment = "production"
  hostname    = "www.mhadi.dev"
  service     = "mhadi"
  zone_id     = var.cloudflare_zoneid_mhadi_dev
}

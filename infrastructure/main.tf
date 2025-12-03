terraform {
  required_version = ">= 1.5.0"
  required_providers {
    hcloud = {
      source  = "hetznercloud/hcloud"
      version = "~> 1.57"
    }
  }
}

provider "hcloud" {
  token = var.hcloud_token
}

resource "hcloud_ssh_key" "default" {
  name       = "local-key"
  public_key = var.ssh_public_key
}

resource "hcloud_firewall" "default" {
  name = "allow-ssh-http-https"

  # Allow inbound SSH (22), HTTP (80), and HTTPS (443)
  rule {
    direction  = "in"
    protocol   = "tcp"
    port       = "22"
    source_ips = ["0.0.0.0/0", "::/0"]
    description = "Allow SSH"
  }

  rule {
    direction  = "in"
    protocol   = "tcp"
    port       = "80"
    source_ips = ["0.0.0.0/0", "::/0"]
    description = "Allow HTTP"
  }

  rule {
    direction  = "in"
    protocol   = "tcp"
    port       = "443"
    source_ips = ["0.0.0.0/0", "::/0"]
    description = "Allow HTTPS"
  }

  # Allow all outbound traffic (default safe)
  rule {
    direction = "out"
    protocol  = "tcp"
    port      = "1-65535"
    destination_ips = ["0.0.0.0/0", "::/0"]
    description = "Allow all outbound TCP"
  }

  rule {
    direction = "out"
    protocol  = "udp"
    port      = "1-65535"
    destination_ips = ["0.0.0.0/0", "::/0"]
    description = "Allow all outbound UDP"
  }
}

resource "hcloud_server" "vm" {
  name        = "cx23-hel1"
  server_type = "cx23"         # cheapest in your request
  image       = "ubuntu-22.04" # LTS cloud image
  location    = "hel1"         # Helsinki
  ssh_keys    = [hcloud_ssh_key.default.id]

  firewall_ids = [hcloud_firewall.default.id]

  # Cloud-init user data installs Docker & Docker Compose plugin
  user_data = file("${path.module}/cloud-init.yaml")
}

output "ipv4_address" {
  description = "Server IPv4 address"
  value       = hcloud_server.vm.ipv4_address
}

output "server_id" {
  value = hcloud_server.vm.id
}

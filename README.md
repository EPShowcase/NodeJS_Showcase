# EP Showcase

### Node.js server

Purpose: API for mobile client

Technology: Loopback

Database: MongoDB

## Install

1. Install Node.js
1. Install MongoDB
1. Add database and user to MongoDB
1. Download app sources
1. Install Node.js modules
1. Install pm2 to manage node apps
1. Start app with pm2

## Configure AWS

#### Add Inbound rule to Security Group

* Type: Custom TCP Rule
* Protocol: TCP
* Port range: 3001
* Source: 0.0.0.0/0
* Description: Node.js app

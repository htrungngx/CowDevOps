#!/bin/bash

FRONTEND_PATH='/home/htrung_jobs/CowDevOps/frontend'
BACKEND_PATH='/home/htrung_jobs/CowDevOps/backend'
REPO_URL='https://github.com/htrungngx/CowDevOps.git'
PROJECT_DIR='CowDevOps'

# Install dependencies 
sudo apt update -y && sudo apt upgrade -y
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
source ~/.bashrc
nvm install 18 
npm install -g npm@latest
npm install -g pm2

# Function to deploy the backend
deploy_backend() {
    echo "Deploying backend..."
    cd $BACKEND_PATH
    echo "Installing dependencies..."
    rm -rf node_modules package-lock.json
    npm install
    echo "Starting backend with PM2..."
    pm2 start npm --name "backend" -- run dev
}

# Function to deploy the frontend
deploy_frontend() {
    echo "Deploying frontend..."
    cd $FRONTEND_PATH
    echo "Installing dependencies..."
    rm -rf node_modules package-lock.json
    npm install
    echo "Building frontend..."
    npm run build
    echo "Starting frontend with PM2..."
    pm2 start npm --name "frontend" -- start
}


# Kill all running PM2 processes
echo "Killing all running PM2 processes..."
pm2 kill

pm2 start ecosystem.config.js

echo "Deployment complete."

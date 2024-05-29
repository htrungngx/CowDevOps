#!/bin/bash

FRONTEND_PATH='/home/htrung_jobs/CowDevOps/frontend'
BACKEND_PATH='/home/htrung_jobs/CowDevOps/backend'
REPO_URL='https://github.com/htrungngx/CowDevOps.git'
PROJECT_DIR='CowDevOps'


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

# Deploy backend
deploy_backend

# Deploy frontend
deploy_frontend

echo "Deployment complete."

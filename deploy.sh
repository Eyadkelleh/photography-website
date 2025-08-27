#!/bin/bash

# Vercel Deployment Script for Photography Website
# Run this script to deploy to Vercel

echo "🚀 Starting Vercel Deployment Process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo -e "${YELLOW}Vercel CLI not found. Installing...${NC}"
    npm install -g vercel
    if [ $? -ne 0 ]; then
        echo -e "${RED}❌ Failed to install Vercel CLI${NC}"
        exit 1
    fi
fi

# Check if user is logged in to Vercel
echo -e "${BLUE}📋 Checking Vercel authentication...${NC}"
if ! vercel whoami &> /dev/null; then
    echo -e "${YELLOW}Please login to Vercel:${NC}"
    vercel login
    if [ $? -ne 0 ]; then
        echo -e "${RED}❌ Vercel login failed${NC}"
        exit 1
    fi
fi

# Run build test
echo -e "${BLUE}🔨 Testing build...${NC}"
npm run build
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Build failed. Please fix errors before deploying.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build successful!${NC}"

# Ask for deployment type
echo -e "${YELLOW}Choose deployment type:${NC}"
echo "1) Preview deployment (default)"
echo "2) Production deployment"
read -p "Enter choice (1 or 2): " deployment_choice

# Deploy based on choice
if [ "$deployment_choice" = "2" ]; then
    echo -e "${BLUE}🚀 Deploying to production...${NC}"
    vercel --prod
else
    echo -e "${BLUE}🚀 Creating preview deployment...${NC}"
    vercel
fi

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Deployment successful!${NC}"
    echo -e "${BLUE}📱 Your photography website is now live!${NC}"
    echo ""
    echo -e "${YELLOW}Next steps:${NC}"
    echo "1. Configure environment variables in Vercel dashboard"
    echo "2. Set up custom domain if needed"
    echo "3. Monitor deployment in Vercel dashboard"
    echo ""
    echo -e "${BLUE}💡 Tip: Use 'vercel --prod' for production deployments${NC}"
else
    echo -e "${RED}❌ Deployment failed. Check the error messages above.${NC}"
    exit 1
fi
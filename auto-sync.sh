#!/bin/bash
#
# Auto-sync script for Zuberi Luxury Website
# This script automatically commits and pushes changes to GitHub
#

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🔄 Auto-sync starting...${NC}"

# Change to the project directory
cd "/Users/abdulazizgossage/StudioProjects/zuberi luxury website/zuberi-luxury"

# Check if there are any changes
if git diff-index --quiet HEAD --; then
    echo -e "${GREEN}✅ No changes to sync${NC}"
    exit 0
fi

# Add all changes
echo -e "${YELLOW}📝 Adding changes...${NC}"
git add .

# Check if there are staged changes
if git diff-index --quiet --cached HEAD --; then
    echo -e "${GREEN}✅ No changes to commit${NC}"
    exit 0
fi

# Create commit message with timestamp
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
COMMIT_MESSAGE="Auto-sync: Updates from $TIMESTAMP

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"

# Commit changes
echo -e "${YELLOW}💾 Committing changes...${NC}"
git commit -m "$COMMIT_MESSAGE"

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Changes committed successfully!${NC}"
    echo -e "${YELLOW}🚀 Pushing to GitHub...${NC}"
    
    # The post-commit hook will handle the push
    echo -e "${GREEN}✅ Auto-sync completed!${NC}"
else
    echo -e "${RED}❌ Failed to commit changes${NC}"
    exit 1
fi
# Remove existing node_modules to prevent conflicts
rm -rf frontend/node_modules
rm -rf backend/node_modules   # fixed typo from 'backened'

# Docker has specific installation instructions for each operating system.
# Please refer to the official documentation: https://docker.com/get-started/

# Pull the Node.js Docker image (use Node 18-alpine as per assignment)
docker pull node:18-alpine

# Create a Node.js container and start a shell session
docker run -it --rm --entrypoint sh node:18-alpine

# Inside the container, verify Node.js version
node -v   # Should print something like "v18.x.x"

# Verify npm version
npm -v    # Should print npm version compatible with Node 18

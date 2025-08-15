#!/bin/bash

# Deploy script for Linked-Ly portfolio
echo "🚀 Building Linked-Ly portfolio..."

# Build the project
npm run build

echo "✅ Build completed successfully!"
echo "📁 Build output in dist/ folder"
echo ""
echo "🌐 To deploy to GitHub Pages:"
echo "   1. Commit and push your changes to the main branch"
echo "   2. GitHub Actions will automatically build and deploy"
echo "   3. Your site will be available at: https://bengold1999.github.io/linked-ly/"
echo ""
echo "🔧 To test locally:"
echo "   npm run preview"
echo ""
echo "📝 To manually deploy to other hosting providers:"
echo "   Upload the contents of the dist/ folder"

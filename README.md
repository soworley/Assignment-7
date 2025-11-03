# Unit 10: CI/CD Pipeline Resources for Recipe Sharing Application

This repository contains the test files and GitHub Actions workflow needed for Unit 10's CI/CD pipeline assignment.

## What's Included

### Test Suite Files
- `backend/tests/api.test.js` - API endpoint tests for all CRUD operations
- Updated `backend/package.json` - Includes Jest and Supertest dependencies
- Updated `backend/server.js` - Modified for testing with in-memory storage and module exports
- `frontend/src/test/App.test.jsx` - Utility function and API integration tests
- Updated `frontend/package.json` - Includes Vitest testing dependencies
- Updated `frontend/vite.config.js` - Configured for testing environment

### GitHub Actions Workflow
- `.github/workflows/deploy.yml` - Complete CI/CD pipeline configuration for your Recipe Sharing app

## Installation Instructions

1. **Copy the test files** to your Recipe Sharing Application repository
2. **Copy the GitHub Actions workflow** to `.github/workflows/deploy.yml` in your repository
3. **Install backend dependencies**:
   ```bash
   cd backend
   npm install
   ```
4. **Install frontend dependencies**:
   ```bash
   cd frontend
   npm install
   ```

## Running Tests Locally

**Backend tests**:
```bash
cd backend
npm test
```

**Frontend tests**:
```bash
cd frontend
npm test
```

## What the Tests Cover

### Backend Tests
- ✅ `GET /api/recipes` - Retrieve all recipes
- ✅ `POST /api/recipes` - Create new recipe
- ✅ `GET /api/recipes/:id` - Get specific recipe
- ✅ `DELETE /api/recipes/:id` - Delete recipe
- ✅ `GET /api/health` - Health check endpoint
- ✅ Input validation and error handling

### Frontend Tests
- ✅ Recipe data validation functions
- ✅ Cooking time formatting utilities
- ✅ API URL construction
- ✅ Error handling for network failures

## GitHub Actions Workflow

The provided `deploy.yml` workflow automatically:
1. **Runs tests** on every push to main branch
2. **Builds Docker images** if tests pass
3. **Deploys to Google Cloud Run** if build succeeds
4. **Prevents deployment** if any step fails

## Important Notes

- Test files are designed to work with your existing Recipe Sharing Application structure
- Backend tests use in-memory storage instead of database for testing reliability
- GitHub Actions workflow is pre-configured - just copy and configure your secrets
- All tests should pass locally before setting up your CI/CD pipeline
- The workflow automatically deploys when tests pass....
# Demo Guide for Presenters

## Setup Requirements
- VS Code with GitHub Copilot and Copilot Chat extensions
- Node.js installed
- Git installed
- Empty workspace for demonstrations

## Demo 1: JSDoc Generation

### Initial Setup
1. Open `geometryUtils.js` with undocumented functions
2. Show how unclear the code is without documentation

### Live Demo Steps
1. **Inline Suggestions**
   - Place cursor above `calculateArea` function
   - Wait for Copilot suggestion
   - Show multiple suggestions with Tab
   - Accept the best one

2. **Copilot Chat**
   - Ask: "Help me document the error handling for calculatePerimeter"
   - Show how to integrate the suggested content
   - Ask: "What's a good example to add to this documentation?"

3. **Copilot Edits**
   - Select all functions
   - Open command palette: "Copilot: Apply Edit"
   - Request: "Add JSDoc documentation to all geometry functions"
   - Review and accept changes

### Key Points to Emphasize
- Context awareness of suggestions
- Quality of generated examples
- Consistency in documentation style
- Time saved vs manual writing

## Demo 2: API Documentation

### Initial Setup
1. Open `recipeApi.js` with undocumented endpoints
2. Show empty `recipe-swagger.yaml` file

### Live Demo Steps
1. **Copilot Chat**
   - Ask: "Help me document the /recipes POST endpoint"
   - Show how to convert chat response to OpenAPI format
   - Ask about best practices for error responses

2. **Inline Suggestions**
   - Add endpoint documentation manually
   - Show how Copilot suggests similar patterns
   - Complete request/response examples

3. **Copilot Edits**
   - Generate example recipes for testing
   - Add error documentation
   - Document rating system

### Key Points to Emphasize
- Structured documentation format
- Consistency across endpoints
- Complete example coverage
- Error scenario documentation

## Demo 3: System Documentation

### Initial Setup
1. Create new `recipe-system-architecture.md`
2. Show empty Mermaid diagram template

### Live Demo Steps
1. **Copilot Chat**
   - Ask: "Help me create a recipe management system architecture diagram"
   - Show how to refine the diagram
   - Ask about scalability documentation

2. **Inline Suggestions**
   - Document caching strategy
   - Show database schema documentation
   - Document search functionality

3. **Copilot Edits**
   - Generate deployment guide
   - Add monitoring documentation
   - Create backup procedures

### Key Points to Emphasize
- Visual documentation
- System scalability
- Operational concerns
- Maintainability focus

## Troubleshooting Tips
- If Copilot suggestions are slow, wait a moment
- If suggestions seem off, try rephrasing
- Keep examples simple and clear
- Have backup code ready just in case

## Time Management
- JSDoc Demo: 5 minutes
- API Documentation: 7 minutes
- System Documentation: 8 minutes
- Leave time for questions
# Diátaxis Documentation Prompts

Use these prompts with GitHub Copilot Chat to generate documentation that follows the Diátaxis framework. Each type serves a specific purpose and audience.

## 1. Tutorial Documentation (Learning-oriented)
Prompt: "Help me create a tutorial for {feature/concept} with the following requirements:
- Target audience: Beginners who are new to {technology}
- Clear learning objectives
- Step-by-step progression
- Hands-on exercises
- Working examples
- Success indicators for each step"

Deliverables:
- Prerequisites section
- Step-by-step instructions
- Working code examples
- Practice exercises
- Expected outcomes
- Troubleshooting tips
- Next steps guide

## 2. How-To Guides (Task-oriented)
Prompt: "Create a how-to guide for {specific task} that:
- Focuses on practical steps
- Assumes basic knowledge
- Addresses a specific problem
- Provides clear success criteria
- Includes common pitfalls
- Offers alternative approaches"

Deliverables:
- Problem statement
- Prerequisites
- Step-by-step instructions
- Validation steps
- Common issues section
- Related tasks
- Quick reference

## 3. Reference Documentation (Information-oriented)
Prompt: "Generate reference documentation for {API/library/system} that:
- Describes technical details comprehensively
- Maintains consistent structure
- Includes all parameters and returns
- Documents edge cases
- Provides usage examples
- Links related concepts"

Deliverables:
- API endpoints/functions catalog
- Parameter descriptions
- Return values
- Error codes
- Examples for each item
- Cross-references
- Version information

## 4. Explanation/Concepts (Understanding-oriented)
Prompt: "Help me write an explanation of {concept/architecture} that:
- Provides deep understanding
- Explains the why, not just how
- Connects related concepts
- Includes diagrams where helpful
- Addresses common misconceptions
- References industry standards"

Deliverables:
- Concept overview
- Background/context
- Core principles
- Visual diagrams
- Best practices
- Alternative approaches
- Further reading

## Best Practices for All Types

1. Structure
```markdown
# Title
## Overview/Purpose
## Main Content
## Additional Resources
## Next Steps
```

2. Content Guidelines
- Use clear, consistent terminology
- Include examples for complex concepts
- Link between related documentation
- Update version information
- Add timestamps for time-sensitive content
- Include validation methods

3. Writing Style
- Use active voice
- Keep sentences concise
- Break complex ideas into steps
- Use consistent formatting
- Include code blocks with syntax highlighting

## Examples

### Tutorial Example
```markdown
# Getting Started with JWT Authentication

## Learning Objectives
- Understand JWT structure
- Implement JWT in a Node.js API
- Secure endpoints with JWT

## Prerequisites
- Node.js installed
- Basic Express.js knowledge
- Code editor ready

## Steps
1. Setup project
2. Add JWT library
3. Create authentication endpoints
4. Implement middleware
5. Test the implementation

## Practice Exercise
Build a protected route that...
```

### How-To Example
```markdown
# How to Configure Redis Caching

## Problem
Improve API performance with Redis caching

## Steps
1. Install Redis
2. Configure connection
3. Implement cache middleware
4. Add cache invalidation
```

### Reference Example
```markdown
# Payment API Reference

## Endpoints

### POST /api/payments
Creates a new payment transaction

Parameters:
- amount (number, required)
- currency (string, required)
- description (string, optional)

Returns:
- 201: Payment created
- 400: Invalid parameters
- 500: Processing error
```

### Explanation Example
```markdown
# Microservices Communication Patterns

## Overview
Understanding how microservices communicate effectively

## Patterns
1. Synchronous (REST, gRPC)
2. Asynchronous (Message Queues)
3. Event-Driven

## Choosing a Pattern
Consider these factors...
```

## Using with GitHub Copilot

1. Start with the appropriate prompt template
2. Use Copilot Chat to:
   - Generate initial structure
   - Expand sections
   - Add examples
   - Validate technical accuracy

3. Use Copilot Edits to:
   - Format documentation
   - Add missing sections
   - Standardize style
   - Update examples

4. Use inline Copilot to:
   - Write code examples
   - Generate API descriptions
   - Create parameter lists
   - Add error descriptions
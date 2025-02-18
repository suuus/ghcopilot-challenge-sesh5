# Converting the Presentation to HTML

## Prerequisites
- Install the required tools:
  ```bash
  npm install -g @marp-team/marp-cli
  ```

## Export Instructions

1. **Export to HTML**
   ```bash
   marp slides.md --html --output slides.html
   ```

2. **Export to PDF** (optional)
   ```bash
   marp slides.md --pdf --output slides.pdf
   ```

3. **Export to PowerPoint** (PPTX)
   ```bash
   marp slides.md --pptx --output slides.pptx
   ```

   Note: PowerPoint export supports:
   - Slide transitions
   - Speaker notes (using HTML comments)
   - Image backgrounds
   - Custom themes

## PowerPoint-Specific Tips

### Adding Speaker Notes
Add notes using HTML comments after your slide content:
```markdown
# Slide Title

Slide content

<!--
Speaker notes go here
- Key point 1
- Key point 2
-->
```

### Customizing Slide Transitions
Use Marp directives at the start of your markdown:
```markdown
---
marp: true
transition: slide
---
```

## Presentation Tips

### Setting Up the Demo Environment
1. Open VS Code with the demo folder
2. Arrange windows for optimal visibility
3. Set up a second monitor if possible
4. Have test data ready

### Running the Demos
- Clear terminal before starting
- Use font size 16 or larger
- Use light theme for better visibility
- Have the demo guide open on your second screen

### Time Management
- Practice the demos beforehand
- Keep an eye on the clock
- Have fallback examples ready
- Leave room for questions

### Keyboard Shortcuts
- `Ctrl+Space`: Trigger Copilot suggestions
- `Ctrl+Shift+P`: Command palette for Copilot Edits
- `Ctrl+I`: Open Copilot Chat

Remember to test the presentation export and run through all demos before the actual presentation!
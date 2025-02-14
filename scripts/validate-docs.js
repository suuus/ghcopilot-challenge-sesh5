const fs = require('fs');
const path = require('path');

function validateDocumentation() {
    const challenge3Path = path.join(__dirname, '..', 'challenges', 'challenge3');
    const errors = [];
    let stretchGoalsCompleted = 0;

    // Check required files exist
    const requiredFiles = [
        'architecture.md',
        'security.md',
        'deployment/README.md',
        'diagrams/system-overview.md',
        'config/config-template.yaml'
    ];

    requiredFiles.forEach(file => {
        const fullPath = path.join(challenge3Path, file);
        if (!fs.existsSync(fullPath)) {
            errors.push(`Missing required file: ${file}`);
        }
    });

    // Check for diagrams
    const diagramsPath = path.join(challenge3Path, 'diagrams');
    if (fs.existsSync(diagramsPath)) {
        const diagrams = fs.readdirSync(diagramsPath);
        if (diagrams.length < 3) {
            errors.push('Less than 3 diagram files found');
        }
    }

    // Check architecture.md content
    const archPath = path.join(challenge3Path, 'architecture.md');
    if (fs.existsSync(archPath)) {
        const content = fs.readFileSync(archPath, 'utf8');
        const requiredSections = [
            'System Overview',
            'Component',
            'Technology Stack',
            'Data Flow'
        ];

        requiredSections.forEach(section => {
            if (!content.includes(section)) {
                errors.push(`Missing required section in architecture.md: ${section}`);
            }
        });
    }

    // Validate stretch goals
    const stretchGoals = {
        'api-evolution': ['versioning.md', 'migration-guide.md'],
        'interactive-docs': ['swagger-ui.html', 'interactive-diagrams/'],
        'localization': ['i18n/', 'cultural-guide.md'],
        'docs-as-code': ['.documentation-lint.json', 'docs-coverage.json'],
        'dev-experience': ['ide-setup.md', 'debugging-guide.md']
    };

    Object.entries(stretchGoals).forEach(([goal, files]) => {
        const allFilesExist = files.every(file => 
            fs.existsSync(path.join(challenge3Path, file))
        );
        if (allFilesExist) {
            stretchGoalsCompleted++;
        }
    });

    if (errors.length > 0) {
        console.error('Documentation validation failed:');
        errors.forEach(error => console.error(`- ${error}`));
        process.exit(1);
    } else {
        console.log('Documentation validation passed! 🎉');
        if (stretchGoalsCompleted > 0) {
            console.log(`Completed ${stretchGoalsCompleted} stretch goals! ${'⭐'.repeat(stretchGoalsCompleted)}`);
        }
        process.exit(0);
    }
}

validateDocumentation();
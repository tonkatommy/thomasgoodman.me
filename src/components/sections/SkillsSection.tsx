/**
 * =============================================================================
 * Skills Section Component
 * =============================================================================
 * 
 * Displays technical skills organised by category.
 * =============================================================================
 */

import type { Skill, SkillCategory } from '@/types';

// -----------------------------------------------------------------------------
// Skills Data
// -----------------------------------------------------------------------------

/**
 * Skills data organised by category
 * Type annotation ensures data matches Skill interface
 */
const skills: Skill[] = [
    // Frontend
    { name: 'React', level: 5, category: 'frontend' },
    { name: 'Next.js', level: 5, category: 'frontend' },
    { name: 'TypeScript', level: 4, category: 'frontend' },
    { name: 'Tailwind CSS', level: 5, category: 'frontend' },
    { name: 'HTML/CSS', level: 5, category: 'frontend' },
    // Backend
    { name: 'Node.js', level: 4, category: 'backend' },
    { name: 'Express', level: 4, category: 'backend' },
    { name: 'REST APIs', level: 5, category: 'backend' },
    // Database
    { name: 'PostgreSQL', level: 4, category: 'database' },
    { name: 'MongoDB', level: 4, category: 'database' },
    // DevOps
    { name: 'Docker', level: 3, category: 'devops' },
    { name: 'GitHub Actions', level: 4, category: 'devops' },
    { name: 'AWS', level: 3, category: 'devops' },
];

/**
 * Category display names
 */
const categoryLabels: Record<SkillCategory, string> = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Database',
    devops: 'DevOps & Cloud',
    tools: 'Tools',
    'soft-skills': 'Soft Skills',
};

// -----------------------------------------------------------------------------
// Skills Section Component
// -----------------------------------------------------------------------------

/**
 * Skills Section Component
 * 
 * @returns Skills section JSX
 */
export function SkillsSection(): JSX.Element {
    // Group skills by category
    const groupedSkills = skills.reduce(
        (acc, skill) => {
            if (!acc[skill.category]) {
                acc[skill.category] = [];
            }
            acc[skill.category].push(skill);
            return acc;
        },
        {} as Record<SkillCategory, Skill[]>
    );

    return (
        <section id="skills" className="section">
            <div className="container">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Skills & Technologies
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A selection of technologies and tools I work with
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {(Object.entries(groupedSkills) as [SkillCategory, Skill[]][]).map(
                        ([category, categorySkills]) => (
                            <div key={category} className="space-y-4">
                                <h3 className="font-semibold text-lg">
                                    {categoryLabels[category]}
                                </h3>
                                <div className="space-y-3">
                                    {categorySkills.map((skill) => (
                                        <div key={skill.name} className="space-y-1">
                                            <div className="flex justify-between text-sm">
                                                <span>{skill.name}</span>
                                                <span className="text-muted-foreground">
                                                    {skill.level}/5
                                                </span>
                                            </div>
                                            {/* Skill Level Bar */}
                                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-primary rounded-full transition-all duration-500"
                                                    style={{
                                                        width: `${(skill.level / 5) * 100}%`,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}

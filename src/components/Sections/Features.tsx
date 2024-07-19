import { Feature } from '../ui/Feature/Feature'

const FEATURES = [
    {
        title: 'Basic Text Formatting',
        description:
            'Easily format your text with bold, italic, and underline options to make your notes clear and organized.',
    },
    {
        title: 'Note Sorting',
        description:
            'Sort your notes by creation date, last modified date, or title to quickly find what you need.',
    },
    {
        title: 'Simple Search',
        description:
            'Use the built-in search feature to quickly find notes by title or content.',
    },
    {
        title: 'Insert Links',
        description:
            'Add hyperlinks to your notes to link to other notes or external websites, making your notes more interactive and informative.',
    },
    {
        title: 'Recent Notes',
        description:
            'Quickly access your most recently added or edited notes with a dedicated section for recent notes.',
    },
]

export function Features() {
    return (
        <section
            id="features"
            className="min-h-screen w-screen flex gap-24 px-24 flex-col text-white items-center justify-center"
        >
            <h2 className="tracking-widest text-6xl font-bold uppercase">
                Features
            </h2>
            <div className="grid lg:grid-cols-3 lg:grid-rows-2 grid-cols-1 gap-12">
                {FEATURES.map((feature) => (
                    <Feature key={feature.title} {...feature} />
                ))}
            </div>
        </section>
    )
}

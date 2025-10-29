export function AthleticismSection() {
  const activities = [
    {
      id: 1,
      name: 'BJJ',
      description: 'Brazilian Jiu-Jitsu'
    },
    {
      id: 2,
      name: 'Powerlifting',
      description: 'Strength Training'
    },
    {
      id: 3,
      name: 'Swimming',
      description: 'Aquatic Sports'
    }
  ]
  
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl mb-6">Athleticism</h2>
          <p className="text-white/60 text-lg max-w-2xl">
            Athletic pursuits that fuel creativity and discipline.
          </p>
        </div>
        
        {/* Activities grid - horizontal scroll */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex space-x-8 pb-4" style={{ width: 'max-content' }}>
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="group flex-shrink-0"
              >
                <div className="relative w-96 h-56 bg-gray-900 rounded-lg overflow-hidden mb-4">
                  {/* Blank image placeholder */}
                  <div className="w-full h-full bg-gray-800" />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl group-hover:text-white/80 transition-colors">
                    {activity.name}
                  </h3>
                  <div className="flex items-center space-x-3 text-sm text-white/50">
                    <span>{activity.description}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

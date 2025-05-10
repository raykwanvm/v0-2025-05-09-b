import { CalendarIcon, MapPinIcon, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import AnimatedSection from "./animated-section"

interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  description: string
}

export default function UpcomingEvents() {
  const events: Event[] = [
    {
      id: "1",
      title: "Introduction to Mindfulness Meditation",
      date: "June 15, 2025",
      time: "10:00 AM - 12:00 PM",
      location: "Main Meditation Hall",
      description:
        "A beginner-friendly session introducing the fundamentals of mindfulness meditation practice. Learn techniques to cultivate presence and awareness in daily life.",
    },
    {
      id: "2",
      title: "Zen and Tea Ceremony Workshop",
      date: "June 22, 2025",
      time: "2:00 PM - 4:30 PM",
      location: "Tea Garden Pavilion",
      description:
        "Experience the profound connection between Zen philosophy and the traditional tea ceremony. This workshop explores mindfulness through the ritual of tea preparation and consumption.",
    },
    {
      id: "3",
      title: "Silent Meditation Retreat Weekend",
      date: "July 5-7, 2025",
      time: "Begins Friday 6:00 PM",
      location: "Retreat Center",
      description:
        "A transformative weekend of silent meditation practice. This retreat offers an opportunity to deepen your practice through extended periods of sitting and walking meditation.",
    },
    {
      id: "4",
      title: "Mindful Movement: Yoga and Qigong",
      date: "July 12, 2025",
      time: "9:00 AM - 11:00 AM",
      location: "Movement Studio",
      description:
        "Explore the integration of mindfulness with gentle movement practices. This session combines elements of yoga and qigong to cultivate embodied awareness.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-sage-50">
      <div className="container px-4 md:px-6">
        <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-sage-800">Upcoming Events</h2>
          <p className="text-stone-700 md:text-xl/relaxed max-w-3xl">
            Join us for these transformative experiences designed to deepen your practice and connect with our
            community.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {events.map((event, index) => (
            <AnimatedSection key={event.id} delay={0.1 * index} className="h-full">
              <Card className="h-full border-sage-200 transition-all duration-300 hover:shadow-md overflow-hidden">
                <CardHeader className="pb-3 bg-stone-100">
                  <div className="space-y-1">
                    <h3 className="text-xl font-medium text-moss-700">{event.title}</h3>
                    <div className="flex items-center text-sm text-stone-600 space-x-4">
                      <div className="flex items-center">
                        <CalendarIcon className="mr-1 h-4 w-4 text-moss-600" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-1 h-4 w-4 text-moss-600" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-stone-600">
                      <MapPinIcon className="mr-1 h-4 w-4 text-moss-600" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="py-4">
                  <p className="text-stone-600">{event.description}</p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button
                    variant="outline"
                    className="w-full border-moss-300 text-moss-700 hover:bg-moss-50 hover:text-moss-800"
                  >
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5} className="mt-10 text-center">
          <Button className="bg-moss-600 hover:bg-moss-700 text-white transition-transform hover:scale-105" size="lg">
            View All Events
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}

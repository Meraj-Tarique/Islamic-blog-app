import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from 'lucide-react'

export default function Events() {
  const events = [
    {
      title: "Friday Prayer",
      date: "Every Friday",
      time: "1:00 PM",
    },
    {
      title: "Islamic Studies",
      date: "Every Saturday",
      time: "10:00 AM",
    },
    {
      title: "Community Iftar",
      date: "During Ramadan",
      time: "Sunset",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Upcoming Events</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="w-10 h-10 bg-[#C5A059] rounded-full flex items-center justify-center mb-4">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <CardTitle>{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{event.date}</p>
                <p className="text-gray-600">{event.time}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


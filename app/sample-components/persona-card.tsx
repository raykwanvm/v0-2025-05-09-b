import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import type { Persona } from "@/types/persona";

export interface Persona {
  name: string;
  title: string;
  age: number;
  occupation: string;
  location: string;
  goals: string[];
  painPoints: string[];
  behaviors: string[];
  needs: string[];
  quote: string;
  imgSrc: string;
}

interface PersonaCardProps {
  persona: Persona;
}

export function PersonaCard({ persona }: PersonaCardProps) {
  return (
    <Card className="h-full flex flex-col transition-all hover:shadow-lg">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16 border-2 border-slate-100">
            <AvatarImage
              src={`/placeholder.svg?height=64&width=64&text=${persona.name.charAt(
                0
              )}`}
              alt={persona.name}
            />
            <AvatarFallback>{persona.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-xl font-semibold">{persona.name}</h3>
            <p className="text-sm text-slate-500">{persona.title}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow pt-4 space-y-4">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <p className="text-sm text-slate-500">Age</p>
            <p className="font-medium">{persona.age}</p>
          </div>
          <div>
            <p className="text-sm text-slate-500">Location</p>
            <p className="font-medium">{persona.location}</p>
          </div>
        </div>

        <div>
          <p className="text-sm text-slate-500">Occupation</p>
          <p className="font-medium">{persona.occupation}</p>
        </div>

        <div className="italic text-slate-600 border-l-2 border-slate-200 pl-3 py-1">
          "{persona.quote}"
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-700 mb-1">Goals</p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            {persona.goals.map((goal, index) => (
              <li key={index}>{goal}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-700 mb-1">
            Pain Points
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            {persona.painPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-700 mb-1">Behaviors</p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            {persona.behaviors.map((behavior, index) => (
              <li key={index}>{behavior}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-700 mb-1">Needs</p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            {persona.needs.map((need, index) => (
              <li key={index}>{need}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
